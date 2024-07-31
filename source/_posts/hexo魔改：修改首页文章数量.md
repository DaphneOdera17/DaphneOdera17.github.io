---
title: hexo魔改 | 修改首页文章数量
aside: true
tags:
  - hexo
  - butterfly
categories: hexo魔改系列
keywords:
  - hexo
  - butterfly
  - 修改首页文章数量
description: 首页默认文章数量为 10，超过就会翻页，和侧边栏不协调。我们通过修改配置文件增加首页的文章数量
top_img: 'https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20240423194720.png'
cover: 'https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/20240423194720.png'
abbrlink: cec4690b
date: 2024-04-12 20:57:14
updated:
comments:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
---

# hexo魔改 | 修改文章数量
当我们首页文章数量大于 10 的时候，会发现出现分页情况。
然而首页下方还空着许多，和侧边栏明显不协调。
![b584c7a6449e74d0c4240dbc1a06f57.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/b584c7a6449e74d0c4240dbc1a06f57.png)
笔者一开始在主题配置文件中找了半天，结果没找到相应的配置。
结果最终，它在博客文件夹根目录下的 config,yml
我们找到下面的(大约在第65行)

```yml
# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
    path: ""hexo 修改文章数量
    per_page: 10
    order_by: -date
```
这个 **per_page** 属性也就是控制了每页的文章数量。我们将他修改为 16 或者更多。
最后->
```shell
hexo clean
hexo g
hexo d
```
