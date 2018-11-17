---
layout: post
title: Jekyll本地预览加速技巧
date: 2018-11-16 20:00
tags: 折腾
---

* 目录
{:toc}

由于对Jekyll本地预览的速度很不满意，但一时又不能迁移博客，遂从网上找了一些可以加速本地页面生成的方法，但大部分的效果并不是很理想。

#### 查看Jekyll Build详情

运行命令`jekyll serve --profile`或`bundle exec jekyll serve --profile`可以查看Jekyll对各个文件的调用次数、文件的大小以及花费的时间。以我的网站为例，详细数据是这样的：

```markdown
Filename                                 | Count |    Bytes |  Time
-----------------------------------------+-------+----------+------
_layouts/default.html                    |   168 | 2736.38K | 0.749
_includes/head.html                      |   168 |  359.14K | 0.414
_layouts/post.html                       |   145 | 1190.50K | 0.299
_includes/side-panel.html                |   168 |  518.75K | 0.172
_includes/new-old.html                   |   145 |   64.90K | 0.142
sitemap.xml                              |     1 |   17.98K | 0.126
pages/archive.html                       |     1 |   21.51K | 0.050
_includes/external.html                  |   168 |  285.30K | 0.028
_includes/social.html                    |   168 |  183.91K | 0.027
_includes/comments.html                  |   148 |  116.78K | 0.024
_includes/footer.html                    |   168 |   86.79K | 0.020
```

知道了拖后腿的文件所在，也才好对症下药，但其实能做的改进并不多。

#### 启用Incrumental模式

首先，在`_config.yaml`文件中设置`incrumental: true`，然后在本地预览时输入命令`jekyll serve --incrumental`或`jekyll serve -I`。在这种模式下，Jekyll只会检索有改动的文件并重新生成页面，因此速度会大大提升。但缺点是，该模式仍是实验性的，运行过程中可能会不稳定。

#### 生成部分页面

如果网站的文章太多，可以只预览一部分，命令为`jekyll serve --watch --limit_posts 1`。

#### 处理无用文件

对于Jekyll预览来说不需要的文件，比如`node_modules`等，可以在设置中进行排除`exclude: [node_modules, Gemfile, README.md]`。对于图片之类的静态文件，可以让Jekyll对它们不做处理`keep_files: [images]`。

#### 善用Liquid模板

Liquid是拖慢预览速度的罪魁祸首，要善用{%raw%}`{% include %}`{%endraw%}，少用循环语句。对于那些内容不会变化的页面，可以使用`jekyll-include-cache`插件进行缓存，命令为{%raw%}`{% include_cached %}`{%endraw%}，但对于动态生成内容的页面，直接使用则会出问题，需要用js加以控制。

#### 少用或不用插件

事实上，我们并不需要太多的插件（眼馋Hugo的shortcode），甚至连`jekyll-paginate`都不需要，因为很少有访客会去点击「上一页」「下一页」这样的按钮。

#### 替换代码渲染方式

Jekyll默认的代码渲染引擎是rouge，可以在设置中禁用：

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

替代的选择有`highlight.js`和`prism.js`等。

#### 移除HTML压缩

HTML compress也会影响Jekyll的预览速度，可以使用Cloudfare替代。

#### 升级Jekyll版本

开发者们一直在为改善Jekyll本地预览的速度而努力，因此可以将Jekyll升级到最新版本。但我觉得，如果很在意速度，不如一开始就选择Hugo。

上述方法我也使用了一些，但并没有什么效果，可能是我的生成速度已经达到限度而不能再优化了吧。

-----

参考：

[1]. [Increase Jekyll Build Speed](https://blog.webjeda.com/jekyll-build-speed/)

[2]. [Speed up your Jekyll builds](https://cloudcannon.com/tips/2017/12/08/speed-up-your-jekyll-builds/)

[3]. [Improving Jekyll build time](https://carlosbecker.com/posts/jekyll-build-time/)

