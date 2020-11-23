# value
### 数组
对于一些非真正意义上的数组，，可以通过以下方法转化
```js
Array.prototype.slice.call(arguments)
Array.from(arguments)
```
数字的一些方法
var a = 34.56

a.toFix()可以指定小数的位数。

a.toPercision()指定有效数位的显示位数。

如果要比较数字是否相等，js因为小数计算并不会真正意义相等，
建议利用ES6的 Number.EPSLION来比较

```js
function IsNumberEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

// 检测是否整数
Number.isInteger()
```

js的乘法和除法会产生 -0
加减法不会。

-0 === 0 //true

ES6 中的 Object.is() 可以判断是否绝对相等。

它可以区分0 -0 NaN

```js
  Object.is(NaN, NaN) // true
  Object.is(0, -0) // false
```
但是能用 == 或者 === 就不要Object.is,
这个效率低些，主要用来处理某些特殊的相等比较。

### 值和引用

基本类型的值 总是通过 值复制 的方式来赋值/传递。
复合类型--对象，总是通过 引用复制 的方式 去赋值，和传递。

我们无法自行决定到底是使用 值复制 还是 引用复制，这是由值的根本类型决定的。


## 原生函数

new String("abc") 创建的是字符串 "abc" 的封装对象，而非基本类型值 "abc"。

原生的 数字，字符串，boolean值都不建议用对象形式创建，直接给值。


#### Symbol使用

不可以用new Symbol() 构造函数的形式
```js
let info1 = {
  name: 'a',
  age: 24,
  [Symbol('describe')] : 'zzz'
}
console.log(Object.getOwnPropertySymbols(info1))
// [ Symbol(describe) ]
```
使用方法

Symbol([description])

var smy = Symbol();
var info = {
  smy: 'x',
  [smy]: 'y'
};


console.log(info.smy);       // 输出'x'
console.log(info['smy']);    // 输出'x'
console.log(info[smy]);      // 输出'y'


## 值类型转换

JSON.stringify()再遇上 undefined function symbol自动忽略。

```js
"0" == false // true
[] == false // true
0 == [] // true

```

