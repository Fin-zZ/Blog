# flex布局

- [flex布局](#flex%E5%B8%83%E5%B1%80)
    + [container部分](#container%E9%83%A8%E5%88%86)
    + [flex子元素的属性](#flex%E5%AD%90%E5%85%83%E7%B4%A0%E7%9A%84%E5%B1%9E%E6%80%A7)
        - [order](#order)
        - [flex-grow 指的是子元素所占据的扩展宽度。](#flex-grow-%E6%8C%87%E7%9A%84%E6%98%AF%E5%AD%90%E5%85%83%E7%B4%A0%E6%89%80%E5%8D%A0%E6%8D%AE%E7%9A%84%E6%89%A9%E5%B1%95%E5%AE%BD%E5%BA%A6)
        - [flex-shrink](#flex-shrink)
        - [flex-basis](#flex-basis)
        - [flex属性](#flex%E5%B1%9E%E6%80%A7)
        - [align-self && align-items](#align-self---align-items)
    + [额外补充](#%E9%A2%9D%E5%A4%96%E8%A1%A5%E5%85%85)

[参考链接](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

| 作用在flex容器上  | 作用在flex子项上 |
| :---------------: | :--------------: |
| - flex-direction  |     - order      |
|    - flex-wrap    |   - flex-grow    |
|    - flex-flow    |  - flex-shrink   |
| - justify-content |   - flex-basis   |
|   - align-items   |      - flex      |
|  - align-content  |   - align-self   |

### container部分

只针对几个用的少的介绍：

1. flex-flow是flex-direction和flex-wrap的缩写，需要两个值；
2. justify-content 指的时**元素**水平方向上分布情况的设置；
3. align-content 则正好对应，垂直方向上，**各行**分布的情况；
4. align-items指的是**元素**在垂直方向上的对齐方式；



### flex子元素的属性

#### order

可以设置flex子元素的位置，所有子元素默认值是0，默认情况下按顺序展示；通过给某项设置具体数值，可以改变位置，数值可以是负数。小在前，大在后；

#### flex-grow 指的是子元素所占据的扩展宽度。

针对元素未占据的剩余空间，进行扩充。

flex-grow不支持负数。

- 如果只有一个子元素设置该值
  - 该值小于1，则该元素扩种的空间等于，剩余空间与该值的乘积。
  - 大于等于1，则剩余空间全部给到该元素
- 如果多个子元素设置该值
  - 所有子元素的值加起来 的 和 小于1，那么扩展的宽度就是各自乘以剩余空间的值，未设置的元素保持不变。
  - 如果加起来大于等于1，那么各自就按和比例的值乘以剩余空间宽度。

#### flex-shrink 

指的是元素收缩比，和grow是类似的概念，用来处理flex空间不足的情况，不足的空间 对应 上面grow的剩余的空间概念。所有元素默认值是1，就是所有元素相同收缩比。0代表不收缩。

- 如果只有一个元素设置shrink，其实此时是其余元素都是1，只有一个元素不是1。
  - 如果小于1，那么用该值乘以不足空间，给该元素去收缩。
  - 如果大于1，该元素收缩所有的 不足空间。
- 如果多个元素设置shrink
  - 加起来的和大于1，那就完全收缩该不足空间，大家按比例来。
  - 小于1，则代表不完全收缩，各自乘以 该 不足空间得到。

#### flex-basis

向浏览器预定一个基础空间，default为auto。不设置值时，根据width属性来，没有再根据元素自身尺寸来。如果同时有width和flex-basis，会忽略width的值。

如果利用flex-basis设置后，总体的子元素宽度大于容器（即空间不足），则会按照flex-shrink的值收缩。

#### flex属性

默认是flex-grow，flex-shrink，flex-basis的缩写，默认值为 `flex: 0 1 auto;`

- `flex`默认值等同于`flex:0 1 auto`；
- `flex:none`等同于`flex:0 0 auto`；
- `flex:auto`等同于`flex:1 1 auto`；

#### align-self  && align-items 

只是这个属性只控制当前子元素一个，值几乎一样。多了个auto 继承父属性

### 额外补充

flex子元素 设置float、 vertical是没有用的。

flex适合一维布局 或者 应用程序这类。