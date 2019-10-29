---
layout: post
title: 每周闲话·其四
date: 2019-10-27 16:00
categories: journal
tags: 杂谈
last_edited: 2019-10-30 00:40
---

### 10月29日

#### 恋爱使用说明

最近很喜欢听的一首歌，是西野加奈的「トリセツ」，意思是使用说明书。以前我应该听过这首歌，好像并不是这个名字，但我听歌的时候很少会看歌名，也有记错的可能。这是一首甜蜜的情歌，而我并不是想要恋爱了，只是听完后觉得心情舒畅。虽然欢欢的歌听多了会腻，但偶尔听一些还不错，就像梁静茹的情歌。焦虑的时候，无论听什么音乐都不入耳，能有一首让人开心的歌，也是一种幸运了。

#### 小百合的记忆

以前的一些文章，我最初是写在小百合上的，同时也有一些评论，虽然不多。由于小百合还没开放校外访问，想到自己终有一天也不能再登录，遂决定将站友的评论迁移出来，也算是一点纪念。

迁移小百合的评论没什么好方法，只能一条条登记，如果是直接在Leancloud的后台填写，无法更改评论的创建时间，但外部导入文件可以自定义`createdAt`字段。Leancloud支持的格式有json和csv，我选择了比较简单的csv，第一行是字段类型，第二行是字段名称，从第三行开始才是内容。我选择了几个必要的字段，先使用Google Sheets录入，然后下载为csv文件，这样比较方便。

有一个比较恼人的地方是，Leancloud的时间是UTC时区的**ISO 8601**格式，而小百合的时间格式则是`May 30 11:10:21 2014`这样。虽然评论数量不多，手动修改也不会花太长时间，但重复而单调的劳动毕竟是恼人的，遂想着用R一步搞定，写了个简单的转换函数，其实也并没有提高效率。

```r
library(lubridate)
library(stringr)
library(anytime)

iso_date <- function(x) {
  tidy_date <- paste0(str_extract(x, "[0-9]{4}$"), " ", str_replace(x, "[0-9]{4}$", ""))
  utc_date <- with_tz(ymd_hms(tidy_date, tz = "Asia/Shanghai"), tzone = "UTC")
  return(paste0(iso8601(utc_date), ".701Z"))
}
```

### 10月27日

#### 用R批量处理图片

因为某些原因，这两天把Valine评论换成了Deserts的版本，这样一来更换表情包也比较方便。我下载了一套Telegram上的Rick的贴纸，但原图有点大，文件名也要改，我不知道有什么批量处理的工具，加之需求简单，于是选择用R来完成这项工作。不过，我这样修改的文件名无法体现出表情的内容，而我又实在不知该如何给一些表情命名，加之缩小后的图片不太清晰，最终还是放弃了更换表情包。

```r
library(magick) # import function image_read, image_write, image_resize

# 批量修改文件名
img_path <- file.path("rmrick", list.files("rmrick", pattern = ".png"))
new_name <- paste0("rick", 1:length(img_path), ".png")
new_img_path <- paste0("rmrick/", new_name)
file.rename(img_path, new_img_path)

# 批量修改图片尺寸
img_resize <- function(path) {
  img <- image_read(path)
  new_img <- image_resize(img, "62x62")
  image_write(new_img, path = path, format = "png")
}
lapply(new_img_path, img_resize)

# 将文件名整理为数组形式
arr <- ""
for (i in 1:length(new_name)) {
  arr <- paste(arr, paste0("'", new_name[i],"'"), sep = ",")
}
paste0("[", substring(arr, 2), "]")
```

#### 烧钱的GCP

无意中打开Google Cloud，看到这个月已经消费了3200多日元，着实吓了一跳。刚开始试用GCP的时候，我在日本服务器上开了一个实例运行RStudio Server，但几乎没有用过，所以也没有产生多少费用。后来，又开了一个SQL实例和WordPress博客，而烧掉的钱大概来自于这两项服务。

打开账单，我却又看不太懂SKU所代表的服务。消费最高的产品是运行在亚太服务器实例上的Cloud SQL，我一开始以为这是WP的数据库，但现在觉得应该是为SQL开的Storage Bucket。第二位是运行RStudio Server的实例，费用似乎比往常要高。第三位是部署WP的实例，费用处于正常水平。从时间节点上来看，费用激增是从10月12日开始的，正好是建了WP博客后的一个月，但我记不清何时开的Storage Bucket了，所以不知到底是谁的锅，只能统统关掉它们了，反正我平时也不会去用。

{% include image.html url="gcp_bill.png" caption="谷歌云的账单" %}


* TOC
{:toc}