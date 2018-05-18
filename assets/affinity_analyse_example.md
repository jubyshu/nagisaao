---
layout: post
title: 亲和性分析
data: 2018-05-17
tags: 学习
---
* 目录:
{:toc}

#### 前言
最近在学习《Python数据挖掘入门与实践》[^1]这本书，对于没有基础又懒且笨的我来说，想要完全看懂还是很费劲的，好不容易顺完了第三章的代码，面对作者提出的问题仍是毫无思路。在后路受挫的时候，前面看过的内容却又都忘了，这样下去恐怕毫无收获。因此，便准备花点工夫把以前学过的东西整理一下，一来加强记忆，二来方便以后检索。当然，主要内容是抄书了，另外也尽可能加入一点自己的理解吧。

#### 亲和性分析
所谓亲和性分析，是根据样本个体之间的相似度，确定它们关系的亲疏。比如本例[^2]中，我们考虑一次购买两种商品的情况，可以得到这样的一条规则：
>如果一个人买了商品X，那么他很有可能购买商品Y。

作为实际应用，我们便可以在顾客购买商品X时，向其推荐商品Y，这就是**向上销售**（up-selling）。

#### 在Numpy中加载数据集
```python
import numpy as np

filename = 'affinity_dataset.txt'
f = np.loadtxt(filename)
n_samples, n_features = f.shape
features = ['bread', 'milk', 'cheese', 'apple', 'banana']

print(n_samples, n_features)
print(f[:5])
```
运行以上代码，输出结果为：
```python
100 5
[[0. 0. 1. 1. 1.]
 [1. 1. 0. 1. 0.]
 [1. 0. 1. 1. 0.]
 [0. 0. 1. 1. 1.]
 [0. 1. 0. 0. 1.]]
```
这个`np.ndarray`有100行、5列，其中每一行代表一条交易数据，每一列代表一种商品，1或0代表顾客是否该买了该商品。比如，从第一条交易数据中我们知道顾客购买了奶酪、苹果、香蕉，没有购买面包和牛奶。

#### 实现简单的排序规则
如前所述，我们需要找出“如果顾客购买了商品X，那么他很有可能购买商品Y”这样的规则。在找到规则后，还要判断其优劣，常用的方法有两种：支持度和置信度。

**支持度**是指数据集中规则应验的次数，在本例中为`valid_rules`。

**置信度**是指在符合给定条件的规则里，与当前规则结论一致的比例有多大，在本例中为`valid_rules / num_occurances`。

我们首先根据*规则应验*和*规则无效*两种情况创建字典，字典的键是由条件和结论组成的元组，比如`(3, 4)`表示“如果顾客购买了苹果，他们也会购买香蕉”。
```python
from collections import defaultdict

valid_rules = defaultdict(int)
invalid_rules = defaultdict(int)
num_occurances = defaultdict(int)
```
接下来，我们遍历每一条数据，计算所有可能的规则，注意跳过“没有购买商品”及“结论与条件相同”的情况：
```python
for sample in f:
    # 预测条件
    for premise in range(n_features):
        if sample[premise] == 0:
            continue
        num_occurances[premise] += 1
        for conclusion in range(n_features):
            # 跳过条件与结论相同的情况
            if premise == conclusion:
                continue
            if sample[conclusion] == 1:
                valid_rules[(premise, conclusion)] += 1
            else:
                invalid_rules[(premise, conclusion)] += 1
```
在得到必要的统计量后，计算支持度和置信度：
```python
support = valid_rules
confidence = defaultdict(float)
for premise, conclusion in valid_rules.keys():
    confidence[(premise, conclusion)] = valid_rules[(premise, conclusion)] / num_occurances[premise]
```
接下来声明一个函数，输出每条规则及相应的支持度和置信度，其接受的参数为：分别作为前提条件和结论的特征索引值、支持度字典、置信度字典以及特征列表。
```python
def print_rule(premise, conclusion, support, confidence, features):
    premise_name = features[premise]
    conclusion_name = features[conclusion]
    print('Rule: If a person buy %s he will also by %s' % (premise_name, conclusion_name))
    print(' - confidence: %.3f' % confidence[(premise, conclusion)])
    print(' - support: %d' % support[(premise, conclusion)])
    print(' ')
```
令`premise=1, conclusion=3`，我们可以得到如下的输出结果：
```python
Rule: If a person buy milk he will also by apple
 - confidence: 0.196
 - support: 9
```

#### 排序找出最佳规则
要找出支持度最高的规则，先对支持度字典排序，`key=itemgetter(1)`表示以字典各元素的值为排序依据，`reverse=True`表示降序排列。
```python
from operator import itemgetter
sorted_support = sorted(support.items(), key=itemgetter(1), reverse=True)

for index in range(5):
    print('Rule #%d' % (index + 1))
    (premise, conclusion) = sorted_support[index][0]
    print_rule(premise, conclusion, support, confidence, features)
```
以上代码将输出支持度最高的前5条规则：
```python
Rule #1
Rule: If a person buy cheese he will also by banana
 - confidence: 0.659
 - support: 27
 
Rule #2
Rule: If a person buy banana he will also by cheese
 - confidence: 0.458
 - support: 27
 
Rule #3
Rule: If a person buy cheese he will also by apple
 - confidence: 0.610
 - support: 25
 
Rule #4
Rule: If a person buy apple he will also by cheese
 - confidence: 0.694
 - support: 25
 
Rule #5
Rule: If a person buy apple he will also by banana
 - confidence: 0.583
 - support: 21
```
同理可以找出置信度最高的准则：
```python
sorted_confidence = sorted(confidence.items(), key=itemgetter(1), reverse=True)

for index in range(5):
    print('Rule #%d' % (index + 1))
    (premise, conclusion) = sorted_confidence[index][0]
    print_rule(premise, conclusion, support, confidence, features)
```
从排序结果来看，“顾客买苹果，也会买奶酪 ”和“顾客买奶酪，也会买香蕉”，这两条规则的支持度和置信度都很高。
#### 小结
作为一个入门的例子，其实很简单，然而对我来说······T.T


[^1]: 《Python数据挖掘入门与实践》，[澳]Robert Layton著，杜春晓译，人民邮电出版社，2016年。
[^2]: 我的练习小仓库：[datamining](https://github.com/jubytschu/LearningPython/tree/master/datamining)。