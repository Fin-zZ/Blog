(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{390:function(t,e,v){"use strict";v.r(e);var s=v(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"event-loop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),v("p",[t._v('js是单线程语言， 事件循环就其执行代码、处理事件等流程的一个机制。\n具体来说，其存在一个主线程，可以处理大量的事情，比如js代码执行，ui渲染，\ndom节点操作等；但是又存在一些很耗时的任务，例如定时器，接口请求等，so需要\n将这些事执行起来，等他们完成之时通知主线程即可。\n所以像这类耗时久的任务，我们会执行他们的同步部分（不阻塞），然后当他们完成的时候，\n把他们的 "回调函数" 也就是剩余部分，按照顺序排入task queue中。')]),t._v(" "),v("p",[t._v("事件循环的渲染部分，")]),t._v(" "),v("ol",[v("li",[t._v("收集计算改动的css样式，")]),t._v(" "),v("li",[t._v("创建渲染树，找出页面上元素的位置")]),t._v(" "),v("li",[t._v("在页面上实际的位置进行绘制。")])]),t._v(" "),v("p",[t._v("task queue清空后，会执行渲染")]),t._v(" "),v("ol",[v("li",[t._v("requestAnimationFrame")]),t._v(" "),v("li",[t._v("css 计算收集")]),t._v(" "),v("li",[t._v("laylout")]),t._v(" "),v("li",[t._v("paint")])]),t._v(" "),v("p",[t._v("ui渲染必须等到所有微任务接受后，才会触发，ui渲染后，执行一个红任务")]),t._v(" "),v("p",[t._v("js执行栈中，只要没有函数了，就会去执行微任务。")])])}),[],!1,null,null,null);e.default=n.exports}}]);