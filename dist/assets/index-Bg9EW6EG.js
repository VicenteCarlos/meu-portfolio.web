function zm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Um={exports:{}},Za={},Hm={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var os=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),G1=Symbol.for("react.fragment"),K1=Symbol.for("react.strict_mode"),Y1=Symbol.for("react.profiler"),X1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),J1=Symbol.for("react.suspense"),ex=Symbol.for("react.memo"),tx=Symbol.for("react.lazy"),Ff=Symbol.iterator;function nx(e){return e===null||typeof e!="object"?null:(e=Ff&&e[Ff]||e["@@iterator"],typeof e=="function"?e:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Gm={};function Bo(e,t,n){this.props=e,this.context=t,this.refs=Gm,this.updater=n||Wm}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Km(){}Km.prototype=Bo.prototype;function qc(e,t,n){this.props=e,this.context=t,this.refs=Gm,this.updater=n||Wm}var Jc=qc.prototype=new Km;Jc.constructor=qc;Qm(Jc,Bo.prototype);Jc.isPureReactComponent=!0;var Nf=Array.isArray,Ym=Object.prototype.hasOwnProperty,ed={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function Zm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Ym.call(t,r)&&!Xm.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:os,type:e,key:i,ref:s,props:o,_owner:ed.current}}function rx(e,t){return{$$typeof:os,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function td(e){return typeof e=="object"&&e!==null&&e.$$typeof===os}function ox(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bf=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ox(""+e.key):t.toString(36)}function Qs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case os:case Q1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Vl(s,0):r,Nf(o)?(n="",e!=null&&(n=e.replace(Bf,"$&/")+"/"),Qs(o,t,n,"",function(u){return u})):o!=null&&(td(o)&&(o=rx(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Bf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Nf(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Vl(i,a);s+=Qs(i,t,n,l,o)}else if(l=nx(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Vl(i,a++),s+=Qs(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ws(e,t,n){if(e==null)return e;var r=[],o=0;return Qs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ix(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},Gs={transition:null},sx={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:ed};pe.Children={map:ws,forEach:function(e,t,n){ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ws(e,function(){t++}),t},toArray:function(e){return ws(e,function(t){return t})||[]},only:function(e){if(!td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Bo;pe.Fragment=G1;pe.Profiler=Y1;pe.PureComponent=qc;pe.StrictMode=K1;pe.Suspense=J1;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ed.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ym.call(t,l)&&!Xm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:os,type:e.type,key:o,ref:i,props:r,_owner:s}};pe.createContext=function(e){return e={$$typeof:Z1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X1,_context:e},e.Consumer=e};pe.createElement=Zm;pe.createFactory=function(e){var t=Zm.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:q1,render:e}};pe.isValidElement=td;pe.lazy=function(e){return{$$typeof:tx,_payload:{_status:-1,_result:e},_init:ix}};pe.memo=function(e,t){return{$$typeof:ex,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Gs.transition;Gs.transition={};try{e()}finally{Gs.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return pt.current.useCallback(e,t)};pe.useContext=function(e){return pt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return pt.current.useEffect(e,t)};pe.useId=function(){return pt.current.useId()};pe.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return pt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};pe.useRef=function(e){return pt.current.useRef(e)};pe.useState=function(e){return pt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return pt.current.useTransition()};pe.version="18.2.0";Hm.exports=pe;var w=Hm.exports;const C=Zc(w),ax=zm({__proto__:null,default:C},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=w,ux=Symbol.for("react.element"),cx=Symbol.for("react.fragment"),dx=Object.prototype.hasOwnProperty,fx=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,px={key:!0,ref:!0,__self:!0,__source:!0};function qm(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)dx.call(t,r)&&!px.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ux,type:e,key:i,ref:s,props:o,_owner:fx.current}}Za.Fragment=cx;Za.jsx=qm;Za.jsxs=qm;Um.exports=Za;var M=Um.exports,Tu={},Jm={exports:{}},Dt={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,V){var B=D.length;D.push(V);e:for(;0<B;){var F=B-1>>>1,Z=D[F];if(0<o(Z,V))D[F]=V,D[B]=Z,B=F;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],B=D.pop();if(B!==V){D[0]=B;e:for(var F=0,Z=D.length,Y=Z>>>1;F<Y;){var U=2*(F+1)-1,oe=D[U],Q=U+1,ie=D[Q];if(0>o(oe,B))Q<Z&&0>o(ie,oe)?(D[F]=ie,D[Q]=B,F=Q):(D[F]=oe,D[U]=B,F=U);else if(Q<Z&&0>o(ie,B))D[F]=ie,D[Q]=B,F=Q;else break e}}return V}function o(D,V){var B=D.sortIndex-V.sortIndex;return B!==0?B:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function k(D){if(y=!1,m(D),!v)if(n(l)!==null)v=!0,ae(A);else{var V=n(u);V!==null&&q(k,V.startTime-D)}}function A(D,V){v=!1,y&&(y=!1,h(P),P=-1),g=!0;var B=f;try{for(m(V),d=n(l);d!==null&&(!(d.expirationTime>V)||D&&!G());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var Z=F(d.expirationTime<=V);V=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),m(V)}else r(l);d=n(l)}if(d!==null)var Y=!0;else{var U=n(u);U!==null&&q(k,U.startTime-V),Y=!1}return Y}finally{d=null,f=B,g=!1}}var x=!1,b=null,P=-1,L=5,_=-1;function G(){return!(e.unstable_now()-_<L)}function K(){if(b!==null){var D=e.unstable_now();_=D;var V=!0;try{V=b(!0,D)}finally{V?re():(x=!1,b=null)}}else x=!1}var re;if(typeof p=="function")re=function(){p(K)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,he=te.port2;te.port1.onmessage=K,re=function(){he.postMessage(null)}}else re=function(){S(K,0)};function ae(D){b=D,x||(x=!0,re())}function q(D,V){P=S(function(){D(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ae(A))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var B=f;f=V;try{return D()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return V()}finally{f=B}},e.unstable_scheduleCallback=function(D,V,B){var F=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?F+B:F):B=F,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,D={id:c++,callback:V,priorityLevel:D,startTime:B,expirationTime:Z,sortIndex:-1},B>F?(D.sortIndex=B,t(u,D),n(l)===null&&D===n(u)&&(y?(h(P),P=-1):y=!0,q(k,B-F))):(D.sortIndex=Z,t(l,D),v||g||(v=!0,ae(A))),D},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(D){var V=f;return function(){var B=f;f=V;try{return D.apply(this,arguments)}finally{f=B}}}})(tg);eg.exports=tg;var hx=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=w,Pt=hx;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,Li={};function Br(e,t){Co(e,t),Co(e+"Capture",t)}function Co(e,t){for(Li[e]=t,e=0;e<t.length;e++)rg.add(t[e])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zf={},Uf={};function gx(e){return Pu.call(Uf,e)?!0:Pu.call(zf,e)?!1:mx.test(e)?Uf[e]=!0:(zf[e]=!0,!1)}function vx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yx(e,t,n,r){if(t===null||typeof t>"u"||vx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nd,rd);it[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nd,rd);it[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nd,rd);it[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function od(e,t,n,r){var o=it.hasOwnProperty(t)?it[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yx(t,n,o,r)&&(n=null),r||o===null?gx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ig=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function Xo(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Ol;function di(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var _l=!1;function Fl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function xx(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Lu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case qr:return"Portal";case Ru:return"Profiler";case id:return"StrictMode";case Du:return"Suspense";case $u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ig:return(e.displayName||"Context")+".Consumer";case og:return(e._context.displayName||"Context")+".Provider";case sd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ad:return t=e.displayName||null,t!==null?t:Lu(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return Lu(e(t))}catch{}}return null}function wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(t);case 8:return t===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ag(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sx(e){var t=ag(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ks(e){e._valueTracker||(e._valueTracker=Sx(e))}function lg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ag(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mu(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ug(e,t){t=t.checked,t!=null&&od(e,"checked",t,!1)}function Iu(e,t){ug(e,t);var n=rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&ju(e,t.type,rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ju(e,t,n){(t!=="number"||fa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function xo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(fi(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rr(n)}}function cg(e,t){var n=rr(t.value),r=rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,fg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){kx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function pg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function hg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bx=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(e,t){if(t){if(bx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Fu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bu=null,wo=null,So=null;function Yf(e){if(e=as(e)){if(typeof Bu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=nl(t),Bu(e.stateNode,e.type,t))}}function mg(e){wo?So?So.push(e):So=[e]:wo=e}function gg(){if(wo){var e=wo,t=So;if(So=wo=null,Yf(e),t)for(e=0;e<t.length;e++)Yf(t[e])}}function vg(e,t){return e(t)}function yg(){}var Nl=!1;function xg(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return vg(e,t,n)}finally{Nl=!1,(wo!==null||So!==null)&&(yg(),gg())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var zu=!1;if(Cn)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{zu=!1}function Ex(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var yi=!1,pa=null,ha=!1,Uu=null,Ax={onError:function(e){yi=!0,pa=e}};function Cx(e,t,n,r,o,i,s,a,l){yi=!1,pa=null,Ex.apply(Ax,arguments)}function Tx(e,t,n,r,o,i,s,a,l){if(Cx.apply(this,arguments),yi){if(yi){var u=pa;yi=!1,pa=null}else throw Error(j(198));ha||(ha=!0,Uu=u)}}function zr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xf(e){if(zr(e)!==e)throw Error(j(188))}function Px(e){var t=e.alternate;if(!t){if(t=zr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Xf(o),e;if(i===r)return Xf(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Sg(e){return e=Px(e),e!==null?kg(e):null}function kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kg(e);if(t!==null)return t;e=e.sibling}return null}var bg=Pt.unstable_scheduleCallback,Zf=Pt.unstable_cancelCallback,Rx=Pt.unstable_shouldYield,Dx=Pt.unstable_requestPaint,Be=Pt.unstable_now,$x=Pt.unstable_getCurrentPriorityLevel,ud=Pt.unstable_ImmediatePriority,Eg=Pt.unstable_UserBlockingPriority,ma=Pt.unstable_NormalPriority,Lx=Pt.unstable_LowPriority,Ag=Pt.unstable_IdlePriority,qa=null,sn=null;function Mx(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Vx,Ix=Math.log,jx=Math.LN2;function Vx(e){return e>>>=0,e===0?32:31-(Ix(e)/jx|0)|0}var Es=64,As=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=pi(a):(i&=s,i!==0&&(r=pi(i)))}else s=n&~o,s!==0?r=pi(s):i!==0&&(r=pi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Kt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ox(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _x(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Kt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=Ox(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cg(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function is(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=n}function Fx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Kt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function cd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Kt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xe=0;function Tg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,dd,Rg,Dg,$g,Wu=!1,Cs=[],Gn=null,Kn=null,Yn=null,ji=new Map,Vi=new Map,Un=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function qo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=as(t),t!==null&&dd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bx(e,t,n,r,o){switch(t){case"focusin":return Gn=qo(Gn,e,t,n,r,o),!0;case"dragenter":return Kn=qo(Kn,e,t,n,r,o),!0;case"mouseover":return Yn=qo(Yn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ji.set(i,qo(ji.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vi.set(i,qo(Vi.get(i)||null,e,t,n,r,o)),!0}return!1}function Lg(e){var t=wr(e.target);if(t!==null){var n=zr(t);if(n!==null){if(t=n.tag,t===13){if(t=wg(n),t!==null){e.blockedOn=t,$g(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nu=r,n.target.dispatchEvent(r),Nu=null}else return t=as(n),t!==null&&dd(t),e.blockedOn=n,!1;t.shift()}return!0}function Jf(e,t,n){Ks(e)&&n.delete(t)}function zx(){Wu=!1,Gn!==null&&Ks(Gn)&&(Gn=null),Kn!==null&&Ks(Kn)&&(Kn=null),Yn!==null&&Ks(Yn)&&(Yn=null),ji.forEach(Jf),Vi.forEach(Jf)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,zx)))}function Oi(e){function t(o){return Jo(o,e)}if(0<Cs.length){Jo(Cs[0],e);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gn!==null&&Jo(Gn,e),Kn!==null&&Jo(Kn,e),Yn!==null&&Jo(Yn,e),ji.forEach(t),Vi.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Lg(n),n.blockedOn===null&&Un.shift()}var ko=$n.ReactCurrentBatchConfig,va=!0;function Ux(e,t,n,r){var o=xe,i=ko.transition;ko.transition=null;try{xe=1,fd(e,t,n,r)}finally{xe=o,ko.transition=i}}function Hx(e,t,n,r){var o=xe,i=ko.transition;ko.transition=null;try{xe=4,fd(e,t,n,r)}finally{xe=o,ko.transition=i}}function fd(e,t,n,r){if(va){var o=Qu(e,t,n,r);if(o===null)Zl(e,t,r,ya,n),qf(e,r);else if(Bx(o,e,t,n,r))r.stopPropagation();else if(qf(e,r),t&4&&-1<Nx.indexOf(e)){for(;o!==null;){var i=as(o);if(i!==null&&Pg(i),i=Qu(e,t,n,r),i===null&&Zl(e,t,r,ya,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var ya=null;function Qu(e,t,n,r){if(ya=null,e=ld(r),e=wr(e),e!==null)if(t=zr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function Mg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($x()){case ud:return 1;case Eg:return 4;case ma:case Lx:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var Wn=null,pd=null,Ys=null;function Ig(){if(Ys)return Ys;var e,t=pd,n=t.length,r,o="value"in Wn?Wn.value:Wn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ys=o.slice(e,1<r?1-r:void 0)}function Xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function ep(){return!1}function $t(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ts:ep,this.isPropagationStopped=ep,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=$t(zo),ss=Me({},zo,{view:0,detail:0}),Wx=$t(ss),zl,Ul,ei,Ja=Me({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(zl=e.screenX-ei.screenX,Ul=e.screenY-ei.screenY):Ul=zl=0,ei=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),tp=$t(Ja),Qx=Me({},Ja,{dataTransfer:0}),Gx=$t(Qx),Kx=Me({},ss,{relatedTarget:0}),Hl=$t(Kx),Yx=Me({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=$t(Yx),Zx=Me({},zo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qx=$t(Zx),Jx=Me({},zo,{data:0}),np=$t(Jx),ew={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nw[e])?!!t[e]:!1}function md(){return rw}var ow=Me({},ss,{key:function(e){if(e.key){var t=ew[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(e){return e.type==="keypress"?Xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iw=$t(ow),sw=Me({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=$t(sw),aw=Me({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),lw=$t(aw),uw=Me({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=$t(uw),dw=Me({},Ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=$t(dw),pw=[9,13,27,32],gd=Cn&&"CompositionEvent"in window,xi=null;Cn&&"documentMode"in document&&(xi=document.documentMode);var hw=Cn&&"TextEvent"in window&&!xi,jg=Cn&&(!gd||xi&&8<xi&&11>=xi),op=" ",ip=!1;function Vg(e,t){switch(e){case"keyup":return pw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var eo=!1;function mw(e,t){switch(e){case"compositionend":return Og(t);case"keypress":return t.which!==32?null:(ip=!0,op);case"textInput":return e=t.data,e===op&&ip?null:e;default:return null}}function gw(e,t){if(eo)return e==="compositionend"||!gd&&Vg(e,t)?(e=Ig(),Ys=pd=Wn=null,eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jg&&t.locale!=="ko"?null:t.data;default:return null}}var vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vw[e.type]:t==="textarea"}function _g(e,t,n,r){mg(r),t=xa(t,"onChange"),0<t.length&&(n=new hd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,_i=null;function yw(e){Yg(e,0)}function el(e){var t=ro(e);if(lg(t))return e}function xw(e,t){if(e==="change")return t}var Fg=!1;if(Cn){var Wl;if(Cn){var Ql="oninput"in document;if(!Ql){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Ql=typeof ap.oninput=="function"}Wl=Ql}else Wl=!1;Fg=Wl&&(!document.documentMode||9<document.documentMode)}function lp(){wi&&(wi.detachEvent("onpropertychange",Ng),_i=wi=null)}function Ng(e){if(e.propertyName==="value"&&el(_i)){var t=[];_g(t,_i,e,ld(e)),xg(yw,t)}}function ww(e,t,n){e==="focusin"?(lp(),wi=t,_i=n,wi.attachEvent("onpropertychange",Ng)):e==="focusout"&&lp()}function Sw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(_i)}function kw(e,t){if(e==="click")return el(t)}function bw(e,t){if(e==="input"||e==="change")return el(t)}function Ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:Ew;function Fi(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Pu.call(t,o)||!Zt(e[o],t[o]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,t){var n=up(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function Bg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zg(){for(var e=window,t=fa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fa(e.document)}return t}function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Aw(e){var t=zg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bg(n.ownerDocument.documentElement,n)){if(r!==null&&vd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cp(n,i);var s=cp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cw=Cn&&"documentMode"in document&&11>=document.documentMode,to=null,Gu=null,Si=null,Ku=!1;function dp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||to==null||to!==fa(r)||(r=to,"selectionStart"in r&&vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Fi(Si,r)||(Si=r,r=xa(Gu,"onSelect"),0<r.length&&(t=new hd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=to)))}function Ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var no={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Gl={},Ug={};Cn&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function tl(e){if(Gl[e])return Gl[e];if(!no[e])return e;var t=no[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ug)return Gl[e]=t[n];return e}var Hg=tl("animationend"),Wg=tl("animationiteration"),Qg=tl("animationstart"),Gg=tl("transitionend"),Kg=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Kg.set(e,t),Br(t,[e])}for(var Kl=0;Kl<fp.length;Kl++){var Yl=fp[Kl],Tw=Yl.toLowerCase(),Pw=Yl[0].toUpperCase()+Yl.slice(1);ur(Tw,"on"+Pw)}ur(Hg,"onAnimationEnd");ur(Wg,"onAnimationIteration");ur(Qg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Gg,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function pp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tx(r,t,void 0,e),e.currentTarget=null}function Yg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;pp(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;pp(o,a,u),i=l}}}if(ha)throw e=Uu,ha=!1,Uu=null,e}function Ae(e,t){var n=t[Ju];n===void 0&&(n=t[Ju]=new Set);var r=e+"__bubble";n.has(r)||(Xg(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Xg(n,e,r,t)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Rs]){e[Rs]=!0,rg.forEach(function(n){n!=="selectionchange"&&(Rw.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rs]||(t[Rs]=!0,Xl("selectionchange",!1,t))}}function Xg(e,t,n,r){switch(Mg(t)){case 1:var o=Ux;break;case 4:o=Hx;break;default:o=fd}n=o.bind(null,t,n,e),o=void 0,!zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=wr(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}xg(function(){var u=i,c=ld(n),d=[];e:{var f=Kg.get(e);if(f!==void 0){var g=hd,v=e;switch(e){case"keypress":if(Xs(n)===0)break e;case"keydown":case"keyup":g=iw;break;case"focusin":v="focus",g=Hl;break;case"focusout":v="blur",g=Hl;break;case"beforeblur":case"afterblur":g=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lw;break;case Hg:case Wg:case Qg:g=Xx;break;case Gg:g=cw;break;case"scroll":g=Wx;break;case"wheel":g=fw;break;case"copy":case"cut":case"paste":g=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rp}var y=(t&4)!==0,S=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,m;p!==null;){m=p;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,h!==null&&(k=Ii(p,h),k!=null&&y.push(Bi(p,k,m)))),S)break;p=p.return}0<y.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Nu&&(v=n.relatedTarget||n.fromElement)&&(wr(v)||v[Tn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?wr(v):null,v!==null&&(S=zr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=tp,k="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=rp,k="onPointerLeave",h="onPointerEnter",p="pointer"),S=g==null?f:ro(g),m=v==null?f:ro(v),f=new y(k,p+"leave",g,n,c),f.target=S,f.relatedTarget=m,k=null,wr(c)===u&&(y=new y(h,p+"enter",v,n,c),y.target=m,y.relatedTarget=S,k=y),S=k,g&&v)t:{for(y=g,h=v,p=0,m=y;m;m=Yr(m))p++;for(m=0,k=h;k;k=Yr(k))m++;for(;0<p-m;)y=Yr(y),p--;for(;0<m-p;)h=Yr(h),m--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=Yr(y),h=Yr(h)}y=null}else y=null;g!==null&&hp(d,f,g,y,!1),v!==null&&S!==null&&hp(d,S,v,y,!0)}}e:{if(f=u?ro(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var A=xw;else if(sp(f))if(Fg)A=bw;else{A=Sw;var x=ww}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=kw);if(A&&(A=A(e,u))){_g(d,A,n,c);break e}x&&x(e,f,u),e==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&ju(f,"number",f.value)}switch(x=u?ro(u):window,e){case"focusin":(sp(x)||x.contentEditable==="true")&&(to=x,Gu=u,Si=null);break;case"focusout":Si=Gu=to=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,dp(d,n,c);break;case"selectionchange":if(Cw)break;case"keydown":case"keyup":dp(d,n,c)}var b;if(gd)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else eo?Vg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jg&&n.locale!=="ko"&&(eo||P!=="onCompositionStart"?P==="onCompositionEnd"&&eo&&(b=Ig()):(Wn=c,pd="value"in Wn?Wn.value:Wn.textContent,eo=!0)),x=xa(u,P),0<x.length&&(P=new np(P,e,null,n,c),d.push({event:P,listeners:x}),b?P.data=b:(b=Og(n),b!==null&&(P.data=b)))),(b=hw?mw(e,n):gw(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(c=new np("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Yg(d,t)})}function Bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ii(e,n),i!=null&&r.unshift(Bi(e,i,o)),i=Ii(e,t),i!=null&&r.push(Bi(e,i,o))),e=e.return}return r}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Ii(n,i),l!=null&&s.unshift(Bi(n,l,a))):o||(l=Ii(n,i),l!=null&&s.push(Bi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dw=/\r\n?/g,$w=/\u0000|\uFFFD/g;function mp(e){return(typeof e=="string"?e:""+e).replace(Dw,`
`).replace($w,"")}function Ds(e,t,n){if(t=mp(t),mp(e)!==t&&n)throw Error(j(425))}function wa(){}var Yu=null,Xu=null;function Zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Mw=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(Iw)}:qu;function Iw(e){setTimeout(function(){throw e})}function ql(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Oi(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),on="__reactFiber$"+Uo,zi="__reactProps$"+Uo,Tn="__reactContainer$"+Uo,Ju="__reactEvents$"+Uo,jw="__reactListeners$"+Uo,Vw="__reactHandles$"+Uo;function wr(e){var t=e[on];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tn]||n[on]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vp(e);e!==null;){if(n=e[on])return n;e=vp(e)}return t}e=n,n=e.parentNode}return null}function as(e){return e=e[on]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ro(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function nl(e){return e[zi]||null}var ec=[],oo=-1;function cr(e){return{current:e}}function Te(e){0>oo||(e.current=ec[oo],ec[oo]=null,oo--)}function Ee(e,t){oo++,ec[oo]=e.current,e.current=t}var or={},ct=cr(or),xt=cr(!1),Mr=or;function To(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function wt(e){return e=e.childContextTypes,e!=null}function Sa(){Te(xt),Te(ct)}function yp(e,t,n){if(ct.current!==or)throw Error(j(168));Ee(ct,t),Ee(xt,n)}function Zg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,wx(e)||"Unknown",o));return Me({},n,r)}function ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Mr=ct.current,Ee(ct,e),Ee(xt,xt.current),!0}function xp(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Zg(e,t,Mr),r.__reactInternalMemoizedMergedChildContext=e,Te(xt),Te(ct),Ee(ct,e)):Te(xt),Ee(xt,n)}var yn=null,rl=!1,Jl=!1;function qg(e){yn===null?yn=[e]:yn.push(e)}function Ow(e){rl=!0,qg(e)}function dr(){if(!Jl&&yn!==null){Jl=!0;var e=0,t=xe;try{var n=yn;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,rl=!1}catch(o){throw yn!==null&&(yn=yn.slice(e+1)),bg(ud,dr),o}finally{xe=t,Jl=!1}}return null}var io=[],so=0,ba=null,Ea=0,jt=[],Vt=0,Ir=null,xn=1,wn="";function gr(e,t){io[so++]=Ea,io[so++]=ba,ba=e,Ea=t}function Jg(e,t,n){jt[Vt++]=xn,jt[Vt++]=wn,jt[Vt++]=Ir,Ir=e;var r=xn;e=wn;var o=32-Kt(r)-1;r&=~(1<<o),n+=1;var i=32-Kt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,xn=1<<32-Kt(t)+o|n<<o|r,wn=i+e}else xn=1<<i|n<<o|r,wn=e}function yd(e){e.return!==null&&(gr(e,1),Jg(e,1,0))}function xd(e){for(;e===ba;)ba=io[--so],io[so]=null,Ea=io[--so],io[so]=null;for(;e===Ir;)Ir=jt[--Vt],jt[Vt]=null,wn=jt[--Vt],jt[Vt]=null,xn=jt[--Vt],jt[Vt]=null}var Tt=null,Ct=null,Pe=!1,Gt=null;function ev(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Ct=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:xn,overflow:wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Ct=null,!0):!1;default:return!1}}function tc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nc(e){if(Pe){var t=Ct;if(t){var n=t;if(!wp(e,t)){if(tc(e))throw Error(j(418));t=Xn(n.nextSibling);var r=Tt;t&&wp(e,t)?ev(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Tt=e)}}else{if(tc(e))throw Error(j(418));e.flags=e.flags&-4097|2,Pe=!1,Tt=e}}}function Sp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function $s(e){if(e!==Tt)return!1;if(!Pe)return Sp(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zu(e.type,e.memoizedProps)),t&&(t=Ct)){if(tc(e))throw tv(),Error(j(418));for(;t;)ev(e,t),t=Xn(t.nextSibling)}if(Sp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=Xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Tt?Xn(e.stateNode.nextSibling):null;return!0}function tv(){for(var e=Ct;e;)e=Xn(e.nextSibling)}function Po(){Ct=Tt=null,Pe=!1}function wd(e){Gt===null?Gt=[e]:Gt.push(e)}var _w=$n.ReactCurrentBatchConfig;function Ht(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Aa=cr(null),Ca=null,ao=null,Sd=null;function kd(){Sd=ao=Ca=null}function bd(e){var t=Aa.current;Te(Aa),e._currentValue=t}function rc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bo(e,t){Ca=e,Sd=ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(Sd!==e)if(e={context:e,memoizedValue:t,next:null},ao===null){if(Ca===null)throw Error(j(308));ao=e,Ca.dependencies={lanes:0,firstContext:e}}else ao=ao.next=e;return t}var Sr=null;function Ed(e){Sr===null?Sr=[e]:Sr.push(e)}function nv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ed(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pn(e,n)}return o=r.interleaved,o===null?(t.next=t,Ed(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pn(e,n)}function Zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cd(e,n)}}function kp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ta(e,t,n,r){var o=e.updateQueue;Bn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,c=u=l=null,a=i;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(f=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=Me({},d,f);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vr|=s,e.lanes=s,e.memoizedState=d}}function bp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var ov=new ng.Component().refs;function oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?zr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Jn(e),i=kn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zn(e,i,o),t!==null&&(Yt(t,e,o,r),Zs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Jn(e),i=kn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zn(e,i,o),t!==null&&(Yt(t,e,o,r),Zs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=Jn(e),o=kn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zn(e,o,r),t!==null&&(Yt(t,e,r,n),Zs(t,e,r))}};function Ep(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(o,i):!0}function iv(e,t,n){var r=!1,o=or,i=t.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(o=wt(t)?Mr:ct.current,r=t.contextTypes,i=(r=r!=null)?To(e,o):or),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ap(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function ic(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ov,Ad(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ft(i):(i=wt(t)?Mr:ct.current,o.context=To(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ta(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===ov&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ls(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cp(e){var t=e._init;return t(e._payload)}function sv(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=er(h,p),h.index=0,h.sibling=null,h}function i(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,k){return p===null||p.tag!==6?(p=su(m,h.mode,k),p.return=h,p):(p=o(p,m),p.return=h,p)}function l(h,p,m,k){var A=m.type;return A===Jr?c(h,p,m.props.children,k,m.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Nn&&Cp(A)===p.type)?(k=o(p,m.props),k.ref=ti(h,p,m),k.return=h,k):(k=ra(m.type,m.key,m.props,null,h.mode,k),k.ref=ti(h,p,m),k.return=h,k)}function u(h,p,m,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=au(m,h.mode,k),p.return=h,p):(p=o(p,m.children||[]),p.return=h,p)}function c(h,p,m,k,A){return p===null||p.tag!==7?(p=Rr(m,h.mode,k,A),p.return=h,p):(p=o(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=su(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ss:return m=ra(p.type,p.key,p.props,null,h.mode,m),m.ref=ti(h,null,p),m.return=h,m;case qr:return p=au(p,h.mode,m),p.return=h,p;case Nn:var k=p._init;return d(h,k(p._payload),m)}if(fi(p)||Xo(p))return p=Rr(p,h.mode,m,null),p.return=h,p;Ls(h,p)}return null}function f(h,p,m,k){var A=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(h,p,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:return m.key===A?l(h,p,m,k):null;case qr:return m.key===A?u(h,p,m,k):null;case Nn:return A=m._init,f(h,p,A(m._payload),k)}if(fi(m)||Xo(m))return A!==null?null:c(h,p,m,k,null);Ls(h,m)}return null}function g(h,p,m,k,A){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(m)||null,a(p,h,""+k,A);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ss:return h=h.get(k.key===null?m:k.key)||null,l(p,h,k,A);case qr:return h=h.get(k.key===null?m:k.key)||null,u(p,h,k,A);case Nn:var x=k._init;return g(h,p,m,x(k._payload),A)}if(fi(k)||Xo(k))return h=h.get(m)||null,c(p,h,k,A,null);Ls(p,k)}return null}function v(h,p,m,k){for(var A=null,x=null,b=p,P=p=0,L=null;b!==null&&P<m.length;P++){b.index>P?(L=b,b=null):L=b.sibling;var _=f(h,b,m[P],k);if(_===null){b===null&&(b=L);break}e&&b&&_.alternate===null&&t(h,b),p=i(_,p,P),x===null?A=_:x.sibling=_,x=_,b=L}if(P===m.length)return n(h,b),Pe&&gr(h,P),A;if(b===null){for(;P<m.length;P++)b=d(h,m[P],k),b!==null&&(p=i(b,p,P),x===null?A=b:x.sibling=b,x=b);return Pe&&gr(h,P),A}for(b=r(h,b);P<m.length;P++)L=g(b,h,P,m[P],k),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?P:L.key),p=i(L,p,P),x===null?A=L:x.sibling=L,x=L);return e&&b.forEach(function(G){return t(h,G)}),Pe&&gr(h,P),A}function y(h,p,m,k){var A=Xo(m);if(typeof A!="function")throw Error(j(150));if(m=A.call(m),m==null)throw Error(j(151));for(var x=A=null,b=p,P=p=0,L=null,_=m.next();b!==null&&!_.done;P++,_=m.next()){b.index>P?(L=b,b=null):L=b.sibling;var G=f(h,b,_.value,k);if(G===null){b===null&&(b=L);break}e&&b&&G.alternate===null&&t(h,b),p=i(G,p,P),x===null?A=G:x.sibling=G,x=G,b=L}if(_.done)return n(h,b),Pe&&gr(h,P),A;if(b===null){for(;!_.done;P++,_=m.next())_=d(h,_.value,k),_!==null&&(p=i(_,p,P),x===null?A=_:x.sibling=_,x=_);return Pe&&gr(h,P),A}for(b=r(h,b);!_.done;P++,_=m.next())_=g(b,h,P,_.value,k),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?P:_.key),p=i(_,p,P),x===null?A=_:x.sibling=_,x=_);return e&&b.forEach(function(K){return t(h,K)}),Pe&&gr(h,P),A}function S(h,p,m,k){if(typeof m=="object"&&m!==null&&m.type===Jr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:e:{for(var A=m.key,x=p;x!==null;){if(x.key===A){if(A=m.type,A===Jr){if(x.tag===7){n(h,x.sibling),p=o(x,m.props.children),p.return=h,h=p;break e}}else if(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Nn&&Cp(A)===x.type){n(h,x.sibling),p=o(x,m.props),p.ref=ti(h,x,m),p.return=h,h=p;break e}n(h,x);break}else t(h,x);x=x.sibling}m.type===Jr?(p=Rr(m.props.children,h.mode,k,m.key),p.return=h,h=p):(k=ra(m.type,m.key,m.props,null,h.mode,k),k.ref=ti(h,p,m),k.return=h,h=k)}return s(h);case qr:e:{for(x=m.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=o(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=au(m,h.mode,k),p.return=h,h=p}return s(h);case Nn:return x=m._init,S(h,p,x(m._payload),k)}if(fi(m))return v(h,p,m,k);if(Xo(m))return y(h,p,m,k);Ls(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,m),p.return=h,h=p):(n(h,p),p=su(m,h.mode,k),p.return=h,h=p),s(h)):n(h,p)}return S}var Ro=sv(!0),av=sv(!1),ls={},an=cr(ls),Ui=cr(ls),Hi=cr(ls);function kr(e){if(e===ls)throw Error(j(174));return e}function Cd(e,t){switch(Ee(Hi,t),Ee(Ui,e),Ee(an,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ou(t,e)}Te(an),Ee(an,t)}function Do(){Te(an),Te(Ui),Te(Hi)}function lv(e){kr(Hi.current);var t=kr(an.current),n=Ou(t,e.type);t!==n&&(Ee(Ui,e),Ee(an,n))}function Td(e){Ui.current===e&&(Te(an),Te(Ui))}var Re=cr(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eu=[];function Pd(){for(var e=0;e<eu.length;e++)eu[e]._workInProgressVersionPrimary=null;eu.length=0}var qs=$n.ReactCurrentDispatcher,tu=$n.ReactCurrentBatchConfig,jr=0,Le=null,Qe=null,Xe=null,Ra=!1,ki=!1,Wi=0,Fw=0;function st(){throw Error(j(321))}function Rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function Dd(e,t,n,r,o,i){if(jr=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?Uw:Hw,e=n(r,o),ki){i=0;do{if(ki=!1,Wi=0,25<=i)throw Error(j(301));i+=1,Xe=Qe=null,t.updateQueue=null,qs.current=Ww,e=n(r,o)}while(ki)}if(qs.current=Da,t=Qe!==null&&Qe.next!==null,jr=0,Xe=Qe=Le=null,Ra=!1,t)throw Error(j(300));return e}function $d(){var e=Wi!==0;return Wi=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Le.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Nt(){if(Qe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Xe===null?Le.memoizedState:Xe.next;if(t!==null)Xe=t,Qe=e;else{if(e===null)throw Error(j(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Xe===null?Le.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Qi(e,t){return typeof t=="function"?t(e):t}function nu(e){var t=Nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Qe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Le.lanes|=c,Vr|=c}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,Zt(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,Vr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ru(e){var t=Nt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Zt(i,t.memoizedState)||(yt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function uv(){}function cv(e,t){var n=Le,r=Nt(),o=t(),i=!Zt(r.memoizedState,o);if(i&&(r.memoizedState=o,yt=!0),r=r.queue,Ld(pv.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Gi(9,fv.bind(null,n,r,o,t),void 0,null),Je===null)throw Error(j(349));jr&30||dv(n,t,o)}return o}function dv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fv(e,t,n,r){t.value=n,t.getSnapshot=r,hv(t)&&mv(e)}function pv(e,t,n){return n(function(){hv(t)&&mv(e)})}function hv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function mv(e){var t=Pn(e,1);t!==null&&Yt(t,e,1,-1)}function Tp(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=zw.bind(null,Le,e),[t.memoizedState,e]}function Gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gv(){return Nt().memoizedState}function Js(e,t,n,r){var o=nn();Le.flags|=e,o.memoizedState=Gi(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var o=Nt();r=r===void 0?null:r;var i=void 0;if(Qe!==null){var s=Qe.memoizedState;if(i=s.destroy,r!==null&&Rd(r,s.deps)){o.memoizedState=Gi(t,n,i,r);return}}Le.flags|=e,o.memoizedState=Gi(1|t,n,i,r)}function Pp(e,t){return Js(8390656,8,e,t)}function Ld(e,t){return il(2048,8,e,t)}function vv(e,t){return il(4,2,e,t)}function yv(e,t){return il(4,4,e,t)}function xv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wv(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,xv.bind(null,t,e),n)}function Md(){}function Sv(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kv(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bv(e,t,n){return jr&21?(Zt(n,t)||(n=Cg(),Le.lanes|=n,Vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function Nw(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=tu.transition;tu.transition={};try{e(!1),t()}finally{xe=n,tu.transition=r}}function Ev(){return Nt().memoizedState}function Bw(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(e))Cv(t,n);else if(n=nv(e,t,n,r),n!==null){var o=ft();Yt(n,e,r,o),Tv(n,t,r)}}function zw(e,t,n){var r=Jn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(e))Cv(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Zt(a,s)){var l=t.interleaved;l===null?(o.next=o,Ed(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=nv(e,t,o,r),n!==null&&(o=ft(),Yt(n,e,r,o),Tv(n,t,r))}}function Av(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Cv(e,t){ki=Ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cd(e,n)}}var Da={readContext:Ft,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Uw={readContext:Ft,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Pp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Js(4194308,4,xv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Js(4194308,4,e,t)},useInsertionEffect:function(e,t){return Js(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bw.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Tp,useDebugValue:Md,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Tp(!1),t=e[0];return e=Nw.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=nn();if(Pe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Je===null)throw Error(j(349));jr&30||dv(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Pp(pv.bind(null,r,i,e),[e]),r.flags|=2048,Gi(9,fv.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nn(),t=Je.identifierPrefix;if(Pe){var n=wn,r=xn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hw={readContext:Ft,useCallback:Sv,useContext:Ft,useEffect:Ld,useImperativeHandle:wv,useInsertionEffect:vv,useLayoutEffect:yv,useMemo:kv,useReducer:nu,useRef:gv,useState:function(){return nu(Qi)},useDebugValue:Md,useDeferredValue:function(e){var t=Nt();return bv(t,Qe.memoizedState,e)},useTransition:function(){var e=nu(Qi)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:cv,useId:Ev,unstable_isNewReconciler:!1},Ww={readContext:Ft,useCallback:Sv,useContext:Ft,useEffect:Ld,useImperativeHandle:wv,useInsertionEffect:vv,useLayoutEffect:yv,useMemo:kv,useReducer:ru,useRef:gv,useState:function(){return ru(Qi)},useDebugValue:Md,useDeferredValue:function(e){var t=Nt();return Qe===null?t.memoizedState=e:bv(t,Qe.memoizedState,e)},useTransition:function(){var e=ru(Qi)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:cv,useId:Ev,unstable_isNewReconciler:!1};function $o(e,t){try{var n="",r=t;do n+=xx(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ou(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qw=typeof WeakMap=="function"?WeakMap:Map;function Pv(e,t,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){La||(La=!0,gc=r),sc(e,t)},n}function Rv(e,t,n){n=kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){sc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sc(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Rp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sS.bind(null,e,t,n),t.then(e,e))}function Dp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $p(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kn(-1,1),t.tag=2,Zn(n,t,1))),n.lanes|=1),e)}var Gw=$n.ReactCurrentOwner,yt=!1;function dt(e,t,n,r){t.child=e===null?av(t,null,n,r):Ro(t,e.child,n,r)}function Lp(e,t,n,r,o){n=n.render;var i=t.ref;return bo(t,o),r=Dd(e,t,n,r,i,o),n=$d(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rn(e,t,o)):(Pe&&n&&yd(t),t.flags|=1,dt(e,t,r,o),t.child)}function Mp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Bd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Dv(e,t,i,r,o)):(e=ra(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,r)&&e.ref===t.ref)return Rn(e,t,o)}return t.flags|=1,e=er(i,r),e.ref=t.ref,e.return=t,t.child=e}function Dv(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fi(i,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Rn(e,t,o)}return ac(e,t,n,r,o)}function $v(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(uo,At),At|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(uo,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(uo,At),At|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ee(uo,At),At|=r;return dt(e,t,o,n),t.child}function Lv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ac(e,t,n,r,o){var i=wt(n)?Mr:ct.current;return i=To(t,i),bo(t,o),n=Dd(e,t,n,r,i,o),r=$d(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rn(e,t,o)):(Pe&&r&&yd(t),t.flags|=1,dt(e,t,n,o),t.child)}function Ip(e,t,n,r,o){if(wt(n)){var i=!0;ka(t)}else i=!1;if(bo(t,o),t.stateNode===null)ea(e,t),iv(t,n,r),ic(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=wt(n)?Mr:ct.current,u=To(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ap(t,s,r,u),Bn=!1;var f=t.memoizedState;s.state=f,Ta(t,r,s,o),l=t.memoizedState,a!==r||f!==l||xt.current||Bn?(typeof c=="function"&&(oc(t,n,c,r),l=t.memoizedState),(a=Bn||Ep(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,rv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ht(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=wt(n)?Mr:ct.current,l=To(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ap(t,s,r,l),Bn=!1,f=t.memoizedState,s.state=f,Ta(t,r,s,o);var v=t.memoizedState;a!==d||f!==v||xt.current||Bn?(typeof g=="function"&&(oc(t,n,g,r),v=t.memoizedState),(u=Bn||Ep(t,n,u,r,f,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return lc(e,t,n,r,i,o)}function lc(e,t,n,r,o,i){Lv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&xp(t,n,!1),Rn(e,t,i);r=t.stateNode,Gw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ro(t,e.child,null,i),t.child=Ro(t,null,a,i)):dt(e,t,a,i),t.memoizedState=r.state,o&&xp(t,n,!0),t.child}function Mv(e){var t=e.stateNode;t.pendingContext?yp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yp(e,t.context,!1),Cd(e,t.containerInfo)}function jp(e,t,n,r,o){return Po(),wd(o),t.flags|=256,dt(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iv(e,t,n){var r=t.pendingProps,o=Re.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ee(Re,o&1),e===null)return nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ll(s,r,0,null),e=Rr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=cc(n),t.memoizedState=uc,e):Id(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Kw(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=er(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=er(a,i):(i=Rr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?cc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return i=e.child,e=i.sibling,r=er(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Id(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ms(e,t,n,r){return r!==null&&wd(r),Ro(t,e.child,null,n),e=Id(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kw(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=ou(Error(j(422))),Ms(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ll({mode:"visible",children:r.children},o,0,null),i=Rr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ro(t,e.child,null,s),t.child.memoizedState=cc(s),t.memoizedState=uc,i);if(!(t.mode&1))return Ms(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=ou(i,r,void 0),Ms(e,t,s,r)}if(a=(s&e.childLanes)!==0,yt||a){if(r=Je,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Pn(e,o),Yt(r,e,o,-1))}return Nd(),r=ou(Error(j(421))),Ms(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=aS.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ct=Xn(o.nextSibling),Tt=t,Pe=!0,Gt=null,e!==null&&(jt[Vt++]=xn,jt[Vt++]=wn,jt[Vt++]=Ir,xn=e.id,wn=e.overflow,Ir=t),t=Id(t,r.children),t.flags|=4096,t)}function Vp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rc(e.return,t,n)}function iu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function jv(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(dt(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vp(e,n,t);else if(e.tag===19)Vp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),iu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}iu(t,!0,n,null,i);break;case"together":iu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yw(e,t,n){switch(t.tag){case 3:Mv(t),Po();break;case 5:lv(t);break;case 1:wt(t.type)&&ka(t);break;case 4:Cd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ee(Aa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?Iv(e,t,n):(Ee(Re,Re.current&1),e=Rn(e,t,n),e!==null?e.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jv(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,$v(e,t,n)}return Rn(e,t,n)}var Vv,dc,Ov,_v;Vv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dc=function(){};Ov=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kr(an.current);var i=null;switch(n){case"input":o=Mu(e,o),r=Mu(e,r),i=[];break;case"select":o=Me({},o,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":o=Vu(e,o),r=Vu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wa)}_u(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ae("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};_v=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xw(e,t,n){var r=t.pendingProps;switch(xd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return wt(t.type)&&Sa(),at(t),null;case 3:return r=t.stateNode,Do(),Te(xt),Te(ct),Pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(xc(Gt),Gt=null))),dc(e,t),at(t),null;case 5:Td(t);var o=kr(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ov(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return at(t),null}if(e=kr(an.current),$s(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[on]=t,r[zi]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(o=0;o<hi.length;o++)Ae(hi[o],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Wf(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":Gf(r,i),Ae("invalid",r)}_u(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ds(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ds(r.textContent,a,e),o=["children",""+a]):Li.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ks(r),Qf(r,i,!0);break;case"textarea":ks(r),Kf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[on]=t,e[zi]=r,Vv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fu(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),o=r;break;case"iframe":case"object":case"embed":Ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<hi.length;o++)Ae(hi[o],e);o=r;break;case"source":Ae("error",e),o=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),o=r;break;case"details":Ae("toggle",e),o=r;break;case"input":Wf(e,r),o=Mu(e,r),Ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Me({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Gf(e,r),o=Vu(e,r),Ae("invalid",e);break;default:o=r}_u(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?hg(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mi(e,l):typeof l=="number"&&Mi(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Li.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ae("scroll",e):l!=null&&od(e,i,l,s))}switch(n){case"input":ks(e),Qf(e,r,!1);break;case"textarea":ks(e),Kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xo(e,!!r.multiple,i,!1):r.defaultValue!=null&&xo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)_v(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=kr(Hi.current),kr(an.current),$s(t)){if(r=t.stateNode,n=t.memoizedProps,r[on]=t,(i=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:Ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ds(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=t,t.stateNode=r}return at(t),null;case 13:if(Te(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Ct!==null&&t.mode&1&&!(t.flags&128))tv(),Po(),t.flags|=98560,i=!1;else if(i=$s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[on]=t}else Po(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),i=!1}else Gt!==null&&(xc(Gt),Gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ge===0&&(Ge=3):Nd())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Do(),dc(e,t),e===null&&Ni(t.stateNode.containerInfo),at(t),null;case 10:return bd(t.type._context),at(t),null;case 17:return wt(t.type)&&Sa(),at(t),null;case 19:if(Te(Re),i=t.memoizedState,i===null)return at(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ni(i,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Pa(e),s!==null){for(t.flags|=128,ni(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&Be()>Lo&&(t.flags|=128,r=!0,ni(i,!1),t.lanes=4194304)}else{if(!r)if(e=Pa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Pe)return at(t),null}else 2*Be()-i.renderingStartTime>Lo&&n!==1073741824&&(t.flags|=128,r=!0,ni(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Be(),t.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return Fd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zw(e,t){switch(xd(t),t.tag){case 1:return wt(t.type)&&Sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Do(),Te(xt),Te(ct),Pd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Td(t),null;case 13:if(Te(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Re),null;case 4:return Do(),null;case 10:return bd(t.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Is=!1,ut=!1,qw=typeof WeakSet=="function"?WeakSet:Set,z=null;function lo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function fc(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var Op=!1;function Jw(e,t){if(Yu=va,e=zg(),vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++c===r&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:e,selectionRange:n},va=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ht(t.type,y),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){Ve(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Op,Op=!1,v}function bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&fc(t,n,i)}o=o.next}while(o!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fv(e){var t=e.alternate;t!==null&&(e.alternate=null,Fv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[on],delete t[zi],delete t[Ju],delete t[jw],delete t[Vw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nv(e){return e.tag===5||e.tag===3||e.tag===4}function _p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wa));else if(r!==4&&(e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mc(e,t,n),e=e.sibling;e!==null;)mc(e,t,n),e=e.sibling}var tt=null,Wt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Bv(e,t,n),n=n.sibling}function Bv(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 5:ut||lo(n,t);case 6:var r=tt,o=Wt;tt=null,Vn(e,t,n),tt=r,Wt=o,tt!==null&&(Wt?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(Wt?(e=tt,n=n.stateNode,e.nodeType===8?ql(e.parentNode,n):e.nodeType===1&&ql(e,n),Oi(e)):ql(tt,n.stateNode));break;case 4:r=tt,o=Wt,tt=n.stateNode.containerInfo,Wt=!0,Vn(e,t,n),tt=r,Wt=o;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&fc(n,t,s),o=o.next}while(o!==r)}Vn(e,t,n);break;case 1:if(!ut&&(lo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,t,a)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Vn(e,t,n),ut=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Fp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qw),t.forEach(function(r){var o=lS.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,Wt=!1;break e;case 3:tt=a.stateNode.containerInfo,Wt=!0;break e;case 4:tt=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(tt===null)throw Error(j(160));Bv(i,s,o),tt=null,Wt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zv(t,e),t=t.sibling}function zv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),tn(e),r&4){try{bi(3,e,e.return),sl(3,e)}catch(y){Ve(e,e.return,y)}try{bi(5,e,e.return)}catch(y){Ve(e,e.return,y)}}break;case 1:Ut(t,e),tn(e),r&512&&n!==null&&lo(n,n.return);break;case 5:if(Ut(t,e),tn(e),r&512&&n!==null&&lo(n,n.return),e.flags&32){var o=e.stateNode;try{Mi(o,"")}catch(y){Ve(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ug(o,i),Fu(a,s);var u=Fu(a,i);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?hg(o,d):c==="dangerouslySetInnerHTML"?fg(o,d):c==="children"?Mi(o,d):od(o,c,d,u)}switch(a){case"input":Iu(o,i);break;case"textarea":cg(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?xo(o,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?xo(o,!!i.multiple,i.defaultValue,!0):xo(o,!!i.multiple,i.multiple?[]:"",!1))}o[zi]=i}catch(y){Ve(e,e.return,y)}}break;case 6:if(Ut(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Ve(e,e.return,y)}}break;case 3:if(Ut(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(y){Ve(e,e.return,y)}break;case 4:Ut(t,e),tn(e);break;case 13:Ut(t,e),tn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Od=Be())),r&4&&Fp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ut=(u=ut)||c,Ut(t,e),ut=u):Ut(t,e),tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,g=f.child,f.tag){case 0:case 11:case 14:case 15:bi(4,f,f.return);break;case 1:lo(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Ve(r,n,y)}}break;case 5:lo(f,f.return);break;case 22:if(f.memoizedState!==null){Bp(d);continue}}g!==null?(g.return=f,z=g):Bp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pg("display",s))}catch(y){Ve(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ve(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ut(t,e),tn(e),r&4&&Fp(e);break;case 21:break;default:Ut(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mi(o,""),r.flags&=-33);var i=_p(e);mc(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=_p(e);hc(e,a,s);break;default:throw Error(j(161))}}catch(l){Ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eS(e,t,n){z=e,Uv(e)}function Uv(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Is;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||ut;a=Is;var u=ut;if(Is=s,(ut=l)&&!u)for(z=o;z!==null;)s=z,l=s.child,s.tag===22&&s.memoizedState!==null?zp(o):l!==null?(l.return=s,z=l):zp(o);for(;i!==null;)z=i,Uv(i),i=i.sibling;z=o,Is=a,ut=u}Np(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):Np(e)}}function Np(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ut)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Oi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||t.flags&512&&pc(t)}catch(f){Ve(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Bp(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function zp(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(l){Ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Ve(t,o,l)}}var i=t.return;try{pc(t)}catch(l){Ve(t,i,l)}break;case 5:var s=t.return;try{pc(t)}catch(l){Ve(t,s,l)}}}catch(l){Ve(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var tS=Math.ceil,$a=$n.ReactCurrentDispatcher,jd=$n.ReactCurrentOwner,_t=$n.ReactCurrentBatchConfig,ge=0,Je=null,Ue=null,rt=0,At=0,uo=cr(0),Ge=0,Ki=null,Vr=0,al=0,Vd=0,Ei=null,vt=null,Od=0,Lo=1/0,gn=null,La=!1,gc=null,qn=null,js=!1,Qn=null,Ma=0,Ai=0,vc=null,ta=-1,na=0;function ft(){return ge&6?Be():ta!==-1?ta:ta=Be()}function Jn(e){return e.mode&1?ge&2&&rt!==0?rt&-rt:_w.transition!==null?(na===0&&(na=Cg()),na):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Mg(e.type)),e):1}function Yt(e,t,n,r){if(50<Ai)throw Ai=0,vc=null,Error(j(185));is(e,n,r),(!(ge&2)||e!==Je)&&(e===Je&&(!(ge&2)&&(al|=n),Ge===4&&Hn(e,rt)),St(e,r),n===1&&ge===0&&!(t.mode&1)&&(Lo=Be()+500,rl&&dr()))}function St(e,t){var n=e.callbackNode;_x(e,t);var r=ga(e,e===Je?rt:0);if(r===0)n!==null&&Zf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zf(n),t===1)e.tag===0?Ow(Up.bind(null,e)):qg(Up.bind(null,e)),Mw(function(){!(ge&6)&&dr()}),n=null;else{switch(Tg(r)){case 1:n=ud;break;case 4:n=Eg;break;case 16:n=ma;break;case 536870912:n=Ag;break;default:n=ma}n=Zv(n,Hv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hv(e,t){if(ta=-1,na=0,ge&6)throw Error(j(327));var n=e.callbackNode;if(Eo()&&e.callbackNode!==n)return null;var r=ga(e,e===Je?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ia(e,r);else{t=r;var o=ge;ge|=2;var i=Qv();(Je!==e||rt!==t)&&(gn=null,Lo=Be()+500,Pr(e,t));do try{oS();break}catch(a){Wv(e,a)}while(!0);kd(),$a.current=i,ge=o,Ue!==null?t=0:(Je=null,rt=0,t=Ge)}if(t!==0){if(t===2&&(o=Hu(e),o!==0&&(r=o,t=yc(e,o))),t===1)throw n=Ki,Pr(e,0),Hn(e,r),St(e,Be()),n;if(t===6)Hn(e,r);else{if(o=e.current.alternate,!(r&30)&&!nS(o)&&(t=Ia(e,r),t===2&&(i=Hu(e),i!==0&&(r=i,t=yc(e,i))),t===1))throw n=Ki,Pr(e,0),Hn(e,r),St(e,Be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:vr(e,vt,gn);break;case 3:if(Hn(e,r),(r&130023424)===r&&(t=Od+500-Be(),10<t)){if(ga(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qu(vr.bind(null,e,vt,gn),t);break}vr(e,vt,gn);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Kt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tS(r/1960))-r,10<r){e.timeoutHandle=qu(vr.bind(null,e,vt,gn),r);break}vr(e,vt,gn);break;case 5:vr(e,vt,gn);break;default:throw Error(j(329))}}}return St(e,Be()),e.callbackNode===n?Hv.bind(null,e):null}function yc(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=vt,vt=n,t!==null&&xc(t)),e}function xc(e){vt===null?vt=e:vt.push.apply(vt,e)}function nS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Zt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t){for(t&=~Vd,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Kt(t),r=1<<n;e[n]=-1,t&=~r}}function Up(e){if(ge&6)throw Error(j(327));Eo();var t=ga(e,0);if(!(t&1))return St(e,Be()),null;var n=Ia(e,t);if(e.tag!==0&&n===2){var r=Hu(e);r!==0&&(t=r,n=yc(e,r))}if(n===1)throw n=Ki,Pr(e,0),Hn(e,t),St(e,Be()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,vt,gn),St(e,Be()),null}function _d(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Lo=Be()+500,rl&&dr())}}function Or(e){Qn!==null&&Qn.tag===0&&!(ge&6)&&Eo();var t=ge;ge|=1;var n=_t.transition,r=xe;try{if(_t.transition=null,xe=1,e)return e()}finally{xe=r,_t.transition=n,ge=t,!(ge&6)&&dr()}}function Fd(){At=uo.current,Te(uo)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lw(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:Do(),Te(xt),Te(ct),Pd();break;case 5:Td(r);break;case 4:Do();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:bd(r.type._context);break;case 22:case 23:Fd()}n=n.return}if(Je=e,Ue=e=er(e.current,null),rt=At=t,Ge=0,Ki=null,Vd=al=Vr=0,vt=Ei=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Sr=null}return e}function Wv(e,t){do{var n=Ue;try{if(kd(),qs.current=Da,Ra){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ra=!1}if(jr=0,Xe=Qe=Le=null,ki=!1,Wi=0,jd.current=null,n===null||n.return===null){Ge=1,Ki=t,Ue=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Dp(s);if(g!==null){g.flags&=-257,$p(g,s,a,i,t),g.mode&1&&Rp(i,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Rp(i,u,t),Nd();break e}l=Error(j(426))}}else if(Pe&&a.mode&1){var S=Dp(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),$p(S,s,a,i,t),wd($o(l,a));break e}}i=l=$o(l,a),Ge!==4&&(Ge=2),Ei===null?Ei=[i]:Ei.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Pv(i,l,t);kp(i,h);break e;case 1:a=l;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qn===null||!qn.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Rv(i,a,t);kp(i,k);break e}}i=i.return}while(i!==null)}Kv(n)}catch(A){t=A,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Qv(){var e=$a.current;return $a.current=Da,e===null?Da:e}function Nd(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(Vr&268435455)&&!(al&268435455)||Hn(Je,rt)}function Ia(e,t){var n=ge;ge|=2;var r=Qv();(Je!==e||rt!==t)&&(gn=null,Pr(e,t));do try{rS();break}catch(o){Wv(e,o)}while(!0);if(kd(),ge=n,$a.current=r,Ue!==null)throw Error(j(261));return Je=null,rt=0,Ge}function rS(){for(;Ue!==null;)Gv(Ue)}function oS(){for(;Ue!==null&&!Rx();)Gv(Ue)}function Gv(e){var t=Xv(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Kv(e):Ue=t,jd.current=null}function Kv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zw(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ue=null;return}}else if(n=Xw(n,t,At),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ge===0&&(Ge=5)}function vr(e,t,n){var r=xe,o=_t.transition;try{_t.transition=null,xe=1,iS(e,t,n,r)}finally{_t.transition=o,xe=r}return null}function iS(e,t,n,r){do Eo();while(Qn!==null);if(ge&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Fx(e,i),e===Je&&(Ue=Je=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,Zv(ma,function(){return Eo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_t.transition,_t.transition=null;var s=xe;xe=1;var a=ge;ge|=4,jd.current=null,Jw(e,n),zv(n,e),Aw(Xu),va=!!Yu,Xu=Yu=null,e.current=n,eS(n),Dx(),ge=a,xe=s,_t.transition=i}else e.current=n;if(js&&(js=!1,Qn=e,Ma=o),i=e.pendingLanes,i===0&&(qn=null),Mx(n.stateNode),St(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(La)throw La=!1,e=gc,gc=null,e;return Ma&1&&e.tag!==0&&Eo(),i=e.pendingLanes,i&1?e===vc?Ai++:(Ai=0,vc=e):Ai=0,dr(),null}function Eo(){if(Qn!==null){var e=Tg(Ma),t=_t.transition,n=xe;try{if(_t.transition=null,xe=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,Ma=0,ge&6)throw Error(j(331));var o=ge;for(ge|=4,z=e.current;z!==null;){var i=z,s=i.child;if(z.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:bi(8,c,i)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,g=c.return;if(Fv(c),c===u){z=null;break}if(f!==null){f.return=g,z=f;break}z=g}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}z=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,z=s;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bi(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,z=h;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){s=z;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,z=m;else e:for(s=p;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(A){Ve(a,a.return,A)}if(a===s){z=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,z=k;break e}z=a.return}}if(ge=o,dr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(qa,e)}catch{}r=!0}return r}finally{xe=n,_t.transition=t}}return!1}function Hp(e,t,n){t=$o(n,t),t=Pv(e,t,1),e=Zn(e,t,1),t=ft(),e!==null&&(is(e,1,t),St(e,t))}function Ve(e,t,n){if(e.tag===3)Hp(e,e,n);else for(;t!==null;){if(t.tag===3){Hp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=$o(n,e),e=Rv(t,e,1),t=Zn(t,e,1),e=ft(),t!==null&&(is(t,1,e),St(t,e));break}}t=t.return}}function sS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Be()-Od?Pr(e,0):Vd|=n),St(e,t)}function Yv(e,t){t===0&&(e.mode&1?(t=As,As<<=1,!(As&130023424)&&(As=4194304)):t=1);var n=ft();e=Pn(e,t),e!==null&&(is(e,t,n),St(e,n))}function aS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yv(e,n)}function lS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Yv(e,n)}var Xv;Xv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,Yw(e,t,n);yt=!!(e.flags&131072)}else yt=!1,Pe&&t.flags&1048576&&Jg(t,Ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ea(e,t),e=t.pendingProps;var o=To(t,ct.current);bo(t,n),o=Dd(null,t,r,e,o,n);var i=$d();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(i=!0,ka(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ad(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,ic(t,r,e,n),t=lc(null,t,r,!0,i,n)):(t.tag=0,Pe&&i&&yd(t),dt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cS(r),e=Ht(r,e),o){case 0:t=ac(null,t,r,e,n);break e;case 1:t=Ip(null,t,r,e,n);break e;case 11:t=Lp(null,t,r,e,n);break e;case 14:t=Mp(null,t,r,Ht(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ht(r,o),ac(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ht(r,o),Ip(e,t,r,o,n);case 3:e:{if(Mv(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rv(e,t),Ta(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$o(Error(j(423)),t),t=jp(e,t,r,n,o);break e}else if(r!==o){o=$o(Error(j(424)),t),t=jp(e,t,r,n,o);break e}else for(Ct=Xn(t.stateNode.containerInfo.firstChild),Tt=t,Pe=!0,Gt=null,n=av(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Po(),r===o){t=Rn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return lv(t),e===null&&nc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Zu(r,o)?s=null:i!==null&&Zu(r,i)&&(t.flags|=32),Lv(e,t),dt(e,t,s,n),t.child;case 6:return e===null&&nc(t),null;case 13:return Iv(e,t,n);case 4:return Cd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ro(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ht(r,o),Lp(e,t,r,o,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Ee(Aa,r._currentValue),r._currentValue=s,i!==null)if(Zt(i.value,s)){if(i.children===o.children&&!xt.current){t=Rn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=kn(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),rc(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(j(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}dt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,bo(t,n),o=Ft(o),r=r(o),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,o=Ht(r,t.pendingProps),o=Ht(r.type,o),Mp(e,t,r,o,n);case 15:return Dv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ht(r,o),ea(e,t),t.tag=1,wt(r)?(e=!0,ka(t)):e=!1,bo(t,n),iv(t,r,o),ic(t,r,o,n),lc(null,t,r,!0,e,n);case 19:return jv(e,t,n);case 22:return $v(e,t,n)}throw Error(j(156,t.tag))};function Zv(e,t){return bg(e,t)}function uS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,r){return new uS(e,t,n,r)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cS(e){if(typeof e=="function")return Bd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sd)return 11;if(e===ad)return 14}return 2}function er(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ra(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Bd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jr:return Rr(n.children,o,i,t);case id:s=8,o|=8;break;case Ru:return e=Ot(12,n,t,o|2),e.elementType=Ru,e.lanes=i,e;case Du:return e=Ot(13,n,t,o),e.elementType=Du,e.lanes=i,e;case $u:return e=Ot(19,n,t,o),e.elementType=$u,e.lanes=i,e;case sg:return ll(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case og:s=10;break e;case ig:s=9;break e;case sd:s=11;break e;case ad:s=14;break e;case Nn:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ot(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rr(e,t,n,r){return e=Ot(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=Ot(22,e,r,t),e.elementType=sg,e.lanes=n,e.stateNode={isHidden:!1},e}function su(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dS(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zd(e,t,n,r,o,i,s,a,l){return e=new dS(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(i),e}function fS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qv(e){if(!e)return or;e=e._reactInternals;e:{if(zr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(wt(n))return Zg(e,n,t)}return t}function Jv(e,t,n,r,o,i,s,a,l){return e=zd(n,r,!0,e,o,i,s,a,l),e.context=qv(null),n=e.current,r=ft(),o=Jn(n),i=kn(r,o),i.callback=t??null,Zn(n,i,o),e.current.lanes=o,is(e,o,r),St(e,r),e}function ul(e,t,n,r){var o=t.current,i=ft(),s=Jn(o);return n=qv(n),t.context===null?t.context=n:t.pendingContext=n,t=kn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zn(o,t,s),e!==null&&(Yt(e,o,s,i),Zs(e,o,s)),s}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ud(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function pS(){return null}var e0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hd(e){this._internalRoot=e}cl.prototype.render=Hd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ul(e,t,null,null)};cl.prototype.unmount=Hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){ul(null,e,null,null)}),t[Tn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Lg(e)}};function Wd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function hS(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ja(s);i.call(u)}}var s=Jv(t,r,e,0,null,!1,!1,"",Qp);return e._reactRootContainer=s,e[Tn]=s.current,Ni(e.nodeType===8?e.parentNode:e),Or(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ja(l);a.call(u)}}var l=zd(e,0,!1,null,null,!1,!1,"",Qp);return e._reactRootContainer=l,e[Tn]=l.current,Ni(e.nodeType===8?e.parentNode:e),Or(function(){ul(t,l,n,r)}),l}function fl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=ja(s);a.call(l)}}ul(t,s,e,o)}else s=hS(n,t,e,o,r);return ja(s)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(cd(t,n|1),St(t,Be()),!(ge&6)&&(Lo=Be()+500,dr()))}break;case 13:Or(function(){var r=Pn(e,1);if(r!==null){var o=ft();Yt(r,e,1,o)}}),Ud(e,1)}};dd=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=ft();Yt(t,e,134217728,n)}Ud(e,134217728)}};Rg=function(e){if(e.tag===13){var t=Jn(e),n=Pn(e,t);if(n!==null){var r=ft();Yt(n,e,t,r)}Ud(e,t)}};Dg=function(){return xe};$g=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Bu=function(e,t,n){switch(t){case"input":if(Iu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nl(r);if(!o)throw Error(j(90));lg(r),Iu(r,o)}}}break;case"textarea":cg(e,n);break;case"select":t=n.value,t!=null&&xo(e,!!n.multiple,t,!1)}};vg=_d;yg=Or;var mS={usingClientEntryPoint:!1,Events:[as,ro,nl,mg,gg,_d]},ri={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gS={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sg(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{qa=Vs.inject(gS),sn=Vs}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(t))throw Error(j(200));return fS(e,t,null,n)};Dt.createRoot=function(e,t){if(!Wd(e))throw Error(j(299));var n=!1,r="",o=e0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zd(e,1,!1,null,null,n,!1,r,o),e[Tn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Hd(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Sg(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return Or(e)};Dt.hydrate=function(e,t,n){if(!dl(t))throw Error(j(200));return fl(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!Wd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=e0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jv(t,null,e,1,n??null,o,!1,i,s),e[Tn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};Dt.render=function(e,t,n){if(!dl(t))throw Error(j(200));return fl(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!dl(e))throw Error(j(40));return e._reactRootContainer?(Or(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1};Dt.unstable_batchedUpdates=_d;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!dl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return fl(e,t,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function t0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0)}catch(e){console.error(e)}}t0(),Jm.exports=Dt;var pl=Jm.exports;const vS=Zc(pl),yS=zm({__proto__:null,default:vS},[pl]);var Gp=pl;Tu.createRoot=Gp.createRoot,Tu.hydrateRoot=Gp.hydrateRoot;/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const Kp="popstate";function xS(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Yi("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:us(o)}return SS(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wS(){return Math.random().toString(36).substr(2,8)}function Yp(e,t){return{usr:e.state,key:e.key,idx:t}}function Yi(e,t,n,r){return n===void 0&&(n=null),Oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ln(t):t,{state:n,key:t&&t.key||r||wS()})}function us(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function SS(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Ne.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Oe({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Ne.Pop;let S=c(),h=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:h})}function f(S,h){a=Ne.Push;let p=Yi(y.location,S,h);n&&n(p,S),u=c()+1;let m=Yp(p,u),k=y.createHref(p);try{s.pushState(m,"",k)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(k)}i&&l&&l({action:a,location:y.location,delta:1})}function g(S,h){a=Ne.Replace;let p=Yi(y.location,S,h);n&&n(p,S),u=c();let m=Yp(p,u),k=y.createHref(p);s.replaceState(m,"",k),i&&l&&l({action:a,location:y.location,delta:0})}function v(S){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:us(S);return p=p.replace(/ $/,"%20"),fe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Kp,d),l=S,()=>{o.removeEventListener(Kp,d),l=null}},createHref(S){return t(o,S)},createURL:v,encodeLocation(S){let h=v(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(S){return s.go(S)}};return y}var je;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(je||(je={}));const kS=new Set(["lazy","caseSensitive","path","id","index","children"]);function bS(e){return e.index===!0}function wc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let s=[...n,i],a=typeof o.id=="string"?o.id:s.join("-");if(fe(o.index!==!0||!o.children,"Cannot specify children on an index route"),fe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),bS(o)){let l=Oe({},o,t(o),{id:a});return r[a]=l,l}else{let l=Oe({},o,t(o),{id:a,children:void 0});return r[a]=l,o.children&&(l.children=wc(o.children,t,s,r)),l}})}function co(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ln(t):t,o=cs(r.pathname||"/",n);if(o==null)return null;let i=n0(e);AS(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=OS(o);s=IS(i[a],l)}return s}function ES(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function n0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tr([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),n0(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:LS(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of r0(i.path))o(i,s,l)}),t}function r0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=r0(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function AS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:MS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CS=/^:[\w-]+$/,TS=3,PS=2,RS=1,DS=10,$S=-2,Xp=e=>e==="*";function LS(e,t){let n=e.split("/"),r=n.length;return n.some(Xp)&&(r+=$S),t&&(r+=PS),n.filter(o=>!Xp(o)).reduce((o,i)=>o+(CS.test(i)?TS:i===""?RS:DS),r)}function MS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function IS(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=jS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;i.push({params:r,pathname:tr([o,c.pathname]),pathnameBase:NS(tr([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=tr([o,c.pathnameBase]))}return i}function jS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=VS(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:g}=c;if(f==="*"){let y=a[d]||"";s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function VS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function OS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _S(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ln(e):e;return{pathname:n?n.startsWith("/")?n:FS(n,t):t,search:BS(r),hash:zS(o)}}function FS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function lu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function i0(e,t){let n=o0(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function s0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ln(e):(o=Oe({},e),fe(!o.pathname||!o.pathname.includes("?"),lu("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),lu("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),lu("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=_S(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=e=>e.join("/").replace(/\/\/+/g,"/"),NS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),BS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Qd{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function a0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l0=["post","put","patch","delete"],US=new Set(l0),HS=["get",...l0],WS=new Set(HS),QS=new Set([301,302,303,307,308]),GS=new Set([307,308]),uu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},KS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YS=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),c0="remix-router-transitions";function XS(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;fe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;o=T=>({hasErrorBoundary:E(T)})}else o=YS;let i={},s=wc(e.routes,o,void 0,i),a,l=e.basename||"/",u=Oe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),c=null,d=new Set,f=null,g=null,v=null,y=e.hydrationData!=null,S=co(s,e.history.location,l),h=null;if(S==null){let E=It(404,{pathname:e.history.location.pathname}),{matches:T,route:R}=oh(s);S=T,h={[R.id]:E}}let p,m=S.some(E=>E.route.lazy),k=S.some(E=>E.route.loader);if(m)p=!1;else if(!k)p=!0;else if(u.v7_partialHydration){let E=e.hydrationData?e.hydrationData.loaderData:null,T=e.hydrationData?e.hydrationData.errors:null;p=S.every(R=>R.route.loader&&R.route.loader.hydrate!==!0&&(E&&E[R.route.id]!==void 0||T&&T[R.route.id]!==void 0))}else p=e.hydrationData!=null;let A,x={historyAction:e.history.action,location:e.history.location,matches:S,initialized:p,navigation:uu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||h,fetchers:new Map,blockers:new Map},b=Ne.Pop,P=!1,L,_=!1,G=new Map,K=null,re=!1,te=!1,he=[],ae=[],q=new Map,D=0,V=-1,B=new Map,F=new Set,Z=new Map,Y=new Map,U=new Set,oe=new Map,Q=new Map,ie=!1;function Ie(){if(c=e.history.listen(E=>{let{action:T,location:R,delta:O}=E;if(ie){ie=!1;return}Mo(Q.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Vf({currentLocation:x.location,nextLocation:R,historyAction:T});if(W&&O!=null){ie=!0,e.history.go(O*-1),vs(W,{state:"blocked",location:R,proceed(){vs(W,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(O)},reset(){let de=new Map(x.blockers);de.set(W,oi),H({blockers:de})}});return}return ke(T,R)}),n){ak(t,G);let E=()=>lk(t,G);t.addEventListener("pagehide",E),K=()=>t.removeEventListener("pagehide",E)}return x.initialized||ke(Ne.Pop,x.location,{initialHydration:!0}),A}function I(){c&&c(),K&&K(),d.clear(),L&&L.abort(),x.fetchers.forEach((E,T)=>gs(T)),x.blockers.forEach((E,T)=>jf(T))}function ne(E){return d.add(E),()=>d.delete(E)}function H(E,T){T===void 0&&(T={}),x=Oe({},x,E);let R=[],O=[];u.v7_fetcherPersist&&x.fetchers.forEach((W,de)=>{W.state==="idle"&&(U.has(de)?O.push(de):R.push(de))}),[...d].forEach(W=>W(x,{deletedFetchers:O,unstable_viewTransitionOpts:T.viewTransitionOpts,unstable_flushSync:T.flushSync===!0})),u.v7_fetcherPersist&&(R.forEach(W=>x.fetchers.delete(W)),O.forEach(W=>gs(W)))}function ce(E,T,R){var O,W;let{flushSync:de}=R===void 0?{}:R,se=x.actionData!=null&&x.navigation.formMethod!=null&&Qt(x.navigation.formMethod)&&x.navigation.state==="loading"&&((O=E.state)==null?void 0:O._isRedirect)!==!0,J;T.actionData?Object.keys(T.actionData).length>0?J=T.actionData:J=null:se?J=x.actionData:J=null;let X=T.loaderData?rh(x.loaderData,T.loaderData,T.matches||[],T.errors):x.loaderData,me=x.blockers;me.size>0&&(me=new Map(me),me.forEach((be,et)=>me.set(et,oi)));let Ke=P===!0||x.navigation.formMethod!=null&&Qt(x.navigation.formMethod)&&((W=E.state)==null?void 0:W._isRedirect)!==!0;a&&(s=a,a=void 0),re||b===Ne.Pop||(b===Ne.Push?e.history.push(E,E.state):b===Ne.Replace&&e.history.replace(E,E.state));let le;if(b===Ne.Pop){let be=G.get(x.location.pathname);be&&be.has(E.pathname)?le={currentLocation:x.location,nextLocation:E}:G.has(E.pathname)&&(le={currentLocation:E,nextLocation:x.location})}else if(_){let be=G.get(x.location.pathname);be?be.add(E.pathname):(be=new Set([E.pathname]),G.set(x.location.pathname,be)),le={currentLocation:x.location,nextLocation:E}}H(Oe({},T,{actionData:J,loaderData:X,historyAction:b,location:E,initialized:!0,navigation:uu,revalidation:"idle",restoreScrollPosition:_f(E,T.matches||x.matches),preventScrollReset:Ke,blockers:me}),{viewTransitionOpts:le,flushSync:de===!0}),b=Ne.Pop,P=!1,_=!1,re=!1,te=!1,he=[],ae=[]}async function Se(E,T){if(typeof E=="number"){e.history.go(E);return}let R=Sc(x.location,x.matches,l,u.v7_prependBasename,E,u.v7_relativeSplatPath,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:O,submission:W,error:de}=Zp(u.v7_normalizeFormMethod,!1,R,T),se=x.location,J=Yi(x.location,O,T&&T.state);J=Oe({},J,e.history.encodeLocation(J));let X=T&&T.replace!=null?T.replace:void 0,me=Ne.Push;X===!0?me=Ne.Replace:X===!1||W!=null&&Qt(W.formMethod)&&W.formAction===x.location.pathname+x.location.search&&(me=Ne.Replace);let Ke=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,le=(T&&T.unstable_flushSync)===!0,be=Vf({currentLocation:se,nextLocation:J,historyAction:me});if(be){vs(be,{state:"blocked",location:J,proceed(){vs(be,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),Se(E,T)},reset(){let et=new Map(x.blockers);et.set(be,oi),H({blockers:et})}});return}return await ke(me,J,{submission:W,pendingError:de,preventScrollReset:Ke,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition,flushSync:le})}function We(){if(Wr(),H({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){ke(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}ke(b||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function ke(E,T,R){L&&L.abort(),L=null,b=E,re=(R&&R.startUninterruptedRevalidation)===!0,U1(x.location,x.matches),P=(R&&R.preventScrollReset)===!0,_=(R&&R.enableViewTransition)===!0;let O=a||s,W=R&&R.overrideNavigation,de=co(O,T,l),se=(R&&R.flushSync)===!0;if(!de){let et=It(404,{pathname:T.pathname}),{matches:bt,route:Ye}=oh(O);Ll(),ce(T,{matches:bt,loaderData:{},errors:{[Ye.id]:et}},{flushSync:se});return}if(x.initialized&&!te&&tk(x.location,T)&&!(R&&R.submission&&Qt(R.submission.formMethod))){ce(T,{matches:de},{flushSync:se});return}L=new AbortController;let J=si(e.history,T,L.signal,R&&R.submission),X,me;if(R&&R.pendingError)me={[Ci(de).route.id]:R.pendingError};else if(R&&R.submission&&Qt(R.submission.formMethod)){let et=await mt(J,T,R.submission,de,{replace:R.replace,flushSync:se});if(et.shortCircuited)return;X=et.pendingActionData,me=et.pendingActionError,W=cu(T,R.submission),se=!1,J=new Request(J.url,{signal:J.signal})}let{shortCircuited:Ke,loaderData:le,errors:be}=await zt(J,T,de,W,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,se,X,me);Ke||(L=null,ce(T,Oe({matches:de},X?{actionData:X}:{},{loaderData:le,errors:be})))}async function mt(E,T,R,O,W){W===void 0&&(W={}),Wr();let de=ik(T,R);H({navigation:de},{flushSync:W.flushSync===!0});let se,J=bc(O,T);if(!J.route.action&&!J.route.lazy)se={type:je.error,error:It(405,{method:E.method,pathname:T.pathname,routeId:J.route.id})};else if(se=await ii("action",E,J,O,i,o,l,u.v7_relativeSplatPath),E.signal.aborted)return{shortCircuited:!0};if(Er(se)){let X;return W&&W.replace!=null?X=W.replace:X=se.location===x.location.pathname+x.location.search,await pn(x,se,{submission:R,replace:X}),{shortCircuited:!0}}if(fo(se)){let X=Ci(O,J.route.id);return(W&&W.replace)!==!0&&(b=Ne.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:se.error}}}if(br(se))throw It(400,{type:"defer-action"});return{pendingActionData:{[J.route.id]:se.data}}}async function zt(E,T,R,O,W,de,se,J,X,me,Ke){let le=O||cu(T,W),be=W||de||ah(le),et=a||s,[bt,Ye]=qp(e.history,x,R,be,T,u.v7_partialHydration&&J===!0,te,he,ae,U,Z,F,et,l,me,Ke);if(Ll(ve=>!(R&&R.some(we=>we.route.id===ve))||bt&&bt.some(we=>we.route.id===ve)),V=++D,bt.length===0&&Ye.length===0){let ve=Mf();return ce(T,Oe({matches:R,loaderData:{},errors:Ke||null},me?{actionData:me}:{},ve?{fetchers:new Map(x.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!re&&(!u.v7_partialHydration||!J)){Ye.forEach(we=>{let gt=x.fetchers.get(we.key),xs=ai(void 0,gt?gt.data:void 0);x.fetchers.set(we.key,xs)});let ve=me||x.actionData;H(Oe({navigation:le},ve?Object.keys(ve).length===0?{actionData:null}:{actionData:ve}:{},Ye.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:X})}Ye.forEach(ve=>{q.has(ve.key)&&In(ve.key),ve.controller&&q.set(ve.key,ve.controller)});let Qr=()=>Ye.forEach(ve=>In(ve.key));L&&L.signal.addEventListener("abort",Qr);let{results:Ml,loaderResults:Gr,fetcherResults:jn}=await Mn(x.matches,R,bt,Ye,E);if(E.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Qr),Ye.forEach(ve=>q.delete(ve.key));let pr=ih(Ml);if(pr){if(pr.idx>=bt.length){let ve=Ye[pr.idx-bt.length].key;F.add(ve)}return await pn(x,pr.result,{replace:se}),{shortCircuited:!0}}let{loaderData:Il,errors:Yo}=nh(x,R,bt,Gr,Ke,Ye,jn,oe);oe.forEach((ve,we)=>{ve.subscribe(gt=>{(gt||ve.done)&&oe.delete(we)})}),u.v7_partialHydration&&J&&x.errors&&Object.entries(x.errors).filter(ve=>{let[we]=ve;return!bt.some(gt=>gt.route.id===we)}).forEach(ve=>{let[we,gt]=ve;Yo=Object.assign(Yo||{},{[we]:gt})});let jl=Mf(),Kr=If(V),ys=jl||Kr||Ye.length>0;return Oe({loaderData:Il,errors:Yo},ys?{fetchers:new Map(x.fetchers)}:{})}function fn(E,T,R,O){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");q.has(E)&&In(E);let W=(O&&O.unstable_flushSync)===!0,de=a||s,se=Sc(x.location,x.matches,l,u.v7_prependBasename,R,u.v7_relativeSplatPath,T,O==null?void 0:O.relative),J=co(de,se,l);if(!J){Ko(E,T,It(404,{pathname:se}),{flushSync:W});return}let{path:X,submission:me,error:Ke}=Zp(u.v7_normalizeFormMethod,!0,se,O);if(Ke){Ko(E,T,Ke,{flushSync:W});return}let le=bc(J,X);if(P=(O&&O.preventScrollReset)===!0,me&&Qt(me.formMethod)){en(E,T,X,le,J,W,me);return}Z.set(E,{routeId:T,path:X}),Go(E,T,X,le,J,W,me)}async function en(E,T,R,O,W,de,se){if(Wr(),Z.delete(E),!O.route.action&&!O.route.lazy){let we=It(405,{method:se.formMethod,pathname:R,routeId:T});Ko(E,T,we,{flushSync:de});return}let J=x.fetchers.get(E);hn(E,sk(se,J),{flushSync:de});let X=new AbortController,me=si(e.history,R,X.signal,se);q.set(E,X);let Ke=D,le=await ii("action",me,O,W,i,o,l,u.v7_relativeSplatPath);if(me.signal.aborted){q.get(E)===X&&q.delete(E);return}if(u.v7_fetcherPersist&&U.has(E)){if(Er(le)||fo(le)){hn(E,On(void 0));return}}else{if(Er(le))if(q.delete(E),V>Ke){hn(E,On(void 0));return}else return F.add(E),hn(E,ai(se)),pn(x,le,{fetcherSubmission:se});if(fo(le)){Ko(E,T,le.error);return}}if(br(le))throw It(400,{type:"defer-action"});let be=x.navigation.location||x.location,et=si(e.history,be,X.signal),bt=a||s,Ye=x.navigation.state!=="idle"?co(bt,x.navigation.location,l):x.matches;fe(Ye,"Didn't find any matches after fetcher action");let Qr=++D;B.set(E,Qr);let Ml=ai(se,le.data);x.fetchers.set(E,Ml);let[Gr,jn]=qp(e.history,x,Ye,se,be,!1,te,he,ae,U,Z,F,bt,l,{[O.route.id]:le.data},void 0);jn.filter(we=>we.key!==E).forEach(we=>{let gt=we.key,xs=x.fetchers.get(gt),W1=ai(void 0,xs?xs.data:void 0);x.fetchers.set(gt,W1),q.has(gt)&&In(gt),we.controller&&q.set(gt,we.controller)}),H({fetchers:new Map(x.fetchers)});let pr=()=>jn.forEach(we=>In(we.key));X.signal.addEventListener("abort",pr);let{results:Il,loaderResults:Yo,fetcherResults:jl}=await Mn(x.matches,Ye,Gr,jn,et);if(X.signal.aborted)return;X.signal.removeEventListener("abort",pr),B.delete(E),q.delete(E),jn.forEach(we=>q.delete(we.key));let Kr=ih(Il);if(Kr){if(Kr.idx>=Gr.length){let we=jn[Kr.idx-Gr.length].key;F.add(we)}return pn(x,Kr.result)}let{loaderData:ys,errors:ve}=nh(x,x.matches,Gr,Yo,void 0,jn,jl,oe);if(x.fetchers.has(E)){let we=On(le.data);x.fetchers.set(E,we)}If(Qr),x.navigation.state==="loading"&&Qr>V?(fe(b,"Expected pending action"),L&&L.abort(),ce(x.navigation.location,{matches:Ye,loaderData:ys,errors:ve,fetchers:new Map(x.fetchers)})):(H({errors:ve,loaderData:rh(x.loaderData,ys,Ye,ve),fetchers:new Map(x.fetchers)}),te=!1)}async function Go(E,T,R,O,W,de,se){let J=x.fetchers.get(E);hn(E,ai(se,J?J.data:void 0),{flushSync:de});let X=new AbortController,me=si(e.history,R,X.signal);q.set(E,X);let Ke=D,le=await ii("loader",me,O,W,i,o,l,u.v7_relativeSplatPath);if(br(le)&&(le=await p0(le,me.signal,!0)||le),q.get(E)===X&&q.delete(E),!me.signal.aborted){if(U.has(E)){hn(E,On(void 0));return}if(Er(le))if(V>Ke){hn(E,On(void 0));return}else{F.add(E),await pn(x,le);return}if(fo(le)){Ko(E,T,le.error);return}fe(!br(le),"Unhandled fetcher deferred data"),hn(E,On(le.data))}}async function pn(E,T,R){let{submission:O,fetcherSubmission:W,replace:de}=R===void 0?{}:R;T.revalidate&&(te=!0);let se=Yi(E.location,T.location,{_isRedirect:!0});if(fe(se,"Expected a location on the redirect navigation"),n){let be=!1;if(T.reloadDocument)be=!0;else if(u0.test(T.location)){const et=e.history.createURL(T.location);be=et.origin!==t.location.origin||cs(et.pathname,l)==null}if(be){de?t.location.replace(T.location):t.location.assign(T.location);return}}L=null;let J=de===!0?Ne.Replace:Ne.Push,{formMethod:X,formAction:me,formEncType:Ke}=E.navigation;!O&&!W&&X&&me&&Ke&&(O=ah(E.navigation));let le=O||W;if(GS.has(T.status)&&le&&Qt(le.formMethod))await ke(J,se,{submission:Oe({},le,{formAction:T.location}),preventScrollReset:P});else{let be=cu(se,O);await ke(J,se,{overrideNavigation:be,fetcherSubmission:W,preventScrollReset:P})}}async function Mn(E,T,R,O,W){let de=await Promise.all([...R.map(X=>ii("loader",W,X,T,i,o,l,u.v7_relativeSplatPath)),...O.map(X=>X.matches&&X.match&&X.controller?ii("loader",si(e.history,X.path,X.controller.signal),X.match,X.matches,i,o,l,u.v7_relativeSplatPath):{type:je.error,error:It(404,{pathname:X.path})})]),se=de.slice(0,R.length),J=de.slice(R.length);return await Promise.all([sh(E,R,se,se.map(()=>W.signal),!1,x.loaderData),sh(E,O.map(X=>X.match),J,O.map(X=>X.controller?X.controller.signal:null),!0)]),{results:de,loaderResults:se,fetcherResults:J}}function Wr(){te=!0,he.push(...Ll()),Z.forEach((E,T)=>{q.has(T)&&(ae.push(T),In(T))})}function hn(E,T,R){R===void 0&&(R={}),x.fetchers.set(E,T),H({fetchers:new Map(x.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function Ko(E,T,R,O){O===void 0&&(O={});let W=Ci(x.matches,T);gs(E),H({errors:{[W.route.id]:R},fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function $f(E){return u.v7_fetcherPersist&&(Y.set(E,(Y.get(E)||0)+1),U.has(E)&&U.delete(E)),x.fetchers.get(E)||KS}function gs(E){let T=x.fetchers.get(E);q.has(E)&&!(T&&T.state==="loading"&&B.has(E))&&In(E),Z.delete(E),B.delete(E),F.delete(E),U.delete(E),x.fetchers.delete(E)}function N1(E){if(u.v7_fetcherPersist){let T=(Y.get(E)||0)-1;T<=0?(Y.delete(E),U.add(E)):Y.set(E,T)}else gs(E);H({fetchers:new Map(x.fetchers)})}function In(E){let T=q.get(E);fe(T,"Expected fetch controller: "+E),T.abort(),q.delete(E)}function Lf(E){for(let T of E){let R=$f(T),O=On(R.data);x.fetchers.set(T,O)}}function Mf(){let E=[],T=!1;for(let R of F){let O=x.fetchers.get(R);fe(O,"Expected fetcher: "+R),O.state==="loading"&&(F.delete(R),E.push(R),T=!0)}return Lf(E),T}function If(E){let T=[];for(let[R,O]of B)if(O<E){let W=x.fetchers.get(R);fe(W,"Expected fetcher: "+R),W.state==="loading"&&(In(R),B.delete(R),T.push(R))}return Lf(T),T.length>0}function B1(E,T){let R=x.blockers.get(E)||oi;return Q.get(E)!==T&&Q.set(E,T),R}function jf(E){x.blockers.delete(E),Q.delete(E)}function vs(E,T){let R=x.blockers.get(E)||oi;fe(R.state==="unblocked"&&T.state==="blocked"||R.state==="blocked"&&T.state==="blocked"||R.state==="blocked"&&T.state==="proceeding"||R.state==="blocked"&&T.state==="unblocked"||R.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+T.state);let O=new Map(x.blockers);O.set(E,T),H({blockers:O})}function Vf(E){let{currentLocation:T,nextLocation:R,historyAction:O}=E;if(Q.size===0)return;Q.size>1&&Mo(!1,"A router only supports one blocker at a time");let W=Array.from(Q.entries()),[de,se]=W[W.length-1],J=x.blockers.get(de);if(!(J&&J.state==="proceeding")&&se({currentLocation:T,nextLocation:R,historyAction:O}))return de}function Ll(E){let T=[];return oe.forEach((R,O)=>{(!E||E(O))&&(R.cancel(),T.push(O),oe.delete(O))}),T}function z1(E,T,R){if(f=E,v=T,g=R||null,!y&&x.navigation===uu){y=!0;let O=_f(x.location,x.matches);O!=null&&H({restoreScrollPosition:O})}return()=>{f=null,v=null,g=null}}function Of(E,T){return g&&g(E,T.map(O=>ES(O,x.loaderData)))||E.key}function U1(E,T){if(f&&v){let R=Of(E,T);f[R]=v()}}function _f(E,T){if(f){let R=Of(E,T),O=f[R];if(typeof O=="number")return O}return null}function H1(E){i={},a=wc(E,o,void 0,i)}return A={get basename(){return l},get future(){return u},get state(){return x},get routes(){return s},get window(){return t},initialize:Ie,subscribe:ne,enableScrollRestoration:z1,navigate:Se,fetch:fn,revalidate:We,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:$f,deleteFetcher:N1,dispose:I,getBlocker:B1,deleteBlocker:jf,_internalFetchControllers:q,_internalActiveDeferreds:oe,_internalSetRoutes:H1},A}function ZS(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Sc(e,t,n,r,o,i,s,a){let l,u;if(s){l=[];for(let d of t)if(l.push(d),d.route.id===s){u=d;break}}else l=t,u=t[t.length-1];let c=s0(o||".",i0(l,i),cs(e.pathname,n)||e.pathname,a==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Gd(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:tr([n,c.pathname])),us(c)}function Zp(e,t,n,r){if(!r||!ZS(r))return{path:n};if(r.formMethod&&!ok(r.formMethod))return{path:n,error:It(405,{method:r.formMethod})};let o=()=>({path:n,error:It(400,{type:"invalid-body"})}),i=r.formMethod||"get",s=e?i.toUpperCase():i.toLowerCase(),a=f0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(s))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,v)=>{let[y,S]=v;return""+g+y+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Qt(s))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}fe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=kc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=kc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=th(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=th(l)}catch{return o()}let c={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let d=Ln(n);return t&&d.search&&Gd(d.search)&&l.append("index",""),d.search="?"+l,{path:us(d),submission:c}}function qS(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function qp(e,t,n,r,o,i,s,a,l,u,c,d,f,g,v,y){let S=y?Object.values(y)[0]:v?Object.values(v)[0]:void 0,h=e.createURL(t.location),p=e.createURL(o),m=y?Object.keys(y)[0]:void 0,A=qS(n,m).filter((b,P)=>{let{route:L}=b;if(L.lazy)return!0;if(L.loader==null)return!1;if(i)return L.loader.hydrate?!0:t.loaderData[L.id]===void 0&&(!t.errors||t.errors[L.id]===void 0);if(JS(t.loaderData,t.matches[P],b)||a.some(K=>K===b.route.id))return!0;let _=t.matches[P],G=b;return Jp(b,Oe({currentUrl:h,currentParams:_.params,nextUrl:p,nextParams:G.params},r,{actionResult:S,defaultShouldRevalidate:s||h.pathname+h.search===p.pathname+p.search||h.search!==p.search||d0(_,G)}))}),x=[];return c.forEach((b,P)=>{if(i||!n.some(re=>re.route.id===b.routeId)||u.has(P))return;let L=co(f,b.path,g);if(!L){x.push({key:P,routeId:b.routeId,path:b.path,matches:null,match:null,controller:null});return}let _=t.fetchers.get(P),G=bc(L,b.path),K=!1;d.has(P)?K=!1:l.includes(P)?K=!0:_&&_.state!=="idle"&&_.data===void 0?K=s:K=Jp(G,Oe({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:s})),K&&x.push({key:P,routeId:b.routeId,path:b.path,matches:L,match:G,controller:new AbortController})}),[A,x]}function JS(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function d0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Jp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function eh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];fe(o,"No route found in manifest");let i={};for(let s in r){let l=o[s]!==void 0&&s!=="hasErrorBoundary";Mo(!l,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!kS.has(s)&&(i[s]=r[s])}Object.assign(o,i),Object.assign(o,Oe({},t(o),{lazy:void 0}))}async function ii(e,t,n,r,o,i,s,a,l){l===void 0&&(l={});let u,c,d,f=y=>{let S,h=new Promise((p,m)=>S=m);return d=()=>S(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:l.requestContext}),h])};try{let y=n.route[e];if(n.route.lazy)if(y){let S,h=await Promise.all([f(y).catch(p=>{S=p}),eh(n.route,i,o)]);if(S)throw S;c=h[0]}else if(await eh(n.route,i,o),y=n.route[e],y)c=await f(y);else if(e==="action"){let S=new URL(t.url),h=S.pathname+S.search;throw It(405,{method:t.method,pathname:h,routeId:n.route.id})}else return{type:je.data,data:void 0};else if(y)c=await f(y);else{let S=new URL(t.url),h=S.pathname+S.search;throw It(404,{pathname:h})}fe(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){u=je.error,c=y}finally{d&&t.signal.removeEventListener("abort",d)}if(rk(c)){let y=c.status;if(QS.has(y)){let h=c.headers.get("Location");if(fe(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!u0.test(h))h=Sc(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,h,a);else if(!l.isStaticRequest){let p=new URL(t.url),m=h.startsWith("//")?new URL(p.protocol+h):new URL(h),k=cs(m.pathname,s)!=null;m.origin===p.origin&&k&&(h=m.pathname+m.search+m.hash)}if(l.isStaticRequest)throw c.headers.set("Location",h),c;return{type:je.redirect,status:y,location:h,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===je.error?je.error:je.data,response:c};let S;try{let h=c.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?c.body==null?S=null:S=await c.json():S=await c.text()}catch(h){return{type:je.error,error:h}}return u===je.error?{type:u,error:new Qd(y,c.statusText,S),headers:c.headers}:{type:je.data,data:S,statusCode:c.status,headers:c.headers}}if(u===je.error)return{type:u,error:c};if(nk(c)){var g,v;return{type:je.deferred,deferredData:c,statusCode:(g=c.init)==null?void 0:g.status,headers:((v=c.init)==null?void 0:v.headers)&&new Headers(c.init.headers)}}return{type:je.data,data:c}}function si(e,t,n,r){let o=e.createURL(f0(t)).toString(),i={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:s,formEncType:a}=r;i.method=s.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=kc(r.formData):i.body=r.formData}return new Request(o,i)}function kc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function th(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function ek(e,t,n,r,o){let i={},s=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=t[d].route.id;if(fe(!Er(c),"Cannot handle redirect results in processLoaderData"),fo(c)){let g=Ci(e,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),s=s||{},s[g.route.id]==null&&(s[g.route.id]=v),i[f]=void 0,l||(l=!0,a=a0(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else br(c)?(o.set(f,c.deferredData),i[f]=c.deferredData.data):i[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(s=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:s,statusCode:a||200,loaderHeaders:u}}function nh(e,t,n,r,o,i,s,a){let{loaderData:l,errors:u}=ek(t,n,r,o,a);for(let c=0;c<i.length;c++){let{key:d,match:f,controller:g}=i[c];fe(s!==void 0&&s[c]!==void 0,"Did not find corresponding fetcher result");let v=s[c];if(!(g&&g.signal.aborted))if(fo(v)){let y=Ci(e.matches,f==null?void 0:f.route.id);u&&u[y.route.id]||(u=Oe({},u,{[y.route.id]:v.error})),e.fetchers.delete(d)}else if(Er(v))fe(!1,"Unhandled fetcher revalidation redirect");else if(br(v))fe(!1,"Unhandled fetcher deferred data");else{let y=On(v.data);e.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function rh(e,t,n,r){let o=Oe({},t);for(let i of n){let s=i.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&i.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function Ci(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function oh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function It(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new Qd(e||500,s,new Error(a),!0)}function ih(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Er(n))return{result:n,idx:t}}}function f0(e){let t=typeof e=="string"?Ln(e):e;return us(Oe({},t,{hash:""}))}function tk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function br(e){return e.type===je.deferred}function fo(e){return e.type===je.error}function Er(e){return(e&&e.type)===je.redirect}function nk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function rk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ok(e){return WS.has(e.toLowerCase())}function Qt(e){return US.has(e.toLowerCase())}async function sh(e,t,n,r,o,i){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!d0(u,l)&&(i&&i[l.route.id])!==void 0;if(br(a)&&(o||c)){let d=r[s];fe(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await p0(a,d,o).then(f=>{f&&(n[s]=f||n[s])})}}}async function p0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:je.data,data:e.deferredData.unwrappedData}}catch(o){return{type:je.error,error:o}}return{type:je.data,data:e.deferredData.data}}}function Gd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function bc(e,t){let n=typeof t=="string"?Ln(t).search:t.search;if(e[e.length-1].route.index&&Gd(n||""))return e[e.length-1];let r=o0(e);return r[r.length-1]}function ah(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:s}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function cu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ik(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ai(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function sk(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function On(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ak(e,t){try{let n=e.sessionStorage.getItem(c0);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function lk(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(c0,JSON.stringify(n))}catch(r){Mo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}const hl=w.createContext(null),h0=w.createContext(null),ml=w.createContext(null),gl=w.createContext(null),Ho=w.createContext({outlet:null,matches:[],isDataRoute:!1}),m0=w.createContext(null);function vl(){return w.useContext(gl)!=null}function g0(){return vl()||fe(!1),w.useContext(gl).location}function v0(e){w.useContext(ml).static||w.useLayoutEffect(e)}function y0(){let{isDataRoute:e}=w.useContext(Ho);return e?wk():uk()}function uk(){vl()||fe(!1);let e=w.useContext(hl),{basename:t,future:n,navigator:r}=w.useContext(ml),{matches:o}=w.useContext(Ho),{pathname:i}=g0(),s=JSON.stringify(i0(o,n.v7_relativeSplatPath)),a=w.useRef(!1);return v0(()=>{a.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=s0(u,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:tr([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,i,e])}function ck(e,t,n,r){vl()||fe(!1);let{navigator:o}=w.useContext(ml),{matches:i}=w.useContext(Ho),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=g0(),c;if(t){var d;let S=typeof t=="string"?Ln(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||fe(!1),c=S}else c=u;let f=c.pathname||"/",g=f;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=co(e,{pathname:g}),y=mk(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:tr([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:tr([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&y?w.createElement(gl.Provider,{value:{location:Xi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ne.Pop}},y):y}function dk(){let e=xk(),t=a0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const fk=w.createElement(dk,null);class pk extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Ho.Provider,{value:this.props.routeContext},w.createElement(m0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hk(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(hl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ho.Provider,{value:t},r)}function mk(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||fe(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:g}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let g,v=!1,y=null,S=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||fk,l&&(u<0&&f===0?(Sk("route-fallback",!1),v=!0,S=null):u===f&&(v=!0,S=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,f+1)),p=()=>{let m;return g?m=y:v?m=S:d.route.Component?m=w.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,w.createElement(hk,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(pk,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var x0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(x0||{}),Va=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Va||{});function gk(e){let t=w.useContext(hl);return t||fe(!1),t}function vk(e){let t=w.useContext(h0);return t||fe(!1),t}function yk(e){let t=w.useContext(Ho);return t||fe(!1),t}function w0(e){let t=yk(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function xk(){var e;let t=w.useContext(m0),n=vk(Va.UseRouteError),r=w0(Va.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wk(){let{router:e}=gk(x0.UseNavigateStable),t=w0(Va.UseNavigateStable),n=w.useRef(!1);return v0(()=>{n.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Xi({fromRouteId:t},i)))},[e,t])}const lh={};function Sk(e,t,n){!t&&!lh[e]&&(lh[e]=!0)}function kk(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ne.Pop,navigator:i,static:s=!1,future:a}=e;vl()&&fe(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:i,static:s,future:Xi({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=Ln(r));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,y=w.useMemo(()=>{let S=cs(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:v},navigationType:o}},[l,c,d,f,g,v,o]);return y==null?null:w.createElement(ml.Provider,{value:u},w.createElement(gl.Provider,{children:n,value:y}))}new Promise(()=>{});function bk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:w.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}const Ek="6";try{window.__reactRouterVersion=Ek}catch{}function Ak(e,t){return XS({basename:t==null?void 0:t.basename,future:Oa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:xS({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Ck(),routes:e,mapRouteProperties:bk,window:t==null?void 0:t.window}).initialize()}function Ck(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Oa({},t,{errors:Tk(t.errors)})),t}function Tk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Qd(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let s=new i(o.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const Pk=w.createContext({isTransitioning:!1}),Rk=w.createContext(new Map),Dk="startTransition",uh=ax[Dk],$k="flushSync",ch=yS[$k];function Lk(e){uh?uh(e):e()}function li(e){ch?ch(e):e()}class Mk{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Ik(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=w.useState(n.state),[s,a]=w.useState(),[l,u]=w.useState({isTransitioning:!1}),[c,d]=w.useState(),[f,g]=w.useState(),[v,y]=w.useState(),S=w.useRef(new Map),{v7_startTransition:h}=r||{},p=w.useCallback(b=>{h?Lk(b):b()},[h]),m=w.useCallback((b,P)=>{let{deletedFetchers:L,unstable_flushSync:_,unstable_viewTransitionOpts:G}=P;L.forEach(re=>S.current.delete(re)),b.fetchers.forEach((re,te)=>{re.data!==void 0&&S.current.set(te,re.data)});let K=n.window==null||typeof n.window.document.startViewTransition!="function";if(!G||K){_?li(()=>i(b)):p(()=>i(b));return}if(_){li(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:G.currentLocation,nextLocation:G.nextLocation})});let re=n.window.document.startViewTransition(()=>{li(()=>i(b))});re.finished.finally(()=>{li(()=>{d(void 0),g(void 0),a(void 0),u({isTransitioning:!1})})}),li(()=>g(re));return}f?(c&&c.resolve(),f.skipTransition(),y({state:b,currentLocation:G.currentLocation,nextLocation:G.nextLocation})):(a(b),u({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}))},[n.window,f,c,S,p]);w.useLayoutEffect(()=>n.subscribe(m),[n,m]),w.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new Mk)},[l]),w.useEffect(()=>{if(c&&s&&n.window){let b=s,P=c.promise,L=n.window.document.startViewTransition(async()=>{p(()=>i(b)),await P});L.finished.finally(()=>{d(void 0),g(void 0),a(void 0),u({isTransitioning:!1})}),g(L)}},[p,s,c,n.window]),w.useEffect(()=>{c&&s&&o.location.key===s.location.key&&c.resolve()},[c,f,o.location,s]),w.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),y(void 0))},[l.isTransitioning,v]),w.useEffect(()=>{},[]);let k=w.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,P,L)=>n.navigate(b,{state:P,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(b,P,L)=>n.navigate(b,{replace:!0,state:P,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),A=n.basename||"/",x=w.useMemo(()=>({router:n,navigator:k,static:!1,basename:A}),[n,k,A]);return w.createElement(w.Fragment,null,w.createElement(hl.Provider,{value:x},w.createElement(h0.Provider,{value:o},w.createElement(Rk.Provider,{value:S.current},w.createElement(Pk.Provider,{value:l},w.createElement(kk,{basename:A,location:o.location,navigationType:o.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?w.createElement(jk,{routes:n.routes,future:n.future,state:o}):t))))),null)}function jk(e){let{routes:t,future:n,state:r}=e;return ck(t,void 0,r,n)}var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var fh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fh||(fh={}));var qe=function(){return qe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qe.apply(this,arguments)};function Zi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Ce="-ms-",Ti="-moz-",ye="-webkit-",S0="comm",yl="rule",Kd="decl",Vk="@import",k0="@keyframes",Ok="@layer",b0=Math.abs,Yd=String.fromCharCode,Ec=Object.assign;function _k(e,t){return Ze(e,0)^45?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function E0(e){return e.trim()}function vn(e,t){return(e=t.exec(e))?e[0]:e}function ue(e,t,n){return e.replace(t,n)}function oa(e,t,n){return e.indexOf(t,n)}function Ze(e,t){return e.charCodeAt(t)|0}function Io(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function A0(e){return e.length}function mi(e,t){return t.push(e),e}function Fk(e,t){return e.map(t).join("")}function ph(e,t){return e.filter(function(n){return!vn(n,t)})}var xl=1,jo=1,C0=0,Bt=0,ze=0,Wo="";function wl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:xl,column:jo,length:s,return:"",siblings:a}}function _n(e,t){return Ec(wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xr(e){for(;e.root;)e=_n(e.root,{children:[e]});mi(e,e.siblings)}function Nk(){return ze}function Bk(){return ze=Bt>0?Ze(Wo,--Bt):0,jo--,ze===10&&(jo=1,xl--),ze}function Xt(){return ze=Bt<C0?Ze(Wo,Bt++):0,jo++,ze===10&&(jo=1,xl++),ze}function Dr(){return Ze(Wo,Bt)}function ia(){return Bt}function Sl(e,t){return Io(Wo,e,t)}function Ac(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zk(e){return xl=jo=1,C0=rn(Wo=e),Bt=0,[]}function Uk(e){return Wo="",e}function du(e){return E0(Sl(Bt-1,Cc(e===91?e+2:e===40?e+1:e)))}function Hk(e){for(;(ze=Dr())&&ze<33;)Xt();return Ac(e)>2||Ac(ze)>3?"":" "}function Wk(e,t){for(;--t&&Xt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Sl(e,ia()+(t<6&&Dr()==32&&Xt()==32))}function Cc(e){for(;Xt();)switch(ze){case e:return Bt;case 34:case 39:e!==34&&e!==39&&Cc(ze);break;case 40:e===41&&Cc(e);break;case 92:Xt();break}return Bt}function Qk(e,t){for(;Xt()&&e+ze!==57;)if(e+ze===84&&Dr()===47)break;return"/*"+Sl(t,Bt-1)+"*"+Yd(e===47?e:Xt())}function Gk(e){for(;!Ac(Dr());)Xt();return Sl(e,Bt)}function Kk(e){return Uk(sa("",null,null,null,[""],e=zk(e),0,[0],e))}function sa(e,t,n,r,o,i,s,a,l){for(var u=0,c=0,d=s,f=0,g=0,v=0,y=1,S=1,h=1,p=0,m="",k=o,A=i,x=r,b=m;S;)switch(v=p,p=Xt()){case 40:if(v!=108&&Ze(b,d-1)==58){oa(b+=ue(du(p),"&","&\f"),"&\f",b0(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=du(p);break;case 9:case 10:case 13:case 32:b+=Hk(v);break;case 92:b+=Wk(ia()-1,7);continue;case 47:switch(Dr()){case 42:case 47:mi(Yk(Qk(Xt(),ia()),t,n,l),l);break;default:b+="/"}break;case 123*y:a[u++]=rn(b)*h;case 125*y:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:h==-1&&(b=ue(b,/\f/g,"")),g>0&&rn(b)-d&&mi(g>32?mh(b+";",r,n,d-1,l):mh(ue(b," ","")+";",r,n,d-2,l),l);break;case 59:b+=";";default:if(mi(x=hh(b,t,n,u,c,o,a,m,k=[],A=[],d,i),i),p===123)if(c===0)sa(b,t,x,x,k,i,d,a,A);else switch(f===99&&Ze(b,3)===110?100:f){case 100:case 108:case 109:case 115:sa(e,x,x,r&&mi(hh(e,x,x,0,0,o,a,m,o,k=[],d,A),A),o,A,d,a,r?k:A);break;default:sa(b,x,x,x,[""],A,0,a,A)}}u=c=g=0,y=h=1,m=b="",d=s;break;case 58:d=1+rn(b),g=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&Bk()==125)continue}switch(b+=Yd(p),p*y){case 38:h=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(rn(b)-1)*h,h=1;break;case 64:Dr()===45&&(b+=du(Xt())),f=Dr(),c=d=rn(m=b+=Gk(ia())),p++;break;case 45:v===45&&rn(b)==2&&(y=0)}}return i}function hh(e,t,n,r,o,i,s,a,l,u,c,d){for(var f=o-1,g=o===0?i:[""],v=A0(g),y=0,S=0,h=0;y<r;++y)for(var p=0,m=Io(e,f+1,f=b0(S=s[y])),k=e;p<v;++p)(k=E0(S>0?g[p]+" "+m:ue(m,/&\f/g,g[p])))&&(l[h++]=k);return wl(e,t,n,o===0?yl:a,l,u,c,d)}function Yk(e,t,n,r){return wl(e,t,n,S0,Yd(Nk()),Io(e,2,-2),0,r)}function mh(e,t,n,r,o){return wl(e,t,n,Kd,Io(e,0,r),Io(e,r+1,-1),r,o)}function T0(e,t,n){switch(_k(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+e+e;case 4789:return Ti+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+Ti+e+Ce+e+e;case 5936:switch(Ze(e,t+11)){case 114:return ye+e+Ce+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+Ce+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+Ce+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ye+e+Ce+e+e;case 6165:return ye+e+Ce+"flex-"+e+e;case 5187:return ye+e+ue(e,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return ye+e+Ce+"flex-item-"+ue(e,/flex-|-self/g,"")+(vn(e,/flex-|baseline/)?"":Ce+"grid-row-"+ue(e,/flex-|-self/g,""))+e;case 4675:return ye+e+Ce+"flex-line-pack"+ue(e,/align-content|flex-|-self/g,"")+e;case 5548:return ye+e+Ce+ue(e,"shrink","negative")+e;case 5292:return ye+e+Ce+ue(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+ue(e,"-grow","")+ye+e+Ce+ue(e,"grow","positive")+e;case 4554:return ye+ue(e,/([^-])(transform)/g,"$1"+ye+"$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+e+e;case 4200:if(!vn(e,/flex-|baseline/))return Ce+"grid-column-align"+Io(e,t)+e;break;case 2592:case 3360:return Ce+ue(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vn(r.props,/grid-\w+-end/)})?~oa(e+(n=n[t].value),"span",0)?e:Ce+ue(e,"-start","")+e+Ce+"grid-row-span:"+(~oa(n,"span",0)?vn(n,/\d+/):+vn(n,/\d+/)-+vn(e,/\d+/))+";":Ce+ue(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vn(r.props,/grid-\w+-start/)})?e:Ce+ue(ue(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(Ze(e,t+4)!==45)break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Ti+(Ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~oa(e,"stretch",0)?T0(ue(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ue(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,l,u){return Ce+o+":"+i+u+(s?Ce+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(Ze(e,t+6)===121)return ue(e,":",":"+ye)+e;break;case 6444:switch(Ze(e,Ze(e,14)===45?18:11)){case 120:return ue(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Ze(e,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ce+"$2box$3")+e;case 100:return ue(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(e,"scroll-","scroll-snap-")+e}return e}function _a(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Xk(e,t,n,r){switch(e.type){case Ok:if(e.children.length)break;case Vk:case Kd:return e.return=e.return||e.value;case S0:return"";case k0:return e.return=e.value+"{"+_a(e.children,r)+"}";case yl:if(!rn(e.value=e.props.join(",")))return""}return rn(n=_a(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zk(e){var t=A0(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function qk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Jk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Kd:e.return=T0(e.value,e.length,n);return;case k0:return _a([_n(e,{value:ue(e.value,"@","@"+ye)})],r);case yl:if(e.length)return Fk(n=e.props,function(o){switch(vn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xr(_n(e,{props:[ue(o,/:(read-\w+)/,":"+Ti+"$1")]})),Xr(_n(e,{props:[o]})),Ec(e,{props:ph(n,r)});break;case"::placeholder":Xr(_n(e,{props:[ue(o,/:(plac\w+)/,":"+ye+"input-$1")]})),Xr(_n(e,{props:[ue(o,/:(plac\w+)/,":"+Ti+"$1")]})),Xr(_n(e,{props:[ue(o,/:(plac\w+)/,Ce+"input-$1")]})),Xr(_n(e,{props:[o]})),Ec(e,{props:ph(n,r)});break}return""})}}var eb={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},Vo=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",P0="active",R0="data-styled-version",kl="6.1.8",Xd=`/*!sc*/
`,Zd=typeof window<"u"&&"HTMLElement"in window,tb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),nb={},bl=Object.freeze([]),Oo=Object.freeze({});function D0(e,t,n){return n===void 0&&(n=Oo),e.theme!==n.theme&&e.theme||t||n.theme}var $0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ob=/(^-|-$)/g;function gh(e){return e.replace(rb,"-").replace(ob,"")}var ib=/(a)(d)/gi,Os=52,vh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Tc(e){var t,n="";for(t=Math.abs(e);t>Os;t=t/Os|0)n=vh(t%Os)+n;return(vh(t%Os)+n).replace(ib,"$1-$2")}var fu,L0=5381,po=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},M0=function(e){return po(L0,e)};function I0(e){return Tc(M0(e)>>>0)}function sb(e){return e.displayName||e.name||"Component"}function pu(e){return typeof e=="string"&&!0}var j0=typeof Symbol=="function"&&Symbol.for,V0=j0?Symbol.for("react.memo"):60115,ab=j0?Symbol.for("react.forward_ref"):60112,lb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ub={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cb=((fu={})[ab]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fu[V0]=O0,fu);function yh(e){return("type"in(t=e)&&t.type.$$typeof)===V0?O0:"$$typeof"in e?cb[e.$$typeof]:lb;var t}var db=Object.defineProperty,fb=Object.getOwnPropertyNames,xh=Object.getOwnPropertySymbols,pb=Object.getOwnPropertyDescriptor,hb=Object.getPrototypeOf,wh=Object.prototype;function _0(e,t,n){if(typeof t!="string"){if(wh){var r=hb(t);r&&r!==wh&&_0(e,r,n)}var o=fb(t);xh&&(o=o.concat(xh(t)));for(var i=yh(e),s=yh(t),a=0;a<o.length;++a){var l=o[a];if(!(l in ub||n&&n[l]||s&&l in s||i&&l in i)){var u=pb(t,l);try{db(e,l,u)}catch{}}}}return e}function _r(e){return typeof e=="function"}function qd(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rc(e,t,n){if(n===void 0&&(n=!1),!n&&!qi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rc(e[r],t[r]);else if(qi(t))for(var r in t)e[r]=Rc(e[r],t[r]);return e}function Jd(e,t){Object.defineProperty(e,"toString",{value:t})}function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Fr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Xd);return n},e}(),aa=new Map,Fa=new Map,la=1,_s=function(e){if(aa.has(e))return aa.get(e);for(;Fa.has(la);)la++;var t=la++;return aa.set(e,t),Fa.set(t,e),t},gb=function(e,t){la=t+1,aa.set(e,t),Fa.set(t,e)},vb="style[".concat(Vo,"][").concat(R0,'="').concat(kl,'"]'),yb=new RegExp("^".concat(Vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xb=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},wb=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xd),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var l=a.match(yb);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(gb(c,u),xb(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Sb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var F0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vo,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vo,P0),r.setAttribute(R0,kl);var s=Sb();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},kb=function(){function e(t){this.element=F0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bb=function(){function e(t){this.element=F0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Eb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sh=Zd,Ab={isServer:!Zd,useCSSOMInjection:!tb},Na=function(){function e(t,n,r){t===void 0&&(t=Oo),n===void 0&&(n={});var o=this;this.options=qe(qe({},Ab),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zd&&Sh&&(Sh=!1,function(i){for(var s=document.querySelectorAll(vb),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Vo)!==P0&&(wb(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Jd(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(d){var f=function(h){return Fa.get(h)}(d);if(f===void 0)return"continue";var g=i.names.get(f),v=s.getGroup(d);if(g===void 0||v.length===0)return"continue";var y="".concat(Vo,".g").concat(d,'[id="').concat(f,'"]'),S="";g!==void 0&&g.forEach(function(h){h.length>0&&(S+="".concat(h,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(Xd)},c=0;c<a;c++)u(c);return l}(o)})}return e.registerId=function(t){return _s(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(qe(qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Eb(o):r?new kb(o):new bb(o)}(this.options),new mb(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_s(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_s(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_s(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cb=/&/g,Tb=/^\s*\/\/.*$/gm;function N0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=N0(n.children,t)),n})}function Pb(e){var t,n,r,o=e===void 0?Oo:e,i=o.options,s=i===void 0?Oo:i,a=o.plugins,l=a===void 0?bl:a,u=function(f,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===yl&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Cb,n).replace(r,u))}),s.prefix&&c.push(Jk),c.push(Xk);var d=function(f,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(Tb,""),h=Kk(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);s.namespace&&(h=N0(h,s.namespace));var p=[];return _a(h,Zk(c.concat(qk(function(m){return p.push(m)})))),p};return d.hash=l.length?l.reduce(function(f,g){return g.name||Fr(15),po(f,g.name)},L0).toString():"",d}var Rb=new Na,Dc=Pb(),B0=C.createContext({shouldForwardProp:void 0,styleSheet:Rb,stylis:Dc});B0.Consumer;C.createContext(void 0);function $c(){return w.useContext(B0)}var Db=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Dc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Jd(this,function(){throw Fr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Dc),this.name+t.hash},e}(),$b=function(e){return e>="A"&&e<="Z"};function kh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;$b(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z0=function(e){return e==null||e===!1||e===""},U0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!z0(i)&&(Array.isArray(i)&&i.isCss||_r(i)?r.push("".concat(kh(o),":"),i,";"):qi(i)?r.push.apply(r,Zi(Zi(["".concat(o," {")],U0(i),!1),["}"],!1)):r.push("".concat(kh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in eb||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function nr(e,t,n,r){if(z0(e))return[];if(qd(e))return[".".concat(e.styledComponentId)];if(_r(e)){if(!_r(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return nr(o,t,n,r)}var i;return e instanceof Db?n?(e.inject(n,r),[e.getName(r)]):[e]:qi(e)?U0(e):Array.isArray(e)?Array.prototype.concat.apply(bl,e.map(function(s){return nr(s,t,n,r)})):[e.toString()]}function H0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_r(n)&&!qd(n))return!1}return!0}var Lb=M0(kl),Mb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&H0(t),this.componentId=n,this.baseHash=po(Lb,n),this.baseStyle=r,Na.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ar(o,this.staticRulesId);else{var i=Pc(nr(this.rules,t,n,r)),s=Tc(po(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Ar(o,s),this.staticRulesId=s}else{for(var l=po(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Pc(nr(d,t,n,r));l=po(l,f+c),u+=f}}if(u){var g=Tc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),o=Ar(o,g)}}return o},e}(),Ji=C.createContext(void 0);Ji.Consumer;function Ib(e){var t=C.useContext(Ji),n=w.useMemo(function(){return function(r,o){if(!r)throw Fr(14);if(_r(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Fr(8);return o?qe(qe({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?C.createElement(Ji.Provider,{value:n},e.children):null}var hu={};function jb(e,t,n){var r=qd(e),o=e,i=!pu(e),s=t.attrs,a=s===void 0?bl:s,l=t.componentId,u=l===void 0?function(k,A){var x=typeof k!="string"?"sc":gh(k);hu[x]=(hu[x]||0)+1;var b="".concat(x,"-").concat(I0(kl+x+hu[x]));return A?"".concat(A,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(k){return pu(k)?"styled.".concat(k):"Styled(".concat(sb(k),")")}(e):c,f=t.displayName&&t.componentId?"".concat(gh(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(k,A){return y(k,A)&&S(k,A)}}else v=y}var h=new Mb(n,f,r?o.componentStyle:void 0);function p(k,A){return function(x,b,P){var L=x.attrs,_=x.componentStyle,G=x.defaultProps,K=x.foldedComponentIds,re=x.styledComponentId,te=x.target,he=C.useContext(Ji),ae=$c(),q=x.shouldForwardProp||ae.shouldForwardProp,D=D0(b,he,G)||Oo,V=function(oe,Q,ie){for(var Ie,I=qe(qe({},Q),{className:void 0,theme:ie}),ne=0;ne<oe.length;ne+=1){var H=_r(Ie=oe[ne])?Ie(I):Ie;for(var ce in H)I[ce]=ce==="className"?Ar(I[ce],H[ce]):ce==="style"?qe(qe({},I[ce]),H[ce]):H[ce]}return Q.className&&(I.className=Ar(I.className,Q.className)),I}(L,b,D),B=V.as||te,F={};for(var Z in V)V[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&V.theme===D||(Z==="forwardedAs"?F.as=V.forwardedAs:q&&!q(Z,B)||(F[Z]=V[Z]));var Y=function(oe,Q){var ie=$c(),Ie=oe.generateAndInjectStyles(Q,ie.styleSheet,ie.stylis);return Ie}(_,V),U=Ar(K,re);return Y&&(U+=" "+Y),V.className&&(U+=" "+V.className),F[pu(B)&&!$0.has(B)?"class":"className"]=U,F.ref=P,w.createElement(B,F)}(m,k,A)}p.displayName=d;var m=C.forwardRef(p);return m.attrs=g,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=v,m.foldedComponentIds=r?Ar(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=f,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(A){for(var x=[],b=1;b<arguments.length;b++)x[b-1]=arguments[b];for(var P=0,L=x;P<L.length;P++)Rc(A,L[P],!0);return A}({},o.defaultProps,k):k}}),Jd(m,function(){return".".concat(m.styledComponentId)}),i&&_0(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function bh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Eh=function(e){return Object.assign(e,{isCss:!0})};function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(_r(e)||qi(e))return Eh(nr(bh(bl,Zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?nr(r):Eh(nr(bh(r,t)))}function Lc(e,t,n){if(n===void 0&&(n=Oo),!t)throw Fr(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,N.apply(void 0,Zi([o],i,!1)))};return r.attrs=function(o){return Lc(e,t,qe(qe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Lc(e,t,qe(qe({},n),o))},r}var W0=function(e){return Lc(jb,e)},$=W0;$0.forEach(function(e){$[e]=W0(e)});var Vb=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=H0(t),Na.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Pc(nr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Na.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Ob(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=N.apply(void 0,Zi([e],t,!1)),o="sc-global-".concat(I0(JSON.stringify(r))),i=new Vb(r,o),s=function(l){var u=$c(),c=C.useContext(Ji),d=C.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),C.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(i.isStatic)i.renderStyles(l,nb,c,f);else{var g=qe(qe({},u),{theme:D0(u,d,s.defaultProps)});i.renderStyles(l,g,c,f)}}return C.memo(s)}const _b="/assets/ms_sans_serif-Du8rjN1q.woff2",Fb="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Q0=Ob`
    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${_b}') format('woff2');
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${Fb}') format('woff2');
        font-weight: bold;
        font-style: normal
    }
    
    body, input, select, textarea {
        font-family: 'ms_sans_serif';
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }

    body {
        background-color: #C6C6C6;
    }
`,Nb=$.header`
  #container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    nav {
      display: none;
    }

    button {
      background: none;
      border: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    #container {
      margin-top: 2rem;
      
      nav {
        display: flex;

        ul {
          display: flex;

          li {
            list-style-type: none;
            margin: 0 1rem;
            a {
              text-decoration: none;
            }
          }
        }
      }

      button {
        display: none;
      }
    }
  }
`,ef="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",tf="inset 2px 2px 3px rgba(0,0,0,0.2)",qt=()=>N`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Jt=({background:e="material",color:t="materialText"}={})=>N`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,ds=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>N`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Nr=()=>N`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Zr={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Bb=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?ef:!1,o?tf:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),_e=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return N`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Zr[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Zr[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Zr[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Zr[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Bb({theme:r,topLeftInner:Zr[t][n.topLeftInner],bottomRightInner:Zr[t][n.bottomRightInner],hasShadow:o})};
  `},_o=()=>N`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,zb=e=>Buffer.from(e).toString("base64"),Ub=typeof btoa<"u"?btoa:zb,Fs=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ub(n)})`},nf=(e="default")=>N`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>ds({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Jt()}
    ${e==="flat"?Nr():_e({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Jt()}
    ${e==="flat"?Nr():_e({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?_e({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Fs(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Fs(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Fs(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Fs(t.materialText,0)};
  }
`,Hb=$.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,ln=w.forwardRef(({children:e,underline:t=!0,...n},r)=>C.createElement(Hb,{ref:r,underline:t,...n},e));ln.displayName="Anchor";const Wb=$.header`
  ${_e()};
  ${Jt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Qb=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>C.createElement(Wb,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Qb.displayName="AppBar";const Ur=()=>{};function Cr(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Gb(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ah(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Gb(t)))}function ir(e){return typeof e=="number"?`${e}px`:e}const Kb=$.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Yb=$.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,G0=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...s},a)=>C.createElement(Kb,{noBorder:n,ref:a,size:ir(r),square:o,src:i,...s},i?C.createElement(Yb,{src:i,alt:e}):t));G0.displayName="Avatar";const ot={sm:"28px",md:"36px",lg:"44px"},Xb=N`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>ot[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?ot[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,El=$.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?N`
          ${Nr()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&_o}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?N`
          ${Jt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&_e({style:"buttonThin"})}
          }
          &:active {
            ${!t&&_e({style:"buttonThinPressed"})}
          }
          ${e&&_e({style:"buttonThinPressed"})}
          ${t&&qt()}
        `:N`
          ${Jt()};
          border: none;
          ${t&&qt()}
          ${e?ds({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?N`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:N`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${_e(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&_e({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&_o}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Xb}
`,es=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:s=!1,active:a=!1,onTouchStart:l=Ur,primary:u=!1,variant:c="default",...d},f)=>C.createElement(El,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:l,primary:u,ref:f,size:i,square:s,type:r,variant:c,...d},n));es.displayName="Button";function sr({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const s=o!==void 0,[a,l]=w.useState(e),u=w.useCallback(c=>{s||l(c)},[s]);if(s&&typeof t!="function"&&!r){const c=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(c)}return[s?o:a,u]}const Mc=$.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>ot[e.size]};
  width: ${e=>e.square?ot[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>ot[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&qt()}
`,Zb=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...s},a)=>C.createElement(Mc,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:a,"aria-disabled":t,...s},r));Zb.displayName="MenuListItem";const qb=$.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${_e({style:"window"})}
  ${Jt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;qb.displayName="MenuList";const cn=20,Ba=$.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${cn}px;
  height: ${cn}px;
  opacity: 0;
  z-index: -1;
`,rf=$.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&qt()}

  ${Mc} & {
    margin: 0;
    height: 100%;
  }
  ${Mc}:hover & {
    ${({$disabled:e,theme:t})=>!e&&N`
        color: ${t.materialTextInvert};
      `};
  }
`,of=$.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ba}:focus ~ & {
    ${_o}
  }
  ${Ba}:not(:disabled) ~ &:active {
    ${_o}
  }
`,dn=$.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${tf};`}
  }
`,Jb=$.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${nf()}
`,K0=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>C.createElement(dn,{ref:r,shadow:t,...n},C.createElement(Jb,null,e)));K0.displayName="ScrollView";const Y0=N`
  width: ${cn}px;
  height: ${cn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,eE=$(dn)`
  ${Y0}
  width: ${cn}px;
  height: ${cn}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,tE=$.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Y0}
  width: ${cn-4}px;
  height: ${cn-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,nE=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,rE=$.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>ds({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,oE={flat:tE,default:eE},iE=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:s=Ur,style:a={},value:l,variant:u="default",...c},d)=>{var f;const[g,v]=sr({defaultValue:n,onChange:s,readOnly:(f=c.readOnly)!==null&&f!==void 0?f:r,value:e}),y=w.useCallback(p=>{const m=p.target.checked;v(m),s(p)},[s,v]),S=oE[u];let h=null;return o?h=rE:g&&(h=nE),C.createElement(rf,{$disabled:r,className:t,style:a},C.createElement(Ba,{disabled:r,onChange:r?void 0:y,readOnly:r,type:"checkbox",value:l,checked:g,"data-indeterminate":o,ref:d,...c}),C.createElement(S,{$disabled:r,role:"presentation"},h&&C.createElement(h,{$disabled:r,variant:u})),i&&C.createElement(of,null,i))});iE.displayName="Checkbox";const X0=$.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${ir(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${ir(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;X0.displayName="Separator";const sE=$(El)`
  padding-left: 8px;
`,aE=$(X0)`
  height: 21px;
  position: relative;
  top: 0;
`,Z0=$.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,lE=$.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?N`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:N`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${Z0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${_o}
    outline-offset: -8px;
  }
`,uE=$.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?N`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:N`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,cE=w.forwardRef(({value:e,defaultValue:t,onChange:n=Ur,disabled:r=!1,variant:o="default",...i},s)=>{var a;const[l,u]=sr({defaultValue:t,onChange:n,readOnly:(a=i.readOnly)!==null&&a!==void 0?a:r,value:e}),c=d=>{const f=d.target.value;u(f),n(d)};return C.createElement(sE,{disabled:r,as:"div",variant:o,size:"md"},C.createElement(Z0,{onChange:c,readOnly:r,disabled:r,value:l??"#008080",type:"color",ref:s,...i}),C.createElement(lE,{$disabled:r,color:l??"#008080",role:"presentation"}),o==="default"&&C.createElement(aE,{orientation:"vertical"}),C.createElement(uE,{$disabled:r,variant:o}))});cE.displayName="ColorInput";const dE=$.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>N`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${ds({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Ch=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],fE=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function pE({digit:e=0,pixelSize:t=2,...n}){const r=fE[Number(e)].map((o,i)=>o?`${Ch[i]} active`:Ch[i]);return C.createElement(dE,{pixelSize:t,...n},r.map((o,i)=>C.createElement("span",{className:o,key:i})))}const hE=$.div`
  ${_e({style:"status"})}
  display: inline-flex;
  background: #000000;
`,mE={sm:1,md:2,lg:3,xl:4},gE=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return C.createElement(hE,{ref:o,...r},i.map((s,a)=>C.createElement(pE,{digit:s,pixelSize:mE[n],key:a})))});gE.displayName="Counter";const q0=N`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${ot.md};
`,vE=$(dn).attrs({"data-testid":"variant-default"})`
  ${q0}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,yE=$.div.attrs({"data-testid":"variant-flat"})`
  ${Nr()}
  ${q0}
  position: relative;
`,J0=N`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&qt()}
`,xE=$.input`
  ${J0}
  padding: 0 8px;
`,wE=$.textarea`
  ${J0}
  padding: 8px;
  resize: none;
  ${({variant:e})=>nf(e)}
`,ey=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Ur,shadow:o=!0,style:i,variant:s="default",...a},l)=>{const u=s==="flat"?yE:vE,c=w.useMemo(()=>{var d;return a.multiline?C.createElement(wE,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:l,variant:s,...a}):C.createElement(xE,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:l,type:(d=a.type)!==null&&d!==void 0?d:"text",variant:s,...a})},[t,r,a,l,s]);return C.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},c)});ey.displayName="TextInput";const SE=$.div`
  display: inline-flex;
  align-items: center;
`,Ic=$(es)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?N`
          height: calc(50% - 1px);
        `:N`
          height: 50%;
        `}
`,kE=$.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?N`
          height: calc(${ot.md} - 4px);
        `:N`
          height: ${ot.md};
          margin-left: 2px;
        `}
`,Th=$.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?N`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:N`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Ic}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?N`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:N`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,ty=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:s,step:a=1,style:l,value:u,variant:c="default",width:d,...f},g)=>{const[v,y]=sr({defaultValue:t,onChange:i,readOnly:s,value:u}),S=w.useCallback(x=>{const b=parseFloat(x.target.value);y(b)},[y]),h=w.useCallback(x=>{const b=Cr(parseFloat(((v??0)+x).toFixed(2)),o??null,r??null);y(b),i==null||i(b)},[r,o,i,y,v]),p=w.useCallback(()=>{v!==void 0&&(i==null||i(v))},[i,v]),m=w.useCallback(()=>{h(a)},[h,a]),k=w.useCallback(()=>{h(-a)},[h,a]),A=c==="flat"?"flat":"raised";return C.createElement(SE,{className:e,style:{...l,width:d!==void 0?ir(d):"auto"},...f},C.createElement(ey,{value:v,variant:c,onChange:S,disabled:n,type:"number",readOnly:s,ref:g,fullWidth:!0,onBlur:p}),C.createElement(kE,{variant:c},C.createElement(Ic,{"data-testid":"increment",variant:A,disabled:n||s,onClick:m},C.createElement(Th,{invert:!0})),C.createElement(Ic,{"data-testid":"decrement",variant:A,disabled:n||s,onClick:k},C.createElement(Th,null))))});ty.displayName="NumberInput";function bE(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const ny=e=>w.useMemo(()=>e??bE(),[e]),ry=N`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,oy=N`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,sf=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,EE=$.div`
  ${ry}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${sf}:focus & {
    ${oy}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,iy=N`
  height: ${ot.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?qt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,AE=$(dn)`
  ${iy}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,CE=$.div`
  ${Nr()}
  ${iy}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,TE=$.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${ry}
  cursor: pointer;
  &:disabled {
    ${qt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,sy=$(El).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?N`
          height: 100%;
          margin-right: 0;
        `:N`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,PE=$.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${sy}:active & {
    margin-top: 2px;
  }
`,RE=$.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${ef};
  ${({variant:e="default"})=>e==="flat"?N`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:N`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>nf(e)}
`,DE=$.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ot.md} - 4px);
  line-height: calc(${ot.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?oy:""}
  user-select: none;
`,$E=[],ay=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=$E,readOnly:s,style:a,value:l,variant:u,width:c})=>{var d;const f=w.useMemo(()=>i.filter(Boolean),[i]),[g,v]=sr({defaultValue:t??((d=f==null?void 0:f[0])===null||d===void 0?void 0:d.value),onChange:o,readOnly:s,value:l}),y=!(n||s),S=w.useMemo(()=>({className:e,style:{...a,width:c}}),[e,a,c]),h=w.useMemo(()=>C.createElement(sy,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},C.createElement(PE,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),p=w.useMemo(()=>u==="flat"?CE:AE,[u]);return w.useMemo(()=>({isEnabled:y,options:f,value:g,setValue:v,wrapperProps:S,DropdownButton:h,Wrapper:p}),[h,p,y,f,v,g,S])},LE={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},ME=1e3,IE=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:s,open:a,options:l,readOnly:u,value:c,selectRef:d,setValue:f,wrapperRef:g})=>{const v=w.useRef(null),y=w.useRef([]),S=w.useRef(0),h=w.useRef(0),p=w.useRef(),m=w.useRef("search"),k=w.useRef(""),A=w.useRef(),[x,b]=sr({defaultValue:!1,onChange:s,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),P=w.useMemo(()=>{const I=l.findIndex(ne=>ne.value===c);return S.current=Cr(I,0,null),l[I]},[l,c]),[L,_]=w.useState(l[0]),G=w.useCallback(I=>{const ne=v.current,H=y.current[I];if(!H||!ne){p.current=I;return}p.current=void 0;const ce=ne.clientHeight,Se=ne.scrollTop,We=ne.scrollTop+ce,ke=H.offsetTop,mt=H.offsetHeight,zt=H.offsetTop+H.offsetHeight;ke<Se&&ne.scrollTo(0,ke),zt>We&&ne.scrollTo(0,ke-ce+mt),H.focus({preventScroll:!0})},[v]),K=w.useCallback((I,{scroll:ne}={})=>{var H;const ce=l.length-1;let Se;switch(I){case"first":{Se=0;break}case"last":{Se=ce;break}case"next":{Se=Cr(h.current+1,0,ce);break}case"previous":{Se=Cr(h.current-1,0,ce);break}case"selected":{Se=Cr((H=S.current)!==null&&H!==void 0?H:0,0,ce);break}default:Se=I}h.current=Se,_(l[Se]),ne&&G(Se)},[h,l,G]),re=w.useCallback(({fromEvent:I})=>{b(!0),K("selected",{scroll:!0}),s==null||s({fromEvent:I})},[K,s,b]),te=w.useCallback(()=>{m.current="search",k.current="",clearTimeout(A.current)},[]),he=w.useCallback(({focusSelect:I,fromEvent:ne})=>{var H;n==null||n({fromEvent:ne}),b(!1),_(l[0]),te(),p.current=void 0,I&&((H=d.current)===null||H===void 0||H.focus())},[te,n,l,d,b]),ae=w.useCallback(({fromEvent:I})=>{x?he({focusSelect:!1,fromEvent:I}):re({fromEvent:I})},[he,re,x]),q=w.useCallback((I,{fromEvent:ne})=>{S.current!==I&&(S.current=I,f(l[I].value),t==null||t(l[I],{fromEvent:ne}))},[t,l,f]),D=w.useCallback(({focusSelect:I,fromEvent:ne})=>{q(h.current,{fromEvent:ne}),he({focusSelect:I,fromEvent:ne})},[he,q]),V=w.useCallback((I,{fromEvent:ne,select:H})=>{var ce;switch(m.current==="cycleFirstLetter"&&I!==k.current&&(m.current="search"),I===k.current?m.current="cycleFirstLetter":k.current+=I,m.current){case"search":{let Se=l.findIndex(We=>{var ke;return((ke=We.label)===null||ke===void 0?void 0:ke.toLocaleUpperCase().indexOf(k.current))===0});Se<0&&(Se=l.findIndex(We=>{var ke;return((ke=We.label)===null||ke===void 0?void 0:ke.toLocaleUpperCase().indexOf(I))===0}),k.current=I),Se>=0&&(H?q(Se,{fromEvent:ne}):K(Se,{scroll:!0}));break}case"cycleFirstLetter":{const Se=H?(ce=S.current)!==null&&ce!==void 0?ce:-1:h.current;let We=l.findIndex((ke,mt)=>{var zt;return mt>Se&&((zt=ke.label)===null||zt===void 0?void 0:zt.toLocaleUpperCase().indexOf(I))===0});We<0&&(We=l.findIndex(ke=>{var mt;return((mt=ke.label)===null||mt===void 0?void 0:mt.toLocaleUpperCase().indexOf(I))===0})),We>=0&&(H?q(We,{fromEvent:ne}):K(We,{scroll:!0}));break}}clearTimeout(A.current),A.current=setTimeout(()=>{m.current==="search"&&(k.current="")},ME)},[K,l,q]),B=w.useCallback(I=>{var ne;I.button===0&&(I.preventDefault(),(ne=d.current)===null||ne===void 0||ne.focus(),ae({fromEvent:I}),i==null||i(I))},[i,d,ae]),F=w.useCallback(I=>{D({focusSelect:!0,fromEvent:I})},[D]),Z=w.useCallback(I=>{const{altKey:ne,code:H,ctrlKey:ce,metaKey:Se,shiftKey:We}=I,{ARROW_DOWN:ke,ARROW_UP:mt,END:zt,ENTER:fn,ESC:en,HOME:Go,SPACE:pn,TAB:Mn}=LE,Wr=ne||ce||Se||We;if(!(H===Mn&&(ne||ce||Se)||H!==Mn&&Wr))switch(H){case ke:{if(I.preventDefault(),!x){re({fromEvent:I});return}K("next",{scroll:!0});break}case mt:{if(I.preventDefault(),!x){re({fromEvent:I});return}K("previous",{scroll:!0});break}case zt:{if(I.preventDefault(),!x){re({fromEvent:I});return}K("last",{scroll:!0});break}case fn:{if(!x)return;I.preventDefault(),D({focusSelect:!0,fromEvent:I});break}case en:{if(!x)return;I.preventDefault(),he({focusSelect:!0,fromEvent:I});break}case Go:{if(I.preventDefault(),!x){re({fromEvent:I});return}K("first",{scroll:!0});break}case pn:{I.preventDefault(),x?D({focusSelect:!0,fromEvent:I}):re({fromEvent:I});break}case Mn:{if(!x)return;We||I.preventDefault(),D({focusSelect:!We,fromEvent:I});break}default:!Wr&&H.match(/^Key/)&&(I.preventDefault(),I.stopPropagation(),V(H.replace(/^Key/,""),{select:!x,fromEvent:I}))}},[K,he,x,re,V,D]),Y=w.useCallback(I=>{Z(I),o==null||o(I)},[Z,o]),U=w.useCallback(I=>{K(I)},[K]),oe=w.useCallback(I=>{x||(te(),e==null||e(I))},[te,e,x]),Q=w.useCallback(I=>{te(),r==null||r(I)},[te,r]),ie=w.useCallback(I=>{v.current=I,p.current!==void 0&&G(p.current)},[G]),Ie=w.useCallback((I,ne)=>{y.current[ne]=I,p.current===ne&&G(p.current)},[G]);return w.useEffect(()=>{if(!x)return()=>{};const I=ne=>{var H;const ce=ne.target;!((H=g.current)===null||H===void 0)&&H.contains(ce)||(ne.preventDefault(),he({focusSelect:!1,fromEvent:ne}))};return document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[he,x,g]),w.useMemo(()=>({activeOption:L,handleActivateOptionIndex:U,handleBlur:oe,handleButtonKeyDown:Y,handleDropdownKeyDown:Z,handleFocus:Q,handleMouseDown:B,handleOptionClick:F,handleSetDropdownRef:ie,handleSetOptionRef:Ie,open:x,selectedOption:P}),[L,U,oe,Y,Q,Z,B,F,ie,Ie,x,P])},jE=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:s,value:a,variant:l,width:u,...c},d)=>{const{isEnabled:f,options:g,setValue:v,value:y,DropdownButton:S,Wrapper:h}=ay({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:a,variant:l}),p=w.useCallback(m=>{const k=g.find(A=>A.value===m.target.value);k&&(v(k.value),r==null||r(k,{fromEvent:m}))},[r,g,v]);return C.createElement(h,{className:e,style:{...s,width:u}},C.createElement(sf,null,C.createElement(TE,{...c,disabled:n,onChange:f?p:Ur,ref:d,value:y},g.map((m,k)=>{var A;return C.createElement("option",{key:`${m.value}-${k}`,value:m.value},(A=m.label)!==null&&A!==void 0?A:m.value)})),S))});jE.displayName="SelectNative";function VE({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:s}){const a=w.useCallback(()=>{e(n)},[e,n]),l=w.useCallback(c=>{s(c,n)},[n,s]),u=ny();return C.createElement(DE,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:l,role:"option",tabIndex:0},o.label)}function OE({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:s,labelId:a,menuMaxHeight:l,name:u,onBlur:c,onChange:d,onClose:f,onFocus:g,onKeyDown:v,onMouseDown:y,onOpen:S,open:h,options:p,readOnly:m,shadow:k=!0,style:A,variant:x="default",value:b,width:P="auto",...L},_){const{isEnabled:G,options:K,setValue:re,value:te,wrapperProps:he,DropdownButton:ae,Wrapper:q}=ay({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:p,style:A,readOnly:m,value:b,variant:x,width:P}),D=w.useRef(null),V=w.useRef(null),B=w.useRef(null),{activeOption:F,handleActivateOptionIndex:Z,handleBlur:Y,handleButtonKeyDown:U,handleDropdownKeyDown:oe,handleFocus:Q,handleMouseDown:ie,handleOptionClick:Ie,handleSetDropdownRef:I,handleSetOptionRef:ne,open:H,selectedOption:ce}=IE({onBlur:c,onChange:d,onClose:f,onFocus:g,onKeyDown:v,onMouseDown:y,onOpen:S,open:h,options:K,value:te,selectRef:V,setValue:re,wrapperRef:B});w.useImperativeHandle(_,()=>({focus:fn=>{var en;(en=V.current)===null||en===void 0||en.focus(fn)},node:D.current,value:String(te)}),[te]);const Se=w.useMemo(()=>ce?typeof i=="function"?i(ce):ce.label:"",[i,ce]),We=G?1:void 0,ke=w.useMemo(()=>l?{overflow:"auto",maxHeight:l}:void 0,[l]),mt=ny(),zt=w.useMemo(()=>K.map((fn,en)=>{const Go=`${te}-${en}`,pn=fn===F,Mn=fn===ce;return C.createElement(VE,{activateOptionIndex:Z,active:pn,index:en,key:Go,onClick:Ie,option:fn,selected:Mn,setRef:ne})}),[F,Z,Ie,ne,K,ce,te]);return C.createElement(q,{...he,$disabled:o,ref:B,shadow:k,style:{...A,width:P}},C.createElement("input",{name:u,ref:D,type:"hidden",value:String(te),...s}),C.createElement(sf,{"aria-disabled":o,"aria-expanded":H,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":G&&H?mt:void 0,onBlur:Y,onFocus:Q,onKeyDown:U,onMouseDown:G?ie:y,ref:V,role:"button",tabIndex:We,...L},C.createElement(EE,null,Se),ae),G&&H&&C.createElement(RE,{id:mt,onKeyDown:oe,ref:I,role:"listbox",style:ke,tabIndex:0,variant:x},zt))}const ly=w.forwardRef(OE);ly.displayName="Select";const _E=$.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,jc=w.forwardRef(function({children:t,noPadding:n=!1,...r},o){return C.createElement(_E,{noPadding:n,ref:o,...r},t)});jc.displayName="Toolbar";const FE=$.div`
  padding: 16px;
`,uy=w.forwardRef(function({children:t,...n},r){return C.createElement(FE,{ref:r,...n},t)});uy.displayName="WindowContent";const NE=$.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?N`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:N`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${El} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,cy=w.forwardRef(function({active:t=!0,children:n,...r},o){return C.createElement(NE,{active:t,ref:o,...r},n)});cy.displayName="WindowHeader";const BE=$.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${_e({style:"window"})}
  ${Jt()}
`,zE=$.span`
  ${({theme:e})=>N`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,dy=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>C.createElement(BE,{ref:i,shadow:r,...o},e,t&&C.createElement(zE,{"data-testid":"resizeHandle",ref:n})));dy.displayName="Window";const UE=$(K0)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,HE=$.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,WE=$.div`
  display: flex;
  flex-wrap: wrap;
`,mn=$.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,QE=$.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,GE=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function KE(e,t){return new Date(e,t+1,0).getDate()}function YE(e,t,n){return new Date(e,t,n).getDay()}function XE(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const ZE=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[s,a]=w.useState(()=>XE(t)),{year:l,month:u,day:c}=s,d=w.useCallback(({value:S})=>{a(h=>({...h,month:S}))},[]),f=w.useCallback(S=>{a(h=>({...h,year:S}))},[]),g=w.useCallback(S=>{a(h=>({...h,day:S}))},[]),v=w.useCallback(()=>{const S=[s.year,s.month+1,s.day].map(h=>String(h).padStart(2,"0")).join("-");n==null||n(S)},[s.day,s.month,s.year,n]),y=w.useMemo(()=>{const S=Array.from({length:42}),h=YE(l,u,1);let p=c;const m=KE(l,u);return p=p<m?p:m,S.forEach((k,A)=>{if(A>=h&&A<m+h){const x=A-h+1;S[A]=C.createElement(mn,{key:A,onClick:()=>{g(x)}},C.createElement(QE,{active:x===p},x))}else S[A]=C.createElement(mn,{key:A})}),S},[c,g,u,l]);return C.createElement(dy,{className:e,ref:i,shadow:o,style:{margin:20}},C.createElement(cy,null,C.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),C.createElement(uy,null,C.createElement(jc,{noPadding:!0,style:{justifyContent:"space-between"}},C.createElement(ly,{options:GE,value:u,onChange:d,width:128,menuMaxHeight:200}),C.createElement(ty,{value:l,onChange:f,width:100})),C.createElement(UE,null,C.createElement(HE,null,C.createElement(mn,null,"S"),C.createElement(mn,null,"M"),C.createElement(mn,null,"T"),C.createElement(mn,null,"W"),C.createElement(mn,null,"T"),C.createElement(mn,null,"F"),C.createElement(mn,null,"S")),C.createElement(WE,null,y)),C.createElement(jc,{noPadding:!0,style:{justifyContent:"space-between"}},C.createElement(es,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),C.createElement(es,{fullWidth:!0,onClick:n?v:void 0,disabled:!n},"OK"))))});ZE.displayName="DatePicker";const qE=e=>{switch(e){case"status":case"well":return N`
        ${_e({style:"status"})}
      `;case"window":case"outside":return N`
        ${_e({style:"window"})}
      `;case"field":return N`
        ${_e({style:"field"})}
      `;default:return N`
        ${_e()}
      `}},JE=$.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>qE(e)}
  ${({variant:e})=>Jt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ao=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>C.createElement(JE,{ref:o,shadow:t,variant:n,...r},e));Ao.displayName="Frame";const eA=$.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&N`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&qt()}
`,tA=$.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,nA=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>C.createElement(eA,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&C.createElement(tA,{variant:n},e),r));nA.displayName="GroupBox";const rA=$.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ir(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;rA.displayName="Handle";const oA="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",iA=$.div`
  display: inline-block;
  height: ${({size:e})=>ir(e)};
  width: ${({size:e})=>ir(e)};
`,sA=$.span`
  display: block;
  background: ${oA};
  background-size: cover;
  width: 100%;
  height: 100%;
`,aA=w.forwardRef(({size:e=30,...t},n)=>C.createElement(iA,{size:e,ref:n,...t},C.createElement(sA,null)));aA.displayName="Hourglass";const lA=$.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,uA=$.div`
  position: relative;
`,cA=$.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,dA=$(dn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,fA=$.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,fy=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>C.createElement(lA,{ref:r,...n},C.createElement(uA,null,C.createElement(cA,null,C.createElement(dA,{style:e},t)),C.createElement(fA,null))));fy.displayName="Monitor";const pA=$.div`
  display: inline-block;
  height: ${ot.md};
  width: 100%;
`,hA=$(dn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,py=N`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,mA=$.div`
  position: relative;
  top: 4px;
  ${py}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,gA=$.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${py}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,vA=$.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,hy=17,yA=$.span`
  display: inline-block;
  width: ${hy}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,xA=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const s=e?null:`${n}%`,a=w.useRef(null),[l,u]=w.useState([]),c=w.useCallback(()=>{if(!a.current||n===void 0)return;const d=a.current.getBoundingClientRect().width,f=Math.round(n/100*d/hy);u(Array.from({length:f}))},[n]);return w.useEffect(()=>(c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[c]),C.createElement(pA,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},C.createElement(hA,{variant:r,shadow:t},r==="default"?C.createElement(C.Fragment,null,C.createElement(mA,{"data-testid":"defaultProgress1"},s),C.createElement(gA,{"data-testid":"defaultProgress2",value:n},s)):C.createElement(vA,{ref:a,"data-testid":"tileProgress"},l.map((d,f)=>C.createElement(yA,{key:f})))))});xA.displayName="ProgressBar";const my=N`
  width: ${cn}px;
  height: ${cn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,wA=$(dn)`
  ${my}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,SA=$.div`
  ${Nr()}
  ${my}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,kA=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,bA={flat:SA,default:wA},EA=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:s="default",...a},l)=>{const u=bA[s];return C.createElement(rf,{$disabled:n,className:t,style:i},C.createElement(u,{$disabled:n,role:"presentation"},e&&C.createElement(kA,{$disabled:n,variant:s})),C.createElement(Ba,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:l,...a}),r&&C.createElement(of,null,r))});EA.displayName="Radio";const AA=typeof window<"u"?w.useLayoutEffect:w.useEffect;function hr(e){const t=w.useRef(e);return AA(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function Ph(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Rh(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{Ph(e,n),Ph(t,n)},[e,t])}let Al=!0,Vc=!1,Dh;const CA={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function TA(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&CA[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function PA(e){e.metaKey||e.altKey||e.ctrlKey||(Al=!0)}function mu(){Al=!1}function RA(){this.visibilityState==="hidden"&&Vc&&(Al=!0)}function DA(e){e.addEventListener("keydown",PA,!0),e.addEventListener("mousedown",mu,!0),e.addEventListener("pointerdown",mu,!0),e.addEventListener("touchstart",mu,!0),e.addEventListener("visibilitychange",RA,!0)}function $A(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Al||TA(t)}function LA(){Vc=!0,window.clearTimeout(Dh),Dh=window.setTimeout(()=>{Vc=!1},100)}function MA(){const e=w.useCallback(t=>{const n=pl.findDOMNode(t);n!=null&&DA(n.ownerDocument)},[]);return{isFocusVisible:$A,onBlurVisible:LA,ref:e}}function IA(e,t,n){return(n-t)*e+t}function Ns(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Bs(e){return e&&e.ownerDocument||document}function jA(e,t){var n;const{index:r}=(n=e.reduce((o,i,s)=>{const a=Math.abs(t-i);return o===null||a<o.distance||a===o.distance?{distance:a,index:s}:o},null))!==null&&n!==void 0?n:{};return r??-1}const VA=$.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?N`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:N`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,gy=()=>N`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?N`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:N`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,OA=$(dn)`
  ${gy()}
`,_A=$(dn)`
  ${gy()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,FA=$.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?N`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:N`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?N`
          ${Nr()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:N`
          ${Jt()}
          ${_e()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&ds({mainColor:t.material,secondaryColor:t.borderLightest})}
`,ho=6,NA=$.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?N`
          right: ${-ho-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${ho}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:N`
          bottom: ${-ho}px;
          height: ${ho}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&N`
      ${qt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,BA=$.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?N`
          transform: translate(${ho+2}px, ${ho+1}px);
        `:N`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,zA=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:s,onChangeCommitted:a,onMouseDown:l,orientation:u="horizontal",size:c="100%",step:d=1,value:f,variant:g="default",...v},y)=>{const S=g==="flat"?_A:OA,h=u==="vertical",[p=o,m]=sr({defaultValue:e,onChange:s??a,value:f}),{isFocusVisible:k,onBlurVisible:A,ref:x}=MA(),[b,P]=w.useState(!1),L=w.useRef(),_=w.useRef(null),G=Rh(x,L),K=Rh(y,G),re=hr(Y=>{k(Y)&&P(!0)}),te=hr(()=>{b!==!1&&(P(!1),A())}),he=w.useRef(),ae=w.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((Y,U)=>({label:void 0,value:o+d*U})):Array.isArray(n)?n:[],[n,r,o,d]),q=hr(Y=>{const U=(r-o)/10,oe=ae.map(Ie=>Ie.value),Q=oe.indexOf(p);let ie=0;switch(Y.key){case"Home":ie=o;break;case"End":ie=r;break;case"PageUp":d&&(ie=p+U);break;case"PageDown":d&&(ie=p-U);break;case"ArrowRight":case"ArrowUp":d?ie=p+d:ie=oe[Q+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":d?ie=p-d:ie=oe[Q-1]||oe[0];break;default:return}Y.preventDefault(),d&&(ie=Ah(ie,d,o)),ie=Cr(ie,o,r),m(ie),P(!0),s==null||s(ie),a==null||a(ie)}),D=w.useCallback(Y=>{if(!L.current)return 0;const U=L.current.getBoundingClientRect();let oe;h?oe=(U.bottom-Y.y)/U.height:oe=(Y.x-U.left)/U.width;let Q;if(Q=IA(oe,o,r),d)Q=Ah(Q,d,o);else{const ie=ae.map(I=>I.value),Ie=jA(ie,Q);Q=ie[Ie]}return Q=Cr(Q,o,r),Q},[ae,r,o,d,h]),V=hr(Y=>{var U;const oe=Ns(Y,he.current);if(!oe)return;const Q=D(oe);(U=_.current)===null||U===void 0||U.focus(),m(Q),P(!0),s==null||s(Q)}),B=hr(Y=>{const U=Ns(Y,he.current);if(!U)return;const oe=D(U);a==null||a(oe),he.current=void 0;const Q=Bs(L.current);Q.removeEventListener("mousemove",V),Q.removeEventListener("mouseup",B),Q.removeEventListener("touchmove",V),Q.removeEventListener("touchend",B)}),F=hr(Y=>{var U;l==null||l(Y),Y.preventDefault(),(U=_.current)===null||U===void 0||U.focus(),P(!0);const oe=Ns(Y,he.current);if(oe){const ie=D(oe);m(ie),s==null||s(ie)}const Q=Bs(L.current);Q.addEventListener("mousemove",V),Q.addEventListener("mouseup",B)}),Z=hr(Y=>{var U;Y.preventDefault();const oe=Y.changedTouches[0];oe!=null&&(he.current=oe.identifier),(U=_.current)===null||U===void 0||U.focus(),P(!0);const Q=Ns(Y,he.current);if(Q){const Ie=D(Q);m(Ie),s==null||s(Ie)}const ie=Bs(L.current);ie.addEventListener("touchmove",V),ie.addEventListener("touchend",B)});return w.useEffect(()=>{const{current:Y}=L;Y==null||Y.addEventListener("touchstart",Z);const U=Bs(Y);return()=>{Y==null||Y.removeEventListener("touchstart",Z),U.removeEventListener("mousemove",V),U.removeEventListener("mouseup",B),U.removeEventListener("touchmove",V),U.removeEventListener("touchend",B)}},[B,V,Z]),C.createElement(VA,{$disabled:t,hasMarks:!!ae.length,isFocused:b,onMouseDown:F,orientation:u,ref:K,size:ir(c),...v},C.createElement("input",{disabled:t,name:i,type:"hidden",value:p??0}),ae&&ae.map(Y=>C.createElement(NA,{$disabled:t,"data-testid":"tick",key:Y.value/(r-o)*100,orientation:u,style:{[h?"bottom":"left"]:`${(Y.value-o)/(r-o)*100}%`}},Y.label&&C.createElement(BA,{"aria-hidden":!0,"data-testid":"mark",orientation:u},Y.label))),C.createElement(S,{orientation:u,variant:g}),C.createElement(FA,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":p,onBlur:te,onFocus:re,onKeyDown:q,orientation:u,ref:_,role:"slider",style:{[h?"bottom":"left"]:`${(h?-100:0)+100*(p-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:g}))});zA.displayName="Slider";const UA=$.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${tf};
  overflow-y: auto;
`,HA=w.forwardRef(function({children:t,...n},r){return C.createElement(UA,{ref:r,...n},t)});HA.displayName="TableBody";const WA=$.td`
  padding: 0 8px;
`,QA=w.forwardRef(function({children:t,...n},r){return C.createElement(WA,{ref:r,...n},t)});QA.displayName="TableDataCell";const GA=$.thead`
  display: table-header-group;
`,KA=w.forwardRef(function({children:t,...n},r){return C.createElement(GA,{ref:r,...n},t)});KA.displayName="TableHead";const YA=$.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${_e()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&N`
      &:active {
        &:before {
          ${_e({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&qt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&qt()}
  }
`,XA=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Ur,sort:i,...s},a){const l=i==="asc"?"ascending":i==="desc"?"descending":void 0;return C.createElement(YA,{$disabled:t,"aria-disabled":t,"aria-sort":l,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...s},C.createElement("div",null,n))});XA.displayName="TableHeadCell";const ZA=$.tr`
  color: inherit;
  display: table-row;
  height: calc(${ot.md} - 2px);
  line-height: calc(${ot.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,qA=w.forwardRef(function({children:t,...n},r){return C.createElement(ZA,{ref:r,...n},t)});qA.displayName="TableRow";const JA=$.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,eC=$(dn)`
  &:before {
    box-shadow: none;
  }
`,tC=w.forwardRef(({children:e,...t},n)=>C.createElement(eC,null,C.createElement(JA,{ref:n,...t},e)));tC.displayName="Table";const nC=$.button`
  ${Jt()}
  ${_e()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ot.md};
  line-height: ${ot.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${_o}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${ot.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,rC=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>C.createElement(nC,{"aria-selected":n,selected:n,onClick:s=>t==null?void 0:t(e,s),ref:i,role:"tab",...o},r));rC.displayName="Tab";const oC=$.div`
  ${Jt()}
  ${_e()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,iC=w.forwardRef(({children:e,...t},n)=>C.createElement(oC,{ref:n,...t},e));iC.displayName="TabBody";const sC=$.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,aC=$.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function lC(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const uC=w.forwardRef(({value:e,onChange:t=Ur,children:n,rows:r=1,...o},i)=>{const s=w.useMemo(()=>{var a;const l=(a=C.Children.map(n,d=>{if(!C.isValidElement(d))return null;const f={selected:d.props.value===e,onClick:t};return C.cloneElement(d,f)}))!==null&&a!==void 0?a:[],u=lC(l,r).map((d,f)=>({key:f,tabs:d})),c=u.findIndex(d=>d.tabs.some(f=>f.props.selected));return u.push(u.splice(c,1)[0]),u},[n,t,r,e]);return C.createElement(sC,{...o,isMultiRow:r>1,role:"tablist",ref:i},s.map(a=>C.createElement(aC,{key:a.key},a.tabs)))});uC.displayName="Tabs";const cC=["blur","focus"],dC=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function $h(e){return"nativeEvent"in e&&cC.includes(e.type)}function Lh(e){return"nativeEvent"in e&&dC.includes(e.type)}const fC={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},pC=$.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${ef};
  text-align: center;
  font-size: 1rem;
  ${e=>fC[e.position]}
`,hC=$.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,mC=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:s,onClose:a,onFocus:l,onMouseEnter:u,onMouseLeave:c,onOpen:d,style:f,text:g,position:v="top",...y},S)=>{const[h,p]=w.useState(!1),[m,k]=w.useState(),[A,x]=w.useState(),b=!n,P=!r,L=D=>{window.clearTimeout(m),window.clearTimeout(A);const V=window.setTimeout(()=>{p(!0),d==null||d(D)},o);k(V)},_=D=>{D.persist(),$h(D)?l==null||l(D):Lh(D)&&(u==null||u(D)),L(D)},G=D=>{window.clearTimeout(m),window.clearTimeout(A);const V=window.setTimeout(()=>{p(!1),a==null||a(D)},i);x(V)},K=D=>{D.persist(),$h(D)?s==null||s(D):Lh(D)&&(c==null||c(D)),G(D)},re=b?K:void 0,te=b?_:void 0,he=P?_:void 0,ae=P?K:void 0,q=b?0:void 0;return C.createElement(hC,{"data-testid":"tooltip-wrapper",onBlur:re,onFocus:te,onMouseEnter:he,onMouseLeave:ae,tabIndex:q},C.createElement(pC,{className:e,"data-testid":"tooltip",position:v,ref:S,show:h,style:f,...y},g),t)});mC.displayName="Tooltip";const Oc=$(of)`
  white-space: nowrap;
`,vy=N`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":N`
          cursor: pointer;

          :focus {
            ${Oc} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,gC=$.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&N`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,vC=$.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?N`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:N`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,yC=$.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,xC=$.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${vy};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Mh=$(rf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${vy};
`,wC=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Ih(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function jh(e){e.preventDefault()}function yy({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:s,style:a,tree:l=[]}){const u=o===0,c=w.useCallback(d=>{var f,g;const v=!!(d.items&&d.items.length>0),y=n.includes(d.id),S=(f=t||d.disabled)!==null&&f!==void 0?f:!1,h=S?jh:A=>i(A,d),p=S?jh:A=>i(A,d),m=s===d.id,k=C.createElement(wC,{"aria-hidden":!0},d.icon);return C.createElement(vC,{key:d.label,isRootLevel:u,role:"treeitem","aria-expanded":y,"aria-selected":m,hasItems:v},v?C.createElement(yC,{open:y},C.createElement(xC,{onClick:h,$disabled:S},C.createElement(Mh,{$disabled:S},k,C.createElement(Oc,null,d.label))),y&&C.createElement(yy,{className:e,disabled:S,expanded:n,level:o+1,select:i,selected:s,style:a,tree:(g=d.items)!==null&&g!==void 0?g:[]})):C.createElement(Mh,{as:"button",$disabled:S,onClick:p},k,C.createElement(Oc,null,d.label)))},[e,t,n,u,o,i,s,a]);return C.createElement(gC,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},l.map(c))}function SC({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:s,selected:a,style:l,tree:u=[]},c){const[d,f]=sr({defaultValue:t,onChange:s,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[g,v]=sr({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),y=w.useCallback((p,m)=>{if(s){const k=Ih(d,m);s(p,k)}f(k=>Ih(k,m))},[d,s,f]),S=w.useCallback((p,m)=>{v(m),i&&i(p,m)},[i,v]),h=w.useCallback((p,m)=>{p.preventDefault(),S(p,m.id),m.items&&m.items.length&&y(p,m.id)},[S,y]);return C.createElement(yy,{className:e,disabled:r,expanded:d,level:0,innerRef:c,select:h,selected:g,style:l,tree:u})}const kC=w.forwardRef(SC);kC.displayName="TreeView";const xy=({handleModal:e})=>{const t=y0();return M.jsx(Nb,{id:"home",children:M.jsxs("div",{id:"container",children:[M.jsx("h1",{children:"Vicente Carlos"}),M.jsx("nav",{children:M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx(ln,{href:"#",onClick:()=>t("/"),children:"Página inicial"})}),M.jsx("li",{children:M.jsx(ln,{href:"#",onClick:()=>t("/portfolio"),children:"Projetos"})}),M.jsx("li",{children:M.jsx(ln,{href:"https://drive.google.com/file/d/1zXradmgh5Wo4umhGUJ2GBVU7tJV9zusS/view?usp=sharing",target:"_blank",children:"Meu currículo"})})]})}),M.jsx("button",{onClick:e,children:M.jsx("img",{src:"/assets/svg/menu-mobile.svg",alt:"menu-mobile"})})]})})},bC=$.main`
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #about-me {
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */

      #perfil {
        .perfil-content {
          width: 70vw;
          figure {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            figcaption {
              margin-top: 1rem;
              font-size: 1.1rem;
            }
          }
        }
      }
    }

    section {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        margin-top: 1.2rem;
        width: 80%;
      }
    }

    #about-me {
      margin-top: 0;

      div {
        h2 {
          margin-top: 3rem;
        }
      }

      #about-more-me {
        p {
          line-height: 25px;
        }
      }
    }

    #techs {
      .frame-tech {
        width: 80vw;

        #content-img {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 1rem;

          img {
            margin: 1.5rem 1rem;
            width: 60px;
          }
        }
      }
    }

    #services {
      h2 {
        margin-bottom: 1rem;
      }

      div {
        margin: 1.2rem 0;
        
        p {
          line-height: 25px;
        }
      }
    }

    #network {
      .frame-network {
        width: 80vw;

        .content-network {
          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            li {
              list-style-type: none;

              a {
                img {
                  margin: 1.5rem 1rem;
                  width: 60px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
      font-size: 1.1rem;

      #about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 0;

        #perfil {
          .perfil-content {
            width: 30vw;
          }
        }

        #about-more-me {
          width: 50vw;

          h2 {
            margin-top: 0;
          }
        }
      }

      #services {
        width: 50vw;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    #container {
      #techs {
        .frame-tech {
          width: 60vw;
        }
      }

      #services {
        width: 55vw;
      }

      #network {
        .frame-network {
          width: 50vw;
        }
      }
    }
  }
`,EC=["/assets/svg/amgular.svg","/assets/svg/react.svg","/assets/svg/spring.svg","/assets/svg/node.svg","/assets/svg/typescript.svg","/assets/svg/java.svg"],AC=[{path:"/assets/svg/github.svg",link:"https://github.com/VicenteCarlos"},{path:"/assets/svg/inkedin.svg",link:"https://www.linkedin.com/in/vicente-carlos-silva/"},{path:"/assets/svg/gmail.svg",link:"mailto:vicentecarloshehe@gmail.com"}],CC=()=>M.jsx(bC,{children:M.jsxs("div",{id:"container",children:[M.jsxs("section",{id:"about-me",children:[M.jsx("div",{id:"perfil",children:M.jsx(Ao,{className:"perfil-content",variant:"outside",shadow:!0,style:{padding:"0.5rem",height:"50vh"},children:M.jsxs("figure",{children:[M.jsx(G0,{size:160,src:"assets/svg/avatar.svg"}),M.jsx("figcaption",{children:"FullStack Developer"})]})})}),M.jsxs("div",{id:"about-more-me",children:[M.jsx("h2",{children:"Sobre mim"}),M.jsx("p",{children:"Gosto bastante de aprender e ensinar, sempre ajudo quem posso com minha experiência profissional e além disso, meu objetivo principal e solucionar problemas, afinal, estudo para isso, desenvolvendo soluções por meio da programação ou através da comunicação em equipe. Tenho contato com o universo de Front-End e Back-End, usando React/Node e Angular/ SpringBoot, portanto, sou um profissional com as habilidades necessárias para o desenvolvimento, projeção e aplicabilidade de testes em aplicações web."})]})]}),M.jsx("section",{id:"techs",children:M.jsxs(Ao,{className:"frame-tech",style:{padding:"2rem"},children:[M.jsx("h2",{children:"Tecnologias"}),M.jsx("div",{id:"content-img",children:EC.map((e,t)=>M.jsx("img",{src:e},t))})]})}),M.jsxs("section",{id:"services",children:[M.jsx("h2",{children:"Meus serviços"}),M.jsxs("div",{children:[M.jsx("h3",{children:"Desenvolvimento Front-End"}),M.jsx("p",{children:"Trabalho com as mais atualizadas ferramentas do mercado para o desenvolvimento de interfaces robustas, possuindo qualidade, performance e beleza, além de possuir conceitos de UX/UI aplicados para uma melhor experiência."})]}),M.jsxs("div",{children:[M.jsx("h3",{children:"Desenvolvimento Back-End"}),M.jsx("p",{children:"Utilizo de uma das melhores tecnologias existentes no mercado para o desenvolvimento de aplicações como: api, banco de dados e micro-services juntamente com os seus testes, tendo qualidade e performance, além de possuir boas práticas aplicadas para uma melhor experiência, durabilidade e manutenibilidade."})]})]}),M.jsx("section",{id:"network",children:M.jsxs(Ao,{className:"frame-network",style:{padding:"2rem"},children:[M.jsx("h2",{children:"Interaja comigo"}),M.jsx("nav",{className:"content-network",children:M.jsx("ul",{children:AC.map((e,t)=>M.jsx("li",{children:M.jsx(ln,{href:e.link,target:"_black",children:M.jsx("img",{src:e.path,alt:"img-rede"})})},`rede-${t}`))})})]})})]})}),TC=$.div`
  background-color: #C6C6C6;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    text-align: center;
    ul {
        margin-top: 3rem;
        li {
            list-style-type: none;
            margin: 2rem 0;
            font-size: 1.4rem;
            a {
                text-decoration: none;
            }
        }
    }
  }

  button {
    border: none;
    background-color: #C6C6C6;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    padding: 1.8rem;
    font-family: 'ms_sans_serif';
  }
`,wy=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Cl=w.createContext({}),af=w.createContext(null),Tl=typeof document<"u",PC=Tl?w.useLayoutEffect:w.useEffect,Sy=w.createContext({strict:!1}),lf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),RC="framerAppearId",ky="data-"+lf(RC),by={skipAnimations:!1,useManualTiming:!1};class Vh{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function DC(e){let t=new Vh,n=new Vh,r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&s.add(l),f.add(l)&&d&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const c=t.order[u];s.has(c)&&(a.schedule(c),e()),c(l)}o=!1,i&&(i=!1,a.process(l))}};return a}const zs=["prepare","read","update","preRender","render","postRender"],$C=40;function Ey(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=zs.reduce((d,f)=>(d[f]=DC(()=>n=!0),d),{}),s=d=>{i[d].process(o)},a=()=>{const d=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(d-o.timestamp,$C),1),o.timestamp=d,o.isProcessing=!0,zs.forEach(s),o.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,o.isProcessing||e(a)};return{schedule:zs.reduce((d,f)=>{const g=i[f];return d[f]=(v,y=!1,S=!1)=>(n||l(),g.schedule(v,y,S)),d},{}),cancel:d=>zs.forEach(f=>i[f].cancel(d)),state:o,steps:i}}const{schedule:uf,cancel:s$}=Ey(queueMicrotask,!1);function LC(e,t,n,r){const{visualElement:o}=w.useContext(Cl),i=w.useContext(Sy),s=w.useContext(af),a=w.useContext(wy).reducedMotion,l=w.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;w.useInsertionEffect(()=>{u&&u.update(n,s)});const c=w.useRef(!!(n[ky]&&!window.HandoffComplete));return PC(()=>{u&&(uf.postRender(u.render),c.current&&u.animationState&&u.animationState.animateChanges())}),w.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function mo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function MC(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):mo(n)&&(n.current=r))},[t])}function ts(e){return typeof e=="string"||Array.isArray(e)}function Pl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const cf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],df=["initial",...cf];function Rl(e){return Pl(e.animate)||df.some(t=>ts(e[t]))}function Ay(e){return!!(Rl(e)||e.variants)}function IC(e,t){if(Rl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ts(n)?n:void 0,animate:ts(r)?r:void 0}}return e.inherit!==!1?t:{}}function jC(e){const{initial:t,animate:n}=IC(e,w.useContext(Cl));return w.useMemo(()=>({initial:t,animate:n}),[Oh(t),Oh(n)])}function Oh(e){return Array.isArray(e)?e.join(" "):e}const _h={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ns={};for(const e in _h)ns[e]={isEnabled:t=>_h[e].some(n=>!!t[n])};function VC(e){for(const t in e)ns[t]={...ns[t],...e[t]}}const Cy=w.createContext({}),Ty=w.createContext({}),OC=Symbol.for("motionComponentSymbol");function _C({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&VC(e);function i(a,l){let u;const c={...w.useContext(wy),...a,layoutId:FC(a)},{isStatic:d}=c,f=jC(a),g=r(a,d);if(!d&&Tl){f.visualElement=LC(o,g,c,t);const v=w.useContext(Ty),y=w.useContext(Sy).strict;f.visualElement&&(u=f.visualElement.loadFeatures(c,y,e,v))}return w.createElement(Cl.Provider,{value:f},u&&f.visualElement?w.createElement(u,{visualElement:f.visualElement,...c}):null,n(o,a,MC(g,f.visualElement,l),g,d,f.visualElement))}const s=w.forwardRef(i);return s[OC]=o,s}function FC({layoutId:e}){const t=w.useContext(Cy).id;return t&&e!==void 0?t+"-"+e:e}function NC(e){function t(r,o={}){return _C(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const BC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ff(e){return typeof e!="string"||e.includes("-")?!1:!!(BC.indexOf(e)>-1||/[A-Z]/.test(e))}const za={};function zC(e){Object.assign(za,e)}const fs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hr=new Set(fs);function Py(e,{layout:t,layoutId:n}){return Hr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!za[e]||e==="opacity")}const kt=e=>!!(e&&e.getVelocity),UC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},HC=fs.length;function WC(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let s=0;s<HC;s++){const a=fs[s];if(e[a]!==void 0){const l=UC[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const Ry=e=>t=>typeof t=="string"&&t.startsWith(e),Dy=Ry("--"),QC=Ry("var(--"),Ua=e=>QC(e)?GC.test(e.split("/*")[0].trim()):!1,GC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,KC=(e,t)=>t&&typeof e=="number"?t.transform(e):e,ar=(e,t,n)=>n>t?t:n<e?e:n,Qo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Pi={...Qo,transform:e=>ar(0,1,e)},Us={...Qo,default:1},Ri=e=>Math.round(e*1e5)/1e5,pf=/(-)?([\d]*\.?[\d])+/g,YC=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,XC=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ps(e){return typeof e=="string"}const hs=e=>({test:t=>ps(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Fn=hs("deg"),un=hs("%"),ee=hs("px"),ZC=hs("vh"),qC=hs("vw"),Fh={...un,parse:e=>un.parse(e)/100,transform:e=>un.transform(e*100)},Nh={...Qo,transform:Math.round},$y={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,radius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,size:ee,top:ee,right:ee,bottom:ee,left:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,rotate:Fn,rotateX:Fn,rotateY:Fn,rotateZ:Fn,scale:Us,scaleX:Us,scaleY:Us,scaleZ:Us,skew:Fn,skewX:Fn,skewY:Fn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Pi,originX:Fh,originY:Fh,originZ:ee,zIndex:Nh,fillOpacity:Pi,strokeOpacity:Pi,numOctaves:Nh};function hf(e,t,n,r){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const f=t[d];if(Dy(d)){i[d]=f;continue}const g=$y[d],v=KC(f,g);if(Hr.has(d)){if(l=!0,s[d]=v,!c)continue;f!==(g.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=v):o[d]=v}if(t.transform||(l||r?o.transform=WC(e.transform,n,c,r):o.transform&&(o.transform="none")),u){const{originX:d="50%",originY:f="50%",originZ:g=0}=a;o.transformOrigin=`${d} ${f} ${g}`}}const mf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ly(e,t,n){for(const r in t)!kt(t[r])&&!Py(r,n)&&(e[r]=t[r])}function JC({transformTemplate:e},t,n){return w.useMemo(()=>{const r=mf();return hf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function eT(e,t,n){const r=e.style||{},o={};return Ly(o,r,e),Object.assign(o,JC(e,t,n)),o}function tT(e,t,n){const r={},o=eT(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const nT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ha(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||nT.has(e)}let My=e=>!Ha(e);function rT(e){e&&(My=t=>t.startsWith("on")?!Ha(t):e(t))}try{rT(require("@emotion/is-prop-valid").default)}catch{}function oT(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(My(o)||n===!0&&Ha(o)||!t&&!Ha(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Bh(e,t,n){return typeof e=="string"?e:ee.transform(t+n*e)}function iT(e,t,n){const r=Bh(t,e.x,e.width),o=Bh(n,e.y,e.height);return`${r} ${o}`}const sT={offset:"stroke-dashoffset",array:"stroke-dasharray"},aT={offset:"strokeDashoffset",array:"strokeDasharray"};function lT(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?sT:aT;e[i.offset]=ee.transform(-r);const s=ee.transform(t),a=ee.transform(n);e[i.array]=`${s} ${a}`}function gf(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,f){if(hf(e,u,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:y}=e;g.transform&&(y&&(v.transform=g.transform),delete g.transform),y&&(o!==void 0||i!==void 0||v.transform)&&(v.transformOrigin=iT(y,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),s!==void 0&&lT(g,s,a,l,!1)}const Iy=()=>({...mf(),attrs:{}}),vf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function uT(e,t,n,r){const o=w.useMemo(()=>{const i=Iy();return gf(i,t,{enableHardwareAcceleration:!1},vf(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Ly(i,e.style,e),o.style={...i,...o.style}}return o}function cT(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(ff(n)?uT:tT)(r,i,s,n),u=oT(r,typeof n=="string",e),c=n!==w.Fragment?{...u,...l,ref:o}:{},{children:d}=r,f=w.useMemo(()=>kt(d)?d.get():d,[d]);return w.createElement(n,{...c,children:f})}}function jy(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const Vy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Oy(e,t,n,r){jy(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Vy.has(o)?o:lf(o),t.attrs[o])}function yf(e,t){const{style:n}=e,r={};for(const o in n)(kt(n[o])||t.style&&kt(t.style[o])||Py(o,e))&&(r[o]=n[o]);return r}function _y(e,t){const n=yf(e,t);for(const r in e)if(kt(e[r])||kt(t[r])){const o=fs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function xf(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function dT(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Wa=e=>Array.isArray(e),fT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),pT=e=>Wa(e)?e[e.length-1]||0:e;function ua(e){const t=kt(e)?e.get():e;return fT(t)?t.toValue():t}function hT({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const s={latestValues:mT(r,o,i,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Fy=e=>(t,n)=>{const r=w.useContext(Cl),o=w.useContext(af),i=()=>hT(e,t,r,o);return n?i():dT(i)};function mT(e,t,n,r){const o={},i=r(e,{});for(const f in i)o[f]=ua(i[f]);let{initial:s,animate:a}=e;const l=Rl(e),u=Ay(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!Pl(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const v=xf(e,g);if(!v)return;const{transitionEnd:y,transition:S,...h}=v;for(const p in h){let m=h[p];if(Array.isArray(m)){const k=c?m.length-1:0;m=m[k]}m!==null&&(o[p]=m)}for(const p in y)o[p]=y[p]}),o}const He=e=>e,{schedule:$e,cancel:Dn,state:nt,steps:gu}=Ey(typeof requestAnimationFrame<"u"?requestAnimationFrame:He,!0),gT={useVisualState:Fy({scrapeMotionValuesFromProps:_y,createRenderState:Iy,onMount:(e,t,{renderState:n,latestValues:r})=>{$e.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),$e.render(()=>{gf(n,r,{enableHardwareAcceleration:!1},vf(t.tagName),e.transformTemplate),Oy(t,n)})}})},vT={useVisualState:Fy({scrapeMotionValuesFromProps:yf,createRenderState:mf})};function yT(e,{forwardMotionProps:t=!1},n,r){return{...ff(e)?gT:vT,preloadedFeatures:n,useRender:cT(t),createVisualElement:r,Component:e}}function Sn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Ny=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Dl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const xT=e=>t=>Ny(t)&&e(t,Dl(t));function bn(e,t,n,r){return Sn(e,t,xT(n),r)}const wT=(e,t)=>n=>t(e(n)),En=(...e)=>e.reduce(wT);function By(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const zh=By("dragHorizontal"),Uh=By("dragVertical");function zy(e){let t=!1;if(e==="y")t=Uh();else if(e==="x")t=zh();else{const n=zh(),r=Uh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Uy(){const e=zy(!0);return e?(e(),!1):!0}class fr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Hh(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,s)=>{if(i.pointerType==="touch"||Uy())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&$e.update(()=>a[r](i,s))};return bn(e.current,n,o,{passive:!e.getProps()[r]})}class ST extends fr{mount(){this.unmount=En(Hh(this.node,!0),Hh(this.node,!1))}unmount(){}}class kT extends fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=En(Sn(this.node.current,"focus",()=>this.onFocus()),Sn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Hy=(e,t)=>t?e===t?!0:Hy(e,t.parentElement):!1;function vu(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Dl(n))}class bT extends fr{constructor(){super(...arguments),this.removeStartListeners=He,this.removeEndListeners=He,this.removeAccessibleListeners=He,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=bn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();$e.update(()=>{!d&&!Hy(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=bn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=En(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||vu("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&$e.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Sn(this.node.current,"keyup",s),vu("down",(a,l)=>{this.startPress(a,l)})},n=Sn(this.node.current,"keydown",t),r=()=>{this.isPressing&&vu("cancel",(i,s)=>this.cancelPress(i,s))},o=Sn(this.node.current,"blur",r);this.removeAccessibleListeners=En(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&$e.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Uy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&$e.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=bn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Sn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=En(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const _c=new WeakMap,yu=new WeakMap,ET=e=>{const t=_c.get(e.target);t&&t(e)},AT=e=>{e.forEach(ET)};function CT({root:e,...t}){const n=e||document;yu.has(n)||yu.set(n,{});const r=yu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(AT,{root:e,...t})),r[o]}function TT(e,t,n){const r=CT(t);return _c.set(e,n),r.observe(e),()=>{_c.delete(e),r.unobserve(e)}}const PT={some:0,all:1};class RT extends fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:PT[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return TT(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(DT(t,n))&&this.startObserver()}unmount(){}}function DT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const $T={inView:{Feature:RT},tap:{Feature:bT},focus:{Feature:kT},hover:{Feature:ST}};function Wy(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function LT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function MT(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function $l(e,t,n){const r=e.getProps();return xf(r,t,n!==void 0?n:r.custom,LT(e),MT(e))}let wf=He;const $r=e=>e*1e3,An=e=>e/1e3,IT={current:!1},Qy=e=>Array.isArray(e)&&typeof e[0]=="number";function Gy(e){return!!(!e||typeof e=="string"&&Ky[e]||Qy(e)||Array.isArray(e)&&e.every(Gy))}const gi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ky={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gi([0,.65,.55,1]),circOut:gi([.55,0,1,.45]),backIn:gi([.31,.01,.66,-.59]),backOut:gi([.33,1.53,.69,.99])};function Yy(e){if(e)return Qy(e)?gi(e):Array.isArray(e)?e.map(Yy):Ky[e]}function jT(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Yy(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}function VT(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Xy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,OT=1e-7,_T=12;function FT(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=Xy(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>OT&&++a<_T);return s}function ms(e,t,n,r){if(e===t&&n===r)return He;const o=i=>FT(i,0,1,e,n);return i=>i===0||i===1?i:Xy(o(i),t,r)}const NT=ms(.42,0,1,1),BT=ms(0,0,.58,1),Zy=ms(.42,0,.58,1),zT=e=>Array.isArray(e)&&typeof e[0]!="number",qy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jy=e=>t=>1-e(1-t),Sf=e=>1-Math.sin(Math.acos(e)),e1=Jy(Sf),UT=qy(Sf),t1=ms(.33,1.53,.69,.99),kf=Jy(t1),HT=qy(kf),WT=e=>(e*=2)<1?.5*kf(e):.5*(2-Math.pow(2,-10*(e-1))),QT={linear:He,easeIn:NT,easeInOut:Zy,easeOut:BT,circIn:Sf,circInOut:UT,circOut:e1,backIn:kf,backInOut:HT,backOut:t1,anticipate:WT},Wh=e=>{if(Array.isArray(e)){wf(e.length===4);const[t,n,r,o]=e;return ms(t,n,r,o)}else if(typeof e=="string")return QT[e];return e},rs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},De=(e,t,n)=>e+(t-e)*n;function xu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function GT({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=xu(l,a,e+1/3),i=xu(l,a,e),s=xu(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const bf=(e,t)=>n=>!!(ps(n)&&XC.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),n1=(e,t,n)=>r=>{if(!ps(r))return r;const[o,i,s,a]=r.match(pf);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},KT=e=>ar(0,255,e),wu={...Qo,transform:e=>Math.round(KT(e))},Tr={test:bf("rgb","red"),parse:n1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+wu.transform(e)+", "+wu.transform(t)+", "+wu.transform(n)+", "+Ri(Pi.transform(r))+")"};function YT(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Fc={test:bf("#"),parse:YT,transform:Tr.transform},go={test:bf("hsl","hue"),parse:n1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+un.transform(Ri(t))+", "+un.transform(Ri(n))+", "+Ri(Pi.transform(r))+")"},Su=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},XT=[Fc,Tr,go],ZT=e=>XT.find(t=>t.test(e));function Qh(e){const t=ZT(e);let n=t.parse(e);return t===go&&(n=GT(n)),n}const Gh=(e,t)=>{const n=Qh(e),r=Qh(t),o={...n};return i=>(o.red=Su(n.red,r.red,i),o.green=Su(n.green,r.green,i),o.blue=Su(n.blue,r.blue,i),o.alpha=De(n.alpha,r.alpha,i),Tr.transform(o))},lt={test:e=>Tr.test(e)||Fc.test(e)||go.test(e),parse:e=>Tr.test(e)?Tr.parse(e):go.test(e)?go.parse(e):Fc.parse(e),transform:e=>ps(e)?e:e.hasOwnProperty("red")?Tr.transform(e):go.transform(e)};function qT(e){var t,n;return isNaN(e)&&ps(e)&&(((t=e.match(pf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(YC))===null||n===void 0?void 0:n.length)||0)>0}const r1="number",o1="color",JT="var",eP="var(",Kh="${}",Yh=/(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;function Qa(e){const t=e.toString(),n=t.match(Yh)||[],r=[],o={color:[],number:[],var:[]},i=[];for(let l=0;l<n.length;l++){const u=n[l];lt.test(u)?(o.color.push(l),i.push(o1),r.push(lt.parse(u))):u.startsWith(eP)?(o.var.push(l),i.push(JT),r.push(u)):(o.number.push(l),i.push(r1),r.push(parseFloat(u)))}const a=t.replace(Yh,Kh).split(Kh);return{values:r,split:a,indexes:o,types:i}}function i1(e){return Qa(e).values}function s1(e){const{split:t,types:n}=Qa(e),r=t.length;return o=>{let i="";for(let s=0;s<r;s++)if(i+=t[s],o[s]!==void 0){const a=n[s];a===r1?i+=Ri(o[s]):a===o1?i+=lt.transform(o[s]):i+=o[s]}return i}}const tP=e=>typeof e=="number"?0:e;function nP(e){const t=i1(e);return s1(e)(t.map(tP))}const lr={test:qT,parse:i1,createTransformer:s1,getAnimatableNone:nP};function Nc(e,t){return n=>n>0?t:e}function rP(e,t){return n=>De(e,t,n)}function Ef(e){return typeof e=="number"?rP:typeof e=="string"?Ua(e)?Nc:lt.test(e)?Gh:sP:Array.isArray(e)?a1:typeof e=="object"?lt.test(e)?Gh:oP:Nc}function a1(e,t){const n=[...e],r=n.length,o=e.map((i,s)=>Ef(i)(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}}function oP(e,t){const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Ef(e[o])(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}}function iP(e,t){var n;const r=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],a=e.indexes[s][o[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[i]=l,o[s]++}return r}const sP=(e,t)=>{const n=lr.createTransformer(t),r=Qa(e),o=Qa(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?En(a1(iP(r,o),o.values),n):Nc(e,t)};function l1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?De(e,t,n):Ef(e)(e,t)}function aP(e,t,n){const r=[],o=n||l1,i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||He:t;a=En(l,a)}r.push(a)}return r}function lP(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(wf(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=aP(t,r,o),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=rs(e[c],e[c+1],u);return s[c](d)};return n?u=>l(ar(e[0],e[i-1],u)):l}function uP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=rs(0,t,r);e.push(De(n,1,o))}}function cP(e){const t=[0];return uP(t,e.length-1),t}function dP(e,t){return e.map(n=>n*t)}function fP(e,t){return e.map(()=>t||Zy).splice(0,e.length-1)}function Ga({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=zT(r)?r.map(Wh):Wh(r),i={done:!1,value:t[0]},s=dP(n&&n.length===t.length?n:cP(t),e),a=lP(s,t,{ease:Array.isArray(o)?o:fP(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}function u1(e,t){return t?e*(1e3/t):0}const pP=5;function c1(e,t,n){const r=Math.max(t-pP,0);return u1(n-e(r),t-r)}const ku=.001,hP=.01,mP=10,gP=.05,vP=1;function yP({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,s=1-t;s=ar(gP,vP,s),e=ar(hP,mP,An(e)),s<1?(o=u=>{const c=u*s,d=c*e,f=c-n,g=Bc(u,s),v=Math.exp(-d);return ku-f/g*v},i=u=>{const d=u*s*e,f=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),y=Bc(Math.pow(u,2),s);return(-o(u)+ku>0?-1:1)*((f-g)*v)/y}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-ku+c*d},i=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=wP(o,i,a);if(e=$r(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const xP=12;function wP(e,t,n){let r=n;for(let o=1;o<xP;o++)r=r-e(r)/t(r);return r}function Bc(e,t){return e*Math.sqrt(1-t*t)}const SP=["duration","bounce"],kP=["stiffness","damping","mass"];function Xh(e,t){return t.some(n=>e[n]!==void 0)}function bP(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Xh(e,kP)&&Xh(e,SP)){const n=yP(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function d1({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=bP({...r,velocity:-An(r.velocity||0)}),g=d||0,v=l/(2*Math.sqrt(a*u)),y=i-o,S=An(Math.sqrt(a/u)),h=Math.abs(y)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let p;if(v<1){const m=Bc(S,v);p=k=>{const A=Math.exp(-v*S*k);return i-A*((g+v*S*y)/m*Math.sin(m*k)+y*Math.cos(m*k))}}else if(v===1)p=m=>i-Math.exp(-S*m)*(y+(g+S*y)*m);else{const m=S*Math.sqrt(v*v-1);p=k=>{const A=Math.exp(-v*S*k),x=Math.min(m*k,300);return i-A*((g+v*S*y)*Math.sinh(x)+m*y*Math.cosh(x))/m}}return{calculatedDuration:f&&c||null,next:m=>{const k=p(m);if(f)s.done=m>=c;else{let A=g;m!==0&&(v<1?A=c1(p,m,k):A=0);const x=Math.abs(A)<=n,b=Math.abs(i-k)<=t;s.done=x&&b}return s.value=s.done?i:k,s}}}function Zh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,v=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*t;const S=d+y,h=s===void 0?S:s(S);h!==S&&(y=h-d);const p=P=>-y*Math.exp(-P/r),m=P=>h+p(P),k=P=>{const L=p(P),_=m(P);f.done=Math.abs(L)<=u,f.value=f.done?h:_};let A,x;const b=P=>{g(f.value)&&(A=P,x=d1({keyframes:[f.value,v(f.value)],velocity:c1(m,P,f.value),damping:o,stiffness:i,restDelta:u,restSpeed:c}))};return b(0),{calculatedDuration:null,next:P=>{let L=!1;return!x&&A===void 0&&(L=!0,k(P),b(P)),A!==void 0&&P>A?x.next(P-A):(!L&&k(P),f)}}}let ca;function EP(){ca=void 0}const Lr={now:()=>(ca===void 0&&Lr.set(nt.isProcessing||by.useManualTiming?nt.timestamp:performance.now()),ca),set:e=>{ca=e,queueMicrotask(EP)}},AP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$e.update(t,!0),stop:()=>Dn(t),now:()=>nt.isProcessing?nt.timestamp:Lr.now()}},qh=2e4;function Jh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<qh;)t+=n,r=e.next(t);return t>=qh?1/0:t}const CP={decay:Zh,inertia:Zh,tween:Ga,keyframes:Ga,spring:d1},TP=e=>e/100;function Ka({autoplay:e=!0,delay:t=0,driver:n=AP,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:d,...f}){let g=1,v=!1,y,S;const h=()=>{S=new Promise(F=>{y=F})};h();let p;const m=CP[o]||Ga;let k;m!==Ga&&typeof r[0]!="number"&&(k=En(TP,l1(r[0],r[1])),r=[0,100]);const A=m({...f,keyframes:r});let x;a==="mirror"&&(x=m({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let b="idle",P=null,L=null,_=null;A.calculatedDuration===null&&i&&(A.calculatedDuration=Jh(A));const{calculatedDuration:G}=A;let K=1/0,re=1/0;G!==null&&(K=G+s,re=K*(i+1)-s);let te=0;const he=F=>{if(L===null)return;g>0&&(L=Math.min(L,F)),g<0&&(L=Math.min(F-re/g,L)),P!==null?te=P:te=Math.round(F-L)*g;const Z=te-t*(g>=0?1:-1),Y=g>=0?Z<0:Z>re;te=Math.max(Z,0),b==="finished"&&P===null&&(te=re);let U=te,oe=A;if(i){const I=Math.min(te,re)/K;let ne=Math.floor(I),H=I%1;!H&&I>=1&&(H=1),H===1&&ne--,ne=Math.min(ne,i+1),!!(ne%2)&&(a==="reverse"?(H=1-H,s&&(H-=s/K)):a==="mirror"&&(oe=x)),U=ar(0,1,H)*K}const Q=Y?{done:!1,value:r[0]}:oe.next(U);k&&(Q.value=k(Q.value));let{done:ie}=Q;!Y&&G!==null&&(ie=g>=0?te>=re:te<=0);const Ie=P===null&&(b==="finished"||b==="running"&&ie);return d&&d(Q.value),Ie&&D(),Q},ae=()=>{p&&p.stop(),p=void 0},q=()=>{b="idle",ae(),y(),h(),L=_=null},D=()=>{b="finished",c&&c(),ae(),y()},V=()=>{if(v)return;p||(p=n(he));const F=p.now();l&&l(),P!==null?L=F-P:(!L||b==="finished")&&(L=F),b==="finished"&&h(),_=L,P=null,b="running",p.start()};e&&V();const B={then(F,Z){return S.then(F,Z)},get time(){return An(te)},set time(F){F=$r(F),te=F,P!==null||!p||g===0?P=F:L=p.now()-F/g},get duration(){const F=A.calculatedDuration===null?Jh(A):A.calculatedDuration;return An(F)},get speed(){return g},set speed(F){F===g||!p||(g=F,B.time=An(te))},get state(){return b},play:V,pause:()=>{b="paused",P=te},stop:()=>{v=!0,b!=="idle"&&(b="idle",u&&u(),q())},cancel:()=>{_!==null&&he(_),q()},complete:()=>{b="finished"},sample:F=>(L=0,he(F))};return B}function PP(e){let t;return()=>(t===void 0&&(t=e()),t)}const RP=PP(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),DP=new Set(["opacity","clipPath","filter","transform"]),Hs=10,$P=2e4,LP=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Gy(t.ease);function MP(e,t,{onUpdate:n,onComplete:r,...o}){if(!(RP()&&DP.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const c=()=>{l=new Promise(m=>{a=m})};c();let{keyframes:d,duration:f=300,ease:g,times:v}=o;if(LP(t,o)){const m=Ka({...o,repeat:0,delay:0});let k={done:!1,value:d[0]};const A=[];let x=0;for(;!k.done&&x<$P;)k=m.sample(x),A.push(k.value),x+=Hs;v=void 0,d=A,f=x-Hs,g="linear"}const y=jT(e.owner.current,t,d,{...o,duration:f,ease:g,times:v}),S=()=>{u=!1,y.cancel()},h=()=>{u=!0,$e.update(S),a(),c()};return y.onfinish=()=>{u||(e.set(VT(d,o)),r&&r(),h())},{then(m,k){return l.then(m,k)},attachTimeline(m){return y.timeline=m,y.onfinish=null,He},get time(){return An(y.currentTime||0)},set time(m){y.currentTime=$r(m)},get speed(){return y.playbackRate},set speed(m){y.playbackRate=m},get duration(){return An(f)},play:()=>{s||(y.play(),Dn(S))},pause:()=>y.pause(),stop:()=>{if(s=!0,y.playState==="idle")return;const{currentTime:m}=y;if(m){const k=Ka({...o,autoplay:!1});e.setWithVelocity(k.sample(m-Hs).value,k.sample(m).value,Hs)}h()},complete:()=>{u||y.finish()},cancel:h}}function IP({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:He,pause:He,stop:He,then:i=>(i(),Promise.resolve()),cancel:He,complete:He});return t?Ka({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const jP={type:"spring",stiffness:500,damping:25,restSpeed:10},VP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),OP={type:"keyframes",duration:.8},_P={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},FP=(e,{keyframes:t})=>t.length>2?OP:Hr.has(e)?e.startsWith("scale")?VP(t[1]):jP:_P,zc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(lr.test(t)||t==="0")&&!t.startsWith("url(")),NP=new Set(["brightness","contrast","saturate","opacity"]);function BP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(pf)||[];if(!r)return e;const o=n.replace(r,"");let i=NP.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const zP=/([a-z-]*)\(.*?\)/g,Uc={...lr,getAnimatableNone:e=>{const t=e.match(zP);return t?t.map(BP).join(" "):e}},UP={...$y,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:Uc,WebkitFilter:Uc},Af=e=>UP[e];function f1(e,t){let n=Af(e);return n!==Uc&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const p1=e=>/^0[^.\s]+$/.test(e);function HP(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||p1(e)}function WP(e,t,n,r){const o=zc(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?s:i[u-1]),HP(i[u])&&l.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(a=i[u]);if(o&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];i[c]=f1(t,a)}return i}function QP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Cf(e,t){return e[t]||e.default||e}const Tf=(e,t,n,r={})=>o=>{const i=Cf(r,e)||{},s=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-$r(s);const l=WP(t,e,n,i),u=l[0],c=l[l.length-1],d=zc(e,u),f=zc(e,c);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:v=>{t.set(v),i.onUpdate&&i.onUpdate(v)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(QP(i)||(g={...g,...FP(e,g)}),g.duration&&(g.duration=$r(g.duration)),g.repeatDelay&&(g.repeatDelay=$r(g.repeatDelay)),!d||!f||IT.current||i.type===!1||by.skipAnimations)return IP(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=MP(t,e,g);if(v)return v}return Ka(g)};function Ya(e){return!!(kt(e)&&e.add)}const h1=e=>/^\-?\d*\.?\d+$/.test(e);function Pf(e,t){e.indexOf(t)===-1&&e.push(t)}function Rf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Df{constructor(){this.subscriptions=[]}add(t){return Pf(this.subscriptions,t),()=>Rf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const em=30,GP=e=>!isNaN(parseFloat(e));class KP{constructor(t,n={}){this.version="11.0.8",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{const i=Lr.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=GP(this.current),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Lr.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Df);const r=this.events[t].add(n);return t==="change"?()=>{r(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Lr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>em)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,em);return u1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fo(e,t){return new KP(e,t)}const m1=e=>t=>t.test(e),YP={test:e=>e==="auto",parse:e=>e},g1=[Qo,ee,un,Fn,qC,ZC,YP],ui=e=>g1.find(m1(e)),XP=[...g1,lt,lr],ZP=e=>XP.find(m1(e));function qP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fo(n))}function JP(e,t){const n=$l(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const s in i){const a=pT(i[s]);qP(e,s,a)}}function eR(e,t,n){var r,o;const i=Object.keys(t).filter(a=>!e.hasValue(a)),s=i.length;if(s)for(let a=0;a<s;a++){const l=i[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(h1(c)||p1(c))?c=parseFloat(c):!ZP(c)&&lr.test(u)&&(c=f1(l,u)),e.addValue(l,Fo(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function tR(e,t){return t?(t[e]||t.default||t).from:void 0}function nR(e,t,n){const r={};for(const o in e){const i=tR(o,t);if(i!==void 0)r[o]=i;else{const s=n.getValue(o);s&&(r[o]=s.get())}}return r}function rR({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function oR(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function v1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const d in a){const f=e.getValue(d),g=a[d];if(!f||g===void 0||c&&rR(c,d))continue;const v={delay:n,elapsed:0,...Cf(i||{},d)};if(window.HandoffAppearAnimations){const h=e.getProps()[ky];if(h){const p=window.HandoffAppearAnimations(h,d,f,$e);p!==null&&(v.elapsed=p,v.isHandoff=!0)}}let y=!v.isHandoff&&!oR(f,g);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(y=!1),f.animation&&(y=!1),y)continue;f.start(Tf(d,f,g,e.shouldReduceMotion&&Hr.has(d)?{type:!1}:v));const S=f.animation;Ya(l)&&(l.add(d),S.then(()=>l.remove(d))),u.push(S)}return s&&Promise.all(u).then(()=>{s&&JP(e,s)}),u}function Hc(e,t,n={}){const r=$l(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(v1(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:d}=o;return iR(e,t,u+l,c,d,n)}:()=>Promise.resolve(),{when:a}=o;if(a){const[l,u]=a==="beforeChildren"?[i,s]:[s,i];return l().then(()=>u())}else return Promise.all([i(),s(n.delay)])}function iR(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(sR).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Hc(u,t,{...i,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function sR(e,t){return e.sortNodePosition(t)}function aR(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>Hc(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=Hc(e,t,n);else{const o=typeof t=="function"?$l(e,t,n.custom):t;r=Promise.all(v1(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const lR=[...cf].reverse(),uR=cf.length;function cR(e){return t=>Promise.all(t.map(({animation:n,options:r})=>aR(e,n,r)))}function dR(e){let t=cR(e);const n=pR();let r=!0;const o=(l,u)=>{const c=$l(e,u);if(c){const{transition:d,transitionEnd:f,...g}=c;l={...l,...g,...f}}return l};function i(l){t=l(e)}function s(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],g=new Set;let v={},y=1/0;for(let h=0;h<uR;h++){const p=lR[h],m=n[p],k=c[p]!==void 0?c[p]:d[p],A=ts(k),x=p===u?m.isActive:null;x===!1&&(y=h);let b=k===d[p]&&k!==c[p]&&A;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),m.protectedKeys={...v},!m.isActive&&x===null||!k&&!m.prevProp||Pl(k)||typeof k=="boolean")continue;let L=fR(m.prevProp,k)||p===u&&m.isActive&&!b&&A||h>y&&A,_=!1;const G=Array.isArray(k)?k:[k];let K=G.reduce(o,{});x===!1&&(K={});const{prevResolvedValues:re={}}=m,te={...re,...K},he=ae=>{L=!0,g.has(ae)&&(_=!0,g.delete(ae)),m.needsAnimating[ae]=!0};for(const ae in te){const q=K[ae],D=re[ae];if(v.hasOwnProperty(ae))continue;let V=!1;Wa(q)&&Wa(D)?V=!Wy(q,D):V=q!==D,V?q!==void 0?he(ae):g.add(ae):q!==void 0&&g.has(ae)?he(ae):m.protectedKeys[ae]=!0}m.prevProp=k,m.prevResolvedValues=K,m.isActive&&(v={...v,...K}),r&&e.blockInitialAnimation&&(L=!1),L&&(!b||_)&&f.push(...G.map(ae=>({animation:ae,options:{type:p,...l}})))}if(g.size){const h={};g.forEach(p=>{const m=e.getBaseTarget(p);m!==void 0&&(h[p]=m)}),f.push({animation:h})}let S=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(f):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=s(c,l);for(const g in n)n[g].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n}}function fR(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Wy(t,e):!1}function mr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pR(){return{animate:mr(!0),whileInView:mr(),whileHover:mr(),whileTap:mr(),whileDrag:mr(),whileFocus:mr(),exit:mr()}}class hR extends fr{constructor(t){super(t),t.animationState||(t.animationState=dR(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Pl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let mR=0;class gR extends fr{constructor(){super(...arguments),this.id=mR++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const vR={animation:{Feature:hR},exit:{Feature:gR}},tm=(e,t)=>Math.abs(e-t);function yR(e,t){const n=tm(e.x,t.x),r=tm(e.y,t.y);return Math.sqrt(n**2+r**2)}class y1{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Eu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=yR(d.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=d,{timestamp:y}=nt;this.history.push({...v,timestamp:y});const{onStart:S,onMove:h}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=bu(f,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Eu(d.type==="pointercancel"?this.lastMoveEventInfo:bu(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,S),v&&v(d,S)},!Ny(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=Dl(t),a=bu(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=nt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Eu(a,this.history)),this.removeListeners=En(bn(this.contextWindow,"pointermove",this.handlePointerMove),bn(this.contextWindow,"pointerup",this.handlePointerUp),bn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Dn(this.updatePoint)}}function bu(e,t){return t?{point:t(e.point)}:e}function nm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Eu({point:e},t){return{point:e,delta:nm(e,x1(t)),offset:nm(e,xR(t)),velocity:wR(t,.1)}}function xR(e){return e[0]}function x1(e){return e[e.length-1]}function wR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=x1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>$r(t)));)n--;if(!r)return{x:0,y:0};const i=An(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Rt(e){return e.max-e.min}function Wc(e,t=0,n=.01){return Math.abs(e-t)<=n}function rm(e,t,n,r=.5){e.origin=r,e.originPoint=De(t.min,t.max,e.origin),e.scale=Rt(n)/Rt(t),(Wc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=De(n.min,n.max,e.origin)-e.originPoint,(Wc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Di(e,t,n,r){rm(e.x,t.x,n.x,r?r.originX:void 0),rm(e.y,t.y,n.y,r?r.originY:void 0)}function om(e,t,n){e.min=n.min+t.min,e.max=e.min+Rt(t)}function SR(e,t,n){om(e.x,t.x,n.x),om(e.y,t.y,n.y)}function im(e,t,n){e.min=t.min-n.min,e.max=e.min+Rt(t)}function $i(e,t,n){im(e.x,t.x,n.x),im(e.y,t.y,n.y)}function kR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?De(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?De(n,e,r.max):Math.min(e,n)),e}function sm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function bR(e,{top:t,left:n,bottom:r,right:o}){return{x:sm(e.x,n,o),y:sm(e.y,t,r)}}function am(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ER(e,t){return{x:am(e.x,t.x),y:am(e.y,t.y)}}function AR(e,t){let n=.5;const r=Rt(e),o=Rt(t);return o>r?n=rs(t.min,t.max-r,e.min):r>o&&(n=rs(e.min,e.max-o,t.min)),ar(0,1,n)}function CR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qc=.35;function TR(e=Qc){return e===!1?e=0:e===!0&&(e=Qc),{x:lm(e,"left","right"),y:lm(e,"top","bottom")}}function lm(e,t,n){return{min:um(e,t),max:um(e,n)}}function um(e,t){return typeof e=="number"?e:e[t]||0}const cm=()=>({translate:0,scale:1,origin:0,originPoint:0}),vo=()=>({x:cm(),y:cm()}),dm=()=>({min:0,max:0}),Fe=()=>({x:dm(),y:dm()});function Mt(e){return[e("x"),e("y")]}function w1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function PR({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function RR(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Au(e){return e===void 0||e===1}function Gc({scale:e,scaleX:t,scaleY:n}){return!Au(e)||!Au(t)||!Au(n)}function yr(e){return Gc(e)||S1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function S1(e){return fm(e.x)||fm(e.y)}function fm(e){return e&&e!=="0%"}function Xa(e,t,n){const r=e-n,o=t*r;return n+o}function pm(e,t,n,r,o){return o!==void 0&&(e=Xa(e,o,r)),Xa(e,n,r)+t}function Kc(e,t=0,n=1,r,o){e.min=pm(e.min,t,n,r,o),e.max=pm(e.max,t,n,r,o)}function k1(e,{x:t,y:n}){Kc(e.x,t.translate,t.scale,t.originPoint),Kc(e.y,n.translate,n.scale,n.originPoint)}function DR(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&yo(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,k1(e,s)),r&&yr(i.latestValues)&&yo(e,i.latestValues))}t.x=hm(t.x),t.y=hm(t.y)}function hm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function zn(e,t){e.min=e.min+t,e.max=e.max+t}function mm(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,s=De(e.min,e.max,i);Kc(e,t[n],t[r],s,t.scale)}const $R=["x","scaleX","originX"],LR=["y","scaleY","originY"];function yo(e,t){mm(e.x,t,$R),mm(e.y,t,LR)}function b1(e,t){return w1(RR(e.getBoundingClientRect(),t))}function MR(e,t,n){const r=b1(e,n),{scroll:o}=t;return o&&(zn(r.x,o.offset.x),zn(r.y,o.offset.y)),r}const E1=({current:e})=>e?e.ownerDocument.defaultView:null,IR=new WeakMap;class jR{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Dl(c,"page").point)},i=(c,d)=>{const{drag:f,dragPropagation:g,onDragStart:v}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=zy(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Mt(S=>{let h=this.getAxisMotionValue(S).get()||0;if(un.test(h)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[S];m&&(h=Rt(m)*(parseFloat(h)/100))}}this.originPoint[S]=h}),v&&$e.update(()=>v(c,d),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=d;if(g&&this.currentDirection===null){this.currentDirection=VR(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),y&&y(c,d)},a=(c,d)=>this.stop(c,d),l=()=>Mt(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new y1(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:E1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&$e.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Ws(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=kR(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&mo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=bR(o.layoutBox,n):this.constraints=!1,this.elastic=TR(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Mt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=CR(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!mo(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=MR(r,o.root,this.visualElement.getTransformPagePoint());let s=ER(o.layout.layoutBox,i);if(n){const a=n(PR(s));this.hasMutatedConstraints=!!a,a&&(s=w1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Mt(c=>{if(!Ws(c,n,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const f=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Tf(t,r,0,n))}stopAnimation(){Mt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Mt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Mt(n=>{const{drag:r}=this.getProps();if(!Ws(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-De(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!mo(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Mt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();o[s]=AR({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Mt(s=>{if(!Ws(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(De(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;IR.set(this.visualElement,this);const t=this.visualElement.current,n=bn(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();mo(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const s=Sn(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Mt(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Qc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function Ws(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function VR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class OR extends fr{constructor(t){super(t),this.removeGroupControls=He,this.removeListeners=He,this.controls=new jR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||He}unmount(){this.removeGroupControls(),this.removeListeners()}}const gm=e=>(t,n)=>{e&&$e.update(()=>e(t,n))};class _R extends fr{constructor(){super(...arguments),this.removePointerDownListener=He}onPointerDown(t){this.session=new y1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:gm(t),onStart:gm(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&$e.update(()=>o(i,s))}}}mount(){this.removePointerDownListener=bn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function FR(){const e=w.useContext(af);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=w.useId();return w.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const da={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function vm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ci={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ee.test(e))e=parseFloat(e);else return e;const n=vm(e,t.target.x),r=vm(e,t.target.y);return`${n}% ${r}%`}},NR={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=lr.parse(e);if(o.length>5)return r;const i=lr.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=De(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class BR extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;zC(zR),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),da.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||$e.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),uf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function A1(e){const[t,n]=FR(),r=w.useContext(Cy);return C.createElement(BR,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Ty),isPresent:t,safeToRemove:n})}const zR={borderRadius:{...ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ci,borderTopRightRadius:ci,borderBottomLeftRadius:ci,borderBottomRightRadius:ci,boxShadow:NR},C1=["TopLeft","TopRight","BottomLeft","BottomRight"],UR=C1.length,ym=e=>typeof e=="string"?parseFloat(e):e,xm=e=>typeof e=="number"||ee.test(e);function HR(e,t,n,r,o,i){o?(e.opacity=De(0,n.opacity!==void 0?n.opacity:1,WR(r)),e.opacityExit=De(t.opacity!==void 0?t.opacity:1,0,QR(r))):i&&(e.opacity=De(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<UR;s++){const a=`border${C1[s]}Radius`;let l=wm(t,a),u=wm(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||xm(l)===xm(u)?(e[a]=Math.max(De(ym(l),ym(u),r),0),(un.test(u)||un.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=De(t.rotate||0,n.rotate||0,r))}function wm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const WR=T1(0,.5,e1),QR=T1(.5,.95,He);function T1(e,t,n){return r=>r<e?0:r>t?1:n(rs(e,t,r))}function Sm(e,t){e.min=t.min,e.max=t.max}function Lt(e,t){Sm(e.x,t.x),Sm(e.y,t.y)}function km(e,t,n,r,o){return e-=t,e=Xa(e,1/n,r),o!==void 0&&(e=Xa(e,1/o,r)),e}function GR(e,t=0,n=1,r=.5,o,i=e,s=e){if(un.test(t)&&(t=parseFloat(t),t=De(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=De(i.min,i.max,r);e===i&&(a-=t),e.min=km(e.min,t,n,a,o),e.max=km(e.max,t,n,a,o)}function bm(e,t,[n,r,o],i,s){GR(e,t[n],t[r],t[o],t.scale,i,s)}const KR=["x","scaleX","originX"],YR=["y","scaleY","originY"];function Em(e,t,n,r){bm(e.x,t,KR,n?n.x:void 0,r?r.x:void 0),bm(e.y,t,YR,n?n.y:void 0,r?r.y:void 0)}function Am(e){return e.translate===0&&e.scale===1}function P1(e){return Am(e.x)&&Am(e.y)}function XR(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function R1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Cm(e){return Rt(e.x)/Rt(e.y)}class ZR{constructor(){this.members=[]}add(t){Pf(this.members,t),t.scheduleRender()}remove(t){if(Rf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Tm(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const qR=(e,t)=>e.depth-t.depth;class JR{constructor(){this.children=[],this.isDirty=!1}add(t){Pf(this.children,t),this.isDirty=!0}remove(t){Rf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(qR),this.isDirty=!1,this.children.forEach(t)}}function eD(e,t){const n=Lr.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Dn(r),e(i-t))};return $e.read(r,!0),()=>Dn(r)}function tD(e){window.MotionDebug&&window.MotionDebug.record(e)}function nD(e){return e instanceof SVGElement&&e.tagName!=="svg"}function rD(e,t,n){const r=kt(e)?e:Fo(e);return r.start(Tf("",r,t,n)),r.animation}const Pm=["","X","Y","Z"],oD={visibility:"hidden"},Rm=1e3;let iD=0;const xr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function D1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=iD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xr.totalNodes=xr.resolvedTargetDeltas=xr.recalculatedProjection=0,this.nodes.forEach(lD),this.nodes.forEach(pD),this.nodes.forEach(hD),this.nodes.forEach(uD),tD(xr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new JR)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Df),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=nD(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=eD(f,250),da.hasAnimatedSinceResize&&(da.hasAnimatedSinceResize=!1,this.nodes.forEach($m))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||xD,{onLayoutAnimationStart:S,onLayoutAnimationComplete:h}=c.getProps(),p=!this.targetLayout||!R1(this.targetLayout,v)||g,m=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const k={...Cf(y,"layout"),onPlay:S,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else f||$m(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mD),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dm);return}this.isUpdating||this.nodes.forEach(dD),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(fD),this.nodes.forEach(sD),this.nodes.forEach(aD),this.clearAllSnapshots();const a=Lr.now();nt.delta=ar(0,1e3/60,a-nt.timestamp),nt.timestamp=a,nt.isProcessing=!0,gu.update.process(nt),gu.preRender.process(nt),gu.render.process(nt),nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uf.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(cD),this.sharedNodes.forEach(gD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!P1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||yr(this.latestValues)||c)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),wD(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Fe();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(zn(a.x,l.offset.x),zn(a.y,l.offset.y)),a}removeElementScroll(s){const a=Fe();Lt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Lt(a,s);const{scroll:f}=this.root;f&&(zn(a.x,-f.offset.x),zn(a.y,-f.offset.y))}zn(a.x,c.offset.x),zn(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=Fe();Lt(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&yo(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),yr(c.latestValues)&&yo(l,c.latestValues)}return yr(this.latestValues)&&yo(l,this.latestValues),l}removeTransform(s){const a=Fe();Lt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!yr(u.latestValues))continue;Gc(u.latestValues)&&u.updateSnapshot();const c=Fe(),d=u.measurePageBox();Lt(c,d),Em(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return yr(this.latestValues)&&Em(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=nt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),$i(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Fe(),this.targetWithTransforms=Fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),SR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Lt(this.target,this.layout.layoutBox),k1(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Fe(),this.relativeTargetOrigin=Fe(),$i(this.relativeTargetOrigin,this.target,g.target),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gc(this.parent.latestValues)||S1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===nt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Lt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;DR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Fe());const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=vo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=vo(),this.projectionDeltaWithTransform=vo());const y=this.projectionTransform;Di(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Tm(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),xr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=vo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Fe(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=g!==v,S=this.getStack(),h=!S||S.members.length<=1,p=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(yD));this.animationProgress=0;let m;this.mixTargetDelta=k=>{const A=k/1e3;Lm(d.x,s.x,A),Lm(d.y,s.y,A),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($i(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vD(this.relativeTarget,this.relativeTargetOrigin,f,A),m&&XR(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Fe()),Lt(m,this.relativeTarget)),y&&(this.animationValues=c,HR(c,u,this.latestValues,A,p,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Dn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{da.hasAnimatedSinceResize=!0,this.currentAnimation=rD(0,Rm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Rm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&$1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Fe();const d=Rt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=Rt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Lt(a,l),yo(a,c),Di(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new ZR),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Pm.length;c++){const d="rotate"+Pm[c];l[d]&&(u[d]=l[d],s.setStaticValue(d,0))}s.render();for(const c in u)s.setStaticValue(c,u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return oD;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ua(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ua(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!yr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Tm(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:g,y:v}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in za){if(f[y]===void 0)continue;const{correct:S,applyTo:h}=za[y],p=u.transform==="none"?f[y]:S(f[y],d);if(h){const m=h.length;for(let k=0;k<m;k++)u[h[k]]=p}else u[y]=p}return this.options.layoutId&&(u.pointerEvents=d===this?ua(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Dm),this.root.sharedNodes.clear()}}}function sD(e){e.updateLayout()}function aD(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?Mt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Rt(f);f.min=r[d].min,f.max=f.min+g}):$1(i,n.layoutBox,r)&&Mt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],g=Rt(r[d]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=vo();Di(a,r,n.layoutBox);const l=vo();s?Di(l,e.applyTransform(o,!0),n.measuredBox):Di(l,r,n.layoutBox);const u=!P1(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:g}=d;if(f&&g){const v=Fe();$i(v,n.layoutBox,f.layoutBox);const y=Fe();$i(y,r,g.layoutBox),R1(v,y)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function lD(e){xr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function uD(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function cD(e){e.clearSnapshot()}function Dm(e){e.clearMeasurements()}function dD(e){e.isLayoutDirty=!1}function fD(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $m(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function pD(e){e.resolveTargetDelta()}function hD(e){e.calcProjection()}function mD(e){e.resetRotation()}function gD(e){e.removeLeadSnapshot()}function Lm(e,t,n){e.translate=De(t.translate,0,n),e.scale=De(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Mm(e,t,n,r){e.min=De(t.min,n.min,r),e.max=De(t.max,n.max,r)}function vD(e,t,n,r){Mm(e.x,t.x,n.x,r),Mm(e.y,t.y,n.y,r)}function yD(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const xD={duration:.45,ease:[.4,0,.1,1]},Im=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),jm=Im("applewebkit/")&&!Im("chrome/")?Math.round:He;function Vm(e){e.min=jm(e.min),e.max=jm(e.max)}function wD(e){Vm(e.x),Vm(e.y)}function $1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Wc(Cm(t),Cm(n),.2)}const SD=D1({attachResizeListener:(e,t)=>Sn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cu={current:void 0},L1=D1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cu.current){const e=new SD({});e.mount(window),e.setOptions({layoutScroll:!0}),Cu.current=e}return Cu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),kD={pan:{Feature:_R},drag:{Feature:OR,ProjectionNode:L1,MeasureLayout:A1}},bD=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ED(e){const t=bD.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Yc(e,t,n=1){const[r,o]=ED(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return h1(s)?parseFloat(s):s}else return Ua(o)?Yc(o,t,n+1):o}function AD(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!Ua(i))return;const s=Yc(i,r);s&&o.set(s)});for(const o in t){const i=t[o];if(!Ua(i))continue;const s=Yc(i,r);s&&(t[o]=s,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const CD=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),M1=e=>CD.has(e),TD=e=>Object.keys(e).some(M1),Om=e=>e===Qo||e===ee,_m=(e,t)=>parseFloat(e.split(", ")[t]),Fm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return _m(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?_m(i[1],e):0}},PD=new Set(["x","y","z"]),RD=fs.filter(e=>!PD.has(e));function DD(e){const t=[];return RD.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const No={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Fm(4,13),y:Fm(5,14)};No.translateX=No.x;No.translateY=No.y;const $D=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:s}=i,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=No[u](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);c&&c.jump(a[u]),e[u]=No[u](l,i)}),e},LD=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(M1);let i=[],s=!1;const a=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=ui(c);const f=t[l];let g;if(Wa(f)){const v=f.length,y=f[0]===null?1:0;c=f[y],d=ui(c);for(let S=y;S<v&&f[S]!==null;S++)g?wf(ui(f[S])===g):g=ui(f[S])}else g=ui(f);if(d!==g)if(Om(d)&&Om(g)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&g===ee&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(c===0||f===0)?c===0?u.set(g.transform(c)):t[l]=d.transform(f):(s||(i=DD(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=$D(t,e,a);return i.length&&i.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Tl&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function MD(e,t,n,r){return TD(t)?LD(e,t,n,r):{target:t,transitionEnd:r}}const ID=(e,t,n,r)=>{const o=AD(e,t,r);return t=o.target,r=o.transitionEnd,MD(e,t,n,r)},Xc={current:null},I1={current:!1};function jD(){if(I1.current=!0,!!Tl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Xc.current=e.matches;e.addListener(t),t()}else Xc.current=!1}function VD(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],s=n[o];if(kt(i))e.addValue(o,i),Ya(r)&&r.add(o);else if(kt(s))e.addValue(o,Fo(i,{owner:e})),Ya(r)&&r.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);!a.hasAnimated&&a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,Fo(a!==void 0?a:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Nm=new WeakMap,j1=Object.keys(ns),OD=j1.length,Bm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],_D=df.length;class FD{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>$e.render(this.render,!1,!0);const{latestValues:a,renderState:l}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=Rl(n),this.isVariantNode=Ay(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const f=c[d];a[d]!==void 0&&kt(f)&&(f.set(a[d],!1),Ya(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Nm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),I1.current||jD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Nm.delete(this.current),this.projection&&this.projection.unmount(),Dn(this.notifyUpdate),Dn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Hr.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&$e.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let s,a;for(let l=0;l<OD;l++){const u=j1[l],{isEnabled:c,Feature:d,ProjectionNode:f,MeasureLayout:g}=ns[u];f&&(s=f),c(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&mo(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Bm.length;r++){const o=Bm[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=VD(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<_D;r++){const o=df[r],i=this.props[o];(ts(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Fo(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=xf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!kt(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Df),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class V1 extends FD{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},o){const i=nR(r,t||{},this);if(o){eR(this,r,i);const s=ID(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function ND(e){return window.getComputedStyle(e)}class BD extends V1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Hr.has(n)){const r=Af(n);return r&&r.default||0}else{const r=ND(t),o=(Dy(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return b1(t,n)}build(t,n,r,o){hf(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return yf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;kt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){jy(t,n,r,o)}}class zD extends V1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Hr.has(n)){const r=Af(n);return r&&r.default||0}return n=Vy.has(n)?n:lf(n),t.getAttribute(n)}measureInstanceViewportBox(){return Fe()}scrapeMotionValuesFromProps(t,n){return _y(t,n)}build(t,n,r,o){gf(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){Oy(t,n,r,o)}mount(t){this.isSVGTag=vf(t.tagName),super.mount(t)}}const UD=(e,t)=>ff(e)?new zD(t,{enableHardwareAcceleration:!1}):new BD(t,{enableHardwareAcceleration:!0}),HD={layout:{ProjectionNode:L1,MeasureLayout:A1}},WD={...vR,...$T,...kD,...HD},QD=NC((e,t)=>yT(e,t,WD,UD)),GD={hidden:{y:"100%"},visible:{y:0,transition:{duration:.7}}},O1=({handleModal:e})=>{const t=y0();return M.jsxs(TC,{as:QD.div,variants:GD,initial:"hidden",animate:"visible",children:[M.jsx("nav",{children:M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx(ln,{href:"#",onClick:()=>{e(),t("/")},children:"Página inicial"})}),M.jsx("li",{children:M.jsx(ln,{href:"#",onClick:()=>{e(),t("/portfolio")},children:"Projetos"})}),M.jsx("li",{children:M.jsx(ln,{href:"https://drive.google.com/file/d/1zXradmgh5Wo4umhGUJ2GBVU7tJV9zusS/view?usp=sharing",target:"_blank",children:"Meu currículo"})})]})}),M.jsx(es,{primary:!0,onClick:e,children:"Fechar"})]})},KD=$.footer`
  #content {
    display: flex;
    text-align: center;
    margin: 3rem 0;

    strong {
        width: 70%;
        margin: 0 auto;
    }
  }
`,YD=()=>M.jsx(KD,{children:M.jsx("div",{id:"content",children:M.jsx("strong",{children:"Desenvolvido por Vicente Carlos Silva e Silva"})})}),_1=w.createContext({}),XD=({children:e})=>{const[t,n]=w.useState(!1),r=()=>n(!t);return M.jsx(_1.Provider,{value:{modalIsOpen:t,handleModal:r},children:e})},F1=()=>w.useContext(_1),ZD=()=>{const{modalIsOpen:e,handleModal:t}=F1();return M.jsxs(M.Fragment,{children:[M.jsx(Q0,{}),e?M.jsx(O1,{handleModal:t}):M.jsxs(M.Fragment,{children:[M.jsx(xy,{handleModal:t}),M.jsx(CC,{}),M.jsx(YD,{})]})]})},qD=$.main`
  text-align: center;

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 3rem 0;
    }

    section {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 80vh;

      .frame-container {
        display: flex;
        flex-direction: column;
        width: 80vw;

        .content {
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;

          nav {
            margin-top: 1.5rem;
            ul {
              li {
                list-style-type: none;
                margin: 1.7rem 0;
                a {
                  text-decoration: none;
                  color: black;
                  background-color: #c6c6c6;
                  padding: 7px;
                  border-radius: 3%;
                  box-shadow: inset 1px 1px 0px 1px #fefefe,
                    inset -1px -1px 0 1px #848584;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    #container {
      margin-top: 3rem;

      section {
        overflow-y: hidden;

        .frame-container {
          flex-direction: row;
          width: 80vw;
          overflow-x: scroll;

          .content {
            margin: 1.5rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    #container {
      section {
        .frame-container {
          width: 66vw;
        }
      }
    }
  }
`,JD=[{image:"../../../public/assets/svg/dashgo.svg",url:"https://dashgo-web02.vercel.app/",github:"https://github.com/VicenteCarlos/dashgo.web",background:"../../../public/assets/img/dev.gif"},{image:"../../../public/assets/svg/githubapi.svg",url:"https://search-users-eight.vercel.app/",github:"https://github.com/VicenteCarlos/search-users",background:"../../../public/assets/img/git.gif"},{image:"../../../public/assets/svg/ricky.svg",url:"https://ricky-and-morty-web-nine.vercel.app/",github:"https://github.com/VicenteCarlos/ricky-and-morty.web",background:"../../../public/assets/img/ricky.gif"}],e$=()=>{const{handleModal:e,modalIsOpen:t}=F1();return M.jsxs(M.Fragment,{children:[M.jsx(Q0,{}),t?M.jsx(O1,{handleModal:e}):M.jsxs(M.Fragment,{children:[M.jsx(xy,{handleModal:e}),M.jsx(qD,{children:M.jsxs("div",{id:"container",children:[M.jsx("div",{id:"menu",children:M.jsx("h1",{children:"Projetos"})}),M.jsx("section",{children:M.jsx(Ao,{className:"frame-container",style:{padding:"20px"},children:JD.map((n,r)=>M.jsxs(Ao,{className:"content",shadow:!0,style:{padding:"10px",backgroundImage:`url(${n.background})`,backgroundSize:"cover"},children:[M.jsx(fy,{backgroundStyles:{backgroundImage:`url(${n.image})`,backgroundSize:"auto"}},r),M.jsx("nav",{children:M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx(ln,{href:n.url,target:"_blank",children:"Acessar Projeto"})}),M.jsx("li",{children:M.jsx(ln,{href:n.github,target:"_blank",children:"Repositório Git"})})]})})]}))})})]})})]})]})},t$=[{path:"/",element:M.jsx(ZD,{})},{path:"/portfolio",element:M.jsx(e$,{})}],n$=Ak(t$);var r$={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},o$=r$;const i$=Zc(o$);Tu.createRoot(document.getElementById("root")).render(M.jsx(C.StrictMode,{children:M.jsx(Ib,{theme:i$,children:M.jsx(XD,{children:M.jsx(Ik,{router:n$})})})}));
