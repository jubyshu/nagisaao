---
layout: post
title: 博客更新日志
date: 2025-11-05 22:56:29+08:00
categories: journal
tags: 工具
---

写内文已经很慵懒了，何况再整饬外观。本着能用就不动的原则，想一直维持现状，但难免遇到问题，若不修复难解强迫症。

### 删除邮件订阅

首页有一个邮箱订阅的选项，用Mailchimp的免费服务做的，本来就没有用处，后来发现服务失效，干脆删掉省事。

### 使用Algolia Crawler

博客有一个搜索页面，用处不大，仅是“五脏俱全”的执念，用jekyll-algolia插件做的。但一直使用的命令突然报错，怀疑是更新了什么依赖所致，又怀疑是免费服务到头了，最终却只是网络问题。

寻因时发现jekyll-algolia项目早已废弃，虽可继续使用，却正巧看到Netlify集成的Algolia Crawler插件，功能基本一致，遂转向更被推荐的后者。

更新后的搜索页面，在手机上点击搜索框后的显示有问题，发现与`z-index`的值有关，将自己的值与Algolia的调成一致便可修复。

### 更新Sass语法

因怀疑algolia命令行失效与Ruby版本有关，遂升级到3.4.7，再运行Jekyll时有sass的提示，`@import`语法已废弃。强迫症就是要消除所有提示，根据文档将`@import`改为了`@use`。

### 切换Ruby版本

Netlify部署用的Ruby版本还是2.7.1，不知为何sass的修改未生效，博客失去了所有的样式。Netlify用Ruby 3.0+版本部署时总是报错`Could not find mini_portile2-2.8.9 in locally installed gems`，本地明明没有这种问题。询问ChatGPT，最终采用的解决方式是在`Gemfile`中添加`gem "mini_portile2`"，本地执行`bundle update`后将`mini_portile2`写入到`Gemfile.lock`的依赖列表里。

明明只是想改一点，却牵连出许多，所以还是要抱定不更新的原则才好。但遇到问题解决问题，对小白来说又是一种快乐。
