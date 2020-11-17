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
```