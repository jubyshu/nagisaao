---
title: 標籤
layout: page
group: navigation
permalink: /tags/
---

### 標籤
{:#tag-index}

--------

{% for tag in site.tags %}
- [{{ tag[0] }}](/tags/{{ tag[0] }})
{% endfor %}

<!-- <div>
  {% for tag in site.tags %}
  {% capture tag_name %}{{ tag | first }}{% endcapture %}
  <h3 id="{{ tag_name }}-ref">{{ tag_name }}</h3><hr>
  <ul>
    {% for post in site.tags[tag_name] %}
    <li><a href="{{post.url}}">{{ post.title }}</a></li>
    {% endfor %} 
  </ul>
  {% endfor %}
</div> -->