(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{"1c32":function(e,s,o){},"31af":function(e,s,o){"use strict";function t(e,s,o){e[s]||(e[s]=[]),e[s].push(o)}function r(e){return Object.keys(e).length<=0}o.r(s),o("ac6a"),o("8615"),o("456d");var n={IDcard:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,mobile:/^1[0-9]{10}$/,telephone:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,num:/^[0-9]*$/,phoneNo:/(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/,policeNo:/^[0-9A-Za-z]{4,10}$/,pwd:/^[0-9A-Za-z]{6,16}$/,isNumAlpha:/^[0-9A-Za-z]*$/,isAlpha:/^[a-zA-Z]*$/,isNumAlphaCn:/^[0-9a-zA-Z\u4E00-\uFA29]*$/,isPostCode:/^[\d\-]*$/i,isNumAlphaUline:/^[0-9a-zA-Z_]*$/,isNumAndThanZero:/^([1-9]\d*(\.\d+)?|0)$/,isNormalEncode:/^(\w|[\u4e00-\u9fa5]){0,}$/,isTableName:/^[a-zA-Z][A-Za-z0-9#$_\-]{0,29}$/,isInt:/^-?\d+$/,isText_30:/^(\W|\w{1}){0,30}$/,isText_50:/^(\W|\w{1}){0,50}$/,isText_20:/^(\W|\w{1}){0,20}$/,isText_100:/^(\W|\w{1}){0,100}$/,isText_250:/^(\W|\w{1}){0,250}$/,isNotChina:/^[^\u4e00-\u9fa5]{0,}$/,imgType:/image\/(png|jpg|jpeg|gif)$/,isChina:/^[\u4e00-\u9fa5]{2,8}$/,isNozeroNumber:/^\+?[1-9]\d*$/,float:/^\d+(\.?|(\.\d+)?)$/,bankCard:"/^([1-9]{1})(d{15}|d{18})$/"},i={phone:n.mobile,email:n.email,bankCard:n.bankCard},a=function(e,s,o){for(var n,a={},l=0;l<s.length;l++){var u=s[l],c=u.key,d=u.required,m=u.minLength,p=u.maxLength,f=u.pattern,h=u.message;if(o&&!r(a))return a;if(d&&(""===(n=e[c])||null==n)&&t(a,c,h),m&&e[c]<m&&t(a,c,h),p&&e[c]>p&&t(a,c,h),f){var g=i[f];g?g.test(e[c])||t(a,c,h):f.test(e[c])||t(a,c,h)}}return a},l=[{key:"phoneNo",required:!0,message:"请输入手机号"},{key:"phoneNo",pattern:"phone",message:"手机号格式不正确"},{key:"codeNo",required:!0,message:"请输入验证码"}],u={name:"PhoneLogin",props:{},data:function(){return{formValues:{phoneNo:"",codeNo:""},codeText:"获取验证码",timerId:null,isCountDown:!1,time:60,errors:{}}},computed:{hasError:function(){return""!==this.errorMsg},errorMsg:function(){return Object.values(this.errors)[0]?Object.values(this.errors)[0][0]:""}},methods:{loginToggle:function(){this.$emit("loginToggle",!1)},getCode:function(){var e=this,s=l.filter(function(e){return"phoneNo"===e.key});this.errors=a(this.formValues,s,!0),r(this.errors)&&(this.timerId||(this.time=60,this.countDownStart(),this.timerId=setInterval(function(){e.time<=0?e.countDownEnd():e.countDownStart()},1e3)))},countDownEnd:function(){clearInterval(this.timerId),this.timerId=null,this.codeText="重新发送",this.isCountDown=!1},countDownStart:function(){this.time--,this.codeText="重新发送(".concat(this.time,")"),this.isCountDown=!0},onSubmit:function(){this.errors=a(this.formValues,l,!0),r(this.errors)&&this.$router.push("/index")}},beforeDestroy:function(){this.countDownEnd()}},c=(o("5867"),o("2877")),d=Object(c.a)(u,function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"phone-login"},[o("div",{staticClass:"input"},[o("div",{staticClass:"input-wrapper",class:{hasError:e.errors.phoneNo}},[o("transition",{attrs:{name:"slide-left",appear:""}},[o("span",{staticClass:"phone-prefix"},[e._v("\n          +86 "),o("mui-icon",{staticClass:"prefix-icon",attrs:{name:"right"}})],1)]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.phoneNo,expression:"formValues.phoneNo"}],attrs:{type:"text",placeholder:"手机号码"},domProps:{value:e.formValues.phoneNo},on:{input:[function(s){s.target.composing||e.$set(e.formValues,"phoneNo",s.target.value)},function(s){e.errors={}}]}})],1),o("div",{staticClass:"input-wrapper",class:{hasError:e.errors.codeNo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.codeNo,expression:"formValues.codeNo"}],attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.formValues.codeNo},on:{input:[function(s){s.target.composing||e.$set(e.formValues,"codeNo",s.target.value)},function(s){e.errors={}}]}}),o("span",{staticClass:"get-code",class:{isCountDown:e.isCountDown},on:{click:e.getCode}},[e._v("\n        "+e._s(e.codeText)+"\n      ")])])]),e.hasError?o("div",{staticClass:"input-error"},[o("mui-icon",{attrs:{name:"error"}}),o("span",{staticClass:"error-text"},[e._v(e._s(e.errorMsg))])],1):e._e(),o("div",{staticClass:"buttons"},[o("button",{on:{click:e.onSubmit}},[e._v("立即登录/注册")]),o("button",{on:{click:e.loginToggle}},[e._v("用户名密码登录")])])])},[],!1,null,"0a3fb266",null).exports,m=[{key:"username",required:!0,message:"请输入账号"},{key:"password",required:!0,message:"请输入密码"}],p={name:"PhoneLogin",props:{},data:function(){return{formValues:{username:"",password:""},username:"",password:"",isEyeOpen:!1,errors:{}}},computed:{passwordType:function(){return this.isEyeOpen?"text":"password"},hasError:function(){return""!==this.errorMsg},errorMsg:function(){return Object.values(this.errors)[0]?Object.values(this.errors)[0][0]:""}},methods:{loginToggle:function(){this.$emit("loginToggle",!0)},onClickEye:function(){this.isEyeOpen=!this.isEyeOpen},onSubmit:function(){this.errors=a(this.formValues,m,!0),r(this.errors)&&this.$router.push("/index")}}},f=(o("6d75"),{name:"MiLogin",components:{PhoneLogin:d,PasswordLogin:Object(c.a)(p,function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"password-login"},[o("div",{staticClass:"input"},[o("div",{staticClass:"input-wrapper",class:{hasError:e.errors.username}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.username,expression:"formValues.username"}],attrs:{type:"text",placeholder:"邮箱/手机号码/小米ID"},domProps:{value:e.formValues.username},on:{input:[function(s){s.target.composing||e.$set(e.formValues,"username",s.target.value)},function(s){e.errors={}}]}})]),o("div",{staticClass:"input-wrapper",class:{hasError:e.errors.password}},["checkbox"===e.passwordType?o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.password,expression:"formValues.password"}],attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(e.formValues.password)?-1<e._i(e.formValues.password,null):e.formValues.password},on:{input:function(s){e.errors={}},change:function(s){var o=e.formValues.password,t=s.target,r=!!t.checked;if(Array.isArray(o)){var n=e._i(o,null);t.checked?n<0&&e.$set(e.formValues,"password",o.concat([null])):-1<n&&e.$set(e.formValues,"password",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.formValues,"password",r)}}}):"radio"===e.passwordType?o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.password,expression:"formValues.password"}],attrs:{placeholder:"密码",type:"radio"},domProps:{checked:e._q(e.formValues.password,null)},on:{input:function(s){e.errors={}},change:function(s){return e.$set(e.formValues,"password",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.formValues.password,expression:"formValues.password"}],attrs:{placeholder:"密码",type:e.passwordType},domProps:{value:e.formValues.password},on:{input:[function(s){s.target.composing||e.$set(e.formValues,"password",s.target.value)},function(s){e.errors={}}]}}),o("span",{staticClass:"eye",class:{isEyeOpen:e.isEyeOpen},on:{click:e.onClickEye}},[o("mui-icon",{attrs:{name:"eye"}})],1)])]),e.hasError?o("div",{staticClass:"input-error"},[o("mui-icon",{attrs:{name:"error"}}),o("span",{staticClass:"error-text"},[e._v(e._s(e.errorMsg))])],1):e._e(),o("div",{staticClass:"buttons"},[o("button",{on:{click:e.onSubmit}},[e._v("登录")]),o("button",{on:{click:e.loginToggle}},[e._v("手机短信登录/注册")])])])},[],!1,null,"1567a5ec",null).exports},data:function(){return{isPhoneLogin:!0,footerTop:0}},computed:{},mounted:function(){this.calculateTop()},methods:{loginToggle:function(e){this.isPhoneLogin=e},calculateTop:function(){var e=document.documentElement.offsetHeight,s=this.$refs.footer.offsetHeight;this.footerTop=e-s}}}),h=(o("b2bf"),Object(c.a)(f,function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"mi-login"},[o("div",{staticClass:"mi-login-header"},[o("div",{staticClass:"mi-login-logo"},[o("mui-icon",{attrs:{name:"logo"}})],1),o("h3",{staticClass:"mi-login-title"},[e._v("小米账号登录")])]),e.isPhoneLogin?o("phone-login",{on:{loginToggle:e.loginToggle}}):o("password-login",{on:{loginToggle:e.loginToggle}}),o("div",{staticClass:"mi-login-mode"},[e._m(0),o("div",{staticClass:"mi-login-mode-icons"},[o("mui-icon",{attrs:{name:"sina"}}),o("mui-icon",{attrs:{name:"alipay"}}),o("mui-icon",{attrs:{name:"wechat"}})],1)]),o("div",{ref:"footer",staticClass:"mi-login-footer",style:{top:e.footerTop+"px"}},[e._m(1)])],1)},[function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"mi-login-mode-text"},[o("span",{staticClass:"mi-login-line-left"}),o("span",{staticClass:"mi-login-text-center"},[e._v("其它方式登录")]),o("span",{staticClass:"mi-login-line-right"})])},function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ul",{staticClass:"mi-login-footer-text"},[o("li",[e._v("简体")]),o("li",[e._v("繁体")]),o("li",[e._v("English")]),o("li",[e._v("常见问题")]),o("li",[e._v("隐私政策")])])}],!1,null,"409d78c4",null));s.default=h.exports},5867:function(e,s,o){"use strict";var t=o("f3d2");o.n(t).a},"6bb4":function(e,s,o){},"6d75":function(e,s,o){"use strict";var t=o("6bb4");o.n(t).a},8615:function(e,s,o){e.exports=o("f57e")(327)},b2bf:function(e,s,o){"use strict";var t=o("1c32");o.n(t).a},f3d2:function(e,s,o){}}]);