(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],p=0,f=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,u){var c=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])(c,{class:"view"})])}var o={name:"App",data:function(){return{}}};n("b826");o.render=a;var u=o,c=n("5502"),i={name:"Test"},s={mutationTest:function(e){console.log("mutation Test function")},login:function(e,t){console.log(t.id,t.password)}},l=n("bc3a"),p=n.n(l),f={actionTest:function(e){console.log("action Test function")}},d=Object(c["a"])({state:i,mutations:s,actions:f}),b=d,O=n("6c02"),j=Object(r["A"])("data-v-661402e6");Object(r["r"])("data-v-661402e6");var m=Object(r["f"])("h1",null,"Home",-1),v=Object(r["f"])("main",null," Here is Home. what can i do here? ",-1),g=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var h=j((function(e,t,n,a,o,u){return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[m,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(e){return u.logout()})})]),v,g])})),w=n("1da1"),x=(n("96cf"),{name:"Home",data:function(){return{id:"",password:""}},methods:{logout:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("/logout");case 3:n=t.sent,200===n.status&&e.$router.push("/login"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("logout failed:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}});n("bacb");x.render=h,x.__scopeId="data-v-661402e6";var y=x,k=Object(r["A"])("data-v-35702834");Object(r["r"])("data-v-35702834");var _={class:"card"},S=Object(r["f"])("h1",null,"login",-1),A=Object(r["e"])("signup"),T={class:"form"},z=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var P=k((function(e,t,n,a,o,u){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",_,[Object(r["f"])("header",null,[S,Object(r["f"])(c,{to:"/signup"},{default:k((function(){return[A]})),_:1})]),Object(r["f"])("main",null,[Object(r["f"])("div",T,[Object(r["z"])(Object(r["f"])("input",{id:"id","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.id=e})},null,512),[[r["x"],o.id]]),Object(r["z"])(Object(r["f"])("input",{id:"pw",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e})},null,512),[[r["x"],o.password]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(e){return u.login(o.id,o.password)})},"submit")])]),z])})),U={name:"Login",data:function(){return{id:"",password:""}},methods:{login:function(e,t){var n=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n.$http.post("/login",{id:e,password:t});case 3:a=r.sent,200===a.status&&n.$router.push("/"),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("login failed:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}};n("7c39");U.render=P,U.__scopeId="data-v-35702834";var V=U,H=(n("b0c0"),Object(r["A"])("data-v-7096965a"));Object(r["r"])("data-v-7096965a");var R=Object(r["f"])("h1",null,"Signup",-1),$=Object(r["e"])("Home"),I=Object(r["e"])(" signup "),M={class:"form"},C=Object(r["e"])(" 이름 "),J=Object(r["e"])(" 아이디 "),L=Object(r["e"])(" 비밀번호 "),E=Object(r["e"])(" 비밀번호 재확인 "),q={key:0},B=Object(r["e"])(" 이메일 "),D=Object(r["f"])("footer",null,null,-1);Object(r["p"])();var F=H((function(e,t,n,a,o,u){var c=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("header",null,[R,Object(r["f"])(c,{to:"/"},{default:H((function(){return[$]})),_:1})]),Object(r["f"])("main",null,[I,Object(r["f"])("div",M,[Object(r["f"])("label",null,[C,Object(r["z"])(Object(r["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.name=e})},null,512),[[r["x"],o.name]])]),Object(r["f"])("label",null,[J,Object(r["z"])(Object(r["f"])("input",{type:"text",name:"id","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.id=e})},null,512),[[r["x"],o.id]])]),Object(r["f"])("label",null,[L,Object(r["z"])(Object(r["f"])("input",{type:"password",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.password=e})},null,512),[[r["x"],o.password]])]),Object(r["f"])("label",null,[E,Object(r["z"])(Object(r["f"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.passwordAgain=e})},null,512),[[r["x"],o.passwordAgain]]),""!==o.password&&o.password!==o.passwordAgain?(Object(r["o"])(),Object(r["c"])("p",q,"비밀번호가 일치하지 않습니다.")):Object(r["d"])("",!0)]),Object(r["f"])("label",null,[B,Object(r["z"])(Object(r["f"])("input",{type:"email",name:"email","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.email=e})},null,512),[[r["x"],o.email]])]),Object(r["f"])("button",{onClick:t[6]||(t[6]=function(e){return u.signup({name:o.name,id:o.id,password:o.password,passwordAgain:o.passwordAgain,email:o.email})})},"signup")])]),D])})),G={name:"Signup",data:function(){return{name:"",id:"",password:"",passwordAgain:"",email:"",loginStatus:""}},methods:{signup:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.passwordAgain===e.password){n.next=3;break}return confirm("비밀번호가 일치하지 않습니다."),n.abrupt("return");case 3:return n.prev=3,t.loginStatus="ongoing",r={name:e.name,id:e.id,password:e.password,email:e.email},n.next=8,t.$http.post("/signup",r);case 8:a=n.sent,200===a.status?(t.loginStatus="success",setTimeout((function(){t.$route.push("/")}),1e3)):t.loginStatus="failed",n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](3),console.error("signup failed:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[3,12]])})))()}}};n("c2d4");G.render=F,G.__scopeId="data-v-7096965a";var K=G,N=[{path:"/",name:"Home",component:y},{path:"/login",name:"Login",component:V},{path:"/signup",name:"Signup",component:K}],Q=Object(O["a"])({history:Object(O["b"])(),routes:N});Q.beforeEach((function(e,t,n){var r=sessionStorage.getItem("user")||null;"/login"===e.path||"/signup"===e.path?r?n("/"):n():r?n():n("/login")}));var W=Q,X=n("2106"),Y=n.n(X),Z=Object(r["b"])(u);Z.use(b),Z.use(W),Z.use(Y.a,p.a),Z.mount("#app")},"56e6":function(e,t,n){},"7c39":function(e,t,n){"use strict";n("af69")},abfc:function(e,t,n){},af69:function(e,t,n){},b826:function(e,t,n){"use strict";n("f0b2")},bacb:function(e,t,n){"use strict";n("abfc")},c2d4:function(e,t,n){"use strict";n("56e6")},f0b2:function(e,t,n){}});
//# sourceMappingURL=app.ec03e1f7.js.map