(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4795:function(e,t,n){},"4b4e":function(e,t,n){},"51b6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,u,o){var c=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])(c,{class:"view"})])}var u={name:"App",data:function(){return{}}};n("b826");u.render=a;var o=u,c=n("5502"),i={name:"Test"},s={mutationTest:function(e){console.log("mutation Test function")},login:function(e,t){console.log(t.id,t.password)}},l=n("1da1"),d=(n("b0c0"),n("96cf"),n("bc3a")),f=n.n(d),p=(n("99af"),n("ac1f"),n("466d"),{setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+n),document.cookie="".concat(e,"=").concat(t,";expires=").concat(r.toUTCString(),";path='/'")},getCookie:function(e){var t=document.cookie.match("(^|;)?".concat(e,"=([^;]*)(;|$)"));return t?t[2]:null},deleteCookie:function(e){var t=new Date;document.cookie="".concat(e,"='';expires=").concat(t.toUTCString(),";path=/")}}),b={actionTest:function(e){console.log("action Test function")},requestLogin:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,r={id:t.id,password:t.password},n.next=4,f.a.post("/users/login",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},requestSignup:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,r={id:t.id,name:t.name,password:t.password,email:t.email},n.next=4,f.a.post("/users/signup",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},requestUniqueIdCheck:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,r={id:t},n.next=4,f.a.post("/users/isuniqueid",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},requestUserInfo:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state,t.next=3,f.a.post("/users/isuniqueid");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},requestModifyUserInfo:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,r={id:t.id,name:t.name,password:t.password,email:t.email},n.next=4,f.a.post("/users/isuniqueid",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}},m=Object(c["a"])({state:i,mutations:s,actions:b}),O=m,j=n("6c02"),w=Object(r["B"])("data-v-1b6c7950");Object(r["r"])("data-v-1b6c7950");var h=Object(r["f"])("h1",null,"Home",-1),g=Object(r["e"])("회원정보"),v=Object(r["f"])("main",null," Home ",-1),y=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var k=w((function(e,t,n,a,u,o){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[h,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(e){return o.logout()})},"logout"),Object(r["f"])(c,{to:"/modify"},{default:w((function(){return[g]})),_:1})]),v,y])})),q={name:"Home",data:function(){return{id:"",password:""}},methods:{logout:function(){try{p.deleteCookie("user"),this.$router.push("/login")}catch(e){console.error("logout failed:",e)}}}};n("da45");q.render=k,q.__scopeId="data-v-1b6c7950";var x=q,S=Object(r["B"])("data-v-6b180db4");Object(r["r"])("data-v-6b180db4");var U={class:"card"},A=Object(r["f"])("h1",null,"login",-1),C=Object(r["e"])("signup"),I={class:"form"},R=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var _=S((function(e,t,n,a,u,o){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",U,[Object(r["f"])("header",null,[A,Object(r["f"])(c,{to:"/signup"},{default:S((function(){return[C]})),_:1}),Object(r["e"])(" "+Object(r["w"])(u.loginStatus),1)]),Object(r["f"])("main",null,[Object(r["f"])("div",I,[Object(r["A"])(Object(r["f"])("input",{id:"id","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.id=e})},null,512),[[r["y"],u.id]]),Object(r["A"])(Object(r["f"])("input",{id:"pw",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.password=e})},null,512),[[r["y"],u.password]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(e){return o.requestLogin({id:u.id,password:u.password},o.success,o.failed)})},"submit")])]),R])})),M={name:"Login",data:function(){return{id:"",password:"",loginStatus:""}},methods:{success:function(){this.loginStatus="",this.$router.push({path:"/"})},failed:function(){this.loginStatus="failed"},requestLogin:function(e,t,n){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.loginStatus="ongoing",a.prev=1,a.next=4,r.$store.dispatch("requestLogin",e);case 4:u=a.sent,201===u.status&&t(),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](1),n(),console.error("login failed:",a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()}}};n("d423");M.render=_,M.__scopeId="data-v-6b180db4";var V=M,T=Object(r["B"])("data-v-c248415a");Object(r["r"])("data-v-c248415a");var $=Object(r["f"])("h1",null,"Signup",-1),E=Object(r["e"])("Home"),P={class:"form"},H=Object(r["e"])(" 이름 "),L=Object(r["e"])(" 아이디 "),B=Object(r["e"])(" 비밀번호 "),D=Object(r["e"])(" 비밀번호 재확인 "),J={key:0},z=Object(r["e"])(" 이메일 "),F=Object(r["f"])("footer",null," footer ",-1);Object(r["p"])();var G=T((function(e,t,n,a,u,o){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[$,Object(r["f"])(c,{to:"/"},{default:T((function(){return[E]})),_:1})]),Object(r["f"])("main",null,[Object(r["e"])(" signup "+Object(r["w"])(u.requestStatus)+" ",1),Object(r["f"])("div",P,[Object(r["f"])("label",null,[H,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.name=e})},null,512),[[r["y"],u.name]])]),Object(r["f"])("label",null,[L,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"id","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.id=e})},null,512),[[r["y"],u.id]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(e){return o.requestUniqueIdCheck(u.id,o.successUniqueIdCheck,o.failedUniqueIdCheck)})},"중복확인")]),Object(r["f"])("label",null,[B,Object(r["A"])(Object(r["f"])("input",{type:"password",name:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.password=e})},null,512),[[r["y"],u.password]])]),Object(r["f"])("label",null,[D,Object(r["A"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return u.passwordAgain=e})},null,512),[[r["y"],u.passwordAgain]]),""!==u.password&&u.password!==u.passwordAgain?(Object(r["o"])(),Object(r["c"])("p",J,"비밀번호가 일치하지 않습니다.")):Object(r["d"])("",!0)]),Object(r["f"])("label",null,[z,Object(r["A"])(Object(r["f"])("input",{type:"email",name:"email","onUpdate:modelValue":t[6]||(t[6]=function(e){return u.email=e})},null,512),[[r["y"],u.email]])]),Object(r["f"])("button",{onClick:t[7]||(t[7]=function(e){return o.requestSignup({name:u.name,id:u.id,password:u.password,passwordAgain:u.passwordAgain,email:u.email},o.successSignup,o.failedSignup)})},"signup")])]),F])})),K={name:"Signup",data:function(){return{name:"",id:"",password:"",passwordAgain:"",email:"",requestStatus:"",isUniqueId:!1}},methods:{requestUniqueIdCheck:function(e,t,n){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.$store.dispatch("requestUniqueIdCheck",e);case 3:u=a.sent,201===u.status&&t(),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),n();case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},successUniqueIdCheck:function(){confirm("사용 가능한 아이디입니다!"),this.isUniqueId=!0},failedUniqueIdCheck:function(){confirm("사용 불가능한 아이디입니다."),this.isUniqueId=!1},requestSignup:function(e,t,n){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var u,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.requestStatus="ongoing",a.prev=1,u=r.passwordEqualCheck(e.password,e.passwordAgain),!1!==u){a.next=5;break}throw new Error("password is not equal");case 5:if(!1!==r.isUniqueId){a.next=8;break}throw confirm("아이디 중복을 확인해 주십시오."),new Error("duplicated id");case 8:return o={name:e.name,id:e.id,password:e.password,email:e.email},a.next=11,r.$store.dispatch("requestSignup",o);case 11:c=a.sent,201===c.status&&t(),a.next=19;break;case 15:a.prev=15,a.t0=a["catch"](1),n(),console.error("signup failed:",a.t0);case 19:case"end":return a.stop()}}),a,null,[[1,15]])})))()},passwordEqualCheck:function(e,t){return e?e===t||(confirm("비밀번호가 일치하지 않습니다."),!1):(confirm("비밀번호를 입력해 주십시오."),!1)},successSignup:function(){this.requestStatus="success",this.$router.push({path:"/"})},failedSignup:function(){this.requestStatus="failed"}}};n("6e10");K.render=G,K.__scopeId="data-v-c248415a";var N=K,Q=Object(r["B"])("data-v-4ff73692");Object(r["r"])("data-v-4ff73692");var W=Object(r["f"])("h1",null,"Modify",-1),X=Object(r["e"])("Home"),Y={class:"form"},Z=Object(r["e"])("user: "),ee=Object(r["e"])("name: "),te=Object(r["e"])("email: "),ne=Object(r["e"])("new password:"),re=Object(r["e"])("new password again:"),ae=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var ue=Q((function(e,t,n,a,u,o){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[W,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(e){return o.logout()})},"logout"),Object(r["f"])(c,{to:"/"},{default:Q((function(){return[X]})),_:1})]),Object(r["f"])("main",null,[Object(r["f"])("div",Y,[Object(r["f"])("label",null,[Z,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"id","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.value=t}),readonly:""},null,512),[[r["y"],e.value]])]),Object(r["f"])("label",null,[ee,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[3]||(t[3]=function(e){return u.name=e})},null,512),[[r["y"],u.name]])]),Object(r["f"])("label",null,[te,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.email=e})},null,512),[[r["y"],u.email]])]),Object(r["f"])("label",null,[ne,Object(r["A"])(Object(r["f"])("input",{type:"password",name:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return u.password=e})},null,512),[[r["y"],u.password]])]),Object(r["f"])("label",null,[re,Object(r["A"])(Object(r["f"])("input",{type:"password",name:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return u.passwordAgain=e})},null,512),[[r["y"],u.passwordAgain]])]),Object(r["f"])("button",{onClick:t[7]||(t[7]=function(e){return o.requestModifyUserInfo({id:u.id,name:u.name,email:u.email,password:u.password,passwordAgain:u.passwordAgain},o.successModify,o.failedModify)})},"정보 변경"),Object(r["e"])(Object(r["w"])(u.requestStatus),1)])]),ae])})),oe={name:"Modify",data:function(){return{id:"",name:"",password:"",passwordAgain:"",email:"",requestStatus:""}},mounted:function(){var e=this,t=function(t){e.id=t.id,e.name=t.name,e.email=t.email},n=function(){confirm("유저 정보를 불러오지 못했어요.")};this.requestUserInfo(t,n)},methods:{logout:function(){try{p.deleteCookie("user"),this.$router.push("/login")}catch(e){console.error("logout failed:",e)}},requestUserInfo:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={},r.prev=1,r.next=4,n.$store.dispatch("requestUserInfo");case 4:u=r.sent,e(u.data),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](1),t(),console.error("logout failed:",r.t0);case 12:return r.abrupt("return",a);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},requestModifyUserInfo:function(e,t,n){var r=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var u,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.requestStatus="ongoing",a.prev=1,u=r.passwordEqualCheck(e.password,e.passwordAgain),!1!==u){a.next=5;break}throw new Error("password is not equal");case 5:return o={name:e.name,id:e.id,password:e.password,email:e.email},a.next=8,r.$store.dispatch("requestSignup",o);case 8:c=a.sent,201===c.status&&t(),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](1),n(),console.error("modify failed:",a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,12]])})))()},passwordEqualCheck:function(e,t){return e?e===t||(confirm("비밀번호가 일치하지 않습니다."),!1):(confirm("비밀번호를 입력해 주십시오."),!1)},successModify:function(){this.requestStatus="success",this.$router.push({path:"/"})},failedModify:function(){this.requestStatus="failed"}}};n("85db");oe.render=ue,oe.__scopeId="data-v-4ff73692";var ce=oe,ie=[{path:"/",name:"Home",component:x},{path:"/login",name:"Login",component:V},{path:"/signup",name:"Signup",component:N},{path:"/modify",name:"Modify",component:ce}],se=Object(j["a"])({history:Object(j["b"])(),routes:ie});se.beforeEach((function(e,t,n){var r=!0;"/login"===e.path||"/signup"===e.path?r?n("/"):n():r?n():n("/login")}));var le=se,de=n("2106"),fe=n.n(de),pe=Object(r["b"])(o);pe.use(O),pe.use(le),pe.use(fe.a,f.a),pe.mount("#app")},"6e10":function(e,t,n){"use strict";n("51b6")},"85db":function(e,t,n){"use strict";n("4795")},b826:function(e,t,n){"use strict";n("f0b2")},d423:function(e,t,n){"use strict";n("4b4e")},da45:function(e,t,n){"use strict";n("ff34")},f0b2:function(e,t,n){},ff34:function(e,t,n){}});
//# sourceMappingURL=app.55777186.js.map