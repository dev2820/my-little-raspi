(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2820:function(e,t,n){"use strict";n("fdb0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,u){var c=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])(c,{class:"view"})])}var o={name:"App",data:function(){return{}}};n("b826");o.render=a;var u=o,c=n("5502"),i={name:"Test"},s={mutationTest:function(e){console.log("mutation Test function")},login:function(e,t){console.log(t.id,t.password)}},l=n("1da1"),p=(n("b0c0"),n("96cf"),n("bc3a")),d=n.n(p),f={actionTest:function(e){console.log("action Test function")},requestLogin:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,r={id:t.id,password:t.password},n.next=4,d.a.post("/users/login",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},requestSignup:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,r={name:t.name,id:t.id,password:t.password,email:t.email},n.next=4,d.a.post("/users/signup",r);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}},b=Object(c["a"])({state:i,mutations:s,actions:f}),O=b,j=n("6c02"),m=Object(r["B"])("data-v-f7dd37b4");Object(r["r"])("data-v-f7dd37b4");var g=Object(r["f"])("h1",null,"Home",-1),v=Object(r["f"])("main",null," Here is Home. what can i do here? ",-1),w=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var h=m((function(e,t,n,a,o,u){return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[g,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(e){return u.logout()})},"logout")]),v,w])})),y=(n("99af"),n("ac1f"),n("466d"),{setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+n),document.cookie="".concat(e,"=").concat(t,";expires=").concat(r.toUTCString(),";path='/'")},getCookie:function(e){var t=document.cookie.match("(^|;)?".concat(e,"=([^;]*)(;|$)"));return t?t[2]:null},deleteCookie:function(e){var t=new Date;document.cookie="".concat(e,"='';expires=").concat(t.toUTCString(),";path=/")}}),k={name:"Home",data:function(){return{id:"",password:""}},methods:{logout:function(){try{y.deleteCookie("user"),this.$router.push("/login")}catch(e){console.error("logout failed:",e)}}}};n("67e8");k.render=h,k.__scopeId="data-v-f7dd37b4";var x=k,S=Object(r["B"])("data-v-1760b0a3");Object(r["r"])("data-v-1760b0a3");var A={class:"card"},_=Object(r["f"])("h1",null,"login",-1),T=Object(r["e"])("signup"),C={class:"form"},U=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var R=S((function(e,t,n,a,o,u){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",A,[Object(r["f"])("header",null,[_,Object(r["f"])(c,{to:"/signup"},{default:S((function(){return[T]})),_:1}),Object(r["e"])(" "+Object(r["w"])(o.loginStatus),1)]),Object(r["f"])("main",null,[Object(r["f"])("div",C,[Object(r["A"])(Object(r["f"])("input",{id:"id","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.id=e})},null,512),[[r["y"],o.id]]),Object(r["A"])(Object(r["f"])("input",{id:"pw",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e})},null,512),[[r["y"],o.password]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(e){return u.login(o.id,o.password)})},"submit")])]),U])})),P={name:"Login",data:function(){return{id:"",password:"",loginStatus:""}},methods:{login:function(e,t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.loginStatus="ongoing",r.prev=1,r.next=4,n.$store.dispatch("requestLogin",{id:e,password:t});case 4:a=r.sent,console.log(a),200==a.status&&(n.loginStatus="",n.$router.push({path:"/"})),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),n.loginStatus="failed";case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}};n("2820");P.render=R,P.__scopeId="data-v-1760b0a3";var V=P,H=Object(r["B"])("data-v-240ba9a4");Object(r["r"])("data-v-240ba9a4");var $=Object(r["f"])("h1",null,"Signup",-1),q=Object(r["e"])("Home"),L=Object(r["e"])(" signup "),M={class:"form"},B=Object(r["e"])(" 이름 "),I=Object(r["e"])(" 아이디 "),D=Object(r["e"])(" 비밀번호 "),J=Object(r["e"])(" 비밀번호 재확인 "),E={key:0},z=Object(r["e"])(" 이메일 "),F=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var G=H((function(e,t,n,a,o,u){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[$,Object(r["f"])(c,{to:"/"},{default:H((function(){return[q]})),_:1})]),Object(r["f"])("main",null,[L,Object(r["f"])("div",M,[Object(r["f"])("label",null,[B,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.name=e})},null,512),[[r["y"],o.name]])]),Object(r["f"])("label",null,[I,Object(r["A"])(Object(r["f"])("input",{type:"text",name:"id","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.id=e})},null,512),[[r["y"],o.id]])]),Object(r["f"])("label",null,[D,Object(r["A"])(Object(r["f"])("input",{type:"password",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.password=e})},null,512),[[r["y"],o.password]])]),Object(r["f"])("label",null,[J,Object(r["A"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.passwordAgain=e})},null,512),[[r["y"],o.passwordAgain]]),""!==o.password&&o.password!==o.passwordAgain?(Object(r["o"])(),Object(r["c"])("p",E,"비밀번호가 일치하지 않습니다.")):Object(r["d"])("",!0)]),Object(r["f"])("label",null,[z,Object(r["A"])(Object(r["f"])("input",{type:"email",name:"email","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.email=e})},null,512),[[r["y"],o.email]])]),Object(r["f"])("button",{onClick:t[6]||(t[6]=function(e){return u.signup({name:o.name,id:o.id,password:o.password,passwordAgain:o.passwordAgain,email:o.email})})},"signup")])]),F])})),K={name:"Signup",data:function(){return{name:"",id:"",password:"",passwordAgain:"",email:"",loginStatus:""}},methods:{signup:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.passwordAgain===e.password){n.next=3;break}return confirm("비밀번호가 일치하지 않습니다."),n.abrupt("return");case 3:return n.prev=3,t.loginStatus="ongoing",r={name:e.name,id:e.id,password:e.password,email:e.email},n.next=8,t.$store.dispatch("requestSignup",r);case 8:a=n.sent,a.status<400?(t.loginStatus="success",t.$router.push({path:"/"})):t.loginStatus="failed",n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](3),console.error("signup failed:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})))()}}};n("87af");K.render=G,K.__scopeId="data-v-240ba9a4";var N=K,Q=[{path:"/",name:"Home",component:x},{path:"/login",name:"Login",component:V},{path:"/signup",name:"Signup",component:N}],W=Object(j["a"])({history:Object(j["b"])(),routes:Q});W.beforeEach((function(e,t,n){var r=y.getCookie("user")||null;"/login"===e.path||"/signup"===e.path?r?n("/"):n():r?n():n("/login")}));var X=W,Y=n("2106"),Z=n.n(Y),ee=Object(r["b"])(u);ee.use(O),ee.use(X),ee.use(Z.a,d.a),ee.mount("#app")},"5a0f":function(e,t,n){},"67e8":function(e,t,n){"use strict";n("5a0f")},"87af":function(e,t,n){"use strict";n("d3f9")},b826:function(e,t,n){"use strict";n("f0b2")},d3f9:function(e,t,n){},f0b2:function(e,t,n){},fdb0:function(e,t,n){}});
//# sourceMappingURL=app.cc65cef8.js.map