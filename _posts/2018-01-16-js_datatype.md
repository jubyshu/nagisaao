---
layout: post
title: JavaScript笔记——数据类型
date: 2018-01-16
tags: 学习
---

#### 1.综述
- ECMAScript有5种基本数据类型：Undefined、Null、Boolean、Number和String，还有一种复杂数据类型：Object。
- 检测给定变量的数据类型的操作符——`typeof`
#### 2.Undefined类型
- Undefined类型只有一个值，即特殊的undefined，在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。
- 对于尚未声明过的变量，只能执行一项操作，即使用typeof操作符检测其数据类型；对*未初始化*和*未声明*的变量执行typeof操作符都会返回undefined值。
#### 3.Null类型
- Null类型也只有一个值，即null。从逻辑角度来看，null值表示一个空对象指针，因而使用typeof操作符检测时会返回“object”。
- 如果定义的变量准备在将来用于保存对象，最好将该变量初始化为null。
#### 4.Boolean类型
- Boolean类型只有两个字面值：true和false。
- 要将一个值转化为其对应的Boolean值，可以调用转型函数`Boolean（）`。
#### 5.Number类型
##### 5.1浮点数值
- 对于极大或极小的数值，可以用e表示法表示的浮点数值表示，其值等于e前面的数值乘以10的指数次幂。
- 浮点数值计算会产生舍入误差的问题，比如0.1+0.2不等于0.3。
##### 5.2数值范围
- ECMAScript能表示的最小数值`Number.MIN_VAULE`,最大数值`Number.MAX_VAULE`。
- 确定一个数值是不是有穷，可以使用`isFinite()`函数。
##### 5.3NaN
- NaN（Not a Number）是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况。
- 任何涉及NaN的操作都会返回NaN；NaN与任何值都不相等，包括自身。
- 判断一个参数是否是NaN，可以使用`isNaN()`函数。
##### 5.4数值转换
- 把非数值转化为数值的3个函数：`Number()`、`parseInt()`和`parseFloat()`。
- parseFloat()函数在解析字符串时，建议无论在什么情况下都明确制定基数。
- parseInt()函数只解析十进制，没有用第二个参数指定基数的方法。
#### 6.String类型
- 字符字面量，也叫转义序列，用于表示非打印字符，或具有其他用途的字符。
- 字符串是不可变的，一旦创建，其值就不能改变。
- 把一个值转换为字符串有两种方式：`toString()`和`String()`。
#### 7.Object类型
- 对象是一组数据和功能的集合，可以执行`new`操作符来创建。
- Object是所有对象的基础，所有对象都具有Object的属性和方法。

