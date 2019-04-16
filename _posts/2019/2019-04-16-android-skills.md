---
layout: post
title: 玩机
date: 2019-04-16 13:30
categories: essay
tags: adb Magisk AR Android
---

#### Magisk
我并不是玩机党，但以前也曾有过刷机和root的经验。刷机是按教程做的，直到现在也不明白其中的原理；root则更简单了，直接用的现成工具，不过在更新系统后就不适用了。大概是想起当年刷机时的繁琐，看到正统的root方法就觉得麻烦，买了新手机后，虽然有root的念头，但一直都没有动手。

昨天，看了一篇有关Magisk的文章，安装只需要几行命令，便突然想试一下，但等到自己真的操作起来，才发现作者的教程写得太简略。不过，在几经查询之后，我终于稀里糊涂地装好了Magisk，但自己与几年前刷机时相比还是没多少长进啊。

root需要解锁bootloader，这会丢失手机中的数据，虽然知道这一点，但我嫌麻烦并没有备份，事后才觉得后悔，花了一晚上的时间也没装完以前的应用。

我root手机的初衷，只是想卸载用不到的系统应用，比如Play Music和Duo。但装好Magisk之后，却发现自己并不会用，而且这两个App也不是非卸载不可，于是开始为花了那么多时间折腾手机感到后悔。后来，终于找到一个叫Debloater的模块，可以卸载系统应用。首先需要安装终端应用，然后在终端里依次输入`su`和 `debloat`，接下来按指示操作即可。成功卸载Play Music和Duo后，我总算觉得没白费工夫。

#### adb
在root手机的过程中，最大的收获不是Magisk，而是学到了几个命令，这对安卓开发者来说只是基础，但却让我这个外行觉得很新鲜。

adb是帮助安卓设备与电脑通信的开发工具，可以通过Homebrew安装，命令是`brew cask install android-platform-tools`。手机连接电脑需要打开开发者模式中的USB调试功能，然后在终端输入`adb devices`即可查看已连接的设备。

adb可以用来传输文件、安装和卸载应用，这也是我能用到的功能。`adb pull`可以将手机文件拷贝到电脑，`adb push`则可以将电脑文件发送到手机，这种传输方式的速度非常快，可以达到30M/s以上。`adb install`和`adb uninstall`用来安装和卸载手机应用。

#### Pixel Camera
很早之前便羡慕Pixel相机的AR功能，也查过在一加上实现的教程，觉得麻烦就放弃了。这次想着，既然手机都root了，还怕这点麻烦吗，遂决定搞一下。在非Pixel上使用谷歌相机和AR模式只需四步，而且不用root手机。首先，下载修改过的谷歌相机[^1]；其次，安装AR Core；然后，安装修改过的Playground或 AR Stickers;[^2]最后，通过[APKMirror](https://www.apkmirror.com/)或Google Paly下载贴纸。至于谷歌相机与自带相机孰优孰劣，我这种小白就不知道了。

{% include image.html url="greenwall-hulk.jpg" caption="绿山墙的绿巨人" %}


[^1]: 下载地址：[Google Camera Port](https://www.celsoazevedo.com/files/android/google-camera/)
[^2]: 下载地址：[ARCore, AR Stickers, and Playground](https://www.celsoazevedo.com/files/android/google-camera/ar/)
