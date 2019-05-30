---
layout: post
title: 一个R爬虫与画图的简单实例
date: 2019-05-20 20:00
categories: note
tags: 好玩 工具
---

这几天一直在学习R语言，初步的感觉是语言本身不算太难，重要的是数据分析背后的理论与思想，同时后悔自己过去没有好好了解这方面的知识。

以下是我自己做的一个小练习，爬取了链家网上南京的租房信息并画了几张描述性的图，没什么困难的地方，也没什么特别的地方，其实并不值得拿出来说。

在R语言中，利用`rvest`包爬取静态网页非常方便，但我也只是会爬取简单的网页，复杂或动态网页便无能为力了。链家网的网页结构简单，其中南京租房信息共有100页，我选择获取租房的标题、价格和描述性信息这三类数据，并将其合并为tibble，实现代码如下：

```r
library(tidyverse)
library(rvest)

url <- 'https://nj.lianjia.com/zufang/pg'
link <- map2_chr(url, 1:100, paste0)
# 获取标题
titles <- link %>%
  map(. %>%
     read_html() %>%
     html_nodes('.content__list--item--title a') %>%
     html_text(trim = TRUE)
  ) %>% unlist()
# 获取描述性信息
descriptions <- link %>%
  map(. %>%
     read_html() %>%
     html_nodes('.content__list--item--des') %>%
     html_text(trim = TRUE)
  ) %>% unlist()
# 获取价格
price <- link %>%
  map(. %>%
     read_html() %>%
     html_nodes('.content__list--item-price em') %>%
     html_text(trim = TRUE)
  ) %>% unlist()
# 合并为tibble
renthouse <- tibble(title = titles, description = descriptions, price = price)
```

现在生成了一个3列的tibble，但description一列包含的信息比较芜杂，比如`建邺-万达广场 / 95㎡ /南 / 2室1厅1卫 / 中楼层 （34层）`，有区域、户型、朝向、楼层等多种信息，而且不是每条数据都有这些指标，因而难以有效利用。在这里，我进行了简单粗暴的处理，分列之后舍弃了残缺不全的数据，样本总量也从3000条减为2314条。

```r
c_desc <- c('district', 'location', 'square', 'direction', 'room', 'floor')
c_dist <- c('秦淮', '雨花台', '建邺', '鼓楼', '江宁', '玄武', '栖霞', '浦口')
rent_house <- renthouse %>% 
  separate(description, into = c_desc, sep = '/|-') %>%   # 描述性信息分列
  filter(district %in% c_dist) %>%   # 过滤c_dist中的地区
  mutate_if(is.character, trimws) %>%   # 去除字符两端的空格
  separate(floor, into = c('building', 'floor')) %>%   # 楼层分列
	# 将square、floor和price转为数值型，用/替代direction中的空格
  mutate(square = parse_number(square), price = as.numeric(price), 
         floor = parse_number(floor), direction = gsub(' ', '/', direction))
```

经过上述步骤清洗后的tibble如下图所示，这样看起来就比较顺眼了。

{% include image.html url="njrent-tidy-tibble.png" caption="清洗后的数据表" %}

接下来是画图。用什么样的图能最直观、最清晰的表现数据的内容是一个问题，我也不太懂，于是随便画了几张。

```r
ggplot(rent_house, aes(district)) + 
  theme_minimal() + 
  geom_bar(fill = 'orange') + 
  geom_boxplot(aes(y = price, color = district), show.legend = FALSE) + 
  geom_text(stat = 'count', aes(label = ..count..), size = 2.5, color = 'gray54') + 
  scale_y_continuous(limits = c(0, 20000)) + 
  labs(title = '南京各区出租房屋价格分布', subtitle = '(数据来源：链家网；时间：2019-05-20)', 
       x = '地区', y = '价格/元', caption = 'Figure made by Juby') + 
  theme(text = element_text(family = 'STKaiti'), 
        plot.title = element_text(hjust = 0.5), 
        plot.subtitle = element_text(hjust = 0.5, size = 8), 
        plot.caption = element_text(color = 'darkgray')) + 
  coord_flip()
```

{% include image.html url="njrent-district-price.png" caption="各区出租房屋价格分布" %}

```r
ggplot(rent_house, aes(district)) + 
  theme_minimal() + 
  geom_bar(aes(fill = building)) + 
  labs(title = '各区出租房屋楼层分布', fill = '楼层') + 
  theme(text = element_text(family = 'STKaiti'),
       plot.title = element_text(hjust = 0.5), 
       axis.title.x = element_blank(), 
       axis.title.y = element_blank()) + 
  coord_polar()
```

{% include image.html url="njrent-district-floor.png" caption="各区出租房屋楼层分布" %}

```r
ggplot(rent_house, aes(square, price)) + 
  theme_minimal() + 
  geom_point(aes(color = district), alpha = 0.8) + 
  geom_smooth(se = FALSE) + 
  scale_x_continuous(limits = c(0, 300)) + 
  scale_y_continuous(limits = c(0, 20000)) + 
  labs(title = '出租房屋面积与价格', x = '房屋面积/平方米', y = '价格/元', color = '地区') + 
  theme(text = element_text(family = 'STKaiti'), 
        plot.title = element_text(hjust = 0.5))
```

{% include image.html url="njrent-square-price.png" caption="出租房屋面积与价格" %}