# type

ES6 截止
7种内置类型

- null
- undefined
- number
- boolean
- string
- object
- symbol

需要注意 
```js
typeof null === "object" // true

function a() {
  ///...
}

typeof a === "function"  // true

let m = [1, 2]
typeof m === "object"  //true
```
function 其实是object的一个子类型。

如果某变量的值是undefined，则说明其声明了未定义。
可以用下面的typeof方法行安全防范，坚持**未定义** 变量
```js
(function() {
  function someFeature(){}
  // ...
  }
  
  function profill() {
    var helper = (typeof someFeature !== 'undefined') ?
    someFeature : function () { /*... */}
  }

  profill()
})()

// section two

function profill(someFeature) {
  var helper = someFeature || function () {}
  var value = helper
}
```



