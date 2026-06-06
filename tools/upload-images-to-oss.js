#!/usr/bin/env node

'use strict';

const crypto = require('crypto');
const fsSync = require('fs');
const fs = require('fs/promises');
const path = require('path');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp', '.svg']);
const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'source');
const DEFAULT_VAULT = '/Users/birdy/Documents/obsidian-notes-birdy';

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const explicitFiles = process.argv
  .slice(2)
  .filter((arg) => !arg.startsWith('--'))
  .map((arg) => path.resolve(ROOT, arg));
const testOss = args.has('--test-oss');

loadDotEnv(path.join(ROOT, '.env'));

const convertLinks = args.has('--convert-links') || process.env.CONVERT_STANDALONE_LINKS === 'true';

const config = {
  vaultDir: path.resolve(process.env.OBSIDIAN_VAULT || DEFAULT_VAULT),
  attachmentDir: process.env.OBSIDIAN_ATTACHMENT_DIR || 'attachments',
  ossPrefix: stripSlashes(process.env.OSS_PREFIX || 'blog/images'),
  publicUrl: trimTrailingSlash(
    process.env.OSS_PUBLIC_URL ||
      (process.env.OSS_BUCKET && process.env.OSS_REGION
        ? `https://${process.env.OSS_BUCKET}.${process.env.OSS_REGION}.aliyuncs.com`
        : '')
  ),
};

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

async function main() {
  if (testOss) {
    await testOssConnection();
    return;
  }

  const markdownFiles = await getMarkdownFiles();
  const attachmentIndex = await buildAttachmentIndex(path.join(config.vaultDir, config.attachmentDir));

  const plan = [];
  const uploads = new Map();
  const writes = [];

  for (const markdownFile of markdownFiles) {
    const content = await fs.readFile(markdownFile, 'utf8');
    const transformed = transformObsidianMarkdown(content);
    const replacements = findImageReplacements(transformed.content, markdownFile, attachmentIndex);
    const outputFile = resolveOutputFile(markdownFile);
    const fromVault = isVaultFile(markdownFile);

    let nextContent = fromVault
      ? ensureHexoFrontMatter(transformed.content, markdownFile, transformed.changes)
      : transformed.content;
    for (const replacement of replacements) {
      const objectKey = await makeObjectKey(replacement.localPath);
      const publicUrl = `${config.publicUrl}/${encodeURI(objectKey).replace(/%2F/g, '/')}`;

      plan.push({
        markdownFile: outputFile,
        localPath: replacement.localPath,
        objectKey,
        publicUrl,
      });

      uploads.set(replacement.localPath, objectKey);
      nextContent = nextContent.replaceAll(replacement.original, replacement.render(publicUrl));
    }

    for (const change of transformed.changes) {
      console.log(`${dryRun ? '[dry-run] ' : ''}${formatPath(markdownFile)} -> ${formatPath(outputFile)}: ${change}`);
    }

    if (nextContent !== content || outputFile !== markdownFile) {
      writes.push({ markdownFile: outputFile, nextContent });
    }
  }

  if (plan.length) {
    printPlan(plan);
  } else {
    console.log('No local images found in source markdown files.');
  }

  if (dryRun) {
    console.log('\nDry run only. No files changed and no images uploaded.');
    return;
  }

  if (uploads.size) {
    validateOssConfig();
    const OSS = require('ali-oss');
    const client = new OSS({
      region: process.env.OSS_REGION,
      bucket: process.env.OSS_BUCKET,
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    });

    for (const [localPath, objectKey] of uploads) {
      if (await ossObjectExists(client, objectKey)) {
        console.log(`Skipped existing ${objectKey}`);
        continue;
      }

      await client.put(objectKey, localPath);
      console.log(`Uploaded ${localPath} -> ${objectKey}`);
    }
  }

  for (const write of writes) {
    await fs.writeFile(write.markdownFile, write.nextContent, 'utf8');
  }
}

function resolveOutputFile(markdownFile) {
  const relativeToRoot = path.relative(ROOT, markdownFile);
  if (!relativeToRoot.startsWith('..') && !path.isAbsolute(relativeToRoot)) {
    return markdownFile;
  }

  const relativeToVault = path.relative(config.vaultDir, markdownFile);
  if (!relativeToVault.startsWith('..') && !path.isAbsolute(relativeToVault)) {
    return path.join(SOURCE_DIR, '_posts', path.basename(markdownFile));
  }

  return markdownFile;
}

function isVaultFile(markdownFile) {
  const relativeToVault = path.relative(config.vaultDir, markdownFile);
  return !relativeToVault.startsWith('..') && !path.isAbsolute(relativeToVault);
}

function formatPath(filePath) {
  const relativeToRoot = path.relative(ROOT, filePath);
  if (!relativeToRoot.startsWith('..') && !path.isAbsolute(relativeToRoot)) return relativeToRoot;
  return filePath;
}

async function testOssConnection() {
  validateOssConfig();
  const OSS = require('ali-oss');
  const client = new OSS({
    region: process.env.OSS_REGION,
    bucket: process.env.OSS_BUCKET,
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  });

  const objectKey = [config.ossPrefix, `.codex-oss-test-${Date.now()}.txt`].filter(Boolean).join('/');
  await client.put(objectKey, Buffer.from(`oss test ${new Date().toISOString()}\n`, 'utf8'));
  await client.delete(objectKey);
  console.log(`OSS upload/delete test passed: ${objectKey}`);
}

async function ossObjectExists(client, objectKey) {
  try {
    await client.head(objectKey);
    return true;
  } catch (error) {
    if (error && (error.status === 404 || error.code === 'NoSuchKey')) return false;
    throw error;
  }
}

async function getMarkdownFiles() {
  const configuredFiles = splitList(process.env.OBSIDIAN_PREPARE_FILES || '').map((file) =>
    path.resolve(ROOT, file)
  );
  const selectedFiles = [...explicitFiles, ...configuredFiles];

  if (!selectedFiles.length) {
    return findFiles(SOURCE_DIR, (file) => file.endsWith('.md'));
  }

  const markdownFiles = [];
  for (const file of selectedFiles) {
    if (!file.endsWith('.md')) {
      throw new Error(`Selected file is not a Markdown file: ${file}`);
    }
    const stat = await fs.stat(file).catch(() => null);
    if (!stat || !stat.isFile()) {
      throw new Error(`Selected Markdown file does not exist: ${file}`);
    }
    markdownFiles.push(file);
  }
  return [...new Set(markdownFiles)];
}

function transformObsidianMarkdown(content) {
  const changes = [];
  let next = content;

  next = transformCallouts(next, changes);
  next = transformAdmonitionCodeBlocks(next, changes);
  if (convertLinks) {
    next = transformStandaloneExternalLinks(next, changes);
  }

  return { content: next, changes };
}

function ensureHexoFrontMatter(content, markdownFile, changes) {
  const defaults = buildHexoFrontMatterDefaults(markdownFile);
  const parsed = parseFrontMatter(content);

  if (!parsed) {
    changes.push('added Hexo front matter');
    return `${renderFrontMatter(defaults)}\n${content.replace(/^\s+/, '')}`;
  }

  let changed = false;
  const lines = parsed.frontMatter.split('\n');
  const presentKeys = new Set();
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^([A-Za-z_][\w-]*):/);
    if (!match) continue;

    const key = match[1];
    presentKeys.add(key);
    if (key === 'date' && line.trim() === 'date:') {
      lines[index] = `date: ${defaults.date}`;
      changed = true;
    }
  }

  const additions = [];
  for (const [key, value] of Object.entries(defaults)) {
    if (presentKeys.has(key)) continue;
    additions.push(renderFrontMatterField(key, value));
    changed = true;
  }

  if (!changed) return content;

  changes.push('filled missing Hexo front matter fields');
  const frontMatter = lines.join('\n');
  return `---\n${frontMatter}${frontMatter.endsWith('\n') ? '' : '\n'}${additions.join('\n')}\n---${parsed.body}`;
}

function buildHexoFrontMatterDefaults(markdownFile) {
  return {
    title: path.basename(markdownFile, path.extname(markdownFile)),
    aside: 'true',
    tags: [],
    categories: [],
    keywords: '',
    description: '',
    top_img: '',
    mathjax: 'true',
    abbrlink: '',
    date: formatHexoDate(new Date()),
    updated: '',
    comments: '',
    cover: '',
    toc: '',
    toc_number: '',
    copyright: '',
    copyright_author: '',
    copyright_author_href: '',
    copyright_url: '',
    copyright_info: '',
    katex: '',
    aplayer: '',
    highlight_shrink: '',
  };
}

function parseFrontMatter(content) {
  if (!content.startsWith('---\n')) return null;
  const endIndex = content.indexOf('\n---', 4);
  if (endIndex === -1) return null;
  const closeEndIndex = content.indexOf('\n', endIndex + 4);
  return {
    frontMatter: content.slice(4, endIndex + 1).replace(/^\n/, ''),
    body: closeEndIndex === -1 ? '' : content.slice(closeEndIndex),
  };
}

function renderFrontMatter(fields) {
  return `---\n${Object.entries(fields)
    .map(([key, value]) => renderFrontMatterField(key, value))
    .join('\n')}\n---`;
}

function renderFrontMatterField(key, value) {
  if (Array.isArray(value)) return `${key}:`;
  return `${key}: ${value}`;
}

function formatHexoDate(date) {
  const pad = (value) => String(value).padStart(2, '0');
  return [
    date.getFullYear(),
    '-',
    pad(date.getMonth() + 1),
    '-',
    pad(date.getDate()),
    ' ',
    pad(date.getHours()),
    ':',
    pad(date.getMinutes()),
    ':',
    pad(date.getSeconds()),
  ].join('');
}

function transformCallouts(content, changes) {
  const lines = content.split('\n');
  const output = [];
  let changed = false;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^>\s*\[!([A-Za-z-]+)\]([+-])?\s*(.*)$/);
    if (!match) {
      output.push(lines[index]);
      continue;
    }

    const type = mapAdmonitionType(match[1]);
    const title = match[3].trim();
    const body = [];

    index += 1;
    while (index < lines.length && lines[index].startsWith('>')) {
      body.push(lines[index].replace(/^>\s?/, ''));
      index += 1;
    }
    index -= 1;

    output.push(`{% note ${type} %}`);
    if (title) output.push(`**${title}**`);
    output.push(...body);
    output.push('{% endnote %}');
    changed = true;
  }

  if (changed) changes.push('converted Obsidian callout blocks to Hexo note tags');
  return output.join('\n');
}

function transformAdmonitionCodeBlocks(content, changes) {
  let changed = false;
  const next = content.replace(/```ad-([A-Za-z-]+)\n([\s\S]*?)```/g, (_whole, rawType, rawBody) => {
    const lines = rawBody.replace(/\n$/, '').split('\n');
    const meta = {};
    while (lines.length) {
      const match = lines[0].match(/^([A-Za-z-]+):\s*(.*)$/);
      if (!match) break;
      meta[match[1].toLowerCase()] = match[2].trim();
      lines.shift();
    }
    if (lines[0] === '') lines.shift();

    const type = mapAdmonitionType(rawType);
    const title = meta.title || '';
    changed = true;
    return [`{% note ${type} %}`, title ? `**${title}**` : '', ...lines, '{% endnote %}']
      .filter((line) => line !== '')
      .join('\n');
  });

  if (changed) changes.push('converted Obsidian Admonition code blocks to Hexo note tags');
  return next;
}

function transformStandaloneExternalLinks(content, changes) {
  let changed = false;
  const next = content.replace(/^(\s*)\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)\s*$/gm, (whole, indent, title, url) => {
    if (whole.includes('{% link')) return whole;
    changed = true;
    return `${indent}{% link ${title}, , ${url} %}`;
  });

  if (changed) changes.push('converted standalone external Markdown links to Hexo link tags');
  return next;
}

function mapAdmonitionType(type) {
  const normalized = type.toLowerCase();
  const map = {
    note: 'info',
    info: 'info',
    todo: 'info',
    tip: 'success',
    hint: 'success',
    success: 'success',
    check: 'success',
    done: 'success',
    question: 'warning',
    help: 'warning',
    warning: 'warning',
    caution: 'warning',
    attention: 'warning',
    failure: 'danger',
    fail: 'danger',
    missing: 'danger',
    danger: 'danger',
    error: 'danger',
    bug: 'danger',
    example: 'default',
    quote: 'default',
    cite: 'default',
  };
  return map[normalized] || normalized;
}

function findImageReplacements(content, markdownFile, attachmentIndex) {
  const replacements = [];

  collectMatches(content, /!\[([^\]]*)\]\(([^)]+)\)/g, (match) => {
    const rawUrl = cleanMarkdownUrl(match[2]);
    const localPath = resolveLocalImage(rawUrl, markdownFile, attachmentIndex);
    if (!localPath) return;
    replacements.push({
      original: match[0],
      localPath,
      render: (url) => `![${match[1]}](${url})`,
    });
  });

  collectMatches(content, /!\[\[([^\]]+)\]\]/g, (match) => {
    const parsed = parseObsidianTarget(match[1]);
    if (!isImagePath(parsed.target)) return;
    const localPath = resolveLocalImage(parsed.target, markdownFile, attachmentIndex);
    if (!localPath) return;
    replacements.push({
      original: match[0],
      localPath,
      render: (url) => `![${parsed.alt}](${url})`,
    });
  });

  collectMatches(content, /<img\b[^>]*\bsrc=(["'])(.*?)\1[^>]*>/gi, (match) => {
    const rawUrl = match[2].trim();
    const localPath = resolveLocalImage(rawUrl, markdownFile, attachmentIndex);
    if (!localPath) return;
    replacements.push({
      original: match[0],
      localPath,
      render: (url) => match[0].replace(rawUrl, url),
    });
  });

  return dedupeReplacements(replacements);
}

function collectMatches(content, regex, callback) {
  let match;
  while ((match = regex.exec(content)) !== null) {
    callback(match);
  }
}

function resolveLocalImage(rawTarget, markdownFile, attachmentIndex) {
  const target = decodeURIComponent(rawTarget).trim();
  if (!target || isRemote(target) || target.startsWith('#')) return null;
  if (!isImagePath(target)) return null;

  const candidates = [
    path.resolve(path.dirname(markdownFile), target),
    path.resolve(ROOT, target),
    path.resolve(config.vaultDir, target),
    path.resolve(config.vaultDir, config.attachmentDir, target),
  ];

  const basename = path.basename(target);
  if (attachmentIndex.has(basename)) candidates.push(...attachmentIndex.get(basename));

  return firstExistingImage(candidates);
}

function firstExistingImage(candidates) {
  for (const candidate of candidates) {
    try {
      const stat = fsSync.statSync(candidate);
      if (stat.isFile()) return candidate;
    } catch {
      // Try the next path.
    }
  }
  return null;
}

async function makeObjectKey(localPath) {
  const content = await fs.readFile(localPath);
  const hash = crypto.createHash('sha1').update(content).digest('hex').slice(0, 10);
  const ext = path.extname(localPath).toLowerCase();
  const name = sanitizeName(path.basename(localPath, ext));
  return [config.ossPrefix, `${name}-${hash}${ext}`].filter(Boolean).join('/');
}

async function buildAttachmentIndex(attachmentRoot) {
  const index = new Map();
  const files = await findFiles(attachmentRoot, isImagePath).catch(() => []);
  for (const file of files) {
    const basename = path.basename(file);
    const matches = index.get(basename) || [];
    matches.push(file);
    index.set(basename, matches);
  }
  return index;
}

async function findFiles(dir, predicate) {
  const result = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'public') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...(await findFiles(fullPath, predicate)));
    } else if (entry.isFile() && predicate(fullPath)) {
      result.push(fullPath);
    }
  }
  return result;
}

function parseObsidianTarget(value) {
  const [target, sizeOrAlias] = value.split('|');
  const trimmedTarget = target.trim();
  return {
    target: trimmedTarget,
    alt: sizeOrAlias && !/^\d+(x\d+)?$/.test(sizeOrAlias.trim()) ? sizeOrAlias.trim() : path.basename(trimmedTarget),
  };
}

function dedupeReplacements(replacements) {
  const seen = new Set();
  return replacements.filter((replacement) => {
    const key = `${replacement.original}\0${replacement.localPath}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function printPlan(plan) {
  console.log(`Found ${plan.length} local image reference(s):`);
  for (const item of plan) {
    console.log(`- ${path.relative(ROOT, item.markdownFile)}: ${item.localPath}`);
    console.log(`  -> ${item.publicUrl}`);
  }
}

function validateOssConfig() {
  const required = ['OSS_REGION', 'OSS_BUCKET', 'OSS_ACCESS_KEY_ID', 'OSS_ACCESS_KEY_SECRET'];
  const missing = required.filter((name) => !process.env[name]);
  if (!config.publicUrl) missing.push('OSS_PUBLIC_URL');
  if (missing.length) {
    throw new Error(`Missing OSS config: ${missing.join(', ')}`);
  }
}

function cleanMarkdownUrl(value) {
  return value.trim().replace(/^<|>$/g, '').split(/\s+["'][^"']*["']$/)[0];
}

function isRemote(value) {
  return /^(https?:|data:|mailto:|#)/i.test(value);
}

function isImagePath(value) {
  return IMAGE_EXTENSIONS.has(path.extname(value.split('?')[0]).toLowerCase());
}

function sanitizeName(value) {
  return value
    .normalize('NFKD')
    .replace(/[^\w.-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'image';
}

function stripSlashes(value) {
  return value.replace(/^\/+|\/+$/g, '');
}

function trimTrailingSlash(value) {
  return value.replace(/\/+$/g, '');
}

function splitList(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadDotEnv(filePath) {
  if (!fsSync.existsSync(filePath)) return;

  const content = fsSync.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const equalsIndex = trimmed.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (!key || process.env[key] !== undefined) continue;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}
