!function(t){function e(e){for(var n,i,a=e[0],r=e[1],c=0,u=[];c<a.length;c++)i=a[c],o[i]&&u.push(o[i][0]),o[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(s&&s(e);u.length;)u.shift()()}var n={},i={app:0},o={app:0};function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(t){var e=[];i[t]?e.push(i[t]):0!==i[t]&&{category:1,"chunk-15cb3a9a":1,"chunk-4e553224":1,"chunk-6c78028f":1,"chunk-c58f0370":1,detail:1,login:1,mine:1,shopCart:1}[t]&&e.push(i[t]=new Promise(function(e,n){for(var o="css/"+({category:"category",demo:"demo",detail:"detail",login:"login",mine:"mine",search:"search",shopCart:"shopCart"}[t]||t)+"."+{category:"527bef62","chunk-15cb3a9a":"aed073d7","chunk-2d0abc7d":"31d6cfe0","chunk-2d0b307d":"31d6cfe0","chunk-2d2101f1":"31d6cfe0","chunk-2d21dbd6":"31d6cfe0","chunk-4e553224":"ac420c48","chunk-6c78028f":"f6758ace","chunk-c58f0370":"b718a604",demo:"31d6cfe0",detail:"c09ccede",login:"415ad837",mine:"f5a50fce",search:"31d6cfe0",shopCart:"646b8868"}[t]+".css",r=a.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=(f=c[u]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===o||s===r))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var f;if((s=(f=l[u]).getAttribute("data-href"))===o||s===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],d.parentNode.removeChild(d),n(a)},d.href=r,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){i[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(t){return a.p+"js/"+({category:"category",demo:"demo",detail:"detail",login:"login",mine:"mine",search:"search",shopCart:"shopCart"}[t]||t)+"."+{category:"af539a37","chunk-15cb3a9a":"329e27fd","chunk-2d0abc7d":"b37dc461","chunk-2d0b307d":"00a5ea6f","chunk-2d2101f1":"ae4a58c5","chunk-2d21dbd6":"527e97d6","chunk-4e553224":"1ed11b0b","chunk-6c78028f":"e0f09a17","chunk-c58f0370":"66d96cb9",demo:"849ab672",detail:"78857b4e",login:"7a4bdfe1",mine:"4c910233",search:"412e2e64",shopCart:"5b178976"}[t]+".js"}(t),c=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[t]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/xiaomi-shop/",a.oe=function(t){throw t};var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var s=c;a(a.s=0)}({0:function(t,e,n){t.exports=n("56d7")},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"097d":function(t,e,n){t.exports=n("f57e")(358)},"0c2d":function(t,e,n){"use strict";n.r(e);var i={name:"MiIcon",inheritAttrs:!1,props:{name:{type:String,required:!0}}},o=(n("f771"),n("2877")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g(t._b({staticClass:"mui-icon",attrs:{"aria-hidden":"true"}},"svg",t.$attrs,!1),t.$listeners),[n("use",{attrs:{"xlink:href":"#mi-"+t.name}})])},[],!1,null,"e3f28d10",null);e.default=a.exports},1151:function(t,e,n){},"11dd":function(t,e,n){"use strict";n.r(e);var i={name:"MuiFooter"},o=(n("7003"),n("2877")),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mui-footer"},[this._t("default")],2)},[],!1,null,"905140fc",null);e.default=a.exports},"12b7":function(t,e,n){},"17ed":function(t,e,n){},"1b17":function(t,e){t.exports=vendor_vue_2f5ead2a76bb182bc4fc},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),o=n("e53d").document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},2036:function(t,e,n){"use strict";var i=n("1151");n.n(i).a},"20d6":function(t,e,n){t.exports=n("f57e")(280)},2262:function(t,e,n){"use strict";var i=n("e4bc");n.n(i).a},2877:function(t,e,n){"use strict";function i(t,e,n,i,o,a,r,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),i&&(s.functional=!0),a&&(s._scopeId="data-v-"+a),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}n.d(e,"a",function(){return i})},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"2b0e":function(t,e,n){t.exports=n("1b17")(146)},"2f62":function(t,e,n){t.exports=n("1b17")(149)},"2fdb":function(t,e,n){t.exports=n("f57e")(238)},"323e":function(t,e,n){t.exports=n("ba7c")(155)},"35e8":function(t,e,n){var i=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"37b7":function(t,e,n){"use strict";var i=n("55de");n.n(i).a},"39a1":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n("7f7f"),n("7514");var i=n("9883"),o=i.b.find(function(t){return"/index"===t.path}).children.map(function(t){var e=!t.path,n=null;return n=0===t.path.indexOf("/")?t.path:"/index/".concat(t.path),{key:t.name,path:e?"/index":n,title:t.meta.title,exact:e}}),a=[{key:"/index",title:"首页",icon:"home"},{key:"/category",title:"分类",icon:"category"},{key:"/shopCart",title:"购物车",icon:"shopCart"},{key:"/mine",title:"我的",icon:"mine"}]},"3cd6":function(t,e,n){},"3edf":function(t,e,n){"use strict";n.r(e);var i={name:"MuiContent"},o=(n("67e7"),n("2877")),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mui-content"},[this._t("default")],2)},[],!1,null,"73e9fb92",null);e.default=a.exports},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"456d":function(t,e,n){t.exports=n("f57e")(186)},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4c39":function(t,e,n){"use strict";var i=n("fab8");n.n(i).a},"4f04":function(t,e,n){"use strict";var i=n("c2b8");n.n(i).a},"551c":function(t,e,n){t.exports=n("f57e")(288)},"55de":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=n("eb2d"),a={name:"TopHeader",components:{MiIcon:n("0c2d").default},props:{},data:function(){return{}},computed:{visible:function(){return this.$route.meta.showHeader},title:function(){return this.$route.meta.title}},mounted:function(){document.body.appendChild(this.$el)},beforeDestroy:function(){this.$el.remove()}},r=(n("4f04"),n("2877")),c=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"mui-top-header"},[n("span",{on:{click:function(e){return t.$router.go(-1)}}},[n("mi-icon",{attrs:{name:"left"}})],1),n("h3",{staticClass:"mui-top-header-text"},[t._v(t._s(t.title))]),n("span",{on:{click:function(e){return t.$router.push("/search")}}},[n("mi-icon",{attrs:{name:"search"}})],1)]):t._e()])},[],!1,null,"46ca26dc",null).exports,u=n("e4dc"),s=n("39a1"),l={name:"MiApp",components:{MiHome:o.default,TopHeader:c,FooterNav:u.a},data:function(){return{footerNav:s.a}}},f=(n("2036"),Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top-header"),e("router-view",{staticClass:"mi-router-content"}),e("mui-skeleton"),e("footer-nav",{attrs:{"footer-nav":this.footerNav}})],1)},[],!1,null,"54404260",null).exports),d=n("9483");Object(d.register)("".concat("/xiaomi-shop/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(t){}});var p=n("9883"),m=n("2f62");i.default.use(m.default);var h=new m.default.Store({state:{loading:!1},mutations:{changeLoading:function(t,e){t.loading=e}},actions:{}}),v=(n("6762"),n("ac6a"),["MuiToast"]),b=n("e77f");b.keys().forEach(function(t){var e=b(t),n=t.lastIndexOf("/")+1,o=t.lastIndexOf("."),a=t.slice(n,o);v.includes(t)||i.default.component(a,e.default||e)});var g=n("caf9"),y=n("954d"),C=null,_={install:function(t){t.prototype.$toast=function(e){C&&C.closeToast();var n=t.extend(y.default);return"string"==typeof e&&(e={message:e}),(C=new n({propsData:e})).$mount(),document.body.appendChild(C.$el),C.closeToast}}},k=n("d1e3"),x=n.n(k),w=(n("7f7f"),n("323e")),O=n.n(w);n("a5d8"),p.a.beforeEach(function(t,e,n){e.name||h.commit("changeLoading",!0),O.a.start(),n()}),p.a.afterEach(function(t,e){e.name||h.commit("changeLoading",!1),O.a.done()}),i.default.use(g.default,{loading:x.a,attempt:8}),i.default.use(_),n("b19f"),i.default.config.productionTip=!1;var $=new i.default({router:p.a,store:h,render:function(t){return t(f)}}).$mount("#app");e.default=$},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),o=n("584a"),a=n("d864"),r=n("35e8"),c=n("07e3"),u="prototype",s=function(t,e,n){var l,f,d,p=t&s.F,m=t&s.G,h=t&s.S,v=t&s.P,b=t&s.B,g=t&s.W,y=m?o:o[e]||(o[e]={}),C=y[u],_=m?i:h?i[e]:(i[e]||{})[u];for(l in m&&(n=e),n)(f=!p&&_&&void 0!==_[l])&&c(y,l)||(d=f?_[l]:n[l],y[l]=m&&"function"!=typeof _[l]?n[l]:b&&f?a(d,i):g&&_[l]==d?function(t){function e(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)}return e[u]=t[u],e}(d):v&&"function"==typeof d?a(Function.call,d):d,v&&((y.virtual||(y.virtual={}))[l]=d,t&s.R&&C&&!C[l]&&r(C,l,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},6762:function(t,e,n){t.exports=n("f57e")(315)},"67e7":function(t,e,n){"use strict";var i=n("c5e3");n.n(i).a},"6ba0":function(t,e,n){"use strict";var i=n("cf9d");n.n(i).a},"6e62":function(t,e,n){"use strict";var i=n("b940");n.n(i).a},7003:function(t,e,n){"use strict";var i=n("b4c8");n.n(i).a},"73ea":function(t,e,n){"use strict";n.r(e);var i={name:"MuiHeader"},o=(n("fa50"),n("2877")),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mui-header"},[this._t("default")],2)},[],!1,null,"6f529d82",null);e.default=a.exports},7484:function(t,e,n){"use strict";n.r(e),n("7f7f");var i={name:"MuiLayout",data:function(){return{hasAsideClass:{}}},computed:{},mounted:function(){this.getLayoutClass()},methods:{getLayoutClass:function(){var t=this.$children.some(function(t){return"MuiAside"===t.$options.name});this.hasAsideClass={"mui-layout-hasAside":t}}}},o=(n("4c39"),n("2877")),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mui-layout",class:this.hasAsideClass},[this._t("default")],2)},[],!1,null,"01c33bf8",null);e.default=a.exports},7514:function(t,e,n){t.exports=n("f57e")(279)},"78e8":function(t,e,n){"use strict";n.r(e),n("8e6e"),n("ac6a"),n("456d");var i=n("85f2"),o=n.n(i),a=n("2f62"),r={name:"MuiSkeleton",computed:function(t){for(var e=1;e<arguments.length;e++)if(e%2){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){var i,a,r;i=t,r=n[a=e],a in i?o()(i,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[a]=r})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}({},Object(a.mapState)(["loading"])),mounted:function(){}},c=(n("6e62"),n("2877")),u=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("mui-layout",{staticClass:"mui-skeleton",staticStyle:{"z-index":"100"}},[e("mui-header",{staticClass:"mui-skeleton-header"}),e("mui-content",[e("img",{attrs:{src:n("b104"),alt:""}})]),e("mui-footer",{staticClass:"mui-skeleton-footer"})],1):this._e()},[],!1,null,"4f75e5c4",null);e.default=u.exports},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7f7f":function(t,e,n){t.exports=n("f57e")(199)},"85f2":function(t,e,n){t.exports=n("454f")},"894a":function(t,e,n){"use strict";var i=n("3cd6");n.n(i).a},"8c4f":function(t,e,n){t.exports=n("1b17")(150)},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){t.exports=n("f57e")(326)},9483:function(t,e,n){t.exports=n("f57e")(157)},"954d":function(t,e,n){"use strict";n.r(e),n("c5f6"),n("6762"),n("2fdb");var i={name:"MuiToast",props:{message:{type:String},mask:{type:Boolean,default:!1},type:{type:String,validator:function(t){return["default","loading"].includes(t)},default:"default"},icon:{type:String},duration:{type:Number,default:3e3}},data:function(){return{visible:!1}},computed:{isLoading:function(){return"loading"===this.type},hasIcon:function(){return this.isLoading||this.icon}},mounted:function(){this.visible=!0,this.autoClose()},methods:{closeToast:function(){var t=this;this.visible=!1,this.$nextTick(function(){t.$el.remove(),t.$destroy()})},autoClose:function(){var t=this;0!==this.duration&&"loading"!==this.type&&setTimeout(function(){t.closeToast()},this.duration)}}},o=(n("894a"),n("2877")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.visible?n("div",{staticClass:"mui-toast"},[n("div",{staticClass:"mui-toast-content",class:{hasIcon:t.hasIcon}},[t.hasIcon?n("div",{staticClass:"mui-toast-icon"},[t.isLoading?n("mui-icon",{staticClass:"mui-toast-icon-loading",attrs:{name:"loading"}}):n("mui-icon",{attrs:{name:t.icon}})],1):t._e(),t._v("\n      "+t._s(t.message)+"\n    ")]),t.mask?n("div",{staticClass:"mui-toast-mask"}):t._e()]):t._e()])},[],!1,null,"0a3858c9",null);e.default=a.exports},9606:function(t,e,n){"use strict";n.r(e),n("c5f6");var i={name:"MuiNumber",props:{maxNumber:{type:Number,default:999999},minNumber:{type:Number,default:0},number:{type:Number,required:!0}},data:function(){return{}},computed:{disabledAdd:function(){return this.number>=this.maxNumber},disabledMinus:function(){return this.number<=this.minNumber}},methods:{onAdd:function(){this.number>=this.maxNumber?this.$toast("达到最大购买数量"):this.$emit("on-add")},onMinus:function(){this.number<=this.minNumber&&0<=this.number?this.$toast("最少需购买".concat(this.number,"件商品")):this.$emit("on-minus")}}},o=(n("37b7"),n("2877")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mui-number"},[n("span",{staticClass:"mui-number-minus",class:{disabled:t.disabledMinus},on:{click:t.onMinus}},[n("mui-icon",{attrs:{name:"minus"}})],1),n("span",{staticClass:"mui-number-count"},[t._v(t._s(t.number))]),n("span",{staticClass:"mui-number-add",class:{disabled:t.disabledAdd},on:{click:t.onAdd}},[n("mui-icon",{attrs:{name:"plus"}})],1)])},[],!1,null,"39196e4e",null);e.default=a.exports},9883:function(t,e,n){"use strict";n.d(e,"b",function(){return a});var i=n("2b0e"),o=n("8c4f");i.default.use(o.default);var a=[{path:"/",redirect:"/index"},{path:"/index",component:function(){return Promise.resolve().then(n.bind(null,"eb2d"))},redirect:"/index/recommend",meta:{title:"首页",showFooter:!0},children:[{name:"recommend",path:"recommend",component:function(){return n.e("chunk-15cb3a9a").then(n.bind(null,"6e3b"))},meta:{title:"推荐",showFooter:!0}},{name:"phone",path:"phone",component:function(){return n.e("chunk-6c78028f").then(n.bind(null,"3bd8"))},meta:{title:"手机",showFooter:!0}},{name:"computer",path:"computer",component:function(){return n.e("chunk-c58f0370").then(n.bind(null,"ac35"))},meta:{title:"电脑",showFooter:!0}},{name:"video",path:"video",component:function(){return n.e("chunk-4e553224").then(n.bind(null,"1abd"))},meta:{title:"电视",showFooter:!0}},{name:"around",path:"around",component:function(){return n.e("chunk-2d0abc7d").then(n.bind(null,"1778"))},meta:{title:"生活周边",showFooter:!0}},{name:"graduation",path:"graduation",component:function(){return n.e("chunk-2d2101f1").then(n.bind(null,"b717"))},meta:{title:"毕业季",showFooter:!0}},{name:"intelligence",path:"intelligence",component:function(){return n.e("chunk-2d0b307d").then(n.bind(null,"2746"))},meta:{title:"智能",showFooter:!0}},{name:"houseElectrical",path:"houseElectrical",component:function(){return n.e("chunk-2d21dbd6").then(n.bind(null,"d31b"))},meta:{title:"家电",showFooter:!0}}]},{name:"category",path:"/category",component:function(){return n.e("category").then(n.bind(null,"9dcd"))},meta:{title:"分类",showHeader:!0,showFooter:!0}},{name:"shopCart",path:"/shopCart",component:function(){return n.e("shopCart").then(n.bind(null,"fdc5"))},meta:{title:"购物车",showHeader:!0}},{name:"search",path:"/search",component:function(){return n.e("search").then(n.bind(null,"53f8"))},meta:{title:"搜索"}},{name:"mine",path:"/mine",component:function(){return n.e("mine").then(n.bind(null,"059b"))},meta:{title:"我的",showFooter:!0}},{name:"detail",path:"/detail/:id",component:function(){return n.e("detail").then(n.bind(null,"9f4a"))},meta:{title:"详情"}},{name:"login",path:"/login",component:function(){return n.e("login").then(n.bind(null,"31af"))},meta:{title:"登录"}},{name:"example",path:"/example",component:function(){return n.e("demo").then(n.bind(null,"ce47"))},meta:{title:"组件demo"}}];e.a=new o.default({mode:"hash",routes:a})},"9e7c":function(t,e,n){"use strict";var i=n("17ed");n.n(i).a},"9efd":function(t,e,n){"use strict";n.r(e),n("6762"),n("2fdb");var i={name:"MuiPopup",model:{prop:"visible",event:"update:visible"},props:{title:{type:String},visible:{type:Boolean,default:!1},position:{type:String,validator:function(t){return["left","top","right","bottom"].includes(t)},default:"bottom"},maskClosable:{type:Boolean,default:!1},getContainer:{type:String}},mounted:function(){this.getContainer&&document.querySelector(this.getContainer).appendChild(this.$el)},methods:{onClose:function(){this.$emit("update:visible",!1)},onClickMask:function(){this.maskClosable&&this.onClose()}}},o=(n("9e7c"),n("2877")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide",duration:250}},[t.visible?n("div",{staticClass:"mui-popup"},[n("div",{staticClass:"mui-popup-mask",on:{click:t.onClickMask}}),n("div",{staticClass:"mui-popup-content",class:"position-"+t.position},[t.title?n("h3",{staticClass:"mui-popup-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"mui-popup-content-item"},[t._t("default")],2),n("div",{staticClass:"mui-popup-close",on:{click:t.onClose}},[n("mui-icon",{attrs:{name:"close"}})],1)])]):t._e()])},[],!1,null,"71e7b530",null);e.default=a.exports},a5d8:function(t,e,n){},ac6a:function(t,e,n){t.exports=n("f57e")(373)},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b104:function(t,e,n){t.exports=n.p+"img/loading.1107a17d.png"},b19f:function(t,e,n){},b4c8:function(t,e,n){},b64f:function(t,e,n){"use strict";n.r(e);var i={name:"MuiAside"},o=n("2877"),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mui-aside"},[this._t("default")],2)},[],!1,null,"1a2b2dca",null);e.default=a.exports},b940:function(t,e,n){},ba7c:function(t,e){t.exports=vendor_ui_8d33601fc405f35cc9bb},c2b8:function(t,e,n){},c51c:function(t,e,n){},c5e3:function(t,e,n){},c5f6:function(t,e,n){t.exports=n("f57e")(203)},cadf:function(t,e,n){t.exports=n("f57e")(91)},caf9:function(t,e,n){t.exports=n("ba7c")(152)},cf9d:function(t,e,n){},d1e3:function(t,e,n){t.exports=n.p+"img/lazyLoading.9782c8de.gif"},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),o=n("794b"),a=n("1bc3"),r=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return r(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},db87:function(t,e,n){"use strict";var i=n("12b7");n.n(i).a},e036:function(t,e,n){"use strict";n.r(e);var i={name:"MuiDialog",model:{prop:"visible",event:"change"},props:{visible:{type:Boolean,default:!1},title:{type:String},message:{type:String},cancelText:{type:String,default:"取消"},okText:{type:String,default:"确认"},showCancelButton:{type:Boolean,default:!0},showOkButton:{type:Boolean,default:!0}},computed:{hasFooterBorder:function(){return this.showCancelButton&&this.showOkButton}},methods:{onCancel:function(){this.$emit("change",!1),this.$emit("on-cancel"),"function"==typeof this.reject&&this.reject("cancel")},onOk:function(){this.$emit("on-ok"),this.resolve("on-ok"),"function"==typeof this.reject&&this.resolve("ok")}}},o=(n("2262"),n("2877")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"scale"}},[t.visible?n("div",{staticClass:"mui-dialog"},[n("div",{staticClass:"mui-dialog-mask"}),n("div",{staticClass:"mui-dialog-wrapper"},[t.title?n("header",{staticClass:"mui-dialog-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e(),n("main",{staticClass:"mui-dialog-content"},[t._t("default")],2),n("footer",{staticClass:"mui-dialog-footer",class:{hasFooterBorder:t.hasFooterBorder}},[t.showCancelButton?n("p",{staticClass:"mui-dialog-cancel",on:{click:t.onCancel}},[t._v(t._s(t.cancelText))]):t._e(),t.showOkButton?n("p",{staticClass:"mui-dialog-ok",on:{click:t.onOk}},[t._v(t._s(t.okText))]):t._e()])])]):t._e()])},[],!1,null,"58967d66",null);e.default=a.exports},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e4bc:function(t,e,n){},e4dc:function(t,e,n){"use strict";var i=[{key:"/index",title:"首页",icon:"home"},{key:"/category",title:"分类",icon:"category"},{key:"/shopCart",title:"购物车",icon:"shopCart"},{key:"/mine",title:"我的",icon:"mine"}],o={name:"FooterNav",props:{footerNav:{type:Array,default:function(){return i}}},computed:{visible:function(){return this.$route.meta.showFooter}}},a=(n("6ba0"),n("2877")),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("ul",{staticClass:"footer-nav"},t._l(t.footerNav,function(e){return n("router-link",{key:e.key,attrs:{tag:"li","active-class":"active",to:e.key}},[n("mui-icon",{staticClass:"footer-nav-icon",attrs:{name:e.icon}}),n("span",[t._v(t._s(e.title))])],1)}),1):t._e()])},[],!1,null,"213f9824",null);e.a=r.exports},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e77f:function(t,e,n){var i={"./dialog/MuiDialog.vue":"e036","./icon/MuiIcon.vue":"0c2d","./layout/MuiAside.vue":"b64f","./layout/MuiContent.vue":"3edf","./layout/MuiFooter.vue":"11dd","./layout/MuiHeader.vue":"73ea","./layout/MuiLayout.vue":"7484","./number/MuiNumber.vue":"9606","./popup/MuiPopup.vue":"9efd","./skeleton/MuiSkeleton.vue":"78e8","./toast/MuiToast.vue":"954d"};function o(t){var e=a(t);return n(e)}function a(t){var e=i[t];if(e+1)return e;var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}o.keys=function(){return Object.keys(i)},o.resolve=a,(t.exports=o).id="e77f"},eb2d:function(t,e,n){"use strict";n.r(e),n("20d6");var i=n("e4dc"),o=n("39a1"),a=function(t,e){function n(){clearInterval(e.timerId),e.timerId=null}if(e.timerId)return n();e.timerId=null;var i=function(){for(var e=0,n=0;n<t.children.length;n++)e+=t.children[n].offsetWidth;return e-t.offsetWidth}(),o=e.getBoundingClientRect(),a=o.left,r=o.width,c=a-t.offsetWidth/2+r/2,u=c+t.scrollLeft;e.timerId=setInterval(function(){var e=(u-t.scrollLeft)/10;return c<=0&&t.scrollLeft<=0?(t.scrollLeft=0,n()):0<=c&&t.scrollLeft>=i?(t.scrollLeft=i,n()):Math.abs(e)<1?(n(),void(t.scrollLeft=u)):void(t.scrollLeft=t.scrollLeft+e)},10)},r={name:"MiHome",components:{FooterNav:i.a},data:function(){return{headerNav:o.b,footerNav:o.a,reverse:!1,visible:!1}},watch:{"$route.fullPath":function(t,e){var n=o.b.findIndex(function(t){return t.path===e}),i=o.b.findIndex(function(e){return e.path===t});this.reverse=i<n}},mounted:function(){},methods:{activeTab:function(t){return t===this.$route.fullPath?"active":""},randomColor:function(){return{backgroundColor:"rgba(".concat(Array.apply(null,{length:3}).map(function(t){return 255*Math.random()}).join(","),")"),color:"#fff",fontSize:"20px"}},onClickTag:function(t,e){this.visible=!1,this.$router.push(t),this.onClickHeaderNav(e)},onClickHeaderNav:function(t){var e=this.$refs.navWrapper;a(e,e.children[t])}}},c=(n("db87"),n("2877")),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mui-layout",{staticClass:"mi-home"},[n("mui-header",{staticClass:"mi-header"},[n("div",{staticClass:"header-top"},[n("mui-icon",{staticClass:"logo-icon",attrs:{name:"logo"}}),n("div",{staticClass:"search"},[n("mui-icon",{staticClass:"search-icon",attrs:{name:"search"}}),n("span",[t._v("搜索商品名称")])],1),n("mui-icon",{staticClass:"mine-icon",attrs:{name:"mine"},on:{click:function(e){return t.$router.push("/login")}}})],1),n("div",{staticClass:"header-nav"},[n("ul",{ref:"navWrapper",staticClass:"nav-wrapper"},t._l(t.headerNav,function(e,i){return n("li",{key:e.key},[n("router-link",{attrs:{to:e.path,exact:e.exact,"active-class":e.activeClass||"active"},nativeOn:{click:function(e){return t.onClickHeaderNav(i)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)}),0),n("div",{staticClass:"dialog-icon-placeholder"},[n("span",{staticClass:"dialog-icon",on:{click:function(e){t.visible=!t.visible}}},[n("mui-icon",{staticClass:"down-icon",class:{"dialog-show":t.visible},attrs:{name:"down"}})],1)]),n("transition",{attrs:{name:"height"}},[t.visible?n("div",{staticClass:"dialog"},[n("div",{staticClass:"all"},[t._v("全部")]),n("ul",t._l(t.headerNav,function(e,i){return n("li",{key:e.key,on:{click:function(n){return t.onClickTag(e.path,i)}}},[n("span",{class:t.activeTab(e.path)},[t._v(t._s(e.title))])])}),0)]):t._e()])],1)]),n("mui-content",{staticClass:"mi-content"},[n("transition",{attrs:{name:t.reverse?"slide-reverse":"slide"}},[n("router-view",{staticClass:"category",style:t.randomColor()})],1),n("transition",{attrs:{name:"fade"}},[t.visible?n("div",{staticClass:"mask",on:{click:function(e){t.visible=!1}}}):t._e()])],1),n("mui-footer",{staticClass:"footer-placeholder"})],1)},[],!1,null,"b23955f8",null);e.default=u.exports},ef4b:function(t,e,n){},f57e:function(t,e){t.exports=vendor_tools_2107b86e022397c0d75a},f751:function(t,e,n){t.exports=n("f57e")(194)},f771:function(t,e,n){"use strict";var i=n("c51c");n.n(i).a},f772:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},fa50:function(t,e,n){"use strict";var i=n("ef4b");n.n(i).a},fab8:function(t,e,n){}});