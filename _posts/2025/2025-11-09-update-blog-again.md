---
layout: post
title: 博客再更新
date: 2025-11-09 14:58:00+08:00
categories: journal
tags: 工具
---

公司虽推荐或强制某些工作流程使用内部AI工具，但我的工作无涉，日常生活也无涉，所以AI盛行已久，我却接触不多，兴趣阑珊。妻的工作就大不同了，有以AI融合为主题的作业或比赛，以至于要求我帮忙。我虽不懂编程，但亦知道设计方案越详细，AI的输出便也越符合预期。让妻细化了设计，再加之我的简单修改，终于做出一个可用的网页应用。

书接[上回](https://jubeny.com/2025/11/blog-update-log/)，更新博客便是在ChatGPT的指导下完成，相比使用搜索引擎便捷又准确，可惜当年无它。周末且有空，兴趣又激发，便想借助AI再优化一下博客，毕竟多年不动，恍如隔世。

------

在手机上部署博客的概率几乎为零，也实无必要，但既有Termux这等工具，试试又何妨。Termux支持直接安装Ruby，但bundle更新总因nokogiri失败，ChatGPT提供的方法亦不能解决，好在只有jekyll-algolia插件依赖此库，而上次更新中已弃用此插件，注释掉无用代码后即完美解决。

启动Jekyll服务时又遇新报错，ChatGPT分析是dart-sass不支持Android，但我将启动命令由`jekyll server`改为`bundle exec jekyll server`，竟解决了此问题。能在手机上本地构建自己的博客，遂了过去之愿。

-----

重构了[读书](https://jubeny.com/book/)页面的读书列表。之前的方式是纯手工添加书目，改完后虽亦需手工维护，但实现了样式与数据的解耦。将阅读的书目保存在csv文件中，再通过liquid模板循环读取，从维护角度看并没有优化，但结构上却是好了。代码是ChatGPT写的，略加调整便可使用。

```liquid
{% raw %}
{% assign years = site.data.books | map: 'year' | uniq %}
{% for year in years %}
### {{ year }} <span class="post_count">({{ site.data.books | where: "year", year | size }})</span>
{:.collapsible}

<div class="collcontent">
<ol>
  {% assign books_of_year = site.data.books | where: "year", year %}
  {% for book in books_of_year %}
    <li>
      {{ book.title }},{{ book.author }},{{ book.translator }},{{ book.publisher }},{{ book.pubyear }}
    </li>
  {% endfor %}
</ol>
</div>
{% unless forloop.last %}<hr/>{% endunless %}
{% endfor %}
{% endraw %}
```

对于这种书籍页面，更优的方式应该是调用现有API，省去自己维护列表的麻烦。不过书目的更新并不是高频操作，有些书在网站上也查不到，自我维护倒也无妨。

在豆瓣搜书时发现一个恼人之处，从纸书上抄下的ISBN，数字之间带横杠时搜不到书，去掉横杠才能搜到，感觉有点不甚合理。

顺便一提，把博客的javascript脚本发给ChatGPT进行了审视优化，也在其他地方做了一点改进，比如用必应的每日一图作为OpenGraph图片，不再一一赘述了。
