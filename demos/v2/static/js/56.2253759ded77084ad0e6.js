webpackJsonp([56,70],{209:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;this.$nextTick(function(){e.$tabbar=document.querySelector(".weui_tabbar")})},props:{value:Boolean,showCancel:Boolean,cancelText:String,menus:{type:Object,default:function(){}},closeOnClickingMask:{type:Boolean,default:!0}},data:function(){return{show:!1}},methods:{onClickingMask:function(){this.closeOnClickingMask&&(this.show=!1)},emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)},fixIos:function(e){this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=e)}},watch:{show:function(e){var t=this;this.$emit("input",e),e?this.fixIos(-1):setTimeout(function(){t.fixIos(100)},200)},value:function(e){this.show=e}},beforeDestroy:function(){this.fixIos(100)}}},220:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{leftOptions:{type:Object,default:function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):window.history.back()}}}},247:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.weui_mask{z-index:1000;background:rgba(0,0,0,.6)}.weui_mask,.weui_mask_transparent{position:fixed;width:100%;height:100%;top:0;left:0}.weui_mask_transparent{z-index:5001}.weui_mask_transition{display:none;position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:transparent;transition:background .3s}.weui_fade_toggle{background:rgba(0,0,0,.6)}.weui_actionsheet{position:fixed;left:0;bottom:0;transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#efeff4;transition:transform .3s}.weui_actionsheet_menu{background-color:#fff}.weui_actionsheet_action{margin-top:6px;background-color:#fff}.weui_actionsheet_cell{position:relative;padding:10px 0;text-align:center;font-size:18px}.weui_actionsheet_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui_actionsheet_cell:active{background-color:#ececec}.weui_actionsheet_cell:first-child:before{display:none}.weui_actionsheet_toggle{transform:translate(0)}.vux-actionsheet-gap{height:8px;width:100%;background-color:#eee}.vux-actionsheet-cancel:before{border-top:none}',"",{version:3,sources:["/./src/components/actionsheet/index.vue"],names:[],mappings:"AACA,WAA0B,aAAa,AAAoC,yBAA0B,CACpG,AACD,kCAFW,eAAe,AAAa,WAAW,YAAY,MAAM,MAAO,CAG1E,AADD,uBAAsC,YAAa,CAClD,AACD,sBAAsB,aAAa,eAAe,aAAa,WAAW,YAAY,MAAM,OAAO,uBAAyB,yBAAyB,CACpJ,AACD,kBAAkB,yBAA0B,CAC3C,AACD,kBAAkB,eAAe,OAAO,SAAS,2BAA6B,mCAAmC,2BAA2B,aAAa,WAAW,yBAAyB,wBAAwB,CACpN,AACD,uBAAuB,qBAAwB,CAC9C,AACD,yBAAyB,eAAe,qBAAwB,CAC/D,AACD,uBAAuB,kBAAkB,eAAe,kBAAkB,cAAc,CACvF,AACD,8BAA8B,YAAY,kBAAkB,OAAO,MAAM,WAAW,WAAW,6BAA6B,cAAc,qBAAqB,oBAAoB,CAClL,AACD,8BAA8B,wBAAwB,CACrD,AACD,0CAA0C,YAAY,CACrD,AACD,yBAAyB,sBAAyB,CACjD,AACD,qBAAqB,WAAW,WAAW,qBAAqB,CAC/D,AACD,+BAA+B,eAAe,CAC7C",file:"index.vue",sourcesContent:['\n.weui_mask{position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.6)\n}\n.weui_mask_transparent{position:fixed;z-index:5001;width:100%;height:100%;top:0;left:0\n}\n.weui_mask_transition{display:none;position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0);transition:background .3s\n}\n.weui_fade_toggle{background:rgba(0,0,0,0.6)\n}\n.weui_actionsheet{position:fixed;left:0;bottom:0;transform:translate(0, 100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#EFEFF4;transition:transform .3s\n}\n.weui_actionsheet_menu{background-color:#FFFFFF\n}\n.weui_actionsheet_action{margin-top:6px;background-color:#FFFFFF\n}\n.weui_actionsheet_cell{position:relative;padding:10px 0;text-align:center;font-size:18px\n}\n.weui_actionsheet_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #D9D9D9;color:#D9D9D9;transform-origin:0 0;transform:scaleY(.5)\n}\n.weui_actionsheet_cell:active{background-color:#ECECEC\n}\n.weui_actionsheet_cell:first-child:before{display:none\n}\n.weui_actionsheet_toggle{transform:translate(0, 0)\n}\n.vux-actionsheet-gap{height:8px;width:100%;background-color:#eee\n}\n.vux-actionsheet-cancel:before{border-top:none\n}'],sourceRoot:"webpack://"}])},250:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#35495e}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;margin-left:100px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#ccc}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #ccc;border-width:1px 0 0 1px;transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter{animation:fadeinR .5s}.vux-header-fade-in-left-enter{animation:fadeinL .5s}@keyframes fadeinR{0%{opacity:0;transform:translateX(80px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;transform:translateX(-80px)}to{opacity:1;transform:translateX(0)}}',"",{version:3,sources:["/./src/components/x-header/index.vue"],names:[],mappings:"AACA,YAAY,kBAAkB,cAAc,sBAAsB,wBAAwB,CACzF,AACD,6CAA6C,cAAc,kBAAkB,iBAAiB,kBAAkB,YAAY,eAAe,gBAAgB,WAAW,gBAAgB,uBAAuB,mBAAmB,UAAU,CACzO,AACD,mCAAmC,oBAAoB,CACtD,AACD,2DAA2D,kBAAkB,SAAS,cAAc,eAAe,iBAAiB,UAAU,CAC7I,AACD,wIAAwI,WAAW,iBAAiB,UAAU,CAC7K,AACD,oKAAoK,UAAU,CAC7K,AACD,6BAA6B,SAAS,CACrC,AACD,8CAA8C,iBAAiB,CAC9D,AACD,yCAAyC,kBAAkB,WAAW,YAAY,SAAS,SAAS,CACnG,AACD,gDAAgD,WAAW,kBAAkB,WAAW,YAAY,sBAAsB,yBAAyB,yBAAyB,QAAQ,QAAQ,CAC3L,AACD,8BAA8B,UAAU,CACvC,AACD,qEAAqE,gBAAgB,cAAc,CAClG,AACD,qDAAqD,mCAAyC,cAAc,CAC3G,AACD,gCAAgC,qBAAqB,CACpD,AACD,+BAA+B,qBAAqB,CACnD,AACD,mBACA,GAAG,UAAU,0BAA0B,CACtC,AACD,GAAK,UAAU,uBAAuB,CACrC,CACA,AACD,mBACA,GAAG,UAAU,2BAA2B,CACvC,AACD,GAAK,UAAU,uBAAuB,CACrC,CACA",file:"index.vue",sourcesContent:['\n.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#35495e\n}\n.vux-header .vux-header-title,.vux-header h1{margin:0 88px;margin-left:100px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff\n}\n.vux-header .vux-header-title>span{display:inline-block\n}\n.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc\n}\n.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#ccc\n}\n.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5\n}\n.vux-header .vux-header-left{left:18px\n}\n.vux-header .vux-header-left .vux-header-back{padding-left:16px\n}\n.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px\n}\n.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #ccc;border-width:1px 0 0 1px;transform:rotate(315deg);top:8px;left:7px\n}\n.vux-header .vux-header-right{right:15px\n}\n.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0\n}\n.vux-header .vux-header-right .vux-header-more:after{content:"\\2022\\0020\\2022\\0020\\2022\\0020";font-size:16px\n}\n.vux-header-fade-in-right-enter{animation:fadeinR .5s\n}\n.vux-header-fade-in-left-enter{animation:fadeinL .5s\n}\n@keyframes fadeinR{\n0%{opacity:0;transform:translateX(80px)\n}\n100%{opacity:1;transform:translateX(0)\n}\n}\n@keyframes fadeinL{\n0%{opacity:0;transform:translateX(-80px)\n}\n100%{opacity:1;transform:translateX(0)\n}\n}'],sourceRoot:"webpack://"}])},257:function(e,t,n){var i=n(247);"string"==typeof i&&(i=[[e.id,i,""]]);n(3)(i,{});i.locals&&(e.exports=i.locals)},260:function(e,t,n){var i=n(250);"string"==typeof i&&(i=[[e.id,i,""]]);n(3)(i,{});i.locals&&(e.exports=i.locals)},278:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-actionsheet"},[n("div",{staticClass:"weui_mask_transition",class:{weui_fade_toggle:e.show},style:{display:e.show?"block":"none"},on:{click:e.onClickingMask}}),e._v(" "),n("div",{staticClass:"weui_actionsheet",class:{weui_actionsheet_toggle:e.show}},[n("div",{staticClass:"weui_actionsheet_menu"},[e._l(e.menus,function(t,i){return n("div",{staticClass:"weui_actionsheet_cell",domProps:{innerHTML:e._s(e.$t(t))},on:{click:function(t){e.emitEvent("on-click-menu",i)}}})}),e._v(" "),e.showCancel?n("div",{staticClass:"vux-actionsheet-gap"}):e._e(),e._v(" "),e.showCancel?n("div",{staticClass:"weui_actionsheet_cell vux-actionsheet-cancel",on:{click:function(t){e.emitEvent("on-click-menu","cancel")}}},[e._v(e._s(e.cancelText||e.$t("vux.actionsheet.cancel")))]):e._e()],2)])])},staticRenderFns:[]}},282:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"vux-header-back",attrs:{transition:e.transition},on:{click:[function(t){e._k(t.keyCode,"preventDefault")},e.onClickBack]}},[e._v(e._s(e.leftOptions.backText))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.leftOptions.showBack,expression:"leftOptions.showBack"}],staticClass:"left-arrow",attrs:{transition:e.transition},on:{click:e.onClickBack}}),e._v(" "),e._t("left")],2),e._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{transition:e.transition}},[e._v(e._s(e.title))]),e._t("default")],2),e._v(" "),n("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(t){e._k(t.keyCode,"preventDefault")},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},289:function(e,t,n){var i,o;n(257),i=n(209);var a=n(278);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,e.exports=i},301:function(e,t,n){var i,o;n(260),i=n(220);var a=n(282);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,e.exports=i},423:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(301),a=i(o),r=n(289),s=i(r);t.default={components:{XHeader:a.default,Actionsheet:s.default},data:function(){return{menus:{menu1:"Take Photo",menu2:"Choose from photos"},showMenus:!1}}}},633:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-header",[e._v("This is the page title.")]),e._v(" "),n("br"),e._v(" "),n("x-header",{attrs:{"left-options":{showBack:!1}}},[e._v("do not show Back")]),e._v(" "),n("br"),e._v(" "),n("x-header",{attrs:{"right-options":{showMore:!0}},on:{"on-click-more":function(t){e.showMenus=!0}}},[e._v("with more menu")]),e._v(" "),n("br"),e._v(" "),n("x-header",[e._v("with right link"),n("a",{slot:"right"},[e._v("Feedback")])]),e._v(" "),n("br"),e._v(" "),n("x-header",[e._v("long long long long long long long text"),n("a",{slot:"right"},[e._v("Feedback")])]),e._v(" "),n("br"),e._v(" "),n("x-header",[e._v("with left slot"),n("a",{slot:"left"},[e._v("Close")])]),e._v(" "),n("br"),e._v(" "),n("x-header",{staticStyle:{"background-color":"#000"}},[e._v("custom background color")]),e._v(" "),n("actionsheet",{directives:[{name:"model",rawName:"v-model",value:e.showMenus,expression:"showMenus"}],attrs:{menus:e.menus,"show-cancel":""},domProps:{value:e.showMenus},on:{input:function(t){e.showMenus=t}}})],1)},staticRenderFns:[]}},847:function(e,t,n){var i,o;i=n(423);var a=n(633);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,e.exports=i}});