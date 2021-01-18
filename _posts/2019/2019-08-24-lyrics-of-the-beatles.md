---
layout: post
title: 披头士的歌词
date: 2019-08-24 15:30
categories: review
tags: 影音 好玩
ad: true
---

喜欢的乐队，听得久了，有时也会感到腻烦，但有一个例外，那就是披头士。可能是喜欢的披头士的歌太多，不论何时，总有一首能浸入心间。

披头士的歌，自己常听的大约有100多首，常听的专辑有「Love」「1」「The Beatles」「Sgt. Pepper's Lonely Hearts Club Band」「Abbey Road」和「Let It Be」这几张。至于他们到底写过多少首歌，我以前从未深究过这个问题，这日闲来无事查了一下，网上也没有明确的说法。

[The Beatles Bible](https://www.beatlesbible.com/songs/)总结了披头士录制过的所有歌曲，包括原创、翻唱等，共有322首。在原创歌曲的统计上，[UCR](https://ultimateclassicrock.com/every-beatles-song/)网站的一篇文章说有227首，[Vulture](https://www.vulture.com/2017/06/all-213-beatles-songs-ranked-from-worst-to-best.html)网站的文章则说有213首，Quora上有用户总结出了185首。我将[wikipedia](https://en.wikipedia.org/wiki/List_of_songs_recorded_by_the_Beatles)上的数据进行整理后发现，披头士的原创歌曲有187首，这其中不包含一些未发表和未完成的歌，以及「I Want to Hold Your Hand」和「She Loves You」的德语版。虽然还是不能断定具体的数字，但可以说披头士至少写了187首歌。在他们活跃的8年左右的时间里，差不多一到两周就会写一首新歌，可谓高产，这或许是只有天才才能做到的吧。

以前在微博上看到一种说法，披头士歌词中出现次数最多的单词是**Love**，而据[卫报](https://www.theguardian.com/music/datablog/2010/nov/16/beatles-lyrics-words-music-itunes) 上一篇文章的统计，使用最多的单词则是**You**。我也想亲自验证一下，于是从genius.com上获取了全部187首歌的歌词，在没有去掉停用词（stop words）的情况下，的确是**You**的使用次数最多，不过，我统计的频数与卫报的统计结果相差挺大的。在去掉停用词后，**Love**的出现次数变成最多了，但一些意义不大的语气词比如na、yeah、da等使用也很频繁，我相信光是「Hey Jude」就贡献了很多na的份额吧。在同样去掉这些词后，我绘制了频次超过20的单词的词云，其中**Love**出现了323次，**Girl**出现了112次。

{% include image.html url="beatles_lyrics_cloud.png" caption="Lyrics of The Beatles" %}

另外，我还对披头士的歌词做了一点简单的情感分析，使用AFINN词典对所有的单词进行打分，取值在-5至5之间，负值表示消极情感，正值表示积极情感，绘制了历年的对比和趋势图。平均来看，在披头士的歌词中，积极情绪还是占据主流的，但与消极情绪的差别并不是太大，没有很乐观，也不是很悲观，总体的情感得分在1附近波动。

{% include image.html url="beatles_lyrics_sentiment.png" caption="Sentiment in Lyrics of The Beatles" %}

我这样的统计显然不是很科学，只能等掌握了更多的知识后，再来好好研究披头士的歌词吧。

-------

Github: [代码](https://github.com/jubyshu/tidydata/tree/master/code) / [数据](https://github.com/jubyshu/tidydata/tree/master/data)