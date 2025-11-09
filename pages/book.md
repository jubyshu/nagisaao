---
title: 读书
layout: page
group: navigation
permalink: /book/
description: A reader lives a thousand lives before he dies.
---

### 书架 <span class="post_count">({{ site.data.library | size }})</span>

------

<div class="book-show">
  <ul class="book-list">
    {% for book in site.data.library %}
      <li title="{{ book.title }} by {{ book.author }}">
        <a href="https://neodb.social/search?q={{ book.title }}" target="_blank" rel="noopener">
          <img src="//{{ site.cdn }}/gh/jubyshu/rosemary/cover/{{ book.ISBN | default: 'default' }}.jpg" 
               alt="{{ book.title }}" loading="lazy" />
        </a>
      </li>
    {% endfor %}
  </ul>
</div>

### 读书 <span class="post_count">({{ site.data.books | size }})</span>

------

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
