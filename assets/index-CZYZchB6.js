(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function u(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=u(d);fetch(d.href,h)}})();function Mg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ac={exports:{}},Or={};var Dp;function Dg(){if(Dp)return Or;Dp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,d,h){var m=null;if(h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),"key"in d){h={};for(var k in d)k!=="key"&&(h[k]=d[k])}else h=d;return d=h.ref,{$$typeof:l,type:c,key:m,ref:d!==void 0?d:null,props:h}}return Or.Fragment=i,Or.jsx=u,Or.jsxs=u,Or}var Op;function Og(){return Op||(Op=1,Ac.exports=Dg()),Ac.exports}var p=Og(),Rc={exports:{}},ue={};var _p;function _g(){if(_p)return ue;_p=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),M=Symbol.iterator;function F(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Ae={};function _e(x,_,P){this.props=x,this.context=_,this.refs=Ae,this.updater=P||H}_e.prototype.isReactComponent={},_e.prototype.setState=function(x,_){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,_,"setState")},_e.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ke(){}ke.prototype=_e.prototype;function V(x,_,P){this.props=x,this.context=_,this.refs=Ae,this.updater=P||H}var oe=V.prototype=new ke;oe.constructor=V,X(oe,_e.prototype),oe.isPureReactComponent=!0;var ie=Array.isArray;function ye(){}var te={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function Ke(x,_,P){var K=P.ref;return{$$typeof:l,type:x,key:_,ref:K!==void 0?K:null,props:P}}function en(x,_){return Ke(x.type,_,x.props)}function Je(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function nn(x){var _={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(P){return _[P]})}var Sn=/\/+/g;function tn(x,_){return typeof x=="object"&&x!==null&&x.key!=null?nn(""+x.key):_.toString(36)}function vn(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(_){x.status==="pending"&&(x.status="fulfilled",x.value=_)},function(_){x.status==="pending"&&(x.status="rejected",x.reason=_)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,_,P,K,ce){var ge=typeof x;(ge==="undefined"||ge==="boolean")&&(x=null);var Re=!1;if(x===null)Re=!0;else switch(ge){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(x.$$typeof){case l:case i:Re=!0;break;case E:return Re=x._init,N(Re(x._payload),_,P,K,ce)}}if(Re)return ce=ce(x),Re=K===""?"."+tn(x,0):K,ie(ce)?(P="",Re!=null&&(P=Re.replace(Sn,"$&/")+"/"),N(ce,_,P,"",function(gt){return gt})):ce!=null&&(Je(ce)&&(ce=en(ce,P+(ce.key==null||x&&x.key===ce.key?"":(""+ce.key).replace(Sn,"$&/")+"/")+Re)),_.push(ce)),1;Re=0;var Cn=K===""?".":K+":";if(ie(x))for(var an=0;an<x.length;an++)K=x[an],ge=Cn+tn(K,an),Re+=N(K,_,P,ge,ce);else if(an=F(x),typeof an=="function")for(x=an.call(x),an=0;!(K=x.next()).done;)K=K.value,ge=Cn+tn(K,an++),Re+=N(K,_,P,ge,ce);else if(ge==="object"){if(typeof x.then=="function")return N(vn(x),_,P,K,ce);throw _=String(x),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Re}function O(x,_,P){if(x==null)return x;var K=[],ce=0;return N(x,K,"","",function(ge){return _.call(P,ge,ce++)}),K}function I(x){if(x._status===-1){var _=x._result;_=_(),_.then(function(P){(x._status===0||x._status===-1)&&(x._status=1,x._result=P)},function(P){(x._status===0||x._status===-1)&&(x._status=2,x._result=P)}),x._status===-1&&(x._status=0,x._result=_)}if(x._status===1)return x._result.default;throw x._result}var Z=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},de={map:O,forEach:function(x,_,P){O(x,function(){_.apply(this,arguments)},P)},count:function(x){var _=0;return O(x,function(){_++}),_},toArray:function(x){return O(x,function(_){return _})||[]},only:function(x){if(!Je(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=U,ue.Children=de,ue.Component=_e,ue.Fragment=u,ue.Profiler=d,ue.PureComponent=V,ue.StrictMode=c,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return te.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,_,P){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var K=X({},x.props),ce=x.key;if(_!=null)for(ge in _.key!==void 0&&(ce=""+_.key),_)!Te.call(_,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&_.ref===void 0||(K[ge]=_[ge]);var ge=arguments.length-2;if(ge===1)K.children=P;else if(1<ge){for(var Re=Array(ge),Cn=0;Cn<ge;Cn++)Re[Cn]=arguments[Cn+2];K.children=Re}return Ke(x.type,ce,K)},ue.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},ue.createElement=function(x,_,P){var K,ce={},ge=null;if(_!=null)for(K in _.key!==void 0&&(ge=""+_.key),_)Te.call(_,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ce[K]=_[K]);var Re=arguments.length-2;if(Re===1)ce.children=P;else if(1<Re){for(var Cn=Array(Re),an=0;an<Re;an++)Cn[an]=arguments[an+2];ce.children=Cn}if(x&&x.defaultProps)for(K in Re=x.defaultProps,Re)ce[K]===void 0&&(ce[K]=Re[K]);return Ke(x,ge,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:k,render:x}},ue.isValidElement=Je,ue.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:I}},ue.memo=function(x,_){return{$$typeof:v,type:x,compare:_===void 0?null:_}},ue.startTransition=function(x){var _=te.T,P={};te.T=P;try{var K=x(),ce=te.S;ce!==null&&ce(P,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(ye,Z)}catch(ge){Z(ge)}finally{_!==null&&P.types!==null&&(_.types=P.types),te.T=_}},ue.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ue.use=function(x){return te.H.use(x)},ue.useActionState=function(x,_,P){return te.H.useActionState(x,_,P)},ue.useCallback=function(x,_){return te.H.useCallback(x,_)},ue.useContext=function(x){return te.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,_){return te.H.useDeferredValue(x,_)},ue.useEffect=function(x,_){return te.H.useEffect(x,_)},ue.useEffectEvent=function(x){return te.H.useEffectEvent(x)},ue.useId=function(){return te.H.useId()},ue.useImperativeHandle=function(x,_,P){return te.H.useImperativeHandle(x,_,P)},ue.useInsertionEffect=function(x,_){return te.H.useInsertionEffect(x,_)},ue.useLayoutEffect=function(x,_){return te.H.useLayoutEffect(x,_)},ue.useMemo=function(x,_){return te.H.useMemo(x,_)},ue.useOptimistic=function(x,_){return te.H.useOptimistic(x,_)},ue.useReducer=function(x,_,P){return te.H.useReducer(x,_,P)},ue.useRef=function(x){return te.H.useRef(x)},ue.useState=function(x){return te.H.useState(x)},ue.useSyncExternalStore=function(x,_,P){return te.H.useSyncExternalStore(x,_,P)},ue.useTransition=function(){return te.H.useTransition()},ue.version="19.2.4",ue}var Up;function Ic(){return Up||(Up=1,Rc.exports=_g()),Rc.exports}var pe=Ic(),Nc={exports:{}},_r={},Mc={exports:{}},Dc={};var jp;function Ug(){return jp||(jp=1,(function(l){function i(N,O){var I=N.length;N.push(O);e:for(;0<I;){var Z=I-1>>>1,de=N[Z];if(0<d(de,O))N[Z]=O,N[I]=de,I=Z;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var O=N[0],I=N.pop();if(I!==O){N[0]=I;e:for(var Z=0,de=N.length,x=de>>>1;Z<x;){var _=2*(Z+1)-1,P=N[_],K=_+1,ce=N[K];if(0>d(P,I))K<de&&0>d(ce,P)?(N[Z]=ce,N[K]=I,Z=K):(N[Z]=P,N[_]=I,Z=_);else if(K<de&&0>d(ce,I))N[Z]=ce,N[K]=I,Z=K;else break e}}return O}function d(N,O){var I=N.sortIndex-O.sortIndex;return I!==0?I:N.id-O.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var m=Date,k=m.now();l.unstable_now=function(){return m.now()-k}}var b=[],v=[],E=1,U=null,M=3,F=!1,H=!1,X=!1,Ae=!1,_e=typeof setTimeout=="function"?setTimeout:null,ke=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function oe(N){for(var O=u(v);O!==null;){if(O.callback===null)c(v);else if(O.startTime<=N)c(v),O.sortIndex=O.expirationTime,i(b,O);else break;O=u(v)}}function ie(N){if(X=!1,oe(N),!H)if(u(b)!==null)H=!0,ye||(ye=!0,nn());else{var O=u(v);O!==null&&vn(ie,O.startTime-N)}}var ye=!1,te=-1,Te=5,Ke=-1;function en(){return Ae?!0:!(l.unstable_now()-Ke<Te)}function Je(){if(Ae=!1,ye){var N=l.unstable_now();Ke=N;var O=!0;try{e:{H=!1,X&&(X=!1,ke(te),te=-1),F=!0;var I=M;try{n:{for(oe(N),U=u(b);U!==null&&!(U.expirationTime>N&&en());){var Z=U.callback;if(typeof Z=="function"){U.callback=null,M=U.priorityLevel;var de=Z(U.expirationTime<=N);if(N=l.unstable_now(),typeof de=="function"){U.callback=de,oe(N),O=!0;break n}U===u(b)&&c(b),oe(N)}else c(b);U=u(b)}if(U!==null)O=!0;else{var x=u(v);x!==null&&vn(ie,x.startTime-N),O=!1}}break e}finally{U=null,M=I,F=!1}O=void 0}}finally{O?nn():ye=!1}}}var nn;if(typeof V=="function")nn=function(){V(Je)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,tn=Sn.port2;Sn.port1.onmessage=Je,nn=function(){tn.postMessage(null)}}else nn=function(){_e(Je,0)};function vn(N,O){te=_e(function(){N(l.unstable_now())},O)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(N){switch(M){case 1:case 2:case 3:var O=3;break;default:O=M}var I=M;M=O;try{return N()}finally{M=I}},l.unstable_requestPaint=function(){Ae=!0},l.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=M;M=N;try{return O()}finally{M=I}},l.unstable_scheduleCallback=function(N,O,I){var Z=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Z+I:Z):I=Z,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=I+de,N={id:E++,callback:O,priorityLevel:N,startTime:I,expirationTime:de,sortIndex:-1},I>Z?(N.sortIndex=I,i(v,N),u(b)===null&&N===u(v)&&(X?(ke(te),te=-1):X=!0,vn(ie,I-Z))):(N.sortIndex=de,i(b,N),H||F||(H=!0,ye||(ye=!0,nn()))),N},l.unstable_shouldYield=en,l.unstable_wrapCallback=function(N){var O=M;return function(){var I=M;M=O;try{return N.apply(this,arguments)}finally{M=I}}}})(Dc)),Dc}var zp;function jg(){return zp||(zp=1,Mc.exports=Ug()),Mc.exports}var Oc={exports:{}},On={};var Lp;function zg(){if(Lp)return On;Lp=1;var l=Ic();function i(b){var v="https://react.dev/errors/"+b;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)v+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(b,v,E){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:U==null?null:""+U,children:b,containerInfo:v,implementation:E}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,v){if(b==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,On.createPortal=function(b,v){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(i(299));return h(b,v,null,E)},On.flushSync=function(b){var v=m.T,E=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=v,c.p=E,c.d.f()}},On.preconnect=function(b,v){typeof b=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(b,v))},On.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},On.preinit=function(b,v){if(typeof b=="string"&&v&&typeof v.as=="string"){var E=v.as,U=k(E,v.crossOrigin),M=typeof v.integrity=="string"?v.integrity:void 0,F=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;E==="style"?c.d.S(b,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:M,fetchPriority:F}):E==="script"&&c.d.X(b,{crossOrigin:U,integrity:M,fetchPriority:F,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},On.preinitModule=function(b,v){if(typeof b=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var E=k(v.as,v.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(b)},On.preload=function(b,v){if(typeof b=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var E=v.as,U=k(E,v.crossOrigin);c.d.L(b,E,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},On.preloadModule=function(b,v){if(typeof b=="string")if(v){var E=k(v.as,v.crossOrigin);c.d.m(b,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(b)},On.requestFormReset=function(b){c.d.r(b)},On.unstable_batchedUpdates=function(b,v){return b(v)},On.useFormState=function(b,v,E){return m.H.useFormState(b,v,E)},On.useFormStatus=function(){return m.H.useHostTransitionStatus()},On.version="19.2.4",On}var Bp;function Lg(){if(Bp)return Oc.exports;Bp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Oc.exports=zg(),Oc.exports}var Ip;function Bg(){if(Ip)return _r;Ip=1;var l=jg(),i=Ic(),u=Lg();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(c(188))}function v(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var s=t.return;if(s===null)break;var r=s.alternate;if(r===null){if(a=s.return,a!==null){t=a;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===t)return b(s),e;if(r===a)return b(s),n;r=r.sibling}throw Error(c(188))}if(t.return!==a.return)t=s,a=r;else{for(var o=!1,f=s.child;f;){if(f===t){o=!0,t=s,a=r;break}if(f===a){o=!0,a=s,t=r;break}f=f.sibling}if(!o){for(f=r.child;f;){if(f===t){o=!0,t=r,a=s;break}if(f===a){o=!0,a=r,t=s;break}f=f.sibling}if(!o)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var U=Object.assign,M=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),ke=Symbol.for("react.consumer"),V=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),en=Symbol.for("react.memo_cache_sentinel"),Je=Symbol.iterator;function nn(e){return e===null||typeof e!="object"?null:(e=Je&&e[Je]||e["@@iterator"],typeof e=="function"?e:null)}var Sn=Symbol.for("react.client.reference");function tn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case _e:return"Profiler";case Ae:return"StrictMode";case ie:return"Suspense";case ye:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case V:return e.displayName||"Context";case ke:return(e._context.displayName||"Context")+".Consumer";case oe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:tn(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return tn(e(n))}catch{}}return null}var vn=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Z=[],de=-1;function x(e){return{current:e}}function _(e){0>de||(e.current=Z[de],Z[de]=null,de--)}function P(e,n){de++,Z[de]=e.current,e.current=n}var K=x(null),ce=x(null),ge=x(null),Re=x(null);function Cn(e,n){switch(P(ge,n),P(ce,e),P(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ep(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ep(n),e=np(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(K),P(K,e)}function an(){_(K),_(ce),_(ge)}function gt(e){e.memoizedState!==null&&P(Re,e);var n=K.current,t=np(n,e.type);n!==t&&(P(ce,e),P(K,t))}function Xa(e){ce.current===e&&(_(K),_(ce)),Re.current===e&&(_(Re),Rr._currentValue=I)}var _s,Pr;function Ct(e){if(_s===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_s=n&&n[1]||"",Pr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+e+Pr}var Us=!1;function js(e,n){if(!e||Us)return"";Us=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(R){var A=R}Reflect.construct(e,[],L)}else{try{L.call()}catch(R){A=R}e.call(L.prototype)}}else{try{throw Error()}catch(R){A=R}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),o=r[0],f=r[1];if(o&&f){var g=o.split(`
`),T=f.split(`
`);for(s=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;s<T.length&&!T[s].includes("DetermineComponentFrameRoot");)s++;if(a===g.length||s===T.length)for(a=g.length-1,s=T.length-1;1<=a&&0<=s&&g[a]!==T[s];)s--;for(;1<=a&&0<=s;a--,s--)if(g[a]!==T[s]){if(a!==1||s!==1)do if(a--,s--,0>s||g[a]!==T[s]){var D=`
`+g[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=s);break}}}finally{Us=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ct(t):""}function xo(e,n){switch(e.tag){case 26:case 27:case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return e.child!==n&&n!==null?Ct("Suspense Fallback"):Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 15:return js(e.type,!1);case 11:return js(e.type.render,!1);case 1:return js(e.type,!0);case 31:return Ct("Activity");default:return""}}function Qr(e){try{var n="",t=null;do n+=xo(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var zs=Object.prototype.hasOwnProperty,Ka=l.unstable_scheduleCallback,Ls=l.unstable_cancelCallback,So=l.unstable_shouldYield,Fr=l.unstable_requestPaint,on=l.unstable_now,Gr=l.unstable_getCurrentPriorityLevel,kt=l.unstable_ImmediatePriority,Sa=l.unstable_UserBlockingPriority,wa=l.unstable_NormalPriority,wo=l.unstable_LowPriority,Vr=l.unstable_IdlePriority,Co=l.log,ko=l.unstable_setDisableYieldValue,Ca=null,Nn=null;function yt(e){if(typeof Co=="function"&&ko(e),Nn&&typeof Nn.setStrictMode=="function")try{Nn.setStrictMode(Ca,e)}catch{}}var _n=Math.clz32?Math.clz32:Yr,To=Math.log,Bs=Math.LN2;function Yr(e){return e>>>=0,e===0?32:31-(To(e)/Bs|0)|0}var ka=256,Za=262144,Ta=4194304;function Ln(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function y(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var s=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~r,a!==0?s=Ln(a):(o&=f,o!==0?s=Ln(o):t||(t=f&~e,t!==0&&(s=Ln(t))))):(f=a&~r,f!==0?s=Ln(f):o!==0?s=Ln(o):t||(t=a&~e,t!==0&&(s=Ln(t)))),s===0?0:n!==0&&n!==s&&(n&r)===0&&(r=s&-s,t=n&-n,r>=t||r===32&&(t&4194048)!==0)?n:s}function j(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Q(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function le(){var e=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),e}function Ve(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function W(e,n,t,a,s,r){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,T=e.hiddenUpdates;for(t=o&~t;0<t;){var D=31-_n(t),L=1<<D;f[D]=0,g[D]=-1;var A=T[D];if(A!==null)for(T[D]=null,D=0;D<A.length;D++){var R=A[D];R!==null&&(R.lane&=-536870913)}t&=~L}a!==0&&G(e,a,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~n))}function G(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-_n(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function re(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-_n(t),s=1<<a;s&n|e[a]&n&&(e[a]|=n),t&=~s}}function ln(e,n){var t=n&-n;return t=(t&42)!==0?1:Ze(t),(t&(e.suspendedLanes|n))!==0?0:t}function Ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:kp(e.type))}function Ja(e,n){var t=O.p;try{return O.p=e,n()}finally{O.p=t}}var bt=Math.random().toString(36).slice(2),cn="__reactFiber$"+bt,Mn="__reactProps$"+bt,Vt="__reactContainer$"+bt,Is="__reactEvents$"+bt,Xr="__reactListeners$"+bt,$a="__reactHandles$"+bt,Kr="__reactResources$"+bt,Ea="__reactMarker$"+bt;function Hs(e){delete e[cn],delete e[Mn],delete e[Is],delete e[Xr],delete e[$a]}function Un(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Vt]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lp(e);e!==null;){if(t=e[cn])return t;e=lp(e)}return n}e=t,t=e.parentNode}return null}function Et(e){if(e=e[cn]||e[Vt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Yt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function Xt(e){var n=e[Kr];return n||(n=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[Ea]=!0}var Zr=new Set,Aa={};function At(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(Aa[e]=n,e=0;e<n.length;e++)Zr.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),be={},je={};function un(e){return zs.call(je,e)?!0:zs.call(be,e)?!1:ee.test(e)?je[e]=!0:(be[e]=!0,!1)}function Dn(e,n,t){if(un(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Vn(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Bn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function Fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wr(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,r=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){t=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function es(e){if(!e._valueTracker){var n=Yn(e)?"checked":"value";e._valueTracker=Wr(e,n,""+e[n])}}function qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Yn(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Eo=/[\n"\\]/g;function In(e){return e.replace(Eo,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ps(e,n,t,a,s,r,o,f){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Fe(n)):e.value!==""+Fe(n)&&(e.value=""+Fe(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?ts(e,o,Fe(n)):t!=null?ts(e,o,Fe(t)):a!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Fe(f):e.removeAttribute("name")}function Ra(e,n,t,a,s,r,o,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null)){es(e);return}t=t!=null?""+Fe(t):"",n=n!=null?""+Fe(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),es(e)}function ts(e,n,t){n==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function kn(e,n,t,a){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Fe(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Jr(e,n,t){if(n!=null&&(n=""+Fe(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Fe(t):""}function as(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(vn(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Fe(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),es(e)}function se(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $r=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||$r.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function ze(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var s in n)a=n[s],n.hasOwnProperty(s)&&t[s]!==a&&mn(e,s,a)}else for(var r in n)n.hasOwnProperty(r)&&mn(e,r,n[r])}function Kt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Qs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function q(){}var J=null;function fe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Se=null,$e=null;function tt(e){var n=Et(e);if(n&&(e=n.stateNode)){var t=e[Mn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ps(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+In(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var s=a[Mn]||null;if(!s)throw Error(c(90));Ps(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&qs(a)}break e;case"textarea":Jr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&kn(e,!!t.multiple,n,!1)}}}var Fs=!1;function ei(e,n,t){if(Fs)return e(n,t);Fs=!0;try{var a=e(n);return a}finally{if(Fs=!1,(Se!==null||$e!==null)&&(qi(),Se&&(n=Se,e=$e,$e=Se=null,tt(n),e)))for(n=0;n<e.length;n++)tt(e[n])}}function Gs(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Mn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=!1;if(Nt)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Ao=!1}var Wt=null,Ro=null,ni=null;function eu(){if(ni)return ni;var e,n=Ro,t=n.length,a,s="value"in Wt?Wt.value:Wt.textContent,r=s.length;for(e=0;e<t&&n[e]===s[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===s[r-a];a++);return ni=s.slice(e,1<a?1-a:void 0)}function ti(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function nu(){return!1}function Hn(e){function n(t,a,s,r,o){this._reactName=t,this._targetInst=s,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ai:nu,this.isPropagationStopped=nu,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=Hn(Na),Ys=U({},Na,{view:0,detail:0}),Rm=Hn(Ys),No,Mo,Xs,ri=U({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(No=e.screenX-Xs.screenX,Mo=e.screenY-Xs.screenY):Mo=No=0,Xs=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),tu=Hn(ri),Nm=U({},ri,{dataTransfer:0}),Mm=Hn(Nm),Dm=U({},Ys,{relatedTarget:0}),Do=Hn(Dm),Om=U({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=Hn(Om),Um=U({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=Hn(Um),zm=U({},Na,{data:0}),au=Hn(zm),Lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Im[e])?!!n[e]:!1}function Oo(){return Hm}var qm=U({},Ys,{key:function(e){if(e.key){var n=Lm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Hn(qm),Qm=U({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Hn(Qm),Fm=U({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),Gm=Hn(Fm),Vm=U({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=Hn(Vm),Xm=U({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=Hn(Xm),Zm=U({},Na,{newState:0,oldState:0}),Wm=Hn(Zm),Jm=[9,13,27,32],_o=Nt&&"CompositionEvent"in window,Ks=null;Nt&&"documentMode"in document&&(Ks=document.documentMode);var $m=Nt&&"TextEvent"in window&&!Ks,ru=Nt&&(!_o||Ks&&8<Ks&&11>=Ks),iu=" ",ou=!1;function lu(e,n){switch(e){case"keyup":return Jm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function eh(e,n){switch(e){case"compositionend":return cu(n);case"keypress":return n.which!==32?null:(ou=!0,iu);case"textInput":return e=n.data,e===iu&&ou?null:e;default:return null}}function nh(e,n){if(ss)return e==="compositionend"||!_o&&lu(e,n)?(e=eu(),ni=Ro=Wt=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ru&&n.locale!=="ko"?null:n.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!th[e.type]:n==="textarea"}function du(e,n,t,a){Se?$e?$e.push(a):$e=[a]:Se=a,n=Xi(n,"onChange"),0<n.length&&(t=new si("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Zs=null,Ws=null;function ah(e){Xf(e,0)}function ii(e){var n=Yt(e);if(qs(n))return e}function fu(e,n){if(e==="change")return n}var pu=!1;if(Nt){var Uo;if(Nt){var jo="oninput"in document;if(!jo){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),jo=typeof mu.oninput=="function"}Uo=jo}else Uo=!1;pu=Uo&&(!document.documentMode||9<document.documentMode)}function hu(){Zs&&(Zs.detachEvent("onpropertychange",gu),Ws=Zs=null)}function gu(e){if(e.propertyName==="value"&&ii(Ws)){var n=[];du(n,Ws,e,fe(e)),ei(ah,n)}}function sh(e,n,t){e==="focusin"?(hu(),Zs=n,Ws=t,Zs.attachEvent("onpropertychange",gu)):e==="focusout"&&hu()}function rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Ws)}function ih(e,n){if(e==="click")return ii(n)}function oh(e,n){if(e==="input"||e==="change")return ii(n)}function lh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:lh;function Js(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var s=t[a];if(!zs.call(n,s)||!Xn(e[s],n[s]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,n){var t=yu(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yu(t)}}function vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ns(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ns(e.document)}return n}function zo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ch=Nt&&"documentMode"in document&&11>=document.documentMode,rs=null,Lo=null,$s=null,Bo=!1;function Su(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bo||rs==null||rs!==ns(a)||(a=rs,"selectionStart"in a&&zo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$s&&Js($s,a)||($s=a,a=Xi(Lo,"onSelect"),0<a.length&&(n=new si("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=rs)))}function Ma(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var is={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Io={},wu={};Nt&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Da(e){if(Io[e])return Io[e];if(!is[e])return e;var n=is[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in wu)return Io[e]=n[t];return e}var Cu=Da("animationend"),ku=Da("animationiteration"),Tu=Da("animationstart"),uh=Da("transitionrun"),dh=Da("transitionstart"),fh=Da("transitioncancel"),Eu=Da("transitionend"),Au=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function dt(e,n){Au.set(e,n),At(n,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],os=0,qo=0;function li(){for(var e=os,n=qo=os=0;n<e;){var t=at[n];at[n++]=null;var a=at[n];at[n++]=null;var s=at[n];at[n++]=null;var r=at[n];if(at[n++]=null,a!==null&&s!==null){var o=a.pending;o===null?s.next=s:(s.next=o.next,o.next=s),a.pending=s}r!==0&&Ru(t,s,r)}}function ci(e,n,t,a){at[os++]=e,at[os++]=n,at[os++]=t,at[os++]=a,qo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Po(e,n,t,a){return ci(e,n,t,a),ui(e)}function Oa(e,n){return ci(e,null,null,n),ui(e)}function Ru(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var s=!1,r=e.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&n!==null&&(s=31-_n(t),e=r.hiddenUpdates,a=e[s],a===null?e[s]=[n]:a.push(n),n.lane=t|536870912),r):null}function ui(e){if(50<Sr)throw Sr=0,Wl=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ls={};function ph(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,t,a){return new ph(e,n,t,a)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mt(e,n){var t=e.alternate;return t===null?(t=Kn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Nu(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function di(e,n,t,a,s,r){var o=0;if(a=e,typeof e=="function")Qo(e)&&(o=1);else if(typeof e=="string")o=bg(e,t,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=Kn(31,t,n,s),e.elementType=Ke,e.lanes=r,e;case X:return _a(t.children,s,r,n);case Ae:o=8,s|=24;break;case _e:return e=Kn(12,t,n,s|2),e.elementType=_e,e.lanes=r,e;case ie:return e=Kn(13,t,n,s),e.elementType=ie,e.lanes=r,e;case ye:return e=Kn(19,t,n,s),e.elementType=ye,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:o=10;break e;case ke:o=9;break e;case oe:o=11;break e;case te:o=14;break e;case Te:o=16,a=null;break e}o=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=Kn(o,t,n,s),n.elementType=e,n.type=a,n.lanes=r,n}function _a(e,n,t,a){return e=Kn(7,e,a,n),e.lanes=t,e}function Fo(e,n,t){return e=Kn(6,e,null,n),e.lanes=t,e}function Mu(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Go(e,n,t){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Du=new WeakMap;function st(e,n){if(typeof e=="object"&&e!==null){var t=Du.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Qr(n)},Du.set(e,n),n)}return{value:e,source:n,stack:Qr(n)}}var cs=[],us=0,fi=null,er=0,rt=[],it=0,Jt=null,vt=1,xt="";function Dt(e,n){cs[us++]=er,cs[us++]=fi,fi=e,er=n}function Ou(e,n,t){rt[it++]=vt,rt[it++]=xt,rt[it++]=Jt,Jt=e;var a=vt;e=xt;var s=32-_n(a)-1;a&=~(1<<s),t+=1;var r=32-_n(n)+s;if(30<r){var o=s-s%5;r=(a&(1<<o)-1).toString(32),a>>=o,s-=o,vt=1<<32-_n(n)+s|t<<s|a,xt=r+e}else vt=1<<r|t<<s|a,xt=e}function Vo(e){e.return!==null&&(Dt(e,1),Ou(e,1,0))}function Yo(e){for(;e===fi;)fi=cs[--us],cs[us]=null,er=cs[--us],cs[us]=null;for(;e===Jt;)Jt=rt[--it],rt[it]=null,xt=rt[--it],rt[it]=null,vt=rt[--it],rt[it]=null}function _u(e,n){rt[it++]=vt,rt[it++]=xt,rt[it++]=Jt,vt=n.id,xt=n.overflow,Jt=e}var Tn=null,Ye=null,Ee=!1,$t=null,ot=!1,Xo=Error(c(519));function ea(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nr(st(n,e)),Xo}function Uu(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[cn]=e,n[Mn]=a,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<Cr.length;t++)xe(Cr[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ra(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),as(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Jf(n.textContent,t)?(a.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),a.onScroll!=null&&xe("scroll",n),a.onScrollEnd!=null&&xe("scrollend",n),a.onClick!=null&&(n.onclick=q),n=!0):n=!1,n||ea(e,!0)}function ju(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ot=!1;return;case 27:case 3:ot=!0;return;default:Tn=Tn.return}}function ds(e){if(e!==Tn)return!1;if(!Ee)return ju(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||fc(e.type,e.memoizedProps)),t=!t),t&&Ye&&ea(e),ju(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=op(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ye=op(e)}else n===27?(n=Ye,ma(e.type)?(e=yc,yc=null,Ye=e):Ye=n):Ye=Tn?ct(e.stateNode.nextSibling):null;return!0}function Ua(){Ye=Tn=null,Ee=!1}function Ko(){var e=$t;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),$t=null),e}function nr(e){$t===null?$t=[e]:$t.push(e)}var Zo=x(null),ja=null,Ot=null;function na(e,n,t){P(Zo,n._currentValue),n._currentValue=t}function _t(e){e._currentValue=Zo.current,_(Zo)}function Wo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Jo(e,n,t,a){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var o=s.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=s;for(var g=0;g<n.length;g++)if(f.context===n[g]){r.lanes|=t,f=r.alternate,f!==null&&(f.lanes|=t),Wo(r.return,t,e),a||(o=null);break e}r=f.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(c(341));o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),Wo(o,t,e),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function fs(e,n,t,a){e=null;for(var s=n,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var f=s.type;Xn(s.pendingProps.value,o.value)||(e!==null?e.push(f):e=[f])}}else if(s===Re.current){if(o=s.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Rr):e=[Rr])}s=s.return}e!==null&&Jo(n,e,t,a),n.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){ja=e,Ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return zu(ja,e)}function mi(e,n){return ja===null&&za(e),zu(e,n)}function zu(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Ot===null){if(e===null)throw Error(c(308));Ot=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ot=Ot.next=n;return t}var mh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},hh=l.unstable_scheduleCallback,gh=l.unstable_NormalPriority,hn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $o(){return{controller:new mh,data:new Map,refCount:0}}function tr(e){e.refCount--,e.refCount===0&&hh(gh,function(){e.controller.abort()})}var ar=null,el=0,ps=0,ms=null;function yh(e,n){if(ar===null){var t=ar=[];el=0,ps=ac(),ms={status:"pending",value:void 0,then:function(a){t.push(a)}}}return el++,n.then(Lu,Lu),n}function Lu(){if(--el===0&&ar!==null){ms!==null&&(ms.status="fulfilled");var e=ar;ar=null,ps=0,ms=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bh(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var s=0;s<t.length;s++)(0,t[s])(n)},function(s){for(a.status="rejected",a.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),a}var Bu=N.S;N.S=function(e,n){wf=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yh(e,n),Bu!==null&&Bu(e,n)};var La=x(null);function nl(){var e=La.current;return e!==null?e:Qe.pooledCache}function hi(e,n){n===null?P(La,La.current):P(La,n.pool)}function Iu(){var e=nl();return e===null?null:{parent:hn._currentValue,pool:e}}var hs=Error(c(460)),tl=Error(c(474)),gi=Error(c(542)),yi={then:function(){}};function Hu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qu(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(q,q),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qu(e),e;default:if(typeof n.status=="string")n.then(q,q);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=a}},function(a){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qu(e),e}throw Ia=n,hs}}function Ba(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ia=t,hs):t}}var Ia=null;function Pu(){if(Ia===null)throw Error(c(459));var e=Ia;return Ia=null,e}function Qu(e){if(e===hs||e===gi)throw Error(c(483))}var gs=null,sr=0;function bi(e){var n=sr;return sr+=1,gs===null&&(gs=[]),qu(gs,e,n)}function rr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vi(e,n){throw n.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fu(e){function n(w,S){if(e){var C=w.deletions;C===null?(w.deletions=[S],w.flags|=16):C.push(S)}}function t(w,S){if(!e)return null;for(;S!==null;)n(w,S),S=S.sibling;return null}function a(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(w,S){return w=Mt(w,S),w.index=0,w.sibling=null,w}function r(w,S,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<S?(w.flags|=67108866,S):C):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function o(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function f(w,S,C,z){return S===null||S.tag!==6?(S=Fo(C,w.mode,z),S.return=w,S):(S=s(S,C),S.return=w,S)}function g(w,S,C,z){var ne=C.type;return ne===X?D(w,S,C.props.children,z,C.key):S!==null&&(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type)?(S=s(S,C.props),rr(S,C),S.return=w,S):(S=di(C.type,C.key,C.props,null,w.mode,z),rr(S,C),S.return=w,S)}function T(w,S,C,z){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=Go(C,w.mode,z),S.return=w,S):(S=s(S,C.children||[]),S.return=w,S)}function D(w,S,C,z,ne){return S===null||S.tag!==7?(S=_a(C,w.mode,z,ne),S.return=w,S):(S=s(S,C),S.return=w,S)}function L(w,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Fo(""+S,w.mode,C),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case F:return C=di(S.type,S.key,S.props,null,w.mode,C),rr(C,S),C.return=w,C;case H:return S=Go(S,w.mode,C),S.return=w,S;case Te:return S=Ba(S),L(w,S,C)}if(vn(S)||nn(S))return S=_a(S,w.mode,C,null),S.return=w,S;if(typeof S.then=="function")return L(w,bi(S),C);if(S.$$typeof===V)return L(w,mi(w,S),C);vi(w,S)}return null}function A(w,S,C,z){var ne=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ne!==null?null:f(w,S,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return C.key===ne?g(w,S,C,z):null;case H:return C.key===ne?T(w,S,C,z):null;case Te:return C=Ba(C),A(w,S,C,z)}if(vn(C)||nn(C))return ne!==null?null:D(w,S,C,z,null);if(typeof C.then=="function")return A(w,S,bi(C),z);if(C.$$typeof===V)return A(w,S,mi(w,C),z);vi(w,C)}return null}function R(w,S,C,z,ne){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return w=w.get(C)||null,f(S,w,""+z,ne);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case F:return w=w.get(z.key===null?C:z.key)||null,g(S,w,z,ne);case H:return w=w.get(z.key===null?C:z.key)||null,T(S,w,z,ne);case Te:return z=Ba(z),R(w,S,C,z,ne)}if(vn(z)||nn(z))return w=w.get(C)||null,D(S,w,z,ne,null);if(typeof z.then=="function")return R(w,S,C,bi(z),ne);if(z.$$typeof===V)return R(w,S,C,mi(S,z),ne);vi(S,z)}return null}function Y(w,S,C,z){for(var ne=null,Ne=null,$=S,he=S=0,Ce=null;$!==null&&he<C.length;he++){$.index>he?(Ce=$,$=null):Ce=$.sibling;var Me=A(w,$,C[he],z);if(Me===null){$===null&&($=Ce);break}e&&$&&Me.alternate===null&&n(w,$),S=r(Me,S,he),Ne===null?ne=Me:Ne.sibling=Me,Ne=Me,$=Ce}if(he===C.length)return t(w,$),Ee&&Dt(w,he),ne;if($===null){for(;he<C.length;he++)$=L(w,C[he],z),$!==null&&(S=r($,S,he),Ne===null?ne=$:Ne.sibling=$,Ne=$);return Ee&&Dt(w,he),ne}for($=a($);he<C.length;he++)Ce=R($,w,he,C[he],z),Ce!==null&&(e&&Ce.alternate!==null&&$.delete(Ce.key===null?he:Ce.key),S=r(Ce,S,he),Ne===null?ne=Ce:Ne.sibling=Ce,Ne=Ce);return e&&$.forEach(function(va){return n(w,va)}),Ee&&Dt(w,he),ne}function ae(w,S,C,z){if(C==null)throw Error(c(151));for(var ne=null,Ne=null,$=S,he=S=0,Ce=null,Me=C.next();$!==null&&!Me.done;he++,Me=C.next()){$.index>he?(Ce=$,$=null):Ce=$.sibling;var va=A(w,$,Me.value,z);if(va===null){$===null&&($=Ce);break}e&&$&&va.alternate===null&&n(w,$),S=r(va,S,he),Ne===null?ne=va:Ne.sibling=va,Ne=va,$=Ce}if(Me.done)return t(w,$),Ee&&Dt(w,he),ne;if($===null){for(;!Me.done;he++,Me=C.next())Me=L(w,Me.value,z),Me!==null&&(S=r(Me,S,he),Ne===null?ne=Me:Ne.sibling=Me,Ne=Me);return Ee&&Dt(w,he),ne}for($=a($);!Me.done;he++,Me=C.next())Me=R($,w,he,Me.value,z),Me!==null&&(e&&Me.alternate!==null&&$.delete(Me.key===null?he:Me.key),S=r(Me,S,he),Ne===null?ne=Me:Ne.sibling=Me,Ne=Me);return e&&$.forEach(function(Ng){return n(w,Ng)}),Ee&&Dt(w,he),ne}function qe(w,S,C,z){if(typeof C=="object"&&C!==null&&C.type===X&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case F:e:{for(var ne=C.key;S!==null;){if(S.key===ne){if(ne=C.type,ne===X){if(S.tag===7){t(w,S.sibling),z=s(S,C.props.children),z.return=w,w=z;break e}}else if(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type){t(w,S.sibling),z=s(S,C.props),rr(z,C),z.return=w,w=z;break e}t(w,S);break}else n(w,S);S=S.sibling}C.type===X?(z=_a(C.props.children,w.mode,z,C.key),z.return=w,w=z):(z=di(C.type,C.key,C.props,null,w.mode,z),rr(z,C),z.return=w,w=z)}return o(w);case H:e:{for(ne=C.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){t(w,S.sibling),z=s(S,C.children||[]),z.return=w,w=z;break e}else{t(w,S);break}else n(w,S);S=S.sibling}z=Go(C,w.mode,z),z.return=w,w=z}return o(w);case Te:return C=Ba(C),qe(w,S,C,z)}if(vn(C))return Y(w,S,C,z);if(nn(C)){if(ne=nn(C),typeof ne!="function")throw Error(c(150));return C=ne.call(C),ae(w,S,C,z)}if(typeof C.then=="function")return qe(w,S,bi(C),z);if(C.$$typeof===V)return qe(w,S,mi(w,C),z);vi(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(t(w,S.sibling),z=s(S,C),z.return=w,w=z):(t(w,S),z=Fo(C,w.mode,z),z.return=w,w=z),o(w)):t(w,S)}return function(w,S,C,z){try{sr=0;var ne=qe(w,S,C,z);return gs=null,ne}catch($){if($===hs||$===gi)throw $;var Ne=Kn(29,$,null,w.mode);return Ne.lanes=z,Ne.return=w,Ne}}}var Ha=Fu(!0),Gu=Fu(!1),ta=!1;function al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Oe&2)!==0){var s=a.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),a.pending=n,n=ui(e),Ru(e,null,t),n}return ci(e,a,n,t),ui(e)}function ir(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,re(e,t)}}function rl(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var s=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?s=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?s=r=n:r=r.next=n}else s=r=n;t={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var il=!1;function or(){if(il){var e=ms;if(e!==null)throw e}}function lr(e,n,t,a){il=!1;var s=e.updateQueue;ta=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var g=f,T=g.next;g.next=null,o===null?r=T:o.next=T,o=g;var D=e.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==o&&(f===null?D.firstBaseUpdate=T:f.next=T,D.lastBaseUpdate=g))}if(r!==null){var L=s.baseState;o=0,D=T=g=null,f=r;do{var A=f.lane&-536870913,R=A!==f.lane;if(R?(we&A)===A:(a&A)===A){A!==0&&A===ps&&(il=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Y=e,ae=f;A=n;var qe=t;switch(ae.tag){case 1:if(Y=ae.payload,typeof Y=="function"){L=Y.call(qe,L,A);break e}L=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=ae.payload,A=typeof Y=="function"?Y.call(qe,L,A):Y,A==null)break e;L=U({},L,A);break e;case 2:ta=!0}}A=f.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[A]:R.push(A))}else R={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(T=D=R,g=L):D=D.next=R,o|=A;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;R=f,f=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);D===null&&(g=L),s.baseState=g,s.firstBaseUpdate=T,s.lastBaseUpdate=D,r===null&&(s.shared.lanes=0),ca|=o,e.lanes=o,e.memoizedState=L}}function Vu(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Yu(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Vu(t[e],n)}var ys=x(null),xi=x(0);function Xu(e,n){e=Pt,P(xi,e),P(ys,n),Pt=e|n.baseLanes}function ol(){P(xi,Pt),P(ys,ys.current)}function ll(){Pt=xi.current,_(ys),_(xi)}var Zn=x(null),lt=null;function ra(e){var n=e.alternate;P(dn,dn.current&1),P(Zn,e),lt===null&&(n===null||ys.current!==null||n.memoizedState!==null)&&(lt=e)}function cl(e){P(dn,dn.current),P(Zn,e),lt===null&&(lt=e)}function Ku(e){e.tag===22?(P(dn,dn.current),P(Zn,e),lt===null&&(lt=e)):ia()}function ia(){P(dn,dn.current),P(Zn,Zn.current)}function Wn(e){_(Zn),lt===e&&(lt=null),_(dn)}var dn=x(0);function Si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||hc(t)||gc(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ut=0,me=null,Ie=null,gn=null,wi=!1,bs=!1,qa=!1,Ci=0,cr=0,vs=null,vh=0;function sn(){throw Error(c(321))}function ul(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xn(e[t],n[t]))return!1;return!0}function dl(e,n,t,a,s,r){return Ut=r,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Od:El,qa=!1,r=t(a,s),qa=!1,bs&&(r=Wu(n,t,a,s)),Zu(e),r}function Zu(e){N.H=fr;var n=Ie!==null&&Ie.next!==null;if(Ut=0,gn=Ie=me=null,wi=!1,cr=0,vs=null,n)throw Error(c(300));e===null||yn||(e=e.dependencies,e!==null&&pi(e)&&(yn=!0))}function Wu(e,n,t,a){me=e;var s=0;do{if(bs&&(vs=null),cr=0,bs=!1,25<=s)throw Error(c(301));if(s+=1,gn=Ie=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=_d,r=n(t,a)}while(bs);return r}function xh(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ur(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(me.flags|=1024),n}function fl(){var e=Ci!==0;return Ci=0,e}function pl(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ml(e){if(wi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wi=!1}Ut=0,gn=Ie=me=null,bs=!1,cr=Ci=0,vs=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?me.memoizedState=gn=e:gn=gn.next=e,gn}function fn(){if(Ie===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=gn===null?me.memoizedState:gn.next;if(n!==null)gn=n,Ie=e;else{if(e===null)throw me.alternate===null?Error(c(467)):Error(c(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},gn===null?me.memoizedState=gn=e:gn=gn.next=e}return gn}function ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ur(e){var n=cr;return cr+=1,vs===null&&(vs=[]),e=qu(vs,e,n),n=me,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Od:El),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ur(e);if(e.$$typeof===V)return En(e)}throw Error(c(438,String(e)))}function hl(e){var n=null,t=me.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=me.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(s){return s.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ki(),me.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=en;return n.index++,t}function jt(e,n){return typeof n=="function"?n(e):n}function Ei(e){var n=fn();return gl(n,Ie,e)}function gl(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var s=e.baseQueue,r=a.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}n.baseQueue=s=r,a.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{n=s.next;var f=o=null,g=null,T=n,D=!1;do{var L=T.lane&-536870913;if(L!==T.lane?(we&L)===L:(Ut&L)===L){var A=T.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),L===ps&&(D=!0);else if((Ut&A)===A){T=T.next,A===ps&&(D=!0);continue}else L={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=L,o=r):g=g.next=L,me.lanes|=A,ca|=A;L=T.action,qa&&t(r,L),r=T.hasEagerState?T.eagerState:t(r,L)}else A={lane:L,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=A,o=r):g=g.next=A,me.lanes|=L,ca|=L;T=T.next}while(T!==null&&T!==n);if(g===null?o=r:g.next=f,!Xn(r,e.memoizedState)&&(yn=!0,D&&(t=ms,t!==null)))throw t;e.memoizedState=r,e.baseState=o,e.baseQueue=g,a.lastRenderedState=r}return s===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function yl(e){var n=fn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,s=t.pending,r=n.memoizedState;if(s!==null){t.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);Xn(r,n.memoizedState)||(yn=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function Ju(e,n,t){var a=me,s=fn(),r=Ee;if(r){if(t===void 0)throw Error(c(407));t=t()}else t=n();var o=!Xn((Ie||s).memoizedState,t);if(o&&(s.memoizedState=t,yn=!0),s=s.queue,xl(nd.bind(null,a,s,e),[e]),s.getSnapshot!==n||o||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,xs(9,{destroy:void 0},ed.bind(null,a,s,t,n),null),Qe===null)throw Error(c(349));r||(Ut&127)!==0||$u(a,n,t)}return t}function $u(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n=ki(),me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ed(e,n,t,a){n.value=t,n.getSnapshot=a,td(n)&&ad(e)}function nd(e,n,t){return t(function(){td(n)&&ad(e)})}function td(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xn(e,t)}catch{return!0}}function ad(e){var n=Oa(e,2);n!==null&&Gn(n,e,2)}function bl(e){var n=jn();if(typeof e=="function"){var t=e;if(e=t(),qa){yt(!0);try{t()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function sd(e,n,t,a){return e.baseState=t,gl(e,Ie,typeof a=="function"?a:jt)}function Sh(e,n,t,a,s){if(Ni(e))throw Error(c(485));if(e=n.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};N.T!==null?t(!0):r.isTransition=!1,a(r),t=n.pending,t===null?(r.next=n.pending=r,rd(n,r)):(r.next=t.next,n.pending=t.next=r)}}function rd(e,n){var t=n.action,a=n.payload,s=e.state;if(n.isTransition){var r=N.T,o={};N.T=o;try{var f=t(s,a),g=N.S;g!==null&&g(o,f),id(e,n,f)}catch(T){vl(e,n,T)}finally{r!==null&&o.types!==null&&(r.types=o.types),N.T=r}}else try{r=t(s,a),id(e,n,r)}catch(T){vl(e,n,T)}}function id(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){od(e,n,a)},function(a){return vl(e,n,a)}):od(e,n,t)}function od(e,n,t){n.status="fulfilled",n.value=t,ld(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,rd(e,t)))}function vl(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,ld(n),n=n.next;while(n!==a)}e.action=null}function ld(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cd(e,n){return n}function ud(e,n){if(Ee){var t=Qe.formState;if(t!==null){e:{var a=me;if(Ee){if(Ye){n:{for(var s=Ye,r=ot;s.nodeType!==8;){if(!r){s=null;break n}if(s=ct(s.nextSibling),s===null){s=null;break n}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ye=ct(s.nextSibling),a=s.data==="F!";break e}}ea(a)}a=!1}a&&(n=t[0])}}return t=jn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cd,lastRenderedState:n},t.queue=a,t=Nd.bind(null,me,a),a.dispatch=t,a=bl(!1),r=Tl.bind(null,me,!1,a.queue),a=jn(),s={state:n,dispatch:null,action:e,pending:null},a.queue=s,t=Sh.bind(null,me,s,r,t),s.dispatch=t,a.memoizedState=e,[n,t,!1]}function dd(e){var n=fn();return fd(n,Ie,e)}function fd(e,n,t){if(n=gl(e,n,cd)[0],e=Ei(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=ur(n)}catch(o){throw o===hs?gi:o}else a=n;n=fn();var s=n.queue,r=s.dispatch;return t!==n.memoizedState&&(me.flags|=2048,xs(9,{destroy:void 0},wh.bind(null,s,t),null)),[a,r,e]}function wh(e,n){e.action=n}function pd(e){var n=fn(),t=Ie;if(t!==null)return fd(n,t,e);fn(),n=n.memoizedState,t=fn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function xs(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=me.updateQueue,n===null&&(n=ki(),me.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function md(){return fn().memoizedState}function Ai(e,n,t,a){var s=jn();me.flags|=e,s.memoizedState=xs(1|n,{destroy:void 0},t,a===void 0?null:a)}function Ri(e,n,t,a){var s=fn();a=a===void 0?null:a;var r=s.memoizedState.inst;Ie!==null&&a!==null&&ul(a,Ie.memoizedState.deps)?s.memoizedState=xs(n,r,t,a):(me.flags|=e,s.memoizedState=xs(1|n,r,t,a))}function hd(e,n){Ai(8390656,8,e,n)}function xl(e,n){Ri(2048,8,e,n)}function Ch(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=ki(),me.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function gd(e){var n=fn().memoizedState;return Ch({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function yd(e,n){return Ri(4,2,e,n)}function bd(e,n){return Ri(4,4,e,n)}function vd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xd(e,n,t){t=t!=null?t.concat([e]):null,Ri(4,4,vd.bind(null,n,e),t)}function Sl(){}function Sd(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&ul(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function wd(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&ul(n,a[1]))return a[0];if(a=e(),qa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a}function wl(e,n,t){return t===void 0||(Ut&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=kf(),me.lanes|=e,ca|=e,t)}function Cd(e,n,t,a){return Xn(t,n)?t:ys.current!==null?(e=wl(e,t,a),Xn(e,n)||(yn=!0),e):(Ut&42)===0||(Ut&1073741824)!==0&&(we&261930)===0?(yn=!0,e.memoizedState=t):(e=kf(),me.lanes|=e,ca|=e,n)}function kd(e,n,t,a,s){var r=O.p;O.p=r!==0&&8>r?r:8;var o=N.T,f={};N.T=f,Tl(e,!1,n,t);try{var g=s(),T=N.S;if(T!==null&&T(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=bh(g,a);dr(e,n,D,et(e))}else dr(e,n,a,et(e))}catch(L){dr(e,n,{then:function(){},status:"rejected",reason:L},et())}finally{O.p=r,o!==null&&f.types!==null&&(o.types=f.types),N.T=o}}function kh(){}function Cl(e,n,t,a){if(e.tag!==5)throw Error(c(476));var s=Td(e).queue;kd(e,s,n,I,t===null?kh:function(){return Ed(e),t(a)})}function Td(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:I},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ed(e){var n=Td(e);n.next===null&&(n=e.alternate.memoizedState),dr(e,n.next.queue,{},et())}function kl(){return En(Rr)}function Ad(){return fn().memoizedState}function Rd(){return fn().memoizedState}function Th(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=et();e=aa(t);var a=sa(n,e,t);a!==null&&(Gn(a,n,t),ir(a,n,t)),n={cache:$o()},e.payload=n;return}n=n.return}}function Eh(e,n,t){var a=et();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ni(e)?Md(n,t):(t=Po(e,n,t,a),t!==null&&(Gn(t,e,a),Dd(t,n,a)))}function Nd(e,n,t){var a=et();dr(e,n,t,a)}function dr(e,n,t,a){var s={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))Md(n,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,f=r(o,t);if(s.hasEagerState=!0,s.eagerState=f,Xn(f,o))return ci(e,n,s,0),Qe===null&&li(),!1}catch{}if(t=Po(e,n,s,a),t!==null)return Gn(t,e,a),Dd(t,n,a),!0}return!1}function Tl(e,n,t,a){if(a={lane:2,revertLane:ac(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(n)throw Error(c(479))}else n=Po(e,t,a,2),n!==null&&Gn(n,e,2)}function Ni(e){var n=e.alternate;return e===me||n!==null&&n===me}function Md(e,n){bs=wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Dd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,re(e,t)}}var fr={readContext:En,use:Ti,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};fr.useEffectEvent=sn;var Od={readContext:En,use:Ti,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:hd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ai(4194308,4,vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ai(4194308,4,e,n)},useInsertionEffect:function(e,n){Ai(4,2,e,n)},useMemo:function(e,n){var t=jn();n=n===void 0?null:n;var a=e();if(qa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=jn();if(t!==void 0){var s=t(n);if(qa){yt(!0);try{t(n)}finally{yt(!1)}}}else s=n;return a.memoizedState=a.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},a.queue=e,e=e.dispatch=Eh.bind(null,me,e),[a.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=bl(e);var n=e.queue,t=Nd.bind(null,me,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Sl,useDeferredValue:function(e,n){var t=jn();return wl(t,e,n)},useTransition:function(){var e=bl(!1);return e=kd.bind(null,me,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=me,s=jn();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Qe===null)throw Error(c(349));(we&127)!==0||$u(a,n,t)}s.memoizedState=t;var r={value:t,getSnapshot:n};return s.queue=r,hd(nd.bind(null,a,r,e),[e]),a.flags|=2048,xs(9,{destroy:void 0},ed.bind(null,a,r,t,n),null),t},useId:function(){var e=jn(),n=Qe.identifierPrefix;if(Ee){var t=xt,a=vt;t=(a&~(1<<32-_n(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Ci++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=vh++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:kl,useFormState:ud,useActionState:ud,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Tl.bind(null,me,!0,t),t.dispatch=n,[e,n]},useMemoCache:hl,useCacheRefresh:function(){return jn().memoizedState=Th.bind(null,me)},useEffectEvent:function(e){var n=jn(),t={impl:e};return n.memoizedState=t,function(){if((Oe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},El={readContext:En,use:Ti,useCallback:Sd,useContext:En,useEffect:xl,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:wd,useReducer:Ei,useRef:md,useState:function(){return Ei(jt)},useDebugValue:Sl,useDeferredValue:function(e,n){var t=fn();return Cd(t,Ie.memoizedState,e,n)},useTransition:function(){var e=Ei(jt)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:ur(e),n]},useSyncExternalStore:Ju,useId:Ad,useHostTransitionStatus:kl,useFormState:dd,useActionState:dd,useOptimistic:function(e,n){var t=fn();return sd(t,Ie,e,n)},useMemoCache:hl,useCacheRefresh:Rd};El.useEffectEvent=gd;var _d={readContext:En,use:Ti,useCallback:Sd,useContext:En,useEffect:xl,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:wd,useReducer:yl,useRef:md,useState:function(){return yl(jt)},useDebugValue:Sl,useDeferredValue:function(e,n){var t=fn();return Ie===null?wl(t,e,n):Cd(t,Ie.memoizedState,e,n)},useTransition:function(){var e=yl(jt)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:ur(e),n]},useSyncExternalStore:Ju,useId:Ad,useHostTransitionStatus:kl,useFormState:pd,useActionState:pd,useOptimistic:function(e,n){var t=fn();return Ie!==null?sd(t,Ie,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:hl,useCacheRefresh:Rd};_d.useEffectEvent=gd;function Al(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rl={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=et(),s=aa(a);s.payload=n,t!=null&&(s.callback=t),n=sa(e,s,a),n!==null&&(Gn(n,e,a),ir(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=et(),s=aa(a);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=sa(e,s,a),n!==null&&(Gn(n,e,a),ir(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=et(),a=aa(t);a.tag=2,n!=null&&(a.callback=n),n=sa(e,a,t),n!==null&&(Gn(n,e,t),ir(n,e,t))}};function Ud(e,n,t,a,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!Js(t,a)||!Js(s,r):!0}function jd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Rl.enqueueReplaceState(n,n.state,null)}function Pa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=U({},t));for(var s in e)t[s]===void 0&&(t[s]=e[s])}return t}function zd(e){oi(e)}function Ld(e){console.error(e)}function Bd(e){oi(e)}function Mi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Id(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Nl(e,n,t){return t=aa(t),t.tag=3,t.payload={element:null},t.callback=function(){Mi(e,n)},t}function Hd(e){return e=aa(e),e.tag=3,e}function qd(e,n,t,a){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var r=a.value;e.payload=function(){return s(r)},e.callback=function(){Id(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Id(n,t,a),typeof s!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Ah(e,n,t,a,s){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&fs(n,t,s,!0),t=Zn.current,t!==null){switch(t.tag){case 31:case 13:return lt===null?Pi():t.alternate===null&&rn===0&&(rn=3),t.flags&=-257,t.flags|=65536,t.lanes=s,a===yi?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ec(e,a,s)),!1;case 22:return t.flags|=65536,a===yi?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ec(e,a,s)),!1}throw Error(c(435,t.tag))}return ec(e,a,s),Pi(),!1}if(Ee)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=s,a!==Xo&&(e=Error(c(422),{cause:a}),nr(st(e,t)))):(a!==Xo&&(n=Error(c(423),{cause:a}),nr(st(n,t))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,a=st(a,t),s=Nl(e.stateNode,a,s),rl(e,s),rn!==4&&(rn=2)),!1;var r=Error(c(520),{cause:a});if(r=st(r,t),xr===null?xr=[r]:xr.push(r),rn!==4&&(rn=2),n===null)return!0;a=st(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=s&-s,t.lanes|=e,e=Nl(t.stateNode,a,e),rl(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ua===null||!ua.has(r))))return t.flags|=65536,s&=-s,t.lanes|=s,s=Hd(s),qd(s,e,t,a),rl(t,s),!1}t=t.return}while(t!==null);return!1}var Ml=Error(c(461)),yn=!1;function An(e,n,t,a){n.child=e===null?Gu(n,null,t,a):Ha(n,e.child,t,a)}function Pd(e,n,t,a,s){t=t.render;var r=n.ref;if("ref"in a){var o={};for(var f in a)f!=="ref"&&(o[f]=a[f])}else o=a;return za(n),a=dl(e,n,t,o,r,s),f=fl(),e!==null&&!yn?(pl(e,n,s),zt(e,n,s)):(Ee&&f&&Vo(n),n.flags|=1,An(e,n,a,s),n.child)}function Qd(e,n,t,a,s){if(e===null){var r=t.type;return typeof r=="function"&&!Qo(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,Fd(e,n,r,a,s)):(e=di(t.type,null,a,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!Bl(e,s)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:Js,t(o,a)&&e.ref===n.ref)return zt(e,n,s)}return n.flags|=1,e=Mt(r,a),e.ref=n.ref,e.return=n,n.child=e}function Fd(e,n,t,a,s){if(e!==null){var r=e.memoizedProps;if(Js(r,a)&&e.ref===n.ref)if(yn=!1,n.pendingProps=a=r,Bl(e,s))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,zt(e,n,s)}return Dl(e,n,t,a,s)}function Gd(e,n,t,a){var s=a.children,r=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,e!==null){for(a=n.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~r}else a=0,n.child=null;return Vd(e,n,r,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(n,r!==null?r.cachePool:null),r!==null?Xu(n,r):ol(),Ku(n);else return a=n.lanes=536870912,Vd(e,n,r!==null?r.baseLanes|t:t,t,a)}else r!==null?(hi(n,r.cachePool),Xu(n,r),ia(),n.memoizedState=null):(e!==null&&hi(n,null),ol(),ia());return An(e,n,s,t),n.child}function pr(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vd(e,n,t,a,s){var r=nl();return r=r===null?null:{parent:hn._currentValue,pool:r},n.memoizedState={baseLanes:t,cachePool:r},e!==null&&hi(n,null),ol(),Ku(n),e!==null&&fs(e,n,a,!0),n.childLanes=s,null}function Di(e,n){return n=_i({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Yd(e,n,t){return Ha(n,e.child,null,t),e=Di(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function Rh(e,n,t){var a=n.pendingProps,s=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(a.mode==="hidden")return e=Di(n,a),n.lanes=536870912,pr(null,e);if(cl(n),(e=Ye)?(e=ip(e,ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Mu(e),t.return=n,n.child=t,Tn=n,Ye=null)):e=null,e===null)throw ea(n);return n.lanes=536870912,null}return Di(n,a)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(cl(n),s)if(n.flags&256)n.flags&=-257,n=Yd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(yn||fs(e,n,t,!1),s=(t&e.childLanes)!==0,yn||s){if(a=Qe,a!==null&&(o=ln(a,t),o!==0&&o!==r.retryLane))throw r.retryLane=o,Oa(e,o),Gn(a,e,o),Ml;Pi(),n=Yd(e,n,t)}else e=r.treeContext,Ye=ct(o.nextSibling),Tn=n,Ee=!0,$t=null,ot=!1,e!==null&&_u(n,e),n=Di(n,a),n.flags|=4096;return n}return e=Mt(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Oi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Dl(e,n,t,a,s){return za(n),t=dl(e,n,t,a,void 0,s),a=fl(),e!==null&&!yn?(pl(e,n,s),zt(e,n,s)):(Ee&&a&&Vo(n),n.flags|=1,An(e,n,t,s),n.child)}function Xd(e,n,t,a,s,r){return za(n),n.updateQueue=null,t=Wu(n,a,t,s),Zu(e),a=fl(),e!==null&&!yn?(pl(e,n,r),zt(e,n,r)):(Ee&&a&&Vo(n),n.flags|=1,An(e,n,t,r),n.child)}function Kd(e,n,t,a,s){if(za(n),n.stateNode===null){var r=ls,o=t.contextType;typeof o=="object"&&o!==null&&(r=En(o)),r=new t(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Rl,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},al(n),o=t.contextType,r.context=typeof o=="object"&&o!==null?En(o):ls,r.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Al(n,t,o,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Rl.enqueueReplaceState(r,r.state,null),lr(n,a,r,s),or(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var f=n.memoizedProps,g=Pa(t,f);r.props=g;var T=r.context,D=t.contextType;o=ls,typeof D=="object"&&D!==null&&(o=En(D));var L=t.getDerivedStateFromProps;D=typeof L=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||T!==o)&&jd(n,r,a,o),ta=!1;var A=n.memoizedState;r.state=A,lr(n,a,r,s),or(),T=n.memoizedState,f||A!==T||ta?(typeof L=="function"&&(Al(n,t,L,a),T=n.memoizedState),(g=ta||Ud(n,t,g,a,A,T,o))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),r.props=a,r.state=T,r.context=o,a=g):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,sl(e,n),o=n.memoizedProps,D=Pa(t,o),r.props=D,L=n.pendingProps,A=r.context,T=t.contextType,g=ls,typeof T=="object"&&T!==null&&(g=En(T)),f=t.getDerivedStateFromProps,(T=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==L||A!==g)&&jd(n,r,a,g),ta=!1,A=n.memoizedState,r.state=A,lr(n,a,r,s),or();var R=n.memoizedState;o!==L||A!==R||ta||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof f=="function"&&(Al(n,t,f,a),R=n.memoizedState),(D=ta||Ud(n,t,D,a,A,R,g)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,R,g),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,R,g)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=R),r.props=a,r.state=R,r.context=g,a=D):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,Oi(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=Ha(n,e.child,null,s),n.child=Ha(n,null,t,s)):An(e,n,t,s),n.memoizedState=r.state,e=n.child):e=zt(e,n,s),e}function Zd(e,n,t,a){return Ua(),n.flags|=256,An(e,n,t,a),n.child}var Ol={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _l(e){return{baseLanes:e,cachePool:Iu()}}function Ul(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=$n),e}function Wd(e,n,t){var a=n.pendingProps,s=!1,r=(n.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),o&&(s=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(s?ra(n):ia(),(e=Ye)?(e=ip(e,ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Mu(e),t.return=n,n.child=t,Tn=n,Ye=null)):e=null,e===null)throw ea(n);return gc(e)?n.lanes=32:n.lanes=536870912,null}var f=a.children;return a=a.fallback,s?(ia(),s=n.mode,f=_i({mode:"hidden",children:f},s),a=_a(a,s,t,null),f.return=n,a.return=n,f.sibling=a,n.child=f,a=n.child,a.memoizedState=_l(t),a.childLanes=Ul(e,o,t),n.memoizedState=Ol,pr(null,a)):(ra(n),jl(n,f))}var g=e.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(r)n.flags&256?(ra(n),n.flags&=-257,n=zl(e,n,t)):n.memoizedState!==null?(ia(),n.child=e.child,n.flags|=128,n=null):(ia(),f=a.fallback,s=n.mode,a=_i({mode:"visible",children:a.children},s),f=_a(f,s,t,null),f.flags|=2,a.return=n,f.return=n,a.sibling=f,n.child=a,Ha(n,e.child,null,t),a=n.child,a.memoizedState=_l(t),a.childLanes=Ul(e,o,t),n.memoizedState=Ol,n=pr(null,a));else if(ra(n),gc(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var T=o.dgst;o=T,a=Error(c(419)),a.stack="",a.digest=o,nr({value:a,source:null,stack:null}),n=zl(e,n,t)}else if(yn||fs(e,n,t,!1),o=(t&e.childLanes)!==0,yn||o){if(o=Qe,o!==null&&(a=ln(o,t),a!==0&&a!==g.retryLane))throw g.retryLane=a,Oa(e,a),Gn(o,e,a),Ml;hc(f)||Pi(),n=zl(e,n,t)}else hc(f)?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Ye=ct(f.nextSibling),Tn=n,Ee=!0,$t=null,ot=!1,e!==null&&_u(n,e),n=jl(n,a.children),n.flags|=4096);return n}return s?(ia(),f=a.fallback,s=n.mode,g=e.child,T=g.sibling,a=Mt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,T!==null?f=Mt(T,f):(f=_a(f,s,t,null),f.flags|=2),f.return=n,a.return=n,a.sibling=f,n.child=a,pr(null,a),a=n.child,f=e.child.memoizedState,f===null?f=_l(t):(s=f.cachePool,s!==null?(g=hn._currentValue,s=s.parent!==g?{parent:g,pool:g}:s):s=Iu(),f={baseLanes:f.baseLanes|t,cachePool:s}),a.memoizedState=f,a.childLanes=Ul(e,o,t),n.memoizedState=Ol,pr(e.child,a)):(ra(n),t=e.child,e=t.sibling,t=Mt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function jl(e,n){return n=_i({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _i(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function zl(e,n,t){return Ha(n,e.child,null,t),e=jl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Wo(e.return,n,t)}function Ll(e,n,t,a,s,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:s,treeForkCount:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=s,o.treeForkCount=r)}function $d(e,n,t){var a=n.pendingProps,s=a.revealOrder,r=a.tail;a=a.children;var o=dn.current,f=(o&2)!==0;if(f?(o=o&1|2,n.flags|=128):o&=1,P(dn,o),An(e,n,a,t),a=Ee?er:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,t,n);else if(e.tag===19)Jd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&Si(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Ll(n,!1,s,t,r,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Si(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Ll(n,!0,t,null,r,a);break;case"together":Ll(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function zt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ca|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(fs(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Mt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bl(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function Nh(e,n,t){switch(n.tag){case 3:Cn(n,n.stateNode.containerInfo),na(n,hn,e.memoizedState.cache),Ua();break;case 27:case 5:gt(n);break;case 4:Cn(n,n.stateNode.containerInfo);break;case 10:na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cl(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(ra(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Wd(e,n,t):(ra(n),e=zt(e,n,t),e!==null?e.sibling:null);ra(n);break;case 19:var s=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(fs(e,n,t,!1),a=(t&n.childLanes)!==0),s){if(a)return $d(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),P(dn,dn.current),a)break;return null;case 22:return n.lanes=0,Gd(e,n,t,n.pendingProps);case 24:na(n,hn,e.memoizedState.cache)}return zt(e,n,t)}function ef(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!Bl(e,t)&&(n.flags&128)===0)return yn=!1,Nh(e,n,t);yn=(e.flags&131072)!==0}else yn=!1,Ee&&(n.flags&1048576)!==0&&Ou(n,er,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Ba(n.elementType),n.type=e,typeof e=="function")Qo(e)?(a=Pa(e,a),n.tag=1,n=Kd(null,n,e,a,t)):(n.tag=0,n=Dl(null,n,e,a,t));else{if(e!=null){var s=e.$$typeof;if(s===oe){n.tag=11,n=Pd(null,n,e,a,t);break e}else if(s===te){n.tag=14,n=Qd(null,n,e,a,t);break e}}throw n=tn(e)||e,Error(c(306,n,""))}}return n;case 0:return Dl(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,s=Pa(a,n.pendingProps),Kd(e,n,a,s,t);case 3:e:{if(Cn(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var r=n.memoizedState;s=r.element,sl(e,n),lr(n,a,null,t);var o=n.memoizedState;if(a=o.cache,na(n,hn,a),a!==r.cache&&Jo(n,[hn],t,!0),or(),a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=Zd(e,n,a,t);break e}else if(a!==s){s=st(Error(c(424)),n),nr(s),n=Zd(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=ct(e.firstChild),Tn=n,Ee=!0,$t=null,ot=!0,t=Gu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ua(),a===s){n=zt(e,n,t);break e}An(e,n,a,t)}n=n.child}return n;case 26:return Oi(e,n),e===null?(t=fp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,a=Ki(ge.current).createElement(t),a[cn]=n,a[Mn]=e,Rn(a,t,e),pn(a),n.stateNode=a):n.memoizedState=fp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return gt(n),e===null&&Ee&&(a=n.stateNode=cp(n.type,n.pendingProps,ge.current),Tn=n,ot=!0,s=Ye,ma(n.type)?(yc=s,Ye=ct(a.firstChild)):Ye=s),An(e,n,n.pendingProps.children,t),Oi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((s=a=Ye)&&(a=rg(a,n.type,n.pendingProps,ot),a!==null?(n.stateNode=a,Tn=n,Ye=ct(a.firstChild),ot=!1,s=!0):s=!1),s||ea(n)),gt(n),s=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,fc(s,r)?a=null:o!==null&&fc(s,o)&&(n.flags|=32),n.memoizedState!==null&&(s=dl(e,n,xh,null,null,t),Rr._currentValue=s),Oi(e,n),An(e,n,a,t),n.child;case 6:return e===null&&Ee&&((e=t=Ye)&&(t=ig(t,n.pendingProps,ot),t!==null?(n.stateNode=t,Tn=n,Ye=null,e=!0):e=!1),e||ea(n)),null;case 13:return Wd(e,n,t);case 4:return Cn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ha(n,null,a,t):An(e,n,a,t),n.child;case 11:return Pd(e,n,n.type,n.pendingProps,t);case 7:return An(e,n,n.pendingProps,t),n.child;case 8:return An(e,n,n.pendingProps.children,t),n.child;case 12:return An(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,na(n,n.type,a.value),An(e,n,a.children,t),n.child;case 9:return s=n.type._context,a=n.pendingProps.children,za(n),s=En(s),a=a(s),n.flags|=1,An(e,n,a,t),n.child;case 14:return Qd(e,n,n.type,n.pendingProps,t);case 15:return Fd(e,n,n.type,n.pendingProps,t);case 19:return $d(e,n,t);case 31:return Rh(e,n,t);case 22:return Gd(e,n,t,n.pendingProps);case 24:return za(n),a=En(hn),e===null?(s=nl(),s===null&&(s=Qe,r=$o(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=t),s=r),n.memoizedState={parent:a,cache:s},al(n),na(n,hn,s)):((e.lanes&t)!==0&&(sl(e,n),lr(n,null,null,t),or()),s=e.memoizedState,r=n.memoizedState,s.parent!==a?(s={parent:a,cache:a},n.memoizedState=s,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=s),na(n,hn,a)):(a=r.cache,na(n,hn,a),a!==s.cache&&Jo(n,[hn],t,!0))),An(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function Lt(e){e.flags|=4}function Il(e,n,t,a,s){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Rf())e.flags|=8192;else throw Ia=yi,tl}else e.flags&=-16777217}function nf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yp(n))if(Rf())e.flags|=8192;else throw Ia=yi,tl}function Ui(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?le():536870912,e.lanes|=n,ks|=n)}function mr(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Mh(e,n,t){var a=n.pendingProps;switch(Yo(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_t(hn),an(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ds(n)?Lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ko())),Xe(n),null;case 26:var s=n.type,r=n.memoizedState;return e===null?(Lt(n),r!==null?(Xe(n),nf(n,r)):(Xe(n),Il(n,s,null,a,t))):r?r!==e.memoizedState?(Lt(n),Xe(n),nf(n,r)):(Xe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Lt(n),Xe(n),Il(n,s,e,a,t)),null;case 27:if(Xa(n),t=ge.current,s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Xe(n),null}e=K.current,ds(n)?Uu(n):(e=cp(s,a,t),n.stateNode=e,Lt(n))}return Xe(n),null;case 5:if(Xa(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Xe(n),null}if(r=K.current,ds(n))Uu(n);else{var o=Ki(ge.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?o.createElement(s,{is:a.is}):o.createElement(s)}}r[cn]=n,r[Mn]=a;e:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break e;for(;o.sibling===null;){if(o.return===null||o.return===n)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=r;e:switch(Rn(r,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Lt(n)}}return Xe(n),Il(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=ge.current,ds(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,s=Tn,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Jf(e.nodeValue,t)),e||ea(n,!0)}else e=Ki(e).createTextNode(a),e[cn]=n,n.stateNode=e}return Xe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=ds(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[cn]=n}else Ua(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),e=!1}else t=Ko(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Xe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ds(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[cn]=n}else Ua(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),s=!1}else s=Ko(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==s&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Ui(n,n.updateQueue),Xe(n),null);case 4:return an(),e===null&&oc(n.stateNode.containerInfo),Xe(n),null;case 10:return _t(n.type),Xe(n),null;case 19:if(_(dn),a=n.memoizedState,a===null)return Xe(n),null;if(s=(n.flags&128)!==0,r=a.rendering,r===null)if(s)mr(a,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Si(e),r!==null){for(n.flags|=128,mr(a,!1),e=r.updateQueue,n.updateQueue=e,Ui(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Nu(t,e),t=t.sibling;return P(dn,dn.current&1|2),Ee&&Dt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&on()>Ii&&(n.flags|=128,s=!0,mr(a,!1),n.lanes=4194304)}else{if(!s)if(e=Si(r),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ui(n,e),mr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Ee)return Xe(n),null}else 2*on()-a.renderingStartTime>Ii&&t!==536870912&&(n.flags|=128,s=!0,mr(a,!1),n.lanes=4194304);a.isBackwards?(r.sibling=n.child,n.child=r):(e=a.last,e!==null?e.sibling=r:n.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=on(),e.sibling=null,t=dn.current,P(dn,s?t&1|2:t&1),Ee&&Dt(n,a.treeForkCount),e):(Xe(n),null);case 22:case 23:return Wn(n),ll(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),t=n.updateQueue,t!==null&&Ui(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&_(La),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),_t(hn),Xe(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function Dh(e,n){switch(Yo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(hn),an(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xa(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(c(340));Ua()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ua()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _(dn),null;case 4:return an(),null;case 10:return _t(n.type),null;case 22:case 23:return Wn(n),ll(),e!==null&&_(La),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _t(hn),null;case 25:return null;default:return null}}function tf(e,n){switch(Yo(n),n.tag){case 3:_t(hn),an();break;case 26:case 27:case 5:Xa(n);break;case 4:an();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:_(dn);break;case 10:_t(n.type);break;case 22:case 23:Wn(n),ll(),e!==null&&_(La);break;case 24:_t(hn)}}function hr(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var s=a.next;t=s;do{if((t.tag&e)===e){a=void 0;var r=t.create,o=t.inst;a=r(),o.destroy=a}t=t.next}while(t!==s)}}catch(f){Be(n,n.return,f)}}function oa(e,n,t){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&e)===e){var o=a.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,s=n;var g=t,T=f;try{T()}catch(D){Be(s,g,D)}}}a=a.next}while(a!==r)}}catch(D){Be(n,n.return,D)}}function af(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Yu(n,t)}catch(a){Be(e,e.return,a)}}}function sf(e,n,t){t.props=Pa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Be(e,n,a)}}function gr(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(s){Be(e,n,s)}}function St(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(s){Be(e,n,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){Be(e,n,s)}else t.current=null}function rf(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(s){Be(e,e.return,s)}}function Hl(e,n,t){try{var a=e.stateNode;$h(a,e.type,t,n),a[Mn]=n}catch(s){Be(e,e.return,s)}}function of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=q));else if(a!==4&&(a===27&&ma(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Pl(e,n,t),e=e.sibling;e!==null;)Pl(e,n,t),e=e.sibling}function ji(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&ma(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}function lf(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,s=n.attributes;s.length;)n.removeAttributeNode(s[0]);Rn(n,a,t),n[cn]=e,n[Mn]=t}catch(r){Be(e,e.return,r)}}var Bt=!1,bn=!1,Ql=!1,cf=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Oh(e,n){if(e=e.containerInfo,uc=to,e=xu(e),zo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,f=-1,g=-1,T=0,D=0,L=e,A=null;n:for(;;){for(var R;L!==t||s!==0&&L.nodeType!==3||(f=o+s),L!==r||a!==0&&L.nodeType!==3||(g=o+a),L.nodeType===3&&(o+=L.nodeValue.length),(R=L.firstChild)!==null;)A=L,L=R;for(;;){if(L===e)break n;if(A===t&&++T===s&&(f=o),A===r&&++D===a&&(g=o),(R=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=R}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(dc={focusedElem:e,selectionRange:t},to=!1,wn=n;wn!==null;)if(n=wn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,wn=e;else for(;wn!==null;){switch(n=wn,r=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)s=e[t],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,s=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var Y=Pa(t.type,s);e=a.getSnapshotBeforeUpdate(Y,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(t,t.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)mc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,wn=e;break}wn=n.return}}function uf(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t),a&4&&hr(5,t);break;case 1:if(Ht(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(o){Be(t,t.return,o)}else{var s=Pa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(s,n,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Be(t,t.return,o)}}a&64&&af(t),a&512&&gr(t,t.return);break;case 3:if(Ht(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Yu(e,n)}catch(o){Be(t,t.return,o)}}break;case 27:n===null&&a&4&&lf(t);case 26:case 5:Ht(e,t),n===null&&a&4&&rf(t),a&512&&gr(t,t.return);break;case 12:Ht(e,t);break;case 31:Ht(e,t),a&4&&pf(e,t);break;case 13:Ht(e,t),a&4&&mf(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=qh.bind(null,t),og(e,t))));break;case 22:if(a=t.memoizedState!==null||Bt,!a){n=n!==null&&n.memoizedState!==null||bn,s=Bt;var r=bn;Bt=a,(bn=n)&&!r?qt(e,t,(t.subtreeFlags&8772)!==0):Ht(e,t),Bt=s,bn=r}break;case 30:break;default:Ht(e,t)}}function df(e){var n=e.alternate;n!==null&&(e.alternate=null,df(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,qn=!1;function It(e,n,t){for(t=t.child;t!==null;)ff(e,n,t),t=t.sibling}function ff(e,n,t){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Ca,t)}catch{}switch(t.tag){case 26:bn||St(t,n),It(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:bn||St(t,n);var a=We,s=qn;ma(t.type)&&(We=t.stateNode,qn=!1),It(e,n,t),Tr(t.stateNode),We=a,qn=s;break;case 5:bn||St(t,n);case 6:if(a=We,s=qn,We=null,It(e,n,t),We=a,qn=s,We!==null)if(qn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(t.stateNode)}catch(r){Be(t,n,r)}else try{We.removeChild(t.stateNode)}catch(r){Be(t,n,r)}break;case 18:We!==null&&(qn?(e=We,sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Os(e)):sp(We,t.stateNode));break;case 4:a=We,s=qn,We=t.stateNode.containerInfo,qn=!0,It(e,n,t),We=a,qn=s;break;case 0:case 11:case 14:case 15:oa(2,t,n),bn||oa(4,t,n),It(e,n,t);break;case 1:bn||(St(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&sf(t,n,a)),It(e,n,t);break;case 21:It(e,n,t);break;case 22:bn=(a=bn)||t.memoizedState!==null,It(e,n,t),bn=a;break;default:It(e,n,t)}}function pf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Os(e)}catch(t){Be(n,n.return,t)}}}function mf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Os(e)}catch(t){Be(n,n.return,t)}}function _h(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cf),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cf),n;default:throw Error(c(435,e.tag))}}function zi(e,n){var t=_h(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var s=Ph.bind(null,e,a);a.then(s,s)}})}function Pn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var s=t[a],r=e,o=n,f=o;e:for(;f!==null;){switch(f.tag){case 27:if(ma(f.type)){We=f.stateNode,qn=!1;break e}break;case 5:We=f.stateNode,qn=!1;break e;case 3:case 4:We=f.stateNode.containerInfo,qn=!0;break e}f=f.return}if(We===null)throw Error(c(160));ff(r,o,s),We=null,qn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)hf(n,e),n=n.sibling}var ft=null;function hf(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pn(n,e),Qn(e),a&4&&(oa(3,e,e.return),hr(3,e),oa(5,e,e.return));break;case 1:Pn(n,e),Qn(e),a&512&&(bn||t===null||St(t,t.return)),a&64&&Bt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var s=ft;if(Pn(n,e),Qn(e),a&512&&(bn||t===null||St(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,s=s.ownerDocument||s;n:switch(a){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Ea]||r[cn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(a),s.head.insertBefore(r,s.querySelector("head > title"))),Rn(r,a,t),r[cn]=e,pn(r),a=r;break e;case"link":var o=hp("link","href",s).get(a+(t.href||""));if(o){for(var f=0;f<o.length;f++)if(r=o[f],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(f,1);break n}}r=s.createElement(a),Rn(r,a,t),s.head.appendChild(r);break;case"meta":if(o=hp("meta","content",s).get(a+(t.content||""))){for(f=0;f<o.length;f++)if(r=o[f],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(f,1);break n}}r=s.createElement(a),Rn(r,a,t),s.head.appendChild(r);break;default:throw Error(c(468,a))}r[cn]=e,pn(r),a=r}e.stateNode=a}else gp(s,e.type,e.stateNode);else e.stateNode=mp(s,a,e.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?gp(s,e.type,e.stateNode):mp(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Hl(e,e.memoizedProps,t.memoizedProps)}break;case 27:Pn(n,e),Qn(e),a&512&&(bn||t===null||St(t,t.return)),t!==null&&a&4&&Hl(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Pn(n,e),Qn(e),a&512&&(bn||t===null||St(t,t.return)),e.flags&32){s=e.stateNode;try{se(s,"")}catch(Y){Be(e,e.return,Y)}}a&4&&e.stateNode!=null&&(s=e.memoizedProps,Hl(e,s,t!==null?t.memoizedProps:s)),a&1024&&(Ql=!0);break;case 6:if(Pn(n,e),Qn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(Y){Be(e,e.return,Y)}}break;case 3:if(Ji=null,s=ft,ft=Zi(n.containerInfo),Pn(n,e),ft=s,Qn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Os(n.containerInfo)}catch(Y){Be(e,e.return,Y)}Ql&&(Ql=!1,gf(e));break;case 4:a=ft,ft=Zi(e.stateNode.containerInfo),Pn(n,e),Qn(e),ft=a;break;case 12:Pn(n,e),Qn(e);break;case 31:Pn(n,e),Qn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zi(e,a)));break;case 13:Pn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Bi=on()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zi(e,a)));break;case 22:s=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,T=Bt,D=bn;if(Bt=T||s,bn=D||g,Pn(n,e),bn=D,Bt=T,Qn(e),a&8192)e:for(n=e.stateNode,n._visibility=s?n._visibility&-2:n._visibility|1,s&&(t===null||g||Bt||bn||Qa(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(r=g.stateNode,s)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=g.stateNode;var L=g.memoizedProps.style,A=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Y){Be(g,g.return,Y)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(Y){Be(g,g.return,Y)}}}else if(n.tag===18){if(t===null){g=n;try{var R=g.stateNode;s?rp(R,!0):rp(g.stateNode,!1)}catch(Y){Be(g,g.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,zi(e,t))));break;case 19:Pn(n,e),Qn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,zi(e,a)));break;case 30:break;case 21:break;default:Pn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(of(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var s=t.stateNode,r=ql(e);ji(e,r,s);break;case 5:var o=t.stateNode;t.flags&32&&(se(o,""),t.flags&=-33);var f=ql(e);ji(e,f,o);break;case 3:case 4:var g=t.stateNode.containerInfo,T=ql(e);Pl(e,T,g);break;default:throw Error(c(161))}}catch(D){Be(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ht(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)uf(e,n.alternate,n),n=n.sibling}function Qa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:oa(4,n,n.return),Qa(n);break;case 1:St(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&sf(n,n.return,t),Qa(n);break;case 27:Tr(n.stateNode);case 26:case 5:St(n,n.return),Qa(n);break;case 22:n.memoizedState===null&&Qa(n);break;case 30:Qa(n);break;default:Qa(n)}e=e.sibling}}function qt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,s=e,r=n,o=r.flags;switch(r.tag){case 0:case 11:case 15:qt(s,r,t),hr(4,r);break;case 1:if(qt(s,r,t),a=r,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(T){Be(a,a.return,T)}if(a=r,s=a.updateQueue,s!==null){var f=a.stateNode;try{var g=s.shared.hiddenCallbacks;if(g!==null)for(s.shared.hiddenCallbacks=null,s=0;s<g.length;s++)Vu(g[s],f)}catch(T){Be(a,a.return,T)}}t&&o&64&&af(r),gr(r,r.return);break;case 27:lf(r);case 26:case 5:qt(s,r,t),t&&a===null&&o&4&&rf(r),gr(r,r.return);break;case 12:qt(s,r,t);break;case 31:qt(s,r,t),t&&o&4&&pf(s,r);break;case 13:qt(s,r,t),t&&o&4&&mf(s,r);break;case 22:r.memoizedState===null&&qt(s,r,t),gr(r,r.return);break;case 30:break;default:qt(s,r,t)}n=n.sibling}}function Fl(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&tr(t))}function Gl(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tr(e))}function pt(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yf(e,n,t,a),n=n.sibling}function yf(e,n,t,a){var s=n.flags;switch(n.tag){case 0:case 11:case 15:pt(e,n,t,a),s&2048&&hr(9,n);break;case 1:pt(e,n,t,a);break;case 3:pt(e,n,t,a),s&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&tr(e)));break;case 12:if(s&2048){pt(e,n,t,a),e=n.stateNode;try{var r=n.memoizedProps,o=r.id,f=r.onPostCommit;typeof f=="function"&&f(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Be(n,n.return,g)}}else pt(e,n,t,a);break;case 31:pt(e,n,t,a);break;case 13:pt(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,o=n.alternate,n.memoizedState!==null?r._visibility&2?pt(e,n,t,a):yr(e,n):r._visibility&2?pt(e,n,t,a):(r._visibility|=2,Ss(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),s&2048&&Fl(o,n);break;case 24:pt(e,n,t,a),s&2048&&Gl(n.alternate,n);break;default:pt(e,n,t,a)}}function Ss(e,n,t,a,s){for(s=s&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var r=e,o=n,f=t,g=a,T=o.flags;switch(o.tag){case 0:case 11:case 15:Ss(r,o,f,g,s),hr(8,o);break;case 23:break;case 22:var D=o.stateNode;o.memoizedState!==null?D._visibility&2?Ss(r,o,f,g,s):yr(r,o):(D._visibility|=2,Ss(r,o,f,g,s)),s&&T&2048&&Fl(o.alternate,o);break;case 24:Ss(r,o,f,g,s),s&&T&2048&&Gl(o.alternate,o);break;default:Ss(r,o,f,g,s)}n=n.sibling}}function yr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,s=a.flags;switch(a.tag){case 22:yr(t,a),s&2048&&Fl(a.alternate,a);break;case 24:yr(t,a),s&2048&&Gl(a.alternate,a);break;default:yr(t,a)}n=n.sibling}}var br=8192;function ws(e,n,t){if(e.subtreeFlags&br)for(e=e.child;e!==null;)bf(e,n,t),e=e.sibling}function bf(e,n,t){switch(e.tag){case 26:ws(e,n,t),e.flags&br&&e.memoizedState!==null&&vg(t,ft,e.memoizedState,e.memoizedProps);break;case 5:ws(e,n,t);break;case 3:case 4:var a=ft;ft=Zi(e.stateNode.containerInfo),ws(e,n,t),ft=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=br,br=16777216,ws(e,n,t),br=a):ws(e,n,t));break;default:ws(e,n,t)}}function vf(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];wn=a,Sf(a,e)}vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xf(e),e=e.sibling}function xf(e){switch(e.tag){case 0:case 11:case 15:vr(e),e.flags&2048&&oa(9,e,e.return);break;case 3:vr(e);break;case 12:vr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Li(e)):vr(e);break;default:vr(e)}}function Li(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];wn=a,Sf(a,e)}vf(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:oa(8,n,n.return),Li(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Li(n));break;default:Li(n)}e=e.sibling}}function Sf(e,n){for(;wn!==null;){var t=wn;switch(t.tag){case 0:case 11:case 15:oa(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:tr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,wn=a;else e:for(t=e;wn!==null;){a=wn;var s=a.sibling,r=a.return;if(df(a),a===t){wn=null;break e}if(s!==null){s.return=r,wn=s;break e}wn=r}}}var Uh={getCacheForType:function(e){var n=En(hn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return En(hn).controller.signal}},jh=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Qe=null,ve=null,we=0,Le=0,Jn=null,la=!1,Cs=!1,Vl=!1,Pt=0,rn=0,ca=0,Fa=0,Yl=0,$n=0,ks=0,xr=null,Fn=null,Xl=!1,Bi=0,wf=0,Ii=1/0,Hi=null,ua=null,xn=0,da=null,Ts=null,Qt=0,Kl=0,Zl=null,Cf=null,Sr=0,Wl=null;function et(){return(Oe&2)!==0&&we!==0?we&-we:N.T!==null?ac():Wa()}function kf(){if($n===0)if((we&536870912)===0||Ee){var e=Za;Za<<=1,(Za&3932160)===0&&(Za=262144),$n=e}else $n=536870912;return e=Zn.current,e!==null&&(e.flags|=32),$n}function Gn(e,n,t){(e===Qe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Es(e,0),fa(e,we,$n,!1)),Pe(e,t),((Oe&2)===0||e!==Qe)&&(e===Qe&&((Oe&2)===0&&(Fa|=t),rn===4&&fa(e,we,$n,!1)),wt(e))}function Tf(e,n,t){if((Oe&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||j(e,n),s=a?Bh(e,n):$l(e,n,!0),r=a;do{if(s===0){Cs&&!a&&fa(e,n,0,!1);break}else{if(t=e.current.alternate,r&&!zh(t)){s=$l(e,n,!1),r=!1;continue}if(s===2){if(r=n,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var f=e;s=xr;var g=f.current.memoizedState.isDehydrated;if(g&&(Es(f,o).flags|=256),o=$l(f,o,!1),o!==2){if(Vl&&!g){f.errorRecoveryDisabledLanes|=r,Fa|=r,s=4;break e}r=Fn,Fn=s,r!==null&&(Fn===null?Fn=r:Fn.push.apply(Fn,r))}s=o}if(r=!1,s!==2)continue}}if(s===1){Es(e,0),fa(e,n,0,!0);break}e:{switch(a=e,r=s,r){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:fa(a,n,$n,!la);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(s=Bi+300-on(),10<s)){if(fa(a,n,$n,!la),y(a,0,!0)!==0)break e;Qt=n,a.timeoutHandle=tp(Ef.bind(null,a,t,Fn,Hi,Xl,n,$n,Fa,ks,la,r,"Throttled",-0,0),s);break e}Ef(a,t,Fn,Hi,Xl,n,$n,Fa,ks,la,r,null,-0,0)}}break}while(!0);wt(e)}function Ef(e,n,t,a,s,r,o,f,g,T,D,L,A,R){if(e.timeoutHandle=-1,L=n.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:q},bf(n,r,L);var Y=(r&62914560)===r?Bi-on():(r&4194048)===r?wf-on():0;if(Y=xg(L,Y),Y!==null){Qt=r,e.cancelPendingCommit=Y(Uf.bind(null,e,n,r,t,a,s,o,f,g,D,L,null,A,R)),fa(e,r,o,!T);return}}Uf(e,n,r,t,a,s,o,f,g)}function zh(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var s=t[a],r=s.getSnapshot;s=s.value;try{if(!Xn(r(),s))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fa(e,n,t,a){n&=~Yl,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var s=n;0<s;){var r=31-_n(s),o=1<<r;a[r]=-1,s&=~o}t!==0&&G(e,t,n)}function qi(){return(Oe&6)===0?(wr(0),!1):!0}function Jl(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,Ot=ja=null,ml(e),gs=null,sr=0,e=ve;for(;e!==null;)tf(e.alternate,e),e=e.return;ve=null}}function Es(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,tg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Qt=0,Jl(),Qe=e,ve=t=Mt(e.current,null),we=n,Le=0,Jn=null,la=!1,Cs=j(e,n),Vl=!1,ks=$n=Yl=Fa=ca=rn=0,Fn=xr=null,Xl=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-_n(a),r=1<<s;n|=e[s],a&=~r}return Pt=n,li(),t}function Af(e,n){me=null,N.H=fr,n===hs||n===gi?(n=Pu(),Le=3):n===tl?(n=Pu(),Le=4):Le=n===Ml?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ve===null&&(rn=1,Mi(e,st(n,e.current)))}function Rf(){var e=Zn.current;return e===null?!0:(we&4194048)===we?lt===null:(we&62914560)===we||(we&536870912)!==0?e===lt:!1}function Nf(){var e=N.H;return N.H=fr,e===null?fr:e}function Mf(){var e=N.A;return N.A=Uh,e}function Pi(){rn=4,la||(we&4194048)!==we&&Zn.current!==null||(Cs=!0),(ca&134217727)===0&&(Fa&134217727)===0||Qe===null||fa(Qe,we,$n,!1)}function $l(e,n,t){var a=Oe;Oe|=2;var s=Nf(),r=Mf();(Qe!==e||we!==n)&&(Hi=null,Es(e,n)),n=!1;var o=rn;e:do try{if(Le!==0&&ve!==null){var f=ve,g=Jn;switch(Le){case 8:Jl(),o=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var T=Le;if(Le=0,Jn=null,As(e,f,g,T),t&&Cs){o=0;break e}break;default:T=Le,Le=0,Jn=null,As(e,f,g,T)}}Lh(),o=rn;break}catch(D){Af(e,D)}while(!0);return n&&e.shellSuspendCounter++,Ot=ja=null,Oe=a,N.H=s,N.A=r,ve===null&&(Qe=null,we=0,li()),o}function Lh(){for(;ve!==null;)Df(ve)}function Bh(e,n){var t=Oe;Oe|=2;var a=Nf(),s=Mf();Qe!==e||we!==n?(Hi=null,Ii=on()+500,Es(e,n)):Cs=j(e,n);e:do try{if(Le!==0&&ve!==null){n=ve;var r=Jn;n:switch(Le){case 1:Le=0,Jn=null,As(e,n,r,1);break;case 2:case 9:if(Hu(r)){Le=0,Jn=null,Of(n);break}n=function(){Le!==2&&Le!==9||Qe!==e||(Le=7),wt(e)},r.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Hu(r)?(Le=0,Jn=null,Of(n)):(Le=0,Jn=null,As(e,n,r,7));break;case 5:var o=null;switch(ve.tag){case 26:o=ve.memoizedState;case 5:case 27:var f=ve;if(o?yp(o):f.stateNode.complete){Le=0,Jn=null;var g=f.sibling;if(g!==null)ve=g;else{var T=f.return;T!==null?(ve=T,Qi(T)):ve=null}break n}}Le=0,Jn=null,As(e,n,r,5);break;case 6:Le=0,Jn=null,As(e,n,r,6);break;case 8:Jl(),rn=6;break e;default:throw Error(c(462))}}Ih();break}catch(D){Af(e,D)}while(!0);return Ot=ja=null,N.H=a,N.A=s,Oe=t,ve!==null?0:(Qe=null,we=0,li(),rn)}function Ih(){for(;ve!==null&&!So();)Df(ve)}function Df(e){var n=ef(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,n===null?Qi(e):ve=n}function Of(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Xd(t,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Xd(t,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:ml(n);default:tf(t,n),n=ve=Nu(n,Pt),n=ef(t,n,Pt)}e.memoizedProps=e.pendingProps,n===null?Qi(e):ve=n}function As(e,n,t,a){Ot=ja=null,ml(n),gs=null,sr=0;var s=n.return;try{if(Ah(e,s,n,t,we)){rn=1,Mi(e,st(t,e.current)),ve=null;return}}catch(r){if(s!==null)throw ve=s,r;rn=1,Mi(e,st(t,e.current)),ve=null;return}n.flags&32768?(Ee||a===1?e=!0:Cs||(we&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=Zn.current,a!==null&&a.tag===13&&(a.flags|=16384))),_f(n,e)):Qi(n)}function Qi(e){var n=e;do{if((n.flags&32768)!==0){_f(n,la);return}e=n.return;var t=Mh(n.alternate,n,Pt);if(t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);rn===0&&(rn=5)}function _f(e,n){do{var t=Dh(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);rn=6,ve=null}function Uf(e,n,t,a,s,r,o,f,g){e.cancelPendingCommit=null;do Fi();while(xn!==0);if((Oe&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(r=n.lanes|n.childLanes,r|=qo,W(e,t,r,o,f,g),e===Qe&&(ve=Qe=null,we=0),Ts=n,da=e,Qt=t,Kl=r,Zl=s,Cf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(wa,function(){return If(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,s=O.p,O.p=2,o=Oe,Oe|=4;try{Oh(e,n,t)}finally{Oe=o,O.p=s,N.T=a}}xn=1,jf(),zf(),Lf()}}function jf(){if(xn===1){xn=0;var e=da,n=Ts,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var a=O.p;O.p=2;var s=Oe;Oe|=4;try{hf(n,e);var r=dc,o=xu(e.containerInfo),f=r.focusedElem,g=r.selectionRange;if(o!==f&&f&&f.ownerDocument&&vu(f.ownerDocument.documentElement,f)){if(g!==null&&zo(f)){var T=g.start,D=g.end;if(D===void 0&&(D=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(D,f.value.length);else{var L=f.ownerDocument||document,A=L&&L.defaultView||window;if(A.getSelection){var R=A.getSelection(),Y=f.textContent.length,ae=Math.min(g.start,Y),qe=g.end===void 0?ae:Math.min(g.end,Y);!R.extend&&ae>qe&&(o=qe,qe=ae,ae=o);var w=bu(f,ae),S=bu(f,qe);if(w&&S&&(R.rangeCount!==1||R.anchorNode!==w.node||R.anchorOffset!==w.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var C=L.createRange();C.setStart(w.node,w.offset),R.removeAllRanges(),ae>qe?(R.addRange(C),R.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),R.addRange(C))}}}}for(L=[],R=f;R=R.parentNode;)R.nodeType===1&&L.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var z=L[f];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}to=!!uc,dc=uc=null}finally{Oe=s,O.p=a,N.T=t}}e.current=n,xn=2}}function zf(){if(xn===2){xn=0;var e=da,n=Ts,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var a=O.p;O.p=2;var s=Oe;Oe|=4;try{uf(e,n.alternate,n)}finally{Oe=s,O.p=a,N.T=t}}xn=3}}function Lf(){if(xn===4||xn===3){xn=0,Fr();var e=da,n=Ts,t=Qt,a=Cf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Ts=da=null,Bf(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ua=null),Tt(t),n=n.stateNode,Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Ca,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=N.T,s=O.p,O.p=2,N.T=null;try{for(var r=e.onRecoverableError,o=0;o<a.length;o++){var f=a[o];r(f.value,{componentStack:f.stack})}}finally{N.T=n,O.p=s}}(Qt&3)!==0&&Fi(),wt(e),s=e.pendingLanes,(t&261930)!==0&&(s&42)!==0?e===Wl?Sr++:(Sr=0,Wl=e):Sr=0,wr(0)}}function Bf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,tr(n)))}function Fi(){return jf(),zf(),Lf(),If()}function If(){if(xn!==5)return!1;var e=da,n=Kl;Kl=0;var t=Tt(Qt),a=N.T,s=O.p;try{O.p=32>t?32:t,N.T=null,t=Zl,Zl=null;var r=da,o=Qt;if(xn=0,Ts=da=null,Qt=0,(Oe&6)!==0)throw Error(c(331));var f=Oe;if(Oe|=4,xf(r.current),yf(r,r.current,o,t),Oe=f,wr(0,!1),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Ca,r)}catch{}return!0}finally{O.p=s,N.T=a,Bf(e,n)}}function Hf(e,n,t){n=st(t,n),n=Nl(e.stateNode,n,2),e=sa(e,n,2),e!==null&&(Pe(e,2),wt(e))}function Be(e,n,t){if(e.tag===3)Hf(e,e,t);else for(;n!==null;){if(n.tag===3){Hf(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))){e=st(t,e),t=Hd(2),a=sa(n,t,2),a!==null&&(qd(t,a,n,e),Pe(a,2),wt(a));break}}n=n.return}}function ec(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new jh;var s=new Set;a.set(n,s)}else s=a.get(n),s===void 0&&(s=new Set,a.set(n,s));s.has(t)||(Vl=!0,s.add(t),e=Hh.bind(null,e,n,t),n.then(e,e))}function Hh(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Qe===e&&(we&t)===t&&(rn===4||rn===3&&(we&62914560)===we&&300>on()-Bi?(Oe&2)===0&&Es(e,0):Yl|=t,ks===we&&(ks=0)),wt(e)}function qf(e,n){n===0&&(n=le()),e=Oa(e,n),e!==null&&(Pe(e,n),wt(e))}function qh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qf(e,t)}function Ph(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),qf(e,t)}function Qh(e,n){return Ka(e,n)}var Gi=null,Rs=null,nc=!1,Vi=!1,tc=!1,pa=0;function wt(e){e!==Rs&&e.next===null&&(Rs===null?Gi=Rs=e:Rs=Rs.next=e),Vi=!0,nc||(nc=!0,Gh())}function wr(e,n){if(!tc&&Vi){tc=!0;do for(var t=!1,a=Gi;a!==null;){if(e!==0){var s=a.pendingLanes;if(s===0)var r=0;else{var o=a.suspendedLanes,f=a.pingedLanes;r=(1<<31-_n(42|e)+1)-1,r&=s&~(o&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Gf(a,r))}else r=we,r=y(a,a===Qe?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||j(a,r)||(t=!0,Gf(a,r));a=a.next}while(t);tc=!1}}function Fh(){Pf()}function Pf(){Vi=nc=!1;var e=0;pa!==0&&ng()&&(e=pa);for(var n=on(),t=null,a=Gi;a!==null;){var s=a.next,r=Qf(a,n);r===0?(a.next=null,t===null?Gi=s:t.next=s,s===null&&(Rs=t)):(t=a,(e!==0||(r&3)!==0)&&(Vi=!0)),a=s}xn!==0&&xn!==5||wr(e),pa!==0&&(pa=0)}function Qf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-_n(r),f=1<<o,g=s[o];g===-1?((f&t)===0||(f&a)!==0)&&(s[o]=Q(f,n)):g<=n&&(e.expiredLanes|=f),r&=~f}if(n=Qe,t=we,t=y(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ls(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||j(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Ls(a),Tt(t)){case 2:case 8:t=Sa;break;case 32:t=wa;break;case 268435456:t=Vr;break;default:t=wa}return a=Ff.bind(null,e),t=Ka(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Ls(a),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Fi()&&e.callbackNode!==t)return null;var a=we;return a=y(e,e===Qe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tf(e,a,n),Qf(e,on()),e.callbackNode!=null&&e.callbackNode===t?Ff.bind(null,e):null)}function Gf(e,n){if(Fi())return null;Tf(e,n,!0)}function Gh(){ag(function(){(Oe&6)!==0?Ka(kt,Fh):Pf()})}function ac(){if(pa===0){var e=ps;e===0&&(e=ka,ka<<=1,(ka&261888)===0&&(ka=256)),pa=e}return pa}function Vf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zt(""+e)}function Yf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Vh(e,n,t,a,s){if(n==="submit"&&t&&t.stateNode===s){var r=Vf((s[Mn]||null).action),o=a.submitter;o&&(n=(n=o[Mn]||null)?Vf(n.formAction):o.getAttribute("formAction"),n!==null&&(r=n,o=null));var f=new si("action","action",null,a,s);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(pa!==0){var g=o?Yf(s,o):new FormData(s);Cl(t,{pending:!0,data:g,method:s.method,action:r},null,g)}}else typeof r=="function"&&(f.preventDefault(),g=o?Yf(s,o):new FormData(s),Cl(t,{pending:!0,data:g,method:s.method,action:r},r,g))},currentTarget:s}]})}}for(var sc=0;sc<Ho.length;sc++){var rc=Ho[sc],Yh=rc.toLowerCase(),Xh=rc[0].toUpperCase()+rc.slice(1);dt(Yh,"on"+Xh)}dt(Cu,"onAnimationEnd"),dt(ku,"onAnimationIteration"),dt(Tu,"onAnimationStart"),dt("dblclick","onDoubleClick"),dt("focusin","onFocus"),dt("focusout","onBlur"),dt(uh,"onTransitionRun"),dt(dh,"onTransitionStart"),dt(fh,"onTransitionCancel"),dt(Eu,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cr));function Xf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],s=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var f=a[o],g=f.instance,T=f.currentTarget;if(f=f.listener,g!==r&&s.isPropagationStopped())break e;r=f,s.currentTarget=T;try{r(s)}catch(D){oi(D)}s.currentTarget=null,r=g}else for(o=0;o<a.length;o++){if(f=a[o],g=f.instance,T=f.currentTarget,f=f.listener,g!==r&&s.isPropagationStopped())break e;r=f,s.currentTarget=T;try{r(s)}catch(D){oi(D)}s.currentTarget=null,r=g}}}}function xe(e,n){var t=n[Is];t===void 0&&(t=n[Is]=new Set);var a=e+"__bubble";t.has(a)||(Kf(n,e,2,!1),t.add(a))}function ic(e,n,t){var a=0;n&&(a|=4),Kf(t,e,a,n)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function oc(e){if(!e[Yi]){e[Yi]=!0,Zr.forEach(function(t){t!=="selectionchange"&&(Kh.has(t)||ic(t,!1,e),ic(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yi]||(n[Yi]=!0,ic("selectionchange",!1,n))}}function Kf(e,n,t,a){switch(kp(n)){case 2:var s=Cg;break;case 8:s=kg;break;default:s=wc}t=s.bind(null,n,t,e),s=void 0,!Ao||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function lc(e,n,t,a,s){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var f=a.stateNode.containerInfo;if(f===s)break;if(o===4)for(o=a.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;f!==null;){if(o=Un(f),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){a=r=o;continue e}f=f.parentNode}}a=a.return}ei(function(){var T=r,D=fe(t),L=[];e:{var A=Au.get(e);if(A!==void 0){var R=si,Y=e;switch(e){case"keypress":if(ti(t)===0)break e;case"keydown":case"keyup":R=Pm;break;case"focusin":Y="focus",R=Do;break;case"focusout":Y="blur",R=Do;break;case"beforeblur":case"afterblur":R=Do;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Gm;break;case Cu:case ku:case Tu:R=_m;break;case Eu:R=Ym;break;case"scroll":case"scrollend":R=Rm;break;case"wheel":R=Km;break;case"copy":case"cut":case"paste":R=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=su;break;case"toggle":case"beforetoggle":R=Wm}var ae=(n&4)!==0,qe=!ae&&(e==="scroll"||e==="scrollend"),w=ae?A!==null?A+"Capture":null:A;ae=[];for(var S=T,C;S!==null;){var z=S;if(C=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||C===null||w===null||(z=Gs(S,w),z!=null&&ae.push(kr(S,z,C))),qe)break;S=S.return}0<ae.length&&(A=new R(A,Y,null,t,D),L.push({event:A,listeners:ae}))}}if((n&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&t!==J&&(Y=t.relatedTarget||t.fromElement)&&(Un(Y)||Y[Vt]))break e;if((R||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,R?(Y=t.relatedTarget||t.toElement,R=T,Y=Y?Un(Y):null,Y!==null&&(qe=h(Y),ae=Y.tag,Y!==qe||ae!==5&&ae!==27&&ae!==6)&&(Y=null)):(R=null,Y=T),R!==Y)){if(ae=tu,z="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=su,z="onPointerLeave",w="onPointerEnter",S="pointer"),qe=R==null?A:Yt(R),C=Y==null?A:Yt(Y),A=new ae(z,S+"leave",R,t,D),A.target=qe,A.relatedTarget=C,z=null,Un(D)===T&&(ae=new ae(w,S+"enter",Y,t,D),ae.target=C,ae.relatedTarget=qe,z=ae),qe=z,R&&Y)n:{for(ae=Zh,w=R,S=Y,C=0,z=w;z;z=ae(z))C++;z=0;for(var ne=S;ne;ne=ae(ne))z++;for(;0<C-z;)w=ae(w),C--;for(;0<z-C;)S=ae(S),z--;for(;C--;){if(w===S||S!==null&&w===S.alternate){ae=w;break n}w=ae(w),S=ae(S)}ae=null}else ae=null;R!==null&&Zf(L,A,R,ae,!1),Y!==null&&qe!==null&&Zf(L,qe,Y,ae,!0)}}e:{if(A=T?Yt(T):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var Ne=fu;else if(uu(A))if(pu)Ne=oh;else{Ne=rh;var $=sh}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Kt(T.elementType)&&(Ne=fu):Ne=ih;if(Ne&&(Ne=Ne(e,T))){du(L,Ne,t,D);break e}$&&$(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&ts(A,"number",A.value)}switch($=T?Yt(T):window,e){case"focusin":(uu($)||$.contentEditable==="true")&&(rs=$,Lo=T,$s=null);break;case"focusout":$s=Lo=rs=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,Su(L,t,D);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Su(L,t,D)}var he;if(_o)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else ss?lu(e,t)&&(Ce="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ce="onCompositionStart");Ce&&(ru&&t.locale!=="ko"&&(ss||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&ss&&(he=eu()):(Wt=D,Ro="value"in Wt?Wt.value:Wt.textContent,ss=!0)),$=Xi(T,Ce),0<$.length&&(Ce=new au(Ce,e,null,t,D),L.push({event:Ce,listeners:$}),he?Ce.data=he:(he=cu(t),he!==null&&(Ce.data=he)))),(he=$m?eh(e,t):nh(e,t))&&(Ce=Xi(T,"onBeforeInput"),0<Ce.length&&($=new au("onBeforeInput","beforeinput",null,t,D),L.push({event:$,listeners:Ce}),$.data=he)),Vh(L,e,T,t,D)}Xf(L,n)})}function kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xi(e,n){for(var t=n+"Capture",a=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Gs(e,t),s!=null&&a.unshift(kr(e,s,r)),s=Gs(e,n),s!=null&&a.push(kr(e,s,r))),e.tag===3)return a;e=e.return}return[]}function Zh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,n,t,a,s){for(var r=n._reactName,o=[];t!==null&&t!==a;){var f=t,g=f.alternate,T=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||T===null||(g=T,s?(T=Gs(t,r),T!=null&&o.unshift(kr(t,T,g))):s||(T=Gs(t,r),T!=null&&o.push(kr(t,T,g)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wh=/\r\n?/g,Jh=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Jh,"")}function Jf(e,n){return n=Wf(n),Wf(e)===n}function He(e,n,t,a,s,r){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||se(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&se(e,""+a);break;case"className":Vn(e,"class",a);break;case"tabIndex":Vn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,t,a);break;case"style":ze(e,a,r);break;case"data":if(n!=="object"){Vn(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Zt(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&He(e,n,"name",s.name,s,null),He(e,n,"formEncType",s.formEncType,s,null),He(e,n,"formMethod",s.formMethod,s,null),He(e,n,"formTarget",s.formTarget,s,null)):(He(e,n,"encType",s.encType,s,null),He(e,n,"method",s.method,s,null),He(e,n,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Zt(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=q);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Zt(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Dn(e,"popover",a);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Rt.get(t)||t,Dn(e,t,a))}}function cc(e,n,t,a,s,r){switch(t){case"style":ze(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?se(e,a):(typeof a=="number"||typeof a=="bigint")&&se(e,""+a);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=q);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Aa.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),n=t.slice(2,s?t.length-7:void 0),r=e[Mn]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,s),typeof a=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,s);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Dn(e,t,a)}}}function Rn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var a=!1,s=!1,r;for(r in t)if(t.hasOwnProperty(r)){var o=t[r];if(o!=null)switch(r){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:He(e,n,r,o,t,null)}}s&&He(e,n,"srcSet",t.srcSet,t,null),a&&He(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var f=r=o=s=null,g=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var D=t[a];if(D!=null)switch(a){case"name":s=D;break;case"type":o=D;break;case"checked":g=D;break;case"defaultChecked":T=D;break;case"value":r=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:He(e,n,a,D,t,null)}}Ra(e,r,f,g,T,o,s,!1);return;case"select":xe("invalid",e),a=o=r=null;for(s in t)if(t.hasOwnProperty(s)&&(f=t[s],f!=null))switch(s){case"value":r=f;break;case"defaultValue":o=f;break;case"multiple":a=f;default:He(e,n,s,f,t,null)}n=r,t=o,e.multiple=!!a,n!=null?kn(e,!!a,n,!1):t!=null&&kn(e,!!a,t,!0);return;case"textarea":xe("invalid",e),r=s=a=null;for(o in t)if(t.hasOwnProperty(o)&&(f=t[o],f!=null))switch(o){case"value":a=f;break;case"defaultValue":s=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:He(e,n,o,f,t,null)}as(e,a,s,r);return;case"option":for(g in t)t.hasOwnProperty(g)&&(a=t[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":He(e,n,g,a,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(a=0;a<Cr.length;a++)xe(Cr[a],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:He(e,n,T,a,t,null)}return;default:if(Kt(n)){for(D in t)t.hasOwnProperty(D)&&(a=t[D],a!==void 0&&cc(e,n,D,a,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null&&He(e,n,f,a,t,null))}function $h(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,o=null,f=null,g=null,T=null,D=null;for(R in t){var L=t[R];if(t.hasOwnProperty(R)&&L!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=L;default:a.hasOwnProperty(R)||He(e,n,R,null,a,L)}}for(var A in a){var R=a[A];if(L=t[A],a.hasOwnProperty(A)&&(R!=null||L!=null))switch(A){case"type":r=R;break;case"name":s=R;break;case"checked":T=R;break;case"defaultChecked":D=R;break;case"value":o=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,n));break;default:R!==L&&He(e,n,A,R,a,L)}}Ps(e,o,f,g,T,D,r,s);return;case"select":R=o=f=A=null;for(r in t)if(g=t[r],t.hasOwnProperty(r)&&g!=null)switch(r){case"value":break;case"multiple":R=g;default:a.hasOwnProperty(r)||He(e,n,r,null,a,g)}for(s in a)if(r=a[s],g=t[s],a.hasOwnProperty(s)&&(r!=null||g!=null))switch(s){case"value":A=r;break;case"defaultValue":f=r;break;case"multiple":o=r;default:r!==g&&He(e,n,s,r,a,g)}n=f,t=o,a=R,A!=null?kn(e,!!t,A,!1):!!a!=!!t&&(n!=null?kn(e,!!t,n,!0):kn(e,!!t,t?[]:"",!1));return;case"textarea":R=A=null;for(f in t)if(s=t[f],t.hasOwnProperty(f)&&s!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:He(e,n,f,null,a,s)}for(o in a)if(s=a[o],r=t[o],a.hasOwnProperty(o)&&(s!=null||r!=null))switch(o){case"value":A=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==r&&He(e,n,o,s,a,r)}Jr(e,A,R);return;case"option":for(var Y in t)A=t[Y],t.hasOwnProperty(Y)&&A!=null&&!a.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:He(e,n,Y,null,a,A));for(g in a)A=a[g],R=t[g],a.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null)&&(g==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":He(e,n,g,A,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in t)A=t[ae],t.hasOwnProperty(ae)&&A!=null&&!a.hasOwnProperty(ae)&&He(e,n,ae,null,a,A);for(T in a)if(A=a[T],R=t[T],a.hasOwnProperty(T)&&A!==R&&(A!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:He(e,n,T,A,a,R)}return;default:if(Kt(n)){for(var qe in t)A=t[qe],t.hasOwnProperty(qe)&&A!==void 0&&!a.hasOwnProperty(qe)&&cc(e,n,qe,void 0,a,A);for(D in a)A=a[D],R=t[D],!a.hasOwnProperty(D)||A===R||A===void 0&&R===void 0||cc(e,n,D,A,a,R);return}}for(var w in t)A=t[w],t.hasOwnProperty(w)&&A!=null&&!a.hasOwnProperty(w)&&He(e,n,w,null,a,A);for(L in a)A=a[L],R=t[L],!a.hasOwnProperty(L)||A===R||A==null&&R==null||He(e,n,L,A,a,R)}function $f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var s=t[a],r=s.transferSize,o=s.initiatorType,f=s.duration;if(r&&f&&$f(o)){for(o=0,f=s.responseEnd,a+=1;a<t.length;a++){var g=t[a],T=g.startTime;if(T>f)break;var D=g.transferSize,L=g.initiatorType;D&&$f(L)&&(g=g.responseEnd,o+=D*(g<f?1:(f-T)/(g-T)))}if(--a,n+=8*(r+o)/(s.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,dc=null;function Ki(e){return e.nodeType===9?e:e.ownerDocument}function ep(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function np(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function fc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pc=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===pc?!1:(pc=e,!0):(pc=null,!1)}var tp=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(sg)}:tp;function sg(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function sp(e,n){var t=n,a=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(s),Os(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Tr(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Tr(t);for(var r=t.firstChild;r;){var o=r.nextSibling,f=r.nodeName;r[Ea]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=o}}else t==="body"&&Tr(e.ownerDocument.body);t=s}while(t);Os(n)}function rp(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function mc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":mc(t),Hs(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function rg(e,n,t,a){for(;e.nodeType===1;){var s=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ea])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ct(e.nextSibling),e===null)break}return null}function ig(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ct(e.nextSibling),e===null))return null;return e}function ip(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ct(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function og(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var yc=null;function op(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return ct(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function lp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function cp(e,n,t){switch(n=Ki(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Tr(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hs(e)}var ut=new Map,up=new Set;function Zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=O.d;O.d={f:lg,r:cg,D:ug,C:dg,L:fg,m:pg,X:hg,S:mg,M:gg};function lg(){var e=Ft.f(),n=qi();return e||n}function cg(e){var n=Et(e);n!==null&&n.tag===5&&n.type==="form"?Ed(n):Ft.r(e)}var Ns=typeof document>"u"?null:document;function dp(e,n,t){var a=Ns;if(a&&typeof n=="string"&&n){var s=In(n);s='link[rel="'+e+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),up.has(s)||(up.add(s),e={rel:e,crossOrigin:t,href:n},a.querySelector(s)===null&&(n=a.createElement("link"),Rn(n,"link",e),pn(n),a.head.appendChild(n)))}}function ug(e){Ft.D(e),dp("dns-prefetch",e,null)}function dg(e,n){Ft.C(e,n),dp("preconnect",e,n)}function fg(e,n,t){Ft.L(e,n,t);var a=Ns;if(a&&e&&n){var s='link[rel="preload"][as="'+In(n)+'"]';n==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+In(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+In(t.imageSizes)+'"]')):s+='[href="'+In(e)+'"]';var r=s;switch(n){case"style":r=Ms(e);break;case"script":r=Ds(e)}ut.has(r)||(e=U({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),ut.set(r,e),a.querySelector(s)!==null||n==="style"&&a.querySelector(Er(r))||n==="script"&&a.querySelector(Ar(r))||(n=a.createElement("link"),Rn(n,"link",e),pn(n),a.head.appendChild(n)))}}function pg(e,n){Ft.m(e,n);var t=Ns;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",s='link[rel="modulepreload"][as="'+In(a)+'"][href="'+In(e)+'"]',r=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ds(e)}if(!ut.has(r)&&(e=U({rel:"modulepreload",href:e},n),ut.set(r,e),t.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ar(r)))return}a=t.createElement("link"),Rn(a,"link",e),pn(a),t.head.appendChild(a)}}}function mg(e,n,t){Ft.S(e,n,t);var a=Ns;if(a&&e){var s=Xt(a).hoistableStyles,r=Ms(e);n=n||"default";var o=s.get(r);if(!o){var f={loading:0,preload:null};if(o=a.querySelector(Er(r)))f.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":n},t),(t=ut.get(r))&&bc(e,t);var g=o=a.createElement("link");pn(g),Rn(g,"link",e),g._p=new Promise(function(T,D){g.onload=T,g.onerror=D}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Wi(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:f},s.set(r,o)}}}function hg(e,n){Ft.X(e,n);var t=Ns;if(t&&e){var a=Xt(t).hoistableScripts,s=Ds(e),r=a.get(s);r||(r=t.querySelector(Ar(s)),r||(e=U({src:e,async:!0},n),(n=ut.get(s))&&vc(e,n),r=t.createElement("script"),pn(r),Rn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(s,r))}}function gg(e,n){Ft.M(e,n);var t=Ns;if(t&&e){var a=Xt(t).hoistableScripts,s=Ds(e),r=a.get(s);r||(r=t.querySelector(Ar(s)),r||(e=U({src:e,async:!0,type:"module"},n),(n=ut.get(s))&&vc(e,n),r=t.createElement("script"),pn(r),Rn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(s,r))}}function fp(e,n,t,a){var s=(s=ge.current)?Zi(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Ms(t.href),t=Xt(s).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ms(t.href);var r=Xt(s).hoistableStyles,o=r.get(e);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=s.querySelector(Er(e)))&&!r._p&&(o.instance=r,o.state.loading=5),ut.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ut.set(e,t),r||yg(s,e,t,o.state))),n&&a===null)throw Error(c(528,""));return o}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ds(t),t=Xt(s).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ms(e){return'href="'+In(e)+'"'}function Er(e){return'link[rel="stylesheet"]['+e+"]"}function pp(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function yg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Rn(n,"link",t),pn(n),e.head.appendChild(n))}function Ds(e){return'[src="'+In(e)+'"]'}function Ar(e){return"script[async]"+e}function mp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+In(t.href)+'"]');if(a)return n.instance=a,pn(a),a;var s=U({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pn(a),Rn(a,"style",s),Wi(a,t.precedence,e),n.instance=a;case"stylesheet":s=Ms(t.href);var r=e.querySelector(Er(s));if(r)return n.state.loading|=4,n.instance=r,pn(r),r;a=pp(t),(s=ut.get(s))&&bc(a,s),r=(e.ownerDocument||e).createElement("link"),pn(r);var o=r;return o._p=new Promise(function(f,g){o.onload=f,o.onerror=g}),Rn(r,"link",a),n.state.loading|=4,Wi(r,t.precedence,e),n.instance=r;case"script":return r=Ds(t.src),(s=e.querySelector(Ar(r)))?(n.instance=s,pn(s),s):(a=t,(s=ut.get(r))&&(a=U({},t),vc(a,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),Rn(s,"link",a),e.head.appendChild(s),n.instance=s);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Wi(a,t.precedence,e));return n.instance}function Wi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,r=s,o=0;o<a.length;o++){var f=a[o];if(f.dataset.precedence===n)r=f;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function bc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ji=null;function hp(e,n,t){if(Ji===null){var a=new Map,s=Ji=new Map;s.set(t,a)}else s=Ji,a=s.get(t),a||(a=new Map,s.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),s=0;s<t.length;s++){var r=t[s];if(!(r[Ea]||r[cn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(n)||"";o=e+o;var f=a.get(o);f?f.push(r):a.set(o,[r])}}return a}function gp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function bg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=Ms(a.href),r=n.querySelector(Er(s));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$i.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=r,pn(r);return}r=n.ownerDocument||n,a=pp(a),(s=ut.get(s))&&bc(a,s),r=r.createElement("link"),pn(r);var o=r;o._p=new Promise(function(f,g){o.onload=f,o.onerror=g}),Rn(r,"link",a),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=$i.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var xc=0;function xg(e,n){return e.stylesheets&&e.count===0&&no(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&no(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+n);0<e.imgBytes&&xc===0&&(xc=62500*eg());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&no(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>xc?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)no(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eo=null;function no(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eo=new Map,n.forEach(Sg,e),eo=null,$i.call(e))}function Sg(e,n){if(!(n.state.loading&4)){var t=eo.get(e);if(t)var a=t.get(null);else{t=new Map,eo.set(e,t);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var o=s[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}s=n.instance,o=s.getAttribute("data-precedence"),r=t.get(o)||a,r===a&&t.set(null,s),t.set(o,s),this.count++,a=$i.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),n.state.loading|=4}}var Rr={$$typeof:V,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function wg(e,n,t,a,s,r,o,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function bp(e,n,t,a,s,r,o,f,g,T,D,L){return e=new wg(e,n,t,o,g,T,D,L,f),n=1,r===!0&&(n|=24),r=Kn(3,null,null,n),e.current=r,r.stateNode=e,n=$o(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:n},al(r),e}function vp(e){return e?(e=ls,e):ls}function xp(e,n,t,a,s,r){s=vp(s),a.context===null?a.context=s:a.pendingContext=s,a=aa(n),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=sa(e,a,n),t!==null&&(Gn(t,e,n),ir(t,e,n))}function Sp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Sc(e,n){Sp(e,n),(e=e.alternate)&&Sp(e,n)}function wp(e){if(e.tag===13||e.tag===31){var n=Oa(e,67108864);n!==null&&Gn(n,e,67108864),Sc(e,67108864)}}function Cp(e){if(e.tag===13||e.tag===31){var n=et();n=Ze(n);var t=Oa(e,n);t!==null&&Gn(t,e,n),Sc(e,n)}}var to=!0;function Cg(e,n,t,a){var s=N.T;N.T=null;var r=O.p;try{O.p=2,wc(e,n,t,a)}finally{O.p=r,N.T=s}}function kg(e,n,t,a){var s=N.T;N.T=null;var r=O.p;try{O.p=8,wc(e,n,t,a)}finally{O.p=r,N.T=s}}function wc(e,n,t,a){if(to){var s=Cc(a);if(s===null)lc(e,n,a,ao,t),Tp(e,a);else if(Eg(s,e,n,t,a))a.stopPropagation();else if(Tp(e,a),n&4&&-1<Tg.indexOf(e)){for(;s!==null;){var r=Et(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ln(r.pendingLanes);if(o!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var g=1<<31-_n(o);f.entanglements[1]|=g,o&=~g}wt(r),(Oe&6)===0&&(Ii=on()+500,wr(0))}}break;case 31:case 13:f=Oa(r,2),f!==null&&Gn(f,r,2),qi(),Sc(r,2)}if(r=Cc(a),r===null&&lc(e,n,a,ao,t),r===s)break;s=r}s!==null&&a.stopPropagation()}else lc(e,n,a,null,t)}}function Cc(e){return e=fe(e),kc(e)}var ao=null;function kc(e){if(ao=null,e=Un(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===31){if(e=k(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ao=e,null}function kp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gr()){case kt:return 2;case Sa:return 8;case wa:case wo:return 32;case Vr:return 268435456;default:return 32}default:return 32}}var Tc=!1,ha=null,ga=null,ya=null,Nr=new Map,Mr=new Map,ba=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tp(e,n){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Nr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(n.pointerId)}}function Dr(e,n,t,a,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[s]},n!==null&&(n=Et(n),n!==null&&wp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Eg(e,n,t,a,s){switch(n){case"focusin":return ha=Dr(ha,e,n,t,a,s),!0;case"dragenter":return ga=Dr(ga,e,n,t,a,s),!0;case"mouseover":return ya=Dr(ya,e,n,t,a,s),!0;case"pointerover":var r=s.pointerId;return Nr.set(r,Dr(Nr.get(r)||null,e,n,t,a,s)),!0;case"gotpointercapture":return r=s.pointerId,Mr.set(r,Dr(Mr.get(r)||null,e,n,t,a,s)),!0}return!1}function Ep(e){var n=Un(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Ja(e.priority,function(){Cp(t)});return}}else if(n===31){if(n=k(t),n!==null){e.blockedOn=n,Ja(e.priority,function(){Cp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Cc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);J=a,t.target.dispatchEvent(a),J=null}else return n=Et(t),n!==null&&wp(n),e.blockedOn=t,!1;n.shift()}return!0}function Ap(e,n,t){so(e)&&t.delete(n)}function Ag(){Tc=!1,ha!==null&&so(ha)&&(ha=null),ga!==null&&so(ga)&&(ga=null),ya!==null&&so(ya)&&(ya=null),Nr.forEach(Ap),Mr.forEach(Ap)}function ro(e,n){e.blockedOn===n&&(e.blockedOn=null,Tc||(Tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ag)))}var io=null;function Rp(e){io!==e&&(io=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){io===e&&(io=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],s=e[n+2];if(typeof a!="function"){if(kc(a||t)===null)continue;break}var r=Et(t);r!==null&&(e.splice(n,3),n-=3,Cl(r,{pending:!0,data:s,method:t.method,action:a},a,s))}}))}function Os(e){function n(g){return ro(g,e)}ha!==null&&ro(ha,e),ga!==null&&ro(ga,e),ya!==null&&ro(ya,e),Nr.forEach(n),Mr.forEach(n);for(var t=0;t<ba.length;t++){var a=ba[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ba.length&&(t=ba[0],t.blockedOn===null);)Ep(t),t.blockedOn===null&&ba.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var s=t[a],r=t[a+1],o=s[Mn]||null;if(typeof r=="function")o||Rp(t);else if(o){var f=null;if(r&&r.hasAttribute("formAction")){if(s=r,o=r[Mn]||null)f=o.formAction;else if(kc(s)!==null)continue}else f=o.action;typeof f=="function"?t[a+1]=f:(t.splice(a,3),a-=3),Rp(t)}}}function Np(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return s=o})},focusReset:"manual",scroll:"manual"})}function n(){s!==null&&(s(),s=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),s!==null&&(s(),s=null)}}}function Ec(e){this._internalRoot=e}oo.prototype.render=Ec.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=et();xp(t,a,e,n,null,null)},oo.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xp(e.current,2,null,e,null,null),qi(),n[Vt]=null}};function oo(e){this._internalRoot=e}oo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ba.length&&n!==0&&n<ba[t].priority;t++);ba.splice(t,0,e),t===0&&Ep(e)}};var Mp=i.version;if(Mp!=="19.2.4")throw Error(c(527,Mp,"19.2.4"));O.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Rg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Ca=lo.inject(Rg),Nn=lo}catch{}}return _r.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,a="",s=zd,r=Ld,o=Bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=bp(e,1,!1,null,null,t,a,null,s,r,o,Np),e[Vt]=n.current,oc(e),new Ec(n)},_r.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var a=!1,s="",r=zd,o=Ld,f=Bd,g=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),n=bp(e,1,!0,n,t??null,a,s,g,r,o,f,Np),n.context=vp(null),t=n.current,a=et(),a=Ze(a),s=aa(a),s.callback=null,sa(t,s,a),t=a,n.current.lanes=t,Pe(n,t),wt(n),e[Vt]=n.current,oc(e),new oo(n)},_r.version="19.2.4",_r}var Hp;function Ig(){if(Hp)return Nc.exports;Hp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Nc.exports=Bg(),Nc.exports}var Hg=Ig();function Uc(l,i){const[u,c]=pe.useState(()=>{try{const m=window.localStorage.getItem(l);return m?JSON.parse(m):i}catch(m){return console.error(`Error reading localStorage key "${l}":`,m),i}});pe.useEffect(()=>{try{window.localStorage.setItem(l,JSON.stringify(u))}catch(m){console.error(`Error writing localStorage key "${l}":`,m)}},[l,u]);const d=pe.useCallback(m=>{c(k=>m instanceof Function?m(k):m)},[]),h=pe.useCallback(()=>{try{window.localStorage.removeItem(l),c(i)}catch(m){console.error(`Error clearing localStorage key "${l}":`,m)}},[l,i]);return[u,d,h]}function qg(l){const i=[],u=l.split(/(?=^## \d+\.)/m).filter(Boolean);for(const c of u){const d=c.match(/^## (\d+)\. (.+?)[\r\n]/m);if(!d)continue;const[,h,m]=d,k=parseInt(h,10),b=`cat-${k}`,v=m.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+$/,""),E=Pg(c,b,m.trim());E.length>0&&i.push({id:b,number:k,name:m.trim(),slug:v,questions:E})}return i.sort((c,d)=>c.number-d.number)}function Pg(l,i,u){const c=[];return l.split(/(?=^### Q:)/m).filter(h=>h.trim().startsWith("### Q:")).forEach((h,m)=>{const k=h.match(/^### Q: (.+?)[\r\n]/m);if(!k)return;const b=k[1].trim(),v=h.indexOf("**Answer:**");let E="";v!==-1?E=h.slice(v+11).trim():E=h.slice(k[0].length).trim(),E=E.replace(/\n---\s*$/,"").trim();const U=Qg(E);c.push({id:`${i}-q${m+1}`,categoryId:i,categoryName:u,question:b,answer:E,seniorInsight:U})}),c}function Qg(l){const i=l.match(/\*\*Senior insight:\*\*\s*(.+?)(?=\n\n|\n---|\n###|$)/s);return i?i[1].trim():void 0}function Fg(l){return l.reduce((i,u)=>i+u.questions.length,0)}function Gg(l){return l.flatMap(i=>i.questions)}const Vg=`## 1. React Core Concepts

### Q: What is the Virtual DOM and how does React's reconciliation algorithm work?

**Answer:**

The Virtual DOM (VDOM) is an in-memory JavaScript representation of the actual DOM. It's a lightweight copy that React uses to optimize updates.

**How Reconciliation Works:**

1. **State/Props Change** → React creates a new VDOM tree
2. **Diffing** → React compares the new VDOM with the previous one using a diffing algorithm
3. **Batch Updates** → React calculates the minimal set of changes needed
4. **Commit** → React updates only the changed parts of the real DOM

**Key Optimizations:**
- **O(n) complexity** instead of O(n³) by using heuristics:
  - Elements of different types produce different trees (full replacement)
  - Developer hints via \`key\` prop for list items
  - Same component type = update props, different type = unmount/remount

**Senior insight:** The VDOM isn't inherently faster than direct DOM manipulation. Its value is in providing a declarative API while React handles efficient batching and minimal updates internally.

\`\`\`jsx
// React batches these into a single DOM update
setCount(1);
setName('John');
setActive(true);
// Only one re-render and DOM update occurs
\`\`\`

---

### Q: Explain React Fiber architecture and how it improves responsiveness

**Answer:**

**React Fiber** is a complete rewrite of React's core reconciliation algorithm (introduced in React 16). It enables **incremental rendering** - splitting rendering work into chunks spread across multiple frames.

**Problems Fiber Solves:**

1. **Main thread blocking** - Old React couldn't pause rendering, causing janky UIs
2. **No prioritization** - All updates treated equally (typing vs. data fetch)
3. **No interruption** - Once rendering started, it had to complete

**How Fiber Works:**

\`\`\`
Each React element → Fiber Node → Forms Fiber Tree
\`\`\`

**Key Concepts:**

1. **Work Units (Fibers):** Each fiber is a unit of work that can be paused/resumed
2. **Two Phases:**
   - **Render Phase (interruptible):** Build work-in-progress tree, call render functions, diff
   - **Commit Phase (synchronous):** Apply DOM changes, run effects, cannot be interrupted

3. **Priority Levels:**
   - Immediate (user input)
   - User-blocking (hover, click)
   - Normal (data fetching)
   - Low (analytics)
   - Idle (prefetching)

4. **Time Slicing:** React monitors execution time, yields to browser for animations/input, continues in next frame

**Senior insight:** Fiber enables Concurrent Features in React 18 (useTransition, Suspense) by allowing React to prepare multiple versions of UI simultaneously and interrupt low-priority work for high-priority updates.

---

### Q: What is JSX and how does it get transformed?

**Answer:**

JSX is a syntax extension that lets you write HTML-like code in JavaScript. It's **not** valid JavaScript - it must be transformed at build time.

**Transformation (Modern - React 17+):**

\`\`\`jsx
// JSX
<Button onClick={handleClick} primary>
  Click me
</Button>

// Transforms to (new JSX transform)
import { jsx as _jsx } from 'react/jsx-runtime';
_jsx(Button, {
  onClick: handleClick,
  primary: true,
  children: "Click me"
});

// Old transform (pre-React 17)
React.createElement(Button, {
  onClick: handleClick,
  primary: true
}, "Click me");
\`\`\`

**Key Points:**

- Components must start with uppercase (lowercase = DOM elements)
- Expressions in \`{}\` are evaluated JavaScript
- \`className\` instead of \`class\`, \`htmlFor\` instead of \`for\`
- All tags must be closed
- Adjacent elements need a parent wrapper or Fragment

**Senior insight:** The new JSX transform (React 17+) eliminates the need for \`import React from 'react'\` in every file and produces slightly smaller bundles.

---

### Q: Explain the difference between controlled and uncontrolled components

**Answer:**

| Aspect | Controlled | Uncontrolled |
|--------|-----------|--------------|
| State location | React state | DOM (refs) |
| Data flow | React → DOM | DOM → React (on demand) |
| Validation | Real-time | On submit |
| Re-renders | On every change | Minimal |

**Controlled Component:**
\`\`\`jsx
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
\`\`\`

**Uncontrolled Component:**
\`\`\`jsx
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} defaultValue="initial" />;
}
\`\`\`

**When to Use Each:**

- **Controlled:** Form validation, conditional disabling, enforcing input format, dynamic inputs
- **Uncontrolled:** Simple forms, file inputs (always uncontrolled), integrating with non-React code, performance-critical forms with many fields

**Senior insight:** For complex forms, consider libraries like React Hook Form which use uncontrolled components internally for performance while providing a controlled-like API.

---

### Q: What are Pure Components and when should you use them?

**Answer:**

**PureComponent** (class) and **React.memo** (functional) implement shallow comparison of props to prevent unnecessary re-renders.

\`\`\`jsx
// Class component
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

// Functional equivalent
const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});

// With custom comparison
const MyComponent = React.memo(
  function MyComponent({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);
\`\`\`

**Shallow Comparison Behavior:**

\`\`\`jsx
// ✅ Will prevent re-render (primitives)
<Pure value={5} />

// ❌ Will RE-RENDER (new object reference each time)
<Pure style={{ color: 'red' }} />
<Pure onClick={() => handleClick()} />
<Pure items={items.filter(x => x.active)} />
\`\`\`

**When to Use:**

- Components that render often with same props
- Components with expensive render logic
- List items in large lists

**When NOT to Use:**

- Props change frequently anyway
- Props contain callbacks/objects created in parent render
- Component is already fast

**Senior insight:** Don't wrap everything in \`React.memo\`. Measure first. The comparison itself has a cost, and incorrect usage (with unstable references) gives false confidence while still re-rendering.

---

### Q: How does React's batching of state updates work?

**Answer:**

**Batching** groups multiple state updates into a single re-render for performance.

**React 17 and earlier - Limited batching:**
\`\`\`jsx
// ✅ Batched (inside React event handlers)
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Only ONE re-render
}

// ❌ NOT batched (async callbacks)
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // TWO re-renders in React 17!
}, 1000);
\`\`\`

**React 18+ - Automatic Batching:**
\`\`\`jsx
// ✅ ALL of these are now batched
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ONE re-render
}, 1000);

fetch('/api').then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ONE re-render
});
\`\`\`

**Opting Out of Batching:**
\`\`\`jsx
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });
  // DOM updated here
  flushSync(() => {
    setFlag(f => !f);
  });
  // DOM updated again
}
\`\`\`

**Senior insight:** React 18's automatic batching is one of the most impactful performance improvements. If migrating from 17, test async code paths for behavior changes.

---

### Q: What are React Portals and when would you use them?

**Answer:**

**Portals** render children into a DOM node outside the parent component's DOM hierarchy while preserving React's component tree (events, context, etc.).

\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Renders here in DOM
  );
}

// Usage
function App() {
  return (
    <div className="app"> {/* Has overflow: hidden */}
      <Modal isOpen={showModal}>
        <p>I escape overflow:hidden!</p>
      </Modal>
    </div>
  );
}
\`\`\`

**Use Cases:**

1. **Modals/Dialogs** - Escape parent \`overflow: hidden\` or \`z-index\` stacking
2. **Tooltips/Popovers** - Position relative to viewport, not parent
3. **Floating menus** - Dropdowns that need to overflow containers
4. **Full-screen overlays** - Loading screens, image lightboxes

**Key Behavior:**
- Events bubble through React tree (not DOM tree)
- Context providers work normally
- Refs work normally

**Senior insight:** Portals are essential for accessible modals. They solve CSS stacking context issues while maintaining React's event delegation and context. Always ensure the portal target exists before rendering.

---

### Q: What are Higher-Order Components (HOCs)? Provide examples

**Answer:**

A **HOC** is a function that takes a component and returns a new enhanced component. It's a pattern for reusing component logic.

\`\`\`jsx
// HOC Definition
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log('Component mounted:', WrappedComponent.name);
      return () => console.log('Component unmounted:', WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Usage
const EnhancedButton = withLogger(Button);

// Real-world example: withAuth HOC
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { user, loading } = useAuth();

    if (loading) return <Spinner />;
    if (!user) return <Navigate to="/login" />;

    return <WrappedComponent {...props} user={user} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
\`\`\`

**Common HOC Examples:**
- \`connect()\` from React-Redux
- \`withRouter()\` from React Router (deprecated)
- \`withStyles()\` from Material-UI

**HOC Best Practices:**

\`\`\`jsx
// ✅ Pass through unrelated props
return <WrappedComponent {...props} extraProp={value} />;

// ✅ Set displayName for debugging
WithAuth.displayName = \`WithAuth(\${WrappedComponent.displayName || WrappedComponent.name})\`;

// ✅ Copy static methods
hoistNonReactStatics(WithAuth, WrappedComponent);

// ✅ Forward refs
const WithAuth = React.forwardRef((props, ref) => {
  return <WrappedComponent ref={ref} {...props} />;
});
\`\`\`

**Senior insight:** HOCs were the primary pattern before Hooks. Today, custom hooks are preferred for logic reuse because they're simpler and don't create wrapper hell. HOCs are still useful for cross-cutting concerns that need to wrap JSX (error boundaries, providers).

---

### Q: How do you implement Error Boundaries?

**Answer:**

Error Boundaries catch JavaScript errors in child component tree, log them, and display fallback UI. They **must** be class components (no hook equivalent).

\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    logErrorToService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
}

// Granular boundaries
function Dashboard() {
  return (
    <div>
      <ErrorBoundary fallback={<WidgetError />}>
        <UnstableWidget />
      </ErrorBoundary>
      <StableWidget /> {/* Unaffected by errors above */}
    </div>
  );
}
\`\`\`

**What Error Boundaries DON'T Catch:**

- Event handlers (use try/catch)
- Async code (promises, setTimeout)
- Server-side rendering
- Errors in the error boundary itself

**For async errors:**
\`\`\`jsx
function useAsyncError() {
  const [, setError] = useState();
  return useCallback((e) => {
    setError(() => { throw e; }); // Triggers error boundary
  }, []);
}
\`\`\`

**Senior insight:** Use multiple granular error boundaries to isolate failures. A single error in a widget shouldn't crash the entire app. Libraries like \`react-error-boundary\` provide a more feature-rich implementation with reset capabilities.

---
`,Yg=`## 2. React Hooks

### Q: Explain the Rules of Hooks and why they exist

**Answer:**

**Rules:**

1. **Only call Hooks at the top level** - Not inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** - Function components or custom hooks

**Why These Rules Exist:**

React relies on **call order** to associate hook calls with their state. Hooks don't have names - React uses an internal index.

\`\`\`jsx
// ❌ BROKEN - Conditional hook
function Component({ isLoggedIn }) {
  if (isLoggedIn) {
    const [user, setUser] = useState(null); // Hook #1 sometimes
  }
  const [theme, setTheme] = useState('dark'); // Hook #1 or #2?
}

// React's internal tracking:
// Render 1: [user, theme] - indices 0, 1
// Render 2: [theme] - index 0 now points to wrong state!
\`\`\`

**How React Tracks Hooks Internally:**

\`\`\`jsx
// Simplified internal representation
let hookIndex = 0;
let hooks = [];

function useState(initial) {
  const index = hookIndex++;
  if (hooks[index] === undefined) {
    hooks[index] = initial;
  }
  const setState = (newValue) => {
    hooks[index] = newValue;
    rerender();
  };
  return [hooks[index], setState];
}
\`\`\`

**Senior insight:** The \`eslint-plugin-react-hooks\` plugin enforces these rules. Enable \`react-hooks/rules-of-hooks\` (error) and \`react-hooks/exhaustive-deps\` (warn) in your ESLint config. These catch subtle bugs at compile time.

---

### Q: What's the difference between useState and useRef?

**Answer:**

| Aspect | useState | useRef |
|--------|----------|--------|
| Re-renders | Triggers re-render | Does NOT trigger re-render |
| Value access | \`state\` | \`ref.current\` |
| Update method | \`setState(newValue)\` | \`ref.current = newValue\` |
| Persistence | Across renders | Across renders |

**When to Use Each:**

\`\`\`jsx
// useState: Value that affects UI
const [count, setCount] = useState(0);

// useRef: Value that persists but doesn't affect UI
const renderCount = useRef(0);
const intervalId = useRef(null);
const inputRef = useRef(null);

function Component() {
  renderCount.current++; // Doesn't cause re-render

  // Store interval ID without causing re-renders
  useEffect(() => {
    intervalId.current = setInterval(() => {}, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  // Access DOM element
  return <input ref={inputRef} />;
}
\`\`\`

**Common useRef Use Cases:**

1. **DOM access** - Focus, scroll, measure elements
2. **Storing mutable values** - Previous props/state, timers, subscriptions
3. **Instance variables** - Values that shouldn't trigger re-render
4. **Storing latest value in closures** - Avoid stale closure issues

\`\`\`jsx
// Pattern: Latest value ref (avoiding stale closures)
function useLatest(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

function Component({ onSave }) {
  const onSaveRef = useLatest(onSave);

  useEffect(() => {
    const interval = setInterval(() => {
      onSaveRef.current(); // Always latest, no dependency needed
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Empty deps is correct!
}
\`\`\`

**Senior insight:** Updating \`ref.current\` during render is fine but considered a side effect. The value is immediately available but won't trigger UI updates. Use refs for values you need to read in callbacks without adding them to dependency arrays.

---

### Q: Why can't you use async directly with useEffect?

**Answer:**

\`useEffect\` expects either \`undefined\` or a **cleanup function** as its return value. An async function always returns a Promise.

\`\`\`jsx
// ❌ WRONG - Returns a Promise
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []); // React warns: "useEffect function must return a cleanup function or nothing"

// ✅ CORRECT - Define async function inside
useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, []);

// ✅ CORRECT - IIFE pattern
useEffect(() => {
  (async () => {
    const data = await fetchData();
    setData(data);
  })();
}, []);
\`\`\`

**Handling Race Conditions:**

\`\`\`jsx
useEffect(() => {
  let cancelled = false;

  async function fetchData() {
    const response = await fetch(\`/api/user/\${userId}\`);
    const data = await response.json();

    if (!cancelled) {
      setUser(data); // Only update if not cancelled
    }
  }

  fetchData();

  return () => {
    cancelled = true; // Cleanup: ignore stale responses
  };
}, [userId]);
\`\`\`

**With AbortController:**

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchData() {
    try {
      const response = await fetch('/api/data', {
        signal: controller.signal
      });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    }
  }

  fetchData();

  return () => controller.abort();
}, []);
\`\`\`

**Senior insight:** For data fetching, consider React Query or SWR instead of raw useEffect. They handle caching, race conditions, loading states, and retries out of the box.

---

### Q: When does useEffect run vs useLayoutEffect?

**Answer:**

\`\`\`
Browser Paint Timeline:

  Render → DOM Update → useLayoutEffect → Paint → useEffect
                        (sync, blocking)          (async, non-blocking)
\`\`\`

| Aspect | useEffect | useLayoutEffect |
|--------|-----------|-----------------|
| Timing | After paint | Before paint |
| Blocking | No | Yes |
| Use case | Data fetching, subscriptions | DOM measurements, synchronous mutations |

**useEffect (Default - Use 99% of time):**
\`\`\`jsx
useEffect(() => {
  // Runs after browser paints
  // Good for: data fetching, subscriptions, logging
  fetchData();
}, []);
\`\`\`

**useLayoutEffect (Rare - DOM measurements):**
\`\`\`jsx
function Tooltip({ targetRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    // Runs BEFORE browser paints
    // No flash of incorrect position
    const rect = targetRef.current.getBoundingClientRect();
    setPosition({ top: rect.bottom, left: rect.left });
  }, [targetRef]);

  return <div style={position}>Tooltip</div>;
}
\`\`\`

**When useLayoutEffect is Required:**

1. **Measuring DOM** before showing (tooltips, popovers)
2. **Synchronous DOM mutations** (scroll position, focus)
3. **Preventing visual flicker** when state depends on DOM

\`\`\`jsx
// ❌ useEffect - User sees flash
useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);

// ✅ useLayoutEffect - Scroll happens before paint
useLayoutEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);
\`\`\`

**Senior insight:** \`useLayoutEffect\` fires synchronously and blocks the browser. Overusing it degrades performance. Stick with \`useEffect\` unless you see visual glitches. Also note: \`useLayoutEffect\` warns in SSR - use \`useEffect\` or check \`typeof window\`.

---

### Q: Explain useCallback vs useMemo - when to use each?

**Answer:**

Both are memoization hooks, but for different things:

| Hook | Memoizes | Returns |
|------|----------|---------|
| \`useMemo\` | Computed value | The value |
| \`useCallback\` | Function definition | The function |

\`\`\`jsx
// useMemo: Memoize expensive COMPUTATION
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// useCallback: Memoize FUNCTION REFERENCE
const handleClick = useCallback((id) => {
  setSelected(id);
}, []);

// They're equivalent:
useCallback(fn, deps)  ===  useMemo(() => fn, deps)
\`\`\`

**When to Use useCallback:**

\`\`\`jsx
// ✅ Passing callback to memoized child
const MemoizedList = React.memo(({ items, onItemClick }) => {
  return items.map(item => (
    <Item key={item.id} onClick={() => onItemClick(item.id)} />
  ));
});

function Parent() {
  const [items, setItems] = useState([]);

  // Without useCallback, MemoizedList re-renders every time
  const handleItemClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);

  return <MemoizedList items={items} onItemClick={handleItemClick} />;
}
\`\`\`

**When to Use useMemo:**

\`\`\`jsx
// ✅ Expensive computation
const stats = useMemo(() => {
  return {
    total: items.reduce((sum, i) => sum + i.value, 0),
    average: items.length ? total / items.length : 0,
    max: Math.max(...items.map(i => i.value))
  };
}, [items]);

// ✅ Referential equality for objects/arrays
const filters = useMemo(() => ({
  status: activeStatus,
  search: searchTerm
}), [activeStatus, searchTerm]);

// Now can use in dependency arrays without infinite loops
useEffect(() => {
  fetchData(filters);
}, [filters]);
\`\`\`

**When NOT to Use:**

\`\`\`jsx
// ❌ Premature optimization - simple computation
const doubled = useMemo(() => count * 2, [count]); // Just do: count * 2

// ❌ Not passed to memoized components
const handleClick = useCallback(() => {}, []); // Used only in <button>, not needed
\`\`\`

**Senior insight:** Profile before optimizing. The memoization itself has cost (comparing deps, storing values). Dan Abramov's rule: "useMemo/useCallback are for referential equality, not avoiding re-computation."

---

### Q: What are stale closures and how do you avoid them?

**Answer:**

A **stale closure** occurs when a function captures old values of variables from a previous render.

\`\`\`jsx
// ❌ Stale closure problem
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // Always logs 0! Stale closure.
      setCount(count + 1); // Always sets to 1!
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty deps = closure captures initial count (0)

  return <div>{count}</div>;
}
\`\`\`

**Solutions:**

**1. Functional State Updates:**
\`\`\`jsx
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1); // ✅ Always gets latest value
  }, 1000);
  return () => clearInterval(interval);
}, []);
\`\`\`

**2. Add to Dependency Array:**
\`\`\`jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log(count); // ✅ Fresh value
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, [count]); // ⚠️ But interval restarts on every count change
\`\`\`

**3. useRef for Latest Value:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count; // Always sync to latest

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(countRef.current); // ✅ Always latest
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
}
\`\`\`

**4. useEffectEvent (React experimental):**
\`\`\`jsx
// Future solution - captures latest without being a dependency
const onTick = useEffectEvent(() => {
  console.log(count); // Always latest, not a dependency
});

useEffect(() => {
  const interval = setInterval(onTick, 1000);
  return () => clearInterval(interval);
}, []); // No stale closure!
\`\`\`

**Senior insight:** Stale closures are the most common hooks bug. The \`exhaustive-deps\` ESLint rule catches most cases. When you need to break the rules, use refs deliberately and document why.

---

### Q: What is useTransition and when would you use it?

**Answer:**

\`useTransition\` marks state updates as **non-urgent**, allowing React to interrupt them for urgent updates (like typing).

\`\`\`jsx
function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;

    // Urgent: Update input immediately
    setQuery(value);

    // Non-urgent: Can be interrupted
    startTransition(() => {
      setResults(filterLargeList(value)); // Expensive operation
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <ResultsList results={results} />
    </div>
  );
}
\`\`\`

**How It Works:**

1. User types "a" → Input updates immediately
2. React starts filtering (non-urgent)
3. User types "b" → React **interrupts** filtering
4. Input updates to "ab" immediately
5. React restarts filtering with "ab"

**Use Cases:**

1. **Search/Filter** large datasets
2. **Tab switching** with heavy content
3. **Navigation** while keeping old page visible
4. **Any expensive render** triggered by user input

**vs useDeferredValue:**

\`\`\`jsx
// useTransition: You control when to wrap updates
const [isPending, startTransition] = useTransition();
startTransition(() => setQuery(value));

// useDeferredValue: Defer a VALUE
const deferredQuery = useDeferredValue(query);
// deferredQuery lags behind during typing
\`\`\`

**Senior insight:** \`useTransition\` is for when you have control over the state update. \`useDeferredValue\` is for when you receive a value (e.g., from props) and want to defer its effects. Both leverage Concurrent React.

---

### Q: Implement a custom useDebounce hook

**Answer:**

\`\`\`jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
\`\`\`

**Alternative: Debounced Callback**

\`\`\`jsx
import { useCallback, useRef } from 'react';

function useDebouncedCallback(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

// Usage
function Search() {
  const [results, setResults] = useState([]);

  const debouncedSearch = useDebouncedCallback((query) => {
    searchAPI(query).then(setResults);
  }, 300);

  return <input onChange={e => debouncedSearch(e.target.value)} />;
}
\`\`\`

**Senior insight:** The value-based \`useDebounce\` is simpler but creates a new state. The callback version is more flexible for async operations. Consider \`useDeferredValue\` for built-in React debouncing that integrates with Concurrent features.

---
`,Xg=`## 3. Performance Optimization

### Q: How do you identify performance bottlenecks in React?

**Answer:**

**1. React DevTools Profiler:**
\`\`\`
- Record a session
- Look for:
  - Components that render often
  - Long render times (>16ms blocks a frame)
  - Components re-rendering when they shouldn't
  - "Why did this render?" feature
\`\`\`

**2. Chrome DevTools Performance Tab:**
\`\`\`
- Record while interacting
- Look for:
  - Long tasks (red blocks)
  - JavaScript execution time
  - Layout thrashing
  - Forced reflows
\`\`\`

**3. Lighthouse / Web Vitals:**
\`\`\`jsx
import { onCLS, onFID, onLCP } from 'web-vitals';

onCLS(console.log);  // Cumulative Layout Shift
onFID(console.log);  // First Input Delay
onLCP(console.log);  // Largest Contentful Paint
\`\`\`

**4. Bundle Analysis:**
\`\`\`bash
# webpack-bundle-analyzer
npx webpack-bundle-analyzer stats.json

# Vite
npx vite-bundle-visualizer
\`\`\`

**5. Add Measurement in Code:**
\`\`\`jsx
function SlowComponent({ data }) {
  console.time('SlowComponent render');
  const result = expensiveOperation(data);
  console.timeEnd('SlowComponent render');

  return <div>{result}</div>;
}

// Or use Profiler component
<Profiler id="SlowComponent" onRender={(id, phase, duration) => {
  console.log(\`\${id} \${phase} took \${duration}ms\`);
}}>
  <SlowComponent />
</Profiler>
\`\`\`

**Common Bottlenecks:**

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Typing lag | Re-rendering large tree | useTransition, memo |
| List scroll jank | Too many DOM nodes | Virtualization |
| Slow initial load | Large bundle | Code splitting |
| Memory growth | Event listener leaks | Cleanup in useEffect |

**Senior insight:** Don't optimize blindly. Profile first, identify the specific bottleneck, then apply targeted fixes. Premature optimization often adds complexity without measurable benefit.

---

### Q: What causes unnecessary re-renders and how do you prevent them?

**Answer:**

**Causes of Re-renders:**

1. **Parent re-renders** (children re-render by default)
2. **State changes**
3. **Context value changes**
4. **Props change** (reference equality matters)

**Prevention Strategies:**

**1. Memoize Components:**
\`\`\`jsx
const MemoizedChild = React.memo(Child);

// With custom comparison
const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
\`\`\`

**2. Stabilize Object/Array Props:**
\`\`\`jsx
// ❌ New object every render
<Child style={{ color: 'red' }} />
<Child items={items.filter(x => x.active)} />
<Child onClick={() => handleClick(id)} />

// ✅ Stable references
const style = useMemo(() => ({ color: 'red' }), []);
const activeItems = useMemo(() => items.filter(x => x.active), [items]);
const handleClick = useCallback((id) => {}, []);

<Child style={style} />
<Child items={activeItems} />
<Child onClick={() => handleClick(id)} /> // Still new function, but cheap
\`\`\`

**3. Split Context:**
\`\`\`jsx
// ❌ All consumers re-render when ANY value changes
const AppContext = createContext({ user, theme, settings });

// ✅ Split into separate contexts
const UserContext = createContext(null);
const ThemeContext = createContext(null);
\`\`\`

**4. Move State Down:**
\`\`\`jsx
// ❌ State too high - entire tree re-renders
function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <Header />
      <HoverableItem hovered={hovered} onHover={setHovered} />
      <Footer />
    </div>
  );
}

// ✅ Colocate state with component that needs it
function App() {
  return (
    <div>
      <Header />
      <HoverableItem /> {/* State inside */}
      <Footer />
    </div>
  );
}
\`\`\`

**5. Children as Props Pattern:**
\`\`\`jsx
// ❌ Scroll handler causes children re-render
function ScrollContainer({ children }) {
  const [scrollTop, setScrollTop] = useState(0);
  return (
    <div onScroll={e => setScrollTop(e.target.scrollTop)}>
      {children} {/* Re-renders on scroll! */}
    </div>
  );
}

// ✅ Children created in parent, not affected
function Parent() {
  return (
    <ScrollContainer>
      <ExpensiveChild /> {/* Created here, stable reference */}
    </ScrollContainer>
  );
}
\`\`\`

**Senior insight:** React.memo is not free - it adds comparison overhead. Use it when: (1) component renders often with same props, (2) component is expensive to render, (3) parent re-renders frequently but child props don't change.

---

### Q: How would you render a list of 10,000 items efficiently?

**Answer:**

**The Problem:**
- 10,000 DOM nodes = slow initial render, high memory, laggy scroll
- Each item re-renders on list change

**Solution: Virtualization (Windowing)**

Only render items visible in the viewport + small buffer. As user scrolls, recycle DOM nodes.

\`\`\`jsx
// Using react-window (lightweight)
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      width={400}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}

// Variable height items
import { VariableSizeList } from 'react-window';

function VirtualList({ items }) {
  const getItemSize = (index) => items[index].height;

  return (
    <VariableSizeList
      height={600}
      width={400}
      itemCount={items.length}
      itemSize={getItemSize}
    >
      {Row}
    </VariableSizeList>
  );
}
\`\`\`

**With react-virtualized (full-featured):**
\`\`\`jsx
import { List, AutoSizer } from 'react-virtualized';

function VirtualList({ items }) {
  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      {items[index].name}
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={items.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  );
}
\`\`\`

**Additional Optimizations:**

1. **Memoize row component:**
\`\`\`jsx
const Row = React.memo(({ data, index, style }) => (
  <div style={style}>{data[index].name}</div>
));
\`\`\`

2. **Use itemData prop:**
\`\`\`jsx
<FixedSizeList itemData={items}>
  {Row}
</FixedSizeList>

// Row receives data prop instead of closure
const Row = ({ data, index, style }) => <div style={style}>{data[index].name}</div>;
\`\`\`

3. **Overscan for smooth scrolling:**
\`\`\`jsx
<FixedSizeList overscanCount={5}> {/* Render 5 extra items above/below */}
\`\`\`

**Senior insight:** Virtualization adds complexity - use it when you actually have performance issues with large lists. For < 100 items, regular rendering is usually fine. For 100-500, try pagination first. For 500+, virtualization is typically needed.

---

### Q: Explain state colocation - why keep state as local as possible?

**Answer:**

**State Colocation** means placing state as close as possible to where it's used.

**Benefits:**

1. **Performance** - Fewer components re-render
2. **Maintainability** - Easier to understand data flow
3. **Encapsulation** - Component is self-contained
4. **Testing** - Component can be tested in isolation

\`\`\`jsx
// ❌ State too high - App re-renders on every hover
function App() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div>
      <Header /> {/* Re-renders on hover */}
      <Sidebar /> {/* Re-renders on hover */}
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            isHovered={hoveredId === item.id}
            onHover={() => setHoveredId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}

// ✅ State colocated - Only ListItem re-renders
function ListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'highlighted' : ''}
    >
      {item.name}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <List>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
}
\`\`\`

**State Location Decision Tree:**

\`\`\`
Does multiple components need this state?
├── No → Keep in component (useState)
└── Yes → Does it need to go through many levels?
    ├── No → Lift to common parent
    └── Yes → Is it frequently updated?
        ├── No → Context is fine
        └── Yes → Consider state library or split context
\`\`\`

**Senior insight:** "Lift state up" is common advice, but "push state down" is equally important. Every time you lift state, you're trading encapsulation and performance for shared access. Start local, lift only when needed.

---
`,Kg=`## 4. State Management

### Q: When to use useState vs useReducer?

**Answer:**

| Use Case | useState | useReducer |
|----------|----------|------------|
| Simple values | ✅ | Overkill |
| Complex objects | ⚠️ | ✅ |
| Related state updates | ❌ | ✅ |
| State depends on prev state | ✅ (functional update) | ✅ |
| Testing state logic | Harder | Easy (pure function) |
| Next state depends on action type | ❌ | ✅ |

**useState - Simple cases:**
\`\`\`jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [items, setItems] = useState([]);
\`\`\`

**useReducer - Complex state logic:**
\`\`\`jsx
const initialState = {
  loading: false,
  error: null,
  data: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function DataFetcher() {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  async function fetchData() {
    dispatch({ type: 'FETCH_START' });
    try {
      const data = await api.fetch();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  return (
    <div>
      {state.loading && <Spinner />}
      {state.error && <Error message={state.error} />}
      {state.data && <DataView data={state.data} />}
    </div>
  );
}
\`\`\`

**Signals to switch to useReducer:**
- Multiple \`setState\` calls that should happen together
- State updates that depend on other state values
- Complex state shape with nested objects
- You want to test state transitions in isolation

**Senior insight:** You can combine both: use \`useReducer\` for complex state, \`useState\` for simple UI state in the same component. Also, \`useReducer\` is helpful when passing \`dispatch\` down (stable reference, unlike callbacks).

---

### Q: Explain Redux's three core principles

**Answer:**

**1. Single Source of Truth**
\`\`\`jsx
// Entire app state in one store
const store = {
  user: { id: 1, name: 'John' },
  posts: [...],
  ui: { theme: 'dark', sidebarOpen: true }
};

// Access from anywhere
const user = useSelector(state => state.user);
\`\`\`

**Why:** Predictable, debuggable, enables time-travel, easy to persist/hydrate.

**2. State is Read-Only**
\`\`\`jsx
// ❌ Never mutate directly
state.user.name = 'Jane';

// ✅ Only change via actions
dispatch({ type: 'UPDATE_USER', payload: { name: 'Jane' } });
\`\`\`

**Why:** All changes are explicit/trackable, enables middleware, prevents race conditions.

**3. Changes Made with Pure Functions (Reducers)**
\`\`\`jsx
// Reducers are pure: (state, action) => newState
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload }; // New object, no mutation
    default:
      return state;
  }
}

// Pure function properties:
// - Same inputs → same output
// - No side effects
// - No mutations
\`\`\`

**Why:** Predictable, testable, enables hot reloading, time-travel debugging.

**Redux Data Flow:**
\`\`\`
Action → Middleware → Reducer → Store → UI
   ↑                                   |
   └───────────────────────────────────┘
                dispatch()
\`\`\`

**Senior insight:** Redux's constraints feel restrictive but provide guarantees: any state change is traceable to an action, state is always consistent, and debugging is straightforward with Redux DevTools.

---

### Q: How do you handle async actions in Redux?

**Answer:**

Redux itself is synchronous. Async operations require middleware.

**1. Redux Thunk (Simple):**
\`\`\`jsx
// Thunk = function that returns a function
function fetchUser(userId) {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_START' });

    try {
      const response = await api.getUser(userId);
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
    }
  };
}

// Usage
dispatch(fetchUser(123));
\`\`\`

**2. Redux Toolkit's createAsyncThunk (Recommended):**
\`\`\`jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getUser(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
\`\`\`

**3. Redux Saga (Complex flows):**
\`\`\`jsx
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchUserSaga(action) {
  try {
    yield put({ type: 'FETCH_USER_START' });
    const user = yield call(api.getUser, action.payload);
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_ERROR', payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_USER_REQUEST', fetchUserSaga);
}
\`\`\`

**When to Use What:**

| Middleware | Use When |
|------------|----------|
| Thunk | Simple async, most projects |
| RTK Query | Data fetching (built-in caching) |
| Saga | Complex flows, cancellation, racing, debouncing |

**Senior insight:** For data fetching, consider RTK Query or React Query instead of manual async actions. They handle caching, deduplication, and loading states automatically.

---

### Q: What is the difference between server state and client state?

**Answer:**

| Aspect | Client State | Server State |
|--------|--------------|--------------|
| Source | Originates in browser | Originates on server |
| Ownership | Frontend controls | Backend controls |
| Examples | UI state, form input, selected tab | User data, posts, comments |
| Sync | Immediate | Async, potentially stale |
| Persistence | Session/localStorage | Database |

**The Problem with Mixing Them:**
\`\`\`jsx
// ❌ Treating server state like client state
const [users, setUsers] = useState([]);

useEffect(() => {
  fetchUsers().then(setUsers);
}, []);

// Problems:
// - No loading state
// - No error handling
// - No caching
// - No background refresh
// - No deduplication
// - No optimistic updates
\`\`\`

**Proper Separation:**

\`\`\`jsx
// ✅ Client state: useState/useReducer/Zustand
const [selectedUserId, setSelectedUserId] = useState(null);
const [sidebarOpen, setSidebarOpen] = useState(true);

// ✅ Server state: React Query/SWR/RTK Query
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000, // 5 minutes
});

// Combined
function UserList() {
  const { data: users } = useQuery(['users'], fetchUsers);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ul>
      {users?.map(user => (
        <li
          key={user.id}
          onClick={() => setSelectedId(user.id)}
          className={selectedId === user.id ? 'selected' : ''}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

**Server State Characteristics:**
- Cached and shared across components
- Can become stale (needs refetching)
- Requires loading/error states
- Requires background synchronization
- May need optimistic updates

**Senior insight:** Don't put server data in Redux just because you have Redux. Redux is great for complex client state but adds unnecessary boilerplate for server state. React Query/SWR handle server state concerns (caching, refetching, deduplication) out of the box.

---
`,Zg=`## 5. Architecture & Design Patterns

### Q: How do you structure a large-scale React application?

**Answer:**

**Feature-Based Structure (Recommended):**

\`\`\`
src/
├── app/                    # App-level setup
│   ├── App.tsx
│   ├── store.ts
│   └── routes.tsx
├── features/               # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── api/
│   │   │   └── authApi.ts
│   │   ├── store/
│   │   │   └── authSlice.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts        # Public API
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   └── dashboard/
├── shared/                 # Shared across features
│   ├── components/         # Button, Modal, Input
│   ├── hooks/              # useDebounce, useLocalStorage
│   ├── utils/              # formatDate, validators
│   └── types/              # Common types
├── assets/
└── styles/
\`\`\`

**Key Principles:**

1. **Feature Encapsulation:**
\`\`\`typescript
// features/users/index.ts - Public API
export { UserList } from './components/UserList';
export { useUser } from './hooks/useUser';
export type { User } from './types';

// Other features import from index, not internal paths
import { UserList, useUser } from '@/features/users';
\`\`\`

2. **Dependency Direction:**
\`\`\`
features/ → shared/   ✅
features/ → features/ ⚠️ (careful, use shared)
shared/ → features/   ❌
\`\`\`

3. **Co-location:**
- Tests next to components
- Types with their feature
- Styles with components (CSS modules/styled-components)

**Alternative: Feature-Sliced Design (FSD):**

\`\`\`
src/
├── app/          # App initialization
├── processes/    # Complex multi-page flows
├── pages/        # Page components
├── widgets/      # Page sections
├── features/     # User interactions
├── entities/     # Business entities
└── shared/       # Reusable utilities
\`\`\`

**Senior insight:** Start simple, restructure as needed. A feature folder is justified when it has 3+ components or is reused. Avoid premature abstraction - not everything needs to be in \`shared/\`.

---

### Q: What is Micro-Frontend architecture?

**Answer:**

**Micro-frontends** split a frontend monolith into independently deployable applications, each owned by different teams.

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    Container/Shell                       │
├──────────────┬──────────────┬──────────────────────────┤
│   Header MFE │   Product MFE  │      Cart MFE          │
│   (React)    │   (Vue)        │      (React)           │
│   Team A     │   Team B       │      Team C            │
└──────────────┴──────────────┴──────────────────────────┘
\`\`\`

**Implementation Approaches:**

**1. Module Federation (Webpack 5):**
\`\`\`javascript
// products/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/src/App.js
const ProductList = React.lazy(() => import('products/ProductList'));
\`\`\`

**2. Single-SPA (Framework agnostic):**
\`\`\`javascript
// root-config.js
registerApplication({
  name: '@org/products',
  app: () => System.import('@org/products'),
  activeWhen: ['/products'],
});
\`\`\`

**3. iframes (Simple but limited):**
\`\`\`jsx
<iframe src="https://products.myapp.com" />
\`\`\`

**When to Use Micro-frontends:**

✅ **Good fit:**
- Large teams (10+ frontend devs)
- Different release cycles per feature
- Teams with different tech preferences
- Legacy migration (gradual rewrite)

❌ **Avoid when:**
- Small team
- Single product focus
- Tight feature coupling
- Performance is critical

**Trade-offs:**

| Benefit | Cost |
|---------|------|
| Independent deployments | Increased complexity |
| Team autonomy | Potential inconsistent UX |
| Tech diversity | Larger bundle size |
| Isolated failures | Shared state challenges |

**Senior insight:** Micro-frontends solve organizational problems, not technical ones. If you don't have autonomous teams with clear boundaries, you'll get the complexity without the benefits. Start with a well-structured monolith.

---

### Q: When would you choose Redux over Context API?

**Answer:**

**Choose Context API when:**
\`\`\`jsx
// ✅ Theme/locale (changes rarely)
const ThemeContext = createContext('light');

// ✅ User authentication (changes rarely)
const AuthContext = createContext(null);

// ✅ Configuration
const ConfigContext = createContext(defaultConfig);

// ✅ Small apps with limited global state
\`\`\`

**Choose Redux when:**
\`\`\`jsx
// ✅ Complex state logic
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': ...
    case 'REMOVE_ITEM': ...
    case 'APPLY_DISCOUNT': ...
    case 'UPDATE_SHIPPING': ...
  }
};

// ✅ Frequent updates (Redux can optimize selectors)
const selectActiveItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => items.filter(i => i.status === filter)
);

// ✅ Need middleware
const store = configureStore({
  middleware: [thunk, logger, analytics],
});

// ✅ Time-travel debugging needed
// ✅ Large team needs predictable patterns
\`\`\`

**Comparison:**

| Aspect | Context | Redux |
|--------|---------|-------|
| Setup | Minimal | More boilerplate |
| Performance | Re-renders all consumers | Selective subscriptions |
| DevTools | Limited | Excellent |
| Middleware | No | Yes |
| Learning curve | Low | Medium |
| Best for | Infrequent updates | Complex/frequent updates |

**Context Performance Problem:**
\`\`\`jsx
// ❌ Every consumer re-renders on ANY change
const AppContext = createContext({ user, theme, cart, notifications });

function Cart() {
  const { cart } = useContext(AppContext);
  // Re-renders when theme changes!
}

// ✅ Redux - only re-renders when selected value changes
function Cart() {
  const cart = useSelector(state => state.cart);
  // Only re-renders when cart changes
}
\`\`\`

**Senior insight:** Context is for dependency injection (passing values down), not state management. For frequently updated global state with many consumers, Context causes unnecessary re-renders. Split contexts or use a state library.

---

### Q: How do you approach building a design system or component library?

**Answer:**

Building a design system requires balancing flexibility, consistency, and developer experience.

**Key Architecture Decisions:**

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                     Design System                                │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                    Design Tokens                         │  │
│  │   colors, spacing, typography, shadows, breakpoints     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                  Primitive Components                     │  │
│  │   Box, Text, Icon, Button, Input                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                  Composite Components                     │  │
│  │   Card, Modal, Dropdown, Table, Form                     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                    Page Templates                         │  │
│  │   Dashboard, Settings, Profile                           │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

**1. Design Tokens:**

\`\`\`typescript
// tokens/colors.ts
export const colors = {
  // Semantic colors
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  success: { /* ... */ },
  error: { /* ... */ },

  // Contextual
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    disabled: '#9ca3af',
  },
  background: {
    default: '#ffffff',
    subtle: '#f9fafb',
  },
};

// tokens/spacing.ts
export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  4: '1rem',
  8: '2rem',
  // ...
} as const;

// tokens/index.ts
export const tokens = {
  colors,
  spacing,
  typography,
  shadows,
  radii,
  breakpoints,
};
\`\`\`

**2. Component API Design:**

\`\`\`typescript
// Consistent prop patterns across all components
interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;  // For testing
}

// Polymorphic "as" prop for flexibility
interface BoxProps<T extends React.ElementType> extends CommonProps {
  as?: T;
  children?: React.ReactNode;
}

function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

// Usage
<Box>Default div</Box>
<Box as="section">Semantic section</Box>
<Box as="a" href="/home">Link</Box>
\`\`\`

**3. Variant-Based Components (CVA/Stitches Pattern):**

\`\`\`typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost: 'hover:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

function Button({
  variant,
  size,
  fullWidth,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth })}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  );
}
\`\`\`

**4. Theming:**

\`\`\`typescript
// ThemeProvider with CSS variables
function ThemeProvider({ theme, children }) {
  return (
    <div
      style={{
        '--color-primary': theme.colors.primary,
        '--color-background': theme.colors.background,
        '--spacing-unit': theme.spacing.unit,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// Components use CSS variables
const buttonStyles = {
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--spacing-unit)',
};
\`\`\`

**5. Documentation (Storybook):**

\`\`\`typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
\`\`\`

**6. Publishing:**

\`\`\`json
// package.json
{
  "name": "@company/design-system",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./tokens": {
      "import": "./dist/tokens.mjs"
    }
  },
  "sideEffects": false,
  "files": ["dist"]
}
\`\`\`

**Senior insight:** Key decisions: (1) CSS approach - CSS-in-JS vs Tailwind vs CSS Modules, (2) Flexibility vs consistency - how much customization to allow, (3) Accessibility from day one - don't bolt it on later, (4) Versioning strategy - semantic versioning, changelog. Start small (5-10 core components), get adoption, then expand based on actual needs.

---

### Q: Explain the Container/Presentational pattern and its modern alternatives

**Answer:**

**The Original Pattern (Pre-Hooks):**

Separate components into two types:
- **Container (Smart)**: Handles logic, state, data fetching
- **Presentational (Dumb)**: Renders UI based on props

\`\`\`jsx
// Container - handles logic
class UserListContainer extends React.Component {
  state = { users: [], loading: true };

  componentDidMount() {
    fetchUsers().then(users => this.setState({ users, loading: false }));
  }

  render() {
    return (
      <UserList
        users={this.state.users}
        loading={this.state.loading}
      />
    );
  }
}

// Presentational - pure rendering
function UserList({ users, loading }) {
  if (loading) return <Spinner />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Why It Was Useful:**
- Separation of concerns
- Presentational components easy to test
- Reusable UI components
- Easier reasoning about data flow

**Modern Alternative: Custom Hooks**

Hooks extract logic without wrapper components:

\`\`\`jsx
// Hook handles all logic
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}

// Component uses hook directly
function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Benefits of Hooks Over Containers:**
- No wrapper component = no extra nesting
- Logic is truly reusable (not tied to component hierarchy)
- Easier to compose multiple behaviors
- Better TypeScript support
- No render prop / HOC callback hell

**When Container Pattern Still Makes Sense:**

**1. Reusable presentation with different data sources:**

\`\`\`jsx
// Same UI, different data sources
function RecentOrdersList() {
  const { orders } = useRecentOrders();
  return <OrderList orders={orders} />;
}

function SearchResultsList({ query }) {
  const { orders } = useOrderSearch(query);
  return <OrderList orders={orders} />;
}

// OrderList is purely presentational
function OrderList({ orders }) {
  return (
    <ul>
      {orders.map(order => <OrderItem key={order.id} order={order} />)}
    </ul>
  );
}
\`\`\`

**2. Complex layout components:**

\`\`\`jsx
// Container handles business logic
function DashboardContainer() {
  const { user } = useAuth();
  const { metrics } = useMetrics();
  const { notifications } = useNotifications();

  return (
    <Dashboard
      user={user}
      metrics={metrics}
      notifications={notifications}
    />
  );
}

// Presentational handles layout
function Dashboard({ user, metrics, notifications }) {
  return (
    <div className="dashboard">
      <Header user={user} />
      <MetricsPanel metrics={metrics} />
      <NotificationList notifications={notifications} />
    </div>
  );
}
\`\`\`

**3. Storybook/testing isolation:**

\`\`\`jsx
// Presentational component is easy to test/story
// Button.stories.tsx
export const Loading = () => <Button loading>Submit</Button>;
export const Disabled = () => <Button disabled>Submit</Button>;
export const WithIcon = () => <Button icon={<CheckIcon />}>Submit</Button>;

// vs testing component with hooks requires mocking
\`\`\`

**Hybrid Approach (Most Common Today):**

\`\`\`jsx
// Colocated hook + component
function UserProfile({ userId }) {
  // Logic via hook
  const { user, loading, error, updateUser } = useUser(userId);

  // Handle states
  if (loading) return <ProfileSkeleton />;
  if (error) return <ErrorState error={error} />;

  // Render UI
  return (
    <div className="profile">
      <Avatar src={user.avatar} />
      <h1>{user.name}</h1>
      <EditButton onClick={() => updateUser({ /* ... */ })} />
    </div>
  );
}
\`\`\`

**Senior insight:** Don't religiously follow Container/Presentational - use it where separation adds value. Hooks eliminated most of its use cases. Still useful for: Storybook-first development, highly reusable UI components, and complex components with many data sources. The goal is testability and reusability, not rigid patterns.

---

### Q: How do you handle feature flags in React applications?

**Answer:**

Feature flags enable controlled rollouts, A/B testing, and kill switches without deployments.

**Basic Implementation:**

\`\`\`typescript
// types
interface FeatureFlags {
  newCheckoutFlow: boolean;
  darkMode: boolean;
  betaFeatures: boolean;
  experimentalEditor: boolean;
}

// Context-based feature flags
const FeatureFlagContext = createContext<FeatureFlags | null>(null);

function FeatureFlagProvider({ children }) {
  const [flags, setFlags] = useState<FeatureFlags | null>(null);

  useEffect(() => {
    // Fetch from server on mount
    fetchFeatureFlags().then(setFlags);
  }, []);

  if (!flags) return <Spinner />; // Or use default flags

  return (
    <FeatureFlagContext.Provider value={flags}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

function useFeatureFlag<K extends keyof FeatureFlags>(
  flag: K
): FeatureFlags[K] {
  const flags = useContext(FeatureFlagContext);
  if (!flags) {
    throw new Error('useFeatureFlag must be within FeatureFlagProvider');
  }
  return flags[flag];
}
\`\`\`

**Usage Patterns:**

\`\`\`jsx
// 1. Conditional rendering
function Checkout() {
  const newCheckoutFlow = useFeatureFlag('newCheckoutFlow');

  if (newCheckoutFlow) {
    return <NewCheckoutFlow />;
  }
  return <LegacyCheckout />;
}

// 2. Feature wrapper component
function Feature({ flag, children, fallback = null }) {
  const isEnabled = useFeatureFlag(flag);
  return isEnabled ? children : fallback;
}

function App() {
  return (
    <Feature flag="betaFeatures" fallback={<ComingSoon />}>
      <BetaDashboard />
    </Feature>
  );
}

// 3. Hook for feature-dependent logic
function useEditorConfig() {
  const experimentalEditor = useFeatureFlag('experimentalEditor');

  return {
    plugins: experimentalEditor
      ? [...standardPlugins, ...experimentalPlugins]
      : standardPlugins,
    theme: experimentalEditor ? 'modern' : 'classic',
  };
}
\`\`\`

**Server-Side Integration (LaunchDarkly, Split.io):**

\`\`\`typescript
// Initialize with user context
import { LDClient, LDUser } from 'launchdarkly-js-client-sdk';

function FeatureFlagProvider({ children }) {
  const { user } = useAuth();
  const [client, setClient] = useState<LDClient | null>(null);
  const [flags, setFlags] = useState<Record<string, any>>({});

  useEffect(() => {
    const ldUser: LDUser = {
      key: user?.id ?? 'anonymous',
      email: user?.email,
      custom: {
        plan: user?.subscription?.plan,
        company: user?.company?.id,
      },
    };

    const ldClient = LDClient.initialize(
      process.env.LAUNCHDARKLY_CLIENT_ID!,
      ldUser
    );

    ldClient.on('ready', () => {
      setFlags(ldClient.allFlags());
    });

    ldClient.on('change', () => {
      setFlags(ldClient.allFlags());
    });

    setClient(ldClient);

    return () => ldClient.close();
  }, [user]);

  // ...
}
\`\`\`

**Gradual Rollout Patterns:**

\`\`\`typescript
// Percentage-based rollout
function shouldShowFeature(userId: string, percentage: number): boolean {
  // Consistent hashing ensures same user always gets same result
  const hash = hashCode(userId);
  return (hash % 100) < percentage;
}

// Cohort-based
interface FeatureFlagConfig {
  enabled: boolean;
  percentage: number;
  allowList: string[];  // User IDs always enabled
  denyList: string[];   // User IDs always disabled
  rules: FlagRule[];    // Custom targeting rules
}

function evaluateFlag(flag: FeatureFlagConfig, user: User): boolean {
  if (flag.denyList.includes(user.id)) return false;
  if (flag.allowList.includes(user.id)) return true;

  // Evaluate custom rules
  for (const rule of flag.rules) {
    if (matchesRule(rule, user)) {
      return rule.enabled;
    }
  }

  // Fall back to percentage rollout
  return shouldShowFeature(user.id, flag.percentage);
}
\`\`\`

**Testing with Feature Flags:**

\`\`\`jsx
// Test wrapper
function renderWithFlags(ui, flags = {}) {
  const defaultFlags: FeatureFlags = {
    newCheckoutFlow: false,
    darkMode: false,
    betaFeatures: false,
    experimentalEditor: false,
  };

  return render(
    <FeatureFlagContext.Provider value={{ ...defaultFlags, ...flags }}>
      {ui}
    </FeatureFlagContext.Provider>
  );
}

// Tests
test('shows new checkout when flag enabled', () => {
  renderWithFlags(<Checkout />, { newCheckoutFlow: true });
  expect(screen.getByText('New Checkout')).toBeInTheDocument();
});

test('shows legacy checkout when flag disabled', () => {
  renderWithFlags(<Checkout />, { newCheckoutFlow: false });
  expect(screen.getByText('Legacy Checkout')).toBeInTheDocument();
});
\`\`\`

**SSR Considerations:**

\`\`\`typescript
// Next.js - pass flags through server
export async function getServerSideProps(context) {
  const flags = await fetchFeatureFlags(context.req);

  return {
    props: {
      featureFlags: flags,
    },
  };
}

// App Router - Server Component
async function Page() {
  const flags = await getFeatureFlags();

  return (
    <FeatureFlagProvider initialFlags={flags}>
      <Content />
    </FeatureFlagProvider>
  );
}
\`\`\`

**Cleanup Strategy:**

\`\`\`typescript
// Track flag usage for cleanup
const usedFlags = new Set<string>();

function useFeatureFlag(flag: keyof FeatureFlags) {
  usedFlags.add(flag);  // Track usage

  // In production, report unused flags for cleanup
  useEffect(() => {
    reportFlagUsage(flag);
  }, [flag]);

  // ...
}

// CI check for stale flags
// scripts/check-stale-flags.js
const declaredFlags = Object.keys(flagConfig);
const usedFlags = findFlagsInCode('./src');
const staleFlags = declaredFlags.filter(f => !usedFlags.has(f));

if (staleFlags.length > 0) {
  console.warn('Stale flags:', staleFlags);
  process.exit(1);
}
\`\`\`

**Senior insight:** Key practices: (1) default to "off" for safety, (2) keep flag scope small (one feature per flag), (3) set expiration dates and clean up, (4) log flag evaluations for debugging, (5) test both on AND off states. Avoid flag debt - too many flags becomes unmaintainable. Services like LaunchDarkly handle complexity (targeting, analytics, audit logs) better than DIY for enterprise use.

---
`,Wg=`## 6. System Design

### Q: Design an infinite scroll feed

**Answer:**

**Requirements Clarification:**
- Load more items when user scrolls near bottom
- Handle loading states
- Support variable item heights?
- Need virtualization for 1000s of items?
- Preserve scroll position on back navigation?

**Architecture:**

\`\`\`
┌─────────────────────────────────────────┐
│               FeedContainer              │
│  ┌─────────────────────────────────┐   │
│  │    VirtualizedList (optional)    │   │
│  │  ┌─────────────────────────────┐│   │
│  │  │       FeedItem              ││   │
│  │  └─────────────────────────────┘│   │
│  │  ┌─────────────────────────────┐│   │
│  │  │       FeedItem              ││   │
│  │  └─────────────────────────────┘│   │
│  │           ...                    │   │
│  │  ┌─────────────────────────────┐│   │
│  │  │  IntersectionObserver       ││   │←── Triggers load
│  │  │     (LoadMoreTrigger)       ││   │
│  │  └─────────────────────────────┘│   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
\`\`\`

**Implementation:**

\`\`\`jsx
// hooks/useInfiniteScroll.js
function useInfiniteScroll({ onLoadMore, hasMore, isLoading }) {
  const observerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (triggerRef.current) {
      observerRef.current.observe(triggerRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [onLoadMore, hasMore, isLoading]);

  return triggerRef;
}

// components/Feed.jsx
function Feed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: ({ pageParam = null }) => fetchFeedPage(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 5 * 60 * 1000,
  });

  const triggerRef = useInfiniteScroll({
    onLoadMore: fetchNextPage,
    hasMore: hasNextPage,
    isLoading: isFetchingNextPage,
  });

  if (isLoading) return <FeedSkeleton />;
  if (error) return <ErrorState onRetry={refetch} />;

  const items = data.pages.flatMap(page => page.items);

  return (
    <div className="feed">
      {items.map(item => (
        <FeedItem key={item.id} item={item} />
      ))}

      {/* Invisible trigger element */}
      <div ref={triggerRef} style={{ height: 1 }} />

      {isFetchingNextPage && <LoadingSpinner />}
      {!hasNextPage && <EndOfFeed />}
    </div>
  );
}
\`\`\`

**Data Model:**
\`\`\`typescript
interface FeedPage {
  items: FeedItem[];
  nextCursor: string | null;
}

interface FeedItem {
  id: string;
  type: 'post' | 'ad' | 'suggestion';
  content: string;
  author: User;
  createdAt: string;
  metrics: { likes: number; comments: number };
}
\`\`\`

**Optimizations:**

1. **Cursor-based pagination** (not offset):
\`\`\`jsx
// ✅ Cursor-based - stable with new items
GET /feed?cursor=abc123&limit=20

// ❌ Offset-based - duplicates when new items added
GET /feed?offset=20&limit=20
\`\`\`

2. **Virtualization for large feeds:**
\`\`\`jsx
import { Virtuoso } from 'react-virtuoso';

<Virtuoso
  data={items}
  endReached={fetchNextPage}
  itemContent={(index, item) => <FeedItem item={item} />}
/>
\`\`\`

3. **Preserve scroll on navigation:**
\`\`\`jsx
// Cache scroll position
useEffect(() => {
  return () => {
    sessionStorage.setItem('feedScroll', window.scrollY);
  };
}, []);

// Restore on mount
useLayoutEffect(() => {
  const saved = sessionStorage.getItem('feedScroll');
  if (saved) window.scrollTo(0, parseInt(saved));
}, []);
\`\`\`

**Senior insight:** Key decisions: cursor vs offset pagination (cursor handles insertions), when to virtualize (1000+ items), caching strategy (staleTime), and whether to cache pages or flatten items.

---

### Q: How do you handle optimistic updates?

**Answer:**

**Optimistic updates** show the expected result immediately while the actual request happens in the background.

**With React Query:**

\`\`\`jsx
function useToggleLike(postId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.toggleLike(postId),

    // Optimistically update before request completes
    onMutate: async () => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      // Snapshot previous value
      const previousPost = queryClient.getQueryData(['post', postId]);

      // Optimistically update
      queryClient.setQueryData(['post', postId], (old) => ({
        ...old,
        liked: !old.liked,
        likeCount: old.liked ? old.likeCount - 1 : old.likeCount + 1,
      }));

      // Return snapshot for rollback
      return { previousPost };
    },

    // Rollback on error
    onError: (err, variables, context) => {
      queryClient.setQueryData(['post', postId], context.previousPost);
      toast.error('Failed to update like');
    },

    // Refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });
}

// Usage
function LikeButton({ post }) {
  const toggleLike = useToggleLike(post.id);

  return (
    <button
      onClick={() => toggleLike.mutate()}
      disabled={toggleLike.isPending}
    >
      {post.liked ? '❤️' : '🤍'} {post.likeCount}
    </button>
  );
}
\`\`\`

**With useOptimistic (React 19):**

\`\`\`jsx
function LikeButton({ post, onLike }) {
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(
    post.liked,
    (current, newValue) => newValue
  );

  async function handleClick() {
    setOptimisticLiked(!optimisticLiked); // Immediate UI update
    await onLike(post.id); // Actual request
  }

  return (
    <button onClick={handleClick}>
      {optimisticLiked ? '❤️' : '🤍'}
    </button>
  );
}
\`\`\`

**Pattern for Complex Updates:**

\`\`\`jsx
// List operations (add/remove/reorder)
onMutate: async (newItem) => {
  await queryClient.cancelQueries({ queryKey: ['items'] });

  const previous = queryClient.getQueryData(['items']);

  queryClient.setQueryData(['items'], (old) => [...old, {
    ...newItem,
    id: 'temp-' + Date.now(), // Temporary ID
    isPending: true, // Visual indicator
  }]);

  return { previous };
},

onSuccess: (savedItem, variables, context) => {
  // Replace temp item with real item
  queryClient.setQueryData(['items'], (old) =>
    old.map(item =>
      item.id.startsWith('temp-') ? savedItem : item
    )
  );
},
\`\`\`

**When NOT to Use Optimistic Updates:**

- Payment/financial transactions
- Irreversible operations
- Operations that frequently fail
- When server response has critical data

**Senior insight:** Optimistic updates improve perceived performance but add complexity. Use them for low-risk, frequent operations (likes, bookmarks). Always implement rollback and consider showing a subtle pending indicator.

---

### Q: Design an autocomplete/typeahead search component

**Answer:**

**Requirements Clarification:**
- Client-side filtering vs server-side search?
- How large is the dataset?
- Keyboard navigation required?
- Multi-select or single select?
- Show recent searches?
- Accessibility requirements?

**Architecture:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    AutocompleteSearch                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  SearchInput (combobox role)                          │   │
│  │  [🔍 Search products...                         ▼]   │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  SuggestionsList (listbox role)                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ 💡 Recent: "laptop", "phone"                │    │   │
│  │  ├─────────────────────────────────────────────┤    │   │
│  │  │ ▸ Product A (highlighted)                    │    │   │
│  │  │   Product B                                  │    │   │
│  │  │   Product C                                  │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Implementation:**

\`\`\`jsx
function Autocomplete({ onSelect, fetchSuggestions }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();

  // Debounced search
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    async function search() {
      setIsLoading(true);
      try {
        const results = await fetchSuggestions(debouncedQuery, {
          signal: controller.signal,
        });
        setSuggestions(results);
        setIsOpen(true);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    search();
    return () => controller.abort();
  }, [debouncedQuery, fetchSuggestions]);

  // Keyboard navigation
  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) =>
          i < suggestions.length - 1 ? i + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) =>
          i > 0 ? i - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0) {
          handleSelect(suggestions[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.focus();
        break;
    }
  }

  function handleSelect(item) {
    onSelect(item);
    setQuery(item.label);
    setIsOpen(false);
    saveToRecentSearches(item);
  }

  return (
    <div className="autocomplete" onKeyDown={handleKeyDown}>
      <input
        ref={inputRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-activedescendant={
          activeIndex >= 0 ? \`option-\${activeIndex}\` : undefined
        }
        aria-autocomplete="list"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(-1);
        }}
        onFocus={() => suggestions.length > 0 && setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder="Search..."
      />

      {isLoading && <Spinner className="input-spinner" />}

      {isOpen && suggestions.length > 0 && (
        <ul ref={listRef} id={listId} role="listbox">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              id={\`option-\${index}\`}
              role="option"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? 'highlighted' : ''}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSelect(item)}
            >
              <HighlightMatch text={item.label} query={query} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

**Highlight Matching Text:**

\`\`\`jsx
function HighlightMatch({ text, query }) {
  if (!query) return text;

  const regex = new RegExp(\`(\${escapeRegex(query)})\`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}
\`\`\`

**Caching Recent Searches:**

\`\`\`jsx
function useRecentSearches(key = 'recent-searches', maxItems = 5) {
  const [recent, setRecent] = useLocalStorage(key, []);

  const add = useCallback((item) => {
    setRecent((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id);
      return [item, ...filtered].slice(0, maxItems);
    });
  }, [maxItems]);

  const clear = useCallback(() => setRecent([]), []);

  return { recent, add, clear };
}
\`\`\`

**Performance Optimizations:**

1. **Request cancellation** - Abort stale requests
2. **Debouncing** - Don't search on every keystroke
3. **Caching** - Use React Query with staleTime
4. **Minimum query length** - Don't search for 1-2 chars

**Senior insight:** Key decisions include debounce timing (150-300ms), whether to show suggestions on focus (recent searches), and accessibility (proper ARIA roles). Consider libraries like Downshift or React-Select for production - they handle dozens of edge cases. For server-side, implement prefix-based indexing (trie) or use dedicated search services (Algolia, Elasticsearch).

---

### Q: Design a toast notification system

**Answer:**

**Requirements:**
- Queue multiple notifications
- Auto-dismiss with configurable duration
- Manual dismiss capability
- Different types (success, error, warning, info)
- Accessible announcements
- Stacking/positioning

**Architecture:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                       Application                            │
│                                                             │
│    ┌─────────────────────────────────────────────────┐     │
│    │              ToastProvider                        │     │
│    │   (Context + State Management)                   │     │
│    │                                                   │     │
│    │    ┌───────────────────────────────────────┐    │     │
│    │    │         ToastContainer (Portal)        │    │     │
│    │    │   ┌─────────────────────────────────┐ │    │     │
│    │    │   │ ✓ Item saved        [×]        │ │    │     │
│    │    │   └─────────────────────────────────┘ │    │     │
│    │    │   ┌─────────────────────────────────┐ │    │     │
│    │    │   │ ⚠ Connection lost   [×]        │ │    │     │
│    │    │   └─────────────────────────────────┘ │    │     │
│    │    └───────────────────────────────────────┘    │     │
│    └─────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Implementation:**

\`\`\`jsx
// types
interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  dismissible?: boolean;
}

// Context
const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID();
    const newToast = {
      id,
      duration: 5000,
      dismissible: true,
      ...toast,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto-dismiss
    if (newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Convenience methods
  const toast = useMemo(() => ({
    success: (message, options) =>
      addToast({ type: 'success', message, ...options }),
    error: (message, options) =>
      addToast({ type: 'error', message, duration: 0, ...options }),
    warning: (message, options) =>
      addToast({ type: 'warning', message, ...options }),
    info: (message, options) =>
      addToast({ type: 'info', message, ...options }),
    dismiss: removeToast,
    dismissAll: () => setToasts([]),
  }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}

// Hook
function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
\`\`\`

**Toast Container with Portal:**

\`\`\`jsx
function ToastContainer({ toasts, onDismiss }) {
  return createPortal(
    <div
      className="toast-container"
      role="region"
      aria-label="Notifications"
    >
      {/* Live region for screen readers */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {toasts.length > 0 && toasts[toasts.length - 1].message}
      </div>

      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onDismiss={() => onDismiss(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
\`\`\`

**Individual Toast with Animation:**

\`\`\`jsx
function Toast({ toast, onDismiss }) {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (toast.duration <= 0 || isPaused) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / toast.duration) * 100);
      setProgress(remaining);
    }, 50);

    return () => clearInterval(interval);
  }, [toast.duration, isPaused]);

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100 }}
      className={\`toast toast-\${toast.type}\`}
      role="alert"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span className="toast-icon">{icons[toast.type]}</span>
      <span className="toast-message">{toast.message}</span>

      {toast.dismissible && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="toast-close"
        >
          ×
        </button>
      )}

      {toast.duration > 0 && (
        <div
          className="toast-progress"
          style={{ width: \`\${progress}%\` }}
        />
      )}
    </motion.div>
  );
}
\`\`\`

**Usage:**

\`\`\`jsx
function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  async function handleSave() {
    try {
      await saveData();
      toast.success('Changes saved successfully');
    } catch (error) {
      toast.error(\`Failed to save: \${error.message}\`);
    }
  }

  return <button onClick={handleSave}>Save</button>;
}
\`\`\`

**Senior insight:** Key decisions include max visible toasts (usually 3-5), positioning (top-right common, but bottom-left better for mobile), pause-on-hover behavior, and whether errors should auto-dismiss (usually not). Consider libraries like react-hot-toast or Sonner for production - they're well-tested and accessible out of the box.

---

### Q: Design a form builder with dynamic fields

**Answer:**

**Requirements:**
- Define forms via JSON schema
- Support various field types (text, select, checkbox, etc.)
- Conditional field visibility
- Nested/repeatable fields (arrays)
- Validation
- Custom field components

**Architecture:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      FormBuilder                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    FormProvider                       │   │
│  │  (react-hook-form context)                           │   │
│  │                                                       │   │
│  │    ┌─────────────────────────────────────────┐      │   │
│  │    │           DynamicField                    │      │   │
│  │    │  ┌─────────────────────────────────┐    │      │   │
│  │    │  │ TextField / SelectField / etc    │    │      │   │
│  │    │  └─────────────────────────────────┘    │      │   │
│  │    └─────────────────────────────────────────┘      │   │
│  │                                                       │   │
│  │    ┌─────────────────────────────────────────┐      │   │
│  │    │           ArrayField                      │      │   │
│  │    │  ┌───────────────────────────────────┐  │      │   │
│  │    │  │ [+] Add Item  [DynamicField...]   │  │      │   │
│  │    │  └───────────────────────────────────┘  │      │   │
│  │    └─────────────────────────────────────────┘      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Schema Definition:**

\`\`\`typescript
interface FieldSchema {
  name: string;
  type: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'array';
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[]; // For select
  fields?: FieldSchema[]; // For nested/array fields
  condition?: {
    field: string;
    value: any;
    operator: 'equals' | 'notEquals' | 'contains';
  };
}

// Example schema
const formSchema: FieldSchema[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    required: true,
  },
  {
    name: 'employmentType',
    type: 'select',
    label: 'Employment Type',
    options: [
      { value: 'fullTime', label: 'Full Time' },
      { value: 'contractor', label: 'Contractor' },
    ],
  },
  {
    name: 'companyName',
    type: 'text',
    label: 'Company Name',
    condition: {
      field: 'employmentType',
      value: 'contractor',
      operator: 'equals',
    },
  },
  {
    name: 'skills',
    type: 'array',
    label: 'Skills',
    fields: [
      { name: 'skillName', type: 'text', label: 'Skill' },
      { name: 'level', type: 'select', label: 'Level', options: [
        { value: 'beginner', label: 'Beginner' },
        { value: 'expert', label: 'Expert' },
      ]},
    ],
  },
];
\`\`\`

**Implementation:**

\`\`\`jsx
import { useForm, FormProvider, useFormContext, useFieldArray } from 'react-hook-form';

function FormBuilder({ schema, onSubmit, defaultValues }) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {schema.map((field) => (
          <DynamicField key={field.name} field={field} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

function DynamicField({ field, parentName = '' }) {
  const { watch } = useFormContext();
  const fullName = parentName ? \`\${parentName}.\${field.name}\` : field.name;

  // Check conditional visibility
  if (field.condition) {
    const watchedValue = watch(field.condition.field);
    const isVisible = evaluateCondition(field.condition, watchedValue);
    if (!isVisible) return null;
  }

  switch (field.type) {
    case 'text':
    case 'email':
    case 'number':
      return <TextField field={field} name={fullName} />;
    case 'select':
      return <SelectField field={field} name={fullName} />;
    case 'checkbox':
      return <CheckboxField field={field} name={fullName} />;
    case 'array':
      return <ArrayField field={field} name={fullName} />;
    default:
      return null;
  }
}

function TextField({ field, name }) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="field">
      <label htmlFor={name}>{field.label}</label>
      <input
        id={name}
        type={field.type}
        {...register(name, {
          required: field.required && 'This field is required',
          pattern: field.validation?.pattern && {
            value: new RegExp(field.validation.pattern),
            message: field.validation.message || 'Invalid format',
          },
        })}
        placeholder={field.placeholder}
      />
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}

function SelectField({ field, name }) {
  const { register } = useFormContext();

  return (
    <div className="field">
      <label htmlFor={name}>{field.label}</label>
      <select id={name} {...register(name, { required: field.required })}>
        <option value="">Select...</option>
        {field.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ArrayField({ field, name }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="array-field">
      <label>{field.label}</label>
      {fields.map((item, index) => (
        <div key={item.id} className="array-item">
          {field.fields?.map((subField) => (
            <DynamicField
              key={subField.name}
              field={subField}
              parentName={\`\${name}.\${index}\`}
            />
          ))}
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({})}>
        Add {field.label}
      </button>
    </div>
  );
}

function evaluateCondition(condition, value) {
  switch (condition.operator) {
    case 'equals':
      return value === condition.value;
    case 'notEquals':
      return value !== condition.value;
    case 'contains':
      return Array.isArray(value) && value.includes(condition.value);
    default:
      return true;
  }
}
\`\`\`

**Usage:**

\`\`\`jsx
function RegistrationForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <FormBuilder
      schema={formSchema}
      onSubmit={handleSubmit}
      defaultValues={{ employmentType: 'fullTime', skills: [] }}
    />
  );
}
\`\`\`

**Senior insight:** JSON schema-driven forms are powerful but add complexity. Use them when: forms are defined by non-developers, forms vary per customer, or you need form versioning. For simpler cases, just write the form directly. Consider JSON Schema (draft-07) or Zod schemas for standard validation. Libraries like react-jsonschema-form handle much of this out of the box.

---

### Q: Design a dashboard with real-time data updates

**Answer:**

**Requirements:**
- Multiple widgets displaying different data
- Real-time updates (WebSocket or polling)
- Handle connection loss gracefully
- Efficient updates (minimize re-renders)
- User-configurable refresh rates

**Architecture:**

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                          Dashboard                                │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    ConnectionStatus                          │ │
│  │   🟢 Connected | Last update: 2s ago | [Pause] [Refresh]   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │   MetricsWidget     │  │   ChartWidget       │              │
│  │   Active Users: 142 │  │   📈 [Live Graph]   │              │
│  │   Revenue: $5,432   │  │                     │              │
│  └─────────────────────┘  └─────────────────────┘              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    ActivityFeed                          │   │
│  │   • User A completed purchase ($99)                     │   │
│  │   • User B signed up                                    │   │
│  │   • User C viewed product                               │   │
│  └─────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

**WebSocket Connection Hook:**

\`\`\`jsx
function useWebSocket(url) {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const reconnectAttempts = useRef(0);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setIsConnected(true);
      reconnectAttempts.current = 0;
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLastMessage(data);
    };

    ws.onclose = () => {
      setIsConnected(false);
      // Exponential backoff reconnection
      const delay = Math.min(1000 * 2 ** reconnectAttempts.current, 30000);
      reconnectAttempts.current++;

      reconnectTimeoutRef.current = setTimeout(connect, delay);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      ws.close();
    };

    wsRef.current = ws;
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((message) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  }, []);

  return { isConnected, lastMessage, send };
}
\`\`\`

**Real-Time Data Context:**

\`\`\`jsx
const DashboardDataContext = createContext(null);

function DashboardDataProvider({ children }) {
  const [metrics, setMetrics] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const { isConnected, lastMessage } = useWebSocket(
    'wss://api.example.com/dashboard'
  );

  // Process incoming messages
  useEffect(() => {
    if (!lastMessage || isPaused) return;

    switch (lastMessage.type) {
      case 'METRICS_UPDATE':
        setMetrics(lastMessage.payload);
        break;
      case 'ACTIVITY':
        setActivities((prev) => [lastMessage.payload, ...prev].slice(0, 50));
        break;
      case 'FULL_STATE':
        setMetrics(lastMessage.payload.metrics);
        setActivities(lastMessage.payload.activities);
        break;
    }
  }, [lastMessage, isPaused]);

  const value = useMemo(() => ({
    metrics,
    activities,
    isConnected,
    isPaused,
    togglePause: () => setIsPaused((p) => !p),
  }), [metrics, activities, isConnected, isPaused]);

  return (
    <DashboardDataContext.Provider value={value}>
      {children}
    </DashboardDataContext.Provider>
  );
}
\`\`\`

**Optimized Widget Components:**

\`\`\`jsx
// Memoized widget - only re-renders when its specific data changes
const MetricsWidget = memo(function MetricsWidget() {
  const { metrics } = useContext(DashboardDataContext);

  if (!metrics) return <WidgetSkeleton />;

  return (
    <div className="widget metrics-widget">
      <h3>Live Metrics</h3>
      <div className="metric">
        <span className="label">Active Users</span>
        <AnimatedNumber value={metrics.activeUsers} />
      </div>
      <div className="metric">
        <span className="label">Revenue</span>
        <AnimatedNumber value={metrics.revenue} prefix="$" />
      </div>
    </div>
  );
});

// Activity feed with virtualization for performance
function ActivityFeed() {
  const { activities } = useContext(DashboardDataContext);

  return (
    <div className="widget activity-feed">
      <h3>Activity Feed</h3>
      <Virtuoso
        data={activities}
        itemContent={(index, activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        )}
        style={{ height: 300 }}
      />
    </div>
  );
}

// Animated number for smooth transitions
function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 500;
    const start = displayValue;
    const diff = value - start;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setDisplayValue(Math.round(start + diff * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="animated-number">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}
\`\`\`

**Polling Fallback:**

\`\`\`jsx
// For environments where WebSocket isn't available
function useDashboardPolling(interval = 5000) {
  const { data, error, refetch } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    refetchInterval: interval,
    refetchIntervalInBackground: false, // Pause when tab not visible
  });

  return { data, error, refetch };
}
\`\`\`

**Connection Status Component:**

\`\`\`jsx
function ConnectionStatus() {
  const { isConnected, isPaused, togglePause } = useContext(DashboardDataContext);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // Track time since last update
  useEffect(() => {
    const interval = setInterval(() => setLastUpdate(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="connection-status">
      <span className={\`indicator \${isConnected ? 'connected' : 'disconnected'}\`}>
        {isConnected ? '🟢 Connected' : '🔴 Reconnecting...'}
      </span>
      <span>Last update: {formatTimeAgo(lastUpdate)}</span>
      <button onClick={togglePause}>
        {isPaused ? '▶️ Resume' : '⏸️ Pause'}
      </button>
    </div>
  );
}
\`\`\`

**Senior insight:** Key decisions include WebSocket vs polling (WS for true real-time, polling for simpler infra), reconnection strategy (exponential backoff), and how to handle offline state. For charts, consider downsampling high-frequency data. Use shared workers if multiple tabs need the same connection. Always provide visual feedback about connection state.

---

### Q: Design a shopping cart with persistent state

**Answer:**

**Requirements:**
- Persist cart across browser sessions
- Sync with server for logged-in users
- Handle inventory conflicts
- Optimistic updates
- Work offline

**Architecture:**

\`\`\`
┌────────────────────────────────────────────────────────────────────┐
│                         Cart System                                 │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                      CartProvider                             │ │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │ │
│  │  │  Local State   │ →│ Sync Manager   │ →│  Server State  │ │ │
│  │  │  (Zustand)     │  │                │  │  (React Query) │ │ │
│  │  └────────────────┘  └────────────────┘  └────────────────┘ │ │
│  │          ↓                    ↓                              │ │
│  │  ┌────────────────┐  ┌────────────────┐                     │ │
│  │  │  localStorage  │  │  Conflict      │                     │ │
│  │  │  (persistence) │  │  Resolution    │                     │ │
│  │  └────────────────┘  └────────────────┘                     │ │
│  └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

**Cart Store with Persistence:**

\`\`\`jsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      lastSyncedAt: null,

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.productId === product.id
          );

          if (existingIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingIndex] = {
              ...newItems[existingIndex],
              quantity: newItems[existingIndex].quantity + quantity,
            };
            return { items: newItems };
          }

          return {
            items: [...state.items, {
              id: crypto.randomUUID(),
              productId: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity,
              addedAt: Date.now(),
            }],
          };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [], lastSyncedAt: null }),

      getTotal: () => {
        const { items } = get();
        return items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },

      setItems: (items) => set({ items, lastSyncedAt: Date.now() }),
    }),
    {
      name: 'shopping-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        lastSyncedAt: state.lastSyncedAt,
      }),
    }
  )
);
\`\`\`

**Server Sync Hook:**

\`\`\`jsx
function useCartSync() {
  const { items, setItems, lastSyncedAt } = useCartStore();
  const { user } = useAuth();

  // Fetch server cart on login
  const { data: serverCart } = useQuery({
    queryKey: ['cart', user?.id],
    queryFn: () => api.getCart(),
    enabled: !!user,
  });

  // Sync mutation
  const syncMutation = useMutation({
    mutationFn: (localItems) => api.syncCart(localItems),
    onSuccess: (serverItems) => {
      setItems(serverItems);
    },
  });

  // Merge local and server carts on login
  useEffect(() => {
    if (!user || !serverCart) return;

    const localItems = items;
    const shouldMerge = localItems.length > 0 && serverCart.length > 0;

    if (shouldMerge) {
      // Merge strategy: combine both, prefer local for conflicts
      const merged = mergeCartItems(localItems, serverCart);
      syncMutation.mutate(merged);
    } else if (localItems.length > 0) {
      // Push local to server
      syncMutation.mutate(localItems);
    } else {
      // Use server cart
      setItems(serverCart);
    }
  }, [user, serverCart]);

  // Debounced sync on cart changes
  const debouncedSync = useDebouncedCallback(() => {
    if (user) {
      syncMutation.mutate(items);
    }
  }, 1000);

  useEffect(() => {
    if (user && items.length > 0) {
      debouncedSync();
    }
  }, [items, user]);

  return { isSyncing: syncMutation.isPending };
}

function mergeCartItems(local, server) {
  const merged = new Map();

  // Add server items first
  server.forEach((item) => {
    merged.set(item.productId, item);
  });

  // Override/add local items (local wins conflicts)
  local.forEach((item) => {
    const existing = merged.get(item.productId);
    if (existing) {
      // Keep the one with higher quantity or more recent
      if (item.addedAt > existing.addedAt) {
        merged.set(item.productId, item);
      }
    } else {
      merged.set(item.productId, item);
    }
  });

  return Array.from(merged.values());
}
\`\`\`

**Inventory Validation:**

\`\`\`jsx
function useCartValidation() {
  const { items, updateQuantity, removeItem } = useCartStore();

  // Validate cart against current inventory
  const { data: validation, isLoading } = useQuery({
    queryKey: ['cart-validation', items.map((i) => i.productId)],
    queryFn: () => api.validateCart(items),
    enabled: items.length > 0,
    staleTime: 30000, // Revalidate every 30s
  });

  const issues = useMemo(() => {
    if (!validation) return [];

    return items.map((item) => {
      const productInfo = validation[item.productId];

      if (!productInfo?.inStock) {
        return { itemId: item.id, type: 'OUT_OF_STOCK', message: 'Out of stock' };
      }

      if (item.quantity > productInfo.availableQuantity) {
        return {
          itemId: item.id,
          type: 'INSUFFICIENT_STOCK',
          message: \`Only \${productInfo.availableQuantity} available\`,
          availableQuantity: productInfo.availableQuantity,
        };
      }

      if (productInfo.price !== item.price) {
        return {
          itemId: item.id,
          type: 'PRICE_CHANGED',
          message: \`Price changed to $\${productInfo.price}\`,
          newPrice: productInfo.price,
        };
      }

      return null;
    }).filter(Boolean);
  }, [items, validation]);

  const resolveIssues = useCallback(() => {
    issues.forEach((issue) => {
      switch (issue.type) {
        case 'OUT_OF_STOCK':
          removeItem(issue.itemId);
          break;
        case 'INSUFFICIENT_STOCK':
          updateQuantity(issue.itemId, issue.availableQuantity);
          break;
        // PRICE_CHANGED - user must acknowledge
      }
    });
  }, [issues, removeItem, updateQuantity]);

  return { issues, isLoading, resolveIssues };
}
\`\`\`

**Cart Component:**

\`\`\`jsx
function ShoppingCart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const { isSyncing } = useCartSync();
  const { issues, resolveIssues } = useCartValidation();

  if (items.length === 0) {
    return (
      <div className="cart empty">
        <p>Your cart is empty</p>
        <Link to="/products">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {isSyncing && <SyncIndicator />}

      {issues.length > 0 && (
        <div className="cart-issues">
          <h4>Some items need attention</h4>
          {issues.map((issue) => (
            <IssueAlert key={issue.itemId} issue={issue} />
          ))}
          <button onClick={resolveIssues}>Resolve all issues</button>
        </div>
      )}

      <ul className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => removeItem(item.id)}
            onQuantityChange={(q) => updateQuantity(item.id, q)}
            hasIssue={issues.some((i) => i.itemId === item.id)}
          />
        ))}
      </ul>

      <div className="cart-summary">
        <div className="total">
          Total: \${getTotal().toFixed(2)}
        </div>
        <button
          disabled={issues.length > 0}
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
\`\`\`

**Senior insight:** Key decisions include merge strategy (local-wins vs server-wins vs manual), when to validate inventory (on view, on checkout), and how to handle logged-out → logged-in transitions. For guest checkout, use anonymous cart IDs that can be claimed on signup. Consider using optimistic updates for quantity changes but server validation for checkout.

---
`,Jg=`## 7. TypeScript with React

### Q: How do you type component props?

**Answer:**

**Basic Props:**
\`\`\`typescript
// Interface (preferred for props - extendable)
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;  // Optional
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}

// Type alias (fine too)
type ButtonProps = {
  label: string;
  onClick: () => void;
};
\`\`\`

**Children Props:**
\`\`\`typescript
// Explicit children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

// Using PropsWithChildren
type CardProps = React.PropsWithChildren<{
  title: string;
}>;

// Render prop
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
\`\`\`

**Event Handlers:**
\`\`\`typescript
interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
\`\`\`

**Extending HTML Elements:**
\`\`\`typescript
// Extend native button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

function Button({ variant, children, ...rest }: ButtonProps) {
  return <button className={variant} {...rest}>{children}</button>;
}

// Usage includes all native button props
<Button variant="primary" disabled onClick={...}>Click</Button>
\`\`\`

**Component as Prop:**
\`\`\`typescript
interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ComponentType<{ collapsed: boolean }>;
}
\`\`\`

**Senior insight:** Use \`interface\` for props (can be extended/merged), \`type\` for unions/complex types. Avoid \`React.FC\` - it adds implicit children and has issues with generics. Declare return type implicitly.

---

### Q: How do you type a polymorphic component?

**Answer:**

A **polymorphic component** can render as different HTML elements or components via an \`as\` prop.

\`\`\`typescript
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// Base props that all variants share
interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

// Polymorphic props with generic
type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

// Component with generic default
function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button';
  return (
    <Component className={\`btn-\${variant}\`} {...props}>
      {children}
    </Component>
  );
}

// Usage - fully typed!
<Button onClick={() => {}}>Click</Button>
<Button as="a" href="/about">Link</Button>
<Button as={Link} to="/dashboard">Router Link</Button>

// ❌ Type error - href not valid on button
<Button href="/about">Error</Button>

// ❌ Type error - to not valid on anchor
<Button as="a" to="/about">Error</Button>
\`\`\`

**Reusable Polymorphic Type:**

\`\`\`typescript
// types/polymorphic.ts
type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicComponentProps<
  E extends ElementType,
  Props = {}
> = Props & AsProp<E> & Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

// Usage
type TextProps<E extends ElementType> = PolymorphicComponentProps<E, {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold';
}>;

function Text<E extends ElementType = 'span'>({
  as,
  size = 'md',
  weight = 'normal',
  ...props
}: TextProps<E>) {
  const Component = as || 'span';
  return <Component {...props} />;
}
\`\`\`

**With forwardRef:**

\`\`\`typescript
type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref'];

type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

const Button = forwardRef(
  <E extends ElementType = 'button'>(
    { as, ...props }: ButtonProps<E>,
    ref: PolymorphicRef<E>
  ) => {
    const Component = as || 'button';
    return <Component ref={ref} {...props} />;
  }
);
\`\`\`

**Senior insight:** Polymorphic components enable flexible, type-safe UI libraries. They're complex to type but provide excellent DX. Libraries like Radix and Chakra use this pattern extensively.

---

### Q: How do you use discriminated unions for component variants?

**Answer:**

**Discriminated unions** ensure props are valid combinations using a literal type discriminator.

\`\`\`typescript
// ❌ Problem: Invalid prop combinations allowed
interface ButtonProps {
  variant: 'button' | 'link' | 'submit';
  href?: string;      // Only for link
  onClick?: () => void; // Only for button
  form?: string;      // Only for submit
}

// Nothing prevents: <Button variant="button" href="..." />

// ✅ Solution: Discriminated union
type ButtonProps =
  | { variant: 'button'; onClick: () => void }
  | { variant: 'link'; href: string; external?: boolean }
  | { variant: 'submit'; form?: string };

function Button(props: ButtonProps) {
  switch (props.variant) {
    case 'button':
      return <button onClick={props.onClick}>Click</button>;
    case 'link':
      return <a href={props.href} target={props.external ? '_blank' : undefined}>Link</a>;
    case 'submit':
      return <button type="submit" form={props.form}>Submit</button>;
  }
}

// ✅ Valid
<Button variant="button" onClick={() => {}} />
<Button variant="link" href="/about" external />
<Button variant="submit" form="myForm" />

// ❌ Type errors
<Button variant="button" href="/about" />  // href not allowed
<Button variant="link" onClick={() => {}} />  // onClick not allowed
\`\`\`

**Real-World Example - Modal:**

\`\`\`typescript
type ModalProps =
  | {
      type: 'alert';
      title: string;
      message: string;
      onClose: () => void;
    }
  | {
      type: 'confirm';
      title: string;
      message: string;
      onConfirm: () => void;
      onCancel: () => void;
    }
  | {
      type: 'custom';
      title: string;
      children: React.ReactNode;
      onClose: () => void;
    };

function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <h2>{props.title}</h2>

      {props.type === 'alert' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onClose}>OK</button>
        </>
      )}

      {props.type === 'confirm' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onConfirm}>Confirm</button>
        </>
      )}

      {props.type === 'custom' && props.children}
    </div>
  );
}
\`\`\`

**API Response Handling:**

\`\`\`typescript
type ApiResponse<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

function renderResponse<T>(
  response: ApiResponse<T>,
  renderData: (data: T) => React.ReactNode
) {
  switch (response.status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error message={response.error.message} />;
    case 'success':
      return renderData(response.data);
  }
}
\`\`\`

**Senior insight:** Discriminated unions are powerful for modeling mutually exclusive states. They make impossible states impossible and give exhaustive type checking in switch statements. Use when props have dependencies on each other.

---

### Q: How do you type a custom hook that returns different values based on options?

**Answer:**

Using function overloads and conditional types to create flexible, type-safe hooks.

**Function Overloads Pattern:**

\`\`\`typescript
// Hook that can return data in different formats
interface User {
  id: string;
  name: string;
  email: string;
}

// Overload signatures
function useUser(id: string): { user: User | null; loading: boolean };
function useUser(id: string, options: { select: 'name' }): { user: string | null; loading: boolean };
function useUser(id: string, options: { select: 'email' }): { user: string | null; loading: boolean };

// Implementation signature
function useUser(id: string, options?: { select?: 'name' | 'email' }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(id).then(setUser).finally(() => setLoading(false));
  }, [id]);

  if (options?.select === 'name') {
    return { user: user?.name ?? null, loading };
  }
  if (options?.select === 'email') {
    return { user: user?.email ?? null, loading };
  }

  return { user, loading };
}

// Usage - TypeScript knows the return type!
const { user: fullUser } = useUser('123');         // User | null
const { user: name } = useUser('123', { select: 'name' }); // string | null
\`\`\`

**Generic Conditional Return Types:**

\`\`\`typescript
// More flexible: Generic with conditional type
type UseQueryResult<T, TSelect = T> = {
  data: TSelect | undefined;
  loading: boolean;
  error: Error | null;
};

function useQuery<T, TSelect = T>(
  queryFn: () => Promise<T>,
  options?: { select?: (data: T) => TSelect }
): UseQueryResult<T, TSelect> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    queryFn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const selectedData = options?.select && data
    ? options.select(data)
    : data;

  return {
    data: selectedData as TSelect | undefined,
    loading,
    error,
  };
}

// Usage
const { data: users } = useQuery(() => fetchUsers());
// data: User[] | undefined

const { data: names } = useQuery(
  () => fetchUsers(),
  { select: (users) => users.map(u => u.name) }
);
// data: string[] | undefined (inferred from select!)
\`\`\`

**Discriminated Union Return Type:**

\`\`\`typescript
// Hook that returns different shapes based on status
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

function useAsync<T>(asyncFn: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });

  const execute = useCallback(() => {
    setState({ status: 'loading' });
    asyncFn()
      .then((data) => setState({ status: 'success', data }))
      .catch((error) => setState({ status: 'error', error }));
  }, [asyncFn]);

  return state;
}

// Usage with type narrowing
function Component() {
  const state = useAsync(fetchData);

  if (state.status === 'loading') {
    return <Spinner />;
  }

  if (state.status === 'error') {
    return <Error message={state.error.message} />; // error is available!
  }

  if (state.status === 'success') {
    return <div>{state.data}</div>; // data is available!
  }

  return <button onClick={execute}>Load</button>;
}
\`\`\`

**Conditional Types Based on Options:**

\`\`\`typescript
// Hook that returns array or single item based on option
interface UseFetchOptions<TMultiple extends boolean> {
  multiple?: TMultiple;
}

type UseFetchReturn<T, TMultiple extends boolean> =
  TMultiple extends true ? T[] : T | null;

function useFetch<T, TMultiple extends boolean = false>(
  url: string,
  options?: UseFetchOptions<TMultiple>
): UseFetchReturn<T, TMultiple> {
  // Implementation
}

// Usage
const singleUser = useFetch<User>('/api/user/1');
// Type: User | null

const allUsers = useFetch<User>('/api/users', { multiple: true });
// Type: User[]
\`\`\`

**Senior insight:** Function overloads are best for a small, fixed set of variations. Generic conditional types scale better for complex combinations. Use discriminated unions when the return structure itself varies (not just the type of a property). TypeScript 5.0+ has better inference - prefer generics over overloads when possible for cleaner code.

---

### Q: How do you handle typing for Context with possibly null values?

**Answer:**

Context often starts as null/undefined before being initialized. Here are patterns to handle this type-safely.

**The Problem:**

\`\`\`typescript
// ❌ Annoying: Every consumer must handle null
const UserContext = createContext<User | null>(null);

function useUser() {
  const user = useContext(UserContext);
  return user; // User | null - consumers always check null
}

function Component() {
  const user = useUser();
  return <div>{user?.name}</div>; // Optional chaining everywhere
}
\`\`\`

**Pattern 1: Non-null Assertion Hook:**

\`\`\`typescript
const UserContext = createContext<User | null>(null);

function useUser(): User {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('useUser must be used within UserProvider');
  }

  return user; // Type is now User (not null)
}

// Usage - no null checks needed!
function Profile() {
  const user = useUser();
  return <div>{user.name}</div>; // Safe!
}
\`\`\`

**Pattern 2: Create Context with Undefined Check:**

\`\`\`typescript
// Generic helper for creating typed context
function createSafeContext<T>(name: string) {
  const Context = createContext<T | undefined>(undefined);

  function useContext_() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(\`use\${name} must be used within \${name}Provider\`);
    }
    return context;
  }

  return [Context.Provider, useContext_] as const;
}

// Usage
interface AuthContextType {
  user: User | null;
  login: (creds: Credentials) => Promise<void>;
  logout: () => void;
}

const [AuthProvider, useAuth] = createSafeContext<AuthContextType>('Auth');

// In provider
function AuthProviderComponent({ children }) {
  const value: AuthContextType = {
    user: /* ... */,
    login: /* ... */,
    logout: /* ... */,
  };

  return <AuthProvider value={value}>{children}</AuthProvider>;
}

// In consumer - useAuth() always returns AuthContextType
function LoginButton() {
  const { user, logout } = useAuth(); // Never undefined!
}
\`\`\`

**Pattern 3: Separate Loading State:**

\`\`\`typescript
// Context value explicitly handles loading state
interface UserContextType {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Consumer handles loading explicitly
function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Spinner />;
  if (!user) return <LoginPrompt />;

  return <div>{user.name}</div>;
}
\`\`\`

**Pattern 4: Default Value with Type Guard:**

\`\`\`typescript
// Provide a "fake" default that's detectable
const CONTEXT_UNINITIALIZED = Symbol('CONTEXT_UNINITIALIZED');

type UserContextValue = User | typeof CONTEXT_UNINITIALIZED;

const UserContext = createContext<UserContextValue>(CONTEXT_UNINITIALIZED);

function useUser(): User {
  const value = useContext(UserContext);

  if (value === CONTEXT_UNINITIALIZED) {
    throw new Error('useUser must be used within UserProvider');
  }

  return value;
}
\`\`\`

**Pattern 5: Optional Context (When Missing is OK):**

\`\`\`typescript
// Sometimes you WANT to handle missing context
const ThemeContext = createContext<Theme | null>(null);

function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  // Return default if not in provider
  return theme ?? defaultTheme;
}

// Or provide both hooks
function useThemeOptional(): Theme | null {
  return useContext(ThemeContext);
}

function useThemeRequired(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('...');
  return theme;
}
\`\`\`

**Typing Context with Dispatch:**

\`\`\`typescript
// For reducer-based context
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
type State = { count: number };

interface CounterContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
}
\`\`\`

**Senior insight:** The throw-if-missing pattern (Pattern 1/2) is most common and provides the best DX. It catches bugs early (missing provider) and eliminates null checks in consumers. For contexts where missing IS valid (theming, feature flags), use Pattern 5 with defaults. TypeScript 5.4+ has improved narrowing, but explicit hooks remain clearer.

---

### Q: What are common TypeScript patterns for handling API responses?

**Answer:**

Type-safe API handling involves: defining response shapes, validating at runtime, and handling errors gracefully.

**Typed Fetch Wrapper:**

\`\`\`typescript
// Generic fetch with type safety
async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  return response.json() as Promise<T>;
}

// Custom error class
class ApiError extends Error {
  constructor(
    public status: number,
    public body: string
  ) {
    super(\`API Error: \${status}\`);
    this.name = 'ApiError';
  }
}

// Usage
interface User {
  id: string;
  name: string;
  email: string;
}

const user = await fetchApi<User>('/api/users/123');
// TypeScript knows: user.id, user.name, user.email
\`\`\`

**Runtime Validation with Zod:**

\`\`\`typescript
import { z } from 'zod';

// Define schema AND type together
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  createdAt: z.string().datetime().transform(s => new Date(s)),
});

type User = z.infer<typeof UserSchema>; // Type derived from schema!

// Validated fetch
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json();

  // Throws if data doesn't match schema
  return UserSchema.parse(data);
}

// Safe parse (doesn't throw)
function parseUser(data: unknown): User | null {
  const result = UserSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  console.error('Invalid user data:', result.error);
  return null;
}
\`\`\`

**Type Guards for Response Handling:**

\`\`\`typescript
// API might return different shapes
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

// Type guard
function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is { success: true; data: T } {
  return response.success === true;
}

// Usage
async function fetchUser(id: string) {
  const response = await fetchApi<ApiResponse<User>>(\`/api/users/\${id}\`);

  if (isSuccessResponse(response)) {
    return response.data; // Type: User
  } else {
    throw new Error(response.error.message); // error is typed!
  }
}
\`\`\`

**Branded Types for IDs:**

\`\`\`typescript
// Prevent mixing up different ID types
type UserId = string & { readonly brand: unique symbol };
type PostId = string & { readonly brand: unique symbol };

// Helper to create branded IDs
function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

// Now you can't mix them up!
async function fetchUser(id: UserId): Promise<User> {
  return fetchApi(\`/api/users/\${id}\`);
}

async function fetchPost(id: PostId): Promise<Post> {
  return fetchApi(\`/api/posts/\${id}\`);
}

// Usage
const userId = createUserId('123');
const postId = createPostId('456');

fetchUser(userId); // ✅ OK
fetchUser(postId); // ❌ Error: PostId not assignable to UserId
\`\`\`

**Result Type Pattern:**

\`\`\`typescript
// Explicit success/failure handling
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

async function fetchUserSafe(id: string): Promise<Result<User, ApiError>> {
  try {
    const user = await fetchApi<User>(\`/api/users/\${id}\`);
    return { ok: true, value: user };
  } catch (error) {
    if (error instanceof ApiError) {
      return { ok: false, error };
    }
    return { ok: false, error: new ApiError(500, 'Unknown error') };
  }
}

// Usage forces handling both cases
const result = await fetchUserSafe('123');
if (result.ok) {
  console.log(result.value.name); // TypeScript knows it's User
} else {
  console.error(result.error.status); // TypeScript knows it's ApiError
}
\`\`\`

**Typed React Query:**

\`\`\`typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Fully typed queries
function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id] as const,
    queryFn: () => fetchApi<User>(\`/api/users/\${id}\`),
  });
}

// Typed mutations
function useUpdateUser() {
  return useMutation({
    mutationFn: (data: { id: string; updates: Partial<User> }) =>
      fetchApi<User>(\`/api/users/\${data.id}\`, {
        method: 'PATCH',
        body: JSON.stringify(data.updates),
      }),
  });
}

// Usage
function Profile({ id }: { id: string }) {
  const { data: user, isLoading, error } = useUser(id);
  const updateUser = useUpdateUser();

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1> {/* Fully typed! */}
      <button
        onClick={() => updateUser.mutate({ id, updates: { name: 'New Name' } })}
      >
        Update
      </button>
    </div>
  );
}
\`\`\`

**Senior insight:** TypeScript types are erased at runtime - API responses can't be trusted to match types. Use Zod/io-ts for runtime validation on untrusted boundaries (external APIs). For internal APIs you control, type-only approaches are often sufficient. Branded types prevent ID mix-ups at compile time. The Result pattern makes error handling explicit but adds verbosity - use judiciously.

---
`,$g=`## 8. Testing

### Q: What is the philosophy behind React Testing Library?

**Answer:**

**Core Principle:** "The more your tests resemble the way your software is used, the more confidence they can give you."

**Key Philosophy:**

1. **Test behavior, not implementation:**
\`\`\`jsx
// ❌ Testing implementation (fragile)
expect(component.state.isOpen).toBe(true);
expect(wrapper.find('.dropdown-menu').length).toBe(1);

// ✅ Testing behavior (resilient)
await user.click(screen.getByRole('button', { name: 'Open menu' }));
expect(screen.getByRole('menu')).toBeVisible();
\`\`\`

2. **Query like users do:**
\`\`\`jsx
// Priority order (most to least preferred):
screen.getByRole('button', { name: 'Submit' })  // ✅ Best - accessible
screen.getByLabelText('Email')                   // ✅ Form fields
screen.getByPlaceholderText('Search...')         // ⚠️ OK
screen.getByText('Welcome')                      // ⚠️ OK for non-interactive
screen.getByTestId('submit-btn')                 // ❌ Last resort
\`\`\`

3. **Avoid testing internal state:**
\`\`\`jsx
// ❌ Don't test useState value directly
// ✅ Test the visible result of state changes
\`\`\`

4. **Test from user's perspective:**
\`\`\`jsx
// ❌ Shallow rendering - misses integration issues
const wrapper = shallow(<MyComponent />);

// ✅ Full rendering - tests real behavior
render(<MyComponent />);
\`\`\`

**Testing Recipe:**

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user can submit the form', async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();

  // 1. Arrange
  render(<ContactForm onSubmit={onSubmit} />);

  // 2. Act - simulate user behavior
  await user.type(screen.getByLabelText('Name'), 'John Doe');
  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.click(screen.getByRole('button', { name: 'Submit' }));

  // 3. Assert - verify outcome
  expect(onSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  });
});
\`\`\`

**Senior insight:** RTL's philosophy discourages testing implementation details (component internals, state values, lifecycle methods). This makes tests more maintainable - refactoring implementation doesn't break tests if behavior stays the same. The tradeoff is tests are slightly less isolated.

---

### Q: How do you test custom hooks?

**Answer:**

Use \`@testing-library/react\`'s \`renderHook\`:

\`\`\`jsx
import { renderHook, act } from '@testing-library/react';

// Hook to test
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

// Tests
describe('useCounter', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('initializes with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('increments counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('handles multiple operations', () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
    });

    expect(result.current.count).toBe(6);
  });
});
\`\`\`

**Testing Async Hooks:**

\`\`\`jsx
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}

// Test
test('fetches user data', async () => {
  // Mock API
  jest.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'John' });

  const { result } = renderHook(() => useUser(1));

  // Initially loading
  expect(result.current.loading).toBe(true);

  // Wait for async update
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });

  expect(result.current.user).toEqual({ id: 1, name: 'John' });
});
\`\`\`

**Testing Hooks with Context:**

\`\`\`jsx
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
}

// Test with wrapper
test('returns theme from context', () => {
  const wrapper = ({ children }) => (
    <ThemeProvider theme="dark">{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.theme).toBe('dark');
});
\`\`\`

**Senior insight:** Prefer testing hooks through components when possible (more realistic). Use \`renderHook\` for: complex hook logic, hooks with many return values, hooks intended for library distribution, or when isolating hook behavior specifically.

---

### Q: How do you test components that use React Query or SWR?

**Answer:**

Testing data-fetching libraries requires proper provider setup and mocking strategies.

**Setup with React Query:**

\`\`\`jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';

// Create a new QueryClient for each test
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Don't retry failed requests in tests
        gcTime: 0,    // Disable garbage collection
      },
    },
  });
}

// Wrapper component
function createWrapper() {
  const queryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

// Component using React Query
function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Hello, {data.name}</div>;
}
\`\`\`

**Testing with MSW (Mock Service Worker):**

\`\`\`jsx
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ id: req.params.id, name: 'John Doe' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays user data after loading', async () => {
  render(<UserProfile userId="1" />, { wrapper: createWrapper() });

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Hello, John Doe')).toBeInTheDocument();
  });
});

test('displays error when request fails', async () => {
  // Override handler for this test
  server.use(
    rest.get('/api/users/:id', (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: 'Server error' }));
    })
  );

  render(<UserProfile userId="1" />, { wrapper: createWrapper() });

  await waitFor(() => {
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
  });
});
\`\`\`

**Testing Mutations:**

\`\`\`jsx
test('submits form and updates cache', async () => {
  const user = userEvent.setup();
  const queryClient = createTestQueryClient();

  // Pre-populate cache
  queryClient.setQueryData(['user', '1'], { id: '1', name: 'John' });

  render(
    <QueryClientProvider client={queryClient}>
      <EditUserForm userId="1" />
    </QueryClientProvider>
  );

  await user.clear(screen.getByLabelText('Name'));
  await user.type(screen.getByLabelText('Name'), 'Jane');
  await user.click(screen.getByRole('button', { name: 'Save' }));

  await waitFor(() => {
    // Verify cache was updated
    expect(queryClient.getQueryData(['user', '1'])).toEqual({
      id: '1',
      name: 'Jane',
    });
  });
});
\`\`\`

**Senior insight:** MSW is preferred over mocking fetch/axios directly because it intercepts at the network level, making tests more realistic. Always create a fresh QueryClient per test to avoid state leakage. Use \`server.use()\` to override handlers for specific test scenarios like errors.

---

### Q: How do you write integration tests for React applications?

**Answer:**

Integration tests verify that multiple units work together correctly. They sit between unit tests and E2E tests in the testing pyramid.

**When to Write Integration Tests:**

- Testing user flows across multiple components
- Testing component + API integration
- Testing context/state management integration
- Testing routing behavior

**Integration Test with MSW:**

\`\`\`jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const server = setupServer(
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 },
    ]));
  }),
  rest.post('/api/cart', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('user can browse products and add to cart', async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Wait for products to load
  await waitFor(() => {
    expect(screen.getByText('Product A')).toBeInTheDocument();
  });

  // Add product to cart
  await user.click(screen.getAllByRole('button', { name: 'Add to Cart' })[0]);

  // Verify cart updated
  await waitFor(() => {
    expect(screen.getByText('Cart (1)')).toBeInTheDocument();
  });

  // Navigate to cart
  await user.click(screen.getByText('Cart (1)'));

  // Verify cart page shows item
  expect(screen.getByText('Product A')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});
\`\`\`

**Testing Authentication Flows:**

\`\`\`jsx
test('protected route redirects to login when not authenticated', async () => {
  render(
    <AuthProvider initialUser={null}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );

  // Should redirect to login
  await waitFor(() => {
    expect(screen.getByText('Please log in')).toBeInTheDocument();
  });
});

test('user can log in and access protected routes', async () => {
  const user = userEvent.setup();

  server.use(
    rest.post('/api/login', (req, res, ctx) => {
      return res(ctx.json({ user: { id: 1, name: 'John' }, token: 'abc123' }));
    })
  );

  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );

  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.type(screen.getByLabelText('Password'), 'password123');
  await user.click(screen.getByRole('button', { name: 'Log In' }));

  // Should redirect to dashboard
  await waitFor(() => {
    expect(screen.getByText('Welcome, John')).toBeInTheDocument();
  });
});
\`\`\`

**Integration Test Best Practices:**

| Practice | Reason |
|----------|--------|
| Use MSW over mocking fetch | More realistic, catches integration bugs |
| Test happy path + key error paths | Balance coverage and maintenance |
| Use realistic data | Catches edge cases with real-world data shapes |
| Keep tests independent | Each test should work in isolation |
| Mock time when needed | Use \`jest.useFakeTimers()\` for debounce/throttle |

**Senior insight:** Integration tests provide the best ROI for most React apps. They catch bugs that unit tests miss (component integration issues) without the flakiness and slowness of E2E tests. Focus on critical user journeys - the paths that, if broken, would significantly impact users.

---

### Q: How do you test components with Redux or Context?

**Answer:**

Testing components connected to state management requires providing the appropriate context/store.

**Testing with Redux:**

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import ShoppingCart from './ShoppingCart';

// Create a custom render function
function renderWithRedux(
  component,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { user: userReducer, cart: cartReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) };
}

test('displays cart items from Redux store', () => {
  const preloadedState = {
    cart: {
      items: [
        { id: 1, name: 'Widget', quantity: 2, price: 25 },
        { id: 2, name: 'Gadget', quantity: 1, price: 50 },
      ],
    },
  };

  renderWithRedux(<ShoppingCart />, { preloadedState });

  expect(screen.getByText('Widget')).toBeInTheDocument();
  expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
  expect(screen.getByText('Total: $100')).toBeInTheDocument();
});

test('dispatches removeItem action when delete clicked', async () => {
  const user = userEvent.setup();
  const preloadedState = {
    cart: { items: [{ id: 1, name: 'Widget', quantity: 1, price: 25 }] },
  };

  const { store } = renderWithRedux(<ShoppingCart />, { preloadedState });

  await user.click(screen.getByRole('button', { name: 'Remove' }));

  // Verify store state changed
  expect(store.getState().cart.items).toHaveLength(0);
});
\`\`\`

**Testing with Context:**

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// Theme Context
const ThemeContext = createContext(null);

function ThemeProvider({ children, initialTheme = 'light' }) {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component using context
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}

// Tests
function renderWithTheme(component, { initialTheme = 'light' } = {}) {
  return render(
    <ThemeProvider initialTheme={initialTheme}>
      {component}
    </ThemeProvider>
  );
}

test('displays current theme', () => {
  renderWithTheme(<ThemeToggle />, { initialTheme: 'dark' });
  expect(screen.getByText('Current: dark')).toBeInTheDocument();
});

test('toggles theme on click', async () => {
  const user = userEvent.setup();
  renderWithTheme(<ThemeToggle />);

  await user.click(screen.getByRole('button'));

  expect(screen.getByText('Current: dark')).toBeInTheDocument();
});
\`\`\`

**Testing Multiple Contexts:**

\`\`\`jsx
function renderWithProviders(component, options = {}) {
  const {
    initialTheme = 'light',
    initialUser = null,
    preloadedState = {},
  } = options;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <ThemeProvider initialTheme={initialTheme}>
        <AuthProvider initialUser={initialUser}>
          {component}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
\`\`\`

**Senior insight:** Create reusable render utilities (like \`renderWithRedux\`) in a test-utils file and export them for all tests. This keeps tests DRY and makes it easy to add/modify providers. When testing Redux, prefer testing the integrated behavior (dispatch → state change → UI update) over testing reducers in isolation.

---

### Q: What is your approach to testing asynchronous code in React?

**Answer:**

Async testing in React requires understanding timing, cleanup, and proper assertions.

**Key Tools:**

\`\`\`jsx
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
\`\`\`

**Pattern 1: waitFor - Wait for assertion to pass:**

\`\`\`jsx
test('loads and displays data', async () => {
  render(<UserProfile userId="1" />);

  // Wait for loading to finish and data to appear
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});

// With timeout for slow operations
await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
}, { timeout: 3000 });
\`\`\`

**Pattern 2: findBy queries - Built-in waitFor:**

\`\`\`jsx
test('displays data after fetch', async () => {
  render(<UserProfile userId="1" />);

  // findBy = getBy + waitFor
  const heading = await screen.findByText('John Doe');
  expect(heading).toBeInTheDocument();

  // Also works with findAllBy
  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(3);
});
\`\`\`

**Pattern 3: waitForElementToBeRemoved:**

\`\`\`jsx
test('shows loading then content', async () => {
  render(<DataFetcher />);

  // Verify loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for loading to disappear
  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  // Now content should be visible
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});
\`\`\`

**Pattern 4: Testing debounced inputs:**

\`\`\`jsx
test('search with debounce', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

  render(<SearchBox onSearch={mockSearch} debounceMs={300} />);

  await user.type(screen.getByRole('textbox'), 'react');

  // Search not called yet (still debouncing)
  expect(mockSearch).not.toHaveBeenCalled();

  // Fast-forward past debounce
  act(() => {
    jest.advanceTimersByTime(300);
  });

  expect(mockSearch).toHaveBeenCalledWith('react');

  jest.useRealTimers();
});
\`\`\`

**Pattern 5: Testing race conditions:**

\`\`\`jsx
test('handles rapid filter changes correctly', async () => {
  const user = userEvent.setup();

  // Slow API response
  server.use(
    rest.get('/api/search', async (req, res, ctx) => {
      await delay(100);
      return res(ctx.json({ results: [req.url.searchParams.get('q')] }));
    })
  );

  render(<Search />);

  // Type quickly - simulates race condition
  await user.type(screen.getByRole('textbox'), 'abc');

  // Only final result should show (earlier requests should be cancelled/ignored)
  await waitFor(() => {
    expect(screen.getByText('abc')).toBeInTheDocument();
  });

  // Should NOT show intermediate results
  expect(screen.queryByText('a')).not.toBeInTheDocument();
  expect(screen.queryByText('ab')).not.toBeInTheDocument();
});
\`\`\`

**Common Mistakes:**

\`\`\`jsx
// ❌ Don't use await on getBy (they're synchronous)
const button = await screen.getByRole('button'); // Wrong!

// ✅ Use findBy for async
const button = await screen.findByRole('button'); // Correct

// ❌ Don't forget to await user events
user.click(button); // Wrong - won't wait

// ✅ Always await user events
await user.click(button); // Correct

// ❌ Empty waitFor callback
await waitFor(() => {}); // Useless - always passes

// ✅ Include assertion in waitFor
await waitFor(() => {
  expect(screen.getByText('Done')).toBeInTheDocument();
});
\`\`\`

**Senior insight:** The most common async testing bugs are: (1) not awaiting user events, (2) not cleaning up pending promises/timers, and (3) race conditions in tests. Use \`waitFor\` judiciously - overusing it can hide real timing bugs. For complex async flows, MSW + realistic timing is better than mocking everything to be instant.

---

### Q: How do you balance unit tests, integration tests, and E2E tests?

**Answer:**

The testing pyramid helps allocate testing effort effectively for frontend applications.

**Frontend Testing Pyramid:**

\`\`\`
        /\\
       /  \\
      / E2E \\        ← Few: Critical paths only
     /-------\\
    /         \\
   /Integration\\     ← Many: User journeys, component integration
  /-------------\\
 /               \\
/   Unit Tests    \\  ← Many: Utilities, hooks, pure functions
-------------------
\`\`\`

**What to Test at Each Level:**

| Level | What to Test | Tools | Speed | Confidence |
|-------|--------------|-------|-------|------------|
| Unit | Utilities, hooks, reducers, pure functions | Jest, Vitest | Fast | Lower |
| Integration | Component + API, user flows, multiple components together | RTL + MSW | Medium | High |
| E2E | Critical user journeys, cross-browser, real environment | Playwright, Cypress | Slow | Highest |

**Unit Tests (Fast, Isolated):**

\`\`\`jsx
// Utility function
test('formatPrice formats currency correctly', () => {
  expect(formatPrice(1000)).toBe('$1,000.00');
  expect(formatPrice(0)).toBe('$0.00');
  expect(formatPrice(99.9)).toBe('$99.90');
});

// Custom hook
test('useToggle toggles value', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBe(false);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});

// Reducer
test('cartReducer adds item', () => {
  const state = { items: [] };
  const action = { type: 'ADD_ITEM', payload: { id: 1, name: 'Widget' } };

  expect(cartReducer(state, action)).toEqual({
    items: [{ id: 1, name: 'Widget' }],
  });
});
\`\`\`

**Integration Tests (User-Focused):**

\`\`\`jsx
// Test user flow, not implementation
test('user can complete checkout flow', async () => {
  const user = userEvent.setup();
  render(<App />);

  // Add item to cart
  await user.click(await screen.findByRole('button', { name: 'Add to Cart' }));

  // Go to checkout
  await user.click(screen.getByText('Checkout'));

  // Fill shipping form
  await user.type(screen.getByLabelText('Address'), '123 Main St');

  // Complete order
  await user.click(screen.getByRole('button', { name: 'Place Order' }));

  // Verify confirmation
  await waitFor(() => {
    expect(screen.getByText('Order Confirmed!')).toBeInTheDocument();
  });
});
\`\`\`

**E2E Tests (Real Environment):**

\`\`\`javascript
// Playwright
test('checkout with real payment', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="product-1"] button');
  await page.click('text=Checkout');

  // Fill real Stripe test card
  const stripeFrame = page.frameLocator('iframe[name^="__privateStripeFrame"]');
  await stripeFrame.locator('[name="cardnumber"]').fill('4242424242424242');

  await page.click('text=Pay Now');

  await expect(page.locator('text=Payment Successful')).toBeVisible();
});
\`\`\`

**Recommended Distribution:**

For a typical React app:
- **70% Integration tests** - Most bugs caught, good ROI
- **20% Unit tests** - Complex logic, utilities, edge cases
- **10% E2E tests** - Critical paths (checkout, signup, core features)

**When to Adjust:**

| Scenario | Adjustment |
|----------|------------|
| Utility-heavy library | More unit tests |
| E-commerce with payments | More E2E tests |
| Design system | More integration + visual tests |
| Rapid iteration startup | Fewer E2E, more integration |

**Senior insight:** Don't aim for 100% coverage - aim for confidence. Integration tests give the best ROI for most React apps because they test real user behavior without E2E flakiness. Use E2E sparingly for critical money/data paths. Coverage metrics can be misleading - 80% coverage with good tests beats 95% coverage with brittle tests.

---

`,ey=`## 9. Server-Side Rendering & Modern React

### Q: Explain SSR vs CSR vs SSG vs ISR

**Answer:**

| Strategy | When HTML Generated | Use Case |
|----------|---------------------|----------|
| **CSR** | In browser (runtime) | Dashboards, apps behind auth |
| **SSR** | On server (per request) | Dynamic content, personalized pages |
| **SSG** | At build time | Blogs, docs, marketing pages |
| **ISR** | Build time + revalidation | E-commerce, news sites |

**CSR (Client-Side Rendering):**
\`\`\`jsx
// Browser downloads JS, fetches data, renders
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);  // Fetch happens client-side
  }, []);

  return data ? <Content data={data} /> : <Loading />;
}

// Pros: Simple, cheap hosting, good for private content
// Cons: Slow initial load, poor SEO, loading spinners
\`\`\`

**SSR (Server-Side Rendering):**
\`\`\`jsx
// Next.js example - runs on EVERY request
export async function getServerSideProps(context) {
  const data = await fetchData(context.params.id);
  return { props: { data } };
}

export default function Page({ data }) {
  return <Content data={data} />;  // HTML sent with data
}

// Pros: SEO, fast first paint, personalized content
// Cons: Server cost, slower TTFB than static
\`\`\`

**SSG (Static Site Generation):**
\`\`\`jsx
// Next.js - runs at BUILD time only
export async function getStaticProps() {
  const posts = await fetchAllPosts();
  return { props: { posts } };
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: false,
  };
}

// Pros: Fastest, cheapest (CDN), secure
// Cons: Stale data, long builds for many pages
\`\`\`

**ISR (Incremental Static Regeneration):**
\`\`\`jsx
// Next.js - static + background revalidation
export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60,  // Regenerate every 60 seconds
  };
}

// Pros: Best of SSG + fresh data, scales well
// Cons: Stale-while-revalidate semantics
\`\`\`

**Decision Tree:**
\`\`\`
Is content public?
├── No → CSR (or SSR with auth)
└── Yes → Does it change often?
    ├── No → SSG
    └── Yes → Is it personalized per user?
        ├── Yes → SSR
        └── No → ISR or SSR
\`\`\`

**Senior insight:** Modern frameworks (Next.js 13+) let you mix strategies per route. Use SSG for marketing pages, ISR for product listings, SSR for personalized content, and CSR for highly interactive dashboards - all in one app.

---

### Q: What are Server Components vs Client Components?

**Answer:**

**React Server Components (RSC)** run only on the server and never ship JavaScript to the client.

\`\`\`jsx
// Server Component (default in Next.js App Router)
// ✅ Can: async/await, database access, file system, secrets
// ❌ Cannot: useState, useEffect, onClick, browser APIs

async function ProductList() {
  const products = await db.products.findMany();  // Direct DB access!

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - \${p.price}</li>
      ))}
    </ul>
  );
}

// Client Component
// Add "use client" directive at top
'use client';

import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);

  return (
    <button onClick={() => addToCart(productId)}>
      Add to Cart
    </button>
  );
}
\`\`\`

**Key Differences:**

| Aspect | Server Component | Client Component |
|--------|------------------|------------------|
| Runs on | Server only | Server + Client |
| JS shipped | No | Yes |
| State/Effects | ❌ | ✅ |
| Interactivity | ❌ | ✅ |
| Async/await | ✅ | ❌ (in render) |
| Access secrets | ✅ | ❌ |
| Import client comp | ✅ | ✅ |
| Import server comp | ✅ | ❌ |

**Composition Pattern:**

\`\`\`jsx
// Server Component (page)
async function ProductPage({ params }) {
  const product = await getProduct(params.id);  // Server

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      {/* Client component for interactivity */}
      <AddToCartButton productId={product.id} />
      <ImageGallery images={product.images} />
    </div>
  );
}
\`\`\`

**Benefits of Server Components:**

1. **Zero JS for static parts** - Smaller bundle
2. **Direct backend access** - No API layer needed
3. **Automatic code splitting** - Only interactive parts sent
4. **Streaming** - Progressive rendering

**When to Use Client Components:**

- Event handlers (onClick, onChange)
- useState, useEffect, useContext
- Browser APIs (localStorage, geolocation)
- Custom hooks with state
- Third-party libraries using hooks

**Senior insight:** Think of Server Components as the default, add 'use client' only when you need interactivity. Server Components can render Client Components (passing serializable props), but not vice versa. This mental model helps optimize bundle size automatically.

---

### Q: How do you handle authentication in Next.js App Router?

**Answer:**

Authentication in the App Router involves middleware, server actions, and session management across server and client boundaries.

**Architecture Overview:**

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│                       Next.js App                             │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    Middleware                           │ │
│  │  • Check session on every request                      │ │
│  │  • Redirect unauthenticated users                      │ │
│  │  • Refresh tokens if needed                            │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↓                                 │
│  ┌─────────────────────┐  ┌────────────────────────────────┐│
│  │  Server Components  │  │  Server Actions                ││
│  │  • Read session     │  │  • Login/logout                ││
│  │  • Fetch user data  │  │  • Update session              ││
│  └─────────────────────┘  └────────────────────────────────┘│
│                            ↓                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  Client Components                      │ │
│  │  • useSession hook for reactive state                  │ │
│  │  • Login forms, logout buttons                         │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
\`\`\`

**Middleware for Route Protection:**

\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/session';

const protectedRoutes = ['/dashboard', '/settings', '/profile'];
const authRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const session = await getSession(request);
  const { pathname } = request.nextUrl;

  // Redirect authenticated users away from auth pages
  if (authRoutes.includes(pathname) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to login
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
\`\`\`

**Session Management with Cookies:**

\`\`\`typescript
// lib/session.ts
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key);
}

export async function decrypt(token: string) {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) return null;

  try {
    return await decrypt(sessionCookie);
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  const session = await encrypt({ userId, expires });

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
\`\`\`

**Server Actions for Login/Logout:**

\`\`\`typescript
// app/actions/auth.ts
'use server';

import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/session';
import { verifyCredentials } from '@/lib/auth';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await verifyCredentials(email, password);

  if (!user) {
    return { error: 'Invalid credentials' };
  }

  await createSession(user.id);
  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
\`\`\`

**Using in Server Components:**

\`\`\`tsx
// app/dashboard/page.tsx
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/db';

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const user = await getUser(session.userId);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <LogoutButton />
    </div>
  );
}
\`\`\`

**Client-Side Session Context:**

\`\`\`tsx
// providers/SessionProvider.tsx
'use client';

import { createContext, useContext } from 'react';

type User = { id: string; name: string; email: string } | null;

const SessionContext = createContext<{ user: User }>({ user: null });

export function SessionProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}

// In layout.tsx
export default async function RootLayout({ children }) {
  const session = await getSession();
  const user = session ? await getUser(session.userId) : null;

  return (
    <html>
      <body>
        <SessionProvider user={user}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
\`\`\`

**Senior insight:** Key decisions in App Router auth: (1) use middleware for route protection (runs on edge, fast), (2) use HTTP-only cookies for sessions (not accessible via JS, more secure), (3) keep auth logic in server actions (credentials never exposed to client), (4) pass minimal user data to client context. For OAuth, consider next-auth/authjs which handles the complexity.

---

### Q: Explain streaming SSR and how Suspense enables it

**Answer:**

**Traditional SSR:**
Server renders entire page → sends complete HTML → client hydrates.
Problem: User waits for slowest component.

**Streaming SSR:**
Server starts sending HTML immediately → streams components as they're ready → client progressively hydrates.

\`\`\`
Traditional SSR:
[──────────Wait──────────][HTML]────────────────►

Streaming SSR:
[Header][──Wait──][Main]───[Sidebar]──────────►
         ↑ Still streaming while showing content
\`\`\`

**How Suspense Enables Streaming:**

\`\`\`tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <div>
      {/* Sent immediately */}
      <Header />

      {/* Streamed when ready */}
      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />  {/* Async data fetch */}
      </Suspense>

      {/* Also streamed independently */}
      <Suspense fallback={<TableSkeleton />}>
        <SlowTable />  {/* Another async fetch */}
      </Suspense>
    </div>
  );
}

// Server Component with async data
async function SlowChart() {
  const data = await fetchChartData(); // 2 second API call
  return <Chart data={data} />;
}
\`\`\`

**What the Client Receives:**

\`\`\`html
<!-- Initial response (immediate) -->
<div>
  <header>...</header>
  <div id="chart">
    <template data-suspense>Chart loading...</template>
  </div>
  <div id="table">
    <template data-suspense>Table loading...</template>
  </div>
</div>

<!-- Streamed later when SlowChart resolves -->
<script>
  $RC('chart', '<div class="chart">...actual chart...</div>');
<\/script>

<!-- Streamed when SlowTable resolves -->
<script>
  $RC('table', '<div class="table">...actual table...</div>');
<\/script>
\`\`\`

**Selective Hydration:**

\`\`\`tsx
// With streaming, React can hydrate parts of the page independently
<Suspense fallback={<Spinner />}>
  <Comments />  {/* Hydrates when JS loads */}
</Suspense>

// If user interacts with Comments before hydration completes,
// React prioritizes hydrating that component first!
\`\`\`

**Nested Suspense for Granular Control:**

\`\`\`tsx
function ProductPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductDetails />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />  {/* Can load independently */}

        <Suspense fallback={<RecommendationsSkeleton />}>
          <Recommendations />  {/* Deepest, loads last */}
        </Suspense>
      </Suspense>
    </Suspense>
  );
}
\`\`\`

**Loading.tsx in Next.js (Automatic Suspense):**

\`\`\`tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <DashboardSkeleton />;
}

// Equivalent to wrapping page in Suspense
// app/dashboard/page.tsx content is automatically wrapped
\`\`\`

**Benefits of Streaming:**

| Metric | Traditional SSR | Streaming SSR |
|--------|----------------|---------------|
| Time to First Byte | Slow (wait for all) | Fast (immediate) |
| First Contentful Paint | Blocked by slowest | Progressive |
| Time to Interactive | All or nothing | Incremental |
| Perceived Performance | Poor | Much better |

**When Streaming Doesn't Help:**

\`\`\`tsx
// ❌ No benefit - everything is fast
<Suspense fallback={<Spinner />}>
  <FastComponent />  {/* Already fast, Suspense adds overhead */}
</Suspense>

// ❌ Serial dependencies - can't parallelize
async function Page() {
  const user = await getUser();  // Must wait
  const posts = await getPosts(user.id);  // Depends on user
  return <Posts posts={posts} />;
}

// ✅ Better - parallel fetching
async function Page() {
  const [user, posts] = await Promise.all([
    getUser(),
    getPosts(),  // If possible to fetch independently
  ]);
}
\`\`\`

**Senior insight:** Streaming is about perceived performance, not actual speed. The total server time might be similar, but users see content faster. Strategic Suspense boundary placement matters: wrap slow, independent sections. Avoid suspense boundaries around fast content (adds overhead) or deeply nested critical content (delays everything below).

---

### Q: What are the trade-offs between Pages Router and App Router in Next.js?

**Answer:**

**Feature Comparison:**

| Feature | Pages Router | App Router |
|---------|--------------|------------|
| Directory | \`/pages\` | \`/app\` |
| Components | All client by default | Server by default |
| Data fetching | getServerSideProps, getStaticProps | async components, fetch |
| Layouts | Manual, re-mount on navigation | Nested, persistent |
| Loading states | Manual | Built-in (loading.tsx) |
| Error handling | _error.js, limited | error.tsx, granular |
| Streaming | Limited | Full support |
| Caching | Manual | Automatic + configurable |
| Stable | Yes, mature | Yes (as of Next 13.4) |

**Pages Router (Traditional):**

\`\`\`tsx
// pages/products/[id].tsx
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);
  return { props: { product } };
}

export default function ProductPage({ product }) {
  return <div>{product.name}</div>;
}

// Layout requires _app.tsx, re-mounts on every navigation
// pages/_app.tsx
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
\`\`\`

**App Router (Modern):**

\`\`\`tsx
// app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);
  return <div>{product.name}</div>;
}

// Layouts persist across navigation
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}  {/* Only this changes */}
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

**When to Use Pages Router:**

1. **Existing large codebase** - Migration cost is high
2. **Team familiarity** - Everyone knows Pages Router well
3. **Specific library compatibility** - Some libs not yet App Router ready
4. **Simple apps** - Don't need streaming, server components
5. **API routes with specific needs** - Pages API routes have some features App Router route handlers don't

**When to Use App Router:**

1. **New projects** - Future-proof, more features
2. **Performance critical** - Server Components reduce JS bundle
3. **Complex layouts** - Nested layouts with shared state
4. **Streaming needs** - Progressive loading UX
5. **Colocation** - Components, tests, styles in same folder

**Migration Considerations:**

\`\`\`tsx
// ❌ Common migration pain point: 'use client' everywhere
'use client';
function Page() {
  // If you add 'use client' to everything, you lose Server Component benefits
}

// ✅ Better: Split components
// app/products/page.tsx (Server Component)
async function ProductPage() {
  const products = await fetchProducts(); // Server-side
  return <ProductList products={products} />;
}

// components/ProductList.tsx ('use client' only where needed)
'use client';
function ProductList({ products }) {
  const [filter, setFilter] = useState('');
  // Interactive parts
}
\`\`\`

**Hybrid Approach:**

\`\`\`
project/
├── app/                    # New features in App Router
│   ├── dashboard/
│   └── settings/
├── pages/                  # Legacy pages, migrate gradually
│   ├── api/               # API routes (can stay)
│   └── old-feature/
\`\`\`

**Performance Comparison:**

\`\`\`
Pages Router:
- All JS shipped to client
- Data fetching tied to route
- Layout re-mounts on navigation

App Router:
- Server Components = 0 JS
- Fetch at component level
- Layouts persist (better UX)
- Streaming (faster perceived load)
\`\`\`

**Senior insight:** For new projects, App Router is the clear choice - it's where Next.js is heading. For existing projects, migrate incrementally: new features in App Router, migrate old pages when you touch them. The mental model shift (server-first vs client-first) is the hardest part. Don't just add 'use client' everywhere - that defeats the purpose.

---

### Q: How do you handle data fetching patterns in Server Components?

**Answer:**

**Fetching in Server Components:**

\`\`\`tsx
// Direct async/await in component
async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);
  return <div>{product.name}</div>;
}

// fetch() is extended with caching
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache',  // Default: cache indefinitely
    // cache: 'no-store',  // Don't cache (like getServerSideProps)
    // next: { revalidate: 60 },  // ISR: revalidate every 60s
  });
  return res.json();
}
\`\`\`

**Parallel vs Sequential Fetching:**

\`\`\`tsx
// ❌ Sequential - slow!
async function Dashboard() {
  const user = await fetchUser();        // Wait...
  const posts = await fetchPosts();      // Wait...
  const analytics = await fetchAnalytics(); // Wait...
  // Total: user + posts + analytics time

  return <div>...</div>;
}

// ✅ Parallel - fast!
async function Dashboard() {
  const [user, posts, analytics] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchAnalytics(),
  ]);
  // Total: max(user, posts, analytics) time

  return <div>...</div>;
}
\`\`\`

**Streaming with Suspense for Independence:**

\`\`\`tsx
// Even better: Stream as each resolves
async function Dashboard() {
  return (
    <div>
      {/* User data might be fast */}
      <Suspense fallback={<UserSkeleton />}>
        <UserSection />
      </Suspense>

      {/* Posts might be slow */}
      <Suspense fallback={<PostsSkeleton />}>
        <PostsSection />
      </Suspense>

      {/* Analytics might be slowest */}
      <Suspense fallback={<AnalyticsSkeleton />}>
        <AnalyticsSection />
      </Suspense>
    </div>
  );
}

// Each component fetches its own data
async function UserSection() {
  const user = await fetchUser();
  return <div>{user.name}</div>;
}
\`\`\`

**Data Fetching Patterns:**

**1. Fetch in Page, Pass Down:**

\`\`\`tsx
// app/products/page.tsx
async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}

// Pros: Clear data flow, easy to see what page needs
// Cons: Props drilling for deep components
\`\`\`

**2. Fetch in Each Component:**

\`\`\`tsx
// Each component fetches what it needs
async function ProductDetails({ id }) {
  const product = await fetchProduct(id);
  return <div>{product.name}</div>;
}

async function ProductReviews({ id }) {
  const reviews = await fetchReviews(id);
  return <ul>{reviews.map(...)}</ul>;
}

// Pros: Colocated data needs, streaming friendly
// Cons: Multiple fetches, need to handle N+1 problems
\`\`\`

**3. Preload Pattern:**

\`\`\`tsx
// lib/data.ts
import { cache } from 'react';

// Deduplicated by React cache
export const getProduct = cache(async (id: string) => {
  const res = await fetch(\`/api/products/\${id}\`);
  return res.json();
});

// Can preload in layout, use in page
export const preloadProduct = (id: string) => {
  void getProduct(id);  // Start fetch without awaiting
};

// app/products/[id]/layout.tsx
export default function Layout({ params, children }) {
  preloadProduct(params.id);  // Start fetching early
  return children;
}

// app/products/[id]/page.tsx
async function ProductPage({ params }) {
  const product = await getProduct(params.id);  // Already started!
  return <div>{product.name}</div>;
}
\`\`\`

**Caching Strategies:**

\`\`\`tsx
// Static data - cache forever
fetch('https://api/static-data', {
  cache: 'force-cache',
});

// Dynamic data - never cache
fetch('https://api/user-specific', {
  cache: 'no-store',
});

// Time-based revalidation (ISR)
fetch('https://api/products', {
  next: { revalidate: 3600 },  // Revalidate hourly
});

// Tag-based revalidation
fetch('https://api/products', {
  next: { tags: ['products'] },
});

// Then in a Server Action:
import { revalidateTag } from 'next/cache';
revalidateTag('products');
\`\`\`

**Request Deduplication:**

\`\`\`tsx
// React automatically deduplicates identical fetch calls
// in the same render pass

async function Header() {
  const user = await fetchUser();  // Fetch #1
  return <div>{user.name}</div>;
}

async function Sidebar() {
  const user = await fetchUser();  // Same URL = reuses #1
  return <div>{user.avatar}</div>;
}

// Both components get same data, only one fetch!
\`\`\`

**Database Queries (Prisma, Drizzle):**

\`\`\`tsx
// For non-fetch data sources, use React cache
import { cache } from 'react';
import { db } from '@/lib/db';

export const getUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });
});

// Now multiple components can call getUser(id)
// and it's deduplicated per request
\`\`\`

**Senior insight:** Key patterns: (1) use parallel fetching with Promise.all for independent data, (2) use Suspense boundaries to stream independent sections, (3) use React cache() for database queries to get deduplication, (4) preload in layouts for data needed in pages. Avoid waterfalls (sequential dependent fetches) - they're the main cause of slow pages.

---

`,ny=`## 10. JavaScript Fundamentals

### Q: Explain closures and how they relate to React hooks

**Answer:**

A **closure** is a function that retains access to its lexical scope even when executed outside that scope.

\`\`\`javascript
function createCounter() {
  let count = 0;  // Enclosed variable

  return function increment() {
    count++;      // Accesses count from outer scope
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2 - remembers count
\`\`\`

**How React Hooks Use Closures:**

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  // This function closes over 'count'
  const handleClick = () => {
    console.log(count);  // Captures current count value
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
\`\`\`

**Each render creates a new closure:**

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);  // ⚠️ Always logs the count from this render!
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty deps = closure captures initial count (0)

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
// Clicking button updates UI, but interval always logs 0
\`\`\`

**Stale Closure Problem:**

\`\`\`jsx
// ❌ Stale closure - captures old value
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);  // Always uses initial count
  }, 1000);
  return () => clearInterval(id);
}, []);

// ✅ Solution 1: Functional update
setCount(c => c + 1);  // React passes latest value

// ✅ Solution 2: Add to dependencies
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, [count]);  // Re-creates interval when count changes

// ✅ Solution 3: useRef for latest value
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const id = setInterval(() => {
    console.log(countRef.current);  // Always latest
  }, 1000);
  return () => clearInterval(id);
}, []);
\`\`\`

**Senior insight:** Understanding closures is essential for debugging React. Every render creates new functions that close over current state/props. The dependency array in hooks determines when new closures are created. Stale closures cause bugs when old functions reference outdated values.

---

### Q: How does the event loop work? Microtasks vs macrotasks?

**Answer:**

JavaScript is single-threaded. The **event loop** enables async operations by managing a queue of tasks.

\`\`\`
┌─────────────────────────────────────────────────────┐
│                    Call Stack                        │
│  (Currently executing code)                          │
└─────────────────────────────────────────────────────┘
                        ↓ Empty?
┌─────────────────────────────────────────────────────┐
│                 Microtask Queue                      │
│  (Promises, queueMicrotask, MutationObserver)       │
│  ALL processed before next macrotask                │
└─────────────────────────────────────────────────────┘
                        ↓ Empty?
┌─────────────────────────────────────────────────────┐
│                 Macrotask Queue                      │
│  (setTimeout, setInterval, I/O, UI rendering)       │
│  ONE processed per loop iteration                   │
└─────────────────────────────────────────────────────┘
\`\`\`

**Key Difference:**

- **Microtasks**: All execute before rendering/next macrotask
- **Macrotasks**: One per event loop iteration

\`\`\`javascript
console.log('1');

setTimeout(() => console.log('2'), 0);  // Macrotask

Promise.resolve().then(() => console.log('3'));  // Microtask

console.log('4');

// Output: 1, 4, 3, 2
// Stack: 1, 4 → Microtasks: 3 → Macrotasks: 2
\`\`\`

**Complex Example:**

\`\`\`javascript
console.log('start');

setTimeout(() => {
  console.log('timeout 1');
  Promise.resolve().then(() => console.log('promise inside timeout'));
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  setTimeout(() => console.log('timeout inside promise'), 0);
});

setTimeout(() => console.log('timeout 2'), 0);

console.log('end');

// Output:
// start
// end
// promise 1
// timeout 1
// promise inside timeout
// timeout 2
// timeout inside promise
\`\`\`

**React Implications:**

\`\`\`jsx
// React 17 - setState in setTimeout NOT batched
setTimeout(() => {
  setCount(1);  // Render
  setFlag(true); // Render again
}, 0);

// React 18 - Automatic batching everywhere
setTimeout(() => {
  setCount(1);
  setFlag(true); // Single render!
}, 0);
\`\`\`

**Senior insight:** Understanding the event loop helps debug race conditions, optimize animations (requestAnimationFrame runs before paint), and understand why React 18's batching works. Microtasks (promises) execute before the browser paints, which is why too many can cause jank.

---

### Q: What is the difference between shallow copy and deep copy? How does this affect React state?

**Answer:**

**Shallow Copy:** Creates a new object but nested objects/arrays still reference the original.

\`\`\`javascript
const original = {
  name: 'John',
  address: { city: 'NYC', zip: '10001' },
  hobbies: ['reading', 'gaming'],
};

// Shallow copy methods
const copy1 = { ...original };
const copy2 = Object.assign({}, original);

// Modifying nested object affects both!
copy1.address.city = 'LA';
console.log(original.address.city); // 'LA' - mutated!

// But top-level works fine
copy1.name = 'Jane';
console.log(original.name); // 'John' - unchanged
\`\`\`

**Deep Copy:** Creates completely independent copy at all levels.

\`\`\`javascript
// Method 1: structuredClone (modern, recommended)
const deepCopy1 = structuredClone(original);

// Method 2: JSON (limited - loses functions, dates, undefined)
const deepCopy2 = JSON.parse(JSON.stringify(original));

// Method 3: Libraries (lodash)
import { cloneDeep } from 'lodash';
const deepCopy3 = cloneDeep(original);

// Now modifications are safe
deepCopy1.address.city = 'LA';
console.log(original.address.city); // 'NYC' - unchanged!
\`\`\`

**React State Implications:**

\`\`\`jsx
// ❌ WRONG - Mutating nested state
function updateCity(newCity) {
  const user = { ...state.user };  // Shallow copy
  user.address.city = newCity;      // Mutates original!
  setState({ user });               // React may not detect change
}

// ✅ CORRECT - Immutable nested update
function updateCity(newCity) {
  setState((prev) => ({
    ...prev,
    user: {
      ...prev.user,
      address: {
        ...prev.user.address,
        city: newCity,
      },
    },
  }));
}

// ✅ BETTER - Using Immer
import { produce } from 'immer';

function updateCity(newCity) {
  setState(produce((draft) => {
    draft.user.address.city = newCity;  // Looks like mutation, but isn't!
  }));
}
\`\`\`

**When Shallow Copy is Sufficient:**

\`\`\`jsx
// Flat objects - shallow copy is fine
const [settings, setSettings] = useState({
  theme: 'dark',
  language: 'en',
  fontSize: 14,
});

// Safe update
setSettings((prev) => ({ ...prev, theme: 'light' }));
\`\`\`

**Array Operations:**

\`\`\`jsx
// ❌ WRONG - Mutating array
const items = [...state.items];
items[2].name = 'Updated';  // Mutates original item!

// ✅ CORRECT - Map to new objects
setState((prev) => ({
  items: prev.items.map((item, i) =>
    i === 2 ? { ...item, name: 'Updated' } : item
  ),
}));
\`\`\`

**structuredClone Limitations:**

\`\`\`javascript
// ❌ Doesn't work with:
const obj = {
  fn: () => {},           // Functions
  sym: Symbol('test'),    // Symbols
  dom: document.body,     // DOM nodes
};

structuredClone(obj); // Throws error
\`\`\`

**Senior insight:** Default to shallow copies and explicit nested updates - they're faster and make the update path clear. Use Immer for complex nested state - it provides ergonomic "mutable" syntax while maintaining immutability. Reserve deep cloning for truly necessary cases (form state snapshots, undo/redo). Normalized state shape (flat structures with IDs) avoids deep nesting entirely.

---

### Q: Explain prototypal inheritance and how it relates to React class components

**Answer:**

**Prototypal Inheritance:** JavaScript objects inherit from other objects via the prototype chain.

\`\`\`javascript
// Every object has a [[Prototype]]
const animal = {
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  },
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // "Rex makes a sound" - inherited from animal

// Prototype chain
console.log(dog.hasOwnProperty('name'));  // true (own property)
console.log(dog.hasOwnProperty('speak')); // false (inherited)
\`\`\`

**Constructor Functions (Pre-ES6):**

\`\`\`javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound\`);
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const rex = new Dog('Rex', 'German Shepherd');
rex.speak(); // Inherited from Animal
rex.bark();  // Own method
\`\`\`

**ES6 Classes (Syntactic Sugar):**

\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Must call super() first
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}
\`\`\`

**React Class Components:**

\`\`\`jsx
// React.Component is a class with methods on its prototype
class Counter extends React.Component {
  constructor(props) {
    super(props);  // Required! Initializes this.props
    this.state = { count: 0 };
  }

  // Instance method - recreated per instance
  handleClick = () => {
    this.setState((s) => ({ count: s.count + 1 }));
  };

  // Prototype method - shared across instances
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

// Counter inherits from React.Component:
// - this.setState()
// - this.forceUpdate()
// - Lifecycle methods (componentDidMount, etc.)
\`\`\`

**\`this\` Binding Issues:**

\`\`\`jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // ❌ Without binding, 'this' is undefined in handler
    // this.handleClick = this.handleClick.bind(this);
  }

  // ❌ Prototype method - 'this' depends on call context
  handleClick() {
    this.setState({ count: this.state.count + 1 }); // Error!
  }

  // ✅ Arrow function - 'this' is lexically bound
  handleClick = () => {
    this.setState({ count: this.state.count + 1 }); // Works!
  };
}
\`\`\`

**Why Hooks are Preferred:**

\`\`\`jsx
// Functional component - no 'this', no prototype chain
function Counter() {
  const [count, setCount] = useState(0);

  // Just a regular function - no 'this' binding issues
  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
\`\`\`

**Checking Inheritance:**

\`\`\`javascript
// instanceof checks prototype chain
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true

// Check direct prototype
console.log(Object.getPrototypeOf(rex) === Dog.prototype); // true
\`\`\`

**Senior insight:** Understanding prototypes explains class component behavior: why \`super(props)\` is required, why \`this\` binding is needed, and why arrow functions work differently. Functional components with hooks sidestep all prototype/this complexity, which is a major reason they're now preferred. You still need prototype knowledge for: understanding older codebases, debugging inheritance issues, and working with JavaScript libraries that use prototypal patterns.

---

### Q: Explain async/await vs Promises and how errors propagate

**Answer:**

**Promises - Explicit Chaining:**

\`\`\`javascript
// Creating a promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John' });
      } else {
        reject(new Error('Invalid ID'));
      }
    }, 1000);
  });
}

// Consuming with .then/.catch
fetchUser(1)
  .then((user) => {
    console.log(user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Done');
  });
\`\`\`

**Async/Await - Synchronous-Looking Syntax:**

\`\`\`javascript
// Same logic, cleaner syntax
async function loadUserData(id) {
  try {
    const user = await fetchUser(id);
    console.log(user);

    const posts = await fetchPosts(user.id);
    console.log(posts);

    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw if needed
  } finally {
    console.log('Done');
  }
}
\`\`\`

**Error Propagation with Promises:**

\`\`\`javascript
// Errors propagate down the chain until caught
fetchUser(1)
  .then((user) => {
    throw new Error('Oops!');  // Error thrown
    return fetchPosts(user.id);
  })
  .then((posts) => {
    // This is SKIPPED - error propagates past it
    console.log(posts);
  })
  .catch((error) => {
    // Error caught here
    console.error(error);
  });

// Catching in the middle
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .catch((error) => {
    // Handle and recover
    console.warn('Using fallback');
    return [];  // Return fallback value
  })
  .then((posts) => {
    // Continues with [] from catch
    console.log('Posts:', posts);
  });
\`\`\`

**Error Propagation with Async/Await:**

\`\`\`javascript
async function example() {
  try {
    const user = await fetchUser(-1);  // Throws
    const posts = await fetchPosts(user.id);  // Never reached
    return posts;
  } catch (error) {
    // All errors in the try block caught here
    console.error(error);
    return [];  // Fallback
  }
}

// Calling async function
example()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));  // If throw in catch

// Or with await
const result = await example();
\`\`\`

**Promise Combinators:**

\`\`\`javascript
// Promise.all - All must succeed
const [user, posts, comments] = await Promise.all([
  fetchUser(1),
  fetchPosts(1),
  fetchComments(1),
]);
// If any fails, entire Promise.all rejects

// Promise.allSettled - Get results regardless of success/failure
const results = await Promise.allSettled([
  fetchUser(1),
  fetchUser(-1),  // Will reject
]);
// results: [
//   { status: 'fulfilled', value: {...} },
//   { status: 'rejected', reason: Error }
// ]

// Promise.race - First to settle (resolve or reject)
const fastest = await Promise.race([
  fetchFromServer1(),
  fetchFromServer2(),
]);

// Promise.any - First to succeed (ignores rejections)
const firstSuccess = await Promise.any([
  fetchFromServer1(),  // Might fail
  fetchFromServer2(),  // Might fail
  fetchFromServer3(),  // First success wins
]);
// Only rejects if ALL reject
\`\`\`

**React Patterns:**

\`\`\`jsx
// ❌ Don't use async directly in useEffect
useEffect(async () => {  // Wrong!
  const data = await fetchData();
  setData(data);
}, []);

// ✅ Define async function inside
useEffect(() => {
  async function loadData() {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }
  loadData();
}, []);

// ✅ Handle race conditions
useEffect(() => {
  let cancelled = false;

  async function loadData() {
    try {
      const data = await fetchData(id);
      if (!cancelled) {
        setData(data);
      }
    } catch (error) {
      if (!cancelled) {
        setError(error);
      }
    }
  }

  loadData();
  return () => { cancelled = true; };
}, [id]);
\`\`\`

**Error Boundaries Don't Catch Async Errors:**

\`\`\`jsx
// ❌ Error boundary won't catch this
async function handleClick() {
  throw new Error('Async error');  // Not caught by boundary
}

// ✅ Convert to synchronous throw
function useAsyncError() {
  const [, setError] = useState();
  return useCallback((error) => {
    setError(() => { throw error; });  // Now caught by boundary
  }, []);
}

function Component() {
  const throwError = useAsyncError();

  async function handleClick() {
    try {
      await riskyOperation();
    } catch (error) {
      throwError(error);  // Triggers error boundary
    }
  }
}
\`\`\`

**Senior insight:** Use async/await for readability but understand Promise mechanics for debugging. Key gotchas: unhandled rejections (always have a catch), race conditions (cleanup/cancellation), error boundaries not catching async errors. Use Promise.allSettled when you need all results regardless of individual failures. AbortController is essential for cancellable fetch operations.

---

### Q: How does JavaScript handle memory management and garbage collection?

**Answer:**

**Automatic Memory Management:**

JavaScript automatically allocates memory when objects are created and frees it when no longer needed (garbage collection).

\`\`\`javascript
// Memory allocated
let user = { name: 'John', age: 30 };
let items = [1, 2, 3, 4, 5];

// Memory released when no references exist
user = null;  // Original object can be garbage collected
items = null;
\`\`\`

**Mark-and-Sweep Algorithm:**

Modern JavaScript engines use mark-and-sweep:

1. **Mark**: Start from "roots" (global object, stack), mark all reachable objects
2. **Sweep**: Delete unmarked objects

\`\`\`javascript
// Reachable - won't be collected
let root = {
  child: {
    grandchild: { value: 1 },
  },
};

// Unreachable after reassignment
root.child = null;
// grandchild object is now unreachable → will be collected
\`\`\`

**Common Memory Leak Patterns:**

\`\`\`javascript
// 1. Forgotten timers
function startPolling() {
  setInterval(() => {
    fetchData().then(updateUI);
  }, 1000);
  // Interval never cleared → runs forever
}

// Fix: Store and clear interval
const intervalId = setInterval(...);
clearInterval(intervalId);

// 2. Event listeners not removed
function setupListener() {
  window.addEventListener('resize', handleResize);
  // Listener keeps references alive
}

// Fix: Remove on cleanup
window.removeEventListener('resize', handleResize);

// 3. Closures retaining large objects
function createHandler() {
  const hugeData = new Array(1000000).fill('data');

  return function handler() {
    console.log(hugeData.length);  // Keeps hugeData alive!
  };
}

// Fix: Only capture what's needed
function createHandler() {
  const hugeData = new Array(1000000).fill('data');
  const length = hugeData.length;

  return function handler() {
    console.log(length);  // Only captures the number
  };
}

// 4. Detached DOM nodes
let element = document.getElementById('button');
document.body.removeChild(element);
// element variable still references the detached node!
element = null;  // Now it can be collected
\`\`\`

**WeakMap and WeakSet:**

Hold "weak" references that don't prevent garbage collection.

\`\`\`javascript
// Regular Map - prevents garbage collection
const cache = new Map();
let user = { id: 1, name: 'John' };
cache.set(user, 'cached data');
user = null;  // Object still in Map → NOT collected

// WeakMap - allows garbage collection
const weakCache = new WeakMap();
let user = { id: 1, name: 'John' };
weakCache.set(user, 'cached data');
user = null;  // No strong references → CAN be collected
\`\`\`

**Use Cases for WeakMap/WeakSet:**

\`\`\`javascript
// 1. Private data for objects
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    privateData.set(this, { password });  // Private!
  }

  checkPassword(input) {
    return privateData.get(this).password === input;
  }
}

// 2. Caching computed values
const computeCache = new WeakMap();

function expensiveComputation(obj) {
  if (computeCache.has(obj)) {
    return computeCache.get(obj);
  }

  const result = /* expensive work */;
  computeCache.set(obj, result);
  return result;
}
// Cache entry automatically removed when obj is garbage collected

// 3. Tracking DOM elements
const elementData = new WeakMap();

function addData(element, data) {
  elementData.set(element, data);
}
// When element is removed from DOM and dereferenced,
// the data is also eligible for collection
\`\`\`

**React-Specific Memory Concerns:**

\`\`\`jsx
// ❌ Memory leak - subscription not cleaned up
useEffect(() => {
  const subscription = eventEmitter.subscribe(handler);
  // Missing cleanup!
}, []);

// ✅ Proper cleanup
useEffect(() => {
  const subscription = eventEmitter.subscribe(handler);
  return () => subscription.unsubscribe();
}, []);

// ❌ Memory leak - stale closure keeps old state
useEffect(() => {
  const interval = setInterval(() => {
    console.log(count);  // Closes over initial count
  }, 1000);
  return () => clearInterval(interval);
}, []);  // Empty deps = closure never updates

// ✅ Fix with ref or proper deps
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const interval = setInterval(() => {
    console.log(countRef.current);  // Always current
  }, 1000);
  return () => clearInterval(interval);
}, []);
\`\`\`

**Debugging Memory Issues:**

\`\`\`javascript
// Chrome DevTools Memory tab:
// 1. Take heap snapshot
// 2. Perform actions
// 3. Take another snapshot
// 4. Compare to find leaked objects

// Memory timeline:
// - Look for sawtooth pattern (normal GC)
// - Steadily increasing = potential leak
\`\`\`

**Senior insight:** Most memory issues in React come from: uncleaned subscriptions/timers, stale closures holding references, and storing too much in component state. Use WeakMap for caches tied to object lifetimes. Profile with Chrome DevTools Memory tab to identify leaks. The cleanup function in useEffect is your primary tool for preventing leaks in functional components.
`,ty=`## 11. Behavioral & Leadership

### Q: Tell me about a time you mentored a junior developer

**Answer Framework (STAR):**

**Situation:**
"When I joined [Company], our team had just hired two junior developers. One in particular was struggling with React patterns and was hesitant to ask questions in our large team channels."

**Task:**
"As the senior developer on the team, I took responsibility for their onboarding and growth. My goal was to get them contributing meaningfully within 3 months while building their confidence."

**Action:**
- "I scheduled weekly 1:1s specifically for technical mentoring, separate from our regular syncs"
- "I started assigning them small features in areas I was familiar with, so I could provide context-rich code reviews"
- "Instead of just fixing issues in reviews, I asked guiding questions: 'What would happen if this component re-rendered frequently?'"
- "I pair-programmed on their first complex feature, thinking aloud to model my problem-solving process"
- "When they made mistakes, I shared times I made similar ones - normalizing the learning process"

**Result:**
"Within 2 months, they were independently handling features. By month 4, they were reviewing others' PRs with insightful comments. They later told me our sessions gave them confidence to speak up in architecture discussions. I learned that mentoring isn't about having answers - it's about asking better questions."

**Senior insight:** Good mentoring answers emphasize: systematic approach, psychological safety, growth over time, what YOU learned. Avoid: vague generalities, taking credit for their success, describing only technical teaching.

---

### Q: How do you balance technical debt vs feature delivery?

**Answer:**

**Framework for Decision Making:**

\`\`\`
Evaluate debt by:
├── Impact on velocity (slowing future work?)
├── Risk (causing bugs/outages?)
├── Scope (localized or widespread?)
└── Timing (getting worse with time?)
\`\`\`

**My Approach:**

1. **Quantify the debt**: "This manual process adds 30 minutes per deployment"
2. **Tie to business outcomes**: "Refactoring auth would let us ship SSO in 2 weeks vs 6"
3. **Propose incremental paydown**: "We can refactor as we touch these files"
4. **Negotiate capacity**: "I advocate for 20% of sprint capacity for maintenance"

**Example Answer:**

"In my last role, we had a legacy payment module that was slowing every feature touching checkout. Instead of proposing a full rewrite, I:

1. **Documented the cost** - tracked time spent working around it (40+ hours/quarter)
2. **Identified the 20%** - found three core functions causing 80% of issues
3. **Proposed strangler pattern** - new features use new abstraction, gradually migrate
4. **Got buy-in** - showed PM that fixing it would accelerate Q4 roadmap

We allocated 2 weeks for the critical refactor. Feature velocity improved measurably - checkout features that took 2 sprints dropped to 1. The key was framing debt paydown as enabling business goals, not just engineering preference."

**Red Flags to Avoid:**
- "I just told them we need to fix it" (no business case)
- "We stopped features for a month" (rarely justified)
- "Technical debt is always bad" (sometimes it's strategic)

**Senior insight:** Frame technical debt discussions in business terms: velocity, risk, opportunity cost. Propose incremental approaches. Show you understand that shipping is important - debt isn't inherently bad, unmanaged debt is.

---

### Q: Describe a time you had to push back on a technical decision

**Answer Framework (STAR):**

**Situation:**
"Our team was planning a major feature, and the tech lead proposed using GraphQL to replace our REST APIs. While GraphQL has benefits, I had concerns about the timing and our team's readiness."

**Task:**
"I needed to voice my concerns constructively without derailing the project or damaging my relationship with the tech lead."

**Action:**
- "I first made sure I understood the full proposal by asking clarifying questions in the meeting"
- "Rather than objecting in the group setting, I scheduled a 1:1 with the tech lead"
- "I came prepared with specific concerns backed by data:
  - Our team had no GraphQL experience (learning curve risk)
  - We had a hard deadline in 8 weeks
  - Our existing REST APIs were stable, the pain was mainly in overfetching"
- "I proposed an alternative: use REST for the deadline, prototype GraphQL for a smaller internal tool"
- "I acknowledged the benefits of their proposal and framed my pushback as 'timing' not 'wrong'"

**Result:**
"The tech lead appreciated the thoughtful pushback. We agreed to proceed with REST for the deadline and run a GraphQL pilot afterward. The feature shipped on time. The pilot revealed GraphQL was great for our mobile app but overkill for admin tools. We eventually adopted it selectively rather than wholesale."

**Key Principles:**

| Do | Don't |
|-----|-------|
| Push back privately first | Ambush in meetings |
| Bring data and alternatives | Just say "I don't like it" |
| Focus on project success | Make it personal |
| Acknowledge valid points | Dismiss their idea entirely |
| Frame as "and" not "but" | Create winners and losers |

**Senior insight:** Good pushback requires: (1) timing - early enough to matter, (2) preparation - data and alternatives, (3) framing - about project success, not ego, (4) follow-through - own the outcome of your recommendation. The goal isn't to "win" but to make better decisions as a team.

---

### Q: How do you handle disagreements during code review?

**Answer:**

**My Philosophy:**
Code review disagreements are opportunities for learning, not battles to win. The goal is code quality and team growth, not being right.

**Approach to Disagreements:**

**1. Distinguish Preferences from Requirements:**

\`\`\`markdown
# This is a REQUIREMENT (blocking):
🔴 "This SQL query is vulnerable to injection - must use parameterized queries"

# This is a PREFERENCE (non-blocking):
🟢 "I'd name this \`getUserById\` instead of \`fetchUser\` for consistency,
    but either works. Up to you."
\`\`\`

**2. Ask Questions Before Asserting:**

\`\`\`markdown
# Instead of:
❌ "This is wrong. You should use useMemo here."

# Ask:
✅ "I'm curious about the decision not to memoize this computation.
    Have you measured whether it's a performance concern?"
\`\`\`

**3. Provide Context, Not Commands:**

\`\`\`markdown
# Instead of:
❌ "Change this to useCallback"

# Explain:
✅ "Since this callback is passed to a memoized child component,
    wrapping it in useCallback would prevent unnecessary re-renders.
    Here's the relevant docs: [link]"
\`\`\`

**When We Still Disagree:**

1. **Move to synchronous discussion** - Text loses nuance, video/call helps
2. **Timebox the debate** - "Let's discuss for 15 min, then decide"
3. **Look for objective evidence** - Benchmarks, docs, existing patterns in codebase
4. **Defer to domain expert** - If they own that area, weight their opinion higher
5. **Escalate if truly stuck** - Tech lead can break ties, but use sparingly

**Real Example:**

"In one review, a colleague used a class component with lifecycle methods. I suggested converting to hooks. They pushed back - they were more comfortable with classes. Instead of insisting, I:

1. Acknowledged classes were valid and would work
2. Asked if they'd be open to pairing on hooks conversion as a learning exercise
3. They agreed, we converted it together, and they felt ownership of the result
4. The code review became a mentoring moment instead of a conflict"

**Red Flags in Code Review Disagreements:**
- "That's how we've always done it" (not a reason)
- "I just don't like it" (need specifics)
- Multiple rounds of the same argument (need to sync live)
- Personal attacks or frustration (take a break)

**Senior insight:** The sign of a healthy team isn't zero disagreements - it's handling them constructively. If you find yourself in frequent review conflicts with the same person, address the relationship, not just the code. Often there's a communication style mismatch or missing shared context.

---

### Q: Tell me about a time you improved a process on your team

**Answer Framework (STAR):**

**Situation:**
"Our deployment process was painful. Releases happened once a week, required a 2-hour 'war room', and had a ~20% rollback rate. Engineers dreaded release day, and we couldn't ship hotfixes quickly."

**Task:**
"As a senior engineer, I wanted to reduce release friction and enable faster, safer deployments. I didn't have official authority to change the process, so I needed to build consensus."

**Action:**

1. **Gathered data:**
   - Tracked time spent on each release for a month
   - Documented common rollback causes
   - Surveyed team on pain points

2. **Identified root causes:**
   - Large batch sizes (more changes = more risk)
   - No staging environment matching production
   - Manual checklist prone to human error

3. **Proposed incremental changes:**
   - Week 1-2: Automate the deployment checklist into a CI script
   - Week 3-4: Set up production-like staging environment
   - Week 5-8: Implement feature flags for gradual rollouts
   - Week 9+: Move to daily releases

4. **Built coalition:**
   - Got DevOps lead excited about automation
   - Showed PM how faster releases helped customers
   - Addressed QA concerns about testing time

5. **Piloted before full rollout:**
   - Started with low-risk service
   - Documented improvements
   - Used success to expand

**Result:**
"Over 3 months, we moved from weekly releases to multiple daily deploys. Rollback rate dropped from 20% to under 2%. Release time went from 2 hours to 15 minutes (automated). Engineers could ship and iterate faster, improving team morale. The approach was adopted by two other teams."

**Key Learnings:**
- Start with data, not opinions
- Make change incremental, not big-bang
- Build allies before proposing formally
- Pilot before scaling

**Senior insight:** Process improvement is as much about change management as technical skills. Even good ideas fail without buy-in. Show don't tell - pilot results convince better than proposals. And always measure before/after to prove impact.

---

### Q: How do you prioritize when everything seems urgent?

**Answer:**

**My Framework:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Priority Matrix                           │
│                                                             │
│        │ URGENT              │ NOT URGENT            │
│ ───────┼─────────────────────┼───────────────────────│
│ HIGH   │ 1. DO NOW           │ 2. SCHEDULE           │
│ IMPACT │ Production outages, │ Architecture work,    │
│        │ security issues,    │ tech debt, mentoring  │
│        │ blocked teammates   │                       │
│ ───────┼─────────────────────┼───────────────────────│
│ LOW    │ 3. DELEGATE/QUICK   │ 4. QUESTION/DROP      │
│ IMPACT │ Minor bugs, quick   │ Nice-to-haves,        │
│        │ requests            │ premature optimization│
└─────────────────────────────────────────────────────────────┘
\`\`\`

**My Process:**

**1. Clarify actual urgency:**
"When someone says something is urgent, I ask: 'What breaks if this isn't done today? This week?' Often 'urgent' really means 'important to me right now.'"

**2. Identify dependencies:**
"If my work unblocks 3 other engineers, that jumps priority even if it's not the 'biggest' task."

**3. Communicate trade-offs:**
"I tell stakeholders: 'I can do A or B by Friday, not both. Which matters more?' Making them choose reveals true priority."

**4. Protect focus time:**
"I batch interruptions. Check Slack at 9am, 1pm, 4pm - not constantly. Real emergencies will reach me."

**Example:**

"Last quarter, I had three 'top priorities' from three different stakeholders:
- PM wanted feature X for a customer demo
- Engineering Manager wanted critical bug fixed
- Another team needed code review blocking their release

I:
1. Asked PM when the demo was (3 days away - actual deadline)
2. Assessed the bug - affecting 5% of users, had workaround (high but not P0)
3. Estimated code review would take 1 hour

Decision: Code review first (quick win, unblocked a team), then bug (had workaround), then feature (delivered day before demo). Communicated plan to all three, got buy-in."

**When Everything is Truly Urgent:**

1. **Escalate** - "Manager, I have three P0s. Help me prioritize."
2. **Ask for help** - "Can someone pair on this to parallelize?"
3. **Reduce scope** - "Can we ship 80% now, 20% next week?"
4. **Say no** - "If we do X, Y won't happen. Is that acceptable?"

**Red Flags:**
- Everything labeled P0 (nothing is prioritized)
- Afraid to push back (unsustainable)
- Working on what's loudest, not most important (reactive mode)

**Senior insight:** Prioritization is a leadership skill, not just productivity. Senior engineers protect team focus by being the 'filter' - saying no to low-impact urgent requests, ensuring high-impact work doesn't get crowded out. If you can't prioritize, you're being prioritized by whoever asks last.
`,ay=`## 12. Code Review & Quality

### Q: What do you look for in a code review?

**Answer:**

**Priority Order:**

1. **Correctness** - Does it solve the problem? Edge cases?
2. **Security** - Injection, XSS, sensitive data exposure?
3. **Architecture** - Right abstraction level? Fits existing patterns?
4. **Performance** - O(n²) loops? Unnecessary re-renders?
5. **Readability** - Can others understand it in 6 months?
6. **Tests** - Adequate coverage? Testing behavior not implementation?

**My Review Process:**

\`\`\`
1. Read the PR description and linked ticket first
2. Check the test file - understand intended behavior
3. Review main logic changes
4. Look at integration points (API calls, state changes)
5. Consider what's NOT there (error handling, edge cases)
\`\`\`

**Types of Comments:**

\`\`\`markdown
# Must fix (blocking)
🔴 **Security**: User input passed directly to SQL query

# Should fix (non-blocking)
🟡 **Performance**: This filters on every render. Consider useMemo

# Consider (optional)
🟢 **Suggestion**: Could extract this into a custom hook for reuse

# Praise
✨ Nice use of discriminated unions here!

# Question (not a criticism)
❓ What happens if the API returns empty array?
\`\`\`

**What I DON'T Nitpick:**

- Style issues (should be automated by Prettier/ESLint)
- Personal preferences with no measurable impact
- Things outside the PR's scope
- Minor naming preferences (unless genuinely confusing)

**Senior insight:** Great code reviews balance thoroughness with velocity. Block on security/correctness, suggest on patterns/performance, let go of style. Always acknowledge good work - reviews shouldn't only be critical. Ask questions when unsure rather than demanding changes.

---

### Q: What is XSS and how do you prevent it in React?

**Answer:**

**XSS (Cross-Site Scripting)** = Attacker injects malicious scripts that execute in users' browsers.

**React's Built-in Protection:**

\`\`\`jsx
// ✅ Safe - React escapes this automatically
const userInput = '<script>alert("hacked")<\/script>';
return <div>{userInput}</div>;
// Renders as text: <script>alert("hacked")<\/script>
\`\`\`

**The Danger: dangerouslySetInnerHTML:**

\`\`\`jsx
// ❌ DANGEROUS - Executes injected scripts
const userInput = '<img src=x onerror=alert("XSS")>';
return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
// XSS vulnerability!

// ✅ Safe - Sanitize first
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
\`\`\`

**Other XSS Vectors in React:**

\`\`\`jsx
// ❌ href with javascript: protocol
const userUrl = 'javascript:alert("XSS")';
<a href={userUrl}>Click</a>  // Executes on click!

// ✅ Validate URLs
const isValidUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

// ❌ Injecting into script tags
<script>{userInput}<\/script>  // Never do this

// ❌ eval() with user input
eval(userInput);  // Never do this
\`\`\`

**Prevention Checklist:**

1. **Trust React's escaping** - Don't bypass it unnecessarily
2. **Sanitize HTML** - Use DOMPurify for user-generated HTML
3. **Validate URLs** - Check protocol before using in href/src
4. **Content-Security-Policy** - HTTP header to restrict script sources
5. **HttpOnly cookies** - Prevent JS access to session cookies
6. **Avoid \`dangerouslySetInnerHTML\`** - Use only with sanitized content

\`\`\`jsx
// CSP Header example
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123'
\`\`\`

**Senior insight:** React handles 90% of XSS prevention automatically. The remaining 10% requires vigilance: sanitizing HTML, validating URLs, avoiding eval/new Function, and setting proper CSP headers. Review any use of \`dangerouslySetInnerHTML\` carefully.

---

### Q: How do you approach refactoring a legacy React codebase?

**Answer:**

Refactoring legacy code requires balancing improvement with risk mitigation.

**Assessment Phase:**

\`\`\`markdown
## Legacy Codebase Audit

### 1. Understand Current State
- [ ] Map component hierarchy
- [ ] Identify shared state patterns
- [ ] Check test coverage
- [ ] List known pain points from team

### 2. Categorize Code Quality
HIGH RISK (refactor carefully):
- Payment/checkout flows
- Authentication
- Data mutations

MEDIUM RISK (opportunistic refactor):
- Dashboard components
- Settings pages
- Read-only displays

LOW RISK (refactor freely):
- Utility functions
- Styling/layout
- Static pages
\`\`\`

**Strategy: Strangler Fig Pattern**

\`\`\`jsx
// Instead of rewriting everything, gradually replace

// 1. Identify boundary
// Old: Class component with complex state
class LegacyUserList extends React.Component {
  state = { users: [], filter: '', sortBy: 'name' };
  // ... hundreds of lines
}

// 2. Create new implementation alongside
function UserList() {
  const { users, isLoading } = useUsers();
  const [filter, setFilter] = useState('');
  // Clean hooks-based implementation
}

// 3. Feature flag the switch
function UserListWrapper(props) {
  const useNewUserList = useFeatureFlag('newUserList');

  if (useNewUserList) {
    return <UserList {...props} />;
  }
  return <LegacyUserList {...props} />;
}

// 4. Gradually roll out, then remove legacy
\`\`\`

**Class to Hooks Migration:**

\`\`\`jsx
// Before: Class component
class Counter extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    document.title = \`Count: \${this.state.count}\`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = \`Count: \${this.state.count}\`;
    }
  }

  handleIncrement = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleIncrement}>
        Count: {this.state.count}
      </button>
    );
  }
}

// After: Functional component with hooks
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

**Refactoring Order:**

\`\`\`
1. Add/improve tests for current behavior
   ↓
2. Extract shared logic to custom hooks
   ↓
3. Simplify component hierarchy
   ↓
4. Migrate class → functional components
   ↓
5. Adopt modern patterns (React Query, etc.)
   ↓
6. Clean up deprecated patterns
\`\`\`

**Safe Refactoring Techniques:**

\`\`\`jsx
// 1. Extract, don't rewrite
// Pull logic into hooks, keep component structure initially
function useLegacyUserData() {
  // Extract existing logic verbatim first
  // Then improve incrementally
}

// 2. Parallel implementations
// Run old and new code, compare outputs
function ParallelTest({ userId }) {
  const oldResult = useLegacyFetch(userId);
  const newResult = useNewFetch(userId);

  useEffect(() => {
    if (!isEqual(oldResult.data, newResult.data)) {
      logDiscrepancy('user-fetch', oldResult, newResult);
    }
  }, [oldResult, newResult]);

  return <UserDisplay data={newResult.data} />;
}

// 3. Type gradually
// Add TypeScript types incrementally
// @ts-check
/** @type {User | null} */
let user = null;
\`\`\`

**Common Legacy Patterns to Modernize:**

| Legacy Pattern | Modern Alternative |
|---------------|-------------------|
| HOCs for data | Custom hooks |
| Render props | Custom hooks |
| Redux connect | useSelector/useDispatch |
| componentDidMount | useEffect |
| this.setState callback | useEffect |
| PropTypes | TypeScript |
| Class components | Function + hooks |

**Measuring Success:**

\`\`\`typescript
// Track metrics before/after
interface RefactorMetrics {
  // Code health
  bundleSize: number;
  testCoverage: number;
  typeScriptCoverage: number;

  // Developer experience
  buildTime: number;
  prCycleTime: number;

  // Runtime
  errorRate: number;
  performanceMetrics: WebVitals;
}
\`\`\`

**Senior insight:** The biggest risk in refactoring is breaking production with insufficient testing. Always: (1) add tests before changing behavior, (2) make atomic, reversible changes, (3) use feature flags for gradual rollout, (4) have rollback plan. Don't refactor for refactoring's sake - tie improvements to measurable outcomes (velocity, bugs, performance).

---

### Q: What static analysis tools do you use in React projects and why?

**Answer:**

Static analysis catches errors before runtime. A good toolchain includes linting, type checking, and formatting.

**Essential Tools:**

| Tool | Purpose | Catches |
|------|---------|---------|
| ESLint | Code quality | Bugs, bad practices |
| TypeScript | Type safety | Type mismatches, null errors |
| Prettier | Formatting | Style inconsistencies |
| Husky + lint-staged | Git hooks | Pre-commit checks |

**ESLint Configuration for React:**

\`\`\`javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',  // Accessibility
    'prettier',  // Disables formatting rules
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // React Hooks - CRITICAL
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Prevent common bugs
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Import organization
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],

    // React specific
    'react/jsx-no-leaked-render': 'error',  // Prevents {0 && <X />}
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
  },
};
\`\`\`

**TypeScript Configuration:**

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    // Strict mode catches more errors
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    // React
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "esnext"],

    // Module resolution
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "resolveJsonModule": true,

    // Output
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
\`\`\`

**Pre-commit Hooks:**

\`\`\`javascript
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css}": [
      "prettier --write"
    ]
  }
}

// .husky/pre-commit
#!/bin/sh
npx lint-staged
\`\`\`

**CI Pipeline Integration:**

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm run test -- --coverage

      - name: Build
        run: npm run build
\`\`\`

**Additional Useful Rules:**

\`\`\`javascript
// Custom ESLint rules for React projects
{
  // Prevent common mistakes
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/no-unstable-nested-components': 'error',

  // Enforce best practices
  'react/function-component-definition': [
    'error',
    { namedComponents: 'function-declaration' }
  ],

  // TypeScript specific
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/await-thenable': 'error',

  // Performance hints
  'react/jsx-no-bind': [
    'warn',
    {
      allowArrowFunctions: true,
      allowFunctions: false,
    }
  ],
}
\`\`\`

**Bundle Analysis:**

\`\`\`bash
# Add to package.json scripts
"analyze": "ANALYZE=true npm run build"

# webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.ANALYZE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}
\`\`\`

**Editor Integration (VS Code):**

\`\`\`json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
\`\`\`

**Senior insight:** Static analysis ROI is highest when: (1) rules are strict but not noisy (too many warnings = ignored), (2) integrated into editor AND CI (immediate feedback + gate), (3) team has buy-in (discuss rules together). \`react-hooks/exhaustive-deps\` alone catches 80% of hooks bugs. Stricter TypeScript settings (\`strict: true\`, \`noUncheckedIndexedAccess\`) significantly reduce runtime errors.
`,sy=`## 13. React 19 & Latest Features

### Q: What are the major new features in React 19?

**Answer:**

React 19 is the biggest update since Hooks. Key features:

**1. React Compiler (Auto-memoization):**
\`\`\`jsx
// Before React 19 - Manual optimization
const MemoizedComponent = React.memo(({ data }) => {
  const processed = useMemo(() => expensiveCalc(data), [data]);
  const handleClick = useCallback(() => {}, []);
  return <div onClick={handleClick}>{processed}</div>;
});

// React 19 - Compiler handles it automatically
function Component({ data }) {
  const processed = expensiveCalc(data);  // Auto-memoized!
  const handleClick = () => {};            // Auto-memoized!
  return <div onClick={handleClick}>{processed}</div>;
}
\`\`\`

**2. Actions - Simplified Async State:**
\`\`\`jsx
// New useActionState hook
function UpdateName() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get('name'));
      if (error) return error;
      redirect('/profile');
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" />
      <button disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}
\`\`\`

**3. useOptimistic Hook:**
\`\`\`jsx
function LikeButton({ initialLikes, postId }) {
  const [likes, setLikes] = useState(initialLikes);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (current, increment) => current + increment
  );

  async function handleLike() {
    addOptimisticLike(1);  // Instant UI update
    await api.likePost(postId);  // Actual request
    setLikes(l => l + 1);
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}
\`\`\`

**4. useFormStatus Hook:**
\`\`\`jsx
// Access form state from child components
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton />  {/* Knows form is pending! */}
    </form>
  );
}
\`\`\`

**5. use() API - Conditional Resource Reading:**
\`\`\`jsx
// Can call inside conditionals! (unlike hooks)
function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);  // Suspends until resolved

  return comments.map(c => <Comment key={c.id} {...c} />);
}

// Also works with context
function ThemeButton() {
  if (someCondition) {
    const theme = use(ThemeContext);  // ✅ Works in conditionals
    return <button className={theme}>Click</button>;
  }
  return null;
}
\`\`\`

**6. Document Metadata Support:**
\`\`\`jsx
// Metadata hoisted automatically
function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={post.url} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

**7. ref as a Prop (No forwardRef needed):**
\`\`\`jsx
// React 19 - ref is just a prop
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Before React 19
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
\`\`\`

**Senior insight:** React 19's compiler reduces manual optimization needs by 90%. The Actions API moves React toward progressive enhancement - forms work without JS. Evaluate adoption based on ecosystem readiness (libraries, tooling).

---

### Q: How does the React Compiler work?

**Answer:**

The React Compiler (previously "React Forget") automatically adds memoization at build time.

**What It Does:**

\`\`\`jsx
// Your code
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = product.price * 0.9;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>\${discountedPrice}</p>
      <button onClick={() => onAddToCart(product.id)}>Add</button>
    </div>
  );
}

// Compiler output (conceptually)
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = useMemo(
    () => product.price * 0.9,
    [product.price]
  );

  const handleClick = useCallback(
    () => onAddToCart(product.id),
    [onAddToCart, product.id]
  );

  return useMemo(() => (
    <div>
      <h2>{product.name}</h2>
      <p>\${discountedPrice}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  ), [product.name, discountedPrice, handleClick]);
}
\`\`\`

**Rules It Enforces:**

The compiler relies on React's rules:
1. Components must be pure (same props → same output)
2. Props/state are immutable
3. Side effects only in useEffect

\`\`\`jsx
// ❌ Compiler can't optimize - mutation
function BadComponent({ items }) {
  items.sort();  // Mutates prop!
  return <List items={items} />;
}

// ✅ Compiler-friendly
function GoodComponent({ items }) {
  const sorted = [...items].sort();  // New array
  return <List items={sorted} />;
}
\`\`\`

**Opting Out:**

\`\`\`jsx
// Disable for specific component
'use no memo';
function UnoptimizedComponent() { ... }

// Or via eslint directive
/* eslint-disable react-compiler/react-compiler */
\`\`\`

**Senior insight:** The compiler doesn't replace understanding memoization - it automates the boring parts. You still need to understand why mutations break React, why referential equality matters, and when to use refs vs state.

---

### Q: What are Server Actions in React 19?

**Answer:**

**Server Actions** are async functions that run on the server, called directly from client components.

\`\`\`jsx
// app/actions.js
'use server';

export async function createTodo(formData) {
  const title = formData.get('title');

  await db.todos.create({ title });
  revalidatePath('/todos');

  return { success: true };
}

// app/page.jsx (Client Component)
'use client';

import { createTodo } from './actions';

function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
\`\`\`

**How It Works:**

1. \`'use server'\` marks function as server action
2. React serializes form data, sends to server
3. Server executes function, returns result
4. React handles revalidation/redirect

**With useActionState:**

\`\`\`jsx
'use client';

import { useActionState } from 'react';
import { createTodo } from './actions';

function TodoForm() {
  const [state, formAction, isPending] = useActionState(createTodo, null);

  return (
    <form action={formAction}>
      <input name="title" required />
      <button disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {state?.error && <p className="error">{state.error}</p>}
    </form>
  );
}
\`\`\`

**Validation Pattern:**

\`\`\`jsx
'use server';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signup(prevState, formData) {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // Create user...
  redirect('/dashboard');
}
\`\`\`

**Senior insight:** Server Actions eliminate API route boilerplate for mutations. They're not a replacement for REST/GraphQL APIs - they're for form submissions and simple mutations within your Next.js app. Be mindful of payload size limits.
`,ry=`## 14. Accessibility (A11y)

### Q: What accessibility concerns are important in React applications?

**Answer:**

**Core Principles (POUR):**
- **Perceivable** - Content available to all senses
- **Operable** - All functionality via keyboard/assistive tech
- **Understandable** - Clear, predictable interface
- **Robust** - Works with current/future assistive technologies

**React-Specific Concerns:**

**1. Semantic HTML:**
\`\`\`jsx
// ❌ Div soup
<div onClick={handleClick}>Click me</div>
<div className="heading">Title</div>

// ✅ Semantic elements
<button onClick={handleClick}>Click me</button>
<h1>Title</h1>
\`\`\`

**2. Focus Management in SPAs:**
\`\`\`jsx
// After route change, focus should move to main content
function Page() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main>
      <h1 ref={headingRef} tabIndex={-1}>Page Title</h1>
      {/* Content */}
    </main>
  );
}
\`\`\`

**3. ARIA for Custom Components:**
\`\`\`jsx
// Custom dropdown needs ARIA
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || 'Select...'}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-activedescendant={\`option-\${activeIndex}\`}
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              id={\`option-\${i}\`}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

**4. Live Regions for Dynamic Content:**
\`\`\`jsx
function Notifications() {
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Screen readers announce changes */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </div>

      {/* For urgent announcements */}
      <div
        role="alert"
        aria-live="assertive"
      >
        {urgentMessage}
      </div>
    </>
  );
}
\`\`\`

**5. Keyboard Navigation:**
\`\`\`jsx
function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
        setActiveTab((prev) => (prev + 1) % tabs.length);
        break;
      case 'ArrowLeft':
        setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
        break;
      case 'Home':
        setActiveTab(0);
        break;
      case 'End':
        setActiveTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div role="tablist" onKeyDown={handleKeyDown}>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={i === activeTab}
          tabIndex={i === activeTab ? 0 : -1}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
\`\`\`

**Testing Tools:**

\`\`\`bash
# ESLint plugin (catches issues during development)
npm install eslint-plugin-jsx-a11y

# Automated testing
npm install @axe-core/react  # Runtime warnings in dev
npm install jest-axe          # Jest assertions
\`\`\`

\`\`\`jsx
// jest-axe example
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('form is accessible', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`

**Senior insight:** Accessibility isn't optional - it's a legal requirement (ADA, WCAG 2.1 AA). Build it in from the start - retrofitting is expensive. Use native elements when possible; only reach for ARIA when building truly custom interactions.

---

### Q: How do you handle focus management in React SPAs?

**Answer:**

SPAs break the browser's natural focus behavior on navigation. You need to manage it manually.

**Problem:**
\`\`\`jsx
// User clicks link, content changes, but focus stays on link
// Screen reader users don't know content changed
\`\`\`

**Solution 1: Focus Main Content on Route Change:**
\`\`\`jsx
// Layout component
function Layout({ children }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Focus main content on route change
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <nav>...</nav>
      <main ref={mainRef} tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
\`\`\`

**Solution 2: Announce Route Changes:**
\`\`\`jsx
function RouteAnnouncer() {
  const [announcement, setAnnouncement] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get page title or derive from route
    const pageTitle = document.title;
    setAnnouncement(\`Navigated to \${pageTitle}\`);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      className="sr-only"  // Visually hidden
    >
      {announcement}
    </div>
  );
}
\`\`\`

**Solution 3: Focus Trapping in Modals:**
\`\`\`jsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocus.current = document.activeElement;
      // Focus modal
      modalRef.current?.focus();
    } else {
      // Restore focus on close
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    if (e.key === 'Escape') onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
\`\`\`

**Using Focus-Trap Library:**
\`\`\`jsx
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div role="dialog" aria-modal="true">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </FocusTrap>
  );
}
\`\`\`

**Senior insight:** Focus management is critical for keyboard/screen reader users. Test with keyboard-only navigation. Libraries like \`@radix-ui/react-dialog\` and \`react-aria\` handle focus management properly - use them for complex components.

---

### Q: How do you test accessibility in React applications?

**Answer:**

Accessibility testing combines automated tools, manual testing, and assistive technology verification.

**1. Automated Testing with jest-axe:**

\`\`\`jsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <button aria-label="Submit form">Submit</button>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('detects missing button text', async () => {
    const { container } = render(
      <button><Icon name="check" /></button>  // No accessible name!
    );

    const results = await axe(container);
    expect(results.violations).toHaveLength(1);
    expect(results.violations[0].id).toBe('button-name');
  });
});
\`\`\`

**2. Testing with React Testing Library (A11y First):**

\`\`\`jsx
import { render, screen } from '@testing-library/react';

test('form inputs have associated labels', () => {
  render(<LoginForm />);

  // getByLabelText ensures label-input association
  const emailInput = screen.getByLabelText('Email address');
  const passwordInput = screen.getByLabelText('Password');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('errors are announced to screen readers', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);

  await user.click(screen.getByRole('button', { name: 'Submit' }));

  // Check error is in accessible role
  const error = await screen.findByRole('alert');
  expect(error).toHaveTextContent('Email is required');
});

test('modal can be operated with keyboard', async () => {
  const user = userEvent.setup();
  render(<ModalWithTrigger />);

  // Open with Enter key
  await user.tab();
  await user.keyboard('{Enter}');

  const dialog = await screen.findByRole('dialog');
  expect(dialog).toBeVisible();

  // Close with Escape
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
\`\`\`

**3. Storybook + A11y Addon:**

\`\`\`jsx
// .storybook/main.js
module.exports = {
  addons: ['@storybook/addon-a11y'],
};

// Button.stories.tsx
export const Primary = {
  args: { children: 'Click me' },
};

// A11y panel shows violations directly in Storybook
\`\`\`

**4. E2E Testing with Playwright:**

\`\`\`javascript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Enable accessibility scanning
    actionTimeout: 10000,
  },
});

// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('form with violations', async ({ page }) => {
  await page.goto('/contact');

  const results = await new AxeBuilder({ page })
    .include('#contact-form')
    .analyze();

  // Check for specific rule
  const colorContrastViolations = results.violations.filter(
    v => v.id === 'color-contrast'
  );
  expect(colorContrastViolations).toHaveLength(0);
});
\`\`\`

**5. Manual Testing Checklist:**

| Test | How |
|------|-----|
| Keyboard navigation | Tab through entire page, check focus visible |
| Skip links | First Tab should offer "Skip to content" |
| Focus trapping | Can't Tab out of modals |
| Color contrast | Use browser devtools or extensions |
| Zoom to 200% | Layout shouldn't break |
| Screen reader | Test with VoiceOver/NVDA |
| Reduced motion | Test with \`prefers-reduced-motion\` |

**6. Screen Reader Testing:**

\`\`\`jsx
// Key things to verify with screen reader:

// 1. Headings create outline
// VoiceOver: Ctrl+Opt+U → Headers
// NVDA: H to navigate by heading

// 2. Forms announce properly
// "Email, required, text field"
// "Password, required, password field"

// 3. Dynamic content announced
<div role="status" aria-live="polite">
  {message} {/* Screen reader announces when changed */}
</div>

// 4. Images have alt text
<img src="chart.png" alt="Sales increased 50% in Q4" />
\`\`\`

**CI Integration:**

\`\`\`yaml
# .github/workflows/a11y.yml
jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test:a11y  # jest with jest-axe
      - run: npx playwright test tests/accessibility/
\`\`\`

**Senior insight:** Automated tools catch ~30-40% of issues (missing labels, color contrast, invalid ARIA). Manual testing catches context-dependent issues (confusing flow, poor announcements). Test with real users of assistive tech when possible. Make a11y part of Definition of Done, not an afterthought.

---

### Q: Explain ARIA roles and when you would use custom roles vs semantic HTML

**Answer:**

**The First Rule of ARIA:** Don't use ARIA if native HTML works.

\`\`\`jsx
// ❌ Unnecessary ARIA
<div role="button" tabIndex={0} onClick={handleClick}>
  Click me
</div>

// ✅ Just use a button
<button onClick={handleClick}>
  Click me
</button>
\`\`\`

**When Semantic HTML Isn't Enough:**

**1. Custom interactive components:**

\`\`\`jsx
// Tabs - no native HTML equivalent
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div role="tablist">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === i}
          aria-controls={\`panel-\${tab.id}\`}
          onClick={() => onChange(i)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabPanel({ id, hidden, children }) {
  return (
    <div
      role="tabpanel"
      id={\`panel-\${id}\`}
      aria-labelledby={\`tab-\${id}\`}
      hidden={hidden}
    >
      {children}
    </div>
  );
}
\`\`\`

**2. Dynamic content announcements:**

\`\`\`jsx
// Live regions announce changes to screen readers
function Notification({ message }) {
  return (
    <div
      role="status"      // Polite announcement
      aria-live="polite" // Wait for pause to announce
    >
      {message}
    </div>
  );
}

function Alert({ message }) {
  return (
    <div
      role="alert"       // Assertive - announces immediately
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
\`\`\`

**3. Relationships that HTML can't express:**

\`\`\`jsx
// Describing what controls what
<button aria-controls="menu-dropdown" aria-expanded={isOpen}>
  Menu
</button>

<ul id="menu-dropdown" aria-labelledby="menu-button">
  {/* Menu items */}
</ul>

// Describing progress
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Upload progress"
/>

// Grouping with description
<fieldset>
  <legend id="payment-legend">Payment method</legend>
  <div role="group" aria-labelledby="payment-legend">
    {/* Radio buttons */}
  </div>
</fieldset>
\`\`\`

**Common ARIA Patterns:**

| Use Case | Role/Attribute | Example |
|----------|---------------|---------|
| Expandable content | aria-expanded | Accordion, dropdown |
| Loading state | aria-busy | Form submitting |
| Current page | aria-current="page" | Navigation |
| Required field | aria-required | Form inputs |
| Invalid field | aria-invalid | Form validation |
| Descriptions | aria-describedby | Help text |
| Hidden but readable | aria-hidden="false" | Icon + label |
| Hidden from a11y | aria-hidden="true" | Decorative icons |

**role="presentation" vs aria-hidden:**

\`\`\`jsx
// role="presentation" - removes semantic meaning
// Still visible and in tab order
<table role="presentation">
  {/* Layout table, not data table */}
</table>

// aria-hidden="true" - hides from assistive tech
// Still visible but not announced
<span aria-hidden="true">★</span>
<span className="sr-only">Rated 4 stars</span>
\`\`\`

**When NOT to Use Custom Roles:**

\`\`\`jsx
// ❌ Wrong: role on wrong element
<span role="heading" aria-level="2">Title</span>
// ✅ Just use h2
<h2>Title</h2>

// ❌ Wrong: redundant role
<button role="button">Click</button>
// ✅ Button already has implicit role
<button>Click</button>

// ❌ Wrong: misusing landmark roles
<div role="main">
  <div role="main">  {/* Only one main per page! */}
  </div>
</div>
\`\`\`

**The ARIA Authoring Practices Guide:**

\`\`\`jsx
// For complex widgets, follow WAI-ARIA Authoring Practices
// https://www.w3.org/WAI/ARIA/apg/patterns/

// Example: Combobox with listbox pattern
<input
  role="combobox"
  aria-expanded={isOpen}
  aria-controls="suggestions"
  aria-autocomplete="list"
  aria-activedescendant={activeId}
/>
<ul id="suggestions" role="listbox">
  {suggestions.map(s => (
    <li role="option" id={s.id} aria-selected={s.id === activeId}>
      {s.label}
    </li>
  ))}
</ul>
\`\`\`

**Senior insight:** ARIA fixes accessibility gaps in HTML, but wrong ARIA is worse than no ARIA. Native HTML elements have built-in behaviors (keyboard support, focus management) that ARIA roles don't provide - you must implement them yourself. When building complex widgets, use the WAI-ARIA Authoring Practices Guide or adopt libraries like Radix UI, Headless UI, or React Aria that implement patterns correctly.

---

### Q: How do you handle accessible forms in React?

**Answer:**

Accessible forms ensure all users can understand, navigate, and complete forms successfully.

**1. Label Association:**

\`\`\`jsx
// ✅ Explicit association with htmlFor
<label htmlFor="email">Email address</label>
<input id="email" type="email" />

// ✅ Implicit association (wrapping)
<label>
  Email address
  <input type="email" />
</label>

// ✅ aria-labelledby for complex labels
<span id="card-label">Credit card number</span>
<span id="card-format">(1234 5678 9012 3456)</span>
<input aria-labelledby="card-label card-format" />

// ✅ aria-label for visually hidden labels
<input
  aria-label="Search products"
  placeholder="Search..."
  type="search"
/>
\`\`\`

**2. Required Fields:**

\`\`\`jsx
// Use both visual and semantic indicators
<label htmlFor="email">
  Email address
  <span aria-hidden="true" className="required">*</span>
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  required
/>

// Or in the label itself
<label htmlFor="phone">
  Phone number (required)
</label>
\`\`\`

**3. Error Handling:**

\`\`\`jsx
function FormField({ label, error, ...inputProps }) {
  const inputId = useId();
  const errorId = \`\${inputId}-error\`;

  return (
    <div className="form-field">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}

// Form-level errors should also be announced
function Form() {
  const [formError, setFormError] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <div role="alert" className="form-error">
          {formError}
        </div>
      )}

      <FormField
        label="Email"
        name="email"
        error={errors.email}
      />
      {/* ... */}
    </form>
  );
}
\`\`\`

**4. Help Text and Instructions:**

\`\`\`jsx
// Use aria-describedby for additional context
<label htmlFor="password">Password</label>
<input
  id="password"
  type="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements" className="help-text">
  Must be at least 8 characters with one number and one special character.
</p>
\`\`\`

**5. Fieldsets for Groups:**

\`\`\`jsx
// Group related inputs with fieldset and legend
<fieldset>
  <legend>Shipping Address</legend>

  <FormField label="Street" name="street" />
  <FormField label="City" name="city" />
  <FormField label="ZIP Code" name="zip" />
</fieldset>

// For radio/checkbox groups
<fieldset>
  <legend>Preferred contact method</legend>

  <label>
    <input type="radio" name="contact" value="email" />
    Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone" />
    Phone
  </label>
</fieldset>
\`\`\`

**6. Focus Management on Errors:**

\`\`\`jsx
function Form() {
  const firstErrorRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      // Focus first error field
      firstErrorRef.current?.focus();
      // Or focus error summary
      document.getElementById('error-summary')?.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {hasErrors && (
        <div id="error-summary" tabIndex={-1} role="alert">
          <h2>Please fix the following errors:</h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={\`#\${field}\`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* ... */}
    </form>
  );
}
\`\`\`

**7. Loading and Disabled States:**

\`\`\`jsx
<button
  type="submit"
  disabled={isSubmitting}
  aria-disabled={isSubmitting}
  aria-busy={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

// For the whole form
<form aria-busy={isSubmitting}>
  {/* ... */}
</form>
\`\`\`

**8. Autocomplete Attributes:**

\`\`\`jsx
// Help password managers and autofill
<input type="email" autoComplete="email" />
<input type="password" autoComplete="current-password" />
<input type="password" autoComplete="new-password" />
<input type="text" autoComplete="name" />
<input type="tel" autoComplete="tel" />
<input type="text" autoComplete="address-line1" />
\`\`\`

**Complete Accessible Form Example:**

\`\`\`jsx
function ContactForm() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorSummaryRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      errorSummaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    await submitForm(formData);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={isSubmitting} noValidate>
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-heading"
        >
          <h2 id="error-heading">There were errors with your submission</h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={\`#\${field}\`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <FormField
        id="name"
        label="Full name"
        required
        autoComplete="name"
        error={errors.name}
      />

      <FormField
        id="email"
        label="Email address"
        type="email"
        required
        autoComplete="email"
        error={errors.email}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
\`\`\`

**Senior insight:** Common form a11y failures: missing labels, errors not announced, errors without programmatic association, and no focus management after validation. Use \`noValidate\` with custom validation for consistent UX, but ensure your validation is more accessible than native browser validation. Test with screen reader to ensure error announcements work.
`,iy=`## 15. Advanced Component Patterns

### Q: Explain the Compound Components pattern

**Answer:**

**Compound Components** create related components that share implicit state, providing a declarative API similar to HTML's \`<select>\` and \`<option>\`.

**Example - Tabs Component:**

\`\`\`jsx
const TabsContext = createContext(null);

function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div role="tablist">{children}</div>;
}

function Tab({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={isActive ? 'active' : ''}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;
  return <div role="tabpanel">{children}</div>;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

// Usage - Clean, declarative API!
function App() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Security</Tabs.Tab>
        <Tabs.Tab value="tab3">Billing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel value="tab1">Account settings...</Tabs.Panel>
        <Tabs.Panel value="tab2">Security settings...</Tabs.Panel>
        <Tabs.Panel value="tab3">Billing info...</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
\`\`\`

**Benefits:**

1. **Implicit state sharing** - No prop drilling
2. **Flexible structure** - Users control layout
3. **Encapsulation** - Internal state hidden
4. **Intuitive API** - Mirrors native HTML patterns

**Advanced: With Slots Pattern:**

\`\`\`jsx
function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Find child by type
  const tabList = Children.toArray(children).find(
    child => child.type === TabList
  );
  const tabPanels = Children.toArray(children).find(
    child => child.type === TabPanels
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">
        {tabList}
        {tabPanels}
      </div>
    </TabsContext.Provider>
  );
}
\`\`\`

**Senior insight:** Compound components shine in design systems. They're more flexible than prop-based APIs but require more code. Use them when: (1) components must work together, (2) consumers need layout flexibility, (3) you're building reusable UI libraries.

---

### Q: When would you use Render Props vs Hooks?

**Answer:**

Both patterns share stateful logic, but hooks are generally preferred today.

**Render Props Pattern:**

\`\`\`jsx
// Render prop component
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => <p>Mouse: {x}, {y}</p>}
    />
  );
}
\`\`\`

**Hook Equivalent:**

\`\`\`jsx
// Custom hook
function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

// Usage
function App() {
  const { x, y } = useMouse();
  return <p>Mouse: {x}, {y}</p>;
}
\`\`\`

**When to Still Use Render Props:**

\`\`\`jsx
// 1. When you need to wrap JSX
function List({ items, renderItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {renderItem(item, index)}  {/* Flexible item rendering */}
        </li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={users}
  renderItem={(user) => <UserCard user={user} />}
/>

// 2. Conditional rendering based on state
function Fetch({ url, children }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return children(data);  // Only call when data ready
}

<Fetch url="/api/user">
  {(user) => <Profile user={user} />}
</Fetch>
\`\`\`

**Comparison:**

| Aspect | Hooks | Render Props |
|--------|-------|--------------|
| Syntax | Cleaner | More verbose |
| Nesting | Flat | Can get nested |
| Flexibility | Logic only | Can control JSX structure |
| Performance | Slightly better | Extra function call |
| Use in class components | ❌ | ✅ |

**Senior insight:** Default to hooks for logic reuse. Use render props when you need to: (1) customize how children are rendered, (2) support class components, (3) provide data that controls conditional rendering of JSX. Libraries like Downshift and React Table still use render props for flexibility.

---

### Q: What is the Provider Pattern and how do you optimize it?

**Answer:**

The **Provider Pattern** uses React Context to share state without prop drilling.

**Basic Implementation:**

\`\`\`jsx
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(setUser).finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const user = await api.login(credentials);
    setUser(user);
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
\`\`\`

**Problem: Unnecessary Re-renders:**

\`\`\`jsx
// ❌ Every consumer re-renders when ANY value changes
const value = { user, login, logout, theme, settings };

function ThemeToggle() {
  const { theme } = useContext(AppContext);
  // Re-renders when user changes, even though it only uses theme!
}
\`\`\`

**Optimization 1: Split Contexts:**

\`\`\`jsx
// ✅ Separate contexts for different concerns
const UserContext = createContext(null);
const ThemeContext = createContext(null);
const ActionsContext = createContext(null);

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Actions don't change - stable reference
  const actions = useMemo(() => ({
    login: async (creds) => { /* ... */ },
    logout: async () => { /* ... */ },
    setTheme,
  }), []);

  return (
    <ActionsContext.Provider value={actions}>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
      </UserContext.Provider>
    </ActionsContext.Provider>
  );
}
\`\`\`

**Optimization 2: Memoize Value Object:**

\`\`\`jsx
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Memoize to prevent new object on every render
  const value = useMemo(() => ({
    user,
    isAuthenticated: !!user,
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
\`\`\`

**Optimization 3: Separate State from Dispatch:**

\`\`\`jsx
const StateContext = createContext(null);
const DispatchContext = createContext(null);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// Components reading state re-render on changes
function UserName() {
  const { user } = useContext(StateContext);
  return <span>{user.name}</span>;
}

// Components only dispatching never re-render from state changes
function LogoutButton() {
  const dispatch = useContext(DispatchContext);  // dispatch is stable
  return <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>;
}
\`\`\`

**Senior insight:** Context is for infrequently updated values (theme, user, locale). For frequently updated state with many consumers, use a state library (Zustand, Jotai) that supports selective subscriptions.
`,oy=`## 16. Frontend Monitoring & Observability

### Q: How do you implement error monitoring in a React application?

**Answer:**

**1. Error Boundaries for Render Errors:**

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Send to monitoring service
    Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
\`\`\`

**2. Global Error Handlers:**

\`\`\`jsx
// index.js
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_DSN',
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 0.1,  // 10% of transactions
  replaysSessionSampleRate: 0.1,
});

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  Sentry.captureException(event.reason);
});

// Catch global errors
window.addEventListener('error', (event) => {
  Sentry.captureException(event.error);
});
\`\`\`

**3. API Error Tracking:**

\`\`\`jsx
// Axios interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.captureException(error, {
      tags: {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
      },
    });
    return Promise.reject(error);
  }
);

// React Query global error handler
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      Sentry.captureException(error, {
        tags: { queryKey: query.queryKey.join('.') },
      });
    },
  }),
});
\`\`\`

**4. User Context for Better Debugging:**

\`\`\`jsx
function useErrorTracking() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Sentry.setUser({
        id: user.id,
        email: user.email,
        // Don't include PII unnecessarily
      });
    } else {
      Sentry.setUser(null);
    }
  }, [user]);
}
\`\`\`

**5. Custom Error with Context:**

\`\`\`jsx
function useApiCall() {
  const mutation = useMutation({
    mutationFn: api.createOrder,
    onError: (error, variables) => {
      Sentry.withScope((scope) => {
        scope.setTag('feature', 'checkout');
        scope.setContext('order', {
          items: variables.items.length,
          total: variables.total,
        });
        Sentry.captureException(error);
      });
    },
  });

  return mutation;
}
\`\`\`

**Senior insight:** Capture enough context to debug but not too much (privacy/performance). Set up alerts for error rate spikes, not individual errors. Use source maps in production for readable stack traces.

---

### Q: How do you measure and monitor frontend performance?

**Answer:**

**1. Core Web Vitals:**

\`\`\`jsx
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  // Send to analytics
  analytics.track('Web Vitals', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,  // 'good', 'needs-improvement', 'poor'
    delta: metric.delta,
    id: metric.id,
  });
}

onCLS(reportWebVitals);   // Cumulative Layout Shift
onFID(reportWebVitals);   // First Input Delay
onLCP(reportWebVitals);   // Largest Contentful Paint
onFCP(reportWebVitals);   // First Contentful Paint
onTTFB(reportWebVitals);  // Time to First Byte
\`\`\`

**2. React-Specific Performance:**

\`\`\`jsx
// React Profiler API
function ProfiledApp() {
  const onRenderCallback = (
    id,           // Component name
    phase,        // "mount" | "update"
    actualDuration,  // Time spent rendering
    baseDuration,    // Estimated time without memoization
    startTime,
    commitTime
  ) => {
    if (actualDuration > 16) {  // Longer than one frame
      analytics.track('Slow Render', {
        component: id,
        phase,
        duration: actualDuration,
      });
    }
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
}
\`\`\`

**3. Custom Performance Marks:**

\`\`\`jsx
function ProductList() {
  useEffect(() => {
    performance.mark('ProductList-start');

    return () => {
      performance.mark('ProductList-end');
      performance.measure(
        'ProductList-render',
        'ProductList-start',
        'ProductList-end'
      );

      const measures = performance.getEntriesByName('ProductList-render');
      const duration = measures[0]?.duration;

      if (duration > 100) {
        analytics.track('Slow Component', {
          name: 'ProductList',
          duration,
        });
      }
    };
  }, []);

  return <div>...</div>;
}
\`\`\`

**4. Long Tasks Detection:**

\`\`\`jsx
// Detect tasks blocking main thread > 50ms
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      analytics.track('Long Task', {
        duration: entry.duration,
        startTime: entry.startTime,
      });
    }
  }
});

observer.observe({ entryTypes: ['longtask'] });
\`\`\`

**5. Bundle Size Monitoring:**

\`\`\`bash
# In CI pipeline
npx bundlesize --config bundlesize.config.json
\`\`\`

\`\`\`json
// bundlesize.config.json
{
  "files": [
    {
      "path": "./build/static/js/main.*.js",
      "maxSize": "200 kB"
    },
    {
      "path": "./build/static/css/main.*.css",
      "maxSize": "50 kB"
    }
  ]
}
\`\`\`

**6. Real User Monitoring (RUM) Setup:**

\`\`\`jsx
// Using DataDog RUM
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'xxx',
  clientToken: 'xxx',
  site: 'datadoghq.com',
  service: 'my-app',
  env: process.env.NODE_ENV,
  version: process.env.REACT_APP_VERSION,
  sampleRate: 100,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
});
\`\`\`

**Senior insight:** Focus on user-centric metrics (Core Web Vitals) over technical metrics. Set performance budgets and fail CI on regressions. Use RUM for real user data, synthetic monitoring for baseline comparisons.
`,ly=`## 17. Additional System Design Questions

### Q: Design a real-time collaborative text editor

**Answer:**

**Clarifying Questions:**
- How many concurrent editors?
- Conflict resolution strategy?
- Offline support needed?
- Rich text or plain text?

**Architecture:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                         Client                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Editor Component                    │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐ │  │
│  │  │ Text State  │  │ CRDT Engine │  │ Cursor Sync  │ │  │
│  │  └─────────────┘  └─────────────┘  └──────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
│                           │                                  │
│                    WebSocket Connection                      │
└───────────────────────────┼─────────────────────────────────┘
                            │
┌───────────────────────────┼─────────────────────────────────┐
│                     Server                                   │
│  ┌─────────────────┐  ┌────────────────┐  ┌─────────────┐ │
│  │ WebSocket Hub   │  │ Document Store │  │ User Presence│ │
│  └─────────────────┘  └────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Conflict Resolution with CRDT:**

\`\`\`jsx
// Using Yjs CRDT library
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

function CollaborativeEditor({ documentId }) {
  const [editorRef, setEditorRef] = useState(null);

  useEffect(() => {
    // Create CRDT document
    const ydoc = new Y.Doc();
    const ytext = ydoc.getText('content');

    // Connect to sync server
    const provider = new WebsocketProvider(
      'wss://sync.example.com',
      documentId,
      ydoc
    );

    // User awareness (cursors, selections)
    const awareness = provider.awareness;
    awareness.setLocalState({
      user: { name: currentUser.name, color: '#ff0000' },
      cursor: null,
    });

    // Bind to editor
    if (editorRef) {
      const binding = new YTextBinding(ytext, editorRef);
    }

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [documentId, editorRef]);

  return <div ref={setEditorRef} contentEditable />;
}
\`\`\`

**Operational Transform Alternative:**

\`\`\`jsx
// For simpler cases without CRDT library
function useCollaborativeState(documentId) {
  const [content, setContent] = useState('');
  const [version, setVersion] = useState(0);
  const pendingOps = useRef([]);

  const ws = useWebSocket(\`wss://api/docs/\${documentId}\`);

  // Apply remote operation
  const applyOperation = (op) => {
    setContent(prev => {
      switch (op.type) {
        case 'insert':
          return prev.slice(0, op.position) + op.text + prev.slice(op.position);
        case 'delete':
          return prev.slice(0, op.position) + prev.slice(op.position + op.length);
        default:
          return prev;
      }
    });
    setVersion(op.version);
  };

  // Transform local operation against remote
  const transform = (localOp, remoteOp) => {
    // Adjust position based on remote operation
    if (remoteOp.type === 'insert' && remoteOp.position <= localOp.position) {
      return { ...localOp, position: localOp.position + remoteOp.text.length };
    }
    return localOp;
  };

  return { content, setContent, version };
}
\`\`\`

**Cursor Synchronization:**

\`\`\`jsx
function Cursors({ awareness }) {
  const [cursors, setCursors] = useState([]);

  useEffect(() => {
    const handleUpdate = () => {
      const states = Array.from(awareness.getStates().entries())
        .filter(([id]) => id !== awareness.clientID)
        .map(([id, state]) => ({
          id,
          ...state.user,
          cursor: state.cursor,
        }));
      setCursors(states);
    };

    awareness.on('change', handleUpdate);
    return () => awareness.off('change', handleUpdate);
  }, [awareness]);

  return (
    <>
      {cursors.map(cursor => (
        <RemoteCursor
          key={cursor.id}
          position={cursor.cursor}
          color={cursor.color}
          name={cursor.name}
        />
      ))}
    </>
  );
}
\`\`\`

**Senior insight:** Use CRDTs (Yjs, Automerge) for automatic conflict resolution without central server logic. They're complex but handle edge cases correctly. Consider using existing solutions (Liveblocks, Y-sweet) rather than building from scratch.

---

### Q: Design a file upload system with progress tracking

**Answer:**

**Requirements:**
- Support large files (multi-GB)
- Show upload progress
- Resume failed uploads
- Handle multiple files

**Architecture:**

\`\`\`jsx
// hooks/useFileUpload.js
function useFileUpload() {
  const [uploads, setUploads] = useState(new Map());

  const uploadFile = useCallback(async (file) => {
    const uploadId = crypto.randomUUID();
    const chunkSize = 5 * 1024 * 1024; // 5MB chunks
    const totalChunks = Math.ceil(file.size / chunkSize);

    setUploads(prev => new Map(prev).set(uploadId, {
      file,
      progress: 0,
      status: 'uploading',
      uploadedChunks: 0,
      totalChunks,
    }));

    try {
      // 1. Initialize upload
      const { uploadUrl, uploadKey } = await api.initializeUpload({
        filename: file.name,
        size: file.size,
        contentType: file.type,
      });

      // 2. Upload chunks
      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunk = file.slice(start, end);

        await uploadChunk(uploadUrl, chunk, i, uploadKey);

        setUploads(prev => {
          const upload = prev.get(uploadId);
          return new Map(prev).set(uploadId, {
            ...upload,
            uploadedChunks: i + 1,
            progress: ((i + 1) / totalChunks) * 100,
          });
        });
      }

      // 3. Complete upload
      const result = await api.completeUpload(uploadKey);

      setUploads(prev => new Map(prev).set(uploadId, {
        ...prev.get(uploadId),
        status: 'completed',
        url: result.url,
      }));

      return result;
    } catch (error) {
      setUploads(prev => new Map(prev).set(uploadId, {
        ...prev.get(uploadId),
        status: 'error',
        error,
      }));
      throw error;
    }
  }, []);

  return { uploads, uploadFile };
}
\`\`\`

**Upload Component:**

\`\`\`jsx
function FileUploader() {
  const { uploads, uploadFile } = useFileUpload();
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);

    // Upload files in parallel with limit
    const limit = 3;
    for (let i = 0; i < files.length; i += limit) {
      const batch = files.slice(i, i + limit);
      await Promise.all(batch.map(uploadFile));
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      className={\`dropzone \${dragActive ? 'active' : ''}\`}
    >
      <input
        type="file"
        multiple
        onChange={(e) => Array.from(e.target.files).forEach(uploadFile)}
      />

      {Array.from(uploads.entries()).map(([id, upload]) => (
        <UploadProgress key={id} upload={upload} />
      ))}
    </div>
  );
}

function UploadProgress({ upload }) {
  return (
    <div className="upload-item">
      <span>{upload.file.name}</span>
      <progress value={upload.progress} max={100} />
      <span>{Math.round(upload.progress)}%</span>
      <span>{upload.status}</span>
    </div>
  );
}
\`\`\`

**XHR for Progress Events:**

\`\`\`jsx
function uploadChunk(url, chunk, index, uploadKey) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const chunkProgress = (e.loaded / e.total) * 100;
        // Update chunk-level progress if needed
      }
    });

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(\`Upload failed: \${xhr.status}\`));
      }
    };

    xhr.onerror = () => reject(new Error('Upload failed'));

    xhr.open('PUT', \`\${url}?partNumber=\${index}\`);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('X-Upload-Key', uploadKey);
    xhr.send(chunk);
  });
}
\`\`\`

**Resume Support:**

\`\`\`jsx
async function resumeUpload(uploadKey) {
  // Get upload status
  const status = await api.getUploadStatus(uploadKey);

  // Find missing chunks
  const missingChunks = [];
  for (let i = 0; i < status.totalChunks; i++) {
    if (!status.completedChunks.includes(i)) {
      missingChunks.push(i);
    }
  }

  // Upload only missing chunks
  for (const chunkIndex of missingChunks) {
    await uploadChunk(status.uploadUrl, getChunk(file, chunkIndex), chunkIndex);
  }
}
\`\`\`

**Senior insight:** Use presigned URLs (S3) for direct-to-storage uploads. Implement chunking for reliability and progress tracking. Store upload state in localStorage for resume across sessions.
`,cy=`## 18. Tricky & Edge Case Questions

### Q: What happens if you call setState in useEffect without cleanup?

**Answer:**

\`\`\`jsx
// ❌ Memory leak - component might be unmounted
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      setData(data); // Component may be unmounted!
    });
}, []);

// Warning: Can't perform a React state update on an unmounted component
\`\`\`

**Fix with Cleanup:**

\`\`\`jsx
useEffect(() => {
  let mounted = true;

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (mounted) {
        setData(data);
      }
    });

  return () => {
    mounted = false;
  };
}, []);
\`\`\`

**Better: AbortController:**

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    });

  return () => controller.abort();
}, []);
\`\`\`

---

### Q: Why might useEffect run twice in development?

**Answer:**

**React 18 StrictMode** intentionally double-invokes effects to help find bugs.

\`\`\`jsx
// In development with StrictMode:
useEffect(() => {
  console.log('Effect runs');  // Logs TWICE
  return () => console.log('Cleanup');  // Also runs between
}, []);

// Sequence: Effect → Cleanup → Effect
\`\`\`

**Purpose:** Catches effects that don't clean up properly:

\`\`\`jsx
// ❌ Bug: No cleanup - StrictMode reveals duplicate subscriptions
useEffect(() => {
  eventBus.subscribe('event', handler);
  // Missing: return () => eventBus.unsubscribe('event', handler);
}, []);

// In StrictMode: subscribes TWICE, only one handler active
\`\`\`

**Not a bug if effect is idempotent:**

\`\`\`jsx
// ✅ Safe to run twice
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

**Senior insight:** Don't disable StrictMode to "fix" double effects. Fix the actual cleanup issue. In production, effects run once. StrictMode helps catch bugs early.

---

### Q: What's the difference between null and undefined in React props?

**Answer:**

\`\`\`jsx
// undefined = use default value
<Button size={undefined} />  // Uses defaultProps or default parameter

// null = explicitly "no value"
<Button size={null} />  // Overrides default, size is null

// Component
function Button({ size = 'medium' }) {
  console.log(size);
  // undefined → 'medium' (default applied)
  // null → null (default NOT applied, null is a value)
}

// With defaultProps (legacy)
Button.defaultProps = { size: 'medium' };
// undefined → 'medium'
// null → null
\`\`\`

**Conditional rendering:**

\`\`\`jsx
// Both are falsy but render differently
function Component({ label }) {
  return <div>{label}</div>;
}

<Component label={null} />      // Renders: <div></div>
<Component label={undefined} /> // Renders: <div></div>
<Component label={0} />         // Renders: <div>0</div>
<Component label={false} />     // Renders: <div></div>
<Component label="" />          // Renders: <div></div>
\`\`\`

**Conditional rendering pitfall:**

\`\`\`jsx
// ❌ Shows "0" when items is empty array
{items.length && <List items={items} />}

// ✅ Explicit boolean
{items.length > 0 && <List items={items} />}
{items.length ? <List items={items} /> : null}
\`\`\`

---

### Q: How do you handle memory leaks in React?

**Answer:**

**Common Sources:**

\`\`\`jsx
// 1. Subscriptions without cleanup
useEffect(() => {
  const subscription = observable.subscribe(handler);
  // ❌ Missing cleanup
}, []);

// ✅ Fix
useEffect(() => {
  const subscription = observable.subscribe(handler);
  return () => subscription.unsubscribe();
}, []);

// 2. Timers without cleanup
useEffect(() => {
  const interval = setInterval(tick, 1000);
  // ❌ Interval runs forever
}, []);

// ✅ Fix
useEffect(() => {
  const interval = setInterval(tick, 1000);
  return () => clearInterval(interval);
}, []);

// 3. Event listeners
useEffect(() => {
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);

// 4. Async operations setting state after unmount
useEffect(() => {
  let cancelled = false;
  fetchData().then(data => {
    if (!cancelled) setData(data);
  });
  return () => { cancelled = true; };
}, []);
\`\`\`

**Detection:**

\`\`\`jsx
// React DevTools Profiler - check for components not unmounting
// Chrome DevTools - Memory tab - heap snapshots
// Memory growth over time indicates leak
\`\`\`

**Common Patterns:**

\`\`\`jsx
// Reusable cleanup hook
function useIsMounted() {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  return isMounted;
}

function Component() {
  const isMounted = useIsMounted();

  async function handleClick() {
    const data = await fetchData();
    if (isMounted.current) {
      setData(data);
    }
  }
}
\`\`\`

---

### Q: What is the key prop anti-pattern?

**Answer:**

\`\`\`jsx
// ❌ Anti-pattern: Using index as key
{items.map((item, index) => (
  <Item key={index} data={item} />
))}

// Problems:
// 1. Reordering shuffles keys, causing state bugs
// 2. Adding/removing items causes unnecessary re-mounts
// 3. Animations break
\`\`\`

**Demonstration of Bug:**

\`\`\`jsx
// List of inputs with index keys
function List() {
  const [items, setItems] = useState(['A', 'B', 'C']);

  return (
    <>
      {items.map((item, index) => (
        <input key={index} defaultValue={item} />
      ))}
      <button onClick={() => setItems(['X', ...items])}>
        Add to Start
      </button>
    </>
  );
}

// Click button: Items become ['X', 'A', 'B', 'C']
// Expected inputs: X, A, B, C
// Actual inputs: A, B, C, C (states stayed with keys!)
\`\`\`

**✅ Correct: Stable unique IDs:**

\`\`\`jsx
{items.map(item => (
  <Item key={item.id} data={item} />
))}

// Or generate ID when creating item
const addItem = (text) => {
  setItems([...items, { id: crypto.randomUUID(), text }]);
};
\`\`\`

**When index key is OK:**

1. List is static (never reordered)
2. Items have no state or uncontrolled inputs
3. List is never filtered/sorted

**Senior insight:** The key tells React which items are "the same" across renders. Wrong keys cause subtle bugs: state appears on wrong item, animations break, performance degrades. Always use stable unique identifiers.

---

### Q: What happens when you render a component inside a callback passed to setState?

**Answer:**

This is an anti-pattern that can cause subtle bugs and confusing behavior.

**The Problem:**

\`\`\`jsx
// ❌ Anti-pattern: Rendering inside setState
function Parent() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems(prev => {
      // DON'T do this! Side effect during state update
      const newItem = <ChildComponent id={prev.length} />;
      return [...prev, newItem];
    });
  }

  return (
    <div>
      {items}
      <button onClick={addItem}>Add</button>
    </div>
  );
}
\`\`\`

**Why It's Problematic:**

1. **Render during update:** setState's updater function should be pure
2. **Stale closures:** The component captures props/state from when it was created
3. **Breaks React's model:** Components should be functions of props, not stored values
4. **StrictMode issues:** Updater may run multiple times

**Correct Pattern:**

\`\`\`jsx
// ✅ Store data, render components from data
function Parent() {
  const [items, setItems] = useState([]);  // Store DATA, not components

  function addItem() {
    setItems(prev => [
      ...prev,
      { id: crypto.randomUUID(), createdAt: Date.now() }
    ]);
  }

  return (
    <div>
      {items.map(item => (
        <ChildComponent key={item.id} item={item} />
      ))}
      <button onClick={addItem}>Add</button>
    </div>
  );
}
\`\`\`

**Similar Anti-Patterns:**

\`\`\`jsx
// ❌ Storing components in state
const [modal, setModal] = useState(null);
setModal(<ConfirmDialog onConfirm={handleConfirm} />);

// ✅ Store data, render conditionally
const [modalConfig, setModalConfig] = useState(null);
// ...
{modalConfig && (
  <ConfirmDialog
    message={modalConfig.message}
    onConfirm={modalConfig.onConfirm}
  />
)}

// ❌ Using components as object keys
const cache = new Map();
cache.set(<Component />, value);

// ✅ Use stable identifiers
const cache = new Map();
cache.set('component-unique-id', value);
\`\`\`

**When You Might Think You Need This:**

\`\`\`jsx
// Dynamic component rendering
// ❌ Wrong approach
const [CurrentComponent, setCurrentComponent] = useState(ComponentA);

// ✅ Use a mapping
const components = {
  a: ComponentA,
  b: ComponentB,
  c: ComponentC,
};
const [activeKey, setActiveKey] = useState('a');
const CurrentComponent = components[activeKey];

return <CurrentComponent />;
\`\`\`

**Senior insight:** React's model is: data flows down, events flow up. Store data in state, derive UI from data during render. Storing React elements in state breaks this model - components become stale snapshots instead of live reflections of current data.

---

### Q: How do you handle circular dependencies in React modules?

**Answer:**

Circular dependencies occur when module A imports B, and B imports A (directly or indirectly). They can cause \`undefined\` imports and initialization errors.

**Detecting Circular Dependencies:**

\`\`\`bash
# Using madge
npx madge --circular src/

# Output:
# Circular dependency detected:
# src/components/Header.tsx → src/context/AppContext.tsx → src/components/Header.tsx
\`\`\`

**Common React Circular Dependency Patterns:**

\`\`\`jsx
// ❌ Pattern 1: Component ↔ Context circular reference

// AppContext.tsx
import { Header } from './Header';  // Imports Header
export const AppContext = createContext();
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      <Header />  // Uses Header
      {children}
    </AppContext.Provider>
  );
}

// Header.tsx
import { AppContext } from './AppContext';  // Creates circle!
export function Header() {
  const context = useContext(AppContext);
  return <header>...</header>;
}
\`\`\`

**Solutions:**

**1. Restructure to break the cycle:**

\`\`\`jsx
// ✅ Separate context definition from provider component

// AppContext.tsx - Only exports context
export const AppContext = createContext();

// AppProvider.tsx - Imports context AND Header
import { AppContext } from './AppContext';
import { Header } from './Header';
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      <Header />
      {children}
    </AppContext.Provider>
  );
}

// Header.tsx - Only imports context
import { AppContext } from './AppContext';  // No cycle!
\`\`\`

**2. Use children pattern:**

\`\`\`jsx
// ✅ Avoid importing Header in AppProvider

// AppProvider.tsx
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      {children}  // Header passed as child from parent
    </AppContext.Provider>
  );
}

// App.tsx
<AppProvider>
  <Header />  // Header imported here instead
  <Main />
</AppProvider>
\`\`\`

**3. Dynamic imports (lazy loading):**

\`\`\`jsx
// ✅ Break cycle with dynamic import

// ComponentA.tsx
const ComponentB = lazy(() => import('./ComponentB'));

export function ComponentA() {
  return (
    <Suspense fallback={<Spinner />}>
      <ComponentB />
    </Suspense>
  );
}
\`\`\`

**4. Dependency injection:**

\`\`\`jsx
// ✅ Pass dependencies through props/context instead of importing

// Instead of importing directly
function ComponentA() {
  // const B = ComponentB;  // Circular import
  const { ComponentB } = useComponents();  // Injected
  return <ComponentB />;
}

// Components provided via context
const ComponentsContext = createContext({});
function ComponentsProvider({ children }) {
  return (
    <ComponentsContext.Provider value={{ ComponentA, ComponentB }}>
      {children}
    </ComponentsContext.Provider>
  );
}
\`\`\`

**5. Colocate related code:**

\`\`\`jsx
// ❌ Separate files creating cycles
// UserList.tsx imports UserCard
// UserCard.tsx imports UserList (for nested users)

// ✅ Keep in same file if tightly coupled
// Users.tsx
function UserCard({ user }) { /* ... */ }
function UserList({ users }) { /* ... */ }

export { UserCard, UserList };
\`\`\`

**Prevention Strategies:**

\`\`\`javascript
// eslint-plugin-import
{
  rules: {
    'import/no-cycle': ['error', { maxDepth: 10 }],
  }
}

// CI check
"lint:circular": "madge --circular --extensions ts,tsx src/"
\`\`\`

**Senior insight:** Circular dependencies usually indicate architectural issues - components are too tightly coupled. The fix isn't just "break the cycle" but "redesign for loose coupling." Common solutions: extract shared code to a third module, use dependency injection, or combine truly coupled code. Add \`import/no-cycle\` ESLint rule to catch these early.

---

### Q: What are the gotchas with using React.lazy and Suspense?

**Answer:**

\`React.lazy\` and \`Suspense\` enable code splitting but have several edge cases to handle.

**Basic Usage:**

\`\`\`jsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

**Gotcha 1: Module must have default export**

\`\`\`jsx
// ❌ Named export won't work directly
export function MyComponent() { /* ... */ }

const MyComponent = lazy(() => import('./MyComponent'));
// Error: Element type is invalid

// ✅ Fix 1: Use default export
export default function MyComponent() { /* ... */ }

// ✅ Fix 2: Re-export in import
const MyComponent = lazy(() =>
  import('./MyComponent').then(module => ({
    default: module.MyComponent
  }))
);
\`\`\`

**Gotcha 2: Error handling requires Error Boundary**

\`\`\`jsx
// ❌ Lazy load failure crashes the app
const Component = lazy(() => import('./MissingComponent'));
// Network error or 404 = white screen

// ✅ Wrap with Error Boundary
class LazyErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Failed to load component</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <LazyErrorBoundary>
      <Suspense fallback={<Loading />}>
        <HeavyComponent />
      </Suspense>
    </LazyErrorBoundary>
  );
}
\`\`\`

**Gotcha 3: Suspense boundary placement affects UX**

\`\`\`jsx
// ❌ Too granular - jarring multiple loading states
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
    </div>
  );
}

// ✅ Strategic grouping - smoother UX
function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Header />
      <Suspense fallback={<ContentSkeleton />}>
        <Sidebar />
        <Content />
      </Suspense>
    </Suspense>
  );
}
\`\`\`

**Gotcha 4: SSR requires special handling**

\`\`\`jsx
// ❌ React.lazy doesn't work with SSR out of the box
const Component = lazy(() => import('./Component'));
// Server throws error

// ✅ Use loadable-components or Next.js dynamic
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('./Component'), {
  loading: () => <Spinner />,
  ssr: false,  // Or true with proper setup
});

// Or @loadable/component
import loadable from '@loadable/component';
const Component = loadable(() => import('./Component'));
\`\`\`

**Gotcha 5: Preloading for better UX**

\`\`\`jsx
// ❌ Only loads when rendered - user sees spinner
const Settings = lazy(() => import('./Settings'));

// ✅ Preload on hover/focus
const importSettings = () => import('./Settings');
const Settings = lazy(importSettings);

function Nav() {
  return (
    <Link
      to="/settings"
      onMouseEnter={importSettings}  // Start loading on hover
      onFocus={importSettings}
    >
      Settings
    </Link>
  );
}

// ✅ Or preload based on route
const routes = {
  '/settings': () => import('./Settings'),
  '/profile': () => import('./Profile'),
};

// In router setup, preload adjacent routes
useEffect(() => {
  // Preload likely next pages
  routes['/settings']();
}, [currentRoute]);
\`\`\`

**Gotcha 6: Lazy components inside frequently remounting components**

\`\`\`jsx
// ❌ Re-fetches on every remount
function Toggle({ show }) {
  return show ? (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />  {/* Re-imports every show/hide! */}
    </Suspense>
  ) : null;
}

// ✅ Keep mounted, hide with CSS
function Toggle({ show }) {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Suspense fallback={<Spinner />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// ✅ Or lift Suspense boundary
function Parent() {
  return (
    <Suspense fallback={<Spinner />}>
      <Toggle show={showSettings} />
    </Suspense>
  );
}
\`\`\`

**Gotcha 7: useTransition for better loading UX**

\`\`\`jsx
// ❌ Immediate fallback can be jarring
function TabPanel({ activeTab }) {
  const Component = tabs[activeTab].component;
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  );
}

// ✅ Keep old content while loading new
function TabPanel({ activeTab }) {
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState(activeTab);

  function handleTabChange(newTab) {
    startTransition(() => {
      setCurrentTab(newTab);
    });
  }

  const Component = tabs[currentTab].component;

  return (
    <div style={{ opacity: isPending ? 0.7 : 1 }}>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </div>
  );
}
\`\`\`

**Senior insight:** Key considerations: (1) always pair with Error Boundary for production, (2) preload strategically to eliminate loading states, (3) use \`startTransition\` to keep showing stale content during loads, (4) for SSR, use framework-specific solutions (Next.js dynamic, loadable-components). Don't lazy-load everything - small components aren't worth the overhead. Focus on large, route-based, or conditionally-rendered components.
`,uy=[Vg,Yg,Xg,Kg,Zg,Wg,Jg,$g,ey,ny,ty,ay,sy,ry,iy,oy,ly,cy].join(`

`),Ir=qg(uy),zr=Gg(Ir);Fg(Ir);const xa={status:"not_started",timesReviewed:0,bookmarked:!1},dy={theme:"system",showAnswersByDefault:!1,enableKeyboardShortcuts:!0},Wp={status:"all",category:"all",bookmarked:!1,searchQuery:""};function fy(l,i){switch(i.type){case"SET_STATUS":{const u=l.progress[i.questionId]||xa;return{...l,progress:{...l.progress,[i.questionId]:{...u,status:i.status,lastStudied:Date.now(),timesReviewed:u.timesReviewed+1}}}}case"TOGGLE_BOOKMARK":{const u=l.progress[i.questionId]||xa;return{...l,progress:{...l.progress,[i.questionId]:{...u,bookmarked:!u.bookmarked}}}}case"TOGGLE_EXPANDED":{const u=new Set(l.expandedQuestions);return u.has(i.questionId)?u.delete(i.questionId):u.add(i.questionId),{...l,expandedQuestions:u}}case"EXPAND_ALL":return{...l,expandedQuestions:new Set(zr.map(u=>u.id))};case"COLLAPSE_ALL":return{...l,expandedQuestions:new Set};case"SET_NOTES":{const u=l.progress[i.questionId]||xa;return{...l,progress:{...l.progress,[i.questionId]:{...u,notes:i.notes}}}}case"SET_FILTER":return{...l,filters:{...l.filters,...i.filter}};case"CLEAR_FILTERS":return{...l,filters:Wp};case"SET_SEARCH":return{...l,filters:{...l.filters,searchQuery:i.query}};case"SET_CURRENT_QUESTION":return{...l,currentQuestionId:i.questionId};case"SET_SETTING":return{...l,settings:{...l.settings,...i.setting}};case"IMPORT_PROGRESS":return{...l,progress:i.data};case"RESET_PROGRESS":return{...l,progress:{}};case"RESET_CATEGORY":{const u={...l.progress},c=Ir.find(d=>d.id===i.categoryId);return c&&c.questions.forEach(d=>{delete u[d.id]}),{...l,progress:u}}case"LOAD_PROGRESS":return{...l,progress:i.progress};default:return l}}const Jp=pe.createContext(null);function py({children:l}){const[i,u]=Uc("study-progress",{}),[c,d]=Uc("study-settings",dy),h={progress:i,settings:c,filters:Wp,expandedQuestions:new Set,currentQuestionId:null},[m,k]=pe.useReducer(fy,h);pe.useEffect(()=>{u(m.progress)},[m.progress,u]),pe.useEffect(()=>{d(m.settings)},[m.settings,d]);const b=(V,oe)=>{k({type:"SET_STATUS",questionId:V,status:oe})},v=V=>{k({type:"TOGGLE_BOOKMARK",questionId:V})},E=V=>{k({type:"TOGGLE_EXPANDED",questionId:V})},U=V=>{k({type:"SET_SEARCH",query:V})},M=V=>{k({type:"SET_FILTER",filter:V})},F=V=>m.progress[V]||xa,H=V=>m.expandedQuestions.has(V),X=pe.useMemo(()=>{let V=[...zr];if(m.filters.category!=="all"&&(V=V.filter(oe=>oe.categoryId===m.filters.category)),m.filters.status!=="all"&&(V=V.filter(oe=>(m.progress[oe.id]||xa).status===m.filters.status)),m.filters.bookmarked&&(V=V.filter(oe=>(m.progress[oe.id]||xa).bookmarked)),m.filters.searchQuery.trim()){const oe=m.filters.searchQuery.toLowerCase();V=V.filter(ie=>ie.question.toLowerCase().includes(oe)||ie.answer.toLowerCase().includes(oe)||ie.categoryName.toLowerCase().includes(oe))}return V},[m.filters,m.progress]),Ae=pe.useMemo(()=>{const V=zr.length;let oe=0,ie=0,ye=0,te=0,Te=0;return zr.forEach(Ke=>{const en=m.progress[Ke.id]||xa;switch(en.status){case"not_started":oe++;break;case"studied":ie++;break;case"needs_review":ye++;break;case"mastered":te++;break}en.bookmarked&&Te++}),{total:V,notStarted:oe,studied:ie,needsReview:ye,mastered:te,bookmarked:Te}},[m.progress]),_e=pe.useMemo(()=>Ir.map(V=>{const oe=V.questions;let ie=0,ye=0,te=0,Te=0,Ke=0;return oe.forEach(en=>{const Je=m.progress[en.id]||xa;switch(Je.status){case"not_started":ie++;break;case"studied":ye++;break;case"needs_review":te++;break;case"mastered":Te++;break}Je.bookmarked&&Ke++}),{categoryId:V.id,categoryName:V.name,total:oe.length,notStarted:ie,studied:ye,needsReview:te,mastered:Te,bookmarked:Ke}}),[m.progress]),ke={state:m,dispatch:k,setStatus:b,toggleBookmark:v,toggleExpanded:E,setSearch:U,setFilter:M,getProgress:F,isExpanded:H,filteredQuestions:X,stats:Ae,categoryStats:_e,categories:Ir,allQuestions:zr};return p.jsx(Jp.Provider,{value:ke,children:l})}function Va(){const l=pe.useContext(Jp);if(!l)throw new Error("useStudy must be used within a StudyProvider");return l}const $p=pe.createContext(null);function my({children:l}){const[i,u]=Uc("theme","system"),c=i==="dark"?!0:i==="light"?!1:typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1;return pe.useEffect(()=>{const d=document.documentElement;c?d.classList.add("dark"):d.classList.remove("dark")},[c]),pe.useEffect(()=>{if(i!=="system")return;const d=window.matchMedia("(prefers-color-scheme: dark)"),h=m=>{const k=document.documentElement;m.matches?k.classList.add("dark"):k.classList.remove("dark")};return d.addEventListener("change",h),()=>d.removeEventListener("change",h)},[i]),p.jsx($p.Provider,{value:{theme:i,setTheme:u,isDark:c},children:l})}function em(){const l=pe.useContext($p);if(!l)throw new Error("useTheme must be used within a ThemeProvider");return l}const nm=(...l)=>l.filter((i,u,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===u).join(" ").trim();const hy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const gy=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,u,c)=>c?c.toUpperCase():u.toLowerCase());const qp=l=>{const i=gy(l);return i.charAt(0).toUpperCase()+i.slice(1)};var yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const by=l=>{for(const i in l)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};const vy=pe.forwardRef(({color:l="currentColor",size:i=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:d="",children:h,iconNode:m,...k},b)=>pe.createElement("svg",{ref:b,...yy,width:i,height:i,stroke:l,strokeWidth:c?Number(u)*24/Number(i):u,className:nm("lucide",d),...!h&&!by(k)&&{"aria-hidden":"true"},...k},[...m.map(([v,E])=>pe.createElement(v,E)),...Array.isArray(h)?h:[h]]));const Ge=(l,i)=>{const u=pe.forwardRef(({className:c,...d},h)=>pe.createElement(vy,{ref:h,iconNode:i,className:nm(`lucide-${hy(qp(l))}`,`lucide-${l}`,c),...d}));return u.displayName=qp(l),u};const xy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Pp=Ge("book-open",xy);const Sy=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Hc=Ge("bookmark",Sy);const wy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Cy=Ge("chart-column",wy);const ky=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ty=Ge("check",ky);const Ey=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qc=Ge("chevron-down",Ey);const Ay=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jc=Ge("chevron-right",Ay);const Ry=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ny=Ge("chevron-up",Ry);const My=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],uo=Ge("circle-check",My);const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pc=Ge("circle",Dy);const Oy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Hr=Ge("clock",Oy);const _y=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uy=Ge("download",_y);const jy=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],tm=Ge("funnel",jy);const zy=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],Ly=Ge("keyboard",zy);const By=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Iy=Ge("menu",By);const Hy=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],qy=Ge("monitor",Hy);const Py=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Qy=Ge("moon",Py);const Fy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Gy=Ge("rotate-ccw",Fy);const Vy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],am=Ge("search",Vy);const Yy=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Xy=Ge("shuffle",Yy);const Ky=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Zy=Ge("skip-forward",Ky);const Wy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fo=Ge("star",Wy);const Jy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$y=Ge("sun",Jy);const eb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],nb=Ge("trash-2",eb);const tb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ab=Ge("trophy",tb);const sb=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],rb=Ge("upload",sb);const ib=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yo=Ge("x",ib);function ob({onOpenStats:l,onOpenShortcuts:i,onStartQuiz:u}){const{state:c,setSearch:d,stats:h}=Va(),{theme:m,setTheme:k,isDark:b}=em(),v=Math.round((h.studied+h.mastered)/h.total*100),E=()=>{const M=["light","dark","system"],H=(M.indexOf(m)+1)%M.length;k(M[H])},U=m==="system"?qy:b?Qy:$y;return p.jsx("header",{className:"sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700",children:p.jsxs("div",{className:"flex items-center justify-between px-4 py-3 gap-4",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"p-2 bg-blue-500 rounded-lg",children:p.jsx(Pp,{className:"w-5 h-5 text-white"})}),p.jsxs("div",{className:"hidden sm:block",children:[p.jsx("h1",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"React Interview Prep"}),p.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[h.mastered+h.studied,"/",h.total," completed (",v,"%)"]})]})]}),p.jsx("div",{className:"flex-1 max-w-xl",children:p.jsxs("div",{className:"relative",children:[p.jsx(am,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),p.jsx("input",{type:"text",placeholder:"Search questions... (Press / to focus)",value:c.filters.searchQuery,onChange:M=>d(M.target.value),className:"input pl-10",id:"search-input"})]})}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("button",{onClick:u,className:"btn btn-primary hidden sm:flex items-center gap-2",children:[p.jsx(Pp,{className:"w-4 h-4"}),p.jsx("span",{children:"Quiz"})]}),p.jsx("button",{onClick:l,className:"btn btn-ghost p-2",title:"View Statistics",children:p.jsx(Cy,{className:"w-5 h-5"})}),p.jsx("button",{onClick:i,className:"btn btn-ghost p-2 hidden sm:flex",title:"Keyboard Shortcuts",children:p.jsx(Ly,{className:"w-5 h-5"})}),p.jsx("button",{onClick:E,className:"btn btn-ghost p-2",title:`Theme: ${m}`,children:p.jsx(U,{className:"w-5 h-5"})})]})]})})}function lb({isOpen:l,onClose:i}){const{state:u,setFilter:c,categoryStats:d,stats:h}=Va(),{filters:m}=u,k=[{value:"all",label:"All Questions",icon:p.jsx(tm,{className:"w-4 h-4"}),color:""},{value:"not_started",label:"Not Started",icon:p.jsx(Pc,{className:"w-4 h-4"}),color:"text-gray-500"},{value:"studied",label:"Studied",icon:p.jsx(uo,{className:"w-4 h-4"}),color:"text-blue-500"},{value:"needs_review",label:"Needs Review",icon:p.jsx(Hr,{className:"w-4 h-4"}),color:"text-amber-500"},{value:"mastered",label:"Mastered",icon:p.jsx(fo,{className:"w-4 h-4"}),color:"text-green-500"}],b=v=>{if(v==="all")return h.total;switch(v){case"not_started":return h.notStarted;case"studied":return h.studied;case"needs_review":return h.needsReview;case"mastered":return h.mastered}};return p.jsxs(p.Fragment,{children:[l&&p.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:i}),p.jsxs("aside",{className:`
          fixed lg:sticky top-0 left-0 z-50 lg:z-0
          h-screen w-72 lg:w-64
          bg-white dark:bg-slate-800
          border-r border-gray-200 dark:border-slate-700
          transform transition-transform duration-300
          ${l?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          overflow-y-auto
          pt-4 lg:pt-20
        `,children:[p.jsx("button",{onClick:i,className:"lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:p.jsx(yo,{className:"w-5 h-5"})}),p.jsxs("div",{className:"px-4 pb-4",children:[p.jsxs("div",{className:"mb-6",children:[p.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Filter by Status"}),p.jsx("div",{className:"space-y-1",children:k.map(v=>p.jsxs("button",{onClick:()=>c({status:v.value}),className:`
                    w-full sidebar-item
                    ${m.status===v.value?"active":""}
                    ${v.color}
                  `,children:[v.icon,p.jsx("span",{className:"flex-1 text-left text-sm",children:v.label}),p.jsx("span",{className:"text-xs text-gray-400",children:b(v.value)})]},v.value))})]}),p.jsx("div",{className:"mb-6",children:p.jsxs("button",{onClick:()=>c({bookmarked:!m.bookmarked}),className:`
                w-full sidebar-item
                ${m.bookmarked?"active":""}
              `,children:[p.jsx(Hc,{className:`w-4 h-4 ${m.bookmarked?"fill-current":""}`}),p.jsx("span",{className:"flex-1 text-left text-sm",children:"Bookmarked"}),p.jsx("span",{className:"text-xs text-gray-400",children:h.bookmarked})]})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Categories"}),p.jsxs("div",{className:"space-y-1",children:[p.jsxs("button",{onClick:()=>c({category:"all"}),className:`
                  w-full sidebar-item
                  ${m.category==="all"?"active":""}
                `,children:[p.jsx(jc,{className:"w-4 h-4"}),p.jsx("span",{className:"flex-1 text-left text-sm",children:"All Categories"}),p.jsx("span",{className:"text-xs text-gray-400",children:h.total})]}),d.map(v=>{const E=m.category===v.categoryId,U=v.studied+v.mastered,M=Math.round(U/v.total*100);return p.jsxs("button",{onClick:()=>c({category:v.categoryId}),className:`
                      w-full sidebar-item group
                      ${E?"active":""}
                    `,children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[E?p.jsx(qc,{className:"w-4 h-4 flex-shrink-0"}):p.jsx(jc,{className:"w-4 h-4 flex-shrink-0"}),p.jsx("span",{className:"text-sm truncate",children:v.categoryName})]}),p.jsx("div",{className:"ml-6 mt-1",children:p.jsx("div",{className:"h-1 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-green-500 rounded-full transition-all duration-300",style:{width:`${M}%`}})})})]}),p.jsxs("span",{className:"text-xs text-gray-400 flex-shrink-0",children:[U,"/",v.total]})]},v.categoryId)})]})]})]})]})]})}function cb({children:l,onOpenStats:i,onOpenShortcuts:u,onStartQuiz:c}){const[d,h]=pe.useState(!1);return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[p.jsx(ob,{onOpenStats:i,onOpenShortcuts:u,onStartQuiz:c}),p.jsxs("div",{className:"flex",children:[p.jsx("button",{onClick:()=>h(!0),className:"lg:hidden fixed bottom-4 left-4 z-30 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors",children:p.jsx(Iy,{className:"w-6 h-6"})}),p.jsx(lb,{isOpen:d,onClose:()=>h(!1)}),p.jsx("main",{className:"flex-1 min-h-[calc(100vh-64px)] p-4 lg:p-6",children:l})]})]})}function Qc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ya=Qc();function sm(l){Ya=l}var Br={exec:()=>null};function De(l,i=""){let u=typeof l=="string"?l:l.source,c={replace:(d,h)=>{let m=typeof h=="string"?h:h.source;return m=m.replace(zn.caret,"$1"),u=u.replace(d,m),c},getRegex:()=>new RegExp(u,i)};return c}var ub=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),zn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},db=/^(?:[ \t]*(?:\n|$))+/,fb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,pb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,qr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fc=/(?:[*+-]|\d{1,9}[.)])/,rm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,im=De(rm).replace(/bull/g,Fc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hb=De(rm).replace(/bull/g,Fc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Gc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gb=/^[^\n]+/,Vc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,yb=De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Vc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bb=De(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Fc).getRegex(),bo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Yc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vb=De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Yc).replace("tag",bo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),om=De(Gc).replace("hr",qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex(),xb=De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",om).getRegex(),Xc={blockquote:xb,code:fb,def:yb,fences:pb,heading:mb,hr:qr,html:vb,lheading:im,list:bb,newline:db,paragraph:om,table:Br,text:gb},Qp=De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex(),Sb={...Xc,lheading:hb,table:Qp,paragraph:De(Gc).replace("hr",qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex()},wb={...Xc,html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Yc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Br,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(Gc).replace("hr",qr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",im).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Cb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lm=/^( {2,}|\\)\n(?!\s*$)/,Tb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vo=/[\p{P}\p{S}]/u,Kc=/[\s\p{P}\p{S}]/u,cm=/[^\s\p{P}\p{S}]/u,Eb=De(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Kc).getRegex(),um=/(?!~)[\p{P}\p{S}]/u,Ab=/(?!~)[\s\p{P}\p{S}]/u,Rb=/(?:[^\s\p{P}\p{S}]|~)/u,Nb=De(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ub?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),dm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Mb=De(dm,"u").replace(/punct/g,vo).getRegex(),Db=De(dm,"u").replace(/punct/g,um).getRegex(),fm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ob=De(fm,"gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,Kc).replace(/punct/g,vo).getRegex(),_b=De(fm,"gu").replace(/notPunctSpace/g,Rb).replace(/punctSpace/g,Ab).replace(/punct/g,um).getRegex(),Ub=De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,Kc).replace(/punct/g,vo).getRegex(),jb=De(/\\(punct)/,"gu").replace(/punct/g,vo).getRegex(),zb=De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Lb=De(Yc).replace("(?:-->|$)","-->").getRegex(),Bb=De("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Lb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),po=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Ib=De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",po).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pm=De(/^!?\[(label)\]\[(ref)\]/).replace("label",po).replace("ref",Vc).getRegex(),mm=De(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vc).getRegex(),Hb=De("reflink|nolink(?!\\()","g").replace("reflink",pm).replace("nolink",mm).getRegex(),Fp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Zc={_backpedal:Br,anyPunctuation:jb,autolink:zb,blockSkip:Nb,br:lm,code:kb,del:Br,emStrongLDelim:Mb,emStrongRDelimAst:Ob,emStrongRDelimUnd:Ub,escape:Cb,link:Ib,nolink:mm,punctuation:Eb,reflink:pm,reflinkSearch:Hb,tag:Bb,text:Tb,url:Br},qb={...Zc,link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",po).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",po).getRegex()},zc={...Zc,emStrongRDelimAst:_b,emStrongLDelim:Db,url:De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Fp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:De(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Fp).getRegex()},Pb={...zc,br:De(lm).replace("{2,}","*").getRegex(),text:De(zc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},co={normal:Xc,gfm:Sb,pedantic:wb},Ur={normal:Zc,gfm:zc,breaks:Pb,pedantic:qb},Qb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gp=l=>Qb[l];function Gt(l,i){if(i){if(zn.escapeTest.test(l))return l.replace(zn.escapeReplace,Gp)}else if(zn.escapeTestNoEncode.test(l))return l.replace(zn.escapeReplaceNoEncode,Gp);return l}function Vp(l){try{l=encodeURI(l).replace(zn.percentDecode,"%")}catch{return null}return l}function Yp(l,i){let u=l.replace(zn.findPipe,(h,m,k)=>{let b=!1,v=m;for(;--v>=0&&k[v]==="\\";)b=!b;return b?"|":" |"}),c=u.split(zn.splitPipe),d=0;if(c[0].trim()||c.shift(),c.length>0&&!c.at(-1)?.trim()&&c.pop(),i)if(c.length>i)c.splice(i);else for(;c.length<i;)c.push("");for(;d<c.length;d++)c[d]=c[d].trim().replace(zn.slashPipe,"|");return c}function jr(l,i,u){let c=l.length;if(c===0)return"";let d=0;for(;d<c&&l.charAt(c-d-1)===i;)d++;return l.slice(0,c-d)}function Fb(l,i){if(l.indexOf(i[1])===-1)return-1;let u=0;for(let c=0;c<l.length;c++)if(l[c]==="\\")c++;else if(l[c]===i[0])u++;else if(l[c]===i[1]&&(u--,u<0))return c;return u>0?-2:-1}function Xp(l,i,u,c,d){let h=i.href,m=i.title||null,k=l[1].replace(d.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:l[0].charAt(0)==="!"?"image":"link",raw:u,href:h,title:m,text:k,tokens:c.inlineTokens(k)};return c.state.inLink=!1,b}function Gb(l,i,u){let c=l.match(u.other.indentCodeCompensation);if(c===null)return i;let d=c[1];return i.split(`
`).map(h=>{let m=h.match(u.other.beginningSpace);if(m===null)return h;let[k]=m;return k.length>=d.length?h.slice(d.length):h}).join(`
`)}var mo=class{options;rules;lexer;constructor(l){this.options=l||Ya}space(l){let i=this.rules.block.newline.exec(l);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(l){let i=this.rules.block.code.exec(l);if(i){let u=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?u:jr(u,`
`)}}}fences(l){let i=this.rules.block.fences.exec(l);if(i){let u=i[0],c=Gb(u,i[3]||"",this.rules);return{type:"code",raw:u,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:c}}}heading(l){let i=this.rules.block.heading.exec(l);if(i){let u=i[2].trim();if(this.rules.other.endingHash.test(u)){let c=jr(u,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(u=c.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(l){let i=this.rules.block.hr.exec(l);if(i)return{type:"hr",raw:jr(i[0],`
`)}}blockquote(l){let i=this.rules.block.blockquote.exec(l);if(i){let u=jr(i[0],`
`).split(`
`),c="",d="",h=[];for(;u.length>0;){let m=!1,k=[],b;for(b=0;b<u.length;b++)if(this.rules.other.blockquoteStart.test(u[b]))k.push(u[b]),m=!0;else if(!m)k.push(u[b]);else break;u=u.slice(b);let v=k.join(`
`),E=v.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${v}`:v,d=d?`${d}
${E}`:E;let U=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,h,!0),this.lexer.state.top=U,u.length===0)break;let M=h.at(-1);if(M?.type==="code")break;if(M?.type==="blockquote"){let F=M,H=F.raw+`
`+u.join(`
`),X=this.blockquote(H);h[h.length-1]=X,c=c.substring(0,c.length-F.raw.length)+X.raw,d=d.substring(0,d.length-F.text.length)+X.text;break}else if(M?.type==="list"){let F=M,H=F.raw+`
`+u.join(`
`),X=this.list(H);h[h.length-1]=X,c=c.substring(0,c.length-M.raw.length)+X.raw,d=d.substring(0,d.length-F.raw.length)+X.raw,u=H.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:h,text:d}}}list(l){let i=this.rules.block.list.exec(l);if(i){let u=i[1].trim(),c=u.length>1,d={type:"list",raw:"",ordered:c,start:c?+u.slice(0,-1):"",loose:!1,items:[]};u=c?`\\d{1,9}\\${u.slice(-1)}`:`\\${u}`,this.options.pedantic&&(u=c?u:"[*+-]");let h=this.rules.other.listItemRegex(u),m=!1;for(;l;){let b=!1,v="",E="";if(!(i=h.exec(l))||this.rules.block.hr.test(l))break;v=i[0],l=l.substring(v.length);let U=i[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),M=l.split(`
`,1)[0],F=!U.trim(),H=0;if(this.options.pedantic?(H=2,E=U.trimStart()):F?H=i[1].length+1:(H=i[2].search(this.rules.other.nonSpaceChar),H=H>4?1:H,E=U.slice(H),H+=i[1].length),F&&this.rules.other.blankLine.test(M)&&(v+=M+`
`,l=l.substring(M.length+1),b=!0),!b){let X=this.rules.other.nextBulletRegex(H),Ae=this.rules.other.hrRegex(H),_e=this.rules.other.fencesBeginRegex(H),ke=this.rules.other.headingBeginRegex(H),V=this.rules.other.htmlBeginRegex(H);for(;l;){let oe=l.split(`
`,1)[0],ie;if(M=oe,this.options.pedantic?(M=M.replace(this.rules.other.listReplaceNesting,"  "),ie=M):ie=M.replace(this.rules.other.tabCharGlobal,"    "),_e.test(M)||ke.test(M)||V.test(M)||X.test(M)||Ae.test(M))break;if(ie.search(this.rules.other.nonSpaceChar)>=H||!M.trim())E+=`
`+ie.slice(H);else{if(F||U.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_e.test(U)||ke.test(U)||Ae.test(U))break;E+=`
`+M}!F&&!M.trim()&&(F=!0),v+=oe+`
`,l=l.substring(oe.length+1),U=ie.slice(H)}}d.loose||(m?d.loose=!0:this.rules.other.doubleBlankLine.test(v)&&(m=!0)),d.items.push({type:"list_item",raw:v,task:!!this.options.gfm&&this.rules.other.listIsTask.test(E),loose:!1,text:E,tokens:[]}),d.raw+=v}let k=d.items.at(-1);if(k)k.raw=k.raw.trimEnd(),k.text=k.text.trimEnd();else return;d.raw=d.raw.trimEnd();for(let b of d.items){if(this.lexer.state.top=!1,b.tokens=this.lexer.blockTokens(b.text,[]),b.task){if(b.text=b.text.replace(this.rules.other.listReplaceTask,""),b.tokens[0]?.type==="text"||b.tokens[0]?.type==="paragraph"){b.tokens[0].raw=b.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),b.tokens[0].text=b.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let E=this.lexer.inlineQueue.length-1;E>=0;E--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[E].src)){this.lexer.inlineQueue[E].src=this.lexer.inlineQueue[E].src.replace(this.rules.other.listReplaceTask,"");break}}let v=this.rules.other.listTaskCheckbox.exec(b.raw);if(v){let E={type:"checkbox",raw:v[0]+" ",checked:v[0]!=="[ ]"};b.checked=E.checked,d.loose?b.tokens[0]&&["paragraph","text"].includes(b.tokens[0].type)&&"tokens"in b.tokens[0]&&b.tokens[0].tokens?(b.tokens[0].raw=E.raw+b.tokens[0].raw,b.tokens[0].text=E.raw+b.tokens[0].text,b.tokens[0].tokens.unshift(E)):b.tokens.unshift({type:"paragraph",raw:E.raw,text:E.raw,tokens:[E]}):b.tokens.unshift(E)}}if(!d.loose){let v=b.tokens.filter(U=>U.type==="space"),E=v.length>0&&v.some(U=>this.rules.other.anyLine.test(U.raw));d.loose=E}}if(d.loose)for(let b of d.items){b.loose=!0;for(let v of b.tokens)v.type==="text"&&(v.type="paragraph")}return d}}html(l){let i=this.rules.block.html.exec(l);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(l){let i=this.rules.block.def.exec(l);if(i){let u=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:u,raw:i[0],href:c,title:d}}}table(l){let i=this.rules.block.table.exec(l);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let u=Yp(i[1]),c=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),d=i[3]?.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:i[0],header:[],align:[],rows:[]};if(u.length===c.length){for(let m of c)this.rules.other.tableAlignRight.test(m)?h.align.push("right"):this.rules.other.tableAlignCenter.test(m)?h.align.push("center"):this.rules.other.tableAlignLeft.test(m)?h.align.push("left"):h.align.push(null);for(let m=0;m<u.length;m++)h.header.push({text:u[m],tokens:this.lexer.inline(u[m]),header:!0,align:h.align[m]});for(let m of d)h.rows.push(Yp(m,h.header.length).map((k,b)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:h.align[b]})));return h}}lheading(l){let i=this.rules.block.lheading.exec(l);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(l){let i=this.rules.block.paragraph.exec(l);if(i){let u=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:u,tokens:this.lexer.inline(u)}}}text(l){let i=this.rules.block.text.exec(l);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(l){let i=this.rules.inline.escape.exec(l);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(l){let i=this.rules.inline.tag.exec(l);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(l){let i=this.rules.inline.link.exec(l);if(i){let u=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(u)){if(!this.rules.other.endAngleBracket.test(u))return;let h=jr(u.slice(0,-1),"\\");if((u.length-h.length)%2===0)return}else{let h=Fb(i[2],"()");if(h===-2)return;if(h>-1){let m=(i[0].indexOf("!")===0?5:4)+i[1].length+h;i[2]=i[2].substring(0,h),i[0]=i[0].substring(0,m).trim(),i[3]=""}}let c=i[2],d="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(c);h&&(c=h[1],d=h[3])}else d=i[3]?i[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(u)?c=c.slice(1):c=c.slice(1,-1)),Xp(i,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(l,i){let u;if((u=this.rules.inline.reflink.exec(l))||(u=this.rules.inline.nolink.exec(l))){let c=(u[2]||u[1]).replace(this.rules.other.multipleSpaceGlobal," "),d=i[c.toLowerCase()];if(!d){let h=u[0].charAt(0);return{type:"text",raw:h,text:h}}return Xp(u,d,u[0],this.lexer,this.rules)}}emStrong(l,i,u=""){let c=this.rules.inline.emStrongLDelim.exec(l);if(!(!c||c[3]&&u.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!u||this.rules.inline.punctuation.exec(u))){let d=[...c[0]].length-1,h,m,k=d,b=0,v=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,i=i.slice(-1*l.length+d);(c=v.exec(i))!=null;){if(h=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!h)continue;if(m=[...h].length,c[3]||c[4]){k+=m;continue}else if((c[5]||c[6])&&d%3&&!((d+m)%3)){b+=m;continue}if(k-=m,k>0)continue;m=Math.min(m,m+k+b);let E=[...c[0]][0].length,U=l.slice(0,d+c.index+E+m);if(Math.min(d,m)%2){let F=U.slice(1,-1);return{type:"em",raw:U,text:F,tokens:this.lexer.inlineTokens(F)}}let M=U.slice(2,-2);return{type:"strong",raw:U,text:M,tokens:this.lexer.inlineTokens(M)}}}}codespan(l){let i=this.rules.inline.code.exec(l);if(i){let u=i[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(u),d=this.rules.other.startingSpaceChar.test(u)&&this.rules.other.endingSpaceChar.test(u);return c&&d&&(u=u.substring(1,u.length-1)),{type:"codespan",raw:i[0],text:u}}}br(l){let i=this.rules.inline.br.exec(l);if(i)return{type:"br",raw:i[0]}}del(l){let i=this.rules.inline.del.exec(l);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(l){let i=this.rules.inline.autolink.exec(l);if(i){let u,c;return i[2]==="@"?(u=i[1],c="mailto:"+u):(u=i[1],c=u),{type:"link",raw:i[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}url(l){let i;if(i=this.rules.inline.url.exec(l)){let u,c;if(i[2]==="@")u=i[0],c="mailto:"+u;else{let d;do d=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(d!==i[0]);u=i[0],i[1]==="www."?c="http://"+i[0]:c=i[0]}return{type:"link",raw:i[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){let i=this.rules.inline.text.exec(l);if(i){let u=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:u}}}},mt=class Lc{tokens;options;state;inlineQueue;tokenizer;constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Ya,this.options.tokenizer=this.options.tokenizer||new mo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let u={other:zn,block:co.normal,inline:Ur.normal};this.options.pedantic?(u.block=co.pedantic,u.inline=Ur.pedantic):this.options.gfm&&(u.block=co.gfm,this.options.breaks?u.inline=Ur.breaks:u.inline=Ur.gfm),this.tokenizer.rules=u}static get rules(){return{block:co,inline:Ur}}static lex(i,u){return new Lc(u).lex(i)}static lexInline(i,u){return new Lc(u).inlineTokens(i)}lex(i){i=i.replace(zn.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let u=0;u<this.inlineQueue.length;u++){let c=this.inlineQueue[u];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,u=[],c=!1){for(this.options.pedantic&&(i=i.replace(zn.tabCharGlobal,"    ").replace(zn.spaceLine,""));i;){let d;if(this.options.extensions?.block?.some(m=>(d=m.call({lexer:this},i,u))?(i=i.substring(d.raw.length),u.push(d),!0):!1))continue;if(d=this.tokenizer.space(i)){i=i.substring(d.raw.length);let m=u.at(-1);d.raw.length===1&&m!==void 0?m.raw+=`
`:u.push(d);continue}if(d=this.tokenizer.code(i)){i=i.substring(d.raw.length);let m=u.at(-1);m?.type==="paragraph"||m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.at(-1).src=m.text):u.push(d);continue}if(d=this.tokenizer.fences(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.heading(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.hr(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.blockquote(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.list(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.html(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.def(i)){i=i.substring(d.raw.length);let m=u.at(-1);m?.type==="paragraph"||m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},u.push(d));continue}if(d=this.tokenizer.table(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.lheading(i)){i=i.substring(d.raw.length),u.push(d);continue}let h=i;if(this.options.extensions?.startBlock){let m=1/0,k=i.slice(1),b;this.options.extensions.startBlock.forEach(v=>{b=v.call({lexer:this},k),typeof b=="number"&&b>=0&&(m=Math.min(m,b))}),m<1/0&&m>=0&&(h=i.substring(0,m+1))}if(this.state.top&&(d=this.tokenizer.paragraph(h))){let m=u.at(-1);c&&m?.type==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):u.push(d),c=h.length!==i.length,i=i.substring(d.raw.length);continue}if(d=this.tokenizer.text(i)){i=i.substring(d.raw.length);let m=u.at(-1);m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):u.push(d);continue}if(i){let m="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,u}inline(i,u=[]){return this.inlineQueue.push({src:i,tokens:u}),u}inlineTokens(i,u=[]){let c=i,d=null;if(this.tokens.links){let b=Object.keys(this.tokens.links);if(b.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)b.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,d.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(d=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)h=d[2]?d[2].length:0,c=c.slice(0,d.index+h)+"["+"a".repeat(d[0].length-h-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=this.options.hooks?.emStrongMask?.call({lexer:this},c)??c;let m=!1,k="";for(;i;){m||(k=""),m=!1;let b;if(this.options.extensions?.inline?.some(E=>(b=E.call({lexer:this},i,u))?(i=i.substring(b.raw.length),u.push(b),!0):!1))continue;if(b=this.tokenizer.escape(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.tag(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.link(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(b.raw.length);let E=u.at(-1);b.type==="text"&&E?.type==="text"?(E.raw+=b.raw,E.text+=b.text):u.push(b);continue}if(b=this.tokenizer.emStrong(i,c,k)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.codespan(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.br(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.del(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.autolink(i)){i=i.substring(b.raw.length),u.push(b);continue}if(!this.state.inLink&&(b=this.tokenizer.url(i))){i=i.substring(b.raw.length),u.push(b);continue}let v=i;if(this.options.extensions?.startInline){let E=1/0,U=i.slice(1),M;this.options.extensions.startInline.forEach(F=>{M=F.call({lexer:this},U),typeof M=="number"&&M>=0&&(E=Math.min(E,M))}),E<1/0&&E>=0&&(v=i.substring(0,E+1))}if(b=this.tokenizer.inlineText(v)){i=i.substring(b.raw.length),b.raw.slice(-1)!=="_"&&(k=b.raw.slice(-1)),m=!0;let E=u.at(-1);E?.type==="text"?(E.raw+=b.raw,E.text+=b.text):u.push(b);continue}if(i){let E="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(E);break}else throw new Error(E)}}return u}},ho=class{options;parser;constructor(l){this.options=l||Ya}space(l){return""}code({text:l,lang:i,escaped:u}){let c=(i||"").match(zn.notSpaceStart)?.[0],d=l.replace(zn.endingNewline,"")+`
`;return c?'<pre><code class="language-'+Gt(c)+'">'+(u?d:Gt(d,!0))+`</code></pre>
`:"<pre><code>"+(u?d:Gt(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}def(l){return""}heading({tokens:l,depth:i}){return`<h${i}>${this.parser.parseInline(l)}</h${i}>
`}hr(l){return`<hr>
`}list(l){let i=l.ordered,u=l.start,c="";for(let m=0;m<l.items.length;m++){let k=l.items[m];c+=this.listitem(k)}let d=i?"ol":"ul",h=i&&u!==1?' start="'+u+'"':"";return"<"+d+h+`>
`+c+"</"+d+`>
`}listitem(l){return`<li>${this.parser.parse(l.tokens)}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let i="",u="";for(let d=0;d<l.header.length;d++)u+=this.tablecell(l.header[d]);i+=this.tablerow({text:u});let c="";for(let d=0;d<l.rows.length;d++){let h=l.rows[d];u="";for(let m=0;m<h.length;m++)u+=this.tablecell(h[m]);c+=this.tablerow({text:u})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+c+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){let i=this.parser.parseInline(l.tokens),u=l.header?"th":"td";return(l.align?`<${u} align="${l.align}">`:`<${u}>`)+i+`</${u}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Gt(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:i,tokens:u}){let c=this.parser.parseInline(u),d=Vp(l);if(d===null)return c;l=d;let h='<a href="'+l+'"';return i&&(h+=' title="'+Gt(i)+'"'),h+=">"+c+"</a>",h}image({href:l,title:i,text:u,tokens:c}){c&&(u=this.parser.parseInline(c,this.parser.textRenderer));let d=Vp(l);if(d===null)return Gt(u);l=d;let h=`<img src="${l}" alt="${u}"`;return i&&(h+=` title="${Gt(i)}"`),h+=">",h}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Gt(l.text)}},Wc=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}checkbox({raw:l}){return l}},ht=class Bc{options;renderer;textRenderer;constructor(i){this.options=i||Ya,this.options.renderer=this.options.renderer||new ho,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wc}static parse(i,u){return new Bc(u).parse(i)}static parseInline(i,u){return new Bc(u).parseInline(i)}parse(i){let u="";for(let c=0;c<i.length;c++){let d=i[c];if(this.options.extensions?.renderers?.[d.type]){let m=d,k=this.options.extensions.renderers[m.type].call({parser:this},m);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(m.type)){u+=k||"";continue}}let h=d;switch(h.type){case"space":{u+=this.renderer.space(h);break}case"hr":{u+=this.renderer.hr(h);break}case"heading":{u+=this.renderer.heading(h);break}case"code":{u+=this.renderer.code(h);break}case"table":{u+=this.renderer.table(h);break}case"blockquote":{u+=this.renderer.blockquote(h);break}case"list":{u+=this.renderer.list(h);break}case"checkbox":{u+=this.renderer.checkbox(h);break}case"html":{u+=this.renderer.html(h);break}case"def":{u+=this.renderer.def(h);break}case"paragraph":{u+=this.renderer.paragraph(h);break}case"text":{u+=this.renderer.text(h);break}default:{let m='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return u}parseInline(i,u=this.renderer){let c="";for(let d=0;d<i.length;d++){let h=i[d];if(this.options.extensions?.renderers?.[h.type]){let k=this.options.extensions.renderers[h.type].call({parser:this},h);if(k!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){c+=k||"";continue}}let m=h;switch(m.type){case"escape":{c+=u.text(m);break}case"html":{c+=u.html(m);break}case"link":{c+=u.link(m);break}case"image":{c+=u.image(m);break}case"checkbox":{c+=u.checkbox(m);break}case"strong":{c+=u.strong(m);break}case"em":{c+=u.em(m);break}case"codespan":{c+=u.codespan(m);break}case"br":{c+=u.br(m);break}case"del":{c+=u.del(m);break}case"text":{c+=u.text(m);break}default:{let k='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(k),"";throw new Error(k)}}}return c}},Lr=class{options;block;constructor(l){this.options=l||Ya}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}emStrongMask(l){return l}provideLexer(){return this.block?mt.lex:mt.lexInline}provideParser(){return this.block?ht.parse:ht.parseInline}},Vb=class{defaults=Qc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ht;Renderer=ho;TextRenderer=Wc;Lexer=mt;Tokenizer=mo;Hooks=Lr;constructor(...l){this.use(...l)}walkTokens(l,i){let u=[];for(let c of l)switch(u=u.concat(i.call(this,c)),c.type){case"table":{let d=c;for(let h of d.header)u=u.concat(this.walkTokens(h.tokens,i));for(let h of d.rows)for(let m of h)u=u.concat(this.walkTokens(m.tokens,i));break}case"list":{let d=c;u=u.concat(this.walkTokens(d.items,i));break}default:{let d=c;this.defaults.extensions?.childTokens?.[d.type]?this.defaults.extensions.childTokens[d.type].forEach(h=>{let m=d[h].flat(1/0);u=u.concat(this.walkTokens(m,i))}):d.tokens&&(u=u.concat(this.walkTokens(d.tokens,i)))}}return u}use(...l){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(u=>{let c={...u};if(c.async=this.defaults.async||c.async||!1,u.extensions&&(u.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){let h=i.renderers[d.name];h?i.renderers[d.name]=function(...m){let k=d.renderer.apply(this,m);return k===!1&&(k=h.apply(this,m)),k}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=i[d.level];h?h.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),c.extensions=i),u.renderer){let d=this.defaults.renderer||new ho(this.defaults);for(let h in u.renderer){if(!(h in d))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let m=h,k=u.renderer[m],b=d[m];d[m]=(...v)=>{let E=k.apply(d,v);return E===!1&&(E=b.apply(d,v)),E||""}}c.renderer=d}if(u.tokenizer){let d=this.defaults.tokenizer||new mo(this.defaults);for(let h in u.tokenizer){if(!(h in d))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let m=h,k=u.tokenizer[m],b=d[m];d[m]=(...v)=>{let E=k.apply(d,v);return E===!1&&(E=b.apply(d,v)),E}}c.tokenizer=d}if(u.hooks){let d=this.defaults.hooks||new Lr;for(let h in u.hooks){if(!(h in d))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let m=h,k=u.hooks[m],b=d[m];Lr.passThroughHooks.has(h)?d[m]=v=>{if(this.defaults.async&&Lr.passThroughHooksRespectAsync.has(h))return(async()=>{let U=await k.call(d,v);return b.call(d,U)})();let E=k.call(d,v);return b.call(d,E)}:d[m]=(...v)=>{if(this.defaults.async)return(async()=>{let U=await k.apply(d,v);return U===!1&&(U=await b.apply(d,v)),U})();let E=k.apply(d,v);return E===!1&&(E=b.apply(d,v)),E}}c.hooks=d}if(u.walkTokens){let d=this.defaults.walkTokens,h=u.walkTokens;c.walkTokens=function(m){let k=[];return k.push(h.call(this,m)),d&&(k=k.concat(d.call(this,m))),k}}this.defaults={...this.defaults,...c}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,i){return mt.lex(l,i??this.defaults)}parser(l,i){return ht.parse(l,i??this.defaults)}parseMarkdown(l){return(i,u)=>{let c={...u},d={...this.defaults,...c},h=this.onError(!!d.silent,!!d.async);if(this.defaults.async===!0&&c.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(d.hooks&&(d.hooks.options=d,d.hooks.block=l),d.async)return(async()=>{let m=d.hooks?await d.hooks.preprocess(i):i,k=await(d.hooks?await d.hooks.provideLexer():l?mt.lex:mt.lexInline)(m,d),b=d.hooks?await d.hooks.processAllTokens(k):k;d.walkTokens&&await Promise.all(this.walkTokens(b,d.walkTokens));let v=await(d.hooks?await d.hooks.provideParser():l?ht.parse:ht.parseInline)(b,d);return d.hooks?await d.hooks.postprocess(v):v})().catch(h);try{d.hooks&&(i=d.hooks.preprocess(i));let m=(d.hooks?d.hooks.provideLexer():l?mt.lex:mt.lexInline)(i,d);d.hooks&&(m=d.hooks.processAllTokens(m)),d.walkTokens&&this.walkTokens(m,d.walkTokens);let k=(d.hooks?d.hooks.provideParser():l?ht.parse:ht.parseInline)(m,d);return d.hooks&&(k=d.hooks.postprocess(k)),k}catch(m){return h(m)}}}onError(l,i){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,l){let c="<p>An error occurred:</p><pre>"+Gt(u.message+"",!0)+"</pre>";return i?Promise.resolve(c):c}if(i)return Promise.reject(u);throw u}}},Ga=new Vb;function Ue(l,i){return Ga.parse(l,i)}Ue.options=Ue.setOptions=function(l){return Ga.setOptions(l),Ue.defaults=Ga.defaults,sm(Ue.defaults),Ue};Ue.getDefaults=Qc;Ue.defaults=Ya;Ue.use=function(...l){return Ga.use(...l),Ue.defaults=Ga.defaults,sm(Ue.defaults),Ue};Ue.walkTokens=function(l,i){return Ga.walkTokens(l,i)};Ue.parseInline=Ga.parseInline;Ue.Parser=ht;Ue.parser=ht.parse;Ue.Renderer=ho;Ue.TextRenderer=Wc;Ue.Lexer=mt;Ue.lexer=mt.lex;Ue.Tokenizer=mo;Ue.Hooks=Lr;Ue.parse=Ue;Ue.options;Ue.setOptions;Ue.use;Ue.walkTokens;Ue.parseInline;ht.parse;mt.lex;var _c,Kp;function Yb(){if(Kp)return _c;Kp=1;function l(y){return y instanceof Map?y.clear=y.delete=y.set=function(){throw new Error("map is read-only")}:y instanceof Set&&(y.add=y.clear=y.delete=function(){throw new Error("set is read-only")}),Object.freeze(y),Object.getOwnPropertyNames(y).forEach(j=>{const Q=y[j],le=typeof Q;(le==="object"||le==="function")&&!Object.isFrozen(Q)&&l(Q)}),y}class i{constructor(j){j.data===void 0&&(j.data={}),this.data=j.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function u(y){return y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(y,...j){const Q=Object.create(null);for(const le in y)Q[le]=y[le];return j.forEach(function(le){for(const Ve in le)Q[Ve]=le[Ve]}),Q}const d="</span>",h=y=>!!y.scope,m=(y,{prefix:j})=>{if(y.startsWith("language:"))return y.replace("language:","language-");if(y.includes(".")){const Q=y.split(".");return[`${j}${Q.shift()}`,...Q.map((le,Ve)=>`${le}${"_".repeat(Ve+1)}`)].join(" ")}return`${j}${y}`};class k{constructor(j,Q){this.buffer="",this.classPrefix=Q.classPrefix,j.walk(this)}addText(j){this.buffer+=u(j)}openNode(j){if(!h(j))return;const Q=m(j.scope,{prefix:this.classPrefix});this.span(Q)}closeNode(j){h(j)&&(this.buffer+=d)}value(){return this.buffer}span(j){this.buffer+=`<span class="${j}">`}}const b=(y={})=>{const j={children:[]};return Object.assign(j,y),j};class v{constructor(){this.rootNode=b(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(j){this.top.children.push(j)}openNode(j){const Q=b({scope:j});this.add(Q),this.stack.push(Q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(j){return this.constructor._walk(j,this.rootNode)}static _walk(j,Q){return typeof Q=="string"?j.addText(Q):Q.children&&(j.openNode(Q),Q.children.forEach(le=>this._walk(j,le)),j.closeNode(Q)),j}static _collapse(j){typeof j!="string"&&j.children&&(j.children.every(Q=>typeof Q=="string")?j.children=[j.children.join("")]:j.children.forEach(Q=>{v._collapse(Q)}))}}class E extends v{constructor(j){super(),this.options=j}addText(j){j!==""&&this.add(j)}startScope(j){this.openNode(j)}endScope(){this.closeNode()}__addSublanguage(j,Q){const le=j.root;Q&&(le.scope=`language:${Q}`),this.add(le)}toHTML(){return new k(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function U(y){return y?typeof y=="string"?y:y.source:null}function M(y){return X("(?=",y,")")}function F(y){return X("(?:",y,")*")}function H(y){return X("(?:",y,")?")}function X(...y){return y.map(Q=>U(Q)).join("")}function Ae(y){const j=y[y.length-1];return typeof j=="object"&&j.constructor===Object?(y.splice(y.length-1,1),j):{}}function _e(...y){return"("+(Ae(y).capture?"":"?:")+y.map(le=>U(le)).join("|")+")"}function ke(y){return new RegExp(y.toString()+"|").exec("").length-1}function V(y,j){const Q=y&&y.exec(j);return Q&&Q.index===0}const oe=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ie(y,{joinWith:j}){let Q=0;return y.map(le=>{Q+=1;const Ve=Q;let Pe=U(le),W="";for(;Pe.length>0;){const G=oe.exec(Pe);if(!G){W+=Pe;break}W+=Pe.substring(0,G.index),Pe=Pe.substring(G.index+G[0].length),G[0][0]==="\\"&&G[1]?W+="\\"+String(Number(G[1])+Ve):(W+=G[0],G[0]==="("&&Q++)}return W}).map(le=>`(${le})`).join(j)}const ye=/\b\B/,te="[a-zA-Z]\\w*",Te="[a-zA-Z_]\\w*",Ke="\\b\\d+(\\.\\d+)?",en="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Je="\\b(0b[01]+)",nn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Sn=(y={})=>{const j=/^#![ ]*\//;return y.binary&&(y.begin=X(j,/.*\b/,y.binary,/\b.*/)),c({scope:"meta",begin:j,end:/$/,relevance:0,"on:begin":(Q,le)=>{Q.index!==0&&le.ignoreMatch()}},y)},tn={begin:"\\\\[\\s\\S]",relevance:0},vn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[tn]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[tn]},O={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},I=function(y,j,Q={}){const le=c({scope:"comment",begin:y,end:j,contains:[]},Q);le.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Ve=_e("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return le.contains.push({begin:X(/[ ]+/,"(",Ve,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),le},Z=I("//","$"),de=I("/\\*","\\*/"),x=I("#","$"),_={scope:"number",begin:Ke,relevance:0},P={scope:"number",begin:en,relevance:0},K={scope:"number",begin:Je,relevance:0},ce={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[tn,{begin:/\[/,end:/\]/,relevance:0,contains:[tn]}]},ge={scope:"title",begin:te,relevance:0},Re={scope:"title",begin:Te,relevance:0},Cn={begin:"\\.\\s*"+Te,relevance:0};var gt=Object.freeze({__proto__:null,APOS_STRING_MODE:vn,BACKSLASH_ESCAPE:tn,BINARY_NUMBER_MODE:K,BINARY_NUMBER_RE:Je,COMMENT:I,C_BLOCK_COMMENT_MODE:de,C_LINE_COMMENT_MODE:Z,C_NUMBER_MODE:P,C_NUMBER_RE:en,END_SAME_AS_BEGIN:function(y){return Object.assign(y,{"on:begin":(j,Q)=>{Q.data._beginMatch=j[1]},"on:end":(j,Q)=>{Q.data._beginMatch!==j[1]&&Q.ignoreMatch()}})},HASH_COMMENT_MODE:x,IDENT_RE:te,MATCH_NOTHING_RE:ye,METHOD_GUARD:Cn,NUMBER_MODE:_,NUMBER_RE:Ke,PHRASAL_WORDS_MODE:O,QUOTE_STRING_MODE:N,REGEXP_MODE:ce,RE_STARTERS_RE:nn,SHEBANG:Sn,TITLE_MODE:ge,UNDERSCORE_IDENT_RE:Te,UNDERSCORE_TITLE_MODE:Re});function Xa(y,j){y.input[y.index-1]==="."&&j.ignoreMatch()}function _s(y,j){y.className!==void 0&&(y.scope=y.className,delete y.className)}function Pr(y,j){j&&y.beginKeywords&&(y.begin="\\b("+y.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",y.__beforeBegin=Xa,y.keywords=y.keywords||y.beginKeywords,delete y.beginKeywords,y.relevance===void 0&&(y.relevance=0))}function Ct(y,j){Array.isArray(y.illegal)&&(y.illegal=_e(...y.illegal))}function Us(y,j){if(y.match){if(y.begin||y.end)throw new Error("begin & end are not supported with match");y.begin=y.match,delete y.match}}function js(y,j){y.relevance===void 0&&(y.relevance=1)}const xo=(y,j)=>{if(!y.beforeMatch)return;if(y.starts)throw new Error("beforeMatch cannot be used with starts");const Q=Object.assign({},y);Object.keys(y).forEach(le=>{delete y[le]}),y.keywords=Q.keywords,y.begin=X(Q.beforeMatch,M(Q.begin)),y.starts={relevance:0,contains:[Object.assign(Q,{endsParent:!0})]},y.relevance=0,delete Q.beforeMatch},Qr=["of","and","for","in","not","or","if","then","parent","list","value"],zs="keyword";function Ka(y,j,Q=zs){const le=Object.create(null);return typeof y=="string"?Ve(Q,y.split(" ")):Array.isArray(y)?Ve(Q,y):Object.keys(y).forEach(function(Pe){Object.assign(le,Ka(y[Pe],j,Pe))}),le;function Ve(Pe,W){j&&(W=W.map(G=>G.toLowerCase())),W.forEach(function(G){const re=G.split("|");le[re[0]]=[Pe,Ls(re[0],re[1])]})}}function Ls(y,j){return j?Number(j):So(y)?0:1}function So(y){return Qr.includes(y.toLowerCase())}const Fr={},on=y=>{console.error(y)},Gr=(y,...j)=>{console.log(`WARN: ${y}`,...j)},kt=(y,j)=>{Fr[`${y}/${j}`]||(console.log(`Deprecated as of ${y}. ${j}`),Fr[`${y}/${j}`]=!0)},Sa=new Error;function wa(y,j,{key:Q}){let le=0;const Ve=y[Q],Pe={},W={};for(let G=1;G<=j.length;G++)W[G+le]=Ve[G],Pe[G+le]=!0,le+=ke(j[G-1]);y[Q]=W,y[Q]._emit=Pe,y[Q]._multi=!0}function wo(y){if(Array.isArray(y.begin)){if(y.skip||y.excludeBegin||y.returnBegin)throw on("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Sa;if(typeof y.beginScope!="object"||y.beginScope===null)throw on("beginScope must be object"),Sa;wa(y,y.begin,{key:"beginScope"}),y.begin=ie(y.begin,{joinWith:""})}}function Vr(y){if(Array.isArray(y.end)){if(y.skip||y.excludeEnd||y.returnEnd)throw on("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Sa;if(typeof y.endScope!="object"||y.endScope===null)throw on("endScope must be object"),Sa;wa(y,y.end,{key:"endScope"}),y.end=ie(y.end,{joinWith:""})}}function Co(y){y.scope&&typeof y.scope=="object"&&y.scope!==null&&(y.beginScope=y.scope,delete y.scope)}function ko(y){Co(y),typeof y.beginScope=="string"&&(y.beginScope={_wrap:y.beginScope}),typeof y.endScope=="string"&&(y.endScope={_wrap:y.endScope}),wo(y),Vr(y)}function Ca(y){function j(W,G){return new RegExp(U(W),"m"+(y.case_insensitive?"i":"")+(y.unicodeRegex?"u":"")+(G?"g":""))}class Q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(G,re){re.position=this.position++,this.matchIndexes[this.matchAt]=re,this.regexes.push([re,G]),this.matchAt+=ke(G)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const G=this.regexes.map(re=>re[1]);this.matcherRe=j(ie(G,{joinWith:"|"}),!0),this.lastIndex=0}exec(G){this.matcherRe.lastIndex=this.lastIndex;const re=this.matcherRe.exec(G);if(!re)return null;const ln=re.findIndex((Tt,Wa)=>Wa>0&&Tt!==void 0),Ze=this.matchIndexes[ln];return re.splice(0,ln),Object.assign(re,Ze)}}class le{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(G){if(this.multiRegexes[G])return this.multiRegexes[G];const re=new Q;return this.rules.slice(G).forEach(([ln,Ze])=>re.addRule(ln,Ze)),re.compile(),this.multiRegexes[G]=re,re}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(G,re){this.rules.push([G,re]),re.type==="begin"&&this.count++}exec(G){const re=this.getMatcher(this.regexIndex);re.lastIndex=this.lastIndex;let ln=re.exec(G);if(this.resumingScanAtSamePosition()&&!(ln&&ln.index===this.lastIndex)){const Ze=this.getMatcher(0);Ze.lastIndex=this.lastIndex+1,ln=Ze.exec(G)}return ln&&(this.regexIndex+=ln.position+1,this.regexIndex===this.count&&this.considerAll()),ln}}function Ve(W){const G=new le;return W.contains.forEach(re=>G.addRule(re.begin,{rule:re,type:"begin"})),W.terminatorEnd&&G.addRule(W.terminatorEnd,{type:"end"}),W.illegal&&G.addRule(W.illegal,{type:"illegal"}),G}function Pe(W,G){const re=W;if(W.isCompiled)return re;[_s,Us,ko,xo].forEach(Ze=>Ze(W,G)),y.compilerExtensions.forEach(Ze=>Ze(W,G)),W.__beforeBegin=null,[Pr,Ct,js].forEach(Ze=>Ze(W,G)),W.isCompiled=!0;let ln=null;return typeof W.keywords=="object"&&W.keywords.$pattern&&(W.keywords=Object.assign({},W.keywords),ln=W.keywords.$pattern,delete W.keywords.$pattern),ln=ln||/\w+/,W.keywords&&(W.keywords=Ka(W.keywords,y.case_insensitive)),re.keywordPatternRe=j(ln,!0),G&&(W.begin||(W.begin=/\B|\b/),re.beginRe=j(re.begin),!W.end&&!W.endsWithParent&&(W.end=/\B|\b/),W.end&&(re.endRe=j(re.end)),re.terminatorEnd=U(re.end)||"",W.endsWithParent&&G.terminatorEnd&&(re.terminatorEnd+=(W.end?"|":"")+G.terminatorEnd)),W.illegal&&(re.illegalRe=j(W.illegal)),W.contains||(W.contains=[]),W.contains=[].concat(...W.contains.map(function(Ze){return yt(Ze==="self"?W:Ze)})),W.contains.forEach(function(Ze){Pe(Ze,re)}),W.starts&&Pe(W.starts,G),re.matcher=Ve(re),re}if(y.compilerExtensions||(y.compilerExtensions=[]),y.contains&&y.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return y.classNameAliases=c(y.classNameAliases||{}),Pe(y)}function Nn(y){return y?y.endsWithParent||Nn(y.starts):!1}function yt(y){return y.variants&&!y.cachedVariants&&(y.cachedVariants=y.variants.map(function(j){return c(y,{variants:null},j)})),y.cachedVariants?y.cachedVariants:Nn(y)?c(y,{starts:y.starts?c(y.starts):null}):Object.isFrozen(y)?c(y):y}var _n="11.11.1";class To extends Error{constructor(j,Q){super(j),this.name="HTMLInjectionError",this.html=Q}}const Bs=u,Yr=c,ka=Symbol("nomatch"),Za=7,Ta=function(y){const j=Object.create(null),Q=Object.create(null),le=[];let Ve=!0;const Pe="Could not find the language '{}', did you forget to load/include a language module?",W={disableAutodetect:!0,name:"Plain text",contains:[]};let G={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:E};function re(B){return G.noHighlightRe.test(B)}function ln(B){let ee=B.className+" ";ee+=B.parentNode?B.parentNode.className:"";const be=G.languageDetectRe.exec(ee);if(be){const je=Un(be[1]);return je||(Gr(Pe.replace("{}",be[1])),Gr("Falling back to no-highlight mode for this block.",B)),je?be[1]:"no-highlight"}return ee.split(/\s+/).find(je=>re(je)||Un(je))}function Ze(B,ee,be){let je="",un="";typeof ee=="object"?(je=B,be=ee.ignoreIllegals,un=ee.language):(kt("10.7.0","highlight(lang, code, ...args) has been deprecated."),kt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),un=B,je=ee),be===void 0&&(be=!0);const Dn={code:je,language:un};Aa("before:highlight",Dn);const Vn=Dn.result?Dn.result:Tt(Dn.language,Dn.code,be);return Vn.code=Dn.code,Aa("after:highlight",Vn),Vn}function Tt(B,ee,be,je){const un=Object.create(null);function Dn(q,J){return q.keywords[J]}function Vn(){if(!se.keywords){mn.addText(ze);return}let q=0;se.keywordPatternRe.lastIndex=0;let J=se.keywordPatternRe.exec(ze),fe="";for(;J;){fe+=ze.substring(q,J.index);const Se=kn.case_insensitive?J[0].toLowerCase():J[0],$e=Dn(se,Se);if($e){const[tt,Fs]=$e;if(mn.addText(fe),fe="",un[Se]=(un[Se]||0)+1,un[Se]<=Za&&(Kt+=Fs),tt.startsWith("_"))fe+=J[0];else{const ei=kn.classNameAliases[tt]||tt;Yn(J[0],ei)}}else fe+=J[0];q=se.keywordPatternRe.lastIndex,J=se.keywordPatternRe.exec(ze)}fe+=ze.substring(q),mn.addText(fe)}function Bn(){if(ze==="")return;let q=null;if(typeof se.subLanguage=="string"){if(!j[se.subLanguage]){mn.addText(ze);return}q=Tt(se.subLanguage,ze,!0,$r[se.subLanguage]),$r[se.subLanguage]=q._top}else q=Ja(ze,se.subLanguage.length?se.subLanguage:null);se.relevance>0&&(Kt+=q.relevance),mn.__addSublanguage(q._emitter,q.language)}function Fe(){se.subLanguage!=null?Bn():Vn(),ze=""}function Yn(q,J){q!==""&&(mn.startScope(J),mn.addText(q),mn.endScope())}function Wr(q,J){let fe=1;const Se=J.length-1;for(;fe<=Se;){if(!q._emit[fe]){fe++;continue}const $e=kn.classNameAliases[q[fe]]||q[fe],tt=J[fe];$e?Yn(tt,$e):(ze=tt,Vn(),ze=""),fe++}}function es(q,J){return q.scope&&typeof q.scope=="string"&&mn.openNode(kn.classNameAliases[q.scope]||q.scope),q.beginScope&&(q.beginScope._wrap?(Yn(ze,kn.classNameAliases[q.beginScope._wrap]||q.beginScope._wrap),ze=""):q.beginScope._multi&&(Wr(q.beginScope,J),ze="")),se=Object.create(q,{parent:{value:se}}),se}function qs(q,J,fe){let Se=V(q.endRe,fe);if(Se){if(q["on:end"]){const $e=new i(q);q["on:end"](J,$e),$e.isMatchIgnored&&(Se=!1)}if(Se){for(;q.endsParent&&q.parent;)q=q.parent;return q}}if(q.endsWithParent)return qs(q.parent,J,fe)}function ns(q){return se.matcher.regexIndex===0?(ze+=q[0],1):(Zt=!0,0)}function Eo(q){const J=q[0],fe=q.rule,Se=new i(fe),$e=[fe.__beforeBegin,fe["on:begin"]];for(const tt of $e)if(tt&&(tt(q,Se),Se.isMatchIgnored))return ns(J);return fe.skip?ze+=J:(fe.excludeBegin&&(ze+=J),Fe(),!fe.returnBegin&&!fe.excludeBegin&&(ze=J)),es(fe,q),fe.returnBegin?0:J.length}function In(q){const J=q[0],fe=ee.substring(q.index),Se=qs(se,q,fe);if(!Se)return ka;const $e=se;se.endScope&&se.endScope._wrap?(Fe(),Yn(J,se.endScope._wrap)):se.endScope&&se.endScope._multi?(Fe(),Wr(se.endScope,q)):$e.skip?ze+=J:($e.returnEnd||$e.excludeEnd||(ze+=J),Fe(),$e.excludeEnd&&(ze=J));do se.scope&&mn.closeNode(),!se.skip&&!se.subLanguage&&(Kt+=se.relevance),se=se.parent;while(se!==Se.parent);return Se.starts&&es(Se.starts,q),$e.returnEnd?0:J.length}function Ps(){const q=[];for(let J=se;J!==kn;J=J.parent)J.scope&&q.unshift(J.scope);q.forEach(J=>mn.openNode(J))}let Ra={};function ts(q,J){const fe=J&&J[0];if(ze+=q,fe==null)return Fe(),0;if(Ra.type==="begin"&&J.type==="end"&&Ra.index===J.index&&fe===""){if(ze+=ee.slice(J.index,J.index+1),!Ve){const Se=new Error(`0 width match regex (${B})`);throw Se.languageName=B,Se.badRule=Ra.rule,Se}return 1}if(Ra=J,J.type==="begin")return Eo(J);if(J.type==="illegal"&&!be){const Se=new Error('Illegal lexeme "'+fe+'" for mode "'+(se.scope||"<unnamed>")+'"');throw Se.mode=se,Se}else if(J.type==="end"){const Se=In(J);if(Se!==ka)return Se}if(J.type==="illegal"&&fe==="")return ze+=`
`,1;if(Qs>1e5&&Qs>J.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ze+=fe,fe.length}const kn=Un(B);if(!kn)throw on(Pe.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Jr=Ca(kn);let as="",se=je||Jr;const $r={},mn=new G.__emitter(G);Ps();let ze="",Kt=0,Rt=0,Qs=0,Zt=!1;try{if(kn.__emitTokens)kn.__emitTokens(ee,mn);else{for(se.matcher.considerAll();;){Qs++,Zt?Zt=!1:se.matcher.considerAll(),se.matcher.lastIndex=Rt;const q=se.matcher.exec(ee);if(!q)break;const J=ee.substring(Rt,q.index),fe=ts(J,q);Rt=q.index+fe}ts(ee.substring(Rt))}return mn.finalize(),as=mn.toHTML(),{language:B,value:as,relevance:Kt,illegal:!1,_emitter:mn,_top:se}}catch(q){if(q.message&&q.message.includes("Illegal"))return{language:B,value:Bs(ee),illegal:!0,relevance:0,_illegalBy:{message:q.message,index:Rt,context:ee.slice(Rt-100,Rt+100),mode:q.mode,resultSoFar:as},_emitter:mn};if(Ve)return{language:B,value:Bs(ee),illegal:!1,relevance:0,errorRaised:q,_emitter:mn,_top:se};throw q}}function Wa(B){const ee={value:Bs(B),illegal:!1,relevance:0,_top:W,_emitter:new G.__emitter(G)};return ee._emitter.addText(B),ee}function Ja(B,ee){ee=ee||G.languages||Object.keys(j);const be=Wa(B),je=ee.filter(Un).filter(Yt).map(Fe=>Tt(Fe,B,!1));je.unshift(be);const un=je.sort((Fe,Yn)=>{if(Fe.relevance!==Yn.relevance)return Yn.relevance-Fe.relevance;if(Fe.language&&Yn.language){if(Un(Fe.language).supersetOf===Yn.language)return 1;if(Un(Yn.language).supersetOf===Fe.language)return-1}return 0}),[Dn,Vn]=un,Bn=Dn;return Bn.secondBest=Vn,Bn}function bt(B,ee,be){const je=ee&&Q[ee]||be;B.classList.add("hljs"),B.classList.add(`language-${je}`)}function cn(B){let ee=null;const be=ln(B);if(re(be))return;if(Aa("before:highlightElement",{el:B,language:be}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(G.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),G.throwUnescapedHTML))throw new To("One of your code blocks includes unescaped HTML.",B.innerHTML);ee=B;const je=ee.textContent,un=be?Ze(je,{language:be,ignoreIllegals:!0}):Ja(je);B.innerHTML=un.value,B.dataset.highlighted="yes",bt(B,be,un.language),B.result={language:un.language,re:un.relevance,relevance:un.relevance},un.secondBest&&(B.secondBest={language:un.secondBest.language,relevance:un.secondBest.relevance}),Aa("after:highlightElement",{el:B,result:un,text:je})}function Mn(B){G=Yr(G,B)}const Vt=()=>{$a(),kt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Is(){$a(),kt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Xr=!1;function $a(){function B(){$a()}if(document.readyState==="loading"){Xr||window.addEventListener("DOMContentLoaded",B,!1),Xr=!0;return}document.querySelectorAll(G.cssSelector).forEach(cn)}function Kr(B,ee){let be=null;try{be=ee(y)}catch(je){if(on("Language definition for '{}' could not be registered.".replace("{}",B)),Ve)on(je);else throw je;be=W}be.name||(be.name=B),j[B]=be,be.rawDefinition=ee.bind(null,y),be.aliases&&Et(be.aliases,{languageName:B})}function Ea(B){delete j[B];for(const ee of Object.keys(Q))Q[ee]===B&&delete Q[ee]}function Hs(){return Object.keys(j)}function Un(B){return B=(B||"").toLowerCase(),j[B]||j[Q[B]]}function Et(B,{languageName:ee}){typeof B=="string"&&(B=[B]),B.forEach(be=>{Q[be.toLowerCase()]=ee})}function Yt(B){const ee=Un(B);return ee&&!ee.disableAutodetect}function Xt(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=ee=>{B["before:highlightBlock"](Object.assign({block:ee.el},ee))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=ee=>{B["after:highlightBlock"](Object.assign({block:ee.el},ee))})}function pn(B){Xt(B),le.push(B)}function Zr(B){const ee=le.indexOf(B);ee!==-1&&le.splice(ee,1)}function Aa(B,ee){const be=B;le.forEach(function(je){je[be]&&je[be](ee)})}function At(B){return kt("10.7.0","highlightBlock will be removed entirely in v12.0"),kt("10.7.0","Please use highlightElement now."),cn(B)}Object.assign(y,{highlight:Ze,highlightAuto:Ja,highlightAll:$a,highlightElement:cn,highlightBlock:At,configure:Mn,initHighlighting:Vt,initHighlightingOnLoad:Is,registerLanguage:Kr,unregisterLanguage:Ea,listLanguages:Hs,getLanguage:Un,registerAliases:Et,autoDetection:Yt,inherit:Yr,addPlugin:pn,removePlugin:Zr}),y.debugMode=function(){Ve=!1},y.safeMode=function(){Ve=!0},y.versionString=_n,y.regex={concat:X,lookahead:M,either:_e,optional:H,anyNumberOfTimes:F};for(const B in gt)typeof gt[B]=="object"&&l(gt[B]);return Object.assign(y,gt),y},Ln=Ta({});return Ln.newInstance=()=>Ta({}),_c=Ln,Ln.HighlightJS=Ln,Ln.default=Ln,_c}var Xb=Yb();const nt=Mg(Xb),Zp="[A-Za-z$_][0-9A-Za-z$_]*",Kb=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Zb=["true","false","null","undefined","NaN","Infinity"],hm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ym=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Wb=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Jb=[].concat(ym,hm,gm);function Jc(l){const i=l.regex,u=(I,{after:Z})=>{const de="</"+I[0].slice(1);return I.input.indexOf(de,Z)!==-1},c=Zp,d={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(I,Z)=>{const de=I[0].length+I.index,x=I.input[de];if(x==="<"||x===","){Z.ignoreMatch();return}x===">"&&(u(I,{after:de})||Z.ignoreMatch());let _;const P=I.input.substring(de);if(_=P.match(/^\s*=/)){Z.ignoreMatch();return}if((_=P.match(/^\s+extends\s+/))&&_.index===0){Z.ignoreMatch();return}}},k={$pattern:Zp,keyword:Kb,literal:Zb,built_in:Jb,"variable.language":Wb},b="[0-9](_?[0-9])*",v=`\\.(${b})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",U={className:"number",variants:[{begin:`(\\b(${E})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${E})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},M={className:"subst",begin:"\\$\\{",end:"\\}",keywords:k,contains:[]},F={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"xml"}},H={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"css"}},X={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"graphql"}},Ae={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,M]},ke={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},V=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,F,H,X,Ae,{match:/\$\d+/},U];M.contains=V.concat({begin:/\{/,end:/\}/,keywords:k,contains:["self"].concat(V)});const oe=[].concat(ke,M.contains),ie=oe.concat([{begin:/(\s*)\(/,end:/\)/,keywords:k,contains:["self"].concat(oe)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:ie},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,i.concat(c,"(",i.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...hm,...gm]}},Ke={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Je={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(I){return i.concat("(?!",I.join("|"),")")}const Sn={match:i.concat(/\b/,nn([...ym,"super","import"].map(I=>`${I}\\s*\\(`)),c,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:i.concat(/\./,i.lookahead(i.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:k,exports:{PARAMS_CONTAINS:ie,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),Ke,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,F,H,X,Ae,ke,{match:/\$\d+/},U,Te,{scope:"attr",match:c+i.lookahead(":"),relevance:0},O,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ke,l.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:ie}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:h},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,l.inherit(l.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Je,te,vn,{match:/\$[(.]/}]}}const go="[A-Za-z$_][0-9A-Za-z$_]*",bm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],vm=["true","false","null","undefined","NaN","Infinity"],xm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Sm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wm=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Cm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],km=[].concat(wm,xm,Sm);function $b(l){const i=l.regex,u=(I,{after:Z})=>{const de="</"+I[0].slice(1);return I.input.indexOf(de,Z)!==-1},c=go,d={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(I,Z)=>{const de=I[0].length+I.index,x=I.input[de];if(x==="<"||x===","){Z.ignoreMatch();return}x===">"&&(u(I,{after:de})||Z.ignoreMatch());let _;const P=I.input.substring(de);if(_=P.match(/^\s*=/)){Z.ignoreMatch();return}if((_=P.match(/^\s+extends\s+/))&&_.index===0){Z.ignoreMatch();return}}},k={$pattern:go,keyword:bm,literal:vm,built_in:km,"variable.language":Cm},b="[0-9](_?[0-9])*",v=`\\.(${b})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",U={className:"number",variants:[{begin:`(\\b(${E})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${E})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},M={className:"subst",begin:"\\$\\{",end:"\\}",keywords:k,contains:[]},F={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"xml"}},H={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"css"}},X={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,M],subLanguage:"graphql"}},Ae={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,M]},ke={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},V=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,F,H,X,Ae,{match:/\$\d+/},U];M.contains=V.concat({begin:/\{/,end:/\}/,keywords:k,contains:["self"].concat(V)});const oe=[].concat(ke,M.contains),ie=oe.concat([{begin:/(\s*)\(/,end:/\)/,keywords:k,contains:["self"].concat(oe)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:ie},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,i.concat(c,"(",i.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xm,...Sm]}},Ke={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Je={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(I){return i.concat("(?!",I.join("|"),")")}const Sn={match:i.concat(/\b/,nn([...wm,"super","import"].map(I=>`${I}\\s*\\(`)),c,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:i.concat(/\./,i.lookahead(i.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:k,exports:{PARAMS_CONTAINS:ie,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),Ke,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,F,H,X,Ae,ke,{match:/\$\d+/},U,Te,{scope:"attr",match:c+i.lookahead(":"),relevance:0},O,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ke,l.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:ie}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:h},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,l.inherit(l.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Je,te,vn,{match:/\$[(.]/}]}}function $c(l){const i=l.regex,u=$b(l),c=go,d=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],h={begin:[/namespace/,/\s+/,l.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},m={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:d},contains:[u.exports.CLASS_REFERENCE]},k={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},b=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],v={$pattern:go,keyword:bm.concat(b),literal:vm,built_in:km.concat(d),"variable.language":Cm},E={className:"meta",begin:"@"+c},U=(X,Ae,_e)=>{const ke=X.contains.findIndex(V=>V.label===Ae);if(ke===-1)throw new Error("can not find mode to replace");X.contains.splice(ke,1,_e)};Object.assign(u.keywords,v),u.exports.PARAMS_CONTAINS.push(E);const M=u.contains.find(X=>X.scope==="attr"),F=Object.assign({},M,{match:i.concat(c,i.lookahead(/\s*\?:/))});u.exports.PARAMS_CONTAINS.push([u.exports.CLASS_REFERENCE,M,F]),u.contains=u.contains.concat([E,h,m,F]),U(u,"shebang",l.SHEBANG()),U(u,"use_strict",k);const H=u.contains.find(X=>X.label==="func.def");return H.relevance=0,Object.assign(u,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),u}function Tm(l){const i=l.regex,u=i.concat(/[\p{L}_]/u,i.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),c=/[\p{L}0-9._:-]+/u,d={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},m=l.inherit(h,{begin:/\(/,end:/\)/}),k=l.inherit(l.APOS_STRING_MODE,{className:"string"}),b=l.inherit(l.QUOTE_STRING_MODE,{className:"string"}),v={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:c,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[d]},{begin:/'/,end:/'/,contains:[d]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,b,k,m,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,m,b,k]}]}]},l.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},d,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[b]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[v],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[v],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:i.concat(/</,i.lookahead(i.concat(u,i.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:u,relevance:0,starts:v}]},{className:"tag",begin:i.concat(/<\//,i.lookahead(i.concat(u,/>/))),contains:[{className:"name",begin:u,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const ev=l=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:l.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:l.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),nv=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],tv=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],av=[...nv,...tv],sv=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),rv=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),iv=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),ov=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function lv(l){const i=l.regex,u=ev(l),c={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},d="and or not only",h=/@-?\w[\w]*(-\w+)*/,m="[a-zA-Z-][a-zA-Z0-9_-]*",k=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[u.BLOCK_COMMENT,c,u.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+m,relevance:0},u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+rv.join("|")+")"},{begin:":(:)?("+iv.join("|")+")"}]},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ov.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[u.BLOCK_COMMENT,u.HEXCOLOR,u.IMPORTANT,u.CSS_NUMBER_MODE,...k,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...k,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},u.FUNCTION_DISPATCH]},{begin:i.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:h},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:d,attribute:sv.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...k,u.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+av.join("|")+")\\b"}]}}function Em(l){const i=l.regex,u={},c={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[u]}]};Object.assign(u,{className:"variable",variants:[{begin:i.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},c]});const d={className:"subst",begin:/\$\(/,end:/\)/,contains:[l.BACKSLASH_ESCAPE]},h=l.inherit(l.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),m={begin:/<<-?\s*(?=\w+)/,starts:{contains:[l.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},k={className:"string",begin:/"/,end:/"/,contains:[l.BACKSLASH_ESCAPE,u,d]};d.contains.push(k);const b={match:/\\"/},v={className:"string",begin:/'/,end:/'/},E={match:/\\'/},U={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},l.NUMBER_MODE,u]},M=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],F=l.SHEBANG({binary:`(${M.join("|")})`,relevance:10}),H={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[l.inherit(l.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},X=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],Ae=["true","false"],_e={match:/(\/[a-z._-]+)+/},ke=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],V=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],oe=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],ie=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:X,literal:Ae,built_in:[...ke,...V,"set","shopt",...oe,...ie]},contains:[F,l.SHEBANG(),H,U,h,m,_e,k,b,v,E,u]}}function cv(l){const i={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},u={match:/[{}[\],:]/,className:"punctuation",relevance:0},c=["true","false","null"],d={scope:"literal",beginKeywords:c.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:c},contains:[i,u,l.QUOTE_STRING_MODE,d,l.C_NUMBER_MODE,l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}nt.registerLanguage("javascript",Jc);nt.registerLanguage("js",Jc);nt.registerLanguage("jsx",Jc);nt.registerLanguage("typescript",$c);nt.registerLanguage("ts",$c);nt.registerLanguage("tsx",$c);nt.registerLanguage("html",Tm);nt.registerLanguage("xml",Tm);nt.registerLanguage("css",lv);nt.registerLanguage("bash",Em);nt.registerLanguage("shell",Em);nt.registerLanguage("json",cv);Ue.setOptions({gfm:!0,breaks:!0});function Am({content:l,className:i=""}){const u=pe.useRef(null),c=pe.useMemo(()=>{let d=l;return d=d.replace(/\*\*Senior insight:\*\*\s*([^\n]+(?:\n(?!\n\*\*|\n###|\n---).*)*)/g,'<div class="senior-insight"><strong>Senior insight:</strong> $1</div>'),Ue.parse(d)},[l]);return pe.useEffect(()=>{u.current&&u.current.querySelectorAll("pre code").forEach(h=>{nt.highlightElement(h)})},[c]),p.jsx("div",{ref:u,className:`prose max-w-none ${i}`,dangerouslySetInnerHTML:{__html:c}})}function uv({question:l,index:i}){const{getProgress:u,setStatus:c,toggleBookmark:d,toggleExpanded:h,isExpanded:m}=Va(),k=u(l.id),b=m(l.id),E={not_started:{icon:p.jsx(Pc,{className:"w-4 h-4"}),badge:"badge-not-started",label:"Not Started"},studied:{icon:p.jsx(uo,{className:"w-4 h-4"}),badge:"badge-studied",label:"Studied"},needs_review:{icon:p.jsx(Hr,{className:"w-4 h-4"}),badge:"badge-needs-review",label:"Needs Review"},mastered:{icon:p.jsx(fo,{className:"w-4 h-4"}),badge:"badge-mastered",label:"Mastered"}}[k.status],U=(F,H)=>{F.stopPropagation(),c(l.id,H)},M=F=>{F.stopPropagation(),d(l.id)};return p.jsxs("div",{className:"card overflow-hidden animate-fade-in",children:[p.jsxs("button",{onClick:()=>h(l.id),className:"w-full px-4 py-4 flex items-start gap-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors",children:[p.jsx("div",{className:"mt-0.5 text-gray-400",children:b?p.jsx(qc,{className:"w-5 h-5"}):p.jsx(jc,{className:"w-5 h-5"})}),p.jsxs("span",{className:"text-sm text-gray-400 dark:text-gray-500 font-mono mt-0.5",children:["#",i+1]}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white leading-snug",children:l.question}),p.jsxs("div",{className:"flex items-center gap-2 mt-2 flex-wrap",children:[p.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded",children:l.categoryName}),p.jsxs("span",{className:`badge ${E.badge}`,children:[E.icon,p.jsx("span",{className:"ml-1",children:E.label})]}),k.lastStudied&&p.jsxs("span",{className:"text-xs text-gray-400",children:["Reviewed ",new Date(k.lastStudied).toLocaleDateString()]})]})]}),p.jsx("button",{onClick:M,className:`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${k.bookmarked?"text-amber-500":"text-gray-400"}`,title:k.bookmarked?"Remove bookmark":"Add bookmark",children:p.jsx(Hc,{className:`w-5 h-5 ${k.bookmarked?"fill-current":""}`})})]}),b&&p.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-700",children:[p.jsx("div",{className:"px-4 py-4 bg-gray-50/50 dark:bg-slate-800/50",children:p.jsx(Am,{content:l.answer})}),p.jsxs("div",{className:"px-4 py-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex items-center gap-2 flex-wrap",children:[p.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 mr-2",children:"Mark as:"}),p.jsxs("button",{onClick:F=>U(F,"studied"),className:`btn text-sm ${k.status==="studied"?"btn-primary":"btn-secondary"}`,children:[p.jsx(uo,{className:"w-4 h-4 mr-1"}),"Studied"]}),p.jsxs("button",{onClick:F=>U(F,"needs_review"),className:`btn text-sm ${k.status==="needs_review"?"bg-amber-500 text-white hover:bg-amber-600":"btn-secondary"}`,children:[p.jsx(Hr,{className:"w-4 h-4 mr-1"}),"Needs Review"]}),p.jsxs("button",{onClick:F=>U(F,"mastered"),className:`btn text-sm ${k.status==="mastered"?"bg-green-500 text-white hover:bg-green-600":"btn-secondary"}`,children:[p.jsx(fo,{className:"w-4 h-4 mr-1"}),"Mastered"]}),k.status!=="not_started"&&p.jsx("button",{onClick:F=>U(F,"not_started"),className:"btn btn-ghost text-sm text-gray-500",children:"Reset"})]})]})]})}function dv(){const{filteredQuestions:l,state:i,dispatch:u,stats:c}=Va(),{filters:d}=i,h=d.status!=="all"||d.category!=="all"||d.bookmarked||d.searchQuery.trim()!=="",m=()=>{u({type:"EXPAND_ALL"})},k=()=>{u({type:"COLLAPSE_ALL"})},b=()=>{u({type:"CLEAR_FILTERS"})};return p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:h?p.jsxs(p.Fragment,{children:[p.jsx(tm,{className:"w-4 h-4"}),p.jsxs("span",{children:["Showing ",l.length," of ",c.total," questions"]}),p.jsx("button",{onClick:b,className:"text-blue-500 hover:text-blue-600 ml-2",children:"Clear filters"})]}):p.jsxs("span",{children:[c.total," questions total"]})}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("button",{onClick:m,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Expand all",children:[p.jsx(qc,{className:"w-4 h-4"}),"Expand"]}),p.jsxs("button",{onClick:k,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Collapse all",children:[p.jsx(Ny,{className:"w-4 h-4"}),"Collapse"]})]})]}),l.length>0?p.jsx("div",{className:"space-y-4",children:l.map((v,E)=>p.jsx(uv,{question:v,index:E},v.id))}):p.jsxs("div",{className:"card p-12 text-center",children:[p.jsx(am,{className:"w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No questions found"}),p.jsx("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:d.searchQuery?`No questions match "${d.searchQuery}"`:"No questions match the current filters"}),p.jsx("button",{onClick:b,className:"btn btn-primary",children:"Clear Filters"})]})]})}function fv({isOpen:l,onClose:i}){const{allQuestions:u,categories:c,state:d,setStatus:h}=Va(),[m,k]=pe.useState(new Set(["all"])),[b,v]=pe.useState(10),[E,U]=pe.useState(new Set(["not_started","studied","needs_review"])),[M,F]=pe.useState(!0),[H,X]=pe.useState("setup"),[Ae,_e]=pe.useState([]),[ke,V]=pe.useState(0),[oe,ie]=pe.useState(!1),[ye,te]=pe.useState([]);pe.useEffect(()=>{l&&(X("setup"),V(0),ie(!1),te([]))},[l]);const Te=pe.useCallback(()=>{let O=[...u];return m.has("all")||(O=O.filter(I=>m.has(I.categoryId))),O=O.filter(I=>{const de=d.progress[I.id]?.status||"not_started";return E.has(de)}),M&&(O=O.sort(()=>Math.random()-.5)),O.slice(0,b)},[u,m,E,M,b,d.progress]),Ke=()=>{const O=Te();O.length!==0&&(_e(O),X("quiz"),V(0),ie(!1),te([]))},en=O=>{const I=Ae[ke];te(Z=>[...Z,{questionId:I.id,result:O}]),O==="got_it"?h(I.id,"studied"):O==="needs_review"&&h(I.id,"needs_review"),ke<Ae.length-1?(V(Z=>Z+1),ie(!1)):X("results")},Je=O=>{k(I=>{const Z=new Set(I);if(O==="all")return new Set(["all"]);if(Z.delete("all"),Z.has(O)){if(Z.delete(O),Z.size===0)return new Set(["all"])}else Z.add(O);return Z})},nn=O=>{U(I=>{const Z=new Set(I);if(Z.has(O)){if(Z.delete(O),Z.size===0)return new Set([O])}else Z.add(O);return Z})};if(!l)return null;const Sn=Ae[ke],tn=ye.filter(O=>O.result==="got_it").length,vn=ye.filter(O=>O.result==="needs_review").length,N=ye.filter(O=>O.result==="skipped").length;return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:p.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[p.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[p.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:[H==="setup"&&"Quiz Setup",H==="quiz"&&`Question ${ke+1} of ${Ae.length}`,H==="results"&&"Quiz Complete!"]}),p.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:p.jsx(yo,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[H==="setup"&&p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Select Categories"}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsx("button",{onClick:()=>Je("all"),className:`btn text-sm ${m.has("all")?"btn-primary":"btn-secondary"}`,children:"All Categories"}),c.map(O=>p.jsx("button",{onClick:()=>Je(O.id),className:`btn text-sm ${m.has(O.id)?"btn-primary":"btn-secondary"}`,children:O.name},O.id))]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Include Questions With Status"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"not_started",label:"Not Started"},{id:"studied",label:"Studied"},{id:"needs_review",label:"Needs Review"},{id:"mastered",label:"Mastered"}].map(O=>p.jsx("button",{onClick:()=>nn(O.id),className:`btn text-sm ${E.has(O.id)?"btn-primary":"btn-secondary"}`,children:O.label},O.id))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Number of Questions"}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:b,onChange:O=>v(parseInt(O.target.value)),className:"flex-1"}),p.jsx("span",{className:"text-lg font-medium w-12",children:b})]})]}),p.jsx("div",{className:"flex items-center gap-3",children:p.jsxs("button",{onClick:()=>F(!M),className:`btn ${M?"btn-primary":"btn-secondary"}`,children:[p.jsx(Xy,{className:"w-4 h-4 mr-2"}),"Shuffle Questions"]})}),p.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[Te().length," questions available with current filters"]})]}),H==="quiz"&&Sn&&p.jsxs("div",{className:"space-y-6",children:[p.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:`${(ke+1)/Ae.length*100}%`}})}),p.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:Sn.categoryName}),p.jsx("div",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:Sn.question}),oe?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"card p-4 bg-gray-50 dark:bg-slate-900/50",children:p.jsx(Am,{content:Sn.answer})}),p.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[p.jsxs("button",{onClick:()=>en("got_it"),className:"btn bg-green-500 text-white hover:bg-green-600 py-4",children:[p.jsx(Ty,{className:"w-5 h-5 mr-2"}),"Got It"]}),p.jsxs("button",{onClick:()=>en("needs_review"),className:"btn bg-amber-500 text-white hover:bg-amber-600 py-4",children:[p.jsx(Hr,{className:"w-5 h-5 mr-2"}),"Need Review"]}),p.jsxs("button",{onClick:()=>en("skipped"),className:"btn btn-secondary py-4",children:[p.jsx(Zy,{className:"w-5 h-5 mr-2"}),"Skip"]})]})]}):p.jsx("button",{onClick:()=>ie(!0),className:"btn btn-primary w-full py-4 text-lg",children:"Reveal Answer"})]}),H==="results"&&p.jsxs("div",{className:"text-center space-y-6",children:[p.jsx(ab,{className:"w-20 h-20 mx-auto text-amber-500"}),p.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Quiz Complete!"}),p.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[p.jsxs("div",{className:"card p-4 bg-green-50 dark:bg-green-900/20",children:[p.jsx("div",{className:"text-3xl font-bold text-green-600",children:tn}),p.jsx("div",{className:"text-sm text-green-700 dark:text-green-400",children:"Got It"})]}),p.jsxs("div",{className:"card p-4 bg-amber-50 dark:bg-amber-900/20",children:[p.jsx("div",{className:"text-3xl font-bold text-amber-600",children:vn}),p.jsx("div",{className:"text-sm text-amber-700 dark:text-amber-400",children:"Need Review"})]}),p.jsxs("div",{className:"card p-4 bg-gray-50 dark:bg-slate-700",children:[p.jsx("div",{className:"text-3xl font-bold text-gray-600 dark:text-gray-300",children:N}),p.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Skipped"})]})]}),p.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:["Score: ",Math.round(tn/Ae.length*100),"%"]})]})]}),p.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:[H==="setup"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:i,className:"btn btn-secondary",children:"Cancel"}),p.jsxs("button",{onClick:Ke,className:"btn btn-primary",disabled:Te().length===0,children:["Start Quiz (",Te().length," questions)"]})]}),H==="quiz"&&p.jsxs(p.Fragment,{children:[p.jsxs("button",{onClick:()=>{X("setup"),V(0),ie(!1),te([])},className:"btn btn-secondary",children:[p.jsx(Gy,{className:"w-4 h-4 mr-2"}),"Restart"]}),p.jsxs("div",{className:"text-sm text-gray-500",children:["Press Space to ",oe?"continue":"reveal"]})]}),H==="results"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:i,className:"btn btn-secondary",children:"Close"}),p.jsx("button",{onClick:()=>{X("setup")},className:"btn btn-primary",children:"New Quiz"})]})]})]})})}function pv({isOpen:l,onClose:i}){const{stats:u,categoryStats:c,state:d,dispatch:h}=Va();if(!l)return null;const m=Math.round((u.studied+u.mastered)/u.total*100),k=()=>{const E=JSON.stringify({version:1,exportedAt:Date.now(),progress:d.progress},null,2),U=new Blob([E],{type:"application/json"}),M=URL.createObjectURL(U),F=document.createElement("a");F.href=M,F.download=`react-study-progress-${new Date().toISOString().split("T")[0]}.json`,F.click(),URL.revokeObjectURL(M)},b=()=>{const E=document.createElement("input");E.type="file",E.accept=".json",E.onchange=async U=>{const M=U.target.files?.[0];if(M)try{const F=await M.text(),H=JSON.parse(F);H.version===1&&H.progress?(h({type:"IMPORT_PROGRESS",data:H.progress}),alert("Progress imported successfully!")):alert("Invalid file format")}catch{alert("Failed to import file")}},E.click()},v=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&h({type:"RESET_PROGRESS"})};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:p.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[p.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Study Statistics"}),p.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:p.jsx(yo,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Overall Progress"}),p.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500",style:{width:`${m}%`}})}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:[u.studied+u.mastered," of ",u.total," questions completed (",m,"%)"]})]}),p.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[p.jsxs("div",{className:"card p-4 text-center",children:[p.jsx(Pc,{className:"w-6 h-6 mx-auto mb-2 text-gray-400"}),p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.notStarted}),p.jsx("div",{className:"text-xs text-gray-500",children:"Not Started"})]}),p.jsxs("div",{className:"card p-4 text-center",children:[p.jsx(uo,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.studied}),p.jsx("div",{className:"text-xs text-gray-500",children:"Studied"})]}),p.jsxs("div",{className:"card p-4 text-center",children:[p.jsx(Hr,{className:"w-6 h-6 mx-auto mb-2 text-amber-500"}),p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.needsReview}),p.jsx("div",{className:"text-xs text-gray-500",children:"Needs Review"})]}),p.jsxs("div",{className:"card p-4 text-center",children:[p.jsx(fo,{className:"w-6 h-6 mx-auto mb-2 text-green-500"}),p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.mastered}),p.jsx("div",{className:"text-xs text-gray-500",children:"Mastered"})]})]}),p.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[p.jsx(Hc,{className:"w-5 h-5 text-amber-500"}),p.jsxs("span",{children:[u.bookmarked," bookmarked questions"]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Progress by Category"}),p.jsx("div",{className:"space-y-3",children:c.map(E=>{const U=E.studied+E.mastered,M=Math.round(U/E.total*100);return p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between text-sm mb-1",children:[p.jsx("span",{className:"text-gray-700 dark:text-gray-300 truncate",children:E.categoryName}),p.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:[U,"/",E.total]})]}),p.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-green-500 transition-all duration-300",style:{width:`${M}%`}})})]},E.categoryId)})})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Data Management"}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsxs("button",{onClick:k,className:"btn btn-secondary",children:[p.jsx(Uy,{className:"w-4 h-4 mr-2"}),"Export Progress"]}),p.jsxs("button",{onClick:b,className:"btn btn-secondary",children:[p.jsx(rb,{className:"w-4 h-4 mr-2"}),"Import Progress"]}),p.jsxs("button",{onClick:v,className:"btn bg-red-500 text-white hover:bg-red-600",children:[p.jsx(nb,{className:"w-4 h-4 mr-2"}),"Reset All"]})]})]})]}),p.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:p.jsx("button",{onClick:i,className:"btn btn-primary w-full",children:"Close"})})]})})}const mv=[{key:"/",description:"Focus search"},{key:"Escape",description:"Clear search / Close modal"},{key:"j",description:"Next question"},{key:"k",description:"Previous question"},{key:"Space",description:"Toggle answer / Flip quiz card"},{key:"Enter",description:"Expand/collapse current question"},{key:"s",description:"Mark as studied"},{key:"r",description:"Mark as needs review"},{key:"m",description:"Mark as mastered"},{key:"b",description:"Toggle bookmark"},{key:"e",description:"Expand all questions"},{key:"c",description:"Collapse all questions"},{key:"d",description:"Toggle dark mode"},{key:"q",description:"Open quiz mode"},{key:"?",description:"Show this help"}];function hv({isOpen:l,onClose:i}){return l?p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:p.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-xl overflow-hidden",children:[p.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Keyboard Shortcuts"}),p.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:p.jsx(yo,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:p.jsx("div",{className:"space-y-2",children:mv.map(({key:u,description:c})=>p.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-700 last:border-0",children:[p.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:c}),p.jsx("kbd",{className:"px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm font-mono text-gray-600 dark:text-gray-400",children:u})]},u))})}),p.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:p.jsx("button",{onClick:i,className:"btn btn-primary w-full",children:"Got it"})})]})}):null}function gv({onOpenQuiz:l,onOpenShortcuts:i}){const{filteredQuestions:u,state:c,dispatch:d,setStatus:h,toggleBookmark:m,toggleExpanded:k}=Va(),{setTheme:b,isDark:v}=em(),E=pe.useCallback(()=>{for(let M=0;M<u.length;M++)if(c.expandedQuestions.has(u[M].id))return M;return-1},[u,c.expandedQuestions]),U=pe.useCallback(M=>{if(M.target instanceof HTMLInputElement||M.target instanceof HTMLTextAreaElement){M.key==="Escape"&&(M.target.blur(),d({type:"SET_SEARCH",query:""}));return}const F=E(),H=F>=0?u[F]:null;switch(M.key){case"/":M.preventDefault(),document.getElementById("search-input")?.focus();break;case"Escape":d({type:"SET_SEARCH",query:""});break;case"j":if(M.preventDefault(),u.length>0){const X=F<u.length-1?F+1:0;H&&d({type:"TOGGLE_EXPANDED",questionId:H.id}),d({type:"TOGGLE_EXPANDED",questionId:u[X].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[X].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case"k":if(M.preventDefault(),u.length>0){const X=F>0?F-1:u.length-1;H&&d({type:"TOGGLE_EXPANDED",questionId:H.id}),d({type:"TOGGLE_EXPANDED",questionId:u[X].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[X].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case" ":M.preventDefault(),H?k(H.id):u.length>0&&k(u[0].id);break;case"Enter":M.preventDefault(),H&&k(H.id);break;case"s":M.preventDefault(),H&&h(H.id,"studied");break;case"r":M.preventDefault(),H&&h(H.id,"needs_review");break;case"m":M.preventDefault(),H&&h(H.id,"mastered");break;case"b":M.preventDefault(),H&&m(H.id);break;case"e":M.preventDefault(),d({type:"EXPAND_ALL"});break;case"c":M.preventDefault(),d({type:"COLLAPSE_ALL"});break;case"d":M.preventDefault(),b(v?"light":"dark");break;case"q":M.preventDefault(),l();break;case"?":M.preventDefault(),i();break}},[u,E,d,k,h,m,b,v,l,i]);pe.useEffect(()=>(window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)),[U])}function yv(){const[l,i]=pe.useState(!1),[u,c]=pe.useState(!1),[d,h]=pe.useState(!1);return gv({onOpenQuiz:()=>i(!0),onOpenShortcuts:()=>h(!0)}),p.jsxs(p.Fragment,{children:[p.jsx(cb,{onOpenStats:()=>c(!0),onOpenShortcuts:()=>h(!0),onStartQuiz:()=>i(!0),children:p.jsx(dv,{})}),p.jsx(fv,{isOpen:l,onClose:()=>i(!1)}),p.jsx(pv,{isOpen:u,onClose:()=>c(!1)}),p.jsx(hv,{isOpen:d,onClose:()=>h(!1)})]})}function bv(){return p.jsx(my,{children:p.jsx(py,{children:p.jsx(yv,{})})})}Hg.createRoot(document.getElementById("root")).render(p.jsx(pe.StrictMode,{children:p.jsx(bv,{})}));
