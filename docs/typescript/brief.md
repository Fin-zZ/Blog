# type for js

## TypeScript is a static Type checker

js中，可能因为变量类型的原因，进行应用时出错。
ts可以作为静态语法检查器，甚至检查某对象内有无我们需要的值。

同样ts的规则也是可配置的。

这里有几点注意
1 ts永远不会改变js运行后的结果，只是会出现静态提醒。我们直接将js文件拿来运行，既是ts认为是错误的，也不会改变最终的运行情况。

2 协助远离运行时的错误

### Null undefined

​	变量没有初始化：undefined

​	变量不可用：null

