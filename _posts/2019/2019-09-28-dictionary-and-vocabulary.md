---
layout: post
title: 词典与词汇
date: 2019-09-28 23:00
categories: essay
tags: 工具 阅读
---

### 词典

我念高中的时候，大概是人手一本牛津高阶词典的情形，但我已记不清自己是否经常使用它。智能手机时代来临后，纸质词典对我来说成了明日黄花，远不如下载一个App方便，况且还不用花钱。记得以前朋友为了准备考试，在手机用扇贝记单词，我也跟风下载了一个，但几年过去了，加起来的打卡天数却是寥寥无几。

其实，我还是买过正版词典的，叫什么德汉XX大词典。那时，我从心理上沉迷学习德语，也曾蹭过几节德语课，但时间不够，自己又懒，完全跟不上进度，不过还有一点自学的想法。学习语言自然少不了查词，而手机上只有一款收费的德语词典，于是就买了老师推荐的德汉XX大词典。最后的结果却是，词典买来后我没用过一次，后来送给了同学。

所以说，无论是纸质词典，还是手机词典，如果没有一颗学习的心，都只是徒有其表的摆设而已。

学习日语后，开始在手机上使用沪江小D，同时也可查英语单词。后来，由于App广告增多以及功能减少，遂将其卸载，转而购买了MOJi辞书，这样一来就没有英语词典了，即使不常用，这个摆设也不能少。最初考虑重新使用扇贝，但这个App占用内存太大，索要权限太多，已经不符合我现在的标准，遂将其排除名单之外，最终选择了欧陆词典。

近来又有了学习英语的热情，因而使用词典的频率也增多，欧陆词典虽然功能挺丰富，但很多单词却并无解释，还得从例句中琢磨意思，有点不能满足我的需求了。于是，我的目光开始转向剑桥、牛津、朗文等知名词典。这些词典的网页版做得挺好，但手机App就不敢恭维了，像我比较重视的生词同步功能根本没有。综合考虑之后，我决定使用剑桥进阶学习词典（CALD）。虽然羞于开口，但还是要说一下，CALD的价格是25.99美元，我只好从网上找了一个免费版。在Kindle上，我没有找到CALD，于是装了牛津进阶学习词典（OALD）。

今天，在Kindle上查一个单词**pompous**时，将OALD和CALD对比了一下，OALD的解释是这样的：<q>showing that you think you are more important than other people, especially by using long and formal words</q>，CALD的解释则很简洁：<q>too serious and full of importance</q>。相比之下，我觉得OALD的解释更清楚，于是又在手机上下了一个OALD，当然也是免费版。

以一个单词的解释来评价两本词典的优劣显然有点武断，但从Play Store上的评分来看，OALD的App评分为3.9，CALD只有2.4，至少可以说牛津App的体验要好于剑桥。在我看来，两款App做的都挺~~简洁~~简陋，功能也差不多，OALD的界面稍微好一点，单词和例句的发音也可以联网获取而不必本地下载，CALD却要下载200多M的内容。至于网页版，剑桥支持的语言多一些，牛津似乎没有英中词典。


### 词汇

由于长时间不学习，我的英语词汇少得可怜，平时遇到生词，勤快的时候查一下意思，过后遇不到也不再复习，根本记不住意思。

目前在读小说**Leviathan Wakes**，也强迫自己看点纽约客和经济学人的文章，还要不时地阅读一些文档，因此遇到生词的场合很多，而想把这些生词汇集在一起却并不太方便。

在浏览器中，我使用的是沙拉查词，可以自己选择添加多个词典，也可以保存生词。生词除了会在本地记录外，也可以用WebDAV同步，保存的格式为JSON。生词保存的内容有自动翻译、上下文、网页标题和图标、网页链接以及时间戳，同时也可以自己添加笔记。我嫌麻烦，一般是直接保存，但问题在于自动翻译的内容辣眼睛，事后再看仍不知道意思，此外，一些网页无法抓取上下文，而保存的图标看起来又很多余。对于这些生词的处理，我是用R把JSON文件转为CSV，然后上传到Google Sheets，或许有一日会去看看。

说到看电子书，我使用的工具似乎有点太多了。不知为何，我的Kindle失去了下载功能，虽然不能与手机端同步，但至少查过的词会自动保存。在电脑上，iBook倒是挺友好，但词典功能有点弱，而且无法保存生词。calibre自带的阅读器支持多种格式，但查词需要跳转到网页，每查一个单词就要打开一个网页，简直让人崩溃。为了在Kindle以外的平台看书时保存生词，我只好用Play Books的网页版，这样可以借助于沙拉查词，不过，Play Books功能太少，词典更是垃圾。有时候，一章的内容我会切换多个工具才看完，同步和书签全凭大脑记忆，为了减少麻烦，现在也尽量看完一章再换工具。

Kindle的生词，保存在默认隐藏的`system`文件夹中，Mac上可以打开Finder输入路径`/Volumes/Kindle/system/vocabulary`定位，将`vocab.db`文件拷贝下来并用[DB Browser for SQLite](https://github.com/sqlitebrowser/sqlitebrowser)打开，查词记录就保存在`LOOKUPS`表中。我浏览了一下自己的记录，有很多日语词汇，于是想先把英语单词挑出来再导出表格。这个工作其实并不必在此进行，我只是想写条SQL语句而已，检验一下自己学过的知识还记得多少，结果表明，我已经忘得差不多了。`LOOKUPS`中有很多无用的信息，我只选取了有用的几项——单词、上下文和时间戳，生成一张新表，然后导出为CSV，这样就可以和沙拉查词的生词合并在一起了。

```SQL
CREATE TABLE ENGLISH AS
  SELECT word_key, usage, timestamp
  FROM LOOKUPS
  WHERE word_key REGEXP '^en:([A-z]+)'
```

做了这些华而不实的工作，如果不用心温故，也只是白费力气而已。当然，不管遇到多少生词，硬着头皮也要看下去，这一点也很重要。