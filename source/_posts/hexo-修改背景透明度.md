---
title: hexo魔改 | 修改卡片透明度
aside: true
tags:
  - hexo
  - butterfly
keywords:
  - hexo
  - butterfly
  - 透明度
description: hexo butterfly 主题修改卡片透明度
cover: >-
  https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/Snipaste_2025-02-13_23-43-44.png
mathjax: true
abbrlink: ae1606a8
date: 2025-02-13 23:37:37
updated:
categories:
top_img:
comments:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
katex:
aplayer:
highlight_shrink:
---

# hexo 魔改 | 修改卡片透明度
这是笔者自己瞎倒腾的。作为前端菜鸡一枚，大佬们随便看看就好~

我用的主题是 butterfly 4.12.0

## 分析
通过开发者工具可以看出来卡片的背景和 `--card-bg` 变量有关

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213225653539.png" alt="|1075" style="zoom:50%;" />

再在 `sources` 下的 `css` 文件夹下的 ` index.css ` 查找 `--card-bg`，可以看出来背景颜色和这个有关，是在这里体现。

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213225813444.png" alt="|1075" style="zoom: 50%;" />

然后继续查找这个变量。在 `:root` 下面找到，这个就是设置全局默认 -> 白天模式的。我已经调整过了。

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213230001150.png" alt="|575" style="zoom: 67%;" />

那么黑暗模式下的这个值又在哪呢？继续往下找。

看到这里有个 `[data-theme='dark']` 就是表示黑暗模式。

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213230117781.png" alt="|550" style="zoom:67%;" />

我试了一下在自己创建的 css 文件下写 light 模式和 dark 模式 --card-bg 的修改，但是会有小问题。所以我就用了暴力方法。找到 `index.css` 中这两个值定义的地方。

## light 模式调整
首先就是在主题文件夹下 source 目录下的 css 目录下找到 `var.styl` 

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213231230938.png" alt="|575" style="zoom:67%;" />

搜索 `card-bg` 原先这里是 `white` 我已经调整过了

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213231404579.png" alt="|575" style="zoom:67%;" />

后面这个 0.9 是透明度，当然，颜色也可以自己调整。
```styl
$card-bg = rgba(255, 255, 255, 0.9)
```

## dark 模式调整
进入 `_mode` 文件夹

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213231611829.png" alt="|550" style="zoom:67%;" />

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213231635595.png" alt="|600" style="zoom:67%;" />

打开 `darkmode.styl` 文件。也是搜索 `card-bg` 我这里已经调整过颜色

<img src="https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20250213232024104.png" alt="|600" style="zoom: 33%;" />

```styl
--card-bg: rgba(24, 22, 22, 0.8)
```

## 最重要的
不要忘记：
```shell
hexo clean
hexo g
hexo d
```
