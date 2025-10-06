function My(c,r){for(var o=0;o<r.length;o++){const s=r[o];if(typeof s!="string"&&!Array.isArray(s)){for(const h in s)if(h!=="default"&&!(h in c)){const b=Object.getOwnPropertyDescriptor(s,h);b&&Object.defineProperty(c,h,b.get?b:{enumerable:!0,get:()=>s[h]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const b of h)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&s(x)}).observe(document,{childList:!0,subtree:!0});function o(h){const b={};return h.integrity&&(b.integrity=h.integrity),h.referrerPolicy&&(b.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?b.credentials="include":h.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function s(h){if(h.ep)return;h.ep=!0;const b=o(h);fetch(h.href,b)}})();function xy(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Gf={exports:{}},qn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Dy(){if(od)return qn;od=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(s,h,b){var x=null;if(b!==void 0&&(x=""+b),h.key!==void 0&&(x=""+h.key),"key"in h){b={};for(var R in h)R!=="key"&&(b[R]=h[R])}else b=h;return h=b.ref,{$$typeof:c,type:s,key:x,ref:h!==void 0?h:null,props:b}}return qn.Fragment=r,qn.jsx=o,qn.jsxs=o,qn}var dd;function Ny(){return dd||(dd=1,Gf.exports=Dy()),Gf.exports}var X=Ny(),Qf={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Uy(){if(md)return I;md=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),K=Symbol.iterator;function P(y){return y===null||typeof y!="object"?null:(y=K&&y[K]||y["@@iterator"],typeof y=="function"?y:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,U={};function W(y,D,B){this.props=y,this.context=D,this.refs=U,this.updater=B||L}W.prototype.isReactComponent={},W.prototype.setState=function(y,D){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,D,"setState")},W.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function F(){}F.prototype=W.prototype;function J(y,D,B){this.props=y,this.context=D,this.refs=U,this.updater=B||L}var vt=J.prototype=new F;vt.constructor=J,Y(vt,W.prototype),vt.isPureReactComponent=!0;var H=Array.isArray;function it(){}var Q={H:null,A:null,T:null,S:null},Pt=Object.prototype.hasOwnProperty;function Yl(y,D,B){var Z=B.ref;return{$$typeof:c,type:y,key:D,ref:Z!==void 0?Z:null,props:B}}function le(y,D){return Yl(y.type,D,y.props)}function ql(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function al(y){var D={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(B){return D[B]})}var ja=/\/+/g;function Kl(y,D){return typeof y=="object"&&y!==null&&y.key!=null?al(""+y.key):D.toString(36)}function Rl(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(it,it):(y.status="pending",y.then(function(D){y.status==="pending"&&(y.status="fulfilled",y.value=D)},function(D){y.status==="pending"&&(y.status="rejected",y.reason=D)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function A(y,D,B,Z,tt){var et=typeof y;(et==="undefined"||et==="boolean")&&(y=null);var gt=!1;if(y===null)gt=!0;else switch(et){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(y.$$typeof){case c:case r:gt=!0;break;case C:return gt=y._init,A(gt(y._payload),D,B,Z,tt)}}if(gt)return tt=tt(y),gt=Z===""?"."+Kl(y,0):Z,H(tt)?(B="",gt!=null&&(B=gt.replace(ja,"$&/")+"/"),A(tt,D,B,"",function(Ve){return Ve})):tt!=null&&(ql(tt)&&(tt=le(tt,B+(tt.key==null||y&&y.key===tt.key?"":(""+tt.key).replace(ja,"$&/")+"/")+gt)),D.push(tt)),1;gt=0;var tl=Z===""?".":Z+":";if(H(y))for(var Ct=0;Ct<y.length;Ct++)Z=y[Ct],et=tl+Kl(Z,Ct),gt+=A(Z,D,B,et,tt);else if(Ct=P(y),typeof Ct=="function")for(y=Ct.call(y),Ct=0;!(Z=y.next()).done;)Z=Z.value,et=tl+Kl(Z,Ct++),gt+=A(Z,D,B,et,tt);else if(et==="object"){if(typeof y.then=="function")return A(Rl(y),D,B,Z,tt);throw D=String(y),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return gt}function q(y,D,B){if(y==null)return y;var Z=[],tt=0;return A(y,Z,"","",function(et){return D.call(B,et,tt++)}),Z}function k(y){if(y._status===-1){var D=y._result;D=D(),D.then(function(B){(y._status===0||y._status===-1)&&(y._status=1,y._result=B)},function(B){(y._status===0||y._status===-1)&&(y._status=2,y._result=B)}),y._status===-1&&(y._status=0,y._result=D)}if(y._status===1)return y._result.default;throw y._result}var Et=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},_t={map:q,forEach:function(y,D,B){q(y,function(){D.apply(this,arguments)},B)},count:function(y){var D=0;return q(y,function(){D++}),D},toArray:function(y){return q(y,function(D){return D})||[]},only:function(y){if(!ql(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return I.Activity=N,I.Children=_t,I.Component=W,I.Fragment=o,I.Profiler=h,I.PureComponent=J,I.StrictMode=s,I.Suspense=_,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,I.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Q.H.useMemoCache(y)}},I.cache=function(y){return function(){return y.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(y,D,B){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Z=Y({},y.props),tt=y.key;if(D!=null)for(et in D.key!==void 0&&(tt=""+D.key),D)!Pt.call(D,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&D.ref===void 0||(Z[et]=D[et]);var et=arguments.length-2;if(et===1)Z.children=B;else if(1<et){for(var gt=Array(et),tl=0;tl<et;tl++)gt[tl]=arguments[tl+2];Z.children=gt}return Yl(y.type,tt,Z)},I.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:b,_context:y},y},I.createElement=function(y,D,B){var Z,tt={},et=null;if(D!=null)for(Z in D.key!==void 0&&(et=""+D.key),D)Pt.call(D,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(tt[Z]=D[Z]);var gt=arguments.length-2;if(gt===1)tt.children=B;else if(1<gt){for(var tl=Array(gt),Ct=0;Ct<gt;Ct++)tl[Ct]=arguments[Ct+2];tt.children=tl}if(y&&y.defaultProps)for(Z in gt=y.defaultProps,gt)tt[Z]===void 0&&(tt[Z]=gt[Z]);return Yl(y,et,tt)},I.createRef=function(){return{current:null}},I.forwardRef=function(y){return{$$typeof:R,render:y}},I.isValidElement=ql,I.lazy=function(y){return{$$typeof:C,_payload:{_status:-1,_result:y},_init:k}},I.memo=function(y,D){return{$$typeof:g,type:y,compare:D===void 0?null:D}},I.startTransition=function(y){var D=Q.T,B={};Q.T=B;try{var Z=y(),tt=Q.S;tt!==null&&tt(B,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(it,Et)}catch(et){Et(et)}finally{D!==null&&B.types!==null&&(D.types=B.types),Q.T=D}},I.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},I.use=function(y){return Q.H.use(y)},I.useActionState=function(y,D,B){return Q.H.useActionState(y,D,B)},I.useCallback=function(y,D){return Q.H.useCallback(y,D)},I.useContext=function(y){return Q.H.useContext(y)},I.useDebugValue=function(){},I.useDeferredValue=function(y,D){return Q.H.useDeferredValue(y,D)},I.useEffect=function(y,D){return Q.H.useEffect(y,D)},I.useEffectEvent=function(y){return Q.H.useEffectEvent(y)},I.useId=function(){return Q.H.useId()},I.useImperativeHandle=function(y,D,B){return Q.H.useImperativeHandle(y,D,B)},I.useInsertionEffect=function(y,D){return Q.H.useInsertionEffect(y,D)},I.useLayoutEffect=function(y,D){return Q.H.useLayoutEffect(y,D)},I.useMemo=function(y,D){return Q.H.useMemo(y,D)},I.useOptimistic=function(y,D){return Q.H.useOptimistic(y,D)},I.useReducer=function(y,D,B){return Q.H.useReducer(y,D,B)},I.useRef=function(y){return Q.H.useRef(y)},I.useState=function(y){return Q.H.useState(y)},I.useSyncExternalStore=function(y,D,B){return Q.H.useSyncExternalStore(y,D,B)},I.useTransition=function(){return Q.H.useTransition()},I.version="19.2.0",I}var yd;function ar(){return yd||(yd=1,Qf.exports=Uy()),Qf.exports}var ht=ar();const Ry=xy(ht),hd=My({__proto__:null,default:Ry},[ht]);var Zf={exports:{}},Bn={},Vf={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Cy(){return vd||(vd=1,(function(c){function r(A,q){var k=A.length;A.push(q);t:for(;0<k;){var Et=k-1>>>1,_t=A[Et];if(0<h(_t,q))A[Et]=q,A[k]=_t,k=Et;else break t}}function o(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var q=A[0],k=A.pop();if(k!==q){A[0]=k;t:for(var Et=0,_t=A.length,y=_t>>>1;Et<y;){var D=2*(Et+1)-1,B=A[D],Z=D+1,tt=A[Z];if(0>h(B,k))Z<_t&&0>h(tt,B)?(A[Et]=tt,A[Z]=k,Et=Z):(A[Et]=B,A[D]=k,Et=D);else if(Z<_t&&0>h(tt,k))A[Et]=tt,A[Z]=k,Et=Z;else break t}}return q}function h(A,q){var k=A.sortIndex-q.sortIndex;return k!==0?k:A.id-q.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;c.unstable_now=function(){return b.now()}}else{var x=Date,R=x.now();c.unstable_now=function(){return x.now()-R}}var _=[],g=[],C=1,N=null,K=3,P=!1,L=!1,Y=!1,U=!1,W=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function vt(A){for(var q=o(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=A)s(g),q.sortIndex=q.expirationTime,r(_,q);else break;q=o(g)}}function H(A){if(Y=!1,vt(A),!L)if(o(_)!==null)L=!0,it||(it=!0,al());else{var q=o(g);q!==null&&Rl(H,q.startTime-A)}}var it=!1,Q=-1,Pt=5,Yl=-1;function le(){return U?!0:!(c.unstable_now()-Yl<Pt)}function ql(){if(U=!1,it){var A=c.unstable_now();Yl=A;var q=!0;try{t:{L=!1,Y&&(Y=!1,F(Q),Q=-1),P=!0;var k=K;try{l:{for(vt(A),N=o(_);N!==null&&!(N.expirationTime>A&&le());){var Et=N.callback;if(typeof Et=="function"){N.callback=null,K=N.priorityLevel;var _t=Et(N.expirationTime<=A);if(A=c.unstable_now(),typeof _t=="function"){N.callback=_t,vt(A),q=!0;break l}N===o(_)&&s(_),vt(A)}else s(_);N=o(_)}if(N!==null)q=!0;else{var y=o(g);y!==null&&Rl(H,y.startTime-A),q=!1}}break t}finally{N=null,K=k,P=!1}q=void 0}}finally{q?al():it=!1}}}var al;if(typeof J=="function")al=function(){J(ql)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Kl=ja.port2;ja.port1.onmessage=ql,al=function(){Kl.postMessage(null)}}else al=function(){W(ql,0)};function Rl(A,q){Q=W(function(){A(c.unstable_now())},q)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(A){A.callback=null},c.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<A?Math.floor(1e3/A):5},c.unstable_getCurrentPriorityLevel=function(){return K},c.unstable_next=function(A){switch(K){case 1:case 2:case 3:var q=3;break;default:q=K}var k=K;K=q;try{return A()}finally{K=k}},c.unstable_requestPaint=function(){U=!0},c.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var k=K;K=A;try{return q()}finally{K=k}},c.unstable_scheduleCallback=function(A,q,k){var Et=c.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Et+k:Et):k=Et,A){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=k+_t,A={id:C++,callback:q,priorityLevel:A,startTime:k,expirationTime:_t,sortIndex:-1},k>Et?(A.sortIndex=k,r(g,A),o(_)===null&&A===o(g)&&(Y?(F(Q),Q=-1):Y=!0,Rl(H,k-Et))):(A.sortIndex=_t,r(_,A),L||P||(L=!0,it||(it=!0,al()))),A},c.unstable_shouldYield=le,c.unstable_wrapCallback=function(A){var q=K;return function(){var k=K;K=q;try{return A.apply(this,arguments)}finally{K=k}}}})(Lf)),Lf}var gd;function Hy(){return gd||(gd=1,Vf.exports=Cy()),Vf.exports}var Kf={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function jy(){if(pd)return kt;pd=1;var c=ar();function r(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)g+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},h=Symbol.for("react.portal");function b(_,g,C){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:N==null?null:""+N,children:_,containerInfo:g,implementation:C}}var x=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,kt.createPortal=function(_,g){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return b(_,g,null,C)},kt.flushSync=function(_){var g=x.T,C=s.p;try{if(x.T=null,s.p=2,_)return _()}finally{x.T=g,s.p=C,s.d.f()}},kt.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},kt.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},kt.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var C=g.as,N=R(C,g.crossOrigin),K=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;C==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:N,integrity:K,fetchPriority:P}):C==="script"&&s.d.X(_,{crossOrigin:N,integrity:K,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},kt.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var C=R(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(_)},kt.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var C=g.as,N=R(C,g.crossOrigin);s.d.L(_,C,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},kt.preloadModule=function(_,g){if(typeof _=="string")if(g){var C=R(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(_)},kt.requestFormReset=function(_){s.d.r(_)},kt.unstable_batchedUpdates=function(_,g){return _(g)},kt.useFormState=function(_,g,C){return x.H.useFormState(_,g,C)},kt.useFormStatus=function(){return x.H.useHostTransitionStatus()},kt.version="19.2.0",kt}var Sd;function Yy(){if(Sd)return Kf.exports;Sd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Kf.exports=jy(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function qy(){if(bd)return Bn;bd=1;var c=Hy(),r=ar(),o=Yy();function s(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function b(t){var l=t,a=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(a=l.return),t=l.return;while(t)}return l.tag===3?a:null}function x(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function R(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function _(t){if(b(t)!==t)throw Error(s(188))}function g(t){var l=t.alternate;if(!l){if(l=b(t),l===null)throw Error(s(188));return l!==t?null:t}for(var a=t,e=l;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return _(n),t;if(u===e)return _(n),l;u=u.sibling}throw Error(s(188))}if(a.return!==e.return)a=n,e=u;else{for(var i=!1,f=n.child;f;){if(f===a){i=!0,a=n,e=u;break}if(f===e){i=!0,e=n,a=u;break}f=f.sibling}if(!i){for(f=u.child;f;){if(f===a){i=!0,a=u,e=n;break}if(f===e){i=!0,e=u,a=n;break}f=f.sibling}if(!i)throw Error(s(189))}}if(a.alternate!==e)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:l}function C(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=C(t),l!==null)return l;t=t.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),J=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Yl=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),ql=Symbol.iterator;function al(t){return t===null||typeof t!="object"?null:(t=ql&&t[ql]||t["@@iterator"],typeof t=="function"?t:null)}var ja=Symbol.for("react.client.reference");function Kl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ja?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case W:return"Profiler";case U:return"StrictMode";case H:return"Suspense";case it:return"SuspenseList";case Yl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case J:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case vt:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return l=t.displayName||null,l!==null?l:Kl(t.type)||"Memo";case Pt:l=t._payload,t=t._init;try{return Kl(t(l))}catch{}}return null}var Rl=Array.isArray,A=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},Et=[],_t=-1;function y(t){return{current:t}}function D(t){0>_t||(t.current=Et[_t],Et[_t]=null,_t--)}function B(t,l){_t++,Et[_t]=t.current,t.current=l}var Z=y(null),tt=y(null),et=y(null),gt=y(null);function tl(t,l){switch(B(et,l),B(tt,t),B(Z,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?H0(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=H0(l),t=j0(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(Z),B(Z,t)}function Ct(){D(Z),D(tt),D(et)}function Ve(t){t.memoizedState!==null&&B(gt,t);var l=Z.current,a=j0(l,t.type);l!==a&&(B(tt,t),B(Z,a))}function Jn(t){tt.current===t&&(D(Z),D(tt)),gt.current===t&&(D(gt),Cn._currentValue=k)}var zi,rr;function Ya(t){if(zi===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);zi=l&&l[1]||"",rr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zi+t+rr}var Ei=!1;function Ti(t,l){if(!t||Ei)return"";Ei=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(l){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(E){var z=E}Reflect.construct(t,[],M)}else{try{M.call()}catch(E){z=E}t.call(M.prototype)}}else{try{throw Error()}catch(E){z=E}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(E){if(E&&z&&typeof E.stack=="string")return[E.stack,z.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=e.DetermineComponentFrameRoot(),i=u[0],f=u[1];if(i&&f){var d=i.split(`
`),S=f.split(`
`);for(n=e=0;e<d.length&&!d[e].includes("DetermineComponentFrameRoot");)e++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(e===d.length||n===S.length)for(e=d.length-1,n=S.length-1;1<=e&&0<=n&&d[e]!==S[n];)n--;for(;1<=e&&0<=n;e--,n--)if(d[e]!==S[n]){if(e!==1||n!==1)do if(e--,n--,0>n||d[e]!==S[n]){var T=`
`+d[e].replace(" at new "," at ");return t.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",t.displayName)),T}while(1<=e&&0<=n);break}}}finally{Ei=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ya(a):""}function nm(t,l){switch(t.tag){case 26:case 27:case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return t.child!==l&&l!==null?Ya("Suspense Fallback"):Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Ti(t.type,!1);case 11:return Ti(t.type.render,!1);case 1:return Ti(t.type,!0);case 31:return Ya("Activity");default:return""}}function sr(t){try{var l="",a=null;do l+=nm(t,a),a=t,t=t.return;while(t);return l}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ai=Object.prototype.hasOwnProperty,Oi=c.unstable_scheduleCallback,_i=c.unstable_cancelCallback,um=c.unstable_shouldYield,im=c.unstable_requestPaint,ol=c.unstable_now,cm=c.unstable_getCurrentPriorityLevel,or=c.unstable_ImmediatePriority,dr=c.unstable_UserBlockingPriority,wn=c.unstable_NormalPriority,fm=c.unstable_LowPriority,mr=c.unstable_IdlePriority,rm=c.log,sm=c.unstable_setDisableYieldValue,Le=null,dl=null;function sa(t){if(typeof rm=="function"&&sm(t),dl&&typeof dl.setStrictMode=="function")try{dl.setStrictMode(Le,t)}catch{}}var ml=Math.clz32?Math.clz32:mm,om=Math.log,dm=Math.LN2;function mm(t){return t>>>=0,t===0?32:31-(om(t)/dm|0)|0}var $n=256,Wn=262144,Fn=4194304;function qa(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kn(t,l,a){var e=t.pendingLanes;if(e===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var f=e&134217727;return f!==0?(e=f&~u,e!==0?n=qa(e):(i&=f,i!==0?n=qa(i):a||(a=f&~t,a!==0&&(n=qa(a))))):(f=e&~u,f!==0?n=qa(f):i!==0?n=qa(i):a||(a=e&~t,a!==0&&(n=qa(a)))),n===0?0:l!==0&&l!==n&&(l&u)===0&&(u=n&-n,a=l&-l,u>=a||u===32&&(a&4194048)!==0)?l:n}function Ke(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function ym(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var t=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),t}function Mi(t){for(var l=[],a=0;31>a;a++)l.push(t);return l}function Je(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hm(t,l,a,e,n,u){var i=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var f=t.entanglements,d=t.expirationTimes,S=t.hiddenUpdates;for(a=i&~a;0<a;){var T=31-ml(a),M=1<<T;f[T]=0,d[T]=-1;var z=S[T];if(z!==null)for(S[T]=null,T=0;T<z.length;T++){var E=z[T];E!==null&&(E.lane&=-536870913)}a&=~M}e!==0&&hr(t,e,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~l))}function hr(t,l,a){t.pendingLanes|=l,t.suspendedLanes&=~l;var e=31-ml(l);t.entangledLanes|=l,t.entanglements[e]=t.entanglements[e]|1073741824|a&261930}function vr(t,l){var a=t.entangledLanes|=l;for(t=t.entanglements;a;){var e=31-ml(a),n=1<<e;n&l|t[e]&l&&(t[e]|=l),a&=~n}}function gr(t,l){var a=l&-l;return a=(a&42)!==0?1:xi(a),(a&(t.suspendedLanes|l))!==0?0:a}function xi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Di(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pr(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:nd(t.type))}function Sr(t,l){var a=q.p;try{return q.p=t,l()}finally{q.p=a}}var oa=Math.random().toString(36).slice(2),Kt="__reactFiber$"+oa,el="__reactProps$"+oa,ae="__reactContainer$"+oa,Ni="__reactEvents$"+oa,vm="__reactListeners$"+oa,gm="__reactHandles$"+oa,br="__reactResources$"+oa,we="__reactMarker$"+oa;function Ui(t){delete t[Kt],delete t[el],delete t[Ni],delete t[vm],delete t[gm]}function ee(t){var l=t[Kt];if(l)return l;for(var a=t.parentNode;a;){if(l=a[ae]||a[Kt]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(t=Z0(t);t!==null;){if(a=t[Kt])return a;t=Z0(t)}return l}t=a,a=t.parentNode}return null}function ne(t){if(t=t[Kt]||t[ae]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function $e(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(s(33))}function ue(t){var l=t[br];return l||(l=t[br]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Zt(t){t[we]=!0}var zr=new Set,Er={};function Ba(t,l){ie(t,l),ie(t+"Capture",l)}function ie(t,l){for(Er[t]=l,t=0;t<l.length;t++)zr.add(l[t])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tr={},Ar={};function Sm(t){return Ai.call(Ar,t)?!0:Ai.call(Tr,t)?!1:pm.test(t)?Ar[t]=!0:(Tr[t]=!0,!1)}function In(t,l,a){if(Sm(l))if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var e=l.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+a)}}function Pn(t,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+a)}}function Jl(t,l,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(l,a,""+e)}}function El(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Or(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function bm(t,l,a){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,u=e.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(t,l,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Ri(t){if(!t._valueTracker){var l=Or(t)?"checked":"value";t._valueTracker=bm(t,l,""+t[l])}}function _r(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var a=l.getValue(),e="";return t&&(e=Or(t)?t.checked?"true":"false":t.value),t=e,t!==a?(l.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zm=/[\n"\\]/g;function Tl(t){return t.replace(zm,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Ci(t,l,a,e,n,u,i,f){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+El(l)):t.value!==""+El(l)&&(t.value=""+El(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?Hi(t,i,El(l)):a!=null?Hi(t,i,El(a)):e!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+El(f):t.removeAttribute("name")}function Mr(t,l,a,e,n,u,i,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),l!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||l!=null)){Ri(t);return}a=a!=null?""+El(a):"",l=l!=null?""+El(l):a,f||l===t.value||(t.value=l),t.defaultValue=l}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=f?t.checked:!!e,t.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Ri(t)}function Hi(t,l,a){l==="number"&&tu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ce(t,l,a,e){if(t=t.options,l){l={};for(var n=0;n<a.length;n++)l["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=l.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&e&&(t[a].defaultSelected=!0)}else{for(a=""+El(a),l=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,e&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function xr(t,l,a){if(l!=null&&(l=""+El(l),l!==t.value&&(t.value=l),a==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=a!=null?""+El(a):""}function Dr(t,l,a,e){if(l==null){if(e!=null){if(a!=null)throw Error(s(92));if(Rl(e)){if(1<e.length)throw Error(s(93));e=e[0]}a=e}a==null&&(a=""),l=a}a=El(l),t.defaultValue=a,e=t.textContent,e===a&&e!==""&&e!==null&&(t.value=e),Ri(t)}function fe(t,l){if(l){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=l;return}}t.textContent=l}var Em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nr(t,l,a){var e=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":e?t.setProperty(l,a):typeof a!="number"||a===0||Em.has(l)?l==="float"?t.cssFloat=a:t[l]=(""+a).trim():t[l]=a+"px"}function Ur(t,l,a){if(l!=null&&typeof l!="object")throw Error(s(62));if(t=t.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||l!=null&&l.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var n in l)e=l[n],l.hasOwnProperty(n)&&a[n]!==e&&Nr(t,n,e)}else for(var u in l)l.hasOwnProperty(u)&&Nr(t,u,l[u])}function ji(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lu(t){return Am.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function wl(){}var Yi=null;function qi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var re=null,se=null;function Rr(t){var l=ne(t);if(l&&(t=l.stateNode)){var a=t[el]||null;t:switch(t=l.stateNode,l.type){case"input":if(Ci(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tl(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var e=a[l];if(e!==t&&e.form===t.form){var n=e[el]||null;if(!n)throw Error(s(90));Ci(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<a.length;l++)e=a[l],e.form===t.form&&_r(e)}break t;case"textarea":xr(t,a.value,a.defaultValue);break t;case"select":l=a.value,l!=null&&ce(t,!!a.multiple,l,!1)}}}var Bi=!1;function Cr(t,l,a){if(Bi)return t(l,a);Bi=!0;try{var e=t(l);return e}finally{if(Bi=!1,(re!==null||se!==null)&&(Zu(),re&&(l=re,t=se,se=re=null,Rr(l),t)))for(l=0;l<t.length;l++)Rr(t[l])}}function We(t,l){var a=t.stateNode;if(a===null)return null;var e=a[el]||null;if(e===null)return null;a=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,l,typeof a));return a}var $l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=!1;if($l)try{var Fe={};Object.defineProperty(Fe,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Fe,Fe),window.removeEventListener("test",Fe,Fe)}catch{Xi=!1}var da=null,Gi=null,au=null;function Hr(){if(au)return au;var t,l=Gi,a=l.length,e,n="value"in da?da.value:da.textContent,u=n.length;for(t=0;t<a&&l[t]===n[t];t++);var i=a-t;for(e=1;e<=i&&l[a-e]===n[u-e];e++);return au=n.slice(t,1<e?1-e:void 0)}function eu(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function nu(){return!0}function jr(){return!1}function nl(t){function l(a,e,n,u,i){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(a=t[f],this[f]=a?a(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?nu:jr,this.isPropagationStopped=jr,this}return N(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),l}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=nl(Xa),ke=N({},Xa,{view:0,detail:0}),Om=nl(ke),Qi,Zi,Ie,iu=N({},ke,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ie&&(Ie&&t.type==="mousemove"?(Qi=t.screenX-Ie.screenX,Zi=t.screenY-Ie.screenY):Zi=Qi=0,Ie=t),Qi)},movementY:function(t){return"movementY"in t?t.movementY:Zi}}),Yr=nl(iu),_m=N({},iu,{dataTransfer:0}),Mm=nl(_m),xm=N({},ke,{relatedTarget:0}),Vi=nl(xm),Dm=N({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=nl(Dm),Um=N({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rm=nl(Um),Cm=N({},Xa,{data:0}),qr=nl(Cm),Hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qm(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Ym[t])?!!l[t]:!1}function Li(){return qm}var Bm=N({},ke,{key:function(t){if(t.key){var l=Hm[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xm=nl(Bm),Gm=N({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Br=nl(Gm),Qm=N({},ke,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),Zm=nl(Qm),Vm=N({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=nl(Vm),Km=N({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=nl(Km),wm=N({},Xa,{newState:0,oldState:0}),$m=nl(wm),Wm=[9,13,27,32],Ki=$l&&"CompositionEvent"in window,Pe=null;$l&&"documentMode"in document&&(Pe=document.documentMode);var Fm=$l&&"TextEvent"in window&&!Pe,Xr=$l&&(!Ki||Pe&&8<Pe&&11>=Pe),Gr=" ",Qr=!1;function Zr(t,l){switch(t){case"keyup":return Wm.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oe=!1;function km(t,l){switch(t){case"compositionend":return Vr(l);case"keypress":return l.which!==32?null:(Qr=!0,Gr);case"textInput":return t=l.data,t===Gr&&Qr?null:t;default:return null}}function Im(t,l){if(oe)return t==="compositionend"||!Ki&&Zr(t,l)?(t=Hr(),au=Gi=da=null,oe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Xr&&l.locale!=="ko"?null:l.data;default:return null}}var Pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lr(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!Pm[t.type]:l==="textarea"}function Kr(t,l,a,e){re?se?se.push(e):se=[e]:re=e,l=Wu(l,"onChange"),0<l.length&&(a=new uu("onChange","change",null,a,e),t.push({event:a,listeners:l}))}var tn=null,ln=null;function t1(t){x0(t,0)}function cu(t){var l=$e(t);if(_r(l))return t}function Jr(t,l){if(t==="change")return l}var wr=!1;if($l){var Ji;if($l){var wi="oninput"in document;if(!wi){var $r=document.createElement("div");$r.setAttribute("oninput","return;"),wi=typeof $r.oninput=="function"}Ji=wi}else Ji=!1;wr=Ji&&(!document.documentMode||9<document.documentMode)}function Wr(){tn&&(tn.detachEvent("onpropertychange",Fr),ln=tn=null)}function Fr(t){if(t.propertyName==="value"&&cu(ln)){var l=[];Kr(l,ln,t,qi(t)),Cr(t1,l)}}function l1(t,l,a){t==="focusin"?(Wr(),tn=l,ln=a,tn.attachEvent("onpropertychange",Fr)):t==="focusout"&&Wr()}function a1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(ln)}function e1(t,l){if(t==="click")return cu(l)}function n1(t,l){if(t==="input"||t==="change")return cu(l)}function u1(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var yl=typeof Object.is=="function"?Object.is:u1;function an(t,l){if(yl(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var a=Object.keys(t),e=Object.keys(l);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!Ai.call(l,n)||!yl(t[n],l[n]))return!1}return!0}function kr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ir(t,l){var a=kr(t);t=0;for(var e;a;){if(a.nodeType===3){if(e=t+a.textContent.length,t<=l&&e>=l)return{node:a,offset:l-t};t=e}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kr(a)}}function Pr(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?Pr(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ts(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=tu(t.document);l instanceof t.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)t=l.contentWindow;else break;l=tu(t.document)}return l}function $i(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var i1=$l&&"documentMode"in document&&11>=document.documentMode,de=null,Wi=null,en=null,Fi=!1;function ls(t,l,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fi||de==null||de!==tu(e)||(e=de,"selectionStart"in e&&$i(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),en&&an(en,e)||(en=e,e=Wu(Wi,"onSelect"),0<e.length&&(l=new uu("onSelect","select",null,l,a),t.push({event:l,listeners:e}),l.target=de)))}function Ga(t,l){var a={};return a[t.toLowerCase()]=l.toLowerCase(),a["Webkit"+t]="webkit"+l,a["Moz"+t]="moz"+l,a}var me={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},ki={},as={};$l&&(as=document.createElement("div").style,"AnimationEvent"in window||(delete me.animationend.animation,delete me.animationiteration.animation,delete me.animationstart.animation),"TransitionEvent"in window||delete me.transitionend.transition);function Qa(t){if(ki[t])return ki[t];if(!me[t])return t;var l=me[t],a;for(a in l)if(l.hasOwnProperty(a)&&a in as)return ki[t]=l[a];return t}var es=Qa("animationend"),ns=Qa("animationiteration"),us=Qa("animationstart"),c1=Qa("transitionrun"),f1=Qa("transitionstart"),r1=Qa("transitioncancel"),is=Qa("transitionend"),cs=new Map,Ii="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ii.push("scrollEnd");function Cl(t,l){cs.set(t,l),Ba(l,[t])}var fu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Al=[],ye=0,Pi=0;function ru(){for(var t=ye,l=Pi=ye=0;l<t;){var a=Al[l];Al[l++]=null;var e=Al[l];Al[l++]=null;var n=Al[l];Al[l++]=null;var u=Al[l];if(Al[l++]=null,e!==null&&n!==null){var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}u!==0&&fs(a,n,u)}}function su(t,l,a,e){Al[ye++]=t,Al[ye++]=l,Al[ye++]=a,Al[ye++]=e,Pi|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function tc(t,l,a,e){return su(t,l,a,e),ou(t)}function Za(t,l){return su(t,null,null,l),ou(t)}function fs(t,l,a){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a);for(var n=!1,u=t.return;u!==null;)u.childLanes|=a,e=u.alternate,e!==null&&(e.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&l!==null&&(n=31-ml(a),t=u.hiddenUpdates,e=t[n],e===null?t[n]=[l]:e.push(l),l.lane=a|536870912),u):null}function ou(t){if(50<_n)throw _n=0,sf=null,Error(s(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var he={};function s1(t,l,a,e){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hl(t,l,a,e){return new s1(t,l,a,e)}function lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wl(t,l){var a=t.alternate;return a===null?(a=hl(t.tag,l,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=l,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,l=t.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rs(t,l){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,l=a.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function du(t,l,a,e,n,u){var i=0;if(e=t,typeof t=="function")lc(t)&&(i=1);else if(typeof t=="string")i=hy(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Yl:return t=hl(31,a,l,n),t.elementType=Yl,t.lanes=u,t;case Y:return Va(a.children,n,u,l);case U:i=8,n|=24;break;case W:return t=hl(12,a,l,n|2),t.elementType=W,t.lanes=u,t;case H:return t=hl(13,a,l,n),t.elementType=H,t.lanes=u,t;case it:return t=hl(19,a,l,n),t.elementType=it,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:i=10;break t;case F:i=9;break t;case vt:i=11;break t;case Q:i=14;break t;case Pt:i=16,e=null;break t}i=29,a=Error(s(130,t===null?"null":typeof t,"")),e=null}return l=hl(i,a,l,n),l.elementType=t,l.type=e,l.lanes=u,l}function Va(t,l,a,e){return t=hl(7,t,e,l),t.lanes=a,t}function ac(t,l,a){return t=hl(6,t,null,l),t.lanes=a,t}function ss(t){var l=hl(18,null,null,0);return l.stateNode=t,l}function ec(t,l,a){return l=hl(4,t.children!==null?t.children:[],t.key,l),l.lanes=a,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var os=new WeakMap;function Ol(t,l){if(typeof t=="object"&&t!==null){var a=os.get(t);return a!==void 0?a:(l={value:t,source:l,stack:sr(l)},os.set(t,l),l)}return{value:t,source:l,stack:sr(l)}}var ve=[],ge=0,mu=null,nn=0,_l=[],Ml=0,ma=null,Bl=1,Xl="";function Fl(t,l){ve[ge++]=nn,ve[ge++]=mu,mu=t,nn=l}function ds(t,l,a){_l[Ml++]=Bl,_l[Ml++]=Xl,_l[Ml++]=ma,ma=t;var e=Bl;t=Xl;var n=32-ml(e)-1;e&=~(1<<n),a+=1;var u=32-ml(l)+n;if(30<u){var i=n-n%5;u=(e&(1<<i)-1).toString(32),e>>=i,n-=i,Bl=1<<32-ml(l)+n|a<<n|e,Xl=u+t}else Bl=1<<u|a<<n|e,Xl=t}function nc(t){t.return!==null&&(Fl(t,1),ds(t,1,0))}function uc(t){for(;t===mu;)mu=ve[--ge],ve[ge]=null,nn=ve[--ge],ve[ge]=null;for(;t===ma;)ma=_l[--Ml],_l[Ml]=null,Xl=_l[--Ml],_l[Ml]=null,Bl=_l[--Ml],_l[Ml]=null}function ms(t,l){_l[Ml++]=Bl,_l[Ml++]=Xl,_l[Ml++]=ma,Bl=l.id,Xl=l.overflow,ma=t}var Jt=null,xt=null,rt=!1,ya=null,xl=!1,ic=Error(s(519));function ha(t){var l=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw un(Ol(l,t)),ic}function ys(t){var l=t.stateNode,a=t.type,e=t.memoizedProps;switch(l[Kt]=t,l[el]=e,a){case"dialog":ut("cancel",l),ut("close",l);break;case"iframe":case"object":case"embed":ut("load",l);break;case"video":case"audio":for(a=0;a<xn.length;a++)ut(xn[a],l);break;case"source":ut("error",l);break;case"img":case"image":case"link":ut("error",l),ut("load",l);break;case"details":ut("toggle",l);break;case"input":ut("invalid",l),Mr(l,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":ut("invalid",l);break;case"textarea":ut("invalid",l),Dr(l,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||e.suppressHydrationWarning===!0||R0(l.textContent,a)?(e.popover!=null&&(ut("beforetoggle",l),ut("toggle",l)),e.onScroll!=null&&ut("scroll",l),e.onScrollEnd!=null&&ut("scrollend",l),e.onClick!=null&&(l.onclick=wl),l=!0):l=!1,l||ha(t,!0)}function hs(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:xl=!1;return;case 27:case 3:xl=!0;return;default:Jt=Jt.return}}function pe(t){if(t!==Jt)return!1;if(!rt)return hs(t),rt=!0,!1;var l=t.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&xt&&ha(t),hs(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));xt=Q0(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));xt=Q0(t)}else l===27?(l=xt,Da(t.type)?(t=Nf,Nf=null,xt=t):xt=l):xt=Jt?Nl(t.stateNode.nextSibling):null;return!0}function La(){xt=Jt=null,rt=!1}function cc(){var t=ya;return t!==null&&(fl===null?fl=t:fl.push.apply(fl,t),ya=null),t}function un(t){ya===null?ya=[t]:ya.push(t)}var fc=y(null),Ka=null,kl=null;function va(t,l,a){B(fc,l._currentValue),l._currentValue=a}function Il(t){t._currentValue=fc.current,D(fc)}function rc(t,l,a){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===a)break;t=t.return}}function sc(t,l,a,e){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=n;for(var d=0;d<l.length;d++)if(f.context===l[d]){u.lanes|=a,f=u.alternate,f!==null&&(f.lanes|=a),rc(u.return,a,t),e||(i=null);break t}u=f.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(s(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),rc(i,a,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Se(t,l,a,e){t=null;for(var n=l,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var f=n.type;yl(n.pendingProps.value,i.value)||(t!==null?t.push(f):t=[f])}}else if(n===gt.current){if(i=n.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Cn):t=[Cn])}n=n.return}t!==null&&sc(l,t,a,e),l.flags|=262144}function yu(t){for(t=t.firstContext;t!==null;){if(!yl(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Ka=t,kl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wt(t){return vs(Ka,t)}function hu(t,l){return Ka===null&&Ja(t),vs(t,l)}function vs(t,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},kl===null){if(t===null)throw Error(s(308));kl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else kl=kl.next=l;return a}var o1=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(a,e){t.push(e)}};this.abort=function(){l.aborted=!0,t.forEach(function(a){return a()})}},d1=c.unstable_scheduleCallback,m1=c.unstable_NormalPriority,Yt={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oc(){return{controller:new o1,data:new Map,refCount:0}}function cn(t){t.refCount--,t.refCount===0&&d1(m1,function(){t.controller.abort()})}var fn=null,dc=0,be=0,ze=null;function y1(t,l){if(fn===null){var a=fn=[];dc=0,be=vf(),ze={status:"pending",value:void 0,then:function(e){a.push(e)}}}return dc++,l.then(gs,gs),l}function gs(){if(--dc===0&&fn!==null){ze!==null&&(ze.status="fulfilled");var t=fn;fn=null,be=0,ze=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function h1(t,l){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){e.status="fulfilled",e.value=l;for(var n=0;n<a.length;n++)(0,a[n])(l)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var ps=A.S;A.S=function(t,l){a0=ol(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&y1(t,l),ps!==null&&ps(t,l)};var wa=y(null);function mc(){var t=wa.current;return t!==null?t:Mt.pooledCache}function vu(t,l){l===null?B(wa,wa.current):B(wa,l.pool)}function Ss(){var t=mc();return t===null?null:{parent:Yt._currentValue,pool:t}}var Ee=Error(s(460)),yc=Error(s(474)),gu=Error(s(542)),pu={then:function(){}};function bs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zs(t,l,a){switch(a=t[a],a===void 0?t.push(l):a!==l&&(l.then(wl,wl),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ts(t),t;default:if(typeof l.status=="string")l.then(wl,wl);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=l,t.status="pending",t.then(function(e){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=e}},function(e){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=e}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Ts(t),t}throw Wa=l,Ee}}function $a(t){try{var l=t._init;return l(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,Ee):a}}var Wa=null;function Es(){if(Wa===null)throw Error(s(459));var t=Wa;return Wa=null,t}function Ts(t){if(t===Ee||t===gu)throw Error(s(483))}var Te=null,rn=0;function Su(t){var l=rn;return rn+=1,Te===null&&(Te=[]),zs(Te,t,l)}function sn(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function bu(t,l){throw l.$$typeof===K?Error(s(525)):(t=Object.prototype.toString.call(l),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function As(t){function l(v,m){if(t){var p=v.deletions;p===null?(v.deletions=[m],v.flags|=16):p.push(m)}}function a(v,m){if(!t)return null;for(;m!==null;)l(v,m),m=m.sibling;return null}function e(v){for(var m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function n(v,m){return v=Wl(v,m),v.index=0,v.sibling=null,v}function u(v,m,p){return v.index=p,t?(p=v.alternate,p!==null?(p=p.index,p<m?(v.flags|=67108866,m):p):(v.flags|=67108866,m)):(v.flags|=1048576,m)}function i(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function f(v,m,p,O){return m===null||m.tag!==6?(m=ac(p,v.mode,O),m.return=v,m):(m=n(m,p),m.return=v,m)}function d(v,m,p,O){var w=p.type;return w===Y?T(v,m,p.props.children,O,p.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&$a(w)===m.type)?(m=n(m,p.props),sn(m,p),m.return=v,m):(m=du(p.type,p.key,p.props,null,v.mode,O),sn(m,p),m.return=v,m)}function S(v,m,p,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=ec(p,v.mode,O),m.return=v,m):(m=n(m,p.children||[]),m.return=v,m)}function T(v,m,p,O,w){return m===null||m.tag!==7?(m=Va(p,v.mode,O,w),m.return=v,m):(m=n(m,p),m.return=v,m)}function M(v,m,p){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ac(""+m,v.mode,p),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case P:return p=du(m.type,m.key,m.props,null,v.mode,p),sn(p,m),p.return=v,p;case L:return m=ec(m,v.mode,p),m.return=v,m;case Pt:return m=$a(m),M(v,m,p)}if(Rl(m)||al(m))return m=Va(m,v.mode,p,null),m.return=v,m;if(typeof m.then=="function")return M(v,Su(m),p);if(m.$$typeof===J)return M(v,hu(v,m),p);bu(v,m)}return null}function z(v,m,p,O){var w=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return w!==null?null:f(v,m,""+p,O);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case P:return p.key===w?d(v,m,p,O):null;case L:return p.key===w?S(v,m,p,O):null;case Pt:return p=$a(p),z(v,m,p,O)}if(Rl(p)||al(p))return w!==null?null:T(v,m,p,O,null);if(typeof p.then=="function")return z(v,m,Su(p),O);if(p.$$typeof===J)return z(v,m,hu(v,p),O);bu(v,p)}return null}function E(v,m,p,O,w){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return v=v.get(p)||null,f(m,v,""+O,w);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case P:return v=v.get(O.key===null?p:O.key)||null,d(m,v,O,w);case L:return v=v.get(O.key===null?p:O.key)||null,S(m,v,O,w);case Pt:return O=$a(O),E(v,m,p,O,w)}if(Rl(O)||al(O))return v=v.get(p)||null,T(m,v,O,w,null);if(typeof O.then=="function")return E(v,m,p,Su(O),w);if(O.$$typeof===J)return E(v,m,p,hu(m,O),w);bu(m,O)}return null}function G(v,m,p,O){for(var w=null,st=null,V=m,at=m=0,ft=null;V!==null&&at<p.length;at++){V.index>at?(ft=V,V=null):ft=V.sibling;var ot=z(v,V,p[at],O);if(ot===null){V===null&&(V=ft);break}t&&V&&ot.alternate===null&&l(v,V),m=u(ot,m,at),st===null?w=ot:st.sibling=ot,st=ot,V=ft}if(at===p.length)return a(v,V),rt&&Fl(v,at),w;if(V===null){for(;at<p.length;at++)V=M(v,p[at],O),V!==null&&(m=u(V,m,at),st===null?w=V:st.sibling=V,st=V);return rt&&Fl(v,at),w}for(V=e(V);at<p.length;at++)ft=E(V,v,at,p[at],O),ft!==null&&(t&&ft.alternate!==null&&V.delete(ft.key===null?at:ft.key),m=u(ft,m,at),st===null?w=ft:st.sibling=ft,st=ft);return t&&V.forEach(function(Ha){return l(v,Ha)}),rt&&Fl(v,at),w}function $(v,m,p,O){if(p==null)throw Error(s(151));for(var w=null,st=null,V=m,at=m=0,ft=null,ot=p.next();V!==null&&!ot.done;at++,ot=p.next()){V.index>at?(ft=V,V=null):ft=V.sibling;var Ha=z(v,V,ot.value,O);if(Ha===null){V===null&&(V=ft);break}t&&V&&Ha.alternate===null&&l(v,V),m=u(Ha,m,at),st===null?w=Ha:st.sibling=Ha,st=Ha,V=ft}if(ot.done)return a(v,V),rt&&Fl(v,at),w;if(V===null){for(;!ot.done;at++,ot=p.next())ot=M(v,ot.value,O),ot!==null&&(m=u(ot,m,at),st===null?w=ot:st.sibling=ot,st=ot);return rt&&Fl(v,at),w}for(V=e(V);!ot.done;at++,ot=p.next())ot=E(V,v,at,ot.value,O),ot!==null&&(t&&ot.alternate!==null&&V.delete(ot.key===null?at:ot.key),m=u(ot,m,at),st===null?w=ot:st.sibling=ot,st=ot);return t&&V.forEach(function(_y){return l(v,_y)}),rt&&Fl(v,at),w}function Ot(v,m,p,O){if(typeof p=="object"&&p!==null&&p.type===Y&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case P:t:{for(var w=p.key;m!==null;){if(m.key===w){if(w=p.type,w===Y){if(m.tag===7){a(v,m.sibling),O=n(m,p.props.children),O.return=v,v=O;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&$a(w)===m.type){a(v,m.sibling),O=n(m,p.props),sn(O,p),O.return=v,v=O;break t}a(v,m);break}else l(v,m);m=m.sibling}p.type===Y?(O=Va(p.props.children,v.mode,O,p.key),O.return=v,v=O):(O=du(p.type,p.key,p.props,null,v.mode,O),sn(O,p),O.return=v,v=O)}return i(v);case L:t:{for(w=p.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){a(v,m.sibling),O=n(m,p.children||[]),O.return=v,v=O;break t}else{a(v,m);break}else l(v,m);m=m.sibling}O=ec(p,v.mode,O),O.return=v,v=O}return i(v);case Pt:return p=$a(p),Ot(v,m,p,O)}if(Rl(p))return G(v,m,p,O);if(al(p)){if(w=al(p),typeof w!="function")throw Error(s(150));return p=w.call(p),$(v,m,p,O)}if(typeof p.then=="function")return Ot(v,m,Su(p),O);if(p.$$typeof===J)return Ot(v,m,hu(v,p),O);bu(v,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,m!==null&&m.tag===6?(a(v,m.sibling),O=n(m,p),O.return=v,v=O):(a(v,m),O=ac(p,v.mode,O),O.return=v,v=O),i(v)):a(v,m)}return function(v,m,p,O){try{rn=0;var w=Ot(v,m,p,O);return Te=null,w}catch(V){if(V===Ee||V===gu)throw V;var st=hl(29,V,null,v.mode);return st.lanes=O,st.return=v,st}finally{}}}var Fa=As(!0),Os=As(!1),ga=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vc(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,l,a){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(dt&2)!==0){var n=e.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),e.pending=l,l=ou(t),fs(t,null,a),l}return su(t,e,l,a),ou(t)}function on(t,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,vr(t,a)}}function gc(t,l){var a=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=l:u=u.next=l}else n=u=l;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:e.shared,callbacks:e.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=l:t.next=l,a.lastBaseUpdate=l}var pc=!1;function dn(){if(pc){var t=ze;if(t!==null)throw t}}function mn(t,l,a,e){pc=!1;var n=t.updateQueue;ga=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var d=f,S=d.next;d.next=null,i===null?u=S:i.next=S,i=d;var T=t.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==i&&(f===null?T.firstBaseUpdate=S:f.next=S,T.lastBaseUpdate=d))}if(u!==null){var M=n.baseState;i=0,T=S=d=null,f=u;do{var z=f.lane&-536870913,E=z!==f.lane;if(E?(ct&z)===z:(e&z)===z){z!==0&&z===be&&(pc=!0),T!==null&&(T=T.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var G=t,$=f;z=l;var Ot=a;switch($.tag){case 1:if(G=$.payload,typeof G=="function"){M=G.call(Ot,M,z);break t}M=G;break t;case 3:G.flags=G.flags&-65537|128;case 0:if(G=$.payload,z=typeof G=="function"?G.call(Ot,M,z):G,z==null)break t;M=N({},M,z);break t;case 2:ga=!0}}z=f.callback,z!==null&&(t.flags|=64,E&&(t.flags|=8192),E=n.callbacks,E===null?n.callbacks=[z]:E.push(z))}else E={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(S=T=E,d=M):T=T.next=E,i|=z;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;E=f,f=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);T===null&&(d=M),n.baseState=d,n.firstBaseUpdate=S,n.lastBaseUpdate=T,u===null&&(n.shared.lanes=0),Aa|=i,t.lanes=i,t.memoizedState=M}}function _s(t,l){if(typeof t!="function")throw Error(s(191,t));t.call(l)}function Ms(t,l){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_s(a[t],l)}var Ae=y(null),zu=y(0);function xs(t,l){t=ca,B(zu,t),B(Ae,l),ca=t|l.baseLanes}function Sc(){B(zu,ca),B(Ae,Ae.current)}function bc(){ca=zu.current,D(Ae),D(zu)}var vl=y(null),Dl=null;function ba(t){var l=t.alternate;B(Ht,Ht.current&1),B(vl,t),Dl===null&&(l===null||Ae.current!==null||l.memoizedState!==null)&&(Dl=t)}function zc(t){B(Ht,Ht.current),B(vl,t),Dl===null&&(Dl=t)}function Ds(t){t.tag===22?(B(Ht,Ht.current),B(vl,t),Dl===null&&(Dl=t)):za()}function za(){B(Ht,Ht.current),B(vl,vl.current)}function gl(t){D(vl),Dl===t&&(Dl=null),D(Ht)}var Ht=y(0);function Eu(t){for(var l=t;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||xf(a)||Df(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Pl=0,lt=null,Tt=null,qt=null,Tu=!1,Oe=!1,ka=!1,Au=0,yn=0,_e=null,v1=0;function Ut(){throw Error(s(321))}function Ec(t,l){if(l===null)return!1;for(var a=0;a<l.length&&a<t.length;a++)if(!yl(t[a],l[a]))return!1;return!0}function Tc(t,l,a,e,n,u){return Pl=u,lt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,A.H=t===null||t.memoizedState===null?mo:Bc,ka=!1,u=a(e,n),ka=!1,Oe&&(u=Us(l,a,e,n)),Ns(t),u}function Ns(t){A.H=gn;var l=Tt!==null&&Tt.next!==null;if(Pl=0,qt=Tt=lt=null,Tu=!1,yn=0,_e=null,l)throw Error(s(300));t===null||Bt||(t=t.dependencies,t!==null&&yu(t)&&(Bt=!0))}function Us(t,l,a,e){lt=t;var n=0;do{if(Oe&&(_e=null),yn=0,Oe=!1,25<=n)throw Error(s(301));if(n+=1,qt=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}A.H=yo,u=l(a,e)}while(Oe);return u}function g1(){var t=A.H,l=t.useState()[0];return l=typeof l.then=="function"?hn(l):l,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(lt.flags|=1024),l}function Ac(){var t=Au!==0;return Au=0,t}function Oc(t,l,a){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~a}function _c(t){if(Tu){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Tu=!1}Pl=0,qt=Tt=lt=null,Oe=!1,yn=Au=0,_e=null}function ll(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?lt.memoizedState=qt=t:qt=qt.next=t,qt}function jt(){if(Tt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var l=qt===null?lt.memoizedState:qt.next;if(l!==null)qt=l,Tt=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},qt===null?lt.memoizedState=qt=t:qt=qt.next=t}return qt}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(t){var l=yn;return yn+=1,_e===null&&(_e=[]),t=zs(_e,t,l),l=lt,(qt===null?l.memoizedState:qt.next)===null&&(l=l.alternate,A.H=l===null||l.memoizedState===null?mo:Bc),t}function _u(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hn(t);if(t.$$typeof===J)return wt(t)}throw Error(s(438,String(t)))}function Mc(t){var l=null,a=lt.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var e=lt.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(l={data:e.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=Ou(),lt.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(t),e=0;e<t;e++)a[e]=le;return l.index++,a}function ta(t,l){return typeof l=="function"?l(t):l}function Mu(t){var l=jt();return xc(l,Tt,t)}function xc(t,l,a){var e=t.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=a;var n=t.baseQueue,u=e.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}l.baseQueue=n=u,e.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{l=n.next;var f=i=null,d=null,S=l,T=!1;do{var M=S.lane&-536870913;if(M!==S.lane?(ct&M)===M:(Pl&M)===M){var z=S.revertLane;if(z===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),M===be&&(T=!0);else if((Pl&z)===z){S=S.next,z===be&&(T=!0);continue}else M={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(f=d=M,i=u):d=d.next=M,lt.lanes|=z,Aa|=z;M=S.action,ka&&a(u,M),u=S.hasEagerState?S.eagerState:a(u,M)}else z={lane:M,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(f=d=z,i=u):d=d.next=z,lt.lanes|=M,Aa|=M;S=S.next}while(S!==null&&S!==l);if(d===null?i=u:d.next=f,!yl(u,t.memoizedState)&&(Bt=!0,T&&(a=ze,a!==null)))throw a;t.memoizedState=u,t.baseState=i,t.baseQueue=d,e.lastRenderedState=u}return n===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Dc(t){var l=jt(),a=l.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var e=a.dispatch,n=a.pending,u=l.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);yl(u,l.memoizedState)||(Bt=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),a.lastRenderedState=u}return[u,e]}function Rs(t,l,a){var e=lt,n=jt(),u=rt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=l();var i=!yl((Tt||n).memoizedState,a);if(i&&(n.memoizedState=a,Bt=!0),n=n.queue,Rc(js.bind(null,e,n,t),[t]),n.getSnapshot!==l||i||qt!==null&&qt.memoizedState.tag&1){if(e.flags|=2048,Me(9,{destroy:void 0},Hs.bind(null,e,n,a,l),null),Mt===null)throw Error(s(349));u||(Pl&127)!==0||Cs(e,l,a)}return a}function Cs(t,l,a){t.flags|=16384,t={getSnapshot:l,value:a},l=lt.updateQueue,l===null?(l=Ou(),lt.updateQueue=l,l.stores=[t]):(a=l.stores,a===null?l.stores=[t]:a.push(t))}function Hs(t,l,a,e){l.value=a,l.getSnapshot=e,Ys(l)&&qs(t)}function js(t,l,a){return a(function(){Ys(l)&&qs(t)})}function Ys(t){var l=t.getSnapshot;t=t.value;try{var a=l();return!yl(t,a)}catch{return!0}}function qs(t){var l=Za(t,2);l!==null&&rl(l,t,2)}function Nc(t){var l=ll();if(typeof t=="function"){var a=t;if(t=a(),ka){sa(!0);try{a()}finally{sa(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},l}function Bs(t,l,a,e){return t.baseState=a,xc(t,Tt,typeof e=="function"?e:ta)}function p1(t,l,a,e,n){if(Nu(t))throw Error(s(485));if(t=l.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};A.T!==null?a(!0):u.isTransition=!1,e(u),a=l.pending,a===null?(u.next=l.pending=u,Xs(l,u)):(u.next=a.next,l.pending=a.next=u)}}function Xs(t,l){var a=l.action,e=l.payload,n=t.state;if(l.isTransition){var u=A.T,i={};A.T=i;try{var f=a(n,e),d=A.S;d!==null&&d(i,f),Gs(t,l,f)}catch(S){Uc(t,l,S)}finally{u!==null&&i.types!==null&&(u.types=i.types),A.T=u}}else try{u=a(n,e),Gs(t,l,u)}catch(S){Uc(t,l,S)}}function Gs(t,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){Qs(t,l,e)},function(e){return Uc(t,l,e)}):Qs(t,l,a)}function Qs(t,l,a){l.status="fulfilled",l.value=a,Zs(l),t.state=a,l=t.pending,l!==null&&(a=l.next,a===l?t.pending=null:(a=a.next,l.next=a,Xs(t,a)))}function Uc(t,l,a){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do l.status="rejected",l.reason=a,Zs(l),l=l.next;while(l!==e)}t.action=null}function Zs(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Vs(t,l){return l}function Ls(t,l){if(rt){var a=Mt.formState;if(a!==null){t:{var e=lt;if(rt){if(xt){l:{for(var n=xt,u=xl;n.nodeType!==8;){if(!u){n=null;break l}if(n=Nl(n.nextSibling),n===null){n=null;break l}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){xt=Nl(n.nextSibling),e=n.data==="F!";break t}}ha(e)}e=!1}e&&(l=a[0])}}return a=ll(),a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:l},a.queue=e,a=ro.bind(null,lt,e),e.dispatch=a,e=Nc(!1),u=qc.bind(null,lt,!1,e.queue),e=ll(),n={state:l,dispatch:null,action:t,pending:null},e.queue=n,a=p1.bind(null,lt,n,u,a),n.dispatch=a,e.memoizedState=t,[l,a,!1]}function Ks(t){var l=jt();return Js(l,Tt,t)}function Js(t,l,a){if(l=xc(t,l,Vs)[0],t=Mu(ta)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var e=hn(l)}catch(i){throw i===Ee?gu:i}else e=l;l=jt();var n=l.queue,u=n.dispatch;return a!==l.memoizedState&&(lt.flags|=2048,Me(9,{destroy:void 0},S1.bind(null,n,a),null)),[e,u,t]}function S1(t,l){t.action=l}function ws(t){var l=jt(),a=Tt;if(a!==null)return Js(l,a,t);jt(),l=l.memoizedState,a=jt();var e=a.queue.dispatch;return a.memoizedState=t,[l,e,!1]}function Me(t,l,a,e){return t={tag:t,create:a,deps:e,inst:l,next:null},l=lt.updateQueue,l===null&&(l=Ou(),lt.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=t.next=t:(e=a.next,a.next=t,t.next=e,l.lastEffect=t),t}function $s(){return jt().memoizedState}function xu(t,l,a,e){var n=ll();lt.flags|=t,n.memoizedState=Me(1|l,{destroy:void 0},a,e===void 0?null:e)}function Du(t,l,a,e){var n=jt();e=e===void 0?null:e;var u=n.memoizedState.inst;Tt!==null&&e!==null&&Ec(e,Tt.memoizedState.deps)?n.memoizedState=Me(l,u,a,e):(lt.flags|=t,n.memoizedState=Me(1|l,u,a,e))}function Ws(t,l){xu(8390656,8,t,l)}function Rc(t,l){Du(2048,8,t,l)}function b1(t){lt.flags|=4;var l=lt.updateQueue;if(l===null)l=Ou(),lt.updateQueue=l,l.events=[t];else{var a=l.events;a===null?l.events=[t]:a.push(t)}}function Fs(t){var l=jt().memoizedState;return b1({ref:l,nextImpl:t}),function(){if((dt&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}function ks(t,l){return Du(4,2,t,l)}function Is(t,l){return Du(4,4,t,l)}function Ps(t,l){if(typeof l=="function"){t=t();var a=l(t);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function to(t,l,a){a=a!=null?a.concat([t]):null,Du(4,4,Ps.bind(null,l,t),a)}function Cc(){}function lo(t,l){var a=jt();l=l===void 0?null:l;var e=a.memoizedState;return l!==null&&Ec(l,e[1])?e[0]:(a.memoizedState=[t,l],t)}function ao(t,l){var a=jt();l=l===void 0?null:l;var e=a.memoizedState;if(l!==null&&Ec(l,e[1]))return e[0];if(e=t(),ka){sa(!0);try{t()}finally{sa(!1)}}return a.memoizedState=[e,l],e}function Hc(t,l,a){return a===void 0||(Pl&1073741824)!==0&&(ct&261930)===0?t.memoizedState=l:(t.memoizedState=a,t=n0(),lt.lanes|=t,Aa|=t,a)}function eo(t,l,a,e){return yl(a,l)?a:Ae.current!==null?(t=Hc(t,a,e),yl(t,l)||(Bt=!0),t):(Pl&42)===0||(Pl&1073741824)!==0&&(ct&261930)===0?(Bt=!0,t.memoizedState=a):(t=n0(),lt.lanes|=t,Aa|=t,l)}function no(t,l,a,e,n){var u=q.p;q.p=u!==0&&8>u?u:8;var i=A.T,f={};A.T=f,qc(t,!1,l,a);try{var d=n(),S=A.S;if(S!==null&&S(f,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var T=h1(d,e);vn(t,l,T,bl(t))}else vn(t,l,e,bl(t))}catch(M){vn(t,l,{then:function(){},status:"rejected",reason:M},bl())}finally{q.p=u,i!==null&&f.types!==null&&(i.types=f.types),A.T=i}}function z1(){}function jc(t,l,a,e){if(t.tag!==5)throw Error(s(476));var n=uo(t).queue;no(t,n,l,k,a===null?z1:function(){return io(t),a(e)})}function uo(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:k},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function io(t){var l=uo(t);l.next===null&&(l=t.alternate.memoizedState),vn(t,l.next.queue,{},bl())}function Yc(){return wt(Cn)}function co(){return jt().memoizedState}function fo(){return jt().memoizedState}function E1(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var a=bl();t=pa(a);var e=Sa(l,t,a);e!==null&&(rl(e,l,a),on(e,l,a)),l={cache:oc()},t.payload=l;return}l=l.return}}function T1(t,l,a){var e=bl();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(t)?so(l,a):(a=tc(t,l,a,e),a!==null&&(rl(a,t,e),oo(a,l,e)))}function ro(t,l,a){var e=bl();vn(t,l,a,e)}function vn(t,l,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(t))so(l,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var i=l.lastRenderedState,f=u(i,a);if(n.hasEagerState=!0,n.eagerState=f,yl(f,i))return su(t,l,n,0),Mt===null&&ru(),!1}catch{}finally{}if(a=tc(t,l,n,e),a!==null)return rl(a,t,e),oo(a,l,e),!0}return!1}function qc(t,l,a,e){if(e={lane:2,revertLane:vf(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Nu(t)){if(l)throw Error(s(479))}else l=tc(t,a,e,2),l!==null&&rl(l,t,2)}function Nu(t){var l=t.alternate;return t===lt||l!==null&&l===lt}function so(t,l){Oe=Tu=!0;var a=t.pending;a===null?l.next=l:(l.next=a.next,a.next=l),t.pending=l}function oo(t,l,a){if((a&4194048)!==0){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,vr(t,a)}}var gn={readContext:wt,use:_u,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};gn.useEffectEvent=Ut;var mo={readContext:wt,use:_u,useCallback:function(t,l){return ll().memoizedState=[t,l===void 0?null:l],t},useContext:wt,useEffect:Ws,useImperativeHandle:function(t,l,a){a=a!=null?a.concat([t]):null,xu(4194308,4,Ps.bind(null,l,t),a)},useLayoutEffect:function(t,l){return xu(4194308,4,t,l)},useInsertionEffect:function(t,l){xu(4,2,t,l)},useMemo:function(t,l){var a=ll();l=l===void 0?null:l;var e=t();if(ka){sa(!0);try{t()}finally{sa(!1)}}return a.memoizedState=[e,l],e},useReducer:function(t,l,a){var e=ll();if(a!==void 0){var n=a(l);if(ka){sa(!0);try{a(l)}finally{sa(!1)}}}else n=l;return e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},e.queue=t,t=t.dispatch=T1.bind(null,lt,t),[e.memoizedState,t]},useRef:function(t){var l=ll();return t={current:t},l.memoizedState=t},useState:function(t){t=Nc(t);var l=t.queue,a=ro.bind(null,lt,l);return l.dispatch=a,[t.memoizedState,a]},useDebugValue:Cc,useDeferredValue:function(t,l){var a=ll();return Hc(a,t,l)},useTransition:function(){var t=Nc(!1);return t=no.bind(null,lt,t.queue,!0,!1),ll().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,a){var e=lt,n=ll();if(rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=l(),Mt===null)throw Error(s(349));(ct&127)!==0||Cs(e,l,a)}n.memoizedState=a;var u={value:a,getSnapshot:l};return n.queue=u,Ws(js.bind(null,e,u,t),[t]),e.flags|=2048,Me(9,{destroy:void 0},Hs.bind(null,e,u,a,l),null),a},useId:function(){var t=ll(),l=Mt.identifierPrefix;if(rt){var a=Xl,e=Bl;a=(e&~(1<<32-ml(e)-1)).toString(32)+a,l="_"+l+"R_"+a,a=Au++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=v1++,l="_"+l+"r_"+a.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:Yc,useFormState:Ls,useActionState:Ls,useOptimistic:function(t){var l=ll();l.memoizedState=l.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=qc.bind(null,lt,!0,a),a.dispatch=l,[t,l]},useMemoCache:Mc,useCacheRefresh:function(){return ll().memoizedState=E1.bind(null,lt)},useEffectEvent:function(t){var l=ll(),a={impl:t};return l.memoizedState=a,function(){if((dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bc={readContext:wt,use:_u,useCallback:lo,useContext:wt,useEffect:Rc,useImperativeHandle:to,useInsertionEffect:ks,useLayoutEffect:Is,useMemo:ao,useReducer:Mu,useRef:$s,useState:function(){return Mu(ta)},useDebugValue:Cc,useDeferredValue:function(t,l){var a=jt();return eo(a,Tt.memoizedState,t,l)},useTransition:function(){var t=Mu(ta)[0],l=jt().memoizedState;return[typeof t=="boolean"?t:hn(t),l]},useSyncExternalStore:Rs,useId:co,useHostTransitionStatus:Yc,useFormState:Ks,useActionState:Ks,useOptimistic:function(t,l){var a=jt();return Bs(a,Tt,t,l)},useMemoCache:Mc,useCacheRefresh:fo};Bc.useEffectEvent=Fs;var yo={readContext:wt,use:_u,useCallback:lo,useContext:wt,useEffect:Rc,useImperativeHandle:to,useInsertionEffect:ks,useLayoutEffect:Is,useMemo:ao,useReducer:Dc,useRef:$s,useState:function(){return Dc(ta)},useDebugValue:Cc,useDeferredValue:function(t,l){var a=jt();return Tt===null?Hc(a,t,l):eo(a,Tt.memoizedState,t,l)},useTransition:function(){var t=Dc(ta)[0],l=jt().memoizedState;return[typeof t=="boolean"?t:hn(t),l]},useSyncExternalStore:Rs,useId:co,useHostTransitionStatus:Yc,useFormState:ws,useActionState:ws,useOptimistic:function(t,l){var a=jt();return Tt!==null?Bs(a,Tt,t,l):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:fo};yo.useEffectEvent=Fs;function Xc(t,l,a,e){l=t.memoizedState,a=a(e,l),a=a==null?l:N({},l,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gc={enqueueSetState:function(t,l,a){t=t._reactInternals;var e=bl(),n=pa(e);n.payload=l,a!=null&&(n.callback=a),l=Sa(t,n,e),l!==null&&(rl(l,t,e),on(l,t,e))},enqueueReplaceState:function(t,l,a){t=t._reactInternals;var e=bl(),n=pa(e);n.tag=1,n.payload=l,a!=null&&(n.callback=a),l=Sa(t,n,e),l!==null&&(rl(l,t,e),on(l,t,e))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var a=bl(),e=pa(a);e.tag=2,l!=null&&(e.callback=l),l=Sa(t,e,a),l!==null&&(rl(l,t,a),on(l,t,a))}};function ho(t,l,a,e,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,u,i):l.prototype&&l.prototype.isPureReactComponent?!an(a,e)||!an(n,u):!0}function vo(t,l,a,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,e),l.state!==t&&Gc.enqueueReplaceState(l,l.state,null)}function Ia(t,l){var a=l;if("ref"in l){a={};for(var e in l)e!=="ref"&&(a[e]=l[e])}if(t=t.defaultProps){a===l&&(a=N({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function go(t){fu(t)}function po(t){console.error(t)}function So(t){fu(t)}function Uu(t,l){try{var a=t.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(e){setTimeout(function(){throw e})}}function bo(t,l,a){try{var e=t.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qc(t,l,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(t,l)},a}function zo(t){return t=pa(t),t.tag=3,t}function Eo(t,l,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=e.value;t.payload=function(){return n(u)},t.callback=function(){bo(l,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){bo(l,a,e),typeof n!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var f=e.stack;this.componentDidCatch(e.value,{componentStack:f!==null?f:""})})}function A1(t,l,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(l=a.alternate,l!==null&&Se(l,a,n,!0),a=vl.current,a!==null){switch(a.tag){case 31:case 13:return Dl===null?Vu():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===pu?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([e]):l.add(e),mf(t,e,n)),!1;case 22:return a.flags|=65536,e===pu?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([e]):a.add(e)),mf(t,e,n)),!1}throw Error(s(435,a.tag))}return mf(t,e,n),Vu(),!1}if(rt)return l=vl.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,e!==ic&&(t=Error(s(422),{cause:e}),un(Ol(t,a)))):(e!==ic&&(l=Error(s(423),{cause:e}),un(Ol(l,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,e=Ol(e,a),n=Qc(t.stateNode,e,n),gc(t,n),Rt!==4&&(Rt=2)),!1;var u=Error(s(520),{cause:e});if(u=Ol(u,a),On===null?On=[u]:On.push(u),Rt!==4&&(Rt=2),l===null)return!0;e=Ol(e,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Qc(a.stateNode,e,t),gc(a,t),!1;case 1:if(l=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Oa===null||!Oa.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=zo(n),Eo(n,t,a,e),gc(a,n),!1}a=a.return}while(a!==null);return!1}var Zc=Error(s(461)),Bt=!1;function $t(t,l,a,e){l.child=t===null?Os(l,null,a,e):Fa(l,t.child,a,e)}function To(t,l,a,e,n){a=a.render;var u=l.ref;if("ref"in e){var i={};for(var f in e)f!=="ref"&&(i[f]=e[f])}else i=e;return Ja(l),e=Tc(t,l,a,i,u,n),f=Ac(),t!==null&&!Bt?(Oc(t,l,n),la(t,l,n)):(rt&&f&&nc(l),l.flags|=1,$t(t,l,e,n),l.child)}function Ao(t,l,a,e,n){if(t===null){var u=a.type;return typeof u=="function"&&!lc(u)&&u.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=u,Oo(t,l,u,e,n)):(t=du(a.type,null,e,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(u=t.child,!Fc(t,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:an,a(i,e)&&t.ref===l.ref)return la(t,l,n)}return l.flags|=1,t=Wl(u,e),t.ref=l.ref,t.return=l,l.child=t}function Oo(t,l,a,e,n){if(t!==null){var u=t.memoizedProps;if(an(u,e)&&t.ref===l.ref)if(Bt=!1,l.pendingProps=e=u,Fc(t,n))(t.flags&131072)!==0&&(Bt=!0);else return l.lanes=t.lanes,la(t,l,n)}return Vc(t,l,a,e,n)}function _o(t,l,a,e){var n=e.children,u=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((l.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(e=l.child=t.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~u}else e=0,l.child=null;return Mo(t,l,u,a,e)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&vu(l,u!==null?u.cachePool:null),u!==null?xs(l,u):Sc(),Ds(l);else return e=l.lanes=536870912,Mo(t,l,u!==null?u.baseLanes|a:a,a,e)}else u!==null?(vu(l,u.cachePool),xs(l,u),za(),l.memoizedState=null):(t!==null&&vu(l,null),Sc(),za());return $t(t,l,n,a),l.child}function pn(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Mo(t,l,a,e,n){var u=mc();return u=u===null?null:{parent:Yt._currentValue,pool:u},l.memoizedState={baseLanes:a,cachePool:u},t!==null&&vu(l,null),Sc(),Ds(l),t!==null&&Se(t,l,e,!0),l.childLanes=n,null}function Ru(t,l){return l=Hu({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function xo(t,l,a){return Fa(l,t.child,null,a),t=Ru(l,l.pendingProps),t.flags|=2,gl(l),l.memoizedState=null,t}function O1(t,l,a){var e=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(rt){if(e.mode==="hidden")return t=Ru(l,e),l.lanes=536870912,pn(null,t);if(zc(l),(t=xt)?(t=G0(t,xl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Bl,overflow:Xl}:null,retryLane:536870912,hydrationErrors:null},a=ss(t),a.return=l,l.child=a,Jt=l,xt=null)):t=null,t===null)throw ha(l);return l.lanes=536870912,null}return Ru(l,e)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(zc(l),n)if(l.flags&256)l.flags&=-257,l=xo(t,l,a);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(s(558));else if(Bt||Se(t,l,a,!1),n=(a&t.childLanes)!==0,Bt||n){if(e=Mt,e!==null&&(i=gr(e,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,Za(t,i),rl(e,t,i),Zc;Vu(),l=xo(t,l,a)}else t=u.treeContext,xt=Nl(i.nextSibling),Jt=l,rt=!0,ya=null,xl=!1,t!==null&&ms(l,t),l=Ru(l,e),l.flags|=4096;return l}return t=Wl(t.child,{mode:e.mode,children:e.children}),t.ref=l.ref,l.child=t,t.return=l,t}function Cu(t,l){var a=l.ref;if(a===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(l.flags|=4194816)}}function Vc(t,l,a,e,n){return Ja(l),a=Tc(t,l,a,e,void 0,n),e=Ac(),t!==null&&!Bt?(Oc(t,l,n),la(t,l,n)):(rt&&e&&nc(l),l.flags|=1,$t(t,l,a,n),l.child)}function Do(t,l,a,e,n,u){return Ja(l),l.updateQueue=null,a=Us(l,e,a,n),Ns(t),e=Ac(),t!==null&&!Bt?(Oc(t,l,u),la(t,l,u)):(rt&&e&&nc(l),l.flags|=1,$t(t,l,a,u),l.child)}function No(t,l,a,e,n){if(Ja(l),l.stateNode===null){var u=he,i=a.contextType;typeof i=="object"&&i!==null&&(u=wt(i)),u=new a(e,u),l.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Gc,l.stateNode=u,u._reactInternals=l,u=l.stateNode,u.props=e,u.state=l.memoizedState,u.refs={},hc(l),i=a.contextType,u.context=typeof i=="object"&&i!==null?wt(i):he,u.state=l.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Xc(l,a,i,e),u.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Gc.enqueueReplaceState(u,u.state,null),mn(l,e,u,n),dn(),u.state=l.memoizedState),typeof u.componentDidMount=="function"&&(l.flags|=4194308),e=!0}else if(t===null){u=l.stateNode;var f=l.memoizedProps,d=Ia(a,f);u.props=d;var S=u.context,T=a.contextType;i=he,typeof T=="object"&&T!==null&&(i=wt(T));var M=a.getDerivedStateFromProps;T=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=l.pendingProps!==f,T||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||S!==i)&&vo(l,u,e,i),ga=!1;var z=l.memoizedState;u.state=z,mn(l,e,u,n),dn(),S=l.memoizedState,f||z!==S||ga?(typeof M=="function"&&(Xc(l,a,M,e),S=l.memoizedState),(d=ga||ho(l,a,d,e,z,S,i))?(T||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(l.flags|=4194308)):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=S),u.props=e,u.state=S,u.context=i,e=d):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{u=l.stateNode,vc(t,l),i=l.memoizedProps,T=Ia(a,i),u.props=T,M=l.pendingProps,z=u.context,S=a.contextType,d=he,typeof S=="object"&&S!==null&&(d=wt(S)),f=a.getDerivedStateFromProps,(S=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==M||z!==d)&&vo(l,u,e,d),ga=!1,z=l.memoizedState,u.state=z,mn(l,e,u,n),dn();var E=l.memoizedState;i!==M||z!==E||ga||t!==null&&t.dependencies!==null&&yu(t.dependencies)?(typeof f=="function"&&(Xc(l,a,f,e),E=l.memoizedState),(T=ga||ho(l,a,T,e,z,E,d)||t!==null&&t.dependencies!==null&&yu(t.dependencies))?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(e,E,d),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(e,E,d)),typeof u.componentDidUpdate=="function"&&(l.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&z===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&z===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=E),u.props=e,u.state=E,u.context=d,e=T):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&z===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&z===t.memoizedState||(l.flags|=1024),e=!1)}return u=e,Cu(t,l),e=(l.flags&128)!==0,u||e?(u=l.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:u.render(),l.flags|=1,t!==null&&e?(l.child=Fa(l,t.child,null,n),l.child=Fa(l,null,a,n)):$t(t,l,a,n),l.memoizedState=u.state,t=l.child):t=la(t,l,n),t}function Uo(t,l,a,e){return La(),l.flags|=256,$t(t,l,a,e),l.child}var Lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(t){return{baseLanes:t,cachePool:Ss()}}function Jc(t,l,a){return t=t!==null?t.childLanes&~a:0,l&&(t|=Sl),t}function Ro(t,l,a){var e=l.pendingProps,n=!1,u=(l.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),i&&(n=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(rt){if(n?ba(l):za(),(t=xt)?(t=G0(t,xl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Bl,overflow:Xl}:null,retryLane:536870912,hydrationErrors:null},a=ss(t),a.return=l,l.child=a,Jt=l,xt=null)):t=null,t===null)throw ha(l);return Df(t)?l.lanes=32:l.lanes=536870912,null}var f=e.children;return e=e.fallback,n?(za(),n=l.mode,f=Hu({mode:"hidden",children:f},n),e=Va(e,n,a,null),f.return=l,e.return=l,f.sibling=e,l.child=f,e=l.child,e.memoizedState=Kc(a),e.childLanes=Jc(t,i,a),l.memoizedState=Lc,pn(null,e)):(ba(l),wc(l,f))}var d=t.memoizedState;if(d!==null&&(f=d.dehydrated,f!==null)){if(u)l.flags&256?(ba(l),l.flags&=-257,l=$c(t,l,a)):l.memoizedState!==null?(za(),l.child=t.child,l.flags|=128,l=null):(za(),f=e.fallback,n=l.mode,e=Hu({mode:"visible",children:e.children},n),f=Va(f,n,a,null),f.flags|=2,e.return=l,f.return=l,e.sibling=f,l.child=e,Fa(l,t.child,null,a),e=l.child,e.memoizedState=Kc(a),e.childLanes=Jc(t,i,a),l.memoizedState=Lc,l=pn(null,e));else if(ba(l),Df(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var S=i.dgst;i=S,e=Error(s(419)),e.stack="",e.digest=i,un({value:e,source:null,stack:null}),l=$c(t,l,a)}else if(Bt||Se(t,l,a,!1),i=(a&t.childLanes)!==0,Bt||i){if(i=Mt,i!==null&&(e=gr(i,a),e!==0&&e!==d.retryLane))throw d.retryLane=e,Za(t,e),rl(i,t,e),Zc;xf(f)||Vu(),l=$c(t,l,a)}else xf(f)?(l.flags|=192,l.child=t.child,l=null):(t=d.treeContext,xt=Nl(f.nextSibling),Jt=l,rt=!0,ya=null,xl=!1,t!==null&&ms(l,t),l=wc(l,e.children),l.flags|=4096);return l}return n?(za(),f=e.fallback,n=l.mode,d=t.child,S=d.sibling,e=Wl(d,{mode:"hidden",children:e.children}),e.subtreeFlags=d.subtreeFlags&65011712,S!==null?f=Wl(S,f):(f=Va(f,n,a,null),f.flags|=2),f.return=l,e.return=l,e.sibling=f,l.child=e,pn(null,e),e=l.child,f=t.child.memoizedState,f===null?f=Kc(a):(n=f.cachePool,n!==null?(d=Yt._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=Ss(),f={baseLanes:f.baseLanes|a,cachePool:n}),e.memoizedState=f,e.childLanes=Jc(t,i,a),l.memoizedState=Lc,pn(t.child,e)):(ba(l),a=t.child,t=a.sibling,a=Wl(a,{mode:"visible",children:e.children}),a.return=l,a.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=a,l.memoizedState=null,a)}function wc(t,l){return l=Hu({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function Hu(t,l){return t=hl(22,t,null,l),t.lanes=0,t}function $c(t,l,a){return Fa(l,t.child,null,a),t=wc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Co(t,l,a){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),rc(t.return,l,a)}function Wc(t,l,a,e,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function Ho(t,l,a){var e=l.pendingProps,n=e.revealOrder,u=e.tail;e=e.children;var i=Ht.current,f=(i&2)!==0;if(f?(i=i&1|2,l.flags|=128):i&=1,B(Ht,i),$t(t,l,e,a),e=rt?nn:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Co(t,a,l);else if(t.tag===19)Co(t,a,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=l.child,n=null;a!==null;)t=a.alternate,t!==null&&Eu(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=l.child,l.child=null):(n=a.sibling,a.sibling=null),Wc(l,!1,n,a,u,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&Eu(t)===null){l.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Wc(l,!0,a,null,u,e);break;case"together":Wc(l,!1,null,null,void 0,e);break;default:l.memoizedState=null}return l.child}function la(t,l,a){if(t!==null&&(l.dependencies=t.dependencies),Aa|=l.lanes,(a&l.childLanes)===0)if(t!==null){if(Se(t,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(s(153));if(l.child!==null){for(t=l.child,a=Wl(t,t.pendingProps),l.child=a,a.return=l;t.sibling!==null;)t=t.sibling,a=a.sibling=Wl(t,t.pendingProps),a.return=l;a.sibling=null}return l.child}function Fc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&yu(t)))}function _1(t,l,a){switch(l.tag){case 3:tl(l,l.stateNode.containerInfo),va(l,Yt,t.memoizedState.cache),La();break;case 27:case 5:Ve(l);break;case 4:tl(l,l.stateNode.containerInfo);break;case 10:va(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,zc(l),null;break;case 13:var e=l.memoizedState;if(e!==null)return e.dehydrated!==null?(ba(l),l.flags|=128,null):(a&l.child.childLanes)!==0?Ro(t,l,a):(ba(l),t=la(t,l,a),t!==null?t.sibling:null);ba(l);break;case 19:var n=(t.flags&128)!==0;if(e=(a&l.childLanes)!==0,e||(Se(t,l,a,!1),e=(a&l.childLanes)!==0),n){if(e)return Ho(t,l,a);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Ht,Ht.current),e)break;return null;case 22:return l.lanes=0,_o(t,l,a,l.pendingProps);case 24:va(l,Yt,t.memoizedState.cache)}return la(t,l,a)}function jo(t,l,a){if(t!==null)if(t.memoizedProps!==l.pendingProps)Bt=!0;else{if(!Fc(t,a)&&(l.flags&128)===0)return Bt=!1,_1(t,l,a);Bt=(t.flags&131072)!==0}else Bt=!1,rt&&(l.flags&1048576)!==0&&ds(l,nn,l.index);switch(l.lanes=0,l.tag){case 16:t:{var e=l.pendingProps;if(t=$a(l.elementType),l.type=t,typeof t=="function")lc(t)?(e=Ia(t,e),l.tag=1,l=No(null,l,t,e,a)):(l.tag=0,l=Vc(null,l,t,e,a));else{if(t!=null){var n=t.$$typeof;if(n===vt){l.tag=11,l=To(null,l,t,e,a);break t}else if(n===Q){l.tag=14,l=Ao(null,l,t,e,a);break t}}throw l=Kl(t)||t,Error(s(306,l,""))}}return l;case 0:return Vc(t,l,l.type,l.pendingProps,a);case 1:return e=l.type,n=Ia(e,l.pendingProps),No(t,l,e,n,a);case 3:t:{if(tl(l,l.stateNode.containerInfo),t===null)throw Error(s(387));e=l.pendingProps;var u=l.memoizedState;n=u.element,vc(t,l),mn(l,e,null,a);var i=l.memoizedState;if(e=i.cache,va(l,Yt,e),e!==u.cache&&sc(l,[Yt],a,!0),dn(),e=i.element,u.isDehydrated)if(u={element:e,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){l=Uo(t,l,e,a);break t}else if(e!==n){n=Ol(Error(s(424)),l),un(n),l=Uo(t,l,e,a);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(xt=Nl(t.firstChild),Jt=l,rt=!0,ya=null,xl=!0,a=Os(l,null,e,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(La(),e===n){l=la(t,l,a);break t}$t(t,l,e,a)}l=l.child}return l;case 26:return Cu(t,l),t===null?(a=J0(l.type,null,l.pendingProps,null))?l.memoizedState=a:rt||(a=l.type,t=l.pendingProps,e=Fu(et.current).createElement(a),e[Kt]=l,e[el]=t,Wt(e,a,t),Zt(e),l.stateNode=e):l.memoizedState=J0(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Ve(l),t===null&&rt&&(e=l.stateNode=V0(l.type,l.pendingProps,et.current),Jt=l,xl=!0,n=xt,Da(l.type)?(Nf=n,xt=Nl(e.firstChild)):xt=n),$t(t,l,l.pendingProps.children,a),Cu(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&rt&&((n=e=xt)&&(e=ay(e,l.type,l.pendingProps,xl),e!==null?(l.stateNode=e,Jt=l,xt=Nl(e.firstChild),xl=!1,n=!0):n=!1),n||ha(l)),Ve(l),n=l.type,u=l.pendingProps,i=t!==null?t.memoizedProps:null,e=u.children,Of(n,u)?e=null:i!==null&&Of(n,i)&&(l.flags|=32),l.memoizedState!==null&&(n=Tc(t,l,g1,null,null,a),Cn._currentValue=n),Cu(t,l),$t(t,l,e,a),l.child;case 6:return t===null&&rt&&((t=a=xt)&&(a=ey(a,l.pendingProps,xl),a!==null?(l.stateNode=a,Jt=l,xt=null,t=!0):t=!1),t||ha(l)),null;case 13:return Ro(t,l,a);case 4:return tl(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=Fa(l,null,e,a):$t(t,l,e,a),l.child;case 11:return To(t,l,l.type,l.pendingProps,a);case 7:return $t(t,l,l.pendingProps,a),l.child;case 8:return $t(t,l,l.pendingProps.children,a),l.child;case 12:return $t(t,l,l.pendingProps.children,a),l.child;case 10:return e=l.pendingProps,va(l,l.type,e.value),$t(t,l,e.children,a),l.child;case 9:return n=l.type._context,e=l.pendingProps.children,Ja(l),n=wt(n),e=e(n),l.flags|=1,$t(t,l,e,a),l.child;case 14:return Ao(t,l,l.type,l.pendingProps,a);case 15:return Oo(t,l,l.type,l.pendingProps,a);case 19:return Ho(t,l,a);case 31:return O1(t,l,a);case 22:return _o(t,l,a,l.pendingProps);case 24:return Ja(l),e=wt(Yt),t===null?(n=mc(),n===null&&(n=Mt,u=oc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),l.memoizedState={parent:e,cache:n},hc(l),va(l,Yt,n)):((t.lanes&a)!==0&&(vc(t,l),mn(l,null,null,a),dn()),n=t.memoizedState,u=l.memoizedState,n.parent!==e?(n={parent:e,cache:e},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),va(l,Yt,e)):(e=u.cache,va(l,Yt,e),e!==n.cache&&sc(l,[Yt],a,!0))),$t(t,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(s(156,l.tag))}function aa(t){t.flags|=4}function kc(t,l,a,e,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(f0())t.flags|=8192;else throw Wa=pu,yc}else t.flags&=-16777217}function Yo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(l))if(f0())t.flags|=8192;else throw Wa=pu,yc}function ju(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?yr():536870912,t.lanes|=l,Ue|=l)}function Sn(t,l){if(!rt)switch(t.tailMode){case"hidden":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function Dt(t){var l=t.alternate!==null&&t.alternate.child===t.child,a=0,e=0;if(l)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=e,t.childLanes=a,l}function M1(t,l,a){var e=l.pendingProps;switch(uc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(l),null;case 1:return Dt(l),null;case 3:return a=l.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Il(Yt),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pe(l)?aa(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,cc())),Dt(l),null;case 26:var n=l.type,u=l.memoizedState;return t===null?(aa(l),u!==null?(Dt(l),Yo(l,u)):(Dt(l),kc(l,n,null,e,a))):u?u!==t.memoizedState?(aa(l),Dt(l),Yo(l,u)):(Dt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==e&&aa(l),Dt(l),kc(l,n,t,e,a)),null;case 27:if(Jn(l),a=et.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&aa(l);else{if(!e){if(l.stateNode===null)throw Error(s(166));return Dt(l),null}t=Z.current,pe(l)?ys(l):(t=V0(n,e,a),l.stateNode=t,aa(l))}return Dt(l),null;case 5:if(Jn(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&aa(l);else{if(!e){if(l.stateNode===null)throw Error(s(166));return Dt(l),null}if(u=Z.current,pe(l))ys(l);else{var i=Fu(et.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?u.multiple=!0:e.size&&(u.size=e.size);break;default:u=typeof e.is=="string"?i.createElement(n,{is:e.is}):i.createElement(n)}}u[Kt]=l,u[el]=e;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=u;t:switch(Wt(u,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&aa(l)}}return Dt(l),kc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,a),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==e&&aa(l);else{if(typeof e!="string"&&l.stateNode===null)throw Error(s(166));if(t=et.current,pe(l)){if(t=l.stateNode,a=l.memoizedProps,e=null,n=Jt,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}t[Kt]=l,t=!!(t.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||R0(t.nodeValue,a)),t||ha(l,!0)}else t=Fu(t).createTextNode(e),t[Kt]=l,l.stateNode=t}return Dt(l),null;case 31:if(a=l.memoizedState,t===null||t.memoizedState!==null){if(e=pe(l),a!==null){if(t===null){if(!e)throw Error(s(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Kt]=l}else La(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Dt(l),t=!1}else a=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return l.flags&256?(gl(l),l):(gl(l),null);if((l.flags&128)!==0)throw Error(s(558))}return Dt(l),null;case 13:if(e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=pe(l),e!==null&&e.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Kt]=l}else La(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Dt(l),n=!1}else n=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(gl(l),l):(gl(l),null)}return gl(l),(l.flags&128)!==0?(l.lanes=a,l):(a=e!==null,t=t!==null&&t.memoizedState!==null,a&&(e=l.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),u=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(u=e.memoizedState.cachePool.pool),u!==n&&(e.flags|=2048)),a!==t&&a&&(l.child.flags|=8192),ju(l,l.updateQueue),Dt(l),null);case 4:return Ct(),t===null&&bf(l.stateNode.containerInfo),Dt(l),null;case 10:return Il(l.type),Dt(l),null;case 19:if(D(Ht),e=l.memoizedState,e===null)return Dt(l),null;if(n=(l.flags&128)!==0,u=e.rendering,u===null)if(n)Sn(e,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(u=Eu(t),u!==null){for(l.flags|=128,Sn(e,!1),t=u.updateQueue,l.updateQueue=t,ju(l,t),l.subtreeFlags=0,t=a,a=l.child;a!==null;)rs(a,t),a=a.sibling;return B(Ht,Ht.current&1|2),rt&&Fl(l,e.treeForkCount),l.child}t=t.sibling}e.tail!==null&&ol()>Gu&&(l.flags|=128,n=!0,Sn(e,!1),l.lanes=4194304)}else{if(!n)if(t=Eu(u),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,ju(l,t),Sn(e,!0),e.tail===null&&e.tailMode==="hidden"&&!u.alternate&&!rt)return Dt(l),null}else 2*ol()-e.renderingStartTime>Gu&&a!==536870912&&(l.flags|=128,n=!0,Sn(e,!1),l.lanes=4194304);e.isBackwards?(u.sibling=l.child,l.child=u):(t=e.last,t!==null?t.sibling=u:l.child=u,e.last=u)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ol(),t.sibling=null,a=Ht.current,B(Ht,n?a&1|2:a&1),rt&&Fl(l,e.treeForkCount),t):(Dt(l),null);case 22:case 23:return gl(l),bc(),e=l.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(l.flags|=8192):e&&(l.flags|=8192),e?(a&536870912)!==0&&(l.flags&128)===0&&(Dt(l),l.subtreeFlags&6&&(l.flags|=8192)):Dt(l),a=l.updateQueue,a!==null&&ju(l,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(l.flags|=2048),t!==null&&D(wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Il(Yt),Dt(l),null;case 25:return null;case 30:return null}throw Error(s(156,l.tag))}function x1(t,l){switch(uc(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Il(Yt),Ct(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Jn(l),null;case 31:if(l.memoizedState!==null){if(gl(l),l.alternate===null)throw Error(s(340));La()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(gl(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(s(340));La()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return D(Ht),null;case 4:return Ct(),null;case 10:return Il(l.type),null;case 22:case 23:return gl(l),bc(),t!==null&&D(wa),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Il(Yt),null;case 25:return null;default:return null}}function qo(t,l){switch(uc(l),l.tag){case 3:Il(Yt),Ct();break;case 26:case 27:case 5:Jn(l);break;case 4:Ct();break;case 31:l.memoizedState!==null&&gl(l);break;case 13:gl(l);break;case 19:D(Ht);break;case 10:Il(l.type);break;case 22:case 23:gl(l),bc(),t!==null&&D(wa);break;case 24:Il(Yt)}}function bn(t,l){try{var a=l.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&t)===t){e=void 0;var u=a.create,i=a.inst;e=u(),i.destroy=e}a=a.next}while(a!==n)}}catch(f){zt(l,l.return,f)}}function Ea(t,l,a){try{var e=l.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var u=n.next;e=u;do{if((e.tag&t)===t){var i=e.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,n=l;var d=a,S=f;try{S()}catch(T){zt(n,d,T)}}}e=e.next}while(e!==u)}}catch(T){zt(l,l.return,T)}}function Bo(t){var l=t.updateQueue;if(l!==null){var a=t.stateNode;try{Ms(l,a)}catch(e){zt(t,t.return,e)}}}function Xo(t,l,a){a.props=Ia(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(e){zt(t,l,e)}}function zn(t,l){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof a=="function"?t.refCleanup=a(e):a.current=e}}catch(n){zt(t,l,n)}}function Gl(t,l){var a=t.ref,e=t.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){zt(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){zt(t,l,n)}else a.current=null}function Go(t){var l=t.type,a=t.memoizedProps,e=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break t;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){zt(t,t.return,n)}}function Ic(t,l,a){try{var e=t.stateNode;F1(e,t.type,a,l),e[el]=l}catch(n){zt(t,t.return,n)}}function Qo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function Pc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(t),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=wl));else if(e!==4&&(e===27&&Da(t.type)&&(a=t.stateNode,l=null),t=t.child,t!==null))for(tf(t,l,a),t=t.sibling;t!==null;)tf(t,l,a),t=t.sibling}function Yu(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?a.insertBefore(t,l):a.appendChild(t);else if(e!==4&&(e===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yu(t,l,a),t=t.sibling;t!==null;)Yu(t,l,a),t=t.sibling}function Zo(t){var l=t.stateNode,a=t.memoizedProps;try{for(var e=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Wt(l,e,a),l[Kt]=t,l[el]=a}catch(u){zt(t,t.return,u)}}var ea=!1,Xt=!1,lf=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function D1(t,l){if(t=t.containerInfo,Tf=ei,t=ts(t),$i(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,u=e.focusNode;e=e.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var i=0,f=-1,d=-1,S=0,T=0,M=t,z=null;l:for(;;){for(var E;M!==a||n!==0&&M.nodeType!==3||(f=i+n),M!==u||e!==0&&M.nodeType!==3||(d=i+e),M.nodeType===3&&(i+=M.nodeValue.length),(E=M.firstChild)!==null;)z=M,M=E;for(;;){if(M===t)break l;if(z===a&&++S===n&&(f=i),z===u&&++T===e&&(d=i),(E=M.nextSibling)!==null)break;M=z,z=M.parentNode}M=E}a=f===-1||d===-1?null:{start:f,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:t,selectionRange:a},ei=!1,Vt=l;Vt!==null;)if(l=Vt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Vt=t;else for(;Vt!==null;){switch(l=Vt,u=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=l,n=u.memoizedProps,u=u.memoizedState,e=a.stateNode;try{var G=Ia(a.type,n);t=e.getSnapshotBeforeUpdate(G,u),e.__reactInternalSnapshotBeforeUpdate=t}catch($){zt(a,a.return,$)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=l.sibling,t!==null){t.return=l.return,Vt=t;break}Vt=l.return}}function Lo(t,l,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),e&4&&bn(5,a);break;case 1:if(ua(t,a),e&4)if(t=a.stateNode,l===null)try{t.componentDidMount()}catch(i){zt(a,a.return,i)}else{var n=Ia(a.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){zt(a,a.return,i)}}e&64&&Bo(a),e&512&&zn(a,a.return);break;case 3:if(ua(t,a),e&64&&(t=a.updateQueue,t!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{Ms(t,l)}catch(i){zt(a,a.return,i)}}break;case 27:l===null&&e&4&&Zo(a);case 26:case 5:ua(t,a),l===null&&e&4&&Go(a),e&512&&zn(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),e&4&&wo(t,a);break;case 13:ua(t,a),e&4&&$o(t,a),e&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=B1.bind(null,a),ny(t,a))));break;case 22:if(e=a.memoizedState!==null||ea,!e){l=l!==null&&l.memoizedState!==null||Xt,n=ea;var u=Xt;ea=e,(Xt=l)&&!u?ia(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),ea=n,Xt=u}break;case 30:break;default:ua(t,a)}}function Ko(t){var l=t.alternate;l!==null&&(t.alternate=null,Ko(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Ui(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,ul=!1;function na(t,l,a){for(a=a.child;a!==null;)Jo(t,l,a),a=a.sibling}function Jo(t,l,a){if(dl&&typeof dl.onCommitFiberUnmount=="function")try{dl.onCommitFiberUnmount(Le,a)}catch{}switch(a.tag){case 26:Xt||Gl(a,l),na(t,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||Gl(a,l);var e=Nt,n=ul;Da(a.type)&&(Nt=a.stateNode,ul=!1),na(t,l,a),Nn(a.stateNode),Nt=e,ul=n;break;case 5:Xt||Gl(a,l);case 6:if(e=Nt,n=ul,Nt=null,na(t,l,a),Nt=e,ul=n,Nt!==null)if(ul)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(a.stateNode)}catch(u){zt(a,l,u)}else try{Nt.removeChild(a.stateNode)}catch(u){zt(a,l,u)}break;case 18:Nt!==null&&(ul?(t=Nt,B0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xe(t)):B0(Nt,a.stateNode));break;case 4:e=Nt,n=ul,Nt=a.stateNode.containerInfo,ul=!0,na(t,l,a),Nt=e,ul=n;break;case 0:case 11:case 14:case 15:Ea(2,a,l),Xt||Ea(4,a,l),na(t,l,a);break;case 1:Xt||(Gl(a,l),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Xo(a,l,e)),na(t,l,a);break;case 21:na(t,l,a);break;case 22:Xt=(e=Xt)||a.memoizedState!==null,na(t,l,a),Xt=e;break;default:na(t,l,a)}}function wo(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xe(t)}catch(a){zt(l,l.return,a)}}}function $o(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xe(t)}catch(a){zt(l,l.return,a)}}function N1(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Vo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Vo),l;default:throw Error(s(435,t.tag))}}function qu(t,l){var a=N1(t);l.forEach(function(e){if(!a.has(e)){a.add(e);var n=X1.bind(null,t,e);e.then(n,n)}})}function il(t,l){var a=l.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],u=t,i=l,f=i;t:for(;f!==null;){switch(f.tag){case 27:if(Da(f.type)){Nt=f.stateNode,ul=!1;break t}break;case 5:Nt=f.stateNode,ul=!1;break t;case 3:case 4:Nt=f.stateNode.containerInfo,ul=!0;break t}f=f.return}if(Nt===null)throw Error(s(160));Jo(u,i,n),Nt=null,ul=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Wo(l,t),l=l.sibling}var Hl=null;function Wo(t,l){var a=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:il(l,t),cl(t),e&4&&(Ea(3,t,t.return),bn(3,t),Ea(5,t,t.return));break;case 1:il(l,t),cl(t),e&512&&(Xt||a===null||Gl(a,a.return)),e&64&&ea&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=Hl;if(il(l,t),cl(t),e&512&&(Xt||a===null||Gl(a,a.return)),e&4){var u=a!==null?a.memoizedState:null;if(e=t.memoizedState,a===null)if(e===null)if(t.stateNode===null){t:{e=t.type,a=t.memoizedProps,n=n.ownerDocument||n;l:switch(e){case"title":u=n.getElementsByTagName("title")[0],(!u||u[we]||u[Kt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(e),n.head.insertBefore(u,n.querySelector("head > title"))),Wt(u,e,a),u[Kt]=t,Zt(u),e=u;break t;case"link":var i=W0("link","href",n).get(e+(a.href||""));if(i){for(var f=0;f<i.length;f++)if(u=i[f],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(f,1);break l}}u=n.createElement(e),Wt(u,e,a),n.head.appendChild(u);break;case"meta":if(i=W0("meta","content",n).get(e+(a.content||""))){for(f=0;f<i.length;f++)if(u=i[f],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(f,1);break l}}u=n.createElement(e),Wt(u,e,a),n.head.appendChild(u);break;default:throw Error(s(468,e))}u[Kt]=t,Zt(u),e=u}t.stateNode=e}else F0(n,t.type,t.stateNode);else t.stateNode=$0(n,e,t.memoizedProps);else u!==e?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,e===null?F0(n,t.type,t.stateNode):$0(n,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Ic(t,t.memoizedProps,a.memoizedProps)}break;case 27:il(l,t),cl(t),e&512&&(Xt||a===null||Gl(a,a.return)),a!==null&&e&4&&Ic(t,t.memoizedProps,a.memoizedProps);break;case 5:if(il(l,t),cl(t),e&512&&(Xt||a===null||Gl(a,a.return)),t.flags&32){n=t.stateNode;try{fe(n,"")}catch(G){zt(t,t.return,G)}}e&4&&t.stateNode!=null&&(n=t.memoizedProps,Ic(t,n,a!==null?a.memoizedProps:n)),e&1024&&(lf=!0);break;case 6:if(il(l,t),cl(t),e&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e}catch(G){zt(t,t.return,G)}}break;case 3:if(Pu=null,n=Hl,Hl=ku(l.containerInfo),il(l,t),Hl=n,cl(t),e&4&&a!==null&&a.memoizedState.isDehydrated)try{Xe(l.containerInfo)}catch(G){zt(t,t.return,G)}lf&&(lf=!1,Fo(t));break;case 4:e=Hl,Hl=ku(t.stateNode.containerInfo),il(l,t),cl(t),Hl=e;break;case 12:il(l,t),cl(t);break;case 31:il(l,t),cl(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 13:il(l,t),cl(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xu=ol()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 22:n=t.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,S=ea,T=Xt;if(ea=S||n,Xt=T||d,il(l,t),Xt=T,ea=S,cl(t),e&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(a===null||d||ea||Xt||Pa(t)),a=null,l=t;;){if(l.tag===5||l.tag===26){if(a===null){d=a=l;try{if(u=d.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=d.stateNode;var M=d.memoizedProps.style,z=M!=null&&M.hasOwnProperty("display")?M.display:null;f.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(G){zt(d,d.return,G)}}}else if(l.tag===6){if(a===null){d=l;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(G){zt(d,d.return,G)}}}else if(l.tag===18){if(a===null){d=l;try{var E=d.stateNode;n?X0(E,!0):X0(d.stateNode,!1)}catch(G){zt(d,d.return,G)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}e&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,qu(t,a))));break;case 19:il(l,t),cl(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qu(t,e)));break;case 30:break;case 21:break;default:il(l,t),cl(t)}}function cl(t){var l=t.flags;if(l&2){try{for(var a,e=t.return;e!==null;){if(Qo(e)){a=e;break}e=e.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,u=Pc(t);Yu(t,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(fe(i,""),a.flags&=-33);var f=Pc(t);Yu(t,f,i);break;case 3:case 4:var d=a.stateNode.containerInfo,S=Pc(t);tf(t,S,d);break;default:throw Error(s(161))}}catch(T){zt(t,t.return,T)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Fo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Fo(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function ua(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Lo(t,l.alternate,l),l=l.sibling}function Pa(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:Ea(4,l,l.return),Pa(l);break;case 1:Gl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&Xo(l,l.return,a),Pa(l);break;case 27:Nn(l.stateNode);case 26:case 5:Gl(l,l.return),Pa(l);break;case 22:l.memoizedState===null&&Pa(l);break;case 30:Pa(l);break;default:Pa(l)}t=t.sibling}}function ia(t,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var e=l.alternate,n=t,u=l,i=u.flags;switch(u.tag){case 0:case 11:case 15:ia(n,u,a),bn(4,u);break;case 1:if(ia(n,u,a),e=u,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){zt(e,e.return,S)}if(e=u,n=e.updateQueue,n!==null){var f=e.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)_s(d[n],f)}catch(S){zt(e,e.return,S)}}a&&i&64&&Bo(u),zn(u,u.return);break;case 27:Zo(u);case 26:case 5:ia(n,u,a),a&&e===null&&i&4&&Go(u),zn(u,u.return);break;case 12:ia(n,u,a);break;case 31:ia(n,u,a),a&&i&4&&wo(n,u);break;case 13:ia(n,u,a),a&&i&4&&$o(n,u);break;case 22:u.memoizedState===null&&ia(n,u,a),zn(u,u.return);break;case 30:break;default:ia(n,u,a)}l=l.sibling}}function af(t,l){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&cn(a))}function ef(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&cn(t))}function jl(t,l,a,e){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ko(t,l,a,e),l=l.sibling}function ko(t,l,a,e){var n=l.flags;switch(l.tag){case 0:case 11:case 15:jl(t,l,a,e),n&2048&&bn(9,l);break;case 1:jl(t,l,a,e);break;case 3:jl(t,l,a,e),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&cn(t)));break;case 12:if(n&2048){jl(t,l,a,e),t=l.stateNode;try{var u=l.memoizedProps,i=u.id,f=u.onPostCommit;typeof f=="function"&&f(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(d){zt(l,l.return,d)}}else jl(t,l,a,e);break;case 31:jl(t,l,a,e);break;case 13:jl(t,l,a,e);break;case 23:break;case 22:u=l.stateNode,i=l.alternate,l.memoizedState!==null?u._visibility&2?jl(t,l,a,e):En(t,l):u._visibility&2?jl(t,l,a,e):(u._visibility|=2,xe(t,l,a,e,(l.subtreeFlags&10256)!==0||!1)),n&2048&&af(i,l);break;case 24:jl(t,l,a,e),n&2048&&ef(l.alternate,l);break;default:jl(t,l,a,e)}}function xe(t,l,a,e,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var u=t,i=l,f=a,d=e,S=i.flags;switch(i.tag){case 0:case 11:case 15:xe(u,i,f,d,n),bn(8,i);break;case 23:break;case 22:var T=i.stateNode;i.memoizedState!==null?T._visibility&2?xe(u,i,f,d,n):En(u,i):(T._visibility|=2,xe(u,i,f,d,n)),n&&S&2048&&af(i.alternate,i);break;case 24:xe(u,i,f,d,n),n&&S&2048&&ef(i.alternate,i);break;default:xe(u,i,f,d,n)}l=l.sibling}}function En(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=t,e=l,n=e.flags;switch(e.tag){case 22:En(a,e),n&2048&&af(e.alternate,e);break;case 24:En(a,e),n&2048&&ef(e.alternate,e);break;default:En(a,e)}l=l.sibling}}var Tn=8192;function De(t,l,a){if(t.subtreeFlags&Tn)for(t=t.child;t!==null;)Io(t,l,a),t=t.sibling}function Io(t,l,a){switch(t.tag){case 26:De(t,l,a),t.flags&Tn&&t.memoizedState!==null&&vy(a,Hl,t.memoizedState,t.memoizedProps);break;case 5:De(t,l,a);break;case 3:case 4:var e=Hl;Hl=ku(t.stateNode.containerInfo),De(t,l,a),Hl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Tn,Tn=16777216,De(t,l,a),Tn=e):De(t,l,a));break;default:De(t,l,a)}}function Po(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function An(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];Vt=e,l0(e,t)}Po(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)t0(t),t=t.sibling}function t0(t){switch(t.tag){case 0:case 11:case 15:An(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:An(t);break;case 12:An(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,Bu(t)):An(t);break;default:An(t)}}function Bu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];Vt=e,l0(e,t)}Po(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:Ea(8,l,l.return),Bu(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,Bu(l));break;default:Bu(l)}t=t.sibling}}function l0(t,l){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Ea(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:cn(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Vt=e;else t:for(a=t;Vt!==null;){e=Vt;var n=e.sibling,u=e.return;if(Ko(e),e===a){Vt=null;break t}if(n!==null){n.return=u,Vt=n;break t}Vt=u}}}var U1={getCacheForType:function(t){var l=wt(Yt),a=l.data.get(t);return a===void 0&&(a=t(),l.data.set(t,a)),a},cacheSignal:function(){return wt(Yt).controller.signal}},R1=typeof WeakMap=="function"?WeakMap:Map,dt=0,Mt=null,nt=null,ct=0,bt=0,pl=null,Ta=!1,Ne=!1,nf=!1,ca=0,Rt=0,Aa=0,te=0,uf=0,Sl=0,Ue=0,On=null,fl=null,cf=!1,Xu=0,a0=0,Gu=1/0,Qu=null,Oa=null,Qt=0,_a=null,Re=null,fa=0,ff=0,rf=null,e0=null,_n=0,sf=null;function bl(){return(dt&2)!==0&&ct!==0?ct&-ct:A.T!==null?vf():pr()}function n0(){if(Sl===0)if((ct&536870912)===0||rt){var t=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),Sl=t}else Sl=536870912;return t=vl.current,t!==null&&(t.flags|=32),Sl}function rl(t,l,a){(t===Mt&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Ce(t,0),Ma(t,ct,Sl,!1)),Je(t,a),((dt&2)===0||t!==Mt)&&(t===Mt&&((dt&2)===0&&(te|=a),Rt===4&&Ma(t,ct,Sl,!1)),Ql(t))}function u0(t,l,a){if((dt&6)!==0)throw Error(s(327));var e=!a&&(l&127)===0&&(l&t.expiredLanes)===0||Ke(t,l),n=e?j1(t,l):df(t,l,!0),u=e;do{if(n===0){Ne&&!e&&Ma(t,l,0,!1);break}else{if(a=t.current.alternate,u&&!C1(a)){n=df(t,l,!1),u=!1;continue}if(n===2){if(u=l,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var f=t;n=On;var d=f.current.memoizedState.isDehydrated;if(d&&(Ce(f,i).flags|=256),i=df(f,i,!1),i!==2){if(nf&&!d){f.errorRecoveryDisabledLanes|=u,te|=u,n=4;break t}u=fl,fl=n,u!==null&&(fl===null?fl=u:fl.push.apply(fl,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Ce(t,0),Ma(t,l,0,!0);break}t:{switch(e=t,u=n,u){case 0:case 1:throw Error(s(345));case 4:if((l&4194048)!==l)break;case 6:Ma(e,l,Sl,!Ta);break t;case 2:fl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((l&62914560)===l&&(n=Xu+300-ol(),10<n)){if(Ma(e,l,Sl,!Ta),kn(e,0,!0)!==0)break t;fa=l,e.timeoutHandle=Y0(i0.bind(null,e,a,fl,Qu,cf,l,Sl,te,Ue,Ta,u,"Throttled",-0,0),n);break t}i0(e,a,fl,Qu,cf,l,Sl,te,Ue,Ta,u,null,-0,0)}}break}while(!0);Ql(t)}function i0(t,l,a,e,n,u,i,f,d,S,T,M,z,E){if(t.timeoutHandle=-1,M=l.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wl},Io(l,u,M);var G=(u&62914560)===u?Xu-ol():(u&4194048)===u?a0-ol():0;if(G=gy(M,G),G!==null){fa=u,t.cancelPendingCommit=G(y0.bind(null,t,l,u,a,e,n,i,f,d,T,M,null,z,E)),Ma(t,u,i,!S);return}}y0(t,l,u,a,e,n,i,f,d)}function C1(t){for(var l=t;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],u=n.getSnapshot;n=n.value;try{if(!yl(u(),n))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Ma(t,l,a,e){l&=~uf,l&=~te,t.suspendedLanes|=l,t.pingedLanes&=~l,e&&(t.warmLanes|=l),e=t.expirationTimes;for(var n=l;0<n;){var u=31-ml(n),i=1<<u;e[u]=-1,n&=~i}a!==0&&hr(t,a,l)}function Zu(){return(dt&6)===0?(Mn(0),!1):!0}function of(){if(nt!==null){if(bt===0)var t=nt.return;else t=nt,kl=Ka=null,_c(t),Te=null,rn=0,t=nt;for(;t!==null;)qo(t.alternate,t),t=t.return;nt=null}}function Ce(t,l){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,P1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,of(),Mt=t,nt=a=Wl(t.current,null),ct=l,bt=0,pl=null,Ta=!1,Ne=Ke(t,l),nf=!1,Ue=Sl=uf=te=Aa=Rt=0,fl=On=null,cf=!1,(l&8)!==0&&(l|=l&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=l;0<e;){var n=31-ml(e),u=1<<n;l|=t[n],e&=~u}return ca=l,ru(),a}function c0(t,l){lt=null,A.H=gn,l===Ee||l===gu?(l=Es(),bt=3):l===yc?(l=Es(),bt=4):bt=l===Zc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,pl=l,nt===null&&(Rt=1,Uu(t,Ol(l,t.current)))}function f0(){var t=vl.current;return t===null?!0:(ct&4194048)===ct?Dl===null:(ct&62914560)===ct||(ct&536870912)!==0?t===Dl:!1}function r0(){var t=A.H;return A.H=gn,t===null?gn:t}function s0(){var t=A.A;return A.A=U1,t}function Vu(){Rt=4,Ta||(ct&4194048)!==ct&&vl.current!==null||(Ne=!0),(Aa&134217727)===0&&(te&134217727)===0||Mt===null||Ma(Mt,ct,Sl,!1)}function df(t,l,a){var e=dt;dt|=2;var n=r0(),u=s0();(Mt!==t||ct!==l)&&(Qu=null,Ce(t,l)),l=!1;var i=Rt;t:do try{if(bt!==0&&nt!==null){var f=nt,d=pl;switch(bt){case 8:of(),i=6;break t;case 3:case 2:case 9:case 6:vl.current===null&&(l=!0);var S=bt;if(bt=0,pl=null,He(t,f,d,S),a&&Ne){i=0;break t}break;default:S=bt,bt=0,pl=null,He(t,f,d,S)}}H1(),i=Rt;break}catch(T){c0(t,T)}while(!0);return l&&t.shellSuspendCounter++,kl=Ka=null,dt=e,A.H=n,A.A=u,nt===null&&(Mt=null,ct=0,ru()),i}function H1(){for(;nt!==null;)o0(nt)}function j1(t,l){var a=dt;dt|=2;var e=r0(),n=s0();Mt!==t||ct!==l?(Qu=null,Gu=ol()+500,Ce(t,l)):Ne=Ke(t,l);t:do try{if(bt!==0&&nt!==null){l=nt;var u=pl;l:switch(bt){case 1:bt=0,pl=null,He(t,l,u,1);break;case 2:case 9:if(bs(u)){bt=0,pl=null,d0(l);break}l=function(){bt!==2&&bt!==9||Mt!==t||(bt=7),Ql(t)},u.then(l,l);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:bs(u)?(bt=0,pl=null,d0(l)):(bt=0,pl=null,He(t,l,u,7));break;case 5:var i=null;switch(nt.tag){case 26:i=nt.memoizedState;case 5:case 27:var f=nt;if(i?k0(i):f.stateNode.complete){bt=0,pl=null;var d=f.sibling;if(d!==null)nt=d;else{var S=f.return;S!==null?(nt=S,Lu(S)):nt=null}break l}}bt=0,pl=null,He(t,l,u,5);break;case 6:bt=0,pl=null,He(t,l,u,6);break;case 8:of(),Rt=6;break t;default:throw Error(s(462))}}Y1();break}catch(T){c0(t,T)}while(!0);return kl=Ka=null,A.H=e,A.A=n,dt=a,nt!==null?0:(Mt=null,ct=0,ru(),Rt)}function Y1(){for(;nt!==null&&!um();)o0(nt)}function o0(t){var l=jo(t.alternate,t,ca);t.memoizedProps=t.pendingProps,l===null?Lu(t):nt=l}function d0(t){var l=t,a=l.alternate;switch(l.tag){case 15:case 0:l=Do(a,l,l.pendingProps,l.type,void 0,ct);break;case 11:l=Do(a,l,l.pendingProps,l.type.render,l.ref,ct);break;case 5:_c(l);default:qo(a,l),l=nt=rs(l,ca),l=jo(a,l,ca)}t.memoizedProps=t.pendingProps,l===null?Lu(t):nt=l}function He(t,l,a,e){kl=Ka=null,_c(l),Te=null,rn=0;var n=l.return;try{if(A1(t,n,l,a,ct)){Rt=1,Uu(t,Ol(a,t.current)),nt=null;return}}catch(u){if(n!==null)throw nt=n,u;Rt=1,Uu(t,Ol(a,t.current)),nt=null;return}l.flags&32768?(rt||e===1?t=!0:Ne||(ct&536870912)!==0?t=!1:(Ta=t=!0,(e===2||e===9||e===3||e===6)&&(e=vl.current,e!==null&&e.tag===13&&(e.flags|=16384))),m0(l,t)):Lu(l)}function Lu(t){var l=t;do{if((l.flags&32768)!==0){m0(l,Ta);return}t=l.return;var a=M1(l.alternate,l,ca);if(a!==null){nt=a;return}if(l=l.sibling,l!==null){nt=l;return}nt=l=t}while(l!==null);Rt===0&&(Rt=5)}function m0(t,l){do{var a=x1(t.alternate,t);if(a!==null){a.flags&=32767,nt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(t=t.sibling,t!==null)){nt=t;return}nt=t=a}while(t!==null);Rt=6,nt=null}function y0(t,l,a,e,n,u,i,f,d){t.cancelPendingCommit=null;do Ku();while(Qt!==0);if((dt&6)!==0)throw Error(s(327));if(l!==null){if(l===t.current)throw Error(s(177));if(u=l.lanes|l.childLanes,u|=Pi,hm(t,a,u,i,f,d),t===Mt&&(nt=Mt=null,ct=0),Re=l,_a=t,fa=a,ff=u,rf=n,e0=e,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,G1(wn,function(){return S0(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||e){e=A.T,A.T=null,n=q.p,q.p=2,i=dt,dt|=4;try{D1(t,l,a)}finally{dt=i,q.p=n,A.T=e}}Qt=1,h0(),v0(),g0()}}function h0(){if(Qt===1){Qt=0;var t=_a,l=Re,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var e=q.p;q.p=2;var n=dt;dt|=4;try{Wo(l,t);var u=Af,i=ts(t.containerInfo),f=u.focusedElem,d=u.selectionRange;if(i!==f&&f&&f.ownerDocument&&Pr(f.ownerDocument.documentElement,f)){if(d!==null&&$i(f)){var S=d.start,T=d.end;if(T===void 0&&(T=S),"selectionStart"in f)f.selectionStart=S,f.selectionEnd=Math.min(T,f.value.length);else{var M=f.ownerDocument||document,z=M&&M.defaultView||window;if(z.getSelection){var E=z.getSelection(),G=f.textContent.length,$=Math.min(d.start,G),Ot=d.end===void 0?$:Math.min(d.end,G);!E.extend&&$>Ot&&(i=Ot,Ot=$,$=i);var v=Ir(f,$),m=Ir(f,Ot);if(v&&m&&(E.rangeCount!==1||E.anchorNode!==v.node||E.anchorOffset!==v.offset||E.focusNode!==m.node||E.focusOffset!==m.offset)){var p=M.createRange();p.setStart(v.node,v.offset),E.removeAllRanges(),$>Ot?(E.addRange(p),E.extend(m.node,m.offset)):(p.setEnd(m.node,m.offset),E.addRange(p))}}}}for(M=[],E=f;E=E.parentNode;)E.nodeType===1&&M.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<M.length;f++){var O=M[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}ei=!!Tf,Af=Tf=null}finally{dt=n,q.p=e,A.T=a}}t.current=l,Qt=2}}function v0(){if(Qt===2){Qt=0;var t=_a,l=Re,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var e=q.p;q.p=2;var n=dt;dt|=4;try{Lo(t,l.alternate,l)}finally{dt=n,q.p=e,A.T=a}}Qt=3}}function g0(){if(Qt===4||Qt===3){Qt=0,im();var t=_a,l=Re,a=fa,e=e0;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Qt=5:(Qt=0,Re=_a=null,p0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Oa=null),Di(a),l=l.stateNode,dl&&typeof dl.onCommitFiberRoot=="function")try{dl.onCommitFiberRoot(Le,l,void 0,(l.current.flags&128)===128)}catch{}if(e!==null){l=A.T,n=q.p,q.p=2,A.T=null;try{for(var u=t.onRecoverableError,i=0;i<e.length;i++){var f=e[i];u(f.value,{componentStack:f.stack})}}finally{A.T=l,q.p=n}}(fa&3)!==0&&Ku(),Ql(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===sf?_n++:(_n=0,sf=t):_n=0,Mn(0)}}function p0(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,cn(l)))}function Ku(){return h0(),v0(),g0(),S0()}function S0(){if(Qt!==5)return!1;var t=_a,l=ff;ff=0;var a=Di(fa),e=A.T,n=q.p;try{q.p=32>a?32:a,A.T=null,a=rf,rf=null;var u=_a,i=fa;if(Qt=0,Re=_a=null,fa=0,(dt&6)!==0)throw Error(s(331));var f=dt;if(dt|=4,t0(u.current),ko(u,u.current,i,a),dt=f,Mn(0,!1),dl&&typeof dl.onPostCommitFiberRoot=="function")try{dl.onPostCommitFiberRoot(Le,u)}catch{}return!0}finally{q.p=n,A.T=e,p0(t,l)}}function b0(t,l,a){l=Ol(a,l),l=Qc(t.stateNode,l,2),t=Sa(t,l,2),t!==null&&(Je(t,2),Ql(t))}function zt(t,l,a){if(t.tag===3)b0(t,t,a);else for(;l!==null;){if(l.tag===3){b0(l,t,a);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Oa===null||!Oa.has(e))){t=Ol(a,t),a=zo(2),e=Sa(l,a,2),e!==null&&(Eo(a,e,l,t),Je(e,2),Ql(e));break}}l=l.return}}function mf(t,l,a){var e=t.pingCache;if(e===null){e=t.pingCache=new R1;var n=new Set;e.set(l,n)}else n=e.get(l),n===void 0&&(n=new Set,e.set(l,n));n.has(a)||(nf=!0,n.add(a),t=q1.bind(null,t,l,a),l.then(t,t))}function q1(t,l,a){var e=t.pingCache;e!==null&&e.delete(l),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(ct&a)===a&&(Rt===4||Rt===3&&(ct&62914560)===ct&&300>ol()-Xu?(dt&2)===0&&Ce(t,0):uf|=a,Ue===ct&&(Ue=0)),Ql(t)}function z0(t,l){l===0&&(l=yr()),t=Za(t,l),t!==null&&(Je(t,l),Ql(t))}function B1(t){var l=t.memoizedState,a=0;l!==null&&(a=l.retryLane),z0(t,a)}function X1(t,l){var a=0;switch(t.tag){case 31:case 13:var e=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(s(314))}e!==null&&e.delete(l),z0(t,a)}function G1(t,l){return Oi(t,l)}var Ju=null,je=null,yf=!1,wu=!1,hf=!1,xa=0;function Ql(t){t!==je&&t.next===null&&(je===null?Ju=je=t:je=je.next=t),wu=!0,yf||(yf=!0,Z1())}function Mn(t,l){if(!hf&&wu){hf=!0;do for(var a=!1,e=Ju;e!==null;){if(t!==0){var n=e.pendingLanes;if(n===0)var u=0;else{var i=e.suspendedLanes,f=e.pingedLanes;u=(1<<31-ml(42|t)+1)-1,u&=n&~(i&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,O0(e,u))}else u=ct,u=kn(e,e===Mt?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(u&3)===0||Ke(e,u)||(a=!0,O0(e,u));e=e.next}while(a);hf=!1}}function Q1(){E0()}function E0(){wu=yf=!1;var t=0;xa!==0&&I1()&&(t=xa);for(var l=ol(),a=null,e=Ju;e!==null;){var n=e.next,u=T0(e,l);u===0?(e.next=null,a===null?Ju=n:a.next=n,n===null&&(je=a)):(a=e,(t!==0||(u&3)!==0)&&(wu=!0)),e=n}Qt!==0&&Qt!==5||Mn(t),xa!==0&&(xa=0)}function T0(t,l){for(var a=t.suspendedLanes,e=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-ml(u),f=1<<i,d=n[i];d===-1?((f&a)===0||(f&e)!==0)&&(n[i]=ym(f,l)):d<=l&&(t.expiredLanes|=f),u&=~f}if(l=Mt,a=ct,a=kn(t,t===l?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,a===0||t===l&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&_i(e),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ke(t,a)){if(l=a&-a,l===t.callbackPriority)return l;switch(e!==null&&_i(e),Di(a)){case 2:case 8:a=dr;break;case 32:a=wn;break;case 268435456:a=mr;break;default:a=wn}return e=A0.bind(null,t),a=Oi(a,e),t.callbackPriority=l,t.callbackNode=a,l}return e!==null&&e!==null&&_i(e),t.callbackPriority=2,t.callbackNode=null,2}function A0(t,l){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ku()&&t.callbackNode!==a)return null;var e=ct;return e=kn(t,t===Mt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(u0(t,e,l),T0(t,ol()),t.callbackNode!=null&&t.callbackNode===a?A0.bind(null,t):null)}function O0(t,l){if(Ku())return null;u0(t,l,!0)}function Z1(){ty(function(){(dt&6)!==0?Oi(or,Q1):E0()})}function vf(){if(xa===0){var t=be;t===0&&(t=$n,$n<<=1,($n&261888)===0&&($n=256)),xa=t}return xa}function _0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:lu(""+t)}function M0(t,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,t.id&&a.setAttribute("form",t.id),l.parentNode.insertBefore(a,l),t=new FormData(t),a.parentNode.removeChild(a),t}function V1(t,l,a,e,n){if(l==="submit"&&a&&a.stateNode===n){var u=_0((n[el]||null).action),i=e.submitter;i&&(l=(l=i[el]||null)?_0(l.formAction):i.getAttribute("formAction"),l!==null&&(u=l,i=null));var f=new uu("action","action",null,e,n);t.push({event:f,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(xa!==0){var d=i?M0(n,i):new FormData(n);jc(a,{pending:!0,data:d,method:n.method,action:u},null,d)}}else typeof u=="function"&&(f.preventDefault(),d=i?M0(n,i):new FormData(n),jc(a,{pending:!0,data:d,method:n.method,action:u},u,d))},currentTarget:n}]})}}for(var gf=0;gf<Ii.length;gf++){var pf=Ii[gf],L1=pf.toLowerCase(),K1=pf[0].toUpperCase()+pf.slice(1);Cl(L1,"on"+K1)}Cl(es,"onAnimationEnd"),Cl(ns,"onAnimationIteration"),Cl(us,"onAnimationStart"),Cl("dblclick","onDoubleClick"),Cl("focusin","onFocus"),Cl("focusout","onBlur"),Cl(c1,"onTransitionRun"),Cl(f1,"onTransitionStart"),Cl(r1,"onTransitionCancel"),Cl(is,"onTransitionEnd"),ie("onMouseEnter",["mouseout","mouseover"]),ie("onMouseLeave",["mouseout","mouseover"]),ie("onPointerEnter",["pointerout","pointerover"]),ie("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function x0(t,l){l=(l&4)!==0;for(var a=0;a<t.length;a++){var e=t[a],n=e.event;e=e.listeners;t:{var u=void 0;if(l)for(var i=e.length-1;0<=i;i--){var f=e[i],d=f.instance,S=f.currentTarget;if(f=f.listener,d!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=S;try{u(n)}catch(T){fu(T)}n.currentTarget=null,u=d}else for(i=0;i<e.length;i++){if(f=e[i],d=f.instance,S=f.currentTarget,f=f.listener,d!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=S;try{u(n)}catch(T){fu(T)}n.currentTarget=null,u=d}}}}function ut(t,l){var a=l[Ni];a===void 0&&(a=l[Ni]=new Set);var e=t+"__bubble";a.has(e)||(D0(l,t,2,!1),a.add(e))}function Sf(t,l,a){var e=0;l&&(e|=4),D0(a,t,e,l)}var $u="_reactListening"+Math.random().toString(36).slice(2);function bf(t){if(!t[$u]){t[$u]=!0,zr.forEach(function(a){a!=="selectionchange"&&(J1.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[$u]||(l[$u]=!0,Sf("selectionchange",!1,l))}}function D0(t,l,a,e){switch(nd(l)){case 2:var n=by;break;case 8:n=zy;break;default:n=jf}a=n.bind(null,l,a,t),n=void 0,!Xi||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),e?n!==void 0?t.addEventListener(l,a,{capture:!0,passive:n}):t.addEventListener(l,a,!0):n!==void 0?t.addEventListener(l,a,{passive:n}):t.addEventListener(l,a,!1)}function zf(t,l,a,e,n){var u=e;if((l&1)===0&&(l&2)===0&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var f=e.stateNode.containerInfo;if(f===n)break;if(i===4)for(i=e.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;f!==null;){if(i=ee(f),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){e=u=i;continue t}f=f.parentNode}}e=e.return}Cr(function(){var S=u,T=qi(a),M=[];t:{var z=cs.get(t);if(z!==void 0){var E=uu,G=t;switch(t){case"keypress":if(eu(a)===0)break t;case"keydown":case"keyup":E=Xm;break;case"focusin":G="focus",E=Vi;break;case"focusout":G="blur",E=Vi;break;case"beforeblur":case"afterblur":E=Vi;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Yr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Zm;break;case es:case ns:case us:E=Nm;break;case is:E=Lm;break;case"scroll":case"scrollend":E=Om;break;case"wheel":E=Jm;break;case"copy":case"cut":case"paste":E=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Br;break;case"toggle":case"beforetoggle":E=$m}var $=(l&4)!==0,Ot=!$&&(t==="scroll"||t==="scrollend"),v=$?z!==null?z+"Capture":null:z;$=[];for(var m=S,p;m!==null;){var O=m;if(p=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||p===null||v===null||(O=We(m,v),O!=null&&$.push(Dn(m,O,p))),Ot)break;m=m.return}0<$.length&&(z=new E(z,G,null,a,T),M.push({event:z,listeners:$}))}}if((l&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",z&&a!==Yi&&(G=a.relatedTarget||a.fromElement)&&(ee(G)||G[ae]))break t;if((E||z)&&(z=T.window===T?T:(z=T.ownerDocument)?z.defaultView||z.parentWindow:window,E?(G=a.relatedTarget||a.toElement,E=S,G=G?ee(G):null,G!==null&&(Ot=b(G),$=G.tag,G!==Ot||$!==5&&$!==27&&$!==6)&&(G=null)):(E=null,G=S),E!==G)){if($=Yr,O="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&($=Br,O="onPointerLeave",v="onPointerEnter",m="pointer"),Ot=E==null?z:$e(E),p=G==null?z:$e(G),z=new $(O,m+"leave",E,a,T),z.target=Ot,z.relatedTarget=p,O=null,ee(T)===S&&($=new $(v,m+"enter",G,a,T),$.target=p,$.relatedTarget=Ot,O=$),Ot=O,E&&G)l:{for($=w1,v=E,m=G,p=0,O=v;O;O=$(O))p++;O=0;for(var w=m;w;w=$(w))O++;for(;0<p-O;)v=$(v),p--;for(;0<O-p;)m=$(m),O--;for(;p--;){if(v===m||m!==null&&v===m.alternate){$=v;break l}v=$(v),m=$(m)}$=null}else $=null;E!==null&&N0(M,z,E,$,!1),G!==null&&Ot!==null&&N0(M,Ot,G,$,!0)}}t:{if(z=S?$e(S):window,E=z.nodeName&&z.nodeName.toLowerCase(),E==="select"||E==="input"&&z.type==="file")var st=Jr;else if(Lr(z))if(wr)st=n1;else{st=a1;var V=l1}else E=z.nodeName,!E||E.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&ji(S.elementType)&&(st=Jr):st=e1;if(st&&(st=st(t,S))){Kr(M,st,a,T);break t}V&&V(t,z,S),t==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&Hi(z,"number",z.value)}switch(V=S?$e(S):window,t){case"focusin":(Lr(V)||V.contentEditable==="true")&&(de=V,Wi=S,en=null);break;case"focusout":en=Wi=de=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,ls(M,a,T);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":ls(M,a,T)}var at;if(Ki)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else oe?Zr(t,a)&&(ft="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(Xr&&a.locale!=="ko"&&(oe||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&oe&&(at=Hr()):(da=T,Gi="value"in da?da.value:da.textContent,oe=!0)),V=Wu(S,ft),0<V.length&&(ft=new qr(ft,t,null,a,T),M.push({event:ft,listeners:V}),at?ft.data=at:(at=Vr(a),at!==null&&(ft.data=at)))),(at=Fm?km(t,a):Im(t,a))&&(ft=Wu(S,"onBeforeInput"),0<ft.length&&(V=new qr("onBeforeInput","beforeinput",null,a,T),M.push({event:V,listeners:ft}),V.data=at)),V1(M,t,S,a,T)}x0(M,l)})}function Dn(t,l,a){return{instance:t,listener:l,currentTarget:a}}function Wu(t,l){for(var a=l+"Capture",e=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=We(t,a),n!=null&&e.unshift(Dn(t,n,u)),n=We(t,l),n!=null&&e.push(Dn(t,n,u))),t.tag===3)return e;t=t.return}return[]}function w1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function N0(t,l,a,e,n){for(var u=l._reactName,i=[];a!==null&&a!==e;){var f=a,d=f.alternate,S=f.stateNode;if(f=f.tag,d!==null&&d===e)break;f!==5&&f!==26&&f!==27||S===null||(d=S,n?(S=We(a,u),S!=null&&i.unshift(Dn(a,S,d))):n||(S=We(a,u),S!=null&&i.push(Dn(a,S,d)))),a=a.return}i.length!==0&&t.push({event:l,listeners:i})}var $1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function U0(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(W1,"")}function R0(t,l){return l=U0(l),U0(t)===l}function At(t,l,a,e,n,u){switch(a){case"children":typeof e=="string"?l==="body"||l==="textarea"&&e===""||fe(t,e):(typeof e=="number"||typeof e=="bigint")&&l!=="body"&&fe(t,""+e);break;case"className":Pn(t,"class",e);break;case"tabIndex":Pn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(t,a,e);break;case"style":Ur(t,e,u);break;case"data":if(l!=="object"){Pn(t,"data",e);break}case"src":case"href":if(e===""&&(l!=="a"||a!=="href")){t.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=lu(""+e),t.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(l!=="input"&&At(t,l,"name",n.name,n,null),At(t,l,"formEncType",n.formEncType,n,null),At(t,l,"formMethod",n.formMethod,n,null),At(t,l,"formTarget",n.formTarget,n,null)):(At(t,l,"encType",n.encType,n,null),At(t,l,"method",n.method,n,null),At(t,l,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=lu(""+e),t.setAttribute(a,e);break;case"onClick":e!=null&&(t.onclick=wl);break;case"onScroll":e!=null&&ut("scroll",t);break;case"onScrollEnd":e!=null&&ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}a=lu(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""+e):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":e===!0?t.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,e):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(a,e):t.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(a):t.setAttribute(a,e);break;case"popover":ut("beforetoggle",t),ut("toggle",t),In(t,"popover",e);break;case"xlinkActuate":Jl(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Jl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Jl(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Jl(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Jl(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Jl(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Jl(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Jl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Jl(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":In(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tm.get(a)||a,In(t,a,e))}}function Ef(t,l,a,e,n,u){switch(a){case"style":Ur(t,e,u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof e=="string"?fe(t,e):(typeof e=="number"||typeof e=="bigint")&&fe(t,""+e);break;case"onScroll":e!=null&&ut("scroll",t);break;case"onScrollEnd":e!=null&&ut("scrollend",t);break;case"onClick":e!=null&&(t.onclick=wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),l=a.slice(2,n?a.length-7:void 0),u=t[el]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(l,u,n),typeof e=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(l,e,n);break t}a in t?t[a]=e:e===!0?t.setAttribute(a,""):In(t,a,e)}}}function Wt(t,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",t),ut("load",t);var e=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,l));default:At(t,l,u,i,a,null)}}n&&At(t,l,"srcSet",a.srcSet,a,null),e&&At(t,l,"src",a.src,a,null);return;case"input":ut("invalid",t);var f=u=i=n=null,d=null,S=null;for(e in a)if(a.hasOwnProperty(e)){var T=a[e];if(T!=null)switch(e){case"name":n=T;break;case"type":i=T;break;case"checked":d=T;break;case"defaultChecked":S=T;break;case"value":u=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,l));break;default:At(t,l,e,T,a,null)}}Mr(t,u,f,d,S,i,n,!1);return;case"select":ut("invalid",t),e=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":u=f;break;case"defaultValue":i=f;break;case"multiple":e=f;default:At(t,l,n,f,a,null)}l=u,a=i,t.multiple=!!e,l!=null?ce(t,!!e,l,!1):a!=null&&ce(t,!!e,a,!0);return;case"textarea":ut("invalid",t),u=n=e=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":e=f;break;case"defaultValue":n=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:At(t,l,i,f,a,null)}Dr(t,e,n,u);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(e=a[d],e!=null))switch(d){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:At(t,l,d,e,a,null)}return;case"dialog":ut("beforetoggle",t),ut("toggle",t),ut("cancel",t),ut("close",t);break;case"iframe":case"object":ut("load",t);break;case"video":case"audio":for(e=0;e<xn.length;e++)ut(xn[e],t);break;case"image":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"embed":case"source":case"link":ut("error",t),ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(e=a[S],e!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,l));default:At(t,l,S,e,a,null)}return;default:if(ji(l)){for(T in a)a.hasOwnProperty(T)&&(e=a[T],e!==void 0&&Ef(t,l,T,e,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(e=a[f],e!=null&&At(t,l,f,e,a,null))}function F1(t,l,a,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,f=null,d=null,S=null,T=null;for(E in a){var M=a[E];if(a.hasOwnProperty(E)&&M!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":d=M;default:e.hasOwnProperty(E)||At(t,l,E,null,e,M)}}for(var z in e){var E=e[z];if(M=a[z],e.hasOwnProperty(z)&&(E!=null||M!=null))switch(z){case"type":u=E;break;case"name":n=E;break;case"checked":S=E;break;case"defaultChecked":T=E;break;case"value":i=E;break;case"defaultValue":f=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,l));break;default:E!==M&&At(t,l,z,E,e,M)}}Ci(t,i,f,d,S,T,u,n);return;case"select":E=i=f=z=null;for(u in a)if(d=a[u],a.hasOwnProperty(u)&&d!=null)switch(u){case"value":break;case"multiple":E=d;default:e.hasOwnProperty(u)||At(t,l,u,null,e,d)}for(n in e)if(u=e[n],d=a[n],e.hasOwnProperty(n)&&(u!=null||d!=null))switch(n){case"value":z=u;break;case"defaultValue":f=u;break;case"multiple":i=u;default:u!==d&&At(t,l,n,u,e,d)}l=f,a=i,e=E,z!=null?ce(t,!!a,z,!1):!!e!=!!a&&(l!=null?ce(t,!!a,l,!0):ce(t,!!a,a?[]:"",!1));return;case"textarea":E=z=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!e.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:At(t,l,f,null,e,n)}for(i in e)if(n=e[i],u=a[i],e.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":z=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==u&&At(t,l,i,n,e,u)}xr(t,z,E);return;case"option":for(var G in a)if(z=a[G],a.hasOwnProperty(G)&&z!=null&&!e.hasOwnProperty(G))switch(G){case"selected":t.selected=!1;break;default:At(t,l,G,null,e,z)}for(d in e)if(z=e[d],E=a[d],e.hasOwnProperty(d)&&z!==E&&(z!=null||E!=null))switch(d){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:At(t,l,d,z,e,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)z=a[$],a.hasOwnProperty($)&&z!=null&&!e.hasOwnProperty($)&&At(t,l,$,null,e,z);for(S in e)if(z=e[S],E=a[S],e.hasOwnProperty(S)&&z!==E&&(z!=null||E!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,l));break;default:At(t,l,S,z,e,E)}return;default:if(ji(l)){for(var Ot in a)z=a[Ot],a.hasOwnProperty(Ot)&&z!==void 0&&!e.hasOwnProperty(Ot)&&Ef(t,l,Ot,void 0,e,z);for(T in e)z=e[T],E=a[T],!e.hasOwnProperty(T)||z===E||z===void 0&&E===void 0||Ef(t,l,T,z,e,E);return}}for(var v in a)z=a[v],a.hasOwnProperty(v)&&z!=null&&!e.hasOwnProperty(v)&&At(t,l,v,null,e,z);for(M in e)z=e[M],E=a[M],!e.hasOwnProperty(M)||z===E||z==null&&E==null||At(t,l,M,z,e,E)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function k1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],u=n.transferSize,i=n.initiatorType,f=n.duration;if(u&&f&&C0(i)){for(i=0,f=n.responseEnd,e+=1;e<a.length;e++){var d=a[e],S=d.startTime;if(S>f)break;var T=d.transferSize,M=d.initiatorType;T&&C0(M)&&(d=d.responseEnd,i+=T*(d<f?1:(f-S)/(d-S)))}if(--e,l+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,Af=null;function Fu(t){return t.nodeType===9?t:t.ownerDocument}function H0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Of(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var _f=null;function I1(){var t=window.event;return t&&t.type==="popstate"?t===_f?!1:(_f=t,!0):(_f=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(ly)}:Y0;function ly(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function B0(t,l){var a=l,e=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){t.removeChild(n),Xe(l);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")Nn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Nn(a);for(var u=a.firstChild;u;){var i=u.nextSibling,f=u.nodeName;u[we]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&Nn(t.ownerDocument.body);a=n}while(a);Xe(l)}function X0(t,l){var a=t;t=0;do{var e=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=e}while(a)}function Mf(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),Ui(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,l,a,e){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[we])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Nl(t.nextSibling),t===null)break}return null}function ey(t,l,a){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Nl(t.nextSibling),t===null))return null;return t}function G0(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Nl(t.nextSibling),t===null))return null;return t}function xf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,l){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||a.readyState!=="loading")l();else{var e=function(){l(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Nl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Nf=null;function Q0(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(l===0)return Nl(t.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}t=t.nextSibling}return null}function Z0(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return t;l--}else a!=="/$"&&a!=="/&"||l++}t=t.previousSibling}return null}function V0(t,l,a){switch(l=Fu(a),t){case"html":if(t=l.documentElement,!t)throw Error(s(452));return t;case"head":if(t=l.head,!t)throw Error(s(453));return t;case"body":if(t=l.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Nn(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ui(t)}var Ul=new Map,L0=new Set;function ku(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=q.d;q.d={f:uy,r:iy,D:cy,C:fy,L:ry,m:sy,X:dy,S:oy,M:my};function uy(){var t=ra.f(),l=Zu();return t||l}function iy(t){var l=ne(t);l!==null&&l.tag===5&&l.type==="form"?io(l):ra.r(t)}var Ye=typeof document>"u"?null:document;function K0(t,l,a){var e=Ye;if(e&&typeof l=="string"&&l){var n=Tl(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),L0.has(n)||(L0.add(n),t={rel:t,crossOrigin:a,href:l},e.querySelector(n)===null&&(l=e.createElement("link"),Wt(l,"link",t),Zt(l),e.head.appendChild(l)))}}function cy(t){ra.D(t),K0("dns-prefetch",t,null)}function fy(t,l){ra.C(t,l),K0("preconnect",t,l)}function ry(t,l,a){ra.L(t,l,a);var e=Ye;if(e&&t&&l){var n='link[rel="preload"][as="'+Tl(l)+'"]';l==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Tl(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Tl(a.imageSizes)+'"]')):n+='[href="'+Tl(t)+'"]';var u=n;switch(l){case"style":u=qe(t);break;case"script":u=Be(t)}Ul.has(u)||(t=N({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:t,as:l},a),Ul.set(u,t),e.querySelector(n)!==null||l==="style"&&e.querySelector(Un(u))||l==="script"&&e.querySelector(Rn(u))||(l=e.createElement("link"),Wt(l,"link",t),Zt(l),e.head.appendChild(l)))}}function sy(t,l){ra.m(t,l);var a=Ye;if(a&&t){var e=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+Tl(e)+'"][href="'+Tl(t)+'"]',u=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Be(t)}if(!Ul.has(u)&&(t=N({rel:"modulepreload",href:t},l),Ul.set(u,t),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rn(u)))return}e=a.createElement("link"),Wt(e,"link",t),Zt(e),a.head.appendChild(e)}}}function oy(t,l,a){ra.S(t,l,a);var e=Ye;if(e&&t){var n=ue(e).hoistableStyles,u=qe(t);l=l||"default";var i=n.get(u);if(!i){var f={loading:0,preload:null};if(i=e.querySelector(Un(u)))f.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":l},a),(a=Ul.get(u))&&Uf(t,a);var d=i=e.createElement("link");Zt(d),Wt(d,"link",t),d._p=new Promise(function(S,T){d.onload=S,d.onerror=T}),d.addEventListener("load",function(){f.loading|=1}),d.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Iu(i,l,e)}i={type:"stylesheet",instance:i,count:1,state:f},n.set(u,i)}}}function dy(t,l){ra.X(t,l);var a=Ye;if(a&&t){var e=ue(a).hoistableScripts,n=Be(t),u=e.get(n);u||(u=a.querySelector(Rn(n)),u||(t=N({src:t,async:!0},l),(l=Ul.get(n))&&Rf(t,l),u=a.createElement("script"),Zt(u),Wt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function my(t,l){ra.M(t,l);var a=Ye;if(a&&t){var e=ue(a).hoistableScripts,n=Be(t),u=e.get(n);u||(u=a.querySelector(Rn(n)),u||(t=N({src:t,async:!0,type:"module"},l),(l=Ul.get(n))&&Rf(t,l),u=a.createElement("script"),Zt(u),Wt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function J0(t,l,a,e){var n=(n=et.current)?ku(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=qe(a.href),a=ue(n).hoistableStyles,e=a.get(l),e||(e={type:"style",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=qe(a.href);var u=ue(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(Un(t)))&&!u._p&&(i.instance=u,i.state.loading=5),Ul.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ul.set(t,a),u||yy(n,t,a,i.state))),l&&e===null)throw Error(s(528,""));return i}if(l&&e!==null)throw Error(s(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Be(a),a=ue(n).hoistableScripts,e=a.get(l),e||(e={type:"script",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function qe(t){return'href="'+Tl(t)+'"'}function Un(t){return'link[rel="stylesheet"]['+t+"]"}function w0(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function yy(t,l,a,e){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?e.loading=1:(l=t.createElement("link"),e.preload=l,l.addEventListener("load",function(){return e.loading|=1}),l.addEventListener("error",function(){return e.loading|=2}),Wt(l,"link",a),Zt(l),t.head.appendChild(l))}function Be(t){return'[src="'+Tl(t)+'"]'}function Rn(t){return"script[async]"+t}function $0(t,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var e=t.querySelector('style[data-href~="'+Tl(a.href)+'"]');if(e)return l.instance=e,Zt(e),e;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Zt(e),Wt(e,"style",n),Iu(e,a.precedence,t),l.instance=e;case"stylesheet":n=qe(a.href);var u=t.querySelector(Un(n));if(u)return l.state.loading|=4,l.instance=u,Zt(u),u;e=w0(a),(n=Ul.get(n))&&Uf(e,n),u=(t.ownerDocument||t).createElement("link"),Zt(u);var i=u;return i._p=new Promise(function(f,d){i.onload=f,i.onerror=d}),Wt(u,"link",e),l.state.loading|=4,Iu(u,a.precedence,t),l.instance=u;case"script":return u=Be(a.src),(n=t.querySelector(Rn(u)))?(l.instance=n,Zt(n),n):(e=a,(n=Ul.get(u))&&(e=N({},a),Rf(e,n)),t=t.ownerDocument||t,n=t.createElement("script"),Zt(n),Wt(n,"link",e),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(s(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(e=l.instance,l.state.loading|=4,Iu(e,a.precedence,t));return l.instance}function Iu(t,l,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,u=n,i=0;i<e.length;i++){var f=e[i];if(f.dataset.precedence===l)u=f;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(t,l.firstChild))}function Uf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Rf(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Pu=null;function W0(t,l,a){if(Pu===null){var e=new Map,n=Pu=new Map;n.set(a,e)}else n=Pu,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(t))return e;for(e.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var u=a[n];if(!(u[we]||u[Kt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(l)||"";i=t+i;var f=e.get(i);f?f.push(u):e.set(i,[u])}}return e}function F0(t,l,a){t=t.ownerDocument||t,t.head.insertBefore(a,l==="title"?t.querySelector("head > title"):null)}function hy(t,l,a){if(a===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vy(t,l,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=qe(e.href),u=l.querySelector(Un(n));if(u){l=u._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=ti.bind(t),l.then(t,t)),a.state.loading|=4,a.instance=u,Zt(u);return}u=l.ownerDocument||l,e=w0(e),(n=Ul.get(n))&&Uf(e,n),u=u.createElement("link"),Zt(u);var i=u;i._p=new Promise(function(f,d){i.onload=f,i.onerror=d}),Wt(u,"link",e),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ti.bind(t),l.addEventListener("load",a),l.addEventListener("error",a))}}var Cf=0;function gy(t,l){return t.stylesheets&&t.count===0&&ai(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var e=setTimeout(function(){if(t.stylesheets&&ai(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+l);0<t.imgBytes&&Cf===0&&(Cf=62500*k1());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ai(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Cf?50:800)+l);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function ti(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ai(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var li=null;function ai(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,li=new Map,l.forEach(py,t),li=null,ti.call(t))}function py(t,l){if(!(l.state.loading&4)){var a=li.get(t);if(a)var e=a.get(null);else{a=new Map,li.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}n=l.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||e,u===e&&a.set(null,n),a.set(i,n),this.count++,e=ti.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var Cn={$$typeof:J,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Sy(t,l,a,e,n,u,i,f,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.hiddenUpdates=Mi(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function I0(t,l,a,e,n,u,i,f,d,S,T,M){return t=new Sy(t,l,a,i,d,S,T,M,f),l=1,u===!0&&(l|=24),u=hl(3,null,null,l),t.current=u,u.stateNode=t,l=oc(),l.refCount++,t.pooledCache=l,l.refCount++,u.memoizedState={element:e,isDehydrated:a,cache:l},hc(u),t}function P0(t){return t?(t=he,t):he}function td(t,l,a,e,n,u){n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=pa(l),e.payload={element:a},u=u===void 0?null:u,u!==null&&(e.callback=u),a=Sa(t,e,l),a!==null&&(rl(a,t,l),on(a,t,l))}function ld(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<l?a:l}}function Hf(t,l){ld(t,l),(t=t.alternate)&&ld(t,l)}function ad(t){if(t.tag===13||t.tag===31){var l=Za(t,67108864);l!==null&&rl(l,t,67108864),Hf(t,67108864)}}function ed(t){if(t.tag===13||t.tag===31){var l=bl();l=xi(l);var a=Za(t,l);a!==null&&rl(a,t,l),Hf(t,l)}}var ei=!0;function by(t,l,a,e){var n=A.T;A.T=null;var u=q.p;try{q.p=2,jf(t,l,a,e)}finally{q.p=u,A.T=n}}function zy(t,l,a,e){var n=A.T;A.T=null;var u=q.p;try{q.p=8,jf(t,l,a,e)}finally{q.p=u,A.T=n}}function jf(t,l,a,e){if(ei){var n=Yf(e);if(n===null)zf(t,l,e,ni,a),ud(t,e);else if(Ty(n,t,l,a,e))e.stopPropagation();else if(ud(t,e),l&4&&-1<Ey.indexOf(t)){for(;n!==null;){var u=ne(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=qa(u.pendingLanes);if(i!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var d=1<<31-ml(i);f.entanglements[1]|=d,i&=~d}Ql(u),(dt&6)===0&&(Gu=ol()+500,Mn(0))}}break;case 31:case 13:f=Za(u,2),f!==null&&rl(f,u,2),Zu(),Hf(u,2)}if(u=Yf(e),u===null&&zf(t,l,e,ni,a),u===n)break;n=u}n!==null&&e.stopPropagation()}else zf(t,l,e,null,a)}}function Yf(t){return t=qi(t),qf(t)}var ni=null;function qf(t){if(ni=null,t=ee(t),t!==null){var l=b(t);if(l===null)t=null;else{var a=l.tag;if(a===13){if(t=x(l),t!==null)return t;t=null}else if(a===31){if(t=R(l),t!==null)return t;t=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return ni=t,null}function nd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cm()){case or:return 2;case dr:return 8;case wn:case fm:return 32;case mr:return 268435456;default:return 32}default:return 32}}var Bf=!1,Na=null,Ua=null,Ra=null,Hn=new Map,jn=new Map,Ca=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ud(t,l){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Hn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(l.pointerId)}}function Yn(t,l,a,e,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:l,domEventName:a,eventSystemFlags:e,nativeEvent:u,targetContainers:[n]},l!==null&&(l=ne(l),l!==null&&ad(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function Ty(t,l,a,e,n){switch(l){case"focusin":return Na=Yn(Na,t,l,a,e,n),!0;case"dragenter":return Ua=Yn(Ua,t,l,a,e,n),!0;case"mouseover":return Ra=Yn(Ra,t,l,a,e,n),!0;case"pointerover":var u=n.pointerId;return Hn.set(u,Yn(Hn.get(u)||null,t,l,a,e,n)),!0;case"gotpointercapture":return u=n.pointerId,jn.set(u,Yn(jn.get(u)||null,t,l,a,e,n)),!0}return!1}function id(t){var l=ee(t.target);if(l!==null){var a=b(l);if(a!==null){if(l=a.tag,l===13){if(l=x(a),l!==null){t.blockedOn=l,Sr(t.priority,function(){ed(a)});return}}else if(l===31){if(l=R(a),l!==null){t.blockedOn=l,Sr(t.priority,function(){ed(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ui(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var e=new a.constructor(a.type,a);Yi=e,a.target.dispatchEvent(e),Yi=null}else return l=ne(a),l!==null&&ad(l),t.blockedOn=a,!1;l.shift()}return!0}function cd(t,l,a){ui(t)&&a.delete(l)}function Ay(){Bf=!1,Na!==null&&ui(Na)&&(Na=null),Ua!==null&&ui(Ua)&&(Ua=null),Ra!==null&&ui(Ra)&&(Ra=null),Hn.forEach(cd),jn.forEach(cd)}function ii(t,l){t.blockedOn===l&&(t.blockedOn=null,Bf||(Bf=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ay)))}var ci=null;function fd(t){ci!==t&&(ci=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){ci===t&&(ci=null);for(var l=0;l<t.length;l+=3){var a=t[l],e=t[l+1],n=t[l+2];if(typeof e!="function"){if(qf(e||a)===null)continue;break}var u=ne(a);u!==null&&(t.splice(l,3),l-=3,jc(u,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function Xe(t){function l(d){return ii(d,t)}Na!==null&&ii(Na,t),Ua!==null&&ii(Ua,t),Ra!==null&&ii(Ra,t),Hn.forEach(l),jn.forEach(l);for(var a=0;a<Ca.length;a++){var e=Ca[a];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)id(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],u=a[e+1],i=n[el]||null;if(typeof u=="function")i||fd(a);else if(i){var f=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[el]||null)f=i.formAction;else if(qf(n)!==null)continue}else f=i.action;typeof f=="function"?a[e+1]=f:(a.splice(e,3),e-=3),fd(a)}}}function rd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function Xf(t){this._internalRoot=t}fi.prototype.render=Xf.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(s(409));var a=l.current,e=bl();td(a,e,t,l,null,null)},fi.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;td(t.current,2,null,t,null,null),Zu(),l[ae]=null}};function fi(t){this._internalRoot=t}fi.prototype.unstable_scheduleHydration=function(t){if(t){var l=pr();t={blockedOn:null,target:t,priority:l};for(var a=0;a<Ca.length&&l!==0&&l<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&id(t)}};var sd=r.version;if(sd!=="19.2.0")throw Error(s(527,sd,"19.2.0"));q.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(l),t=t!==null?C(t):null,t=t===null?null:t.stateNode,t};var Oy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Le=ri.inject(Oy),dl=ri}catch{}}return Bn.createRoot=function(t,l){if(!h(t))throw Error(s(299));var a=!1,e="",n=go,u=po,i=So;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=I0(t,1,!1,null,null,a,e,null,n,u,i,rd),t[ae]=l.current,bf(t),new Xf(l)},Bn.hydrateRoot=function(t,l,a){if(!h(t))throw Error(s(299));var e=!1,n="",u=go,i=po,f=So,d=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),l=I0(t,1,!0,l,a??null,e,n,d,u,i,f,rd),l.context=P0(null),a=l.current,e=bl(),e=xi(e),n=pa(e),n.callback=null,Sa(a,n,e),a=e,l.current.lanes=a,Je(l,a),Ql(l),t[ae]=l.current,bf(t),new fi(l)},Bn.version="19.2.0",Bn}var zd;function By(){if(zd)return Zf.exports;zd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Zf.exports=qy(),Zf.exports}var Xy=By();function Gy(){const[c,r]=ht.useState(!1),o=()=>{r(!c)};return X.jsxs("nav",{className:"navbar",children:[X.jsx("div",{className:"navbar-logo",children:X.jsx("a",{href:"#hero",children:"AI Innovations"})}),X.jsxs("div",{className:"menu-toggle",onClick:o,children:[X.jsx("span",{}),X.jsx("span",{}),X.jsx("span",{})]}),X.jsxs("ul",{className:`navbar-links ${c?"active":""}`,children:[X.jsx("li",{children:X.jsx("a",{href:"#features",children:"Features"})}),X.jsx("li",{children:X.jsx("a",{href:"#testimonials",children:"Testimonials"})}),X.jsx("li",{children:X.jsx("a",{href:"#contact",children:"Contact"})})]})]})}function Qy(c){if(c.sheet)return c.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===c)return document.styleSheets[r]}function Zy(c){var r=document.createElement("style");return r.setAttribute("data-emotion",c.key),c.nonce!==void 0&&r.setAttribute("nonce",c.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Vy=(function(){function c(o){var s=this;this._insertTag=function(h){var b;s.tags.length===0?s.insertionPoint?b=s.insertionPoint.nextSibling:s.prepend?b=s.container.firstChild:b=s.before:b=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(h,b),s.tags.push(h)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=c.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Zy(this));var h=this.tags[this.tags.length-1];if(this.isSpeedy){var b=Qy(h);try{b.insertRule(s,b.cssRules.length)}catch{}}else h.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var h;return(h=s.parentNode)==null?void 0:h.removeChild(s)}),this.tags=[],this.ctr=0},c})(),It="-ms-",vi="-moz-",mt="-webkit-",Yd="comm",er="rule",nr="decl",Ly="@import",qd="@keyframes",Ky="@layer",Jy=Math.abs,gi=String.fromCharCode,wy=Object.assign;function $y(c,r){return Ft(c,0)^45?(((r<<2^Ft(c,0))<<2^Ft(c,1))<<2^Ft(c,2))<<2^Ft(c,3):0}function Bd(c){return c.trim()}function Wy(c,r){return(c=r.exec(c))?c[0]:c}function yt(c,r,o){return c.replace(r,o)}function kf(c,r){return c.indexOf(r)}function Ft(c,r){return c.charCodeAt(r)|0}function Gn(c,r,o){return c.slice(r,o)}function Zl(c){return c.length}function ur(c){return c.length}function si(c,r){return r.push(c),c}function Fy(c,r){return c.map(r).join("")}var pi=1,Qe=1,Xd=0,sl=0,Gt=0,Ze="";function Si(c,r,o,s,h,b,x){return{value:c,root:r,parent:o,type:s,props:h,children:b,line:pi,column:Qe,length:x,return:""}}function Xn(c,r){return wy(Si("",null,null,"",null,null,0),c,{length:-c.length},r)}function ky(){return Gt}function Iy(){return Gt=sl>0?Ft(Ze,--sl):0,Qe--,Gt===10&&(Qe=1,pi--),Gt}function zl(){return Gt=sl<Xd?Ft(Ze,sl++):0,Qe++,Gt===10&&(Qe=1,pi++),Gt}function Ll(){return Ft(Ze,sl)}function mi(){return sl}function Kn(c,r){return Gn(Ze,c,r)}function Qn(c){switch(c){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gd(c){return pi=Qe=1,Xd=Zl(Ze=c),sl=0,[]}function Qd(c){return Ze="",c}function yi(c){return Bd(Kn(sl-1,If(c===91?c+2:c===40?c+1:c)))}function Py(c){for(;(Gt=Ll())&&Gt<33;)zl();return Qn(c)>2||Qn(Gt)>3?"":" "}function th(c,r){for(;--r&&zl()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return Kn(c,mi()+(r<6&&Ll()==32&&zl()==32))}function If(c){for(;zl();)switch(Gt){case c:return sl;case 34:case 39:c!==34&&c!==39&&If(Gt);break;case 40:c===41&&If(c);break;case 92:zl();break}return sl}function lh(c,r){for(;zl()&&c+Gt!==57;)if(c+Gt===84&&Ll()===47)break;return"/*"+Kn(r,sl-1)+"*"+gi(c===47?c:zl())}function ah(c){for(;!Qn(Ll());)zl();return Kn(c,sl)}function eh(c){return Qd(hi("",null,null,null,[""],c=Gd(c),0,[0],c))}function hi(c,r,o,s,h,b,x,R,_){for(var g=0,C=0,N=x,K=0,P=0,L=0,Y=1,U=1,W=1,F=0,J="",vt=h,H=b,it=s,Q=J;U;)switch(L=F,F=zl()){case 40:if(L!=108&&Ft(Q,N-1)==58){kf(Q+=yt(yi(F),"&","&\f"),"&\f")!=-1&&(W=-1);break}case 34:case 39:case 91:Q+=yi(F);break;case 9:case 10:case 13:case 32:Q+=Py(L);break;case 92:Q+=th(mi()-1,7);continue;case 47:switch(Ll()){case 42:case 47:si(nh(lh(zl(),mi()),r,o),_);break;default:Q+="/"}break;case 123*Y:R[g++]=Zl(Q)*W;case 125*Y:case 59:case 0:switch(F){case 0:case 125:U=0;case 59+C:W==-1&&(Q=yt(Q,/\f/g,"")),P>0&&Zl(Q)-N&&si(P>32?Td(Q+";",s,o,N-1):Td(yt(Q," ","")+";",s,o,N-2),_);break;case 59:Q+=";";default:if(si(it=Ed(Q,r,o,g,C,h,R,J,vt=[],H=[],N),b),F===123)if(C===0)hi(Q,r,it,it,vt,b,N,R,H);else switch(K===99&&Ft(Q,3)===110?100:K){case 100:case 108:case 109:case 115:hi(c,it,it,s&&si(Ed(c,it,it,0,0,h,R,J,h,vt=[],N),H),h,H,N,R,s?vt:H);break;default:hi(Q,it,it,it,[""],H,0,R,H)}}g=C=P=0,Y=W=1,J=Q="",N=x;break;case 58:N=1+Zl(Q),P=L;default:if(Y<1){if(F==123)--Y;else if(F==125&&Y++==0&&Iy()==125)continue}switch(Q+=gi(F),F*Y){case 38:W=C>0?1:(Q+="\f",-1);break;case 44:R[g++]=(Zl(Q)-1)*W,W=1;break;case 64:Ll()===45&&(Q+=yi(zl())),K=Ll(),C=N=Zl(J=Q+=ah(mi())),F++;break;case 45:L===45&&Zl(Q)==2&&(Y=0)}}return b}function Ed(c,r,o,s,h,b,x,R,_,g,C){for(var N=h-1,K=h===0?b:[""],P=ur(K),L=0,Y=0,U=0;L<s;++L)for(var W=0,F=Gn(c,N+1,N=Jy(Y=x[L])),J=c;W<P;++W)(J=Bd(Y>0?K[W]+" "+F:yt(F,/&\f/g,K[W])))&&(_[U++]=J);return Si(c,r,o,h===0?er:R,_,g,C)}function nh(c,r,o){return Si(c,r,o,Yd,gi(ky()),Gn(c,2,-2),0)}function Td(c,r,o,s){return Si(c,r,o,nr,Gn(c,0,s),Gn(c,s+1,-1),s)}function Ge(c,r){for(var o="",s=ur(c),h=0;h<s;h++)o+=r(c[h],h,c,r)||"";return o}function uh(c,r,o,s){switch(c.type){case Ky:if(c.children.length)break;case Ly:case nr:return c.return=c.return||c.value;case Yd:return"";case qd:return c.return=c.value+"{"+Ge(c.children,s)+"}";case er:c.value=c.props.join(",")}return Zl(o=Ge(c.children,s))?c.return=c.value+"{"+o+"}":""}function ih(c){var r=ur(c);return function(o,s,h,b){for(var x="",R=0;R<r;R++)x+=c[R](o,s,h,b)||"";return x}}function ch(c){return function(r){r.root||(r=r.return)&&c(r)}}function fh(c){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=c(o)),r[o]}}var rh=function(r,o,s){for(var h=0,b=0;h=b,b=Ll(),h===38&&b===12&&(o[s]=1),!Qn(b);)zl();return Kn(r,sl)},sh=function(r,o){var s=-1,h=44;do switch(Qn(h)){case 0:h===38&&Ll()===12&&(o[s]=1),r[s]+=rh(sl-1,o,s);break;case 2:r[s]+=yi(h);break;case 4:if(h===44){r[++s]=Ll()===58?"&\f":"",o[s]=r[s].length;break}default:r[s]+=gi(h)}while(h=zl());return r},oh=function(r,o){return Qd(sh(Gd(r),o))},Ad=new WeakMap,dh=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,s=r.parent,h=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!Ad.get(s))&&!h){Ad.set(r,!0);for(var b=[],x=oh(o,b),R=s.props,_=0,g=0;_<x.length;_++)for(var C=0;C<R.length;C++,g++)r.props[g]=b[_]?x[_].replace(/&\f/g,R[C]):R[C]+" "+x[_]}}},mh=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function Zd(c,r){switch($y(c,r)){case 5103:return mt+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+c+vi+c+It+c+c;case 6828:case 4268:return mt+c+It+c+c;case 6165:return mt+c+It+"flex-"+c+c;case 5187:return mt+c+yt(c,/(\w+).+(:[^]+)/,mt+"box-$1$2"+It+"flex-$1$2")+c;case 5443:return mt+c+It+"flex-item-"+yt(c,/flex-|-self/,"")+c;case 4675:return mt+c+It+"flex-line-pack"+yt(c,/align-content|flex-|-self/,"")+c;case 5548:return mt+c+It+yt(c,"shrink","negative")+c;case 5292:return mt+c+It+yt(c,"basis","preferred-size")+c;case 6060:return mt+"box-"+yt(c,"-grow","")+mt+c+It+yt(c,"grow","positive")+c;case 4554:return mt+yt(c,/([^-])(transform)/g,"$1"+mt+"$2")+c;case 6187:return yt(yt(yt(c,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),c,"")+c;case 5495:case 3959:return yt(c,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return yt(yt(c,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+It+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+c+c;case 4095:case 3583:case 4068:case 2532:return yt(c,/(.+)-inline(.+)/,mt+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zl(c)-1-r>6)switch(Ft(c,r+1)){case 109:if(Ft(c,r+4)!==45)break;case 102:return yt(c,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+vi+(Ft(c,r+3)==108?"$3":"$2-$3"))+c;case 115:return~kf(c,"stretch")?Zd(yt(c,"stretch","fill-available"),r)+c:c}break;case 4949:if(Ft(c,r+1)!==115)break;case 6444:switch(Ft(c,Zl(c)-3-(~kf(c,"!important")&&10))){case 107:return yt(c,":",":"+mt)+c;case 101:return yt(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+mt+(Ft(c,14)===45?"inline-":"")+"box$3$1"+mt+"$2$3$1"+It+"$2box$3")+c}break;case 5936:switch(Ft(c,r+11)){case 114:return mt+c+It+yt(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return mt+c+It+yt(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return mt+c+It+yt(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return mt+c+It+c+c}return c}var yh=function(r,o,s,h){if(r.length>-1&&!r.return)switch(r.type){case nr:r.return=Zd(r.value,r.length);break;case qd:return Ge([Xn(r,{value:yt(r.value,"@","@"+mt)})],h);case er:if(r.length)return Fy(r.props,function(b){switch(Wy(b,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ge([Xn(r,{props:[yt(b,/:(read-\w+)/,":"+vi+"$1")]})],h);case"::placeholder":return Ge([Xn(r,{props:[yt(b,/:(plac\w+)/,":"+mt+"input-$1")]}),Xn(r,{props:[yt(b,/:(plac\w+)/,":"+vi+"$1")]}),Xn(r,{props:[yt(b,/:(plac\w+)/,It+"input-$1")]})],h)}return""})}},hh=[yh],vh=function(r){var o=r.key;if(o==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(Y){var U=Y.getAttribute("data-emotion");U.indexOf(" ")!==-1&&(document.head.appendChild(Y),Y.setAttribute("data-s",""))})}var h=r.stylisPlugins||hh,b={},x,R=[];x=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(Y){for(var U=Y.getAttribute("data-emotion").split(" "),W=1;W<U.length;W++)b[U[W]]=!0;R.push(Y)});var _,g=[dh,mh];{var C,N=[uh,ch(function(Y){C.insert(Y)})],K=ih(g.concat(h,N)),P=function(U){return Ge(eh(U),K)};_=function(U,W,F,J){C=F,P(U?U+"{"+W.styles+"}":W.styles),J&&(L.inserted[W.name]=!0)}}var L={key:o,sheet:new Vy({key:o,container:x,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:b,registered:{},insert:_};return L.sheet.hydrate(R),L},Jf={exports:{}},pt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function gh(){if(Od)return pt;Od=1;var c=typeof Symbol=="function"&&Symbol.for,r=c?Symbol.for("react.element"):60103,o=c?Symbol.for("react.portal"):60106,s=c?Symbol.for("react.fragment"):60107,h=c?Symbol.for("react.strict_mode"):60108,b=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,R=c?Symbol.for("react.context"):60110,_=c?Symbol.for("react.async_mode"):60111,g=c?Symbol.for("react.concurrent_mode"):60111,C=c?Symbol.for("react.forward_ref"):60112,N=c?Symbol.for("react.suspense"):60113,K=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,L=c?Symbol.for("react.lazy"):60116,Y=c?Symbol.for("react.block"):60121,U=c?Symbol.for("react.fundamental"):60117,W=c?Symbol.for("react.responder"):60118,F=c?Symbol.for("react.scope"):60119;function J(H){if(typeof H=="object"&&H!==null){var it=H.$$typeof;switch(it){case r:switch(H=H.type,H){case _:case g:case s:case b:case h:case N:return H;default:switch(H=H&&H.$$typeof,H){case R:case C:case L:case P:case x:return H;default:return it}}case o:return it}}}function vt(H){return J(H)===g}return pt.AsyncMode=_,pt.ConcurrentMode=g,pt.ContextConsumer=R,pt.ContextProvider=x,pt.Element=r,pt.ForwardRef=C,pt.Fragment=s,pt.Lazy=L,pt.Memo=P,pt.Portal=o,pt.Profiler=b,pt.StrictMode=h,pt.Suspense=N,pt.isAsyncMode=function(H){return vt(H)||J(H)===_},pt.isConcurrentMode=vt,pt.isContextConsumer=function(H){return J(H)===R},pt.isContextProvider=function(H){return J(H)===x},pt.isElement=function(H){return typeof H=="object"&&H!==null&&H.$$typeof===r},pt.isForwardRef=function(H){return J(H)===C},pt.isFragment=function(H){return J(H)===s},pt.isLazy=function(H){return J(H)===L},pt.isMemo=function(H){return J(H)===P},pt.isPortal=function(H){return J(H)===o},pt.isProfiler=function(H){return J(H)===b},pt.isStrictMode=function(H){return J(H)===h},pt.isSuspense=function(H){return J(H)===N},pt.isValidElementType=function(H){return typeof H=="string"||typeof H=="function"||H===s||H===g||H===b||H===h||H===N||H===K||typeof H=="object"&&H!==null&&(H.$$typeof===L||H.$$typeof===P||H.$$typeof===x||H.$$typeof===R||H.$$typeof===C||H.$$typeof===U||H.$$typeof===W||H.$$typeof===F||H.$$typeof===Y)},pt.typeOf=J,pt}var _d;function ph(){return _d||(_d=1,Jf.exports=gh()),Jf.exports}var wf,Md;function Sh(){if(Md)return wf;Md=1;var c=ph(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b={};b[c.ForwardRef]=s,b[c.Memo]=h;function x(L){return c.isMemo(L)?h:b[L.$$typeof]||r}var R=Object.defineProperty,_=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,C=Object.getOwnPropertyDescriptor,N=Object.getPrototypeOf,K=Object.prototype;function P(L,Y,U){if(typeof Y!="string"){if(K){var W=N(Y);W&&W!==K&&P(L,W,U)}var F=_(Y);g&&(F=F.concat(g(Y)));for(var J=x(L),vt=x(Y),H=0;H<F.length;++H){var it=F[H];if(!o[it]&&!(U&&U[it])&&!(vt&&vt[it])&&!(J&&J[it])){var Q=C(Y,it);try{R(L,it,Q)}catch{}}}}return L}return wf=P,wf}Sh();var bh=!0;function Vd(c,r,o){var s="";return o.split(" ").forEach(function(h){c[h]!==void 0?r.push(c[h]+";"):h&&(s+=h+" ")}),s}var ir=function(r,o,s){var h=r.key+"-"+o.name;(s===!1||bh===!1)&&r.registered[h]===void 0&&(r.registered[h]=o.styles)},Ld=function(r,o,s){ir(r,o,s);var h=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var b=o;do r.insert(o===b?"."+h:"",b,r.sheet,!0),b=b.next;while(b!==void 0)}};function zh(c){for(var r=0,o,s=0,h=c.length;h>=4;++s,h-=4)o=c.charCodeAt(s)&255|(c.charCodeAt(++s)&255)<<8|(c.charCodeAt(++s)&255)<<16|(c.charCodeAt(++s)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(h){case 3:r^=(c.charCodeAt(s+2)&255)<<16;case 2:r^=(c.charCodeAt(s+1)&255)<<8;case 1:r^=c.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Eh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Th=/[A-Z]|^ms/g,Ah=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Kd=function(r){return r.charCodeAt(1)===45},xd=function(r){return r!=null&&typeof r!="boolean"},$f=fh(function(c){return Kd(c)?c:c.replace(Th,"-$&").toLowerCase()}),Dd=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(Ah,function(s,h,b){return Vl={name:h,styles:b,next:Vl},h})}return Eh[r]!==1&&!Kd(r)&&typeof o=="number"&&o!==0?o+"px":o};function Zn(c,r,o){if(o==null)return"";var s=o;if(s.__emotion_styles!==void 0)return s;switch(typeof o){case"boolean":return"";case"object":{var h=o;if(h.anim===1)return Vl={name:h.name,styles:h.styles,next:Vl},h.name;var b=o;if(b.styles!==void 0){var x=b.next;if(x!==void 0)for(;x!==void 0;)Vl={name:x.name,styles:x.styles,next:Vl},x=x.next;var R=b.styles+";";return R}return Oh(c,r,o)}case"function":{if(c!==void 0){var _=Vl,g=o(c);return Vl=_,Zn(c,r,g)}break}}var C=o;if(r==null)return C;var N=r[C];return N!==void 0?N:C}function Oh(c,r,o){var s="";if(Array.isArray(o))for(var h=0;h<o.length;h++)s+=Zn(c,r,o[h])+";";else for(var b in o){var x=o[b];if(typeof x!="object"){var R=x;r!=null&&r[R]!==void 0?s+=b+"{"+r[R]+"}":xd(R)&&(s+=$f(b)+":"+Dd(b,R)+";")}else if(Array.isArray(x)&&typeof x[0]=="string"&&(r==null||r[x[0]]===void 0))for(var _=0;_<x.length;_++)xd(x[_])&&(s+=$f(b)+":"+Dd(b,x[_])+";");else{var g=Zn(c,r,x);switch(b){case"animation":case"animationName":{s+=$f(b)+":"+g+";";break}default:s+=b+"{"+g+"}"}}}return s}var Nd=/label:\s*([^\s;{]+)\s*(;|$)/g,Vl;function cr(c,r,o){if(c.length===1&&typeof c[0]=="object"&&c[0]!==null&&c[0].styles!==void 0)return c[0];var s=!0,h="";Vl=void 0;var b=c[0];if(b==null||b.raw===void 0)s=!1,h+=Zn(o,r,b);else{var x=b;h+=x[0]}for(var R=1;R<c.length;R++)if(h+=Zn(o,r,c[R]),s){var _=b;h+=_[R]}Nd.lastIndex=0;for(var g="",C;(C=Nd.exec(h))!==null;)g+="-"+C[1];var N=zh(h)+g;return{name:N,styles:h,next:Vl}}var _h=function(r){return r()},Mh=hd.useInsertionEffect?hd.useInsertionEffect:!1,Jd=Mh||_h,wd=ht.createContext(typeof HTMLElement<"u"?vh({key:"css"}):null);wd.Provider;var $d=function(r){return ht.forwardRef(function(o,s){var h=ht.useContext(wd);return r(o,h,s)})},Wd=ht.createContext({}),bi={}.hasOwnProperty,Pf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Fd=function(r,o){var s={};for(var h in o)bi.call(o,h)&&(s[h]=o[h]);return s[Pf]=r,s},xh=function(r){var o=r.cache,s=r.serialized,h=r.isStringTag;return ir(o,s,h),Jd(function(){return Ld(o,s,h)}),null},Dh=$d(function(c,r,o){var s=c.css;typeof s=="string"&&r.registered[s]!==void 0&&(s=r.registered[s]);var h=c[Pf],b=[s],x="";typeof c.className=="string"?x=Vd(r.registered,b,c.className):c.className!=null&&(x=c.className+" ");var R=cr(b,void 0,ht.useContext(Wd));x+=r.key+"-"+R.name;var _={};for(var g in c)bi.call(c,g)&&g!=="css"&&g!==Pf&&(_[g]=c[g]);return _.className=x,o&&(_.ref=o),ht.createElement(ht.Fragment,null,ht.createElement(xh,{cache:r,serialized:R,isStringTag:typeof h=="string"}),ht.createElement(h,_))}),kd=Dh,Nh=X.Fragment,Lt=function(r,o,s){return bi.call(o,"css")?X.jsx(kd,Fd(r,o),s):X.jsx(r,o,s)},Ud=function(r,o){var s=arguments;if(o==null||!bi.call(o,"css"))return ht.createElement.apply(void 0,s);var h=s.length,b=new Array(h);b[0]=kd,b[1]=Fd(r,o);for(var x=2;x<h;x++)b[x]=s[x];return ht.createElement.apply(null,b)};(function(c){var r;r||(r=c.JSX||(c.JSX={}))})(Ud||(Ud={}));function Id(){for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return cr(r)}function j(){var c=Id.apply(void 0,arguments),r="animation-"+c.name;return{name:r,styles:"@keyframes "+r+"{"+c.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Uh=function c(r){for(var o=r.length,s=0,h="";s<o;s++){var b=r[s];if(b!=null){var x=void 0;switch(typeof b){case"boolean":break;case"object":{if(Array.isArray(b))x=c(b);else{x="";for(var R in b)b[R]&&R&&(x&&(x+=" "),x+=R)}break}default:x=b}x&&(h&&(h+=" "),h+=x)}}return h};function Rh(c,r,o){var s=[],h=Vd(c,s,o);return s.length<2?o:h+r(s)}var Ch=function(r){var o=r.cache,s=r.serializedArr;return Jd(function(){for(var h=0;h<s.length;h++)Ld(o,s[h],!1)}),null},Wf=$d(function(c,r){var o=[],s=function(){for(var _=arguments.length,g=new Array(_),C=0;C<_;C++)g[C]=arguments[C];var N=cr(g,r.registered);return o.push(N),ir(r,N,!1),r.key+"-"+N.name},h=function(){for(var _=arguments.length,g=new Array(_),C=0;C<_;C++)g[C]=arguments[C];return Rh(r.registered,s,Uh(g))},b={css:s,cx:h,theme:ht.useContext(Wd)},x=c.children(b);return ht.createElement(ht.Fragment,null,ht.createElement(Ch,{cache:r,serializedArr:o}),x)}),Hh=Object.defineProperty,jh=(c,r,o)=>r in c?Hh(c,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[r]=o,oi=(c,r,o)=>jh(c,typeof r!="symbol"?r+"":r,o),tr=new Map,di=new WeakMap,Rd=0,Yh=void 0;function qh(c){return c?(di.has(c)||(Rd+=1,di.set(c,Rd.toString())),di.get(c)):"0"}function Bh(c){return Object.keys(c).sort().filter(r=>c[r]!==void 0).map(r=>`${r}_${r==="root"?qh(c.root):c[r]}`).toString()}function Xh(c){const r=Bh(c);let o=tr.get(r);if(!o){const s=new Map;let h;const b=new IntersectionObserver(x=>{x.forEach(R=>{var _;const g=R.isIntersecting&&h.some(C=>R.intersectionRatio>=C);c.trackVisibility&&typeof R.isVisible>"u"&&(R.isVisible=g),(_=s.get(R.target))==null||_.forEach(C=>{C(g,R)})})},c);h=b.thresholds||(Array.isArray(c.threshold)?c.threshold:[c.threshold||0]),o={id:r,observer:b,elements:s},tr.set(r,o)}return o}function Pd(c,r,o={},s=Yh){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const _=c.getBoundingClientRect();return r(s,{isIntersecting:s,target:c,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:_,intersectionRect:_,rootBounds:_}),()=>{}}const{id:h,observer:b,elements:x}=Xh(o),R=x.get(c)||[];return x.has(c)||x.set(c,R),R.push(r),b.observe(c),function(){R.splice(R.indexOf(r),1),R.length===0&&(x.delete(c),b.unobserve(c)),x.size===0&&(b.disconnect(),tr.delete(h))}}function Gh(c){return typeof c.children!="function"}var Cd=class extends ht.Component{constructor(c){super(c),oi(this,"node",null),oi(this,"_unobserveCb",null),oi(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),oi(this,"handleChange",(r,o)=>{r&&this.props.triggerOnce&&this.unobserve(),Gh(this.props)||this.setState({inView:r,entry:o}),this.props.onChange&&this.props.onChange(r,o)}),this.state={inView:!!c.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(c){(c.rootMargin!==this.props.rootMargin||c.root!==this.props.root||c.threshold!==this.props.threshold||c.skip!==this.props.skip||c.trackVisibility!==this.props.trackVisibility||c.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:c,root:r,rootMargin:o,trackVisibility:s,delay:h,fallbackInView:b}=this.props;this._unobserveCb=Pd(this.node,this.handleChange,{threshold:c,root:r,rootMargin:o,trackVisibility:s,delay:h},b)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:c}=this.props;if(typeof c=="function"){const{inView:P,entry:L}=this.state;return c({inView:P,entry:L,ref:this.handleNode})}const{as:r,triggerOnce:o,threshold:s,root:h,rootMargin:b,onChange:x,skip:R,trackVisibility:_,delay:g,initialInView:C,fallbackInView:N,...K}=this.props;return ht.createElement(r||"div",{ref:this.handleNode,...K},c)}};function tm({threshold:c,delay:r,trackVisibility:o,rootMargin:s,root:h,triggerOnce:b,skip:x,initialInView:R,fallbackInView:_,onChange:g}={}){var C;const[N,K]=ht.useState(null),P=ht.useRef(g),[L,Y]=ht.useState({inView:!!R,entry:void 0});P.current=g,ht.useEffect(()=>{if(x||!N)return;let J;return J=Pd(N,(vt,H)=>{Y({inView:vt,entry:H}),P.current&&P.current(vt,H),H.isIntersecting&&b&&J&&(J(),J=void 0)},{root:h,rootMargin:s,threshold:c,trackVisibility:o,delay:r},_),()=>{J&&J()}},[Array.isArray(c)?c.toString():c,N,h,s,b,x,o,_,r]);const U=(C=L.entry)==null?void 0:C.target,W=ht.useRef(void 0);!N&&U&&!b&&!x&&W.current!==U&&(W.current=U,Y({inView:!!R,entry:void 0}));const F=[K,L.inView,L.entry];return F.ref=F[0],F.inView=F[1],F.entry=F[2],F}var Ff={exports:{}},St={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Qh(){if(Hd)return St;Hd=1;var c=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),R=Symbol.for("react.server_context"),_=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),L;L=Symbol.for("react.module.reference");function Y(U){if(typeof U=="object"&&U!==null){var W=U.$$typeof;switch(W){case c:switch(U=U.type,U){case o:case h:case s:case g:case C:return U;default:switch(U=U&&U.$$typeof,U){case R:case x:case _:case K:case N:case b:return U;default:return W}}case r:return W}}}return St.ContextConsumer=x,St.ContextProvider=b,St.Element=c,St.ForwardRef=_,St.Fragment=o,St.Lazy=K,St.Memo=N,St.Portal=r,St.Profiler=h,St.StrictMode=s,St.Suspense=g,St.SuspenseList=C,St.isAsyncMode=function(){return!1},St.isConcurrentMode=function(){return!1},St.isContextConsumer=function(U){return Y(U)===x},St.isContextProvider=function(U){return Y(U)===b},St.isElement=function(U){return typeof U=="object"&&U!==null&&U.$$typeof===c},St.isForwardRef=function(U){return Y(U)===_},St.isFragment=function(U){return Y(U)===o},St.isLazy=function(U){return Y(U)===K},St.isMemo=function(U){return Y(U)===N},St.isPortal=function(U){return Y(U)===r},St.isProfiler=function(U){return Y(U)===h},St.isStrictMode=function(U){return Y(U)===s},St.isSuspense=function(U){return Y(U)===g},St.isSuspenseList=function(U){return Y(U)===C},St.isValidElementType=function(U){return typeof U=="string"||typeof U=="function"||U===o||U===h||U===s||U===g||U===C||U===P||typeof U=="object"&&U!==null&&(U.$$typeof===K||U.$$typeof===N||U.$$typeof===b||U.$$typeof===x||U.$$typeof===_||U.$$typeof===L||U.getModuleId!==void 0)},St.typeOf=Y,St}var jd;function Zh(){return jd||(jd=1,Ff.exports=Qh()),Ff.exports}var Vh=Zh();j`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;j`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;j`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;j`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;j`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;j`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;j`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Lh=j`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Kh=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jh=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wh=j`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$h=j`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fr=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wh=j`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fh=j`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kh=j`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ih=j`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ph=j`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tv=j`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lv=j`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function av({duration:c=1e3,delay:r=0,timingFunction:o="ease",keyframes:s=fr,iterationCount:h=1}){return Id`
    animation-duration: ${c}ms;
    animation-timing-function: ${o};
    animation-delay: ${r}ms;
    animation-name: ${s};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${h};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ev(c){return c==null}function nv(c){return typeof c=="string"||typeof c=="number"||typeof c=="boolean"}function lm(c,r){return o=>o?c():r()}function Vn(c){return lm(c,()=>null)}function lr(c){return Vn(()=>({opacity:0}))(c)}const am=c=>{const{cascade:r=!1,damping:o=.5,delay:s=0,duration:h=1e3,fraction:b=0,keyframes:x=fr,triggerOnce:R=!1,className:_,style:g,childClassName:C,childStyle:N,children:K,onVisibilityChange:P}=c,L=ht.useMemo(()=>av({keyframes:x,duration:h}),[h,x]);return ev(K)?null:nv(K)?Lt(iv,{...c,animationStyles:L,children:String(K)}):Vh.isFragment(K)?Lt(em,{...c,animationStyles:L}):Lt(Nh,{children:ht.Children.map(K,(Y,U)=>{if(!ht.isValidElement(Y))return null;const W=s+(r?U*h*o:0);switch(Y.type){case"ol":case"ul":return Lt(Wf,{children:({cx:F})=>Lt(Y.type,{...Y.props,className:F(_,Y.props.className),style:Object.assign({},g,Y.props.style),children:Lt(am,{...c,children:Y.props.children})})});case"li":return Lt(Cd,{threshold:b,triggerOnce:R,onChange:P,children:({inView:F,ref:J})=>Lt(Wf,{children:({cx:vt})=>Lt(Y.type,{...Y.props,ref:J,className:vt(C,Y.props.className),css:Vn(()=>L)(F),style:Object.assign({},N,Y.props.style,lr(!F),{animationDelay:W+"ms"})})})});default:return Lt(Cd,{threshold:b,triggerOnce:R,onChange:P,children:({inView:F,ref:J})=>Lt("div",{ref:J,className:_,css:Vn(()=>L)(F),style:Object.assign({},g,lr(!F),{animationDelay:W+"ms"}),children:Lt(Wf,{children:({cx:vt})=>Lt(Y.type,{...Y.props,className:vt(C,Y.props.className),style:Object.assign({},N,Y.props.style)})})})})}})})},uv={display:"inline-block",whiteSpace:"pre"},iv=c=>{const{animationStyles:r,cascade:o=!1,damping:s=.5,delay:h=0,duration:b=1e3,fraction:x=0,triggerOnce:R=!1,className:_,style:g,children:C,onVisibilityChange:N}=c,{ref:K,inView:P}=tm({triggerOnce:R,threshold:x,onChange:N});return lm(()=>Lt("div",{ref:K,className:_,style:Object.assign({},g,uv),children:C.split("").map((L,Y)=>Lt("span",{css:Vn(()=>r)(P),style:{animationDelay:h+Y*b*s+"ms"},children:L},Y))}),()=>Lt(em,{...c,children:C}))(o)},em=c=>{const{animationStyles:r,fraction:o=0,triggerOnce:s=!1,className:h,style:b,children:x,onVisibilityChange:R}=c,{ref:_,inView:g}=tm({triggerOnce:s,threshold:o,onChange:R});return Lt("div",{ref:_,className:h,css:Vn(()=>r)(g),style:Object.assign({},b,lr(!g)),children:x})};j`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;j`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;j`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;j`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;j`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const cv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,fv=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,rv=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,sv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ov=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,dv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,mv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,yv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,hv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,vv=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,gv=j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,pv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Sv=j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function bv(c,r,o){switch(o){case"bottom-left":return r?fv:Kh;case"bottom-right":return r?rv:Jh;case"down":return c?r?ov:$h:r?sv:wh;case"left":return c?r?mv:Wh:r?dv:fr;case"right":return c?r?hv:kh:r?yv:Fh;case"top-left":return r?vv:Ih;case"top-right":return r?gv:Ph;case"up":return c?r?Sv:lv:r?pv:tv;default:return r?cv:Lh}}const Ln=c=>{const{big:r=!1,direction:o,reverse:s=!1,...h}=c,b=ht.useMemo(()=>bv(r,s,o),[r,o,s]);return Lt(am,{keyframes:b,...h})};j`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;j`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;j`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;j`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;j`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;j`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;j`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;j`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function zv(){return X.jsx(Ln,{duration:1500,delay:300,children:X.jsxs("div",{className:"hero-container",children:[X.jsx("h1",{children:"Leading the Future of AI Software"}),X.jsx("p",{children:"Revolutionizing industries with intelligent and innovative solutions."}),X.jsx("button",{children:"Learn More"})]})})}const Ev=[{icon:"🤖",title:"Intelligent Automation",description:"Streamline workflows and boost productivity with our smart automation tools."},{icon:"🧠",title:"Predictive Analytics",description:"Leverage the power of AI to forecast trends and make smarter business decisions."}];function Tv(){return X.jsx(Ln,{duration:1500,delay:300,children:X.jsxs("div",{className:"features-container",children:[X.jsx("h2",{children:"Our Cutting-Edge Features"}),X.jsx("div",{className:"feature-cards",children:Ev.map((c,r)=>X.jsxs("div",{className:"feature-card",children:[X.jsxs("h3",{children:[c.icon," ",c.title]}),X.jsx("p",{children:c.description})]},r))})]})})}function Av(){return X.jsxs("div",{className:"testimonials-container",children:[X.jsx("h2",{children:"What Our Clients Say"}),X.jsxs("div",{className:"testimonial-cards",children:[X.jsx(Ln,{duration:1200,delay:200,children:X.jsxs("div",{className:"testimonial-card",children:[X.jsx("p",{children:"'The best AI software on the market. It transformed our workflow and saved us countless hours.'"}),X.jsx("p",{className:"client-name",children:"- Alex M., Tech Solutions Inc."})]})}),X.jsx(Ln,{duration:1200,delay:400,children:X.jsxs("div",{className:"testimonial-card",children:[X.jsx("p",{children:'"Incredible support and a product that exceeded all our expectations. A true game-changer."'}),X.jsx("p",{className:"client-name",children:"- Sarah L., Data Innovations"})]})})]})]})}function Ov({duration:c=1500,delay:r=300}){const[o,s]=ht.useState(!1),h=b=>{b.preventDefault(),s(!0)};return X.jsx(Ln,{duration:c,delay:r,children:X.jsxs("div",{className:"contact-container",children:[X.jsx("h2",{children:"Contact Us"}),X.jsx("p",{children:"Ready to revolutionize your business? Let's talk."}),X.jsxs("form",{className:"contact-form",onSubmit:h,children:[X.jsx("input",{type:"text",name:"honeypot",style:{display:"none"}}),X.jsx("label",{htmlFor:"name",children:"Name"}),X.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",required:!0}),X.jsx("label",{htmlFor:"email",children:"Email"}),X.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",required:!0}),X.jsx("label",{htmlFor:"message",children:"Message"}),X.jsx("textarea",{id:"message",name:"message",placeholder:"Your Message",required:!0}),X.jsx("input",{type:"text",name:"honeypot",style:{display:"none"},tabIndex:"-1",autoComplete:"off"}),X.jsx("button",{type:"submit",children:o?"Message Sent!":"Send Message"})]})]})})}function _v(){return X.jsxs("footer",{className:"footer-container",children:[X.jsx("p",{children:"© 2025 InterVallum Ai LLC. All Rights Reserved."}),X.jsxs("div",{className:"social-links",children:[X.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),X.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]})}function Mv(){return X.jsxs("div",{className:"App",children:[X.jsx(Gy,{}),X.jsx("section",{id:"hero",children:X.jsx(zv,{})}),X.jsx("section",{id:"features",children:X.jsx(Tv,{})}),X.jsx("section",{id:"testimonials",children:X.jsx(Av,{})}),X.jsx("section",{id:"contact",children:X.jsx(Ov,{})}),X.jsx(_v,{})]})}Xy.createRoot(document.getElementById("root")).render(X.jsx(ht.StrictMode,{children:X.jsx(Mv,{})}));
