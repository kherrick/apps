import{b as $n}from"./chunk-QNJTP72R.js";import{q as qn}from"./chunk-DCYIHBUG.js";import{$b as Qn,Ab as Kn,Ac as zt,Bb as zn,Da as Pn,Ec as Qt,Jb as de,Kb as se,Lb as Ft,Mb as Pt,Rb as _t,Sb as Ct,Va as jt,_b as Kt,ba as _e,fa as Dn,fc as Ie,ga as ct,ha as dt,ib as _n,ka as jn,la as Fn,ra as It}from"./chunk-5BYLU2DL.js";import{a as j,b as re}from"./chunk-DAQOROHW.js";var ut=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function qt(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var eo,to={exports:{}};var Tr=(eo||(eo=1,to.exports=(function a(e,o,t){function c(g,d){if(!o[g]){if(!e[g]){if(!d&&qt)return qt(g);if(n)return n(g,!0);var i=new Error("Cannot find module '"+g+"'");throw i.code="MODULE_NOT_FOUND",i}var I=o[g]={exports:{}};e[g][0].call(I.exports,function(r){var s=e[g][1][r];return c(s||r)},I,I.exports,a,e,o,t)}return o[g].exports}for(var n=qt,l=0;l<t.length;l++)c(t[l]);return c})({1:[function(a,e,o){(function(t){var c,n,l=t.MutationObserver||t.WebKitMutationObserver;if(l){var g=0,d=new l(s),i=t.document.createTextNode("");d.observe(i,{characterData:!0}),c=function(){i.data=g=++g%2}}else if(t.setImmediate||t.MessageChannel===void 0)c="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var m=t.document.createElement("script");m.onreadystatechange=function(){s(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},t.document.documentElement.appendChild(m)}:function(){setTimeout(s,0)};else{var I=new t.MessageChannel;I.port1.onmessage=s,c=function(){I.port2.postMessage(0)}}var r=[];function s(){var m,p;n=!0;for(var h=r.length;h;){for(p=r,r=[],m=-1;++m<h;)p[m]();h=r.length}n=!1}function u(m){r.push(m)!==1||n||c()}e.exports=u}).call(this,ut!==void 0?ut:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(a,e,o){var t=a(1);function c(){}var n={},l=["REJECTED"],g=["FULFILLED"],d=["PENDING"];function i(W){if(typeof W!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,W!==c&&u(this,W)}function I(W,E,w){this.promise=W,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function r(W,E,w){t(function(){var M;try{M=E(w)}catch(x){return n.reject(W,x)}M===W?n.reject(W,new TypeError("Cannot resolve promise with itself")):n.resolve(W,M)})}function s(W){var E=W&&W.then;if(W&&(typeof W=="object"||typeof W=="function")&&typeof E=="function")return function(){E.apply(W,arguments)}}function u(W,E){var w=!1;function M(F){w||(w=!0,n.reject(W,F))}function x(F){w||(w=!0,n.resolve(W,F))}function U(){E(x,M)}var D=m(U);D.status==="error"&&M(D.value)}function m(W,E){var w={};try{w.value=W(E),w.status="success"}catch(M){w.status="error",w.value=M}return w}function p(W){return W instanceof this?W:n.resolve(new this(c),W)}function h(W){var E=new this(c);return n.reject(E,W)}function y(W){var E=this;if(Object.prototype.toString.call(W)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=W.length,M=!1;if(!w)return this.resolve([]);for(var x=new Array(w),U=0,D=-1,F=new this(c);++D<w;)q(W[D],D);return F;function q(ee,be){function ae(ue){x[be]=ue,++U!==w||M||(M=!0,n.resolve(F,x))}E.resolve(ee).then(ae,function(ue){M||(M=!0,n.reject(F,ue))})}}function R(W){var E=this;if(Object.prototype.toString.call(W)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=W.length,M=!1;if(!w)return this.resolve([]);for(var x=-1,U=new this(c);++x<w;)D(W[x]);return U;function D(F){E.resolve(F).then(function(q){M||(M=!0,n.resolve(U,q))},function(q){M||(M=!0,n.reject(U,q))})}}e.exports=i,i.prototype.catch=function(W){return this.then(null,W)},i.prototype.then=function(W,E){if(typeof W!="function"&&this.state===g||typeof E!="function"&&this.state===l)return this;var w=new this.constructor(c);return this.state!==d?r(w,this.state===g?W:E,this.outcome):this.queue.push(new I(w,W,E)),w},I.prototype.callFulfilled=function(W){n.resolve(this.promise,W)},I.prototype.otherCallFulfilled=function(W){r(this.promise,this.onFulfilled,W)},I.prototype.callRejected=function(W){n.reject(this.promise,W)},I.prototype.otherCallRejected=function(W){r(this.promise,this.onRejected,W)},n.resolve=function(W,E){var w=m(s,E);if(w.status==="error")return n.reject(W,w.value);var M=w.value;if(M)u(W,M);else{W.state=g,W.outcome=E;for(var x=-1,U=W.queue.length;++x<U;)W.queue[x].callFulfilled(E)}return W},n.reject=function(W,E){W.state=l,W.outcome=E;for(var w=-1,M=W.queue.length;++w<M;)W.queue[w].callRejected(E);return W},i.resolve=p,i.reject=h,i.all=y,i.race=R},{1:1}],3:[function(a,e,o){(function(t){typeof t.Promise!="function"&&(t.Promise=a(2))}).call(this,ut!==void 0?ut:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(a,e,o){var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C};function c(C,A){if(!(C instanceof A))throw new TypeError("Cannot call a class as a function")}function n(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var l=n();function g(){try{if(!l||!l.open)return!1;var C=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),A=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!C||A)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function d(C,A){C=C||[],A=A||{};try{return new Blob(C,A)}catch(v){if(v.name!=="TypeError")throw v;for(var b=new(typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder),f=0;f<C.length;f+=1)b.append(C[f]);return b.getBlob(A.type)}}typeof Promise>"u"&&a(3);var i=Promise;function I(C,A){A&&C.then(function(b){A(null,b)},function(b){A(b)})}function r(C,A,b){typeof A=="function"&&C.then(A),typeof b=="function"&&C.catch(b)}function s(C){return typeof C!="string"&&(console.warn(C+" used as a key, but it is not a string."),C=String(C)),C}function u(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",p=void 0,h={},y=Object.prototype.toString,R="readonly",W="readwrite";function E(C){for(var A=C.length,b=new ArrayBuffer(A),f=new Uint8Array(b),v=0;v<A;v++)f[v]=C.charCodeAt(v);return b}function w(C){return new i(function(A){var b=C.transaction(m,W),f=d([""]);b.objectStore(m).put(f,"key"),b.onabort=function(v){v.preventDefault(),v.stopPropagation(),A(!1)},b.oncomplete=function(){var v=navigator.userAgent.match(/Chrome\/(\d+)/),G=navigator.userAgent.match(/Edge\//);A(G||!v||parseInt(v[1],10)>=43)}}).catch(function(){return!1})}function M(C){return typeof p=="boolean"?i.resolve(p):w(C).then(function(A){return p=A})}function x(C){var A=h[C.name],b={};b.promise=new i(function(f,v){b.resolve=f,b.reject=v}),A.deferredOperations.push(b),A.dbReady?A.dbReady=A.dbReady.then(function(){return b.promise}):A.dbReady=b.promise}function U(C){var A=h[C.name].deferredOperations.pop();if(A)return A.resolve(),A.promise}function D(C,A){var b=h[C.name].deferredOperations.pop();if(b)return b.reject(A),b.promise}function F(C,A){return new i(function(b,f){if(h[C.name]=h[C.name]||nt(),C.db){if(!A)return b(C.db);x(C),C.db.close()}var v=[C.name];A&&v.push(C.version);var G=l.open.apply(l,v);A&&(G.onupgradeneeded=function(L){var T=G.result;try{T.createObjectStore(C.storeName),L.oldVersion<=1&&T.createObjectStore(m)}catch(N){if(N.name!=="ConstraintError")throw N;console.warn('The database "'+C.name+'" has been upgraded from version '+L.oldVersion+" to version "+L.newVersion+', but the storage "'+C.storeName+'" already exists.')}}),G.onerror=function(L){L.preventDefault(),f(G.error)},G.onsuccess=function(){var L=G.result;L.onversionchange=function(T){T.target.close()},b(L),U(C)}})}function q(C){return F(C,!1)}function ee(C){return F(C,!0)}function be(C,A){if(!C.db)return!0;var b=!C.db.objectStoreNames.contains(C.storeName),f=C.version<C.db.version,v=C.version>C.db.version;if(f&&(C.version!==A&&console.warn('The database "'+C.name+`" can't be downgraded from version `+C.db.version+" to version "+C.version+"."),C.version=C.db.version),v||b){if(b){var G=C.db.version+1;G>C.version&&(C.version=G)}return!0}return!1}function ae(C){return new i(function(A,b){var f=new FileReader;f.onerror=b,f.onloadend=function(v){var G=btoa(v.target.result||"");A({__local_forage_encoded_blob:!0,data:G,type:C.type})},f.readAsBinaryString(C)})}function ue(C){return d([E(atob(C.data))],{type:C.type})}function Se(C){return C&&C.__local_forage_encoded_blob}function ve(C){var A=this,b=A._initReady().then(function(){var f=h[A._dbInfo.name];if(f&&f.dbReady)return f.dbReady});return r(b,C,C),b}function te(C){x(C);for(var A=h[C.name],b=A.forages,f=0;f<b.length;f++){var v=b[f];v._dbInfo.db&&(v._dbInfo.db.close(),v._dbInfo.db=null)}return C.db=null,q(C).then(function(G){return C.db=G,be(C)?ee(C):G}).then(function(G){C.db=A.db=G;for(var L=0;L<b.length;L++)b[L]._dbInfo.db=G}).catch(function(G){throw D(C,G),G})}function le(C,A,b,f){f===void 0&&(f=1);try{var v=C.db.transaction(C.storeName,A);b(null,v)}catch(G){if(f>0&&(!C.db||G.name==="InvalidStateError"||G.name==="NotFoundError"))return i.resolve().then(function(){if(!C.db||G.name==="NotFoundError"&&!C.db.objectStoreNames.contains(C.storeName)&&C.version<=C.db.version)return C.db&&(C.version=C.db.version+1),ee(C)}).then(function(){return te(C).then(function(){le(C,A,b,f-1)})}).catch(b);b(G)}}function nt(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function we(C){var A=this,b={db:null};if(C)for(var f in C)b[f]=C[f];var v=h[b.name];v||(v=nt(),h[b.name]=v),v.forages.push(A),A._initReady||(A._initReady=A.ready,A.ready=ve);var G=[];function L(){return i.resolve()}for(var T=0;T<v.forages.length;T++){var N=v.forages[T];N!==A&&G.push(N._initReady().catch(L))}var B=v.forages.slice(0);return i.all(G).then(function(){return b.db=v.db,q(b)}).then(function(Y){return b.db=Y,be(b,A._defaultConfig.version)?ee(b):Y}).then(function(Y){b.db=v.db=Y,A._dbInfo=b;for(var X=0;X<B.length;X++){var H=B[X];H!==A&&(H._dbInfo.db=b.db,H._dbInfo.version=b.version)}})}function ge(C,A){var b=this;C=s(C);var f=new i(function(v,G){b.ready().then(function(){le(b._dbInfo,R,function(L,T){if(L)return G(L);try{var N=T.objectStore(b._dbInfo.storeName).get(C);N.onsuccess=function(){var B=N.result;B===void 0&&(B=null),Se(B)&&(B=ue(B)),v(B)},N.onerror=function(){G(N.error)}}catch(B){G(B)}})}).catch(G)});return I(f,A),f}function Nt(C,A){var b=this,f=new i(function(v,G){b.ready().then(function(){le(b._dbInfo,R,function(L,T){if(L)return G(L);try{var N=T.objectStore(b._dbInfo.storeName).openCursor(),B=1;N.onsuccess=function(){var Y=N.result;if(Y){var X=Y.value;Se(X)&&(X=ue(X));var H=C(X,Y.key,B++);H!==void 0?v(H):Y.continue()}else v()},N.onerror=function(){G(N.error)}}catch(Y){G(Y)}})}).catch(G)});return I(f,A),f}function kt(C,A,b){var f=this;C=s(C);var v=new i(function(G,L){var T;f.ready().then(function(){return T=f._dbInfo,y.call(A)==="[object Blob]"?M(T.db).then(function(N){return N?A:ae(A)}):A}).then(function(N){le(f._dbInfo,W,function(B,Y){if(B)return L(B);try{var X=Y.objectStore(f._dbInfo.storeName);N===null&&(N=void 0);var H=X.put(N,C);Y.oncomplete=function(){N===void 0&&(N=null),G(N)},Y.onabort=Y.onerror=function(){var _=H.error?H.error:H.transaction.error;L(_)}}catch(_){L(_)}})}).catch(L)});return I(v,b),v}function Bt(C,A){var b=this;C=s(C);var f=new i(function(v,G){b.ready().then(function(){le(b._dbInfo,W,function(L,T){if(L)return G(L);try{var N=T.objectStore(b._dbInfo.storeName).delete(C);T.oncomplete=function(){v()},T.onerror=function(){G(N.error)},T.onabort=function(){var B=N.error?N.error:N.transaction.error;G(B)}}catch(B){G(B)}})}).catch(G)});return I(f,A),f}function Vt(C){var A=this,b=new i(function(f,v){A.ready().then(function(){le(A._dbInfo,W,function(G,L){if(G)return v(G);try{var T=L.objectStore(A._dbInfo.storeName).clear();L.oncomplete=function(){f()},L.onabort=L.onerror=function(){var N=T.error?T.error:T.transaction.error;v(N)}}catch(N){v(N)}})}).catch(v)});return I(b,C),b}function xt(C){var A=this,b=new i(function(f,v){A.ready().then(function(){le(A._dbInfo,R,function(G,L){if(G)return v(G);try{var T=L.objectStore(A._dbInfo.storeName).count();T.onsuccess=function(){f(T.result)},T.onerror=function(){v(T.error)}}catch(N){v(N)}})}).catch(v)});return I(b,C),b}function ot(C,A){var b=this,f=new i(function(v,G){C<0?v(null):b.ready().then(function(){le(b._dbInfo,R,function(L,T){if(L)return G(L);try{var N=T.objectStore(b._dbInfo.storeName),B=!1,Y=N.openKeyCursor();Y.onsuccess=function(){var X=Y.result;X?C===0||B?v(X.key):(B=!0,X.advance(C)):v(null)},Y.onerror=function(){G(Y.error)}}catch(X){G(X)}})}).catch(G)});return I(f,A),f}function Yt(C){var A=this,b=new i(function(f,v){A.ready().then(function(){le(A._dbInfo,R,function(G,L){if(G)return v(G);try{var T=L.objectStore(A._dbInfo.storeName).openKeyCursor(),N=[];T.onsuccess=function(){var B=T.result;B?(N.push(B.key),B.continue()):f(N)},T.onerror=function(){v(T.error)}}catch(B){v(B)}})}).catch(v)});return I(b,C),b}function Xt(C,A){A=u.apply(this,arguments);var b=this.config();(C=typeof C!="function"&&C||{}).name||(C.name=C.name||b.name,C.storeName=C.storeName||b.storeName);var f,v=this;if(C.name){var G=C.name===b.name&&v._dbInfo.db?i.resolve(v._dbInfo.db):q(C).then(function(L){var T=h[C.name],N=T.forages;T.db=L;for(var B=0;B<N.length;B++)N[B]._dbInfo.db=L;return L});f=C.storeName?G.then(function(L){if(L.objectStoreNames.contains(C.storeName)){var T=L.version+1;x(C);var N=h[C.name],B=N.forages;L.close();for(var Y=0;Y<B.length;Y++){var X=B[Y];X._dbInfo.db=null,X._dbInfo.version=T}var H=new i(function(_,K){var oe=l.open(C.name,T);oe.onerror=function(We){oe.result.close(),K(We)},oe.onupgradeneeded=function(){oe.result.deleteObjectStore(C.storeName)},oe.onsuccess=function(){var We=oe.result;We.close(),_(We)}});return H.then(function(_){N.db=_;for(var K=0;K<B.length;K++){var oe=B[K];oe._dbInfo.db=_,U(oe._dbInfo)}}).catch(function(_){throw(D(C,_)||i.resolve()).catch(function(){}),_})}}):G.then(function(L){x(C);var T=h[C.name],N=T.forages;L.close();for(var B=0;B<N.length;B++)N[B]._dbInfo.db=null;var Y=new i(function(X,H){var _=l.deleteDatabase(C.name);_.onerror=function(){var K=_.result;K&&K.close(),H(_.error)},_.onblocked=function(){console.warn('dropInstance blocked for database "'+C.name+'" until all open connections are closed')},_.onsuccess=function(){var K=_.result;K&&K.close(),X(K)}});return Y.then(function(X){T.db=X;for(var H=0;H<N.length;H++)U(N[H]._dbInfo)}).catch(function(X){throw(D(C,X)||i.resolve()).catch(function(){}),X})})}else f=i.reject("Invalid arguments");return I(f,A),f}var me={_driver:"asyncStorage",_initStorage:we,_support:g(),iterate:Nt,getItem:ge,setItem:kt,removeItem:Bt,clear:Vt,length:xt,key:ot,keys:Yt,dropInstance:Xt};function Ye(){return typeof openDatabase=="function"}var ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Jt="~~local_forage_type~",he=/^~~local_forage_type~([^~]+)~/,Ee="__lfsc__:",Oe=Ee.length,Me="arbf",De="blob",rt="si08",Te="ui08",Ne="uic8",ne="si16",it="si32",at="ur16",lt="ui32",gt="fl32",ke="fl64",Be=Oe+Me.length,pe=Object.prototype.toString;function fe(C){var A,b,f,v,G,L=.75*C.length,T=C.length,N=0;C[C.length-1]==="="&&(L--,C[C.length-2]==="="&&L--);var B=new ArrayBuffer(L),Y=new Uint8Array(B);for(A=0;A<T;A+=4)b=ce.indexOf(C[A]),f=ce.indexOf(C[A+1]),v=ce.indexOf(C[A+2]),G=ce.indexOf(C[A+3]),Y[N++]=b<<2|f>>4,Y[N++]=(15&f)<<4|v>>2,Y[N++]=(3&v)<<6|63&G;return B}function Ge(C){var A,b=new Uint8Array(C),f="";for(A=0;A<b.length;A+=3)f+=ce[b[A]>>2],f+=ce[(3&b[A])<<4|b[A+1]>>4],f+=ce[(15&b[A+1])<<2|b[A+2]>>6],f+=ce[63&b[A+2]];return b.length%3==2?f=f.substring(0,f.length-1)+"=":b.length%3==1&&(f=f.substring(0,f.length-2)+"=="),f}function je(C,A){var b="";if(C&&(b=pe.call(C)),C&&(b==="[object ArrayBuffer]"||C.buffer&&pe.call(C.buffer)==="[object ArrayBuffer]")){var f,v=Ee;C instanceof ArrayBuffer?(f=C,v+=Me):(f=C.buffer,b==="[object Int8Array]"?v+=rt:b==="[object Uint8Array]"?v+=Te:b==="[object Uint8ClampedArray]"?v+=Ne:b==="[object Int16Array]"?v+=ne:b==="[object Uint16Array]"?v+=at:b==="[object Int32Array]"?v+=it:b==="[object Uint32Array]"?v+=lt:b==="[object Float32Array]"?v+=gt:b==="[object Float64Array]"?v+=ke:A(new Error("Failed to get type for BinaryArray"))),A(v+Ge(f))}else if(b==="[object Blob]"){var G=new FileReader;G.onload=function(){var L=Jt+C.type+"~"+Ge(this.result);A(Ee+De+L)},G.readAsArrayBuffer(C)}else try{A(JSON.stringify(C))}catch(L){console.error("Couldn't convert value into a JSON string: ",C),A(null,L)}}function ye(C){if(C.substring(0,Oe)!==Ee)return JSON.parse(C);var A,b=C.substring(Be),f=C.substring(Oe,Be);if(f===De&&he.test(b)){var v=b.match(he);A=v[1],b=b.substring(v[0].length)}var G=fe(b);switch(f){case Me:return G;case De:return d([G],{type:A});case rt:return new Int8Array(G);case Te:return new Uint8Array(G);case Ne:return new Uint8ClampedArray(G);case ne:return new Int16Array(G);case at:return new Uint16Array(G);case it:return new Int32Array(G);case lt:return new Uint32Array(G);case gt:return new Float32Array(G);case ke:return new Float64Array(G);default:throw new Error("Unkown type: "+f)}}var Fe={serialize:je,deserialize:ye,stringToBuffer:fe,bufferToString:Ge};function Yn(C,A,b,f){C.executeSql("CREATE TABLE IF NOT EXISTS "+A.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,f)}function Qo(C){var A=this,b={db:null};if(C)for(var f in C)b[f]=typeof C[f]!="string"?C[f].toString():C[f];var v=new i(function(G,L){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(T){return L(T)}b.db.transaction(function(T){Yn(T,b,function(){A._dbInfo=b,G()},function(N,B){L(B)})},L)});return b.serializer=Fe,v}function Le(C,A,b,f,v,G){C.executeSql(b,f,v,function(L,T){T.code===T.SYNTAX_ERR?L.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[A.storeName],function(N,B){B.rows.length?G(N,T):Yn(N,A,function(){N.executeSql(b,f,v,G)},G)},G):G(L,T)},G)}function qo(C,A){var b=this;C=s(C);var f=new i(function(v,G){b.ready().then(function(){var L=b._dbInfo;L.db.transaction(function(T){Le(T,L,"SELECT * FROM "+L.storeName+" WHERE key = ? LIMIT 1",[C],function(N,B){var Y=B.rows.length?B.rows.item(0).value:null;Y&&(Y=L.serializer.deserialize(Y)),v(Y)},function(N,B){G(B)})})}).catch(G)});return I(f,A),f}function $o(C,A){var b=this,f=new i(function(v,G){b.ready().then(function(){var L=b._dbInfo;L.db.transaction(function(T){Le(T,L,"SELECT * FROM "+L.storeName,[],function(N,B){for(var Y=B.rows,X=Y.length,H=0;H<X;H++){var _=Y.item(H),K=_.value;if(K&&(K=L.serializer.deserialize(K)),(K=C(K,_.key,H+1))!==void 0)return void v(K)}v()},function(N,B){G(B)})})}).catch(G)});return I(f,A),f}function Xn(C,A,b,f){var v=this;C=s(C);var G=new i(function(L,T){v.ready().then(function(){A===void 0&&(A=null);var N=A,B=v._dbInfo;B.serializer.serialize(A,function(Y,X){X?T(X):B.db.transaction(function(H){Le(H,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[C,Y],function(){L(N)},function(_,K){T(K)})},function(H){if(H.code===H.QUOTA_ERR){if(f>0)return void L(Xn.apply(v,[C,N,b,f-1]));T(H)}})})}).catch(T)});return I(G,b),G}function er(C,A,b){return Xn.apply(this,[C,A,b,1])}function tr(C,A){var b=this;C=s(C);var f=new i(function(v,G){b.ready().then(function(){var L=b._dbInfo;L.db.transaction(function(T){Le(T,L,"DELETE FROM "+L.storeName+" WHERE key = ?",[C],function(){v()},function(N,B){G(B)})})}).catch(G)});return I(f,A),f}function nr(C){var A=this,b=new i(function(f,v){A.ready().then(function(){var G=A._dbInfo;G.db.transaction(function(L){Le(L,G,"DELETE FROM "+G.storeName,[],function(){f()},function(T,N){v(N)})})}).catch(v)});return I(b,C),b}function or(C){var A=this,b=new i(function(f,v){A.ready().then(function(){var G=A._dbInfo;G.db.transaction(function(L){Le(L,G,"SELECT COUNT(key) as c FROM "+G.storeName,[],function(T,N){var B=N.rows.item(0).c;f(B)},function(T,N){v(N)})})}).catch(v)});return I(b,C),b}function rr(C,A){var b=this,f=new i(function(v,G){b.ready().then(function(){var L=b._dbInfo;L.db.transaction(function(T){Le(T,L,"SELECT key FROM "+L.storeName+" WHERE id = ? LIMIT 1",[C+1],function(N,B){var Y=B.rows.length?B.rows.item(0).key:null;v(Y)},function(N,B){G(B)})})}).catch(G)});return I(f,A),f}function ir(C){var A=this,b=new i(function(f,v){A.ready().then(function(){var G=A._dbInfo;G.db.transaction(function(L){Le(L,G,"SELECT key FROM "+G.storeName,[],function(T,N){for(var B=[],Y=0;Y<N.rows.length;Y++)B.push(N.rows.item(Y).key);f(B)},function(T,N){v(N)})})}).catch(v)});return I(b,C),b}function ar(C){return new i(function(A,b){C.transaction(function(f){f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(v,G){for(var L=[],T=0;T<G.rows.length;T++)L.push(G.rows.item(T).name);A({db:C,storeNames:L})},function(v,G){b(G)})},function(f){b(f)})})}function lr(C,A){A=u.apply(this,arguments);var b=this.config();(C=typeof C!="function"&&C||{}).name||(C.name=C.name||b.name,C.storeName=C.storeName||b.storeName);var f,v=this;return I(f=C.name?new i(function(G){var L;L=C.name===b.name?v._dbInfo.db:openDatabase(C.name,"","",0),C.storeName?G({db:L,storeNames:[C.storeName]}):G(ar(L))}).then(function(G){return new i(function(L,T){G.db.transaction(function(N){function B(_){return new i(function(K,oe){N.executeSql("DROP TABLE IF EXISTS "+_,[],function(){K()},function(We,Ot){oe(Ot)})})}for(var Y=[],X=0,H=G.storeNames.length;X<H;X++)Y.push(B(G.storeNames[X]));i.all(Y).then(function(){L()}).catch(function(_){T(_)})},function(N){T(N)})})}):i.reject("Invalid arguments"),A),f}var gr={_driver:"webSQLStorage",_initStorage:Qo,_support:Ye(),iterate:$o,getItem:qo,setItem:er,removeItem:tr,clear:nr,length:or,key:rr,keys:ir,dropInstance:lr};function sr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Jn(C,A){var b=C.name+"/";return C.storeName!==A.storeName&&(b+=C.storeName+"/"),b}function cr(){var C="_localforage_support_test";try{return localStorage.setItem(C,!0),localStorage.removeItem(C),!1}catch{return!0}}function dr(){return!cr()||localStorage.length>0}function Ir(C){var A=this,b={};if(C)for(var f in C)b[f]=C[f];return b.keyPrefix=Jn(C,A._defaultConfig),dr()?(A._dbInfo=b,b.serializer=Fe,i.resolve()):i.reject()}function Cr(C){var A=this,b=A.ready().then(function(){for(var f=A._dbInfo.keyPrefix,v=localStorage.length-1;v>=0;v--){var G=localStorage.key(v);G.indexOf(f)===0&&localStorage.removeItem(G)}});return I(b,C),b}function ur(C,A){var b=this;C=s(C);var f=b.ready().then(function(){var v=b._dbInfo,G=localStorage.getItem(v.keyPrefix+C);return G&&(G=v.serializer.deserialize(G)),G});return I(f,A),f}function Ar(C,A){var b=this,f=b.ready().then(function(){for(var v=b._dbInfo,G=v.keyPrefix,L=G.length,T=localStorage.length,N=1,B=0;B<T;B++){var Y=localStorage.key(B);if(Y.indexOf(G)===0){var X=localStorage.getItem(Y);if(X&&(X=v.serializer.deserialize(X)),(X=C(X,Y.substring(L),N++))!==void 0)return X}}});return I(f,A),f}function br(C,A){var b=this,f=b.ready().then(function(){var v,G=b._dbInfo;try{v=localStorage.key(C)}catch{v=null}return v&&(v=v.substring(G.keyPrefix.length)),v});return I(f,A),f}function mr(C){var A=this,b=A.ready().then(function(){for(var f=A._dbInfo,v=localStorage.length,G=[],L=0;L<v;L++){var T=localStorage.key(L);T.indexOf(f.keyPrefix)===0&&G.push(T.substring(f.keyPrefix.length))}return G});return I(b,C),b}function hr(C){var A=this.keys().then(function(b){return b.length});return I(A,C),A}function pr(C,A){var b=this;C=s(C);var f=b.ready().then(function(){var v=b._dbInfo;localStorage.removeItem(v.keyPrefix+C)});return I(f,A),f}function yr(C,A,b){var f=this;C=s(C);var v=f.ready().then(function(){A===void 0&&(A=null);var G=A;return new i(function(L,T){var N=f._dbInfo;N.serializer.serialize(A,function(B,Y){if(Y)T(Y);else try{localStorage.setItem(N.keyPrefix+C,B),L(G)}catch(X){X.name!=="QuotaExceededError"&&X.name!=="NS_ERROR_DOM_QUOTA_REACHED"||T(X),T(X)}})})});return I(v,b),v}function vr(C,A){if(A=u.apply(this,arguments),!(C=typeof C!="function"&&C||{}).name){var b=this.config();C.name=C.name||b.name,C.storeName=C.storeName||b.storeName}var f,v=this;return f=C.name?new i(function(G){C.storeName?G(Jn(C,v._defaultConfig)):G(C.name+"/")}).then(function(G){for(var L=localStorage.length-1;L>=0;L--){var T=localStorage.key(L);T.indexOf(G)===0&&localStorage.removeItem(T)}}):i.reject("Invalid arguments"),I(f,A),f}var fr={_driver:"localStorageWrapper",_initStorage:Ir,_support:sr(),iterate:Ar,getItem:ur,setItem:yr,removeItem:pr,clear:Cr,length:hr,key:br,keys:mr,dropInstance:vr},Gr=function(C,A){return C===A||typeof C=="number"&&typeof A=="number"&&isNaN(C)&&isNaN(A)},Wr=function(C,A){for(var b=C.length,f=0;f<b;){if(Gr(C[f],A))return!0;f++}return!1},Un=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"},Pe={},Hn={},Xe={INDEXEDDB:me,WEBSQL:gr,LOCALSTORAGE:fr},Zr=[Xe.INDEXEDDB._driver,Xe.WEBSQL._driver,Xe.LOCALSTORAGE._driver],st=["dropInstance"],Ut=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(st),Rr={description:"",driver:Zr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Sr(C,A){C[A]=function(){var b=arguments;return C.ready().then(function(){return C[A].apply(C,b)})}}function Ht(){for(var C=1;C<arguments.length;C++){var A=arguments[C];if(A)for(var b in A)A.hasOwnProperty(b)&&(Un(A[b])?arguments[0][b]=A[b].slice():arguments[0][b]=A[b])}return arguments[0]}var Lr=(function(){function C(A){for(var b in c(this,C),Xe)if(Xe.hasOwnProperty(b)){var f=Xe[b],v=f._driver;this[b]=v,Pe[v]||this.defineDriver(f)}this._defaultConfig=Ht({},Rr),this._config=Ht({},this._defaultConfig,A),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return C.prototype.config=function(A){if((A===void 0?"undefined":t(A))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in A){if(b==="storeName"&&(A[b]=A[b].replace(/\W/g,"_")),b==="version"&&typeof A[b]!="number")return new Error("Database version must be a number.");this._config[b]=A[b]}return!("driver"in A)||!A.driver||this.setDriver(this._config.driver)}return typeof A=="string"?this._config[A]:this._config},C.prototype.defineDriver=function(A,b,f){var v=new i(function(G,L){try{var T=A._driver,N=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!A._driver)return void L(N);for(var B=Ut.concat("_initStorage"),Y=0,X=B.length;Y<X;Y++){var H=B[Y];if((!Wr(st,H)||A[H])&&typeof A[H]!="function")return void L(N)}var _=function(){for(var oe=function(Er){return function(){var Mr=new Error("Method "+Er+" is not implemented by the current driver"),On=i.reject(Mr);return I(On,arguments[arguments.length-1]),On}},We=0,Ot=st.length;We<Ot;We++){var Dt=st[We];A[Dt]||(A[Dt]=oe(Dt))}};_();var K=function(oe){Pe[T]&&console.info("Redefining LocalForage driver: "+T),Pe[T]=A,Hn[T]=oe,G()};"_support"in A?A._support&&typeof A._support=="function"?A._support().then(K,L):K(!!A._support):K(!0)}catch(oe){L(oe)}});return r(v,b,f),v},C.prototype.driver=function(){return this._driver||null},C.prototype.getDriver=function(A,b,f){var v=Pe[A]?i.resolve(Pe[A]):i.reject(new Error("Driver not found."));return r(v,b,f),v},C.prototype.getSerializer=function(A){var b=i.resolve(Fe);return r(b,A),b},C.prototype.ready=function(A){var b=this,f=b._driverSet.then(function(){return b._ready===null&&(b._ready=b._initDriver()),b._ready});return r(f,A,A),f},C.prototype.setDriver=function(A,b,f){var v=this;Un(A)||(A=[A]);var G=this._getSupportedDrivers(A);function L(){v._config.driver=v.driver()}function T(Y){return v._extend(Y),L(),v._ready=v._initStorage(v._config),v._ready}function N(Y){return function(){var X=0;function H(){for(;X<Y.length;){var _=Y[X];return X++,v._dbInfo=null,v._ready=null,v.getDriver(_).then(T).catch(H)}L();var K=new Error("No available storage method found.");return v._driverSet=i.reject(K),v._driverSet}return H()}}var B=this._driverSet!==null?this._driverSet.catch(function(){return i.resolve()}):i.resolve();return this._driverSet=B.then(function(){var Y=G[0];return v._dbInfo=null,v._ready=null,v.getDriver(Y).then(function(X){v._driver=X._driver,L(),v._wrapLibraryMethodsWithReady(),v._initDriver=N(G)})}).catch(function(){L();var Y=new Error("No available storage method found.");return v._driverSet=i.reject(Y),v._driverSet}),r(this._driverSet,b,f),this._driverSet},C.prototype.supports=function(A){return!!Hn[A]},C.prototype._extend=function(A){Ht(this,A)},C.prototype._getSupportedDrivers=function(A){for(var b=[],f=0,v=A.length;f<v;f++){var G=A[f];this.supports(G)&&b.push(G)}return b},C.prototype._wrapLibraryMethodsWithReady=function(){for(var A=0,b=Ut.length;A<b;A++)Sr(this,Ut[A])},C.prototype.createInstance=function(A){return new C(A)},C})(),wr=new Lr;e.exports=wr},{3:3}]},{},[4])(4)),to.exports),Q=wn(Tr);function Ro(a,e){let o=new Uint8Array(e),t="";for(let c=0;c<o.byteLength;c++)t+=String.fromCharCode(o[c]);return a.btoa(t)}function So(a,e,o){let t=(function(n,l){let g=n.atob(l),d=g.length,i=new Uint8Array(d);for(let I=0;I<d;I++)i[I]=g.charCodeAt(I);return i.buffer})(a,e),c=new Uint8Array(t);return new Blob([c.buffer],{type:o})}async function Wt(a){let e=new TextEncoder().encode(a);if("CompressionStream"in window){let o=new Blob([e]).stream().pipeThrough(new CompressionStream("gzip"));return await new Response(o).blob()}}async function Nr(a,e){let o=`sprite-garden-save-game-file-${(function(){let c=new Date;return`${c.getUTCFullYear()}-${`${c.getUTCMonth()+1}`.padStart(2,"0")}-${`${c.getUTCDate()}`.padStart(2,"0")}_${`${c.getUTCHours()}`.padStart(2,"0")}-${`${c.getUTCMinutes()}`.padStart(2,"0")}-${`${c.getUTCSeconds()}`.padStart(2,"0")}.${`${c.getUTCMilliseconds()}`.padStart(3,"0")}`})()}.sgs`,t;if(a.showSaveFilePicker)t=await a.showSaveFilePicker({suggestedName:o}),await(async function(c,n){let l=await Wt(c),g=await n.createWritable();await g.write(l),await g.close()})(e,t);else{let c=await Wt(e),n=URL.createObjectURL(c),l=a.document.createElement("a");l.href=n,l.download=o,a.document.body.append(l),l.click(),a.document.body.removeChild(l),URL.revokeObjectURL(n)}}function Et(a){let e=a.spriteGarden.state,o=a.spriteGarden.config;return{config:{breakMode:o.breakMode.get(),canvasScale:o.canvasScale.get(),currentResolution:o.currentResolution.get(),fogMode:o.fogMode.get(),fogScale:o.fogScale.get(),FRICTION:o.FRICTION.get(),GRAVITY:o.GRAVITY.get(),isFogScaled:o.isFogScaled.get(),MAX_FALL_SPEED:o.MAX_FALL_SPEED.get(),SURFACE_LEVEL:o.SURFACE_LEVEL.get(),TILE_SIZE:o.TILE_SIZE.get(),version:o.version.get(),WORLD_HEIGHT:o.WORLD_HEIGHT.get(),WORLD_WIDTH:o.WORLD_WIDTH.get(),worldSeed:o.worldSeed.get()},state:{camera:e.camera.get(),exploredMap:e.exploredMap.get().toObject(),gameTime:e.gameTime.get(),growthTimers:e.growthTimers.get(),materialsInventory:e.materialsInventory.get(),plantStructures:e.plantStructures.get(),player:e.player.get(),seedInventory:e.seedInventory.get(),seeds:e.seeds.get(),selectedMaterialType:e.selectedMaterialType.get(),selectedSeedType:e.selectedSeedType.get(),viewMode:e.viewMode.get(),world:e.world.get().toArray()}}}var Lo={"amber-500":"#f39c12","amber-800":"#8b4513","amber-900":"#654321","antique-white":"#fffacd",beige:"#f5f5dc","black-alpha-60":"#00000099","black-alpha-80":"#000000cc",black:"#000000","blue-400":"#4a90e2","blue-500":"#2196f3","blue-700":"#0066cc",bronze:"#b87333",brown:"#654321",burlywood:"#deb887",chocolate:"#d2691e",coral:"#ff7f50",crimson:"#dc143c","dark-brown":"#59392b","dark-clay":"#cd853f","dark-cyan":"#2f4f2f","dark-green":"#2e5930","dark-olive-green":"#556b2f","dark-orange":"#ff8c00","dark-red":"#8b0000","dark-sea-green-light":"#9bcd9b","dark-sea-green":"#4f7942","dark-slate-gray":"#2f4f4f","dark-tan":"#8b7355","deep-pink":"#ff1493","dim-gray":"#696969","emerald-600":"#45a049","emerald-700":"#27ae60","forest-green":"#228b22",gold:"#ffd700",goldenrod:"#daa520","granite-gray-alpha-30":"#6464644d","gray-100":"#eeeeee","gray-200":"#e3e3e3","gray-300":"#e0e0e0","gray-400":"#dddddd","gray-50":"#f0f0f0","gray-500":"#cccccc","gray-600":"#bbbbbb","gray-700":"#888888","gray-800":"#666666","gray-900":"#333333","gray-alpha-10":"#ffffff1a","gray-alpha-20":"#ffffff33","gray-alpha-30":"#ffffff4d","gray-granite-alpha-30":"#6464644d","green-500":"#4caf50","green-yellow-400":"#adff2f","hot-pink":"#ff69b4","indian-red":"#cd5c5c",jet:"#1c1c1c",khaki:"#ffec8b","lawn-green":"#7cfc00","light-coral-pink":"#f08080","light-coral":"#ffa54f","light-pink":"#ffb6d9","light-sky-blue":"#87ceeb","light-steel-blue":"#c5d1d3","lime-400":"#32cd32","medium-purple":"#8a7fc8","medium-sea-green":"#3cb371","medium-slate-blue":"#9370db","misty-rose":"#ffe4e1","neutral-950":"#555","olive-drab-700":"#6b8e23","orange-500":"#ff6b35","orange-red":"#ff4500","pale-goldenrod":"#eee8aa","pale-green-200":"#90ee90","pale-green-300":"#98fb98",pink:"#ff69b4",plum:"#dda0dd","powder-blue":"#b0e0e6","red-500":"#ff4444","royal-blue":"#4169e1","saddle-brown":"#8b4513","sandy-brown":"#f4a460","sea-green":"#2e8b57","sky-300":"#87ceeb","sky-50":"#e6f3ff","stone-100":"#f1f1f1","stone-50":"#fffafa",tan:"#b8a99a",tomato:"#ff6347",white:"#ffffff","wood-brown":"#362200","yellow-400":"#ffff00","yellow-green-400":"#9acd32"},wo={"touch-btn-background":"var(--sg-color-black-alpha-60)","touch-btn-border":"var(--sg-color-gray-alpha-30)","touch-btn":"var(--sg-color-white)","ui-grid-corner-container":"var(--sg-color-white)","ui-grid-corner-heading-background":"var(--black-alpha-80)","ui-grid-corner-heading-border":"var(--sg-color-gray-alpha-10)","ui-grid-corner-heading":"var(--sg-color-white)","ui-grid-corner-sub-heading":"var(--sg-color-white)"},En={"agave-base":"var(--sg-color-lime-400)","agave-flower-stalk":"var(--sg-color-yellow-green-400)","agave-flower":"var(--sg-color-yellow-400)","agave-growing":"var(--sg-color-green-yellow-400)","agave-spike":"var(--sg-color-lawn-green)",agave:"var(--sg-color-lawn-green)",air:"var(--sg-color-sky-300)","bamboo-growing":"var(--sg-color-pale-green-300)","bamboo-joint":"var(--sg-color-olive-drab-700)","bamboo-leaves":"var(--sg-color-lime-400)","bamboo-stalk":"var(--sg-color-pale-green-200)",bamboo:"var(--sg-color-pale-green-200)",bedrock:"var(--sg-color-jet)","berry-bush-berries":"var(--sg-color-crimson)","berry-bush-branch":"var(--sg-color-saddle-brown)","berry-bush-growing":"var(--sg-color-indian-red)","berry-bush-leaves":"var(--sg-color-forest-green)","berry-bush":"var(--sg-color-crimson)","birch-bark":"var(--sg-color-white)","birch-branches":"var(--sg-color-dark-tan)","birch-catkins":"var(--sg-color-pale-goldenrod)","birch-growing":"var(--sg-color-antique-white)","birch-leaves":"var(--sg-color-pale-green-300)","birch-trunk":"var(--sg-color-beige)",birch:"var(--sg-color-beige)","cactus-body":"var(--sg-color-sea-green)","cactus-flower":"var(--sg-color-hot-pink)","cactus-growing":"var(--sg-color-forest-green)",cactus:"var(--sg-color-lime-400)","carrot-growing":"var(--sg-color-coral)","carrot-leaves":"var(--sg-color-forest-green)","carrot-root":"var(--sg-color-tomato)",carrot:"var(--sg-color-dark-orange)",clay:"var(--sg-color-dark-clay)",cloud:"var(--sg-color-light-steel-blue)",coal:"var(--sg-color-dark-slate-gray)","corn-ear":"var(--sg-color-pale-goldenrod)","corn-growing":"var(--sg-color-pale-goldenrod)","corn-leaves":"var(--sg-color-olive-drab-700)","corn-silk":"var(--sg-color-burlywood)","corn-stalk":"var(--sg-color-yellow-green-400)",corn:"var(--sg-color-pale-goldenrod)",dirt:"var(--sg-color-saddle-brown)","fern-frond":"var(--sg-color-medium-sea-green)","fern-growing":"var(--sg-color-pale-green-200)","fern-stem":"var(--sg-color-dark-olive-green)",fern:"var(--sg-color-medium-sea-green)",fog:"var(--sg-color-black)",gold:"var(--sg-color-gold)",grass:"var(--sg-color-pale-green-200)",ice:"var(--sg-color-powder-blue)",iron:"var(--sg-color-bronze)","kelp-blade":"var(--sg-color-sea-green)","kelp-bulb":"var(--sg-color-dark-sea-green)","kelp-growing":"var(--sg-color-medium-slate-blue)",kelp:"var(--sg-color-dark-cyan)",lava:"var(--sg-color-orange-red)","lavender-bush":"var(--sg-color-medium-purple)","lavender-flowers":"var(--sg-color-medium-slate-blue)","lavender-growing":"var(--sg-color-plum)","lavender-stem":"var(--sg-color-dark-olive-green)",lavender:"var(--sg-color-medium-slate-blue)","loading-pixel":"var(--sg-color-light-sky-blue)","lotus-bud":"var(--sg-color-light-pink)","lotus-flower":"var(--sg-color-pink)","lotus-growing":"var(--sg-color-misty-rose)","lotus-pad":"var(--sg-color-medium-sea-green)","lotus-stem":"var(--sg-color-sea-green)",lotus:"var(--sg-color-pink)",moss:"var(--sg-color-dark-olive-green)","mushroom-cap":"var(--sg-color-dark-red)","mushroom-growing":"var(--sg-color-indian-red)","mushroom-stem":"var(--sg-color-chocolate)",mushroom:"var(--sg-color-dark-red)","pine-cone":"var(--sg-color-dark-tan)","pine-needles":"var(--sg-color-dark-green)","pine-tree-growing":"var(--sg-color-dark-olive-green)","pine-tree":"var(--sg-color-dark-green)","pine-trunk":"var(--sg-color-saddle-brown)","player-body":"var(--sg-color-pink)","player-border":"var(--sg-color-black)","player-eyes":"var(--sg-color-black)",pumice:"var(--sg-color-tan)","pumpkin-fruit":"var(--sg-color-dark-orange)","pumpkin-growing":"var(--sg-color-light-coral)","pumpkin-leaves":"var(--sg-color-yellow-green-400)","pumpkin-stem":"var(--sg-color-saddle-brown)","pumpkin-vine":"var(--sg-color-olive-drab-700)",pumpkin:"var(--sg-color-dark-orange)","rose-bloom":"var(--sg-color-crimson)","rose-bud":"var(--sg-color-indian-red)","rose-growing":"var(--sg-color-light-coral-pink)","rose-leaves":"var(--sg-color-dark-cyan)","rose-stem":"var(--sg-color-brown)","rose-thorns":"var(--sg-color-saddle-brown)",rose:"var(--sg-color-crimson)",sand:"var(--sg-color-sandy-brown)",snow:"var(--sg-color-stone-50)",stone:"var(--sg-color-dim-gray)","sunflower-center":"var(--sg-color-saddle-brown)","sunflower-growing":"var(--sg-color-khaki)","sunflower-leaves":"var(--sg-color-forest-green)","sunflower-petals":"var(--sg-color-gold)","sunflower-stem":"var(--sg-color-dark-tan)",sunflower:"var(--sg-color-gold)","tree-growing":"var(--sg-color-yellow-green-400)","tree-leaves":"var(--sg-color-forest-green)","tree-trunk":"var(--sg-color-dark-brown)","tulip-bulb":"var(--sg-color-dark-tan)","tulip-growing":"var(--sg-color-light-pink)","tulip-leaves":"var(--sg-color-forest-green)","tulip-petals":"var(--sg-color-deep-pink)","tulip-stem":"var(--sg-color-olive-drab-700)",tulip:"var(--sg-color-deep-pink)",walnut:"var(--sg-color-brown)",water:"var(--sg-color-royal-blue)","wheat-grain":"var(--sg-color-goldenrod)","wheat-growing":"var(--sg-color-yellow-green-400)","wheat-stalk":"var(--sg-color-dark-tan)",wheat:"var(--sg-color-goldenrod)","willow-branches":"var(--sg-color-medium-slate-blue)","willow-leaves":"var(--sg-color-yellow-green-400)","willow-tree-growing":"var(--sg-color-dark-sea-green-light)","willow-tree":"var(--sg-color-medium-slate-blue)","willow-trunk":"var(--sg-color-dark-tan)",wood:"var(--sg-color-wood-brown)",xray:"var(--sg-color-granite-gray-alpha-30)"};function $t(a,e){let o;for(let t of e){o||(o={});let c=t.startsWith("--sg-color-")?t:`${t}-color`;o[c]=a.getPropertyValue(c)}return o}function xe(a,e){let o=a.getComputedStyle(e.host);return j(j(j({},$t(o,Object.keys(Lo).map(t=>`--sg-color-${t}`))),$t(o,Object.keys(En).map(t=>`--sg-tile-${t}`))),$t(o,Object.keys(wo).map(t=>`--sg-ui-${t}`)))}var $e=class a{constructor(e,o,t){this.colors=t,this.width=e,this.height=o,this.data=new Uint8Array(e*o),this.cache={canvas:null,lastPlayerTileX:null,lastPlayerTileY:null,lastCameraGridX:null,lastCameraGridY:null,needsUpdate:!0}}isExplored(e,o){if(e<0||e>=this.width||o<0||o>=this.height)return!1;let t=o*this.width+e;return this.data[t]===1}setExplored(e,o){if(e<0||e>=this.width||o<0||o>=this.height)return!1;let t=o*this.width+e,c=this.data[t]===1;return this.data[t]=1,!c}setExploredBatch(e){let o=!1;for(let t of e)this.setExplored(t.x,t.y)&&(o=!0);return o}reset(){this.data.fill(0),this.cache.needsUpdate=!0}static fromObject(e,o,t,c){let n=new a(o,t,c);if(e&&typeof e=="object"){for(let l in e)if(e[l]){let[g,d]=l.split(",").map(Number);n.setExplored(g,d)}}return n}toObject(){let e={};for(let o=0;o<this.height;o++)for(let t=0;t<this.width;t++)this.isExplored(t,o)&&(e[`${t},${o}`]=!0);return e}updateFromPlayer(e,o,t=15){let c=e.get(),n=Math.floor((c.x+c.width/2)/o),l=Math.floor((c.y+c.height/2)/o),g=!1;for(let d=-t;d<=t;d++)for(let i=-t;i<=t;i++){let I=n+d,r=l+i;Math.sqrt(d*d+i*i)<=t&&this.setExplored(I,r)&&(g=!0)}return g}render(e,o,t,c){if(!e||!o)return;let n=c.get(),l=Math.ceil(o.width/t)+1,g=Math.ceil(o.height/t)+1,d=Math.floor(n.x/t),i=Math.floor(n.y/t),I=n.x%t,r=n.y%t;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let s=0;s<l;s++){let u=d+s;if(u<0||u>=this.width)continue;let m=Math.round(s*t-I);for(let p=0;p<g;p++){let h=i+p;if(!(h<0||h>=this.height)&&!this.isExplored(u,h)){let y=Math.round(p*t-r);e.fillRect(m,y,t,t)}}}}renderScaled(e,o,t,c,n=2){if(!e||!o)return;let l=c.get(),g=t*n,d=Math.ceil(o.width/g)+1,i=Math.ceil(o.height/g)+1,I=Math.floor(l.x/g),r=Math.floor(l.y/g),s=l.x%g,u=l.y%g;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let m=0;m<d;m++){let p=I+m,h=Math.round(m*g-s);for(let y=0;y<i;y++){let R=r+y,W=Math.round(y*g-u),E=!0;for(let w=0;w<n&&E;w++)for(let M=0;M<n&&E;M++){let x=p*n+w,U=R*n+M;x>=0&&x<this.width&&U>=0&&U<this.height&&this.isExplored(x,U)&&(E=!1)}E&&e.fillRect(h,W,g,g)}}}},kr=Object.defineProperty,en=(a,e,o)=>(((t,c,n)=>{c in t?kr(t,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[c]=n})(a,typeof e!="symbol"?e+"":e,o),o),tn=(a,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return a.has(e)},At=(a,e,o)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,o)},no=(a,e,o)=>(((t,c,n)=>{if(!c.has(t))throw TypeError("Cannot "+n)})(a,e,"access private method"),o);function Eo(a,e){return Object.is(a,e)}var $=null,Qe=!1,Gt=1,bt=Symbol("SIGNAL");function Je(a){let e=$;return $=a,e}var Mn={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Zt(a){if(Qe)throw new Error("");if($===null)return;$.consumerOnSignalRead(a);let e=$.nextProducerIndex++;Ue($),e<$.producerNode.length&&$.producerNode[e]!==a&&In($)&&Mt($.producerNode[e],$.producerIndexOfThis[e]),$.producerNode[e]!==a&&($.producerNode[e]=a,$.producerIndexOfThis[e]=In($)?No(a,$,e):0),$.producerLastReadVersion[e]=a.version}function Mo(a){if(a.dirty||a.lastCleanEpoch!==Gt){if(!a.producerMustRecompute(a)&&!(function(e){Ue(e);for(let o=0;o<e.producerNode.length;o++){let t=e.producerNode[o],c=e.producerLastReadVersion[o];if(c!==t.version||(Mo(t),c!==t.version))return!0}return!1})(a))return a.dirty=!1,void(a.lastCleanEpoch=Gt);a.producerRecomputeValue(a),a.dirty=!1,a.lastCleanEpoch=Gt}}function To(a){if(a.liveConsumerNode===void 0)return;let e=Qe;Qe=!0;try{for(let o of a.liveConsumerNode)o.dirty||Br(o)}finally{Qe=e}}function Br(a){var e;a.dirty=!0,To(a),(e=a.consumerMarkedDirty)==null||e.call(a.wrapper??a)}function No(a,e,o){var t;if(Tn(a),Ue(a),a.liveConsumerNode.length===0){(t=a.watched)==null||t.call(a.wrapper);for(let c=0;c<a.producerNode.length;c++)a.producerIndexOfThis[c]=No(a.producerNode[c],a,c)}return a.liveConsumerIndexOfThis.push(o),a.liveConsumerNode.push(e)-1}function Mt(a,e){var o;if(Tn(a),Ue(a),a.liveConsumerNode.length===1){(o=a.unwatched)==null||o.call(a.wrapper);for(let c=0;c<a.producerNode.length;c++)Mt(a.producerNode[c],a.producerIndexOfThis[c])}let t=a.liveConsumerNode.length-1;if(a.liveConsumerNode[e]=a.liveConsumerNode[t],a.liveConsumerIndexOfThis[e]=a.liveConsumerIndexOfThis[t],a.liveConsumerNode.length--,a.liveConsumerIndexOfThis.length--,e<a.liveConsumerNode.length){let c=a.liveConsumerIndexOfThis[e],n=a.liveConsumerNode[e];Ue(n),n.producerIndexOfThis[c]=e}}function In(a){var e;return a.consumerIsAlwaysLive||(((e=a?.liveConsumerNode)==null?void 0:e.length)??0)>0}function Ue(a){a.producerNode??(a.producerNode=[]),a.producerIndexOfThis??(a.producerIndexOfThis=[]),a.producerLastReadVersion??(a.producerLastReadVersion=[])}function Tn(a){a.liveConsumerNode??(a.liveConsumerNode=[]),a.liveConsumerIndexOfThis??(a.liveConsumerIndexOfThis=[])}function oo(a){if(Mo(a),Zt(a),a.value===Cn)throw a.error;return a.value}var nn=Symbol("UNSET"),on=Symbol("COMPUTING"),Cn=Symbol("ERRORED"),Vr=re(j({},Mn),{value:nn,dirty:!0,error:null,equal:Eo,producerMustRecompute:a=>a.value===nn||a.value===on,producerRecomputeValue(a){if(a.value===on)throw new Error("Detected cycle in computations.");let e=a.value;a.value=on;let o=(function(n){return n&&(n.nextProducerIndex=0),Je(n)})(a),t,c=!1;try{t=a.computation.call(a.wrapper),c=e!==nn&&e!==Cn&&a.equal.call(a.wrapper,e,t)}catch(n){t=Cn,a.error=n}finally{(function(n,l){if(Je(l),n&&n.producerNode!==void 0&&n.producerIndexOfThis!==void 0&&n.producerLastReadVersion!==void 0){if(In(n))for(let g=n.nextProducerIndex;g<n.producerNode.length;g++)Mt(n.producerNode[g],n.producerIndexOfThis[g]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}})(a,o)}c?a.value=e:(a.value=t,a.version++)}}),xr=function(){throw new Error};function Yr(){return Zt(this),this.value}function Xr(a,e){$?.consumerAllowSignalWrites===!1&&xr(),a.equal.call(a.wrapper,a.value,e)||(a.value=e,(function(o){o.version++,Gt++,To(o)})(a))}var Jr=re(j({},Mn),{equal:Eo,value:void 0}),ie=Symbol("node"),O;function Ve(a=1,e=4294967295){return typeof globalThis.crypto=="object"&&typeof globalThis.crypto.getRandomValues=="function"?(function(c,n){let l=n-c+1,g=4294967295,d,i;i=g-g%l;do d=globalThis.crypto.getRandomValues(new Uint32Array(1))[0];while(d>i);return c+d%l})(a,e):(o=a,t=e,Math.floor(Math.random()*(t-o+1))+o);var o,t}(a=>{var e,o,t,c;e=ie,o=new WeakSet,a.isState=n=>typeof n=="object"&&tn(o,n),a.State=class{constructor(n,l={}){At(this,o),en(this,e);let g=(function(i){let I=Object.create(Jr);I.value=i;let r=()=>(Zt(I),I.value);return r[bt]=I,r})(n),d=g[bt];if(this[ie]=d,d.wrapper=this,l){let i=l.equals;i&&(d.equal=i),d.watched=l[a.subtle.watched],d.unwatched=l[a.subtle.unwatched]}}get(){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Yr.call(this[ie])}set(n){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Qe)throw new Error("Writes to signals not permitted during Watcher callback");Xr(this[ie],n)}},t=ie,c=new WeakSet,a.isComputed=n=>typeof n=="object"&&tn(c,n),a.Computed=class{constructor(n,l){At(this,c),en(this,t);let g=(function(i){let I=Object.create(Vr);I.computation=i;let r=()=>oo(I);return r[bt]=I,r})(n),d=g[bt];if(d.consumerAllowSignalWrites=!0,this[ie]=d,d.wrapper=this,l){let i=l.equals;i&&(d.equal=i),d.watched=l[a.subtle.watched],d.unwatched=l[a.subtle.unwatched]}}get(){if(!(0,a.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return oo(this[ie])}},(n=>{var l,g,d,i;n.untrack=function(I){let r,s=null;try{s=Je(null),r=I()}finally{Je(s)}return r},n.introspectSources=function(I){var r;if(!(0,a.isComputed)(I)&&!(0,a.isWatcher)(I))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((r=I[ie].producerNode)==null?void 0:r.map(s=>s.wrapper))??[]},n.introspectSinks=function(I){var r;if(!(0,a.isComputed)(I)&&!(0,a.isState)(I))throw new TypeError("Called introspectSinks without a Signal argument");return((r=I[ie].liveConsumerNode)==null?void 0:r.map(s=>s.wrapper))??[]},n.hasSinks=function(I){if(!(0,a.isComputed)(I)&&!(0,a.isState)(I))throw new TypeError("Called hasSinks without a Signal argument");let r=I[ie].liveConsumerNode;return!!r&&r.length>0},n.hasSources=function(I){if(!(0,a.isComputed)(I)&&!(0,a.isWatcher)(I))throw new TypeError("Called hasSources without a Computed or Watcher argument");let r=I[ie].producerNode;return!!r&&r.length>0},l=ie,g=new WeakSet,d=new WeakSet,i=function(I){for(let r of I)if(!(0,a.isComputed)(r)&&!(0,a.isState)(r))throw new TypeError("Called watch/unwatch without a Computed or State argument")},a.isWatcher=I=>tn(g,I),n.Watcher=class{constructor(I){At(this,g),At(this,d),en(this,l);let r=Object.create(Mn);r.wrapper=this,r.consumerMarkedDirty=I,r.consumerIsAlwaysLive=!0,r.consumerAllowSignalWrites=!1,r.producerNode=[],this[ie]=r}watch(...I){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");no(this,d,i).call(this,I);let r=this[ie];r.dirty=!1;let s=Je(r);for(let u of I)Zt(u[ie]);Je(s)}unwatch(...I){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");no(this,d,i).call(this,I);let r=this[ie];Ue(r);for(let s=r.producerNode.length-1;s>=0;s--)if(I.includes(r.producerNode[s].wrapper)){Mt(r.producerNode[s],r.producerIndexOfThis[s]);let u=r.producerNode.length-1;if(r.producerNode[s]=r.producerNode[u],r.producerIndexOfThis[s]=r.producerIndexOfThis[u],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,s<r.producerNode.length){let m=r.producerIndexOfThis[s],p=r.producerNode[s];Tn(p),p.liveConsumerIndexOfThis[m]=s}}}getPending(){if(!(0,a.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ie].producerNode.filter(I=>I.dirty).map(I=>I.wrapper)}},n.currentComputed=function(){var I;return(I=$)==null?void 0:I.wrapper},n.watched=Symbol("watched"),n.unwatched=Symbol("unwatched")})(a.subtle||(a.subtle={}))})(O||(O={}));var S=a=>j({crop:!1,farmable:!1,solid:!1,isSeed:!1,drops:null},a),Z={AIR:"AIR",AGAVE_BASE:"AGAVE_BASE",AGAVE_FLOWER_STALK:"AGAVE_FLOWER_STALK",AGAVE_FLOWER:"AGAVE_FLOWER",AGAVE_GROWING:"AGAVE_GROWING",AGAVE_SPIKE:"AGAVE_SPIKE",AGAVE:"AGAVE",BAMBOO_GROWING:"BAMBOO_GROWING",BAMBOO_JOINT:"BAMBOO_JOINT",BAMBOO_LEAVES:"BAMBOO_LEAVES",BAMBOO_STALK:"BAMBOO_STALK",BAMBOO:"BAMBOO",BEDROCK:"BEDROCK",BERRY_BUSH_BERRIES:"BERRY_BUSH_BERRIES",BERRY_BUSH_BRANCH:"BERRY_BUSH_BRANCH",BERRY_BUSH_GROWING:"BERRY_BUSH_GROWING",BERRY_BUSH_LEAVES:"BERRY_BUSH_LEAVES",BERRY_BUSH:"BERRY_BUSH",BIRCH_BARK:"BIRCH_BARK",BIRCH_BRANCHES:"BIRCH_BRANCHES",BIRCH_CATKINS:"BIRCH_CATKINS",BIRCH_GROWING:"BIRCH_GROWING",BIRCH_LEAVES:"BIRCH_LEAVES",BIRCH_TRUNK:"BIRCH_TRUNK",BIRCH:"BIRCH",CACTUS_BODY:"CACTUS_BODY",CACTUS_FLOWER:"CACTUS_FLOWER",CACTUS_GROWING:"CACTUS_GROWING",CACTUS:"CACTUS",CARROT_GROWING:"CARROT_GROWING",CARROT_LEAVES:"CARROT_LEAVES",CARROT_ROOT:"CARROT_ROOT",CARROT:"CARROT",CLAY:"CLAY",CLOUD:"CLOUD",COAL:"COAL",CORN_EAR:"CORN_EAR",CORN_GROWING:"CORN_GROWING",CORN_LEAVES:"CORN_LEAVES",CORN_SILK:"CORN_SILK",CORN_STALK:"CORN_STALK",CORN:"CORN",DIRT:"DIRT",FERN_FROND:"FERN_FROND",FERN_GROWING:"FERN_GROWING",FERN_STEM:"FERN_STEM",FERN:"FERN",FOG:"FOG",GOLD:"GOLD",GRASS:"GRASS",ICE:"ICE",IRON:"IRON",KELP_BLADE:"KELP_BLADE",KELP_BULB:"KELP_BULB",KELP_GROWING:"KELP_GROWING",KELP:"KELP",LAVA:"LAVA",LAVENDER_BUSH:"LAVENDER_BUSH",LAVENDER_FLOWERS:"LAVENDER_FLOWERS",LAVENDER_GROWING:"LAVENDER_GROWING",LAVENDER_STEM:"LAVENDER_STEM",LAVENDER:"LAVENDER",LOADING_PIXEL:"LOADING_PIXEL",LOTUS_BUD:"LOTUS_BUD",LOTUS_FLOWER:"LOTUS_FLOWER",LOTUS_GROWING:"LOTUS_GROWING",LOTUS_PAD:"LOTUS_PAD",LOTUS_STEM:"LOTUS_STEM",LOTUS:"LOTUS",MOSS:"MOSS",MUSHROOM_CAP:"MUSHROOM_CAP",MUSHROOM_GROWING:"MUSHROOM_GROWING",MUSHROOM_STEM:"MUSHROOM_STEM",MUSHROOM:"MUSHROOM",PINE_CONE:"PINE_CONE",PINE_NEEDLES:"PINE_NEEDLES",PINE_TREE_GROWING:"PINE_TREE_GROWING",PINE_TREE:"PINE_TREE",PINE_TRUNK:"PINE_TRUNK",PLAYER_BODY:"PLAYER_BODY",PLAYER_BORDER:"PLAYER_BORDER",PLAYER_EYES:"PLAYER_EYES",PUMICE:"PUMICE",PUMPKIN_FRUIT:"PUMPKIN_FRUIT",PUMPKIN_GROWING:"PUMPKIN_GROWING",PUMPKIN_LEAVES:"PUMPKIN_LEAVES",PUMPKIN_STEM:"PUMPKIN_STEM",PUMPKIN_VINE:"PUMPKIN_VINE",PUMPKIN:"PUMPKIN",ROSE_BLOOM:"ROSE_BLOOM",ROSE_BUD:"ROSE_BUD",ROSE_GROWING:"ROSE_GROWING",ROSE_LEAVES:"ROSE_LEAVES",ROSE_STEM:"ROSE_STEM",ROSE_THORNS:"ROSE_THORNS",ROSE:"ROSE",SAND:"SAND",SNOW:"SNOW",STONE:"STONE",SUNFLOWER_CENTER:"SUNFLOWER_CENTER",SUNFLOWER_GROWING:"SUNFLOWER_GROWING",SUNFLOWER_LEAVES:"SUNFLOWER_LEAVES",SUNFLOWER_PETALS:"SUNFLOWER_PETALS",SUNFLOWER_STEM:"SUNFLOWER_STEM",SUNFLOWER:"SUNFLOWER",TREE_GROWING:"TREE_GROWING",TREE_LEAVES:"TREE_LEAVES",TREE_TRUNK:"TREE_TRUNK",TULIP_BULB:"TULIP_BULB",TULIP_GROWING:"TULIP_GROWING",TULIP_LEAVES:"TULIP_LEAVES",TULIP_PETALS:"TULIP_PETALS",TULIP_STEM:"TULIP_STEM",TULIP:"TULIP",WALNUT:"WALNUT",WATER:"WATER",WHEAT_GRAIN:"WHEAT_GRAIN",WHEAT_GROWING:"WHEAT_GROWING",WHEAT_STALK:"WHEAT_STALK",WHEAT:"WHEAT",WILLOW_BRANCHES:"WILLOW_BRANCHES",WILLOW_LEAVES:"WILLOW_LEAVES",WILLOW_TREE_GROWING:"WILLOW_TREE_GROWING",WILLOW_TREE:"WILLOW_TREE",WILLOW_TRUNK:"WILLOW_TRUNK",WOOD:"WOOD",XRAY:"XRAY"},J={[Z.AIR]:S({id:0}),[Z.AGAVE_BASE]:S({id:82,solid:!0}),[Z.AGAVE_FLOWER_STALK]:S({id:84}),[Z.AGAVE_FLOWER]:S({id:85}),[Z.AGAVE_GROWING]:S({id:81,solid:!0,crop:!0}),[Z.AGAVE_SPIKE]:S({id:83,solid:!0}),[Z.AGAVE]:S({id:80,solid:!0,crop:!0,growthTime:1920,drops:"AGAVE",isSeed:!0}),[Z.BAMBOO_GROWING]:S({id:43,solid:!0,crop:!0}),[Z.BAMBOO_JOINT]:S({id:53,solid:!0}),[Z.BAMBOO_LEAVES]:S({id:54}),[Z.BAMBOO_STALK]:S({id:52,solid:!0}),[Z.BAMBOO]:S({id:36,solid:!0,crop:!0,growthTime:180,drops:"BAMBOO",isSeed:!0}),[Z.BEDROCK]:S({id:19,solid:!0}),[Z.BERRY_BUSH_BERRIES]:S({id:51}),[Z.BERRY_BUSH_BRANCH]:S({id:49,solid:!0}),[Z.BERRY_BUSH_GROWING]:S({id:42,crop:!0}),[Z.BERRY_BUSH_LEAVES]:S({id:50,solid:!0}),[Z.BERRY_BUSH]:S({id:35,crop:!0,growthTime:360,drops:"BERRY_BUSH",isSeed:!0}),[Z.BIRCH_BARK]:S({id:117,solid:!0}),[Z.BIRCH_BRANCHES]:S({id:118,solid:!0}),[Z.BIRCH_CATKINS]:S({id:120}),[Z.BIRCH_GROWING]:S({id:115,solid:!0,crop:!0}),[Z.BIRCH_LEAVES]:S({id:119}),[Z.BIRCH_TRUNK]:S({id:116,solid:!0}),[Z.BIRCH]:S({id:114,solid:!0,crop:!0,growthTime:1260,drops:["BIRCH","WOOD"],isSeed:!0}),[Z.CACTUS_BODY]:S({id:30,solid:!0}),[Z.CACTUS_FLOWER]:S({id:31}),[Z.CACTUS_GROWING]:S({id:23,solid:!0,crop:!0}),[Z.CACTUS]:S({id:15,solid:!0,crop:!0,growthTime:2400,drops:"CACTUS",isSeed:!0}),[Z.CARROT_GROWING]:S({id:21,crop:!0}),[Z.CARROT_LEAVES]:S({id:26}),[Z.CARROT_ROOT]:S({id:27}),[Z.CARROT]:S({id:13,crop:!0,growthTime:240,drops:"CARROT",isSeed:!0}),[Z.CLAY]:S({id:6,solid:!0,farmable:!0,drops:"CLAY"}),[Z.CLOUD]:S({id:72,drops:"CLOUD",farmable:!0,solid:!0}),[Z.COAL]:S({id:7,solid:!0,drops:"COAL"}),[Z.CORN_EAR]:S({id:61}),[Z.CORN_GROWING]:S({id:45,crop:!0}),[Z.CORN_LEAVES]:S({id:60}),[Z.CORN_SILK]:S({id:62}),[Z.CORN_STALK]:S({id:59}),[Z.CORN]:S({id:38,crop:!0,growthTime:420,drops:"CORN",isSeed:!0}),[Z.DIRT]:S({id:2,solid:!0,farmable:!0,drops:"DIRT"}),[Z.FERN_FROND]:S({id:70}),[Z.FERN_GROWING]:S({id:48,crop:!0}),[Z.FERN_STEM]:S({id:69}),[Z.FERN]:S({id:41,crop:!0,growthTime:90,drops:"FERN",isSeed:!0}),[Z.FOG]:S({id:121}),[Z.GOLD]:S({id:9,solid:!0,drops:"GOLD"}),[Z.GRASS]:S({id:1,solid:!0,farmable:!0,drops:"GRASS"}),[Z.ICE]:S({id:17,solid:!0,drops:"ICE"}),[Z.IRON]:S({id:8,solid:!0,drops:"IRON"}),[Z.KELP_BLADE]:S({id:93}),[Z.KELP_BULB]:S({id:94}),[Z.KELP_GROWING]:S({id:92,crop:!0}),[Z.KELP]:S({id:91,crop:!0,growthTime:150,drops:"KELP",isSeed:!0}),[Z.LAVA]:S({id:18}),[Z.LAVENDER_BUSH]:S({id:89}),[Z.LAVENDER_FLOWERS]:S({id:90}),[Z.LAVENDER_GROWING]:S({id:87,crop:!0}),[Z.LAVENDER_STEM]:S({id:88}),[Z.LAVENDER]:S({id:86,crop:!0,growthTime:200,drops:"LAVENDER",isSeed:!0}),[Z.LOADING_PIXEL]:S({id:122}),[Z.LOTUS_BUD]:S({id:112}),[Z.LOTUS_FLOWER]:S({id:113}),[Z.LOTUS_GROWING]:S({id:109,crop:!0}),[Z.LOTUS_PAD]:S({id:110}),[Z.LOTUS_STEM]:S({id:111}),[Z.LOTUS]:S({id:108,crop:!0,growthTime:390,drops:"LOTUS",isSeed:!0}),[Z.MOSS]:S({id:32}),[Z.MUSHROOM_CAP]:S({id:29}),[Z.MUSHROOM_GROWING]:S({id:22,crop:!0}),[Z.MUSHROOM_STEM]:S({id:28}),[Z.MUSHROOM]:S({id:14,crop:!0,growthTime:120,drops:"MUSHROOM",isSeed:!0}),[Z.PINE_CONE]:S({id:65}),[Z.PINE_NEEDLES]:S({id:64,solid:!0}),[Z.PINE_TREE_GROWING]:S({id:46,solid:!0,crop:!0}),[Z.PINE_TREE]:S({id:39,solid:!0,crop:!0,growthTime:1440,drops:"PINE_TREE",isSeed:!0}),[Z.PINE_TRUNK]:S({id:63,solid:!0}),[Z.PLAYER_BODY]:S({id:124}),[Z.PLAYER_BORDER]:S({id:125}),[Z.PLAYER_EYES]:S({id:126}),[Z.PUMICE]:S({id:71,solid:!0,drops:"PUMICE"}),[Z.PUMPKIN_FRUIT]:S({id:106}),[Z.PUMPKIN_GROWING]:S({id:103,crop:!0}),[Z.PUMPKIN_LEAVES]:S({id:105}),[Z.PUMPKIN_STEM]:S({id:107}),[Z.PUMPKIN_VINE]:S({id:104}),[Z.PUMPKIN]:S({id:102,crop:!0,growthTime:660,drops:"PUMPKIN",isSeed:!0}),[Z.ROSE_BLOOM]:S({id:101}),[Z.ROSE_BUD]:S({id:100}),[Z.ROSE_GROWING]:S({id:96,crop:!0}),[Z.ROSE_LEAVES]:S({id:99}),[Z.ROSE_STEM]:S({id:97}),[Z.ROSE_THORNS]:S({id:98}),[Z.ROSE]:S({id:95,crop:!0,growthTime:540,drops:"ROSE",isSeed:!0}),[Z.SAND]:S({id:5,solid:!0,farmable:!0,drops:"SAND"}),[Z.SNOW]:S({id:16,solid:!0,farmable:!0,drops:"SNOW"}),[Z.STONE]:S({id:3,solid:!0,drops:"STONE"}),[Z.SUNFLOWER_CENTER]:S({id:57}),[Z.SUNFLOWER_GROWING]:S({id:44,crop:!0}),[Z.SUNFLOWER_LEAVES]:S({id:56}),[Z.SUNFLOWER_PETALS]:S({id:58}),[Z.SUNFLOWER_STEM]:S({id:55}),[Z.SUNFLOWER]:S({id:37,crop:!0,growthTime:600,drops:"SUNFLOWER",isSeed:!0}),[Z.TREE_GROWING]:S({id:34,crop:!0}),[Z.TREE_LEAVES]:S({id:11,solid:!0,crop:!0,drops:"WOOD"}),[Z.TREE_TRUNK]:S({id:10,solid:!0,crop:!0,drops:"WOOD"}),[Z.TULIP_BULB]:S({id:79}),[Z.TULIP_GROWING]:S({id:75,crop:!0}),[Z.TULIP_LEAVES]:S({id:77}),[Z.TULIP_PETALS]:S({id:78}),[Z.TULIP_STEM]:S({id:76}),[Z.TULIP]:S({id:74,crop:!0,growthTime:300,drops:"TULIP",isSeed:!0}),[Z.WALNUT]:S({id:33,crop:!0,growthTime:960,drops:["WALNUT","WOOD"],isSeed:!0}),[Z.WATER]:S({id:4}),[Z.WHEAT_GRAIN]:S({id:25}),[Z.WHEAT_GROWING]:S({id:20,crop:!0}),[Z.WHEAT_STALK]:S({id:24}),[Z.WHEAT]:S({id:12,crop:!0,growthTime:480,drops:"WHEAT",isSeed:!0}),[Z.WILLOW_BRANCHES]:S({id:67,solid:!0}),[Z.WILLOW_LEAVES]:S({id:68}),[Z.WILLOW_TREE_GROWING]:S({id:47,solid:!0,crop:!0}),[Z.WILLOW_TREE]:S({id:40,solid:!0,crop:!0,growthTime:1800,drops:["WILLOW_TREE","WOOD"],isSeed:!0}),[Z.WILLOW_TRUNK]:S({id:66,solid:!0}),[Z.WOOD]:S({id:73,solid:!1,crop:!0,drops:"WOOD"}),[Z.XRAY]:S({id:123})},rn={[Z.AGAVE]:J.AGAVE_GROWING,[Z.BAMBOO]:J.BAMBOO_GROWING,[Z.BERRY_BUSH]:J.BERRY_BUSH_GROWING,[Z.BIRCH]:J.BIRCH_GROWING,[Z.CACTUS]:J.CACTUS_GROWING,[Z.CARROT]:J.CARROT_GROWING,[Z.CORN]:J.CORN_GROWING,[Z.FERN]:J.FERN_GROWING,[Z.KELP]:J.KELP_GROWING,[Z.LAVENDER]:J.LAVENDER_GROWING,[Z.LOTUS]:J.LOTUS_GROWING,[Z.MUSHROOM]:J.MUSHROOM_GROWING,[Z.PINE_TREE]:J.PINE_TREE_GROWING,[Z.PUMPKIN]:J.PUMPKIN_GROWING,[Z.ROSE]:J.ROSE_GROWING,[Z.SUNFLOWER]:J.SUNFLOWER_GROWING,[Z.TULIP]:J.TULIP_GROWING,[Z.WALNUT]:J.TREE_GROWING,[Z.WHEAT]:J.WHEAT_GROWING,[Z.WILLOW_TREE]:J.WILLOW_TREE_GROWING};function ro(a){return Object.fromEntries(Object.entries(a).map(([e,o])=>{return[o.id,(t=e,t.toLowerCase().replace(/_/g,"-"))];var t}))}var mt={crops:[],surfaceTile:null,subTile:null},Ae={FOREST:j({trees:!0,name:"Forest"},mt),DESERT:j({trees:!1,name:"Desert"},mt),TUNDRA:j({trees:!1,name:"Tundra"},mt),SWAMP:j({trees:!0,name:"Swamp"},mt)},ko;Ae.FOREST.surfaceTile=J.GRASS,Ae.FOREST.subTile=J.DIRT,Ae.FOREST.crops=[J.BERRY_BUSH,J.BIRCH,J.CARROT,J.FERN,J.LAVENDER,J.PINE_TREE,J.PUMPKIN,J.ROSE,J.TULIP,J.WHEAT],Ae.DESERT.surfaceTile=J.SAND,Ae.DESERT.subTile=J.SAND,Ae.DESERT.crops=[J.AGAVE,J.CACTUS,J.SUNFLOWER],Ae.TUNDRA.surfaceTile=J.SNOW,Ae.TUNDRA.subTile=J.ICE,Ae.TUNDRA.crops=[J.BIRCH,J.FERN,J.PINE_TREE],Ae.SWAMP.surfaceTile=J.CLAY,Ae.SWAMP.subTile=J.CLAY,Ae.SWAMP.crops=[J.BAMBOO,J.CORN,J.KELP,J.LOTUS,J.MUSHROOM,J.WILLOW_TREE];var io=new URLSearchParams(globalThis.location?.search);ko=io.has("seed")?Number(io.get("seed")):Ve();var k={fogMode:new O.State("fog"),fogScale:new O.State(8),isFogScaled:new O.State(!0),breakMode:new O.State("regular"),canvasScale:new O.State(1),currentResolution:new O.State("400"),version:new O.State("1"),worldSeed:new O.State(ko),waterPhysics:{updateInterval:10,frameCounter:0,maxIterationsPerUpdate:5,checkRadius:15,dirtyRegions:new Set},TILE_SIZE:new O.State(8),WORLD_WIDTH:new O.State(500),WORLD_HEIGHT:new O.State(300),SURFACE_LEVEL:new O.State(90),GRAVITY:new O.State(.7),FRICTION:new O.State(.8),MAX_FALL_SPEED:new O.State(15),BIOMES:Ae,TILES:J,TileNames:Z},{TileNames:P}=k,V={world:new O.State(null),exploredMap:new O.State(new $e(500,300)),plantStructures:new O.State({}),gameTime:new O.State(0),growthTimers:new O.State({}),seeds:new O.State(0),selectedMaterialType:new O.State(null),selectedSeedType:new O.State(null),shouldReset:new O.State(!1),viewMode:new O.State("normal"),waterPhysicsQueue:new O.State(new Set),seedInventory:new O.State({[P.AGAVE]:0,[P.BAMBOO]:0,[P.BERRY_BUSH]:0,[P.BIRCH]:0,[P.CACTUS]:0,[P.CARROT]:0,[P.CORN]:0,[P.FERN]:0,[P.KELP]:0,[P.LAVENDER]:0,[P.LOTUS]:0,[P.MUSHROOM]:0,[P.PINE_TREE]:0,[P.PUMPKIN]:0,[P.ROSE]:0,[P.SUNFLOWER]:0,[P.TULIP]:0,[P.WALNUT]:0,[P.WHEAT]:0,[P.WILLOW_TREE]:0}),materialsInventory:new O.State({[P.CLAY]:0,[P.CLOUD]:0,[P.COAL]:0,[P.DIRT]:0,[P.GOLD]:0,[P.GRASS]:0,[P.ICE]:0,[P.IRON]:0,[P.PUMICE]:0,[P.SAND]:0,[P.SNOW]:0,[P.STONE]:0,[P.WOOD]:0}),player:new O.State({x:200,y:50,width:6,height:8,velocityX:0,velocityY:0,speed:2.75,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0}),camera:new O.State({x:0,y:0,speed:5})},Bo={totalSeeds:new O.Computed(()=>{let a=V.seedInventory.get();return Object.values(a).reduce((e,o)=>e+o,0)})};function Re(a,e){let o=V[a]?.get();o!==void 0&&V[a].set(e(o))}function Ur(a,e){let o=k[a]?.get();o!==void 0&&k[a].set(e(o))}function Hr(a,e){return k[a]?.set(e)}function Or(a){return k[a]?.get()}function Dr(a,e){return V[a]?.set(e)}function jr(a){return V[a]?.get()}async function Fr(a,e){k.version.set(e);let{WorldMap:o}=await Promise.resolve().then(function(){return Pr});return V.world.set(new o(500,300)),a.spriteGarden=re(j({},a?.spriteGarden),{config:k,state:V,computed:Bo,setConfig:Hr,getConfig:Or,updateConfig:Ur,setState:Dr,getState:jr,updateState:Re}),{gameConfig:k,gameState:V}}var He=class a{constructor(e,o){this.width=e,this.height=o,this.data=new Uint8Array(e*o),this.initializeTileMapping()}initializeTileMapping(){let e=k.TILES;this.tileIdMap=new Map,this.reverseTileMap=new Map;let o=0;for(let[t,c]of Object.entries(e))this.tileIdMap.set(c,o),this.reverseTileMap.set(o,c),o++}getTile(e,o){if(e<0||e>=this.width||o<0||o>=this.height)return k.TILES.AIR;let t=this.data[o*this.width+e];return this.reverseTileMap.get(t)||k.TILES.AIR}setTile(e,o,t){if(e<0||e>=this.width||o<0||o>=this.height)return;let c=this.tileIdMap.get(t);c!==void 0&&(this.data[o*this.width+e]=c)}static fromArray(e,o,t){let c=new a(o,t),n=k.TILES,l=new Map;for(let[g,d]of Object.entries(n))d&&typeof d.id=="number"&&l.set(d.id,d);for(let g=0;g<o;g++)if(e[g])for(let d=0;d<t;d++){let i=e[g][d];if(!i||i.id===void 0||i.id===null){c.setTile(g,d,n.AIR);continue}let I=l.get(i.id);I?c.setTile(g,d,I):(console.warn(`Unknown tile ID ${i.id} at (${g}, ${d}), defaulting to AIR`),c.setTile(g,d,n.AIR))}return c}toArray(){let e=[];for(let o=0;o<this.width;o++){e[o]=[];for(let t=0;t<this.height;t++)e[o][t]=this.getTile(o,t)}return e}},Pr=Object.freeze({__proto__:null,WorldMap:He});function Nn(a,e,o){let t=a.spriteGarden.config,c=a.spriteGarden.state;for(let g in o.config)g!=="currentResolution"&&g!=="isFogScaled"&&t[g]?.set&&a.spriteGarden.setConfig(g,o.config[g]);let n=o.config.WORLD_HEIGHT,l=o.config.WORLD_WIDTH;for(let g in o.state){if(g==="seedInventory"){let d=o.state[g];for(let i in c.seedInventory.get())d[i]===void 0&&(d[i]=0);continue}if(g==="exploredMap"){let d={},i=o.state.exploredMap;if(i&&Object.keys(i).length>0){let I=xe(a,e);d=$e.fromObject(i,l,n,I)}c.exploredMap.set(d);continue}if(g==="world"){let d=o.state[g];if(d&&Array.isArray(d)&&d.length>0){console.log(`Converting world: ${l}x${n}`);let i=He.fromArray(d,l,n),I=t.TILES,r=0;for(let s=0;s<l;s++)for(let u=0;u<n;u++){let m=i.getTile(s,u);m&&m!==I.AIR&&r++}console.log(`Converted world contains ${r} non-air tiles`),c.world.set(i),console.log("World converted successfully")}else console.error("Invalid world data in save state:",d);continue}c[g]?.set&&a.spriteGarden.setState(g,o.state[g])}console.log("Save state loaded successfully"),e.dispatchEvent(new CustomEvent("sprite-garden-reset"))}var Rt="sprite-garden-autosave",kn="sprite-garden-autosave-mode",ao="sprite-garden-save-";async function St(){try{return await Q.getItem(kn)}catch(a){return console.info("Failed to get save mode:",a),"manual"}}async function lo(a){try{await Q.setItem(kn,a),console.info("Save mode set to:",a)}catch(e){console.info("Failed to set save mode:",e)}}var go=0;async function Bn(a){try{if(await St()!=="auto")return;let e=Date.now();if(e-go<3e4)return void console.info("Auto-save skipped (too soon since last save)");let o=Et(a),t=JSON.stringify(o),c=await Wt(t),n=Ro(a,await c.arrayBuffer()),l={name:"[Auto Save]",timestamp:Date.now(),data:n,isAutoSave:!0};await Q.setItem(Rt,l),go=e,console.info("Game auto-saved successfully")}catch(e){console.error("Failed to auto-save game:",e)}}var un=class{constructor(e,o,t){this.gThis=e,this.doc=o,this.shadow=t,this.dialog=null,this.savedGames=[],this.close=this.close.bind(this),this.deleteSelectedGame=this.deleteSelectedGame.bind(this),this.loadSelectedGame=this.loadSelectedGame.bind(this),this.saveCurrentGame=this.saveCurrentGame.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this),this.handleWorldNameInput=this.handleWorldNameInput.bind(this)}async createDialog(){this.dialog&&this.dialog.remove();let e=this.doc.createElement("dialog");return e.setAttribute("id","storageDialog"),e.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      max-height: 80vh;
      max-width: 31.25rem;
      overflow-y: auto;
      padding: 1.25rem;
      width: 90%;
    `,e.innerHTML=`
      <div
        style="
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.9375rem;
        "
      >
        <h3 style="margin: 0">Game Storage</h3>
        <button
          id="closeStorageDialog"
          style="
            background: var(--sg-color-red-500);
            border-radius: 0.25rem;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.3125rem 0.625rem;
          "
        >
          &times;
        </button>
      </div>

      <div style="margin-bottom: 1.25rem">
        <h4 style="margin: 0.625rem 0">Save Current Game</h4>
        <div
          style="
            align-items: center;
            display: flex;
            gap: 0.625rem;
            margin-bottom: 0.625rem;
          "
        >
          <input
            type="text"
            id="worldNameInput"
            placeholder="Enter world name..."
            style="
              border-radius: 0.25rem;
              border: 0.0625rem solid var(--sg-color-gray-500);
              flex: 1;
              padding: 0.3125rem;
            "
          />
          <button
            id="saveToStorageBtn"
            style="
              background: var(--sg-color-green-500);
              border-radius: 0.25rem;
              border: none;
              color: white;
              cursor: pointer;
              padding: 0.5rem 0.9375rem;
            "
          >
            Save
          </button>
        </div>
      </div>

      <div>
        <h4 style="margin: 0.625rem 0">Load Saved Game</h4>
        <div
          id="savedGamesList"
          style="
            border: 0.0625rem solid var(--sg-color-gray-400);
            border-radius: 0.25rem;
            max-height: 18.75rem;
            overflow-y: auto;
          "
        >
          <!-- Saved games will be populated here -->
        </div>
        <div style="margin-top: 0.625rem; display: flex; gap: 0.625rem">
          <button
            id="loadSelectedBtn"
            disabled
            style="
              background: var(--sg-color-blue-500);
              border-radius: 0.25rem;
              border: none;
              color: white;
              cursor: pointer;
              padding: 0.5rem 0.9375rem;
            "
          >
            Load Selected
          </button>
          <button
            id="deleteSelectedBtn"
            disabled
            style="
              background: var(--sg-color-red-500);
              border-radius: 0.25rem;
              border: none;
              color: white;
              cursor: pointer;
              padding: 0.5rem 0.9375rem;
            "
          >
            Delete Selected
          </button>
        </div>
      </div>
    `,this.shadow.append(e),this.dialog=e,await this.loadSavedGamesList(),this.initEventListeners(),e}async loadSavedGamesList(){this.savedGames=[];let e=await Q.keys(),o=await Q.getItem(Rt);o&&this.savedGames.push({key:Rt,name:o.name,timestamp:o.timestamp,data:o.data,isAutoSave:!0});for(let t of e)if(t.startsWith(ao)){let c=await Q.getItem(t);c&&this.savedGames.push({key:t,name:c.name,timestamp:c.timestamp,data:c.data,isAutoSave:c.isAutoSave||!1})}this.savedGames.sort((t,c)=>c.timestamp-t.timestamp),this.renderSavedGamesList()}renderSavedGamesList(){let e=this.dialog.querySelector("#savedGamesList");this.savedGames.length!==0?(e.innerHTML=this.savedGames.map((o,t)=>`
        <div
          class="saved-game-item"
          data-index="${t}"
          style="
            padding: 0.625rem;
            border-bottom: 0.0625rem solid var(--sg-color-gray-100);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${o.isAutoSave?"background: var(--sg-color-blue-50);":""}
          "
        >
          <div>
            <div style="font-weight: bold; ${o.isAutoSave?"color: var(--sg-color-blue-700);":""}">${o.name}</div>
            <div style="font-size: 0.75rem; color: var(--sg-color-neutral-950);">
              ${new Date(o.timestamp).toLocaleString()}
            </div>
          </div>
          <input
            name="selectedGame"
            style="margin-left: 0.625rem"
            type="radio"
            value="${t}"
          />
        </div>
    `).join(""),e.querySelectorAll(".saved-game-item").forEach(o=>{o.addEventListener("click",t=>{if(t.target instanceof HTMLElement&&t.target.getAttribute("type")!=="radio"){let c=o.querySelector('input[type="radio"]');c instanceof HTMLInputElement&&(c.checked=!0),this.updateButtonStates()}})}),e.querySelectorAll('input[type="radio"]').forEach(o=>{o.addEventListener("change",()=>this.updateButtonStates())})):e.innerHTML=`
      <div style="padding: 1.25rem; text-align: center; color: var(--sg-color-neutral-950);">
        No saved games found
      </div>
    `}updateButtonStates(){let e=!!this.dialog.querySelector('input[name="selectedGame"]:checked'),o=this.dialog.querySelector("#loadSelectedBtn");o instanceof HTMLButtonElement&&(o.disabled=!e,o.style.opacity=e?"1":"0.5",o.style.cursor=e?"pointer":"not-allowed");let t=this.dialog.querySelector("#deleteSelectedBtn");t instanceof HTMLButtonElement&&(t.disabled=!e,t.style.opacity=e?"1":"0.5",t.style.cursor=e?"pointer":"not-allowed")}handleWorldNameInput(e){/^[\p{L}\p{N}\p{P}\s]+$/u.test(e.key)&&e.stopPropagation(),e.key==="Enter"&&this.saveCurrentGame()}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),o=this.dialog.querySelector("#saveToStorageBtn"),t=this.dialog.querySelector("#loadSelectedBtn"),c=this.dialog.querySelector("#deleteSelectedBtn"),n=this.dialog.querySelector("#worldNameInput");e.addEventListener("click",this.close),o.addEventListener("click",this.saveCurrentGame),t.addEventListener("click",this.loadSelectedGame),c.addEventListener("click",this.deleteSelectedGame),n.addEventListener("keydown",this.handleWorldNameInput),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),o=this.dialog.querySelector("#saveToStorageBtn"),t=this.dialog.querySelector("#loadSelectedBtn"),c=this.dialog.querySelector("#deleteSelectedBtn"),n=this.dialog.querySelector("#worldNameInput");e.removeEventListener("click",this.close),o.removeEventListener("click",this.saveCurrentGame),t.removeEventListener("click",this.loadSelectedGame),c.removeEventListener("click",this.deleteSelectedGame),n.removeEventListener("keydown",this.handleWorldNameInput),this.dialog.removeEventListener("click",this.handleDialogClick)}async saveCurrentGame(){let e=this.dialog.querySelector("#worldNameInput"),o;if(e instanceof HTMLInputElement&&(o=e.value.trim()),o)try{let t=Et(this.gThis),c=JSON.stringify(t),n=await Wt(c),l=await n.arrayBuffer(),g=Ro(this.gThis,l),d={name:o,timestamp:Date.now(),data:g},i=`${ao}${Date.now()}-${o.replace(/[^a-zA-Z0-9]/g,"_")}`;await Q.setItem(i,d),console.log("Game saved to storage:",o),e instanceof HTMLInputElement&&(e.value=""),await this.loadSavedGamesList()}catch(t){console.error("Failed to save game to storage:",t),alert("Failed to save game. Check console for details.")}else alert("Please enter a world name")}async loadSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let o;if(e instanceof HTMLInputElement){let t=parseInt(e.value);o=this.savedGames[t]}try{let t=So(this.gThis,o.data,"application/gzip"),c;if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let i=t.stream().pipeThrough(new this.gThis.DecompressionStream("gzip"));c=await(await new this.gThis.Response(i).blob()).text()}let n=JSON.parse(c);Nn(this.gThis,this.shadow,n);let{worldSeed:l}=n.config,g=this.doc.getElementById("worldSeedInput"),d=this.doc.getElementById("currentSeed");g instanceof HTMLInputElement&&(g.value=l),d&&(d.textContent=l),console.log("Game loaded from storage:",o.name),this.close()}catch(t){console.error("Failed to load game from storage:",t),alert("Failed to load game. Check console for details.")}}async deleteSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let o;if(e instanceof HTMLInputElement){let t=parseInt(e.value);o=this.savedGames[t]}if(confirm(`Are you sure you want to delete "${o.name}"?`))try{await Q.removeItem(o.key),console.log("Game deleted from storage:",o.name),await this.loadSavedGamesList()}catch(t){console.error("Failed to delete game from storage:",t),alert("Failed to delete game. Check console for details.")}}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function an(a,e){return Object.entries(e).map(([o,t])=>`${a}${o}${a==="--sg-color-"?"":"-color"}: ${t};`).join(`
`)}var An=!0,Lt=new O.subtle.Watcher(()=>{An&&(An=!1,globalThis.queueMicrotask(_r))});function _r(){An=!0;for(let a of Lt.getPending())a.get();Lt.watch()}function Ze(a){let e,o=new O.Computed(()=>{typeof e=="function"&&e(),e=a()});return Lt.watch(o),o.get(),()=>{Lt.unwatch(o),typeof e=="function"&&e(),e=void 0}}function Kr(a,e,o,t,c,n,l,g,d,i,I){Ze(()=>{(function(r,s,u){Object.keys(u).forEach(m=>{let p=m.toLowerCase(),h=r?.getElementById(`${p}Count`);try{h.textContent=u[p.toUpperCase()]}catch{}}),Object.keys(s).forEach(m=>{let p=m.toLowerCase(),h=r?.getElementById(`${p}Count`);try{h.textContent=s[p.toUpperCase()]}catch{}})})(a,l.get(),g.get())}),Ze(()=>{let r=a.getElementById("worldSeedInput");if(r instanceof HTMLInputElement&&!r.value){let s=a.getElementById("currentSeed"),u=c.get();if(s&&u)return r.value=u,void(s.textContent=u);let m=String(Ve());r.value=m,s.textContent=m}}),Ze(()=>{let r=n.get(),s=a.getElementById("gameTime");s&&(s.textContent=String(Math.floor(r)))}),Ze(()=>{let r=I.get(),s=a.getElementById("viewModeText");s&&(s.textContent=r==="normal"?"View Normal":"View X-Ray")}),Ze(()=>{let r=t.get(),s=a.getElementById("fogModeText");s&&(s.textContent=r==="fog"?"Fog":"Clear")}),Ze(()=>{let r=o.get(),s=a.getElementById("breakModeText");s&&(s.textContent=r==="regular"?"Dig Regular":"Dig Extra")}),Ze(()=>{let r=e.get(),s=a.getElementById("seedCount");s&&(s.textContent=r)}),Ze(()=>{let r=i.get(),s=a.getElementById("selectedSeed");s&&(s.textContent=r||"None")}),Ze(()=>{let r=d.get(),s=a.getElementById("selectedMaterial");s&&(s.textContent=r||"None")})}function wt(a,e,o,t){return a.set(!1),new $e(o,e,t)}function Vo(a){return Object.fromEntries(Object.entries(a).filter(([e,o])=>o.isSeed).map(([e,o])=>[o.id,e]))}function bn(a,e,o,t,c,n,l){for(let g=a-o;g<=a+o;g++)for(let d=e-o;d<=e+o;d++)g>=0&&g<l&&d>=0&&d<n&&Math.sqrt((g-a)**2+(d-e)**2)<=o&&c.getTile(g,d)!==t.BEDROCK&&c.setTile(g,d,t.AIR)}function zr(a,e,o,t,c,n,l,g,d){let i=o,I=t;for(let r=0;r<e;r++){a+=.3*(Math.random()-.5),i+=Math.cos(a),I+=Math.sin(a);for(let s=-n;s<=n;s++)for(let u=-n;u<=n;u++){let m=Math.floor(i+s),p=Math.floor(I+u);m>=0&&m<d&&p>=0&&p<g&&Math.sqrt(s*s+u*u)<=n&&l.getTile(m,p)!==c.BEDROCK&&l.setTile(m,p,c.AIR)}Math.random()<.1&&bn(Math.floor(i),Math.floor(I),2+Math.floor(2*Math.random()),c,l,g,d)}}var xo=Math.sqrt(3),Qr=.5*(xo-1),Ke=(3-xo)/6,so=a=>0|Math.floor(a),co=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function qr(a=Math.random){let e=(function(c){let l=new Uint8Array(512);for(let g=0;g<256;g++)l[g]=g;for(let g=0;g<255;g++){let d=g+~~(c()*(256-g)),i=l[g];l[g]=l[d],l[d]=i}for(let g=256;g<512;g++)l[g]=l[g-256];return l})(a),o=new Float64Array(e).map(c=>co[c%12*2]),t=new Float64Array(e).map(c=>co[c%12*2+1]);return function(c,n){let l=0,g=0,d=0,i=(c+n)*Qr,I=so(c+i),r=so(n+i),s=(I+r)*Ke,u=c-(I-s),m=n-(r-s),p,h;u>m?(p=1,h=0):(p=0,h=1);let y=u-p+Ke,R=m-h+Ke,W=u-1+2*Ke,E=m-1+2*Ke,w=255&I,M=255&r,x=.5-u*u-m*m;if(x>=0){let F=w+e[M];x*=x,l=x*x*(o[F]*u+t[F]*m)}let U=.5-y*y-R*R;if(U>=0){let F=w+p+e[M+h];U*=U,g=U*U*(o[F]*y+t[F]*R)}let D=.5-W*W-E*E;if(D>=0){let F=w+1+e[M+1];D*=D,d=D*D*(o[F]*W+t[F]*E)}return 70*(l+g+d)}}var Io,Co={exports:{}},$r=wn((Io||(Io=1,Co.exports=(function(){return a.importState=function(o){var t=new a;return t.importState(o),t},a;function a(){return(function(o){var t=0,c=0,n=0,l=1;o.length==0&&(o=[+new Date]);var g=e();t=g(" "),c=g(" "),n=g(" ");for(var d=0;d<o.length;d++)(t-=g(o[d]))<0&&(t+=1),(c-=g(o[d]))<0&&(c+=1),(n-=g(o[d]))<0&&(n+=1);g=null;var i=function(){var I=2091639*t+23283064365386963e-26*l;return t=c,c=n,n=I-(l=0|I)};return i.next=i,i.uint32=function(){return 4294967296*i()},i.fract53=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.version="Alea 0.9",i.args=o,i.exportState=function(){return[t,c,n,l]},i.importState=function(I){t=+I[0]||0,c=+I[1]||0,n=+I[2]||0,l=+I[3]||0},i})(Array.prototype.slice.call(arguments))}function e(){var o=4022871197,t=function(c){c=c.toString();for(var n=0;n<c.length;n++){var l=.02519603282416938*(o+=c.charCodeAt(n));l-=o=l>>>0,o=(l*=o)>>>0,o+=4294967296*(l-=o)}return 23283064365386963e-26*(o>>>0)};return t.version="Mash 0.9",t}})()),Co.exports)),mn=null,hn=null;function et(a){a!==hn&&(hn=a,mn=qr($r(a)))}function Tt(a,e,o=0,t=3,c=.5,n=.02){mn&&hn===o||et(o);let l=0,g=1,d=n,i=0;for(let I=0;I<t;I++)l+=mn(a*d,e*d)*g,i+=g,g*=c,d*=2;return l/i}function ht(a,e=0){return Tt(a,0,e,4,.6,.015)}function uo(a,e=500){return Tt(a,0,e,2,.8,.008)}function Ao(a,e=2e3){return Tt(a,0,e,2,.5,.012)}function ei(a,e=0,o=2e3,t=2,c=.5,n=.01){return Tt(a,e,o,t,c,n)}function ti(a,e,o){et(o);let t=[];for(let c=0;c<a;c++){let n=e;n+=15*ht(c,o),n+=8*ht(c,o+100),n+=4*ht(c,o+200);let l=ht(c,o+300);l>.6&&(n+=20*(l-.6)),n=Math.max(10,Math.min(1.5*e,n)),t[c]=Math.floor(n)}return(function(c,n=1){let l=[...c];for(let g=0;g<n;g++){for(let d=1;d<c.length-1;d++)l[d]=Math.floor((c[d-1]+2*c[d]+c[d+1])/4);c.splice(0,c.length,...l)}return c})(t,2)}function ni(a,e,o,t,c,n,l){let g=Math.floor(t/2);for(let d=-g;d<=g;d++)for(let i=0;i<=Math.floor(.3*t);i++){let I=e+d,r=o+i+1;I>=0&&I<c&&r>=0&&r<n&&Math.sqrt(d*d+i*i*2)<=g&&a.getTile(I,r).id!==l.SAND.id&&a.setTile(I,r,l.WATER)}}function oi(a,e,o,t,c,n){let l=o+1;if(e>=0&&e<t&&l>=0&&l<c){a.getTile(e,l).id!==n.SAND.id&&a.setTile(e,l,n.WATER);let g=o+2;g<c&&Math.random()<.7&&a.getTile(e,g).id!==n.SAND.id&&a.setTile(e,g,n.WATER)}}function ri(a,e,o,t,c,n){let l=o;if(e>=0&&e<t&&l>=0&&l<c){let g=a.getTile(e,l);g===n.AIR&&g.id!==n.SAND.id&&a.setTile(e,l,n.WATER)}}function Yo(a,e,o){et(o);let t=uo(a,o+600),c=uo(a,o+700);return t<-.4?e.TUNDRA:t>.4&&c<-.2?e.DESERT:c>.3?e.SWAMP:e.FOREST}var Vn=a=>Vo(a);function Xo(a,e,o,t,c,n){let l=o.get();if(l.size===0||(e.frameCounter++,e.frameCounter<e.updateInterval))return;e.frameCounter=0;let g=new Set,d=!1,i=t.get();for(let I of l){let[r,s]=I.split(",").map(Number),u=i.getTile(r,s);if(u===a.WATER){let m=[{x:r-1,y:s},{x:r+1,y:s},{x:r,y:s-1},{x:r,y:s+1}],p=!1;for(let h of m)if(h.x>=0&&h.x<n&&h.y>=0&&h.y<c&&i.getTile(h.x,h.y)===a.LAVA){p=!0;break}if(p){i.setTile(r,s,a.PUMICE);for(let h of m)h.x>=0&&h.x<n&&h.y>=0&&h.y<c&&g.add(`${h.x},${h.y}`);d=!0;continue}if(s+1<c){let h=i.getTile(r,s+1);if(h===a.AIR){i.setTile(r,s,a.AIR),i.setTile(r,s+1,a.WATER),g.add(`${r},${s+1}`),r>0&&g.add(`${r-1},${s+1}`),r<n-1&&g.add(`${r+1},${s+1}`),s+2<c&&g.add(`${r},${s+2}`),d=!0;continue}if(h===a.LAVA){i.setTile(r,s,a.AIR),i.setTile(r,s+1,a.PUMICE),d=!0;continue}if(h&&h.solid){let y=r>0&&i.getTile(r-1,s)===a.AIR,R=r<n-1&&i.getTile(r+1,s)===a.AIR,W=y&&s+1<c&&i.getTile(r-1,s+1)===a.AIR,E=R&&s+1<c&&i.getTile(r+1,s+1)===a.AIR;if(W||E){let w=0;w=W&&E?Math.random()<.5?-1:1:W?-1:1;let M=r+w;i.setTile(r,s,a.AIR),i.setTile(M,s,a.WATER),g.add(`${M},${s}`),g.add(`${M},${s+1}`),d=!0}else if(y||R){let w=0;w=y&&R?Math.random()<.5?-1:1:y?-1:1;let M=r+w;if(s+1<c){let x=i.getTile(M,s+1);x&&x.solid&&(i.setTile(r,s,a.AIR),i.setTile(M,s,a.WATER),g.add(`${M},${s}`),d=!0)}}}}}else u!==a.WATER&&s>0&&i.getTile(r,s-1)===a.WATER&&g.add(`${r},${s-1}`)}if(d)for(let I of g){let[r,s]=I.split(",").map(Number);for(let u=-2;u<=2;u++)for(let m=-2;m<=2;m++){let p=r+u,h=s+m;p>=0&&p<n&&h>=0&&h<c&&i.getTile(p,h)===a.WATER&&h+1<c&&i.getTile(p,h+1)===a.AIR&&g.add(`${p},${h}`)}}d&&g.size>0?o.set(g):o.set(new Set)}function ii(a,e,o,t,c,n){console.log(`Generating world with seed: ${t}`);let l=new He(n,c),g=ti(n,e,t);for(let r=0;r<n;r++){let s=Yo(r,a,t)||a.FOREST,u=g[r];for(let m=0;m<c;m++)if(m>u){let p=m-u;p<2?s.surfaceTile===o.GRASS||s.surfaceTile===o.SNOW?l.setTile(r,m,s.surfaceTile):l.setTile(r,m,s.subTile):p<Ve(20,50)?Math.random()<.1?l.setTile(r,m,o.COAL):Math.random()<.95?l.setTile(r,m,s.subTile):l.setTile(r,m,o.STONE):p<Ve(50,90)?Math.random()<.05?l.setTile(r,m,o.IRON):Math.random()<.02?l.setTile(r,m,o.GOLD):l.setTile(r,m,o.STONE):m>c-2?l.setTile(r,m,o.BEDROCK):m>c-4||Math.random()<.01?l.setTile(r,m,o.LAVA):l.setTile(r,m,o.STONE)}else m===u&&l.setTile(r,m,s.surfaceTile);if(s.trees&&Math.random()<.025){let m=Ve(3,5),p=u,h=[];for(let W=0;W<m;W++){let E=p-W-1;E>=0&&(l.setTile(r,E,o.TREE_TRUNK),h.push({x:r,y:E,tile:o.TREE_TRUNK}))}let y=p-m,R=3;for(let W=-R;W<=R;W++)for(let E=-R;E<=1;E++){let w=r+W,M=y+E;Math.sqrt(W*W+E*E)<=R&&E<=0&&w>=0&&w<n&&M>=0&&M<c&&(w===r&&M>=y&&M<p||l.getTile(w,M)!==o.AIR||(l.setTile(w,M,o.TREE_LEAVES),h.push({x:w,y:M,tile:o.TREE_LEAVES})))}}if(s.crops.length>0&&Math.random()<.05){let m=s.crops[Math.floor(Math.random()*s.crops.length)],p=u-1;if(p>=0&&l.getTile(r,p)===o.AIR){l.setTile(r,p,m);let h=Vn(o)[m.id];h&&Re("seedInventory",y=>re(j({},y),{[h]:(y&&y[h]?y[h]:0)+2}))}}}(function(r,s,u,m,p){let h=[];for(let y=0;y<25;y++)h.push({x:Math.floor(Math.random()*p),y:r+5+Math.floor(Math.random()*(m-r-15)),size:3+Math.floor(8*Math.random()),branches:1+Math.floor(3*Math.random())});h.forEach(y=>{bn(y.x,y.y,y.size,s,u,m,p);for(let R=0;R<y.branches;R++)zr(2*Math.PI*R/y.branches+.5*(Math.random()-.5),10+Math.floor(20*Math.random()),y.x,y.y,s,1+Math.floor(2*Math.random()),u,m,p)});for(let y=0;y<50;y++){let R=Math.floor(Math.random()*p),W=r+3+Math.floor(Math.random()*(m-r-10)),E=1+Math.floor(3*Math.random());Math.random()<.3&&bn(R,W,E,s,u,m,p)}})(e,o,l,c,n),(function(r,s,u,m){for(let p=1;p<s-1;p++)for(let h=1;h<u-1;h++)r.getTile(p,h)===m.AIR&&[r.getTile(p-1,h),r.getTile(p+1,h),r.getTile(p,h-1),r.getTile(p,h+1)].some(y=>y&&y.solid)&&h>k.SURFACE_LEVEL.get()+5&&Math.random()<.5&&r.setTile(p,h,m.MOSS)})(l,n,c,o),(function(r,s,u,m,p){et(p);let h=Math.max(u-30,60);for(let y=0;y<s;y++)if(ei(p)>.2){let R=Math.floor(6+10*Math.random()),W=Math.floor(4+6*Math.random()),E=5+Math.floor(Math.random()*(h-5));for(let w=0;w<R;w++)for(let M=0;M<W;M++){let x=y+w;x>=s||E+M>=u||(w!==0&&w!==R-1&&M!==0&&M!==W-1||Math.random()>.3)&&r.getTile(x,E+M)===m.AIR&&r.setTile(x,E+M,m.CLOUD)}y+=R+Math.floor(10*Math.random())}})(l,n,e,o,t),(function(r,s,u,m,p,h,y){if(r&&typeof r.getTile=="function"){et(y);for(let R=0;R<u;R++){let W=s[R],E=Ao(R,parseInt(String(y))+2e3);W>p&&ri(r,R,W,u,m,h),E>.5&&W<p+5&&ni(r,R,W,Math.floor(15*(E-.4))+5,u,m,h),Ao(R,parseInt(String(y))+2500)>.5&&oi(r,R,W,u,m,h)}}else console.error("generateWaterSources: Invalid world object at entry",{hasWorld:!!r,worldType:typeof r,worldWidth:u,worldHeight:m})})(l,g,n,c,e,o,t);let d=new Set;for(let r=0;r<n;r++)for(let s=0;s<c;s++)l.getTile(r,s)===o.WATER&&d.add(`${r},${s}`);let i=new O.State(new Set(d)),I=new O.State(l);for(let r=0;r<100;r++){Xo(o,{updateInterval:0,frameCounter:999,maxIterationsPerUpdate:0,checkRadius:0,dirtyRegions:new Set},i,I,n,c);let s=i.get();if(s.size===0)break;let u=new Set;s.forEach(m=>{let[p,h]=m.split(",").map(Number);u.add(m),p>0&&u.add(`${p-1},${h}`),p<n-1&&u.add(`${p+1},${h}`),h>0&&u.add(`${p},${h-1}`),h<c-1&&u.add(`${p},${h+1}`)}),i.set(u)}return console.log("World generation complete!"),l}function tt(a,e,o,t,c,n,l,g,d,i,I,r,s=null){let u;s!==null?(l.set(s),u=s):u=l?.get();let m=ii(a,e,t,u,c,n);d.set({}),g.set(0),i.set((function(R,W,E,w){let M={};for(let x=0;x<W;x++)for(let U=0;U<E;U++)if(R.getTile(x,U)===w.TREE_TRUNK){let D=R.getTile(x,U+1);if(R.getTile(x,U-1),D&&D.solid&&D!==w.TREE_TRUNK){let F=`${x},${U}`,q=[],ee=U;for(;ee>=0&&R.getTile(x,ee)===w.TREE_TRUNK;)q.push({x,y:ee,tile:w.TREE_TRUNK}),ee--;let be=ee+1,ae=3;for(let ue=-ae;ue<=ae;ue++)for(let Se=-ae;Se<=ae;Se++){let ve=x+ue,te=be+Se;ve>=0&&ve<W&&te>=0&&te<E&&R.getTile(ve,te)===w.TREE_LEAVES&&q.push({x:ve,y:te,tile:w.TREE_LEAVES})}M[F]={seedType:"WALNUT",mature:!0,blocks:q,baseX:x,baseY:U}}}return M})(m,n,c,t));let p=(function(R,W=1){return Object.fromEntries(Object.values(R).map(E=>[E,W]))})(Vo(t),1);r.set(p);let h=Math.floor(n/2),y=Math.floor(e-5);for(let R=h-25;R<h+25;R++)for(let W=y-5;W<y+5;W++)if(R>=0&&R<n&&W>=0&&W<c){let E=Math.floor(R),w=Math.floor(W);if(m.getTile(E,w)===t.AIR&&w+1<c&&m.getTile(E,w+1)&&m.getTile(E,w+1).solid){let M=!0;for(let x=w-2;x<=w;x++)if(x>=0&&m.getTile(E,x)!==t.AIR){M=!1;break}if(M){let x=re(j({},I.get()),{x:R*o,y:W*o,velocityX:0,velocityY:0,lastDirection:0});I.set(x)}}}return m}var z={isEnabled:!1,selectedTile:null,brushSize:1,isDragging:!1,lastPaintedTile:null};function ai(a,e,o){(function(t,c,n){let l=t.getElementById("toggleMapEditor");l&&l.addEventListener("click",()=>{z.isEnabled=!z.isEnabled,(function(s,u,m){let p=s.getElementById("mapEditorText"),h=s.getElementById("mapEditorControls");p&&h&&(z.isEnabled?(p.textContent="Disable Editor",h.removeAttribute("hidden"),u.set("clear"),m.set("normal")):(u.set("fog"),p.textContent="Enable Editor",h.setAttribute("hidden","")))})(t,c,n)});let g=t.getElementById("brushSizeSelect");g&&g.addEventListener("change",s=>{s.target instanceof HTMLSelectElement&&(z.brushSize=parseInt(s.target.value))}),t.querySelectorAll(".tile-btn").forEach(s=>{s.addEventListener("click",u=>{if(u.target instanceof HTMLButtonElement){let m=u.target.dataset.tile;(function(p,h){z.selectedTile=h,console.log("Selected tile:",h,"Editor enabled:",z.isEnabled),p.querySelectorAll(".tile-btn").forEach(R=>{R.classList.remove("selected")});let y=p.querySelector(`[data-tile="${h}"]`);y&&y.classList.add("selected")})(t,m)}})});let d=t.getElementById("clearMapEditor");d&&d.addEventListener("click",()=>{confirm("Clear the entire map? This cannot be undone.")&&(function(){let s=k.TILES,u=k.WORLD_WIDTH.get(),m=k.WORLD_HEIGHT.get(),p=new He(u,m);for(let h=0;h<u;h++)for(let y=0;y<m;y++)p.setTile(h,y,s.AIR);V.world.set(p),V.plantStructures.set({}),V.growthTimers.set({})})()});let i=t.getElementById("fillMapEditor");i&&i.addEventListener("click",()=>{z.selectedTile&&confirm(`Fill current layer with ${z.selectedTile}?`)&&(function(s){if(!z.selectedTile)return;let u=V.camera.get(),m=V.world.get(),p=k.TILES,h=k.TILE_SIZE.get(),y=p[z.selectedTile],R=k.WORLD_HEIGHT.get(),W=k.WORLD_WIDTH.get(),E=Math.floor(u.x/h),w=Math.floor(u.y/h),M=Math.min(W,E+Math.ceil(s.width/h)),x=Math.min(R,w+Math.ceil(s.height/h));for(let U=Math.max(0,E);U<M;U++)for(let D=Math.max(0,w);D<x;D++)m.setTile(U,D,y);V.world.set(m)})(t.getElementById("canvas"))});let I=t.getElementById("saveMapAsState");I&&I.addEventListener("click",()=>{(async function(){try{let s=Et(globalThis);s.state.exploredMap=V.exploredMap.get().toObject();let u=k.WORLD_WIDTH.get(),m=k.SURFACE_LEVEL.get(),p=k.TILE_SIZE.get();s.state.player={x:u/2*p,y:m*p-50,width:6,height:8,velocityX:0,velocityY:0,speed:3,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0},s.state.gameTime=0,s.state.growthTimers={},s.state.plantStructures={};let h=JSON.stringify(s),y=new Blob([h],{type:"application/json"}),R=URL.createObjectURL(y),W=document.createElement("a");W.href=R,W.download=`sprite-garden-map-${Date.now()}.json`,document.body.append(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(R),console.log("Map saved as game state file"),alert('Map saved successfully! You can load this file using the "Load Game File" button.')}catch(s){console.error("Failed to save map as state:",s),alert("Failed to save map. Check console for details.")}})()});let r=t.getElementById("regenerateMap");r&&r.addEventListener("click",()=>{if(confirm("Regenerated world? This will lose all editor changes.")){let s=tt(k.BIOMES,k.SURFACE_LEVEL.get(),k.TILE_SIZE.get(),k.TILES,k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get(),k.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory);V.world.set(s)}})})(a,e,o)}function bo(a,e,o,t,c,n,l,g){if(!z.isEnabled||!z.selectedTile||typeof o?.get!="function")return!1;let d=o.get();return Jo(Math.floor((a+d.x)/c),Math.floor((e+d.y)/c),t,n,l,g),!0}function pt(a,e,o,t,c,n,l,g,d=!1){if(!z.isEnabled||!z.selectedTile)return!1;d&&(z.isDragging=!0,z.lastPaintedTile=null);let i=o.get(),I=Math.floor((a+i.x)/c),r=Math.floor((e+i.y)/c),s=`${I},${r}`;return z.lastPaintedTile!==s&&(Jo(I,r,t,n,l,g),z.lastPaintedTile=s),!0}function Jo(a,e,o,t,c,n){let l=o[z.selectedTile];if(!l)return;let g=n.get(),d=Math.floor(z.brushSize/2),i=!1;for(let I=-d;I<=d;I++)for(let r=-d;r<=d;r++){let s=a+I,u=e+r;if(!(s<0||s>=c||u<0||u>=t)){if(z.brushSize>1&&Math.sqrt(I*I+r*r)>d+.5)continue;g.getTile(s,u)!==l&&(g.setTile(s,u,l),i=!0)}}i&&V.world.set(g)}var mo,ln={exports:{}},gn,yt,sn,ho,po,li=wn((mo||(mo=1,gn=ln,yt=ln.exports||globalThis,sn=function a(e){var o=this,t={},c=a;c.getNumberOfInstance=function(){return c._numberOfInstance},o.enable=function(){return t.listenCodeCharSequence(),t.listenCodeGestureSequence(),t.debug&&t.debug("Listener enabled for all."),o},o.enableKeyboardKeys=function(){return t.listenCodeCharSequence(),t.debug&&t.debug("Listener enabled for Keyboard Keys."),o},o.enableTouchGesture=function(){return t.listenCodeGestureSequence(),t.debug&&t.debug("Listener enabled for Touch Gesture."),o},o.disable=function(){return t.stopCodeCharSequence(),t.stopCodeGestureSequence(),t.debug&&t.debug("Listener disabled for all."),o},o.disableKeyboardKeys=function(){return t.stopCodeCharSequence(),t.debug&&t.debug("Listener disabled for Keyboard Keys."),o},o.disableTouchGesture=function(){return t.stopCodeGestureSequence(),t.debug&&t.debug("Listener disabled for Touch Gesture."),o},o.setListener=function(n){return t.stopCodeCharSequence(),t.stopCodeGestureSequence(),t.listener=n||document,t.listenCodeCharSequence(),t.listenCodeGestureSequence(),t.debug&&t.debug("Listener changed.",n),o},o.setCallback=function(n){return t.afterCodeSequenceCallback=typeof n=="function"&&n||t.defaultCallback,t.debug&&t.debug("Callback changed.",n),o},o.setOptions=function(n){return t.initOptions(n),o},t.keptLastCodeChar=function(){t.input.length>t.konamiCodeChar.length&&(t.input=t.input.substr(t.input.length-t.konamiCodeChar.length))},t.defaultCallback=function(){t.debug&&t.debug("Konami Code Sequence Entered. There is no action defined.")},t.checkIfCodeCharIsValid=function(){t.input===t.konamiCodeChar&&t.afterCodeSequenceCallback(o)},t.codeSequenceEventKeyDown=function(n){t.input+=n.keyCode,t.keptLastCodeChar(),t.checkIfCodeCharIsValid()},t.codeSequenceEventTouchMove=function(n){var l;n.touches.length===1&&t.capture===!0&&(l=n.touches[0],t.stopX=l.pageX,t.stopY=l.pageY,t.tap=!1,t.capture=!1,t.checkIfCodeGestureIsValid())},t.codeSequenceEventTouchEnd=function(){t.tap===!0&&t.checkIfCodeGestureIsValid()},t.codeSequenceEventTouchStart=function(n){t.startX=n.changedTouches[0].pageX,t.startY=n.changedTouches[0].pageY,t.tap=!0,t.capture=!0},t.stopCodeCharSequence=function(){t.listener.removeEventListener("keydown",t.codeSequenceEventKeyDown)},t.stopCodeGestureSequence=function(){t.listener.removeEventListener("touchstart",t.codeSequenceEventTouchStart),t.listener.removeEventListener("touchmove",t.codeSequenceEventTouchMove),t.listener.removeEventListener("touchend",t.codeSequenceEventTouchEnd)},t.listenCodeCharSequence=function(){t.stopCodeCharSequence(),t.listener.addEventListener("keydown",t.codeSequenceEventKeyDown)},t.listenCodeGestureSequence=function(){t.originalCodeGesture=t.konamiCodeGesture,t.stopCodeGestureSequence(),t.listener.addEventListener("touchstart",t.codeSequenceEventTouchStart),t.listener.addEventListener("touchmove",t.codeSequenceEventTouchMove),t.listener.addEventListener("touchend",t.codeSequenceEventTouchEnd,!1)},t.checkIfCodeGestureIsValid=function(){var n=Math.abs(t.startX-t.stopX),l=Math.abs(t.startY-t.stopY),g=t.startX-t.stopX<0?"rt":"lt",d=t.startY-t.stopY<0?"dn":"up",i=n>l?g:d;(i=t.tap===!0?"tp":i)===t.konamiCodeGesture.substr(0,2)?t.konamiCodeGesture=t.konamiCodeGesture.substr(2,t.konamiCodeGesture.length-2):t.konamiCodeGesture=t.originalCodeGesture,t.konamiCodeGesture.length===0&&(t.konamiCodeGesture=t.originalCodeGesture,t.afterCodeSequenceCallback(o))},t.checkDebugMode=function(n){n&&n.debug===!0?(t.debug=function(l,g){g!==void 0?console.log(l,g):console.log(l)},t.debug&&t.debug("Debug Mode On.")):t.debug=!1},t.initOptions=function(n){t.checkDebugMode(n),t.listener=n&&n.listener||document,t.afterCodeSequenceCallback=typeof n=="function"&&n||n&&typeof n.callback=="function"&&n.callback||t.defaultCallback},t.init=function(){t.input="",t.konamiCodeChar="38384040373937396665",t.konamiCodeGesture="upupdndnltrtltrttptp",t.startX=0,t.startY=0,t.stopX=0,t.stopY=0,t.tap=!1,t.capture=!1,c._numberOfInstance=c._numberOfInstance?c._numberOfInstance+1:1,t.initOptions(e),t.listenCodeCharSequence(),t.listenCodeGestureSequence()},t.init()},ho=yt.KonamiCode,(po=yt.KonamiCode=sn).noConflict=function(){return yt.KonamiCode=ho,po},gn.exports&&(gn.exports=sn)),ln.exports));function Uo(a,e){let o;return function(...t){clearTimeout(o),o=setTimeout(()=>a.apply(this,t),e)}}function gi(a,e,o,t,c,n=5){let l=o.get();for(let g=-n;g<=n;g++)for(let d=-n;d<=n;d++){let i=a+g,I=e+d;i>=0&&i<t&&I>=0&&I<c&&l.add(`${i},${I}`)}}function vt(a,e,o){for(let[t,c]of Object.entries(o.get()))if(c.mature&&c.blocks&&c.blocks.find(n=>n.x===a&&n.y===e))return!0;return!1}function si(a,e,o,t,c,n,l,g,d="regular"){if(z.isEnabled)return void console.log("Breaking disabled in map editor mode");let i=Math.floor((o.x+o.width/2)/c),I=Math.floor((o.y+o.height/2)/c),r=[];if(d==="regular")if(o.lastDirection!==0){let s=o.lastDirection>0?1:-1;for(let u=0;u<3;u++){let m=i+s,p=I-u;if(m<0||m>=g||p<0||p>=l)continue;let h=n.getTile(m,p);h&&h!==t.AIR&&h!==t.BEDROCK&&h!==t.LAVA&&h!==t.WATER&&!vt(m,p,e)&&r.push({x:m,y:p,tile:h,priority:u})}}else{let s=i,u=I+1;if(s>=0&&s<g&&u>=0&&u<l){let m=n.getTile(s,u);m&&m!==t.AIR&&m!==t.BEDROCK&&m!==t.LAVA&&m!==t.WATER&&!vt(s,u,e)&&r.push({x:s,y:u,tile:m,priority:1})}}else if(o.lastDirection!==0)for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++){let p=i+u*(o.lastDirection,1),h=I+m;if(p<0||p>=g||h<0||h>=l)continue;let y=n.getTile(p,h);if(y&&y!==t.AIR&&y!==t.BEDROCK&&y!==t.LAVA&&y!==t.WATER&&!vt(p,h,e)){let R=Math.abs(u)===0?1:2-Math.abs(u)/1;r.push({x:p,y:h,tile:y,priority:R})}}else for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++){let p=i+u,h=I+m;if(p<0||p>=g||h<0||h>=l)continue;let y=n.getTile(p,h);y&&y!==t.AIR&&y!==t.BEDROCK&&y!==t.LAVA&&y!==t.WATER&&!vt(p,h,e)&&r.push({x:p,y:h,tile:y,priority:1})}if(r.length>0){let s=a.get(),u=e.get(),m=j({},s),p=j({},u),h={},y={};r.forEach(R=>{let W=!1,E=null;for(let[w,M]of Object.entries(u)){if(!M.mature&&M.blocks){for(let x of M.blocks)if(x.x===R.x&&x.y===R.y){W=!0,E=w;break}}if(W)break}if(W&&E){let w=u[E];w.blocks&&w.blocks.forEach(M=>{M.x>=0&&M.x<g&&M.y>=0&&M.y<l&&n.setTile(M.x,M.y,t.AIR)}),w.seedType&&Math.random()<.5&&(h[w.seedType]=(h[w.seedType]||0)+1),delete p[E],delete m[E]}else{if(n.setTile(R.x,R.y,t.AIR),delete m[`${R.x},${R.y}`],(function(M,x){return M===x.TREE_TRUNK||M===x.TREE_LEAVES})(R.tile,t)&&Math.random()<.15&&(h.WALNUT=(h.WALNUT||0)+1),R.tile.crop&&Math.random()<.3){let M=Vn(t)[R.tile.id];M&&(h[M]=(h[M]||0)+1)}let w=(function(M,x){return M?.drops??Object.fromEntries(Object.entries(x).map(([U,D])=>[D.id,U]))[M.id]})(R.tile,t);w&&(R.tile===t.TREE_LEAVES&&Math.random()<.3||R.tile!==t.TREE_LEAVES)&&(y[w]=(y[w]||0)+1)}}),a.set(m),e.set(p),Object.keys(h).length>0&&Re("seedInventory",R=>{let W=j({},R);return Object.entries(h).forEach(([E,w])=>{W[E]+=w}),W}),Object.keys(y).length>0&&Re("materialsInventory",R=>{let W=j({},R);return Object.entries(y).forEach(([E,w])=>{W[E]=(W[E]||0)+w}),W})}}function Ho(a,e,o,t,c,n,l,g,d,i="regular"){let I=o.get(),r=n.get(),s=Math.floor((I.x+I.width/2)/c),u=Math.floor((I.y+I.height/2)/c),m=si(a,e,I,t,c,r,l,g,i);for(let p=-3;p<=3;p++)for(let h=-3;h<=3;h++){let y=s+p,R=u+h;y>=0&&y<g&&R>=0&&R<l&&r.getTile(y,R)===t.WATER&&gi(y,R,d,g,l,10)}return m}function ci(a,e,o,t,c){let n=Vn(e)[a.id];if(n){let l=2+Math.floor(3*Math.random());Re("seedInventory",g=>re(j({},g),{[n]:g[n]+l})),o.setTile(t,c,e.AIR),console.log(`Harvested simple ${n} crop, gained ${l} seeds`)}}function di(a,e,o,t,c,n,l,g){let d=n.getTile(l,g+1);if(d&&d.farmable)if(rn[t]&&o[t]>0){n.setTile(l,g,rn[t]),Re("seedInventory",I=>re(j({},I),{[t]:I[t]-1}));let i=`${l},${g}`;a.set(re(j({},a.get()),{[i]:{timeLeft:c[t].growthTime,seedType:t}})),e.set(re(j({},e.get()),{[i]:{seedType:t,mature:!1,blocks:[{x:l,y:g,tile:rn[t]}],baseX:l,baseY:g}})),console.log(`Planted ${t} at (${l}, ${g}), ${o[t]-1} seeds remaining`)}else console.log(`Cannot plant ${t} - no seeds available or invalid seed type`);else console.log(`Cannot plant at (${l}, ${g}) - no farmable ground below`)}function Ii(a,e,o,t,c,n,l,g){if(o.blocks&&o.blocks.forEach(I=>{I.x>=0&&I.x<g&&I.y>=0&&I.y<l&&n.setTile(I.x,I.y,c.AIR)}),o.seedType){let I=1+Math.floor(3*Math.random());Re("seedInventory",p=>re(j({},p),{[o.seedType]:p[o.seedType]+I})),console.log(`Harvested mature ${o.seedType}, gained ${I} seeds`);let r="WOOD",s=c[o.seedType].drops,u=Array.isArray(s)?s.some(p=>p.toLowerCase().includes(p.toLowerCase())):s.toLowerCase().includes(r.toLowerCase()),m=u?1+Math.floor(3*Math.random()):0;m&&(Re("materialsInventory",p=>re(j({},p),{[r]:p[r]+m})),console.log(`Gained ${m} ${r.toLowerCase()}`))}let d=j({},e.get()),i=j({},a.get());delete d[t],delete i[t],e.set(d),a.set(i)}function Oo(a,e,o,t,c,n,l,g,d,i){let I=Math.floor((o.x+o.width/2)/l),r=Math.floor((o.y+o.height/2)/l),s=[];if(o.lastDirection!==0){let u=o.lastDirection>0?1:-1;s.push({x:I+u,y:r}),s.push({x:I+u,y:r+1})}s.push({x:I,y:r+1}),s.push({x:I,y:r});for(let u of s){let{x:m,y:p}=u;if(m<0||m>=i||p<0||p>=d)continue;let h=g.getTile(m,p),y=null,R=null,W=e.get();for(let[E,w]of Object.entries(W))if(w.mature&&w.blocks&&w.blocks.find(M=>M.x===m&&M.y===p)){y=w,R=E;break}if(y&&R)return void Ii(a,e,y,R,n,g,d,i);if(h&&h.crop)return void ci(h,n,g,m,p);if(h===n.AIR&&c&&t[c]>0)return void di(a,e,t,c,n,g,m,p)}}function qe(a,e){let o=a.getElementById("canvas");if(o instanceof HTMLCanvasElement){let t=e.currentResolution?.get();if(t==="fullscreen")return a?.host.classList.remove("resolution","resolution-400","resolution-800"),o.width=window.innerWidth,o.height=window.innerHeight,o.style.width="100vw",o.style.height="100vh",void e.fogScale.set(36);a.host.classList.add("resolution"),a.host.classList.remove("resolution-400","resolution-800");let c=parseInt(t);if(o.width=c,o.height=c,o.style.width=c+"px",o.style.height=c+"px",a.host.classList.add(`resolution-${c}`),t==="800")return void e.fogScale.set(24);e.fogScale.set(12)}}function Do(a,e){let o=(c,n)=>{if(!c)return null;if(c.tagName===n.toUpperCase()&&c.shadowRoot)return c;let l=[...c.children||[]];return c.shadowRoot&&l.push(c.shadowRoot),l.map(g=>o(g,n)).find(Boolean)||null},t=o(a,e);return t?t.shadowRoot:null}async function jo(a){let e=await Q.getItem("sprite-garden-range")||1;a.querySelector('[data-key="k"].middle').innerHTML=`&times;${Number(e)}`}async function pn(a,e,o,t,c,n,l,g,d){let i=Math.floor((o.x+o.width/2)/n),I=Math.floor((o.y+o.height/2)/n),r,s,u=await Q.getItem("sprite-garden-range")||1;switch(a.toLowerCase()){case"k":return void await(async function(h){let y=Number(await Q.getItem("sprite-garden-range")||1),R=Number(y+1);y>=3&&(R=1),await Q.setItem("sprite-garden-range",R),await jo(h)})(Do(globalThis.document,"sprite-garden"));case"u":u===1&&(r=i-u,s=I-u),u===2&&(r=i-1,s=I-u),u===3&&(r=i-1,s=I-u);break;case"i":u===1&&(r=i,s=I-u),u===2&&(r=i,s=I-u),u===3&&(r=i,s=I-u);break;case"o":u===1&&(r=i+u,s=I-u),u===2&&(r=i+1,s=I-u),u===3&&(r=i+1,s=I-u);break;case"j":u===1&&(r=i-u,s=I),u===2&&(r=i-u,s=I),u===3&&(r=i-u,s=I);break;case"l":u===1&&(r=i+u,s=I),u===2&&(r=i+u,s=I),u===3&&(r=i+u,s=I);break;case"m":u===1&&(r=i-u,s=I+u),u===2&&(r=i-1,s=I+u),u===3&&(r=i-1,s=I+u);break;case",":u===1&&(r=i,s=I+u),u===2&&(r=i,s=I+u),u===3&&(r=i,s=I+u);break;case".":u===1&&(r=i+u,s=I+u),u===2&&(r=i+1,s=I+u),u===3&&(r=i+1,s=I+u);break;default:return void console.log(`Invalid placement key: ${a}`)}if(!t)return void console.log("No material selected for placement");if(e[t]<=0)return void console.log(`No ${t} available to place`);if(r<0||r>=d||s<0||s>=g)return void console.log(`Cannot place block outside world bounds at (${r}, ${s})`);let m=l.getTile(r,s);if(m&&m!==c.AIR&&m.solid)return void console.log(`Cannot place block at (${r}, ${s}) - position occupied`);let p=(function(h,y){return y[h]||null})(t,c);p?(l.setTile(r,s,p),Re("materialsInventory",h=>re(j({},h),{[t]:h[t]-1})),console.log(`Placed ${t} at (${r}, ${s}), ${e[t]-1} remaining`)):console.log(`Invalid material type: ${t}`)}function yn(a,e){for(let[o,t]of Object.entries(e))a.host instanceof HTMLElement&&a.host.style.setProperty(o,t)}var vn="sprite-garden-custom-colors",fn=class{constructor(e,o,t){this.gThis=e,this.doc=o,this.shadow=t,this.dialog=null,this.colors={},this.originalColors={},this.close=this.close.bind(this),this.handleColorChange=this.handleColorChange.bind(this),this.handleDialogClose=this.handleDialogClose.bind(this),this.handleDialogKeydown=this.handleDialogKeydown.bind(this),this.handleReset=this.handleReset.bind(this),this.handleSave=this.handleSave.bind(this),this.dirty=!1}async createDialog(){this.dialog&&this.dialog.remove(),this.originalColors=xe(this.gThis,this.shadow),this.colors=j({},this.originalColors);let e=this.doc.createElement("dialog");return e.setAttribute("id","customizeColorsDialog"),e.addEventListener("close",this.handleDialogClose),e.addEventListener("keydown",this.handleDialogKeydown),e.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      max-height: 80vh;
      max-width: 30rem;
      overflow-y: auto;
      padding: 1.25rem;
      width: 90%;
    `,e.innerHTML=`
      <div style="
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.9375rem;
      ">
        <h3 style="margin: 0">Customize Colors</h3>
        <button
          id="closeColorDialog"
          style="
            background: var(--sg-color-red-500);
            border-radius: 0.25rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          "
        >
          &times;
        </button>
      </div>

      <div style="margin-bottom: 1rem;">
        <p style="color: var(--sg-color-gray-700); font-size: 0.875rem; margin: 0 0 0.5rem 0;">
          Customize the color palette for Sprite Garden. Changes are applied in real-time and saved automatically.
        </p>
      </div>

      <div id="colorInputsContainer" style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
      ">
        <!-- Color inputs will be generated here -->
      </div>

      <div style="border-top: 1px solid var(--sg-color-gray-300); display: flex; gap: 0.625rem; justify-content: flex-end; padding-top: 1rem;">
        <button
          id="resetColorsBtn"
          style="
            background: var(--sg-color-orange-500);
            border-radius: 0.25rem;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.5rem 0.9375rem;
          "
        >
          Reset to Defaults
        </button>
        <button
          id="saveColorsBtn"
          style="
            background: var(--sg-color-green-500);
            border-radius: 0.25rem;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.5rem 0.9375rem;
          "
        >
          Save & Close
        </button>
      </div>
    `,this.shadow.append(e),this.dialog=e,this.renderColorInputs(),this.initEventListeners(),e}async handleSave(){await(async function(e,o){try{await Q.setItem(o,e),console.log("Saved custom colors")}catch(t){console.error("Failed to save colors:",t)}})(this.colors,vn),await yn(this.shadow,this.colors),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})),this.dirty=!1,this.close()}async handleReset(){confirm("Reset all colors to defaults and close? This cannot be undone.")&&(await(async function(e,o,t){try{await Q.removeItem(t);let c=xe(e,o);for(let n of Object.keys(c))o.host instanceof HTMLElement&&o.host.style.removeProperty(n);console.log("Reset to default colors")}catch(c){console.error("Failed to reset colors:",c)}})(this.gThis,this.shadow,vn),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:null}})),this.dirty=!1,this.close())}renderColorInputs(){let e=this.dialog.querySelector("#colorInputsContainer"),o={};for(let[c,n]of Object.entries(this.colors)){let l=c.match(/--sg-?([a-z]+)-/),g=l?l[1]:"other";["host","touch","ui"].includes(g)||(o[g]||(o[g]=[]),o[g].push({property:c,value:n.slice(0,7)}))}let t=Object.keys(o).sort();for(let c of t){let n=this.doc.createElement("div");n.style.cssText=`
        grid-column: 1 / -1;
        margin-top: 1rem;
      `;let l=this.doc.createElement("h4");l.textContent=(c.charAt(0).toUpperCase()+c.slice(1)).replace("Tile","Tiles"),l.style.cssText=`
        border-bottom: 1px solid var(--sg-color-gray-300);
        color: var(--sg-color-gray-800);
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
        padding-bottom: 0.25rem;
      `,n.append(l);let[g]=o[c];g.property.startsWith("--sg-color")&&n.setAttribute("hidden","hidden"),e.append(n);for(let{property:d,value:i}of o[c]){let I=this.doc.createElement("div");I.style.cssText=`
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `,d.startsWith("--sg-color")&&I.setAttribute("hidden","hidden");let r=this.doc.createElement("label");r.textContent=d.replace("--sg-","").replace(/-/g," ").replace("tile ","").replace("color ","").replace(" color",""),r.style.cssText=`
          color: var(--sg-color-gray-700);
          font-size: 0.75rem;
          text-transform: capitalize;
        `;let s=this.doc.createElement("div");s.style.cssText=`
          align-items: center;
          display: flex;
          gap: 0.5rem;
        `;let u=this.doc.createElement("input");u.type="color",u.value=this.normalizeColor(i),u.dataset.property=d,u.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          cursor: pointer;
          height: 2rem;
          width: 3rem;
        `;let m=this.doc.createElement("input");m.type="text",m.value=i,m.dataset.property=d,m.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          flex: 1;
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.25rem;
        `;let p=Uo(()=>{this.handleColorChange(d,m.value)},500);u.addEventListener("input",h=>{h.target instanceof HTMLInputElement&&(m.value=h.target.value,p())}),m.addEventListener("input",h=>{if(h.target instanceof HTMLInputElement){let y=this.normalizeColor(h.target.value);y&&(u.value=y),p()}}),s.append(u),s.append(m),I.append(r),I.append(s),e.append(I)}}}normalizeColor(e){if(!e)return"#000000";if(e.startsWith("#"))return e.length===7?e:"#000000";let o=this.doc.createElement("canvas").getContext("2d");return o.fillStyle=e,o.fillStyle}handleColorChange(e,o){this.colors[e]=o,this.dirty=!0;let t=this.shadow.host;t instanceof HTMLElement&&(t.style.setProperty(e,o),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})))}initEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),o=this.dialog.querySelector("#saveColorsBtn"),t=this.dialog.querySelector("#resetColorsBtn");e.addEventListener("click",this.close),o.addEventListener("click",this.handleSave),t.addEventListener("click",this.handleReset)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}handleDialogKeydown(e){e.key==="Escape"&&(e.preventDefault(),this.close())}close(){this.dirty?confirm("Close without saving?")&&(yn(this.shadow,this.originalColors),requestAnimationFrame(()=>{this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.originalColors}}))}),this.dialog instanceof HTMLDialogElement&&this.dialog.close()):this.dialog instanceof HTMLDialogElement&&this.dialog.close()}handleDialogClose(){this.removeEventListeners(),this.dialog.remove()}removeEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),o=this.dialog.querySelector("#saveColorsBtn"),t=this.dialog.querySelector("#resetColorsBtn");e.removeEventListener("click",this.close),o.removeEventListener("click",this.handleSave),t.removeEventListener("click",this.handleReset)}};async function yo(a){let e=Do(a.document,"sprite-garden"),o=new fn(a,a.document,e);return await o.createDialog(),o.show(),o}function Fo(){let a=k.breakMode.get();k.breakMode.set(a==="regular"?"extra":"regular")}async function Po(a){let e=await Q.getItem("sprite-garden-movement-scale");e||(e=1,await Q.setItem("sprite-garden-movement-scale",e)),a.querySelector('[data-key="x"].middle').innerHTML=`&times;${Number(e)}`}async function Gn(a){let e=Number(Number(await Q.getItem("sprite-garden-movement-scale"))||1),o=Number(Number(e.toFixed(2))+.125);o>1&&(o=Number(o.toFixed(1))),o>1&&(o=.5),await Q.setItem("sprite-garden-movement-scale",o),await Po(a)}var Wn=class{constructor(e,o){this.doc=e,this.shadow=o,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let o=`${e}-content`,t=this.shadow.querySelector(`.${o}`);if(!t){t=this.doc.createElement("dialog"),t.setAttribute("class",o);let c=new DOMParser,n=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFib3V0PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkFib3V0IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJhYm91dCI+CiAgICA8ZGl2IGNsYXNzPSJhYm91dC1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iYWJvdXQtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBoaWRkZW49ImhpZGRlbiIgY2xhc3M9ImFib3V0LWNvbnRlbnRfY2xvc2UtYnRuIj4mdGltZXM7PC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL2Fib3V0LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPkFib3V0PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD4KICAgICAgICAgIFNwcml0ZSBHYXJkZW4gaXMgYSAyRCBzYW5kYm94IGV4cGxvcmF0aW9uIGFuZCBmYXJtaW5nIGdhbWUgdGhhdCBydW5zCiAgICAgICAgICBlbnRpcmVseSBpbiB5b3VyIHdlYiBicm93c2VyLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLAogICAgICAgICAgZGlzY292ZXIgZGlmZmVyZW50IGJpb21lcywgbWluZSByZXNvdXJjZXMsIGFuZCBjdWx0aXZhdGUgYSB2YXJpZXR5IG9mCiAgICAgICAgICBjcm9wcy4KICAgICAgICA8L3A+CiAgICAgICAgPGEKICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgPgogICAgICAgICAgPGltZwogICAgICAgICAgICBzcmM9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vYXNzZXRzL3Nwcml0ZS1nYXJkZW4tdGltZS1sYXBzZS5naWYiCiAgICAgICAgICAgIGRlc2M9IkEgdGltZSBsYXBzZSBvZiBhIGdhcmRlbiBpbiBTcHJpdGUgR2FyZGVuIgogICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIFRpbWUgTGFwc2UiCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+RmVhdHVyZXM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Qcm9jZWR1cmFsIFdvcmxkIEdlbmVyYXRpb248L3N0cm9uZz4gLSBFYWNoIHdvcmxkIGlzIHVuaXF1ZSwKICAgICAgICAgICAgZ2VuZXJhdGVkIGZyb20gYSBzaGFyZWFibGUgc2VlZAogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5NdWx0aXBsZSBCaW9tZXM8L3N0cm9uZz4gLSBFeHBsb3JlIGZvcmVzdHMsIGRlc2VydHMsCiAgICAgICAgICAgIHR1bmRyYXMsIGFuZCBzd2FtcHMsIGVhY2ggd2l0aCB1bmlxdWUgY2hhcmFjdGVyaXN0aWNzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkZhcm1pbmcgU3lzdGVtPC9zdHJvbmc+IC0gUGxhbnQgYW5kIGhhcnZlc3QgZGlmZmVyZW50IGNyb3AKICAgICAgICAgICAgdHlwZXMgd2l0aCByZWFsaXN0aWMgZ3Jvd3RoIGN5Y2xlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5SZXNvdXJjZSBNaW5pbmc8L3N0cm9uZz4gLSBEaWcgZm9yIHZhbHVhYmxlIHJlc291cmNlcyBsaWtlCiAgICAgICAgICAgIGNvYWwsIGlyb24sIGFuZCBnb2xkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkNhdmUgU3lzdGVtczwvc3Ryb25nPiAtIERpc2NvdmVyIHVuZGVyZ3JvdW5kIGNhdmVzIGZpbGxlZAogICAgICAgICAgICB3aXRoIHJlc291cmNlcyBhbmQgY2hhbGxlbmdlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5CdWlsZGluZzwvc3Ryb25nPiAtIFVzZSBjb2xsZWN0ZWQgbWF0ZXJpYWxzIHRvIHBsYWNlIGJsb2NrcwogICAgICAgICAgICBhbmQgc2hhcGUgdGhlIHdvcmxkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPlNhdmUgJmFtcDsgTG9hZDwvc3Ryb25nPiAtIFlvdXIgcHJvZ3Jlc3MgY2FuIGJlIHNhdmVkIG9uCiAgICAgICAgICAgIGRldmljZSBvciBhcyBhIGZpbGUgdG8gc2hhcmUKICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+UHJpdmFjeSBieSBEZXNpZ248L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyA8c3Ryb25nPnByaXZhdGUgYnkgZGVzaWduPC9zdHJvbmc+LiBBbGwgZ2FtZSBkYXRhIGlzCiAgICAgICAgICBwcm9jZXNzZWQgYW5kIHN0b3JlZCBsb2NhbGx5IG9uIHlvdXIgZGV2aWNlLiBObyBwZXJzb25hbCBpbmZvcm1hdGlvbgogICAgICAgICAgaXMgY29sbGVjdGVkLCB0cmFuc21pdHRlZCwgb3Igc3RvcmVkIG9uIGV4dGVybmFsIHNlcnZlcnMuIFlvdXIgZ2FtZQogICAgICAgICAgd29ybGRzLCBwcm9ncmVzcywgYW5kIHByZWZlcmVuY2VzIG5ldmVyIGxlYXZlIHlvdXIgZGV2aWNlLCB1bmxlc3MKICAgICAgICAgIHNoYXJlZCBieSB5b3UuCiAgICAgICAgPC9wPgogICAgICAgIDxwPgogICAgICAgICAgUmVhZCBtb3JlIGFib3V0IHRoZQogICAgICAgICAgPGEKICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gUHJpdmFjeSBQb2xpY3k8L2EKICAgICAgICAgID4uCiAgICAgICAgPC9wPgogICAgICAgIDxoMz5Db250cm9sczwvaDM+CiAgICAgICAgPHVsIGNsYXNzPSJhYm91dC1jb250cm9scyI+CiAgICAgICAgICA8bGk+PHN0cm9uZz5Nb3ZlbWVudDo8L3N0cm9uZz4gVy9BL1MvRCBvciBBcnJvdyBLZXlzPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkp1bXA6PC9zdHJvbmc+IFcsIOKGkSwgb3IgU3BhY2U8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+UGxhbnQvSGFydmVzdDo8L3N0cm9uZz4gRjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5CcmVhayBCbG9jazo8L3N0cm9uZz4gUjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgQnJlYWsgTW9kZTo8L3N0cm9uZz4gRTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgTW92ZW1lbnQgU2NhbGU6PC9zdHJvbmc+IFg8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+Q2hhbmdlIEJsb2NrIFJhbmdlOjwvc3Ryb25nPiBLPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPlBsYWNlIEJsb2NrOjwvc3Ryb25nPiBVL0kvTy9KL0wvTS8sLy48L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+V29ybGQgU3RhdGUgTWVudTo8L3N0cm9uZz4gQ3RybCtTPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkluc3BlY3QgVGlsZXM6PC9zdHJvbmc+IE1vdXNlIGhvdmVyPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5UYXAgdGhlIGJvdHRvbSBjb3JuZXIgcGFuZWwgZm9yIG1vYmlsZSBjb250cm9scy48L3N0cm9uZz4KICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi8iCiAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICA+CiAgICAgICAgICA8aW1nCiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9hc3NldHMvc3ByaXRlLWdhcmRlbi1hbmltYXRpb24uZ2lmIgogICAgICAgICAgICBkZXNjPSJBbiBhbmltYXRpb24gb2YgU3ByaXRlIEdhcmRlbiBnYW1lcGxheSIKICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHYW1lcGxheSBBbmltYXRpb24iCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+VGlwcyBmb3IgTmV3IFBsYXllcnM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgU3RhcnQgYnkgZXhwbG9yaW5nIHlvdXIgaW1tZWRpYXRlIHN1cnJvdW5kaW5ncyB0byB1bmRlcnN0YW5kIHRoZQogICAgICAgICAgICBiaW9tZQogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT5IYXJ2ZXN0IG5hdHVyYWwgY3JvcHMgdG8gYnVpbGQgdXAgeW91ciBzZWVkIGludmVudG9yeTwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIExvb2sgZm9yIGZhcm1hYmxlIGdyb3VuZCAoZGlydCwgZ3Jhc3MsIGNsYXksIHNhbmQpIHRvIHBsYW50IHNlZWRzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBEaWZmZXJlbnQgY3JvcHMgZ3JvdyBhdCBkaWZmZXJlbnQgcmF0ZXMgLSBtdXNocm9vbXMgYXJlIGZhc3Rlc3QsCiAgICAgICAgICAgIHRyZWVzIGFyZSBzbG93ZXN0CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBNaW5lIHJlc291cmNlcyBieSBicmVha2luZyBibG9ja3MgKFIga2V5KSAtIHlvdSdsbCBjb2xsZWN0IG1hdGVyaWFscwogICAgICAgICAgICBhdXRvbWF0aWNhbGx5CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPkZvZyBjbGVhcnMgYXMgZXhwbG9yYXRpb24gcHJvZ3Jlc3NlczwvbGk+CiAgICAgICAgICA8bGk+U2F2ZSB5b3VyIGdhbWUgZnJlcXVlbnRseSB1c2luZyB0aGUgV29ybGQgU3RhdGUgbWVudSAoQ3RybCtTKTwvbGk+CiAgICAgICAgICA8bGk+U2hhcmUgaW50ZXJlc3Rpbmcgd29ybGQgc2VlZHMgd2l0aCBmcmllbmRzITwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+T3BlbiBTb3VyY2U8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyBvcGVuIHNvdXJjZSBzb2Z0d2FyZS4gVmlzaXQKICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+dGhlIHByb2plY3QgcmVwb3NpdG9yeTwvYQogICAgICAgICAgPgogICAgICAgICAgdG8gdmlldyB0aGUgY29kZSwgcmVwb3J0IGlzc3Vlcywgb3IgdG8gY29udHJpYnV0ZS4KICAgICAgICA8L3A+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==")).text(),l=c.parseFromString(n,"text/html").querySelector(`.${o}`);t.innerHTML=l.innerHTML,this.shadow.append(t),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}if(!(t instanceof HTMLDialogElement))throw new Error("Failed to create or find HTMLDialogElement");return this.dialog=t,this.initEventListeners(),this.dialog}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".about-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".about-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},Zn=class{constructor(e,o){this.doc=e,this.shadow=o,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e,o){this.dialog&&this.dialog.remove();let t=`${e}-content`,c=this.shadow.querySelector(`.${t}`);if(!c){c=this.doc.createElement("dialog"),c.setAttribute("class",t);let n=new DOMParser,l=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFQSSAtIEV4YW1wbGVzPC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkV4YW1wbGVzIC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJleGFtcGxlcyI+CiAgICA8ZGl2IGNsYXNzPSJleGFtcGxlcy1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iZXhhbXBsZXMtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIiB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW48L2EKICAgICAgICAgID4KICAgICAgICA8L2gxPgogICAgICAgIDxidXR0b24gaGlkZGVuPSJoaWRkZW4iIGNsYXNzPSJleGFtcGxlcy1jb250ZW50X2Nsb3NlLWJ0biI+CiAgICAgICAgICAmdGltZXM7CiAgICAgICAgPC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICA+QVBJIC0gRXhhbXBsZXM8L2EKICAgICAgICA+CiAgICAgIDwvaDI+CgogICAgICA8aDMgaWQ9IkZ1bGxzY3JlZW4iPgogICAgICAgIEZ1bGxzY3JlZW4gLSBTZXQgZnVsbHNjcmVlbiBhbmQgcmV2ZWFsIG9wdGlvbnMgaW4gc2V0dGluZ3MuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9GdWxsc2NyZWVuLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GdWxsc2NyZWVuLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBGdWxsc2NyZWVuIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iRmlyZXdvcmtzIj5GaXJld29ya3MgLSBQYXJ0aWNsZSBzeXN0ZW1zIGFuZCBjb2xvciB0cmFpbHMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0ZpcmV3b3Jrcy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GaXJld29ya3MubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gRmlyZXdvcmtzIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZpcmV3b3JrcyAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBGaXJld29ya3MgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iR29sZCI+R29sZCAtIEF1dG9tYXRlIGRpZ2dpbmcgZm9yIGdvbGQuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvR29sZC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPkdvbGQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEdvbGQgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJHT0wiPkdPTCAtIENvbndheSdzIEdhbWUgb2YgTGlmZSB1c2luZyBzcHJpdGUgZW50aXRpZXMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dPTC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5HT0wubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gR09MIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEdPTCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBHT0wgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUGhvdG8iPgogICAgICAgIFBob3RvIC0gRHJhd3MgaW50ZXJwcmV0ZWQgYml0bWFwIGJhc2VkIG9uIFNwcml0ZSBHYXJkZW4gdGlsZXMuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlBob3RvLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBQaG90byAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJIZWFydCI+SGVhcnQgLSBEcmF3cyBkeW5hbWljYWxseSBhbmltYXRlZCBoZWFydCBwYXR0ZXJucy48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5IZWFydC5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gSGVhcnQgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iS29uYW1pQ29kZSI+CiAgICAgICAgS29uYW1pIENvZGUgLSBTaG93cyBoYW5kbGluZyBvZiBrZXlib2FyZCBzZXF1ZW5jZXMgYW5kIGhpZGRlbgogICAgICAgIGludGVyYWN0aW9ucy4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPktvbmFtaUNvZGUubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Lb25hbWlDb2RlLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBLb25hbWkgQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmciPgogICAgICAgIE1lc3NhZ2luZyAtIERyYXcgdGV4dCBvbiB0aGUgbWFwIGZpbGxlZCB3aXRoIHdhdGVyLgogICAgICA8L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvTWVzc2FnaW5nLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPk1lc3NhZ2luZy5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmcgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIE1lc3NhZ2luZyAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmdTY3JvbGxlZCI+CiAgICAgICAgTWVzc2FnaW5nU2Nyb2xsZWQgLSBEcmF3cyBzY3JvbGxhYmxlIHRleHQgb24gdGhlIG1hcC4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+TWVzc2FnaW5nU2Nyb2xsZWQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4KICAgICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nU2Nyb2xsZWQgLSBCb29rbWFya2xldDwvc3BhbgogICAgICAgICAgICAgID48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUVJDb2RlIj5RUkNvZGUgLSBBZGQgYSBRUkNvZGUgdG8gdGhlIG1hcC48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvUVJDb2RlLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlFSQ29kZS5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBRUkNvZGUgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUVJDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIFFSQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),g=n.parseFromString(l,"text/html").querySelector(`.${t}`);c.innerHTML=g.innerHTML,this.shadow.append(c),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=c,this.initEventListeners(),c}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".examples-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".examples-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},Rn=class{constructor(e,o){this.doc=e,this.shadow=o,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let o=`${e}-content`,t=this.shadow.querySelector(`.${o}`);if(!t){t=this.doc.createElement("dialog"),t.setAttribute("class",o);let c=new DOMParser,n=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIFByaXZhY3kgUG9saWN5PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IlByaXZhY3kgUG9saWN5IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJwcml2YWN5Ij4KICAgIDxkaXYgY2xhc3M9InByaXZhY3ktY29udGVudCI+CiAgICAgIDxoZWFkZXIgY2xhc3M9InByaXZhY3ktY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0icHJpdmFjeS1jb250ZW50X2Nsb3NlLWJ0biIgaGlkZGVuPSJoaWRkZW4iPgogICAgICAgICAgJnRpbWVzOwogICAgICAgIDwvYnV0dG9uPgogICAgICA8L2hlYWRlcj4KCiAgICAgIDxoMj4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPlByaXZhY3kgUG9saWN5PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD48c3Ryb25nPkxhc3QgdXBkYXRlZDo8L3N0cm9uZz4gT2N0b2JlciAwNCwgMjAyNTwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBPdXIgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgb24gdGhlCiAgICAgICAgICBjb2xsZWN0aW9uLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgWW91ciBpbmZvcm1hdGlvbiB3aGVuIFlvdSB1c2UgdGhlCiAgICAgICAgICBTZXJ2aWNlLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICA8c3Ryb25nCiAgICAgICAgICAgID5XZSBkbyBub3QgY29sbGVjdCwgc3RvcmUsIHVzZSwgb3IgZGlzc2VtaW5hdGUgWW91ciBQZXJzb25hbAogICAgICAgICAgICBEYXRhLjwvc3Ryb25nCiAgICAgICAgICA+CiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+SW50ZXJwcmV0YXRpb24gYW5kIERlZmluaXRpb25zPC9oMz4KCiAgICAgICAgPGg0PkludGVycHJldGF0aW9uPC9oND4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSB3b3JkcyBvZiB3aGljaCB0aGUgaW5pdGlhbCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQgaGF2ZSBtZWFuaW5ncwogICAgICAgICAgZGVmaW5lZCB1bmRlciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMuIFRoZSBmb2xsb3dpbmcgZGVmaW5pdGlvbnMKICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHNhbWUgbWVhbmluZyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhleSBhcHBlYXIgaW4KICAgICAgICAgIHNpbmd1bGFyIG9yIGluIHBsdXJhbC4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5EZWZpbml0aW9uczwvaDQ+CiAgICAgICAgPHA+Rm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIFByaXZhY3kgUG9saWN5OjwvcD4KCiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkFwcGxpY2F0aW9uPC9zdHJvbmc+IHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLCB0aGUgc29mdHdhcmUKICAgICAgICAgICAgcHJvZ3JhbSBwcm92aWRlZCBieSB0aGUgQ29tcGFueS4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueTwvc3Ryb25nPiAocmVmZXJyZWQgdG8gYXMgZWl0aGVyICJ0aGUgQ29tcGFueSIsICJXZSIsCiAgICAgICAgICAgICJVcyIgb3IgIk91ciIgaW4gdGhpcyBBZ3JlZW1lbnQpIHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5EZXZpY2U8L3N0cm9uZz4gbWVhbnMgYW55IGRldmljZSB0aGF0IGNhbiBhY2Nlc3MgdGhlIFNlcnZpY2UKICAgICAgICAgICAgc3VjaCBhcyBhIGNvbXB1dGVyLCBhIGNlbGxwaG9uZSBvciBhIGRpZ2l0YWwgdGFibGV0LgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5QZXJzb25hbCBEYXRhPC9zdHJvbmc+IGlzIGFueSBpbmZvcm1hdGlvbiB0aGF0IHJlbGF0ZXMgdG8gYW4KICAgICAgICAgICAgaWRlbnRpZmllZCBvciBpZGVudGlmaWFibGUgaW5kaXZpZHVhbC4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5TZXJ2aWNlPC9zdHJvbmc+IHJlZmVycyB0byB0aGUgQXBwbGljYXRpb24uPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Vc2FnZSBEYXRhPC9zdHJvbmc+IHJlZmVycyB0byBkYXRhIGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5LAogICAgICAgICAgICBlaXRoZXIgZ2VuZXJhdGVkIGJ5IHRoZSB1c2Ugb2YgdGhlIFNlcnZpY2Ugb3IgZnJvbSB0aGUgU2VydmljZQogICAgICAgICAgICBpbmZyYXN0cnVjdHVyZSBpdHNlbGYuCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPllvdTwvc3Ryb25nPiBtZWFucyB0aGUgaW5kaXZpZHVhbCBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlCiAgICAgICAgICAgIFNlcnZpY2UsIG9yIHRoZSBjb21wYW55LCBvciBvdGhlciBsZWdhbCBlbnRpdHkgb24gYmVoYWxmIG9mIHdoaWNoCiAgICAgICAgICAgIHN1Y2ggaW5kaXZpZHVhbCBpcyBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFNlcnZpY2UsIGFzIGFwcGxpY2FibGUuCiAgICAgICAgICA8L2xpPgogICAgICAgIDwvdWw+CgogICAgICAgIDxoMz5Db2xsZWN0aW5nIGFuZCBVc2luZyBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgoKICAgICAgICA8aDQ+VHlwZXMgb2YgRGF0YSBOb3QgQ29sbGVjdGVkPC9oND4KCiAgICAgICAgPGg1PlBlcnNvbmFsIERhdGE8L2g1PgogICAgICAgIDxwPgogICAgICAgICAgV2hpbGUgdXNpbmcgT3VyIFNlcnZpY2UsIFdlIHdpbGwgbm90IGFzayBZb3UgdG8gcHJvdmlkZSBVcyB3aXRoCiAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiB0aGF0IHdvdWxkIGJlIHVzZWQgdG8gY29udGFjdCBvcgogICAgICAgICAgaWRlbnRpZnkgWW91LgogICAgICAgIDwvcD4KCiAgICAgICAgPGg1PlVzYWdlIERhdGE8L2g1PgogICAgICAgIDxwPlVzYWdlIERhdGEgaXMgbm90IGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgdGhlIFNlcnZpY2UuPC9wPgoKICAgICAgICA8aDU+TG9jYWwgU3RvcmFnZTwvaDU+CiAgICAgICAgPHA+CiAgICAgICAgICBTcHJpdGUgR2FyZGVuIHVzZXMgeW91ciBicm93c2VyJ3MgbG9jYWwgc3RvcmFnZSB0byBzYXZlIHlvdXIgZ2FtZQogICAgICAgICAgcHJvZ3Jlc3Mgb24geW91ciBkZXZpY2UuIFRoaXMgZGF0YSBuZXZlciBsZWF2ZXMgeW91ciBkZXZpY2UgYW5kIGlzIG5vdAogICAgICAgICAgdHJhbnNtaXR0ZWQgdG8gYW55IHNlcnZlcnMuIFlvdSBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoaXMgZGF0YSBhbmQKICAgICAgICAgIGNhbiBjbGVhciBpdCBhdCBhbnkgdGltZSB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5UcmFja2luZyBUZWNobm9sb2dpZXM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgV2UgZG8gbm90IHVzZSBDb29raWVzIG9yIHNpbWlsYXIgdHJhY2tpbmcgdGVjaG5vbG9naWVzIHRvIHRyYWNrCiAgICAgICAgICBhY3Rpdml0eSBvbiBPdXIgU2VydmljZS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Vc2Ugb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD5UaGUgQ29tcGFueSBkb2VzIG5vdCB1c2UgUGVyc29uYWwgRGF0YSBmb3IgYW55IHB1cnBvc2VzLjwvcD4KCiAgICAgICAgPGgzPlJldGVudGlvbiBvZiBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgVGhlIENvbXBhbnkgZG9lcyBub3QgcmV0YWluIFlvdXIgUGVyc29uYWwgRGF0YS4gQWxsIGdhbWUgZGF0YSBpcwogICAgICAgICAgc3RvcmVkIGxvY2FsbHkgb24geW91ciBkZXZpY2Ugb25seS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5EaXNjbG9zdXJlIG9mIFlvdXIgUGVyc29uYWwgRGF0YTwvaDM+CgogICAgICAgIDxoND5CdXNpbmVzcyBUcmFuc2FjdGlvbnM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgSWYgdGhlIENvbXBhbnkgaXMgaW52b2x2ZWQgaW4gYSBtZXJnZXIsIGFjcXVpc2l0aW9uIG9yIGFzc2V0IHNhbGUsCiAgICAgICAgICBZb3VyIFBlcnNvbmFsIERhdGEgd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+U2VjdXJpdHkgb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSBzZWN1cml0eSBvZiBZb3VyIFBlcnNvbmFsIERhdGEgaXMgaW1wb3J0YW50IHRvIFVzLiBTaW5jZSBhbGwgZ2FtZQogICAgICAgICAgZGF0YSBpcyBzdG9yZWQgbG9jYWxseSBvbiB5b3VyIGRldmljZSBhbmQgbmV2ZXIgdHJhbnNtaXR0ZWQgdG8KICAgICAgICAgIGV4dGVybmFsIHNlcnZlcnMsIHRoZSBzZWN1cml0eSBvZiB5b3VyIGRhdGEgaXMgbGFyZ2VseSBkZXBlbmRlbnQgb24KICAgICAgICAgIHlvdXIgZGV2aWNlJ3Mgc2VjdXJpdHkgbWVhc3VyZXMuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+TGlua3MgdG8gT3RoZXIgV2Vic2l0ZXM8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgT3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgd2Vic2l0ZXMgdGhhdCBhcmUgbm90IG9wZXJhdGVkCiAgICAgICAgICBieSBVcy4gSWYgWW91IGNsaWNrIG9uIGEgdGhpcmQgcGFydHkgbGluaywgWW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8KICAgICAgICAgIHRoYXQgdGhpcmQgcGFydHkncyBzaXRlLiBXZSBzdHJvbmdseSBhZHZpc2UgWW91IHRvIHJldmlldyB0aGUgUHJpdmFjeQogICAgICAgICAgUG9saWN5IG9mIGV2ZXJ5IHNpdGUgWW91IHZpc2l0LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSBoYXZlIG5vIGNvbnRyb2wgb3ZlciBhbmQgYXNzdW1lIG5vIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgY29udGVudCwKICAgICAgICAgIHByaXZhY3kgcG9saWNpZXMgb3IgcHJhY3RpY2VzIG9mIGFueSB0aGlyZCBwYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5DaGFuZ2VzIHRvIHRoaXMgUHJpdmFjeSBQb2xpY3k8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgV2UgbWF5IHVwZGF0ZSBPdXIgUHJpdmFjeSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUuIFdlIHdpbGwgbm90aWZ5IFlvdQogICAgICAgICAgb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IHdpdGhpbiB0aGUKICAgICAgICAgIGFwcGxpY2F0aW9uLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSB3aWxsIHVwZGF0ZSB0aGUgIkxhc3QgdXBkYXRlZCIgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoaXMgUHJpdmFjeQogICAgICAgICAgUG9saWN5LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBZb3UgYXJlIGFkdmlzZWQgdG8gcmV2aWV3IHRoaXMgUHJpdmFjeSBQb2xpY3kgcGVyaW9kaWNhbGx5IGZvciBhbnkKICAgICAgICAgIGNoYW5nZXMuIENoYW5nZXMgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBhcmUgZWZmZWN0aXZlIHdoZW4gdGhleSBhcmUKICAgICAgICAgIHBvc3RlZC4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhpcyBQcml2YWN5IFBvbGljeSwgWW91IGNhbiBjb250YWN0CiAgICAgICAgICB1czoKICAgICAgICA8L3A+CiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPkJ5IGVtYWlsOiBhZG1pbkBjcmVhdGl2ZWluZHVzdHJpYWwuY29tPC9saT4KICAgICAgICA8L3VsPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),l=c.parseFromString(n,"text/html").querySelector(`.${o}`);t.innerHTML=l.innerHTML,this.shadow.append(t),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=t,this.initEventListeners(),t}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function Ci(a,e){let o=Uo(()=>{qe(e,k)},200);new ResizeObserver(c=>{o()}).observe(e.host),(function(c,n){let l=n.getElementById("aboutBtn");l&&l.addEventListener("click",async function(){try{await(async function(i,I){let r=new Wn(i,I);return await r.createDialog("about"),r.show(),r})(c.document,n)}catch(i){console.error("Failed to open about dialog:",i),alert("Failed to open about dialog. Check console for details.")}});let g=n.getElementById("examplesBtn");g&&g.addEventListener("click",async function(){try{await(async function(i,I){let r=new Zn(i,I);return await r.createDialog("examples","src/api"),r.show(),r})(c.document,n)}catch(i){console.error("Failed to open examples dialog:",i),alert("Failed to open examples dialog. Check console for details.")}});let d=n.getElementById("privacyBtn");d&&d.addEventListener("click",async function(){try{await(async function(i,I){let r=new Rn(i,I);return await r.createDialog("privacy"),r.show(),r})(c.document,n)}catch(i){console.error("Failed to open privacy dialog:",i),alert("Failed to open privacy dialog. Check console for details.")}})})(a,e),(function(c){let n=c.querySelector('[data-key="x"].middle');n&&(n.addEventListener("click",async()=>await Gn(c)),n.addEventListener("touchstart",async()=>await Gn(c)))})(e),jo(e),Po(e);let t=e.getElementById("customizeColorsBtn");if(t){let c=a.spriteGarden.config;t.addEventListener("click",async()=>{let n=c.currentResolution.get();if(n==="400")return c.currentResolution.set("800"),qe(e,c),void(await yo(a)).dialog.addEventListener("close",()=>{c.currentResolution.set(n),qe(e,c)});await yo(a)})}}function ui(a,e){new li(l=>{e.getElementById("mapEditor").removeAttribute("hidden"),e.getElementById("customizeColorsBtnContainer").removeAttribute("hidden"),e.getElementById("examplesBtnContainer").removeAttribute("hidden"),e.querySelector('option[value="fullscreen"]').removeAttribute("hidden");let g=e.getElementById("customizeColorsDialog");g&&g.querySelectorAll("[hidden]").forEach(d=>d.removeAttribute("hidden")),e.querySelector('#settings > [class="ui-grid__corner--container"]').removeAttribute("hidden"),l.disable()}),e.addEventListener("keydown",async l=>{let g=l.key.toLowerCase();e.host.keys[g]=!0,g==="enter"&&l.target instanceof HTMLInputElement&&l.target.getAttribute("id")==="worldSeedInput"&&o(),g==="escape"&&e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden"),g==="s"&&l.ctrlKey&&(l.preventDefault(),e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")),!(g>="0"&&g<="9"||g==="backspace"||g==="delete"||g==="escape")&&(g==="r"&&l.ctrlKey&&(l.preventDefault(),t()),g==="g"&&l.ctrlKey&&(l.preventDefault(),o()),g==="e"&&(l.preventDefault(),Fo()),g==="x"&&(l.preventDefault(),await Gn(e)),g==="f"&&Oo(V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),k.TILES,k.TILE_SIZE.get(),V.world.get(),k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get()),g==="r"&&Ho(V.growthTimers,V.plantStructures,V.player,k.TILES,k.TILE_SIZE.get(),V.world,k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get(),V.waterPhysicsQueue,k.breakMode.get()),["u","i","o","j","k","l","m",",","."].includes(g)&&await pn(g,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),k.TILES,k.TILE_SIZE.get(),V.world.get(),k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get()),l.preventDefault())}),e.getElementById("toggleFog").addEventListener("click",function(){e.getElementById("fogModeText").textContent!=="Clear"?k.fogMode.set("clear"):k.fogMode.set("fog")});function o(){let l=null,g=e.getElementById("worldSeedInput");g instanceof HTMLInputElement&&(l=g.value);let d=e.getElementById("currentSeed"),i=k.WORLD_HEIGHT.get(),I=k.WORLD_WIDTH.get(),r=tt(k.BIOMES,k.SURFACE_LEVEL.get(),k.TILE_SIZE.get(),k.TILES,i,I,k.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,Number(l));V.world.set(r);let s=xe(a,e),u=wt(k.isFogScaled,i,I,s);V.exploredMap.set(u),console.log(`Generated new world with seed: ${l}`),d.textContent=l}function t(){let l=e.getElementById("currentSeed"),g=e.getElementById("worldSeedInput"),d=Ve(),i=k.WORLD_HEIGHT.get(),I=k.WORLD_WIDTH.get(),r=tt(k.BIOMES,k.SURFACE_LEVEL.get(),k.TILE_SIZE.get(),k.TILES,i,I,k.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,d);V.world.set(r);let s=xe(a,e),u=wt(k.isFogScaled,i,I,s);V.exploredMap.set(u),console.log(`Generated new world with random seed: ${d}`),g instanceof HTMLInputElement&&(g.value=String(d)),l.textContent=String(d)}e.getElementById("worldState").addEventListener("click",function(){e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")}),e.getElementById("generateWithSeed").addEventListener("click",o),e.getElementById("randomSeed").addEventListener("click",t),e.getElementById("copySeed").addEventListener("click",async function(){let l=e.getElementById("worldSeedInput");l instanceof HTMLInputElement&&await(async function(g,d){let i=g.navigator;if(i.clipboard&&g.isSecureContext)try{await i.clipboard.writeText(d)}catch{}})(a,l.value)});let c=e.getElementById("saveModeToggle");St().then(async l=>{let g=l==="auto"?"auto":"manual";if(console.log("Save Mode:",g),g==="auto")return c.innerText="Save Mode Auto",void(c.style.backgroundColor="var(--sg-color-green-500)");c.innerText="Save Mode Manual",c.style.backgroundColor="var(--sg-color-red-500)"}),c.addEventListener("click",async function(){let l=await St()==="auto"?"auto":"manual";if(l==="manual")return c.innerText="Save Mode Auto",c.style.backgroundColor="var(--sg-color-green-500)",await lo("auto"),void await Bn(a);l==="auto"&&(c.innerText="Save Mode Manual",c.style.backgroundColor="var(--sg-color-red-500)",await lo("manual"))}),e.getElementById("saveCompressedState").addEventListener("click",async function(){try{let l=Et(a),g=JSON.stringify(l);await Nr(a,g),console.log("Game state saved successfully")}catch(l){console.error("Failed to save game state:",l),alert("Failed to save game state. Check console for details.")}}),e.getElementById("loadCompressedState").addEventListener("click",async function(){try{let l=e.getElementById("currentSeed"),g=e.getElementById("worldSeedInput"),d,i;if(a.showOpenFilePicker){let[s]=await a.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/gzip":[".sgs"]}}]});d=await s.getFile()}else{let s=a.document.createElement("input");s.type="file",s.accept=".sgs",s.style.display="none",e.append(s);let u=new Promise(m=>{s.onchange=()=>m(s.files[0])});s.click(),d=await u,e.removeChild(s)}if("DecompressionStream"in a){let s=d.stream().pipeThrough(new DecompressionStream("gzip"));i=await(await new Response(s).blob()).text()}let I=JSON.parse(i);Nn(a,e,I);let{worldSeed:r}=I.config;g instanceof HTMLInputElement&&(g.value=r),l.textContent=r,console.log("Game state loaded successfully")}catch(l){console.error("Failed to load game state:",l),alert("Failed to load game state. Check console for details.")}});let n=e.getElementById("useStorageBtn");n&&n.addEventListener("click",async function(){try{await(async function(l,g,d){let i=new un(l,g,d);return await i.createDialog(),i.show(),i})(a,a.document,e)}catch(l){console.error("Failed to open storage dialog:",l),alert("Failed to open storage dialog. Check console for details.")}}),e.querySelectorAll(".ui-grid__corner").forEach(l=>{l.querySelector(".ui-grid__corner--heading").addEventListener("click",g=>(function(d){d.preventDefault(),d.stopPropagation();let i=d.currentTarget;if(i instanceof HTMLDivElement){let I=i.nextElementSibling;if(I.getAttribute("hidden")!==null)return void I.removeAttribute("hidden");I.setAttribute("hidden","hidden")}})(g))})}function Ai(a,e){e.getElementById("controls").addEventListener("click",g=>{g.stopPropagation(),g.preventDefault(),e.querySelector(".touch-controls").toggleAttribute("hidden")});let o=e.getElementById("resolutionSelect");o&&o.addEventListener("change",g=>{g.currentTarget instanceof HTMLSelectElement&&(k.currentResolution.set(g.currentTarget.value),qe(e,k))});let t=e.getElementById("initNewWorld");t&&(t.addEventListener("click",()=>{let g=null,d=e.getElementById("worldSeedInput");d instanceof HTMLInputElement&&(g=d.value),e.getElementById("currentSeed").textContent=g;let i=k.WORLD_HEIGHT.get(),I=k.WORLD_WIDTH.get(),r=tt(k.BIOMES,k.SURFACE_LEVEL.get(),k.TILE_SIZE.get(),k.TILES,i,I,k.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,Number(g));V.world.set(r);let s=xe(a,e),u=wt(k.isFogScaled,i,I,s);V.exploredMap.set(u)}),e.querySelectorAll(".seed-btn").forEach(g=>{g.addEventListener("click",d=>{(function(i,I){if(!(I.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[r]=Object.keys(I.currentTarget.dataset);for(let m of I.currentTarget.parentElement.children)m.classList.remove("selected");I.currentTarget.classList.toggle("selected"),console.log(`Selecting seed: ${r}`);let s=i.selectedSeedType.get();console.log(`Current selected: ${s}`);let u=s===r.toUpperCase()?null:r.toUpperCase();i.selectedSeedType.set(u),console.log(`New selected: ${u}`)})(V,d)})}),e.querySelectorAll(".material-btn").forEach(g=>{g.addEventListener("click",d=>{(function(i,I){if(!(I.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[r]=Object.keys(I.currentTarget.dataset);for(let m of I.currentTarget.parentElement.children)m.classList.remove("selected");I.currentTarget.classList.toggle("selected"),console.log(`Selecting material: ${r}`);let s=i.selectedMaterialType.get();console.log(`Current selected material: ${s}`);let u=s===r.toUpperCase()?null:r.toUpperCase();i.selectedMaterialType.set(u),console.log(`New selected material: ${u}`)})(V,d)})}));let c=e.getElementById("toggleView");c&&c.addEventListener("click",()=>V.viewMode.set(V.viewMode.get()==="normal"?"xray":"normal"));let n=e.getElementById("toggleBreakMode");n&&n.addEventListener("click",()=>Fo());let l=e.getElementById("resolutionSelect");l instanceof HTMLSelectElement&&(l.value="400")}function bi(a){let e=a.host;a.querySelectorAll(".touch-btn").forEach(o=>{let t=o.getAttribute("data-key"),c=!1,n=null;function l(){e.touchKeys[t]=!0,o instanceof HTMLButtonElement&&(o.style.background="var(--sg-color-gray-alpha-30)"),t==="f"&&Oo(V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),k.TILES,k.TILE_SIZE.get(),V.world.get(),k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get()),t==="r"&&Ho(V.growthTimers,V.plantStructures,V.player,k.TILES,k.TILE_SIZE.get(),V.world,k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get(),V.waterPhysicsQueue,k.breakMode.get())}function g(){c||(c=!0,l(),t!=="f"&&t!=="r"||(n=setInterval(l,100)))}function d(){c=!1,e.touchKeys[t]=!1,o instanceof HTMLButtonElement&&(o.style.background="var(--sg-ui-touch-btn-background-color)"),n&&(clearInterval(n),n=null)}o.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),g()}),o.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),d()}),o.addEventListener("touchcancel",i=>{i.preventDefault(),i.stopPropagation(),d()}),o.addEventListener("mousedown",i=>{i.preventDefault(),i.stopPropagation(),g()}),o.addEventListener("mouseup",i=>{i.preventDefault(),i.stopPropagation(),d()}),o.addEventListener("mouseleave",i=>{i.preventDefault(),i.stopPropagation(),d()})}),a.querySelectorAll(".touch-btn.place-block").forEach(o=>{o.addEventListener("touchstart",async()=>await pn(o.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),k.TILES,k.TILE_SIZE.get(),V.world.get(),k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get())),o.addEventListener("click",async()=>await pn(o.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),k.TILES,k.TILE_SIZE.get(),V.world.get(),k.WORLD_HEIGHT.get(),k.WORLD_WIDTH.get()))}),a.addEventListener("keyup",o=>{e.keys[o.key.toLowerCase()]=!1,o.preventDefault()}),a.addEventListener("touchstart",o=>{(o.target instanceof HTMLDivElement&&o.target.closest(".touch-controls")||o.target===a.getElementById("canvas"))&&o.preventDefault()},{passive:!1}),a.addEventListener("touchmove",o=>{(o.target instanceof HTMLDivElement&&o.target.closest(".touch-controls")||o.target===a.getElementById("canvas"))&&o.preventDefault()},{passive:!1}),a.addEventListener("touchend",o=>{(o.target instanceof HTMLDivElement&&o.target.closest(".touch-controls")||o.target===a.getElementById("canvas"))&&o.preventDefault()},{passive:!1}),a.addEventListener("contextmenu",o=>{(o.target instanceof HTMLDivElement&&o.target.closest(".touch-controls")||o.target===a.getElementById("canvas"))&&o.preventDefault()}),a.addEventListener("dblclick",o=>{(o.target instanceof HTMLDivElement&&o.target.closest(".touch-controls")||o.target===a.getElementById("canvas"))&&o.preventDefault()})}function cn(a,e,o,t,c,n,l,g,d){let i=(function(u,m,p){let h,y;if(u instanceof MouseEvent)h=u.clientX,y=u.clientY;else{if(!(u.touches&&u.touches.length>0))return;h=u.touches[0].clientX,y=u.touches[0].clientY}if(h===void 0||y===void 0||!isFinite(h)||!isFinite(y)||!isFinite(p)||p<=0)return;let R=m.getBoundingClientRect(),W=m.width/R.width*p,E=m.height/R.height*p;return isFinite(W)&&isFinite(E)?{x:(h-R.left)*W,y:(y-R.top)*E}:void 0})(a,e,t),I=o.get(),r=Math.floor((i.x+I.x)/n),s=Math.floor((i.y+I.y)/n);if(r>=0&&r<d&&s>=0&&s<g){let u=l.getTile?l.getTile(r,s):null;if(!u||u===c.AIR)return void(e.title=`Tile: AIR (${r}, ${s})`);let m=Object.keys(c).find(p=>c[p]===u)||"Custom";e.title=`Tile: ${m} (${r}, ${s})`}}function mi(){z.isDragging=!1,z.lastPaintedTile=null}function hi(a,e,o,t,c,n,l,g){a.addEventListener("mousedown",d=>(function(i,I,r,s,u,m,p){if(!(i.target instanceof HTMLCanvasElement))return;let h=i.target.getBoundingClientRect(),y=i.clientX-h.left,R=i.clientY-h.top;return bo(y,R,I,r,s,u,m,p)?(pt(y,R,I,r,s,u,m,p,!0),void i.preventDefault()):void 0})(d,e,t,c,n,l,g)),a.addEventListener("mousemove",d=>(function(i,I,r,s,u,m,p,h){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target,R=y.getBoundingClientRect(),W=i.clientX-R.left,E=i.clientY-R.top;i.buttons===1&&z.isEnabled&&pt(W,E,I,s,u,m,p,h,!1)?i.preventDefault():cn(i,y,I,r,s,u,h.get(),m,p)})(d,e,o,t,c,n,l,g)),a.addEventListener("mouseup",()=>mi()),a.addEventListener("touchmove",d=>(function(i,I,r,s,u,m,p,h){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let R=y.getBoundingClientRect(),W=i.touches[0];if(pt(W.clientX-R.left,W.clientY-R.top,I,s,u,m,p,h,!1))return void i.preventDefault()}cn(i,y,I,r,s,u,h.get(),m,p)})(d,e,o,t,c,n,l,g)),a.addEventListener("touchstart",d=>(function(i,I,r,s,u,m,p,h){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let R=y.getBoundingClientRect(),W=i.touches[0],E=W.clientX-R.left,w=W.clientY-R.top;if(bo(E,w,I,s,u,m,p,h))return pt(E,w,I,s,u,m,p,h,!0),void i.preventDefault()}cn(i,y,I,r,s,u,h.get(),m,p)})(d,e,o,t,c,n,l,g))}function pi(a,e,o,t,c,n){let l=Math.floor(e.get().x/t);if(l>=0&&l<c){let g=Yo(l,o,n.get());a.textContent=g.name}}function yi(a,e,o,t,c){switch(t=Math.max(0,Math.min(1,t)),o){case"WHEAT":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.WHEAT_GROWING}),i;let I=Math.max(1,Math.ceil(4*g));for(let r=0;r<I;r++){let s=l-r;r<I-1||g<.8?i.push({x:n,y:s,tile:d.WHEAT_STALK}):i.push({x:n,y:s,tile:d.WHEAT_GRAIN}),g>.5&&r>0&&r<I-1&&(Math.random()<.4&&i.push({x:n-1,y:s,tile:d.WHEAT_STALK}),Math.random()<.4&&i.push({x:n+1,y:s,tile:d.WHEAT_STALK}))}if(g>.9){let r=l-I+1;i.push({x:n-1,y:r,tile:d.WHEAT_GRAIN}),i.push({x:n+1,y:r,tile:d.WHEAT_GRAIN})}return i})(a,e,t,c);case"CARROT":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.CARROT_GROWING}),i;if(g>.2){let r=Math.ceil(2*g);for(let s=1;s<=r;s++)i.push({x:n,y:l+s,tile:d.CARROT_ROOT})}let I=Math.max(1,Math.ceil(2*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.CARROT_LEAVES}),g>.5&&r===I-1&&(i.push({x:n-1,y:l-r,tile:d.CARROT_LEAVES}),i.push({x:n+1,y:l-r,tile:d.CARROT_LEAVES}));return i})(a,e,t,c);case"MUSHROOM":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.MUSHROOM_GROWING}),i;let I=Math.max(1,Math.ceil(3*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.MUSHROOM_STEM});if(g>.4){let r=l-I;i.push({x:n,y:r,tile:d.MUSHROOM_CAP}),g>.6&&(i.push({x:n-1,y:r,tile:d.MUSHROOM_CAP}),i.push({x:n+1,y:r,tile:d.MUSHROOM_CAP})),g>.8&&(i.push({x:n-1,y:r-1,tile:d.MUSHROOM_CAP}),i.push({x:n,y:r-1,tile:d.MUSHROOM_CAP}),i.push({x:n+1,y:r-1,tile:d.MUSHROOM_CAP}))}return i})(a,e,t,c);case"CACTUS":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.CACTUS_GROWING}),i;let I=Math.max(1,Math.ceil(5*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.CACTUS_BODY});if(g>.4&&I>2){let r=l-Math.floor(.6*I);i.push({x:n-1,y:r,tile:d.CACTUS_BODY}),g>.6&&i.push({x:n-1,y:r-1,tile:d.CACTUS_BODY})}if(g>.5&&I>3){let r=l-Math.floor(.7*I);i.push({x:n+1,y:r,tile:d.CACTUS_BODY}),g>.7&&i.push({x:n+1,y:r-1,tile:d.CACTUS_BODY})}if(g>.95){let r=l-I;i.push({x:n,y:r,tile:d.CACTUS_FLOWER})}return i})(a,e,t,c);case"WALNUT":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.TREE_GROWING}),i;let I=Ve(3,5),r=Math.max(1,Math.ceil(I*g));for(let s=0;s<r;s++){let u=l-s;i.push({x:n,y:u,tile:d.TREE_TRUNK})}if(g>.3){let s=l-r,u=Math.min(3,Math.ceil(5*(g-.3)));for(let m=-u;m<=u;m++)for(let p=-u;p<=1;p++){let h=n+m,y=s+p;Math.sqrt(m*m+p*p)<=u&&p<=0&&(i.find(R=>R.x===h&&R.y===y&&R.tile===d.TREE_TRUNK)||i.push({x:h,y,tile:d.TREE_LEAVES}))}}return i})(a,e,t,c);case"BERRY_BUSH":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.BERRY_BUSH_GROWING}),i;let I=Math.max(1,Math.ceil(3*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.BERRY_BUSH_BRANCH});if(g>.3){let r=l-I,s=Math.min(2,Math.ceil(3*(g-.3)));for(let u=-s;u<=s;u++)for(let m=0;m<=s;m++){let p=n+u,h=r+m,y=Math.abs(u)+Math.abs(m);y<=s&&y>0&&i.push({x:p,y:h,tile:d.BERRY_BUSH_LEAVES})}}if(g>.8){let r=l-I;Math.random()<.6&&i.push({x:n-1,y:r+1,tile:d.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:n+1,y:r+1,tile:d.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:n-1,y:r,tile:d.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:n+1,y:r,tile:d.BERRY_BUSH_BERRIES})}return i})(a,e,t,c);case"BAMBOO":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.BAMBOO_GROWING}),i;let I=Math.max(1,Math.ceil(7*g));for(let r=0;r<I;r++)r%2==0?i.push({x:n,y:l-r,tile:d.BAMBOO_JOINT}):i.push({x:n,y:l-r,tile:d.BAMBOO_STALK});if(g>.5){let r=l-I;i.push({x:n-1,y:r,tile:d.BAMBOO_LEAVES}),i.push({x:n+1,y:r,tile:d.BAMBOO_LEAVES}),g>.7&&(i.push({x:n-1,y:r+1,tile:d.BAMBOO_LEAVES}),i.push({x:n+1,y:r+1,tile:d.BAMBOO_LEAVES}))}return i})(a,e,t,c);case"SUNFLOWER":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.SUNFLOWER_GROWING}),i;let I=Math.max(1,Math.ceil(5*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.SUNFLOWER_STEM});if(g>.3)for(let s=2;s<I;s+=2)s%2==0?i.push({x:n-1,y:l-s,tile:d.SUNFLOWER_LEAVES}):i.push({x:n+1,y:l-s,tile:d.SUNFLOWER_LEAVES});if(g>.7){let r=l-I;i.push({x:n,y:r,tile:d.SUNFLOWER_CENTER}),g>.85&&(i.push({x:n-1,y:r,tile:d.SUNFLOWER_PETALS}),i.push({x:n+1,y:r,tile:d.SUNFLOWER_PETALS}),i.push({x:n,y:r-1,tile:d.SUNFLOWER_PETALS}),i.push({x:n,y:r+1,tile:d.SUNFLOWER_PETALS}))}return i})(a,e,t,c);case"CORN":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.CORN_GROWING}),i;let I=Math.max(1,Math.ceil(4*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.CORN_STALK});if(g>.4)for(let r=1;r<I;r++)r%2==1?i.push({x:n-1,y:l-r,tile:d.CORN_LEAVES}):i.push({x:n+1,y:l-r,tile:d.CORN_LEAVES});if(g>.7){let r=l-Math.floor(.6*I);i.push({x:n+1,y:r,tile:d.CORN_EAR}),g>.85&&i.push({x:n+1,y:r-1,tile:d.CORN_SILK})}return i})(a,e,t,c);case"PINE_TREE":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.PINE_TREE_GROWING}),i;let I=Math.max(1,Math.ceil(8*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.PINE_TRUNK});if(g>.25){let r=l-Math.floor(.3*I),s=Math.ceil(.7*I);for(let u=0;u<s;u++){let m=r-u,p=Math.max(1,Math.floor((s-u)/2));for(let h=-p;h<=p;h++)h===0&&u===0||i.push({x:n+h,y:m,tile:d.PINE_NEEDLES})}}if(g>.9){let r=l-Math.floor(.5*I);Math.random()<.5&&i.push({x:n-1,y:r,tile:d.PINE_CONE}),Math.random()<.5&&i.push({x:n+1,y:r,tile:d.PINE_CONE})}return i})(a,e,t,c);case"WILLOW_TREE":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.WILLOW_TREE_GROWING}),i;let I=Math.max(1,Math.ceil(6*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.WILLOW_TRUNK});if(g>.3){let r=l-I,s=Math.ceil(4*g);for(let u=0;u<s;u++)i.push({x:n-1-Math.floor(u/2),y:r+u,tile:d.WILLOW_BRANCHES}),g>.6&&u>0&&i.push({x:n-1-Math.floor(u/2),y:r+u,tile:d.WILLOW_LEAVES});for(let u=0;u<s;u++)i.push({x:n+1+Math.floor(u/2),y:r+u,tile:d.WILLOW_BRANCHES}),g>.6&&u>0&&i.push({x:n+1+Math.floor(u/2),y:r+u,tile:d.WILLOW_LEAVES})}if(g>.8){let r=l-I;i.push({x:n-2,y:r+2,tile:d.WILLOW_LEAVES}),i.push({x:n+2,y:r+2,tile:d.WILLOW_LEAVES}),i.push({x:n-3,y:r+3,tile:d.WILLOW_LEAVES}),i.push({x:n+3,y:r+3,tile:d.WILLOW_LEAVES})}return i})(a,e,t,c);case"FERN":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.FERN_GROWING}),i;let I=Math.max(1,Math.ceil(3*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.FERN_STEM});if(g>.3){let r=Math.ceil(2*g);for(let s=0;s<I;s++){let u=Math.min(r,s+1);for(let m=-u;m<=u;m++)m!==0&&i.push({x:n+m,y:l-s,tile:d.FERN_FROND})}}return i})(a,e,t,c);case"TULIP":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.TULIP_GROWING}),i;g>.15&&i.push({x:n,y:l+1,tile:d.TULIP_BULB});let I=Math.max(1,Math.ceil(3*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.TULIP_STEM});if(g>.3){let r=l-Math.floor(.5*I);i.push({x:n-1,y:r,tile:d.TULIP_LEAVES}),i.push({x:n+1,y:r,tile:d.TULIP_LEAVES})}if(g>.7){let r=l-I;i.push({x:n,y:r,tile:d.TULIP_PETALS}),g>.85&&(i.push({x:n-1,y:r,tile:d.TULIP_PETALS}),i.push({x:n+1,y:r,tile:d.TULIP_PETALS}),i.push({x:n,y:r-1,tile:d.TULIP_PETALS}))}return i})(a,e,t,c);case"AGAVE":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.AGAVE_GROWING}),i;if(i.push({x:n,y:l,tile:d.AGAVE_BASE}),g>.2){let I=Math.min(3,Math.ceil(4*(g-.2)));for(let r=-I;r<=I;r++)for(let s=-1;s<=1;s++){if(r===0&&s===0)continue;let u=Math.abs(r)+Math.abs(s);u<=I&&u>0&&i.push({x:n+r,y:l+s,tile:d.AGAVE_SPIKE})}}if(g>.8){let I=Math.ceil(30*(g-.8));for(let r=1;r<=I;r++)i.push({x:n,y:l-r,tile:d.AGAVE_FLOWER_STALK});if(g>.95){let r=l-I;i.push({x:n,y:r,tile:d.AGAVE_FLOWER}),i.push({x:n-1,y:r,tile:d.AGAVE_FLOWER}),i.push({x:n+1,y:r,tile:d.AGAVE_FLOWER})}}return i})(a,e,t,c);case"LAVENDER":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.LAVENDER_GROWING}),i;let I=Math.max(1,Math.ceil(2*g));if(g>.2&&(i.push({x:n,y:l,tile:d.LAVENDER_BUSH}),g>.4&&(i.push({x:n-1,y:l,tile:d.LAVENDER_BUSH}),i.push({x:n+1,y:l,tile:d.LAVENDER_BUSH}))),g>.5)for(let r=1;r<=I;r++)i.push({x:n,y:l-r,tile:d.LAVENDER_STEM}),g>.7&&r===I&&(i.push({x:n-1,y:l-r,tile:d.LAVENDER_STEM}),i.push({x:n+1,y:l-r,tile:d.LAVENDER_STEM}));if(g>.75){let r=l-I;i.push({x:n,y:r,tile:d.LAVENDER_FLOWERS}),g>.85&&(i.push({x:n-1,y:r,tile:d.LAVENDER_FLOWERS}),i.push({x:n+1,y:r,tile:d.LAVENDER_FLOWERS}))}return i})(a,e,t,c);case"KELP":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.KELP_GROWING}),i;let I=Math.max(1,Math.ceil(6*g));for(let r=0;r<I;r++){let s=Math.floor(1.5*Math.sin(.5*r));i.push({x:n+s,y:l-r,tile:d.KELP_BLADE}),g>.5&&r%2==1&&r<I-1&&i.push({x:n+s,y:l-r,tile:d.KELP_BULB})}return i})(a,e,t,c);case"ROSE":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.ROSE_GROWING}),i;let I=Math.max(1,Math.ceil(4*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.ROSE_STEM}),g>.3&&r>0&&r<I-1&&(r%2==0?i.push({x:n-1,y:l-r,tile:d.ROSE_THORNS}):i.push({x:n+1,y:l-r,tile:d.ROSE_THORNS}));if(g>.4)for(let r=1;r<I;r+=2)i.push({x:n-1,y:l-r,tile:d.ROSE_LEAVES}),i.push({x:n+1,y:l-r,tile:d.ROSE_LEAVES});if(g>.6){let r=l-I;i.push({x:n,y:r,tile:d.ROSE_BUD})}if(g>.85){let r=l-I;i.push({x:n,y:r,tile:d.ROSE_BLOOM}),i.push({x:n-1,y:r,tile:d.ROSE_BLOOM}),i.push({x:n+1,y:r,tile:d.ROSE_BLOOM}),i.push({x:n,y:r-1,tile:d.ROSE_BLOOM})}return i})(a,e,t,c);case"PUMPKIN":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.PUMPKIN_GROWING}),i;if(g>.2){let I=Math.ceil(3*g);for(let r=0;r<I;r++)i.push({x:n+r,y:l,tile:d.PUMPKIN_VINE}),i.push({x:n-r,y:l,tile:d.PUMPKIN_VINE})}if(g>.4){let r=Math.ceil(3*g);for(let s=2;s<r;s+=2)i.push({x:n+s,y:l-1,tile:d.PUMPKIN_LEAVES}),i.push({x:n-s,y:l-1,tile:d.PUMPKIN_LEAVES})}if(g>.6){let I=Math.ceil(5*(g-.6));i.push({x:n,y:l,tile:d.PUMPKIN_FRUIT}),I>1&&(i.push({x:n+1,y:l,tile:d.PUMPKIN_FRUIT}),i.push({x:n-1,y:l,tile:d.PUMPKIN_FRUIT})),I>2&&(i.push({x:n+1,y:l+1,tile:d.PUMPKIN_FRUIT}),i.push({x:n-1,y:l+1,tile:d.PUMPKIN_FRUIT}))}return g>.9&&i.push({x:n,y:l-1,tile:d.PUMPKIN_STEM}),i})(a,e,t,c);case"LOTUS":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.LOTUS_GROWING}),i;if(g>.2){let I=Math.ceil(2*g);for(let r=1;r<=I;r++)i.push({x:n,y:l+r,tile:d.LOTUS_STEM})}if(g>.4&&(i.push({x:n,y:l,tile:d.LOTUS_PAD}),g>.6&&(i.push({x:n-1,y:l,tile:d.LOTUS_PAD}),i.push({x:n+1,y:l,tile:d.LOTUS_PAD}))),g>.7&&i.push({x:n,y:l-1,tile:d.LOTUS_BUD}),g>.85){let I=l-1;i.push({x:n,y:I,tile:d.LOTUS_FLOWER}),i.push({x:n-1,y:I,tile:d.LOTUS_FLOWER}),i.push({x:n+1,y:I,tile:d.LOTUS_FLOWER}),i.push({x:n,y:I-1,tile:d.LOTUS_FLOWER})}return i})(a,e,t,c);case"BIRCH":return(function(n,l,g,d){let i=[];if(g<.1)return i.push({x:n,y:l,tile:d.BIRCH_GROWING}),i;let I=Math.max(1,Math.ceil(7*g));for(let r=0;r<I;r++)i.push({x:n,y:l-r,tile:d.BIRCH_TRUNK}),g>.3&&r%2==1&&i.push({x:n,y:l-r,tile:d.BIRCH_BARK});if(g>.5){let r=l-Math.floor(.7*I);i.push({x:n-1,y:r,tile:d.BIRCH_BRANCHES}),i.push({x:n+1,y:r,tile:d.BIRCH_BRANCHES}),g>.7&&(i.push({x:n-2,y:r,tile:d.BIRCH_BRANCHES}),i.push({x:n+2,y:r,tile:d.BIRCH_BRANCHES}))}if(g>.6){let r=l-I,s=2;for(let u=-s;u<=s;u++)for(let m=-s;m<=1;m++)Math.abs(u)+Math.abs(m)<=s+1&&m<=0&&(u===0&&m>-I||i.push({x:n+u,y:r+m,tile:d.BIRCH_LEAVES}))}if(g>.9){let r=l-I;i.push({x:n-1,y:r+1,tile:d.BIRCH_CATKINS}),i.push({x:n+1,y:r+1,tile:d.BIRCH_CATKINS})}return i})(a,e,t,c);default:return[{x:a,y:e,tile:c.WHEAT_GROWING}]}}function vi(a,e,o,t,c,n){let l=!1,g=!1,d=t.get(),i=j({},a.get()),I=j({},e.get());for(let[r,s]of Object.entries(i)){if(s.timeLeft-=1/60,I[r]){let u=I[r],m=Math.max(0,Math.min(1,1-s.timeLeft/o[s.seedType].growthTime));u.blocks&&u.blocks.forEach(y=>{y.x>=0&&y.x<n&&y.y>=0&&y.y<c&&d.getTile(y.x,y.y)!==o.AIR&&d.setTile(y.x,y.y,o.AIR)});let[p,h]=r.split(",").map(Number);u.blocks=yi(p,h,s.seedType,m,o),u.blocks.forEach(y=>{y.x>=0&&y.x<n&&y.y>=0&&y.y<c&&d.setTile(y.x,y.y,y.tile)}),g=!0}s.timeLeft<=0&&(I[r]&&(I[r].mature=!0,I[r].seedType=s.seedType),delete i[r],l=!0)}l&&a.set(i),g&&e.set(I)}function fi(a,e,o,t){let c=Math.floor(e.get().y/t),n="Surface";if(c>o){let l=c-o;n=l<15?"Shallow":l<30?"Deep":"Very Deep"}else c<o-5&&(n="Sky");a.textContent=n}function vo(a,e,o,t,c,n,l,g){return[[l,g],[l+o,g],[l,g+a],[l+o,g+a],[l+o/2,g],[l+o/2,g+a],[l,g+a/2],[l+o,g+a/2]].some(d=>(function(i,I,r,s,u,m){if(!I||typeof I.getTile!="function")return console.error("isSolid: Invalid world object",{hasWorld:!!I,worldType:typeof I,hasGetTile:I?typeof I.getTile:"N/A",args:{tileSize:i,worldHeight:r,worldWidth:s,x:u,y:m},stack:new Error().stack}),!0;let p=Math.floor(u/i),h=Math.floor(m/i);if(p<0||p>=s||h<0||h>=r)return!0;let y=I.getTile(p,h);return y&&y.solid})(e,t,c,n,d[0],d[1]))}function Ce(a,e){let o=a.host;return!!(o&&typeof o=="object"&&"keys"in o&&"touchKeys"in o)&&(o.keys[e]||o.touchKeys[e])}function Gi(a,e,o,t,c,n,l,g,d,i,I,r=1){let s=d.get(),u=g.get(),m=l.get();s.velocityY+=e,s.velocityY>o&&(s.velocityY=o);let p=0,h=0;if(Ce(I,"upleft")?(p=-1,h=-1,s.lastDirection=-1):Ce(I,"upright")?(p=1,h=-1,s.lastDirection=1):Ce(I,"downleft")?(p=-1,h=1,s.lastDirection=-1):Ce(I,"downright")?(p=1,h=1,s.lastDirection=1):(Ce(I,"a")||Ce(I,"arrowleft")?(p=-1,s.lastDirection=-1):(Ce(I,"d")||Ce(I,"arrowright"))&&(p=1,s.lastDirection=1),Ce(I,"s")&&(h=1)),p!==0){let w=p*s.speed*r;Math.abs(s.velocityX)<.5||Math.sign(s.velocityX)!==Math.sign(w)?s.velocityX=.3*w:s.velocityX=w}else s.velocityX*=a,s.lastDirection=0;(Ce(I,"w")||Ce(I,"arrowup")||Ce(I," ")||Ce(I,"upleft")||Ce(I,"upright"))&&s.onGround&&(s.velocityY=-s.jumpPower,s.onGround=!1),p!==0&&h!==0&&(s.velocityX*=.707);let y=s.x+s.velocityX;vo(s.height,t,s.width,m,c,n,y,s.y)?s.velocityX=0:s.x=y;let R=s.y+s.velocityY;vo(s.height,t,s.width,m,c,n,s.x,R)?(s.velocityY>0&&(s.onGround=!0),s.velocityY=0):(s.y=R,s.onGround=!1),s.x=Math.max(0,Math.min(s.x,n*t-s.width)),s.y=Math.max(0,Math.min(s.y,c*t-s.height));let W=s.x+s.width/2-i.width/2,E=s.y+s.height/2-i.height/2;u.x+=.1*(W-u.x),u.y+=.1*(E-u.y),u.x=Math.max(0,Math.min(u.x,n*t-i.width)),u.y=Math.max(0,Math.min(u.y,c*t-i.height))}var fo=performance.now(),ft=0,ze={player:{x:0,y:0},camera:{x:0,y:0}},dn=null,Go=0;async function Wi(){let a=Date.now();return(a-Go>1e3||dn===null)&&(dn=await Q.getItem("sprite-garden-movement-scale"),Go=a),dn}async function Sn(a,e,o,t,c,n,l,g,d,i,I,r,s,u,m,p,h,y,R,W,E,w,M,x,U,D,F,q,ee,be,ae){if(q.get())return void q.set(!1);let ue=performance.now(),Se=Math.min(ue-fo,250);fo=ue,ft+=Se;let ve=0;for(;ft>=20&&ve<20;){let te=F.get(),le=w.get();ze.player.x=te.x,ze.player.y=te.y,ze.camera.x=le.x,ze.camera.y=le.y,Gi(I,r,u,p,R,W,ae,w,F,a,o,await Wi()),vi(U,D,h,ae,R,W),Xo(h,y,be,ae,R,W),pi(t,F,g,p,W,E),fi(c,F,m,p),x.set(x.get()+.02),ft-=20,ve++}(function(te,le,nt,we,ge,Nt,kt,Bt,Vt,xt,ot,Yt,Xt,me,Ye,ce,Jt){let he=le.get(),Ee=nt.get(),Oe=kt.get(),Me=Xt.get(),De=me.player.x+(he.x-me.player.x)*Ye,rt=me.player.y+(he.y-me.player.y)*Ye,Te=me.camera.x+(Ee.x-me.camera.x)*Ye,Ne=me.camera.y+(Ee.y-me.camera.y)*Ye,ne=te.getContext("2d");ne.fillStyle=ce.air,ne.fillRect(0,0,te.width,te.height);let it=Math.ceil(te.width/ge)+1,at=Math.ceil(te.height/ge)+1,lt=Math.floor(Te/ge),gt=Math.floor(Ne/ge);for(let pe=0;pe<it;pe++)for(let fe=0;fe<at;fe++){let Ge=lt+pe,je=gt+fe;if(Ge>=0&&Ge<Vt&&je>=0&&je<Bt){let ye=Oe.getTile(Ge,je);if(!ye||ye===we.AIR)continue;let Fe=new O.Computed(()=>Nt.get()==="xray"&&ye.solid&&ye!==we.COAL&&ye!==we.IRON&&ye!==we.GOLD&&ye!==we.LAVA).get()?"xray":Jt[ye.id];ne.fillStyle=ce[Fe],ne.fillRect(Math.round(pe*ge-Te%ge),Math.round(fe*ge-Ne%ge),ge,ge)}}let ke=De-Te,Be=rt-Ne;if(ne.fillStyle=ce["player-body"],ne.fillRect(ke,Be,he.width,he.height),ne.strokeStyle=ce["player-border"],ne.lineWidth=1,ne.strokeRect(ke,Be,he.width,he.height),ne.fillStyle=ce["player-eyes"],ne.fillRect(ke+1,Be+1,1,1),ne.fillRect(ke+4,Be+1,1,1),xt.get()==="fog"){Me.updateFromPlayer(le,ge);let pe={get:()=>({x:Te,y:Ne})};if(ot.get())return void Me.renderScaled(ne,te,ge,pe,Yt.get());let{velocityX:fe,velocityY:Ge}=he;(Math.abs(fe)>.1||Math.abs(Ge)>.1)&&ot.set(!0),Me.render(ne,te,ge,pe)}})(a,F,w,h,p,ee,ae,R,W,d,s,i,M,ze,ft/20,l,n),requestAnimationFrame(async()=>await Sn(a,e,o,t,c,n,l,g,d,i,I,r,s,u,m,p,h,y,R,W,E,w,M,x,U,D,F,q,ee,be,ae))}function Wo(a={},e="--sg-",o="",t=c=>c){let c;for(let[n,l]of Object.entries(a)){if(c||(c={}),!n.startsWith(e))continue;let g=n.slice(e.length);g=g.slice(0,o.length>0?-o.length:void 0),c[t(g)]=l.trim().replace(/^['"]|['"]$/g,"")}return c}async function Zi(a,e,o){if(e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!0,error:null},bubbles:!0,composed:!0})),!o){let h="HTML canvas is required to init Sprite Garden.";return console.error(h),void e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,error:h},bubbles:!0,composed:!0}))}e.addEventListener("focusout",h=>{o.focus()}),o.focus();let t={},c="1";try{t=await(await fetch("data:text/html;base64,ewogICJuYW1lIjogInNwcml0ZS1nYXJkZW4iLAogICJ2ZXJzaW9uIjogIjEuMjcuMCIsCiAgImRlc2NyaXB0aW9uIjogIlNwcml0ZSBHYXJkZW4gLSBHcm93IFNwcml0ZXMiLAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi8jc3ByaXRlLWdhcmRlbiIsCiAgImxpY2Vuc2UiOiAiQUdQTC0zLjAiLAogICJhdXRob3IiOiAiS2FybCBIZXJyaWNrIDxtZUBrYXJsaGVycmljay5jb20+IiwKICAidHlwZSI6ICJtb2R1bGUiLAogICJtYWluIjogImJpbi9zZXJ2ZS5tanMiLAogICJtb2R1bGUiOiAiaW5kZXgubWpzIiwKICAiZXhwb3J0cyI6IHsKICAgICIuIjogewogICAgICAiaW1wb3J0IjogIi4vc3ByaXRlLWdhcmRlbi1idW5kbGUtbWluLm1qcyIKICAgIH0KICB9LAogICJzY3JpcHRzIjogewogICAgImJ1aWxkOmJhc2U6YWJvdXQiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvYWJvdXQvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4OnVuYnVuZGxlZCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L2luZGV4Lmh0bWwgYmFzZSBocmVmIC9zcHJpdGUtZ2FyZGVuLyIsCiAgICAiYnVpbGQ6YmFzZTpwcml2YWN5IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L3ByaXZhY3kvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpjaSI6ICJucHggY29uY3VycmVudGx5IC0ta2lsbC1vdGhlcnMgLS1zdWNjZXNzIGZpcnN0IFwibnBtIHJ1biBidWlsZCBzaW5nbGVcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImJ1aWxkOmRvY3MiOiAibnB4IHRzLXRvLWpzZG9jIC1wIC4vdHNjb25maWcuanNvbiIsCiAgICAiYnVpbGQ6Z2gtcGFnZXM6bm9qZWt5bGwiOiAibm9kZSBiaW4vdG91Y2gtbm9qZWt5bGwubWpzIiwKICAgICJidWlsZDpwa2c6Z2V0Om1ldGEiOiAiZ2l0IHJldi1wYXJzZSBIRUFEIiwKICAgICJidWlsZDpwa2c6bWV0YSI6ICJub2RlIC1lIFwiaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnOyBpbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJyB3aXRoIHsgdHlwZTogJ2pzb24nIH07IChhc3luYyAoKSA9PiB7IGNvbnN0IG1ldGEgPSBwcm9jZXNzLmFyZ3ZbMV07IHBrZ1snc3ByaXRlLWdhcmRlbiddID0geyBtZXRhIH07IGF3YWl0IGZzLndyaXRlRmlsZSgnZGlzdC9wYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShwa2csIG51bGwsIDIpKTsgfSkoKVwiIiwKICAgICJidWlsZDpzY3JpcHQ6aW5kZXgiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvaW5kZXguaHRtbCBzY3JpcHQgc3JjIHNwcml0ZS1nYXJkZW4tYnVuZGxlLW1pbi5tanMiLAogICAgImJ1aWxkOnNlcnZpY2Utd29ya2VyIjogImNkIGRpc3QgJiYgd29ya2JveCBnZW5lcmF0ZVNXIHNlcnZpY2Utd29ya2VyL3dvcmtib3gtY29uZmlnLmNqcyIsCiAgICAiYnVpbGQ6c2luZ2xlOmJ1bmRsZTpjbGVhbiI6ICJnaXQgY2hlY2tvdXQgSEVBRCAtLSBzcmMiLAogICAgImJ1aWxkOnNpbmdsZTpidW5kbGUiOiAiYmluL2Jhc2U2NC1lbmNvZGUtYnVuZGxlLXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDpzaW5nbGU6aW5kZXg6Y2xlYW4iOiAiZ2l0IGNoZWNrb3V0IEhFQUQgLS0gaW5kZXguaHRtbCIsCiAgICAiYnVpbGQ6c2luZ2xlOmluZGV4IjogImJpbi9iYXNlNjQtZW5jb2RlLWluZGV4LXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDp6aXAiOiAiZ2l0IGFyY2hpdmUgLS1mb3JtYXQgemlwIC0tb3V0cHV0IFwic3ByaXRlLWdhcmRlbi1idWlsZC0kKG5wbSBydW4gLXMgYnVpbGQ6cGtnOmdldDptZXRhKS56aXBcIiBIRUFEIiwKICAgICJidWlsZCI6ICJiYXNoIGJpbi9idWlsZC5zaCIsCiAgICAiYnVuZGxlIjogInJvbGx1cCAtYyIsCiAgICAiY2xlYW46c2VydmljZS13b3JrZXIiOiAibm9kZSBiaW4vcmltcmFmLm1qcyBkaXN0L3NlcnZpY2Utd29ya2VyLyouY2pzIiwKICAgICJjbGVhbiI6ICJub2RlIGJpbi9yaW1yYWYubWpzIGRpc3QiLAogICAgImNvcHk6NDA0IjogIm5vZGUgYmluL25jcC5tanMgNDA0Lmh0bWwgZGlzdC80MDQuaHRtbCIsCiAgICAiY29weTphYm91dCI6ICJub2RlIGJpbi9uY3AubWpzIGFib3V0L2luZGV4Lmh0bWwgZGlzdC9hYm91dC9pbmRleC5odG1sIiwKICAgICJjb3B5OmRlcHMiOiAibm9kZSBiaW4vbmNwLm1qcyBkZXBzIGRpc3QvZGVwcyIsCiAgICAiY29weTppbmRleDphc3NldHMiOiAibm9kZSBiaW4vbmNwLm1qcyBhc3NldHMgZGlzdC9hc3NldHMiLAogICAgImNvcHk6aW5kZXg6bGljZW5zZSI6ICJub2RlIGJpbi9uY3AubWpzIExJQ0VOU0UgZGlzdC9MSUNFTlNFIiwKICAgICJjb3B5OmluZGV4OmxsbXMiOiAibm9kZSBiaW4vbmNwLm1qcyBsbG1zLnR4dCBkaXN0L2xsbXMudHh0IiwKICAgICJjb3B5OmluZGV4Om1hbmlmZXN0IjogIm5vZGUgYmluL25jcC5tanMgbWFuaWZlc3QuanNvbiBkaXN0L21hbmlmZXN0Lmpzb24iLAogICAgImNvcHk6aW5kZXg6cmVhZG1lIjogIm5vZGUgYmluL25jcC5tanMgUkVBRE1FLm1kIGRpc3QvUkVBRE1FLm1kIiwKICAgICJjb3B5OmluZGV4OnJvYm90cyI6ICJub2RlIGJpbi9uY3AubWpzIHJvYm90cy50eHQgZGlzdC9yb2JvdHMudHh0IiwKICAgICJjb3B5OmluZGV4OnNpdGVtYXAiOiAibm9kZSBiaW4vbmNwLm1qcyBzaXRlbWFwLnR4dCBkaXN0L3NpdGVtYXAudHh0IiwKICAgICJjb3B5OmluZGV4OnVuYnVuZGxlZCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCIsCiAgICAiY29weTppbmRleCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleC5odG1sIiwKICAgICJjb3B5OnBrZyI6ICJub2RlIGJpbi9uY3AubWpzIHBhY2thZ2UuanNvbiBkaXN0L3BhY2thZ2UuanNvbiIsCiAgICAiY29weTpwcml2YWN5IjogIm5vZGUgYmluL25jcC5tanMgcHJpdmFjeS9pbmRleC5odG1sIGRpc3QvcHJpdmFjeS9pbmRleC5odG1sIiwKICAgICJjb3B5OnNlcnZpY2Utd29ya2VyIjogIm5vZGUgYmluL25jcC5tanMgc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIGRpc3Qvc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIiwKICAgICJjb3B5OnNyYzppbmRleCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lm1qcyBkaXN0L2luZGV4Lm1qcyIsCiAgICAiY29weTpzcmMiOiAibm9kZSBiaW4vbmNwLm1qcyBzcmMgZGlzdC9zcmMiLAogICAgImRlcGxveTpnaC1wYWdlcyI6ICJnaC1wYWdlcyAtLW5vLWhpc3RvcnkgLS1kb3RmaWxlcyAtLWRpc3QgZGlzdCAtLXJlcG8gZ2l0QGdpdGh1Yi5jb206a2hlcnJpY2svc3ByaXRlLWdhcmRlbi5naXQgLS1yZW1vdGUgdXBzdHJlYW0iLAogICAgImUyZSI6ICJucHggcGxheXdyaWdodCBpbnN0YWxsICYmIG5weCBjb25jdXJyZW50bHkgLS1raWxsLW90aGVycyAtLXN1Y2Nlc3MgZmlyc3QgXCJucHggcGxheXdyaWdodCB0ZXN0XCIgXCJucG0gcnVuIHN0YXJ0OmRldlwiIiwKICAgICJmb3JtYXQiOiAicHJldHRpZXIgKiovKi57aHRtbCxjc3MsanMsbWpzfSAtLXdyaXRlIiwKICAgICJtaW5pZnk6NDA0IjogInBvc3RodG1sIGRpc3QvNDA0Lmh0bWwgLXUgaHRtbG5hbm8iLAogICAgIm1pbmlmeTphYm91dCI6ICJwb3N0aHRtbCBkaXN0L2Fib3V0LyouaHRtbCAtdSBodG1sbmFubyIsCiAgICAibWluaWZ5OmluZGV4IjogInBvc3RodG1sIGRpc3QvaW5kZXguaHRtbCAtdSBodG1sbmFubyIsCiAgICAibWluaWZ5OnByaXZhY3kiOiAicG9zdGh0bWwgZGlzdC9wcml2YWN5LyouaHRtbCAtdSBodG1sbmFubyIsCiAgICAic3RhcnQ6ZGV2IjogIm5wbSBzdGFydCA4MDgwIiwKICAgICJzdGFydCI6ICJub2RlIGJpbi9zZXJ2ZS5tanMiLAogICAgInRlc3QiOiAiTk9ERV9PUFRJT05TPS0tZXhwZXJpbWVudGFsLXZtLW1vZHVsZXMgamVzdCIKICB9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAiQHBsYXl3cmlnaHQvdGVzdCI6ICJeMS41Ni4xIiwKICAgICJAcm9sbHVwL3BsdWdpbi1jb21tb25qcyI6ICJeMjkuMC4wIiwKICAgICJAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUiOiAiXjE2LjAuMyIsCiAgICAiQHJvbGx1cC9wbHVnaW4tdGVyc2VyIjogIl4wLjQuNCIsCiAgICAiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdCI6ICJeMTIuMy4wIiwKICAgICJAeG1sZG9tL3htbGRvbSI6ICJeMC44LjExIiwKICAgICJjb21wcmVzc2lvbiI6ICJeMS44LjEiLAogICAgImNvbmN1cnJlbnRseSI6ICJeOS4yLjEiLAogICAgImNvcnMiOiAiXjIuOC41IiwKICAgICJjc3NuYW5vIjogIl43LjEuMSIsCiAgICAiZXhwcmVzcyI6ICJeNS4xLjAiLAogICAgImV4cHJlc3MtdXJscmV3cml0ZSI6ICJeMi4wLjMiLAogICAgImdoLXBhZ2VzIjogIl42LjMuMCIsCiAgICAiaHRtbG5hbm8iOiAiXjIuMS41IiwKICAgICJqZXN0IjogIl4zMC4yLjAiLAogICAgImplc3QtZW52aXJvbm1lbnQtanNkb20iOiAiXjMwLjIuMCIsCiAgICAicG9zdGNzcyI6ICJeOC41LjYiLAogICAgInBvc3Rjc3MtY2xpIjogIl4xMS4wLjEiLAogICAgInBvc3RodG1sLWNsaSI6ICJeMC4xMC4wIiwKICAgICJwcmV0dGllciI6ICJeMy42LjIiLAogICAgInJvbGx1cCI6ICJeMi43OS4yIiwKICAgICJ0Y3AtcG9ydC11c2VkIjogIl4xLjAuMiIsCiAgICAidHlwZXNjcmlwdCI6ICJeNS45LjMiLAogICAgIndvcmtib3gtY2xpIjogIl43LjMuMCIKICB9LAogICJkZXBlbmRlbmNpZXMiOiB7CiAgICAiYWxlYSI6ICJeMS4wLjEiLAogICAgImtvbmFtaS1jb2RlLWpzIjogIl4wLjguMyIsCiAgICAibG9jYWxmb3JhZ2UiOiAiXjEuMTAuMCIsCiAgICAic2lnbmFsLXBvbHlmaWxsIjogIl4wLjIuMiIsCiAgICAic2ltcGxleC1ub2lzZSI6ICJeNC4wLjMiLAogICAgIndvcmtib3gtd2luZG93IjogIl43LjQuMCIsCiAgICAienhpbmctd2FzbSI6ICJeMi4yLjQiCiAgfQp9Cg==")).json(),c=t.version}catch{console.log(`continuing with static version: ${c}`)}let{gameConfig:n,gameState:l}=await Fr(a,c);a.document;let g=e.host;g.keys={},g.touchKeys={};let d=await(async function(h){try{let y=await Q.getItem(h);if(y&&typeof y=="object")return console.log("Loaded custom colors:",Object.keys(y).length,"properties"),y}catch(y){console.error("Failed to load saved colors:",y)}return null})(vn),i=xe(a,e),I=d??i;yn(e,I),ai(e,n.fogMode,l.viewMode),Ci(a,e),ui(a,e),Ai(a,e),bi(e),Kr(e,Bo.totalSeeds,n.breakMode,n.fogMode,n.worldSeed,l.gameTime,l.materialsInventory,l.seedInventory,l.selectedMaterialType,l.selectedSeedType,l.viewMode);let r=n.WORLD_HEIGHT.get(),s=n.WORLD_WIDTH.get();if(!await(async function(h,y){try{let R=await Q.getItem(Rt),W=await Q.getItem(kn)==="auto";if(!R||!W)return!1;let E=h.document.createElement("dialog");E.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let w=new Date(R.timestamp).toLocaleString();return E.innerHTML=`
      <h3 style="margin: 0 0 1rem 0">Auto-Save Detected</h3>
      <p style="margin: 0 0 1rem 0">
        A saved game from ${w} was found. Would you like to load it?
      </p>
      <div style="display: flex; gap: 0.625rem; justify-content: flex-end">
        <button id="autoSaveNo" style="
          background: var(--sg-color-red-500);
          border-radius: 0.25rem;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem 0.9375rem;
        ">No</button>
        <button id="autoSaveYes" style="
          background: var(--sg-color-green-500);
          border-radius: 0.25rem;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem 0.9375rem;
        ">Yes</button>
      </div>
    `,y.append(E),E.showModal(),new Promise(M=>{E.querySelector("#autoSaveYes").addEventListener("click",async()=>{try{let x=So(h,R.data,"application/gzip"),U;if(!("DecompressionStream"in h))throw new Error("DecompressionStream not supported");{let be=x.stream().pipeThrough(new h.DecompressionStream("gzip"));U=await(await new h.Response(be).blob()).text()}let D=JSON.parse(U);Nn(h,y,D);let{worldSeed:F}=D.config,q=y.getElementById("worldSeedInput"),ee=y.getElementById("currentSeed");q instanceof HTMLInputElement&&(q.value=F),ee&&(ee.textContent=F),console.log("Auto-save loaded successfully")}catch(x){console.error("Failed to load auto-save:",x)}E.close(),E.remove(),M(!0)}),E.querySelector("#autoSaveNo").addEventListener("click",()=>{E.close(),E.remove(),M(!1)}),E.addEventListener("cancel",()=>{M(!1)})})}catch(R){return console.error("Failed to check for auto-save:",R),!1}})(a,e)){let h=tt(n.BIOMES,n.SURFACE_LEVEL.get(),n.TILE_SIZE.get(),n.TILES,r,s,n.worldSeed,l.gameTime,l.growthTimers,l.plantStructures,l.player,l.seedInventory);l.world.set(h);let y=wt(n.isFogScaled,r,s,I);l.exploredMap.set(y)}setInterval(async()=>{await St()==="auto"&&await Bn(a)},6e4),hi(o,l.camera,n.canvasScale.get(),n.TILES,n.TILE_SIZE.get(),n.WORLD_HEIGHT.get(),n.WORLD_WIDTH.get(),l.world),qe(e,n);let m=await Q.setItem("sprite-garden-version",c);console.log(`Sprite Garden version: ${m}`),e.addEventListener("sprite-garden-reset",async h=>{let y,R;h instanceof CustomEvent&&(y=h?.detail?.colors??{}),R=Object.keys(y).length&&y.constructor===Object?Wo(y,"--sg-tile-","-color"):Wo(i,"--sg-tile-","-color"),await Sn(o,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),ro(n.TILES),R,n.BIOMES,n.fogMode,n.fogScale,n.FRICTION.get(),n.GRAVITY.get(),n.isFogScaled,n.MAX_FALL_SPEED.get(),n.SURFACE_LEVEL.get(),n.TILE_SIZE.get(),n.TILES,n.waterPhysics,n.WORLD_HEIGHT.get(),n.WORLD_WIDTH.get(),n.worldSeed,l.camera,l.exploredMap,l.gameTime,l.growthTimers,l.plantStructures,l.player,l.shouldReset,l.viewMode,l.waterPhysicsQueue,l.world),l.shouldReset.set(!0)});let p=(function(h,y,R="",W=""){let E;for(let w of y){E||(E={});let M=w.slice(R.length);M=M.slice(0,W.length>0?-W.length:void 0),E[M]=h.getPropertyValue(w)}return E})(a.getComputedStyle(e.host),Object.keys(En).map(h=>`--sg-tile-${h}-color`),"--sg-tile-","-color");await Sn(o,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),ro(n.TILES),p,n.BIOMES,n.fogMode,n.fogScale,n.FRICTION.get(),n.GRAVITY.get(),n.isFogScaled,n.MAX_FALL_SPEED.get(),n.SURFACE_LEVEL.get(),n.TILE_SIZE.get(),n.TILES,n.waterPhysics,n.WORLD_HEIGHT.get(),n.WORLD_WIDTH.get(),n.worldSeed,l.camera,l.exploredMap,l.gameTime,l.growthTimers,l.plantStructures,l.player,l.shouldReset,l.viewMode,l.waterPhysicsQueue,l.world),e.getElementById("loading").setAttribute("hidden","hidden"),e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,pkg:t,error:null},bubbles:!0,composed:!0}))}var Zo="sprite-garden",Ln=class extends HTMLElement{constructor(){if(super(),!this.shadowRoot){let e=globalThis.document.createElement("template");e.innerHTML=`
        <style>
          [hidden] {
            display: none !important;
          }

          :focus {
            outline: none;
          }

          :host {
            align-items: center;
            display: flex;
            height: var(--sg-ui-host-height, 100vh);
            height: var(--sg-ui-host-height, 100dvh);
            justify-content: center;
            overflow: var(--sg-ui-host-overflow, hidden);
            position: relative;
            width: var(--sg-ui-host-width, 100vw);
            width: var(--sg-ui-host-width, 100dvw);

            ${an("--sg-color-",Lo)}
            ${an("--sg-tile-",En)}
            ${an("--sg-ui-",wo)}
          }

          #canvas {
            object-fit: cover;
            background: var(--sg-color-black);
            display: block;
            image-rendering: -moz-crisp-edges;
            image-rendering: -webkit-crisp-edges;
            image-rendering: crisp-edges;
            position: absolute;
          }

          #loading {
            animation: pulseSpin 1.8s infinite;
            height: 11rem;
            image-rendering: pixelated;
            position: relative;
            width: 11rem;
            z-index: 1;
          }

          #loading .pixel {
            background: var(--sg-tile-loading-pixel-color);
            height: 4rem;
            position: absolute;
            width: 4rem;
          }

          .pixel-one {
            top: 0;
            left: 4rem;
          }

          .pixel-two {
            top: 1rem;
            left: 1rem;
          }

          .pixel-three {
            top: 1rem;
            left: 7rem;
          }

          .pixel-four {
            top: 4rem;
            left: 0;
          }

          .pixel-five {
            top: 4rem;
            left: 8rem;
          }

          .pixel-six {
            top: 7rem;
            left: 1rem;
          }

          .pixel-seven {
            top: 7rem;
            left: 7rem;
          }

          .pixel-eight {
            top: 8rem;
            left: 4rem;
          }

          .pixel-nine {
            top: 4rem;
            left: 4rem;
          }

          @keyframes pulseSpin {
            0% {
              transform: scale(0.05) rotate(0deg);
              opacity: 0;
            }
            50% {
              transform: scale(1) rotate(-180deg);
              opacity: 1;
            }
            100% {
              transform: scale(0.05) rotate(-360deg);
              opacity: 0;
            }
          }

          .ui-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            height: var(--sg-ui-grid-height, calc(100vh - 1rem));
            height: var(--sg-ui-grid-height, calc(100dvh - 1rem));
            margin: 0.5rem;
            pointer-events: none;
            position: absolute;
            top: 0;
            width: var(--sg-ui-grid-width, calc(100vw - 1rem));
            width: var(--sg-ui-grid-width, calc(100dvw - 1rem));
          }

          .ui-grid__corner {
            max-height: var(--sg-ui-grid-corner-max-height, calc(100vh - 1rem));
            max-height: var(--sg-ui-grid-corner-max-height, calc(100dvh - 1rem));
            overflow-y: auto;
            pointer-events: auto;
            transition: height 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.5);
          }

          .ui-grid__corner--heading {
            color: var(--sg-ui-grid-corner-heading-color);
            backdrop-filter: blur(0.3125rem);
            background-color: var(--sg-ui-grid-corner-heading-background-color);
            border-radius: 0.5rem;
            border-width: 0.0625rem;
            border-style: solid;
            border-color: var(--sg-ui-grid-corner-heading-border-color);
            cursor: pointer;
            font-size: 0.75rem;
            padding: 0.75rem;
          }

          .ui-grid__corner--container {
            color: var(--sg-ui-grid-corner-container-color);
            padding: 0.5rem;
          }

          #controls .ui-grid__corner--container {
            cursor: pointer;
          }

          .ui-grid__corner--sub-heading {
            color: var(--sg-ui-grid-corner-heading-color);
            margin: 1rem 0 0.3125rem 0;
          }

          .ui-grid__corner--sub-section {
            overflow: auto;
          }

          .ui-grid__corner {
            scrollbar-width: thin; /* Slim scrollbar */
            scrollbar-color: var(--sg-color-gray-700) var(--sg-color-stone-100); /* Handle and track colors */
          }

          .ui-grid__corner::-webkit-scrollbar {
            width: 0.625rem; /* Custom width */
          }

          .ui-grid__corner::-webkit-scrollbar-track {
            background: var(--sg-color-stone-100); /* Track background */
          }

          .ui-grid__corner::-webkit-scrollbar-thumb {
            background: var(--sg-color-gray-700); /* Handle color */
            border-radius: 0.625rem; /* Rounded edges */
            border: 0.125rem solid var(--sg-color-stone-100); /* Padding around handle */
          }

          .ui-grid__corner::-webkit-scrollbar-thumb:hover {
            background: var(--sg-color-neutral-950); /* Highlight on hover */
          }

          /* Element modifiers for sticky corners */
          .ui-grid__corner--top-left {
            align-self: start;
            grid-column: 1;
            grid-row: 1;
            justify-self: start;
          }

          .ui-grid__corner--top-right {
            align-self: start;
            grid-column: 2;
            grid-row: 1;
            justify-self: end;
            z-index: 1;
          }

          .ui-grid__corner--bottom-left {
            align-self: end;
            grid-column: 1;
            grid-row: 2;
            justify-self: start;
          }

          .ui-grid__corner--bottom-right {
            align-self: end;
            grid-column: 2;
            grid-row: 2;
            justify-self: end;
            max-width: 15.625rem;
          }

          #stats,
          #controls,
          #settings,
          #inventory,
          .seed-controls {
            font-size: 0.5625rem;
          }

          /* Stats Panel */
          #stats {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-alpha-80);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-10);
            color: var(--sg-color-white);
          }

          /* Settings Panel */
          #settings {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-alpha-80);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-10);
            color: var(--sg-color-white);
            display: flex;
            flex-direction: column;
            position: relative;
          }

          #settings .settings-actions {
            display: flex;
            flex-direction: column;
          }

          #settings #resolution,
          #settings select,
          #settings button {
            width: 100%;
          }

          .map-editor-controls_header,
          .map-editor-controls-section_header {
            margin-bottom: 0.3125rem;
          }

          .map-editor-controls-section {
            margin-top: 0.3125rem;
          }

          .map-editor-controls-section_buttons-container {
            display: grid;
            gap: 0.125rem;
            grid-template-columns: repeat(4, 1fr);
            margin-bottom: 0.625rem;
          }

          /* Inventory Panel */
          #inventory {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-alpha-80);
            border-radius: 0.5rem;
            border-top: 0.0625rem solid var(--sg-color-gray-500);
            border: 0.0625rem solid var(--sg-color-gray-alpha-10);
            bottom: 1.625rem;
            color: var(--sg-color-white);
          }

          /* Controls Panel */
          #controls {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-alpha-80);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-10);
            color: var(--sg-color-white);
          }

          .control-instruction {
            padding: 0.25rem 0;
          }

          .control-instruction_icon-container {
            align-items: center;
            display: flex;
          }

          .control-instruction_icon-container svg {
            padding-right: 0.25rem;
          }

          .touch-controls {
            bottom: var(--sg-ui-touch-controls-bottom, 6rem);
            position: var(--sg-ui-touch-controls-position, absolute);
            width: var(--sg-ui-touch-controls-width, 100%);
          }

          .touch-btn {
            align-items: center;
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-ui-touch-btn-background-color);
            border-radius: 50%;
            border: 0.125rem solid var(--sg-ui-touch-btn-border-color);
            color: var(--sg-ui-touch-btn-color);
            cursor: pointer;
            display: inline-flex;
            font-size: 0.7rem;
            height: 3.25rem;
            justify-content: center;
            padding: 0.125rem;
            touch-action: manipulation;
            user-select: none;
            width: 3.25rem;
            z-index: 3;
          }

          .touch-btn:active {
            background: var(--sg-color-gray-alpha-20);
            transform: scale(0.95);
          }

          .dpad-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 1rem 1rem 0.5rem;
          }

          .dpad {
            display: grid;
            gap: 0.3125rem;
            grid-template-columns: 3.125rem 3.125rem 3.125rem;
            grid-template-rows: 3.125rem 3.125rem 3.125rem;
            justify-content: left;
            position: relative;
            z-index: 3;
          }

          .dpad .up-left {
            grid-column: 1;
            grid-row: 1;
            margin-left: 0.5rem;
            margin-top: 0.5rem;
            padding: 0;
            z-index: 4;
          }

          .dpad .up {
            grid-column: 2;
            grid-row: 1;
            margin-left: 0.125rem;
          }

          .dpad .up-right {
            grid-column: 3;
            grid-row: 1;
            margin-right: 0.5rem;
            margin-top: 0.5rem;
            padding: 0;
            z-index: 4;
          }

          .dpad .left {
            grid-column: 1;
            grid-row: 2;
            margin-top: 0.125rem;
          }

          .dpad .middle {
            grid-column: 2;
            grid-row: 2;
            z-index: 2;
          }

          .dpad .right {
            grid-column: 3;
            grid-row: 2;
            margin-top: 0.125rem;
          }

          .dpad .down-left {
            grid-column: 1;
            grid-row: 3;
            margin-bottom: 0.5rem;
            margin-left: 0.5rem;
            padding: 0;
            z-index: 4;
          }

          .dpad .down {
            grid-column: 2;
            grid-row: 3;
            margin-left: 0.125rem;
          }

          .dpad .down-right {
            grid-column: 3;
            grid-row: 3;
            margin-bottom: 0.5rem;
            margin-right: 0.5rem;
            padding: 0;
            z-index: 4;
          }

          .action-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 0.625rem;
            justify-content: end;
          }

          /* Button Styles */
          button,
          select {
            background: var(--sg-color-green-500);
            border-radius: 0.25rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 0.625rem;
            margin: 0.125rem;
            padding: 0.375rem 0.75rem;
            transition: background 0.2s;
          }

          button:hover,
          button:focus {
            outline: none;
          }

          button:active {
            transform: scale(0.95);
          }

          select {
            background: var(--sg-color-gray-900);
            border: 0.0625rem solid var(--sg-color-neutral-950);
          }

          select:focus {
            outline: 0.125rem solid var(--sg-color-green-500);
          }

          .material-btn,
          .seed-btn {
            border: 0.0625rem solid var(--sg-color-black);
            cursor: pointer;
            font-size: 0.5625rem;
            margin: 0.125rem;
            padding: 0.25rem 0.5rem;
          }

          .material-btn {
            background: var(--sg-color-gray-100);
            color: var(--sg-color-black);
          }

          .material-btn--cloud,
          .material-btn--grass,
          .material-btn--ice,
          .material-btn--iron,
          .material-btn--pumice,
          .material-btn--sand,
          .material-btn--snow {
            background: var(--sg-color-gray-800);
            color: var(--sg-color-white);
          }

          .material-btn:hover {
            background: var(--sg-color-gray-alpha-10);
            color: var(--sg-color-white);
          }

          .material-btn.selected,
          .seed-btn.selected {
            border: 0.125rem solid var(--sg-color-sky-50);
            outline: 0.125rem solid var(--sg-color-blue-500);
          }

          .seed-btn:hover {
            background: var(--sg-color-amber-900);
            color: var(--sg-color-white);
          }

          .seed-btn {
            background: var(--sg-color-amber-800);
            color: var(--sg-color-white);
          }

          .seed-btn--berry-bush {
            background: var(--sg-tile-berry-bush-color);
          }

          .seed-btn--bamboo {
            background: var(--sg-tile-bamboo-color);
            color: var(--sg-color-black);
          }

          .seed-btn--sunflower {
            background: var(--sg-tile-sunflower-color);
            color: var(--sg-color-black);
          }

          .seed-btn--corn {
            background: var(--sg-tile-corn-color);
            color: var(--sg-color-black);
          }

          .seed-btn--pine-tree {
            background: var(--sg-tile-pine-tree-color);
          }

          .seed-btn--willow-tree {
            background: var(--sg-tile-willow-tree-color);
            color: var(--sg-color-black);
          }

          .seed-btn--fern {
            background: var(--sg-tile-fern-color);
            color: var(--sg-color-black);
          }

          .seed-btn--tulip {
            background: var(--sg-tile-tulip-color);
          }

          .seed-btn--agave {
            color: var(--sg-color-black);
            background: var(--sg-tile-agave-color);
          }

          .seed-btn--lavender {
            background: var(--sg-tile-lavender-color);
          }

          .seed-btn--kelp {
            background: var(--sg-tile-kelp-color);
          }

          .seed-btn--rose {
            background: var(--sg-tile-rose-color);
          }

          .seed-btn--pumpkin {
            background: var(--sg-tile-pumpkin-color);
          }

          .seed-btn--lotus {
            color: var(--sg-color-black);
            background: var(--sg-tile-lotus-color);
          }

          .seed-btn--birch {
            color: var(--sg-color-black);
            background: var(--sg-tile-birch-color);
          }

          .info-buttons-container {
            border-top: 0.0625rem solid var(--sg-color-gray-500);
            margin-top: 0.9375rem;
            padding-top: 0.625rem;
          }

          #aboutBtn,
          #privacyBtn {
            border-radius: 0.25rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            margin: 0.25rem;
            padding: 0.5rem 1rem;
            width: calc(100% - 0.5rem);
          }

          #aboutBtn {
            background: var(--sg-color-green-500);
          }

          #privacyBtn {
            background: var(--sg-color-blue-500);
          }

          #resolution {
            display: inline;
            margin-bottom: 0.5rem;
          }

          /* Desktop Resolution Classes */
          .resolution-400 #canvas {
            border: 0.125rem solid var(--sg-color-gray-900);
            height: 25rem;
            margin: auto;
            width: 25rem;
          }

          .resolution-800 #canvas {
            border: 0.125rem solid (var(--sg-color-gray-900));
            height: 50rem;
            margin: auto;
            width: 50rem;
          }

          .resolution #gameContainer {
            background: var(--sg-color-black);
          }

          .seed-controls {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 0.3125rem;
            bottom: 3rem;
            color: var(--sg-color-white);
            margin: 0.625rem 0;
            padding: 0.625rem;
            position: absolute;
            z-index: 2;
          }

          .seed-controls__actions {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 0.625rem;
          }

          .seed-controls h4 {
            color: var(--sg-color-white);
            margin: 0 0 0.625rem 0;
          }

          .seed-controls input {
            font-size: 0.75rem;
            margin-left: 0.3125rem;
            padding: 0.125rem 0.3125rem;
            width: 5rem;
            font-size: 0.5rem;
          }

          .seed-controls input:focus {
            outline: 0.125rem solid var(--sg-color-blue-400);
          }

          .seed-controls__save-load {
            display: flex;
            flex-direction: column;
          }

          #saveModeToggle {
            background: var(--sg-color-blue-500);
          }

          .tile-btn {
            border-radius: 0.125rem;
            border: 0.0625rem solid var(--sg-color-gray-500);
            cursor: pointer;
            font-size: 0.625rem;
            padding: 0.25rem 0.375rem;
            transition: all 0.2s;
          }

          .tile-btn--air {
            background: var(--sg-tile-air-color);
            color: var(--sg-color-black);
          }

          .tile-btn--sand {
            background: var(--sg-tile-sand-color);
            color: var(--sg-color-black);
          }

          .tile-btn--birch {
            color: var(--sg-color-black);
          }

          .tile-btn--clay {
            background: var(--sg-tile-clay-color);
          }

          .tile-btn--cloud,
          .tile-btn--gold,
          .tile-btn--grass,
          .tile-btn--ice,
          .tile-btn--pumice,
          .tile-btn--snow {
            color: var(--sg-color-gray-900);
          }

          .tile-btn--cloud {
            background: var(--sg-tile-cloud-color);
          }

          .tile-btn--gold {
            background: var(--sg-tile-gold-color);
          }

          .tile-btn--grass {
            background: var(--sg-tile-grass-color);
          }

          .tile-btn--ice {
            background: var(--sg-tile-ice-color);
          }

          .tile-btn--pumice {
            background: var(--sg-tile-pumice-color);
          }

          .tile-btn--snow {
            background: var(--sg-tile-snow-color);
          }

          .tile-btn--coal,
          .tile-btn--dirt,
          .tile-btn--lava,
          .tile-btn--mushroom,
          .tile-btn--stone,
          .tile-btn--tree-leaves,
          .tile-btn--tree-trunk,
          .tile-btn--water {
            color: var(--sg-color-white);
          }

          .tile-btn--iron {
            background: var(--sg-tile-iron-color);
          }

          .tile-btn--wheat {
            background: var(--sg-tile-wheat-color);
            color: var(--sg-color-black);
          }

          .tile-btn--carrot {
            background: var(--sg-tile-carrot-color);
          }

          .tile-btn--cactus {
            background: var(--sg-tile-cactus-color);
            color: var(--sg-color-black);
          }

          .tile-btn--tulip {
            background: var(--sg-tile-tulip-color);
          }

          .tile-btn--agave {
            background: var(--sg-tile-agave-color);
            color: var(--sg-color-black);
          }

          .tile-btn--lavender {
            background: var(--sg-tile-lavender-color);
          }

          .tile-btn--kelp {
            background: var(--sg-tile-kelp-color);
          }

          .tile-btn--rose {
            background: var(--sg-tile-rose-color);
          }

          .tile-btn--pumpkin {
            background: var(--sg-tile-pumpkin-color);
          }

          .tile-btn--lotus {
            background: var(--sg-tile-lotus-color);
            color: var(--sg-color-black);
          }

          .tile-btn--birch {
            background: var(--sg-tile-birch-color);
          }

          .tile-btn--coal {
            background: var(--sg-tile-coal-color);
          }

          .tile-btn--dirt {
            background: var(--sg-tile-dirt-color);
          }

          .tile-btn--lava {
            background: var(--sg-tile-lava-color);
          }

          .tile-btn--mushroom {
            background: var(--sg-tile-mushroom-color);
          }

          .tile-btn--stone {
            background: var(--sg-tile-stone-color);
          }

          .tile-btn--tree_trunk {
            background: var(--sg-tile-tree-trunk-color);
          }

          .tile-btn--tree_leaves {
            background: var(--sg-tile-tree-leaves-color);
          }

          .tile-btn--water {
            background: var(--sg-tile-water-color);
          }

          .tile-btn:hover {
            border-color: var(--sg-color-gray-800);
            transform: scale(1.05);
          }

          .tile-btn.selected {
            border: 0.125rem solid var(--sg-color-sky-50);
            outline: 0.125rem solid var(--sg-color-blue-500);
            font-weight: bold;
          }

          #mapEditor,
          #examplesBtnContainer {
            border-top: 0.0625rem solid var(--sg-color-gray-500);
            margin-top: 0.625rem;
            padding-top: 0.625rem;
          }

          #mapEditorControls {
            display: flex;
            flex-direction: column;
            margin-top: 0.3125rem;
            padding-right: 1rem;
          }

          #mapEditorControls div {
            margin-bottom: 0.5rem;
          }

          #brushSizeSelect {
            margin-left: 0.3125rem;
            padding: 0.125rem;
          }

          #generateWithSeed {
            background: var(--sg-color-blue-400);
          }

          #randomSeed {
            background: var(--sg-color-amber-500);
          }

          #copySeed {
            background: var(--sg-color-emerald-700);
          }

          .seed-controls button {
            border-radius: 0.1875rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 0.75rem;
            padding: 0.3125rem 0.625rem;
          }

          .seed-controls button:hover {
            opacity: 0.8;
            transform: translateY(-0.0625rem);
          }

          .seed-controls button:active {
            transform: translateY(0);
          }

          .current-seed {
            color: var(--sg-color-gray-600);
            font-size: 0.6875rem;
            margin-top: 0.5rem;
          }

          .swatch-cloud,
          .swatch-grass,
          .swatch-ice,
          .swatch-kelp,
          .swatch-pumice,
          .swatch-snow {
            display: inline-block;
            height: 0.625rem;
            width: 0.625rem;
          }

          .swatch-cloud {
            background: var(--sg-tile-cloud-color);
          }

          .swatch-grass {
            background: var(--sg-tile-grass-color);
          }

          .swatch-kelp {
            background: var(--sg-tile-kelp-color);
          }

          .swatch-ice {
            background: var(--sg-tile-ice-color);
          }

          .swatch-pumice {
            background: var(--sg-tile-pumice-color);
          }

          .swatch-snow {
            background: var(--sg-tile-snow-color);
          }

          .about,
          .examples,
          .privacy {
            background: var(--sg-color-white);
            line-height: 1.5;
            overflow: auto;
            padding: 0.5rem 1rem 1rem 2rem;
          }

          dialog.about-content,
          dialog.examples-content,
          dialog.privacy-content {
            background: var(--sg-color-gray-50);
            border-radius: 0.5rem;
            border: 0.125rem solid var(--sg-color-gray-900);
            color: var(--sg-color-gray-900);
            font-family: monospace;
            line-height: 1.5;
            max-height: 80vh;
            max-height: 80dvh;
            max-width: 50rem;
            width: 90%;
          }

          .about-content li,
          .examples-content li,
          .privacy-content li {
            margin: 0.25rem 0;
          }

          .about-content_header,
          .examples-content_header,
          .privacy-content_header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            padding-top: 1rem;
          }

          .about-content_close-btn,
          .examples-content_close-btn,
          .privacy-content_close-btn {
            background: var(--sg-color-red-500);
            border-radius: 0.25rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }

          .about-controls {
            background: var(--sg-color-gray-300);
            border-radius: 0.25rem;
            list-style-type: none;
            margin-bottom: 1.5rem;
            margin-top: 0.5rem;
            padding: 1rem;
          }

          /* Mobile Responsive */
          @media (min-width: 30rem) {
            .ui-grid__corner--heading {
              font-size: 1rem;
            }

            #stats,
            #controls,
            #settings,
            #inventory,
            .seed-controls {
              font-size: 0.725rem;
            }

            .touch-btn {
              font-size: 0.75rem;
            }

            .seed-controls {
              font-size: 0.6875rem;
            }

            .seed-controls button {
              font-size: 0.6875rem;
              padding: 0.25rem 0.5rem;
            }

            .seed-controls input {
              width: 3.75rem;
            }
          }

          @media (min-width: 48rem) {
            .ui-grid__corner--heading {
              font-size: 1.25rem;
            }

            #stats,
            #controls,
            #settings,
            #inventory,
            .seed-controls {
              font-size: 1.25rem;
            }

            .touch-btn {
              font-size: 0.875rem;
            }
          }
        </style>

        <div id="loading">
          <div class="pixel pixel-one"></div>
          <div class="pixel pixel-two"></div>
          <div class="pixel pixel-three"></div>
          <div class="pixel pixel-four"></div>
          <div class="pixel pixel-five"></div>
          <div class="pixel pixel-six"></div>
          <div class="pixel pixel-seven"></div>
          <div class="pixel pixel-eight"></div>
          <div class="pixel pixel-nine"></div>
        </div>
        <canvas id="canvas" tabindex="0"></canvas>
        <div id="ui-grid" class="ui-grid">
          <div class="ui-grid__corner ui-grid__corner--top-left">
            <div id="stats">
              <div class="ui-grid__corner--heading">\u{1F331} Sprite Garden</div>
              <div class="ui-grid__corner--container" hidden="hidden">
                <div>Biome: <span id="currentBiome">Forest</span></div>
                <div>Depth: <span id="currentDepth">Surface</span></div>
                <div>Total Seeds: <span id="seedCount">0</span></div>
                <div>Time: <span id="gameTime">0</span>s</div>

                <div class="info-buttons-container">
                  <button id="aboutBtn">\u2139\uFE0F About</button>
                  <button id="privacyBtn">\u{1F512} Privacy</button>
                </div>
              </div>
            </div>
          </div>

          <div class="ui-grid__corner ui-grid__corner--top-right">
            <div id="settings">
              <div class="ui-grid__corner--heading">\u2699\uFE0F Settings</div>
              <div class="ui-grid__corner--container" hidden="hidden">
                <div class="settings-actions">
                  <div id="resolution">
                    <select id="resolutionSelect">
                      <option value="400">400x400</option>
                      <option value="800">800x800</option>
                      <option hidden="hidden" value="fullscreen">
                        Fullscreen
                      </option>
                    </select>
                  </div>
                  <button id="worldState">\u{1F30D} World State</button>
                  <button id="toggleView">
                    \u{1F50D} <span id="viewModeText">View Normal</span>
                  </button>
                  <button id="toggleFog">
                    \u2601 <span id="fogModeText">Fog</span>
                  </button>
                  <button id="toggleBreakMode">
                    \u26CF\uFE0F <span id="breakModeText">Dig Regular</span>
                  </button>
                </div>

                <div class="settings-actions">
                  <div id="customizeColorsBtnContainer">
                    <div class="ui-grid__corner--sub-heading">\u{1F5FA}\uFE0F Colors</div>
                    <button id="customizeColorsBtn">Customize</button>
                  </div>
                  <div id="examplesBtnContainer" hidden="hidden">
                    <div class="ui-grid__corner--sub-heading">\u{1F5FA}\uFE0F Examples</div>
                    <button id="examplesBtn">
                      \u{1F4DD} <span id="examplesBtnText">Open</span>
                    </button>
                  </div>
                  <div id="mapEditor" hidden="hidden">
                    <div class="ui-grid__corner--sub-heading">
                      \u{1F5FA}\uFE0F Map Editor
                    </div>
                    <button id="toggleMapEditor">
                      \u{1F4DD} <span id="mapEditorText">Enable Editor</span>
                    </button>
                    <div
                      class="ui-grid__corner--sub-section"
                      id="mapEditorControls"
                      hidden="hidden"
                    >
                      <div>
                        Brush Size:
                        <select id="brushSizeSelect">
                          <option value="1">1x1</option>
                          <option value="3">3x3</option>
                          <option value="5">5x5</option>
                        </select>
                      </div>
                      <div class="map-editor-controls-section">
                        <div class="map-editor-controls-section_header">
                          \u{1F30D} Terrain:
                        </div>
                        <div
                          class="map-editor-controls-section_buttons-container"
                        >
                          <button
                            class="tile-btn tile-btn--air"
                            data-tile="AIR"
                          >
                            Air
                          </button>
                          <button
                            class="tile-btn tile-btn--dirt"
                            data-tile="DIRT"
                          >
                            Dirt
                          </button>
                          <button
                            class="tile-btn tile-btn--grass"
                            data-tile="GRASS"
                          >
                            Grass
                          </button>
                          <button
                            class="tile-btn tile-btn--stone"
                            data-tile="STONE"
                          >
                            Stone
                          </button>
                          <button
                            class="tile-btn tile-btn--sand"
                            data-tile="SAND"
                          >
                            Sand
                          </button>
                          <button
                            class="tile-btn tile-btn--clay"
                            data-tile="CLAY"
                          >
                            Clay
                          </button>
                          <button
                            class="tile-btn tile-btn--snow"
                            data-tile="SNOW"
                          >
                            Snow
                          </button>
                          <button
                            class="tile-btn tile-btn--ice"
                            data-tile="ICE"
                          >
                            Ice
                          </button>
                          <button
                            class="tile-btn tile-btn--cloud"
                            data-tile="CLOUD"
                          >
                            Cloud
                          </button>
                        </div>
                        <div class="map-editor-controls_header">
                          \u{1F3D4}\uFE0F Resources:
                        </div>
                        <div
                          class="map-editor-controls-section_buttons-container"
                        >
                          <button
                            class="tile-btn tile-btn--coal"
                            data-tile="COAL"
                          >
                            Coal
                          </button>
                          <button
                            class="tile-btn tile-btn--iron"
                            data-tile="IRON"
                          >
                            Iron
                          </button>
                          <button
                            class="tile-btn tile-btn--gold"
                            data-tile="GOLD"
                          >
                            Gold
                          </button>
                          <button
                            class="tile-btn tile-btn--pumice"
                            data-tile="PUMICE"
                          >
                            Pumice
                          </button>
                        </div>
                        <div class="map-editor-controls_header">\u{1F333} Nature:</div>
                        <div
                          class="map-editor-controls-section_buttons-container"
                        >
                          <button
                            class="tile-btn tile-btn--tree_trunk"
                            data-tile="TREE_TRUNK"
                          >
                            Trunk
                          </button>
                          <button
                            class="tile-btn tile-btn--tree_leaves"
                            data-tile="TREE_LEAVES"
                          >
                            Leaves
                          </button>
                          <button
                            class="tile-btn tile-btn--water"
                            data-tile="WATER"
                          >
                            Water
                          </button>
                          <button
                            class="tile-btn tile-btn--lava"
                            data-tile="LAVA"
                          >
                            Lava
                          </button>
                        </div>
                        <div class="map-editor-controls_header">\u{1F331} Crops:</div>
                        <div
                          class="map-editor-controls-section_buttons-container"
                        >
                          <button
                            class="tile-btn tile-btn--wheat"
                            data-tile="WHEAT"
                          >
                            Wheat
                          </button>
                          <button
                            class="tile-btn tile-btn--carrot"
                            data-tile="CARROT"
                          >
                            Carrot
                          </button>
                          <button
                            class="tile-btn tile-btn--mushroom"
                            data-tile="MUSHROOM"
                          >
                            Mushroom
                          </button>
                          <button
                            class="tile-btn tile-btn--cactus"
                            data-tile="CACTUS"
                          >
                            Cactus
                          </button>
                          <button
                            class="tile-btn tile-btn--tulip"
                            data-tile="TULIP"
                          >
                            Tulip
                          </button>
                          <button
                            class="tile-btn tile-btn--agave"
                            data-tile="AGAVE"
                          >
                            Agave
                          </button>
                          <button
                            class="tile-btn tile-btn--lavender"
                            data-tile="LAVENDER"
                          >
                            Lavender
                          </button>
                          <button
                            class="tile-btn tile-btn--kelp"
                            data-tile="KELP"
                          >
                            Kelp
                          </button>
                          <button
                            class="tile-btn tile-btn--rose"
                            data-tile="ROSE"
                          >
                            Rose
                          </button>
                          <button
                            class="tile-btn tile-btn--pumpkin"
                            data-tile="PUMPKIN"
                          >
                            Pumpkin
                          </button>
                          <button
                            class="tile-btn tile-btn--lotus"
                            data-tile="LOTUS"
                          >
                            Lotus
                          </button>
                          <button
                            class="tile-btn tile-btn--birch"
                            data-tile="BIRCH"
                          >
                            Birch
                          </button>
                        </div>
                      </div>
                      <div>
                        <button id="clearMapEditor">\u{1F9F9} Clear All</button>
                        <button id="fillMapEditor">\u{1FAA3} Fill Layer</button>
                        <button id="saveMapAsState">\u{1F4BE} Save as State</button>
                        <button id="regenerateMap">\u{1F30D} Regenerate Map</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ui-grid__corner ui-grid__corner--bottom-left">
            <div id="controls">
              <div class="ui-grid__corner--heading">\u2328\uFE0F Controls</div>
              <div class="ui-grid__corner--container" hidden="hidden">
                <div class="control-instruction">w / \u2191 / Space: Jump</div>
                <div class="control-instruction">a / d or \u2190 / \u2192: Move</div>
                <div class="control-instruction">f: Plant/Harvest</div>
                <div class="control-instruction">r: Break Block</div>
                <div class="control-instruction">e / x / k: mode / scale / range</div>
                <div class="control-instruction">
                  <span style="font-family: monospace;">u</span> / i / o / j / l / m / , / .: Set Block
                </div>
                <div class="control-instruction">ctrl+s: World State</div>
                <div class="control-instruction">Mouse: Inspect Tiles</div>
                <div
                  class="control-instruction control-instruction_icon-container"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--sg-color-gray-200)"
                  >
                    <path
                      d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z"
                    />
                  </svg>
                  Mobile Controls
                </div>
              </div>
            </div>
          </div>

          <div class="ui-grid__corner ui-grid__corner--bottom-right">
            <div id="inventory">
              <div class="ui-grid__corner--heading" id="seeds">
                \u{1F392} Inventory
              </div>
              <div class="ui-grid__corner--container" hidden="hidden">
                <div class="ui-grid__corner--sub-heading">\u{1FAD8} Seeds</div>
                <div class="ui-grid__corner--sub-section">
                  <div>Selected: <span id="selectedSeed">None</span></div>
                  <div>
                    <button class="seed-btn" data-wheat="data-wheat">
                      \u{1F33E} <span id="wheatCount">0</span>
                    </button>
                    <button class="seed-btn" data-carrot="data-carrot">
                      \u{1F955} <span id="carrotCount">0</span>
                    </button>
                    <button class="seed-btn" data-mushroom="data-mushroom">
                      \u{1F344} <span id="mushroomCount">0</span>
                    </button>
                    <button class="seed-btn" data-cactus="data-cactus">
                      \u{1F335} <span id="cactusCount">0</span>
                    </button>
                    <button class="seed-btn" data-walnut="data-walnut">
                      \u{1F330} <span id="walnutCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--berry-bush"
                      data-berry_bush="data-berry_bush"
                    >
                      \u{1F353} <span id="berry_bushCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--bamboo"
                      data-bamboo="data-bamboo"
                    >
                      \u{1F38B} <span id="bambooCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--sunflower"
                      data-sunflower="data-sunflower"
                    >
                      \u{1F33B} <span id="sunflowerCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--corn"
                      data-corn="data-corn"
                    >
                      \u{1F33D} <span id="cornCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--pine-tree"
                      data-pine_tree="data-pine_tree"
                    >
                      \u{1F332} <span id="pine_treeCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--willow-tree"
                      data-willow_tree="data-willow_tree"
                    >
                      \u{1F333} <span id="willow_treeCount">0</span>
                    </button>

                    <button
                      class="seed-btn seed-btn--fern"
                      data-fern="data-fern"
                    >
                      \u{1F33F} <span id="fernCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--tulip"
                      data-tulip="data-tulip"
                    >
                      \u{1F337} <span id="tulipCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--agave"
                      data-agave="data-agave"
                    >
                      \u{1F331} <span id="agaveCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--lavender"
                      data-lavender="data-lavender"
                    >
                      \u{1F33A} <span id="lavenderCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--kelp"
                      data-kelp="data-kelp"
                    >
                      <div class="swatch-kelp"></div>
                      <span id="kelpCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--rose"
                      data-rose="data-rose"
                    >
                      \u{1F338} <span id="roseCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--pumpkin"
                      data-pumpkin="data-pumpkin"
                    >
                      \u{1F383} <span id="pumpkinCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--lotus"
                      data-lotus="data-lotus"
                    >
                      \u{1FAB7} <span id="lotusCount">0</span>
                    </button>
                    <button
                      class="seed-btn seed-btn--birch"
                      data-birch="data-birch"
                    >
                      \u{1FAB5} <span id="birchCount">0</span>
                    </button>
                  </div>
                </div>

                <div id="materials">
                  <div class="ui-grid__corner--sub-heading">\u{1F9F1} Materials</div>
                  <div class="ui-grid__corner--sub-section">
                    <div>Selected: <span id="selectedMaterial">None</span></div>
                    <div>
                      <button
                        class="material-btn material-btn--dirt"
                        data-dirt="data-dirt"
                      >
                        \u{1F7E4} <span id="dirtCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--stone"
                        data-stone="data-stone"
                      >
                        \u{1FAA8} <span id="stoneCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--grass"
                        data-grass="data-grass"
                      >
                        <div class="swatch-grass"></div>
                        <span id="grassCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--snow"
                        data-snow="data-snow"
                      >
                        \u2744\uFE0F <span id="snowCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--ice"
                        data-ice="data-ice"
                      >
                        \u{1F9CA} <span id="iceCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--wood"
                        data-wood="data-wood"
                      >
                        \u{1FAB5} <span id="woodCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--sand"
                        data-sand="data-sand"
                      >
                        \u{1F3D6}\uFE0F <span id="sandCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--clay"
                        data-clay="data-clay"
                      >
                        \u{1F9F1} <span id="clayCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--coal"
                        data-coal="data-coal"
                      >
                        \u26AB <span id="coalCount">0</span>
                      </button>

                      <button
                        class="material-btn material-btn--iron"
                        data-iron="data-iron"
                      >
                        \u{1F529} <span id="ironCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--gold"
                        data-gold="data-gold"
                      >
                        \u{1F7E1} <span id="goldCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--pumice"
                        data-pumice="data-pumice"
                      >
                        <div class="swatch-pumice"></div>
                        <span id="pumiceCount">0</span>
                      </button>
                      <button
                        class="material-btn material-btn--cloud"
                        data-cloud="data-cloud"
                      >
                        \u2601\uFE0F <span id="cloudCount">0</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="seed-controls" hidden="hidden">
          <h4>World Generation</h4>

          <div class="seed-controls__actions">
            <label>
              Seed:
              <input
                id="worldSeedInput"
                placeholder="Enter seed..."
                type="number"
              />
            </label>

            <button id="generateWithSeed">Generate</button>
            <button id="randomSeed">Random</button>
            <button id="copySeed">Copy Seed</button>
          </div>

          <div class="current-seed">
            <p>Current seed: <span id="currentSeed"></span></p>
          </div>

          <h4>New Game, Load / Save Game File</h4>

          <div class="seed-controls__save-load">
            <button id="initNewWorld">\u{1F30D} New World</button>
            <button id="useStorageBtn">\u{1F4BE} Use Storage</button>
            <button id="loadCompressedState">Load Game File</button>
            <button id="saveCompressedState">Save Game File</button>
            <button id="saveModeToggle">Save Mode Auto</button>
          </div>
        </div>

        <div class="touch-controls" hidden="hidden">
          <div class="dpad-container">
            <div class="dpad">
              <div class="touch-btn up-left" data-key="upleft">\u2196</div>
              <div class="touch-btn up" data-key="w">\u2191</div>
              <div class="touch-btn up-right" data-key="upright">\u2197</div>

              <div class="touch-btn left" data-key="a">\u2190</div>
              <div class="touch-btn middle" data-key="x">&times;</div>
              <div class="touch-btn right" data-key="d">\u2192</div>

              <div class="touch-btn down-left" data-key="downleft">\u2199</div>
              <div class="touch-btn down" data-key="s">\u2193</div>
              <div class="touch-btn down-right" data-key="downright">\u2198</div>
            </div>
            <div class="dpad">
              <div class="touch-btn place-block up-left" data-key="u">\u2196</div>
              <div class="touch-btn place-block up" data-key="i">\u2191</div>
              <div class="touch-btn place-block up-right" data-key="o">\u2197</div>

              <div class="touch-btn place-block left" data-key="j">\u2190</div>
              <div class="touch-btn place-block middle" data-key="k">
                &times;
              </div>
              <div class="touch-btn place-block right" data-key="l">\u2192</div>

              <div class="touch-btn place-block down-left" data-key="m">\u2199</div>
              <div class="touch-btn place-block down" data-key=",">\u2193</div>
              <div class="touch-btn place-block down-right" data-key=".">
                \u2198
              </div>
            </div>
          </div>
          <div>
            <div class="action-buttons">
              <div class="touch-btn" data-key=" ">\u{1F998}</div>
              <div class="touch-btn" data-key="r">\u26CF\uFE0F</div>
              <div class="touch-btn" data-key="f">\u{1F9D1}\u200D\u{1F33E}</div>
            </div>
          </div>
        </div>
      `,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}}async connectedCallback(){let e=this.shadowRoot,o=e.querySelector("canvas");await Zi(globalThis,e,o)}async disconnectedCallback(){await Bn(globalThis)}};globalThis.customElements?.get(Zo)||globalThis.customElements?.define(Zo,Ln);function _o(a,e,o,t){return`
    ${t}

    function setDeepGlobalValue(root, keys, value) {
      let obj = root;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) {
          obj[keys[i]] = {};
        }

        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;
    }

    setDeepGlobalValue(
      globalThis,
      [
        'spriteGarden',
        'refs',
        '${e}',
        '${o.replaceAll("/",",").replaceAll(",","','")}'
      ],
      ${a}
    );
  `}function Ko(a,e){let o=a;for(let t of e){if(!o)return;o=o[t]}return o}function xn(a){return a.replaceAll("/",":")}var Ri=["spriteGarden"],Si=["spriteGardenInfo"];function Li(a,e){if(a&1){let o=Pt();de(0,"sprite-garden",3,0),_t("sprite-garden-load",function(c){ct(o);let n=Ct();return dt(n.handleSpriteGardenEvents(c))}),se()}}function wi(a,e){if(a&1){let o=Pt();de(0,"div",2,1)(2,"div",4)(3,"section")(4,"header")(5,"h1")(6,"a",5),Ie(7,"Sprite Garden"),se()()(),de(8,"section")(9,"img",6),_t("click",function(c){ct(o);let n=Ct();return dt(n.handleLoad(c))})("keydown",function(c){ct(o);let n=Ct();return dt(n.handleLoad(c))}),se(),de(10,"h2")(11,"a",5),Ie(12,"Sprite Garden"),se(),Ie(13," is a 2D sandbox exploration and farming game. Learn more at the "),de(14,"a",7),Ie(15,"project page"),se(),Ie(16,". "),se(),de(17,"ul",8)(18,"li"),Ie(19,"Procedural World Generation - Explore uniquely generated maps"),se(),de(20,"li"),Ie(21," Multiple Biomes - Forests, deserts, tundras, and swamps, with their own characteristics "),se(),de(22,"li"),Ie(23," Farming System - Plant and harvest different crop types with various growth cycles "),se(),de(24,"li"),Ie(25,"Resource gathering - Dig for items like coal, iron, and gold"),se(),de(26,"li"),Ie(27," Cave Systems - Discover underground caves filled with resources and challenges "),se(),de(28,"li"),Ie(29,"Building - Use collected materials to place blocks and shape the world"),se(),de(30,"li"),Ie(31," Clouds - Continue building and farming while in the sky"),Ft(32,"br")(33,"br")(34,"iframe",9),se(),de(35,"li"),Ie(36," Discover - Open source, extendable by nature, map editor, color customization, etc."),Ft(37,"br")(38,"br")(39,"iframe",10),se()()()()()()}}var zo=class a{doc=_e(Fn);isLoading=It(!1);injector=_e(jn);resizeObserver;renderSpriteGarden=It(!1);themeService=_e($n);platformId=_e(Pn);canvasEl=It(null);spriteGarden=Qt("spriteGarden");spriteGardenInfo=Qt("spriteGardenInfo");fogMapModuleCommit="6ecf332c06409e10a60dae2e26cf619397434ead";fogMapModuleCommitPath="src/map/fog.mjs";fogMapModuleClassName="FogMap";async ngOnInit(){if(qn(this.platformId)){let e=`https://raw.githubusercontent.com/kherrick/sprite-garden/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,o=xn(e);if(globalThis.document.getElementById(o))return;let t=await(await fetch(e)).text(),c=globalThis.document.createElement("script");c.setAttribute("type","module"),c.setAttribute("id",o),c.textContent=_o(this.fogMapModuleClassName,this.fogMapModuleCommit,this.fogMapModuleCommitPath,t),globalThis.document.body.append(c)}}constructor(){Dn(this.injector,()=>{zt(async()=>{let e=globalThis?.spriteGarden,o=this.themeService.theme(),t=e?.state,c=e?.config,n=c?.WORLD_WIDTH?.get(),l=c?.WORLD_HEIGHT?.get(),g;o==="dark"&&(g=re(j({},t?.exploredMap.get().colors),{"--sg-tile-fog-color":"#121212"})),o==="light"&&(g=re(j({},t?.exploredMap.get().colors),{"--sg-tile-fog-color":"#ffffff"}));let d=`spriteGarden/refs/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,i=xn(d),r=Ko(globalThis,i.split(":"))?.fromObject(re(j({},t?.exploredMap.get()),{colors:g}),n,l,g);t?.exploredMap.set(r)}),zt(()=>{let e=this.canvasEl();e&&e.focus()})})}handleLoad(e){if(e.key&&e.key!==" "&&e.key!=="Enter")return;this.renderSpriteGarden.set(!0);let o=(I,r)=>{let s;return(...u)=>{clearTimeout(s),s=setTimeout(()=>I(...u),r)}},t=()=>{let I=(h,y)=>{for(let[R,W]of Object.entries(y))h.style.setProperty(R,W)},r={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 2rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 2rem)","--sg-ui-touch-controls-bottom":"2rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},s={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 7rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 7rem)","--sg-ui-touch-controls-bottom":"6rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},u=this.spriteGarden()?.nativeElement,m=globalThis.getComputedStyle(globalThis.document.body).width,p=Number(m.slice(0,-2));p<859&&I(u,r),p>=859&&I(u,s)},c=o(()=>{t()},0);typeof ResizeObserver=="function"&&(this.resizeObserver=new ResizeObserver(()=>{c()}),this.resizeObserver.observe(this.doc.body));let n=1e4,l=20,g=0,d=I=>{let r=this.doc.createElement("canvas");return r.width=I.width,r.height=I.height,I.toDataURL()===r.toDataURL()},i=()=>{let r=this.spriteGarden()?.nativeElement?.shadowRoot?.querySelector("canvas");if(r&&!d(r)){this.canvasEl.set(r);return}g<n&&(g+=l,setTimeout(i,l))};i()}handleSpriteGardenEvents(e){let o=this.spriteGarden()?.nativeElement,t=!!e?.detail?.isLoading;this.isLoading.set(t);let c=this.doc.querySelector(".progress");c&&(c.style.display=t?"none":"unset",o&&setTimeout(()=>{c.style.display="none",o.style.display="flex"},0))}ngOnDestroy(){this.resizeObserver?.unobserve(this.doc.body);let e=this.doc.querySelector(".progress");e&&(e.style.display="none")}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=_n({type:a,selectors:[["x-sprite-garden"]],viewQuery:function(o,t){o&1&&(Kt(t.spriteGarden,Ri,5),Kt(t.spriteGardenInfo,Si,5)),o&2&&Qn(2)},decls:2,vars:1,consts:[["spriteGarden",""],["spriteGardenInfo",""],["sprite-garden-container",""],[3,"sprite-garden-load"],["sprite-garden",""],["href","https://kherrick.github.io/sprite-garden/"],["src","assets/images/sprite-garden-launcher.png","tabindex","0",3,"click","keydown"],["href","https://github.com/kherrick/sprite-garden"],[1,"features"],["allowfullscreen","","frameborder","0","src",jt`//www.youtube.com/embed/Es60fVIyOjY`],["allowfullscreen","","frameborder","0","src",jt`//www.youtube.com/embed/VQbZTvWGXM4`]],template:function(o,t){o&1&&Kn(0,Li,2,0,"sprite-garden")(1,wi,40,0,"div",2),o&2&&zn(t.renderSpriteGarden()?0:1)},styles:[`@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{--md-outlined-text-field-container-shape: 1rem;--md-outlined-button-container-shape: 1rem;--md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface)}.launcher{cursor:pointer}.features>li{padding-bottom:.5rem}[sprite-garden-container]{align-items:center;color:var(--md-sys-color-on-surface);display:flex;flex-direction:row;flex-wrap:wrap;grid-column-gap:1rem;grid-row-gap:1rem;justify-content:center;text-align:center}[sprite-garden-container] a{color:var(--md-sys-color-on-surface);text-decoration:underline}[sprite-garden-container] [sprite-garden]{max-width:35rem;text-align:center;display:flex;justify-content:center}[sprite-garden-container] [sprite-garden] iframe{height:auto;min-height:17.5625rem;width:100%}[sprite-garden-container] [sprite-garden] img{width:calc(100% - 2rem)}[sprite-garden-container] [sprite-garden] p{padding:0 1rem}[sprite-garden-container] [sprite-garden] ul{padding:0 3rem;text-align:left}sprite-garden{--sg-color-black: #121212;--sg-tile-fog-color: var(--x-shell-background-color);display:none}
`],encapsulation:3})};export{zo as XSpriteGardenComponent};
