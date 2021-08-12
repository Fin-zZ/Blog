(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{404:function(e,l,a){"use strict";a.r(l);var v=a(25),n=Object(v.a)({},(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),a("p",[e._v("四个核心：")]),e._v(" "),a("p",[e._v("​\t入口 entry")]),e._v(" "),a("p",[e._v("​\t输出 output")]),e._v(" "),a("p",[e._v("​\tloader")]),e._v(" "),a("p",[e._v("​\t插件 plugins")]),e._v(" "),a("p",[e._v("构建流程：\nwebpack运行就是一个串行的过程。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("获取到所需要的初始化参数，从package.json以及我们定义的文件里获取\n通常会有环境变量的条件判断导致参数不同，之后会初始化一个compiler对象，\n并且会加载所有的plugin插件，之后就开始运行，开始编译。")])]),e._v(" "),a("li",[a("p",[e._v("根据entry获取到一个或多个入口文件，再递归从入口文件开始，不断找到其依赖文件以及\n后续的依赖文件，该过程中，遇上无法识别的js模块，会借助loader里的配置将它们解析成\n可被webpack打包的模块。")])]),e._v(" "),a("li",[a("p",[e._v("上述分析完成后，会形成依赖结构图，打包成一个bundle，再去找对应的output路径，将\n生存的文件存放到指定位置。")])]),e._v(" "),a("li",[a("p",[e._v("以上的分析还有打包过程中，会经历webpack的不同生命周期，webpack在不同周期会通知也会发布对应事件，\n由于插件监听了某些生命周期，所以就能够扩展一些功能，比如清除js中特定代码。")])])]),e._v(" "),a("h3",{attrs:{id:"loader-plugin区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-plugin区别"}},[e._v("#")]),e._v(" Loader Plugin区别")]),e._v(" "),a("p",[e._v("Loader担任翻译的功能，webpack原生只能解析js文件，但在递归找依赖关系中，必然出现非js的模块，\n这就借助loader针对非js文件进行解析，这样webpack也就能够加载 和 解析js以外文件了。\n另 loader需要在config.module.rules里配置")]),e._v(" "),a("p",[e._v("plugin插件，起到扩充功能的作用。webpack的生命周期中，会发布很多事件，各插件监听对应的事件，\n再做出自己需要的变动，实现想要的结果。\n在plugin里配置")]),e._v(" "),a("p",[e._v("常见的loader：\nimage-loader： 压缩图片\ncss-loader：处理css文件\nsvg-sprite-loader：处理svg成雪碧图的loader\nbabel-loader：\n样式loader")]),e._v(" "),a("p",[e._v("常用插件：\nCopyWebpackPlugin，uglifyjs-webpack-plugin")]),e._v(" "),a("p",[e._v("利用webpack优化")]),e._v(" "),a("ol",[a("li",[e._v("uglifyjs-webpack-plugin压缩js代码，清除prod的console.log")]),e._v(" "),a("li",[e._v("提取公共部分代码")]),e._v(" "),a("li",[e._v("利用externals提取常用的库 比如vue，vuex，vue-router， axios echarts")]),e._v(" "),a("li",[e._v("使用tree-shaking Scope Hoisting来去除多余代码")])]),e._v(" "),a("p",[e._v("开发中构建速度：")]),e._v(" "),a("ol",[a("li",[e._v("利用热更新，HOT")])]),e._v(" "),a("p",[e._v("vue的按需加载")]),e._v(" "),a("ol",[a("li",[e._v("样式库的按需加载")])])])}),[],!1,null,null,null);l.default=n.exports}}]);