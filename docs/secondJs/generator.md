# 生成器generator

js自身通过某种方式在代码某个位置，进行暂停，后续也可以继续执行。

```js
// 这是生成器的基本格式    function *
// let it = foo() 并不会执行，只是创建了一个迭代器。 *foo() 是生成器
// 之后通过it.next()迭代执行
function *foo() {
  x++
  yield;
  x++
  log(x)
}

let it = foo()

it.next()
it.value
it.next()
```

生成器就是特殊的一类函数，可以一次或多次启动暂停，并不一定需要完成。

let it = foo() 只是创建一个迭代器，让他控制generator *foo()的执行。
调用it.next() ，会让生成器从当前位置继续执行。

注意 第一个next()总是启动一个生成器，并运行到第一个yield的地方。
所以给第一个next()里传参数没有意义.
第二个next（）调用完成第一个被暂停的yield表达式。

启动生成器不要带上参数。

多个生成器实例子常用用法是在没有输入情况下，可以从某个独立的资源处产生自己需要的。

## 介绍下迭代器

迭代器是个不错的接口，用于一步一步的得到一系列值。

```javascript
var something = function () {
  var nextVal
  return {
    [Symbol.iterator]: function () {
      return this
    },
    next: function () {
      if(!nextVal) {
        nextVal = 1
      } else {
        nextVal = (3 * nextVal) + 6
      }
      return {done: false, value: nextVal}
    }
  }
}
```
这里something是个迭代器对象，因为它的接口中有next（）方法。\

紧密关联的一个术语，iterable（可迭代），即指一个包含可以在其值上 迭代的迭代器对象。
从ES6 开始，iterable必须支持Symbol.iterator

通过定义的 [Symbol.iterator]将自己返回，使得something既是迭代器，也是iterable
for of循环自动调用next(),也不会传入任何值，只会在接收到done:true后自动停止。

```js
function *something() {
  var nextVal
  while (true) {
    if (!nextVal) {
      nextVal = 1
    } else {
      nextVal = (3 * nextVal) + 6
    }
    // 可以向外输出nextVal的值
    yield nextVal;
  }
}

let it = something()

log(it.next().value) // 1
log(it.next().value) // 9
log(it.next().value) // 33
```
因为生成器在每个yield都会暂停，所以其作用域会被保持住
```js
function req(url) {
  ajax(`${url}`, function callback(err, value) {
    if(err) {
      it.throw(err)
    } else {
      it.next(data)
    }
  })
}
```

生成器的yield暂停特性可以让我们从异步函数里得到看似同步返回的值，
还能够同步捕获异步的错误。











