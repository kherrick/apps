import{b as lo}from"./chunk-QNJTP72R.js";import{q as ao}from"./chunk-DCYIHBUG.js";import{$b as io,Ab as oo,Ac as $t,Bb as ro,Da as to,Ec as en,Jb as Ie,Kb as ge,Lb as Kt,Mb as zt,Rb as Qt,Sb as At,Va as Pt,_b as qt,ba as ze,fa as qn,fc as ue,ga as It,ha as ut,ib as no,ka as $n,la as eo,ra as Ct}from"./chunk-5BYLU2DL.js";import{a as D,b as $}from"./chunk-DAQOROHW.js";var mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function tn(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var so,go={exports:{}};var Or=(so||(so=1,go.exports=(function a(e,t,n){function g(d,l){if(!t[d]){if(!e[d]){if(!l&&tn)return tn(d);if(o)return o(d,!0);var i=new Error("Cannot find module '"+d+"'");throw i.code="MODULE_NOT_FOUND",i}var I=t[d]={exports:{}};e[d][0].call(I.exports,function(r){var c=e[d][1][r];return g(c||r)},I,I.exports,a,e,t,n)}return t[d].exports}for(var o=tn,s=0;s<n.length;s++)g(n[s]);return g})({1:[function(a,e,t){(function(n){var g,o,s=n.MutationObserver||n.WebKitMutationObserver;if(s){var d=0,l=new s(c),i=n.document.createTextNode("");l.observe(i,{characterData:!0}),g=function(){i.data=d=++d%2}}else if(n.setImmediate||n.MessageChannel===void 0)g="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var C=n.document.createElement("script");C.onreadystatechange=function(){c(),C.onreadystatechange=null,C.parentNode.removeChild(C),C=null},n.document.documentElement.appendChild(C)}:function(){setTimeout(c,0)};else{var I=new n.MessageChannel;I.port1.onmessage=c,g=function(){I.port2.postMessage(0)}}var r=[];function c(){var C,h;o=!0;for(var p=r.length;p;){for(h=r,r=[],C=-1;++C<p;)h[C]();p=r.length}o=!1}function A(C){r.push(C)!==1||o||g()}e.exports=A}).call(this,mt!==void 0?mt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(a,e,t){var n=a(1);function g(){}var o={},s=["REJECTED"],d=["FULFILLED"],l=["PENDING"];function i(G){if(typeof G!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,G!==g&&A(this,G)}function I(G,R,w){this.promise=G,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function r(G,R,w){n(function(){var N;try{N=R(w)}catch(k){return o.reject(G,k)}N===G?o.reject(G,new TypeError("Cannot resolve promise with itself")):o.resolve(G,N)})}function c(G){var R=G&&G.then;if(G&&(typeof G=="object"||typeof G=="function")&&typeof R=="function")return function(){R.apply(G,arguments)}}function A(G,R){var w=!1;function N(F){w||(w=!0,o.reject(G,F))}function k(F){w||(w=!0,o.resolve(G,F))}function X(){R(k,N)}var H=C(X);H.status==="error"&&N(H.value)}function C(G,R){var w={};try{w.value=G(R),w.status="success"}catch(N){w.status="error",w.value=N}return w}function h(G){return G instanceof this?G:o.resolve(new this(g),G)}function p(G){var R=new this(g);return o.reject(R,G)}function y(G){var R=this;if(Object.prototype.toString.call(G)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=G.length,N=!1;if(!w)return this.resolve([]);for(var k=new Array(w),X=0,H=-1,F=new this(g);++H<w;)q(G[H],H);return F;function q(te,me){function ae(ce){k[me]=ce,++X!==w||N||(N=!0,o.resolve(F,k))}R.resolve(te).then(ae,function(ce){N||(N=!0,o.reject(F,ce))})}}function v(G){var R=this;if(Object.prototype.toString.call(G)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=G.length,N=!1;if(!w)return this.resolve([]);for(var k=-1,X=new this(g);++k<w;)H(G[k]);return X;function H(F){R.resolve(F).then(function(q){N||(N=!0,o.resolve(X,q))},function(q){N||(N=!0,o.reject(X,q))})}}e.exports=i,i.prototype.catch=function(G){return this.then(null,G)},i.prototype.then=function(G,R){if(typeof G!="function"&&this.state===d||typeof R!="function"&&this.state===s)return this;var w=new this.constructor(g);return this.state!==l?r(w,this.state===d?G:R,this.outcome):this.queue.push(new I(w,G,R)),w},I.prototype.callFulfilled=function(G){o.resolve(this.promise,G)},I.prototype.otherCallFulfilled=function(G){r(this.promise,this.onFulfilled,G)},I.prototype.callRejected=function(G){o.reject(this.promise,G)},I.prototype.otherCallRejected=function(G){r(this.promise,this.onRejected,G)},o.resolve=function(G,R){var w=C(c,R);if(w.status==="error")return o.reject(G,w.value);var N=w.value;if(N)A(G,N);else{G.state=d,G.outcome=R;for(var k=-1,X=G.queue.length;++k<X;)G.queue[k].callFulfilled(R)}return G},o.reject=function(G,R){G.state=s,G.outcome=R;for(var w=-1,N=G.queue.length;++w<N;)G.queue[w].callRejected(R);return G},i.resolve=h,i.reject=p,i.all=y,i.race=v},{1:1}],3:[function(a,e,t){(function(n){typeof n.Promise!="function"&&(n.Promise=a(2))}).call(this,mt!==void 0?mt:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(a,e,t){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};function g(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")}function o(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var s=o();function d(){try{if(!s||!s.open)return!1;var u=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),m=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!u||m)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function l(u,m){u=u||[],m=m||{};try{return new Blob(u,m)}catch(f){if(f.name!=="TypeError")throw f;for(var b=new(typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder),W=0;W<u.length;W+=1)b.append(u[W]);return b.getBlob(m.type)}}typeof Promise>"u"&&a(3);var i=Promise;function I(u,m){m&&u.then(function(b){m(null,b)},function(b){m(b)})}function r(u,m,b){typeof m=="function"&&u.then(m),typeof b=="function"&&u.catch(b)}function c(u){return typeof u!="string"&&(console.warn(u+" used as a key, but it is not a string."),u=String(u)),u}function A(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var C="local-forage-detect-blob-support",h=void 0,p={},y=Object.prototype.toString,v="readonly",G="readwrite";function R(u){for(var m=u.length,b=new ArrayBuffer(m),W=new Uint8Array(b),f=0;f<m;f++)W[f]=u.charCodeAt(f);return b}function w(u){return new i(function(m){var b=u.transaction(C,G),W=l([""]);b.objectStore(C).put(W,"key"),b.onabort=function(f){f.preventDefault(),f.stopPropagation(),m(!1)},b.oncomplete=function(){var f=navigator.userAgent.match(/Chrome\/(\d+)/),Z=navigator.userAgent.match(/Edge\//);m(Z||!f||parseInt(f[1],10)>=43)}}).catch(function(){return!1})}function N(u){return typeof h=="boolean"?i.resolve(h):w(u).then(function(m){return h=m})}function k(u){var m=p[u.name],b={};b.promise=new i(function(W,f){b.resolve=W,b.reject=f}),m.deferredOperations.push(b),m.dbReady?m.dbReady=m.dbReady.then(function(){return b.promise}):m.dbReady=b.promise}function X(u){var m=p[u.name].deferredOperations.pop();if(m)return m.resolve(),m.promise}function H(u,m){var b=p[u.name].deferredOperations.pop();if(b)return b.reject(m),b.promise}function F(u,m){return new i(function(b,W){if(p[u.name]=p[u.name]||rt(),u.db){if(!m)return b(u.db);k(u),u.db.close()}var f=[u.name];m&&f.push(u.version);var Z=s.open.apply(s,f);m&&(Z.onupgradeneeded=function(E){var T=Z.result;try{T.createObjectStore(u.storeName),E.oldVersion<=1&&T.createObjectStore(C)}catch(M){if(M.name!=="ConstraintError")throw M;console.warn('The database "'+u.name+'" has been upgraded from version '+E.oldVersion+" to version "+E.newVersion+', but the storage "'+u.storeName+'" already exists.')}}),Z.onerror=function(E){E.preventDefault(),W(Z.error)},Z.onsuccess=function(){var E=Z.result;E.onversionchange=function(T){T.target.close()},b(E),X(u)}})}function q(u){return F(u,!1)}function te(u){return F(u,!0)}function me(u,m){if(!u.db)return!0;var b=!u.db.objectStoreNames.contains(u.storeName),W=u.version<u.db.version,f=u.version>u.db.version;if(W&&(u.version!==m&&console.warn('The database "'+u.name+`" can't be downgraded from version `+u.db.version+" to version "+u.version+"."),u.version=u.db.version),f||b){if(b){var Z=u.db.version+1;Z>u.version&&(u.version=Z)}return!0}return!1}function ae(u){return new i(function(m,b){var W=new FileReader;W.onerror=b,W.onloadend=function(f){var Z=btoa(f.target.result||"");m({__local_forage_encoded_blob:!0,data:Z,type:u.type})},W.readAsBinaryString(u)})}function ce(u){return l([R(atob(u.data))],{type:u.type})}function Re(u){return u&&u.__local_forage_encoded_blob}function fe(u){var m=this,b=m._initReady().then(function(){var W=p[m._dbInfo.name];if(W&&W.dbReady)return W.dbReady});return r(b,u,u),b}function ne(u){k(u);for(var m=p[u.name],b=m.forages,W=0;W<b.length;W++){var f=b[W];f._dbInfo.db&&(f._dbInfo.db.close(),f._dbInfo.db=null)}return u.db=null,q(u).then(function(Z){return u.db=Z,me(u)?te(u):Z}).then(function(Z){u.db=m.db=Z;for(var E=0;E<b.length;E++)b[E]._dbInfo.db=Z}).catch(function(Z){throw H(u,Z),Z})}function le(u,m,b,W){W===void 0&&(W=1);try{var f=u.db.transaction(u.storeName,m);b(null,f)}catch(Z){if(W>0&&(!u.db||Z.name==="InvalidStateError"||Z.name==="NotFoundError"))return i.resolve().then(function(){if(!u.db||Z.name==="NotFoundError"&&!u.db.objectStoreNames.contains(u.storeName)&&u.version<=u.db.version)return u.db&&(u.version=u.db.version+1),te(u)}).then(function(){return ne(u).then(function(){le(u,m,b,W-1)})}).catch(b);b(Z)}}function rt(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ee(u){var m=this,b={db:null};if(u)for(var W in u)b[W]=u[W];var f=p[b.name];f||(f=rt(),p[b.name]=f),f.forages.push(m),m._initReady||(m._initReady=m.ready,m.ready=fe);var Z=[];function E(){return i.resolve()}for(var T=0;T<f.forages.length;T++){var M=f.forages[T];M!==m&&Z.push(M._initReady().catch(E))}var B=f.forages.slice(0);return i.all(Z).then(function(){return b.db=f.db,q(b)}).then(function(Y){return b.db=Y,me(b,m._defaultConfig.version)?te(b):Y}).then(function(Y){b.db=f.db=Y,m._dbInfo=b;for(var J=0;J<B.length;J++){var j=B[J];j!==m&&(j._dbInfo.db=b.db,j._dbInfo.version=b.version)}})}function se(u,m){var b=this;u=c(u);var W=new i(function(f,Z){b.ready().then(function(){le(b._dbInfo,v,function(E,T){if(E)return Z(E);try{var M=T.objectStore(b._dbInfo.storeName).get(u);M.onsuccess=function(){var B=M.result;B===void 0&&(B=null),Re(B)&&(B=ce(B)),f(B)},M.onerror=function(){Z(M.error)}}catch(B){Z(B)}})}).catch(Z)});return I(W,m),W}function xt(u,m){var b=this,W=new i(function(f,Z){b.ready().then(function(){le(b._dbInfo,v,function(E,T){if(E)return Z(E);try{var M=T.objectStore(b._dbInfo.storeName).openCursor(),B=1;M.onsuccess=function(){var Y=M.result;if(Y){var J=Y.value;Re(J)&&(J=ce(J));var j=u(J,Y.key,B++);j!==void 0?f(j):Y.continue()}else f()},M.onerror=function(){Z(M.error)}}catch(Y){Z(Y)}})}).catch(Z)});return I(W,m),W}function Vt(u,m,b){var W=this;u=c(u);var f=new i(function(Z,E){var T;W.ready().then(function(){return T=W._dbInfo,y.call(m)==="[object Blob]"?N(T.db).then(function(M){return M?m:ae(m)}):m}).then(function(M){le(W._dbInfo,G,function(B,Y){if(B)return E(B);try{var J=Y.objectStore(W._dbInfo.storeName);M===null&&(M=void 0);var j=J.put(M,u);Y.oncomplete=function(){M===void 0&&(M=null),Z(M)},Y.onabort=Y.onerror=function(){var P=j.error?j.error:j.transaction.error;E(P)}}catch(P){E(P)}})}).catch(E)});return I(f,b),f}function Yt(u,m){var b=this;u=c(u);var W=new i(function(f,Z){b.ready().then(function(){le(b._dbInfo,G,function(E,T){if(E)return Z(E);try{var M=T.objectStore(b._dbInfo.storeName).delete(u);T.oncomplete=function(){f()},T.onerror=function(){Z(M.error)},T.onabort=function(){var B=M.error?M.error:M.transaction.error;Z(B)}}catch(B){Z(B)}})}).catch(Z)});return I(W,m),W}function Xt(u){var m=this,b=new i(function(W,f){m.ready().then(function(){le(m._dbInfo,G,function(Z,E){if(Z)return f(Z);try{var T=E.objectStore(m._dbInfo.storeName).clear();E.oncomplete=function(){W()},E.onabort=E.onerror=function(){var M=T.error?T.error:T.transaction.error;f(M)}}catch(M){f(M)}})}).catch(f)});return I(b,u),b}function Jt(u){var m=this,b=new i(function(W,f){m.ready().then(function(){le(m._dbInfo,v,function(Z,E){if(Z)return f(Z);try{var T=E.objectStore(m._dbInfo.storeName).count();T.onsuccess=function(){W(T.result)},T.onerror=function(){f(T.error)}}catch(M){f(M)}})}).catch(f)});return I(b,u),b}function it(u,m){var b=this,W=new i(function(f,Z){u<0?f(null):b.ready().then(function(){le(b._dbInfo,v,function(E,T){if(E)return Z(E);try{var M=T.objectStore(b._dbInfo.storeName),B=!1,Y=M.openKeyCursor();Y.onsuccess=function(){var J=Y.result;J?u===0||B?f(J.key):(B=!0,J.advance(u)):f(null)},Y.onerror=function(){Z(Y.error)}}catch(J){Z(J)}})}).catch(Z)});return I(W,m),W}function Ut(u){var m=this,b=new i(function(W,f){m.ready().then(function(){le(m._dbInfo,v,function(Z,E){if(Z)return f(Z);try{var T=E.objectStore(m._dbInfo.storeName).openKeyCursor(),M=[];T.onsuccess=function(){var B=T.result;B?(M.push(B.key),B.continue()):W(M)},T.onerror=function(){f(T.error)}}catch(B){f(B)}})}).catch(f)});return I(b,u),b}function Ot(u,m){m=A.apply(this,arguments);var b=this.config();(u=typeof u!="function"&&u||{}).name||(u.name=u.name||b.name,u.storeName=u.storeName||b.storeName);var W,f=this;if(u.name){var Z=u.name===b.name&&f._dbInfo.db?i.resolve(f._dbInfo.db):q(u).then(function(E){var T=p[u.name],M=T.forages;T.db=E;for(var B=0;B<M.length;B++)M[B]._dbInfo.db=E;return E});W=u.storeName?Z.then(function(E){if(E.objectStoreNames.contains(u.storeName)){var T=E.version+1;k(u);var M=p[u.name],B=M.forages;E.close();for(var Y=0;Y<B.length;Y++){var J=B[Y];J._dbInfo.db=null,J._dbInfo.version=T}var j=new i(function(P,K){var re=s.open(u.name,T);re.onerror=function(Ze){re.result.close(),K(Ze)},re.onupgradeneeded=function(){re.result.deleteObjectStore(u.storeName)},re.onsuccess=function(){var Ze=re.result;Ze.close(),P(Ze)}});return j.then(function(P){M.db=P;for(var K=0;K<B.length;K++){var re=B[K];re._dbInfo.db=P,X(re._dbInfo)}}).catch(function(P){throw(H(u,P)||i.resolve()).catch(function(){}),P})}}):Z.then(function(E){k(u);var T=p[u.name],M=T.forages;E.close();for(var B=0;B<M.length;B++)M[B]._dbInfo.db=null;var Y=new i(function(J,j){var P=s.deleteDatabase(u.name);P.onerror=function(){var K=P.result;K&&K.close(),j(P.error)},P.onblocked=function(){console.warn('dropInstance blocked for database "'+u.name+'" until all open connections are closed')},P.onsuccess=function(){var K=P.result;K&&K.close(),J(K)}});return Y.then(function(J){T.db=J;for(var j=0;j<M.length;j++)X(M[j]._dbInfo)}).catch(function(J){throw(H(u,J)||i.resolve()).catch(function(){}),J})})}else W=i.reject("Invalid arguments");return I(W,m),W}var he={_driver:"asyncStorage",_initStorage:Ee,_support:d(),iterate:xt,getItem:se,setItem:Vt,removeItem:Yt,clear:Xt,length:Jt,key:it,keys:Ut,dropInstance:Ot};function Ye(){return typeof openDatabase=="function"}var de="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ht="~~local_forage_type~",pe=/^~~local_forage_type~([^~]+)~/,Te="__lfsc__:",Fe=Te.length,Me="arbf",je="blob",at="si08",Ne="ui08",ke="uic8",oe="si16",lt="si32",st="ur16",gt="ui32",ct="fl32",Be="fl64",xe=Fe+Me.length,ye=Object.prototype.toString;function Ge(u){var m,b,W,f,Z,E=.75*u.length,T=u.length,M=0;u[u.length-1]==="="&&(E--,u[u.length-2]==="="&&E--);var B=new ArrayBuffer(E),Y=new Uint8Array(B);for(m=0;m<T;m+=4)b=de.indexOf(u[m]),W=de.indexOf(u[m+1]),f=de.indexOf(u[m+2]),Z=de.indexOf(u[m+3]),Y[M++]=b<<2|W>>4,Y[M++]=(15&W)<<4|f>>2,Y[M++]=(3&f)<<6|63&Z;return B}function We(u){var m,b=new Uint8Array(u),W="";for(m=0;m<b.length;m+=3)W+=de[b[m]>>2],W+=de[(3&b[m])<<4|b[m+1]>>4],W+=de[(15&b[m+1])<<2|b[m+2]>>6],W+=de[63&b[m+2]];return b.length%3==2?W=W.substring(0,W.length-1)+"=":b.length%3==1&&(W=W.substring(0,W.length-2)+"=="),W}function _e(u,m){var b="";if(u&&(b=ye.call(u)),u&&(b==="[object ArrayBuffer]"||u.buffer&&ye.call(u.buffer)==="[object ArrayBuffer]")){var W,f=Te;u instanceof ArrayBuffer?(W=u,f+=Me):(W=u.buffer,b==="[object Int8Array]"?f+=at:b==="[object Uint8Array]"?f+=Ne:b==="[object Uint8ClampedArray]"?f+=ke:b==="[object Int16Array]"?f+=oe:b==="[object Uint16Array]"?f+=st:b==="[object Int32Array]"?f+=lt:b==="[object Uint32Array]"?f+=gt:b==="[object Float32Array]"?f+=ct:b==="[object Float64Array]"?f+=Be:m(new Error("Failed to get type for BinaryArray"))),m(f+We(W))}else if(b==="[object Blob]"){var Z=new FileReader;Z.onload=function(){var E=Ht+u.type+"~"+We(this.result);m(Te+je+E)},Z.readAsArrayBuffer(u)}else try{m(JSON.stringify(u))}catch(E){console.error("Couldn't convert value into a JSON string: ",u),m(null,E)}}function ve(u){if(u.substring(0,Fe)!==Te)return JSON.parse(u);var m,b=u.substring(xe),W=u.substring(Fe,xe);if(W===je&&pe.test(b)){var f=b.match(pe);m=f[1],b=b.substring(f[0].length)}var Z=Ge(b);switch(W){case Me:return Z;case je:return l([Z],{type:m});case at:return new Int8Array(Z);case Ne:return new Uint8Array(Z);case ke:return new Uint8ClampedArray(Z);case oe:return new Int16Array(Z);case st:return new Uint16Array(Z);case lt:return new Int32Array(Z);case gt:return new Uint32Array(Z);case ct:return new Float32Array(Z);case Be:return new Float64Array(Z);default:throw new Error("Unkown type: "+W)}}var Pe={serialize:_e,deserialize:ve,stringToBuffer:Ge,bufferToString:We};function jn(u,m,b,W){u.executeSql("CREATE TABLE IF NOT EXISTS "+m.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],b,W)}function lr(u){var m=this,b={db:null};if(u)for(var W in u)b[W]=typeof u[W]!="string"?u[W].toString():u[W];var f=new i(function(Z,E){try{b.db=openDatabase(b.name,String(b.version),b.description,b.size)}catch(T){return E(T)}b.db.transaction(function(T){jn(T,b,function(){m._dbInfo=b,Z()},function(M,B){E(B)})},E)});return b.serializer=Pe,f}function Le(u,m,b,W,f,Z){u.executeSql(b,W,f,function(E,T){T.code===T.SYNTAX_ERR?E.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[m.storeName],function(M,B){B.rows.length?Z(M,T):jn(M,m,function(){M.executeSql(b,W,f,Z)},Z)},Z):Z(E,T)},Z)}function sr(u,m){var b=this;u=c(u);var W=new i(function(f,Z){b.ready().then(function(){var E=b._dbInfo;E.db.transaction(function(T){Le(T,E,"SELECT * FROM "+E.storeName+" WHERE key = ? LIMIT 1",[u],function(M,B){var Y=B.rows.length?B.rows.item(0).value:null;Y&&(Y=E.serializer.deserialize(Y)),f(Y)},function(M,B){Z(B)})})}).catch(Z)});return I(W,m),W}function gr(u,m){var b=this,W=new i(function(f,Z){b.ready().then(function(){var E=b._dbInfo;E.db.transaction(function(T){Le(T,E,"SELECT * FROM "+E.storeName,[],function(M,B){for(var Y=B.rows,J=Y.length,j=0;j<J;j++){var P=Y.item(j),K=P.value;if(K&&(K=E.serializer.deserialize(K)),(K=u(K,P.key,j+1))!==void 0)return void f(K)}f()},function(M,B){Z(B)})})}).catch(Z)});return I(W,m),W}function _n(u,m,b,W){var f=this;u=c(u);var Z=new i(function(E,T){f.ready().then(function(){m===void 0&&(m=null);var M=m,B=f._dbInfo;B.serializer.serialize(m,function(Y,J){J?T(J):B.db.transaction(function(j){Le(j,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[u,Y],function(){E(M)},function(P,K){T(K)})},function(j){if(j.code===j.QUOTA_ERR){if(W>0)return void E(_n.apply(f,[u,M,b,W-1]));T(j)}})})}).catch(T)});return I(Z,b),Z}function cr(u,m,b){return _n.apply(this,[u,m,b,1])}function dr(u,m){var b=this;u=c(u);var W=new i(function(f,Z){b.ready().then(function(){var E=b._dbInfo;E.db.transaction(function(T){Le(T,E,"DELETE FROM "+E.storeName+" WHERE key = ?",[u],function(){f()},function(M,B){Z(B)})})}).catch(Z)});return I(W,m),W}function Ir(u){var m=this,b=new i(function(W,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(E){Le(E,Z,"DELETE FROM "+Z.storeName,[],function(){W()},function(T,M){f(M)})})}).catch(f)});return I(b,u),b}function ur(u){var m=this,b=new i(function(W,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(E){Le(E,Z,"SELECT COUNT(key) as c FROM "+Z.storeName,[],function(T,M){var B=M.rows.item(0).c;W(B)},function(T,M){f(M)})})}).catch(f)});return I(b,u),b}function Cr(u,m){var b=this,W=new i(function(f,Z){b.ready().then(function(){var E=b._dbInfo;E.db.transaction(function(T){Le(T,E,"SELECT key FROM "+E.storeName+" WHERE id = ? LIMIT 1",[u+1],function(M,B){var Y=B.rows.length?B.rows.item(0).key:null;f(Y)},function(M,B){Z(B)})})}).catch(Z)});return I(W,m),W}function Ar(u){var m=this,b=new i(function(W,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(E){Le(E,Z,"SELECT key FROM "+Z.storeName,[],function(T,M){for(var B=[],Y=0;Y<M.rows.length;Y++)B.push(M.rows.item(Y).key);W(B)},function(T,M){f(M)})})}).catch(f)});return I(b,u),b}function mr(u){return new i(function(m,b){u.transaction(function(W){W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(f,Z){for(var E=[],T=0;T<Z.rows.length;T++)E.push(Z.rows.item(T).name);m({db:u,storeNames:E})},function(f,Z){b(Z)})},function(W){b(W)})})}function br(u,m){m=A.apply(this,arguments);var b=this.config();(u=typeof u!="function"&&u||{}).name||(u.name=u.name||b.name,u.storeName=u.storeName||b.storeName);var W,f=this;return I(W=u.name?new i(function(Z){var E;E=u.name===b.name?f._dbInfo.db:openDatabase(u.name,"","",0),u.storeName?Z({db:E,storeNames:[u.storeName]}):Z(mr(E))}).then(function(Z){return new i(function(E,T){Z.db.transaction(function(M){function B(P){return new i(function(K,re){M.executeSql("DROP TABLE IF EXISTS "+P,[],function(){K()},function(Ze,jt){re(jt)})})}for(var Y=[],J=0,j=Z.storeNames.length;J<j;J++)Y.push(B(Z.storeNames[J]));i.all(Y).then(function(){E()}).catch(function(P){T(P)})},function(M){T(M)})})}):i.reject("Invalid arguments"),m),W}var hr={_driver:"webSQLStorage",_initStorage:lr,_support:Ye(),iterate:gr,getItem:sr,setItem:cr,removeItem:dr,clear:Ir,length:ur,key:Cr,keys:Ar,dropInstance:br};function pr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Pn(u,m){var b=u.name+"/";return u.storeName!==m.storeName&&(b+=u.storeName+"/"),b}function yr(){var u="_localforage_support_test";try{return localStorage.setItem(u,!0),localStorage.removeItem(u),!1}catch{return!0}}function vr(){return!yr()||localStorage.length>0}function fr(u){var m=this,b={};if(u)for(var W in u)b[W]=u[W];return b.keyPrefix=Pn(u,m._defaultConfig),vr()?(m._dbInfo=b,b.serializer=Pe,i.resolve()):i.reject()}function Gr(u){var m=this,b=m.ready().then(function(){for(var W=m._dbInfo.keyPrefix,f=localStorage.length-1;f>=0;f--){var Z=localStorage.key(f);Z.indexOf(W)===0&&localStorage.removeItem(Z)}});return I(b,u),b}function Wr(u,m){var b=this;u=c(u);var W=b.ready().then(function(){var f=b._dbInfo,Z=localStorage.getItem(f.keyPrefix+u);return Z&&(Z=f.serializer.deserialize(Z)),Z});return I(W,m),W}function Zr(u,m){var b=this,W=b.ready().then(function(){for(var f=b._dbInfo,Z=f.keyPrefix,E=Z.length,T=localStorage.length,M=1,B=0;B<T;B++){var Y=localStorage.key(B);if(Y.indexOf(Z)===0){var J=localStorage.getItem(Y);if(J&&(J=f.serializer.deserialize(J)),(J=u(J,Y.substring(E),M++))!==void 0)return J}}});return I(W,m),W}function Sr(u,m){var b=this,W=b.ready().then(function(){var f,Z=b._dbInfo;try{f=localStorage.key(u)}catch{f=null}return f&&(f=f.substring(Z.keyPrefix.length)),f});return I(W,m),W}function wr(u){var m=this,b=m.ready().then(function(){for(var W=m._dbInfo,f=localStorage.length,Z=[],E=0;E<f;E++){var T=localStorage.key(E);T.indexOf(W.keyPrefix)===0&&Z.push(T.substring(W.keyPrefix.length))}return Z});return I(b,u),b}function Rr(u){var m=this.keys().then(function(b){return b.length});return I(m,u),m}function Lr(u,m){var b=this;u=c(u);var W=b.ready().then(function(){var f=b._dbInfo;localStorage.removeItem(f.keyPrefix+u)});return I(W,m),W}function Er(u,m,b){var W=this;u=c(u);var f=W.ready().then(function(){m===void 0&&(m=null);var Z=m;return new i(function(E,T){var M=W._dbInfo;M.serializer.serialize(m,function(B,Y){if(Y)T(Y);else try{localStorage.setItem(M.keyPrefix+u,B),E(Z)}catch(J){J.name!=="QuotaExceededError"&&J.name!=="NS_ERROR_DOM_QUOTA_REACHED"||T(J),T(J)}})})});return I(f,b),f}function Tr(u,m){if(m=A.apply(this,arguments),!(u=typeof u!="function"&&u||{}).name){var b=this.config();u.name=u.name||b.name,u.storeName=u.storeName||b.storeName}var W,f=this;return W=u.name?new i(function(Z){u.storeName?Z(Pn(u,f._defaultConfig)):Z(u.name+"/")}).then(function(Z){for(var E=localStorage.length-1;E>=0;E--){var T=localStorage.key(E);T.indexOf(Z)===0&&localStorage.removeItem(T)}}):i.reject("Invalid arguments"),I(W,m),W}var Mr={_driver:"localStorageWrapper",_initStorage:fr,_support:pr(),iterate:Zr,getItem:Wr,setItem:Er,removeItem:Lr,clear:Gr,length:Rr,key:Sr,keys:wr,dropInstance:Tr},Nr=function(u,m){return u===m||typeof u=="number"&&typeof m=="number"&&isNaN(u)&&isNaN(m)},kr=function(u,m){for(var b=u.length,W=0;W<b;){if(Nr(u[W],m))return!0;W++}return!1},Kn=Array.isArray||function(u){return Object.prototype.toString.call(u)==="[object Array]"},Ke={},zn={},Xe={INDEXEDDB:he,WEBSQL:hr,LOCALSTORAGE:Mr},Br=[Xe.INDEXEDDB._driver,Xe.WEBSQL._driver,Xe.LOCALSTORAGE._driver],dt=["dropInstance"],Dt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(dt),xr={description:"",driver:Br.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Vr(u,m){u[m]=function(){var b=arguments;return u.ready().then(function(){return u[m].apply(u,b)})}}function Ft(){for(var u=1;u<arguments.length;u++){var m=arguments[u];if(m)for(var b in m)m.hasOwnProperty(b)&&(Kn(m[b])?arguments[0][b]=m[b].slice():arguments[0][b]=m[b])}return arguments[0]}var Yr=(function(){function u(m){for(var b in g(this,u),Xe)if(Xe.hasOwnProperty(b)){var W=Xe[b],f=W._driver;this[b]=f,Ke[f]||this.defineDriver(W)}this._defaultConfig=Ft({},xr),this._config=Ft({},this._defaultConfig,m),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return u.prototype.config=function(m){if((m===void 0?"undefined":n(m))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in m){if(b==="storeName"&&(m[b]=m[b].replace(/\W/g,"_")),b==="version"&&typeof m[b]!="number")return new Error("Database version must be a number.");this._config[b]=m[b]}return!("driver"in m)||!m.driver||this.setDriver(this._config.driver)}return typeof m=="string"?this._config[m]:this._config},u.prototype.defineDriver=function(m,b,W){var f=new i(function(Z,E){try{var T=m._driver,M=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!m._driver)return void E(M);for(var B=Dt.concat("_initStorage"),Y=0,J=B.length;Y<J;Y++){var j=B[Y];if((!kr(dt,j)||m[j])&&typeof m[j]!="function")return void E(M)}var P=function(){for(var re=function(Jr){return function(){var Ur=new Error("Method "+Jr+" is not implemented by the current driver"),Qn=i.reject(Ur);return I(Qn,arguments[arguments.length-1]),Qn}},Ze=0,jt=dt.length;Ze<jt;Ze++){var _t=dt[Ze];m[_t]||(m[_t]=re(_t))}};P();var K=function(re){Ke[T]&&console.info("Redefining LocalForage driver: "+T),Ke[T]=m,zn[T]=re,Z()};"_support"in m?m._support&&typeof m._support=="function"?m._support().then(K,E):K(!!m._support):K(!0)}catch(re){E(re)}});return r(f,b,W),f},u.prototype.driver=function(){return this._driver||null},u.prototype.getDriver=function(m,b,W){var f=Ke[m]?i.resolve(Ke[m]):i.reject(new Error("Driver not found."));return r(f,b,W),f},u.prototype.getSerializer=function(m){var b=i.resolve(Pe);return r(b,m),b},u.prototype.ready=function(m){var b=this,W=b._driverSet.then(function(){return b._ready===null&&(b._ready=b._initDriver()),b._ready});return r(W,m,m),W},u.prototype.setDriver=function(m,b,W){var f=this;Kn(m)||(m=[m]);var Z=this._getSupportedDrivers(m);function E(){f._config.driver=f.driver()}function T(Y){return f._extend(Y),E(),f._ready=f._initStorage(f._config),f._ready}function M(Y){return function(){var J=0;function j(){for(;J<Y.length;){var P=Y[J];return J++,f._dbInfo=null,f._ready=null,f.getDriver(P).then(T).catch(j)}E();var K=new Error("No available storage method found.");return f._driverSet=i.reject(K),f._driverSet}return j()}}var B=this._driverSet!==null?this._driverSet.catch(function(){return i.resolve()}):i.resolve();return this._driverSet=B.then(function(){var Y=Z[0];return f._dbInfo=null,f._ready=null,f.getDriver(Y).then(function(J){f._driver=J._driver,E(),f._wrapLibraryMethodsWithReady(),f._initDriver=M(Z)})}).catch(function(){E();var Y=new Error("No available storage method found.");return f._driverSet=i.reject(Y),f._driverSet}),r(this._driverSet,b,W),this._driverSet},u.prototype.supports=function(m){return!!zn[m]},u.prototype._extend=function(m){Ft(this,m)},u.prototype._getSupportedDrivers=function(m){for(var b=[],W=0,f=m.length;W<f;W++){var Z=m[W];this.supports(Z)&&b.push(Z)}return b},u.prototype._wrapLibraryMethodsWithReady=function(){for(var m=0,b=Dt.length;m<b;m++)Vr(this,Dt[m])},u.prototype.createInstance=function(m){return new u(m)},u})(),Xr=new Yr;e.exports=Xr},{3:3}]},{},[4])(4)),go.exports),Q=Yn(Or);function Bo(a,e){let t=new Uint8Array(e),n="";for(let g=0;g<t.byteLength;g++)n+=String.fromCharCode(t[g]);return a.btoa(n)}function bn(a,e,t){let n=(function(o,s){let d=o.atob(s),l=d.length,i=new Uint8Array(l);for(let I=0;I<l;I++)i[I]=d.charCodeAt(I);return i.buffer})(a,e),g=new Uint8Array(n);return new Blob([g.buffer],{type:t})}async function St(a){let e=new TextEncoder().encode(a);if("CompressionStream"in window){let t=new Blob([e]).stream().pipeThrough(new CompressionStream("gzip"));return await new Response(t).blob()}}async function Hr(a,e){let t=`sprite-garden-save-game-file-${(function(){let g=new Date;return`${g.getUTCFullYear()}-${`${g.getUTCMonth()+1}`.padStart(2,"0")}-${`${g.getUTCDate()}`.padStart(2,"0")}_${`${g.getUTCHours()}`.padStart(2,"0")}-${`${g.getUTCMinutes()}`.padStart(2,"0")}-${`${g.getUTCSeconds()}`.padStart(2,"0")}.${`${g.getUTCMilliseconds()}`.padStart(3,"0")}`})()}.sgs`,n;if(a.showSaveFilePicker)n=await a.showSaveFilePicker({suggestedName:t}),await(async function(g,o){let s=await St(g),d=await o.createWritable();await d.write(s),await d.close()})(e,n);else{let g=await St(e),o=URL.createObjectURL(g),s=a.document.createElement("a");s.href=o,s.download=t,a.document.body.append(s),s.click(),a.document.body.removeChild(s),URL.revokeObjectURL(o)}}function Nt(a){let e=a.spriteGarden.state,t=a.spriteGarden.config,n=e.plantStructures.get();return{config:{breakMode:t.breakMode.get(),canvasScale:t.canvasScale.get(),currentResolution:t.currentResolution.get(),fogMode:t.fogMode.get(),fogScale:t.fogScale.get(),FRICTION:t.FRICTION.get(),GRAVITY:t.GRAVITY.get(),isFogScaled:t.isFogScaled.get(),MAX_FALL_SPEED:t.MAX_FALL_SPEED.get(),SURFACE_LEVEL:t.SURFACE_LEVEL.get(),TILE_SIZE:t.TILE_SIZE.get(),version:t.version.get(),WORLD_HEIGHT:t.WORLD_HEIGHT.get(),WORLD_WIDTH:t.WORLD_WIDTH.get(),worldSeed:t.worldSeed.get()},state:{camera:e.camera.get(),exploredMap:e.exploredMap.get().toObject(),gameTime:e.gameTime.get(),growthTimers:e.growthTimers.get(),materialsInventory:e.materialsInventory.get(),plantStructures:Object.fromEntries(Object.entries(n).map(([g,o])=>{if(typeof o?.blocks=="object"){let s=Object.entries(o.blocks);return[g,$(D({},o),{blocks:Object.fromEntries(s.map(([d,l])=>[d,$(D({},l),{tile:l.tile.id})]))})]}return[g,D({},o)]})),player:e.player.get(),seedInventory:e.seedInventory.get(),seeds:e.seeds.get(),selectedMaterialType:e.selectedMaterialType.get(),selectedSeedType:e.selectedSeedType.get(),viewMode:e.viewMode.get(),world:e.world.get().toArray()}}}var xo={"amber-500":"#f39c12","amber-800":"#8b4513","amber-900":"#654321","antique-white":"#fffacd",beige:"#f5f5dc","black-alpha-60":"#00000099","black-alpha-80":"#000000cc",black:"#000000","blue-400":"#4a90e2","blue-500":"#2196f3","blue-700":"#0066cc",bronze:"#b87333",brown:"#654321",burlywood:"#deb887",chocolate:"#d2691e",coral:"#ff7f50",crimson:"#dc143c","dark-brown":"#59392b","dark-clay":"#cd853f","dark-cyan":"#2f4f2f","dark-green":"#2e5930","dark-olive-green":"#556b2f","dark-orange":"#ff8c00","dark-red":"#8b0000","dark-sea-green-light":"#9bcd9b","dark-sea-green":"#4f7942","dark-slate-gray":"#2f4f4f","dark-tan":"#8b7355","deep-pink":"#ff1493","dim-gray":"#696969","emerald-600":"#45a049","emerald-700":"#27ae60","forest-green":"#228b22",gold:"#ffd700",goldenrod:"#daa520","granite-gray-alpha-30":"#6464644d","gray-100":"#eeeeee","gray-200":"#e3e3e3","gray-300":"#e0e0e0","gray-400":"#dddddd","gray-50":"#f0f0f0","gray-500":"#cccccc","gray-600":"#bbbbbb","gray-700":"#888888","gray-800":"#666666","gray-900":"#333333","gray-alpha-10":"#ffffff1a","gray-alpha-20":"#ffffff33","gray-alpha-30":"#ffffff4d","gray-granite-alpha-30":"#6464644d","green-500":"#4caf50","green-yellow-400":"#adff2f","hot-pink":"#ff69b4","indian-red":"#cd5c5c",jet:"#1c1c1c",khaki:"#ffec8b","lawn-green":"#7cfc00","light-coral-pink":"#f08080","light-coral":"#ffa54f","light-pink":"#ffb6d9","light-sky-blue":"#87ceeb","light-steel-blue":"#c5d1d3","lime-400":"#32cd32","medium-purple":"#8a7fc8","medium-sea-green":"#3cb371","medium-slate-blue":"#9370db","misty-rose":"#ffe4e1","neutral-950":"#555","olive-drab-700":"#6b8e23","orange-500":"#ff6b35","orange-red":"#ff4500","pale-goldenrod":"#eee8aa","pale-green-200":"#90ee90","pale-green-300":"#98fb98",pink:"#ff69b4",plum:"#dda0dd","powder-blue":"#b0e0e6","red-500":"#ff4444","royal-blue":"#4169e1","saddle-brown":"#8b4513","sandy-brown":"#f4a460","sea-green":"#2e8b57","sky-300":"#87ceeb","sky-50":"#e6f3ff","stone-100":"#f1f1f1","stone-50":"#fffafa",tan:"#b8a99a",tomato:"#ff6347",white:"#ffffff","wood-brown":"#362200","yellow-400":"#ffff00","yellow-green-400":"#9acd32"},Vo={"touch-btn-background":"var(--sg-color-black-alpha-60)","touch-btn-border":"var(--sg-color-gray-alpha-30)","touch-btn":"var(--sg-color-white)","ui-grid-corner-container":"var(--sg-color-white)","ui-grid-corner-heading-background":"var(--black-alpha-80)","ui-grid-corner-heading-border":"var(--sg-color-gray-alpha-10)","ui-grid-corner-heading":"var(--sg-color-white)","ui-grid-corner-sub-heading":"var(--sg-color-white)"},Xn={"agave-base":"var(--sg-color-lime-400)","agave-flower-stalk":"var(--sg-color-yellow-green-400)","agave-flower":"var(--sg-color-yellow-400)","agave-growing":"var(--sg-color-green-yellow-400)","agave-spike":"var(--sg-color-lawn-green)",agave:"var(--sg-color-lawn-green)",air:"var(--sg-color-sky-300)","bamboo-growing":"var(--sg-color-pale-green-300)","bamboo-joint":"var(--sg-color-olive-drab-700)","bamboo-leaves":"var(--sg-color-lime-400)","bamboo-stalk":"var(--sg-color-pale-green-200)",bamboo:"var(--sg-color-pale-green-200)",bedrock:"var(--sg-color-jet)","berry-bush-berries":"var(--sg-color-crimson)","berry-bush-branch":"var(--sg-color-saddle-brown)","berry-bush-growing":"var(--sg-color-indian-red)","berry-bush-leaves":"var(--sg-color-forest-green)","berry-bush":"var(--sg-color-crimson)","birch-bark":"var(--sg-color-white)","birch-branches":"var(--sg-color-dark-tan)","birch-catkins":"var(--sg-color-pale-goldenrod)","birch-growing":"var(--sg-color-antique-white)","birch-leaves":"var(--sg-color-pale-green-300)","birch-trunk":"var(--sg-color-beige)",birch:"var(--sg-color-beige)","cactus-body":"var(--sg-color-sea-green)","cactus-flower":"var(--sg-color-hot-pink)","cactus-growing":"var(--sg-color-forest-green)",cactus:"var(--sg-color-lime-400)","carrot-growing":"var(--sg-color-coral)","carrot-leaves":"var(--sg-color-forest-green)","carrot-root":"var(--sg-color-tomato)",carrot:"var(--sg-color-dark-orange)",clay:"var(--sg-color-dark-clay)",cloud:"var(--sg-color-light-steel-blue)",coal:"var(--sg-color-dark-slate-gray)","corn-ear":"var(--sg-color-pale-goldenrod)","corn-growing":"var(--sg-color-pale-goldenrod)","corn-leaves":"var(--sg-color-olive-drab-700)","corn-silk":"var(--sg-color-burlywood)","corn-stalk":"var(--sg-color-yellow-green-400)",corn:"var(--sg-color-pale-goldenrod)",dirt:"var(--sg-color-saddle-brown)","fern-frond":"var(--sg-color-medium-sea-green)","fern-growing":"var(--sg-color-pale-green-200)","fern-stem":"var(--sg-color-dark-olive-green)",fern:"var(--sg-color-medium-sea-green)",fog:"var(--sg-color-black)",gold:"var(--sg-color-gold)",grass:"var(--sg-color-pale-green-200)",ice:"var(--sg-color-powder-blue)",iron:"var(--sg-color-bronze)","kelp-blade":"var(--sg-color-sea-green)","kelp-bulb":"var(--sg-color-dark-sea-green)","kelp-growing":"var(--sg-color-medium-slate-blue)",kelp:"var(--sg-color-dark-cyan)",lava:"var(--sg-color-orange-red)","lavender-bush":"var(--sg-color-medium-purple)","lavender-flowers":"var(--sg-color-medium-slate-blue)","lavender-growing":"var(--sg-color-plum)","lavender-stem":"var(--sg-color-dark-olive-green)",lavender:"var(--sg-color-medium-slate-blue)","loading-pixel":"var(--sg-color-light-sky-blue)","lotus-bud":"var(--sg-color-light-pink)","lotus-flower":"var(--sg-color-pink)","lotus-growing":"var(--sg-color-misty-rose)","lotus-pad":"var(--sg-color-medium-sea-green)","lotus-stem":"var(--sg-color-sea-green)",lotus:"var(--sg-color-pink)",moss:"var(--sg-color-dark-olive-green)","mushroom-cap":"var(--sg-color-dark-red)","mushroom-growing":"var(--sg-color-indian-red)","mushroom-stem":"var(--sg-color-chocolate)",mushroom:"var(--sg-color-dark-red)","pine-cone":"var(--sg-color-dark-tan)","pine-needles":"var(--sg-color-dark-green)","pine-tree-growing":"var(--sg-color-dark-olive-green)","pine-tree":"var(--sg-color-dark-green)","pine-trunk":"var(--sg-color-saddle-brown)","player-body":"var(--sg-color-pink)","player-border":"var(--sg-color-black)","player-eyes":"var(--sg-color-black)",pumice:"var(--sg-color-tan)","pumpkin-fruit":"var(--sg-color-dark-orange)","pumpkin-growing":"var(--sg-color-light-coral)","pumpkin-leaves":"var(--sg-color-yellow-green-400)","pumpkin-stem":"var(--sg-color-saddle-brown)","pumpkin-vine":"var(--sg-color-olive-drab-700)",pumpkin:"var(--sg-color-dark-orange)","rose-bloom":"var(--sg-color-crimson)","rose-bud":"var(--sg-color-indian-red)","rose-growing":"var(--sg-color-light-coral-pink)","rose-leaves":"var(--sg-color-dark-cyan)","rose-stem":"var(--sg-color-brown)","rose-thorns":"var(--sg-color-saddle-brown)",rose:"var(--sg-color-crimson)",sand:"var(--sg-color-sandy-brown)",snow:"var(--sg-color-stone-50)",stone:"var(--sg-color-dim-gray)","sunflower-center":"var(--sg-color-saddle-brown)","sunflower-growing":"var(--sg-color-khaki)","sunflower-leaves":"var(--sg-color-forest-green)","sunflower-petals":"var(--sg-color-gold)","sunflower-stem":"var(--sg-color-dark-tan)",sunflower:"var(--sg-color-gold)","tree-growing":"var(--sg-color-yellow-green-400)","tree-leaves":"var(--sg-color-forest-green)","tree-trunk":"var(--sg-color-dark-brown)","tulip-bulb":"var(--sg-color-dark-tan)","tulip-growing":"var(--sg-color-light-pink)","tulip-leaves":"var(--sg-color-forest-green)","tulip-petals":"var(--sg-color-deep-pink)","tulip-stem":"var(--sg-color-olive-drab-700)",tulip:"var(--sg-color-deep-pink)",walnut:"var(--sg-color-brown)",water:"var(--sg-color-royal-blue)","wheat-grain":"var(--sg-color-goldenrod)","wheat-growing":"var(--sg-color-yellow-green-400)","wheat-stalk":"var(--sg-color-dark-tan)",wheat:"var(--sg-color-goldenrod)","willow-branches":"var(--sg-color-medium-slate-blue)","willow-leaves":"var(--sg-color-yellow-green-400)","willow-tree-growing":"var(--sg-color-dark-sea-green-light)","willow-tree":"var(--sg-color-medium-slate-blue)","willow-trunk":"var(--sg-color-dark-tan)",wood:"var(--sg-color-wood-brown)",xray:"var(--sg-color-granite-gray-alpha-30)"};function nn(a,e){let t;for(let n of e){t||(t={});let g=n.startsWith("--sg-color-")?n:`${n}-color`;t[g]=a.getPropertyValue(g)}return t}function Ue(a,e){let t=a.getComputedStyle(e.host);return D(D(D({},nn(t,Object.keys(xo).map(n=>`--sg-color-${n}`))),nn(t,Object.keys(Xn).map(n=>`--sg-tile-${n}`))),nn(t,Object.keys(Vo).map(n=>`--sg-ui-${n}`)))}var tt=class a{constructor(e,t,n){this.colors=n,this.width=e,this.height=t,this.data=new Uint8Array(e*t),this.cache={canvas:null,lastPlayerTileX:null,lastPlayerTileY:null,lastCameraGridX:null,lastCameraGridY:null,needsUpdate:!0}}isExplored(e,t){if(e<0||e>=this.width||t<0||t>=this.height)return!1;let n=t*this.width+e;return this.data[n]===1}setExplored(e,t){if(e<0||e>=this.width||t<0||t>=this.height)return!1;let n=t*this.width+e,g=this.data[n]===1;return this.data[n]=1,!g}setExploredBatch(e){let t=!1;for(let n of e)this.setExplored(n.x,n.y)&&(t=!0);return t}reset(){this.data.fill(0),this.cache.needsUpdate=!0}static fromObject(e,t,n,g){let o=new a(t,n,g);if(e&&typeof e=="object"){for(let s in e)if(e[s]){let[d,l]=s.split(",").map(Number);o.setExplored(d,l)}}return o}toObject(){let e={};for(let t=0;t<this.height;t++)for(let n=0;n<this.width;n++)this.isExplored(n,t)&&(e[`${n},${t}`]=1);return e}updateFromPlayer(e,t,n=15){let g=e.get(),o=Math.floor((g.x+g.width/2)/t),s=Math.floor((g.y+g.height/2)/t),d=!1;for(let l=-n;l<=n;l++)for(let i=-n;i<=n;i++){let I=o+l,r=s+i;Math.sqrt(l*l+i*i)<=n&&this.setExplored(I,r)&&(d=!0)}return d}render(e,t,n,g){if(!e||!t)return;let o=g.get(),s=Math.ceil(t.width/n)+1,d=Math.ceil(t.height/n)+1,l=Math.floor(o.x/n),i=Math.floor(o.y/n),I=o.x%n,r=o.y%n;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let c=0;c<s;c++){let A=l+c;if(A<0||A>=this.width)continue;let C=Math.round(c*n-I);for(let h=0;h<d;h++){let p=i+h;if(!(p<0||p>=this.height)&&!this.isExplored(A,p)){let y=Math.round(h*n-r);e.fillRect(C,y,n,n)}}}}renderScaled(e,t,n,g,o=2){if(!e||!t)return;let s=g.get(),d=n*o,l=Math.ceil(t.width/d)+1,i=Math.ceil(t.height/d)+1,I=Math.floor(s.x/d),r=Math.floor(s.y/d),c=s.x%d,A=s.y%d;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let C=0;C<l;C++){let h=I+C,p=Math.round(C*d-c);for(let y=0;y<i;y++){let v=r+y,G=Math.round(y*d-A),R=!0;for(let w=0;w<o&&R;w++)for(let N=0;N<o&&R;N++){let k=h*o+w,X=v*o+N;k>=0&&k<this.width&&X>=0&&X<this.height&&this.isExplored(k,X)&&(R=!1)}R&&e.fillRect(p,G,d,d)}}}},Dr=Object.defineProperty,on=(a,e,t)=>(((n,g,o)=>{g in n?Dr(n,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[g]=o})(a,typeof e!="symbol"?e+"":e,t),t),rn=(a,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return a.has(e)},bt=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},co=(a,e,t)=>(((n,g,o)=>{if(!g.has(n))throw TypeError("Cannot "+o)})(a,e,"access private method"),t);function Yo(a,e){return Object.is(a,e)}var ee=null,$e=!1,Zt=1,ht=Symbol("SIGNAL");function Je(a){let e=ee;return ee=a,e}var Jn={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wt(a){if($e)throw new Error("");if(ee===null)return;ee.consumerOnSignalRead(a);let e=ee.nextProducerIndex++;Oe(ee),e<ee.producerNode.length&&ee.producerNode[e]!==a&&hn(ee)&&kt(ee.producerNode[e],ee.producerIndexOfThis[e]),ee.producerNode[e]!==a&&(ee.producerNode[e]=a,ee.producerIndexOfThis[e]=hn(ee)?Uo(a,ee,e):0),ee.producerLastReadVersion[e]=a.version}function Xo(a){if(a.dirty||a.lastCleanEpoch!==Zt){if(!a.producerMustRecompute(a)&&!(function(e){Oe(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],g=e.producerLastReadVersion[t];if(g!==n.version||(Xo(n),g!==n.version))return!0}return!1})(a))return a.dirty=!1,void(a.lastCleanEpoch=Zt);a.producerRecomputeValue(a),a.dirty=!1,a.lastCleanEpoch=Zt}}function Jo(a){if(a.liveConsumerNode===void 0)return;let e=$e;$e=!0;try{for(let t of a.liveConsumerNode)t.dirty||Fr(t)}finally{$e=e}}function Fr(a){var e;a.dirty=!0,Jo(a),(e=a.consumerMarkedDirty)==null||e.call(a.wrapper??a)}function Uo(a,e,t){var n;if(Un(a),Oe(a),a.liveConsumerNode.length===0){(n=a.watched)==null||n.call(a.wrapper);for(let g=0;g<a.producerNode.length;g++)a.producerIndexOfThis[g]=Uo(a.producerNode[g],a,g)}return a.liveConsumerIndexOfThis.push(t),a.liveConsumerNode.push(e)-1}function kt(a,e){var t;if(Un(a),Oe(a),a.liveConsumerNode.length===1){(t=a.unwatched)==null||t.call(a.wrapper);for(let g=0;g<a.producerNode.length;g++)kt(a.producerNode[g],a.producerIndexOfThis[g])}let n=a.liveConsumerNode.length-1;if(a.liveConsumerNode[e]=a.liveConsumerNode[n],a.liveConsumerIndexOfThis[e]=a.liveConsumerIndexOfThis[n],a.liveConsumerNode.length--,a.liveConsumerIndexOfThis.length--,e<a.liveConsumerNode.length){let g=a.liveConsumerIndexOfThis[e],o=a.liveConsumerNode[e];Oe(o),o.producerIndexOfThis[g]=e}}function hn(a){var e;return a.consumerIsAlwaysLive||(((e=a?.liveConsumerNode)==null?void 0:e.length)??0)>0}function Oe(a){a.producerNode??(a.producerNode=[]),a.producerIndexOfThis??(a.producerIndexOfThis=[]),a.producerLastReadVersion??(a.producerLastReadVersion=[])}function Un(a){a.liveConsumerNode??(a.liveConsumerNode=[]),a.liveConsumerIndexOfThis??(a.liveConsumerIndexOfThis=[])}function Io(a){if(Xo(a),wt(a),a.value===pn)throw a.error;return a.value}var an=Symbol("UNSET"),ln=Symbol("COMPUTING"),pn=Symbol("ERRORED"),jr=$(D({},Jn),{value:an,dirty:!0,error:null,equal:Yo,producerMustRecompute:a=>a.value===an||a.value===ln,producerRecomputeValue(a){if(a.value===ln)throw new Error("Detected cycle in computations.");let e=a.value;a.value=ln;let t=(function(o){return o&&(o.nextProducerIndex=0),Je(o)})(a),n,g=!1;try{n=a.computation.call(a.wrapper),g=e!==an&&e!==pn&&a.equal.call(a.wrapper,e,n)}catch(o){n=pn,a.error=o}finally{(function(o,s){if(Je(s),o&&o.producerNode!==void 0&&o.producerIndexOfThis!==void 0&&o.producerLastReadVersion!==void 0){if(hn(o))for(let d=o.nextProducerIndex;d<o.producerNode.length;d++)kt(o.producerNode[d],o.producerIndexOfThis[d]);for(;o.producerNode.length>o.nextProducerIndex;)o.producerNode.pop(),o.producerLastReadVersion.pop(),o.producerIndexOfThis.pop()}})(a,t)}g?a.value=e:(a.value=n,a.version++)}}),_r=function(){throw new Error};function Pr(){return wt(this),this.value}function Kr(a,e){ee?.consumerAllowSignalWrites===!1&&_r(),a.equal.call(a.wrapper,a.value,e)||(a.value=e,(function(t){t.version++,Zt++,Jo(t)})(a))}var zr=$(D({},Jn),{equal:Yo,value:void 0}),ie=Symbol("node"),O;function Ve(a=1,e=4294967295){return typeof globalThis.crypto=="object"&&typeof globalThis.crypto.getRandomValues=="function"?(function(g,o){let s=o-g+1,d=4294967295,l,i;i=d-d%s;do l=globalThis.crypto.getRandomValues(new Uint32Array(1))[0];while(l>i);return g+l%s})(a,e):(t=a,n=e,Math.floor(Math.random()*(n-t+1))+t);var t,n}(a=>{var e,t,n,g;e=ie,t=new WeakSet,a.isState=o=>typeof o=="object"&&rn(t,o),a.State=class{constructor(o,s={}){bt(this,t),on(this,e);let d=(function(i){let I=Object.create(zr);I.value=i;let r=()=>(wt(I),I.value);return r[ht]=I,r})(o),l=d[ht];if(this[ie]=l,l.wrapper=this,s){let i=s.equals;i&&(l.equal=i),l.watched=s[a.subtle.watched],l.unwatched=s[a.subtle.unwatched]}}get(){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Pr.call(this[ie])}set(o){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if($e)throw new Error("Writes to signals not permitted during Watcher callback");Kr(this[ie],o)}},n=ie,g=new WeakSet,a.isComputed=o=>typeof o=="object"&&rn(g,o),a.Computed=class{constructor(o,s){bt(this,g),on(this,n);let d=(function(i){let I=Object.create(jr);I.computation=i;let r=()=>Io(I);return r[ht]=I,r})(o),l=d[ht];if(l.consumerAllowSignalWrites=!0,this[ie]=l,l.wrapper=this,s){let i=s.equals;i&&(l.equal=i),l.watched=s[a.subtle.watched],l.unwatched=s[a.subtle.unwatched]}}get(){if(!(0,a.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Io(this[ie])}},(o=>{var s,d,l,i;o.untrack=function(I){let r,c=null;try{c=Je(null),r=I()}finally{Je(c)}return r},o.introspectSources=function(I){var r;if(!(0,a.isComputed)(I)&&!(0,a.isWatcher)(I))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((r=I[ie].producerNode)==null?void 0:r.map(c=>c.wrapper))??[]},o.introspectSinks=function(I){var r;if(!(0,a.isComputed)(I)&&!(0,a.isState)(I))throw new TypeError("Called introspectSinks without a Signal argument");return((r=I[ie].liveConsumerNode)==null?void 0:r.map(c=>c.wrapper))??[]},o.hasSinks=function(I){if(!(0,a.isComputed)(I)&&!(0,a.isState)(I))throw new TypeError("Called hasSinks without a Signal argument");let r=I[ie].liveConsumerNode;return!!r&&r.length>0},o.hasSources=function(I){if(!(0,a.isComputed)(I)&&!(0,a.isWatcher)(I))throw new TypeError("Called hasSources without a Computed or Watcher argument");let r=I[ie].producerNode;return!!r&&r.length>0},s=ie,d=new WeakSet,l=new WeakSet,i=function(I){for(let r of I)if(!(0,a.isComputed)(r)&&!(0,a.isState)(r))throw new TypeError("Called watch/unwatch without a Computed or State argument")},a.isWatcher=I=>rn(d,I),o.Watcher=class{constructor(I){bt(this,d),bt(this,l),on(this,s);let r=Object.create(Jn);r.wrapper=this,r.consumerMarkedDirty=I,r.consumerIsAlwaysLive=!0,r.consumerAllowSignalWrites=!1,r.producerNode=[],this[ie]=r}watch(...I){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");co(this,l,i).call(this,I);let r=this[ie];r.dirty=!1;let c=Je(r);for(let A of I)wt(A[ie]);Je(c)}unwatch(...I){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");co(this,l,i).call(this,I);let r=this[ie];Oe(r);for(let c=r.producerNode.length-1;c>=0;c--)if(I.includes(r.producerNode[c].wrapper)){kt(r.producerNode[c],r.producerIndexOfThis[c]);let A=r.producerNode.length-1;if(r.producerNode[c]=r.producerNode[A],r.producerIndexOfThis[c]=r.producerIndexOfThis[A],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,c<r.producerNode.length){let C=r.producerIndexOfThis[c],h=r.producerNode[c];Un(h),h.liveConsumerIndexOfThis[C]=c}}}getPending(){if(!(0,a.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ie].producerNode.filter(I=>I.dirty).map(I=>I.wrapper)}},o.currentComputed=function(){var I;return(I=ee)==null?void 0:I.wrapper},o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(a.subtle||(a.subtle={}))})(O||(O={}));var L=a=>D({crop:!1,farmable:!1,solid:!1,isSeed:!1,drops:null},a),S={AIR:"AIR",AGAVE_BASE:"AGAVE_BASE",AGAVE_FLOWER_STALK:"AGAVE_FLOWER_STALK",AGAVE_FLOWER:"AGAVE_FLOWER",AGAVE_GROWING:"AGAVE_GROWING",AGAVE_SPIKE:"AGAVE_SPIKE",AGAVE:"AGAVE",BAMBOO_GROWING:"BAMBOO_GROWING",BAMBOO_JOINT:"BAMBOO_JOINT",BAMBOO_LEAVES:"BAMBOO_LEAVES",BAMBOO_STALK:"BAMBOO_STALK",BAMBOO:"BAMBOO",BEDROCK:"BEDROCK",BERRY_BUSH_BERRIES:"BERRY_BUSH_BERRIES",BERRY_BUSH_BRANCH:"BERRY_BUSH_BRANCH",BERRY_BUSH_GROWING:"BERRY_BUSH_GROWING",BERRY_BUSH_LEAVES:"BERRY_BUSH_LEAVES",BERRY_BUSH:"BERRY_BUSH",BIRCH_BARK:"BIRCH_BARK",BIRCH_BRANCHES:"BIRCH_BRANCHES",BIRCH_CATKINS:"BIRCH_CATKINS",BIRCH_GROWING:"BIRCH_GROWING",BIRCH_LEAVES:"BIRCH_LEAVES",BIRCH_TRUNK:"BIRCH_TRUNK",BIRCH:"BIRCH",CACTUS_BODY:"CACTUS_BODY",CACTUS_FLOWER:"CACTUS_FLOWER",CACTUS_GROWING:"CACTUS_GROWING",CACTUS:"CACTUS",CARROT_GROWING:"CARROT_GROWING",CARROT_LEAVES:"CARROT_LEAVES",CARROT_ROOT:"CARROT_ROOT",CARROT:"CARROT",CLAY:"CLAY",CLOUD:"CLOUD",COAL:"COAL",CORN_EAR:"CORN_EAR",CORN_GROWING:"CORN_GROWING",CORN_LEAVES:"CORN_LEAVES",CORN_SILK:"CORN_SILK",CORN_STALK:"CORN_STALK",CORN:"CORN",DIRT:"DIRT",FERN_FROND:"FERN_FROND",FERN_GROWING:"FERN_GROWING",FERN_STEM:"FERN_STEM",FERN:"FERN",FOG:"FOG",GOLD:"GOLD",GRASS:"GRASS",ICE:"ICE",IRON:"IRON",KELP_BLADE:"KELP_BLADE",KELP_BULB:"KELP_BULB",KELP_GROWING:"KELP_GROWING",KELP:"KELP",LAVA:"LAVA",LAVENDER_BUSH:"LAVENDER_BUSH",LAVENDER_FLOWERS:"LAVENDER_FLOWERS",LAVENDER_GROWING:"LAVENDER_GROWING",LAVENDER_STEM:"LAVENDER_STEM",LAVENDER:"LAVENDER",LOADING_PIXEL:"LOADING_PIXEL",LOTUS_BUD:"LOTUS_BUD",LOTUS_FLOWER:"LOTUS_FLOWER",LOTUS_GROWING:"LOTUS_GROWING",LOTUS_PAD:"LOTUS_PAD",LOTUS_STEM:"LOTUS_STEM",LOTUS:"LOTUS",MOSS:"MOSS",MUSHROOM_CAP:"MUSHROOM_CAP",MUSHROOM_GROWING:"MUSHROOM_GROWING",MUSHROOM_STEM:"MUSHROOM_STEM",MUSHROOM:"MUSHROOM",PINE_CONE:"PINE_CONE",PINE_NEEDLES:"PINE_NEEDLES",PINE_TREE_GROWING:"PINE_TREE_GROWING",PINE_TREE:"PINE_TREE",PINE_TRUNK:"PINE_TRUNK",PLAYER_BODY:"PLAYER_BODY",PLAYER_BORDER:"PLAYER_BORDER",PLAYER_EYES:"PLAYER_EYES",PUMICE:"PUMICE",PUMPKIN_FRUIT:"PUMPKIN_FRUIT",PUMPKIN_GROWING:"PUMPKIN_GROWING",PUMPKIN_LEAVES:"PUMPKIN_LEAVES",PUMPKIN_STEM:"PUMPKIN_STEM",PUMPKIN_VINE:"PUMPKIN_VINE",PUMPKIN:"PUMPKIN",ROSE_BLOOM:"ROSE_BLOOM",ROSE_BUD:"ROSE_BUD",ROSE_GROWING:"ROSE_GROWING",ROSE_LEAVES:"ROSE_LEAVES",ROSE_STEM:"ROSE_STEM",ROSE_THORNS:"ROSE_THORNS",ROSE:"ROSE",SAND:"SAND",SNOW:"SNOW",STONE:"STONE",SUNFLOWER_CENTER:"SUNFLOWER_CENTER",SUNFLOWER_GROWING:"SUNFLOWER_GROWING",SUNFLOWER_LEAVES:"SUNFLOWER_LEAVES",SUNFLOWER_PETALS:"SUNFLOWER_PETALS",SUNFLOWER_STEM:"SUNFLOWER_STEM",SUNFLOWER:"SUNFLOWER",TREE_GROWING:"TREE_GROWING",TREE_LEAVES:"TREE_LEAVES",TREE_TRUNK:"TREE_TRUNK",TULIP_BULB:"TULIP_BULB",TULIP_GROWING:"TULIP_GROWING",TULIP_LEAVES:"TULIP_LEAVES",TULIP_PETALS:"TULIP_PETALS",TULIP_STEM:"TULIP_STEM",TULIP:"TULIP",WALNUT:"WALNUT",WATER:"WATER",WHEAT_GRAIN:"WHEAT_GRAIN",WHEAT_GROWING:"WHEAT_GROWING",WHEAT_STALK:"WHEAT_STALK",WHEAT:"WHEAT",WILLOW_BRANCHES:"WILLOW_BRANCHES",WILLOW_LEAVES:"WILLOW_LEAVES",WILLOW_TREE_GROWING:"WILLOW_TREE_GROWING",WILLOW_TREE:"WILLOW_TREE",WILLOW_TRUNK:"WILLOW_TRUNK",WOOD:"WOOD",XRAY:"XRAY"},U={[S.AIR]:L({id:0}),[S.AGAVE_BASE]:L({id:82,solid:!0}),[S.AGAVE_FLOWER_STALK]:L({id:84}),[S.AGAVE_FLOWER]:L({id:85}),[S.AGAVE_GROWING]:L({id:81,solid:!0,crop:!0}),[S.AGAVE_SPIKE]:L({id:83,solid:!0}),[S.AGAVE]:L({id:80,solid:!0,crop:!0,growthTime:1920,drops:"AGAVE",isSeed:!0}),[S.BAMBOO_GROWING]:L({id:43,solid:!0,crop:!0}),[S.BAMBOO_JOINT]:L({id:53,solid:!0}),[S.BAMBOO_LEAVES]:L({id:54}),[S.BAMBOO_STALK]:L({id:52,solid:!0}),[S.BAMBOO]:L({id:36,solid:!0,crop:!0,growthTime:180,drops:"BAMBOO",isSeed:!0}),[S.BEDROCK]:L({id:19,solid:!0}),[S.BERRY_BUSH_BERRIES]:L({id:51}),[S.BERRY_BUSH_BRANCH]:L({id:49,solid:!0}),[S.BERRY_BUSH_GROWING]:L({id:42,crop:!0}),[S.BERRY_BUSH_LEAVES]:L({id:50,solid:!0}),[S.BERRY_BUSH]:L({id:35,crop:!0,growthTime:360,drops:"BERRY_BUSH",isSeed:!0}),[S.BIRCH_BARK]:L({id:117,solid:!0}),[S.BIRCH_BRANCHES]:L({id:118,solid:!0}),[S.BIRCH_CATKINS]:L({id:120}),[S.BIRCH_GROWING]:L({id:115,solid:!0,crop:!0}),[S.BIRCH_LEAVES]:L({id:119}),[S.BIRCH_TRUNK]:L({id:116,solid:!0}),[S.BIRCH]:L({id:114,solid:!0,crop:!0,growthTime:1260,drops:["BIRCH","WOOD"],isSeed:!0}),[S.CACTUS_BODY]:L({id:30,solid:!0}),[S.CACTUS_FLOWER]:L({id:31}),[S.CACTUS_GROWING]:L({id:23,solid:!0,crop:!0}),[S.CACTUS]:L({id:15,solid:!0,crop:!0,growthTime:2400,drops:"CACTUS",isSeed:!0}),[S.CARROT_GROWING]:L({id:21,crop:!0}),[S.CARROT_LEAVES]:L({id:26}),[S.CARROT_ROOT]:L({id:27}),[S.CARROT]:L({id:13,crop:!0,growthTime:240,drops:"CARROT",isSeed:!0}),[S.CLAY]:L({id:6,solid:!0,farmable:!0,drops:"CLAY"}),[S.CLOUD]:L({id:72,drops:"CLOUD",farmable:!0,solid:!0}),[S.COAL]:L({id:7,solid:!0,drops:"COAL"}),[S.CORN_EAR]:L({id:61}),[S.CORN_GROWING]:L({id:45,crop:!0}),[S.CORN_LEAVES]:L({id:60}),[S.CORN_SILK]:L({id:62}),[S.CORN_STALK]:L({id:59}),[S.CORN]:L({id:38,crop:!0,growthTime:420,drops:"CORN",isSeed:!0}),[S.DIRT]:L({id:2,solid:!0,farmable:!0,drops:"DIRT"}),[S.FERN_FROND]:L({id:70}),[S.FERN_GROWING]:L({id:48,crop:!0}),[S.FERN_STEM]:L({id:69}),[S.FERN]:L({id:41,crop:!0,growthTime:90,drops:"FERN",isSeed:!0}),[S.FOG]:L({id:121}),[S.GOLD]:L({id:9,solid:!0,drops:"GOLD"}),[S.GRASS]:L({id:1,solid:!0,farmable:!0,drops:"GRASS"}),[S.ICE]:L({id:17,solid:!0,drops:"ICE"}),[S.IRON]:L({id:8,solid:!0,drops:"IRON"}),[S.KELP_BLADE]:L({id:93}),[S.KELP_BULB]:L({id:94}),[S.KELP_GROWING]:L({id:92,crop:!0}),[S.KELP]:L({id:91,crop:!0,growthTime:150,drops:"KELP",isSeed:!0}),[S.LAVA]:L({id:18}),[S.LAVENDER_BUSH]:L({id:89}),[S.LAVENDER_FLOWERS]:L({id:90}),[S.LAVENDER_GROWING]:L({id:87,crop:!0}),[S.LAVENDER_STEM]:L({id:88}),[S.LAVENDER]:L({id:86,crop:!0,growthTime:200,drops:"LAVENDER",isSeed:!0}),[S.LOADING_PIXEL]:L({id:122}),[S.LOTUS_BUD]:L({id:112}),[S.LOTUS_FLOWER]:L({id:113}),[S.LOTUS_GROWING]:L({id:109,crop:!0}),[S.LOTUS_PAD]:L({id:110}),[S.LOTUS_STEM]:L({id:111}),[S.LOTUS]:L({id:108,crop:!0,growthTime:390,drops:"LOTUS",isSeed:!0}),[S.MOSS]:L({id:32}),[S.MUSHROOM_CAP]:L({id:29}),[S.MUSHROOM_GROWING]:L({id:22,crop:!0}),[S.MUSHROOM_STEM]:L({id:28}),[S.MUSHROOM]:L({id:14,crop:!0,growthTime:120,drops:"MUSHROOM",isSeed:!0}),[S.PINE_CONE]:L({id:65}),[S.PINE_NEEDLES]:L({id:64,solid:!0}),[S.PINE_TREE_GROWING]:L({id:46,solid:!0,crop:!0}),[S.PINE_TREE]:L({id:39,solid:!0,crop:!0,growthTime:1440,drops:"PINE_TREE",isSeed:!0}),[S.PINE_TRUNK]:L({id:63,solid:!0}),[S.PLAYER_BODY]:L({id:124}),[S.PLAYER_BORDER]:L({id:125}),[S.PLAYER_EYES]:L({id:126}),[S.PUMICE]:L({id:71,solid:!0,drops:"PUMICE"}),[S.PUMPKIN_FRUIT]:L({id:106}),[S.PUMPKIN_GROWING]:L({id:103,crop:!0}),[S.PUMPKIN_LEAVES]:L({id:105}),[S.PUMPKIN_STEM]:L({id:107}),[S.PUMPKIN_VINE]:L({id:104}),[S.PUMPKIN]:L({id:102,crop:!0,growthTime:660,drops:"PUMPKIN",isSeed:!0}),[S.ROSE_BLOOM]:L({id:101}),[S.ROSE_BUD]:L({id:100}),[S.ROSE_GROWING]:L({id:96,crop:!0}),[S.ROSE_LEAVES]:L({id:99}),[S.ROSE_STEM]:L({id:97}),[S.ROSE_THORNS]:L({id:98}),[S.ROSE]:L({id:95,crop:!0,growthTime:540,drops:"ROSE",isSeed:!0}),[S.SAND]:L({id:5,solid:!0,farmable:!0,drops:"SAND"}),[S.SNOW]:L({id:16,solid:!0,farmable:!0,drops:"SNOW"}),[S.STONE]:L({id:3,solid:!0,drops:"STONE"}),[S.SUNFLOWER_CENTER]:L({id:57}),[S.SUNFLOWER_GROWING]:L({id:44,crop:!0}),[S.SUNFLOWER_LEAVES]:L({id:56}),[S.SUNFLOWER_PETALS]:L({id:58}),[S.SUNFLOWER_STEM]:L({id:55}),[S.SUNFLOWER]:L({id:37,crop:!0,growthTime:600,drops:"SUNFLOWER",isSeed:!0}),[S.TREE_GROWING]:L({id:34,crop:!0}),[S.TREE_LEAVES]:L({id:11,solid:!0,crop:!0,drops:"WOOD"}),[S.TREE_TRUNK]:L({id:10,solid:!0,crop:!0,drops:"WOOD"}),[S.TULIP_BULB]:L({id:79}),[S.TULIP_GROWING]:L({id:75,crop:!0}),[S.TULIP_LEAVES]:L({id:77}),[S.TULIP_PETALS]:L({id:78}),[S.TULIP_STEM]:L({id:76}),[S.TULIP]:L({id:74,crop:!0,growthTime:300,drops:"TULIP",isSeed:!0}),[S.WALNUT]:L({id:33,crop:!0,growthTime:960,drops:["WALNUT","WOOD"],isSeed:!0}),[S.WATER]:L({id:4}),[S.WHEAT_GRAIN]:L({id:25}),[S.WHEAT_GROWING]:L({id:20,crop:!0}),[S.WHEAT_STALK]:L({id:24}),[S.WHEAT]:L({id:12,crop:!0,growthTime:480,drops:"WHEAT",isSeed:!0}),[S.WILLOW_BRANCHES]:L({id:67,solid:!0}),[S.WILLOW_LEAVES]:L({id:68}),[S.WILLOW_TREE_GROWING]:L({id:47,solid:!0,crop:!0}),[S.WILLOW_TREE]:L({id:40,solid:!0,crop:!0,growthTime:1800,drops:["WILLOW_TREE","WOOD"],isSeed:!0}),[S.WILLOW_TRUNK]:L({id:66,solid:!0}),[S.WOOD]:L({id:73,solid:!1,crop:!0,drops:"WOOD"}),[S.XRAY]:L({id:123})},sn={[S.AGAVE]:U.AGAVE_GROWING,[S.BAMBOO]:U.BAMBOO_GROWING,[S.BERRY_BUSH]:U.BERRY_BUSH_GROWING,[S.BIRCH]:U.BIRCH_GROWING,[S.CACTUS]:U.CACTUS_GROWING,[S.CARROT]:U.CARROT_GROWING,[S.CORN]:U.CORN_GROWING,[S.FERN]:U.FERN_GROWING,[S.KELP]:U.KELP_GROWING,[S.LAVENDER]:U.LAVENDER_GROWING,[S.LOTUS]:U.LOTUS_GROWING,[S.MUSHROOM]:U.MUSHROOM_GROWING,[S.PINE_TREE]:U.PINE_TREE_GROWING,[S.PUMPKIN]:U.PUMPKIN_GROWING,[S.ROSE]:U.ROSE_GROWING,[S.SUNFLOWER]:U.SUNFLOWER_GROWING,[S.TULIP]:U.TULIP_GROWING,[S.WALNUT]:U.TREE_GROWING,[S.WHEAT]:U.WHEAT_GROWING,[S.WILLOW_TREE]:U.WILLOW_TREE_GROWING};function be(a){return a.replace("_"," ").replace("-"," ").toLowerCase()}function yn(a,e){for(let t in a)if(a[t].id===e)return a[t];return null}function uo(a){return Object.fromEntries(Object.entries(a).map(([e,t])=>{return[t.id,(n=e,n.toLowerCase().replace(/_/g,"-"))];var n}))}var pt={crops:[],surfaceTile:null,subTile:null},Ae={FOREST:D({trees:!0,name:"Forest"},pt),DESERT:D({trees:!1,name:"Desert"},pt),TUNDRA:D({trees:!1,name:"Tundra"},pt),SWAMP:D({trees:!0,name:"Swamp"},pt)},Oo;Ae.FOREST.surfaceTile=U.GRASS,Ae.FOREST.subTile=U.DIRT,Ae.FOREST.crops=[U.BERRY_BUSH,U.BIRCH,U.CARROT,U.FERN,U.LAVENDER,U.PINE_TREE,U.PUMPKIN,U.ROSE,U.TULIP,U.WHEAT],Ae.DESERT.surfaceTile=U.SAND,Ae.DESERT.subTile=U.SAND,Ae.DESERT.crops=[U.AGAVE,U.CACTUS,U.SUNFLOWER],Ae.TUNDRA.surfaceTile=U.SNOW,Ae.TUNDRA.subTile=U.ICE,Ae.TUNDRA.crops=[U.BIRCH,U.FERN,U.PINE_TREE],Ae.SWAMP.surfaceTile=U.CLAY,Ae.SWAMP.subTile=U.CLAY,Ae.SWAMP.crops=[U.BAMBOO,U.CORN,U.KELP,U.LOTUS,U.MUSHROOM,U.WILLOW_TREE];var Co=new URLSearchParams(globalThis.location?.search);Oo=Co.has("seed")?Number(Co.get("seed")):Ve();var x={fogMode:new O.State("fog"),fogScale:new O.State(8),isFogScaled:new O.State(!0),breakMode:new O.State("regular"),canvasScale:new O.State(1),currentResolution:new O.State("400"),version:new O.State("1"),worldSeed:new O.State(Oo),waterPhysics:{updateInterval:10,frameCounter:0,maxIterationsPerUpdate:5,checkRadius:15,dirtyRegions:new Set},TILE_SIZE:new O.State(8),WORLD_WIDTH:new O.State(500),WORLD_HEIGHT:new O.State(300),SURFACE_LEVEL:new O.State(90),GRAVITY:new O.State(.7),FRICTION:new O.State(.8),MAX_FALL_SPEED:new O.State(15),BIOMES:Ae,TILES:U,TileNames:S},{TileNames:_}=x,V={world:new O.State(null),exploredMap:new O.State(new tt(500,300)),plantStructures:new O.State({}),gameTime:new O.State(0),growthTimers:new O.State({}),seeds:new O.State(0),selectedMaterialType:new O.State(null),selectedSeedType:new O.State(null),shouldReset:new O.State(!1),viewMode:new O.State("normal"),waterPhysicsQueue:new O.State(new Set),seedInventory:new O.State({[_.AGAVE]:0,[_.BAMBOO]:0,[_.BERRY_BUSH]:0,[_.BIRCH]:0,[_.CACTUS]:0,[_.CARROT]:0,[_.CORN]:0,[_.FERN]:0,[_.KELP]:0,[_.LAVENDER]:0,[_.LOTUS]:0,[_.MUSHROOM]:0,[_.PINE_TREE]:0,[_.PUMPKIN]:0,[_.ROSE]:0,[_.SUNFLOWER]:0,[_.TULIP]:0,[_.WALNUT]:0,[_.WHEAT]:0,[_.WILLOW_TREE]:0}),materialsInventory:new O.State({[_.CLAY]:0,[_.CLOUD]:0,[_.COAL]:0,[_.DIRT]:0,[_.GOLD]:0,[_.GRASS]:0,[_.ICE]:0,[_.IRON]:0,[_.PUMICE]:0,[_.SAND]:0,[_.SNOW]:0,[_.STONE]:0,[_.WOOD]:0}),player:new O.State({x:200,y:50,width:6,height:8,velocityX:0,velocityY:0,speed:2.75,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0}),camera:new O.State({x:0,y:0,speed:5})},Ho={totalSeeds:new O.Computed(()=>{let a=V.seedInventory.get();return Object.values(a).reduce((e,t)=>e+t,0)})};function we(a,e){let t=V[a]?.get();t!==void 0&&V[a].set(e(t))}function Qr(a,e){let t=x[a]?.get();t!==void 0&&x[a].set(e(t))}function qr(a,e){return x[a]?.set(e)}function $r(a){return x[a]?.get()}function ei(a,e){return V[a]?.set(e)}function ti(a){return V[a]?.get()}async function ni(a,e){x.version.set(e);let{WorldMap:t}=await Promise.resolve().then(function(){return oi});return V.world.set(new t(500,300)),a.spriteGarden=$(D({},a?.spriteGarden),{config:x,state:V,computed:Ho,setConfig:qr,getConfig:$r,updateConfig:Qr,setState:ei,getState:ti,updateState:we}),{gameConfig:x,gameState:V}}var Rt=new O.State(!1),Ao=new O.State(!1),vn=new O.State(null),He=class a{constructor(e,t){this.width=e,this.height=t,this.data=new Uint8Array(e*t),this.initializeTileMapping()}initializeTileMapping(){let e=x.TILES;this.tileIdMap=new Map,this.reverseTileMap=new Map;let t=0;for(let[n,g]of Object.entries(e))this.tileIdMap.set(g,t),this.reverseTileMap.set(t,g),t++}getTile(e,t){if(e<0||e>=this.width||t<0||t>=this.height)return x.TILES.AIR;let n=this.data[t*this.width+e];return this.reverseTileMap.get(n)||x.TILES.AIR}setTile(e,t,n){if(e<0||e>=this.width||t<0||t>=this.height)return;let g=this.tileIdMap.get(n);g!==void 0&&(this.data[t*this.width+e]=g)}static fromArray(e,t,n){let g=new a(t,n),o=x.TILES;for(let s=0;s<t;s++)if(e[s])for(let d=0;d<n;d++){let l=e[s][d];if(l==null){g.setTile(s,d,o.AIR);continue}let i=o.AIR;if(typeof l=="number"){let I=yn(o,l);I?i=I:console.warn(`Unknown tile ID ${l} at (${s}, ${d}), defaulting to AIR`)}else if(typeof l=="object"&&l.id!==void 0){let I=yn(o,l.id);I?i=I:console.warn(`Unknown tile ID ${l.id} at (${s}, ${d}), defaulting to AIR`)}g.setTile(s,d,i)}return g}toArray(){let e=[];for(let t=0;t<this.width;t++){e[t]=[];for(let n=0;n<this.height;n++)e[t][n]=this.getTile(t,n).id}return e}},oi=Object.freeze({__proto__:null,WorldMap:He});function nt(a,e,t){let n=a.spriteGarden.config,g=a.spriteGarden.state;for(let d in t.config)d!=="currentResolution"&&d!=="isFogScaled"&&n[d]?.set&&a.spriteGarden.setConfig(d,t.config[d]);let o=t.config.WORLD_HEIGHT,s=t.config.WORLD_WIDTH;for(let d in t.state){if(d==="seedInventory"){let l=t.state[d];for(let i in g.seedInventory.get())l[i]===void 0&&(l[i]=0);continue}if(d==="plantStructures"){let l=t.state.plantStructures,i=n.TILES,I=Object.fromEntries(Object.entries(l).map(([r,c])=>[r,$(D({},c),{blocks:Object.fromEntries(Object.entries(c.blocks).map(([A,C])=>{let h=i.AIR;if(typeof C.tile=="object")h=C.tile;else if(typeof C.tile=="number"){let p=yn(i,C.tile);p&&(h=p)}return[A,$(D({},C),{tile:h})]}))})]));g.plantStructures.set(I);continue}if(d==="exploredMap"){let l={},i=t.state.exploredMap;if(i&&Object.keys(i).length>0){let I=Ue(a,e);l=tt.fromObject(i,s,o,I)}g.exploredMap.set(l);continue}if(d==="world"){let l=t.state[d];if(l&&Array.isArray(l)&&l.length>0){console.log(`Converting world: ${s}x${o}`);let i=He.fromArray(l,s,o),I=n.TILES,r=0;for(let c=0;c<s;c++)for(let A=0;A<o;A++){let C=i.getTile(c,A);C&&C!==I.AIR&&r++}console.log(`Converted world contains ${r} non-air tiles`),g.world.set(i),console.log("World converted successfully")}else console.error("Invalid world data in save state:",l);continue}g[d]?.set&&a.spriteGarden.setState(d,t.state[d])}console.log("Save state loaded successfully"),e.dispatchEvent(new CustomEvent("sprite-garden-reset"))}var De="shared-saves",Do="pending-shared-save";function Fo(){return new Promise((a,e)=>{let t=indexedDB.open("sprite-garden",1);t.onerror=()=>e(t.error),t.onsuccess=()=>a(t.result),t.onupgradeneeded=n=>{let g=n.target.result;g.objectStoreNames.contains(De)||g.createObjectStore(De,{keyPath:"id"})}})}async function gn(){try{let a=await Fo(),e=a.transaction(De,"readwrite").objectStore(De);await new Promise((t,n)=>{let g=e.delete(Do);g.onerror=()=>n(g.error),g.onsuccess=()=>t()}),console.info("[SharedSave] Deleted shared save from IndexedDB")}catch(a){console.error("[SharedSave] Failed to delete shared save:",a)}}var Lt="sprite-garden-autosave",On="sprite-garden-autosave-mode",mo="sprite-garden-save-";async function Et(){try{return await Q.getItem(On)}catch(a){return console.info("Failed to get save mode:",a),"manual"}}async function bo(a){try{await Q.setItem(On,a),console.info("Save mode set to:",a)}catch(e){console.info("Failed to set save mode:",e)}}var ho=0;async function Hn(a){try{if(await Et()!=="auto")return;let e=Date.now();if(e-ho<3e4)return void console.info("Auto-save skipped (too soon since last save)");let t=Nt(a),n=JSON.stringify(t),g=await St(n),o=Bo(a,await g.arrayBuffer()),s={name:"[Auto Save]",timestamp:Date.now(),data:o,isAutoSave:!0};await Q.setItem(Lt,s),ho=e,console.info("Game auto-saved successfully")}catch(e){console.error("Failed to auto-save game:",e)}}async function ri(a,e){try{let t=await(async function(){try{let o=(await Fo()).transaction(De,"readonly").objectStore(De);return await new Promise((s,d)=>{let l=o.get(Do);l.onerror=()=>d(l.error),l.onsuccess=()=>s(l.result)})}catch(o){return console.error("[SharedSave] Failed to retrieve shared save:",o),null}})();if(!t||!t.data)return!1;let n=a.document.createElement("dialog");n.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let g=new Date(t.timestamp).toLocaleString();return n.innerHTML=`
      <h3 style="margin: 0 0 1rem 0">Shared Game Save</h3>
      <p style="margin: 0 0 1rem 0">
        A game save was shared with you (${g}). Would you like to load it?
      </p>
      <div style="display: flex; gap: 0.625rem; justify-content: flex-end">
        <button id="sharedSaveNo" style="
          background: var(--sg-color-red-500);
          border-radius: 0.25rem;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem 0.9375rem;
        ">No</button>
        <button id="sharedSaveYes" style="
          background: var(--sg-color-green-500);
          border-radius: 0.25rem;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem 0.9375rem;
        ">Yes</button>
      </div>
    `,e.append(n),n.showModal(),new Promise(o=>{n.querySelector("#sharedSaveYes").addEventListener("click",async()=>{try{let s=t.data;nt(a,e,s);let{worldSeed:d}=s.config,l=e.getElementById("worldSeedInput"),i=e.getElementById("currentSeed");l instanceof HTMLInputElement&&(l.value=d),i&&(i.textContent=d),await gn(),console.log("Shared save loaded successfully")}catch(s){console.error("Failed to load shared save:",s)}n.close(),n.remove(),o(!0)}),n.querySelector("#sharedSaveNo").addEventListener("click",async()=>{await gn(),n.close(),n.remove(),o(!1)}),n.addEventListener("cancel",async()=>{await gn(),o(!1)})})}catch(t){return console.error("Failed to check for shared save:",t),!1}}var fn=class{constructor(e,t,n){this.gThis=e,this.doc=t,this.shadow=n,this.dialog=null,this.savedGames=[],this.close=this.close.bind(this),this.deleteSelectedGame=this.deleteSelectedGame.bind(this),this.loadSelectedGame=this.loadSelectedGame.bind(this),this.shareSelectedGame=this.shareSelectedGame.bind(this),this.saveCurrentGame=this.saveCurrentGame.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this),this.handleWorldNameInput=this.handleWorldNameInput.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleDragLeave=this.handleDragLeave.bind(this),this.handleFileDrop=this.handleFileDrop.bind(this),this.handleFileSelect=this.handleFileSelect.bind(this)}async createDialog(){this.dialog&&this.dialog.remove();let e=this.doc.createElement("dialog");return e.setAttribute("id","storageDialog"),e.style.cssText=`
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
        <h4 style="margin: 0.625rem 0">Load Saved Game / Drag & Drop</h4>
        <div
          id="gameDropZone"
          style="
            border: 0.0625rem dashed var(--sg-color-gray-400);
            border-radius: 0.25rem;
            position: relative;
            transition: all 0.2s ease;
            padding: 0;
          "
        >
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
          <input
            id="fileInput"
            type="file"
            accept=".sgs,text/plain"
            style="display: none"
            multiple
          />
        </div>
        <div style="margin-top: 0.625rem; display: flex; gap: 0.625rem">
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
          <button
            id="shareSelectedBtn"
            disabled
            hidden
            style="
              background: var(--sg-color-medium-purple);
              border-radius: 0.25rem;
              border: none;
              color: white;
              cursor: pointer;
              padding: 0.5rem 0.9375rem;
            "
          >
            Share Selected
          </button>
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
        </div>
      </div>
    `,this.shadow.append(e),this.dialog=e,await this.loadSavedGamesList(),this.initEventListeners(),this.updateButtonStates(),e}async loadSavedGamesList(){this.savedGames=[];let e=await Q.keys(),t=await Q.getItem(Lt);t&&this.savedGames.push({key:Lt,name:t.name,timestamp:t.timestamp,data:t.data,isAutoSave:!0});for(let n of e)if(n.startsWith(mo)){let g=await Q.getItem(n);g&&this.savedGames.push({key:n,name:g.name,timestamp:g.timestamp,data:g.data,isAutoSave:g.isAutoSave||!1})}this.savedGames.sort((n,g)=>g.timestamp-n.timestamp),this.renderSavedGamesList()}renderSavedGamesList(){let e=this.dialog.querySelector("#savedGamesList");this.savedGames.length!==0?(e.innerHTML=this.savedGames.map((t,n)=>`
        <div
          class="saved-game-item"
          data-index="${n}"
          style="
            padding: 0.625rem;
            border-bottom: 0.0625rem solid var(--sg-color-gray-100);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${t.isAutoSave?"background: var(--sg-color-blue-50);":""}
          "
        >
          <div>
            <div style="font-weight: bold; ${t.isAutoSave?"color: var(--sg-color-blue-700);":""}">${t.name}</div>
            <div style="font-size: 0.75rem; color: var(--sg-color-neutral-950);">
              ${new Date(t.timestamp).toLocaleString()}
            </div>
          </div>
          <input
            name="selectedGame"
            style="margin-left: 0.625rem"
            type="radio"
            value="${n}"
          />
        </div>
    `).join(""),e.querySelectorAll(".saved-game-item").forEach(t=>{t.addEventListener("click",n=>{if(n.target instanceof HTMLElement&&n.target.getAttribute("type")!=="radio"){let g=t.querySelector('input[type="radio"]');g instanceof HTMLInputElement&&(g.checked=!0),this.updateButtonStates()}})}),e.querySelectorAll('input[type="radio"]').forEach(t=>{t.addEventListener("change",()=>this.updateButtonStates())})):e.innerHTML=`
      <div style="padding: 1.25rem; text-align: center; color: var(--sg-color-neutral-950);">
        No saved games found
      </div>
    `}updateButtonStates(){let e=!!this.dialog.querySelector('input[name="selectedGame"]:checked'),t=this.dialog.querySelector("#loadSelectedBtn");t instanceof HTMLButtonElement&&(t.disabled=!e,t.style.opacity=e?"1":"0.5",t.style.cursor=e?"pointer":"not-allowed");let n=this.dialog.querySelector("#deleteSelectedBtn");n instanceof HTMLButtonElement&&(n.disabled=!e,n.style.opacity=e?"1":"0.5",n.style.cursor=e?"pointer":"not-allowed");let g=this.dialog.querySelector("#shareSelectedBtn");if(g instanceof HTMLButtonElement){let o=!1;if(typeof navigator<"u"&&navigator.canShare!==void 0)try{let s=new File([],"test");o=navigator.canShare({files:[s]}),g.disabled=!e,g.style.opacity=o?"1":"0.5",g.style.cursor=o?"pointer":"not-allowed"}catch{g.disabled=!0,g.setAttribute("hidden","hidden"),g.style.opacity="0.5",g.style.cursor="not-allowed"}else g.disabled=!0,g.setAttribute("hidden","hidden"),g.style.opacity="0.5",g.style.cursor="not-allowed";o&&g.removeAttribute("hidden")}}handleWorldNameInput(e){/^[\p{L}\p{N}\p{P}\s]+$/u.test(e.key)&&e.stopPropagation(),e.key==="Enter"&&this.saveCurrentGame()}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),t=this.dialog.querySelector("#saveToStorageBtn"),n=this.dialog.querySelector("#loadSelectedBtn"),g=this.dialog.querySelector("#deleteSelectedBtn"),o=this.dialog.querySelector("#shareSelectedBtn"),s=this.dialog.querySelector("#worldNameInput"),d=this.dialog.querySelector("#gameDropZone"),l=this.dialog.querySelector("#fileInput");e.addEventListener("click",this.close),t.addEventListener("click",this.saveCurrentGame),n.addEventListener("click",this.loadSelectedGame),g.addEventListener("click",this.deleteSelectedGame),o.addEventListener("click",this.shareSelectedGame),s.addEventListener("keydown",this.handleWorldNameInput),d.addEventListener("dragover",this.handleDragOver),d.addEventListener("dragleave",this.handleDragLeave),d.addEventListener("drop",this.handleFileDrop),l.addEventListener("change",this.handleFileSelect),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),t=this.dialog.querySelector("#saveToStorageBtn"),n=this.dialog.querySelector("#loadSelectedBtn"),g=this.dialog.querySelector("#deleteSelectedBtn"),o=this.dialog.querySelector("#shareSelectedBtn"),s=this.dialog.querySelector("#worldNameInput"),d=this.dialog.querySelector("#gameDropZone"),l=this.dialog.querySelector("#fileInput");e.removeEventListener("click",this.close),t.removeEventListener("click",this.saveCurrentGame),n.removeEventListener("click",this.loadSelectedGame),g.removeEventListener("click",this.deleteSelectedGame),o.removeEventListener("click",this.shareSelectedGame),s.removeEventListener("keydown",this.handleWorldNameInput),d.removeEventListener("dragover",this.handleDragOver),d.removeEventListener("dragleave",this.handleDragLeave),d.removeEventListener("drop",this.handleFileDrop),l.removeEventListener("change",this.handleFileSelect),this.dialog.removeEventListener("click",this.handleDialogClick)}handleDragOver(e){e.preventDefault(),e.stopPropagation();let t=this.dialog.querySelector("#gameDropZone");t instanceof HTMLElement&&(t.style.borderColor="var(--sg-color-blue-500)",t.style.backgroundColor="rgba(100, 200, 255, 0.1)")}handleDragLeave(e){e.preventDefault(),e.stopPropagation();let t=this.dialog.querySelector("#gameDropZone");t instanceof HTMLElement&&(t.style.borderColor="var(--sg-color-gray-400)",t.style.backgroundColor="")}handleFileDrop(e){e.preventDefault(),e.stopPropagation();let t=this.dialog.querySelector("#gameDropZone");t instanceof HTMLElement&&(t.style.borderColor="var(--sg-color-gray-400)",t.style.backgroundColor="");let n=e.dataTransfer.files;this.processFiles(n)}handleFileSelect(e){let t=e.target.files;this.processFiles(t)}async processFiles(e){for(let t of e)if(t.name.endsWith(".sgs")||t.name.endsWith(".sgs.json.txt"))try{let n=await t.arrayBuffer();await this.loadGameFromFile(n,t.name)}catch(n){console.error(`Failed to load file ${t.name}:`,n),alert(`Failed to load file: ${t.name}. Check console for details.`)}else console.warn(`Skipping file ${t.name}: invalid extension`)}async loadGameFromFile(e,t){try{let n;if(t.endsWith(".sgs.json.txt"))n=new TextDecoder().decode(e);else{let i=new this.gThis.Blob([e],{type:"application/gzip"});if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let I=i.stream().pipeThrough(new this.gThis.DecompressionStream("gzip"));n=await(await new this.gThis.Response(I).blob()).text()}}let g=JSON.parse(n);nt(this.gThis,this.shadow,g);let{worldSeed:o}=g.config,s=this.doc.getElementById("worldSeedInput"),d=this.doc.getElementById("currentSeed");s instanceof HTMLInputElement&&(s.value=o),d&&(d.textContent=o),console.log(`Game loaded from file: ${t}`);let l=this.dialog.querySelector("#fileInput");l instanceof HTMLInputElement&&(l.value=""),this.close()}catch(n){throw console.error(`Failed to process game file ${t}:`,n),n}}async saveCurrentGame(){let e=this.dialog.querySelector("#worldNameInput"),t;if(e instanceof HTMLInputElement&&(t=e.value.trim()),t)try{let n=Nt(this.gThis),g=JSON.stringify(n),o=await St(g),s=await o.arrayBuffer(),d=Bo(this.gThis,s),l={name:t,timestamp:Date.now(),data:d},i=`${mo}${Date.now()}-${t.replace(/[^a-zA-Z0-9]/g,"_")}`;await Q.setItem(i,l),console.log("Game saved to storage:",t),e instanceof HTMLInputElement&&(e.value=""),await this.loadSavedGamesList()}catch(n){console.error("Failed to save game to storage:",n),alert("Failed to save game. Check console for details.")}else alert("Please enter a world name")}async loadSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let t;if(e instanceof HTMLInputElement){let n=parseInt(e.value);t=this.savedGames[n]}try{let n=bn(this.gThis,t.data,"application/gzip"),g;if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let i=n.stream().pipeThrough(new this.gThis.DecompressionStream("gzip"));g=await(await new this.gThis.Response(i).blob()).text()}let o=JSON.parse(g);nt(this.gThis,this.shadow,o);let{worldSeed:s}=o.config,d=this.doc.getElementById("worldSeedInput"),l=this.doc.getElementById("currentSeed");d instanceof HTMLInputElement&&(d.value=s),l&&(l.textContent=s),console.log("Game loaded from storage:",t.name),this.close()}catch(n){console.error("Failed to load game from storage:",n),alert("Failed to load game. Check console for details.")}}async deleteSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let t;if(e instanceof HTMLInputElement){let n=parseInt(e.value);t=this.savedGames[n]}if(confirm(`Are you sure you want to delete "${t.name}"?`))try{await Q.removeItem(t.key),console.log("Game deleted from storage:",t.name),await this.loadSavedGamesList()}catch(n){console.error("Failed to delete game from storage:",n),alert("Failed to delete game. Check console for details.")}}async shareSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let t,n;if(e instanceof HTMLInputElement){let g=parseInt(e.value);t=this.savedGames[g]}if(!("DecompressionStream"in globalThis))throw new Error("DecompressionStream not supported");{let g=bn(globalThis,t.data,"application/gzip").stream().pipeThrough(new globalThis.DecompressionStream("gzip"));n=await(await new globalThis.Response(g).blob()).text()}try{let g=new Blob([n],{type:"text/plain"}),o=`${t.name.replace(/[^a-zA-Z0-9]/g,"_")}-${t.timestamp}.sgs.json.txt`,s=new File([g],o,{type:"text/plain"});typeof navigator<"u"&&navigator.canShare!==void 0&&navigator.canShare({files:[s]})?(await navigator.share({files:[s],title:"Sprite Garden Game Save",url:"https://kherrick.github.io/sprite-garden",text:`Visit Sprite Garden, then 'Load' and checkout my world: ${t.name}

`}),console.log("Game shared successfully:",t.name)):alert("Web Share API is not available on this device or browser.")}catch(g){g.name!=="AbortError"?(console.error("Failed to share game:",g),alert("Failed to share game. Check console for details.")):console.log("Game sharing was cancelled by the user")}}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function cn(a,e){return Object.entries(e).map(([t,n])=>`${a}${t}${a==="--sg-color-"?"":"-color"}: ${n};`).join(`
`)}var Gn=!0,Tt=new O.subtle.Watcher(()=>{Gn&&(Gn=!1,globalThis.queueMicrotask(ii))});function ii(){Gn=!0;for(let a of Tt.getPending())a.get();Tt.watch()}function Se(a){let e,t=new O.Computed(()=>{typeof e=="function"&&e(),e=a()});return Tt.watch(t),t.get(),()=>{Tt.unwatch(t),typeof e=="function"&&e(),e=void 0}}function ai(a,e,t,n,g,o,s,d,l,i,I){Se(()=>{(function(r,c,A){Object.keys(A).forEach(C=>{let h=C.toLowerCase(),p=r?.getElementById(`${h}Count`);try{p.textContent=A[h.toUpperCase()]}catch{}}),Object.keys(c).forEach(C=>{let h=C.toLowerCase(),p=r?.getElementById(`${h}Count`);try{p.textContent=c[h.toUpperCase()]}catch{}})})(a,s.get(),d.get())}),Se(()=>{let r=a.getElementById("worldSeedInput");if(r instanceof HTMLInputElement&&!r.value){let c=a.getElementById("currentSeed"),A=g.get();if(c&&A)return r.value=A,void(c.textContent=A);let C=String(Ve());r.value=C,c.textContent=C}}),Se(()=>{let r=o.get(),c=a.getElementById("gameTime");c&&(c.textContent=String(Math.floor(r)))}),Se(()=>{let r=I.get(),c=a.getElementById("viewModeText");c&&(c.textContent=r==="normal"?"View Normal":"View X-Ray")}),Se(()=>{let r=n.get(),c=a.getElementById("fogModeText");c&&(c.textContent=r==="fog"?"Fog":"Clear")}),Se(()=>{let r=t.get(),c=a.getElementById("breakModeText");c&&(c.textContent=r==="regular"?"Dig Regular":"Dig Extra")}),Se(()=>{let r=e.get(),c=a.getElementById("seedCount");c&&(c.textContent=r)}),Se(()=>{let r=i.get(),c=a.getElementById("selectedSeed");c&&(c.textContent=r||"None")}),Se(()=>{let r=l.get(),c=a.getElementById("selectedMaterial");c&&(c.textContent=r||"None")})}function Wn(a,e,t,n){return a.set(!1),new tt(t,e,n)}function jo(a){return Object.fromEntries(Object.entries(a).filter(([e,t])=>t.isSeed).map(([e,t])=>[t.id,e]))}function Zn(a,e,t,n,g,o,s){for(let d=a-t;d<=a+t;d++)for(let l=e-t;l<=e+t;l++)d>=0&&d<s&&l>=0&&l<o&&Math.sqrt((d-a)**2+(l-e)**2)<=t&&g.getTile(d,l)!==n.BEDROCK&&g.setTile(d,l,n.AIR)}function li(a,e,t,n,g,o,s,d,l){let i=t,I=n;for(let r=0;r<e;r++){a+=.3*(Math.random()-.5),i+=Math.cos(a),I+=Math.sin(a);for(let c=-o;c<=o;c++)for(let A=-o;A<=o;A++){let C=Math.floor(i+c),h=Math.floor(I+A);C>=0&&C<l&&h>=0&&h<d&&Math.sqrt(c*c+A*A)<=o&&s.getTile(C,h)!==g.BEDROCK&&s.setTile(C,h,g.AIR)}Math.random()<.1&&Zn(Math.floor(i),Math.floor(I),2+Math.floor(2*Math.random()),g,s,d,l)}}var _o=Math.sqrt(3),si=.5*(_o-1),Qe=(3-_o)/6,po=a=>0|Math.floor(a),yo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function gi(a=Math.random){let e=(function(g){let s=new Uint8Array(512);for(let d=0;d<256;d++)s[d]=d;for(let d=0;d<255;d++){let l=d+~~(g()*(256-d)),i=s[d];s[d]=s[l],s[l]=i}for(let d=256;d<512;d++)s[d]=s[d-256];return s})(a),t=new Float64Array(e).map(g=>yo[g%12*2]),n=new Float64Array(e).map(g=>yo[g%12*2+1]);return function(g,o){let s=0,d=0,l=0,i=(g+o)*si,I=po(g+i),r=po(o+i),c=(I+r)*Qe,A=g-(I-c),C=o-(r-c),h,p;A>C?(h=1,p=0):(h=0,p=1);let y=A-h+Qe,v=C-p+Qe,G=A-1+2*Qe,R=C-1+2*Qe,w=255&I,N=255&r,k=.5-A*A-C*C;if(k>=0){let F=w+e[N];k*=k,s=k*k*(t[F]*A+n[F]*C)}let X=.5-y*y-v*v;if(X>=0){let F=w+h+e[N+p];X*=X,d=X*X*(t[F]*y+n[F]*v)}let H=.5-G*G-R*R;if(H>=0){let F=w+1+e[N+1];H*=H,l=H*H*(t[F]*G+n[F]*R)}return 70*(s+d+l)}}var vo,fo={exports:{}},ci=Yn((vo||(vo=1,fo.exports=(function(){return a.importState=function(t){var n=new a;return n.importState(t),n},a;function a(){return(function(t){var n=0,g=0,o=0,s=1;t.length==0&&(t=[+new Date]);var d=e();n=d(" "),g=d(" "),o=d(" ");for(var l=0;l<t.length;l++)(n-=d(t[l]))<0&&(n+=1),(g-=d(t[l]))<0&&(g+=1),(o-=d(t[l]))<0&&(o+=1);d=null;var i=function(){var I=2091639*n+23283064365386963e-26*s;return n=g,g=o,o=I-(s=0|I)};return i.next=i,i.uint32=function(){return 4294967296*i()},i.fract53=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.version="Alea 0.9",i.args=t,i.exportState=function(){return[n,g,o,s]},i.importState=function(I){n=+I[0]||0,g=+I[1]||0,o=+I[2]||0,s=+I[3]||0},i})(Array.prototype.slice.call(arguments))}function e(){var t=4022871197,n=function(g){g=g.toString();for(var o=0;o<g.length;o++){var s=.02519603282416938*(t+=g.charCodeAt(o));s-=t=s>>>0,t=(s*=t)>>>0,t+=4294967296*(s-=t)}return 23283064365386963e-26*(t>>>0)};return n.version="Mash 0.9",n}})()),fo.exports)),Sn=null,wn=null;function ot(a){a!==wn&&(wn=a,Sn=gi(ci(a)))}function Bt(a,e,t=0,n=3,g=.5,o=.02){Sn&&wn===t||ot(t);let s=0,d=1,l=o,i=0;for(let I=0;I<n;I++)s+=Sn(a*l,e*l)*d,i+=d,d*=g,l*=2;return s/i}function yt(a,e=0){return Bt(a,0,e,4,.6,.015)}function Go(a,e=500){return Bt(a,0,e,2,.8,.008)}function Wo(a,e=2e3){return Bt(a,0,e,2,.5,.012)}function di(a,e=0,t=2e3,n=2,g=.5,o=.01){return Bt(a,e,t,n,g,o)}function Ii(a,e,t){ot(t);let n=[];for(let g=0;g<a;g++){let o=e;o+=15*yt(g,t),o+=8*yt(g,t+100),o+=4*yt(g,t+200);let s=yt(g,t+300);s>.6&&(o+=20*(s-.6)),o=Math.max(10,Math.min(1.5*e,o)),n[g]=Math.floor(o)}return(function(g,o=1){let s=[...g];for(let d=0;d<o;d++){for(let l=1;l<g.length-1;l++)s[l]=Math.floor((g[l-1]+2*g[l]+g[l+1])/4);g.splice(0,g.length,...s)}return g})(n,2)}function ui(a,e,t,n,g,o,s){let d=Math.floor(n/2);for(let l=-d;l<=d;l++)for(let i=0;i<=Math.floor(.3*n);i++){let I=e+l,r=t+i+1;I>=0&&I<g&&r>=0&&r<o&&Math.sqrt(l*l+i*i*2)<=d&&a.getTile(I,r).id!==s.SAND.id&&a.setTile(I,r,s.WATER)}}function Ci(a,e,t,n,g,o){let s=t+1;if(e>=0&&e<n&&s>=0&&s<g){a.getTile(e,s).id!==o.SAND.id&&a.setTile(e,s,o.WATER);let d=t+2;d<g&&Math.random()<.7&&a.getTile(e,d).id!==o.SAND.id&&a.setTile(e,d,o.WATER)}}function Ai(a,e,t,n,g,o){let s=t;if(e>=0&&e<n&&s>=0&&s<g){let d=a.getTile(e,s);d===o.AIR&&d.id!==o.SAND.id&&a.setTile(e,s,o.WATER)}}function Po(a,e,t){ot(t);let n=Go(a,t+600),g=Go(a,t+700);return n<-.4?e.TUNDRA:n>.4&&g<-.2?e.DESERT:g>.3?e.SWAMP:e.FOREST}var Dn=a=>jo(a);function Ko(a,e,t,n,g,o){let s=t.get();if(s.size===0||(e.frameCounter++,e.frameCounter<e.updateInterval))return;e.frameCounter=0;let d=new Set,l=!1,i=n.get();for(let I of s){let[r,c]=I.split(",").map(Number),A=i.getTile(r,c);if(A===a.WATER){let C=[{x:r-1,y:c},{x:r+1,y:c},{x:r,y:c-1},{x:r,y:c+1}],h=!1;for(let p of C)if(p.x>=0&&p.x<o&&p.y>=0&&p.y<g&&i.getTile(p.x,p.y)===a.LAVA){h=!0;break}if(h){i.setTile(r,c,a.PUMICE);for(let p of C)p.x>=0&&p.x<o&&p.y>=0&&p.y<g&&d.add(`${p.x},${p.y}`);l=!0;continue}if(c+1<g){let p=i.getTile(r,c+1);if(p===a.AIR){i.setTile(r,c,a.AIR),i.setTile(r,c+1,a.WATER),d.add(`${r},${c+1}`),r>0&&d.add(`${r-1},${c+1}`),r<o-1&&d.add(`${r+1},${c+1}`),c+2<g&&d.add(`${r},${c+2}`),l=!0;continue}if(p===a.LAVA){i.setTile(r,c,a.AIR),i.setTile(r,c+1,a.PUMICE),l=!0;continue}if(p&&p.solid){let y=r>0&&i.getTile(r-1,c)===a.AIR,v=r<o-1&&i.getTile(r+1,c)===a.AIR,G=y&&c+1<g&&i.getTile(r-1,c+1)===a.AIR,R=v&&c+1<g&&i.getTile(r+1,c+1)===a.AIR;if(G||R){let w=0;w=G&&R?Math.random()<.5?-1:1:G?-1:1;let N=r+w;i.setTile(r,c,a.AIR),i.setTile(N,c,a.WATER),d.add(`${N},${c}`),d.add(`${N},${c+1}`),l=!0}else if(y||v){let w=0;w=y&&v?Math.random()<.5?-1:1:y?-1:1;let N=r+w;if(c+1<g){let k=i.getTile(N,c+1);k&&k.solid&&(i.setTile(r,c,a.AIR),i.setTile(N,c,a.WATER),d.add(`${N},${c}`),l=!0)}}}}}else A!==a.WATER&&c>0&&i.getTile(r,c-1)===a.WATER&&d.add(`${r},${c-1}`)}if(l)for(let I of d){let[r,c]=I.split(",").map(Number);for(let A=-2;A<=2;A++)for(let C=-2;C<=2;C++){let h=r+A,p=c+C;h>=0&&h<o&&p>=0&&p<g&&i.getTile(h,p)===a.WATER&&p+1<g&&i.getTile(h,p+1)===a.AIR&&d.add(`${h},${p}`)}}l&&d.size>0?t.set(d):t.set(new Set)}function mi(a,e,t,n,g,o){console.log(`Generating world with seed: ${n}`);let s=new He(o,g),d=Ii(o,e,n);for(let r=0;r<o;r++){let c=Po(r,a,n)||a.FOREST,A=d[r];for(let C=0;C<g;C++)if(C>A){let h=C-A;h<2?c.surfaceTile===t.GRASS||c.surfaceTile===t.SNOW?s.setTile(r,C,c.surfaceTile):s.setTile(r,C,c.subTile):h<Ve(20,50)?Math.random()<.1?s.setTile(r,C,t.COAL):Math.random()<.95?s.setTile(r,C,c.subTile):s.setTile(r,C,t.STONE):h<Ve(50,90)?Math.random()<.05?s.setTile(r,C,t.IRON):Math.random()<.02?s.setTile(r,C,t.GOLD):s.setTile(r,C,t.STONE):C>g-2?s.setTile(r,C,t.BEDROCK):C>g-4||Math.random()<.01?s.setTile(r,C,t.LAVA):s.setTile(r,C,t.STONE)}else C===A&&s.setTile(r,C,c.surfaceTile);if(c.trees&&Math.random()<.025){let C=Ve(3,5),h=A,p=[];for(let G=0;G<C;G++){let R=h-G-1;R>=0&&(s.setTile(r,R,t.TREE_TRUNK),p.push({x:r,y:R,tile:t.TREE_TRUNK}))}let y=h-C,v=3;for(let G=-v;G<=v;G++)for(let R=-v;R<=1;R++){let w=r+G,N=y+R;Math.sqrt(G*G+R*R)<=v&&R<=0&&w>=0&&w<o&&N>=0&&N<g&&(w===r&&N>=y&&N<h||s.getTile(w,N)!==t.AIR||(s.setTile(w,N,t.TREE_LEAVES),p.push({x:w,y:N,tile:t.TREE_LEAVES})))}}if(c.crops.length>0&&Math.random()<.05){let C=c.crops[Math.floor(Math.random()*c.crops.length)],h=A-1;if(h>=0&&s.getTile(r,h)===t.AIR){s.setTile(r,h,C);let p=Dn(t)[C.id];p&&we("seedInventory",y=>$(D({},y),{[p]:(y&&y[p]?y[p]:0)+2}))}}}(function(r,c,A,C,h){let p=[];for(let y=0;y<25;y++)p.push({x:Math.floor(Math.random()*h),y:r+5+Math.floor(Math.random()*(C-r-15)),size:3+Math.floor(8*Math.random()),branches:1+Math.floor(3*Math.random())});p.forEach(y=>{Zn(y.x,y.y,y.size,c,A,C,h);for(let v=0;v<y.branches;v++)li(2*Math.PI*v/y.branches+.5*(Math.random()-.5),10+Math.floor(20*Math.random()),y.x,y.y,c,1+Math.floor(2*Math.random()),A,C,h)});for(let y=0;y<50;y++){let v=Math.floor(Math.random()*h),G=r+3+Math.floor(Math.random()*(C-r-10)),R=1+Math.floor(3*Math.random());Math.random()<.3&&Zn(v,G,R,c,A,C,h)}})(e,t,s,g,o),(function(r,c,A,C){for(let h=1;h<c-1;h++)for(let p=1;p<A-1;p++)r.getTile(h,p)===C.AIR&&[r.getTile(h-1,p),r.getTile(h+1,p),r.getTile(h,p-1),r.getTile(h,p+1)].some(y=>y&&y.solid)&&p>x.SURFACE_LEVEL.get()+5&&Math.random()<.5&&r.setTile(h,p,C.MOSS)})(s,o,g,t),(function(r,c,A,C,h){ot(h);let p=Math.max(A-30,60);for(let y=0;y<c;y++)if(di(h)>.2){let v=Math.floor(6+10*Math.random()),G=Math.floor(4+6*Math.random()),R=5+Math.floor(Math.random()*(p-5));for(let w=0;w<v;w++)for(let N=0;N<G;N++){let k=y+w;k>=c||R+N>=A||(w!==0&&w!==v-1&&N!==0&&N!==G-1||Math.random()>.3)&&r.getTile(k,R+N)===C.AIR&&r.setTile(k,R+N,C.CLOUD)}y+=v+Math.floor(10*Math.random())}})(s,o,e,t,n),(function(r,c,A,C,h,p,y){if(r&&typeof r.getTile=="function"){ot(y);for(let v=0;v<A;v++){let G=c[v],R=Wo(v,parseInt(String(y))+2e3);G>h&&Ai(r,v,G,A,C,p),R>.5&&G<h+5&&ui(r,v,G,Math.floor(15*(R-.4))+5,A,C,p),Wo(v,parseInt(String(y))+2500)>.5&&Ci(r,v,G,A,C,p)}}else console.error("generateWaterSources: Invalid world object at entry",{hasWorld:!!r,worldType:typeof r,worldWidth:A,worldHeight:C})})(s,d,o,g,e,t,n);let l=new Set;for(let r=0;r<o;r++)for(let c=0;c<g;c++)s.getTile(r,c)===t.WATER&&l.add(`${r},${c}`);let i=new O.State(new Set(l)),I=new O.State(s);for(let r=0;r<100;r++){Ko(t,{updateInterval:0,frameCounter:999,maxIterationsPerUpdate:0,checkRadius:0,dirtyRegions:new Set},i,I,o,g);let c=i.get();if(c.size===0)break;let A=new Set;c.forEach(C=>{let[h,p]=C.split(",").map(Number);A.add(C),h>0&&A.add(`${h-1},${p}`),h<o-1&&A.add(`${h+1},${p}`),p>0&&A.add(`${h},${p-1}`),p<g-1&&A.add(`${h},${p+1}`)}),i.set(A)}return console.log("World generation complete!"),s}function Mt(a,e,t,n,g,o,s,d,l,i,I,r,c=null){let A;c!==null?(s.set(c),A=c):A=s?.get();let C=mi(a,e,n,A,g,o);l.set({}),d.set(0),i.set((function(v,G,R,w){let N={};for(let k=0;k<G;k++)for(let X=0;X<R;X++)if(v.getTile(k,X)===w.TREE_TRUNK){let H=v.getTile(k,X+1);if(v.getTile(k,X-1),H&&H.solid&&H!==w.TREE_TRUNK){let F=`${k},${X}`,q=[],te=X;for(;te>=0&&v.getTile(k,te)===w.TREE_TRUNK;)q.push({x:k,y:te,tile:w.TREE_TRUNK}),te--;let me=te+1,ae=3;for(let ce=-ae;ce<=ae;ce++)for(let Re=-ae;Re<=ae;Re++){let fe=k+ce,ne=me+Re;fe>=0&&fe<G&&ne>=0&&ne<R&&v.getTile(fe,ne)===w.TREE_LEAVES&&q.push({x:fe,y:ne,tile:w.TREE_LEAVES})}N[F]={seedType:"WALNUT",mature:!0,blocks:q,baseX:k,baseY:X}}}return N})(C,o,g,n));let h=(function(v,G=1){return Object.fromEntries(Object.values(v).map(R=>[R,G]))})(jo(n),1);r.set(h);let p=Math.floor(o/2),y=Math.floor(e-5);for(let v=p-25;v<p+25;v++)for(let G=y-5;G<y+5;G++)if(v>=0&&v<o&&G>=0&&G<g){let R=Math.floor(v),w=Math.floor(G);if(C.getTile(R,w)===n.AIR&&w+1<g&&C.getTile(R,w+1)&&C.getTile(R,w+1).solid){let N=!0;for(let k=w-2;k<=w;k++)if(k>=0&&C.getTile(R,k)!==n.AIR){N=!1;break}if(N){let k=$(D({},I.get()),{x:v*t,y:G*t,velocityX:0,velocityY:0,lastDirection:0});I.set(k)}}}return C}var z={isEnabled:!1,selectedTile:null,brushSize:1,isDragging:!1,lastPaintedTile:null};function bi(a,e,t){(function(n,g,o){let s=n.getElementById("toggleMapEditor");s&&s.addEventListener("click",()=>{z.isEnabled=!z.isEnabled,(function(c,A,C){let h=c.getElementById("mapEditorText"),p=c.getElementById("mapEditorControls");h&&p&&(z.isEnabled?(h.textContent="Disable Editor",p.removeAttribute("hidden"),A.set("clear"),C.set("normal")):(A.set("fog"),h.textContent="Enable Editor",p.setAttribute("hidden","")))})(n,g,o)});let d=n.getElementById("brushSizeSelect");d&&d.addEventListener("change",c=>{c.target instanceof HTMLSelectElement&&(z.brushSize=parseInt(c.target.value))}),n.querySelectorAll(".tile-btn").forEach(c=>{c.addEventListener("click",A=>{if(A.target instanceof HTMLButtonElement){let C=A.target.dataset.tile;(function(h,p){z.selectedTile=p,console.log("Selected tile:",p,"Editor enabled:",z.isEnabled),h.querySelectorAll(".tile-btn").forEach(v=>{v.classList.remove("selected")});let y=h.querySelector(`[data-tile="${p}"]`);y&&y.classList.add("selected")})(n,C)}})});let l=n.getElementById("clearMapEditor");l&&l.addEventListener("click",()=>{confirm("Clear the entire map? This cannot be undone.")&&(function(){let c=x.TILES,A=x.WORLD_WIDTH.get(),C=x.WORLD_HEIGHT.get(),h=new He(A,C);for(let p=0;p<A;p++)for(let y=0;y<C;y++)h.setTile(p,y,c.AIR);V.world.set(h),V.plantStructures.set({}),V.growthTimers.set({})})()});let i=n.getElementById("fillMapEditor");i&&i.addEventListener("click",()=>{z.selectedTile&&confirm(`Fill current layer with ${z.selectedTile}?`)&&(function(c){if(!z.selectedTile)return;let A=V.camera.get(),C=V.world.get(),h=x.TILES,p=x.TILE_SIZE.get(),y=h[z.selectedTile],v=x.WORLD_HEIGHT.get(),G=x.WORLD_WIDTH.get(),R=Math.floor(A.x/p),w=Math.floor(A.y/p),N=Math.min(G,R+Math.ceil(c.width/p)),k=Math.min(v,w+Math.ceil(c.height/p));for(let X=Math.max(0,R);X<N;X++)for(let H=Math.max(0,w);H<k;H++)C.setTile(X,H,y);V.world.set(C)})(n.getElementById("canvas"))});let I=n.getElementById("saveMapAsState");I&&I.addEventListener("click",()=>{(async function(){try{let c=Nt(globalThis);c.state.exploredMap=V.exploredMap.get().toObject();let A=x.WORLD_WIDTH.get(),C=x.SURFACE_LEVEL.get(),h=x.TILE_SIZE.get();c.state.player={x:A/2*h,y:C*h-50,width:6,height:8,velocityX:0,velocityY:0,speed:3,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0},c.state.gameTime=0,c.state.growthTimers={},c.state.plantStructures={};let p=JSON.stringify(c),y=new Blob([p],{type:"application/json"}),v=URL.createObjectURL(y),G=document.createElement("a");G.href=v,G.download=`sprite-garden-map-${Date.now()}.json`,document.body.append(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(v),console.log("Map saved as game state file"),alert('Map saved successfully! You can load this file using the "Load Game File" button.')}catch(c){console.error("Failed to save map as state:",c),alert("Failed to save map. Check console for details.")}})()});let r=n.getElementById("regenerateMap");r&&r.addEventListener("click",()=>{if(confirm("Regenerated world? This will lose all editor changes.")){let c=Mt(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory);V.world.set(c)}})})(a,e,t)}function Zo(a,e,t,n,g,o,s,d){if(!z.isEnabled||!z.selectedTile||typeof t?.get!="function")return!1;let l=t.get();return zo(Math.floor((a+l.x)/g),Math.floor((e+l.y)/g),n,o,s,d),!0}function vt(a,e,t,n,g,o,s,d,l=!1){if(!z.isEnabled||!z.selectedTile)return!1;l&&(z.isDragging=!0,z.lastPaintedTile=null);let i=t.get(),I=Math.floor((a+i.x)/g),r=Math.floor((e+i.y)/g),c=`${I},${r}`;return z.lastPaintedTile!==c&&(zo(I,r,n,o,s,d),z.lastPaintedTile=c),!0}function zo(a,e,t,n,g,o){let s=t[z.selectedTile];if(!s)return;let d=o.get(),l=Math.floor(z.brushSize/2),i=!1;for(let I=-l;I<=l;I++)for(let r=-l;r<=l;r++){let c=a+I,A=e+r;if(!(c<0||c>=g||A<0||A>=n)){if(z.brushSize>1&&Math.sqrt(I*I+r*r)>l+.5)continue;d.getTile(c,A)!==s&&(d.setTile(c,A,s),i=!0)}}i&&V.world.set(d)}var So,dn={exports:{}},In,ft,un,wo,Ro,hi=Yn((So||(So=1,In=dn,ft=dn.exports||globalThis,un=function a(e){var t=this,n={},g=a;g.getNumberOfInstance=function(){return g._numberOfInstance},t.enable=function(){return n.listenCodeCharSequence(),n.listenCodeGestureSequence(),n.debug&&n.debug("Listener enabled for all."),t},t.enableKeyboardKeys=function(){return n.listenCodeCharSequence(),n.debug&&n.debug("Listener enabled for Keyboard Keys."),t},t.enableTouchGesture=function(){return n.listenCodeGestureSequence(),n.debug&&n.debug("Listener enabled for Touch Gesture."),t},t.disable=function(){return n.stopCodeCharSequence(),n.stopCodeGestureSequence(),n.debug&&n.debug("Listener disabled for all."),t},t.disableKeyboardKeys=function(){return n.stopCodeCharSequence(),n.debug&&n.debug("Listener disabled for Keyboard Keys."),t},t.disableTouchGesture=function(){return n.stopCodeGestureSequence(),n.debug&&n.debug("Listener disabled for Touch Gesture."),t},t.setListener=function(o){return n.stopCodeCharSequence(),n.stopCodeGestureSequence(),n.listener=o||document,n.listenCodeCharSequence(),n.listenCodeGestureSequence(),n.debug&&n.debug("Listener changed.",o),t},t.setCallback=function(o){return n.afterCodeSequenceCallback=typeof o=="function"&&o||n.defaultCallback,n.debug&&n.debug("Callback changed.",o),t},t.setOptions=function(o){return n.initOptions(o),t},n.keptLastCodeChar=function(){n.input.length>n.konamiCodeChar.length&&(n.input=n.input.substr(n.input.length-n.konamiCodeChar.length))},n.defaultCallback=function(){n.debug&&n.debug("Konami Code Sequence Entered. There is no action defined.")},n.checkIfCodeCharIsValid=function(){n.input===n.konamiCodeChar&&n.afterCodeSequenceCallback(t)},n.codeSequenceEventKeyDown=function(o){n.input+=o.keyCode,n.keptLastCodeChar(),n.checkIfCodeCharIsValid()},n.codeSequenceEventTouchMove=function(o){var s;o.touches.length===1&&n.capture===!0&&(s=o.touches[0],n.stopX=s.pageX,n.stopY=s.pageY,n.tap=!1,n.capture=!1,n.checkIfCodeGestureIsValid())},n.codeSequenceEventTouchEnd=function(){n.tap===!0&&n.checkIfCodeGestureIsValid()},n.codeSequenceEventTouchStart=function(o){n.startX=o.changedTouches[0].pageX,n.startY=o.changedTouches[0].pageY,n.tap=!0,n.capture=!0},n.stopCodeCharSequence=function(){n.listener.removeEventListener("keydown",n.codeSequenceEventKeyDown)},n.stopCodeGestureSequence=function(){n.listener.removeEventListener("touchstart",n.codeSequenceEventTouchStart),n.listener.removeEventListener("touchmove",n.codeSequenceEventTouchMove),n.listener.removeEventListener("touchend",n.codeSequenceEventTouchEnd)},n.listenCodeCharSequence=function(){n.stopCodeCharSequence(),n.listener.addEventListener("keydown",n.codeSequenceEventKeyDown)},n.listenCodeGestureSequence=function(){n.originalCodeGesture=n.konamiCodeGesture,n.stopCodeGestureSequence(),n.listener.addEventListener("touchstart",n.codeSequenceEventTouchStart),n.listener.addEventListener("touchmove",n.codeSequenceEventTouchMove),n.listener.addEventListener("touchend",n.codeSequenceEventTouchEnd,!1)},n.checkIfCodeGestureIsValid=function(){var o=Math.abs(n.startX-n.stopX),s=Math.abs(n.startY-n.stopY),d=n.startX-n.stopX<0?"rt":"lt",l=n.startY-n.stopY<0?"dn":"up",i=o>s?d:l;(i=n.tap===!0?"tp":i)===n.konamiCodeGesture.substr(0,2)?n.konamiCodeGesture=n.konamiCodeGesture.substr(2,n.konamiCodeGesture.length-2):n.konamiCodeGesture=n.originalCodeGesture,n.konamiCodeGesture.length===0&&(n.konamiCodeGesture=n.originalCodeGesture,n.afterCodeSequenceCallback(t))},n.checkDebugMode=function(o){o&&o.debug===!0?(n.debug=function(s,d){d!==void 0?console.log(s,d):console.log(s)},n.debug&&n.debug("Debug Mode On.")):n.debug=!1},n.initOptions=function(o){n.checkDebugMode(o),n.listener=o&&o.listener||document,n.afterCodeSequenceCallback=typeof o=="function"&&o||o&&typeof o.callback=="function"&&o.callback||n.defaultCallback},n.init=function(){n.input="",n.konamiCodeChar="38384040373937396665",n.konamiCodeGesture="upupdndnltrtltrttptp",n.startX=0,n.startY=0,n.stopX=0,n.stopY=0,n.tap=!1,n.capture=!1,g._numberOfInstance=g._numberOfInstance?g._numberOfInstance+1:1,n.initOptions(e),n.listenCodeCharSequence(),n.listenCodeGestureSequence()},n.init()},wo=ft.KonamiCode,(Ro=ft.KonamiCode=un).noConflict=function(){return ft.KonamiCode=wo,Ro},In.exports&&(In.exports=un)),dn.exports));function Qo(a,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>a.apply(this,n),e)}}function pi(a,e,t,n,g,o=5){let s=t.get();for(let d=-o;d<=o;d++)for(let l=-o;l<=o;l++){let i=a+d,I=e+l;i>=0&&i<n&&I>=0&&I<g&&s.add(`${i},${I}`)}}function Gt(a,e,t){for(let[n,g]of Object.entries(t.get()))if(g.mature&&g.blocks&&(Array.isArray(g.blocks)?g.blocks:Object.values(g.blocks)).find(o=>o.x===a&&o.y===e))return!0;return!1}function yi(a,e,t,n,g,o,s,d,l,i="regular"){if(z.isEnabled)return void console.log("Breaking disabled in map editor mode");let I=Math.floor((n.x+n.width/2)/o),r=Math.floor((n.y+n.height/2)/o),c=[];if(i==="regular")if(n.lastDirection!==0){let A=n.lastDirection>0?1:-1;for(let C=0;C<3;C++){let h=I+A,p=r-C;if(h<0||h>=l||p<0||p>=d)continue;let y=s.getTile(h,p);y&&y!==g.AIR&&y!==g.BEDROCK&&y!==g.LAVA&&y!==g.WATER&&!Gt(h,p,t)&&c.push({x:h,y:p,tile:y,priority:C})}}else{let A=I,C=r+1;if(A>=0&&A<l&&C>=0&&C<d){let h=s.getTile(A,C);h&&h!==g.AIR&&h!==g.BEDROCK&&h!==g.LAVA&&h!==g.WATER&&!Gt(A,C,t)&&c.push({x:A,y:C,tile:h,priority:1})}}else if(n.lastDirection!==0)for(let C=-1;C<=1;C++)for(let h=-1;h<=1;h++){let p=I+C*(n.lastDirection,1),y=r+h;if(p<0||p>=l||y<0||y>=d)continue;let v=s.getTile(p,y);if(v&&v!==g.AIR&&v!==g.BEDROCK&&v!==g.LAVA&&v!==g.WATER&&!Gt(p,y,t)){let G=Math.abs(C)===0?1:2-Math.abs(C)/1;c.push({x:p,y,tile:v,priority:G})}}else for(let C=-1;C<=1;C++)for(let h=-1;h<=1;h++){let p=I+C,y=r+h;if(p<0||p>=l||y<0||y>=d)continue;let v=s.getTile(p,y);v&&v!==g.AIR&&v!==g.BEDROCK&&v!==g.LAVA&&v!==g.WATER&&!Gt(p,y,t)&&c.push({x:p,y,tile:v,priority:1})}if(c.length>0){let A=e.get(),C=t.get(),h=D({},A),p=D({},C),y={},v={};c.forEach(R=>{let w=!1,N=null;for(let[k,X]of Object.entries(C)){if(!X.mature&&X.blocks){let H=Array.isArray(X.blocks)?X.blocks:Object.values(X.blocks);for(let F of H)if(F.x===R.x&&F.y===R.y){w=!0,N=k;break}}if(w)break}if(w&&N){let k=C[N];k.blocks&&(Array.isArray(k.blocks)?k.blocks:Object.values(k.blocks)).forEach(X=>{X.x>=0&&X.x<l&&X.y>=0&&X.y<d&&s.setTile(X.x,X.y,g.AIR)}),k.seedType&&Math.random()<.5&&(y[k.seedType]=(y[k.seedType]||0)+1),delete p[N],delete h[N]}else{if(s.setTile(R.x,R.y,g.AIR),delete h[`${R.x},${R.y}`],(function(X,H){return X===H.TREE_TRUNK||X===H.TREE_LEAVES})(R.tile,g)&&Math.random()<.15&&(y.WALNUT=(y.WALNUT||0)+1),R.tile.crop&&Math.random()<.3){let X=Dn(g)[R.tile.id];X&&(y[X]=(y[X]||0)+1)}let k=(function(X,H){return X?.drops??Object.fromEntries(Object.entries(H).map(([F,q])=>[q.id,F]))[X.id]})(R.tile,g);k&&(R.tile===g.TREE_LEAVES&&Math.random()<.3||R.tile!==g.TREE_LEAVES)&&(v[k]=(v[k]||0)+1)}});let G=c.map(R=>be((function(w,N){for(let k in w)if(w[k].id===N)return k;return null})(g,R.tile.id))).join(", ");a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:`Collected ${JSON.stringify(G)}`}})),e.set(h),t.set(p),Object.keys(y).length>0&&we("seedInventory",R=>{let w=D({},R);return Object.entries(y).forEach(([N,k])=>{w[N]+=k}),w}),Object.keys(v).length>0&&we("materialsInventory",R=>{let w=D({},R);return Object.entries(v).forEach(([N,k])=>{w[N]=(w[N]||0)+k}),w})}}function qo(a,e,t,n,g,o,s,d,l,i,I="regular"){let r=n.get(),c=s.get(),A=Math.floor((r.x+r.width/2)/o),C=Math.floor((r.y+r.height/2)/o),h=yi(a,e,t,r,g,o,c,d,l,I);for(let p=-3;p<=3;p++)for(let y=-3;y<=3;y++){let v=A+p,G=C+y;v>=0&&v<l&&G>=0&&G<d&&c.getTile(v,G)===g.WATER&&pi(v,G,i,l,d,10)}return h}function vi(a,e,t,n,g,o){let s=Dn(t)[e.id];if(s){let d=2+Math.floor(3*Math.random());we("seedInventory",i=>$(D({},i),{[s]:i[s]+d})),n.setTile(g,o,t.AIR);let l=`Harvested ${be(s)} crop, gained ${d} seeds`;console.log(l),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:l}}))}}function fi(a,e,t,n,g,o,s,d,l){let i=s.getTile(d,l+1);if(!i||!i.farmable)return void console.log(`Cannot plant at (${d}, ${l}) - no farmable ground below`);let I;if(sn[g]&&n[g]>0){s.setTile(d,l,sn[g]),we("seedInventory",c=>$(D({},c),{[g]:c[g]-1}));let r=`${d},${l}`;e.set($(D({},e.get()),{[r]:{timeLeft:o[g].growthTime,seedType:g}})),t.set($(D({},t.get()),{[r]:{seedType:g,mature:!1,blocks:[{x:d,y:l,tile:sn[g]}],baseX:d,baseY:l}})),I=`Planted ${be(g)} at (${d}, ${l}), ${n[g]-1} seeds remaining`}else I=`Cannot plant ${be(g)} - no seeds available or invalid seed type`;console.log(I),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:I}}))}function Gi(a,e,t,n,g,o,s,d,l){if(n.blocks&&(Array.isArray(n.blocks)?n.blocks:Object.values(n.blocks)).forEach(r=>{r.x>=0&&r.x<l&&r.y>=0&&r.y<d&&s.setTile(r.x,r.y,o.AIR)}),n.seedType){let r=1+Math.floor(3*Math.random());we("seedInventory",y=>$(D({},y),{[n.seedType]:y[n.seedType]+r}));let c=`Harvested mature ${be(n.seedType)}, gained ${r} seed${r>1?"s":""}.`,A="WOOD",C=o[n.seedType].drops,h=Array.isArray(C)?C.some(y=>y.toLowerCase().includes(y.toLowerCase())):C.toLowerCase().includes(A.toLowerCase()),p=h?1+Math.floor(3*Math.random()):0;p&&(we("materialsInventory",y=>$(D({},y),{[A]:y[A]+p})),c=`${c} Gained ${p} ${be(A)}.`),console.log(c),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:c}}))}let i=D({},t.get()),I=D({},e.get());delete i[g],delete I[g],t.set(i),e.set(I)}function $o(a,e,t,n,g,o,s,d,l,i,I){let r=Math.floor((n.x+n.width/2)/d),c=Math.floor((n.y+n.height/2)/d),A=[];if(n.lastDirection!==0){let C=n.lastDirection>0?1:-1;A.push({x:r+C,y:c}),A.push({x:r+C,y:c+1})}A.push({x:r,y:c+1}),A.push({x:r,y:c});for(let C of A){let{x:h,y:p}=C;if(h<0||h>=I||p<0||p>=i)continue;let y=l.getTile(h,p),v=null,G=null,R=t.get();for(let[w,N]of Object.entries(R))if(N.mature&&N.blocks&&(Array.isArray(N.blocks)?N.blocks:Object.values(N.blocks)).find(k=>k.x===h&&k.y===p)){v=N,G=w;break}if(v&&G)return void Gi(a,e,t,v,G,s,l,i,I);if(y&&y.crop)return void vi(a,y,s,l,h,p);if(y===s.AIR&&o&&g[o]>0)return void fi(a,e,t,g,o,s,l,h,p)}}async function er(a){let e=await Q.getItem("sprite-garden-range")||1;a.querySelector('[data-key="k"].middle').innerHTML=`&times;${Number(e)}`}async function Rn(a,e,t,n,g,o,s,d,l,i){let I=Math.floor((n.x+n.width/2)/s),r=Math.floor((n.y+n.height/2)/s),c,A,C=await Q.getItem("sprite-garden-range")||1;switch(e.toLowerCase()){case"k":return void await(async function(G){let R=Number(await Q.getItem("sprite-garden-range")||1),w=Number(R+1);R>=3&&(w=1),await Q.setItem("sprite-garden-range",w),await er(G)})(a);case"u":C===1&&(c=I-C,A=r-C),C===2&&(c=I-1,A=r-C),C===3&&(c=I-1,A=r-C);break;case"i":C===1&&(c=I,A=r-C),C===2&&(c=I,A=r-C),C===3&&(c=I,A=r-C);break;case"o":C===1&&(c=I+C,A=r-C),C===2&&(c=I+1,A=r-C),C===3&&(c=I+1,A=r-C);break;case"j":C===1&&(c=I-C,A=r),C===2&&(c=I-C,A=r),C===3&&(c=I-C,A=r);break;case"l":C===1&&(c=I+C,A=r),C===2&&(c=I+C,A=r),C===3&&(c=I+C,A=r);break;case"m":C===1&&(c=I-C,A=r+C),C===2&&(c=I-1,A=r+C),C===3&&(c=I-1,A=r+C);break;case",":C===1&&(c=I,A=r+C),C===2&&(c=I,A=r+C),C===3&&(c=I,A=r+C);break;case".":C===1&&(c=I+C,A=r+C),C===2&&(c=I+1,A=r+C),C===3&&(c=I+1,A=r+C);break;default:let v=`Invalid placement key: ${e}`;return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}if(!g){let v="No material selected for placement";return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}if(t[g]<=0){let v=`No ${be(g)} available to place`;return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}if(c<0||c>=i||A<0||A>=l){let v=`Cannot place block outside world bounds at (${c}, ${A})`;return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}let h=d.getTile(c,A);if(h&&h!==o.AIR&&h.solid){let v=`Cannot place block at (${c}, ${A}) - position occupied`;return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}let p=(function(v,G){return G[v]||null})(g,o);if(!p){let v=`Invalid material type: ${be(g)}`;return console.log(v),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:v}}))}d.setTile(c,A,p),we("materialsInventory",v=>$(D({},v),{[g]:v[g]-1}));let y=`Placed ${be(g)} at (${c}, ${A}), ${t[g]-1} remaining.`;console.log(y),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:y}}))}function et(a,e){let t=a.getElementById("canvas");if(t instanceof HTMLCanvasElement){let n=e.currentResolution?.get();if(n==="fullscreen")return a?.host.classList.remove("resolution","resolution-400","resolution-800"),t.width=window.innerWidth,t.height=window.innerHeight,t.style.width="100vw",t.style.height="100vh",void e.fogScale.set(36);a.host.classList.add("resolution"),a.host.classList.remove("resolution-400","resolution-800");let g=parseInt(n);if(t.width=g,t.height=g,t.style.width=g+"px",t.style.height=g+"px",a.host.classList.add(`resolution-${g}`),n==="800")return void e.fogScale.set(24);e.fogScale.set(12)}}function Ln(a,e){for(let[t,n]of Object.entries(e))a.host instanceof HTMLElement&&a.host.style.setProperty(t,n)}var En="sprite-garden-custom-colors",Tn=class{constructor(e,t,n){this.gThis=e,this.doc=t,this.shadow=n,this.dialog=null,this.colors={},this.originalColors={},this.close=this.close.bind(this),this.handleColorChange=this.handleColorChange.bind(this),this.handleDialogClose=this.handleDialogClose.bind(this),this.handleDialogKeydown=this.handleDialogKeydown.bind(this),this.handleReset=this.handleReset.bind(this),this.handleSave=this.handleSave.bind(this),this.dirty=!1}async createDialog(){this.dialog&&this.dialog.remove(),this.originalColors=Ue(this.gThis,this.shadow),this.colors=D({},this.originalColors);let e=this.doc.createElement("dialog");return e.setAttribute("id","customizeColorsDialog"),e.addEventListener("close",this.handleDialogClose),e.addEventListener("keydown",this.handleDialogKeydown),e.style.cssText=`
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
    `,this.shadow.append(e),this.dialog=e,this.renderColorInputs(),this.initEventListeners(),e}async handleSave(){await(async function(e,t){try{await Q.setItem(t,e),console.log("Saved custom colors")}catch(n){console.error("Failed to save colors:",n)}})(this.colors,En),await Ln(this.shadow,this.colors),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})),this.dirty=!1,this.close()}async handleReset(){confirm("Reset all colors to defaults and close? This cannot be undone.")&&(await(async function(e,t,n){try{await Q.removeItem(n);let g=Ue(e,t);for(let o of Object.keys(g))t.host instanceof HTMLElement&&t.host.style.removeProperty(o);console.log("Reset to default colors")}catch(g){console.error("Failed to reset colors:",g)}})(this.gThis,this.shadow,En),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:null}})),this.dirty=!1,this.close())}renderColorInputs(){let e=this.dialog.querySelector("#colorInputsContainer"),t={};for(let[g,o]of Object.entries(this.colors)){let s=g.match(/--sg-?([a-z]+)-/),d=s?s[1]:"other";["host","touch","ui"].includes(d)||(t[d]||(t[d]=[]),t[d].push({property:g,value:o.slice(0,7)}))}let n=Object.keys(t).sort();for(let g of n){let o=this.doc.createElement("div");o.style.cssText=`
        grid-column: 1 / -1;
        margin-top: 1rem;
      `;let s=this.doc.createElement("h4");s.textContent=(g.charAt(0).toUpperCase()+g.slice(1)).replace("Tile","Tiles"),s.style.cssText=`
        border-bottom: 1px solid var(--sg-color-gray-300);
        color: var(--sg-color-gray-800);
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
        padding-bottom: 0.25rem;
      `,o.append(s);let[d]=t[g];d.property.startsWith("--sg-color")&&o.setAttribute("hidden","hidden"),e.append(o);for(let{property:l,value:i}of t[g]){let I=this.doc.createElement("div");I.style.cssText=`
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `,l.startsWith("--sg-color")&&I.setAttribute("hidden","hidden");let r=this.doc.createElement("label");r.textContent=l.replace("--sg-","").replace(/-/g," ").replace("tile ","").replace("color ","").replace(" color",""),r.style.cssText=`
          color: var(--sg-color-gray-700);
          font-size: 0.75rem;
          text-transform: capitalize;
        `;let c=this.doc.createElement("div");c.style.cssText=`
          align-items: center;
          display: flex;
          gap: 0.5rem;
        `;let A=this.doc.createElement("input");A.type="color",A.value=this.normalizeColor(i),A.dataset.property=l,A.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          cursor: pointer;
          height: 2rem;
          width: 3rem;
        `;let C=this.doc.createElement("input");C.type="text",C.value=i,C.dataset.property=l,C.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          flex: 1;
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.25rem;
        `;let h=Qo(()=>{this.handleColorChange(l,C.value)},500);A.addEventListener("input",p=>{p.target instanceof HTMLInputElement&&(C.value=p.target.value,h())}),C.addEventListener("input",p=>{if(p.target instanceof HTMLInputElement){let y=this.normalizeColor(p.target.value);y&&(A.value=y),h()}}),c.append(A),c.append(C),I.append(r),I.append(c),e.append(I)}}}normalizeColor(e){if(!e)return"#000000";if(e.startsWith("#"))return e.length===7?e:"#000000";let t=this.doc.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}handleColorChange(e,t){this.colors[e]=t,this.dirty=!0;let n=this.shadow.host;n instanceof HTMLElement&&(n.style.setProperty(e,t),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})))}initEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),t=this.dialog.querySelector("#saveColorsBtn"),n=this.dialog.querySelector("#resetColorsBtn");e.addEventListener("click",this.close),t.addEventListener("click",this.handleSave),n.addEventListener("click",this.handleReset)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}handleDialogKeydown(e){e.key==="Escape"&&(e.preventDefault(),this.close())}close(){this.dirty?confirm("Close without saving?")&&(Ln(this.shadow,this.originalColors),requestAnimationFrame(()=>{this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.originalColors}}))}),this.dialog instanceof HTMLDialogElement&&this.dialog.close()):this.dialog instanceof HTMLDialogElement&&this.dialog.close()}handleDialogClose(){this.removeEventListeners(),this.dialog.remove()}removeEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),t=this.dialog.querySelector("#saveColorsBtn"),n=this.dialog.querySelector("#resetColorsBtn");e.removeEventListener("click",this.close),t.removeEventListener("click",this.handleSave),n.removeEventListener("click",this.handleReset)}};async function Lo(a){let e=(function(n,g){let o=(d,l)=>{if(!d)return null;if(d.tagName===l.toUpperCase()&&d.shadowRoot)return d;let i=[...d.children||[]];return d.shadowRoot&&i.push(d.shadowRoot),i.map(I=>o(I,l)).find(Boolean)||null},s=o(n,g);return s?s.shadowRoot:null})(a.document,"sprite-garden"),t=new Tn(a,a.document,e);return await t.createDialog(),t.show(),t}function tr(){let a=x.breakMode.get();x.breakMode.set(a==="regular"?"extra":"regular")}async function nr(a){let e=await Q.getItem("sprite-garden-movement-scale");e||(e=1,await Q.setItem("sprite-garden-movement-scale",e)),a.querySelector('[data-key="x"].middle').innerHTML=`&times;${Number(e)}`}async function Mn(a){let e=Number(Number(await Q.getItem("sprite-garden-movement-scale"))||1),t=Number(Number(e.toFixed(2))+.125);t>1&&(t=Number(t.toFixed(1))),t>1&&(t=.5),await Q.setItem("sprite-garden-movement-scale",t),await nr(a)}var Nn=class{constructor(e,t){this.doc=e,this.shadow=t,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let t=`${e}-content`,n=this.shadow.querySelector(`.${t}`);if(!n){n=this.doc.createElement("dialog"),n.setAttribute("class",t);let g=new DOMParser,o=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFib3V0PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkFib3V0IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJhYm91dCI+CiAgICA8ZGl2IGNsYXNzPSJhYm91dC1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iYWJvdXQtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBoaWRkZW49ImhpZGRlbiIgY2xhc3M9ImFib3V0LWNvbnRlbnRfY2xvc2UtYnRuIj4mdGltZXM7PC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL2Fib3V0LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPkFib3V0PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD4KICAgICAgICAgIFNwcml0ZSBHYXJkZW4gaXMgYSAyRCBzYW5kYm94IGV4cGxvcmF0aW9uIGFuZCBmYXJtaW5nIGdhbWUgdGhhdCBydW5zCiAgICAgICAgICBlbnRpcmVseSBpbiB5b3VyIHdlYiBicm93c2VyLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLAogICAgICAgICAgZGlzY292ZXIgZGlmZmVyZW50IGJpb21lcywgbWluZSByZXNvdXJjZXMsIGFuZCBjdWx0aXZhdGUgYSB2YXJpZXR5IG9mCiAgICAgICAgICBjcm9wcy4KICAgICAgICA8L3A+CiAgICAgICAgPGEKICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgPgogICAgICAgICAgPGltZwogICAgICAgICAgICBzcmM9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vYXNzZXRzL3Nwcml0ZS1nYXJkZW4tdGltZS1sYXBzZS5naWYiCiAgICAgICAgICAgIGRlc2M9IkEgdGltZSBsYXBzZSBvZiBhIGdhcmRlbiBpbiBTcHJpdGUgR2FyZGVuIgogICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIFRpbWUgTGFwc2UiCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+RmVhdHVyZXM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Qcm9jZWR1cmFsIFdvcmxkIEdlbmVyYXRpb248L3N0cm9uZz4gLSBFYWNoIHdvcmxkIGlzIHVuaXF1ZSwKICAgICAgICAgICAgZ2VuZXJhdGVkIGZyb20gYSBzaGFyZWFibGUgc2VlZAogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5NdWx0aXBsZSBCaW9tZXM8L3N0cm9uZz4gLSBFeHBsb3JlIGZvcmVzdHMsIGRlc2VydHMsCiAgICAgICAgICAgIHR1bmRyYXMsIGFuZCBzd2FtcHMsIGVhY2ggd2l0aCB1bmlxdWUgY2hhcmFjdGVyaXN0aWNzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkZhcm1pbmcgU3lzdGVtPC9zdHJvbmc+IC0gUGxhbnQgYW5kIGhhcnZlc3QgZGlmZmVyZW50IGNyb3AKICAgICAgICAgICAgdHlwZXMgd2l0aCByZWFsaXN0aWMgZ3Jvd3RoIGN5Y2xlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5SZXNvdXJjZSBNaW5pbmc8L3N0cm9uZz4gLSBEaWcgZm9yIHZhbHVhYmxlIHJlc291cmNlcyBsaWtlCiAgICAgICAgICAgIGNvYWwsIGlyb24sIGFuZCBnb2xkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkNhdmUgU3lzdGVtczwvc3Ryb25nPiAtIERpc2NvdmVyIHVuZGVyZ3JvdW5kIGNhdmVzIGZpbGxlZAogICAgICAgICAgICB3aXRoIHJlc291cmNlcyBhbmQgY2hhbGxlbmdlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5CdWlsZGluZzwvc3Ryb25nPiAtIFVzZSBjb2xsZWN0ZWQgbWF0ZXJpYWxzIHRvIHBsYWNlIGJsb2NrcwogICAgICAgICAgICBhbmQgc2hhcGUgdGhlIHdvcmxkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPlNhdmUgJmFtcDsgTG9hZDwvc3Ryb25nPiAtIFlvdXIgcHJvZ3Jlc3MgY2FuIGJlIHNhdmVkIG9uCiAgICAgICAgICAgIGRldmljZSBvciBhcyBhIGZpbGUgdG8gc2hhcmUKICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+UHJpdmFjeSBieSBEZXNpZ248L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyA8c3Ryb25nPnByaXZhdGUgYnkgZGVzaWduPC9zdHJvbmc+LiBBbGwgZ2FtZSBkYXRhIGlzCiAgICAgICAgICBwcm9jZXNzZWQgYW5kIHN0b3JlZCBsb2NhbGx5IG9uIHlvdXIgZGV2aWNlLiBObyBwZXJzb25hbCBpbmZvcm1hdGlvbgogICAgICAgICAgaXMgY29sbGVjdGVkLCB0cmFuc21pdHRlZCwgb3Igc3RvcmVkIG9uIGV4dGVybmFsIHNlcnZlcnMuIFlvdXIgZ2FtZQogICAgICAgICAgd29ybGRzLCBwcm9ncmVzcywgYW5kIHByZWZlcmVuY2VzIG5ldmVyIGxlYXZlIHlvdXIgZGV2aWNlLCB1bmxlc3MKICAgICAgICAgIHNoYXJlZCBieSB5b3UuCiAgICAgICAgPC9wPgogICAgICAgIDxwPgogICAgICAgICAgUmVhZCBtb3JlIGFib3V0IHRoZQogICAgICAgICAgPGEKICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gUHJpdmFjeSBQb2xpY3k8L2EKICAgICAgICAgID4uCiAgICAgICAgPC9wPgogICAgICAgIDxoMz5Db250cm9sczwvaDM+CiAgICAgICAgPHVsIGNsYXNzPSJhYm91dC1jb250cm9scyI+CiAgICAgICAgICA8bGk+PHN0cm9uZz5Nb3ZlbWVudDo8L3N0cm9uZz4gVy9BL1MvRCBvciBBcnJvdyBLZXlzPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkp1bXA6PC9zdHJvbmc+IFcsIOKGkSwgb3IgU3BhY2U8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+UGxhbnQvSGFydmVzdDo8L3N0cm9uZz4gRjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5CcmVhayBCbG9jazo8L3N0cm9uZz4gUjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgQnJlYWsgTW9kZTo8L3N0cm9uZz4gRTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgTW92ZW1lbnQgU2NhbGU6PC9zdHJvbmc+IFg8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+Q2hhbmdlIEJsb2NrIFJhbmdlOjwvc3Ryb25nPiBLPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPlBsYWNlIEJsb2NrOjwvc3Ryb25nPiBVL0kvTy9KL0wvTS8sLy48L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+V29ybGQgU3RhdGUgTWVudTo8L3N0cm9uZz4gQ3RybCtTPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkluc3BlY3QgVGlsZXM6PC9zdHJvbmc+IE1vdXNlIGhvdmVyPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5UYXAgdGhlIGJvdHRvbSBjb3JuZXIgcGFuZWwgZm9yIG1vYmlsZSBjb250cm9scy48L3N0cm9uZz4KICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi8iCiAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICA+CiAgICAgICAgICA8aW1nCiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9hc3NldHMvc3ByaXRlLWdhcmRlbi1hbmltYXRpb24uZ2lmIgogICAgICAgICAgICBkZXNjPSJBbiBhbmltYXRpb24gb2YgU3ByaXRlIEdhcmRlbiBnYW1lcGxheSIKICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHYW1lcGxheSBBbmltYXRpb24iCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+VGlwcyBmb3IgTmV3IFBsYXllcnM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgU3RhcnQgYnkgZXhwbG9yaW5nIHlvdXIgaW1tZWRpYXRlIHN1cnJvdW5kaW5ncyB0byB1bmRlcnN0YW5kIHRoZQogICAgICAgICAgICBiaW9tZQogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT5IYXJ2ZXN0IG5hdHVyYWwgY3JvcHMgdG8gYnVpbGQgdXAgeW91ciBzZWVkIGludmVudG9yeTwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIExvb2sgZm9yIGZhcm1hYmxlIGdyb3VuZCAoZGlydCwgZ3Jhc3MsIGNsYXksIHNhbmQpIHRvIHBsYW50IHNlZWRzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBEaWZmZXJlbnQgY3JvcHMgZ3JvdyBhdCBkaWZmZXJlbnQgcmF0ZXMgLSBtdXNocm9vbXMgYXJlIGZhc3Rlc3QsCiAgICAgICAgICAgIHRyZWVzIGFyZSBzbG93ZXN0CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBNaW5lIHJlc291cmNlcyBieSBicmVha2luZyBibG9ja3MgKFIga2V5KSAtIHlvdSdsbCBjb2xsZWN0IG1hdGVyaWFscwogICAgICAgICAgICBhdXRvbWF0aWNhbGx5CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPkZvZyBjbGVhcnMgYXMgZXhwbG9yYXRpb24gcHJvZ3Jlc3NlczwvbGk+CiAgICAgICAgICA8bGk+U2F2ZSB5b3VyIGdhbWUgZnJlcXVlbnRseSB1c2luZyB0aGUgV29ybGQgU3RhdGUgbWVudSAoQ3RybCtTKTwvbGk+CiAgICAgICAgICA8bGk+U2hhcmUgaW50ZXJlc3Rpbmcgd29ybGQgc2VlZHMgd2l0aCBmcmllbmRzITwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+T3BlbiBTb3VyY2U8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyBvcGVuIHNvdXJjZSBzb2Z0d2FyZS4gVmlzaXQKICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+dGhlIHByb2plY3QgcmVwb3NpdG9yeTwvYQogICAgICAgICAgPgogICAgICAgICAgdG8gdmlldyB0aGUgY29kZSwgcmVwb3J0IGlzc3Vlcywgb3IgdG8gY29udHJpYnV0ZS4KICAgICAgICA8L3A+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==")).text(),s=g.parseFromString(o,"text/html").querySelector(`.${t}`);n.innerHTML=s.innerHTML,this.shadow.append(n),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}if(!(n instanceof HTMLDialogElement))throw new Error("Failed to create or find HTMLDialogElement");return this.dialog=n,this.initEventListeners(),this.dialog}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".about-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".about-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},kn=class{constructor(e,t){this.doc=e,this.shadow=t,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e,t){this.dialog&&this.dialog.remove();let n=`${e}-content`,g=this.shadow.querySelector(`.${n}`);if(!g){g=this.doc.createElement("dialog"),g.setAttribute("class",n);let o=new DOMParser,s=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFQSSAtIEV4YW1wbGVzPC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkV4YW1wbGVzIC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJleGFtcGxlcyI+CiAgICA8ZGl2IGNsYXNzPSJleGFtcGxlcy1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iZXhhbXBsZXMtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIiB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW48L2EKICAgICAgICAgID4KICAgICAgICA8L2gxPgogICAgICAgIDxidXR0b24gaGlkZGVuPSJoaWRkZW4iIGNsYXNzPSJleGFtcGxlcy1jb250ZW50X2Nsb3NlLWJ0biI+CiAgICAgICAgICAmdGltZXM7CiAgICAgICAgPC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICA+QVBJIC0gRXhhbXBsZXM8L2EKICAgICAgICA+CiAgICAgIDwvaDI+CgogICAgICA8aDMgaWQ9IkZ1bGxzY3JlZW4iPgogICAgICAgIEZ1bGxzY3JlZW4gLSBTZXQgZnVsbHNjcmVlbiBhbmQgcmV2ZWFsIG9wdGlvbnMgaW4gc2V0dGluZ3MuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9GdWxsc2NyZWVuLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GdWxsc2NyZWVuLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBGdWxsc2NyZWVuIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iRmlyZXdvcmtzIj5GaXJld29ya3MgLSBQYXJ0aWNsZSBzeXN0ZW1zIGFuZCBjb2xvciB0cmFpbHMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0ZpcmV3b3Jrcy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GaXJld29ya3MubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gRmlyZXdvcmtzIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZpcmV3b3JrcyAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBGaXJld29ya3MgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iR29sZCI+R29sZCAtIEF1dG9tYXRlIGRpZ2dpbmcgZm9yIGdvbGQuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvR29sZC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPkdvbGQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEdvbGQgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJHT0wiPkdPTCAtIENvbndheSdzIEdhbWUgb2YgTGlmZSB1c2luZyBzcHJpdGUgZW50aXRpZXMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dPTC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5HT0wubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gR09MIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEdPTCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBHT0wgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUGhvdG8iPgogICAgICAgIFBob3RvIC0gRHJhd3MgaW50ZXJwcmV0ZWQgYml0bWFwIGJhc2VkIG9uIFNwcml0ZSBHYXJkZW4gdGlsZXMuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlBob3RvLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBQaG90byAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJIZWFydCI+SGVhcnQgLSBEcmF3cyBkeW5hbWljYWxseSBhbmltYXRlZCBoZWFydCBwYXR0ZXJucy48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5IZWFydC5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gSGVhcnQgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iS29uYW1pQ29kZSI+CiAgICAgICAgS29uYW1pIENvZGUgLSBTaG93cyBoYW5kbGluZyBvZiBrZXlib2FyZCBzZXF1ZW5jZXMgYW5kIGhpZGRlbgogICAgICAgIGludGVyYWN0aW9ucy4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPktvbmFtaUNvZGUubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Lb25hbWlDb2RlLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBLb25hbWkgQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmciPgogICAgICAgIE1lc3NhZ2luZyAtIERyYXcgdGV4dCBvbiB0aGUgbWFwIGZpbGxlZCB3aXRoIHdhdGVyLgogICAgICA8L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvTWVzc2FnaW5nLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPk1lc3NhZ2luZy5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmcgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIE1lc3NhZ2luZyAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmdTY3JvbGxlZCI+CiAgICAgICAgTWVzc2FnaW5nU2Nyb2xsZWQgLSBEcmF3cyBzY3JvbGxhYmxlIHRleHQgb24gdGhlIG1hcC4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+TWVzc2FnaW5nU2Nyb2xsZWQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4KICAgICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nU2Nyb2xsZWQgLSBCb29rbWFya2xldDwvc3BhbgogICAgICAgICAgICAgID48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUVJDb2RlIj5RUkNvZGUgLSBBZGQgYSBRUkNvZGUgdG8gdGhlIG1hcC48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvUVJDb2RlLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlFSQ29kZS5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBRUkNvZGUgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUVJDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIFFSQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),d=o.parseFromString(s,"text/html").querySelector(`.${n}`);g.innerHTML=d.innerHTML,this.shadow.append(g),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=g,this.initEventListeners(),g}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".examples-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".examples-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},Bn=class{constructor(e,t){this.doc=e,this.shadow=t,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let t=`${e}-content`,n=this.shadow.querySelector(`.${t}`);if(!n){n=this.doc.createElement("dialog"),n.setAttribute("class",t);let g=new DOMParser,o=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIFByaXZhY3kgUG9saWN5PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IlByaXZhY3kgUG9saWN5IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJwcml2YWN5Ij4KICAgIDxkaXYgY2xhc3M9InByaXZhY3ktY29udGVudCI+CiAgICAgIDxoZWFkZXIgY2xhc3M9InByaXZhY3ktY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0icHJpdmFjeS1jb250ZW50X2Nsb3NlLWJ0biIgaGlkZGVuPSJoaWRkZW4iPgogICAgICAgICAgJnRpbWVzOwogICAgICAgIDwvYnV0dG9uPgogICAgICA8L2hlYWRlcj4KCiAgICAgIDxoMj4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPlByaXZhY3kgUG9saWN5PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD48c3Ryb25nPkxhc3QgdXBkYXRlZDo8L3N0cm9uZz4gT2N0b2JlciAwNCwgMjAyNTwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBPdXIgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgb24gdGhlCiAgICAgICAgICBjb2xsZWN0aW9uLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgWW91ciBpbmZvcm1hdGlvbiB3aGVuIFlvdSB1c2UgdGhlCiAgICAgICAgICBTZXJ2aWNlLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICA8c3Ryb25nCiAgICAgICAgICAgID5XZSBkbyBub3QgY29sbGVjdCwgc3RvcmUsIHVzZSwgb3IgZGlzc2VtaW5hdGUgWW91ciBQZXJzb25hbAogICAgICAgICAgICBEYXRhLjwvc3Ryb25nCiAgICAgICAgICA+CiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+SW50ZXJwcmV0YXRpb24gYW5kIERlZmluaXRpb25zPC9oMz4KCiAgICAgICAgPGg0PkludGVycHJldGF0aW9uPC9oND4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSB3b3JkcyBvZiB3aGljaCB0aGUgaW5pdGlhbCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQgaGF2ZSBtZWFuaW5ncwogICAgICAgICAgZGVmaW5lZCB1bmRlciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMuIFRoZSBmb2xsb3dpbmcgZGVmaW5pdGlvbnMKICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHNhbWUgbWVhbmluZyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhleSBhcHBlYXIgaW4KICAgICAgICAgIHNpbmd1bGFyIG9yIGluIHBsdXJhbC4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5EZWZpbml0aW9uczwvaDQ+CiAgICAgICAgPHA+Rm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIFByaXZhY3kgUG9saWN5OjwvcD4KCiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkFwcGxpY2F0aW9uPC9zdHJvbmc+IHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLCB0aGUgc29mdHdhcmUKICAgICAgICAgICAgcHJvZ3JhbSBwcm92aWRlZCBieSB0aGUgQ29tcGFueS4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueTwvc3Ryb25nPiAocmVmZXJyZWQgdG8gYXMgZWl0aGVyICJ0aGUgQ29tcGFueSIsICJXZSIsCiAgICAgICAgICAgICJVcyIgb3IgIk91ciIgaW4gdGhpcyBBZ3JlZW1lbnQpIHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5EZXZpY2U8L3N0cm9uZz4gbWVhbnMgYW55IGRldmljZSB0aGF0IGNhbiBhY2Nlc3MgdGhlIFNlcnZpY2UKICAgICAgICAgICAgc3VjaCBhcyBhIGNvbXB1dGVyLCBhIGNlbGxwaG9uZSBvciBhIGRpZ2l0YWwgdGFibGV0LgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5QZXJzb25hbCBEYXRhPC9zdHJvbmc+IGlzIGFueSBpbmZvcm1hdGlvbiB0aGF0IHJlbGF0ZXMgdG8gYW4KICAgICAgICAgICAgaWRlbnRpZmllZCBvciBpZGVudGlmaWFibGUgaW5kaXZpZHVhbC4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5TZXJ2aWNlPC9zdHJvbmc+IHJlZmVycyB0byB0aGUgQXBwbGljYXRpb24uPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Vc2FnZSBEYXRhPC9zdHJvbmc+IHJlZmVycyB0byBkYXRhIGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5LAogICAgICAgICAgICBlaXRoZXIgZ2VuZXJhdGVkIGJ5IHRoZSB1c2Ugb2YgdGhlIFNlcnZpY2Ugb3IgZnJvbSB0aGUgU2VydmljZQogICAgICAgICAgICBpbmZyYXN0cnVjdHVyZSBpdHNlbGYuCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPllvdTwvc3Ryb25nPiBtZWFucyB0aGUgaW5kaXZpZHVhbCBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlCiAgICAgICAgICAgIFNlcnZpY2UsIG9yIHRoZSBjb21wYW55LCBvciBvdGhlciBsZWdhbCBlbnRpdHkgb24gYmVoYWxmIG9mIHdoaWNoCiAgICAgICAgICAgIHN1Y2ggaW5kaXZpZHVhbCBpcyBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFNlcnZpY2UsIGFzIGFwcGxpY2FibGUuCiAgICAgICAgICA8L2xpPgogICAgICAgIDwvdWw+CgogICAgICAgIDxoMz5Db2xsZWN0aW5nIGFuZCBVc2luZyBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgoKICAgICAgICA8aDQ+VHlwZXMgb2YgRGF0YSBOb3QgQ29sbGVjdGVkPC9oND4KCiAgICAgICAgPGg1PlBlcnNvbmFsIERhdGE8L2g1PgogICAgICAgIDxwPgogICAgICAgICAgV2hpbGUgdXNpbmcgT3VyIFNlcnZpY2UsIFdlIHdpbGwgbm90IGFzayBZb3UgdG8gcHJvdmlkZSBVcyB3aXRoCiAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiB0aGF0IHdvdWxkIGJlIHVzZWQgdG8gY29udGFjdCBvcgogICAgICAgICAgaWRlbnRpZnkgWW91LgogICAgICAgIDwvcD4KCiAgICAgICAgPGg1PlVzYWdlIERhdGE8L2g1PgogICAgICAgIDxwPlVzYWdlIERhdGEgaXMgbm90IGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgdGhlIFNlcnZpY2UuPC9wPgoKICAgICAgICA8aDU+TG9jYWwgU3RvcmFnZTwvaDU+CiAgICAgICAgPHA+CiAgICAgICAgICBTcHJpdGUgR2FyZGVuIHVzZXMgeW91ciBicm93c2VyJ3MgbG9jYWwgc3RvcmFnZSB0byBzYXZlIHlvdXIgZ2FtZQogICAgICAgICAgcHJvZ3Jlc3Mgb24geW91ciBkZXZpY2UuIFRoaXMgZGF0YSBuZXZlciBsZWF2ZXMgeW91ciBkZXZpY2UgYW5kIGlzIG5vdAogICAgICAgICAgdHJhbnNtaXR0ZWQgdG8gYW55IHNlcnZlcnMuIFlvdSBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoaXMgZGF0YSBhbmQKICAgICAgICAgIGNhbiBjbGVhciBpdCBhdCBhbnkgdGltZSB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5UcmFja2luZyBUZWNobm9sb2dpZXM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgV2UgZG8gbm90IHVzZSBDb29raWVzIG9yIHNpbWlsYXIgdHJhY2tpbmcgdGVjaG5vbG9naWVzIHRvIHRyYWNrCiAgICAgICAgICBhY3Rpdml0eSBvbiBPdXIgU2VydmljZS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Vc2Ugb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD5UaGUgQ29tcGFueSBkb2VzIG5vdCB1c2UgUGVyc29uYWwgRGF0YSBmb3IgYW55IHB1cnBvc2VzLjwvcD4KCiAgICAgICAgPGgzPlJldGVudGlvbiBvZiBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgVGhlIENvbXBhbnkgZG9lcyBub3QgcmV0YWluIFlvdXIgUGVyc29uYWwgRGF0YS4gQWxsIGdhbWUgZGF0YSBpcwogICAgICAgICAgc3RvcmVkIGxvY2FsbHkgb24geW91ciBkZXZpY2Ugb25seS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5EaXNjbG9zdXJlIG9mIFlvdXIgUGVyc29uYWwgRGF0YTwvaDM+CgogICAgICAgIDxoND5CdXNpbmVzcyBUcmFuc2FjdGlvbnM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgSWYgdGhlIENvbXBhbnkgaXMgaW52b2x2ZWQgaW4gYSBtZXJnZXIsIGFjcXVpc2l0aW9uIG9yIGFzc2V0IHNhbGUsCiAgICAgICAgICBZb3VyIFBlcnNvbmFsIERhdGEgd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+U2VjdXJpdHkgb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSBzZWN1cml0eSBvZiBZb3VyIFBlcnNvbmFsIERhdGEgaXMgaW1wb3J0YW50IHRvIFVzLiBTaW5jZSBhbGwgZ2FtZQogICAgICAgICAgZGF0YSBpcyBzdG9yZWQgbG9jYWxseSBvbiB5b3VyIGRldmljZSBhbmQgbmV2ZXIgdHJhbnNtaXR0ZWQgdG8KICAgICAgICAgIGV4dGVybmFsIHNlcnZlcnMsIHRoZSBzZWN1cml0eSBvZiB5b3VyIGRhdGEgaXMgbGFyZ2VseSBkZXBlbmRlbnQgb24KICAgICAgICAgIHlvdXIgZGV2aWNlJ3Mgc2VjdXJpdHkgbWVhc3VyZXMuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+TGlua3MgdG8gT3RoZXIgV2Vic2l0ZXM8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgT3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgd2Vic2l0ZXMgdGhhdCBhcmUgbm90IG9wZXJhdGVkCiAgICAgICAgICBieSBVcy4gSWYgWW91IGNsaWNrIG9uIGEgdGhpcmQgcGFydHkgbGluaywgWW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8KICAgICAgICAgIHRoYXQgdGhpcmQgcGFydHkncyBzaXRlLiBXZSBzdHJvbmdseSBhZHZpc2UgWW91IHRvIHJldmlldyB0aGUgUHJpdmFjeQogICAgICAgICAgUG9saWN5IG9mIGV2ZXJ5IHNpdGUgWW91IHZpc2l0LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSBoYXZlIG5vIGNvbnRyb2wgb3ZlciBhbmQgYXNzdW1lIG5vIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgY29udGVudCwKICAgICAgICAgIHByaXZhY3kgcG9saWNpZXMgb3IgcHJhY3RpY2VzIG9mIGFueSB0aGlyZCBwYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5DaGFuZ2VzIHRvIHRoaXMgUHJpdmFjeSBQb2xpY3k8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgV2UgbWF5IHVwZGF0ZSBPdXIgUHJpdmFjeSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUuIFdlIHdpbGwgbm90aWZ5IFlvdQogICAgICAgICAgb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IHdpdGhpbiB0aGUKICAgICAgICAgIGFwcGxpY2F0aW9uLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSB3aWxsIHVwZGF0ZSB0aGUgIkxhc3QgdXBkYXRlZCIgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoaXMgUHJpdmFjeQogICAgICAgICAgUG9saWN5LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBZb3UgYXJlIGFkdmlzZWQgdG8gcmV2aWV3IHRoaXMgUHJpdmFjeSBQb2xpY3kgcGVyaW9kaWNhbGx5IGZvciBhbnkKICAgICAgICAgIGNoYW5nZXMuIENoYW5nZXMgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBhcmUgZWZmZWN0aXZlIHdoZW4gdGhleSBhcmUKICAgICAgICAgIHBvc3RlZC4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhpcyBQcml2YWN5IFBvbGljeSwgWW91IGNhbiBjb250YWN0CiAgICAgICAgICB1czoKICAgICAgICA8L3A+CiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPkJ5IGVtYWlsOiBhZG1pbkBjcmVhdGl2ZWluZHVzdHJpYWwuY29tPC9saT4KICAgICAgICA8L3VsPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),s=g.parseFromString(o,"text/html").querySelector(`.${t}`);n.innerHTML=s.innerHTML,this.shadow.append(n),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=n,this.initEventListeners(),n}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function Cn(a){a&&a.parentElement&&(a.classList.add("toast--slide-out"),setTimeout(()=>a.remove(),300))}var or=a=>{let e=a.getElementById("toastContainer");e&&e.querySelectorAll(".toast").forEach(t=>{t.classList.add("toast--slide-out"),setTimeout(()=>t.remove(),300)}),a.removeEventListener("keydown",vn.get()),Rt.set(!0)};function Wi(a,e){let t=Qo(()=>{et(e,x)},200);new ResizeObserver(o=>{t()}).observe(e.host),(function(o,s){let d=s.getElementById("aboutBtn");d&&d.addEventListener("click",async function(){try{await(async function(I,r){let c=new Nn(I,r);return await c.createDialog("about"),c.show(),c})(o.document,s)}catch(I){console.error("Failed to open about dialog:",I),alert("Failed to open about dialog. Check console for details.")}});let l=s.getElementById("examplesBtn");l&&l.addEventListener("click",async function(){try{await(async function(I,r){let c=new kn(I,r);return await c.createDialog("examples","src/api"),c.show(),c})(o.document,s)}catch(I){console.error("Failed to open examples dialog:",I),alert("Failed to open examples dialog. Check console for details.")}});let i=s.getElementById("privacyBtn");i&&i.addEventListener("click",async function(){try{await(async function(I,r){let c=new Bn(I,r);return await c.createDialog("privacy"),c.show(),c})(o.document,s)}catch(I){console.error("Failed to open privacy dialog:",I),alert("Failed to open privacy dialog. Check console for details.")}})})(a,e),(function(o){let s=o.querySelector('[data-key="x"].middle');s&&(s.addEventListener("click",async()=>await Mn(o)),s.addEventListener("touchstart",async()=>await Mn(o)))})(e),er(e),nr(e);let n=e.getElementById("closeWorldGeneration");n&&n.addEventListener("click",()=>{e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden")});let g=e.getElementById("customizeColorsBtn");if(g){let o=a.spriteGarden.config;g.addEventListener("click",async()=>{let s=o.currentResolution.get();if(s==="400")return o.currentResolution.set("800"),et(e,o),void(await Lo(a)).dialog.addEventListener("close",()=>{o.currentResolution.set(s),et(e,o)});await Lo(a)})}}function Zi(a,e){new hi(l=>{e.getElementById("mapEditor").removeAttribute("hidden"),e.getElementById("customizeColorsBtnContainer").removeAttribute("hidden"),e.getElementById("examplesBtnContainer").removeAttribute("hidden"),e.querySelector('option[value="fullscreen"]').removeAttribute("hidden");let i=e.getElementById("customizeColorsDialog");i&&i.querySelectorAll("[hidden]").forEach(I=>I.removeAttribute("hidden")),e.querySelector('#settings > [class="ui-grid__corner--container"]').removeAttribute("hidden"),l.disable()}),e.addEventListener("sprite-garden-toast",l=>{l instanceof CustomEvent&&(function(i,I,r={}){let{duration:c=3e3,manualClose:A=!1,stack:C=!1,bottomOffset:h=1,useSingle:p=!0}=r,y=i.getElementById("toastContainer");if(!y)return void console.warn("Toast container not found");let v;if(y.style.bottom=`${h}rem`,p&&(v=y.querySelector(".toast"),v)){let R=v.querySelector(".toast__content");if(R&&(R.textContent=I),c>0){let w=v;clearTimeout(w.autoRemoveTimer),w.autoRemoveTimer=setTimeout(()=>Cn(v),c)}return}C||p||y.querySelectorAll(".toast").forEach(R=>{R.classList.add("toast--fade-out"),setTimeout(()=>R.remove(),300)}),v=i.ownerDocument.createElement("div"),v.className="toast";let G=i.ownerDocument.createElement("div");if(G.className="toast__content",G.textContent=I,v.appendChild(G),A){let R=i.ownerDocument.createElement("button");R.className="toast__close-btn",R.innerHTML="&times;",R.addEventListener("click",()=>Cn(v)),v.appendChild(R)}y.appendChild(v),c>0&&(v.autoRemoveTimer=setTimeout(()=>Cn(v),c))})(e,l.detail.message,l.detail.config)}),vn.set(l=>{if(l instanceof KeyboardEvent&&!Rt.get()){let i=l.key.toLowerCase();i!=="w"&&i!=="arrowup"&&i!==" "||(or(e),Rt.set(!0))}}),e.addEventListener("keydown",vn.get()),e.addEventListener("keydown",async l=>{let i=l.key.toLowerCase();e.host.keys[i]=!0,i==="enter"&&l.target instanceof HTMLInputElement&&l.target.getAttribute("id")==="worldSeedInput"&&t(),i==="escape"&&e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden"),i==="s"&&l.ctrlKey&&(l.preventDefault(),e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")),!(i>="0"&&i<="9"||i==="backspace"||i==="delete"||i==="escape")&&(i==="r"&&l.ctrlKey&&(l.preventDefault(),n()),i==="g"&&l.ctrlKey&&(l.preventDefault(),t()),i==="e"&&(l.preventDefault(),tr()),i==="x"&&(l.preventDefault(),await Mn(e)),i==="f"&&$o(e,V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),i==="r"&&qo(e,V.growthTimers,V.plantStructures,V.player,x.TILES,x.TILE_SIZE.get(),V.world,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),V.waterPhysicsQueue,x.breakMode.get()),["u","i","o","j","k","l","m",",","."].includes(i)&&await Rn(e,i,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),l.preventDefault())}),e.getElementById("toggleFog").addEventListener("click",function(){e.getElementById("fogModeText").textContent!=="Clear"?x.fogMode.set("clear"):x.fogMode.set("fog")});function t(){let l=null,i=e.getElementById("worldSeedInput");i instanceof HTMLInputElement&&(l=i.value);let I=e.getElementById("currentSeed"),r=x.WORLD_HEIGHT.get(),c=x.WORLD_WIDTH.get(),A=Mt(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,r,c,x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,Number(l));V.world.set(A);let C=Ue(a,e),h=Wn(x.isFogScaled,r,c,C);V.exploredMap.set(h),console.log(`Generated new world with seed: ${l}`),I.textContent=l}function n(){let l=e.getElementById("currentSeed"),i=e.getElementById("worldSeedInput"),I=Ve(),r=x.WORLD_HEIGHT.get(),c=x.WORLD_WIDTH.get(),A=Mt(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,r,c,x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,I);V.world.set(A);let C=Ue(a,e),h=Wn(x.isFogScaled,r,c,C);V.exploredMap.set(h),console.log(`Generated new world with random seed: ${I}`),i instanceof HTMLInputElement&&(i.value=String(I)),l.textContent=String(I)}e.getElementById("worldState").addEventListener("click",function(){e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")}),e.getElementById("generateWithSeed").addEventListener("click",t),e.getElementById("randomSeed").addEventListener("click",n),e.getElementById("copySeed").addEventListener("click",async function(){let l=e.getElementById("worldSeedInput");l instanceof HTMLInputElement&&await(async function(i,I){let r=i.navigator;if(r.clipboard&&i.isSecureContext)try{await r.clipboard.writeText(I)}catch{}})(a,l.value)});let g=e.getElementById("saveModeToggle");Et().then(async l=>{let i=l==="auto"?"auto":"manual";if(console.log("Save Mode:",i),i==="auto")return g.innerText="Save Mode Auto",void(g.style.backgroundColor="var(--sg-color-green-500)");g.innerText="Save Mode Manual",g.style.backgroundColor="var(--sg-color-red-500)"}),g.addEventListener("click",async function(){let l=await Et()==="auto"?"auto":"manual";if(l==="manual")return g.innerText="Save Mode Auto",g.style.backgroundColor="var(--sg-color-green-500)",await bo("auto"),void await Hn(a);l==="auto"&&(g.innerText="Save Mode Manual",g.style.backgroundColor="var(--sg-color-red-500)",await bo("manual"))}),e.getElementById("saveExternalGameFile").addEventListener("click",async function(){try{let l=Nt(a),i=JSON.stringify(l);await Hr(a,i),console.log("Game state saved successfully")}catch(l){console.error("Failed to save game state:",l),alert("Failed to save game state. Check console for details.")}}),e.getElementById("loadExternalGameFile").addEventListener("click",async function(){try{let l=e.getElementById("currentSeed"),i=e.getElementById("worldSeedInput"),I;if(a.showOpenFilePicker){let[C]=await a.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/*":[".sgs"],"text/plain":[".sgs.json.txt"]}}]});I=await C.getFile()}else{let C=a.document.createElement("input");C.type="file",C.accept=".sgs,.sgs.json.txt",C.style.display="none",e.append(C);let h=new Promise(p=>{C.onchange=()=>p(C.files[0])});C.click(),I=await h,e.removeChild(C)}let r="{}";if(I.name.endsWith(".sgs.json.txt"))r=(await I.text()).replace(/\s+/g,"");else{if(!("DecompressionStream"in a))throw new Error("No JSON detect and DecompressionStream not supported");{let C=I.stream().pipeThrough(new a.DecompressionStream("gzip"));r=await(await new a.Response(C).blob()).text()}}let c=JSON.parse(r);nt(a,e,c);let{worldSeed:A}=c.config;i instanceof HTMLInputElement&&(i.value=A),l.textContent=A,console.log("Game state loaded successfully")}catch(l){console.error("Failed to load game state:",l),alert("Failed to load game state. Check console for details.")}});let o=!1,s=e.getElementById("shareExternalGameFile");if(typeof navigator<"u"&&navigator.canShare!==void 0)try{o=navigator.canShare({files:[new File([],"test")]})}catch(l){console.info(`File sharing is not enabled. ${JSON.stringify(l)}`)}o&&(e.querySelectorAll(".seed-controls--share").forEach(l=>l.removeAttribute("hidden")),s.addEventListener("click",async function(){try{let l,i;if(a.showOpenFilePicker){let[r]=await a.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/*":[".sgs"],"text/plain":[".sgs.json.txt"]}}]});l=await r.getFile()}else{let r=a.document.createElement("input");r.type="file",r.accept=".sgs,.sgs.json.txt",r.style.display="none",e.append(r);let c=new Promise(A=>{r.onchange=()=>A(r.files[0])});r.click(),l=await c,e.removeChild(r)}if(l.name.endsWith(".sgs.json.txt"))i=(await l.text()).replace(/\s+/g,"");else{if(!("DecompressionStream"in a))throw new Error("Unable to read game state file.");{let r=l.stream().pipeThrough(new a.DecompressionStream("gzip"));i=await(await new a.Response(r).blob()).text()}}let I;try{I=JSON.parse(i)}catch{throw new Error("Invalid game state file: not valid JSON.")}if(!I.config||!I.state)throw new Error("Invalid game state file: missing required config or state.");l=new File([i],`${l.name}.json.txt`,{type:"text/plain",lastModified:Date.now()}),typeof navigator<"u"&&navigator.canShare!==void 0&&navigator.canShare({files:[l]})?(await navigator.share({files:[l],title:"Sprite Garden Game Save",text:`Visit Sprite Garden, then 'Load' and checkout my world: ${l.name}

`,url:"https://kherrick.github.io/sprite-garden"}),console.log("Game state file shared successfully")):alert("Web Share API is not available on this device or browser.")}catch(l){l.name!=="AbortError"?(console.error("Failed to share game state file:",l),alert("Failed to share game state file. Check console for details.")):console.log("Game state file sharing was cancelled by the user")}}));let d=e.getElementById("openStorageBtn");d&&d.addEventListener("click",async function(){try{await(async function(l,i,I){let r=new fn(l,i,I);return await r.createDialog(),r.show(),r})(a,a.document,e)}catch(l){console.error("Failed to open storage dialog:",l),alert("Failed to open storage dialog. Check console for details.")}}),e.querySelectorAll(".ui-grid__corner").forEach(l=>{l.querySelector(".ui-grid__corner--heading").addEventListener("click",i=>(function(I){I.preventDefault(),I.stopPropagation();let r=I.currentTarget;if(r instanceof HTMLDivElement){let c=r.nextElementSibling;if(c.getAttribute("hidden")!==null)return void c.removeAttribute("hidden");c.setAttribute("hidden","hidden")}})(i))})}function Si(a,e){e.getElementById("controls").addEventListener("click",s=>{s.stopPropagation(),s.preventDefault(),e.querySelector(".touch-controls").toggleAttribute("hidden")});let t=e.getElementById("resolutionSelect");t&&t.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(x.currentResolution.set(s.currentTarget.value),et(e,x))});let n=e.getElementById("toggleView");n&&n.addEventListener("click",()=>V.viewMode.set(V.viewMode.get()==="normal"?"xray":"normal"));let g=e.getElementById("toggleBreakMode");g&&g.addEventListener("click",()=>tr()),e.querySelectorAll(".seed-btn").forEach(s=>{s.addEventListener("click",d=>(function(l,i,I){if(!(I.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[r]=Object.keys(I.currentTarget.dataset);for(let h of I.currentTarget.parentElement.children)h.classList.remove("selected");I.currentTarget.classList.toggle("selected"),console.log(`Selecting seed: ${r}`);let c=i.selectedSeedType.get();console.log(`Current selected seed: ${c}`);let A=c===r.toUpperCase()?null:r.toUpperCase();i.selectedSeedType.set(A);let C=`New selected seed: ${be(A)}`;console.log(C),l.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:C}}))})(e,V,d))}),e.querySelectorAll(".material-btn").forEach(s=>{s.addEventListener("click",d=>(function(l,i,I){if(!(I.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[r]=Object.keys(I.currentTarget.dataset);for(let h of I.currentTarget.parentElement.children)h.classList.remove("selected");I.currentTarget.classList.toggle("selected"),console.log(`Selecting material: ${r}`);let c=i.selectedMaterialType.get();console.log(`Current selected material: ${c}`);let A=c===r.toUpperCase()?null:r.toUpperCase();i.selectedMaterialType.set(A);let C=`New selected material: ${be(A)}`;console.log(C),l.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:C}}))})(e,V,d))});let o=e.getElementById("resolutionSelect");o instanceof HTMLSelectElement&&(o.value="400")}function wi(a){let e=a.host;a.querySelectorAll(".touch-btn").forEach(t=>{let n=t.getAttribute("data-key"),g=!1,o=null;function s(){e.touchKeys[n]=!0,t instanceof HTMLButtonElement&&(t.style.background="var(--sg-color-gray-alpha-30)"),Rt.get()||n!=="r"&&n!=="w"&&n!=="upright"&&n!="upleft"||or(a),n==="f"&&$o(a,V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),n==="r"&&qo(a,V.growthTimers,V.plantStructures,V.player,x.TILES,x.TILE_SIZE.get(),V.world,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),V.waterPhysicsQueue,x.breakMode.get())}function d(){g||(g=!0,s(),n!=="f"&&n!=="r"||(o=setInterval(s,100)))}function l(){g=!1,e.touchKeys[n]=!1,t instanceof HTMLButtonElement&&(t.style.background="var(--sg-ui-touch-btn-background-color)"),o&&(clearInterval(o),o=null)}t.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),d()}),t.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),l()}),t.addEventListener("touchcancel",i=>{i.preventDefault(),i.stopPropagation(),l()}),t.addEventListener("mousedown",i=>{i.preventDefault(),i.stopPropagation(),d()}),t.addEventListener("mouseup",i=>{i.preventDefault(),i.stopPropagation(),l()}),t.addEventListener("mouseleave",i=>{i.preventDefault(),i.stopPropagation(),l()})}),a.querySelectorAll(".touch-btn.place-block").forEach(t=>{t.addEventListener("touchstart",async()=>await Rn(a,t.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get())),t.addEventListener("click",async()=>await Rn(a,t.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()))}),a.addEventListener("keyup",t=>{e.keys[t.key.toLowerCase()]=!1,t.preventDefault()}),a.addEventListener("touchstart",t=>{(t.target instanceof HTMLDivElement&&t.target.closest(".touch-controls")||t.target===a.getElementById("canvas"))&&t.preventDefault()},{passive:!1}),a.addEventListener("touchmove",t=>{(t.target instanceof HTMLDivElement&&t.target.closest(".touch-controls")||t.target===a.getElementById("canvas"))&&t.preventDefault()},{passive:!1}),a.addEventListener("touchend",t=>{(t.target instanceof HTMLDivElement&&t.target.closest(".touch-controls")||t.target===a.getElementById("canvas"))&&t.preventDefault()},{passive:!1}),a.addEventListener("contextmenu",t=>{(t.target instanceof HTMLDivElement&&t.target.closest(".touch-controls")||t.target===a.getElementById("canvas"))&&t.preventDefault()}),a.addEventListener("dblclick",t=>{(t.target instanceof HTMLDivElement&&t.target.closest(".touch-controls")||t.target===a.getElementById("canvas"))&&t.preventDefault()})}function An(a,e,t,n,g,o,s,d,l){let i=(function(A,C,h){let p,y;if(A instanceof MouseEvent)p=A.clientX,y=A.clientY;else{if(!(A.touches&&A.touches.length>0))return;p=A.touches[0].clientX,y=A.touches[0].clientY}if(p===void 0||y===void 0||!isFinite(p)||!isFinite(y)||!isFinite(h)||h<=0)return;let v=C.getBoundingClientRect(),G=C.width/v.width*h,R=C.height/v.height*h;return isFinite(G)&&isFinite(R)?{x:(p-v.left)*G,y:(y-v.top)*R}:void 0})(a,e,n),I=t.get(),r=Math.floor((i.x+I.x)/o),c=Math.floor((i.y+I.y)/o);if(r>=0&&r<l&&c>=0&&c<d){let A=s.getTile?s.getTile(r,c):null;if(!A||A===g.AIR)return void(e.title=`Tile: AIR (${r}, ${c})`);let C=Object.keys(g).find(h=>g[h]===A)||"Custom";e.title=`Tile: ${C} (${r}, ${c})`}}function Ri(){z.isDragging=!1,z.lastPaintedTile=null}function Li(a,e,t,n,g,o,s,d){a.addEventListener("mousedown",l=>(function(i,I,r,c,A,C,h){if(!(i.target instanceof HTMLCanvasElement))return;let p=i.target.getBoundingClientRect(),y=i.clientX-p.left,v=i.clientY-p.top;return Zo(y,v,I,r,c,A,C,h)?(vt(y,v,I,r,c,A,C,h,!0),void i.preventDefault()):void 0})(l,e,n,g,o,s,d)),a.addEventListener("mousemove",l=>(function(i,I,r,c,A,C,h,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target,v=y.getBoundingClientRect(),G=i.clientX-v.left,R=i.clientY-v.top;i.buttons===1&&z.isEnabled&&vt(G,R,I,c,A,C,h,p,!1)?i.preventDefault():An(i,y,I,r,c,A,p.get(),C,h)})(l,e,t,n,g,o,s,d)),a.addEventListener("mouseup",()=>Ri()),a.addEventListener("touchmove",l=>(function(i,I,r,c,A,C,h,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let v=y.getBoundingClientRect(),G=i.touches[0];if(vt(G.clientX-v.left,G.clientY-v.top,I,c,A,C,h,p,!1))return void i.preventDefault()}An(i,y,I,r,c,A,p.get(),C,h)})(l,e,t,n,g,o,s,d)),a.addEventListener("touchstart",l=>(function(i,I,r,c,A,C,h,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let v=y.getBoundingClientRect(),G=i.touches[0],R=G.clientX-v.left,w=G.clientY-v.top;if(Zo(R,w,I,c,A,C,h,p))return vt(R,w,I,c,A,C,h,p,!0),void i.preventDefault()}An(i,y,I,r,c,A,p.get(),C,h)})(l,e,t,n,g,o,s,d))}function Ei(a,e,t,n,g,o){let s=Math.floor(e.get().x/n);if(s>=0&&s<g){let d=Po(s,t,o.get());a.textContent=d.name}}function Ti(a,e,t,n,g){switch(n=Math.max(0,Math.min(1,n)),t){case"WHEAT":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.WHEAT_GROWING}),i;let I=Math.max(1,Math.ceil(4*d));for(let r=0;r<I;r++){let c=s-r;r<I-1||d<.8?i.push({x:o,y:c,tile:l.WHEAT_STALK}):i.push({x:o,y:c,tile:l.WHEAT_GRAIN}),d>.5&&r>0&&r<I-1&&(Math.random()<.4&&i.push({x:o-1,y:c,tile:l.WHEAT_STALK}),Math.random()<.4&&i.push({x:o+1,y:c,tile:l.WHEAT_STALK}))}if(d>.9){let r=s-I+1;i.push({x:o-1,y:r,tile:l.WHEAT_GRAIN}),i.push({x:o+1,y:r,tile:l.WHEAT_GRAIN})}return i})(a,e,n,g);case"CARROT":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.CARROT_GROWING}),i;if(d>.2){let r=Math.ceil(2*d);for(let c=1;c<=r;c++)i.push({x:o,y:s+c,tile:l.CARROT_ROOT})}let I=Math.max(1,Math.ceil(2*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.CARROT_LEAVES}),d>.5&&r===I-1&&(i.push({x:o-1,y:s-r,tile:l.CARROT_LEAVES}),i.push({x:o+1,y:s-r,tile:l.CARROT_LEAVES}));return i})(a,e,n,g);case"MUSHROOM":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.MUSHROOM_GROWING}),i;let I=Math.max(1,Math.ceil(3*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.MUSHROOM_STEM});if(d>.4){let r=s-I;i.push({x:o,y:r,tile:l.MUSHROOM_CAP}),d>.6&&(i.push({x:o-1,y:r,tile:l.MUSHROOM_CAP}),i.push({x:o+1,y:r,tile:l.MUSHROOM_CAP})),d>.8&&(i.push({x:o-1,y:r-1,tile:l.MUSHROOM_CAP}),i.push({x:o,y:r-1,tile:l.MUSHROOM_CAP}),i.push({x:o+1,y:r-1,tile:l.MUSHROOM_CAP}))}return i})(a,e,n,g);case"CACTUS":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.CACTUS_GROWING}),i;let I=Math.max(1,Math.ceil(5*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.CACTUS_BODY});if(d>.4&&I>2){let r=s-Math.floor(.6*I);i.push({x:o-1,y:r,tile:l.CACTUS_BODY}),d>.6&&i.push({x:o-1,y:r-1,tile:l.CACTUS_BODY})}if(d>.5&&I>3){let r=s-Math.floor(.7*I);i.push({x:o+1,y:r,tile:l.CACTUS_BODY}),d>.7&&i.push({x:o+1,y:r-1,tile:l.CACTUS_BODY})}if(d>.95){let r=s-I;i.push({x:o,y:r,tile:l.CACTUS_FLOWER})}return i})(a,e,n,g);case"WALNUT":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.TREE_GROWING}),i;let I=Ve(3,5),r=Math.max(1,Math.ceil(I*d));for(let c=0;c<r;c++){let A=s-c;i.push({x:o,y:A,tile:l.TREE_TRUNK})}if(d>.3){let c=s-r,A=Math.min(3,Math.ceil(5*(d-.3)));for(let C=-A;C<=A;C++)for(let h=-A;h<=1;h++){let p=o+C,y=c+h;Math.sqrt(C*C+h*h)<=A&&h<=0&&(i.find(v=>v.x===p&&v.y===y&&v.tile===l.TREE_TRUNK)||i.push({x:p,y,tile:l.TREE_LEAVES}))}}return i})(a,e,n,g);case"BERRY_BUSH":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.BERRY_BUSH_GROWING}),i;let I=Math.max(1,Math.ceil(3*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.BERRY_BUSH_BRANCH});if(d>.3){let r=s-I,c=Math.min(2,Math.ceil(3*(d-.3)));for(let A=-c;A<=c;A++)for(let C=0;C<=c;C++){let h=o+A,p=r+C,y=Math.abs(A)+Math.abs(C);y<=c&&y>0&&i.push({x:h,y:p,tile:l.BERRY_BUSH_LEAVES})}}if(d>.8){let r=s-I;Math.random()<.6&&i.push({x:o-1,y:r+1,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o+1,y:r+1,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o-1,y:r,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o+1,y:r,tile:l.BERRY_BUSH_BERRIES})}return i})(a,e,n,g);case"BAMBOO":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.BAMBOO_GROWING}),i;let I=Math.max(1,Math.ceil(7*d));for(let r=0;r<I;r++)r%2==0?i.push({x:o,y:s-r,tile:l.BAMBOO_JOINT}):i.push({x:o,y:s-r,tile:l.BAMBOO_STALK});if(d>.5){let r=s-I;i.push({x:o-1,y:r,tile:l.BAMBOO_LEAVES}),i.push({x:o+1,y:r,tile:l.BAMBOO_LEAVES}),d>.7&&(i.push({x:o-1,y:r+1,tile:l.BAMBOO_LEAVES}),i.push({x:o+1,y:r+1,tile:l.BAMBOO_LEAVES}))}return i})(a,e,n,g);case"SUNFLOWER":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.SUNFLOWER_GROWING}),i;let I=Math.max(1,Math.ceil(5*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.SUNFLOWER_STEM});if(d>.3)for(let c=2;c<I;c+=2)c%2==0?i.push({x:o-1,y:s-c,tile:l.SUNFLOWER_LEAVES}):i.push({x:o+1,y:s-c,tile:l.SUNFLOWER_LEAVES});if(d>.7){let r=s-I;i.push({x:o,y:r,tile:l.SUNFLOWER_CENTER}),d>.85&&(i.push({x:o-1,y:r,tile:l.SUNFLOWER_PETALS}),i.push({x:o+1,y:r,tile:l.SUNFLOWER_PETALS}),i.push({x:o,y:r-1,tile:l.SUNFLOWER_PETALS}),i.push({x:o,y:r+1,tile:l.SUNFLOWER_PETALS}))}return i})(a,e,n,g);case"CORN":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.CORN_GROWING}),i;let I=Math.max(1,Math.ceil(4*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.CORN_STALK});if(d>.4)for(let r=1;r<I;r++)r%2==1?i.push({x:o-1,y:s-r,tile:l.CORN_LEAVES}):i.push({x:o+1,y:s-r,tile:l.CORN_LEAVES});if(d>.7){let r=s-Math.floor(.6*I);i.push({x:o+1,y:r,tile:l.CORN_EAR}),d>.85&&i.push({x:o+1,y:r-1,tile:l.CORN_SILK})}return i})(a,e,n,g);case"PINE_TREE":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.PINE_TREE_GROWING}),i;let I=Math.max(1,Math.ceil(8*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.PINE_TRUNK});if(d>.25){let r=s-Math.floor(.3*I),c=Math.ceil(.7*I);for(let A=0;A<c;A++){let C=r-A,h=Math.max(1,Math.floor((c-A)/2));for(let p=-h;p<=h;p++)p===0&&A===0||i.push({x:o+p,y:C,tile:l.PINE_NEEDLES})}}if(d>.9){let r=s-Math.floor(.5*I);Math.random()<.5&&i.push({x:o-1,y:r,tile:l.PINE_CONE}),Math.random()<.5&&i.push({x:o+1,y:r,tile:l.PINE_CONE})}return i})(a,e,n,g);case"WILLOW_TREE":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.WILLOW_TREE_GROWING}),i;let I=Math.max(1,Math.ceil(6*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.WILLOW_TRUNK});if(d>.3){let r=s-I,c=Math.ceil(4*d);for(let A=0;A<c;A++)i.push({x:o-1-Math.floor(A/2),y:r+A,tile:l.WILLOW_BRANCHES}),d>.6&&A>0&&i.push({x:o-1-Math.floor(A/2),y:r+A,tile:l.WILLOW_LEAVES});for(let A=0;A<c;A++)i.push({x:o+1+Math.floor(A/2),y:r+A,tile:l.WILLOW_BRANCHES}),d>.6&&A>0&&i.push({x:o+1+Math.floor(A/2),y:r+A,tile:l.WILLOW_LEAVES})}if(d>.8){let r=s-I;i.push({x:o-2,y:r+2,tile:l.WILLOW_LEAVES}),i.push({x:o+2,y:r+2,tile:l.WILLOW_LEAVES}),i.push({x:o-3,y:r+3,tile:l.WILLOW_LEAVES}),i.push({x:o+3,y:r+3,tile:l.WILLOW_LEAVES})}return i})(a,e,n,g);case"FERN":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.FERN_GROWING}),i;let I=Math.max(1,Math.ceil(3*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.FERN_STEM});if(d>.3){let r=Math.ceil(2*d);for(let c=0;c<I;c++){let A=Math.min(r,c+1);for(let C=-A;C<=A;C++)C!==0&&i.push({x:o+C,y:s-c,tile:l.FERN_FROND})}}return i})(a,e,n,g);case"TULIP":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.TULIP_GROWING}),i;d>.15&&i.push({x:o,y:s+1,tile:l.TULIP_BULB});let I=Math.max(1,Math.ceil(3*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.TULIP_STEM});if(d>.3){let r=s-Math.floor(.5*I);i.push({x:o-1,y:r,tile:l.TULIP_LEAVES}),i.push({x:o+1,y:r,tile:l.TULIP_LEAVES})}if(d>.7){let r=s-I;i.push({x:o,y:r,tile:l.TULIP_PETALS}),d>.85&&(i.push({x:o-1,y:r,tile:l.TULIP_PETALS}),i.push({x:o+1,y:r,tile:l.TULIP_PETALS}),i.push({x:o,y:r-1,tile:l.TULIP_PETALS}))}return i})(a,e,n,g);case"AGAVE":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.AGAVE_GROWING}),i;if(i.push({x:o,y:s,tile:l.AGAVE_BASE}),d>.2){let I=Math.min(3,Math.ceil(4*(d-.2)));for(let r=-I;r<=I;r++)for(let c=-1;c<=1;c++){if(r===0&&c===0)continue;let A=Math.abs(r)+Math.abs(c);A<=I&&A>0&&i.push({x:o+r,y:s+c,tile:l.AGAVE_SPIKE})}}if(d>.8){let I=Math.ceil(30*(d-.8));for(let r=1;r<=I;r++)i.push({x:o,y:s-r,tile:l.AGAVE_FLOWER_STALK});if(d>.95){let r=s-I;i.push({x:o,y:r,tile:l.AGAVE_FLOWER}),i.push({x:o-1,y:r,tile:l.AGAVE_FLOWER}),i.push({x:o+1,y:r,tile:l.AGAVE_FLOWER})}}return i})(a,e,n,g);case"LAVENDER":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.LAVENDER_GROWING}),i;let I=Math.max(1,Math.ceil(2*d));if(d>.2&&(i.push({x:o,y:s,tile:l.LAVENDER_BUSH}),d>.4&&(i.push({x:o-1,y:s,tile:l.LAVENDER_BUSH}),i.push({x:o+1,y:s,tile:l.LAVENDER_BUSH}))),d>.5)for(let r=1;r<=I;r++)i.push({x:o,y:s-r,tile:l.LAVENDER_STEM}),d>.7&&r===I&&(i.push({x:o-1,y:s-r,tile:l.LAVENDER_STEM}),i.push({x:o+1,y:s-r,tile:l.LAVENDER_STEM}));if(d>.75){let r=s-I;i.push({x:o,y:r,tile:l.LAVENDER_FLOWERS}),d>.85&&(i.push({x:o-1,y:r,tile:l.LAVENDER_FLOWERS}),i.push({x:o+1,y:r,tile:l.LAVENDER_FLOWERS}))}return i})(a,e,n,g);case"KELP":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.KELP_GROWING}),i;let I=Math.max(1,Math.ceil(6*d));for(let r=0;r<I;r++){let c=Math.floor(1.5*Math.sin(.5*r));i.push({x:o+c,y:s-r,tile:l.KELP_BLADE}),d>.5&&r%2==1&&r<I-1&&i.push({x:o+c,y:s-r,tile:l.KELP_BULB})}return i})(a,e,n,g);case"ROSE":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.ROSE_GROWING}),i;let I=Math.max(1,Math.ceil(4*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.ROSE_STEM}),d>.3&&r>0&&r<I-1&&(r%2==0?i.push({x:o-1,y:s-r,tile:l.ROSE_THORNS}):i.push({x:o+1,y:s-r,tile:l.ROSE_THORNS}));if(d>.4)for(let r=1;r<I;r+=2)i.push({x:o-1,y:s-r,tile:l.ROSE_LEAVES}),i.push({x:o+1,y:s-r,tile:l.ROSE_LEAVES});if(d>.6){let r=s-I;i.push({x:o,y:r,tile:l.ROSE_BUD})}if(d>.85){let r=s-I;i.push({x:o,y:r,tile:l.ROSE_BLOOM}),i.push({x:o-1,y:r,tile:l.ROSE_BLOOM}),i.push({x:o+1,y:r,tile:l.ROSE_BLOOM}),i.push({x:o,y:r-1,tile:l.ROSE_BLOOM})}return i})(a,e,n,g);case"PUMPKIN":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.PUMPKIN_GROWING}),i;if(d>.2){let I=Math.ceil(3*d);for(let r=0;r<I;r++)i.push({x:o+r,y:s,tile:l.PUMPKIN_VINE}),i.push({x:o-r,y:s,tile:l.PUMPKIN_VINE})}if(d>.4){let r=Math.ceil(3*d);for(let c=2;c<r;c+=2)i.push({x:o+c,y:s-1,tile:l.PUMPKIN_LEAVES}),i.push({x:o-c,y:s-1,tile:l.PUMPKIN_LEAVES})}if(d>.6){let I=Math.ceil(5*(d-.6));i.push({x:o,y:s,tile:l.PUMPKIN_FRUIT}),I>1&&(i.push({x:o+1,y:s,tile:l.PUMPKIN_FRUIT}),i.push({x:o-1,y:s,tile:l.PUMPKIN_FRUIT})),I>2&&(i.push({x:o+1,y:s+1,tile:l.PUMPKIN_FRUIT}),i.push({x:o-1,y:s+1,tile:l.PUMPKIN_FRUIT}))}return d>.9&&i.push({x:o,y:s-1,tile:l.PUMPKIN_STEM}),i})(a,e,n,g);case"LOTUS":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.LOTUS_GROWING}),i;if(d>.2){let I=Math.ceil(2*d);for(let r=1;r<=I;r++)i.push({x:o,y:s+r,tile:l.LOTUS_STEM})}if(d>.4&&(i.push({x:o,y:s,tile:l.LOTUS_PAD}),d>.6&&(i.push({x:o-1,y:s,tile:l.LOTUS_PAD}),i.push({x:o+1,y:s,tile:l.LOTUS_PAD}))),d>.7&&i.push({x:o,y:s-1,tile:l.LOTUS_BUD}),d>.85){let I=s-1;i.push({x:o,y:I,tile:l.LOTUS_FLOWER}),i.push({x:o-1,y:I,tile:l.LOTUS_FLOWER}),i.push({x:o+1,y:I,tile:l.LOTUS_FLOWER}),i.push({x:o,y:I-1,tile:l.LOTUS_FLOWER})}return i})(a,e,n,g);case"BIRCH":return(function(o,s,d,l){let i=[];if(d<.1)return i.push({x:o,y:s,tile:l.BIRCH_GROWING}),i;let I=Math.max(1,Math.ceil(7*d));for(let r=0;r<I;r++)i.push({x:o,y:s-r,tile:l.BIRCH_TRUNK}),d>.3&&r%2==1&&i.push({x:o,y:s-r,tile:l.BIRCH_BARK});if(d>.5){let r=s-Math.floor(.7*I);i.push({x:o-1,y:r,tile:l.BIRCH_BRANCHES}),i.push({x:o+1,y:r,tile:l.BIRCH_BRANCHES}),d>.7&&(i.push({x:o-2,y:r,tile:l.BIRCH_BRANCHES}),i.push({x:o+2,y:r,tile:l.BIRCH_BRANCHES}))}if(d>.6){let r=s-I,c=2;for(let A=-c;A<=c;A++)for(let C=-c;C<=1;C++)Math.abs(A)+Math.abs(C)<=c+1&&C<=0&&(A===0&&C>-I||i.push({x:o+A,y:r+C,tile:l.BIRCH_LEAVES}))}if(d>.9){let r=s-I;i.push({x:o-1,y:r+1,tile:l.BIRCH_CATKINS}),i.push({x:o+1,y:r+1,tile:l.BIRCH_CATKINS})}return i})(a,e,n,g);default:return[{x:a,y:e,tile:g.WHEAT_GROWING}]}}function Mi(a,e,t,n,g,o){let s=!1,d=!1,l=n.get(),i=D({},a.get()),I=D({},e.get());for(let[r,c]of Object.entries(i)){if(c.timeLeft-=1/60,I[r]){let A=I[r],C=Math.max(0,Math.min(1,1-c.timeLeft/t[c.seedType].growthTime));A.blocks&&(Array.isArray(A.blocks)?A.blocks:Object.values(A.blocks)).forEach(y=>{y.x>=0&&y.x<o&&y.y>=0&&y.y<g&&l.getTile(y.x,y.y)!==t.AIR&&l.setTile(y.x,y.y,t.AIR)});let[h,p]=r.split(",").map(Number);A.blocks=Ti(h,p,c.seedType,C,t),(Array.isArray(A.blocks)?A.blocks:Object.values(A.blocks)).forEach(y=>{y.x>=0&&y.x<o&&y.y>=0&&y.y<g&&l.setTile(y.x,y.y,y.tile)}),d=!0}c.timeLeft<=0&&(I[r]&&(I[r].mature=!0,I[r].seedType=c.seedType),delete i[r],s=!0)}s&&a.set(i),d&&e.set(I)}function Ni(a,e,t,n){let g=Math.floor(e.get().y/n),o="Surface";if(g>t){let s=g-t;o=s<15?"Shallow":s<30?"Deep":"Very Deep"}else g<t-5&&(o="Sky");a.textContent=o}function Eo(a,e,t,n,g,o,s,d){return[[s,d],[s+t,d],[s,d+a],[s+t,d+a],[s+t/2,d],[s+t/2,d+a],[s,d+a/2],[s+t,d+a/2]].some(l=>(function(i,I,r,c,A,C){if(!I||typeof I.getTile!="function")return console.error("isSolid: Invalid world object",{hasWorld:!!I,worldType:typeof I,hasGetTile:I?typeof I.getTile:"N/A",args:{tileSize:i,worldHeight:r,worldWidth:c,x:A,y:C},stack:new Error().stack}),!0;let h=Math.floor(A/i),p=Math.floor(C/i);if(h<0||h>=c||p<0||p>=r)return!0;let y=I.getTile(h,p);return y&&y.solid})(e,n,g,o,l[0],l[1]))}function Ce(a,e){let t=a.host;return!!(t&&typeof t=="object"&&"keys"in t&&"touchKeys"in t)&&(t.keys[e]||t.touchKeys[e])}function ki(a,e,t,n,g,o,s,d,l,i,I,r=1){let c=l.get(),A=d.get(),C=s.get();c.velocityY+=e,c.velocityY>t&&(c.velocityY=t);let h=0,p=0;if(Ce(I,"upleft")?(h=-1,p=-1,c.lastDirection=-1):Ce(I,"upright")?(h=1,p=-1,c.lastDirection=1):Ce(I,"downleft")?(h=-1,p=1,c.lastDirection=-1):Ce(I,"downright")?(h=1,p=1,c.lastDirection=1):(Ce(I,"a")||Ce(I,"arrowleft")?(h=-1,c.lastDirection=-1):(Ce(I,"d")||Ce(I,"arrowright"))&&(h=1,c.lastDirection=1),Ce(I,"s")&&(p=1)),h!==0){let w=h*c.speed*r;Math.abs(c.velocityX)<.5||Math.sign(c.velocityX)!==Math.sign(w)?c.velocityX=.3*w:c.velocityX=w}else c.velocityX*=a,c.lastDirection=0;(Ce(I,"w")||Ce(I,"arrowup")||Ce(I," ")||Ce(I,"upleft")||Ce(I,"upright"))&&c.onGround&&(c.velocityY=-c.jumpPower,c.onGround=!1),h!==0&&p!==0&&(c.velocityX*=.707);let y=c.x+c.velocityX;Eo(c.height,n,c.width,C,g,o,y,c.y)?c.velocityX=0:c.x=y;let v=c.y+c.velocityY;Eo(c.height,n,c.width,C,g,o,c.x,v)?(c.velocityY>0&&(c.onGround=!0),c.velocityY=0):(c.y=v,c.onGround=!1),c.x=Math.max(0,Math.min(c.x,o*n-c.width)),c.y=Math.max(0,Math.min(c.y,g*n-c.height));let G=c.x+c.width/2-i.width/2,R=c.y+c.height/2-i.height/2;A.x+=.1*(G-A.x),A.y+=.1*(R-A.y),A.x=Math.max(0,Math.min(A.x,o*n-i.width)),A.y=Math.max(0,Math.min(A.y,g*n-i.height))}var To=performance.now(),Wt=0,qe={player:{x:0,y:0},camera:{x:0,y:0}},mn=null,Mo=0;async function Bi(){let a=Date.now();return(a-Mo>1e3||mn===null)&&(mn=await Q.getItem("sprite-garden-movement-scale"),Mo=a),mn}async function xn(a,e,t,n,g,o,s,d,l,i,I,r,c,A,C,h,p,y,v,G,R,w,N,k,X,H,F,q,te,me,ae){if(q.get())return void q.set(!1);let ce=performance.now(),Re=Math.min(ce-To,250);To=ce,Wt+=Re;let fe=0;for(;Wt>=20&&fe<20;){let ne=F.get(),le=w.get();qe.player.x=ne.x,qe.player.y=ne.y,qe.camera.x=le.x,qe.camera.y=le.y,ki(I,r,A,h,v,G,ae,w,F,a,t,await Bi()),Mi(X,H,p,ae,v,G),Ko(p,y,me,ae,v,G),Ei(n,F,d,h,G,R),Ni(g,F,C,h),k.set(k.get()+.02),Wt-=20,fe++}(function(ne,le,rt,Ee,se,xt,Vt,Yt,Xt,Jt,it,Ut,Ot,he,Ye,de,Ht){let pe=le.get(),Te=rt.get(),Fe=Vt.get(),Me=Ot.get(),je=he.player.x+(pe.x-he.player.x)*Ye,at=he.player.y+(pe.y-he.player.y)*Ye,Ne=he.camera.x+(Te.x-he.camera.x)*Ye,ke=he.camera.y+(Te.y-he.camera.y)*Ye,oe=ne.getContext("2d");oe.fillStyle=de.air,oe.fillRect(0,0,ne.width,ne.height);let lt=Math.ceil(ne.width/se)+1,st=Math.ceil(ne.height/se)+1,gt=Math.floor(Ne/se),ct=Math.floor(ke/se);for(let ye=0;ye<lt;ye++)for(let Ge=0;Ge<st;Ge++){let We=gt+ye,_e=ct+Ge;if(We>=0&&We<Xt&&_e>=0&&_e<Yt){let ve=Fe.getTile(We,_e);if(!ve||ve===Ee.AIR)continue;let Pe=new O.Computed(()=>xt.get()==="xray"&&ve.solid&&ve!==Ee.COAL&&ve!==Ee.IRON&&ve!==Ee.GOLD&&ve!==Ee.LAVA).get()?"xray":Ht[ve.id];oe.fillStyle=de[Pe],oe.fillRect(Math.round(ye*se-Ne%se),Math.round(Ge*se-ke%se),se,se)}}let Be=je-Ne,xe=at-ke;if(oe.fillStyle=de["player-body"],oe.fillRect(Be,xe,pe.width,pe.height),oe.strokeStyle=de["player-border"],oe.lineWidth=1,oe.strokeRect(Be,xe,pe.width,pe.height),oe.fillStyle=de["player-eyes"],oe.fillRect(Be+1,xe+1,1,1),oe.fillRect(Be+4,xe+1,1,1),Jt.get()==="fog"){Me.updateFromPlayer(le,se);let ye={get:()=>({x:Ne,y:ke})};if(it.get())return void Me.renderScaled(oe,ne,se,ye,Ut.get());let{velocityX:Ge,velocityY:We}=pe;(Math.abs(Ge)>.1||Math.abs(We)>.1)&&it.set(!0),Me.render(oe,ne,se,ye)}})(a,F,w,p,h,te,ae,v,G,l,c,i,N,qe,Wt/20,s,o),requestAnimationFrame(async()=>await xn(a,e,t,n,g,o,s,d,l,i,I,r,c,A,C,h,p,y,v,G,R,w,N,k,X,H,F,q,te,me,ae))}function No(a={},e="--sg-",t="",n=g=>g){let g;for(let[o,s]of Object.entries(a)){if(g||(g={}),!o.startsWith(e))continue;let d=o.slice(e.length);d=d.slice(0,t.length>0?-t.length:void 0),g[n(d)]=s.trim().replace(/^['"]|['"]$/g,"")}return g}async function xi(a,e,t){if(e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!0,error:null},bubbles:!0,composed:!0})),!t){let y="HTML canvas is required to init Sprite Garden.";return console.error(y),void e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,error:y},bubbles:!0,composed:!0}))}e.addEventListener("focusout",y=>{t.focus()}),t.focus();let n={},g="1";try{n=await(await fetch("data:text/html;base64,ewogICJuYW1lIjogInNwcml0ZS1nYXJkZW4iLAogICJ2ZXJzaW9uIjogIjEuMzQuMSIsCiAgImRlc2NyaXB0aW9uIjogIlNwcml0ZSBHYXJkZW4gLSBHcm93IFNwcml0ZXMiLAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi8jc3ByaXRlLWdhcmRlbiIsCiAgImxpY2Vuc2UiOiAiQUdQTC0zLjAiLAogICJhdXRob3IiOiAiS2FybCBIZXJyaWNrIDxtZUBrYXJsaGVycmljay5jb20+IiwKICAidHlwZSI6ICJtb2R1bGUiLAogICJtYWluIjogImJpbi9zZXJ2ZS5tanMiLAogICJtb2R1bGUiOiAiaW5kZXgubWpzIiwKICAiZXhwb3J0cyI6IHsKICAgICIuIjogewogICAgICAiaW1wb3J0IjogIi4vc3ByaXRlLWdhcmRlbi1idW5kbGUtbWluLm1qcyIKICAgIH0KICB9LAogICJzY3JpcHRzIjogewogICAgImJ1aWxkOmJhc2U6YWJvdXQiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvYWJvdXQvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4OnVuYnVuZGxlZCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L2luZGV4Lmh0bWwgYmFzZSBocmVmIC9zcHJpdGUtZ2FyZGVuLyIsCiAgICAiYnVpbGQ6YmFzZTpwcml2YWN5IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L3ByaXZhY3kvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOnNoYXJlLXRhcmdldCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9zaGFyZS9zaGFyZS10YXJnZXQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpjaSI6ICJucHggY29uY3VycmVudGx5IC0ta2lsbC1vdGhlcnMgLS1zdWNjZXNzIGZpcnN0IFwibnBtIHJ1biBidWlsZCBzaW5nbGVcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImJ1aWxkOmRvY3MiOiAibnB4IHRzLXRvLWpzZG9jIC1wIC4vdHNjb25maWcuanNvbiIsCiAgICAiYnVpbGQ6Z2gtcGFnZXM6bm9qZWt5bGwiOiAibm9kZSBiaW4vdG91Y2gtbm9qZWt5bGwubWpzIiwKICAgICJidWlsZDpwa2c6Z2V0Om1ldGEiOiAiZ2l0IHJldi1wYXJzZSBIRUFEIiwKICAgICJidWlsZDpwa2c6bWV0YSI6ICJub2RlIC1lIFwiaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnOyBpbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJyB3aXRoIHsgdHlwZTogJ2pzb24nIH07IChhc3luYyAoKSA9PiB7IGNvbnN0IG1ldGEgPSBwcm9jZXNzLmFyZ3ZbMV07IHBrZ1snc3ByaXRlLWdhcmRlbiddID0geyBtZXRhIH07IGF3YWl0IGZzLndyaXRlRmlsZSgnZGlzdC9wYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShwa2csIG51bGwsIDIpKTsgfSkoKVwiIiwKICAgICJidWlsZDpzY3JpcHQ6aW5kZXgiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvaW5kZXguaHRtbCBzY3JpcHQgc3JjIHNwcml0ZS1nYXJkZW4tYnVuZGxlLW1pbi5tanMiLAogICAgImJ1aWxkOnNlcnZpY2Utd29ya2VyIjogImNkIGRpc3QgJiYgd29ya2JveCBnZW5lcmF0ZVNXIHNlcnZpY2Utd29ya2VyL3dvcmtib3gtY29uZmlnLmNqcyIsCiAgICAiYnVpbGQ6c2luZ2xlOmJ1bmRsZTpjbGVhbiI6ICJnaXQgY2hlY2tvdXQgSEVBRCAtLSBzcmMiLAogICAgImJ1aWxkOnNpbmdsZTpidW5kbGUiOiAiYmluL2Jhc2U2NC1lbmNvZGUtYnVuZGxlLXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDpzaW5nbGU6aW5kZXg6Y2xlYW4iOiAiZ2l0IGNoZWNrb3V0IEhFQUQgLS0gaW5kZXguaHRtbCIsCiAgICAiYnVpbGQ6c2luZ2xlOmluZGV4IjogImJpbi9iYXNlNjQtZW5jb2RlLWluZGV4LXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDp6aXAiOiAiZ2l0IGFyY2hpdmUgLS1mb3JtYXQgemlwIC0tb3V0cHV0IFwic3ByaXRlLWdhcmRlbi1idWlsZC0kKG5wbSBydW4gLXMgYnVpbGQ6cGtnOmdldDptZXRhKS56aXBcIiBIRUFEIiwKICAgICJidWlsZCI6ICJiYXNoIGJpbi9idWlsZC5zaCIsCiAgICAiYnVuZGxlIjogInJvbGx1cCAtYyIsCiAgICAiY2xlYW46c2VydmljZS13b3JrZXIiOiAibm9kZSBiaW4vcmltcmFmLm1qcyBkaXN0L3NlcnZpY2Utd29ya2VyLyouY2pzIiwKICAgICJjbGVhbiI6ICJub2RlIGJpbi9yaW1yYWYubWpzIGRpc3QiLAogICAgImNvcHk6NDA0IjogIm5vZGUgYmluL25jcC5tanMgNDA0Lmh0bWwgZGlzdC80MDQuaHRtbCIsCiAgICAiY29weTphYm91dCI6ICJub2RlIGJpbi9uY3AubWpzIGFib3V0L2luZGV4Lmh0bWwgZGlzdC9hYm91dC9pbmRleC5odG1sIiwKICAgICJjb3B5OmRlcHMiOiAibm9kZSBiaW4vbmNwLm1qcyBkZXBzIGRpc3QvZGVwcyIsCiAgICAiY29weTppbmRleDphc3NldHMiOiAibm9kZSBiaW4vbmNwLm1qcyBhc3NldHMgZGlzdC9hc3NldHMiLAogICAgImNvcHk6aW5kZXg6bGljZW5zZSI6ICJub2RlIGJpbi9uY3AubWpzIExJQ0VOU0UgZGlzdC9MSUNFTlNFIiwKICAgICJjb3B5OmluZGV4OmxsbXMiOiAibm9kZSBiaW4vbmNwLm1qcyBsbG1zLnR4dCBkaXN0L2xsbXMudHh0IiwKICAgICJjb3B5OmluZGV4Om1hbmlmZXN0IjogIm5vZGUgYmluL25jcC5tanMgbWFuaWZlc3QuanNvbiBkaXN0L21hbmlmZXN0Lmpzb24iLAogICAgImNvcHk6aW5kZXg6cmVhZG1lIjogIm5vZGUgYmluL25jcC5tanMgUkVBRE1FLm1kIGRpc3QvUkVBRE1FLm1kIiwKICAgICJjb3B5OmluZGV4OnJvYm90cyI6ICJub2RlIGJpbi9uY3AubWpzIHJvYm90cy50eHQgZGlzdC9yb2JvdHMudHh0IiwKICAgICJjb3B5OmluZGV4OnNpdGVtYXAiOiAibm9kZSBiaW4vbmNwLm1qcyBzaXRlbWFwLnR4dCBkaXN0L3NpdGVtYXAudHh0IiwKICAgICJjb3B5OmluZGV4OnVuYnVuZGxlZCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCIsCiAgICAiY29weTppbmRleCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleC5odG1sIiwKICAgICJjb3B5OnBrZyI6ICJub2RlIGJpbi9uY3AubWpzIHBhY2thZ2UuanNvbiBkaXN0L3BhY2thZ2UuanNvbiIsCiAgICAiY29weTpwcml2YWN5IjogIm5vZGUgYmluL25jcC5tanMgcHJpdmFjeS9pbmRleC5odG1sIGRpc3QvcHJpdmFjeS9pbmRleC5odG1sIiwKICAgICJjb3B5OnNlcnZpY2Utd29ya2VyIjogIm5vZGUgYmluL25jcC5tanMgc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIGRpc3Qvc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIiwKICAgICJjb3B5OnNoYXJlLXRhcmdldCI6ICJub2RlIGJpbi9uY3AubWpzIHNoYXJlIGRpc3Qvc2hhcmUiLAogICAgImNvcHk6c3JjOmluZGV4IjogIm5vZGUgYmluL25jcC5tanMgaW5kZXgubWpzIGRpc3QvaW5kZXgubWpzIiwKICAgICJjb3B5OnNyYyI6ICJub2RlIGJpbi9uY3AubWpzIHNyYyBkaXN0L3NyYyIsCiAgICAiZGVwbG95OmdoLXBhZ2VzIjogImdoLXBhZ2VzIC0tbm8taGlzdG9yeSAtLWRvdGZpbGVzIC0tZGlzdCBkaXN0IC0tcmVwbyBnaXRAZ2l0aHViLmNvbTpraGVycmljay9zcHJpdGUtZ2FyZGVuLmdpdCAtLXJlbW90ZSB1cHN0cmVhbSIsCiAgICAiZTJlIjogIm5weCBwbGF5d3JpZ2h0IGluc3RhbGwgJiYgbnB4IGNvbmN1cnJlbnRseSAtLWtpbGwtb3RoZXJzIC0tc3VjY2VzcyBmaXJzdCBcIm5weCBwbGF5d3JpZ2h0IHRlc3RcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImZvcm1hdCI6ICJwcmV0dGllciAqKi8qLntodG1sLGNzcyxqcyxtanN9IC0td3JpdGUiLAogICAgIm1pbmlmeTo0MDQiOiAicG9zdGh0bWwgZGlzdC80MDQuaHRtbCAtdSBodG1sbmFubyIsCiAgICAibWluaWZ5OmFib3V0IjogInBvc3RodG1sIGRpc3QvYWJvdXQvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6aW5kZXgiOiAicG9zdGh0bWwgZGlzdC9pbmRleC5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6cHJpdmFjeSI6ICJwb3N0aHRtbCBkaXN0L3ByaXZhY3kvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6c2hhcmUtdGFyZ2V0IjogInBvc3RodG1sIGRpc3Qvc2hhcmUvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJzdGFydDpkZXYiOiAibnBtIHN0YXJ0IDgwODAiLAogICAgInN0YXJ0IjogIm5vZGUgYmluL3NlcnZlLm1qcyIsCiAgICAidGVzdCI6ICJOT0RFX09QVElPTlM9LS1leHBlcmltZW50YWwtdm0tbW9kdWxlcyBqZXN0IgogIH0sCiAgImRldkRlcGVuZGVuY2llcyI6IHsKICAgICJAcGxheXdyaWdodC90ZXN0IjogIl4xLjU2LjEiLAogICAgIkByb2xsdXAvcGx1Z2luLWNvbW1vbmpzIjogIl4yOS4wLjAiLAogICAgIkByb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZSI6ICJeMTYuMC4zIiwKICAgICJAcm9sbHVwL3BsdWdpbi10ZXJzZXIiOiAiXjAuNC40IiwKICAgICJAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0IjogIl4xMi4zLjAiLAogICAgIkB4bWxkb20veG1sZG9tIjogIl4wLjguMTEiLAogICAgImNvbXByZXNzaW9uIjogIl4xLjguMSIsCiAgICAiY29uY3VycmVudGx5IjogIl45LjIuMSIsCiAgICAiY29ycyI6ICJeMi44LjUiLAogICAgImNzc25hbm8iOiAiXjcuMS4xIiwKICAgICJleHByZXNzIjogIl41LjEuMCIsCiAgICAiZXhwcmVzcy11cmxyZXdyaXRlIjogIl4yLjAuMyIsCiAgICAiZ2gtcGFnZXMiOiAiXjYuMy4wIiwKICAgICJodG1sbmFubyI6ICJeMi4xLjUiLAogICAgImplc3QiOiAiXjMwLjIuMCIsCiAgICAiamVzdC1lbnZpcm9ubWVudC1qc2RvbSI6ICJeMzAuMi4wIiwKICAgICJwb3N0Y3NzIjogIl44LjUuNiIsCiAgICAicG9zdGNzcy1jbGkiOiAiXjExLjAuMSIsCiAgICAicG9zdGh0bWwtY2xpIjogIl4wLjEwLjAiLAogICAgInByZXR0aWVyIjogIl4zLjYuMiIsCiAgICAicm9sbHVwIjogIl4yLjc5LjIiLAogICAgInRjcC1wb3J0LXVzZWQiOiAiXjEuMC4yIiwKICAgICJ0eXBlc2NyaXB0IjogIl41LjkuMyIsCiAgICAid29ya2JveC1jbGkiOiAiXjcuMy4wIgogIH0sCiAgImRlcGVuZGVuY2llcyI6IHsKICAgICJhbGVhIjogIl4xLjAuMSIsCiAgICAia29uYW1pLWNvZGUtanMiOiAiXjAuOC4zIiwKICAgICJsb2NhbGZvcmFnZSI6ICJeMS4xMC4wIiwKICAgICJzaWduYWwtcG9seWZpbGwiOiAiXjAuMi4yIiwKICAgICJzaW1wbGV4LW5vaXNlIjogIl40LjAuMyIsCiAgICAid29ya2JveC13aW5kb3ciOiAiXjcuNC4wIiwKICAgICJ6eGluZy13YXNtIjogIl4yLjIuNCIKICB9Cn0K")).json(),g=n.version}catch{console.log(`continuing with static version: ${g}`)}let{gameConfig:o,gameState:s}=await ni(a,g);a.document;let d=e.host;d.keys={},d.touchKeys={};let l=await(async function(y){try{let v=await Q.getItem(y);if(v&&typeof v=="object")return console.log("Loaded custom colors:",Object.keys(v).length,"properties"),v}catch(v){console.error("Failed to load saved colors:",v)}return null})(En),i=Ue(a,e),I=l??i;Ln(e,I),bi(e,o.fogMode,s.viewMode),Wi(a,e),Zi(a,e),Si(0,e),wi(e),ai(e,Ho.totalSeeds,o.breakMode,o.fogMode,o.worldSeed,s.gameTime,s.materialsInventory,s.seedInventory,s.selectedMaterialType,s.selectedSeedType,s.viewMode);let r=o.WORLD_HEIGHT.get(),c=o.WORLD_WIDTH.get(),A=await ri(a,e),C=!1;if(A||(C=await(async function(y,v){try{let G=await Q.getItem(Lt),R=await Q.getItem(On)==="auto";if(!G||!R)return!1;let w=y.document.createElement("dialog");w.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let N=new Date(G.timestamp).toLocaleString();return w.innerHTML=`
      <h3 style="margin: 0 0 1rem 0">Auto-Save Detected</h3>
      <p style="margin: 0 0 1rem 0">
        A saved game from ${N} was found. Would you like to load it?
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
    `,v.append(w),w.showModal(),new Promise(k=>{w.querySelector("#autoSaveYes").addEventListener("click",async()=>{try{let X=bn(y,G.data,"application/gzip"),H;if(!("DecompressionStream"in y))throw new Error("DecompressionStream not supported");{let ae=X.stream().pipeThrough(new y.DecompressionStream("gzip"));H=await(await new y.Response(ae).blob()).text()}let F=JSON.parse(H);nt(y,v,F);let{worldSeed:q}=F.config,te=v.getElementById("worldSeedInput"),me=v.getElementById("currentSeed");te instanceof HTMLInputElement&&(te.value=q),me&&(me.textContent=q),console.log("Auto-save loaded successfully")}catch(X){console.error("Failed to load auto-save:",X)}w.close(),w.remove(),k(!0)}),w.querySelector("#autoSaveNo").addEventListener("click",()=>{w.close(),w.remove(),k(!1)}),w.addEventListener("cancel",()=>{k(!1)})})}catch(G){return console.error("Failed to check for auto-save:",G),!1}})(a,e)),!A&&!C){let y=Mt(o.BIOMES,o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,r,c,o.worldSeed,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.seedInventory);s.world.set(y);let v=Wn(o.isFogScaled,r,c,I);s.exploredMap.set(v)}setInterval(async()=>{await Et()==="auto"&&await Hn(a)},6e4),Li(t,s.camera,o.canvasScale.get(),o.TILES,o.TILE_SIZE.get(),o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),s.world),et(e,o);let h=await Q.setItem("sprite-garden-version",g);console.log(`Sprite Garden version: ${h}`),e.addEventListener("sprite-garden-reset",async y=>{let v,G;y instanceof CustomEvent&&(v=y?.detail?.colors??{}),G=Object.keys(v).length&&v.constructor===Object?No(v,"--sg-tile-","-color"):No(i,"--sg-tile-","-color"),await xn(t,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),uo(o.TILES),G,o.BIOMES,o.fogMode,o.fogScale,o.FRICTION.get(),o.GRAVITY.get(),o.isFogScaled,o.MAX_FALL_SPEED.get(),o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,o.waterPhysics,o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),o.worldSeed,s.camera,s.exploredMap,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.shouldReset,s.viewMode,s.waterPhysicsQueue,s.world),s.shouldReset.set(!0)});let p=(function(y,v,G="",R=""){let w;for(let N of v){w||(w={});let k=N.slice(G.length);k=k.slice(0,R.length>0?-R.length:void 0),w[k]=y.getPropertyValue(N)}return w})(a.getComputedStyle(e.host),Object.keys(Xn).map(y=>`--sg-tile-${y}-color`),"--sg-tile-","-color");await xn(t,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),uo(o.TILES),p,o.BIOMES,o.fogMode,o.fogScale,o.FRICTION.get(),o.GRAVITY.get(),o.isFogScaled,o.MAX_FALL_SPEED.get(),o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,o.waterPhysics,o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),o.worldSeed,s.camera,s.exploredMap,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.shouldReset,s.viewMode,s.waterPhysicsQueue,s.world),setTimeout(()=>{Ao.get()||(Ao.set(!0),e.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:'\u{1F3AE} Use the on screen controls or keyboard to jump or dig! Press the spacebar, \u2191,  "W", or "R" to begin.',config:{duration:0,manualClose:!0,stack:!0,bottomOffset:2}}})))},500),e.getElementById("loading").setAttribute("hidden","hidden"),e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,pkg:n,error:null},bubbles:!0,composed:!0}))}var ko="sprite-garden",Vn=class extends HTMLElement{constructor(){if(super(),!this.shadowRoot){let e=globalThis.document.createElement("template");e.innerHTML=`
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

            ${cn("--sg-color-",xo)}
            ${cn("--sg-tile-",Xn)}
            ${cn("--sg-ui-",Vo)}
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

          #toastContainer {
            align-items: center;
            bottom: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            left: 50%;
            max-height: var(--sg-ui-toast-container-max-height);
            max-width: 90vw;
            max-width: 90dvw;
            overflow-y: var(--sg-ui-toast-container-overflow-y);
            pointer-events: none;
            position: fixed;
            transform: translateX(-50%);
            z-index: 9999;
          }

          .toast {
            align-items: flex-start;
            animation: toastSlideIn 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            backdrop-filter: blur(0.5rem);
            background: var(--sg-color-black-alpha-80);
            border-radius: 0.5rem;
            border: 0.125rem solid var(--sg-color-gray-alpha-30);
            box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
            color: var(--sg-color-white);
            display: flex;
            font-family: monospace;
            font-size: 0.875rem;
            gap: 0.75rem;
            justify-content: space-between;
            max-width: 25rem;
            min-width: 15rem;
            padding: 0.75rem 1rem;
            pointer-events: auto;
            position: relative;
            text-align: center;
          }

          .toast--fade-out {
            animation: toastFadeOut 0.2s ease-out forwards;
          }

          .toast--slide-out {
            animation: toastSlideOut 0.2s ease-out forwards;
          }

          .toast__content {
            flex: 1;
            line-height: 1.4;
          }

          .toast__close-btn {
            background: var(--sg-color-red-500);
            border-radius: 0.25rem;
            border: none;
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 1rem;
            height: 1.5rem;
            line-height: 1;
            padding: 0;
            transition: background 0.2s;
            width: 1.5rem;
          }

          .toast__close-btn:hover {
            background: var(--sg-color-red-500);
            opacity: 0.8;
          }

          .toast__close-btn:active {
            transform: scale(0.95);
          }

          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translateY(100%);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes toastFadeOut {
            from {
              opacity: 1;
            }

            to {
              opacity: 0;
            }
          }

          @keyframes toastSlideOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }

            to {
              opacity: 0;
              transform: translateY(100%);
            }
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

          .seed-controls__header {
            display: flex;
            gap: 0.625rem;
            justify-content: space-between;
            margin-bottom: 0.625rem;
          }

          .seed-controls h4, .seed-controls__header h4 {
            color: var(--sg-color-white);
            margin: 0 0 0.625rem 0;
          }

          .seed-controls__header button {
            background: var(--sg-color-red-500);
            border-radius: 0.25rem;
            border: none;
            color: white;
            cursor: pointer;
            margin: 0 0 0.625rem 0;
            padding: 0.3125rem 0.625rem;
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
            margin-bottom: 0.5rem;
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
          <div class="seed-controls__header">
            <h4>World Generation</h4>
            <button id="closeWorldGeneration">
              &times;
            </button>
          </div>
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

          <h4>Load / Save / Store</h4>

          <div class="seed-controls__save-load">
            <button id="loadExternalGameFile">\u{1F4BE} Load Game File From Disk</button>
            <button id="saveExternalGameFile">\u{1F5C3}\uFE0F Save Game File To Disk</button>
            <button id="openStorageBtn">\u{1F5C4}\uFE0F Open Game Storage</button>
          </div>

          <h4 class="seed-controls__header seed-controls--share" hidden>Share</h4>

          <div class="seed-controls__save-load seed-controls--share" hidden>
            <button id="shareExternalGameFile">\u{1F30D} Share External Game File</button>
          </div>

          <h4>Mode</h4>

          <div class="seed-controls__save-load">
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

        <div id="toastContainer"></div>
      `,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}}async connectedCallback(){let e=this.shadowRoot,t=e.querySelector("canvas");await xi(globalThis,e,t)}async disconnectedCallback(){await Hn(globalThis)}};globalThis.customElements?.get(ko)||globalThis.customElements?.define(ko,Vn);function rr(a,e,t,n){return`
    ${n}

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
        '${t.replaceAll("/",",").replaceAll(",","','")}'
      ],
      ${a}
    );
  `}function ir(a,e){let t=a;for(let n of e){if(!t)return;t=t[n]}return t}function Fn(a){return a.replaceAll("/",":")}var Vi=["spriteGarden"],Yi=["spriteGardenInfo"];function Xi(a,e){if(a&1){let t=zt();Ie(0,"sprite-garden",3,0),Qt("sprite-garden-load",function(g){It(t);let o=At();return ut(o.handleSpriteGardenEvents(g))}),ge()}}function Ji(a,e){if(a&1){let t=zt();Ie(0,"div",2,1)(2,"div",4)(3,"section")(4,"header")(5,"h1")(6,"a",5),ue(7,"Sprite Garden"),ge()()(),Ie(8,"section")(9,"img",6),Qt("click",function(g){It(t);let o=At();return ut(o.handleLoad(g))})("keydown",function(g){It(t);let o=At();return ut(o.handleLoad(g))}),ge(),Ie(10,"h2")(11,"a",5),ue(12,"Sprite Garden"),ge(),ue(13," is a 2D sandbox exploration and farming game. Learn more at the "),Ie(14,"a",7),ue(15,"project page"),ge(),ue(16,". "),ge(),Ie(17,"ul",8)(18,"li"),ue(19,"Procedural World Generation - Explore uniquely generated maps"),ge(),Ie(20,"li"),ue(21," Multiple Biomes - Forests, deserts, tundras, and swamps, with their own characteristics "),ge(),Ie(22,"li"),ue(23," Farming System - Plant and harvest different crop types with various growth cycles "),ge(),Ie(24,"li"),ue(25,"Resource gathering - Dig for items like coal, iron, and gold"),ge(),Ie(26,"li"),ue(27," Cave Systems - Discover underground caves filled with resources and challenges "),ge(),Ie(28,"li"),ue(29,"Building - Use collected materials to place blocks and shape the world"),ge(),Ie(30,"li"),ue(31," Clouds - Continue building and farming while in the sky"),Kt(32,"br")(33,"br")(34,"iframe",9),ge(),Ie(35,"li"),ue(36," Discover - Open source, extendable by nature, map editor, color customization, etc."),Kt(37,"br")(38,"br")(39,"iframe",10),ge()()()()()()}}var ar=class a{doc=ze(eo);isLoading=Ct(!1);injector=ze($n);resizeObserver;renderSpriteGarden=Ct(!1);themeService=ze(lo);platformId=ze(to);canvasEl=Ct(null);spriteGarden=en("spriteGarden");spriteGardenInfo=en("spriteGardenInfo");fogMapModuleCommit="e5f00a76af6af200ab9fcf9e190f05170cfc2e91";fogMapModuleCommitPath="src/map/fog.mjs";fogMapModuleClassName="FogMap";async ngOnInit(){if(ao(this.platformId)){let e=`https://raw.githubusercontent.com/kherrick/sprite-garden/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,t=Fn(e);if(globalThis.document.getElementById(t))return;let n=await(await fetch(e)).text(),g=globalThis.document.createElement("script");g.setAttribute("type","module"),g.setAttribute("id",t),g.textContent=rr(this.fogMapModuleClassName,this.fogMapModuleCommit,this.fogMapModuleCommitPath,n),globalThis.document.body.append(g)}}constructor(){qn(this.injector,()=>{$t(async()=>{let e=globalThis?.spriteGarden,t=this.themeService.theme(),n=e?.state,g=e?.config,o=g?.WORLD_WIDTH?.get(),s=g?.WORLD_HEIGHT?.get(),d;t==="dark"&&(d=$(D({},n?.exploredMap.get().colors),{"--sg-tile-fog-color":"#121212"})),t==="light"&&(d=$(D({},n?.exploredMap.get().colors),{"--sg-tile-fog-color":"#ffffff"}));let l=`spriteGarden/refs/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,i=Fn(l),r=ir(globalThis,i.split(":"))?.fromObject($(D({},n?.exploredMap.get()),{colors:d}),o,s,d);n?.exploredMap.set(r)}),$t(()=>{let e=this.canvasEl();e&&e.focus()})})}handleLoad(e){if(e.key&&e.key!==" "&&e.key!=="Enter")return;this.renderSpriteGarden.set(!0);let t=(I,r)=>{let c;return(...A)=>{clearTimeout(c),c=setTimeout(()=>I(...A),r)}},n=()=>{let I=(p,y)=>{for(let[v,G]of Object.entries(y))p.style.setProperty(v,G)},r={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 2rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 2rem)","--sg-ui-touch-controls-bottom":"2rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},c={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 7rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 7rem)","--sg-ui-touch-controls-bottom":"6rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},A=this.spriteGarden()?.nativeElement,C=globalThis.getComputedStyle(globalThis.document.body).width,h=Number(C.slice(0,-2));h<859&&I(A,r),h>=859&&I(A,c)},g=t(()=>{n()},0);typeof ResizeObserver=="function"&&(this.resizeObserver=new ResizeObserver(()=>{g()}),this.resizeObserver.observe(this.doc.body));let o=1e4,s=20,d=0,l=I=>{let r=this.doc.createElement("canvas");return r.width=I.width,r.height=I.height,I.toDataURL()===r.toDataURL()},i=()=>{let r=this.spriteGarden()?.nativeElement?.shadowRoot?.querySelector("canvas");if(r&&!l(r)){this.canvasEl.set(r);return}d<o&&(d+=s,setTimeout(i,s))};i()}handleSpriteGardenEvents(e){let t=this.spriteGarden()?.nativeElement,n=!!e?.detail?.isLoading;this.isLoading.set(n);let g=this.doc.querySelector(".progress");g&&(g.style.display=n?"none":"unset",t&&setTimeout(()=>{g.style.display="none",t.style.display="flex"},0))}ngOnDestroy(){this.resizeObserver?.unobserve(this.doc.body);let e=this.doc.querySelector(".progress");e&&(e.style.display="none")}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=no({type:a,selectors:[["x-sprite-garden"]],viewQuery:function(t,n){t&1&&(qt(n.spriteGarden,Vi,5),qt(n.spriteGardenInfo,Yi,5)),t&2&&io(2)},decls:2,vars:1,consts:[["spriteGarden",""],["spriteGardenInfo",""],["sprite-garden-container",""],[3,"sprite-garden-load"],["sprite-garden",""],["href","https://kherrick.github.io/sprite-garden/"],["src","assets/images/sprite-garden-launcher.png","tabindex","0",1,"launcher",3,"click","keydown"],["href","https://github.com/kherrick/sprite-garden"],[1,"features"],["allowfullscreen","","frameborder","0","src",Pt`//www.youtube.com/embed/Es60fVIyOjY`],["allowfullscreen","","frameborder","0","src",Pt`//www.youtube.com/embed/VQbZTvWGXM4`]],template:function(t,n){t&1&&oo(0,Xi,2,0,"sprite-garden")(1,Ji,40,0,"div",2),t&2&&ro(n.renderSpriteGarden()?0:1)},styles:[`@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{--md-outlined-text-field-container-shape: 1rem;--md-outlined-button-container-shape: 1rem;--md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface)}.launcher{cursor:pointer}.features>li{padding-bottom:.5rem}[sprite-garden-container]{align-items:center;color:var(--md-sys-color-on-surface);display:flex;flex-direction:row;flex-wrap:wrap;grid-column-gap:1rem;grid-row-gap:1rem;justify-content:center;text-align:center}[sprite-garden-container] a{color:var(--md-sys-color-on-surface);text-decoration:underline}[sprite-garden-container] [sprite-garden]{max-width:35rem;text-align:center;display:flex;justify-content:center}[sprite-garden-container] [sprite-garden] iframe{height:auto;min-height:17.5625rem;width:100%}[sprite-garden-container] [sprite-garden] img{width:calc(100% - 2rem)}[sprite-garden-container] [sprite-garden] p{padding:0 1rem}[sprite-garden-container] [sprite-garden] ul{padding:0 3rem;text-align:left}sprite-garden{--sg-color-black: #121212;--sg-tile-fog-color: var(--x-shell-background-color);display:none}
`],encapsulation:3})};export{ar as XSpriteGardenComponent};
