(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{410:function(v,_,i){"use strict";i.r(_);var l=i(25),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"css层叠"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css层叠"}},[v._v("#")]),v._v(" css层叠")]),v._v(" "),i("p",[v._v("z-index只有与position不是static的元素在一起时，才起一定作用")]),v._v(" "),i("p",[i("img",{attrs:{src:"img/css%E5%B1%82%E7%BA%A7.png",alt:""}})]),v._v(" "),i("p",[v._v("但是css3并非支队定位元素有效，flex盒子的子元素也可设置z-index属性。")]),v._v(" "),i("p",[v._v("层叠的规则:")]),v._v(" "),i("ol",[i("li",[v._v("谁大谁在上")]),v._v(" "),i("li",[v._v("相同时，后来者居上")])]),v._v(" "),i("p",[v._v("层叠上下文特性")]),v._v(" "),i("ol",[i("li",[v._v("层叠上下文层叠水平 比 普通元素要高")]),v._v(" "),i("li",[v._v("层叠上下文可以阻断元素的混合模式")]),v._v(" "),i("li",[v._v("层叠上下文可以嵌套，内部的层叠上下文受制于外部的。")]),v._v(" "),i("li",[v._v("每个层叠上下文里和兄弟元素是独立的；层叠变化或者渲染时，只需要考虑后代的元素")]),v._v(" "),i("li",[v._v("每个层叠上下文时自成体系的，当元素发生层叠时，整个元素被人误在浮层；")])]),v._v(" "),i("p",[v._v("层叠上下文的创建 stacking context也是由一些特殊的css属性创建的。\n分为三类，他们也是有一些特性的css属性创建的")]),v._v(" "),i("ol",[i("li",[v._v("天生就是，比如页面的根元素，成为根层叠上下文。")]),v._v(" "),i("li",[v._v("正统的，z-index值为数值的定位元素的传统 层叠上下文。（这里的数值包含"),i("strong",[v._v("0 正负数")]),v._v("）")]),v._v(" "),i("li",[v._v("扩展的 其他css3属性。")])]),v._v(" "),i("p",[v._v("根层叠上下文：")]),v._v(" "),i("ol",[i("li",[v._v("可以理解为 "),i("html",[v._v("元素，因此页面里所有元素一定至少都在一个层叠结界中。")])]),v._v(" "),i("li",[v._v("定位元素和传统层上下层叠文： 对于position时relative absolute以及firefox/ie下含有position为fixed的定位元素，当z-index不是auto时，就会创建层叠上下文。")])]),v._v(" "),i("p",[v._v("css3时代的层叠上下文：")]),v._v(" "),i("ol",[i("li",[v._v("元素为flex布局元素（父元素display：flex\\inline-flex），\nopcaity只要不是1，那么就是具备z-index为auto的级别能力。")])]),v._v(" "),i("p",[v._v("当变为层叠上下文也就是stacking context后，层叠顺序会变高。\n具体的位置、级别在：")]),v._v(" "),i("ol",[i("li",[v._v("如果层叠上下文不依赖z-index数值，那么器层叠顺序就是z-index:auto，可以看成z-index：0级别。")]),v._v(" "),i("li",[v._v("如果是依赖了zindex数值，那么就由数值决定。")])]),v._v(" "),i("p",[v._v("z-index负值的好处：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("可访问性隐藏 seo。只需要比该元素高的元素设置一个背景色即可。\n可clip相比，优势在于元素不用绝对定位，利用position relative即可。\n另一个优势为普适性更强。")])]),v._v(" "),i("li",[i("p",[v._v("IE8下多背景模拟\n多层背景更加的层次感。")])])]),v._v(" "),i("p",[v._v("z-index不犯二准则：")]),v._v(" "),i("ol",[i("li",[v._v("对于非浮层元素 避免设置z-index的值，且z-index的值没有超过2的道理。")])]),v._v(" "),i("p",[v._v("避免因为设置了巨大的zindex无法覆盖的问题，层级够多了。\n避免一山比一山高 的设置问题。")]),v._v(" "),i("p",[v._v("但该准则不适用于哪些飘来飘去的元素、弹窗、错误提醒等")])])}),[],!1,null,null,null);_.default=t.exports}}]);