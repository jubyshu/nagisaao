---
title: 往事
layout: page
group: navigation
permalink: /archive/
---

### 统计
<hr>
{% assign posts = site.posts | reverse %}
- 文章: <span class="post_num">{{ posts | size }}</span> 篇
- 字数: <span class="post_num">{{ site.data.total_word_count }}</span> 字

{% assign posts_by_year = posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year_group in posts_by_year reversed %}
{% assign year = year_group.name %}
{% assign year_count = year_group.size %}

<hr>
### {{ year }}<span class="post_count"> ({{ year_count }})</span>
{:.collapsible}
<ul class="collcontent">
  {% for post in year_group.items reversed %}
  <li>{{ post.date | date: '%m-%d' }} &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% endfor %}

<script>
  document.querySelectorAll('.collapsible+ul').forEach(year => {
    year.setAttribute('class', 'collcontent');
  });
</script>
