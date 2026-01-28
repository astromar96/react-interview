(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=u(d);fetch(d.href,m)}})();function _g(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ac={exports:{}},Os={};var Mh;function Mg(){if(Mh)return Os;Mh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,d,m){var p=null;if(m!==void 0&&(p=""+m),d.key!==void 0&&(p=""+d.key),"key"in d){m={};for(var w in d)w!=="key"&&(m[w]=d[w])}else m=d;return d=m.ref,{$$typeof:o,type:c,key:p,ref:d!==void 0?d:null,props:m}}return Os.Fragment=i,Os.jsx=u,Os.jsxs=u,Os}var Oh;function Og(){return Oh||(Oh=1,Ac.exports=Mg()),Ac.exports}var h=Og(),Rc={exports:{}},ue={};var zh;function zg(){if(zh)return ue;zh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),_=Symbol.iterator;function I(x){return x===null||typeof x!="object"?null:(x=_&&x[_]||x["@@iterator"],typeof x=="function"?x:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Ae={};function ze(x,z,G){this.props=x,this.context=z,this.refs=Ae,this.updater=G||q}ze.prototype.isReactComponent={},ze.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},ze.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function we(){}we.prototype=ze.prototype;function V(x,z,G){this.props=x,this.context=z,this.refs=Ae,this.updater=G||q}var re=V.prototype=new we;re.constructor=V,K(re,ze.prototype),re.isPureReactComponent=!0;var ie=Array.isArray;function ye(){}var te={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function Pe(x,z,G){var P=G.ref;return{$$typeof:o,type:x,key:z,ref:P!==void 0?P:null,props:G}}function en(x,z){return Pe(x.type,z,x.props)}function Fe(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function nn(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return z[G]})}var Sn=/\/+/g;function tn(x,z){return typeof x=="object"&&x!==null&&x.key!=null?nn(""+x.key):z.toString(36)}function vn(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(z){x.status==="pending"&&(x.status="fulfilled",x.value=z)},function(z){x.status==="pending"&&(x.status="rejected",x.reason=z)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,z,G,P,ce){var ge=typeof x;(ge==="undefined"||ge==="boolean")&&(x=null);var Re=!1;if(x===null)Re=!0;else switch(ge){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(x.$$typeof){case o:case i:Re=!0;break;case C:return Re=x._init,N(Re(x._payload),z,G,P,ce)}}if(Re)return ce=ce(x),Re=P===""?"."+tn(x,0):P,ie(ce)?(G="",Re!=null&&(G=Re.replace(Sn,"$&/")+"/"),N(ce,z,G,"",function(gt){return gt})):ce!=null&&(Fe(ce)&&(ce=en(ce,G+(ce.key==null||x&&x.key===ce.key?"":(""+ce.key).replace(Sn,"$&/")+"/")+Re)),z.push(ce)),1;Re=0;var kn=P===""?".":P+":";if(ie(x))for(var an=0;an<x.length;an++)P=x[an],ge=kn+tn(P,an),Re+=N(P,z,G,ge,ce);else if(an=I(x),typeof an=="function")for(x=an.call(x),an=0;!(P=x.next()).done;)P=P.value,ge=kn+tn(P,an++),Re+=N(P,z,G,ge,ce);else if(ge==="object"){if(typeof x.then=="function")return N(vn(x),z,G,P,ce);throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return Re}function O(x,z,G){if(x==null)return x;var P=[],ce=0;return N(x,P,"","",function(ge){return z.call(G,ge,ce++)}),P}function H(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var J=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},de={map:O,forEach:function(x,z,G){O(x,function(){z.apply(this,arguments)},G)},count:function(x){var z=0;return O(x,function(){z++}),z},toArray:function(x){return O(x,function(z){return z})||[]},only:function(x){if(!Fe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=D,ue.Children=de,ue.Component=ze,ue.Fragment=u,ue.Profiler=d,ue.PureComponent=V,ue.StrictMode=c,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return te.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,z,G){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var P=K({},x.props),ce=x.key;if(z!=null)for(ge in z.key!==void 0&&(ce=""+z.key),z)!Te.call(z,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&z.ref===void 0||(P[ge]=z[ge]);var ge=arguments.length-2;if(ge===1)P.children=G;else if(1<ge){for(var Re=Array(ge),kn=0;kn<ge;kn++)Re[kn]=arguments[kn+2];P.children=Re}return Pe(x.type,ce,P)},ue.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ue.createElement=function(x,z,G){var P,ce={},ge=null;if(z!=null)for(P in z.key!==void 0&&(ge=""+z.key),z)Te.call(z,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ce[P]=z[P]);var Re=arguments.length-2;if(Re===1)ce.children=G;else if(1<Re){for(var kn=Array(Re),an=0;an<Re;an++)kn[an]=arguments[an+2];ce.children=kn}if(x&&x.defaultProps)for(P in Re=x.defaultProps,Re)ce[P]===void 0&&(ce[P]=Re[P]);return Pe(x,ge,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:w,render:x}},ue.isValidElement=Fe,ue.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:H}},ue.memo=function(x,z){return{$$typeof:v,type:x,compare:z===void 0?null:z}},ue.startTransition=function(x){var z=te.T,G={};te.T=G;try{var P=x(),ce=te.S;ce!==null&&ce(G,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(ye,J)}catch(ge){J(ge)}finally{z!==null&&G.types!==null&&(z.types=G.types),te.T=z}},ue.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ue.use=function(x){return te.H.use(x)},ue.useActionState=function(x,z,G){return te.H.useActionState(x,z,G)},ue.useCallback=function(x,z){return te.H.useCallback(x,z)},ue.useContext=function(x){return te.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,z){return te.H.useDeferredValue(x,z)},ue.useEffect=function(x,z){return te.H.useEffect(x,z)},ue.useEffectEvent=function(x){return te.H.useEffectEvent(x)},ue.useId=function(){return te.H.useId()},ue.useImperativeHandle=function(x,z,G){return te.H.useImperativeHandle(x,z,G)},ue.useInsertionEffect=function(x,z){return te.H.useInsertionEffect(x,z)},ue.useLayoutEffect=function(x,z){return te.H.useLayoutEffect(x,z)},ue.useMemo=function(x,z){return te.H.useMemo(x,z)},ue.useOptimistic=function(x,z){return te.H.useOptimistic(x,z)},ue.useReducer=function(x,z,G){return te.H.useReducer(x,z,G)},ue.useRef=function(x){return te.H.useRef(x)},ue.useState=function(x){return te.H.useState(x)},ue.useSyncExternalStore=function(x,z,G){return te.H.useSyncExternalStore(x,z,G)},ue.useTransition=function(){return te.H.useTransition()},ue.version="19.2.4",ue}var Dh;function Hc(){return Dh||(Dh=1,Rc.exports=zg()),Rc.exports}var he=Hc(),Nc={exports:{}},zs={},_c={exports:{}},Mc={};var jh;function Dg(){return jh||(jh=1,(function(o){function i(N,O){var H=N.length;N.push(O);e:for(;0<H;){var J=H-1>>>1,de=N[J];if(0<d(de,O))N[J]=O,N[H]=de,H=J;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var O=N[0],H=N.pop();if(H!==O){N[0]=H;e:for(var J=0,de=N.length,x=de>>>1;J<x;){var z=2*(J+1)-1,G=N[z],P=z+1,ce=N[P];if(0>d(G,H))P<de&&0>d(ce,G)?(N[J]=ce,N[P]=H,J=P):(N[J]=G,N[z]=H,J=z);else if(P<de&&0>d(ce,H))N[J]=ce,N[P]=H,J=P;else break e}}return O}function d(N,O){var H=N.sortIndex-O.sortIndex;return H!==0?H:N.id-O.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var p=Date,w=p.now();o.unstable_now=function(){return p.now()-w}}var b=[],v=[],C=1,D=null,_=3,I=!1,q=!1,K=!1,Ae=!1,ze=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(N){for(var O=u(v);O!==null;){if(O.callback===null)c(v);else if(O.startTime<=N)c(v),O.sortIndex=O.expirationTime,i(b,O);else break;O=u(v)}}function ie(N){if(K=!1,re(N),!q)if(u(b)!==null)q=!0,ye||(ye=!0,nn());else{var O=u(v);O!==null&&vn(ie,O.startTime-N)}}var ye=!1,te=-1,Te=5,Pe=-1;function en(){return Ae?!0:!(o.unstable_now()-Pe<Te)}function Fe(){if(Ae=!1,ye){var N=o.unstable_now();Pe=N;var O=!0;try{e:{q=!1,K&&(K=!1,we(te),te=-1),I=!0;var H=_;try{n:{for(re(N),D=u(b);D!==null&&!(D.expirationTime>N&&en());){var J=D.callback;if(typeof J=="function"){D.callback=null,_=D.priorityLevel;var de=J(D.expirationTime<=N);if(N=o.unstable_now(),typeof de=="function"){D.callback=de,re(N),O=!0;break n}D===u(b)&&c(b),re(N)}else c(b);D=u(b)}if(D!==null)O=!0;else{var x=u(v);x!==null&&vn(ie,x.startTime-N),O=!1}}break e}finally{D=null,_=H,I=!1}O=void 0}}finally{O?nn():ye=!1}}}var nn;if(typeof V=="function")nn=function(){V(Fe)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,tn=Sn.port2;Sn.port1.onmessage=Fe,nn=function(){tn.postMessage(null)}}else nn=function(){ze(Fe,0)};function vn(N,O){te=ze(function(){N(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(N){switch(_){case 1:case 2:case 3:var O=3;break;default:O=_}var H=_;_=O;try{return N()}finally{_=H}},o.unstable_requestPaint=function(){Ae=!0},o.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=_;_=N;try{return O()}finally{_=H}},o.unstable_scheduleCallback=function(N,O,H){var J=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?J+H:J):H=J,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=H+de,N={id:C++,callback:O,priorityLevel:N,startTime:H,expirationTime:de,sortIndex:-1},H>J?(N.sortIndex=H,i(v,N),u(b)===null&&N===u(v)&&(K?(we(te),te=-1):K=!0,vn(ie,H-J))):(N.sortIndex=de,i(b,N),q||I||(q=!0,ye||(ye=!0,nn()))),N},o.unstable_shouldYield=en,o.unstable_wrapCallback=function(N){var O=_;return function(){var H=_;_=O;try{return N.apply(this,arguments)}finally{_=H}}}})(Mc)),Mc}var Uh;function jg(){return Uh||(Uh=1,_c.exports=Dg()),_c.exports}var Oc={exports:{}},On={};var Lh;function Ug(){if(Lh)return On;Lh=1;var o=Hc();function i(b){var v="https://react.dev/errors/"+b;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)v+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+b+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,v,C){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:D==null?null:""+D,children:b,containerInfo:v,implementation:C}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(b,v){if(b==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,On.createPortal=function(b,v){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(i(299));return m(b,v,null,C)},On.flushSync=function(b){var v=p.T,C=c.p;try{if(p.T=null,c.p=2,b)return b()}finally{p.T=v,c.p=C,c.d.f()}},On.preconnect=function(b,v){typeof b=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(b,v))},On.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},On.preinit=function(b,v){if(typeof b=="string"&&v&&typeof v.as=="string"){var C=v.as,D=w(C,v.crossOrigin),_=typeof v.integrity=="string"?v.integrity:void 0,I=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;C==="style"?c.d.S(b,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:D,integrity:_,fetchPriority:I}):C==="script"&&c.d.X(b,{crossOrigin:D,integrity:_,fetchPriority:I,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},On.preinitModule=function(b,v){if(typeof b=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var C=w(v.as,v.crossOrigin);c.d.M(b,{crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(b)},On.preload=function(b,v){if(typeof b=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var C=v.as,D=w(C,v.crossOrigin);c.d.L(b,C,{crossOrigin:D,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},On.preloadModule=function(b,v){if(typeof b=="string")if(v){var C=w(v.as,v.crossOrigin);c.d.m(b,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:C,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(b)},On.requestFormReset=function(b){c.d.r(b)},On.unstable_batchedUpdates=function(b,v){return b(v)},On.useFormState=function(b,v,C){return p.H.useFormState(b,v,C)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.2.4",On}var Bh;function Lg(){if(Bh)return Oc.exports;Bh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Oc.exports=Ug(),Oc.exports}var Hh;function Bg(){if(Hh)return zs;Hh=1;var o=jg(),i=Hc(),u=Lg();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function w(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(c(188))}function v(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return b(l),e;if(s===a)return b(l),n;s=s.sibling}throw Error(c(188))}if(t.return!==a.return)t=l,a=s;else{for(var r=!1,f=l.child;f;){if(f===t){r=!0,t=l,a=s;break}if(f===a){r=!0,a=l,t=s;break}f=f.sibling}if(!r){for(f=s.child;f;){if(f===t){r=!0,t=s,a=l;break}if(f===a){r=!0,a=s,t=l;break}f=f.sibling}if(!r)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function C(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=C(e),n!==null)return n;e=e.sibling}return null}var D=Object.assign,_=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),we=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Pe=Symbol.for("react.activity"),en=Symbol.for("react.memo_cache_sentinel"),Fe=Symbol.iterator;function nn(e){return e===null||typeof e!="object"?null:(e=Fe&&e[Fe]||e["@@iterator"],typeof e=="function"?e:null)}var Sn=Symbol.for("react.client.reference");function tn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case ze:return"Profiler";case Ae:return"StrictMode";case ie:return"Suspense";case ye:return"SuspenseList";case Pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case V:return e.displayName||"Context";case we:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:tn(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return tn(e(n))}catch{}}return null}var vn=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},J=[],de=-1;function x(e){return{current:e}}function z(e){0>de||(e.current=J[de],J[de]=null,de--)}function G(e,n){de++,J[de]=e.current,e.current=n}var P=x(null),ce=x(null),ge=x(null),Re=x(null);function kn(e,n){switch(G(ge,n),G(ce,e),G(P,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?eh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=eh(n),e=nh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(P),G(P,e)}function an(){z(P),z(ce),z(ge)}function gt(e){e.memoizedState!==null&&G(Re,e);var n=P.current,t=nh(n,e.type);n!==t&&(G(ce,e),G(P,t))}function Ka(e){ce.current===e&&(z(P),z(ce)),Re.current===e&&(z(Re),Rs._currentValue=H)}var zl,Gs;function kt(e){if(zl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);zl=n&&n[1]||"",Gs=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zl+e+Gs}var Dl=!1;function jl(e,n){if(!e||Dl)return"";Dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(R){var A=R}Reflect.construct(e,[],L)}else{try{L.call()}catch(R){A=R}e.call(L.prototype)}}else{try{throw Error()}catch(R){A=R}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],f=s[1];if(r&&f){var g=r.split(`
`),T=f.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===T.length)for(a=g.length-1,l=T.length-1;1<=a&&0<=l&&g[a]!==T[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==T[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==T[l]){var M=`
`+g[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=l);break}}}finally{Dl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?kt(t):""}function vr(e,n){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jl(e.type,!1);case 11:return jl(e.type.render,!1);case 1:return jl(e.type,!0);case 31:return kt("Activity");default:return""}}function Ys(e){try{var n="",t=null;do n+=vr(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ul=Object.prototype.hasOwnProperty,Pa=o.unstable_scheduleCallback,Ll=o.unstable_cancelCallback,xr=o.unstable_shouldYield,Is=o.unstable_requestPaint,rn=o.unstable_now,Xs=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Sa=o.unstable_UserBlockingPriority,Ea=o.unstable_NormalPriority,Sr=o.unstable_LowPriority,Vs=o.unstable_IdlePriority,Er=o.log,kr=o.unstable_setDisableYieldValue,ka=null,Nn=null;function yt(e){if(typeof Er=="function"&&kr(e),Nn&&typeof Nn.setStrictMode=="function")try{Nn.setStrictMode(ka,e)}catch{}}var zn=Math.clz32?Math.clz32:Zs,wr=Math.log,Bl=Math.LN2;function Zs(e){return e>>>=0,e===0?32:31-(wr(e)/Bl|0)|0}var wa=256,Ja=262144,Ta=4194304;function Ln(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function y(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~s,a!==0?l=Ln(a):(r&=f,r!==0?l=Ln(r):t||(t=f&~e,t!==0&&(l=Ln(t))))):(f=a&~s,f!==0?l=Ln(f):r!==0?l=Ln(r):t||(t=a&~e,t!==0&&(l=Ln(t)))),l===0?0:n!==0&&n!==l&&(n&s)===0&&(s=l&-l,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:l}function j(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Y(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oe(){var e=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),e}function Ve(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ge(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $(e,n,t,a,l,s){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,T=e.hiddenUpdates;for(t=r&~t;0<t;){var M=31-zn(t),L=1<<M;f[M]=0,g[M]=-1;var A=T[M];if(A!==null)for(T[M]=null,M=0;M<A.length;M++){var R=A[M];R!==null&&(R.lane&=-536870913)}t&=~L}a!==0&&X(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~n))}function X(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-zn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function se(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-zn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function on(e,n){var t=n&-n;return t=(t&42)!==0?1:Je(t),(t&(e.suspendedLanes|n))!==0?0:t}function Je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $a(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:wh(e.type))}function Fa(e,n){var t=O.p;try{return O.p=e,n()}finally{O.p=t}}var bt=Math.random().toString(36).slice(2),cn="__reactFiber$"+bt,_n="__reactProps$"+bt,Vt="__reactContainer$"+bt,Hl="__reactEvents$"+bt,Ks="__reactListeners$"+bt,Wa="__reactHandles$"+bt,Ps="__reactResources$"+bt,Ca="__reactMarker$"+bt;function ql(e){delete e[cn],delete e[_n],delete e[Hl],delete e[Ks],delete e[Wa]}function Dn(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Vt]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=oh(e);e!==null;){if(t=e[cn])return t;e=oh(e)}return n}e=t,t=e.parentNode}return null}function Ct(e){if(e=e[cn]||e[Vt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Zt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function Kt(e){var n=e[Ps];return n||(n=e[Ps]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[Ca]=!0}var Js=new Set,Aa={};function At(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(Aa[e]=n,e=0;e<n.length;e++)Js.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),be={},je={};function un(e){return Ul.call(je,e)?!0:Ul.call(be,e)?!1:ee.test(e)?je[e]=!0:(be[e]=!0,!1)}function Mn(e,n,t){if(un(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Vn(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Bn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function Ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $s(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(r){t=""+r,s.call(this,r)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function el(e){if(!e._valueTracker){var n=Zn(e)?"checked":"value";e._valueTracker=$s(e,n,""+e[n])}}function Ql(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Zn(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tr=/[\n"\\]/g;function Hn(e){return e.replace(Tr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gl(e,n,t,a,l,s,r,f){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),n!=null?r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ie(n)):e.value!==""+Ie(n)&&(e.value=""+Ie(n)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),n!=null?tl(e,r,Ie(n)):t!=null?tl(e,r,Ie(t)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Ie(f):e.removeAttribute("name")}function Ra(e,n,t,a,l,s,r,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){el(e);return}t=t!=null?""+Ie(t):"",n=n!=null?""+Ie(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),el(e)}function tl(e,n,t){n==="number"&&nl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function wn(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Ie(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Fs(e,n,t){if(n!=null&&(n=""+Ie(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Ie(t):""}function al(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(vn(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Ie(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),el(e)}function le(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ws=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pn(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Ws.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ue(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&pn(e,l,a)}else for(var s in n)n.hasOwnProperty(s)&&pn(e,s,n[s])}function Pt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jt(e){return Yl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Q(){}var F=null;function fe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Se=null,We=null;function tt(e){var n=Ct(e);if(n&&(e=n.stateNode)){var t=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(Gl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[_n]||null;if(!l)throw Error(c(90));Gl(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Ql(a)}break e;case"textarea":Fs(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&wn(e,!!t.multiple,n,!1)}}}var Il=!1;function ei(e,n,t){if(Il)return e(n,t);Il=!0;try{var a=e(n);return a}finally{if(Il=!1,(Se!==null||We!==null)&&(Qi(),Se&&(n=Se,e=We,We=Se=null,tt(n),e)))for(n=0;n<e.length;n++)tt(e[n])}}function Xl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[_n]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cr=!1;if(Nt)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){Cr=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{Cr=!1}var $t=null,Ar=null,ni=null;function eu(){if(ni)return ni;var e,n=Ar,t=n.length,a,l="value"in $t?$t.value:$t.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var r=t-e;for(a=1;a<=r&&n[t-a]===l[s-a];a++);return ni=l.slice(e,1<a?1-a:void 0)}function ti(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function nu(){return!1}function qn(e){function n(t,a,l,s,r){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ai:nu,this.isPropagationStopped=nu,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=qn(Na),Zl=D({},Na,{view:0,detail:0}),Rp=qn(Zl),Rr,Nr,Kl,si=D({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Rr=e.screenX-Kl.screenX,Nr=e.screenY-Kl.screenY):Nr=Rr=0,Kl=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:Nr}}),tu=qn(si),Np=D({},si,{dataTransfer:0}),_p=qn(Np),Mp=D({},Zl,{relatedTarget:0}),_r=qn(Mp),Op=D({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=qn(Op),Dp=D({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jp=qn(Dp),Up=D({},Na,{data:0}),au=qn(Up),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hp[e])?!!n[e]:!1}function Mr(){return qp}var Qp=D({},Zl,{key:function(e){if(e.key){var n=Lp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mr,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=qn(Qp),Yp=D({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lu=qn(Yp),Ip=D({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mr}),Xp=qn(Ip),Vp=D({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=qn(Vp),Kp=D({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=qn(Kp),Jp=D({},Na,{newState:0,oldState:0}),$p=qn(Jp),Fp=[9,13,27,32],Or=Nt&&"CompositionEvent"in window,Pl=null;Nt&&"documentMode"in document&&(Pl=document.documentMode);var Wp=Nt&&"TextEvent"in window&&!Pl,su=Nt&&(!Or||Pl&&8<Pl&&11>=Pl),iu=" ",ru=!1;function ou(e,n){switch(e){case"keyup":return Fp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function em(e,n){switch(e){case"compositionend":return cu(n);case"keypress":return n.which!==32?null:(ru=!0,iu);case"textInput":return e=n.data,e===iu&&ru?null:e;default:return null}}function nm(e,n){if(ll)return e==="compositionend"||!Or&&ou(e,n)?(e=eu(),ni=Ar=$t=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return su&&n.locale!=="ko"?null:n.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tm[e.type]:n==="textarea"}function du(e,n,t,a){Se?We?We.push(a):We=[a]:Se=a,n=Ki(n,"onChange"),0<n.length&&(t=new li("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Jl=null,$l=null;function am(e){Kf(e,0)}function ii(e){var n=Zt(e);if(Ql(n))return e}function fu(e,n){if(e==="change")return n}var hu=!1;if(Nt){var zr;if(Nt){var Dr="oninput"in document;if(!Dr){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),Dr=typeof pu.oninput=="function"}zr=Dr}else zr=!1;hu=zr&&(!document.documentMode||9<document.documentMode)}function mu(){Jl&&(Jl.detachEvent("onpropertychange",gu),$l=Jl=null)}function gu(e){if(e.propertyName==="value"&&ii($l)){var n=[];du(n,$l,e,fe(e)),ei(am,n)}}function lm(e,n,t){e==="focusin"?(mu(),Jl=n,$l=t,Jl.attachEvent("onpropertychange",gu)):e==="focusout"&&mu()}function sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii($l)}function im(e,n){if(e==="click")return ii(n)}function rm(e,n){if(e==="input"||e==="change")return ii(n)}function om(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:om;function Fl(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Ul.call(n,l)||!Kn(e[l],n[l]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,n){var t=yu(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yu(t)}}function vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=nl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=nl(e.document)}return n}function jr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cm=Nt&&"documentMode"in document&&11>=document.documentMode,sl=null,Ur=null,Wl=null,Lr=!1;function Su(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Lr||sl==null||sl!==nl(a)||(a=sl,"selectionStart"in a&&jr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wl&&Fl(Wl,a)||(Wl=a,a=Ki(Ur,"onSelect"),0<a.length&&(n=new li("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=sl)))}function _a(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var il={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Br={},Eu={};Nt&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Ma(e){if(Br[e])return Br[e];if(!il[e])return e;var n=il[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Eu)return Br[e]=n[t];return e}var ku=Ma("animationend"),wu=Ma("animationiteration"),Tu=Ma("animationstart"),um=Ma("transitionrun"),dm=Ma("transitionstart"),fm=Ma("transitioncancel"),Cu=Ma("transitionend"),Au=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hr.push("scrollEnd");function dt(e,n){Au.set(e,n),At(n,[e])}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],rl=0,qr=0;function oi(){for(var e=rl,n=qr=rl=0;n<e;){var t=at[n];at[n++]=null;var a=at[n];at[n++]=null;var l=at[n];at[n++]=null;var s=at[n];if(at[n++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}s!==0&&Ru(t,l,s)}}function ci(e,n,t,a){at[rl++]=e,at[rl++]=n,at[rl++]=t,at[rl++]=a,qr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Qr(e,n,t,a){return ci(e,n,t,a),ui(e)}function Oa(e,n){return ci(e,null,null,n),ui(e)}function Ru(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,s=e.return;s!==null;)s.childLanes|=t,a=s.alternate,a!==null&&(a.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&n!==null&&(l=31-zn(t),e=s.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),s):null}function ui(e){if(50<Ss)throw Ss=0,$o=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ol={};function hm(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,n,t,a){return new hm(e,n,t,a)}function Gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,n){var t=e.alternate;return t===null?(t=Pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Nu(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function di(e,n,t,a,l,s){var r=0;if(a=e,typeof e=="function")Gr(e)&&(r=1);else if(typeof e=="string")r=bg(e,t,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Pe:return e=Pn(31,t,n,l),e.elementType=Pe,e.lanes=s,e;case K:return za(t.children,l,s,n);case Ae:r=8,l|=24;break;case ze:return e=Pn(12,t,n,l|2),e.elementType=ze,e.lanes=s,e;case ie:return e=Pn(13,t,n,l),e.elementType=ie,e.lanes=s,e;case ye:return e=Pn(19,t,n,l),e.elementType=ye,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:r=10;break e;case we:r=9;break e;case re:r=11;break e;case te:r=14;break e;case Te:r=16,a=null;break e}r=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=Pn(r,t,n,l),n.elementType=e,n.type=a,n.lanes=s,n}function za(e,n,t,a){return e=Pn(7,e,a,n),e.lanes=t,e}function Yr(e,n,t){return e=Pn(6,e,null,n),e.lanes=t,e}function _u(e){var n=Pn(18,null,null,0);return n.stateNode=e,n}function Ir(e,n,t){return n=Pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Mu=new WeakMap;function lt(e,n){if(typeof e=="object"&&e!==null){var t=Mu.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ys(n)},Mu.set(e,n),n)}return{value:e,source:n,stack:Ys(n)}}var cl=[],ul=0,fi=null,es=0,st=[],it=0,Ft=null,vt=1,xt="";function Mt(e,n){cl[ul++]=es,cl[ul++]=fi,fi=e,es=n}function Ou(e,n,t){st[it++]=vt,st[it++]=xt,st[it++]=Ft,Ft=e;var a=vt;e=xt;var l=32-zn(a)-1;a&=~(1<<l),t+=1;var s=32-zn(n)+l;if(30<s){var r=l-l%5;s=(a&(1<<r)-1).toString(32),a>>=r,l-=r,vt=1<<32-zn(n)+l|t<<l|a,xt=s+e}else vt=1<<s|t<<l|a,xt=e}function Xr(e){e.return!==null&&(Mt(e,1),Ou(e,1,0))}function Vr(e){for(;e===fi;)fi=cl[--ul],cl[ul]=null,es=cl[--ul],cl[ul]=null;for(;e===Ft;)Ft=st[--it],st[it]=null,xt=st[--it],st[it]=null,vt=st[--it],st[it]=null}function zu(e,n){st[it++]=vt,st[it++]=xt,st[it++]=Ft,vt=n.id,xt=n.overflow,Ft=e}var Tn=null,Ze=null,Ce=!1,Wt=null,rt=!1,Zr=Error(c(519));function ea(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ns(lt(n,e)),Zr}function Du(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[cn]=e,n[_n]=a,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<ks.length;t++)xe(ks[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ra(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),al(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Ff(n.textContent,t)?(a.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),a.onScroll!=null&&xe("scroll",n),a.onScrollEnd!=null&&xe("scrollend",n),a.onClick!=null&&(n.onclick=Q),n=!0):n=!1,n||ea(e,!0)}function ju(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:rt=!1;return;case 27:case 3:rt=!0;return;default:Tn=Tn.return}}function dl(e){if(e!==Tn)return!1;if(!Ce)return ju(e),Ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||fc(e.type,e.memoizedProps)),t=!t),t&&Ze&&ea(e),ju(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ze=rh(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ze=rh(e)}else n===27?(n=Ze,pa(e.type)?(e=yc,yc=null,Ze=e):Ze=n):Ze=Tn?ct(e.stateNode.nextSibling):null;return!0}function Da(){Ze=Tn=null,Ce=!1}function Kr(){var e=Wt;return e!==null&&(In===null?In=e:In.push.apply(In,e),Wt=null),e}function ns(e){Wt===null?Wt=[e]:Wt.push(e)}var Pr=x(null),ja=null,Ot=null;function na(e,n,t){G(Pr,n._currentValue),n._currentValue=t}function zt(e){e._currentValue=Pr.current,z(Pr)}function Jr(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function $r(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var r=l.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=l;for(var g=0;g<n.length;g++)if(f.context===n[g]){s.lanes|=t,f=s.alternate,f!==null&&(f.lanes|=t),Jr(s.return,t,e),a||(r=null);break e}s=f.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(c(341));r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),Jr(r,t,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function fl(e,n,t,a){e=null;for(var l=n,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var f=l.type;Kn(l.pendingProps.value,r.value)||(e!==null?e.push(f):e=[f])}}else if(l===Re.current){if(r=l.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Rs):e=[Rs])}l=l.return}e!==null&&$r(n,e,t,a),n.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ja=e,Ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Uu(ja,e)}function pi(e,n){return ja===null&&Ua(e),Uu(e,n)}function Uu(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Ot===null){if(e===null)throw Error(c(308));Ot=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ot=Ot.next=n;return t}var pm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},mm=o.unstable_scheduleCallback,gm=o.unstable_NormalPriority,mn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new pm,data:new Map,refCount:0}}function ts(e){e.refCount--,e.refCount===0&&mm(gm,function(){e.controller.abort()})}var as=null,Wr=0,hl=0,pl=null;function ym(e,n){if(as===null){var t=as=[];Wr=0,hl=ac(),pl={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Wr++,n.then(Lu,Lu),n}function Lu(){if(--Wr===0&&as!==null){pl!==null&&(pl.status="fulfilled");var e=as;as=null,hl=0,pl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bm(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Bu=N.S;N.S=function(e,n){Ef=rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ym(e,n),Bu!==null&&Bu(e,n)};var La=x(null);function eo(){var e=La.current;return e!==null?e:Ye.pooledCache}function mi(e,n){n===null?G(La,La.current):G(La,n.pool)}function Hu(){var e=eo();return e===null?null:{parent:mn._currentValue,pool:e}}var ml=Error(c(460)),no=Error(c(474)),gi=Error(c(542)),yi={then:function(){}};function qu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Q,Q),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yu(e),e;default:if(typeof n.status=="string")n.then(Q,Q);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yu(e),e}throw Ha=n,ml}}function Ba(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ha=t,ml):t}}var Ha=null;function Gu(){if(Ha===null)throw Error(c(459));var e=Ha;return Ha=null,e}function Yu(e){if(e===ml||e===gi)throw Error(c(483))}var gl=null,ls=0;function bi(e){var n=ls;return ls+=1,gl===null&&(gl=[]),Qu(gl,e,n)}function ss(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vi(e,n){throw n.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Iu(e){function n(E,S){if(e){var k=E.deletions;k===null?(E.deletions=[S],E.flags|=16):k.push(S)}}function t(E,S){if(!e)return null;for(;S!==null;)n(E,S),S=S.sibling;return null}function a(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function l(E,S){return E=_t(E,S),E.index=0,E.sibling=null,E}function s(E,S,k){return E.index=k,e?(k=E.alternate,k!==null?(k=k.index,k<S?(E.flags|=67108866,S):k):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function r(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,S,k,U){return S===null||S.tag!==6?(S=Yr(k,E.mode,U),S.return=E,S):(S=l(S,k),S.return=E,S)}function g(E,S,k,U){var ne=k.type;return ne===K?M(E,S,k.props.children,U,k.key):S!==null&&(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type)?(S=l(S,k.props),ss(S,k),S.return=E,S):(S=di(k.type,k.key,k.props,null,E.mode,U),ss(S,k),S.return=E,S)}function T(E,S,k,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=Ir(k,E.mode,U),S.return=E,S):(S=l(S,k.children||[]),S.return=E,S)}function M(E,S,k,U,ne){return S===null||S.tag!==7?(S=za(k,E.mode,U,ne),S.return=E,S):(S=l(S,k),S.return=E,S)}function L(E,S,k){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Yr(""+S,E.mode,k),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case I:return k=di(S.type,S.key,S.props,null,E.mode,k),ss(k,S),k.return=E,k;case q:return S=Ir(S,E.mode,k),S.return=E,S;case Te:return S=Ba(S),L(E,S,k)}if(vn(S)||nn(S))return S=za(S,E.mode,k,null),S.return=E,S;if(typeof S.then=="function")return L(E,bi(S),k);if(S.$$typeof===V)return L(E,pi(E,S),k);vi(E,S)}return null}function A(E,S,k,U){var ne=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ne!==null?null:f(E,S,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case I:return k.key===ne?g(E,S,k,U):null;case q:return k.key===ne?T(E,S,k,U):null;case Te:return k=Ba(k),A(E,S,k,U)}if(vn(k)||nn(k))return ne!==null?null:M(E,S,k,U,null);if(typeof k.then=="function")return A(E,S,bi(k),U);if(k.$$typeof===V)return A(E,S,pi(E,k),U);vi(E,k)}return null}function R(E,S,k,U,ne){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(k)||null,f(S,E,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case I:return E=E.get(U.key===null?k:U.key)||null,g(S,E,U,ne);case q:return E=E.get(U.key===null?k:U.key)||null,T(S,E,U,ne);case Te:return U=Ba(U),R(E,S,k,U,ne)}if(vn(U)||nn(U))return E=E.get(k)||null,M(S,E,U,ne,null);if(typeof U.then=="function")return R(E,S,k,bi(U),ne);if(U.$$typeof===V)return R(E,S,k,pi(S,U),ne);vi(S,U)}return null}function Z(E,S,k,U){for(var ne=null,Ne=null,W=S,me=S=0,ke=null;W!==null&&me<k.length;me++){W.index>me?(ke=W,W=null):ke=W.sibling;var _e=A(E,W,k[me],U);if(_e===null){W===null&&(W=ke);break}e&&W&&_e.alternate===null&&n(E,W),S=s(_e,S,me),Ne===null?ne=_e:Ne.sibling=_e,Ne=_e,W=ke}if(me===k.length)return t(E,W),Ce&&Mt(E,me),ne;if(W===null){for(;me<k.length;me++)W=L(E,k[me],U),W!==null&&(S=s(W,S,me),Ne===null?ne=W:Ne.sibling=W,Ne=W);return Ce&&Mt(E,me),ne}for(W=a(W);me<k.length;me++)ke=R(W,E,me,k[me],U),ke!==null&&(e&&ke.alternate!==null&&W.delete(ke.key===null?me:ke.key),S=s(ke,S,me),Ne===null?ne=ke:Ne.sibling=ke,Ne=ke);return e&&W.forEach(function(va){return n(E,va)}),Ce&&Mt(E,me),ne}function ae(E,S,k,U){if(k==null)throw Error(c(151));for(var ne=null,Ne=null,W=S,me=S=0,ke=null,_e=k.next();W!==null&&!_e.done;me++,_e=k.next()){W.index>me?(ke=W,W=null):ke=W.sibling;var va=A(E,W,_e.value,U);if(va===null){W===null&&(W=ke);break}e&&W&&va.alternate===null&&n(E,W),S=s(va,S,me),Ne===null?ne=va:Ne.sibling=va,Ne=va,W=ke}if(_e.done)return t(E,W),Ce&&Mt(E,me),ne;if(W===null){for(;!_e.done;me++,_e=k.next())_e=L(E,_e.value,U),_e!==null&&(S=s(_e,S,me),Ne===null?ne=_e:Ne.sibling=_e,Ne=_e);return Ce&&Mt(E,me),ne}for(W=a(W);!_e.done;me++,_e=k.next())_e=R(W,E,me,_e.value,U),_e!==null&&(e&&_e.alternate!==null&&W.delete(_e.key===null?me:_e.key),S=s(_e,S,me),Ne===null?ne=_e:Ne.sibling=_e,Ne=_e);return e&&W.forEach(function(Ng){return n(E,Ng)}),Ce&&Mt(E,me),ne}function Qe(E,S,k,U){if(typeof k=="object"&&k!==null&&k.type===K&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case I:e:{for(var ne=k.key;S!==null;){if(S.key===ne){if(ne=k.type,ne===K){if(S.tag===7){t(E,S.sibling),U=l(S,k.props.children),U.return=E,E=U;break e}}else if(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type){t(E,S.sibling),U=l(S,k.props),ss(U,k),U.return=E,E=U;break e}t(E,S);break}else n(E,S);S=S.sibling}k.type===K?(U=za(k.props.children,E.mode,U,k.key),U.return=E,E=U):(U=di(k.type,k.key,k.props,null,E.mode,U),ss(U,k),U.return=E,E=U)}return r(E);case q:e:{for(ne=k.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){t(E,S.sibling),U=l(S,k.children||[]),U.return=E,E=U;break e}else{t(E,S);break}else n(E,S);S=S.sibling}U=Ir(k,E.mode,U),U.return=E,E=U}return r(E);case Te:return k=Ba(k),Qe(E,S,k,U)}if(vn(k))return Z(E,S,k,U);if(nn(k)){if(ne=nn(k),typeof ne!="function")throw Error(c(150));return k=ne.call(k),ae(E,S,k,U)}if(typeof k.then=="function")return Qe(E,S,bi(k),U);if(k.$$typeof===V)return Qe(E,S,pi(E,k),U);vi(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,S!==null&&S.tag===6?(t(E,S.sibling),U=l(S,k),U.return=E,E=U):(t(E,S),U=Yr(k,E.mode,U),U.return=E,E=U),r(E)):t(E,S)}return function(E,S,k,U){try{ls=0;var ne=Qe(E,S,k,U);return gl=null,ne}catch(W){if(W===ml||W===gi)throw W;var Ne=Pn(29,W,null,E.mode);return Ne.lanes=U,Ne.return=E,Ne}}}var qa=Iu(!0),Xu=Iu(!1),ta=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Oe&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=ui(e),Ru(e,null,t),n}return ci(e,a,n,t),ui(e)}function is(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,se(e,t)}}function lo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?l=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var so=!1;function rs(){if(so){var e=pl;if(e!==null)throw e}}function os(e,n,t,a){so=!1;var l=e.updateQueue;ta=!1;var s=l.firstBaseUpdate,r=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var g=f,T=g.next;g.next=null,r===null?s=T:r.next=T,r=g;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==r&&(f===null?M.firstBaseUpdate=T:f.next=T,M.lastBaseUpdate=g))}if(s!==null){var L=l.baseState;r=0,M=T=g=null,f=s;do{var A=f.lane&-536870913,R=A!==f.lane;if(R?(Ee&A)===A:(a&A)===A){A!==0&&A===hl&&(so=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,ae=f;A=n;var Qe=t;switch(ae.tag){case 1:if(Z=ae.payload,typeof Z=="function"){L=Z.call(Qe,L,A);break e}L=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ae.payload,A=typeof Z=="function"?Z.call(Qe,L,A):Z,A==null)break e;L=D({},L,A);break e;case 2:ta=!0}}A=f.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[A]:R.push(A))}else R={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(T=M=R,g=L):M=M.next=R,r|=A;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;R=f,f=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);M===null&&(g=L),l.baseState=g,l.firstBaseUpdate=T,l.lastBaseUpdate=M,s===null&&(l.shared.lanes=0),ca|=r,e.lanes=r,e.memoizedState=L}}function Vu(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Zu(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Vu(t[e],n)}var yl=x(null),xi=x(0);function Ku(e,n){e=Gt,G(xi,e),G(yl,n),Gt=e|n.baseLanes}function io(){G(xi,Gt),G(yl,yl.current)}function ro(){Gt=xi.current,z(yl),z(xi)}var Jn=x(null),ot=null;function sa(e){var n=e.alternate;G(dn,dn.current&1),G(Jn,e),ot===null&&(n===null||yl.current!==null||n.memoizedState!==null)&&(ot=e)}function oo(e){G(dn,dn.current),G(Jn,e),ot===null&&(ot=e)}function Pu(e){e.tag===22?(G(dn,dn.current),G(Jn,e),ot===null&&(ot=e)):ia()}function ia(){G(dn,dn.current),G(Jn,Jn.current)}function $n(e){z(Jn),ot===e&&(ot=null),z(dn)}var dn=x(0);function Si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||mc(t)||gc(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dt=0,pe=null,He=null,gn=null,Ei=!1,bl=!1,Qa=!1,ki=0,cs=0,vl=null,vm=0;function ln(){throw Error(c(321))}function co(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Kn(e[t],n[t]))return!1;return!0}function uo(e,n,t,a,l,s){return Dt=s,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Od:Co,Qa=!1,s=t(a,l),Qa=!1,bl&&(s=$u(n,t,a,l)),Ju(e),s}function Ju(e){N.H=fs;var n=He!==null&&He.next!==null;if(Dt=0,gn=He=pe=null,Ei=!1,cs=0,vl=null,n)throw Error(c(300));e===null||yn||(e=e.dependencies,e!==null&&hi(e)&&(yn=!0))}function $u(e,n,t,a){pe=e;var l=0;do{if(bl&&(vl=null),cs=0,bl=!1,25<=l)throw Error(c(301));if(l+=1,gn=He=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}N.H=zd,s=n(t,a)}while(bl);return s}function xm(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?us(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(pe.flags|=1024),n}function fo(){var e=ki!==0;return ki=0,e}function ho(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function po(e){if(Ei){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ei=!1}Dt=0,gn=He=pe=null,bl=!1,cs=ki=0,vl=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?pe.memoizedState=gn=e:gn=gn.next=e,gn}function fn(){if(He===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=gn===null?pe.memoizedState:gn.next;if(n!==null)gn=n,He=e;else{if(e===null)throw pe.alternate===null?Error(c(467)):Error(c(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},gn===null?pe.memoizedState=gn=e:gn=gn.next=e}return gn}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(e){var n=cs;return cs+=1,vl===null&&(vl=[]),e=Qu(vl,e,n),n=pe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Od:Co),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return us(e);if(e.$$typeof===V)return Cn(e)}throw Error(c(438,String(e)))}function mo(e){var n=null,t=pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=wi(),pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=en;return n.index++,t}function jt(e,n){return typeof n=="function"?n(e):n}function Ci(e){var n=fn();return go(n,He,e)}function go(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var r=l.next;l.next=s.next,s.next=r}n.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{n=l.next;var f=r=null,g=null,T=n,M=!1;do{var L=T.lane&-536870913;if(L!==T.lane?(Ee&L)===L:(Dt&L)===L){var A=T.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),L===hl&&(M=!0);else if((Dt&A)===A){T=T.next,A===hl&&(M=!0);continue}else L={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=L,r=s):g=g.next=L,pe.lanes|=A,ca|=A;L=T.action,Qa&&t(s,L),s=T.hasEagerState?T.eagerState:t(s,L)}else A={lane:L,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=A,r=s):g=g.next=A,pe.lanes|=L,ca|=L;T=T.next}while(T!==null&&T!==n);if(g===null?r=s:g.next=f,!Kn(s,e.memoizedState)&&(yn=!0,M&&(t=pl,t!==null)))throw t;e.memoizedState=s,e.baseState=r,e.baseQueue=g,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function yo(e){var n=fn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var r=l=l.next;do s=e(s,r.action),r=r.next;while(r!==l);Kn(s,n.memoizedState)||(yn=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Fu(e,n,t){var a=pe,l=fn(),s=Ce;if(s){if(t===void 0)throw Error(c(407));t=t()}else t=n();var r=!Kn((He||l).memoizedState,t);if(r&&(l.memoizedState=t,yn=!0),l=l.queue,xo(nd.bind(null,a,l,e),[e]),l.getSnapshot!==n||r||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,xl(9,{destroy:void 0},ed.bind(null,a,l,t,n),null),Ye===null)throw Error(c(349));s||(Dt&127)!==0||Wu(a,n,t)}return t}function Wu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n=wi(),pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ed(e,n,t,a){n.value=t,n.getSnapshot=a,td(n)&&ad(e)}function nd(e,n,t){return t(function(){td(n)&&ad(e)})}function td(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Kn(e,t)}catch{return!0}}function ad(e){var n=Oa(e,2);n!==null&&Xn(n,e,2)}function bo(e){var n=jn();if(typeof e=="function"){var t=e;if(e=t(),Qa){yt(!0);try{t()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function ld(e,n,t,a){return e.baseState=t,go(e,He,typeof a=="function"?a:jt)}function Sm(e,n,t,a,l){if(Ni(e))throw Error(c(485));if(e=n.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};N.T!==null?t(!0):s.isTransition=!1,a(s),t=n.pending,t===null?(s.next=n.pending=s,sd(n,s)):(s.next=t.next,n.pending=t.next=s)}}function sd(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var s=N.T,r={};N.T=r;try{var f=t(l,a),g=N.S;g!==null&&g(r,f),id(e,n,f)}catch(T){vo(e,n,T)}finally{s!==null&&r.types!==null&&(s.types=r.types),N.T=s}}else try{s=t(l,a),id(e,n,s)}catch(T){vo(e,n,T)}}function id(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){rd(e,n,a)},function(a){return vo(e,n,a)}):rd(e,n,t)}function rd(e,n,t){n.status="fulfilled",n.value=t,od(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,sd(e,t)))}function vo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,od(n),n=n.next;while(n!==a)}e.action=null}function od(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cd(e,n){return n}function ud(e,n){if(Ce){var t=Ye.formState;if(t!==null){e:{var a=pe;if(Ce){if(Ze){n:{for(var l=Ze,s=rt;l.nodeType!==8;){if(!s){l=null;break n}if(l=ct(l.nextSibling),l===null){l=null;break n}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Ze=ct(l.nextSibling),a=l.data==="F!";break e}}ea(a)}a=!1}a&&(n=t[0])}}return t=jn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cd,lastRenderedState:n},t.queue=a,t=Nd.bind(null,pe,a),a.dispatch=t,a=bo(!1),s=To.bind(null,pe,!1,a.queue),a=jn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Sm.bind(null,pe,l,s,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function dd(e){var n=fn();return fd(n,He,e)}function fd(e,n,t){if(n=go(e,n,cd)[0],e=Ci(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=us(n)}catch(r){throw r===ml?gi:r}else a=n;n=fn();var l=n.queue,s=l.dispatch;return t!==n.memoizedState&&(pe.flags|=2048,xl(9,{destroy:void 0},Em.bind(null,l,t),null)),[a,s,e]}function Em(e,n){e.action=n}function hd(e){var n=fn(),t=He;if(t!==null)return fd(n,t,e);fn(),n=n.memoizedState,t=fn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function xl(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=pe.updateQueue,n===null&&(n=wi(),pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function pd(){return fn().memoizedState}function Ai(e,n,t,a){var l=jn();pe.flags|=e,l.memoizedState=xl(1|n,{destroy:void 0},t,a===void 0?null:a)}function Ri(e,n,t,a){var l=fn();a=a===void 0?null:a;var s=l.memoizedState.inst;He!==null&&a!==null&&co(a,He.memoizedState.deps)?l.memoizedState=xl(n,s,t,a):(pe.flags|=e,l.memoizedState=xl(1|n,s,t,a))}function md(e,n){Ai(8390656,8,e,n)}function xo(e,n){Ri(2048,8,e,n)}function km(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=wi(),pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function gd(e){var n=fn().memoizedState;return km({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function yd(e,n){return Ri(4,2,e,n)}function bd(e,n){return Ri(4,4,e,n)}function vd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xd(e,n,t){t=t!=null?t.concat([e]):null,Ri(4,4,vd.bind(null,n,e),t)}function So(){}function Sd(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&co(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Ed(e,n){var t=fn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&co(n,a[1]))return a[0];if(a=e(),Qa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a}function Eo(e,n,t){return t===void 0||(Dt&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=wf(),pe.lanes|=e,ca|=e,t)}function kd(e,n,t,a){return Kn(t,n)?t:yl.current!==null?(e=Eo(e,t,a),Kn(e,n)||(yn=!0),e):(Dt&42)===0||(Dt&1073741824)!==0&&(Ee&261930)===0?(yn=!0,e.memoizedState=t):(e=wf(),pe.lanes|=e,ca|=e,n)}function wd(e,n,t,a,l){var s=O.p;O.p=s!==0&&8>s?s:8;var r=N.T,f={};N.T=f,To(e,!1,n,t);try{var g=l(),T=N.S;if(T!==null&&T(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=bm(g,a);ds(e,n,M,et(e))}else ds(e,n,a,et(e))}catch(L){ds(e,n,{then:function(){},status:"rejected",reason:L},et())}finally{O.p=s,r!==null&&f.types!==null&&(r.types=f.types),N.T=r}}function wm(){}function ko(e,n,t,a){if(e.tag!==5)throw Error(c(476));var l=Td(e).queue;wd(e,l,n,H,t===null?wm:function(){return Cd(e),t(a)})}function Td(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:H},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cd(e){var n=Td(e);n.next===null&&(n=e.alternate.memoizedState),ds(e,n.next.queue,{},et())}function wo(){return Cn(Rs)}function Ad(){return fn().memoizedState}function Rd(){return fn().memoizedState}function Tm(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=et();e=aa(t);var a=la(n,e,t);a!==null&&(Xn(a,n,t),is(a,n,t)),n={cache:Fr()},e.payload=n;return}n=n.return}}function Cm(e,n,t){var a=et();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ni(e)?_d(n,t):(t=Qr(e,n,t,a),t!==null&&(Xn(t,e,a),Md(t,n,a)))}function Nd(e,n,t){var a=et();ds(e,n,t,a)}function ds(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))_d(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var r=n.lastRenderedState,f=s(r,t);if(l.hasEagerState=!0,l.eagerState=f,Kn(f,r))return ci(e,n,l,0),Ye===null&&oi(),!1}catch{}if(t=Qr(e,n,l,a),t!==null)return Xn(t,e,a),Md(t,n,a),!0}return!1}function To(e,n,t,a){if(a={lane:2,revertLane:ac(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(n)throw Error(c(479))}else n=Qr(e,t,a,2),n!==null&&Xn(n,e,2)}function Ni(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function _d(e,n){bl=Ei=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Md(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,se(e,t)}}var fs={readContext:Cn,use:Ti,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};fs.useEffectEvent=ln;var Od={readContext:Cn,use:Ti,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:md,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ai(4194308,4,vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ai(4194308,4,e,n)},useInsertionEffect:function(e,n){Ai(4,2,e,n)},useMemo:function(e,n){var t=jn();n=n===void 0?null:n;var a=e();if(Qa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=jn();if(t!==void 0){var l=t(n);if(Qa){yt(!0);try{t(n)}finally{yt(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Cm.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=bo(e);var n=e.queue,t=Nd.bind(null,pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:So,useDeferredValue:function(e,n){var t=jn();return Eo(t,e,n)},useTransition:function(){var e=bo(!1);return e=wd.bind(null,pe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=pe,l=jn();if(Ce){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Ye===null)throw Error(c(349));(Ee&127)!==0||Wu(a,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,md(nd.bind(null,a,s,e),[e]),a.flags|=2048,xl(9,{destroy:void 0},ed.bind(null,a,s,t,n),null),t},useId:function(){var e=jn(),n=Ye.identifierPrefix;if(Ce){var t=xt,a=vt;t=(a&~(1<<32-zn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ki++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=vm++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:wo,useFormState:ud,useActionState:ud,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=To.bind(null,pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:mo,useCacheRefresh:function(){return jn().memoizedState=Tm.bind(null,pe)},useEffectEvent:function(e){var n=jn(),t={impl:e};return n.memoizedState=t,function(){if((Oe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Co={readContext:Cn,use:Ti,useCallback:Sd,useContext:Cn,useEffect:xo,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ed,useReducer:Ci,useRef:pd,useState:function(){return Ci(jt)},useDebugValue:So,useDeferredValue:function(e,n){var t=fn();return kd(t,He.memoizedState,e,n)},useTransition:function(){var e=Ci(jt)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:us(e),n]},useSyncExternalStore:Fu,useId:Ad,useHostTransitionStatus:wo,useFormState:dd,useActionState:dd,useOptimistic:function(e,n){var t=fn();return ld(t,He,e,n)},useMemoCache:mo,useCacheRefresh:Rd};Co.useEffectEvent=gd;var zd={readContext:Cn,use:Ti,useCallback:Sd,useContext:Cn,useEffect:xo,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:Ed,useReducer:yo,useRef:pd,useState:function(){return yo(jt)},useDebugValue:So,useDeferredValue:function(e,n){var t=fn();return He===null?Eo(t,e,n):kd(t,He.memoizedState,e,n)},useTransition:function(){var e=yo(jt)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:us(e),n]},useSyncExternalStore:Fu,useId:Ad,useHostTransitionStatus:wo,useFormState:hd,useActionState:hd,useOptimistic:function(e,n){var t=fn();return He!==null?ld(t,He,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:mo,useCacheRefresh:Rd};zd.useEffectEvent=gd;function Ao(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:D({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ro={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=et(),l=aa(a);l.payload=n,t!=null&&(l.callback=t),n=la(e,l,a),n!==null&&(Xn(n,e,a),is(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=et(),l=aa(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=la(e,l,a),n!==null&&(Xn(n,e,a),is(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=et(),a=aa(t);a.tag=2,n!=null&&(a.callback=n),n=la(e,a,t),n!==null&&(Xn(n,e,t),is(n,e,t))}};function Dd(e,n,t,a,l,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):n.prototype&&n.prototype.isPureReactComponent?!Fl(t,a)||!Fl(l,s):!0}function jd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Ro.enqueueReplaceState(n,n.state,null)}function Ga(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=D({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Ud(e){ri(e)}function Ld(e){console.error(e)}function Bd(e){ri(e)}function _i(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Hd(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function No(e,n,t){return t=aa(t),t.tag=3,t.payload={element:null},t.callback=function(){_i(e,n)},t}function qd(e){return e=aa(e),e.tag=3,e}function Qd(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){Hd(n,t,a)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Hd(n,t,a),typeof l!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Am(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&fl(n,t,l,!0),t=Jn.current,t!==null){switch(t.tag){case 31:case 13:return ot===null?Gi():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===yi?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ec(e,a,l)),!1;case 22:return t.flags|=65536,a===yi?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ec(e,a,l)),!1}throw Error(c(435,t.tag))}return ec(e,a,l),Gi(),!1}if(Ce)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Zr&&(e=Error(c(422),{cause:a}),ns(lt(e,t)))):(a!==Zr&&(n=Error(c(423),{cause:a}),ns(lt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=lt(a,t),l=No(e.stateNode,a,l),lo(e,l),sn!==4&&(sn=2)),!1;var s=Error(c(520),{cause:a});if(s=lt(s,t),xs===null?xs=[s]:xs.push(s),sn!==4&&(sn=2),n===null)return!0;a=lt(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=No(t.stateNode,a,e),lo(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ua===null||!ua.has(s))))return t.flags|=65536,l&=-l,t.lanes|=l,l=qd(l),Qd(l,e,t,a),lo(t,l),!1}t=t.return}while(t!==null);return!1}var _o=Error(c(461)),yn=!1;function An(e,n,t,a){n.child=e===null?Xu(n,null,t,a):qa(n,e.child,t,a)}function Gd(e,n,t,a,l){t=t.render;var s=n.ref;if("ref"in a){var r={};for(var f in a)f!=="ref"&&(r[f]=a[f])}else r=a;return Ua(n),a=uo(e,n,t,r,s,l),f=fo(),e!==null&&!yn?(ho(e,n,l),Ut(e,n,l)):(Ce&&f&&Xr(n),n.flags|=1,An(e,n,a,l),n.child)}function Yd(e,n,t,a,l){if(e===null){var s=t.type;return typeof s=="function"&&!Gr(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,Id(e,n,s,a,l)):(e=di(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!Bo(e,l)){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:Fl,t(r,a)&&e.ref===n.ref)return Ut(e,n,l)}return n.flags|=1,e=_t(s,a),e.ref=n.ref,e.return=n,n.child=e}function Id(e,n,t,a,l){if(e!==null){var s=e.memoizedProps;if(Fl(s,a)&&e.ref===n.ref)if(yn=!1,n.pendingProps=a=s,Bo(e,l))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Ut(e,n,l)}return Mo(e,n,t,a,l)}function Xd(e,n,t,a){var l=a.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~s}else a=0,n.child=null;return Vd(e,n,s,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(n,s!==null?s.cachePool:null),s!==null?Ku(n,s):io(),Pu(n);else return a=n.lanes=536870912,Vd(e,n,s!==null?s.baseLanes|t:t,t,a)}else s!==null?(mi(n,s.cachePool),Ku(n,s),ia(),n.memoizedState=null):(e!==null&&mi(n,null),io(),ia());return An(e,n,l,t),n.child}function hs(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vd(e,n,t,a,l){var s=eo();return s=s===null?null:{parent:mn._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&mi(n,null),io(),Pu(n),e!==null&&fl(e,n,a,!0),n.childLanes=l,null}function Mi(e,n){return n=zi({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zd(e,n,t){return qa(n,e.child,null,t),e=Mi(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Rm(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(a.mode==="hidden")return e=Mi(n,a),n.lanes=536870912,hs(null,e);if(oo(n),(e=Ze)?(e=ih(e,rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=_u(e),t.return=n,n.child=t,Tn=n,Ze=null)):e=null,e===null)throw ea(n);return n.lanes=536870912,null}return Mi(n,a)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(oo(n),l)if(n.flags&256)n.flags&=-257,n=Zd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(yn||fl(e,n,t,!1),l=(t&e.childLanes)!==0,yn||l){if(a=Ye,a!==null&&(r=on(a,t),r!==0&&r!==s.retryLane))throw s.retryLane=r,Oa(e,r),Xn(a,e,r),_o;Gi(),n=Zd(e,n,t)}else e=s.treeContext,Ze=ct(r.nextSibling),Tn=n,Ce=!0,Wt=null,rt=!1,e!==null&&zu(n,e),n=Mi(n,a),n.flags|=4096;return n}return e=_t(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Oi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Mo(e,n,t,a,l){return Ua(n),t=uo(e,n,t,a,void 0,l),a=fo(),e!==null&&!yn?(ho(e,n,l),Ut(e,n,l)):(Ce&&a&&Xr(n),n.flags|=1,An(e,n,t,l),n.child)}function Kd(e,n,t,a,l,s){return Ua(n),n.updateQueue=null,t=$u(n,a,t,l),Ju(e),a=fo(),e!==null&&!yn?(ho(e,n,s),Ut(e,n,s)):(Ce&&a&&Xr(n),n.flags|=1,An(e,n,t,s),n.child)}function Pd(e,n,t,a,l){if(Ua(n),n.stateNode===null){var s=ol,r=t.contextType;typeof r=="object"&&r!==null&&(s=Cn(r)),s=new t(a,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ro,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=a,s.state=n.memoizedState,s.refs={},to(n),r=t.contextType,s.context=typeof r=="object"&&r!==null?Cn(r):ol,s.state=n.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Ao(n,t,r,a),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ro.enqueueReplaceState(s,s.state,null),os(n,a,s,l),rs(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){s=n.stateNode;var f=n.memoizedProps,g=Ga(t,f);s.props=g;var T=s.context,M=t.contextType;r=ol,typeof M=="object"&&M!==null&&(r=Cn(M));var L=t.getDerivedStateFromProps;M=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,M||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||T!==r)&&jd(n,s,a,r),ta=!1;var A=n.memoizedState;s.state=A,os(n,a,s,l),rs(),T=n.memoizedState,f||A!==T||ta?(typeof L=="function"&&(Ao(n,t,L,a),T=n.memoizedState),(g=ta||Dd(n,t,g,a,A,T,r))?(M||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),s.props=a,s.state=T,s.context=r,a=g):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,ao(e,n),r=n.memoizedProps,M=Ga(t,r),s.props=M,L=n.pendingProps,A=s.context,T=t.contextType,g=ol,typeof T=="object"&&T!==null&&(g=Cn(T)),f=t.getDerivedStateFromProps,(T=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==L||A!==g)&&jd(n,s,a,g),ta=!1,A=n.memoizedState,s.state=A,os(n,a,s,l),rs();var R=n.memoizedState;r!==L||A!==R||ta||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof f=="function"&&(Ao(n,t,f,a),R=n.memoizedState),(M=ta||Dd(n,t,M,a,A,R,g)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,R,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,R,g)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=R),s.props=a,s.state=R,s.context=g,a=M):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),a=!1)}return s=a,Oi(e,n),a=(n.flags&128)!==0,s||a?(s=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&a?(n.child=qa(n,e.child,null,l),n.child=qa(n,null,t,l)):An(e,n,t,l),n.memoizedState=s.state,e=n.child):e=Ut(e,n,l),e}function Jd(e,n,t,a){return Da(),n.flags|=256,An(e,n,t,a),n.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(e){return{baseLanes:e,cachePool:Hu()}}function Do(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Wn),e}function $d(e,n,t){var a=n.pendingProps,l=!1,s=(n.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),r&&(l=!0,n.flags&=-129),r=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(l?sa(n):ia(),(e=Ze)?(e=ih(e,rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=_u(e),t.return=n,n.child=t,Tn=n,Ze=null)):e=null,e===null)throw ea(n);return gc(e)?n.lanes=32:n.lanes=536870912,null}var f=a.children;return a=a.fallback,l?(ia(),l=n.mode,f=zi({mode:"hidden",children:f},l),a=za(a,l,t,null),f.return=n,a.return=n,f.sibling=a,n.child=f,a=n.child,a.memoizedState=zo(t),a.childLanes=Do(e,r,t),n.memoizedState=Oo,hs(null,a)):(sa(n),jo(n,f))}var g=e.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(s)n.flags&256?(sa(n),n.flags&=-257,n=Uo(e,n,t)):n.memoizedState!==null?(ia(),n.child=e.child,n.flags|=128,n=null):(ia(),f=a.fallback,l=n.mode,a=zi({mode:"visible",children:a.children},l),f=za(f,l,t,null),f.flags|=2,a.return=n,f.return=n,a.sibling=f,n.child=a,qa(n,e.child,null,t),a=n.child,a.memoizedState=zo(t),a.childLanes=Do(e,r,t),n.memoizedState=Oo,n=hs(null,a));else if(sa(n),gc(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var T=r.dgst;r=T,a=Error(c(419)),a.stack="",a.digest=r,ns({value:a,source:null,stack:null}),n=Uo(e,n,t)}else if(yn||fl(e,n,t,!1),r=(t&e.childLanes)!==0,yn||r){if(r=Ye,r!==null&&(a=on(r,t),a!==0&&a!==g.retryLane))throw g.retryLane=a,Oa(e,a),Xn(r,e,a),_o;mc(f)||Gi(),n=Uo(e,n,t)}else mc(f)?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Ze=ct(f.nextSibling),Tn=n,Ce=!0,Wt=null,rt=!1,e!==null&&zu(n,e),n=jo(n,a.children),n.flags|=4096);return n}return l?(ia(),f=a.fallback,l=n.mode,g=e.child,T=g.sibling,a=_t(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,T!==null?f=_t(T,f):(f=za(f,l,t,null),f.flags|=2),f.return=n,a.return=n,a.sibling=f,n.child=a,hs(null,a),a=n.child,f=e.child.memoizedState,f===null?f=zo(t):(l=f.cachePool,l!==null?(g=mn._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=Hu(),f={baseLanes:f.baseLanes|t,cachePool:l}),a.memoizedState=f,a.childLanes=Do(e,r,t),n.memoizedState=Oo,hs(e.child,a)):(sa(n),t=e.child,e=t.sibling,t=_t(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t)}function jo(e,n){return n=zi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zi(e,n){return e=Pn(22,e,null,n),e.lanes=0,e}function Uo(e,n,t){return qa(n,e.child,null,t),e=jo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Jr(e.return,n,t)}function Lo(e,n,t,a,l,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:s}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l,r.treeForkCount=s)}function Wd(e,n,t){var a=n.pendingProps,l=a.revealOrder,s=a.tail;a=a.children;var r=dn.current,f=(r&2)!==0;if(f?(r=r&1|2,n.flags|=128):r&=1,G(dn,r),An(e,n,a,t),a=Ce?es:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fd(e,t,n);else if(e.tag===19)Fd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Si(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Lo(n,!1,l,t,s,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Si(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Lo(n,!0,t,null,s,a);break;case"together":Lo(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Ut(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ca|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(fl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=_t(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_t(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bo(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Nm(e,n,t){switch(n.tag){case 3:kn(n,n.stateNode.containerInfo),na(n,mn,e.memoizedState.cache),Da();break;case 27:case 5:gt(n);break;case 4:kn(n,n.stateNode.containerInfo);break;case 10:na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,oo(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(sa(n),n.flags|=128,null):(t&n.child.childLanes)!==0?$d(e,n,t):(sa(n),e=Ut(e,n,t),e!==null?e.sibling:null);sa(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(fl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return Wd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(dn,dn.current),a)break;return null;case 22:return n.lanes=0,Xd(e,n,t,n.pendingProps);case 24:na(n,mn,e.memoizedState.cache)}return Ut(e,n,t)}function ef(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!Bo(e,t)&&(n.flags&128)===0)return yn=!1,Nm(e,n,t);yn=(e.flags&131072)!==0}else yn=!1,Ce&&(n.flags&1048576)!==0&&Ou(n,es,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Ba(n.elementType),n.type=e,typeof e=="function")Gr(e)?(a=Ga(e,a),n.tag=1,n=Pd(null,n,e,a,t)):(n.tag=0,n=Mo(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===re){n.tag=11,n=Gd(null,n,e,a,t);break e}else if(l===te){n.tag=14,n=Yd(null,n,e,a,t);break e}}throw n=tn(e)||e,Error(c(306,n,""))}}return n;case 0:return Mo(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Ga(a,n.pendingProps),Pd(e,n,a,l,t);case 3:e:{if(kn(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var s=n.memoizedState;l=s.element,ao(e,n),os(n,a,null,t);var r=n.memoizedState;if(a=r.cache,na(n,mn,a),a!==s.cache&&$r(n,[mn],t,!0),rs(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=Jd(e,n,a,t);break e}else if(a!==l){l=lt(Error(c(424)),n),ns(l),n=Jd(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=ct(e.firstChild),Tn=n,Ce=!0,Wt=null,rt=!0,t=Xu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Da(),a===l){n=Ut(e,n,t);break e}An(e,n,a,t)}n=n.child}return n;case 26:return Oi(e,n),e===null?(t=fh(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ce||(t=n.type,e=n.pendingProps,a=Pi(ge.current).createElement(t),a[cn]=n,a[_n]=e,Rn(a,t,e),hn(a),n.stateNode=a):n.memoizedState=fh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return gt(n),e===null&&Ce&&(a=n.stateNode=ch(n.type,n.pendingProps,ge.current),Tn=n,rt=!0,l=Ze,pa(n.type)?(yc=l,Ze=ct(a.firstChild)):Ze=l),An(e,n,n.pendingProps.children,t),Oi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((l=a=Ze)&&(a=sg(a,n.type,n.pendingProps,rt),a!==null?(n.stateNode=a,Tn=n,Ze=ct(a.firstChild),rt=!1,l=!0):l=!1),l||ea(n)),gt(n),l=n.type,s=n.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,fc(l,s)?a=null:r!==null&&fc(l,r)&&(n.flags|=32),n.memoizedState!==null&&(l=uo(e,n,xm,null,null,t),Rs._currentValue=l),Oi(e,n),An(e,n,a,t),n.child;case 6:return e===null&&Ce&&((e=t=Ze)&&(t=ig(t,n.pendingProps,rt),t!==null?(n.stateNode=t,Tn=n,Ze=null,e=!0):e=!1),e||ea(n)),null;case 13:return $d(e,n,t);case 4:return kn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=qa(n,null,a,t):An(e,n,a,t),n.child;case 11:return Gd(e,n,n.type,n.pendingProps,t);case 7:return An(e,n,n.pendingProps,t),n.child;case 8:return An(e,n,n.pendingProps.children,t),n.child;case 12:return An(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,na(n,n.type,a.value),An(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Ua(n),l=Cn(l),a=a(l),n.flags|=1,An(e,n,a,t),n.child;case 14:return Yd(e,n,n.type,n.pendingProps,t);case 15:return Id(e,n,n.type,n.pendingProps,t);case 19:return Wd(e,n,t);case 31:return Rm(e,n,t);case 22:return Xd(e,n,t,n.pendingProps);case 24:return Ua(n),a=Cn(mn),e===null?(l=eo(),l===null&&(l=Ye,s=Fr(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=t),l=s),n.memoizedState={parent:a,cache:l},to(n),na(n,mn,l)):((e.lanes&t)!==0&&(ao(e,n),os(n,null,null,t),rs()),l=e.memoizedState,s=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),na(n,mn,a)):(a=s.cache,na(n,mn,a),a!==l.cache&&$r(n,[mn],t,!0))),An(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function Lt(e){e.flags|=4}function Ho(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Rf())e.flags|=8192;else throw Ha=yi,no}else e.flags&=-16777217}function nf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yh(n))if(Rf())e.flags|=8192;else throw Ha=yi,no}function Di(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?oe():536870912,e.lanes|=n,wl|=n)}function ps(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function _m(e,n,t){var a=n.pendingProps;switch(Vr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zt(mn),an(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(dl(n)?Lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kr())),Ke(n),null;case 26:var l=n.type,s=n.memoizedState;return e===null?(Lt(n),s!==null?(Ke(n),nf(n,s)):(Ke(n),Ho(n,l,null,a,t))):s?s!==e.memoizedState?(Lt(n),Ke(n),nf(n,s)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Lt(n),Ke(n),Ho(n,l,e,a,t)),null;case 27:if(Ka(n),t=ge.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}e=P.current,dl(n)?Du(n):(e=ch(l,a,t),n.stateNode=e,Lt(n))}return Ke(n),null;case 5:if(Ka(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}if(s=P.current,dl(n))Du(n);else{var r=Pi(ge.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}s[cn]=n,s[_n]=a;e:for(r=n.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}n.stateNode=s;e:switch(Rn(s,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Lt(n)}}return Ke(n),Ho(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=ge.current,dl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Tn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Ff(e.nodeValue,t)),e||ea(n,!0)}else e=Pi(e).createTextNode(a),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=dl(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[cn]=n}else Da(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else t=Kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Ke(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=dl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[cn]=n}else Da(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=Kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Di(n,n.updateQueue),Ke(n),null);case 4:return an(),e===null&&rc(n.stateNode.containerInfo),Ke(n),null;case 10:return zt(n.type),Ke(n),null;case 19:if(z(dn),a=n.memoizedState,a===null)return Ke(n),null;if(l=(n.flags&128)!==0,s=a.rendering,s===null)if(l)ps(a,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Si(e),s!==null){for(n.flags|=128,ps(a,!1),e=s.updateQueue,n.updateQueue=e,Di(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Nu(t,e),t=t.sibling;return G(dn,dn.current&1|2),Ce&&Mt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&rn()>Hi&&(n.flags|=128,l=!0,ps(a,!1),n.lanes=4194304)}else{if(!l)if(e=Si(s),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Di(n,e),ps(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ce)return Ke(n),null}else 2*rn()-a.renderingStartTime>Hi&&t!==536870912&&(n.flags|=128,l=!0,ps(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(e=a.last,e!==null?e.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rn(),e.sibling=null,t=dn.current,G(dn,l?t&1|2:t&1),Ce&&Mt(n,a.treeForkCount),e):(Ke(n),null);case 22:case 23:return $n(n),ro(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),t=n.updateQueue,t!==null&&Di(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&z(La),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),zt(mn),Ke(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function Mm(e,n){switch(Vr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(mn),an(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ka(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(c(340));Da()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Da()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(dn),null;case 4:return an(),null;case 10:return zt(n.type),null;case 22:case 23:return $n(n),ro(),e!==null&&z(La),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zt(mn),null;case 25:return null;default:return null}}function tf(e,n){switch(Vr(n),n.tag){case 3:zt(mn),an();break;case 26:case 27:case 5:Ka(n);break;case 4:an();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:z(dn);break;case 10:zt(n.type);break;case 22:case 23:$n(n),ro(),e!==null&&z(La);break;case 24:zt(mn)}}function ms(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var s=t.create,r=t.inst;a=s(),r.destroy=a}t=t.next}while(t!==l)}}catch(f){Be(n,n.return,f)}}function ra(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var r=a.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,l=n;var g=t,T=f;try{T()}catch(M){Be(l,g,M)}}}a=a.next}while(a!==s)}}catch(M){Be(n,n.return,M)}}function af(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Zu(n,t)}catch(a){Be(e,e.return,a)}}}function lf(e,n,t){t.props=Ga(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Be(e,n,a)}}function gs(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){Be(e,n,l)}}function St(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Be(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Be(e,n,l)}else t.current=null}function sf(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Be(e,e.return,l)}}function qo(e,n,t){try{var a=e.stateNode;Wm(a,e.type,t,n),a[_n]=n}catch(l){Be(e,e.return,l)}}function rf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Q));else if(a!==4&&(a===27&&pa(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Go(e,n,t),e=e.sibling;e!==null;)Go(e,n,t),e=e.sibling}function ji(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&pa(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}function of(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Rn(n,a,t),n[cn]=e,n[_n]=t}catch(s){Be(e,e.return,s)}}var Bt=!1,bn=!1,Yo=!1,cf=typeof WeakSet=="function"?WeakSet:Set,En=null;function Om(e,n){if(e=e.containerInfo,uc=tr,e=xu(e),jr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,f=-1,g=-1,T=0,M=0,L=e,A=null;n:for(;;){for(var R;L!==t||l!==0&&L.nodeType!==3||(f=r+l),L!==s||a!==0&&L.nodeType!==3||(g=r+a),L.nodeType===3&&(r+=L.nodeValue.length),(R=L.firstChild)!==null;)A=L,L=R;for(;;){if(L===e)break n;if(A===t&&++T===l&&(f=r),A===s&&++M===a&&(g=r),(R=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=R}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(dc={focusedElem:e,selectionRange:t},tr=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,l=s.memoizedProps,s=s.memoizedState,a=t.stateNode;try{var Z=Ga(t.type,l);e=a.getSnapshotBeforeUpdate(Z,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(t,t.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)pc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function uf(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t),a&4&&ms(5,t);break;case 1:if(qt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(r){Be(t,t.return,r)}else{var l=Ga(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Be(t,t.return,r)}}a&64&&af(t),a&512&&gs(t,t.return);break;case 3:if(qt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Zu(e,n)}catch(r){Be(t,t.return,r)}}break;case 27:n===null&&a&4&&of(t);case 26:case 5:qt(e,t),n===null&&a&4&&sf(t),a&512&&gs(t,t.return);break;case 12:qt(e,t);break;case 31:qt(e,t),a&4&&hf(e,t);break;case 13:qt(e,t),a&4&&pf(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Qm.bind(null,t),rg(e,t))));break;case 22:if(a=t.memoizedState!==null||Bt,!a){n=n!==null&&n.memoizedState!==null||bn,l=Bt;var s=bn;Bt=a,(bn=n)&&!s?Qt(e,t,(t.subtreeFlags&8772)!==0):qt(e,t),Bt=l,bn=s}break;case 30:break;default:qt(e,t)}}function df(e){var n=e.alternate;n!==null&&(e.alternate=null,df(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ql(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Qn=!1;function Ht(e,n,t){for(t=t.child;t!==null;)ff(e,n,t),t=t.sibling}function ff(e,n,t){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(ka,t)}catch{}switch(t.tag){case 26:bn||St(t,n),Ht(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:bn||St(t,n);var a=$e,l=Qn;pa(t.type)&&($e=t.stateNode,Qn=!1),Ht(e,n,t),Ts(t.stateNode),$e=a,Qn=l;break;case 5:bn||St(t,n);case 6:if(a=$e,l=Qn,$e=null,Ht(e,n,t),$e=a,Qn=l,$e!==null)if(Qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(t.stateNode)}catch(s){Be(t,n,s)}else try{$e.removeChild(t.stateNode)}catch(s){Be(t,n,s)}break;case 18:$e!==null&&(Qn?(e=$e,lh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ol(e)):lh($e,t.stateNode));break;case 4:a=$e,l=Qn,$e=t.stateNode.containerInfo,Qn=!0,Ht(e,n,t),$e=a,Qn=l;break;case 0:case 11:case 14:case 15:ra(2,t,n),bn||ra(4,t,n),Ht(e,n,t);break;case 1:bn||(St(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&lf(t,n,a)),Ht(e,n,t);break;case 21:Ht(e,n,t);break;case 22:bn=(a=bn)||t.memoizedState!==null,Ht(e,n,t),bn=a;break;default:Ht(e,n,t)}}function hf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(t){Be(n,n.return,t)}}}function pf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(t){Be(n,n.return,t)}}function zm(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cf),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cf),n;default:throw Error(c(435,e.tag))}}function Ui(e,n){var t=zm(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=Gm.bind(null,e,a);a.then(l,l)}})}function Gn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],s=e,r=n,f=r;e:for(;f!==null;){switch(f.tag){case 27:if(pa(f.type)){$e=f.stateNode,Qn=!1;break e}break;case 5:$e=f.stateNode,Qn=!1;break e;case 3:case 4:$e=f.stateNode.containerInfo,Qn=!0;break e}f=f.return}if($e===null)throw Error(c(160));ff(s,r,l),$e=null,Qn=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mf(n,e),n=n.sibling}var ft=null;function mf(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Yn(e),a&4&&(ra(3,e,e.return),ms(3,e),ra(5,e,e.return));break;case 1:Gn(n,e),Yn(e),a&512&&(bn||t===null||St(t,t.return)),a&64&&Bt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=ft;if(Gn(n,e),Yn(e),a&512&&(bn||t===null||St(t,t.return)),a&4){var s=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ca]||s[cn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),Rn(s,a,t),s[cn]=e,hn(s),a=s;break e;case"link":var r=mh("link","href",l).get(a+(t.href||""));if(r){for(var f=0;f<r.length;f++)if(s=r[f],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(f,1);break n}}s=l.createElement(a),Rn(s,a,t),l.head.appendChild(s);break;case"meta":if(r=mh("meta","content",l).get(a+(t.content||""))){for(f=0;f<r.length;f++)if(s=r[f],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(f,1);break n}}s=l.createElement(a),Rn(s,a,t),l.head.appendChild(s);break;default:throw Error(c(468,a))}s[cn]=e,hn(s),a=s}e.stateNode=a}else gh(l,e.type,e.stateNode);else e.stateNode=ph(l,a,e.memoizedProps);else s!==a?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,a===null?gh(l,e.type,e.stateNode):ph(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qo(e,e.memoizedProps,t.memoizedProps)}break;case 27:Gn(n,e),Yn(e),a&512&&(bn||t===null||St(t,t.return)),t!==null&&a&4&&qo(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Gn(n,e),Yn(e),a&512&&(bn||t===null||St(t,t.return)),e.flags&32){l=e.stateNode;try{le(l,"")}catch(Z){Be(e,e.return,Z)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qo(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Yo=!0);break;case 6:if(Gn(n,e),Yn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(Z){Be(e,e.return,Z)}}break;case 3:if(Fi=null,l=ft,ft=Ji(n.containerInfo),Gn(n,e),ft=l,Yn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ol(n.containerInfo)}catch(Z){Be(e,e.return,Z)}Yo&&(Yo=!1,gf(e));break;case 4:a=ft,ft=Ji(e.stateNode.containerInfo),Gn(n,e),Yn(e),ft=a;break;case 12:Gn(n,e),Yn(e);break;case 31:Gn(n,e),Yn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 13:Gn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Bi=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 22:l=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,T=Bt,M=bn;if(Bt=T||l,bn=M||g,Gn(n,e),bn=M,Bt=T,Yn(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||g||Bt||bn||Ya(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(s=g.stateNode,l)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=g.stateNode;var L=g.memoizedProps.style,A=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Z){Be(g,g.return,Z)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(Z){Be(g,g.return,Z)}}}else if(n.tag===18){if(t===null){g=n;try{var R=g.stateNode;l?sh(R,!0):sh(g.stateNode,!1)}catch(Z){Be(g,g.return,Z)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ui(e,t))));break;case 19:Gn(n,e),Yn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 30:break;case 21:break;default:Gn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(rf(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var l=t.stateNode,s=Qo(e);ji(e,s,l);break;case 5:var r=t.stateNode;t.flags&32&&(le(r,""),t.flags&=-33);var f=Qo(e);ji(e,f,r);break;case 3:case 4:var g=t.stateNode.containerInfo,T=Qo(e);Go(e,T,g);break;default:throw Error(c(161))}}catch(M){Be(e,e.return,M)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function qt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)uf(e,n.alternate,n),n=n.sibling}function Ya(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ra(4,n,n.return),Ya(n);break;case 1:St(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&lf(n,n.return,t),Ya(n);break;case 27:Ts(n.stateNode);case 26:case 5:St(n,n.return),Ya(n);break;case 22:n.memoizedState===null&&Ya(n);break;case 30:Ya(n);break;default:Ya(n)}e=e.sibling}}function Qt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,s=n,r=s.flags;switch(s.tag){case 0:case 11:case 15:Qt(l,s,t),ms(4,s);break;case 1:if(Qt(l,s,t),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){Be(a,a.return,T)}if(a=s,l=a.updateQueue,l!==null){var f=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Vu(g[l],f)}catch(T){Be(a,a.return,T)}}t&&r&64&&af(s),gs(s,s.return);break;case 27:of(s);case 26:case 5:Qt(l,s,t),t&&a===null&&r&4&&sf(s),gs(s,s.return);break;case 12:Qt(l,s,t);break;case 31:Qt(l,s,t),t&&r&4&&hf(l,s);break;case 13:Qt(l,s,t),t&&r&4&&pf(l,s);break;case 22:s.memoizedState===null&&Qt(l,s,t),gs(s,s.return);break;case 30:break;default:Qt(l,s,t)}n=n.sibling}}function Io(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ts(t))}function Xo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ts(e))}function ht(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yf(e,n,t,a),n=n.sibling}function yf(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ht(e,n,t,a),l&2048&&ms(9,n);break;case 1:ht(e,n,t,a);break;case 3:ht(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ts(e)));break;case 12:if(l&2048){ht(e,n,t,a),e=n.stateNode;try{var s=n.memoizedProps,r=s.id,f=s.onPostCommit;typeof f=="function"&&f(r,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Be(n,n.return,g)}}else ht(e,n,t,a);break;case 31:ht(e,n,t,a);break;case 13:ht(e,n,t,a);break;case 23:break;case 22:s=n.stateNode,r=n.alternate,n.memoizedState!==null?s._visibility&2?ht(e,n,t,a):ys(e,n):s._visibility&2?ht(e,n,t,a):(s._visibility|=2,Sl(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Io(r,n);break;case 24:ht(e,n,t,a),l&2048&&Xo(n.alternate,n);break;default:ht(e,n,t,a)}}function Sl(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,r=n,f=t,g=a,T=r.flags;switch(r.tag){case 0:case 11:case 15:Sl(s,r,f,g,l),ms(8,r);break;case 23:break;case 22:var M=r.stateNode;r.memoizedState!==null?M._visibility&2?Sl(s,r,f,g,l):ys(s,r):(M._visibility|=2,Sl(s,r,f,g,l)),l&&T&2048&&Io(r.alternate,r);break;case 24:Sl(s,r,f,g,l),l&&T&2048&&Xo(r.alternate,r);break;default:Sl(s,r,f,g,l)}n=n.sibling}}function ys(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:ys(t,a),l&2048&&Io(a.alternate,a);break;case 24:ys(t,a),l&2048&&Xo(a.alternate,a);break;default:ys(t,a)}n=n.sibling}}var bs=8192;function El(e,n,t){if(e.subtreeFlags&bs)for(e=e.child;e!==null;)bf(e,n,t),e=e.sibling}function bf(e,n,t){switch(e.tag){case 26:El(e,n,t),e.flags&bs&&e.memoizedState!==null&&vg(t,ft,e.memoizedState,e.memoizedProps);break;case 5:El(e,n,t);break;case 3:case 4:var a=ft;ft=Ji(e.stateNode.containerInfo),El(e,n,t),ft=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,El(e,n,t),bs=a):El(e,n,t));break;default:El(e,n,t)}}function vf(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];En=a,Sf(a,e)}vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xf(e),e=e.sibling}function xf(e){switch(e.tag){case 0:case 11:case 15:vs(e),e.flags&2048&&ra(9,e,e.return);break;case 3:vs(e);break;case 12:vs(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Li(e)):vs(e);break;default:vs(e)}}function Li(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];En=a,Sf(a,e)}vf(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ra(8,n,n.return),Li(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Li(n));break;default:Li(n)}e=e.sibling}}function Sf(e,n){for(;En!==null;){var t=En;switch(t.tag){case 0:case 11:case 15:ra(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ts(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,En=a;else e:for(t=e;En!==null;){a=En;var l=a.sibling,s=a.return;if(df(a),a===t){En=null;break e}if(l!==null){l.return=s,En=l;break e}En=s}}}var Dm={getCacheForType:function(e){var n=Cn(mn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Cn(mn).controller.signal}},jm=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ve=null,Ee=0,Le=0,Fn=null,oa=!1,kl=!1,Vo=!1,Gt=0,sn=0,ca=0,Ia=0,Zo=0,Wn=0,wl=0,xs=null,In=null,Ko=!1,Bi=0,Ef=0,Hi=1/0,qi=null,ua=null,xn=0,da=null,Tl=null,Yt=0,Po=0,Jo=null,kf=null,Ss=0,$o=null;function et(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:N.T!==null?ac():$a()}function wf(){if(Wn===0)if((Ee&536870912)===0||Ce){var e=Ja;Ja<<=1,(Ja&3932160)===0&&(Ja=262144),Wn=e}else Wn=536870912;return e=Jn.current,e!==null&&(e.flags|=32),Wn}function Xn(e,n,t){(e===Ye&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),fa(e,Ee,Wn,!1)),Ge(e,t),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(Ia|=t),sn===4&&fa(e,Ee,Wn,!1)),Et(e))}function Tf(e,n,t){if((Oe&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||j(e,n),l=a?Bm(e,n):Wo(e,n,!0),s=a;do{if(l===0){kl&&!a&&fa(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!Um(t)){l=Wo(e,n,!1),s=!1;continue}if(l===2){if(s=n,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){n=r;e:{var f=e;l=xs;var g=f.current.memoizedState.isDehydrated;if(g&&(Cl(f,r).flags|=256),r=Wo(f,r,!1),r!==2){if(Vo&&!g){f.errorRecoveryDisabledLanes|=s,Ia|=s,l=4;break e}s=In,In=l,s!==null&&(In===null?In=s:In.push.apply(In,s))}l=r}if(s=!1,l!==2)continue}}if(l===1){Cl(e,0),fa(e,n,0,!0);break}e:{switch(a=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:fa(a,n,Wn,!oa);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(l=Bi+300-rn(),10<l)){if(fa(a,n,Wn,!oa),y(a,0,!0)!==0)break e;Yt=n,a.timeoutHandle=th(Cf.bind(null,a,t,In,qi,Ko,n,Wn,Ia,wl,oa,s,"Throttled",-0,0),l);break e}Cf(a,t,In,qi,Ko,n,Wn,Ia,wl,oa,s,null,-0,0)}}break}while(!0);Et(e)}function Cf(e,n,t,a,l,s,r,f,g,T,M,L,A,R){if(e.timeoutHandle=-1,L=n.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Q},bf(n,s,L);var Z=(s&62914560)===s?Bi-rn():(s&4194048)===s?Ef-rn():0;if(Z=xg(L,Z),Z!==null){Yt=s,e.cancelPendingCommit=Z(Df.bind(null,e,n,s,t,a,l,r,f,g,M,L,null,A,R)),fa(e,s,r,!T);return}}Df(e,n,s,t,a,l,r,f,g)}function Um(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],s=l.getSnapshot;l=l.value;try{if(!Kn(s(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fa(e,n,t,a){n&=~Zo,n&=~Ia,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var s=31-zn(l),r=1<<s;a[s]=-1,l&=~r}t!==0&&X(e,t,n)}function Qi(){return(Oe&6)===0?(Es(0),!1):!0}function Fo(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,Ot=ja=null,po(e),gl=null,ls=0,e=ve;for(;e!==null;)tf(e.alternate,e),e=e.return;ve=null}}function Cl(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,tg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Yt=0,Fo(),Ye=e,ve=t=_t(e.current,null),Ee=n,Le=0,Fn=null,oa=!1,kl=j(e,n),Vo=!1,wl=Wn=Zo=Ia=ca=sn=0,In=xs=null,Ko=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-zn(a),s=1<<l;n|=e[l],a&=~s}return Gt=n,oi(),t}function Af(e,n){pe=null,N.H=fs,n===ml||n===gi?(n=Gu(),Le=3):n===no?(n=Gu(),Le=4):Le=n===_o?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Fn=n,ve===null&&(sn=1,_i(e,lt(n,e.current)))}function Rf(){var e=Jn.current;return e===null?!0:(Ee&4194048)===Ee?ot===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===ot:!1}function Nf(){var e=N.H;return N.H=fs,e===null?fs:e}function _f(){var e=N.A;return N.A=Dm,e}function Gi(){sn=4,oa||(Ee&4194048)!==Ee&&Jn.current!==null||(kl=!0),(ca&134217727)===0&&(Ia&134217727)===0||Ye===null||fa(Ye,Ee,Wn,!1)}function Wo(e,n,t){var a=Oe;Oe|=2;var l=Nf(),s=_f();(Ye!==e||Ee!==n)&&(qi=null,Cl(e,n)),n=!1;var r=sn;e:do try{if(Le!==0&&ve!==null){var f=ve,g=Fn;switch(Le){case 8:Fo(),r=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var T=Le;if(Le=0,Fn=null,Al(e,f,g,T),t&&kl){r=0;break e}break;default:T=Le,Le=0,Fn=null,Al(e,f,g,T)}}Lm(),r=sn;break}catch(M){Af(e,M)}while(!0);return n&&e.shellSuspendCounter++,Ot=ja=null,Oe=a,N.H=l,N.A=s,ve===null&&(Ye=null,Ee=0,oi()),r}function Lm(){for(;ve!==null;)Mf(ve)}function Bm(e,n){var t=Oe;Oe|=2;var a=Nf(),l=_f();Ye!==e||Ee!==n?(qi=null,Hi=rn()+500,Cl(e,n)):kl=j(e,n);e:do try{if(Le!==0&&ve!==null){n=ve;var s=Fn;n:switch(Le){case 1:Le=0,Fn=null,Al(e,n,s,1);break;case 2:case 9:if(qu(s)){Le=0,Fn=null,Of(n);break}n=function(){Le!==2&&Le!==9||Ye!==e||(Le=7),Et(e)},s.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:qu(s)?(Le=0,Fn=null,Of(n)):(Le=0,Fn=null,Al(e,n,s,7));break;case 5:var r=null;switch(ve.tag){case 26:r=ve.memoizedState;case 5:case 27:var f=ve;if(r?yh(r):f.stateNode.complete){Le=0,Fn=null;var g=f.sibling;if(g!==null)ve=g;else{var T=f.return;T!==null?(ve=T,Yi(T)):ve=null}break n}}Le=0,Fn=null,Al(e,n,s,5);break;case 6:Le=0,Fn=null,Al(e,n,s,6);break;case 8:Fo(),sn=6;break e;default:throw Error(c(462))}}Hm();break}catch(M){Af(e,M)}while(!0);return Ot=ja=null,N.H=a,N.A=l,Oe=t,ve!==null?0:(Ye=null,Ee=0,oi(),sn)}function Hm(){for(;ve!==null&&!xr();)Mf(ve)}function Mf(e){var n=ef(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,n===null?Yi(e):ve=n}function Of(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Kd(t,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Kd(t,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:po(n);default:tf(t,n),n=ve=Nu(n,Gt),n=ef(t,n,Gt)}e.memoizedProps=e.pendingProps,n===null?Yi(e):ve=n}function Al(e,n,t,a){Ot=ja=null,po(n),gl=null,ls=0;var l=n.return;try{if(Am(e,l,n,t,Ee)){sn=1,_i(e,lt(t,e.current)),ve=null;return}}catch(s){if(l!==null)throw ve=l,s;sn=1,_i(e,lt(t,e.current)),ve=null;return}n.flags&32768?(Ce||a===1?e=!0:kl||(Ee&536870912)!==0?e=!1:(oa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Jn.current,a!==null&&a.tag===13&&(a.flags|=16384))),zf(n,e)):Yi(n)}function Yi(e){var n=e;do{if((n.flags&32768)!==0){zf(n,oa);return}e=n.return;var t=_m(n.alternate,n,Gt);if(t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);sn===0&&(sn=5)}function zf(e,n){do{var t=Mm(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);sn=6,ve=null}function Df(e,n,t,a,l,s,r,f,g){e.cancelPendingCommit=null;do Ii();while(xn!==0);if((Oe&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(s=n.lanes|n.childLanes,s|=qr,$(e,t,s,r,f,g),e===Ye&&(ve=Ye=null,Ee=0),Tl=n,da=e,Yt=t,Po=s,Jo=l,kf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ym(Ea,function(){return Hf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,l=O.p,O.p=2,r=Oe,Oe|=4;try{Om(e,n,t)}finally{Oe=r,O.p=l,N.T=a}}xn=1,jf(),Uf(),Lf()}}function jf(){if(xn===1){xn=0;var e=da,n=Tl,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var a=O.p;O.p=2;var l=Oe;Oe|=4;try{mf(n,e);var s=dc,r=xu(e.containerInfo),f=s.focusedElem,g=s.selectionRange;if(r!==f&&f&&f.ownerDocument&&vu(f.ownerDocument.documentElement,f)){if(g!==null&&jr(f)){var T=g.start,M=g.end;if(M===void 0&&(M=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(M,f.value.length);else{var L=f.ownerDocument||document,A=L&&L.defaultView||window;if(A.getSelection){var R=A.getSelection(),Z=f.textContent.length,ae=Math.min(g.start,Z),Qe=g.end===void 0?ae:Math.min(g.end,Z);!R.extend&&ae>Qe&&(r=Qe,Qe=ae,ae=r);var E=bu(f,ae),S=bu(f,Qe);if(E&&S&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var k=L.createRange();k.setStart(E.node,E.offset),R.removeAllRanges(),ae>Qe?(R.addRange(k),R.extend(S.node,S.offset)):(k.setEnd(S.node,S.offset),R.addRange(k))}}}}for(L=[],R=f;R=R.parentNode;)R.nodeType===1&&L.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var U=L[f];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}tr=!!uc,dc=uc=null}finally{Oe=l,O.p=a,N.T=t}}e.current=n,xn=2}}function Uf(){if(xn===2){xn=0;var e=da,n=Tl,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var a=O.p;O.p=2;var l=Oe;Oe|=4;try{uf(e,n.alternate,n)}finally{Oe=l,O.p=a,N.T=t}}xn=3}}function Lf(){if(xn===4||xn===3){xn=0,Is();var e=da,n=Tl,t=Yt,a=kf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Tl=da=null,Bf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ua=null),Tt(t),n=n.stateNode,Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(ka,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=N.T,l=O.p,O.p=2,N.T=null;try{for(var s=e.onRecoverableError,r=0;r<a.length;r++){var f=a[r];s(f.value,{componentStack:f.stack})}}finally{N.T=n,O.p=l}}(Yt&3)!==0&&Ii(),Et(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===$o?Ss++:(Ss=0,$o=e):Ss=0,Es(0)}}function Bf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ts(n)))}function Ii(){return jf(),Uf(),Lf(),Hf()}function Hf(){if(xn!==5)return!1;var e=da,n=Po;Po=0;var t=Tt(Yt),a=N.T,l=O.p;try{O.p=32>t?32:t,N.T=null,t=Jo,Jo=null;var s=da,r=Yt;if(xn=0,Tl=da=null,Yt=0,(Oe&6)!==0)throw Error(c(331));var f=Oe;if(Oe|=4,xf(s.current),yf(s,s.current,r,t),Oe=f,Es(0,!1),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(ka,s)}catch{}return!0}finally{O.p=l,N.T=a,Bf(e,n)}}function qf(e,n,t){n=lt(t,n),n=No(e.stateNode,n,2),e=la(e,n,2),e!==null&&(Ge(e,2),Et(e))}function Be(e,n,t){if(e.tag===3)qf(e,e,t);else for(;n!==null;){if(n.tag===3){qf(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))){e=lt(t,e),t=qd(2),a=la(n,t,2),a!==null&&(Qd(t,a,n,e),Ge(a,2),Et(a));break}}n=n.return}}function ec(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new jm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(Vo=!0,l.add(t),e=qm.bind(null,e,n,t),n.then(e,e))}function qm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ye===e&&(Ee&t)===t&&(sn===4||sn===3&&(Ee&62914560)===Ee&&300>rn()-Bi?(Oe&2)===0&&Cl(e,0):Zo|=t,wl===Ee&&(wl=0)),Et(e)}function Qf(e,n){n===0&&(n=oe()),e=Oa(e,n),e!==null&&(Ge(e,n),Et(e))}function Qm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qf(e,t)}function Gm(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),Qf(e,t)}function Ym(e,n){return Pa(e,n)}var Xi=null,Rl=null,nc=!1,Vi=!1,tc=!1,ha=0;function Et(e){e!==Rl&&e.next===null&&(Rl===null?Xi=Rl=e:Rl=Rl.next=e),Vi=!0,nc||(nc=!0,Xm())}function Es(e,n){if(!tc&&Vi){tc=!0;do for(var t=!1,a=Xi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var r=a.suspendedLanes,f=a.pingedLanes;s=(1<<31-zn(42|e)+1)-1,s&=l&~(r&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Xf(a,s))}else s=Ee,s=y(a,a===Ye?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||j(a,s)||(t=!0,Xf(a,s));a=a.next}while(t);tc=!1}}function Im(){Gf()}function Gf(){Vi=nc=!1;var e=0;ha!==0&&ng()&&(e=ha);for(var n=rn(),t=null,a=Xi;a!==null;){var l=a.next,s=Yf(a,n);s===0?(a.next=null,t===null?Xi=l:t.next=l,l===null&&(Rl=t)):(t=a,(e!==0||(s&3)!==0)&&(Vi=!0)),a=l}xn!==0&&xn!==5||Es(e),ha!==0&&(ha=0)}function Yf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-zn(s),f=1<<r,g=l[r];g===-1?((f&t)===0||(f&a)!==0)&&(l[r]=Y(f,n)):g<=n&&(e.expiredLanes|=f),s&=~f}if(n=Ye,t=Ee,t=y(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ll(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||j(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Ll(a),Tt(t)){case 2:case 8:t=Sa;break;case 32:t=Ea;break;case 268435456:t=Vs;break;default:t=Ea}return a=If.bind(null,e),t=Pa(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Ll(a),e.callbackPriority=2,e.callbackNode=null,2}function If(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ii()&&e.callbackNode!==t)return null;var a=Ee;return a=y(e,e===Ye?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tf(e,a,n),Yf(e,rn()),e.callbackNode!=null&&e.callbackNode===t?If.bind(null,e):null)}function Xf(e,n){if(Ii())return null;Tf(e,n,!0)}function Xm(){ag(function(){(Oe&6)!==0?Pa(wt,Im):Gf()})}function ac(){if(ha===0){var e=hl;e===0&&(e=wa,wa<<=1,(wa&261888)===0&&(wa=256)),ha=e}return ha}function Vf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jt(""+e)}function Zf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Vm(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var s=Vf((l[_n]||null).action),r=a.submitter;r&&(n=(n=r[_n]||null)?Vf(n.formAction):r.getAttribute("formAction"),n!==null&&(s=n,r=null));var f=new li("action","action",null,a,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ha!==0){var g=r?Zf(l,r):new FormData(l);ko(t,{pending:!0,data:g,method:l.method,action:s},null,g)}}else typeof s=="function"&&(f.preventDefault(),g=r?Zf(l,r):new FormData(l),ko(t,{pending:!0,data:g,method:l.method,action:s},s,g))},currentTarget:l}]})}}for(var lc=0;lc<Hr.length;lc++){var sc=Hr[lc],Zm=sc.toLowerCase(),Km=sc[0].toUpperCase()+sc.slice(1);dt(Zm,"on"+Km)}dt(ku,"onAnimationEnd"),dt(wu,"onAnimationIteration"),dt(Tu,"onAnimationStart"),dt("dblclick","onDoubleClick"),dt("focusin","onFocus"),dt("focusout","onBlur"),dt(um,"onTransitionRun"),dt(dm,"onTransitionStart"),dt(fm,"onTransitionCancel"),dt(Cu,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks));function Kf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var r=a.length-1;0<=r;r--){var f=a[r],g=f.instance,T=f.currentTarget;if(f=f.listener,g!==s&&l.isPropagationStopped())break e;s=f,l.currentTarget=T;try{s(l)}catch(M){ri(M)}l.currentTarget=null,s=g}else for(r=0;r<a.length;r++){if(f=a[r],g=f.instance,T=f.currentTarget,f=f.listener,g!==s&&l.isPropagationStopped())break e;s=f,l.currentTarget=T;try{s(l)}catch(M){ri(M)}l.currentTarget=null,s=g}}}}function xe(e,n){var t=n[Hl];t===void 0&&(t=n[Hl]=new Set);var a=e+"__bubble";t.has(a)||(Pf(n,e,2,!1),t.add(a))}function ic(e,n,t){var a=0;n&&(a|=4),Pf(t,e,a,n)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function rc(e){if(!e[Zi]){e[Zi]=!0,Js.forEach(function(t){t!=="selectionchange"&&(Pm.has(t)||ic(t,!1,e),ic(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zi]||(n[Zi]=!0,ic("selectionchange",!1,n))}}function Pf(e,n,t,a){switch(wh(n)){case 2:var l=kg;break;case 8:l=wg;break;default:l=Ec}t=l.bind(null,n,t,e),l=void 0,!Cr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function oc(e,n,t,a,l){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var f=a.stateNode.containerInfo;if(f===l)break;if(r===4)for(r=a.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;f!==null;){if(r=Dn(f),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){a=s=r;continue e}f=f.parentNode}}a=a.return}ei(function(){var T=s,M=fe(t),L=[];e:{var A=Au.get(e);if(A!==void 0){var R=li,Z=e;switch(e){case"keypress":if(ti(t)===0)break e;case"keydown":case"keyup":R=Gp;break;case"focusin":Z="focus",R=_r;break;case"focusout":Z="blur",R=_r;break;case"beforeblur":case"afterblur":R=_r;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Xp;break;case ku:case wu:case Tu:R=zp;break;case Cu:R=Zp;break;case"scroll":case"scrollend":R=Rp;break;case"wheel":R=Pp;break;case"copy":case"cut":case"paste":R=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=lu;break;case"toggle":case"beforetoggle":R=$p}var ae=(n&4)!==0,Qe=!ae&&(e==="scroll"||e==="scrollend"),E=ae?A!==null?A+"Capture":null:A;ae=[];for(var S=T,k;S!==null;){var U=S;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||E===null||(U=Xl(S,E),U!=null&&ae.push(ws(S,U,k))),Qe)break;S=S.return}0<ae.length&&(A=new R(A,Z,null,t,M),L.push({event:A,listeners:ae}))}}if((n&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&t!==F&&(Z=t.relatedTarget||t.fromElement)&&(Dn(Z)||Z[Vt]))break e;if((R||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,R?(Z=t.relatedTarget||t.toElement,R=T,Z=Z?Dn(Z):null,Z!==null&&(Qe=m(Z),ae=Z.tag,Z!==Qe||ae!==5&&ae!==27&&ae!==6)&&(Z=null)):(R=null,Z=T),R!==Z)){if(ae=tu,U="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=lu,U="onPointerLeave",E="onPointerEnter",S="pointer"),Qe=R==null?A:Zt(R),k=Z==null?A:Zt(Z),A=new ae(U,S+"leave",R,t,M),A.target=Qe,A.relatedTarget=k,U=null,Dn(M)===T&&(ae=new ae(E,S+"enter",Z,t,M),ae.target=k,ae.relatedTarget=Qe,U=ae),Qe=U,R&&Z)n:{for(ae=Jm,E=R,S=Z,k=0,U=E;U;U=ae(U))k++;U=0;for(var ne=S;ne;ne=ae(ne))U++;for(;0<k-U;)E=ae(E),k--;for(;0<U-k;)S=ae(S),U--;for(;k--;){if(E===S||S!==null&&E===S.alternate){ae=E;break n}E=ae(E),S=ae(S)}ae=null}else ae=null;R!==null&&Jf(L,A,R,ae,!1),Z!==null&&Qe!==null&&Jf(L,Qe,Z,ae,!0)}}e:{if(A=T?Zt(T):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var Ne=fu;else if(uu(A))if(hu)Ne=rm;else{Ne=sm;var W=lm}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Pt(T.elementType)&&(Ne=fu):Ne=im;if(Ne&&(Ne=Ne(e,T))){du(L,Ne,t,M);break e}W&&W(e,A,T),e==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&tl(A,"number",A.value)}switch(W=T?Zt(T):window,e){case"focusin":(uu(W)||W.contentEditable==="true")&&(sl=W,Ur=T,Wl=null);break;case"focusout":Wl=Ur=sl=null;break;case"mousedown":Lr=!0;break;case"contextmenu":case"mouseup":case"dragend":Lr=!1,Su(L,t,M);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Su(L,t,M)}var me;if(Or)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else ll?ou(e,t)&&(ke="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ke="onCompositionStart");ke&&(su&&t.locale!=="ko"&&(ll||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&ll&&(me=eu()):($t=M,Ar="value"in $t?$t.value:$t.textContent,ll=!0)),W=Ki(T,ke),0<W.length&&(ke=new au(ke,e,null,t,M),L.push({event:ke,listeners:W}),me?ke.data=me:(me=cu(t),me!==null&&(ke.data=me)))),(me=Wp?em(e,t):nm(e,t))&&(ke=Ki(T,"onBeforeInput"),0<ke.length&&(W=new au("onBeforeInput","beforeinput",null,t,M),L.push({event:W,listeners:ke}),W.data=me)),Vm(L,e,T,t,M)}Kf(L,n)})}function ws(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ki(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Xl(e,t),l!=null&&a.unshift(ws(e,l,s)),l=Xl(e,n),l!=null&&a.push(ws(e,l,s))),e.tag===3)return a;e=e.return}return[]}function Jm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,n,t,a,l){for(var s=n._reactName,r=[];t!==null&&t!==a;){var f=t,g=f.alternate,T=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||T===null||(g=T,l?(T=Xl(t,s),T!=null&&r.unshift(ws(t,T,g))):l||(T=Xl(t,s),T!=null&&r.push(ws(t,T,g)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var $m=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace($m,`
`).replace(Fm,"")}function Ff(e,n){return n=$f(n),$f(e)===n}function qe(e,n,t,a,l,s){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||le(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&le(e,""+a);break;case"className":Vn(e,"class",a);break;case"tabIndex":Vn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vn(e,t,a);break;case"style":Ue(e,a,s);break;case"data":if(n!=="object"){Vn(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Jt(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&qe(e,n,"name",l.name,l,null),qe(e,n,"formEncType",l.formEncType,l,null),qe(e,n,"formMethod",l.formMethod,l,null),qe(e,n,"formTarget",l.formTarget,l,null)):(qe(e,n,"encType",l.encType,l,null),qe(e,n,"method",l.method,l,null),qe(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Jt(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Q);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Jt(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Mn(e,"popover",a);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Rt.get(t)||t,Mn(e,t,a))}}function cc(e,n,t,a,l,s){switch(t){case"style":Ue(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?le(e,a):(typeof a=="number"||typeof a=="bigint")&&le(e,""+a);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Q);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Aa.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),s=e[_n]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Mn(e,t,a)}}}function Rn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var a=!1,l=!1,s;for(s in t)if(t.hasOwnProperty(s)){var r=t[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:qe(e,n,s,r,t,null)}}l&&qe(e,n,"srcSet",t.srcSet,t,null),a&&qe(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var f=s=r=l=null,g=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var M=t[a];if(M!=null)switch(a){case"name":l=M;break;case"type":r=M;break;case"checked":g=M;break;case"defaultChecked":T=M;break;case"value":s=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,n));break;default:qe(e,n,a,M,t,null)}}Ra(e,s,f,g,T,r,l,!1);return;case"select":xe("invalid",e),a=r=s=null;for(l in t)if(t.hasOwnProperty(l)&&(f=t[l],f!=null))switch(l){case"value":s=f;break;case"defaultValue":r=f;break;case"multiple":a=f;default:qe(e,n,l,f,t,null)}n=s,t=r,e.multiple=!!a,n!=null?wn(e,!!a,n,!1):t!=null&&wn(e,!!a,t,!0);return;case"textarea":xe("invalid",e),s=l=a=null;for(r in t)if(t.hasOwnProperty(r)&&(f=t[r],f!=null))switch(r){case"value":a=f;break;case"defaultValue":l=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:qe(e,n,r,f,t,null)}al(e,a,l,s);return;case"option":for(g in t)t.hasOwnProperty(g)&&(a=t[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":qe(e,n,g,a,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(a=0;a<ks.length;a++)xe(ks[a],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:qe(e,n,T,a,t,null)}return;default:if(Pt(n)){for(M in t)t.hasOwnProperty(M)&&(a=t[M],a!==void 0&&cc(e,n,M,a,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null&&qe(e,n,f,a,t,null))}function Wm(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,r=null,f=null,g=null,T=null,M=null;for(R in t){var L=t[R];if(t.hasOwnProperty(R)&&L!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=L;default:a.hasOwnProperty(R)||qe(e,n,R,null,a,L)}}for(var A in a){var R=a[A];if(L=t[A],a.hasOwnProperty(A)&&(R!=null||L!=null))switch(A){case"type":s=R;break;case"name":l=R;break;case"checked":T=R;break;case"defaultChecked":M=R;break;case"value":r=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,n));break;default:R!==L&&qe(e,n,A,R,a,L)}}Gl(e,r,f,g,T,M,s,l);return;case"select":R=r=f=A=null;for(s in t)if(g=t[s],t.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":R=g;default:a.hasOwnProperty(s)||qe(e,n,s,null,a,g)}for(l in a)if(s=a[l],g=t[l],a.hasOwnProperty(l)&&(s!=null||g!=null))switch(l){case"value":A=s;break;case"defaultValue":f=s;break;case"multiple":r=s;default:s!==g&&qe(e,n,l,s,a,g)}n=f,t=r,a=R,A!=null?wn(e,!!t,A,!1):!!a!=!!t&&(n!=null?wn(e,!!t,n,!0):wn(e,!!t,t?[]:"",!1));return;case"textarea":R=A=null;for(f in t)if(l=t[f],t.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:qe(e,n,f,null,a,l)}for(r in a)if(l=a[r],s=t[r],a.hasOwnProperty(r)&&(l!=null||s!=null))switch(r){case"value":A=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&qe(e,n,r,l,a,s)}Fs(e,A,R);return;case"option":for(var Z in t)A=t[Z],t.hasOwnProperty(Z)&&A!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:qe(e,n,Z,null,a,A));for(g in a)A=a[g],R=t[g],a.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null)&&(g==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":qe(e,n,g,A,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in t)A=t[ae],t.hasOwnProperty(ae)&&A!=null&&!a.hasOwnProperty(ae)&&qe(e,n,ae,null,a,A);for(T in a)if(A=a[T],R=t[T],a.hasOwnProperty(T)&&A!==R&&(A!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:qe(e,n,T,A,a,R)}return;default:if(Pt(n)){for(var Qe in t)A=t[Qe],t.hasOwnProperty(Qe)&&A!==void 0&&!a.hasOwnProperty(Qe)&&cc(e,n,Qe,void 0,a,A);for(M in a)A=a[M],R=t[M],!a.hasOwnProperty(M)||A===R||A===void 0&&R===void 0||cc(e,n,M,A,a,R);return}}for(var E in t)A=t[E],t.hasOwnProperty(E)&&A!=null&&!a.hasOwnProperty(E)&&qe(e,n,E,null,a,A);for(L in a)A=a[L],R=t[L],!a.hasOwnProperty(L)||A===R||A==null&&R==null||qe(e,n,L,A,a,R)}function Wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],s=l.transferSize,r=l.initiatorType,f=l.duration;if(s&&f&&Wf(r)){for(r=0,f=l.responseEnd,a+=1;a<t.length;a++){var g=t[a],T=g.startTime;if(T>f)break;var M=g.transferSize,L=g.initiatorType;M&&Wf(L)&&(g=g.responseEnd,r+=M*(g<f?1:(f-T)/(g-T)))}if(--a,n+=8*(s+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,dc=null;function Pi(e){return e.nodeType===9?e:e.ownerDocument}function eh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function fc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hc=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===hc?!1:(hc=e,!0):(hc=null,!1)}var th=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(lg)}:th;function lg(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function lh(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Ol(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Ts(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ts(t);for(var s=t.firstChild;s;){var r=s.nextSibling,f=s.nodeName;s[Ca]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=r}}else t==="body"&&Ts(e.ownerDocument.body);t=l}while(t);Ol(n)}function sh(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function pc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":pc(t),ql(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function sg(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ct(e.nextSibling),e===null)break}return null}function ig(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ct(e.nextSibling),e===null))return null;return e}function ih(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ct(e.nextSibling),e===null))return null;return e}function mc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var yc=null;function rh(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return ct(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function oh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function ch(e,n,t){switch(n=Pi(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ts(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ql(e)}var ut=new Map,uh=new Set;function Ji(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=O.d;O.d={f:og,r:cg,D:ug,C:dg,L:fg,m:hg,X:mg,S:pg,M:gg};function og(){var e=It.f(),n=Qi();return e||n}function cg(e){var n=Ct(e);n!==null&&n.tag===5&&n.type==="form"?Cd(n):It.r(e)}var Nl=typeof document>"u"?null:document;function dh(e,n,t){var a=Nl;if(a&&typeof n=="string"&&n){var l=Hn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),uh.has(l)||(uh.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Rn(n,"link",e),hn(n),a.head.appendChild(n)))}}function ug(e){It.D(e),dh("dns-prefetch",e,null)}function dg(e,n){It.C(e,n),dh("preconnect",e,n)}function fg(e,n,t){It.L(e,n,t);var a=Nl;if(a&&e&&n){var l='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Hn(t.imageSizes)+'"]')):l+='[href="'+Hn(e)+'"]';var s=l;switch(n){case"style":s=_l(e);break;case"script":s=Ml(e)}ut.has(s)||(e=D({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),ut.set(s,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Cs(s))||n==="script"&&a.querySelector(As(s))||(n=a.createElement("link"),Rn(n,"link",e),hn(n),a.head.appendChild(n)))}}function hg(e,n){It.m(e,n);var t=Nl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Hn(a)+'"][href="'+Hn(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ml(e)}if(!ut.has(s)&&(e=D({rel:"modulepreload",href:e},n),ut.set(s,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(As(s)))return}a=t.createElement("link"),Rn(a,"link",e),hn(a),t.head.appendChild(a)}}}function pg(e,n,t){It.S(e,n,t);var a=Nl;if(a&&e){var l=Kt(a).hoistableStyles,s=_l(e);n=n||"default";var r=l.get(s);if(!r){var f={loading:0,preload:null};if(r=a.querySelector(Cs(s)))f.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":n},t),(t=ut.get(s))&&bc(e,t);var g=r=a.createElement("link");hn(g),Rn(g,"link",e),g._p=new Promise(function(T,M){g.onload=T,g.onerror=M}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,$i(r,n,a)}r={type:"stylesheet",instance:r,count:1,state:f},l.set(s,r)}}}function mg(e,n){It.X(e,n);var t=Nl;if(t&&e){var a=Kt(t).hoistableScripts,l=Ml(e),s=a.get(l);s||(s=t.querySelector(As(l)),s||(e=D({src:e,async:!0},n),(n=ut.get(l))&&vc(e,n),s=t.createElement("script"),hn(s),Rn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function gg(e,n){It.M(e,n);var t=Nl;if(t&&e){var a=Kt(t).hoistableScripts,l=Ml(e),s=a.get(l);s||(s=t.querySelector(As(l)),s||(e=D({src:e,async:!0,type:"module"},n),(n=ut.get(l))&&vc(e,n),s=t.createElement("script"),hn(s),Rn(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function fh(e,n,t,a){var l=(l=ge.current)?Ji(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=_l(t.href),t=Kt(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=_l(t.href);var s=Kt(l).hoistableStyles,r=s.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=l.querySelector(Cs(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ut.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ut.set(e,t),s||yg(l,e,t,r.state))),n&&a===null)throw Error(c(528,""));return r}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ml(t),t=Kt(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _l(e){return'href="'+Hn(e)+'"'}function Cs(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function yg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Rn(n,"link",t),hn(n),e.head.appendChild(n))}function Ml(e){return'[src="'+Hn(e)+'"]'}function As(e){return"script[async]"+e}function ph(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Hn(t.href)+'"]');if(a)return n.instance=a,hn(a),a;var l=D({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),hn(a),Rn(a,"style",l),$i(a,t.precedence,e),n.instance=a;case"stylesheet":l=_l(t.href);var s=e.querySelector(Cs(l));if(s)return n.state.loading|=4,n.instance=s,hn(s),s;a=hh(t),(l=ut.get(l))&&bc(a,l),s=(e.ownerDocument||e).createElement("link"),hn(s);var r=s;return r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Rn(s,"link",a),n.state.loading|=4,$i(s,t.precedence,e),n.instance=s;case"script":return s=Ml(t.src),(l=e.querySelector(As(s)))?(n.instance=l,hn(l),l):(a=t,(l=ut.get(s))&&(a=D({},t),vc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),hn(l),Rn(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,$i(a,t.precedence,e));return n.instance}function $i(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,r=0;r<a.length;r++){var f=a[r];if(f.dataset.precedence===n)s=f;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function bc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fi=null;function mh(e,n,t){if(Fi===null){var a=new Map,l=Fi=new Map;l.set(t,a)}else l=Fi,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var s=t[l];if(!(s[Ca]||s[cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(n)||"";r=e+r;var f=a.get(r);f?f.push(s):a.set(r,[s])}}return a}function gh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function bg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=_l(a.href),s=n.querySelector(Cs(l));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wi.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,hn(s);return}s=n.ownerDocument||n,a=hh(a),(l=ut.get(l))&&bc(a,l),s=s.createElement("link"),hn(s);var r=s;r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),Rn(s,"link",a),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Wi.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var xc=0;function xg(e,n){return e.stylesheets&&e.count===0&&nr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&nr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&xc===0&&(xc=62500*eg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>xc?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var er=null;function nr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,er=new Map,n.forEach(Sg,e),er=null,Wi.call(e))}function Sg(e,n){if(!(n.state.loading&4)){var t=er.get(e);if(t)var a=t.get(null);else{t=new Map,er.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var r=l[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),a=r)}a&&t.set(null,a)}l=n.instance,r=l.getAttribute("data-precedence"),s=t.get(r)||a,s===a&&t.set(null,l),t.set(r,l),this.count++,a=Wi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Rs={$$typeof:V,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Eg(e,n,t,a,l,s,r,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function bh(e,n,t,a,l,s,r,f,g,T,M,L){return e=new Eg(e,n,t,r,g,T,M,L,f),n=1,s===!0&&(n|=24),s=Pn(3,null,null,n),e.current=s,s.stateNode=e,n=Fr(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:a,isDehydrated:t,cache:n},to(s),e}function vh(e){return e?(e=ol,e):ol}function xh(e,n,t,a,l,s){l=vh(l),a.context===null?a.context=l:a.pendingContext=l,a=aa(n),a.payload={element:t},s=s===void 0?null:s,s!==null&&(a.callback=s),t=la(e,a,n),t!==null&&(Xn(t,e,n),is(t,e,n))}function Sh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Sc(e,n){Sh(e,n),(e=e.alternate)&&Sh(e,n)}function Eh(e){if(e.tag===13||e.tag===31){var n=Oa(e,67108864);n!==null&&Xn(n,e,67108864),Sc(e,67108864)}}function kh(e){if(e.tag===13||e.tag===31){var n=et();n=Je(n);var t=Oa(e,n);t!==null&&Xn(t,e,n),Sc(e,n)}}var tr=!0;function kg(e,n,t,a){var l=N.T;N.T=null;var s=O.p;try{O.p=2,Ec(e,n,t,a)}finally{O.p=s,N.T=l}}function wg(e,n,t,a){var l=N.T;N.T=null;var s=O.p;try{O.p=8,Ec(e,n,t,a)}finally{O.p=s,N.T=l}}function Ec(e,n,t,a){if(tr){var l=kc(a);if(l===null)oc(e,n,a,ar,t),Th(e,a);else if(Cg(l,e,n,t,a))a.stopPropagation();else if(Th(e,a),n&4&&-1<Tg.indexOf(e)){for(;l!==null;){var s=Ct(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Ln(s.pendingLanes);if(r!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var g=1<<31-zn(r);f.entanglements[1]|=g,r&=~g}Et(s),(Oe&6)===0&&(Hi=rn()+500,Es(0))}}break;case 31:case 13:f=Oa(s,2),f!==null&&Xn(f,s,2),Qi(),Sc(s,2)}if(s=kc(a),s===null&&oc(e,n,a,ar,t),s===l)break;l=s}l!==null&&a.stopPropagation()}else oc(e,n,a,null,t)}}function kc(e){return e=fe(e),wc(e)}var ar=null;function wc(e){if(ar=null,e=Dn(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=p(n),e!==null)return e;e=null}else if(t===31){if(e=w(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ar=e,null}function wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xs()){case wt:return 2;case Sa:return 8;case Ea:case Sr:return 32;case Vs:return 268435456;default:return 32}default:return 32}}var Tc=!1,ma=null,ga=null,ya=null,Ns=new Map,_s=new Map,ba=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Th(e,n){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(n.pointerId)}}function Ms(e,n,t,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},n!==null&&(n=Ct(n),n!==null&&Eh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Cg(e,n,t,a,l){switch(n){case"focusin":return ma=Ms(ma,e,n,t,a,l),!0;case"dragenter":return ga=Ms(ga,e,n,t,a,l),!0;case"mouseover":return ya=Ms(ya,e,n,t,a,l),!0;case"pointerover":var s=l.pointerId;return Ns.set(s,Ms(Ns.get(s)||null,e,n,t,a,l)),!0;case"gotpointercapture":return s=l.pointerId,_s.set(s,Ms(_s.get(s)||null,e,n,t,a,l)),!0}return!1}function Ch(e){var n=Dn(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=p(t),n!==null){e.blockedOn=n,Fa(e.priority,function(){kh(t)});return}}else if(n===31){if(n=w(t),n!==null){e.blockedOn=n,Fa(e.priority,function(){kh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=kc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);F=a,t.target.dispatchEvent(a),F=null}else return n=Ct(t),n!==null&&Eh(n),e.blockedOn=t,!1;n.shift()}return!0}function Ah(e,n,t){lr(e)&&t.delete(n)}function Ag(){Tc=!1,ma!==null&&lr(ma)&&(ma=null),ga!==null&&lr(ga)&&(ga=null),ya!==null&&lr(ya)&&(ya=null),Ns.forEach(Ah),_s.forEach(Ah)}function sr(e,n){e.blockedOn===n&&(e.blockedOn=null,Tc||(Tc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ag)))}var ir=null;function Rh(e){ir!==e&&(ir=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ir===e&&(ir=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(wc(a||t)===null)continue;break}var s=Ct(t);s!==null&&(e.splice(n,3),n-=3,ko(s,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ol(e){function n(g){return sr(g,e)}ma!==null&&sr(ma,e),ga!==null&&sr(ga,e),ya!==null&&sr(ya,e),Ns.forEach(n),_s.forEach(n);for(var t=0;t<ba.length;t++){var a=ba[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ba.length&&(t=ba[0],t.blockedOn===null);)Ch(t),t.blockedOn===null&&ba.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],s=t[a+1],r=l[_n]||null;if(typeof s=="function")r||Rh(t);else if(r){var f=null;if(s&&s.hasAttribute("formAction")){if(l=s,r=s[_n]||null)f=r.formAction;else if(wc(l)!==null)continue}else f=r.action;typeof f=="function"?t[a+1]=f:(t.splice(a,3),a-=3),Rh(t)}}}function Nh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Cc(e){this._internalRoot=e}rr.prototype.render=Cc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=et();xh(t,a,e,n,null,null)},rr.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xh(e.current,2,null,e,null,null),Qi(),n[Vt]=null}};function rr(e){this._internalRoot=e}rr.prototype.unstable_scheduleHydration=function(e){if(e){var n=$a();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ba.length&&n!==0&&n<ba[t].priority;t++);ba.splice(t,0,e),t===0&&Ch(e)}};var _h=i.version;if(_h!=="19.2.4")throw Error(c(527,_h,"19.2.4"));O.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(n),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Rg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!or.isDisabled&&or.supportsFiber)try{ka=or.inject(Rg),Nn=or}catch{}}return zs.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,a="",l=Ud,s=Ld,r=Bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=bh(e,1,!1,null,null,t,a,null,l,s,r,Nh),e[Vt]=n.current,rc(e),new Cc(n)},zs.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var a=!1,l="",s=Ud,r=Ld,f=Bd,g=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),n=bh(e,1,!0,n,t??null,a,l,g,s,r,f,Nh),n.context=vh(null),t=n.current,a=et(),a=Je(a),l=aa(a),l.callback=null,la(t,l,a),t=a,n.current.lanes=t,Ge(n,t),Et(n),e[Vt]=n.current,rc(e),new rr(n)},zs.version="19.2.4",zs}var qh;function Hg(){if(qh)return Nc.exports;qh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Nc.exports=Bg(),Nc.exports}var qg=Hg();function Dc(o,i){const[u,c]=he.useState(()=>{try{const p=window.localStorage.getItem(o);return p?JSON.parse(p):i}catch(p){return console.error(`Error reading localStorage key "${o}":`,p),i}});he.useEffect(()=>{try{window.localStorage.setItem(o,JSON.stringify(u))}catch(p){console.error(`Error writing localStorage key "${o}":`,p)}},[o,u]);const d=he.useCallback(p=>{c(w=>p instanceof Function?p(w):p)},[]),m=he.useCallback(()=>{try{window.localStorage.removeItem(o),c(i)}catch(p){console.error(`Error clearing localStorage key "${o}":`,p)}},[o,i]);return[u,d,m]}function Qg(o){const i=[],u=o.split(/(?=^## \d+\.)/m).filter(Boolean);for(const c of u){const d=c.match(/^## (\d+)\. (.+?)[\r\n]/m);if(!d)continue;const[,m,p]=d,w=parseInt(m,10),b=`cat-${w}`,v=p.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+$/,""),C=Gg(c,b,p.trim());C.length>0&&i.push({id:b,number:w,name:p.trim(),slug:v,questions:C})}return i.sort((c,d)=>c.number-d.number)}function Gg(o,i,u){const c=[];return o.split(/(?=^### Q:)/m).filter(m=>m.trim().startsWith("### Q:")).forEach((m,p)=>{const w=m.match(/^### Q: (.+?)[\r\n]/m);if(!w)return;const b=w[1].trim(),v=m.indexOf("**Answer:**");let C="";v!==-1?C=m.slice(v+11).trim():C=m.slice(w[0].length).trim(),C=C.replace(/\n---\s*$/,"").trim();const D=Yg(C);c.push({id:`${i}-q${p+1}`,categoryId:i,categoryName:u,question:b,answer:C,seniorInsight:D})}),c}function Yg(o){const i=o.match(/\*\*Senior insight:\*\*\s*(.+?)(?=\n\n|\n---|\n###|$)/s);return i?i[1].trim():void 0}function Ig(o){return o.reduce((i,u)=>i+u.questions.length,0)}function Xg(o){return o.flatMap(i=>i.questions)}const Vg=`# Senior React.js Interview Questions & Answers

A comprehensive guide with detailed answers for Senior Frontend/React.js Developer interviews.

---

## Table of Contents

1. [React Core Concepts](#1-react-core-concepts)
2. [React Hooks](#2-react-hooks)
3. [Performance Optimization](#3-performance-optimization)
4. [State Management](#4-state-management)
5. [Architecture & Design Patterns](#5-architecture--design-patterns)
6. [System Design](#6-system-design)
7. [TypeScript with React](#7-typescript-with-react)
8. [Testing](#8-testing)
9. [Server-Side Rendering & Modern React](#9-server-side-rendering--modern-react)
10. [JavaScript Fundamentals](#10-javascript-fundamentals)
11. [Behavioral & Leadership](#11-behavioral--leadership)
12. [Code Review & Quality](#12-code-review--quality)
13. [React 19 & Latest Features](#13-react-19--latest-features)
14. [Accessibility (A11y)](#14-accessibility-a11y)
15. [Advanced Component Patterns](#15-advanced-component-patterns)
16. [Frontend Monitoring & Observability](#16-frontend-monitoring--observability)
17. [Additional System Design Questions](#17-additional-system-design-questions)
18. [Tricky & Edge Case Questions](#18-tricky--edge-case-questions)

---

## 1. React Core Concepts

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

## 2. React Hooks

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

## 3. Performance Optimization

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

## 4. State Management

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

## 5. Architecture & Design Patterns

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

## 6. System Design

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

## 7. TypeScript with React

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

## 8. Testing

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

## 9. Server-Side Rendering & Modern React

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

## 10. JavaScript Fundamentals

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

## 11. Behavioral & Leadership

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

## 12. Code Review & Quality

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

## 13. React 19 & Latest Features

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

---

## 14. Accessibility (A11y)

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

## 15. Advanced Component Patterns

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

---

## 16. Frontend Monitoring & Observability

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

---

## 17. Additional System Design Questions

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

---

## 18. Tricky & Edge Case Questions

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

## Quick Reference: Senior vs Mid-Level Expectations

| Area | Mid-Level | Senior |
|------|-----------|--------|
| Hooks | Knows how to use | Explains internals & trade-offs |
| Features | Implements | Designs & architects |
| Patterns | Follows | Chooses & justifies |
| Bugs | Fixes | Prevents categories of bugs |
| Code Review | Participates | Establishes culture |
| Team | Works in | Leads & mentors |
| Decisions | Executes | Drives with rationale |
| Performance | Fixes when slow | Proactively monitors |
| Accessibility | Basic compliance | Builds inclusive by default |
| Testing | Writes tests | Defines testing strategy |

---

## Study Resources

### Technical
- [GitHub - 500+ React Questions](https://github.com/sudheerj/reactjs-interview-questions)
- [GreatFrontEnd - 100+ Questions](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [Patterns.dev - React Patterns](https://www.patterns.dev/react)

### System Design
- [Frontend Interview Handbook](https://www.frontendinterviewhandbook.com/front-end-system-design/ui-components)
- [GreatFrontEnd System Design](https://www.greatfrontend.com/questions/system-design)

### Behavioral
- [Tech Interview Handbook - Behavioral](https://www.techinterviewhandbook.org/behavioral-interview-senior-candidates/)

### React 19
- [React 19 Blog Post](https://react.dev/blog)
- [DEV.to - React 19 Features](https://dev.to/fullstackprepdev_sda_d43a/react-19-2025-all-new-features-explained-20-must-know-interview-questions-1l33)

### Accessibility
- [React Accessibility Docs](https://react.dev/reference/react-dom/components#form-components)
- [A11y Interview Questions](https://scottaohara.github.io/accessibility_interview_questions/)

---

*Good luck with your interview!*

| Area | Mid-Level | Senior |
|------|-----------|--------|
| Hooks | Knows how to use | Explains internals & trade-offs |
| Features | Implements | Designs & architects |
| Patterns | Follows | Chooses & justifies |
| Bugs | Fixes | Prevents categories of bugs |
| Code Review | Participates | Establishes culture |
| Team | Works in | Leads & mentors |
| Decisions | Executes | Drives with rationale |

---

## Study Resources

### Technical
- [GitHub - 500+ React Questions](https://github.com/sudheerj/reactjs-interview-questions)
- [GreatFrontEnd - 100+ Questions](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

### System Design
- [Frontend Interview Handbook](https://www.frontendinterviewhandbook.com/front-end-system-design/ui-components)

### Behavioral
- [Tech Interview Handbook - Behavioral](https://www.techinterviewhandbook.org/behavioral-interview-senior-candidates/)

---

*Good luck with your interview!*
`,Hs=Qg(Vg),Us=Xg(Hs);Ig(Hs);const xa={status:"not_started",timesReviewed:0,bookmarked:!1},Zg={theme:"system",showAnswersByDefault:!1,enableKeyboardShortcuts:!0},$h={status:"all",category:"all",bookmarked:!1,searchQuery:""};function Kg(o,i){switch(i.type){case"SET_STATUS":{const u=o.progress[i.questionId]||xa;return{...o,progress:{...o.progress,[i.questionId]:{...u,status:i.status,lastStudied:Date.now(),timesReviewed:u.timesReviewed+1}}}}case"TOGGLE_BOOKMARK":{const u=o.progress[i.questionId]||xa;return{...o,progress:{...o.progress,[i.questionId]:{...u,bookmarked:!u.bookmarked}}}}case"TOGGLE_EXPANDED":{const u=new Set(o.expandedQuestions);return u.has(i.questionId)?u.delete(i.questionId):u.add(i.questionId),{...o,expandedQuestions:u}}case"EXPAND_ALL":return{...o,expandedQuestions:new Set(Us.map(u=>u.id))};case"COLLAPSE_ALL":return{...o,expandedQuestions:new Set};case"SET_NOTES":{const u=o.progress[i.questionId]||xa;return{...o,progress:{...o.progress,[i.questionId]:{...u,notes:i.notes}}}}case"SET_FILTER":return{...o,filters:{...o.filters,...i.filter}};case"CLEAR_FILTERS":return{...o,filters:$h};case"SET_SEARCH":return{...o,filters:{...o.filters,searchQuery:i.query}};case"SET_CURRENT_QUESTION":return{...o,currentQuestionId:i.questionId};case"SET_SETTING":return{...o,settings:{...o.settings,...i.setting}};case"IMPORT_PROGRESS":return{...o,progress:i.data};case"RESET_PROGRESS":return{...o,progress:{}};case"RESET_CATEGORY":{const u={...o.progress},c=Hs.find(d=>d.id===i.categoryId);return c&&c.questions.forEach(d=>{delete u[d.id]}),{...o,progress:u}}case"LOAD_PROGRESS":return{...o,progress:i.progress};default:return o}}const Fh=he.createContext(null);function Pg({children:o}){const[i,u]=Dc("study-progress",{}),[c,d]=Dc("study-settings",Zg),m={progress:i,settings:c,filters:$h,expandedQuestions:new Set,currentQuestionId:null},[p,w]=he.useReducer(Kg,m);he.useEffect(()=>{u(p.progress)},[p.progress,u]),he.useEffect(()=>{d(p.settings)},[p.settings,d]);const b=(V,re)=>{w({type:"SET_STATUS",questionId:V,status:re})},v=V=>{w({type:"TOGGLE_BOOKMARK",questionId:V})},C=V=>{w({type:"TOGGLE_EXPANDED",questionId:V})},D=V=>{w({type:"SET_SEARCH",query:V})},_=V=>{w({type:"SET_FILTER",filter:V})},I=V=>p.progress[V]||xa,q=V=>p.expandedQuestions.has(V),K=he.useMemo(()=>{let V=[...Us];if(p.filters.category!=="all"&&(V=V.filter(re=>re.categoryId===p.filters.category)),p.filters.status!=="all"&&(V=V.filter(re=>(p.progress[re.id]||xa).status===p.filters.status)),p.filters.bookmarked&&(V=V.filter(re=>(p.progress[re.id]||xa).bookmarked)),p.filters.searchQuery.trim()){const re=p.filters.searchQuery.toLowerCase();V=V.filter(ie=>ie.question.toLowerCase().includes(re)||ie.answer.toLowerCase().includes(re)||ie.categoryName.toLowerCase().includes(re))}return V},[p.filters,p.progress]),Ae=he.useMemo(()=>{const V=Us.length;let re=0,ie=0,ye=0,te=0,Te=0;return Us.forEach(Pe=>{const en=p.progress[Pe.id]||xa;switch(en.status){case"not_started":re++;break;case"studied":ie++;break;case"needs_review":ye++;break;case"mastered":te++;break}en.bookmarked&&Te++}),{total:V,notStarted:re,studied:ie,needsReview:ye,mastered:te,bookmarked:Te}},[p.progress]),ze=he.useMemo(()=>Hs.map(V=>{const re=V.questions;let ie=0,ye=0,te=0,Te=0,Pe=0;return re.forEach(en=>{const Fe=p.progress[en.id]||xa;switch(Fe.status){case"not_started":ie++;break;case"studied":ye++;break;case"needs_review":te++;break;case"mastered":Te++;break}Fe.bookmarked&&Pe++}),{categoryId:V.id,categoryName:V.name,total:re.length,notStarted:ie,studied:ye,needsReview:te,mastered:Te,bookmarked:Pe}}),[p.progress]),we={state:p,dispatch:w,setStatus:b,toggleBookmark:v,toggleExpanded:C,setSearch:D,setFilter:_,getProgress:I,isExpanded:q,filteredQuestions:K,stats:Ae,categoryStats:ze,categories:Hs,allQuestions:Us};return h.jsx(Fh.Provider,{value:we,children:o})}function Va(){const o=he.useContext(Fh);if(!o)throw new Error("useStudy must be used within a StudyProvider");return o}const Wh=he.createContext(null);function Jg({children:o}){const[i,u]=Dc("theme","system"),c=i==="dark"?!0:i==="light"?!1:typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1;return he.useEffect(()=>{const d=document.documentElement;c?d.classList.add("dark"):d.classList.remove("dark")},[c]),he.useEffect(()=>{if(i!=="system")return;const d=window.matchMedia("(prefers-color-scheme: dark)"),m=p=>{const w=document.documentElement;p.matches?w.classList.add("dark"):w.classList.remove("dark")};return d.addEventListener("change",m),()=>d.removeEventListener("change",m)},[i]),h.jsx(Wh.Provider,{value:{theme:i,setTheme:u,isDark:c},children:o})}function ep(){const o=he.useContext(Wh);if(!o)throw new Error("useTheme must be used within a ThemeProvider");return o}const np=(...o)=>o.filter((i,u,c)=>!!i&&i.trim()!==""&&c.indexOf(i)===u).join(" ").trim();const $g=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Fg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,u,c)=>c?c.toUpperCase():u.toLowerCase());const Qh=o=>{const i=Fg(o);return i.charAt(0).toUpperCase()+i.slice(1)};var Wg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ey=o=>{for(const i in o)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};const ny=he.forwardRef(({color:o="currentColor",size:i=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:p,...w},b)=>he.createElement("svg",{ref:b,...Wg,width:i,height:i,stroke:o,strokeWidth:c?Number(u)*24/Number(i):u,className:np("lucide",d),...!m&&!ey(w)&&{"aria-hidden":"true"},...w},[...p.map(([v,C])=>he.createElement(v,C)),...Array.isArray(m)?m:[m]]));const Xe=(o,i)=>{const u=he.forwardRef(({className:c,...d},m)=>he.createElement(ny,{ref:m,iconNode:i,className:np(`lucide-${$g(Qh(o))}`,`lucide-${o}`,c),...d}));return u.displayName=Qh(o),u};const ty=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Gh=Xe("book-open",ty);const ay=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],qc=Xe("bookmark",ay);const ly=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],sy=Xe("chart-column",ly);const iy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ry=Xe("check",iy);const oy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qc=Xe("chevron-down",oy);const cy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jc=Xe("chevron-right",cy);const uy=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],dy=Xe("chevron-up",uy);const fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ur=Xe("circle-check",fy);const hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gc=Xe("circle",hy);const py=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],qs=Xe("clock",py);const my=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],gy=Xe("download",my);const yy=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],tp=Xe("funnel",yy);const by=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],vy=Xe("keyboard",by);const xy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Sy=Xe("menu",xy);const Ey=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],ky=Xe("monitor",Ey);const wy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ty=Xe("moon",wy);const Cy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ay=Xe("rotate-ccw",Cy);const Ry=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ap=Xe("search",Ry);const Ny=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],_y=Xe("shuffle",Ny);const My=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Oy=Xe("skip-forward",My);const zy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],dr=Xe("star",zy);const Dy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],jy=Xe("sun",Dy);const Uy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ly=Xe("trash-2",Uy);const By=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Hy=Xe("trophy",By);const qy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Qy=Xe("upload",qy);const Gy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gr=Xe("x",Gy);function Yy({onOpenStats:o,onOpenShortcuts:i,onStartQuiz:u}){const{state:c,setSearch:d,stats:m}=Va(),{theme:p,setTheme:w,isDark:b}=ep(),v=Math.round((m.studied+m.mastered)/m.total*100),C=()=>{const _=["light","dark","system"],q=(_.indexOf(p)+1)%_.length;w(_[q])},D=p==="system"?ky:b?Ty:jy;return h.jsx("header",{className:"sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-3 gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"p-2 bg-blue-500 rounded-lg",children:h.jsx(Gh,{className:"w-5 h-5 text-white"})}),h.jsxs("div",{className:"hidden sm:block",children:[h.jsx("h1",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"React Interview Prep"}),h.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[m.mastered+m.studied,"/",m.total," completed (",v,"%)"]})]})]}),h.jsx("div",{className:"flex-1 max-w-xl",children:h.jsxs("div",{className:"relative",children:[h.jsx(ap,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",placeholder:"Search questions... (Press / to focus)",value:c.filters.searchQuery,onChange:_=>d(_.target.value),className:"input pl-10",id:"search-input"})]})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:u,className:"btn btn-primary hidden sm:flex items-center gap-2",children:[h.jsx(Gh,{className:"w-4 h-4"}),h.jsx("span",{children:"Quiz"})]}),h.jsx("button",{onClick:o,className:"btn btn-ghost p-2",title:"View Statistics",children:h.jsx(sy,{className:"w-5 h-5"})}),h.jsx("button",{onClick:i,className:"btn btn-ghost p-2 hidden sm:flex",title:"Keyboard Shortcuts",children:h.jsx(vy,{className:"w-5 h-5"})}),h.jsx("button",{onClick:C,className:"btn btn-ghost p-2",title:`Theme: ${p}`,children:h.jsx(D,{className:"w-5 h-5"})})]})]})})}function Iy({isOpen:o,onClose:i}){const{state:u,setFilter:c,categoryStats:d,stats:m}=Va(),{filters:p}=u,w=[{value:"all",label:"All Questions",icon:h.jsx(tp,{className:"w-4 h-4"}),color:""},{value:"not_started",label:"Not Started",icon:h.jsx(Gc,{className:"w-4 h-4"}),color:"text-gray-500"},{value:"studied",label:"Studied",icon:h.jsx(ur,{className:"w-4 h-4"}),color:"text-blue-500"},{value:"needs_review",label:"Needs Review",icon:h.jsx(qs,{className:"w-4 h-4"}),color:"text-amber-500"},{value:"mastered",label:"Mastered",icon:h.jsx(dr,{className:"w-4 h-4"}),color:"text-green-500"}],b=v=>{if(v==="all")return m.total;switch(v){case"not_started":return m.notStarted;case"studied":return m.studied;case"needs_review":return m.needsReview;case"mastered":return m.mastered}};return h.jsxs(h.Fragment,{children:[o&&h.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:i}),h.jsxs("aside",{className:`
          fixed lg:sticky top-0 left-0 z-50 lg:z-0
          h-screen w-72 lg:w-64
          bg-white dark:bg-slate-800
          border-r border-gray-200 dark:border-slate-700
          transform transition-transform duration-300
          ${o?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          overflow-y-auto
          pt-4 lg:pt-20
        `,children:[h.jsx("button",{onClick:i,className:"lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:h.jsx(gr,{className:"w-5 h-5"})}),h.jsxs("div",{className:"px-4 pb-4",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Filter by Status"}),h.jsx("div",{className:"space-y-1",children:w.map(v=>h.jsxs("button",{onClick:()=>c({status:v.value}),className:`
                    w-full sidebar-item
                    ${p.status===v.value?"active":""}
                    ${v.color}
                  `,children:[v.icon,h.jsx("span",{className:"flex-1 text-left text-sm",children:v.label}),h.jsx("span",{className:"text-xs text-gray-400",children:b(v.value)})]},v.value))})]}),h.jsx("div",{className:"mb-6",children:h.jsxs("button",{onClick:()=>c({bookmarked:!p.bookmarked}),className:`
                w-full sidebar-item
                ${p.bookmarked?"active":""}
              `,children:[h.jsx(qc,{className:`w-4 h-4 ${p.bookmarked?"fill-current":""}`}),h.jsx("span",{className:"flex-1 text-left text-sm",children:"Bookmarked"}),h.jsx("span",{className:"text-xs text-gray-400",children:m.bookmarked})]})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Categories"}),h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:()=>c({category:"all"}),className:`
                  w-full sidebar-item
                  ${p.category==="all"?"active":""}
                `,children:[h.jsx(jc,{className:"w-4 h-4"}),h.jsx("span",{className:"flex-1 text-left text-sm",children:"All Categories"}),h.jsx("span",{className:"text-xs text-gray-400",children:m.total})]}),d.map(v=>{const C=p.category===v.categoryId,D=v.studied+v.mastered,_=Math.round(D/v.total*100);return h.jsxs("button",{onClick:()=>c({category:v.categoryId}),className:`
                      w-full sidebar-item group
                      ${C?"active":""}
                    `,children:[h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[C?h.jsx(Qc,{className:"w-4 h-4 flex-shrink-0"}):h.jsx(jc,{className:"w-4 h-4 flex-shrink-0"}),h.jsx("span",{className:"text-sm truncate",children:v.categoryName})]}),h.jsx("div",{className:"ml-6 mt-1",children:h.jsx("div",{className:"h-1 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-green-500 rounded-full transition-all duration-300",style:{width:`${_}%`}})})})]}),h.jsxs("span",{className:"text-xs text-gray-400 flex-shrink-0",children:[D,"/",v.total]})]},v.categoryId)})]})]})]})]})]})}function Xy({children:o,onOpenStats:i,onOpenShortcuts:u,onStartQuiz:c}){const[d,m]=he.useState(!1);return h.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[h.jsx(Yy,{onOpenStats:i,onOpenShortcuts:u,onStartQuiz:c}),h.jsxs("div",{className:"flex",children:[h.jsx("button",{onClick:()=>m(!0),className:"lg:hidden fixed bottom-4 left-4 z-30 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors",children:h.jsx(Sy,{className:"w-6 h-6"})}),h.jsx(Iy,{isOpen:d,onClose:()=>m(!1)}),h.jsx("main",{className:"flex-1 min-h-[calc(100vh-64px)] p-4 lg:p-6",children:o})]})]})}function Yc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Za=Yc();function lp(o){Za=o}var Bs={exec:()=>null};function Me(o,i=""){let u=typeof o=="string"?o:o.source,c={replace:(d,m)=>{let p=typeof m=="string"?m:m.source;return p=p.replace(Un.caret,"$1"),u=u.replace(d,p),c},getRegex:()=>new RegExp(u,i)};return c}var Vy=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Un={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:o=>new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}#`),htmlBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}<(?:[a-z].*>|!--)`,"i")},Zy=/^(?:[ \t]*(?:\n|$))+/,Ky=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Py=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ic=/(?:[*+-]|\d{1,9}[.)])/,sp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ip=Me(sp).replace(/bull/g,Ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$y=Me(sp).replace(/bull/g,Ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Xc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Fy=/^[^\n]+/,Vc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Wy=Me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Vc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),eb=Me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ic).getRegex(),yr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nb=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zc).replace("tag",yr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rp=Me(Xc).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex(),tb=Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",rp).getRegex(),Kc={blockquote:tb,code:Ky,def:Wy,fences:Py,heading:Jy,hr:Qs,html:nb,lheading:ip,list:eb,newline:Zy,paragraph:rp,table:Bs,text:Fy},Yh=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex(),ab={...Kc,lheading:$y,table:Yh,paragraph:Me(Xc).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex()},lb={...Kc,html:Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Bs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(Xc).replace("hr",Qs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ip).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ib=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,op=/^( {2,}|\\)\n(?!\s*$)/,rb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,br=/[\p{P}\p{S}]/u,Pc=/[\s\p{P}\p{S}]/u,cp=/[^\s\p{P}\p{S}]/u,ob=Me(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Pc).getRegex(),up=/(?!~)[\p{P}\p{S}]/u,cb=/(?!~)[\s\p{P}\p{S}]/u,ub=/(?:[^\s\p{P}\p{S}]|~)/u,db=Me(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Vy?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),dp=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,fb=Me(dp,"u").replace(/punct/g,br).getRegex(),hb=Me(dp,"u").replace(/punct/g,up).getRegex(),fp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",pb=Me(fp,"gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,Pc).replace(/punct/g,br).getRegex(),mb=Me(fp,"gu").replace(/notPunctSpace/g,ub).replace(/punctSpace/g,cb).replace(/punct/g,up).getRegex(),gb=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cp).replace(/punctSpace/g,Pc).replace(/punct/g,br).getRegex(),yb=Me(/\\(punct)/,"gu").replace(/punct/g,br).getRegex(),bb=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vb=Me(Zc).replace("(?:-->|$)","-->").getRegex(),xb=Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fr=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Sb=Me(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",fr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hp=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",fr).replace("ref",Vc).getRegex(),pp=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vc).getRegex(),Eb=Me("reflink|nolink(?!\\()","g").replace("reflink",hp).replace("nolink",pp).getRegex(),Ih=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Jc={_backpedal:Bs,anyPunctuation:yb,autolink:bb,blockSkip:db,br:op,code:ib,del:Bs,emStrongLDelim:fb,emStrongRDelimAst:pb,emStrongRDelimUnd:gb,escape:sb,link:Sb,nolink:pp,punctuation:ob,reflink:hp,reflinkSearch:Eb,tag:xb,text:rb,url:Bs},kb={...Jc,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",fr).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",fr).getRegex()},Uc={...Jc,emStrongRDelimAst:mb,emStrongLDelim:hb,url:Me(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ih).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Me(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ih).getRegex()},wb={...Uc,br:Me(op).replace("{2,}","*").getRegex(),text:Me(Uc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cr={normal:Kc,gfm:ab,pedantic:lb},Ds={normal:Jc,gfm:Uc,breaks:wb,pedantic:kb},Tb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xh=o=>Tb[o];function Xt(o,i){if(i){if(Un.escapeTest.test(o))return o.replace(Un.escapeReplace,Xh)}else if(Un.escapeTestNoEncode.test(o))return o.replace(Un.escapeReplaceNoEncode,Xh);return o}function Vh(o){try{o=encodeURI(o).replace(Un.percentDecode,"%")}catch{return null}return o}function Zh(o,i){let u=o.replace(Un.findPipe,(m,p,w)=>{let b=!1,v=p;for(;--v>=0&&w[v]==="\\";)b=!b;return b?"|":" |"}),c=u.split(Un.splitPipe),d=0;if(c[0].trim()||c.shift(),c.length>0&&!c.at(-1)?.trim()&&c.pop(),i)if(c.length>i)c.splice(i);else for(;c.length<i;)c.push("");for(;d<c.length;d++)c[d]=c[d].trim().replace(Un.slashPipe,"|");return c}function js(o,i,u){let c=o.length;if(c===0)return"";let d=0;for(;d<c&&o.charAt(c-d-1)===i;)d++;return o.slice(0,c-d)}function Cb(o,i){if(o.indexOf(i[1])===-1)return-1;let u=0;for(let c=0;c<o.length;c++)if(o[c]==="\\")c++;else if(o[c]===i[0])u++;else if(o[c]===i[1]&&(u--,u<0))return c;return u>0?-2:-1}function Kh(o,i,u,c,d){let m=i.href,p=i.title||null,w=o[1].replace(d.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:o[0].charAt(0)==="!"?"image":"link",raw:u,href:m,title:p,text:w,tokens:c.inlineTokens(w)};return c.state.inLink=!1,b}function Ab(o,i,u){let c=o.match(u.other.indentCodeCompensation);if(c===null)return i;let d=c[1];return i.split(`
`).map(m=>{let p=m.match(u.other.beginningSpace);if(p===null)return m;let[w]=p;return w.length>=d.length?m.slice(d.length):m}).join(`
`)}var hr=class{options;rules;lexer;constructor(o){this.options=o||Za}space(o){let i=this.rules.block.newline.exec(o);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(o){let i=this.rules.block.code.exec(o);if(i){let u=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?u:js(u,`
`)}}}fences(o){let i=this.rules.block.fences.exec(o);if(i){let u=i[0],c=Ab(u,i[3]||"",this.rules);return{type:"code",raw:u,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:c}}}heading(o){let i=this.rules.block.heading.exec(o);if(i){let u=i[2].trim();if(this.rules.other.endingHash.test(u)){let c=js(u,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(u=c.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(o){let i=this.rules.block.hr.exec(o);if(i)return{type:"hr",raw:js(i[0],`
`)}}blockquote(o){let i=this.rules.block.blockquote.exec(o);if(i){let u=js(i[0],`
`).split(`
`),c="",d="",m=[];for(;u.length>0;){let p=!1,w=[],b;for(b=0;b<u.length;b++)if(this.rules.other.blockquoteStart.test(u[b]))w.push(u[b]),p=!0;else if(!p)w.push(u[b]);else break;u=u.slice(b);let v=w.join(`
`),C=v.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${v}`:v,d=d?`${d}
${C}`:C;let D=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(C,m,!0),this.lexer.state.top=D,u.length===0)break;let _=m.at(-1);if(_?.type==="code")break;if(_?.type==="blockquote"){let I=_,q=I.raw+`
`+u.join(`
`),K=this.blockquote(q);m[m.length-1]=K,c=c.substring(0,c.length-I.raw.length)+K.raw,d=d.substring(0,d.length-I.text.length)+K.text;break}else if(_?.type==="list"){let I=_,q=I.raw+`
`+u.join(`
`),K=this.list(q);m[m.length-1]=K,c=c.substring(0,c.length-_.raw.length)+K.raw,d=d.substring(0,d.length-I.raw.length)+K.raw,u=q.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:m,text:d}}}list(o){let i=this.rules.block.list.exec(o);if(i){let u=i[1].trim(),c=u.length>1,d={type:"list",raw:"",ordered:c,start:c?+u.slice(0,-1):"",loose:!1,items:[]};u=c?`\\d{1,9}\\${u.slice(-1)}`:`\\${u}`,this.options.pedantic&&(u=c?u:"[*+-]");let m=this.rules.other.listItemRegex(u),p=!1;for(;o;){let b=!1,v="",C="";if(!(i=m.exec(o))||this.rules.block.hr.test(o))break;v=i[0],o=o.substring(v.length);let D=i[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,K=>" ".repeat(3*K.length)),_=o.split(`
`,1)[0],I=!D.trim(),q=0;if(this.options.pedantic?(q=2,C=D.trimStart()):I?q=i[1].length+1:(q=i[2].search(this.rules.other.nonSpaceChar),q=q>4?1:q,C=D.slice(q),q+=i[1].length),I&&this.rules.other.blankLine.test(_)&&(v+=_+`
`,o=o.substring(_.length+1),b=!0),!b){let K=this.rules.other.nextBulletRegex(q),Ae=this.rules.other.hrRegex(q),ze=this.rules.other.fencesBeginRegex(q),we=this.rules.other.headingBeginRegex(q),V=this.rules.other.htmlBeginRegex(q);for(;o;){let re=o.split(`
`,1)[0],ie;if(_=re,this.options.pedantic?(_=_.replace(this.rules.other.listReplaceNesting,"  "),ie=_):ie=_.replace(this.rules.other.tabCharGlobal,"    "),ze.test(_)||we.test(_)||V.test(_)||K.test(_)||Ae.test(_))break;if(ie.search(this.rules.other.nonSpaceChar)>=q||!_.trim())C+=`
`+ie.slice(q);else{if(I||D.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ze.test(D)||we.test(D)||Ae.test(D))break;C+=`
`+_}!I&&!_.trim()&&(I=!0),v+=re+`
`,o=o.substring(re.length+1),D=ie.slice(q)}}d.loose||(p?d.loose=!0:this.rules.other.doubleBlankLine.test(v)&&(p=!0)),d.items.push({type:"list_item",raw:v,task:!!this.options.gfm&&this.rules.other.listIsTask.test(C),loose:!1,text:C,tokens:[]}),d.raw+=v}let w=d.items.at(-1);if(w)w.raw=w.raw.trimEnd(),w.text=w.text.trimEnd();else return;d.raw=d.raw.trimEnd();for(let b of d.items){if(this.lexer.state.top=!1,b.tokens=this.lexer.blockTokens(b.text,[]),b.task){if(b.text=b.text.replace(this.rules.other.listReplaceTask,""),b.tokens[0]?.type==="text"||b.tokens[0]?.type==="paragraph"){b.tokens[0].raw=b.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),b.tokens[0].text=b.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let C=this.lexer.inlineQueue.length-1;C>=0;C--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[C].src)){this.lexer.inlineQueue[C].src=this.lexer.inlineQueue[C].src.replace(this.rules.other.listReplaceTask,"");break}}let v=this.rules.other.listTaskCheckbox.exec(b.raw);if(v){let C={type:"checkbox",raw:v[0]+" ",checked:v[0]!=="[ ]"};b.checked=C.checked,d.loose?b.tokens[0]&&["paragraph","text"].includes(b.tokens[0].type)&&"tokens"in b.tokens[0]&&b.tokens[0].tokens?(b.tokens[0].raw=C.raw+b.tokens[0].raw,b.tokens[0].text=C.raw+b.tokens[0].text,b.tokens[0].tokens.unshift(C)):b.tokens.unshift({type:"paragraph",raw:C.raw,text:C.raw,tokens:[C]}):b.tokens.unshift(C)}}if(!d.loose){let v=b.tokens.filter(D=>D.type==="space"),C=v.length>0&&v.some(D=>this.rules.other.anyLine.test(D.raw));d.loose=C}}if(d.loose)for(let b of d.items){b.loose=!0;for(let v of b.tokens)v.type==="text"&&(v.type="paragraph")}return d}}html(o){let i=this.rules.block.html.exec(o);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(o){let i=this.rules.block.def.exec(o);if(i){let u=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:u,raw:i[0],href:c,title:d}}}table(o){let i=this.rules.block.table.exec(o);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let u=Zh(i[1]),c=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),d=i[3]?.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:i[0],header:[],align:[],rows:[]};if(u.length===c.length){for(let p of c)this.rules.other.tableAlignRight.test(p)?m.align.push("right"):this.rules.other.tableAlignCenter.test(p)?m.align.push("center"):this.rules.other.tableAlignLeft.test(p)?m.align.push("left"):m.align.push(null);for(let p=0;p<u.length;p++)m.header.push({text:u[p],tokens:this.lexer.inline(u[p]),header:!0,align:m.align[p]});for(let p of d)m.rows.push(Zh(p,m.header.length).map((w,b)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:m.align[b]})));return m}}lheading(o){let i=this.rules.block.lheading.exec(o);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(o){let i=this.rules.block.paragraph.exec(o);if(i){let u=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:u,tokens:this.lexer.inline(u)}}}text(o){let i=this.rules.block.text.exec(o);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(o){let i=this.rules.inline.escape.exec(o);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(o){let i=this.rules.inline.tag.exec(o);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(o){let i=this.rules.inline.link.exec(o);if(i){let u=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(u)){if(!this.rules.other.endAngleBracket.test(u))return;let m=js(u.slice(0,-1),"\\");if((u.length-m.length)%2===0)return}else{let m=Cb(i[2],"()");if(m===-2)return;if(m>-1){let p=(i[0].indexOf("!")===0?5:4)+i[1].length+m;i[2]=i[2].substring(0,m),i[0]=i[0].substring(0,p).trim(),i[3]=""}}let c=i[2],d="";if(this.options.pedantic){let m=this.rules.other.pedanticHrefTitle.exec(c);m&&(c=m[1],d=m[3])}else d=i[3]?i[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(u)?c=c.slice(1):c=c.slice(1,-1)),Kh(i,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(o,i){let u;if((u=this.rules.inline.reflink.exec(o))||(u=this.rules.inline.nolink.exec(o))){let c=(u[2]||u[1]).replace(this.rules.other.multipleSpaceGlobal," "),d=i[c.toLowerCase()];if(!d){let m=u[0].charAt(0);return{type:"text",raw:m,text:m}}return Kh(u,d,u[0],this.lexer,this.rules)}}emStrong(o,i,u=""){let c=this.rules.inline.emStrongLDelim.exec(o);if(!(!c||c[3]&&u.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!u||this.rules.inline.punctuation.exec(u))){let d=[...c[0]].length-1,m,p,w=d,b=0,v=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,i=i.slice(-1*o.length+d);(c=v.exec(i))!=null;){if(m=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!m)continue;if(p=[...m].length,c[3]||c[4]){w+=p;continue}else if((c[5]||c[6])&&d%3&&!((d+p)%3)){b+=p;continue}if(w-=p,w>0)continue;p=Math.min(p,p+w+b);let C=[...c[0]][0].length,D=o.slice(0,d+c.index+C+p);if(Math.min(d,p)%2){let I=D.slice(1,-1);return{type:"em",raw:D,text:I,tokens:this.lexer.inlineTokens(I)}}let _=D.slice(2,-2);return{type:"strong",raw:D,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(o){let i=this.rules.inline.code.exec(o);if(i){let u=i[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(u),d=this.rules.other.startingSpaceChar.test(u)&&this.rules.other.endingSpaceChar.test(u);return c&&d&&(u=u.substring(1,u.length-1)),{type:"codespan",raw:i[0],text:u}}}br(o){let i=this.rules.inline.br.exec(o);if(i)return{type:"br",raw:i[0]}}del(o){let i=this.rules.inline.del.exec(o);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(o){let i=this.rules.inline.autolink.exec(o);if(i){let u,c;return i[2]==="@"?(u=i[1],c="mailto:"+u):(u=i[1],c=u),{type:"link",raw:i[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}url(o){let i;if(i=this.rules.inline.url.exec(o)){let u,c;if(i[2]==="@")u=i[0],c="mailto:"+u;else{let d;do d=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(d!==i[0]);u=i[0],i[1]==="www."?c="http://"+i[0]:c=i[0]}return{type:"link",raw:i[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(o){let i=this.rules.inline.text.exec(o);if(i){let u=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:u}}}},pt=class Lc{tokens;options;state;inlineQueue;tokenizer;constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Za,this.options.tokenizer=this.options.tokenizer||new hr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let u={other:Un,block:cr.normal,inline:Ds.normal};this.options.pedantic?(u.block=cr.pedantic,u.inline=Ds.pedantic):this.options.gfm&&(u.block=cr.gfm,this.options.breaks?u.inline=Ds.breaks:u.inline=Ds.gfm),this.tokenizer.rules=u}static get rules(){return{block:cr,inline:Ds}}static lex(i,u){return new Lc(u).lex(i)}static lexInline(i,u){return new Lc(u).inlineTokens(i)}lex(i){i=i.replace(Un.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let u=0;u<this.inlineQueue.length;u++){let c=this.inlineQueue[u];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,u=[],c=!1){for(this.options.pedantic&&(i=i.replace(Un.tabCharGlobal,"    ").replace(Un.spaceLine,""));i;){let d;if(this.options.extensions?.block?.some(p=>(d=p.call({lexer:this},i,u))?(i=i.substring(d.raw.length),u.push(d),!0):!1))continue;if(d=this.tokenizer.space(i)){i=i.substring(d.raw.length);let p=u.at(-1);d.raw.length===1&&p!==void 0?p.raw+=`
`:u.push(d);continue}if(d=this.tokenizer.code(i)){i=i.substring(d.raw.length);let p=u.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+d.raw,p.text+=`
`+d.text,this.inlineQueue.at(-1).src=p.text):u.push(d);continue}if(d=this.tokenizer.fences(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.heading(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.hr(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.blockquote(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.list(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.html(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.def(i)){i=i.substring(d.raw.length);let p=u.at(-1);p?.type==="paragraph"||p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+d.raw,p.text+=`
`+d.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},u.push(d));continue}if(d=this.tokenizer.table(i)){i=i.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.lheading(i)){i=i.substring(d.raw.length),u.push(d);continue}let m=i;if(this.options.extensions?.startBlock){let p=1/0,w=i.slice(1),b;this.options.extensions.startBlock.forEach(v=>{b=v.call({lexer:this},w),typeof b=="number"&&b>=0&&(p=Math.min(p,b))}),p<1/0&&p>=0&&(m=i.substring(0,p+1))}if(this.state.top&&(d=this.tokenizer.paragraph(m))){let p=u.at(-1);c&&p?.type==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+d.raw,p.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):u.push(d),c=m.length!==i.length,i=i.substring(d.raw.length);continue}if(d=this.tokenizer.text(i)){i=i.substring(d.raw.length);let p=u.at(-1);p?.type==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+d.raw,p.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):u.push(d);continue}if(i){let p="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,u}inline(i,u=[]){return this.inlineQueue.push({src:i,tokens:u}),u}inlineTokens(i,u=[]){let c=i,d=null;if(this.tokens.links){let b=Object.keys(this.tokens.links);if(b.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)b.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,d.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let m;for(;(d=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)m=d[2]?d[2].length:0,c=c.slice(0,d.index+m)+"["+"a".repeat(d[0].length-m-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=this.options.hooks?.emStrongMask?.call({lexer:this},c)??c;let p=!1,w="";for(;i;){p||(w=""),p=!1;let b;if(this.options.extensions?.inline?.some(C=>(b=C.call({lexer:this},i,u))?(i=i.substring(b.raw.length),u.push(b),!0):!1))continue;if(b=this.tokenizer.escape(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.tag(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.link(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(b.raw.length);let C=u.at(-1);b.type==="text"&&C?.type==="text"?(C.raw+=b.raw,C.text+=b.text):u.push(b);continue}if(b=this.tokenizer.emStrong(i,c,w)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.codespan(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.br(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.del(i)){i=i.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.autolink(i)){i=i.substring(b.raw.length),u.push(b);continue}if(!this.state.inLink&&(b=this.tokenizer.url(i))){i=i.substring(b.raw.length),u.push(b);continue}let v=i;if(this.options.extensions?.startInline){let C=1/0,D=i.slice(1),_;this.options.extensions.startInline.forEach(I=>{_=I.call({lexer:this},D),typeof _=="number"&&_>=0&&(C=Math.min(C,_))}),C<1/0&&C>=0&&(v=i.substring(0,C+1))}if(b=this.tokenizer.inlineText(v)){i=i.substring(b.raw.length),b.raw.slice(-1)!=="_"&&(w=b.raw.slice(-1)),p=!0;let C=u.at(-1);C?.type==="text"?(C.raw+=b.raw,C.text+=b.text):u.push(b);continue}if(i){let C="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(C);break}else throw new Error(C)}}return u}},pr=class{options;parser;constructor(o){this.options=o||Za}space(o){return""}code({text:o,lang:i,escaped:u}){let c=(i||"").match(Un.notSpaceStart)?.[0],d=o.replace(Un.endingNewline,"")+`
`;return c?'<pre><code class="language-'+Xt(c)+'">'+(u?d:Xt(d,!0))+`</code></pre>
`:"<pre><code>"+(u?d:Xt(d,!0))+`</code></pre>
`}blockquote({tokens:o}){return`<blockquote>
${this.parser.parse(o)}</blockquote>
`}html({text:o}){return o}def(o){return""}heading({tokens:o,depth:i}){return`<h${i}>${this.parser.parseInline(o)}</h${i}>
`}hr(o){return`<hr>
`}list(o){let i=o.ordered,u=o.start,c="";for(let p=0;p<o.items.length;p++){let w=o.items[p];c+=this.listitem(w)}let d=i?"ol":"ul",m=i&&u!==1?' start="'+u+'"':"";return"<"+d+m+`>
`+c+"</"+d+`>
`}listitem(o){return`<li>${this.parser.parse(o.tokens)}</li>
`}checkbox({checked:o}){return"<input "+(o?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:o}){return`<p>${this.parser.parseInline(o)}</p>
`}table(o){let i="",u="";for(let d=0;d<o.header.length;d++)u+=this.tablecell(o.header[d]);i+=this.tablerow({text:u});let c="";for(let d=0;d<o.rows.length;d++){let m=o.rows[d];u="";for(let p=0;p<m.length;p++)u+=this.tablecell(m[p]);c+=this.tablerow({text:u})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+c+`</table>
`}tablerow({text:o}){return`<tr>
${o}</tr>
`}tablecell(o){let i=this.parser.parseInline(o.tokens),u=o.header?"th":"td";return(o.align?`<${u} align="${o.align}">`:`<${u}>`)+i+`</${u}>
`}strong({tokens:o}){return`<strong>${this.parser.parseInline(o)}</strong>`}em({tokens:o}){return`<em>${this.parser.parseInline(o)}</em>`}codespan({text:o}){return`<code>${Xt(o,!0)}</code>`}br(o){return"<br>"}del({tokens:o}){return`<del>${this.parser.parseInline(o)}</del>`}link({href:o,title:i,tokens:u}){let c=this.parser.parseInline(u),d=Vh(o);if(d===null)return c;o=d;let m='<a href="'+o+'"';return i&&(m+=' title="'+Xt(i)+'"'),m+=">"+c+"</a>",m}image({href:o,title:i,text:u,tokens:c}){c&&(u=this.parser.parseInline(c,this.parser.textRenderer));let d=Vh(o);if(d===null)return Xt(u);o=d;let m=`<img src="${o}" alt="${u}"`;return i&&(m+=` title="${Xt(i)}"`),m+=">",m}text(o){return"tokens"in o&&o.tokens?this.parser.parseInline(o.tokens):"escaped"in o&&o.escaped?o.text:Xt(o.text)}},$c=class{strong({text:o}){return o}em({text:o}){return o}codespan({text:o}){return o}del({text:o}){return o}html({text:o}){return o}text({text:o}){return o}link({text:o}){return""+o}image({text:o}){return""+o}br(){return""}checkbox({raw:o}){return o}},mt=class Bc{options;renderer;textRenderer;constructor(i){this.options=i||Za,this.options.renderer=this.options.renderer||new pr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $c}static parse(i,u){return new Bc(u).parse(i)}static parseInline(i,u){return new Bc(u).parseInline(i)}parse(i){let u="";for(let c=0;c<i.length;c++){let d=i[c];if(this.options.extensions?.renderers?.[d.type]){let p=d,w=this.options.extensions.renderers[p.type].call({parser:this},p);if(w!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(p.type)){u+=w||"";continue}}let m=d;switch(m.type){case"space":{u+=this.renderer.space(m);break}case"hr":{u+=this.renderer.hr(m);break}case"heading":{u+=this.renderer.heading(m);break}case"code":{u+=this.renderer.code(m);break}case"table":{u+=this.renderer.table(m);break}case"blockquote":{u+=this.renderer.blockquote(m);break}case"list":{u+=this.renderer.list(m);break}case"checkbox":{u+=this.renderer.checkbox(m);break}case"html":{u+=this.renderer.html(m);break}case"def":{u+=this.renderer.def(m);break}case"paragraph":{u+=this.renderer.paragraph(m);break}case"text":{u+=this.renderer.text(m);break}default:{let p='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return u}parseInline(i,u=this.renderer){let c="";for(let d=0;d<i.length;d++){let m=i[d];if(this.options.extensions?.renderers?.[m.type]){let w=this.options.extensions.renderers[m.type].call({parser:this},m);if(w!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(m.type)){c+=w||"";continue}}let p=m;switch(p.type){case"escape":{c+=u.text(p);break}case"html":{c+=u.html(p);break}case"link":{c+=u.link(p);break}case"image":{c+=u.image(p);break}case"checkbox":{c+=u.checkbox(p);break}case"strong":{c+=u.strong(p);break}case"em":{c+=u.em(p);break}case"codespan":{c+=u.codespan(p);break}case"br":{c+=u.br(p);break}case"del":{c+=u.del(p);break}case"text":{c+=u.text(p);break}default:{let w='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(w),"";throw new Error(w)}}}return c}},Ls=class{options;block;constructor(o){this.options=o||Za}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(o){return o}postprocess(o){return o}processAllTokens(o){return o}emStrongMask(o){return o}provideLexer(){return this.block?pt.lex:pt.lexInline}provideParser(){return this.block?mt.parse:mt.parseInline}},Rb=class{defaults=Yc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=mt;Renderer=pr;TextRenderer=$c;Lexer=pt;Tokenizer=hr;Hooks=Ls;constructor(...o){this.use(...o)}walkTokens(o,i){let u=[];for(let c of o)switch(u=u.concat(i.call(this,c)),c.type){case"table":{let d=c;for(let m of d.header)u=u.concat(this.walkTokens(m.tokens,i));for(let m of d.rows)for(let p of m)u=u.concat(this.walkTokens(p.tokens,i));break}case"list":{let d=c;u=u.concat(this.walkTokens(d.items,i));break}default:{let d=c;this.defaults.extensions?.childTokens?.[d.type]?this.defaults.extensions.childTokens[d.type].forEach(m=>{let p=d[m].flat(1/0);u=u.concat(this.walkTokens(p,i))}):d.tokens&&(u=u.concat(this.walkTokens(d.tokens,i)))}}return u}use(...o){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return o.forEach(u=>{let c={...u};if(c.async=this.defaults.async||c.async||!1,u.extensions&&(u.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){let m=i.renderers[d.name];m?i.renderers[d.name]=function(...p){let w=d.renderer.apply(this,p);return w===!1&&(w=m.apply(this,p)),w}:i.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let m=i[d.level];m?m.unshift(d.tokenizer):i[d.level]=[d.tokenizer],d.start&&(d.level==="block"?i.startBlock?i.startBlock.push(d.start):i.startBlock=[d.start]:d.level==="inline"&&(i.startInline?i.startInline.push(d.start):i.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(i.childTokens[d.name]=d.childTokens)}),c.extensions=i),u.renderer){let d=this.defaults.renderer||new pr(this.defaults);for(let m in u.renderer){if(!(m in d))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;let p=m,w=u.renderer[p],b=d[p];d[p]=(...v)=>{let C=w.apply(d,v);return C===!1&&(C=b.apply(d,v)),C||""}}c.renderer=d}if(u.tokenizer){let d=this.defaults.tokenizer||new hr(this.defaults);for(let m in u.tokenizer){if(!(m in d))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;let p=m,w=u.tokenizer[p],b=d[p];d[p]=(...v)=>{let C=w.apply(d,v);return C===!1&&(C=b.apply(d,v)),C}}c.tokenizer=d}if(u.hooks){let d=this.defaults.hooks||new Ls;for(let m in u.hooks){if(!(m in d))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;let p=m,w=u.hooks[p],b=d[p];Ls.passThroughHooks.has(m)?d[p]=v=>{if(this.defaults.async&&Ls.passThroughHooksRespectAsync.has(m))return(async()=>{let D=await w.call(d,v);return b.call(d,D)})();let C=w.call(d,v);return b.call(d,C)}:d[p]=(...v)=>{if(this.defaults.async)return(async()=>{let D=await w.apply(d,v);return D===!1&&(D=await b.apply(d,v)),D})();let C=w.apply(d,v);return C===!1&&(C=b.apply(d,v)),C}}c.hooks=d}if(u.walkTokens){let d=this.defaults.walkTokens,m=u.walkTokens;c.walkTokens=function(p){let w=[];return w.push(m.call(this,p)),d&&(w=w.concat(d.call(this,p))),w}}this.defaults={...this.defaults,...c}}),this}setOptions(o){return this.defaults={...this.defaults,...o},this}lexer(o,i){return pt.lex(o,i??this.defaults)}parser(o,i){return mt.parse(o,i??this.defaults)}parseMarkdown(o){return(i,u)=>{let c={...u},d={...this.defaults,...c},m=this.onError(!!d.silent,!!d.async);if(this.defaults.async===!0&&c.async===!1)return m(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(d.hooks&&(d.hooks.options=d,d.hooks.block=o),d.async)return(async()=>{let p=d.hooks?await d.hooks.preprocess(i):i,w=await(d.hooks?await d.hooks.provideLexer():o?pt.lex:pt.lexInline)(p,d),b=d.hooks?await d.hooks.processAllTokens(w):w;d.walkTokens&&await Promise.all(this.walkTokens(b,d.walkTokens));let v=await(d.hooks?await d.hooks.provideParser():o?mt.parse:mt.parseInline)(b,d);return d.hooks?await d.hooks.postprocess(v):v})().catch(m);try{d.hooks&&(i=d.hooks.preprocess(i));let p=(d.hooks?d.hooks.provideLexer():o?pt.lex:pt.lexInline)(i,d);d.hooks&&(p=d.hooks.processAllTokens(p)),d.walkTokens&&this.walkTokens(p,d.walkTokens);let w=(d.hooks?d.hooks.provideParser():o?mt.parse:mt.parseInline)(p,d);return d.hooks&&(w=d.hooks.postprocess(w)),w}catch(p){return m(p)}}}onError(o,i){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,o){let c="<p>An error occurred:</p><pre>"+Xt(u.message+"",!0)+"</pre>";return i?Promise.resolve(c):c}if(i)return Promise.reject(u);throw u}}},Xa=new Rb;function De(o,i){return Xa.parse(o,i)}De.options=De.setOptions=function(o){return Xa.setOptions(o),De.defaults=Xa.defaults,lp(De.defaults),De};De.getDefaults=Yc;De.defaults=Za;De.use=function(...o){return Xa.use(...o),De.defaults=Xa.defaults,lp(De.defaults),De};De.walkTokens=function(o,i){return Xa.walkTokens(o,i)};De.parseInline=Xa.parseInline;De.Parser=mt;De.parser=mt.parse;De.Renderer=pr;De.TextRenderer=$c;De.Lexer=pt;De.lexer=pt.lex;De.Tokenizer=hr;De.Hooks=Ls;De.parse=De;De.options;De.setOptions;De.use;De.walkTokens;De.parseInline;mt.parse;pt.lex;var zc,Ph;function Nb(){if(Ph)return zc;Ph=1;function o(y){return y instanceof Map?y.clear=y.delete=y.set=function(){throw new Error("map is read-only")}:y instanceof Set&&(y.add=y.clear=y.delete=function(){throw new Error("set is read-only")}),Object.freeze(y),Object.getOwnPropertyNames(y).forEach(j=>{const Y=y[j],oe=typeof Y;(oe==="object"||oe==="function")&&!Object.isFrozen(Y)&&o(Y)}),y}class i{constructor(j){j.data===void 0&&(j.data={}),this.data=j.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function u(y){return y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(y,...j){const Y=Object.create(null);for(const oe in y)Y[oe]=y[oe];return j.forEach(function(oe){for(const Ve in oe)Y[Ve]=oe[Ve]}),Y}const d="</span>",m=y=>!!y.scope,p=(y,{prefix:j})=>{if(y.startsWith("language:"))return y.replace("language:","language-");if(y.includes(".")){const Y=y.split(".");return[`${j}${Y.shift()}`,...Y.map((oe,Ve)=>`${oe}${"_".repeat(Ve+1)}`)].join(" ")}return`${j}${y}`};class w{constructor(j,Y){this.buffer="",this.classPrefix=Y.classPrefix,j.walk(this)}addText(j){this.buffer+=u(j)}openNode(j){if(!m(j))return;const Y=p(j.scope,{prefix:this.classPrefix});this.span(Y)}closeNode(j){m(j)&&(this.buffer+=d)}value(){return this.buffer}span(j){this.buffer+=`<span class="${j}">`}}const b=(y={})=>{const j={children:[]};return Object.assign(j,y),j};class v{constructor(){this.rootNode=b(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(j){this.top.children.push(j)}openNode(j){const Y=b({scope:j});this.add(Y),this.stack.push(Y)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(j){return this.constructor._walk(j,this.rootNode)}static _walk(j,Y){return typeof Y=="string"?j.addText(Y):Y.children&&(j.openNode(Y),Y.children.forEach(oe=>this._walk(j,oe)),j.closeNode(Y)),j}static _collapse(j){typeof j!="string"&&j.children&&(j.children.every(Y=>typeof Y=="string")?j.children=[j.children.join("")]:j.children.forEach(Y=>{v._collapse(Y)}))}}class C extends v{constructor(j){super(),this.options=j}addText(j){j!==""&&this.add(j)}startScope(j){this.openNode(j)}endScope(){this.closeNode()}__addSublanguage(j,Y){const oe=j.root;Y&&(oe.scope=`language:${Y}`),this.add(oe)}toHTML(){return new w(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function D(y){return y?typeof y=="string"?y:y.source:null}function _(y){return K("(?=",y,")")}function I(y){return K("(?:",y,")*")}function q(y){return K("(?:",y,")?")}function K(...y){return y.map(Y=>D(Y)).join("")}function Ae(y){const j=y[y.length-1];return typeof j=="object"&&j.constructor===Object?(y.splice(y.length-1,1),j):{}}function ze(...y){return"("+(Ae(y).capture?"":"?:")+y.map(oe=>D(oe)).join("|")+")"}function we(y){return new RegExp(y.toString()+"|").exec("").length-1}function V(y,j){const Y=y&&y.exec(j);return Y&&Y.index===0}const re=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ie(y,{joinWith:j}){let Y=0;return y.map(oe=>{Y+=1;const Ve=Y;let Ge=D(oe),$="";for(;Ge.length>0;){const X=re.exec(Ge);if(!X){$+=Ge;break}$+=Ge.substring(0,X.index),Ge=Ge.substring(X.index+X[0].length),X[0][0]==="\\"&&X[1]?$+="\\"+String(Number(X[1])+Ve):($+=X[0],X[0]==="("&&Y++)}return $}).map(oe=>`(${oe})`).join(j)}const ye=/\b\B/,te="[a-zA-Z]\\w*",Te="[a-zA-Z_]\\w*",Pe="\\b\\d+(\\.\\d+)?",en="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Fe="\\b(0b[01]+)",nn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Sn=(y={})=>{const j=/^#![ ]*\//;return y.binary&&(y.begin=K(j,/.*\b/,y.binary,/\b.*/)),c({scope:"meta",begin:j,end:/$/,relevance:0,"on:begin":(Y,oe)=>{Y.index!==0&&oe.ignoreMatch()}},y)},tn={begin:"\\\\[\\s\\S]",relevance:0},vn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[tn]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[tn]},O={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},H=function(y,j,Y={}){const oe=c({scope:"comment",begin:y,end:j,contains:[]},Y);oe.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Ve=ze("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return oe.contains.push({begin:K(/[ ]+/,"(",Ve,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),oe},J=H("//","$"),de=H("/\\*","\\*/"),x=H("#","$"),z={scope:"number",begin:Pe,relevance:0},G={scope:"number",begin:en,relevance:0},P={scope:"number",begin:Fe,relevance:0},ce={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[tn,{begin:/\[/,end:/\]/,relevance:0,contains:[tn]}]},ge={scope:"title",begin:te,relevance:0},Re={scope:"title",begin:Te,relevance:0},kn={begin:"\\.\\s*"+Te,relevance:0};var gt=Object.freeze({__proto__:null,APOS_STRING_MODE:vn,BACKSLASH_ESCAPE:tn,BINARY_NUMBER_MODE:P,BINARY_NUMBER_RE:Fe,COMMENT:H,C_BLOCK_COMMENT_MODE:de,C_LINE_COMMENT_MODE:J,C_NUMBER_MODE:G,C_NUMBER_RE:en,END_SAME_AS_BEGIN:function(y){return Object.assign(y,{"on:begin":(j,Y)=>{Y.data._beginMatch=j[1]},"on:end":(j,Y)=>{Y.data._beginMatch!==j[1]&&Y.ignoreMatch()}})},HASH_COMMENT_MODE:x,IDENT_RE:te,MATCH_NOTHING_RE:ye,METHOD_GUARD:kn,NUMBER_MODE:z,NUMBER_RE:Pe,PHRASAL_WORDS_MODE:O,QUOTE_STRING_MODE:N,REGEXP_MODE:ce,RE_STARTERS_RE:nn,SHEBANG:Sn,TITLE_MODE:ge,UNDERSCORE_IDENT_RE:Te,UNDERSCORE_TITLE_MODE:Re});function Ka(y,j){y.input[y.index-1]==="."&&j.ignoreMatch()}function zl(y,j){y.className!==void 0&&(y.scope=y.className,delete y.className)}function Gs(y,j){j&&y.beginKeywords&&(y.begin="\\b("+y.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",y.__beforeBegin=Ka,y.keywords=y.keywords||y.beginKeywords,delete y.beginKeywords,y.relevance===void 0&&(y.relevance=0))}function kt(y,j){Array.isArray(y.illegal)&&(y.illegal=ze(...y.illegal))}function Dl(y,j){if(y.match){if(y.begin||y.end)throw new Error("begin & end are not supported with match");y.begin=y.match,delete y.match}}function jl(y,j){y.relevance===void 0&&(y.relevance=1)}const vr=(y,j)=>{if(!y.beforeMatch)return;if(y.starts)throw new Error("beforeMatch cannot be used with starts");const Y=Object.assign({},y);Object.keys(y).forEach(oe=>{delete y[oe]}),y.keywords=Y.keywords,y.begin=K(Y.beforeMatch,_(Y.begin)),y.starts={relevance:0,contains:[Object.assign(Y,{endsParent:!0})]},y.relevance=0,delete Y.beforeMatch},Ys=["of","and","for","in","not","or","if","then","parent","list","value"],Ul="keyword";function Pa(y,j,Y=Ul){const oe=Object.create(null);return typeof y=="string"?Ve(Y,y.split(" ")):Array.isArray(y)?Ve(Y,y):Object.keys(y).forEach(function(Ge){Object.assign(oe,Pa(y[Ge],j,Ge))}),oe;function Ve(Ge,$){j&&($=$.map(X=>X.toLowerCase())),$.forEach(function(X){const se=X.split("|");oe[se[0]]=[Ge,Ll(se[0],se[1])]})}}function Ll(y,j){return j?Number(j):xr(y)?0:1}function xr(y){return Ys.includes(y.toLowerCase())}const Is={},rn=y=>{console.error(y)},Xs=(y,...j)=>{console.log(`WARN: ${y}`,...j)},wt=(y,j)=>{Is[`${y}/${j}`]||(console.log(`Deprecated as of ${y}. ${j}`),Is[`${y}/${j}`]=!0)},Sa=new Error;function Ea(y,j,{key:Y}){let oe=0;const Ve=y[Y],Ge={},$={};for(let X=1;X<=j.length;X++)$[X+oe]=Ve[X],Ge[X+oe]=!0,oe+=we(j[X-1]);y[Y]=$,y[Y]._emit=Ge,y[Y]._multi=!0}function Sr(y){if(Array.isArray(y.begin)){if(y.skip||y.excludeBegin||y.returnBegin)throw rn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Sa;if(typeof y.beginScope!="object"||y.beginScope===null)throw rn("beginScope must be object"),Sa;Ea(y,y.begin,{key:"beginScope"}),y.begin=ie(y.begin,{joinWith:""})}}function Vs(y){if(Array.isArray(y.end)){if(y.skip||y.excludeEnd||y.returnEnd)throw rn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Sa;if(typeof y.endScope!="object"||y.endScope===null)throw rn("endScope must be object"),Sa;Ea(y,y.end,{key:"endScope"}),y.end=ie(y.end,{joinWith:""})}}function Er(y){y.scope&&typeof y.scope=="object"&&y.scope!==null&&(y.beginScope=y.scope,delete y.scope)}function kr(y){Er(y),typeof y.beginScope=="string"&&(y.beginScope={_wrap:y.beginScope}),typeof y.endScope=="string"&&(y.endScope={_wrap:y.endScope}),Sr(y),Vs(y)}function ka(y){function j($,X){return new RegExp(D($),"m"+(y.case_insensitive?"i":"")+(y.unicodeRegex?"u":"")+(X?"g":""))}class Y{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(X,se){se.position=this.position++,this.matchIndexes[this.matchAt]=se,this.regexes.push([se,X]),this.matchAt+=we(X)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const X=this.regexes.map(se=>se[1]);this.matcherRe=j(ie(X,{joinWith:"|"}),!0),this.lastIndex=0}exec(X){this.matcherRe.lastIndex=this.lastIndex;const se=this.matcherRe.exec(X);if(!se)return null;const on=se.findIndex((Tt,$a)=>$a>0&&Tt!==void 0),Je=this.matchIndexes[on];return se.splice(0,on),Object.assign(se,Je)}}class oe{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(X){if(this.multiRegexes[X])return this.multiRegexes[X];const se=new Y;return this.rules.slice(X).forEach(([on,Je])=>se.addRule(on,Je)),se.compile(),this.multiRegexes[X]=se,se}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(X,se){this.rules.push([X,se]),se.type==="begin"&&this.count++}exec(X){const se=this.getMatcher(this.regexIndex);se.lastIndex=this.lastIndex;let on=se.exec(X);if(this.resumingScanAtSamePosition()&&!(on&&on.index===this.lastIndex)){const Je=this.getMatcher(0);Je.lastIndex=this.lastIndex+1,on=Je.exec(X)}return on&&(this.regexIndex+=on.position+1,this.regexIndex===this.count&&this.considerAll()),on}}function Ve($){const X=new oe;return $.contains.forEach(se=>X.addRule(se.begin,{rule:se,type:"begin"})),$.terminatorEnd&&X.addRule($.terminatorEnd,{type:"end"}),$.illegal&&X.addRule($.illegal,{type:"illegal"}),X}function Ge($,X){const se=$;if($.isCompiled)return se;[zl,Dl,kr,vr].forEach(Je=>Je($,X)),y.compilerExtensions.forEach(Je=>Je($,X)),$.__beforeBegin=null,[Gs,kt,jl].forEach(Je=>Je($,X)),$.isCompiled=!0;let on=null;return typeof $.keywords=="object"&&$.keywords.$pattern&&($.keywords=Object.assign({},$.keywords),on=$.keywords.$pattern,delete $.keywords.$pattern),on=on||/\w+/,$.keywords&&($.keywords=Pa($.keywords,y.case_insensitive)),se.keywordPatternRe=j(on,!0),X&&($.begin||($.begin=/\B|\b/),se.beginRe=j(se.begin),!$.end&&!$.endsWithParent&&($.end=/\B|\b/),$.end&&(se.endRe=j(se.end)),se.terminatorEnd=D(se.end)||"",$.endsWithParent&&X.terminatorEnd&&(se.terminatorEnd+=($.end?"|":"")+X.terminatorEnd)),$.illegal&&(se.illegalRe=j($.illegal)),$.contains||($.contains=[]),$.contains=[].concat(...$.contains.map(function(Je){return yt(Je==="self"?$:Je)})),$.contains.forEach(function(Je){Ge(Je,se)}),$.starts&&Ge($.starts,X),se.matcher=Ve(se),se}if(y.compilerExtensions||(y.compilerExtensions=[]),y.contains&&y.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return y.classNameAliases=c(y.classNameAliases||{}),Ge(y)}function Nn(y){return y?y.endsWithParent||Nn(y.starts):!1}function yt(y){return y.variants&&!y.cachedVariants&&(y.cachedVariants=y.variants.map(function(j){return c(y,{variants:null},j)})),y.cachedVariants?y.cachedVariants:Nn(y)?c(y,{starts:y.starts?c(y.starts):null}):Object.isFrozen(y)?c(y):y}var zn="11.11.1";class wr extends Error{constructor(j,Y){super(j),this.name="HTMLInjectionError",this.html=Y}}const Bl=u,Zs=c,wa=Symbol("nomatch"),Ja=7,Ta=function(y){const j=Object.create(null),Y=Object.create(null),oe=[];let Ve=!0;const Ge="Could not find the language '{}', did you forget to load/include a language module?",$={disableAutodetect:!0,name:"Plain text",contains:[]};let X={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:C};function se(B){return X.noHighlightRe.test(B)}function on(B){let ee=B.className+" ";ee+=B.parentNode?B.parentNode.className:"";const be=X.languageDetectRe.exec(ee);if(be){const je=Dn(be[1]);return je||(Xs(Ge.replace("{}",be[1])),Xs("Falling back to no-highlight mode for this block.",B)),je?be[1]:"no-highlight"}return ee.split(/\s+/).find(je=>se(je)||Dn(je))}function Je(B,ee,be){let je="",un="";typeof ee=="object"?(je=B,be=ee.ignoreIllegals,un=ee.language):(wt("10.7.0","highlight(lang, code, ...args) has been deprecated."),wt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),un=B,je=ee),be===void 0&&(be=!0);const Mn={code:je,language:un};Aa("before:highlight",Mn);const Vn=Mn.result?Mn.result:Tt(Mn.language,Mn.code,be);return Vn.code=Mn.code,Aa("after:highlight",Vn),Vn}function Tt(B,ee,be,je){const un=Object.create(null);function Mn(Q,F){return Q.keywords[F]}function Vn(){if(!le.keywords){pn.addText(Ue);return}let Q=0;le.keywordPatternRe.lastIndex=0;let F=le.keywordPatternRe.exec(Ue),fe="";for(;F;){fe+=Ue.substring(Q,F.index);const Se=wn.case_insensitive?F[0].toLowerCase():F[0],We=Mn(le,Se);if(We){const[tt,Il]=We;if(pn.addText(fe),fe="",un[Se]=(un[Se]||0)+1,un[Se]<=Ja&&(Pt+=Il),tt.startsWith("_"))fe+=F[0];else{const ei=wn.classNameAliases[tt]||tt;Zn(F[0],ei)}}else fe+=F[0];Q=le.keywordPatternRe.lastIndex,F=le.keywordPatternRe.exec(Ue)}fe+=Ue.substring(Q),pn.addText(fe)}function Bn(){if(Ue==="")return;let Q=null;if(typeof le.subLanguage=="string"){if(!j[le.subLanguage]){pn.addText(Ue);return}Q=Tt(le.subLanguage,Ue,!0,Ws[le.subLanguage]),Ws[le.subLanguage]=Q._top}else Q=Fa(Ue,le.subLanguage.length?le.subLanguage:null);le.relevance>0&&(Pt+=Q.relevance),pn.__addSublanguage(Q._emitter,Q.language)}function Ie(){le.subLanguage!=null?Bn():Vn(),Ue=""}function Zn(Q,F){Q!==""&&(pn.startScope(F),pn.addText(Q),pn.endScope())}function $s(Q,F){let fe=1;const Se=F.length-1;for(;fe<=Se;){if(!Q._emit[fe]){fe++;continue}const We=wn.classNameAliases[Q[fe]]||Q[fe],tt=F[fe];We?Zn(tt,We):(Ue=tt,Vn(),Ue=""),fe++}}function el(Q,F){return Q.scope&&typeof Q.scope=="string"&&pn.openNode(wn.classNameAliases[Q.scope]||Q.scope),Q.beginScope&&(Q.beginScope._wrap?(Zn(Ue,wn.classNameAliases[Q.beginScope._wrap]||Q.beginScope._wrap),Ue=""):Q.beginScope._multi&&($s(Q.beginScope,F),Ue="")),le=Object.create(Q,{parent:{value:le}}),le}function Ql(Q,F,fe){let Se=V(Q.endRe,fe);if(Se){if(Q["on:end"]){const We=new i(Q);Q["on:end"](F,We),We.isMatchIgnored&&(Se=!1)}if(Se){for(;Q.endsParent&&Q.parent;)Q=Q.parent;return Q}}if(Q.endsWithParent)return Ql(Q.parent,F,fe)}function nl(Q){return le.matcher.regexIndex===0?(Ue+=Q[0],1):(Jt=!0,0)}function Tr(Q){const F=Q[0],fe=Q.rule,Se=new i(fe),We=[fe.__beforeBegin,fe["on:begin"]];for(const tt of We)if(tt&&(tt(Q,Se),Se.isMatchIgnored))return nl(F);return fe.skip?Ue+=F:(fe.excludeBegin&&(Ue+=F),Ie(),!fe.returnBegin&&!fe.excludeBegin&&(Ue=F)),el(fe,Q),fe.returnBegin?0:F.length}function Hn(Q){const F=Q[0],fe=ee.substring(Q.index),Se=Ql(le,Q,fe);if(!Se)return wa;const We=le;le.endScope&&le.endScope._wrap?(Ie(),Zn(F,le.endScope._wrap)):le.endScope&&le.endScope._multi?(Ie(),$s(le.endScope,Q)):We.skip?Ue+=F:(We.returnEnd||We.excludeEnd||(Ue+=F),Ie(),We.excludeEnd&&(Ue=F));do le.scope&&pn.closeNode(),!le.skip&&!le.subLanguage&&(Pt+=le.relevance),le=le.parent;while(le!==Se.parent);return Se.starts&&el(Se.starts,Q),We.returnEnd?0:F.length}function Gl(){const Q=[];for(let F=le;F!==wn;F=F.parent)F.scope&&Q.unshift(F.scope);Q.forEach(F=>pn.openNode(F))}let Ra={};function tl(Q,F){const fe=F&&F[0];if(Ue+=Q,fe==null)return Ie(),0;if(Ra.type==="begin"&&F.type==="end"&&Ra.index===F.index&&fe===""){if(Ue+=ee.slice(F.index,F.index+1),!Ve){const Se=new Error(`0 width match regex (${B})`);throw Se.languageName=B,Se.badRule=Ra.rule,Se}return 1}if(Ra=F,F.type==="begin")return Tr(F);if(F.type==="illegal"&&!be){const Se=new Error('Illegal lexeme "'+fe+'" for mode "'+(le.scope||"<unnamed>")+'"');throw Se.mode=le,Se}else if(F.type==="end"){const Se=Hn(F);if(Se!==wa)return Se}if(F.type==="illegal"&&fe==="")return Ue+=`
`,1;if(Yl>1e5&&Yl>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ue+=fe,fe.length}const wn=Dn(B);if(!wn)throw rn(Ge.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Fs=ka(wn);let al="",le=je||Fs;const Ws={},pn=new X.__emitter(X);Gl();let Ue="",Pt=0,Rt=0,Yl=0,Jt=!1;try{if(wn.__emitTokens)wn.__emitTokens(ee,pn);else{for(le.matcher.considerAll();;){Yl++,Jt?Jt=!1:le.matcher.considerAll(),le.matcher.lastIndex=Rt;const Q=le.matcher.exec(ee);if(!Q)break;const F=ee.substring(Rt,Q.index),fe=tl(F,Q);Rt=Q.index+fe}tl(ee.substring(Rt))}return pn.finalize(),al=pn.toHTML(),{language:B,value:al,relevance:Pt,illegal:!1,_emitter:pn,_top:le}}catch(Q){if(Q.message&&Q.message.includes("Illegal"))return{language:B,value:Bl(ee),illegal:!0,relevance:0,_illegalBy:{message:Q.message,index:Rt,context:ee.slice(Rt-100,Rt+100),mode:Q.mode,resultSoFar:al},_emitter:pn};if(Ve)return{language:B,value:Bl(ee),illegal:!1,relevance:0,errorRaised:Q,_emitter:pn,_top:le};throw Q}}function $a(B){const ee={value:Bl(B),illegal:!1,relevance:0,_top:$,_emitter:new X.__emitter(X)};return ee._emitter.addText(B),ee}function Fa(B,ee){ee=ee||X.languages||Object.keys(j);const be=$a(B),je=ee.filter(Dn).filter(Zt).map(Ie=>Tt(Ie,B,!1));je.unshift(be);const un=je.sort((Ie,Zn)=>{if(Ie.relevance!==Zn.relevance)return Zn.relevance-Ie.relevance;if(Ie.language&&Zn.language){if(Dn(Ie.language).supersetOf===Zn.language)return 1;if(Dn(Zn.language).supersetOf===Ie.language)return-1}return 0}),[Mn,Vn]=un,Bn=Mn;return Bn.secondBest=Vn,Bn}function bt(B,ee,be){const je=ee&&Y[ee]||be;B.classList.add("hljs"),B.classList.add(`language-${je}`)}function cn(B){let ee=null;const be=on(B);if(se(be))return;if(Aa("before:highlightElement",{el:B,language:be}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(X.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),X.throwUnescapedHTML))throw new wr("One of your code blocks includes unescaped HTML.",B.innerHTML);ee=B;const je=ee.textContent,un=be?Je(je,{language:be,ignoreIllegals:!0}):Fa(je);B.innerHTML=un.value,B.dataset.highlighted="yes",bt(B,be,un.language),B.result={language:un.language,re:un.relevance,relevance:un.relevance},un.secondBest&&(B.secondBest={language:un.secondBest.language,relevance:un.secondBest.relevance}),Aa("after:highlightElement",{el:B,result:un,text:je})}function _n(B){X=Zs(X,B)}const Vt=()=>{Wa(),wt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Hl(){Wa(),wt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ks=!1;function Wa(){function B(){Wa()}if(document.readyState==="loading"){Ks||window.addEventListener("DOMContentLoaded",B,!1),Ks=!0;return}document.querySelectorAll(X.cssSelector).forEach(cn)}function Ps(B,ee){let be=null;try{be=ee(y)}catch(je){if(rn("Language definition for '{}' could not be registered.".replace("{}",B)),Ve)rn(je);else throw je;be=$}be.name||(be.name=B),j[B]=be,be.rawDefinition=ee.bind(null,y),be.aliases&&Ct(be.aliases,{languageName:B})}function Ca(B){delete j[B];for(const ee of Object.keys(Y))Y[ee]===B&&delete Y[ee]}function ql(){return Object.keys(j)}function Dn(B){return B=(B||"").toLowerCase(),j[B]||j[Y[B]]}function Ct(B,{languageName:ee}){typeof B=="string"&&(B=[B]),B.forEach(be=>{Y[be.toLowerCase()]=ee})}function Zt(B){const ee=Dn(B);return ee&&!ee.disableAutodetect}function Kt(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=ee=>{B["before:highlightBlock"](Object.assign({block:ee.el},ee))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=ee=>{B["after:highlightBlock"](Object.assign({block:ee.el},ee))})}function hn(B){Kt(B),oe.push(B)}function Js(B){const ee=oe.indexOf(B);ee!==-1&&oe.splice(ee,1)}function Aa(B,ee){const be=B;oe.forEach(function(je){je[be]&&je[be](ee)})}function At(B){return wt("10.7.0","highlightBlock will be removed entirely in v12.0"),wt("10.7.0","Please use highlightElement now."),cn(B)}Object.assign(y,{highlight:Je,highlightAuto:Fa,highlightAll:Wa,highlightElement:cn,highlightBlock:At,configure:_n,initHighlighting:Vt,initHighlightingOnLoad:Hl,registerLanguage:Ps,unregisterLanguage:Ca,listLanguages:ql,getLanguage:Dn,registerAliases:Ct,autoDetection:Zt,inherit:Zs,addPlugin:hn,removePlugin:Js}),y.debugMode=function(){Ve=!1},y.safeMode=function(){Ve=!0},y.versionString=zn,y.regex={concat:K,lookahead:_,either:ze,optional:q,anyNumberOfTimes:I};for(const B in gt)typeof gt[B]=="object"&&o(gt[B]);return Object.assign(y,gt),y},Ln=Ta({});return Ln.newInstance=()=>Ta({}),zc=Ln,Ln.HighlightJS=Ln,Ln.default=Ln,zc}var _b=Nb();const nt=_g(_b),Jh="[A-Za-z$_][0-9A-Za-z$_]*",Mb=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Ob=["true","false","null","undefined","NaN","Infinity"],mp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yp=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],zb=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Db=[].concat(yp,mp,gp);function Fc(o){const i=o.regex,u=(H,{after:J})=>{const de="</"+H[0].slice(1);return H.input.indexOf(de,J)!==-1},c=Jh,d={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,p={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(H,J)=>{const de=H[0].length+H.index,x=H.input[de];if(x==="<"||x===","){J.ignoreMatch();return}x===">"&&(u(H,{after:de})||J.ignoreMatch());let z;const G=H.input.substring(de);if(z=G.match(/^\s*=/)){J.ignoreMatch();return}if((z=G.match(/^\s+extends\s+/))&&z.index===0){J.ignoreMatch();return}}},w={$pattern:Jh,keyword:Mb,literal:Ob,built_in:Db,"variable.language":zb},b="[0-9](_?[0-9])*",v=`\\.(${b})`,C="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",D={className:"number",variants:[{begin:`(\\b(${C})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${C})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},_={className:"subst",begin:"\\$\\{",end:"\\}",keywords:w,contains:[]},I={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"xml"}},q={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"css"}},K={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"graphql"}},Ae={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,_]},we={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},V=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,q,K,Ae,{match:/\$\d+/},D];_.contains=V.concat({begin:/\{/,end:/\}/,keywords:w,contains:["self"].concat(V)});const re=[].concat(we,_.contains),ie=re.concat([{begin:/(\s*)\(/,end:/\)/,keywords:w,contains:["self"].concat(re)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:w,contains:ie},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,i.concat(c,"(",i.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...mp,...gp]}},Pe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(H){return i.concat("(?!",H.join("|"),")")}const Sn={match:i.concat(/\b/,nn([...yp,"super","import"].map(H=>`${H}\\s*\\(`)),c,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:i.concat(/\./,i.lookahead(i.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:w,exports:{PARAMS_CONTAINS:ie,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),Pe,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,q,K,Ae,we,{match:/\$\d+/},D,Te,{scope:"attr",match:c+i.lookahead(":"),relevance:0},O,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[we,o.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:w,contains:ie}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:m},{begin:p.begin,"on:begin":p.isTrulyOpeningTag,end:p.end}],subLanguage:"xml",contains:[{begin:p.begin,end:p.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,o.inherit(o.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Fe,te,vn,{match:/\$[(.]/}]}}const mr="[A-Za-z$_][0-9A-Za-z$_]*",bp=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],vp=["true","false","null","undefined","NaN","Infinity"],xp=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Sp=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ep=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],kp=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],wp=[].concat(Ep,xp,Sp);function jb(o){const i=o.regex,u=(H,{after:J})=>{const de="</"+H[0].slice(1);return H.input.indexOf(de,J)!==-1},c=mr,d={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,p={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(H,J)=>{const de=H[0].length+H.index,x=H.input[de];if(x==="<"||x===","){J.ignoreMatch();return}x===">"&&(u(H,{after:de})||J.ignoreMatch());let z;const G=H.input.substring(de);if(z=G.match(/^\s*=/)){J.ignoreMatch();return}if((z=G.match(/^\s+extends\s+/))&&z.index===0){J.ignoreMatch();return}}},w={$pattern:mr,keyword:bp,literal:vp,built_in:wp,"variable.language":kp},b="[0-9](_?[0-9])*",v=`\\.(${b})`,C="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",D={className:"number",variants:[{begin:`(\\b(${C})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${C})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},_={className:"subst",begin:"\\$\\{",end:"\\}",keywords:w,contains:[]},I={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"xml"}},q={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"css"}},K={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,_],subLanguage:"graphql"}},Ae={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,_]},we={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},V=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,q,K,Ae,{match:/\$\d+/},D];_.contains=V.concat({begin:/\{/,end:/\}/,keywords:w,contains:["self"].concat(V)});const re=[].concat(we,_.contains),ie=re.concat([{begin:/(\s*)\(/,end:/\)/,keywords:w,contains:["self"].concat(re)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:w,contains:ie},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,i.concat(c,"(",i.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xp,...Sp]}},Pe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(H){return i.concat("(?!",H.join("|"),")")}const Sn={match:i.concat(/\b/,nn([...Ep,"super","import"].map(H=>`${H}\\s*\\(`)),c,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:i.concat(/\./,i.lookahead(i.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:w,exports:{PARAMS_CONTAINS:ie,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),Pe,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,I,q,K,Ae,we,{match:/\$\d+/},D,Te,{scope:"attr",match:c+i.lookahead(":"),relevance:0},O,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[we,o.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:w,contains:ie}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:m},{begin:p.begin,"on:begin":p.isTrulyOpeningTag,end:p.end}],subLanguage:"xml",contains:[{begin:p.begin,end:p.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,o.inherit(o.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Fe,te,vn,{match:/\$[(.]/}]}}function Wc(o){const i=o.regex,u=jb(o),c=mr,d=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],m={begin:[/namespace/,/\s+/,o.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},p={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:d},contains:[u.exports.CLASS_REFERENCE]},w={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},b=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],v={$pattern:mr,keyword:bp.concat(b),literal:vp,built_in:wp.concat(d),"variable.language":kp},C={className:"meta",begin:"@"+c},D=(K,Ae,ze)=>{const we=K.contains.findIndex(V=>V.label===Ae);if(we===-1)throw new Error("can not find mode to replace");K.contains.splice(we,1,ze)};Object.assign(u.keywords,v),u.exports.PARAMS_CONTAINS.push(C);const _=u.contains.find(K=>K.scope==="attr"),I=Object.assign({},_,{match:i.concat(c,i.lookahead(/\s*\?:/))});u.exports.PARAMS_CONTAINS.push([u.exports.CLASS_REFERENCE,_,I]),u.contains=u.contains.concat([C,m,p,I]),D(u,"shebang",o.SHEBANG()),D(u,"use_strict",w);const q=u.contains.find(K=>K.label==="func.def");return q.relevance=0,Object.assign(u,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),u}function Tp(o){const i=o.regex,u=i.concat(/[\p{L}_]/u,i.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),c=/[\p{L}0-9._:-]+/u,d={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},m={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},p=o.inherit(m,{begin:/\(/,end:/\)/}),w=o.inherit(o.APOS_STRING_MODE,{className:"string"}),b=o.inherit(o.QUOTE_STRING_MODE,{className:"string"}),v={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:c,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[d]},{begin:/'/,end:/'/,contains:[d]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[m,b,w,p,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[m,p,b,w]}]}]},o.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},d,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[b]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[v],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[v],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:i.concat(/</,i.lookahead(i.concat(u,i.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:u,relevance:0,starts:v}]},{className:"tag",begin:i.concat(/<\//,i.lookahead(i.concat(u,/>/))),contains:[{className:"name",begin:u,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ub=o=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:o.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:o.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Lb=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Bb=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Hb=[...Lb,...Bb],qb=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Qb=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Gb=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),Yb=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function Ib(o){const i=o.regex,u=Ub(o),c={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},d="and or not only",m=/@-?\w[\w]*(-\w+)*/,p="[a-zA-Z-][a-zA-Z0-9_-]*",w=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[u.BLOCK_COMMENT,c,u.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+p,relevance:0},u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Qb.join("|")+")"},{begin:":(:)?("+Gb.join("|")+")"}]},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Yb.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[u.BLOCK_COMMENT,u.HEXCOLOR,u.IMPORTANT,u.CSS_NUMBER_MODE,...w,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...w,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},u.FUNCTION_DISPATCH]},{begin:i.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:m},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:d,attribute:qb.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...w,u.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Hb.join("|")+")\\b"}]}}function Cp(o){const i=o.regex,u={},c={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[u]}]};Object.assign(u,{className:"variable",variants:[{begin:i.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},c]});const d={className:"subst",begin:/\$\(/,end:/\)/,contains:[o.BACKSLASH_ESCAPE]},m=o.inherit(o.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),p={begin:/<<-?\s*(?=\w+)/,starts:{contains:[o.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},w={className:"string",begin:/"/,end:/"/,contains:[o.BACKSLASH_ESCAPE,u,d]};d.contains.push(w);const b={match:/\\"/},v={className:"string",begin:/'/,end:/'/},C={match:/\\'/},D={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},o.NUMBER_MODE,u]},_=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],I=o.SHEBANG({binary:`(${_.join("|")})`,relevance:10}),q={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[o.inherit(o.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},K=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],Ae=["true","false"],ze={match:/(\/[a-z._-]+)+/},we=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],V=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],re=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],ie=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:K,literal:Ae,built_in:[...we,...V,"set","shopt",...re,...ie]},contains:[I,o.SHEBANG(),q,D,m,p,ze,w,b,v,C,u]}}function Xb(o){const i={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},u={match:/[{}[\],:]/,className:"punctuation",relevance:0},c=["true","false","null"],d={scope:"literal",beginKeywords:c.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:c},contains:[i,u,o.QUOTE_STRING_MODE,d,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}nt.registerLanguage("javascript",Fc);nt.registerLanguage("js",Fc);nt.registerLanguage("jsx",Fc);nt.registerLanguage("typescript",Wc);nt.registerLanguage("ts",Wc);nt.registerLanguage("tsx",Wc);nt.registerLanguage("html",Tp);nt.registerLanguage("xml",Tp);nt.registerLanguage("css",Ib);nt.registerLanguage("bash",Cp);nt.registerLanguage("shell",Cp);nt.registerLanguage("json",Xb);De.setOptions({gfm:!0,breaks:!0});function Ap({content:o,className:i=""}){const u=he.useRef(null),c=he.useMemo(()=>{let d=o;return d=d.replace(/\*\*Senior insight:\*\*\s*([^\n]+(?:\n(?!\n\*\*|\n###|\n---).*)*)/g,'<div class="senior-insight"><strong>Senior insight:</strong> $1</div>'),De.parse(d)},[o]);return he.useEffect(()=>{u.current&&u.current.querySelectorAll("pre code").forEach(m=>{nt.highlightElement(m)})},[c]),h.jsx("div",{ref:u,className:`prose max-w-none ${i}`,dangerouslySetInnerHTML:{__html:c}})}function Vb({question:o,index:i}){const{getProgress:u,setStatus:c,toggleBookmark:d,toggleExpanded:m,isExpanded:p}=Va(),w=u(o.id),b=p(o.id),C={not_started:{icon:h.jsx(Gc,{className:"w-4 h-4"}),badge:"badge-not-started",label:"Not Started"},studied:{icon:h.jsx(ur,{className:"w-4 h-4"}),badge:"badge-studied",label:"Studied"},needs_review:{icon:h.jsx(qs,{className:"w-4 h-4"}),badge:"badge-needs-review",label:"Needs Review"},mastered:{icon:h.jsx(dr,{className:"w-4 h-4"}),badge:"badge-mastered",label:"Mastered"}}[w.status],D=(I,q)=>{I.stopPropagation(),c(o.id,q)},_=I=>{I.stopPropagation(),d(o.id)};return h.jsxs("div",{className:"card overflow-hidden animate-fade-in",children:[h.jsxs("button",{onClick:()=>m(o.id),className:"w-full px-4 py-4 flex items-start gap-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors",children:[h.jsx("div",{className:"mt-0.5 text-gray-400",children:b?h.jsx(Qc,{className:"w-5 h-5"}):h.jsx(jc,{className:"w-5 h-5"})}),h.jsxs("span",{className:"text-sm text-gray-400 dark:text-gray-500 font-mono mt-0.5",children:["#",i+1]}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white leading-snug",children:o.question}),h.jsxs("div",{className:"flex items-center gap-2 mt-2 flex-wrap",children:[h.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded",children:o.categoryName}),h.jsxs("span",{className:`badge ${C.badge}`,children:[C.icon,h.jsx("span",{className:"ml-1",children:C.label})]}),w.lastStudied&&h.jsxs("span",{className:"text-xs text-gray-400",children:["Reviewed ",new Date(w.lastStudied).toLocaleDateString()]})]})]}),h.jsx("button",{onClick:_,className:`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${w.bookmarked?"text-amber-500":"text-gray-400"}`,title:w.bookmarked?"Remove bookmark":"Add bookmark",children:h.jsx(qc,{className:`w-5 h-5 ${w.bookmarked?"fill-current":""}`})})]}),b&&h.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-700",children:[h.jsx("div",{className:"px-4 py-4 bg-gray-50/50 dark:bg-slate-800/50",children:h.jsx(Ap,{content:o.answer})}),h.jsxs("div",{className:"px-4 py-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex items-center gap-2 flex-wrap",children:[h.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 mr-2",children:"Mark as:"}),h.jsxs("button",{onClick:I=>D(I,"studied"),className:`btn text-sm ${w.status==="studied"?"btn-primary":"btn-secondary"}`,children:[h.jsx(ur,{className:"w-4 h-4 mr-1"}),"Studied"]}),h.jsxs("button",{onClick:I=>D(I,"needs_review"),className:`btn text-sm ${w.status==="needs_review"?"bg-amber-500 text-white hover:bg-amber-600":"btn-secondary"}`,children:[h.jsx(qs,{className:"w-4 h-4 mr-1"}),"Needs Review"]}),h.jsxs("button",{onClick:I=>D(I,"mastered"),className:`btn text-sm ${w.status==="mastered"?"bg-green-500 text-white hover:bg-green-600":"btn-secondary"}`,children:[h.jsx(dr,{className:"w-4 h-4 mr-1"}),"Mastered"]}),w.status!=="not_started"&&h.jsx("button",{onClick:I=>D(I,"not_started"),className:"btn btn-ghost text-sm text-gray-500",children:"Reset"})]})]})]})}function Zb(){const{filteredQuestions:o,state:i,dispatch:u,stats:c}=Va(),{filters:d}=i,m=d.status!=="all"||d.category!=="all"||d.bookmarked||d.searchQuery.trim()!=="",p=()=>{u({type:"EXPAND_ALL"})},w=()=>{u({type:"COLLAPSE_ALL"})},b=()=>{u({type:"CLEAR_FILTERS"})};return h.jsxs("div",{className:"max-w-4xl mx-auto",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:m?h.jsxs(h.Fragment,{children:[h.jsx(tp,{className:"w-4 h-4"}),h.jsxs("span",{children:["Showing ",o.length," of ",c.total," questions"]}),h.jsx("button",{onClick:b,className:"text-blue-500 hover:text-blue-600 ml-2",children:"Clear filters"})]}):h.jsxs("span",{children:[c.total," questions total"]})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:p,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Expand all",children:[h.jsx(Qc,{className:"w-4 h-4"}),"Expand"]}),h.jsxs("button",{onClick:w,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Collapse all",children:[h.jsx(dy,{className:"w-4 h-4"}),"Collapse"]})]})]}),o.length>0?h.jsx("div",{className:"space-y-4",children:o.map((v,C)=>h.jsx(Vb,{question:v,index:C},v.id))}):h.jsxs("div",{className:"card p-12 text-center",children:[h.jsx(ap,{className:"w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4"}),h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No questions found"}),h.jsx("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:d.searchQuery?`No questions match "${d.searchQuery}"`:"No questions match the current filters"}),h.jsx("button",{onClick:b,className:"btn btn-primary",children:"Clear Filters"})]})]})}function Kb({isOpen:o,onClose:i}){const{allQuestions:u,categories:c,state:d,setStatus:m}=Va(),[p,w]=he.useState(new Set(["all"])),[b,v]=he.useState(10),[C,D]=he.useState(new Set(["not_started","studied","needs_review"])),[_,I]=he.useState(!0),[q,K]=he.useState("setup"),[Ae,ze]=he.useState([]),[we,V]=he.useState(0),[re,ie]=he.useState(!1),[ye,te]=he.useState([]);he.useEffect(()=>{o&&(K("setup"),V(0),ie(!1),te([]))},[o]);const Te=he.useCallback(()=>{let O=[...u];return p.has("all")||(O=O.filter(H=>p.has(H.categoryId))),O=O.filter(H=>{const de=d.progress[H.id]?.status||"not_started";return C.has(de)}),_&&(O=O.sort(()=>Math.random()-.5)),O.slice(0,b)},[u,p,C,_,b,d.progress]),Pe=()=>{const O=Te();O.length!==0&&(ze(O),K("quiz"),V(0),ie(!1),te([]))},en=O=>{const H=Ae[we];te(J=>[...J,{questionId:H.id,result:O}]),O==="got_it"?m(H.id,"studied"):O==="needs_review"&&m(H.id,"needs_review"),we<Ae.length-1?(V(J=>J+1),ie(!1)):K("results")},Fe=O=>{w(H=>{const J=new Set(H);if(O==="all")return new Set(["all"]);if(J.delete("all"),J.has(O)){if(J.delete(O),J.size===0)return new Set(["all"])}else J.add(O);return J})},nn=O=>{D(H=>{const J=new Set(H);if(J.has(O)){if(J.delete(O),J.size===0)return new Set([O])}else J.add(O);return J})};if(!o)return null;const Sn=Ae[we],tn=ye.filter(O=>O.result==="got_it").length,vn=ye.filter(O=>O.result==="needs_review").length,N=ye.filter(O=>O.result==="skipped").length;return h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:h.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[h.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[h.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:[q==="setup"&&"Quiz Setup",q==="quiz"&&`Question ${we+1} of ${Ae.length}`,q==="results"&&"Quiz Complete!"]}),h.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:h.jsx(gr,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[q==="setup"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Select Categories"}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{onClick:()=>Fe("all"),className:`btn text-sm ${p.has("all")?"btn-primary":"btn-secondary"}`,children:"All Categories"}),c.map(O=>h.jsx("button",{onClick:()=>Fe(O.id),className:`btn text-sm ${p.has(O.id)?"btn-primary":"btn-secondary"}`,children:O.name},O.id))]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Include Questions With Status"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"not_started",label:"Not Started"},{id:"studied",label:"Studied"},{id:"needs_review",label:"Needs Review"},{id:"mastered",label:"Mastered"}].map(O=>h.jsx("button",{onClick:()=>nn(O.id),className:`btn text-sm ${C.has(O.id)?"btn-primary":"btn-secondary"}`,children:O.label},O.id))})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Number of Questions"}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:b,onChange:O=>v(parseInt(O.target.value)),className:"flex-1"}),h.jsx("span",{className:"text-lg font-medium w-12",children:b})]})]}),h.jsx("div",{className:"flex items-center gap-3",children:h.jsxs("button",{onClick:()=>I(!_),className:`btn ${_?"btn-primary":"btn-secondary"}`,children:[h.jsx(_y,{className:"w-4 h-4 mr-2"}),"Shuffle Questions"]})}),h.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[Te().length," questions available with current filters"]})]}),q==="quiz"&&Sn&&h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:`${(we+1)/Ae.length*100}%`}})}),h.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:Sn.categoryName}),h.jsx("div",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:Sn.question}),re?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"card p-4 bg-gray-50 dark:bg-slate-900/50",children:h.jsx(Ap,{content:Sn.answer})}),h.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[h.jsxs("button",{onClick:()=>en("got_it"),className:"btn bg-green-500 text-white hover:bg-green-600 py-4",children:[h.jsx(ry,{className:"w-5 h-5 mr-2"}),"Got It"]}),h.jsxs("button",{onClick:()=>en("needs_review"),className:"btn bg-amber-500 text-white hover:bg-amber-600 py-4",children:[h.jsx(qs,{className:"w-5 h-5 mr-2"}),"Need Review"]}),h.jsxs("button",{onClick:()=>en("skipped"),className:"btn btn-secondary py-4",children:[h.jsx(Oy,{className:"w-5 h-5 mr-2"}),"Skip"]})]})]}):h.jsx("button",{onClick:()=>ie(!0),className:"btn btn-primary w-full py-4 text-lg",children:"Reveal Answer"})]}),q==="results"&&h.jsxs("div",{className:"text-center space-y-6",children:[h.jsx(Hy,{className:"w-20 h-20 mx-auto text-amber-500"}),h.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Quiz Complete!"}),h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsxs("div",{className:"card p-4 bg-green-50 dark:bg-green-900/20",children:[h.jsx("div",{className:"text-3xl font-bold text-green-600",children:tn}),h.jsx("div",{className:"text-sm text-green-700 dark:text-green-400",children:"Got It"})]}),h.jsxs("div",{className:"card p-4 bg-amber-50 dark:bg-amber-900/20",children:[h.jsx("div",{className:"text-3xl font-bold text-amber-600",children:vn}),h.jsx("div",{className:"text-sm text-amber-700 dark:text-amber-400",children:"Need Review"})]}),h.jsxs("div",{className:"card p-4 bg-gray-50 dark:bg-slate-700",children:[h.jsx("div",{className:"text-3xl font-bold text-gray-600 dark:text-gray-300",children:N}),h.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Skipped"})]})]}),h.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:["Score: ",Math.round(tn/Ae.length*100),"%"]})]})]}),h.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:[q==="setup"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:i,className:"btn btn-secondary",children:"Cancel"}),h.jsxs("button",{onClick:Pe,className:"btn btn-primary",disabled:Te().length===0,children:["Start Quiz (",Te().length," questions)"]})]}),q==="quiz"&&h.jsxs(h.Fragment,{children:[h.jsxs("button",{onClick:()=>{K("setup"),V(0),ie(!1),te([])},className:"btn btn-secondary",children:[h.jsx(Ay,{className:"w-4 h-4 mr-2"}),"Restart"]}),h.jsxs("div",{className:"text-sm text-gray-500",children:["Press Space to ",re?"continue":"reveal"]})]}),q==="results"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:i,className:"btn btn-secondary",children:"Close"}),h.jsx("button",{onClick:()=>{K("setup")},className:"btn btn-primary",children:"New Quiz"})]})]})]})})}function Pb({isOpen:o,onClose:i}){const{stats:u,categoryStats:c,state:d,dispatch:m}=Va();if(!o)return null;const p=Math.round((u.studied+u.mastered)/u.total*100),w=()=>{const C=JSON.stringify({version:1,exportedAt:Date.now(),progress:d.progress},null,2),D=new Blob([C],{type:"application/json"}),_=URL.createObjectURL(D),I=document.createElement("a");I.href=_,I.download=`react-study-progress-${new Date().toISOString().split("T")[0]}.json`,I.click(),URL.revokeObjectURL(_)},b=()=>{const C=document.createElement("input");C.type="file",C.accept=".json",C.onchange=async D=>{const _=D.target.files?.[0];if(_)try{const I=await _.text(),q=JSON.parse(I);q.version===1&&q.progress?(m({type:"IMPORT_PROGRESS",data:q.progress}),alert("Progress imported successfully!")):alert("Invalid file format")}catch{alert("Failed to import file")}},C.click()},v=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&m({type:"RESET_PROGRESS"})};return h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[h.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Study Statistics"}),h.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:h.jsx(gr,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Overall Progress"}),h.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500",style:{width:`${p}%`}})}),h.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:[u.studied+u.mastered," of ",u.total," questions completed (",p,"%)"]})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[h.jsxs("div",{className:"card p-4 text-center",children:[h.jsx(Gc,{className:"w-6 h-6 mx-auto mb-2 text-gray-400"}),h.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.notStarted}),h.jsx("div",{className:"text-xs text-gray-500",children:"Not Started"})]}),h.jsxs("div",{className:"card p-4 text-center",children:[h.jsx(ur,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),h.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.studied}),h.jsx("div",{className:"text-xs text-gray-500",children:"Studied"})]}),h.jsxs("div",{className:"card p-4 text-center",children:[h.jsx(qs,{className:"w-6 h-6 mx-auto mb-2 text-amber-500"}),h.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.needsReview}),h.jsx("div",{className:"text-xs text-gray-500",children:"Needs Review"})]}),h.jsxs("div",{className:"card p-4 text-center",children:[h.jsx(dr,{className:"w-6 h-6 mx-auto mb-2 text-green-500"}),h.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.mastered}),h.jsx("div",{className:"text-xs text-gray-500",children:"Mastered"})]})]}),h.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[h.jsx(qc,{className:"w-5 h-5 text-amber-500"}),h.jsxs("span",{children:[u.bookmarked," bookmarked questions"]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Progress by Category"}),h.jsx("div",{className:"space-y-3",children:c.map(C=>{const D=C.studied+C.mastered,_=Math.round(D/C.total*100);return h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between text-sm mb-1",children:[h.jsx("span",{className:"text-gray-700 dark:text-gray-300 truncate",children:C.categoryName}),h.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:[D,"/",C.total]})]}),h.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-green-500 transition-all duration-300",style:{width:`${_}%`}})})]},C.categoryId)})})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Data Management"}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsxs("button",{onClick:w,className:"btn btn-secondary",children:[h.jsx(gy,{className:"w-4 h-4 mr-2"}),"Export Progress"]}),h.jsxs("button",{onClick:b,className:"btn btn-secondary",children:[h.jsx(Qy,{className:"w-4 h-4 mr-2"}),"Import Progress"]}),h.jsxs("button",{onClick:v,className:"btn bg-red-500 text-white hover:bg-red-600",children:[h.jsx(Ly,{className:"w-4 h-4 mr-2"}),"Reset All"]})]})]})]}),h.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:h.jsx("button",{onClick:i,className:"btn btn-primary w-full",children:"Close"})})]})})}const Jb=[{key:"/",description:"Focus search"},{key:"Escape",description:"Clear search / Close modal"},{key:"j",description:"Next question"},{key:"k",description:"Previous question"},{key:"Space",description:"Toggle answer / Flip quiz card"},{key:"Enter",description:"Expand/collapse current question"},{key:"s",description:"Mark as studied"},{key:"r",description:"Mark as needs review"},{key:"m",description:"Mark as mastered"},{key:"b",description:"Toggle bookmark"},{key:"e",description:"Expand all questions"},{key:"c",description:"Collapse all questions"},{key:"d",description:"Toggle dark mode"},{key:"q",description:"Open quiz mode"},{key:"?",description:"Show this help"}];function $b({isOpen:o,onClose:i}){return o?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-xl overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[h.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Keyboard Shortcuts"}),h.jsx("button",{onClick:i,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:h.jsx(gr,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:h.jsx("div",{className:"space-y-2",children:Jb.map(({key:u,description:c})=>h.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-700 last:border-0",children:[h.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:c}),h.jsx("kbd",{className:"px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm font-mono text-gray-600 dark:text-gray-400",children:u})]},u))})}),h.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:h.jsx("button",{onClick:i,className:"btn btn-primary w-full",children:"Got it"})})]})}):null}function Fb({onOpenQuiz:o,onOpenShortcuts:i}){const{filteredQuestions:u,state:c,dispatch:d,setStatus:m,toggleBookmark:p,toggleExpanded:w}=Va(),{setTheme:b,isDark:v}=ep(),C=he.useCallback(()=>{for(let _=0;_<u.length;_++)if(c.expandedQuestions.has(u[_].id))return _;return-1},[u,c.expandedQuestions]),D=he.useCallback(_=>{if(_.target instanceof HTMLInputElement||_.target instanceof HTMLTextAreaElement){_.key==="Escape"&&(_.target.blur(),d({type:"SET_SEARCH",query:""}));return}const I=C(),q=I>=0?u[I]:null;switch(_.key){case"/":_.preventDefault(),document.getElementById("search-input")?.focus();break;case"Escape":d({type:"SET_SEARCH",query:""});break;case"j":if(_.preventDefault(),u.length>0){const K=I<u.length-1?I+1:0;q&&d({type:"TOGGLE_EXPANDED",questionId:q.id}),d({type:"TOGGLE_EXPANDED",questionId:u[K].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[K].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case"k":if(_.preventDefault(),u.length>0){const K=I>0?I-1:u.length-1;q&&d({type:"TOGGLE_EXPANDED",questionId:q.id}),d({type:"TOGGLE_EXPANDED",questionId:u[K].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[K].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case" ":_.preventDefault(),q?w(q.id):u.length>0&&w(u[0].id);break;case"Enter":_.preventDefault(),q&&w(q.id);break;case"s":_.preventDefault(),q&&m(q.id,"studied");break;case"r":_.preventDefault(),q&&m(q.id,"needs_review");break;case"m":_.preventDefault(),q&&m(q.id,"mastered");break;case"b":_.preventDefault(),q&&p(q.id);break;case"e":_.preventDefault(),d({type:"EXPAND_ALL"});break;case"c":_.preventDefault(),d({type:"COLLAPSE_ALL"});break;case"d":_.preventDefault(),b(v?"light":"dark");break;case"q":_.preventDefault(),o();break;case"?":_.preventDefault(),i();break}},[u,C,d,w,m,p,b,v,o,i]);he.useEffect(()=>(window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)),[D])}function Wb(){const[o,i]=he.useState(!1),[u,c]=he.useState(!1),[d,m]=he.useState(!1);return Fb({onOpenQuiz:()=>i(!0),onOpenShortcuts:()=>m(!0)}),h.jsxs(h.Fragment,{children:[h.jsx(Xy,{onOpenStats:()=>c(!0),onOpenShortcuts:()=>m(!0),onStartQuiz:()=>i(!0),children:h.jsx(Zb,{})}),h.jsx(Kb,{isOpen:o,onClose:()=>i(!1)}),h.jsx(Pb,{isOpen:u,onClose:()=>c(!1)}),h.jsx($b,{isOpen:d,onClose:()=>m(!1)})]})}function ev(){return h.jsx(Jg,{children:h.jsx(Pg,{children:h.jsx(Wb,{})})})}qg.createRoot(document.getElementById("root")).render(h.jsx(he.StrictMode,{children:h.jsx(ev,{})}));
