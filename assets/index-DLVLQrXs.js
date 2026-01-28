(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function u(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=u(d);fetch(d.href,h)}})();function Dg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ec={exports:{}},Is={};var Nf;function Ng(){if(Nf)return Is;Nf=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,h){var m=null;if(h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),"key"in d){h={};for(var k in d)k!=="key"&&(h[k]=d[k])}else h=d;return d=h.ref,{$$typeof:l,type:c,key:m,ref:d!==void 0?d:null,props:h}}return Is.Fragment=o,Is.jsx=u,Is.jsxs=u,Is}var If;function Ig(){return If||(If=1,Ec.exports=Ng()),Ec.exports}var f=Ig(),Ac={exports:{}},ue={};var Of;function Og(){if(Of)return ue;Of=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.iterator;function Q(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Ee={};function Oe(x,O,F){this.props=x,this.context=O,this.refs=Ee,this.updater=F||z}Oe.prototype.isReactComponent={},Oe.prototype.setState=function(x,O){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,O,"setState")},Oe.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Ce(){}Ce.prototype=Oe.prototype;function G(x,O,F){this.props=x,this.context=O,this.refs=Ee,this.updater=F||z}var ie=G.prototype=new Ce;ie.constructor=G,K(ie,Oe.prototype),ie.isPureReactComponent=!0;var oe=Array.isArray;function ye(){}var te={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function Ye(x,O,F){var Y=F.ref;return{$$typeof:l,type:x,key:O,ref:Y!==void 0?Y:null,props:F}}function en(x,O){return Ye(x.type,O,x.props)}function Ze(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function nn(x){var O={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(F){return O[F]})}var Sn=/\/+/g;function tn(x,O){return typeof x=="object"&&x!==null&&x.key!=null?nn(""+x.key):O.toString(36)}function vn(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ye,ye):(x.status="pending",x.then(function(O){x.status==="pending"&&(x.status="fulfilled",x.value=O)},function(O){x.status==="pending"&&(x.status="rejected",x.reason=O)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function M(x,O,F,Y,ce){var ge=typeof x;(ge==="undefined"||ge==="boolean")&&(x=null);var Ae=!1;if(x===null)Ae=!0;else switch(ge){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(x.$$typeof){case l:case o:Ae=!0;break;case R:return Ae=x._init,M(Ae(x._payload),O,F,Y,ce)}}if(Ae)return ce=ce(x),Ae=Y===""?"."+tn(x,0):Y,oe(ce)?(F="",Ae!=null&&(F=Ae.replace(Sn,"$&/")+"/"),M(ce,O,F,"",function(gt){return gt})):ce!=null&&(Ze(ce)&&(ce=en(ce,F+(ce.key==null||x&&x.key===ce.key?"":(""+ce.key).replace(Sn,"$&/")+"/")+Ae)),O.push(ce)),1;Ae=0;var kn=Y===""?".":Y+":";if(oe(x))for(var an=0;an<x.length;an++)Y=x[an],ge=kn+tn(Y,an),Ae+=M(Y,O,F,ge,ce);else if(an=Q(x),typeof an=="function")for(x=an.call(x),an=0;!(Y=x.next()).done;)Y=Y.value,ge=kn+tn(Y,an++),Ae+=M(Y,O,F,ge,ce);else if(ge==="object"){if(typeof x.then=="function")return M(vn(x),O,F,Y,ce);throw O=String(x),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function I(x,O,F){if(x==null)return x;var Y=[],ce=0;return M(x,Y,"","",function(ge){return O.call(F,ge,ce++)}),Y}function _(x){if(x._status===-1){var O=x._result;O=O(),O.then(function(F){(x._status===0||x._status===-1)&&(x._status=1,x._result=F)},function(F){(x._status===0||x._status===-1)&&(x._status=2,x._result=F)}),x._status===-1&&(x._status=0,x._result=O)}if(x._status===1)return x._result.default;throw x._result}var X=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},de={map:I,forEach:function(x,O,F){I(x,function(){O.apply(this,arguments)},F)},count:function(x){var O=0;return I(x,function(){O++}),O},toArray:function(x){return I(x,function(O){return O})||[]},only:function(x){if(!Ze(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=U,ue.Children=de,ue.Component=Oe,ue.Fragment=u,ue.Profiler=d,ue.PureComponent=G,ue.StrictMode=c,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return te.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,O,F){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Y=K({},x.props),ce=x.key;if(O!=null)for(ge in O.key!==void 0&&(ce=""+O.key),O)!Te.call(O,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&O.ref===void 0||(Y[ge]=O[ge]);var ge=arguments.length-2;if(ge===1)Y.children=F;else if(1<ge){for(var Ae=Array(ge),kn=0;kn<ge;kn++)Ae[kn]=arguments[kn+2];Y.children=Ae}return Ye(x.type,ce,Y)},ue.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},ue.createElement=function(x,O,F){var Y,ce={},ge=null;if(O!=null)for(Y in O.key!==void 0&&(ge=""+O.key),O)Te.call(O,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ce[Y]=O[Y]);var Ae=arguments.length-2;if(Ae===1)ce.children=F;else if(1<Ae){for(var kn=Array(Ae),an=0;an<Ae;an++)kn[an]=arguments[an+2];ce.children=kn}if(x&&x.defaultProps)for(Y in Ae=x.defaultProps,Ae)ce[Y]===void 0&&(ce[Y]=Ae[Y]);return Ye(x,ge,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:k,render:x}},ue.isValidElement=Ze,ue.lazy=function(x){return{$$typeof:R,_payload:{_status:-1,_result:x},_init:_}},ue.memo=function(x,O){return{$$typeof:v,type:x,compare:O===void 0?null:O}},ue.startTransition=function(x){var O=te.T,F={};te.T=F;try{var Y=x(),ce=te.S;ce!==null&&ce(F,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ye,X)}catch(ge){X(ge)}finally{O!==null&&F.types!==null&&(O.types=F.types),te.T=O}},ue.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ue.use=function(x){return te.H.use(x)},ue.useActionState=function(x,O,F){return te.H.useActionState(x,O,F)},ue.useCallback=function(x,O){return te.H.useCallback(x,O)},ue.useContext=function(x){return te.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,O){return te.H.useDeferredValue(x,O)},ue.useEffect=function(x,O){return te.H.useEffect(x,O)},ue.useEffectEvent=function(x){return te.H.useEffectEvent(x)},ue.useId=function(){return te.H.useId()},ue.useImperativeHandle=function(x,O,F){return te.H.useImperativeHandle(x,O,F)},ue.useInsertionEffect=function(x,O){return te.H.useInsertionEffect(x,O)},ue.useLayoutEffect=function(x,O){return te.H.useLayoutEffect(x,O)},ue.useMemo=function(x,O){return te.H.useMemo(x,O)},ue.useOptimistic=function(x,O){return te.H.useOptimistic(x,O)},ue.useReducer=function(x,O,F){return te.H.useReducer(x,O,F)},ue.useRef=function(x){return te.H.useRef(x)},ue.useState=function(x){return te.H.useState(x)},ue.useSyncExternalStore=function(x,O,F){return te.H.useSyncExternalStore(x,O,F)},ue.useTransition=function(){return te.H.useTransition()},ue.version="19.2.4",ue}var Uf;function _c(){return Uf||(Uf=1,Ac.exports=Og()),Ac.exports}var fe=_c(),Mc={exports:{}},Os={},Dc={exports:{}},Nc={};var Pf;function Ug(){return Pf||(Pf=1,(function(l){function o(M,I){var _=M.length;M.push(I);e:for(;0<_;){var X=_-1>>>1,de=M[X];if(0<d(de,I))M[X]=I,M[_]=de,_=X;else break e}}function u(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var I=M[0],_=M.pop();if(_!==I){M[0]=_;e:for(var X=0,de=M.length,x=de>>>1;X<x;){var O=2*(X+1)-1,F=M[O],Y=O+1,ce=M[Y];if(0>d(F,_))Y<de&&0>d(ce,F)?(M[X]=ce,M[Y]=_,X=Y):(M[X]=F,M[O]=_,X=O);else if(Y<de&&0>d(ce,_))M[X]=ce,M[Y]=_,X=Y;else break e}}return I}function d(M,I){var _=M.sortIndex-I.sortIndex;return _!==0?_:M.id-I.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var m=Date,k=m.now();l.unstable_now=function(){return m.now()-k}}var b=[],v=[],R=1,U=null,D=3,Q=!1,z=!1,K=!1,Ee=!1,Oe=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function ie(M){for(var I=u(v);I!==null;){if(I.callback===null)c(v);else if(I.startTime<=M)c(v),I.sortIndex=I.expirationTime,o(b,I);else break;I=u(v)}}function oe(M){if(K=!1,ie(M),!z)if(u(b)!==null)z=!0,ye||(ye=!0,nn());else{var I=u(v);I!==null&&vn(oe,I.startTime-M)}}var ye=!1,te=-1,Te=5,Ye=-1;function en(){return Ee?!0:!(l.unstable_now()-Ye<Te)}function Ze(){if(Ee=!1,ye){var M=l.unstable_now();Ye=M;var I=!0;try{e:{z=!1,K&&(K=!1,Ce(te),te=-1),Q=!0;var _=D;try{n:{for(ie(M),U=u(b);U!==null&&!(U.expirationTime>M&&en());){var X=U.callback;if(typeof X=="function"){U.callback=null,D=U.priorityLevel;var de=X(U.expirationTime<=M);if(M=l.unstable_now(),typeof de=="function"){U.callback=de,ie(M),I=!0;break n}U===u(b)&&c(b),ie(M)}else c(b);U=u(b)}if(U!==null)I=!0;else{var x=u(v);x!==null&&vn(oe,x.startTime-M),I=!1}}break e}finally{U=null,D=_,Q=!1}I=void 0}}finally{I?nn():ye=!1}}}var nn;if(typeof G=="function")nn=function(){G(Ze)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,tn=Sn.port2;Sn.port1.onmessage=Ze,nn=function(){tn.postMessage(null)}}else nn=function(){Oe(Ze,0)};function vn(M,I){te=Oe(function(){M(l.unstable_now())},I)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(M){switch(D){case 1:case 2:case 3:var I=3;break;default:I=D}var _=D;D=I;try{return M()}finally{D=_}},l.unstable_requestPaint=function(){Ee=!0},l.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var _=D;D=M;try{return I()}finally{D=_}},l.unstable_scheduleCallback=function(M,I,_){var X=l.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?X+_:X):_=X,M){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=_+de,M={id:R++,callback:I,priorityLevel:M,startTime:_,expirationTime:de,sortIndex:-1},_>X?(M.sortIndex=_,o(v,M),u(b)===null&&M===u(v)&&(K?(Ce(te),te=-1):K=!0,vn(oe,_-X))):(M.sortIndex=de,o(b,M),z||Q||(z=!0,ye||(ye=!0,nn()))),M},l.unstable_shouldYield=en,l.unstable_wrapCallback=function(M){var I=D;return function(){var _=D;D=I;try{return M.apply(this,arguments)}finally{D=_}}}})(Nc)),Nc}var Lf;function Pg(){return Lf||(Lf=1,Dc.exports=Ug()),Dc.exports}var Ic={exports:{}},In={};var jf;function Lg(){if(jf)return In;jf=1;var l=_c();function o(b){var v="https://react.dev/errors/"+b;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+b+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(b,v,R){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:U==null?null:""+U,children:b,containerInfo:v,implementation:R}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,v){if(b==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,In.createPortal=function(b,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return h(b,v,null,R)},In.flushSync=function(b){var v=m.T,R=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=v,c.p=R,c.d.f()}},In.preconnect=function(b,v){typeof b=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(b,v))},In.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},In.preinit=function(b,v){if(typeof b=="string"&&v&&typeof v.as=="string"){var R=v.as,U=k(R,v.crossOrigin),D=typeof v.integrity=="string"?v.integrity:void 0,Q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?c.d.S(b,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:U,integrity:D,fetchPriority:Q}):R==="script"&&c.d.X(b,{crossOrigin:U,integrity:D,fetchPriority:Q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},In.preinitModule=function(b,v){if(typeof b=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=k(v.as,v.crossOrigin);c.d.M(b,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(b)},In.preload=function(b,v){if(typeof b=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,U=k(R,v.crossOrigin);c.d.L(b,R,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},In.preloadModule=function(b,v){if(typeof b=="string")if(v){var R=k(v.as,v.crossOrigin);c.d.m(b,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(b)},In.requestFormReset=function(b){c.d.r(b)},In.unstable_batchedUpdates=function(b,v){return b(v)},In.useFormState=function(b,v,R){return m.H.useFormState(b,v,R)},In.useFormStatus=function(){return m.H.useHostTransitionStatus()},In.version="19.2.4",In}var Bf;function jg(){if(Bf)return Ic.exports;Bf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Ic.exports=Lg(),Ic.exports}var _f;function Bg(){if(_f)return Os;_f=1;var l=Pg(),o=_c(),u=jg();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(c(188))}function v(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return b(r),e;if(s===a)return b(r),n;s=s.sibling}throw Error(c(188))}if(t.return!==a.return)t=r,a=s;else{for(var i=!1,p=r.child;p;){if(p===t){i=!0,t=r,a=s;break}if(p===a){i=!0,a=r,t=s;break}p=p.sibling}if(!i){for(p=s.child;p;){if(p===t){i=!0,t=s,a=r;break}if(p===a){i=!0,a=s,t=r;break}p=p.sibling}if(!i)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function R(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=R(e),n!==null)return n;e=e.sibling}return null}var U=Object.assign,D=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Ce=Symbol.for("react.consumer"),G=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),en=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function nn(e){return e===null||typeof e!="object"?null:(e=Ze&&e[Ze]||e["@@iterator"],typeof e=="function"?e:null)}var Sn=Symbol.for("react.client.reference");function tn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case Oe:return"Profiler";case Ee:return"StrictMode";case oe:return"Suspense";case ye:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case G:return e.displayName||"Context";case Ce:return(e._context.displayName||"Context")+".Consumer";case ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:tn(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return tn(e(n))}catch{}}return null}var vn=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},X=[],de=-1;function x(e){return{current:e}}function O(e){0>de||(e.current=X[de],X[de]=null,de--)}function F(e,n){de++,X[de]=e.current,e.current=n}var Y=x(null),ce=x(null),ge=x(null),Ae=x(null);function kn(e,n){switch(F(ge,n),F(ce,e),F(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Jp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Jp(n),e=ef(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Y),F(Y,e)}function an(){O(Y),O(ce),O(ge)}function gt(e){e.memoizedState!==null&&F(Ae,e);var n=Y.current,t=ef(n,e.type);n!==t&&(F(ce,e),F(Y,t))}function Ka(e){ce.current===e&&(O(Y),O(ce)),Ae.current===e&&(O(Ae),As._currentValue=_)}var Or,Fs;function kt(e){if(Or===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Or=n&&n[1]||"",Fs=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Or+e+Fs}var Ur=!1;function Pr(e,n){if(!e||Ur)return"";Ur=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(A){var E=A}Reflect.construct(e,[],j)}else{try{j.call()}catch(A){E=A}e.call(j.prototype)}}else{try{throw Error()}catch(A){E=A}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(A){if(A&&E&&typeof A.stack=="string")return[A.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),i=s[0],p=s[1];if(i&&p){var g=i.split(`
`),T=p.split(`
`);for(r=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;if(a===g.length||r===T.length)for(a=g.length-1,r=T.length-1;1<=a&&0<=r&&g[a]!==T[r];)r--;for(;1<=a&&0<=r;a--,r--)if(g[a]!==T[r]){if(a!==1||r!==1)do if(a--,r--,0>r||g[a]!==T[r]){var N=`
`+g[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=r);break}}}finally{Ur=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?kt(t):""}function xi(e,n){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Pr(e.type,!1);case 11:return Pr(e.type.render,!1);case 1:return Pr(e.type,!0);case 31:return kt("Activity");default:return""}}function qs(e){try{var n="",t=null;do n+=xi(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Lr=Object.prototype.hasOwnProperty,Ya=l.unstable_scheduleCallback,jr=l.unstable_cancelCallback,Si=l.unstable_shouldYield,Qs=l.unstable_requestPaint,on=l.unstable_now,Vs=l.unstable_getCurrentPriorityLevel,Ct=l.unstable_ImmediatePriority,Sa=l.unstable_UserBlockingPriority,wa=l.unstable_NormalPriority,wi=l.unstable_LowPriority,Gs=l.unstable_IdlePriority,ki=l.log,Ci=l.unstable_setDisableYieldValue,ka=null,Mn=null;function yt(e){if(typeof ki=="function"&&Ci(e),Mn&&typeof Mn.setStrictMode=="function")try{Mn.setStrictMode(ka,e)}catch{}}var On=Math.clz32?Math.clz32:Ws,Ti=Math.log,Br=Math.LN2;function Ws(e){return e>>>=0,e===0?32:31-(Ti(e)/Br|0)|0}var Ca=256,Xa=262144,Ta=4194304;function jn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function y(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~s,a!==0?r=jn(a):(i&=p,i!==0?r=jn(i):t||(t=p&~e,t!==0&&(r=jn(t))))):(p=a&~s,p!==0?r=jn(p):i!==0?r=jn(i):t||(t=a&~e,t!==0&&(r=jn(t)))),r===0?0:n!==0&&n!==r&&(n&s)===0&&(s=r&-r,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:r}function P(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function q(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function le(){var e=Ta;return Ta<<=1,(Ta&62914560)===0&&(Ta=4194304),e}function Ge(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Fe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $(e,n,t,a,r,s){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,g=e.expirationTimes,T=e.hiddenUpdates;for(t=i&~t;0<t;){var N=31-On(t),j=1<<N;p[N]=0,g[N]=-1;var E=T[N];if(E!==null)for(T[N]=null,N=0;N<E.length;N++){var A=E[N];A!==null&&(A.lane&=-536870913)}t&=~j}a!==0&&V(e,a,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(i&~n))}function V(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-On(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function se(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-On(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}function ln(e,n){var t=n&-n;return t=(t&42)!==0?1:Xe(t),(t&(e.suspendedLanes|n))!==0?0:t}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $a(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Cf(e.type))}function Za(e,n){var t=I.p;try{return I.p=e,n()}finally{I.p=t}}var bt=Math.random().toString(36).slice(2),cn="__reactFiber$"+bt,Dn="__reactProps$"+bt,Gt="__reactContainer$"+bt,_r="__reactEvents$"+bt,Ks="__reactListeners$"+bt,Ja="__reactHandles$"+bt,Ys="__reactResources$"+bt,Ra="__reactMarker$"+bt;function zr(e){delete e[cn],delete e[Dn],delete e[_r],delete e[Ks],delete e[Ja]}function Un(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Gt]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lf(e);e!==null;){if(t=e[cn])return t;e=lf(e)}return n}e=t,t=e.parentNode}return null}function Rt(e){if(e=e[cn]||e[Gt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Wt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function Kt(e){var n=e[Ys];return n||(n=e[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(e){e[Ra]=!0}var Xs=new Set,Ea={};function Et(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(Ea[e]=n,e=0;e<n.length;e++)Xs.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),be={},Pe={};function un(e){return Lr.call(Pe,e)?!0:Lr.call(be,e)?!1:ee.test(e)?Pe[e]=!0:(be[e]=!0,!1)}function Nn(e,n,t){if(un(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Gn(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Bn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function Qe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $s(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,s=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){t=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function er(e){if(!e._valueTracker){var n=Wn(e)?"checked":"value";e._valueTracker=$s(e,n,""+e[n])}}function Hr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Wn(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ri=/[\n"\\]/g;function _n(e){return e.replace(Ri,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fr(e,n,t,a,r,s,i,p){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),n!=null?i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Qe(n)):e.value!==""+Qe(n)&&(e.value=""+Qe(n)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),n!=null?tr(e,i,Qe(n)):t!=null?tr(e,i,Qe(t)):a!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Qe(p):e.removeAttribute("name")}function Aa(e,n,t,a,r,s,i,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){er(e);return}t=t!=null?""+Qe(t):"",n=n!=null?""+Qe(n):t,p||n===e.value||(e.value=n),e.defaultValue=n}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),er(e)}function tr(e,n,t){n==="number"&&nr(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Cn(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Qe(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Zs(e,n,t){if(n!=null&&(n=""+Qe(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Qe(t):""}function ar(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(vn(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Qe(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),er(e)}function re(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Js=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Js.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Le(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in n)a=n[r],n.hasOwnProperty(r)&&t[r]!==a&&mn(e,r,a)}else for(var s in n)n.hasOwnProperty(s)&&mn(e,s,n[s])}function Yt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return qr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function H(){}var Z=null;function pe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Se=null,Je=null;function tt(e){var n=Rt(e);if(n&&(e=n.stateNode)){var t=e[Dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=a[Dn]||null;if(!r)throw Error(c(90));Fr(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Hr(a)}break e;case"textarea":Zs(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Cn(e,!!t.multiple,n,!1)}}}var Qr=!1;function eo(e,n,t){if(Qr)return e(n,t);Qr=!0;try{var a=e(n);return a}finally{if(Qr=!1,(Se!==null||Je!==null)&&(Fo(),Se&&(n=Se,e=Je,Je=Se=null,tt(n),e)))for(n=0;n<e.length;n++)tt(e[n])}}function Vr(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Dn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ei=!1;if(Mt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ei=!1}var $t=null,Ai=null,no=null;function eu(){if(no)return no;var e,n=Ai,t=n.length,a,r="value"in $t?$t.value:$t.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===r[s-a];a++);return no=r.slice(e,1<a?1-a:void 0)}function to(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function nu(){return!1}function zn(e){function n(t,a,r,s,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:nu,this.isPropagationStopped=nu,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),n}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=zn(Ma),Wr=U({},Ma,{view:0,detail:0}),Am=zn(Wr),Mi,Di,Kr,so=U({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Mi=e.screenX-Kr.screenX,Di=e.screenY-Kr.screenY):Di=Mi=0,Kr=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),tu=zn(so),Mm=U({},so,{dataTransfer:0}),Dm=zn(Mm),Nm=U({},Wr,{relatedTarget:0}),Ni=zn(Nm),Im=U({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=zn(Im),Um=U({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=zn(Um),Lm=U({},Ma,{data:0}),au=zn(Lm),jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_m[e])?!!n[e]:!1}function Ii(){return zm}var Hm=U({},Wr,{key:function(e){if(e.key){var n=jm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ii,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fm=zn(Hm),qm=U({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=zn(qm),Qm=U({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ii}),Vm=zn(Qm),Gm=U({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=zn(Gm),Km=U({},so,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=zn(Km),Xm=U({},Ma,{newState:0,oldState:0}),$m=zn(Xm),Zm=[9,13,27,32],Oi=Mt&&"CompositionEvent"in window,Yr=null;Mt&&"documentMode"in document&&(Yr=document.documentMode);var Jm=Mt&&"TextEvent"in window&&!Yr,su=Mt&&(!Oi||Yr&&8<Yr&&11>=Yr),ou=" ",iu=!1;function lu(e,n){switch(e){case"keyup":return Zm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function eh(e,n){switch(e){case"compositionend":return cu(n);case"keypress":return n.which!==32?null:(iu=!0,ou);case"textInput":return e=n.data,e===ou&&iu?null:e;default:return null}}function nh(e,n){if(rr)return e==="compositionend"||!Oi&&lu(e,n)?(e=eu(),no=Ai=$t=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return su&&n.locale!=="ko"?null:n.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!th[e.type]:n==="textarea"}function du(e,n,t,a){Se?Je?Je.push(a):Je=[a]:Se=a,n=Yo(n,"onChange"),0<n.length&&(t=new ro("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Xr=null,$r=null;function ah(e){Wp(e,0)}function oo(e){var n=Wt(e);if(Hr(n))return e}function pu(e,n){if(e==="change")return n}var fu=!1;if(Mt){var Ui;if(Mt){var Pi="oninput"in document;if(!Pi){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),Pi=typeof mu.oninput=="function"}Ui=Pi}else Ui=!1;fu=Ui&&(!document.documentMode||9<document.documentMode)}function hu(){Xr&&(Xr.detachEvent("onpropertychange",gu),$r=Xr=null)}function gu(e){if(e.propertyName==="value"&&oo($r)){var n=[];du(n,$r,e,pe(e)),eo(ah,n)}}function rh(e,n,t){e==="focusin"?(hu(),Xr=n,$r=t,Xr.attachEvent("onpropertychange",gu)):e==="focusout"&&hu()}function sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo($r)}function oh(e,n){if(e==="click")return oo(n)}function ih(e,n){if(e==="input"||e==="change")return oo(n)}function lh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:lh;function Zr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!Lr.call(n,r)||!Kn(e[r],n[r]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,n){var t=yu(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yu(t)}}function vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=nr(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=nr(e.document)}return n}function Li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ch=Mt&&"documentMode"in document&&11>=document.documentMode,sr=null,ji=null,Jr=null,Bi=!1;function Su(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bi||sr==null||sr!==nr(a)||(a=sr,"selectionStart"in a&&Li(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Jr&&Zr(Jr,a)||(Jr=a,a=Yo(ji,"onSelect"),0<a.length&&(n=new ro("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=sr)))}function Da(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var or={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},_i={},wu={};Mt&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Na(e){if(_i[e])return _i[e];if(!or[e])return e;var n=or[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in wu)return _i[e]=n[t];return e}var ku=Na("animationend"),Cu=Na("animationiteration"),Tu=Na("animationstart"),uh=Na("transitionrun"),dh=Na("transitionstart"),ph=Na("transitioncancel"),Ru=Na("transitionend"),Eu=new Map,zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zi.push("scrollEnd");function dt(e,n){Eu.set(e,n),Et(n,[e])}var io=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},at=[],ir=0,Hi=0;function lo(){for(var e=ir,n=Hi=ir=0;n<e;){var t=at[n];at[n++]=null;var a=at[n];at[n++]=null;var r=at[n];at[n++]=null;var s=at[n];if(at[n++]=null,a!==null&&r!==null){var i=a.pending;i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r}s!==0&&Au(t,r,s)}}function co(e,n,t,a){at[ir++]=e,at[ir++]=n,at[ir++]=t,at[ir++]=a,Hi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Fi(e,n,t,a){return co(e,n,t,a),uo(e)}function Ia(e,n){return co(e,null,null,n),uo(e)}function Au(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var r=!1,s=e.return;s!==null;)s.childLanes|=t,a=s.alternate,a!==null&&(a.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&n!==null&&(r=31-On(t),e=s.hiddenUpdates,a=e[r],a===null?e[r]=[n]:a.push(n),n.lane=t|536870912),s):null}function uo(e){if(50<Ss)throw Ss=0,$l=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var lr={};function fh(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,t,a){return new fh(e,n,t,a)}function qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dt(e,n){var t=e.alternate;return t===null?(t=Yn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Mu(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function po(e,n,t,a,r,s){var i=0;if(a=e,typeof e=="function")qi(e)&&(i=1);else if(typeof e=="string")i=bg(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=Yn(31,t,n,r),e.elementType=Ye,e.lanes=s,e;case K:return Oa(t.children,r,s,n);case Ee:i=8,r|=24;break;case Oe:return e=Yn(12,t,n,r|2),e.elementType=Oe,e.lanes=s,e;case oe:return e=Yn(13,t,n,r),e.elementType=oe,e.lanes=s,e;case ye:return e=Yn(19,t,n,r),e.elementType=ye,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:i=10;break e;case Ce:i=9;break e;case ie:i=11;break e;case te:i=14;break e;case Te:i=16,a=null;break e}i=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=Yn(i,t,n,r),n.elementType=e,n.type=a,n.lanes=s,n}function Oa(e,n,t,a){return e=Yn(7,e,a,n),e.lanes=t,e}function Qi(e,n,t){return e=Yn(6,e,null,n),e.lanes=t,e}function Du(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function Vi(e,n,t){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nu=new WeakMap;function rt(e,n){if(typeof e=="object"&&e!==null){var t=Nu.get(e);return t!==void 0?t:(n={value:e,source:n,stack:qs(n)},Nu.set(e,n),n)}return{value:e,source:n,stack:qs(n)}}var cr=[],ur=0,fo=null,es=0,st=[],ot=0,Zt=null,vt=1,xt="";function Nt(e,n){cr[ur++]=es,cr[ur++]=fo,fo=e,es=n}function Iu(e,n,t){st[ot++]=vt,st[ot++]=xt,st[ot++]=Zt,Zt=e;var a=vt;e=xt;var r=32-On(a)-1;a&=~(1<<r),t+=1;var s=32-On(n)+r;if(30<s){var i=r-r%5;s=(a&(1<<i)-1).toString(32),a>>=i,r-=i,vt=1<<32-On(n)+r|t<<r|a,xt=s+e}else vt=1<<s|t<<r|a,xt=e}function Gi(e){e.return!==null&&(Nt(e,1),Iu(e,1,0))}function Wi(e){for(;e===fo;)fo=cr[--ur],cr[ur]=null,es=cr[--ur],cr[ur]=null;for(;e===Zt;)Zt=st[--ot],st[ot]=null,xt=st[--ot],st[ot]=null,vt=st[--ot],st[ot]=null}function Ou(e,n){st[ot++]=vt,st[ot++]=xt,st[ot++]=Zt,vt=n.id,xt=n.overflow,Zt=e}var Tn=null,We=null,Re=!1,Jt=null,it=!1,Ki=Error(c(519));function ea(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ns(rt(n,e)),Ki}function Uu(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[cn]=e,n[Dn]=a,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<ks.length;t++)xe(ks[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Aa(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),ar(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||$p(n.textContent,t)?(a.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),a.onScroll!=null&&xe("scroll",n),a.onScrollEnd!=null&&xe("scrollend",n),a.onClick!=null&&(n.onclick=H),n=!0):n=!1,n||ea(e,!0)}function Pu(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:it=!1;return;case 27:case 3:it=!0;return;default:Tn=Tn.return}}function dr(e){if(e!==Tn)return!1;if(!Re)return Pu(e),Re=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||pc(e.type,e.memoizedProps)),t=!t),t&&We&&ea(e),Pu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));We=of(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));We=of(e)}else n===27?(n=We,ma(e.type)?(e=yc,yc=null,We=e):We=n):We=Tn?ct(e.stateNode.nextSibling):null;return!0}function Ua(){We=Tn=null,Re=!1}function Yi(){var e=Jt;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Jt=null),e}function ns(e){Jt===null?Jt=[e]:Jt.push(e)}var Xi=x(null),Pa=null,It=null;function na(e,n,t){F(Xi,n._currentValue),n._currentValue=t}function Ot(e){e._currentValue=Xi.current,O(Xi)}function $i(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Zi(e,n,t,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var i=r.child;s=s.firstContext;e:for(;s!==null;){var p=s;s=r;for(var g=0;g<n.length;g++)if(p.context===n[g]){s.lanes|=t,p=s.alternate,p!==null&&(p.lanes|=t),$i(s.return,t,e),a||(i=null);break e}s=p.next}}else if(r.tag===18){if(i=r.return,i===null)throw Error(c(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),$i(i,t,e),i=null}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}}function pr(e,n,t,a){e=null;for(var r=n,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var i=r.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var p=r.type;Kn(r.pendingProps.value,i.value)||(e!==null?e.push(p):e=[p])}}else if(r===Ae.current){if(i=r.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(As):e=[As])}r=r.return}e!==null&&Zi(n,e,t,a),n.flags|=262144}function mo(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Pa=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Lu(Pa,e)}function ho(e,n){return Pa===null&&La(e),Lu(e,n)}function Lu(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},It===null){if(e===null)throw Error(c(308));It=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else It=It.next=n;return t}var mh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},hh=l.unstable_scheduleCallback,gh=l.unstable_NormalPriority,hn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ji(){return{controller:new mh,data:new Map,refCount:0}}function ts(e){e.refCount--,e.refCount===0&&hh(gh,function(){e.controller.abort()})}var as=null,el=0,fr=0,mr=null;function yh(e,n){if(as===null){var t=as=[];el=0,fr=ac(),mr={status:"pending",value:void 0,then:function(a){t.push(a)}}}return el++,n.then(ju,ju),n}function ju(){if(--el===0&&as!==null){mr!==null&&(mr.status="fulfilled");var e=as;as=null,fr=0,mr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bh(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var Bu=M.S;M.S=function(e,n){Sp=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yh(e,n),Bu!==null&&Bu(e,n)};var ja=x(null);function nl(){var e=ja.current;return e!==null?e:qe.pooledCache}function go(e,n){n===null?F(ja,ja.current):F(ja,n.pool)}function _u(){var e=nl();return e===null?null:{parent:hn._currentValue,pool:e}}var hr=Error(c(460)),tl=Error(c(474)),yo=Error(c(542)),bo={then:function(){}};function zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hu(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(H,H),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qu(e),e;default:if(typeof n.status=="string")n.then(H,H);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=a}},function(a){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qu(e),e}throw _a=n,hr}}function Ba(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(_a=t,hr):t}}var _a=null;function Fu(){if(_a===null)throw Error(c(459));var e=_a;return _a=null,e}function qu(e){if(e===hr||e===yo)throw Error(c(483))}var gr=null,rs=0;function vo(e){var n=rs;return rs+=1,gr===null&&(gr=[]),Hu(gr,e,n)}function ss(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xo(e,n){throw n.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qu(e){function n(w,S){if(e){var C=w.deletions;C===null?(w.deletions=[S],w.flags|=16):C.push(S)}}function t(w,S){if(!e)return null;for(;S!==null;)n(w,S),S=S.sibling;return null}function a(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function r(w,S){return w=Dt(w,S),w.index=0,w.sibling=null,w}function s(w,S,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<S?(w.flags|=67108866,S):C):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function i(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function p(w,S,C,L){return S===null||S.tag!==6?(S=Qi(C,w.mode,L),S.return=w,S):(S=r(S,C),S.return=w,S)}function g(w,S,C,L){var ne=C.type;return ne===K?N(w,S,C.props.children,L,C.key):S!==null&&(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type)?(S=r(S,C.props),ss(S,C),S.return=w,S):(S=po(C.type,C.key,C.props,null,w.mode,L),ss(S,C),S.return=w,S)}function T(w,S,C,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=Vi(C,w.mode,L),S.return=w,S):(S=r(S,C.children||[]),S.return=w,S)}function N(w,S,C,L,ne){return S===null||S.tag!==7?(S=Oa(C,w.mode,L,ne),S.return=w,S):(S=r(S,C),S.return=w,S)}function j(w,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Qi(""+S,w.mode,C),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return C=po(S.type,S.key,S.props,null,w.mode,C),ss(C,S),C.return=w,C;case z:return S=Vi(S,w.mode,C),S.return=w,S;case Te:return S=Ba(S),j(w,S,C)}if(vn(S)||nn(S))return S=Oa(S,w.mode,C,null),S.return=w,S;if(typeof S.then=="function")return j(w,vo(S),C);if(S.$$typeof===G)return j(w,ho(w,S),C);xo(w,S)}return null}function E(w,S,C,L){var ne=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return ne!==null?null:p(w,S,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Q:return C.key===ne?g(w,S,C,L):null;case z:return C.key===ne?T(w,S,C,L):null;case Te:return C=Ba(C),E(w,S,C,L)}if(vn(C)||nn(C))return ne!==null?null:N(w,S,C,L,null);if(typeof C.then=="function")return E(w,S,vo(C),L);if(C.$$typeof===G)return E(w,S,ho(w,C),L);xo(w,C)}return null}function A(w,S,C,L,ne){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return w=w.get(C)||null,p(S,w,""+L,ne);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Q:return w=w.get(L.key===null?C:L.key)||null,g(S,w,L,ne);case z:return w=w.get(L.key===null?C:L.key)||null,T(S,w,L,ne);case Te:return L=Ba(L),A(w,S,C,L,ne)}if(vn(L)||nn(L))return w=w.get(C)||null,N(S,w,L,ne,null);if(typeof L.then=="function")return A(w,S,C,vo(L),ne);if(L.$$typeof===G)return A(w,S,C,ho(S,L),ne);xo(S,L)}return null}function W(w,S,C,L){for(var ne=null,Me=null,J=S,he=S=0,ke=null;J!==null&&he<C.length;he++){J.index>he?(ke=J,J=null):ke=J.sibling;var De=E(w,J,C[he],L);if(De===null){J===null&&(J=ke);break}e&&J&&De.alternate===null&&n(w,J),S=s(De,S,he),Me===null?ne=De:Me.sibling=De,Me=De,J=ke}if(he===C.length)return t(w,J),Re&&Nt(w,he),ne;if(J===null){for(;he<C.length;he++)J=j(w,C[he],L),J!==null&&(S=s(J,S,he),Me===null?ne=J:Me.sibling=J,Me=J);return Re&&Nt(w,he),ne}for(J=a(J);he<C.length;he++)ke=A(J,w,he,C[he],L),ke!==null&&(e&&ke.alternate!==null&&J.delete(ke.key===null?he:ke.key),S=s(ke,S,he),Me===null?ne=ke:Me.sibling=ke,Me=ke);return e&&J.forEach(function(va){return n(w,va)}),Re&&Nt(w,he),ne}function ae(w,S,C,L){if(C==null)throw Error(c(151));for(var ne=null,Me=null,J=S,he=S=0,ke=null,De=C.next();J!==null&&!De.done;he++,De=C.next()){J.index>he?(ke=J,J=null):ke=J.sibling;var va=E(w,J,De.value,L);if(va===null){J===null&&(J=ke);break}e&&J&&va.alternate===null&&n(w,J),S=s(va,S,he),Me===null?ne=va:Me.sibling=va,Me=va,J=ke}if(De.done)return t(w,J),Re&&Nt(w,he),ne;if(J===null){for(;!De.done;he++,De=C.next())De=j(w,De.value,L),De!==null&&(S=s(De,S,he),Me===null?ne=De:Me.sibling=De,Me=De);return Re&&Nt(w,he),ne}for(J=a(J);!De.done;he++,De=C.next())De=A(J,w,he,De.value,L),De!==null&&(e&&De.alternate!==null&&J.delete(De.key===null?he:De.key),S=s(De,S,he),Me===null?ne=De:Me.sibling=De,Me=De);return e&&J.forEach(function(Mg){return n(w,Mg)}),Re&&Nt(w,he),ne}function He(w,S,C,L){if(typeof C=="object"&&C!==null&&C.type===K&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Q:e:{for(var ne=C.key;S!==null;){if(S.key===ne){if(ne=C.type,ne===K){if(S.tag===7){t(w,S.sibling),L=r(S,C.props.children),L.return=w,w=L;break e}}else if(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Te&&Ba(ne)===S.type){t(w,S.sibling),L=r(S,C.props),ss(L,C),L.return=w,w=L;break e}t(w,S);break}else n(w,S);S=S.sibling}C.type===K?(L=Oa(C.props.children,w.mode,L,C.key),L.return=w,w=L):(L=po(C.type,C.key,C.props,null,w.mode,L),ss(L,C),L.return=w,w=L)}return i(w);case z:e:{for(ne=C.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){t(w,S.sibling),L=r(S,C.children||[]),L.return=w,w=L;break e}else{t(w,S);break}else n(w,S);S=S.sibling}L=Vi(C,w.mode,L),L.return=w,w=L}return i(w);case Te:return C=Ba(C),He(w,S,C,L)}if(vn(C))return W(w,S,C,L);if(nn(C)){if(ne=nn(C),typeof ne!="function")throw Error(c(150));return C=ne.call(C),ae(w,S,C,L)}if(typeof C.then=="function")return He(w,S,vo(C),L);if(C.$$typeof===G)return He(w,S,ho(w,C),L);xo(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(t(w,S.sibling),L=r(S,C),L.return=w,w=L):(t(w,S),L=Qi(C,w.mode,L),L.return=w,w=L),i(w)):t(w,S)}return function(w,S,C,L){try{rs=0;var ne=He(w,S,C,L);return gr=null,ne}catch(J){if(J===hr||J===yo)throw J;var Me=Yn(29,J,null,w.mode);return Me.lanes=L,Me.return=w,Me}}}var za=Qu(!0),Vu=Qu(!1),ta=!1;function al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,n=uo(e),Au(e,null,t),n}return co(e,a,n,t),uo(e)}function os(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,se(e,t)}}function sl(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?r=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var ol=!1;function is(){if(ol){var e=mr;if(e!==null)throw e}}function ls(e,n,t,a){ol=!1;var r=e.updateQueue;ta=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var g=p,T=g.next;g.next=null,i===null?s=T:i.next=T,i=g;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==i&&(p===null?N.firstBaseUpdate=T:p.next=T,N.lastBaseUpdate=g))}if(s!==null){var j=r.baseState;i=0,N=T=g=null,p=s;do{var E=p.lane&-536870913,A=E!==p.lane;if(A?(we&E)===E:(a&E)===E){E!==0&&E===fr&&(ol=!0),N!==null&&(N=N.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var W=e,ae=p;E=n;var He=t;switch(ae.tag){case 1:if(W=ae.payload,typeof W=="function"){j=W.call(He,j,E);break e}j=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ae.payload,E=typeof W=="function"?W.call(He,j,E):W,E==null)break e;j=U({},j,E);break e;case 2:ta=!0}}E=p.callback,E!==null&&(e.flags|=64,A&&(e.flags|=8192),A=r.callbacks,A===null?r.callbacks=[E]:A.push(E))}else A={lane:E,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(T=N=A,g=j):N=N.next=A,i|=E;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;A=p,p=A.next,A.next=null,r.lastBaseUpdate=A,r.shared.pending=null}}while(!0);N===null&&(g=j),r.baseState=g,r.firstBaseUpdate=T,r.lastBaseUpdate=N,s===null&&(r.shared.lanes=0),ca|=i,e.lanes=i,e.memoizedState=j}}function Gu(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Wu(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Gu(t[e],n)}var yr=x(null),So=x(0);function Ku(e,n){e=Ft,F(So,e),F(yr,n),Ft=e|n.baseLanes}function il(){F(So,Ft),F(yr,yr.current)}function ll(){Ft=So.current,O(yr),O(So)}var Xn=x(null),lt=null;function sa(e){var n=e.alternate;F(dn,dn.current&1),F(Xn,e),lt===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(lt=e)}function cl(e){F(dn,dn.current),F(Xn,e),lt===null&&(lt=e)}function Yu(e){e.tag===22?(F(dn,dn.current),F(Xn,e),lt===null&&(lt=e)):oa()}function oa(){F(dn,dn.current),F(Xn,Xn.current)}function $n(e){O(Xn),lt===e&&(lt=null),O(dn)}var dn=x(0);function wo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||hc(t)||gc(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ut=0,me=null,_e=null,gn=null,ko=!1,br=!1,Ha=!1,Co=0,cs=0,vr=null,vh=0;function rn(){throw Error(c(321))}function ul(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Kn(e[t],n[t]))return!1;return!0}function dl(e,n,t,a,r,s){return Ut=s,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Id:Rl,Ha=!1,s=t(a,r),Ha=!1,br&&(s=$u(n,t,a,r)),Xu(e),s}function Xu(e){M.H=ps;var n=_e!==null&&_e.next!==null;if(Ut=0,gn=_e=me=null,ko=!1,cs=0,vr=null,n)throw Error(c(300));e===null||yn||(e=e.dependencies,e!==null&&mo(e)&&(yn=!0))}function $u(e,n,t,a){me=e;var r=0;do{if(br&&(vr=null),cs=0,br=!1,25<=r)throw Error(c(301));if(r+=1,gn=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}M.H=Od,s=n(t,a)}while(br);return s}function xh(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?us(n):n,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(me.flags|=1024),n}function pl(){var e=Co!==0;return Co=0,e}function fl(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ml(e){if(ko){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ko=!1}Ut=0,gn=_e=me=null,br=!1,cs=Co=0,vr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?me.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(_e===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=gn===null?me.memoizedState:gn.next;if(n!==null)gn=n,_e=e;else{if(e===null)throw me.alternate===null?Error(c(467)):Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},gn===null?me.memoizedState=gn=e:gn=gn.next=e}return gn}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(e){var n=cs;return cs+=1,vr===null&&(vr=[]),e=Hu(vr,e,n),n=me,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Id:Rl),e}function Ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return us(e);if(e.$$typeof===G)return Rn(e)}throw Error(c(438,String(e)))}function hl(e){var n=null,t=me.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=me.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=To(),me.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=en;return n.index++,t}function Pt(e,n){return typeof n=="function"?n(e):n}function Eo(e){var n=pn();return gl(n,_e,e)}function gl(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var r=e.baseQueue,s=a.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}n.baseQueue=r=s,a.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{n=r.next;var p=i=null,g=null,T=n,N=!1;do{var j=T.lane&-536870913;if(j!==T.lane?(we&j)===j:(Ut&j)===j){var E=T.revertLane;if(E===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),j===fr&&(N=!0);else if((Ut&E)===E){T=T.next,E===fr&&(N=!0);continue}else j={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(p=g=j,i=s):g=g.next=j,me.lanes|=E,ca|=E;j=T.action,Ha&&t(s,j),s=T.hasEagerState?T.eagerState:t(s,j)}else E={lane:j,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(p=g=E,i=s):g=g.next=E,me.lanes|=j,ca|=j;T=T.next}while(T!==null&&T!==n);if(g===null?i=s:g.next=p,!Kn(s,e.memoizedState)&&(yn=!0,N&&(t=mr,t!==null)))throw t;e.memoizedState=s,e.baseState=i,e.baseQueue=g,a.lastRenderedState=s}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function yl(e){var n=pn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);Kn(s,n.memoizedState)||(yn=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Zu(e,n,t){var a=me,r=pn(),s=Re;if(s){if(t===void 0)throw Error(c(407));t=t()}else t=n();var i=!Kn((_e||r).memoizedState,t);if(i&&(r.memoizedState=t,yn=!0),r=r.queue,xl(nd.bind(null,a,r,e),[e]),r.getSnapshot!==n||i||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,xr(9,{destroy:void 0},ed.bind(null,a,r,t,n),null),qe===null)throw Error(c(349));s||(Ut&127)!==0||Ju(a,n,t)}return t}function Ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n=To(),me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ed(e,n,t,a){n.value=t,n.getSnapshot=a,td(n)&&ad(e)}function nd(e,n,t){return t(function(){td(n)&&ad(e)})}function td(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Kn(e,t)}catch{return!0}}function ad(e){var n=Ia(e,2);n!==null&&Vn(n,e,2)}function bl(e){var n=Pn();if(typeof e=="function"){var t=e;if(e=t(),Ha){yt(!0);try{t()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},n}function rd(e,n,t,a){return e.baseState=t,gl(e,_e,typeof a=="function"?a:Pt)}function Sh(e,n,t,a,r){if(Do(e))throw Error(c(485));if(e=n.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){s.listeners.push(i)}};M.T!==null?t(!0):s.isTransition=!1,a(s),t=n.pending,t===null?(s.next=n.pending=s,sd(n,s)):(s.next=t.next,n.pending=t.next=s)}}function sd(e,n){var t=n.action,a=n.payload,r=e.state;if(n.isTransition){var s=M.T,i={};M.T=i;try{var p=t(r,a),g=M.S;g!==null&&g(i,p),od(e,n,p)}catch(T){vl(e,n,T)}finally{s!==null&&i.types!==null&&(s.types=i.types),M.T=s}}else try{s=t(r,a),od(e,n,s)}catch(T){vl(e,n,T)}}function od(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){id(e,n,a)},function(a){return vl(e,n,a)}):id(e,n,t)}function id(e,n,t){n.status="fulfilled",n.value=t,ld(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,sd(e,t)))}function vl(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,ld(n),n=n.next;while(n!==a)}e.action=null}function ld(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cd(e,n){return n}function ud(e,n){if(Re){var t=qe.formState;if(t!==null){e:{var a=me;if(Re){if(We){n:{for(var r=We,s=it;r.nodeType!==8;){if(!s){r=null;break n}if(r=ct(r.nextSibling),r===null){r=null;break n}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){We=ct(r.nextSibling),a=r.data==="F!";break e}}ea(a)}a=!1}a&&(n=t[0])}}return t=Pn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cd,lastRenderedState:n},t.queue=a,t=Md.bind(null,me,a),a.dispatch=t,a=bl(!1),s=Tl.bind(null,me,!1,a.queue),a=Pn(),r={state:n,dispatch:null,action:e,pending:null},a.queue=r,t=Sh.bind(null,me,r,s,t),r.dispatch=t,a.memoizedState=e,[n,t,!1]}function dd(e){var n=pn();return pd(n,_e,e)}function pd(e,n,t){if(n=gl(e,n,cd)[0],e=Eo(Pt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=us(n)}catch(i){throw i===hr?yo:i}else a=n;n=pn();var r=n.queue,s=r.dispatch;return t!==n.memoizedState&&(me.flags|=2048,xr(9,{destroy:void 0},wh.bind(null,r,t),null)),[a,s,e]}function wh(e,n){e.action=n}function fd(e){var n=pn(),t=_e;if(t!==null)return pd(n,t,e);pn(),n=n.memoizedState,t=pn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function xr(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=me.updateQueue,n===null&&(n=To(),me.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function md(){return pn().memoizedState}function Ao(e,n,t,a){var r=Pn();me.flags|=e,r.memoizedState=xr(1|n,{destroy:void 0},t,a===void 0?null:a)}function Mo(e,n,t,a){var r=pn();a=a===void 0?null:a;var s=r.memoizedState.inst;_e!==null&&a!==null&&ul(a,_e.memoizedState.deps)?r.memoizedState=xr(n,s,t,a):(me.flags|=e,r.memoizedState=xr(1|n,s,t,a))}function hd(e,n){Ao(8390656,8,e,n)}function xl(e,n){Mo(2048,8,e,n)}function kh(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=To(),me.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function gd(e){var n=pn().memoizedState;return kh({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function yd(e,n){return Mo(4,2,e,n)}function bd(e,n){return Mo(4,4,e,n)}function vd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xd(e,n,t){t=t!=null?t.concat([e]):null,Mo(4,4,vd.bind(null,n,e),t)}function Sl(){}function Sd(e,n){var t=pn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&ul(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function wd(e,n){var t=pn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&ul(n,a[1]))return a[0];if(a=e(),Ha){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a}function wl(e,n,t){return t===void 0||(Ut&1073741824)!==0&&(we&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=kp(),me.lanes|=e,ca|=e,t)}function kd(e,n,t,a){return Kn(t,n)?t:yr.current!==null?(e=wl(e,t,a),Kn(e,n)||(yn=!0),e):(Ut&42)===0||(Ut&1073741824)!==0&&(we&261930)===0?(yn=!0,e.memoizedState=t):(e=kp(),me.lanes|=e,ca|=e,n)}function Cd(e,n,t,a,r){var s=I.p;I.p=s!==0&&8>s?s:8;var i=M.T,p={};M.T=p,Tl(e,!1,n,t);try{var g=r(),T=M.S;if(T!==null&&T(p,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var N=bh(g,a);ds(e,n,N,et(e))}else ds(e,n,a,et(e))}catch(j){ds(e,n,{then:function(){},status:"rejected",reason:j},et())}finally{I.p=s,i!==null&&p.types!==null&&(i.types=p.types),M.T=i}}function Ch(){}function kl(e,n,t,a){if(e.tag!==5)throw Error(c(476));var r=Td(e).queue;Cd(e,r,n,_,t===null?Ch:function(){return Rd(e),t(a)})}function Td(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:_},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rd(e){var n=Td(e);n.next===null&&(n=e.alternate.memoizedState),ds(e,n.next.queue,{},et())}function Cl(){return Rn(As)}function Ed(){return pn().memoizedState}function Ad(){return pn().memoizedState}function Th(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=et();e=aa(t);var a=ra(n,e,t);a!==null&&(Vn(a,n,t),os(a,n,t)),n={cache:Ji()},e.payload=n;return}n=n.return}}function Rh(e,n,t){var a=et();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Do(e)?Dd(n,t):(t=Fi(e,n,t,a),t!==null&&(Vn(t,e,a),Nd(t,n,a)))}function Md(e,n,t){var a=et();ds(e,n,t,a)}function ds(e,n,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Do(e))Dd(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,p=s(i,t);if(r.hasEagerState=!0,r.eagerState=p,Kn(p,i))return co(e,n,r,0),qe===null&&lo(),!1}catch{}if(t=Fi(e,n,r,a),t!==null)return Vn(t,e,a),Nd(t,n,a),!0}return!1}function Tl(e,n,t,a){if(a={lane:2,revertLane:ac(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Do(e)){if(n)throw Error(c(479))}else n=Fi(e,t,a,2),n!==null&&Vn(n,e,2)}function Do(e){var n=e.alternate;return e===me||n!==null&&n===me}function Dd(e,n){br=ko=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Nd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,se(e,t)}}var ps={readContext:Rn,use:Ro,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};ps.useEffectEvent=rn;var Id={readContext:Rn,use:Ro,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:hd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ao(4194308,4,vd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){Ao(4,2,e,n)},useMemo:function(e,n){var t=Pn();n=n===void 0?null:n;var a=e();if(Ha){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Pn();if(t!==void 0){var r=t(n);if(Ha){yt(!0);try{t(n)}finally{yt(!1)}}}else r=n;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Rh.bind(null,me,e),[a.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=bl(e);var n=e.queue,t=Md.bind(null,me,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Sl,useDeferredValue:function(e,n){var t=Pn();return wl(t,e,n)},useTransition:function(){var e=bl(!1);return e=Cd.bind(null,me,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=me,r=Pn();if(Re){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),qe===null)throw Error(c(349));(we&127)!==0||Ju(a,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,hd(nd.bind(null,a,s,e),[e]),a.flags|=2048,xr(9,{destroy:void 0},ed.bind(null,a,s,t,n),null),t},useId:function(){var e=Pn(),n=qe.identifierPrefix;if(Re){var t=xt,a=vt;t=(a&~(1<<32-On(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Co++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=vh++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Cl,useFormState:ud,useActionState:ud,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Tl.bind(null,me,!0,t),t.dispatch=n,[e,n]},useMemoCache:hl,useCacheRefresh:function(){return Pn().memoizedState=Th.bind(null,me)},useEffectEvent:function(e){var n=Pn(),t={impl:e};return n.memoizedState=t,function(){if((Ie&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Rl={readContext:Rn,use:Ro,useCallback:Sd,useContext:Rn,useEffect:xl,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:wd,useReducer:Eo,useRef:md,useState:function(){return Eo(Pt)},useDebugValue:Sl,useDeferredValue:function(e,n){var t=pn();return kd(t,_e.memoizedState,e,n)},useTransition:function(){var e=Eo(Pt)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:us(e),n]},useSyncExternalStore:Zu,useId:Ed,useHostTransitionStatus:Cl,useFormState:dd,useActionState:dd,useOptimistic:function(e,n){var t=pn();return rd(t,_e,e,n)},useMemoCache:hl,useCacheRefresh:Ad};Rl.useEffectEvent=gd;var Od={readContext:Rn,use:Ro,useCallback:Sd,useContext:Rn,useEffect:xl,useImperativeHandle:xd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:wd,useReducer:yl,useRef:md,useState:function(){return yl(Pt)},useDebugValue:Sl,useDeferredValue:function(e,n){var t=pn();return _e===null?wl(t,e,n):kd(t,_e.memoizedState,e,n)},useTransition:function(){var e=yl(Pt)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:us(e),n]},useSyncExternalStore:Zu,useId:Ed,useHostTransitionStatus:Cl,useFormState:fd,useActionState:fd,useOptimistic:function(e,n){var t=pn();return _e!==null?rd(t,_e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:hl,useCacheRefresh:Ad};Od.useEffectEvent=gd;function El(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Al={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=et(),r=aa(a);r.payload=n,t!=null&&(r.callback=t),n=ra(e,r,a),n!==null&&(Vn(n,e,a),os(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=et(),r=aa(a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=ra(e,r,a),n!==null&&(Vn(n,e,a),os(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=et(),a=aa(t);a.tag=2,n!=null&&(a.callback=n),n=ra(e,a,t),n!==null&&(Vn(n,e,t),os(n,e,t))}};function Ud(e,n,t,a,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,i):n.prototype&&n.prototype.isPureReactComponent?!Zr(t,a)||!Zr(r,s):!0}function Pd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Al.enqueueReplaceState(n,n.state,null)}function Fa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=U({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Ld(e){io(e)}function jd(e){console.error(e)}function Bd(e){io(e)}function No(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function _d(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ml(e,n,t){return t=aa(t),t.tag=3,t.payload={element:null},t.callback=function(){No(e,n)},t}function zd(e){return e=aa(e),e.tag=3,e}function Hd(e,n,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=a.value;e.payload=function(){return r(s)},e.callback=function(){_d(n,t,a)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){_d(n,t,a),typeof r!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function Eh(e,n,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&pr(n,t,r,!0),t=Xn.current,t!==null){switch(t.tag){case 31:case 13:return lt===null?qo():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===bo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ec(e,a,r)),!1;case 22:return t.flags|=65536,a===bo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ec(e,a,r)),!1}throw Error(c(435,t.tag))}return ec(e,a,r),qo(),!1}if(Re)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,a!==Ki&&(e=Error(c(422),{cause:a}),ns(rt(e,t)))):(a!==Ki&&(n=Error(c(423),{cause:a}),ns(rt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=rt(a,t),r=Ml(e.stateNode,a,r),sl(e,r),sn!==4&&(sn=2)),!1;var s=Error(c(520),{cause:a});if(s=rt(s,t),xs===null?xs=[s]:xs.push(s),sn!==4&&(sn=2),n===null)return!0;a=rt(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Ml(t.stateNode,a,e),sl(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ua===null||!ua.has(s))))return t.flags|=65536,r&=-r,t.lanes|=r,r=zd(r),Hd(r,e,t,a),sl(t,r),!1}t=t.return}while(t!==null);return!1}var Dl=Error(c(461)),yn=!1;function En(e,n,t,a){n.child=e===null?Vu(n,null,t,a):za(n,e.child,t,a)}function Fd(e,n,t,a,r){t=t.render;var s=n.ref;if("ref"in a){var i={};for(var p in a)p!=="ref"&&(i[p]=a[p])}else i=a;return La(n),a=dl(e,n,t,i,s,r),p=pl(),e!==null&&!yn?(fl(e,n,r),Lt(e,n,r)):(Re&&p&&Gi(n),n.flags|=1,En(e,n,a,r),n.child)}function qd(e,n,t,a,r){if(e===null){var s=t.type;return typeof s=="function"&&!qi(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,Qd(e,n,s,a,r)):(e=po(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!Bl(e,r)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:Zr,t(i,a)&&e.ref===n.ref)return Lt(e,n,r)}return n.flags|=1,e=Dt(s,a),e.ref=n.ref,e.return=n,n.child=e}function Qd(e,n,t,a,r){if(e!==null){var s=e.memoizedProps;if(Zr(s,a)&&e.ref===n.ref)if(yn=!1,n.pendingProps=a=s,Bl(e,r))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Lt(e,n,r)}return Nl(e,n,t,a,r)}function Vd(e,n,t,a){var r=a.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(a=n.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~s}else a=0,n.child=null;return Gd(e,n,s,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&go(n,s!==null?s.cachePool:null),s!==null?Ku(n,s):il(),Yu(n);else return a=n.lanes=536870912,Gd(e,n,s!==null?s.baseLanes|t:t,t,a)}else s!==null?(go(n,s.cachePool),Ku(n,s),oa(),n.memoizedState=null):(e!==null&&go(n,null),il(),oa());return En(e,n,r,t),n.child}function fs(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gd(e,n,t,a,r){var s=nl();return s=s===null?null:{parent:hn._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&go(n,null),il(),Yu(n),e!==null&&pr(e,n,a,!0),n.childLanes=r,null}function Io(e,n){return n=Uo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Wd(e,n,t){return za(n,e.child,null,t),e=Io(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Ah(e,n,t){var a=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(a.mode==="hidden")return e=Io(n,a),n.lanes=536870912,fs(null,e);if(cl(n),(e=We)?(e=sf(e,it),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Du(e),t.return=n,n.child=t,Tn=n,We=null)):e=null,e===null)throw ea(n);return n.lanes=536870912,null}return Io(n,a)}var s=e.memoizedState;if(s!==null){var i=s.dehydrated;if(cl(n),r)if(n.flags&256)n.flags&=-257,n=Wd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(yn||pr(e,n,t,!1),r=(t&e.childLanes)!==0,yn||r){if(a=qe,a!==null&&(i=ln(a,t),i!==0&&i!==s.retryLane))throw s.retryLane=i,Ia(e,i),Vn(a,e,i),Dl;qo(),n=Wd(e,n,t)}else e=s.treeContext,We=ct(i.nextSibling),Tn=n,Re=!0,Jt=null,it=!1,e!==null&&Ou(n,e),n=Io(n,a),n.flags|=4096;return n}return e=Dt(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Oo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Nl(e,n,t,a,r){return La(n),t=dl(e,n,t,a,void 0,r),a=pl(),e!==null&&!yn?(fl(e,n,r),Lt(e,n,r)):(Re&&a&&Gi(n),n.flags|=1,En(e,n,t,r),n.child)}function Kd(e,n,t,a,r,s){return La(n),n.updateQueue=null,t=$u(n,a,t,r),Xu(e),a=pl(),e!==null&&!yn?(fl(e,n,s),Lt(e,n,s)):(Re&&a&&Gi(n),n.flags|=1,En(e,n,t,s),n.child)}function Yd(e,n,t,a,r){if(La(n),n.stateNode===null){var s=lr,i=t.contextType;typeof i=="object"&&i!==null&&(s=Rn(i)),s=new t(a,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Al,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=a,s.state=n.memoizedState,s.refs={},al(n),i=t.contextType,s.context=typeof i=="object"&&i!==null?Rn(i):lr,s.state=n.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(El(n,t,i,a),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&Al.enqueueReplaceState(s,s.state,null),ls(n,a,s,r),is(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){s=n.stateNode;var p=n.memoizedProps,g=Fa(t,p);s.props=g;var T=s.context,N=t.contextType;i=lr,typeof N=="object"&&N!==null&&(i=Rn(N));var j=t.getDerivedStateFromProps;N=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=n.pendingProps!==p,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||T!==i)&&Pd(n,s,a,i),ta=!1;var E=n.memoizedState;s.state=E,ls(n,a,s,r),is(),T=n.memoizedState,p||E!==T||ta?(typeof j=="function"&&(El(n,t,j,a),T=n.memoizedState),(g=ta||Ud(n,t,g,a,E,T,i))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=T),s.props=a,s.state=T,s.context=i,a=g):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,rl(e,n),i=n.memoizedProps,N=Fa(t,i),s.props=N,j=n.pendingProps,E=s.context,T=t.contextType,g=lr,typeof T=="object"&&T!==null&&(g=Rn(T)),p=t.getDerivedStateFromProps,(T=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==j||E!==g)&&Pd(n,s,a,g),ta=!1,E=n.memoizedState,s.state=E,ls(n,a,s,r),is();var A=n.memoizedState;i!==j||E!==A||ta||e!==null&&e.dependencies!==null&&mo(e.dependencies)?(typeof p=="function"&&(El(n,t,p,a),A=n.memoizedState),(N=ta||Ud(n,t,N,a,E,A,g)||e!==null&&e.dependencies!==null&&mo(e.dependencies))?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,A,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,A,g)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=A),s.props=a,s.state=A,s.context=g,a=N):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),a=!1)}return s=a,Oo(e,n),a=(n.flags&128)!==0,s||a?(s=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&a?(n.child=za(n,e.child,null,r),n.child=za(n,null,t,r)):En(e,n,t,r),n.memoizedState=s.state,e=n.child):e=Lt(e,n,r),e}function Xd(e,n,t,a){return Ua(),n.flags|=256,En(e,n,t,a),n.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ol(e){return{baseLanes:e,cachePool:_u()}}function Ul(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Jn),e}function $d(e,n,t){var a=n.pendingProps,r=!1,s=(n.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),i&&(r=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(r?sa(n):oa(),(e=We)?(e=sf(e,it),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:vt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},t=Du(e),t.return=n,n.child=t,Tn=n,We=null)):e=null,e===null)throw ea(n);return gc(e)?n.lanes=32:n.lanes=536870912,null}var p=a.children;return a=a.fallback,r?(oa(),r=n.mode,p=Uo({mode:"hidden",children:p},r),a=Oa(a,r,t,null),p.return=n,a.return=n,p.sibling=a,n.child=p,a=n.child,a.memoizedState=Ol(t),a.childLanes=Ul(e,i,t),n.memoizedState=Il,fs(null,a)):(sa(n),Pl(n,p))}var g=e.memoizedState;if(g!==null&&(p=g.dehydrated,p!==null)){if(s)n.flags&256?(sa(n),n.flags&=-257,n=Ll(e,n,t)):n.memoizedState!==null?(oa(),n.child=e.child,n.flags|=128,n=null):(oa(),p=a.fallback,r=n.mode,a=Uo({mode:"visible",children:a.children},r),p=Oa(p,r,t,null),p.flags|=2,a.return=n,p.return=n,a.sibling=p,n.child=a,za(n,e.child,null,t),a=n.child,a.memoizedState=Ol(t),a.childLanes=Ul(e,i,t),n.memoizedState=Il,n=fs(null,a));else if(sa(n),gc(p)){if(i=p.nextSibling&&p.nextSibling.dataset,i)var T=i.dgst;i=T,a=Error(c(419)),a.stack="",a.digest=i,ns({value:a,source:null,stack:null}),n=Ll(e,n,t)}else if(yn||pr(e,n,t,!1),i=(t&e.childLanes)!==0,yn||i){if(i=qe,i!==null&&(a=ln(i,t),a!==0&&a!==g.retryLane))throw g.retryLane=a,Ia(e,a),Vn(i,e,a),Dl;hc(p)||qo(),n=Ll(e,n,t)}else hc(p)?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,We=ct(p.nextSibling),Tn=n,Re=!0,Jt=null,it=!1,e!==null&&Ou(n,e),n=Pl(n,a.children),n.flags|=4096);return n}return r?(oa(),p=a.fallback,r=n.mode,g=e.child,T=g.sibling,a=Dt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,T!==null?p=Dt(T,p):(p=Oa(p,r,t,null),p.flags|=2),p.return=n,a.return=n,a.sibling=p,n.child=a,fs(null,a),a=n.child,p=e.child.memoizedState,p===null?p=Ol(t):(r=p.cachePool,r!==null?(g=hn._currentValue,r=r.parent!==g?{parent:g,pool:g}:r):r=_u(),p={baseLanes:p.baseLanes|t,cachePool:r}),a.memoizedState=p,a.childLanes=Ul(e,i,t),n.memoizedState=Il,fs(e.child,a)):(sa(n),t=e.child,e=t.sibling,t=Dt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=t,n.memoizedState=null,t)}function Pl(e,n){return n=Uo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uo(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Ll(e,n,t){return za(n,e.child,null,t),e=Pl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),$i(e.return,n,t)}function jl(e,n,t,a,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:s}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r,i.treeForkCount=s)}function Jd(e,n,t){var a=n.pendingProps,r=a.revealOrder,s=a.tail;a=a.children;var i=dn.current,p=(i&2)!==0;if(p?(i=i&1|2,n.flags|=128):i&=1,F(dn,i),En(e,n,a,t),a=Re?es:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,t,n);else if(e.tag===19)Zd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&wo(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),jl(n,!1,r,t,s,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&wo(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}jl(n,!0,t,null,s,a);break;case"together":jl(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Lt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ca|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(pr(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bl(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&mo(e)))}function Mh(e,n,t){switch(n.tag){case 3:kn(n,n.stateNode.containerInfo),na(n,hn,e.memoizedState.cache),Ua();break;case 27:case 5:gt(n);break;case 4:kn(n,n.stateNode.containerInfo);break;case 10:na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cl(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(sa(n),n.flags|=128,null):(t&n.child.childLanes)!==0?$d(e,n,t):(sa(n),e=Lt(e,n,t),e!==null?e.sibling:null);sa(n);break;case 19:var r=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(pr(e,n,t,!1),a=(t&n.childLanes)!==0),r){if(a)return Jd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(dn,dn.current),a)break;return null;case 22:return n.lanes=0,Vd(e,n,t,n.pendingProps);case 24:na(n,hn,e.memoizedState.cache)}return Lt(e,n,t)}function ep(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!Bl(e,t)&&(n.flags&128)===0)return yn=!1,Mh(e,n,t);yn=(e.flags&131072)!==0}else yn=!1,Re&&(n.flags&1048576)!==0&&Iu(n,es,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Ba(n.elementType),n.type=e,typeof e=="function")qi(e)?(a=Fa(e,a),n.tag=1,n=Yd(null,n,e,a,t)):(n.tag=0,n=Nl(null,n,e,a,t));else{if(e!=null){var r=e.$$typeof;if(r===ie){n.tag=11,n=Fd(null,n,e,a,t);break e}else if(r===te){n.tag=14,n=qd(null,n,e,a,t);break e}}throw n=tn(e)||e,Error(c(306,n,""))}}return n;case 0:return Nl(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,r=Fa(a,n.pendingProps),Yd(e,n,a,r,t);case 3:e:{if(kn(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var s=n.memoizedState;r=s.element,rl(e,n),ls(n,a,null,t);var i=n.memoizedState;if(a=i.cache,na(n,hn,a),a!==s.cache&&Zi(n,[hn],t,!0),is(),a=i.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=Xd(e,n,a,t);break e}else if(a!==r){r=rt(Error(c(424)),n),ns(r),n=Xd(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ct(e.firstChild),Tn=n,Re=!0,Jt=null,it=!0,t=Vu(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ua(),a===r){n=Lt(e,n,t);break e}En(e,n,a,t)}n=n.child}return n;case 26:return Oo(e,n),e===null?(t=pf(n.type,null,n.pendingProps,null))?n.memoizedState=t:Re||(t=n.type,e=n.pendingProps,a=Xo(ge.current).createElement(t),a[cn]=n,a[Dn]=e,An(a,t,e),fn(a),n.stateNode=a):n.memoizedState=pf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return gt(n),e===null&&Re&&(a=n.stateNode=cf(n.type,n.pendingProps,ge.current),Tn=n,it=!0,r=We,ma(n.type)?(yc=r,We=ct(a.firstChild)):We=r),En(e,n,n.pendingProps.children,t),Oo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((r=a=We)&&(a=sg(a,n.type,n.pendingProps,it),a!==null?(n.stateNode=a,Tn=n,We=ct(a.firstChild),it=!1,r=!0):r=!1),r||ea(n)),gt(n),r=n.type,s=n.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,pc(r,s)?a=null:i!==null&&pc(r,i)&&(n.flags|=32),n.memoizedState!==null&&(r=dl(e,n,xh,null,null,t),As._currentValue=r),Oo(e,n),En(e,n,a,t),n.child;case 6:return e===null&&Re&&((e=t=We)&&(t=og(t,n.pendingProps,it),t!==null?(n.stateNode=t,Tn=n,We=null,e=!0):e=!1),e||ea(n)),null;case 13:return $d(e,n,t);case 4:return kn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=za(n,null,a,t):En(e,n,a,t),n.child;case 11:return Fd(e,n,n.type,n.pendingProps,t);case 7:return En(e,n,n.pendingProps,t),n.child;case 8:return En(e,n,n.pendingProps.children,t),n.child;case 12:return En(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,na(n,n.type,a.value),En(e,n,a.children,t),n.child;case 9:return r=n.type._context,a=n.pendingProps.children,La(n),r=Rn(r),a=a(r),n.flags|=1,En(e,n,a,t),n.child;case 14:return qd(e,n,n.type,n.pendingProps,t);case 15:return Qd(e,n,n.type,n.pendingProps,t);case 19:return Jd(e,n,t);case 31:return Ah(e,n,t);case 22:return Vd(e,n,t,n.pendingProps);case 24:return La(n),a=Rn(hn),e===null?(r=nl(),r===null&&(r=qe,s=Ji(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=t),r=s),n.memoizedState={parent:a,cache:r},al(n),na(n,hn,r)):((e.lanes&t)!==0&&(rl(e,n),ls(n,null,null,t),is()),r=e.memoizedState,s=n.memoizedState,r.parent!==a?(r={parent:a,cache:a},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),na(n,hn,a)):(a=s.cache,na(n,hn,a),a!==r.cache&&Zi(n,[hn],t,!0))),En(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function jt(e){e.flags|=4}function _l(e,n,t,a,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Ep())e.flags|=8192;else throw _a=bo,tl}else e.flags&=-16777217}function np(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(n))if(Ep())e.flags|=8192;else throw _a=bo,tl}function Po(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?le():536870912,e.lanes|=n,Cr|=n)}function ms(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Dh(e,n,t){var a=n.pendingProps;switch(Wi(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ot(hn),an(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(dr(n)?jt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yi())),Ke(n),null;case 26:var r=n.type,s=n.memoizedState;return e===null?(jt(n),s!==null?(Ke(n),np(n,s)):(Ke(n),_l(n,r,null,a,t))):s?s!==e.memoizedState?(jt(n),Ke(n),np(n,s)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&jt(n),Ke(n),_l(n,r,e,a,t)),null;case 27:if(Ka(n),t=ge.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&jt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}e=Y.current,dr(n)?Uu(n):(e=cf(r,a,t),n.stateNode=e,jt(n))}return Ke(n),null;case 5:if(Ka(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&jt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Ke(n),null}if(s=Y.current,dr(n))Uu(n);else{var i=Xo(ge.current);switch(s){case 1:s=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=i.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?i.createElement(r,{is:a.is}):i.createElement(r)}}s[cn]=n,s[Dn]=a;e:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)s.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=s;e:switch(An(s,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jt(n)}}return Ke(n),_l(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&jt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=ge.current,dr(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,r=Tn,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||$p(e.nodeValue,t)),e||ea(n,!0)}else e=Xo(e).createTextNode(a),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=dr(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[cn]=n}else Ua(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else t=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Ke(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=dr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[cn]=n}else Ua(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),r=!1}else r=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Po(n,n.updateQueue),Ke(n),null);case 4:return an(),e===null&&ic(n.stateNode.containerInfo),Ke(n),null;case 10:return Ot(n.type),Ke(n),null;case 19:if(O(dn),a=n.memoizedState,a===null)return Ke(n),null;if(r=(n.flags&128)!==0,s=a.rendering,s===null)if(r)ms(a,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=wo(e),s!==null){for(n.flags|=128,ms(a,!1),e=s.updateQueue,n.updateQueue=e,Po(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Mu(t,e),t=t.sibling;return F(dn,dn.current&1|2),Re&&Nt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&on()>zo&&(n.flags|=128,r=!0,ms(a,!1),n.lanes=4194304)}else{if(!r)if(e=wo(s),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Po(n,e),ms(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Re)return Ke(n),null}else 2*on()-a.renderingStartTime>zo&&t!==536870912&&(n.flags|=128,r=!0,ms(a,!1),n.lanes=4194304);a.isBackwards?(s.sibling=n.child,n.child=s):(e=a.last,e!==null?e.sibling=s:n.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=on(),e.sibling=null,t=dn.current,F(dn,r?t&1|2:t&1),Re&&Nt(n,a.treeForkCount),e):(Ke(n),null);case 22:case 23:return $n(n),ll(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),t=n.updateQueue,t!==null&&Po(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&O(ja),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Ot(hn),Ke(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function Nh(e,n){switch(Wi(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ot(hn),an(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ka(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(c(340));Ua()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ua()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return O(dn),null;case 4:return an(),null;case 10:return Ot(n.type),null;case 22:case 23:return $n(n),ll(),e!==null&&O(ja),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ot(hn),null;case 25:return null;default:return null}}function tp(e,n){switch(Wi(n),n.tag){case 3:Ot(hn),an();break;case 26:case 27:case 5:Ka(n);break;case 4:an();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:O(dn);break;case 10:Ot(n.type);break;case 22:case 23:$n(n),ll(),e!==null&&O(ja);break;case 24:Ot(hn)}}function hs(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&e)===e){a=void 0;var s=t.create,i=t.inst;a=s(),i.destroy=a}t=t.next}while(t!==r)}}catch(p){Be(n,n.return,p)}}function ia(e,n,t){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&e)===e){var i=a.inst,p=i.destroy;if(p!==void 0){i.destroy=void 0,r=n;var g=t,T=p;try{T()}catch(N){Be(r,g,N)}}}a=a.next}while(a!==s)}}catch(N){Be(n,n.return,N)}}function ap(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Wu(n,t)}catch(a){Be(e,e.return,a)}}}function rp(e,n,t){t.props=Fa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Be(e,n,a)}}function gs(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(r){Be(e,n,r)}}function St(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){Be(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Be(e,n,r)}else t.current=null}function sp(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){Be(e,e.return,r)}}function zl(e,n,t){try{var a=e.stateNode;Jh(a,e.type,t,n),a[Dn]=n}catch(r){Be(e,e.return,r)}}function op(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function Hl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=H));else if(a!==4&&(a===27&&ma(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Fl(e,n,t),e=e.sibling;e!==null;)Fl(e,n,t),e=e.sibling}function Lo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&ma(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Lo(e,n,t),e=e.sibling;e!==null;)Lo(e,n,t),e=e.sibling}function ip(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);An(n,a,t),n[cn]=e,n[Dn]=t}catch(s){Be(e,e.return,s)}}var Bt=!1,bn=!1,ql=!1,lp=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Ih(e,n){if(e=e.containerInfo,uc=ai,e=xu(e),Li(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,p=-1,g=-1,T=0,N=0,j=e,E=null;n:for(;;){for(var A;j!==t||r!==0&&j.nodeType!==3||(p=i+r),j!==s||a!==0&&j.nodeType!==3||(g=i+a),j.nodeType===3&&(i+=j.nodeValue.length),(A=j.firstChild)!==null;)E=j,j=A;for(;;){if(j===e)break n;if(E===t&&++T===r&&(p=i),E===s&&++N===a&&(g=i),(A=j.nextSibling)!==null)break;j=E,E=j.parentNode}j=A}t=p===-1||g===-1?null:{start:p,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(dc={focusedElem:e,selectionRange:t},ai=!1,wn=n;wn!==null;)if(n=wn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,wn=e;else for(;wn!==null;){switch(n=wn,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,r=s.memoizedProps,s=s.memoizedState,a=t.stateNode;try{var W=Fa(t.type,r);e=a.getSnapshotBeforeUpdate(W,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(t,t.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)mc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,wn=e;break}wn=n.return}}function cp(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t),a&4&&hs(5,t);break;case 1:if(zt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(i){Be(t,t.return,i)}else{var r=Fa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Be(t,t.return,i)}}a&64&&ap(t),a&512&&gs(t,t.return);break;case 3:if(zt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Wu(e,n)}catch(i){Be(t,t.return,i)}}break;case 27:n===null&&a&4&&ip(t);case 26:case 5:zt(e,t),n===null&&a&4&&sp(t),a&512&&gs(t,t.return);break;case 12:zt(e,t);break;case 31:zt(e,t),a&4&&pp(e,t);break;case 13:zt(e,t),a&4&&fp(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Hh.bind(null,t),ig(e,t))));break;case 22:if(a=t.memoizedState!==null||Bt,!a){n=n!==null&&n.memoizedState!==null||bn,r=Bt;var s=bn;Bt=a,(bn=n)&&!s?Ht(e,t,(t.subtreeFlags&8772)!==0):zt(e,t),Bt=r,bn=s}break;case 30:break;default:zt(e,t)}}function up(e){var n=e.alternate;n!==null&&(e.alternate=null,up(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Hn=!1;function _t(e,n,t){for(t=t.child;t!==null;)dp(e,n,t),t=t.sibling}function dp(e,n,t){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(ka,t)}catch{}switch(t.tag){case 26:bn||St(t,n),_t(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:bn||St(t,n);var a=$e,r=Hn;ma(t.type)&&($e=t.stateNode,Hn=!1),_t(e,n,t),Ts(t.stateNode),$e=a,Hn=r;break;case 5:bn||St(t,n);case 6:if(a=$e,r=Hn,$e=null,_t(e,n,t),$e=a,Hn=r,$e!==null)if(Hn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(t.stateNode)}catch(s){Be(t,n,s)}else try{$e.removeChild(t.stateNode)}catch(s){Be(t,n,s)}break;case 18:$e!==null&&(Hn?(e=$e,af(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ir(e)):af($e,t.stateNode));break;case 4:a=$e,r=Hn,$e=t.stateNode.containerInfo,Hn=!0,_t(e,n,t),$e=a,Hn=r;break;case 0:case 11:case 14:case 15:ia(2,t,n),bn||ia(4,t,n),_t(e,n,t);break;case 1:bn||(St(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&rp(t,n,a)),_t(e,n,t);break;case 21:_t(e,n,t);break;case 22:bn=(a=bn)||t.memoizedState!==null,_t(e,n,t),bn=a;break;default:_t(e,n,t)}}function pp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ir(e)}catch(t){Be(n,n.return,t)}}}function fp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ir(e)}catch(t){Be(n,n.return,t)}}function Oh(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lp),n;default:throw Error(c(435,e.tag))}}function jo(e,n){var t=Oh(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var r=Fh.bind(null,e,a);a.then(r,r)}})}function Fn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a],s=e,i=n,p=i;e:for(;p!==null;){switch(p.tag){case 27:if(ma(p.type)){$e=p.stateNode,Hn=!1;break e}break;case 5:$e=p.stateNode,Hn=!1;break e;case 3:case 4:$e=p.stateNode.containerInfo,Hn=!0;break e}p=p.return}if($e===null)throw Error(c(160));dp(s,i,r),$e=null,Hn=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mp(n,e),n=n.sibling}var pt=null;function mp(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),qn(e),a&4&&(ia(3,e,e.return),hs(3,e),ia(5,e,e.return));break;case 1:Fn(n,e),qn(e),a&512&&(bn||t===null||St(t,t.return)),a&64&&Bt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var r=pt;if(Fn(n,e),qn(e),a&512&&(bn||t===null||St(t,t.return)),a&4){var s=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(a){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Ra]||s[cn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(a),r.head.insertBefore(s,r.querySelector("head > title"))),An(s,a,t),s[cn]=e,fn(s),a=s;break e;case"link":var i=hf("link","href",r).get(a+(t.href||""));if(i){for(var p=0;p<i.length;p++)if(s=i[p],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(p,1);break n}}s=r.createElement(a),An(s,a,t),r.head.appendChild(s);break;case"meta":if(i=hf("meta","content",r).get(a+(t.content||""))){for(p=0;p<i.length;p++)if(s=i[p],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(p,1);break n}}s=r.createElement(a),An(s,a,t),r.head.appendChild(s);break;default:throw Error(c(468,a))}s[cn]=e,fn(s),a=s}e.stateNode=a}else gf(r,e.type,e.stateNode);else e.stateNode=mf(r,a,e.memoizedProps);else s!==a?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,a===null?gf(r,e.type,e.stateNode):mf(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&zl(e,e.memoizedProps,t.memoizedProps)}break;case 27:Fn(n,e),qn(e),a&512&&(bn||t===null||St(t,t.return)),t!==null&&a&4&&zl(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Fn(n,e),qn(e),a&512&&(bn||t===null||St(t,t.return)),e.flags&32){r=e.stateNode;try{re(r,"")}catch(W){Be(e,e.return,W)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,zl(e,r,t!==null?t.memoizedProps:r)),a&1024&&(ql=!0);break;case 6:if(Fn(n,e),qn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(W){Be(e,e.return,W)}}break;case 3:if(Jo=null,r=pt,pt=$o(n.containerInfo),Fn(n,e),pt=r,qn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(W){Be(e,e.return,W)}ql&&(ql=!1,hp(e));break;case 4:a=pt,pt=$o(e.stateNode.containerInfo),Fn(n,e),qn(e),pt=a;break;case 12:Fn(n,e),qn(e);break;case 31:Fn(n,e),qn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,jo(e,a)));break;case 13:Fn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(_o=on()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,jo(e,a)));break;case 22:r=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,T=Bt,N=bn;if(Bt=T||r,bn=N||g,Fn(n,e),bn=N,Bt=T,qn(e),a&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||g||Bt||bn||qa(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(s=g.stateNode,r)i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{p=g.stateNode;var j=g.memoizedProps.style,E=j!=null&&j.hasOwnProperty("display")?j.display:null;p.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(W){Be(g,g.return,W)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=r?"":g.memoizedProps}catch(W){Be(g,g.return,W)}}}else if(n.tag===18){if(t===null){g=n;try{var A=g.stateNode;r?rf(A,!0):rf(g.stateNode,!1)}catch(W){Be(g,g.return,W)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,jo(e,t))));break;case 19:Fn(n,e),qn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,jo(e,a)));break;case 30:break;case 21:break;default:Fn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(op(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var r=t.stateNode,s=Hl(e);Lo(e,s,r);break;case 5:var i=t.stateNode;t.flags&32&&(re(i,""),t.flags&=-33);var p=Hl(e);Lo(e,p,i);break;case 3:case 4:var g=t.stateNode.containerInfo,T=Hl(e);Fl(e,T,g);break;default:throw Error(c(161))}}catch(N){Be(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;hp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cp(e,n.alternate,n),n=n.sibling}function qa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ia(4,n,n.return),qa(n);break;case 1:St(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&rp(n,n.return,t),qa(n);break;case 27:Ts(n.stateNode);case 26:case 5:St(n,n.return),qa(n);break;case 22:n.memoizedState===null&&qa(n);break;case 30:qa(n);break;default:qa(n)}e=e.sibling}}function Ht(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,r=e,s=n,i=s.flags;switch(s.tag){case 0:case 11:case 15:Ht(r,s,t),hs(4,s);break;case 1:if(Ht(r,s,t),a=s,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(T){Be(a,a.return,T)}if(a=s,r=a.updateQueue,r!==null){var p=a.stateNode;try{var g=r.shared.hiddenCallbacks;if(g!==null)for(r.shared.hiddenCallbacks=null,r=0;r<g.length;r++)Gu(g[r],p)}catch(T){Be(a,a.return,T)}}t&&i&64&&ap(s),gs(s,s.return);break;case 27:ip(s);case 26:case 5:Ht(r,s,t),t&&a===null&&i&4&&sp(s),gs(s,s.return);break;case 12:Ht(r,s,t);break;case 31:Ht(r,s,t),t&&i&4&&pp(r,s);break;case 13:Ht(r,s,t),t&&i&4&&fp(r,s);break;case 22:s.memoizedState===null&&Ht(r,s,t),gs(s,s.return);break;case 30:break;default:Ht(r,s,t)}n=n.sibling}}function Ql(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ts(t))}function Vl(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ts(e))}function ft(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gp(e,n,t,a),n=n.sibling}function gp(e,n,t,a){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ft(e,n,t,a),r&2048&&hs(9,n);break;case 1:ft(e,n,t,a);break;case 3:ft(e,n,t,a),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ts(e)));break;case 12:if(r&2048){ft(e,n,t,a),e=n.stateNode;try{var s=n.memoizedProps,i=s.id,p=s.onPostCommit;typeof p=="function"&&p(i,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Be(n,n.return,g)}}else ft(e,n,t,a);break;case 31:ft(e,n,t,a);break;case 13:ft(e,n,t,a);break;case 23:break;case 22:s=n.stateNode,i=n.alternate,n.memoizedState!==null?s._visibility&2?ft(e,n,t,a):ys(e,n):s._visibility&2?ft(e,n,t,a):(s._visibility|=2,Sr(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Ql(i,n);break;case 24:ft(e,n,t,a),r&2048&&Vl(n.alternate,n);break;default:ft(e,n,t,a)}}function Sr(e,n,t,a,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,i=n,p=t,g=a,T=i.flags;switch(i.tag){case 0:case 11:case 15:Sr(s,i,p,g,r),hs(8,i);break;case 23:break;case 22:var N=i.stateNode;i.memoizedState!==null?N._visibility&2?Sr(s,i,p,g,r):ys(s,i):(N._visibility|=2,Sr(s,i,p,g,r)),r&&T&2048&&Ql(i.alternate,i);break;case 24:Sr(s,i,p,g,r),r&&T&2048&&Vl(i.alternate,i);break;default:Sr(s,i,p,g,r)}n=n.sibling}}function ys(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,r=a.flags;switch(a.tag){case 22:ys(t,a),r&2048&&Ql(a.alternate,a);break;case 24:ys(t,a),r&2048&&Vl(a.alternate,a);break;default:ys(t,a)}n=n.sibling}}var bs=8192;function wr(e,n,t){if(e.subtreeFlags&bs)for(e=e.child;e!==null;)yp(e,n,t),e=e.sibling}function yp(e,n,t){switch(e.tag){case 26:wr(e,n,t),e.flags&bs&&e.memoizedState!==null&&vg(t,pt,e.memoizedState,e.memoizedProps);break;case 5:wr(e,n,t);break;case 3:case 4:var a=pt;pt=$o(e.stateNode.containerInfo),wr(e,n,t),pt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=bs,bs=16777216,wr(e,n,t),bs=a):wr(e,n,t));break;default:wr(e,n,t)}}function bp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];wn=a,xp(a,e)}bp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vp(e),e=e.sibling}function vp(e){switch(e.tag){case 0:case 11:case 15:vs(e),e.flags&2048&&ia(9,e,e.return);break;case 3:vs(e);break;case 12:vs(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bo(e)):vs(e);break;default:vs(e)}}function Bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];wn=a,xp(a,e)}bp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ia(8,n,n.return),Bo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Bo(n));break;default:Bo(n)}e=e.sibling}}function xp(e,n){for(;wn!==null;){var t=wn;switch(t.tag){case 0:case 11:case 15:ia(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ts(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,wn=a;else e:for(t=e;wn!==null;){a=wn;var r=a.sibling,s=a.return;if(up(a),a===t){wn=null;break e}if(r!==null){r.return=s,wn=r;break e}wn=s}}}var Uh={getCacheForType:function(e){var n=Rn(hn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Rn(hn).controller.signal}},Ph=typeof WeakMap=="function"?WeakMap:Map,Ie=0,qe=null,ve=null,we=0,je=0,Zn=null,la=!1,kr=!1,Gl=!1,Ft=0,sn=0,ca=0,Qa=0,Wl=0,Jn=0,Cr=0,xs=null,Qn=null,Kl=!1,_o=0,Sp=0,zo=1/0,Ho=null,ua=null,xn=0,da=null,Tr=null,qt=0,Yl=0,Xl=null,wp=null,Ss=0,$l=null;function et(){return(Ie&2)!==0&&we!==0?we&-we:M.T!==null?ac():$a()}function kp(){if(Jn===0)if((we&536870912)===0||Re){var e=Xa;Xa<<=1,(Xa&3932160)===0&&(Xa=262144),Jn=e}else Jn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,t){(e===qe&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Rr(e,0),pa(e,we,Jn,!1)),Fe(e,t),((Ie&2)===0||e!==qe)&&(e===qe&&((Ie&2)===0&&(Qa|=t),sn===4&&pa(e,we,Jn,!1)),wt(e))}function Cp(e,n,t){if((Ie&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||P(e,n),r=a?Bh(e,n):Jl(e,n,!0),s=a;do{if(r===0){kr&&!a&&pa(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!Lh(t)){r=Jl(e,n,!1),s=!1;continue}if(r===2){if(s=n,e.errorRecoveryDisabledLanes&s)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){n=i;e:{var p=e;r=xs;var g=p.current.memoizedState.isDehydrated;if(g&&(Rr(p,i).flags|=256),i=Jl(p,i,!1),i!==2){if(Gl&&!g){p.errorRecoveryDisabledLanes|=s,Qa|=s,r=4;break e}s=Qn,Qn=r,s!==null&&(Qn===null?Qn=s:Qn.push.apply(Qn,s))}r=i}if(s=!1,r!==2)continue}}if(r===1){Rr(e,0),pa(e,n,0,!0);break}e:{switch(a=e,s=r,s){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:pa(a,n,Jn,!la);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(r=_o+300-on(),10<r)){if(pa(a,n,Jn,!la),y(a,0,!0)!==0)break e;qt=n,a.timeoutHandle=nf(Tp.bind(null,a,t,Qn,Ho,Kl,n,Jn,Qa,Cr,la,s,"Throttled",-0,0),r);break e}Tp(a,t,Qn,Ho,Kl,n,Jn,Qa,Cr,la,s,null,-0,0)}}break}while(!0);wt(e)}function Tp(e,n,t,a,r,s,i,p,g,T,N,j,E,A){if(e.timeoutHandle=-1,j=n.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},yp(n,s,j);var W=(s&62914560)===s?_o-on():(s&4194048)===s?Sp-on():0;if(W=xg(j,W),W!==null){qt=s,e.cancelPendingCommit=W(Op.bind(null,e,n,s,t,a,r,i,p,g,N,j,null,E,A)),pa(e,s,i,!T);return}}Op(e,n,s,t,a,r,i,p,g)}function Lh(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pa(e,n,t,a){n&=~Wl,n&=~Qa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var r=n;0<r;){var s=31-On(r),i=1<<s;a[s]=-1,r&=~i}t!==0&&V(e,t,n)}function Fo(){return(Ie&6)===0?(ws(0),!1):!0}function Zl(){if(ve!==null){if(je===0)var e=ve.return;else e=ve,It=Pa=null,ml(e),gr=null,rs=0,e=ve;for(;e!==null;)tp(e.alternate,e),e=e.return;ve=null}}function Rr(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,tg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),qt=0,Zl(),qe=e,ve=t=Dt(e.current,null),we=n,je=0,Zn=null,la=!1,kr=P(e,n),Gl=!1,Cr=Jn=Wl=Qa=ca=sn=0,Qn=xs=null,Kl=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-On(a),s=1<<r;n|=e[r],a&=~s}return Ft=n,lo(),t}function Rp(e,n){me=null,M.H=ps,n===hr||n===yo?(n=Fu(),je=3):n===tl?(n=Fu(),je=4):je=n===Dl?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ve===null&&(sn=1,No(e,rt(n,e.current)))}function Ep(){var e=Xn.current;return e===null?!0:(we&4194048)===we?lt===null:(we&62914560)===we||(we&536870912)!==0?e===lt:!1}function Ap(){var e=M.H;return M.H=ps,e===null?ps:e}function Mp(){var e=M.A;return M.A=Uh,e}function qo(){sn=4,la||(we&4194048)!==we&&Xn.current!==null||(kr=!0),(ca&134217727)===0&&(Qa&134217727)===0||qe===null||pa(qe,we,Jn,!1)}function Jl(e,n,t){var a=Ie;Ie|=2;var r=Ap(),s=Mp();(qe!==e||we!==n)&&(Ho=null,Rr(e,n)),n=!1;var i=sn;e:do try{if(je!==0&&ve!==null){var p=ve,g=Zn;switch(je){case 8:Zl(),i=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var T=je;if(je=0,Zn=null,Er(e,p,g,T),t&&kr){i=0;break e}break;default:T=je,je=0,Zn=null,Er(e,p,g,T)}}jh(),i=sn;break}catch(N){Rp(e,N)}while(!0);return n&&e.shellSuspendCounter++,It=Pa=null,Ie=a,M.H=r,M.A=s,ve===null&&(qe=null,we=0,lo()),i}function jh(){for(;ve!==null;)Dp(ve)}function Bh(e,n){var t=Ie;Ie|=2;var a=Ap(),r=Mp();qe!==e||we!==n?(Ho=null,zo=on()+500,Rr(e,n)):kr=P(e,n);e:do try{if(je!==0&&ve!==null){n=ve;var s=Zn;n:switch(je){case 1:je=0,Zn=null,Er(e,n,s,1);break;case 2:case 9:if(zu(s)){je=0,Zn=null,Np(n);break}n=function(){je!==2&&je!==9||qe!==e||(je=7),wt(e)},s.then(n,n);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:zu(s)?(je=0,Zn=null,Np(n)):(je=0,Zn=null,Er(e,n,s,7));break;case 5:var i=null;switch(ve.tag){case 26:i=ve.memoizedState;case 5:case 27:var p=ve;if(i?yf(i):p.stateNode.complete){je=0,Zn=null;var g=p.sibling;if(g!==null)ve=g;else{var T=p.return;T!==null?(ve=T,Qo(T)):ve=null}break n}}je=0,Zn=null,Er(e,n,s,5);break;case 6:je=0,Zn=null,Er(e,n,s,6);break;case 8:Zl(),sn=6;break e;default:throw Error(c(462))}}_h();break}catch(N){Rp(e,N)}while(!0);return It=Pa=null,M.H=a,M.A=r,Ie=t,ve!==null?0:(qe=null,we=0,lo(),sn)}function _h(){for(;ve!==null&&!Si();)Dp(ve)}function Dp(e){var n=ep(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,n===null?Qo(e):ve=n}function Np(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Kd(t,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Kd(t,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:ml(n);default:tp(t,n),n=ve=Mu(n,Ft),n=ep(t,n,Ft)}e.memoizedProps=e.pendingProps,n===null?Qo(e):ve=n}function Er(e,n,t,a){It=Pa=null,ml(n),gr=null,rs=0;var r=n.return;try{if(Eh(e,r,n,t,we)){sn=1,No(e,rt(t,e.current)),ve=null;return}}catch(s){if(r!==null)throw ve=r,s;sn=1,No(e,rt(t,e.current)),ve=null;return}n.flags&32768?(Re||a===1?e=!0:kr||(we&536870912)!==0?e=!1:(la=e=!0,(a===2||a===9||a===3||a===6)&&(a=Xn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ip(n,e)):Qo(n)}function Qo(e){var n=e;do{if((n.flags&32768)!==0){Ip(n,la);return}e=n.return;var t=Dh(n.alternate,n,Ft);if(t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);sn===0&&(sn=5)}function Ip(e,n){do{var t=Nh(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);sn=6,ve=null}function Op(e,n,t,a,r,s,i,p,g){e.cancelPendingCommit=null;do Vo();while(xn!==0);if((Ie&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(s=n.lanes|n.childLanes,s|=Hi,$(e,t,s,i,p,g),e===qe&&(ve=qe=null,we=0),Tr=n,da=e,qt=t,Yl=s,Xl=r,wp=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qh(wa,function(){return Bp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,r=I.p,I.p=2,i=Ie,Ie|=4;try{Ih(e,n,t)}finally{Ie=i,I.p=r,M.T=a}}xn=1,Up(),Pp(),Lp()}}function Up(){if(xn===1){xn=0;var e=da,n=Tr,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var a=I.p;I.p=2;var r=Ie;Ie|=4;try{mp(n,e);var s=dc,i=xu(e.containerInfo),p=s.focusedElem,g=s.selectionRange;if(i!==p&&p&&p.ownerDocument&&vu(p.ownerDocument.documentElement,p)){if(g!==null&&Li(p)){var T=g.start,N=g.end;if(N===void 0&&(N=T),"selectionStart"in p)p.selectionStart=T,p.selectionEnd=Math.min(N,p.value.length);else{var j=p.ownerDocument||document,E=j&&j.defaultView||window;if(E.getSelection){var A=E.getSelection(),W=p.textContent.length,ae=Math.min(g.start,W),He=g.end===void 0?ae:Math.min(g.end,W);!A.extend&&ae>He&&(i=He,He=ae,ae=i);var w=bu(p,ae),S=bu(p,He);if(w&&S&&(A.rangeCount!==1||A.anchorNode!==w.node||A.anchorOffset!==w.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var C=j.createRange();C.setStart(w.node,w.offset),A.removeAllRanges(),ae>He?(A.addRange(C),A.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),A.addRange(C))}}}}for(j=[],A=p;A=A.parentNode;)A.nodeType===1&&j.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<j.length;p++){var L=j[p];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ai=!!uc,dc=uc=null}finally{Ie=r,I.p=a,M.T=t}}e.current=n,xn=2}}function Pp(){if(xn===2){xn=0;var e=da,n=Tr,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var a=I.p;I.p=2;var r=Ie;Ie|=4;try{cp(e,n.alternate,n)}finally{Ie=r,I.p=a,M.T=t}}xn=3}}function Lp(){if(xn===4||xn===3){xn=0,Qs();var e=da,n=Tr,t=qt,a=wp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Tr=da=null,jp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ua=null),Tt(t),n=n.stateNode,Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(ka,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=M.T,r=I.p,I.p=2,M.T=null;try{for(var s=e.onRecoverableError,i=0;i<a.length;i++){var p=a[i];s(p.value,{componentStack:p.stack})}}finally{M.T=n,I.p=r}}(qt&3)!==0&&Vo(),wt(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===$l?Ss++:(Ss=0,$l=e):Ss=0,ws(0)}}function jp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ts(n)))}function Vo(){return Up(),Pp(),Lp(),Bp()}function Bp(){if(xn!==5)return!1;var e=da,n=Yl;Yl=0;var t=Tt(qt),a=M.T,r=I.p;try{I.p=32>t?32:t,M.T=null,t=Xl,Xl=null;var s=da,i=qt;if(xn=0,Tr=da=null,qt=0,(Ie&6)!==0)throw Error(c(331));var p=Ie;if(Ie|=4,vp(s.current),gp(s,s.current,i,t),Ie=p,ws(0,!1),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(ka,s)}catch{}return!0}finally{I.p=r,M.T=a,jp(e,n)}}function _p(e,n,t){n=rt(t,n),n=Ml(e.stateNode,n,2),e=ra(e,n,2),e!==null&&(Fe(e,2),wt(e))}function Be(e,n,t){if(e.tag===3)_p(e,e,t);else for(;n!==null;){if(n.tag===3){_p(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))){e=rt(t,e),t=zd(2),a=ra(n,t,2),a!==null&&(Hd(t,a,n,e),Fe(a,2),wt(a));break}}n=n.return}}function ec(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Ph;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(Gl=!0,r.add(t),e=zh.bind(null,e,n,t),n.then(e,e))}function zh(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,qe===e&&(we&t)===t&&(sn===4||sn===3&&(we&62914560)===we&&300>on()-_o?(Ie&2)===0&&Rr(e,0):Wl|=t,Cr===we&&(Cr=0)),wt(e)}function zp(e,n){n===0&&(n=le()),e=Ia(e,n),e!==null&&(Fe(e,n),wt(e))}function Hh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zp(e,t)}function Fh(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),zp(e,t)}function qh(e,n){return Ya(e,n)}var Go=null,Ar=null,nc=!1,Wo=!1,tc=!1,fa=0;function wt(e){e!==Ar&&e.next===null&&(Ar===null?Go=Ar=e:Ar=Ar.next=e),Wo=!0,nc||(nc=!0,Vh())}function ws(e,n){if(!tc&&Wo){tc=!0;do for(var t=!1,a=Go;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var s=0;else{var i=a.suspendedLanes,p=a.pingedLanes;s=(1<<31-On(42|e)+1)-1,s&=r&~(i&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,Qp(a,s))}else s=we,s=y(a,a===qe?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||P(a,s)||(t=!0,Qp(a,s));a=a.next}while(t);tc=!1}}function Qh(){Hp()}function Hp(){Wo=nc=!1;var e=0;fa!==0&&ng()&&(e=fa);for(var n=on(),t=null,a=Go;a!==null;){var r=a.next,s=Fp(a,n);s===0?(a.next=null,t===null?Go=r:t.next=r,r===null&&(Ar=t)):(t=a,(e!==0||(s&3)!==0)&&(Wo=!0)),a=r}xn!==0&&xn!==5||ws(e),fa!==0&&(fa=0)}function Fp(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var i=31-On(s),p=1<<i,g=r[i];g===-1?((p&t)===0||(p&a)!==0)&&(r[i]=q(p,n)):g<=n&&(e.expiredLanes|=p),s&=~p}if(n=qe,t=we,t=y(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(je===2||je===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&jr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||P(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&jr(a),Tt(t)){case 2:case 8:t=Sa;break;case 32:t=wa;break;case 268435456:t=Gs;break;default:t=wa}return a=qp.bind(null,e),t=Ya(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&jr(a),e.callbackPriority=2,e.callbackNode=null,2}function qp(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Vo()&&e.callbackNode!==t)return null;var a=we;return a=y(e,e===qe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Cp(e,a,n),Fp(e,on()),e.callbackNode!=null&&e.callbackNode===t?qp.bind(null,e):null)}function Qp(e,n){if(Vo())return null;Cp(e,n,!0)}function Vh(){ag(function(){(Ie&6)!==0?Ya(Ct,Qh):Hp()})}function ac(){if(fa===0){var e=fr;e===0&&(e=Ca,Ca<<=1,(Ca&261888)===0&&(Ca=256)),fa=e}return fa}function Vp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xt(""+e)}function Gp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Gh(e,n,t,a,r){if(n==="submit"&&t&&t.stateNode===r){var s=Vp((r[Dn]||null).action),i=a.submitter;i&&(n=(n=i[Dn]||null)?Vp(n.formAction):i.getAttribute("formAction"),n!==null&&(s=n,i=null));var p=new ro("action","action",null,a,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(fa!==0){var g=i?Gp(r,i):new FormData(r);kl(t,{pending:!0,data:g,method:r.method,action:s},null,g)}}else typeof s=="function"&&(p.preventDefault(),g=i?Gp(r,i):new FormData(r),kl(t,{pending:!0,data:g,method:r.method,action:s},s,g))},currentTarget:r}]})}}for(var rc=0;rc<zi.length;rc++){var sc=zi[rc],Wh=sc.toLowerCase(),Kh=sc[0].toUpperCase()+sc.slice(1);dt(Wh,"on"+Kh)}dt(ku,"onAnimationEnd"),dt(Cu,"onAnimationIteration"),dt(Tu,"onAnimationStart"),dt("dblclick","onDoubleClick"),dt("focusin","onFocus"),dt("focusout","onBlur"),dt(uh,"onTransitionRun"),dt(dh,"onTransitionStart"),dt(ph,"onTransitionCancel"),dt(Ru,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Et("onBeforeInput",["compositionend","keypress","textInput","paste"]),Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ks));function Wp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var i=a.length-1;0<=i;i--){var p=a[i],g=p.instance,T=p.currentTarget;if(p=p.listener,g!==s&&r.isPropagationStopped())break e;s=p,r.currentTarget=T;try{s(r)}catch(N){io(N)}r.currentTarget=null,s=g}else for(i=0;i<a.length;i++){if(p=a[i],g=p.instance,T=p.currentTarget,p=p.listener,g!==s&&r.isPropagationStopped())break e;s=p,r.currentTarget=T;try{s(r)}catch(N){io(N)}r.currentTarget=null,s=g}}}}function xe(e,n){var t=n[_r];t===void 0&&(t=n[_r]=new Set);var a=e+"__bubble";t.has(a)||(Kp(n,e,2,!1),t.add(a))}function oc(e,n,t){var a=0;n&&(a|=4),Kp(t,e,a,n)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Ko]){e[Ko]=!0,Xs.forEach(function(t){t!=="selectionchange"&&(Yh.has(t)||oc(t,!1,e),oc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ko]||(n[Ko]=!0,oc("selectionchange",!1,n))}}function Kp(e,n,t,a){switch(Cf(n)){case 2:var r=kg;break;case 8:r=Cg;break;default:r=wc}t=r.bind(null,n,t,e),r=void 0,!Ei||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function lc(e,n,t,a,r){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var p=a.stateNode.containerInfo;if(p===r)break;if(i===4)for(i=a.return;i!==null;){var g=i.tag;if((g===3||g===4)&&i.stateNode.containerInfo===r)return;i=i.return}for(;p!==null;){if(i=Un(p),i===null)return;if(g=i.tag,g===5||g===6||g===26||g===27){a=s=i;continue e}p=p.parentNode}}a=a.return}eo(function(){var T=s,N=pe(t),j=[];e:{var E=Eu.get(e);if(E!==void 0){var A=ro,W=e;switch(e){case"keypress":if(to(t)===0)break e;case"keydown":case"keyup":A=Fm;break;case"focusin":W="focus",A=Ni;break;case"focusout":W="blur",A=Ni;break;case"beforeblur":case"afterblur":A=Ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Vm;break;case ku:case Cu:case Tu:A=Om;break;case Ru:A=Wm;break;case"scroll":case"scrollend":A=Am;break;case"wheel":A=Ym;break;case"copy":case"cut":case"paste":A=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ru;break;case"toggle":case"beforetoggle":A=$m}var ae=(n&4)!==0,He=!ae&&(e==="scroll"||e==="scrollend"),w=ae?E!==null?E+"Capture":null:E;ae=[];for(var S=T,C;S!==null;){var L=S;if(C=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||C===null||w===null||(L=Vr(S,w),L!=null&&ae.push(Cs(S,L,C))),He)break;S=S.return}0<ae.length&&(E=new A(E,W,null,t,N),j.push({event:E,listeners:ae}))}}if((n&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",E&&t!==Z&&(W=t.relatedTarget||t.fromElement)&&(Un(W)||W[Gt]))break e;if((A||E)&&(E=N.window===N?N:(E=N.ownerDocument)?E.defaultView||E.parentWindow:window,A?(W=t.relatedTarget||t.toElement,A=T,W=W?Un(W):null,W!==null&&(He=h(W),ae=W.tag,W!==He||ae!==5&&ae!==27&&ae!==6)&&(W=null)):(A=null,W=T),A!==W)){if(ae=tu,L="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ru,L="onPointerLeave",w="onPointerEnter",S="pointer"),He=A==null?E:Wt(A),C=W==null?E:Wt(W),E=new ae(L,S+"leave",A,t,N),E.target=He,E.relatedTarget=C,L=null,Un(N)===T&&(ae=new ae(w,S+"enter",W,t,N),ae.target=C,ae.relatedTarget=He,L=ae),He=L,A&&W)n:{for(ae=Xh,w=A,S=W,C=0,L=w;L;L=ae(L))C++;L=0;for(var ne=S;ne;ne=ae(ne))L++;for(;0<C-L;)w=ae(w),C--;for(;0<L-C;)S=ae(S),L--;for(;C--;){if(w===S||S!==null&&w===S.alternate){ae=w;break n}w=ae(w),S=ae(S)}ae=null}else ae=null;A!==null&&Yp(j,E,A,ae,!1),W!==null&&He!==null&&Yp(j,He,W,ae,!0)}}e:{if(E=T?Wt(T):window,A=E.nodeName&&E.nodeName.toLowerCase(),A==="select"||A==="input"&&E.type==="file")var Me=pu;else if(uu(E))if(fu)Me=ih;else{Me=sh;var J=rh}else A=E.nodeName,!A||A.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?T&&Yt(T.elementType)&&(Me=pu):Me=oh;if(Me&&(Me=Me(e,T))){du(j,Me,t,N);break e}J&&J(e,E,T),e==="focusout"&&T&&E.type==="number"&&T.memoizedProps.value!=null&&tr(E,"number",E.value)}switch(J=T?Wt(T):window,e){case"focusin":(uu(J)||J.contentEditable==="true")&&(sr=J,ji=T,Jr=null);break;case"focusout":Jr=ji=sr=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,Su(j,t,N);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Su(j,t,N)}var he;if(Oi)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else rr?lu(e,t)&&(ke="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ke="onCompositionStart");ke&&(su&&t.locale!=="ko"&&(rr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&rr&&(he=eu()):($t=N,Ai="value"in $t?$t.value:$t.textContent,rr=!0)),J=Yo(T,ke),0<J.length&&(ke=new au(ke,e,null,t,N),j.push({event:ke,listeners:J}),he?ke.data=he:(he=cu(t),he!==null&&(ke.data=he)))),(he=Jm?eh(e,t):nh(e,t))&&(ke=Yo(T,"onBeforeInput"),0<ke.length&&(J=new au("onBeforeInput","beforeinput",null,t,N),j.push({event:J,listeners:ke}),J.data=he)),Gh(j,e,T,t,N)}Wp(j,n)})}function Cs(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yo(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Vr(e,t),r!=null&&a.unshift(Cs(e,r,s)),r=Vr(e,n),r!=null&&a.push(Cs(e,r,s))),e.tag===3)return a;e=e.return}return[]}function Xh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yp(e,n,t,a,r){for(var s=n._reactName,i=[];t!==null&&t!==a;){var p=t,g=p.alternate,T=p.stateNode;if(p=p.tag,g!==null&&g===a)break;p!==5&&p!==26&&p!==27||T===null||(g=T,r?(T=Vr(t,s),T!=null&&i.unshift(Cs(t,T,g))):r||(T=Vr(t,s),T!=null&&i.push(Cs(t,T,g)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var $h=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace($h,`
`).replace(Zh,"")}function $p(e,n){return n=Xp(n),Xp(e)===n}function ze(e,n,t,a,r,s){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||re(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&re(e,""+a);break;case"className":Gn(e,"class",a);break;case"tabIndex":Gn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gn(e,t,a);break;case"style":Le(e,a,s);break;case"data":if(n!=="object"){Gn(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Xt(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&ze(e,n,"name",r.name,r,null),ze(e,n,"formEncType",r.formEncType,r,null),ze(e,n,"formMethod",r.formMethod,r,null),ze(e,n,"formTarget",r.formTarget,r,null)):(ze(e,n,"encType",r.encType,r,null),ze(e,n,"method",r.method,r,null),ze(e,n,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Xt(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=H);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Xt(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Nn(e,"popover",a);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=At.get(t)||t,Nn(e,t,a))}}function cc(e,n,t,a,r,s){switch(t){case"style":Le(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?re(e,a):(typeof a=="number"||typeof a=="bigint")&&re(e,""+a);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=H);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ea.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),s=e[Dn]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,r),typeof a=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,r);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Nn(e,t,a)}}}function An(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var a=!1,r=!1,s;for(s in t)if(t.hasOwnProperty(s)){var i=t[s];if(i!=null)switch(s){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:ze(e,n,s,i,t,null)}}r&&ze(e,n,"srcSet",t.srcSet,t,null),a&&ze(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var p=s=i=r=null,g=null,T=null;for(a in t)if(t.hasOwnProperty(a)){var N=t[a];if(N!=null)switch(a){case"name":r=N;break;case"type":i=N;break;case"checked":g=N;break;case"defaultChecked":T=N;break;case"value":s=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,n));break;default:ze(e,n,a,N,t,null)}}Aa(e,s,p,g,T,i,r,!1);return;case"select":xe("invalid",e),a=i=s=null;for(r in t)if(t.hasOwnProperty(r)&&(p=t[r],p!=null))switch(r){case"value":s=p;break;case"defaultValue":i=p;break;case"multiple":a=p;default:ze(e,n,r,p,t,null)}n=s,t=i,e.multiple=!!a,n!=null?Cn(e,!!a,n,!1):t!=null&&Cn(e,!!a,t,!0);return;case"textarea":xe("invalid",e),s=r=a=null;for(i in t)if(t.hasOwnProperty(i)&&(p=t[i],p!=null))switch(i){case"value":a=p;break;case"defaultValue":r=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:ze(e,n,i,p,t,null)}ar(e,a,r,s);return;case"option":for(g in t)t.hasOwnProperty(g)&&(a=t[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ze(e,n,g,a,t,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(a=0;a<ks.length;a++)xe(ks[a],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(a=t[T],a!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:ze(e,n,T,a,t,null)}return;default:if(Yt(n)){for(N in t)t.hasOwnProperty(N)&&(a=t[N],a!==void 0&&cc(e,n,N,a,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(a=t[p],a!=null&&ze(e,n,p,a,t,null))}function Jh(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,i=null,p=null,g=null,T=null,N=null;for(A in t){var j=t[A];if(t.hasOwnProperty(A)&&j!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":g=j;default:a.hasOwnProperty(A)||ze(e,n,A,null,a,j)}}for(var E in a){var A=a[E];if(j=t[E],a.hasOwnProperty(E)&&(A!=null||j!=null))switch(E){case"type":s=A;break;case"name":r=A;break;case"checked":T=A;break;case"defaultChecked":N=A;break;case"value":i=A;break;case"defaultValue":p=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:A!==j&&ze(e,n,E,A,a,j)}}Fr(e,i,p,g,T,N,s,r);return;case"select":A=i=p=E=null;for(s in t)if(g=t[s],t.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":A=g;default:a.hasOwnProperty(s)||ze(e,n,s,null,a,g)}for(r in a)if(s=a[r],g=t[r],a.hasOwnProperty(r)&&(s!=null||g!=null))switch(r){case"value":E=s;break;case"defaultValue":p=s;break;case"multiple":i=s;default:s!==g&&ze(e,n,r,s,a,g)}n=p,t=i,a=A,E!=null?Cn(e,!!t,E,!1):!!a!=!!t&&(n!=null?Cn(e,!!t,n,!0):Cn(e,!!t,t?[]:"",!1));return;case"textarea":A=E=null;for(p in t)if(r=t[p],t.hasOwnProperty(p)&&r!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:ze(e,n,p,null,a,r)}for(i in a)if(r=a[i],s=t[i],a.hasOwnProperty(i)&&(r!=null||s!=null))switch(i){case"value":E=r;break;case"defaultValue":A=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==s&&ze(e,n,i,r,a,s)}Zs(e,E,A);return;case"option":for(var W in t)E=t[W],t.hasOwnProperty(W)&&E!=null&&!a.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:ze(e,n,W,null,a,E));for(g in a)E=a[g],A=t[g],a.hasOwnProperty(g)&&E!==A&&(E!=null||A!=null)&&(g==="selected"?e.selected=E&&typeof E!="function"&&typeof E!="symbol":ze(e,n,g,E,a,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in t)E=t[ae],t.hasOwnProperty(ae)&&E!=null&&!a.hasOwnProperty(ae)&&ze(e,n,ae,null,a,E);for(T in a)if(E=a[T],A=t[T],a.hasOwnProperty(T)&&E!==A&&(E!=null||A!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,n));break;default:ze(e,n,T,E,a,A)}return;default:if(Yt(n)){for(var He in t)E=t[He],t.hasOwnProperty(He)&&E!==void 0&&!a.hasOwnProperty(He)&&cc(e,n,He,void 0,a,E);for(N in a)E=a[N],A=t[N],!a.hasOwnProperty(N)||E===A||E===void 0&&A===void 0||cc(e,n,N,E,a,A);return}}for(var w in t)E=t[w],t.hasOwnProperty(w)&&E!=null&&!a.hasOwnProperty(w)&&ze(e,n,w,null,a,E);for(j in a)E=a[j],A=t[j],!a.hasOwnProperty(j)||E===A||E==null&&A==null||ze(e,n,j,E,a,A)}function Zp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],s=r.transferSize,i=r.initiatorType,p=r.duration;if(s&&p&&Zp(i)){for(i=0,p=r.responseEnd,a+=1;a<t.length;a++){var g=t[a],T=g.startTime;if(T>p)break;var N=g.transferSize,j=g.initiatorType;N&&Zp(j)&&(g=g.responseEnd,i+=N*(g<p?1:(p-T)/(g-T)))}if(--a,n+=8*(s+i)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,dc=null;function Xo(e){return e.nodeType===9?e:e.ownerDocument}function Jp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ef(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function pc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fc=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var nf=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(e){return tf.resolve(null).then(e).catch(rg)}:nf;function rg(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function af(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(r),Ir(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Ts(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ts(t);for(var s=t.firstChild;s;){var i=s.nextSibling,p=s.nodeName;s[Ra]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=i}}else t==="body"&&Ts(e.ownerDocument.body);t=r}while(t);Ir(n)}function rf(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function mc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":mc(t),zr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function sg(e,n,t,a){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ct(e.nextSibling),e===null)break}return null}function og(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ct(e.nextSibling),e===null))return null;return e}function sf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ct(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ig(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ct(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var yc=null;function of(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return ct(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function cf(e,n,t){switch(n=Xo(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ts(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);zr(e)}var ut=new Map,uf=new Set;function $o(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=I.d;I.d={f:lg,r:cg,D:ug,C:dg,L:pg,m:fg,X:hg,S:mg,M:gg};function lg(){var e=Qt.f(),n=Fo();return e||n}function cg(e){var n=Rt(e);n!==null&&n.tag===5&&n.type==="form"?Rd(n):Qt.r(e)}var Mr=typeof document>"u"?null:document;function df(e,n,t){var a=Mr;if(a&&typeof n=="string"&&n){var r=_n(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),uf.has(r)||(uf.add(r),e={rel:e,crossOrigin:t,href:n},a.querySelector(r)===null&&(n=a.createElement("link"),An(n,"link",e),fn(n),a.head.appendChild(n)))}}function ug(e){Qt.D(e),df("dns-prefetch",e,null)}function dg(e,n){Qt.C(e,n),df("preconnect",e,n)}function pg(e,n,t){Qt.L(e,n,t);var a=Mr;if(a&&e&&n){var r='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+_n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+_n(t.imageSizes)+'"]')):r+='[href="'+_n(e)+'"]';var s=r;switch(n){case"style":s=Dr(e);break;case"script":s=Nr(e)}ut.has(s)||(e=U({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),ut.set(s,e),a.querySelector(r)!==null||n==="style"&&a.querySelector(Rs(s))||n==="script"&&a.querySelector(Es(s))||(n=a.createElement("link"),An(n,"link",e),fn(n),a.head.appendChild(n)))}}function fg(e,n){Qt.m(e,n);var t=Mr;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+_n(a)+'"][href="'+_n(e)+'"]',s=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Nr(e)}if(!ut.has(s)&&(e=U({rel:"modulepreload",href:e},n),ut.set(s,e),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Es(s)))return}a=t.createElement("link"),An(a,"link",e),fn(a),t.head.appendChild(a)}}}function mg(e,n,t){Qt.S(e,n,t);var a=Mr;if(a&&e){var r=Kt(a).hoistableStyles,s=Dr(e);n=n||"default";var i=r.get(s);if(!i){var p={loading:0,preload:null};if(i=a.querySelector(Rs(s)))p.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":n},t),(t=ut.get(s))&&bc(e,t);var g=i=a.createElement("link");fn(g),An(g,"link",e),g._p=new Promise(function(T,N){g.onload=T,g.onerror=N}),g.addEventListener("load",function(){p.loading|=1}),g.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Zo(i,n,a)}i={type:"stylesheet",instance:i,count:1,state:p},r.set(s,i)}}}function hg(e,n){Qt.X(e,n);var t=Mr;if(t&&e){var a=Kt(t).hoistableScripts,r=Nr(e),s=a.get(r);s||(s=t.querySelector(Es(r)),s||(e=U({src:e,async:!0},n),(n=ut.get(r))&&vc(e,n),s=t.createElement("script"),fn(s),An(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function gg(e,n){Qt.M(e,n);var t=Mr;if(t&&e){var a=Kt(t).hoistableScripts,r=Nr(e),s=a.get(r);s||(s=t.querySelector(Es(r)),s||(e=U({src:e,async:!0,type:"module"},n),(n=ut.get(r))&&vc(e,n),s=t.createElement("script"),fn(s),An(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function pf(e,n,t,a){var r=(r=ge.current)?$o(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Dr(t.href),t=Kt(r).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Dr(t.href);var s=Kt(r).hoistableStyles,i=s.get(e);if(i||(r=r.ownerDocument||r,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,i),(s=r.querySelector(Rs(e)))&&!s._p&&(i.instance=s,i.state.loading=5),ut.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ut.set(e,t),s||yg(r,e,t,i.state))),n&&a===null)throw Error(c(528,""));return i}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(t),t=Kt(r).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Dr(e){return'href="'+_n(e)+'"'}function Rs(e){return'link[rel="stylesheet"]['+e+"]"}function ff(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function yg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),An(n,"link",t),fn(n),e.head.appendChild(n))}function Nr(e){return'[src="'+_n(e)+'"]'}function Es(e){return"script[async]"+e}function mf(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+_n(t.href)+'"]');if(a)return n.instance=a,fn(a),a;var r=U({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),fn(a),An(a,"style",r),Zo(a,t.precedence,e),n.instance=a;case"stylesheet":r=Dr(t.href);var s=e.querySelector(Rs(r));if(s)return n.state.loading|=4,n.instance=s,fn(s),s;a=ff(t),(r=ut.get(r))&&bc(a,r),s=(e.ownerDocument||e).createElement("link"),fn(s);var i=s;return i._p=new Promise(function(p,g){i.onload=p,i.onerror=g}),An(s,"link",a),n.state.loading|=4,Zo(s,t.precedence,e),n.instance=s;case"script":return s=Nr(t.src),(r=e.querySelector(Es(s)))?(n.instance=r,fn(r),r):(a=t,(r=ut.get(s))&&(a=U({},t),vc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),fn(r),An(r,"link",a),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Zo(a,t.precedence,e));return n.instance}function Zo(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,s=r,i=0;i<a.length;i++){var p=a[i];if(p.dataset.precedence===n)s=p;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function bc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jo=null;function hf(e,n,t){if(Jo===null){var a=new Map,r=Jo=new Map;r.set(t,a)}else r=Jo,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var s=t[r];if(!(s[Ra]||s[cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var i=s.getAttribute(n)||"";i=e+i;var p=a.get(i);p?p.push(s):a.set(i,[s])}}return a}function gf(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function bg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Dr(a.href),s=n.querySelector(Rs(r));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ei.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,fn(s);return}s=n.ownerDocument||n,a=ff(a),(r=ut.get(r))&&bc(a,r),s=s.createElement("link"),fn(s);var i=s;i._p=new Promise(function(p,g){i.onload=p,i.onerror=g}),An(s,"link",a),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ei.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var xc=0;function xg(e,n){return e.stylesheets&&e.count===0&&ti(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&ti(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&xc===0&&(xc=62500*eg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ti(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>xc?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ei(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ti(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ni=null;function ti(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ni=new Map,n.forEach(Sg,e),ni=null,ei.call(e))}function Sg(e,n){if(!(n.state.loading&4)){var t=ni.get(e);if(t)var a=t.get(null);else{t=new Map,ni.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var i=r[s];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),a=i)}a&&t.set(null,a)}r=n.instance,i=r.getAttribute("data-precedence"),s=t.get(i)||a,s===a&&t.set(null,r),t.set(i,r),this.count++,a=ei.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var As={$$typeof:G,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function wg(e,n,t,a,r,s,i,p,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.hiddenUpdates=Ge(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function bf(e,n,t,a,r,s,i,p,g,T,N,j){return e=new wg(e,n,t,i,g,T,N,j,p),n=1,s===!0&&(n|=24),s=Yn(3,null,null,n),e.current=s,s.stateNode=e,n=Ji(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:a,isDehydrated:t,cache:n},al(s),e}function vf(e){return e?(e=lr,e):lr}function xf(e,n,t,a,r,s){r=vf(r),a.context===null?a.context=r:a.pendingContext=r,a=aa(n),a.payload={element:t},s=s===void 0?null:s,s!==null&&(a.callback=s),t=ra(e,a,n),t!==null&&(Vn(t,e,n),os(t,e,n))}function Sf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Sc(e,n){Sf(e,n),(e=e.alternate)&&Sf(e,n)}function wf(e){if(e.tag===13||e.tag===31){var n=Ia(e,67108864);n!==null&&Vn(n,e,67108864),Sc(e,67108864)}}function kf(e){if(e.tag===13||e.tag===31){var n=et();n=Xe(n);var t=Ia(e,n);t!==null&&Vn(t,e,n),Sc(e,n)}}var ai=!0;function kg(e,n,t,a){var r=M.T;M.T=null;var s=I.p;try{I.p=2,wc(e,n,t,a)}finally{I.p=s,M.T=r}}function Cg(e,n,t,a){var r=M.T;M.T=null;var s=I.p;try{I.p=8,wc(e,n,t,a)}finally{I.p=s,M.T=r}}function wc(e,n,t,a){if(ai){var r=kc(a);if(r===null)lc(e,n,a,ri,t),Tf(e,a);else if(Rg(r,e,n,t,a))a.stopPropagation();else if(Tf(e,a),n&4&&-1<Tg.indexOf(e)){for(;r!==null;){var s=Rt(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var i=jn(s.pendingLanes);if(i!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;i;){var g=1<<31-On(i);p.entanglements[1]|=g,i&=~g}wt(s),(Ie&6)===0&&(zo=on()+500,ws(0))}}break;case 31:case 13:p=Ia(s,2),p!==null&&Vn(p,s,2),Fo(),Sc(s,2)}if(s=kc(a),s===null&&lc(e,n,a,ri,t),s===r)break;r=s}r!==null&&a.stopPropagation()}else lc(e,n,a,null,t)}}function kc(e){return e=pe(e),Cc(e)}var ri=null;function Cc(e){if(ri=null,e=Un(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===31){if(e=k(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ri=e,null}function Cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vs()){case Ct:return 2;case Sa:return 8;case wa:case wi:return 32;case Gs:return 268435456;default:return 32}default:return 32}}var Tc=!1,ha=null,ga=null,ya=null,Ms=new Map,Ds=new Map,ba=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,n){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Ms.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(n.pointerId)}}function Ns(e,n,t,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},n!==null&&(n=Rt(n),n!==null&&wf(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Rg(e,n,t,a,r){switch(n){case"focusin":return ha=Ns(ha,e,n,t,a,r),!0;case"dragenter":return ga=Ns(ga,e,n,t,a,r),!0;case"mouseover":return ya=Ns(ya,e,n,t,a,r),!0;case"pointerover":var s=r.pointerId;return Ms.set(s,Ns(Ms.get(s)||null,e,n,t,a,r)),!0;case"gotpointercapture":return s=r.pointerId,Ds.set(s,Ns(Ds.get(s)||null,e,n,t,a,r)),!0}return!1}function Rf(e){var n=Un(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Za(e.priority,function(){kf(t)});return}}else if(n===31){if(n=k(t),n!==null){e.blockedOn=n,Za(e.priority,function(){kf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=kc(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Z=a,t.target.dispatchEvent(a),Z=null}else return n=Rt(t),n!==null&&wf(n),e.blockedOn=t,!1;n.shift()}return!0}function Ef(e,n,t){si(e)&&t.delete(n)}function Eg(){Tc=!1,ha!==null&&si(ha)&&(ha=null),ga!==null&&si(ga)&&(ga=null),ya!==null&&si(ya)&&(ya=null),Ms.forEach(Ef),Ds.forEach(Ef)}function oi(e,n){e.blockedOn===n&&(e.blockedOn=null,Tc||(Tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Eg)))}var ii=null;function Af(e){ii!==e&&(ii=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ii===e&&(ii=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],r=e[n+2];if(typeof a!="function"){if(Cc(a||t)===null)continue;break}var s=Rt(t);s!==null&&(e.splice(n,3),n-=3,kl(s,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function Ir(e){function n(g){return oi(g,e)}ha!==null&&oi(ha,e),ga!==null&&oi(ga,e),ya!==null&&oi(ya,e),Ms.forEach(n),Ds.forEach(n);for(var t=0;t<ba.length;t++){var a=ba[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ba.length&&(t=ba[0],t.blockedOn===null);)Rf(t),t.blockedOn===null&&ba.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],s=t[a+1],i=r[Dn]||null;if(typeof s=="function")i||Af(t);else if(i){var p=null;if(s&&s.hasAttribute("formAction")){if(r=s,i=s[Dn]||null)p=i.formAction;else if(Cc(r)!==null)continue}else p=i.action;typeof p=="function"?t[a+1]=p:(t.splice(a,3),a-=3),Af(t)}}}function Mf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(i){return r=i})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function Rc(e){this._internalRoot=e}li.prototype.render=Rc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=et();xf(t,a,e,n,null,null)},li.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xf(e.current,2,null,e,null,null),Fo(),n[Gt]=null}};function li(e){this._internalRoot=e}li.prototype.unstable_scheduleHydration=function(e){if(e){var n=$a();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ba.length&&n!==0&&n<ba[t].priority;t++);ba.splice(t,0,e),t===0&&Rf(e)}};var Df=o.version;if(Df!=="19.2.4")throw Error(c(527,Df,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(n),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var Ag={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{ka=ci.inject(Ag),Mn=ci}catch{}}return Os.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,a="",r=Ld,s=jd,i=Bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=bf(e,1,!1,null,null,t,a,null,r,s,i,Mf),e[Gt]=n.current,ic(e),new Rc(n)},Os.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var a=!1,r="",s=Ld,i=jd,p=Bd,g=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),n=bf(e,1,!0,n,t??null,a,r,g,s,i,p,Mf),n.context=vf(null),t=n.current,a=et(),a=Xe(a),r=aa(a),r.callback=null,ra(t,r,a),t=a,n.current.lanes=t,Fe(n,t),wt(n),e[Gt]=n.current,ic(e),new li(n)},Os.version="19.2.4",Os}var zf;function _g(){if(zf)return Mc.exports;zf=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Mc.exports=Bg(),Mc.exports}var zg=_g();function Uc(l,o){const[u,c]=fe.useState(()=>{try{const m=window.localStorage.getItem(l);return m?JSON.parse(m):o}catch(m){return console.error(`Error reading localStorage key "${l}":`,m),o}});fe.useEffect(()=>{try{window.localStorage.setItem(l,JSON.stringify(u))}catch(m){console.error(`Error writing localStorage key "${l}":`,m)}},[l,u]);const d=fe.useCallback(m=>{c(k=>m instanceof Function?m(k):m)},[]),h=fe.useCallback(()=>{try{window.localStorage.removeItem(l),c(o)}catch(m){console.error(`Error clearing localStorage key "${l}":`,m)}},[l,o]);return[u,d,h]}function Hg(l){const o=[],u=l.split(/(?=^## \d+\.)/m).filter(Boolean);for(const c of u){const d=c.match(/^## (\d+)\. (.+?)[\r\n]/m);if(!d)continue;const[,h,m]=d,k=parseInt(h,10),b=`cat-${k}`,v=m.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+$/,""),R=Fg(c,b,m.trim());R.length>0&&o.push({id:b,number:k,name:m.trim(),slug:v,questions:R})}return o.sort((c,d)=>c.number-d.number)}function Fg(l,o,u){const c=[];return l.split(/(?=^### Q:)/m).filter(h=>h.trim().startsWith("### Q:")).forEach((h,m)=>{const k=h.match(/^### Q: (.+?)[\r\n]/m);if(!k)return;const b=k[1].trim(),v=h.indexOf("**Answer:**");let R="";v!==-1?R=h.slice(v+11).trim():R=h.slice(k[0].length).trim(),R=R.replace(/\n---\s*$/,"").trim();const U=qg(R);c.push({id:`${o}-q${m+1}`,categoryId:o,categoryName:u,question:b,answer:R,seniorInsight:U})}),c}function qg(l){const o=l.match(/\*\*Senior insight:\*\*\s*(.+?)(?=\n\n|\n---|\n###|$)/s);return o?o[1].trim():void 0}function Qg(l){return l.reduce((o,u)=>o+u.questions.length,0)}function Vg(l){return l.flatMap(o=>o.questions)}const Gg=`## 1. React Core Concepts

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

### Q: Explain React Fiber's work loop and priority lanes in depth

**Answer:**

React Fiber's work loop is the mechanism that schedules and executes rendering work. Understanding it helps debug performance issues and explains why React 18's concurrent features work the way they do.

**The Two Trees:**

\`\`\`
Current Tree (displayed)    Work-In-Progress Tree (being built)
        ↓                              ↓
   FiberRoot                      FiberRoot
       |                              |
     App                            App'
    /   \\                          /   \\
  Nav   Main         ←→         Nav'   Main'
        /   \\        (reconciled)        /   \\
    Header Content               Header' Content'
\`\`\`

React maintains two fiber trees:
- **Current Tree**: What's currently rendered on screen
- **Work-In-Progress (WIP) Tree**: The tree being built during reconciliation

When reconciliation completes, React swaps the pointers (double buffering).

**Fiber Node Structure:**

\`\`\`typescript
interface Fiber {
  // Identity
  type: ComponentType | string;  // Function/class component or DOM tag
  key: string | null;

  // Tree structure (linked list, not array)
  return: Fiber | null;         // Parent fiber
  child: Fiber | null;          // First child
  sibling: Fiber | null;        // Next sibling

  // State
  memoizedState: any;           // Hook state (linked list for hooks)
  memoizedProps: any;           // Props from last render

  // Effects
  flags: Flags;                 // What work needs to be done
  subtreeFlags: Flags;          // What work children need

  // Priority
  lanes: Lanes;                 // Update priority (bit field)
  childLanes: Lanes;            // Priority of children's work

  // Double buffering
  alternate: Fiber | null;      // Points to other tree's version
}
\`\`\`

**The Work Loop:**

\`\`\`typescript
// Simplified work loop (conceptual)
function workLoop() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}

function performUnitOfWork(fiber: Fiber) {
  // 1. Begin work - process this fiber
  const next = beginWork(fiber);

  if (next !== null) {
    // Has children - go deeper
    workInProgress = next;
  } else {
    // No children - complete this fiber
    completeUnitOfWork(fiber);
  }
}

function completeUnitOfWork(fiber: Fiber) {
  while (fiber !== null) {
    // 2. Complete work - create/update DOM node
    completeWork(fiber);

    if (fiber.sibling !== null) {
      // Has sibling - process sibling next
      workInProgress = fiber.sibling;
      return;
    }

    // No sibling - go back up to parent
    fiber = fiber.return;
  }

  // Reached root - work is complete
  workInProgress = null;
}
\`\`\`

**Traversal Order (DFS):**

\`\`\`
       App
      /   \\
   Nav    Main
   /      /   \\
 Logo  Header Content

Traversal: App → Nav → Logo → (complete) → (complete Nav)
         → Main → Header → (complete) → Content → (complete)
         → (complete Main) → (complete App)
\`\`\`

**Priority Lanes (React 18):**

\`\`\`typescript
// Lanes are bit fields for priority (simplified)
const SyncLane           = 0b0000000000000000000000000000001;  // Highest
const InputContinuousLane = 0b0000000000000000000000000000100;
const DefaultLane        = 0b0000000000000000000000000010000;
const TransitionLane     = 0b0000000000000000000001000000000;
const IdleLane           = 0b0100000000000000000000000000000;  // Lowest

// Multiple lanes can be scheduled together
const BatchedLanes = InputContinuousLane | DefaultLane;

// Lane priority determines which updates process first
function getHighestPriorityLane(lanes: Lanes): Lane {
  return lanes & -lanes; // Bit trick: isolate rightmost set bit
}
\`\`\`

**How Transitions Work:**

\`\`\`typescript
// When you use startTransition
function startTransition(callback) {
  // 1. Set transition context
  ReactCurrentBatchConfig.transition = {};

  // 2. Run callback - state updates get TransitionLane priority
  callback();

  // 3. Clear transition context
  ReactCurrentBatchConfig.transition = null;
}

// Inside a transition
function handleClick() {
  startTransition(() => {
    // This update gets TransitionLane (low priority)
    setSearchResults(results);
  });

  // This update gets SyncLane (high priority)
  setInputValue(value);
}
\`\`\`

**Interruptible Rendering:**

\`\`\`typescript
// shouldYield checks if we should pause
function shouldYield(): boolean {
  const currentTime = performance.now();
  // Yield every 5ms to keep frame rate smooth
  return currentTime >= deadline;
}

// Work loop with interruption
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }

  if (workInProgress !== null) {
    // More work to do - schedule continuation
    scheduleCallback(performConcurrentWorkOnRoot);
  }
}
\`\`\`

**Effect Lists (Pre-React 18):**

\`\`\`
Before React 18, effects were collected in a linked list:

fiber1 (Placement) → fiber2 (Update) → fiber3 (Deletion)
      ↓                    ↓                   ↓
  appendChild          setAttribute        removeChild
\`\`\`

**Subtree Flags (React 18+):**

\`\`\`typescript
// Now effects are tracked via subtreeFlags
function bubbleProperties(fiber: Fiber) {
  let subtreeFlags = NoFlags;
  let child = fiber.child;

  while (child !== null) {
    subtreeFlags |= child.subtreeFlags;
    subtreeFlags |= child.flags;
    child = child.sibling;
  }

  fiber.subtreeFlags = subtreeFlags;
}

// During commit, only traverse subtrees with flags
function commitMutationEffects(fiber: Fiber) {
  if (fiber.subtreeFlags & MutationMask) {
    // Children have mutations - traverse down
    let child = fiber.child;
    while (child !== null) {
      commitMutationEffects(child);
      child = child.sibling;
    }
  }

  if (fiber.flags & MutationMask) {
    // This fiber has mutations - apply them
    commitWork(fiber);
  }
}
\`\`\`

**Debug Tools:**

\`\`\`jsx
// React DevTools Profiler shows:
// - Commit duration (how long commit phase took)
// - Render duration (how long render phase took)
// - Which components rendered and why

// Programmatic profiling
<Profiler id="MyComponent" onRender={(
  id,
  phase,           // "mount" | "update"
  actualDuration,  // Time spent rendering
  baseDuration,    // Time without memoization
  startTime,
  commitTime
) => {
  console.log(\`\${id} \${phase}: \${actualDuration}ms\`);
}}>
  <MyComponent />
</Profiler>
\`\`\`

**Senior insight:** Understanding the work loop explains React's performance characteristics: why component order matters, why effects run in a specific order, and why state updates batch together. The lane system is why \`useTransition\` can keep the UI responsive—it literally assigns lower priority bits to those updates. When debugging render performance, think in terms of fibers: each fiber is a unit of work that can be measured, profiled, and optimized independently.

---

### Q: How do you implement advanced Suspense patterns for data fetching and streaming SSR?

**Answer:**

Suspense is React's mechanism for declaratively handling async operations. While initially focused on code-splitting, it now powers data fetching and streaming SSR in React 18+.

**Suspense Mental Model:**

\`\`\`jsx
// Suspense catches "promises" thrown by children
// When a promise is thrown:
// 1. React shows the fallback
// 2. When promise resolves, React re-renders the subtree
// 3. This time, the component returns real content

<Suspense fallback={<Loading />}>
  <AsyncComponent />  {/* Throws a promise when loading */}
</Suspense>
\`\`\`

**Building a Suspense-Compatible Data Source:**

\`\`\`typescript
// The "throw a promise" pattern
interface Resource<T> {
  read(): T;
}

function createResource<T>(promise: Promise<T>): Resource<T> {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: T;
  let error: Error;

  const suspender = promise.then(
    (data) => {
      status = 'success';
      result = data;
    },
    (err) => {
      status = 'error';
      error = err;
    }
  );

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;  // Suspense catches this
        case 'error':
          throw error;      // Error boundary catches this
        case 'success':
          return result;
      }
    },
  };
}

// Usage
const userResource = createResource(fetchUser(userId));

function UserProfile() {
  const user = userResource.read(); // Suspends until ready
  return <h1>{user.name}</h1>;
}

<Suspense fallback={<Skeleton />}>
  <UserProfile />
</Suspense>
\`\`\`

**React Query / TanStack Query with Suspense:**

\`\`\`tsx
// Modern approach: use a library that supports Suspense

import { useSuspenseQuery } from '@tanstack/react-query';

function UserProfile({ userId }: { userId: string }) {
  // This hook suspends automatically
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  // data is guaranteed to exist here (no loading check needed)
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<UserSkeleton />}>
      <UserProfile userId="123" />
    </Suspense>
  );
}
\`\`\`

**Nested Suspense Boundaries:**

\`\`\`tsx
// Fine-grained loading states with nested boundaries

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header loads independently */}
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      <div className="content">
        {/* Sidebar loads independently */}
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        {/* Main content loads independently */}
        <Suspense fallback={<MainContentSkeleton />}>
          <MainContent />

          {/* Nested: widgets load after main content */}
          <Suspense fallback={<WidgetsSkeleton />}>
            <Widgets />
          </Suspense>
        </Suspense>
      </div>
    </div>
  );
}
\`\`\`

**SuspenseList for Coordinated Loading:**

\`\`\`tsx
// Control reveal order of multiple Suspense boundaries
import { SuspenseList } from 'react';

function Feed() {
  return (
    <SuspenseList revealOrder="forwards" tail="collapsed">
      {/* Posts reveal in order, even if later ones load first */}
      {posts.map(post => (
        <Suspense key={post.id} fallback={<PostSkeleton />}>
          <Post id={post.id} />
        </Suspense>
      ))}
    </SuspenseList>
  );
}

// revealOrder options:
// - "forwards": reveal in order (top to bottom)
// - "backwards": reveal in reverse order
// - "together": reveal all at once when all ready

// tail options:
// - "collapsed": show only one fallback at a time
// - "hidden": show no fallbacks for unrevealed items
\`\`\`

**Suspense with useTransition (Avoid Unwanted Fallbacks):**

\`\`\`tsx
function SearchResults() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Immediate update (high priority)
    setQuery(value);

    // Deferred update (low priority)
    startTransition(() => {
      // This won't trigger Suspense fallback
      // Instead, isPending becomes true
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />

      {/* Show stale content with pending indicator instead of fallback */}
      <div style={{ opacity: isPending ? 0.7 : 1 }}>
        <Suspense fallback={<ResultsSkeleton />}>
          <Results query={query} />
        </Suspense>
      </div>
    </div>
  );
}
\`\`\`

**Streaming SSR with Suspense:**

\`\`\`tsx
// Server component (Next.js App Router or similar)

// app/page.tsx
export default function Page() {
  return (
    <html>
      <body>
        <header>
          <nav>Always rendered immediately</nav>
        </header>

        {/* This streams in when ready */}
        <Suspense fallback={<MainSkeleton />}>
          <MainContent />
        </Suspense>

        {/* This can stream independently */}
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </body>
    </html>
  );
}

// React Server Component that fetches data
async function MainContent() {
  const data = await fetchMainContent(); // Server-side fetch

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </main>
  );
}
\`\`\`

**How Streaming Works:**

\`\`\`html
<!-- Initial HTML sent immediately -->
<html>
  <body>
    <header><nav>...</nav></header>

    <!-- Placeholder with fallback -->
    <template id="B:0"></template>
    <div>Loading main content...</div>
    <!--/$-->

    <template id="B:1"></template>
    <div>Loading sidebar...</div>
    <!--/$-->

    <!-- React runtime to handle streaming -->
    <script src="/_next/static/chunks/main.js"><\/script>
  </body>
</html>

<!-- Streamed later when MainContent resolves -->
<script>
  $RC = function(b, c) {
    // Replaces template B:0 with actual content
  };
  $RC("B:0", "<main><h1>Title</h1><p>Content</p></main>");
<\/script>

<!-- Streamed even later when Sidebar resolves -->
<script>
  $RC("B:1", "<aside>Sidebar content</aside>");
<\/script>
\`\`\`

**Error Handling with Suspense:**

\`\`\`tsx
// Combine Suspense with Error Boundaries

function DataComponent() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loading />}>
        <DataFetcher />
      </Suspense>
    </ErrorBoundary>
  );
}

// With react-error-boundary library
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any state that caused the error
        queryClient.clear();
      }}
    >
      <Suspense fallback={<GlobalLoading />}>
        <Routes />
      </Suspense>
    </ErrorBoundary>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
\`\`\`

**Preloading Data:**

\`\`\`tsx
// Preload data before Suspense boundary is rendered

import { preload } from 'react-dom';

// Preload on hover
function ProductLink({ productId }) {
  const handleMouseEnter = () => {
    // Start fetching before navigation
    preloadProduct(productId);
  };

  return (
    <Link
      to={\`/products/\${productId}\`}
      onMouseEnter={handleMouseEnter}
    >
      View Product
    </Link>
  );
}

// In React Query
function preloadProduct(id: string) {
  queryClient.prefetchQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
}
\`\`\`

**Suspense Boundaries Strategy:**

| Granularity | Pros | Cons |
|-------------|------|------|
| Page-level | Simple, fewer boundaries | All-or-nothing loading |
| Section-level | Independent loading | More complexity |
| Component-level | Maximum parallelism | Many loading states |

**Senior insight:** Suspense inverts the loading state paradigm—instead of components managing their own loading states, they simply declare what data they need, and boundaries handle the rest. For SSR, Suspense enables streaming, which dramatically improves Time to First Byte by sending HTML as it's ready. The key architectural decision is boundary placement: too few boundaries mean users wait longer; too many create a "popcorn" loading experience. Use useTransition to prevent Suspense fallbacks during navigation—users prefer stale content with a loading indicator over a full skeleton.`,Wg=`## 2. React Hooks

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

### Q: How does useSyncExternalStore work and when would you use it?

**Answer:**

\`useSyncExternalStore\` is a hook for subscribing to external data sources in a way that's compatible with React 18's concurrent rendering. It ensures consistent reads during render, preventing "tearing" (showing inconsistent data).

**The Problem It Solves:**

\`\`\`jsx
// ❌ Problem: External store can change during React's render
// With concurrent rendering, React may pause and resume rendering
// If store changes mid-render, different components show different values

function Component() {
  // This can cause "tearing" - inconsistent UI
  const [state, setState] = useState(externalStore.getState());

  useEffect(() => {
    return externalStore.subscribe(() => {
      setState(externalStore.getState());
    });
  }, []);

  return <div>{state.value}</div>;
}

// ✅ Solution: useSyncExternalStore guarantees consistency
function Component() {
  const state = useSyncExternalStore(
    externalStore.subscribe,  // Subscribe function
    externalStore.getState,   // Get current value
    externalStore.getState    // Get server snapshot (for SSR)
  );

  return <div>{state.value}</div>;
}
\`\`\`

**API Signature:**

\`\`\`jsx
const snapshot = useSyncExternalStore(
  subscribe,       // (callback) => unsubscribe - Subscribe to store changes
  getSnapshot,     // () => snapshot - Get current value (must be immutable)
  getServerSnapshot? // () => snapshot - Get value during SSR (optional)
);
\`\`\`

**Example: Subscribing to Browser APIs**

\`\`\`jsx
// Window dimensions
function useWindowWidth() {
  return useSyncExternalStore(
    // Subscribe to resize events
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    // Get current width
    () => window.innerWidth,
    // Server snapshot (SSR fallback)
    () => 1024
  );
}

function ResponsiveComponent() {
  const width = useWindowWidth();
  return <div>{width > 768 ? 'Desktop' : 'Mobile'}</div>;
}

// Online status
function useOnlineStatus() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine,
    () => true // Assume online during SSR
  );
}

// LocalStorage (with cross-tab sync)
function useLocalStorage(key, initialValue) {
  const getSnapshot = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const subscribe = (callback) => {
    // Listen to storage events (fires when other tabs change localStorage)
    const handler = (e) => {
      if (e.key === key) callback();
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  };

  const value = useSyncExternalStore(subscribe, getSnapshot, () => initialValue);

  const setValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    // Trigger re-render in current tab (storage event doesn't fire in same tab)
    window.dispatchEvent(new StorageEvent('storage', { key }));
  };

  return [value, setValue];
}
\`\`\`

**Building a Custom Store:**

\`\`\`jsx
// Simple external store pattern
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (newState) => {
      state = typeof newState === 'function' ? newState(state) : newState;
      listeners.forEach(listener => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const counterStore = createStore({ count: 0 });

// Hook to use the store
function useCounterStore(selector = (state) => state) {
  return useSyncExternalStore(
    counterStore.subscribe,
    () => selector(counterStore.getState()),
    () => selector(counterStore.getState())
  );
}

// Usage
function Counter() {
  const count = useCounterStore(state => state.count);
  return (
    <button onClick={() => counterStore.setState(s => ({ count: s.count + 1 }))}>
      {count}
    </button>
  );
}
\`\`\`

**Important: getSnapshot Must Return Immutable Values**

\`\`\`jsx
// ❌ Wrong: Returns new object reference every time
const getSnapshot = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});
// This causes infinite re-renders!

// ✅ Correct: Cache the snapshot
let cachedSnapshot = null;
let cachedWidth = 0;
let cachedHeight = 0;

const getSnapshot = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width !== cachedWidth || height !== cachedHeight) {
    cachedWidth = width;
    cachedHeight = height;
    cachedSnapshot = { width, height };
  }

  return cachedSnapshot;
};
\`\`\`

**When to Use useSyncExternalStore:**

| Scenario | Use useSyncExternalStore? |
|----------|---------------------------|
| External state library (Zustand, etc.) | Yes (usually built-in) |
| Browser APIs (scroll, resize, online) | Yes |
| WebSocket messages | Yes |
| Third-party SDK state | Yes |
| React state (useState, useReducer) | No - already safe |
| Server state (React Query, SWR) | No - they handle it |

**Senior insight:** You rarely need to use \`useSyncExternalStore\` directly - most state libraries (Zustand, Redux, Jotai) use it internally. But understanding it is crucial when: (1) integrating with vanilla JS libraries, (2) subscribing to browser APIs, (3) building your own state management. The key insight is that \`getSnapshot\` must be stable (return same reference if value unchanged) or you'll get infinite re-renders.

---

### Q: What is useImperativeHandle and when should you use it?

**Answer:**

\`useImperativeHandle\` customizes the value exposed to parent components when using \`ref\`. It lets you expose a limited, imperative API instead of the entire DOM node or component instance.

**Basic Pattern:**

\`\`\`jsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null);

  // Expose only specific methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; },
    getValue: () => inputRef.current.value,
  }), []);

  return <input ref={inputRef} {...props} />;
});

// Parent component
function Form() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.getValue());
    inputRef.current.clear();
    inputRef.current.focus();
  };

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
\`\`\`

**React 19: ref as a prop (no forwardRef needed)**

\`\`\`jsx
// React 19+
function CustomInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; },
  }), []);

  return <input ref={inputRef} {...props} />;
}

// Usage remains the same
<CustomInput ref={inputRef} />
\`\`\`

**Real-World Use Cases:**

**1. Video Player Controls:**

\`\`\`jsx
const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    seek: (time) => { videoRef.current.currentTime = time; },
    getCurrentTime: () => videoRef.current.currentTime,
    getDuration: () => videoRef.current.duration,
    setVolume: (vol) => { videoRef.current.volume = vol; },
  }), []);

  return <video ref={videoRef} src={src} />;
});

// Parent with custom controls
function VideoWithControls() {
  const playerRef = useRef(null);

  return (
    <>
      <VideoPlayer ref={playerRef} src="/video.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.seek(0)}>Restart</button>
    </>
  );
}
\`\`\`

**2. Form with Validation:**

\`\`\`jsx
const FormField = forwardRef(function FormField({ label, validate }, ref) {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const value = inputRef.current.value;
      const validationError = validate?.(value);
      setError(validationError);
      return !validationError;
    },
    getValue: () => inputRef.current.value,
    focus: () => inputRef.current.focus(),
    reset: () => {
      inputRef.current.value = '';
      setError(null);
    },
  }), [validate]);

  return (
    <div>
      <label>{label}</label>
      <input ref={inputRef} />
      {error && <span className="error">{error}</span>}
    </div>
  );
});

function RegistrationForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    const isEmailValid = emailRef.current.validate();
    const isPasswordValid = passwordRef.current.validate();

    if (isEmailValid && isPasswordValid) {
      submit({
        email: emailRef.current.getValue(),
        password: passwordRef.current.getValue(),
      });
    } else {
      // Focus first invalid field
      if (!isEmailValid) emailRef.current.focus();
      else if (!isPasswordValid) passwordRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        ref={emailRef}
        label="Email"
        validate={(v) => !v.includes('@') ? 'Invalid email' : null}
      />
      <FormField
        ref={passwordRef}
        label="Password"
        validate={(v) => v.length < 8 ? 'Min 8 characters' : null}
      />
      <button type="submit">Register</button>
    </form>
  );
}
\`\`\`

**3. Animation Control:**

\`\`\`jsx
const AnimatedBox = forwardRef(function AnimatedBox({ children }, ref) {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useImperativeHandle(ref, () => ({
    shake: () => {
      animationRef.current = elementRef.current.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' },
      ], { duration: 300 });
      return animationRef.current.finished;
    },
    fadeIn: () => {
      animationRef.current = elementRef.current.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: 500, fill: 'forwards' });
      return animationRef.current.finished;
    },
    cancel: () => animationRef.current?.cancel(),
  }), []);

  return <div ref={elementRef}>{children}</div>;
});
\`\`\`

**TypeScript with useImperativeHandle:**

\`\`\`tsx
interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
}

const CustomInput = forwardRef<CustomInputHandle, InputProps>(
  function CustomInput(props, ref) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = '';
      },
      getValue: () => inputRef.current?.value ?? '',
    }), []);

    return <input ref={inputRef} {...props} />;
  }
);

// Usage with proper typing
function Parent() {
  const inputRef = useRef<CustomInputHandle>(null);
  inputRef.current?.focus(); // TypeScript knows available methods
}
\`\`\`

**When NOT to Use useImperativeHandle:**

\`\`\`jsx
// ❌ Don't use for data that should be props/state
useImperativeHandle(ref, () => ({
  setData: (data) => setInternalState(data), // Wrong! Use props
}));

// ❌ Don't use when you can lift state up
useImperativeHandle(ref, () => ({
  isValid: () => checkValid(), // Wrong! Expose via callback prop
}));

// ❌ Don't expose too much
useImperativeHandle(ref, () => ({
  ...inputRef.current, // Wrong! Leaking entire DOM node
}));
\`\`\`

**Decision Framework:**

| Need | Solution |
|------|----------|
| Share state between parent/child | Lift state up or use context |
| Notify parent of events | Use callback props |
| Trigger imperative actions (focus, scroll, animate) | useImperativeHandle |
| Access DOM measurements | useImperativeHandle |
| Complex forms with programmatic validation | useImperativeHandle |

**Senior insight:** \`useImperativeHandle\` is an escape hatch from React's declarative model. Use it sparingly - in most cases, callback props or lifted state are better. Valid use cases are when you need to trigger imperative DOM operations (focus, scroll, animations) or when building low-level component libraries. If you're using it to pass data, you're probably doing it wrong - use props instead.

---

### Q: What patterns exist for composing and testing custom hooks?

**Answer:**

Custom hooks are the primary mechanism for reusing stateful logic in React. Understanding composition patterns and testing strategies is essential for building maintainable applications.

**Hook Composition Patterns:**

**1. Layered Hooks (Building on Primitives):**

\`\`\`jsx
// Layer 1: Low-level utility hook
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse };
}

// Layer 2: Feature hook using utility hook
function useModal() {
  const { value: isOpen, setTrue: open, setFalse: close } = useToggle();
  const [content, setContent] = useState(null);

  const openWith = useCallback((modalContent) => {
    setContent(modalContent);
    open();
  }, [open]);

  const closeAndClear = useCallback(() => {
    close();
    setContent(null);
  }, [close]);

  return { isOpen, content, open: openWith, close: closeAndClear };
}

// Layer 3: Domain hook using feature hook
function useConfirmDialog() {
  const modal = useModal();
  const resolveRef = useRef(null);

  const confirm = useCallback((message) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      modal.open({ message });
    });
  }, [modal]);

  const handleConfirm = useCallback(() => {
    resolveRef.current?.(true);
    modal.close();
  }, [modal]);

  const handleCancel = useCallback(() => {
    resolveRef.current?.(false);
    modal.close();
  }, [modal]);

  return { ...modal, confirm, handleConfirm, handleCancel };
}
\`\`\`

**2. Dependency Injection Pattern:**

\`\`\`jsx
// Hook that accepts dependencies (testable)
function useFetchData(
  fetcher = fetch,  // Inject dependency
  url
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetcher(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetcher, url]);

  return { data, loading, error };
}

// In tests, inject mock fetcher
const mockFetcher = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ id: 1, name: 'Test' })
});

const { result } = renderHook(() =>
  useFetchData(mockFetcher, '/api/test')
);
\`\`\`

**3. Options Object Pattern:**

\`\`\`jsx
// Flexible configuration via options
function useAsync(asyncFn, options = {}) {
  const {
    immediate = true,      // Run on mount?
    onSuccess,             // Callback on success
    onError,               // Callback on error
    initialData = null,    // Initial data value
  } = options;

  const [state, setState] = useState({
    data: initialData,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async (...args) => {
    setState(s => ({ ...s, loading: true, error: null }));
    try {
      const data = await asyncFn(...args);
      setState({ data, loading: false, error: null });
      onSuccess?.(data);
      return data;
    } catch (error) {
      setState(s => ({ ...s, loading: false, error }));
      onError?.(error);
      throw error;
    }
  }, [asyncFn, onSuccess, onError]);

  useEffect(() => {
    if (immediate) execute();
  }, [immediate, execute]);

  return { ...state, execute };
}

// Usage with options
const { data, loading, execute } = useAsync(fetchUser, {
  immediate: false,
  onSuccess: (user) => analytics.track('user_loaded', user.id),
  onError: (err) => toast.error(err.message),
});
\`\`\`

**4. Reducer Pattern for Complex State:**

\`\`\`jsx
// Hook with reducer for complex state transitions
function useFormState(initialValues, validationSchema) {
  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: true,
  });

  const setFieldValue = useCallback((field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  }, []);

  const setFieldTouched = useCallback((field) => {
    dispatch({ type: 'SET_TOUCHED', field });
  }, []);

  const validate = useCallback(() => {
    const errors = validationSchema.validate(state.values);
    dispatch({ type: 'SET_ERRORS', errors });
    return Object.keys(errors).length === 0;
  }, [state.values, validationSchema]);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: 'SUBMIT_START' });
      try {
        await onSubmit(state.values);
        dispatch({ type: 'SUBMIT_SUCCESS' });
      } catch (error) {
        dispatch({ type: 'SUBMIT_ERROR', error });
      }
    }
  }, [state.values, validate]);

  return {
    ...state,
    setFieldValue,
    setFieldTouched,
    validate,
    handleSubmit,
  };
}
\`\`\`

**Return Value Patterns:**

\`\`\`jsx
// Tuple (simple hooks - like useState)
function useToggle(initial) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle]; // Allows destructuring rename: [isOpen, toggleOpen]
}

// Object (complex hooks - named properties)
function useForm(initialValues) {
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
  }; // Clear naming, order-independent
}

// Discriminated Union (state machine-like)
function useAsync(asyncFn) {
  // Returns different shapes based on state
  if (loading) return { status: 'loading' };
  if (error) return { status: 'error', error };
  return { status: 'success', data };
}
\`\`\`

**Testing Custom Hooks:**

\`\`\`jsx
import { renderHook, act, waitFor } from '@testing-library/react';

// Testing basic hook
test('useToggle toggles value', () => {
  const { result } = renderHook(() => useToggle(false));

  expect(result.current.value).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.value).toBe(true);
});

// Testing hook with dependencies
test('useAsync fetches data', async () => {
  const mockFetch = jest.fn().mockResolvedValue({ id: 1 });

  const { result } = renderHook(() =>
    useAsync(mockFetch, { immediate: true })
  );

  // Initially loading
  expect(result.current.loading).toBe(true);

  // Wait for async completion
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });

  expect(result.current.data).toEqual({ id: 1 });
});

// Testing with rerender (prop changes)
test('useFetch refetches on URL change', async () => {
  const { result, rerender } = renderHook(
    ({ url }) => useFetch(url),
    { initialProps: { url: '/api/v1' } }
  );

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(fetchMock).toHaveBeenCalledWith('/api/v1');

  rerender({ url: '/api/v2' });

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(fetchMock).toHaveBeenCalledWith('/api/v2');
});

// Testing with wrapper (context dependencies)
test('useAuth reads from AuthContext', () => {
  const wrapper = ({ children }) => (
    <AuthContext.Provider value={{ user: { id: 1 } }}>
      {children}
    </AuthContext.Provider>
  );

  const { result } = renderHook(() => useAuth(), { wrapper });

  expect(result.current.user.id).toBe(1);
});
\`\`\`

**Common Testing Patterns:**

\`\`\`jsx
// Testing error states
test('useAsync handles errors', async () => {
  const error = new Error('Network error');
  const mockFetch = jest.fn().mockRejectedValue(error);

  const { result } = renderHook(() => useAsync(mockFetch));

  await act(async () => {
    await result.current.execute().catch(() => {});
  });

  expect(result.current.error).toBe(error);
  expect(result.current.data).toBe(null);
});

// Testing cleanup
test('useInterval cleans up on unmount', () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  const { unmount } = renderHook(() => useInterval(callback, 1000));

  jest.advanceTimersByTime(3000);
  expect(callback).toHaveBeenCalledTimes(3);

  unmount();

  jest.advanceTimersByTime(3000);
  expect(callback).toHaveBeenCalledTimes(3); // No more calls after unmount
});
\`\`\`

**Senior insight:** The best custom hooks are single-purpose, composable, and testable. Follow these principles: (1) One hook, one responsibility - compose hooks for complex features, (2) Accept dependencies as parameters for testability, (3) Use options objects for configurable behavior, (4) Return stable references (memoize callbacks and objects). When testing, focus on behavior, not implementation - test what the hook does, not how it does it.

---

### Q: What is useEffectEvent and what problem does it solve?

**Answer:**

\`useEffectEvent\` (currently experimental in React) solves the "stale closure" problem in effects by allowing you to read the latest props/state without adding them to the dependency array.

**The Problem:**

\`\`\`jsx
// Classic stale closure dilemma
function Chat({ roomId, onMessage }) {
  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessage(msg); // ❌ Might be stale!
    });

    return () => connection.disconnect();
  }, [roomId, onMessage]); // ⚠️ Adding onMessage causes reconnection on every render!
}

// Why this is problematic:
// 1. onMessage is often an inline function: <Chat onMessage={(m) => log(m)} />
// 2. Inline functions change every render
// 3. Effect re-runs on every render → connection restarts
\`\`\`

**Current Workarounds (Without useEffectEvent):**

\`\`\`jsx
// Workaround 1: useRef to store latest callback
function Chat({ roomId, onMessage }) {
  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage; // Always update to latest

  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessageRef.current(msg); // Always calls latest
    });

    return () => connection.disconnect();
  }, [roomId]); // onMessage not in deps
}

// Workaround 2: useCallback in parent (often not possible)
// Parent must memoize the callback
const handleMessage = useCallback((msg) => {
  console.log(msg);
}, []); // But what if it needs to use state?
\`\`\`

**useEffectEvent Solution:**

\`\`\`jsx
// 🧪 Experimental - may change before stable release
import { useEffectEvent } from 'react';

function Chat({ roomId, onMessage }) {
  // Wrap the "event" (something that responds to a specific trigger)
  const onMessageEvent = useEffectEvent((msg) => {
    onMessage(msg); // Always reads latest onMessage
  });

  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessageEvent(msg); // ✅ Safe to call, always fresh
    });

    return () => connection.disconnect();
  }, [roomId]); // ✅ No need for onMessage in deps!
}
\`\`\`

**How It Works:**

\`\`\`
useEffectEvent creates a function that:
1. Always reads the latest props/state when called
2. Is stable (same reference across renders)
3. Should NOT be listed in dependency arrays
4. Executes synchronously when invoked

Think of it as: "I want to do X (latest behavior) when Y (trigger) happens"
\`\`\`

**More Examples:**

\`\`\`jsx
// Logging with latest state
function Counter({ count, onIncrement }) {
  // Event: "log the current count"
  const logCount = useEffectEvent(() => {
    console.log('Current count:', count); // Always latest count
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onIncrement();
      logCount(); // Logs correct count every time
    }, 1000);

    return () => clearInterval(interval);
  }, []); // No deps needed!
}

// Analytics tracking
function ProductPage({ product, user }) {
  const trackView = useEffectEvent(() => {
    analytics.track('product_viewed', {
      productId: product.id,
      userId: user?.id, // Always latest user
    });
  });

  useEffect(() => {
    trackView(); // Track when component mounts
  }, [product.id]); // Only re-track when product changes
}

// Timer with fresh callback
function Timer({ duration, onComplete }) {
  const onCompleteEvent = useEffectEvent(() => {
    onComplete(); // Latest callback when timer fires
  });

  useEffect(() => {
    const timer = setTimeout(onCompleteEvent, duration);
    return () => clearTimeout(timer);
  }, [duration]); // onComplete not needed in deps
}
\`\`\`

**Rules of useEffectEvent:**

\`\`\`jsx
// ✅ Call useEffectEvent functions from inside effects
useEffect(() => {
  myEffectEvent(); // Good
}, []);

// ❌ DON'T call during render
function Component() {
  const logState = useEffectEvent(() => console.log(state));
  logState(); // ❌ Wrong - not inside effect or event handler
  return <div />;
}

// ❌ DON'T pass to other components
function Parent() {
  const handleClick = useEffectEvent(() => {});
  return <Child onClick={handleClick} />; // ❌ Wrong - pass regular callback
}

// ❌ DON'T add to dependency arrays
useEffect(() => {
  myEffectEvent();
}, [myEffectEvent]); // ❌ Wrong - never add Effect Events to deps
\`\`\`

**Comparison: useEffectEvent vs useCallback:**

| Aspect | useCallback | useEffectEvent |
|--------|-------------|----------------|
| Purpose | Stable function reference | Access latest values in effects |
| Re-creates when | Dependencies change | Never (always stable) |
| Reads values from | Closure (at creation time) | Latest (at call time) |
| Use in deps | Yes, when needed | Never |
| Call in render | Yes | No (only in effects/events) |
| Can pass to children | Yes | No |

**Polyfill Pattern (Until Stable):**

\`\`\`jsx
// Approximate behavior with useRef + useCallback
function useEffectEvent(fn) {
  const ref = useRef(fn);
  ref.current = fn;

  return useCallback((...args) => {
    return ref.current(...args);
  }, []);
}

// Usage same as experimental version
const onMessageEvent = useEffectEvent((msg) => {
  onMessage(msg);
});
\`\`\`

**When to Use Each Pattern:**

\`\`\`jsx
// Scenario: Effect callback needs latest props/state

// 1. Value is truly a dependency (effect should re-run)
useEffect(() => {
  fetchData(userId); // Refetch when userId changes
}, [userId]); // ✅ userId in deps is correct

// 2. Callback that shouldn't trigger re-subscription
// → Use useEffectEvent
const onConnected = useEffectEvent(() => {
  toast(\`Welcome \${user.name}\`); // Latest user, no reconnection
});

// 3. Stable callback needed for child components
// → Use useCallback
const handleClick = useCallback(() => {
  setCount(c => c + 1); // Works with functional update
}, []); // Stable for memoized children
\`\`\`

**Senior insight:** \`useEffectEvent\` (when stable) will be a game-changer for React patterns. It directly addresses one of the most common frustrations with useEffect: the tension between "I need fresh values" and "I don't want to re-run the effect." Until it's stable, the useRef pattern is the reliable workaround. The key mental model: useEffectEvent is for "reactive values I want to read" but "not react to" - logging, analytics, callbacks that shouldn't change behavior.

---
`,Kg=`## 3. Performance Optimization

### Q: How do you identify performance bottlenecks in React?

**Answer:**

Performance profiling in React requires a systematic approach using multiple tools, each revealing different types of issues. The key is knowing which tool to use for which symptom.

**1. React DevTools Profiler (React-specific rendering issues):**

\`\`\`jsx
// Enable profiling in production builds
// In your build config:
// React 17+: Set profiling flag
// webpack: resolve.alias['react-dom$'] = 'react-dom/profiling'

// What to look for in Profiler:
// - Flame graph width = render time
// - Gray bars = components that didn't render
// - Ranked chart shows slowest components first
// - "Why did this render?" shows the trigger
\`\`\`

**Profiler Workflow:**
1. Open React DevTools → Profiler tab
2. Click record, interact with your app, stop recording
3. Look for: Components rendering >16ms (blocks 60fps), components re-rendering unnecessarily, cascade of re-renders from single state change

**2. Chrome DevTools Performance Tab (JavaScript & Browser issues):**

\`\`\`
Recording Analysis:
┌─────────────────────────────────────────────────────────────┐
│ Main Thread Timeline                                         │
├─────────────────────────────────────────────────────────────┤
│ [Task][Task][  Long Task (red)  ][Task][Task]               │
│                    ↑                                         │
│         > 50ms blocks user input                            │
├─────────────────────────────────────────────────────────────┤
│ Key Metrics to Check:                                        │
│ • Total Blocking Time (TBT) - sum of long task time > 50ms  │
│ • Scripting vs Rendering vs Painting time                   │
│ • Layout thrashing (purple "Layout" blocks)                 │
│ • Forced synchronous layouts (yellow warning triangles)     │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**3. Lighthouse & Web Vitals (User-centric metrics):**

\`\`\`jsx
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

// Core Web Vitals (affect SEO ranking)
onLCP(metric => console.log('LCP:', metric.value, 'ms'));   // < 2.5s good
onINP(metric => console.log('INP:', metric.value, 'ms'));   // < 200ms good
onCLS(metric => console.log('CLS:', metric.value));          // < 0.1 good

// Additional metrics
onFCP(metric => console.log('FCP:', metric.value, 'ms'));   // < 1.8s good
onTTFB(metric => console.log('TTFB:', metric.value, 'ms')); // < 800ms good

// Send to analytics
function sendToAnalytics(metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating, // 'good', 'needs-improvement', 'poor'
    delta: metric.delta,
    id: metric.id,
  });
  navigator.sendBeacon('/analytics', body);
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
\`\`\`

**4. Bundle Analysis:**

\`\`\`bash
# Webpack
npx webpack-bundle-analyzer stats.json

# Vite
npx vite-bundle-visualizer

# Next.js
ANALYZE=true npm run build

# Generic (works with any bundler)
npx source-map-explorer 'build/static/js/*.js'
\`\`\`

**What to look for in bundle analysis:**
- Large dependencies (moment.js → day.js, lodash → lodash-es with tree-shaking)
- Duplicate dependencies (multiple React versions)
- Code that should be lazy-loaded
- Unused exports (enable tree-shaking)

**5. Programmatic Measurement:**

\`\`\`jsx
// React Profiler API for production monitoring
import { Profiler } from 'react';

function onRenderCallback(
  id,           // "Navigation" - the Profiler id
  phase,        // "mount" | "update" | "nested-update"
  actualDuration,   // Time spent rendering this update
  baseDuration,     // Estimated time without memoization
  startTime,        // When React started rendering
  commitTime        // When React committed this update
) {
  // Send to monitoring service
  if (actualDuration > 16) { // Longer than one frame
    analytics.track('slow_render', {
      component: id,
      duration: actualDuration,
      phase,
    });
  }
}

<Profiler id="Navigation" onRender={onRenderCallback}>
  <Navigation />
</Profiler>
\`\`\`

**Diagnostic Decision Tree:**

| Symptom | Tool | Likely Cause | Solution |
|---------|------|--------------|----------|
| Typing lag | React Profiler | Re-rendering large tree | useTransition, memo, debounce |
| List scroll jank | Performance tab | Too many DOM nodes | Virtualization |
| Slow initial load | Lighthouse + Bundle analyzer | Large bundle | Code splitting, lazy loading |
| Memory growth | Memory tab | Leaks (listeners, closures) | Cleanup in useEffect |
| Janky animations | Performance tab | Main thread blocking | CSS animations, Web Workers |
| Slow interactions | INP metric | Heavy event handlers | Debounce, useTransition |

**Senior insight:** The performance optimization workflow should be: (1) Measure with real user data (RUM), (2) Reproduce in DevTools, (3) Identify root cause, (4) Fix and verify improvement, (5) Add regression test. Never optimize based on assumptions - always profile first. A 10ms optimization in a component that renders once is worthless; a 1ms optimization in a component rendering 1000x is valuable.

---

### Q: What causes unnecessary re-renders and how do you prevent them?

**Answer:**

Understanding React's rendering behavior is crucial for optimization. React re-renders are often not the problem - unnecessary re-renders of expensive components are.

**The Re-render Cascade:**

\`\`\`
State Change in Parent
         │
         ▼
┌─────────────────┐
│ Parent renders  │ ← Always re-renders on its own state change
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│ Child │ │ Child │ ← Re-render by default (even if props same!)
└───┬───┘ └───┬───┘
    │         │
    ▼         ▼
┌───────┐ ┌───────┐
│ Grand │ │ Grand │ ← Cascade continues down
└───────┘ └───────┘
\`\`\`

**Causes of Re-renders (in order of frequency):**

1. **Parent re-renders** → Children re-render by default
2. **State changes** → Component and all descendants re-render
3. **Context value changes** → All consumers re-render
4. **Props reference change** → Breaks memo optimization
5. **forceUpdate()** → Bypasses shouldComponentUpdate (avoid)

**Prevention Strategies:**

**1. React.memo with Proper Usage:**

\`\`\`jsx
// Basic memo - shallow comparison of all props
const MemoizedChild = React.memo(Child);

// Custom comparison for complex props
const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  // Return false if props differ (re-render)
  return (
    prevProps.id === nextProps.id &&
    prevProps.data.version === nextProps.data.version
  );
});

// ⚠️ Common mistake: memo with unstable props
function Parent() {
  return (
    // ❌ memo is useless - new object every render
    <MemoizedChild config={{ theme: 'dark' }} />

    // ❌ memo is useless - new function every render
    <MemoizedChild onClick={() => console.log('clicked')} />
  );
}
\`\`\`

**2. Stabilize References (useMemo/useCallback):**

\`\`\`jsx
function Parent({ items, userId }) {
  // ❌ New reference every render
  const activeItems = items.filter(x => x.active);
  const handleClick = (id) => selectItem(id);
  const config = { theme: 'dark', userId };

  // ✅ Stable references - only change when dependencies change
  const activeItems = useMemo(
    () => items.filter(x => x.active),
    [items]
  );

  const handleClick = useCallback(
    (id) => selectItem(id),
    [] // No deps if selectItem is stable
  );

  const config = useMemo(
    () => ({ theme: 'dark', userId }),
    [userId]
  );

  return <MemoizedChild items={activeItems} onClick={handleClick} config={config} />;
}
\`\`\`

**3. Context Optimization Patterns:**

\`\`\`jsx
// ❌ Monolithic context - everyone re-renders on any change
const AppContext = createContext({ user, theme, cart, notifications });

// ✅ Split by update frequency
const UserContext = createContext(null);     // Rarely changes
const ThemeContext = createContext(null);    // Rarely changes
const CartContext = createContext(null);     // Changes often
const NotificationContext = createContext(null); // Changes very often

// ✅ Separate state from dispatch
const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// Components that only dispatch don't re-render on state change
function AddToCartButton({ productId }) {
  const dispatch = useContext(CartDispatchContext); // Stable reference
  return <button onClick={() => dispatch({ type: 'ADD', productId })}>Add</button>;
}

// ✅ Memoize context value
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Without useMemo, new object every render → all consumers re-render
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
\`\`\`

**4. Component Composition Patterns:**

\`\`\`jsx
// ✅ Children as props - children don't re-render with parent state
function ScrollTracker({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div>
      <ScrollIndicator position={scrollY} />
      {children} {/* ✅ Created in parent, stable reference */}
    </div>
  );
}

// Usage - ExpensiveComponent won't re-render on scroll
<ScrollTracker>
  <ExpensiveComponent />
</ScrollTracker>

// ✅ Extracting expensive subtrees
function Dashboard() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ExpensiveCharts /> {/* ❌ Re-renders on every keystroke */}
    </div>
  );
}

// Better: Extract the stateful part
function FilterInput({ onFilterChange }) {
  const [filter, setFilter] = useState('');
  return (
    <input
      value={filter}
      onChange={e => {
        setFilter(e.target.value);
        onFilterChange(e.target.value);
      }}
    />
  );
}

function Dashboard() {
  const handleFilter = useCallback((filter) => {
    // Debounced API call or state update
  }, []);

  return (
    <div>
      <FilterInput onFilterChange={handleFilter} />
      <ExpensiveCharts /> {/* ✅ Doesn't re-render on typing */}
    </div>
  );
}
\`\`\`

**5. React 19 Compiler (Automatic Memoization):**

\`\`\`jsx
// React 19 with compiler - no manual optimization needed
function Parent({ items, userId }) {
  // Compiler automatically memoizes these
  const activeItems = items.filter(x => x.active);
  const handleClick = (id) => selectItem(id);

  return <Child items={activeItems} onClick={handleClick} />;
}
\`\`\`

**Re-render Debugging Checklist:**

| Check | How to Verify | Solution |
|-------|---------------|----------|
| Is parent re-rendering? | React DevTools highlight | Move state down or extract child |
| Are props actually changing? | Add console.log in component | useMemo/useCallback |
| Is context causing it? | DevTools "Why did this render?" | Split context or memoize value |
| Is key changing? | Check key prop in lists | Use stable keys (not index for dynamic lists) |

**Senior insight:** Before adding React.memo everywhere, try these free optimizations first: (1) Move state closer to where it's used, (2) Extract stateful logic into smaller components, (3) Use children props pattern. React.memo should be a last resort for leaf components that receive stable primitives but have expensive renders. With React 19's compiler, manual memoization becomes largely unnecessary - but understanding why re-renders happen remains essential for debugging.

---

### Q: How would you render a list of 10,000 items efficiently?

**Answer:**

Rendering large lists is one of the most common performance challenges in React. The DOM simply cannot handle 10,000+ nodes efficiently - the browser becomes unresponsive during initial render, scrolling is janky, and memory usage explodes.

**The Problem Quantified:**

\`\`\`
10,000 items =
  • 10,000+ DOM nodes minimum (likely 30,000+ with nested elements)
  • ~50-100MB memory for DOM alone
  • 2-10 seconds initial render
  • Scroll events trigger style recalculations on all nodes
  • Search/filter operations re-render entire list
\`\`\`

**Solution: Virtualization (Windowing)**

Only render items visible in the viewport + small buffer. As user scrolls, recycle DOM nodes.

\`\`\`
┌──────────────────────────────────────┐
│          Items 1-50 (buffer)          │ ← Not visible, but pre-rendered
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │        Visible Viewport          │ │ ← User sees items 51-70
│ │        Items 51-70               │ │
│ └──────────────────────────────────┘ │
├──────────────────────────────────────┤
│          Items 71-100 (buffer)        │ ← Pre-rendered for smooth scroll
├──────────────────────────────────────┤
│          Items 101-10,000             │ ← NOT in DOM at all
│          (just empty space)           │
└──────────────────────────────────────┘

Total DOM nodes: ~100 instead of 10,000
\`\`\`

**react-window (Recommended - 6KB gzipped):**

\`\`\`jsx
import { FixedSizeList } from 'react-window';

// Fixed height items (most performant)
function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <img src={items[index].avatar} alt="" />
      <span>{items[index].name}</span>
    </div>
  );

  return (
    <FixedSizeList
      height={600}           // Container height
      width="100%"           // Container width
      itemCount={items.length}
      itemSize={50}          // Each row height in px
      overscanCount={5}      // Extra items to render above/below
    >
      {Row}
    </FixedSizeList>
  );
}

// Variable height items (for dynamic content)
import { VariableSizeList } from 'react-window';

function VirtualList({ items }) {
  const listRef = useRef(null);
  const rowHeights = useRef({});

  // Measure row height after render
  function setRowHeight(index, size) {
    if (rowHeights.current[index] !== size) {
      rowHeights.current[index] = size;
      listRef.current?.resetAfterIndex(index);
    }
  }

  const getItemSize = (index) => rowHeights.current[index] || 50;

  const Row = ({ index, style }) => {
    const rowRef = useRef(null);

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.getBoundingClientRect().height);
      }
    }, [index]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          {items[index].content} {/* Variable length content */}
        </div>
      </div>
    );
  };

  return (
    <VariableSizeList
      ref={listRef}
      height={600}
      width="100%"
      itemCount={items.length}
      itemSize={getItemSize}
      estimatedItemSize={50}
    >
      {Row}
    </VariableSizeList>
  );
}
\`\`\`

**@tanstack/react-virtual (Modern alternative):**

\`\`\`jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  return (
    <div ref={parentRef} style={{ height: 600, overflow: 'auto' }}>
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualRow.size}px\`,
              transform: \`translateY(\${virtualRow.start}px)\`,
            }}
          >
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

**Optimization Techniques:**

\`\`\`jsx
// 1. Memoize row component (critical for performance)
const Row = React.memo(({ data, index, style }) => {
  const item = data[index];
  return (
    <div style={style}>
      <span>{item.name}</span>
    </div>
  );
}, (prev, next) => {
  // Custom comparison for complex items
  return prev.index === next.index &&
         prev.data[prev.index].id === next.data[next.index].id;
});

// 2. Use itemData to avoid closure re-creation
function VirtualList({ items, onSelect }) {
  // ✅ Stable object passed to all rows
  const itemData = useMemo(() => ({ items, onSelect }), [items, onSelect]);

  return (
    <FixedSizeList itemData={itemData} {...otherProps}>
      {Row}
    </FixedSizeList>
  );
}

const Row = React.memo(({ data, index, style }) => {
  const { items, onSelect } = data;
  return (
    <div style={style} onClick={() => onSelect(items[index].id)}>
      {items[index].name}
    </div>
  );
});

// 3. Implement windowed search/filter
function SearchableVirtualList({ items }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // Filter runs on deferred value, typing stays responsive
  const filteredItems = useMemo(
    () => items.filter(item =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    ),
    [items, deferredQuery]
  );

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <FixedSizeList itemCount={filteredItems.length} {...props}>
        {({ index, style }) => (
          <div style={style}>{filteredItems[index].name}</div>
        )}
      </FixedSizeList>
    </>
  );
}
\`\`\`

**Decision Framework:**

| List Size | Recommendation |
|-----------|----------------|
| < 100 items | Regular rendering, no optimization needed |
| 100-500 items | Consider pagination or "load more" button |
| 500-5,000 items | Virtualization recommended |
| 5,000+ items | Virtualization required + server-side pagination |

**Common Pitfalls:**

\`\`\`jsx
// ❌ Defining Row inside render - new function every render
function VirtualList({ items }) {
  return (
    <FixedSizeList>
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </FixedSizeList>
  );
}

// ✅ Define Row outside or memoize
const Row = memo(({ data, index, style }) => (
  <div style={style}>{data[index].name}</div>
));

// ❌ Not using style prop correctly - breaks positioning
const Row = ({ data, index }) => <div>{data[index]}</div>; // Missing style!

// ✅ Always apply the style prop
const Row = ({ data, index, style }) => (
  <div style={style}>{data[index]}</div>
);
\`\`\`

**Senior insight:** Virtualization trades complexity for performance. Before implementing, ask: (1) Do we actually have 500+ items? (2) Can we paginate instead? (3) Is the performance issue real or perceived? If you need virtualization, @tanstack/react-virtual is the modern choice with better TypeScript support and React 18 compatibility. For infinite scroll, combine virtualization with intersection observer to load more data as user approaches the end.

---

### Q: Explain state colocation - why keep state as local as possible?

**Answer:**

**State Colocation** is the principle of placing state as close as possible to where it's used. It's the opposite of the common instinct to "lift state up" for everything. Both principles are valid - the skill is knowing when to apply each.

**Why Colocation Matters:**

\`\`\`
Global State (everything at top):
┌─────────────────────────────────────────────┐
│ App (owns: user, theme, cart, hover, form,  │
│       search, modal, tooltip, selection...) │
│                    │                         │
│        ┌──────────┼──────────┐              │
│        ▼          ▼          ▼              │
│    [Header]   [Main]    [Footer]            │
│                 │                            │
│    Every state change re-renders EVERYTHING │
└─────────────────────────────────────────────┘

Colocated State:
┌─────────────────────────────────────────────┐
│ App (owns: user, theme - rarely change)     │
│                    │                         │
│        ┌──────────┼──────────┐              │
│        ▼          ▼          ▼              │
│    [Header]   [Main]    [Footer]            │
│    hover ↓    search↓                        │
│    [Nav]     [Results]                       │
│              form ↓                          │
│              [EditModal]                     │
│                                              │
│    State changes only affect owning subtree │
└─────────────────────────────────────────────┘
\`\`\`

**Benefits of Colocation:**

| Benefit | Explanation |
|---------|-------------|
| **Performance** | State change only re-renders owning component + children |
| **Maintainability** | Find state next to where it's used, not in distant parent |
| **Encapsulation** | Component is self-contained, can be moved/reused easily |
| **Testing** | Test component in isolation without mocking global state |
| **Bundle Size** | No need for state management library for simple cases |

**Real-World Example:**

\`\`\`jsx
// ❌ State too high - App re-renders on every hover
function App() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <Header user={user} /> {/* Re-renders on hover! */}
      <Sidebar /> {/* Re-renders on hover! */}
      <Dashboard /> {/* Re-renders on hover! */}
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            isHovered={hoveredId === item.id}
            isExpanded={expandedId === item.id}
            isEditing={editingId === item.id}
            onHover={() => setHoveredId(item.id)}
            onExpand={() => setExpandedId(item.id)}
            onEdit={() => setEditingId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}

// ✅ State colocated - Each piece of state where it belongs
function ListItem({ item, onSelect }) {
  // Hover state - only affects this item's styling
  const [isHovered, setIsHovered] = useState(false);

  // Expanded state - only affects this item's content
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'highlighted' : ''}
    >
      <span onClick={onSelect}>{item.name}</span>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && <Details item={item} />}
    </div>
  );
}

function App() {
  // Only truly global state here
  const [selectedId, setSelectedId] = useState(null); // Needed by multiple components

  return (
    <div>
      <Header user={user} />
      <Sidebar selectedId={selectedId} />
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onSelect={() => setSelectedId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}
\`\`\`

**State Location Decision Tree:**

\`\`\`
Where should this state live?
│
├─ Is it only used by one component?
│   └─ YES → Keep it local (useState in that component)
│
├─ Is it used by siblings?
│   └─ YES → Lift to closest common parent
│
├─ Is it used by distant components?
│   │
│   ├─ Does it change frequently (>1x/sec)?
│   │   └─ YES → State library (Zustand) or split context
│   │
│   ├─ Does it need to be accessed in callbacks/effects?
│   │   └─ YES → Consider useRef + state library
│   │
│   └─ Otherwise → Context is fine
│
└─ Is it server data (users, posts, etc.)?
    └─ YES → TanStack Query / SWR (not local state at all)
\`\`\`

**Anti-Patterns to Avoid:**

\`\`\`jsx
// ❌ Anti-pattern: Putting form state in global store
const formSlice = createSlice({
  name: 'form',
  initialState: { name: '', email: '', errors: {} },
  reducers: { ... }
});
// This causes the entire app to re-render on every keystroke!

// ✅ Form state should be local (or use a form library)
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  // Only this component re-renders on input
}

// ❌ Anti-pattern: Derived state that could be computed
const [items, setItems] = useState([...]);
const [filteredItems, setFilteredItems] = useState([]); // Redundant!

// ✅ Derive during render instead
const [items, setItems] = useState([...]);
const [filter, setFilter] = useState('');
const filteredItems = useMemo(
  () => items.filter(item => item.name.includes(filter)),
  [items, filter]
);
\`\`\`

**Performance Impact Measurement:**

\`\`\`jsx
// Add this to see re-render impact
function useRenderCount(componentName) {
  const renderCount = useRef(0);
  renderCount.current++;

  useEffect(() => {
    console.log(\`\${componentName} rendered \${renderCount.current} times\`);
  });
}

function Header() {
  useRenderCount('Header'); // See how often this re-renders
  return <header>...</header>;
}
\`\`\`

**Senior insight:** The instinct to "lift state up" comes from React's documentation, but it's meant for sharing state between siblings, not as a default strategy. Every piece of state you lift is technical debt - it couples components, hurts performance, and makes code harder to understand. Start with state as local as possible, lift only when you have a concrete need. If you find yourself prop-drilling more than 2 levels, that's when Context or state libraries make sense - not before.

---

### Q: How do you use the React Profiler API for production monitoring?

**Answer:**

The React Profiler API lets you measure rendering performance programmatically, enabling you to collect real-world performance data from production users - not just synthetic benchmarks.

**Basic Profiler Usage:**

\`\`\`jsx
import { Profiler } from 'react';

function onRenderCallback(
  id,                // Profiler tree "id"
  phase,             // "mount" | "update" | "nested-update"
  actualDuration,    // Time spent rendering committed update
  baseDuration,      // Estimated time to render without memoization
  startTime,         // When React began rendering this update
  commitTime         // When React committed this update
) {
  // Log or send to analytics
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Navigation />
      <Main />
      <Footer />
    </Profiler>
  );
}
\`\`\`

**Understanding the Metrics:**

| Metric | Meaning | What It Tells You |
|--------|---------|-------------------|
| \`actualDuration\` | Time spent rendering this update | How long this render actually took |
| \`baseDuration\` | Time without memoization | How long it would take without React.memo/useMemo |
| \`startTime\` | When rendering began | Useful for correlating with user actions |
| \`commitTime\` | When DOM was updated | When users actually see the change |

\`\`\`jsx
// Key insight: actualDuration vs baseDuration
// If actualDuration << baseDuration, your memoization is working!
// If actualDuration ≈ baseDuration, memoization isn't helping

function onRenderCallback(id, phase, actualDuration, baseDuration) {
  const memoizationEfficiency = 1 - (actualDuration / baseDuration);
  console.log(\`\${id}: \${(memoizationEfficiency * 100).toFixed(1)}% saved by memoization\`);
}
\`\`\`

**Production Monitoring Setup:**

\`\`\`jsx
// utils/profiling.js
const SAMPLE_RATE = 0.01; // Profile 1% of users

export function shouldProfile() {
  return Math.random() < SAMPLE_RATE;
}

export function createProfilerCallback(analytics) {
  return function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Only report slow renders (>16ms = dropped frame)
    if (actualDuration > 16) {
      analytics.track('slow_render', {
        component: id,
        phase,
        actualDuration: Math.round(actualDuration),
        baseDuration: Math.round(baseDuration),
        timestamp: commitTime,
        url: window.location.pathname,
        userAgent: navigator.userAgent,
      });
    }

    // Track all renders for specific critical components
    if (id === 'Checkout' || id === 'ProductList') {
      analytics.track('component_render', {
        component: id,
        phase,
        duration: Math.round(actualDuration),
      });
    }
  };
}

// App.jsx
import { Profiler } from 'react';
import { shouldProfile, createProfilerCallback } from './utils/profiling';
import analytics from './utils/analytics';

const profileCallback = createProfilerCallback(analytics);
const isProfilingEnabled = shouldProfile();

function App() {
  // Only wrap with Profiler for sampled users
  const content = (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

  if (!isProfilingEnabled) return content;

  return (
    <Profiler id="App" onRender={profileCallback}>
      {content}
    </Profiler>
  );
}
\`\`\`

**Nested Profilers for Granular Data:**

\`\`\`jsx
function Dashboard() {
  return (
    <Profiler id="Dashboard" onRender={onRenderCallback}>
      <Profiler id="Dashboard-Header" onRender={onRenderCallback}>
        <DashboardHeader />
      </Profiler>

      <Profiler id="Dashboard-Charts" onRender={onRenderCallback}>
        <ChartsSection />
      </Profiler>

      <Profiler id="Dashboard-Table" onRender={onRenderCallback}>
        <DataTable />
      </Profiler>
    </Profiler>
  );
}

// Output helps identify which section is slow:
// Dashboard-Header: 2ms (mount)
// Dashboard-Charts: 145ms (mount)  ← Problem area!
// Dashboard-Table: 12ms (mount)
// Dashboard: 162ms (mount)
\`\`\`

**Enabling Profiler in Production:**

\`\`\`js
// By default, Profiler is disabled in production builds
// Enable it in your bundler config:

// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
};

// Vite (vite.config.js)
export default {
  resolve: {
    alias: {
      'react-dom': 'react-dom/profiling',
    },
  },
};

// Next.js (next.config.js)
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['react-dom$'] = 'react-dom/profiling';
    }
    return config;
  },
};
\`\`\`

**Building a Performance Dashboard:**

\`\`\`jsx
// Collect data over time
const performanceData = [];

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  performanceData.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    timestamp: Date.now(),
  });

  // Periodically send batch to backend
  if (performanceData.length >= 50) {
    sendToAnalytics(performanceData.splice(0, 50));
  }
}

// Query examples for your analytics dashboard:
// - P95 render time by component
// - Components with >50ms renders
// - Render count by component per session
// - Correlation between slow renders and user actions
\`\`\`

**Profiler with React 18 Concurrent Features:**

\`\`\`jsx
// With concurrent rendering, renders may be interrupted
// Profiler only reports committed renders

import { useTransition } from 'react';

function SearchResults({ query }) {
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);

  function handleSearch(q) {
    startTransition(() => {
      // This render may be interrupted multiple times
      // Profiler only reports the final committed render
      setResults(search(q));
    });
  }

  return (
    <Profiler id="SearchResults" onRender={onRenderCallback}>
      {isPending ? <Spinner /> : <ResultsList results={results} />}
    </Profiler>
  );
}
\`\`\`

**Senior insight:** Production profiling is about statistical significance, not individual measurements. Sample users randomly (1-5%), focus on P95/P99 metrics rather than averages, and correlate slow renders with user actions (search, navigation, form submission). The goal isn't to profile everything - it's to find the components that actually impact user experience. A 100ms render during a button click matters more than a 500ms render during initial page load.

---

### Q: How do you read and interpret React DevTools Flame Graph?

**Answer:**

The React DevTools Flame Graph is the most powerful tool for understanding your app's rendering behavior. Mastering it lets you quickly identify performance bottlenecks without guessing.

**Accessing the Profiler:**

1. Install React DevTools browser extension
2. Open DevTools → React tab → Profiler
3. Click Record → Interact with app → Stop
4. Analyze the flame graph

**Anatomy of the Flame Graph:**

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│ Commit #3 (took 45.2ms)                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  [App]──────────────────────────────────────────────────────      │
│    │                                                              │
│    ├──[Header]─────────                                           │
│    │                                                              │
│    ├──[Main]──────────────────────────────────────────────        │
│    │    │                                                         │
│    │    ├──[ProductList]───────────────────────────────           │
│    │    │    │                                                    │
│    │    │    ├──[ProductCard]────                                 │
│    │    │    ├──[ProductCard]────                                 │
│    │    │    └──[ProductCard]────                                 │
│    │    │                                                         │
│    │    └──[Sidebar]──────                                        │
│    │                                                              │
│    └──[Footer]─────                                               │
│                                                                   │
│  Legend:                                                          │
│  █████ Wide bar = Took longer                                     │
│  ██    Narrow bar = Fast                                          │
│  ░░░░░ Gray = Didn't render this commit                           │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

**Key Visual Indicators:**

| Visual | Meaning |
|--------|---------|
| Bar width | Time spent rendering (wider = slower) |
| Bar color | Render time relative to siblings (yellow/orange = slow) |
| Gray bar | Component didn't render this commit (memoization worked!) |
| Nested depth | Component tree structure |

**Reading Individual Component Details:**

\`\`\`
Click on any component bar to see:

┌─────────────────────────────────────────────────┐
│ ProductList                                      │
├─────────────────────────────────────────────────┤
│ Rendered at: 14.2ms for 23.5ms                  │
│                                                  │
│ Priority: Normal                                 │
│                                                  │
│ Why did this render?                            │
│   • Props changed: products                     │
│   • Hooks changed: [1] useState                 │
│                                                  │
│ Rendered: 3 times during this session           │
└─────────────────────────────────────────────────┘
\`\`\`

**The "Why did this render?" Feature:**

This is the most valuable debugging feature. It tells you exactly what triggered the re-render:

\`\`\`jsx
// Common "Why did this render?" answers:

// 1. "The parent component rendered"
//    → Parent state changed, consider React.memo

// 2. "Props changed: onClick"
//    → Unstable function reference, use useCallback

// 3. "Props changed: style"
//    → Inline object, use useMemo or CSS class

// 4. "Hooks changed: [0] useContext"
//    → Context value changed, consider splitting context

// 5. "First time render"
//    → Mount, expected behavior
\`\`\`

**Analyzing Commit-by-Commit:**

\`\`\`
Session Recording:
┌────────────────────────────────────────────────────────────┐
│ Commits: [1] [2] [3] [4] [5] [6] [7] [8] [9]              │
│          2ms 3ms 145ms 2ms 2ms 178ms 3ms 2ms 2ms          │
│                   ↑              ↑                         │
│            Investigate these outliers                      │
└────────────────────────────────────────────────────────────┘

Click commit #3 to see:
- What user action triggered it
- Which components rendered
- What caused the slow render
\`\`\`

**Ranked View vs Flame Graph:**

\`\`\`jsx
// Flame Graph: Shows hierarchy and render cascade
// Best for: Understanding WHAT rendered and WHY

// Ranked View: Shows components sorted by render time
// Best for: Finding the SLOWEST components quickly

// Toggle between views in Profiler toolbar
\`\`\`

**Common Patterns to Look For:**

\`\`\`
Pattern 1: Wide bar at top, narrow children
┌─────────[App]─────────────────────────────────────┐
│    [Header]   [Main]   [Footer]                   │
└───────────────────────────────────────────────────┘
Diagnosis: Parent is doing expensive work before rendering children
Fix: Move computation into child or useMemo

Pattern 2: Many identical siblings all rendering
┌─────[List]─────────────────────────────────────────┐
│ [Item][Item][Item][Item][Item][Item][Item][Item]   │
└────────────────────────────────────────────────────┘
Diagnosis: Parent state change re-renders all items
Fix: React.memo on Item, stable keys, virtualization

Pattern 3: Deep re-render cascade from context
┌─────[Provider]─────────────────────────────────────┐
│     [Layout]──────────────────────────────         │
│         [Page]────────────────────                 │
│             [Component]───────                     │
│                 [DeepChild]──                      │
└────────────────────────────────────────────────────┘
All yellow = Context update re-rendered everything
Fix: Split context, memoize context value, use selectors

Pattern 4: Only specific components rendering (good!)
┌─────[App]─────────────────────────────────────────┐
│ ░░░[Header]░░░  [SearchResults]  ░░░[Footer]░░░   │
└───────────────────────────────────────────────────┘
Gray = Didn't render (memoization working!)
This is what well-optimized apps look like
\`\`\`

**Profiler Settings to Enable:**

\`\`\`
DevTools Settings → Profiler:

☑ Record why each component rendered while profiling
  → Enables "Why did this render?" (slight overhead)

☑ Highlight updates when components render
  → Visual flash on screen when components re-render
  → Great for seeing render cascades in real-time
\`\`\`

**Practical Debugging Workflow:**

\`\`\`
1. Reproduce the slow interaction (typing, clicking, scrolling)
2. Stop profiling, find the slow commit
3. Look at the widest bars (slowest components)
4. Click "Why did this render?" on each
5. Trace back to the root cause:
   - Unstable props → Add useMemo/useCallback
   - Context change → Split context
   - Parent render → Add React.memo
   - Expensive computation → Add useMemo
6. Re-profile to verify fix worked
\`\`\`

**Senior insight:** The Profiler's "Why did this render?" is your best friend, but it has a performance cost - only enable it when actively debugging. For production monitoring, use the Profiler API instead. When analyzing flame graphs, focus on outlier commits (>50ms), not average renders. A well-optimized app should show mostly gray bars (memoization preventing renders) with narrow colored bars only where state actually changed.

---

### Q: Explain Core Web Vitals in depth - LCP, INP, CLS, FCP, TTFB

**Answer:**

Core Web Vitals are Google's metrics for measuring real-world user experience. They directly impact SEO rankings and are the industry standard for performance measurement.

**The Core Web Vitals:**

| Metric | Full Name | Measures | Good | Needs Work | Poor |
|--------|-----------|----------|------|------------|------|
| **LCP** | Largest Contentful Paint | Loading performance | ≤2.5s | ≤4.0s | >4.0s |
| **INP** | Interaction to Next Paint | Responsiveness | ≤200ms | ≤500ms | >500ms |
| **CLS** | Cumulative Layout Shift | Visual stability | ≤0.1 | ≤0.25 | >0.25 |

**Additional Important Metrics:**

| Metric | Measures | Good |
|--------|----------|------|
| **FCP** | First Contentful Paint | ≤1.8s |
| **TTFB** | Time to First Byte | ≤800ms |
| **FID** | First Input Delay (deprecated, replaced by INP) | ≤100ms |

---

**LCP (Largest Contentful Paint):**

When the largest content element becomes visible. Usually a hero image, video, or large text block.

\`\`\`jsx
// Common LCP issues in React:

// ❌ Problem 1: Client-side data fetching delays LCP
function HeroSection() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/hero').then(r => r.json()).then(setData);
  }, []);
  if (!data) return <Skeleton />; // ← User sees this, not real content
  return <img src={data.heroImage} />;
}

// ✅ Solution: Server-side rendering or static generation
// Next.js App Router
async function HeroSection() {
  const data = await fetch('/api/hero').then(r => r.json());
  return <img src={data.heroImage} />;
}

// ❌ Problem 2: Lazy-loaded LCP element
const HeroImage = lazy(() => import('./HeroImage'));
// LCP element shouldn't be lazy loaded!

// ✅ Solution: Prioritize LCP image
<img
  src="/hero.jpg"
  fetchPriority="high"  // Hint browser to load this first
  loading="eager"       // Don't lazy load LCP
  decoding="async"      // Don't block render for decode
/>

// ❌ Problem 3: Render-blocking CSS/JS
// Large CSS files block first paint
// Synchronous scripts block parsing

// ✅ Solution: Critical CSS inlining + async scripts
<head>
  <style>{criticalCSS}</style>  {/* Inline critical CSS */}
  <link rel="stylesheet" href="main.css" media="print" onLoad="this.media='all'" />
  <script src="app.js" defer />  {/* Non-blocking */}
</head>
\`\`\`

**LCP Optimization Checklist:**
- [ ] Server-render or statically generate LCP content
- [ ] Use \`fetchPriority="high"\` on LCP image
- [ ] Preload LCP image: \`<link rel="preload" as="image" href="hero.jpg">\`
- [ ] Optimize image format (WebP/AVIF) and size
- [ ] Use CDN for assets
- [ ] Inline critical CSS
- [ ] Remove render-blocking JavaScript

---

**INP (Interaction to Next Paint):**

Measures responsiveness - time from user interaction (click, tap, keypress) to next visual update. Replaced FID in March 2024.

\`\`\`jsx
// INP measures the WORST interaction, not the first

// ❌ Problem 1: Heavy computation on click
function SearchResults({ items }) {
  const handleFilter = (filter) => {
    // Blocking operation - UI freezes
    const filtered = items.filter(item =>
      complexFilterLogic(item, filter)  // 200ms+
    );
    setResults(filtered);
  };

  return <FilterButton onClick={handleFilter} />;
}

// ✅ Solution: useTransition for non-urgent updates
function SearchResults({ items }) {
  const [isPending, startTransition] = useTransition();

  const handleFilter = (filter) => {
    startTransition(() => {
      // Runs in background, UI stays responsive
      const filtered = items.filter(item =>
        complexFilterLogic(item, filter)
      );
      setResults(filtered);
    });
  };

  return (
    <>
      <FilterButton onClick={handleFilter} />
      {isPending && <Spinner />}
    </>
  );
}

// ❌ Problem 2: Layout thrashing in event handlers
function ExpandablePanel({ id }) {
  const handleClick = () => {
    const el = document.getElementById(id);
    const height = el.offsetHeight;  // Forces layout
    el.style.height = height + 100 + 'px';  // Forces layout again
    const newHeight = el.offsetHeight;  // Forces layout AGAIN
  };
}

// ✅ Solution: Batch DOM reads and writes
function ExpandablePanel({ id }) {
  const handleClick = () => {
    // Read phase
    const el = document.getElementById(id);
    const height = el.offsetHeight;

    // Write phase (batched)
    requestAnimationFrame(() => {
      el.style.height = height + 100 + 'px';
    });
  };
}

// ❌ Problem 3: Expensive re-renders on every keystroke
function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setResults(search(e.target.value));  // Expensive on every keystroke
  };
}

// ✅ Solution: Debounce + useDeferredValue
function SearchInput() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(
    () => search(deferredQuery),
    [deferredQuery]
  );

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Results items={results} />
    </>
  );
}
\`\`\`

**INP Optimization Checklist:**
- [ ] Use \`useTransition\` for non-urgent updates
- [ ] Debounce rapid input handlers
- [ ] Avoid layout thrashing (batch DOM reads/writes)
- [ ] Use CSS for animations, not JavaScript
- [ ] Break up long tasks with \`scheduler.yield()\` or \`setTimeout\`
- [ ] Virtualize long lists

---

**CLS (Cumulative Layout Shift):**

Measures visual stability - how much content shifts unexpectedly after rendering.

\`\`\`jsx
// CLS Formula: impact_fraction × distance_fraction
// Score accumulates for every unexpected shift

// ❌ Problem 1: Images without dimensions
<img src="/photo.jpg" />  // Browser doesn't know size until loaded

// ✅ Solution: Always set width and height
<img src="/photo.jpg" width={800} height={600} />
// Or use aspect-ratio in CSS
.image { aspect-ratio: 4/3; width: 100%; }

// ❌ Problem 2: Fonts causing text reflow (FOUT)
// Web fonts load after initial render, text size changes

// ✅ Solution: Font optimization
<link rel="preload" href="/font.woff2" as="font" crossOrigin="" />

// In CSS:
@font-face {
  font-family: 'CustomFont';
  src: url('/font.woff2') format('woff2');
  font-display: optional;  // Don't cause layout shift
  // or: font-display: swap; + size-adjust: 105%;
}

// ❌ Problem 3: Injected content pushing things down
function Page() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    checkIfShouldShowBanner().then(setShowBanner);
  }, []);

  return (
    <div>
      {showBanner && <Banner />}  {/* Shifts content down! */}
      <MainContent />
    </div>
  );
}

// ✅ Solution: Reserve space for dynamic content
function Page() {
  const [banner, setBanner] = useState(null);

  return (
    <div>
      <div style={{ minHeight: 100 }}>  {/* Reserved space */}
        {banner && <Banner data={banner} />}
      </div>
      <MainContent />
    </div>
  );
}

// ❌ Problem 4: Dynamic ads/embeds
// Third-party content often causes CLS

// ✅ Solution: Reserve space with skeleton
<div style={{ minHeight: 250, background: '#f0f0f0' }}>
  <Suspense fallback={<AdSkeleton />}>
    <AdComponent />
  </Suspense>
</div>
\`\`\`

**CLS Optimization Checklist:**
- [ ] Set explicit width/height on images and videos
- [ ] Reserve space for ads and embeds
- [ ] Preload fonts, use \`font-display: optional\`
- [ ] Avoid inserting content above existing content
- [ ] Use CSS \`transform\` for animations (doesn't cause layout)
- [ ] Use \`content-visibility\` for off-screen content

---

**Measuring Web Vitals in React:**

\`\`\`jsx
// Using web-vitals library
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  const { name, value, rating, delta, id, entries } = metric;

  // Send to analytics
  analytics.track('web_vital', {
    metric: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    rating,  // 'good' | 'needs-improvement' | 'poor'
    path: window.location.pathname,
  });

  // Or send to custom endpoint
  navigator.sendBeacon('/vitals', JSON.stringify({
    name,
    value,
    id,
  }));
}

// Report all vitals
onCLS(reportWebVitals);
onINP(reportWebVitals);
onLCP(reportWebVitals);
onFCP(reportWebVitals);
onTTFB(reportWebVitals);

// Next.js built-in reporting
// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
}
\`\`\`

**Senior insight:** Web Vitals are measured at the 75th percentile of real users, not averages. A single slow user on a bad connection counts. Focus on: (1) LCP - server-render critical content, optimize images, (2) INP - use \`useTransition\`, debounce inputs, avoid long tasks, (3) CLS - reserve space for dynamic content, set image dimensions. Use Real User Monitoring (RUM), not just Lighthouse - synthetic tests miss real-world network variability and device diversity.

---

### Q: How do you profile memory usage and detect memory leaks in React?

**Answer:**

Memory leaks in React apps cause increasing memory usage over time, eventually leading to slowdowns, crashes, or "out of memory" errors. They're particularly problematic in long-running SPAs where users don't refresh the page.

**Common Memory Leak Sources in React:**

\`\`\`jsx
// 1. Event listeners not cleaned up
function Component() {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // ❌ Missing cleanup - listener persists after unmount
  }, []);

  // ✅ Fix: Return cleanup function
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

// 2. Timers/Intervals not cleared
function Component() {
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // ❌ Interval keeps running after unmount
  }, []);

  // ✅ Fix: Clear in cleanup
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
}

// 3. Subscriptions not unsubscribed
function Component() {
  useEffect(() => {
    const subscription = eventBus.subscribe('event', handler);
    // ❌ Subscription keeps component alive
  }, []);

  // ✅ Fix: Unsubscribe in cleanup
  useEffect(() => {
    const subscription = eventBus.subscribe('event', handler);
    return () => subscription.unsubscribe();
  }, []);
}

// 4. Closures capturing stale references
function Component({ data }) {
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => {
    // This closure captures the component instance
    someGlobalStore.cache.set(id, () => {
      console.log(dataRef.current);  // Keeps component alive!
    });

    return () => someGlobalStore.cache.delete(id);
  }, [id]);
}

// 5. Forgotten AbortController on fetch
function Component({ id }) {
  useEffect(() => {
    fetch(\`/api/data/\${id}\`)
      .then(r => r.json())
      .then(setData);  // ❌ May set state after unmount
  }, [id]);

  // ✅ Fix: Use AbortController
  useEffect(() => {
    const controller = new AbortController();

    fetch(\`/api/data/\${id}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(setData)
      .catch(e => {
        if (e.name !== 'AbortError') throw e;
      });

    return () => controller.abort();
  }, [id]);
}
\`\`\`

**Using Chrome DevTools Memory Tab:**

\`\`\`
1. Open DevTools → Memory tab
2. Take heap snapshot (baseline)
3. Perform action that might leak (navigate, open modal, etc.)
4. Go back / close the thing
5. Click garbage collect (🗑️ icon)
6. Take another heap snapshot
7. Compare snapshots

Look for:
- Detached DOM elements (elements removed from DOM but still in memory)
- Growing array sizes
- Objects that shouldn't exist anymore
\`\`\`

**Heap Snapshot Analysis:**

\`\`\`
Snapshot 2 (after navigation back):

┌────────────────────────────────────────────────────────────────┐
│ Constructor          │ Distance │ Shallow Size │ Retained Size │
├────────────────────────────────────────────────────────────────┤
│ (array)              │ 4        │ 156,000      │ 890,000 ↑     │
│ Detached HTMLDivElement │ 8     │ 340          │ 45,000 ⚠️     │
│ Object               │ 3        │ 23,400       │ 156,000 ↑     │
│ EventListener        │ 5        │ 120          │ 12,000 ⚠️     │
└────────────────────────────────────────────────────────────────┘

⚠️ Detached elements = Memory leak!
Click to see what's retaining them (retainer path)
\`\`\`

**Finding Detached DOM Elements:**

\`\`\`
In Memory tab:
1. Take heap snapshot
2. In filter dropdown, select "Detached"
3. Look for "Detached HTMLDivElement", "Detached HTMLInputElement", etc.
4. Click element → Look at "Retainers" panel
5. Retainer shows what's keeping it alive

Common retainers:
- Event listener → Forgot to remove listener
- Closure in setInterval → Forgot to clear interval
- Closure in Promise → Async operation completed after unmount
- Global cache/store → Forgot to clean up entry
\`\`\`

**Programmatic Memory Monitoring:**

\`\`\`jsx
// Monitor memory in development
function useMemoryMonitor(label) {
  useEffect(() => {
    if (typeof performance.memory === 'undefined') return;

    const logMemory = () => {
      const { usedJSHeapSize, jsHeapSizeLimit } = performance.memory;
      console.log(\`\${label} Memory:\`, {
        used: (usedJSHeapSize / 1048576).toFixed(2) + ' MB',
        limit: (jsHeapSizeLimit / 1048576).toFixed(2) + ' MB',
        percentage: ((usedJSHeapSize / jsHeapSizeLimit) * 100).toFixed(1) + '%',
      });
    };

    logMemory();
    const interval = setInterval(logMemory, 5000);
    return () => clearInterval(interval);
  }, [label]);
}

// Usage
function App() {
  useMemoryMonitor('App');
  // ...
}
\`\`\`

**React-Specific Memory Debugging:**

\`\`\`jsx
// Track component mount/unmount
const mountedComponents = new Set();

function useTrackMount(name) {
  useEffect(() => {
    mountedComponents.add(name);
    console.log('Mounted:', name, 'Total:', mountedComponents.size);

    return () => {
      mountedComponents.delete(name);
      console.log('Unmounted:', name, 'Total:', mountedComponents.size);
    };
  }, [name]);
}

// If count keeps growing when navigating, you have a leak!

// Check for common patterns
function useLeakDetector() {
  const mountTime = useRef(Date.now());

  useEffect(() => {
    return () => {
      const lifetime = Date.now() - mountTime.current;
      if (lifetime < 1000) {
        console.warn('Component unmounted very quickly - check for issues');
      }
    };
  }, []);
}
\`\`\`

**Using WeakRef for Optional References:**

\`\`\`jsx
// When you need to reference a component but don't want to prevent GC
const componentRegistry = new Map();

function useRegisterComponent(id) {
  const ref = useRef(null);

  useEffect(() => {
    // WeakRef allows garbage collection
    componentRegistry.set(id, new WeakRef(ref.current));

    return () => {
      componentRegistry.delete(id);
    };
  }, [id]);

  return ref;
}

// Later, check if component still exists
function getComponent(id) {
  const weakRef = componentRegistry.get(id);
  return weakRef?.deref(); // Returns undefined if GC'd
}
\`\`\`

**Automated Memory Leak Detection:**

\`\`\`jsx
// In tests, check for memory leaks
import { render, cleanup } from '@testing-library/react';

test('component does not leak memory', async () => {
  // Force GC if available (Node with --expose-gc)
  if (global.gc) global.gc();
  const before = process.memoryUsage().heapUsed;

  // Mount and unmount many times
  for (let i = 0; i < 100; i++) {
    const { unmount } = render(<SuspectedLeakyComponent />);
    unmount();
  }

  if (global.gc) global.gc();
  const after = process.memoryUsage().heapUsed;

  // Memory shouldn't grow significantly
  const growth = after - before;
  expect(growth).toBeLessThan(1024 * 1024); // Less than 1MB growth
});
\`\`\`

**Memory Profiling Workflow:**

\`\`\`
1. Establish baseline
   → Take heap snapshot on app load

2. Perform suspected leaky action
   → Navigate to page, open modal, etc.

3. Reverse the action
   → Navigate away, close modal, etc.

4. Force garbage collection
   → Click 🗑️ in DevTools

5. Compare snapshots
   → Look for growing objects, detached elements

6. Find retention path
   → Click leaked object → Retainers panel

7. Fix the leak
   → Add cleanup function, remove listener, etc.

8. Verify fix
   → Repeat steps 2-5, confirm no leak
\`\`\`

**Senior insight:** Memory leaks in React almost always come from missing cleanup in useEffect. The pattern is: anything you SET UP in useEffect (listener, subscription, timer, fetch) must be TORN DOWN in the cleanup return function. Use the ESLint \`react-hooks/exhaustive-deps\` rule - it catches many potential leaks by warning about missing dependencies. For production, monitor memory usage with RUM tools and set alerts for anomalous growth patterns.

---

### Q: What is Lighthouse and how do you use it for React performance optimization?

**Answer:**

Lighthouse is Google's automated auditing tool that measures performance, accessibility, SEO, and best practices. It provides actionable recommendations and is integrated into Chrome DevTools, available as a CLI, and runs in CI/CD pipelines.

**Running Lighthouse:**

\`\`\`bash
# Chrome DevTools
# Open DevTools → Lighthouse tab → Analyze page load

# CLI (more consistent results)
npm install -g lighthouse
lighthouse https://yoursite.com --output html --output-path ./report.html

# With specific settings
lighthouse https://yoursite.com \\
  --preset=desktop \\           # or 'perf' for mobile
  --throttling-method=devtools \\
  --chrome-flags="--headless"

# CI mode (returns JSON, exit code based on score)
lighthouse https://yoursite.com \\
  --output=json \\
  --budget-path=./budget.json
\`\`\`

**Understanding the Scores:**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ LIGHTHOUSE REPORT                                            │
├───────────────┬───────────────┬───────────────┬─────────────┤
│ Performance   │ Accessibility │ Best Practices│ SEO         │
│     72        │     95        │     100       │    90       │
│    (Orange)   │   (Green)     │   (Green)     │  (Green)    │
└───────────────┴───────────────┴───────────────┴─────────────┘

Score Breakdown (Performance):
• First Contentful Paint (FCP):  1.2s  [10%]
• Largest Contentful Paint (LCP): 3.8s  [25%] ← Needs work
• Total Blocking Time (TBT):     450ms [30%] ← Needs work
• Cumulative Layout Shift (CLS): 0.05  [25%]
• Speed Index:                   2.1s  [10%]
\`\`\`

**Key Metrics and React Optimization:**

\`\`\`jsx
// 1. First Contentful Paint (FCP) - When first content appears
// React Problem: Blank page during JS download/parse

// ❌ Client-side only
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ✅ Server-side rendering or static generation
// Next.js, Remix, or manual SSR

// 2. Largest Contentful Paint (LCP) - When main content loads
// React Problem: Data fetching delays content

// ❌ Fetch in useEffect
function HeroSection() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch('/api/hero').then(r => r.json()).then(setImage);
  }, []);
  return image ? <img src={image.url} /> : <Skeleton />;
}

// ✅ Server Component or prefetching
async function HeroSection() {
  const image = await fetch('/api/hero').then(r => r.json());
  return (
    <img
      src={image.url}
      fetchPriority="high"
      loading="eager"
    />
  );
}

// 3. Total Blocking Time (TBT) - Main thread blocked during load
// React Problem: Large bundle blocks main thread

// ❌ Import everything upfront
import { HeavyChart } from './HeavyChart';
import { DataTable } from './DataTable';

// ✅ Code split with lazy loading
const HeavyChart = lazy(() => import('./HeavyChart'));
const DataTable = lazy(() => import('./DataTable'));

// 4. Cumulative Layout Shift (CLS) - Visual stability
// React Problem: Content shifting as components mount

// ❌ Dynamic content without reserved space
{isLoaded && <Banner />}

// ✅ Reserve space with skeleton
<div style={{ minHeight: 200 }}>
  {isLoaded ? <Banner /> : <BannerSkeleton />}
</div>
\`\`\`

**Common Lighthouse Opportunities and Fixes:**

\`\`\`jsx
// "Reduce unused JavaScript"
// → Code split, tree shake, remove unused dependencies
const Chart = lazy(() => import(/* webpackChunkName: "chart" */ './Chart'));

// "Serve images in next-gen formats"
// → Use WebP/AVIF with fallback
<picture>
  <source srcSet="/image.avif" type="image/avif" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="" />
</picture>

// Or with Next.js Image
import Image from 'next/image';
<Image src="/photo.jpg" width={800} height={600} alt="" />

// "Eliminate render-blocking resources"
// → Inline critical CSS, defer non-critical
<style>{criticalCSS}</style>
<link
  rel="stylesheet"
  href="/styles.css"
  media="print"
  onLoad="this.media='all'"
/>

// "Reduce initial server response time"
// → Use CDN, edge caching, optimize API routes
// Next.js: Use ISR or static generation
export const revalidate = 3600; // ISR every hour

// "Preconnect to required origins"
<head>
  <link rel="preconnect" href="https://api.example.com" />
  <link rel="dns-prefetch" href="https://analytics.example.com" />
</head>

// "Avoid enormous network payloads"
// → Compress, optimize images, pagination
// Enable Brotli/Gzip compression in server
\`\`\`

**Lighthouse CI Integration:**

\`\`\`yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://staging.example.com/
            https://staging.example.com/products
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
\`\`\`

\`\`\`json
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 1800 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "total-blocking-time", "budget": 300 },
      { "metric": "cumulative-layout-shift", "budget": 0.1 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 300 },
      { "resourceType": "total", "budget": 1000 }
    ]
  }
]
\`\`\`

**Lighthouse vs Real User Monitoring (RUM):**

| Aspect | Lighthouse | RUM |
|--------|------------|-----|
| Environment | Synthetic (controlled) | Real users (varied) |
| Network | Simulated throttling | Actual connections |
| Device | Emulated mobile | Real devices |
| Data | Single test | Aggregated metrics |
| Use case | Development, CI | Production monitoring |

\`\`\`jsx
// Both are valuable - use together
// Lighthouse: Catch regressions in CI
// RUM: Measure real-world performance

// Collecting RUM data
import { onLCP, onINP, onCLS } from 'web-vitals';

function sendToAnalytics({ name, value, rating }) {
  fetch('/api/vitals', {
    method: 'POST',
    body: JSON.stringify({ name, value, rating, url: location.href }),
    keepalive: true,
  });
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
\`\`\`

**React-Specific Lighthouse Optimization Checklist:**

\`\`\`markdown
Performance:
- [ ] Server-side render or statically generate critical pages
- [ ] Code split routes with React.lazy()
- [ ] Use Next.js Image or optimize images manually
- [ ] Implement proper loading states (Suspense boundaries)
- [ ] Use useTransition for non-urgent updates
- [ ] Virtualize long lists

Best Practices:
- [ ] No console errors in production
- [ ] HTTPS only
- [ ] No deprecated APIs
- [ ] Proper error boundaries

SEO:
- [ ] Unique title and meta description per page
- [ ] Proper heading hierarchy (one h1)
- [ ] Valid structured data (JSON-LD)
- [ ] Sitemap.xml and robots.txt

Accessibility:
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Form inputs have labels
- [ ] Focus indicators visible
\`\`\`

**Senior insight:** Lighthouse scores are useful for tracking regressions, but don't optimize purely for the score. A 100 score doesn't mean great UX - it means you meet minimum thresholds in a synthetic test. Focus on: (1) Real user metrics from RUM, (2) Business-critical user journeys, (3) P75 performance across devices. Use Lighthouse in CI to catch regressions, but make decisions based on real user data. Mobile throttled Lighthouse is intentionally harsh - most real users have better connections.
`,Yg=`## 4. State Management

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

### Q: Compare Zustand, Jotai, and Valtio - when should you use each?

**Answer:**

These three lightweight state management libraries from the same creator (Daishi Kato) take fundamentally different approaches to state management:

| Feature | Zustand | Jotai | Valtio |
|---------|---------|-------|--------|
| Mental Model | Flux-like store | Atomic (like Recoil) | Proxy-based (like MobX) |
| Bundle Size | ~1.1kb | ~2.4kb | ~3.3kb |
| State Shape | Single store object | Individual atoms | Proxy objects |
| Updates | Immutable | Immutable | Mutable (auto-tracked) |
| Learning Curve | Low | Medium | Low |
| DevTools | Redux DevTools | Custom | Proxy DevTools |
| React Dependency | Optional | Required | Optional |

**Zustand - Store-based (Most Popular):**
\`\`\`tsx
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  fetchBears: () => Promise<void>;
}

const useBearStore = create<BearStore>()(
  devtools(
    persist(
      (set, get) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        fetchBears: async () => {
          const response = await fetch('/api/bears');
          const bears = await response.json();
          set({ bears: bears.count });
        },
      }),
      { name: 'bear-storage' }
    )
  )
);

// Usage - components only re-render when selected state changes
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} bears around here</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Add bear</button>;
}

// Access outside React
const bears = useBearStore.getState().bears;
useBearStore.setState({ bears: 10 });
\`\`\`

**Jotai - Atomic State:**
\`\`\`tsx
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage, atomWithQuery } from 'jotai/utils';

// Primitive atoms
const countAtom = atom(0);
const nameAtom = atom('');

// Derived atoms (computed values)
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Writable derived atoms
const countWithMinAtom = atom(
  (get) => get(countAtom),
  (get, set, newValue: number) => {
    set(countAtom, Math.max(0, newValue));
  }
);

// Async atoms
const userAtom = atom(async (get) => {
  const id = get(userIdAtom);
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
});

// Persistent atom
const themeAtom = atomWithStorage('theme', 'dark');

// Usage
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div>
      <p>Count: {count} (Double: {doubleCount})</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// Fine-grained updates - only reads
function Display() {
  const count = useAtomValue(countAtom);
  return <span>{count}</span>;
}

// Only writes - never re-renders from count changes
function IncrementButton() {
  const setCount = useSetAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>+</button>;
}
\`\`\`

**Valtio - Proxy-based (Most Intuitive):**
\`\`\`tsx
import { proxy, useSnapshot, subscribe, ref } from 'valtio';
import { derive } from 'valtio/utils';

// Create proxy state - looks like regular object
const state = proxy({
  count: 0,
  users: [] as User[],
  // Use ref() to opt-out of proxy (for non-serializable values)
  websocket: ref(new WebSocket('...')),
});

// Mutations look normal (no immer needed)
function increment() {
  state.count++; // Direct mutation - Valtio tracks it
}

async function fetchUsers() {
  state.users = await fetch('/api/users').then(r => r.json());
}

// Derived state
const derived = derive({
  doubled: (get) => get(state).count * 2,
});

// Usage in components
function Counter() {
  // useSnapshot creates a reactive read-only view
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Subscribe outside React
const unsubscribe = subscribe(state, () => {
  console.log('State changed:', state.count);
});

// Access/mutate anywhere
console.log(state.count); // Direct access
state.count = 10; // Direct mutation
\`\`\`

**Decision Matrix:**

| Scenario | Best Choice | Reason |
|----------|-------------|--------|
| Simple global state | Zustand | Minimal API, tiny bundle |
| Complex derived state | Jotai | Atoms compose naturally |
| Forms with many fields | Valtio | Direct mutations are intuitive |
| Team from Redux | Zustand | Similar mental model |
| Team from MobX | Valtio | Same proxy concept |
| Team from Recoil | Jotai | Atomic model, easier API |
| Need outside React | Zustand/Valtio | Both work outside components |
| Maximum re-render control | Jotai | Atom-level subscriptions |
| Rapid prototyping | Valtio | Most intuitive API |

**Performance Characteristics:**

\`\`\`tsx
// Zustand - explicit selectors for optimization
const bears = useBearStore((state) => state.bears); // ✅ Only re-renders on bears change
const state = useBearStore(); // ❌ Re-renders on any change

// Jotai - naturally granular
const count = useAtomValue(countAtom); // ✅ Only this atom
const name = useAtomValue(nameAtom);   // ✅ Independent subscription

// Valtio - automatic tracking
const snap = useSnapshot(state);
return <div>{snap.count}</div>; // ✅ Only re-renders if count accessed
\`\`\`

**Senior insight:** All three libraries solve the "prop drilling" problem with ~1-3kb. Choose based on your team's mental model: Zustand for Redux folks (store + actions), Jotai for React Query/Recoil mindset (atoms compose like hooks), Valtio for anyone who wants to just mutate objects. For most apps, any of these is simpler than Redux.

---

### Q: Explain TanStack Query (React Query) patterns for server state management

**Answer:**

TanStack Query is a powerful server state management library that handles caching, synchronization, and background updates. It's become the de facto standard for data fetching in React applications.

**Core Concepts:**

\`\`\`tsx
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30,   // 30 minutes (formerly cacheTime)
      retry: 3,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
\`\`\`

**Query Keys - The Foundation:**

\`\`\`tsx
// Query keys uniquely identify cached data
// They should be serializable and hierarchical

// Simple key
useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

// With parameters
useQuery({
  queryKey: ['todos', { status: 'done' }],
  queryFn: () => fetchTodos({ status: 'done' })
});

// Nested/hierarchical (enables partial invalidation)
useQuery({
  queryKey: ['users', userId, 'posts', postId],
  queryFn: () => fetchPost(userId, postId)
});

// Query key factory pattern (recommended)
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: Filters) => [...todoKeys.lists(), filters] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};

// Usage
useQuery({ queryKey: todoKeys.detail(5), queryFn: () => fetchTodo(5) });
queryClient.invalidateQueries({ queryKey: todoKeys.lists() }); // Invalidates all lists
\`\`\`

**Dependent Queries:**

\`\`\`tsx
function UserPosts({ userId }: { userId: string }) {
  // First query
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  // Dependent query - only runs when user exists
  const { data: posts } = useQuery({
    queryKey: ['posts', user?.id],
    queryFn: () => fetchPostsByUser(user!.id),
    enabled: !!user?.id, // Query won't execute until user is available
  });

  return <PostList posts={posts} />;
}
\`\`\`

**Optimistic Updates:**

\`\`\`tsx
function TodoList() {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: (newTodo: Todo) => axios.post('/todos', newTodo),

    // Optimistically update cache before server responds
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically add new todo
      queryClient.setQueryData<Todo[]>(['todos'], (old) => [
        ...(old || []),
        { ...newTodo, id: Date.now() }, // Temporary ID
      ]);

      // Return context with snapshot
      return { previousTodos };
    },

    // On error, rollback to snapshot
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
      toast.error('Failed to add todo');
    },

    // Always refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <button onClick={() => addTodoMutation.mutate({ title: 'New Todo' })}>
      {addTodoMutation.isPending ? 'Adding...' : 'Add Todo'}
    </button>
  );
}
\`\`\`

**Parallel and Sequential Queries:**

\`\`\`tsx
// Parallel queries - run simultaneously
function Dashboard() {
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const projectsQuery = useQuery({ queryKey: ['projects'], queryFn: fetchProjects });
  const statsQuery = useQuery({ queryKey: ['stats'], queryFn: fetchStats });

  // Or use useQueries for dynamic parallel queries
  const queries = useQueries({
    queries: userIds.map((id) => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
    })),
  });
}

// Sequential with proper typing
function UserProfile({ userId }: { userId: string }) {
  const userQuery = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  const postsQuery = useQuery({
    queryKey: ['user', userId, 'posts'],
    queryFn: () => fetchUserPosts(userId),
    enabled: userQuery.isSuccess,
  });
}
\`\`\`

**Infinite Queries (Pagination):**

\`\`\`tsx
function InfinitePostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  return (
    <div>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading...'
          : hasNextPage
          ? 'Load More'
          : 'No more posts'}
      </button>
    </div>
  );
}
\`\`\`

**Prefetching Strategies:**

\`\`\`tsx
// Prefetch on hover
function TodoItem({ todo }: { todo: Todo }) {
  const queryClient = useQueryClient();

  const prefetchTodo = () => {
    queryClient.prefetchQuery({
      queryKey: ['todo', todo.id],
      queryFn: () => fetchTodo(todo.id),
      staleTime: 60000, // Don't refetch if less than 1 minute old
    });
  };

  return (
    <Link
      to={\`/todo/\${todo.id}\`}
      onMouseEnter={prefetchTodo}
      onFocus={prefetchTodo}
    >
      {todo.title}
    </Link>
  );
}

// Prefetch in route loader (React Router)
const todoRoute = {
  path: '/todo/:id',
  loader: async ({ params }) => {
    await queryClient.ensureQueryData({
      queryKey: ['todo', params.id],
      queryFn: () => fetchTodo(params.id!),
    });
    return null;
  },
  element: <TodoDetail />,
};
\`\`\`

**Replacing Redux for Server State:**

| Redux Pattern | TanStack Query Equivalent |
|---------------|---------------------------|
| Store slice for API data | useQuery with queryKey |
| createAsyncThunk | useMutation |
| selectors | useQuery data + useMemo |
| Loading/error state | Built-in status flags |
| Caching | Automatic with gcTime |
| Normalization | Usually unnecessary |

**Senior insight:** TanStack Query eliminates ~80% of what teams typically put in Redux. Keep Redux/Zustand for true client state (UI preferences, wizard steps, shopping cart) and use TanStack Query for everything that comes from a server. The staleTime and gcTime configuration is critical—understand the difference: staleTime controls when data is considered fresh (no refetch), while gcTime controls how long inactive data stays in memory.

---

### Q: What framework should you use to decide on a state management solution?

**Answer:**

State management decisions should be driven by the nature of your state, team experience, and scale of the application. Here's a decision framework:

**Step 1: Classify Your State**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    What kind of state?                       │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        ▼                                           ▼
   Server State                               Client State
   (from API/DB)                              (UI/local)
        │                                           │
        ▼                                           │
   TanStack Query                                   │
   SWR, RTK Query                     ┌────────────┴────────────┐
                                      ▼                         ▼
                                 Local Only              Shared/Global
                                      │                         │
                                      ▼                         ▼
                                 useState              State Library
                                 useReducer            (see decision tree)
\`\`\`

**Step 2: Client State Decision Tree**

\`\`\`
Is the state shared across multiple components?
│
├─ No → useState / useReducer
│
└─ Yes → How many components share it?
         │
         ├─ 2-3 nearby → Lift state up + props
         │
         └─ Many / far apart → Need global state
                               │
                               How complex is the state?
                               │
                               ├─ Simple (few values)
                               │  └─ Context API or Zustand
                               │
                               └─ Complex (many updates, derived state)
                                  │
                                  Team background?
                                  │
                                  ├─ Redux experience → Redux Toolkit
                                  ├─ MobX experience → Valtio
                                  ├─ Prefer atoms → Jotai
                                  └─ Want simplest → Zustand
\`\`\`

**When Redux Is Overkill:**

\`\`\`tsx
// ❌ Overkill - just use Context or Zustand
const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

// ✅ Simpler with Zustand
const useThemeStore = create((set) => ({
  mode: 'dark',
  toggle: () => set((s) => ({ mode: s.mode === 'dark' ? 'light' : 'dark' })),
}));

// ✅ Or even just Context
const ThemeContext = createContext({ mode: 'dark', toggle: () => {} });
\`\`\`

**When Redux Makes Sense:**

\`\`\`tsx
// ✅ Good Redux use case - complex domain logic
// - Multiple slices that interact
// - Complex async flows (sagas)
// - Need time-travel debugging
// - Large team needing strict patterns
// - Offline-first with persistence

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    orders: ordersSlice.reducer,
    // These slices interact with each other
  },
  middleware: (getDefault) =>
    getDefault().concat(
      cartPersistMiddleware,
      analyticsMiddleware,
      // Complex middleware chain
    ),
});
\`\`\`

**Recommended Stack by App Size:**

| App Size | Server State | Client State |
|----------|--------------|--------------|
| Small (< 10 pages) | TanStack Query | useState + Context |
| Medium (10-50 pages) | TanStack Query | Zustand |
| Large (50+ pages) | TanStack Query | Zustand or Redux Toolkit |
| Enterprise | TanStack Query + cache normalization | Redux Toolkit |

**The Modern Minimal Stack:**

\`\`\`tsx
// For 90% of React apps, this is enough:

// 1. Server state - TanStack Query
const { data: user } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
});

// 2. Global client state - Zustand
const useStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));

// 3. Local state - useState
const [inputValue, setInputValue] = useState('');

// 4. Complex local state - useReducer
const [formState, dispatch] = useReducer(formReducer, initialFormState);

// 5. URL state - React Router
const [searchParams, setSearchParams] = useSearchParams();
\`\`\`

**Future Considerations - Signals:**

\`\`\`tsx
// Signals are coming to the React ecosystem
// Angular, Solid, Preact, Vue already have them

// The Promise: Fine-grained reactivity without re-renders
import { signal, computed } from '@preact/signals-react';

const count = signal(0);
const doubled = computed(() => count.value * 2);

function Counter() {
  // No useState, no re-render of entire component
  return <div>Count: {count}</div>;
}

// Click handler
<button onClick={() => count.value++}>Increment</button>

// React 19's compiler may provide similar optimization
// Watch: https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024
\`\`\`

**State Location Cheat Sheet:**

| State Type | Location | Example |
|------------|----------|---------|
| Form input (before submit) | useState | Text in input field |
| UI toggles (local) | useState | Accordion open/closed |
| Multi-step form | useReducer | Wizard state machine |
| Theme/locale | Context or Zustand | App-wide preferences |
| Auth state | Context + secure storage | User session |
| Server data | TanStack Query | API responses |
| URL state | Router | Filters, pagination |
| Ephemeral UI | useState | Hover state, animations |

**Decision Questions to Ask:**

1. **Where does this state come from?** (Server → Query, Client → local or global)
2. **How many components need it?** (1 → local, many → lift or global)
3. **How often does it change?** (Frequently → consider performance)
4. **Does it need to survive refresh?** (Yes → persistence layer)
5. **Does it affect the URL?** (Yes → URL state)
6. **Is it sensitive?** (Yes → don't persist in localStorage)

**Senior insight:** The biggest mistake is reaching for Redux by default. Start with the simplest solution (useState), add complexity only when needed. For most modern apps: TanStack Query for server state, Zustand for shared client state, and that's it. The "best" state management is the one that matches your team's mental model and your app's actual complexity—not theoretical future complexity.

---
`,Xg=`## 5. Architecture & Design Patterns

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
`,$g=`## 6. System Design

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
`,Zg=`## 7. TypeScript with React

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

### Q: How do you use template literal types for design tokens and CSS-in-JS?

**Answer:**

Template literal types allow you to create strongly-typed string patterns, perfect for design systems with consistent spacing, colors, and responsive props.

**Basic Template Literal Types:**

\`\`\`typescript
// Simple pattern matching
type Greeting = \`Hello, \${string}!\`;
const valid: Greeting = 'Hello, World!'; // ✅
const invalid: Greeting = 'Hi, World!';   // ❌ Type error

// Combining literals
type Size = 'sm' | 'md' | 'lg';
type Breakpoint = 'mobile' | 'tablet' | 'desktop';
type ResponsiveSize = \`\${Size}-\${Breakpoint}\`;
// Result: 'sm-mobile' | 'sm-tablet' | 'sm-desktop' | 'md-mobile' | ...
\`\`\`

**Design Token Spacing:**

\`\`\`typescript
// Spacing scale (4px base)
type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
type SpacingUnit = 'px' | 'rem';
type Spacing = SpacingValue | \`\${SpacingValue}\${SpacingUnit}\`;

interface BoxProps {
  padding?: Spacing;
  margin?: Spacing;
  gap?: Spacing;
}

function Box({ padding, margin, gap }: BoxProps) {
  const style = {
    padding: typeof padding === 'number' ? \`\${padding * 4}px\` : padding,
    margin: typeof margin === 'number' ? \`\${margin * 4}px\` : margin,
    gap: typeof gap === 'number' ? \`\${gap * 4}px\` : gap,
  };
  return <div style={style} />;
}

// Usage
<Box padding={4} />        // ✅ 16px
<Box padding="16px" />     // ✅ explicit
<Box padding={7} />        // ❌ Error: 7 not in scale
<Box padding="15px" />     // ❌ Error: not in type
\`\`\`

**Typed Color Palette:**

\`\`\`typescript
// Color with opacity variations
type ColorName = 'primary' | 'secondary' | 'success' | 'error' | 'warning';
type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Color = ColorName | \`\${ColorName}-\${ColorShade}\`;

interface TextProps {
  color?: Color;
  bg?: Color;
}

// Map to actual CSS values
const colorMap: Record<Color, string> = {
  'primary': '#3B82F6',
  'primary-50': '#EFF6FF',
  'primary-100': '#DBEAFE',
  'primary-500': '#3B82F6',
  'primary-900': '#1E3A8A',
  // ... etc
};

function Text({ color = 'primary', children }: TextProps & { children: React.ReactNode }) {
  return <span style={{ color: colorMap[color] }}>{children}</span>;
}

// Usage
<Text color="primary-500">Hello</Text>  // ✅
<Text color="brand">Hello</Text>        // ❌ Error: not a valid color
\`\`\`

**Responsive Props (Tailwind-style):**

\`\`\`typescript
// Breakpoint prefixed props
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type SpacingKey = 'p' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr' | 'm' | 'mx' | 'my';
type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

// Generate all responsive spacing classes
type ResponsiveSpacing =
  | \`\${SpacingKey}-\${SpacingScale}\`
  | \`\${Breakpoint}:\${SpacingKey}-\${SpacingScale}\`;

// Example: 'p-4' | 'sm:p-4' | 'md:p-4' | 'px-2' | 'lg:mx-8' | ...

interface TailwindProps {
  className?: ResponsiveSpacing | ResponsiveSpacing[];
}

// Type-safe Tailwind-like classes
function classNames(...classes: (ResponsiveSpacing | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Usage
<div className={classNames('p-4', 'md:p-6', 'lg:p-8')} />  // ✅
<div className={classNames('p-4', 'md:p-15')} />           // ❌ 15 not in scale
\`\`\`

**CSS Grid/Flex Values:**

\`\`\`typescript
// Typed CSS values
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridTemplate = \`repeat(\${GridCols}, 1fr)\` | \`\${GridCols}fr\`;

interface FlexProps {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: SpacingValue;
}

interface GridProps {
  cols?: GridCols;
  template?: GridTemplate;
  gap?: SpacingValue;
}

function Flex({ direction = 'row', justify = 'start', align = 'stretch', gap = 0 }: FlexProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify === 'between' ? 'space-between' : justify,
        alignItems: align,
        gap: gap * 4,
      }}
    />
  );
}
\`\`\`

**CSS Custom Properties:**

\`\`\`typescript
// Typed CSS variables
type CSSVariableName = 'color-primary' | 'color-secondary' | 'spacing-base' | 'font-size-base';
type CSSVariable = \`var(--\${CSSVariableName})\`;

interface ThemedProps {
  color?: Color | CSSVariable;
  spacing?: Spacing | CSSVariable;
}

// Usage
<Box color="var(--color-primary)" spacing="var(--spacing-base)" />
<Box color="var(--invalid-var)" />  // ❌ Error if not in CSSVariableName
\`\`\`

**Mapped Types for Design Tokens:**

\`\`\`typescript
// Generate props from token object
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

type SpacingToken = keyof typeof spacing;

// Auto-generate responsive spacing props
type SpacingProps = {
  [K in \`\${'p' | 'm' | 'gap'}\${'' | 'x' | 'y' | 't' | 'b' | 'l' | 'r'}\`]?: SpacingToken;
};

// Result: { p?: 'xs'|'sm'|..., px?: ..., py?: ..., m?: ..., gap?: ... }
\`\`\`

**With styled-components:**

\`\`\`typescript
import styled from 'styled-components';

type ThemeColor = 'primary' | 'secondary' | 'success' | 'error';
type ThemeSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: ThemeColor;
  size?: ThemeSpacing;
}

const Button = styled.button<ButtonProps>\`
  background: \${({ variant = 'primary', theme }) => theme.colors[variant]};
  padding: \${({ size = 'md', theme }) => theme.spacing[size]};
\`;

// Theme type ensures colors/spacing keys exist
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ThemeColor, string>;
    spacing: Record<ThemeSpacing, string>;
  }
}
\`\`\`

**Senior insight:** Template literal types shine for design systems with a finite set of valid values. They catch typos at compile time and provide excellent autocomplete. However, they add complexity - use them when you have a stable design token system. For prototyping, plain strings with runtime validation may be simpler. TypeScript 4.1+ supports template literal types; ensure your tsconfig target supports them.

---

### Q: How do you type generic components in React?

**Answer:**

Generic components let you write reusable, type-safe components that work with any data type while preserving type information through the component tree.

**Basic Generic Component:**

\`\`\`typescript
// Generic list that works with any item type
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

// Usage - T is inferred from items
interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [{ id: '1', name: 'John', email: 'john@example.com' }];

<List
  items={users}
  keyExtractor={(user) => user.id}  // user is User
  renderItem={(user) => <span>{user.name}</span>}  // user is User
/>
\`\`\`

**Generic with Constraints:**

\`\`\`typescript
// Constraint: items must have an 'id' property
interface WithId {
  id: string | number;
}

interface SelectProps<T extends WithId> {
  items: T[];
  value: T | null;
  onChange: (item: T) => void;
  getLabel: (item: T) => string;
}

function Select<T extends WithId>({
  items,
  value,
  onChange,
  getLabel,
}: SelectProps<T>) {
  return (
    <select
      value={value?.id ?? ''}
      onChange={(e) => {
        const selected = items.find(item => String(item.id) === e.target.value);
        if (selected) onChange(selected);
      }}
    >
      <option value="">Select...</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  );
}

// Usage
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [];

<Select
  items={products}
  value={selectedProduct}
  onChange={setSelectedProduct}  // (item: Product) => void
  getLabel={(p) => \`\${p.name} - $\${p.price}\`}  // p is Product
/>

// ❌ Error: type without 'id'
<Select items={[{ name: 'Test' }]} />  // Error: missing 'id'
\`\`\`

**Generic Table Component:**

\`\`\`typescript
interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T extends WithId> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}

function Table<T extends WithId>({
  data,
  columns,
  onRowClick,
  isLoading,
}: TableProps<T>) {
  if (isLoading) return <Skeleton />;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} style={{ width: col.width }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            onClick={() => onRowClick?.(item)}
            style={{ cursor: onRowClick ? 'pointer' : undefined }}
          >
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(item)
                  : String(item[col.key as keyof T] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage
<Table
  data={users}
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'actions',
      header: '',
      render: (user) => <button onClick={() => deleteUser(user.id)}>Delete</button>,
    },
  ]}
  onRowClick={(user) => navigate(\`/users/\${user.id}\`)}  // user is User
/>
\`\`\`

**Generic with Default Type:**

\`\`\`typescript
// Default to unknown if not specified
interface FormFieldProps<T = unknown> {
  value: T;
  onChange: (value: T) => void;
  validate?: (value: T) => string | undefined;
}

function FormField<T = unknown>({ value, onChange, validate }: FormFieldProps<T>) {
  const error = validate?.(value);
  // ...
}

// Without explicit type, T = unknown
<FormField value={name} onChange={setName} />

// With explicit type
<FormField<number>
  value={age}
  onChange={setAge}
  validate={(v) => v < 0 ? 'Must be positive' : undefined}
/>
\`\`\`

**Multiple Generics:**

\`\`\`typescript
// Transform data from one type to another
interface TransformListProps<TInput, TOutput> {
  items: TInput[];
  transform: (item: TInput) => TOutput;
  renderItem: (item: TOutput) => React.ReactNode;
  keyExtractor: (item: TInput) => string;
}

function TransformList<TInput, TOutput>({
  items,
  transform,
  renderItem,
  keyExtractor,
}: TransformListProps<TInput, TOutput>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(transform(item))}
        </li>
      ))}
    </ul>
  );
}

// Usage
interface ApiUser {
  user_id: string;
  full_name: string;
}

interface DisplayUser {
  id: string;
  name: string;
}

<TransformList
  items={apiUsers}
  transform={(user) => ({ id: user.user_id, name: user.full_name })}
  renderItem={(user) => <span>{user.name}</span>}  // user is DisplayUser
  keyExtractor={(user) => user.user_id}  // user is ApiUser
/>
\`\`\`

**Generic with forwardRef:**

\`\`\`typescript
// Generic forwardRef is tricky - need type assertion
interface InputProps<T> {
  value: T;
  onChange: (value: T) => void;
}

// Option 1: Factory function
function createGenericInput<T>() {
  return forwardRef<HTMLInputElement, InputProps<T>>(
    function GenericInput({ value, onChange }, ref) {
      return (
        <input
          ref={ref}
          value={String(value)}
          onChange={(e) => onChange(e.target.value as T)}
        />
      );
    }
  );
}

const StringInput = createGenericInput<string>();
const NumberInput = createGenericInput<number>();

// Option 2: Type assertion on component
interface GenericInputProps<T> extends InputProps<T> {
  ref?: React.Ref<HTMLInputElement>;
}

function GenericInput<T>({ value, onChange, ref }: GenericInputProps<T>) {
  return (
    <input
      ref={ref}
      value={String(value)}
      onChange={(e) => onChange(e.target.value as T)}
    />
  );
}

// Cast to preserve generic
const ForwardedInput = forwardRef(GenericInput) as <T>(
  props: InputProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement;
\`\`\`

**Generic Hooks:**

\`\`\`typescript
// Generic custom hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

// Usage - type is inferred
const [user, setUser] = useLocalStorage('user', { name: '', email: '' });
// user: { name: string; email: string }
\`\`\`

**Senior insight:** Generics make components reusable while keeping type safety. Key patterns: (1) Use constraints (\`extends\`) to ensure required properties, (2) Provide defaults for common cases, (3) Keep generics simple - if you have 4+ type parameters, consider splitting the component. Generic + forwardRef is awkward in TypeScript - consider exposing ref via a prop or using a factory pattern.

---

### Q: What are advanced conditional types and how do you use them with React?

**Answer:**

Conditional types let you create types that depend on other types, enabling sophisticated type transformations. They're essential for building type-safe utility types and complex component APIs.

**Basic Conditional Types:**

\`\`\`typescript
// Syntax: T extends U ? X : Y
// "If T is assignable to U, the type is X, otherwise Y"

type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<42>;       // false

// With never for filtering
type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null>;  // string
\`\`\`

**Extracting Types with \`infer\`:**

\`\`\`typescript
// infer declares a type variable within the conditional
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type D = GetReturnType<() => string>;  // string
type E = GetReturnType<(x: number) => boolean>;  // boolean

// Extract props type from a component
type GetProps<T> = T extends React.ComponentType<infer P> ? P : never;

type ButtonProps = GetProps<typeof Button>;  // { onClick: () => void; ... }

// Extract array element type
type ArrayElement<T> = T extends (infer E)[] ? E : never;

type F = ArrayElement<string[]>;  // string
type G = ArrayElement<User[]>;    // User
\`\`\`

**React-Specific Conditional Types:**

\`\`\`typescript
// Extract ref type from a component
type GetRefType<T> = T extends React.ForwardRefExoticComponent<
  React.RefAttributes<infer R>
>
  ? R
  : T extends React.ComponentType<{ ref?: React.Ref<infer R> }>
  ? R
  : never;

type InputRef = GetRefType<typeof MyInput>;  // HTMLInputElement

// Extract children type
type ChildrenType<T> = T extends { children: infer C } ? C : never;

// Conditionally require props
type RequireIfTrue<T, K extends keyof T, Condition extends boolean> =
  Condition extends true
    ? T & Required<Pick<T, K>>
    : T & Partial<Pick<T, K>>;

interface BaseFormProps {
  onSubmit: () => void;
  validationSchema?: object;
  validateOnChange?: boolean;
}

// If validateOnChange is true, validationSchema is required
type FormProps<ValidateOnChange extends boolean = false> =
  RequireIfTrue<BaseFormProps, 'validationSchema', ValidateOnChange>;

// Usage
const propsA: FormProps<false> = { onSubmit: () => {} };  // ✅ schema optional
const propsB: FormProps<true> = { onSubmit: () => {} };   // ❌ Error: missing validationSchema
const propsC: FormProps<true> = { onSubmit: () => {}, validationSchema: {} };  // ✅
\`\`\`

**Mapped Conditional Types:**

\`\`\`typescript
// Transform all properties conditionally
type OptionalIfFunction<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K] | undefined
    : T[K];
};

interface ButtonProps {
  label: string;
  onClick: () => void;
  onHover: () => void;
}

type RelaxedButtonProps = OptionalIfFunction<ButtonProps>;
// { label: string; onClick?: () => void; onHover?: () => void; }

// Make certain keys required based on condition
type RequireKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type ControlledInputProps = RequireKeys<InputProps, 'value' | 'onChange'>;
\`\`\`

**Conditional Props Pattern:**

\`\`\`typescript
// Props that depend on each other
type ConditionalProps<TControlled extends boolean> = TControlled extends true
  ? {
      controlled: true;
      value: string;
      onChange: (value: string) => void;
      defaultValue?: never;  // Disallow
    }
  : {
      controlled?: false;
      value?: never;  // Disallow
      onChange?: (value: string) => void;
      defaultValue?: string;
    };

type InputProps<TControlled extends boolean = false> = {
  label: string;
  placeholder?: string;
} & ConditionalProps<TControlled>;

function Input<TControlled extends boolean = false>(
  props: InputProps<TControlled>
) {
  if (props.controlled) {
    // TypeScript knows: value and onChange exist
    return <input value={props.value} onChange={(e) => props.onChange(e.target.value)} />;
  }
  // TypeScript knows: defaultValue might exist
  return <input defaultValue={props.defaultValue} />;
}

// Usage
<Input label="Name" defaultValue="John" />           // ✅ Uncontrolled
<Input label="Name" controlled value={v} onChange={setV} />  // ✅ Controlled
<Input label="Name" controlled defaultValue="John" />  // ❌ Error: can't mix
<Input label="Name" value={v} />                      // ❌ Error: need controlled=true
\`\`\`

**Distributive Conditional Types:**

\`\`\`typescript
// Conditional types distribute over unions automatically
type Wrapped<T> = T extends any ? { value: T } : never;

type Distributed = Wrapped<string | number>;
// Result: { value: string } | { value: number }

// Prevent distribution with [T] extends [any]
type NonDistributed<T> = [T] extends [any] ? { value: T } : never;

type NotDistributed = NonDistributed<string | number>;
// Result: { value: string | number }

// Useful for filtering union members
type FilterByType<T, U> = T extends U ? T : never;

type OnlyStrings = FilterByType<string | number | boolean, string>;  // string
type OnlyFunctions = FilterByType<string | (() => void) | number, Function>;  // () => void
\`\`\`

**Template Literal Conditional Types:**

\`\`\`typescript
// Extract parts of string literal types
type ExtractRoute<T extends string> =
  T extends \`/\${infer Segment}/\${infer Rest}\`
    ? Segment | ExtractRoute<\`/\${Rest}\`>
    : T extends \`/\${infer Segment}\`
    ? Segment
    : never;

type RouteSegments = ExtractRoute<'/users/123/posts'>;
// Result: 'users' | '123' | 'posts'

// Build route params type
type ExtractParams<T extends string> =
  T extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractParams<Rest>
    : T extends \`\${string}:\${infer Param}\`
    ? Param
    : never;

type Params = ExtractParams<'/users/:userId/posts/:postId'>;
// Result: 'userId' | 'postId'

// Full route params type
type RouteParams<T extends string> = {
  [K in ExtractParams<T>]: string;
};

type UserPostParams = RouteParams<'/users/:userId/posts/:postId'>;
// Result: { userId: string; postId: string }
\`\`\`

**Complex Component Prop Types:**

\`\`\`typescript
// Component that changes props based on 'mode'
type Mode = 'view' | 'edit' | 'create';

type BaseProps = {
  title: string;
};

type ModeSpecificProps<M extends Mode> =
  M extends 'view'
    ? { data: User; onEdit?: () => void }
    : M extends 'edit'
    ? { data: User; onSave: (user: User) => void; onCancel: () => void }
    : M extends 'create'
    ? { onSave: (user: Omit<User, 'id'>) => void; onCancel: () => void }
    : never;

type UserFormProps<M extends Mode> = BaseProps & { mode: M } & ModeSpecificProps<M>;

function UserForm<M extends Mode>(props: UserFormProps<M>) {
  // Implementation based on mode
  if (props.mode === 'view') {
    // TypeScript knows: props.data exists
    return <div>{props.data.name}</div>;
  }
  // ... etc
}

// Usage
<UserForm mode="view" title="User" data={user} />
<UserForm mode="edit" title="Edit" data={user} onSave={save} onCancel={cancel} />
<UserForm mode="create" title="New" onSave={create} onCancel={cancel} />

// ❌ Error: missing onSave for edit mode
<UserForm mode="edit" title="Edit" data={user} />
\`\`\`

**Senior insight:** Conditional types are powerful but can hurt readability. Use them for: (1) Library/utility types that need flexibility, (2) Enforcing prop relationships, (3) Type transformations. Avoid deep nesting - if your conditional type is 4+ levels deep, consider simplifying or using discriminated unions instead. The \`infer\` keyword is key for extracting types - master it for advanced patterns.

---

### Q: How do you create type-safe event handlers in React?

**Answer:**

React has a comprehensive type system for events. Understanding it helps you write type-safe handlers and avoid common type errors.

**React Event Types Hierarchy:**

\`\`\`typescript
// Base type - all events extend this
React.SyntheticEvent<T = Element, E = Event>

// Specific event types
React.MouseEvent<T = Element>        // click, mouseenter, etc.
React.KeyboardEvent<T = Element>     // keydown, keyup, etc.
React.ChangeEvent<T = Element>       // input change
React.FormEvent<T = Element>         // form submit
React.FocusEvent<T = Element>        // focus, blur
React.DragEvent<T = Element>         // drag and drop
React.TouchEvent<T = Element>        // touch events
React.WheelEvent<T = Element>        // scroll wheel
React.AnimationEvent<T = Element>    // CSS animations
React.TransitionEvent<T = Element>   // CSS transitions
React.ClipboardEvent<T = Element>    // copy, cut, paste
React.PointerEvent<T = Element>      // unified pointer events
\`\`\`

**Basic Event Handler Typing:**

\`\`\`typescript
// Inline handlers - type is inferred
<button onClick={(e) => {
  e.preventDefault();  // ✅ e is MouseEvent<HTMLButtonElement>
  console.log(e.currentTarget.textContent);
}}>
  Click
</button>

// Separate handler function
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.disabled);  // ✅ knows it's a button
};

<button onClick={handleClick}>Click</button>

// Using event handler type
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  // e is automatically typed
};
\`\`\`

**currentTarget vs target:**

\`\`\`typescript
// currentTarget - element the handler is attached to (correctly typed)
// target - element that triggered the event (typed as EventTarget)

function handleClick(e: React.MouseEvent<HTMLDivElement>) {
  // currentTarget is always the div we attached onClick to
  e.currentTarget.style.background = 'red';  // ✅ HTMLDivElement

  // target could be any element inside the div that was clicked
  e.target;  // EventTarget - very generic

  // Type guard to narrow target
  if (e.target instanceof HTMLButtonElement) {
    e.target.disabled = true;  // ✅ now knows it's a button
  }
}

// Common pattern: assert target type
function handleClick(e: React.MouseEvent<HTMLDivElement>) {
  const target = e.target as HTMLElement;  // Safe for most cases
  console.log(target.tagName);
}
\`\`\`

**Form and Input Events:**

\`\`\`typescript
// Input change event
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;  // string
  const name = e.target.name;    // string
  const checked = e.target.checked;  // boolean (for checkboxes)
}

// Select change event
function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
  const value = e.target.value;
  const selectedIndex = e.target.selectedIndex;
  const selectedOption = e.target.options[selectedIndex];
}

// Textarea change event
function handleTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
  const value = e.target.value;
  const rows = e.target.rows;
}

// Form submit event
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // Access form data
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');  // FormDataEntryValue | null

  // Type-safe form access
  const form = e.currentTarget;
  const nameInput = form.elements.namedItem('name') as HTMLInputElement;
  const nameValue = nameInput.value;  // string
}
\`\`\`

**Generic Event Handler:**

\`\`\`typescript
// Handler that works with multiple input types
function createChangeHandler<T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
  setter: (value: string) => void
) {
  return (e: React.ChangeEvent<T>) => {
    setter(e.target.value);
  };
}

// Usage
const handleNameChange = createChangeHandler<HTMLInputElement>(setName);
const handleCountryChange = createChangeHandler<HTMLSelectElement>(setCountry);

// Typed form handler factory
function createFormHandler<TFormData>(
  onSubmit: (data: TFormData) => void
) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as TFormData;
    onSubmit(data);
  };
}

interface LoginForm {
  email: string;
  password: string;
}

const handleLogin = createFormHandler<LoginForm>((data) => {
  console.log(data.email, data.password);  // both typed as string
});
\`\`\`

**Keyboard Event Patterns:**

\`\`\`typescript
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  // Key identification
  if (e.key === 'Enter') {
    e.preventDefault();
    submitForm();
  }

  if (e.key === 'Escape') {
    closeModal();
  }

  // Modifier keys
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    save();
  }

  // Deprecated: e.keyCode, e.charCode - use e.key instead
}

// Type-safe key handler map
type KeyHandler = (e: React.KeyboardEvent) => void;
type KeyMap = Partial<Record<string, KeyHandler>>;

function useKeyboardHandlers(keyMap: KeyMap) {
  return (e: React.KeyboardEvent) => {
    const handler = keyMap[e.key];
    if (handler) {
      e.preventDefault();
      handler(e);
    }
  };
}

// Usage
const handleKeyDown = useKeyboardHandlers({
  Enter: () => submit(),
  Escape: () => cancel(),
  ArrowDown: () => selectNext(),
  ArrowUp: () => selectPrev(),
});
\`\`\`

**Custom Event Types:**

\`\`\`typescript
// When you need to pass additional data
interface CustomButtonEvent extends React.MouseEvent<HTMLButtonElement> {
  // Can't actually extend, but can create wrapper type
}

// Better: Create a handler type with extra params
type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  data: { id: string; action: string }
) => void;

interface ActionButtonProps {
  id: string;
  action: string;
  onClick: ButtonClickHandler;
}

function ActionButton({ id, action, onClick }: ActionButtonProps) {
  return (
    <button onClick={(e) => onClick(e, { id, action })}>
      {action}
    </button>
  );
}

// Usage
<ActionButton
  id="123"
  action="delete"
  onClick={(e, data) => {
    console.log(data.id, data.action);  // Fully typed
  }}
/>
\`\`\`

**Event Handler Component Props:**

\`\`\`typescript
// Component that accepts standard event handlers
interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> {
  // Override with custom types
  value: string;
  onChange: (value: string) => void;  // Simplified from ChangeEvent
  onClear?: () => void;
}

function Input({ value, onChange, onClear, ...props }: InputProps) {
  return (
    <div>
      <input
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}  // Wrap native event
      />
      {onClear && <button onClick={onClear}>×</button>}
    </div>
  );
}

// Standard event handler types as props
interface ComponentProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
\`\`\`

**Debounced Event Handlers:**

\`\`\`typescript
// Type-safe debounced handler
function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: Parameters<T>) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay]
  );
}

// Usage
const handleSearch = useDebouncedCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  },
  300
);

<input onChange={handleSearch} />
\`\`\`

**Senior insight:** The key to mastering React event types is understanding \`currentTarget\` (always matches the generic parameter) vs \`target\` (needs type guards). Use \`React.MouseEventHandler<T>\` et al. when declaring handler props for cleaner signatures. For forms, \`FormData\` with \`Object.fromEntries()\` is type-safe with assertion. When wrapping native elements, use \`Omit<React.InputHTMLAttributes<...>, 'overriddenProps'>\` to inherit all standard props while customizing specific ones.

---
`,Jg=`## 8. Testing

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

### Q: How do you set up and use Mock Service Worker (MSW) for React testing?

**Answer:**

MSW (Mock Service Worker) intercepts network requests at the service worker level, providing realistic API mocking without changing application code. It's the modern standard for API mocking in React testing.

**MSW 2.0 Setup:**

\`\`\`typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // GET request
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
  }),

  // GET with params
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: 'John Doe',
      email: 'john@example.com',
    });
  }),

  // POST request
  http.post('/api/users', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { id: 3, ...body },
      { status: 201 }
    );
  }),

  // Error response
  http.delete('/api/users/:id', ({ params }) => {
    if (params.id === '999') {
      return HttpResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return HttpResponse.json({ success: true });
  }),
];
\`\`\`

\`\`\`typescript
// src/mocks/server.ts (for Node/Jest)
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
\`\`\`

\`\`\`typescript
// src/mocks/browser.ts (for browser/Storybook)
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
\`\`\`

**Test Setup:**

\`\`\`typescript
// setupTests.ts or jest.setup.ts
import { server } from './mocks/server';

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (removes runtime overrides)
afterEach(() => server.resetHandlers());

// Clean up after all tests
afterAll(() => server.close());
\`\`\`

**Using MSW in Tests:**

\`\`\`typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from './mocks/server';
import UserList from './UserList';

test('displays users from API', async () => {
  render(<UserList />);

  // Wait for data to load
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});

test('handles API errors gracefully', async () => {
  // Override handler for this specific test
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText('Failed to load users')).toBeInTheDocument();
  });
});

test('shows loading state while fetching', async () => {
  // Delay response to test loading state
  server.use(
    http.get('/api/users', async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return HttpResponse.json([{ id: 1, name: 'John' }]);
    })
  );

  render(<UserList />);

  // Loading state should be visible initially
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Then data appears
  expect(await screen.findByText('John')).toBeInTheDocument();
});
\`\`\`

**Testing Different HTTP Methods:**

\`\`\`typescript
test('creates new user via POST', async () => {
  const user = userEvent.setup();
  const onUserCreated = jest.fn();

  // Track what was sent to the API
  let capturedBody: any;
  server.use(
    http.post('/api/users', async ({ request }) => {
      capturedBody = await request.json();
      return HttpResponse.json(
        { id: 99, ...capturedBody },
        { status: 201 }
      );
    })
  );

  render(<CreateUserForm onSuccess={onUserCreated} />);

  await user.type(screen.getByLabelText('Name'), 'New User');
  await user.type(screen.getByLabelText('Email'), 'new@example.com');
  await user.click(screen.getByRole('button', { name: 'Create' }));

  await waitFor(() => {
    expect(onUserCreated).toHaveBeenCalledWith(
      expect.objectContaining({ id: 99, name: 'New User' })
    );
  });

  // Verify request body
  expect(capturedBody).toEqual({
    name: 'New User',
    email: 'new@example.com',
  });
});
\`\`\`

**Testing Query Parameters:**

\`\`\`typescript
test('filters users by role', async () => {
  let capturedUrl: URL;

  server.use(
    http.get('/api/users', ({ request }) => {
      capturedUrl = new URL(request.url);
      const role = capturedUrl.searchParams.get('role');

      if (role === 'admin') {
        return HttpResponse.json([{ id: 1, name: 'Admin User', role: 'admin' }]);
      }
      return HttpResponse.json([]);
    })
  );

  render(<UserList filter="admin" />);

  await waitFor(() => {
    expect(screen.getByText('Admin User')).toBeInTheDocument();
  });

  expect(capturedUrl!.searchParams.get('role')).toBe('admin');
});
\`\`\`

**Network Conditions Simulation:**

\`\`\`typescript
test('handles network timeout', async () => {
  server.use(
    http.get('/api/users', async () => {
      // Simulate network timeout
      await new Promise(resolve => setTimeout(resolve, 10000));
      return HttpResponse.json([]);
    })
  );

  render(<UserList timeout={1000} />);

  await waitFor(() => {
    expect(screen.getByText('Request timed out')).toBeInTheDocument();
  }, { timeout: 2000 });
});

test('handles network failure', async () => {
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.error(); // Simulates network error
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText('Network error')).toBeInTheDocument();
  });
});
\`\`\`

**Reusable Response Factories:**

\`\`\`typescript
// mocks/factories.ts
import { faker } from '@faker-js/faker';

export function createUser(overrides = {}) {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.recent().toISOString(),
    ...overrides,
  };
}

export function createUsers(count: number) {
  return Array.from({ length: count }, () => createUser());
}

// In tests
server.use(
  http.get('/api/users', () => {
    return HttpResponse.json(createUsers(10));
  })
);
\`\`\`

**Senior insight:** MSW 2.0 represents a significant API change from 1.x - ensure you're using the correct syntax. Key benefits over jest.mock(fetch): (1) tests your actual fetch/axios code, (2) works with any HTTP client, (3) same handlers work in tests, Storybook, and development. Set \`onUnhandledRequest: 'error'\` in tests to catch missing handlers. Use response factories for realistic data that catches edge cases.

---

### Q: How do you test components using React Query/TanStack Query?

**Answer:**

Testing React Query requires proper QueryClient setup, cache management, and understanding of its async patterns.

**QueryClient Setup for Tests:**

\`\`\`typescript
// test-utils/react-query.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Don't retry on failure in tests
        retry: false,
        // Don't cache between tests
        gcTime: 0,
        // Don't refetch on window focus in tests
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
    // Suppress error logging in tests (optional)
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}

export function renderWithQueryClient(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  const queryClient = createTestQueryClient();

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
    queryClient,
  };
}
\`\`\`

**Testing Queries:**

\`\`\`typescript
import { renderWithQueryClient } from './test-utils/react-query';
import { screen, waitFor } from '@testing-library/react';
import { server } from './mocks/server';
import { http, HttpResponse } from 'msw';
import UserProfile from './UserProfile';

test('displays user data after successful fetch', async () => {
  server.use(
    http.get('/api/users/:id', () => {
      return HttpResponse.json({ id: 1, name: 'John Doe', email: 'john@test.com' });
    })
  );

  renderWithQueryClient(<UserProfile userId="1" />);

  // Check loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  expect(screen.getByText('john@test.com')).toBeInTheDocument();
});

test('displays error message on fetch failure', async () => {
  server.use(
    http.get('/api/users/:id', () => {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 });
    })
  );

  renderWithQueryClient(<UserProfile userId="999" />);

  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
\`\`\`

**Testing Mutations:**

\`\`\`typescript
import userEvent from '@testing-library/user-event';

test('updates user and invalidates cache', async () => {
  const user = userEvent.setup();

  // Initial user data
  server.use(
    http.get('/api/users/1', () => {
      return HttpResponse.json({ id: 1, name: 'John', email: 'john@test.com' });
    }),
    http.patch('/api/users/1', async ({ request }) => {
      const body = await request.json();
      return HttpResponse.json({ id: 1, ...body });
    })
  );

  const { queryClient } = renderWithQueryClient(<EditUserForm userId="1" />);

  // Wait for initial data load
  await waitFor(() => {
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  });

  // Update name
  await user.clear(screen.getByLabelText('Name'));
  await user.type(screen.getByLabelText('Name'), 'Jane');
  await user.click(screen.getByRole('button', { name: 'Save' }));

  // Wait for mutation to complete
  await waitFor(() => {
    expect(screen.getByText('Saved!')).toBeInTheDocument();
  });

  // Verify cache was updated
  const cachedUser = queryClient.getQueryData(['user', '1']);
  expect(cachedUser).toEqual(expect.objectContaining({ name: 'Jane' }));
});
\`\`\`

**Testing Optimistic Updates:**

\`\`\`typescript
test('shows optimistic update then reverts on error', async () => {
  const user = userEvent.setup();
  let callCount = 0;

  server.use(
    http.post('/api/todos', async () => {
      callCount++;
      // First call fails
      if (callCount === 1) {
        await new Promise(r => setTimeout(r, 100));
        return HttpResponse.json({ error: 'Failed' }, { status: 500 });
      }
      return HttpResponse.json({ id: 1, text: 'New todo', completed: false });
    })
  );

  renderWithQueryClient(<TodoList />);

  await user.type(screen.getByPlaceholderText('Add todo'), 'New todo');
  await user.click(screen.getByRole('button', { name: 'Add' }));

  // Optimistic update should show immediately
  expect(screen.getByText('New todo')).toBeInTheDocument();

  // After error, optimistic update should be rolled back
  await waitFor(() => {
    expect(screen.queryByText('New todo')).not.toBeInTheDocument();
  });

  // Error should be shown
  expect(screen.getByText(/failed/i)).toBeInTheDocument();
});
\`\`\`

**Testing Query Invalidation:**

\`\`\`typescript
test('refetches data after invalidation', async () => {
  const user = userEvent.setup();
  let fetchCount = 0;

  server.use(
    http.get('/api/todos', () => {
      fetchCount++;
      if (fetchCount === 1) {
        return HttpResponse.json([{ id: 1, text: 'Original', completed: false }]);
      }
      return HttpResponse.json([
        { id: 1, text: 'Original', completed: false },
        { id: 2, text: 'New item', completed: false },
      ]);
    }),
    http.post('/api/todos', () => {
      return HttpResponse.json({ id: 2, text: 'New item', completed: false });
    })
  );

  const { queryClient } = renderWithQueryClient(<TodoApp />);

  // Initial load
  await waitFor(() => {
    expect(screen.getByText('Original')).toBeInTheDocument();
  });
  expect(fetchCount).toBe(1);

  // Add new todo (should invalidate and refetch)
  await user.click(screen.getByRole('button', { name: 'Add Todo' }));

  await waitFor(() => {
    expect(screen.getByText('New item')).toBeInTheDocument();
  });

  // Verify refetch occurred
  expect(fetchCount).toBe(2);
});
\`\`\`

**Testing with Pre-populated Cache:**

\`\`\`typescript
test('renders with pre-populated cache', async () => {
  const queryClient = createTestQueryClient();

  // Pre-populate cache (useful for testing cache-dependent behavior)
  queryClient.setQueryData(['user', '1'], {
    id: 1,
    name: 'Cached User',
    email: 'cached@test.com',
  });

  render(
    <QueryClientProvider client={queryClient}>
      <UserProfile userId="1" />
    </QueryClientProvider>
  );

  // Should show cached data immediately (no loading state)
  expect(screen.getByText('Cached User')).toBeInTheDocument();
});
\`\`\`

**Testing Infinite Queries:**

\`\`\`typescript
test('loads more items on scroll', async () => {
  const user = userEvent.setup();

  server.use(
    http.get('/api/posts', ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;

      return HttpResponse.json({
        posts: [
          { id: page * 10 + 1, title: \`Post \${page}-1\` },
          { id: page * 10 + 2, title: \`Post \${page}-2\` },
        ],
        nextPage: page < 3 ? page + 1 : null,
      });
    })
  );

  renderWithQueryClient(<InfinitePostList />);

  // Initial load
  await waitFor(() => {
    expect(screen.getByText('Post 1-1')).toBeInTheDocument();
  });

  // Load more
  await user.click(screen.getByRole('button', { name: 'Load More' }));

  await waitFor(() => {
    expect(screen.getByText('Post 2-1')).toBeInTheDocument();
  });

  // Previous items should still be visible
  expect(screen.getByText('Post 1-1')).toBeInTheDocument();
});
\`\`\`

**Senior insight:** The key to testing React Query effectively is understanding its cache behavior. Always use a fresh QueryClient per test to prevent state leakage. Use \`gcTime: 0\` to prevent cache retention between tests. When testing mutations, verify both the UI update AND the cache state. For complex scenarios (optimistic updates, invalidation), test the full flow rather than mocking useQuery directly.

---

### Q: What are strategies for visual regression testing in React?

**Answer:**

Visual regression testing catches unintended UI changes by comparing screenshots. It's essential for design systems, component libraries, and UI-heavy applications.

**Tool Options:**

| Tool | Type | Pros | Cons |
|------|------|------|------|
| **Chromatic** | Cloud service | Storybook integration, review workflow | Paid for private projects |
| **Percy** | Cloud service | Multi-browser, review workflow | Paid |
| **Playwright** | Built-in screenshots | Free, full control | Self-managed, more setup |
| **Storybook Test Runner** | Local/CI | Free, Storybook native | Less sophisticated diff |
| **Loki** | Local | Free, works with Storybook | Docker required |

**Storybook + Chromatic Setup:**

\`\`\`typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook', // Chromatic addon
  ],
};

export default config;
\`\`\`

\`\`\`typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  // Chromatic-specific settings
  parameters: {
    chromatic: {
      // Capture multiple viewports
      viewports: [320, 768, 1200],
      // Delay for animations
      delay: 300,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Story with interaction states
export const Hover: Story = {
  args: { variant: 'primary', children: 'Hover Me' },
  parameters: {
    pseudo: { hover: true }, // Chromatic hover state
  },
};

export const Focused: Story = {
  args: { variant: 'primary', children: 'Focus Me' },
  parameters: {
    pseudo: { focus: true },
  },
};

// Disable chromatic for specific story
export const Animation: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }, // Skip animated stories
  },
};
\`\`\`

**Playwright Visual Testing:**

\`\`\`typescript
// tests/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage matches snapshot', async ({ page }) => {
    await page.goto('/');

    // Wait for content to load
    await page.waitForSelector('[data-testid="hero-section"]');

    // Full page screenshot
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      // Mask dynamic content
      mask: [page.locator('[data-testid="timestamp"]')],
    });
  });

  test('button states', async ({ page }) => {
    await page.goto('/components/button');

    const button = page.locator('button.primary');

    // Default state
    await expect(button).toHaveScreenshot('button-default.png');

    // Hover state
    await button.hover();
    await expect(button).toHaveScreenshot('button-hover.png');

    // Focus state
    await button.focus();
    await expect(button).toHaveScreenshot('button-focus.png');

    // Disabled state
    await page.locator('button.disabled').first().screenshot({
      path: 'test-results/button-disabled.png',
    });
  });

  test('responsive layout', async ({ page }) => {
    await page.goto('/dashboard');

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page).toHaveScreenshot('dashboard-mobile.png');

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot('dashboard-tablet.png');

    // Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page).toHaveScreenshot('dashboard-desktop.png');
  });
});
\`\`\`

**Playwright Configuration:**

\`\`\`typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotDir: './tests/__snapshots__',

  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      // Allow small differences (anti-aliasing, fonts)
      maxDiffPixels: 100,
      // Or percentage-based threshold
      maxDiffPixelRatio: 0.01,
      // Animation handling
      animations: 'disabled',
    },
  },

  // Update snapshots in CI
  updateSnapshots: process.env.UPDATE_SNAPSHOTS === 'true' ? 'all' : 'missing',

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
\`\`\`

**Handling Dynamic Content:**

\`\`\`typescript
test('page with dynamic content', async ({ page }) => {
  await page.goto('/feed');

  // Mask timestamps, avatars, or any dynamic content
  await expect(page).toHaveScreenshot('feed.png', {
    mask: [
      page.locator('.timestamp'),
      page.locator('.user-avatar'),
      page.locator('[data-testid="ad-slot"]'),
    ],
  });

  // Or hide elements entirely
  await page.addStyleTag({
    content: \`
      .timestamp { visibility: hidden !important; }
      .user-avatar { background: gray !important; }
    \`,
  });
  await expect(page).toHaveScreenshot('feed-normalized.png');
});

// Wait for fonts and images to load
test('page with lazy content', async ({ page }) => {
  await page.goto('/gallery');

  // Wait for all images
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).every(img => img.complete);
  });

  // Wait for fonts
  await page.waitForFunction(() => document.fonts.ready);

  // Small delay for any animations
  await page.waitForTimeout(500);

  await expect(page).toHaveScreenshot('gallery.png');
});
\`\`\`

**Component-Level Visual Testing with Storybook:**

\`\`\`typescript
// Button.test.ts (using @storybook/test-runner)
import { test, expect } from '@storybook/test';

// Visual test runs against compiled Storybook
test('Button - primary variant', async ({ page }) => {
  await page.goto('/iframe.html?id=button--primary');

  // Wait for story to render
  await page.waitForSelector('.storybook-button');

  // Component screenshot
  const button = page.locator('.storybook-button');
  await expect(button).toHaveScreenshot();
});
\`\`\`

**CI Integration:**

\`\`\`yaml
# .github/workflows/visual-tests.yml
name: Visual Regression Tests

on: [push, pull_request]

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Build Storybook
        run: npm run build-storybook

      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: \${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook

      # OR Playwright visual tests
      - name: Run Playwright tests
        run: npx playwright test --project=chromium

      - name: Upload test results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: visual-test-results
          path: test-results/
\`\`\`

**Best Practices:**

| Practice | Reason |
|----------|--------|
| Test in CI only | Local rendering varies (fonts, GPU) |
| Use consistent viewport sizes | Responsive layouts cause false positives |
| Mask dynamic content | Timestamps, avatars cause failures |
| Disable animations | Animation frames cause flaky tests |
| Review changes, don't auto-approve | Visual tests need human judgment |
| Test key states | Default, hover, focus, disabled, error |
| Component-level over page-level | Smaller diffs, faster debugging |

**Senior insight:** Visual regression testing is best for component libraries and design systems where pixel-perfect consistency matters. For applications, it can be noisy due to content changes. Use it strategically - test core UI components, not every page. Chromatic's workflow is excellent for team collaboration (designers can approve changes). Playwright is great for full control and self-hosting. Always mask or mock dynamic content to avoid false positives.

---

### Q: How do you test components with complex async behavior like debouncing, polling, and race conditions?

**Answer:**

Testing complex async patterns requires understanding timing, proper timer mocking, and careful assertion strategies.

**Testing Debounced Inputs:**

\`\`\`typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Component with debounced search
function SearchBox({ onSearch, debounceMs = 300 }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) onSearch(query);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [query, debounceMs, onSearch]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

// Test with fake timers
test('debounces search input', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const onSearch = jest.fn();

  render(<SearchBox onSearch={onSearch} debounceMs={300} />);

  // Type quickly
  await user.type(screen.getByRole('textbox'), 'react');

  // Search should NOT have been called yet
  expect(onSearch).not.toHaveBeenCalled();

  // Advance timers past debounce
  jest.advanceTimersByTime(300);

  // Now search should be called with final value
  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith('react');

  jest.useRealTimers();
});

test('cancels pending search when typing continues', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const onSearch = jest.fn();

  render(<SearchBox onSearch={onSearch} debounceMs={300} />);

  await user.type(screen.getByRole('textbox'), 'rea');

  // Advance part way
  jest.advanceTimersByTime(200);

  // Type more (should reset timer)
  await user.type(screen.getByRole('textbox'), 'ct');

  // Advance another 200ms (total 400ms from first keystroke)
  jest.advanceTimersByTime(200);

  // Still shouldn't have fired (timer was reset)
  expect(onSearch).not.toHaveBeenCalled();

  // Advance remaining time
  jest.advanceTimersByTime(100);

  // Now it should fire with complete value
  expect(onSearch).toHaveBeenCalledWith('react');
  expect(onSearch).toHaveBeenCalledTimes(1);

  jest.useRealTimers();
});
\`\`\`

**Testing Polling:**

\`\`\`typescript
function PollingStatus({ pollInterval = 5000 }) {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatus(data.status);
    };

    fetchStatus(); // Initial fetch
    const interval = setInterval(fetchStatus, pollInterval);

    return () => clearInterval(interval);
  }, [pollInterval]);

  return <div data-testid="status">{status}</div>;
}

test('polls for status updates', async () => {
  jest.useFakeTimers();
  let pollCount = 0;

  server.use(
    http.get('/api/status', () => {
      pollCount++;
      const statuses = ['pending', 'processing', 'complete'];
      return HttpResponse.json({
        status: statuses[Math.min(pollCount - 1, 2)],
      });
    })
  );

  render(<PollingStatus pollInterval={1000} />);

  // Initial fetch
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('pending');
  });
  expect(pollCount).toBe(1);

  // Advance to second poll
  jest.advanceTimersByTime(1000);
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('processing');
  });
  expect(pollCount).toBe(2);

  // Advance to third poll
  jest.advanceTimersByTime(1000);
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('complete');
  });
  expect(pollCount).toBe(3);

  jest.useRealTimers();
});

test('stops polling on unmount', async () => {
  jest.useFakeTimers();
  let pollCount = 0;

  server.use(
    http.get('/api/status', () => {
      pollCount++;
      return HttpResponse.json({ status: 'ok' });
    })
  );

  const { unmount } = render(<PollingStatus pollInterval={1000} />);

  // Initial fetch
  await waitFor(() => expect(pollCount).toBe(1));

  // Unmount
  unmount();

  // Advance time - should NOT trigger more fetches
  jest.advanceTimersByTime(5000);

  expect(pollCount).toBe(1);

  jest.useRealTimers();
});
\`\`\`

**Testing Race Conditions:**

\`\`\`typescript
function TypeaheadSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setResults(data.results))
      .catch(err => {
        if (err.name !== 'AbortError') console.error(err);
      });

    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

test('handles race conditions - only shows final result', async () => {
  const user = userEvent.setup();
  const responses: Record<string, string[]> = {
    'a': ['apple', 'apricot'],
    'ab': ['abstract', 'absorb'],
    'abc': ['abcd', 'abcde'],
  };

  // Delay responses to create race condition potential
  server.use(
    http.get('/api/search', async ({ request }) => {
      const url = new URL(request.url);
      const q = url.searchParams.get('q') || '';

      // Longer queries return faster (simulating real-world)
      const delay = q.length === 1 ? 300 : q.length === 2 ? 200 : 100;
      await new Promise(r => setTimeout(r, delay));

      return HttpResponse.json({ results: responses[q] || [] });
    })
  );

  render(<TypeaheadSearch />);

  // Type quickly - creates overlapping requests
  await user.type(screen.getByTestId('search-input'), 'abc');

  // Wait for results to settle
  await waitFor(() => {
    expect(screen.getByText('abcd')).toBeInTheDocument();
  });

  // Should ONLY show results for 'abc', NOT for 'a' or 'ab'
  expect(screen.queryByText('apple')).not.toBeInTheDocument();
  expect(screen.queryByText('abstract')).not.toBeInTheDocument();
});
\`\`\`

**Testing Retry Logic:**

\`\`\`typescript
function DataFetcher({ maxRetries = 3 }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let attempt = 0;
    let cancelled = false;

    async function fetchWithRetry() {
      while (attempt < maxRetries && !cancelled) {
        try {
          const response = await fetch('/api/data');
          if (!response.ok) throw new Error('Failed');
          const data = await response.json();
          if (!cancelled) setData(data);
          return;
        } catch (err) {
          attempt++;
          if (!cancelled) setRetryCount(attempt);
          if (attempt < maxRetries) {
            await new Promise(r => setTimeout(r, 1000 * attempt)); // Exponential backoff
          }
        }
      }
      if (!cancelled) setError('Max retries exceeded');
    }

    fetchWithRetry();
    return () => { cancelled = true; };
  }, [maxRetries]);

  return (
    <div>
      <span data-testid="retry-count">{retryCount}</span>
      {error && <span data-testid="error">{error}</span>}
      {data && <span data-testid="data">{data.value}</span>}
    </div>
  );
}

test('retries on failure with backoff', async () => {
  jest.useFakeTimers();
  let callCount = 0;

  server.use(
    http.get('/api/data', () => {
      callCount++;
      // Fail first 2 attempts, succeed on 3rd
      if (callCount < 3) {
        return HttpResponse.json({ error: 'Server error' }, { status: 500 });
      }
      return HttpResponse.json({ value: 'Success!' });
    })
  );

  render(<DataFetcher maxRetries={3} />);

  // First attempt fails
  await waitFor(() => {
    expect(screen.getByTestId('retry-count')).toHaveTextContent('1');
  });

  // Advance past first backoff (1 second)
  jest.advanceTimersByTime(1000);

  // Second attempt fails
  await waitFor(() => {
    expect(screen.getByTestId('retry-count')).toHaveTextContent('2');
  });

  // Advance past second backoff (2 seconds)
  jest.advanceTimersByTime(2000);

  // Third attempt succeeds
  await waitFor(() => {
    expect(screen.getByTestId('data')).toHaveTextContent('Success!');
  });

  expect(callCount).toBe(3);
  jest.useRealTimers();
});
\`\`\`

**Testing Concurrent Updates:**

\`\`\`typescript
test('handles concurrent state updates correctly', async () => {
  const user = userEvent.setup();

  function Counter() {
    const [count, setCount] = useState(0);

    const incrementAsync = async () => {
      await new Promise(r => setTimeout(r, 100));
      setCount(c => c + 1); // Functional update is key
    };

    return (
      <div>
        <span data-testid="count">{count}</span>
        <button onClick={incrementAsync}>Increment</button>
      </div>
    );
  }

  jest.useFakeTimers();
  render(<Counter />);

  // Click multiple times rapidly
  const button = screen.getByRole('button');
  await user.click(button);
  await user.click(button);
  await user.click(button);

  // Advance time for all async operations
  jest.advanceTimersByTime(100);

  // All increments should be applied
  await waitFor(() => {
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  jest.useRealTimers();
});
\`\`\`

**Senior insight:** The key to testing async patterns is controlling time. Always use \`jest.useFakeTimers()\` or Vitest's \`vi.useFakeTimers()\` for deterministic tests. For userEvent with fake timers, pass \`advanceTimers\` option. Test the edge cases: (1) cancellation on unmount, (2) race conditions with rapid input, (3) retry exhaustion. Remember to clean up timers with \`jest.useRealTimers()\` to avoid affecting other tests.

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

---

### Q: Explain advanced WeakMap and WeakSet use cases in React applications

**Answer:**

WeakMap and WeakSet hold "weak" references to objects, allowing them to be garbage collected when no other references exist. This makes them powerful for caching, private data, and tracking without causing memory leaks.

**Key Differences from Map/Set:**

| Feature | Map/Set | WeakMap/WeakSet |
|---------|---------|-----------------|
| Keys | Any type | Objects only |
| Iteration | Yes (forEach, keys, values) | No |
| size property | Yes | No |
| Garbage collection | Prevents | Allows |
| Use case | Data storage | Object metadata |

**Pattern 1: Component Instance Metadata:**

\`\`\`typescript
// Track additional data about component instances
// without modifying the instance or preventing GC

const componentMetadata = new WeakMap<object, {
  renderCount: number;
  lastRenderTime: number;
  mountedAt: number;
}>();

function useRenderTracking() {
  const instanceRef = useRef({});

  useEffect(() => {
    const instance = instanceRef.current;

    if (!componentMetadata.has(instance)) {
      componentMetadata.set(instance, {
        renderCount: 0,
        lastRenderTime: 0,
        mountedAt: Date.now(),
      });
    }

    const meta = componentMetadata.get(instance)!;
    meta.renderCount++;
    meta.lastRenderTime = Date.now();

    // When component unmounts and instanceRef is garbage collected,
    // the metadata is automatically cleaned up
  });
}
\`\`\`

**Pattern 2: Private Class Fields (Pre-ES2022):**

\`\`\`typescript
// Before #privateField syntax, WeakMap was the standard pattern

const _password = new WeakMap<User, string>();
const _sessions = new WeakMap<User, Set<string>>();

class User {
  name: string;

  constructor(name: string, password: string) {
    this.name = name;
    _password.set(this, password);
    _sessions.set(this, new Set());
  }

  authenticate(input: string): boolean {
    return _password.get(this) === input;
  }

  addSession(sessionId: string) {
    _sessions.get(this)!.add(sessionId);
  }

  removeSession(sessionId: string) {
    _sessions.get(this)!.delete(sessionId);
  }
}

// Password is truly private - can't be accessed from outside
const user = new User('John', 'secret123');
console.log(_password.get(user)); // Only accessible if you have _password reference
\`\`\`

**Pattern 3: Memoization Cache that Doesn't Leak:**

\`\`\`typescript
// Cache expensive computations tied to object lifetime

const computationCache = new WeakMap<object, Map<string, unknown>>();

function memoize<T extends object, R>(
  obj: T,
  key: string,
  compute: () => R
): R {
  if (!computationCache.has(obj)) {
    computationCache.set(obj, new Map());
  }

  const objCache = computationCache.get(obj)!;

  if (!objCache.has(key)) {
    objCache.set(key, compute());
  }

  return objCache.get(key) as R;
}

// Usage
function ExpensiveComponent({ data }: { data: ComplexData }) {
  // Cache is automatically cleared when data object is garbage collected
  const processed = memoize(data, 'processed', () => {
    return expensiveProcessing(data);
  });

  const summary = memoize(data, 'summary', () => {
    return generateSummary(data);
  });

  return <div>{processed.map(item => <Item key={item.id} item={item} />)}</div>;
}
\`\`\`

**Pattern 4: DOM Element Association:**

\`\`\`typescript
// Associate data with DOM elements without data attributes

const elementHandlers = new WeakMap<Element, {
  cleanup: () => void;
  state: Record<string, unknown>;
}>();

function attachBehavior(element: Element, options: BehaviorOptions) {
  // Clean up previous behavior if any
  if (elementHandlers.has(element)) {
    elementHandlers.get(element)!.cleanup();
  }

  const handler = createHandler(element, options);
  const cleanup = () => {
    handler.destroy();
    element.removeEventListener('click', handler.onClick);
  };

  element.addEventListener('click', handler.onClick);

  elementHandlers.set(element, {
    cleanup,
    state: {},
  });

  // When element is removed from DOM and dereferenced,
  // handler data is automatically garbage collected
}

// React integration
function useElementBehavior(ref: RefObject<Element>, options: BehaviorOptions) {
  useEffect(() => {
    if (ref.current) {
      attachBehavior(ref.current, options);
      return () => elementHandlers.get(ref.current!)?.cleanup();
    }
  }, [options]);
}
\`\`\`

**Pattern 5: Tracking Processed Objects:**

\`\`\`typescript
// Track which objects have been processed without modifying them

const processedObjects = new WeakSet<object>();

async function processOnce<T extends object>(obj: T, processor: (obj: T) => Promise<void>) {
  if (processedObjects.has(obj)) {
    console.log('Already processed, skipping');
    return;
  }

  await processor(obj);
  processedObjects.add(obj);
}

// React example: Process data only once
function DataProcessor({ data }: { data: Record[] }) {
  useEffect(() => {
    data.forEach(item => {
      processOnce(item, async (record) => {
        await sendToAnalytics(record);
      });
    });
  }, [data]);

  return <DataView data={data} />;
}
\`\`\`

**Pattern 6: Circular Reference Safe Comparison:**

\`\`\`typescript
// Deep comparison that handles circular references

function deepEqual(a: unknown, b: unknown, seen = new WeakSet<object>()): boolean {
  // Handle primitives
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;

  // Handle circular references
  if (seen.has(a as object)) return true; // Assume equal if seen
  seen.add(a as object);

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key =>
    deepEqual((a as any)[key], (b as any)[key], seen)
  );
}

// Usage in React
function useDeepMemo<T>(value: T): T {
  const ref = useRef<T>(value);

  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
}
\`\`\`

**Pattern 7: Event Listener Registry:**

\`\`\`typescript
// Track event listeners for proper cleanup

const listenerRegistry = new WeakMap<EventTarget, Map<string, Set<EventListener>>>();

function addTrackedListener(
  target: EventTarget,
  type: string,
  listener: EventListener
) {
  if (!listenerRegistry.has(target)) {
    listenerRegistry.set(target, new Map());
  }

  const targetListeners = listenerRegistry.get(target)!;

  if (!targetListeners.has(type)) {
    targetListeners.set(type, new Set());
  }

  targetListeners.get(type)!.add(listener);
  target.addEventListener(type, listener);
}

function removeAllListeners(target: EventTarget, type?: string) {
  const targetListeners = listenerRegistry.get(target);
  if (!targetListeners) return;

  if (type) {
    targetListeners.get(type)?.forEach(listener => {
      target.removeEventListener(type, listener);
    });
    targetListeners.delete(type);
  } else {
    targetListeners.forEach((listeners, eventType) => {
      listeners.forEach(listener => {
        target.removeEventListener(eventType, listener);
      });
    });
    listenerRegistry.delete(target);
  }
}
\`\`\`

**Senior insight:** WeakMap is essential when you need to associate metadata with objects without preventing garbage collection. Common React patterns: component instance tracking, memoization caches, and DOM element metadata. The key insight is that WeakMap entries are automatically cleaned up when the key object is garbage collected—you never need to manually delete entries. This is crucial for long-running applications where manual cleanup is error-prone.

---

### Q: How do Proxy and Reflect enable reactive state management patterns?

**Answer:**

Proxy and Reflect are JavaScript metaprogramming features that allow you to intercept and customize object operations. They're the foundation for reactive state libraries like Vue, MobX, and Valtio.

**Proxy Basics:**

\`\`\`javascript
const target = { name: 'John', age: 30 };

const handler = {
  get(target, prop, receiver) {
    console.log(\`Getting \${prop}\`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log(\`Setting \${prop} to \${value}\`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxy = new Proxy(target, handler);

proxy.name;        // Logs: "Getting name", returns "John"
proxy.age = 31;    // Logs: "Setting age to 31"
\`\`\`

**Why Reflect?**

\`\`\`javascript
// Reflect provides the default behavior for all proxy traps
// It's preferred over direct operations:

const handler = {
  get(target, prop, receiver) {
    // ❌ Direct access doesn't handle inheritance correctly
    return target[prop];

    // ✅ Reflect handles receiver (this) correctly
    return Reflect.get(target, prop, receiver);
  },
};

// Example of why receiver matters
const parent = {
  get value() {
    return this._value;
  }
};

const child = Object.create(new Proxy(parent, handler));
child._value = 42;
child.value; // With Reflect: 42, Without: undefined
\`\`\`

**Building Observable State (Valtio-style):**

\`\`\`typescript
type Listener = () => void;

const listeners = new Set<Listener>();
const proxyCache = new WeakMap<object, object>();

function proxy<T extends object>(obj: T): T {
  // Return cached proxy if exists
  if (proxyCache.has(obj)) {
    return proxyCache.get(obj) as T;
  }

  const handler: ProxyHandler<T> = {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      // Recursively proxy nested objects
      if (value !== null && typeof value === 'object') {
        return proxy(value);
      }

      return value;
    },

    set(target, prop, value, receiver) {
      const oldValue = Reflect.get(target, prop, receiver);

      if (oldValue !== value) {
        Reflect.set(target, prop, value, receiver);
        // Notify all listeners of change
        listeners.forEach(listener => listener());
      }

      return true;
    },

    deleteProperty(target, prop) {
      const result = Reflect.deleteProperty(target, prop);
      listeners.forEach(listener => listener());
      return result;
    },
  };

  const proxied = new Proxy(obj, handler);
  proxyCache.set(obj, proxied);
  return proxied;
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Usage
const state = proxy({
  count: 0,
  user: { name: 'John' },
});

subscribe(() => console.log('State changed!', state.count));

state.count++;          // Logs: "State changed! 1"
state.user.name = 'Jane'; // Logs: "State changed! 1" (nested proxy)
\`\`\`

**React Integration with Snapshot:**

\`\`\`typescript
// Valtio-style useSnapshot hook

function useSnapshot<T extends object>(proxyState: T): T {
  const [, forceUpdate] = useReducer(c => c + 1, 0);

  useEffect(() => {
    // Subscribe to state changes
    return subscribe(() => forceUpdate());
  }, [proxyState]);

  // Return a read-only snapshot
  return proxyState;
}

// Usage
const state = proxy({ count: 0 });

function Counter() {
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={() => state.count++}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

**Tracking Property Access (MobX-style):**

\`\`\`typescript
// Track which properties were accessed during render

let currentTracker: Set<string> | null = null;

function createObservable<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      // Track access if we're in a tracking context
      if (currentTracker && typeof prop === 'string') {
        currentTracker.add(prop);
      }
      return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
      const result = Reflect.set(target, prop, value, receiver);
      // Notify observers of this specific property
      notifyPropertyObservers(prop as string);
      return result;
    },
  });
}

function track<T>(fn: () => T): { result: T; dependencies: Set<string> } {
  const tracker = new Set<string>();
  currentTracker = tracker;

  try {
    const result = fn();
    return { result, dependencies: tracker };
  } finally {
    currentTracker = null;
  }
}

// React usage - only re-render when accessed properties change
function useObservable<T extends object, R>(
  observable: T,
  selector: (state: T) => R
): R {
  const [, forceUpdate] = useReducer(c => c + 1, 0);
  const { result, dependencies } = track(() => selector(observable));

  useEffect(() => {
    // Only subscribe to properties that were actually accessed
    const unsubscribes = [...dependencies].map(prop =>
      subscribeToProperty(prop, forceUpdate)
    );

    return () => unsubscribes.forEach(unsub => unsub());
  }, [observable, ...dependencies]);

  return result;
}
\`\`\`

**Validation Proxy:**

\`\`\`typescript
// Automatically validate state updates

interface ValidationRules<T> {
  [K in keyof T]?: (value: T[K]) => boolean | string;
}

function createValidatedState<T extends object>(
  initial: T,
  rules: ValidationRules<T>
): T {
  return new Proxy(initial, {
    set(target, prop, value, receiver) {
      const rule = rules[prop as keyof T];

      if (rule) {
        const result = rule(value);

        if (result === false) {
          throw new Error(\`Invalid value for \${String(prop)}\`);
        }

        if (typeof result === 'string') {
          throw new Error(result);
        }
      }

      return Reflect.set(target, prop, value, receiver);
    },
  });
}

// Usage
const userState = createValidatedState(
  { name: '', age: 0, email: '' },
  {
    name: (v) => v.length > 0 || 'Name is required',
    age: (v) => v >= 0 && v <= 150 || 'Invalid age',
    email: (v) => v.includes('@') || 'Invalid email',
  }
);

userState.name = '';     // Throws: "Name is required"
userState.age = -5;      // Throws: "Invalid age"
userState.email = 'john'; // Throws: "Invalid email"
\`\`\`

**Immutable Updates with Proxy (Immer-style):**

\`\`\`typescript
function produce<T extends object>(base: T, recipe: (draft: T) => void): T {
  const copy = structuredClone(base);
  const changes: Array<{ prop: string; value: unknown }> = [];

  const draft = new Proxy(copy, {
    set(target, prop, value, receiver) {
      changes.push({ prop: String(prop), value });
      return Reflect.set(target, prop, value, receiver);
    },
  });

  recipe(draft);

  // Return original if no changes
  if (changes.length === 0) {
    return base;
  }

  return copy;
}

// Usage in React
function reducer(state: State, action: Action): State {
  return produce(state, draft => {
    switch (action.type) {
      case 'INCREMENT':
        draft.count++;
        break;
      case 'SET_USER':
        draft.user = action.payload;
        break;
    }
  });
}
\`\`\`

**Proxy Traps Reference:**

| Trap | Intercepts |
|------|-----------|
| get | Property access (obj.prop) |
| set | Property assignment (obj.prop = val) |
| has | \`in\` operator |
| deleteProperty | \`delete\` operator |
| apply | Function calls |
| construct | \`new\` operator |
| getPrototypeOf | Object.getPrototypeOf |
| setPrototypeOf | Object.setPrototypeOf |
| ownKeys | Object.keys, for...in |

**Senior insight:** Proxy enables "transparent" reactivity—state mutations look like normal JavaScript but trigger updates automatically. This is why Valtio and MobX feel more intuitive than Redux. The trade-off is debuggability: proxied objects can behave unexpectedly in devtools. Use Proxy for reactive state management but understand the limitations: no support for primitive values (use a wrapper object), performance overhead for very high-frequency updates, and complexity in debugging.

---

### Q: Explain AbortController patterns for cancellable operations in React

**Answer:**

AbortController provides a standard way to cancel async operations like fetch requests, timers, and any Promise-based API. It's essential for preventing race conditions and memory leaks in React.

**Basic AbortController:**

\`\`\`javascript
const controller = new AbortController();
const signal = controller.signal;

// Pass signal to fetch
fetch('/api/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    } else {
      console.error('Request failed:', error);
    }
  });

// Cancel the request
controller.abort();
\`\`\`

**React useEffect with AbortController:**

\`\`\`typescript
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        // Only set error if not aborted
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        // Only update loading if not aborted
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    // Cleanup: abort on unmount or userId change
    return () => controller.abort();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <UserCard user={user} />;
}
\`\`\`

**Custom Hook for Abortable Fetch:**

\`\`\`typescript
interface UseFetchOptions extends RequestInit {
  immediate?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  abort: () => void;
}

function useFetch<T>(url: string, options: UseFetchOptions = {}): UseFetchReturn<T> {
  const { immediate = true, ...fetchOptions } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    controllerRef.current?.abort();
  }, []);

  const fetchData = useCallback(async () => {
    // Abort any in-flight request
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      if (!controllerRef.current?.signal.aborted) {
        setLoading(false);
      }
    }
  }, [url, JSON.stringify(fetchOptions)]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }

    return () => abort();
  }, [fetchData, immediate, abort]);

  return { data, loading, error, refetch: fetchData, abort };
}

// Usage
function SearchResults({ query }: { query: string }) {
  const { data, loading, error, abort } = useFetch<SearchResult[]>(
    \`/api/search?q=\${encodeURIComponent(query)}\`
  );

  // Component handles abort automatically on unmount/query change
  return (
    <div>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} />}
      {data?.map(result => <ResultItem key={result.id} result={result} />)}
    </div>
  );
}
\`\`\`

**Timeout with AbortController:**

\`\`\`typescript
async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 5000
): Promise<T> {
  const controller = new AbortController();

  // Set timeout to abort
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(\`Request timeout after \${timeoutMs}ms\`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Usage
try {
  const data = await fetchWithTimeout('/api/slow-endpoint', {}, 3000);
} catch (error) {
  console.log(error.message); // "Request timeout after 3000ms"
}
\`\`\`

**Cancellable Promise Pattern:**

\`\`\`typescript
interface CancellablePromise<T> extends Promise<T> {
  cancel: () => void;
}

function makeCancellable<T>(promise: Promise<T>): CancellablePromise<T> {
  let isCancelled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (value) => {
        if (!isCancelled) {
          resolve(value);
        }
      },
      (error) => {
        if (!isCancelled) {
          reject(error);
        }
      }
    );
  }) as CancellablePromise<T>;

  wrappedPromise.cancel = () => {
    isCancelled = true;
  };

  return wrappedPromise;
}

// Usage in React
function useAsync<T>(asyncFn: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<{
    loading: boolean;
    data: T | null;
    error: Error | null;
  }>({ loading: true, data: null, error: null });

  useEffect(() => {
    const cancellable = makeCancellable(asyncFn());

    cancellable
      .then(data => setState({ loading: false, data, error: null }))
      .catch(error => setState({ loading: false, data: null, error }));

    return () => cancellable.cancel();
  }, deps);

  return state;
}
\`\`\`

**AbortController with Multiple Requests:**

\`\`\`typescript
function useParallelFetch<T extends Record<string, string>>(
  urls: T
): { data: { [K in keyof T]: unknown | null }; loading: boolean } {
  const [data, setData] = useState<{ [K in keyof T]: unknown | null }>(
    Object.fromEntries(Object.keys(urls).map(k => [k, null])) as any
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAll() {
      const entries = Object.entries(urls);

      const results = await Promise.allSettled(
        entries.map(([, url]) =>
          fetch(url, { signal: controller.signal }).then(r => r.json())
        )
      );

      if (!controller.signal.aborted) {
        const newData = Object.fromEntries(
          entries.map(([key], index) => [
            key,
            results[index].status === 'fulfilled'
              ? (results[index] as PromiseFulfilledResult<unknown>).value
              : null,
          ])
        );

        setData(newData as any);
        setLoading(false);
      }
    }

    fetchAll();

    return () => controller.abort();
  }, [JSON.stringify(urls)]);

  return { data, loading };
}

// Usage
function Dashboard() {
  const { data, loading } = useParallelFetch({
    user: '/api/user',
    posts: '/api/posts',
    notifications: '/api/notifications',
  });

  if (loading) return <DashboardSkeleton />;

  return (
    <div>
      <UserCard user={data.user} />
      <PostList posts={data.posts} />
      <NotificationBell notifications={data.notifications} />
    </div>
  );
}
\`\`\`

**AbortSignal.timeout (Modern):**

\`\`\`typescript
// Modern browsers support AbortSignal.timeout
async function fetchWithBuiltInTimeout() {
  const response = await fetch('/api/data', {
    signal: AbortSignal.timeout(5000), // 5 second timeout
  });

  return response.json();
}

// Combine with manual abort
function useFetchWithTimeoutAndCancel(url: string, timeoutMs: number) {
  const [loading, setLoading] = useState(true);
  const manualAbortRef = useRef<AbortController>();

  useEffect(() => {
    manualAbortRef.current = new AbortController();

    // Combine timeout signal with manual abort signal
    const signal = AbortSignal.any([
      AbortSignal.timeout(timeoutMs),
      manualAbortRef.current.signal,
    ]);

    fetch(url, { signal })
      .then(r => r.json())
      .then(setData)
      .catch(handleError)
      .finally(() => setLoading(false));

    return () => manualAbortRef.current?.abort();
  }, [url, timeoutMs]);

  const cancel = useCallback(() => {
    manualAbortRef.current?.abort();
  }, []);

  return { loading, cancel };
}
\`\`\`

**Senior insight:** AbortController is essential for production React apps—without it, rapid user actions cause race conditions where stale data overwrites fresh data. Key patterns: abort in useEffect cleanup, check \`signal.aborted\` before state updates, and handle AbortError separately from real errors. TanStack Query handles this automatically, which is one reason it's recommended over manual fetch in useEffect.

---

### Q: Compare structuredClone vs JSON.parse/stringify for deep cloning

**Answer:**

Both methods create deep copies of objects, but they have different capabilities, performance characteristics, and limitations.

**Quick Comparison:**

| Feature | JSON.parse/stringify | structuredClone |
|---------|---------------------|-----------------|
| Date objects | ❌ Becomes string | ✅ Preserved |
| undefined | ❌ Lost | ✅ Preserved |
| Functions | ❌ Lost | ❌ Error |
| Symbols | ❌ Lost | ❌ Error |
| RegExp | ❌ Becomes {} | ✅ Preserved |
| Map/Set | ❌ Becomes {} | ✅ Preserved |
| Circular refs | ❌ Error | ✅ Preserved |
| DOM nodes | ❌ Error | ❌ Error |
| Performance | Slower | Faster |
| Browser support | All | Modern (2022+) |

**JSON.parse/stringify Limitations:**

\`\`\`javascript
const original = {
  // ✅ Works fine
  string: 'hello',
  number: 42,
  boolean: true,
  null: null,
  array: [1, 2, 3],
  nested: { a: 1, b: 2 },

  // ❌ Lost or converted
  date: new Date(),           // → "2024-01-15T..." (string)
  undefined: undefined,       // → property is removed
  regex: /pattern/gi,         // → {}
  map: new Map([['a', 1]]),   // → {}
  set: new Set([1, 2, 3]),    // → {}
  infinity: Infinity,         // → null
  nan: NaN,                   // → null
  bigint: 123n,               // → Error!
  symbol: Symbol('test'),     // → property is removed
  function: () => {},         // → property is removed
};

const copied = JSON.parse(JSON.stringify(original));

console.log(copied.date instanceof Date);  // false (it's a string)
console.log('undefined' in copied);        // false (removed)
console.log(copied.regex);                 // {}
console.log(copied.map);                   // {}
\`\`\`

**structuredClone Capabilities:**

\`\`\`javascript
const original = {
  // ✅ All of these work
  string: 'hello',
  number: 42,
  boolean: true,
  null: null,
  undefined: undefined,       // ✅ Preserved!
  array: [1, 2, 3],
  nested: { a: 1, b: 2 },
  date: new Date(),           // ✅ Real Date object
  regex: /pattern/gi,         // ✅ Real RegExp
  map: new Map([['a', 1]]),   // ✅ Real Map
  set: new Set([1, 2, 3]),    // ✅ Real Set
  arrayBuffer: new ArrayBuffer(8),
  typedArray: new Uint8Array([1, 2, 3]),
  blob: new Blob(['hello']),
  error: new Error('test'),   // ✅ Error objects

  // ❌ These still fail
  // function: () => {},      // DataCloneError
  // symbol: Symbol('test'),  // DataCloneError
  // dom: document.body,      // DataCloneError
};

const copied = structuredClone(original);

console.log(copied.date instanceof Date);   // true ✅
console.log(copied.undefined);              // undefined ✅
console.log(copied.map instanceof Map);     // true ✅
console.log(copied.map.get('a'));           // 1 ✅
\`\`\`

**Circular Reference Handling:**

\`\`\`javascript
// JSON.parse/stringify fails with circular refs
const circular = { name: 'circular' };
circular.self = circular;

// ❌ Error: Converting circular structure to JSON
JSON.parse(JSON.stringify(circular));

// ✅ structuredClone handles it
const cloned = structuredClone(circular);
console.log(cloned.self === cloned); // true - circular ref preserved
\`\`\`

**Performance Comparison:**

\`\`\`javascript
// For simple objects, JSON is surprisingly competitive
// For complex objects (Maps, Sets, Dates), structuredClone wins

const simpleObject = { a: 1, b: 2, c: { d: 3, e: 4 } };
const complexObject = {
  date: new Date(),
  map: new Map([['a', 1], ['b', 2]]),
  set: new Set([1, 2, 3]),
  nested: { deep: { deeper: { value: 42 } } },
};

// Benchmark (approximate)
// Simple object:
// - JSON: ~0.05ms per 1000 operations
// - structuredClone: ~0.03ms per 1000 operations

// Complex object:
// - JSON: N/A (doesn't work correctly)
// - structuredClone: ~0.08ms per 1000 operations
\`\`\`

**React State Cloning Patterns:**

\`\`\`typescript
// When you need a true deep copy for state

// Pattern 1: Form state snapshot for reset
function useFormWithReset<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const initialRef = useRef<T>();

  // Store deep clone of initial values
  useEffect(() => {
    initialRef.current = structuredClone(initialValues);
  }, []); // Only on mount

  const reset = useCallback(() => {
    if (initialRef.current) {
      setValues(structuredClone(initialRef.current));
    }
  }, []);

  return { values, setValues, reset };
}

// Pattern 2: Undo/Redo history
function useUndoRedo<T extends object>(initial: T) {
  const [history, setHistory] = useState<T[]>([structuredClone(initial)]);
  const [index, setIndex] = useState(0);

  const current = history[index];

  const update = useCallback((newState: T) => {
    const cloned = structuredClone(newState);
    setHistory(prev => [...prev.slice(0, index + 1), cloned]);
    setIndex(i => i + 1);
  }, [index]);

  const undo = useCallback(() => {
    setIndex(i => Math.max(0, i - 1));
  }, []);

  const redo = useCallback(() => {
    setIndex(i => Math.min(history.length - 1, i + 1));
  }, [history.length]);

  return { current, update, undo, redo, canUndo: index > 0, canRedo: index < history.length - 1 };
}

// Pattern 3: Isolated component state
function IsolatedEditor({ initialData }: { initialData: EditorState }) {
  // Each instance gets its own deep copy
  const [state, setState] = useState(() => structuredClone(initialData));

  // Mutations to state won't affect other instances or original
  return <Editor state={state} onChange={setState} />;
}
\`\`\`

**Transfer vs Clone:**

\`\`\`javascript
// structuredClone can also transfer ownership (move, not copy)
// Useful for large ArrayBuffers

const buffer = new ArrayBuffer(1024 * 1024); // 1MB

// Clone (copy data)
const clonedBuffer = structuredClone(buffer);
console.log(buffer.byteLength);       // 1048576 (original intact)
console.log(clonedBuffer.byteLength); // 1048576 (copy)

// Transfer (move data - original becomes unusable)
const transferred = structuredClone(buffer, { transfer: [buffer] });
console.log(buffer.byteLength);       // 0 (detached!)
console.log(transferred.byteLength);  // 1048576

// Useful for Web Workers
worker.postMessage({ data: largeBuffer }, [largeBuffer]); // Transfer, not copy
\`\`\`

**Polyfill for Older Browsers:**

\`\`\`typescript
// If you need to support older browsers
function deepClone<T>(obj: T): T {
  // Try structuredClone first
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(obj);
    } catch {
      // Fall through to JSON method
    }
  }

  // Fallback to JSON (with limitations)
  return JSON.parse(JSON.stringify(obj));
}

// Or use a library like lodash
import { cloneDeep } from 'lodash';
const cloned = cloneDeep(complexObject);
\`\`\`

**When to Use Each:**

| Scenario | Recommendation |
|----------|----------------|
| Simple objects (no special types) | Either works, JSON is more compatible |
| Objects with Dates, Maps, Sets | structuredClone |
| Circular references | structuredClone |
| Serialization for storage/network | JSON (that's what it's for) |
| React state cloning | structuredClone |
| Supporting very old browsers | JSON or lodash.cloneDeep |
| Transferring to Web Workers | structuredClone with transfer |

**Senior insight:** Default to structuredClone for deep cloning in modern apps—it handles more types correctly and is often faster. Use JSON.parse/stringify only when you need JSON serialization (localStorage, API payloads) or must support very old browsers. For React state, prefer shallow updates with spread operator when possible; reserve deep cloning for complex cases like undo/redo or form snapshots. Remember: neither method clones functions or DOM nodes—if you need those, you're probably doing something wrong architecturally.`,ty=`## 11. Behavioral & Leadership

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
`,ry=`## 13. React 19 & Latest Features

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
`,sy=`## 14. Accessibility (A11y)

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

---

### Q: Explain aria-live regions and how to implement them properly in React

**Answer:**

ARIA live regions enable screen readers to announce dynamic content changes without requiring the user to navigate to that content. This is essential for SPAs where content updates frequently.

**Live Region Politeness Levels:**

| Value | Behavior | Use Case |
|-------|----------|----------|
| \`off\` | No announcements | Default, manually managed |
| \`polite\` | Announces when user is idle | Status updates, search results |
| \`assertive\` | Interrupts immediately | Errors, urgent alerts |

**Basic Implementation:**

\`\`\`jsx
// ❌ Common mistake: aria-live added when content appears
function Notification({ message }) {
  if (!message) return null;

  // This won't be announced! Region wasn't in DOM when populated
  return (
    <div aria-live="polite">
      {message}
    </div>
  );
}

// ✅ Correct: aria-live region always in DOM
function Notification({ message }) {
  return (
    <div aria-live="polite" aria-atomic="true">
      {message} {/* Empty when no message, announced when populated */}
    </div>
  );
}
\`\`\`

**Role Shortcuts:**

\`\`\`jsx
// These roles have implicit aria-live behavior

// role="status" = aria-live="polite"
<div role="status">Loading complete</div>

// role="alert" = aria-live="assertive"
<div role="alert">Form submission failed!</div>

// role="log" = aria-live="polite" with aria-relevant="additions"
<div role="log">
  {chatMessages.map(msg => <p key={msg.id}>{msg.text}</p>)}
</div>

// role="timer" = aria-live="off" (needs manual handling)
<div role="timer" aria-live="off" aria-atomic="true">
  {formatTime(timeRemaining)}
</div>
\`\`\`

**aria-atomic and aria-relevant:**

\`\`\`jsx
// aria-atomic="true" - announce entire region (default for role="alert")
<div aria-live="polite" aria-atomic="true">
  {/* Screen reader reads whole region when anything changes */}
  Your cart has {itemCount} items totaling \${total}
</div>

// aria-atomic="false" - announce only changed nodes
<ul aria-live="polite" aria-atomic="false">
  {/* Only new list items are announced */}
  {notifications.map(n => <li key={n.id}>{n.message}</li>)}
</ul>

// aria-relevant controls what changes are announced
<div
  aria-live="polite"
  aria-relevant="additions removals" // "additions text removals all"
>
  {/* Announces when items added or removed */}
</div>
\`\`\`

**Robust Announcement Hook:**

\`\`\`tsx
import { useCallback, useRef, useState } from 'react';

interface AnnouncerOptions {
  politeness?: 'polite' | 'assertive';
  timeout?: number;
}

function useAnnouncer() {
  const [politeMessage, setPoliteMessage] = useState('');
  const [assertiveMessage, setAssertiveMessage] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  const announce = useCallback((
    message: string,
    { politeness = 'polite', timeout = 7000 }: AnnouncerOptions = {}
  ) => {
    const setter = politeness === 'assertive' ? setAssertiveMessage : setPoliteMessage;

    // Clear then set (ensures re-announcement of same message)
    setter('');

    // Use requestAnimationFrame to ensure DOM updates
    requestAnimationFrame(() => {
      setter(message);
    });

    // Clear after timeout
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setter('');
    }, timeout);
  }, []);

  const Announcer = useCallback(() => (
    <>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {politeMessage}
      </div>
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {assertiveMessage}
      </div>
    </>
  ), [politeMessage, assertiveMessage]);

  return { announce, Announcer };
}

// Usage
function App() {
  const { announce, Announcer } = useAnnouncer();

  async function handleSubmit() {
    try {
      await submitForm();
      announce('Form submitted successfully');
    } catch (error) {
      announce('Submission failed. Please try again.', { politeness: 'assertive' });
    }
  }

  return (
    <>
      <Announcer />
      <form onSubmit={handleSubmit}>
        {/* ... */}
      </form>
    </>
  );
}
\`\`\`

**Common Patterns:**

\`\`\`jsx
// 1. Search results count
function SearchResults({ results, query }) {
  return (
    <>
      <div role="status" aria-live="polite">
        {results.length} results found for "{query}"
      </div>
      <ul>
        {results.map(r => <ResultItem key={r.id} result={r} />)}
      </ul>
    </>
  );
}

// 2. Form validation (on blur or submit)
function EmailField() {
  const [error, setError] = useState('');

  return (
    <div>
      <input
        type="email"
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
        onBlur={e => validateEmail(e.target.value, setError)}
      />
      {/* role="alert" immediately announces errors */}
      {error && (
        <span id="email-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

// 3. Async operation status
function SaveButton({ onSave }) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  async function handleClick() {
    setStatus('saving');
    try {
      await onSave();
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <button onClick={handleClick} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving...' : 'Save'}
      </button>

      {/* Separate live region for status - not inside button */}
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'saved' && 'Changes saved successfully'}
        {status === 'error' && 'Failed to save changes'}
      </span>
    </>
  );
}

// 4. Chat/log with new messages
function ChatLog({ messages }) {
  const prevCountRef = useRef(messages.length);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (messages.length > prevCountRef.current) {
      const newMsg = messages[messages.length - 1];
      setAnnouncement(\`\${newMsg.author} says: \${newMsg.text}\`);
    }
    prevCountRef.current = messages.length;
  }, [messages]);

  return (
    <>
      <div role="log" aria-live="polite" className="sr-only">
        {announcement}
      </div>
      <div className="chat-messages">
        {messages.map(m => <Message key={m.id} {...m} />)}
      </div>
    </>
  );
}
\`\`\`

**Timing Considerations:**

\`\`\`jsx
// Problem: Rapid updates flood screen reader
function Counter({ count }) {
  return (
    <div aria-live="polite">
      Count: {count} {/* Announced on every increment! */}
    </div>
  );
}

// Solution: Debounce announcements
function Counter({ count }) {
  const [announcedCount, setAnnouncedCount] = useState(count);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnnouncedCount(count);
    }, 1000); // Wait for rapid changes to settle

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <div role="status" aria-live="polite" className="sr-only">
        Count is now {announcedCount}
      </div>
    </>
  );
}
\`\`\`

**Visually Hidden Utility:**

\`\`\`css
/* sr-only class - visible to screen readers only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
\`\`\`

**Senior insight:** The most common aria-live mistake is adding the live region dynamically with content. The region must exist in the DOM *before* content populates it. Also, don't over-announce—screen reader users will mute your site if every hover state triggers an announcement. Reserve assertive for actual errors; use polite for status updates. Test with a screen reader because timing and announcement behavior varies between NVDA, VoiceOver, and JAWS.

---

### Q: How do you implement focus trapping for modals and dialogs?

**Answer:**

Focus trapping keeps keyboard focus within a modal or dialog, preventing users from tabbing to elements behind it. This is essential for accessibility—without it, keyboard users can tab into obscured content.

**Manual Focus Trap Implementation:**

\`\`\`tsx
import { useEffect, useRef, useCallback } from 'react';

function useFocusTrap<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Save current focus to restore later
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the container or first focusable element
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    // Cleanup: restore focus when unmounting
    return () => {
      previousFocusRef.current?.focus();
    };
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Shift+Tab on first element -> go to last
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
    // Tab on last element -> go to first
    else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  return { containerRef, handleKeyDown };
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(selector))
    .filter(el => el.offsetParent !== null); // Filter out hidden elements
}

// Usage
function Modal({ isOpen, onClose, children }) {
  const { containerRef, handleKeyDown } = useFocusTrap<HTMLDivElement>();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
        onKeyDown={(e) => {
          handleKeyDown(e);
          if (e.key === 'Escape') onClose();
        }}
      >
        <h2 id="modal-title">Modal Title</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
\`\`\`

**Using the \`inert\` Attribute (Modern Approach):**

\`\`\`tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Make everything outside the modal inert
    const mainContent = document.getElementById('root');
    if (mainContent && mainContent !== modalRef.current?.parentElement) {
      mainContent.setAttribute('inert', '');
    }

    // Focus the modal
    modalRef.current?.focus();

    return () => {
      mainContent?.removeAttribute('inert');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Render modal in portal to avoid DOM hierarchy issues
  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      {children}
    </div>,
    document.body
  );
}
\`\`\`

**Focus Trap Library (Recommended):**

\`\`\`tsx
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap
      focusTrapOptions={{
        // Options for customization
        initialFocus: '#first-input', // Selector or false
        fallbackFocus: '[role="dialog"]',
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        returnFocusOnDeactivate: true,
        allowOutsideClick: (e) => e.target.closest('.toast'), // Allow clicks on toasts
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <h2 id="dialog-title">Confirm Action</h2>
        <input id="first-input" type="text" />
        {children}
        <button onClick={onClose}>Cancel</button>
        <button onClick={onClose}>Confirm</button>
      </div>
    </FocusTrap>
  );
}
\`\`\`

**Handling Nested Focus Traps:**

\`\`\`tsx
// Scenario: Modal opens another modal (e.g., confirmation dialog)

function ParentModal({ isOpen, onClose }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <FocusTrap
      active={isOpen && !confirmOpen} // Deactivate when child modal opens
      focusTrapOptions={{ returnFocusOnDeactivate: false }}
    >
      <div role="dialog" aria-modal="true">
        <h2>Parent Modal</h2>
        <button onClick={() => setConfirmOpen(true)}>Delete</button>

        {/* Nested modal has its own focus trap */}
        <ConfirmDialog
          isOpen={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => { /* delete logic */ }}
        />
      </div>
    </FocusTrap>
  );
}
\`\`\`

**Focus Restoration Edge Cases:**

\`\`\`tsx
function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  const open = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);

    // Restore focus after state update and re-render
    requestAnimationFrame(() => {
      // Check if trigger still exists (might have been removed)
      if (triggerRef.current && document.contains(triggerRef.current)) {
        triggerRef.current.focus();
      } else {
        // Fallback: focus something sensible
        document.querySelector<HTMLElement>('[data-focus-fallback]')?.focus();
      }
    });
  }, []);

  return { isOpen, open, close };
}
\`\`\`

**Accessibility Checklist for Modals:**

| Requirement | Implementation |
|-------------|----------------|
| Focus trapped inside | Focus trap hook or library |
| Close on Escape | onKeyDown handler |
| Focus first element on open | autoFocus or initialFocus option |
| Restore focus on close | Save/restore activeElement |
| Background inert | \`inert\` attribute or aria-hidden |
| Announced as dialog | role="dialog" aria-modal="true" |
| Has accessible name | aria-labelledby pointing to heading |
| Scroll lock on body | overflow: hidden on body |

**Senior insight:** The \`inert\` attribute is now supported in all modern browsers and is the cleanest solution—it makes content unfocusable AND invisible to assistive tech in one attribute. For production apps, use focus-trap-react or Radix Dialog—they handle edge cases like initial focus, nested traps, and focus restoration that are easy to get wrong. Always test with keyboard-only navigation: can you tab through all interactive elements and never escape the modal?

---

### Q: What are skip links and how do you implement them?

**Answer:**

Skip links allow keyboard users to bypass repetitive navigation and jump directly to main content. They're a WCAG 2.1 Level A requirement and essential for users who can't use a mouse.

**Why Skip Links Matter:**

Without skip links, keyboard users must Tab through every navigation item on every page to reach main content. On a site with 20 nav links, that's 20+ key presses before reaching what they came for.

**Basic Implementation:**

\`\`\`tsx
// Skip link should be the FIRST focusable element on the page
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav>
          {/* 20+ navigation links */}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
}
\`\`\`

**CSS for Skip Links:**

\`\`\`css
/* Visually hidden until focused */
.skip-link {
  position: absolute;
  top: -40px; /* Hidden above viewport */
  left: 0;
  padding: 8px 16px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  z-index: 9999;

  /* Transition for smooth appearance */
  transition: top 0.2s ease;
}

/* Visible when focused */
.skip-link:focus {
  top: 0;
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Alternative: transform approach */
.skip-link {
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}
\`\`\`

**Multiple Skip Links:**

\`\`\`tsx
function Layout() {
  return (
    <>
      <nav aria-label="Skip links" className="skip-links">
        <a href="#main-content">Skip to main content</a>
        <a href="#primary-nav">Skip to navigation</a>
        <a href="#search">Skip to search</a>
        <a href="#footer">Skip to footer</a>
      </nav>

      <header>
        <SearchBar id="search" />
        <nav id="primary-nav" aria-label="Primary">
          {/* Navigation */}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        {/* Content */}
      </main>

      <footer id="footer">
        {/* Footer */}
      </footer>
    </>
  );
}
\`\`\`

**SPA Navigation Handling:**

\`\`\`tsx
// In SPAs, skip link needs to work after client-side navigation
function useSkipLinkFocus() {
  const location = useLocation();

  useEffect(() => {
    // If URL has hash, focus that element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element instanceof HTMLElement) {
        element.focus();
        element.scrollIntoView();
      }
    }
  }, [location]);
}

// Skip link that works with React Router
function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
      // Update URL without navigation
      window.history.pushState(null, '', '#main-content');
    }
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Skip to main content
    </a>
  );
}
\`\`\`

**Target Element Setup:**

\`\`\`tsx
// The target needs tabIndex={-1} to receive programmatic focus
function MainContent({ children }) {
  const mainRef = useRef<HTMLElement>(null);

  // Focus main content after route changes (SPA)
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#main-content') {
      mainRef.current?.focus();
    }
  }, [location]);

  return (
    <main
      ref={mainRef}
      id="main-content"
      tabIndex={-1}
      // Remove focus outline since it's not interactive
      style={{ outline: 'none' }}
    >
      {children}
    </main>
  );
}
\`\`\`

**Skip Links for Complex Layouts:**

\`\`\`tsx
// Dashboard with sidebar navigation
function DashboardLayout({ children }) {
  return (
    <>
      <div className="skip-links">
        <a href="#main-content">Skip to main content</a>
        <a href="#sidebar-nav">Skip to sidebar navigation</a>
        <a href="#notifications">Skip to notifications</a>
      </div>

      <header>
        <TopNav />
        <div id="notifications" tabIndex={-1}>
          <NotificationBell />
        </div>
      </header>

      <div className="layout">
        <aside id="sidebar-nav" tabIndex={-1}>
          <SidebarNav />
        </aside>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </>
  );
}
\`\`\`

**Skip Link Visibility Pattern:**

\`\`\`tsx
// Some designs show skip link in a banner-style
function SkipLinkBanner() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={\`skip-banner \${isVisible ? 'visible' : ''}\`}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <a href="#main-content">
        Skip to main content
        <span className="keyboard-hint">Press Enter</span>
      </a>
    </div>
  );
}
\`\`\`

\`\`\`css
.skip-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1a1a2e;
  color: white;
  padding: 12px;
  text-align: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 10000;
}

.skip-banner.visible,
.skip-banner:focus-within {
  transform: translateY(0);
}

.skip-banner a {
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.keyboard-hint {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.875em;
}
\`\`\`

**Testing Skip Links:**

\`\`\`tsx
// Jest + Testing Library
test('skip link navigates to main content', async () => {
  const user = userEvent.setup();
  render(<App />);

  // First Tab should focus skip link
  await user.tab();
  expect(screen.getByText('Skip to main content')).toHaveFocus();

  // Enter activates it
  await user.keyboard('{Enter}');
  expect(document.getElementById('main-content')).toHaveFocus();
});

// Playwright E2E
test('skip link workflow', async ({ page }) => {
  await page.goto('/');

  // Tab to skip link
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();

  // Should be visible when focused
  await expect(page.locator('.skip-link')).toBeVisible();

  // Activate and verify focus moves
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});
\`\`\`

**Senior insight:** Skip links are often overlooked because they're invisible in normal use. Test your site by pressing Tab immediately after page load—the skip link should be the first thing that appears. For SPAs, the skip link must work after client-side navigation, not just on initial load. Consider adding skip links to all major sections, not just main content, for complex dashboards.

---

### Q: Explain roving tabindex and other keyboard navigation patterns

**Answer:**

Roving tabindex is a keyboard navigation pattern where only one element in a group is tabbable at a time, and arrow keys move focus within the group. This reduces the number of Tab stops while maintaining full keyboard accessibility.

**The Problem Without Roving Tabindex:**

\`\`\`jsx
// ❌ Bad: User must Tab through every toolbar button
function Toolbar() {
  return (
    <div role="toolbar">
      <button>Bold</button>      {/* Tab stop 1 */}
      <button>Italic</button>    {/* Tab stop 2 */}
      <button>Underline</button> {/* Tab stop 3 */}
      <button>Link</button>      {/* Tab stop 4 */}
      {/* 10 more buttons = 14 Tab presses to get through */}
    </div>
  );
}
\`\`\`

**Roving Tabindex Pattern:**

\`\`\`tsx
function Toolbar() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const buttons = ['Bold', 'Italic', 'Underline', 'Link', 'Image'];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (index + 1) % buttons.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (index - 1 + buttons.length) % buttons.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = buttons.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }

  return (
    <div role="toolbar" aria-label="Text formatting">
      {buttons.map((label, index) => (
        <button
          key={label}
          ref={el => refs.current[index] = el}
          tabIndex={index === focusedIndex ? 0 : -1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => setFocusedIndex(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
\`\`\`

**Reusable Roving Tabindex Hook:**

\`\`\`tsx
interface UseRovingTabindexOptions {
  orientation?: 'horizontal' | 'vertical' | 'both';
  loop?: boolean;
}

function useRovingTabindex<T extends HTMLElement>(
  itemCount: number,
  options: UseRovingTabindexOptions = {}
) {
  const { orientation = 'horizontal', loop = true } = options;
  const [focusedIndex, setFocusedIndex] = useState(0);
  const refs = useRef<(T | null)[]>([]);

  const setRef = useCallback((index: number) => (el: T | null) => {
    refs.current[index] = el;
  }, []);

  const getTabIndex = useCallback((index: number) =>
    index === focusedIndex ? 0 : -1
  , [focusedIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const horizontalKeys = ['ArrowLeft', 'ArrowRight'];
    const verticalKeys = ['ArrowUp', 'ArrowDown'];

    let delta = 0;

    if (orientation !== 'vertical' && horizontalKeys.includes(e.key)) {
      delta = e.key === 'ArrowRight' ? 1 : -1;
    } else if (orientation !== 'horizontal' && verticalKeys.includes(e.key)) {
      delta = e.key === 'ArrowDown' ? 1 : -1;
    } else if (e.key === 'Home') {
      delta = -index;
    } else if (e.key === 'End') {
      delta = itemCount - 1 - index;
    } else {
      return; // Don't prevent default for other keys
    }

    e.preventDefault();

    let newIndex = index + delta;
    if (loop) {
      newIndex = (newIndex + itemCount) % itemCount;
    } else {
      newIndex = Math.max(0, Math.min(itemCount - 1, newIndex));
    }

    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }, [itemCount, orientation, loop]);

  return { setRef, getTabIndex, handleKeyDown, focusedIndex, setFocusedIndex };
}
\`\`\`

**Tab Panel Navigation (WAI-ARIA Pattern):**

\`\`\`tsx
function Tabs({ tabs }: { tabs: { id: string; label: string; content: React.ReactNode }[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Content tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={el => tabRefs.current[index] = el}
            role="tab"
            id={\`tab-\${tab.id}\`}
            aria-selected={index === activeTab}
            aria-controls={\`panel-\${tab.id}\`}
            tabIndex={index === activeTab ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={\`panel-\${tab.id}\`}
          aria-labelledby={\`tab-\${tab.id}\`}
          hidden={index !== activeTab}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
\`\`\`

**Menu Navigation Pattern:**

\`\`\`tsx
function DropdownMenu({ items }: { items: { label: string; onClick: () => void }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(i => (i + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(i => (i - 1 + items.length) % items.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        items[focusedIndex].onClick();
        setIsOpen(false);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }

  return (
    <div className="dropdown">
      <button
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Options
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, index) => (
            <li
              key={item.label}
              ref={el => itemRefs.current[index] = el}
              role="menuitem"
              tabIndex={index === focusedIndex ? 0 : -1}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

**Grid Navigation (2D):**

\`\`\`tsx
function GridNavigation({ rows, cols, items }: {
  rows: number;
  cols: number;
  items: string[];
}) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent) {
    const row = Math.floor(focusedIndex / cols);
    const col = focusedIndex % cols;
    let newIndex = focusedIndex;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = row * cols + ((col + 1) % cols);
        break;
      case 'ArrowLeft':
        newIndex = row * cols + ((col - 1 + cols) % cols);
        break;
      case 'ArrowDown':
        newIndex = ((row + 1) % rows) * cols + col;
        break;
      case 'ArrowUp':
        newIndex = ((row - 1 + rows) % rows) * cols + col;
        break;
      case 'Home':
        newIndex = e.ctrlKey ? 0 : row * cols;
        break;
      case 'End':
        newIndex = e.ctrlKey ? items.length - 1 : row * cols + cols - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }

  return (
    <div
      role="grid"
      aria-label="Color picker"
      onKeyDown={handleKeyDown}
      style={{ display: 'grid', gridTemplateColumns: \`repeat(\${cols}, 1fr)\` }}
    >
      {items.map((item, index) => (
        <button
          key={index}
          ref={el => refs.current[index] = el}
          role="gridcell"
          tabIndex={index === focusedIndex ? 0 : -1}
          onClick={() => setFocusedIndex(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
\`\`\`

**Keyboard Pattern Quick Reference:**

| Component | Tab Behavior | Arrow Behavior |
|-----------|--------------|----------------|
| Toolbar | Single stop | Left/Right moves focus |
| Tab list | Single stop | Left/Right moves & activates |
| Menu | Single stop | Up/Down moves, Enter selects |
| Tree | Single stop | Up/Down siblings, Left/Right expand |
| Grid | Single stop | All arrows for 2D navigation |
| Radio group | Single stop | Up/Down or Left/Right |
| Listbox | Single stop | Up/Down moves, Enter selects |

**Senior insight:** Roving tabindex dramatically improves keyboard UX for widget-heavy interfaces. The key insight is that Tab navigates *between* components while arrows navigate *within* components. Follow WAI-ARIA Authoring Practices patterns exactly—users expect consistent behavior. Libraries like Radix, Headless UI, and React Aria implement these patterns correctly; use them unless you have a compelling reason to build custom.

---

### Q: How do you test with screen readers and what should you verify?

**Answer:**

Screen reader testing is essential for verifying that your application is usable by blind and visually impaired users. Automated tools catch ~30-40% of issues; screen reader testing catches the rest.

**Screen Reader Landscape:**

| Screen Reader | OS | Browser | Market Share |
|---------------|-----|---------|--------------|
| NVDA | Windows | Firefox/Chrome | ~40% |
| JAWS | Windows | Chrome/Edge | ~30% |
| VoiceOver | macOS/iOS | Safari | ~25% |
| TalkBack | Android | Chrome | ~5% |

**VoiceOver Quick Start (macOS):**

\`\`\`bash
# Enable VoiceOver
Cmd + F5

# Basic navigation
Ctrl + Option + Right Arrow  # Next element
Ctrl + Option + Left Arrow   # Previous element
Ctrl + Option + Space        # Activate/click
Ctrl + Option + U            # Open rotor (landmarks, headings, links)
Ctrl + Option + A            # Start reading all

# Web navigation
Ctrl + Option + Cmd + H      # Next heading
Ctrl + Option + Cmd + J      # Next form control
Ctrl + Option + Cmd + L      # Next link
\`\`\`

**NVDA Quick Start (Windows):**

\`\`\`
# Download from nvaccess.org (free)

# Basic commands (Insert = NVDA key)
Insert + Space              # Toggle focus/browse mode
Tab / Shift+Tab             # Navigate focusable elements
H / Shift+H                 # Next/previous heading
F / Shift+F                 # Next/previous form field
D / Shift+D                 # Next/previous landmark
B / Shift+B                 # Next/previous button
Insert + F7                 # Elements list (links, headings, landmarks)
\`\`\`

**What to Test:**

\`\`\`tsx
// 1. PAGE STRUCTURE
// Test: Can user understand page layout?
// VoiceOver Rotor → Landmarks should show logical structure

<header role="banner">         {/* "banner" landmark */}
  <nav aria-label="Primary">   {/* "Primary navigation" */}
</header>
<main role="main">             {/* "main" landmark */}
<aside aria-label="Related">   {/* "Related complementary" */}
<footer role="contentinfo">    {/* "content info" landmark */}

// 2. HEADING HIERARCHY
// Test: H key should navigate through logical outline

<h1>Page Title</h1>           {/* Only one h1 */}
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>    {/* Don't skip levels */}

// 3. FORM FIELDS
// Test: Each field announces label, type, required status, errors

<label htmlFor="email">Email (required)</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : "email-hint"}
/>
// Should announce: "Email, required, edit text, invalid entry"

// 4. IMAGES
// Test: Meaningful images described, decorative images silent

<img src="chart.png" alt="Sales increased 50% in Q4 2024" />
<img src="divider.png" alt="" />  {/* Decorative - silent */}
<Icon aria-hidden="true" />       {/* Decorative icon */}

// 5. LINKS
// Test: Link text makes sense out of context

// ❌ Bad - "click here" means nothing in links list
<a href="/more">Click here</a>

// ✅ Good - descriptive link text
<a href="/pricing">View pricing plans</a>

// 6. BUTTONS
// Test: Button purpose is clear

// ❌ Bad - no accessible name
<button><Icon name="close" /></button>

// ✅ Good
<button aria-label="Close dialog"><Icon name="close" /></button>

// 7. DYNAMIC CONTENT
// Test: Changes are announced appropriately

<div role="status" aria-live="polite">
  {searchResults.length} results found
</div>
// Should announce when results update

// 8. FOCUS MANAGEMENT
// Test: Focus moves logically, modals trap focus

// After opening modal - focus should be inside
// After closing modal - focus should return to trigger
\`\`\`

**Screen Reader Testing Checklist:**

\`\`\`markdown
## Page Load
- [ ] Page title is announced
- [ ] Skip link is first interactive element
- [ ] Main heading (h1) is immediately identifiable

## Navigation
- [ ] All interactive elements are reachable with Tab
- [ ] Focus order matches visual order
- [ ] Current page/section is indicated
- [ ] Keyboard shortcuts work (if provided)

## Content
- [ ] Headings create logical outline
- [ ] Images have appropriate alt text
- [ ] Tables have headers and captions
- [ ] Lists are marked up as lists

## Forms
- [ ] All inputs have associated labels
- [ ] Required fields are indicated
- [ ] Error messages are announced
- [ ] Success/submission is confirmed

## Interactive Components
- [ ] Buttons announce their purpose
- [ ] Links describe their destination
- [ ] Modals trap focus and close with Escape
- [ ] Dropdown menus are navigable with arrows

## Dynamic Content
- [ ] Loading states are announced
- [ ] Error messages appear in live regions
- [ ] Route changes are announced (SPA)
- [ ] Auto-updating content doesn't overwhelm
\`\`\`

**Automated + Manual Testing Strategy:**

\`\`\`tsx
// Automated: Catch low-hanging fruit in CI
// jest-axe for unit tests
import { axe, toHaveNoViolations } from 'jest-axe';

test('form is accessible', async () => {
  const { container } = render(<LoginForm />);
  expect(await axe(container)).toHaveNoViolations();
});

// Playwright + axe for E2E
import AxeBuilder from '@axe-core/playwright';

test('checkout page accessibility', async ({ page }) => {
  await page.goto('/checkout');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
\`\`\`

**Recording Screen Reader Sessions:**

\`\`\`tsx
// For bug reports and documentation, record your screen
// macOS: Cmd + Shift + 5
// Windows: Win + G (Xbox Game Bar)

// Include in bug reports:
// 1. Screen reader used (NVDA 2024.1, VoiceOver macOS 14)
// 2. Browser and version
// 3. Steps to reproduce
// 4. What was announced vs expected
// 5. Video/audio recording if possible
\`\`\`

**Common Screen Reader Issues:**

| Issue | What You Hear | Fix |
|-------|---------------|-----|
| Missing label | "Edit text" (no context) | Add \`<label>\` or \`aria-label\` |
| Unlabeled button | "Button" | Add text or \`aria-label\` |
| Broken heading order | Confusing outline | Use sequential h1→h2→h3 |
| Image without alt | Filename announced | Add meaningful \`alt\` |
| Focus trap escape | Focus leaves modal | Implement proper focus trap |
| Silent updates | Nothing announced | Add \`aria-live\` region |
| Redundant text | "Link link" | Remove \`aria-label="link"\` |

**CI Integration for A11y:**

\`\`\`yaml
# .github/workflows/accessibility.yml
name: Accessibility Tests

on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Run jest-axe tests
        run: npm run test:a11y

      - name: Build app
        run: npm run build

      - name: Start server
        run: npm run preview &

      - name: Run Playwright a11y tests
        run: npx playwright test tests/accessibility/

      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: a11y-report
          path: playwright-report/
\`\`\`

**Senior insight:** Screen reader testing feels slow at first but becomes intuitive with practice. Start with VoiceOver on Mac or NVDA on Windows—both are free. Test the critical user journeys first: can a blind user sign up, log in, and complete the core action? Document your findings with recordings. Most importantly, include screen reader users in usability testing when possible—they'll find issues you never considered. The goal isn't perfection; it's ensuring the core experience works for everyone.`,oy=`## 15. Advanced Component Patterns

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

### Q: How do you use state machines with XState in React?

**Answer:**

State machines provide explicit, predictable state management by defining all possible states and transitions upfront. XState is the most popular library for this pattern in React.

**Why State Machines?**

\`\`\`jsx
// ❌ Traditional approach - implicit states, scattered logic
function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [canRetry, setCanRetry] = useState(false);

  // Bug: Can be loading AND error at the same time!
  // Bug: Easy to forget resetting states

  async function handleSubmit() {
    setIsLoading(true);
    setIsError(false); // Don't forget this!
    setIsSuccess(false); // Or this!
    try {
      await submit();
      setIsSuccess(true);
      setIsLoading(false); // Multiple setState calls
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(e.message);
      setCanRetry(true);
    }
  }
}

// ✅ State machine - explicit states, impossible invalid combinations
const formMachine = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { SUBMIT: 'submitting' } },
    submitting: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: { type: 'final' },
    error: { on: { RETRY: 'submitting', RESET: 'idle' } }
  }
});
// Only ONE state at a time - no invalid combinations possible
\`\`\`

**Basic XState Setup:**

\`\`\`tsx
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

// Define the machine
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});

// Use in component
function Toggle() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send({ type: 'TOGGLE' })}>
      {state.matches('active') ? 'ON' : 'OFF'}
    </button>
  );
}
\`\`\`

**Multi-Step Form with Context:**

\`\`\`tsx
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

interface FormContext {
  personalInfo: { name: string; email: string } | null;
  address: { street: string; city: string } | null;
  payment: { cardNumber: string } | null;
  error: string | null;
}

type FormEvent =
  | { type: 'NEXT'; data: Record<string, string> }
  | { type: 'BACK' }
  | { type: 'SUBMIT' }
  | { type: 'RETRY' };

const checkoutMachine = createMachine({
  id: 'checkout',
  initial: 'personalInfo',
  context: {
    personalInfo: null,
    address: null,
    payment: null,
    error: null,
  } as FormContext,

  states: {
    personalInfo: {
      on: {
        NEXT: {
          target: 'address',
          actions: assign({
            personalInfo: (_, event) => event.data as FormContext['personalInfo']
          })
        }
      }
    },

    address: {
      on: {
        NEXT: {
          target: 'payment',
          actions: assign({
            address: (_, event) => event.data as FormContext['address']
          })
        },
        BACK: 'personalInfo'
      }
    },

    payment: {
      on: {
        NEXT: {
          target: 'submitting',
          actions: assign({
            payment: (_, event) => event.data as FormContext['payment']
          })
        },
        BACK: 'address'
      }
    },

    submitting: {
      invoke: {
        src: 'submitOrder',
        onDone: 'success',
        onError: {
          target: 'error',
          actions: assign({
            error: (_, event) => event.data.message
          })
        }
      }
    },

    success: {
      type: 'final'
    },

    error: {
      on: {
        RETRY: 'submitting',
        BACK: 'payment'
      }
    }
  }
}, {
  services: {
    submitOrder: (context) => submitToAPI(context)
  }
});

// Usage
function CheckoutWizard() {
  const [state, send] = useMachine(checkoutMachine);

  return (
    <div className="checkout">
      {/* Progress indicator */}
      <ProgressBar
        steps={['Personal', 'Address', 'Payment', 'Confirm']}
        current={
          state.matches('personalInfo') ? 0 :
          state.matches('address') ? 1 :
          state.matches('payment') ? 2 : 3
        }
      />

      {/* Step content */}
      {state.matches('personalInfo') && (
        <PersonalInfoForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
        />
      )}

      {state.matches('address') && (
        <AddressForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('payment') && (
        <PaymentForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('submitting') && <LoadingSpinner />}

      {state.matches('error') && (
        <ErrorMessage
          message={state.context.error}
          onRetry={() => send({ type: 'RETRY' })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('success') && (
        <SuccessMessage orderId={state.context.orderId} />
      )}
    </div>
  );
}
\`\`\`

**Async Data Fetching Machine:**

\`\`\`tsx
const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  context: {
    data: null,
    error: null,
  },

  states: {
    idle: {
      on: { FETCH: 'loading' }
    },

    loading: {
      invoke: {
        src: 'fetchData',
        onDone: {
          target: 'success',
          actions: assign({ data: (_, event) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (_, event) => event.data })
        }
      }
    },

    success: {
      on: {
        REFRESH: 'loading',
        RESET: 'idle'
      }
    },

    failure: {
      on: {
        RETRY: 'loading',
        RESET: 'idle'
      }
    }
  }
});

// With useSelector for optimized renders
function UserProfile({ userId }) {
  const [state, send] = useMachine(fetchMachine, {
    services: {
      fetchData: () => fetch(\`/api/users/\${userId}\`).then(r => r.json())
    }
  });

  // Only re-renders when these specific values change
  const user = useSelector(state, state => state.context.data);
  const isLoading = useSelector(state, state => state.matches('loading'));

  useEffect(() => {
    send({ type: 'FETCH' });
  }, [userId, send]);

  if (isLoading) return <Skeleton />;

  return <Profile user={user} />;
}
\`\`\`

**When to Use State Machines:**

| Scenario | Use State Machine? | Why |
|----------|-------------------|-----|
| Toggle button | ❌ Overkill | useState is simpler |
| Form with validation | ⚠️ Maybe | Depends on complexity |
| Multi-step wizard | ✅ Yes | Clear step transitions |
| Authentication flow | ✅ Yes | Multiple states, async |
| Media player | ✅ Yes | Play/pause/stop/loading |
| File upload | ✅ Yes | Selecting/uploading/success/error |
| Game logic | ✅ Definitely | Complex state transitions |

**Visualizing Machines:**

\`\`\`tsx
// XState provides visualization tools
// 1. Stately.ai visualizer (online)
// 2. @xstate/inspect for dev tools

import { inspect } from '@xstate/inspect';

// In development only
if (process.env.NODE_ENV === 'development') {
  inspect({
    iframe: false // Opens in new window
  });
}

// Then use devTools option
const [state, send] = useMachine(machine, {
  devTools: true
});
\`\`\`

**XState v5 Patterns:**

\`\`\`tsx
// XState v5 uses setup() and simpler syntax
import { setup, assign } from 'xstate';

const machine = setup({
  types: {
    context: {} as { count: number },
    events: {} as { type: 'INCREMENT' } | { type: 'DECREMENT' }
  },
  actions: {
    increment: assign({ count: ({ context }) => context.count + 1 }),
    decrement: assign({ count: ({ context }) => context.count - 1 })
  }
}).createMachine({
  context: { count: 0 },
  initial: 'active',
  states: {
    active: {
      on: {
        INCREMENT: { actions: 'increment' },
        DECREMENT: { actions: 'decrement' }
      }
    }
  }
});
\`\`\`

**Senior insight:** State machines excel when you can draw a state diagram on a whiteboard. If your component has boolean flags like \`isLoading && !isError && isSubmitted\`, you likely have an implicit state machine that would benefit from being explicit. The initial setup is more work, but machines are self-documenting, make impossible states impossible, and can be visualized/tested in isolation.

---

### Q: What is the Headless UI pattern and when should you use it?

**Answer:**

Headless UI is a pattern where components provide behavior, state management, and accessibility without any styling or markup. The consumer provides all the visual elements.

**The Problem Headless UI Solves:**

\`\`\`jsx
// ❌ Traditional component library
// - Opinionated styling that fights your design system
// - Hard to customize beyond provided props
// - Bloated bundle with unused styles

<DatePicker
  theme="light"
  primaryColor="#007bff"
  borderRadius={8}
  // Still can't get it to match your design exactly
/>

// ✅ Headless component
// - Zero styling decisions
// - Full control over markup
// - Accessibility built-in
// - Works with any styling solution

const { selectedDate, openCalendar, calendarProps } = useDatePicker();
// You render however you want
\`\`\`

**Building a Headless Component:**

\`\`\`tsx
import { useState, useCallback, useId } from 'react';

interface UseToggleReturn {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  buttonProps: {
    'aria-expanded': boolean;
    'aria-controls': string;
    onClick: () => void;
  };
  panelProps: {
    id: string;
    hidden: boolean;
  };
}

function useToggle(defaultOpen = false): UseToggleReturn {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    toggle,
    open,
    close,
    buttonProps: {
      'aria-expanded': isOpen,
      'aria-controls': panelId,
      onClick: toggle,
    },
    panelProps: {
      id: panelId,
      hidden: !isOpen,
    },
  };
}

// Usage - consumer controls ALL markup and styling
function FAQ({ question, answer }) {
  const { isOpen, buttonProps, panelProps } = useToggle();

  return (
    <div className="faq-item">
      <button
        {...buttonProps}
        className={\`faq-question \${isOpen ? 'expanded' : ''}\`}
      >
        <span>{question}</span>
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      <div {...panelProps} className="faq-answer">
        {answer}
      </div>
    </div>
  );
}
\`\`\`

**Headless Dropdown (More Complex):**

\`\`\`tsx
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useId,
  KeyboardEvent
} from 'react';

interface UseDropdownOptions<T> {
  items: T[];
  onSelect: (item: T) => void;
  getItemId?: (item: T) => string;
}

function useDropdown<T>({ items, onSelect, getItemId }: UseDropdownOptions<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const menuId = useId();
  const triggerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setHighlightedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  const selectItem = useCallback((item: T) => {
    onSelect(item);
    close();
  }, [onSelect, close]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          open();
        } else {
          setHighlightedIndex(i => (i + 1) % items.length);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(i => (i - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen) {
          selectItem(items[highlightedIndex]);
        } else {
          open();
        }
        break;
      case 'Escape':
        close();
        break;
      case 'Home':
        e.preventDefault();
        setHighlightedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setHighlightedIndex(items.length - 1);
        break;
    }
  }, [isOpen, items, highlightedIndex, open, close, selectItem]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(e: MouseEvent) {
      if (!triggerRef.current?.contains(e.target as Node)) {
        close();
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, close]);

  return {
    isOpen,
    highlightedIndex,
    open,
    close,

    triggerProps: {
      ref: triggerRef,
      id: triggerId,
      'aria-haspopup': 'listbox' as const,
      'aria-expanded': isOpen,
      'aria-controls': menuId,
      onClick: () => (isOpen ? close() : open()),
      onKeyDown: handleKeyDown,
    },

    menuProps: {
      id: menuId,
      role: 'listbox' as const,
      'aria-labelledby': triggerId,
      tabIndex: -1,
      onKeyDown: handleKeyDown,
    },

    getItemProps: (item: T, index: number) => ({
      role: 'option' as const,
      id: getItemId?.(item) || \`\${menuId}-option-\${index}\`,
      'aria-selected': index === highlightedIndex,
      onClick: () => selectItem(item),
      onMouseEnter: () => setHighlightedIndex(index),
    }),
  };
}

// Usage with Tailwind
function CountryPicker({ countries, onSelect }) {
  const {
    isOpen,
    highlightedIndex,
    triggerProps,
    menuProps,
    getItemProps
  } = useDropdown({
    items: countries,
    onSelect,
    getItemId: (c) => c.code,
  });

  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <button
        {...triggerProps}
        className="px-4 py-2 border rounded-lg flex items-center gap-2"
      >
        {selected?.flag} {selected?.name || 'Select country'}
        <ChevronDown className={isOpen ? 'rotate-180' : ''} />
      </button>

      {isOpen && (
        <ul
          {...menuProps}
          className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {countries.map((country, index) => (
            <li
              key={country.code}
              {...getItemProps(country, index)}
              className={\`
                px-4 py-2 cursor-pointer flex items-center gap-2
                \${index === highlightedIndex ? 'bg-blue-100' : 'hover:bg-gray-50'}
              \`}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

**Popular Headless UI Libraries:**

| Library | Focus | Style |
|---------|-------|-------|
| Headless UI | Tailwind integration | Component-based |
| Radix UI | Primitives | Component-based |
| React Aria | Comprehensive a11y | Hook-based |
| Downshift | Autocomplete/select | Hook-based |
| TanStack Table | Data tables | Hook-based |
| Ariakit | General purpose | Both styles |

**React Aria Example:**

\`\`\`tsx
import { useButton, useDialog, useModal, useOverlay } from 'react-aria';

function Modal({ isOpen, onClose, children, title }) {
  const ref = useRef(null);

  // Handles focus, scroll lock, aria-hidden on siblings
  const { modalProps } = useModal();

  // Handles overlay click to close
  const { overlayProps } = useOverlay(
    { isOpen, onClose, isDismissable: true },
    ref
  );

  // Handles dialog role and labeling
  const { dialogProps, titleProps } = useDialog({}, ref);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div
        {...overlayProps}
        {...dialogProps}
        {...modalProps}
        ref={ref}
        className="bg-white rounded-lg p-6 max-w-md"
      >
        <h2 {...titleProps} className="text-xl font-bold">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
\`\`\`

**When to Use Headless UI:**

| Use Case | Headless UI? | Reasoning |
|----------|--------------|-----------|
| Unique design system | ✅ Yes | Full control over styling |
| Complex interactions | ✅ Yes | Built-in accessibility |
| Rapid prototyping | ❌ No | Use styled components like MUI/Chakra |
| Form inputs | ⚠️ Maybe | Native inputs often sufficient |
| Custom select/dropdown | ✅ Yes | Native select is limited |
| Modal/Dialog | ✅ Yes | Complex focus/a11y requirements |

**Senior insight:** Headless UI is the best approach when your design system doesn't fit standard component libraries. The tradeoff is writing more markup, but you get full control and proper accessibility. For production apps, prefer established libraries (Radix, React Aria) over building your own—they've solved edge cases you haven't encountered yet.

---

### Q: Explain the Slots pattern in React

**Answer:**

The Slots pattern allows parent components to accept children that fill specific "slots" in their layout, giving consumers control over what appears where while the parent controls the overall structure.

**The Problem Slots Solve:**

\`\`\`jsx
// ❌ Props-based approach - limited flexibility
<Card
  title="User Profile"
  subtitle="Account settings"
  icon={<UserIcon />}
  actions={<Button>Edit</Button>}
  footer={<CardFooter />}
/>
// What if I need two icons? Different layout? Custom elements?

// ✅ Slots pattern - maximum flexibility
<Card>
  <Card.Header>
    <Card.Icon><UserIcon /></Card.Icon>
    <Card.Title>User Profile</Card.Title>
  </Card.Header>
  <Card.Body>Content here</Card.Body>
  <Card.Footer>Footer content</Card.Footer>
</Card>
\`\`\`

**Basic Slots Implementation:**

\`\`\`tsx
import { Children, ReactNode, isValidElement, createContext, useContext } from 'react';

// Context for slot data
const CardContext = createContext<{ variant?: 'default' | 'compact' }>({});

// Slot components
function CardHeader({ children }: { children: ReactNode }) {
  return <div className="card-header">{children}</div>;
}

function CardBody({ children }: { children: ReactNode }) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ children }: { children: ReactNode }) {
  const { variant } = useContext(CardContext);
  return (
    <div className={\`card-footer \${variant === 'compact' ? 'p-2' : 'p-4'}\`}>
      {children}
    </div>
  );
}

// Main component that arranges slots
function Card({ children, variant = 'default' }: {
  children: ReactNode;
  variant?: 'default' | 'compact';
}) {
  const childArray = Children.toArray(children);

  // Find specific slot components
  const header = childArray.find(
    child => isValidElement(child) && child.type === CardHeader
  );
  const body = childArray.find(
    child => isValidElement(child) && child.type === CardBody
  );
  const footer = childArray.find(
    child => isValidElement(child) && child.type === CardFooter
  );

  return (
    <CardContext.Provider value={{ variant }}>
      <div className={\`card card-\${variant}\`}>
        {header}
        {body}
        {footer}
      </div>
    </CardContext.Provider>
  );
}

// Attach slot components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Usage
<Card variant="compact">
  <Card.Header>
    <h2>Settings</h2>
  </Card.Header>
  <Card.Body>
    <p>Configure your preferences</p>
  </Card.Body>
  <Card.Footer>
    <Button>Save</Button>
  </Card.Footer>
</Card>
\`\`\`

**Named Slots with displayName:**

\`\`\`tsx
// More robust slot detection using displayName

function createSlot(name: string) {
  const Slot = ({ children }: { children: ReactNode }) => <>{children}</>;
  Slot.displayName = name;
  return Slot;
}

// Create slots
const Header = createSlot('Layout.Header');
const Sidebar = createSlot('Layout.Sidebar');
const Main = createSlot('Layout.Main');
const Footer = createSlot('Layout.Footer');

function Layout({ children }: { children: ReactNode }) {
  const slots = {
    header: null as ReactNode,
    sidebar: null as ReactNode,
    main: null as ReactNode,
    footer: null as ReactNode,
  };

  // Categorize children into slots
  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const displayName = (child.type as any).displayName;

    switch (displayName) {
      case 'Layout.Header':
        slots.header = child.props.children;
        break;
      case 'Layout.Sidebar':
        slots.sidebar = child.props.children;
        break;
      case 'Layout.Main':
        slots.main = child.props.children;
        break;
      case 'Layout.Footer':
        slots.footer = child.props.children;
        break;
    }
  });

  return (
    <div className="layout">
      {slots.header && (
        <header className="layout-header">{slots.header}</header>
      )}
      <div className="layout-content">
        {slots.sidebar && (
          <aside className="layout-sidebar">{slots.sidebar}</aside>
        )}
        <main className="layout-main">{slots.main}</main>
      </div>
      {slots.footer && (
        <footer className="layout-footer">{slots.footer}</footer>
      )}
    </div>
  );
}

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Main = Main;
Layout.Footer = Footer;

// Usage - order doesn't matter, parent controls layout
<Layout>
  <Layout.Footer>© 2024</Layout.Footer>
  <Layout.Main>Page content</Layout.Main>
  <Layout.Header><Nav /></Layout.Header>
  <Layout.Sidebar><Menu /></Layout.Sidebar>
</Layout>
\`\`\`

**Context-Based Slots (Alternative):**

\`\`\`tsx
import { createContext, useContext, ReactNode } from 'react';

type SlotRegistry = Map<string, ReactNode>;

const SlotContext = createContext<{
  registerSlot: (name: string, content: ReactNode) => void;
  slots: SlotRegistry;
} | null>(null);

function SlotProvider({ children }: { children: ReactNode }) {
  const [slots, setSlots] = useState<SlotRegistry>(new Map());

  const registerSlot = useCallback((name: string, content: ReactNode) => {
    setSlots(prev => new Map(prev).set(name, content));
  }, []);

  return (
    <SlotContext.Provider value={{ registerSlot, slots }}>
      {children}
    </SlotContext.Provider>
  );
}

function Slot({ name, children }: { name: string; children: ReactNode }) {
  const context = useContext(SlotContext);

  useEffect(() => {
    context?.registerSlot(name, children);
    return () => context?.registerSlot(name, null);
  }, [name, children, context]);

  return null; // Renders nothing - just registers
}

function SlotOutlet({ name, fallback }: { name: string; fallback?: ReactNode }) {
  const context = useContext(SlotContext);
  return <>{context?.slots.get(name) ?? fallback}</>;
}

// Usage
function PageLayout({ children }: { children: ReactNode }) {
  return (
    <SlotProvider>
      {children}
      <div className="page">
        <header><SlotOutlet name="header" /></header>
        <main><SlotOutlet name="content" /></main>
        <footer><SlotOutlet name="footer" fallback="Default footer" /></footer>
      </div>
    </SlotProvider>
  );
}

function MyPage() {
  return (
    <PageLayout>
      <Slot name="header">
        <h1>My Page</h1>
      </Slot>
      <Slot name="content">
        <p>Page content here</p>
      </Slot>
      {/* Footer slot not provided - uses fallback */}
    </PageLayout>
  );
}
\`\`\`

**Slots with Render Props:**

\`\`\`tsx
// Slots can pass data back to their content

interface TableSlotProps<T> {
  header: (columns: Column[]) => ReactNode;
  row: (item: T, index: number) => ReactNode;
  empty?: () => ReactNode;
  loading?: () => ReactNode;
}

function Table<T>({
  data,
  columns,
  isLoading,
  slots,
}: {
  data: T[];
  columns: Column[];
  isLoading: boolean;
  slots: TableSlotProps<T>;
}) {
  if (isLoading && slots.loading) {
    return slots.loading();
  }

  if (data.length === 0 && slots.empty) {
    return slots.empty();
  }

  return (
    <table>
      <thead>
        <tr>{slots.header(columns)}</tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{slots.row(item, index)}</tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage - full control over rendering
<Table
  data={users}
  columns={columns}
  isLoading={isLoading}
  slots={{
    header: (cols) => cols.map(c => <th key={c.key}>{c.label}</th>),
    row: (user, i) => (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><StatusBadge status={user.status} /></td>
      </>
    ),
    empty: () => <EmptyState message="No users found" />,
    loading: () => <TableSkeleton rows={5} />,
  }}
/>
\`\`\`

**Slots vs Props vs Children:**

| Pattern | Use When |
|---------|----------|
| Props | Simple, single values |
| children | Single content area |
| Slots | Multiple content areas, order matters |
| Render Props | Content needs data from parent |
| Compound Components | Related components share state |

**Senior insight:** Slots shine in layout components and complex UI primitives. Vue has native slots; React achieves the same through Children manipulation or compound components. The tradeoff is verbosity versus flexibility—props are simpler when you only need 1-2 customization points. Use slots when you have 3+ customizable regions or when the order of declaration shouldn't dictate visual order.

---

### Q: How do you design controlled vs uncontrolled compound components?

**Answer:**

Compound components can be either fully controlled (parent manages state), fully uncontrolled (component manages its own state), or support both modes. The best APIs let consumers choose based on their needs.

**Uncontrolled Compound Component:**

\`\`\`tsx
// Component manages its own state internally
// Consumer just declares structure

function Accordion({ children, defaultIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultIndex);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      <button onClick={() => setOpenIndex(isOpen ? -1 : index)}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

// Usage - state managed internally
<Accordion defaultIndex={0}>
  <AccordionItem index={0} title="Section 1">Content 1</AccordionItem>
  <AccordionItem index={1} title="Section 2">Content 2</AccordionItem>
</Accordion>
// Can't programmatically control which item is open
\`\`\`

**Controlled Compound Component:**

\`\`\`tsx
// Parent manages all state, passes via props

function Accordion({ children, openIndex, onOpenChange }) {
  return (
    <AccordionContext.Provider value={{ openIndex, onOpenChange }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }) {
  const { openIndex, onOpenChange } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      <button onClick={() => onOpenChange(isOpen ? -1 : index)}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

// Usage - parent controls state
function App() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <button onClick={() => setOpenIndex(1)}>Open Section 2</button>
      <Accordion openIndex={openIndex} onOpenChange={setOpenIndex}>
        <AccordionItem index={0} title="Section 1">Content 1</AccordionItem>
        <AccordionItem index={1} title="Section 2">Content 2</AccordionItem>
      </Accordion>
    </>
  );
}
\`\`\`

**Hybrid: Supporting Both Modes:**

\`\`\`tsx
// Best practice: support both controlled and uncontrolled usage

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (value: T) => void] {
  // Controlled mode: value prop provided
  const isControlled = value !== undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Use controlled value if provided, otherwise internal
  const resolvedValue = isControlled ? value : internalValue;

  const setValue = useCallback((newValue: T) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [isControlled, onChange]);

  return [resolvedValue, setValue];
}

// Accordion supporting both modes
interface AccordionProps {
  children: ReactNode;
  defaultOpenIndex?: number;  // Uncontrolled default
  openIndex?: number;         // Controlled value
  onOpenChange?: (index: number) => void;
  allowMultiple?: boolean;
}

function Accordion({
  children,
  defaultOpenIndex = -1,
  openIndex,
  onOpenChange,
  allowMultiple = false,
}: AccordionProps) {
  const [currentIndex, setCurrentIndex] = useControllableState({
    value: openIndex,
    defaultValue: defaultOpenIndex,
    onChange: onOpenChange,
  });

  return (
    <AccordionContext.Provider value={{
      openIndex: currentIndex,
      setOpenIndex: setCurrentIndex,
      allowMultiple,
    }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

// Usage - uncontrolled (simple)
<Accordion defaultOpenIndex={0}>
  <AccordionItem index={0} title="FAQ 1">Answer 1</AccordionItem>
  <AccordionItem index={1} title="FAQ 2">Answer 2</AccordionItem>
</Accordion>

// Usage - controlled (when you need external control)
function ControlledExample() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Accordion openIndex={openIndex} onOpenChange={setOpenIndex}>
      <AccordionItem index={0} title="FAQ 1">Answer 1</AccordionItem>
      <AccordionItem index={1} title="FAQ 2">Answer 2</AccordionItem>
    </Accordion>
  );
}
\`\`\`

**Complete Example: Tabs with Both Modes:**

\`\`\`tsx
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within Tabs');
  }
  return context;
}

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

function Tabs({ children, defaultValue, value, onValueChange }: TabsProps) {
  const [activeTab, setActiveTab] = useControllableState({
    value,
    defaultValue: defaultValue ?? '',
    onChange: onValueChange,
  });

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return (
    <div role="tablist" className="tab-list">
      {children}
    </div>
  );
}

function Tab({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={\`tab \${isActive ? 'active' : ''}\`}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }: { children: ReactNode }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div role="tabpanel" className="tab-panel">
      {children}
    </div>
  );
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

// Uncontrolled usage
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Tab value="account">Account</Tabs.Tab>
    <Tabs.Tab value="security">Security</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="account">Account settings</Tabs.Panel>
    <Tabs.Panel value="security">Security settings</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

// Controlled usage
function ControlledTabs() {
  const [tab, setTab] = useState('account');

  // Can programmatically change tab
  const goToSecurity = () => setTab('security');

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <Tabs.List>
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="security">Security</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel value="account">
          <button onClick={goToSecurity}>Go to Security</button>
        </Tabs.Panel>
        <Tabs.Panel value="security">Security settings</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
\`\`\`

**API Design Guidelines:**

| Prop Pattern | Purpose |
|--------------|---------|
| \`value\` | Controlled value (from parent) |
| \`defaultValue\` | Initial value (uncontrolled) |
| \`onValueChange\` | Callback when value changes |
| \`onChange\` | Alternative naming convention |

\`\`\`tsx
// Naming conventions from popular libraries

// Radix UI pattern
<Select value={value} onValueChange={setValue} />
<Select defaultValue="option1" />

// React Hook Form pattern
<Controller
  control={control}
  name="field"
  render={({ field }) => <Input {...field} />}
/>

// MUI pattern
<TextField value={value} onChange={e => setValue(e.target.value)} />
<TextField defaultValue="initial" />
\`\`\`

**TypeScript Discriminated Union for Props:**

\`\`\`tsx
// Enforce correct prop combinations with types

type ControlledProps = {
  value: string;
  onValueChange: (value: string) => void;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onValueChange?: (value: string) => void;
};

type TabsProps = (ControlledProps | UncontrolledProps) & {
  children: ReactNode;
};

function Tabs(props: TabsProps) {
  // TypeScript ensures correct usage
}

// ✅ Valid
<Tabs value={tab} onValueChange={setTab} />
<Tabs defaultValue="tab1" />

// ❌ Type error
<Tabs value={tab} defaultValue="tab1" />
\`\`\`

**Senior insight:** The \`useControllableState\` hook is a powerful pattern used by Radix, Chakra, and other libraries. It lets your component work in both modes without duplicating logic. The key insight is that controlled components should never have internal state for the controlled value—the parent is the single source of truth. For uncontrolled components, the internal state is the source of truth. The hybrid approach elegantly handles both by delegating to the appropriate source based on which props are provided.`,iy=`## 16. Frontend Monitoring & Observability

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

### Q: How do you integrate Sentry with React Error Boundaries for comprehensive error tracking?

**Answer:**

Combining Sentry with custom Error Boundaries provides both automatic error capture and graceful UI recovery. Sentry's \`@sentry/react\` package includes an Error Boundary component, but building your own gives more control.

**Sentry Setup with Source Maps:**

\`\`\`tsx
// src/lib/sentry.ts
import * as Sentry from '@sentry/react';

export function initSentry() {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: \`my-app@\${import.meta.env.VITE_APP_VERSION}\`,

    // Integrations
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],

    // Performance monitoring
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0, // 10% in prod

    // Session replay
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% when error occurs

    // Filter out noise
    ignoreErrors: [
      'ResizeObserver loop limit exceeded',
      'Non-Error promise rejection captured',
      /^Network request failed$/,
    ],

    // Before sending, scrub sensitive data
    beforeSend(event, hint) {
      // Remove sensitive query params
      if (event.request?.query_string) {
        event.request.query_string = event.request.query_string
          .replace(/token=[^&]+/g, 'token=[FILTERED]')
          .replace(/password=[^&]+/g, 'password=[FILTERED]');
      }
      return event;
    },
  });
}

// Upload source maps during build (vite.config.ts)
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'your-org',
      project: 'your-project',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true, // Required for source maps
  },
});
\`\`\`

**Custom Error Boundary with Sentry:**

\`\`\`tsx
import * as Sentry from '@sentry/react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((props: { error: Error; resetError: () => void }) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDialog?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  eventId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    eventId: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Capture with Sentry including component stack
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', true);
      scope.setContext('react', {
        componentStack: errorInfo.componentStack,
      });

      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, eventId: null });
  };

  render() {
    if (this.state.hasError) {
      const { fallback, showDialog } = this.props;
      const { error, eventId } = this.state;

      // Render custom fallback
      if (typeof fallback === 'function') {
        return fallback({ error: error!, resetError: this.resetError });
      }

      if (fallback) {
        return fallback;
      }

      // Default fallback with Sentry feedback dialog
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We've been notified and are working on a fix.</p>

          <button onClick={this.resetError}>
            Try Again
          </button>

          {showDialog && eventId && (
            <button onClick={() => Sentry.showReportDialog({ eventId })}>
              Report Feedback
            </button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
\`\`\`

**Strategic Error Boundary Placement:**

\`\`\`tsx
// App.tsx - Layered error boundaries

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<CriticalErrorPage />}>
      {/* Catches catastrophic errors */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Layout>
              <ErrorBoundary fallback={<PageErrorFallback />}>
                {/* Catches page-level errors */}
                <Routes>
                  <Route path="/dashboard" element={
                    <ErrorBoundary fallback={<WidgetErrorFallback />}>
                      {/* Catches widget errors */}
                      <Dashboard />
                    </ErrorBoundary>
                  } />
                </Routes>
              </ErrorBoundary>
            </Layout>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}

// Widget-level boundary - doesn't break the whole page
function WidgetErrorFallback({ error, resetError }) {
  return (
    <div className="widget-error">
      <p>This widget couldn't load</p>
      <button onClick={resetError}>Retry</button>
    </div>
  );
}
\`\`\`

**Tracking Error Boundaries by Feature:**

\`\`\`tsx
// Create feature-specific error boundaries
function createFeatureErrorBoundary(featureName: string) {
  return function FeatureErrorBoundary({ children }: { children: ReactNode }) {
    return (
      <ErrorBoundary
        onError={(error, errorInfo) => {
          Sentry.withScope((scope) => {
            scope.setTag('feature', featureName);
            scope.setLevel('error');
            Sentry.captureException(error);
          });
        }}
        fallback={({ error, resetError }) => (
          <FeatureErrorFallback
            feature={featureName}
            error={error}
            onRetry={resetError}
          />
        )}
      >
        {children}
      </ErrorBoundary>
    );
  };
}

// Usage
const CheckoutErrorBoundary = createFeatureErrorBoundary('checkout');
const SearchErrorBoundary = createFeatureErrorBoundary('search');

// In your app
<CheckoutErrorBoundary>
  <CheckoutFlow />
</CheckoutErrorBoundary>
\`\`\`

**Async Error Tracking:**

\`\`\`tsx
// Error boundaries don't catch async errors
// Handle them separately

function useTrackedMutation<TData, TVariables>(
  options: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation({
    ...options,
    onError: (error, variables, context) => {
      // Report to Sentry
      Sentry.withScope((scope) => {
        scope.setTag('type', 'mutation');
        scope.setContext('mutation', {
          key: options.mutationKey,
          variables: JSON.stringify(variables).slice(0, 500), // Truncate
        });
        Sentry.captureException(error);
      });

      // Call original handler
      options.onError?.(error, variables, context);
    },
  });
}

// Global React Query error handler
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Only report non-network errors
      if (!(error instanceof NetworkError)) {
        Sentry.captureException(error, {
          tags: { type: 'query' },
          extra: { queryKey: query.queryKey },
        });
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, variables, context, mutation) => {
      Sentry.captureException(error, {
        tags: { type: 'mutation' },
        extra: { mutationKey: mutation.options.mutationKey },
      });
    },
  }),
});
\`\`\`

**Release Tracking:**

\`\`\`bash
# In CI/CD pipeline
# 1. Create release
sentry-cli releases new my-app@1.2.3

# 2. Upload source maps
sentry-cli releases files my-app@1.2.3 upload-sourcemaps ./dist

# 3. Associate commits
sentry-cli releases set-commits my-app@1.2.3 --auto

# 4. Deploy
sentry-cli releases deploys my-app@1.2.3 new -e production

# 5. Finalize
sentry-cli releases finalize my-app@1.2.3
\`\`\`

**Senior insight:** Layer error boundaries strategically—global for catastrophic failures, page-level for route errors, widget-level for isolated components. Upload source maps in CI for readable stack traces, but keep them private (don't expose via public URL). Set up release tracking to correlate errors with deployments and enable "suspect commits" feature to identify which PR introduced a bug.

---

### Q: How do you implement custom performance metrics and business metrics tracking?

**Answer:**

Beyond Core Web Vitals, custom metrics help track business-specific performance like time-to-interactive for key features, API latencies, and user flow completion.

**Custom Performance Metrics Pattern:**

\`\`\`tsx
// src/lib/metrics.ts
type MetricName =
  | 'search_results_loaded'
  | 'checkout_completed'
  | 'dashboard_rendered'
  | 'product_image_loaded'
  | 'form_submitted';

interface Metric {
  name: MetricName;
  value: number;
  tags?: Record<string, string>;
  timestamp?: number;
}

class MetricsCollector {
  private buffer: Metric[] = [];
  private flushInterval = 5000; // 5 seconds

  constructor() {
    // Flush periodically
    setInterval(() => this.flush(), this.flushInterval);

    // Flush on page unload
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flush();
      }
    });
  }

  record(metric: Metric) {
    this.buffer.push({
      ...metric,
      timestamp: metric.timestamp || Date.now(),
    });

    // Flush immediately if buffer is large
    if (this.buffer.length >= 50) {
      this.flush();
    }
  }

  private async flush() {
    if (this.buffer.length === 0) return;

    const metrics = [...this.buffer];
    this.buffer = [];

    // Use sendBeacon for reliability during page unload
    const blob = new Blob([JSON.stringify({ metrics })], {
      type: 'application/json',
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/metrics', blob);
    } else {
      fetch('/api/metrics', {
        method: 'POST',
        body: blob,
        keepalive: true,
      }).catch(console.error);
    }
  }
}

export const metrics = new MetricsCollector();
\`\`\`

**Timing Hook:**

\`\`\`tsx
// Measure time between start and end
function usePerformanceMark(name: string) {
  const startMarkRef = useRef<string>();

  const start = useCallback(() => {
    startMarkRef.current = \`\${name}-start-\${Date.now()}\`;
    performance.mark(startMarkRef.current);
  }, [name]);

  const end = useCallback((tags?: Record<string, string>) => {
    if (!startMarkRef.current) return;

    const endMark = \`\${name}-end-\${Date.now()}\`;
    performance.mark(endMark);

    try {
      const measure = performance.measure(
        name,
        startMarkRef.current,
        endMark
      );

      metrics.record({
        name: name as MetricName,
        value: measure.duration,
        tags,
      });
    } catch (e) {
      // Marks might be cleared
    }

    // Cleanup
    performance.clearMarks(startMarkRef.current);
    performance.clearMarks(endMark);
    performance.clearMeasures(name);
  }, [name]);

  return { start, end };
}

// Usage
function SearchResults({ query }) {
  const { start, end } = usePerformanceMark('search_results_loaded');

  useEffect(() => {
    start();
  }, [query]);

  const { data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchAPI(query),
    onSuccess: (data) => {
      end({ result_count: String(data.length) });
    },
  });

  return <ResultsList results={data} />;
}
\`\`\`

**Component Render Metrics:**

\`\`\`tsx
// Track slow renders
function useRenderMetrics(componentName: string, threshold = 16) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(performance.now());

  useEffect(() => {
    const now = performance.now();
    const renderTime = now - lastRenderTime.current;
    renderCount.current++;

    if (renderTime > threshold) {
      metrics.record({
        name: 'slow_render' as MetricName,
        value: renderTime,
        tags: {
          component: componentName,
          render_count: String(renderCount.current),
        },
      });
    }

    lastRenderTime.current = now;
  });
}

// Usage
function ExpensiveComponent({ data }) {
  useRenderMetrics('ExpensiveComponent', 50);

  return <ComplexVisualization data={data} />;
}
\`\`\`

**API Latency Tracking:**

\`\`\`tsx
// Axios interceptor for API metrics
function setupAPIMetrics(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    config.metadata = { startTime: performance.now() };
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      const duration = performance.now() - response.config.metadata.startTime;

      metrics.record({
        name: 'api_latency' as MetricName,
        value: duration,
        tags: {
          endpoint: new URL(response.config.url!, response.config.baseURL).pathname,
          method: response.config.method!.toUpperCase(),
          status: String(response.status),
        },
      });

      return response;
    },
    (error) => {
      if (error.config?.metadata?.startTime) {
        const duration = performance.now() - error.config.metadata.startTime;

        metrics.record({
          name: 'api_latency' as MetricName,
          value: duration,
          tags: {
            endpoint: new URL(error.config.url!, error.config.baseURL).pathname,
            method: error.config.method!.toUpperCase(),
            status: String(error.response?.status || 'network_error'),
            error: 'true',
          },
        });
      }
      return Promise.reject(error);
    }
  );
}
\`\`\`

**User Flow Metrics:**

\`\`\`tsx
// Track multi-step user flows
class FlowTracker {
  private flows = new Map<string, { startTime: number; steps: string[] }>();

  startFlow(flowId: string, flowName: string) {
    this.flows.set(flowId, {
      startTime: performance.now(),
      steps: [flowName],
    });
  }

  addStep(flowId: string, stepName: string) {
    const flow = this.flows.get(flowId);
    if (flow) {
      flow.steps.push(stepName);
    }
  }

  completeFlow(flowId: string, success: boolean) {
    const flow = this.flows.get(flowId);
    if (!flow) return;

    const duration = performance.now() - flow.startTime;

    metrics.record({
      name: 'user_flow_completed' as MetricName,
      value: duration,
      tags: {
        flow_id: flowId,
        steps: flow.steps.join(' -> '),
        step_count: String(flow.steps.length),
        success: String(success),
      },
    });

    this.flows.delete(flowId);
  }

  abandonFlow(flowId: string, lastStep: string) {
    const flow = this.flows.get(flowId);
    if (!flow) return;

    const duration = performance.now() - flow.startTime;

    metrics.record({
      name: 'user_flow_abandoned' as MetricName,
      value: duration,
      tags: {
        flow_id: flowId,
        abandoned_at: lastStep,
        steps_completed: String(flow.steps.length),
      },
    });

    this.flows.delete(flowId);
  }
}

export const flowTracker = new FlowTracker();

// Usage in checkout flow
function CheckoutFlow() {
  const flowId = useRef(\`checkout-\${Date.now()}\`).current;

  useEffect(() => {
    flowTracker.startFlow(flowId, 'cart_review');

    return () => {
      // User navigated away without completing
      flowTracker.abandonFlow(flowId, 'unknown');
    };
  }, []);

  return (
    <Steps>
      <Step
        name="shipping"
        onEnter={() => flowTracker.addStep(flowId, 'shipping')}
      />
      <Step
        name="payment"
        onEnter={() => flowTracker.addStep(flowId, 'payment')}
      />
      <Step
        name="confirmation"
        onComplete={() => flowTracker.completeFlow(flowId, true)}
      />
    </Steps>
  );
}
\`\`\`

**Business Metrics Dashboard Query:**

\`\`\`tsx
// Example: Track feature usage
function FeatureUsageTracker({ featureName, children }) {
  const startTime = useRef(performance.now());

  useEffect(() => {
    metrics.record({
      name: 'feature_opened' as MetricName,
      value: 1,
      tags: { feature: featureName },
    });

    return () => {
      const duration = performance.now() - startTime.current;
      metrics.record({
        name: 'feature_time_spent' as MetricName,
        value: duration,
        tags: { feature: featureName },
      });
    };
  }, [featureName]);

  return children;
}

// Wrap features
<FeatureUsageTracker featureName="advanced_search">
  <AdvancedSearch />
</FeatureUsageTracker>
\`\`\`

**Senior insight:** Business metrics (conversion rates, feature adoption, time-to-value) often matter more than technical metrics. Use percentiles (p50, p95, p99) rather than averages—averages hide tail latencies. Correlate frontend metrics with backend traces using distributed tracing (correlation IDs) to debug full-stack issues. Don't over-instrument: each metric has storage and processing costs.

---

### Q: Explain Real User Monitoring (RUM) vs Synthetic Monitoring and when to use each

**Answer:**

RUM captures actual user experiences from real browsers and devices, while synthetic monitoring runs automated tests from controlled environments. Both are essential for comprehensive observability.

**RUM vs Synthetic Comparison:**

| Aspect | RUM | Synthetic |
|--------|-----|-----------|
| Data Source | Real users | Automated bots |
| Coverage | All user conditions | Predefined scenarios |
| Cost | Based on traffic | Based on check frequency |
| Variability | High (real world) | Low (controlled) |
| Geographic | Where users are | Where you configure |
| Timing | After deployment | Before/after |
| Use Case | Real performance | Baseline, SLA monitoring |

**RUM Implementation (DataDog Example):**

\`\`\`tsx
// src/lib/rum.ts
import { datadogRum } from '@datadog/browser-rum';

export function initRUM() {
  if (typeof window === 'undefined') return;

  datadogRum.init({
    applicationId: import.meta.env.VITE_DD_APP_ID,
    clientToken: import.meta.env.VITE_DD_CLIENT_TOKEN,
    site: 'datadoghq.com',
    service: 'my-react-app',
    env: import.meta.env.MODE,
    version: import.meta.env.VITE_APP_VERSION,

    // Sampling
    sessionSampleRate: 100, // 100% of sessions
    sessionReplaySampleRate: 20, // 20% get session replay

    // What to track
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    trackFrustrations: true, // Rage clicks, dead clicks, error clicks

    // Privacy
    defaultPrivacyLevel: 'mask-user-input',

    // Custom context
    beforeSend: (event) => {
      // Add custom attributes
      event.context = {
        ...event.context,
        userPlan: getUserPlan(),
        abTestGroup: getABTestGroup(),
      };
      return true;
    },
  });
}

// Set user context when logged in
export function setRUMUser(user: User | null) {
  if (user) {
    datadogRum.setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      plan: user.plan,
    });
  } else {
    datadogRum.clearUser();
  }
}

// Track custom actions
export function trackAction(name: string, context?: Record<string, unknown>) {
  datadogRum.addAction(name, context);
}

// Track errors with context
export function trackError(error: Error, context?: Record<string, unknown>) {
  datadogRum.addError(error, context);
}
\`\`\`

**Session Replay Configuration:**

\`\`\`tsx
// Session replay captures user sessions for debugging
datadogRum.init({
  // ... other config
  sessionReplaySampleRate: 20, // 20% of sessions

  // Privacy settings for session replay
  defaultPrivacyLevel: 'mask', // mask | allow | mask-user-input

  // Advanced privacy rules
  beforeSend: (event, context) => {
    // Don't record sessions on sensitive pages
    if (window.location.pathname.includes('/admin')) {
      return false;
    }

    // Mask specific elements
    if (event.type === 'view') {
      event.view.custom = {
        sensitivePageViewed: isSensitivePage(),
      };
    }

    return true;
  },
});

// Start recording manually for specific flows
function CheckoutFlow() {
  useEffect(() => {
    // Ensure this checkout session is recorded
    datadogRum.startSessionReplayRecording();

    return () => {
      datadogRum.stopSessionReplayRecording();
    };
  }, []);

  return <CheckoutSteps />;
}
\`\`\`

**Custom RUM Views and Actions:**

\`\`\`tsx
// Track SPA navigation as views
import { useLocation } from 'react-router-dom';

function RUMRouter() {
  const location = useLocation();

  useEffect(() => {
    // Custom view tracking for React Router
    datadogRum.startView({
      name: getViewName(location.pathname),
      service: 'my-app',
      version: import.meta.env.VITE_APP_VERSION,
    });
  }, [location.pathname]);

  return null;
}

// Map routes to readable view names
function getViewName(pathname: string): string {
  const routes: Record<string, string> = {
    '/': 'Home',
    '/products': 'Product Listing',
    '/cart': 'Shopping Cart',
    '/checkout': 'Checkout',
  };

  // Handle dynamic routes
  if (pathname.startsWith('/products/')) {
    return 'Product Detail';
  }
  if (pathname.startsWith('/orders/')) {
    return 'Order Detail';
  }

  return routes[pathname] || pathname;
}

// Track user interactions
function AddToCartButton({ product }) {
  const handleClick = () => {
    datadogRum.addAction('add_to_cart', {
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      category: product.category,
    });

    addToCart(product);
  };

  return <button onClick={handleClick}>Add to Cart</button>;
}
\`\`\`

**Synthetic Monitoring Setup (Playwright Example):**

\`\`\`typescript
// tests/synthetic/checkout-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Checkout Flow - Synthetic Monitoring', () => {
  test('complete checkout flow', async ({ page }) => {
    // Start timing
    const startTime = Date.now();

    // Navigate to product
    await page.goto('/products/featured-item');
    await expect(page.locator('h1')).toContainText('Featured Item');

    const productLoadTime = Date.now() - startTime;
    console.log(\`Product page load: \${productLoadTime}ms\`);

    // Add to cart
    const addToCartStart = Date.now();
    await page.click('[data-testid="add-to-cart"]');
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');
    console.log(\`Add to cart: \${Date.now() - addToCartStart}ms\`);

    // Go to checkout
    await page.click('[data-testid="go-to-checkout"]');
    await expect(page).toHaveURL('/checkout');

    // Fill shipping
    await page.fill('#email', 'test@example.com');
    await page.fill('#address', '123 Test St');
    await page.click('[data-testid="continue-to-payment"]');

    // Fill payment
    await page.fill('#card-number', '4242424242424242');
    await page.fill('#expiry', '12/30');
    await page.fill('#cvv', '123');

    // Complete order
    const orderStart = Date.now();
    await page.click('[data-testid="place-order"]');
    await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible();

    const totalTime = Date.now() - startTime;
    console.log(\`Order placement: \${Date.now() - orderStart}ms\`);
    console.log(\`Total checkout flow: \${totalTime}ms\`);

    // Assert performance thresholds
    expect(totalTime).toBeLessThan(30000); // 30 seconds max
  });
});
\`\`\`

**CI Integration for Synthetic Monitoring:**

\`\`\`yaml
# .github/workflows/synthetic.yml
name: Synthetic Monitoring

on:
  schedule:
    - cron: '*/15 * * * *' # Every 15 minutes
  workflow_dispatch: # Manual trigger

jobs:
  synthetic-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        region: [us-east, eu-west, ap-southeast]

    steps:
      - uses: actions/checkout@v4

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run synthetic tests
        run: npx playwright test tests/synthetic/
        env:
          BASE_URL: https://app.example.com
          REGION: \${{ matrix.region }}

      - name: Report to monitoring
        if: always()
        run: |
          curl -X POST \${{ secrets.METRICS_ENDPOINT }} \\
            -H "Content-Type: application/json" \\
            -d '{
              "test": "checkout_flow",
              "region": "\${{ matrix.region }}",
              "status": "\${{ job.status }}",
              "duration": "\${{ steps.test.outputs.duration }}"
            }'
\`\`\`

**Correlating RUM with Backend Traces:**

\`\`\`tsx
// Add trace context to API calls
async function fetchWithTracing(url: string, options?: RequestInit) {
  // Get current RUM context
  const rumContext = datadogRum.getInternalContext();

  const headers = new Headers(options?.headers);

  // Add trace headers for distributed tracing
  if (rumContext) {
    headers.set('x-datadog-trace-id', rumContext.session_id);
    headers.set('x-datadog-parent-id', rumContext.view?.id || '');
  }

  return fetch(url, { ...options, headers });
}

// React Query with tracing
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetchWithTracing(\`/api/\${queryKey.join('/')}\`);
        return response.json();
      },
    },
  },
});
\`\`\`

**When to Use Each:**

| Scenario | Use RUM | Use Synthetic |
|----------|---------|---------------|
| Overall user experience | ✅ | - |
| SLA compliance monitoring | - | ✅ |
| Detecting regional issues | ✅ | ✅ |
| Pre-deployment validation | - | ✅ |
| Real device/browser bugs | ✅ | - |
| Alerting on downtime | - | ✅ |
| Identifying slow pages | ✅ | - |
| Load time benchmarks | - | ✅ |
| Session replay debugging | ✅ | - |

**Senior insight:** Use RUM to understand real user experience and identify issues you'd never find in controlled tests—slow 3G networks in rural areas, old Android devices, browser extensions causing issues. Use synthetic for SLA monitoring, baseline comparisons, and catching regressions before users do. Correlate both with backend APM using distributed tracing to debug full-stack latency issues.

---

### Q: How do you set up frontend alerting without causing alert fatigue?

**Answer:**

Effective alerting catches real issues while avoiding noise that trains teams to ignore alerts. The key is meaningful thresholds, proper grouping, and actionable alerts.

**Alert Design Principles:**

\`\`\`yaml
# Good alert criteria:
# 1. Actionable - Someone can do something about it
# 2. Urgent - Needs attention soon
# 3. Relevant - Affects users or business
# 4. Clear - Easy to understand and investigate

# Bad alerts:
# - "Error occurred" (too vague)
# - Every 4xx response (often user error)
# - Low traffic at 3am (expected)
\`\`\`

**Error Rate Alerting:**

\`\`\`typescript
// Define meaningful error thresholds

interface AlertConfig {
  metric: string;
  condition: 'above' | 'below';
  threshold: number;
  duration: string; // How long condition must persist
  severity: 'critical' | 'warning' | 'info';
  notify: string[]; // Channels to notify
}

const alerts: AlertConfig[] = [
  {
    // Critical: High error rate affecting many users
    metric: 'error_rate',
    condition: 'above',
    threshold: 0.05, // 5% of requests
    duration: '5m', // Sustained for 5 minutes
    severity: 'critical',
    notify: ['pagerduty', 'slack-oncall'],
  },
  {
    // Warning: Elevated errors, investigate soon
    metric: 'error_rate',
    condition: 'above',
    threshold: 0.02, // 2% of requests
    duration: '15m', // Sustained for 15 minutes
    severity: 'warning',
    notify: ['slack-engineering'],
  },
  {
    // Critical: Key user flow completely broken
    metric: 'checkout_success_rate',
    condition: 'below',
    threshold: 0.90, // Below 90% success
    duration: '5m',
    severity: 'critical',
    notify: ['pagerduty', 'slack-oncall'],
  },
];
\`\`\`

**DataDog Monitor Configuration:**

\`\`\`typescript
// Using DataDog API to create monitors programmatically
import { client, v1 } from '@datadog/datadog-api-client';

const configuration = client.createConfiguration();
const monitorsApi = new v1.MonitorsApi(configuration);

// Error rate monitor
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] High Error Rate',
    type: 'query alert',
    query: \`
      sum(last_5m):
        sum:frontend.errors{env:production}.as_count() /
        sum:frontend.requests{env:production}.as_count()
      > 0.05
    \`,
    message: \`
## High Frontend Error Rate

Error rate has exceeded 5% for the past 5 minutes.

### Quick Investigation
1. Check recent deployments: [Deployment Dashboard](link)
2. Review error details: [Sentry](link)
3. Check backend health: [Backend Dashboard](link)

### Contacts
- On-call: @pagerduty
- Team: @slack-frontend-team

{{#is_alert}}
@pagerduty-frontend-oncall
{{/is_alert}}
{{#is_warning}}
@slack-engineering
{{/is_warning}}
    \`,
    tags: ['team:frontend', 'env:production'],
    options: {
      thresholds: {
        critical: 0.05,
        warning: 0.02,
      },
      notifyAudit: true,
      includeTags: true,
      // Don't alert for low traffic periods
      newHostDelay: 300,
      requireFullWindow: true,
      // Re-notify every hour if still alerting
      renotifyInterval: 60,
    },
  },
});
\`\`\`

**Composite Alerts (Reduce Noise):**

\`\`\`typescript
// Alert only when multiple conditions are true
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] Checkout Flow Degraded',
    type: 'composite',
    query: \`
      \${errorRateMonitorId} &&
      \${latencyMonitorId} &&
      \${trafficMonitorId}
    \`,
    message: \`
## Checkout Flow Degraded

Multiple indicators showing checkout issues:
- Error rate elevated
- Latency increased
- Traffic still normal (not a traffic dip)

This is likely a real issue, not a false positive.
    \`,
  },
});
\`\`\`

**Anomaly Detection (Avoid Static Thresholds):**

\`\`\`typescript
// Detect when metrics deviate from normal patterns
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] Abnormal Error Rate',
    type: 'query alert',
    query: \`
      avg(last_1h):anomalies(
        sum:frontend.errors{env:production}.as_count(),
        'agile',
        3,
        direction='above'
      ) >= 1
    \`,
    message: \`
## Abnormal Error Pattern Detected

Error rate is significantly higher than normal for this time period.

This accounts for:
- Time of day variations
- Day of week patterns
- Seasonal trends

[View anomaly details](link)
    \`,
    options: {
      thresholds: {
        critical: 1,
      },
      thresholdWindows: {
        recoveryWindow: 'last_15m',
        triggerWindow: 'last_1h',
      },
    },
  },
});
\`\`\`

**Alert Grouping and Deduplication:**

\`\`\`typescript
// Group related alerts to avoid spam

const sentryAlertRules = {
  // Group by error type, not individual occurrences
  grouping: {
    strategy: 'fingerprint',
    fields: ['exception.type', 'exception.message', 'url'],
  },

  // Threshold before alerting
  triggers: [
    {
      // Alert when new issue affects >100 users
      type: 'threshold',
      metric: 'users_affected',
      threshold: 100,
      timeWindow: '1h',
    },
    {
      // Alert when error rate spikes
      type: 'percent_change',
      metric: 'event_count',
      threshold: 200, // 200% increase
      comparisonWindow: '24h',
    },
  ],
};
\`\`\`

**Runbook Integration:**

\`\`\`typescript
// Every alert should have a runbook

interface AlertRunbook {
  alertName: string;
  description: string;
  severity: string;
  symptoms: string[];
  investigation: Step[];
  mitigation: Step[];
  escalation: Contact[];
}

const checkoutErrorRunbook: AlertRunbook = {
  alertName: 'Checkout Error Rate High',
  description: 'Checkout completion rate has dropped below threshold',
  severity: 'critical',

  symptoms: [
    'Users unable to complete purchases',
    'Error toasts appearing during checkout',
    'Increased support tickets about payment failures',
  ],

  investigation: [
    {
      title: 'Check recent deployments',
      action: 'Review [deployment dashboard](link) for recent changes',
      expectedOutcome: 'Identify if deployment correlates with error spike',
    },
    {
      title: 'Review error details',
      action: 'Check [Sentry](link) for error stacktraces',
      expectedOutcome: 'Identify root cause (API, validation, etc)',
    },
    {
      title: 'Check payment provider status',
      action: 'Visit [Stripe Status](status.stripe.com)',
      expectedOutcome: 'Confirm if third-party issue',
    },
    {
      title: 'Check backend health',
      action: 'Review [Backend APM](link)',
      expectedOutcome: 'Identify if backend latency/errors causing issues',
    },
  ],

  mitigation: [
    {
      title: 'Rollback if deployment-related',
      action: 'Run: ./scripts/rollback.sh',
      expectedOutcome: 'Return to last known good version',
    },
    {
      title: 'Enable maintenance mode',
      action: 'Set MAINTENANCE_MODE=true in config',
      expectedOutcome: 'Show friendly message, prevent partial orders',
    },
  ],

  escalation: [
    { name: 'Frontend On-Call', contact: '@frontend-oncall' },
    { name: 'Backend On-Call', contact: '@backend-oncall' },
    { name: 'Engineering Manager', contact: '@eng-manager' },
  ],
};
\`\`\`

**SLO-Based Alerting:**

\`\`\`typescript
// Alert based on Service Level Objectives, not arbitrary thresholds

const sloConfig = {
  name: 'Frontend Availability',
  target: 99.9, // 99.9% availability
  window: '30d', // Rolling 30-day window

  // Good events = successful page loads
  goodEvents: 'sum:frontend.page_loads{status:success}',
  // Total events = all page loads
  totalEvents: 'sum:frontend.page_loads{*}',

  alerts: [
    {
      // Alert when burning error budget too fast
      name: 'Error Budget Burn Rate - Fast',
      condition: 'burn_rate > 14.4', // 14.4x = budget exhausted in 2 hours
      window: '1h',
      severity: 'critical',
    },
    {
      // Slower burn rate, less urgent
      name: 'Error Budget Burn Rate - Slow',
      condition: 'burn_rate > 6',
      window: '6h',
      severity: 'warning',
    },
    {
      // Approaching budget limit
      name: 'Error Budget Low',
      condition: 'remaining_budget < 20%',
      severity: 'warning',
    },
  ],
};
\`\`\`

**Alert Lifecycle Management:**

\`\`\`typescript
// Implement alert hygiene practices

const alertHygieneChecklist = {
  weekly: [
    'Review alerts that fired but had no action taken',
    'Identify alerts with >10% false positive rate',
    'Check for alerts that never fire (dead alerts)',
  ],

  monthly: [
    'Review on-call burden - too many alerts?',
    'Tune thresholds based on actual incidents',
    'Archive alerts for decommissioned features',
  ],

  quarterly: [
    'Comprehensive alert audit',
    'Update runbooks with lessons learned',
    'Review SLO targets based on business needs',
  ],
};
\`\`\`

**Senior insight:** The best alerting philosophy is "alert on symptoms, not causes." Alert when users are affected (high error rate, slow checkout), not on internal metrics (high CPU, database connections). Use error budgets and burn rates for SLO-based alerting—they naturally account for acceptable error levels. Every alert should have a clear runbook; if you can't write one, the alert probably isn't actionable. Schedule regular alert review sessions to eliminate noise—teams that ignore alerts miss real incidents.`,ly=`## 17. Additional System Design Questions

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
`,uy=[Gg,Wg,Kg,Yg,Xg,$g,Zg,Jg,ey,ny,ty,ay,ry,sy,oy,iy,ly,cy].join(`

`),_s=Hg(uy),Ls=Vg(_s);Qg(_s);const xa={status:"not_started",timesReviewed:0,bookmarked:!1},dy={theme:"system",showAnswersByDefault:!1,enableKeyboardShortcuts:!0},$f={status:"all",category:"all",bookmarked:!1,searchQuery:""};function py(l,o){switch(o.type){case"SET_STATUS":{const u=l.progress[o.questionId]||xa;return{...l,progress:{...l.progress,[o.questionId]:{...u,status:o.status,lastStudied:Date.now(),timesReviewed:u.timesReviewed+1}}}}case"TOGGLE_BOOKMARK":{const u=l.progress[o.questionId]||xa;return{...l,progress:{...l.progress,[o.questionId]:{...u,bookmarked:!u.bookmarked}}}}case"TOGGLE_EXPANDED":{const u=new Set(l.expandedQuestions);return u.has(o.questionId)?u.delete(o.questionId):u.add(o.questionId),{...l,expandedQuestions:u}}case"EXPAND_ALL":return{...l,expandedQuestions:new Set(Ls.map(u=>u.id))};case"COLLAPSE_ALL":return{...l,expandedQuestions:new Set};case"SET_NOTES":{const u=l.progress[o.questionId]||xa;return{...l,progress:{...l.progress,[o.questionId]:{...u,notes:o.notes}}}}case"SET_FILTER":return{...l,filters:{...l.filters,...o.filter}};case"CLEAR_FILTERS":return{...l,filters:$f};case"SET_SEARCH":return{...l,filters:{...l.filters,searchQuery:o.query}};case"SET_CURRENT_QUESTION":return{...l,currentQuestionId:o.questionId};case"SET_SETTING":return{...l,settings:{...l.settings,...o.setting}};case"IMPORT_PROGRESS":return{...l,progress:o.data};case"RESET_PROGRESS":return{...l,progress:{}};case"RESET_CATEGORY":{const u={...l.progress},c=_s.find(d=>d.id===o.categoryId);return c&&c.questions.forEach(d=>{delete u[d.id]}),{...l,progress:u}}case"LOAD_PROGRESS":return{...l,progress:o.progress};default:return l}}const Zf=fe.createContext(null);function fy({children:l}){const[o,u]=Uc("study-progress",{}),[c,d]=Uc("study-settings",dy),h={progress:o,settings:c,filters:$f,expandedQuestions:new Set,currentQuestionId:null},[m,k]=fe.useReducer(py,h);fe.useEffect(()=>{u(m.progress)},[m.progress,u]),fe.useEffect(()=>{d(m.settings)},[m.settings,d]);const b=(G,ie)=>{k({type:"SET_STATUS",questionId:G,status:ie})},v=G=>{k({type:"TOGGLE_BOOKMARK",questionId:G})},R=G=>{k({type:"TOGGLE_EXPANDED",questionId:G})},U=G=>{k({type:"SET_SEARCH",query:G})},D=G=>{k({type:"SET_FILTER",filter:G})},Q=G=>m.progress[G]||xa,z=G=>m.expandedQuestions.has(G),K=fe.useMemo(()=>{let G=[...Ls];if(m.filters.category!=="all"&&(G=G.filter(ie=>ie.categoryId===m.filters.category)),m.filters.status!=="all"&&(G=G.filter(ie=>(m.progress[ie.id]||xa).status===m.filters.status)),m.filters.bookmarked&&(G=G.filter(ie=>(m.progress[ie.id]||xa).bookmarked)),m.filters.searchQuery.trim()){const ie=m.filters.searchQuery.toLowerCase();G=G.filter(oe=>oe.question.toLowerCase().includes(ie)||oe.answer.toLowerCase().includes(ie)||oe.categoryName.toLowerCase().includes(ie))}return G},[m.filters,m.progress]),Ee=fe.useMemo(()=>{const G=Ls.length;let ie=0,oe=0,ye=0,te=0,Te=0;return Ls.forEach(Ye=>{const en=m.progress[Ye.id]||xa;switch(en.status){case"not_started":ie++;break;case"studied":oe++;break;case"needs_review":ye++;break;case"mastered":te++;break}en.bookmarked&&Te++}),{total:G,notStarted:ie,studied:oe,needsReview:ye,mastered:te,bookmarked:Te}},[m.progress]),Oe=fe.useMemo(()=>_s.map(G=>{const ie=G.questions;let oe=0,ye=0,te=0,Te=0,Ye=0;return ie.forEach(en=>{const Ze=m.progress[en.id]||xa;switch(Ze.status){case"not_started":oe++;break;case"studied":ye++;break;case"needs_review":te++;break;case"mastered":Te++;break}Ze.bookmarked&&Ye++}),{categoryId:G.id,categoryName:G.name,total:ie.length,notStarted:oe,studied:ye,needsReview:te,mastered:Te,bookmarked:Ye}}),[m.progress]),Ce={state:m,dispatch:k,setStatus:b,toggleBookmark:v,toggleExpanded:R,setSearch:U,setFilter:D,getProgress:Q,isExpanded:z,filteredQuestions:K,stats:Ee,categoryStats:Oe,categories:_s,allQuestions:Ls};return f.jsx(Zf.Provider,{value:Ce,children:l})}function Ga(){const l=fe.useContext(Zf);if(!l)throw new Error("useStudy must be used within a StudyProvider");return l}const Jf=fe.createContext(null);function my({children:l}){const[o,u]=Uc("theme","system"),c=o==="dark"?!0:o==="light"?!1:typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1;return fe.useEffect(()=>{const d=document.documentElement;c?d.classList.add("dark"):d.classList.remove("dark")},[c]),fe.useEffect(()=>{if(o!=="system")return;const d=window.matchMedia("(prefers-color-scheme: dark)"),h=m=>{const k=document.documentElement;m.matches?k.classList.add("dark"):k.classList.remove("dark")};return d.addEventListener("change",h),()=>d.removeEventListener("change",h)},[o]),f.jsx(Jf.Provider,{value:{theme:o,setTheme:u,isDark:c},children:l})}function em(){const l=fe.useContext(Jf);if(!l)throw new Error("useTheme must be used within a ThemeProvider");return l}const nm=(...l)=>l.filter((o,u,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===u).join(" ").trim();const hy=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const gy=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,c)=>c?c.toUpperCase():u.toLowerCase());const Hf=l=>{const o=gy(l);return o.charAt(0).toUpperCase()+o.slice(1)};var yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const by=l=>{for(const o in l)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};const vy=fe.forwardRef(({color:l="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:d="",children:h,iconNode:m,...k},b)=>fe.createElement("svg",{ref:b,...yy,width:o,height:o,stroke:l,strokeWidth:c?Number(u)*24/Number(o):u,className:nm("lucide",d),...!h&&!by(k)&&{"aria-hidden":"true"},...k},[...m.map(([v,R])=>fe.createElement(v,R)),...Array.isArray(h)?h:[h]]));const Ve=(l,o)=>{const u=fe.forwardRef(({className:c,...d},h)=>fe.createElement(vy,{ref:h,iconNode:o,className:nm(`lucide-${hy(Hf(l))}`,`lucide-${l}`,c),...d}));return u.displayName=Hf(l),u};const xy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ff=Ve("book-open",xy);const Sy=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],zc=Ve("bookmark",Sy);const wy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ky=Ve("chart-column",wy);const Cy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ty=Ve("check",Cy);const Ry=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hc=Ve("chevron-down",Ry);const Ey=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Pc=Ve("chevron-right",Ey);const Ay=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],My=Ve("chevron-up",Ay);const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],di=Ve("circle-check",Dy);const Ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fc=Ve("circle",Ny);const Iy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zs=Ve("clock",Iy);const Oy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uy=Ve("download",Oy);const Py=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],tm=Ve("funnel",Py);const Ly=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],jy=Ve("keyboard",Ly);const By=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],_y=Ve("menu",By);const zy=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Hy=Ve("monitor",zy);const Fy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],qy=Ve("moon",Fy);const Qy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Vy=Ve("rotate-ccw",Qy);const Gy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],am=Ve("search",Gy);const Wy=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Ky=Ve("shuffle",Wy);const Yy=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Xy=Ve("skip-forward",Yy);const $y=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pi=Ve("star",$y);const Zy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Jy=Ve("sun",Zy);const eb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],nb=Ve("trash-2",eb);const tb=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ab=Ve("trophy",tb);const rb=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],sb=Ve("upload",rb);const ob=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yi=Ve("x",ob);function ib({onOpenStats:l,onOpenShortcuts:o,onStartQuiz:u}){const{state:c,setSearch:d,stats:h}=Ga(),{theme:m,setTheme:k,isDark:b}=em(),v=Math.round((h.studied+h.mastered)/h.total*100),R=()=>{const D=["light","dark","system"],z=(D.indexOf(m)+1)%D.length;k(D[z])},U=m==="system"?Hy:b?qy:Jy;return f.jsx("header",{className:"sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700",children:f.jsxs("div",{className:"flex items-center justify-between px-4 py-3 gap-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-blue-500 rounded-lg",children:f.jsx(Ff,{className:"w-5 h-5 text-white"})}),f.jsxs("div",{className:"hidden sm:block",children:[f.jsx("h1",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"React Interview Prep"}),f.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[h.mastered+h.studied,"/",h.total," completed (",v,"%)"]})]})]}),f.jsx("div",{className:"flex-1 max-w-xl",children:f.jsxs("div",{className:"relative",children:[f.jsx(am,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",placeholder:"Search questions... (Press / to focus)",value:c.filters.searchQuery,onChange:D=>d(D.target.value),className:"input pl-10",id:"search-input"})]})}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:u,className:"btn btn-primary hidden sm:flex items-center gap-2",children:[f.jsx(Ff,{className:"w-4 h-4"}),f.jsx("span",{children:"Quiz"})]}),f.jsx("button",{onClick:l,className:"btn btn-ghost p-2",title:"View Statistics",children:f.jsx(ky,{className:"w-5 h-5"})}),f.jsx("button",{onClick:o,className:"btn btn-ghost p-2 hidden sm:flex",title:"Keyboard Shortcuts",children:f.jsx(jy,{className:"w-5 h-5"})}),f.jsx("button",{onClick:R,className:"btn btn-ghost p-2",title:`Theme: ${m}`,children:f.jsx(U,{className:"w-5 h-5"})})]})]})})}function lb({isOpen:l,onClose:o}){const{state:u,setFilter:c,categoryStats:d,stats:h}=Ga(),{filters:m}=u,k=[{value:"all",label:"All Questions",icon:f.jsx(tm,{className:"w-4 h-4"}),color:""},{value:"not_started",label:"Not Started",icon:f.jsx(Fc,{className:"w-4 h-4"}),color:"text-gray-500"},{value:"studied",label:"Studied",icon:f.jsx(di,{className:"w-4 h-4"}),color:"text-blue-500"},{value:"needs_review",label:"Needs Review",icon:f.jsx(zs,{className:"w-4 h-4"}),color:"text-amber-500"},{value:"mastered",label:"Mastered",icon:f.jsx(pi,{className:"w-4 h-4"}),color:"text-green-500"}],b=v=>{if(v==="all")return h.total;switch(v){case"not_started":return h.notStarted;case"studied":return h.studied;case"needs_review":return h.needsReview;case"mastered":return h.mastered}};return f.jsxs(f.Fragment,{children:[l&&f.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:o}),f.jsxs("aside",{className:`
          fixed lg:sticky top-0 left-0 z-50 lg:z-0
          h-screen w-72 lg:w-64
          bg-white dark:bg-slate-800
          border-r border-gray-200 dark:border-slate-700
          transform transition-transform duration-300
          ${l?"translate-x-0":"-translate-x-full lg:translate-x-0"}
          overflow-y-auto
          pt-4 lg:pt-20
        `,children:[f.jsx("button",{onClick:o,className:"lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:f.jsx(yi,{className:"w-5 h-5"})}),f.jsxs("div",{className:"px-4 pb-4",children:[f.jsxs("div",{className:"mb-6",children:[f.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Filter by Status"}),f.jsx("div",{className:"space-y-1",children:k.map(v=>f.jsxs("button",{onClick:()=>c({status:v.value}),className:`
                    w-full sidebar-item
                    ${m.status===v.value?"active":""}
                    ${v.color}
                  `,children:[v.icon,f.jsx("span",{className:"flex-1 text-left text-sm",children:v.label}),f.jsx("span",{className:"text-xs text-gray-400",children:b(v.value)})]},v.value))})]}),f.jsx("div",{className:"mb-6",children:f.jsxs("button",{onClick:()=>c({bookmarked:!m.bookmarked}),className:`
                w-full sidebar-item
                ${m.bookmarked?"active":""}
              `,children:[f.jsx(zc,{className:`w-4 h-4 ${m.bookmarked?"fill-current":""}`}),f.jsx("span",{className:"flex-1 text-left text-sm",children:"Bookmarked"}),f.jsx("span",{className:"text-xs text-gray-400",children:h.bookmarked})]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2",children:"Categories"}),f.jsxs("div",{className:"space-y-1",children:[f.jsxs("button",{onClick:()=>c({category:"all"}),className:`
                  w-full sidebar-item
                  ${m.category==="all"?"active":""}
                `,children:[f.jsx(Pc,{className:"w-4 h-4"}),f.jsx("span",{className:"flex-1 text-left text-sm",children:"All Categories"}),f.jsx("span",{className:"text-xs text-gray-400",children:h.total})]}),d.map(v=>{const R=m.category===v.categoryId,U=v.studied+v.mastered,D=Math.round(U/v.total*100);return f.jsxs("button",{onClick:()=>c({category:v.categoryId}),className:`
                      w-full sidebar-item group
                      ${R?"active":""}
                    `,children:[f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[R?f.jsx(Hc,{className:"w-4 h-4 flex-shrink-0"}):f.jsx(Pc,{className:"w-4 h-4 flex-shrink-0"}),f.jsx("span",{className:"text-sm truncate",children:v.categoryName})]}),f.jsx("div",{className:"ml-6 mt-1",children:f.jsx("div",{className:"h-1 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-green-500 rounded-full transition-all duration-300",style:{width:`${D}%`}})})})]}),f.jsxs("span",{className:"text-xs text-gray-400 flex-shrink-0",children:[U,"/",v.total]})]},v.categoryId)})]})]})]})]})]})}function cb({children:l,onOpenStats:o,onOpenShortcuts:u,onStartQuiz:c}){const[d,h]=fe.useState(!1);return f.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900",children:[f.jsx(ib,{onOpenStats:o,onOpenShortcuts:u,onStartQuiz:c}),f.jsxs("div",{className:"flex",children:[f.jsx("button",{onClick:()=>h(!0),className:"lg:hidden fixed bottom-4 left-4 z-30 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors",children:f.jsx(_y,{className:"w-6 h-6"})}),f.jsx(lb,{isOpen:d,onClose:()=>h(!1)}),f.jsx("main",{className:"flex-1 min-h-[calc(100vh-64px)] p-4 lg:p-6",children:l})]})]})}function qc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Wa=qc();function rm(l){Wa=l}var Bs={exec:()=>null};function Ne(l,o=""){let u=typeof l=="string"?l:l.source,c={replace:(d,h)=>{let m=typeof h=="string"?h:h.source;return m=m.replace(Ln.caret,"$1"),u=u.replace(d,m),c},getRegex:()=>new RegExp(u,o)};return c}var ub=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ln={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i")},db=/^(?:[ \t]*(?:\n|$))+/,pb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,fb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Hs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qc=/(?:[*+-]|\d{1,9}[.)])/,sm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,om=Ne(sm).replace(/bull/g,Qc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hb=Ne(sm).replace(/bull/g,Qc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Vc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gb=/^[^\n]+/,Gc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,yb=Ne(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Gc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bb=Ne(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qc).getRegex(),bi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vb=Ne("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wc).replace("tag",bi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),im=Ne(Vc).replace("hr",Hs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bi).getRegex(),xb=Ne(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",im).getRegex(),Kc={blockquote:xb,code:pb,def:yb,fences:fb,heading:mb,hr:Hs,html:vb,lheading:om,list:bb,newline:db,paragraph:im,table:Bs,text:gb},qf=Ne("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Hs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bi).getRegex(),Sb={...Kc,lheading:hb,table:qf,paragraph:Ne(Vc).replace("hr",Hs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",qf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bi).getRegex()},wb={...Kc,html:Ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Bs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ne(Vc).replace("hr",Hs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",om).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},kb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Cb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lm=/^( {2,}|\\)\n(?!\s*$)/,Tb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vi=/[\p{P}\p{S}]/u,Yc=/[\s\p{P}\p{S}]/u,cm=/[^\s\p{P}\p{S}]/u,Rb=Ne(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Yc).getRegex(),um=/(?!~)[\p{P}\p{S}]/u,Eb=/(?!~)[\s\p{P}\p{S}]/u,Ab=/(?:[^\s\p{P}\p{S}]|~)/u,Mb=Ne(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ub?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),dm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Db=Ne(dm,"u").replace(/punct/g,vi).getRegex(),Nb=Ne(dm,"u").replace(/punct/g,um).getRegex(),pm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ib=Ne(pm,"gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,Yc).replace(/punct/g,vi).getRegex(),Ob=Ne(pm,"gu").replace(/notPunctSpace/g,Ab).replace(/punctSpace/g,Eb).replace(/punct/g,um).getRegex(),Ub=Ne("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,cm).replace(/punctSpace/g,Yc).replace(/punct/g,vi).getRegex(),Pb=Ne(/\\(punct)/,"gu").replace(/punct/g,vi).getRegex(),Lb=Ne(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),jb=Ne(Wc).replace("(?:-->|$)","-->").getRegex(),Bb=Ne("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",jb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,_b=Ne(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",fi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fm=Ne(/^!?\[(label)\]\[(ref)\]/).replace("label",fi).replace("ref",Gc).getRegex(),mm=Ne(/^!?\[(ref)\](?:\[\])?/).replace("ref",Gc).getRegex(),zb=Ne("reflink|nolink(?!\\()","g").replace("reflink",fm).replace("nolink",mm).getRegex(),Qf=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Xc={_backpedal:Bs,anyPunctuation:Pb,autolink:Lb,blockSkip:Mb,br:lm,code:Cb,del:Bs,emStrongLDelim:Db,emStrongRDelimAst:Ib,emStrongRDelimUnd:Ub,escape:kb,link:_b,nolink:mm,punctuation:Rb,reflink:fm,reflinkSearch:zb,tag:Bb,text:Tb,url:Bs},Hb={...Xc,link:Ne(/^!?\[(label)\]\((.*?)\)/).replace("label",fi).getRegex(),reflink:Ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",fi).getRegex()},Lc={...Xc,emStrongRDelimAst:Ob,emStrongLDelim:Nb,url:Ne(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Qf).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ne(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Qf).getRegex()},Fb={...Lc,br:Ne(lm).replace("{2,}","*").getRegex(),text:Ne(Lc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ui={normal:Kc,gfm:Sb,pedantic:wb},Us={normal:Xc,gfm:Lc,breaks:Fb,pedantic:Hb},qb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vf=l=>qb[l];function Vt(l,o){if(o){if(Ln.escapeTest.test(l))return l.replace(Ln.escapeReplace,Vf)}else if(Ln.escapeTestNoEncode.test(l))return l.replace(Ln.escapeReplaceNoEncode,Vf);return l}function Gf(l){try{l=encodeURI(l).replace(Ln.percentDecode,"%")}catch{return null}return l}function Wf(l,o){let u=l.replace(Ln.findPipe,(h,m,k)=>{let b=!1,v=m;for(;--v>=0&&k[v]==="\\";)b=!b;return b?"|":" |"}),c=u.split(Ln.splitPipe),d=0;if(c[0].trim()||c.shift(),c.length>0&&!c.at(-1)?.trim()&&c.pop(),o)if(c.length>o)c.splice(o);else for(;c.length<o;)c.push("");for(;d<c.length;d++)c[d]=c[d].trim().replace(Ln.slashPipe,"|");return c}function Ps(l,o,u){let c=l.length;if(c===0)return"";let d=0;for(;d<c&&l.charAt(c-d-1)===o;)d++;return l.slice(0,c-d)}function Qb(l,o){if(l.indexOf(o[1])===-1)return-1;let u=0;for(let c=0;c<l.length;c++)if(l[c]==="\\")c++;else if(l[c]===o[0])u++;else if(l[c]===o[1]&&(u--,u<0))return c;return u>0?-2:-1}function Kf(l,o,u,c,d){let h=o.href,m=o.title||null,k=l[1].replace(d.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:l[0].charAt(0)==="!"?"image":"link",raw:u,href:h,title:m,text:k,tokens:c.inlineTokens(k)};return c.state.inLink=!1,b}function Vb(l,o,u){let c=l.match(u.other.indentCodeCompensation);if(c===null)return o;let d=c[1];return o.split(`
`).map(h=>{let m=h.match(u.other.beginningSpace);if(m===null)return h;let[k]=m;return k.length>=d.length?h.slice(d.length):h}).join(`
`)}var mi=class{options;rules;lexer;constructor(l){this.options=l||Wa}space(l){let o=this.rules.block.newline.exec(l);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(l){let o=this.rules.block.code.exec(l);if(o){let u=o[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?u:Ps(u,`
`)}}}fences(l){let o=this.rules.block.fences.exec(l);if(o){let u=o[0],c=Vb(u,o[3]||"",this.rules);return{type:"code",raw:u,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:c}}}heading(l){let o=this.rules.block.heading.exec(l);if(o){let u=o[2].trim();if(this.rules.other.endingHash.test(u)){let c=Ps(u,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(u=c.trim())}return{type:"heading",raw:o[0],depth:o[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(l){let o=this.rules.block.hr.exec(l);if(o)return{type:"hr",raw:Ps(o[0],`
`)}}blockquote(l){let o=this.rules.block.blockquote.exec(l);if(o){let u=Ps(o[0],`
`).split(`
`),c="",d="",h=[];for(;u.length>0;){let m=!1,k=[],b;for(b=0;b<u.length;b++)if(this.rules.other.blockquoteStart.test(u[b]))k.push(u[b]),m=!0;else if(!m)k.push(u[b]);else break;u=u.slice(b);let v=k.join(`
`),R=v.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${v}`:v,d=d?`${d}
${R}`:R;let U=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,h,!0),this.lexer.state.top=U,u.length===0)break;let D=h.at(-1);if(D?.type==="code")break;if(D?.type==="blockquote"){let Q=D,z=Q.raw+`
`+u.join(`
`),K=this.blockquote(z);h[h.length-1]=K,c=c.substring(0,c.length-Q.raw.length)+K.raw,d=d.substring(0,d.length-Q.text.length)+K.text;break}else if(D?.type==="list"){let Q=D,z=Q.raw+`
`+u.join(`
`),K=this.list(z);h[h.length-1]=K,c=c.substring(0,c.length-D.raw.length)+K.raw,d=d.substring(0,d.length-Q.raw.length)+K.raw,u=z.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:h,text:d}}}list(l){let o=this.rules.block.list.exec(l);if(o){let u=o[1].trim(),c=u.length>1,d={type:"list",raw:"",ordered:c,start:c?+u.slice(0,-1):"",loose:!1,items:[]};u=c?`\\d{1,9}\\${u.slice(-1)}`:`\\${u}`,this.options.pedantic&&(u=c?u:"[*+-]");let h=this.rules.other.listItemRegex(u),m=!1;for(;l;){let b=!1,v="",R="";if(!(o=h.exec(l))||this.rules.block.hr.test(l))break;v=o[0],l=l.substring(v.length);let U=o[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,K=>" ".repeat(3*K.length)),D=l.split(`
`,1)[0],Q=!U.trim(),z=0;if(this.options.pedantic?(z=2,R=U.trimStart()):Q?z=o[1].length+1:(z=o[2].search(this.rules.other.nonSpaceChar),z=z>4?1:z,R=U.slice(z),z+=o[1].length),Q&&this.rules.other.blankLine.test(D)&&(v+=D+`
`,l=l.substring(D.length+1),b=!0),!b){let K=this.rules.other.nextBulletRegex(z),Ee=this.rules.other.hrRegex(z),Oe=this.rules.other.fencesBeginRegex(z),Ce=this.rules.other.headingBeginRegex(z),G=this.rules.other.htmlBeginRegex(z);for(;l;){let ie=l.split(`
`,1)[0],oe;if(D=ie,this.options.pedantic?(D=D.replace(this.rules.other.listReplaceNesting,"  "),oe=D):oe=D.replace(this.rules.other.tabCharGlobal,"    "),Oe.test(D)||Ce.test(D)||G.test(D)||K.test(D)||Ee.test(D))break;if(oe.search(this.rules.other.nonSpaceChar)>=z||!D.trim())R+=`
`+oe.slice(z);else{if(Q||U.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Oe.test(U)||Ce.test(U)||Ee.test(U))break;R+=`
`+D}!Q&&!D.trim()&&(Q=!0),v+=ie+`
`,l=l.substring(ie.length+1),U=oe.slice(z)}}d.loose||(m?d.loose=!0:this.rules.other.doubleBlankLine.test(v)&&(m=!0)),d.items.push({type:"list_item",raw:v,task:!!this.options.gfm&&this.rules.other.listIsTask.test(R),loose:!1,text:R,tokens:[]}),d.raw+=v}let k=d.items.at(-1);if(k)k.raw=k.raw.trimEnd(),k.text=k.text.trimEnd();else return;d.raw=d.raw.trimEnd();for(let b of d.items){if(this.lexer.state.top=!1,b.tokens=this.lexer.blockTokens(b.text,[]),b.task){if(b.text=b.text.replace(this.rules.other.listReplaceTask,""),b.tokens[0]?.type==="text"||b.tokens[0]?.type==="paragraph"){b.tokens[0].raw=b.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),b.tokens[0].text=b.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let R=this.lexer.inlineQueue.length-1;R>=0;R--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[R].src)){this.lexer.inlineQueue[R].src=this.lexer.inlineQueue[R].src.replace(this.rules.other.listReplaceTask,"");break}}let v=this.rules.other.listTaskCheckbox.exec(b.raw);if(v){let R={type:"checkbox",raw:v[0]+" ",checked:v[0]!=="[ ]"};b.checked=R.checked,d.loose?b.tokens[0]&&["paragraph","text"].includes(b.tokens[0].type)&&"tokens"in b.tokens[0]&&b.tokens[0].tokens?(b.tokens[0].raw=R.raw+b.tokens[0].raw,b.tokens[0].text=R.raw+b.tokens[0].text,b.tokens[0].tokens.unshift(R)):b.tokens.unshift({type:"paragraph",raw:R.raw,text:R.raw,tokens:[R]}):b.tokens.unshift(R)}}if(!d.loose){let v=b.tokens.filter(U=>U.type==="space"),R=v.length>0&&v.some(U=>this.rules.other.anyLine.test(U.raw));d.loose=R}}if(d.loose)for(let b of d.items){b.loose=!0;for(let v of b.tokens)v.type==="text"&&(v.type="paragraph")}return d}}html(l){let o=this.rules.block.html.exec(l);if(o)return{type:"html",block:!0,raw:o[0],pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:o[0]}}def(l){let o=this.rules.block.def.exec(l);if(o){let u=o[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=o[2]?o[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",d=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:u,raw:o[0],href:c,title:d}}}table(l){let o=this.rules.block.table.exec(l);if(!o||!this.rules.other.tableDelimiter.test(o[2]))return;let u=Wf(o[1]),c=o[2].replace(this.rules.other.tableAlignChars,"").split("|"),d=o[3]?.trim()?o[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:o[0],header:[],align:[],rows:[]};if(u.length===c.length){for(let m of c)this.rules.other.tableAlignRight.test(m)?h.align.push("right"):this.rules.other.tableAlignCenter.test(m)?h.align.push("center"):this.rules.other.tableAlignLeft.test(m)?h.align.push("left"):h.align.push(null);for(let m=0;m<u.length;m++)h.header.push({text:u[m],tokens:this.lexer.inline(u[m]),header:!0,align:h.align[m]});for(let m of d)h.rows.push(Wf(m,h.header.length).map((k,b)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:h.align[b]})));return h}}lheading(l){let o=this.rules.block.lheading.exec(l);if(o)return{type:"heading",raw:o[0],depth:o[2].charAt(0)==="="?1:2,text:o[1],tokens:this.lexer.inline(o[1])}}paragraph(l){let o=this.rules.block.paragraph.exec(l);if(o){let u=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:u,tokens:this.lexer.inline(u)}}}text(l){let o=this.rules.block.text.exec(l);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(l){let o=this.rules.inline.escape.exec(l);if(o)return{type:"escape",raw:o[0],text:o[1]}}tag(l){let o=this.rules.inline.tag.exec(l);if(o)return!this.lexer.state.inLink&&this.rules.other.startATag.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(l){let o=this.rules.inline.link.exec(l);if(o){let u=o[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(u)){if(!this.rules.other.endAngleBracket.test(u))return;let h=Ps(u.slice(0,-1),"\\");if((u.length-h.length)%2===0)return}else{let h=Qb(o[2],"()");if(h===-2)return;if(h>-1){let m=(o[0].indexOf("!")===0?5:4)+o[1].length+h;o[2]=o[2].substring(0,h),o[0]=o[0].substring(0,m).trim(),o[3]=""}}let c=o[2],d="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(c);h&&(c=h[1],d=h[3])}else d=o[3]?o[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(u)?c=c.slice(1):c=c.slice(1,-1)),Kf(o,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:d&&d.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer,this.rules)}}reflink(l,o){let u;if((u=this.rules.inline.reflink.exec(l))||(u=this.rules.inline.nolink.exec(l))){let c=(u[2]||u[1]).replace(this.rules.other.multipleSpaceGlobal," "),d=o[c.toLowerCase()];if(!d){let h=u[0].charAt(0);return{type:"text",raw:h,text:h}}return Kf(u,d,u[0],this.lexer,this.rules)}}emStrong(l,o,u=""){let c=this.rules.inline.emStrongLDelim.exec(l);if(!(!c||c[3]&&u.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!u||this.rules.inline.punctuation.exec(u))){let d=[...c[0]].length-1,h,m,k=d,b=0,v=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,o=o.slice(-1*l.length+d);(c=v.exec(o))!=null;){if(h=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!h)continue;if(m=[...h].length,c[3]||c[4]){k+=m;continue}else if((c[5]||c[6])&&d%3&&!((d+m)%3)){b+=m;continue}if(k-=m,k>0)continue;m=Math.min(m,m+k+b);let R=[...c[0]][0].length,U=l.slice(0,d+c.index+R+m);if(Math.min(d,m)%2){let Q=U.slice(1,-1);return{type:"em",raw:U,text:Q,tokens:this.lexer.inlineTokens(Q)}}let D=U.slice(2,-2);return{type:"strong",raw:U,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(l){let o=this.rules.inline.code.exec(l);if(o){let u=o[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(u),d=this.rules.other.startingSpaceChar.test(u)&&this.rules.other.endingSpaceChar.test(u);return c&&d&&(u=u.substring(1,u.length-1)),{type:"codespan",raw:o[0],text:u}}}br(l){let o=this.rules.inline.br.exec(l);if(o)return{type:"br",raw:o[0]}}del(l){let o=this.rules.inline.del.exec(l);if(o)return{type:"del",raw:o[0],text:o[2],tokens:this.lexer.inlineTokens(o[2])}}autolink(l){let o=this.rules.inline.autolink.exec(l);if(o){let u,c;return o[2]==="@"?(u=o[1],c="mailto:"+u):(u=o[1],c=u),{type:"link",raw:o[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}url(l){let o;if(o=this.rules.inline.url.exec(l)){let u,c;if(o[2]==="@")u=o[0],c="mailto:"+u;else{let d;do d=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])?.[0]??"";while(d!==o[0]);u=o[0],o[1]==="www."?c="http://"+o[0]:c=o[0]}return{type:"link",raw:o[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(l){let o=this.rules.inline.text.exec(l);if(o){let u=this.lexer.state.inRawBlock;return{type:"text",raw:o[0],text:o[0],escaped:u}}}},mt=class jc{tokens;options;state;inlineQueue;tokenizer;constructor(o){this.tokens=[],this.tokens.links=Object.create(null),this.options=o||Wa,this.options.tokenizer=this.options.tokenizer||new mi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let u={other:Ln,block:ui.normal,inline:Us.normal};this.options.pedantic?(u.block=ui.pedantic,u.inline=Us.pedantic):this.options.gfm&&(u.block=ui.gfm,this.options.breaks?u.inline=Us.breaks:u.inline=Us.gfm),this.tokenizer.rules=u}static get rules(){return{block:ui,inline:Us}}static lex(o,u){return new jc(u).lex(o)}static lexInline(o,u){return new jc(u).inlineTokens(o)}lex(o){o=o.replace(Ln.carriageReturn,`
`),this.blockTokens(o,this.tokens);for(let u=0;u<this.inlineQueue.length;u++){let c=this.inlineQueue[u];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(o,u=[],c=!1){for(this.options.pedantic&&(o=o.replace(Ln.tabCharGlobal,"    ").replace(Ln.spaceLine,""));o;){let d;if(this.options.extensions?.block?.some(m=>(d=m.call({lexer:this},o,u))?(o=o.substring(d.raw.length),u.push(d),!0):!1))continue;if(d=this.tokenizer.space(o)){o=o.substring(d.raw.length);let m=u.at(-1);d.raw.length===1&&m!==void 0?m.raw+=`
`:u.push(d);continue}if(d=this.tokenizer.code(o)){o=o.substring(d.raw.length);let m=u.at(-1);m?.type==="paragraph"||m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.at(-1).src=m.text):u.push(d);continue}if(d=this.tokenizer.fences(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.heading(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.hr(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.blockquote(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.list(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.html(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.def(o)){o=o.substring(d.raw.length);let m=u.at(-1);m?.type==="paragraph"||m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},u.push(d));continue}if(d=this.tokenizer.table(o)){o=o.substring(d.raw.length),u.push(d);continue}if(d=this.tokenizer.lheading(o)){o=o.substring(d.raw.length),u.push(d);continue}let h=o;if(this.options.extensions?.startBlock){let m=1/0,k=o.slice(1),b;this.options.extensions.startBlock.forEach(v=>{b=v.call({lexer:this},k),typeof b=="number"&&b>=0&&(m=Math.min(m,b))}),m<1/0&&m>=0&&(h=o.substring(0,m+1))}if(this.state.top&&(d=this.tokenizer.paragraph(h))){let m=u.at(-1);c&&m?.type==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):u.push(d),c=h.length!==o.length,o=o.substring(d.raw.length);continue}if(d=this.tokenizer.text(o)){o=o.substring(d.raw.length);let m=u.at(-1);m?.type==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+d.raw,m.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):u.push(d);continue}if(o){let m="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,u}inline(o,u=[]){return this.inlineQueue.push({src:o,tokens:u}),u}inlineTokens(o,u=[]){let c=o,d=null;if(this.tokens.links){let b=Object.keys(this.tokens.links);if(b.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)b.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,d.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(d=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)h=d[2]?d[2].length:0,c=c.slice(0,d.index+h)+"["+"a".repeat(d[0].length-h-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=this.options.hooks?.emStrongMask?.call({lexer:this},c)??c;let m=!1,k="";for(;o;){m||(k=""),m=!1;let b;if(this.options.extensions?.inline?.some(R=>(b=R.call({lexer:this},o,u))?(o=o.substring(b.raw.length),u.push(b),!0):!1))continue;if(b=this.tokenizer.escape(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.tag(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.link(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.reflink(o,this.tokens.links)){o=o.substring(b.raw.length);let R=u.at(-1);b.type==="text"&&R?.type==="text"?(R.raw+=b.raw,R.text+=b.text):u.push(b);continue}if(b=this.tokenizer.emStrong(o,c,k)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.codespan(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.br(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.del(o)){o=o.substring(b.raw.length),u.push(b);continue}if(b=this.tokenizer.autolink(o)){o=o.substring(b.raw.length),u.push(b);continue}if(!this.state.inLink&&(b=this.tokenizer.url(o))){o=o.substring(b.raw.length),u.push(b);continue}let v=o;if(this.options.extensions?.startInline){let R=1/0,U=o.slice(1),D;this.options.extensions.startInline.forEach(Q=>{D=Q.call({lexer:this},U),typeof D=="number"&&D>=0&&(R=Math.min(R,D))}),R<1/0&&R>=0&&(v=o.substring(0,R+1))}if(b=this.tokenizer.inlineText(v)){o=o.substring(b.raw.length),b.raw.slice(-1)!=="_"&&(k=b.raw.slice(-1)),m=!0;let R=u.at(-1);R?.type==="text"?(R.raw+=b.raw,R.text+=b.text):u.push(b);continue}if(o){let R="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(R);break}else throw new Error(R)}}return u}},hi=class{options;parser;constructor(l){this.options=l||Wa}space(l){return""}code({text:l,lang:o,escaped:u}){let c=(o||"").match(Ln.notSpaceStart)?.[0],d=l.replace(Ln.endingNewline,"")+`
`;return c?'<pre><code class="language-'+Vt(c)+'">'+(u?d:Vt(d,!0))+`</code></pre>
`:"<pre><code>"+(u?d:Vt(d,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}def(l){return""}heading({tokens:l,depth:o}){return`<h${o}>${this.parser.parseInline(l)}</h${o}>
`}hr(l){return`<hr>
`}list(l){let o=l.ordered,u=l.start,c="";for(let m=0;m<l.items.length;m++){let k=l.items[m];c+=this.listitem(k)}let d=o?"ol":"ul",h=o&&u!==1?' start="'+u+'"':"";return"<"+d+h+`>
`+c+"</"+d+`>
`}listitem(l){return`<li>${this.parser.parse(l.tokens)}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let o="",u="";for(let d=0;d<l.header.length;d++)u+=this.tablecell(l.header[d]);o+=this.tablerow({text:u});let c="";for(let d=0;d<l.rows.length;d++){let h=l.rows[d];u="";for(let m=0;m<h.length;m++)u+=this.tablecell(h[m]);c+=this.tablerow({text:u})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+o+`</thead>
`+c+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){let o=this.parser.parseInline(l.tokens),u=l.header?"th":"td";return(l.align?`<${u} align="${l.align}">`:`<${u}>`)+o+`</${u}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${Vt(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:o,tokens:u}){let c=this.parser.parseInline(u),d=Gf(l);if(d===null)return c;l=d;let h='<a href="'+l+'"';return o&&(h+=' title="'+Vt(o)+'"'),h+=">"+c+"</a>",h}image({href:l,title:o,text:u,tokens:c}){c&&(u=this.parser.parseInline(c,this.parser.textRenderer));let d=Gf(l);if(d===null)return Vt(u);l=d;let h=`<img src="${l}" alt="${u}"`;return o&&(h+=` title="${Vt(o)}"`),h+=">",h}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:Vt(l.text)}},$c=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}checkbox({raw:l}){return l}},ht=class Bc{options;renderer;textRenderer;constructor(o){this.options=o||Wa,this.options.renderer=this.options.renderer||new hi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $c}static parse(o,u){return new Bc(u).parse(o)}static parseInline(o,u){return new Bc(u).parseInline(o)}parse(o){let u="";for(let c=0;c<o.length;c++){let d=o[c];if(this.options.extensions?.renderers?.[d.type]){let m=d,k=this.options.extensions.renderers[m.type].call({parser:this},m);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(m.type)){u+=k||"";continue}}let h=d;switch(h.type){case"space":{u+=this.renderer.space(h);break}case"hr":{u+=this.renderer.hr(h);break}case"heading":{u+=this.renderer.heading(h);break}case"code":{u+=this.renderer.code(h);break}case"table":{u+=this.renderer.table(h);break}case"blockquote":{u+=this.renderer.blockquote(h);break}case"list":{u+=this.renderer.list(h);break}case"checkbox":{u+=this.renderer.checkbox(h);break}case"html":{u+=this.renderer.html(h);break}case"def":{u+=this.renderer.def(h);break}case"paragraph":{u+=this.renderer.paragraph(h);break}case"text":{u+=this.renderer.text(h);break}default:{let m='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return u}parseInline(o,u=this.renderer){let c="";for(let d=0;d<o.length;d++){let h=o[d];if(this.options.extensions?.renderers?.[h.type]){let k=this.options.extensions.renderers[h.type].call({parser:this},h);if(k!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){c+=k||"";continue}}let m=h;switch(m.type){case"escape":{c+=u.text(m);break}case"html":{c+=u.html(m);break}case"link":{c+=u.link(m);break}case"image":{c+=u.image(m);break}case"checkbox":{c+=u.checkbox(m);break}case"strong":{c+=u.strong(m);break}case"em":{c+=u.em(m);break}case"codespan":{c+=u.codespan(m);break}case"br":{c+=u.br(m);break}case"del":{c+=u.del(m);break}case"text":{c+=u.text(m);break}default:{let k='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(k),"";throw new Error(k)}}}return c}},js=class{options;block;constructor(l){this.options=l||Wa}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}emStrongMask(l){return l}provideLexer(){return this.block?mt.lex:mt.lexInline}provideParser(){return this.block?ht.parse:ht.parseInline}},Gb=class{defaults=qc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ht;Renderer=hi;TextRenderer=$c;Lexer=mt;Tokenizer=mi;Hooks=js;constructor(...l){this.use(...l)}walkTokens(l,o){let u=[];for(let c of l)switch(u=u.concat(o.call(this,c)),c.type){case"table":{let d=c;for(let h of d.header)u=u.concat(this.walkTokens(h.tokens,o));for(let h of d.rows)for(let m of h)u=u.concat(this.walkTokens(m.tokens,o));break}case"list":{let d=c;u=u.concat(this.walkTokens(d.items,o));break}default:{let d=c;this.defaults.extensions?.childTokens?.[d.type]?this.defaults.extensions.childTokens[d.type].forEach(h=>{let m=d[h].flat(1/0);u=u.concat(this.walkTokens(m,o))}):d.tokens&&(u=u.concat(this.walkTokens(d.tokens,o)))}}return u}use(...l){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(u=>{let c={...u};if(c.async=this.defaults.async||c.async||!1,u.extensions&&(u.extensions.forEach(d=>{if(!d.name)throw new Error("extension name required");if("renderer"in d){let h=o.renderers[d.name];h?o.renderers[d.name]=function(...m){let k=d.renderer.apply(this,m);return k===!1&&(k=h.apply(this,m)),k}:o.renderers[d.name]=d.renderer}if("tokenizer"in d){if(!d.level||d.level!=="block"&&d.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=o[d.level];h?h.unshift(d.tokenizer):o[d.level]=[d.tokenizer],d.start&&(d.level==="block"?o.startBlock?o.startBlock.push(d.start):o.startBlock=[d.start]:d.level==="inline"&&(o.startInline?o.startInline.push(d.start):o.startInline=[d.start]))}"childTokens"in d&&d.childTokens&&(o.childTokens[d.name]=d.childTokens)}),c.extensions=o),u.renderer){let d=this.defaults.renderer||new hi(this.defaults);for(let h in u.renderer){if(!(h in d))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let m=h,k=u.renderer[m],b=d[m];d[m]=(...v)=>{let R=k.apply(d,v);return R===!1&&(R=b.apply(d,v)),R||""}}c.renderer=d}if(u.tokenizer){let d=this.defaults.tokenizer||new mi(this.defaults);for(let h in u.tokenizer){if(!(h in d))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let m=h,k=u.tokenizer[m],b=d[m];d[m]=(...v)=>{let R=k.apply(d,v);return R===!1&&(R=b.apply(d,v)),R}}c.tokenizer=d}if(u.hooks){let d=this.defaults.hooks||new js;for(let h in u.hooks){if(!(h in d))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let m=h,k=u.hooks[m],b=d[m];js.passThroughHooks.has(h)?d[m]=v=>{if(this.defaults.async&&js.passThroughHooksRespectAsync.has(h))return(async()=>{let U=await k.call(d,v);return b.call(d,U)})();let R=k.call(d,v);return b.call(d,R)}:d[m]=(...v)=>{if(this.defaults.async)return(async()=>{let U=await k.apply(d,v);return U===!1&&(U=await b.apply(d,v)),U})();let R=k.apply(d,v);return R===!1&&(R=b.apply(d,v)),R}}c.hooks=d}if(u.walkTokens){let d=this.defaults.walkTokens,h=u.walkTokens;c.walkTokens=function(m){let k=[];return k.push(h.call(this,m)),d&&(k=k.concat(d.call(this,m))),k}}this.defaults={...this.defaults,...c}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,o){return mt.lex(l,o??this.defaults)}parser(l,o){return ht.parse(l,o??this.defaults)}parseMarkdown(l){return(o,u)=>{let c={...u},d={...this.defaults,...c},h=this.onError(!!d.silent,!!d.async);if(this.defaults.async===!0&&c.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(d.hooks&&(d.hooks.options=d,d.hooks.block=l),d.async)return(async()=>{let m=d.hooks?await d.hooks.preprocess(o):o,k=await(d.hooks?await d.hooks.provideLexer():l?mt.lex:mt.lexInline)(m,d),b=d.hooks?await d.hooks.processAllTokens(k):k;d.walkTokens&&await Promise.all(this.walkTokens(b,d.walkTokens));let v=await(d.hooks?await d.hooks.provideParser():l?ht.parse:ht.parseInline)(b,d);return d.hooks?await d.hooks.postprocess(v):v})().catch(h);try{d.hooks&&(o=d.hooks.preprocess(o));let m=(d.hooks?d.hooks.provideLexer():l?mt.lex:mt.lexInline)(o,d);d.hooks&&(m=d.hooks.processAllTokens(m)),d.walkTokens&&this.walkTokens(m,d.walkTokens);let k=(d.hooks?d.hooks.provideParser():l?ht.parse:ht.parseInline)(m,d);return d.hooks&&(k=d.hooks.postprocess(k)),k}catch(m){return h(m)}}}onError(l,o){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,l){let c="<p>An error occurred:</p><pre>"+Vt(u.message+"",!0)+"</pre>";return o?Promise.resolve(c):c}if(o)return Promise.reject(u);throw u}}},Va=new Gb;function Ue(l,o){return Va.parse(l,o)}Ue.options=Ue.setOptions=function(l){return Va.setOptions(l),Ue.defaults=Va.defaults,rm(Ue.defaults),Ue};Ue.getDefaults=qc;Ue.defaults=Wa;Ue.use=function(...l){return Va.use(...l),Ue.defaults=Va.defaults,rm(Ue.defaults),Ue};Ue.walkTokens=function(l,o){return Va.walkTokens(l,o)};Ue.parseInline=Va.parseInline;Ue.Parser=ht;Ue.parser=ht.parse;Ue.Renderer=hi;Ue.TextRenderer=$c;Ue.Lexer=mt;Ue.lexer=mt.lex;Ue.Tokenizer=mi;Ue.Hooks=js;Ue.parse=Ue;Ue.options;Ue.setOptions;Ue.use;Ue.walkTokens;Ue.parseInline;ht.parse;mt.lex;var Oc,Yf;function Wb(){if(Yf)return Oc;Yf=1;function l(y){return y instanceof Map?y.clear=y.delete=y.set=function(){throw new Error("map is read-only")}:y instanceof Set&&(y.add=y.clear=y.delete=function(){throw new Error("set is read-only")}),Object.freeze(y),Object.getOwnPropertyNames(y).forEach(P=>{const q=y[P],le=typeof q;(le==="object"||le==="function")&&!Object.isFrozen(q)&&l(q)}),y}class o{constructor(P){P.data===void 0&&(P.data={}),this.data=P.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function u(y){return y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function c(y,...P){const q=Object.create(null);for(const le in y)q[le]=y[le];return P.forEach(function(le){for(const Ge in le)q[Ge]=le[Ge]}),q}const d="</span>",h=y=>!!y.scope,m=(y,{prefix:P})=>{if(y.startsWith("language:"))return y.replace("language:","language-");if(y.includes(".")){const q=y.split(".");return[`${P}${q.shift()}`,...q.map((le,Ge)=>`${le}${"_".repeat(Ge+1)}`)].join(" ")}return`${P}${y}`};class k{constructor(P,q){this.buffer="",this.classPrefix=q.classPrefix,P.walk(this)}addText(P){this.buffer+=u(P)}openNode(P){if(!h(P))return;const q=m(P.scope,{prefix:this.classPrefix});this.span(q)}closeNode(P){h(P)&&(this.buffer+=d)}value(){return this.buffer}span(P){this.buffer+=`<span class="${P}">`}}const b=(y={})=>{const P={children:[]};return Object.assign(P,y),P};class v{constructor(){this.rootNode=b(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(P){this.top.children.push(P)}openNode(P){const q=b({scope:P});this.add(q),this.stack.push(q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(P){return this.constructor._walk(P,this.rootNode)}static _walk(P,q){return typeof q=="string"?P.addText(q):q.children&&(P.openNode(q),q.children.forEach(le=>this._walk(P,le)),P.closeNode(q)),P}static _collapse(P){typeof P!="string"&&P.children&&(P.children.every(q=>typeof q=="string")?P.children=[P.children.join("")]:P.children.forEach(q=>{v._collapse(q)}))}}class R extends v{constructor(P){super(),this.options=P}addText(P){P!==""&&this.add(P)}startScope(P){this.openNode(P)}endScope(){this.closeNode()}__addSublanguage(P,q){const le=P.root;q&&(le.scope=`language:${q}`),this.add(le)}toHTML(){return new k(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function U(y){return y?typeof y=="string"?y:y.source:null}function D(y){return K("(?=",y,")")}function Q(y){return K("(?:",y,")*")}function z(y){return K("(?:",y,")?")}function K(...y){return y.map(q=>U(q)).join("")}function Ee(y){const P=y[y.length-1];return typeof P=="object"&&P.constructor===Object?(y.splice(y.length-1,1),P):{}}function Oe(...y){return"("+(Ee(y).capture?"":"?:")+y.map(le=>U(le)).join("|")+")"}function Ce(y){return new RegExp(y.toString()+"|").exec("").length-1}function G(y,P){const q=y&&y.exec(P);return q&&q.index===0}const ie=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function oe(y,{joinWith:P}){let q=0;return y.map(le=>{q+=1;const Ge=q;let Fe=U(le),$="";for(;Fe.length>0;){const V=ie.exec(Fe);if(!V){$+=Fe;break}$+=Fe.substring(0,V.index),Fe=Fe.substring(V.index+V[0].length),V[0][0]==="\\"&&V[1]?$+="\\"+String(Number(V[1])+Ge):($+=V[0],V[0]==="("&&q++)}return $}).map(le=>`(${le})`).join(P)}const ye=/\b\B/,te="[a-zA-Z]\\w*",Te="[a-zA-Z_]\\w*",Ye="\\b\\d+(\\.\\d+)?",en="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ze="\\b(0b[01]+)",nn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Sn=(y={})=>{const P=/^#![ ]*\//;return y.binary&&(y.begin=K(P,/.*\b/,y.binary,/\b.*/)),c({scope:"meta",begin:P,end:/$/,relevance:0,"on:begin":(q,le)=>{q.index!==0&&le.ignoreMatch()}},y)},tn={begin:"\\\\[\\s\\S]",relevance:0},vn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[tn]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[tn]},I={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(y,P,q={}){const le=c({scope:"comment",begin:y,end:P,contains:[]},q);le.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Ge=Oe("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return le.contains.push({begin:K(/[ ]+/,"(",Ge,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),le},X=_("//","$"),de=_("/\\*","\\*/"),x=_("#","$"),O={scope:"number",begin:Ye,relevance:0},F={scope:"number",begin:en,relevance:0},Y={scope:"number",begin:Ze,relevance:0},ce={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[tn,{begin:/\[/,end:/\]/,relevance:0,contains:[tn]}]},ge={scope:"title",begin:te,relevance:0},Ae={scope:"title",begin:Te,relevance:0},kn={begin:"\\.\\s*"+Te,relevance:0};var gt=Object.freeze({__proto__:null,APOS_STRING_MODE:vn,BACKSLASH_ESCAPE:tn,BINARY_NUMBER_MODE:Y,BINARY_NUMBER_RE:Ze,COMMENT:_,C_BLOCK_COMMENT_MODE:de,C_LINE_COMMENT_MODE:X,C_NUMBER_MODE:F,C_NUMBER_RE:en,END_SAME_AS_BEGIN:function(y){return Object.assign(y,{"on:begin":(P,q)=>{q.data._beginMatch=P[1]},"on:end":(P,q)=>{q.data._beginMatch!==P[1]&&q.ignoreMatch()}})},HASH_COMMENT_MODE:x,IDENT_RE:te,MATCH_NOTHING_RE:ye,METHOD_GUARD:kn,NUMBER_MODE:O,NUMBER_RE:Ye,PHRASAL_WORDS_MODE:I,QUOTE_STRING_MODE:M,REGEXP_MODE:ce,RE_STARTERS_RE:nn,SHEBANG:Sn,TITLE_MODE:ge,UNDERSCORE_IDENT_RE:Te,UNDERSCORE_TITLE_MODE:Ae});function Ka(y,P){y.input[y.index-1]==="."&&P.ignoreMatch()}function Or(y,P){y.className!==void 0&&(y.scope=y.className,delete y.className)}function Fs(y,P){P&&y.beginKeywords&&(y.begin="\\b("+y.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",y.__beforeBegin=Ka,y.keywords=y.keywords||y.beginKeywords,delete y.beginKeywords,y.relevance===void 0&&(y.relevance=0))}function kt(y,P){Array.isArray(y.illegal)&&(y.illegal=Oe(...y.illegal))}function Ur(y,P){if(y.match){if(y.begin||y.end)throw new Error("begin & end are not supported with match");y.begin=y.match,delete y.match}}function Pr(y,P){y.relevance===void 0&&(y.relevance=1)}const xi=(y,P)=>{if(!y.beforeMatch)return;if(y.starts)throw new Error("beforeMatch cannot be used with starts");const q=Object.assign({},y);Object.keys(y).forEach(le=>{delete y[le]}),y.keywords=q.keywords,y.begin=K(q.beforeMatch,D(q.begin)),y.starts={relevance:0,contains:[Object.assign(q,{endsParent:!0})]},y.relevance=0,delete q.beforeMatch},qs=["of","and","for","in","not","or","if","then","parent","list","value"],Lr="keyword";function Ya(y,P,q=Lr){const le=Object.create(null);return typeof y=="string"?Ge(q,y.split(" ")):Array.isArray(y)?Ge(q,y):Object.keys(y).forEach(function(Fe){Object.assign(le,Ya(y[Fe],P,Fe))}),le;function Ge(Fe,$){P&&($=$.map(V=>V.toLowerCase())),$.forEach(function(V){const se=V.split("|");le[se[0]]=[Fe,jr(se[0],se[1])]})}}function jr(y,P){return P?Number(P):Si(y)?0:1}function Si(y){return qs.includes(y.toLowerCase())}const Qs={},on=y=>{console.error(y)},Vs=(y,...P)=>{console.log(`WARN: ${y}`,...P)},Ct=(y,P)=>{Qs[`${y}/${P}`]||(console.log(`Deprecated as of ${y}. ${P}`),Qs[`${y}/${P}`]=!0)},Sa=new Error;function wa(y,P,{key:q}){let le=0;const Ge=y[q],Fe={},$={};for(let V=1;V<=P.length;V++)$[V+le]=Ge[V],Fe[V+le]=!0,le+=Ce(P[V-1]);y[q]=$,y[q]._emit=Fe,y[q]._multi=!0}function wi(y){if(Array.isArray(y.begin)){if(y.skip||y.excludeBegin||y.returnBegin)throw on("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Sa;if(typeof y.beginScope!="object"||y.beginScope===null)throw on("beginScope must be object"),Sa;wa(y,y.begin,{key:"beginScope"}),y.begin=oe(y.begin,{joinWith:""})}}function Gs(y){if(Array.isArray(y.end)){if(y.skip||y.excludeEnd||y.returnEnd)throw on("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Sa;if(typeof y.endScope!="object"||y.endScope===null)throw on("endScope must be object"),Sa;wa(y,y.end,{key:"endScope"}),y.end=oe(y.end,{joinWith:""})}}function ki(y){y.scope&&typeof y.scope=="object"&&y.scope!==null&&(y.beginScope=y.scope,delete y.scope)}function Ci(y){ki(y),typeof y.beginScope=="string"&&(y.beginScope={_wrap:y.beginScope}),typeof y.endScope=="string"&&(y.endScope={_wrap:y.endScope}),wi(y),Gs(y)}function ka(y){function P($,V){return new RegExp(U($),"m"+(y.case_insensitive?"i":"")+(y.unicodeRegex?"u":"")+(V?"g":""))}class q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(V,se){se.position=this.position++,this.matchIndexes[this.matchAt]=se,this.regexes.push([se,V]),this.matchAt+=Ce(V)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const V=this.regexes.map(se=>se[1]);this.matcherRe=P(oe(V,{joinWith:"|"}),!0),this.lastIndex=0}exec(V){this.matcherRe.lastIndex=this.lastIndex;const se=this.matcherRe.exec(V);if(!se)return null;const ln=se.findIndex((Tt,$a)=>$a>0&&Tt!==void 0),Xe=this.matchIndexes[ln];return se.splice(0,ln),Object.assign(se,Xe)}}class le{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(V){if(this.multiRegexes[V])return this.multiRegexes[V];const se=new q;return this.rules.slice(V).forEach(([ln,Xe])=>se.addRule(ln,Xe)),se.compile(),this.multiRegexes[V]=se,se}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(V,se){this.rules.push([V,se]),se.type==="begin"&&this.count++}exec(V){const se=this.getMatcher(this.regexIndex);se.lastIndex=this.lastIndex;let ln=se.exec(V);if(this.resumingScanAtSamePosition()&&!(ln&&ln.index===this.lastIndex)){const Xe=this.getMatcher(0);Xe.lastIndex=this.lastIndex+1,ln=Xe.exec(V)}return ln&&(this.regexIndex+=ln.position+1,this.regexIndex===this.count&&this.considerAll()),ln}}function Ge($){const V=new le;return $.contains.forEach(se=>V.addRule(se.begin,{rule:se,type:"begin"})),$.terminatorEnd&&V.addRule($.terminatorEnd,{type:"end"}),$.illegal&&V.addRule($.illegal,{type:"illegal"}),V}function Fe($,V){const se=$;if($.isCompiled)return se;[Or,Ur,Ci,xi].forEach(Xe=>Xe($,V)),y.compilerExtensions.forEach(Xe=>Xe($,V)),$.__beforeBegin=null,[Fs,kt,Pr].forEach(Xe=>Xe($,V)),$.isCompiled=!0;let ln=null;return typeof $.keywords=="object"&&$.keywords.$pattern&&($.keywords=Object.assign({},$.keywords),ln=$.keywords.$pattern,delete $.keywords.$pattern),ln=ln||/\w+/,$.keywords&&($.keywords=Ya($.keywords,y.case_insensitive)),se.keywordPatternRe=P(ln,!0),V&&($.begin||($.begin=/\B|\b/),se.beginRe=P(se.begin),!$.end&&!$.endsWithParent&&($.end=/\B|\b/),$.end&&(se.endRe=P(se.end)),se.terminatorEnd=U(se.end)||"",$.endsWithParent&&V.terminatorEnd&&(se.terminatorEnd+=($.end?"|":"")+V.terminatorEnd)),$.illegal&&(se.illegalRe=P($.illegal)),$.contains||($.contains=[]),$.contains=[].concat(...$.contains.map(function(Xe){return yt(Xe==="self"?$:Xe)})),$.contains.forEach(function(Xe){Fe(Xe,se)}),$.starts&&Fe($.starts,V),se.matcher=Ge(se),se}if(y.compilerExtensions||(y.compilerExtensions=[]),y.contains&&y.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return y.classNameAliases=c(y.classNameAliases||{}),Fe(y)}function Mn(y){return y?y.endsWithParent||Mn(y.starts):!1}function yt(y){return y.variants&&!y.cachedVariants&&(y.cachedVariants=y.variants.map(function(P){return c(y,{variants:null},P)})),y.cachedVariants?y.cachedVariants:Mn(y)?c(y,{starts:y.starts?c(y.starts):null}):Object.isFrozen(y)?c(y):y}var On="11.11.1";class Ti extends Error{constructor(P,q){super(P),this.name="HTMLInjectionError",this.html=q}}const Br=u,Ws=c,Ca=Symbol("nomatch"),Xa=7,Ta=function(y){const P=Object.create(null),q=Object.create(null),le=[];let Ge=!0;const Fe="Could not find the language '{}', did you forget to load/include a language module?",$={disableAutodetect:!0,name:"Plain text",contains:[]};let V={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:R};function se(B){return V.noHighlightRe.test(B)}function ln(B){let ee=B.className+" ";ee+=B.parentNode?B.parentNode.className:"";const be=V.languageDetectRe.exec(ee);if(be){const Pe=Un(be[1]);return Pe||(Vs(Fe.replace("{}",be[1])),Vs("Falling back to no-highlight mode for this block.",B)),Pe?be[1]:"no-highlight"}return ee.split(/\s+/).find(Pe=>se(Pe)||Un(Pe))}function Xe(B,ee,be){let Pe="",un="";typeof ee=="object"?(Pe=B,be=ee.ignoreIllegals,un=ee.language):(Ct("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ct("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),un=B,Pe=ee),be===void 0&&(be=!0);const Nn={code:Pe,language:un};Ea("before:highlight",Nn);const Gn=Nn.result?Nn.result:Tt(Nn.language,Nn.code,be);return Gn.code=Nn.code,Ea("after:highlight",Gn),Gn}function Tt(B,ee,be,Pe){const un=Object.create(null);function Nn(H,Z){return H.keywords[Z]}function Gn(){if(!re.keywords){mn.addText(Le);return}let H=0;re.keywordPatternRe.lastIndex=0;let Z=re.keywordPatternRe.exec(Le),pe="";for(;Z;){pe+=Le.substring(H,Z.index);const Se=Cn.case_insensitive?Z[0].toLowerCase():Z[0],Je=Nn(re,Se);if(Je){const[tt,Qr]=Je;if(mn.addText(pe),pe="",un[Se]=(un[Se]||0)+1,un[Se]<=Xa&&(Yt+=Qr),tt.startsWith("_"))pe+=Z[0];else{const eo=Cn.classNameAliases[tt]||tt;Wn(Z[0],eo)}}else pe+=Z[0];H=re.keywordPatternRe.lastIndex,Z=re.keywordPatternRe.exec(Le)}pe+=Le.substring(H),mn.addText(pe)}function Bn(){if(Le==="")return;let H=null;if(typeof re.subLanguage=="string"){if(!P[re.subLanguage]){mn.addText(Le);return}H=Tt(re.subLanguage,Le,!0,Js[re.subLanguage]),Js[re.subLanguage]=H._top}else H=Za(Le,re.subLanguage.length?re.subLanguage:null);re.relevance>0&&(Yt+=H.relevance),mn.__addSublanguage(H._emitter,H.language)}function Qe(){re.subLanguage!=null?Bn():Gn(),Le=""}function Wn(H,Z){H!==""&&(mn.startScope(Z),mn.addText(H),mn.endScope())}function $s(H,Z){let pe=1;const Se=Z.length-1;for(;pe<=Se;){if(!H._emit[pe]){pe++;continue}const Je=Cn.classNameAliases[H[pe]]||H[pe],tt=Z[pe];Je?Wn(tt,Je):(Le=tt,Gn(),Le=""),pe++}}function er(H,Z){return H.scope&&typeof H.scope=="string"&&mn.openNode(Cn.classNameAliases[H.scope]||H.scope),H.beginScope&&(H.beginScope._wrap?(Wn(Le,Cn.classNameAliases[H.beginScope._wrap]||H.beginScope._wrap),Le=""):H.beginScope._multi&&($s(H.beginScope,Z),Le="")),re=Object.create(H,{parent:{value:re}}),re}function Hr(H,Z,pe){let Se=G(H.endRe,pe);if(Se){if(H["on:end"]){const Je=new o(H);H["on:end"](Z,Je),Je.isMatchIgnored&&(Se=!1)}if(Se){for(;H.endsParent&&H.parent;)H=H.parent;return H}}if(H.endsWithParent)return Hr(H.parent,Z,pe)}function nr(H){return re.matcher.regexIndex===0?(Le+=H[0],1):(Xt=!0,0)}function Ri(H){const Z=H[0],pe=H.rule,Se=new o(pe),Je=[pe.__beforeBegin,pe["on:begin"]];for(const tt of Je)if(tt&&(tt(H,Se),Se.isMatchIgnored))return nr(Z);return pe.skip?Le+=Z:(pe.excludeBegin&&(Le+=Z),Qe(),!pe.returnBegin&&!pe.excludeBegin&&(Le=Z)),er(pe,H),pe.returnBegin?0:Z.length}function _n(H){const Z=H[0],pe=ee.substring(H.index),Se=Hr(re,H,pe);if(!Se)return Ca;const Je=re;re.endScope&&re.endScope._wrap?(Qe(),Wn(Z,re.endScope._wrap)):re.endScope&&re.endScope._multi?(Qe(),$s(re.endScope,H)):Je.skip?Le+=Z:(Je.returnEnd||Je.excludeEnd||(Le+=Z),Qe(),Je.excludeEnd&&(Le=Z));do re.scope&&mn.closeNode(),!re.skip&&!re.subLanguage&&(Yt+=re.relevance),re=re.parent;while(re!==Se.parent);return Se.starts&&er(Se.starts,H),Je.returnEnd?0:Z.length}function Fr(){const H=[];for(let Z=re;Z!==Cn;Z=Z.parent)Z.scope&&H.unshift(Z.scope);H.forEach(Z=>mn.openNode(Z))}let Aa={};function tr(H,Z){const pe=Z&&Z[0];if(Le+=H,pe==null)return Qe(),0;if(Aa.type==="begin"&&Z.type==="end"&&Aa.index===Z.index&&pe===""){if(Le+=ee.slice(Z.index,Z.index+1),!Ge){const Se=new Error(`0 width match regex (${B})`);throw Se.languageName=B,Se.badRule=Aa.rule,Se}return 1}if(Aa=Z,Z.type==="begin")return Ri(Z);if(Z.type==="illegal"&&!be){const Se=new Error('Illegal lexeme "'+pe+'" for mode "'+(re.scope||"<unnamed>")+'"');throw Se.mode=re,Se}else if(Z.type==="end"){const Se=_n(Z);if(Se!==Ca)return Se}if(Z.type==="illegal"&&pe==="")return Le+=`
`,1;if(qr>1e5&&qr>Z.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Le+=pe,pe.length}const Cn=Un(B);if(!Cn)throw on(Fe.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Zs=ka(Cn);let ar="",re=Pe||Zs;const Js={},mn=new V.__emitter(V);Fr();let Le="",Yt=0,At=0,qr=0,Xt=!1;try{if(Cn.__emitTokens)Cn.__emitTokens(ee,mn);else{for(re.matcher.considerAll();;){qr++,Xt?Xt=!1:re.matcher.considerAll(),re.matcher.lastIndex=At;const H=re.matcher.exec(ee);if(!H)break;const Z=ee.substring(At,H.index),pe=tr(Z,H);At=H.index+pe}tr(ee.substring(At))}return mn.finalize(),ar=mn.toHTML(),{language:B,value:ar,relevance:Yt,illegal:!1,_emitter:mn,_top:re}}catch(H){if(H.message&&H.message.includes("Illegal"))return{language:B,value:Br(ee),illegal:!0,relevance:0,_illegalBy:{message:H.message,index:At,context:ee.slice(At-100,At+100),mode:H.mode,resultSoFar:ar},_emitter:mn};if(Ge)return{language:B,value:Br(ee),illegal:!1,relevance:0,errorRaised:H,_emitter:mn,_top:re};throw H}}function $a(B){const ee={value:Br(B),illegal:!1,relevance:0,_top:$,_emitter:new V.__emitter(V)};return ee._emitter.addText(B),ee}function Za(B,ee){ee=ee||V.languages||Object.keys(P);const be=$a(B),Pe=ee.filter(Un).filter(Wt).map(Qe=>Tt(Qe,B,!1));Pe.unshift(be);const un=Pe.sort((Qe,Wn)=>{if(Qe.relevance!==Wn.relevance)return Wn.relevance-Qe.relevance;if(Qe.language&&Wn.language){if(Un(Qe.language).supersetOf===Wn.language)return 1;if(Un(Wn.language).supersetOf===Qe.language)return-1}return 0}),[Nn,Gn]=un,Bn=Nn;return Bn.secondBest=Gn,Bn}function bt(B,ee,be){const Pe=ee&&q[ee]||be;B.classList.add("hljs"),B.classList.add(`language-${Pe}`)}function cn(B){let ee=null;const be=ln(B);if(se(be))return;if(Ea("before:highlightElement",{el:B,language:be}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(V.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),V.throwUnescapedHTML))throw new Ti("One of your code blocks includes unescaped HTML.",B.innerHTML);ee=B;const Pe=ee.textContent,un=be?Xe(Pe,{language:be,ignoreIllegals:!0}):Za(Pe);B.innerHTML=un.value,B.dataset.highlighted="yes",bt(B,be,un.language),B.result={language:un.language,re:un.relevance,relevance:un.relevance},un.secondBest&&(B.secondBest={language:un.secondBest.language,relevance:un.secondBest.relevance}),Ea("after:highlightElement",{el:B,result:un,text:Pe})}function Dn(B){V=Ws(V,B)}const Gt=()=>{Ja(),Ct("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function _r(){Ja(),Ct("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ks=!1;function Ja(){function B(){Ja()}if(document.readyState==="loading"){Ks||window.addEventListener("DOMContentLoaded",B,!1),Ks=!0;return}document.querySelectorAll(V.cssSelector).forEach(cn)}function Ys(B,ee){let be=null;try{be=ee(y)}catch(Pe){if(on("Language definition for '{}' could not be registered.".replace("{}",B)),Ge)on(Pe);else throw Pe;be=$}be.name||(be.name=B),P[B]=be,be.rawDefinition=ee.bind(null,y),be.aliases&&Rt(be.aliases,{languageName:B})}function Ra(B){delete P[B];for(const ee of Object.keys(q))q[ee]===B&&delete q[ee]}function zr(){return Object.keys(P)}function Un(B){return B=(B||"").toLowerCase(),P[B]||P[q[B]]}function Rt(B,{languageName:ee}){typeof B=="string"&&(B=[B]),B.forEach(be=>{q[be.toLowerCase()]=ee})}function Wt(B){const ee=Un(B);return ee&&!ee.disableAutodetect}function Kt(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=ee=>{B["before:highlightBlock"](Object.assign({block:ee.el},ee))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=ee=>{B["after:highlightBlock"](Object.assign({block:ee.el},ee))})}function fn(B){Kt(B),le.push(B)}function Xs(B){const ee=le.indexOf(B);ee!==-1&&le.splice(ee,1)}function Ea(B,ee){const be=B;le.forEach(function(Pe){Pe[be]&&Pe[be](ee)})}function Et(B){return Ct("10.7.0","highlightBlock will be removed entirely in v12.0"),Ct("10.7.0","Please use highlightElement now."),cn(B)}Object.assign(y,{highlight:Xe,highlightAuto:Za,highlightAll:Ja,highlightElement:cn,highlightBlock:Et,configure:Dn,initHighlighting:Gt,initHighlightingOnLoad:_r,registerLanguage:Ys,unregisterLanguage:Ra,listLanguages:zr,getLanguage:Un,registerAliases:Rt,autoDetection:Wt,inherit:Ws,addPlugin:fn,removePlugin:Xs}),y.debugMode=function(){Ge=!1},y.safeMode=function(){Ge=!0},y.versionString=On,y.regex={concat:K,lookahead:D,either:Oe,optional:z,anyNumberOfTimes:Q};for(const B in gt)typeof gt[B]=="object"&&l(gt[B]);return Object.assign(y,gt),y},jn=Ta({});return jn.newInstance=()=>Ta({}),Oc=jn,jn.HighlightJS=jn,jn.default=jn,Oc}var Kb=Wb();const nt=Dg(Kb),Xf="[A-Za-z$_][0-9A-Za-z$_]*",Yb=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Xb=["true","false","null","undefined","NaN","Infinity"],hm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ym=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],$b=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Zb=[].concat(ym,hm,gm);function Zc(l){const o=l.regex,u=(_,{after:X})=>{const de="</"+_[0].slice(1);return _.input.indexOf(de,X)!==-1},c=Xf,d={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(_,X)=>{const de=_[0].length+_.index,x=_.input[de];if(x==="<"||x===","){X.ignoreMatch();return}x===">"&&(u(_,{after:de})||X.ignoreMatch());let O;const F=_.input.substring(de);if(O=F.match(/^\s*=/)){X.ignoreMatch();return}if((O=F.match(/^\s+extends\s+/))&&O.index===0){X.ignoreMatch();return}}},k={$pattern:Xf,keyword:Yb,literal:Xb,built_in:Zb,"variable.language":$b},b="[0-9](_?[0-9])*",v=`\\.(${b})`,R="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",U={className:"number",variants:[{begin:`(\\b(${R})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${R})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},D={className:"subst",begin:"\\$\\{",end:"\\}",keywords:k,contains:[]},Q={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"xml"}},z={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"css"}},K={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"graphql"}},Ee={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,D]},Ce={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},G=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Q,z,K,Ee,{match:/\$\d+/},U];D.contains=G.concat({begin:/\{/,end:/\}/,keywords:k,contains:["self"].concat(G)});const ie=[].concat(Ce,D.contains),oe=ie.concat([{begin:/(\s*)\(/,end:/\)/,keywords:k,contains:["self"].concat(ie)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:oe},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,o.concat(c,"(",o.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:o.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...hm,...gm]}},Ye={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Ze={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(_){return o.concat("(?!",_.join("|"),")")}const Sn={match:o.concat(/\b/,nn([...ym,"super","import"].map(_=>`${_}\\s*\\(`)),c,o.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:o.concat(/\./,o.lookahead(o.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},M="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",I={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,o.lookahead(M)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:k,exports:{PARAMS_CONTAINS:oe,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),Ye,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Q,z,K,Ee,Ce,{match:/\$\d+/},U,Te,{scope:"attr",match:c+o.lookahead(":"),relevance:0},I,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[Ce,l.REGEXP_MODE,{className:"function",begin:M,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:oe}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:h},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,l.inherit(l.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Ze,te,vn,{match:/\$[(.]/}]}}const gi="[A-Za-z$_][0-9A-Za-z$_]*",bm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],vm=["true","false","null","undefined","NaN","Infinity"],xm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Sm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wm=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],km=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Cm=[].concat(wm,xm,Sm);function Jb(l){const o=l.regex,u=(_,{after:X})=>{const de="</"+_[0].slice(1);return _.input.indexOf(de,X)!==-1},c=gi,d={begin:"<>",end:"</>"},h=/<[A-Za-z0-9\\._:-]+\s*\/>/,m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(_,X)=>{const de=_[0].length+_.index,x=_.input[de];if(x==="<"||x===","){X.ignoreMatch();return}x===">"&&(u(_,{after:de})||X.ignoreMatch());let O;const F=_.input.substring(de);if(O=F.match(/^\s*=/)){X.ignoreMatch();return}if((O=F.match(/^\s+extends\s+/))&&O.index===0){X.ignoreMatch();return}}},k={$pattern:gi,keyword:bm,literal:vm,built_in:Cm,"variable.language":km},b="[0-9](_?[0-9])*",v=`\\.(${b})`,R="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",U={className:"number",variants:[{begin:`(\\b(${R})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`},{begin:`\\b(${R})\\b((${v})\\b|\\.)?|(${v})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},D={className:"subst",begin:"\\$\\{",end:"\\}",keywords:k,contains:[]},Q={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"xml"}},z={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"css"}},K={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,D],subLanguage:"graphql"}},Ee={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,D]},Ce={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},G=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Q,z,K,Ee,{match:/\$\d+/},U];D.contains=G.concat({begin:/\{/,end:/\}/,keywords:k,contains:["self"].concat(G)});const ie=[].concat(Ce,D.contains),oe=ie.concat([{begin:/(\s*)\(/,end:/\)/,keywords:k,contains:["self"].concat(ie)}]),ye={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:oe},te={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,o.concat(c,"(",o.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},Te={relevance:0,match:o.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xm,...Sm]}},Ye={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},en={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ye],illegal:/%/},Ze={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function nn(_){return o.concat("(?!",_.join("|"),")")}const Sn={match:o.concat(/\b/,nn([...wm,"super","import"].map(_=>`${_}\\s*\\(`)),c,o.lookahead(/\s*\(/)),className:"title.function",relevance:0},tn={begin:o.concat(/\./,o.lookahead(o.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},vn={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ye]},M="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",I={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,o.lookahead(M)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ye]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:k,exports:{PARAMS_CONTAINS:oe,CLASS_REFERENCE:Te},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),Ye,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Q,z,K,Ee,Ce,{match:/\$\d+/},U,Te,{scope:"attr",match:c+o.lookahead(":"),relevance:0},I,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[Ce,l.REGEXP_MODE,{className:"function",begin:M,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:oe}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:h},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}]},en,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ye,l.inherit(l.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},tn,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ye]},Sn,Ze,te,vn,{match:/\$[(.]/}]}}function Jc(l){const o=l.regex,u=Jb(l),c=gi,d=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],h={begin:[/namespace/,/\s+/,l.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},m={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:d},contains:[u.exports.CLASS_REFERENCE]},k={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},b=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],v={$pattern:gi,keyword:bm.concat(b),literal:vm,built_in:Cm.concat(d),"variable.language":km},R={className:"meta",begin:"@"+c},U=(K,Ee,Oe)=>{const Ce=K.contains.findIndex(G=>G.label===Ee);if(Ce===-1)throw new Error("can not find mode to replace");K.contains.splice(Ce,1,Oe)};Object.assign(u.keywords,v),u.exports.PARAMS_CONTAINS.push(R);const D=u.contains.find(K=>K.scope==="attr"),Q=Object.assign({},D,{match:o.concat(c,o.lookahead(/\s*\?:/))});u.exports.PARAMS_CONTAINS.push([u.exports.CLASS_REFERENCE,D,Q]),u.contains=u.contains.concat([R,h,m,Q]),U(u,"shebang",l.SHEBANG()),U(u,"use_strict",k);const z=u.contains.find(K=>K.label==="func.def");return z.relevance=0,Object.assign(u,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),u}function Tm(l){const o=l.regex,u=o.concat(/[\p{L}_]/u,o.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),c=/[\p{L}0-9._:-]+/u,d={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},h={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},m=l.inherit(h,{begin:/\(/,end:/\)/}),k=l.inherit(l.APOS_STRING_MODE,{className:"string"}),b=l.inherit(l.QUOTE_STRING_MODE,{className:"string"}),v={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:c,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[d]},{begin:/'/,end:/'/,contains:[d]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[h,b,k,m,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[h,m,b,k]}]}]},l.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},d,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[b]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[v],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[v],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:o.concat(/</,o.lookahead(o.concat(u,o.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:u,relevance:0,starts:v}]},{className:"tag",begin:o.concat(/<\//,o.lookahead(o.concat(u,/>/))),contains:[{className:"name",begin:u,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const ev=l=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:l.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:l.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),nv=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],tv=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],av=[...nv,...tv],rv=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),sv=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),ov=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),iv=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function lv(l){const o=l.regex,u=ev(l),c={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},d="and or not only",h=/@-?\w[\w]*(-\w+)*/,m="[a-zA-Z-][a-zA-Z0-9_-]*",k=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[u.BLOCK_COMMENT,c,u.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+m,relevance:0},u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+sv.join("|")+")"},{begin:":(:)?("+ov.join("|")+")"}]},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+iv.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[u.BLOCK_COMMENT,u.HEXCOLOR,u.IMPORTANT,u.CSS_NUMBER_MODE,...k,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...k,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},u.FUNCTION_DISPATCH]},{begin:o.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:h},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:d,attribute:rv.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...k,u.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+av.join("|")+")\\b"}]}}function Rm(l){const o=l.regex,u={},c={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[u]}]};Object.assign(u,{className:"variable",variants:[{begin:o.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},c]});const d={className:"subst",begin:/\$\(/,end:/\)/,contains:[l.BACKSLASH_ESCAPE]},h=l.inherit(l.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),m={begin:/<<-?\s*(?=\w+)/,starts:{contains:[l.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},k={className:"string",begin:/"/,end:/"/,contains:[l.BACKSLASH_ESCAPE,u,d]};d.contains.push(k);const b={match:/\\"/},v={className:"string",begin:/'/,end:/'/},R={match:/\\'/},U={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},l.NUMBER_MODE,u]},D=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],Q=l.SHEBANG({binary:`(${D.join("|")})`,relevance:10}),z={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[l.inherit(l.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},K=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],Ee=["true","false"],Oe={match:/(\/[a-z._-]+)+/},Ce=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],G=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],ie=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],oe=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:K,literal:Ee,built_in:[...Ce,...G,"set","shopt",...ie,...oe]},contains:[Q,l.SHEBANG(),z,U,h,m,Oe,k,b,v,R,u]}}function cv(l){const o={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},u={match:/[{}[\],:]/,className:"punctuation",relevance:0},c=["true","false","null"],d={scope:"literal",beginKeywords:c.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:c},contains:[o,u,l.QUOTE_STRING_MODE,d,l.C_NUMBER_MODE,l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}nt.registerLanguage("javascript",Zc);nt.registerLanguage("js",Zc);nt.registerLanguage("jsx",Zc);nt.registerLanguage("typescript",Jc);nt.registerLanguage("ts",Jc);nt.registerLanguage("tsx",Jc);nt.registerLanguage("html",Tm);nt.registerLanguage("xml",Tm);nt.registerLanguage("css",lv);nt.registerLanguage("bash",Rm);nt.registerLanguage("shell",Rm);nt.registerLanguage("json",cv);Ue.setOptions({gfm:!0,breaks:!0});function uv(l){if(!/\(\d+\)/.test(l))return`<div class="senior-insight"><strong>Senior insight:</strong><p>${l.trim()}</p></div>`;const u=l.split(/\(\d+\)\s*/),c=u[0].trim(),d=u.slice(1).filter(k=>k.trim());if(d.length===0)return`<div class="senior-insight"><strong>Senior insight:</strong><p>${l.trim()}</p></div>`;const h=d.map(k=>`<li>${k.trim().replace(/,\s*$/,"")}</li>`).join("");return`<div class="senior-insight"><strong>Senior insight:</strong>${c?`<p>${c}</p>`:""}<ul>${h}</ul></div>`}function Em({content:l,className:o=""}){const u=fe.useRef(null),c=fe.useMemo(()=>{let d=l;return d=d.replace(/\*\*Senior insight:\*\*\s*([^\n]+(?:\n(?!\n\*\*|\n###|\n---).*)*)/g,(h,m)=>uv(m)),Ue.parse(d)},[l]);return fe.useEffect(()=>{u.current&&u.current.querySelectorAll("pre code").forEach(h=>{nt.highlightElement(h)})},[c]),f.jsx("div",{ref:u,className:`prose max-w-none ${o}`,dangerouslySetInnerHTML:{__html:c}})}function dv({question:l,index:o}){const{getProgress:u,setStatus:c,toggleBookmark:d,toggleExpanded:h,isExpanded:m}=Ga(),k=u(l.id),b=m(l.id),R={not_started:{icon:f.jsx(Fc,{className:"w-4 h-4"}),badge:"badge-not-started",label:"Not Started"},studied:{icon:f.jsx(di,{className:"w-4 h-4"}),badge:"badge-studied",label:"Studied"},needs_review:{icon:f.jsx(zs,{className:"w-4 h-4"}),badge:"badge-needs-review",label:"Needs Review"},mastered:{icon:f.jsx(pi,{className:"w-4 h-4"}),badge:"badge-mastered",label:"Mastered"}}[k.status],U=(Q,z)=>{Q.stopPropagation(),c(l.id,z)},D=Q=>{Q.stopPropagation(),d(l.id)};return f.jsxs("div",{className:"card overflow-hidden animate-fade-in",children:[f.jsxs("button",{onClick:()=>h(l.id),className:"w-full px-4 py-4 flex items-start gap-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors",children:[f.jsx("div",{className:"mt-0.5 text-gray-400",children:b?f.jsx(Hc,{className:"w-5 h-5"}):f.jsx(Pc,{className:"w-5 h-5"})}),f.jsxs("span",{className:"text-sm text-gray-400 dark:text-gray-500 font-mono mt-0.5",children:["#",o+1]}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white leading-snug",children:l.question}),f.jsxs("div",{className:"flex items-center gap-2 mt-2 flex-wrap",children:[f.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded",children:l.categoryName}),f.jsxs("span",{className:`badge ${R.badge}`,children:[R.icon,f.jsx("span",{className:"ml-1",children:R.label})]}),k.lastStudied&&f.jsxs("span",{className:"text-xs text-gray-400",children:["Reviewed ",new Date(k.lastStudied).toLocaleDateString()]})]})]}),f.jsx("button",{onClick:D,className:`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${k.bookmarked?"text-amber-500":"text-gray-400"}`,title:k.bookmarked?"Remove bookmark":"Add bookmark",children:f.jsx(zc,{className:`w-5 h-5 ${k.bookmarked?"fill-current":""}`})})]}),b&&f.jsxs("div",{className:"border-t border-gray-200 dark:border-slate-700",children:[f.jsx("div",{className:"px-4 py-4 bg-gray-50/50 dark:bg-slate-800/50",children:f.jsx(Em,{content:l.answer})}),f.jsxs("div",{className:"px-4 py-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex items-center gap-2 flex-wrap",children:[f.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 mr-2",children:"Mark as:"}),f.jsxs("button",{onClick:Q=>U(Q,"studied"),className:`btn text-sm ${k.status==="studied"?"btn-primary":"btn-secondary"}`,children:[f.jsx(di,{className:"w-4 h-4 mr-1"}),"Studied"]}),f.jsxs("button",{onClick:Q=>U(Q,"needs_review"),className:`btn text-sm ${k.status==="needs_review"?"bg-amber-500 text-white hover:bg-amber-600":"btn-secondary"}`,children:[f.jsx(zs,{className:"w-4 h-4 mr-1"}),"Needs Review"]}),f.jsxs("button",{onClick:Q=>U(Q,"mastered"),className:`btn text-sm ${k.status==="mastered"?"bg-green-500 text-white hover:bg-green-600":"btn-secondary"}`,children:[f.jsx(pi,{className:"w-4 h-4 mr-1"}),"Mastered"]}),k.status!=="not_started"&&f.jsx("button",{onClick:Q=>U(Q,"not_started"),className:"btn btn-ghost text-sm text-gray-500",children:"Reset"})]})]})]})}function pv(){const{filteredQuestions:l,state:o,dispatch:u,stats:c}=Ga(),{filters:d}=o,h=d.status!=="all"||d.category!=="all"||d.bookmarked||d.searchQuery.trim()!=="",m=()=>{u({type:"EXPAND_ALL"})},k=()=>{u({type:"COLLAPSE_ALL"})},b=()=>{u({type:"CLEAR_FILTERS"})};return f.jsxs("div",{className:"max-w-4xl mx-auto",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",children:h?f.jsxs(f.Fragment,{children:[f.jsx(tm,{className:"w-4 h-4"}),f.jsxs("span",{children:["Showing ",l.length," of ",c.total," questions"]}),f.jsx("button",{onClick:b,className:"text-blue-500 hover:text-blue-600 ml-2",children:"Clear filters"})]}):f.jsxs("span",{children:[c.total," questions total"]})}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:m,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Expand all",children:[f.jsx(Hc,{className:"w-4 h-4"}),"Expand"]}),f.jsxs("button",{onClick:k,className:"btn btn-ghost text-sm flex items-center gap-1",title:"Collapse all",children:[f.jsx(My,{className:"w-4 h-4"}),"Collapse"]})]})]}),l.length>0?f.jsx("div",{className:"space-y-4",children:l.map((v,R)=>f.jsx(dv,{question:v,index:R},v.id))}):f.jsxs("div",{className:"card p-12 text-center",children:[f.jsx(am,{className:"w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4"}),f.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No questions found"}),f.jsx("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:d.searchQuery?`No questions match "${d.searchQuery}"`:"No questions match the current filters"}),f.jsx("button",{onClick:b,className:"btn btn-primary",children:"Clear Filters"})]})]})}function fv({isOpen:l,onClose:o}){const{allQuestions:u,categories:c,state:d,setStatus:h}=Ga(),[m,k]=fe.useState(new Set(["all"])),[b,v]=fe.useState(10),[R,U]=fe.useState(new Set(["not_started","studied","needs_review"])),[D,Q]=fe.useState(!0),[z,K]=fe.useState("setup"),[Ee,Oe]=fe.useState([]),[Ce,G]=fe.useState(0),[ie,oe]=fe.useState(!1),[ye,te]=fe.useState([]);fe.useEffect(()=>{l&&(K("setup"),G(0),oe(!1),te([]))},[l]);const Te=fe.useCallback(()=>{let I=[...u];return m.has("all")||(I=I.filter(_=>m.has(_.categoryId))),I=I.filter(_=>{const de=d.progress[_.id]?.status||"not_started";return R.has(de)}),D&&(I=I.sort(()=>Math.random()-.5)),I.slice(0,b)},[u,m,R,D,b,d.progress]),Ye=()=>{const I=Te();I.length!==0&&(Oe(I),K("quiz"),G(0),oe(!1),te([]))},en=I=>{const _=Ee[Ce];te(X=>[...X,{questionId:_.id,result:I}]),I==="got_it"?h(_.id,"studied"):I==="needs_review"&&h(_.id,"needs_review"),Ce<Ee.length-1?(G(X=>X+1),oe(!1)):K("results")},Ze=I=>{k(_=>{const X=new Set(_);if(I==="all")return new Set(["all"]);if(X.delete("all"),X.has(I)){if(X.delete(I),X.size===0)return new Set(["all"])}else X.add(I);return X})},nn=I=>{U(_=>{const X=new Set(_);if(X.has(I)){if(X.delete(I),X.size===0)return new Set([I])}else X.add(I);return X})};if(!l)return null;const Sn=Ee[Ce],tn=ye.filter(I=>I.result==="got_it").length,vn=ye.filter(I=>I.result==="needs_review").length,M=ye.filter(I=>I.result==="skipped").length;return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:f.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[f.jsxs("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:[z==="setup"&&"Quiz Setup",z==="quiz"&&`Question ${Ce+1} of ${Ee.length}`,z==="results"&&"Quiz Complete!"]}),f.jsx("button",{onClick:o,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:f.jsx(yi,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[z==="setup"&&f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Select Categories"}),f.jsxs("div",{className:"flex flex-wrap gap-2",children:[f.jsx("button",{onClick:()=>Ze("all"),className:`btn text-sm ${m.has("all")?"btn-primary":"btn-secondary"}`,children:"All Categories"}),c.map(I=>f.jsx("button",{onClick:()=>Ze(I.id),className:`btn text-sm ${m.has(I.id)?"btn-primary":"btn-secondary"}`,children:I.name},I.id))]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Include Questions With Status"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"not_started",label:"Not Started"},{id:"studied",label:"Studied"},{id:"needs_review",label:"Needs Review"},{id:"mastered",label:"Mastered"}].map(I=>f.jsx("button",{onClick:()=>nn(I.id),className:`btn text-sm ${R.has(I.id)?"btn-primary":"btn-secondary"}`,children:I.label},I.id))})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Number of Questions"}),f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("input",{type:"range",min:"5",max:"50",step:"5",value:b,onChange:I=>v(parseInt(I.target.value)),className:"flex-1"}),f.jsx("span",{className:"text-lg font-medium w-12",children:b})]})]}),f.jsx("div",{className:"flex items-center gap-3",children:f.jsxs("button",{onClick:()=>Q(!D),className:`btn ${D?"btn-primary":"btn-secondary"}`,children:[f.jsx(Ky,{className:"w-4 h-4 mr-2"}),"Shuffle Questions"]})}),f.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[Te().length," questions available with current filters"]})]}),z==="quiz"&&Sn&&f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-blue-500 transition-all duration-300",style:{width:`${(Ce+1)/Ee.length*100}%`}})}),f.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:Sn.categoryName}),f.jsx("div",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:Sn.question}),ie?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"card p-4 bg-gray-50 dark:bg-slate-900/50",children:f.jsx(Em,{content:Sn.answer})}),f.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[f.jsxs("button",{onClick:()=>en("got_it"),className:"btn bg-green-500 text-white hover:bg-green-600 py-4",children:[f.jsx(Ty,{className:"w-5 h-5 mr-2"}),"Got It"]}),f.jsxs("button",{onClick:()=>en("needs_review"),className:"btn bg-amber-500 text-white hover:bg-amber-600 py-4",children:[f.jsx(zs,{className:"w-5 h-5 mr-2"}),"Need Review"]}),f.jsxs("button",{onClick:()=>en("skipped"),className:"btn btn-secondary py-4",children:[f.jsx(Xy,{className:"w-5 h-5 mr-2"}),"Skip"]})]})]}):f.jsx("button",{onClick:()=>oe(!0),className:"btn btn-primary w-full py-4 text-lg",children:"Reveal Answer"})]}),z==="results"&&f.jsxs("div",{className:"text-center space-y-6",children:[f.jsx(ab,{className:"w-20 h-20 mx-auto text-amber-500"}),f.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Quiz Complete!"}),f.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[f.jsxs("div",{className:"card p-4 bg-green-50 dark:bg-green-900/20",children:[f.jsx("div",{className:"text-3xl font-bold text-green-600",children:tn}),f.jsx("div",{className:"text-sm text-green-700 dark:text-green-400",children:"Got It"})]}),f.jsxs("div",{className:"card p-4 bg-amber-50 dark:bg-amber-900/20",children:[f.jsx("div",{className:"text-3xl font-bold text-amber-600",children:vn}),f.jsx("div",{className:"text-sm text-amber-700 dark:text-amber-400",children:"Need Review"})]}),f.jsxs("div",{className:"card p-4 bg-gray-50 dark:bg-slate-700",children:[f.jsx("div",{className:"text-3xl font-bold text-gray-600 dark:text-gray-300",children:M}),f.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Skipped"})]})]}),f.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:["Score: ",Math.round(tn/Ee.length*100),"%"]})]})]}),f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:[z==="setup"&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:o,className:"btn btn-secondary",children:"Cancel"}),f.jsxs("button",{onClick:Ye,className:"btn btn-primary",disabled:Te().length===0,children:["Start Quiz (",Te().length," questions)"]})]}),z==="quiz"&&f.jsxs(f.Fragment,{children:[f.jsxs("button",{onClick:()=>{K("setup"),G(0),oe(!1),te([])},className:"btn btn-secondary",children:[f.jsx(Vy,{className:"w-4 h-4 mr-2"}),"Restart"]}),f.jsxs("div",{className:"text-sm text-gray-500",children:["Press Space to ",ie?"continue":"reveal"]})]}),z==="results"&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:o,className:"btn btn-secondary",children:"Close"}),f.jsx("button",{onClick:()=>{K("setup")},className:"btn btn-primary",children:"New Quiz"})]})]})]})})}function mv({isOpen:l,onClose:o}){const{stats:u,categoryStats:c,state:d,dispatch:h}=Ga();if(!l)return null;const m=Math.round((u.studied+u.mastered)/u.total*100),k=()=>{const R=JSON.stringify({version:1,exportedAt:Date.now(),progress:d.progress},null,2),U=new Blob([R],{type:"application/json"}),D=URL.createObjectURL(U),Q=document.createElement("a");Q.href=D,Q.download=`react-study-progress-${new Date().toISOString().split("T")[0]}.json`,Q.click(),URL.revokeObjectURL(D)},b=()=>{const R=document.createElement("input");R.type="file",R.accept=".json",R.onchange=async U=>{const D=U.target.files?.[0];if(D)try{const Q=await D.text(),z=JSON.parse(Q);z.version===1&&z.progress?(h({type:"IMPORT_PROGRESS",data:z.progress}),alert("Progress imported successfully!")):alert("Invalid file format")}catch{alert("Failed to import file")}},R.click()},v=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&h({type:"RESET_PROGRESS"})};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:f.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[f.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Study Statistics"}),f.jsx("button",{onClick:o,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:f.jsx(yi,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Overall Progress"}),f.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500",style:{width:`${m}%`}})}),f.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:[u.studied+u.mastered," of ",u.total," questions completed (",m,"%)"]})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[f.jsxs("div",{className:"card p-4 text-center",children:[f.jsx(Fc,{className:"w-6 h-6 mx-auto mb-2 text-gray-400"}),f.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.notStarted}),f.jsx("div",{className:"text-xs text-gray-500",children:"Not Started"})]}),f.jsxs("div",{className:"card p-4 text-center",children:[f.jsx(di,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),f.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.studied}),f.jsx("div",{className:"text-xs text-gray-500",children:"Studied"})]}),f.jsxs("div",{className:"card p-4 text-center",children:[f.jsx(zs,{className:"w-6 h-6 mx-auto mb-2 text-amber-500"}),f.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.needsReview}),f.jsx("div",{className:"text-xs text-gray-500",children:"Needs Review"})]}),f.jsxs("div",{className:"card p-4 text-center",children:[f.jsx(pi,{className:"w-6 h-6 mx-auto mb-2 text-green-500"}),f.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:u.mastered}),f.jsx("div",{className:"text-xs text-gray-500",children:"Mastered"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[f.jsx(zc,{className:"w-5 h-5 text-amber-500"}),f.jsxs("span",{children:[u.bookmarked," bookmarked questions"]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Progress by Category"}),f.jsx("div",{className:"space-y-3",children:c.map(R=>{const U=R.studied+R.mastered,D=Math.round(U/R.total*100);return f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between text-sm mb-1",children:[f.jsx("span",{className:"text-gray-700 dark:text-gray-300 truncate",children:R.categoryName}),f.jsxs("span",{className:"text-gray-500 dark:text-gray-400",children:[U,"/",R.total]})]}),f.jsx("div",{className:"h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden",children:f.jsx("div",{className:"h-full bg-green-500 transition-all duration-300",style:{width:`${D}%`}})})]},R.categoryId)})})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4",children:"Data Management"}),f.jsxs("div",{className:"flex flex-wrap gap-2",children:[f.jsxs("button",{onClick:k,className:"btn btn-secondary",children:[f.jsx(Uy,{className:"w-4 h-4 mr-2"}),"Export Progress"]}),f.jsxs("button",{onClick:b,className:"btn btn-secondary",children:[f.jsx(sb,{className:"w-4 h-4 mr-2"}),"Import Progress"]}),f.jsxs("button",{onClick:v,className:"btn bg-red-500 text-white hover:bg-red-600",children:[f.jsx(nb,{className:"w-4 h-4 mr-2"}),"Reset All"]})]})]})]}),f.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:f.jsx("button",{onClick:o,className:"btn btn-primary w-full",children:"Close"})})]})})}const hv=[{key:"/",description:"Focus search"},{key:"Escape",description:"Clear search / Close modal"},{key:"j",description:"Next question"},{key:"k",description:"Previous question"},{key:"Space",description:"Toggle answer / Flip quiz card"},{key:"Enter",description:"Expand/collapse current question"},{key:"s",description:"Mark as studied"},{key:"r",description:"Mark as needs review"},{key:"m",description:"Mark as mastered"},{key:"b",description:"Toggle bookmark"},{key:"e",description:"Expand all questions"},{key:"c",description:"Collapse all questions"},{key:"d",description:"Toggle dark mode"},{key:"q",description:"Open quiz mode"},{key:"?",description:"Show this help"}];function gv({isOpen:l,onClose:o}){return l?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:f.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-xl overflow-hidden",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700",children:[f.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Keyboard Shortcuts"}),f.jsx("button",{onClick:o,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg",children:f.jsx(yi,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:f.jsx("div",{className:"space-y-2",children:hv.map(({key:u,description:c})=>f.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-700 last:border-0",children:[f.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:c}),f.jsx("kbd",{className:"px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm font-mono text-gray-600 dark:text-gray-400",children:u})]},u))})}),f.jsx("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50",children:f.jsx("button",{onClick:o,className:"btn btn-primary w-full",children:"Got it"})})]})}):null}function yv({onOpenQuiz:l,onOpenShortcuts:o}){const{filteredQuestions:u,state:c,dispatch:d,setStatus:h,toggleBookmark:m,toggleExpanded:k}=Ga(),{setTheme:b,isDark:v}=em(),R=fe.useCallback(()=>{for(let D=0;D<u.length;D++)if(c.expandedQuestions.has(u[D].id))return D;return-1},[u,c.expandedQuestions]),U=fe.useCallback(D=>{if(D.target instanceof HTMLInputElement||D.target instanceof HTMLTextAreaElement){D.key==="Escape"&&(D.target.blur(),d({type:"SET_SEARCH",query:""}));return}const Q=R(),z=Q>=0?u[Q]:null;switch(D.key){case"/":D.preventDefault(),document.getElementById("search-input")?.focus();break;case"Escape":d({type:"SET_SEARCH",query:""});break;case"j":if(D.preventDefault(),u.length>0){const K=Q<u.length-1?Q+1:0;z&&d({type:"TOGGLE_EXPANDED",questionId:z.id}),d({type:"TOGGLE_EXPANDED",questionId:u[K].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[K].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case"k":if(D.preventDefault(),u.length>0){const K=Q>0?Q-1:u.length-1;z&&d({type:"TOGGLE_EXPANDED",questionId:z.id}),d({type:"TOGGLE_EXPANDED",questionId:u[K].id}),setTimeout(()=>{document.querySelector(`[data-question-id="${u[K].id}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})},100)}break;case" ":D.preventDefault(),z?k(z.id):u.length>0&&k(u[0].id);break;case"Enter":D.preventDefault(),z&&k(z.id);break;case"s":D.preventDefault(),z&&h(z.id,"studied");break;case"r":D.preventDefault(),z&&h(z.id,"needs_review");break;case"m":D.preventDefault(),z&&h(z.id,"mastered");break;case"b":D.preventDefault(),z&&m(z.id);break;case"e":D.preventDefault(),d({type:"EXPAND_ALL"});break;case"c":D.preventDefault(),d({type:"COLLAPSE_ALL"});break;case"d":D.preventDefault(),b(v?"light":"dark");break;case"q":D.preventDefault(),l();break;case"?":D.preventDefault(),o();break}},[u,R,d,k,h,m,b,v,l,o]);fe.useEffect(()=>(window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)),[U])}function bv(){const[l,o]=fe.useState(!1),[u,c]=fe.useState(!1),[d,h]=fe.useState(!1);return yv({onOpenQuiz:()=>o(!0),onOpenShortcuts:()=>h(!0)}),f.jsxs(f.Fragment,{children:[f.jsx(cb,{onOpenStats:()=>c(!0),onOpenShortcuts:()=>h(!0),onStartQuiz:()=>o(!0),children:f.jsx(pv,{})}),f.jsx(fv,{isOpen:l,onClose:()=>o(!1)}),f.jsx(mv,{isOpen:u,onClose:()=>c(!1)}),f.jsx(gv,{isOpen:d,onClose:()=>h(!1)})]})}function vv(){return f.jsx(my,{children:f.jsx(fy,{children:f.jsx(bv,{})})})}zg.createRoot(document.getElementById("root")).render(f.jsx(fe.StrictMode,{children:f.jsx(vv,{})}));
