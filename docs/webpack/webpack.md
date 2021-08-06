# webpack

四个核心：

​	入口 entry

​	输出 output

​	loader

​	插件 plugins

构建流程：
webpack运行就是一个串行的过程。
1. 获取到所需要的初始化参数，从package.json以及我们定义的文件里获取
通常会有环境变量的条件判断导致参数不同，之后会初始化一个compiler对象，
   并且会加载所有的plugin插件，之后就开始运行，开始编译。
   
2. 根据entry获取到一个或多个入口文件，再递归从入口文件开始，不断找到其依赖文件以及
后续的依赖文件，该过程中，遇上无法识别的js模块，会借助loader里的配置将它们解析成
   可被webpack打包的模块。
   
3. 上述分析完成后，会形成依赖结构图，打包成一个bundle，再去找对应的output路径，将
生存的文件存放到指定位置。
   
4. 以上的分析还有打包过程中，会经历webpack的不同生命周期，webpack在不同周期会通知也会发布对应事件，
   由于插件监听了某些生命周期，所以就能够扩展一些功能，比如清除js中特定代码。
   
### Loader Plugin区别
Loader担任翻译的功能，webpack原生只能解析js文件，但在递归找依赖关系中，必然出现非js的模块，
这就借助loader针对非js文件进行解析，这样webpack也就能够加载 和 解析js以外文件了。
另 loader需要在config.module.rules里配置

plugin插件，起到扩充功能的作用。webpack的生命周期中，会发布很多事件，各插件监听对应的事件，
再做出自己需要的变动，实现想要的结果。
在plugin里配置


常见的loader：
image-loader： 压缩图片
css-loader：处理css文件
svg-sprite-loader：处理svg成雪碧图的loader
babel-loader：
样式loader

常用插件：
CopyWebpackPlugin，uglifyjs-webpack-plugin

利用webpack优化 
1. uglifyjs-webpack-plugin压缩js代码，清除prod的console.log
2. 提取公共部分代码
3. 利用externals提取常用的库 比如vue，vuex，vue-router， axios echarts
4. 使用tree-shaking Scope Hoisting来去除多余代码

开发中构建速度：
1. 利用热更新，HOT 

vue的按需加载
1. 样式库的按需加载
