# prototype 委托设计模式

委托模式，不同于类的继承
类理论：
  定义一个父类，添加各种各样的functions，可以包括所有子类的方法。
  接着指定子类，他们都会继承该父类，然后可能各自添加一些特殊的独有的function
  此外，类模式鼓励重写父类的方法。

委托：
  先建立一个对象，（该对象不是类也不能叫函数，但我们都会喜欢称呼为构造函数），
  他也会包含所有真正实例使用的方法，因为实例可以通过prototype链使用。
  对于真正的每个实例，js会建立具体的对象，用以存储特定的数据和funs，该对象通过委托，
  能够使用“构造函数”上的方法。

  委托方式：
  ```js
    foo = Object.create(bar)
    foo.prototype = Object.create(bar.prototype)

    Object.setPrototypeOf(Bar.prototype, Foo.prototype)
  ```

  委托中，尽量避免使用容易被重写的函数，类中则鼓励


委托又可以分为 对象委托 和 原型风格 的两种

```js
  foo = Object.create(bar)
  foo.prototype = Object.create(bar.prototype)
```

区别：
- 原型这种，需要new() 以及 初始化给参数放在一起
- 而对象关联这种，可以分开这两部步骤，可能更合适一些场景。

对象关联可以让代码看起来更简洁。
例子：
1 建造对象
2 关联对象
就拥有了所关联对象的方法 委托调用。
无需实例化，因为他们不是类，只用Object.create() 关联一个新对象即可。
或者Object.setPrototypeOf(bar, foo) 即可。

ES6 的class 更加简洁。

### summary
行为委托认为对象之间是兄弟关系，互相委托，而不是父类和子类的关系

