---
layout: post
title: 一加6T升级LineageOS及root
date: 2022-08-26 22:40:25+08:00
categories: journal
tags: 工具 好玩
---

我的手机是一加 6T，也不知用了多少年了，大概是从它甫一上市到现在吧。我对硬件的要求不高，除了相机有点渣外，它仍然能很好地满足我的需求，甚至和第一天买来时没有什么差别。

手机拿到手的第一件事就是更换系统以及 root，这也是买一加的理由，一开始是由氢换成了氧，后来换成 LineageOS 18，一直用到现在，应该也有几年的时间了。

手机用的久了，难免觉得平凡和无聊，既然不想换机，总得寻找一点新鲜感。于是，扔掉了手机壳，撕掉了手机膜，顿时觉得焕然一新。无意间看到 LineageOS 已经有了 19 版本，心里也开始发痒想升级，在稳定与新鲜之间几经踌躇，还是去追求新鲜感吧。

刷 LineageOS 已经是很久以前的事，操作早就忘记了，去官网看了一下教程，很清晰也很简洁，照着做就可以了。不过，我尝试跨版本升级的步骤没有成功，干脆重装了。这次重装系统没有刷入 Play Services，因为我觉得自己已经可以摆脱谷歌了；也没有打算 root，主要是觉得麻烦。

目前使用的谷歌系 App 只有一个 Play Books，可以用 ReadEra 代替，Voice 和 YouTube 用网页版即可。然而，让我没想到的是，不可或缺的 Strava 竟然是依赖谷歌服务的，无奈之下只能屈服。

谷歌服务有一个替代方案是 MicroG，它需要手机支持 signature spoofing，而 LineageOS 是不支持的。文档提供了很多解决方案，我最终的选择是 Magisk + LPosed + FakeGApps。对于我目前的处境来说，这是成本最低的，反正手机迟早都会 root 的，我终究是无法拒绝 root 的便利。

上次安装 Magisk 也是很久的事了，过程早就忘光，只是觉得麻烦。这次看了作者写的指导，与自己以前用的方法有所不同，但更简单了。root 之后，一开始用的是 Riru 版的 LPosed，虽然解决了谷歌服务的问题，但周一上班的时候，由于忘记对公司的 App 隐藏 root，打不了卡，情急之下只好先卸载了 Magisk，之后使用 Zygisk 版的 LPosed 便两全其美了。

LineageOS 19 是 Android 12 版本，在 UI 上与 Android 11 差别还挺大的，其他方面倒没有太大的感受。相比新版本系统带来的新鲜感，反而是升级的过程更有乐趣，正是因为可以自由地玩机，所以我是永远不会去用封闭系统的。
