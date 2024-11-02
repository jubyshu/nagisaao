---
layout: post
title: 体重和骑车数据上传Garmin
date: 2024-11-02 14:02:39+08:00
categories: journal
tags: 工具 好玩
---

使用Garmin Forerunner 245M已经快三年半了，当时为了记录跑步数据一冲动就买了，骑车时也当码表用。后来跑步少了，骑车也有了码表，它就用来看看时间、天气和心率，早上看看睡眠。

前段时间表带的卡扣断了，从网上买了一根便宜的表带替换。我对这个手表很满意，会继续用下去等它不能再用的那天，退役之后，下块手表还是买Garmin的。

Garmin记录了我的日常运动数据，便想把体重和骑车数据也整合在一起。我的码表是Bryton的（Garmin码表实在太贵了），数据可以同步Strava但不能连接Garmin，查了一下好像没有从Strava反向同步到Garmin的方案，只能采用手动方式上传数据了。

流程是这样的：

1. 码表连接手机的Bryton Active同步数据；
2. 在App上选择记录导出为Fit文件（之前的版本可以直接导出为.fit文件，更新版本后变成了.zip文件，还要再解压）；
3. 登录[Gamin Connect网页版](https://connect.garmin.com)，选择上传数据，上传导出的.fit文件。

虽然有点麻烦，但总归是一个办法。在这里要夸一下Bryton的App，一开始非常简陋难用，经过几次更新后，终于变得流畅好用了，这家公司还是有心的。

称体重用的是同事送的小米体脂秤，可以在手机上安装[Mi Scale Exporter](https://github.com/lswiderski/mi-scale-exporter)这款应用，作者有详细的使用指导。称体重竟然也是一个不容易坚持的习惯，对减肥不上心后也就不上称了。

一直担心自己的血压，一度还想买个Garmin Index BPM，记录血压数据，不知是否好用。
