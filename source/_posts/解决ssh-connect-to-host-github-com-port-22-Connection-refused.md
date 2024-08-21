---
title: 'Github | 解决ssh Connection refused'
aside: true
abbrlink: aa87ba6f
date: 2024-03-22 21:16:59
updated:
tags: [Github, SSH]
categories: 技术
keywords: Github, ssh, connection refused, port 22 
description:
top_img: 
cover: https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/2024-08-21_11-50-59.png
comments: true
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax: true
katex:
aplayer: 
highlight_shrink:
---
#ssh: connect to host github.com port 22: Connection refused

默认配置文件在 ~/.ssh/config
如果没有则 touch ~/.ssh/config

vim ~/.ssh/config
在其中添加这几行：
```shell
Host github.com
  Hostname ssh.github.com
  Port 443
```
