webpackJsonp([1],{0:function(t,e){},1:function(t,e){},"4/se":function(t,e,i){"use strict";var n={data:function(){return{}},props:{ifShowContent:Boolean,bookAvailable:{type:Boolean,default:!1},navigation:Object},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}},components:{}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-right"}},[i("div",{staticClass:"content"},[t.bookAvailable?i("div",{staticClass:"content-wrapper"},t._l(t.navigation.toc,function(e,n){return i("div",{key:n,staticClass:"content-item",on:{click:function(i){return t.jumpTo(e.href)}}},[i("span",{staticClass:"text"},[t._v(t._s(e.label))])])}),0):i("div",{staticClass:"empty"},[t._v("加载中...")])])])},staticRenderFns:[]};var o={components:{ContentView:i("VU/8")(n,s,!1,function(t){i("FFI9")},"data-v-68e9628c",null).exports},props:{ifTitleAndMenuShow:{type:Boolean,default:!1},fontSizeList:{type:Array},defaultFontSize:Number,themeList:Array,defaultTheme:Number,bookAvailable:Boolean,navigation:Object},data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},methods:{jumpTo:function(t){this.$emit("jumpTo",t),this.ifShowContent=!1},hideConent:function(){this.ifShowContent=!1},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="$(this.progress)% 100%"},onProgressChange:function(t){this.$emit("onProgressChange",t)},setTheme:function(t){this.$emit("setTheme",t)},showSetting:function(t){if(3===t)this.$emit("closeAll"),this.ifShowContent=!0;else{if(this.showTag===t&&this.ifSettingShow)return void(this.ifSettingShow=!1);this.ifSettingShow=!0,this.showTag=t}},hideSetting:function(){this.ifSettingShow=!1},setFontSize:function(t){console.log(1),this.$emit("setFontSize",t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-bar"},[i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleAndMenuShow}},[i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-menu icon",on:{click:function(e){return t.showSetting(3)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-progress icon",on:{click:function(e){return t.showSetting(2)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-bright icon",on:{click:function(e){return t.showSetting(1)}}})]),t._v(" "),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-a icon",on:{click:function(e){return t.showSetting(0)}}},[t._v("A")])])])]),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[0===t.showTag?i("div",{staticClass:"setting-font-size"},[i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),t._v(" "),i("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,n){return i("div",{key:n,staticClass:"select-wrapper",on:{click:function(i){return t.setFontSize(e.fontSize)}}},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"point-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize === item.fontSize"}],staticClass:"point"},[i("div",{staticClass:"small-point"})])]),t._v(" "),i("div",{staticClass:"line"})])}),0),t._v(" "),i("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):1===t.showTag?i("div",{staticClass:"setting-theme"},t._l(t.themeList,function(e,n){return i("div",{key:n,staticClass:"setting-theme-item",on:{click:function(e){return t.setTheme(n)}}},[i("div",{staticClass:"preview",class:{"no-border":"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),t._v(" "),i("div",{staticClass:"text",class:{selected:n===t.defaultTheme}},[t._v(t._s(e.name))])])}),0):2===t.showTag?i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"progress-wrapper"},[i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}})])]):t._e(),t._v(" "),2===t.showTag?i("div",{staticClass:"text-wrapper"},[i("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"加载中..."))])]):t._e()])]),t._v(" "),i("transition",{attrs:{name:"slide-right"}},[i("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvailable:t.bookAvailable},on:{jumpTo:t.jumpTo}})],1),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideConent}})])],1)},staticRenderFns:[]};var r=i("VU/8")(o,a,!1,function(t){i("P1Md")},"data-v-778aabb7",null);e.a=r.exports},FFI9:function(t,e){},G1q7:function(t,e){},HmXm:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW");document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},s,!1,function(t){i("rQXl")},null,null).exports,a=i("/ocq"),r=i("cTCA"),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook"},[i("title-bar",{attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow}}),t._v(" "),i("div",{staticClass:"read-wrapper"},[i("div",{attrs:{id:"read"}}),t._v(" "),i("div",{staticClass:"mask"},[i("div",{staticClass:"left",on:{click:t.prevPage}}),t._v(" "),i("div",{staticClass:"center",on:{click:t.toggleTitleAndMenu}}),t._v(" "),i("div",{staticClass:"right",on:{click:t.nextPage}})])]),t._v(" "),i("menu-bar",{ref:"menuBar",attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo,closeAll:t.closeAll}})],1)},staticRenderFns:[]};var l=function(t){i("HmXm")},h=i("VU/8")(r.a,c,!1,l,"data-v-58ceb7f9",null).exports;n.a.use(a.a);var u=new a.a({routes:[{path:"/",redirect:"/ebook"},{path:"/ebook",component:h}]});i("jYjM"),i("G1q7");n.a.config.productionTip=!1,new n.a({el:"#app",router:u,components:{App:o},template:"<App/>"})},P1Md:function(t,e){},TjKM:function(t,e){},cTCA:function(t,e,i){"use strict";(function(t){var n=i("VXRH"),s=i("tdlb"),o=i("4/se");t.ePub=n.a,e.a={components:{TitleBar:s.a,MenuBar:o.a},data:function(){return{ifTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241,236,226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:{}}},methods:{jumpTo:function(t){this.rendition.display(t),this.hideTitleAndMenu()},hideTitleAndMenu:function(){this.ifTitleAndMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()},onProgressChange:function(t){var e=t/100,i=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(i)},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},registerTheme:function(){var t=this;this.themeList.forEach(function(e){t.themes.register(e.name,e.style)})},setFontSize:function(t){this.defaultFontSize=t,this.themes&&(console.log(this.themes),this.themes.fontSize(t+"px"))},toggleTitleAndMenu:function(){this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow,this.ifTitleAndMenuShow||this.$refs.menuBar.hideSetting()},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition&&this.rendition.next()},showEpub:function(){var t=this;this.book=new n.a("/static/2018_Book_AgileProcessesInSoftwareEngine.epub"),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,console.log(t.navigation),t.book.locations.generate()}).then(function(e){t.locations=t.book.locations,t.bookAvailable=!0})},closeAll:function(){this.toggleTitleAndMenu()}},mounted:function(){this.showEpub()}}}).call(e,i("DuR2"))},jYjM:function(t,e){},rQXl:function(t,e){},tdlb:function(t,e,i){"use strict";var n={props:{ifTitleAndMenuShow:{type:Boolean,default:!1}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide-down"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"title-wrapper"},[e("div",{staticClass:"left"},[e("span",{staticClass:"icon-back icon"})]),this._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-cart icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-person icon"})]),this._v(" "),e("div",{staticClass:"icon-wrapper"},[e("span",{staticClass:"icon-more icon"})])])])])},staticRenderFns:[]};var o=i("VU/8")(n,s,!1,function(t){i("TjKM")},"data-v-01869dc1",null);e.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.bd8867fa58d529ec6752.js.map