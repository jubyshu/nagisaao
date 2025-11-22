---
layout: post
title: R's Plots
date: 2024-11-16 20:59:54+08:00
categories: journal
tags: 工具 好玩
---

读研时学过一段时间的R语言，虽未能助我求职，写毕业论文时倒用上了。R社区在Twitter上有个活动，叫做[#TidyTuesday](https://bsky.app/hashtag/TidyTuesday)，每周二分享一组数据供大家作图。闲来无事，我也参与过一段时间，以下便是当时画的图，收集于此权当纪念那段快乐的学习时光吧。

{% assign plots = "cran_codes.png, national_parks.png, mtcars.png, pizza_party.png, powerlifting.png, roman_emperors.png, school_diversity.png, simpsons_guests.png, thriller_movies.png, women_worldcup.png, bird_strike.jpg, china_suicide.jpg, freedom_status.jpg, fuel_station.jpg, netflix.jpg, r4ds_membership.jpg, mlb_champions.gif, nuclear_explosions.gif" | split: ", " %}

{% for plot in plots %}
{% include image.html url=plot caption="" %}
{% endfor %}
