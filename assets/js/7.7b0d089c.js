(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{368:function(t,s,a){t.exports=a.p+"assets/img/mqtt.4584c09b.png"},395:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"小程序使用mqq-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序使用mqq-js"}},[t._v("#")]),t._v(" 小程序使用mqq.js")]),t._v(" "),n("p",[t._v("先是直接照搬在h5的方案，开启自己电脑这边切割软件，进行连接。结果报错，报U.createEvent  is not a function，感觉就是找不到某个对象了，很奇怪的报错。")]),t._v(" "),n("p",[t._v("因为使用的是mqtt.min.js文件，也看不出来报错行在哪里")]),t._v(" "),n("p",[t._v("就开始查看我们的代码，报错也是一层一层的打印下来的，看函数调用栈，结果在我们自己代码的new 对象那行就报错了，得，那就看我们自己封装的mqtt 构造函数，100来行。")]),t._v(" "),n("p",[t._v("由上到下看，先看引用，就用了俩模块，一个是mqtt.min.js，另一个是他继承的父类构成函数，然后查看他自己的code，其实中规中矩，不过接受参数，检查，建立连接，监听mqtt连接，发送消息，断开，重连等事件，心跳连接，消息解码等，没啥特别的，于是就去看父类。")]),t._v(" "),n("p",[t._v("父类：还是由上到下看引用，这里有proto文件的引用，这里我就想起来，在vue里使用proto文件的麻烦了。。。会不会小程序这里也有特殊性？就找到了github上一个转换给小程序使用的protobuf库，能够转换proto文件，也具备了，页替换了之前的lookup方法。这下以为总该可以了。")]),t._v(" "),n("p",[t._v("接着是引用的mqtt.min.js的问题\n报错，错误行指向new Mqtt()的地方，然而该对象是我们直接引入的呀，于是先去查找是否版本问题，\n途中还顺便查询到，我们的websocket连接需要改为 wxs")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mqtt.connect('wx://xxxxxxxxxx', options)；\nwx://   xx.xx.xxxxxxx\n协议版本  链接地址\n微信小程序这个版本 作者自己封装了一层 wx表示普通的ws协议连接 wxs表示加密之后的wss协议连接。\n")])])]),n("p",[t._v("接着是漫长的debug过程，查找关键词 小程序 微信 mqtt ws连接 websocket这类。")]),t._v(" "),n("p",[t._v("讨论平台有一些更换mqtt.min.js版本的方法，使用2.18.1， 或者4.1.0版本\n但都是报xxx is not a function 或者 xxx is not a Object")]),t._v(" "),n("p",[t._v("这时候我们就跟换为 非压缩版本查看问题；其实还是慢慢的debug的，因为报错的地方也是层层调用的，\n错误行也看不出来问题所在 但想到该版本我们在pc ios 安卓的原生浏览器里就是正常使用的呀；于是联想微信环境问题？\n稍微搜索下，发现有人提过，小程序环境里的global对象问题\n于是在mqtt这个文件中查询对于global对象的使用\n并且去开发者工具里验证\n"),n("img",{attrs:{src:a(368),alt:"mqtt"}}),t._v("\n于是删除global引用，直接使用Uint8Array")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Buffer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'safe-buffer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" OurUint8Array "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uint8Array "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_uint8ArrayToBuffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_isUint8Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBuffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OurUint8Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/00082ca48ec8b00ecc3895ceb53c00?highLine=mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关的讨论"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/q/1010000014721626",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),n("OutboundLink")],1),t._v("里查到 在开发者工具上没有使用问题，但在真机上的问题解决方案\n再到我自己这边，后端同事使用eval函数问题报错，就改成JSON.parse解析,出来的js对象还是报错，一点点查看发现是切割软件传递的数据存在问题，比如数字，"),n("code",[t._v("25.0")]),t._v("，他们通常穿的是"),n("code",[t._v("25.")]),t._v(" 类似的还是"),n("code",[t._v("2.0e6")]),t._v("，结果他们是"),n("code",[t._v("2.e6")]),t._v("。 这类小数点的都给他们补成了 .0。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.,/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.e/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.0e'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.}/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.0]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.}/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.0}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("最后算是搞定这边的mqtt连接。")]),t._v(" "),n("p",[t._v("后续补上WS连接的一些坑。")])])}),[],!1,null,null,null);s.default=e.exports}}]);