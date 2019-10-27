---
layout: post
title: 每周闲话·其四
date: 2019-10-27 16:00
categories: journal
tags: 杂谈
---

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