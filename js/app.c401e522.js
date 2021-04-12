(function(e){function t(t){for(var r,a,c=t[0],i=t[1],d=t[2],f=0,s=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(s.length)s.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about",page:"page"}[e]||e)+"."+{about:"63486ecb",page:"719621a8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,page:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",page:"page"}[e]||e)+"."+{about:"324ce911",page:"5d6ca370"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],f=d.getAttribute("data-href");if(f===r||f===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],b.parentNode.removeChild(b),n(u)},b.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var s=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var b=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3e5d":function(e,t,n){},"5f98":function(e,t,n){"use strict";n("eadd")},"7d2e":function(e,t,n){},"8ba1":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("a4d3"),n("e01a"),n("d3b7"),n("5502")),o={num:1},u={add:function(e,t){e.num+=t}},c={addAsync:function(e,t){var n=e.commit;setTimeout((function(){n("add",5)}),t)}},i={doubleNum:function(e){return function(t){return e.num*t}}},d={namespaced:!0,state:o,actions:c,getters:i,mutations:u},f={aboutInfo:"info from about state model"},s={},b={},l={},p={namespaced:!0,state:f,getters:s,mutations:b,actions:l},m={home:d,about:p},v=m,h=Symbol("key"),g=Object(a["a"])({modules:v});function O(){return Object(a["b"])(h)}var j=g,y=(n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("6c02")),w=Object(r["A"])("data-v-862b4d8c");Object(r["r"])("data-v-862b4d8c");var A={class:"home"};Object(r["p"])();var _=w((function(e,t,n,a,o,u){return Object(r["o"])(),Object(r["d"])("div",A,[Object(r["f"])("p",null,"num--"+Object(r["x"])(e.num),1),Object(r["f"])("p",null,"doubleNum--"+Object(r["x"])(e.doubleNum),1),Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return e.add&&e.add.apply(e,arguments)})},"+"),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(){return e.addAsync&&e.addAsync.apply(e,arguments)})},"addAsync+")])})),E=Object(r["g"])({name:"Home",setup:function(){var e=O(),t=Object(r["b"])((function(){return e.state.home.num})),n=Object(r["b"])((function(){return e.getters["home/doubleNum"](2)})),a=function(){e.commit("home/add",1)},o=function(){e.dispatch("home/addAsync",1e3)};return{num:t,add:a,addAsync:o,doubleNum:n}}});n("e64b");E.render=_,E.__scopeId="data-v-862b4d8c";var N=E,P=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/about/page",name:"Page",component:function(){return n.e("page").then(n.bind(null,"2048"))}}],k=Object(y["a"])({history:Object(y["b"])(),routes:P});k.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.transitionName=n-r===0?"fade":n<r?"prevPage":"nextPage"}));var x=k,C=Object(r["A"])("data-v-a0aeb864");Object(r["r"])("data-v-a0aeb864");var S={id:"content"},T={id:"nav"},L=Object(r["e"])("Home"),B=Object(r["e"])(" | "),H=Object(r["e"])("About"),I={class:"router-wrap"};Object(r["p"])();var M=C((function(e,t,n,a,o,u){var c=Object(r["u"])("router-link"),i=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["d"])("div",S,[Object(r["f"])("div",T,[Object(r["f"])(c,{to:"/"},{default:C((function(){return[L]})),_:1}),B,Object(r["f"])(c,{to:"/about"},{default:C((function(){return[H]})),_:1})]),Object(r["f"])(i,null,{default:C((function(t){var n=t.Component,a=t.route;return[Object(r["f"])("div",I,[Object(r["f"])(r["a"],{appear:"",name:a.meta.transitionName,mode:"fade"===a.meta.transitionName?"out-in":"",onEnter:e.active,onLeave:e.active,onAfterEnter:e.down,onAfterLeave:e.down},{default:C((function(){return[(Object(r["o"])(),Object(r["d"])(Object(r["v"])(n),{class:"router-view"}))]})),_:2},1032,["name","mode","onEnter","onLeave","onAfterEnter","onAfterLeave"])])]})),_:1})])})),q=function(){document.getElementsByTagName("body")[0].className="transition-active"},D=function(){document.getElementsByTagName("body")[0].removeAttribute("class")},J=(n("3e5d"),Object(r["g"])({setup:function(){return{active:q,down:D}}}));n("5f98");J.render=M,J.__scopeId="data-v-a0aeb864";var F=J,K=(n("8ba1"),Object(r["c"])(F));K.use(x),K.use(j,h),K.mount("#app")},e64b:function(e,t,n){"use strict";n("7d2e")},eadd:function(e,t,n){}});
//# sourceMappingURL=app.c401e522.js.map