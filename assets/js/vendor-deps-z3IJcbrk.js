function We(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te={exports:{}},ne={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(l,s){var f=l.length;l.push(s);e:for(;0<f;){var g=f-1>>>1,v=l[g];if(0<r(v,s))l[g]=s,l[f]=v,f=g;else break e}}function n(l){return l.length===0?null:l[0]}function a(l){if(l.length===0)return null;var s=l[0],f=l.pop();if(f!==s){l[0]=f;e:for(var g=0,v=l.length,M=v>>>1;g<M;){var R=2*(g+1)-1,V=l[R],L=R+1,O=l[L];if(0>r(V,f))L<v&&0>r(O,V)?(l[g]=O,l[L]=f,g=L):(l[g]=V,l[R]=f,g=R);else if(L<v&&0>r(O,f))l[g]=O,l[L]=f,g=L;else break e}}return s}function r(l,s){var f=l.sortIndex-s.sortIndex;return f!==0?f:l.id-s.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var i=[],h=[],y=1,d=null,p=3,_=!1,P=!1,w=!1,m=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(l){for(var s=n(h);s!==null;){if(s.callback===null)a(h);else if(s.startTime<=l)a(h),s.sortIndex=s.expirationTime,t(i,s);else break;s=n(h)}}function k(l){if(w=!1,I(l),!P)if(n(i)!==null)P=!0,N(E);else{var s=n(h);s!==null&&A(k,s.startTime-l)}}function E(l,s){P=!1,w&&(w=!1,b(T),T=-1),_=!0;var f=p;try{for(I(s),d=n(i);d!==null&&(!(d.expirationTime>s)||l&&!J());){var g=d.callback;if(typeof g=="function"){d.callback=null,p=d.priorityLevel;var v=g(d.expirationTime<=s);s=e.unstable_now(),typeof v=="function"?d.callback=v:d===n(i)&&a(i),I(s)}else a(i);d=n(i)}if(d!==null)var M=!0;else{var R=n(h);R!==null&&A(k,R.startTime-s),M=!1}return M}finally{d=null,p=f,_=!1}}var B=!1,C=null,T=-1,q=5,G=-1;function J(){return!(e.unstable_now()-G<q)}function F(){if(C!==null){var l=e.unstable_now();G=l;var s=!0;try{s=C(!0,l)}finally{s?W():(B=!1,C=null)}}else B=!1}var W;if(typeof S=="function")W=function(){S(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,se=K.port2;K.port1.onmessage=F,W=function(){se.postMessage(null)}}else W=function(){m(F,0)};function N(l){C=l,B||(B=!0,W())}function A(l,s){T=m(function(){l(e.unstable_now())},s)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(l){l.callback=null},e.unstable_continueExecution=function(){P||_||(P=!0,N(E))},e.unstable_forceFrameRate=function(l){0>l||125<l?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<l?Math.floor(1e3/l):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(i)},e.unstable_next=function(l){switch(p){case 1:case 2:case 3:var s=3;break;default:s=p}var f=p;p=s;try{return l()}finally{p=f}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(l,s){switch(l){case 1:case 2:case 3:case 4:case 5:break;default:l=3}var f=p;p=l;try{return s()}finally{p=f}},e.unstable_scheduleCallback=function(l,s,f){var g=e.unstable_now();switch(typeof f=="object"&&f!==null?(f=f.delay,f=typeof f=="number"&&0<f?g+f:g):f=g,l){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=f+v,l={id:y++,callback:s,priorityLevel:l,startTime:f,expirationTime:v,sortIndex:-1},f>g?(l.sortIndex=f,t(h,l),n(i)===null&&l===n(h)&&(w?(b(T),T=-1):w=!0,A(k,f-g))):(l.sortIndex=v,t(i,l),P||_||(P=!0,N(E))),l},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(l){var s=p;return function(){var f=p;p=s;try{return l.apply(this,arguments)}finally{p=f}}}})(ne);te.exports=ne;var je=te.exports;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}var x;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(x||(x={}));const Q="popstate";function Be(e){e===void 0&&(e={});function t(a,r){let{pathname:o,search:u,hash:c}=a.location;return z("",{pathname:o,search:u,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:re(r)}return ce(t,n,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ae(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ue(){return Math.random().toString(36).substr(2,8)}function Y(e,t){return{usr:e.state,key:e.key,idx:t}}function z(e,t,n,a){return n===void 0&&(n=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?H(t):t,{state:n,key:t&&t.key||a||ue()})}function re(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function H(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function ce(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:o=!1}=a,u=r.history,c=x.Pop,i=null,h=y();h==null&&(h=0,u.replaceState(j({},u.state,{idx:h}),""));function y(){return(u.state||{idx:null}).idx}function d(){c=x.Pop;let m=y(),b=m==null?null:m-h;h=m,i&&i({action:c,location:w.location,delta:b})}function p(m,b){c=x.Push;let S=z(w.location,m,b);h=y()+1;let I=Y(S,h),k=w.createHref(S);try{u.pushState(I,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(k)}o&&i&&i({action:c,location:w.location,delta:1})}function _(m,b){c=x.Replace;let S=z(w.location,m,b);h=y();let I=Y(S,h),k=w.createHref(S);u.replaceState(I,"",k),o&&i&&i({action:c,location:w.location,delta:0})}function P(m){let b=r.location.origin!=="null"?r.location.origin:r.location.href,S=typeof m=="string"?m:re(m);return S=S.replace(/ $/,"%20"),$(b,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,b)}let w={get action(){return c},get location(){return e(r,u)},listen(m){if(i)throw new Error("A history only accepts one active listener");return r.addEventListener(Q,d),i=m,()=>{r.removeEventListener(Q,d),i=null}},createHref(m){return t(r,m)},createURL:P,encodeLocation(m){let b=P(m);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:_,go(m){return u.go(m)}};return w}var X;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(X||(X={}));function Ce(e,t,n){return n===void 0&&(n="/"),fe(e,t,n,!1)}function fe(e,t,n,a){let r=typeof t=="string"?H(t):t,o=ke(r.pathname||"/",n);if(o==null)return null;let u=le(e);he(u);let c=null;for(let i=0;c==null&&i<u.length;++i){let h=_e(o);c=Pe(u[i],h,a)}return c}function le(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(o,u,c)=>{let i={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};i.relativePath.startsWith("/")&&($(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(a.length));let h=U([a,i.relativePath]),y=n.concat(i);o.children&&o.children.length>0&&($(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),le(o.children,t,y,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:we(h,o.index),routesMeta:y})};return e.forEach((o,u)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))r(o,u);else for(let i of ie(o.path))r(o,u,i)}),t}function ie(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return r?[o,""]:[o];let u=ie(a.join("/")),c=[];return c.push(...u.map(i=>i===""?o:[o,i].join("/"))),r&&c.push(...u),c.map(i=>e.startsWith("/")&&i===""?"/":i)}function he(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:be(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const de=/^:[\w-]+$/,pe=3,me=2,ge=1,ve=10,ye=-2,Z=e=>e==="*";function we(e,t){let n=e.split("/"),a=n.length;return n.some(Z)&&(a+=ye),t&&(a+=me),n.filter(r=>!Z(r)).reduce((r,o)=>r+(de.test(o)?pe:o===""?ge:ve),a)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Pe(e,t,n){let{routesMeta:a}=e,r={},o="/",u=[];for(let c=0;c<a.length;++c){let i=a[c],h=c===a.length-1,y=o==="/"?t:t.slice(o.length)||"/",d=ee({path:i.relativePath,caseSensitive:i.caseSensitive,end:h},y),p=i.route;if(!d&&h&&n&&!a[a.length-1].route.index&&(d=ee({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},y)),!d)return null;Object.assign(r,d.params),u.push({params:r,pathname:U([o,d.pathname]),pathnameBase:Le(U([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=U([o,d.pathnameBase]))}return u}function ee(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Se(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],u=o.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:a.reduce((h,y,d)=>{let{paramName:p,isOptional:_}=y;if(p==="*"){let w=c[d]||"";u=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const P=c[d];return _&&!P?h[p]=void 0:h[p]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:e}}function Se(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ae(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,i)=>(a.push({paramName:c,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function _e(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ae(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ke(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Ie(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?H(e):e;return{pathname:n?n.startsWith("/")?n:Ee(n,t):t,search:xe(a),hash:$e(r)}}function Ee(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function D(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Re(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Me(e,t){let n=Re(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Oe(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=H(e):(r=j({},e),$(!r.pathname||!r.pathname.includes("?"),D("?","pathname","search",r)),$(!r.pathname||!r.pathname.includes("#"),D("#","pathname","hash",r)),$(!r.search||!r.search.includes("#"),D("#","search","hash",r)));let o=e===""||r.pathname==="",u=o?"/":r.pathname,c;if(u==null)c=n;else{let d=t.length-1;if(!a&&u.startsWith("..")){let p=u.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}c=d>=0?t[d]:"/"}let i=Ie(r,c),h=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&n.endsWith("/");return!i.pathname.endsWith("/")&&(h||y)&&(i.pathname+="/"),i}const U=e=>e.join("/").replace(/\/\/+/g,"/"),Le=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$e=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ue(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const oe=["post","put","patch","delete"];new Set(oe);const Te=["get",...oe];new Set(Te);export{x as A,Me as a,ke as b,Ue as c,re as d,Be as e,We as g,$ as i,U as j,Ce as m,H as p,Oe as r,je as s};
//# sourceMappingURL=vendor-deps-z3IJcbrk.js.map