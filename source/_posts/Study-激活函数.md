---
tags:
  - 激活函数
  - DL
title: Study Notes | 激活函数
aside: true
categories: DeepLearning
keywords: 'ReLu, 激活函数'
description: ReLU、Sigmoid、Softmax 等激活函数
top_img: >-
  https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/2026060615411111aliimages.png
mathjax: true
abbrlink: 396a3f75
cover: >-
  https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/2026060615411111aliimages.png
date: 2026-06-06 15:42:11
updated:
comments:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
katex:
aplayer:
highlight_shrink:
---
对于 $f=W_2max(0,W_1x)$，这里的 $max(0, x)$ 实际上就是 ReLU，如果去掉，则变为  $f=W_2W_1x$，$W_2W_1$ 可以用 $W_3$ 表示，那么就变<font color="#ff0000">线性</font>了。

![file-20260404154946586.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/file-20260404154946586-e4d4734152.png)

![file-20260404155242886.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/file-20260404155242886-b1431453fd.png)

一般来说，回归问题可以使用恒等函数，二元分类问题可以使用sigmoid函数，多元分类问题可以使用 softmax函数

## Sigmoid
$$
h(x)=\frac{1}{1+exp(-x)}
$$

```python
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

x = np.arange(-5.0, 5.0, 0.1)
y = sigmoid(x)
plt.plot(x, y)
plt.ylim(-0.1, 1.1)
plt.show()
```

输出范围为 $[0,1]$
![Pasted image 20260329175540.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329175540-fd43800c30.png)

{% note warning %}
当 z 值**非常大**或者**非常小**时，sigmoid 函数的导数 $g′(z)$ 将接近 0 。这会导致权重 W 的梯度将接近 0 ，使得梯度更新十分缓慢，即**梯度消失**
from https://brickexperts.github.io/2019/09/03/%E6%BF%80%E6%B4%BB%E5%87%BD%E6%95%B0/
{% endnote %}

来源 https://www.cnblogs.com/missidiot/p/9378079.html
![Pasted image 20260329180206.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329180206-cd0a8db694.png)

## ReLU
rectified linear unit
$$
ReLU(x) = max(x,0)
$$
$$
h(x)=\left\{
\begin{aligned}
x~ ~(x > 0) \\
0~ ~(x \leq 0)\\
\end{aligned}
\right.
$$
![Pasted image 20260329182823.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329182823-1086d313fb.png)

引入了非线性特征，使得神经网络能够学习复杂的模式，同时也可以缓解梯度消失问题。

{% note warning %}
1. **Dying ReLU问题**：在训练过程中，某些神经元可能永远不会被激活（即输入始终为负值），导致这些神经元在整个训练过程中都没有贡献。为了解决这个问题，研究人员提出了[[激活函数#LeakyReLU]]和Parametric ReLU等变体。
2. **不对称性**：ReLU在负区间的输出始终为零，可能导致模型在某些情况下性能下降。
{% endnote %}

## Softmax
softmax 函数的输出在 0.0 ~ 1.0 之间(非负性)。
并且它的函数输出值**总和是 1**。
$$
y_k = \frac{exp(a_k)}{\sum_{i=1}^nexp(a_i)}
$$
$n$ 是输出层神经元的个数，第 $k$ 个神经元的输出是 $y_k$。输出层的各个神经元都受到所有输入信号的影响。

![Pasted image 20260329184008.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329184008-572cec9587.png)

![Pasted image 20260329214923.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329214923-7356298fa6.png)

## Tanh
将输入投影到 (-1, 1)
$$
tanh(x)=\frac{1-exp(-2x)}{1+exp(-2x)}
$$
![Pasted image 20260329180832.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329180832-39487e5e14.png)

{% note warning %}
Tanh 和 Sigmoid 类似，也存在梯度消失的问题。
Tanh函数作为隐藏层的激活函数，输出范围在 −1 到 1 之间，有助于加速梯度下降的收敛。
{% endnote %}

## LeakyReLU
LeakyReLU 就是为了解决 ReLU 的 Dying RELU 问题。

$$
Leaky~ReLU(x)=\left\{
\begin{aligned}
x~ ~(x > 0) \\
\alpha x~ ~(x \leq 0)\\
\end{aligned}
\right.
$$
$\alpha$ 是一个小的正数，取值 0.01 左右。
通过在负区间引入斜率，确保了所有神经元都有梯度。

![Pasted image 20260329183350.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329183350-c5ece77a5c.png)

## GLU
Gated Linear Unit 门控线性单元。
$GLU(x)=(X*W+b)⊗\sigma(X*V+c)$
1. **门控机制**：GLU 通过引入门控机制，使得模型能够选择性地通过信息，从而提高模型的表达能力。
2. **非线性**：GLU 结合了线性变换和非线性激活，使得模型能够学习复杂的模式。
3. **信息过滤**：通过门控机制，GLU 能够过滤掉不重要的信息，从而增强模型的表现。

## SwiGLU
$Swish(x)=x\cdot \sigma (\beta x)$
$\sigma (x) = \frac{1}{1+e^{-x}}$

## GELU 
![Pasted image 20260329214609.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329214609-63b69ee91d.png)

1. **平滑性**：GELU 函数是连续且平滑的，这有助于提高模型的稳定性和收敛速度。GELU 通过引入高斯误差函数，使得激活函数在输入的正负区间内都具有平滑性，从而提高模型的稳定性。
2. **非线性**：GELU 结合了线性和非线性变换，使得模型能够学习复杂的模式。GELU 结合了线性变换和非线性激活，从而增强了模型的非线性特性。
3. **概率解释**：GELU 通过高斯误差函数对输入进行平滑处理，从而具有概率解释，即输入值越大，通过的概率越高。GELU 具有概率解释，使得输入值越大，通过的概率越高，从而更好地模拟神经元的激活过程。

![Pasted image 20260329214851.png](https://typora-birdy.oss-cn-guangzhou.aliyuncs.com/blog/images/Pasted-image-20260329214851-ac5c433ad7.png)
