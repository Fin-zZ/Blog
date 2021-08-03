# js 模式
原型 prototype是一个对象，每一个新创建的对象，都有一个私有属性，
*__proto__*，该属性指向原型对象。

```js
// todo
// a = Object.create(null) 的原型对象
let a = {}
a.__proto__ === Object.prototype // true
```

容易维护的代码特性：
- 阅读性好
- 各处一致性
- 具备较好预见性 边界条件
- 有较好的文档 参考vue

#### 基本要求
 1. 少用全局变量 es5,否侧容易有冲突。
 2. 不要内置对象的原型增加方法、属性，比如Array，Object，Function对象
 - 比如可能在没有hasOwnProperty()的检查中出现
 除非后续的ECMAScript中支持，那就可以在es5中添加；
   或者某个特殊浏览器支持该方法，为了兼容性等；
   再或者团队沟通支持（逃）
3. 针对switch case的要求
   1. 每个case语句都要有一个明确的 break
   2. 使用default语句作为switch的结束；
   3. 避免使用 fall-throughs (就是故意不适应break),
   让几种情况共用同一方法，或者让程序一直向下执行；
      
4. 避免使用隐式转换 用 === 替换 ==；
5. 尽量不使用eval
6. parseInt()函数 请指定 具体的进制。
7. 任何加法，只要有一项是 字符串，结果就是字符串
   任何乘法，只要有一项是 数字，结果类型就是数字
   
```js
  let n = 20
  let str = '08'
  let str2 = '09hfafoe'
   
  let num = str * 1 // 8 number
  let num2 = str2 * 1 // NaN number
   
  let str = n + '' // '20' string
```
### 数组判断方式
1. Array.isArray()
2. Object.prototype.toString.call()
3. arr instanceof Array
   //
4. Array.prototype.isPrototypeOf arr.__proto__
5. 

### JSON
考虑使用`JSON.parse & JSON.stringify`

### 正则表达式字面量
 - new RegExp() 函数
 - 字面量

```js
let reg = /\\/gi
let reg2 = new RegExp('\\\\', 'gm')
```

使用new RegExp方式构造时，需要转译 引号，通常也需要
双反斜杠，上面两种都是匹配单个 反斜杠 \ ,
因为在第二种方式里，\\ 双反斜杠才表示 为 一个斜杠 \

/ 这个是正常斜杠 也叫分割符












































