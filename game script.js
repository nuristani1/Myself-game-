var QF=Object.create;var{getPrototypeOf:wF,defineProperty:WH,getOwnPropertyNames:GF}=Object;var $F=Object.prototype.hasOwnProperty;function KF(J){return this[J]}var DF,zF,H$=(J,Z,Y)=>{var W=J!=null&&typeof J==="object";if(W){var X=Z?DF??=new WeakMap:zF??=new WeakMap,H=X.get(J);if(H)return H}Y=J!=null?QF(wF(J)):{};let U=Z||!J||!J.__esModule?WH(Y,"default",{value:J,enumerable:!0}):Y;for(let Q of GF(J))if(!$F.call(U,Q))WH(U,Q,{get:KF.bind(J,Q),enumerable:!0});if(W)X.set(J,U);return U};var U$=(J,Z)=>()=>(Z||J((Z={exports:{}}).exports,Z),Z.exports);var RF=(J)=>J;function NF(J,Z){this[J]=RF.bind(null,Z)}var Q$=(J,Z)=>{for(var Y in Z)WH(J,Y,{get:Z[Y],enumerable:!0,configurable:!0,set:NF.bind(Z,Y)})};var NY=(J,Z)=>()=>(J&&(Z=J(J=0)),Z);function CJ(J,Z,Y){this.props=J,this.context=Z,this.refs=x$,this.updater=Y||S$}function f$(){}function j$(J,Z,Y){this.props=J,this.context=Z,this.refs=x$,this.updater=Y||S$}var IF,CF,TF,S$,PF,x$,GH,TJ,KH,PJ,DH=function(J){return J={$$typeof:TF,_currentValue:J,_currentValue2:J,_threadCount:0,Provider:null,Consumer:null},J.Provider=J,J.Consumer={$$typeof:CF,_context:J},J},SJ=function(J,Z){return TJ.H.useCallback(J,Z)},R6=function(J,Z){return TJ.H.useEffect(J,Z)},N6=function(J){return TJ.H.useRef(J)},h1=function(J){return TJ.H.useState(J)},zH="19.2.5";var r9=NY(()=>{IF=Symbol.for("react.strict_mode"),CF=Symbol.for("react.consumer"),TF=Symbol.for("react.context"),S$={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},PF=Object.assign,x$={};CJ.prototype.isReactComponent={};CJ.prototype.setState=function(J,Z){if(typeof J!=="object"&&typeof J!=="function"&&J!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,J,Z,"setState")};CJ.prototype.forceUpdate=function(J){this.updater.enqueueForceUpdate(this,J,"forceUpdate")};f$.prototype=CJ.prototype;GH=j$.prototype=new f$;GH.constructor=j$;PF(GH,CJ.prototype);GH.isPureReactComponent=!0;TJ={H:null,A:null,T:null,S:null};KH=IF,PJ=TJ});function MH(J,Z){var Y=J.length;J.push(Z);J:for(;0<Y;){var W=Y-1>>>1,X=J[W];if(0<AY(X,Z))J[W]=Z,J[Y]=X,Y=W;else break J}}function M7(J){return J.length===0?null:J[0]}function PY(J){if(J.length===0)return null;var Z=J[0],Y=J.pop();if(Y!==Z){J[0]=Y;J:for(var W=0,X=J.length,H=X>>>1;W<H;){var U=2*(W+1)-1,Q=J[U],w=U+1,G=J[w];if(0>AY(Q,Y))w<X&&0>AY(G,Q)?(J[W]=G,J[w]=Y,W=w):(J[W]=Q,J[U]=Y,W=U);else if(w<X&&0>AY(G,Y))J[W]=G,J[w]=Y,W=w;else break J}}return Z}function AY(J,Z){var Y=J.sortIndex-Z.sortIndex;return Y!==0?Y:J.id-Z.id}function CY(J){for(var Z=M7(O6);Z!==null;){if(Z.callback===null)PY(O6);else if(Z.startTime<=J)PY(O6),Z.sortIndex=Z.expirationTime,MH(f7,Z);else break;Z=M7(O6)}}function AH(J){if(bJ=!1,CY(J),!jJ)if(M7(f7)!==null)jJ=!0,J5||(J5=!0,e9());else{var Z=M7(O6);Z!==null&&EH(AH,Z.startTime-J)}}function X2(){return _H?!0:L7()-W2<R4?!1:!0}function qH(){if(_H=!1,J5){var J=L7();W2=J;var Z=!0;try{J:{jJ=!1,bJ&&(bJ=!1,Y2(hJ),hJ=-1),BH=!0;var Y=IY;try{Z:{CY(J);for(n8=M7(f7);n8!==null&&!(n8.expirationTime>J&&X2());){var W=n8.callback;if(typeof W==="function"){n8.callback=null,IY=n8.priorityLevel;var X=W(n8.expirationTime<=J);if(J=L7(),typeof X==="function"){n8.callback=X,CY(J),Z=!0;break Z}n8===M7(f7)&&PY(f7),CY(J)}else PY(f7);n8=M7(f7)}if(n8!==null)Z=!0;else{var H=M7(O6);H!==null&&EH(AH,H.startTime-J),Z=!1}}break J}finally{n8=null,IY=Y,BH=!1}Z=void 0}}finally{Z?e9():J5=!1}}}function EH(J,Z){hJ=Z2(function(){J(L7())},Z)}var L7=void 0,LH,EY,kH,f7,O6,z4=1,n8=null,IY=3,BH=!1,jJ=!1,bJ=!1,_H=!1,Z2,Y2,J2,J5=!1,hJ=-1,R4=5,W2=-1,e9,TY,VH,IH=5,CH=1,TH=4,Z5=3,PH=2,SH=function(J){J.callback=null},xH=function(){return IY},fH=function(){_H=!0},Y5=function(J,Z,Y){var W=L7();switch(typeof Y==="object"&&Y!==null?(Y=Y.delay,Y=typeof Y==="number"&&0<Y?W+Y:W):Y=W,J){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5000}return X=Y+X,J={id:z4++,callback:Z,priorityLevel:J,startTime:Y,expirationTime:X,sortIndex:-1},Y>W?(J.sortIndex=Y,MH(O6,J),M7(f7)===null&&J===M7(O6)&&(bJ?(Y2(hJ),hJ=-1):bJ=!0,EH(AH,Y-W))):(J.sortIndex=X,MH(f7,J),jJ||BH||(jJ=!0,J5||(J5=!0,e9()))),J},jH;var H2=NY(()=>{if(typeof performance==="object"&&typeof performance.now==="function")LH=performance,L7=function(){return LH.now()};else EY=Date,kH=EY.now(),L7=function(){return EY.now()-kH};f7=[],O6=[],Z2=typeof setTimeout==="function"?setTimeout:null,Y2=typeof clearTimeout==="function"?clearTimeout:null,J2=typeof setImmediate<"u"?setImmediate:null;if(typeof J2==="function")e9=function(){J2(qH)};else if(typeof MessageChannel<"u")TY=new MessageChannel,VH=TY.port2,TY.port1.onmessage=qH,e9=function(){VH.postMessage(null)};else e9=function(){Z2(qH,0)};jH=X2});var bH={};Q$(bH,{version:()=>L2,useFormStatus:()=>M2,useFormState:()=>q2,unstable_batchedUpdates:()=>F2,requestFormReset:()=>O2,preloadModule:()=>N2,preload:()=>R2,preinitModule:()=>z2,preinit:()=>D2,prefetchDNS:()=>K2,preconnect:()=>$2,flushSync:()=>G2,createPortal:()=>w2,__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE:()=>Q2});function U2(J){var Z="https://react.dev/errors/"+J;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)Z+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+J+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F6(){}function F4(J,Z,Y){var W=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O4,key:W==null?null:""+W,children:J,containerInfo:Z,implementation:Y}}function SY(J,Z){if(J==="font")return"";if(typeof Z==="string")return Z==="use-credentials"?Z:""}var N8,O4,vJ,Q2,w2=function(J,Z){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Z||Z.nodeType!==1&&Z.nodeType!==9&&Z.nodeType!==11)throw Error(U2(299));return F4(J,Z,null,Y)},G2=function(J){var Z=vJ.T,Y=N8.p;try{if(vJ.T=null,N8.p=2,J)return J()}finally{vJ.T=Z,N8.p=Y,N8.d.f()}},$2=function(J,Z){typeof J==="string"&&(Z?(Z=Z.crossOrigin,Z=typeof Z==="string"?Z==="use-credentials"?Z:"":void 0):Z=null,N8.d.C(J,Z))},K2=function(J){typeof J==="string"&&N8.d.D(J)},D2=function(J,Z){if(typeof J==="string"&&Z&&typeof Z.as==="string"){var Y=Z.as,W=SY(Y,Z.crossOrigin),X=typeof Z.integrity==="string"?Z.integrity:void 0,H=typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0;Y==="style"?N8.d.S(J,typeof Z.precedence==="string"?Z.precedence:void 0,{crossOrigin:W,integrity:X,fetchPriority:H}):Y==="script"&&N8.d.X(J,{crossOrigin:W,integrity:X,fetchPriority:H,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}},z2=function(J,Z){if(typeof J==="string")if(typeof Z==="object"&&Z!==null){if(Z.as==null||Z.as==="script"){var Y=SY(Z.as,Z.crossOrigin);N8.d.M(J,{crossOrigin:Y,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0})}}else Z==null&&N8.d.M(J)},R2=function(J,Z){if(typeof J==="string"&&typeof Z==="object"&&Z!==null&&typeof Z.as==="string"){var Y=Z.as,W=SY(Y,Z.crossOrigin);N8.d.L(J,Y,{crossOrigin:W,integrity:typeof Z.integrity==="string"?Z.integrity:void 0,nonce:typeof Z.nonce==="string"?Z.nonce:void 0,type:typeof Z.type==="string"?Z.type:void 0,fetchPriority:typeof Z.fetchPriority==="string"?Z.fetchPriority:void 0,referrerPolicy:typeof Z.referrerPolicy==="string"?Z.referrerPolicy:void 0,imageSrcSet:typeof Z.imageSrcSet==="string"?Z.imageSrcSet:void 0,imageSizes:typeof Z.imageSizes==="string"?Z.imageSizes:void 0,media:typeof Z.media==="string"?Z.media:void 0})}},N2=function(J,Z){if(typeof J==="string")if(Z){var Y=SY(Z.as,Z.crossOrigin);N8.d.m(J,{as:typeof Z.as==="string"&&Z.as!=="script"?Z.as:void 0,crossOrigin:Y,integrity:typeof Z.integrity==="string"?Z.integrity:void 0})}else N8.d.m(J)},O2=function(J){N8.d.r(J)},F2=function(J,Z){return J(Z)},q2=function(J,Z,Y){return vJ.H.useFormState(J,Z,Y)},M2=function(){return vJ.H.useHostTransitionStatus()},L2="19.2.5";var k2=NY(()=>{r9();N8={d:{f:F6,r:function(){throw Error(U2(522))},D:F6,C:F6,L:F6,m:F6,X:F6,S:F6,M:F6},p:0,findDOMNode:null},O4=Symbol.for("react.portal");vJ=PJ;Q2=N8});var _2=U$((ME,V2)=>{k2();function B2(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B2)}catch(J){console.error(J)}}B2(),V2.exports=bH});var Qw={};Q$(Qw,{version:()=>hR,hydrateRoot:()=>bR,createRoot:()=>jR});function t(J){var Z="https://react.dev/errors/"+J;if(1<arguments.length){Z+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)Z+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+J+"; visit "+Z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function oK(J){return!(!J||J.nodeType!==1&&J.nodeType!==9&&J.nodeType!==11)}function EZ(J){var Z=J,Y=J;if(J.alternate)for(;Z.return;)Z=Z.return;else{J=Z;do Z=J,(Z.flags&4098)!==0&&(Y=Z.return),J=Z.return;while(J)}return Z.tag===3?Y:null}function aK(J){if(J.tag===13){var Z=J.memoizedState;if(Z===null&&(J=J.alternate,J!==null&&(Z=J.memoizedState)),Z!==null)return Z.dehydrated}return null}function rK(J){if(J.tag===31){var Z=J.memoizedState;if(Z===null&&(J=J.alternate,J!==null&&(Z=J.memoizedState)),Z!==null)return Z.dehydrated}return null}function A2(J){if(EZ(J)!==J)throw Error(t(188))}function q4(J){var Z=J.alternate;if(!Z){if(Z=EZ(J),Z===null)throw Error(t(188));return Z!==J?null:J}for(var Y=J,W=Z;;){var X=Y.return;if(X===null)break;var H=X.alternate;if(H===null){if(W=X.return,W!==null){Y=W;continue}break}if(X.child===H.child){for(H=X.child;H;){if(H===Y)return A2(X),J;if(H===W)return A2(X),Z;H=H.sibling}throw Error(t(188))}if(Y.return!==W.return)Y=X,W=H;else{for(var U=!1,Q=X.child;Q;){if(Q===Y){U=!0,Y=X,W=H;break}if(Q===W){U=!0,W=X,Y=H;break}Q=Q.sibling}if(!U){for(Q=H.child;Q;){if(Q===Y){U=!0,Y=H,W=X;break}if(Q===W){U=!0,W=H,Y=X;break}Q=Q.sibling}if(!U)throw Error(t(189))}}if(Y.alternate!==W)throw Error(t(190))}if(Y.tag!==3)throw Error(t(188));return Y.stateNode.current===Y?J:Z}function tK(J){var Z=J.tag;if(Z===5||Z===26||Z===27||Z===6)return J;for(J=J.child;J!==null;){if(Z=tK(J),Z!==null)return Z;J=J.sibling}return null}function yJ(J){if(J===null||typeof J!=="object")return null;return J=E2&&J[E2]||J["@@iterator"],typeof J==="function"?J:null}function qU(J){if(J==null)return null;if(typeof J==="function")return J.$$typeof===k4?null:J.displayName||J.name||null;if(typeof J==="string")return J;switch(J){case w5:return"Fragment";case RU:return"Profiler";case eK:return"StrictMode";case NU:return"Suspense";case OU:return"SuspenseList";case FU:return"Activity"}if(typeof J==="object")switch(J.$$typeof){case lJ:return"Portal";case d7:return J.displayName||"Context";case JD:return(J._context.displayName||"Context")+".Consumer";case KQ:var Z=J.render;return J=J.displayName,J||(J=Z.displayName||Z.name||"",J=J!==""?"ForwardRef("+J+")":"ForwardRef"),J;case DQ:return Z=J.displayName||null,Z!==null?Z:qU(J.type)||"Memo";case q6:Z=J._payload,J=J._init;try{return qU(J(Z))}catch(Y){}}return null}function A7(J){return{current:J}}function e1(J){0>G5||(J.current=MU[G5],MU[G5]=null,G5--)}function k1(J,Z){G5++,MU[G5]=J.current,J.current=Z}function GW(J,Z){switch(k1(T6,Z),k1(DZ,J),k1(_7,null),Z.nodeType){case 9:case 11:J=(J=Z.documentElement)?(J=J.namespaceURI)?SK(J):0:0;break;default:if(J=Z.tagName,Z=Z.namespaceURI)Z=SK(Z),J=LR(Z,J);else switch(J){case"svg":J=1;break;case"math":J=2;break;default:J=0}}e1(_7),k1(_7,J)}function I5(){e1(_7),e1(DZ),e1(T6)}function LU(J){J.memoizedState!==null&&k1(wW,J);var Z=_7.current,Y=LR(Z,J.type);Z!==Y&&(k1(DZ,J),k1(_7,Y))}function $W(J){DZ.current===J&&(e1(_7),e1(DZ)),wW.current===J&&(e1(wW),VZ._currentValue=$9)}function H9(J){if(hH===void 0)try{throw Error()}catch(Y){var Z=Y.stack.trim().match(/\n( *(at )?)/);hH=Z&&Z[1]||"",I2=-1<Y.stack.indexOf(`
    at`)?" (<anonymous>)":-1<Y.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hH+J+I2}function yH(J,Z){if(!J||vH)return"";vH=!0;var Y=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var W={DetermineComponentFrameRoot:function(){try{if(Z){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(R){var D=R}Reflect.construct(J,[],z)}else{try{z.call()}catch(R){D=R}J.call(z.prototype)}}else{try{throw Error()}catch(R){D=R}(z=J())&&typeof z.catch==="function"&&z.catch(function(){})}}catch(R){if(R&&D&&typeof R.stack==="string")return[R.stack,D.stack]}return[null,null]}};W.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var X=Object.getOwnPropertyDescriptor(W.DetermineComponentFrameRoot,"name");X&&X.configurable&&Object.defineProperty(W.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var H=W.DetermineComponentFrameRoot(),U=H[0],Q=H[1];if(U&&Q){var w=U.split(`
`),G=Q.split(`
`);for(X=W=0;W<w.length&&!w[W].includes("DetermineComponentFrameRoot");)W++;for(;X<G.length&&!G[X].includes("DetermineComponentFrameRoot");)X++;if(W===w.length||X===G.length)for(W=w.length-1,X=G.length-1;1<=W&&0<=X&&w[W]!==G[X];)X--;for(;1<=W&&0<=X;W--,X--)if(w[W]!==G[X]){if(W!==1||X!==1)do if(W--,X--,0>X||w[W]!==G[X]){var K=`
`+w[W].replace(" at new "," at ");return J.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",J.displayName)),K}while(1<=W&&0<=X);break}}}finally{vH=!1,Error.prepareStackTrace=Y}return(Y=J?J.displayName||J.name:"")?H9(Y):""}function B4(J,Z){switch(J.tag){case 26:case 27:case 5:return H9(J.type);case 16:return H9("Lazy");case 13:return J.child!==Z&&Z!==null?H9("Suspense Fallback"):H9("Suspense");case 19:return H9("SuspenseList");case 0:case 15:return yH(J.type,!1);case 11:return yH(J.type.render,!1);case 1:return yH(J.type,!0);case 31:return H9("Activity");default:return""}}function C2(J){try{var Z="",Y=null;do Z+=B4(J,Y),Y=J,J=J.return;while(J);return Z}catch(W){return`
Error generating stack: `+W.message+`
`+W.stack}}function _6(J){if(typeof I4==="function"&&C4(J),y8&&typeof y8.setStrictMode==="function")try{y8.setStrictMode(IZ,J)}catch(Z){}}function S4(J){return J>>>=0,J===0?32:31-(T4(J)/P4|0)|0}function U9(J){var Z=J&42;if(Z!==0)return Z;switch(J&-J){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return J&261888;case 262144:case 524288:case 1048576:case 2097152:return J&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return J&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return J}}function vW(J,Z,Y){var W=J.pendingLanes;if(W===0)return 0;var X=0,H=J.suspendedLanes,U=J.pingedLanes;J=J.warmLanes;var Q=W&134217727;return Q!==0?(W=Q&~H,W!==0?X=U9(W):(U&=Q,U!==0?X=U9(U):Y||(Y=Q&~J,Y!==0&&(X=U9(Y))))):(Q=W&~H,Q!==0?X=U9(Q):U!==0?X=U9(U):Y||(Y=W&~J,Y!==0&&(X=U9(Y)))),X===0?0:Z!==0&&Z!==X&&(Z&H)===0&&(H=X&-X,Y=Z&-Z,H>=Y||H===32&&(Y&4194048)!==0)?Z:X}function CZ(J,Z){return(J.pendingLanes&~(J.suspendedLanes&~J.pingedLanes)&Z)===0}function x4(J,Z){switch(J){case 1:case 2:case 4:case 8:case 64:return Z+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return Z+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XD(){var J=bY;return bY<<=1,(bY&62914560)===0&&(bY=4194304),J}function pH(J){for(var Z=[],Y=0;31>Y;Y++)Z.push(J);return Z}function TZ(J,Z){J.pendingLanes|=Z,Z!==268435456&&(J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0)}function f4(J,Z,Y,W,X,H){var U=J.pendingLanes;J.pendingLanes=Y,J.suspendedLanes=0,J.pingedLanes=0,J.warmLanes=0,J.expiredLanes&=Y,J.entangledLanes&=Y,J.errorRecoveryDisabledLanes&=Y,J.shellSuspendCounter=0;var{entanglements:Q,expirationTimes:w,hiddenUpdates:G}=J;for(Y=U&~Y;0<Y;){var K=31-g8(Y),z=1<<K;Q[K]=0,w[K]=-1;var D=G[K];if(D!==null)for(G[K]=null,K=0;K<D.length;K++){var R=D[K];R!==null&&(R.lane&=-536870913)}Y&=~z}W!==0&&HD(J,W,0),H!==0&&X===0&&J.tag!==0&&(J.suspendedLanes|=H&~(U&~Z))}function HD(J,Z,Y){J.pendingLanes|=Z,J.suspendedLanes&=~Z;var W=31-g8(Z);J.entangledLanes|=Z,J.entanglements[W]=J.entanglements[W]|1073741824|Y&261930}function UD(J,Z){var Y=J.entangledLanes|=Z;for(J=J.entanglements;Y;){var W=31-g8(Y),X=1<<W;X&Z|J[W]&Z&&(J[W]|=Z),Y&=~X}}function QD(J,Z){var Y=Z&-Z;return Y=(Y&42)!==0?1:RQ(Y),(Y&(J.suspendedLanes|Z))!==0?0:Y}function RQ(J){switch(J){case 2:J=1;break;case 8:J=4;break;case 32:J=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:J=128;break;case 268435456:J=134217728;break;default:J=0}return J}function NQ(J){return J&=-J,2<J?8<J?(J&134217727)!==0?32:268435456:8:2}function wD(){var J=U1.p;if(J!==0)return J;return J=window.event,J===void 0?32:SR(J.type)}function T2(J,Z){var Y=U1.p;try{return U1.p=J,Z()}finally{U1.p=Y}}function OQ(J){delete J[W8],delete J[C8],delete J[BU],delete J[j4],delete J[b4]}function $5(J){var Z=J[W8];if(Z)return Z;for(var Y=J.parentNode;Y;){if(Z=Y[y5]||Y[W8]){if(Y=Z.alternate,Z.child!==null||Y!==null&&Y.child!==null)for(J=hK(J);J!==null;){if(Y=J[W8])return Y;J=hK(J)}return Z}J=Y,Y=J.parentNode}return null}function g5(J){if(J=J[W8]||J[y5]){var Z=J.tag;if(Z===5||Z===6||Z===13||Z===31||Z===26||Z===27||Z===3)return J}return null}function iJ(J){var Z=J.tag;if(Z===5||Z===26||Z===27||Z===6)return J.stateNode;throw Error(t(33))}function L5(J){var Z=J[P2];return Z||(Z=J[P2]={hoistableStyles:new Map,hoistableScripts:new Map}),Z}function t1(J){J[PZ]=!0}function L9(J,Z){C5(J,Z),C5(J+"Capture",Z)}function C5(J,Z){$D[J]=Z;for(J=0;J<Z.length;J++)GD.add(Z[J])}function v4(J){if(kU.call(x2,J))return!0;if(kU.call(S2,J))return!1;if(h4.test(J))return x2[J]=!0;return S2[J]=!0,!1}function iY(J,Z,Y){if(v4(Z))if(Y===null)J.removeAttribute(Z);else{switch(typeof Y){case"undefined":case"function":case"symbol":J.removeAttribute(Z);return;case"boolean":var W=Z.toLowerCase().slice(0,5);if(W!=="data-"&&W!=="aria-"){J.removeAttribute(Z);return}}J.setAttribute(Z,""+Y)}}function hY(J,Z,Y){if(Y===null)J.removeAttribute(Z);else{switch(typeof Y){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(Z);return}J.setAttribute(Z,""+Y)}}function j7(J,Z,Y,W){if(W===null)J.removeAttribute(Y);else{switch(typeof W){case"undefined":case"function":case"symbol":case"boolean":J.removeAttribute(Y);return}J.setAttributeNS(Z,Y,""+W)}}function a8(J){switch(typeof J){case"bigint":case"boolean":case"number":case"string":case"undefined":return J;case"object":return J;default:return""}}function KD(J){var Z=J.type;return(J=J.nodeName)&&J.toLowerCase()==="input"&&(Z==="checkbox"||Z==="radio")}function y4(J,Z,Y){var W=Object.getOwnPropertyDescriptor(J.constructor.prototype,Z);if(!J.hasOwnProperty(Z)&&typeof W<"u"&&typeof W.get==="function"&&typeof W.set==="function"){var{get:X,set:H}=W;return Object.defineProperty(J,Z,{configurable:!0,get:function(){return X.call(this)},set:function(U){Y=""+U,H.call(this,U)}}),Object.defineProperty(J,Z,{enumerable:W.enumerable}),{getValue:function(){return Y},setValue:function(U){Y=""+U},stopTracking:function(){J._valueTracker=null,delete J[Z]}}}}function VU(J){if(!J._valueTracker){var Z=KD(J)?"checked":"value";J._valueTracker=y4(J,Z,""+J[Z])}}function DD(J){if(!J)return!1;var Z=J._valueTracker;if(!Z)return!0;var Y=Z.getValue(),W="";return J&&(W=KD(J)?J.checked?"true":"false":J.value),J=W,J!==Y?(Z.setValue(J),!0):!1}function DW(J){if(J=J||(typeof document<"u"?document:void 0),typeof J>"u")return null;try{return J.activeElement||J.body}catch(Z){return J.body}}function e8(J){return J.replace(g4,function(Z){return"\\"+Z.charCodeAt(0).toString(16)+" "})}function _U(J,Z,Y,W,X,H,U,Q){if(J.name="",U!=null&&typeof U!=="function"&&typeof U!=="symbol"&&typeof U!=="boolean"?J.type=U:J.removeAttribute("type"),Z!=null)if(U==="number"){if(Z===0&&J.value===""||J.value!=Z)J.value=""+a8(Z)}else J.value!==""+a8(Z)&&(J.value=""+a8(Z));else U!=="submit"&&U!=="reset"||J.removeAttribute("value");Z!=null?AU(J,U,a8(Z)):Y!=null?AU(J,U,a8(Y)):W!=null&&J.removeAttribute("value"),X==null&&H!=null&&(J.defaultChecked=!!H),X!=null&&(J.checked=X&&typeof X!=="function"&&typeof X!=="symbol"),Q!=null&&typeof Q!=="function"&&typeof Q!=="symbol"&&typeof Q!=="boolean"?J.name=""+a8(Q):J.removeAttribute("name")}function zD(J,Z,Y,W,X,H,U,Q){if(H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"&&(J.type=H),Z!=null||Y!=null){if(!(H!=="submit"&&H!=="reset"||Z!==void 0&&Z!==null)){VU(J);return}Y=Y!=null?""+a8(Y):"",Z=Z!=null?""+a8(Z):Y,Q||Z===J.value||(J.value=Z),J.defaultValue=Z}W=W!=null?W:X,W=typeof W!=="function"&&typeof W!=="symbol"&&!!W,J.checked=Q?J.checked:!!W,J.defaultChecked=!!W,U!=null&&typeof U!=="function"&&typeof U!=="symbol"&&typeof U!=="boolean"&&(J.name=U),VU(J)}function AU(J,Z,Y){Z==="number"&&DW(J.ownerDocument)===J||J.defaultValue===""+Y||(J.defaultValue=""+Y)}function k5(J,Z,Y,W){if(J=J.options,Z){Z={};for(var X=0;X<Y.length;X++)Z["$"+Y[X]]=!0;for(Y=0;Y<J.length;Y++)X=Z.hasOwnProperty("$"+J[Y].value),J[Y].selected!==X&&(J[Y].selected=X),X&&W&&(J[Y].defaultSelected=!0)}else{Y=""+a8(Y),Z=null;for(X=0;X<J.length;X++){if(J[X].value===Y){J[X].selected=!0,W&&(J[X].defaultSelected=!0);return}Z!==null||J[X].disabled||(Z=J[X])}Z!==null&&(Z.selected=!0)}}function RD(J,Z,Y){if(Z!=null&&(Z=""+a8(Z),Z!==J.value&&(J.value=Z),Y==null)){J.defaultValue!==Z&&(J.defaultValue=Z);return}J.defaultValue=Y!=null?""+a8(Y):""}function ND(J,Z,Y,W){if(Z==null){if(W!=null){if(Y!=null)throw Error(t(92));if(cJ(W)){if(1<W.length)throw Error(t(93));W=W[0]}Y=W}Y==null&&(Y=""),Z=Y}Y=a8(Z),J.defaultValue=Y,W=J.textContent,W===Y&&W!==""&&W!==null&&(J.value=W),VU(J)}function T5(J,Z){if(Z){var Y=J.firstChild;if(Y&&Y===J.lastChild&&Y.nodeType===3){Y.nodeValue=Z;return}}J.textContent=Z}function f2(J,Z,Y){var W=Z.indexOf("--")===0;Y==null||typeof Y==="boolean"||Y===""?W?J.setProperty(Z,""):Z==="float"?J.cssFloat="":J[Z]="":W?J.setProperty(Z,Y):typeof Y!=="number"||Y===0||p4.has(Z)?Z==="float"?J.cssFloat=Y:J[Z]=(""+Y).trim():J[Z]=Y+"px"}function OD(J,Z,Y){if(Z!=null&&typeof Z!=="object")throw Error(t(62));if(J=J.style,Y!=null){for(var W in Y)!Y.hasOwnProperty(W)||Z!=null&&Z.hasOwnProperty(W)||(W.indexOf("--")===0?J.setProperty(W,""):W==="float"?J.cssFloat="":J[W]="");for(var X in Z)W=Z[X],Z.hasOwnProperty(X)&&Y[X]!==W&&f2(J,X,W)}else for(var H in Z)Z.hasOwnProperty(H)&&f2(J,H,Z[H])}function FQ(J){if(J.indexOf("-")===-1)return!1;switch(J){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function sY(J){return m4.test(""+J)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":J}function m7(){}function qQ(J){return J=J.target||J.srcElement||window,J.correspondingUseElement&&(J=J.correspondingUseElement),J.nodeType===3?J.parentNode:J}function j2(J){var Z=g5(J);if(Z&&(J=Z.stateNode)){var Y=J[C8]||null;J:switch(J=Z.stateNode,Z.type){case"input":if(_U(J,Y.value,Y.defaultValue,Y.defaultValue,Y.checked,Y.defaultChecked,Y.type,Y.name),Z=Y.name,Y.type==="radio"&&Z!=null){for(Y=J;Y.parentNode;)Y=Y.parentNode;Y=Y.querySelectorAll('input[name="'+e8(""+Z)+'"][type="radio"]');for(Z=0;Z<Y.length;Z++){var W=Y[Z];if(W!==J&&W.form===J.form){var X=W[C8]||null;if(!X)throw Error(t(90));_U(W,X.value,X.defaultValue,X.defaultValue,X.checked,X.defaultChecked,X.type,X.name)}}for(Z=0;Z<Y.length;Z++)W=Y[Z],W.form===J.form&&DD(W)}break J;case"textarea":RD(J,Y.value,Y.defaultValue);break J;case"select":Z=Y.value,Z!=null&&k5(J,!!Y.multiple,Z,!1)}}}function FD(J,Z,Y){if(dH)return J(Z,Y);dH=!0;try{var W=J(Z);return W}finally{if(dH=!1,K5!==null||B5!==null){if(oW(),K5&&(Z=K5,J=B5,B5=K5=null,j2(Z),J))for(Z=0;Z<J.length;Z++)j2(J[Z])}}}function zZ(J,Z){var Y=J.stateNode;if(Y===null)return null;var W=Y[C8]||null;if(W===null)return null;Y=W[Z];J:switch(Z){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(W=!W.disabled)||(J=J.type,W=!(J==="button"||J==="input"||J==="select"||J==="textarea")),J=!W;break J;default:J=!1}if(J)return null;if(Y&&typeof Y!=="function")throw Error(t(231,Z,typeof Y));return Y}function qD(){if(nY)return nY;var J,Z=MQ,Y=Z.length,W,X="value"in A6?A6.value:A6.textContent,H=X.length;for(J=0;J<Y&&Z[J]===X[J];J++);var U=Y-J;for(W=1;W<=U&&Z[Y-W]===X[H-W];W++);return nY=X.slice(J,1<W?1-W:void 0)}function oY(J){var Z=J.keyCode;return"charCode"in J?(J=J.charCode,J===0&&Z===13&&(J=13)):J=Z,J===10&&(J=13),32<=J||J===13?J:0}function vY(){return!0}function b2(){return!1}function T8(J){function Z(Y,W,X,H,U){this._reactName=Y,this._targetInst=X,this.type=W,this.nativeEvent=H,this.target=U,this.currentTarget=null;for(var Q in J)J.hasOwnProperty(Q)&&(Y=J[Q],this[Q]=Y?Y(H):H[Q]);return this.isDefaultPrevented=(H.defaultPrevented!=null?H.defaultPrevented:H.returnValue===!1)?vY:b2,this.isPropagationStopped=b2,this}return E1(Z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Y=this.nativeEvent;Y&&(Y.preventDefault?Y.preventDefault():typeof Y.returnValue!=="unknown"&&(Y.returnValue=!1),this.isDefaultPrevented=vY)},stopPropagation:function(){var Y=this.nativeEvent;Y&&(Y.stopPropagation?Y.stopPropagation():typeof Y.cancelBubble!=="unknown"&&(Y.cancelBubble=!0),this.isPropagationStopped=vY)},persist:function(){},isPersistent:vY}),Z}function Zq(J){var Z=this.nativeEvent;return Z.getModifierState?Z.getModifierState(J):(J=Jq[J])?!!Z[J]:!1}function LQ(){return Zq}function LD(J,Z){switch(J){case"keyup":return zq.indexOf(Z.keyCode)!==-1;case"keydown":return Z.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kD(J){return J=J.detail,typeof J==="object"&&"data"in J?J.data:null}function Nq(J,Z){switch(J){case"compositionend":return kD(Z);case"keypress":if(Z.which!==32)return null;return p2=!0,g2;case"textInput":return J=Z.data,J===g2&&p2?null:J;default:return null}}function Oq(J,Z){if(D5)return J==="compositionend"||!kQ&&LD(J,Z)?(J=qD(),nY=MQ=A6=null,D5=!1,J):null;switch(J){case"paste":return null;case"keypress":if(!(Z.ctrlKey||Z.altKey||Z.metaKey)||Z.ctrlKey&&Z.altKey){if(Z.char&&1<Z.char.length)return Z.char;if(Z.which)return String.fromCharCode(Z.which)}return null;case"compositionend":return MD&&Z.locale!=="ko"?null:Z.data;default:return null}}function d2(J){var Z=J&&J.nodeName&&J.nodeName.toLowerCase();return Z==="input"?!!Fq[J.type]:Z==="textarea"?!0:!1}function BD(J,Z,Y,W){K5?B5?B5.push(W):B5=[W]:K5=W,Z=PW(Z,"onChange"),0<Z.length&&(Y=new yW("onChange","change",null,Y,W),J.push({event:Y,listeners:Z}))}function qq(J){FR(J,0)}function pW(J){var Z=iJ(J);if(DD(Z))return J}function m2(J,Z){if(J==="change")return Z}function u2(){JZ&&(JZ.detachEvent("onpropertychange",_D),RZ=JZ=null)}function _D(J){if(J.propertyName==="value"&&pW(RZ)){var Z=[];BD(Z,RZ,J,qQ(J)),FD(qq,Z)}}function Mq(J,Z,Y){J==="focusin"?(u2(),JZ=Z,RZ=Y,JZ.attachEvent("onpropertychange",_D)):J==="focusout"&&u2()}function Lq(J){if(J==="selectionchange"||J==="keyup"||J==="keydown")return pW(RZ)}function kq(J,Z){if(J==="click")return pW(Z)}function Bq(J,Z){if(J==="input"||J==="change")return pW(Z)}function Vq(J,Z){return J===Z&&(J!==0||1/J===1/Z)||J!==J&&Z!==Z}function NZ(J,Z){if(d8(J,Z))return!0;if(typeof J!=="object"||J===null||typeof Z!=="object"||Z===null)return!1;var Y=Object.keys(J),W=Object.keys(Z);if(Y.length!==W.length)return!1;for(W=0;W<Y.length;W++){var X=Y[W];if(!kU.call(Z,X)||!d8(J[X],Z[X]))return!1}return!0}function l2(J){for(;J&&J.firstChild;)J=J.firstChild;return J}function c2(J,Z){var Y=l2(J);J=0;for(var W;Y;){if(Y.nodeType===3){if(W=J+Y.textContent.length,J<=Z&&W>=Z)return{node:Y,offset:Z-J};J=W}J:{for(;Y;){if(Y.nextSibling){Y=Y.nextSibling;break J}Y=Y.parentNode}Y=void 0}Y=l2(Y)}}function AD(J,Z){return J&&Z?J===Z?!0:J&&J.nodeType===3?!1:Z&&Z.nodeType===3?AD(J,Z.parentNode):("contains"in J)?J.contains(Z):J.compareDocumentPosition?!!(J.compareDocumentPosition(Z)&16):!1:!1}function ED(J){J=J!=null&&J.ownerDocument!=null&&J.ownerDocument.defaultView!=null?J.ownerDocument.defaultView:window;for(var Z=DW(J.document);Z instanceof J.HTMLIFrameElement;){try{var Y=typeof Z.contentWindow.location.href==="string"}catch(W){Y=!1}if(Y)J=Z.contentWindow;else break;Z=DW(J.document)}return Z}function BQ(J){var Z=J&&J.nodeName&&J.nodeName.toLowerCase();return Z&&(Z==="input"&&(J.type==="text"||J.type==="search"||J.type==="tel"||J.type==="url"||J.type==="password")||Z==="textarea"||J.contentEditable==="true")}function i2(J,Z,Y){var W=Y.window===Y?Y.document:Y.nodeType===9?Y:Y.ownerDocument;TU||z5==null||z5!==DW(W)||(W=z5,("selectionStart"in W)&&BQ(W)?W={start:W.selectionStart,end:W.selectionEnd}:(W=(W.ownerDocument&&W.ownerDocument.defaultView||window).getSelection(),W={anchorNode:W.anchorNode,anchorOffset:W.anchorOffset,focusNode:W.focusNode,focusOffset:W.focusOffset}),ZZ&&NZ(ZZ,W)||(ZZ=W,W=PW(CU,"onSelect"),0<W.length&&(Z=new yW("onSelect","select",null,Z,Y),J.push({event:Z,listeners:W}),Z.target=z5)))}function X9(J,Z){var Y={};return Y[J.toLowerCase()]=Z.toLowerCase(),Y["Webkit"+J]="webkit"+Z,Y["Moz"+J]="moz"+Z,Y}function B9(J){if(cH[J])return cH[J];if(!R5[J])return J;var Z=R5[J],Y;for(Y in Z)if(Z.hasOwnProperty(Y)&&Y in ID)return cH[J]=Z[Y];return J}function D7(J,Z){xD.set(J,Z),L9(Z,[J])}function dW(){for(var J=N5,Z=VQ=N5=0;Z<J;){var Y=o8[Z];o8[Z++]=null;var W=o8[Z];o8[Z++]=null;var X=o8[Z];o8[Z++]=null;var H=o8[Z];if(o8[Z++]=null,W!==null&&X!==null){var U=W.pending;U===null?X.next=X:(X.next=U.next,U.next=X),W.pending=X}H!==0&&fD(Y,X,H)}}function mW(J,Z,Y,W){o8[N5++]=J,o8[N5++]=Z,o8[N5++]=Y,o8[N5++]=W,VQ|=W,J.lanes|=W,J=J.alternate,J!==null&&(J.lanes|=W)}function _Q(J,Z,Y,W){return mW(J,Z,Y,W),RW(J)}function V9(J,Z){return mW(J,null,null,Z),RW(J)}function fD(J,Z,Y){J.lanes|=Y;var W=J.alternate;W!==null&&(W.lanes|=Y);for(var X=!1,H=J.return;H!==null;)H.childLanes|=Y,W=H.alternate,W!==null&&(W.childLanes|=Y),H.tag===22&&(J=H.stateNode,J===null||J._visibility&1||(X=!0)),J=H,H=H.return;return J.tag===3?(H=J.stateNode,X&&Z!==null&&(X=31-g8(Y),J=H.hiddenUpdates,W=J[X],W===null?J[X]=[Z]:W.push(Z),Z.lane=Y|536870912),H):null}function RW(J){if(50<$Z)throw $Z=0,rU=null,Error(t(185));for(var Z=J.return;Z!==null;)J=Z,Z=J.return;return J.tag===3?J.stateNode:null}function Cq(J,Z,Y,W){this.tag=J,this.key=Y,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=Z,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=W,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function b8(J,Z,Y,W){return new Cq(J,Z,Y,W)}function AQ(J){return J=J.prototype,!(!J||!J.isReactComponent)}function l7(J,Z){var Y=J.alternate;return Y===null?(Y=b8(J.tag,Z,J.key,J.mode),Y.elementType=J.elementType,Y.type=J.type,Y.stateNode=J.stateNode,Y.alternate=J,J.alternate=Y):(Y.pendingProps=Z,Y.type=J.type,Y.flags=0,Y.subtreeFlags=0,Y.deletions=null),Y.flags=J.flags&65011712,Y.childLanes=J.childLanes,Y.lanes=J.lanes,Y.child=J.child,Y.memoizedProps=J.memoizedProps,Y.memoizedState=J.memoizedState,Y.updateQueue=J.updateQueue,Z=J.dependencies,Y.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext},Y.sibling=J.sibling,Y.index=J.index,Y.ref=J.ref,Y.refCleanup=J.refCleanup,Y}function jD(J,Z){J.flags&=65011714;var Y=J.alternate;return Y===null?(J.childLanes=0,J.lanes=Z,J.child=null,J.subtreeFlags=0,J.memoizedProps=null,J.memoizedState=null,J.updateQueue=null,J.dependencies=null,J.stateNode=null):(J.childLanes=Y.childLanes,J.lanes=Y.lanes,J.child=Y.child,J.subtreeFlags=0,J.deletions=null,J.memoizedProps=Y.memoizedProps,J.memoizedState=Y.memoizedState,J.updateQueue=Y.updateQueue,J.type=Y.type,Z=Y.dependencies,J.dependencies=Z===null?null:{lanes:Z.lanes,firstContext:Z.firstContext}),J}function rY(J,Z,Y,W,X,H){var U=0;if(W=J,typeof J==="function")AQ(J)&&(U=1);else if(typeof J==="string")U=SM(J,Y,_7.current)?26:J==="html"||J==="head"||J==="body"?27:5;else J:switch(J){case FU:return J=b8(31,Y,Z,X),J.elementType=FU,J.lanes=H,J;case w5:return K9(Y.children,X,H,Z);case eK:U=8,X|=24;break;case RU:return J=b8(12,Y,Z,X|2),J.elementType=RU,J.lanes=H,J;case NU:return J=b8(13,Y,Z,X),J.elementType=NU,J.lanes=H,J;case OU:return J=b8(19,Y,Z,X),J.elementType=OU,J.lanes=H,J;default:if(typeof J==="object"&&J!==null)switch(J.$$typeof){case d7:U=10;break J;case JD:U=9;break J;case KQ:U=11;break J;case DQ:U=14;break J;case q6:U=16,W=null;break J}U=29,Y=Error(t(130,J===null?"null":typeof J,"")),W=null}return Z=b8(U,Y,Z,X),Z.elementType=J,Z.type=W,Z.lanes=H,Z}function K9(J,Z,Y,W){return J=b8(7,J,W,Z),J.lanes=Y,J}function iH(J,Z,Y){return J=b8(6,J,null,Z),J.lanes=Y,J}function bD(J){var Z=b8(18,null,null,0);return Z.stateNode=J,Z}function sH(J,Z,Y){return Z=b8(4,J.children!==null?J.children:[],J.key,Z),Z.lanes=Y,Z.stateNode={containerInfo:J.containerInfo,pendingChildren:null,implementation:J.implementation},Z}function J7(J,Z){if(typeof J==="object"&&J!==null){var Y=s2.get(J);if(Y!==void 0)return Y;return Z={value:J,source:Z,stack:C2(Z)},s2.set(J,Z),Z}return{value:J,source:Z,stack:C2(Z)}}function g7(J,Z){F5[q5++]=OZ,F5[q5++]=NW,NW=J,OZ=Z}function hD(J,Z,Y){r8[t8++]=k7,r8[t8++]=B7,r8[t8++]=y6,y6=J;var W=k7;J=B7;var X=32-g8(W)-1;W&=~(1<<X),Y+=1;var H=32-g8(Z)+X;if(30<H){var U=X-X%5;H=(W&(1<<U)-1).toString(32),W>>=U,X-=U,k7=1<<32-g8(Z)+X|Y<<X|W,B7=H+J}else k7=1<<H|Y<<X|W,B7=J}function EQ(J){J.return!==null&&(g7(J,1),hD(J,1,0))}function IQ(J){for(;J===NW;)NW=F5[--q5],F5[q5]=null,OZ=F5[--q5],F5[q5]=null;for(;J===y6;)y6=r8[--t8],r8[t8]=null,B7=r8[--t8],r8[t8]=null,k7=r8[--t8],r8[t8]=null}function vD(J,Z){r8[t8++]=k7,r8[t8++]=B7,r8[t8++]=y6,k7=Z.id,B7=Z.overflow,y6=J}function g6(J){var Z=Error(t(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw FZ(J7(Z,J)),SU}function n2(J){var{stateNode:Z,type:Y,memoizedProps:W}=J;switch(Z[W8]=J,Z[C8]=W,Y){case"dialog":o0("cancel",Z),o0("close",Z);break;case"iframe":case"object":case"embed":o0("load",Z);break;case"video":case"audio":for(Y=0;Y<kZ.length;Y++)o0(kZ[Y],Z);break;case"source":o0("error",Z);break;case"img":case"image":case"link":o0("error",Z),o0("load",Z);break;case"details":o0("toggle",Z);break;case"input":o0("invalid",Z),zD(Z,W.value,W.defaultValue,W.checked,W.defaultChecked,W.type,W.name,!0);break;case"select":o0("invalid",Z);break;case"textarea":o0("invalid",Z),ND(Z,W.value,W.defaultValue,W.children)}Y=W.children,typeof Y!=="string"&&typeof Y!=="number"&&typeof Y!=="bigint"||Z.textContent===""+Y||W.suppressHydrationWarning===!0||MR(Z.textContent,Y)?(W.popover!=null&&(o0("beforetoggle",Z),o0("toggle",Z)),W.onScroll!=null&&o0("scroll",Z),W.onScrollEnd!=null&&o0("scrollend",Z),W.onClick!=null&&(Z.onclick=m7),Z=!0):Z=!1,Z||g6(J,!0)}function o2(J){for(X8=J.return;X8;)switch(X8.tag){case 5:case 31:case 13:Z7=!1;return;case 27:case 3:Z7=!0;return;default:X8=X8.return}}function W5(J){if(J!==X8)return!1;if(!J1)return o2(J),J1=!0,!1;var Z=J.tag,Y;if(Y=Z!==3&&Z!==27){if(Y=Z===5)Y=J.type,Y=!(Y!=="form"&&Y!=="button")||XQ(J.type,J.memoizedProps);Y=!Y}if(Y&&A1&&g6(J),o2(J),Z===13){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(t(317));A1=bK(J)}else if(Z===31){if(J=J.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(t(317));A1=bK(J)}else Z===27?(Z=A1,u6(J.type)?(J=wQ,wQ=null,A1=J):A1=Z):A1=X8?W7(J.stateNode.nextSibling):null;return!0}function N9(){A1=X8=null,J1=!1}function nH(){var J=P6;return J!==null&&(E8===null?E8=J:E8.push.apply(E8,J),P6=null),J}function FZ(J){P6===null?P6=[J]:P6.push(J)}function L6(J,Z,Y){k1(xU,Z._currentValue),Z._currentValue=Y}function c7(J){J._currentValue=xU.current,e1(xU)}function fU(J,Z,Y){for(;J!==null;){var W=J.alternate;if((J.childLanes&Z)!==Z?(J.childLanes|=Z,W!==null&&(W.childLanes|=Z)):W!==null&&(W.childLanes&Z)!==Z&&(W.childLanes|=Z),J===Y)break;J=J.return}}function jU(J,Z,Y,W){var X=J.child;X!==null&&(X.return=J);for(;X!==null;){var H=X.dependencies;if(H!==null){var U=X.child;H=H.firstContext;J:for(;H!==null;){var Q=H;H=X;for(var w=0;w<Z.length;w++)if(Q.context===Z[w]){H.lanes|=Y,Q=H.alternate,Q!==null&&(Q.lanes|=Y),fU(H.return,Y,J),W||(U=null);break J}H=Q.next}}else if(X.tag===18){if(U=X.return,U===null)throw Error(t(341));U.lanes|=Y,H=U.alternate,H!==null&&(H.lanes|=Y),fU(U,Y,J),U=null}else U=X.child;if(U!==null)U.return=X;else for(U=X;U!==null;){if(U===J){U=null;break}if(X=U.sibling,X!==null){X.return=U.return,U=X;break}U=U.return}X=U}}function p5(J,Z,Y,W){J=null;for(var X=Z,H=!1;X!==null;){if(!H){if((X.flags&524288)!==0)H=!0;else if((X.flags&262144)!==0)break}if(X.tag===10){var U=X.alternate;if(U===null)throw Error(t(387));if(U=U.memoizedProps,U!==null){var Q=X.type;d8(X.pendingProps.value,U.value)||(J!==null?J.push(Q):J=[Q])}}else if(X===wW.current){if(U=X.alternate,U===null)throw Error(t(387));U.memoizedState.memoizedState!==X.memoizedState.memoizedState&&(J!==null?J.push(VZ):J=[VZ])}X=X.return}J!==null&&jU(Z,J,Y,W),Z.flags|=262144}function OW(J){for(J=J.firstContext;J!==null;){if(!d8(J.context._currentValue,J.memoizedValue))return!0;J=J.next}return!1}function O9(J){_9=J,u7=null,J=J.dependencies,J!==null&&(J.firstContext=null)}function H8(J){return yD(_9,J)}function yY(J,Z){return _9===null&&O9(J),yD(J,Z)}function yD(J,Z){var Y=Z._currentValue;if(Z={context:Z,memoizedValue:Y,next:null},u7===null){if(J===null)throw Error(t(308));u7=Z,J.dependencies={lanes:0,firstContext:Z},J.flags|=524288}else u7=u7.next=Z;return Y}function CQ(){return{controller:new Tq,data:new Map,refCount:0}}function xZ(J){J.refCount--,J.refCount===0&&Pq(Sq,function(){J.controller.abort()})}function xq(J,Z){if(YZ===null){var Y=YZ=[];bU=0,P5=eQ(),V5={status:"pending",value:void 0,then:function(W){Y.push(W)}}}return bU++,Z.then(a2,a2),Z}function a2(){if(--bU===0&&YZ!==null){V5!==null&&(V5.status="fulfilled");var J=YZ;YZ=null,P5=0,V5=null;for(var Z=0;Z<J.length;Z++)(0,J[Z])()}}function fq(J,Z){var Y=[],W={status:"pending",value:null,reason:null,then:function(X){Y.push(X)}};return J.then(function(){W.status="fulfilled",W.value=Z;for(var X=0;X<Y.length;X++)(0,Y[X])(Z)},function(X){W.status="rejected",W.reason=X;for(X=0;X<Y.length;X++)(0,Y[X])(void 0)}),W}function TQ(){var J=D9.current;return J!==null?J:M1.pooledCache}function tY(J,Z){Z===null?k1(D9,D9.current):k1(D9,Z.pool)}function gD(){var J=TQ();return J===null?null:{parent:l1._currentValue,pool:J}}function t2(J){return J=J.status,J==="fulfilled"||J==="rejected"}function pD(J,Z,Y){switch(Y=J[Y],Y===void 0?J.push(Z):Y!==Z&&(Z.then(m7,m7),Z=Y),Z.status){case"fulfilled":return Z.value;case"rejected":throw J=Z.reason,JK(J),J;default:if(typeof Z.status==="string")Z.then(m7,m7);else{if(J=M1,J!==null&&100<J.shellSuspendCounter)throw Error(t(482));J=Z,J.status="pending",J.then(function(W){if(Z.status==="pending"){var X=Z;X.status="fulfilled",X.value=W}},function(W){if(Z.status==="pending"){var X=Z;X.status="rejected",X.reason=W}})}switch(Z.status){case"fulfilled":return Z.value;case"rejected":throw J=Z.reason,JK(J),J}throw z9=Z,d5}}function w9(J){try{var Z=J._init;return Z(J._payload)}catch(Y){if(Y!==null&&typeof Y==="object"&&typeof Y.then==="function")throw z9=Y,d5;throw Y}}function e2(){if(z9===null)throw Error(t(459));var J=z9;return z9=null,J}function JK(J){if(J===d5||J===uW)throw Error(t(483))}function gY(J){var Z=qZ;return qZ+=1,_5===null&&(_5=[]),pD(_5,J,Z)}function pJ(J,Z){Z=Z.props.ref,J.ref=Z!==void 0?Z:null}function pY(J,Z){if(Z.$$typeof===M4)throw Error(t(525));throw J=Object.prototype.toString.call(Z),Error(t(31,J==="[object Object]"?"object with keys {"+Object.keys(Z).join(", ")+"}":J))}function dD(J){function Z($,F){if(J){var N=$.deletions;N===null?($.deletions=[F],$.flags|=16):N.push(F)}}function Y($,F){if(!J)return null;for(;F!==null;)Z($,F),F=F.sibling;return null}function W($){for(var F=new Map;$!==null;)$.key!==null?F.set($.key,$):F.set($.index,$),$=$.sibling;return F}function X($,F){return $=l7($,F),$.index=0,$.sibling=null,$}function H($,F,N){if($.index=N,!J)return $.flags|=1048576,F;if(N=$.alternate,N!==null)return N=N.index,N<F?($.flags|=67108866,F):N;return $.flags|=67108866,F}function U($){return J&&$.alternate===null&&($.flags|=67108866),$}function Q($,F,N,M){if(F===null||F.tag!==6)return F=iH(N,$.mode,M),F.return=$,F;return F=X(F,N),F.return=$,F}function w($,F,N,M){var I=N.type;if(I===w5)return K($,F,N.props.children,M,N.key);if(F!==null&&(F.elementType===I||typeof I==="object"&&I!==null&&I.$$typeof===q6&&w9(I)===F.type))return F=X(F,N.props),pJ(F,N),F.return=$,F;return F=rY(N.type,N.key,N.props,null,$.mode,M),pJ(F,N),F.return=$,F}function G($,F,N,M){if(F===null||F.tag!==4||F.stateNode.containerInfo!==N.containerInfo||F.stateNode.implementation!==N.implementation)return F=sH(N,$.mode,M),F.return=$,F;return F=X(F,N.children||[]),F.return=$,F}function K($,F,N,M,I){if(F===null||F.tag!==7)return F=K9(N,$.mode,M,I),F.return=$,F;return F=X(F,N),F.return=$,F}function z($,F,N){if(typeof F==="string"&&F!==""||typeof F==="number"||typeof F==="bigint")return F=iH(""+F,$.mode,N),F.return=$,F;if(typeof F==="object"&&F!==null){switch(F.$$typeof){case xY:return N=rY(F.type,F.key,F.props,null,$.mode,N),pJ(N,F),N.return=$,N;case lJ:return F=sH(F,$.mode,N),F.return=$,F;case q6:return F=w9(F),z($,F,N)}if(cJ(F)||yJ(F))return F=K9(F,$.mode,N,null),F.return=$,F;if(typeof F.then==="function")return z($,gY(F),N);if(F.$$typeof===d7)return z($,yY($,F),N);pY($,F)}return null}function D($,F,N,M){var I=F!==null?F.key:null;if(typeof N==="string"&&N!==""||typeof N==="number"||typeof N==="bigint")return I!==null?null:Q($,F,""+N,M);if(typeof N==="object"&&N!==null){switch(N.$$typeof){case xY:return N.key===I?w($,F,N,M):null;case lJ:return N.key===I?G($,F,N,M):null;case q6:return N=w9(N),D($,F,N,M)}if(cJ(N)||yJ(N))return I!==null?null:K($,F,N,M,null);if(typeof N.then==="function")return D($,F,gY(N),M);if(N.$$typeof===d7)return D($,F,yY($,N),M);pY($,N)}return null}function R($,F,N,M,I){if(typeof M==="string"&&M!==""||typeof M==="number"||typeof M==="bigint")return $=$.get(N)||null,Q(F,$,""+M,I);if(typeof M==="object"&&M!==null){switch(M.$$typeof){case xY:return $=$.get(M.key===null?N:M.key)||null,w(F,$,M,I);case lJ:return $=$.get(M.key===null?N:M.key)||null,G(F,$,M,I);case q6:return M=w9(M),R($,F,N,M,I)}if(cJ(M)||yJ(M))return $=$.get(N)||null,K(F,$,M,I,null);if(typeof M.then==="function")return R($,F,N,gY(M),I);if(M.$$typeof===d7)return R($,F,N,yY(F,M),I);pY(F,M)}return null}function q($,F,N,M){for(var I=null,E=null,A=F,f=F=0,B=null;A!==null&&f<N.length;f++){A.index>f?(B=A,A=null):B=A.sibling;var V=D($,A,N[f],M);if(V===null){A===null&&(A=B);break}J&&A&&V.alternate===null&&Z($,A),F=H(V,F,f),E===null?I=V:E.sibling=V,E=V,A=B}if(f===N.length)return Y($,A),J1&&g7($,f),I;if(A===null){for(;f<N.length;f++)A=z($,N[f],M),A!==null&&(F=H(A,F,f),E===null?I=A:E.sibling=A,E=A);return J1&&g7($,f),I}for(A=W(A);f<N.length;f++)B=R(A,$,f,N[f],M),B!==null&&(J&&B.alternate!==null&&A.delete(B.key===null?f:B.key),F=H(B,F,f),E===null?I=B:E.sibling=B,E=B);return J&&A.forEach(function(T){return Z($,T)}),J1&&g7($,f),I}function L($,F,N,M){if(N==null)throw Error(t(151));for(var I=null,E=null,A=F,f=F=0,B=null,V=N.next();A!==null&&!V.done;f++,V=N.next()){A.index>f?(B=A,A=null):B=A.sibling;var T=D($,A,V.value,M);if(T===null){A===null&&(A=B);break}J&&A&&T.alternate===null&&Z($,A),F=H(T,F,f),E===null?I=T:E.sibling=T,E=T,A=B}if(V.done)return Y($,A),J1&&g7($,f),I;if(A===null){for(;!V.done;f++,V=N.next())V=z($,V.value,M),V!==null&&(F=H(V,F,f),E===null?I=V:E.sibling=V,E=V);return J1&&g7($,f),I}for(A=W(A);!V.done;f++,V=N.next())V=R(A,$,f,V.value,M),V!==null&&(J&&V.alternate!==null&&A.delete(V.key===null?f:V.key),F=H(V,F,f),E===null?I=V:E.sibling=V,E=V);return J&&A.forEach(function(b){return Z($,b)}),J1&&g7($,f),I}function O($,F,N,M){if(typeof N==="object"&&N!==null&&N.type===w5&&N.key===null&&(N=N.props.children),typeof N==="object"&&N!==null){switch(N.$$typeof){case xY:J:{for(var I=N.key;F!==null;){if(F.key===I){if(I=N.type,I===w5){if(F.tag===7){Y($,F.sibling),M=X(F,N.props.children),M.return=$,$=M;break J}}else if(F.elementType===I||typeof I==="object"&&I!==null&&I.$$typeof===q6&&w9(I)===F.type){Y($,F.sibling),M=X(F,N.props),pJ(M,N),M.return=$,$=M;break J}Y($,F);break}else Z($,F);F=F.sibling}N.type===w5?(M=K9(N.props.children,$.mode,M,N.key),M.return=$,$=M):(M=rY(N.type,N.key,N.props,null,$.mode,M),pJ(M,N),M.return=$,$=M)}return U($);case lJ:J:{for(I=N.key;F!==null;){if(F.key===I)if(F.tag===4&&F.stateNode.containerInfo===N.containerInfo&&F.stateNode.implementation===N.implementation){Y($,F.sibling),M=X(F,N.children||[]),M.return=$,$=M;break J}else{Y($,F);break}else Z($,F);F=F.sibling}M=sH(N,$.mode,M),M.return=$,$=M}return U($);case q6:return N=w9(N),O($,F,N,M)}if(cJ(N))return q($,F,N,M);if(yJ(N)){if(I=yJ(N),typeof I!=="function")throw Error(t(150));return N=I.call(N),L($,F,N,M)}if(typeof N.then==="function")return O($,F,gY(N),M);if(N.$$typeof===d7)return O($,F,yY($,N),M);pY($,N)}return typeof N==="string"&&N!==""||typeof N==="number"||typeof N==="bigint"?(N=""+N,F!==null&&F.tag===6?(Y($,F.sibling),M=X(F,N),M.return=$,$=M):(Y($,F),M=iH(N,$.mode,M),M.return=$,$=M),U($)):Y($,F)}return function($,F,N,M){try{qZ=0;var I=O($,F,N,M);return _5=null,I}catch(A){if(A===d5||A===uW)throw A;var E=b8(29,A,null,$.mode);return E.lanes=M,E.return=$,E}finally{}}}function SQ(J){J.updateQueue={baseState:J.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hU(J,Z){J=J.updateQueue,Z.updateQueue===J&&(Z.updateQueue={baseState:J.baseState,firstBaseUpdate:J.firstBaseUpdate,lastBaseUpdate:J.lastBaseUpdate,shared:J.shared,callbacks:null})}function S6(J){return{lane:J,tag:0,payload:null,callback:null,next:null}}function x6(J,Z,Y){var W=J.updateQueue;if(W===null)return null;if(W=W.shared,(H1&2)!==0){var X=W.pending;return X===null?Z.next=Z:(Z.next=X.next,X.next=Z),W.pending=Z,Z=RW(J),fD(J,null,Y),Z}return mW(J,W,Z,Y),RW(J)}function WZ(J,Z,Y){if(Z=Z.updateQueue,Z!==null&&(Z=Z.shared,(Y&4194048)!==0)){var W=Z.lanes;W&=J.pendingLanes,Y|=W,Z.lanes=Y,UD(J,Y)}}function oH(J,Z){var{updateQueue:Y,alternate:W}=J;if(W!==null&&(W=W.updateQueue,Y===W)){var X=null,H=null;if(Y=Y.firstBaseUpdate,Y!==null){do{var U={lane:Y.lane,tag:Y.tag,payload:Y.payload,callback:null,next:null};H===null?X=H=U:H=H.next=U,Y=Y.next}while(Y!==null);H===null?X=H=Z:H=H.next=Z}else X=H=Z;Y={baseState:W.baseState,firstBaseUpdate:X,lastBaseUpdate:H,shared:W.shared,callbacks:W.callbacks},J.updateQueue=Y;return}J=Y.lastBaseUpdate,J===null?Y.firstBaseUpdate=Z:J.next=Z,Y.lastBaseUpdate=Z}function XZ(){if(vU){var J=V5;if(J!==null)throw J}}function HZ(J,Z,Y,W){vU=!1;var X=J.updateQueue;M6=!1;var{firstBaseUpdate:H,lastBaseUpdate:U}=X,Q=X.shared.pending;if(Q!==null){X.shared.pending=null;var w=Q,G=w.next;w.next=null,U===null?H=G:U.next=G,U=w;var K=J.alternate;K!==null&&(K=K.updateQueue,Q=K.lastBaseUpdate,Q!==U&&(Q===null?K.firstBaseUpdate=G:Q.next=G,K.lastBaseUpdate=w))}if(H!==null){var z=X.baseState;U=0,K=G=w=null,Q=H;do{var D=Q.lane&-536870913,R=D!==Q.lane;if(R?(e0&D)===D:(W&D)===D){D!==0&&D===P5&&(vU=!0),K!==null&&(K=K.next={lane:0,tag:Q.tag,payload:Q.payload,callback:null,next:null});J:{var q=J,L=Q;D=Z;var O=Y;switch(L.tag){case 1:if(q=L.payload,typeof q==="function"){z=q.call(O,z,D);break J}z=q;break J;case 3:q.flags=q.flags&-65537|128;case 0:if(q=L.payload,D=typeof q==="function"?q.call(O,z,D):q,D===null||D===void 0)break J;z=E1({},z,D);break J;case 2:M6=!0}}D=Q.callback,D!==null&&(J.flags|=64,R&&(J.flags|=8192),R=X.callbacks,R===null?X.callbacks=[D]:R.push(D))}else R={lane:D,tag:Q.tag,payload:Q.payload,callback:Q.callback,next:null},K===null?(G=K=R,w=z):K=K.next=R,U|=D;if(Q=Q.next,Q===null)if(Q=X.shared.pending,Q===null)break;else R=Q,Q=R.next,R.next=null,X.lastBaseUpdate=R,X.shared.pending=null}while(1);K===null&&(w=z),X.baseState=w,X.firstBaseUpdate=G,X.lastBaseUpdate=K,H===null&&(X.shared.lanes=0),d6|=U,J.lanes=U,J.memoizedState=z}}function uD(J,Z){if(typeof J!=="function")throw Error(t(191,J));J.call(Z)}function lD(J,Z){var Y=J.callbacks;if(Y!==null)for(J.callbacks=null,J=0;J<Y.length;J++)uD(Y[J],Z)}function ZK(J,Z){J=r7,k1(qW,J),k1(S5,Z),r7=J|Z.baseLanes}function yU(){k1(qW,r7),k1(S5,S5.current)}function xQ(){r7=qW.current,e1(S5),e1(qW)}function k6(J){var Z=J.alternate;k1(v1,v1.current&1),k1(m8,J),Y7===null&&(Z===null||S5.current!==null?Y7=J:Z.memoizedState!==null&&(Y7=J))}function gU(J){k1(v1,v1.current),k1(m8,J),Y7===null&&(Y7=J)}function cD(J){J.tag===22?(k1(v1,v1.current),k1(m8,J),Y7===null&&(Y7=J)):B6(J)}function B6(){k1(v1,v1.current),k1(m8,m8.current)}function j8(J){e1(m8),Y7===J&&(Y7=null),e1(v1)}function MW(J){for(var Z=J;Z!==null;){if(Z.tag===13){var Y=Z.memoizedState;if(Y!==null&&(Y=Y.dehydrated,Y===null||UQ(Y)||QQ(Y)))return Z}else if(Z.tag===19&&(Z.memoizedProps.revealOrder==="forwards"||Z.memoizedProps.revealOrder==="backwards"||Z.memoizedProps.revealOrder==="unstable_legacy-backwards"||Z.memoizedProps.revealOrder==="together")){if((Z.flags&128)!==0)return Z}else if(Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===J)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===J)return null;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}return null}function x1(){throw Error(t(321))}function fQ(J,Z){if(Z===null)return!1;for(var Y=0;Y<Z.length&&Y<J.length;Y++)if(!d8(J[Y],Z[Y]))return!1;return!0}function jQ(J,Z,Y,W,X,H){return n7=H,c0=Z,Z.memoizedState=null,Z.updateQueue=null,Z.lanes=0,p0.H=J===null||J.memoizedState===null?Bz:cQ,q9=!1,H=Y(W,X),q9=!1,A5&&(H=sD(Z,Y,W,X)),iD(J),H}function iD(J){p0.H=LZ;var Z=O1!==null&&O1.next!==null;if(n7=0,m1=O1=c0=null,LW=!1,MZ=0,E5=null,Z)throw Error(t(300));J===null||c1||(J=J.dependencies,J!==null&&OW(J)&&(c1=!0))}function sD(J,Z,Y,W){c0=J;var X=0;do{if(A5&&(E5=null),MZ=0,A5=!1,25<=X)throw Error(t(301));if(X+=1,m1=O1=null,J.updateQueue!=null){var H=J.updateQueue;H.lastEffect=null,H.events=null,H.stores=null,H.memoCache!=null&&(H.memoCache.index=0)}p0.H=Vz,H=Z(Y,W)}while(A5);return H}function bq(){var J=p0.H,Z=J.useState()[0];return Z=typeof Z.then==="function"?fZ(Z):Z,J=J.useState()[0],(O1!==null?O1.memoizedState:null)!==J&&(c0.flags|=1024),Z}function bQ(){var J=kW!==0;return kW=0,J}function hQ(J,Z,Y){Z.updateQueue=J.updateQueue,Z.flags&=-2053,J.lanes&=~Y}function vQ(J){if(LW){for(J=J.memoizedState;J!==null;){var Z=J.queue;Z!==null&&(Z.pending=null),J=J.next}LW=!1}n7=0,m1=O1=c0=null,A5=!1,MZ=kW=0,E5=null}function O8(){var J={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return m1===null?c0.memoizedState=m1=J:m1=m1.next=J,m1}function y1(){if(O1===null){var J=c0.alternate;J=J!==null?J.memoizedState:null}else J=O1.next;var Z=m1===null?c0.memoizedState:m1.next;if(Z!==null)m1=Z,O1=J;else{if(J===null){if(c0.alternate===null)throw Error(t(467));throw Error(t(310))}O1=J,J={memoizedState:O1.memoizedState,baseState:O1.baseState,baseQueue:O1.baseQueue,queue:O1.queue,next:null},m1===null?c0.memoizedState=m1=J:m1=m1.next=J}return m1}function lW(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fZ(J){var Z=MZ;return MZ+=1,E5===null&&(E5=[]),J=pD(E5,J,Z),Z=c0,(m1===null?Z.memoizedState:m1.next)===null&&(Z=Z.alternate,p0.H=Z===null||Z.memoizedState===null?Bz:cQ),J}function cW(J){if(J!==null&&typeof J==="object"){if(typeof J.then==="function")return fZ(J);if(J.$$typeof===d7)return H8(J)}throw Error(t(438,String(J)))}function yQ(J){var Z=null,Y=c0.updateQueue;if(Y!==null&&(Z=Y.memoCache),Z==null){var W=c0.alternate;W!==null&&(W=W.updateQueue,W!==null&&(W=W.memoCache,W!=null&&(Z={data:W.data.map(function(X){return X.slice()}),index:0})))}if(Z==null&&(Z={data:[],index:0}),Y===null&&(Y=lW(),c0.updateQueue=Y),Y.memoCache=Z,Y=Z.data[Z.index],Y===void 0)for(Y=Z.data[Z.index]=Array(J),W=0;W<J;W++)Y[W]=L4;return Z.index++,Y}function o7(J,Z){return typeof Z==="function"?Z(J):Z}function eY(J){var Z=y1();return gQ(Z,O1,J)}function gQ(J,Z,Y){var W=J.queue;if(W===null)throw Error(t(311));W.lastRenderedReducer=Y;var X=J.baseQueue,H=W.pending;if(H!==null){if(X!==null){var U=X.next;X.next=H.next,H.next=U}Z.baseQueue=X=H,W.pending=null}if(H=J.baseState,X===null)J.memoizedState=H;else{Z=X.next;var Q=U=null,w=null,G=Z,K=!1;do{var z=G.lane&-536870913;if(z!==G.lane?(e0&z)===z:(n7&z)===z){var D=G.revertLane;if(D===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),z===P5&&(K=!0);else if((n7&D)===D){G=G.next,D===P5&&(K=!0);continue}else z={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},w===null?(Q=w=z,U=H):w=w.next=z,c0.lanes|=D,d6|=D;z=G.action,q9&&Y(H,z),H=G.hasEagerState?G.eagerState:Y(H,z)}else D={lane:z,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},w===null?(Q=w=D,U=H):w=w.next=D,c0.lanes|=z,d6|=z;G=G.next}while(G!==null&&G!==Z);if(w===null?U=H:w.next=Q,!d8(H,J.memoizedState)&&(c1=!0,K&&(Y=V5,Y!==null)))throw Y;J.memoizedState=H,J.baseState=U,J.baseQueue=w,W.lastRenderedState=H}return X===null&&(W.lanes=0),[J.memoizedState,W.dispatch]}function aH(J){var Z=y1(),Y=Z.queue;if(Y===null)throw Error(t(311));Y.lastRenderedReducer=J;var{dispatch:W,pending:X}=Y,H=Z.memoizedState;if(X!==null){Y.pending=null;var U=X=X.next;do H=J(H,U.action),U=U.next;while(U!==X);d8(H,Z.memoizedState)||(c1=!0),Z.memoizedState=H,Z.baseQueue===null&&(Z.baseState=H),Y.lastRenderedState=H}return[H,W]}function nD(J,Z,Y){var W=c0,X=y1(),H=J1;if(H){if(Y===void 0)throw Error(t(407));Y=Y()}else Y=Z();var U=!d8((O1||X).memoizedState,Y);if(U&&(X.memoizedState=Y,c1=!0),X=X.queue,pQ(rD.bind(null,W,X,J),[J]),X.getSnapshot!==Z||U||m1!==null&&m1.memoizedState.tag&1){if(W.flags|=2048,x5(9,{destroy:void 0},aD.bind(null,W,X,Y,Z),null),M1===null)throw Error(t(349));H||(n7&127)!==0||oD(W,Z,Y)}return Y}function oD(J,Z,Y){J.flags|=16384,J={getSnapshot:Z,value:Y},Z=c0.updateQueue,Z===null?(Z=lW(),c0.updateQueue=Z,Z.stores=[J]):(Y=Z.stores,Y===null?Z.stores=[J]:Y.push(J))}function aD(J,Z,Y,W){Z.value=Y,Z.getSnapshot=W,tD(Z)&&eD(J)}function rD(J,Z,Y){return Y(function(){tD(Z)&&eD(J)})}function tD(J){var Z=J.getSnapshot;J=J.value;try{var Y=Z();return!d8(J,Y)}catch(W){return!0}}function eD(J){var Z=V9(J,2);Z!==null&&I8(Z,J,2)}function pU(J){var Z=O8();if(typeof J==="function"){var Y=J;if(J=Y(),q9){_6(!0);try{Y()}finally{_6(!1)}}}return Z.memoizedState=Z.baseState=J,Z.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o7,lastRenderedState:J},Z}function Jz(J,Z,Y,W){return J.baseState=Y,gQ(J,O1,typeof W==="function"?W:o7)}function hq(J,Z,Y,W,X){if(sW(J))throw Error(t(485));if(J=Z.action,J!==null){var H={payload:X,action:J,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(U){H.listeners.push(U)}};p0.T!==null?Y(!0):H.isTransition=!1,W(H),Y=Z.pending,Y===null?(H.next=Z.pending=H,Zz(Z,H)):(H.next=Y.next,Z.pending=Y.next=H)}}function Zz(J,Z){var{action:Y,payload:W}=Z,X=J.state;if(Z.isTransition){var H=p0.T,U={};p0.T=U;try{var Q=Y(X,W),w=p0.S;w!==null&&w(U,Q),YK(J,Z,Q)}catch(G){dU(J,Z,G)}finally{H!==null&&U.types!==null&&(H.types=U.types),p0.T=H}}else try{H=Y(X,W),YK(J,Z,H)}catch(G){dU(J,Z,G)}}function YK(J,Z,Y){Y!==null&&typeof Y==="object"&&typeof Y.then==="function"?Y.then(function(W){WK(J,Z,W)},function(W){return dU(J,Z,W)}):WK(J,Z,Y)}function WK(J,Z,Y){Z.status="fulfilled",Z.value=Y,Yz(Z),J.state=Y,Z=J.pending,Z!==null&&(Y=Z.next,Y===Z?J.pending=null:(Y=Y.next,Z.next=Y,Zz(J,Y)))}function dU(J,Z,Y){var W=J.pending;if(J.pending=null,W!==null){W=W.next;do Z.status="rejected",Z.reason=Y,Yz(Z),Z=Z.next;while(Z!==W)}J.action=null}function Yz(J){J=J.listeners;for(var Z=0;Z<J.length;Z++)(0,J[Z])()}function Wz(J,Z){return Z}function XK(J,Z){if(J1){var Y=M1.formState;if(Y!==null){J:{var W=c0;if(J1){if(A1){Z:{var X=A1;for(var H=Z7;X.nodeType!==8;){if(!H){X=null;break Z}if(X=W7(X.nextSibling),X===null){X=null;break Z}}H=X.data,X=H==="F!"||H==="F"?X:null}if(X){A1=W7(X.nextSibling),W=X.data==="F!";break J}}g6(W)}W=!1}W&&(Z=Y[0])}}return Y=O8(),Y.memoizedState=Y.baseState=Z,W={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wz,lastRenderedState:Z},Y.queue=W,Y=Mz.bind(null,c0,W),W.dispatch=Y,W=pU(!1),H=lQ.bind(null,c0,!1,W.queue),W=O8(),X={state:Z,dispatch:null,action:J,pending:null},W.queue=X,Y=hq.bind(null,c0,X,H,Y),X.dispatch=Y,W.memoizedState=J,[Z,Y,!1]}function HK(J){var Z=y1();return Xz(Z,O1,J)}function Xz(J,Z,Y){if(Z=gQ(J,Z,Wz)[0],J=eY(o7)[0],typeof Z==="object"&&Z!==null&&typeof Z.then==="function")try{var W=fZ(Z)}catch(U){if(U===d5)throw uW;throw U}else W=Z;Z=y1();var X=Z.queue,H=X.dispatch;return Y!==Z.memoizedState&&(c0.flags|=2048,x5(9,{destroy:void 0},vq.bind(null,X,Y),null)),[W,H,J]}function vq(J,Z){J.action=Z}function UK(J){var Z=y1(),Y=O1;if(Y!==null)return Xz(Z,Y,J);y1(),Z=Z.memoizedState,Y=y1();var W=Y.queue.dispatch;return Y.memoizedState=J,[Z,W,!1]}function x5(J,Z,Y,W){return J={tag:J,create:Y,deps:W,inst:Z,next:null},Z=c0.updateQueue,Z===null&&(Z=lW(),c0.updateQueue=Z),Y=Z.lastEffect,Y===null?Z.lastEffect=J.next=J:(W=Y.next,Y.next=J,J.next=W,Z.lastEffect=J),J}function Hz(){return y1().memoizedState}function JW(J,Z,Y,W){var X=O8();c0.flags|=J,X.memoizedState=x5(1|Z,{destroy:void 0},Y,W===void 0?null:W)}function iW(J,Z,Y,W){var X=y1();W=W===void 0?null:W;var H=X.memoizedState.inst;O1!==null&&W!==null&&fQ(W,O1.memoizedState.deps)?X.memoizedState=x5(Z,H,Y,W):(c0.flags|=J,X.memoizedState=x5(1|Z,H,Y,W))}function QK(J,Z){JW(8390656,8,J,Z)}function pQ(J,Z){iW(2048,8,J,Z)}function yq(J){c0.flags|=4;var Z=c0.updateQueue;if(Z===null)Z=lW(),c0.updateQueue=Z,Z.events=[J];else{var Y=Z.events;Y===null?Z.events=[J]:Y.push(J)}}function Uz(J){var Z=y1().memoizedState;return yq({ref:Z,nextImpl:J}),function(){if((H1&2)!==0)throw Error(t(440));return Z.impl.apply(void 0,arguments)}}function Qz(J,Z){return iW(4,2,J,Z)}function wz(J,Z){return iW(4,4,J,Z)}function Gz(J,Z){if(typeof Z==="function"){J=J();var Y=Z(J);return function(){typeof Y==="function"?Y():Z(null)}}if(Z!==null&&Z!==void 0)return J=J(),Z.current=J,function(){Z.current=null}}function $z(J,Z,Y){Y=Y!==null&&Y!==void 0?Y.concat([J]):null,iW(4,4,Gz.bind(null,Z,J),Y)}function dQ(){}function Kz(J,Z){var Y=y1();Z=Z===void 0?null:Z;var W=Y.memoizedState;if(Z!==null&&fQ(Z,W[1]))return W[0];return Y.memoizedState=[J,Z],J}function Dz(J,Z){var Y=y1();Z=Z===void 0?null:Z;var W=Y.memoizedState;if(Z!==null&&fQ(Z,W[1]))return W[0];if(W=J(),q9){_6(!0);try{J()}finally{_6(!1)}}return Y.memoizedState=[W,Z],W}function mQ(J,Z,Y){if(Y===void 0||(n7&1073741824)!==0&&(e0&261930)===0)return J.memoizedState=Z;return J.memoizedState=Y,J=JR(),c0.lanes|=J,d6|=J,Y}function zz(J,Z,Y,W){if(d8(Y,Z))return Y;if(S5.current!==null)return J=mQ(J,Y,W),d8(J,Z)||(c1=!0),J;if((n7&42)===0||(n7&1073741824)!==0&&(e0&261930)===0)return c1=!0,J.memoizedState=Y;return J=JR(),c0.lanes|=J,d6|=J,Z}function Rz(J,Z,Y,W,X){var H=U1.p;U1.p=H!==0&&8>H?H:8;var U=p0.T,Q={};p0.T=Q,lQ(J,!1,Z,Y);try{var w=X(),G=p0.S;if(G!==null&&G(Q,w),w!==null&&typeof w==="object"&&typeof w.then==="function"){var K=fq(w,W);UZ(J,Z,K,p8(J))}else UZ(J,Z,W,p8(J))}catch(z){UZ(J,Z,{then:function(){},status:"rejected",reason:z},p8())}finally{U1.p=H,U!==null&&Q.types!==null&&(U.types=Q.types),p0.T=U}}function gq(){}function mU(J,Z,Y,W){if(J.tag!==5)throw Error(t(476));var X=Nz(J).queue;Rz(J,X,Z,$9,Y===null?gq:function(){return Oz(J),Y(W)})}function Nz(J){var Z=J.memoizedState;if(Z!==null)return Z;Z={memoizedState:$9,baseState:$9,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:o7,lastRenderedState:$9},next:null};var Y={};return Z.next={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:o7,lastRenderedState:Y},next:null},J.memoizedState=Z,J=J.alternate,J!==null&&(J.memoizedState=Z),Z}function Oz(J){var Z=Nz(J);Z.next===null&&(Z=J.alternate.memoizedState),UZ(J,Z.next.queue,{},p8())}function uQ(){return H8(VZ)}function Fz(){return y1().memoizedState}function qz(){return y1().memoizedState}function pq(J){for(var Z=J.return;Z!==null;){switch(Z.tag){case 24:case 3:var Y=p8();J=S6(Y);var W=x6(Z,J,Y);W!==null&&(I8(W,Z,Y),WZ(W,Z,Y)),Z={cache:CQ()},J.payload=Z;return}Z=Z.return}}function dq(J,Z,Y){var W=p8();Y={lane:W,revertLane:0,gesture:null,action:Y,hasEagerState:!1,eagerState:null,next:null},sW(J)?Lz(Z,Y):(Y=_Q(J,Z,Y,W),Y!==null&&(I8(Y,J,W),kz(Y,Z,W)))}function Mz(J,Z,Y){var W=p8();UZ(J,Z,Y,W)}function UZ(J,Z,Y,W){var X={lane:W,revertLane:0,gesture:null,action:Y,hasEagerState:!1,eagerState:null,next:null};if(sW(J))Lz(Z,X);else{var H=J.alternate;if(J.lanes===0&&(H===null||H.lanes===0)&&(H=Z.lastRenderedReducer,H!==null))try{var U=Z.lastRenderedState,Q=H(U,Y);if(X.hasEagerState=!0,X.eagerState=Q,d8(Q,U))return mW(J,Z,X,0),M1===null&&dW(),!1}catch(w){}finally{}if(Y=_Q(J,Z,X,W),Y!==null)return I8(Y,J,W),kz(Y,Z,W),!0}return!1}function lQ(J,Z,Y,W){if(W={lane:2,revertLane:eQ(),gesture:null,action:W,hasEagerState:!1,eagerState:null,next:null},sW(J)){if(Z)throw Error(t(479))}else Z=_Q(J,Y,W,2),Z!==null&&I8(Z,J,2)}function sW(J){var Z=J.alternate;return J===c0||Z!==null&&Z===c0}function Lz(J,Z){A5=LW=!0;var Y=J.pending;Y===null?Z.next=Z:(Z.next=Y.next,Y.next=Z),J.pending=Z}function kz(J,Z,Y){if((Y&4194048)!==0){var W=Z.lanes;W&=J.pendingLanes,Y|=W,Z.lanes=Y,UD(J,Y)}}function rH(J,Z,Y,W){Z=J.memoizedState,Y=Y(W,Z),Y=Y===null||Y===void 0?Z:E1({},Z,Y),J.memoizedState=Y,J.lanes===0&&(J.updateQueue.baseState=Y)}function wK(J,Z,Y,W,X,H,U){return J=J.stateNode,typeof J.shouldComponentUpdate==="function"?J.shouldComponentUpdate(W,H,U):Z.prototype&&Z.prototype.isPureReactComponent?!NZ(Y,W)||!NZ(X,H):!0}function GK(J,Z,Y,W){J=Z.state,typeof Z.componentWillReceiveProps==="function"&&Z.componentWillReceiveProps(Y,W),typeof Z.UNSAFE_componentWillReceiveProps==="function"&&Z.UNSAFE_componentWillReceiveProps(Y,W),Z.state!==J&&uU.enqueueReplaceState(Z,Z.state,null)}function M9(J,Z){var Y=Z;if("ref"in Z){Y={};for(var W in Z)W!=="ref"&&(Y[W]=Z[W])}if(J=J.defaultProps){Y===Z&&(Y=E1({},Y));for(var X in J)Y[X]===void 0&&(Y[X]=J[X])}return Y}function _z(J){zW(J)}function Az(J){console.error(J)}function Ez(J){zW(J)}function BW(J,Z){try{var Y=J.onUncaughtError;Y(Z.value,{componentStack:Z.stack})}catch(W){setTimeout(function(){throw W})}}function $K(J,Z,Y){try{var W=J.onCaughtError;W(Y.value,{componentStack:Y.stack,errorBoundary:Z.tag===1?Z.stateNode:null})}catch(X){setTimeout(function(){throw X})}}function lU(J,Z,Y){return Y=S6(Y),Y.tag=3,Y.payload={element:null},Y.callback=function(){BW(J,Z)},Y}function Iz(J){return J=S6(J),J.tag=3,J}function Cz(J,Z,Y,W){var X=Y.type.getDerivedStateFromError;if(typeof X==="function"){var H=W.value;J.payload=function(){return X(H)},J.callback=function(){$K(Z,Y,W)}}var U=Y.stateNode;U!==null&&typeof U.componentDidCatch==="function"&&(J.callback=function(){$K(Z,Y,W),typeof X!=="function"&&(f6===null?f6=new Set([this]):f6.add(this));var Q=W.stack;this.componentDidCatch(W.value,{componentStack:Q!==null?Q:""})})}function mq(J,Z,Y,W,X){if(Y.flags|=32768,W!==null&&typeof W==="object"&&typeof W.then==="function"){if(Z=Y.alternate,Z!==null&&p5(Z,Y,X,!0),Y=m8.current,Y!==null){switch(Y.tag){case 31:case 13:return Y7===null?IW():Y.alternate===null&&f1===0&&(f1=3),Y.flags&=-257,Y.flags|=65536,Y.lanes=X,W===FW?Y.flags|=16384:(Z=Y.updateQueue,Z===null?Y.updateQueue=new Set([W]):Z.add(W),wU(J,W,X)),!1;case 22:return Y.flags|=65536,W===FW?Y.flags|=16384:(Z=Y.updateQueue,Z===null?(Z={transitions:null,markerInstances:null,retryQueue:new Set([W])},Y.updateQueue=Z):(Y=Z.retryQueue,Y===null?Z.retryQueue=new Set([W]):Y.add(W)),wU(J,W,X)),!1}throw Error(t(435,Y.tag))}return wU(J,W,X),IW(),!1}if(J1)return Z=m8.current,Z!==null?((Z.flags&65536)===0&&(Z.flags|=256),Z.flags|=65536,Z.lanes=X,W!==SU&&(J=Error(t(422),{cause:W}),FZ(J7(J,Y)))):(W!==SU&&(Z=Error(t(423),{cause:W}),FZ(J7(Z,Y))),J=J.current.alternate,J.flags|=65536,X&=-X,J.lanes|=X,W=J7(W,Y),X=lU(J.stateNode,W,X),oH(J,X),f1!==4&&(f1=2)),!1;var H=Error(t(520),{cause:W});if(H=J7(H,Y),GZ===null?GZ=[H]:GZ.push(H),f1!==4&&(f1=2),Z===null)return!0;W=J7(W,Y),Y=Z;do{switch(Y.tag){case 3:return Y.flags|=65536,J=X&-X,Y.lanes|=J,J=lU(Y.stateNode,W,J),oH(Y,J),!1;case 1:if(Z=Y.type,H=Y.stateNode,(Y.flags&128)===0&&(typeof Z.getDerivedStateFromError==="function"||H!==null&&typeof H.componentDidCatch==="function"&&(f6===null||!f6.has(H))))return Y.flags|=65536,X&=-X,Y.lanes|=X,X=Iz(X),Cz(X,J,Y,W),oH(Y,X),!1}Y=Y.return}while(Y!==null);return!1}function Y8(J,Z,Y,W){Z.child=J===null?mD(Z,null,Y,W):F9(Z,J.child,Y,W)}function KK(J,Z,Y,W,X){Y=Y.render;var H=Z.ref;if("ref"in W){var U={};for(var Q in W)Q!=="ref"&&(U[Q]=W[Q])}else U=W;if(O9(Z),W=jQ(J,Z,Y,U,H,X),Q=bQ(),J!==null&&!c1)return hQ(J,Z,X),a7(J,Z,X);return J1&&Q&&EQ(Z),Z.flags|=1,Y8(J,Z,W,X),Z.child}function DK(J,Z,Y,W,X){if(J===null){var H=Y.type;if(typeof H==="function"&&!AQ(H)&&H.defaultProps===void 0&&Y.compare===null)return Z.tag=15,Z.type=H,Tz(J,Z,H,W,X);return J=rY(Y.type,null,W,Z,Z.mode,X),J.ref=Z.ref,J.return=Z,Z.child=J}if(H=J.child,!sQ(J,X)){var U=H.memoizedProps;if(Y=Y.compare,Y=Y!==null?Y:NZ,Y(U,W)&&J.ref===Z.ref)return a7(J,Z,X)}return Z.flags|=1,J=l7(H,W),J.ref=Z.ref,J.return=Z,Z.child=J}function Tz(J,Z,Y,W,X){if(J!==null){var H=J.memoizedProps;if(NZ(H,W)&&J.ref===Z.ref)if(c1=!1,Z.pendingProps=W=H,sQ(J,X))(J.flags&131072)!==0&&(c1=!0);else return Z.lanes=J.lanes,a7(J,Z,X)}return cU(J,Z,Y,W,X)}function Pz(J,Z,Y,W){var X=W.children,H=J!==null?J.memoizedState:null;if(J===null&&Z.stateNode===null&&(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),W.mode==="hidden"){if((Z.flags&128)!==0){if(H=H!==null?H.baseLanes|Y:Y,J!==null){W=Z.child=J.child;for(X=0;W!==null;)X=X|W.lanes|W.childLanes,W=W.sibling;W=X&~H}else W=0,Z.child=null;return zK(J,Z,H,Y,W)}if((Y&536870912)!==0)Z.memoizedState={baseLanes:0,cachePool:null},J!==null&&tY(Z,H!==null?H.cachePool:null),H!==null?ZK(Z,H):yU(),cD(Z);else return W=Z.lanes=536870912,zK(J,Z,H!==null?H.baseLanes|Y:Y,Y,W)}else H!==null?(tY(Z,H.cachePool),ZK(Z,H),B6(Z),Z.memoizedState=null):(J!==null&&tY(Z,null),yU(),B6(Z));return Y8(J,Z,X,Y),Z.child}function oJ(J,Z){return J!==null&&J.tag===22||Z.stateNode!==null||(Z.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),Z.sibling}function zK(J,Z,Y,W,X){var H=TQ();return H=H===null?null:{parent:l1._currentValue,pool:H},Z.memoizedState={baseLanes:Y,cachePool:H},J!==null&&tY(Z,null),yU(),cD(Z),J!==null&&p5(J,Z,W,!0),Z.childLanes=X,null}function ZW(J,Z){return Z=VW({mode:Z.mode,children:Z.children},J.mode),Z.ref=J.ref,J.child=Z,Z.return=J,Z}function RK(J,Z,Y){return F9(Z,J.child,null,Y),J=ZW(Z,Z.pendingProps),J.flags|=2,j8(Z),Z.memoizedState=null,J}function uq(J,Z,Y){var W=Z.pendingProps,X=(Z.flags&128)!==0;if(Z.flags&=-129,J===null){if(J1){if(W.mode==="hidden")return J=ZW(Z,W),Z.lanes=536870912,oJ(null,J);if(gU(Z),(J=A1)?(J=BR(J,Z7),J=J!==null&&J.data==="&"?J:null,J!==null&&(Z.memoizedState={dehydrated:J,treeContext:y6!==null?{id:k7,overflow:B7}:null,retryLane:536870912,hydrationErrors:null},Y=bD(J),Y.return=Z,Z.child=Y,X8=Z,A1=null)):J=null,J===null)throw g6(Z);return Z.lanes=536870912,null}return ZW(Z,W)}var H=J.memoizedState;if(H!==null){var U=H.dehydrated;if(gU(Z),X)if(Z.flags&256)Z.flags&=-257,Z=RK(J,Z,Y);else if(Z.memoizedState!==null)Z.child=J.child,Z.flags|=128,Z=null;else throw Error(t(558));else if(c1||p5(J,Z,Y,!1),X=(Y&J.childLanes)!==0,c1||X){if(W=M1,W!==null&&(U=QD(W,Y),U!==0&&U!==H.retryLane))throw H.retryLane=U,V9(J,U),I8(W,J,U),iQ;IW(),Z=RK(J,Z,Y)}else J=H.treeContext,A1=W7(U.nextSibling),X8=Z,J1=!0,P6=null,Z7=!1,J!==null&&vD(Z,J),Z=ZW(Z,W),Z.flags|=4096;return Z}return J=l7(J.child,{mode:W.mode,children:W.children}),J.ref=Z.ref,Z.child=J,J.return=Z,J}function YW(J,Z){var Y=Z.ref;if(Y===null)J!==null&&J.ref!==null&&(Z.flags|=4194816);else{if(typeof Y!=="function"&&typeof Y!=="object")throw Error(t(284));if(J===null||J.ref!==Y)Z.flags|=4194816}}function cU(J,Z,Y,W,X){if(O9(Z),Y=jQ(J,Z,Y,W,void 0,X),W=bQ(),J!==null&&!c1)return hQ(J,Z,X),a7(J,Z,X);return J1&&W&&EQ(Z),Z.flags|=1,Y8(J,Z,Y,X),Z.child}function NK(J,Z,Y,W,X,H){if(O9(Z),Z.updateQueue=null,Y=sD(Z,W,Y,X),iD(J),W=bQ(),J!==null&&!c1)return hQ(J,Z,H),a7(J,Z,H);return J1&&W&&EQ(Z),Z.flags|=1,Y8(J,Z,Y,H),Z.child}function OK(J,Z,Y,W,X){if(O9(Z),Z.stateNode===null){var H=O5,U=Y.contextType;typeof U==="object"&&U!==null&&(H=H8(U)),H=new Y(W,H),Z.memoizedState=H.state!==null&&H.state!==void 0?H.state:null,H.updater=uU,Z.stateNode=H,H._reactInternals=Z,H=Z.stateNode,H.props=W,H.state=Z.memoizedState,H.refs={},SQ(Z),U=Y.contextType,H.context=typeof U==="object"&&U!==null?H8(U):O5,H.state=Z.memoizedState,U=Y.getDerivedStateFromProps,typeof U==="function"&&(rH(Z,Y,U,W),H.state=Z.memoizedState),typeof Y.getDerivedStateFromProps==="function"||typeof H.getSnapshotBeforeUpdate==="function"||typeof H.UNSAFE_componentWillMount!=="function"&&typeof H.componentWillMount!=="function"||(U=H.state,typeof H.componentWillMount==="function"&&H.componentWillMount(),typeof H.UNSAFE_componentWillMount==="function"&&H.UNSAFE_componentWillMount(),U!==H.state&&uU.enqueueReplaceState(H,H.state,null),HZ(Z,W,H,X),XZ(),H.state=Z.memoizedState),typeof H.componentDidMount==="function"&&(Z.flags|=4194308),W=!0}else if(J===null){H=Z.stateNode;var Q=Z.memoizedProps,w=M9(Y,Q);H.props=w;var G=H.context,K=Y.contextType;U=O5,typeof K==="object"&&K!==null&&(U=H8(K));var z=Y.getDerivedStateFromProps;K=typeof z==="function"||typeof H.getSnapshotBeforeUpdate==="function",Q=Z.pendingProps!==Q,K||typeof H.UNSAFE_componentWillReceiveProps!=="function"&&typeof H.componentWillReceiveProps!=="function"||(Q||G!==U)&&GK(Z,H,W,U),M6=!1;var D=Z.memoizedState;H.state=D,HZ(Z,W,H,X),XZ(),G=Z.memoizedState,Q||D!==G||M6?(typeof z==="function"&&(rH(Z,Y,z,W),G=Z.memoizedState),(w=M6||wK(Z,Y,w,W,D,G,U))?(K||typeof H.UNSAFE_componentWillMount!=="function"&&typeof H.componentWillMount!=="function"||(typeof H.componentWillMount==="function"&&H.componentWillMount(),typeof H.UNSAFE_componentWillMount==="function"&&H.UNSAFE_componentWillMount()),typeof H.componentDidMount==="function"&&(Z.flags|=4194308)):(typeof H.componentDidMount==="function"&&(Z.flags|=4194308),Z.memoizedProps=W,Z.memoizedState=G),H.props=W,H.state=G,H.context=U,W=w):(typeof H.componentDidMount==="function"&&(Z.flags|=4194308),W=!1)}else{H=Z.stateNode,hU(J,Z),U=Z.memoizedProps,K=M9(Y,U),H.props=K,z=Z.pendingProps,D=H.context,G=Y.contextType,w=O5,typeof G==="object"&&G!==null&&(w=H8(G)),Q=Y.getDerivedStateFromProps,(G=typeof Q==="function"||typeof H.getSnapshotBeforeUpdate==="function")||typeof H.UNSAFE_componentWillReceiveProps!=="function"&&typeof H.componentWillReceiveProps!=="function"||(U!==z||D!==w)&&GK(Z,H,W,w),M6=!1,D=Z.memoizedState,H.state=D,HZ(Z,W,H,X),XZ();var R=Z.memoizedState;U!==z||D!==R||M6||J!==null&&J.dependencies!==null&&OW(J.dependencies)?(typeof Q==="function"&&(rH(Z,Y,Q,W),R=Z.memoizedState),(K=M6||wK(Z,Y,K,W,D,R,w)||J!==null&&J.dependencies!==null&&OW(J.dependencies))?(G||typeof H.UNSAFE_componentWillUpdate!=="function"&&typeof H.componentWillUpdate!=="function"||(typeof H.componentWillUpdate==="function"&&H.componentWillUpdate(W,R,w),typeof H.UNSAFE_componentWillUpdate==="function"&&H.UNSAFE_componentWillUpdate(W,R,w)),typeof H.componentDidUpdate==="function"&&(Z.flags|=4),typeof H.getSnapshotBeforeUpdate==="function"&&(Z.flags|=1024)):(typeof H.componentDidUpdate!=="function"||U===J.memoizedProps&&D===J.memoizedState||(Z.flags|=4),typeof H.getSnapshotBeforeUpdate!=="function"||U===J.memoizedProps&&D===J.memoizedState||(Z.flags|=1024),Z.memoizedProps=W,Z.memoizedState=R),H.props=W,H.state=R,H.context=w,W=K):(typeof H.componentDidUpdate!=="function"||U===J.memoizedProps&&D===J.memoizedState||(Z.flags|=4),typeof H.getSnapshotBeforeUpdate!=="function"||U===J.memoizedProps&&D===J.memoizedState||(Z.flags|=1024),W=!1)}return H=W,YW(J,Z),W=(Z.flags&128)!==0,H||W?(H=Z.stateNode,Y=W&&typeof Y.getDerivedStateFromError!=="function"?null:H.render(),Z.flags|=1,J!==null&&W?(Z.child=F9(Z,J.child,null,X),Z.child=F9(Z,null,Y,X)):Y8(J,Z,Y,X),Z.memoizedState=H.state,J=Z.child):J=a7(J,Z,X),J}function FK(J,Z,Y,W){return N9(),Z.flags|=256,Y8(J,Z,Y,W),Z.child}function eH(J){return{baseLanes:J,cachePool:gD()}}function JU(J,Z,Y){return J=J!==null?J.childLanes&~Y:0,Z&&(J|=h8),J}function Sz(J,Z,Y){var W=Z.pendingProps,X=!1,H=(Z.flags&128)!==0,U;if((U=H)||(U=J!==null&&J.memoizedState===null?!1:(v1.current&2)!==0),U&&(X=!0,Z.flags&=-129),U=(Z.flags&32)!==0,Z.flags&=-33,J===null){if(J1){if(X?k6(Z):B6(Z),(J=A1)?(J=BR(J,Z7),J=J!==null&&J.data!=="&"?J:null,J!==null&&(Z.memoizedState={dehydrated:J,treeContext:y6!==null?{id:k7,overflow:B7}:null,retryLane:536870912,hydrationErrors:null},Y=bD(J),Y.return=Z,Z.child=Y,X8=Z,A1=null)):J=null,J===null)throw g6(Z);return QQ(J)?Z.lanes=32:Z.lanes=536870912,null}var Q=W.children;if(W=W.fallback,X)return B6(Z),X=Z.mode,Q=VW({mode:"hidden",children:Q},X),W=K9(W,X,Y,null),Q.return=Z,W.return=Z,Q.sibling=W,Z.child=Q,W=Z.child,W.memoizedState=eH(Y),W.childLanes=JU(J,U,Y),Z.memoizedState=tH,oJ(null,W);return k6(Z),iU(Z,Q)}var w=J.memoizedState;if(w!==null&&(Q=w.dehydrated,Q!==null)){if(H)Z.flags&256?(k6(Z),Z.flags&=-257,Z=ZU(J,Z,Y)):Z.memoizedState!==null?(B6(Z),Z.child=J.child,Z.flags|=128,Z=null):(B6(Z),Q=W.fallback,X=Z.mode,W=VW({mode:"visible",children:W.children},X),Q=K9(Q,X,Y,null),Q.flags|=2,W.return=Z,Q.return=Z,W.sibling=Q,Z.child=W,F9(Z,J.child,null,Y),W=Z.child,W.memoizedState=eH(Y),W.childLanes=JU(J,U,Y),Z.memoizedState=tH,Z=oJ(null,W));else if(k6(Z),QQ(Q)){if(U=Q.nextSibling&&Q.nextSibling.dataset,U)var G=U.dgst;U=G,W=Error(t(419)),W.stack="",W.digest=U,FZ({value:W,source:null,stack:null}),Z=ZU(J,Z,Y)}else if(c1||p5(J,Z,Y,!1),U=(Y&J.childLanes)!==0,c1||U){if(U=M1,U!==null&&(W=QD(U,Y),W!==0&&W!==w.retryLane))throw w.retryLane=W,V9(J,W),I8(U,J,W),iQ;UQ(Q)||IW(),Z=ZU(J,Z,Y)}else UQ(Q)?(Z.flags|=192,Z.child=J.child,Z=null):(J=w.treeContext,A1=W7(Q.nextSibling),X8=Z,J1=!0,P6=null,Z7=!1,J!==null&&vD(Z,J),Z=iU(Z,W.children),Z.flags|=4096);return Z}if(X)return B6(Z),Q=W.fallback,X=Z.mode,w=J.child,G=w.sibling,W=l7(w,{mode:"hidden",children:W.children}),W.subtreeFlags=w.subtreeFlags&65011712,G!==null?Q=l7(G,Q):(Q=K9(Q,X,Y,null),Q.flags|=2),Q.return=Z,W.return=Z,W.sibling=Q,Z.child=W,oJ(null,W),W=Z.child,Q=J.child.memoizedState,Q===null?Q=eH(Y):(X=Q.cachePool,X!==null?(w=l1._currentValue,X=X.parent!==w?{parent:w,pool:w}:X):X=gD(),Q={baseLanes:Q.baseLanes|Y,cachePool:X}),W.memoizedState=Q,W.childLanes=JU(J,U,Y),Z.memoizedState=tH,oJ(J.child,W);return k6(Z),Y=J.child,J=Y.sibling,Y=l7(Y,{mode:"visible",children:W.children}),Y.return=Z,Y.sibling=null,J!==null&&(U=Z.deletions,U===null?(Z.deletions=[J],Z.flags|=16):U.push(J)),Z.child=Y,Z.memoizedState=null,Y}function iU(J,Z){return Z=VW({mode:"visible",children:Z},J.mode),Z.return=J,J.child=Z}function VW(J,Z){return J=b8(22,J,null,Z),J.lanes=0,J}function ZU(J,Z,Y){return F9(Z,J.child,null,Y),J=iU(Z,Z.pendingProps.children),J.flags|=2,Z.memoizedState=null,J}function qK(J,Z,Y){J.lanes|=Z;var W=J.alternate;W!==null&&(W.lanes|=Z),fU(J.return,Z,Y)}function YU(J,Z,Y,W,X,H){var U=J.memoizedState;U===null?J.memoizedState={isBackwards:Z,rendering:null,renderingStartTime:0,last:W,tail:Y,tailMode:X,treeForkCount:H}:(U.isBackwards=Z,U.rendering=null,U.renderingStartTime=0,U.last=W,U.tail=Y,U.tailMode=X,U.treeForkCount=H)}function xz(J,Z,Y){var W=Z.pendingProps,X=W.revealOrder,H=W.tail;W=W.children;var U=v1.current,Q=(U&2)!==0;if(Q?(U=U&1|2,Z.flags|=128):U&=1,k1(v1,U),Y8(J,Z,W,Y),W=J1?OZ:0,!Q&&J!==null&&(J.flags&128)!==0)J:for(J=Z.child;J!==null;){if(J.tag===13)J.memoizedState!==null&&qK(J,Y,Z);else if(J.tag===19)qK(J,Y,Z);else if(J.child!==null){J.child.return=J,J=J.child;continue}if(J===Z)break J;for(;J.sibling===null;){if(J.return===null||J.return===Z)break J;J=J.return}J.sibling.return=J.return,J=J.sibling}switch(X){case"forwards":Y=Z.child;for(X=null;Y!==null;)J=Y.alternate,J!==null&&MW(J)===null&&(X=Y),Y=Y.sibling;Y=X,Y===null?(X=Z.child,Z.child=null):(X=Y.sibling,Y.sibling=null),YU(Z,!1,X,Y,H,W);break;case"backwards":case"unstable_legacy-backwards":Y=null,X=Z.child;for(Z.child=null;X!==null;){if(J=X.alternate,J!==null&&MW(J)===null){Z.child=X;break}J=X.sibling,X.sibling=Y,Y=X,X=J}YU(Z,!0,Y,null,H,W);break;case"together":YU(Z,!1,null,null,void 0,W);break;default:Z.memoizedState=null}return Z.child}function a7(J,Z,Y){if(J!==null&&(Z.dependencies=J.dependencies),d6|=Z.lanes,(Y&Z.childLanes)===0)if(J!==null){if(p5(J,Z,Y,!1),(Y&Z.childLanes)===0)return null}else return null;if(J!==null&&Z.child!==J.child)throw Error(t(153));if(Z.child!==null){J=Z.child,Y=l7(J,J.pendingProps),Z.child=Y;for(Y.return=Z;J.sibling!==null;)J=J.sibling,Y=Y.sibling=l7(J,J.pendingProps),Y.return=Z;Y.sibling=null}return Z.child}function sQ(J,Z){if((J.lanes&Z)!==0)return!0;return J=J.dependencies,J!==null&&OW(J)?!0:!1}function lq(J,Z,Y){switch(Z.tag){case 3:GW(Z,Z.stateNode.containerInfo),L6(Z,l1,J.memoizedState.cache),N9();break;case 27:case 5:LU(Z);break;case 4:GW(Z,Z.stateNode.containerInfo);break;case 10:L6(Z,Z.type,Z.memoizedProps.value);break;case 31:if(Z.memoizedState!==null)return Z.flags|=128,gU(Z),null;break;case 13:var W=Z.memoizedState;if(W!==null){if(W.dehydrated!==null)return k6(Z),Z.flags|=128,null;if((Y&Z.child.childLanes)!==0)return Sz(J,Z,Y);return k6(Z),J=a7(J,Z,Y),J!==null?J.sibling:null}k6(Z);break;case 19:var X=(J.flags&128)!==0;if(W=(Y&Z.childLanes)!==0,W||(p5(J,Z,Y,!1),W=(Y&Z.childLanes)!==0),X){if(W)return xz(J,Z,Y);Z.flags|=128}if(X=Z.memoizedState,X!==null&&(X.rendering=null,X.tail=null,X.lastEffect=null),k1(v1,v1.current),W)break;else return null;case 22:return Z.lanes=0,Pz(J,Z,Y,Z.pendingProps);case 24:L6(Z,l1,J.memoizedState.cache)}return a7(J,Z,Y)}function fz(J,Z,Y){if(J!==null)if(J.memoizedProps!==Z.pendingProps)c1=!0;else{if(!sQ(J,Y)&&(Z.flags&128)===0)return c1=!1,lq(J,Z,Y);c1=(J.flags&131072)!==0?!0:!1}else c1=!1,J1&&(Z.flags&1048576)!==0&&hD(Z,OZ,Z.index);switch(Z.lanes=0,Z.tag){case 16:J:{var W=Z.pendingProps;if(J=w9(Z.elementType),Z.type=J,typeof J==="function")AQ(J)?(W=M9(J,W),Z.tag=1,Z=OK(null,Z,J,W,Y)):(Z.tag=0,Z=cU(null,Z,J,W,Y));else{if(J!==void 0&&J!==null){var X=J.$$typeof;if(X===KQ){Z.tag=11,Z=KK(null,Z,J,W,Y);break J}else if(X===DQ){Z.tag=14,Z=DK(null,Z,J,W,Y);break J}}throw Z=qU(J)||J,Error(t(306,Z,""))}}return Z;case 0:return cU(J,Z,Z.type,Z.pendingProps,Y);case 1:return W=Z.type,X=M9(W,Z.pendingProps),OK(J,Z,W,X,Y);case 3:J:{if(GW(Z,Z.stateNode.containerInfo),J===null)throw Error(t(387));W=Z.pendingProps;var H=Z.memoizedState;X=H.element,hU(J,Z),HZ(Z,W,null,Y);var U=Z.memoizedState;if(W=U.cache,L6(Z,l1,W),W!==H.cache&&jU(Z,[l1],Y,!0),XZ(),W=U.element,H.isDehydrated)if(H={element:W,isDehydrated:!1,cache:U.cache},Z.updateQueue.baseState=H,Z.memoizedState=H,Z.flags&256){Z=FK(J,Z,W,Y);break J}else if(W!==X){X=J7(Error(t(424)),Z),FZ(X),Z=FK(J,Z,W,Y);break J}else{switch(J=Z.stateNode.containerInfo,J.nodeType){case 9:J=J.body;break;default:J=J.nodeName==="HTML"?J.ownerDocument.body:J}A1=W7(J.firstChild),X8=Z,J1=!0,P6=null,Z7=!0,Y=mD(Z,null,W,Y);for(Z.child=Y;Y;)Y.flags=Y.flags&-3|4096,Y=Y.sibling}else{if(N9(),W===X){Z=a7(J,Z,Y);break J}Y8(J,Z,W,Y)}Z=Z.child}return Z;case 26:return YW(J,Z),J===null?(Y=yK(Z.type,null,Z.pendingProps,null))?Z.memoizedState=Y:J1||(Y=Z.type,J=Z.pendingProps,W=SW(T6.current).createElement(Y),W[W8]=Z,W[C8]=J,U8(W,Y,J),t1(W),Z.stateNode=W):Z.memoizedState=yK(Z.type,J.memoizedProps,Z.pendingProps,J.memoizedState),null;case 27:return LU(Z),J===null&&J1&&(W=Z.stateNode=VR(Z.type,Z.pendingProps,T6.current),X8=Z,Z7=!0,X=A1,u6(Z.type)?(wQ=X,A1=W7(W.firstChild)):A1=X),Y8(J,Z,Z.pendingProps.children,Y),YW(J,Z),J===null&&(Z.flags|=4194304),Z.child;case 5:if(J===null&&J1){if(X=W=A1)W=qM(W,Z.type,Z.pendingProps,Z7),W!==null?(Z.stateNode=W,X8=Z,A1=W7(W.firstChild),Z7=!1,X=!0):X=!1;X||g6(Z)}return LU(Z),X=Z.type,H=Z.pendingProps,U=J!==null?J.memoizedProps:null,W=H.children,XQ(X,H)?W=null:U!==null&&XQ(X,U)&&(Z.flags|=32),Z.memoizedState!==null&&(X=jQ(J,Z,bq,null,null,Y),VZ._currentValue=X),YW(J,Z),Y8(J,Z,W,Y),Z.child;case 6:if(J===null&&J1){if(J=Y=A1)Y=MM(Y,Z.pendingProps,Z7),Y!==null?(Z.stateNode=Y,X8=Z,A1=null,J=!0):J=!1;J||g6(Z)}return null;case 13:return Sz(J,Z,Y);case 4:return GW(Z,Z.stateNode.containerInfo),W=Z.pendingProps,J===null?Z.child=F9(Z,null,W,Y):Y8(J,Z,W,Y),Z.child;case 11:return KK(J,Z,Z.type,Z.pendingProps,Y);case 7:return Y8(J,Z,Z.pendingProps,Y),Z.child;case 8:return Y8(J,Z,Z.pendingProps.children,Y),Z.child;case 12:return Y8(J,Z,Z.pendingProps.children,Y),Z.child;case 10:return W=Z.pendingProps,L6(Z,Z.type,W.value),Y8(J,Z,W.children,Y),Z.child;case 9:return X=Z.type._context,W=Z.pendingProps.children,O9(Z),X=H8(X),W=W(X),Z.flags|=1,Y8(J,Z,W,Y),Z.child;case 14:return DK(J,Z,Z.type,Z.pendingProps,Y);case 15:return Tz(J,Z,Z.type,Z.pendingProps,Y);case 19:return xz(J,Z,Y);case 31:return uq(J,Z,Y);case 22:return Pz(J,Z,Y,Z.pendingProps);case 24:return O9(Z),W=H8(l1),J===null?(X=TQ(),X===null&&(X=M1,H=CQ(),X.pooledCache=H,H.refCount++,H!==null&&(X.pooledCacheLanes|=Y),X=H),Z.memoizedState={parent:W,cache:X},SQ(Z),L6(Z,l1,X)):((J.lanes&Y)!==0&&(hU(J,Z),HZ(Z,null,null,Y),XZ()),X=J.memoizedState,H=Z.memoizedState,X.parent!==W?(X={parent:W,cache:W},Z.memoizedState=X,Z.lanes===0&&(Z.memoizedState=Z.updateQueue.baseState=X),L6(Z,l1,W)):(W=H.cache,L6(Z,l1,W),W!==X.cache&&jU(Z,[l1],Y,!0))),Y8(J,Z,Z.pendingProps.children,Y),Z.child;case 29:throw Z.pendingProps}throw Error(t(156,Z.tag))}function b7(J){J.flags|=4}function WU(J,Z,Y,W,X){if(Z=(J.mode&32)!==0)Z=!1;if(Z){if(J.flags|=16777216,(X&335544128)===X)if(J.stateNode.complete)J.flags|=8192;else if(WR())J.flags|=8192;else throw z9=FW,PQ}else J.flags&=-16777217}function MK(J,Z){if(Z.type!=="stylesheet"||(Z.state.loading&4)!==0)J.flags&=-16777217;else if(J.flags|=16777216,!ER(Z))if(WR())J.flags|=8192;else throw z9=FW,PQ}function dY(J,Z){Z!==null&&(J.flags|=4),J.flags&16384&&(Z=J.tag!==22?XD():536870912,J.lanes|=Z,f5|=Z)}function dJ(J,Z){if(!J1)switch(J.tailMode){case"hidden":Z=J.tail;for(var Y=null;Z!==null;)Z.alternate!==null&&(Y=Z),Z=Z.sibling;Y===null?J.tail=null:Y.sibling=null;break;case"collapsed":Y=J.tail;for(var W=null;Y!==null;)Y.alternate!==null&&(W=Y),Y=Y.sibling;W===null?Z||J.tail===null?J.tail=null:J.tail.sibling=null:W.sibling=null}}function _1(J){var Z=J.alternate!==null&&J.alternate.child===J.child,Y=0,W=0;if(Z)for(var X=J.child;X!==null;)Y|=X.lanes|X.childLanes,W|=X.subtreeFlags&65011712,W|=X.flags&65011712,X.return=J,X=X.sibling;else for(X=J.child;X!==null;)Y|=X.lanes|X.childLanes,W|=X.subtreeFlags,W|=X.flags,X.return=J,X=X.sibling;return J.subtreeFlags|=W,J.childLanes=Y,Z}function cq(J,Z,Y){var W=Z.pendingProps;switch(IQ(Z),Z.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _1(Z),null;case 1:return _1(Z),null;case 3:if(Y=Z.stateNode,W=null,J!==null&&(W=J.memoizedState.cache),Z.memoizedState.cache!==W&&(Z.flags|=2048),c7(l1),I5(),Y.pendingContext&&(Y.context=Y.pendingContext,Y.pendingContext=null),J===null||J.child===null)W5(Z)?b7(Z):J===null||J.memoizedState.isDehydrated&&(Z.flags&256)===0||(Z.flags|=1024,nH());return _1(Z),null;case 26:var{type:X,memoizedState:H}=Z;return J===null?(b7(Z),H!==null?(_1(Z),MK(Z,H)):(_1(Z),WU(Z,X,null,W,Y))):H?H!==J.memoizedState?(b7(Z),_1(Z),MK(Z,H)):(_1(Z),Z.flags&=-16777217):(J=J.memoizedProps,J!==W&&b7(Z),_1(Z),WU(Z,X,J,W,Y)),null;case 27:if($W(Z),Y=T6.current,X=Z.type,J!==null&&Z.stateNode!=null)J.memoizedProps!==W&&b7(Z);else{if(!W){if(Z.stateNode===null)throw Error(t(166));return _1(Z),null}J=_7.current,W5(Z)?n2(Z,J):(J=VR(X,W,Y),Z.stateNode=J,b7(Z))}return _1(Z),null;case 5:if($W(Z),X=Z.type,J!==null&&Z.stateNode!=null)J.memoizedProps!==W&&b7(Z);else{if(!W){if(Z.stateNode===null)throw Error(t(166));return _1(Z),null}if(H=_7.current,W5(Z))n2(Z,H);else{var U=SW(T6.current);switch(H){case 1:H=U.createElementNS("http://www.w3.org/2000/svg",X);break;case 2:H=U.createElementNS("http://www.w3.org/1998/Math/MathML",X);break;default:switch(X){case"svg":H=U.createElementNS("http://www.w3.org/2000/svg",X);break;case"math":H=U.createElementNS("http://www.w3.org/1998/Math/MathML",X);break;case"script":H=U.createElement("div"),H.innerHTML="<script></script>",H=H.removeChild(H.firstChild);break;case"select":H=typeof W.is==="string"?U.createElement("select",{is:W.is}):U.createElement("select"),W.multiple?H.multiple=!0:W.size&&(H.size=W.size);break;default:H=typeof W.is==="string"?U.createElement(X,{is:W.is}):U.createElement(X)}}H[W8]=Z,H[C8]=W;J:for(U=Z.child;U!==null;){if(U.tag===5||U.tag===6)H.appendChild(U.stateNode);else if(U.tag!==4&&U.tag!==27&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===Z)break J;for(;U.sibling===null;){if(U.return===null||U.return===Z)break J;U=U.return}U.sibling.return=U.return,U=U.sibling}Z.stateNode=H;J:switch(U8(H,X,W),X){case"button":case"input":case"select":case"textarea":W=!!W.autoFocus;break J;case"img":W=!0;break J;default:W=!1}W&&b7(Z)}}return _1(Z),WU(Z,Z.type,J===null?null:J.memoizedProps,Z.pendingProps,Y),null;case 6:if(J&&Z.stateNode!=null)J.memoizedProps!==W&&b7(Z);else{if(typeof W!=="string"&&Z.stateNode===null)throw Error(t(166));if(J=T6.current,W5(Z)){if(J=Z.stateNode,Y=Z.memoizedProps,W=null,X=X8,X!==null)switch(X.tag){case 27:case 5:W=X.memoizedProps}J[W8]=Z,J=J.nodeValue===Y||W!==null&&W.suppressHydrationWarning===!0||MR(J.nodeValue,Y)?!0:!1,J||g6(Z,!0)}else J=SW(J).createTextNode(W),J[W8]=Z,Z.stateNode=J}return _1(Z),null;case 31:if(Y=Z.memoizedState,J===null||J.memoizedState!==null){if(W=W5(Z),Y!==null){if(J===null){if(!W)throw Error(t(318));if(J=Z.memoizedState,J=J!==null?J.dehydrated:null,!J)throw Error(t(557));J[W8]=Z}else N9(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;_1(Z),J=!1}else Y=nH(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=Y),J=!0;if(!J){if(Z.flags&256)return j8(Z),Z;return j8(Z),null}if((Z.flags&128)!==0)throw Error(t(558))}return _1(Z),null;case 13:if(W=Z.memoizedState,J===null||J.memoizedState!==null&&J.memoizedState.dehydrated!==null){if(X=W5(Z),W!==null&&W.dehydrated!==null){if(J===null){if(!X)throw Error(t(318));if(X=Z.memoizedState,X=X!==null?X.dehydrated:null,!X)throw Error(t(317));X[W8]=Z}else N9(),(Z.flags&128)===0&&(Z.memoizedState=null),Z.flags|=4;_1(Z),X=!1}else X=nH(),J!==null&&J.memoizedState!==null&&(J.memoizedState.hydrationErrors=X),X=!0;if(!X){if(Z.flags&256)return j8(Z),Z;return j8(Z),null}}if(j8(Z),(Z.flags&128)!==0)return Z.lanes=Y,Z;return Y=W!==null,J=J!==null&&J.memoizedState!==null,Y&&(W=Z.child,X=null,W.alternate!==null&&W.alternate.memoizedState!==null&&W.alternate.memoizedState.cachePool!==null&&(X=W.alternate.memoizedState.cachePool.pool),H=null,W.memoizedState!==null&&W.memoizedState.cachePool!==null&&(H=W.memoizedState.cachePool.pool),H!==X&&(W.flags|=2048)),Y!==J&&Y&&(Z.child.flags|=8192),dY(Z,Z.updateQueue),_1(Z),null;case 4:return I5(),J===null&&Jw(Z.stateNode.containerInfo),_1(Z),null;case 10:return c7(Z.type),_1(Z),null;case 19:if(e1(v1),W=Z.memoizedState,W===null)return _1(Z),null;if(X=(Z.flags&128)!==0,H=W.rendering,H===null)if(X)dJ(W,!1);else{if(f1!==0||J!==null&&(J.flags&128)!==0)for(J=Z.child;J!==null;){if(H=MW(J),H!==null){Z.flags|=128,dJ(W,!1),J=H.updateQueue,Z.updateQueue=J,dY(Z,J),Z.subtreeFlags=0,J=Y;for(Y=Z.child;Y!==null;)jD(Y,J),Y=Y.sibling;return k1(v1,v1.current&1|2),J1&&g7(Z,W.treeForkCount),Z.child}J=J.sibling}W.tail!==null&&v8()>AW&&(Z.flags|=128,X=!0,dJ(W,!1),Z.lanes=4194304)}else{if(!X)if(J=MW(H),J!==null){if(Z.flags|=128,X=!0,J=J.updateQueue,Z.updateQueue=J,dY(Z,J),dJ(W,!0),W.tail===null&&W.tailMode==="hidden"&&!H.alternate&&!J1)return _1(Z),null}else 2*v8()-W.renderingStartTime>AW&&Y!==536870912&&(Z.flags|=128,X=!0,dJ(W,!1),Z.lanes=4194304);W.isBackwards?(H.sibling=Z.child,Z.child=H):(J=W.last,J!==null?J.sibling=H:Z.child=H,W.last=H)}if(W.tail!==null)return J=W.tail,W.rendering=J,W.tail=J.sibling,W.renderingStartTime=v8(),J.sibling=null,Y=v1.current,k1(v1,X?Y&1|2:Y&1),J1&&g7(Z,W.treeForkCount),J;return _1(Z),null;case 22:case 23:return j8(Z),xQ(),W=Z.memoizedState!==null,J!==null?J.memoizedState!==null!==W&&(Z.flags|=8192):W&&(Z.flags|=8192),W?(Y&536870912)!==0&&(Z.flags&128)===0&&(_1(Z),Z.subtreeFlags&6&&(Z.flags|=8192)):_1(Z),Y=Z.updateQueue,Y!==null&&dY(Z,Y.retryQueue),Y=null,J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Y=J.memoizedState.cachePool.pool),W=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(W=Z.memoizedState.cachePool.pool),W!==Y&&(Z.flags|=2048),J!==null&&e1(D9),null;case 24:return Y=null,J!==null&&(Y=J.memoizedState.cache),Z.memoizedState.cache!==Y&&(Z.flags|=2048),c7(l1),_1(Z),null;case 25:return null;case 30:return null}throw Error(t(156,Z.tag))}function iq(J,Z){switch(IQ(Z),Z.tag){case 1:return J=Z.flags,J&65536?(Z.flags=J&-65537|128,Z):null;case 3:return c7(l1),I5(),J=Z.flags,(J&65536)!==0&&(J&128)===0?(Z.flags=J&-65537|128,Z):null;case 26:case 27:case 5:return $W(Z),null;case 31:if(Z.memoizedState!==null){if(j8(Z),Z.alternate===null)throw Error(t(340));N9()}return J=Z.flags,J&65536?(Z.flags=J&-65537|128,Z):null;case 13:if(j8(Z),J=Z.memoizedState,J!==null&&J.dehydrated!==null){if(Z.alternate===null)throw Error(t(340));N9()}return J=Z.flags,J&65536?(Z.flags=J&-65537|128,Z):null;case 19:return e1(v1),null;case 4:return I5(),null;case 10:return c7(Z.type),null;case 22:case 23:return j8(Z),xQ(),J!==null&&e1(D9),J=Z.flags,J&65536?(Z.flags=J&-65537|128,Z):null;case 24:return c7(l1),null;case 25:return null;default:return null}}function jz(J,Z){switch(IQ(Z),Z.tag){case 3:c7(l1),I5();break;case 26:case 27:case 5:$W(Z);break;case 4:I5();break;case 31:Z.memoizedState!==null&&j8(Z);break;case 13:j8(Z);break;case 19:e1(v1);break;case 10:c7(Z.type);break;case 22:case 23:j8(Z),xQ(),J!==null&&e1(D9);break;case 24:c7(l1)}}function jZ(J,Z){try{var Y=Z.updateQueue,W=Y!==null?Y.lastEffect:null;if(W!==null){var X=W.next;Y=X;do{if((Y.tag&J)===J){W=void 0;var{create:H,inst:U}=Y;W=H(),U.destroy=W}Y=Y.next}while(Y!==X)}}catch(Q){K1(Z,Z.return,Q)}}function p6(J,Z,Y){try{var W=Z.updateQueue,X=W!==null?W.lastEffect:null;if(X!==null){var H=X.next;W=H;do{if((W.tag&J)===J){var U=W.inst,Q=U.destroy;if(Q!==void 0){U.destroy=void 0,X=Z;var w=Y,G=Q;try{G()}catch(K){K1(X,w,K)}}}W=W.next}while(W!==H)}}catch(K){K1(Z,Z.return,K)}}function bz(J){var Z=J.updateQueue;if(Z!==null){var Y=J.stateNode;try{lD(Z,Y)}catch(W){K1(J,J.return,W)}}}function hz(J,Z,Y){Y.props=M9(J.type,J.memoizedProps),Y.state=J.memoizedState;try{Y.componentWillUnmount()}catch(W){K1(J,Z,W)}}function QZ(J,Z){try{var Y=J.ref;if(Y!==null){switch(J.tag){case 26:case 27:case 5:var W=J.stateNode;break;case 30:W=J.stateNode;break;default:W=J.stateNode}typeof Y==="function"?J.refCleanup=Y(W):Y.current=W}}catch(X){K1(J,Z,X)}}function V7(J,Z){var{ref:Y,refCleanup:W}=J;if(Y!==null)if(typeof W==="function")try{W()}catch(X){K1(J,Z,X)}finally{J.refCleanup=null,J=J.alternate,J!=null&&(J.refCleanup=null)}else if(typeof Y==="function")try{Y(null)}catch(X){K1(J,Z,X)}else Y.current=null}function vz(J){var{type:Z,memoizedProps:Y,stateNode:W}=J;try{J:switch(Z){case"button":case"input":case"select":case"textarea":Y.autoFocus&&W.focus();break J;case"img":Y.src?W.src=Y.src:Y.srcSet&&(W.srcset=Y.srcSet)}}catch(X){K1(J,J.return,X)}}function XU(J,Z,Y){try{var W=J.stateNode;DM(W,J.type,Y,Z),W[C8]=Z}catch(X){K1(J,J.return,X)}}function yz(J){return J.tag===5||J.tag===3||J.tag===26||J.tag===27&&u6(J.type)||J.tag===4}function HU(J){J:for(;;){for(;J.sibling===null;){if(J.return===null||yz(J.return))return null;J=J.return}J.sibling.return=J.return;for(J=J.sibling;J.tag!==5&&J.tag!==6&&J.tag!==18;){if(J.tag===27&&u6(J.type))continue J;if(J.flags&2)continue J;if(J.child===null||J.tag===4)continue J;else J.child.return=J,J=J.child}if(!(J.flags&2))return J.stateNode}}function sU(J,Z,Y){var W=J.tag;if(W===5||W===6)J=J.stateNode,Z?(Y.nodeType===9?Y.body:Y.nodeName==="HTML"?Y.ownerDocument.body:Y).insertBefore(J,Z):(Z=Y.nodeType===9?Y.body:Y.nodeName==="HTML"?Y.ownerDocument.body:Y,Z.appendChild(J),Y=Y._reactRootContainer,Y!==null&&Y!==void 0||Z.onclick!==null||(Z.onclick=m7));else if(W!==4&&(W===27&&u6(J.type)&&(Y=J.stateNode,Z=null),J=J.child,J!==null))for(sU(J,Z,Y),J=J.sibling;J!==null;)sU(J,Z,Y),J=J.sibling}function _W(J,Z,Y){var W=J.tag;if(W===5||W===6)J=J.stateNode,Z?Y.insertBefore(J,Z):Y.appendChild(J);else if(W!==4&&(W===27&&u6(J.type)&&(Y=J.stateNode),J=J.child,J!==null))for(_W(J,Z,Y),J=J.sibling;J!==null;)_W(J,Z,Y),J=J.sibling}function gz(J){var{stateNode:Z,memoizedProps:Y}=J;try{for(var W=J.type,X=Z.attributes;X.length;)Z.removeAttributeNode(X[0]);U8(Z,W,Y),Z[W8]=J,Z[C8]=Y}catch(H){K1(J,J.return,H)}}function sq(J,Z){if(J=J.containerInfo,YQ=bW,J=ED(J),BQ(J)){if("selectionStart"in J)var Y={start:J.selectionStart,end:J.selectionEnd};else J:{Y=(Y=J.ownerDocument)&&Y.defaultView||window;var W=Y.getSelection&&Y.getSelection();if(W&&W.rangeCount!==0){Y=W.anchorNode;var{anchorOffset:X,focusNode:H}=W;W=W.focusOffset;try{Y.nodeType,H.nodeType}catch(L){Y=null;break J}var U=0,Q=-1,w=-1,G=0,K=0,z=J,D=null;Z:for(;;){for(var R;;){if(z!==Y||X!==0&&z.nodeType!==3||(Q=U+X),z!==H||W!==0&&z.nodeType!==3||(w=U+W),z.nodeType===3&&(U+=z.nodeValue.length),(R=z.firstChild)===null)break;D=z,z=R}for(;;){if(z===J)break Z;if(D===Y&&++G===X&&(Q=U),D===H&&++K===W&&(w=U),(R=z.nextSibling)!==null)break;z=D,D=z.parentNode}z=R}Y=Q===-1||w===-1?null:{start:Q,end:w}}else Y=null}Y=Y||{start:0,end:0}}else Y=null;WQ={focusedElem:J,selectionRange:Y},bW=!1;for(r1=Z;r1!==null;)if(Z=r1,J=Z.child,(Z.subtreeFlags&1028)!==0&&J!==null)J.return=Z,r1=J;else for(;r1!==null;){switch(Z=r1,H=Z.alternate,J=Z.flags,Z.tag){case 0:if((J&4)!==0&&(J=Z.updateQueue,J=J!==null?J.events:null,J!==null))for(Y=0;Y<J.length;Y++)X=J[Y],X.ref.impl=X.nextImpl;break;case 11:case 15:break;case 1:if((J&1024)!==0&&H!==null){J=void 0,Y=Z,X=H.memoizedProps,H=H.memoizedState,W=Y.stateNode;try{var q=M9(Y.type,X);J=W.getSnapshotBeforeUpdate(q,H),W.__reactInternalSnapshotBeforeUpdate=J}catch(L){K1(Y,Y.return,L)}}break;case 3:if((J&1024)!==0){if(J=Z.stateNode.containerInfo,Y=J.nodeType,Y===9)HQ(J);else if(Y===1)switch(J.nodeName){case"HEAD":case"HTML":case"BODY":HQ(J);break;default:J.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((J&1024)!==0)throw Error(t(163))}if(J=Z.sibling,J!==null){J.return=Z.return,r1=J;break}r1=Z.return}}function pz(J,Z,Y){var W=Y.flags;switch(Y.tag){case 0:case 11:case 15:v7(J,Y),W&4&&jZ(5,Y);break;case 1:if(v7(J,Y),W&4)if(J=Y.stateNode,Z===null)try{J.componentDidMount()}catch(U){K1(Y,Y.return,U)}else{var X=M9(Y.type,Z.memoizedProps);Z=Z.memoizedState;try{J.componentDidUpdate(X,Z,J.__reactInternalSnapshotBeforeUpdate)}catch(U){K1(Y,Y.return,U)}}W&64&&bz(Y),W&512&&QZ(Y,Y.return);break;case 3:if(v7(J,Y),W&64&&(J=Y.updateQueue,J!==null)){if(Z=null,Y.child!==null)switch(Y.child.tag){case 27:case 5:Z=Y.child.stateNode;break;case 1:Z=Y.child.stateNode}try{lD(J,Z)}catch(U){K1(Y,Y.return,U)}}break;case 27:Z===null&&W&4&&gz(Y);case 26:case 5:v7(J,Y),Z===null&&W&4&&vz(Y),W&512&&QZ(Y,Y.return);break;case 12:v7(J,Y);break;case 31:v7(J,Y),W&4&&uz(J,Y);break;case 13:v7(J,Y),W&4&&lz(J,Y),W&64&&(J=Y.memoizedState,J!==null&&(J=J.dehydrated,J!==null&&(Y=YM.bind(null,Y),LM(J,Y))));break;case 22:if(W=Y.memoizedState!==null||p7,!W){Z=Z!==null&&Z.memoizedState!==null||u1,X=p7;var H=u1;p7=W,(u1=Z)&&!H?y7(J,Y,(Y.subtreeFlags&8772)!==0):v7(J,Y),p7=X,u1=H}break;case 30:break;default:v7(J,Y)}}function dz(J){var Z=J.alternate;Z!==null&&(J.alternate=null,dz(Z)),J.child=null,J.deletions=null,J.sibling=null,J.tag===5&&(Z=J.stateNode,Z!==null&&OQ(Z)),J.stateNode=null,J.return=null,J.dependencies=null,J.memoizedProps=null,J.memoizedState=null,J.pendingProps=null,J.stateNode=null,J.updateQueue=null}function h7(J,Z,Y){for(Y=Y.child;Y!==null;)mz(J,Z,Y),Y=Y.sibling}function mz(J,Z,Y){if(y8&&typeof y8.onCommitFiberUnmount==="function")try{y8.onCommitFiberUnmount(IZ,Y)}catch(H){}switch(Y.tag){case 26:u1||V7(Y,Z),h7(J,Z,Y),Y.memoizedState?Y.memoizedState.count--:Y.stateNode&&(Y=Y.stateNode,Y.parentNode.removeChild(Y));break;case 27:u1||V7(Y,Z);var W=C1,X=A8;u6(Y.type)&&(C1=Y.stateNode,A8=!1),h7(J,Z,Y),KZ(Y.stateNode),C1=W,A8=X;break;case 5:u1||V7(Y,Z);case 6:if(W=C1,X=A8,C1=null,h7(J,Z,Y),C1=W,A8=X,C1!==null)if(A8)try{(C1.nodeType===9?C1.body:C1.nodeName==="HTML"?C1.ownerDocument.body:C1).removeChild(Y.stateNode)}catch(H){K1(Y,Z,H)}else try{C1.removeChild(Y.stateNode)}catch(H){K1(Y,Z,H)}break;case 18:C1!==null&&(A8?(J=C1,fK(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J,Y.stateNode),v5(J)):fK(C1,Y.stateNode));break;case 4:W=C1,X=A8,C1=Y.stateNode.containerInfo,A8=!0,h7(J,Z,Y),C1=W,A8=X;break;case 0:case 11:case 14:case 15:p6(2,Y,Z),u1||p6(4,Y,Z),h7(J,Z,Y);break;case 1:u1||(V7(Y,Z),W=Y.stateNode,typeof W.componentWillUnmount==="function"&&hz(Y,Z,W)),h7(J,Z,Y);break;case 21:h7(J,Z,Y);break;case 22:u1=(W=u1)||Y.memoizedState!==null,h7(J,Z,Y),u1=W;break;default:h7(J,Z,Y)}}function uz(J,Z){if(Z.memoizedState===null&&(J=Z.alternate,J!==null&&(J=J.memoizedState,J!==null))){J=J.dehydrated;try{v5(J)}catch(Y){K1(Z,Z.return,Y)}}}function lz(J,Z){if(Z.memoizedState===null&&(J=Z.alternate,J!==null&&(J=J.memoizedState,J!==null&&(J=J.dehydrated,J!==null))))try{v5(J)}catch(Y){K1(Z,Z.return,Y)}}function nq(J){switch(J.tag){case 31:case 13:case 19:var Z=J.stateNode;return Z===null&&(Z=J.stateNode=new LK),Z;case 22:return J=J.stateNode,Z=J._retryCache,Z===null&&(Z=J._retryCache=new LK),Z;default:throw Error(t(435,J.tag))}}function mY(J,Z){var Y=nq(J);Z.forEach(function(W){if(!Y.has(W)){Y.add(W);var X=WM.bind(null,J,W);W.then(X,X)}})}function V8(J,Z){var Y=Z.deletions;if(Y!==null)for(var W=0;W<Y.length;W++){var X=Y[W],H=J,U=Z,Q=U;J:for(;Q!==null;){switch(Q.tag){case 27:if(u6(Q.type)){C1=Q.stateNode,A8=!1;break J}break;case 5:C1=Q.stateNode,A8=!1;break J;case 3:case 4:C1=Q.stateNode.containerInfo,A8=!0;break J}Q=Q.return}if(C1===null)throw Error(t(160));mz(H,U,X),C1=null,A8=!1,H=X.alternate,H!==null&&(H.return=null),X.return=null}if(Z.subtreeFlags&13886)for(Z=Z.child;Z!==null;)cz(Z,J),Z=Z.sibling}function cz(J,Z){var{alternate:Y,flags:W}=J;switch(J.tag){case 0:case 11:case 14:case 15:V8(Z,J),_8(J),W&4&&(p6(3,J,J.return),jZ(3,J),p6(5,J,J.return));break;case 1:V8(Z,J),_8(J),W&512&&(u1||Y===null||V7(Y,Y.return)),W&64&&p7&&(J=J.updateQueue,J!==null&&(W=J.callbacks,W!==null&&(Y=J.shared.hiddenCallbacks,J.shared.hiddenCallbacks=Y===null?W:Y.concat(W))));break;case 26:var X=K7;if(V8(Z,J),_8(J),W&512&&(u1||Y===null||V7(Y,Y.return)),W&4){var H=Y!==null?Y.memoizedState:null;if(W=J.memoizedState,Y===null)if(W===null)if(J.stateNode===null){J:{W=J.type,Y=J.memoizedProps,X=X.ownerDocument||X;Z:switch(W){case"title":if(H=X.getElementsByTagName("title")[0],!H||H[PZ]||H[W8]||H.namespaceURI==="http://www.w3.org/2000/svg"||H.hasAttribute("itemprop"))H=X.createElement(W),X.head.insertBefore(H,X.querySelector("head > title"));U8(H,W,Y),H[W8]=J,t1(H),W=H;break J;case"link":var U=pK("link","href",X).get(W+(Y.href||""));if(U){for(var Q=0;Q<U.length;Q++)if(H=U[Q],H.getAttribute("href")===(Y.href==null||Y.href===""?null:Y.href)&&H.getAttribute("rel")===(Y.rel==null?null:Y.rel)&&H.getAttribute("title")===(Y.title==null?null:Y.title)&&H.getAttribute("crossorigin")===(Y.crossOrigin==null?null:Y.crossOrigin)){U.splice(Q,1);break Z}}H=X.createElement(W),U8(H,W,Y),X.head.appendChild(H);break;case"meta":if(U=pK("meta","content",X).get(W+(Y.content||""))){for(Q=0;Q<U.length;Q++)if(H=U[Q],H.getAttribute("content")===(Y.content==null?null:""+Y.content)&&H.getAttribute("name")===(Y.name==null?null:Y.name)&&H.getAttribute("property")===(Y.property==null?null:Y.property)&&H.getAttribute("http-equiv")===(Y.httpEquiv==null?null:Y.httpEquiv)&&H.getAttribute("charset")===(Y.charSet==null?null:Y.charSet)){U.splice(Q,1);break Z}}H=X.createElement(W),U8(H,W,Y),X.head.appendChild(H);break;default:throw Error(t(468,W))}H[W8]=J,t1(H),W=H}J.stateNode=W}else dK(X,J.type,J.stateNode);else J.stateNode=gK(X,W,J.memoizedProps);else H!==W?(H===null?Y.stateNode!==null&&(Y=Y.stateNode,Y.parentNode.removeChild(Y)):H.count--,W===null?dK(X,J.type,J.stateNode):gK(X,W,J.memoizedProps)):W===null&&J.stateNode!==null&&XU(J,J.memoizedProps,Y.memoizedProps)}break;case 27:V8(Z,J),_8(J),W&512&&(u1||Y===null||V7(Y,Y.return)),Y!==null&&W&4&&XU(J,J.memoizedProps,Y.memoizedProps);break;case 5:if(V8(Z,J),_8(J),W&512&&(u1||Y===null||V7(Y,Y.return)),J.flags&32){X=J.stateNode;try{T5(X,"")}catch(q){K1(J,J.return,q)}}W&4&&J.stateNode!=null&&(X=J.memoizedProps,XU(J,X,Y!==null?Y.memoizedProps:X)),W&1024&&(UU=!0);break;case 6:if(V8(Z,J),_8(J),W&4){if(J.stateNode===null)throw Error(t(162));W=J.memoizedProps,Y=J.stateNode;try{Y.nodeValue=W}catch(q){K1(J,J.return,q)}}break;case 3:if(HW=null,X=K7,K7=xW(Z.containerInfo),V8(Z,J),K7=X,_8(J),W&4&&Y!==null&&Y.memoizedState.isDehydrated)try{v5(Z.containerInfo)}catch(q){K1(J,J.return,q)}UU&&(UU=!1,iz(J));break;case 4:W=K7,K7=xW(J.stateNode.containerInfo),V8(Z,J),_8(J),K7=W;break;case 12:V8(Z,J),_8(J);break;case 31:V8(Z,J),_8(J),W&4&&(W=J.updateQueue,W!==null&&(J.updateQueue=null,mY(J,W)));break;case 13:V8(Z,J),_8(J),J.child.flags&8192&&J.memoizedState!==null!==(Y!==null&&Y.memoizedState!==null)&&(nW=v8()),W&4&&(W=J.updateQueue,W!==null&&(J.updateQueue=null,mY(J,W)));break;case 22:X=J.memoizedState!==null;var w=Y!==null&&Y.memoizedState!==null,G=p7,K=u1;if(p7=G||X,u1=K||w,V8(Z,J),u1=K,p7=G,_8(J),W&8192)J:for(Z=J.stateNode,Z._visibility=X?Z._visibility&-2:Z._visibility|1,X&&(Y===null||w||p7||u1||G9(J)),Y=null,Z=J;;){if(Z.tag===5||Z.tag===26){if(Y===null){w=Y=Z;try{if(H=w.stateNode,X)U=H.style,typeof U.setProperty==="function"?U.setProperty("display","none","important"):U.display="none";else{Q=w.stateNode;var z=w.memoizedProps.style,D=z!==void 0&&z!==null&&z.hasOwnProperty("display")?z.display:null;Q.style.display=D==null||typeof D==="boolean"?"":(""+D).trim()}}catch(q){K1(w,w.return,q)}}}else if(Z.tag===6){if(Y===null){w=Z;try{w.stateNode.nodeValue=X?"":w.memoizedProps}catch(q){K1(w,w.return,q)}}}else if(Z.tag===18){if(Y===null){w=Z;try{var R=w.stateNode;X?jK(R,!0):jK(w.stateNode,!1)}catch(q){K1(w,w.return,q)}}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===J)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===J)break J;for(;Z.sibling===null;){if(Z.return===null||Z.return===J)break J;Y===Z&&(Y=null),Z=Z.return}Y===Z&&(Y=null),Z.sibling.return=Z.return,Z=Z.sibling}W&4&&(W=J.updateQueue,W!==null&&(Y=W.retryQueue,Y!==null&&(W.retryQueue=null,mY(J,Y))));break;case 19:V8(Z,J),_8(J),W&4&&(W=J.updateQueue,W!==null&&(J.updateQueue=null,mY(J,W)));break;case 30:break;case 21:break;default:V8(Z,J),_8(J)}}function _8(J){var Z=J.flags;if(Z&2){try{for(var Y,W=J.return;W!==null;){if(yz(W)){Y=W;break}W=W.return}if(Y==null)throw Error(t(160));switch(Y.tag){case 27:var X=Y.stateNode,H=HU(J);_W(J,H,X);break;case 5:var U=Y.stateNode;Y.flags&32&&(T5(U,""),Y.flags&=-33);var Q=HU(J);_W(J,Q,U);break;case 3:case 4:var w=Y.stateNode.containerInfo,G=HU(J);sU(J,G,w);break;default:throw Error(t(161))}}catch(K){K1(J,J.return,K)}J.flags&=-3}Z&4096&&(J.flags&=-4097)}function iz(J){if(J.subtreeFlags&1024)for(J=J.child;J!==null;){var Z=J;iz(Z),Z.tag===5&&Z.flags&1024&&Z.stateNode.reset(),J=J.sibling}}function v7(J,Z){if(Z.subtreeFlags&8772)for(Z=Z.child;Z!==null;)pz(J,Z.alternate,Z),Z=Z.sibling}function G9(J){for(J=J.child;J!==null;){var Z=J;switch(Z.tag){case 0:case 11:case 14:case 15:p6(4,Z,Z.return),G9(Z);break;case 1:V7(Z,Z.return);var Y=Z.stateNode;typeof Y.componentWillUnmount==="function"&&hz(Z,Z.return,Y),G9(Z);break;case 27:KZ(Z.stateNode);case 26:case 5:V7(Z,Z.return),G9(Z);break;case 22:Z.memoizedState===null&&G9(Z);break;case 30:G9(Z);break;default:G9(Z)}J=J.sibling}}function y7(J,Z,Y){Y=Y&&(Z.subtreeFlags&8772)!==0;for(Z=Z.child;Z!==null;){var W=Z.alternate,X=J,H=Z,U=H.flags;switch(H.tag){case 0:case 11:case 15:y7(X,H,Y),jZ(4,H);break;case 1:if(y7(X,H,Y),W=H,X=W.stateNode,typeof X.componentDidMount==="function")try{X.componentDidMount()}catch(G){K1(W,W.return,G)}if(W=H,X=W.updateQueue,X!==null){var Q=W.stateNode;try{var w=X.shared.hiddenCallbacks;if(w!==null)for(X.shared.hiddenCallbacks=null,X=0;X<w.length;X++)uD(w[X],Q)}catch(G){K1(W,W.return,G)}}Y&&U&64&&bz(H),QZ(H,H.return);break;case 27:gz(H);case 26:case 5:y7(X,H,Y),Y&&W===null&&U&4&&vz(H),QZ(H,H.return);break;case 12:y7(X,H,Y);break;case 31:y7(X,H,Y),Y&&U&4&&uz(X,H);break;case 13:y7(X,H,Y),Y&&U&4&&lz(X,H);break;case 22:H.memoizedState===null&&y7(X,H,Y),QZ(H,H.return);break;case 30:break;default:y7(X,H,Y)}Z=Z.sibling}}function nQ(J,Z){var Y=null;J!==null&&J.memoizedState!==null&&J.memoizedState.cachePool!==null&&(Y=J.memoizedState.cachePool.pool),J=null,Z.memoizedState!==null&&Z.memoizedState.cachePool!==null&&(J=Z.memoizedState.cachePool.pool),J!==Y&&(J!=null&&J.refCount++,Y!=null&&xZ(Y))}function oQ(J,Z){J=null,Z.alternate!==null&&(J=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==J&&(Z.refCount++,J!=null&&xZ(J))}function $7(J,Z,Y,W){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;)sz(J,Z,Y,W),Z=Z.sibling}function sz(J,Z,Y,W){var X=Z.flags;switch(Z.tag){case 0:case 11:case 15:$7(J,Z,Y,W),X&2048&&jZ(9,Z);break;case 1:$7(J,Z,Y,W);break;case 3:$7(J,Z,Y,W),X&2048&&(J=null,Z.alternate!==null&&(J=Z.alternate.memoizedState.cache),Z=Z.memoizedState.cache,Z!==J&&(Z.refCount++,J!=null&&xZ(J)));break;case 12:if(X&2048){$7(J,Z,Y,W),J=Z.stateNode;try{var H=Z.memoizedProps,U=H.id,Q=H.onPostCommit;typeof Q==="function"&&Q(U,Z.alternate===null?"mount":"update",J.passiveEffectDuration,-0)}catch(w){K1(Z,Z.return,w)}}else $7(J,Z,Y,W);break;case 31:$7(J,Z,Y,W);break;case 13:$7(J,Z,Y,W);break;case 23:break;case 22:H=Z.stateNode,U=Z.alternate,Z.memoizedState!==null?H._visibility&2?$7(J,Z,Y,W):wZ(J,Z):H._visibility&2?$7(J,Z,Y,W):(H._visibility|=2,H5(J,Z,Y,W,(Z.subtreeFlags&10256)!==0||!1)),X&2048&&nQ(U,Z);break;case 24:$7(J,Z,Y,W),X&2048&&oQ(Z.alternate,Z);break;default:$7(J,Z,Y,W)}}function H5(J,Z,Y,W,X){X=X&&((Z.subtreeFlags&10256)!==0||!1);for(Z=Z.child;Z!==null;){var H=J,U=Z,Q=Y,w=W,G=U.flags;switch(U.tag){case 0:case 11:case 15:H5(H,U,Q,w,X),jZ(8,U);break;case 23:break;case 22:var K=U.stateNode;U.memoizedState!==null?K._visibility&2?H5(H,U,Q,w,X):wZ(H,U):(K._visibility|=2,H5(H,U,Q,w,X)),X&&G&2048&&nQ(U.alternate,U);break;case 24:H5(H,U,Q,w,X),X&&G&2048&&oQ(U.alternate,U);break;default:H5(H,U,Q,w,X)}Z=Z.sibling}}function wZ(J,Z){if(Z.subtreeFlags&10256)for(Z=Z.child;Z!==null;){var Y=J,W=Z,X=W.flags;switch(W.tag){case 22:wZ(Y,W),X&2048&&nQ(W.alternate,W);break;case 24:wZ(Y,W),X&2048&&oQ(W.alternate,W);break;default:wZ(Y,W)}Z=Z.sibling}}function X5(J,Z,Y){if(J.subtreeFlags&aJ)for(J=J.child;J!==null;)nz(J,Z,Y),J=J.sibling}function nz(J,Z,Y){switch(J.tag){case 26:X5(J,Z,Y),J.flags&aJ&&J.memoizedState!==null&&xM(Y,K7,J.memoizedState,J.memoizedProps);break;case 5:X5(J,Z,Y);break;case 3:case 4:var W=K7;K7=xW(J.stateNode.containerInfo),X5(J,Z,Y),K7=W;break;case 22:J.memoizedState===null&&(W=J.alternate,W!==null&&W.memoizedState!==null?(W=aJ,aJ=16777216,X5(J,Z,Y),aJ=W):X5(J,Z,Y));break;default:X5(J,Z,Y)}}function oz(J){var Z=J.alternate;if(Z!==null&&(J=Z.child,J!==null)){Z.child=null;do Z=J.sibling,J.sibling=null,J=Z;while(J!==null)}}function mJ(J){var Z=J.deletions;if((J.flags&16)!==0){if(Z!==null)for(var Y=0;Y<Z.length;Y++){var W=Z[Y];r1=W,rz(W,J)}oz(J)}if(J.subtreeFlags&10256)for(J=J.child;J!==null;)az(J),J=J.sibling}function az(J){switch(J.tag){case 0:case 11:case 15:mJ(J),J.flags&2048&&p6(9,J,J.return);break;case 3:mJ(J);break;case 12:mJ(J);break;case 22:var Z=J.stateNode;J.memoizedState!==null&&Z._visibility&2&&(J.return===null||J.return.tag!==13)?(Z._visibility&=-3,WW(J)):mJ(J);break;default:mJ(J)}}function WW(J){var Z=J.deletions;if((J.flags&16)!==0){if(Z!==null)for(var Y=0;Y<Z.length;Y++){var W=Z[Y];r1=W,rz(W,J)}oz(J)}for(J=J.child;J!==null;){switch(Z=J,Z.tag){case 0:case 11:case 15:p6(8,Z,Z.return),WW(Z);break;case 22:Y=Z.stateNode,Y._visibility&2&&(Y._visibility&=-3,WW(Z));break;default:WW(Z)}J=J.sibling}}function rz(J,Z){for(;r1!==null;){var Y=r1;switch(Y.tag){case 0:case 11:case 15:p6(8,Y,Z);break;case 23:case 22:if(Y.memoizedState!==null&&Y.memoizedState.cachePool!==null){var W=Y.memoizedState.cachePool.pool;W!=null&&W.refCount++}break;case 24:xZ(Y.memoizedState.cache)}if(W=Y.child,W!==null)W.return=Y,r1=W;else J:for(Y=J;r1!==null;){W=r1;var{sibling:X,return:H}=W;if(dz(W),W===Y){r1=null;break J}if(X!==null){X.return=H,r1=X;break J}r1=H}}}function p8(){return(H1&2)!==0&&e0!==0?e0&-e0:p0.T!==null?eQ():wD()}function JR(){if(h8===0)if((e0&536870912)===0||J1){var J=jY;jY<<=1,(jY&3932160)===0&&(jY=262144),h8=J}else h8=536870912;return J=m8.current,J!==null&&(J.flags|=32),h8}function I8(J,Z,Y){if(J===M1&&($1===2||$1===9)||J.cancelPendingCommit!==null)b5(J,0),I6(J,e0,h8,!1);if(TZ(J,Y),(H1&2)===0||J!==M1)J===M1&&((H1&2)===0&&(R9|=Y),f1===4&&I6(J,e0,h8,!1)),E7(J)}function ZR(J,Z,Y){if((H1&6)!==0)throw Error(t(327));var W=!Y&&(Z&127)===0&&(Z&J.expiredLanes)===0||CZ(J,Z),X=W?eq(J,Z):QU(J,Z,!0),H=W;do{if(X===0){m5&&!W&&I6(J,Z,0,!1);break}else{if(Y=J.current.alternate,H&&!rq(Y)){X=QU(J,Z,!1),H=!1;continue}if(X===2){if(H=Z,J.errorRecoveryDisabledLanes&H)var U=0;else U=J.pendingLanes&-536870913,U=U!==0?U:U&536870912?536870912:0;if(U!==0){Z=U;J:{var Q=J;X=GZ;var w=Q.current.memoizedState.isDehydrated;if(w&&(b5(Q,U).flags|=256),U=QU(Q,U,!1),U!==2){if(aQ&&!w){Q.errorRecoveryDisabledLanes|=H,R9|=H,X=4;break J}H=E8,E8=X,H!==null&&(E8===null?E8=H:E8.push.apply(E8,H))}X=U}if(H=!1,X!==2)continue}}if(X===1){b5(J,0),I6(J,Z,0,!0);break}J:{switch(W=J,H=X,H){case 0:case 1:throw Error(t(345));case 4:if((Z&4194048)!==Z)break;case 6:I6(W,Z,h8,!E6);break J;case 2:E8=null;break;case 3:case 5:break;default:throw Error(t(329))}if((Z&62914560)===Z&&(X=nW+300-v8(),10<X)){if(I6(W,Z,h8,!E6),vW(W,0,!0)!==0)break J;i7=Z,W.timeoutHandle=kR(kK.bind(null,W,Y,E8,EW,nU,Z,h8,R9,f5,E6,H,"Throttled",-0,0),X);break J}kK(W,Y,E8,EW,nU,Z,h8,R9,f5,E6,H,null,-0,0)}}break}while(1);E7(J)}function kK(J,Z,Y,W,X,H,U,Q,w,G,K,z,D,R){if(J.timeoutHandle=-1,z=Z.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:m7},nz(Z,H,z);var q=(H&62914560)===H?nW-v8():(H&4194048)===H?tz-v8():0;if(q=fM(z,q),q!==null){i7=H,J.cancelPendingCommit=q(VK.bind(null,J,Z,H,Y,W,X,U,Q,w,K,z,null,D,R)),I6(J,H,U,!G);return}}VK(J,Z,H,Y,W,X,U,Q,w)}function rq(J){for(var Z=J;;){var Y=Z.tag;if((Y===0||Y===11||Y===15)&&Z.flags&16384&&(Y=Z.updateQueue,Y!==null&&(Y=Y.stores,Y!==null)))for(var W=0;W<Y.length;W++){var X=Y[W],H=X.getSnapshot;X=X.value;try{if(!d8(H(),X))return!1}catch(U){return!1}}if(Y=Z.child,Z.subtreeFlags&16384&&Y!==null)Y.return=Z,Z=Y;else{if(Z===J)break;for(;Z.sibling===null;){if(Z.return===null||Z.return===J)return!0;Z=Z.return}Z.sibling.return=Z.return,Z=Z.sibling}}return!0}function I6(J,Z,Y,W){Z&=~rQ,Z&=~R9,J.suspendedLanes|=Z,J.pingedLanes&=~Z,W&&(J.warmLanes|=Z),W=J.expirationTimes;for(var X=Z;0<X;){var H=31-g8(X),U=1<<H;W[H]=-1,X&=~U}Y!==0&&HD(J,Y,Z)}function oW(){return(H1&6)===0?(bZ(0,!1),!1):!0}function tQ(){if(a0!==null){if($1===0)var J=a0.return;else J=a0,u7=_9=null,vQ(J),_5=null,qZ=0,J=a0;for(;J!==null;)jz(J.alternate,J),J=J.return;a0=null}}function b5(J,Z){var Y=J.timeoutHandle;Y!==-1&&(J.timeoutHandle=-1,NM(Y)),Y=J.cancelPendingCommit,Y!==null&&(J.cancelPendingCommit=null,Y()),i7=0,tQ(),M1=J,a0=Y=l7(J.current,null),e0=Z,$1=0,f8=null,E6=!1,m5=CZ(J,Z),aQ=!1,f5=h8=rQ=R9=d6=f1=0,E8=GZ=null,nU=!1,(Z&8)!==0&&(Z|=Z&32);var W=J.entangledLanes;if(W!==0)for(J=J.entanglements,W&=Z;0<W;){var X=31-g8(W),H=1<<X;Z|=J[X],W&=~H}return r7=Z,dW(),Y}function YR(J,Z){c0=null,p0.H=LZ,Z===d5||Z===uW?(Z=e2(),$1=3):Z===PQ?(Z=e2(),$1=4):$1=Z===iQ?8:Z!==null&&typeof Z==="object"&&typeof Z.then==="function"?6:1,f8=Z,a0===null&&(f1=1,BW(J,J7(Z,J.current)))}function WR(){var J=m8.current;return J===null?!0:(e0&4194048)===e0?Y7===null?!0:!1:(e0&62914560)===e0||(e0&536870912)!==0?J===Y7:!1}function XR(){var J=p0.H;return p0.H=LZ,J===null?LZ:J}function HR(){var J=p0.A;return p0.A=oq,J}function IW(){f1=4,E6||(e0&4194048)!==e0&&m8.current!==null||(m5=!0),(d6&134217727)===0&&(R9&134217727)===0||M1===null||I6(M1,e0,h8,!1)}function QU(J,Z,Y){var W=H1;H1|=2;var X=XR(),H=HR();if(M1!==J||e0!==Z)EW=null,b5(J,Z);Z=!1;var U=f1;J:do try{if($1!==0&&a0!==null){var Q=a0,w=f8;switch($1){case 8:tQ(),U=6;break J;case 3:case 2:case 9:case 6:m8.current===null&&(Z=!0);var G=$1;if($1=0,f8=null,M5(J,Q,w,G),Y&&m5){U=0;break J}break;default:G=$1,$1=0,f8=null,M5(J,Q,w,G)}}tq(),U=f1;break}catch(K){YR(J,K)}while(1);return Z&&J.shellSuspendCounter++,u7=_9=null,H1=W,p0.H=X,p0.A=H,a0===null&&(M1=null,e0=0,dW()),U}function tq(){for(;a0!==null;)UR(a0)}function eq(J,Z){var Y=H1;H1|=2;var W=XR(),X=HR();M1!==J||e0!==Z?(EW=null,AW=v8()+500,b5(J,Z)):m5=CZ(J,Z);J:do try{if($1!==0&&a0!==null){Z=a0;var H=f8;Z:switch($1){case 1:$1=0,f8=null,M5(J,Z,H,1);break;case 2:case 9:if(t2(H)){$1=0,f8=null,BK(Z);break}Z=function(){$1!==2&&$1!==9||M1!==J||($1=7),E7(J)},H.then(Z,Z);break J;case 3:$1=7;break J;case 4:$1=5;break J;case 7:t2(H)?($1=0,f8=null,BK(Z)):($1=0,f8=null,M5(J,Z,H,7));break;case 5:var U=null;switch(a0.tag){case 26:U=a0.memoizedState;case 5:case 27:var Q=a0;if(U?ER(U):Q.stateNode.complete){$1=0,f8=null;var w=Q.sibling;if(w!==null)a0=w;else{var G=Q.return;G!==null?(a0=G,aW(G)):a0=null}break Z}}$1=0,f8=null,M5(J,Z,H,5);break;case 6:$1=0,f8=null,M5(J,Z,H,6);break;case 8:tQ(),f1=6;break J;default:throw Error(t(462))}}JM();break}catch(K){YR(J,K)}while(1);if(u7=_9=null,p0.H=W,p0.A=X,H1=Y,a0!==null)return 0;return M1=null,e0=0,dW(),f1}function JM(){for(;a0!==null&&!V4();)UR(a0)}function UR(J){var Z=fz(J.alternate,J,r7);J.memoizedProps=J.pendingProps,Z===null?aW(J):a0=Z}function BK(J){var Z=J,Y=Z.alternate;switch(Z.tag){case 15:case 0:Z=NK(Y,Z,Z.pendingProps,Z.type,void 0,e0);break;case 11:Z=NK(Y,Z,Z.pendingProps,Z.type.render,Z.ref,e0);break;case 5:vQ(Z);default:jz(Y,Z),Z=a0=jD(Z,r7),Z=fz(Y,Z,r7)}J.memoizedProps=J.pendingProps,Z===null?aW(J):a0=Z}function M5(J,Z,Y,W){u7=_9=null,vQ(Z),_5=null,qZ=0;var X=Z.return;try{if(mq(J,X,Z,Y,e0)){f1=1,BW(J,J7(Y,J.current)),a0=null;return}}catch(H){if(X!==null)throw a0=X,H;f1=1,BW(J,J7(Y,J.current)),a0=null;return}if(Z.flags&32768){if(J1||W===1)J=!0;else if(m5||(e0&536870912)!==0)J=!1;else if(E6=J=!0,W===2||W===9||W===3||W===6)W=m8.current,W!==null&&W.tag===13&&(W.flags|=16384);QR(Z,J)}else aW(Z)}function aW(J){var Z=J;do{if((Z.flags&32768)!==0){QR(Z,E6);return}J=Z.return;var Y=cq(Z.alternate,Z,r7);if(Y!==null){a0=Y;return}if(Z=Z.sibling,Z!==null){a0=Z;return}a0=Z=J}while(Z!==null);f1===0&&(f1=5)}function QR(J,Z){do{var Y=iq(J.alternate,J);if(Y!==null){Y.flags&=32767,a0=Y;return}if(Y=J.return,Y!==null&&(Y.flags|=32768,Y.subtreeFlags=0,Y.deletions=null),!Z&&(J=J.sibling,J!==null)){a0=J;return}a0=J=Y}while(J!==null);f1=6,a0=null}function VK(J,Z,Y,W,X,H,U,Q,w){J.cancelPendingCommit=null;do rW();while(s1!==0);if((H1&6)!==0)throw Error(t(327));if(Z!==null){if(Z===J.current)throw Error(t(177));if(H=Z.lanes|Z.childLanes,H|=VQ,f4(J,Y,H,U,Q,w),J===M1&&(a0=M1=null,e0=0),j5=Z,j6=J,i7=Y,oU=H,aU=X,ez=W,(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?(J.callbackNode=null,J.callbackPriority=0,XM(KW,function(){return DR(),null})):(J.callbackNode=null,J.callbackPriority=0),W=(Z.flags&13878)!==0,(Z.subtreeFlags&13878)!==0||W){W=p0.T,p0.T=null,X=U1.p,U1.p=2,U=H1,H1|=4;try{sq(J,Z,Y)}finally{H1=U,U1.p=X,p0.T=W}}s1=1,wR(),GR(),$R()}}function wR(){if(s1===1){s1=0;var J=j6,Z=j5,Y=(Z.flags&13878)!==0;if((Z.subtreeFlags&13878)!==0||Y){Y=p0.T,p0.T=null;var W=U1.p;U1.p=2;var X=H1;H1|=4;try{cz(Z,J);var H=WQ,U=ED(J.containerInfo),Q=H.focusedElem,w=H.selectionRange;if(U!==Q&&Q&&Q.ownerDocument&&AD(Q.ownerDocument.documentElement,Q)){if(w!==null&&BQ(Q)){var{start:G,end:K}=w;if(K===void 0&&(K=G),"selectionStart"in Q)Q.selectionStart=G,Q.selectionEnd=Math.min(K,Q.value.length);else{var z=Q.ownerDocument||document,D=z&&z.defaultView||window;if(D.getSelection){var R=D.getSelection(),q=Q.textContent.length,L=Math.min(w.start,q),O=w.end===void 0?L:Math.min(w.end,q);!R.extend&&L>O&&(U=O,O=L,L=U);var $=c2(Q,L),F=c2(Q,O);if($&&F&&(R.rangeCount!==1||R.anchorNode!==$.node||R.anchorOffset!==$.offset||R.focusNode!==F.node||R.focusOffset!==F.offset)){var N=z.createRange();N.setStart($.node,$.offset),R.removeAllRanges(),L>O?(R.addRange(N),R.extend(F.node,F.offset)):(N.setEnd(F.node,F.offset),R.addRange(N))}}}}z=[];for(R=Q;R=R.parentNode;)R.nodeType===1&&z.push({element:R,left:R.scrollLeft,top:R.scrollTop});typeof Q.focus==="function"&&Q.focus();for(Q=0;Q<z.length;Q++){var M=z[Q];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}bW=!!YQ,WQ=YQ=null}finally{H1=X,U1.p=W,p0.T=Y}}J.current=Z,s1=2}}function GR(){if(s1===2){s1=0;var J=j6,Z=j5,Y=(Z.flags&8772)!==0;if((Z.subtreeFlags&8772)!==0||Y){Y=p0.T,p0.T=null;var W=U1.p;U1.p=2;var X=H1;H1|=4;try{pz(J,Z.alternate,Z)}finally{H1=X,U1.p=W,p0.T=Y}}s1=3}}function $R(){if(s1===4||s1===3){s1=0,_4();var J=j6,Z=j5,Y=i7,W=ez;(Z.subtreeFlags&10256)!==0||(Z.flags&10256)!==0?s1=5:(s1=0,j5=j6=null,KR(J,J.pendingLanes));var X=J.pendingLanes;if(X===0&&(f6=null),NQ(Y),Z=Z.stateNode,y8&&typeof y8.onCommitFiberRoot==="function")try{y8.onCommitFiberRoot(IZ,Z,void 0,(Z.current.flags&128)===128)}catch(w){}if(W!==null){Z=p0.T,X=U1.p,U1.p=2,p0.T=null;try{for(var H=J.onRecoverableError,U=0;U<W.length;U++){var Q=W[U];H(Q.value,{componentStack:Q.stack})}}finally{p0.T=Z,U1.p=X}}(i7&3)!==0&&rW(),E7(J),X=J.pendingLanes,(Y&261930)!==0&&(X&42)!==0?J===rU?$Z++:($Z=0,rU=J):$Z=0,bZ(0,!1)}}function KR(J,Z){(J.pooledCacheLanes&=Z)===0&&(Z=J.pooledCache,Z!=null&&(J.pooledCache=null,xZ(Z)))}function rW(){return wR(),GR(),$R(),DR()}function DR(){if(s1!==5)return!1;var J=j6,Z=oU;oU=0;var Y=NQ(i7),W=p0.T,X=U1.p;try{U1.p=32>Y?32:Y,p0.T=null,Y=aU,aU=null;var H=j6,U=i7;if(s1=0,j5=j6=null,i7=0,(H1&6)!==0)throw Error(t(331));var Q=H1;if(H1|=4,az(H.current),sz(H,H.current,U,Y),H1=Q,bZ(0,!1),y8&&typeof y8.onPostCommitFiberRoot==="function")try{y8.onPostCommitFiberRoot(IZ,H)}catch(w){}return!0}finally{U1.p=X,p0.T=W,KR(J,Z)}}function _K(J,Z,Y){Z=J7(Y,Z),Z=lU(J.stateNode,Z,2),J=x6(J,Z,2),J!==null&&(TZ(J,2),E7(J))}function K1(J,Z,Y){if(J.tag===3)_K(J,J,Y);else for(;Z!==null;){if(Z.tag===3){_K(Z,J,Y);break}else if(Z.tag===1){var W=Z.stateNode;if(typeof Z.type.getDerivedStateFromError==="function"||typeof W.componentDidCatch==="function"&&(f6===null||!f6.has(W))){J=J7(Y,J),Y=Iz(2),W=x6(Z,Y,2),W!==null&&(Cz(Y,W,Z,J),TZ(W,2),E7(W));break}}Z=Z.return}}function wU(J,Z,Y){var W=J.pingCache;if(W===null){W=J.pingCache=new aq;var X=new Set;W.set(Z,X)}else X=W.get(Z),X===void 0&&(X=new Set,W.set(Z,X));X.has(Y)||(aQ=!0,X.add(Y),J=ZM.bind(null,J,Z,Y),Z.then(J,J))}function ZM(J,Z,Y){var W=J.pingCache;W!==null&&W.delete(Z),J.pingedLanes|=J.suspendedLanes&Y,J.warmLanes&=~Y,M1===J&&(e0&Y)===Y&&(f1===4||f1===3&&(e0&62914560)===e0&&300>v8()-nW?(H1&2)===0&&b5(J,0):rQ|=Y,f5===e0&&(f5=0)),E7(J)}function zR(J,Z){Z===0&&(Z=XD()),J=V9(J,Z),J!==null&&(TZ(J,Z),E7(J))}function YM(J){var Z=J.memoizedState,Y=0;Z!==null&&(Y=Z.retryLane),zR(J,Y)}function WM(J,Z){var Y=0;switch(J.tag){case 31:case 13:var{stateNode:W,memoizedState:X}=J;X!==null&&(Y=X.retryLane);break;case 19:W=J.stateNode;break;case 22:W=J.stateNode._retryCache;break;default:throw Error(t(314))}W!==null&&W.delete(Z),zR(J,Y)}function XM(J,Z){return zQ(J,Z)}function E7(J){J!==U5&&J.next===null&&(U5===null?CW=U5=J:U5=U5.next=J),TW=!0,tU||(tU=!0,UM())}function bZ(J,Z){if(!GU&&TW){GU=!0;do{var Y=!1;for(var W=CW;W!==null;){if(!Z)if(J!==0){var X=W.pendingLanes;if(X===0)var H=0;else{var{suspendedLanes:U,pingedLanes:Q}=W;H=(1<<31-g8(42|J)+1)-1,H&=X&~(U&~Q),H=H&201326741?H&201326741|1:H?H|2:0}H!==0&&(Y=!0,AK(W,H))}else H=e0,H=vW(W,W===M1?H:0,W.cancelPendingCommit!==null||W.timeoutHandle!==-1),(H&3)===0||CZ(W,H)||(Y=!0,AK(W,H));W=W.next}}while(Y);GU=!1}}function HM(){RR()}function RR(){TW=tU=!1;var J=0;C6!==0&&RM()&&(J=C6);for(var Z=v8(),Y=null,W=CW;W!==null;){var X=W.next,H=NR(W,Z);if(H===0)W.next=null,Y===null?CW=X:Y.next=X,X===null&&(U5=Y);else if(Y=W,J!==0||(H&3)!==0)TW=!0;W=X}s1!==0&&s1!==5||bZ(J,!1),C6!==0&&(C6=0)}function NR(J,Z){for(var{suspendedLanes:Y,pingedLanes:W,expirationTimes:X}=J,H=J.pendingLanes&-62914561;0<H;){var U=31-g8(H),Q=1<<U,w=X[U];if(w===-1){if((Q&Y)===0||(Q&W)!==0)X[U]=x4(Q,Z)}else w<=Z&&(J.expiredLanes|=Q);H&=~Q}if(Z=M1,Y=e0,Y=vW(J,J===Z?Y:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),W=J.callbackNode,Y===0||J===Z&&($1===2||$1===9)||J.cancelPendingCommit!==null)return W!==null&&W!==null&&gH(W),J.callbackNode=null,J.callbackPriority=0;if((Y&3)===0||CZ(J,Y)){if(Z=Y&-Y,Z===J.callbackPriority)return Z;switch(W!==null&&gH(W),NQ(Y)){case 2:case 8:Y=YD;break;case 32:Y=KW;break;case 268435456:Y=WD;break;default:Y=KW}return W=OR.bind(null,J),Y=zQ(Y,W),J.callbackPriority=Z,J.callbackNode=Y,Z}return W!==null&&W!==null&&gH(W),J.callbackPriority=2,J.callbackNode=null,2}function OR(J,Z){if(s1!==0&&s1!==5)return J.callbackNode=null,J.callbackPriority=0,null;var Y=J.callbackNode;if(rW()&&J.callbackNode!==Y)return null;var W=e0;if(W=vW(J,J===M1?W:0,J.cancelPendingCommit!==null||J.timeoutHandle!==-1),W===0)return null;return ZR(J,W,Z),NR(J,v8()),J.callbackNode!=null&&J.callbackNode===Y?OR.bind(null,J):null}function AK(J,Z){if(rW())return null;ZR(J,Z,!0)}function UM(){OM(function(){(H1&6)!==0?zQ(ZD,HM):RR()})}function eQ(){if(C6===0){var J=P5;J===0&&(J=fY,fY<<=1,(fY&261888)===0&&(fY=256)),C6=J}return C6}function EK(J){return J==null||typeof J==="symbol"||typeof J==="boolean"?null:typeof J==="function"?J:sY(""+J)}function IK(J,Z){var Y=Z.ownerDocument.createElement("input");return Y.name=Z.name,Y.value=Z.value,J.id&&Y.setAttribute("form",J.id),Z.parentNode.insertBefore(Y,Z),J=new FormData(J),Y.parentNode.removeChild(Y),J}function QM(J,Z,Y,W,X){if(Z==="submit"&&Y&&Y.stateNode===X){var H=EK((X[C8]||null).action),U=W.submitter;U&&(Z=(Z=U[C8]||null)?EK(Z.formAction):U.getAttribute("formAction"),Z!==null&&(H=Z,U=null));var Q=new yW("action","action",null,W,X);J.push({event:Q,listeners:[{instance:null,listener:function(){if(W.defaultPrevented){if(C6!==0){var w=U?IK(X,U):new FormData(X);mU(Y,{pending:!0,data:w,method:X.method,action:H},null,w)}}else typeof H==="function"&&(Q.preventDefault(),w=U?IK(X,U):new FormData(X),mU(Y,{pending:!0,data:w,method:X.method,action:H},H,w))},currentTarget:X}]})}}function FR(J,Z){Z=(Z&4)!==0;for(var Y=0;Y<J.length;Y++){var W=J[Y],X=W.event;W=W.listeners;J:{var H=void 0;if(Z)for(var U=W.length-1;0<=U;U--){var Q=W[U],w=Q.instance,G=Q.currentTarget;if(Q=Q.listener,w!==H&&X.isPropagationStopped())break J;H=Q,X.currentTarget=G;try{H(X)}catch(K){zW(K)}X.currentTarget=null,H=w}else for(U=0;U<W.length;U++){if(Q=W[U],w=Q.instance,G=Q.currentTarget,Q=Q.listener,w!==H&&X.isPropagationStopped())break J;H=Q,X.currentTarget=G;try{H(X)}catch(K){zW(K)}X.currentTarget=null,H=w}}}}function o0(J,Z){var Y=Z[BU];Y===void 0&&(Y=Z[BU]=new Set);var W=J+"__bubble";Y.has(W)||(qR(Z,J,2,!1),Y.add(W))}function $U(J,Z,Y){var W=0;Z&&(W|=4),qR(Y,J,W,Z)}function Jw(J){if(!J[uY]){J[uY]=!0,GD.forEach(function(Y){Y!=="selectionchange"&&(wM.has(Y)||$U(Y,!1,J),$U(Y,!0,J))});var Z=J.nodeType===9?J:J.ownerDocument;Z===null||Z[uY]||(Z[uY]=!0,$U("selectionchange",!1,Z))}}function qR(J,Z,Y,W){switch(SR(Z)){case 2:var X=hM;break;case 8:X=vM;break;default:X=Xw}Y=X.bind(null,Z,Y,J),X=void 0,!IU||Z!=="touchstart"&&Z!=="touchmove"&&Z!=="wheel"||(X=!0),W?X!==void 0?J.addEventListener(Z,Y,{capture:!0,passive:X}):J.addEventListener(Z,Y,!0):X!==void 0?J.addEventListener(Z,Y,{passive:X}):J.addEventListener(Z,Y,!1)}function KU(J,Z,Y,W,X){var H=W;if((Z&1)===0&&(Z&2)===0&&W!==null)J:for(;;){if(W===null)return;var U=W.tag;if(U===3||U===4){var Q=W.stateNode.containerInfo;if(Q===X)break;if(U===4)for(U=W.return;U!==null;){var w=U.tag;if((w===3||w===4)&&U.stateNode.containerInfo===X)return;U=U.return}for(;Q!==null;){if(U=$5(Q),U===null)return;if(w=U.tag,w===5||w===6||w===26||w===27){W=H=U;continue J}Q=Q.parentNode}}W=W.return}FD(function(){var G=H,K=qQ(Y),z=[];J:{var D=xD.get(J);if(D!==void 0){var R=yW,q=J;switch(J){case"keypress":if(oY(Y)===0)break J;case"keydown":case"keyup":R=Wq;break;case"focusin":q="focus",R=lH;break;case"focusout":q="blur",R=lH;break;case"beforeblur":case"afterblur":R=lH;break;case"click":if(Y.button===2)break J;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=h2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=c4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Uq;break;case CD:case TD:case PD:R=n4;break;case SD:R=wq;break;case"scroll":case"scrollend":R=u4;break;case"wheel":R=$q;break;case"copy":case"cut":case"paste":R=a4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=y2;break;case"toggle":case"beforetoggle":R=Dq}var L=(Z&4)!==0,O=!L&&(J==="scroll"||J==="scrollend"),$=L?D!==null?D+"Capture":null:D;L=[];for(var F=G,N;F!==null;){var M=F;if(N=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||N===null||$===null||(M=zZ(F,$),M!=null&&L.push(BZ(F,M,N))),O)break;F=F.return}0<L.length&&(D=new R(D,q,null,Y,K),z.push({event:D,listeners:L}))}}if((Z&7)===0){J:{if(D=J==="mouseover"||J==="pointerover",R=J==="mouseout"||J==="pointerout",D&&Y!==EU&&(q=Y.relatedTarget||Y.fromElement)&&($5(q)||q[y5]))break J;if(R||D){if(D=K.window===K?K:(D=K.ownerDocument)?D.defaultView||D.parentWindow:window,R){if(q=Y.relatedTarget||Y.toElement,R=G,q=q?$5(q):null,q!==null&&(O=EZ(q),L=q.tag,q!==O||L!==5&&L!==27&&L!==6))q=null}else R=null,q=G;if(R!==q){if(L=h2,M="onMouseLeave",$="onMouseEnter",F="mouse",J==="pointerout"||J==="pointerover")L=y2,M="onPointerLeave",$="onPointerEnter",F="pointer";if(O=R==null?D:iJ(R),N=q==null?D:iJ(q),D=new L(M,F+"leave",R,Y,K),D.target=O,D.relatedTarget=N,M=null,$5(K)===G&&(L=new L($,F+"enter",q,Y,K),L.target=N,L.relatedTarget=O,M=L),O=M,R&&q)Z:{L=GM,$=R,F=q,N=0;for(M=$;M;M=L(M))N++;M=0;for(var I=F;I;I=L(I))M++;for(;0<N-M;)$=L($),N--;for(;0<M-N;)F=L(F),M--;for(;N--;){if($===F||F!==null&&$===F.alternate){L=$;break Z}$=L($),F=L(F)}L=null}else L=null;R!==null&&CK(z,D,R,L,!1),q!==null&&O!==null&&CK(z,O,q,L,!0)}}}J:{if(D=G?iJ(G):window,R=D.nodeName&&D.nodeName.toLowerCase(),R==="select"||R==="input"&&D.type==="file")var E=m2;else if(d2(D))if(VD)E=Bq;else{E=Lq;var A=Mq}else R=D.nodeName,!R||R.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?G&&FQ(G.elementType)&&(E=m2):E=kq;if(E&&(E=E(J,G))){BD(z,E,Y,K);break J}A&&A(J,D,G),J==="focusout"&&G&&D.type==="number"&&G.memoizedProps.value!=null&&AU(D,"number",D.value)}switch(A=G?iJ(G):window,J){case"focusin":if(d2(A)||A.contentEditable==="true")z5=A,CU=G,ZZ=null;break;case"focusout":ZZ=CU=z5=null;break;case"mousedown":TU=!0;break;case"contextmenu":case"mouseup":case"dragend":TU=!1,i2(z,Y,K);break;case"selectionchange":if(_q)break;case"keydown":case"keyup":i2(z,Y,K)}var f;if(kQ)J:{switch(J){case"compositionstart":var B="onCompositionStart";break J;case"compositionend":B="onCompositionEnd";break J;case"compositionupdate":B="onCompositionUpdate";break J}B=void 0}else D5?LD(J,Y)&&(B="onCompositionEnd"):J==="keydown"&&Y.keyCode===229&&(B="onCompositionStart");if(B&&(MD&&Y.locale!=="ko"&&(D5||B!=="onCompositionStart"?B==="onCompositionEnd"&&D5&&(f=qD()):(A6=K,MQ=("value"in A6)?A6.value:A6.textContent,D5=!0)),A=PW(G,B),0<A.length&&(B=new v2(B,J,null,Y,K),z.push({event:B,listeners:A}),f?B.data=f:(f=kD(Y),f!==null&&(B.data=f)))),f=Rq?Nq(J,Y):Oq(J,Y))B=PW(G,"onBeforeInput"),0<B.length&&(A=new v2("onBeforeInput","beforeinput",null,Y,K),z.push({event:A,listeners:B}),A.data=f);QM(z,J,G,Y,K)}FR(z,Z)})}function BZ(J,Z,Y){return{instance:J,listener:Z,currentTarget:Y}}function PW(J,Z){for(var Y=Z+"Capture",W=[];J!==null;){var X=J,H=X.stateNode;if(X=X.tag,X!==5&&X!==26&&X!==27||H===null||(X=zZ(J,Y),X!=null&&W.unshift(BZ(J,X,H)),X=zZ(J,Z),X!=null&&W.push(BZ(J,X,H))),J.tag===3)return W;J=J.return}return[]}function GM(J){if(J===null)return null;do J=J.return;while(J&&J.tag!==5&&J.tag!==27);return J?J:null}function CK(J,Z,Y,W,X){for(var H=Z._reactName,U=[];Y!==null&&Y!==W;){var Q=Y,w=Q.alternate,G=Q.stateNode;if(Q=Q.tag,w!==null&&w===W)break;Q!==5&&Q!==26&&Q!==27||G===null||(w=G,X?(G=zZ(Y,H),G!=null&&U.unshift(BZ(Y,G,w))):X||(G=zZ(Y,H),G!=null&&U.push(BZ(Y,G,w)))),Y=Y.return}U.length!==0&&J.push({event:Z,listeners:U})}function TK(J){return(typeof J==="string"?J:""+J).replace($M,`
`).replace(KM,"")}function MR(J,Z){return Z=TK(Z),TK(J)===Z?!0:!1}function N1(J,Z,Y,W,X,H){switch(Y){case"children":typeof W==="string"?Z==="body"||Z==="textarea"&&W===""||T5(J,W):(typeof W==="number"||typeof W==="bigint")&&Z!=="body"&&T5(J,""+W);break;case"className":hY(J,"class",W);break;case"tabIndex":hY(J,"tabindex",W);break;case"dir":case"role":case"viewBox":case"width":case"height":hY(J,Y,W);break;case"style":OD(J,W,H);break;case"data":if(Z!=="object"){hY(J,"data",W);break}case"src":case"href":if(W===""&&(Z!=="a"||Y!=="href")){J.removeAttribute(Y);break}if(W==null||typeof W==="function"||typeof W==="symbol"||typeof W==="boolean"){J.removeAttribute(Y);break}W=sY(""+W),J.setAttribute(Y,W);break;case"action":case"formAction":if(typeof W==="function"){J.setAttribute(Y,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof H==="function"&&(Y==="formAction"?(Z!=="input"&&N1(J,Z,"name",X.name,X,null),N1(J,Z,"formEncType",X.formEncType,X,null),N1(J,Z,"formMethod",X.formMethod,X,null),N1(J,Z,"formTarget",X.formTarget,X,null)):(N1(J,Z,"encType",X.encType,X,null),N1(J,Z,"method",X.method,X,null),N1(J,Z,"target",X.target,X,null)));if(W==null||typeof W==="symbol"||typeof W==="boolean"){J.removeAttribute(Y);break}W=sY(""+W),J.setAttribute(Y,W);break;case"onClick":W!=null&&(J.onclick=m7);break;case"onScroll":W!=null&&o0("scroll",J);break;case"onScrollEnd":W!=null&&o0("scrollend",J);break;case"dangerouslySetInnerHTML":if(W!=null){if(typeof W!=="object"||!("__html"in W))throw Error(t(61));if(Y=W.__html,Y!=null){if(X.children!=null)throw Error(t(60));J.innerHTML=Y}}break;case"multiple":J.multiple=W&&typeof W!=="function"&&typeof W!=="symbol";break;case"muted":J.muted=W&&typeof W!=="function"&&typeof W!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(W==null||typeof W==="function"||typeof W==="boolean"||typeof W==="symbol"){J.removeAttribute("xlink:href");break}Y=sY(""+W),J.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Y);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":W!=null&&typeof W!=="function"&&typeof W!=="symbol"?J.setAttribute(Y,""+W):J.removeAttribute(Y);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":W&&typeof W!=="function"&&typeof W!=="symbol"?J.setAttribute(Y,""):J.removeAttribute(Y);break;case"capture":case"download":W===!0?J.setAttribute(Y,""):W!==!1&&W!=null&&typeof W!=="function"&&typeof W!=="symbol"?J.setAttribute(Y,W):J.removeAttribute(Y);break;case"cols":case"rows":case"size":case"span":W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&!isNaN(W)&&1<=W?J.setAttribute(Y,W):J.removeAttribute(Y);break;case"rowSpan":case"start":W==null||typeof W==="function"||typeof W==="symbol"||isNaN(W)?J.removeAttribute(Y):J.setAttribute(Y,W);break;case"popover":o0("beforetoggle",J),o0("toggle",J),iY(J,"popover",W);break;case"xlinkActuate":j7(J,"http://www.w3.org/1999/xlink","xlink:actuate",W);break;case"xlinkArcrole":j7(J,"http://www.w3.org/1999/xlink","xlink:arcrole",W);break;case"xlinkRole":j7(J,"http://www.w3.org/1999/xlink","xlink:role",W);break;case"xlinkShow":j7(J,"http://www.w3.org/1999/xlink","xlink:show",W);break;case"xlinkTitle":j7(J,"http://www.w3.org/1999/xlink","xlink:title",W);break;case"xlinkType":j7(J,"http://www.w3.org/1999/xlink","xlink:type",W);break;case"xmlBase":j7(J,"http://www.w3.org/XML/1998/namespace","xml:base",W);break;case"xmlLang":j7(J,"http://www.w3.org/XML/1998/namespace","xml:lang",W);break;case"xmlSpace":j7(J,"http://www.w3.org/XML/1998/namespace","xml:space",W);break;case"is":iY(J,"is",W);break;case"innerText":case"textContent":break;default:if(!(2<Y.length)||Y[0]!=="o"&&Y[0]!=="O"||Y[1]!=="n"&&Y[1]!=="N")Y=d4.get(Y)||Y,iY(J,Y,W)}}function ZQ(J,Z,Y,W,X,H){switch(Y){case"style":OD(J,W,H);break;case"dangerouslySetInnerHTML":if(W!=null){if(typeof W!=="object"||!("__html"in W))throw Error(t(61));if(Y=W.__html,Y!=null){if(X.children!=null)throw Error(t(60));J.innerHTML=Y}}break;case"children":typeof W==="string"?T5(J,W):(typeof W==="number"||typeof W==="bigint")&&T5(J,""+W);break;case"onScroll":W!=null&&o0("scroll",J);break;case"onScrollEnd":W!=null&&o0("scrollend",J);break;case"onClick":W!=null&&(J.onclick=m7);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$D.hasOwnProperty(Y))J:{if(Y[0]==="o"&&Y[1]==="n"&&(X=Y.endsWith("Capture"),Z=Y.slice(2,X?Y.length-7:void 0),H=J[C8]||null,H=H!=null?H[Y]:null,typeof H==="function"&&J.removeEventListener(Z,H,X),typeof W==="function")){typeof H!=="function"&&H!==null&&(Y in J?J[Y]=null:J.hasAttribute(Y)&&J.removeAttribute(Y)),J.addEventListener(Z,W,X);break J}Y in J?J[Y]=W:W===!0?J.setAttribute(Y,""):iY(J,Y,W)}}}function U8(J,Z,Y){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":o0("error",J),o0("load",J);var W=!1,X=!1,H;for(H in Y)if(Y.hasOwnProperty(H)){var U=Y[H];if(U!=null)switch(H){case"src":W=!0;break;case"srcSet":X=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(t(137,Z));default:N1(J,Z,H,U,Y,null)}}X&&N1(J,Z,"srcSet",Y.srcSet,Y,null),W&&N1(J,Z,"src",Y.src,Y,null);return;case"input":o0("invalid",J);var Q=H=U=X=null,w=null,G=null;for(W in Y)if(Y.hasOwnProperty(W)){var K=Y[W];if(K!=null)switch(W){case"name":X=K;break;case"type":U=K;break;case"checked":w=K;break;case"defaultChecked":G=K;break;case"value":H=K;break;case"defaultValue":Q=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(t(137,Z));break;default:N1(J,Z,W,K,Y,null)}}zD(J,H,Q,w,G,U,X,!1);return;case"select":o0("invalid",J),W=U=H=null;for(X in Y)if(Y.hasOwnProperty(X)&&(Q=Y[X],Q!=null))switch(X){case"value":H=Q;break;case"defaultValue":U=Q;break;case"multiple":W=Q;default:N1(J,Z,X,Q,Y,null)}Z=H,Y=U,J.multiple=!!W,Z!=null?k5(J,!!W,Z,!1):Y!=null&&k5(J,!!W,Y,!0);return;case"textarea":o0("invalid",J),H=X=W=null;for(U in Y)if(Y.hasOwnProperty(U)&&(Q=Y[U],Q!=null))switch(U){case"value":W=Q;break;case"defaultValue":X=Q;break;case"children":H=Q;break;case"dangerouslySetInnerHTML":if(Q!=null)throw Error(t(91));break;default:N1(J,Z,U,Q,Y,null)}ND(J,W,X,H);return;case"option":for(w in Y)if(Y.hasOwnProperty(w)&&(W=Y[w],W!=null))switch(w){case"selected":J.selected=W&&typeof W!=="function"&&typeof W!=="symbol";break;default:N1(J,Z,w,W,Y,null)}return;case"dialog":o0("beforetoggle",J),o0("toggle",J),o0("cancel",J),o0("close",J);break;case"iframe":case"object":o0("load",J);break;case"video":case"audio":for(W=0;W<kZ.length;W++)o0(kZ[W],J);break;case"image":o0("error",J),o0("load",J);break;case"details":o0("toggle",J);break;case"embed":case"source":case"link":o0("error",J),o0("load",J);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in Y)if(Y.hasOwnProperty(G)&&(W=Y[G],W!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(t(137,Z));default:N1(J,Z,G,W,Y,null)}return;default:if(FQ(Z)){for(K in Y)Y.hasOwnProperty(K)&&(W=Y[K],W!==void 0&&ZQ(J,Z,K,W,Y,void 0));return}}for(Q in Y)Y.hasOwnProperty(Q)&&(W=Y[Q],W!=null&&N1(J,Z,Q,W,Y,null))}function DM(J,Z,Y,W){switch(Z){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var X=null,H=null,U=null,Q=null,w=null,G=null,K=null;for(R in Y){var z=Y[R];if(Y.hasOwnProperty(R)&&z!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":w=z;default:W.hasOwnProperty(R)||N1(J,Z,R,null,W,z)}}for(var D in W){var R=W[D];if(z=Y[D],W.hasOwnProperty(D)&&(R!=null||z!=null))switch(D){case"type":H=R;break;case"name":X=R;break;case"checked":G=R;break;case"defaultChecked":K=R;break;case"value":U=R;break;case"defaultValue":Q=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(t(137,Z));break;default:R!==z&&N1(J,Z,D,R,W,z)}}_U(J,U,Q,w,G,K,H,X);return;case"select":R=U=Q=D=null;for(H in Y)if(w=Y[H],Y.hasOwnProperty(H)&&w!=null)switch(H){case"value":break;case"multiple":R=w;default:W.hasOwnProperty(H)||N1(J,Z,H,null,W,w)}for(X in W)if(H=W[X],w=Y[X],W.hasOwnProperty(X)&&(H!=null||w!=null))switch(X){case"value":D=H;break;case"defaultValue":Q=H;break;case"multiple":U=H;default:H!==w&&N1(J,Z,X,H,W,w)}Z=Q,Y=U,W=R,D!=null?k5(J,!!Y,D,!1):!!W!==!!Y&&(Z!=null?k5(J,!!Y,Z,!0):k5(J,!!Y,Y?[]:"",!1));return;case"textarea":R=D=null;for(Q in Y)if(X=Y[Q],Y.hasOwnProperty(Q)&&X!=null&&!W.hasOwnProperty(Q))switch(Q){case"value":break;case"children":break;default:N1(J,Z,Q,null,W,X)}for(U in W)if(X=W[U],H=Y[U],W.hasOwnProperty(U)&&(X!=null||H!=null))switch(U){case"value":D=X;break;case"defaultValue":R=X;break;case"children":break;case"dangerouslySetInnerHTML":if(X!=null)throw Error(t(91));break;default:X!==H&&N1(J,Z,U,X,W,H)}RD(J,D,R);return;case"option":for(var q in Y)if(D=Y[q],Y.hasOwnProperty(q)&&D!=null&&!W.hasOwnProperty(q))switch(q){case"selected":J.selected=!1;break;default:N1(J,Z,q,null,W,D)}for(w in W)if(D=W[w],R=Y[w],W.hasOwnProperty(w)&&D!==R&&(D!=null||R!=null))switch(w){case"selected":J.selected=D&&typeof D!=="function"&&typeof D!=="symbol";break;default:N1(J,Z,w,D,W,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in Y)D=Y[L],Y.hasOwnProperty(L)&&D!=null&&!W.hasOwnProperty(L)&&N1(J,Z,L,null,W,D);for(G in W)if(D=W[G],R=Y[G],W.hasOwnProperty(G)&&D!==R&&(D!=null||R!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(t(137,Z));break;default:N1(J,Z,G,D,W,R)}return;default:if(FQ(Z)){for(var O in Y)D=Y[O],Y.hasOwnProperty(O)&&D!==void 0&&!W.hasOwnProperty(O)&&ZQ(J,Z,O,void 0,W,D);for(K in W)D=W[K],R=Y[K],!W.hasOwnProperty(K)||D===R||D===void 0&&R===void 0||ZQ(J,Z,K,D,W,R);return}}for(var $ in Y)D=Y[$],Y.hasOwnProperty($)&&D!=null&&!W.hasOwnProperty($)&&N1(J,Z,$,null,W,D);for(z in W)D=W[z],R=Y[z],!W.hasOwnProperty(z)||D===R||D==null&&R==null||N1(J,Z,z,D,W,R)}function PK(J){switch(J){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zM(){if(typeof performance.getEntriesByType==="function"){for(var J=0,Z=0,Y=performance.getEntriesByType("resource"),W=0;W<Y.length;W++){var X=Y[W],H=X.transferSize,U=X.initiatorType,Q=X.duration;if(H&&Q&&PK(U)){U=0,Q=X.responseEnd;for(W+=1;W<Y.length;W++){var w=Y[W],G=w.startTime;if(G>Q)break;var{transferSize:K,initiatorType:z}=w;K&&PK(z)&&(w=w.responseEnd,U+=K*(w<Q?1:(Q-G)/(w-G)))}if(--W,Z+=8*(H+U)/(X.duration/1000),J++,10<J)break}}if(0<J)return Z/J/1e6}return navigator.connection&&(J=navigator.connection.downlink,typeof J==="number")?J:5}function SW(J){return J.nodeType===9?J:J.ownerDocument}function SK(J){switch(J){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function LR(J,Z){if(J===0)switch(Z){case"svg":return 1;case"math":return 2;default:return 0}return J===1&&Z==="foreignObject"?0:J}function XQ(J,Z){return J==="textarea"||J==="noscript"||typeof Z.children==="string"||typeof Z.children==="number"||typeof Z.children==="bigint"||typeof Z.dangerouslySetInnerHTML==="object"&&Z.dangerouslySetInnerHTML!==null&&Z.dangerouslySetInnerHTML.__html!=null}function RM(){var J=window.event;if(J&&J.type==="popstate"){if(J===DU)return!1;return DU=J,!0}return DU=null,!1}function FM(J){setTimeout(function(){throw J})}function u6(J){return J==="head"}function fK(J,Z){var Y=Z,W=0;do{var X=Y.nextSibling;if(J.removeChild(Y),X&&X.nodeType===8)if(Y=X.data,Y==="/$"||Y==="/&"){if(W===0){J.removeChild(X),v5(Z);return}W--}else if(Y==="$"||Y==="$?"||Y==="$~"||Y==="$!"||Y==="&")W++;else if(Y==="html")KZ(J.ownerDocument.documentElement);else if(Y==="head"){Y=J.ownerDocument.head,KZ(Y);for(var H=Y.firstChild;H;){var{nextSibling:U,nodeName:Q}=H;H[PZ]||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&H.rel.toLowerCase()==="stylesheet"||Y.removeChild(H),H=U}}else Y==="body"&&KZ(J.ownerDocument.body);Y=X}while(Y);v5(Z)}function jK(J,Z){var Y=J;J=0;do{var W=Y.nextSibling;if(Y.nodeType===1?Z?(Y._stashedDisplay=Y.style.display,Y.style.display="none"):(Y.style.display=Y._stashedDisplay||"",Y.getAttribute("style")===""&&Y.removeAttribute("style")):Y.nodeType===3&&(Z?(Y._stashedText=Y.nodeValue,Y.nodeValue=""):Y.nodeValue=Y._stashedText||""),W&&W.nodeType===8)if(Y=W.data,Y==="/$")if(J===0)break;else J--;else Y!=="$"&&Y!=="$?"&&Y!=="$~"&&Y!=="$!"||J++;Y=W}while(Y)}function HQ(J){var Z=J.firstChild;Z&&Z.nodeType===10&&(Z=Z.nextSibling);for(;Z;){var Y=Z;switch(Z=Z.nextSibling,Y.nodeName){case"HTML":case"HEAD":case"BODY":HQ(Y),OQ(Y);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(Y.rel.toLowerCase()==="stylesheet")continue}J.removeChild(Y)}}function qM(J,Z,Y,W){for(;J.nodeType===1;){var X=Y;if(J.nodeName.toLowerCase()!==Z.toLowerCase()){if(!W&&(J.nodeName!=="INPUT"||J.type!=="hidden"))break}else if(!W)if(Z==="input"&&J.type==="hidden"){var H=X.name==null?null:""+X.name;if(X.type==="hidden"&&J.getAttribute("name")===H)return J}else return J;else if(!J[PZ])switch(Z){case"meta":if(!J.hasAttribute("itemprop"))break;return J;case"link":if(H=J.getAttribute("rel"),H==="stylesheet"&&J.hasAttribute("data-precedence"))break;else if(H!==X.rel||J.getAttribute("href")!==(X.href==null||X.href===""?null:X.href)||J.getAttribute("crossorigin")!==(X.crossOrigin==null?null:X.crossOrigin)||J.getAttribute("title")!==(X.title==null?null:X.title))break;return J;case"style":if(J.hasAttribute("data-precedence"))break;return J;case"script":if(H=J.getAttribute("src"),(H!==(X.src==null?null:X.src)||J.getAttribute("type")!==(X.type==null?null:X.type)||J.getAttribute("crossorigin")!==(X.crossOrigin==null?null:X.crossOrigin))&&H&&J.hasAttribute("async")&&!J.hasAttribute("itemprop"))break;return J;default:return J}if(J=W7(J.nextSibling),J===null)break}return null}function MM(J,Z,Y){if(Z==="")return null;for(;J.nodeType!==3;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!Y)return null;if(J=W7(J.nextSibling),J===null)return null}return J}function BR(J,Z){for(;J.nodeType!==8;){if((J.nodeType!==1||J.nodeName!=="INPUT"||J.type!=="hidden")&&!Z)return null;if(J=W7(J.nextSibling),J===null)return null}return J}function UQ(J){return J.data==="$?"||J.data==="$~"}function QQ(J){return J.data==="$!"||J.data==="$?"&&J.ownerDocument.readyState!=="loading"}function LM(J,Z){var Y=J.ownerDocument;if(J.data==="$~")J._reactRetry=Z;else if(J.data!=="$?"||Y.readyState!=="loading")Z();else{var W=function(){Z(),Y.removeEventListener("DOMContentLoaded",W)};Y.addEventListener("DOMContentLoaded",W),J._reactRetry=W}}function W7(J){for(;J!=null;J=J.nextSibling){var Z=J.nodeType;if(Z===1||Z===3)break;if(Z===8){if(Z=J.data,Z==="$"||Z==="$!"||Z==="$?"||Z==="$~"||Z==="&"||Z==="F!"||Z==="F")break;if(Z==="/$"||Z==="/&")return null}}return J}function bK(J){J=J.nextSibling;for(var Z=0;J;){if(J.nodeType===8){var Y=J.data;if(Y==="/$"||Y==="/&"){if(Z===0)return W7(J.nextSibling);Z--}else Y!=="$"&&Y!=="$!"&&Y!=="$?"&&Y!=="$~"&&Y!=="&"||Z++}J=J.nextSibling}return null}function hK(J){J=J.previousSibling;for(var Z=0;J;){if(J.nodeType===8){var Y=J.data;if(Y==="$"||Y==="$!"||Y==="$?"||Y==="$~"||Y==="&"){if(Z===0)return J;Z--}else Y!=="/$"&&Y!=="/&"||Z++}J=J.previousSibling}return null}function VR(J,Z,Y){switch(Z=SW(Y),J){case"html":if(J=Z.documentElement,!J)throw Error(t(452));return J;case"head":if(J=Z.head,!J)throw Error(t(453));return J;case"body":if(J=Z.body,!J)throw Error(t(454));return J;default:throw Error(t(451))}}function KZ(J){for(var Z=J.attributes;Z.length;)J.removeAttributeNode(Z[0]);OQ(J)}function xW(J){return typeof J.getRootNode==="function"?J.getRootNode():J.nodeType===9?J:J.ownerDocument}function kM(){var J=t7.f(),Z=oW();return J||Z}function BM(J){var Z=g5(J);Z!==null&&Z.tag===5&&Z.type==="form"?Oz(Z):t7.r(J)}function _R(J,Z,Y){var W=u5;if(W&&typeof Z==="string"&&Z){var X=e8(Z);X='link[rel="'+J+'"][href="'+X+'"]',typeof Y==="string"&&(X+='[crossorigin="'+Y+'"]'),vK.has(X)||(vK.add(X),J={rel:J,crossOrigin:Y,href:Z},W.querySelector(X)===null&&(Z=W.createElement("link"),U8(Z,"link",J),t1(Z),W.head.appendChild(Z)))}}function VM(J){t7.D(J),_R("dns-prefetch",J,null)}function _M(J,Z){t7.C(J,Z),_R("preconnect",J,Z)}function AM(J,Z,Y){t7.L(J,Z,Y);var W=u5;if(W&&J&&Z){var X='link[rel="preload"][as="'+e8(Z)+'"]';Z==="image"?Y&&Y.imageSrcSet?(X+='[imagesrcset="'+e8(Y.imageSrcSet)+'"]',typeof Y.imageSizes==="string"&&(X+='[imagesizes="'+e8(Y.imageSizes)+'"]')):X+='[href="'+e8(J)+'"]':X+='[href="'+e8(J)+'"]';var H=X;switch(Z){case"style":H=h5(J);break;case"script":H=l5(J)}X7.has(H)||(J=E1({rel:"preload",href:Z==="image"&&Y&&Y.imageSrcSet?void 0:J,as:Z},Y),X7.set(H,J),W.querySelector(X)!==null||Z==="style"&&W.querySelector(hZ(H))||Z==="script"&&W.querySelector(vZ(H))||(Z=W.createElement("link"),U8(Z,"link",J),t1(Z),W.head.appendChild(Z)))}}function EM(J,Z){t7.m(J,Z);var Y=u5;if(Y&&J){var W=Z&&typeof Z.as==="string"?Z.as:"script",X='link[rel="modulepreload"][as="'+e8(W)+'"][href="'+e8(J)+'"]',H=X;switch(W){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":H=l5(J)}if(!X7.has(H)&&(J=E1({rel:"modulepreload",href:J},Z),X7.set(H,J),Y.querySelector(X)===null)){switch(W){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(Y.querySelector(vZ(H)))return}W=Y.createElement("link"),U8(W,"link",J),t1(W),Y.head.appendChild(W)}}}function IM(J,Z,Y){t7.S(J,Z,Y);var W=u5;if(W&&J){var X=L5(W).hoistableStyles,H=h5(J);Z=Z||"default";var U=X.get(H);if(!U){var Q={loading:0,preload:null};if(U=W.querySelector(hZ(H)))Q.loading=5;else{J=E1({rel:"stylesheet",href:J,"data-precedence":Z},Y),(Y=X7.get(H))&&Zw(J,Y);var w=U=W.createElement("link");t1(w),U8(w,"link",J),w._p=new Promise(function(G,K){w.onload=G,w.onerror=K}),w.addEventListener("load",function(){Q.loading|=1}),w.addEventListener("error",function(){Q.loading|=2}),Q.loading|=4,XW(U,Z,W)}U={type:"stylesheet",instance:U,count:1,state:Q},X.set(H,U)}}}function CM(J,Z){t7.X(J,Z);var Y=u5;if(Y&&J){var W=L5(Y).hoistableScripts,X=l5(J),H=W.get(X);H||(H=Y.querySelector(vZ(X)),H||(J=E1({src:J,async:!0},Z),(Z=X7.get(X))&&Yw(J,Z),H=Y.createElement("script"),t1(H),U8(H,"link",J),Y.head.appendChild(H)),H={type:"script",instance:H,count:1,state:null},W.set(X,H))}}function TM(J,Z){t7.M(J,Z);var Y=u5;if(Y&&J){var W=L5(Y).hoistableScripts,X=l5(J),H=W.get(X);H||(H=Y.querySelector(vZ(X)),H||(J=E1({src:J,async:!0,type:"module"},Z),(Z=X7.get(X))&&Yw(J,Z),H=Y.createElement("script"),t1(H),U8(H,"link",J),Y.head.appendChild(H)),H={type:"script",instance:H,count:1,state:null},W.set(X,H))}}function yK(J,Z,Y,W){var X=(X=T6.current)?xW(X):null;if(!X)throw Error(t(446));switch(J){case"meta":case"title":return null;case"style":return typeof Y.precedence==="string"&&typeof Y.href==="string"?(Z=h5(Y.href),Y=L5(X).hoistableStyles,W=Y.get(Z),W||(W={type:"style",instance:null,count:0,state:null},Y.set(Z,W)),W):{type:"void",instance:null,count:0,state:null};case"link":if(Y.rel==="stylesheet"&&typeof Y.href==="string"&&typeof Y.precedence==="string"){J=h5(Y.href);var H=L5(X).hoistableStyles,U=H.get(J);if(U||(X=X.ownerDocument||X,U={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},H.set(J,U),(H=X.querySelector(hZ(J)))&&!H._p&&(U.instance=H,U.state.loading=5),X7.has(J)||(Y={rel:"preload",as:"style",href:Y.href,crossOrigin:Y.crossOrigin,integrity:Y.integrity,media:Y.media,hrefLang:Y.hrefLang,referrerPolicy:Y.referrerPolicy},X7.set(J,Y),H||PM(X,J,Y,U.state))),Z&&W===null)throw Error(t(528,""));return U}if(Z&&W!==null)throw Error(t(529,""));return null;case"script":return Z=Y.async,Y=Y.src,typeof Y==="string"&&Z&&typeof Z!=="function"&&typeof Z!=="symbol"?(Z=l5(Y),Y=L5(X).hoistableScripts,W=Y.get(Z),W||(W={type:"script",instance:null,count:0,state:null},Y.set(Z,W)),W):{type:"void",instance:null,count:0,state:null};default:throw Error(t(444,J))}}function h5(J){return'href="'+e8(J)+'"'}function hZ(J){return'link[rel="stylesheet"]['+J+"]"}function AR(J){return E1({},J,{"data-precedence":J.precedence,precedence:null})}function PM(J,Z,Y,W){J.querySelector('link[rel="preload"][as="style"]['+Z+"]")?W.loading=1:(Z=J.createElement("link"),W.preload=Z,Z.addEventListener("load",function(){return W.loading|=1}),Z.addEventListener("error",function(){return W.loading|=2}),U8(Z,"link",Y),t1(Z),J.head.appendChild(Z))}function l5(J){return'[src="'+e8(J)+'"]'}function vZ(J){return"script[async]"+J}function gK(J,Z,Y){if(Z.count++,Z.instance===null)switch(Z.type){case"style":var W=J.querySelector('style[data-href~="'+e8(Y.href)+'"]');if(W)return Z.instance=W,t1(W),W;var X=E1({},Y,{"data-href":Y.href,"data-precedence":Y.precedence,href:null,precedence:null});return W=(J.ownerDocument||J).createElement("style"),t1(W),U8(W,"style",X),XW(W,Y.precedence,J),Z.instance=W;case"stylesheet":X=h5(Y.href);var H=J.querySelector(hZ(X));if(H)return Z.state.loading|=4,Z.instance=H,t1(H),H;W=AR(Y),(X=X7.get(X))&&Zw(W,X),H=(J.ownerDocument||J).createElement("link"),t1(H);var U=H;return U._p=new Promise(function(Q,w){U.onload=Q,U.onerror=w}),U8(H,"link",W),Z.state.loading|=4,XW(H,Y.precedence,J),Z.instance=H;case"script":if(H=l5(Y.src),X=J.querySelector(vZ(H)))return Z.instance=X,t1(X),X;if(W=Y,X=X7.get(H))W=E1({},Y),Yw(W,X);return J=J.ownerDocument||J,X=J.createElement("script"),t1(X),U8(X,"link",W),J.head.appendChild(X),Z.instance=X;case"void":return null;default:throw Error(t(443,Z.type))}else Z.type==="stylesheet"&&(Z.state.loading&4)===0&&(W=Z.instance,Z.state.loading|=4,XW(W,Y.precedence,J));return Z.instance}function XW(J,Z,Y){for(var W=Y.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),X=W.length?W[W.length-1]:null,H=X,U=0;U<W.length;U++){var Q=W[U];if(Q.dataset.precedence===Z)H=Q;else if(H!==X)break}H?H.parentNode.insertBefore(J,H.nextSibling):(Z=Y.nodeType===9?Y.head:Y,Z.insertBefore(J,Z.firstChild))}function Zw(J,Z){J.crossOrigin==null&&(J.crossOrigin=Z.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=Z.referrerPolicy),J.title==null&&(J.title=Z.title)}function Yw(J,Z){J.crossOrigin==null&&(J.crossOrigin=Z.crossOrigin),J.referrerPolicy==null&&(J.referrerPolicy=Z.referrerPolicy),J.integrity==null&&(J.integrity=Z.integrity)}function pK(J,Z,Y){if(HW===null){var W=new Map,X=HW=new Map;X.set(Y,W)}else X=HW,W=X.get(Y),W||(W=new Map,X.set(Y,W));if(W.has(J))return W;W.set(J,null),Y=Y.getElementsByTagName(J);for(X=0;X<Y.length;X++){var H=Y[X];if(!(H[PZ]||H[W8]||J==="link"&&H.getAttribute("rel")==="stylesheet")&&H.namespaceURI!=="http://www.w3.org/2000/svg"){var U=H.getAttribute(Z)||"";U=J+U;var Q=W.get(U);Q?Q.push(H):W.set(U,[H])}}return W}function dK(J,Z,Y){J=J.ownerDocument||J,J.head.insertBefore(Y,Z==="title"?J.querySelector("head > title"):null)}function SM(J,Z,Y){if(Y===1||Z.itemProp!=null)return!1;switch(J){case"meta":case"title":return!0;case"style":if(typeof Z.precedence!=="string"||typeof Z.href!=="string"||Z.href==="")break;return!0;case"link":if(typeof Z.rel!=="string"||typeof Z.href!=="string"||Z.href===""||Z.onLoad||Z.onError)break;switch(Z.rel){case"stylesheet":return J=Z.disabled,typeof Z.precedence==="string"&&J==null;default:return!0}case"script":if(Z.async&&typeof Z.async!=="function"&&typeof Z.async!=="symbol"&&!Z.onLoad&&!Z.onError&&Z.src&&typeof Z.src==="string")return!0}return!1}function ER(J){return J.type==="stylesheet"&&(J.state.loading&3)===0?!1:!0}function xM(J,Z,Y,W){if(Y.type==="stylesheet"&&(typeof W.media!=="string"||matchMedia(W.media).matches!==!1)&&(Y.state.loading&4)===0){if(Y.instance===null){var X=h5(W.href),H=Z.querySelector(hZ(X));if(H){Z=H._p,Z!==null&&typeof Z==="object"&&typeof Z.then==="function"&&(J.count++,J=fW.bind(J),Z.then(J,J)),Y.state.loading|=4,Y.instance=H,t1(H);return}H=Z.ownerDocument||Z,W=AR(W),(X=X7.get(X))&&Zw(W,X),H=H.createElement("link"),t1(H);var U=H;U._p=new Promise(function(Q,w){U.onload=Q,U.onerror=w}),U8(H,"link",W),Y.instance=H}J.stylesheets===null&&(J.stylesheets=new Map),J.stylesheets.set(Y,Z),(Z=Y.state.preload)&&(Y.state.loading&3)===0&&(J.count++,Y=fW.bind(J),Z.addEventListener("load",Y),Z.addEventListener("error",Y))}}function fM(J,Z){return J.stylesheets&&J.count===0&&UW(J,J.stylesheets),0<J.count||0<J.imgCount?function(Y){var W=setTimeout(function(){if(J.stylesheets&&UW(J,J.stylesheets),J.unsuspend){var H=J.unsuspend;J.unsuspend=null,H()}},60000+Z);0<J.imgBytes&&zU===0&&(zU=62500*zM());var X=setTimeout(function(){if(J.waitingForImages=!1,J.count===0&&(J.stylesheets&&UW(J,J.stylesheets),J.unsuspend)){var H=J.unsuspend;J.unsuspend=null,H()}},(J.imgBytes>zU?50:800)+Z);return J.unsuspend=Y,function(){J.unsuspend=null,clearTimeout(W),clearTimeout(X)}}:null}function fW(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)UW(this,this.stylesheets);else if(this.unsuspend){var J=this.unsuspend;this.unsuspend=null,J()}}}function UW(J,Z){J.stylesheets=null,J.unsuspend!==null&&(J.count++,jW=new Map,Z.forEach(jM,J),jW=null,fW.call(J))}function jM(J,Z){if(!(Z.state.loading&4)){var Y=jW.get(J);if(Y)var W=Y.get(null);else{Y=new Map,jW.set(J,Y);for(var X=J.querySelectorAll("link[data-precedence],style[data-precedence]"),H=0;H<X.length;H++){var U=X[H];if(U.nodeName==="LINK"||U.getAttribute("media")!=="not all")Y.set(U.dataset.precedence,U),W=U}W&&Y.set(null,W)}X=Z.instance,U=X.getAttribute("data-precedence"),H=Y.get(U)||W,H===W&&Y.set(null,X),Y.set(U,X),this.count++,W=fW.bind(this),X.addEventListener("load",W),X.addEventListener("error",W),H?H.parentNode.insertBefore(X,H.nextSibling):(J=J.nodeType===9?J.head:J,J.insertBefore(X,J.firstChild)),Z.state.loading|=4}}function bM(J,Z,Y,W,X,H,U,Q,w){this.tag=1,this.containerInfo=J,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pH(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pH(0),this.hiddenUpdates=pH(null),this.identifierPrefix=W,this.onUncaughtError=X,this.onCaughtError=H,this.onRecoverableError=U,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function IR(J,Z,Y,W,X,H,U,Q,w,G,K,z){return J=new bM(J,Z,Y,U,w,G,K,z,Q),Z=1,H===!0&&(Z|=24),H=b8(3,null,null,Z),J.current=H,H.stateNode=J,Z=CQ(),Z.refCount++,J.pooledCache=Z,Z.refCount++,H.memoizedState={element:W,isDehydrated:Y,cache:Z},SQ(H),J}function CR(J){if(!J)return O5;return J=O5,J}function TR(J,Z,Y,W,X,H){X=CR(X),W.context===null?W.context=X:W.pendingContext=X,W=S6(Z),W.payload={element:Y},H=H===void 0?null:H,H!==null&&(W.callback=H),Y=x6(J,W,Z),Y!==null&&(I8(Y,J,Z),WZ(Y,J,Z))}function mK(J,Z){if(J=J.memoizedState,J!==null&&J.dehydrated!==null){var Y=J.retryLane;J.retryLane=Y!==0&&Y<Z?Y:Z}}function Ww(J,Z){mK(J,Z),(J=J.alternate)&&mK(J,Z)}function PR(J){if(J.tag===13||J.tag===31){var Z=V9(J,67108864);Z!==null&&I8(Z,J,67108864),Ww(J,67108864)}}function uK(J){if(J.tag===13||J.tag===31){var Z=p8();Z=RQ(Z);var Y=V9(J,Z);Y!==null&&I8(Y,J,Z),Ww(J,Z)}}function hM(J,Z,Y,W){var X=p0.T;p0.T=null;var H=U1.p;try{U1.p=2,Xw(J,Z,Y,W)}finally{U1.p=H,p0.T=X}}function vM(J,Z,Y,W){var X=p0.T;p0.T=null;var H=U1.p;try{U1.p=8,Xw(J,Z,Y,W)}finally{U1.p=H,p0.T=X}}function Xw(J,Z,Y,W){if(bW){var X=GQ(W);if(X===null)KU(J,Z,W,hW,Y),lK(J,W);else if(gM(X,J,Z,Y,W))W.stopPropagation();else if(lK(J,W),Z&4&&-1<yM.indexOf(J)){for(;X!==null;){var H=g5(X);if(H!==null)switch(H.tag){case 3:if(H=H.stateNode,H.current.memoizedState.isDehydrated){var U=U9(H.pendingLanes);if(U!==0){var Q=H;Q.pendingLanes|=2;for(Q.entangledLanes|=2;U;){var w=1<<31-g8(U);Q.entanglements[1]|=w,U&=~w}E7(H),(H1&6)===0&&(AW=v8()+500,bZ(0,!1))}}break;case 31:case 13:Q=V9(H,2),Q!==null&&I8(Q,H,2),oW(),Ww(H,2)}if(H=GQ(W),H===null&&KU(J,Z,W,hW,Y),H===X)break;X=H}X!==null&&W.stopPropagation()}else KU(J,Z,W,null,Y)}}function GQ(J){return J=qQ(J),Hw(J)}function Hw(J){if(hW=null,J=$5(J),J!==null){var Z=EZ(J);if(Z===null)J=null;else{var Y=Z.tag;if(Y===13){if(J=aK(Z),J!==null)return J;J=null}else if(Y===31){if(J=rK(Z),J!==null)return J;J=null}else if(Y===3){if(Z.stateNode.current.memoizedState.isDehydrated)return Z.tag===3?Z.stateNode.containerInfo:null;J=null}else Z!==J&&(J=null)}}return hW=J,null}function SR(J){switch(J){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A4()){case ZD:return 2;case YD:return 8;case KW:case E4:return 32;case WD:return 268435456;default:return 32}default:return 32}}function lK(J,Z){switch(J){case"focusin":case"focusout":b6=null;break;case"dragenter":case"dragleave":h6=null;break;case"mouseover":case"mouseout":v6=null;break;case"pointerover":case"pointerout":_Z.delete(Z.pointerId);break;case"gotpointercapture":case"lostpointercapture":AZ.delete(Z.pointerId)}}function uJ(J,Z,Y,W,X,H){if(J===null||J.nativeEvent!==H)return J={blockedOn:Z,domEventName:Y,eventSystemFlags:W,nativeEvent:H,targetContainers:[X]},Z!==null&&(Z=g5(Z),Z!==null&&PR(Z)),J;return J.eventSystemFlags|=W,Z=J.targetContainers,X!==null&&Z.indexOf(X)===-1&&Z.push(X),J}function gM(J,Z,Y,W,X){switch(Z){case"focusin":return b6=uJ(b6,J,Z,Y,W,X),!0;case"dragenter":return h6=uJ(h6,J,Z,Y,W,X),!0;case"mouseover":return v6=uJ(v6,J,Z,Y,W,X),!0;case"pointerover":var H=X.pointerId;return _Z.set(H,uJ(_Z.get(H)||null,J,Z,Y,W,X)),!0;case"gotpointercapture":return H=X.pointerId,AZ.set(H,uJ(AZ.get(H)||null,J,Z,Y,W,X)),!0}return!1}function xR(J){var Z=$5(J.target);if(Z!==null){var Y=EZ(Z);if(Y!==null){if(Z=Y.tag,Z===13){if(Z=aK(Y),Z!==null){J.blockedOn=Z,T2(J.priority,function(){uK(Y)});return}}else if(Z===31){if(Z=rK(Y),Z!==null){J.blockedOn=Z,T2(J.priority,function(){uK(Y)});return}}else if(Z===3&&Y.stateNode.current.memoizedState.isDehydrated){J.blockedOn=Y.tag===3?Y.stateNode.containerInfo:null;return}}}J.blockedOn=null}function QW(J){if(J.blockedOn!==null)return!1;for(var Z=J.targetContainers;0<Z.length;){var Y=GQ(J.nativeEvent);if(Y===null){Y=J.nativeEvent;var W=new Y.constructor(Y.type,Y);EU=W,Y.target.dispatchEvent(W),EU=null}else return Z=g5(Y),Z!==null&&PR(Z),J.blockedOn=Y,!1;Z.shift()}return!0}function cK(J,Z,Y){QW(J)&&Y.delete(Z)}function pM(){$Q=!1,b6!==null&&QW(b6)&&(b6=null),h6!==null&&QW(h6)&&(h6=null),v6!==null&&QW(v6)&&(v6=null),_Z.forEach(cK),AZ.forEach(cK)}function lY(J,Z){J.blockedOn===Z&&(J.blockedOn=null,$Q||($Q=!0,Y5(Z5,pM)))}function iK(J){cY!==J&&(cY=J,Y5(Z5,function(){cY===J&&(cY=null);for(var Z=0;Z<J.length;Z+=3){var Y=J[Z],W=J[Z+1],X=J[Z+2];if(typeof W!=="function")if(Hw(W||Y)===null)continue;else break;var H=g5(Y);H!==null&&(J.splice(Z,3),Z-=3,mU(H,{pending:!0,data:X,method:Y.method,action:W},W,X))}}))}function v5(J){function Z(w){return lY(w,J)}b6!==null&&lY(b6,J),h6!==null&&lY(h6,J),v6!==null&&lY(v6,J),_Z.forEach(Z),AZ.forEach(Z);for(var Y=0;Y<V6.length;Y++){var W=V6[Y];W.blockedOn===J&&(W.blockedOn=null)}for(;0<V6.length&&(Y=V6[0],Y.blockedOn===null);)xR(Y),Y.blockedOn===null&&V6.shift();if(Y=(J.ownerDocument||J).$$reactFormReplay,Y!=null)for(W=0;W<Y.length;W+=3){var X=Y[W],H=Y[W+1],U=X[C8]||null;if(typeof H==="function")U||iK(Y);else if(U){var Q=null;if(H&&H.hasAttribute("formAction")){if(X=H,U=H[C8]||null)Q=U.formAction;else if(Hw(X)!==null)continue}else Q=U.action;typeof Q==="function"?Y[W+1]=Q:(Y.splice(W,3),W-=3),iK(Y)}}}function fR(){function J(H){H.canIntercept&&H.info==="react-transition"&&H.intercept({handler:function(){return new Promise(function(U){return X=U})},focusReset:"manual",scroll:"manual"})}function Z(){X!==null&&(X(),X=null),W||setTimeout(Y,20)}function Y(){if(!W&&!navigation.transition){var H=navigation.currentEntry;H&&H.url!=null&&navigation.navigate(H.url,{state:H.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var W=!1,X=null;return navigation.addEventListener("navigate",J),navigation.addEventListener("navigatesuccess",Z),navigation.addEventListener("navigateerror",Z),setTimeout(Y,100),function(){W=!0,navigation.removeEventListener("navigate",J),navigation.removeEventListener("navigatesuccess",Z),navigation.removeEventListener("navigateerror",Z),X!==null&&(X(),X=null)}}}function Uw(J){this._internalRoot=J}function tW(J){this._internalRoot=J}var nK,E1,M4,xY,lJ,w5,eK,RU,JD,d7,KQ,NU,OU,DQ,q6,FU,L4,E2,k4,cJ,p0,U1,$9,MU,G5=-1,_7,DZ,T6,wW,hH,I2,vH=!1,kU,zQ,gH,V4,_4,v8,A4,ZD,YD,KW,E4,WD,I4,C4,IZ=null,y8=null,g8,T4,P4,fY=256,jY=262144,bY=4194304,m6,W8,C8,y5,BU,j4,b4,P2,PZ,GD,$D,h4,S2,x2,g4,p4,d4,m4,EU=null,K5=null,B5=null,dH=!1,s7,IU=!1,Q9,A6=null,MQ=null,nY=null,k9,yW,SZ,u4,mH,uH,gJ,gW,h2,l4,c4,i4,lH,s4,n4,o4,a4,r4,v2,t4,e4,Jq,Yq,Wq,Xq,y2,Hq,Uq,Qq,wq,Gq,$q,Kq,Dq,zq,kQ,eJ=null,Rq,MD,g2,p2=!1,D5=!1,Fq,JZ=null,RZ=null,VD=!1,sJ,nJ,aY,d8,_q,z5=null,CU=null,ZZ=null,TU=!1,R5,cH,ID,CD,TD,PD,Aq,Eq,Iq,SD,xD,PU,zW,o8,N5=0,VQ=0,O5,s2,F5,q5=0,NW=null,OZ=0,r8,t8=0,y6=null,k7=1,B7="",X8=null,A1=null,J1=!1,P6=null,Z7=!1,SU,xU,_9=null,u7=null,Tq,Pq,Sq,l1,YZ=null,bU=0,P5=0,V5=null,r2,D9,d5,PQ,uW,FW,z9=null,_5=null,qZ=0,F9,mD,M6=!1,vU=!1,S5,qW,m8,Y7=null,v1,n7=0,c0=null,O1=null,m1=null,LW=!1,A5=!1,q9=!1,kW=0,MZ=0,E5=null,jq=0,LZ,Bz,cQ,Vz,uU,iQ,c1=!1,tH,p7=!1,u1=!1,UU=!1,LK,r1=null,C1=null,A8=!1,K7=null,aJ=8192,oq,aq,H1=0,M1=null,a0=null,e0=0,$1=0,f8=null,E6=!1,m5=!1,aQ=!1,r7=0,f1=0,d6=0,R9=0,rQ=0,h8=0,f5=0,GZ=null,E8=null,nU=!1,nW=0,tz=0,AW=1/0,EW=null,f6=null,s1=0,j6=null,j5=null,i7=0,oU=0,aU=null,ez=null,$Z=0,rU=null,CW=null,U5=null,tU=!1,TW=!1,GU=!1,C6=0,tJ,eU,JQ,rJ,kZ,wM,uY,$M,KM,YQ=null,WQ=null,DU=null,kR,NM,xK,OM,wQ=null,X7,vK,t7,u5,HW=null,zU=0,jW=null,VZ,bW=!0,hW=null,$Q=!1,b6=null,h6=null,v6=null,_Z,AZ,V6,yM,cY=null,sK,dM,Q5,jR=function(J,Z){if(!oK(J))throw Error(t(299));var Y=!1,W="",X=_z,H=Az,U=Ez;return Z!==null&&Z!==void 0&&(Z.unstable_strictMode===!0&&(Y=!0),Z.identifierPrefix!==void 0&&(W=Z.identifierPrefix),Z.onUncaughtError!==void 0&&(X=Z.onUncaughtError),Z.onCaughtError!==void 0&&(H=Z.onCaughtError),Z.onRecoverableError!==void 0&&(U=Z.onRecoverableError)),Z=IR(J,1,!1,null,null,Y,W,null,X,H,U,fR),J[y5]=Z.current,Jw(J),new Uw(Z)},bR=function(J,Z,Y){if(!oK(J))throw Error(t(299));var W=!1,X="",H=_z,U=Az,Q=Ez,w=null;return Y!==null&&Y!==void 0&&(Y.unstable_strictMode===!0&&(W=!0),Y.identifierPrefix!==void 0&&(X=Y.identifierPrefix),Y.onUncaughtError!==void 0&&(H=Y.onUncaughtError),Y.onCaughtError!==void 0&&(U=Y.onCaughtError),Y.onRecoverableError!==void 0&&(Q=Y.onRecoverableError),Y.formState!==void 0&&(w=Y.formState)),Z=IR(J,1,!0,Z,Y!=null?Y:null,W,X,w,H,U,Q,fR),Z.context=CR(null),Y=Z.current,W=p8(),W=RQ(W),X=S6(W),X.callback=null,x6(Y,X,W),Y=W,Z.current.lanes=Y,TZ(Z,Y),E7(Z),J[y5]=Z.current,Jw(J),new tW(Z)},hR="19.2.5";var vR=NY(()=>{H2();r9();nK=H$(_2(),1);E1=Object.assign,M4=Symbol.for("react.element"),xY=Symbol.for("react.transitional.element"),lJ=Symbol.for("react.portal"),w5=Symbol.for("react.fragment"),eK=Symbol.for("react.strict_mode"),RU=Symbol.for("react.profiler"),JD=Symbol.for("react.consumer"),d7=Symbol.for("react.context"),KQ=Symbol.for("react.forward_ref"),NU=Symbol.for("react.suspense"),OU=Symbol.for("react.suspense_list"),DQ=Symbol.for("react.memo"),q6=Symbol.for("react.lazy"),FU=Symbol.for("react.activity"),L4=Symbol.for("react.memo_cache_sentinel"),E2=Symbol.iterator;k4=Symbol.for("react.client.reference");cJ=Array.isArray,p0=PJ,U1=nK.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$9={pending:!1,data:null,method:null,action:null},MU=[];_7=A7(null),DZ=A7(null),T6=A7(null),wW=A7(null);kU=Object.prototype.hasOwnProperty,zQ=Y5,gH=SH,V4=jH,_4=fH,v8=L7,A4=xH,ZD=CH,YD=PH,KW=Z5,E4=TH,WD=IH,I4=void 0,C4=void 0;g8=Math.clz32?Math.clz32:S4,T4=Math.log,P4=Math.LN2;m6=Math.random().toString(36).slice(2),W8="__reactFiber$"+m6,C8="__reactProps$"+m6,y5="__reactContainer$"+m6,BU="__reactEvents$"+m6,j4="__reactListeners$"+m6,b4="__reactHandles$"+m6,P2="__reactResources$"+m6,PZ="__reactMarker$"+m6;GD=new Set,$D={};h4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),S2={},x2={};g4=/[\n"\\]/g;p4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));d4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;s7=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u");if(s7)try{Q9={},Object.defineProperty(Q9,"passive",{get:function(){IU=!0}}),window.addEventListener("test",Q9,Q9),window.removeEventListener("test",Q9,Q9)}catch(J){IU=!1}k9={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(J){return J.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yW=T8(k9),SZ=E1({},k9,{view:0,detail:0}),u4=T8(SZ),gW=E1({},SZ,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:LQ,button:0,buttons:0,relatedTarget:function(J){return J.relatedTarget===void 0?J.fromElement===J.srcElement?J.toElement:J.fromElement:J.relatedTarget},movementX:function(J){if("movementX"in J)return J.movementX;return J!==gJ&&(gJ&&J.type==="mousemove"?(mH=J.screenX-gJ.screenX,uH=J.screenY-gJ.screenY):uH=mH=0,gJ=J),mH},movementY:function(J){return"movementY"in J?J.movementY:uH}}),h2=T8(gW),l4=E1({},gW,{dataTransfer:0}),c4=T8(l4),i4=E1({},SZ,{relatedTarget:0}),lH=T8(i4),s4=E1({},k9,{animationName:0,elapsedTime:0,pseudoElement:0}),n4=T8(s4),o4=E1({},k9,{clipboardData:function(J){return"clipboardData"in J?J.clipboardData:window.clipboardData}}),a4=T8(o4),r4=E1({},k9,{data:0}),v2=T8(r4),t4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jq={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};Yq=E1({},SZ,{key:function(J){if(J.key){var Z=t4[J.key]||J.key;if(Z!=="Unidentified")return Z}return J.type==="keypress"?(J=oY(J),J===13?"Enter":String.fromCharCode(J)):J.type==="keydown"||J.type==="keyup"?e4[J.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:LQ,charCode:function(J){return J.type==="keypress"?oY(J):0},keyCode:function(J){return J.type==="keydown"||J.type==="keyup"?J.keyCode:0},which:function(J){return J.type==="keypress"?oY(J):J.type==="keydown"||J.type==="keyup"?J.keyCode:0}}),Wq=T8(Yq),Xq=E1({},gW,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y2=T8(Xq),Hq=E1({},SZ,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:LQ}),Uq=T8(Hq),Qq=E1({},k9,{propertyName:0,elapsedTime:0,pseudoElement:0}),wq=T8(Qq),Gq=E1({},gW,{deltaX:function(J){return"deltaX"in J?J.deltaX:("wheelDeltaX"in J)?-J.wheelDeltaX:0},deltaY:function(J){return"deltaY"in J?J.deltaY:("wheelDeltaY"in J)?-J.wheelDeltaY:("wheelDelta"in J)?-J.wheelDelta:0},deltaZ:0,deltaMode:0}),$q=T8(Gq),Kq=E1({},k9,{newState:0,oldState:0}),Dq=T8(Kq),zq=[9,13,27,32],kQ=s7&&"CompositionEvent"in window;s7&&"documentMode"in document&&(eJ=document.documentMode);Rq=s7&&"TextEvent"in window&&!eJ,MD=s7&&(!kQ||eJ&&8<eJ&&11>=eJ),g2=String.fromCharCode(32);Fq={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(s7){if(s7){if(nJ="oninput"in document,!nJ)aY=document.createElement("div"),aY.setAttribute("oninput","return;"),nJ=typeof aY.oninput==="function";sJ=nJ}else sJ=!1;VD=sJ&&(!document.documentMode||9<document.documentMode)}d8=typeof Object.is==="function"?Object.is:Vq;_q=s7&&"documentMode"in document&&11>=document.documentMode;R5={animationend:X9("Animation","AnimationEnd"),animationiteration:X9("Animation","AnimationIteration"),animationstart:X9("Animation","AnimationStart"),transitionrun:X9("Transition","TransitionRun"),transitionstart:X9("Transition","TransitionStart"),transitioncancel:X9("Transition","TransitionCancel"),transitionend:X9("Transition","TransitionEnd")},cH={},ID={};s7&&(ID=document.createElement("div").style,("AnimationEvent"in window)||(delete R5.animationend.animation,delete R5.animationiteration.animation,delete R5.animationstart.animation),("TransitionEvent"in window)||delete R5.transitionend.transition);CD=B9("animationend"),TD=B9("animationiteration"),PD=B9("animationstart"),Aq=B9("transitionrun"),Eq=B9("transitionstart"),Iq=B9("transitioncancel"),SD=B9("transitionend"),xD=new Map,PU="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");PU.push("scrollEnd");zW=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},o8=[];O5={};s2=new WeakMap;F5=[],r8=[];SU=Error(t(519));xU=A7(null);Tq=typeof AbortController<"u"?AbortController:function(){var J=[],Z=this.signal={aborted:!1,addEventListener:function(Y,W){J.push(W)}};this.abort=function(){Z.aborted=!0,J.forEach(function(Y){return Y()})}},Pq=Y5,Sq=Z5,l1={$$typeof:d7,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};r2=p0.S;p0.S=function(J,Z){tz=v8(),typeof Z==="object"&&Z!==null&&typeof Z.then==="function"&&xq(J,Z),r2!==null&&r2(J,Z)};D9=A7(null);d5=Error(t(460)),PQ=Error(t(474)),uW=Error(t(542)),FW={then:function(){}};F9=dD(!0),mD=dD(!1);S5=A7(null),qW=A7(0);m8=A7(null);v1=A7(0);LZ={readContext:H8,use:cW,useCallback:x1,useContext:x1,useEffect:x1,useImperativeHandle:x1,useLayoutEffect:x1,useInsertionEffect:x1,useMemo:x1,useReducer:x1,useRef:x1,useState:x1,useDebugValue:x1,useDeferredValue:x1,useTransition:x1,useSyncExternalStore:x1,useId:x1,useHostTransitionStatus:x1,useFormState:x1,useActionState:x1,useOptimistic:x1,useMemoCache:x1,useCacheRefresh:x1};LZ.useEffectEvent=x1;Bz={readContext:H8,use:cW,useCallback:function(J,Z){return O8().memoizedState=[J,Z===void 0?null:Z],J},useContext:H8,useEffect:QK,useImperativeHandle:function(J,Z,Y){Y=Y!==null&&Y!==void 0?Y.concat([J]):null,JW(4194308,4,Gz.bind(null,Z,J),Y)},useLayoutEffect:function(J,Z){return JW(4194308,4,J,Z)},useInsertionEffect:function(J,Z){JW(4,2,J,Z)},useMemo:function(J,Z){var Y=O8();Z=Z===void 0?null:Z;var W=J();if(q9){_6(!0);try{J()}finally{_6(!1)}}return Y.memoizedState=[W,Z],W},useReducer:function(J,Z,Y){var W=O8();if(Y!==void 0){var X=Y(Z);if(q9){_6(!0);try{Y(Z)}finally{_6(!1)}}}else X=Z;return W.memoizedState=W.baseState=X,J={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J,lastRenderedState:X},W.queue=J,J=J.dispatch=dq.bind(null,c0,J),[W.memoizedState,J]},useRef:function(J){var Z=O8();return J={current:J},Z.memoizedState=J},useState:function(J){J=pU(J);var Z=J.queue,Y=Mz.bind(null,c0,Z);return Z.dispatch=Y,[J.memoizedState,Y]},useDebugValue:dQ,useDeferredValue:function(J,Z){var Y=O8();return mQ(Y,J,Z)},useTransition:function(){var J=pU(!1);return J=Rz.bind(null,c0,J.queue,!0,!1),O8().memoizedState=J,[!1,J]},useSyncExternalStore:function(J,Z,Y){var W=c0,X=O8();if(J1){if(Y===void 0)throw Error(t(407));Y=Y()}else{if(Y=Z(),M1===null)throw Error(t(349));(e0&127)!==0||oD(W,Z,Y)}X.memoizedState=Y;var H={value:Y,getSnapshot:Z};return X.queue=H,QK(rD.bind(null,W,H,J),[J]),W.flags|=2048,x5(9,{destroy:void 0},aD.bind(null,W,H,Y,Z),null),Y},useId:function(){var J=O8(),Z=M1.identifierPrefix;if(J1){var Y=B7,W=k7;Y=(W&~(1<<32-g8(W)-1)).toString(32)+Y,Z="_"+Z+"R_"+Y,Y=kW++,0<Y&&(Z+="H"+Y.toString(32)),Z+="_"}else Y=jq++,Z="_"+Z+"r_"+Y.toString(32)+"_";return J.memoizedState=Z},useHostTransitionStatus:uQ,useFormState:XK,useActionState:XK,useOptimistic:function(J){var Z=O8();Z.memoizedState=Z.baseState=J;var Y={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return Z.queue=Y,Z=lQ.bind(null,c0,!0,Y),Y.dispatch=Z,[J,Z]},useMemoCache:yQ,useCacheRefresh:function(){return O8().memoizedState=pq.bind(null,c0)},useEffectEvent:function(J){var Z=O8(),Y={impl:J};return Z.memoizedState=Y,function(){if((H1&2)!==0)throw Error(t(440));return Y.impl.apply(void 0,arguments)}}},cQ={readContext:H8,use:cW,useCallback:Kz,useContext:H8,useEffect:pQ,useImperativeHandle:$z,useInsertionEffect:Qz,useLayoutEffect:wz,useMemo:Dz,useReducer:eY,useRef:Hz,useState:function(){return eY(o7)},useDebugValue:dQ,useDeferredValue:function(J,Z){var Y=y1();return zz(Y,O1.memoizedState,J,Z)},useTransition:function(){var J=eY(o7)[0],Z=y1().memoizedState;return[typeof J==="boolean"?J:fZ(J),Z]},useSyncExternalStore:nD,useId:Fz,useHostTransitionStatus:uQ,useFormState:HK,useActionState:HK,useOptimistic:function(J,Z){var Y=y1();return Jz(Y,O1,J,Z)},useMemoCache:yQ,useCacheRefresh:qz};cQ.useEffectEvent=Uz;Vz={readContext:H8,use:cW,useCallback:Kz,useContext:H8,useEffect:pQ,useImperativeHandle:$z,useInsertionEffect:Qz,useLayoutEffect:wz,useMemo:Dz,useReducer:aH,useRef:Hz,useState:function(){return aH(o7)},useDebugValue:dQ,useDeferredValue:function(J,Z){var Y=y1();return O1===null?mQ(Y,J,Z):zz(Y,O1.memoizedState,J,Z)},useTransition:function(){var J=aH(o7)[0],Z=y1().memoizedState;return[typeof J==="boolean"?J:fZ(J),Z]},useSyncExternalStore:nD,useId:Fz,useHostTransitionStatus:uQ,useFormState:UK,useActionState:UK,useOptimistic:function(J,Z){var Y=y1();if(O1!==null)return Jz(Y,O1,J,Z);return Y.baseState=J,[J,Y.queue.dispatch]},useMemoCache:yQ,useCacheRefresh:qz};Vz.useEffectEvent=Uz;uU={enqueueSetState:function(J,Z,Y){J=J._reactInternals;var W=p8(),X=S6(W);X.payload=Z,Y!==void 0&&Y!==null&&(X.callback=Y),Z=x6(J,X,W),Z!==null&&(I8(Z,J,W),WZ(Z,J,W))},enqueueReplaceState:function(J,Z,Y){J=J._reactInternals;var W=p8(),X=S6(W);X.tag=1,X.payload=Z,Y!==void 0&&Y!==null&&(X.callback=Y),Z=x6(J,X,W),Z!==null&&(I8(Z,J,W),WZ(Z,J,W))},enqueueForceUpdate:function(J,Z){J=J._reactInternals;var Y=p8(),W=S6(Y);W.tag=2,Z!==void 0&&Z!==null&&(W.callback=Z),Z=x6(J,W,Y),Z!==null&&(I8(Z,J,Y),WZ(Z,J,Y))}};iQ=Error(t(461));tH={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};LK=typeof WeakSet==="function"?WeakSet:Set;oq={getCacheForType:function(J){var Z=H8(l1),Y=Z.data.get(J);return Y===void 0&&(Y=J(),Z.data.set(J,Y)),Y},cacheSignal:function(){return H8(l1).controller.signal}},aq=typeof WeakMap==="function"?WeakMap:Map;for(rJ=0;rJ<PU.length;rJ++)tJ=PU[rJ],eU=tJ.toLowerCase(),JQ=tJ[0].toUpperCase()+tJ.slice(1),D7(eU,"on"+JQ);D7(CD,"onAnimationEnd");D7(TD,"onAnimationIteration");D7(PD,"onAnimationStart");D7("dblclick","onDoubleClick");D7("focusin","onFocus");D7("focusout","onBlur");D7(Aq,"onTransitionRun");D7(Eq,"onTransitionStart");D7(Iq,"onTransitionCancel");D7(SD,"onTransitionEnd");C5("onMouseEnter",["mouseout","mouseover"]);C5("onMouseLeave",["mouseout","mouseover"]);C5("onPointerEnter",["pointerout","pointerover"]);C5("onPointerLeave",["pointerout","pointerover"]);L9("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));L9("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));L9("onBeforeInput",["compositionend","keypress","textInput","paste"]);L9("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));L9("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));L9("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));kZ="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kZ));uY="_reactListening"+Math.random().toString(36).slice(2);$M=/\r\n?/g,KM=/\u0000|\uFFFD/g;kR=typeof setTimeout==="function"?setTimeout:void 0,NM=typeof clearTimeout==="function"?clearTimeout:void 0,xK=typeof Promise==="function"?Promise:void 0,OM=typeof queueMicrotask==="function"?queueMicrotask:typeof xK<"u"?function(J){return xK.resolve(null).then(J).catch(FM)}:kR;X7=new Map,vK=new Set;t7=U1.d;U1.d={f:kM,r:BM,D:VM,C:_M,L:AM,m:EM,X:CM,S:IM,M:TM};u5=typeof document>"u"?null:document;VZ={$$typeof:d7,Provider:null,Consumer:null,_currentValue:$9,_currentValue2:$9,_threadCount:0};_Z=new Map,AZ=new Map,V6=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");tW.prototype.render=Uw.prototype.render=function(J){var Z=this._internalRoot;if(Z===null)throw Error(t(409));var Y=Z.current,W=p8();TR(Y,W,J,Z,null,null)};tW.prototype.unmount=Uw.prototype.unmount=function(){var J=this._internalRoot;if(J!==null){this._internalRoot=null;var Z=J.containerInfo;TR(J.current,2,null,J,null,null),oW(),Z[y5]=null}};tW.prototype.unstable_scheduleHydration=function(J){if(J){var Z=wD();J={blockedOn:null,target:J,priority:Z};for(var Y=0;Y<V6.length&&Z!==0&&Z<V6[Y].priority;Y++);V6.splice(Y,0,J),Y===0&&xR(J)}};sK=zH;if(sK!=="19.2.5")throw Error(t(527,sK,"19.2.5"));U1.findDOMNode=function(J){var Z=J._reactInternals;if(Z===void 0){if(typeof J.render==="function")throw Error(t(188));throw J=Object.keys(J).join(","),Error(t(268,J))}return J=q4(Z),J=J!==null?tK(J):null,J=J===null?null:J.stateNode,J};dM={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:p0,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(Q5=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Q5.isDisabled&&Q5.supportsFiber)try{IZ=Q5.inject(dM),y8=Q5}catch(J){}}});var pR=U$((LE,gR)=>{vR();function yR(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yR)}catch(J){console.error(J)}}yR(),gR.exports=Qw});var z6=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(J){return this.listeners.add(J),this.onSubscribe(),()=>{this.listeners.delete(J),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};var OF=class extends z6{#J;#Z;#Y;constructor(){super();this.#Y=(J)=>{if(typeof window<"u"&&window.addEventListener){let Z=()=>J();return window.addEventListener("visibilitychange",Z,!1),()=>{window.removeEventListener("visibilitychange",Z)}}return}}onSubscribe(){if(!this.#Z)this.setEventListener(this.#Y)}onUnsubscribe(){if(!this.hasListeners())this.#Z?.(),this.#Z=void 0}setEventListener(J){this.#Y=J,this.#Z?.(),this.#Z=J((Z)=>{if(typeof Z==="boolean")this.setFocused(Z);else this.onFocus()})}setFocused(J){if(this.#J!==J)this.#J=J,this.onFocus()}onFocus(){let J=this.isFocused();this.listeners.forEach((Z)=>{Z(J)})}isFocused(){if(typeof this.#J==="boolean")return this.#J;return globalThis.document?.visibilityState!=="hidden"}},OY=new OF;var FF={setTimeout:(J,Z)=>setTimeout(J,Z),clearTimeout:(J)=>clearTimeout(J),setInterval:(J,Z)=>setInterval(J,Z),clearInterval:(J)=>clearInterval(J)},qF=class{#J=FF;#Z=!1;setTimeoutProvider(J){this.#J=J}setTimeout(J,Z){return this.#J.setTimeout(J,Z)}clearTimeout(J){this.#J.clearTimeout(J)}setInterval(J,Z){return this.#J.setInterval(J,Z)}clearInterval(J){this.#J.clearInterval(J)}},_J=new qF;function w$(J){setTimeout(J,0)}var K$=typeof window>"u"||"Deno"in globalThis;function B8(){}function D$(J,Z){return typeof J==="function"?J(Z):J}function z$(J){return typeof J==="number"&&J>=0&&J!==1/0}function R$(J,Z){return Math.max(J+(Z||0)-Date.now(),0)}function AJ(J,Z){return typeof J==="function"?J(Z):J}function N$(J,Z){return typeof J==="function"?J(Z):J}function HH(J,Z){let{type:Y="all",exact:W,fetchStatus:X,predicate:H,queryKey:U,stale:Q}=J;if(U){if(W){if(Z.queryHash!==EJ(U,Z.options))return!1}else if(!o9(Z.queryKey,U))return!1}if(Y!=="all"){let w=Z.isActive();if(Y==="active"&&!w)return!1;if(Y==="inactive"&&w)return!1}if(typeof Q==="boolean"&&Z.isStale()!==Q)return!1;if(X&&X!==Z.state.fetchStatus)return!1;if(H&&!H(Z))return!1;return!0}function UH(J,Z){let{exact:Y,status:W,predicate:X,mutationKey:H}=J;if(H){if(!Z.options.mutationKey)return!1;if(Y){if(n9(Z.options.mutationKey)!==n9(H))return!1}else if(!o9(Z.options.mutationKey,H))return!1}if(W&&Z.state.status!==W)return!1;if(X&&!X(Z))return!1;return!0}function EJ(J,Z){return(Z?.queryKeyHashFn||n9)(J)}function n9(J){return JSON.stringify(J,(Z,Y)=>XH(Y)?Object.keys(Y).sort().reduce((W,X)=>{return W[X]=Y[X],W},{}):Y)}function o9(J,Z){if(J===Z)return!0;if(typeof J!==typeof Z)return!1;if(J&&Z&&typeof J==="object"&&typeof Z==="object")return Object.keys(Z).every((Y)=>o9(J[Y],Z[Y]));return!1}var MF=Object.prototype.hasOwnProperty;function O$(J,Z,Y=0){if(J===Z)return J;if(Y>500)return Z;let W=G$(J)&&G$(Z);if(!W&&!(XH(J)&&XH(Z)))return Z;let H=(W?J:Object.keys(J)).length,U=W?Z:Object.keys(Z),Q=U.length,w=W?Array(Q):{},G=0;for(let K=0;K<Q;K++){let z=W?K:U[K],D=J[z],R=Z[z];if(D===R){if(w[z]=D,W?K<H:MF.call(J,z))G++;continue}if(D===null||R===null||typeof D!=="object"||typeof R!=="object"){w[z]=R;continue}let q=O$(D,R,Y+1);if(w[z]=q,q===D)G++}return H===Q&&G===H?J:w}function G$(J){return Array.isArray(J)&&J.length===Object.keys(J).length}function XH(J){if(!$$(J))return!1;let Z=J.constructor;if(Z===void 0)return!0;let Y=Z.prototype;if(!$$(Y))return!1;if(!Y.hasOwnProperty("isPrototypeOf"))return!1;if(Object.getPrototypeOf(J)!==Object.prototype)return!1;return!0}function $$(J){return Object.prototype.toString.call(J)==="[object Object]"}function F$(J){return new Promise((Z)=>{_J.setTimeout(Z,J)})}function q$(J,Z,Y){if(typeof Y.structuralSharing==="function")return Y.structuralSharing(J,Z);else if(Y.structuralSharing!==!1)return O$(J,Z);return Z}function M$(J,Z,Y=0){let W=[...J,Z];return Y&&W.length>Y?W.slice(1):W}function L$(J,Z,Y=0){let W=[Z,...J];return Y&&W.length>Y?W.slice(0,-1):W}var IJ=Symbol();function FY(J,Z){if(!J.queryFn&&Z?.initialPromise)return()=>Z.initialPromise;if(!J.queryFn||J.queryFn===IJ)return()=>Promise.reject(Error(`Missing queryFn: '${J.queryHash}'`));return J.queryFn}function k$(J,Z,Y){let W=!1,X;return Object.defineProperty(J,"signal",{enumerable:!0,get:()=>{if(X??=Z(),W)return X;if(W=!0,X.aborted)Y();else X.addEventListener("abort",Y,{once:!0});return X}}),J}var qY=(()=>{let J=()=>K$;return{isServer(){return J()},setIsServer(Z){J=Z}}})();function B$(){let J,Z,Y=new Promise((X,H)=>{J=X,Z=H});Y.status="pending",Y.catch(()=>{});function W(X){Object.assign(Y,X),delete Y.resolve,delete Y.reject}return Y.resolve=(X)=>{W({status:"fulfilled",value:X}),J(X)},Y.reject=(X)=>{W({status:"rejected",reason:X}),Z(X)},Y}var LF=w$;function kF(){let J=[],Z=0,Y=(Q)=>{Q()},W=(Q)=>{Q()},X=LF,H=(Q)=>{if(Z)J.push(Q);else X(()=>{Y(Q)})},U=()=>{let Q=J;if(J=[],Q.length)X(()=>{W(()=>{Q.forEach((w)=>{Y(w)})})})};return{batch:(Q)=>{let w;Z++;try{w=Q()}finally{if(Z--,!Z)U()}return w},batchCalls:(Q)=>{return(...w)=>{H(()=>{Q(...w)})}},schedule:H,setNotifyFunction:(Q)=>{Y=Q},setBatchNotifyFunction:(Q)=>{W=Q},setScheduler:(Q)=>{X=Q}}}var d1=kF();var BF=class extends z6{#J=!0;#Z;#Y;constructor(){super();this.#Y=(J)=>{if(typeof window<"u"&&window.addEventListener){let Z=()=>J(!0),Y=()=>J(!1);return window.addEventListener("online",Z,!1),window.addEventListener("offline",Y,!1),()=>{window.removeEventListener("online",Z),window.removeEventListener("offline",Y)}}return}}onSubscribe(){if(!this.#Z)this.setEventListener(this.#Y)}onUnsubscribe(){if(!this.hasListeners())this.#Z?.(),this.#Z=void 0}setEventListener(J){this.#Y=J,this.#Z?.(),this.#Z=J(this.setOnline.bind(this))}setOnline(J){if(this.#J!==J)this.#J=J,this.listeners.forEach((Y)=>{Y(J)})}isOnline(){return this.#J}},a9=new BF;function VF(J){return Math.min(1000*2**J,30000)}function QH(J){return(J??"online")==="online"?a9.isOnline():!0}var MY=class extends Error{constructor(J){super("CancelledError");this.revert=J?.revert,this.silent=J?.silent}};function LY(J){let Z=!1,Y=0,W,X=B$(),H=()=>X.status!=="pending",U=(L)=>{if(!H()){let O=new MY(L);D(O),J.onCancel?.(O)}},Q=()=>{Z=!0},w=()=>{Z=!1},G=()=>OY.isFocused()&&(J.networkMode==="always"||a9.isOnline())&&J.canRun(),K=()=>QH(J.networkMode)&&J.canRun(),z=(L)=>{if(!H())W?.(),X.resolve(L)},D=(L)=>{if(!H())W?.(),X.reject(L)},R=()=>{return new Promise((L)=>{W=(O)=>{if(H()||G())L(O)},J.onPause?.()}).then(()=>{if(W=void 0,!H())J.onContinue?.()})},q=()=>{if(H())return;let L,O=Y===0?J.initialPromise:void 0;try{L=O??J.fn()}catch($){L=Promise.reject($)}Promise.resolve(L).then(z).catch(($)=>{if(H())return;let F=J.retry??(qY.isServer()?0:3),N=J.retryDelay??VF,M=typeof N==="function"?N(Y,$):N,I=F===!0||typeof F==="number"&&Y<F||typeof F==="function"&&F(Y,$);if(Z||!I){D($);return}Y++,J.onFail?.(Y,$),F$(M).then(()=>{return G()?void 0:R()}).then(()=>{if(Z)D($);else q()})})};return{promise:X,status:()=>X.status,cancel:U,continue:()=>{return W?.(),X},cancelRetry:Q,continueRetry:w,canStart:K,start:()=>{if(K())q();else R().then(q);return X}}}var kY=class{#J;destroy(){this.clearGcTimeout()}scheduleGc(){if(this.clearGcTimeout(),z$(this.gcTime))this.#J=_J.setTimeout(()=>{this.optionalRemove()},this.gcTime)}updateGcTime(J){this.gcTime=Math.max(this.gcTime||0,J??(qY.isServer()?1/0:300000))}clearGcTimeout(){if(this.#J!==void 0)_J.clearTimeout(this.#J),this.#J=void 0}};function _$(J){return{onFetch:(Z,Y)=>{let W=Z.options,X=Z.fetchOptions?.meta?.fetchMore?.direction,H=Z.state.data?.pages||[],U=Z.state.data?.pageParams||[],Q={pages:[],pageParams:[]},w=0,G=async()=>{let K=!1,z=(q)=>{k$(q,()=>Z.signal,()=>K=!0)},D=FY(Z.options,Z.fetchOptions),R=async(q,L,O)=>{if(K)return Promise.reject(Z.signal.reason);if(L==null&&q.pages.length)return Promise.resolve(q);let F=(()=>{let E={client:Z.client,queryKey:Z.queryKey,pageParam:L,direction:O?"backward":"forward",meta:Z.options.meta};return z(E),E})(),N=await D(F),{maxPages:M}=Z.options,I=O?L$:M$;return{pages:I(q.pages,N,M),pageParams:I(q.pageParams,L,M)}};if(X&&H.length){let q=X==="backward",L=q?_F:V$,O={pages:H,pageParams:U},$=L(W,O);Q=await R(O,$,q)}else{let q=J??H.length;do{let L=w===0?U[0]??W.initialPageParam:V$(W,Q);if(w>0&&L==null)break;Q=await R(Q,L),w++}while(w<q)}return Q};if(Z.options.persister)Z.fetchFn=()=>{return Z.options.persister?.(G,{client:Z.client,queryKey:Z.queryKey,meta:Z.options.meta,signal:Z.signal},Y)};else Z.fetchFn=G}}}function V$(J,{pages:Z,pageParams:Y}){let W=Z.length-1;return Z.length>0?J.getNextPageParam(Z[W],Z,Y[W],Y):void 0}function _F(J,{pages:Z,pageParams:Y}){return Z.length>0?J.getPreviousPageParam?.(Z[0],Z,Y[0],Y):void 0}var I$=class extends kY{#J;#Z;#Y;#X;#H;#W;#w;#U;constructor(J){super();this.#U=!1,this.#w=J.defaultOptions,this.setOptions(J.options),this.observers=[],this.#H=J.client,this.#X=this.#H.getQueryCache(),this.queryKey=J.queryKey,this.queryHash=J.queryHash,this.#Z=E$(this.options),this.state=J.state??this.#Z,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#J}get promise(){return this.#W?.promise}setOptions(J){if(this.options={...this.#w,...J},J?._type)this.#J=J._type;if(this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let Z=E$(this.options);if(Z.data!==void 0)this.setState(A$(Z.data,Z.dataUpdatedAt)),this.#Z=Z}}optionalRemove(){if(!this.observers.length&&this.state.fetchStatus==="idle")this.#X.remove(this)}setData(J,Z){let Y=q$(this.state.data,J,this.options);return this.#Q({data:Y,type:"success",dataUpdatedAt:Z?.updatedAt,manual:Z?.manual}),Y}setState(J){this.#Q({type:"setState",state:J})}cancel(J){let Z=this.#W?.promise;return this.#W?.cancel(J),Z?Z.then(B8).catch(B8):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#Z}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some((J)=>N$(J.options.enabled,this)!==!1)}isDisabled(){if(this.getObserversCount()>0)return!this.isActive();return this.options.queryFn===IJ||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){if(this.getObserversCount()>0)return this.observers.some((J)=>AJ(J.options.staleTime,this)==="static");return!1}isStale(){if(this.getObserversCount()>0)return this.observers.some((J)=>J.getCurrentResult().isStale);return this.state.data===void 0||this.state.isInvalidated}isStaleByTime(J=0){if(this.state.data===void 0)return!0;if(J==="static")return!1;if(this.state.isInvalidated)return!0;return!R$(this.state.dataUpdatedAt,J)}onFocus(){this.observers.find((Z)=>Z.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#W?.continue()}onOnline(){this.observers.find((Z)=>Z.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#W?.continue()}addObserver(J){if(!this.observers.includes(J))this.observers.push(J),this.clearGcTimeout(),this.#X.notify({type:"observerAdded",query:this,observer:J})}removeObserver(J){if(this.observers.includes(J)){if(this.observers=this.observers.filter((Z)=>Z!==J),!this.observers.length){if(this.#W)if(this.#U||this.#G())this.#W.cancel({revert:!0});else this.#W.cancelRetry();this.scheduleGc()}this.#X.notify({type:"observerRemoved",query:this,observer:J})}}getObserversCount(){return this.observers.length}#G(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){if(!this.state.isInvalidated)this.#Q({type:"invalidate"})}async fetch(J,Z){if(this.state.fetchStatus!=="idle"&&this.#W?.status()!=="rejected"){if(this.state.data!==void 0&&Z?.cancelRefetch)this.cancel({silent:!0});else if(this.#W)return this.#W.continueRetry(),this.#W.promise}if(J)this.setOptions(J);if(!this.options.queryFn){let w=this.observers.find((G)=>G.options.queryFn);if(w)this.setOptions(w.options)}let Y=new AbortController,W=(w)=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{return this.#U=!0,Y.signal}})},X=()=>{let w=FY(this.options,Z),K=(()=>{let z={client:this.#H,queryKey:this.queryKey,meta:this.meta};return W(z),z})();if(this.#U=!1,this.options.persister)return this.options.persister(w,K,this);return w(K)},U=(()=>{let w={fetchOptions:Z,options:this.options,queryKey:this.queryKey,client:this.#H,state:this.state,fetchFn:X};return W(w),w})();if((this.#J==="infinite"?_$(this.options.pages):this.options.behavior)?.onFetch(U,this),this.#Y=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==U.fetchOptions?.meta)this.#Q({type:"fetch",meta:U.fetchOptions?.meta});this.#W=LY({initialPromise:Z?.initialPromise,fn:U.fetchFn,onCancel:(w)=>{if(w instanceof MY&&w.revert)this.setState({...this.#Y,fetchStatus:"idle"});Y.abort()},onFail:(w,G)=>{this.#Q({type:"failed",failureCount:w,error:G})},onPause:()=>{this.#Q({type:"pause"})},onContinue:()=>{this.#Q({type:"continue"})},retry:U.options.retry,retryDelay:U.options.retryDelay,networkMode:U.options.networkMode,canRun:()=>!0});try{let w=await this.#W.start();if(w===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(w),this.#X.config.onSuccess?.(w,this),this.#X.config.onSettled?.(w,this.state.error,this),w}catch(w){if(w instanceof MY){if(w.silent)return this.#W.promise;else if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw this.#Q({type:"error",error:w}),this.#X.config.onError?.(w,this),this.#X.config.onSettled?.(this.state.data,w,this),w}finally{this.scheduleGc()}}#Q(J){let Z=(Y)=>{switch(J.type){case"failed":return{...Y,fetchFailureCount:J.failureCount,fetchFailureReason:J.error};case"pause":return{...Y,fetchStatus:"paused"};case"continue":return{...Y,fetchStatus:"fetching"};case"fetch":return{...Y,...AF(Y.data,this.options),fetchMeta:J.meta??null};case"success":let W={...Y,...A$(J.data,J.dataUpdatedAt),dataUpdateCount:Y.dataUpdateCount+1,...!J.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#Y=J.manual?W:void 0,W;case"error":let X=J.error;return{...Y,error:X,errorUpdateCount:Y.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:Y.fetchFailureCount+1,fetchFailureReason:X,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...Y,isInvalidated:!0};case"setState":return{...Y,...J.state}}};this.state=Z(this.state),d1.batch(()=>{this.observers.forEach((Y)=>{Y.onQueryUpdate()}),this.#X.notify({query:this,type:"updated",action:J})})}};function AF(J,Z){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:QH(Z.networkMode)?"fetching":"paused",...J===void 0&&{error:null,status:"pending"}}}function A$(J,Z){return{data:J,dataUpdatedAt:Z??Date.now(),error:null,isInvalidated:!1,status:"success"}}function E$(J){let Z=typeof J.initialData==="function"?J.initialData():J.initialData,Y=Z!==void 0,W=Y?typeof J.initialDataUpdatedAt==="function"?J.initialDataUpdatedAt():J.initialDataUpdatedAt:0;return{data:Z,dataUpdateCount:0,dataUpdatedAt:Y?W??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:Y?"success":"pending",fetchStatus:"idle"}}var C$=class extends kY{#J;#Z;#Y;#X;constructor(J){super();this.#J=J.client,this.mutationId=J.mutationId,this.#Y=J.mutationCache,this.#Z=[],this.state=J.state||EF(),this.setOptions(J.options),this.scheduleGc()}setOptions(J){this.options=J,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(J){if(!this.#Z.includes(J))this.#Z.push(J),this.clearGcTimeout(),this.#Y.notify({type:"observerAdded",mutation:this,observer:J})}removeObserver(J){this.#Z=this.#Z.filter((Z)=>Z!==J),this.scheduleGc(),this.#Y.notify({type:"observerRemoved",mutation:this,observer:J})}optionalRemove(){if(!this.#Z.length)if(this.state.status==="pending")this.scheduleGc();else this.#Y.remove(this)}continue(){return this.#X?.continue()??this.execute(this.state.variables)}async execute(J){let Z=()=>{this.#H({type:"continue"})},Y={client:this.#J,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#X=LY({fn:()=>{if(!this.options.mutationFn)return Promise.reject(Error("No mutationFn found"));return this.options.mutationFn(J,Y)},onFail:(H,U)=>{this.#H({type:"failed",failureCount:H,error:U})},onPause:()=>{this.#H({type:"pause"})},onContinue:Z,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#Y.canRun(this)});let W=this.state.status==="pending",X=!this.#X.canStart();try{if(W)Z();else{if(this.#H({type:"pending",variables:J,isPaused:X}),this.#Y.config.onMutate)await this.#Y.config.onMutate(J,this,Y);let U=await this.options.onMutate?.(J,Y);if(U!==this.state.context)this.#H({type:"pending",context:U,variables:J,isPaused:X})}let H=await this.#X.start();return await this.#Y.config.onSuccess?.(H,J,this.state.context,this,Y),await this.options.onSuccess?.(H,J,this.state.context,Y),await this.#Y.config.onSettled?.(H,null,this.state.variables,this.state.context,this,Y),await this.options.onSettled?.(H,null,J,this.state.context,Y),this.#H({type:"success",data:H}),H}catch(H){try{await this.#Y.config.onError?.(H,J,this.state.context,this,Y)}catch(U){Promise.reject(U)}try{await this.options.onError?.(H,J,this.state.context,Y)}catch(U){Promise.reject(U)}try{await this.#Y.config.onSettled?.(void 0,H,this.state.variables,this.state.context,this,Y)}catch(U){Promise.reject(U)}try{await this.options.onSettled?.(void 0,H,J,this.state.context,Y)}catch(U){Promise.reject(U)}throw this.#H({type:"error",error:H}),H}finally{this.#Y.runNext(this)}}#H(J){let Z=(Y)=>{switch(J.type){case"failed":return{...Y,failureCount:J.failureCount,failureReason:J.error};case"pause":return{...Y,isPaused:!0};case"continue":return{...Y,isPaused:!1};case"pending":return{...Y,context:J.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:J.isPaused,status:"pending",variables:J.variables,submittedAt:Date.now()};case"success":return{...Y,data:J.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...Y,data:void 0,error:J.error,failureCount:Y.failureCount+1,failureReason:J.error,isPaused:!1,status:"error"}}};this.state=Z(this.state),d1.batch(()=>{this.#Z.forEach((Y)=>{Y.onMutationUpdate(J)}),this.#Y.notify({mutation:this,type:"updated",action:J})})}};function EF(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var T$=class extends z6{constructor(J={}){super();this.config=J,this.#J=new Set,this.#Z=new Map,this.#Y=0}#J;#Z;#Y;build(J,Z,Y){let W=new C$({client:J,mutationCache:this,mutationId:++this.#Y,options:J.defaultMutationOptions(Z),state:Y});return this.add(W),W}add(J){this.#J.add(J);let Z=BY(J);if(typeof Z==="string"){let Y=this.#Z.get(Z);if(Y)Y.push(J);else this.#Z.set(Z,[J])}this.notify({type:"added",mutation:J})}remove(J){if(this.#J.delete(J)){let Z=BY(J);if(typeof Z==="string"){let Y=this.#Z.get(Z);if(Y){if(Y.length>1){let W=Y.indexOf(J);if(W!==-1)Y.splice(W,1)}else if(Y[0]===J)this.#Z.delete(Z)}}}this.notify({type:"removed",mutation:J})}canRun(J){let Z=BY(J);if(typeof Z==="string"){let W=this.#Z.get(Z)?.find((X)=>X.state.status==="pending");return!W||W===J}else return!0}runNext(J){let Z=BY(J);if(typeof Z==="string")return this.#Z.get(Z)?.find((W)=>W!==J&&W.state.isPaused)?.continue()??Promise.resolve();else return Promise.resolve()}clear(){d1.batch(()=>{this.#J.forEach((J)=>{this.notify({type:"removed",mutation:J})}),this.#J.clear(),this.#Z.clear()})}getAll(){return Array.from(this.#J)}find(J){let Z={exact:!0,...J};return this.getAll().find((Y)=>UH(Z,Y))}findAll(J={}){return this.getAll().filter((Z)=>UH(J,Z))}notify(J){d1.batch(()=>{this.listeners.forEach((Z)=>{Z(J)})})}resumePausedMutations(){let J=this.getAll().filter((Z)=>Z.state.isPaused);return d1.batch(()=>Promise.all(J.map((Z)=>Z.continue().catch(B8))))}};function BY(J){return J.options.scope?.id}var P$=class extends z6{constructor(J={}){super();this.config=J,this.#J=new Map}#J;build(J,Z,Y){let W=Z.queryKey,X=Z.queryHash??EJ(W,Z),H=this.get(X);if(!H)H=new I$({client:J,queryKey:W,queryHash:X,options:J.defaultQueryOptions(Z),state:Y,defaultOptions:J.getQueryDefaults(W)}),this.add(H);return H}add(J){if(!this.#J.has(J.queryHash))this.#J.set(J.queryHash,J),this.notify({type:"added",query:J})}remove(J){let Z=this.#J.get(J.queryHash);if(Z){if(J.destroy(),Z===J)this.#J.delete(J.queryHash);this.notify({type:"removed",query:J})}}clear(){d1.batch(()=>{this.getAll().forEach((J)=>{this.remove(J)})})}get(J){return this.#J.get(J)}getAll(){return[...this.#J.values()]}find(J){let Z={exact:!0,...J};return this.getAll().find((Y)=>HH(Z,Y))}findAll(J={}){let Z=this.getAll();return Object.keys(J).length>0?Z.filter((Y)=>HH(J,Y)):Z}notify(J){d1.batch(()=>{this.listeners.forEach((Z)=>{Z(J)})})}onFocus(){d1.batch(()=>{this.getAll().forEach((J)=>{J.onFocus()})})}onOnline(){d1.batch(()=>{this.getAll().forEach((J)=>{J.onOnline()})})}};var wH=class{#J;#Z;#Y;#X;#H;#W;#w;#U;constructor(J={}){this.#J=J.queryCache||new P$,this.#Z=J.mutationCache||new T$,this.#Y=J.defaultOptions||{},this.#X=new Map,this.#H=new Map,this.#W=0}mount(){if(this.#W++,this.#W!==1)return;this.#w=OY.subscribe(async(J)=>{if(J)await this.resumePausedMutations(),this.#J.onFocus()}),this.#U=a9.subscribe(async(J)=>{if(J)await this.resumePausedMutations(),this.#J.onOnline()})}unmount(){if(this.#W--,this.#W!==0)return;this.#w?.(),this.#w=void 0,this.#U?.(),this.#U=void 0}isFetching(J){return this.#J.findAll({...J,fetchStatus:"fetching"}).length}isMutating(J){return this.#Z.findAll({...J,status:"pending"}).length}getQueryData(J){let Z=this.defaultQueryOptions({queryKey:J});return this.#J.get(Z.queryHash)?.state.data}ensureQueryData(J){let Z=this.defaultQueryOptions(J),Y=this.#J.build(this,Z),W=Y.state.data;if(W===void 0)return this.fetchQuery(J);if(J.revalidateIfStale&&Y.isStaleByTime(AJ(Z.staleTime,Y)))this.prefetchQuery(Z);return Promise.resolve(W)}getQueriesData(J){return this.#J.findAll(J).map(({queryKey:Z,state:Y})=>{let W=Y.data;return[Z,W]})}setQueryData(J,Z,Y){let W=this.defaultQueryOptions({queryKey:J}),H=this.#J.get(W.queryHash)?.state.data,U=D$(Z,H);if(U===void 0)return;return this.#J.build(this,W).setData(U,{...Y,manual:!0})}setQueriesData(J,Z,Y){return d1.batch(()=>this.#J.findAll(J).map(({queryKey:W})=>[W,this.setQueryData(W,Z,Y)]))}getQueryState(J){let Z=this.defaultQueryOptions({queryKey:J});return this.#J.get(Z.queryHash)?.state}removeQueries(J){let Z=this.#J;d1.batch(()=>{Z.findAll(J).forEach((Y)=>{Z.remove(Y)})})}resetQueries(J,Z){let Y=this.#J;return d1.batch(()=>{return Y.findAll(J).forEach((W)=>{W.reset()}),this.refetchQueries({type:"active",...J},Z)})}cancelQueries(J,Z={}){let Y={revert:!0,...Z},W=d1.batch(()=>this.#J.findAll(J).map((X)=>X.cancel(Y)));return Promise.all(W).then(B8).catch(B8)}invalidateQueries(J,Z={}){return d1.batch(()=>{if(this.#J.findAll(J).forEach((Y)=>{Y.invalidate()}),J?.refetchType==="none")return Promise.resolve();return this.refetchQueries({...J,type:J?.refetchType??J?.type??"active"},Z)})}refetchQueries(J,Z={}){let Y={...Z,cancelRefetch:Z.cancelRefetch??!0},W=d1.batch(()=>this.#J.findAll(J).filter((X)=>!X.isDisabled()&&!X.isStatic()).map((X)=>{let H=X.fetch(void 0,Y);if(!Y.throwOnError)H=H.catch(B8);return X.state.fetchStatus==="paused"?Promise.resolve():H}));return Promise.all(W).then(B8)}fetchQuery(J){let Z=this.defaultQueryOptions(J);if(Z.retry===void 0)Z.retry=!1;let Y=this.#J.build(this,Z);return Y.isStaleByTime(AJ(Z.staleTime,Y))?Y.fetch(Z):Promise.resolve(Y.state.data)}prefetchQuery(J){return this.fetchQuery(J).then(B8).catch(B8)}fetchInfiniteQuery(J){return J._type="infinite",this.fetchQuery(J)}prefetchInfiniteQuery(J){return this.fetchInfiniteQuery(J).then(B8).catch(B8)}ensureInfiniteQueryData(J){return J._type="infinite",this.ensureQueryData(J)}resumePausedMutations(){if(a9.isOnline())return this.#Z.resumePausedMutations();return Promise.resolve()}getQueryCache(){return this.#J}getMutationCache(){return this.#Z}getDefaultOptions(){return this.#Y}setDefaultOptions(J){this.#Y=J}setQueryDefaults(J,Z){this.#X.set(n9(J),{queryKey:J,defaultOptions:Z})}getQueryDefaults(J){let Z=[...this.#X.values()],Y={};return Z.forEach((W)=>{if(o9(J,W.queryKey))Object.assign(Y,W.defaultOptions)}),Y}setMutationDefaults(J,Z){this.#H.set(n9(J),{mutationKey:J,defaultOptions:Z})}getMutationDefaults(J){let Z=[...this.#H.values()],Y={};return Z.forEach((W)=>{if(o9(J,W.mutationKey))Object.assign(Y,W.defaultOptions)}),Y}defaultQueryOptions(J){if(J._defaulted)return J;let Z={...this.#Y.queries,...this.getQueryDefaults(J.queryKey),...J,_defaulted:!0};if(!Z.queryHash)Z.queryHash=EJ(Z.queryKey,Z);if(Z.refetchOnReconnect===void 0)Z.refetchOnReconnect=Z.networkMode!=="always";if(Z.throwOnError===void 0)Z.throwOnError=!!Z.suspense;if(!Z.networkMode&&Z.persister)Z.networkMode="offlineFirst";if(Z.queryFn===IJ)Z.enabled=!1;return Z}defaultMutationOptions(J){if(J?._defaulted)return J;return{...this.#Y.mutations,...J?.mutationKey&&this.getMutationDefaults(J.mutationKey),...J,_defaulted:!0}}clear(){this.#J.clear(),this.#Z.clear()}};r9();var SF=Symbol.for("react.transitional.element"),xF=Symbol.for("react.fragment");function b$(J,Z,Y){var W=null;if(Y!==void 0&&(W=""+Y),Z.key!==void 0&&(W=""+Z.key),"key"in Z){Y={};for(var X in Z)X!=="key"&&(Y[X]=Z[X])}else Y=Z;return Z=Y.ref,{$$typeof:SF,type:J,key:W,ref:Z!==void 0?Z:null,props:Y}}var R8=xF,S=b$,$0=b$;var h$=DH(void 0);var RH=({client:J,children:Z})=>{return R6(()=>{return J.mount(),()=>{J.unmount()}},[J]),S(h$.Provider,{value:J,children:Z})};class t9 extends Error{status;retryAfterMs;constructor(J,Z,Y){super(J);this.status=Z,this.retryAfterMs=Y,this.name="SpaceActionError"}}var fF=new Set([400,401,403,404,422]),jF=3,bF=1000,v$=30000;function hF(J,Z){if(Z instanceof t9&&fF.has(Z.status))return!1;return J<jF}function vF(J,Z){let Y=Math.min(v$,bF*2**J);return(Z instanceof t9&&Z.retryAfterMs!=null?Math.min(v$,Math.max(0,Z.retryAfterMs)):0)+Math.random()*Y}var q7=new wH({defaultOptions:{queries:{retry:hF,retryDelay:vF,staleTime:30000,refetchOnWindowFocus:!1}}}),y$="__hatchAuditSettle";function yF(J=q7){if(typeof window>"u")return;let Z=window;if(typeof Z[y$]==="function")return;Z[y$]=()=>J.isFetching()+J.isMutating()}yF();var gF="hatch:space:query-invalidated",pF="hatch:space-action-auth-refresh-required",dF="hatch:space-action-auth-refresh-result",mF="hatch:space-unavailable",a$="space_unavailable",uF=["notary_missing","notary_expired","notary_invalid","credential_stale"],lF=1e4,r$=1000,cF=30000,iF=30000;function sF(J){return typeof J==="object"&&J!=null&&J.type===gF}function nF(J){return uF.includes(J)}function oF(J){if(typeof J!=="object"||J==null)return!1;let Z=J.error;if(typeof Z!=="object"||Z==null)return!1;return nF(Z.code)}function g$(J){if(typeof J!=="object"||J==null)return!1;let Z=J.error;if(typeof Z!=="object"||Z==null)return!1;return Z.code===a$}function p$(J,Z){if(typeof window>"u"||window.parent===window)return!1;return window.parent.postMessage({type:pF,reason:J,requestId:Z},"*"),!0}function aF(J){if(typeof window>"u"||window.parent===window)return!1;return window.parent.postMessage({type:mF,reason:a$,actionCallId:J},"*"),!0}function rF(J,Z){return typeof J==="object"&&J!=null&&J.type===dF&&J.requestId===Z}function tF(){return`refresh-${e$()}`}function eF(J){let Z=tF(),Y=typeof window>"u"?null:window;if(Y==null||Y.parent===Y||typeof Y.addEventListener!=="function"||typeof Y.removeEventListener!=="function")return p$(J,Z),Promise.reject(Error("space action auth refresh is unavailable"));return new Promise((W,X)=>{let H=Y.setTimeout(()=>{U(),X(Error("space action auth refresh timed out"))},lF),U=()=>{Y.clearTimeout(H),Y.removeEventListener("message",Q)},Q=(w)=>{if(w.source!==Y.parent)return;if(!rF(w.data,Z))return;if(U(),w.data.ok===!0){W(w.data);return}let G=typeof w.data.error==="string"&&w.data.error.length>0?w.data.error:"space action auth refresh failed";X(Error(G))};if(Y.addEventListener("message",Q),!p$(J,Z))U(),X(Error("space action auth refresh is unavailable"))})}function J4(J,Z){if(typeof Z!=="string"||Z.length===0)return null;let Y=globalThis.location?.href??"https://hatch.invalid/",W=null;try{W=new URL(Z,Y).searchParams.get("viewer_assertion")}catch{return null}if(W==null||W.length===0)return null;try{let X=new URL(J,Y);return X.searchParams.set("viewer_assertion",W),X.toString()}catch{return null}}function Z4(J){let Z=J.payload?.queryKeys;if(!Array.isArray(Z))return null;return Z.filter((Y)=>Array.isArray(Y))}var xJ=new Map,NH=!1,fJ=[];function _Y(){return Date.now()}function OH(J){let Z=J-iF;while(!0){let Y=fJ[0];if(Y==null||Y.tsMs>=Z)break;fJ.shift()}}function Y4(J,Z){if(Object.is(J,Z))return!0;try{return JSON.stringify(J)===JSON.stringify(Z)}catch{return!1}}function d$(J,Z){if(Z.length>J.length)return!1;return Z.every((Y,W)=>Y4(Y,J[W]))}function W4(J,Z){return d$(J,Z)||d$(Z,J)}function X4(J){let[Z]=J;if(Z==null)return"all";if(Array.isArray(Z))return Z;if(typeof Z==="object"&&Z!=null&&"queryKey"in Z&&Array.isArray(Z.queryKey))return Z.queryKey;return"all"}function H4(J){let Z=_Y();OH(Z),fJ.push({target:J,tsMs:Z})}function m$(J,Z){let Y=_Y();return OH(Y),fJ.some((W)=>W.tsMs>=Z&&(W.target==="all"||W4(J,W.target)))}function u$(J){let Z=_Y();return OH(Z),fJ.some((Y)=>Y.tsMs>=J)}function U4(J){let Z=_Y();if(xJ.set(J,Z),typeof window>"u")return;window.setTimeout(()=>{if(xJ.get(J)===Z)xJ.delete(J)},cF)}function l$(J){if(NH)return;NH=!0,q7.cancelQueries(),aF(J)}function VY(){if(!NH)return;throw new t9("Space is no longer available",404)}function Q4(J){let Z=J.payload?.originActionCallId;return typeof Z==="string"&&Z.length>0?Z:null}function w4(J,Z,Y){let W=Y==null?void 0:xJ.get(Y);if(W==null){c$(J,Z);return}if(m$(Z,W))return;window.setTimeout(()=>{if(m$(Z,W))return;c$(J,Z)},r$)}function G4(J,Z){let Y=Z==null?void 0:xJ.get(Z);if(Y==null){i$(J);return}if(u$(Y))return;window.setTimeout(()=>{if(u$(Y))return;i$(J)},r$)}var FH=q7.invalidateQueries.bind(q7);q7.invalidateQueries=(...J)=>{let Z=X4(J);if(Z!=null)H4(Z);return FH(...J)};function c$(J,Z){if(J===q7)return FH({queryKey:Z});return J.invalidateQueries({queryKey:Z})}function i$(J){if(J===q7)return FH();return J.invalidateQueries()}var s$=!1;function $4(J=q7){if(s$||typeof window>"u")return;s$=!0,window.addEventListener("message",(Z)=>{if(window.parent!==window){if(Z.source!==window.parent)return}else if(Z.origin!==window.location.origin)return;if(!sF(Z.data))return;let Y=Q4(Z.data),W=Z4(Z.data);if(W==null)return;if(W.length===0){G4(J,Y);return}for(let X of W)w4(J,X,Y)})}$4();var K4="./actions";function D4(J){let Z=globalThis.location?.href;if(typeof Z!=="string"||Z.length===0)return J;let Y=new URL(Z);return Y.hash="",Y.search="",new URL(J,Y).toString()}function t$(J={}){let Z=J.endpoint??D4(K4),Y=J.fetch??globalThis.fetch,W=(H,U,Q,w)=>Y(Q,{method:"POST",headers:{"content-type":"application/json","x-request-id":w},body:JSON.stringify({action:H,args:U??{},actionCallId:w})}),X=async(H,U)=>{let Q=await H.json();if(Q&&typeof Q==="object"&&"error"in Q&&Q.error)throw Error(`action ${U} error: ${String(Q.error)}`);return Q.data};return new Proxy({},{get(H,U){if(typeof U!=="string")return;if(U==="then"||U==="catch"||U==="finally")return;return async(Q)=>{VY();let w=e$();U4(w);let G=await W(U,Q,Z,w);if(!G.ok){let K=await o$(G);if(G.status===404&&g$(K))l$(w),VY();if(oF(K)){let D=await eF(K.error.code),R=J4(Z,D.iframeSrc);if(R==null)throw Error(`action ${U} auth refresh did not return a fresh viewer_assertion`);VY();let q=await W(U,Q,R,w);if(!q.ok){let L=await o$(q);if(q.status===404&&g$(L))l$(w),VY();let O=typeof L==="string"?L:JSON.stringify(L??null);throw new t9(`action ${U} failed after auth refresh: ${q.status} ${O}`,q.status,n$(q))}return X(q,U)}let z=typeof K==="string"?K:JSON.stringify(K??null);throw new t9(`action ${U} failed: ${G.status} ${z}`,G.status,n$(G))}return X(G,U)}}})}function n$(J){let Z=J.headers.get("retry-after");if(Z==null)return;let Y=Number(Z);if(Number.isFinite(Y))return Math.max(0,Y*1000);let W=Date.parse(Z);if(Number.isFinite(W))return Math.max(0,W-Date.now());return}async function o$(J){let Z=await J.text();if(Z.length===0)return"";try{return JSON.parse(Z)}catch{return Z}}function e$(){if(typeof globalThis.crypto?.randomUUID==="function")return globalThis.crypto.randomUUID();return`space-action-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}r9();var HF=H$(pR(),1);r9();var QN="180";var wN=0,fw=1,GN=2;var jw=1,qX=2,I7=3,HJ=0,c8=1,C7=2,a6=0,cZ=1,bw=2,hw=3,vw=4,$N=5,UJ=100,KN=101,DN=102,zN=103,RN=104,NN=200,ON=201,FN=202,qN=203,MN=204,LN=205,kN=206,BN=207,VN=208,_N=209,AN=210,EN=211,IN=212,CN=213,TN=214,MX=0,LX=1,kX=2,iZ=3,BX=4,VX=5,_X=6,AX=7,PN=0,SN=1,xN=2,U6=0,fN=1,jN=2,bN=3,EX=4,hN=5,vN=6,yN=7;var QJ=301,T9=302,IX=303,CX=304,sZ=306,gN=1000,pN=1001,dN=1002,wJ=1003,mN=1004;var nZ=1005;var P9=1006,TX=1007;var GJ=1008;var r6=1009,uN=1010,lN=1011,oZ=1012,yw=1013,$J=1014,t6=1015,aZ=1016,gw=1017,pw=1018,KJ=1020,cN=35902,iN=35899,sN=1021,nN=1022,T7=1023,PX=1026,rZ=1027,oN=1028,dw=1029,aN=1030,mw=1031;var uw=1033,SX=33776,xX=33777,fX=33778,jX=33779,lw=35840,cw=35841,iw=35842,sw=35843,nw=36196,ow=37492,aw=37496,rw=37808,tw=37809,ew=37810,JG=37811,ZG=37812,YG=37813,WG=37814,XG=37815,HG=37816,UG=37817,QG=37818,wG=37819,GG=37820,$G=37821,KG=36492,DG=36494,zG=36495,RG=36283,NG=36284,OG=36285,FG=36286;var rN=3201;var tN=0,eN=1,S9="",bX="srgb",tZ="srgb-linear",qG="linear",B1="srgb";var JO=512,ZO=513,YO=514,MG=515,WO=516,XO=517,HO=518,UO=519;var LG="300 es",kG=2000;class e6{addEventListener(J,Z){if(this._listeners===void 0)this._listeners={};let Y=this._listeners;if(Y[J]===void 0)Y[J]=[];if(Y[J].indexOf(Z)===-1)Y[J].push(Z)}hasEventListener(J,Z){let Y=this._listeners;if(Y===void 0)return!1;return Y[J]!==void 0&&Y[J].indexOf(Z)!==-1}removeEventListener(J,Z){let Y=this._listeners;if(Y===void 0)return;let W=Y[J];if(W!==void 0){let X=W.indexOf(Z);if(X!==-1)W.splice(X,1)}}dispatchEvent(J){let Z=this._listeners;if(Z===void 0)return;let Y=Z[J.type];if(Y!==void 0){J.target=this;let W=Y.slice(0);for(let X=0,H=W.length;X<H;X++)W[X].call(this,J);J.target=null}}}var Q8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ww=Math.PI/180,FX=180/Math.PI;function eZ(){let J=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,Y=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(Q8[J&255]+Q8[J>>8&255]+Q8[J>>16&255]+Q8[J>>24&255]+"-"+Q8[Z&255]+Q8[Z>>8&255]+"-"+Q8[Z>>16&15|64]+Q8[Z>>24&255]+"-"+Q8[Y&63|128]+Q8[Y>>8&255]+"-"+Q8[Y>>16&255]+Q8[Y>>24&255]+Q8[W&255]+Q8[W>>8&255]+Q8[W>>16&255]+Q8[W>>24&255]).toLowerCase()}function Z1(J,Z,Y){return Math.max(Z,Math.min(Y,J))}function lM(J,Z){return(J%Z+Z)%Z}function Gw(J,Z,Y){return(1-Y)*J+Y*Z}function yZ(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function P8(J,Z){switch(Z.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class r0{constructor(J=0,Z=0){r0.prototype.isVector2=!0,this.x=J,this.y=Z}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Z){return this.x=J,this.y=Z,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Z=this.x,Y=this.y,W=J.elements;return this.x=W[0]*Z+W[3]*Y+W[6],this.y=W[1]*Z+W[4]*Y+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Z){return this.x=Z1(this.x,J.x,Z.x),this.y=Z1(this.y,J.y,Z.y),this}clampScalar(J,Z){return this.x=Z1(this.x,J,Z),this.y=Z1(this.y,J,Z),this}clampLength(J,Z){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(Z1(Y,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Y=this.dot(J)/Z;return Math.acos(Z1(Y,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Y=this.y-J.y;return Z*Z+Y*Y}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this}lerpVectors(J,Z,Y){return this.x=J.x+(Z.x-J.x)*Y,this.y=J.y+(Z.y-J.y)*Y,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this}rotateAround(J,Z){let Y=Math.cos(Z),W=Math.sin(Z),X=this.x-J.x,H=this.y-J.y;return this.x=X*Y-H*W+J.x,this.y=X*W+H*Y+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class J9{constructor(J=0,Z=0,Y=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Z,this._z=Y,this._w=W}static slerpFlat(J,Z,Y,W,X,H,U){let Q=Y[W+0],w=Y[W+1],G=Y[W+2],K=Y[W+3],z=X[H+0],D=X[H+1],R=X[H+2],q=X[H+3];if(U===0){J[Z+0]=Q,J[Z+1]=w,J[Z+2]=G,J[Z+3]=K;return}if(U===1){J[Z+0]=z,J[Z+1]=D,J[Z+2]=R,J[Z+3]=q;return}if(K!==q||Q!==z||w!==D||G!==R){let L=1-U,O=Q*z+w*D+G*R+K*q,$=O>=0?1:-1,F=1-O*O;if(F>Number.EPSILON){let M=Math.sqrt(F),I=Math.atan2(M,O*$);L=Math.sin(L*I)/M,U=Math.sin(U*I)/M}let N=U*$;if(Q=Q*L+z*N,w=w*L+D*N,G=G*L+R*N,K=K*L+q*N,L===1-U){let M=1/Math.sqrt(Q*Q+w*w+G*G+K*K);Q*=M,w*=M,G*=M,K*=M}}J[Z]=Q,J[Z+1]=w,J[Z+2]=G,J[Z+3]=K}static multiplyQuaternionsFlat(J,Z,Y,W,X,H){let U=Y[W],Q=Y[W+1],w=Y[W+2],G=Y[W+3],K=X[H],z=X[H+1],D=X[H+2],R=X[H+3];return J[Z]=U*R+G*K+Q*D-w*z,J[Z+1]=Q*R+G*z+w*K-U*D,J[Z+2]=w*R+G*D+U*z-Q*K,J[Z+3]=G*R-U*K-Q*z-w*D,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Z,Y,W){return this._x=J,this._y=Z,this._z=Y,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Z=!0){let{_x:Y,_y:W,_z:X,_order:H}=J,U=Math.cos,Q=Math.sin,w=U(Y/2),G=U(W/2),K=U(X/2),z=Q(Y/2),D=Q(W/2),R=Q(X/2);switch(H){case"XYZ":this._x=z*G*K+w*D*R,this._y=w*D*K-z*G*R,this._z=w*G*R+z*D*K,this._w=w*G*K-z*D*R;break;case"YXZ":this._x=z*G*K+w*D*R,this._y=w*D*K-z*G*R,this._z=w*G*R-z*D*K,this._w=w*G*K+z*D*R;break;case"ZXY":this._x=z*G*K-w*D*R,this._y=w*D*K+z*G*R,this._z=w*G*R+z*D*K,this._w=w*G*K-z*D*R;break;case"ZYX":this._x=z*G*K-w*D*R,this._y=w*D*K+z*G*R,this._z=w*G*R-z*D*K,this._w=w*G*K+z*D*R;break;case"YZX":this._x=z*G*K+w*D*R,this._y=w*D*K+z*G*R,this._z=w*G*R-z*D*K,this._w=w*G*K-z*D*R;break;case"XZY":this._x=z*G*K-w*D*R,this._y=w*D*K-z*G*R,this._z=w*G*R+z*D*K,this._w=w*G*K+z*D*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Z===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Z){let Y=Z/2,W=Math.sin(Y);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos(Y),this._onChangeCallback(),this}setFromRotationMatrix(J){let Z=J.elements,Y=Z[0],W=Z[4],X=Z[8],H=Z[1],U=Z[5],Q=Z[9],w=Z[2],G=Z[6],K=Z[10],z=Y+U+K;if(z>0){let D=0.5/Math.sqrt(z+1);this._w=0.25/D,this._x=(G-Q)*D,this._y=(X-w)*D,this._z=(H-W)*D}else if(Y>U&&Y>K){let D=2*Math.sqrt(1+Y-U-K);this._w=(G-Q)/D,this._x=0.25*D,this._y=(W+H)/D,this._z=(X+w)/D}else if(U>K){let D=2*Math.sqrt(1+U-Y-K);this._w=(X-w)/D,this._x=(W+H)/D,this._y=0.25*D,this._z=(Q+G)/D}else{let D=2*Math.sqrt(1+K-Y-U);this._w=(H-W)/D,this._x=(X+w)/D,this._y=(Q+G)/D,this._z=0.25*D}return this._onChangeCallback(),this}setFromUnitVectors(J,Z){let Y=J.dot(Z)+1;if(Y<0.00000001)if(Y=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Y;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Y;else this._x=J.y*Z.z-J.z*Z.y,this._y=J.z*Z.x-J.x*Z.z,this._z=J.x*Z.y-J.y*Z.x,this._w=Y;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(Z1(this.dot(J),-1,1)))}rotateTowards(J,Z){let Y=this.angleTo(J);if(Y===0)return this;let W=Math.min(1,Z/Y);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Z){let{_x:Y,_y:W,_z:X,_w:H}=J,U=Z._x,Q=Z._y,w=Z._z,G=Z._w;return this._x=Y*G+H*U+W*w-X*Q,this._y=W*G+H*Q+X*U-Y*w,this._z=X*G+H*w+Y*Q-W*U,this._w=H*G-Y*U-W*Q-X*w,this._onChangeCallback(),this}slerp(J,Z){if(Z===0)return this;if(Z===1)return this.copy(J);let Y=this._x,W=this._y,X=this._z,H=this._w,U=H*J._w+Y*J._x+W*J._y+X*J._z;if(U<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,U=-U;else this.copy(J);if(U>=1)return this._w=H,this._x=Y,this._y=W,this._z=X,this;let Q=1-U*U;if(Q<=Number.EPSILON){let D=1-Z;return this._w=D*H+Z*this._w,this._x=D*Y+Z*this._x,this._y=D*W+Z*this._y,this._z=D*X+Z*this._z,this.normalize(),this}let w=Math.sqrt(Q),G=Math.atan2(w,U),K=Math.sin((1-Z)*G)/w,z=Math.sin(Z*G)/w;return this._w=H*K+this._w*z,this._x=Y*K+this._x*z,this._y=W*K+this._y*z,this._z=X*K+this._z*z,this._onChangeCallback(),this}slerpQuaternions(J,Z,Y){return this.copy(J).slerp(Z,Y)}random(){let J=2*Math.PI*Math.random(),Z=2*Math.PI*Math.random(),Y=Math.random(),W=Math.sqrt(1-Y),X=Math.sqrt(Y);return this.set(W*Math.sin(J),W*Math.cos(J),X*Math.sin(Z),X*Math.cos(Z))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Z=0){return this._x=J[Z],this._y=J[Z+1],this._z=J[Z+2],this._w=J[Z+3],this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._w,J}fromBufferAttribute(J,Z){return this._x=J.getX(Z),this._y=J.getY(Z),this._z=J.getZ(Z),this._w=J.getW(Z),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{constructor(J=0,Z=0,Y=0){v.prototype.isVector3=!0,this.x=J,this.y=Z,this.z=Y}set(J,Z,Y){if(Y===void 0)Y=this.z;return this.x=J,this.y=Z,this.z=Y,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Z){return this.x=J.x*Z.x,this.y=J.y*Z.y,this.z=J.z*Z.z,this}applyEuler(J){return this.applyQuaternion(dR.setFromEuler(J))}applyAxisAngle(J,Z){return this.applyQuaternion(dR.setFromAxisAngle(J,Z))}applyMatrix3(J){let Z=this.x,Y=this.y,W=this.z,X=J.elements;return this.x=X[0]*Z+X[3]*Y+X[6]*W,this.y=X[1]*Z+X[4]*Y+X[7]*W,this.z=X[2]*Z+X[5]*Y+X[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Z=this.x,Y=this.y,W=this.z,X=J.elements,H=1/(X[3]*Z+X[7]*Y+X[11]*W+X[15]);return this.x=(X[0]*Z+X[4]*Y+X[8]*W+X[12])*H,this.y=(X[1]*Z+X[5]*Y+X[9]*W+X[13])*H,this.z=(X[2]*Z+X[6]*Y+X[10]*W+X[14])*H,this}applyQuaternion(J){let Z=this.x,Y=this.y,W=this.z,X=J.x,H=J.y,U=J.z,Q=J.w,w=2*(H*W-U*Y),G=2*(U*Z-X*W),K=2*(X*Y-H*Z);return this.x=Z+Q*w+H*K-U*G,this.y=Y+Q*G+U*w-X*K,this.z=W+Q*K+X*G-H*w,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Z=this.x,Y=this.y,W=this.z,X=J.elements;return this.x=X[0]*Z+X[4]*Y+X[8]*W,this.y=X[1]*Z+X[5]*Y+X[9]*W,this.z=X[2]*Z+X[6]*Y+X[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Z){return this.x=Z1(this.x,J.x,Z.x),this.y=Z1(this.y,J.y,Z.y),this.z=Z1(this.z,J.z,Z.z),this}clampScalar(J,Z){return this.x=Z1(this.x,J,Z),this.y=Z1(this.y,J,Z),this.z=Z1(this.z,J,Z),this}clampLength(J,Z){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(Z1(Y,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this}lerpVectors(J,Z,Y){return this.x=J.x+(Z.x-J.x)*Y,this.y=J.y+(Z.y-J.y)*Y,this.z=J.z+(Z.z-J.z)*Y,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Z){let{x:Y,y:W,z:X}=J,H=Z.x,U=Z.y,Q=Z.z;return this.x=W*Q-X*U,this.y=X*H-Y*Q,this.z=Y*U-W*H,this}projectOnVector(J){let Z=J.lengthSq();if(Z===0)return this.set(0,0,0);let Y=J.dot(this)/Z;return this.copy(J).multiplyScalar(Y)}projectOnPlane(J){return $w.copy(this).projectOnVector(J),this.sub($w)}reflect(J){return this.sub($w.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let Y=this.dot(J)/Z;return Math.acos(Z1(Y,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,Y=this.y-J.y,W=this.z-J.z;return Z*Z+Y*Y+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Z,Y){let W=Math.sin(Z)*J;return this.x=W*Math.sin(Y),this.y=Math.cos(Z)*J,this.z=W*Math.cos(Y),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Z,Y){return this.x=J*Math.sin(Z),this.y=Y,this.z=J*Math.cos(Z),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this}setFromMatrixScale(J){let Z=this.setFromMatrixColumn(J,0).length(),Y=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Z,this.y=Y,this.z=W,this}setFromMatrixColumn(J,Z){return this.fromArray(J.elements,Z*4)}setFromMatrix3Column(J,Z){return this.fromArray(J.elements,Z*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Z=Math.random()*2-1,Y=Math.sqrt(1-Z*Z);return this.x=Y*Math.cos(J),this.y=Z,this.z=Y*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var $w=new v,dR=new J9;class i0{constructor(J,Z,Y,W,X,H,U,Q,w){if(i0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Z,Y,W,X,H,U,Q,w)}set(J,Z,Y,W,X,H,U,Q,w){let G=this.elements;return G[0]=J,G[1]=W,G[2]=U,G[3]=Z,G[4]=X,G[5]=Q,G[6]=Y,G[7]=H,G[8]=w,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Z=this.elements,Y=J.elements;return Z[0]=Y[0],Z[1]=Y[1],Z[2]=Y[2],Z[3]=Y[3],Z[4]=Y[4],Z[5]=Y[5],Z[6]=Y[6],Z[7]=Y[7],Z[8]=Y[8],this}extractBasis(J,Z,Y){return J.setFromMatrix3Column(this,0),Z.setFromMatrix3Column(this,1),Y.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Z=J.elements;return this.set(Z[0],Z[4],Z[8],Z[1],Z[5],Z[9],Z[2],Z[6],Z[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Y=J.elements,W=Z.elements,X=this.elements,H=Y[0],U=Y[3],Q=Y[6],w=Y[1],G=Y[4],K=Y[7],z=Y[2],D=Y[5],R=Y[8],q=W[0],L=W[3],O=W[6],$=W[1],F=W[4],N=W[7],M=W[2],I=W[5],E=W[8];return X[0]=H*q+U*$+Q*M,X[3]=H*L+U*F+Q*I,X[6]=H*O+U*N+Q*E,X[1]=w*q+G*$+K*M,X[4]=w*L+G*F+K*I,X[7]=w*O+G*N+K*E,X[2]=z*q+D*$+R*M,X[5]=z*L+D*F+R*I,X[8]=z*O+D*N+R*E,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[3]*=J,Z[6]*=J,Z[1]*=J,Z[4]*=J,Z[7]*=J,Z[2]*=J,Z[5]*=J,Z[8]*=J,this}determinant(){let J=this.elements,Z=J[0],Y=J[1],W=J[2],X=J[3],H=J[4],U=J[5],Q=J[6],w=J[7],G=J[8];return Z*H*G-Z*U*w-Y*X*G+Y*U*Q+W*X*w-W*H*Q}invert(){let J=this.elements,Z=J[0],Y=J[1],W=J[2],X=J[3],H=J[4],U=J[5],Q=J[6],w=J[7],G=J[8],K=G*H-U*w,z=U*Q-G*X,D=w*X-H*Q,R=Z*K+Y*z+W*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let q=1/R;return J[0]=K*q,J[1]=(W*w-G*Y)*q,J[2]=(U*Y-W*H)*q,J[3]=z*q,J[4]=(G*Z-W*Q)*q,J[5]=(W*X-U*Z)*q,J[6]=D*q,J[7]=(Y*Q-w*Z)*q,J[8]=(H*Z-Y*X)*q,this}transpose(){let J,Z=this.elements;return J=Z[1],Z[1]=Z[3],Z[3]=J,J=Z[2],Z[2]=Z[6],Z[6]=J,J=Z[5],Z[5]=Z[7],Z[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Z=this.elements;return J[0]=Z[0],J[1]=Z[3],J[2]=Z[6],J[3]=Z[1],J[4]=Z[4],J[5]=Z[7],J[6]=Z[2],J[7]=Z[5],J[8]=Z[8],this}setUvTransform(J,Z,Y,W,X,H,U){let Q=Math.cos(X),w=Math.sin(X);return this.set(Y*Q,Y*w,-Y*(Q*H+w*U)+H+J,-W*w,W*Q,-W*(-w*H+Q*U)+U+Z,0,0,1),this}scale(J,Z){return this.premultiply(Kw.makeScale(J,Z)),this}rotate(J){return this.premultiply(Kw.makeRotation(-J)),this}translate(J,Z){return this.premultiply(Kw.makeTranslation(J,Z)),this}makeTranslation(J,Z){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Z,0,0,1);return this}makeRotation(J){let Z=Math.cos(J),Y=Math.sin(J);return this.set(Z,-Y,0,Y,Z,0,0,0,1),this}makeScale(J,Z){return this.set(J,0,0,0,Z,0,0,0,1),this}equals(J){let Z=this.elements,Y=J.elements;for(let W=0;W<9;W++)if(Z[W]!==Y[W])return!1;return!0}fromArray(J,Z=0){for(let Y=0;Y<9;Y++)this.elements[Y]=J[Y+Z];return this}toArray(J=[],Z=0){let Y=this.elements;return J[Z]=Y[0],J[Z+1]=Y[1],J[Z+2]=Y[2],J[Z+3]=Y[3],J[Z+4]=Y[4],J[Z+5]=Y[5],J[Z+6]=Y[6],J[Z+7]=Y[7],J[Z+8]=Y[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var Kw=new i0;function BG(J){for(let Z=J.length-1;Z>=0;--Z)if(J[Z]>=65535)return!0;return!1}function lZ(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function QO(){let J=lZ("canvas");return J.style.display="block",J}var mR={};function XJ(J){if(J in mR)return;mR[J]=!0,console.warn(J)}function wO(J,Z,Y){return new Promise(function(W,X){function H(){switch(J.clientWaitSync(Z,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:X();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Y);break;default:W()}}setTimeout(H,Y)})}var uR=new i0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),lR=new i0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function cM(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(X,H,U){if(this.enabled===!1||H===U||!H||!U)return X;if(this.spaces[H].transfer==="srgb")X.r=H6(X.r),X.g=H6(X.g),X.b=H6(X.b);if(this.spaces[H].primaries!==this.spaces[U].primaries)X.applyMatrix3(this.spaces[H].toXYZ),X.applyMatrix3(this.spaces[U].fromXYZ);if(this.spaces[U].transfer==="srgb")X.r=WJ(X.r),X.g=WJ(X.g),X.b=WJ(X.b);return X},workingToColorSpace:function(X,H){return this.convert(X,this.workingColorSpace,H)},colorSpaceToWorking:function(X,H){return this.convert(X,H,this.workingColorSpace)},getPrimaries:function(X){return this.spaces[X].primaries},getTransfer:function(X){if(X==="")return"linear";return this.spaces[X].transfer},getToneMappingMode:function(X){return this.spaces[X].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(X,H=this.workingColorSpace){return X.fromArray(this.spaces[H].luminanceCoefficients)},define:function(X){Object.assign(this.spaces,X)},_getMatrix:function(X,H,U){return X.copy(this.spaces[H].toXYZ).multiply(this.spaces[U].fromXYZ)},_getDrawingBufferColorSpace:function(X){return this.spaces[X].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(X=this.workingColorSpace){return this.spaces[X].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(X,H){return XJ("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(X,H)},toWorkingColorSpace:function(X,H){return XJ("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(X,H)}},Z=[0.64,0.33,0.3,0.6,0.15,0.06],Y=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Z,whitePoint:W,transfer:"linear",toXYZ:uR,fromXYZ:lR,luminanceCoefficients:Y,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Z,whitePoint:W,transfer:"srgb",toXYZ:uR,fromXYZ:lR,luminanceCoefficients:Y,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var W1=cM();function H6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function WJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var c5;class VG{static getDataURL(J,Z="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Y;if(J instanceof HTMLCanvasElement)Y=J;else{if(c5===void 0)c5=lZ("canvas");c5.width=J.width,c5.height=J.height;let W=c5.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);Y=c5}return Y.toDataURL(Z)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Z=lZ("canvas");Z.width=J.width,Z.height=J.height;let Y=Z.getContext("2d");Y.drawImage(J,0,0,J.width,J.height);let W=Y.getImageData(0,0,J.width,J.height),X=W.data;for(let H=0;H<X.length;H++)X[H]=H6(X[H]/255)*255;return Y.putImageData(W,0,0),Z}else if(J.data){let Z=J.data.slice(0);for(let Y=0;Y<Z.length;Y++)if(Z instanceof Uint8Array||Z instanceof Uint8ClampedArray)Z[Y]=Math.floor(H6(Z[Y]/255)*255);else Z[Y]=H6(Z[Y]);return{data:Z,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var iM=0;class JY{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=eZ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Z=this.data;if(typeof HTMLVideoElement<"u"&&Z instanceof HTMLVideoElement)J.set(Z.videoWidth,Z.videoHeight,0);else if(Z instanceof VideoFrame)J.set(Z.displayHeight,Z.displayWidth,0);else if(Z!==null)J.set(Z.width,Z.height,Z.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Y={uuid:this.uuid,url:""},W=this.data;if(W!==null){let X;if(Array.isArray(W)){X=[];for(let H=0,U=W.length;H<U;H++)if(W[H].isDataTexture)X.push(Dw(W[H].image));else X.push(Dw(W[H]))}else X=Dw(W);Y.url=X}if(!Z)J.images[this.uuid]=Y;return Y}}function Dw(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return VG.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var sM=0,zw=new v;class F8 extends e6{constructor(J=F8.DEFAULT_IMAGE,Z=F8.DEFAULT_MAPPING,Y=1001,W=1001,X=1006,H=1008,U=1023,Q=1009,w=F8.DEFAULT_ANISOTROPY,G=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=eZ(),this.name="",this.source=new JY(J),this.mipmaps=[],this.mapping=Z,this.channel=0,this.wrapS=Y,this.wrapT=W,this.magFilter=X,this.minFilter=H,this.anisotropy=w,this.format=U,this.internalFormat=null,this.type=Q,this.offset=new r0(0,0),this.repeat=new r0(1,1),this.center=new r0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new i0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=G,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(zw).x}get height(){return this.source.getSize(zw).y}get depth(){return this.source.getSize(zw).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Z in J){let Y=J[Z];if(Y===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Z}' has value of undefined.`);continue}let W=this[Z];if(W===void 0){console.warn(`THREE.Texture.setValues(): property '${Z}' does not exist.`);continue}if(W&&Y&&(W.isVector2&&Y.isVector2))W.copy(Y);else if(W&&Y&&(W.isVector3&&Y.isVector3))W.copy(Y);else if(W&&Y&&(W.isMatrix3&&Y.isMatrix3))W.copy(Y);else this[Z]=Y}}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Y={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Y.userData=this.userData;if(!Z)J.textures[this.uuid]=Y;return Y}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}F8.DEFAULT_IMAGE=null;F8.DEFAULT_MAPPING=300;F8.DEFAULT_ANISOTROPY=1;class z1{constructor(J=0,Z=0,Y=0,W=1){z1.prototype.isVector4=!0,this.x=J,this.y=Z,this.z=Y,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Z,Y,W){return this.x=J,this.y=Z,this.z=Y,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;case 3:this.w=Z;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this.w=J.w+Z.w,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this.w+=J.w*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this.w=J.w-Z.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Z=this.x,Y=this.y,W=this.z,X=this.w,H=J.elements;return this.x=H[0]*Z+H[4]*Y+H[8]*W+H[12]*X,this.y=H[1]*Z+H[5]*Y+H[9]*W+H[13]*X,this.z=H[2]*Z+H[6]*Y+H[10]*W+H[14]*X,this.w=H[3]*Z+H[7]*Y+H[11]*W+H[15]*X,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Z=Math.sqrt(1-J.w*J.w);if(Z<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Z,this.y=J.y/Z,this.z=J.z/Z;return this}setAxisAngleFromRotationMatrix(J){let Z,Y,W,X,H=0.01,U=0.1,Q=J.elements,w=Q[0],G=Q[4],K=Q[8],z=Q[1],D=Q[5],R=Q[9],q=Q[2],L=Q[6],O=Q[10];if(Math.abs(G-z)<0.01&&Math.abs(K-q)<0.01&&Math.abs(R-L)<0.01){if(Math.abs(G+z)<0.1&&Math.abs(K+q)<0.1&&Math.abs(R+L)<0.1&&Math.abs(w+D+O-3)<0.1)return this.set(1,0,0,0),this;Z=Math.PI;let F=(w+1)/2,N=(D+1)/2,M=(O+1)/2,I=(G+z)/4,E=(K+q)/4,A=(R+L)/4;if(F>N&&F>M)if(F<0.01)Y=0,W=0.707106781,X=0.707106781;else Y=Math.sqrt(F),W=I/Y,X=E/Y;else if(N>M)if(N<0.01)Y=0.707106781,W=0,X=0.707106781;else W=Math.sqrt(N),Y=I/W,X=A/W;else if(M<0.01)Y=0.707106781,W=0.707106781,X=0;else X=Math.sqrt(M),Y=E/X,W=A/X;return this.set(Y,W,X,Z),this}let $=Math.sqrt((L-R)*(L-R)+(K-q)*(K-q)+(z-G)*(z-G));if(Math.abs($)<0.001)$=1;return this.x=(L-R)/$,this.y=(K-q)/$,this.z=(z-G)/$,this.w=Math.acos((w+D+O-1)/2),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this.w=Z[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Z){return this.x=Z1(this.x,J.x,Z.x),this.y=Z1(this.y,J.y,Z.y),this.z=Z1(this.z,J.z,Z.z),this.w=Z1(this.w,J.w,Z.w),this}clampScalar(J,Z){return this.x=Z1(this.x,J,Z),this.y=Z1(this.y,J,Z),this.z=Z1(this.z,J,Z),this.w=Z1(this.w,J,Z),this}clampLength(J,Z){let Y=this.length();return this.divideScalar(Y||1).multiplyScalar(Z1(Y,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this.w+=(J.w-this.w)*Z,this}lerpVectors(J,Z,Y){return this.x=J.x+(Z.x-J.x)*Y,this.y=J.y+(Z.y-J.y)*Y,this.z=J.z+(Z.z-J.z)*Y,this.w=J.w+(Z.w-J.w)*Y,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this.w=J[Z+3],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J[Z+3]=this.w,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this.w=J.getW(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _G extends e6{constructor(J=1,Z=1,Y={}){super();Y=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Y),this.isRenderTarget=!0,this.width=J,this.height=Z,this.depth=Y.depth,this.scissor=new z1(0,0,J,Z),this.scissorTest=!1,this.viewport=new z1(0,0,J,Z);let W={width:J,height:Z,depth:Y.depth},X=new F8(W);this.textures=[];let H=Y.count;for(let U=0;U<H;U++)this.textures[U]=X.clone(),this.textures[U].isRenderTargetTexture=!0,this.textures[U].renderTarget=this;this._setTextureOptions(Y),this.depthBuffer=Y.depthBuffer,this.stencilBuffer=Y.stencilBuffer,this.resolveDepthBuffer=Y.resolveDepthBuffer,this.resolveStencilBuffer=Y.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Y.depthTexture,this.samples=Y.samples,this.multiview=Y.multiview}_setTextureOptions(J={}){let Z={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Z.mapping=J.mapping;if(J.wrapS!==void 0)Z.wrapS=J.wrapS;if(J.wrapT!==void 0)Z.wrapT=J.wrapT;if(J.wrapR!==void 0)Z.wrapR=J.wrapR;if(J.magFilter!==void 0)Z.magFilter=J.magFilter;if(J.minFilter!==void 0)Z.minFilter=J.minFilter;if(J.format!==void 0)Z.format=J.format;if(J.type!==void 0)Z.type=J.type;if(J.anisotropy!==void 0)Z.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Z.colorSpace=J.colorSpace;if(J.flipY!==void 0)Z.flipY=J.flipY;if(J.generateMipmaps!==void 0)Z.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Z.internalFormat=J.internalFormat;for(let Y=0;Y<this.textures.length;Y++)this.textures[Y].setValues(Z)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Z,Y=1){if(this.width!==J||this.height!==Z||this.depth!==Y){this.width=J,this.height=Z,this.depth=Y;for(let W=0,X=this.textures.length;W<X;W++)this.textures[W].image.width=J,this.textures[W].image.height=Z,this.textures[W].image.depth=Y,this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Z),this.scissor.set(0,0,J,Z)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,Y=J.textures.length;Z<Y;Z++){this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;let W=Object.assign({},J.textures[Z].image);this.textures[Z].source=new JY(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q6 extends _G{constructor(J=1,Z=1,Y={}){super(J,Z,Y);this.isWebGLRenderTarget=!0}}class hX extends F8{constructor(J=null,Z=1,Y=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Z,height:Y,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class AG extends F8{constructor(J=null,Z=1,Y=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Z,height:Y,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x9{constructor(J=new v(1/0,1/0,1/0),Z=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Z}set(J,Z){return this.min.copy(J),this.max.copy(Z),this}setFromArray(J){this.makeEmpty();for(let Z=0,Y=J.length;Z<Y;Z+=3)this.expandByPoint(z7.fromArray(J,Z));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Z=0,Y=J.count;Z<Y;Z++)this.expandByPoint(z7.fromBufferAttribute(J,Z));return this}setFromPoints(J){this.makeEmpty();for(let Z=0,Y=J.length;Z<Y;Z++)this.expandByPoint(J[Z]);return this}setFromCenterAndSize(J,Z){let Y=z7.copy(Z).multiplyScalar(0.5);return this.min.copy(J).sub(Y),this.max.copy(J).add(Y),this}setFromObject(J,Z=!1){return this.makeEmpty(),this.expandByObject(J,Z)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Z=!1){J.updateWorldMatrix(!1,!1);let Y=J.geometry;if(Y!==void 0){let X=Y.getAttribute("position");if(Z===!0&&X!==void 0&&J.isInstancedMesh!==!0)for(let H=0,U=X.count;H<U;H++){if(J.isMesh===!0)J.getVertexPosition(H,z7);else z7.fromBufferAttribute(X,H);z7.applyMatrix4(J.matrixWorld),this.expandByPoint(z7)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();eW.copy(J.boundingBox)}else{if(Y.boundingBox===null)Y.computeBoundingBox();eW.copy(Y.boundingBox)}eW.applyMatrix4(J.matrixWorld),this.union(eW)}}let W=J.children;for(let X=0,H=W.length;X<H;X++)this.expandByObject(W[X],Z);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Z){return Z.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,z7),z7.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Z,Y;if(J.normal.x>0)Z=J.normal.x*this.min.x,Y=J.normal.x*this.max.x;else Z=J.normal.x*this.max.x,Y=J.normal.x*this.min.x;if(J.normal.y>0)Z+=J.normal.y*this.min.y,Y+=J.normal.y*this.max.y;else Z+=J.normal.y*this.max.y,Y+=J.normal.y*this.min.y;if(J.normal.z>0)Z+=J.normal.z*this.min.z,Y+=J.normal.z*this.max.z;else Z+=J.normal.z*this.max.z,Y+=J.normal.z*this.min.z;return Z<=-J.constant&&Y>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(gZ),JX.subVectors(this.max,gZ),i5.subVectors(J.a,gZ),s5.subVectors(J.b,gZ),n5.subVectors(J.c,gZ),l6.subVectors(s5,i5),c6.subVectors(n5,s5),A9.subVectors(i5,n5);let Z=[0,-l6.z,l6.y,0,-c6.z,c6.y,0,-A9.z,A9.y,l6.z,0,-l6.x,c6.z,0,-c6.x,A9.z,0,-A9.x,-l6.y,l6.x,0,-c6.y,c6.x,0,-A9.y,A9.x,0];if(!Rw(Z,i5,s5,n5,JX))return!1;if(Z=[1,0,0,0,1,0,0,0,1],!Rw(Z,i5,s5,n5,JX))return!1;return ZX.crossVectors(l6,c6),Z=[ZX.x,ZX.y,ZX.z],Rw(Z,i5,s5,n5,JX)}clampPoint(J,Z){return Z.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,z7).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(z7).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return e7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),e7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),e7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),e7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),e7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),e7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),e7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),e7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(e7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var e7=[new v,new v,new v,new v,new v,new v,new v,new v],z7=new v,eW=new x9,i5=new v,s5=new v,n5=new v,l6=new v,c6=new v,A9=new v,gZ=new v,JX=new v,ZX=new v,E9=new v;function Rw(J,Z,Y,W,X){for(let H=0,U=J.length-3;H<=U;H+=3){E9.fromArray(J,H);let Q=X.x*Math.abs(E9.x)+X.y*Math.abs(E9.y)+X.z*Math.abs(E9.z),w=Z.dot(E9),G=Y.dot(E9),K=W.dot(E9);if(Math.max(-Math.max(w,G,K),Math.min(w,G,K))>Q)return!1}return!0}var nM=new x9,pZ=new v,Nw=new v;class ZY{constructor(J=new v,Z=-1){this.isSphere=!0,this.center=J,this.radius=Z}set(J,Z){return this.center.copy(J),this.radius=Z,this}setFromPoints(J,Z){let Y=this.center;if(Z!==void 0)Y.copy(Z);else nM.setFromPoints(J).getCenter(Y);let W=0;for(let X=0,H=J.length;X<H;X++)W=Math.max(W,Y.distanceToSquared(J[X]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Z=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Z*Z}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Z){let Y=this.center.distanceToSquared(J);if(Z.copy(J),Y>this.radius*this.radius)Z.sub(this.center).normalize(),Z.multiplyScalar(this.radius).add(this.center);return Z}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;pZ.subVectors(J,this.center);let Z=pZ.lengthSq();if(Z>this.radius*this.radius){let Y=Math.sqrt(Z),W=(Y-this.radius)*0.5;this.center.addScaledVector(pZ,W/Y),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else Nw.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(pZ.copy(J.center).add(Nw)),this.expandByPoint(pZ.copy(J.center).sub(Nw));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var J6=new v,Ow=new v,YX=new v,i6=new v,Fw=new v,WX=new v,qw=new v;class EG{constructor(J=new v,Z=new v(0,0,-1)){this.origin=J,this.direction=Z}set(J,Z){return this.origin.copy(J),this.direction.copy(Z),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Z){return Z.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,J6)),this}closestPointToPoint(J,Z){Z.subVectors(J,this.origin);let Y=Z.dot(this.direction);if(Y<0)return Z.copy(this.origin);return Z.copy(this.origin).addScaledVector(this.direction,Y)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Z=J6.subVectors(J,this.origin).dot(this.direction);if(Z<0)return this.origin.distanceToSquared(J);return J6.copy(this.origin).addScaledVector(this.direction,Z),J6.distanceToSquared(J)}distanceSqToSegment(J,Z,Y,W){Ow.copy(J).add(Z).multiplyScalar(0.5),YX.copy(Z).sub(J).normalize(),i6.copy(this.origin).sub(Ow);let X=J.distanceTo(Z)*0.5,H=-this.direction.dot(YX),U=i6.dot(this.direction),Q=-i6.dot(YX),w=i6.lengthSq(),G=Math.abs(1-H*H),K,z,D,R;if(G>0)if(K=H*Q-U,z=H*U-Q,R=X*G,K>=0)if(z>=-R)if(z<=R){let q=1/G;K*=q,z*=q,D=K*(K+H*z+2*U)+z*(H*K+z+2*Q)+w}else z=X,K=Math.max(0,-(H*z+U)),D=-K*K+z*(z+2*Q)+w;else z=-X,K=Math.max(0,-(H*z+U)),D=-K*K+z*(z+2*Q)+w;else if(z<=-R)K=Math.max(0,-(-H*X+U)),z=K>0?-X:Math.min(Math.max(-X,-Q),X),D=-K*K+z*(z+2*Q)+w;else if(z<=R)K=0,z=Math.min(Math.max(-X,-Q),X),D=z*(z+2*Q)+w;else K=Math.max(0,-(H*X+U)),z=K>0?X:Math.min(Math.max(-X,-Q),X),D=-K*K+z*(z+2*Q)+w;else z=H>0?-X:X,K=Math.max(0,-(H*z+U)),D=-K*K+z*(z+2*Q)+w;if(Y)Y.copy(this.origin).addScaledVector(this.direction,K);if(W)W.copy(Ow).addScaledVector(YX,z);return D}intersectSphere(J,Z){J6.subVectors(J.center,this.origin);let Y=J6.dot(this.direction),W=J6.dot(J6)-Y*Y,X=J.radius*J.radius;if(W>X)return null;let H=Math.sqrt(X-W),U=Y-H,Q=Y+H;if(Q<0)return null;if(U<0)return this.at(Q,Z);return this.at(U,Z)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Z=J.normal.dot(this.direction);if(Z===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Y=-(this.origin.dot(J.normal)+J.constant)/Z;return Y>=0?Y:null}intersectPlane(J,Z){let Y=this.distanceToPlane(J);if(Y===null)return null;return this.at(Y,Z)}intersectsPlane(J){let Z=J.distanceToPoint(this.origin);if(Z===0)return!0;if(J.normal.dot(this.direction)*Z<0)return!0;return!1}intersectBox(J,Z){let Y,W,X,H,U,Q,w=1/this.direction.x,G=1/this.direction.y,K=1/this.direction.z,z=this.origin;if(w>=0)Y=(J.min.x-z.x)*w,W=(J.max.x-z.x)*w;else Y=(J.max.x-z.x)*w,W=(J.min.x-z.x)*w;if(G>=0)X=(J.min.y-z.y)*G,H=(J.max.y-z.y)*G;else X=(J.max.y-z.y)*G,H=(J.min.y-z.y)*G;if(Y>H||X>W)return null;if(X>Y||isNaN(Y))Y=X;if(H<W||isNaN(W))W=H;if(K>=0)U=(J.min.z-z.z)*K,Q=(J.max.z-z.z)*K;else U=(J.max.z-z.z)*K,Q=(J.min.z-z.z)*K;if(Y>Q||U>W)return null;if(U>Y||Y!==Y)Y=U;if(Q<W||W!==W)W=Q;if(W<0)return null;return this.at(Y>=0?Y:W,Z)}intersectsBox(J){return this.intersectBox(J,J6)!==null}intersectTriangle(J,Z,Y,W,X){Fw.subVectors(Z,J),WX.subVectors(Y,J),qw.crossVectors(Fw,WX);let H=this.direction.dot(qw),U;if(H>0){if(W)return null;U=1}else if(H<0)U=-1,H=-H;else return null;i6.subVectors(this.origin,J);let Q=U*this.direction.dot(WX.crossVectors(i6,WX));if(Q<0)return null;let w=U*this.direction.dot(Fw.cross(i6));if(w<0)return null;if(Q+w>H)return null;let G=-U*i6.dot(qw);if(G<0)return null;return this.at(G/H,X)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class P1{constructor(J,Z,Y,W,X,H,U,Q,w,G,K,z,D,R,q,L){if(P1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Z,Y,W,X,H,U,Q,w,G,K,z,D,R,q,L)}set(J,Z,Y,W,X,H,U,Q,w,G,K,z,D,R,q,L){let O=this.elements;return O[0]=J,O[4]=Z,O[8]=Y,O[12]=W,O[1]=X,O[5]=H,O[9]=U,O[13]=Q,O[2]=w,O[6]=G,O[10]=K,O[14]=z,O[3]=D,O[7]=R,O[11]=q,O[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new P1().fromArray(this.elements)}copy(J){let Z=this.elements,Y=J.elements;return Z[0]=Y[0],Z[1]=Y[1],Z[2]=Y[2],Z[3]=Y[3],Z[4]=Y[4],Z[5]=Y[5],Z[6]=Y[6],Z[7]=Y[7],Z[8]=Y[8],Z[9]=Y[9],Z[10]=Y[10],Z[11]=Y[11],Z[12]=Y[12],Z[13]=Y[13],Z[14]=Y[14],Z[15]=Y[15],this}copyPosition(J){let Z=this.elements,Y=J.elements;return Z[12]=Y[12],Z[13]=Y[13],Z[14]=Y[14],this}setFromMatrix3(J){let Z=J.elements;return this.set(Z[0],Z[3],Z[6],0,Z[1],Z[4],Z[7],0,Z[2],Z[5],Z[8],0,0,0,0,1),this}extractBasis(J,Z,Y){return J.setFromMatrixColumn(this,0),Z.setFromMatrixColumn(this,1),Y.setFromMatrixColumn(this,2),this}makeBasis(J,Z,Y){return this.set(J.x,Z.x,Y.x,0,J.y,Z.y,Y.y,0,J.z,Z.z,Y.z,0,0,0,0,1),this}extractRotation(J){let Z=this.elements,Y=J.elements,W=1/o5.setFromMatrixColumn(J,0).length(),X=1/o5.setFromMatrixColumn(J,1).length(),H=1/o5.setFromMatrixColumn(J,2).length();return Z[0]=Y[0]*W,Z[1]=Y[1]*W,Z[2]=Y[2]*W,Z[3]=0,Z[4]=Y[4]*X,Z[5]=Y[5]*X,Z[6]=Y[6]*X,Z[7]=0,Z[8]=Y[8]*H,Z[9]=Y[9]*H,Z[10]=Y[10]*H,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromEuler(J){let Z=this.elements,Y=J.x,W=J.y,X=J.z,H=Math.cos(Y),U=Math.sin(Y),Q=Math.cos(W),w=Math.sin(W),G=Math.cos(X),K=Math.sin(X);if(J.order==="XYZ"){let z=H*G,D=H*K,R=U*G,q=U*K;Z[0]=Q*G,Z[4]=-Q*K,Z[8]=w,Z[1]=D+R*w,Z[5]=z-q*w,Z[9]=-U*Q,Z[2]=q-z*w,Z[6]=R+D*w,Z[10]=H*Q}else if(J.order==="YXZ"){let z=Q*G,D=Q*K,R=w*G,q=w*K;Z[0]=z+q*U,Z[4]=R*U-D,Z[8]=H*w,Z[1]=H*K,Z[5]=H*G,Z[9]=-U,Z[2]=D*U-R,Z[6]=q+z*U,Z[10]=H*Q}else if(J.order==="ZXY"){let z=Q*G,D=Q*K,R=w*G,q=w*K;Z[0]=z-q*U,Z[4]=-H*K,Z[8]=R+D*U,Z[1]=D+R*U,Z[5]=H*G,Z[9]=q-z*U,Z[2]=-H*w,Z[6]=U,Z[10]=H*Q}else if(J.order==="ZYX"){let z=H*G,D=H*K,R=U*G,q=U*K;Z[0]=Q*G,Z[4]=R*w-D,Z[8]=z*w+q,Z[1]=Q*K,Z[5]=q*w+z,Z[9]=D*w-R,Z[2]=-w,Z[6]=U*Q,Z[10]=H*Q}else if(J.order==="YZX"){let z=H*Q,D=H*w,R=U*Q,q=U*w;Z[0]=Q*G,Z[4]=q-z*K,Z[8]=R*K+D,Z[1]=K,Z[5]=H*G,Z[9]=-U*G,Z[2]=-w*G,Z[6]=D*K+R,Z[10]=z-q*K}else if(J.order==="XZY"){let z=H*Q,D=H*w,R=U*Q,q=U*w;Z[0]=Q*G,Z[4]=-K,Z[8]=w*G,Z[1]=z*K+q,Z[5]=H*G,Z[9]=D*K-R,Z[2]=R*K-D,Z[6]=U*G,Z[10]=q*K+z}return Z[3]=0,Z[7]=0,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromQuaternion(J){return this.compose(oM,J,aM)}lookAt(J,Z,Y){let W=this.elements;if(u8.subVectors(J,Z),u8.lengthSq()===0)u8.z=1;if(u8.normalize(),s6.crossVectors(Y,u8),s6.lengthSq()===0){if(Math.abs(Y.z)===1)u8.x+=0.0001;else u8.z+=0.0001;u8.normalize(),s6.crossVectors(Y,u8)}return s6.normalize(),XX.crossVectors(u8,s6),W[0]=s6.x,W[4]=XX.x,W[8]=u8.x,W[1]=s6.y,W[5]=XX.y,W[9]=u8.y,W[2]=s6.z,W[6]=XX.z,W[10]=u8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let Y=J.elements,W=Z.elements,X=this.elements,H=Y[0],U=Y[4],Q=Y[8],w=Y[12],G=Y[1],K=Y[5],z=Y[9],D=Y[13],R=Y[2],q=Y[6],L=Y[10],O=Y[14],$=Y[3],F=Y[7],N=Y[11],M=Y[15],I=W[0],E=W[4],A=W[8],f=W[12],B=W[1],V=W[5],T=W[9],b=W[13],g=W[2],l=W[6],Y0=W[10],n=W[14],c=W[3],i=W[7],N0=W[11],M0=W[15];return X[0]=H*I+U*B+Q*g+w*c,X[4]=H*E+U*V+Q*l+w*i,X[8]=H*A+U*T+Q*Y0+w*N0,X[12]=H*f+U*b+Q*n+w*M0,X[1]=G*I+K*B+z*g+D*c,X[5]=G*E+K*V+z*l+D*i,X[9]=G*A+K*T+z*Y0+D*N0,X[13]=G*f+K*b+z*n+D*M0,X[2]=R*I+q*B+L*g+O*c,X[6]=R*E+q*V+L*l+O*i,X[10]=R*A+q*T+L*Y0+O*N0,X[14]=R*f+q*b+L*n+O*M0,X[3]=$*I+F*B+N*g+M*c,X[7]=$*E+F*V+N*l+M*i,X[11]=$*A+F*T+N*Y0+M*N0,X[15]=$*f+F*b+N*n+M*M0,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[4]*=J,Z[8]*=J,Z[12]*=J,Z[1]*=J,Z[5]*=J,Z[9]*=J,Z[13]*=J,Z[2]*=J,Z[6]*=J,Z[10]*=J,Z[14]*=J,Z[3]*=J,Z[7]*=J,Z[11]*=J,Z[15]*=J,this}determinant(){let J=this.elements,Z=J[0],Y=J[4],W=J[8],X=J[12],H=J[1],U=J[5],Q=J[9],w=J[13],G=J[2],K=J[6],z=J[10],D=J[14],R=J[3],q=J[7],L=J[11],O=J[15];return R*(+X*Q*K-W*w*K-X*U*z+Y*w*z+W*U*D-Y*Q*D)+q*(+Z*Q*D-Z*w*z+X*H*z-W*H*D+W*w*G-X*Q*G)+L*(+Z*w*K-Z*U*D-X*H*K+Y*H*D+X*U*G-Y*w*G)+O*(-W*U*G-Z*Q*K+Z*U*z+W*H*K-Y*H*z+Y*Q*G)}transpose(){let J=this.elements,Z;return Z=J[1],J[1]=J[4],J[4]=Z,Z=J[2],J[2]=J[8],J[8]=Z,Z=J[6],J[6]=J[9],J[9]=Z,Z=J[3],J[3]=J[12],J[12]=Z,Z=J[7],J[7]=J[13],J[13]=Z,Z=J[11],J[11]=J[14],J[14]=Z,this}setPosition(J,Z,Y){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Z,W[14]=Y;return this}invert(){let J=this.elements,Z=J[0],Y=J[1],W=J[2],X=J[3],H=J[4],U=J[5],Q=J[6],w=J[7],G=J[8],K=J[9],z=J[10],D=J[11],R=J[12],q=J[13],L=J[14],O=J[15],$=K*L*w-q*z*w+q*Q*D-U*L*D-K*Q*O+U*z*O,F=R*z*w-G*L*w-R*Q*D+H*L*D+G*Q*O-H*z*O,N=G*q*w-R*K*w+R*U*D-H*q*D-G*U*O+H*K*O,M=R*K*Q-G*q*Q-R*U*z+H*q*z+G*U*L-H*K*L,I=Z*$+Y*F+W*N+X*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/I;return J[0]=$*E,J[1]=(q*z*X-K*L*X-q*W*D+Y*L*D+K*W*O-Y*z*O)*E,J[2]=(U*L*X-q*Q*X+q*W*w-Y*L*w-U*W*O+Y*Q*O)*E,J[3]=(K*Q*X-U*z*X-K*W*w+Y*z*w+U*W*D-Y*Q*D)*E,J[4]=F*E,J[5]=(G*L*X-R*z*X+R*W*D-Z*L*D-G*W*O+Z*z*O)*E,J[6]=(R*Q*X-H*L*X-R*W*w+Z*L*w+H*W*O-Z*Q*O)*E,J[7]=(H*z*X-G*Q*X+G*W*w-Z*z*w-H*W*D+Z*Q*D)*E,J[8]=N*E,J[9]=(R*K*X-G*q*X-R*Y*D+Z*q*D+G*Y*O-Z*K*O)*E,J[10]=(H*q*X-R*U*X+R*Y*w-Z*q*w-H*Y*O+Z*U*O)*E,J[11]=(G*U*X-H*K*X-G*Y*w+Z*K*w+H*Y*D-Z*U*D)*E,J[12]=M*E,J[13]=(G*q*W-R*K*W+R*Y*z-Z*q*z-G*Y*L+Z*K*L)*E,J[14]=(R*U*W-H*q*W-R*Y*Q+Z*q*Q+H*Y*L-Z*U*L)*E,J[15]=(H*K*W-G*U*W+G*Y*Q-Z*K*Q-H*Y*z+Z*U*z)*E,this}scale(J){let Z=this.elements,Y=J.x,W=J.y,X=J.z;return Z[0]*=Y,Z[4]*=W,Z[8]*=X,Z[1]*=Y,Z[5]*=W,Z[9]*=X,Z[2]*=Y,Z[6]*=W,Z[10]*=X,Z[3]*=Y,Z[7]*=W,Z[11]*=X,this}getMaxScaleOnAxis(){let J=this.elements,Z=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Y=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Z,Y,W))}makeTranslation(J,Z,Y){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Z,0,0,1,Y,0,0,0,1);return this}makeRotationX(J){let Z=Math.cos(J),Y=Math.sin(J);return this.set(1,0,0,0,0,Z,-Y,0,0,Y,Z,0,0,0,0,1),this}makeRotationY(J){let Z=Math.cos(J),Y=Math.sin(J);return this.set(Z,0,Y,0,0,1,0,0,-Y,0,Z,0,0,0,0,1),this}makeRotationZ(J){let Z=Math.cos(J),Y=Math.sin(J);return this.set(Z,-Y,0,0,Y,Z,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Z){let Y=Math.cos(Z),W=Math.sin(Z),X=1-Y,H=J.x,U=J.y,Q=J.z,w=X*H,G=X*U;return this.set(w*H+Y,w*U-W*Q,w*Q+W*U,0,w*U+W*Q,G*U+Y,G*Q-W*H,0,w*Q-W*U,G*Q+W*H,X*Q*Q+Y,0,0,0,0,1),this}makeScale(J,Z,Y){return this.set(J,0,0,0,0,Z,0,0,0,0,Y,0,0,0,0,1),this}makeShear(J,Z,Y,W,X,H){return this.set(1,Y,X,0,J,1,H,0,Z,W,1,0,0,0,0,1),this}compose(J,Z,Y){let W=this.elements,X=Z._x,H=Z._y,U=Z._z,Q=Z._w,w=X+X,G=H+H,K=U+U,z=X*w,D=X*G,R=X*K,q=H*G,L=H*K,O=U*K,$=Q*w,F=Q*G,N=Q*K,M=Y.x,I=Y.y,E=Y.z;return W[0]=(1-(q+O))*M,W[1]=(D+N)*M,W[2]=(R-F)*M,W[3]=0,W[4]=(D-N)*I,W[5]=(1-(z+O))*I,W[6]=(L+$)*I,W[7]=0,W[8]=(R+F)*E,W[9]=(L-$)*E,W[10]=(1-(z+q))*E,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Z,Y){let W=this.elements,X=o5.set(W[0],W[1],W[2]).length(),H=o5.set(W[4],W[5],W[6]).length(),U=o5.set(W[8],W[9],W[10]).length();if(this.determinant()<0)X=-X;J.x=W[12],J.y=W[13],J.z=W[14],R7.copy(this);let w=1/X,G=1/H,K=1/U;return R7.elements[0]*=w,R7.elements[1]*=w,R7.elements[2]*=w,R7.elements[4]*=G,R7.elements[5]*=G,R7.elements[6]*=G,R7.elements[8]*=K,R7.elements[9]*=K,R7.elements[10]*=K,Z.setFromRotationMatrix(R7),Y.x=X,Y.y=H,Y.z=U,this}makePerspective(J,Z,Y,W,X,H,U=2000,Q=!1){let w=this.elements,G=2*X/(Z-J),K=2*X/(Y-W),z=(Z+J)/(Z-J),D=(Y+W)/(Y-W),R,q;if(Q)R=X/(H-X),q=H*X/(H-X);else if(U===2000)R=-(H+X)/(H-X),q=-2*H*X/(H-X);else if(U===2001)R=-H/(H-X),q=-H*X/(H-X);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+U);return w[0]=G,w[4]=0,w[8]=z,w[12]=0,w[1]=0,w[5]=K,w[9]=D,w[13]=0,w[2]=0,w[6]=0,w[10]=R,w[14]=q,w[3]=0,w[7]=0,w[11]=-1,w[15]=0,this}makeOrthographic(J,Z,Y,W,X,H,U=2000,Q=!1){let w=this.elements,G=2/(Z-J),K=2/(Y-W),z=-(Z+J)/(Z-J),D=-(Y+W)/(Y-W),R,q;if(Q)R=1/(H-X),q=H/(H-X);else if(U===2000)R=-2/(H-X),q=-(H+X)/(H-X);else if(U===2001)R=-1/(H-X),q=-X/(H-X);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+U);return w[0]=G,w[4]=0,w[8]=0,w[12]=z,w[1]=0,w[5]=K,w[9]=0,w[13]=D,w[2]=0,w[6]=0,w[10]=R,w[14]=q,w[3]=0,w[7]=0,w[11]=0,w[15]=1,this}equals(J){let Z=this.elements,Y=J.elements;for(let W=0;W<16;W++)if(Z[W]!==Y[W])return!1;return!0}fromArray(J,Z=0){for(let Y=0;Y<16;Y++)this.elements[Y]=J[Y+Z];return this}toArray(J=[],Z=0){let Y=this.elements;return J[Z]=Y[0],J[Z+1]=Y[1],J[Z+2]=Y[2],J[Z+3]=Y[3],J[Z+4]=Y[4],J[Z+5]=Y[5],J[Z+6]=Y[6],J[Z+7]=Y[7],J[Z+8]=Y[8],J[Z+9]=Y[9],J[Z+10]=Y[10],J[Z+11]=Y[11],J[Z+12]=Y[12],J[Z+13]=Y[13],J[Z+14]=Y[14],J[Z+15]=Y[15],J}}var o5=new v,R7=new P1,oM=new v(0,0,0),aM=new v(1,1,1),s6=new v,XX=new v,u8=new v,cR=new P1,iR=new J9;class O7{constructor(J=0,Z=0,Y=0,W=O7.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Z,this._z=Y,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Z,Y,W=this._order){return this._x=J,this._y=Z,this._z=Y,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Z=this._order,Y=!0){let W=J.elements,X=W[0],H=W[4],U=W[8],Q=W[1],w=W[5],G=W[9],K=W[2],z=W[6],D=W[10];switch(Z){case"XYZ":if(this._y=Math.asin(Z1(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(-G,D),this._z=Math.atan2(-H,X);else this._x=Math.atan2(z,w),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Z1(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(U,D),this._z=Math.atan2(Q,w);else this._y=Math.atan2(-K,X),this._z=0;break;case"ZXY":if(this._x=Math.asin(Z1(z,-1,1)),Math.abs(z)<0.9999999)this._y=Math.atan2(-K,D),this._z=Math.atan2(-H,w);else this._y=0,this._z=Math.atan2(Q,X);break;case"ZYX":if(this._y=Math.asin(-Z1(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(z,D),this._z=Math.atan2(Q,X);else this._x=0,this._z=Math.atan2(-H,w);break;case"YZX":if(this._z=Math.asin(Z1(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(-G,w),this._y=Math.atan2(-K,X);else this._x=0,this._y=Math.atan2(U,D);break;case"XZY":if(this._z=Math.asin(-Z1(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(z,w),this._y=Math.atan2(U,X);else this._x=Math.atan2(-G,D),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Z)}if(this._order=Z,Y===!0)this._onChangeCallback();return this}setFromQuaternion(J,Z,Y){return cR.makeRotationFromQuaternion(J),this.setFromRotationMatrix(cR,Z,Y)}setFromVector3(J,Z=this._order){return this.set(J.x,J.y,J.z,Z)}reorder(J){return iR.setFromEuler(this),this.setFromQuaternion(iR,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O7.DEFAULT_ORDER="XYZ";class vX{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var rM=0,sR=new v,a5=new J9,Z6=new P1,HX=new v,dZ=new v,tM=new v,eM=new J9,nR=new v(1,0,0),oR=new v(0,1,0),aR=new v(0,0,1),rR={type:"added"},JL={type:"removed"},r5={type:"childadded",child:null},Mw={type:"childremoved",child:null};class Z8 extends e6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=eZ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Z8.DEFAULT_UP.clone();let J=new v,Z=new O7,Y=new J9,W=new v(1,1,1);function X(){Y.setFromEuler(Z,!1)}function H(){Z.setFromQuaternion(Y,void 0,!1)}Z._onChange(X),Y._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Z},quaternion:{configurable:!0,enumerable:!0,value:Y},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new P1},normalMatrix:{value:new i0}}),this.matrix=new P1,this.matrixWorld=new P1,this.matrixAutoUpdate=Z8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Z8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vX,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Z){this.quaternion.setFromAxisAngle(J,Z)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Z){return a5.setFromAxisAngle(J,Z),this.quaternion.multiply(a5),this}rotateOnWorldAxis(J,Z){return a5.setFromAxisAngle(J,Z),this.quaternion.premultiply(a5),this}rotateX(J){return this.rotateOnAxis(nR,J)}rotateY(J){return this.rotateOnAxis(oR,J)}rotateZ(J){return this.rotateOnAxis(aR,J)}translateOnAxis(J,Z){return sR.copy(J).applyQuaternion(this.quaternion),this.position.add(sR.multiplyScalar(Z)),this}translateX(J){return this.translateOnAxis(nR,J)}translateY(J){return this.translateOnAxis(oR,J)}translateZ(J){return this.translateOnAxis(aR,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Z6.copy(this.matrixWorld).invert())}lookAt(J,Z,Y){if(J.isVector3)HX.copy(J);else HX.set(J,Z,Y);let W=this.parent;if(this.updateWorldMatrix(!0,!1),dZ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Z6.lookAt(dZ,HX,this.up);else Z6.lookAt(HX,dZ,this.up);if(this.quaternion.setFromRotationMatrix(Z6),W)Z6.extractRotation(W.matrixWorld),a5.setFromRotationMatrix(Z6),this.quaternion.premultiply(a5.invert())}add(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(rR),r5.child=J,this.dispatchEvent(r5),r5.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Y=0;Y<arguments.length;Y++)this.remove(arguments[Y]);return this}let Z=this.children.indexOf(J);if(Z!==-1)J.parent=null,this.children.splice(Z,1),J.dispatchEvent(JL),Mw.child=J,this.dispatchEvent(Mw),Mw.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Z6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Z6.multiply(J.parent.matrixWorld);return J.applyMatrix4(Z6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(rR),r5.child=J,this.dispatchEvent(r5),r5.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Z){if(this[J]===Z)return this;for(let Y=0,W=this.children.length;Y<W;Y++){let H=this.children[Y].getObjectByProperty(J,Z);if(H!==void 0)return H}return}getObjectsByProperty(J,Z,Y=[]){if(this[J]===Z)Y.push(this);let W=this.children;for(let X=0,H=W.length;X<H;X++)W[X].getObjectsByProperty(J,Z,Y);return Y}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dZ,J,tM),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dZ,eM,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Z=this.matrixWorld.elements;return J.set(Z[8],Z[9],Z[10]).normalize()}raycast(){}traverse(J){J(this);let Z=this.children;for(let Y=0,W=Z.length;Y<W;Y++)Z[Y].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Z=this.children;for(let Y=0,W=Z.length;Y<W;Y++)Z[Y].traverseVisible(J)}traverseAncestors(J){let Z=this.parent;if(Z!==null)J(Z),Z.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Z=this.children;for(let Y=0,W=Z.length;Y<W;Y++)Z[Y].updateMatrixWorld(J)}updateWorldMatrix(J,Z){let Y=this.parent;if(J===!0&&Y!==null)Y.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Z===!0){let W=this.children;for(let X=0,H=W.length;X<H;X++)W[X].updateWorldMatrix(!1,!0)}}toJSON(J){let Z=J===void 0||typeof J==="string",Y={};if(Z)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Y.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((U)=>({...U,boundingBox:U.boundingBox?U.boundingBox.toJSON():void 0,boundingSphere:U.boundingSphere?U.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((U)=>({...U})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function X(U,Q){if(U[Q.uuid]===void 0)U[Q.uuid]=Q.toJSON(J);return Q.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=X(J.geometries,this.geometry);let U=this.geometry.parameters;if(U!==void 0&&U.shapes!==void 0){let Q=U.shapes;if(Array.isArray(Q))for(let w=0,G=Q.length;w<G;w++){let K=Q[w];X(J.shapes,K)}else X(J.shapes,Q)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)X(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let U=[];for(let Q=0,w=this.material.length;Q<w;Q++)U.push(X(J.materials,this.material[Q]));W.material=U}else W.material=X(J.materials,this.material);if(this.children.length>0){W.children=[];for(let U=0;U<this.children.length;U++)W.children.push(this.children[U].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let U=0;U<this.animations.length;U++){let Q=this.animations[U];W.animations.push(X(J.animations,Q))}}if(Z){let U=H(J.geometries),Q=H(J.materials),w=H(J.textures),G=H(J.images),K=H(J.shapes),z=H(J.skeletons),D=H(J.animations),R=H(J.nodes);if(U.length>0)Y.geometries=U;if(Q.length>0)Y.materials=Q;if(w.length>0)Y.textures=w;if(G.length>0)Y.images=G;if(K.length>0)Y.shapes=K;if(z.length>0)Y.skeletons=z;if(D.length>0)Y.animations=D;if(R.length>0)Y.nodes=R}return Y.object=W,Y;function H(U){let Q=[];for(let w in U){let G=U[w];delete G.metadata,Q.push(G)}return Q}}clone(J){return new this.constructor().copy(this,J)}copy(J,Z=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Z===!0)for(let Y=0;Y<J.children.length;Y++){let W=J.children[Y];this.add(W.clone())}return this}}Z8.DEFAULT_UP=new v(0,1,0);Z8.DEFAULT_MATRIX_AUTO_UPDATE=!0;Z8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var N7=new v,Y6=new v,Lw=new v,W6=new v,t5=new v,e5=new v,tR=new v,kw=new v,Bw=new v,Vw=new v,_w=new z1,Aw=new z1,Ew=new z1;class U7{constructor(J=new v,Z=new v,Y=new v){this.a=J,this.b=Z,this.c=Y}static getNormal(J,Z,Y,W){W.subVectors(Y,Z),N7.subVectors(J,Z),W.cross(N7);let X=W.lengthSq();if(X>0)return W.multiplyScalar(1/Math.sqrt(X));return W.set(0,0,0)}static getBarycoord(J,Z,Y,W,X){N7.subVectors(W,Z),Y6.subVectors(Y,Z),Lw.subVectors(J,Z);let H=N7.dot(N7),U=N7.dot(Y6),Q=N7.dot(Lw),w=Y6.dot(Y6),G=Y6.dot(Lw),K=H*w-U*U;if(K===0)return X.set(0,0,0),null;let z=1/K,D=(w*Q-U*G)*z,R=(H*G-U*Q)*z;return X.set(1-D-R,R,D)}static containsPoint(J,Z,Y,W){if(this.getBarycoord(J,Z,Y,W,W6)===null)return!1;return W6.x>=0&&W6.y>=0&&W6.x+W6.y<=1}static getInterpolation(J,Z,Y,W,X,H,U,Q){if(this.getBarycoord(J,Z,Y,W,W6)===null){if(Q.x=0,Q.y=0,"z"in Q)Q.z=0;if("w"in Q)Q.w=0;return null}return Q.setScalar(0),Q.addScaledVector(X,W6.x),Q.addScaledVector(H,W6.y),Q.addScaledVector(U,W6.z),Q}static getInterpolatedAttribute(J,Z,Y,W,X,H){return _w.setScalar(0),Aw.setScalar(0),Ew.setScalar(0),_w.fromBufferAttribute(J,Z),Aw.fromBufferAttribute(J,Y),Ew.fromBufferAttribute(J,W),H.setScalar(0),H.addScaledVector(_w,X.x),H.addScaledVector(Aw,X.y),H.addScaledVector(Ew,X.z),H}static isFrontFacing(J,Z,Y,W){return N7.subVectors(Y,Z),Y6.subVectors(J,Z),N7.cross(Y6).dot(W)<0?!0:!1}set(J,Z,Y){return this.a.copy(J),this.b.copy(Z),this.c.copy(Y),this}setFromPointsAndIndices(J,Z,Y,W){return this.a.copy(J[Z]),this.b.copy(J[Y]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Z,Y,W){return this.a.fromBufferAttribute(J,Z),this.b.fromBufferAttribute(J,Y),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return N7.subVectors(this.c,this.b),Y6.subVectors(this.a,this.b),N7.cross(Y6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return U7.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Z){return U7.getBarycoord(J,this.a,this.b,this.c,Z)}getInterpolation(J,Z,Y,W,X){return U7.getInterpolation(J,this.a,this.b,this.c,Z,Y,W,X)}containsPoint(J){return U7.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return U7.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Z){let Y=this.a,W=this.b,X=this.c,H,U;t5.subVectors(W,Y),e5.subVectors(X,Y),kw.subVectors(J,Y);let Q=t5.dot(kw),w=e5.dot(kw);if(Q<=0&&w<=0)return Z.copy(Y);Bw.subVectors(J,W);let G=t5.dot(Bw),K=e5.dot(Bw);if(G>=0&&K<=G)return Z.copy(W);let z=Q*K-G*w;if(z<=0&&Q>=0&&G<=0)return H=Q/(Q-G),Z.copy(Y).addScaledVector(t5,H);Vw.subVectors(J,X);let D=t5.dot(Vw),R=e5.dot(Vw);if(R>=0&&D<=R)return Z.copy(X);let q=D*w-Q*R;if(q<=0&&w>=0&&R<=0)return U=w/(w-R),Z.copy(Y).addScaledVector(e5,U);let L=G*R-D*K;if(L<=0&&K-G>=0&&D-R>=0)return tR.subVectors(X,W),U=(K-G)/(K-G+(D-R)),Z.copy(W).addScaledVector(tR,U);let O=1/(L+q+z);return H=q*O,U=z*O,Z.copy(Y).addScaledVector(t5,H).addScaledVector(e5,U)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var GO={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},n6={h:0,s:0,l:0},UX={h:0,s:0,l:0};function Iw(J,Z,Y){if(Y<0)Y+=1;if(Y>1)Y-=1;if(Y<0.16666666666666666)return J+(Z-J)*6*Y;if(Y<0.5)return Z;if(Y<0.6666666666666666)return J+(Z-J)*6*(0.6666666666666666-Y);return J}class t0{constructor(J,Z,Y){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Z,Y)}set(J,Z,Y){if(Z===void 0&&Y===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Z,Y);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Z="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,W1.colorSpaceToWorking(this,Z),this}setRGB(J,Z,Y,W=W1.workingColorSpace){return this.r=J,this.g=Z,this.b=Y,W1.colorSpaceToWorking(this,W),this}setHSL(J,Z,Y,W=W1.workingColorSpace){if(J=lM(J,1),Z=Z1(Z,0,1),Y=Z1(Y,0,1),Z===0)this.r=this.g=this.b=Y;else{let X=Y<=0.5?Y*(1+Z):Y+Z-Y*Z,H=2*Y-X;this.r=Iw(H,X,J+0.3333333333333333),this.g=Iw(H,X,J),this.b=Iw(H,X,J-0.3333333333333333)}return W1.colorSpaceToWorking(this,W),this}setStyle(J,Z="srgb"){function Y(X){if(X===void 0)return;if(parseFloat(X)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let X,H=W[1],U=W[2];switch(H){case"rgb":case"rgba":if(X=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Y(X[4]),this.setRGB(Math.min(255,parseInt(X[1],10))/255,Math.min(255,parseInt(X[2],10))/255,Math.min(255,parseInt(X[3],10))/255,Z);if(X=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Y(X[4]),this.setRGB(Math.min(100,parseInt(X[1],10))/100,Math.min(100,parseInt(X[2],10))/100,Math.min(100,parseInt(X[3],10))/100,Z);break;case"hsl":case"hsla":if(X=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return Y(X[4]),this.setHSL(parseFloat(X[1])/360,parseFloat(X[2])/100,parseFloat(X[3])/100,Z);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let X=W[1],H=X.length;if(H===3)return this.setRGB(parseInt(X.charAt(0),16)/15,parseInt(X.charAt(1),16)/15,parseInt(X.charAt(2),16)/15,Z);else if(H===6)return this.setHex(parseInt(X,16),Z);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Z);return this}setColorName(J,Z="srgb"){let Y=GO[J.toLowerCase()];if(Y!==void 0)this.setHex(Y,Z);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=H6(J.r),this.g=H6(J.g),this.b=H6(J.b),this}copyLinearToSRGB(J){return this.r=WJ(J.r),this.g=WJ(J.g),this.b=WJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return W1.workingToColorSpace(w8.copy(this),J),Math.round(Z1(w8.r*255,0,255))*65536+Math.round(Z1(w8.g*255,0,255))*256+Math.round(Z1(w8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Z=W1.workingColorSpace){W1.workingToColorSpace(w8.copy(this),Z);let{r:Y,g:W,b:X}=w8,H=Math.max(Y,W,X),U=Math.min(Y,W,X),Q,w,G=(U+H)/2;if(U===H)Q=0,w=0;else{let K=H-U;switch(w=G<=0.5?K/(H+U):K/(2-H-U),H){case Y:Q=(W-X)/K+(W<X?6:0);break;case W:Q=(X-Y)/K+2;break;case X:Q=(Y-W)/K+4;break}Q/=6}return J.h=Q,J.s=w,J.l=G,J}getRGB(J,Z=W1.workingColorSpace){return W1.workingToColorSpace(w8.copy(this),Z),J.r=w8.r,J.g=w8.g,J.b=w8.b,J}getStyle(J="srgb"){W1.workingToColorSpace(w8.copy(this),J);let{r:Z,g:Y,b:W}=w8;if(J!=="srgb")return`color(${J} ${Z.toFixed(3)} ${Y.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Z*255)},${Math.round(Y*255)},${Math.round(W*255)})`}offsetHSL(J,Z,Y){return this.getHSL(n6),this.setHSL(n6.h+J,n6.s+Z,n6.l+Y)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Z){return this.r=J.r+Z.r,this.g=J.g+Z.g,this.b=J.b+Z.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Z){return this.r+=(J.r-this.r)*Z,this.g+=(J.g-this.g)*Z,this.b+=(J.b-this.b)*Z,this}lerpColors(J,Z,Y){return this.r=J.r+(Z.r-J.r)*Y,this.g=J.g+(Z.g-J.g)*Y,this.b=J.b+(Z.b-J.b)*Y,this}lerpHSL(J,Z){this.getHSL(n6),J.getHSL(UX);let Y=Gw(n6.h,UX.h,Z),W=Gw(n6.s,UX.s,Z),X=Gw(n6.l,UX.l,Z);return this.setHSL(Y,W,X),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Z=this.r,Y=this.g,W=this.b,X=J.elements;return this.r=X[0]*Z+X[3]*Y+X[6]*W,this.g=X[1]*Z+X[4]*Y+X[7]*W,this.b=X[2]*Z+X[5]*Y+X[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Z=0){return this.r=J[Z],this.g=J[Z+1],this.b=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.r,J[Z+1]=this.g,J[Z+2]=this.b,J}fromBufferAttribute(J,Z){return this.r=J.getX(Z),this.g=J.getY(Z),this.b=J.getZ(Z),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var w8=new t0;t0.NAMES=GO;var ZL=0;class f9 extends e6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZL++}),this.uuid=eZ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Z in J){let Y=J[Z];if(Y===void 0){console.warn(`THREE.Material: parameter '${Z}' has value of undefined.`);continue}let W=this[Z];if(W===void 0){console.warn(`THREE.Material: '${Z}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set(Y);else if(W&&W.isVector3&&(Y&&Y.isVector3))W.copy(Y);else this[Z]=Y}}toJSON(J){let Z=J===void 0||typeof J==="string";if(Z)J={textures:{},images:{}};let Y={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Y.uuid=this.uuid,Y.type=this.type,this.name!=="")Y.name=this.name;if(this.color&&this.color.isColor)Y.color=this.color.getHex();if(this.roughness!==void 0)Y.roughness=this.roughness;if(this.metalness!==void 0)Y.metalness=this.metalness;if(this.sheen!==void 0)Y.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Y.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Y.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Y.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Y.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Y.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Y.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Y.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Y.shininess=this.shininess;if(this.clearcoat!==void 0)Y.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Y.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Y.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Y.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Y.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Y.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Y.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Y.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Y.dispersion=this.dispersion;if(this.iridescence!==void 0)Y.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Y.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Y.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Y.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Y.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Y.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Y.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Y.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Y.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Y.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Y.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Y.lightMap=this.lightMap.toJSON(J).uuid,Y.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Y.aoMap=this.aoMap.toJSON(J).uuid,Y.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Y.bumpMap=this.bumpMap.toJSON(J).uuid,Y.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Y.normalMap=this.normalMap.toJSON(J).uuid,Y.normalMapType=this.normalMapType,Y.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Y.displacementMap=this.displacementMap.toJSON(J).uuid,Y.displacementScale=this.displacementScale,Y.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Y.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Y.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Y.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Y.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Y.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Y.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Y.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Y.combine=this.combine}if(this.envMapRotation!==void 0)Y.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Y.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Y.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Y.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Y.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Y.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Y.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Y.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Y.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Y.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Y.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Y.size=this.size;if(this.shadowSide!==null)Y.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Y.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Y.blending=this.blending;if(this.side!==0)Y.side=this.side;if(this.vertexColors===!0)Y.vertexColors=!0;if(this.opacity<1)Y.opacity=this.opacity;if(this.transparent===!0)Y.transparent=!0;if(this.blendSrc!==204)Y.blendSrc=this.blendSrc;if(this.blendDst!==205)Y.blendDst=this.blendDst;if(this.blendEquation!==100)Y.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Y.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Y.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Y.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Y.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Y.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Y.depthFunc=this.depthFunc;if(this.depthTest===!1)Y.depthTest=this.depthTest;if(this.depthWrite===!1)Y.depthWrite=this.depthWrite;if(this.colorWrite===!1)Y.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Y.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Y.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Y.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Y.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Y.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Y.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Y.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Y.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Y.rotation=this.rotation;if(this.polygonOffset===!0)Y.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Y.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Y.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Y.linewidth=this.linewidth;if(this.dashSize!==void 0)Y.dashSize=this.dashSize;if(this.gapSize!==void 0)Y.gapSize=this.gapSize;if(this.scale!==void 0)Y.scale=this.scale;if(this.dithering===!0)Y.dithering=!0;if(this.alphaTest>0)Y.alphaTest=this.alphaTest;if(this.alphaHash===!0)Y.alphaHash=!0;if(this.alphaToCoverage===!0)Y.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Y.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Y.forceSinglePass=!0;if(this.wireframe===!0)Y.wireframe=!0;if(this.wireframeLinewidth>1)Y.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Y.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Y.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Y.flatShading=!0;if(this.visible===!1)Y.visible=!1;if(this.toneMapped===!1)Y.toneMapped=!1;if(this.fog===!1)Y.fog=!1;if(Object.keys(this.userData).length>0)Y.userData=this.userData;function W(X){let H=[];for(let U in X){let Q=X[U];delete Q.metadata,H.push(Q)}return H}if(Z){let X=W(J.textures),H=W(J.images);if(X.length>0)Y.textures=X;if(H.length>0)Y.images=H}return Y}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Z=J.clippingPlanes,Y=null;if(Z!==null){let W=Z.length;Y=Array(W);for(let X=0;X!==W;++X)Y[X]=Z[X].clone()}return this.clippingPlanes=Y,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class yX extends f9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O7,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var i1=new v,QX=new r0,YL=0;class Q7{constructor(J,Z,Y=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YL++}),this.name="",this.array=J,this.itemSize=Z,this.count=J!==void 0?J.length/Z:0,this.normalized=Y,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Z,Y){J*=this.itemSize,Y*=Z.itemSize;for(let W=0,X=this.itemSize;W<X;W++)this.array[J+W]=Z.array[Y+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Z=0,Y=this.count;Z<Y;Z++)QX.fromBufferAttribute(this,Z),QX.applyMatrix3(J),this.setXY(Z,QX.x,QX.y);else if(this.itemSize===3)for(let Z=0,Y=this.count;Z<Y;Z++)i1.fromBufferAttribute(this,Z),i1.applyMatrix3(J),this.setXYZ(Z,i1.x,i1.y,i1.z);return this}applyMatrix4(J){for(let Z=0,Y=this.count;Z<Y;Z++)i1.fromBufferAttribute(this,Z),i1.applyMatrix4(J),this.setXYZ(Z,i1.x,i1.y,i1.z);return this}applyNormalMatrix(J){for(let Z=0,Y=this.count;Z<Y;Z++)i1.fromBufferAttribute(this,Z),i1.applyNormalMatrix(J),this.setXYZ(Z,i1.x,i1.y,i1.z);return this}transformDirection(J){for(let Z=0,Y=this.count;Z<Y;Z++)i1.fromBufferAttribute(this,Z),i1.transformDirection(J),this.setXYZ(Z,i1.x,i1.y,i1.z);return this}set(J,Z=0){return this.array.set(J,Z),this}getComponent(J,Z){let Y=this.array[J*this.itemSize+Z];if(this.normalized)Y=yZ(Y,this.array);return Y}setComponent(J,Z,Y){if(this.normalized)Y=P8(Y,this.array);return this.array[J*this.itemSize+Z]=Y,this}getX(J){let Z=this.array[J*this.itemSize];if(this.normalized)Z=yZ(Z,this.array);return Z}setX(J,Z){if(this.normalized)Z=P8(Z,this.array);return this.array[J*this.itemSize]=Z,this}getY(J){let Z=this.array[J*this.itemSize+1];if(this.normalized)Z=yZ(Z,this.array);return Z}setY(J,Z){if(this.normalized)Z=P8(Z,this.array);return this.array[J*this.itemSize+1]=Z,this}getZ(J){let Z=this.array[J*this.itemSize+2];if(this.normalized)Z=yZ(Z,this.array);return Z}setZ(J,Z){if(this.normalized)Z=P8(Z,this.array);return this.array[J*this.itemSize+2]=Z,this}getW(J){let Z=this.array[J*this.itemSize+3];if(this.normalized)Z=yZ(Z,this.array);return Z}setW(J,Z){if(this.normalized)Z=P8(Z,this.array);return this.array[J*this.itemSize+3]=Z,this}setXY(J,Z,Y){if(J*=this.itemSize,this.normalized)Z=P8(Z,this.array),Y=P8(Y,this.array);return this.array[J+0]=Z,this.array[J+1]=Y,this}setXYZ(J,Z,Y,W){if(J*=this.itemSize,this.normalized)Z=P8(Z,this.array),Y=P8(Y,this.array),W=P8(W,this.array);return this.array[J+0]=Z,this.array[J+1]=Y,this.array[J+2]=W,this}setXYZW(J,Z,Y,W,X){if(J*=this.itemSize,this.normalized)Z=P8(Z,this.array),Y=P8(Y,this.array),W=P8(W,this.array),X=P8(X,this.array);return this.array[J+0]=Z,this.array[J+1]=Y,this.array[J+2]=W,this.array[J+3]=X,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class gX extends Q7{constructor(J,Z,Y){super(new Uint16Array(J),Z,Y)}}class pX extends Q7{constructor(J,Z,Y){super(new Uint32Array(J),Z,Y)}}class g1 extends Q7{constructor(J,Z,Y){super(new Float32Array(J),Z,Y)}}var WL=0,H7=new P1,Cw=new Z8,JJ=new v,l8=new x9,mZ=new x9,J8=new v;class w7 extends e6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WL++}),this.uuid=eZ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((BG(J))?pX:gX)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Z){return this.attributes[J]=Z,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Z,Y=0){this.groups.push({start:J,count:Z,materialIndex:Y})}clearGroups(){this.groups=[]}setDrawRange(J,Z){this.drawRange.start=J,this.drawRange.count=Z}applyMatrix4(J){let Z=this.attributes.position;if(Z!==void 0)Z.applyMatrix4(J),Z.needsUpdate=!0;let Y=this.attributes.normal;if(Y!==void 0){let X=new i0().getNormalMatrix(J);Y.applyNormalMatrix(X),Y.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return H7.makeRotationFromQuaternion(J),this.applyMatrix4(H7),this}rotateX(J){return H7.makeRotationX(J),this.applyMatrix4(H7),this}rotateY(J){return H7.makeRotationY(J),this.applyMatrix4(H7),this}rotateZ(J){return H7.makeRotationZ(J),this.applyMatrix4(H7),this}translate(J,Z,Y){return H7.makeTranslation(J,Z,Y),this.applyMatrix4(H7),this}scale(J,Z,Y){return H7.makeScale(J,Z,Y),this.applyMatrix4(H7),this}lookAt(J){return Cw.lookAt(J),Cw.updateMatrix(),this.applyMatrix4(Cw.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(JJ).negate(),this.translate(JJ.x,JJ.y,JJ.z),this}setFromPoints(J){let Z=this.getAttribute("position");if(Z===void 0){let Y=[];for(let W=0,X=J.length;W<X;W++){let H=J[W];Y.push(H.x,H.y,H.z||0)}this.setAttribute("position",new g1(Y,3))}else{let Y=Math.min(J.length,Z.count);for(let W=0;W<Y;W++){let X=J[W];Z.setXYZ(W,X.x,X.y,X.z||0)}if(J.length>Z.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Z.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new x9;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Z)for(let Y=0,W=Z.length;Y<W;Y++){let X=Z[Y];if(l8.setFromBufferAttribute(X),this.morphTargetsRelative)J8.addVectors(this.boundingBox.min,l8.min),this.boundingBox.expandByPoint(J8),J8.addVectors(this.boundingBox.max,l8.max),this.boundingBox.expandByPoint(J8);else this.boundingBox.expandByPoint(l8.min),this.boundingBox.expandByPoint(l8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ZY;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let Y=this.boundingSphere.center;if(l8.setFromBufferAttribute(J),Z)for(let X=0,H=Z.length;X<H;X++){let U=Z[X];if(mZ.setFromBufferAttribute(U),this.morphTargetsRelative)J8.addVectors(l8.min,mZ.min),l8.expandByPoint(J8),J8.addVectors(l8.max,mZ.max),l8.expandByPoint(J8);else l8.expandByPoint(mZ.min),l8.expandByPoint(mZ.max)}l8.getCenter(Y);let W=0;for(let X=0,H=J.count;X<H;X++)J8.fromBufferAttribute(J,X),W=Math.max(W,Y.distanceToSquared(J8));if(Z)for(let X=0,H=Z.length;X<H;X++){let U=Z[X],Q=this.morphTargetsRelative;for(let w=0,G=U.count;w<G;w++){if(J8.fromBufferAttribute(U,w),Q)JJ.fromBufferAttribute(J,w),J8.add(JJ);W=Math.max(W,Y.distanceToSquared(J8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Z=this.attributes;if(J===null||Z.position===void 0||Z.normal===void 0||Z.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Y,normal:W,uv:X}=Z;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Q7(new Float32Array(4*Y.count),4));let H=this.getAttribute("tangent"),U=[],Q=[];for(let A=0;A<Y.count;A++)U[A]=new v,Q[A]=new v;let w=new v,G=new v,K=new v,z=new r0,D=new r0,R=new r0,q=new v,L=new v;function O(A,f,B){w.fromBufferAttribute(Y,A),G.fromBufferAttribute(Y,f),K.fromBufferAttribute(Y,B),z.fromBufferAttribute(X,A),D.fromBufferAttribute(X,f),R.fromBufferAttribute(X,B),G.sub(w),K.sub(w),D.sub(z),R.sub(z);let V=1/(D.x*R.y-R.x*D.y);if(!isFinite(V))return;q.copy(G).multiplyScalar(R.y).addScaledVector(K,-D.y).multiplyScalar(V),L.copy(K).multiplyScalar(D.x).addScaledVector(G,-R.x).multiplyScalar(V),U[A].add(q),U[f].add(q),U[B].add(q),Q[A].add(L),Q[f].add(L),Q[B].add(L)}let $=this.groups;if($.length===0)$=[{start:0,count:J.count}];for(let A=0,f=$.length;A<f;++A){let B=$[A],V=B.start,T=B.count;for(let b=V,g=V+T;b<g;b+=3)O(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let F=new v,N=new v,M=new v,I=new v;function E(A){M.fromBufferAttribute(W,A),I.copy(M);let f=U[A];F.copy(f),F.sub(M.multiplyScalar(M.dot(f))).normalize(),N.crossVectors(I,f);let V=N.dot(Q[A])<0?-1:1;H.setXYZW(A,F.x,F.y,F.z,V)}for(let A=0,f=$.length;A<f;++A){let B=$[A],V=B.start,T=B.count;for(let b=V,g=V+T;b<g;b+=3)E(J.getX(b+0)),E(J.getX(b+1)),E(J.getX(b+2))}}computeVertexNormals(){let J=this.index,Z=this.getAttribute("position");if(Z!==void 0){let Y=this.getAttribute("normal");if(Y===void 0)Y=new Q7(new Float32Array(Z.count*3),3),this.setAttribute("normal",Y);else for(let z=0,D=Y.count;z<D;z++)Y.setXYZ(z,0,0,0);let W=new v,X=new v,H=new v,U=new v,Q=new v,w=new v,G=new v,K=new v;if(J)for(let z=0,D=J.count;z<D;z+=3){let R=J.getX(z+0),q=J.getX(z+1),L=J.getX(z+2);W.fromBufferAttribute(Z,R),X.fromBufferAttribute(Z,q),H.fromBufferAttribute(Z,L),G.subVectors(H,X),K.subVectors(W,X),G.cross(K),U.fromBufferAttribute(Y,R),Q.fromBufferAttribute(Y,q),w.fromBufferAttribute(Y,L),U.add(G),Q.add(G),w.add(G),Y.setXYZ(R,U.x,U.y,U.z),Y.setXYZ(q,Q.x,Q.y,Q.z),Y.setXYZ(L,w.x,w.y,w.z)}else for(let z=0,D=Z.count;z<D;z+=3)W.fromBufferAttribute(Z,z+0),X.fromBufferAttribute(Z,z+1),H.fromBufferAttribute(Z,z+2),G.subVectors(H,X),K.subVectors(W,X),G.cross(K),Y.setXYZ(z+0,G.x,G.y,G.z),Y.setXYZ(z+1,G.x,G.y,G.z),Y.setXYZ(z+2,G.x,G.y,G.z);this.normalizeNormals(),Y.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Z=0,Y=J.count;Z<Y;Z++)J8.fromBufferAttribute(J,Z),J8.normalize(),J.setXYZ(Z,J8.x,J8.y,J8.z)}toNonIndexed(){function J(U,Q){let{array:w,itemSize:G,normalized:K}=U,z=new w.constructor(Q.length*G),D=0,R=0;for(let q=0,L=Q.length;q<L;q++){if(U.isInterleavedBufferAttribute)D=Q[q]*U.data.stride+U.offset;else D=Q[q]*G;for(let O=0;O<G;O++)z[R++]=w[D++]}return new Q7(z,G,K)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Z=new w7,Y=this.index.array,W=this.attributes;for(let U in W){let Q=W[U],w=J(Q,Y);Z.setAttribute(U,w)}let X=this.morphAttributes;for(let U in X){let Q=[],w=X[U];for(let G=0,K=w.length;G<K;G++){let z=w[G],D=J(z,Y);Q.push(D)}Z.morphAttributes[U]=Q}Z.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let U=0,Q=H.length;U<Q;U++){let w=H[U];Z.addGroup(w.start,w.count,w.materialIndex)}return Z}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Q=this.parameters;for(let w in Q)if(Q[w]!==void 0)J[w]=Q[w];return J}J.data={attributes:{}};let Z=this.index;if(Z!==null)J.data.index={type:Z.array.constructor.name,array:Array.prototype.slice.call(Z.array)};let Y=this.attributes;for(let Q in Y){let w=Y[Q];J.data.attributes[Q]=w.toJSON(J.data)}let W={},X=!1;for(let Q in this.morphAttributes){let w=this.morphAttributes[Q],G=[];for(let K=0,z=w.length;K<z;K++){let D=w[K];G.push(D.toJSON(J.data))}if(G.length>0)W[Q]=G,X=!0}if(X)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let U=this.boundingSphere;if(U!==null)J.data.boundingSphere=U.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Z={};this.name=J.name;let Y=J.index;if(Y!==null)this.setIndex(Y.clone());let W=J.attributes;for(let w in W){let G=W[w];this.setAttribute(w,G.clone(Z))}let X=J.morphAttributes;for(let w in X){let G=[],K=X[w];for(let z=0,D=K.length;z<D;z++)G.push(K[z].clone(Z));this.morphAttributes[w]=G}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let w=0,G=H.length;w<G;w++){let K=H[w];this.addGroup(K.start,K.count,K.materialIndex)}let U=J.boundingBox;if(U!==null)this.boundingBox=U.clone();let Q=J.boundingSphere;if(Q!==null)this.boundingSphere=Q.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var eR=new P1,I9=new EG,wX=new ZY,JN=new v,GX=new v,$X=new v,KX=new v,Tw=new v,DX=new v,ZN=new v,zX=new v;class l0 extends Z8{constructor(J=new w7,Z=new yX){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Z,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Z){if(super.copy(J,Z),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Z=this.geometry.morphAttributes,Y=Object.keys(Z);if(Y.length>0){let W=Z[Y[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let X=0,H=W.length;X<H;X++){let U=W[X].name||String(X);this.morphTargetInfluences.push(0),this.morphTargetDictionary[U]=X}}}}getVertexPosition(J,Z){let Y=this.geometry,W=Y.attributes.position,X=Y.morphAttributes.position,H=Y.morphTargetsRelative;Z.fromBufferAttribute(W,J);let U=this.morphTargetInfluences;if(X&&U){DX.set(0,0,0);for(let Q=0,w=X.length;Q<w;Q++){let G=U[Q],K=X[Q];if(G===0)continue;if(Tw.fromBufferAttribute(K,J),H)DX.addScaledVector(Tw,G);else DX.addScaledVector(Tw.sub(Z),G)}Z.add(DX)}return Z}raycast(J,Z){let Y=this.geometry,W=this.material,X=this.matrixWorld;if(W===void 0)return;if(Y.boundingSphere===null)Y.computeBoundingSphere();if(wX.copy(Y.boundingSphere),wX.applyMatrix4(X),I9.copy(J.ray).recast(J.near),wX.containsPoint(I9.origin)===!1){if(I9.intersectSphere(wX,JN)===null)return;if(I9.origin.distanceToSquared(JN)>(J.far-J.near)**2)return}if(eR.copy(X).invert(),I9.copy(J.ray).applyMatrix4(eR),Y.boundingBox!==null){if(I9.intersectsBox(Y.boundingBox)===!1)return}this._computeIntersections(J,Z,I9)}_computeIntersections(J,Z,Y){let W,X=this.geometry,H=this.material,U=X.index,Q=X.attributes.position,w=X.attributes.uv,G=X.attributes.uv1,K=X.attributes.normal,z=X.groups,D=X.drawRange;if(U!==null)if(Array.isArray(H))for(let R=0,q=z.length;R<q;R++){let L=z[R],O=H[L.materialIndex],$=Math.max(L.start,D.start),F=Math.min(U.count,Math.min(L.start+L.count,D.start+D.count));for(let N=$,M=F;N<M;N+=3){let I=U.getX(N),E=U.getX(N+1),A=U.getX(N+2);if(W=RX(this,O,J,Y,w,G,K,I,E,A),W)W.faceIndex=Math.floor(N/3),W.face.materialIndex=L.materialIndex,Z.push(W)}}else{let R=Math.max(0,D.start),q=Math.min(U.count,D.start+D.count);for(let L=R,O=q;L<O;L+=3){let $=U.getX(L),F=U.getX(L+1),N=U.getX(L+2);if(W=RX(this,H,J,Y,w,G,K,$,F,N),W)W.faceIndex=Math.floor(L/3),Z.push(W)}}else if(Q!==void 0)if(Array.isArray(H))for(let R=0,q=z.length;R<q;R++){let L=z[R],O=H[L.materialIndex],$=Math.max(L.start,D.start),F=Math.min(Q.count,Math.min(L.start+L.count,D.start+D.count));for(let N=$,M=F;N<M;N+=3){let I=N,E=N+1,A=N+2;if(W=RX(this,O,J,Y,w,G,K,I,E,A),W)W.faceIndex=Math.floor(N/3),W.face.materialIndex=L.materialIndex,Z.push(W)}}else{let R=Math.max(0,D.start),q=Math.min(Q.count,D.start+D.count);for(let L=R,O=q;L<O;L+=3){let $=L,F=L+1,N=L+2;if(W=RX(this,H,J,Y,w,G,K,$,F,N),W)W.faceIndex=Math.floor(L/3),Z.push(W)}}}}function XL(J,Z,Y,W,X,H,U,Q){let w;if(Z.side===1)w=W.intersectTriangle(U,H,X,!0,Q);else w=W.intersectTriangle(X,H,U,Z.side===0,Q);if(w===null)return null;zX.copy(Q),zX.applyMatrix4(J.matrixWorld);let G=Y.ray.origin.distanceTo(zX);if(G<Y.near||G>Y.far)return null;return{distance:G,point:zX.clone(),object:J}}function RX(J,Z,Y,W,X,H,U,Q,w,G){J.getVertexPosition(Q,GX),J.getVertexPosition(w,$X),J.getVertexPosition(G,KX);let K=XL(J,Z,Y,W,GX,$X,KX,ZN);if(K){let z=new v;if(U7.getBarycoord(ZN,GX,$X,KX,z),X)K.uv=U7.getInterpolatedAttribute(X,Q,w,G,z,new r0);if(H)K.uv1=U7.getInterpolatedAttribute(H,Q,w,G,z,new r0);if(U){if(K.normal=U7.getInterpolatedAttribute(U,Q,w,G,z,new v),K.normal.dot(W.direction)>0)K.normal.multiplyScalar(-1)}let D={a:Q,b:w,c:G,normal:new v,materialIndex:0};U7.getNormal(GX,$X,KX,D.normal),K.face=D,K.barycoord=z}return K}class F1 extends w7{constructor(J=1,Z=1,Y=1,W=1,X=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Z,depth:Y,widthSegments:W,heightSegments:X,depthSegments:H};let U=this;W=Math.floor(W),X=Math.floor(X),H=Math.floor(H);let Q=[],w=[],G=[],K=[],z=0,D=0;R("z","y","x",-1,-1,Y,Z,J,H,X,0),R("z","y","x",1,-1,Y,Z,-J,H,X,1),R("x","z","y",1,1,J,Y,Z,W,H,2),R("x","z","y",1,-1,J,Y,-Z,W,H,3),R("x","y","z",1,-1,J,Z,Y,W,X,4),R("x","y","z",-1,-1,J,Z,-Y,W,X,5),this.setIndex(Q),this.setAttribute("position",new g1(w,3)),this.setAttribute("normal",new g1(G,3)),this.setAttribute("uv",new g1(K,2));function R(q,L,O,$,F,N,M,I,E,A,f){let B=N/E,V=M/A,T=N/2,b=M/2,g=I/2,l=E+1,Y0=A+1,n=0,c=0,i=new v;for(let N0=0;N0<Y0;N0++){let M0=N0*V-b;for(let d0=0;d0<l;d0++){let f0=d0*B-T;i[q]=f0*$,i[L]=M0*F,i[O]=g,w.push(i.x,i.y,i.z),i[q]=0,i[L]=0,i[O]=I>0?1:-1,G.push(i.x,i.y,i.z),K.push(d0/E),K.push(1-N0/A),n+=1}}for(let N0=0;N0<A;N0++)for(let M0=0;M0<E;M0++){let d0=z+M0+l*N0,f0=z+M0+l*(N0+1),w1=z+(M0+1)+l*(N0+1),m0=z+(M0+1)+l*N0;Q.push(d0,f0,m0),Q.push(f0,w1,m0),c+=6}U.addGroup(D,c,f),D+=c,z+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new F1(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function j9(J){let Z={};for(let Y in J){Z[Y]={};for(let W in J[Y]){let X=J[Y][W];if(X&&(X.isColor||X.isMatrix3||X.isMatrix4||X.isVector2||X.isVector3||X.isVector4||X.isTexture||X.isQuaternion))if(X.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[Y][W]=null;else Z[Y][W]=X.clone();else if(Array.isArray(X))Z[Y][W]=X.slice();else Z[Y][W]=X}}return Z}function K8(J){let Z={};for(let Y=0;Y<J.length;Y++){let W=j9(J[Y]);for(let X in W)Z[X]=W[X]}return Z}function HL(J){let Z=[];for(let Y=0;Y<J.length;Y++)Z.push(J[Y].clone());return Z}function IG(J){let Z=J.getRenderTarget();if(Z===null)return J.outputColorSpace;if(Z.isXRRenderTarget===!0)return Z.texture.colorSpace;return W1.workingColorSpace}var $O={clone:j9,merge:K8},UL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class P7 extends f9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UL,this.fragmentShader=QL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=j9(J.uniforms),this.uniformsGroups=HL(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Z=super.toJSON(J);Z.glslVersion=this.glslVersion,Z.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Z.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Z.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Z.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Z.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Z.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Z.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Z.uniforms[W]={type:"m4",value:H.toArray()};else Z.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Z.defines=this.defines;Z.vertexShader=this.vertexShader,Z.fragmentShader=this.fragmentShader,Z.lights=this.lights,Z.clipping=this.clipping;let Y={};for(let W in this.extensions)if(this.extensions[W]===!0)Y[W]=!0;if(Object.keys(Y).length>0)Z.extensions=Y;return Z}}class dX extends Z8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new P1,this.projectionMatrix=new P1,this.projectionMatrixInverse=new P1,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Z){return super.copy(J,Z),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Z){super.updateWorldMatrix(J,Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var o6=new v,YN=new r0,WN=new r0;class G8 extends dX{constructor(J=50,Z=1,Y=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Y,this.far=W,this.focus=10,this.aspect=Z,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Z=0.5*this.getFilmHeight()/J;this.fov=FX*2*Math.atan(Z),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(ww*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return FX*2*Math.atan(Math.tan(ww*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Z,Y){o6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(o6.x,o6.y).multiplyScalar(-J/o6.z),o6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Y.set(o6.x,o6.y).multiplyScalar(-J/o6.z)}getViewSize(J,Z){return this.getViewBounds(J,YN,WN),Z.subVectors(WN,YN)}setViewOffset(J,Z,Y,W,X,H){if(this.aspect=J/Z,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Y,this.view.offsetY=W,this.view.width=X,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Z=J*Math.tan(ww*0.5*this.fov)/this.zoom,Y=2*Z,W=this.aspect*Y,X=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Q,fullHeight:w}=H;X+=H.offsetX*W/Q,Z-=H.offsetY*Y/w,W*=H.width/Q,Y*=H.height/w}let U=this.filmOffset;if(U!==0)X+=J*U/this.getFilmWidth();this.projectionMatrix.makePerspective(X,X+W,Z,Z-Y,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.fov=this.fov,Z.object.zoom=this.zoom,Z.object.near=this.near,Z.object.far=this.far,Z.object.focus=this.focus,Z.object.aspect=this.aspect,this.view!==null)Z.object.view=Object.assign({},this.view);return Z.object.filmGauge=this.filmGauge,Z.object.filmOffset=this.filmOffset,Z}}var ZJ=-90,YJ=1;class CG extends Z8{constructor(J,Z,Y){super();this.type="CubeCamera",this.renderTarget=Y,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new G8(ZJ,YJ,J,Z);W.layers=this.layers,this.add(W);let X=new G8(ZJ,YJ,J,Z);X.layers=this.layers,this.add(X);let H=new G8(ZJ,YJ,J,Z);H.layers=this.layers,this.add(H);let U=new G8(ZJ,YJ,J,Z);U.layers=this.layers,this.add(U);let Q=new G8(ZJ,YJ,J,Z);Q.layers=this.layers,this.add(Q);let w=new G8(ZJ,YJ,J,Z);w.layers=this.layers,this.add(w)}updateCoordinateSystem(){let J=this.coordinateSystem,Z=this.children.concat(),[Y,W,X,H,U,Q]=Z;for(let w of Z)this.remove(w);if(J===2000)Y.up.set(0,1,0),Y.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),X.up.set(0,0,-1),X.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),U.up.set(0,1,0),U.lookAt(0,0,1),Q.up.set(0,1,0),Q.lookAt(0,0,-1);else if(J===2001)Y.up.set(0,-1,0),Y.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),X.up.set(0,0,1),X.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),U.up.set(0,-1,0),U.lookAt(0,0,1),Q.up.set(0,-1,0),Q.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let w of Z)this.add(w),w.updateMatrixWorld()}update(J,Z){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Y,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[X,H,U,Q,w,G]=this.children,K=J.getRenderTarget(),z=J.getActiveCubeFace(),D=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let q=Y.texture.generateMipmaps;Y.texture.generateMipmaps=!1,J.setRenderTarget(Y,0,W),J.render(Z,X),J.setRenderTarget(Y,1,W),J.render(Z,H),J.setRenderTarget(Y,2,W),J.render(Z,U),J.setRenderTarget(Y,3,W),J.render(Z,Q),J.setRenderTarget(Y,4,W),J.render(Z,w),Y.texture.generateMipmaps=q,J.setRenderTarget(Y,5,W),J.render(Z,G),J.setRenderTarget(K,z,D),J.xr.enabled=R,Y.texture.needsPMREMUpdate=!0}}class mX extends F8{constructor(J=[],Z=301,Y,W,X,H,U,Q,w,G){super(J,Z,Y,W,X,H,U,Q,w,G);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class TG extends Q6{constructor(J=1,Z={}){super(J,J,Z);this.isWebGLCubeRenderTarget=!0;let Y={width:J,height:J,depth:1},W=[Y,Y,Y,Y,Y,Y];this.texture=new mX(W),this._setTextureOptions(Z),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Z){this.texture.type=Z.type,this.texture.colorSpace=Z.colorSpace,this.texture.generateMipmaps=Z.generateMipmaps,this.texture.minFilter=Z.minFilter,this.texture.magFilter=Z.magFilter;let Y={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},W=new F1(5,5,5),X=new P7({name:"CubemapFromEquirect",uniforms:j9(Y.uniforms),vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader,side:1,blending:0});X.uniforms.tEquirect.value=Z;let H=new l0(W,X),U=Z.minFilter;if(Z.minFilter===1008)Z.minFilter=1006;return new CG(1,10,this).update(J,H),Z.minFilter=U,H.geometry.dispose(),H.material.dispose(),this}clear(J,Z=!0,Y=!0,W=!0){let X=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Z,Y,W);J.setRenderTarget(X)}}class $8 extends Z8{constructor(){super();this.isGroup=!0,this.type="Group"}}var wL={type:"move"};class YY{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new $8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new $8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new $8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Z=this._hand;if(Z)for(let Y of J.hand.values())this._getHandJoint(Z,Y)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Z,Y){let W=null,X=null,H=null,U=this._targetRay,Q=this._grip,w=this._hand;if(J&&Z.session.visibilityState!=="visible-blurred"){if(w&&J.hand){H=!0;for(let q of J.hand.values()){let L=Z.getJointPose(q,Y),O=this._getHandJoint(w,q);if(L!==null)O.matrix.fromArray(L.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=L.radius;O.visible=L!==null}let G=w.joints["index-finger-tip"],K=w.joints["thumb-tip"],z=G.position.distanceTo(K.position),D=0.02,R=0.005;if(w.inputState.pinching&&z>D+R)w.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!w.inputState.pinching&&z<=D-R)w.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Q!==null&&J.gripSpace){if(X=Z.getPose(J.gripSpace,Y),X!==null){if(Q.matrix.fromArray(X.transform.matrix),Q.matrix.decompose(Q.position,Q.rotation,Q.scale),Q.matrixWorldNeedsUpdate=!0,X.linearVelocity)Q.hasLinearVelocity=!0,Q.linearVelocity.copy(X.linearVelocity);else Q.hasLinearVelocity=!1;if(X.angularVelocity)Q.hasAngularVelocity=!0,Q.angularVelocity.copy(X.angularVelocity);else Q.hasAngularVelocity=!1}}if(U!==null){if(W=Z.getPose(J.targetRaySpace,Y),W===null&&X!==null)W=X;if(W!==null){if(U.matrix.fromArray(W.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,W.linearVelocity)U.hasLinearVelocity=!0,U.linearVelocity.copy(W.linearVelocity);else U.hasLinearVelocity=!1;if(W.angularVelocity)U.hasAngularVelocity=!0,U.angularVelocity.copy(W.angularVelocity);else U.hasAngularVelocity=!1;this.dispatchEvent(wL)}}}if(U!==null)U.visible=W!==null;if(Q!==null)Q.visible=X!==null;if(w!==null)w.visible=H!==null;return this}_getHandJoint(J,Z){if(J.joints[Z.jointName]===void 0){let Y=new $8;Y.matrixAutoUpdate=!1,Y.visible=!1,J.joints[Z.jointName]=Y,J.add(Y)}return J.joints[Z.jointName]}}class WY{constructor(J,Z=1,Y=1000){this.isFog=!0,this.name="",this.color=new t0(J),this.near=Z,this.far=Y}clone(){return new WY(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uX extends Z8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O7,this.environmentIntensity=1,this.environmentRotation=new O7,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Z){if(super.copy(J,Z),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Z=super.toJSON(J);if(this.fog!==null)Z.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Z.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Z.object.backgroundIntensity=this.backgroundIntensity;if(Z.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Z.object.environmentIntensity=this.environmentIntensity;return Z.object.environmentRotation=this.environmentRotation.toArray(),Z}}var Pw=new v,GL=new v,$L=new i0;class X6{constructor(J=new v(1,0,0),Z=0){this.isPlane=!0,this.normal=J,this.constant=Z}set(J,Z){return this.normal.copy(J),this.constant=Z,this}setComponents(J,Z,Y,W){return this.normal.set(J,Z,Y),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Z){return this.normal.copy(J),this.constant=-Z.dot(this.normal),this}setFromCoplanarPoints(J,Z,Y){let W=Pw.subVectors(Y,Z).cross(GL.subVectors(J,Z)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Z){return Z.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Z){let Y=J.delta(Pw),W=this.normal.dot(Y);if(W===0){if(this.distanceToPoint(J.start)===0)return Z.copy(J.start);return null}let X=-(J.start.dot(this.normal)+this.constant)/W;if(X<0||X>1)return null;return Z.copy(J.start).addScaledVector(Y,X)}intersectsLine(J){let Z=this.distanceToPoint(J.start),Y=this.distanceToPoint(J.end);return Z<0&&Y>0||Y<0&&Z>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Z){let Y=Z||$L.getNormalMatrix(J),W=this.coplanarPoint(Pw).applyMatrix4(J),X=this.normal.applyMatrix3(Y).normalize();return this.constant=-W.dot(X),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var C9=new ZY,KL=new r0(0.5,0.5),NX=new v;class XY{constructor(J=new X6,Z=new X6,Y=new X6,W=new X6,X=new X6,H=new X6){this.planes=[J,Z,Y,W,X,H]}set(J,Z,Y,W,X,H){let U=this.planes;return U[0].copy(J),U[1].copy(Z),U[2].copy(Y),U[3].copy(W),U[4].copy(X),U[5].copy(H),this}copy(J){let Z=this.planes;for(let Y=0;Y<6;Y++)Z[Y].copy(J.planes[Y]);return this}setFromProjectionMatrix(J,Z=2000,Y=!1){let W=this.planes,X=J.elements,H=X[0],U=X[1],Q=X[2],w=X[3],G=X[4],K=X[5],z=X[6],D=X[7],R=X[8],q=X[9],L=X[10],O=X[11],$=X[12],F=X[13],N=X[14],M=X[15];if(W[0].setComponents(w-H,D-G,O-R,M-$).normalize(),W[1].setComponents(w+H,D+G,O+R,M+$).normalize(),W[2].setComponents(w+U,D+K,O+q,M+F).normalize(),W[3].setComponents(w-U,D-K,O-q,M-F).normalize(),Y)W[4].setComponents(Q,z,L,N).normalize(),W[5].setComponents(w-Q,D-z,O-L,M-N).normalize();else if(W[4].setComponents(w-Q,D-z,O-L,M-N).normalize(),Z===2000)W[5].setComponents(w+Q,D+z,O+L,M+N).normalize();else if(Z===2001)W[5].setComponents(Q,z,L,N).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Z);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();C9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Z=J.geometry;if(Z.boundingSphere===null)Z.computeBoundingSphere();C9.copy(Z.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(C9)}intersectsSprite(J){C9.center.set(0,0,0);let Z=KL.distanceTo(J.center);return C9.radius=0.7071067811865476+Z,C9.applyMatrix4(J.matrixWorld),this.intersectsSphere(C9)}intersectsSphere(J){let Z=this.planes,Y=J.center,W=-J.radius;for(let X=0;X<6;X++)if(Z[X].distanceToPoint(Y)<W)return!1;return!0}intersectsBox(J){let Z=this.planes;for(let Y=0;Y<6;Y++){let W=Z[Y];if(NX.x=W.normal.x>0?J.max.x:J.min.x,NX.y=W.normal.y>0?J.max.y:J.min.y,NX.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(NX)<0)return!1}return!0}containsPoint(J){let Z=this.planes;for(let Y=0;Y<6;Y++)if(Z[Y].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lX extends F8{constructor(J,Z,Y=1014,W,X,H,U=1003,Q=1003,w,G=1026,K=1){if(G!==1026&&G!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let z={width:J,height:Z,depth:K};super(z,W,X,H,U,Q,G,Y,w);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new JY(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Z=super.toJSON(J);if(this.compareFunction!==null)Z.compareFunction=this.compareFunction;return Z}}class cX extends F8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Z9 extends w7{constructor(J=1,Z=1,Y=1,W=32,X=1,H=!1,U=0,Q=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Z,height:Y,radialSegments:W,heightSegments:X,openEnded:H,thetaStart:U,thetaLength:Q};let w=this;W=Math.floor(W),X=Math.floor(X);let G=[],K=[],z=[],D=[],R=0,q=[],L=Y/2,O=0;if($(),H===!1){if(J>0)F(!0);if(Z>0)F(!1)}this.setIndex(G),this.setAttribute("position",new g1(K,3)),this.setAttribute("normal",new g1(z,3)),this.setAttribute("uv",new g1(D,2));function $(){let N=new v,M=new v,I=0,E=(Z-J)/Y;for(let A=0;A<=X;A++){let f=[],B=A/X,V=B*(Z-J)+J;for(let T=0;T<=W;T++){let b=T/W,g=b*Q+U,l=Math.sin(g),Y0=Math.cos(g);M.x=V*l,M.y=-B*Y+L,M.z=V*Y0,K.push(M.x,M.y,M.z),N.set(l,E,Y0).normalize(),z.push(N.x,N.y,N.z),D.push(b,1-B),f.push(R++)}q.push(f)}for(let A=0;A<W;A++)for(let f=0;f<X;f++){let B=q[f][A],V=q[f+1][A],T=q[f+1][A+1],b=q[f][A+1];if(J>0||f!==0)G.push(B,V,b),I+=3;if(Z>0||f!==X-1)G.push(V,T,b),I+=3}w.addGroup(O,I,0),O+=I}function F(N){let M=R,I=new r0,E=new v,A=0,f=N===!0?J:Z,B=N===!0?1:-1;for(let T=1;T<=W;T++)K.push(0,L*B,0),z.push(0,B,0),D.push(0.5,0.5),R++;let V=R;for(let T=0;T<=W;T++){let g=T/W*Q+U,l=Math.cos(g),Y0=Math.sin(g);E.x=f*Y0,E.y=L*B,E.z=f*l,K.push(E.x,E.y,E.z),z.push(0,B,0),I.x=l*0.5+0.5,I.y=Y0*0.5*B+0.5,D.push(I.x,I.y),R++}for(let T=0;T<W;T++){let b=M+T,g=V+T;if(N===!0)G.push(g,g+1,b);else G.push(g+1,g,b);A+=3}w.addGroup(O,A,N===!0?1:2),O+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Z9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class DJ extends Z9{constructor(J=1,Z=1,Y=32,W=1,X=!1,H=0,U=Math.PI*2){super(0,J,Z,Y,W,X,H,U);this.type="ConeGeometry",this.parameters={radius:J,height:Z,radialSegments:Y,heightSegments:W,openEnded:X,thetaStart:H,thetaLength:U}}static fromJSON(J){return new DJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class iX extends w7{constructor(J=[],Z=[],Y=1,W=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Z,radius:Y,detail:W};let X=[],H=[];if(U(W),w(Y),G(),this.setAttribute("position",new g1(X,3)),this.setAttribute("normal",new g1(X.slice(),3)),this.setAttribute("uv",new g1(H,2)),W===0)this.computeVertexNormals();else this.normalizeNormals();function U($){let F=new v,N=new v,M=new v;for(let I=0;I<Z.length;I+=3)D(Z[I+0],F),D(Z[I+1],N),D(Z[I+2],M),Q(F,N,M,$)}function Q($,F,N,M){let I=M+1,E=[];for(let A=0;A<=I;A++){E[A]=[];let f=$.clone().lerp(N,A/I),B=F.clone().lerp(N,A/I),V=I-A;for(let T=0;T<=V;T++)if(T===0&&A===I)E[A][T]=f;else E[A][T]=f.clone().lerp(B,T/V)}for(let A=0;A<I;A++)for(let f=0;f<2*(I-A)-1;f++){let B=Math.floor(f/2);if(f%2===0)z(E[A][B+1]),z(E[A+1][B]),z(E[A][B]);else z(E[A][B+1]),z(E[A+1][B+1]),z(E[A+1][B])}}function w($){let F=new v;for(let N=0;N<X.length;N+=3)F.x=X[N+0],F.y=X[N+1],F.z=X[N+2],F.normalize().multiplyScalar($),X[N+0]=F.x,X[N+1]=F.y,X[N+2]=F.z}function G(){let $=new v;for(let F=0;F<X.length;F+=3){$.x=X[F+0],$.y=X[F+1],$.z=X[F+2];let N=L($)/2/Math.PI+0.5,M=O($)/Math.PI+0.5;H.push(N,1-M)}R(),K()}function K(){for(let $=0;$<H.length;$+=6){let F=H[$+0],N=H[$+2],M=H[$+4],I=Math.max(F,N,M),E=Math.min(F,N,M);if(I>0.9&&E<0.1){if(F<0.2)H[$+0]+=1;if(N<0.2)H[$+2]+=1;if(M<0.2)H[$+4]+=1}}}function z($){X.push($.x,$.y,$.z)}function D($,F){let N=$*3;F.x=J[N+0],F.y=J[N+1],F.z=J[N+2]}function R(){let $=new v,F=new v,N=new v,M=new v,I=new r0,E=new r0,A=new r0;for(let f=0,B=0;f<X.length;f+=9,B+=6){$.set(X[f+0],X[f+1],X[f+2]),F.set(X[f+3],X[f+4],X[f+5]),N.set(X[f+6],X[f+7],X[f+8]),I.set(H[B+0],H[B+1]),E.set(H[B+2],H[B+3]),A.set(H[B+4],H[B+5]),M.copy($).add(F).add(N).divideScalar(3);let V=L(M);q(I,B+0,$,V),q(E,B+2,F,V),q(A,B+4,N,V)}}function q($,F,N,M){if(M<0&&$.x===1)H[F]=$.x-1;if(N.x===0&&N.z===0)H[F]=M/2/Math.PI+0.5}function L($){return Math.atan2($.z,-$.x)}function O($){return Math.atan2(-$.y,Math.sqrt($.x*$.x+$.z*$.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new iX(J.vertices,J.indices,J.radius,J.details)}}class HY extends iX{constructor(J=1,Z=0){let Y=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],W=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(Y,W,J,Z);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Z}}static fromJSON(J){return new HY(J.radius,J.detail)}}class b9 extends w7{constructor(J=1,Z=1,Y=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Z,widthSegments:Y,heightSegments:W};let X=J/2,H=Z/2,U=Math.floor(Y),Q=Math.floor(W),w=U+1,G=Q+1,K=J/U,z=Z/Q,D=[],R=[],q=[],L=[];for(let O=0;O<G;O++){let $=O*z-H;for(let F=0;F<w;F++){let N=F*K-X;R.push(N,-$,0),q.push(0,0,1),L.push(F/U),L.push(1-O/Q)}}for(let O=0;O<Q;O++)for(let $=0;$<U;$++){let F=$+w*O,N=$+w*(O+1),M=$+1+w*(O+1),I=$+1+w*O;D.push(F,N,I),D.push(N,M,I)}this.setIndex(D),this.setAttribute("position",new g1(R,3)),this.setAttribute("normal",new g1(q,3)),this.setAttribute("uv",new g1(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b9(J.width,J.height,J.widthSegments,J.heightSegments)}}class h9 extends w7{constructor(J=1,Z=32,Y=16,W=0,X=Math.PI*2,H=0,U=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Z,heightSegments:Y,phiStart:W,phiLength:X,thetaStart:H,thetaLength:U},Z=Math.max(3,Math.floor(Z)),Y=Math.max(2,Math.floor(Y));let Q=Math.min(H+U,Math.PI),w=0,G=[],K=new v,z=new v,D=[],R=[],q=[],L=[];for(let O=0;O<=Y;O++){let $=[],F=O/Y,N=0;if(O===0&&H===0)N=0.5/Z;else if(O===Y&&Q===Math.PI)N=-0.5/Z;for(let M=0;M<=Z;M++){let I=M/Z;K.x=-J*Math.cos(W+I*X)*Math.sin(H+F*U),K.y=J*Math.cos(H+F*U),K.z=J*Math.sin(W+I*X)*Math.sin(H+F*U),R.push(K.x,K.y,K.z),z.copy(K).normalize(),q.push(z.x,z.y,z.z),L.push(I+N,1-F),$.push(w++)}G.push($)}for(let O=0;O<Y;O++)for(let $=0;$<Z;$++){let F=G[O][$+1],N=G[O][$],M=G[O+1][$],I=G[O+1][$+1];if(O!==0||H>0)D.push(F,N,I);if(O!==Y-1||Q<Math.PI)D.push(N,M,I)}this.setIndex(D),this.setAttribute("position",new g1(R,3)),this.setAttribute("normal",new g1(q,3)),this.setAttribute("uv",new g1(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class zJ extends w7{constructor(J=1,Z=0.4,Y=12,W=48,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Z,radialSegments:Y,tubularSegments:W,arc:X},Y=Math.floor(Y),W=Math.floor(W);let H=[],U=[],Q=[],w=[],G=new v,K=new v,z=new v;for(let D=0;D<=Y;D++)for(let R=0;R<=W;R++){let q=R/W*X,L=D/Y*Math.PI*2;K.x=(J+Z*Math.cos(L))*Math.cos(q),K.y=(J+Z*Math.cos(L))*Math.sin(q),K.z=Z*Math.sin(L),U.push(K.x,K.y,K.z),G.x=J*Math.cos(q),G.y=J*Math.sin(q),z.subVectors(K,G).normalize(),Q.push(z.x,z.y,z.z),w.push(R/W),w.push(D/Y)}for(let D=1;D<=Y;D++)for(let R=1;R<=W;R++){let q=(W+1)*D+R-1,L=(W+1)*(D-1)+R-1,O=(W+1)*(D-1)+R,$=(W+1)*D+R;H.push(q,L,$),H.push(L,O,$)}this.setIndex(H),this.setAttribute("position",new g1(U,3)),this.setAttribute("normal",new g1(Q,3)),this.setAttribute("uv",new g1(w,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new zJ(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class v9 extends f9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new t0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new r0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O7,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class PG extends f9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class SG extends f9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function OX(J,Z){if(!J||J.constructor===Z)return J;if(typeof Z.BYTES_PER_ELEMENT==="number")return new Z(J);return Array.prototype.slice.call(J)}function DL(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class RJ{constructor(J,Z,Y,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Z.constructor(Y),this.sampleValues=Z,this.valueSize=Y,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Z=this.parameterPositions,Y=this._cachedIndex,W=Z[Y],X=Z[Y-1];J:{Z:{let H;Y:{W:if(!(J<W)){for(let U=Y+2;;){if(W===void 0){if(J<X)break W;return Y=Z.length,this._cachedIndex=Y,this.copySampleValue_(Y-1)}if(Y===U)break;if(X=W,W=Z[++Y],J<W)break Z}H=Z.length;break Y}if(!(J>=X)){let U=Z[1];if(J<U)Y=2,X=U;for(let Q=Y-2;;){if(X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Y===Q)break;if(W=X,X=Z[--Y-1],J>=X)break Z}H=Y,Y=0;break Y}break J}while(Y<H){let U=Y+H>>>1;if(J<Z[U])H=U;else Y=U+1}if(W=Z[Y],X=Z[Y-1],X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return Y=Z.length,this._cachedIndex=Y,this.copySampleValue_(Y-1)}this._cachedIndex=Y,this.intervalChanged_(Y,X,W)}return this.interpolate_(Y,X,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Z=this.resultBuffer,Y=this.sampleValues,W=this.valueSize,X=J*W;for(let H=0;H!==W;++H)Z[H]=Y[X+H];return Z}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class xG extends RJ{constructor(J,Z,Y,W){super(J,Z,Y,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Z,Y){let W=this.parameterPositions,X=J-2,H=J+1,U=W[X],Q=W[H];if(U===void 0)switch(this.getSettings_().endingStart){case 2401:X=J,U=2*Z-Y;break;case 2402:X=W.length-2,U=Z+W[X]-W[X+1];break;default:X=J,U=Y}if(Q===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Q=2*Y-Z;break;case 2402:H=1,Q=Y+W[1]-W[0];break;default:H=J-1,Q=Z}let w=(Y-Z)*0.5,G=this.valueSize;this._weightPrev=w/(Z-U),this._weightNext=w/(Q-Y),this._offsetPrev=X*G,this._offsetNext=H*G}interpolate_(J,Z,Y,W){let X=this.resultBuffer,H=this.sampleValues,U=this.valueSize,Q=J*U,w=Q-U,G=this._offsetPrev,K=this._offsetNext,z=this._weightPrev,D=this._weightNext,R=(Y-Z)/(W-Z),q=R*R,L=q*R,O=-z*L+2*z*q-z*R,$=(1+z)*L+(-1.5-2*z)*q+(-0.5+z)*R+1,F=(-1-D)*L+(1.5+D)*q+0.5*R,N=D*L-D*q;for(let M=0;M!==U;++M)X[M]=O*H[G+M]+$*H[w+M]+F*H[Q+M]+N*H[K+M];return X}}class fG extends RJ{constructor(J,Z,Y,W){super(J,Z,Y,W)}interpolate_(J,Z,Y,W){let X=this.resultBuffer,H=this.sampleValues,U=this.valueSize,Q=J*U,w=Q-U,G=(Y-Z)/(W-Z),K=1-G;for(let z=0;z!==U;++z)X[z]=H[w+z]*K+H[Q+z]*G;return X}}class jG extends RJ{constructor(J,Z,Y,W){super(J,Z,Y,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class G7{constructor(J,Z,Y,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Z===void 0||Z.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=OX(Z,this.TimeBufferType),this.values=OX(Y,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Z=J.constructor,Y;if(Z.toJSON!==this.toJSON)Y=Z.toJSON(J);else{Y={name:J.name,times:OX(J.times,Array),values:OX(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)Y.interpolation=W}return Y.type=J.ValueTypeName,Y}InterpolantFactoryMethodDiscrete(J){return new jG(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new fG(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new xG(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Z;switch(J){case 2300:Z=this.InterpolantFactoryMethodDiscrete;break;case 2301:Z=this.InterpolantFactoryMethodLinear;break;case 2302:Z=this.InterpolantFactoryMethodSmooth;break}if(Z===void 0){let Y="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Y);return console.warn("THREE.KeyframeTrack:",Y),this}return this.createInterpolant=Z,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Z=this.times;for(let Y=0,W=Z.length;Y!==W;++Y)Z[Y]+=J}return this}scale(J){if(J!==1){let Z=this.times;for(let Y=0,W=Z.length;Y!==W;++Y)Z[Y]*=J}return this}trim(J,Z){let Y=this.times,W=Y.length,X=0,H=W-1;while(X!==W&&Y[X]<J)++X;while(H!==-1&&Y[H]>Z)--H;if(++H,X!==0||H!==W){if(X>=H)H=Math.max(H,1),X=H-1;let U=this.getValueSize();this.times=Y.slice(X,H),this.values=this.values.slice(X*U,H*U)}return this}validate(){let J=!0,Z=this.getValueSize();if(Z-Math.floor(Z)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Y=this.times,W=this.values,X=Y.length;if(X===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let U=0;U!==X;U++){let Q=Y[U];if(typeof Q==="number"&&isNaN(Q)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,U,Q),J=!1;break}if(H!==null&&H>Q){console.error("THREE.KeyframeTrack: Out of order keys.",this,U,Q,H),J=!1;break}H=Q}if(W!==void 0){if(DL(W))for(let U=0,Q=W.length;U!==Q;++U){let w=W[U];if(isNaN(w)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,U,w),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Z=this.values.slice(),Y=this.getValueSize(),W=this.getInterpolation()===2302,X=J.length-1,H=1;for(let U=1;U<X;++U){let Q=!1,w=J[U],G=J[U+1];if(w!==G&&(U!==1||w!==J[0]))if(!W){let K=U*Y,z=K-Y,D=K+Y;for(let R=0;R!==Y;++R){let q=Z[K+R];if(q!==Z[z+R]||q!==Z[D+R]){Q=!0;break}}}else Q=!0;if(Q){if(U!==H){J[H]=J[U];let K=U*Y,z=H*Y;for(let D=0;D!==Y;++D)Z[z+D]=Z[K+D]}++H}}if(X>0){J[H]=J[X];for(let U=X*Y,Q=H*Y,w=0;w!==Y;++w)Z[Q+w]=Z[U+w];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Z.slice(0,H*Y);else this.times=J,this.values=Z;return this}clone(){let J=this.times.slice(),Z=this.values.slice(),W=new this.constructor(this.name,J,Z);return W.createInterpolant=this.createInterpolant,W}}G7.prototype.ValueTypeName="";G7.prototype.TimeBufferType=Float32Array;G7.prototype.ValueBufferType=Float32Array;G7.prototype.DefaultInterpolation=2301;class y9 extends G7{constructor(J,Z,Y){super(J,Z,Y)}}y9.prototype.ValueTypeName="bool";y9.prototype.ValueBufferType=Array;y9.prototype.DefaultInterpolation=2300;y9.prototype.InterpolantFactoryMethodLinear=void 0;y9.prototype.InterpolantFactoryMethodSmooth=void 0;class bG extends G7{constructor(J,Z,Y,W){super(J,Z,Y,W)}}bG.prototype.ValueTypeName="color";class hG extends G7{constructor(J,Z,Y,W){super(J,Z,Y,W)}}hG.prototype.ValueTypeName="number";class vG extends RJ{constructor(J,Z,Y,W){super(J,Z,Y,W)}interpolate_(J,Z,Y,W){let X=this.resultBuffer,H=this.sampleValues,U=this.valueSize,Q=(Y-Z)/(W-Z),w=J*U;for(let G=w+U;w!==G;w+=4)J9.slerpFlat(X,0,H,w-U,H,w,Q);return X}}class sX extends G7{constructor(J,Z,Y,W){super(J,Z,Y,W)}InterpolantFactoryMethodLinear(J){return new vG(this.times,this.values,this.getValueSize(),J)}}sX.prototype.ValueTypeName="quaternion";sX.prototype.InterpolantFactoryMethodSmooth=void 0;class g9 extends G7{constructor(J,Z,Y){super(J,Z,Y)}}g9.prototype.ValueTypeName="string";g9.prototype.ValueBufferType=Array;g9.prototype.DefaultInterpolation=2300;g9.prototype.InterpolantFactoryMethodLinear=void 0;g9.prototype.InterpolantFactoryMethodSmooth=void 0;class yG extends G7{constructor(J,Z,Y,W){super(J,Z,Y,W)}}yG.prototype.ValueTypeName="vector";class gG{constructor(J,Z,Y){let W=this,X=!1,H=0,U=0,Q=void 0,w=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Z,this.onError=Y,this.abortController=new AbortController,this.itemStart=function(G){if(U++,X===!1){if(W.onStart!==void 0)W.onStart(G,H,U)}X=!0},this.itemEnd=function(G){if(H++,W.onProgress!==void 0)W.onProgress(G,H,U);if(H===U){if(X=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(G){if(W.onError!==void 0)W.onError(G)},this.resolveURL=function(G){if(Q)return Q(G);return G},this.setURLModifier=function(G){return Q=G,this},this.addHandler=function(G,K){return w.push(G,K),this},this.removeHandler=function(G){let K=w.indexOf(G);if(K!==-1)w.splice(K,2);return this},this.getHandler=function(G){for(let K=0,z=w.length;K<z;K+=2){let D=w[K],R=w[K+1];if(D.global)D.lastIndex=0;if(D.test(G))return R}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var KO=new gG;class pG{constructor(J){this.manager=J!==void 0?J:KO,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Z){let Y=this;return new Promise(function(W,X){Y.load(J,W,Z,X)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}pG.DEFAULT_MATERIAL_NAME="__DEFAULT";class UY extends Z8{constructor(J,Z=1){super();this.isLight=!0,this.type="Light",this.color=new t0(J),this.intensity=Z}dispose(){}copy(J,Z){return super.copy(J,Z),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Z=super.toJSON(J);if(Z.object.color=this.color.getHex(),Z.object.intensity=this.intensity,this.groundColor!==void 0)Z.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Z.object.distance=this.distance;if(this.angle!==void 0)Z.object.angle=this.angle;if(this.decay!==void 0)Z.object.decay=this.decay;if(this.penumbra!==void 0)Z.object.penumbra=this.penumbra;if(this.shadow!==void 0)Z.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Z.object.target=this.target.uuid;return Z}}class nX extends UY{constructor(J,Z,Y){super(J,Y);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Z8.DEFAULT_UP),this.updateMatrix(),this.groundColor=new t0(Z)}copy(J,Z){return super.copy(J,Z),this.groundColor.copy(J.groundColor),this}}var Sw=new P1,XN=new v,HN=new v;class dG{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new P1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new XY,this._frameExtents=new r0(1,1),this._viewportCount=1,this._viewports=[new z1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Z=this.camera,Y=this.matrix;if(XN.setFromMatrixPosition(J.matrixWorld),Z.position.copy(XN),HN.setFromMatrixPosition(J.target.matrixWorld),Z.lookAt(HN),Z.updateMatrixWorld(),Sw.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sw,Z.coordinateSystem,Z.reversedDepth),Z.reversedDepth)Y.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Y.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Y.multiply(Sw)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var UN=new P1,uZ=new v,xw=new v;class DO extends dG{constructor(){super(new G8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new r0(4,2),this._viewportCount=6,this._viewports=[new z1(2,1,1,1),new z1(0,1,1,1),new z1(3,1,1,1),new z1(1,1,1,1),new z1(3,0,1,1),new z1(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(J,Z=0){let Y=this.camera,W=this.matrix,X=J.distance||Y.far;if(X!==Y.far)Y.far=X,Y.updateProjectionMatrix();uZ.setFromMatrixPosition(J.matrixWorld),Y.position.copy(uZ),xw.copy(Y.position),xw.add(this._cubeDirections[Z]),Y.up.copy(this._cubeUps[Z]),Y.lookAt(xw),Y.updateMatrixWorld(),W.makeTranslation(-uZ.x,-uZ.y,-uZ.z),UN.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),this._frustum.setFromProjectionMatrix(UN,Y.coordinateSystem,Y.reversedDepth)}}class oX extends UY{constructor(J,Z,Y=0,W=2){super(J,Z);this.isPointLight=!0,this.type="PointLight",this.distance=Y,this.decay=W,this.shadow=new DO}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Z){return super.copy(J,Z),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class aX extends dX{constructor(J=-1,Z=1,Y=1,W=-1,X=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Z,this.top=Y,this.bottom=W,this.near=X,this.far=H,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Z,Y,W,X,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=Y,this.view.offsetY=W,this.view.width=X,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Z=(this.top-this.bottom)/(2*this.zoom),Y=(this.right+this.left)/2,W=(this.top+this.bottom)/2,X=Y-J,H=Y+J,U=W+Z,Q=W-Z;if(this.view!==null&&this.view.enabled){let w=(this.right-this.left)/this.view.fullWidth/this.zoom,G=(this.top-this.bottom)/this.view.fullHeight/this.zoom;X+=w*this.view.offsetX,H=X+w*this.view.width,U-=G*this.view.offsetY,Q=U-G*this.view.height}this.projectionMatrix.makeOrthographic(X,H,U,Q,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.zoom=this.zoom,Z.object.left=this.left,Z.object.right=this.right,Z.object.top=this.top,Z.object.bottom=this.bottom,Z.object.near=this.near,Z.object.far=this.far,this.view!==null)Z.object.view=Object.assign({},this.view);return Z}}class zO extends dG{constructor(){super(new aX(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class rX extends UY{constructor(J,Z){super(J,Z);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Z8.DEFAULT_UP),this.updateMatrix(),this.target=new Z8,this.shadow=new zO}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class mG extends G8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var uG="\\[\\]\\.:\\/",zL=new RegExp("["+uG+"]","g"),lG="[^"+uG+"]",RL="[^"+uG.replace("\\.","")+"]",NL=/((?:WC+[\/:])*)/.source.replace("WC",lG),OL=/(WCOD+)?/.source.replace("WCOD",RL),FL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lG),qL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lG),ML=new RegExp("^"+NL+OL+FL+qL+"$"),LL=["material","materials","bones","map"];class RO{constructor(J,Z,Y){let W=Y||D1.parseTrackName(Z);this._targetGroup=J,this._bindings=J.subscribe_(Z,W)}getValue(J,Z){this.bind();let Y=this._targetGroup.nCachedObjects_,W=this._bindings[Y];if(W!==void 0)W.getValue(J,Z)}setValue(J,Z){let Y=this._bindings;for(let W=this._targetGroup.nCachedObjects_,X=Y.length;W!==X;++W)Y[W].setValue(J,Z)}bind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Y=J.length;Z!==Y;++Z)J[Z].bind()}unbind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Y=J.length;Z!==Y;++Z)J[Z].unbind()}}class D1{constructor(J,Z,Y){this.path=Z,this.parsedPath=Y||D1.parseTrackName(Z),this.node=D1.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Z,Y){if(!(J&&J.isAnimationObjectGroup))return new D1(J,Z,Y);else return new D1.Composite(J,Z,Y)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(zL,"")}static parseTrackName(J){let Z=ML.exec(J);if(Z===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Y={nodeName:Z[2],objectName:Z[3],objectIndex:Z[4],propertyName:Z[5],propertyIndex:Z[6]},W=Y.nodeName&&Y.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let X=Y.nodeName.substring(W+1);if(LL.indexOf(X)!==-1)Y.nodeName=Y.nodeName.substring(0,W),Y.objectName=X}if(Y.propertyName===null||Y.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Y}static findNode(J,Z){if(Z===void 0||Z===""||Z==="."||Z===-1||Z===J.name||Z===J.uuid)return J;if(J.skeleton){let Y=J.skeleton.getBoneByName(Z);if(Y!==void 0)return Y}if(J.children){let Y=function(X){for(let H=0;H<X.length;H++){let U=X[H];if(U.name===Z||U.uuid===Z)return U;let Q=Y(U.children);if(Q)return Q}return null},W=Y(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Z){J[Z]=this.targetObject[this.propertyName]}_getValue_array(J,Z){let Y=this.resolvedProperty;for(let W=0,X=Y.length;W!==X;++W)J[Z++]=Y[W]}_getValue_arrayElement(J,Z){J[Z]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Z){this.resolvedProperty.toArray(J,Z)}_setValue_direct(J,Z){this.targetObject[this.propertyName]=J[Z]}_setValue_direct_setNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Z){let Y=this.resolvedProperty;for(let W=0,X=Y.length;W!==X;++W)Y[W]=J[Z++]}_setValue_array_setNeedsUpdate(J,Z){let Y=this.resolvedProperty;for(let W=0,X=Y.length;W!==X;++W)Y[W]=J[Z++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Z){let Y=this.resolvedProperty;for(let W=0,X=Y.length;W!==X;++W)Y[W]=J[Z++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z]}_setValue_arrayElement_setNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Z){this.resolvedProperty.fromArray(J,Z)}_setValue_fromArray_setNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Z){this.bind(),this.getValue(J,Z)}_setValue_unbound(J,Z){this.bind(),this.setValue(J,Z)}bind(){let J=this.node,Z=this.parsedPath,Y=Z.objectName,W=Z.propertyName,X=Z.propertyIndex;if(!J)J=D1.findNode(this.rootNode,Z.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Y){let w=Z.objectIndex;switch(Y){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let G=0;G<J.length;G++)if(J[G].name===w){w=G;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Y]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Y]}if(w!==void 0){if(J[w]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[w]}}let H=J[W];if(H===void 0){let w=Z.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+w+"."+W+" but it wasn't found.",J);return}let U=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)U=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)U=this.Versioning.MatrixWorldNeedsUpdate;let Q=this.BindingType.Direct;if(X!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[X]!==void 0)X=J.morphTargetDictionary[X]}Q=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=X}else if(H.fromArray!==void 0&&H.toArray!==void 0)Q=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Q=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[Q],this.setValue=this.SetterByBindingTypeAndVersioning[Q][U]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}D1.Composite=RO;D1.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};D1.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};D1.prototype.GetterByBindingType=[D1.prototype._getValue_direct,D1.prototype._getValue_array,D1.prototype._getValue_arrayElement,D1.prototype._getValue_toArray];D1.prototype.SetterByBindingTypeAndVersioning=[[D1.prototype._setValue_direct,D1.prototype._setValue_direct_setNeedsUpdate,D1.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[D1.prototype._setValue_array,D1.prototype._setValue_array_setNeedsUpdate,D1.prototype._setValue_array_setMatrixWorldNeedsUpdate],[D1.prototype._setValue_arrayElement,D1.prototype._setValue_arrayElement_setNeedsUpdate,D1.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[D1.prototype._setValue_fromArray,D1.prototype._setValue_fromArray_setNeedsUpdate,D1.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kE=new Float32Array(1);function cG(J,Z,Y,W){let X=kL(W);switch(Y){case 1021:return J*Z;case 1028:return J*Z/X.components*X.byteLength;case 1029:return J*Z/X.components*X.byteLength;case 1030:return J*Z*2/X.components*X.byteLength;case 1031:return J*Z*2/X.components*X.byteLength;case 1022:return J*Z*3/X.components*X.byteLength;case 1023:return J*Z*4/X.components*X.byteLength;case 1033:return J*Z*4/X.components*X.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Z,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Z,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Z+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Z+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Z+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Z+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Z+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Z+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Z+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Z+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Z+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Z+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Z+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Z+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Z+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Z/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Z/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Z/4)*16}throw Error(`Unable to determine texture byte length for ${Y} format.`)}function kL(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function yO(){let J=null,Z=!1,Y=null,W=null;function X(H,U){Y(H,U),W=J.requestAnimationFrame(X)}return{start:function(){if(Z===!0)return;if(Y===null)return;W=J.requestAnimationFrame(X),Z=!0},stop:function(){J.cancelAnimationFrame(W),Z=!1},setAnimationLoop:function(H){Y=H},setContext:function(H){J=H}}}function BL(J){let Z=new WeakMap;function Y(Q,w){let{array:G,usage:K}=Q,z=G.byteLength,D=J.createBuffer();J.bindBuffer(w,D),J.bufferData(w,G,K),Q.onUploadCallback();let R;if(G instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&G instanceof Float16Array)R=J.HALF_FLOAT;else if(G instanceof Uint16Array)if(Q.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)R=J.SHORT;else if(G instanceof Uint32Array)R=J.UNSIGNED_INT;else if(G instanceof Int32Array)R=J.INT;else if(G instanceof Int8Array)R=J.BYTE;else if(G instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:D,type:R,bytesPerElement:G.BYTES_PER_ELEMENT,version:Q.version,size:z}}function W(Q,w,G){let{array:K,updateRanges:z}=w;if(J.bindBuffer(G,Q),z.length===0)J.bufferSubData(G,0,K);else{z.sort((R,q)=>R.start-q.start);let D=0;for(let R=1;R<z.length;R++){let q=z[D],L=z[R];if(L.start<=q.start+q.count+1)q.count=Math.max(q.count,L.start+L.count-q.start);else++D,z[D]=L}z.length=D+1;for(let R=0,q=z.length;R<q;R++){let L=z[R];J.bufferSubData(G,L.start*K.BYTES_PER_ELEMENT,K,L.start,L.count)}w.clearUpdateRanges()}w.onUploadCallback()}function X(Q){if(Q.isInterleavedBufferAttribute)Q=Q.data;return Z.get(Q)}function H(Q){if(Q.isInterleavedBufferAttribute)Q=Q.data;let w=Z.get(Q);if(w)J.deleteBuffer(w.buffer),Z.delete(Q)}function U(Q,w){if(Q.isInterleavedBufferAttribute)Q=Q.data;if(Q.isGLBufferAttribute){let K=Z.get(Q);if(!K||K.version<Q.version)Z.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}let G=Z.get(Q);if(G===void 0)Z.set(Q,Y(Q,w));else if(G.version<Q.version){if(G.size!==Q.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(G.buffer,Q,w),G.version=Q.version}}return{get:X,remove:H,update:U}}var VL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_L=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eL="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jk=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zk=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yk=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wk=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xk=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hk=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uk=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qk=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wk=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gk=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$k=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kk=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dk=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zk=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rk=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nk=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ok=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fk=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qk=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mk=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lk=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kk=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bk=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vk=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_k=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ak=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ek=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ik=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ck=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tk=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xk=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jk=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bk=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hk=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vk=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yk=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gk=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dk=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ck=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ik=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ok=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ak=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ek=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XB=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HB=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UB=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$B=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OB=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VB=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_B=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AB=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bB=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vB=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yB=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mB=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lB=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cB=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iB=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sB=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nB=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oB=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aB=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tB=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eB=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JV=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZV=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0={alphahash_fragment:VL,alphahash_pars_fragment:_L,alphamap_fragment:AL,alphamap_pars_fragment:EL,alphatest_fragment:IL,alphatest_pars_fragment:CL,aomap_fragment:TL,aomap_pars_fragment:PL,batching_pars_vertex:SL,batching_vertex:xL,begin_vertex:fL,beginnormal_vertex:jL,bsdfs:bL,iridescence_fragment:hL,bumpmap_pars_fragment:vL,clipping_planes_fragment:yL,clipping_planes_pars_fragment:gL,clipping_planes_pars_vertex:pL,clipping_planes_vertex:dL,color_fragment:mL,color_pars_fragment:uL,color_pars_vertex:lL,color_vertex:cL,common:iL,cube_uv_reflection_fragment:sL,defaultnormal_vertex:nL,displacementmap_pars_vertex:oL,displacementmap_vertex:aL,emissivemap_fragment:rL,emissivemap_pars_fragment:tL,colorspace_fragment:eL,colorspace_pars_fragment:Jk,envmap_fragment:Zk,envmap_common_pars_fragment:Yk,envmap_pars_fragment:Wk,envmap_pars_vertex:Xk,envmap_physical_pars_fragment:Nk,envmap_vertex:Hk,fog_vertex:Uk,fog_pars_vertex:Qk,fog_fragment:wk,fog_pars_fragment:Gk,gradientmap_pars_fragment:$k,lightmap_pars_fragment:Kk,lights_lambert_fragment:Dk,lights_lambert_pars_fragment:zk,lights_pars_begin:Rk,lights_toon_fragment:Ok,lights_toon_pars_fragment:Fk,lights_phong_fragment:qk,lights_phong_pars_fragment:Mk,lights_physical_fragment:Lk,lights_physical_pars_fragment:kk,lights_fragment_begin:Bk,lights_fragment_maps:Vk,lights_fragment_end:_k,logdepthbuf_fragment:Ak,logdepthbuf_pars_fragment:Ek,logdepthbuf_pars_vertex:Ik,logdepthbuf_vertex:Ck,map_fragment:Tk,map_pars_fragment:Pk,map_particle_fragment:Sk,map_particle_pars_fragment:xk,metalnessmap_fragment:fk,metalnessmap_pars_fragment:jk,morphinstance_vertex:bk,morphcolor_vertex:hk,morphnormal_vertex:vk,morphtarget_pars_vertex:yk,morphtarget_vertex:gk,normal_fragment_begin:pk,normal_fragment_maps:dk,normal_pars_fragment:mk,normal_pars_vertex:uk,normal_vertex:lk,normalmap_pars_fragment:ck,clearcoat_normal_fragment_begin:ik,clearcoat_normal_fragment_maps:sk,clearcoat_pars_fragment:nk,iridescence_pars_fragment:ok,opaque_fragment:ak,packing:rk,premultiplied_alpha_fragment:tk,project_vertex:ek,dithering_fragment:JB,dithering_pars_fragment:ZB,roughnessmap_fragment:YB,roughnessmap_pars_fragment:WB,shadowmap_pars_fragment:XB,shadowmap_pars_vertex:HB,shadowmap_vertex:UB,shadowmask_pars_fragment:QB,skinbase_vertex:wB,skinning_pars_vertex:GB,skinning_vertex:$B,skinnormal_vertex:KB,specularmap_fragment:DB,specularmap_pars_fragment:zB,tonemapping_fragment:RB,tonemapping_pars_fragment:NB,transmission_fragment:OB,transmission_pars_fragment:FB,uv_pars_fragment:qB,uv_pars_vertex:MB,uv_vertex:LB,worldpos_vertex:kB,background_vert:BB,background_frag:VB,backgroundCube_vert:_B,backgroundCube_frag:AB,cube_vert:EB,cube_frag:IB,depth_vert:CB,depth_frag:TB,distanceRGBA_vert:PB,distanceRGBA_frag:SB,equirect_vert:xB,equirect_frag:fB,linedashed_vert:jB,linedashed_frag:bB,meshbasic_vert:hB,meshbasic_frag:vB,meshlambert_vert:yB,meshlambert_frag:gB,meshmatcap_vert:pB,meshmatcap_frag:dB,meshnormal_vert:mB,meshnormal_frag:uB,meshphong_vert:lB,meshphong_frag:cB,meshphysical_vert:iB,meshphysical_frag:sB,meshtoon_vert:nB,meshtoon_frag:oB,points_vert:aB,points_frag:rB,shadow_vert:tB,shadow_frag:eB,sprite_vert:JV,sprite_frag:ZV},F0={common:{diffuse:{value:new t0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new i0},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new i0}},envmap:{envMap:{value:null},envMapRotation:{value:new i0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new i0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new i0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new i0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new i0},normalScale:{value:new r0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new i0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new i0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new i0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new i0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new t0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0},uvTransform:{value:new i0}},sprite:{diffuse:{value:new t0(16777215)},opacity:{value:1},center:{value:new r0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new i0},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0}}},S7={basic:{uniforms:K8([F0.common,F0.specularmap,F0.envmap,F0.aomap,F0.lightmap,F0.fog]),vertexShader:n0.meshbasic_vert,fragmentShader:n0.meshbasic_frag},lambert:{uniforms:K8([F0.common,F0.specularmap,F0.envmap,F0.aomap,F0.lightmap,F0.emissivemap,F0.bumpmap,F0.normalmap,F0.displacementmap,F0.fog,F0.lights,{emissive:{value:new t0(0)}}]),vertexShader:n0.meshlambert_vert,fragmentShader:n0.meshlambert_frag},phong:{uniforms:K8([F0.common,F0.specularmap,F0.envmap,F0.aomap,F0.lightmap,F0.emissivemap,F0.bumpmap,F0.normalmap,F0.displacementmap,F0.fog,F0.lights,{emissive:{value:new t0(0)},specular:{value:new t0(1118481)},shininess:{value:30}}]),vertexShader:n0.meshphong_vert,fragmentShader:n0.meshphong_frag},standard:{uniforms:K8([F0.common,F0.envmap,F0.aomap,F0.lightmap,F0.emissivemap,F0.bumpmap,F0.normalmap,F0.displacementmap,F0.roughnessmap,F0.metalnessmap,F0.fog,F0.lights,{emissive:{value:new t0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:n0.meshphysical_vert,fragmentShader:n0.meshphysical_frag},toon:{uniforms:K8([F0.common,F0.aomap,F0.lightmap,F0.emissivemap,F0.bumpmap,F0.normalmap,F0.displacementmap,F0.gradientmap,F0.fog,F0.lights,{emissive:{value:new t0(0)}}]),vertexShader:n0.meshtoon_vert,fragmentShader:n0.meshtoon_frag},matcap:{uniforms:K8([F0.common,F0.bumpmap,F0.normalmap,F0.displacementmap,F0.fog,{matcap:{value:null}}]),vertexShader:n0.meshmatcap_vert,fragmentShader:n0.meshmatcap_frag},points:{uniforms:K8([F0.points,F0.fog]),vertexShader:n0.points_vert,fragmentShader:n0.points_frag},dashed:{uniforms:K8([F0.common,F0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:n0.linedashed_vert,fragmentShader:n0.linedashed_frag},depth:{uniforms:K8([F0.common,F0.displacementmap]),vertexShader:n0.depth_vert,fragmentShader:n0.depth_frag},normal:{uniforms:K8([F0.common,F0.bumpmap,F0.normalmap,F0.displacementmap,{opacity:{value:1}}]),vertexShader:n0.meshnormal_vert,fragmentShader:n0.meshnormal_frag},sprite:{uniforms:K8([F0.sprite,F0.fog]),vertexShader:n0.sprite_vert,fragmentShader:n0.sprite_frag},background:{uniforms:{uvTransform:{value:new i0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:n0.background_vert,fragmentShader:n0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new i0}},vertexShader:n0.backgroundCube_vert,fragmentShader:n0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:n0.cube_vert,fragmentShader:n0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:n0.equirect_vert,fragmentShader:n0.equirect_frag},distanceRGBA:{uniforms:K8([F0.common,F0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:n0.distanceRGBA_vert,fragmentShader:n0.distanceRGBA_frag},shadow:{uniforms:K8([F0.lights,F0.fog,{color:{value:new t0(0)},opacity:{value:1}}]),vertexShader:n0.shadow_vert,fragmentShader:n0.shadow_frag}};S7.physical={uniforms:K8([S7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new i0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new i0},clearcoatNormalScale:{value:new r0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new i0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new i0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new i0},sheen:{value:0},sheenColor:{value:new t0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new i0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new i0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new i0},transmissionSamplerSize:{value:new r0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new i0},attenuationDistance:{value:0},attenuationColor:{value:new t0(0)},specularColor:{value:new t0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new i0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new i0},anisotropyVector:{value:new r0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new i0}}]),vertexShader:n0.meshphysical_vert,fragmentShader:n0.meshphysical_frag};var tX={r:0,b:0,g:0},p9=new O7,YV=new P1;function WV(J,Z,Y,W,X,H,U){let Q=new t0(0),w=H===!0?0:1,G,K,z=null,D=0,R=null;function q(N){let M=N.isScene===!0?N.background:null;if(M&&M.isTexture)M=(N.backgroundBlurriness>0?Y:Z).get(M);return M}function L(N){let M=!1,I=q(N);if(I===null)$(Q,w);else if(I&&I.isColor)$(I,1),M=!0;let E=J.xr.getEnvironmentBlendMode();if(E==="additive")W.buffers.color.setClear(0,0,0,1,U);else if(E==="alpha-blend")W.buffers.color.setClear(0,0,0,0,U);if(J.autoClear||M)W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function O(N,M){let I=q(M);if(I&&(I.isCubeTexture||I.mapping===sZ)){if(K===void 0)K=new l0(new F1(1,1,1),new P7({name:"BackgroundCubeMaterial",uniforms:j9(S7.backgroundCube.uniforms),vertexShader:S7.backgroundCube.vertexShader,fragmentShader:S7.backgroundCube.fragmentShader,side:c8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),K.geometry.deleteAttribute("normal"),K.geometry.deleteAttribute("uv"),K.onBeforeRender=function(E,A,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(K.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),X.update(K);if(p9.copy(M.backgroundRotation),p9.x*=-1,p9.y*=-1,p9.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)p9.y*=-1,p9.z*=-1;if(K.material.uniforms.envMap.value=I,K.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,K.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,K.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,K.material.uniforms.backgroundRotation.value.setFromMatrix4(YV.makeRotationFromEuler(p9)),K.material.toneMapped=W1.getTransfer(I.colorSpace)!==B1,z!==I||D!==I.version||R!==J.toneMapping)K.material.needsUpdate=!0,z=I,D=I.version,R=J.toneMapping;K.layers.enableAll(),N.unshift(K,K.geometry,K.material,0,0,null)}else if(I&&I.isTexture){if(G===void 0)G=new l0(new b9(2,2),new P7({name:"BackgroundMaterial",uniforms:j9(S7.background.uniforms),vertexShader:S7.background.vertexShader,fragmentShader:S7.background.fragmentShader,side:HJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),X.update(G);if(G.material.uniforms.t2D.value=I,G.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,G.material.toneMapped=W1.getTransfer(I.colorSpace)!==B1,I.matrixAutoUpdate===!0)I.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(I.matrix),z!==I||D!==I.version||R!==J.toneMapping)G.material.needsUpdate=!0,z=I,D=I.version,R=J.toneMapping;G.layers.enableAll(),N.unshift(G,G.geometry,G.material,0,0,null)}}function $(N,M){N.getRGB(tX,IG(J)),W.buffers.color.setClear(tX.r,tX.g,tX.b,M,U)}function F(){if(K!==void 0)K.geometry.dispose(),K.material.dispose(),K=void 0;if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0}return{getClearColor:function(){return Q},setClearColor:function(N,M=1){Q.set(N),w=M,$(Q,w)},getClearAlpha:function(){return w},setClearAlpha:function(N){w=N,$(Q,w)},render:L,addToRenderList:O,dispose:F}}function XV(J,Z){let Y=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},X=D(null),H=X,U=!1;function Q(V,T,b,g,l){let Y0=!1,n=z(g,b,T);if(H!==n)H=n,G(H.object);if(Y0=R(V,g,b,l),Y0)q(V,g,b,l);if(l!==null)Z.update(l,J.ELEMENT_ARRAY_BUFFER);if(Y0||U){if(U=!1,M(V,T,b,g),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Z.get(l).buffer)}}function w(){return J.createVertexArray()}function G(V){return J.bindVertexArray(V)}function K(V){return J.deleteVertexArray(V)}function z(V,T,b){let g=b.wireframe===!0,l=W[V.id];if(l===void 0)l={},W[V.id]=l;let Y0=l[T.id];if(Y0===void 0)Y0={},l[T.id]=Y0;let n=Y0[g];if(n===void 0)n=D(w()),Y0[g]=n;return n}function D(V){let T=[],b=[],g=[];for(let l=0;l<Y;l++)T[l]=0,b[l]=0,g[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:b,attributeDivisors:g,object:V,attributes:{},index:null}}function R(V,T,b,g){let l=H.attributes,Y0=T.attributes,n=0,c=b.getAttributes();for(let i in c)if(c[i].location>=0){let M0=l[i],d0=Y0[i];if(d0===void 0){if(i==="instanceMatrix"&&V.instanceMatrix)d0=V.instanceMatrix;if(i==="instanceColor"&&V.instanceColor)d0=V.instanceColor}if(M0===void 0)return!0;if(M0.attribute!==d0)return!0;if(d0&&M0.data!==d0.data)return!0;n++}if(H.attributesNum!==n)return!0;if(H.index!==g)return!0;return!1}function q(V,T,b,g){let l={},Y0=T.attributes,n=0,c=b.getAttributes();for(let i in c)if(c[i].location>=0){let M0=Y0[i];if(M0===void 0){if(i==="instanceMatrix"&&V.instanceMatrix)M0=V.instanceMatrix;if(i==="instanceColor"&&V.instanceColor)M0=V.instanceColor}let d0={};if(d0.attribute=M0,M0&&M0.data)d0.data=M0.data;l[i]=d0,n++}H.attributes=l,H.attributesNum=n,H.index=g}function L(){let V=H.newAttributes;for(let T=0,b=V.length;T<b;T++)V[T]=0}function O(V){$(V,0)}function $(V,T){let{newAttributes:b,enabledAttributes:g,attributeDivisors:l}=H;if(b[V]=1,g[V]===0)J.enableVertexAttribArray(V),g[V]=1;if(l[V]!==T)J.vertexAttribDivisor(V,T),l[V]=T}function F(){let{newAttributes:V,enabledAttributes:T}=H;for(let b=0,g=T.length;b<g;b++)if(T[b]!==V[b])J.disableVertexAttribArray(b),T[b]=0}function N(V,T,b,g,l,Y0,n){if(n===!0)J.vertexAttribIPointer(V,T,b,l,Y0);else J.vertexAttribPointer(V,T,b,g,l,Y0)}function M(V,T,b,g){L();let l=g.attributes,Y0=b.getAttributes(),n=T.defaultAttributeValues;for(let c in Y0){let i=Y0[c];if(i.location>=0){let N0=l[c];if(N0===void 0){if(c==="instanceMatrix"&&V.instanceMatrix)N0=V.instanceMatrix;if(c==="instanceColor"&&V.instanceColor)N0=V.instanceColor}if(N0!==void 0){let{normalized:M0,itemSize:d0}=N0,f0=Z.get(N0);if(f0===void 0)continue;let{buffer:w1,type:m0,bytesPerElement:a}=f0,W0=m0===J.INT||m0===J.UNSIGNED_INT||N0.gpuType===yw;if(N0.isInterleavedBufferAttribute){let K0=N0.data,T0=K0.stride,j0=N0.offset;if(K0.isInstancedInterleavedBuffer){for(let b0=0;b0<i.locationSize;b0++)$(i.location+b0,K0.meshPerAttribute);if(V.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=K0.meshPerAttribute*K0.count}else for(let b0=0;b0<i.locationSize;b0++)O(i.location+b0);J.bindBuffer(J.ARRAY_BUFFER,w1);for(let b0=0;b0<i.locationSize;b0++)N(i.location+b0,d0/i.locationSize,m0,M0,T0*a,(j0+d0/i.locationSize*b0)*a,W0)}else{if(N0.isInstancedBufferAttribute){for(let K0=0;K0<i.locationSize;K0++)$(i.location+K0,N0.meshPerAttribute);if(V.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let K0=0;K0<i.locationSize;K0++)O(i.location+K0);J.bindBuffer(J.ARRAY_BUFFER,w1);for(let K0=0;K0<i.locationSize;K0++)N(i.location+K0,d0/i.locationSize,m0,M0,d0*a,d0/i.locationSize*K0*a,W0)}}else if(n!==void 0){let M0=n[c];if(M0!==void 0)switch(M0.length){case 2:J.vertexAttrib2fv(i.location,M0);break;case 3:J.vertexAttrib3fv(i.location,M0);break;case 4:J.vertexAttrib4fv(i.location,M0);break;default:J.vertexAttrib1fv(i.location,M0)}}}}F()}function I(){f();for(let V in W){let T=W[V];for(let b in T){let g=T[b];for(let l in g)K(g[l].object),delete g[l];delete T[b]}delete W[V]}}function E(V){if(W[V.id]===void 0)return;let T=W[V.id];for(let b in T){let g=T[b];for(let l in g)K(g[l].object),delete g[l];delete T[b]}delete W[V.id]}function A(V){for(let T in W){let b=W[T];if(b[V.id]===void 0)continue;let g=b[V.id];for(let l in g)K(g[l].object),delete g[l];delete b[V.id]}}function f(){if(B(),U=!0,H===X)return;H=X,G(H.object)}function B(){X.geometry=null,X.program=null,X.wireframe=!1}return{setup:Q,reset:f,resetDefaultState:B,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:L,enableAttribute:O,disableUnusedAttributes:F}}function HV(J,Z,Y){let W;function X(G){W=G}function H(G,K){J.drawArrays(W,G,K),Y.update(K,W,1)}function U(G,K,z){if(z===0)return;J.drawArraysInstanced(W,G,K,z),Y.update(K,W,z)}function Q(G,K,z){if(z===0)return;Z.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,G,0,K,0,z);let R=0;for(let q=0;q<z;q++)R+=K[q];Y.update(R,W,1)}function w(G,K,z,D){if(z===0)return;let R=Z.get("WEBGL_multi_draw");if(R===null)for(let q=0;q<G.length;q++)U(G[q],K[q],D[q]);else{R.multiDrawArraysInstancedWEBGL(W,G,0,K,0,D,0,z);let q=0;for(let L=0;L<z;L++)q+=K[L]*D[L];Y.update(q,W,1)}}this.setMode=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=Q,this.renderMultiDrawInstances=w}function UV(J,Z,Y,W){let X;function H(){if(X!==void 0)return X;if(Z.has("EXT_texture_filter_anisotropic")===!0){let A=Z.get("EXT_texture_filter_anisotropic");X=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else X=0;return X}function U(A){if(A!==T7&&W.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Q(A){let f=A===aZ&&(Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float"));if(A!==r6&&W.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==t6&&!f)return!1;return!0}function w(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let G=Y.precision!==void 0?Y.precision:"highp",K=w(G);if(K!==G)console.warn("THREE.WebGLRenderer:",G,"not supported, using",K,"instead."),G=K;let z=Y.logarithmicDepthBuffer===!0,D=Y.reversedDepthBuffer===!0&&Z.has("EXT_clip_control"),R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),q=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),$=J.getParameter(J.MAX_VERTEX_ATTRIBS),F=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),N=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=q>0,E=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:w,textureFormatReadable:U,textureTypeReadable:Q,precision:G,logarithmicDepthBuffer:z,reversedDepthBuffer:D,maxTextures:R,maxVertexTextures:q,maxTextureSize:L,maxCubemapSize:O,maxAttributes:$,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:M,vertexTextures:I,maxSamples:E}}function QV(J){let Z=this,Y=null,W=0,X=!1,H=!1,U=new X6,Q=new i0,w={value:null,needsUpdate:!1};this.uniform=w,this.numPlanes=0,this.numIntersection=0,this.init=function(z,D){let R=z.length!==0||D||W!==0||X;return X=D,W=z.length,R},this.beginShadows=function(){H=!0,K(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(z,D){Y=K(z,D,0)},this.setState=function(z,D,R){let{clippingPlanes:q,clipIntersection:L,clipShadows:O}=z,$=J.get(z);if(!X||q===null||q.length===0||H&&!O)if(H)K(null);else G();else{let F=H?0:W,N=F*4,M=$.clippingState||null;w.value=M,M=K(q,D,N,R);for(let I=0;I!==N;++I)M[I]=Y[I];$.clippingState=M,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=F}};function G(){if(w.value!==Y)w.value=Y,w.needsUpdate=W>0;Z.numPlanes=W,Z.numIntersection=0}function K(z,D,R,q){let L=z!==null?z.length:0,O=null;if(L!==0){if(O=w.value,q!==!0||O===null){let $=R+L*4,F=D.matrixWorldInverse;if(Q.getNormalMatrix(F),O===null||O.length<$)O=new Float32Array($);for(let N=0,M=R;N!==L;++N,M+=4)U.copy(z[N]).applyMatrix4(F,Q),U.normal.toArray(O,M),O[M+3]=U.constant}w.value=O,w.needsUpdate=!0}return Z.numPlanes=L,Z.numIntersection=0,O}}function wV(J){let Z=new WeakMap;function Y(U,Q){if(Q===IX)U.mapping=QJ;else if(Q===CX)U.mapping=T9;return U}function W(U){if(U&&U.isTexture){let Q=U.mapping;if(Q===IX||Q===CX)if(Z.has(U)){let w=Z.get(U).texture;return Y(w,U.mapping)}else{let w=U.image;if(w&&w.height>0){let G=new TG(w.height);return G.fromEquirectangularTexture(J,U),Z.set(U,G),U.addEventListener("dispose",X),Y(G.texture,U.mapping)}else return null}}return U}function X(U){let Q=U.target;Q.removeEventListener("dispose",X);let w=Z.get(Q);if(w!==void 0)Z.delete(Q),w.dispose()}function H(){Z=new WeakMap}return{get:W,dispose:H}}var OJ=4,NO=[0.125,0.215,0.35,0.446,0.526,0.582],u9=20,iG=new aX,OO=new t0,sG=null,nG=0,oG=0,aG=!1,m9=(1+Math.sqrt(5))/2,NJ=1/m9,FO=[new v(-m9,NJ,0),new v(m9,NJ,0),new v(-NJ,0,m9),new v(NJ,0,m9),new v(0,m9,-NJ),new v(0,m9,NJ),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],GV=new v;class tG{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Z=0,Y=0.1,W=100,X={}){let{size:H=256,position:U=GV}=X;sG=this._renderer.getRenderTarget(),nG=this._renderer.getActiveCubeFace(),oG=this._renderer.getActiveMipmapLevel(),aG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let Q=this._allocateTargets();if(Q.depthBuffer=!0,this._sceneToCubeUV(J,Y,W,Q,U),Z>0)this._blur(Q,0,0,Z);return this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(J,Z=null){return this._fromTexture(J,Z)}fromCubemap(J,Z=null){return this._fromTexture(J,Z)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=LO(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=MO(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(sG,nG,oG),this._renderer.xr.enabled=aG,J.scissorTest=!1,eX(J,0,0,J.width,J.height)}_fromTexture(J,Z){if(J.mapping===QJ||J.mapping===T9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);sG=this._renderer.getRenderTarget(),nG=this._renderer.getActiveCubeFace(),oG=this._renderer.getActiveMipmapLevel(),aG=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Y=Z||this._allocateTargets();return this._textureToCubeUV(J,Y),this._applyPMREM(Y),this._cleanup(Y),Y}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Z=4*this._cubeSize,Y={magFilter:P9,minFilter:P9,generateMipmaps:!1,type:aZ,format:T7,colorSpace:tZ,depthBuffer:!1},W=qO(J,Z,Y);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Z){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=qO(J,Z,Y);let{_lodMax:X}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$V(X)),this._blurMaterial=KV(X,J,Z)}return W}_compileMaterial(J){let Z=new l0(this._lodPlanes[0],J);this._renderer.compile(Z,iG)}_sceneToCubeUV(J,Z,Y,W,X){let Q=new G8(90,1,Z,Y),w=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],K=this._renderer,z=K.autoClear,D=K.toneMapping;if(K.getClearColor(OO),K.toneMapping=U6,K.autoClear=!1,K.state.buffers.depth.getReversed())K.setRenderTarget(W),K.clearDepth(),K.setRenderTarget(null);let q=new yX({name:"PMREM.Background",side:c8,depthWrite:!1,depthTest:!1}),L=new l0(new F1,q),O=!1,$=J.background;if($){if($.isColor)q.color.copy($),J.background=null,O=!0}else q.color.copy(OO),O=!0;for(let F=0;F<6;F++){let N=F%3;if(N===0)Q.up.set(0,w[F],0),Q.position.set(X.x,X.y,X.z),Q.lookAt(X.x+G[F],X.y,X.z);else if(N===1)Q.up.set(0,0,w[F]),Q.position.set(X.x,X.y,X.z),Q.lookAt(X.x,X.y+G[F],X.z);else Q.up.set(0,w[F],0),Q.position.set(X.x,X.y,X.z),Q.lookAt(X.x,X.y,X.z+G[F]);let M=this._cubeSize;if(eX(W,N*M,F>2?M:0,M,M),K.setRenderTarget(W),O)K.render(L,Q);K.render(J,Q)}L.geometry.dispose(),L.material.dispose(),K.toneMapping=D,K.autoClear=z,J.background=$}_textureToCubeUV(J,Z){let Y=this._renderer,W=J.mapping===QJ||J.mapping===T9;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=LO();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=MO();let X=W?this._cubemapMaterial:this._equirectMaterial,H=new l0(this._lodPlanes[0],X),U=X.uniforms;U.envMap.value=J;let Q=this._cubeSize;eX(Z,0,0,3*Q,2*Q),Y.setRenderTarget(Z),Y.render(H,iG)}_applyPMREM(J){let Z=this._renderer,Y=Z.autoClear;Z.autoClear=!1;let W=this._lodPlanes.length;for(let X=1;X<W;X++){let H=Math.sqrt(this._sigmas[X]*this._sigmas[X]-this._sigmas[X-1]*this._sigmas[X-1]),U=FO[(W-X-1)%FO.length];this._blur(J,X-1,X,H,U)}Z.autoClear=Y}_blur(J,Z,Y,W,X){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Z,Y,W,"latitudinal",X),this._halfBlur(H,J,Y,Y,W,"longitudinal",X)}_halfBlur(J,Z,Y,W,X,H,U){let Q=this._renderer,w=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let G=3,K=new l0(this._lodPlanes[W],w),z=w.uniforms,D=this._sizeLods[Y]-1,R=isFinite(X)?Math.PI/(2*D):2*Math.PI/(2*u9-1),q=X/R,L=isFinite(X)?1+Math.floor(G*q):u9;if(L>u9)console.warn(`sigmaRadians, ${X}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${u9}`);let O=[],$=0;for(let E=0;E<u9;++E){let A=E/q,f=Math.exp(-A*A/2);if(O.push(f),E===0)$+=f;else if(E<L)$+=2*f}for(let E=0;E<O.length;E++)O[E]=O[E]/$;if(z.envMap.value=J.texture,z.samples.value=L,z.weights.value=O,z.latitudinal.value=H==="latitudinal",U)z.poleAxis.value=U;let{_lodMax:F}=this;z.dTheta.value=R,z.mipInt.value=F-Y;let N=this._sizeLods[W],M=3*N*(W>F-OJ?W-F+OJ:0),I=4*(this._cubeSize-N);eX(Z,M,I,3*N,2*N),Q.setRenderTarget(Z),Q.render(K,iG)}}function $V(J){let Z=[],Y=[],W=[],X=J,H=J-OJ+1+NO.length;for(let U=0;U<H;U++){let Q=Math.pow(2,X);Y.push(Q);let w=1/Q;if(U>J-OJ)w=NO[U-J+OJ-1];else if(U===0)w=0;W.push(w);let G=1/(Q-2),K=-G,z=1+G,D=[K,K,z,K,z,z,K,K,z,z,K,z],R=6,q=6,L=3,O=2,$=1,F=new Float32Array(L*q*R),N=new Float32Array(O*q*R),M=new Float32Array($*q*R);for(let E=0;E<R;E++){let A=E%3*2/3-1,f=E>2?0:-1,B=[A,f,0,A+0.6666666666666666,f,0,A+0.6666666666666666,f+1,0,A,f,0,A+0.6666666666666666,f+1,0,A,f+1,0];F.set(B,L*q*E),N.set(D,O*q*E);let V=[E,E,E,E,E,E];M.set(V,$*q*E)}let I=new w7;if(I.setAttribute("position",new Q7(F,L)),I.setAttribute("uv",new Q7(N,O)),I.setAttribute("faceIndex",new Q7(M,$)),Z.push(I),X>OJ)X--}return{lodPlanes:Z,sizeLods:Y,sigmas:W}}function qO(J,Z,Y){let W=new Q6(J,Z,Y);return W.texture.mapping=sZ,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function eX(J,Z,Y,W,X){J.viewport.set(Z,Y,W,X),J.scissor.set(Z,Y,W,X)}function KV(J,Z,Y){let W=new Float32Array(u9),X=new v(0,1,0);return new P7({name:"SphericalGaussianBlur",defines:{n:u9,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/Y,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:X}},vertexShader:J$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:a6,depthTest:!1,depthWrite:!1})}function MO(){return new P7({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:J$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:a6,depthTest:!1,depthWrite:!1})}function LO(){return new P7({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:J$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:a6,depthTest:!1,depthWrite:!1})}function J$(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DV(J){let Z=new WeakMap,Y=null;function W(Q){if(Q&&Q.isTexture){let w=Q.mapping,G=w===IX||w===CX,K=w===QJ||w===T9;if(G||K){let z=Z.get(Q),D=z!==void 0?z.texture.pmremVersion:0;if(Q.isRenderTargetTexture&&Q.pmremVersion!==D){if(Y===null)Y=new tG(J);return z=G?Y.fromEquirectangular(Q,z):Y.fromCubemap(Q,z),z.texture.pmremVersion=Q.pmremVersion,Z.set(Q,z),z.texture}else if(z!==void 0)return z.texture;else{let R=Q.image;if(G&&R&&R.height>0||K&&R&&X(R)){if(Y===null)Y=new tG(J);return z=G?Y.fromEquirectangular(Q):Y.fromCubemap(Q),z.texture.pmremVersion=Q.pmremVersion,Z.set(Q,z),Q.addEventListener("dispose",H),z.texture}else return null}}}return Q}function X(Q){let w=0,G=6;for(let K=0;K<G;K++)if(Q[K]!==void 0)w++;return w===G}function H(Q){let w=Q.target;w.removeEventListener("dispose",H);let G=Z.get(w);if(G!==void 0)Z.delete(w),G.dispose()}function U(){if(Z=new WeakMap,Y!==null)Y.dispose(),Y=null}return{get:W,dispose:U}}function zV(J){let Z={};function Y(W){if(Z[W]!==void 0)return Z[W];let X;switch(W){case"WEBGL_depth_texture":X=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":X=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":X=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":X=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:X=J.getExtension(W)}return Z[W]=X,X}return{has:function(W){return Y(W)!==null},init:function(){Y("EXT_color_buffer_float"),Y("WEBGL_clip_cull_distance"),Y("OES_texture_float_linear"),Y("EXT_color_buffer_half_float"),Y("WEBGL_multisampled_render_to_texture"),Y("WEBGL_render_shared_exponent")},get:function(W){let X=Y(W);if(X===null)XJ("THREE.WebGLRenderer: "+W+" extension not supported.");return X}}}function RV(J,Z,Y,W){let X={},H=new WeakMap;function U(z){let D=z.target;if(D.index!==null)Z.remove(D.index);for(let q in D.attributes)Z.remove(D.attributes[q]);D.removeEventListener("dispose",U),delete X[D.id];let R=H.get(D);if(R)Z.remove(R),H.delete(D);if(W.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0)delete D._maxInstanceCount;Y.memory.geometries--}function Q(z,D){if(X[D.id]===!0)return D;return D.addEventListener("dispose",U),X[D.id]=!0,Y.memory.geometries++,D}function w(z){let D=z.attributes;for(let R in D)Z.update(D[R],J.ARRAY_BUFFER)}function G(z){let D=[],R=z.index,q=z.attributes.position,L=0;if(R!==null){let F=R.array;L=R.version;for(let N=0,M=F.length;N<M;N+=3){let I=F[N+0],E=F[N+1],A=F[N+2];D.push(I,E,E,A,A,I)}}else if(q!==void 0){let F=q.array;L=q.version;for(let N=0,M=F.length/3-1;N<M;N+=3){let I=N+0,E=N+1,A=N+2;D.push(I,E,E,A,A,I)}}else return;let O=new((BG(D))?pX:gX)(D,1);O.version=L;let $=H.get(z);if($)Z.remove($);H.set(z,O)}function K(z){let D=H.get(z);if(D){let R=z.index;if(R!==null){if(D.version<R.version)G(z)}}else G(z);return H.get(z)}return{get:Q,update:w,getWireframeAttribute:K}}function NV(J,Z,Y){let W;function X(D){W=D}let H,U;function Q(D){H=D.type,U=D.bytesPerElement}function w(D,R){J.drawElements(W,R,H,D*U),Y.update(R,W,1)}function G(D,R,q){if(q===0)return;J.drawElementsInstanced(W,R,H,D*U,q),Y.update(R,W,q)}function K(D,R,q){if(q===0)return;Z.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,R,0,H,D,0,q);let O=0;for(let $=0;$<q;$++)O+=R[$];Y.update(O,W,1)}function z(D,R,q,L){if(q===0)return;let O=Z.get("WEBGL_multi_draw");if(O===null)for(let $=0;$<D.length;$++)G(D[$]/U,R[$],L[$]);else{O.multiDrawElementsInstancedWEBGL(W,R,0,H,D,0,L,0,q);let $=0;for(let F=0;F<q;F++)$+=R[F]*L[F];Y.update($,W,1)}}this.setMode=X,this.setIndex=Q,this.render=w,this.renderInstances=G,this.renderMultiDraw=K,this.renderMultiDrawInstances=z}function OV(J){let Z={geometries:0,textures:0},Y={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,U,Q){switch(Y.calls++,U){case J.TRIANGLES:Y.triangles+=Q*(H/3);break;case J.LINES:Y.lines+=Q*(H/2);break;case J.LINE_STRIP:Y.lines+=Q*(H-1);break;case J.LINE_LOOP:Y.lines+=Q*H;break;case J.POINTS:Y.points+=Q*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",U);break}}function X(){Y.calls=0,Y.triangles=0,Y.points=0,Y.lines=0}return{memory:Z,render:Y,programs:null,autoReset:!0,reset:X,update:W}}function FV(J,Z,Y){let W=new WeakMap,X=new z1;function H(U,Q,w){let G=U.morphTargetInfluences,K=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,z=K!==void 0?K.length:0,D=W.get(Q);if(D===void 0||D.count!==z){let B=function(){A.dispose(),W.delete(Q),Q.removeEventListener("dispose",B)};if(D!==void 0)D.texture.dispose();let R=Q.morphAttributes.position!==void 0,q=Q.morphAttributes.normal!==void 0,L=Q.morphAttributes.color!==void 0,O=Q.morphAttributes.position||[],$=Q.morphAttributes.normal||[],F=Q.morphAttributes.color||[],N=0;if(R===!0)N=1;if(q===!0)N=2;if(L===!0)N=3;let M=Q.attributes.position.count*N,I=1;if(M>Z.maxTextureSize)I=Math.ceil(M/Z.maxTextureSize),M=Z.maxTextureSize;let E=new Float32Array(M*I*4*z),A=new hX(E,M,I,z);A.type=t6,A.needsUpdate=!0;let f=N*4;for(let V=0;V<z;V++){let T=O[V],b=$[V],g=F[V],l=M*I*4*V;for(let Y0=0;Y0<T.count;Y0++){let n=Y0*f;if(R===!0)X.fromBufferAttribute(T,Y0),E[l+n+0]=X.x,E[l+n+1]=X.y,E[l+n+2]=X.z,E[l+n+3]=0;if(q===!0)X.fromBufferAttribute(b,Y0),E[l+n+4]=X.x,E[l+n+5]=X.y,E[l+n+6]=X.z,E[l+n+7]=0;if(L===!0)X.fromBufferAttribute(g,Y0),E[l+n+8]=X.x,E[l+n+9]=X.y,E[l+n+10]=X.z,E[l+n+11]=g.itemSize===4?X.w:1}}D={count:z,texture:A,size:new r0(M,I)},W.set(Q,D),Q.addEventListener("dispose",B)}if(U.isInstancedMesh===!0&&U.morphTexture!==null)w.getUniforms().setValue(J,"morphTexture",U.morphTexture,Y);else{let R=0;for(let L=0;L<G.length;L++)R+=G[L];let q=Q.morphTargetsRelative?1:1-R;w.getUniforms().setValue(J,"morphTargetBaseInfluence",q),w.getUniforms().setValue(J,"morphTargetInfluences",G)}w.getUniforms().setValue(J,"morphTargetsTexture",D.texture,Y),w.getUniforms().setValue(J,"morphTargetsTextureSize",D.size)}return{update:H}}function qV(J,Z,Y,W){let X=new WeakMap;function H(w){let G=W.render.frame,K=w.geometry,z=Z.get(w,K);if(X.get(z)!==G)Z.update(z),X.set(z,G);if(w.isInstancedMesh){if(w.hasEventListener("dispose",Q)===!1)w.addEventListener("dispose",Q);if(X.get(w)!==G){if(Y.update(w.instanceMatrix,J.ARRAY_BUFFER),w.instanceColor!==null)Y.update(w.instanceColor,J.ARRAY_BUFFER);X.set(w,G)}}if(w.isSkinnedMesh){let D=w.skeleton;if(X.get(D)!==G)D.update(),X.set(D,G)}return z}function U(){X=new WeakMap}function Q(w){let G=w.target;if(G.removeEventListener("dispose",Q),Y.remove(G.instanceMatrix),G.instanceColor!==null)Y.remove(G.instanceColor)}return{update:H,dispose:U}}var gO=new F8,kO=new lX(1,1),pO=new hX,dO=new AG,mO=new mX,BO=[],VO=[],_O=new Float32Array(16),AO=new Float32Array(9),EO=new Float32Array(4);function FJ(J,Z,Y){let W=J[0];if(W<=0||W>0)return J;let X=Z*Y,H=BO[X];if(H===void 0)H=new Float32Array(X),BO[X]=H;if(Z!==0){W.toArray(H,0);for(let U=1,Q=0;U!==Z;++U)Q+=Y,J[U].toArray(H,Q)}return H}function n1(J,Z){if(J.length!==Z.length)return!1;for(let Y=0,W=J.length;Y<W;Y++)if(J[Y]!==Z[Y])return!1;return!0}function o1(J,Z){for(let Y=0,W=Z.length;Y<W;Y++)J[Y]=Z[Y]}function ZH(J,Z){let Y=VO[Z];if(Y===void 0)Y=new Int32Array(Z),VO[Z]=Y;for(let W=0;W!==Z;++W)Y[W]=J.allocateTextureUnit();return Y}function MV(J,Z){let Y=this.cache;if(Y[0]===Z)return;J.uniform1f(this.addr,Z),Y[0]=Z}function LV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y)J.uniform2f(this.addr,Z.x,Z.y),Y[0]=Z.x,Y[1]=Z.y}else{if(n1(Y,Z))return;J.uniform2fv(this.addr,Z),o1(Y,Z)}}function kV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z)J.uniform3f(this.addr,Z.x,Z.y,Z.z),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z}else if(Z.r!==void 0){if(Y[0]!==Z.r||Y[1]!==Z.g||Y[2]!==Z.b)J.uniform3f(this.addr,Z.r,Z.g,Z.b),Y[0]=Z.r,Y[1]=Z.g,Y[2]=Z.b}else{if(n1(Y,Z))return;J.uniform3fv(this.addr,Z),o1(Y,Z)}}function BV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z||Y[3]!==Z.w)J.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z,Y[3]=Z.w}else{if(n1(Y,Z))return;J.uniform4fv(this.addr,Z),o1(Y,Z)}}function VV(J,Z){let Y=this.cache,W=Z.elements;if(W===void 0){if(n1(Y,Z))return;J.uniformMatrix2fv(this.addr,!1,Z),o1(Y,Z)}else{if(n1(Y,W))return;EO.set(W),J.uniformMatrix2fv(this.addr,!1,EO),o1(Y,W)}}function _V(J,Z){let Y=this.cache,W=Z.elements;if(W===void 0){if(n1(Y,Z))return;J.uniformMatrix3fv(this.addr,!1,Z),o1(Y,Z)}else{if(n1(Y,W))return;AO.set(W),J.uniformMatrix3fv(this.addr,!1,AO),o1(Y,W)}}function AV(J,Z){let Y=this.cache,W=Z.elements;if(W===void 0){if(n1(Y,Z))return;J.uniformMatrix4fv(this.addr,!1,Z),o1(Y,Z)}else{if(n1(Y,W))return;_O.set(W),J.uniformMatrix4fv(this.addr,!1,_O),o1(Y,W)}}function EV(J,Z){let Y=this.cache;if(Y[0]===Z)return;J.uniform1i(this.addr,Z),Y[0]=Z}function IV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y)J.uniform2i(this.addr,Z.x,Z.y),Y[0]=Z.x,Y[1]=Z.y}else{if(n1(Y,Z))return;J.uniform2iv(this.addr,Z),o1(Y,Z)}}function CV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z)J.uniform3i(this.addr,Z.x,Z.y,Z.z),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z}else{if(n1(Y,Z))return;J.uniform3iv(this.addr,Z),o1(Y,Z)}}function TV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z||Y[3]!==Z.w)J.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z,Y[3]=Z.w}else{if(n1(Y,Z))return;J.uniform4iv(this.addr,Z),o1(Y,Z)}}function PV(J,Z){let Y=this.cache;if(Y[0]===Z)return;J.uniform1ui(this.addr,Z),Y[0]=Z}function SV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y)J.uniform2ui(this.addr,Z.x,Z.y),Y[0]=Z.x,Y[1]=Z.y}else{if(n1(Y,Z))return;J.uniform2uiv(this.addr,Z),o1(Y,Z)}}function xV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z)J.uniform3ui(this.addr,Z.x,Z.y,Z.z),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z}else{if(n1(Y,Z))return;J.uniform3uiv(this.addr,Z),o1(Y,Z)}}function fV(J,Z){let Y=this.cache;if(Z.x!==void 0){if(Y[0]!==Z.x||Y[1]!==Z.y||Y[2]!==Z.z||Y[3]!==Z.w)J.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),Y[0]=Z.x,Y[1]=Z.y,Y[2]=Z.z,Y[3]=Z.w}else{if(n1(Y,Z))return;J.uniform4uiv(this.addr,Z),o1(Y,Z)}}function jV(J,Z,Y){let W=this.cache,X=Y.allocateTextureUnit();if(W[0]!==X)J.uniform1i(this.addr,X),W[0]=X;let H;if(this.type===J.SAMPLER_2D_SHADOW)kO.compareFunction=MG,H=kO;else H=gO;Y.setTexture2D(Z||H,X)}function bV(J,Z,Y){let W=this.cache,X=Y.allocateTextureUnit();if(W[0]!==X)J.uniform1i(this.addr,X),W[0]=X;Y.setTexture3D(Z||dO,X)}function hV(J,Z,Y){let W=this.cache,X=Y.allocateTextureUnit();if(W[0]!==X)J.uniform1i(this.addr,X),W[0]=X;Y.setTextureCube(Z||mO,X)}function vV(J,Z,Y){let W=this.cache,X=Y.allocateTextureUnit();if(W[0]!==X)J.uniform1i(this.addr,X),W[0]=X;Y.setTexture2DArray(Z||pO,X)}function yV(J){switch(J){case 5126:return MV;case 35664:return LV;case 35665:return kV;case 35666:return BV;case 35674:return VV;case 35675:return _V;case 35676:return AV;case 5124:case 35670:return EV;case 35667:case 35671:return IV;case 35668:case 35672:return CV;case 35669:case 35673:return TV;case 5125:return PV;case 36294:return SV;case 36295:return xV;case 36296:return fV;case 35678:case 36198:case 36298:case 36306:case 35682:return jV;case 35679:case 36299:case 36307:return bV;case 35680:case 36300:case 36308:case 36293:return hV;case 36289:case 36303:case 36311:case 36292:return vV}}function gV(J,Z){J.uniform1fv(this.addr,Z)}function pV(J,Z){let Y=FJ(Z,this.size,2);J.uniform2fv(this.addr,Y)}function dV(J,Z){let Y=FJ(Z,this.size,3);J.uniform3fv(this.addr,Y)}function mV(J,Z){let Y=FJ(Z,this.size,4);J.uniform4fv(this.addr,Y)}function uV(J,Z){let Y=FJ(Z,this.size,4);J.uniformMatrix2fv(this.addr,!1,Y)}function lV(J,Z){let Y=FJ(Z,this.size,9);J.uniformMatrix3fv(this.addr,!1,Y)}function cV(J,Z){let Y=FJ(Z,this.size,16);J.uniformMatrix4fv(this.addr,!1,Y)}function iV(J,Z){J.uniform1iv(this.addr,Z)}function sV(J,Z){J.uniform2iv(this.addr,Z)}function nV(J,Z){J.uniform3iv(this.addr,Z)}function oV(J,Z){J.uniform4iv(this.addr,Z)}function aV(J,Z){J.uniform1uiv(this.addr,Z)}function rV(J,Z){J.uniform2uiv(this.addr,Z)}function tV(J,Z){J.uniform3uiv(this.addr,Z)}function eV(J,Z){J.uniform4uiv(this.addr,Z)}function J_(J,Z,Y){let W=this.cache,X=Z.length,H=ZH(Y,X);if(!n1(W,H))J.uniform1iv(this.addr,H),o1(W,H);for(let U=0;U!==X;++U)Y.setTexture2D(Z[U]||gO,H[U])}function Z_(J,Z,Y){let W=this.cache,X=Z.length,H=ZH(Y,X);if(!n1(W,H))J.uniform1iv(this.addr,H),o1(W,H);for(let U=0;U!==X;++U)Y.setTexture3D(Z[U]||dO,H[U])}function Y_(J,Z,Y){let W=this.cache,X=Z.length,H=ZH(Y,X);if(!n1(W,H))J.uniform1iv(this.addr,H),o1(W,H);for(let U=0;U!==X;++U)Y.setTextureCube(Z[U]||mO,H[U])}function W_(J,Z,Y){let W=this.cache,X=Z.length,H=ZH(Y,X);if(!n1(W,H))J.uniform1iv(this.addr,H),o1(W,H);for(let U=0;U!==X;++U)Y.setTexture2DArray(Z[U]||pO,H[U])}function X_(J){switch(J){case 5126:return gV;case 35664:return pV;case 35665:return dV;case 35666:return mV;case 35674:return uV;case 35675:return lV;case 35676:return cV;case 5124:case 35670:return iV;case 35667:case 35671:return sV;case 35668:case 35672:return nV;case 35669:case 35673:return oV;case 5125:return aV;case 36294:return rV;case 36295:return tV;case 36296:return eV;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return W_}}class uO{constructor(J,Z,Y){this.id=J,this.addr=Y,this.cache=[],this.type=Z.type,this.setValue=yV(Z.type)}}class lO{constructor(J,Z,Y){this.id=J,this.addr=Y,this.cache=[],this.type=Z.type,this.size=Z.size,this.setValue=X_(Z.type)}}class cO{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Z,Y){let W=this.seq;for(let X=0,H=W.length;X!==H;++X){let U=W[X];U.setValue(J,Z[U.id],Y)}}}var rG=/(\w+)(\])?(\[|\.)?/g;function IO(J,Z){J.seq.push(Z),J.map[Z.id]=Z}function H_(J,Z,Y){let W=J.name,X=W.length;rG.lastIndex=0;while(!0){let H=rG.exec(W),U=rG.lastIndex,Q=H[1],w=H[2]==="]",G=H[3];if(w)Q=Q|0;if(G===void 0||G==="["&&U+2===X){IO(Y,G===void 0?new uO(Q,J,Z):new lO(Q,J,Z));break}else{let z=Y.map[Q];if(z===void 0)z=new cO(Q),IO(Y,z);Y=z}}}class wY{constructor(J,Z){this.seq=[],this.map={};let Y=J.getProgramParameter(Z,J.ACTIVE_UNIFORMS);for(let W=0;W<Y;++W){let X=J.getActiveUniform(Z,W),H=J.getUniformLocation(Z,X.name);H_(X,H,this)}}setValue(J,Z,Y,W){let X=this.map[Z];if(X!==void 0)X.setValue(J,Y,W)}setOptional(J,Z,Y){let W=Z[Y];if(W!==void 0)this.setValue(J,Y,W)}static upload(J,Z,Y,W){for(let X=0,H=Z.length;X!==H;++X){let U=Z[X],Q=Y[U.id];if(Q.needsUpdate!==!1)U.setValue(J,Q.value,W)}}static seqWithValue(J,Z){let Y=[];for(let W=0,X=J.length;W!==X;++W){let H=J[W];if(H.id in Z)Y.push(H)}return Y}}function CO(J,Z,Y){let W=J.createShader(Z);return J.shaderSource(W,Y),J.compileShader(W),W}var U_=37297,Q_=0;function w_(J,Z){let Y=J.split(`
`),W=[],X=Math.max(Z-6,0),H=Math.min(Z+6,Y.length);for(let U=X;U<H;U++){let Q=U+1;W.push(`${Q===Z?">":" "} ${Q}: ${Y[U]}`)}return W.join(`
`)}var TO=new i0;function G_(J){W1._getMatrix(TO,W1.workingColorSpace,J);let Z=`mat3( ${TO.elements.map((Y)=>Y.toFixed(4))} )`;switch(W1.getTransfer(J)){case qG:return[Z,"LinearTransferOETF"];case B1:return[Z,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Z,"LinearTransferOETF"]}}function PO(J,Z,Y){let W=J.getShaderParameter(Z,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Z)||"").trim();if(W&&H==="")return"";let U=/ERROR: 0:(\d+)/.exec(H);if(U){let Q=parseInt(U[1]);return Y.toUpperCase()+`

`+H+`

`+w_(J.getShaderSource(Z),Q)}else return H}function $_(J,Z){let Y=G_(Z);return[`vec4 ${J}( vec4 value ) {`,`	return ${Y[1]}( vec4( value.rgb * ${Y[0]}, value.a ) );`,"}"].join(`
`)}function K_(J,Z){let Y;switch(Z){case fN:Y="Linear";break;case jN:Y="Reinhard";break;case bN:Y="Cineon";break;case EX:Y="ACESFilmic";break;case vN:Y="AgX";break;case yN:Y="Neutral";break;case hN:Y="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),Y="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Y+"ToneMapping( color ); }"}var JH=new v;function D_(){W1.getLuminanceCoefficients(JH);let J=JH.x.toFixed(4),Z=JH.y.toFixed(4),Y=JH.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Z}, ${Y} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function z_(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(QY).join(`
`)}function R_(J){let Z=[];for(let Y in J){let W=J[Y];if(W===!1)continue;Z.push("#define "+Y+" "+W)}return Z.join(`
`)}function N_(J,Z){let Y={},W=J.getProgramParameter(Z,J.ACTIVE_ATTRIBUTES);for(let X=0;X<W;X++){let H=J.getActiveAttrib(Z,X),U=H.name,Q=1;if(H.type===J.FLOAT_MAT2)Q=2;if(H.type===J.FLOAT_MAT3)Q=3;if(H.type===J.FLOAT_MAT4)Q=4;Y[U]={type:H.type,location:J.getAttribLocation(Z,U),locationSize:Q}}return Y}function QY(J){return J!==""}function SO(J,Z){let Y=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Y).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function xO(J,Z){return J.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function eG(J){return J.replace(O_,q_)}var F_=new Map;function q_(J,Z){let Y=n0[Z];if(Y===void 0){let W=F_.get(Z);if(W!==void 0)Y=n0[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Z,W);else throw Error("Can not resolve #include <"+Z+">")}return eG(Y)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fO(J){return J.replace(M_,L_)}function L_(J,Z,Y,W){let X="";for(let H=parseInt(Z);H<parseInt(Y);H++)X+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return X}function jO(J){let Z=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Z+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Z+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Z+=`
#define LOW_PRECISION`;return Z}function k_(J){let Z="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===jw)Z="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===qX)Z="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===I7)Z="SHADOWMAP_TYPE_VSM";return Z}function B_(J){let Z="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case QJ:case T9:Z="ENVMAP_TYPE_CUBE";break;case sZ:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function V_(J){let Z="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case T9:Z="ENVMAP_MODE_REFRACTION";break}return Z}function __(J){let Z="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case PN:Z="ENVMAP_BLENDING_MULTIPLY";break;case SN:Z="ENVMAP_BLENDING_MIX";break;case xN:Z="ENVMAP_BLENDING_ADD";break}return Z}function A_(J){let Z=J.envMapCubeUVHeight;if(Z===null)return null;let Y=Math.log2(Z)-2,W=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:W,maxMip:Y}}function E_(J,Z,Y,W){let X=J.getContext(),H=Y.defines,U=Y.vertexShader,Q=Y.fragmentShader,w=k_(Y),G=B_(Y),K=V_(Y),z=__(Y),D=A_(Y),R=z_(Y),q=R_(H),L=X.createProgram(),O,$,F=Y.glslVersion?"#version "+Y.glslVersion+`
`:"";if(Y.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,q].filter(QY).join(`
`),O.length>0)O+=`
`;if($=["#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,q].filter(QY).join(`
`),$.length>0)$+=`
`}else O=[jO(Y),"#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,q,Y.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Y.batching?"#define USE_BATCHING":"",Y.batchingColor?"#define USE_BATCHING_COLOR":"",Y.instancing?"#define USE_INSTANCING":"",Y.instancingColor?"#define USE_INSTANCING_COLOR":"",Y.instancingMorph?"#define USE_INSTANCING_MORPH":"",Y.useFog&&Y.fog?"#define USE_FOG":"",Y.useFog&&Y.fogExp2?"#define FOG_EXP2":"",Y.map?"#define USE_MAP":"",Y.envMap?"#define USE_ENVMAP":"",Y.envMap?"#define "+K:"",Y.lightMap?"#define USE_LIGHTMAP":"",Y.aoMap?"#define USE_AOMAP":"",Y.bumpMap?"#define USE_BUMPMAP":"",Y.normalMap?"#define USE_NORMALMAP":"",Y.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Y.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Y.displacementMap?"#define USE_DISPLACEMENTMAP":"",Y.emissiveMap?"#define USE_EMISSIVEMAP":"",Y.anisotropy?"#define USE_ANISOTROPY":"",Y.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Y.clearcoatMap?"#define USE_CLEARCOATMAP":"",Y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Y.specularMap?"#define USE_SPECULARMAP":"",Y.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Y.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Y.roughnessMap?"#define USE_ROUGHNESSMAP":"",Y.metalnessMap?"#define USE_METALNESSMAP":"",Y.alphaMap?"#define USE_ALPHAMAP":"",Y.alphaHash?"#define USE_ALPHAHASH":"",Y.transmission?"#define USE_TRANSMISSION":"",Y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Y.thicknessMap?"#define USE_THICKNESSMAP":"",Y.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Y.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Y.mapUv?"#define MAP_UV "+Y.mapUv:"",Y.alphaMapUv?"#define ALPHAMAP_UV "+Y.alphaMapUv:"",Y.lightMapUv?"#define LIGHTMAP_UV "+Y.lightMapUv:"",Y.aoMapUv?"#define AOMAP_UV "+Y.aoMapUv:"",Y.emissiveMapUv?"#define EMISSIVEMAP_UV "+Y.emissiveMapUv:"",Y.bumpMapUv?"#define BUMPMAP_UV "+Y.bumpMapUv:"",Y.normalMapUv?"#define NORMALMAP_UV "+Y.normalMapUv:"",Y.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Y.displacementMapUv:"",Y.metalnessMapUv?"#define METALNESSMAP_UV "+Y.metalnessMapUv:"",Y.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Y.roughnessMapUv:"",Y.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Y.anisotropyMapUv:"",Y.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Y.clearcoatMapUv:"",Y.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Y.clearcoatNormalMapUv:"",Y.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Y.clearcoatRoughnessMapUv:"",Y.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Y.iridescenceMapUv:"",Y.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Y.iridescenceThicknessMapUv:"",Y.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Y.sheenColorMapUv:"",Y.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Y.sheenRoughnessMapUv:"",Y.specularMapUv?"#define SPECULARMAP_UV "+Y.specularMapUv:"",Y.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Y.specularColorMapUv:"",Y.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Y.specularIntensityMapUv:"",Y.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Y.transmissionMapUv:"",Y.thicknessMapUv?"#define THICKNESSMAP_UV "+Y.thicknessMapUv:"",Y.vertexTangents&&Y.flatShading===!1?"#define USE_TANGENT":"",Y.vertexColors?"#define USE_COLOR":"",Y.vertexAlphas?"#define USE_COLOR_ALPHA":"",Y.vertexUv1s?"#define USE_UV1":"",Y.vertexUv2s?"#define USE_UV2":"",Y.vertexUv3s?"#define USE_UV3":"",Y.pointsUvs?"#define USE_POINTS_UV":"",Y.flatShading?"#define FLAT_SHADED":"",Y.skinning?"#define USE_SKINNING":"",Y.morphTargets?"#define USE_MORPHTARGETS":"",Y.morphNormals&&Y.flatShading===!1?"#define USE_MORPHNORMALS":"",Y.morphColors?"#define USE_MORPHCOLORS":"",Y.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Y.morphTextureStride:"",Y.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Y.morphTargetsCount:"",Y.doubleSided?"#define DOUBLE_SIDED":"",Y.flipSided?"#define FLIP_SIDED":"",Y.shadowMapEnabled?"#define USE_SHADOWMAP":"",Y.shadowMapEnabled?"#define "+w:"",Y.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Y.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Y.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Y.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(QY).join(`
`),$=[jO(Y),"#define SHADER_TYPE "+Y.shaderType,"#define SHADER_NAME "+Y.shaderName,q,Y.useFog&&Y.fog?"#define USE_FOG":"",Y.useFog&&Y.fogExp2?"#define FOG_EXP2":"",Y.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Y.map?"#define USE_MAP":"",Y.matcap?"#define USE_MATCAP":"",Y.envMap?"#define USE_ENVMAP":"",Y.envMap?"#define "+G:"",Y.envMap?"#define "+K:"",Y.envMap?"#define "+z:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",Y.lightMap?"#define USE_LIGHTMAP":"",Y.aoMap?"#define USE_AOMAP":"",Y.bumpMap?"#define USE_BUMPMAP":"",Y.normalMap?"#define USE_NORMALMAP":"",Y.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Y.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Y.emissiveMap?"#define USE_EMISSIVEMAP":"",Y.anisotropy?"#define USE_ANISOTROPY":"",Y.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Y.clearcoat?"#define USE_CLEARCOAT":"",Y.clearcoatMap?"#define USE_CLEARCOATMAP":"",Y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Y.dispersion?"#define USE_DISPERSION":"",Y.iridescence?"#define USE_IRIDESCENCE":"",Y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Y.specularMap?"#define USE_SPECULARMAP":"",Y.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Y.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Y.roughnessMap?"#define USE_ROUGHNESSMAP":"",Y.metalnessMap?"#define USE_METALNESSMAP":"",Y.alphaMap?"#define USE_ALPHAMAP":"",Y.alphaTest?"#define USE_ALPHATEST":"",Y.alphaHash?"#define USE_ALPHAHASH":"",Y.sheen?"#define USE_SHEEN":"",Y.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Y.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Y.transmission?"#define USE_TRANSMISSION":"",Y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Y.thicknessMap?"#define USE_THICKNESSMAP":"",Y.vertexTangents&&Y.flatShading===!1?"#define USE_TANGENT":"",Y.vertexColors||Y.instancingColor||Y.batchingColor?"#define USE_COLOR":"",Y.vertexAlphas?"#define USE_COLOR_ALPHA":"",Y.vertexUv1s?"#define USE_UV1":"",Y.vertexUv2s?"#define USE_UV2":"",Y.vertexUv3s?"#define USE_UV3":"",Y.pointsUvs?"#define USE_POINTS_UV":"",Y.gradientMap?"#define USE_GRADIENTMAP":"",Y.flatShading?"#define FLAT_SHADED":"",Y.doubleSided?"#define DOUBLE_SIDED":"",Y.flipSided?"#define FLIP_SIDED":"",Y.shadowMapEnabled?"#define USE_SHADOWMAP":"",Y.shadowMapEnabled?"#define "+w:"",Y.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Y.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Y.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Y.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Y.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Y.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Y.toneMapping!==U6?"#define TONE_MAPPING":"",Y.toneMapping!==U6?n0.tonemapping_pars_fragment:"",Y.toneMapping!==U6?K_("toneMapping",Y.toneMapping):"",Y.dithering?"#define DITHERING":"",Y.opaque?"#define OPAQUE":"",n0.colorspace_pars_fragment,$_("linearToOutputTexel",Y.outputColorSpace),D_(),Y.useDepthPacking?"#define DEPTH_PACKING "+Y.depthPacking:"",`
`].filter(QY).join(`
`);if(U=eG(U),U=SO(U,Y),U=xO(U,Y),Q=eG(Q),Q=SO(Q,Y),Q=xO(Q,Y),U=fO(U),Q=fO(Q),Y.isRawShaderMaterial!==!0)F=`#version 300 es
`,O=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,$=["#define varying in",Y.glslVersion===LG?"":"layout(location = 0) out highp vec4 pc_fragColor;",Y.glslVersion===LG?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+$;let N=F+O+U,M=F+$+Q,I=CO(X,X.VERTEX_SHADER,N),E=CO(X,X.FRAGMENT_SHADER,M);if(X.attachShader(L,I),X.attachShader(L,E),Y.index0AttributeName!==void 0)X.bindAttribLocation(L,0,Y.index0AttributeName);else if(Y.morphTargets===!0)X.bindAttribLocation(L,0,"position");X.linkProgram(L);function A(T){if(J.debug.checkShaderErrors){let b=X.getProgramInfoLog(L)||"",g=X.getShaderInfoLog(I)||"",l=X.getShaderInfoLog(E)||"",Y0=b.trim(),n=g.trim(),c=l.trim(),i=!0,N0=!0;if(X.getProgramParameter(L,X.LINK_STATUS)===!1)if(i=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(X,L,I,E);else{let M0=PO(X,I,"vertex"),d0=PO(X,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+X.getError()+" - VALIDATE_STATUS "+X.getProgramParameter(L,X.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Y0+`
`+M0+`
`+d0)}else if(Y0!=="")console.warn("THREE.WebGLProgram: Program Info Log:",Y0);else if(n===""||c==="")N0=!1;if(N0)T.diagnostics={runnable:i,programLog:Y0,vertexShader:{log:n,prefix:O},fragmentShader:{log:c,prefix:$}}}X.deleteShader(I),X.deleteShader(E),f=new wY(X,L),B=N_(X,L)}let f;this.getUniforms=function(){if(f===void 0)A(this);return f};let B;this.getAttributes=function(){if(B===void 0)A(this);return B};let V=Y.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=X.getProgramParameter(L,U_);return V},this.destroy=function(){W.releaseStatesOfProgram(this),X.deleteProgram(L),this.program=void 0},this.type=Y.shaderType,this.name=Y.shaderName,this.id=Q_++,this.cacheKey=Z,this.usedTimes=1,this.program=L,this.vertexShader=I,this.fragmentShader=E,this}var I_=0;class iO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Z,fragmentShader:Y}=J,W=this._getShaderStage(Z),X=this._getShaderStage(Y),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(X)===!1)H.add(X),X.usedTimes++;return this}remove(J){let Z=this.materialCache.get(J);for(let Y of Z)if(Y.usedTimes--,Y.usedTimes===0)this.shaderCache.delete(Y.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Z=this.materialCache,Y=Z.get(J);if(Y===void 0)Y=new Set,Z.set(J,Y);return Y}_getShaderStage(J){let Z=this.shaderCache,Y=Z.get(J);if(Y===void 0)Y=new sO(J),Z.set(J,Y);return Y}}class sO{constructor(J){this.id=I_++,this.code=J,this.usedTimes=0}}function C_(J,Z,Y,W,X,H,U){let Q=new vX,w=new iO,G=new Set,K=[],z=X.logarithmicDepthBuffer,D=X.vertexTextures,R=X.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(B){if(G.add(B),B===0)return"uv";return`uv${B}`}function O(B,V,T,b,g){let l=b.fog,Y0=g.geometry,n=B.isMeshStandardMaterial?b.environment:null,c=(B.isMeshStandardMaterial?Y:Z).get(B.envMap||n),i=!!c&&c.mapping===sZ?c.image.height:null,N0=q[B.type];if(B.precision!==null){if(R=X.getMaxPrecision(B.precision),R!==B.precision)console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",R,"instead.")}let M0=Y0.morphAttributes.position||Y0.morphAttributes.normal||Y0.morphAttributes.color,d0=M0!==void 0?M0.length:0,f0=0;if(Y0.morphAttributes.position!==void 0)f0=1;if(Y0.morphAttributes.normal!==void 0)f0=2;if(Y0.morphAttributes.color!==void 0)f0=3;let w1,m0,a,W0;if(N0){let X1=S7[N0];w1=X1.vertexShader,m0=X1.fragmentShader}else w1=B.vertexShader,m0=B.fragmentShader,w.update(B),a=w.getVertexShaderID(B),W0=w.getFragmentShaderID(B);let K0=J.getRenderTarget(),T0=J.state.buffers.depth.getReversed(),j0=g.isInstancedMesh===!0,b0=g.isBatchedMesh===!0,j1=!!B.map,P=!!B.matcap,R1=!!c,u0=!!B.aoMap,k0=!!B.lightMap,I0=!!B.bumpMap,L1=!!B.normalMap,S0=!!B.displacementMap,x0=!!B.emissiveMap,b1=!!B.metalnessMap,S1=!!B.roughnessMap,I1=B.anisotropy>0,C=B.clearcoat>0,k=B.dispersion>0,p=B.iridescence>0,r=B.sheen>0,J0=B.transmission>0,s=I1&&!!B.anisotropyMap,B0=C&&!!B.clearcoatMap,G0=C&&!!B.clearcoatNormalMap,A0=C&&!!B.clearcoatRoughnessMap,h0=p&&!!B.iridescenceMap,H0=p&&!!B.iridescenceThicknessMap,O0=r&&!!B.sheenColorMap,V0=r&&!!B.sheenRoughnessMap,P0=!!B.specularMap,z0=!!B.specularColorMap,y0=!!B.specularIntensityMap,x=J0&&!!B.transmissionMap,R0=J0&&!!B.thicknessMap,w0=!!B.gradientMap,L0=!!B.alphaMap,X0=B.alphaTest>0,e=!!B.alphaHash,_0=!!B.extensions,v0=U6;if(B.toneMapped){if(K0===null||K0.isXRRenderTarget===!0)v0=J.toneMapping}let Q1={shaderID:N0,shaderType:B.type,shaderName:B.name,vertexShader:w1,fragmentShader:m0,defines:B.defines,customVertexShaderID:a,customFragmentShaderID:W0,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:R,batching:b0,batchingColor:b0&&g._colorsTexture!==null,instancing:j0,instancingColor:j0&&g.instanceColor!==null,instancingMorph:j0&&g.morphTexture!==null,supportsVertexTextures:D,outputColorSpace:K0===null?J.outputColorSpace:K0.isXRRenderTarget===!0?K0.texture.colorSpace:tZ,alphaToCoverage:!!B.alphaToCoverage,map:j1,matcap:P,envMap:R1,envMapMode:R1&&c.mapping,envMapCubeUVHeight:i,aoMap:u0,lightMap:k0,bumpMap:I0,normalMap:L1,displacementMap:D&&S0,emissiveMap:x0,normalMapObjectSpace:L1&&B.normalMapType===eN,normalMapTangentSpace:L1&&B.normalMapType===tN,metalnessMap:b1,roughnessMap:S1,anisotropy:I1,anisotropyMap:s,clearcoat:C,clearcoatMap:B0,clearcoatNormalMap:G0,clearcoatRoughnessMap:A0,dispersion:k,iridescence:p,iridescenceMap:h0,iridescenceThicknessMap:H0,sheen:r,sheenColorMap:O0,sheenRoughnessMap:V0,specularMap:P0,specularColorMap:z0,specularIntensityMap:y0,transmission:J0,transmissionMap:x,thicknessMap:R0,gradientMap:w0,opaque:B.transparent===!1&&B.blending===cZ&&B.alphaToCoverage===!1,alphaMap:L0,alphaTest:X0,alphaHash:e,combine:B.combine,mapUv:j1&&L(B.map.channel),aoMapUv:u0&&L(B.aoMap.channel),lightMapUv:k0&&L(B.lightMap.channel),bumpMapUv:I0&&L(B.bumpMap.channel),normalMapUv:L1&&L(B.normalMap.channel),displacementMapUv:S0&&L(B.displacementMap.channel),emissiveMapUv:x0&&L(B.emissiveMap.channel),metalnessMapUv:b1&&L(B.metalnessMap.channel),roughnessMapUv:S1&&L(B.roughnessMap.channel),anisotropyMapUv:s&&L(B.anisotropyMap.channel),clearcoatMapUv:B0&&L(B.clearcoatMap.channel),clearcoatNormalMapUv:G0&&L(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A0&&L(B.clearcoatRoughnessMap.channel),iridescenceMapUv:h0&&L(B.iridescenceMap.channel),iridescenceThicknessMapUv:H0&&L(B.iridescenceThicknessMap.channel),sheenColorMapUv:O0&&L(B.sheenColorMap.channel),sheenRoughnessMapUv:V0&&L(B.sheenRoughnessMap.channel),specularMapUv:P0&&L(B.specularMap.channel),specularColorMapUv:z0&&L(B.specularColorMap.channel),specularIntensityMapUv:y0&&L(B.specularIntensityMap.channel),transmissionMapUv:x&&L(B.transmissionMap.channel),thicknessMapUv:R0&&L(B.thicknessMap.channel),alphaMapUv:L0&&L(B.alphaMap.channel),vertexTangents:!!Y0.attributes.tangent&&(L1||I1),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!Y0.attributes.color&&Y0.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!Y0.attributes.uv&&(j1||L0),fog:!!l,useFog:B.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:B.flatShading===!0&&B.wireframe===!1,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:z,reversedDepthBuffer:T0,skinning:g.isSkinnedMesh===!0,morphTargets:Y0.morphAttributes.position!==void 0,morphNormals:Y0.morphAttributes.normal!==void 0,morphColors:Y0.morphAttributes.color!==void 0,morphTargetsCount:d0,morphTextureStride:f0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:U.numPlanes,numClipIntersection:U.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&T.length>0,shadowMapType:J.shadowMap.type,toneMapping:v0,decodeVideoTexture:j1&&B.map.isVideoTexture===!0&&W1.getTransfer(B.map.colorSpace)===B1,decodeVideoTextureEmissive:x0&&B.emissiveMap.isVideoTexture===!0&&W1.getTransfer(B.emissiveMap.colorSpace)===B1,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===C7,flipSided:B.side===c8,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:_0&&B.extensions.clipCullDistance===!0&&W.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_0&&B.extensions.multiDraw===!0||b0)&&W.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return Q1.vertexUv1s=G.has(1),Q1.vertexUv2s=G.has(2),Q1.vertexUv3s=G.has(3),G.clear(),Q1}function $(B){let V=[];if(B.shaderID)V.push(B.shaderID);else V.push(B.customVertexShaderID),V.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let T in B.defines)V.push(T),V.push(B.defines[T]);if(B.isRawShaderMaterial===!1)F(V,B),N(V,B),V.push(J.outputColorSpace);return V.push(B.customProgramCacheKey),V.join()}function F(B,V){B.push(V.precision),B.push(V.outputColorSpace),B.push(V.envMapMode),B.push(V.envMapCubeUVHeight),B.push(V.mapUv),B.push(V.alphaMapUv),B.push(V.lightMapUv),B.push(V.aoMapUv),B.push(V.bumpMapUv),B.push(V.normalMapUv),B.push(V.displacementMapUv),B.push(V.emissiveMapUv),B.push(V.metalnessMapUv),B.push(V.roughnessMapUv),B.push(V.anisotropyMapUv),B.push(V.clearcoatMapUv),B.push(V.clearcoatNormalMapUv),B.push(V.clearcoatRoughnessMapUv),B.push(V.iridescenceMapUv),B.push(V.iridescenceThicknessMapUv),B.push(V.sheenColorMapUv),B.push(V.sheenRoughnessMapUv),B.push(V.specularMapUv),B.push(V.specularColorMapUv),B.push(V.specularIntensityMapUv),B.push(V.transmissionMapUv),B.push(V.thicknessMapUv),B.push(V.combine),B.push(V.fogExp2),B.push(V.sizeAttenuation),B.push(V.morphTargetsCount),B.push(V.morphAttributeCount),B.push(V.numDirLights),B.push(V.numPointLights),B.push(V.numSpotLights),B.push(V.numSpotLightMaps),B.push(V.numHemiLights),B.push(V.numRectAreaLights),B.push(V.numDirLightShadows),B.push(V.numPointLightShadows),B.push(V.numSpotLightShadows),B.push(V.numSpotLightShadowsWithMaps),B.push(V.numLightProbes),B.push(V.shadowMapType),B.push(V.toneMapping),B.push(V.numClippingPlanes),B.push(V.numClipIntersection),B.push(V.depthPacking)}function N(B,V){if(Q.disableAll(),V.supportsVertexTextures)Q.enable(0);if(V.instancing)Q.enable(1);if(V.instancingColor)Q.enable(2);if(V.instancingMorph)Q.enable(3);if(V.matcap)Q.enable(4);if(V.envMap)Q.enable(5);if(V.normalMapObjectSpace)Q.enable(6);if(V.normalMapTangentSpace)Q.enable(7);if(V.clearcoat)Q.enable(8);if(V.iridescence)Q.enable(9);if(V.alphaTest)Q.enable(10);if(V.vertexColors)Q.enable(11);if(V.vertexAlphas)Q.enable(12);if(V.vertexUv1s)Q.enable(13);if(V.vertexUv2s)Q.enable(14);if(V.vertexUv3s)Q.enable(15);if(V.vertexTangents)Q.enable(16);if(V.anisotropy)Q.enable(17);if(V.alphaHash)Q.enable(18);if(V.batching)Q.enable(19);if(V.dispersion)Q.enable(20);if(V.batchingColor)Q.enable(21);if(V.gradientMap)Q.enable(22);if(B.push(Q.mask),Q.disableAll(),V.fog)Q.enable(0);if(V.useFog)Q.enable(1);if(V.flatShading)Q.enable(2);if(V.logarithmicDepthBuffer)Q.enable(3);if(V.reversedDepthBuffer)Q.enable(4);if(V.skinning)Q.enable(5);if(V.morphTargets)Q.enable(6);if(V.morphNormals)Q.enable(7);if(V.morphColors)Q.enable(8);if(V.premultipliedAlpha)Q.enable(9);if(V.shadowMapEnabled)Q.enable(10);if(V.doubleSided)Q.enable(11);if(V.flipSided)Q.enable(12);if(V.useDepthPacking)Q.enable(13);if(V.dithering)Q.enable(14);if(V.transmission)Q.enable(15);if(V.sheen)Q.enable(16);if(V.opaque)Q.enable(17);if(V.pointsUvs)Q.enable(18);if(V.decodeVideoTexture)Q.enable(19);if(V.decodeVideoTextureEmissive)Q.enable(20);if(V.alphaToCoverage)Q.enable(21);B.push(Q.mask)}function M(B){let V=q[B.type],T;if(V){let b=S7[V];T=$O.clone(b.uniforms)}else T=B.uniforms;return T}function I(B,V){let T;for(let b=0,g=K.length;b<g;b++){let l=K[b];if(l.cacheKey===V){T=l,++T.usedTimes;break}}if(T===void 0)T=new E_(J,V,B,H),K.push(T);return T}function E(B){if(--B.usedTimes===0){let V=K.indexOf(B);K[V]=K[K.length-1],K.pop(),B.destroy()}}function A(B){w.remove(B)}function f(){w.dispose()}return{getParameters:O,getProgramCacheKey:$,getUniforms:M,acquireProgram:I,releaseProgram:E,releaseShaderCache:A,programs:K,dispose:f}}function T_(){let J=new WeakMap;function Z(U){return J.has(U)}function Y(U){let Q=J.get(U);if(Q===void 0)Q={},J.set(U,Q);return Q}function W(U){J.delete(U)}function X(U,Q,w){J.get(U)[Q]=w}function H(){J=new WeakMap}return{has:Z,get:Y,remove:W,update:X,dispose:H}}function P_(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.material.id!==Z.material.id)return J.material.id-Z.material.id;else if(J.z!==Z.z)return J.z-Z.z;else return J.id-Z.id}function bO(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.z!==Z.z)return Z.z-J.z;else return J.id-Z.id}function hO(){let J=[],Z=0,Y=[],W=[],X=[];function H(){Z=0,Y.length=0,W.length=0,X.length=0}function U(z,D,R,q,L,O){let $=J[Z];if($===void 0)$={id:z.id,object:z,geometry:D,material:R,groupOrder:q,renderOrder:z.renderOrder,z:L,group:O},J[Z]=$;else $.id=z.id,$.object=z,$.geometry=D,$.material=R,$.groupOrder=q,$.renderOrder=z.renderOrder,$.z=L,$.group=O;return Z++,$}function Q(z,D,R,q,L,O){let $=U(z,D,R,q,L,O);if(R.transmission>0)W.push($);else if(R.transparent===!0)X.push($);else Y.push($)}function w(z,D,R,q,L,O){let $=U(z,D,R,q,L,O);if(R.transmission>0)W.unshift($);else if(R.transparent===!0)X.unshift($);else Y.unshift($)}function G(z,D){if(Y.length>1)Y.sort(z||P_);if(W.length>1)W.sort(D||bO);if(X.length>1)X.sort(D||bO)}function K(){for(let z=Z,D=J.length;z<D;z++){let R=J[z];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Y,transmissive:W,transparent:X,init:H,push:Q,unshift:w,finish:K,sort:G}}function S_(){let J=new WeakMap;function Z(W,X){let H=J.get(W),U;if(H===void 0)U=new hO,J.set(W,[U]);else if(X>=H.length)U=new hO,H.push(U);else U=H[X];return U}function Y(){J=new WeakMap}return{get:Z,dispose:Y}}function x_(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Y;switch(Z.type){case"DirectionalLight":Y={direction:new v,color:new t0};break;case"SpotLight":Y={position:new v,direction:new v,color:new t0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Y={position:new v,color:new t0,distance:0,decay:0};break;case"HemisphereLight":Y={direction:new v,skyColor:new t0,groundColor:new t0};break;case"RectAreaLight":Y={color:new t0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Z.id]=Y,Y}}}function f_(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let Y;switch(Z.type){case"DirectionalLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"SpotLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"PointLight":Y={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Z.id]=Y,Y}}}var j_=0;function b_(J,Z){return(Z.castShadow?2:0)-(J.castShadow?2:0)+(Z.map?1:0)-(J.map?1:0)}function h_(J){let Z=new x_,Y=f_(),W={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)W.probe.push(new v);let X=new v,H=new P1,U=new P1;function Q(G){let K=0,z=0,D=0;for(let B=0;B<9;B++)W.probe[B].set(0,0,0);let R=0,q=0,L=0,O=0,$=0,F=0,N=0,M=0,I=0,E=0,A=0;G.sort(b_);for(let B=0,V=G.length;B<V;B++){let T=G[B],b=T.color,g=T.intensity,l=T.distance,Y0=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)K+=b.r*g,z+=b.g*g,D+=b.b*g;else if(T.isLightProbe){for(let n=0;n<9;n++)W.probe[n].addScaledVector(T.sh.coefficients[n],g);A++}else if(T.isDirectionalLight){let n=Z.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let c=T.shadow,i=Y.get(T);i.shadowIntensity=c.intensity,i.shadowBias=c.bias,i.shadowNormalBias=c.normalBias,i.shadowRadius=c.radius,i.shadowMapSize=c.mapSize,W.directionalShadow[R]=i,W.directionalShadowMap[R]=Y0,W.directionalShadowMatrix[R]=T.shadow.matrix,F++}W.directional[R]=n,R++}else if(T.isSpotLight){let n=Z.get(T);n.position.setFromMatrixPosition(T.matrixWorld),n.color.copy(b).multiplyScalar(g),n.distance=l,n.coneCos=Math.cos(T.angle),n.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),n.decay=T.decay,W.spot[L]=n;let c=T.shadow;if(T.map){if(W.spotLightMap[I]=T.map,I++,c.updateMatrices(T),T.castShadow)E++}if(W.spotLightMatrix[L]=c.matrix,T.castShadow){let i=Y.get(T);i.shadowIntensity=c.intensity,i.shadowBias=c.bias,i.shadowNormalBias=c.normalBias,i.shadowRadius=c.radius,i.shadowMapSize=c.mapSize,W.spotShadow[L]=i,W.spotShadowMap[L]=Y0,M++}L++}else if(T.isRectAreaLight){let n=Z.get(T);n.color.copy(b).multiplyScalar(g),n.halfWidth.set(T.width*0.5,0,0),n.halfHeight.set(0,T.height*0.5,0),W.rectArea[O]=n,O++}else if(T.isPointLight){let n=Z.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),n.distance=T.distance,n.decay=T.decay,T.castShadow){let c=T.shadow,i=Y.get(T);i.shadowIntensity=c.intensity,i.shadowBias=c.bias,i.shadowNormalBias=c.normalBias,i.shadowRadius=c.radius,i.shadowMapSize=c.mapSize,i.shadowCameraNear=c.camera.near,i.shadowCameraFar=c.camera.far,W.pointShadow[q]=i,W.pointShadowMap[q]=Y0,W.pointShadowMatrix[q]=T.shadow.matrix,N++}W.point[q]=n,q++}else if(T.isHemisphereLight){let n=Z.get(T);n.skyColor.copy(T.color).multiplyScalar(g),n.groundColor.copy(T.groundColor).multiplyScalar(g),W.hemi[$]=n,$++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=F0.LTC_FLOAT_1,W.rectAreaLTC2=F0.LTC_FLOAT_2;else W.rectAreaLTC1=F0.LTC_HALF_1,W.rectAreaLTC2=F0.LTC_HALF_2;W.ambient[0]=K,W.ambient[1]=z,W.ambient[2]=D;let f=W.hash;if(f.directionalLength!==R||f.pointLength!==q||f.spotLength!==L||f.rectAreaLength!==O||f.hemiLength!==$||f.numDirectionalShadows!==F||f.numPointShadows!==N||f.numSpotShadows!==M||f.numSpotMaps!==I||f.numLightProbes!==A)W.directional.length=R,W.spot.length=L,W.rectArea.length=O,W.point.length=q,W.hemi.length=$,W.directionalShadow.length=F,W.directionalShadowMap.length=F,W.pointShadow.length=N,W.pointShadowMap.length=N,W.spotShadow.length=M,W.spotShadowMap.length=M,W.directionalShadowMatrix.length=F,W.pointShadowMatrix.length=N,W.spotLightMatrix.length=M+I-E,W.spotLightMap.length=I,W.numSpotLightShadowsWithMaps=E,W.numLightProbes=A,f.directionalLength=R,f.pointLength=q,f.spotLength=L,f.rectAreaLength=O,f.hemiLength=$,f.numDirectionalShadows=F,f.numPointShadows=N,f.numSpotShadows=M,f.numSpotMaps=I,f.numLightProbes=A,W.version=j_++}function w(G,K){let z=0,D=0,R=0,q=0,L=0,O=K.matrixWorldInverse;for(let $=0,F=G.length;$<F;$++){let N=G[$];if(N.isDirectionalLight){let M=W.directional[z];M.direction.setFromMatrixPosition(N.matrixWorld),X.setFromMatrixPosition(N.target.matrixWorld),M.direction.sub(X),M.direction.transformDirection(O),z++}else if(N.isSpotLight){let M=W.spot[R];M.position.setFromMatrixPosition(N.matrixWorld),M.position.applyMatrix4(O),M.direction.setFromMatrixPosition(N.matrixWorld),X.setFromMatrixPosition(N.target.matrixWorld),M.direction.sub(X),M.direction.transformDirection(O),R++}else if(N.isRectAreaLight){let M=W.rectArea[q];M.position.setFromMatrixPosition(N.matrixWorld),M.position.applyMatrix4(O),U.identity(),H.copy(N.matrixWorld),H.premultiply(O),U.extractRotation(H),M.halfWidth.set(N.width*0.5,0,0),M.halfHeight.set(0,N.height*0.5,0),M.halfWidth.applyMatrix4(U),M.halfHeight.applyMatrix4(U),q++}else if(N.isPointLight){let M=W.point[D];M.position.setFromMatrixPosition(N.matrixWorld),M.position.applyMatrix4(O),D++}else if(N.isHemisphereLight){let M=W.hemi[L];M.direction.setFromMatrixPosition(N.matrixWorld),M.direction.transformDirection(O),L++}}}return{setup:Q,setupView:w,state:W}}function vO(J){let Z=new h_(J),Y=[],W=[];function X(K){G.camera=K,Y.length=0,W.length=0}function H(K){Y.push(K)}function U(K){W.push(K)}function Q(){Z.setup(Y)}function w(K){Z.setupView(Y,K)}let G={lightsArray:Y,shadowsArray:W,camera:null,lights:Z,transmissionRenderTarget:{}};return{init:X,state:G,setupLights:Q,setupLightsView:w,pushLight:H,pushShadow:U}}function v_(J){let Z=new WeakMap;function Y(X,H=0){let U=Z.get(X),Q;if(U===void 0)Q=new vO(J),Z.set(X,[Q]);else if(H>=U.length)Q=new vO(J),U.push(Q);else Q=U[H];return Q}function W(){Z=new WeakMap}return{get:Y,dispose:W}}var y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p_(J,Z,Y){let W=new XY,X=new r0,H=new r0,U=new z1,Q=new PG({depthPacking:rN}),w=new SG,G={},K=Y.maxTextureSize,z={[HJ]:c8,[c8]:HJ,[C7]:C7},D=new P7({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new r0},radius:{value:4}},vertexShader:y_,fragmentShader:g_}),R=D.clone();R.defines.HORIZONTAL_PASS=1;let q=new w7;q.setAttribute("position",new Q7(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new l0(q,D),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jw;let $=this.type;this.render=function(E,A,f){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(E.length===0)return;let B=J.getRenderTarget(),V=J.getActiveCubeFace(),T=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(a6),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let g=$!==I7&&this.type===I7,l=$===I7&&this.type!==I7;for(let Y0=0,n=E.length;Y0<n;Y0++){let c=E[Y0],i=c.shadow;if(i===void 0){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(i.autoUpdate===!1&&i.needsUpdate===!1)continue;X.copy(i.mapSize);let N0=i.getFrameExtents();if(X.multiply(N0),H.copy(i.mapSize),X.x>K||X.y>K){if(X.x>K)H.x=Math.floor(K/N0.x),X.x=H.x*N0.x,i.mapSize.x=H.x;if(X.y>K)H.y=Math.floor(K/N0.y),X.y=H.y*N0.y,i.mapSize.y=H.y}if(i.map===null||g===!0||l===!0){let d0=this.type!==I7?{minFilter:wJ,magFilter:wJ}:{};if(i.map!==null)i.map.dispose();i.map=new Q6(X.x,X.y,d0),i.map.texture.name=c.name+".shadowMap",i.camera.updateProjectionMatrix()}J.setRenderTarget(i.map),J.clear();let M0=i.getViewportCount();for(let d0=0;d0<M0;d0++){let f0=i.getViewport(d0);U.set(H.x*f0.x,H.y*f0.y,H.x*f0.z,H.y*f0.w),b.viewport(U),i.updateMatrices(c,d0),W=i.getFrustum(),M(A,f,i.camera,c,this.type)}if(i.isPointLightShadow!==!0&&this.type===I7)F(i,f);i.needsUpdate=!1}$=this.type,O.needsUpdate=!1,J.setRenderTarget(B,V,T)};function F(E,A){let f=Z.update(L);if(D.defines.VSM_SAMPLES!==E.blurSamples)D.defines.VSM_SAMPLES=E.blurSamples,R.defines.VSM_SAMPLES=E.blurSamples,D.needsUpdate=!0,R.needsUpdate=!0;if(E.mapPass===null)E.mapPass=new Q6(X.x,X.y);D.uniforms.shadow_pass.value=E.map.texture,D.uniforms.resolution.value=E.mapSize,D.uniforms.radius.value=E.radius,J.setRenderTarget(E.mapPass),J.clear(),J.renderBufferDirect(A,null,f,D,L,null),R.uniforms.shadow_pass.value=E.mapPass.texture,R.uniforms.resolution.value=E.mapSize,R.uniforms.radius.value=E.radius,J.setRenderTarget(E.map),J.clear(),J.renderBufferDirect(A,null,f,R,L,null)}function N(E,A,f,B){let V=null,T=f.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)V=T;else if(V=f.isPointLight===!0?w:Q,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let b=V.uuid,g=A.uuid,l=G[b];if(l===void 0)l={},G[b]=l;let Y0=l[g];if(Y0===void 0)Y0=V.clone(),l[g]=Y0,A.addEventListener("dispose",I);V=Y0}if(V.visible=A.visible,V.wireframe=A.wireframe,B===I7)V.side=A.shadowSide!==null?A.shadowSide:A.side;else V.side=A.shadowSide!==null?A.shadowSide:z[A.side];if(V.alphaMap=A.alphaMap,V.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,V.map=A.map,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,f.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let b=J.properties.get(V);b.light=f}return V}function M(E,A,f,B,V){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)){if((E.castShadow||E.receiveShadow&&V===I7)&&(!E.frustumCulled||W.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,E.matrixWorld);let g=Z.update(E),l=E.material;if(Array.isArray(l)){let Y0=g.groups;for(let n=0,c=Y0.length;n<c;n++){let i=Y0[n],N0=l[i.materialIndex];if(N0&&N0.visible){let M0=N(E,N0,B,V);E.onBeforeShadow(J,E,A,f,g,M0,i),J.renderBufferDirect(f,null,g,M0,E,i),E.onAfterShadow(J,E,A,f,g,M0,i)}}}else if(l.visible){let Y0=N(E,l,B,V);E.onBeforeShadow(J,E,A,f,g,Y0,null),J.renderBufferDirect(f,null,g,Y0,E,null),E.onAfterShadow(J,E,A,f,g,Y0,null)}}}let b=E.children;for(let g=0,l=b.length;g<l;g++)M(b[g],A,f,B,V)}function I(E){E.target.removeEventListener("dispose",I);for(let f in G){let B=G[f],V=E.target.uuid;if(V in B)B[V].dispose(),delete B[V]}}}var d_={[MX]:LX,[kX]:_X,[BX]:AX,[iZ]:VX,[LX]:MX,[_X]:kX,[AX]:BX,[VX]:iZ};function m_(J,Z){function Y(){let x=!1,R0=new z1,w0=null,L0=new z1(0,0,0,0);return{setMask:function(X0){if(w0!==X0&&!x)J.colorMask(X0,X0,X0,X0),w0=X0},setLocked:function(X0){x=X0},setClear:function(X0,e,_0,v0,Q1){if(Q1===!0)X0*=v0,e*=v0,_0*=v0;if(R0.set(X0,e,_0,v0),L0.equals(R0)===!1)J.clearColor(X0,e,_0,v0),L0.copy(R0)},reset:function(){x=!1,w0=null,L0.set(-1,0,0,0)}}}function W(){let x=!1,R0=!1,w0=null,L0=null,X0=null;return{setReversed:function(e){if(R0!==e){let _0=Z.get("EXT_clip_control");if(e)_0.clipControlEXT(_0.LOWER_LEFT_EXT,_0.ZERO_TO_ONE_EXT);else _0.clipControlEXT(_0.LOWER_LEFT_EXT,_0.NEGATIVE_ONE_TO_ONE_EXT);R0=e;let v0=X0;X0=null,this.setClear(v0)}},getReversed:function(){return R0},setTest:function(e){if(e)K0(J.DEPTH_TEST);else T0(J.DEPTH_TEST)},setMask:function(e){if(w0!==e&&!x)J.depthMask(e),w0=e},setFunc:function(e){if(R0)e=d_[e];if(L0!==e){switch(e){case MX:J.depthFunc(J.NEVER);break;case LX:J.depthFunc(J.ALWAYS);break;case kX:J.depthFunc(J.LESS);break;case iZ:J.depthFunc(J.LEQUAL);break;case BX:J.depthFunc(J.EQUAL);break;case VX:J.depthFunc(J.GEQUAL);break;case _X:J.depthFunc(J.GREATER);break;case AX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}L0=e}},setLocked:function(e){x=e},setClear:function(e){if(X0!==e){if(R0)e=1-e;J.clearDepth(e),X0=e}},reset:function(){x=!1,w0=null,L0=null,X0=null,R0=!1}}}function X(){let x=!1,R0=null,w0=null,L0=null,X0=null,e=null,_0=null,v0=null,Q1=null;return{setTest:function(X1){if(!x)if(X1)K0(J.STENCIL_TEST);else T0(J.STENCIL_TEST)},setMask:function(X1){if(R0!==X1&&!x)J.stencilMask(X1),R0=X1},setFunc:function(X1,q8,M8){if(w0!==X1||L0!==q8||X0!==M8)J.stencilFunc(X1,q8,M8),w0=X1,L0=q8,X0=M8},setOp:function(X1,q8,M8){if(e!==X1||_0!==q8||v0!==M8)J.stencilOp(X1,q8,M8),e=X1,_0=q8,v0=M8},setLocked:function(X1){x=X1},setClear:function(X1){if(Q1!==X1)J.clearStencil(X1),Q1=X1},reset:function(){x=!1,R0=null,w0=null,L0=null,X0=null,e=null,_0=null,v0=null,Q1=null}}}let H=new Y,U=new W,Q=new X,w=new WeakMap,G=new WeakMap,K={},z={},D=new WeakMap,R=[],q=null,L=!1,O=null,$=null,F=null,N=null,M=null,I=null,E=null,A=new t0(0,0,0),f=0,B=!1,V=null,T=null,b=null,g=null,l=null,Y0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),n=!1,c=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)c=parseFloat(/^WebGL (\d)/.exec(i)[1]),n=c>=1;else if(i.indexOf("OpenGL ES")!==-1)c=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),n=c>=2;let N0=null,M0={},d0=J.getParameter(J.SCISSOR_BOX),f0=J.getParameter(J.VIEWPORT),w1=new z1().fromArray(d0),m0=new z1().fromArray(f0);function a(x,R0,w0,L0){let X0=new Uint8Array(4),e=J.createTexture();J.bindTexture(x,e),J.texParameteri(x,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(x,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let _0=0;_0<w0;_0++)if(x===J.TEXTURE_3D||x===J.TEXTURE_2D_ARRAY)J.texImage3D(R0,0,J.RGBA,1,1,L0,0,J.RGBA,J.UNSIGNED_BYTE,X0);else J.texImage2D(R0+_0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,X0);return e}let W0={};W0[J.TEXTURE_2D]=a(J.TEXTURE_2D,J.TEXTURE_2D,1),W0[J.TEXTURE_CUBE_MAP]=a(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),W0[J.TEXTURE_2D_ARRAY]=a(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),W0[J.TEXTURE_3D]=a(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),U.setClear(1),Q.setClear(0),K0(J.DEPTH_TEST),U.setFunc(iZ),I0(!1),L1(fw),K0(J.CULL_FACE),u0(a6);function K0(x){if(K[x]!==!0)J.enable(x),K[x]=!0}function T0(x){if(K[x]!==!1)J.disable(x),K[x]=!1}function j0(x,R0){if(z[x]!==R0){if(J.bindFramebuffer(x,R0),z[x]=R0,x===J.DRAW_FRAMEBUFFER)z[J.FRAMEBUFFER]=R0;if(x===J.FRAMEBUFFER)z[J.DRAW_FRAMEBUFFER]=R0;return!0}return!1}function b0(x,R0){let w0=R,L0=!1;if(x){if(w0=D.get(R0),w0===void 0)w0=[],D.set(R0,w0);let X0=x.textures;if(w0.length!==X0.length||w0[0]!==J.COLOR_ATTACHMENT0){for(let e=0,_0=X0.length;e<_0;e++)w0[e]=J.COLOR_ATTACHMENT0+e;w0.length=X0.length,L0=!0}}else if(w0[0]!==J.BACK)w0[0]=J.BACK,L0=!0;if(L0)J.drawBuffers(w0)}function j1(x){if(q!==x)return J.useProgram(x),q=x,!0;return!1}let P={[UJ]:J.FUNC_ADD,[KN]:J.FUNC_SUBTRACT,[DN]:J.FUNC_REVERSE_SUBTRACT};P[zN]=J.MIN,P[RN]=J.MAX;let R1={[NN]:J.ZERO,[ON]:J.ONE,[FN]:J.SRC_COLOR,[MN]:J.SRC_ALPHA,[AN]:J.SRC_ALPHA_SATURATE,[VN]:J.DST_COLOR,[kN]:J.DST_ALPHA,[qN]:J.ONE_MINUS_SRC_COLOR,[LN]:J.ONE_MINUS_SRC_ALPHA,[_N]:J.ONE_MINUS_DST_COLOR,[BN]:J.ONE_MINUS_DST_ALPHA,[EN]:J.CONSTANT_COLOR,[IN]:J.ONE_MINUS_CONSTANT_COLOR,[CN]:J.CONSTANT_ALPHA,[TN]:J.ONE_MINUS_CONSTANT_ALPHA};function u0(x,R0,w0,L0,X0,e,_0,v0,Q1,X1){if(x===a6){if(L===!0)T0(J.BLEND),L=!1;return}if(L===!1)K0(J.BLEND),L=!0;if(x!==$N){if(x!==O||X1!==B){if($!==UJ||M!==UJ)J.blendEquation(J.FUNC_ADD),$=UJ,M=UJ;if(X1)switch(x){case cZ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case bw:J.blendFunc(J.ONE,J.ONE);break;case hw:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case vw:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case cZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case bw:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case hw:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vw:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}F=null,N=null,I=null,E=null,A.set(0,0,0),f=0,O=x,B=X1}return}if(X0=X0||R0,e=e||w0,_0=_0||L0,R0!==$||X0!==M)J.blendEquationSeparate(P[R0],P[X0]),$=R0,M=X0;if(w0!==F||L0!==N||e!==I||_0!==E)J.blendFuncSeparate(R1[w0],R1[L0],R1[e],R1[_0]),F=w0,N=L0,I=e,E=_0;if(v0.equals(A)===!1||Q1!==f)J.blendColor(v0.r,v0.g,v0.b,Q1),A.copy(v0),f=Q1;O=x,B=!1}function k0(x,R0){x.side===C7?T0(J.CULL_FACE):K0(J.CULL_FACE);let w0=x.side===c8;if(R0)w0=!w0;I0(w0),x.blending===cZ&&x.transparent===!1?u0(a6):u0(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),U.setFunc(x.depthFunc),U.setTest(x.depthTest),U.setMask(x.depthWrite),H.setMask(x.colorWrite);let L0=x.stencilWrite;if(Q.setTest(L0),L0)Q.setMask(x.stencilWriteMask),Q.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),Q.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass);x0(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?K0(J.SAMPLE_ALPHA_TO_COVERAGE):T0(J.SAMPLE_ALPHA_TO_COVERAGE)}function I0(x){if(V!==x){if(x)J.frontFace(J.CW);else J.frontFace(J.CCW);V=x}}function L1(x){if(x!==wN){if(K0(J.CULL_FACE),x!==T)if(x===fw)J.cullFace(J.BACK);else if(x===GN)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else T0(J.CULL_FACE);T=x}function S0(x){if(x!==b){if(n)J.lineWidth(x);b=x}}function x0(x,R0,w0){if(x){if(K0(J.POLYGON_OFFSET_FILL),g!==R0||l!==w0)J.polygonOffset(R0,w0),g=R0,l=w0}else T0(J.POLYGON_OFFSET_FILL)}function b1(x){if(x)K0(J.SCISSOR_TEST);else T0(J.SCISSOR_TEST)}function S1(x){if(x===void 0)x=J.TEXTURE0+Y0-1;if(N0!==x)J.activeTexture(x),N0=x}function I1(x,R0,w0){if(w0===void 0)if(N0===null)w0=J.TEXTURE0+Y0-1;else w0=N0;let L0=M0[w0];if(L0===void 0)L0={type:void 0,texture:void 0},M0[w0]=L0;if(L0.type!==x||L0.texture!==R0){if(N0!==w0)J.activeTexture(w0),N0=w0;J.bindTexture(x,R0||W0[x]),L0.type=x,L0.texture=R0}}function C(){let x=M0[N0];if(x!==void 0&&x.type!==void 0)J.bindTexture(x.type,null),x.type=void 0,x.texture=void 0}function k(){try{J.compressedTexImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function p(){try{J.compressedTexImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function r(){try{J.texSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function J0(){try{J.texSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function B0(){try{J.compressedTexSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function G0(){try{J.texStorage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function A0(){try{J.texStorage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function h0(){try{J.texImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function H0(){try{J.texImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function O0(x){if(w1.equals(x)===!1)J.scissor(x.x,x.y,x.z,x.w),w1.copy(x)}function V0(x){if(m0.equals(x)===!1)J.viewport(x.x,x.y,x.z,x.w),m0.copy(x)}function P0(x,R0){let w0=G.get(R0);if(w0===void 0)w0=new WeakMap,G.set(R0,w0);let L0=w0.get(x);if(L0===void 0)L0=J.getUniformBlockIndex(R0,x.name),w0.set(x,L0)}function z0(x,R0){let L0=G.get(R0).get(x);if(w.get(R0)!==L0)J.uniformBlockBinding(R0,L0,x.__bindingPointIndex),w.set(R0,L0)}function y0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),U.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),K={},N0=null,M0={},z={},D=new WeakMap,R=[],q=null,L=!1,O=null,$=null,F=null,N=null,M=null,I=null,E=null,A=new t0(0,0,0),f=0,B=!1,V=null,T=null,b=null,g=null,l=null,w1.set(0,0,J.canvas.width,J.canvas.height),m0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),U.reset(),Q.reset()}return{buffers:{color:H,depth:U,stencil:Q},enable:K0,disable:T0,bindFramebuffer:j0,drawBuffers:b0,useProgram:j1,setBlending:u0,setMaterial:k0,setFlipSided:I0,setCullFace:L1,setLineWidth:S0,setPolygonOffset:x0,setScissorTest:b1,activeTexture:S1,bindTexture:I1,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:p,texImage2D:h0,texImage3D:H0,updateUBOMapping:P0,uniformBlockBinding:z0,texStorage2D:G0,texStorage3D:A0,texSubImage2D:r,texSubImage3D:J0,compressedTexSubImage2D:s,compressedTexSubImage3D:B0,scissor:O0,viewport:V0,reset:y0}}function u_(J,Z,Y,W,X,H,U){let Q=Z.has("WEBGL_multisampled_render_to_texture")?Z.get("WEBGL_multisampled_render_to_texture"):null,w=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new r0,K=new WeakMap,z,D=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function q(C,k){return R?new OffscreenCanvas(C,k):lZ("canvas")}function L(C,k,p){let r=1,J0=I1(C);if(J0.width>p||J0.height>p)r=p/Math.max(J0.width,J0.height);if(r<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let s=Math.floor(r*J0.width),B0=Math.floor(r*J0.height);if(z===void 0)z=q(s,B0);let G0=k?q(s,B0):z;return G0.width=s,G0.height=B0,G0.getContext("2d").drawImage(C,0,0,s,B0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+s+"x"+B0+")."),G0}else{if("data"in C)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return C}return C}function O(C){return C.generateMipmaps}function $(C){J.generateMipmap(C)}function F(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function N(C,k,p,r,J0=!1){if(C!==null){if(J[C]!==void 0)return J[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let s=k;if(k===J.RED){if(p===J.FLOAT)s=J.R32F;if(p===J.HALF_FLOAT)s=J.R16F;if(p===J.UNSIGNED_BYTE)s=J.R8}if(k===J.RED_INTEGER){if(p===J.UNSIGNED_BYTE)s=J.R8UI;if(p===J.UNSIGNED_SHORT)s=J.R16UI;if(p===J.UNSIGNED_INT)s=J.R32UI;if(p===J.BYTE)s=J.R8I;if(p===J.SHORT)s=J.R16I;if(p===J.INT)s=J.R32I}if(k===J.RG){if(p===J.FLOAT)s=J.RG32F;if(p===J.HALF_FLOAT)s=J.RG16F;if(p===J.UNSIGNED_BYTE)s=J.RG8}if(k===J.RG_INTEGER){if(p===J.UNSIGNED_BYTE)s=J.RG8UI;if(p===J.UNSIGNED_SHORT)s=J.RG16UI;if(p===J.UNSIGNED_INT)s=J.RG32UI;if(p===J.BYTE)s=J.RG8I;if(p===J.SHORT)s=J.RG16I;if(p===J.INT)s=J.RG32I}if(k===J.RGB_INTEGER){if(p===J.UNSIGNED_BYTE)s=J.RGB8UI;if(p===J.UNSIGNED_SHORT)s=J.RGB16UI;if(p===J.UNSIGNED_INT)s=J.RGB32UI;if(p===J.BYTE)s=J.RGB8I;if(p===J.SHORT)s=J.RGB16I;if(p===J.INT)s=J.RGB32I}if(k===J.RGBA_INTEGER){if(p===J.UNSIGNED_BYTE)s=J.RGBA8UI;if(p===J.UNSIGNED_SHORT)s=J.RGBA16UI;if(p===J.UNSIGNED_INT)s=J.RGBA32UI;if(p===J.BYTE)s=J.RGBA8I;if(p===J.SHORT)s=J.RGBA16I;if(p===J.INT)s=J.RGBA32I}if(k===J.RGB){if(p===J.UNSIGNED_INT_5_9_9_9_REV)s=J.RGB9_E5;if(p===J.UNSIGNED_INT_10F_11F_11F_REV)s=J.R11F_G11F_B10F}if(k===J.RGBA){let B0=J0?qG:W1.getTransfer(r);if(p===J.FLOAT)s=J.RGBA32F;if(p===J.HALF_FLOAT)s=J.RGBA16F;if(p===J.UNSIGNED_BYTE)s=B0===B1?J.SRGB8_ALPHA8:J.RGBA8;if(p===J.UNSIGNED_SHORT_4_4_4_4)s=J.RGBA4;if(p===J.UNSIGNED_SHORT_5_5_5_1)s=J.RGB5_A1}if(s===J.R16F||s===J.R32F||s===J.RG16F||s===J.RG32F||s===J.RGBA16F||s===J.RGBA32F)Z.get("EXT_color_buffer_float");return s}function M(C,k){let p;if(C){if(k===null||k===$J||k===KJ)p=J.DEPTH24_STENCIL8;else if(k===t6)p=J.DEPTH32F_STENCIL8;else if(k===oZ)p=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===$J||k===KJ)p=J.DEPTH_COMPONENT24;else if(k===t6)p=J.DEPTH_COMPONENT32F;else if(k===oZ)p=J.DEPTH_COMPONENT16;return p}function I(C,k){if(O(C)===!0||C.isFramebufferTexture&&C.minFilter!==wJ&&C.minFilter!==P9)return Math.log2(Math.max(k.width,k.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return k.mipmaps.length;else return 1}function E(C){let k=C.target;if(k.removeEventListener("dispose",E),f(k),k.isVideoTexture)K.delete(k)}function A(C){let k=C.target;k.removeEventListener("dispose",A),V(k)}function f(C){let k=W.get(C);if(k.__webglInit===void 0)return;let p=C.source,r=D.get(p);if(r){let J0=r[k.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)B(C);if(Object.keys(r).length===0)D.delete(p)}W.remove(C)}function B(C){let k=W.get(C);J.deleteTexture(k.__webglTexture);let p=C.source,r=D.get(p);delete r[k.__cacheKey],U.memory.textures--}function V(C){let k=W.get(C);if(C.depthTexture)C.depthTexture.dispose(),W.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(k.__webglFramebuffer[r]))for(let J0=0;J0<k.__webglFramebuffer[r].length;J0++)J.deleteFramebuffer(k.__webglFramebuffer[r][J0]);else J.deleteFramebuffer(k.__webglFramebuffer[r]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[r])}else{if(Array.isArray(k.__webglFramebuffer))for(let r=0;r<k.__webglFramebuffer.length;r++)J.deleteFramebuffer(k.__webglFramebuffer[r]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let r=0;r<k.__webglColorRenderbuffer.length;r++)if(k.__webglColorRenderbuffer[r])J.deleteRenderbuffer(k.__webglColorRenderbuffer[r])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let p=C.textures;for(let r=0,J0=p.length;r<J0;r++){let s=W.get(p[r]);if(s.__webglTexture)J.deleteTexture(s.__webglTexture),U.memory.textures--;W.remove(p[r])}W.remove(C)}let T=0;function b(){T=0}function g(){let C=T;if(C>=X.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+X.maxTextures);return T+=1,C}function l(C){let k=[];return k.push(C.wrapS),k.push(C.wrapT),k.push(C.wrapR||0),k.push(C.magFilter),k.push(C.minFilter),k.push(C.anisotropy),k.push(C.internalFormat),k.push(C.format),k.push(C.type),k.push(C.generateMipmaps),k.push(C.premultiplyAlpha),k.push(C.flipY),k.push(C.unpackAlignment),k.push(C.colorSpace),k.join()}function Y0(C,k){let p=W.get(C);if(C.isVideoTexture)b1(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&p.__version!==C.version){let r=C.image;if(r===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(r.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W0(p,C,k);return}}else if(C.isExternalTexture)p.__webglTexture=C.sourceTexture?C.sourceTexture:null;Y.bindTexture(J.TEXTURE_2D,p.__webglTexture,J.TEXTURE0+k)}function n(C,k){let p=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&p.__version!==C.version){W0(p,C,k);return}Y.bindTexture(J.TEXTURE_2D_ARRAY,p.__webglTexture,J.TEXTURE0+k)}function c(C,k){let p=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&p.__version!==C.version){W0(p,C,k);return}Y.bindTexture(J.TEXTURE_3D,p.__webglTexture,J.TEXTURE0+k)}function i(C,k){let p=W.get(C);if(C.version>0&&p.__version!==C.version){K0(p,C,k);return}Y.bindTexture(J.TEXTURE_CUBE_MAP,p.__webglTexture,J.TEXTURE0+k)}let N0={[gN]:J.REPEAT,[pN]:J.CLAMP_TO_EDGE,[dN]:J.MIRRORED_REPEAT},M0={[wJ]:J.NEAREST,[mN]:J.NEAREST_MIPMAP_NEAREST,[nZ]:J.NEAREST_MIPMAP_LINEAR,[P9]:J.LINEAR,[TX]:J.LINEAR_MIPMAP_NEAREST,[GJ]:J.LINEAR_MIPMAP_LINEAR},d0={[JO]:J.NEVER,[UO]:J.ALWAYS,[ZO]:J.LESS,[MG]:J.LEQUAL,[YO]:J.EQUAL,[HO]:J.GEQUAL,[WO]:J.GREATER,[XO]:J.NOTEQUAL};function f0(C,k){if(k.type===t6&&Z.has("OES_texture_float_linear")===!1&&(k.magFilter===P9||k.magFilter===TX||k.magFilter===nZ||k.magFilter===GJ||k.minFilter===P9||k.minFilter===TX||k.minFilter===nZ||k.minFilter===GJ))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,N0[k.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,N0[k.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,N0[k.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,M0[k.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,M0[k.minFilter]),k.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,d0[k.compareFunction]);if(Z.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===wJ)return;if(k.minFilter!==nZ&&k.minFilter!==GJ)return;if(k.type===t6&&Z.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||W.get(k).__currentAnisotropy){let p=Z.get("EXT_texture_filter_anisotropic");J.texParameterf(C,p.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,X.getMaxAnisotropy())),W.get(k).__currentAnisotropy=k.anisotropy}}}function w1(C,k){let p=!1;if(C.__webglInit===void 0)C.__webglInit=!0,k.addEventListener("dispose",E);let r=k.source,J0=D.get(r);if(J0===void 0)J0={},D.set(r,J0);let s=l(k);if(s!==C.__cacheKey){if(J0[s]===void 0)J0[s]={texture:J.createTexture(),usedTimes:0},U.memory.textures++,p=!0;J0[s].usedTimes++;let B0=J0[C.__cacheKey];if(B0!==void 0){if(J0[C.__cacheKey].usedTimes--,B0.usedTimes===0)B(k)}C.__cacheKey=s,C.__webglTexture=J0[s].texture}return p}function m0(C,k,p){return Math.floor(Math.floor(C/p)/k)}function a(C,k,p,r){let s=C.updateRanges;if(s.length===0)Y.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,p,r,k.data);else{s.sort((H0,O0)=>H0.start-O0.start);let B0=0;for(let H0=1;H0<s.length;H0++){let O0=s[B0],V0=s[H0],P0=O0.start+O0.count,z0=m0(V0.start,k.width,4),y0=m0(O0.start,k.width,4);if(V0.start<=P0+1&&z0===y0&&m0(V0.start+V0.count-1,k.width,4)===z0)O0.count=Math.max(O0.count,V0.start+V0.count-O0.start);else++B0,s[B0]=V0}s.length=B0+1;let G0=J.getParameter(J.UNPACK_ROW_LENGTH),A0=J.getParameter(J.UNPACK_SKIP_PIXELS),h0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let H0=0,O0=s.length;H0<O0;H0++){let V0=s[H0],P0=Math.floor(V0.start/4),z0=Math.ceil(V0.count/4),y0=P0%k.width,x=Math.floor(P0/k.width),R0=z0,w0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,y0),J.pixelStorei(J.UNPACK_SKIP_ROWS,x),Y.texSubImage2D(J.TEXTURE_2D,0,y0,x,R0,1,p,r,k.data)}C.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,G0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,A0),J.pixelStorei(J.UNPACK_SKIP_ROWS,h0)}}function W0(C,k,p){let r=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)r=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)r=J.TEXTURE_3D;let J0=w1(C,k),s=k.source;Y.bindTexture(r,C.__webglTexture,J.TEXTURE0+p);let B0=W.get(s);if(s.version!==B0.__version||J0===!0){Y.activeTexture(J.TEXTURE0+p);let G0=W1.getPrimaries(W1.workingColorSpace),A0=k.colorSpace===S9?null:W1.getPrimaries(k.colorSpace),h0=k.colorSpace===S9||G0===A0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,h0);let H0=L(k.image,!1,X.maxTextureSize);H0=S1(k,H0);let O0=H.convert(k.format,k.colorSpace),V0=H.convert(k.type),P0=N(k.internalFormat,O0,V0,k.colorSpace,k.isVideoTexture);f0(r,k);let z0,y0=k.mipmaps,x=k.isVideoTexture!==!0,R0=B0.__version===void 0||J0===!0,w0=s.dataReady,L0=I(k,H0);if(k.isDepthTexture){if(P0=M(k.format===rZ,k.type),R0)if(x)Y.texStorage2D(J.TEXTURE_2D,1,P0,H0.width,H0.height);else Y.texImage2D(J.TEXTURE_2D,0,P0,H0.width,H0.height,0,O0,V0,null)}else if(k.isDataTexture)if(y0.length>0){if(x&&R0)Y.texStorage2D(J.TEXTURE_2D,L0,P0,y0[0].width,y0[0].height);for(let X0=0,e=y0.length;X0<e;X0++)if(z0=y0[X0],x){if(w0)Y.texSubImage2D(J.TEXTURE_2D,X0,0,0,z0.width,z0.height,O0,V0,z0.data)}else Y.texImage2D(J.TEXTURE_2D,X0,P0,z0.width,z0.height,0,O0,V0,z0.data);k.generateMipmaps=!1}else if(x){if(R0)Y.texStorage2D(J.TEXTURE_2D,L0,P0,H0.width,H0.height);if(w0)a(k,H0,O0,V0)}else Y.texImage2D(J.TEXTURE_2D,0,P0,H0.width,H0.height,0,O0,V0,H0.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(x&&R0)Y.texStorage3D(J.TEXTURE_2D_ARRAY,L0,P0,y0[0].width,y0[0].height,H0.depth);for(let X0=0,e=y0.length;X0<e;X0++)if(z0=y0[X0],k.format!==T7)if(O0!==null)if(x){if(w0)if(k.layerUpdates.size>0){let _0=cG(z0.width,z0.height,k.format,k.type);for(let v0 of k.layerUpdates){let Q1=z0.data.subarray(v0*_0/z0.data.BYTES_PER_ELEMENT,(v0+1)*_0/z0.data.BYTES_PER_ELEMENT);Y.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,v0,z0.width,z0.height,1,O0,Q1)}k.clearLayerUpdates()}else Y.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,z0.width,z0.height,H0.depth,O0,z0.data)}else Y.compressedTexImage3D(J.TEXTURE_2D_ARRAY,X0,P0,z0.width,z0.height,H0.depth,0,z0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(x){if(w0)Y.texSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,z0.width,z0.height,H0.depth,O0,V0,z0.data)}else Y.texImage3D(J.TEXTURE_2D_ARRAY,X0,P0,z0.width,z0.height,H0.depth,0,O0,V0,z0.data)}else{if(x&&R0)Y.texStorage2D(J.TEXTURE_2D,L0,P0,y0[0].width,y0[0].height);for(let X0=0,e=y0.length;X0<e;X0++)if(z0=y0[X0],k.format!==T7)if(O0!==null)if(x){if(w0)Y.compressedTexSubImage2D(J.TEXTURE_2D,X0,0,0,z0.width,z0.height,O0,z0.data)}else Y.compressedTexImage2D(J.TEXTURE_2D,X0,P0,z0.width,z0.height,0,z0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(x){if(w0)Y.texSubImage2D(J.TEXTURE_2D,X0,0,0,z0.width,z0.height,O0,V0,z0.data)}else Y.texImage2D(J.TEXTURE_2D,X0,P0,z0.width,z0.height,0,O0,V0,z0.data)}else if(k.isDataArrayTexture)if(x){if(R0)Y.texStorage3D(J.TEXTURE_2D_ARRAY,L0,P0,H0.width,H0.height,H0.depth);if(w0)if(k.layerUpdates.size>0){let X0=cG(H0.width,H0.height,k.format,k.type);for(let e of k.layerUpdates){let _0=H0.data.subarray(e*X0/H0.data.BYTES_PER_ELEMENT,(e+1)*X0/H0.data.BYTES_PER_ELEMENT);Y.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,e,H0.width,H0.height,1,O0,V0,_0)}k.clearLayerUpdates()}else Y.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,H0.width,H0.height,H0.depth,O0,V0,H0.data)}else Y.texImage3D(J.TEXTURE_2D_ARRAY,0,P0,H0.width,H0.height,H0.depth,0,O0,V0,H0.data);else if(k.isData3DTexture)if(x){if(R0)Y.texStorage3D(J.TEXTURE_3D,L0,P0,H0.width,H0.height,H0.depth);if(w0)Y.texSubImage3D(J.TEXTURE_3D,0,0,0,0,H0.width,H0.height,H0.depth,O0,V0,H0.data)}else Y.texImage3D(J.TEXTURE_3D,0,P0,H0.width,H0.height,H0.depth,0,O0,V0,H0.data);else if(k.isFramebufferTexture){if(R0)if(x)Y.texStorage2D(J.TEXTURE_2D,L0,P0,H0.width,H0.height);else{let{width:X0,height:e}=H0;for(let _0=0;_0<L0;_0++)Y.texImage2D(J.TEXTURE_2D,_0,P0,X0,e,0,O0,V0,null),X0>>=1,e>>=1}}else if(y0.length>0){if(x&&R0){let X0=I1(y0[0]);Y.texStorage2D(J.TEXTURE_2D,L0,P0,X0.width,X0.height)}for(let X0=0,e=y0.length;X0<e;X0++)if(z0=y0[X0],x){if(w0)Y.texSubImage2D(J.TEXTURE_2D,X0,0,0,O0,V0,z0)}else Y.texImage2D(J.TEXTURE_2D,X0,P0,O0,V0,z0);k.generateMipmaps=!1}else if(x){if(R0){let X0=I1(H0);Y.texStorage2D(J.TEXTURE_2D,L0,P0,X0.width,X0.height)}if(w0)Y.texSubImage2D(J.TEXTURE_2D,0,0,0,O0,V0,H0)}else Y.texImage2D(J.TEXTURE_2D,0,P0,O0,V0,H0);if(O(k))$(r);if(B0.__version=s.version,k.onUpdate)k.onUpdate(k)}C.__version=k.version}function K0(C,k,p){if(k.image.length!==6)return;let r=w1(C,k),J0=k.source;Y.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+p);let s=W.get(J0);if(J0.version!==s.__version||r===!0){Y.activeTexture(J.TEXTURE0+p);let B0=W1.getPrimaries(W1.workingColorSpace),G0=k.colorSpace===S9?null:W1.getPrimaries(k.colorSpace),A0=k.colorSpace===S9||B0===G0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let h0=k.isCompressedTexture||k.image[0].isCompressedTexture,H0=k.image[0]&&k.image[0].isDataTexture,O0=[];for(let e=0;e<6;e++){if(!h0&&!H0)O0[e]=L(k.image[e],!0,X.maxCubemapSize);else O0[e]=H0?k.image[e].image:k.image[e];O0[e]=S1(k,O0[e])}let V0=O0[0],P0=H.convert(k.format,k.colorSpace),z0=H.convert(k.type),y0=N(k.internalFormat,P0,z0,k.colorSpace),x=k.isVideoTexture!==!0,R0=s.__version===void 0||r===!0,w0=J0.dataReady,L0=I(k,V0);f0(J.TEXTURE_CUBE_MAP,k);let X0;if(h0){if(x&&R0)Y.texStorage2D(J.TEXTURE_CUBE_MAP,L0,y0,V0.width,V0.height);for(let e=0;e<6;e++){X0=O0[e].mipmaps;for(let _0=0;_0<X0.length;_0++){let v0=X0[_0];if(k.format!==T7)if(P0!==null)if(x){if(w0)Y.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0,0,0,v0.width,v0.height,P0,v0.data)}else Y.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0,y0,v0.width,v0.height,0,v0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(x){if(w0)Y.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0,0,0,v0.width,v0.height,P0,z0,v0.data)}else Y.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0,y0,v0.width,v0.height,0,P0,z0,v0.data)}}}else{if(X0=k.mipmaps,x&&R0){if(X0.length>0)L0++;let e=I1(O0[0]);Y.texStorage2D(J.TEXTURE_CUBE_MAP,L0,y0,e.width,e.height)}for(let e=0;e<6;e++)if(H0){if(x){if(w0)Y.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,O0[e].width,O0[e].height,P0,z0,O0[e].data)}else Y.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y0,O0[e].width,O0[e].height,0,P0,z0,O0[e].data);for(let _0=0;_0<X0.length;_0++){let Q1=X0[_0].image[e].image;if(x){if(w0)Y.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0+1,0,0,Q1.width,Q1.height,P0,z0,Q1.data)}else Y.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0+1,y0,Q1.width,Q1.height,0,P0,z0,Q1.data)}}else{if(x){if(w0)Y.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,P0,z0,O0[e])}else Y.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y0,P0,z0,O0[e]);for(let _0=0;_0<X0.length;_0++){let v0=X0[_0];if(x){if(w0)Y.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0+1,0,0,P0,z0,v0.image[e])}else Y.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,_0+1,y0,P0,z0,v0.image[e])}}}if(O(k))$(J.TEXTURE_CUBE_MAP);if(s.__version=J0.version,k.onUpdate)k.onUpdate(k)}C.__version=k.version}function T0(C,k,p,r,J0,s){let B0=H.convert(p.format,p.colorSpace),G0=H.convert(p.type),A0=N(p.internalFormat,B0,G0,p.colorSpace),h0=W.get(k),H0=W.get(p);if(H0.__renderTarget=k,!h0.__hasExternalTextures){let O0=Math.max(1,k.width>>s),V0=Math.max(1,k.height>>s);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)Y.texImage3D(J0,s,A0,O0,V0,k.depth,0,B0,G0,null);else Y.texImage2D(J0,s,A0,O0,V0,0,B0,G0,null)}if(Y.bindFramebuffer(J.FRAMEBUFFER,C),x0(k))Q.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,J0,H0.__webglTexture,0,S0(k));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,r,J0,H0.__webglTexture,s);Y.bindFramebuffer(J.FRAMEBUFFER,null)}function j0(C,k,p){if(J.bindRenderbuffer(J.RENDERBUFFER,C),k.depthBuffer){let r=k.depthTexture,J0=r&&r.isDepthTexture?r.type:null,s=M(k.stencilBuffer,J0),B0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=S0(k);if(x0(k))Q.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,G0,s,k.width,k.height);else if(p)J.renderbufferStorageMultisample(J.RENDERBUFFER,G0,s,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,s,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,B0,J.RENDERBUFFER,C)}else{let r=k.textures;for(let J0=0;J0<r.length;J0++){let s=r[J0],B0=H.convert(s.format,s.colorSpace),G0=H.convert(s.type),A0=N(s.internalFormat,B0,G0,s.colorSpace),h0=S0(k);if(p&&x0(k)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,h0,A0,k.width,k.height);else if(x0(k))Q.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,h0,A0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,A0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function b0(C,k){if(k&&k.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Y.bindFramebuffer(J.FRAMEBUFFER,C),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=W.get(k.depthTexture);if(r.__renderTarget=k,!r.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;Y0(k.depthTexture,0);let J0=r.__webglTexture,s=S0(k);if(k.depthTexture.format===PX)if(x0(k))Q.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,J0,0,s);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,J0,0);else if(k.depthTexture.format===rZ)if(x0(k))Q.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,J0,0,s);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,J0,0);else throw Error("Unknown depthTexture format")}function j1(C){let k=W.get(C),p=C.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==C.depthTexture){let r=C.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(r){let J0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,r.removeEventListener("dispose",J0)};r.addEventListener("dispose",J0),k.__depthDisposeCallback=J0}k.__boundDepthTexture=r}if(C.depthTexture&&!k.__autoAllocateDepthBuffer){if(p)throw Error("target.depthTexture not supported in Cube render targets");let r=C.texture.mipmaps;if(r&&r.length>0)b0(k.__webglFramebuffer[0],C);else b0(k.__webglFramebuffer,C)}else if(p){k.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(Y.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[r]),k.__webglDepthbuffer[r]===void 0)k.__webglDepthbuffer[r]=J.createRenderbuffer(),j0(k.__webglDepthbuffer[r],C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,s=k.__webglDepthbuffer[r];J.bindRenderbuffer(J.RENDERBUFFER,s),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,s)}}else{let r=C.texture.mipmaps;if(r&&r.length>0)Y.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else Y.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),j0(k.__webglDepthbuffer,C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,s=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,s),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,s)}}Y.bindFramebuffer(J.FRAMEBUFFER,null)}function P(C,k,p){let r=W.get(C);if(k!==void 0)T0(r.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(p!==void 0)j1(C)}function R1(C){let k=C.texture,p=W.get(C),r=W.get(k);C.addEventListener("dispose",A);let J0=C.textures,s=C.isWebGLCubeRenderTarget===!0,B0=J0.length>1;if(!B0){if(r.__webglTexture===void 0)r.__webglTexture=J.createTexture();r.__version=k.version,U.memory.textures++}if(s){p.__webglFramebuffer=[];for(let G0=0;G0<6;G0++)if(k.mipmaps&&k.mipmaps.length>0){p.__webglFramebuffer[G0]=[];for(let A0=0;A0<k.mipmaps.length;A0++)p.__webglFramebuffer[G0][A0]=J.createFramebuffer()}else p.__webglFramebuffer[G0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){p.__webglFramebuffer=[];for(let G0=0;G0<k.mipmaps.length;G0++)p.__webglFramebuffer[G0]=J.createFramebuffer()}else p.__webglFramebuffer=J.createFramebuffer();if(B0)for(let G0=0,A0=J0.length;G0<A0;G0++){let h0=W.get(J0[G0]);if(h0.__webglTexture===void 0)h0.__webglTexture=J.createTexture(),U.memory.textures++}if(C.samples>0&&x0(C)===!1){p.__webglMultisampledFramebuffer=J.createFramebuffer(),p.__webglColorRenderbuffer=[],Y.bindFramebuffer(J.FRAMEBUFFER,p.__webglMultisampledFramebuffer);for(let G0=0;G0<J0.length;G0++){let A0=J0[G0];p.__webglColorRenderbuffer[G0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,p.__webglColorRenderbuffer[G0]);let h0=H.convert(A0.format,A0.colorSpace),H0=H.convert(A0.type),O0=N(A0.internalFormat,h0,H0,A0.colorSpace,C.isXRRenderTarget===!0),V0=S0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,V0,O0,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,p.__webglColorRenderbuffer[G0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)p.__webglDepthRenderbuffer=J.createRenderbuffer(),j0(p.__webglDepthRenderbuffer,C,!0);Y.bindFramebuffer(J.FRAMEBUFFER,null)}}if(s){Y.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),f0(J.TEXTURE_CUBE_MAP,k);for(let G0=0;G0<6;G0++)if(k.mipmaps&&k.mipmaps.length>0)for(let A0=0;A0<k.mipmaps.length;A0++)T0(p.__webglFramebuffer[G0][A0],C,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,A0);else T0(p.__webglFramebuffer[G0],C,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,0);if(O(k))$(J.TEXTURE_CUBE_MAP);Y.unbindTexture()}else if(B0){for(let G0=0,A0=J0.length;G0<A0;G0++){let h0=J0[G0],H0=W.get(h0),O0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)O0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Y.bindTexture(O0,H0.__webglTexture),f0(O0,h0),T0(p.__webglFramebuffer,C,h0,J.COLOR_ATTACHMENT0+G0,O0,0),O(h0))$(O0)}Y.unbindTexture()}else{let G0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)G0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Y.bindTexture(G0,r.__webglTexture),f0(G0,k),k.mipmaps&&k.mipmaps.length>0)for(let A0=0;A0<k.mipmaps.length;A0++)T0(p.__webglFramebuffer[A0],C,k,J.COLOR_ATTACHMENT0,G0,A0);else T0(p.__webglFramebuffer,C,k,J.COLOR_ATTACHMENT0,G0,0);if(O(k))$(G0);Y.unbindTexture()}if(C.depthBuffer)j1(C)}function u0(C){let k=C.textures;for(let p=0,r=k.length;p<r;p++){let J0=k[p];if(O(J0)){let s=F(C),B0=W.get(J0).__webglTexture;Y.bindTexture(s,B0),$(s),Y.unbindTexture()}}}let k0=[],I0=[];function L1(C){if(C.samples>0){if(x0(C)===!1){let{textures:k,width:p,height:r}=C,J0=J.COLOR_BUFFER_BIT,s=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=W.get(C),G0=k.length>1;if(G0)for(let h0=0;h0<k.length;h0++)Y.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,null),Y.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,null,0);Y.bindFramebuffer(J.READ_FRAMEBUFFER,B0.__webglMultisampledFramebuffer);let A0=C.texture.mipmaps;if(A0&&A0.length>0)Y.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglFramebuffer[0]);else Y.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglFramebuffer);for(let h0=0;h0<k.length;h0++){if(C.resolveDepthBuffer){if(C.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(G0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[h0]);let H0=W.get(k[h0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,H0,0)}if(J.blitFramebuffer(0,0,p,r,0,0,p,r,J0,J.NEAREST),w===!0){if(k0.length=0,I0.length=0,k0.push(J.COLOR_ATTACHMENT0+h0),C.depthBuffer&&C.resolveDepthBuffer===!1)k0.push(s),I0.push(s),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,I0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,k0)}}if(Y.bindFramebuffer(J.READ_FRAMEBUFFER,null),Y.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),G0)for(let h0=0;h0<k.length;h0++){Y.bindFramebuffer(J.FRAMEBUFFER,B0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,B0.__webglColorRenderbuffer[h0]);let H0=W.get(k[h0]).__webglTexture;Y.bindFramebuffer(J.FRAMEBUFFER,B0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,H0,0)}Y.bindFramebuffer(J.DRAW_FRAMEBUFFER,B0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&w){let k=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function S0(C){return Math.min(X.maxSamples,C.samples)}function x0(C){let k=W.get(C);return C.samples>0&&Z.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function b1(C){let k=U.render.frame;if(K.get(C)!==k)K.set(C,k),C.update()}function S1(C,k){let{colorSpace:p,format:r,type:J0}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return k;if(p!==tZ&&p!==S9)if(W1.getTransfer(p)===B1){if(r!==T7||J0!==r6)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",p);return k}function I1(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)G.width=C.naturalWidth||C.width,G.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)G.width=C.displayWidth,G.height=C.displayHeight;else G.width=C.width,G.height=C.height;return G}this.allocateTextureUnit=g,this.resetTextureUnits=b,this.setTexture2D=Y0,this.setTexture2DArray=n,this.setTexture3D=c,this.setTextureCube=i,this.rebindTextures=P,this.setupRenderTarget=R1,this.updateRenderTargetMipmap=u0,this.updateMultisampleRenderTarget=L1,this.setupDepthRenderbuffer=j1,this.setupFrameBufferTexture=T0,this.useMultisampledRTT=x0}function l_(J,Z){function Y(W,X=S9){let H,U=W1.getTransfer(X);if(W===r6)return J.UNSIGNED_BYTE;if(W===gw)return J.UNSIGNED_SHORT_4_4_4_4;if(W===pw)return J.UNSIGNED_SHORT_5_5_5_1;if(W===cN)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===iN)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===uN)return J.BYTE;if(W===lN)return J.SHORT;if(W===oZ)return J.UNSIGNED_SHORT;if(W===yw)return J.INT;if(W===$J)return J.UNSIGNED_INT;if(W===t6)return J.FLOAT;if(W===aZ)return J.HALF_FLOAT;if(W===sN)return J.ALPHA;if(W===nN)return J.RGB;if(W===T7)return J.RGBA;if(W===PX)return J.DEPTH_COMPONENT;if(W===rZ)return J.DEPTH_STENCIL;if(W===oN)return J.RED;if(W===dw)return J.RED_INTEGER;if(W===aN)return J.RG;if(W===mw)return J.RG_INTEGER;if(W===uw)return J.RGBA_INTEGER;if(W===SX||W===xX||W===fX||W===jX)if(U===B1)if(H=Z.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(W===SX)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===xX)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===fX)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===jX)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Z.get("WEBGL_compressed_texture_s3tc"),H!==null){if(W===SX)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===xX)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===fX)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===jX)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===lw||W===cw||W===iw||W===sw)if(H=Z.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(W===lw)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===cw)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===iw)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===sw)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===nw||W===ow||W===aw)if(H=Z.get("WEBGL_compressed_texture_etc"),H!==null){if(W===nw||W===ow)return U===B1?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(W===aw)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(W===rw||W===tw||W===ew||W===JG||W===ZG||W===YG||W===WG||W===XG||W===HG||W===UG||W===QG||W===wG||W===GG||W===$G)if(H=Z.get("WEBGL_compressed_texture_astc"),H!==null){if(W===rw)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===tw)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===ew)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===JG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===ZG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===YG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===WG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===XG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===HG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===UG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===QG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===wG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===GG)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===$G)return U===B1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===KG||W===DG||W===zG)if(H=Z.get("EXT_texture_compression_bptc"),H!==null){if(W===KG)return U===B1?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===DG)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===zG)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===RG||W===NG||W===OG||W===FG)if(H=Z.get("EXT_texture_compression_rgtc"),H!==null){if(W===RG)return H.COMPRESSED_RED_RGTC1_EXT;if(W===NG)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===OG)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===FG)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===KJ)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:Y}}var c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Z){if(this.texture===null){let Y=new cX(J.texture);if(J.depthNear!==Z.depthNear||J.depthFar!==Z.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Y}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Z=J.cameras[0].viewport,Y=new P7({vertexShader:c_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Z.z},depthHeight:{value:Z.w}}});this.mesh=new l0(new b9(20,20),Y)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oO extends e6{constructor(J,Z){super();let Y=this,W=null,X=1,H=null,U="local-floor",Q=1,w=null,G=null,K=null,z=null,D=null,R=null,q=typeof XRWebGLBinding<"u",L=new nO,O={},$=Z.getContextAttributes(),F=null,N=null,M=[],I=[],E=new r0,A=null,f=new G8;f.viewport=new z1;let B=new G8;B.viewport=new z1;let V=[f,B],T=new mG,b=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let W0=M[a];if(W0===void 0)W0=new YY,M[a]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(a){let W0=M[a];if(W0===void 0)W0=new YY,M[a]=W0;return W0.getGripSpace()},this.getHand=function(a){let W0=M[a];if(W0===void 0)W0=new YY,M[a]=W0;return W0.getHandSpace()};function l(a){let W0=I.indexOf(a.inputSource);if(W0===-1)return;let K0=M[W0];if(K0!==void 0)K0.update(a.inputSource,a.frame,w||H),K0.dispatchEvent({type:a.type,data:a.inputSource})}function Y0(){W.removeEventListener("select",l),W.removeEventListener("selectstart",l),W.removeEventListener("selectend",l),W.removeEventListener("squeeze",l),W.removeEventListener("squeezestart",l),W.removeEventListener("squeezeend",l),W.removeEventListener("end",Y0),W.removeEventListener("inputsourceschange",n);for(let a=0;a<M.length;a++){let W0=I[a];if(W0===null)continue;I[a]=null,M[a].disconnect(W0)}b=null,g=null,L.reset();for(let a in O)delete O[a];J.setRenderTarget(F),D=null,z=null,K=null,W=null,N=null,m0.stop(),Y.isPresenting=!1,J.setPixelRatio(A),J.setSize(E.width,E.height,!1),Y.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(X=a,Y.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(U=a,Y.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return w||H},this.setReferenceSpace=function(a){w=a},this.getBaseLayer=function(){return z!==null?z:D},this.getBinding=function(){if(K===null&&q)K=new XRWebGLBinding(W,Z);return K},this.getFrame=function(){return R},this.getSession=function(){return W},this.setSession=async function(a){if(W=a,W!==null){if(F=J.getRenderTarget(),W.addEventListener("select",l),W.addEventListener("selectstart",l),W.addEventListener("selectend",l),W.addEventListener("squeeze",l),W.addEventListener("squeezestart",l),W.addEventListener("squeezeend",l),W.addEventListener("end",Y0),W.addEventListener("inputsourceschange",n),$.xrCompatible!==!0)await Z.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(E),!(q&&("createProjectionLayer"in XRWebGLBinding.prototype))){let K0={antialias:$.antialias,alpha:!0,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:X};D=new XRWebGLLayer(W,Z,K0),W.updateRenderState({baseLayer:D}),J.setPixelRatio(1),J.setSize(D.framebufferWidth,D.framebufferHeight,!1),N=new Q6(D.framebufferWidth,D.framebufferHeight,{format:T7,type:r6,colorSpace:J.outputColorSpace,stencilBuffer:$.stencil,resolveDepthBuffer:D.ignoreDepthValues===!1,resolveStencilBuffer:D.ignoreDepthValues===!1})}else{let K0=null,T0=null,j0=null;if($.depth)j0=$.stencil?Z.DEPTH24_STENCIL8:Z.DEPTH_COMPONENT24,K0=$.stencil?rZ:PX,T0=$.stencil?KJ:$J;let b0={colorFormat:Z.RGBA8,depthFormat:j0,scaleFactor:X};K=this.getBinding(),z=K.createProjectionLayer(b0),W.updateRenderState({layers:[z]}),J.setPixelRatio(1),J.setSize(z.textureWidth,z.textureHeight,!1),N=new Q6(z.textureWidth,z.textureHeight,{format:T7,type:r6,depthTexture:new lX(z.textureWidth,z.textureHeight,T0,void 0,void 0,void 0,void 0,void 0,void 0,K0),stencilBuffer:$.stencil,colorSpace:J.outputColorSpace,samples:$.antialias?4:0,resolveDepthBuffer:z.ignoreDepthValues===!1,resolveStencilBuffer:z.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(Q),w=null,H=await W.requestReferenceSpace(U),m0.setContext(W),m0.start(),Y.isPresenting=!0,Y.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function n(a){for(let W0=0;W0<a.removed.length;W0++){let K0=a.removed[W0],T0=I.indexOf(K0);if(T0>=0)I[T0]=null,M[T0].disconnect(K0)}for(let W0=0;W0<a.added.length;W0++){let K0=a.added[W0],T0=I.indexOf(K0);if(T0===-1){for(let b0=0;b0<M.length;b0++)if(b0>=I.length){I.push(K0),T0=b0;break}else if(I[b0]===null){I[b0]=K0,T0=b0;break}if(T0===-1)break}let j0=M[T0];if(j0)j0.connect(K0)}}let c=new v,i=new v;function N0(a,W0,K0){c.setFromMatrixPosition(W0.matrixWorld),i.setFromMatrixPosition(K0.matrixWorld);let T0=c.distanceTo(i),j0=W0.projectionMatrix.elements,b0=K0.projectionMatrix.elements,j1=j0[14]/(j0[10]-1),P=j0[14]/(j0[10]+1),R1=(j0[9]+1)/j0[5],u0=(j0[9]-1)/j0[5],k0=(j0[8]-1)/j0[0],I0=(b0[8]+1)/b0[0],L1=j1*k0,S0=j1*I0,x0=T0/(-k0+I0),b1=x0*-k0;if(W0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(b1),a.translateZ(x0),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),j0[10]===-1)a.projectionMatrix.copy(W0.projectionMatrix),a.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let S1=j1+x0,I1=P+x0,C=L1-b1,k=S0+(T0-b1),p=R1*P/I1*S1,r=u0*P/I1*S1;a.projectionMatrix.makePerspective(C,k,p,r,S1,I1),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function M0(a,W0){if(W0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(W0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(W===null)return;let{near:W0,far:K0}=a;if(L.texture!==null){if(L.depthNear>0)W0=L.depthNear;if(L.depthFar>0)K0=L.depthFar}if(T.near=B.near=f.near=W0,T.far=B.far=f.far=K0,b!==T.near||g!==T.far)W.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,g=T.far;T.layers.mask=a.layers.mask|6,f.layers.mask=T.layers.mask&3,B.layers.mask=T.layers.mask&5;let T0=a.parent,j0=T.cameras;M0(T,T0);for(let b0=0;b0<j0.length;b0++)M0(j0[b0],T0);if(j0.length===2)N0(T,f,B);else T.projectionMatrix.copy(f.projectionMatrix);d0(a,T,T0)};function d0(a,W0,K0){if(K0===null)a.matrix.copy(W0.matrixWorld);else a.matrix.copy(K0.matrixWorld),a.matrix.invert(),a.matrix.multiply(W0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(W0.projectionMatrix),a.projectionMatrixInverse.copy(W0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=FX*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return T},this.getFoveation=function(){if(z===null&&D===null)return;return Q},this.setFoveation=function(a){if(Q=a,z!==null)z.fixedFoveation=a;if(D!==null&&D.fixedFoveation!==void 0)D.fixedFoveation=a},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(T)},this.getCameraTexture=function(a){return O[a]};let f0=null;function w1(a,W0){if(G=W0.getViewerPose(w||H),R=W0,G!==null){let K0=G.views;if(D!==null)J.setRenderTargetFramebuffer(N,D.framebuffer),J.setRenderTarget(N);let T0=!1;if(K0.length!==T.cameras.length)T.cameras.length=0,T0=!0;for(let P=0;P<K0.length;P++){let R1=K0[P],u0=null;if(D!==null)u0=D.getViewport(R1);else{let I0=K.getViewSubImage(z,R1);if(u0=I0.viewport,P===0)J.setRenderTargetTextures(N,I0.colorTexture,I0.depthStencilTexture),J.setRenderTarget(N)}let k0=V[P];if(k0===void 0)k0=new G8,k0.layers.enable(P),k0.viewport=new z1,V[P]=k0;if(k0.matrix.fromArray(R1.transform.matrix),k0.matrix.decompose(k0.position,k0.quaternion,k0.scale),k0.projectionMatrix.fromArray(R1.projectionMatrix),k0.projectionMatrixInverse.copy(k0.projectionMatrix).invert(),k0.viewport.set(u0.x,u0.y,u0.width,u0.height),P===0)T.matrix.copy(k0.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);if(T0===!0)T.cameras.push(k0)}let j0=W.enabledFeatures;if(j0&&j0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&q){K=Y.getBinding();let P=K.getDepthInformation(K0[0]);if(P&&P.isValid&&P.texture)L.init(P,W.renderState)}if(j0&&j0.includes("camera-access")&&q){J.state.unbindTexture(),K=Y.getBinding();for(let P=0;P<K0.length;P++){let R1=K0[P].camera;if(R1){let u0=O[R1];if(!u0)u0=new cX,O[R1]=u0;let k0=K.getCameraImage(R1);u0.sourceTexture=k0}}}}for(let K0=0;K0<M.length;K0++){let T0=I[K0],j0=M[K0];if(T0!==null&&j0!==void 0)j0.update(T0,W0,w||H)}if(f0)f0(a,W0);if(W0.detectedPlanes)Y.dispatchEvent({type:"planesdetected",data:W0});R=null}let m0=new yO;m0.setAnimationLoop(w1),this.setAnimationLoop=function(a){f0=a},this.dispose=function(){}}}var d9=new O7,s_=new P1;function n_(J,Z){function Y(O,$){if(O.matrixAutoUpdate===!0)O.updateMatrix();$.value.copy(O.matrix)}function W(O,$){if($.color.getRGB(O.fogColor.value,IG(J)),$.isFog)O.fogNear.value=$.near,O.fogFar.value=$.far;else if($.isFogExp2)O.fogDensity.value=$.density}function X(O,$,F,N,M){if($.isMeshBasicMaterial)H(O,$);else if($.isMeshLambertMaterial)H(O,$);else if($.isMeshToonMaterial)H(O,$),z(O,$);else if($.isMeshPhongMaterial)H(O,$),K(O,$);else if($.isMeshStandardMaterial){if(H(O,$),D(O,$),$.isMeshPhysicalMaterial)R(O,$,M)}else if($.isMeshMatcapMaterial)H(O,$),q(O,$);else if($.isMeshDepthMaterial)H(O,$);else if($.isMeshDistanceMaterial)H(O,$),L(O,$);else if($.isMeshNormalMaterial)H(O,$);else if($.isLineBasicMaterial){if(U(O,$),$.isLineDashedMaterial)Q(O,$)}else if($.isPointsMaterial)w(O,$,F,N);else if($.isSpriteMaterial)G(O,$);else if($.isShadowMaterial)O.color.value.copy($.color),O.opacity.value=$.opacity;else if($.isShaderMaterial)$.uniformsNeedUpdate=!1}function H(O,$){if(O.opacity.value=$.opacity,$.color)O.diffuse.value.copy($.color);if($.emissive)O.emissive.value.copy($.emissive).multiplyScalar($.emissiveIntensity);if($.map)O.map.value=$.map,Y($.map,O.mapTransform);if($.alphaMap)O.alphaMap.value=$.alphaMap,Y($.alphaMap,O.alphaMapTransform);if($.bumpMap){if(O.bumpMap.value=$.bumpMap,Y($.bumpMap,O.bumpMapTransform),O.bumpScale.value=$.bumpScale,$.side===c8)O.bumpScale.value*=-1}if($.normalMap){if(O.normalMap.value=$.normalMap,Y($.normalMap,O.normalMapTransform),O.normalScale.value.copy($.normalScale),$.side===c8)O.normalScale.value.negate()}if($.displacementMap)O.displacementMap.value=$.displacementMap,Y($.displacementMap,O.displacementMapTransform),O.displacementScale.value=$.displacementScale,O.displacementBias.value=$.displacementBias;if($.emissiveMap)O.emissiveMap.value=$.emissiveMap,Y($.emissiveMap,O.emissiveMapTransform);if($.specularMap)O.specularMap.value=$.specularMap,Y($.specularMap,O.specularMapTransform);if($.alphaTest>0)O.alphaTest.value=$.alphaTest;let F=Z.get($),N=F.envMap,M=F.envMapRotation;if(N){if(O.envMap.value=N,d9.copy(M),d9.x*=-1,d9.y*=-1,d9.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1)d9.y*=-1,d9.z*=-1;O.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(d9)),O.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,O.reflectivity.value=$.reflectivity,O.ior.value=$.ior,O.refractionRatio.value=$.refractionRatio}if($.lightMap)O.lightMap.value=$.lightMap,O.lightMapIntensity.value=$.lightMapIntensity,Y($.lightMap,O.lightMapTransform);if($.aoMap)O.aoMap.value=$.aoMap,O.aoMapIntensity.value=$.aoMapIntensity,Y($.aoMap,O.aoMapTransform)}function U(O,$){if(O.diffuse.value.copy($.color),O.opacity.value=$.opacity,$.map)O.map.value=$.map,Y($.map,O.mapTransform)}function Q(O,$){O.dashSize.value=$.dashSize,O.totalSize.value=$.dashSize+$.gapSize,O.scale.value=$.scale}function w(O,$,F,N){if(O.diffuse.value.copy($.color),O.opacity.value=$.opacity,O.size.value=$.size*F,O.scale.value=N*0.5,$.map)O.map.value=$.map,Y($.map,O.uvTransform);if($.alphaMap)O.alphaMap.value=$.alphaMap,Y($.alphaMap,O.alphaMapTransform);if($.alphaTest>0)O.alphaTest.value=$.alphaTest}function G(O,$){if(O.diffuse.value.copy($.color),O.opacity.value=$.opacity,O.rotation.value=$.rotation,$.map)O.map.value=$.map,Y($.map,O.mapTransform);if($.alphaMap)O.alphaMap.value=$.alphaMap,Y($.alphaMap,O.alphaMapTransform);if($.alphaTest>0)O.alphaTest.value=$.alphaTest}function K(O,$){O.specular.value.copy($.specular),O.shininess.value=Math.max($.shininess,0.0001)}function z(O,$){if($.gradientMap)O.gradientMap.value=$.gradientMap}function D(O,$){if(O.metalness.value=$.metalness,$.metalnessMap)O.metalnessMap.value=$.metalnessMap,Y($.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=$.roughness,$.roughnessMap)O.roughnessMap.value=$.roughnessMap,Y($.roughnessMap,O.roughnessMapTransform);if($.envMap)O.envMapIntensity.value=$.envMapIntensity}function R(O,$,F){if(O.ior.value=$.ior,$.sheen>0){if(O.sheenColor.value.copy($.sheenColor).multiplyScalar($.sheen),O.sheenRoughness.value=$.sheenRoughness,$.sheenColorMap)O.sheenColorMap.value=$.sheenColorMap,Y($.sheenColorMap,O.sheenColorMapTransform);if($.sheenRoughnessMap)O.sheenRoughnessMap.value=$.sheenRoughnessMap,Y($.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if($.clearcoat>0){if(O.clearcoat.value=$.clearcoat,O.clearcoatRoughness.value=$.clearcoatRoughness,$.clearcoatMap)O.clearcoatMap.value=$.clearcoatMap,Y($.clearcoatMap,O.clearcoatMapTransform);if($.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=$.clearcoatRoughnessMap,Y($.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if($.clearcoatNormalMap){if(O.clearcoatNormalMap.value=$.clearcoatNormalMap,Y($.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy($.clearcoatNormalScale),$.side===c8)O.clearcoatNormalScale.value.negate()}}if($.dispersion>0)O.dispersion.value=$.dispersion;if($.iridescence>0){if(O.iridescence.value=$.iridescence,O.iridescenceIOR.value=$.iridescenceIOR,O.iridescenceThicknessMinimum.value=$.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=$.iridescenceThicknessRange[1],$.iridescenceMap)O.iridescenceMap.value=$.iridescenceMap,Y($.iridescenceMap,O.iridescenceMapTransform);if($.iridescenceThicknessMap)O.iridescenceThicknessMap.value=$.iridescenceThicknessMap,Y($.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if($.transmission>0){if(O.transmission.value=$.transmission,O.transmissionSamplerMap.value=F.texture,O.transmissionSamplerSize.value.set(F.width,F.height),$.transmissionMap)O.transmissionMap.value=$.transmissionMap,Y($.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=$.thickness,$.thicknessMap)O.thicknessMap.value=$.thicknessMap,Y($.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=$.attenuationDistance,O.attenuationColor.value.copy($.attenuationColor)}if($.anisotropy>0){if(O.anisotropyVector.value.set($.anisotropy*Math.cos($.anisotropyRotation),$.anisotropy*Math.sin($.anisotropyRotation)),$.anisotropyMap)O.anisotropyMap.value=$.anisotropyMap,Y($.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=$.specularIntensity,O.specularColor.value.copy($.specularColor),$.specularColorMap)O.specularColorMap.value=$.specularColorMap,Y($.specularColorMap,O.specularColorMapTransform);if($.specularIntensityMap)O.specularIntensityMap.value=$.specularIntensityMap,Y($.specularIntensityMap,O.specularIntensityMapTransform)}function q(O,$){if($.matcap)O.matcap.value=$.matcap}function L(O,$){let F=Z.get($).light;O.referencePosition.value.setFromMatrixPosition(F.matrixWorld),O.nearDistance.value=F.shadow.camera.near,O.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:X}}function o_(J,Z,Y,W){let X={},H={},U=[],Q=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function w(F,N){let M=N.program;W.uniformBlockBinding(F,M)}function G(F,N){let M=X[F.id];if(M===void 0)q(F),M=K(F),X[F.id]=M,F.addEventListener("dispose",O);let I=N.program;W.updateUBOMapping(F,I);let E=Z.render.frame;if(H[F.id]!==E)D(F),H[F.id]=E}function K(F){let N=z();F.__bindingPointIndex=N;let M=J.createBuffer(),I=F.__size,E=F.usage;return J.bindBuffer(J.UNIFORM_BUFFER,M),J.bufferData(J.UNIFORM_BUFFER,I,E),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,N,M),M}function z(){for(let F=0;F<Q;F++)if(U.indexOf(F)===-1)return U.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function D(F){let N=X[F.id],M=F.uniforms,I=F.__cache;J.bindBuffer(J.UNIFORM_BUFFER,N);for(let E=0,A=M.length;E<A;E++){let f=Array.isArray(M[E])?M[E]:[M[E]];for(let B=0,V=f.length;B<V;B++){let T=f[B];if(R(T,E,B,I)===!0){let b=T.__offset,g=Array.isArray(T.value)?T.value:[T.value],l=0;for(let Y0=0;Y0<g.length;Y0++){let n=g[Y0],c=L(n);if(typeof n==="number"||typeof n==="boolean")T.__data[0]=n,J.bufferSubData(J.UNIFORM_BUFFER,b+l,T.__data);else if(n.isMatrix3)T.__data[0]=n.elements[0],T.__data[1]=n.elements[1],T.__data[2]=n.elements[2],T.__data[3]=0,T.__data[4]=n.elements[3],T.__data[5]=n.elements[4],T.__data[6]=n.elements[5],T.__data[7]=0,T.__data[8]=n.elements[6],T.__data[9]=n.elements[7],T.__data[10]=n.elements[8],T.__data[11]=0;else n.toArray(T.__data,l),l+=c.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,b,T.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(F,N,M,I){let E=F.value,A=N+"_"+M;if(I[A]===void 0){if(typeof E==="number"||typeof E==="boolean")I[A]=E;else I[A]=E.clone();return!0}else{let f=I[A];if(typeof E==="number"||typeof E==="boolean"){if(f!==E)return I[A]=E,!0}else if(f.equals(E)===!1)return f.copy(E),!0}return!1}function q(F){let N=F.uniforms,M=0,I=16;for(let A=0,f=N.length;A<f;A++){let B=Array.isArray(N[A])?N[A]:[N[A]];for(let V=0,T=B.length;V<T;V++){let b=B[V],g=Array.isArray(b.value)?b.value:[b.value];for(let l=0,Y0=g.length;l<Y0;l++){let n=g[l],c=L(n),i=M%I,N0=i%c.boundary,M0=i+N0;if(M+=N0,M0!==0&&I-M0<c.storage)M+=I-M0;b.__data=new Float32Array(c.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,M+=c.storage}}}let E=M%I;if(E>0)M+=I-E;return F.__size=M,F.__cache={},this}function L(F){let N={boundary:0,storage:0};if(typeof F==="number"||typeof F==="boolean")N.boundary=4,N.storage=4;else if(F.isVector2)N.boundary=8,N.storage=8;else if(F.isVector3||F.isColor)N.boundary=16,N.storage=12;else if(F.isVector4)N.boundary=16,N.storage=16;else if(F.isMatrix3)N.boundary=48,N.storage=48;else if(F.isMatrix4)N.boundary=64,N.storage=64;else if(F.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F);return N}function O(F){let N=F.target;N.removeEventListener("dispose",O);let M=U.indexOf(N.__bindingPointIndex);U.splice(M,1),J.deleteBuffer(X[N.id]),delete X[N.id],delete H[N.id]}function $(){for(let F in X)J.deleteBuffer(X[F]);U=[],X={},H={}}return{bind:w,update:G,dispose:$}}class Z${constructor(J={}){let{canvas:Z=QO(),context:Y=null,depth:W=!0,stencil:X=!1,alpha:H=!1,antialias:U=!1,premultipliedAlpha:Q=!0,preserveDrawingBuffer:w=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:K=!1,reversedDepthBuffer:z=!1}=J;this.isWebGLRenderer=!0;let D;if(Y!==null){if(typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=Y.getContextAttributes().alpha}else D=H;let R=new Uint32Array(4),q=new Int32Array(4),L=null,O=null,$=[],F=[];this.domElement=Z,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=U6,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,M=!1;this._outputColorSpace=bX;let I=0,E=0,A=null,f=-1,B=null,V=new z1,T=new z1,b=null,g=new t0(0),l=0,Y0=Z.width,n=Z.height,c=1,i=null,N0=null,M0=new z1(0,0,Y0,n),d0=new z1(0,0,Y0,n),f0=!1,w1=new XY,m0=!1,a=!1,W0=new P1,K0=new v,T0=new z1,j0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b0=!1;function j1(){return A===null?c:1}let P=Y;function R1(_,h){return Z.getContext(_,h)}try{let _={alpha:!0,depth:W,stencil:X,antialias:U,premultipliedAlpha:Q,preserveDrawingBuffer:w,powerPreference:G,failIfMajorPerformanceCaveat:K};if("setAttribute"in Z)Z.setAttribute("data-engine",`three.js r${QN}`);if(Z.addEventListener("webglcontextlost",R0,!1),Z.addEventListener("webglcontextrestored",w0,!1),Z.addEventListener("webglcontextcreationerror",L0,!1),P===null){if(P=R1("webgl2",_),P===null)if(R1("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let u0,k0,I0,L1,S0,x0,b1,S1,I1,C,k,p,r,J0,s,B0,G0,A0,h0,H0,O0,V0,P0,z0;function y0(){if(u0=new zV(P),u0.init(),V0=new l_(P,u0),k0=new UV(P,u0,J,V0),I0=new m_(P,u0),k0.reversedDepthBuffer&&z)I0.buffers.depth.setReversed(!0);L1=new OV(P),S0=new T_,x0=new u_(P,u0,I0,S0,k0,V0,L1),b1=new wV(N),S1=new DV(N),I1=new BL(P),P0=new XV(P,I1),C=new RV(P,I1,L1,P0),k=new qV(P,C,I1,L1),h0=new FV(P,k0,x0),B0=new QV(S0),p=new C_(N,b1,S1,u0,k0,P0,B0),r=new n_(N,S0),J0=new S_,s=new v_(u0),A0=new WV(N,b1,S1,I0,k,D,Q),G0=new p_(N,k,k0),z0=new o_(P,L1,k0,I0),H0=new HV(P,u0,L1),O0=new NV(P,u0,L1),L1.programs=p.programs,N.capabilities=k0,N.extensions=u0,N.properties=S0,N.renderLists=J0,N.shadowMap=G0,N.state=I0,N.info=L1}y0();let x=new oO(N,P);this.xr=x,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=u0.get("WEBGL_lose_context");if(_)_.loseContext()},this.forceContextRestore=function(){let _=u0.get("WEBGL_lose_context");if(_)_.restoreContext()},this.getPixelRatio=function(){return c},this.setPixelRatio=function(_){if(_===void 0)return;c=_,this.setSize(Y0,n,!1)},this.getSize=function(_){return _.set(Y0,n)},this.setSize=function(_,h,m=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(Y0=_,n=h,Z.width=Math.floor(_*c),Z.height=Math.floor(h*c),m===!0)Z.style.width=_+"px",Z.style.height=h+"px";this.setViewport(0,0,_,h)},this.getDrawingBufferSize=function(_){return _.set(Y0*c,n*c).floor()},this.setDrawingBufferSize=function(_,h,m){Y0=_,n=h,c=m,Z.width=Math.floor(_*m),Z.height=Math.floor(h*m),this.setViewport(0,0,_,h)},this.getCurrentViewport=function(_){return _.copy(V)},this.getViewport=function(_){return _.copy(M0)},this.setViewport=function(_,h,m,u){if(_.isVector4)M0.set(_.x,_.y,_.z,_.w);else M0.set(_,h,m,u);I0.viewport(V.copy(M0).multiplyScalar(c).round())},this.getScissor=function(_){return _.copy(d0)},this.setScissor=function(_,h,m,u){if(_.isVector4)d0.set(_.x,_.y,_.z,_.w);else d0.set(_,h,m,u);I0.scissor(T.copy(d0).multiplyScalar(c).round())},this.getScissorTest=function(){return f0},this.setScissorTest=function(_){I0.setScissorTest(f0=_)},this.setOpaqueSort=function(_){i=_},this.setTransparentSort=function(_){N0=_},this.getClearColor=function(_){return _.copy(A0.getClearColor())},this.setClearColor=function(){A0.setClearColor(...arguments)},this.getClearAlpha=function(){return A0.getClearAlpha()},this.setClearAlpha=function(){A0.setClearAlpha(...arguments)},this.clear=function(_=!0,h=!0,m=!0){let u=0;if(_){let y=!1;if(A!==null){let U0=A.texture.format;y=U0===uw||U0===mw||U0===dw}if(y){let U0=A.texture.type,q0=U0===r6||U0===$J||U0===oZ||U0===KJ||U0===gw||U0===pw,E0=A0.getClearColor(),j=A0.getClearAlpha(),d=E0.r,o=E0.g,Z0=E0.b;if(q0)R[0]=d,R[1]=o,R[2]=Z0,R[3]=j,P.clearBufferuiv(P.COLOR,0,R);else q[0]=d,q[1]=o,q[2]=Z0,q[3]=j,P.clearBufferiv(P.COLOR,0,q)}else u|=P.COLOR_BUFFER_BIT}if(h)u|=P.DEPTH_BUFFER_BIT;if(m)u|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);P.clear(u)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Z.removeEventListener("webglcontextlost",R0,!1),Z.removeEventListener("webglcontextrestored",w0,!1),Z.removeEventListener("webglcontextcreationerror",L0,!1),A0.dispose(),J0.dispose(),s.dispose(),S0.dispose(),b1.dispose(),S1.dispose(),k.dispose(),P0.dispose(),z0.dispose(),p.dispose(),x.dispose(),x.removeEventListener("sessionstart",q8),x.removeEventListener("sessionend",M8),a1.stop()};function R0(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function w0(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let _=L1.autoReset,h=G0.enabled,m=G0.autoUpdate,u=G0.needsUpdate,y=G0.type;y0(),L1.autoReset=_,G0.enabled=h,G0.autoUpdate=m,G0.needsUpdate=u,G0.type=y}function L0(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function X0(_){let h=_.target;h.removeEventListener("dispose",X0),e(h)}function e(_){_0(_),S0.remove(_)}function _0(_){let h=S0.get(_).programs;if(h!==void 0){if(h.forEach(function(m){p.releaseProgram(m)}),_.isShaderMaterial)p.releaseShaderCache(_)}}this.renderBufferDirect=function(_,h,m,u,y,U0){if(h===null)h=j0;let q0=y.isMesh&&y.matrixWorld.determinant()<0,E0=$Y(_,h,m,u,y);I0.setMaterial(u,q0);let j=m.index,d=1;if(u.wireframe===!0){if(j=C.getWireframeAttribute(m),j===void 0)return;d=2}let o=m.drawRange,Z0=m.attributes.position,Q0=o.start*d,g0=(o.start+o.count)*d;if(U0!==null)Q0=Math.max(Q0,U0.start*d),g0=Math.min(g0,(U0.start+U0.count)*d);if(j!==null)Q0=Math.max(Q0,0),g0=Math.min(g0,j.count);else if(Z0!==void 0&&Z0!==null)Q0=Math.max(Q0,0),g0=Math.min(g0,Z0.count);let G1=g0-Q0;if(G1<0||G1===1/0)return;P0.setup(y,u,E0,m,j);let D0,s0=H0;if(j!==null)D0=I1.get(j),s0=O0,s0.setIndex(D0);if(y.isMesh)if(u.wireframe===!0)I0.setLineWidth(u.wireframeLinewidth*j1()),s0.setMode(P.LINES);else s0.setMode(P.TRIANGLES);else if(y.isLine){let C0=u.linewidth;if(C0===void 0)C0=1;if(I0.setLineWidth(C0*j1()),y.isLineSegments)s0.setMode(P.LINES);else if(y.isLineLoop)s0.setMode(P.LINE_LOOP);else s0.setMode(P.LINE_STRIP)}else if(y.isPoints)s0.setMode(P.POINTS);else if(y.isSprite)s0.setMode(P.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)XJ("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),s0.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!u0.get("WEBGL_multi_draw")){let{_multiDrawStarts:C0,_multiDrawCounts:V1,_multiDrawCount:Y1}=y,D8=j?I1.get(j).bytesPerElement:1,D6=S0.get(u).currentProgram.getUniforms();for(let x8=0;x8<Y1;x8++)D6.setValue(P,"_gl_DrawID",x8),s0.render(C0[x8]/D8,V1[x8])}else s0.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)s0.renderInstances(Q0,G1,y.count);else if(m.isInstancedBufferGeometry){let C0=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,V1=Math.min(m.instanceCount,C0);s0.renderInstances(Q0,G1,V1)}else s0.render(Q0,G1)};function v0(_,h,m){if(_.transparent===!0&&_.side===C7&&_.forceSinglePass===!1)_.side=c8,_.needsUpdate=!0,s9(_,h,m),_.side=HJ,_.needsUpdate=!0,s9(_,h,m),_.side=C7;else s9(_,h,m)}this.compile=function(_,h,m=null){if(m===null)m=_;if(O=s.get(m),O.init(h),F.push(O),m.traverseVisible(function(y){if(y.isLight&&y.layers.test(h.layers)){if(O.pushLight(y),y.castShadow)O.pushShadow(y)}}),_!==m)_.traverseVisible(function(y){if(y.isLight&&y.layers.test(h.layers)){if(O.pushLight(y),y.castShadow)O.pushShadow(y)}});O.setupLights();let u=new Set;return _.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let U0=y.material;if(U0)if(Array.isArray(U0))for(let q0=0;q0<U0.length;q0++){let E0=U0[q0];v0(E0,m,y),u.add(E0)}else v0(U0,m,y),u.add(U0)}),O=F.pop(),u},this.compileAsync=function(_,h,m=null){let u=this.compile(_,h,m);return new Promise((y)=>{function U0(){if(u.forEach(function(q0){if(S0.get(q0).currentProgram.isReady())u.delete(q0)}),u.size===0){y(_);return}setTimeout(U0,10)}if(u0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let Q1=null;function X1(_){if(Q1)Q1(_)}function q8(){a1.stop()}function M8(){a1.start()}let a1=new yO;if(a1.setAnimationLoop(X1),typeof self<"u")a1.setContext(self);this.setAnimationLoop=function(_){Q1=_,x.setAnimationLoop(_),_===null?a1.stop():a1.start()},x.addEventListener("sessionstart",q8),x.addEventListener("sessionend",M8),this.render=function(_,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(x.enabled===!0&&x.isPresenting===!0){if(x.cameraAutoUpdate===!0)x.updateCamera(h);h=x.getCamera()}if(_.isScene===!0)_.onBeforeRender(N,_,h,A);if(O=s.get(_,F.length),O.init(h),F.push(O),W0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),w1.setFromProjectionMatrix(W0,kG,h.reversedDepth),a=this.localClippingEnabled,m0=B0.init(this.clippingPlanes,a),L=J0.get(_,$.length),L.init(),$.push(L),x.enabled===!0&&x.isPresenting===!0){let U0=N.xr.getDepthSensingMesh();if(U0!==null)L8(U0,h,-1/0,N.sortObjects)}if(L8(_,h,0,N.sortObjects),L.finish(),N.sortObjects===!0)L.sort(i,N0);if(b0=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,b0)A0.addToRenderList(L,_);if(this.info.render.frame++,m0===!0)B0.beginShadows();let m=O.state.shadowsArray;if(G0.render(m,_,h),m0===!0)B0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:u,transmissive:y}=L;if(O.setupLights(),h.isArrayCamera){let U0=h.cameras;if(y.length>0)for(let q0=0,E0=U0.length;q0<E0;q0++){let j=U0[q0];i9(u,y,_,j)}if(b0)A0.render(_);for(let q0=0,E0=U0.length;q0<E0;q0++){let j=U0[q0];x7(L,_,j,j.viewport)}}else{if(y.length>0)i9(u,y,_,h);if(b0)A0.render(_);x7(L,_,h)}if(A!==null&&E===0)x0.updateMultisampleRenderTarget(A),x0.updateRenderTargetMipmap(A);if(_.isScene===!0)_.onAfterRender(N,_,h);if(P0.resetDefaultState(),f=-1,B=null,F.pop(),F.length>0){if(O=F[F.length-1],m0===!0)B0.setGlobalState(N.clippingPlanes,O.state.camera)}else O=null;if($.pop(),$.length>0)L=$[$.length-1];else L=null};function L8(_,h,m,u){if(_.visible===!1)return;if(_.layers.test(h.layers)){if(_.isGroup)m=_.renderOrder;else if(_.isLOD){if(_.autoUpdate===!0)_.update(h)}else if(_.isLight){if(O.pushLight(_),_.castShadow)O.pushShadow(_)}else if(_.isSprite){if(!_.frustumCulled||w1.intersectsSprite(_)){if(u)T0.setFromMatrixPosition(_.matrixWorld).applyMatrix4(W0);let q0=k.update(_),E0=_.material;if(E0.visible)L.push(_,q0,E0,m,T0.z,null)}}else if(_.isMesh||_.isLine||_.isPoints){if(!_.frustumCulled||w1.intersectsObject(_)){let q0=k.update(_),E0=_.material;if(u){if(_.boundingSphere!==void 0){if(_.boundingSphere===null)_.computeBoundingSphere();T0.copy(_.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();T0.copy(q0.boundingSphere.center)}T0.applyMatrix4(_.matrixWorld).applyMatrix4(W0)}if(Array.isArray(E0)){let j=q0.groups;for(let d=0,o=j.length;d<o;d++){let Z0=j[d],Q0=E0[Z0.materialIndex];if(Q0&&Q0.visible)L.push(_,q0,Q0,m,T0.z,Z0)}}else if(E0.visible)L.push(_,q0,E0,m,T0.z,null)}}}let U0=_.children;for(let q0=0,E0=U0.length;q0<E0;q0++)L8(U0[q0],h,m,u)}function x7(_,h,m,u){let{opaque:y,transmissive:U0,transparent:q0}=_;if(O.setupLightsView(m),m0===!0)B0.setGlobalState(N.clippingPlanes,m);if(u)I0.viewport(V.copy(u));if(y.length>0)K6(y,h,m);if(U0.length>0)K6(U0,h,m);if(q0.length>0)K6(q0,h,m);I0.buffers.depth.setTest(!0),I0.buffers.depth.setMask(!0),I0.buffers.color.setMask(!0),I0.setPolygonOffset(!1)}function i9(_,h,m,u){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[u.id]===void 0)O.state.transmissionRenderTarget[u.id]=new Q6(1,1,{generateMipmaps:!0,type:u0.has("EXT_color_buffer_half_float")||u0.has("EXT_color_buffer_float")?aZ:r6,minFilter:GJ,samples:4,stencilBuffer:X,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:W1.workingColorSpace});let U0=O.state.transmissionRenderTarget[u.id],q0=u.viewport||V;U0.setSize(q0.z*N.transmissionResolutionScale,q0.w*N.transmissionResolutionScale);let E0=N.getRenderTarget(),j=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();if(N.setRenderTarget(U0),N.getClearColor(g),l=N.getClearAlpha(),l<1)N.setClearColor(16777215,0.5);if(N.clear(),b0)A0.render(m);let o=N.toneMapping;N.toneMapping=U6;let Z0=u.viewport;if(u.viewport!==void 0)u.viewport=void 0;if(O.setupLightsView(u),m0===!0)B0.setGlobalState(N.clippingPlanes,u);if(K6(_,m,u),x0.updateMultisampleRenderTarget(U0),x0.updateRenderTargetMipmap(U0),u0.has("WEBGL_multisampled_render_to_texture")===!1){let Q0=!1;for(let g0=0,G1=h.length;g0<G1;g0++){let D0=h[g0],s0=D0.object,C0=D0.geometry,V1=D0.material,Y1=D0.group;if(V1.side===C7&&s0.layers.test(u.layers)){let D8=V1.side;V1.side=c8,V1.needsUpdate=!0,GY(s0,m,u,C0,V1,Y1),V1.side=D8,V1.needsUpdate=!0,Q0=!0}}if(Q0===!0)x0.updateMultisampleRenderTarget(U0),x0.updateRenderTargetMipmap(U0)}if(N.setRenderTarget(E0,j,d),N.setClearColor(g,l),Z0!==void 0)u.viewport=Z0;N.toneMapping=o}function K6(_,h,m){let u=h.isScene===!0?h.overrideMaterial:null;for(let y=0,U0=_.length;y<U0;y++){let q0=_[y],E0=q0.object,j=q0.geometry,d=q0.group,o=q0.material;if(o.allowOverride===!0&&u!==null)o=u;if(E0.layers.test(m.layers))GY(E0,h,m,j,o,d)}}function GY(_,h,m,u,y,U0){if(_.onBeforeRender(N,h,m,u,y,U0),_.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),y.onBeforeRender(N,h,m,u,_,U0),y.transparent===!0&&y.side===C7&&y.forceSinglePass===!1)y.side=c8,y.needsUpdate=!0,N.renderBufferDirect(m,h,u,y,_,U0),y.side=HJ,y.needsUpdate=!0,N.renderBufferDirect(m,h,u,y,_,U0),y.side=C7;else N.renderBufferDirect(m,h,u,y,_,U0);_.onAfterRender(N,h,m,u,y,U0)}function s9(_,h,m){if(h.isScene!==!0)h=j0;let u=S0.get(_),y=O.state.lights,U0=O.state.shadowsArray,q0=y.state.version,E0=p.getParameters(_,y.state,U0,h,m),j=p.getProgramCacheKey(E0),d=u.programs;if(u.environment=_.isMeshStandardMaterial?h.environment:null,u.fog=h.fog,u.envMap=(_.isMeshStandardMaterial?S1:b1).get(_.envMap||u.environment),u.envMapRotation=u.environment!==null&&_.envMap===null?h.environmentRotation:_.envMapRotation,d===void 0)_.addEventListener("dispose",X0),d=new Map,u.programs=d;let o=d.get(j);if(o!==void 0){if(u.currentProgram===o&&u.lightsStateVersion===q0)return Y9(_,E0),o}else E0.uniforms=p.getUniforms(_),_.onBeforeCompile(E0,N),o=p.acquireProgram(E0,j),d.set(j,o),u.uniforms=E0.uniforms;let Z0=u.uniforms;if(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)Z0.clippingPlanes=B0.uniform;if(Y9(_,E0),u.needsLights=KY(_),u.lightsStateVersion=q0,u.needsLights)Z0.ambientLightColor.value=y.state.ambient,Z0.lightProbe.value=y.state.probe,Z0.directionalLights.value=y.state.directional,Z0.directionalLightShadows.value=y.state.directionalShadow,Z0.spotLights.value=y.state.spot,Z0.spotLightShadows.value=y.state.spotShadow,Z0.rectAreaLights.value=y.state.rectArea,Z0.ltc_1.value=y.state.rectAreaLTC1,Z0.ltc_2.value=y.state.rectAreaLTC2,Z0.pointLights.value=y.state.point,Z0.pointLightShadows.value=y.state.pointShadow,Z0.hemisphereLights.value=y.state.hemi,Z0.directionalShadowMap.value=y.state.directionalShadowMap,Z0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,Z0.spotShadowMap.value=y.state.spotShadowMap,Z0.spotLightMatrix.value=y.state.spotLightMatrix,Z0.spotLightMap.value=y.state.spotLightMap,Z0.pointShadowMap.value=y.state.pointShadowMap,Z0.pointShadowMatrix.value=y.state.pointShadowMatrix;return u.currentProgram=o,u.uniformsList=null,o}function kJ(_){if(_.uniformsList===null){let h=_.currentProgram.getUniforms();_.uniformsList=wY.seqWithValue(h.seq,_.uniforms)}return _.uniformsList}function Y9(_,h){let m=S0.get(_);m.outputColorSpace=h.outputColorSpace,m.batching=h.batching,m.batchingColor=h.batchingColor,m.instancing=h.instancing,m.instancingColor=h.instancingColor,m.instancingMorph=h.instancingMorph,m.skinning=h.skinning,m.morphTargets=h.morphTargets,m.morphNormals=h.morphNormals,m.morphColors=h.morphColors,m.morphTargetsCount=h.morphTargetsCount,m.numClippingPlanes=h.numClippingPlanes,m.numIntersection=h.numClipIntersection,m.vertexAlphas=h.vertexAlphas,m.vertexTangents=h.vertexTangents,m.toneMapping=h.toneMapping}function $Y(_,h,m,u,y){if(h.isScene!==!0)h=j0;x0.resetTextureUnits();let U0=h.fog,q0=u.isMeshStandardMaterial?h.environment:null,E0=A===null?N.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tZ,j=(u.isMeshStandardMaterial?S1:b1).get(u.envMap||q0),d=u.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,o=!!m.attributes.tangent&&(!!u.normalMap||u.anisotropy>0),Z0=!!m.morphAttributes.position,Q0=!!m.morphAttributes.normal,g0=!!m.morphAttributes.color,G1=U6;if(u.toneMapped){if(A===null||A.isXRRenderTarget===!0)G1=N.toneMapping}let D0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,s0=D0!==void 0?D0.length:0,C0=S0.get(u),V1=O.state.lights;if(m0===!0){if(a===!0||_!==B){let z8=_===B&&u.id===f;B0.setState(u,_,z8)}}let Y1=!1;if(u.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==V1.state.version)Y1=!0;else if(C0.outputColorSpace!==E0)Y1=!0;else if(y.isBatchedMesh&&C0.batching===!1)Y1=!0;else if(!y.isBatchedMesh&&C0.batching===!0)Y1=!0;else if(y.isBatchedMesh&&C0.batchingColor===!0&&y.colorTexture===null)Y1=!0;else if(y.isBatchedMesh&&C0.batchingColor===!1&&y.colorTexture!==null)Y1=!0;else if(y.isInstancedMesh&&C0.instancing===!1)Y1=!0;else if(!y.isInstancedMesh&&C0.instancing===!0)Y1=!0;else if(y.isSkinnedMesh&&C0.skinning===!1)Y1=!0;else if(!y.isSkinnedMesh&&C0.skinning===!0)Y1=!0;else if(y.isInstancedMesh&&C0.instancingColor===!0&&y.instanceColor===null)Y1=!0;else if(y.isInstancedMesh&&C0.instancingColor===!1&&y.instanceColor!==null)Y1=!0;else if(y.isInstancedMesh&&C0.instancingMorph===!0&&y.morphTexture===null)Y1=!0;else if(y.isInstancedMesh&&C0.instancingMorph===!1&&y.morphTexture!==null)Y1=!0;else if(C0.envMap!==j)Y1=!0;else if(u.fog===!0&&C0.fog!==U0)Y1=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==B0.numPlanes||C0.numIntersection!==B0.numIntersection))Y1=!0;else if(C0.vertexAlphas!==d)Y1=!0;else if(C0.vertexTangents!==o)Y1=!0;else if(C0.morphTargets!==Z0)Y1=!0;else if(C0.morphNormals!==Q0)Y1=!0;else if(C0.morphColors!==g0)Y1=!0;else if(C0.toneMapping!==G1)Y1=!0;else if(C0.morphTargetsCount!==s0)Y1=!0}else Y1=!0,C0.__version=u.version;let D8=C0.currentProgram;if(Y1===!0)D8=s9(u,h,y);let D6=!1,x8=!1,VJ=!1,T1=D8.getUniforms(),i8=C0.uniforms;if(I0.useProgram(D8.program))D6=!0,x8=!0,VJ=!0;if(u.id!==f)f=u.id,x8=!0;if(D6||B!==_){if(I0.buffers.depth.getReversed()&&_.reversedDepth!==!0)_._reversedDepth=!0,_.updateProjectionMatrix();T1.setValue(P,"projectionMatrix",_.projectionMatrix),T1.setValue(P,"viewMatrix",_.matrixWorldInverse);let k8=T1.map.cameraPosition;if(k8!==void 0)k8.setValue(P,K0.setFromMatrixPosition(_.matrixWorld));if(k0.logarithmicDepthBuffer)T1.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2));if(u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshLambertMaterial||u.isMeshBasicMaterial||u.isMeshStandardMaterial||u.isShaderMaterial)T1.setValue(P,"isOrthographic",_.isOrthographicCamera===!0);if(B!==_)B=_,x8=!0,VJ=!0}if(y.isSkinnedMesh){T1.setOptional(P,y,"bindMatrix"),T1.setOptional(P,y,"bindMatrixInverse");let z8=y.skeleton;if(z8){if(z8.boneTexture===null)z8.computeBoneTexture();T1.setValue(P,"boneTexture",z8.boneTexture,x0)}}if(y.isBatchedMesh){if(T1.setOptional(P,y,"batchingTexture"),T1.setValue(P,"batchingTexture",y._matricesTexture,x0),T1.setOptional(P,y,"batchingIdTexture"),T1.setValue(P,"batchingIdTexture",y._indirectTexture,x0),T1.setOptional(P,y,"batchingColorTexture"),y._colorsTexture!==null)T1.setValue(P,"batchingColorTexture",y._colorsTexture,x0)}let s8=m.morphAttributes;if(s8.position!==void 0||s8.normal!==void 0||s8.color!==void 0)h0.update(y,m,D8);if(x8||C0.receiveShadow!==y.receiveShadow)C0.receiveShadow=y.receiveShadow,T1.setValue(P,"receiveShadow",y.receiveShadow);if(u.isMeshGouraudMaterial&&u.envMap!==null)i8.envMap.value=j,i8.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1;if(u.isMeshStandardMaterial&&u.envMap===null&&h.environment!==null)i8.envMapIntensity.value=h.environmentIntensity;if(x8){if(T1.setValue(P,"toneMappingExposure",N.toneMappingExposure),C0.needsLights)BJ(i8,VJ);if(U0&&u.fog===!0)r.refreshFogUniforms(i8,U0);r.refreshMaterialUniforms(i8,u,c,n,O.state.transmissionRenderTarget[_.id]),wY.upload(P,kJ(C0),i8,x0)}if(u.isShaderMaterial&&u.uniformsNeedUpdate===!0)wY.upload(P,kJ(C0),i8,x0),u.uniformsNeedUpdate=!1;if(u.isSpriteMaterial)T1.setValue(P,"center",y.center);if(T1.setValue(P,"modelViewMatrix",y.modelViewMatrix),T1.setValue(P,"normalMatrix",y.normalMatrix),T1.setValue(P,"modelMatrix",y.matrixWorld),u.isShaderMaterial||u.isRawShaderMaterial){let z8=u.uniformsGroups;for(let k8=0,YH=z8.length;k8<YH;k8++){let W9=z8[k8];z0.update(W9,D8),z0.bind(W9,D8)}}return D8}function BJ(_,h){_.ambientLightColor.needsUpdate=h,_.lightProbe.needsUpdate=h,_.directionalLights.needsUpdate=h,_.directionalLightShadows.needsUpdate=h,_.pointLights.needsUpdate=h,_.pointLightShadows.needsUpdate=h,_.spotLights.needsUpdate=h,_.spotLightShadows.needsUpdate=h,_.rectAreaLights.needsUpdate=h,_.hemisphereLights.needsUpdate=h}function KY(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,h,m){let u=S0.get(_);if(u.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,u.__autoAllocateDepthBuffer===!1)u.__useRenderToTexture=!1;S0.get(_.texture).__webglTexture=h,S0.get(_.depthTexture).__webglTexture=u.__autoAllocateDepthBuffer?void 0:m,u.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,h){let m=S0.get(_);m.__webglFramebuffer=h,m.__useDefaultFramebuffer=h===void 0};let DY=P.createFramebuffer();this.setRenderTarget=function(_,h=0,m=0){A=_,I=h,E=m;let u=!0,y=null,U0=!1,q0=!1;if(_){let j=S0.get(_);if(j.__useDefaultFramebuffer!==void 0)I0.bindFramebuffer(P.FRAMEBUFFER,null),u=!1;else if(j.__webglFramebuffer===void 0)x0.setupRenderTarget(_);else if(j.__hasExternalTextures)x0.rebindTextures(_,S0.get(_.texture).__webglTexture,S0.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Z0=_.depthTexture;if(j.__boundDepthTexture!==Z0){if(Z0!==null&&S0.has(Z0)&&(_.width!==Z0.image.width||_.height!==Z0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x0.setupDepthRenderbuffer(_)}}let d=_.texture;if(d.isData3DTexture||d.isDataArrayTexture||d.isCompressedArrayTexture)q0=!0;let o=S0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget){if(Array.isArray(o[h]))y=o[h][m];else y=o[h];U0=!0}else if(_.samples>0&&x0.useMultisampledRTT(_)===!1)y=S0.get(_).__webglMultisampledFramebuffer;else if(Array.isArray(o))y=o[m];else y=o;V.copy(_.viewport),T.copy(_.scissor),b=_.scissorTest}else V.copy(M0).multiplyScalar(c).floor(),T.copy(d0).multiplyScalar(c).floor(),b=f0;if(m!==0)y=DY;if(I0.bindFramebuffer(P.FRAMEBUFFER,y)&&u)I0.drawBuffers(_,y);if(I0.viewport(V),I0.scissor(T),I0.setScissorTest(b),U0){let j=S0.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+h,j.__webglTexture,m)}else if(q0){let j=h;for(let d=0;d<_.textures.length;d++){let o=S0.get(_.textures[d]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+d,o.__webglTexture,m,j)}}else if(_!==null&&m!==0){let j=S0.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,j.__webglTexture,m)}f=-1},this.readRenderTargetPixels=function(_,h,m,u,y,U0,q0,E0=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j=S0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&q0!==void 0)j=j[q0];if(j){I0.bindFramebuffer(P.FRAMEBUFFER,j);try{let d=_.textures[E0],o=d.format,Z0=d.type;if(!k0.textureFormatReadable(o)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k0.textureTypeReadable(Z0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=_.width-u&&(m>=0&&m<=_.height-y)){if(_.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+E0);P.readPixels(h,m,u,y,V0.convert(o),V0.convert(Z0),U0)}}finally{let d=A!==null?S0.get(A).__webglFramebuffer:null;I0.bindFramebuffer(P.FRAMEBUFFER,d)}}},this.readRenderTargetPixelsAsync=async function(_,h,m,u,y,U0,q0,E0=0){if(!(_&&_.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j=S0.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&q0!==void 0)j=j[q0];if(j)if(h>=0&&h<=_.width-u&&(m>=0&&m<=_.height-y)){I0.bindFramebuffer(P.FRAMEBUFFER,j);let d=_.textures[E0],o=d.format,Z0=d.type;if(!k0.textureFormatReadable(o))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k0.textureTypeReadable(Z0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Q0=P.createBuffer();if(P.bindBuffer(P.PIXEL_PACK_BUFFER,Q0),P.bufferData(P.PIXEL_PACK_BUFFER,U0.byteLength,P.STREAM_READ),_.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+E0);P.readPixels(h,m,u,y,V0.convert(o),V0.convert(Z0),0);let g0=A!==null?S0.get(A).__webglFramebuffer:null;I0.bindFramebuffer(P.FRAMEBUFFER,g0);let G1=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await wO(P,G1,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Q0),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,U0),P.deleteBuffer(Q0),P.deleteSync(G1),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,h=null,m=0){let u=Math.pow(2,-m),y=Math.floor(_.image.width*u),U0=Math.floor(_.image.height*u),q0=h!==null?h.x:0,E0=h!==null?h.y:0;x0.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,m,0,0,q0,E0,y,U0),I0.unbindTexture()};let zY=P.createFramebuffer(),RY=P.createFramebuffer();if(this.copyTextureToTexture=function(_,h,m=null,u=null,y=0,U0=null){if(U0===null)if(y!==0)XJ("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),U0=y,y=0;else U0=0;let q0,E0,j,d,o,Z0,Q0,g0,G1,D0=_.isCompressedTexture?_.mipmaps[U0]:_.image;if(m!==null)q0=m.max.x-m.min.x,E0=m.max.y-m.min.y,j=m.isBox3?m.max.z-m.min.z:1,d=m.min.x,o=m.min.y,Z0=m.isBox3?m.min.z:0;else{let s8=Math.pow(2,-y);if(q0=Math.floor(D0.width*s8),E0=Math.floor(D0.height*s8),_.isDataArrayTexture)j=D0.depth;else if(_.isData3DTexture)j=Math.floor(D0.depth*s8);else j=1;d=0,o=0,Z0=0}if(u!==null)Q0=u.x,g0=u.y,G1=u.z;else Q0=0,g0=0,G1=0;let s0=V0.convert(h.format),C0=V0.convert(h.type),V1;if(h.isData3DTexture)x0.setTexture3D(h,0),V1=P.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)x0.setTexture2DArray(h,0),V1=P.TEXTURE_2D_ARRAY;else x0.setTexture2D(h,0),V1=P.TEXTURE_2D;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,h.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,h.unpackAlignment);let Y1=P.getParameter(P.UNPACK_ROW_LENGTH),D8=P.getParameter(P.UNPACK_IMAGE_HEIGHT),D6=P.getParameter(P.UNPACK_SKIP_PIXELS),x8=P.getParameter(P.UNPACK_SKIP_ROWS),VJ=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,D0.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,D0.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,d),P.pixelStorei(P.UNPACK_SKIP_ROWS,o),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Z0);let T1=_.isDataArrayTexture||_.isData3DTexture,i8=h.isDataArrayTexture||h.isData3DTexture;if(_.isDepthTexture){let s8=S0.get(_),z8=S0.get(h),k8=S0.get(s8.__renderTarget),YH=S0.get(z8.__renderTarget);I0.bindFramebuffer(P.READ_FRAMEBUFFER,k8.__webglFramebuffer),I0.bindFramebuffer(P.DRAW_FRAMEBUFFER,YH.__webglFramebuffer);for(let W9=0;W9<j;W9++){if(T1)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S0.get(_).__webglTexture,y,Z0+W9),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S0.get(h).__webglTexture,U0,G1+W9);P.blitFramebuffer(d,o,q0,E0,Q0,g0,q0,E0,P.DEPTH_BUFFER_BIT,P.NEAREST)}I0.bindFramebuffer(P.READ_FRAMEBUFFER,null),I0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(y!==0||_.isRenderTargetTexture||S0.has(_)){let s8=S0.get(_),z8=S0.get(h);I0.bindFramebuffer(P.READ_FRAMEBUFFER,zY),I0.bindFramebuffer(P.DRAW_FRAMEBUFFER,RY);for(let k8=0;k8<j;k8++){if(T1)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,s8.__webglTexture,y,Z0+k8);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,s8.__webglTexture,y);if(i8)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z8.__webglTexture,U0,G1+k8);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,z8.__webglTexture,U0);if(y!==0)P.blitFramebuffer(d,o,q0,E0,Q0,g0,q0,E0,P.COLOR_BUFFER_BIT,P.NEAREST);else if(i8)P.copyTexSubImage3D(V1,U0,Q0,g0,G1+k8,d,o,q0,E0);else P.copyTexSubImage2D(V1,U0,Q0,g0,d,o,q0,E0)}I0.bindFramebuffer(P.READ_FRAMEBUFFER,null),I0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i8)if(_.isDataTexture||_.isData3DTexture)P.texSubImage3D(V1,U0,Q0,g0,G1,q0,E0,j,s0,C0,D0.data);else if(h.isCompressedArrayTexture)P.compressedTexSubImage3D(V1,U0,Q0,g0,G1,q0,E0,j,s0,D0.data);else P.texSubImage3D(V1,U0,Q0,g0,G1,q0,E0,j,s0,C0,D0);else if(_.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,U0,Q0,g0,q0,E0,s0,C0,D0.data);else if(_.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,U0,Q0,g0,D0.width,D0.height,s0,D0.data);else P.texSubImage2D(P.TEXTURE_2D,U0,Q0,g0,q0,E0,s0,C0,D0);if(P.pixelStorei(P.UNPACK_ROW_LENGTH,Y1),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,D8),P.pixelStorei(P.UNPACK_SKIP_PIXELS,D6),P.pixelStorei(P.UNPACK_SKIP_ROWS,x8),P.pixelStorei(P.UNPACK_SKIP_IMAGES,VJ),U0===0&&h.generateMipmaps)P.generateMipmap(V1);I0.unbindTexture()},this.initRenderTarget=function(_){if(S0.get(_).__webglFramebuffer===void 0)x0.setupRenderTarget(_)},this.initTexture=function(_){if(_.isCubeTexture)x0.setTextureCube(_,0);else if(_.isData3DTexture)x0.setTexture3D(_,0);else if(_.isDataArrayTexture||_.isCompressedArrayTexture)x0.setTexture2DArray(_,0);else x0.setTexture2D(_,0);I0.unbindTexture()},this.resetState=function(){I=0,E=0,A=null,I0.reset(),P0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kG}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Z=this.getContext();Z.drawingBufferColorSpace=W1._getDrawingBufferColorSpace(J),Z.unpackColorSpace=W1._getUnpackColorSpace()}}var w6=t$();var Y$="subway-runner-progress-v1",aO=["nova","flux","circuit","ember"],rO=["comet","pulse","ion"],r_={nova:0,flux:700,circuit:1400,ember:2200},t_={comet:0,pulse:900,ion:1800},e_={quick:100,bonus:250,crate:150},tO={version:1,coins:0,highScore:0,unlockedCharacters:["nova"],selectedCharacter:"nova",unlockedBoards:["comet"],selectedBoard:"comet",lastDailyDate:null,recentRuns:[]},$6=null;function G6(J,Z=1e7){return typeof J==="number"&&Number.isFinite(J)?Math.min(Z,Math.max(0,Math.floor(J))):0}function J3(J){if(!Array.isArray(J))return["nova"];let Z=J.filter((Y)=>typeof Y==="string"&&aO.includes(Y));return Z.includes("nova")?[...new Set(Z)]:["nova",...new Set(Z)]}function Z3(J){if(!Array.isArray(J))return["comet"];let Z=J.filter((Y)=>typeof Y==="string"&&rO.includes(Y));return Z.includes("comet")?[...new Set(Z)]:["comet",...new Set(Z)]}function eO(J){if(!J||typeof J!=="object")return{...tO};let Z=J,Y=J3(Z.unlockedCharacters),W=Z3(Z.unlockedBoards),X=aO.includes(Z.selectedCharacter)&&Y.includes(Z.selectedCharacter)?Z.selectedCharacter:"nova",H=rO.includes(Z.selectedBoard)&&W.includes(Z.selectedBoard)?Z.selectedBoard:"comet",U=Array.isArray(Z.recentRuns)?Z.recentRuns.slice(0,5).flatMap((Q)=>{if(!Q||typeof Q!=="object")return[];let w=Q;return[{id:G6(w.id,Number.MAX_SAFE_INTEGER),score:G6(w.score),coinsEarned:G6(w.coinsEarned,1e5),distance:G6(w.distance),createdAt:typeof w.createdAt==="string"?w.createdAt:new Date().toISOString()}]}):[];return{version:1,coins:G6(Z.coins),highScore:G6(Z.highScore),unlockedCharacters:Y,selectedCharacter:X,unlockedBoards:W,selectedBoard:H,lastDailyDate:typeof Z.lastDailyDate==="string"?Z.lastDailyDate:null,recentRuns:U}}function l9(){if($6)return $6;try{let J=window.localStorage.getItem(Y$);if(J)$6=eO(JSON.parse(J))}catch{}return $6??={...tO},$6}function qJ(J){$6=eO(J);try{window.localStorage.setItem(Y$,JSON.stringify($6))}catch{}return $6}function F7(J,Z){return{coins:J.coins,highScore:J.highScore,unlockedCharacters:J.unlockedCharacters,selectedCharacter:J.selectedCharacter,unlockedBoards:J.unlockedBoards,selectedBoard:J.selectedBoard,dailyAvailable:J.lastDailyDate!==Z,recentRuns:J.recentRuns}}function Y3(J,Z){let Y=l9(),W=qJ({version:1,coins:J.coins,highScore:J.highScore,unlockedCharacters:J.unlockedCharacters,selectedCharacter:J.selectedCharacter,unlockedBoards:J.unlockedBoards,selectedBoard:J.selectedBoard,lastDailyDate:J.dailyAvailable?Y.lastDailyDate===Z?null:Y.lastDailyDate:Z,recentRuns:J.recentRuns});return F7(W,Z)}var S8={hasSavedGame(){try{return window.localStorage.getItem(Y$)!==null}catch{return $6!==null}},getProfile(J){return F7(l9(),J)},useServerProfile(J,Z){return Y3(J,Z)},finishRun(J,Z){let Y=l9(),W={score:G6(J.score),coinsEarned:G6(J.coinsEarned,1e5),distance:G6(J.distance)},X={id:Date.now(),...W,createdAt:new Date().toISOString()},H=qJ({...Y,coins:Y.coins+W.coinsEarned,highScore:Math.max(Y.highScore,W.score),recentRuns:[X,...Y.recentRuns].slice(0,5)});return F7(H,Z)},buyItem(J,Z){let Y=l9();if((J.kind==="character"?Y.unlockedCharacters:Y.unlockedBoards).includes(J.id))return{profile:F7(Y,Z),message:"Already unlocked."};let X=J.kind==="character"?r_[J.id]:t_[J.id];if(Y.coins<X)return{profile:F7(Y,Z),message:`You need ${X-Y.coins} more coins.`};let H=qJ(J.kind==="character"?{...Y,coins:Y.coins-X,unlockedCharacters:[...Y.unlockedCharacters,J.id]}:{...Y,coins:Y.coins-X,unlockedBoards:[...Y.unlockedBoards,J.id]});return{profile:F7(H,Z),message:"Unlocked!"}},selectItem(J,Z){let Y=l9();if(!(J.kind==="character"?Y.unlockedCharacters.includes(J.id):Y.unlockedBoards.includes(J.id)))return{profile:F7(Y,Z),message:"Unlock this item first."};let X=qJ(J.kind==="character"?{...Y,selectedCharacter:J.id}:{...Y,selectedBoard:J.id});return{profile:F7(X,Z),message:"Equipped."}},claimDailyReward(J){let Z=l9();if(Z.lastDailyDate===J)return{profile:F7(Z,J),message:"Today's reward is already claimed."};let Y=qJ({...Z,coins:Z.coins+150,lastDailyDate:J});return{profile:F7(Y,J),message:"+150 coins"}},claimAdReward(J,Z){let Y=l9(),W=e_[J],X=qJ({...Y,coins:Y.coins+W});return{profile:F7(X,Z),granted:W}}};var MJ=[{id:"nova",name:"Nova",role:"Street pilot",price:0,body:"#16a7c9",trim:"#ffd447"},{id:"flux",name:"Flux",role:"Signal sprinter",price:700,body:"#ef476f",trim:"#f7fbff"},{id:"circuit",name:"Circuit",role:"Night mechanic",price:1400,body:"#6d5dfc",trim:"#73fbd3"},{id:"ember",name:"Ember",role:"Track marshal",price:2200,body:"#f0713a",trim:"#172238"}],W$=[{id:"comet",name:"Comet",price:0,color:"#ffcf3f",trail:"Solar trail"},{id:"pulse",name:"Pulse",price:900,color:"#15d1b0",trail:"Mint trail"},{id:"ion",name:"Ion",price:1800,color:"#ff4d7d",trail:"Rose trail"}];class JF{context=null;musicTimer=null;enabled=!0;ensureContext(){if(!this.context)this.context=new AudioContext;if(this.context.state==="suspended")this.context.resume();return this.context}setEnabled(J){if(this.enabled=J,!J)this.stopMusic()}tone(J,Z=0.09,Y="sine",W=0.12,X){if(!this.enabled)return;let H=this.ensureContext(),U=H.createOscillator(),Q=H.createGain(),w=H.currentTime;if(U.type=Y,U.frequency.setValueAtTime(J,w),X)U.frequency.exponentialRampToValueAtTime(Math.max(20,X),w+Z);Q.gain.setValueAtTime(0.001,w),Q.gain.exponentialRampToValueAtTime(W,w+0.012),Q.gain.exponentialRampToValueAtTime(0.001,w+Z),U.connect(Q).connect(H.destination),U.start(w),U.stop(w+Z+0.02)}coin(){this.tone(880,0.08,"sine",0.09,1320)}move(){this.tone(190,0.055,"triangle",0.035,260)}jump(){this.tone(260,0.16,"sine",0.07,620)}slide(){this.tone(170,0.13,"sawtooth",0.045,70)}power(){this.tone(330,0.16,"square",0.06,880),window.setTimeout(()=>this.tone(660,0.18,"sine",0.07,1240),80)}crash(){this.tone(140,0.36,"sawtooth",0.17,38)}reward(){[523,659,784].forEach((J,Z)=>window.setTimeout(()=>this.tone(J,0.18,"triangle",0.09),Z*90))}startMusic(){if(!this.enabled||this.musicTimer!==null)return;let J=0,Z=()=>{let Y=[110,110,165,110,196,165,220,165],W=Y[J%Y.length]??110;if(this.tone(W,0.13,J%2?"triangle":"square",0.025),J%4===0)this.tone(55,0.09,"sine",0.04,42);J+=1};Z(),this.musicTimer=window.setInterval(Z,230)}stopMusic(){if(this.musicTimer!==null)window.clearInterval(this.musicTimer);this.musicTimer=null}}var p1=new JF;function q1({name:J,size:Z=22}){let Y={sound:$0(R8,{children:[S("path",{className:"icon-fill",d:"M3.5 9.2h4l5-4v13.6l-5-4h-4z"}),S("path",{className:"icon-line",d:"M16 8.4c2.5 2 2.5 5.2 0 7.2M18.7 5.8c4.3 3.5 4.3 8.9 0 12.4"})]}),muted:$0(R8,{children:[S("path",{className:"icon-fill",d:"M3.5 9.2h4l5-4v13.6l-5-4h-4z"}),S("path",{className:"icon-line",d:"m16.3 9 5 6m0-6-5 6"})]}),back:S("path",{className:"icon-fill",d:"M20 10h-9l3.2-3.2L11.4 4 3.5 12l7.9 8 2.8-2.8L11 14h9z"}),runner:$0(R8,{children:[S("circle",{className:"icon-pop",cx:"14.6",cy:"4.6",r:"3"}),S("path",{className:"icon-fill",d:"m11.8 8.1 5.1 3.2 4-1.5 1.2 3.1-5.7 2.2-2.3-1.5-2.1 3.2 4.1 3.5-2.5 2.6-5.5-4.7-2.2 3.3-3.3-1.8 5.9-9-3-2 1.8-2.8z"})]}),shop:$0(R8,{children:[S("path",{className:"icon-fill",d:"M3 9h18l-1.5 12h-15z"}),S("path",{className:"icon-pop",d:"M7.2 9V7.4C7.2 4.4 9 2.7 12 2.7s4.8 1.7 4.8 4.7V9h-3.2V7.1c0-1.2-.6-1.7-1.6-1.7s-1.6.5-1.6 1.7V9z"})]}),pause:$0(R8,{children:[S("rect",{className:"icon-fill",x:"5",y:"3",width:"5.2",height:"18",rx:"2"}),S("rect",{className:"icon-fill",x:"13.8",y:"3",width:"5.2",height:"18",rx:"2"})]}),left:S("path",{className:"icon-fill",d:"M12.4 2.8 3 12l9.4 9.2 3.1-3.3-4-3.8H21V9.9h-9.5l4-3.8z"}),right:S("path",{className:"icon-fill",d:"m11.6 2.8 9.4 9.2-9.4 9.2-3.1-3.3 4-3.8H3V9.9h9.5l-4-3.8z"}),up:S("path",{className:"icon-fill",d:"M2.8 11.6 12 2.2l9.2 9.4-3.3 3.1-3.8-4V21H9.9V10.7l-3.8 4z"}),down:S("path",{className:"icon-fill",d:"M2.8 12.4 12 21.8l9.2-9.4-3.3-3.1-3.8 4V3H9.9v10.3l-3.8-4z"}),play:S("path",{className:"icon-fill",d:"M6.8 3.4c0-1.1 1.2-1.8 2.1-1.2l11.3 8.5c.9.7.9 1.9 0 2.6L8.9 21.8c-.9.7-2.1 0-2.1-1.2z"}),gift:$0(R8,{children:[S("path",{className:"icon-fill",d:"M3 10h18v11H3z"}),S("path",{className:"icon-pop",d:"M1.8 6.2h20.4v5H1.8zm8.7 0H14V21h-3.5z"}),S("path",{className:"icon-fill",d:"M11.8 6.5C8.8.7 2.9 2.8 4.5 6.1c1.1 2.4 4.5 1.6 7.3.4Zm.4 0c3-5.8 8.9-3.7 7.3-.4-1.1 2.4-4.5 1.6-7.3.4Z"})]}),trophy:$0(R8,{children:[S("path",{className:"icon-fill",d:"M6 3h12v5.2c0 4-2.3 6.6-6 6.6S6 12.2 6 8.2z"}),S("path",{className:"icon-pop",d:"M10 14h4v4h3v3H7v-3h3z"}),S("path",{className:"icon-line",d:"M6.3 6H2.7v2.4c0 3 1.8 4.8 4.5 4.8M17.7 6h3.6v2.4c0 3-1.8 4.8-4.5 4.8"})]}),video:$0(R8,{children:[S("rect",{className:"icon-fill",x:"2",y:"4",width:"20",height:"16",rx:"5"}),S("path",{className:"icon-cut",d:"m10 8 6 4-6 4z"})]}),bolt:S("path",{className:"icon-fill",d:"M13.2 1.5 3.8 14.3h6.6l-1 8.2 10.8-14h-6.7z"}),crate:$0(R8,{children:[S("path",{className:"icon-fill",d:"M2.5 7h19v14h-19z"}),S("path",{className:"icon-pop",d:"M2.5 10.3h19v3.4h-19zM10.3 7h3.4v14h-3.4z"}),S("path",{className:"icon-fill",d:"m6.5 7 2-4h7l2 4h-3l-.8-1.6h-3.4L9.5 7z"})]}),close:S("path",{className:"icon-fill",d:"m5.2 2.8 6.8 6.8 6.8-6.8 2.4 2.4-6.8 6.8 6.8 6.8-2.4 2.4-6.8-6.8-6.8 6.8-2.4-2.4L9.6 12 2.8 5.2z"}),home:S("path",{className:"icon-fill",d:"m2.3 11.3 9.7-9 9.7 9-2.7 2.9-1.2-1.1V21h-4.2v-5.8h-3.2V21H6.2v-7.9l-1.2 1.1z"}),replay:$0(R8,{children:[S("path",{className:"icon-fill",d:"M12 4a8 8 0 1 1-7.4 5H9L3.8 3.4.3 9h3.1A10.8 10.8 0 1 0 12 1.2z"}),S("path",{className:"icon-pop",d:"m10 7 7 5-7 5z"})]}),check:S("path",{className:"icon-fill",d:"m2.5 12.3 3.1-3.1 4 4L18.5 4l3 3-12 12.4z"}),lock:$0(R8,{children:[S("rect",{className:"icon-fill",x:"4",y:"9",width:"16",height:"13",rx:"3"}),S("path",{className:"icon-pop",d:"M7 10V7a5 5 0 0 1 10 0v3h-3V7a2 2 0 0 0-4 0v3z"})]}),shield:S("path",{className:"icon-fill",d:"m12 1.8 8 3.1v6.3c0 5-3.2 9.2-8 11-4.8-1.8-8-6-8-11V4.9z"})};return S("svg",{className:`ui-icon ui-icon--${J}`,width:Z,height:Z,viewBox:"0 0 24 24","aria-hidden":"true",children:Y[J]})}function ZF({enabled:J,onToggle:Z,className:Y=""}){return S("button",{className:`icon-button sound-button ${Y}`,"aria-label":J?"Mute game audio":"Turn on game audio",onClick:Z,children:S(q1,{name:J?"sound":"muted"})})}function W3(){let J=new Date,Z=J.getFullYear(),Y=String(J.getMonth()+1).padStart(2,"0"),W=String(J.getDate()).padStart(2,"0");return`${Z}-${Y}-${W}`}function c9(J,Z=1600){return new Promise((Y,W)=>{let X=window.setTimeout(()=>W(Error("Server unavailable")),Z);J.then((H)=>{window.clearTimeout(X),Y(H)}).catch((H)=>{window.clearTimeout(X),W(H instanceof Error?H:Error("Server unavailable"))})})}function LJ({small:J=!1}){return S("span",{className:J?"coin-mark coin-mark--small":"coin-mark","aria-hidden":"true",children:$0("svg",{viewBox:"0 0 24 24",children:[S("circle",{cx:"12",cy:"12",r:"9.5"}),S("path",{d:"m13.2 5.5-5.4 7.2h3.8l-.6 5.8 5.8-8h-3.9z"})]})})}function X$({character:J,selected:Z=!1}){return $0("div",{className:`character-figure character-${J.id} ${Z?"character-figure--selected":""}`,"aria-hidden":"true",children:[S("span",{className:"figure-shadow"}),S("span",{className:"figure-leg figure-leg--left",children:S("i",{})}),S("span",{className:"figure-leg figure-leg--right",children:S("i",{})}),S("span",{className:"figure-body",style:{background:J.body},children:S("i",{style:{background:J.trim}})}),S("span",{className:"figure-arm figure-arm--left",style:{background:J.body}}),S("span",{className:"figure-arm figure-arm--right",style:{background:J.body}}),$0("span",{className:"figure-head",children:[S("i",{className:"figure-hair",style:{background:J.trim}}),S("i",{className:"figure-face"})]})]})}function YF({title:J,seconds:Z=5,onComplete:Y,onCancel:W}){let[X,H]=h1(Z);return R6(()=>{let U=window.setInterval(()=>{H((Q)=>{if(Q<=1)return window.clearInterval(U),window.setTimeout(Y,120),0;return Q-1})},1000);return()=>window.clearInterval(U)},[Y]),S("div",{className:"modal-shell",role:"dialog","aria-modal":"true","aria-label":"Simulated rewarded ad",children:$0("div",{className:"ad-card",children:[S("button",{className:"close-button icon-button","aria-label":"Cancel reward video",onClick:W,children:S(q1,{name:"close",size:18})}),S("p",{className:"ad-label",children:"REWARD BREAK"}),S("div",{className:"ad-orbit",children:S("span",{children:X})}),S("h2",{children:J}),S("p",{children:"This is a short reward preview. No real advertisement is shown."}),S("div",{className:"progress-track",children:S("span",{style:{width:`${(Z-X)/Z*100}%`}})})]})})}function X3({profile:J,onPlay:Z,onCharacters:Y,onShop:W,onAd:X,soundEnabled:H,onSoundToggle:U}){let Q=MJ.find((w)=>w.id===J.selectedCharacter)??MJ[0];if(!Q)return null;return $0("main",{className:"menu-screen",children:[S("div",{className:"sky-disc","aria-hidden":"true"}),$0("div",{className:"city city--left","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"city city--right","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"menu-signal","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"menu-train menu-train--left","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"menu-train menu-train--right","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"menu-topbar",children:[$0("div",{className:"currency-chip","aria-label":`${J.coins} coins`,children:[S(LJ,{small:!0}),S("strong",{children:J.coins.toLocaleString()}),S("span",{className:"chip-add",children:"+"})]}),$0("div",{className:"best-chip","aria-label":`Best score ${J.highScore}`,children:[S(q1,{name:"trophy",size:18}),S("span",{children:"BEST"}),S("strong",{children:J.highScore.toLocaleString()})]}),S(ZF,{enabled:H,onToggle:U,className:"menu-sound"})]}),$0("section",{className:"menu-stage",children:[$0("div",{className:"pennants","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{}),S("i",{}),S("i",{})]}),$0("div",{className:"game-mark","aria-label":"Metro Rush",children:[S("span",{children:"METRO"}),S("strong",{children:"RUSH"})]}),S("div",{className:"hero-runner",children:S(X$,{character:Q,selected:!0})}),$0("div",{className:"track-lines","aria-hidden":"true",children:[S("i",{}),S("i",{}),S("i",{})]})]}),$0("nav",{className:"android-game-nav","aria-label":"Game menu",children:[$0("button",{className:"round-menu-button",onClick:Y,"aria-label":"Choose character",children:[S(q1,{name:"runner",size:25}),S("span",{children:"RUNNERS"})]}),$0("button",{className:"main-play-button",onClick:Z,"aria-label":"Play now",children:[S("span",{children:S(q1,{name:"play",size:38})}),S("strong",{children:"PLAY"})]}),$0("button",{className:"round-menu-button",onClick:W,"aria-label":"Open gear shop",children:[S(q1,{name:"shop",size:25}),S("span",{children:"SHOP"})]})]}),$0("button",{className:"floating-reward",onClick:()=>X("quick"),"aria-label":"Watch quick reward preview for 100 coins",children:[S(q1,{name:"gift",size:23}),S("span",{children:"FREE"}),S("strong",{children:"+100"})]})]})}function WF({title:J,coins:Z,onBack:Y}){return $0("header",{className:"catalog-header",children:[S("button",{className:"back-button icon-button","aria-label":"Back to menu",onClick:Y,children:S(q1,{name:"back",size:26})}),S("h1",{children:J}),$0("span",{className:"coin-balance",children:[S(LJ,{small:!0})," ",Z.toLocaleString()]})]})}function H3({profile:J,onBack:Z,onSelect:Y,onBuy:W,pending:X,message:H}){return $0("main",{className:"catalog-screen",children:[S(WF,{title:"Runner roster",coins:J.coins,onBack:Z}),S("p",{className:"catalog-intro",children:"Choose who takes the rails. Every runner has the same fair handling."}),H&&S("p",{className:"toast-note",role:"status",children:H}),S("div",{className:"character-list",children:MJ.map((U,Q)=>{let w=J.unlockedCharacters.includes(U.id),G=J.selectedCharacter===U.id;return $0("article",{className:`character-row tone-${Q+1}`,children:[S(X$,{character:U,selected:G}),$0("div",{className:"item-copy",children:[S("h2",{children:U.name}),S("p",{children:U.role}),S("small",{children:G?"On the track":w?"Unlocked":`${U.price.toLocaleString()} coins`})]}),G?$0("span",{className:"equipped-badge",children:[S(q1,{name:"check",size:13}),"ON"]}):$0("button",{className:"item-action",disabled:X,onClick:()=>w?Y(U.id):W(U.id),children:[S(q1,{name:w?"runner":"lock",size:16}),w?"USE":"GET"]})]},U.id)})})]})}function U3({profile:J,onBack:Z,onBuy:Y,onSelect:W,onAd:X,pending:H,message:U}){let Q=[{id:"quick",icon:"bolt",title:"Quick clip",note:"5 seconds",reward:100},{id:"bonus",icon:"video",title:"Bonus video",note:"8 seconds",reward:250},{id:"crate",icon:"crate",title:"Sponsor crate",note:"6 seconds",reward:150}];return $0("main",{className:"catalog-screen shop-screen",children:[S(WF,{title:"Mega shop",coins:J.coins,onBack:Z}),U&&S("p",{className:"toast-note",role:"status",children:U}),$0("section",{className:"reward-station","aria-labelledby":"reward-station-title",children:[$0("div",{className:"reward-station-heading",children:[$0("div",{children:[S("span",{children:"REWARD STATION"}),S("h2",{id:"reward-station-title",children:"Pick a free reward"})]}),S(q1,{name:"gift",size:29})]}),S("div",{className:"reward-offers",children:Q.map((w)=>$0("button",{onClick:()=>X(w.id),"aria-label":`Watch ${w.note} reward preview for ${w.reward} coins`,children:[S("span",{className:"reward-offer-icon",children:S(q1,{name:w.icon,size:24})}),$0("span",{className:"reward-offer-copy",children:[S("strong",{children:w.title}),S("small",{children:w.note})]}),$0("span",{className:"reward-offer-value",children:[S(LJ,{small:!0}),"+",w.reward]})]},w.id))})]}),$0("section",{className:"shop-section",children:[$0("div",{className:"section-heading",children:[S("h2",{children:"Hoverboards"}),S("span",{children:"One-crash shield"})]}),S("div",{className:"board-list",children:W$.map((w)=>{let G=J.unlockedBoards.includes(w.id),K=J.selectedBoard===w.id;return $0("article",{className:"board-row",children:[S("div",{className:"board-preview",style:{background:w.color},children:S("i",{})}),$0("div",{className:"item-copy",children:[S("h3",{children:w.name}),S("p",{children:w.trail})]}),K?$0("span",{className:"equipped-badge",children:[S(q1,{name:"check",size:13}),"ON"]}):S("button",{className:"item-action",disabled:H,onClick:()=>G?W("board",w.id):Y("board",w.id),children:G?$0(R8,{children:[S(q1,{name:"shield",size:16}),"USE"]}):$0(R8,{children:[S(LJ,{small:!0})," ",w.price]})})]},w.id)})})]}),$0("section",{className:"shop-section",children:[$0("div",{className:"section-heading",children:[S("h2",{children:"Runners"}),$0("span",{children:[J.unlockedCharacters.length,"/4 unlocked"]})]}),S("div",{className:"mini-runner-grid",children:MJ.map((w)=>{let G=J.unlockedCharacters.includes(w.id);return $0("button",{disabled:H,onClick:()=>G?W("character",w.id):Y("character",w.id),children:[S(X$,{character:w}),S("strong",{children:w.name}),S("small",{children:G?"Select":`${w.price} coins`})]},w.id)})})]})]})}function Q3({onClaim:J,onClose:Z,pending:Y}){return S("div",{className:"modal-shell",role:"dialog","aria-modal":"true","aria-label":"Daily reward",children:$0("div",{className:"daily-card",children:[S("button",{className:"close-button icon-button","aria-label":"Close daily reward",onClick:Z,children:S(q1,{name:"close",size:18})}),S("div",{className:"reward-burst",children:S(LJ,{})}),S("p",{className:"ad-label",children:"DAILY DROP"}),S("h2",{children:"150 coins are waiting"}),S("p",{children:"Claim today’s track fund and put it toward a new runner or board."}),$0("button",{className:"primary-action",onClick:J,disabled:Y,children:[S("span",{className:"action-icon",children:S(q1,{name:"gift",size:20})}),Y?"Claiming…":"Claim 150 coins"]})]})})}function w3({character:J,board:Z,soundEnabled:Y,onSoundToggle:W,onFinish:X}){let H=N6(null),U=N6(!1),Q=N6(!1),w=N6(()=>{return}),G=N6(()=>{return}),[K,z]=h1(!1),[D,R]=h1(!1),[q,L]=h1(!1),[O,$]=h1(!1),[F,N]=h1(!1),[M,I]=h1(!1),[E,A]=h1(""),[f,B]=h1(null),V=N6(null),[T,b]=h1({score:0,coins:0,multiplier:1,level:1,speed:22,magnet:0,double:0,board:0}),g=SJ((c)=>{if(U.current=c,z(c),c)p1.stopMusic();else p1.startMusic()},[]);R6(()=>{let c=H.current;if(!c)return;let i=!1,N0=0,M0=()=>{return};return(()=>{if(i)return;N(!1),p1.startMusic();let f0=new uX;f0.background=new t0(6477813),f0.fog=new WY(9692662,34,145);let w1=new G8(55,Math.max(1,c.clientWidth)/Math.max(1,c.clientHeight),0.1,240);w1.position.set(0,8.25,21.5),w1.lookAt(0,2.1,-25);let m0=new Z$({antialias:!0,alpha:!1,powerPreference:"high-performance"});m0.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),m0.setSize(Math.max(1,c.clientWidth),Math.max(1,c.clientHeight)),m0.shadowMap.enabled=!0,m0.shadowMap.type=qX,m0.outputColorSpace=bX,m0.toneMapping=EX,m0.toneMappingExposure=1.12,c.appendChild(m0.domElement),f0.add(new nX(14220287,4469070,2.35));let a=new rX(16773578,2.9);a.position.set(-14,25,15),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),f0.add(a);let W0=(j,d=0.72)=>new v9({color:j,roughness:d,metalness:0.05}),K0=[],T0=10;for(let j=0;j<20;j+=1){let d=new $8,o=new l0(new F1(10.8,0.18,T0),W0(j%2?4677745:5467257));o.position.y=-0.12,d.add(o),[-3.65,-2.35,-0.65,0.65,2.35,3.65].forEach((Z0)=>{let Q0=new l0(new F1(0.12,0.14,T0),W0(13226968,0.35));Q0.position.set(Z0,0.08,0),d.add(Q0)});for(let Z0=-4.5;Z0<=4.5;Z0+=1.1){let Q0=new l0(new F1(9.2,0.12,0.32),W0(5913652));Q0.position.set(0,0,Z0),d.add(Q0)}d.position.z=12-j*T0,[-5.55,5.55].forEach((Z0)=>{let Q0=new l0(new F1(0.45,0.34,T0),W0(16038210,0.45));Q0.position.set(Z0,0.04,0),Q0.receiveShadow=!0,d.add(Q0)}),f0.add(d),K0.push(d)}let j0=new l0(new b9(70,240),W0(2504522,0.88));j0.rotation.x=-Math.PI/2,j0.position.set(0,-0.24,-90),j0.receiveShadow=!0,f0.add(j0);let b0=[],j1=[15752542,16757836,2336934,7301080,15694501,4161476];for(let j=0;j<34;j+=1){let d=j%2===0?-1:1,o=4+j*7%8,Z0=4+j*3%4,Q0=new $8,g0=new l0(new F1(Z0,o,5.5),W0(j1[j%j1.length]??15752542));g0.position.y=o/2,g0.castShadow=!0,Q0.add(g0);let G1=new l0(new DJ(Z0*0.76,1.4,4),W0(2437965));G1.rotation.y=Math.PI/4,G1.position.y=o+0.7,Q0.add(G1);for(let s0=-1;s0<=1;s0+=1){let C0=new l0(new F1(0.5,0.72,0.08),W0(12579583,0.3));C0.position.set(s0*1.05,Math.min(o-1,2.1+j%3),d<0?2.79:-2.79),Q0.add(C0)}Q0.position.set(d*(8+j%3),0,4-j*6.2);let D0=new l0(new Z9(0.04,0.04,2.4,6),W0(1451066));D0.position.y=o+2,Q0.add(D0),f0.add(Q0),b0.push(Q0)}let P=[];for(let j=0;j<18;j+=1){let d=j%2===0?-1:1,o=new $8,Z0=new l0(new Z9(0.07,0.1,4.6,8),W0(1516088,0.35));Z0.position.y=2.3,o.add(Z0);let Q0=new l0(new h9(0.24,10,8),new v9({color:16768880,emissive:16757504,emissiveIntensity:2.4}));Q0.position.y=4.55,o.add(Q0),o.position.set(d*6.3,0,5-j*12.5),f0.add(o),P.push(o)}let R1=[];for(let j=0;j<7;j+=1){let d=new $8,o=new l0(new Z9(0.025,0.025,18,6),W0(2371655));o.rotation.z=Math.PI/2,o.position.y=7,d.add(o);let Z0=[16766023,15878997,1357990,7167484];for(let Q0=0;Q0<8;Q0+=1){let g0=new l0(new DJ(0.42,1.2,3),W0(Z0[Q0%4]??16766023));g0.rotation.z=Math.PI,g0.position.set(-7+Q0*2,6.45,0),d.add(g0)}d.position.z=-18-j*29,f0.add(d),R1.push(d)}let u0=[];for(let j=0;j<2;j+=1){let d=new $8,o=new l0(new F1(15,2,3),W0(2437965));o.position.y=7.3,d.add(o),[-7,7].forEach((Z0)=>{let Q0=new l0(new F1(1.8,8,3),W0(2437965));Q0.position.set(Z0,3.5,0),d.add(Q0)}),d.position.z=-76-j*108,f0.add(d),u0.push(d)}let k0=new $8,I0=W0(15114348),L1=W0(Number.parseInt(J.body.slice(1),16)),S0=W0(Number.parseInt(J.trim.slice(1),16)),x0=new l0(new h9(0.48,14,10),I0);x0.position.y=2.55,x0.castShadow=!0,k0.add(x0);let b1=new l0(new h9(0.5,10,7,0,Math.PI*2,0,Math.PI/2),S0);b1.position.y=2.72,b1.rotation.x=-0.1,k0.add(b1);let S1=new l0(new F1(1,1.25,0.62),L1);S1.position.y=1.66,S1.castShadow=!0,k0.add(S1);let I1=new l0(new F1(1.08,0.2,0.68),S0);I1.position.y=2.13,k0.add(I1);let C=[];[-0.62,0.62].forEach((j,d)=>{let o=new l0(new F1(0.25,1,0.28),I0);o.position.set(j,1.62,0),k0.add(o),C.push(o);let Z0=new l0(new F1(0.34,1.15,0.42),W0(2504792));Z0.position.set(j*0.45,0.58,0),k0.add(Z0),C.push(Z0);let Q0=new l0(new F1(0.42,0.28,0.72),S0);if(Q0.position.set(j*0.45,0.1,-0.12),k0.add(Q0),C.push(Q0),d===1)Q0.rotation.y=0.08}),k0.position.set(0,0.18,5.4),k0.scale.setScalar(0.82),f0.add(k0);let k=new $8,p=new l0(new F1(1.55,0.14,2.6),W0(Number.parseInt(Z.color.slice(1),16),0.28));p.position.y=0.12,k.add(p);let r=new oX(Number.parseInt(Z.color.slice(1),16),3.5,7);r.position.y=0.2,k.add(r),k.position.set(0,0.05,5.4),k.visible=!1,f0.add(k);let J0=[-3,0,3],s=[],B0=(j)=>{let d=new $8;if(d.userData.kind=j,j==="train"){let o=new l0(new F1(2.18,2.75,7.2),W0([15095629,1812640,7493317][s.length%3]??15095629));o.position.y=1.42,o.castShadow=!0,d.add(o);for(let Z0=-3;Z0<=3;Z0+=2){let Q0=new l0(new F1(2.22,0.6,0.88),W0(12579583,0.22));Q0.position.set(0,1.85,Z0),d.add(Q0)}}else if(j==="low"){let o=new l0(new F1(2.6,0.85,0.6),W0(16251903));o.position.y=0.72,d.add(o);for(let Z0=-0.9;Z0<=0.9;Z0+=0.6){let Q0=new l0(new F1(0.28,0.9,0.65),W0(15878997));Q0.position.set(Z0,0.72,0),Q0.rotation.z=0.4,d.add(Q0)}}else{[-1.05,1.05].forEach((Z0)=>{let Q0=new l0(new F1(0.28,2.8,0.45),W0(15878997));Q0.position.set(Z0,1.4,0),d.add(Q0)});let o=new l0(new F1(2.4,0.55,0.55),W0(16251903));o.position.y=2.45,d.add(o)}return f0.add(d),s.push(d),d};for(let j=0;j<12;j+=1){let d=j%4===0?"low":j%5===0?"overhead":"train";B0(d).position.set(J0[(j*2+1)%3]??0,0,-26-j*14)}let G0=[];for(let j=0;j<34;j+=1){let d=new l0(new zJ(0.36,0.13,8,18),new v9({color:16766023,emissive:11037696,emissiveIntensity:0.45,metalness:0.65,roughness:0.25})),o=Math.floor(j/6);d.position.set(J0[o%3]??0,1+Math.sin(j%6/5*Math.PI)*(o%2?1.8:0.45),-15-j*4.25),d.userData.collected=!1,f0.add(d),G0.push(d)}let A0=[],h0=["magnet","double","board"];for(let j=0;j<6;j+=1){let d=h0[j%3]??"magnet",o=new $8,Z0=d==="magnet"?2282478:d==="double"?16766023:Number.parseInt(Z.color.slice(1),16),Q0=d==="board"?new l0(new F1(1.25,0.18,1.9),W0(Z0,0.28)):new l0(new HY(0.62,0),new v9({color:Z0,emissive:Z0,emissiveIntensity:0.35}));Q0.position.y=1,o.add(Q0);let g0=new l0(new zJ(0.82,0.07,8,20),W0(16251903));g0.position.y=1,o.add(g0),o.userData.type=d,o.position.set(J0[(j+2)%3]??0,0,-42-j*31),f0.add(o),A0.push(o)}let H0=1,O0=0,V0=0,P0=0,z0=0,y0=0,x=0,R0=0,w0=0,L0=0,X0=0,e=!1,_0=0,v0=null,Q1=0,X1=performance.now(),q8=0,M8=0,a1=!1,L8=null,x7=null,i9=(j)=>j.reduce((d,o)=>Math.min(d,o.position.z),-40),K6=(j)=>{let d=s.indexOf(j);j.position.z=i9(s)-18-d%3*3,j.position.x=J0[(d*2+Math.floor(y0/90))%3]??0},GY=(j)=>{let d=G0.indexOf(j),o=i9(G0)-4.3,Z0=Math.floor((d+Math.floor(y0/80))/6);j.position.set(J0[Z0%3]??0,1+Math.sin(d%6/5*Math.PI)*(Z0%2?1.8:0.4),o),j.visible=!0,j.userData.collected=!1},s9=(j)=>{let d=A0.indexOf(j);j.position.z=i9(A0)-52,j.position.x=J0[(d+Math.floor(y0/140))%3]??0,j.visible=!0};w.current=()=>{if(v0)K6(v0);v0=null,_0=2.25,Q.current=!1,U.current=!1};let kJ=0;G.current=(j)=>{if(U.current||Q.current)return;if(kJ+=1,B({action:j,id:kJ}),V.current!==null)window.clearTimeout(V.current);if(V.current=window.setTimeout(()=>B(null),240),navigator.vibrate)navigator.vibrate(j==="jump"||j==="slide"?12:7);if(j==="left")H0=Math.max(0,H0-1),p1.move();if(j==="right")H0=Math.min(2,H0+1),p1.move();if(j==="jump"&&V0<=0.03)P0=9.2,p1.jump();if(j==="slide"&&V0<0.25)z0=0.85,p1.slide();O0=J0[H0]??0};let Y9=(j,d,o=!1)=>{if(a1)return;let Z0=j-q8,Q0=d-M8,g0=o?12:16;if(Math.max(Math.abs(Z0),Math.abs(Q0))<g0)return;if(a1=!0,Math.abs(Z0)>Math.abs(Q0))G.current(Z0>0?"right":"left");else G.current(Q0<0?"jump":"slide")},$Y=(j,d)=>{let o=c.getBoundingClientRect(),Z0=j-o.left,Q0=d-o.top;if(Z0<o.width*0.34)G.current("left");else if(Z0>o.width*0.66)G.current("right");else if(Q0<o.height*0.56)G.current("jump");else G.current("slide")},BJ=(j,d)=>{for(let o=0;o<j.length;o+=1){let Z0=j.item(o);if(Z0?.identifier===d)return Z0}return null},KY=(j)=>{if(L8!==null||j.changedTouches.length===0)return;let d=j.changedTouches.item(0);if(!d)return;j.preventDefault(),L8=d.identifier,q8=d.clientX,M8=d.clientY,a1=!1},DY=(j)=>{if(L8===null)return;let d=BJ(j.touches,L8);if(!d)return;j.preventDefault(),Y9(d.clientX,d.clientY)},zY=(j)=>{if(L8===null)return;let d=BJ(j.changedTouches,L8);if(!d)return;if(j.preventDefault(),Y9(d.clientX,d.clientY,!0),!a1)$Y(d.clientX,d.clientY);L8=null,a1=!1},RY=(j)=>{if(L8===null)return;if(!BJ(j.changedTouches,L8))return;L8=null,a1=!1},_=(j)=>{if(j.pointerType!=="pen")return;j.preventDefault(),x7=j.pointerId,q8=j.clientX,M8=j.clientY,a1=!1,c.setPointerCapture(j.pointerId)},h=(j)=>{if(x7!==j.pointerId)return;j.preventDefault(),Y9(j.clientX,j.clientY)},m=(j)=>{if(x7!==j.pointerId)return;if(j.preventDefault(),Y9(j.clientX,j.clientY,!0),!a1)$Y(j.clientX,j.clientY);if(c.hasPointerCapture(j.pointerId))c.releasePointerCapture(j.pointerId);x7=null,a1=!1},u=(j)=>{if(x7!==j.pointerId)return;if(c.hasPointerCapture(j.pointerId))c.releasePointerCapture(j.pointerId);x7=null,a1=!1},y=(j)=>j.preventDefault(),U0=()=>{if(!c.clientWidth||!c.clientHeight)return;w1.aspect=c.clientWidth/c.clientHeight,w1.updateProjectionMatrix(),m0.setSize(c.clientWidth,c.clientHeight)};c.addEventListener("touchstart",KY,{passive:!1}),c.addEventListener("touchmove",DY,{passive:!1}),c.addEventListener("touchend",zY,{passive:!1}),c.addEventListener("touchcancel",RY,{passive:!1}),c.addEventListener("pointerdown",_),c.addEventListener("pointermove",h),c.addEventListener("pointerup",m),c.addEventListener("pointercancel",u),c.addEventListener("contextmenu",y),window.addEventListener("resize",U0);let q0=(j)=>{if(e){e=!1,X0=0,K6(j);return}if(v0=j,p1.crash(),window.setTimeout(()=>p1.stopMusic(),160),navigator.vibrate)navigator.vibrate([70,40,120]);Q.current=!0,R(!0);let d=Math.min(12,1+Math.floor(R0/180)),o=Math.min(68,24+(d-1)*4);b({score:Math.floor(y0),coins:x,multiplier:Math.min(5,1+Math.floor(y0/650)),level:d,speed:Math.round(o),magnet:Math.ceil(w0),double:Math.ceil(L0),board:Math.ceil(X0)})},E0=(j)=>{if(i)return;N0=requestAnimationFrame(E0);let d=Math.max(0,Math.min(0.042,(j-X1)/1000||0));if(X1=j,!U.current&&!Q.current){let o=Math.min(12,1+Math.floor(R0/180)),Z0=Math.min(5,1+Math.floor(y0/650)),Q0=L0>0?Z0*2:Z0,g0=Math.min(68,24+(o-1)*4+Math.min(3,R0/700));if(y0+=d*(21+o*1.5)*Q0,R0+=d*g0,w0=Math.max(0,w0-d),L0=Math.max(0,L0-d),X0=Math.max(0,X0-d),_0=Math.max(0,_0-d),X0<=0)e=!1;if(V0+=P0*d,P0-=24*d,V0<=0)V0=0,P0=0;z0=Math.max(0,z0-d),k0.position.x+=(O0-k0.position.x)*Math.min(1,d*46),k0.position.y=0.18+V0,k0.scale.y+=((z0>0?0.46:0.82)-k0.scale.y)*Math.min(1,d*22),k.position.x=k0.position.x,k.position.y=V0+0.05,k.visible=X0>0;let G1=Math.sin(j*0.014)*0.7;if(C.forEach((D0,s0)=>{D0.rotation.x=(s0%2===0?G1:-G1)*(z0>0?0.25:1)}),k0.rotation.z=(k0.position.x-O0)*0.08,w1.position.x+=(k0.position.x*0.2-w1.position.x)*Math.min(1,d*4),[...K0,...b0,...P,...R1,...u0].forEach((D0)=>{D0.position.z+=g0*d}),K0.forEach((D0)=>{if(D0.position.z>18)D0.position.z-=200}),b0.forEach((D0)=>{if(D0.position.z>14)D0.position.z-=211}),P.forEach((D0)=>{if(D0.position.z>14)D0.position.z-=225}),R1.forEach((D0)=>{if(D0.position.z>12)D0.position.z-=203}),u0.forEach((D0)=>{if(D0.position.z>14)D0.position.z-=216}),s.forEach((D0)=>{if(D0.position.z+=g0*d,D0.position.z>15)K6(D0);if(D0.position.z>3.9&&D0.position.z<6.8&&Math.abs(D0.position.x-k0.position.x)<0.92){let s0=D0.userData.kind;if(!(s0==="low"&&V0>1.25||s0==="overhead"&&z0>0.12)&&_0<=0)q0(D0)}}),G0.forEach((D0)=>{let s0=D0.position.z;D0.position.z+=g0*d,D0.rotation.y+=d*6;let C0=5.4,V1=s0<=C0+1.8&&D0.position.z>=C0-1.8,Y1=w0>0?Math.abs(D0.position.z-C0)<6:V1,D8=Math.abs(D0.position.x-k0.position.x)<(w0>0?4.8:1.62),D6=Math.abs(D0.position.y-(V0+1.15))<(w0>0?3.8:1.9);if(D0.visible&&Y1&&D8&&D6){if(D0.visible=!1,D0.userData.collected=!0,x+=1,p1.coin(),navigator.vibrate)navigator.vibrate(8)}if(D0.position.z>14)GY(D0)}),A0.forEach((D0)=>{let s0=D0.position.z;D0.position.z+=g0*d,D0.rotation.y+=d*2;let C0=s0<=6.65&&D0.position.z>=4.15;if(D0.visible&&C0&&Math.abs(D0.position.x-k0.position.x)<1.35){if(D0.visible=!1,p1.power(),navigator.vibrate)navigator.vibrate(24);if(D0.userData.type==="magnet")w0=10;if(D0.userData.type==="double")L0=10;if(D0.userData.type==="board")X0=14,e=!0}if(D0.position.z>14)s9(D0)}),j-Q1>90)Q1=j,b({score:Math.floor(y0),coins:x,multiplier:Q0,level:o,speed:Math.round(g0),magnet:Math.ceil(w0),double:Math.ceil(L0),board:Math.ceil(X0)})}m0.render(f0,w1)};N0=requestAnimationFrame(E0),M0=()=>{if(p1.stopMusic(),cancelAnimationFrame(N0),c.removeEventListener("touchstart",KY),c.removeEventListener("touchmove",DY),c.removeEventListener("touchend",zY),c.removeEventListener("touchcancel",RY),c.removeEventListener("pointerdown",_),c.removeEventListener("pointermove",h),c.removeEventListener("pointerup",m),c.removeEventListener("pointercancel",u),c.removeEventListener("contextmenu",y),window.removeEventListener("resize",U0),V.current!==null)window.clearTimeout(V.current);if(m0.dispose(),m0.domElement.parentNode===c)c.removeChild(m0.domElement)}})(),()=>{i=!0,M0()}},[Z.color,J.body,J.trim]);let l=SJ(()=>{w.current(),$(!1),L(!0),R(!1),z(!1),p1.startMusic()},[]),Y0={score:Math.max(0,T.score),coinsEarned:Math.max(0,T.coins),distance:Math.max(0,Math.floor(T.score*1.8))},n=async(c)=>{I(!0),A("");let i=await X(Y0,c);if(I(!1),!i)A("This run couldn’t be saved. Check your connection and try again.")};return $0("main",{className:"game-screen",children:[S("div",{className:"game-canvas",ref:H,"aria-label":"3D endless runner game canvas"}),F&&$0("div",{className:"engine-error",role:"alert",children:[S("strong",{children:"3D engine didn’t load."}),S("span",{children:"Check your connection, then reopen the game."})]}),$0("div",{className:"game-hud","aria-live":"polite",children:[$0("div",{className:"hud-tools",children:[S("button",{className:"pause-button icon-button","aria-label":"Pause game",onClick:()=>g(!0),children:S(q1,{name:"pause"})}),S(ZF,{enabled:Y,onToggle:W})]}),$0("div",{className:"hud-score",children:[S("small",{children:"SCORE"}),S("strong",{children:T.score.toString().padStart(5,"0")})]}),$0("div",{className:"hud-right",children:[$0("span",{className:"level-chip",children:["LV ",T.level," · ",T.speed]}),$0("span",{children:[S(LJ,{small:!0})," ",T.coins]})]})]}),$0("div",{className:"power-strip",children:[T.magnet>0&&$0("span",{children:["MAGNET ",T.magnet,"s"]}),T.double>0&&$0("span",{children:["2× ",T.double,"s"]}),T.board>0&&$0("span",{children:["SHIELD ",T.board,"s"]})]}),f&&S("div",{className:`gesture-flash gesture-flash--${f.action}`,"aria-hidden":"true",children:S(q1,{name:f.action==="jump"?"up":f.action==="slide"?"down":f.action,size:31})},`${f.action}-${f.id}`),$0("div",{className:"swipe-guide","aria-hidden":"true",children:[S("i",{className:"swipe-guide__arrow swipe-guide__arrow--up",children:S(q1,{name:"up",size:13})}),S("i",{className:"swipe-guide__arrow swipe-guide__arrow--left",children:S(q1,{name:"left",size:13})}),S("span",{className:"swipe-guide__thumb"}),S("i",{className:"swipe-guide__arrow swipe-guide__arrow--right",children:S(q1,{name:"right",size:13})}),S("strong",{children:"SWIPE"})]}),K&&!D&&S("div",{className:"game-overlay",role:"dialog","aria-modal":"true","aria-label":"Game paused",children:$0("div",{className:"pause-card",children:[S("div",{className:"popup-emblem popup-emblem--pause",children:S(q1,{name:"pause",size:34})}),S("p",{className:"ad-label",children:"SIGNAL HELD"}),S("h2",{children:"Paused"}),E&&S("p",{className:"save-error",role:"alert",children:E}),$0("button",{className:"primary-action",onClick:()=>g(!1),children:[S("span",{className:"action-icon",children:S(q1,{name:"play",size:18})}),"Keep running"]}),$0("button",{className:"text-action",disabled:M,onClick:()=>void n("menu"),children:[S(q1,{name:"home",size:17}),M?"Saving…":"Save & exit"]})]})}),D&&!O&&S("div",{className:"game-overlay",role:"dialog","aria-modal":"true","aria-label":"Run over",children:$0("div",{className:"game-over-card",children:[S("div",{className:"popup-emblem",children:S(q1,{name:"trophy",size:35})}),S("p",{className:"ad-label",children:"RUN COMPLETE"}),S("h2",{children:T.score.toLocaleString()}),$0("p",{className:"score-caption",children:["score · ",T.coins," coins collected"]}),E&&S("p",{className:"save-error",role:"alert",children:E}),!q&&$0("button",{className:"revive-button",onClick:()=>$(!0),children:[S("span",{className:"action-icon",children:S(q1,{name:"video",size:19})}),$0("span",{children:["REVIVE",S("small",{children:"5-second reward"})]})]}),$0("button",{className:"primary-action",disabled:M,onClick:()=>void n("restart"),children:[S("span",{className:"action-icon",children:S(q1,{name:"replay",size:18})}),M?"Saving…":"Run again"]}),$0("button",{className:"text-action",disabled:M,onClick:()=>void n("menu"),children:[S(q1,{name:"home",size:17}),"Save & return home"]})]})}),O&&S(YF,{title:"Revive this run",onComplete:l,onCancel:()=>$(!1)})]})}function XF(){let[J,Z]=h1("menu"),[Y,W]=h1(0),[X,H]=h1(""),[U,Q]=h1(!1),[w,G]=h1(null),[K,z]=h1(()=>{try{return window.localStorage.getItem("runner-sound")!=="off"}catch{return!0}}),D=W3(),[R,q]=h1(()=>S8.getProfile(D)),[L,O]=h1("checking"),[$,F]=h1(!1),N=SJ(()=>{z((b)=>{let g=!b;p1.setEnabled(g);try{window.localStorage.setItem("runner-sound",g?"on":"off")}catch{}if(g&&J==="play")p1.reward(),p1.startMusic();return g})},[J]);R6(()=>{p1.setEnabled(K)},[K]),R6(()=>{let b=!0;return c9(w6.getProfile({localDate:D})).then((g)=>{if(!b)return;q(S8.useServerProfile(g,D)),O("online")}).catch(()=>{if(b)O("offline")}),()=>{b=!1}},[D]);let M=async()=>{let b=await c9(w6.getProfile({localDate:D}));q(S8.useServerProfile(b,D)),O("online")},I=async(b)=>{if(L==="offline"){let g=S8.buyItem(b,D);q(g.profile),H(g.message);return}F(!0);try{let g=await c9(w6.buyItem(b));await M(),H(g.message)}catch{O("offline");let g=S8.buyItem(b,D);q(g.profile),H(g.message)}finally{F(!1)}},E=async(b)=>{if(L==="offline"){let g=S8.selectItem(b,D);q(g.profile),H(g.message);return}F(!0);try{let g=await c9(w6.selectItem(b));await M(),H(g.message)}catch{O("offline");let g=S8.selectItem(b,D);q(g.profile),H(g.message)}finally{F(!1)}},A=async()=>{if(L==="offline"){let b=S8.claimDailyReward(D);q(b.profile),H(b.message)}else{F(!0);try{let b=await c9(w6.claimDailyReward({localDate:D}));await M(),H(b.message)}catch{O("offline");let b=S8.claimDailyReward(D);q(b.profile),H(b.message)}finally{F(!1)}}Q(!0),p1.reward()},f=async(b)=>{let g;if(L==="offline"){let l=S8.claimAdReward(b,D);q(l.profile),g=l.granted}else{F(!0);try{g=(await c9(w6.claimAdReward({offer:b}))).granted,await M()}catch{O("offline");let l=S8.claimAdReward(b,D);q(l.profile),g=l.granted}finally{F(!1)}}H(`+${g} coins added`),G(null),p1.reward()},B=MJ.find((b)=>b.id===R.selectedCharacter)??MJ[0],V=W$.find((b)=>b.id===R.selectedBoard)??W$[0];if(!B||!V)return null;return $0("div",{className:"app-shell",children:[J==="menu"&&S(X3,{profile:R,soundEnabled:K,onSoundToggle:N,onPlay:()=>{p1.setEnabled(K),p1.reward(),H(""),W((b)=>b+1),Z("play")},onCharacters:()=>{H(""),Z("characters")},onShop:()=>{H(""),Z("shop")},onAd:G}),J==="characters"&&S(H3,{profile:R,onBack:()=>Z("menu"),pending:$,message:X,onBuy:(b)=>void I({kind:"character",id:b}),onSelect:(b)=>void E({kind:"character",id:b})}),J==="shop"&&S(U3,{profile:R,onBack:()=>Z("menu"),onAd:G,pending:$,message:X,onBuy:(b,g)=>{if(b==="character")I({kind:b,id:g});else I({kind:b,id:g})},onSelect:(b,g)=>{if(b==="character")E({kind:b,id:g});else E({kind:b,id:g})}}),J==="play"&&S(w3,{character:B,board:V,soundEnabled:K,onSoundToggle:N,onFinish:async(b,g)=>{if(L==="offline")q(S8.finishRun(b,D));else try{await c9(w6.finishRun(b)),await M()}catch{O("offline"),q(S8.finishRun(b,D))}if(g==="restart")W((l)=>l+1),Z("play");else Z("menu");return!0}},Y),J!=="play"&&R.dailyAvailable&&!U&&S(Q3,{onClaim:()=>void A(),onClose:()=>Q(!0),pending:$}),J!=="play"&&w&&S(YF,{title:w==="bonus"?"Earn 250 coins":w==="crate"?"Open a 150-coin crate":"Earn 100 coins",seconds:w==="bonus"?8:w==="crate"?6:5,onComplete:()=>void f(w),onCancel:()=>G(null)},w)]})}var UF=document.querySelector("[data-generated-space-root]");if(!UF)throw Error("missing generated space root element");HF.createRoot(UF).render(S(KH,{children:S(RH,{client:q7,children:S("div",{className:"hatch-space-root","data-hatch-space-root":!0,children:S(XF,{})})})}));
