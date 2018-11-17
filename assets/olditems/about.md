---
layout: page 
title: 关于
header: 关于本站
---

<h3>关于本站</h3>
- 2015.01.03：从godaddy购买域名jubeny.com  
- 2015.01.04：从老薛主机购买虚拟空间，搭建Wordpress博客  
- 2015.01-2018.01：极少更新博客但频繁更换主题  
- 2017.05-2017.10：在子域dairy.jubeny.com上写日记  
- 2017.09.10：第一次购买付费主题*Island*  
- 2018.01.08：放弃Wordpress，用Jekyll在Github Pages上搭建静态博客  
- 2018.01.11：引入LiveRe作为第三方评论系统  
- 2018.05.12：开始使用HTTPS，并将DNS解析从DNSPod迁移至HE.net  
- 2018.05.20：引入Valine评论系统取代LiveRe  
- 2018.07.22：使用Typekit的思源宋体作为主要字体  

<i class="fa fa-user-o"> </i> 本人
- 90后，就读于南京大学
- 好读书，不求甚解 ➥ [我读过的书](http://jubeny.com/assets/my-booklist/)
- 兴趣广泛，特长没有 ➥ [我在听的歌](https://open.spotify.com/user/ybaichfkjx5z3yyu2d6s2ocyp?si=hlDROl_ESn-JSzDk_boJZQ)
- 宠物是豹纹守宫，名字叫Rocchi

<i class="fa fa-folder-o"></i> 本站
- 2015年1月搭建Wordpress
- 2018年1月改用Jekyll

<i class="fa fa-paper-plane-o"></i> 联系
- 电报：[jubyshu](https://t.me/jubyshu)
- 邮箱：juby#jubeny.com

```javascript
$(document).ready(function() {
    var toc = $('.post-toc');
    var clientWidth = $(document).outerWidth(true);
    var clientHeight = $(document).outerHeight(true);
    var tocWrapper = $('.content-wrapper__inner');
    var twMargin = tocWrapper.css('margin-right');
    if (toc.outerHeight(true) < clientHeight*0.5 && tocWrapper.outerWidth(true) >750) {
        toc.css('visibility', 'visible');
        if (toc.outerWidth(true) < 100) {
            tocWrapper.css('margin-right', '140px');
        } else {
            tocWrapper.css('margin-right', 1.2 * toc.outerWidth(true) + 'px');
        }
        tocWrapper.css('margin-left', '20px');
    } else {
        toc.css('visibility', 'hidden');
        tocWrapper.removeAttr('style');
    }
    if (!!toc) {
        $(window).bind('resize', tocShow, false);
    }
});
```
