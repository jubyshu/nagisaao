---
title: 藏書
layout: page
group: navigation
permalink: /library/
description: 書非借不能讀也。
---

### 藏書

-------

手头所有的几本书，有的可卖，有的可送，有的就自己留着了。

新出版的书标价越来越高，连二手书也当自己是古董卖，我已经买不起书了；不知何时就拍拍屁股走人的生活，也不适合携带太多的书。

-------

<div class="book-show">
  <ul class="book-list">
	{% for book in site.data.library %}
	<li>
	  <a href="//search.douban.com/book/subject_search?search_text={{ book.name }}" target="_blank">
	  	<img src="//cdn.jsdelivr.net/gh/jubyshu/rosemary/cover/{{ book.ISBN }}.jpg" alt="{{ book.name }}" />
	  </a>
	</li>
	{% endfor %}
  </ul>
</div>