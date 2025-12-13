import{b as go}from"./chunk-QNJTP72R.js";import{q as so}from"./chunk-DCYIHBUG.js";import{$b as lo,Ab as io,Ac as tn,Bb as ao,Da as oo,Ec as nn,Jb as ye,Kb as be,Lb as Qt,Mb as qt,Rb as $t,Sb as St,Va as zt,_b as en,ba as gt,fa as eo,fc as ve,ga as Gt,ha as Wt,ib as ro,ka as to,la as no,ra as wt}from"./chunk-5BYLU2DL.js";import{a as F,b as re}from"./chunk-DAQOROHW.js";var Zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function on(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var co,Io={exports:{}};var Pr=(co||(co=1,Io.exports=(function a(e,r,n){function g(I,l){if(!r[I]){if(!e[I]){if(!l&&on)return on(I);if(o)return o(I,!0);var i=new Error("Cannot find module '"+I+"'");throw i.code="MODULE_NOT_FOUND",i}var c=r[I]={exports:{}};e[I][0].call(c.exports,function(t){var d=e[I][1][t];return g(d||t)},c,c.exports,a,e,r,n)}return r[I].exports}for(var o=on,s=0;s<n.length;s++)g(n[s]);return g})({1:[function(a,e,r){(function(n){var g,o,s=n.MutationObserver||n.WebKitMutationObserver;if(s){var I=0,l=new s(d),i=n.document.createTextNode("");l.observe(i,{characterData:!0}),g=function(){i.data=I=++I%2}}else if(n.setImmediate||n.MessageChannel===void 0)g="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var u=n.document.createElement("script");u.onreadystatechange=function(){d(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:function(){setTimeout(d,0)};else{var c=new n.MessageChannel;c.port1.onmessage=d,g=function(){c.port2.postMessage(0)}}var t=[];function d(){var u,b;o=!0;for(var p=t.length;p;){for(b=t,t=[],u=-1;++u<p;)b[u]();p=t.length}o=!1}function A(u){t.push(u)!==1||o||g()}e.exports=A}).call(this,Zt!==void 0?Zt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(a,e,r){var n=a(1);function g(){}var o={},s=["REJECTED"],I=["FULFILLED"],l=["PENDING"];function i(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,v!==g&&A(this,v)}function c(v,S,R){this.promise=v,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}function t(v,S,R){n(function(){var T;try{T=S(R)}catch(k){return o.reject(v,k)}T===v?o.reject(v,new TypeError("Cannot resolve promise with itself")):o.resolve(v,T)})}function d(v){var S=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof S=="function")return function(){S.apply(v,arguments)}}function A(v,S){var R=!1;function T(D){R||(R=!0,o.reject(v,D))}function k(D){R||(R=!0,o.resolve(v,D))}function X(){S(k,T)}var J=u(X);J.status==="error"&&T(J.value)}function u(v,S){var R={};try{R.value=v(S),R.status="success"}catch(T){R.status="error",R.value=T}return R}function b(v){return v instanceof this?v:o.resolve(new this(g),v)}function p(v){var S=new this(g);return o.reject(S,v)}function y(v){var S=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=v.length,T=!1;if(!R)return this.resolve([]);for(var k=new Array(R),X=0,J=-1,D=new this(g);++J<R;)Q(v[J],J);return D;function Q(me,ce){function $(ae){k[ce]=ae,++X!==R||T||(T=!0,o.resolve(D,k))}S.resolve(me).then($,function(ae){T||(T=!0,o.reject(D,ae))})}}function f(v){var S=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=v.length,T=!1;if(!R)return this.resolve([]);for(var k=-1,X=new this(g);++k<R;)J(v[k]);return X;function J(D){S.resolve(D).then(function(Q){T||(T=!0,o.resolve(X,Q))},function(Q){T||(T=!0,o.reject(X,Q))})}}e.exports=i,i.prototype.catch=function(v){return this.then(null,v)},i.prototype.then=function(v,S){if(typeof v!="function"&&this.state===I||typeof S!="function"&&this.state===s)return this;var R=new this.constructor(g);return this.state!==l?t(R,this.state===I?v:S,this.outcome):this.queue.push(new c(R,v,S)),R},c.prototype.callFulfilled=function(v){o.resolve(this.promise,v)},c.prototype.otherCallFulfilled=function(v){t(this.promise,this.onFulfilled,v)},c.prototype.callRejected=function(v){o.reject(this.promise,v)},c.prototype.otherCallRejected=function(v){t(this.promise,this.onRejected,v)},o.resolve=function(v,S){var R=u(d,S);if(R.status==="error")return o.reject(v,R.value);var T=R.value;if(T)A(v,T);else{v.state=I,v.outcome=S;for(var k=-1,X=v.queue.length;++k<X;)v.queue[k].callFulfilled(S)}return v},o.reject=function(v,S){v.state=s,v.outcome=S;for(var R=-1,T=v.queue.length;++R<T;)v.queue[R].callRejected(S);return v},i.resolve=b,i.reject=p,i.all=y,i.race=f},{1:1}],3:[function(a,e,r){(function(n){typeof n.Promise!="function"&&(n.Promise=a(2))}).call(this,Zt!==void 0?Zt:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(a,e,r){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C};function g(C,m){if(!(C instanceof m))throw new TypeError("Cannot call a class as a function")}function o(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var s=o();function I(){try{if(!s||!s.open)return!1;var C=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),m=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!C||m)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function l(C,m){C=C||[],m=m||{};try{return new Blob(C,m)}catch(G){if(G.name!=="TypeError")throw G;for(var h=new(typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder),W=0;W<C.length;W+=1)h.append(C[W]);return h.getBlob(m.type)}}typeof Promise>"u"&&a(3);var i=Promise;function c(C,m){m&&C.then(function(h){m(null,h)},function(h){m(h)})}function t(C,m,h){typeof m=="function"&&C.then(m),typeof h=="function"&&C.catch(h)}function d(C){return typeof C!="string"&&(console.warn(C+" used as a key, but it is not a string."),C=String(C)),C}function A(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var u="local-forage-detect-blob-support",b=void 0,p={},y=Object.prototype.toString,f="readonly",v="readwrite";function S(C){for(var m=C.length,h=new ArrayBuffer(m),W=new Uint8Array(h),G=0;G<m;G++)W[G]=C.charCodeAt(G);return h}function R(C){return new i(function(m){var h=C.transaction(u,v),W=l([""]);h.objectStore(u).put(W,"key"),h.onabort=function(G){G.preventDefault(),G.stopPropagation(),m(!1)},h.oncomplete=function(){var G=navigator.userAgent.match(/Chrome\/(\d+)/),w=navigator.userAgent.match(/Edge\//);m(w||!G||parseInt(G[1],10)>=43)}}).catch(function(){return!1})}function T(C){return typeof b=="boolean"?i.resolve(b):R(C).then(function(m){return b=m})}function k(C){var m=p[C.name],h={};h.promise=new i(function(W,G){h.resolve=W,h.reject=G}),m.deferredOperations.push(h),m.dbReady?m.dbReady=m.dbReady.then(function(){return h.promise}):m.dbReady=h.promise}function X(C){var m=p[C.name].deferredOperations.pop();if(m)return m.resolve(),m.promise}function J(C,m){var h=p[C.name].deferredOperations.pop();if(h)return h.reject(m),h.promise}function D(C,m){return new i(function(h,W){if(p[C.name]=p[C.name]||we(),C.db){if(!m)return h(C.db);k(C),C.db.close()}var G=[C.name];m&&G.push(C.version);var w=s.open.apply(s,G);m&&(w.onupgradeneeded=function(E){var M=w.result;try{M.createObjectStore(C.storeName),E.oldVersion<=1&&M.createObjectStore(u)}catch(N){if(N.name!=="ConstraintError")throw N;console.warn('The database "'+C.name+'" has been upgraded from version '+E.oldVersion+" to version "+E.newVersion+', but the storage "'+C.storeName+'" already exists.')}}),w.onerror=function(E){E.preventDefault(),W(w.error)},w.onsuccess=function(){var E=w.result;E.onversionchange=function(M){M.target.close()},h(E),X(C)}})}function Q(C){return D(C,!1)}function me(C){return D(C,!0)}function ce(C,m){if(!C.db)return!0;var h=!C.db.objectStoreNames.contains(C.storeName),W=C.version<C.db.version,G=C.version>C.db.version;if(W&&(C.version!==m&&console.warn('The database "'+C.name+`" can't be downgraded from version `+C.db.version+" to version "+C.version+"."),C.version=C.db.version),G||h){if(h){var w=C.db.version+1;w>C.version&&(C.version=w)}return!0}return!1}function $(C){return new i(function(m,h){var W=new FileReader;W.onerror=h,W.onloadend=function(G){var w=btoa(G.target.result||"");m({__local_forage_encoded_blob:!0,data:w,type:C.type})},W.readAsBinaryString(C)})}function ae(C){return l([S(atob(C.data))],{type:C.type})}function Ie(C){return C&&C.__local_forage_encoded_blob}function pe(C){var m=this,h=m._initReady().then(function(){var W=p[m._dbInfo.name];if(W&&W.dbReady)return W.dbReady});return t(h,C,C),h}function le(C){k(C);for(var m=p[C.name],h=m.forages,W=0;W<h.length;W++){var G=h[W];G._dbInfo.db&&(G._dbInfo.db.close(),G._dbInfo.db=null)}return C.db=null,Q(C).then(function(w){return C.db=w,ce(C)?me(C):w}).then(function(w){C.db=m.db=w;for(var E=0;E<h.length;E++)h[E]._dbInfo.db=w}).catch(function(w){throw J(C,w),w})}function ne(C,m,h,W){W===void 0&&(W=1);try{var G=C.db.transaction(C.storeName,m);h(null,G)}catch(w){if(W>0&&(!C.db||w.name==="InvalidStateError"||w.name==="NotFoundError"))return i.resolve().then(function(){if(!C.db||w.name==="NotFoundError"&&!C.db.objectStoreNames.contains(C.storeName)&&C.version<=C.db.version)return C.db&&(C.version=C.db.version+1),me(C)}).then(function(){return le(C).then(function(){ne(C,m,h,W-1)})}).catch(h);h(w)}}function we(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ze(C){var m=this,h={db:null};if(C)for(var W in C)h[W]=C[W];var G=p[h.name];G||(G=we(),p[h.name]=G),G.forages.push(m),m._initReady||(m._initReady=m.ready,m.ready=pe);var w=[];function E(){return i.resolve()}for(var M=0;M<G.forages.length;M++){var N=G.forages[M];N!==m&&w.push(N._initReady().catch(E))}var B=G.forages.slice(0);return i.all(w).then(function(){return h.db=G.db,Q(h)}).then(function(Y){return h.db=Y,ce(h,m._defaultConfig.version)?me(h):Y}).then(function(Y){h.db=G.db=Y,m._dbInfo=h;for(var O=0;O<B.length;O++){var j=B[O];j!==m&&(j._dbInfo.db=h.db,j._dbInfo.version=h.version)}})}function de(C,m){var h=this;C=d(C);var W=new i(function(G,w){h.ready().then(function(){ne(h._dbInfo,f,function(E,M){if(E)return w(E);try{var N=M.objectStore(h._dbInfo.storeName).get(C);N.onsuccess=function(){var B=N.result;B===void 0&&(B=null),Ie(B)&&(B=ae(B)),G(B)},N.onerror=function(){w(N.error)}}catch(B){w(B)}})}).catch(w)});return c(W,m),W}function ot(C,m){var h=this,W=new i(function(G,w){h.ready().then(function(){ne(h._dbInfo,f,function(E,M){if(E)return w(E);try{var N=M.objectStore(h._dbInfo.storeName).openCursor(),B=1;N.onsuccess=function(){var Y=N.result;if(Y){var O=Y.value;Ie(O)&&(O=ae(O));var j=C(O,Y.key,B++);j!==void 0?G(j):Y.continue()}else G()},N.onerror=function(){w(N.error)}}catch(Y){w(Y)}})}).catch(w)});return c(W,m),W}function Ke(C,m,h){var W=this;C=d(C);var G=new i(function(w,E){var M;W.ready().then(function(){return M=W._dbInfo,y.call(m)==="[object Blob]"?T(M.db).then(function(N){return N?m:$(m)}):m}).then(function(N){ne(W._dbInfo,v,function(B,Y){if(B)return E(B);try{var O=Y.objectStore(W._dbInfo.storeName);N===null&&(N=void 0);var j=O.put(N,C);Y.oncomplete=function(){N===void 0&&(N=null),w(N)},Y.onabort=Y.onerror=function(){var _=j.error?j.error:j.transaction.error;E(_)}}catch(_){E(_)}})}).catch(E)});return c(G,h),G}function Ue(C,m){var h=this;C=d(C);var W=new i(function(G,w){h.ready().then(function(){ne(h._dbInfo,v,function(E,M){if(E)return w(E);try{var N=M.objectStore(h._dbInfo.storeName).delete(C);M.oncomplete=function(){G()},M.onerror=function(){w(N.error)},M.onabort=function(){var B=N.error?N.error:N.transaction.error;w(B)}}catch(B){w(B)}})}).catch(w)});return c(W,m),W}function ze(C){var m=this,h=new i(function(W,G){m.ready().then(function(){ne(m._dbInfo,v,function(w,E){if(w)return G(w);try{var M=E.objectStore(m._dbInfo.storeName).clear();E.oncomplete=function(){W()},E.onabort=E.onerror=function(){var N=M.error?M.error:M.transaction.error;G(N)}}catch(N){G(N)}})}).catch(G)});return c(h,C),h}function rt(C){var m=this,h=new i(function(W,G){m.ready().then(function(){ne(m._dbInfo,f,function(w,E){if(w)return G(w);try{var M=E.objectStore(m._dbInfo.storeName).count();M.onsuccess=function(){W(M.result)},M.onerror=function(){G(M.error)}}catch(N){G(N)}})}).catch(G)});return c(h,C),h}function q(C,m){var h=this,W=new i(function(G,w){C<0?G(null):h.ready().then(function(){ne(h._dbInfo,f,function(E,M){if(E)return w(E);try{var N=M.objectStore(h._dbInfo.storeName),B=!1,Y=N.openKeyCursor();Y.onsuccess=function(){var O=Y.result;O?C===0||B?G(O.key):(B=!0,O.advance(C)):G(null)},Y.onerror=function(){w(Y.error)}}catch(O){w(O)}})}).catch(w)});return c(W,m),W}function he(C){var m=this,h=new i(function(W,G){m.ready().then(function(){ne(m._dbInfo,f,function(w,E){if(w)return G(w);try{var M=E.objectStore(m._dbInfo.storeName).openKeyCursor(),N=[];M.onsuccess=function(){var B=M.result;B?(N.push(B.key),B.continue()):W(N)},M.onerror=function(){G(M.error)}}catch(B){G(B)}})}).catch(G)});return c(h,C),h}function Te(C,m){m=A.apply(this,arguments);var h=this.config();(C=typeof C!="function"&&C||{}).name||(C.name=C.name||h.name,C.storeName=C.storeName||h.storeName);var W,G=this;if(C.name){var w=C.name===h.name&&G._dbInfo.db?i.resolve(G._dbInfo.db):Q(C).then(function(E){var M=p[C.name],N=M.forages;M.db=E;for(var B=0;B<N.length;B++)N[B]._dbInfo.db=E;return E});W=C.storeName?w.then(function(E){if(E.objectStoreNames.contains(C.storeName)){var M=E.version+1;k(C);var N=p[C.name],B=N.forages;E.close();for(var Y=0;Y<B.length;Y++){var O=B[Y];O._dbInfo.db=null,O._dbInfo.version=M}var j=new i(function(_,K){var Ce=s.open(C.name,M);Ce.onerror=function(xe){Ce.result.close(),K(xe)},Ce.onupgradeneeded=function(){Ce.result.deleteObjectStore(C.storeName)},Ce.onsuccess=function(){var xe=Ce.result;xe.close(),_(xe)}});return j.then(function(_){N.db=_;for(var K=0;K<B.length;K++){var Ce=B[K];Ce._dbInfo.db=_,X(Ce._dbInfo)}}).catch(function(_){throw(J(C,_)||i.resolve()).catch(function(){}),_})}}):w.then(function(E){k(C);var M=p[C.name],N=M.forages;E.close();for(var B=0;B<N.length;B++)N[B]._dbInfo.db=null;var Y=new i(function(O,j){var _=s.deleteDatabase(C.name);_.onerror=function(){var K=_.result;K&&K.close(),j(_.error)},_.onblocked=function(){console.warn('dropInstance blocked for database "'+C.name+'" until all open connections are closed')},_.onsuccess=function(){var K=_.result;K&&K.close(),O(K)}});return Y.then(function(O){M.db=O;for(var j=0;j<N.length;j++)X(N[j]._dbInfo)}).catch(function(O){throw(J(C,O)||i.resolve()).catch(function(){}),O})})}else W=i.reject("Invalid arguments");return c(W,m),W}var Ge={_driver:"asyncStorage",_initStorage:Ze,_support:I(),iterate:ot,getItem:de,setItem:Ke,removeItem:Ue,clear:ze,length:rt,key:q,keys:he,dropInstance:Te};function ue(){return typeof openDatabase=="function"}var oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",it="~~local_forage_type~",Se=/^~~local_forage_type~([^~]+)~/,Me="__lfsc__:",Xe=Me.length,Ne="arbf",De="blob",He="si08",se="ui08",ge="uic8",ee="si16",Je="si32",pt="ur16",yt="ui32",vt="fl32",Fe="fl64",je=Xe+Ne.length,Le=Object.prototype.toString;function ke(C){var m,h,W,G,w,E=.75*C.length,M=C.length,N=0;C[C.length-1]==="="&&(E--,C[C.length-2]==="="&&E--);var B=new ArrayBuffer(E),Y=new Uint8Array(B);for(m=0;m<M;m+=4)h=oe.indexOf(C[m]),W=oe.indexOf(C[m+1]),G=oe.indexOf(C[m+2]),w=oe.indexOf(C[m+3]),Y[N++]=h<<2|W>>4,Y[N++]=(15&W)<<4|G>>2,Y[N++]=(3&G)<<6|63&w;return B}function Be(C){var m,h=new Uint8Array(C),W="";for(m=0;m<h.length;m+=3)W+=oe[h[m]>>2],W+=oe[(3&h[m])<<4|h[m+1]>>4],W+=oe[(15&h[m+1])<<2|h[m+2]>>6],W+=oe[63&h[m+2]];return h.length%3==2?W=W.substring(0,W.length-1)+"=":h.length%3==1&&(W=W.substring(0,W.length-2)+"=="),W}function at(C,m){var h="";if(C&&(h=Le.call(C)),C&&(h==="[object ArrayBuffer]"||C.buffer&&Le.call(C.buffer)==="[object ArrayBuffer]")){var W,G=Me;C instanceof ArrayBuffer?(W=C,G+=Ne):(W=C.buffer,h==="[object Int8Array]"?G+=He:h==="[object Uint8Array]"?G+=se:h==="[object Uint8ClampedArray]"?G+=ge:h==="[object Int16Array]"?G+=ee:h==="[object Uint16Array]"?G+=pt:h==="[object Int32Array]"?G+=Je:h==="[object Uint32Array]"?G+=yt:h==="[object Float32Array]"?G+=vt:h==="[object Float64Array]"?G+=Fe:m(new Error("Failed to get type for BinaryArray"))),m(G+Be(W))}else if(h==="[object Blob]"){var w=new FileReader;w.onload=function(){var E=it+C.type+"~"+Be(this.result);m(Me+De+E)},w.readAsArrayBuffer(C)}else try{m(JSON.stringify(C))}catch(E){console.error("Couldn't convert value into a JSON string: ",C),m(null,E)}}function Ee(C){if(C.substring(0,Xe)!==Me)return JSON.parse(C);var m,h=C.substring(je),W=C.substring(Xe,je);if(W===De&&Se.test(h)){var G=h.match(Se);m=G[1],h=h.substring(G[0].length)}var w=ke(h);switch(W){case Ne:return w;case De:return l([w],{type:m});case He:return new Int8Array(w);case se:return new Uint8Array(w);case ge:return new Uint8ClampedArray(w);case ee:return new Int16Array(w);case pt:return new Uint16Array(w);case Je:return new Int32Array(w);case yt:return new Uint32Array(w);case vt:return new Float32Array(w);case Fe:return new Float64Array(w);default:throw new Error("Unkown type: "+W)}}var lt={serialize:at,deserialize:Ee,stringToBuffer:ke,bufferToString:Be};function _n(C,m,h,W){C.executeSql("CREATE TABLE IF NOT EXISTS "+m.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],h,W)}function Ir(C){var m=this,h={db:null};if(C)for(var W in C)h[W]=typeof C[W]!="string"?C[W].toString():C[W];var G=new i(function(w,E){try{h.db=openDatabase(h.name,String(h.version),h.description,h.size)}catch(M){return E(M)}h.db.transaction(function(M){_n(M,h,function(){m._dbInfo=h,w()},function(N,B){E(B)})},E)});return h.serializer=lt,G}function Oe(C,m,h,W,G,w){C.executeSql(h,W,G,function(E,M){M.code===M.SYNTAX_ERR?E.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[m.storeName],function(N,B){B.rows.length?w(N,M):_n(N,m,function(){N.executeSql(h,W,G,w)},w)},w):w(E,M)},w)}function ur(C,m){var h=this;C=d(C);var W=new i(function(G,w){h.ready().then(function(){var E=h._dbInfo;E.db.transaction(function(M){Oe(M,E,"SELECT * FROM "+E.storeName+" WHERE key = ? LIMIT 1",[C],function(N,B){var Y=B.rows.length?B.rows.item(0).value:null;Y&&(Y=E.serializer.deserialize(Y)),G(Y)},function(N,B){w(B)})})}).catch(w)});return c(W,m),W}function Cr(C,m){var h=this,W=new i(function(G,w){h.ready().then(function(){var E=h._dbInfo;E.db.transaction(function(M){Oe(M,E,"SELECT * FROM "+E.storeName,[],function(N,B){for(var Y=B.rows,O=Y.length,j=0;j<O;j++){var _=Y.item(j),K=_.value;if(K&&(K=E.serializer.deserialize(K)),(K=C(K,_.key,j+1))!==void 0)return void G(K)}G()},function(N,B){w(B)})})}).catch(w)});return c(W,m),W}function Kn(C,m,h,W){var G=this;C=d(C);var w=new i(function(E,M){G.ready().then(function(){m===void 0&&(m=null);var N=m,B=G._dbInfo;B.serializer.serialize(m,function(Y,O){O?M(O):B.db.transaction(function(j){Oe(j,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[C,Y],function(){E(N)},function(_,K){M(K)})},function(j){if(j.code===j.QUOTA_ERR){if(W>0)return void E(Kn.apply(G,[C,N,h,W-1]));M(j)}})})}).catch(M)});return c(w,h),w}function Ar(C,m,h){return Kn.apply(this,[C,m,h,1])}function mr(C,m){var h=this;C=d(C);var W=new i(function(G,w){h.ready().then(function(){var E=h._dbInfo;E.db.transaction(function(M){Oe(M,E,"DELETE FROM "+E.storeName+" WHERE key = ?",[C],function(){G()},function(N,B){w(B)})})}).catch(w)});return c(W,m),W}function hr(C){var m=this,h=new i(function(W,G){m.ready().then(function(){var w=m._dbInfo;w.db.transaction(function(E){Oe(E,w,"DELETE FROM "+w.storeName,[],function(){W()},function(M,N){G(N)})})}).catch(G)});return c(h,C),h}function br(C){var m=this,h=new i(function(W,G){m.ready().then(function(){var w=m._dbInfo;w.db.transaction(function(E){Oe(E,w,"SELECT COUNT(key) as c FROM "+w.storeName,[],function(M,N){var B=N.rows.item(0).c;W(B)},function(M,N){G(N)})})}).catch(G)});return c(h,C),h}function pr(C,m){var h=this,W=new i(function(G,w){h.ready().then(function(){var E=h._dbInfo;E.db.transaction(function(M){Oe(M,E,"SELECT key FROM "+E.storeName+" WHERE id = ? LIMIT 1",[C+1],function(N,B){var Y=B.rows.length?B.rows.item(0).key:null;G(Y)},function(N,B){w(B)})})}).catch(w)});return c(W,m),W}function yr(C){var m=this,h=new i(function(W,G){m.ready().then(function(){var w=m._dbInfo;w.db.transaction(function(E){Oe(E,w,"SELECT key FROM "+w.storeName,[],function(M,N){for(var B=[],Y=0;Y<N.rows.length;Y++)B.push(N.rows.item(Y).key);W(B)},function(M,N){G(N)})})}).catch(G)});return c(h,C),h}function vr(C){return new i(function(m,h){C.transaction(function(W){W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(G,w){for(var E=[],M=0;M<w.rows.length;M++)E.push(w.rows.item(M).name);m({db:C,storeNames:E})},function(G,w){h(w)})},function(W){h(W)})})}function fr(C,m){m=A.apply(this,arguments);var h=this.config();(C=typeof C!="function"&&C||{}).name||(C.name=C.name||h.name,C.storeName=C.storeName||h.storeName);var W,G=this;return c(W=C.name?new i(function(w){var E;E=C.name===h.name?G._dbInfo.db:openDatabase(C.name,"","",0),C.storeName?w({db:E,storeNames:[C.storeName]}):w(vr(E))}).then(function(w){return new i(function(E,M){w.db.transaction(function(N){function B(_){return new i(function(K,Ce){N.executeSql("DROP TABLE IF EXISTS "+_,[],function(){K()},function(xe,_t){Ce(_t)})})}for(var Y=[],O=0,j=w.storeNames.length;O<j;O++)Y.push(B(w.storeNames[O]));i.all(Y).then(function(){E()}).catch(function(_){M(_)})},function(N){M(N)})})}):i.reject("Invalid arguments"),m),W}var Gr={_driver:"webSQLStorage",_initStorage:Ir,_support:ue(),iterate:Cr,getItem:ur,setItem:Ar,removeItem:mr,clear:hr,length:br,key:pr,keys:yr,dropInstance:fr};function Wr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function zn(C,m){var h=C.name+"/";return C.storeName!==m.storeName&&(h+=C.storeName+"/"),h}function wr(){var C="_localforage_support_test";try{return localStorage.setItem(C,!0),localStorage.removeItem(C),!1}catch{return!0}}function Sr(){return!wr()||localStorage.length>0}function Zr(C){var m=this,h={};if(C)for(var W in C)h[W]=C[W];return h.keyPrefix=zn(C,m._defaultConfig),Sr()?(m._dbInfo=h,h.serializer=lt,i.resolve()):i.reject()}function Rr(C){var m=this,h=m.ready().then(function(){for(var W=m._dbInfo.keyPrefix,G=localStorage.length-1;G>=0;G--){var w=localStorage.key(G);w.indexOf(W)===0&&localStorage.removeItem(w)}});return c(h,C),h}function Lr(C,m){var h=this;C=d(C);var W=h.ready().then(function(){var G=h._dbInfo,w=localStorage.getItem(G.keyPrefix+C);return w&&(w=G.serializer.deserialize(w)),w});return c(W,m),W}function Er(C,m){var h=this,W=h.ready().then(function(){for(var G=h._dbInfo,w=G.keyPrefix,E=w.length,M=localStorage.length,N=1,B=0;B<M;B++){var Y=localStorage.key(B);if(Y.indexOf(w)===0){var O=localStorage.getItem(Y);if(O&&(O=G.serializer.deserialize(O)),(O=C(O,Y.substring(E),N++))!==void 0)return O}}});return c(W,m),W}function Tr(C,m){var h=this,W=h.ready().then(function(){var G,w=h._dbInfo;try{G=localStorage.key(C)}catch{G=null}return G&&(G=G.substring(w.keyPrefix.length)),G});return c(W,m),W}function Mr(C){var m=this,h=m.ready().then(function(){for(var W=m._dbInfo,G=localStorage.length,w=[],E=0;E<G;E++){var M=localStorage.key(E);M.indexOf(W.keyPrefix)===0&&w.push(M.substring(W.keyPrefix.length))}return w});return c(h,C),h}function Nr(C){var m=this.keys().then(function(h){return h.length});return c(m,C),m}function kr(C,m){var h=this;C=d(C);var W=h.ready().then(function(){var G=h._dbInfo;localStorage.removeItem(G.keyPrefix+C)});return c(W,m),W}function Br(C,m,h){var W=this;C=d(C);var G=W.ready().then(function(){m===void 0&&(m=null);var w=m;return new i(function(E,M){var N=W._dbInfo;N.serializer.serialize(m,function(B,Y){if(Y)M(Y);else try{localStorage.setItem(N.keyPrefix+C,B),E(w)}catch(O){O.name!=="QuotaExceededError"&&O.name!=="NS_ERROR_DOM_QUOTA_REACHED"||M(O),M(O)}})})});return c(G,h),G}function xr(C,m){if(m=A.apply(this,arguments),!(C=typeof C!="function"&&C||{}).name){var h=this.config();C.name=C.name||h.name,C.storeName=C.storeName||h.storeName}var W,G=this;return W=C.name?new i(function(w){C.storeName?w(zn(C,G._defaultConfig)):w(C.name+"/")}).then(function(w){for(var E=localStorage.length-1;E>=0;E--){var M=localStorage.key(E);M.indexOf(w)===0&&localStorage.removeItem(M)}}):i.reject("Invalid arguments"),c(W,m),W}var Vr={_driver:"localStorageWrapper",_initStorage:Zr,_support:Wr(),iterate:Er,getItem:Lr,setItem:Br,removeItem:kr,clear:Rr,length:Nr,key:Tr,keys:Mr,dropInstance:xr},Yr=function(C,m){return C===m||typeof C=="number"&&typeof m=="number"&&isNaN(C)&&isNaN(m)},Xr=function(C,m){for(var h=C.length,W=0;W<h;){if(Yr(C[W],m))return!0;W++}return!1},Qn=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"},st={},qn={},Qe={INDEXEDDB:Ge,WEBSQL:Gr,LOCALSTORAGE:Vr},Jr=[Qe.INDEXEDDB._driver,Qe.WEBSQL._driver,Qe.LOCALSTORAGE._driver],ft=["dropInstance"],jt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ft),Or={description:"",driver:Jr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ur(C,m){C[m]=function(){var h=arguments;return C.ready().then(function(){return C[m].apply(C,h)})}}function Pt(){for(var C=1;C<arguments.length;C++){var m=arguments[C];if(m)for(var h in m)m.hasOwnProperty(h)&&(Qn(m[h])?arguments[0][h]=m[h].slice():arguments[0][h]=m[h])}return arguments[0]}var Dr=(function(){function C(m){for(var h in g(this,C),Qe)if(Qe.hasOwnProperty(h)){var W=Qe[h],G=W._driver;this[h]=G,st[G]||this.defineDriver(W)}this._defaultConfig=Pt({},Or),this._config=Pt({},this._defaultConfig,m),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return C.prototype.config=function(m){if((m===void 0?"undefined":n(m))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var h in m){if(h==="storeName"&&(m[h]=m[h].replace(/\W/g,"_")),h==="version"&&typeof m[h]!="number")return new Error("Database version must be a number.");this._config[h]=m[h]}return!("driver"in m)||!m.driver||this.setDriver(this._config.driver)}return typeof m=="string"?this._config[m]:this._config},C.prototype.defineDriver=function(m,h,W){var G=new i(function(w,E){try{var M=m._driver,N=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!m._driver)return void E(N);for(var B=jt.concat("_initStorage"),Y=0,O=B.length;Y<O;Y++){var j=B[Y];if((!Xr(ft,j)||m[j])&&typeof m[j]!="function")return void E(N)}var _=function(){for(var Ce=function(Fr){return function(){var jr=new Error("Method "+Fr+" is not implemented by the current driver"),$n=i.reject(jr);return c($n,arguments[arguments.length-1]),$n}},xe=0,_t=ft.length;xe<_t;xe++){var Kt=ft[xe];m[Kt]||(m[Kt]=Ce(Kt))}};_();var K=function(Ce){st[M]&&console.info("Redefining LocalForage driver: "+M),st[M]=m,qn[M]=Ce,w()};"_support"in m?m._support&&typeof m._support=="function"?m._support().then(K,E):K(!!m._support):K(!0)}catch(Ce){E(Ce)}});return t(G,h,W),G},C.prototype.driver=function(){return this._driver||null},C.prototype.getDriver=function(m,h,W){var G=st[m]?i.resolve(st[m]):i.reject(new Error("Driver not found."));return t(G,h,W),G},C.prototype.getSerializer=function(m){var h=i.resolve(lt);return t(h,m),h},C.prototype.ready=function(m){var h=this,W=h._driverSet.then(function(){return h._ready===null&&(h._ready=h._initDriver()),h._ready});return t(W,m,m),W},C.prototype.setDriver=function(m,h,W){var G=this;Qn(m)||(m=[m]);var w=this._getSupportedDrivers(m);function E(){G._config.driver=G.driver()}function M(Y){return G._extend(Y),E(),G._ready=G._initStorage(G._config),G._ready}function N(Y){return function(){var O=0;function j(){for(;O<Y.length;){var _=Y[O];return O++,G._dbInfo=null,G._ready=null,G.getDriver(_).then(M).catch(j)}E();var K=new Error("No available storage method found.");return G._driverSet=i.reject(K),G._driverSet}return j()}}var B=this._driverSet!==null?this._driverSet.catch(function(){return i.resolve()}):i.resolve();return this._driverSet=B.then(function(){var Y=w[0];return G._dbInfo=null,G._ready=null,G.getDriver(Y).then(function(O){G._driver=O._driver,E(),G._wrapLibraryMethodsWithReady(),G._initDriver=N(w)})}).catch(function(){E();var Y=new Error("No available storage method found.");return G._driverSet=i.reject(Y),G._driverSet}),t(this._driverSet,h,W),this._driverSet},C.prototype.supports=function(m){return!!qn[m]},C.prototype._extend=function(m){Pt(this,m)},C.prototype._getSupportedDrivers=function(m){for(var h=[],W=0,G=m.length;W<G;W++){var w=m[W];this.supports(w)&&h.push(w)}return h},C.prototype._wrapLibraryMethodsWithReady=function(){for(var m=0,h=jt.length;m<h;m++)Ur(this,jt[m])},C.prototype.createInstance=function(m){return new C(m)},C})(),Hr=new Dr;e.exports=Hr},{3:3}]},{},[4])(4)),Io.exports),te=Jn(Pr),$e="shared-saves",Vo="pending-shared-save";function Yo(){return new Promise((a,e)=>{let r=indexedDB.open("sprite-garden",1);r.onerror=()=>e(r.error),r.onsuccess=()=>a(r.result),r.onupgradeneeded=n=>{let g=n.target.result;g.objectStoreNames.contains($e)||g.createObjectStore($e,{keyPath:"id"})}})}async function rn(){try{let a=await Yo(),e=a.transaction($e,"readwrite").objectStore($e);await new Promise((r,n)=>{let g=e.delete(Vo);g.onerror=()=>n(g.error),g.onsuccess=()=>r()}),console.info("[SharedSave] Deleted shared save from IndexedDB")}catch(a){console.error("[SharedSave] Failed to delete shared save:",a)}}function Dt(a){let e=a.spriteGarden.state,r=a.spriteGarden.config,n=e.plantStructures.get();return{config:{breakMode:r.breakMode.get(),canvasScale:r.canvasScale.get(),currentResolution:r.currentResolution.get(),fogMode:r.fogMode.get(),fogScale:r.fogScale.get(),FRICTION:r.FRICTION.get(),GRAVITY:r.GRAVITY.get(),isFogScaled:r.isFogScaled.get(),MAX_FALL_SPEED:r.MAX_FALL_SPEED.get(),SURFACE_LEVEL:r.SURFACE_LEVEL.get(),TILE_SIZE:r.TILE_SIZE.get(),version:r.version.get(),WORLD_HEIGHT:r.WORLD_HEIGHT.get(),WORLD_WIDTH:r.WORLD_WIDTH.get(),worldSeed:r.worldSeed.get()},state:{camera:e.camera.get(),exploredMap:e.exploredMap.get().toObject(),gameTime:e.gameTime.get(),growthTimers:e.growthTimers.get(),materialsInventory:e.materialsInventory.get(),plantStructures:Object.fromEntries(Object.entries(n).map(([g,o])=>{if(typeof o?.blocks=="object"){let s=Object.entries(o.blocks);return[g,re(F({},o),{blocks:Object.fromEntries(s.map(([I,l])=>[I,re(F({},l),{tile:l.tile.id})]))})]}return[g,F({},o)]})),player:e.player.get(),seedInventory:e.seedInventory.get(),seeds:e.seeds.get(),selectedMaterialType:e.selectedMaterialType.get(),selectedSeedType:e.selectedSeedType.get(),viewMode:e.viewMode.get(),world:e.world.get().toArray()}}}var _r=Object.defineProperty,an=(a,e,r)=>(((n,g,o)=>{g in n?_r(n,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[g]=o})(a,typeof e!="symbol"?e+"":e,r),r),ln=(a,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return a.has(e)},Rt=(a,e,r)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,r)},uo=(a,e,r)=>(((n,g,o)=>{if(!g.has(n))throw TypeError("Cannot "+o)})(a,e,"access private method"),r);function Xo(a,e){return Object.is(a,e)}var ie=null,It=!1,Bt=1,Lt=Symbol("SIGNAL");function qe(a){let e=ie;return ie=a,e}var On={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function xt(a){if(It)throw new Error("");if(ie===null)return;ie.consumerOnSignalRead(a);let e=ie.nextProducerIndex++;et(ie),e<ie.producerNode.length&&ie.producerNode[e]!==a&&pn(ie)&&Ht(ie.producerNode[e],ie.producerIndexOfThis[e]),ie.producerNode[e]!==a&&(ie.producerNode[e]=a,ie.producerIndexOfThis[e]=pn(ie)?Uo(a,ie,e):0),ie.producerLastReadVersion[e]=a.version}function Jo(a){if(a.dirty||a.lastCleanEpoch!==Bt){if(!a.producerMustRecompute(a)&&!(function(e){et(e);for(let r=0;r<e.producerNode.length;r++){let n=e.producerNode[r],g=e.producerLastReadVersion[r];if(g!==n.version||(Jo(n),g!==n.version))return!0}return!1})(a))return a.dirty=!1,void(a.lastCleanEpoch=Bt);a.producerRecomputeValue(a),a.dirty=!1,a.lastCleanEpoch=Bt}}function Oo(a){if(a.liveConsumerNode===void 0)return;let e=It;It=!0;try{for(let r of a.liveConsumerNode)r.dirty||Kr(r)}finally{It=e}}function Kr(a){var e;a.dirty=!0,Oo(a),(e=a.consumerMarkedDirty)==null||e.call(a.wrapper??a)}function Uo(a,e,r){var n;if(Un(a),et(a),a.liveConsumerNode.length===0){(n=a.watched)==null||n.call(a.wrapper);for(let g=0;g<a.producerNode.length;g++)a.producerIndexOfThis[g]=Uo(a.producerNode[g],a,g)}return a.liveConsumerIndexOfThis.push(r),a.liveConsumerNode.push(e)-1}function Ht(a,e){var r;if(Un(a),et(a),a.liveConsumerNode.length===1){(r=a.unwatched)==null||r.call(a.wrapper);for(let g=0;g<a.producerNode.length;g++)Ht(a.producerNode[g],a.producerIndexOfThis[g])}let n=a.liveConsumerNode.length-1;if(a.liveConsumerNode[e]=a.liveConsumerNode[n],a.liveConsumerIndexOfThis[e]=a.liveConsumerIndexOfThis[n],a.liveConsumerNode.length--,a.liveConsumerIndexOfThis.length--,e<a.liveConsumerNode.length){let g=a.liveConsumerIndexOfThis[e],o=a.liveConsumerNode[e];et(o),o.producerIndexOfThis[g]=e}}function pn(a){var e;return a.consumerIsAlwaysLive||(((e=a?.liveConsumerNode)==null?void 0:e.length)??0)>0}function et(a){a.producerNode??(a.producerNode=[]),a.producerIndexOfThis??(a.producerIndexOfThis=[]),a.producerLastReadVersion??(a.producerLastReadVersion=[])}function Un(a){a.liveConsumerNode??(a.liveConsumerNode=[]),a.liveConsumerIndexOfThis??(a.liveConsumerIndexOfThis=[])}function Co(a){if(Jo(a),xt(a),a.value===yn)throw a.error;return a.value}var sn=Symbol("UNSET"),gn=Symbol("COMPUTING"),yn=Symbol("ERRORED"),zr=re(F({},On),{value:sn,dirty:!0,error:null,equal:Xo,producerMustRecompute:a=>a.value===sn||a.value===gn,producerRecomputeValue(a){if(a.value===gn)throw new Error("Detected cycle in computations.");let e=a.value;a.value=gn;let r=(function(o){return o&&(o.nextProducerIndex=0),qe(o)})(a),n,g=!1;try{n=a.computation.call(a.wrapper),g=e!==sn&&e!==yn&&a.equal.call(a.wrapper,e,n)}catch(o){n=yn,a.error=o}finally{(function(o,s){if(qe(s),o&&o.producerNode!==void 0&&o.producerIndexOfThis!==void 0&&o.producerLastReadVersion!==void 0){if(pn(o))for(let I=o.nextProducerIndex;I<o.producerNode.length;I++)Ht(o.producerNode[I],o.producerIndexOfThis[I]);for(;o.producerNode.length>o.nextProducerIndex;)o.producerNode.pop(),o.producerLastReadVersion.pop(),o.producerIndexOfThis.pop()}})(a,r)}g?a.value=e:(a.value=n,a.version++)}}),Qr=function(){throw new Error};function qr(){return xt(this),this.value}function $r(a,e){ie?.consumerAllowSignalWrites===!1&&Qr(),a.equal.call(a.wrapper,a.value,e)||(a.value=e,(function(r){r.version++,Bt++,Oo(r)})(a))}var ei=re(F({},On),{equal:Xo,value:void 0}),Ae=Symbol("node"),H;function _e(a=1,e=4294967295){return typeof globalThis.crypto=="object"&&typeof globalThis.crypto.getRandomValues=="function"?(function(g,o){let s=o-g+1,I=4294967295,l,i;i=I-I%s;do l=globalThis.crypto.getRandomValues(new Uint32Array(1))[0];while(l>i);return g+l%s})(a,e):(r=a,n=e,Math.floor(Math.random()*(n-r+1))+r);var r,n}(a=>{var e,r,n,g;e=Ae,r=new WeakSet,a.isState=o=>typeof o=="object"&&ln(r,o),a.State=class{constructor(o,s={}){Rt(this,r),an(this,e);let I=(function(i){let c=Object.create(ei);c.value=i;let t=()=>(xt(c),c.value);return t[Lt]=c,t})(o),l=I[Lt];if(this[Ae]=l,l.wrapper=this,s){let i=s.equals;i&&(l.equal=i),l.watched=s[a.subtle.watched],l.unwatched=s[a.subtle.unwatched]}}get(){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return qr.call(this[Ae])}set(o){if(!(0,a.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(It)throw new Error("Writes to signals not permitted during Watcher callback");$r(this[Ae],o)}},n=Ae,g=new WeakSet,a.isComputed=o=>typeof o=="object"&&ln(g,o),a.Computed=class{constructor(o,s){Rt(this,g),an(this,n);let I=(function(i){let c=Object.create(zr);c.computation=i;let t=()=>Co(c);return t[Lt]=c,t})(o),l=I[Lt];if(l.consumerAllowSignalWrites=!0,this[Ae]=l,l.wrapper=this,s){let i=s.equals;i&&(l.equal=i),l.watched=s[a.subtle.watched],l.unwatched=s[a.subtle.unwatched]}}get(){if(!(0,a.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Co(this[Ae])}},(o=>{var s,I,l,i;o.untrack=function(c){let t,d=null;try{d=qe(null),t=c()}finally{qe(d)}return t},o.introspectSources=function(c){var t;if(!(0,a.isComputed)(c)&&!(0,a.isWatcher)(c))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((t=c[Ae].producerNode)==null?void 0:t.map(d=>d.wrapper))??[]},o.introspectSinks=function(c){var t;if(!(0,a.isComputed)(c)&&!(0,a.isState)(c))throw new TypeError("Called introspectSinks without a Signal argument");return((t=c[Ae].liveConsumerNode)==null?void 0:t.map(d=>d.wrapper))??[]},o.hasSinks=function(c){if(!(0,a.isComputed)(c)&&!(0,a.isState)(c))throw new TypeError("Called hasSinks without a Signal argument");let t=c[Ae].liveConsumerNode;return!!t&&t.length>0},o.hasSources=function(c){if(!(0,a.isComputed)(c)&&!(0,a.isWatcher)(c))throw new TypeError("Called hasSources without a Computed or Watcher argument");let t=c[Ae].producerNode;return!!t&&t.length>0},s=Ae,I=new WeakSet,l=new WeakSet,i=function(c){for(let t of c)if(!(0,a.isComputed)(t)&&!(0,a.isState)(t))throw new TypeError("Called watch/unwatch without a Computed or State argument")},a.isWatcher=c=>ln(I,c),o.Watcher=class{constructor(c){Rt(this,I),Rt(this,l),an(this,s);let t=Object.create(On);t.wrapper=this,t.consumerMarkedDirty=c,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[Ae]=t}watch(...c){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");uo(this,l,i).call(this,c);let t=this[Ae];t.dirty=!1;let d=qe(t);for(let A of c)xt(A[Ae]);qe(d)}unwatch(...c){if(!(0,a.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");uo(this,l,i).call(this,c);let t=this[Ae];et(t);for(let d=t.producerNode.length-1;d>=0;d--)if(c.includes(t.producerNode[d].wrapper)){Ht(t.producerNode[d],t.producerIndexOfThis[d]);let A=t.producerNode.length-1;if(t.producerNode[d]=t.producerNode[A],t.producerIndexOfThis[d]=t.producerIndexOfThis[A],t.producerNode.length--,t.producerIndexOfThis.length--,t.nextProducerIndex--,d<t.producerNode.length){let u=t.producerIndexOfThis[d],b=t.producerNode[d];Un(b),b.liveConsumerIndexOfThis[u]=d}}}getPending(){if(!(0,a.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Ae].producerNode.filter(c=>c.dirty).map(c=>c.wrapper)}},o.currentComputed=function(){var c;return(c=ie)==null?void 0:c.wrapper},o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(a.subtle||(a.subtle={}))})(H||(H={}));var L=a=>F({crop:!1,farmable:!1,solid:!1,isSeed:!1,drops:null},a),Z={AIR:"AIR",AGAVE_BASE:"AGAVE_BASE",AGAVE_FLOWER_STALK:"AGAVE_FLOWER_STALK",AGAVE_FLOWER:"AGAVE_FLOWER",AGAVE_GROWING:"AGAVE_GROWING",AGAVE_SPIKE:"AGAVE_SPIKE",AGAVE:"AGAVE",BAMBOO_GROWING:"BAMBOO_GROWING",BAMBOO_JOINT:"BAMBOO_JOINT",BAMBOO_LEAVES:"BAMBOO_LEAVES",BAMBOO_STALK:"BAMBOO_STALK",BAMBOO:"BAMBOO",BEDROCK:"BEDROCK",BERRY_BUSH_BERRIES:"BERRY_BUSH_BERRIES",BERRY_BUSH_BRANCH:"BERRY_BUSH_BRANCH",BERRY_BUSH_GROWING:"BERRY_BUSH_GROWING",BERRY_BUSH_LEAVES:"BERRY_BUSH_LEAVES",BERRY_BUSH:"BERRY_BUSH",BIRCH_BARK:"BIRCH_BARK",BIRCH_BRANCHES:"BIRCH_BRANCHES",BIRCH_CATKINS:"BIRCH_CATKINS",BIRCH_GROWING:"BIRCH_GROWING",BIRCH_LEAVES:"BIRCH_LEAVES",BIRCH_TRUNK:"BIRCH_TRUNK",BIRCH:"BIRCH",CACTUS_BODY:"CACTUS_BODY",CACTUS_FLOWER:"CACTUS_FLOWER",CACTUS_GROWING:"CACTUS_GROWING",CACTUS:"CACTUS",CARROT_GROWING:"CARROT_GROWING",CARROT_LEAVES:"CARROT_LEAVES",CARROT_ROOT:"CARROT_ROOT",CARROT:"CARROT",CLAY:"CLAY",CLOUD:"CLOUD",COAL:"COAL",CORN_EAR:"CORN_EAR",CORN_GROWING:"CORN_GROWING",CORN_LEAVES:"CORN_LEAVES",CORN_SILK:"CORN_SILK",CORN_STALK:"CORN_STALK",CORN:"CORN",DIRT:"DIRT",FERN_FROND:"FERN_FROND",FERN_GROWING:"FERN_GROWING",FERN_STEM:"FERN_STEM",FERN:"FERN",FOG:"FOG",GOLD:"GOLD",GRASS:"GRASS",ICE:"ICE",IRON:"IRON",KELP_BLADE:"KELP_BLADE",KELP_BULB:"KELP_BULB",KELP_GROWING:"KELP_GROWING",KELP:"KELP",LAVA:"LAVA",LAVENDER_BUSH:"LAVENDER_BUSH",LAVENDER_FLOWERS:"LAVENDER_FLOWERS",LAVENDER_GROWING:"LAVENDER_GROWING",LAVENDER_STEM:"LAVENDER_STEM",LAVENDER:"LAVENDER",LOADING_PIXEL:"LOADING_PIXEL",LOTUS_BUD:"LOTUS_BUD",LOTUS_FLOWER:"LOTUS_FLOWER",LOTUS_GROWING:"LOTUS_GROWING",LOTUS_PAD:"LOTUS_PAD",LOTUS_STEM:"LOTUS_STEM",LOTUS:"LOTUS",MOSS:"MOSS",MUSHROOM_CAP:"MUSHROOM_CAP",MUSHROOM_GROWING:"MUSHROOM_GROWING",MUSHROOM_STEM:"MUSHROOM_STEM",MUSHROOM:"MUSHROOM",PINE_CONE:"PINE_CONE",PINE_NEEDLES:"PINE_NEEDLES",PINE_TREE_GROWING:"PINE_TREE_GROWING",PINE_TREE:"PINE_TREE",PINE_TRUNK:"PINE_TRUNK",PLAYER_BODY:"PLAYER_BODY",PLAYER_BORDER:"PLAYER_BORDER",PLAYER_EYES:"PLAYER_EYES",PUMICE:"PUMICE",PUMPKIN_FRUIT:"PUMPKIN_FRUIT",PUMPKIN_GROWING:"PUMPKIN_GROWING",PUMPKIN_LEAVES:"PUMPKIN_LEAVES",PUMPKIN_STEM:"PUMPKIN_STEM",PUMPKIN_VINE:"PUMPKIN_VINE",PUMPKIN:"PUMPKIN",ROSE_BLOOM:"ROSE_BLOOM",ROSE_BUD:"ROSE_BUD",ROSE_GROWING:"ROSE_GROWING",ROSE_LEAVES:"ROSE_LEAVES",ROSE_STEM:"ROSE_STEM",ROSE_THORNS:"ROSE_THORNS",ROSE:"ROSE",SAND:"SAND",SNOW:"SNOW",STONE:"STONE",SUNFLOWER_CENTER:"SUNFLOWER_CENTER",SUNFLOWER_GROWING:"SUNFLOWER_GROWING",SUNFLOWER_LEAVES:"SUNFLOWER_LEAVES",SUNFLOWER_PETALS:"SUNFLOWER_PETALS",SUNFLOWER_STEM:"SUNFLOWER_STEM",SUNFLOWER:"SUNFLOWER",TREE_GROWING:"TREE_GROWING",TREE_LEAVES:"TREE_LEAVES",TREE_TRUNK:"TREE_TRUNK",TULIP_BULB:"TULIP_BULB",TULIP_GROWING:"TULIP_GROWING",TULIP_LEAVES:"TULIP_LEAVES",TULIP_PETALS:"TULIP_PETALS",TULIP_STEM:"TULIP_STEM",TULIP:"TULIP",WALNUT:"WALNUT",WATER:"WATER",WHEAT_GRAIN:"WHEAT_GRAIN",WHEAT_GROWING:"WHEAT_GROWING",WHEAT_STALK:"WHEAT_STALK",WHEAT:"WHEAT",WILLOW_BRANCHES:"WILLOW_BRANCHES",WILLOW_LEAVES:"WILLOW_LEAVES",WILLOW_TREE_GROWING:"WILLOW_TREE_GROWING",WILLOW_TREE:"WILLOW_TREE",WILLOW_TRUNK:"WILLOW_TRUNK",WOOD:"WOOD",XRAY:"XRAY"},U={[Z.AIR]:L({id:0}),[Z.AGAVE_BASE]:L({id:82,solid:!0}),[Z.AGAVE_FLOWER_STALK]:L({id:84}),[Z.AGAVE_FLOWER]:L({id:85}),[Z.AGAVE_GROWING]:L({id:81,solid:!0,crop:!0}),[Z.AGAVE_SPIKE]:L({id:83,solid:!0}),[Z.AGAVE]:L({id:80,solid:!0,crop:!0,growthTime:1920,drops:"AGAVE",isSeed:!0}),[Z.BAMBOO_GROWING]:L({id:43,solid:!0,crop:!0}),[Z.BAMBOO_JOINT]:L({id:53,solid:!0}),[Z.BAMBOO_LEAVES]:L({id:54}),[Z.BAMBOO_STALK]:L({id:52,solid:!0}),[Z.BAMBOO]:L({id:36,solid:!0,crop:!0,growthTime:180,drops:"BAMBOO",isSeed:!0}),[Z.BEDROCK]:L({id:19,solid:!0}),[Z.BERRY_BUSH_BERRIES]:L({id:51}),[Z.BERRY_BUSH_BRANCH]:L({id:49,solid:!0}),[Z.BERRY_BUSH_GROWING]:L({id:42,crop:!0}),[Z.BERRY_BUSH_LEAVES]:L({id:50,solid:!0}),[Z.BERRY_BUSH]:L({id:35,crop:!0,growthTime:360,drops:"BERRY_BUSH",isSeed:!0}),[Z.BIRCH_BARK]:L({id:117,solid:!0}),[Z.BIRCH_BRANCHES]:L({id:118,solid:!0}),[Z.BIRCH_CATKINS]:L({id:120}),[Z.BIRCH_GROWING]:L({id:115,solid:!0,crop:!0}),[Z.BIRCH_LEAVES]:L({id:119}),[Z.BIRCH_TRUNK]:L({id:116,solid:!0}),[Z.BIRCH]:L({id:114,solid:!0,crop:!0,growthTime:1260,drops:["BIRCH","WOOD"],isSeed:!0}),[Z.CACTUS_BODY]:L({id:30,solid:!0}),[Z.CACTUS_FLOWER]:L({id:31}),[Z.CACTUS_GROWING]:L({id:23,solid:!0,crop:!0}),[Z.CACTUS]:L({id:15,solid:!0,crop:!0,growthTime:2400,drops:"CACTUS",isSeed:!0}),[Z.CARROT_GROWING]:L({id:21,crop:!0}),[Z.CARROT_LEAVES]:L({id:26}),[Z.CARROT_ROOT]:L({id:27}),[Z.CARROT]:L({id:13,crop:!0,growthTime:240,drops:"CARROT",isSeed:!0}),[Z.CLAY]:L({id:6,solid:!0,farmable:!0,drops:"CLAY"}),[Z.CLOUD]:L({id:72,drops:"CLOUD",farmable:!0,solid:!0}),[Z.COAL]:L({id:7,solid:!0,drops:"COAL"}),[Z.CORN_EAR]:L({id:61}),[Z.CORN_GROWING]:L({id:45,crop:!0}),[Z.CORN_LEAVES]:L({id:60}),[Z.CORN_SILK]:L({id:62}),[Z.CORN_STALK]:L({id:59}),[Z.CORN]:L({id:38,crop:!0,growthTime:420,drops:"CORN",isSeed:!0}),[Z.DIRT]:L({id:2,solid:!0,farmable:!0,drops:"DIRT"}),[Z.FERN_FROND]:L({id:70}),[Z.FERN_GROWING]:L({id:48,crop:!0}),[Z.FERN_STEM]:L({id:69}),[Z.FERN]:L({id:41,crop:!0,growthTime:90,drops:"FERN",isSeed:!0}),[Z.FOG]:L({id:121}),[Z.GOLD]:L({id:9,solid:!0,drops:"GOLD"}),[Z.GRASS]:L({id:1,solid:!0,farmable:!0,drops:"GRASS"}),[Z.ICE]:L({id:17,solid:!0,drops:"ICE"}),[Z.IRON]:L({id:8,solid:!0,drops:"IRON"}),[Z.KELP_BLADE]:L({id:93}),[Z.KELP_BULB]:L({id:94}),[Z.KELP_GROWING]:L({id:92,crop:!0}),[Z.KELP]:L({id:91,crop:!0,growthTime:150,drops:"KELP",isSeed:!0}),[Z.LAVA]:L({id:18}),[Z.LAVENDER_BUSH]:L({id:89}),[Z.LAVENDER_FLOWERS]:L({id:90}),[Z.LAVENDER_GROWING]:L({id:87,crop:!0}),[Z.LAVENDER_STEM]:L({id:88}),[Z.LAVENDER]:L({id:86,crop:!0,growthTime:200,drops:"LAVENDER",isSeed:!0}),[Z.LOADING_PIXEL]:L({id:122}),[Z.LOTUS_BUD]:L({id:112}),[Z.LOTUS_FLOWER]:L({id:113}),[Z.LOTUS_GROWING]:L({id:109,crop:!0}),[Z.LOTUS_PAD]:L({id:110}),[Z.LOTUS_STEM]:L({id:111}),[Z.LOTUS]:L({id:108,crop:!0,growthTime:390,drops:"LOTUS",isSeed:!0}),[Z.MOSS]:L({id:32}),[Z.MUSHROOM_CAP]:L({id:29}),[Z.MUSHROOM_GROWING]:L({id:22,crop:!0}),[Z.MUSHROOM_STEM]:L({id:28}),[Z.MUSHROOM]:L({id:14,crop:!0,growthTime:120,drops:"MUSHROOM",isSeed:!0}),[Z.PINE_CONE]:L({id:65}),[Z.PINE_NEEDLES]:L({id:64,solid:!0}),[Z.PINE_TREE_GROWING]:L({id:46,solid:!0,crop:!0}),[Z.PINE_TREE]:L({id:39,solid:!0,crop:!0,growthTime:1440,drops:"PINE_TREE",isSeed:!0}),[Z.PINE_TRUNK]:L({id:63,solid:!0}),[Z.PLAYER_BODY]:L({id:124}),[Z.PLAYER_BORDER]:L({id:125}),[Z.PLAYER_EYES]:L({id:126}),[Z.PUMICE]:L({id:71,solid:!0,drops:"PUMICE"}),[Z.PUMPKIN_FRUIT]:L({id:106}),[Z.PUMPKIN_GROWING]:L({id:103,crop:!0}),[Z.PUMPKIN_LEAVES]:L({id:105}),[Z.PUMPKIN_STEM]:L({id:107}),[Z.PUMPKIN_VINE]:L({id:104}),[Z.PUMPKIN]:L({id:102,crop:!0,growthTime:660,drops:"PUMPKIN",isSeed:!0}),[Z.ROSE_BLOOM]:L({id:101}),[Z.ROSE_BUD]:L({id:100}),[Z.ROSE_GROWING]:L({id:96,crop:!0}),[Z.ROSE_LEAVES]:L({id:99}),[Z.ROSE_STEM]:L({id:97}),[Z.ROSE_THORNS]:L({id:98}),[Z.ROSE]:L({id:95,crop:!0,growthTime:540,drops:"ROSE",isSeed:!0}),[Z.SAND]:L({id:5,solid:!0,farmable:!0,drops:"SAND"}),[Z.SNOW]:L({id:16,solid:!0,farmable:!0,drops:"SNOW"}),[Z.STONE]:L({id:3,solid:!0,drops:"STONE"}),[Z.SUNFLOWER_CENTER]:L({id:57}),[Z.SUNFLOWER_GROWING]:L({id:44,crop:!0}),[Z.SUNFLOWER_LEAVES]:L({id:56}),[Z.SUNFLOWER_PETALS]:L({id:58}),[Z.SUNFLOWER_STEM]:L({id:55}),[Z.SUNFLOWER]:L({id:37,crop:!0,growthTime:600,drops:"SUNFLOWER",isSeed:!0}),[Z.TREE_GROWING]:L({id:34,crop:!0}),[Z.TREE_LEAVES]:L({id:11,solid:!0,crop:!0,drops:"WOOD"}),[Z.TREE_TRUNK]:L({id:10,solid:!0,crop:!0,drops:"WOOD"}),[Z.TULIP_BULB]:L({id:79}),[Z.TULIP_GROWING]:L({id:75,crop:!0}),[Z.TULIP_LEAVES]:L({id:77}),[Z.TULIP_PETALS]:L({id:78}),[Z.TULIP_STEM]:L({id:76}),[Z.TULIP]:L({id:74,crop:!0,growthTime:300,drops:"TULIP",isSeed:!0}),[Z.WALNUT]:L({id:33,crop:!0,growthTime:960,drops:["WALNUT","WOOD"],isSeed:!0}),[Z.WATER]:L({id:4}),[Z.WHEAT_GRAIN]:L({id:25}),[Z.WHEAT_GROWING]:L({id:20,crop:!0}),[Z.WHEAT_STALK]:L({id:24}),[Z.WHEAT]:L({id:12,crop:!0,growthTime:480,drops:"WHEAT",isSeed:!0}),[Z.WILLOW_BRANCHES]:L({id:67,solid:!0}),[Z.WILLOW_LEAVES]:L({id:68}),[Z.WILLOW_TREE_GROWING]:L({id:47,solid:!0,crop:!0}),[Z.WILLOW_TREE]:L({id:40,solid:!0,crop:!0,growthTime:1800,drops:["WILLOW_TREE","WOOD"],isSeed:!0}),[Z.WILLOW_TRUNK]:L({id:66,solid:!0}),[Z.WOOD]:L({id:73,solid:!1,crop:!0,drops:"WOOD"}),[Z.XRAY]:L({id:123})},cn={[Z.AGAVE]:U.AGAVE_GROWING,[Z.BAMBOO]:U.BAMBOO_GROWING,[Z.BERRY_BUSH]:U.BERRY_BUSH_GROWING,[Z.BIRCH]:U.BIRCH_GROWING,[Z.CACTUS]:U.CACTUS_GROWING,[Z.CARROT]:U.CARROT_GROWING,[Z.CORN]:U.CORN_GROWING,[Z.FERN]:U.FERN_GROWING,[Z.KELP]:U.KELP_GROWING,[Z.LAVENDER]:U.LAVENDER_GROWING,[Z.LOTUS]:U.LOTUS_GROWING,[Z.MUSHROOM]:U.MUSHROOM_GROWING,[Z.PINE_TREE]:U.PINE_TREE_GROWING,[Z.PUMPKIN]:U.PUMPKIN_GROWING,[Z.ROSE]:U.ROSE_GROWING,[Z.SUNFLOWER]:U.SUNFLOWER_GROWING,[Z.TULIP]:U.TULIP_GROWING,[Z.WALNUT]:U.TREE_GROWING,[Z.WHEAT]:U.WHEAT_GROWING,[Z.WILLOW_TREE]:U.WILLOW_TREE_GROWING};function Re(a){return a.replace("_"," ").replace("-"," ").toLowerCase()}function vn(a,e){for(let r in a)if(a[r].id===e)return a[r];return null}function Ao(a){return Object.fromEntries(Object.entries(a).map(([e,r])=>{return[r.id,(n=e,n.toLowerCase().replace(/_/g,"-"))];var n}))}var Et={crops:[],surfaceTile:null,subTile:null},We={FOREST:F({trees:!0,name:"Forest"},Et),DESERT:F({trees:!1,name:"Desert"},Et),TUNDRA:F({trees:!1,name:"Tundra"},Et),SWAMP:F({trees:!0,name:"Swamp"},Et)},Do;We.FOREST.surfaceTile=U.GRASS,We.FOREST.subTile=U.DIRT,We.FOREST.crops=[U.BERRY_BUSH,U.BIRCH,U.CARROT,U.FERN,U.LAVENDER,U.PINE_TREE,U.PUMPKIN,U.ROSE,U.TULIP,U.WHEAT],We.DESERT.surfaceTile=U.SAND,We.DESERT.subTile=U.SAND,We.DESERT.crops=[U.AGAVE,U.CACTUS,U.SUNFLOWER],We.TUNDRA.surfaceTile=U.SNOW,We.TUNDRA.subTile=U.ICE,We.TUNDRA.crops=[U.BIRCH,U.FERN,U.PINE_TREE],We.SWAMP.surfaceTile=U.CLAY,We.SWAMP.subTile=U.CLAY,We.SWAMP.crops=[U.BAMBOO,U.CORN,U.KELP,U.LOTUS,U.MUSHROOM,U.WILLOW_TREE];var mo=new URLSearchParams(globalThis.location?.search);Do=mo.has("seed")?Number(mo.get("seed")):_e();var x={fogMode:new H.State("fog"),fogScale:new H.State(8),isFogScaled:new H.State(!0),breakMode:new H.State("regular"),canvasScale:new H.State(1),currentResolution:new H.State("400"),version:new H.State("1"),worldSeed:new H.State(Do),waterPhysics:{updateInterval:10,frameCounter:0,maxIterationsPerUpdate:5,checkRadius:15,dirtyRegions:new Set},TILE_SIZE:new H.State(8),WORLD_WIDTH:new H.State(500),WORLD_HEIGHT:new H.State(300),SURFACE_LEVEL:new H.State(90),GRAVITY:new H.State(.7),FRICTION:new H.State(.8),MAX_FALL_SPEED:new H.State(15),BIOMES:We,TILES:U,TileNames:Z},Ct=class a{constructor(e,r,n){this.colors=n,this.width=e,this.height=r,this.data=new Uint8Array(e*r),this.cache={canvas:null,lastPlayerTileX:null,lastPlayerTileY:null,lastCameraGridX:null,lastCameraGridY:null,needsUpdate:!0}}isExplored(e,r){if(e<0||e>=this.width||r<0||r>=this.height)return!1;let n=r*this.width+e;return this.data[n]===1}setExplored(e,r){if(e<0||e>=this.width||r<0||r>=this.height)return!1;let n=r*this.width+e,g=this.data[n]===1;return this.data[n]=1,!g}setExploredBatch(e){let r=!1;for(let n of e)this.setExplored(n.x,n.y)&&(r=!0);return r}reset(){this.data.fill(0),this.cache.needsUpdate=!0}static fromObject(e,r,n,g){let o=new a(r,n,g);if(e&&typeof e=="object"){for(let s in e)if(e[s]){let[I,l]=s.split(",").map(Number);o.setExplored(I,l)}}return o}toObject(){let e={};for(let r=0;r<this.height;r++)for(let n=0;n<this.width;n++)this.isExplored(n,r)&&(e[`${n},${r}`]=1);return e}updateFromPlayer(e,r,n=15){let g=e.get(),o=Math.floor((g.x+g.width/2)/r),s=Math.floor((g.y+g.height/2)/r),I=!1;for(let l=-n;l<=n;l++)for(let i=-n;i<=n;i++){let c=o+l,t=s+i;Math.sqrt(l*l+i*i)<=n&&this.setExplored(c,t)&&(I=!0)}return I}render(e,r,n,g){if(!e||!r)return;let o=g.get(),s=Math.ceil(r.width/n)+1,I=Math.ceil(r.height/n)+1,l=Math.floor(o.x/n),i=Math.floor(o.y/n),c=o.x%n,t=o.y%n;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let d=0;d<s;d++){let A=l+d;if(A<0||A>=this.width)continue;let u=Math.round(d*n-c);for(let b=0;b<I;b++){let p=i+b;if(!(p<0||p>=this.height)&&!this.isExplored(A,p)){let y=Math.round(b*n-t);e.fillRect(u,y,n,n)}}}}renderScaled(e,r,n,g,o=2){if(!e||!r)return;let s=g.get(),I=n*o,l=Math.ceil(r.width/I)+1,i=Math.ceil(r.height/I)+1,c=Math.floor(s.x/I),t=Math.floor(s.y/I),d=s.x%I,A=s.y%I;e.fillStyle=this.colors["--sg-tile-fog-color"];for(let u=0;u<l;u++){let b=c+u,p=Math.round(u*I-d);for(let y=0;y<i;y++){let f=t+y,v=Math.round(y*I-A),S=!0;for(let R=0;R<o&&S;R++)for(let T=0;T<o&&S;T++){let k=b*o+R,X=f*o+T;k>=0&&k<this.width&&X>=0&&X<this.height&&this.isExplored(k,X)&&(S=!1)}S&&e.fillRect(p,v,I,I)}}}},{TileNames:P}=x,V={world:new H.State(null),exploredMap:new H.State(new Ct(500,300)),plantStructures:new H.State({}),gameTime:new H.State(0),growthTimers:new H.State({}),seeds:new H.State(0),selectedMaterialType:new H.State(null),selectedSeedType:new H.State(null),shouldReset:new H.State(!1),viewMode:new H.State("normal"),waterPhysicsQueue:new H.State(new Set),seedInventory:new H.State({[P.AGAVE]:0,[P.BAMBOO]:0,[P.BERRY_BUSH]:0,[P.BIRCH]:0,[P.CACTUS]:0,[P.CARROT]:0,[P.CORN]:0,[P.FERN]:0,[P.KELP]:0,[P.LAVENDER]:0,[P.LOTUS]:0,[P.MUSHROOM]:0,[P.PINE_TREE]:0,[P.PUMPKIN]:0,[P.ROSE]:0,[P.SUNFLOWER]:0,[P.TULIP]:0,[P.WALNUT]:0,[P.WHEAT]:0,[P.WILLOW_TREE]:0}),materialsInventory:new H.State({[P.CLAY]:0,[P.CLOUD]:0,[P.COAL]:0,[P.DIRT]:0,[P.GOLD]:0,[P.GRASS]:0,[P.ICE]:0,[P.IRON]:0,[P.PUMICE]:0,[P.SAND]:0,[P.SNOW]:0,[P.STONE]:0,[P.WOOD]:0}),player:new H.State({x:200,y:50,width:6,height:8,velocityX:0,velocityY:0,speed:2.75,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0}),camera:new H.State({x:0,y:0,speed:5})},Ho={totalSeeds:new H.Computed(()=>{let a=V.seedInventory.get();return Object.values(a).reduce((e,r)=>e+r,0)})};function Ye(a,e){let r=V[a]?.get();r!==void 0&&V[a].set(e(r))}function ti(a,e){let r=x[a]?.get();r!==void 0&&x[a].set(e(r))}function ni(a,e){return x[a]?.set(e)}function oi(a){return x[a]?.get()}function ri(a,e){return V[a]?.set(e)}function ii(a){return V[a]?.get()}async function ai(a,e){x.version.set(e);let{WorldMap:r}=await Promise.resolve().then(function(){return li});return V.world.set(new r(500,300)),a.spriteGarden=re(F({},a?.spriteGarden),{config:x,state:V,computed:Ho,setConfig:ni,getConfig:oi,updateConfig:ti,setState:ri,getState:ii,updateState:Ye}),{gameConfig:x,gameState:V}}var Fo=new H.State(!1),Vt=new H.State(!1),ho=new H.State(!1),fn=new H.State(null),jo={"amber-500":"#f39c12","amber-800":"#8b4513","amber-900":"#654321","antique-white":"#fffacd",beige:"#f5f5dc","black-alpha-60":"#00000099","black-alpha-80":"#000000cc",black:"#000000","blue-400":"#4a90e2","blue-500":"#2196f3","blue-700":"#0066cc",bronze:"#b87333",brown:"#654321",burlywood:"#deb887",chocolate:"#d2691e",coral:"#ff7f50",crimson:"#dc143c","dark-brown":"#59392b","dark-clay":"#cd853f","dark-cyan":"#2f4f2f","dark-green":"#2e5930","dark-olive-green":"#556b2f","dark-orange":"#ff8c00","dark-red":"#8b0000","dark-sea-green-light":"#9bcd9b","dark-sea-green":"#4f7942","dark-slate-gray":"#2f4f4f","dark-tan":"#8b7355","deep-pink":"#ff1493","dim-gray":"#696969","emerald-600":"#45a049","emerald-700":"#27ae60","forest-green":"#228b22",gold:"#ffd700",goldenrod:"#daa520","granite-gray-alpha-30":"#6464644d","gray-100":"#eeeeee","gray-200":"#e3e3e3","gray-300":"#e0e0e0","gray-400":"#dddddd","gray-50":"#f0f0f0","gray-500":"#cccccc","gray-600":"#bbbbbb","gray-700":"#888888","gray-800":"#666666","gray-900":"#333333","gray-alpha-10":"#ffffff1a","gray-alpha-20":"#ffffff33","gray-alpha-30":"#ffffff4d","gray-granite-alpha-30":"#6464644d","green-500":"#4caf50","green-yellow-400":"#adff2f","hot-pink":"#ff69b4","indian-red":"#cd5c5c",jet:"#1c1c1c",khaki:"#ffec8b","lawn-green":"#7cfc00","light-coral-pink":"#f08080","light-coral":"#ffa54f","light-pink":"#ffb6d9","light-sky-blue":"#87ceeb","light-steel-blue":"#c5d1d3","lime-400":"#32cd32","medium-purple":"#8a7fc8","medium-sea-green":"#3cb371","medium-slate-blue":"#9370db","misty-rose":"#ffe4e1","neutral-950":"#555","olive-drab-700":"#6b8e23","orange-500":"#ff6b35","orange-red":"#ff4500","pale-goldenrod":"#eee8aa","pale-green-200":"#90ee90","pale-green-300":"#98fb98",pink:"#ff69b4",plum:"#dda0dd","powder-blue":"#b0e0e6","red-500":"#ff4444","royal-blue":"#4169e1","saddle-brown":"#8b4513","sandy-brown":"#f4a460","sea-green":"#2e8b57","sky-300":"#87ceeb","sky-50":"#e6f3ff","stone-100":"#f1f1f1","stone-50":"#fffafa",tan:"#b8a99a",tomato:"#ff6347",white:"#ffffff","wood-brown":"#362200","yellow-400":"#ffff00","yellow-green-400":"#9acd32"},Po={"touch-btn-background":"var(--sg-color-black-alpha-60)","touch-btn-border":"var(--sg-color-gray-alpha-30)","touch-btn":"var(--sg-color-white)","ui-grid-corner-container":"var(--sg-color-white)","ui-grid-corner-heading-background":"var(--black-alpha-80)","ui-grid-corner-heading-border":"var(--sg-color-gray-alpha-10)","ui-grid-corner-heading":"var(--sg-color-white)","ui-grid-corner-sub-heading":"var(--sg-color-white)"},Dn={"agave-base":"var(--sg-color-lime-400)","agave-flower-stalk":"var(--sg-color-yellow-green-400)","agave-flower":"var(--sg-color-yellow-400)","agave-growing":"var(--sg-color-green-yellow-400)","agave-spike":"var(--sg-color-lawn-green)",agave:"var(--sg-color-lawn-green)",air:"var(--sg-color-sky-300)","bamboo-growing":"var(--sg-color-pale-green-300)","bamboo-joint":"var(--sg-color-olive-drab-700)","bamboo-leaves":"var(--sg-color-lime-400)","bamboo-stalk":"var(--sg-color-pale-green-200)",bamboo:"var(--sg-color-pale-green-200)",bedrock:"var(--sg-color-jet)","berry-bush-berries":"var(--sg-color-crimson)","berry-bush-branch":"var(--sg-color-saddle-brown)","berry-bush-growing":"var(--sg-color-indian-red)","berry-bush-leaves":"var(--sg-color-forest-green)","berry-bush":"var(--sg-color-crimson)","birch-bark":"var(--sg-color-white)","birch-branches":"var(--sg-color-dark-tan)","birch-catkins":"var(--sg-color-pale-goldenrod)","birch-growing":"var(--sg-color-antique-white)","birch-leaves":"var(--sg-color-pale-green-300)","birch-trunk":"var(--sg-color-beige)",birch:"var(--sg-color-beige)","cactus-body":"var(--sg-color-sea-green)","cactus-flower":"var(--sg-color-hot-pink)","cactus-growing":"var(--sg-color-forest-green)",cactus:"var(--sg-color-lime-400)","carrot-growing":"var(--sg-color-coral)","carrot-leaves":"var(--sg-color-forest-green)","carrot-root":"var(--sg-color-tomato)",carrot:"var(--sg-color-dark-orange)",clay:"var(--sg-color-dark-clay)",cloud:"var(--sg-color-light-steel-blue)",coal:"var(--sg-color-dark-slate-gray)","corn-ear":"var(--sg-color-pale-goldenrod)","corn-growing":"var(--sg-color-pale-goldenrod)","corn-leaves":"var(--sg-color-olive-drab-700)","corn-silk":"var(--sg-color-burlywood)","corn-stalk":"var(--sg-color-yellow-green-400)",corn:"var(--sg-color-pale-goldenrod)",dirt:"var(--sg-color-saddle-brown)","fern-frond":"var(--sg-color-medium-sea-green)","fern-growing":"var(--sg-color-pale-green-200)","fern-stem":"var(--sg-color-dark-olive-green)",fern:"var(--sg-color-medium-sea-green)",fog:"var(--sg-color-black)",gold:"var(--sg-color-gold)",grass:"var(--sg-color-pale-green-200)",ice:"var(--sg-color-powder-blue)",iron:"var(--sg-color-bronze)","kelp-blade":"var(--sg-color-sea-green)","kelp-bulb":"var(--sg-color-dark-sea-green)","kelp-growing":"var(--sg-color-medium-slate-blue)",kelp:"var(--sg-color-dark-cyan)",lava:"var(--sg-color-orange-red)","lavender-bush":"var(--sg-color-medium-purple)","lavender-flowers":"var(--sg-color-medium-slate-blue)","lavender-growing":"var(--sg-color-plum)","lavender-stem":"var(--sg-color-dark-olive-green)",lavender:"var(--sg-color-medium-slate-blue)","loading-pixel":"var(--sg-color-light-sky-blue)","lotus-bud":"var(--sg-color-light-pink)","lotus-flower":"var(--sg-color-pink)","lotus-growing":"var(--sg-color-misty-rose)","lotus-pad":"var(--sg-color-medium-sea-green)","lotus-stem":"var(--sg-color-sea-green)",lotus:"var(--sg-color-pink)",moss:"var(--sg-color-dark-olive-green)","mushroom-cap":"var(--sg-color-dark-red)","mushroom-growing":"var(--sg-color-indian-red)","mushroom-stem":"var(--sg-color-chocolate)",mushroom:"var(--sg-color-dark-red)","pine-cone":"var(--sg-color-dark-tan)","pine-needles":"var(--sg-color-dark-green)","pine-tree-growing":"var(--sg-color-dark-olive-green)","pine-tree":"var(--sg-color-dark-green)","pine-trunk":"var(--sg-color-saddle-brown)","player-body":"var(--sg-color-pink)","player-border":"var(--sg-color-black)","player-eyes":"var(--sg-color-black)",pumice:"var(--sg-color-tan)","pumpkin-fruit":"var(--sg-color-dark-orange)","pumpkin-growing":"var(--sg-color-light-coral)","pumpkin-leaves":"var(--sg-color-yellow-green-400)","pumpkin-stem":"var(--sg-color-saddle-brown)","pumpkin-vine":"var(--sg-color-olive-drab-700)",pumpkin:"var(--sg-color-dark-orange)","rose-bloom":"var(--sg-color-crimson)","rose-bud":"var(--sg-color-indian-red)","rose-growing":"var(--sg-color-light-coral-pink)","rose-leaves":"var(--sg-color-dark-cyan)","rose-stem":"var(--sg-color-brown)","rose-thorns":"var(--sg-color-saddle-brown)",rose:"var(--sg-color-crimson)",sand:"var(--sg-color-sandy-brown)",snow:"var(--sg-color-stone-50)",stone:"var(--sg-color-dim-gray)","sunflower-center":"var(--sg-color-saddle-brown)","sunflower-growing":"var(--sg-color-khaki)","sunflower-leaves":"var(--sg-color-forest-green)","sunflower-petals":"var(--sg-color-gold)","sunflower-stem":"var(--sg-color-dark-tan)",sunflower:"var(--sg-color-gold)","tree-growing":"var(--sg-color-yellow-green-400)","tree-leaves":"var(--sg-color-forest-green)","tree-trunk":"var(--sg-color-dark-brown)","tulip-bulb":"var(--sg-color-dark-tan)","tulip-growing":"var(--sg-color-light-pink)","tulip-leaves":"var(--sg-color-forest-green)","tulip-petals":"var(--sg-color-deep-pink)","tulip-stem":"var(--sg-color-olive-drab-700)",tulip:"var(--sg-color-deep-pink)",walnut:"var(--sg-color-brown)",water:"var(--sg-color-royal-blue)","wheat-grain":"var(--sg-color-goldenrod)","wheat-growing":"var(--sg-color-yellow-green-400)","wheat-stalk":"var(--sg-color-dark-tan)",wheat:"var(--sg-color-goldenrod)","willow-branches":"var(--sg-color-medium-slate-blue)","willow-leaves":"var(--sg-color-yellow-green-400)","willow-tree-growing":"var(--sg-color-dark-sea-green-light)","willow-tree":"var(--sg-color-medium-slate-blue)","willow-trunk":"var(--sg-color-dark-tan)",wood:"var(--sg-color-wood-brown)",xray:"var(--sg-color-granite-gray-alpha-30)"};function dn(a,e){let r;for(let n of e){r||(r={});let g=n.startsWith("--sg-color-")?n:`${n}-color`;r[g]=a.getPropertyValue(g)}return r}function tt(a,e){let r=a.getComputedStyle(e.host);return F(F(F({},dn(r,Object.keys(jo).map(n=>`--sg-color-${n}`))),dn(r,Object.keys(Dn).map(n=>`--sg-tile-${n}`))),dn(r,Object.keys(Po).map(n=>`--sg-ui-${n}`)))}var nt=class a{constructor(e,r){this.width=e,this.height=r,this.data=new Uint8Array(e*r),this.initializeTileMapping()}initializeTileMapping(){let e=x.TILES;this.tileIdMap=new Map,this.reverseTileMap=new Map;let r=0;for(let[n,g]of Object.entries(e))this.tileIdMap.set(g,r),this.reverseTileMap.set(r,g),r++}getTile(e,r){if(e<0||e>=this.width||r<0||r>=this.height)return x.TILES.AIR;let n=this.data[r*this.width+e];return this.reverseTileMap.get(n)||x.TILES.AIR}setTile(e,r,n){if(e<0||e>=this.width||r<0||r>=this.height)return;let g=this.tileIdMap.get(n);g!==void 0&&(this.data[r*this.width+e]=g)}static fromArray(e,r,n){let g=new a(r,n),o=x.TILES;for(let s=0;s<r;s++)if(e[s])for(let I=0;I<n;I++){let l=e[s][I];if(l==null){g.setTile(s,I,o.AIR);continue}let i=o.AIR;if(typeof l=="number"){let c=vn(o,l);c?i=c:console.warn(`Unknown tile ID ${l} at (${s}, ${I}), defaulting to AIR`)}else if(typeof l=="object"&&l.id!==void 0){let c=vn(o,l.id);c?i=c:console.warn(`Unknown tile ID ${l.id} at (${s}, ${I}), defaulting to AIR`)}g.setTile(s,I,i)}return g}toArray(){let e=[];for(let r=0;r<this.width;r++){e[r]=[];for(let n=0;n<this.height;n++)e[r][n]=this.getTile(r,n).id}return e}},li=Object.freeze({__proto__:null,WorldMap:nt});function _o(a,e){let r=new Uint8Array(e),n="";for(let g=0;g<r.byteLength;g++)n+=String.fromCharCode(r[g]);return a.btoa(n)}function Pe(a,e,r){let n=(function(o,s){let I=o.atob(s),l=I.length,i=new Uint8Array(l);for(let c=0;c<l;c++)i[c]=I.charCodeAt(c);return i.buffer})(a,e),g=new Uint8Array(n);return new Blob([g.buffer],{type:r})}async function At(a){let e=await import("https://cdn.jsdelivr.net/npm/pdf-lib/+esm"),{PDFDocument:r,PDFName:n,PDFDict:g,PDFArray:o,PDFStream:s,decodePDFRawStream:I}=e,l;a instanceof File&&(l=await a.arrayBuffer()),a instanceof ArrayBuffer&&(l=a);let i=await r.load(l);return(await(async function(t,d,A,u){if(!t.catalog.has(u.of("Names")))return[];let b=t.catalog.lookup(u.of("Names"),A);if(!b.has(u.of("EmbeddedFiles")))return[];let p=b.lookup(u.of("EmbeddedFiles"),A);if(!p.has(u.of("Names")))return[];let y=p.lookup(u.of("Names"),d),f=[];for(let v=0,S=y.size();v<S;v+=2){let R=y.lookup(v),T=y.lookup(v+1,A);f.push({fileName:R,fileSpec:T})}return f})(i,o,g,n)).map(({fileName:t,fileSpec:d})=>{let A=d.lookup(n.of("EF"),g).lookup(n.of("F"),s);return{name:t.decodeText(),data:I(A).decode()}})}function si(a,e){let r=a.slice(0,8),n=[],g=8;for(;g<a.length;){let c=new DataView(a.buffer,a.byteOffset+g).getUint32(0),t=String.fromCharCode(a[g+4],a[g+5],a[g+6],a[g+7]),d=8+c+4,A=a.slice(g,g+d);if(n.push({type:t,data:A}),g+=d,t==="IEND")break}let o=(function(c,t){let d=new TextEncoder().encode(c),A=t.length,u=new Uint8Array(8+A+4),b=new DataView(u.buffer);b.setUint32(0,A),u.set(d,4),u.set(t,8);let p=new Uint8Array(4+A);p.set(d,0),p.set(t,4);let y=(function(f){let v=-1;for(let S=0;S<f.length;S++){v^=f[S];for(let R=0;R<8;R++)v=v>>>1^(1&v?3988292384:0)}return(-1^v)>>>0})(p);return b.setUint32(8+A,y),u})("tEXt",new TextEncoder().encode("gamestate\0"+e)),s=[r];s.push(n[0].data);for(let c=1;c<n.length;c++)n[c].type==="IEND"&&s.push(o),s.push(n[c].data);let I=0;for(let c of s)I+=c.length;let l=new Uint8Array(I),i=0;for(let c of s)l.set(c,i),i+=c.length;return l}async function mt(a){let e=await a.arrayBuffer(),r=new Uint8Array(e),n=8;for(;n<r.length;){let g=new DataView(r.buffer,r.byteOffset+n).getUint32(0),o=String.fromCharCode(r[n+4],r[n+5],r[n+6],r[n+7]),s=n+8,I=s+g;if(o==="tEXt"){let l=r.slice(s,I),i=new TextDecoder().decode(l),c=i.indexOf("\0");if(c!==-1){let t=i.slice(0,c),d=i.slice(c+1);if(t==="gamestate")return JSON.parse(d)}}if(n=I+4,o==="IEND")break}return null}async function ht(a,e,r){let n=r;if(n?.type==="pdf"){let l=Pe(a,n.contents,"application/pdf"),[i]=await At(new File([l],"sprite-garden-game-card.png"));n=JSON.parse(await mt(new Blob([i.data])))}let g=a.spriteGarden.config,o=a.spriteGarden.state;for(let l in n.config)l!=="currentResolution"&&l!=="isFogScaled"&&g[l]?.set&&a.spriteGarden.setConfig(l,n.config[l]);let s=n.config.WORLD_HEIGHT,I=n.config.WORLD_WIDTH;for(let l in n.state){if(l==="seedInventory"){let i=n.state[l];for(let c in o.seedInventory.get())i[c]===void 0&&(i[c]=0);o.seedInventory.set(i);continue}if(l==="materialsInventory"){let i=n.state[l];for(let c in o.materialsInventory.get())i[c]===void 0&&(i[c]=0);o.materialsInventory.set(i);continue}if(l==="plantStructures"){let i=n.state.plantStructures,c=g.TILES,t=Object.fromEntries(Object.entries(i).map(([d,A])=>[d,re(F({},A),{blocks:Object.fromEntries(Object.entries(A.blocks).map(([u,b])=>{let p=c.AIR;if(typeof b.tile=="object")p=b.tile;else if(typeof b.tile=="number"){let y=vn(c,b.tile);y&&(p=y)}return[u,re(F({},b),{tile:p})]}))})]));o.plantStructures.set(t);continue}if(l==="exploredMap"){let i={},c=n.state.exploredMap;if(c&&Object.keys(c).length>0){let t=tt(a,e);i=Ct.fromObject(c,I,s,t)}o.exploredMap.set(i);continue}if(l==="world"){let i=n.state[l];if(i&&Array.isArray(i)&&i.length>0){console.log(`Converting world: ${I}x${s}`);let c=nt.fromArray(i,I,s),t=g.TILES,d=0;for(let A=0;A<I;A++)for(let u=0;u<s;u++){let b=c.getTile(A,u);b&&b!==t.AIR&&d++}console.log(`Converted world contains ${d} non-air tiles`),o.world.set(c),console.log("World converted successfully")}else console.error("Invalid world data in save state:",i);continue}o[l]?.set&&a.spriteGarden.setState(l,n.state[l])}console.log("Save state loaded successfully"),e.dispatchEvent(new CustomEvent("sprite-garden-reset"))}function Gn(){let a=new Date;return`${a.getFullYear()}-${(a.getMonth()+1).toString().padStart(2,"0")}-${a.getDate().toString().padStart(2,"0")}_${a.getHours().toString().padStart(2,"0")}-${a.getMinutes().toString().padStart(2,"0")}-${a.getSeconds().toString().padStart(2,"0")}`}async function Yt(a){let e=new TextEncoder().encode(a);if("CompressionStream"in window){let r=new Blob([e]).stream().pipeThrough(new CompressionStream("gzip"));return await new Response(r).blob()}}async function gi(a,e){let r=`Sprite-Garden-Game-Save-${Gn()}.sgs`,n;if(a.showSaveFilePicker)n=await a.showSaveFilePicker({suggestedName:r}),await(async function(g,o){let s=await Yt(g),I=await o.createWritable();await I.write(s),await I.close()})(e,n);else{let g=await Yt(e),o=URL.createObjectURL(g),s=a.document.createElement("a");s.href=o,s.download=r,a.document.body.append(s),s.click(),a.document.body.removeChild(s),URL.revokeObjectURL(o)}}function Ko(a,e){let r=(g,o)=>{if(!g)return null;if(g.tagName===o.toUpperCase()&&g.shadowRoot)return g;let s=[...g.children||[]];return g.shadowRoot&&s.push(g.shadowRoot),s.map(I=>r(I,o)).find(Boolean)||null},n=r(a,e);return n?n.shadowRoot:null}var Xt="sprite-garden-autosave",Hn="sprite-garden-autosave-mode",bo="sprite-garden-save-";async function Jt(){try{return await te.getItem(Hn)}catch(a){return console.info("Failed to get save mode:",a),"manual"}}async function po(a){try{await te.setItem(Hn,a),console.info("Save mode set to:",a)}catch(e){console.info("Failed to set save mode:",e)}}var yo=0;async function Fn(a){try{if(await Jt()!=="auto")return;let e=Date.now();if(e-yo<3e4)return void console.info("Auto-save skipped (too soon since last save)");let r=Dt(a),n=JSON.stringify(r),g=await Yt(n),o=_o(a,await g.arrayBuffer()),s={name:"[Auto Save]",timestamp:Date.now(),data:o,isAutoSave:!0};await te.setItem(Xt,s),yo=e,console.info("Game auto-saved successfully")}catch(e){console.error("Failed to auto-save game:",e)}}async function ci(a,e){try{let r=await(async function(){try{let o=(await Yo()).transaction($e,"readonly").objectStore($e);return await new Promise((s,I)=>{let l=o.get(Vo);l.onerror=()=>I(l.error),l.onsuccess=()=>s(l.result)})}catch(o){return console.error("[SharedSave] Failed to retrieve shared save:",o),null}})();if(!r||!r.data)return!1;let n=a.document.createElement("dialog");n.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let g=new Date(r.timestamp).toLocaleString();return n.innerHTML=`
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
    `,e.append(n),n.showModal(),new Promise(o=>{n.querySelector("#sharedSaveYes").addEventListener("click",async()=>{try{let s=r.data;if(await ht(a,e,s),s?.type==="pdf"){let c=Pe(a,s.contents,"application/pdf"),[t]=await At(new File([c],"sprite-garden-game-card.png"));s=JSON.parse(await mt(new Blob([t.data])))}let{worldSeed:I}=s.config,l=e.getElementById("worldSeedInput"),i=e.getElementById("currentSeed");l instanceof HTMLInputElement&&(l.value=I),i&&(i.textContent=I),await rn(),console.log("Shared save loaded successfully")}catch(s){console.error("Failed to load shared save:",s)}n.close(),n.remove(),o(!0)}),n.querySelector("#sharedSaveNo").addEventListener("click",async()=>{await rn(),n.close(),n.remove(),o(!1)}),n.addEventListener("cancel",async()=>{await rn(),o(!1)})})}catch(r){return console.error("Failed to check for shared save:",r),!1}}var Wn=class{constructor(e,r,n){this.gThis=e,this.doc=r,this.shadow=n,this.dialog=null,this.savedGames=[],this.close=this.close.bind(this),this.deleteSelectedGame=this.deleteSelectedGame.bind(this),this.getPDFGameStateAttachment=this.getPDFGameStateAttachment.bind(this),this.getSelectedGameAsPNG=this.getSelectedGameAsPNG.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this),this.handleDragLeave=this.handleDragLeave.bind(this),this.handleDragOver=this.handleDragOver.bind(this),this.handleFileDrop=this.handleFileDrop.bind(this),this.handleFileSelect=this.handleFileSelect.bind(this),this.handleWorldNameInput=this.handleWorldNameInput.bind(this),this.loadSelectedGame=this.loadSelectedGame.bind(this),this.saveCurrentGame=this.saveCurrentGame.bind(this),this.shareSelectedGame=this.shareSelectedGame.bind(this),this.shareSelectedGameAsPDF=this.shareSelectedGameAsPDF.bind(this)}async createDialog(){this.dialog&&this.dialog.remove();let e=this.doc.createElement("dialog");return e.setAttribute("id","storageDialog"),e.style.cssText=`
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
        <h4 style="margin: 0.625rem 0">Saved Games in Storage</h4>
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
            accept=".sgs,.pdf,.txt,text/plain,application/pdf,application/gzip,application/*"
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
            id="shareSelectedAsPdfBtn"
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
            Share Selected As PDF
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
    `,this.shadow.append(e),this.dialog=e,await this.loadSavedGamesList(),this.initEventListeners(),this.updateButtonStates(),e}async loadSavedGamesList(){this.savedGames=[];let e=await te.keys(),r=await te.getItem(Xt);r&&this.savedGames.push({key:Xt,name:r.name,timestamp:r.timestamp,data:r.data,isAutoSave:!0});for(let n of e)if(n.startsWith(bo)){let g=await te.getItem(n);g&&this.savedGames.push({key:n,name:g.name,timestamp:g.timestamp,data:g.data,isAutoSave:g.isAutoSave||!1})}this.savedGames.sort((n,g)=>g.timestamp-n.timestamp),this.renderSavedGamesList()}renderSavedGamesList(){let e=this.dialog.querySelector("#savedGamesList");this.savedGames.length!==0?(e.innerHTML=this.savedGames.map((r,n)=>`
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
            ${r.isAutoSave?"background: var(--sg-color-blue-50);":""}
          "
        >
          <div>
            <div style="font-weight: bold; ${r.isAutoSave?"color: var(--sg-color-blue-700);":""}">${r.name}</div>
            <div style="font-size: 0.75rem; color: var(--sg-color-neutral-950);">
              ${new Date(r.timestamp).toLocaleString()}
            </div>
          </div>
          <input
            name="selectedGame"
            style="margin-left: 0.625rem"
            type="radio"
            value="${n}"
          />
        </div>
    `).join(""),e.querySelectorAll(".saved-game-item").forEach(r=>{r.addEventListener("click",n=>{if(n.target instanceof HTMLElement&&n.target.getAttribute("type")!=="radio"){let g=r.querySelector('input[type="radio"]');g instanceof HTMLInputElement&&(g.checked=!0),this.updateButtonStates()}})}),e.querySelectorAll('input[type="radio"]').forEach(r=>{r.addEventListener("change",()=>this.updateButtonStates())})):e.innerHTML=`
      <div style="padding: 1.25rem; text-align: center; color: var(--sg-color-neutral-950);">
        No saved games found
      </div>
    `}updateButtonStates(){let e=!!this.dialog.querySelector('input[name="selectedGame"]:checked'),r=this.dialog.querySelector("#loadSelectedBtn");r instanceof HTMLButtonElement&&(r.disabled=!e,r.style.opacity=e?"1":"0.5",r.style.cursor=e?"pointer":"not-allowed");let n=this.dialog.querySelector("#deleteSelectedBtn");n instanceof HTMLButtonElement&&(n.disabled=!e,n.style.opacity=e?"1":"0.5",n.style.cursor=e?"pointer":"not-allowed");let g=this.dialog.querySelector("#shareSelectedBtn"),o=this.dialog.querySelector("#shareSelectedAsPdfBtn");if(g instanceof HTMLButtonElement&&o instanceof HTMLButtonElement){let s=!1;if(typeof navigator<"u"&&navigator.canShare!==void 0)try{let I=new File([],"test");s=navigator.canShare({files:[I]}),g.disabled=!e,g.style.opacity=s?"1":"0.5",g.style.cursor=s?"pointer":"not-allowed",o.disabled=!e,o.style.opacity=s?"1":"0.5",o.style.cursor=s?"pointer":"not-allowed"}catch{g.disabled=!0,g.setAttribute("hidden","hidden"),g.style.opacity="0.5",g.style.cursor="not-allowed",o.disabled=!0,o.setAttribute("hidden","hidden"),o.style.opacity="0.5",o.style.cursor="not-allowed"}else g.disabled=!0,g.setAttribute("hidden","hidden"),g.style.opacity="0.5",g.style.cursor="not-allowed",o.disabled=!0,o.setAttribute("hidden","hidden"),o.style.opacity="0.5",o.style.cursor="not-allowed";s&&(g.removeAttribute("hidden"),Fo.get()&&o.removeAttribute("hidden"))}}handleWorldNameInput(e){/^[\p{L}\p{N}\p{P}\s]+$/u.test(e.key)&&e.stopPropagation(),e.key==="Enter"&&this.saveCurrentGame()}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),r=this.dialog.querySelector("#saveToStorageBtn"),n=this.dialog.querySelector("#loadSelectedBtn"),g=this.dialog.querySelector("#deleteSelectedBtn"),o=this.dialog.querySelector("#shareSelectedBtn"),s=this.dialog.querySelector("#shareSelectedAsPdfBtn"),I=this.dialog.querySelector("#worldNameInput"),l=this.dialog.querySelector("#gameDropZone"),i=this.dialog.querySelector("#fileInput");e.addEventListener("click",this.close),r.addEventListener("click",this.saveCurrentGame),n.addEventListener("click",this.loadSelectedGame),g.addEventListener("click",this.deleteSelectedGame),o.addEventListener("click",this.shareSelectedGame),s.addEventListener("click",this.shareSelectedGameAsPDF),I.addEventListener("keydown",this.handleWorldNameInput),l.addEventListener("dragover",this.handleDragOver),l.addEventListener("dragleave",this.handleDragLeave),l.addEventListener("drop",this.handleFileDrop),i.addEventListener("change",this.handleFileSelect),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),r=this.dialog.querySelector("#saveToStorageBtn"),n=this.dialog.querySelector("#loadSelectedBtn"),g=this.dialog.querySelector("#deleteSelectedBtn"),o=this.dialog.querySelector("#shareSelectedBtn"),s=this.dialog.querySelector("#shareSelectedAsPdfBtn"),I=this.dialog.querySelector("#worldNameInput"),l=this.dialog.querySelector("#gameDropZone"),i=this.dialog.querySelector("#fileInput");e.removeEventListener("click",this.close),r.removeEventListener("click",this.saveCurrentGame),n.removeEventListener("click",this.loadSelectedGame),g.removeEventListener("click",this.deleteSelectedGame),o.removeEventListener("click",this.shareSelectedGame),s.removeEventListener("click",this.shareSelectedGameAsPDF),I.removeEventListener("keydown",this.handleWorldNameInput),l.removeEventListener("dragover",this.handleDragOver),l.removeEventListener("dragleave",this.handleDragLeave),l.removeEventListener("drop",this.handleFileDrop),i.removeEventListener("change",this.handleFileSelect),this.dialog.removeEventListener("click",this.handleDialogClick)}handleDragOver(e){e.preventDefault(),e.stopPropagation();let r=this.dialog.querySelector("#gameDropZone");r instanceof HTMLElement&&(r.style.borderColor="var(--sg-color-blue-500)",r.style.backgroundColor="rgba(100, 200, 255, 0.1)")}handleDragLeave(e){e.preventDefault(),e.stopPropagation();let r=this.dialog.querySelector("#gameDropZone");r instanceof HTMLElement&&(r.style.borderColor="var(--sg-color-gray-400)",r.style.backgroundColor="")}handleFileDrop(e){e.preventDefault(),e.stopPropagation();let r=this.dialog.querySelector("#gameDropZone");r instanceof HTMLElement&&(r.style.borderColor="var(--sg-color-gray-400)",r.style.backgroundColor="");let n=e.dataTransfer.files;this.processFiles(n)}handleFileSelect(e){let r=e.target.files;this.processFiles(r)}async processFiles(e){for(let r of e)if(r.name.endsWith(".sgs")||r.name.endsWith(".txt")||r.name.endsWith(".pdf"))try{let n=await r.arrayBuffer();await this.loadGameFromFile(n,r.name)}catch(n){console.error(`Failed to load file ${r.name}:`,n),alert(`Failed to load file: ${r.name}. Check console for details.`)}else console.warn(`Skipping file ${r.name}: invalid extension`)}async loadGameFromFile(e,r){try{let n;if(r.endsWith(".txt"))n=new TextDecoder().decode(e);else if(r.endsWith(".pdf")){let[i]=await At(e);n=await mt(new Blob([i.data]))}else{let i=new this.gThis.Blob([e],{type:"application/gzip"});if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let c=i.stream().pipeThrough(new this.gThis.DecompressionStream("gzip"));n=await(await new this.gThis.Response(c).blob()).text()}}let g=JSON.parse(n);await ht(this.gThis,this.shadow,g);let{worldSeed:o}=g.config,s=this.doc.getElementById("worldSeedInput"),I=this.doc.getElementById("currentSeed");s instanceof HTMLInputElement&&(s.value=o),I&&(I.textContent=o),console.log(`Game loaded from file: ${r}`);let l=this.dialog.querySelector("#fileInput");l instanceof HTMLInputElement&&(l.value=""),this.close()}catch(n){throw console.error(`Failed to process game file ${r}:`,n),n}}async saveCurrentGame(){let e=this.dialog.querySelector("#worldNameInput"),r;if(e instanceof HTMLInputElement&&(r=e.value.trim()),r)try{let n=Dt(this.gThis),g=JSON.stringify(n),o=await Yt(g),s=await o.arrayBuffer(),I=_o(this.gThis,s),l={name:r,timestamp:Date.now(),data:I},i=`${bo}${Date.now()}-${r.replace(/[^a-zA-Z0-9]/g,"_")}`;await te.setItem(i,l),console.log("Game saved to storage:",r),e instanceof HTMLInputElement&&(e.value=""),await this.loadSavedGamesList()}catch(n){console.error("Failed to save game to storage:",n),alert("Failed to save game. Check console for details.")}else alert("Please enter a world name")}async loadSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let r;if(e instanceof HTMLInputElement){let n=parseInt(e.value);r=this.savedGames[n]}try{let n=Pe(this.gThis,r.data,"application/gzip"),g;if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let i=n.stream().pipeThrough(new this.gThis.DecompressionStream("gzip"));g=await(await new this.gThis.Response(i).blob()).text()}let o=JSON.parse(g);await ht(this.gThis,this.shadow,o);let{worldSeed:s}=o.config,I=this.doc.getElementById("worldSeedInput"),l=this.doc.getElementById("currentSeed");I instanceof HTMLInputElement&&(I.value=s),l&&(l.textContent=s),console.log("Game loaded from storage:",r.name),this.close()}catch(n){console.error("Failed to load game from storage:",n),alert("Failed to load game. Check console for details.")}}async deleteSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let r;if(e instanceof HTMLInputElement){let n=parseInt(e.value);r=this.savedGames[n]}if(confirm(`Are you sure you want to delete "${r.name}"?`))try{await te.removeItem(r.key),console.log("Game deleted from storage:",r.name),await this.loadSavedGamesList()}catch(n){console.error("Failed to delete game from storage:",n),alert("Failed to delete game. Check console for details.")}}async getPDFGameStateAttachment(){let e=Gn(),r=await import("https://cdn.jsdelivr.net/npm/pdf-lib/+esm"),{PDFDocument:n,StandardFonts:g,rgb:o}=r,{game:s,pngSave:I}=await this.getSelectedGameAsPNG(),l=await I.arrayBuffer(),i;if("DecompressionStream"in this.gThis){let se=Pe(this.gThis,s.data,"application/gzip").stream().pipeThrough(new this.gThis.DecompressionStream("gzip")),ge=await new this.gThis.Response(se).blob(),ee=await ge.text();i=JSON.parse(ee)}let c=await n.create(),t=c.addPage([800,1100]),{width:d,height:A}=t.getSize(),u=await c.embedFont(g.HelveticaBold),b=await c.embedFont(g.Helvetica);o(.22,.55,.85);let p=o(.68,.68,.68),y=o(.97,.97,.97),f=o(.6,.6,.6),v=o(.1,.1,.1),S=o(.2,.65,.35);t.drawRectangle({x:0,y:0,width:d,height:A,color:y});let R="Sprite Garden",T=u.widthOfTextAtSize(R,38),k=(d-T)/2,X=A-80;t.drawText(R,{x:k+2,y:X-2,size:38,font:u,color:p}),t.drawText(R,{x:k,y:X,size:38,font:u,color:S});let J=c.context.obj({Type:"Annot",Subtype:"Link",Rect:[k,X,k+T,X+38],Border:[0,0,0],A:c.context.obj({Type:"Action",S:"URI",URI:r.PDFString.of("https://kherrick.github.io/sprite-garden/")})}),D="Game Save",Q=(d-u.widthOfTextAtSize(D,24))/2,me=X-35;t.drawText(D,{x:Q,y:me,size:24,font:b,color:v});let ce=await c.embedPng(l),$=.65*ce.width,ae=.65*ce.height,Ie=me-ae-40,pe=(d-$)/2;t.drawRectangle({x:pe-4,y:Ie-4,width:$+8,height:ae+8,borderWidth:1,borderColor:f,color:o(1,1,1)}),t.drawImage(ce,{x:pe,y:Ie,width:$,height:ae});let le=i?.config?.worldSeed||"",ne=le?`https://kherrick.github.io/sprite-garden/?seed=${le}`:"https://kherrick.github.io/sprite-garden/",we=c.context.obj({Type:"Annot",Subtype:"Link",Rect:[pe,Ie,pe+$,Ie+ae],Border:[0,0,0],A:c.context.obj({Type:"Action",S:"URI",URI:r.PDFString.of(ne)})}),Ze=t.node.get(r.PDFName.of("Annots"));Ze?(Ze.push(J),Ze.push(we)):t.node.set(r.PDFName.of("Annots"),c.context.obj([J,we]));let de=i?.state?.seedInventory||{},ot=Object.values(de).reduce((se,ge)=>se+ge,0),Ke=Ie-30-390,Ue=d-160,ze=(d-Ue)/2;t.drawRectangle({x:ze,y:Ke,width:Ue,height:390,borderWidth:2,borderColor:v,color:y});let rt=new Date().toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),q=Ke+390-25,he=ze+20,Te=18;t.drawText("Saved On:",{x:he,y:q,size:12,font:u,color:v}),t.drawText(rt,{x:he+u.widthOfTextAtSize("Saved On: ",12),y:q,size:12,font:b,color:v}),q-=Te,t.drawText("World Name:",{x:he,y:q,size:12,font:u,color:v}),t.drawText(s.name,{x:he+u.widthOfTextAtSize("World Name: ",12),y:q,size:12,font:b,color:v}),q-=Te,t.drawText("Total Seeds:",{x:he,y:q,size:12,font:u,color:v}),t.drawText(`${ot}`,{x:he+u.widthOfTextAtSize("Total Seeds: ",12),y:q,size:12,font:b,color:v}),q-=Te,t.drawText("Game Time:",{x:he,y:q,size:12,font:u,color:v}),t.drawText(`${Math.floor(i?.state?.gameTime||0)}`,{x:he+u.widthOfTextAtSize("Game Time: ",12),y:q,size:12,font:b,color:v}),q-=26,t.drawText("Seed Inventory:",{x:he,y:q,size:11,font:u,color:v}),q-=Te;let Ge=(Ue-60)/2,ue=0,oe=q,it=Object.entries(de).sort((se,ge)=>se[0].localeCompare(ge[0]));for(let[se,ge]of it){let ee=he+ue*Ge,Je=se.replace(/_/g," ");t.drawText(`${Je}: ${ge}`,{x:ee,y:oe,size:9,font:b,color:v}),ue++,ue>=2&&(ue=0,oe-=14)}ue!==0&&(oe-=14),q=oe-8,t.drawText("Materials Inventory:",{x:he,y:q,size:11,font:u,color:v}),q-=Te;let Se=i?.state?.materialsInventory||{};ue=0,oe=q;let Me=Object.entries(Se).sort((se,ge)=>se[0].localeCompare(ge[0]));for(let[se,ge]of Me){let ee=he+ue*Ge,Je=se.replace(/_/g," ");t.drawText(`${Je}: ${ge}`,{x:ee,y:oe,size:9,font:b,color:v}),ue++,ue>=2&&(ue=0,oe-=14)}let Xe="Generated by Sprite Garden";t.drawText(Xe,{x:(d-b.widthOfTextAtSize(Xe,12))/2,y:40,size:12,font:b,color:S});let Ne=`sprite-garden-game-card-${e}.png`;c.attach(new Uint8Array(l),Ne,{mimeType:"image/png",description:"Sprite Garden Game Card"});let De=await c.save(),He=new Blob([De],{type:"application/pdf"});return{game:s,file:new File([He],`Sprite-Garden-Game-Save-${e}.pdf`,{type:He.type,lastModified:Date.now()})}}async getSelectedGameAsPNG(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let r,n;if(e instanceof HTMLInputElement){let o=parseInt(e.value);r=this.savedGames[o]}if(!("DecompressionStream"in globalThis))throw new Error("DecompressionStream not supported");{let o=Pe(globalThis,r.data,"application/gzip").stream().pipeThrough(new globalThis.DecompressionStream("gzip"));n=await(await new globalThis.Response(o).blob()).text()}let g=Ko(globalThis.document,"sprite-garden").querySelector("canvas");return{game:r,pngSave:await(async function(o,s,I=400){let l=JSON.stringify(s),i=document.createElement("canvas");i.width=I,i.height=I;let c=i.getContext("2d"),t=o.width,d=o.height,A=Math.min(t,d),u=(t-A)/2,b=(d-A)/2;c.drawImage(o,u,b,A,A,0,0,I,I);let p=await new Promise(v=>i.toBlob(v,"image/png"));if(!p)throw new Error("Failed to create PNG blob");let y=await p.arrayBuffer(),f=si(new Uint8Array(y),l);return new Blob([f],{type:"image/png"})})(g,n)}}async shareSelectedGameAsPDF(){let{game:e,file:r}=await this.getPDFGameStateAttachment();try{typeof navigator<"u"&&navigator.canShare!==void 0&&navigator.canShare({files:[r]})?(await navigator.share({files:[r],title:"Sprite Garden Game Save",url:"https://kherrick.github.io/sprite-garden",text:`Visit Sprite Garden, then 'Load' and checkout my world: ${e.name}

`}),console.log("Game shared successfully:",e.name)):alert("Web Share API is not available on this device or browser.")}catch(n){n.name!=="AbortError"?(console.error("Failed to share game:",n),alert("Failed to share game. Check console for details.")):console.log("Game sharing was cancelled by the user")}}async shareSelectedGame(){let e=Gn(),r=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!r)return;let n,g;if(r instanceof HTMLInputElement){let o=parseInt(r.value);n=this.savedGames[o]}if(!("DecompressionStream"in globalThis))throw new Error("DecompressionStream not supported");{let o=Pe(globalThis,n.data,"application/gzip").stream().pipeThrough(new globalThis.DecompressionStream("gzip"));g=await(await new globalThis.Response(o).blob()).text()}try{let o=new Blob([g],{type:"text/plain"}),s=`Sprite-Garden-Game-Save-${e}.json.txt`,I=new File([o],s,{type:"text/plain"});typeof navigator<"u"&&navigator.canShare!==void 0&&navigator.canShare({files:[I]})?(await navigator.share({files:[I],title:"Sprite Garden Game Save",url:"https://kherrick.github.io/sprite-garden",text:`Visit Sprite Garden, then 'Load' and checkout my world: ${n.name}

`}),console.log("Game shared successfully:",n.name)):alert("Web Share API is not available on this device or browser.")}catch(o){o.name!=="AbortError"?(console.error("Failed to share game:",o),alert("Failed to share game. Check console for details.")):console.log("Game sharing was cancelled by the user")}}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function In(a,e){return Object.entries(e).map(([r,n])=>`${a}${r}${a==="--sg-color-"?"":"-color"}: ${n};`).join(`
`)}var wn=!0,Ot=new H.subtle.Watcher(()=>{wn&&(wn=!1,globalThis.queueMicrotask(di))});function di(){wn=!0;for(let a of Ot.getPending())a.get();Ot.watch()}function Ve(a){let e,r=new H.Computed(()=>{typeof e=="function"&&e(),e=a()});return Ot.watch(r),r.get(),()=>{Ot.unwatch(r),typeof e=="function"&&e(),e=void 0}}function Ii(a,e,r,n,g,o,s,I,l,i,c){Ve(()=>{(function(t,d,A){Object.keys(A).forEach(u=>{let b=u.toLowerCase(),p=t?.getElementById(`${b}Count`);try{p.textContent=A[u]}catch(y){console.error(y)}}),Object.keys(d).forEach(u=>{let b=u.toLowerCase(),p=t?.getElementById(`${b}Count`);if(p)try{p.textContent=d[u]}catch(y){console.error(y)}})})(a,s.get(),I.get())}),Ve(()=>{let t=a.getElementById("worldSeedInput");if(t instanceof HTMLInputElement&&!t.value){let d=a.getElementById("currentSeed"),A=g.get();if(d&&A)return t.value=A,void(d.textContent=A);let u=String(_e());t.value=u,d.textContent=u}}),Ve(()=>{let t=o.get(),d=a.getElementById("gameTime");d&&(d.textContent=String(Math.floor(t)))}),Ve(()=>{let t=c.get(),d=a.getElementById("viewModeText");d&&(d.textContent=t==="normal"?"View Normal":"View X-Ray")}),Ve(()=>{let t=n.get(),d=a.getElementById("fogModeText");d&&(d.textContent=t==="fog"?"Fog":"Clear")}),Ve(()=>{let t=r.get(),d=a.getElementById("breakModeText");d&&(d.textContent=t==="regular"?"Dig Regular":"Dig Extra")}),Ve(()=>{let t=e.get(),d=a.getElementById("seedCount");d&&(d.textContent=t)}),Ve(()=>{let t=i.get(),d=a.getElementById("selectedSeed");d&&(d.textContent=t?.replace("_"," ")||"None")}),Ve(()=>{let t=l.get(),d=a.getElementById("selectedMaterial");d&&(d.textContent=t?.replace("_"," ")||"None")})}function Sn(a,e,r,n){return a.set(!1),new Ct(r,e,n)}function zo(a){return Object.fromEntries(Object.entries(a).filter(([e,r])=>r.isSeed).map(([e,r])=>[r.id,e]))}function Zn(a,e,r,n,g,o,s){for(let I=a-r;I<=a+r;I++)for(let l=e-r;l<=e+r;l++)I>=0&&I<s&&l>=0&&l<o&&Math.sqrt((I-a)**2+(l-e)**2)<=r&&g.getTile(I,l)!==n.BEDROCK&&g.setTile(I,l,n.AIR)}function ui(a,e,r,n,g,o,s,I,l){let i=r,c=n;for(let t=0;t<e;t++){a+=.3*(Math.random()-.5),i+=Math.cos(a),c+=Math.sin(a);for(let d=-o;d<=o;d++)for(let A=-o;A<=o;A++){let u=Math.floor(i+d),b=Math.floor(c+A);u>=0&&u<l&&b>=0&&b<I&&Math.sqrt(d*d+A*A)<=o&&s.getTile(u,b)!==g.BEDROCK&&s.setTile(u,b,g.AIR)}Math.random()<.1&&Zn(Math.floor(i),Math.floor(c),2+Math.floor(2*Math.random()),g,s,I,l)}}var Qo=Math.sqrt(3),Ci=.5*(Qo-1),ct=(3-Qo)/6,vo=a=>0|Math.floor(a),fo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Ai(a=Math.random){let e=(function(g){let s=new Uint8Array(512);for(let I=0;I<256;I++)s[I]=I;for(let I=0;I<255;I++){let l=I+~~(g()*(256-I)),i=s[I];s[I]=s[l],s[l]=i}for(let I=256;I<512;I++)s[I]=s[I-256];return s})(a),r=new Float64Array(e).map(g=>fo[g%12*2]),n=new Float64Array(e).map(g=>fo[g%12*2+1]);return function(g,o){let s=0,I=0,l=0,i=(g+o)*Ci,c=vo(g+i),t=vo(o+i),d=(c+t)*ct,A=g-(c-d),u=o-(t-d),b,p;A>u?(b=1,p=0):(b=0,p=1);let y=A-b+ct,f=u-p+ct,v=A-1+2*ct,S=u-1+2*ct,R=255&c,T=255&t,k=.5-A*A-u*u;if(k>=0){let D=R+e[T];k*=k,s=k*k*(r[D]*A+n[D]*u)}let X=.5-y*y-f*f;if(X>=0){let D=R+b+e[T+p];X*=X,I=X*X*(r[D]*y+n[D]*f)}let J=.5-v*v-S*S;if(J>=0){let D=R+1+e[T+1];J*=J,l=J*J*(r[D]*v+n[D]*S)}return 70*(s+I+l)}}var Go,Wo={exports:{}},mi=Jn((Go||(Go=1,Wo.exports=(function(){return a.importState=function(r){var n=new a;return n.importState(r),n},a;function a(){return(function(r){var n=0,g=0,o=0,s=1;r.length==0&&(r=[+new Date]);var I=e();n=I(" "),g=I(" "),o=I(" ");for(var l=0;l<r.length;l++)(n-=I(r[l]))<0&&(n+=1),(g-=I(r[l]))<0&&(g+=1),(o-=I(r[l]))<0&&(o+=1);I=null;var i=function(){var c=2091639*n+23283064365386963e-26*s;return n=g,g=o,o=c-(s=0|c)};return i.next=i,i.uint32=function(){return 4294967296*i()},i.fract53=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.version="Alea 0.9",i.args=r,i.exportState=function(){return[n,g,o,s]},i.importState=function(c){n=+c[0]||0,g=+c[1]||0,o=+c[2]||0,s=+c[3]||0},i})(Array.prototype.slice.call(arguments))}function e(){var r=4022871197,n=function(g){g=g.toString();for(var o=0;o<g.length;o++){var s=.02519603282416938*(r+=g.charCodeAt(o));s-=r=s>>>0,r=(s*=r)>>>0,r+=4294967296*(s-=r)}return 23283064365386963e-26*(r>>>0)};return n.version="Mash 0.9",n}})()),Wo.exports)),Rn=null,Ln=null;function bt(a){a!==Ln&&(Ln=a,Rn=Ai(mi(a)))}function Ft(a,e,r=0,n=3,g=.5,o=.02){Rn&&Ln===r||bt(r);let s=0,I=1,l=o,i=0;for(let c=0;c<n;c++)s+=Rn(a*l,e*l)*I,i+=I,I*=g,l*=2;return s/i}function Tt(a,e=0){return Ft(a,0,e,4,.6,.015)}function wo(a,e=500){return Ft(a,0,e,2,.8,.008)}function So(a,e=2e3){return Ft(a,0,e,2,.5,.012)}function hi(a,e=0,r=2e3,n=2,g=.5,o=.01){return Ft(a,e,r,n,g,o)}function bi(a,e,r){bt(r);let n=[];for(let g=0;g<a;g++){let o=e;o+=15*Tt(g,r),o+=8*Tt(g,r+100),o+=4*Tt(g,r+200);let s=Tt(g,r+300);s>.6&&(o+=20*(s-.6)),o=Math.max(10,Math.min(1.5*e,o)),n[g]=Math.floor(o)}return(function(g,o=1){let s=[...g];for(let I=0;I<o;I++){for(let l=1;l<g.length-1;l++)s[l]=Math.floor((g[l-1]+2*g[l]+g[l+1])/4);g.splice(0,g.length,...s)}return g})(n,2)}function pi(a,e,r,n,g,o,s){let I=Math.floor(n/2);for(let l=-I;l<=I;l++)for(let i=0;i<=Math.floor(.3*n);i++){let c=e+l,t=r+i+1;c>=0&&c<g&&t>=0&&t<o&&Math.sqrt(l*l+i*i*2)<=I&&a.getTile(c,t).id!==s.SAND.id&&a.setTile(c,t,s.WATER)}}function yi(a,e,r,n,g,o){let s=r+1;if(e>=0&&e<n&&s>=0&&s<g){a.getTile(e,s).id!==o.SAND.id&&a.setTile(e,s,o.WATER);let I=r+2;I<g&&Math.random()<.7&&a.getTile(e,I).id!==o.SAND.id&&a.setTile(e,I,o.WATER)}}function vi(a,e,r,n,g,o){let s=r;if(e>=0&&e<n&&s>=0&&s<g){let I=a.getTile(e,s);I===o.AIR&&I.id!==o.SAND.id&&a.setTile(e,s,o.WATER)}}function qo(a,e,r){bt(r);let n=wo(a,r+600),g=wo(a,r+700);return n<-.4?e.TUNDRA:n>.4&&g<-.2?e.DESERT:g>.3?e.SWAMP:e.FOREST}var jn=a=>zo(a);function $o(a,e,r,n,g,o){let s=r.get();if(s.size===0||(e.frameCounter++,e.frameCounter<e.updateInterval))return;e.frameCounter=0;let I=new Set,l=!1,i=n.get();for(let c of s){let[t,d]=c.split(",").map(Number),A=i.getTile(t,d);if(A===a.WATER){let u=[{x:t-1,y:d},{x:t+1,y:d},{x:t,y:d-1},{x:t,y:d+1}],b=!1;for(let p of u)if(p.x>=0&&p.x<o&&p.y>=0&&p.y<g&&i.getTile(p.x,p.y)===a.LAVA){b=!0;break}if(b){i.setTile(t,d,a.PUMICE);for(let p of u)p.x>=0&&p.x<o&&p.y>=0&&p.y<g&&I.add(`${p.x},${p.y}`);l=!0;continue}if(d+1<g){let p=i.getTile(t,d+1);if(p===a.AIR){i.setTile(t,d,a.AIR),i.setTile(t,d+1,a.WATER),I.add(`${t},${d+1}`),t>0&&I.add(`${t-1},${d+1}`),t<o-1&&I.add(`${t+1},${d+1}`),d+2<g&&I.add(`${t},${d+2}`),l=!0;continue}if(p===a.LAVA){i.setTile(t,d,a.AIR),i.setTile(t,d+1,a.PUMICE),l=!0;continue}if(p&&p.solid){let y=t>0&&i.getTile(t-1,d)===a.AIR,f=t<o-1&&i.getTile(t+1,d)===a.AIR,v=y&&d+1<g&&i.getTile(t-1,d+1)===a.AIR,S=f&&d+1<g&&i.getTile(t+1,d+1)===a.AIR;if(v||S){let R=0;R=v&&S?Math.random()<.5?-1:1:v?-1:1;let T=t+R;i.setTile(t,d,a.AIR),i.setTile(T,d,a.WATER),I.add(`${T},${d}`),I.add(`${T},${d+1}`),l=!0}else if(y||f){let R=0;R=y&&f?Math.random()<.5?-1:1:y?-1:1;let T=t+R;if(d+1<g){let k=i.getTile(T,d+1);k&&k.solid&&(i.setTile(t,d,a.AIR),i.setTile(T,d,a.WATER),I.add(`${T},${d}`),l=!0)}}}}}else A!==a.WATER&&d>0&&i.getTile(t,d-1)===a.WATER&&I.add(`${t},${d-1}`)}if(l)for(let c of I){let[t,d]=c.split(",").map(Number);for(let A=-2;A<=2;A++)for(let u=-2;u<=2;u++){let b=t+A,p=d+u;b>=0&&b<o&&p>=0&&p<g&&i.getTile(b,p)===a.WATER&&p+1<g&&i.getTile(b,p+1)===a.AIR&&I.add(`${b},${p}`)}}l&&I.size>0?r.set(I):r.set(new Set)}function fi(a,e,r,n,g,o){console.log(`Generating world with seed: ${n}`);let s=new nt(o,g),I=bi(o,e,n);for(let t=0;t<o;t++){let d=qo(t,a,n)||a.FOREST,A=I[t];for(let u=0;u<g;u++)if(u>A){let b=u-A;b<2?d.surfaceTile===r.GRASS||d.surfaceTile===r.SNOW?s.setTile(t,u,d.surfaceTile):s.setTile(t,u,d.subTile):b<_e(20,50)?Math.random()<.1?s.setTile(t,u,r.COAL):Math.random()<.95?s.setTile(t,u,d.subTile):s.setTile(t,u,r.STONE):b<_e(50,90)?Math.random()<.05?s.setTile(t,u,r.IRON):Math.random()<.02?s.setTile(t,u,r.GOLD):s.setTile(t,u,r.STONE):u>g-2?s.setTile(t,u,r.BEDROCK):u>g-4||Math.random()<.01?s.setTile(t,u,r.LAVA):s.setTile(t,u,r.STONE)}else u===A&&s.setTile(t,u,d.surfaceTile);if(d.trees&&Math.random()<.025){let u=_e(3,5),b=A,p=[];for(let v=0;v<u;v++){let S=b-v-1;S>=0&&(s.setTile(t,S,r.TREE_TRUNK),p.push({x:t,y:S,tile:r.TREE_TRUNK}))}let y=b-u,f=3;for(let v=-f;v<=f;v++)for(let S=-f;S<=1;S++){let R=t+v,T=y+S;Math.sqrt(v*v+S*S)<=f&&S<=0&&R>=0&&R<o&&T>=0&&T<g&&(R===t&&T>=y&&T<b||s.getTile(R,T)!==r.AIR||(s.setTile(R,T,r.TREE_LEAVES),p.push({x:R,y:T,tile:r.TREE_LEAVES})))}}if(d.crops.length>0&&Math.random()<.05){let u=d.crops[Math.floor(Math.random()*d.crops.length)],b=A-1;if(b>=0&&s.getTile(t,b)===r.AIR){s.setTile(t,b,u);let p=jn(r)[u.id];p&&Ye("seedInventory",y=>re(F({},y),{[p]:(y&&y[p]?y[p]:0)+2}))}}}(function(t,d,A,u,b){let p=[];for(let y=0;y<25;y++)p.push({x:Math.floor(Math.random()*b),y:t+5+Math.floor(Math.random()*(u-t-15)),size:3+Math.floor(8*Math.random()),branches:1+Math.floor(3*Math.random())});p.forEach(y=>{Zn(y.x,y.y,y.size,d,A,u,b);for(let f=0;f<y.branches;f++)ui(2*Math.PI*f/y.branches+.5*(Math.random()-.5),10+Math.floor(20*Math.random()),y.x,y.y,d,1+Math.floor(2*Math.random()),A,u,b)});for(let y=0;y<50;y++){let f=Math.floor(Math.random()*b),v=t+3+Math.floor(Math.random()*(u-t-10)),S=1+Math.floor(3*Math.random());Math.random()<.3&&Zn(f,v,S,d,A,u,b)}})(e,r,s,g,o),(function(t,d,A,u){for(let b=1;b<d-1;b++)for(let p=1;p<A-1;p++)t.getTile(b,p)===u.AIR&&[t.getTile(b-1,p),t.getTile(b+1,p),t.getTile(b,p-1),t.getTile(b,p+1)].some(y=>y&&y.solid)&&p>x.SURFACE_LEVEL.get()+5&&Math.random()<.5&&t.setTile(b,p,u.MOSS)})(s,o,g,r),(function(t,d,A,u,b){bt(b);let p=Math.max(A-30,60);for(let y=0;y<d;y++)if(hi(b)>.2){let f=Math.floor(6+10*Math.random()),v=Math.floor(4+6*Math.random()),S=5+Math.floor(Math.random()*(p-5));for(let R=0;R<f;R++)for(let T=0;T<v;T++){let k=y+R;k>=d||S+T>=A||(R!==0&&R!==f-1&&T!==0&&T!==v-1||Math.random()>.3)&&t.getTile(k,S+T)===u.AIR&&t.setTile(k,S+T,u.CLOUD)}y+=f+Math.floor(10*Math.random())}})(s,o,e,r,n),(function(t,d,A,u,b,p,y){if(t&&typeof t.getTile=="function"){bt(y);for(let f=0;f<A;f++){let v=d[f],S=So(f,parseInt(String(y))+2e3);v>b&&vi(t,f,v,A,u,p),S>.5&&v<b+5&&pi(t,f,v,Math.floor(15*(S-.4))+5,A,u,p),So(f,parseInt(String(y))+2500)>.5&&yi(t,f,v,A,u,p)}}else console.error("generateWaterSources: Invalid world object at entry",{hasWorld:!!t,worldType:typeof t,worldWidth:A,worldHeight:u})})(s,I,o,g,e,r,n);let l=new Set;for(let t=0;t<o;t++)for(let d=0;d<g;d++)s.getTile(t,d)===r.WATER&&l.add(`${t},${d}`);let i=new H.State(new Set(l)),c=new H.State(s);for(let t=0;t<100;t++){$o(r,{updateInterval:0,frameCounter:999,maxIterationsPerUpdate:0,checkRadius:0,dirtyRegions:new Set},i,c,o,g);let d=i.get();if(d.size===0)break;let A=new Set;d.forEach(u=>{let[b,p]=u.split(",").map(Number);A.add(u),b>0&&A.add(`${b-1},${p}`),b<o-1&&A.add(`${b+1},${p}`),p>0&&A.add(`${b},${p-1}`),p<g-1&&A.add(`${b},${p+1}`)}),i.set(A)}return console.log("World generation complete!"),s}function Ut(a,e,r,n,g,o,s,I,l,i,c,t,d,A=null){let u;A!==null?(s.set(A),u=A):u=s?.get();let b=fi(a,e,n,u,g,o);l.set({}),I.set(0),i.set((function(S,R,T,k){let X={};for(let J=0;J<R;J++)for(let D=0;D<T;D++)if(S.getTile(J,D)===k.TREE_TRUNK){let Q=S.getTile(J,D+1);if(S.getTile(J,D-1),Q&&Q.solid&&Q!==k.TREE_TRUNK){let me=`${J},${D}`,ce=[],$=D;for(;$>=0&&S.getTile(J,$)===k.TREE_TRUNK;)ce.push({x:J,y:$,tile:k.TREE_TRUNK}),$--;let ae=$+1,Ie=3;for(let pe=-Ie;pe<=Ie;pe++)for(let le=-Ie;le<=Ie;le++){let ne=J+pe,we=ae+le;ne>=0&&ne<R&&we>=0&&we<T&&S.getTile(ne,we)===k.TREE_LEAVES&&ce.push({x:ne,y:we,tile:k.TREE_LEAVES})}X[me]={seedType:"WALNUT",mature:!0,blocks:ce,baseX:J,baseY:D}}}return X})(b,o,g,n));let p=(function(S,R=1){return Object.fromEntries(Object.values(S).map(T=>[T,R]))})(zo(n),1);d.set(p);let y=Object.fromEntries(Object.entries(n).filter(([S,R])=>!S.toLowerCase().startsWith("tree_")&&R.drops&&!R.isSeed).map(([S,R])=>[S,0]));t.set(y);let f=Math.floor(o/2),v=Math.floor(e-5);for(let S=f-25;S<f+25;S++)for(let R=v-5;R<v+5;R++)if(S>=0&&S<o&&R>=0&&R<g){let T=Math.floor(S),k=Math.floor(R);if(b.getTile(T,k)===n.AIR&&k+1<g&&b.getTile(T,k+1)&&b.getTile(T,k+1).solid){let X=!0;for(let J=k-2;J<=k;J++)if(J>=0&&b.getTile(T,J)!==n.AIR){X=!1;break}if(X){let J=re(F({},c.get()),{x:S*r,y:R*r,velocityX:0,velocityY:0,lastDirection:0});c.set(J)}}}return b}var z={isEnabled:!1,selectedTile:null,brushSize:1,isDragging:!1,lastPaintedTile:null};function Gi(a,e,r){(function(n,g,o){let s=n.getElementById("toggleMapEditor");s&&s.addEventListener("click",()=>{z.isEnabled=!z.isEnabled,(function(d,A,u){let b=d.getElementById("mapEditorText"),p=d.getElementById("mapEditorControls");b&&p&&(z.isEnabled?(b.textContent="Disable Editor",p.removeAttribute("hidden"),A.set("clear"),u.set("normal")):(A.set("fog"),b.textContent="Enable Editor",p.setAttribute("hidden","")))})(n,g,o)});let I=n.getElementById("brushSizeSelect");I&&I.addEventListener("change",d=>{d.target instanceof HTMLSelectElement&&(z.brushSize=parseInt(d.target.value))}),n.querySelectorAll(".tile-btn").forEach(d=>{d.addEventListener("click",A=>{if(A.target instanceof HTMLButtonElement){let u=A.target.dataset.tile;(function(b,p){z.selectedTile=p,console.log("Selected tile:",p,"Editor enabled:",z.isEnabled),b.querySelectorAll(".tile-btn").forEach(f=>{f.classList.remove("selected")});let y=b.querySelector(`[data-tile="${p}"]`);y&&y.classList.add("selected")})(n,u)}})});let l=n.getElementById("clearMapEditor");l&&l.addEventListener("click",()=>{confirm("Clear the entire map? This cannot be undone.")&&(function(){let d=x.TILES,A=x.WORLD_WIDTH.get(),u=x.WORLD_HEIGHT.get(),b=new nt(A,u);for(let p=0;p<A;p++)for(let y=0;y<u;y++)b.setTile(p,y,d.AIR);V.world.set(b),V.plantStructures.set({}),V.growthTimers.set({})})()});let i=n.getElementById("fillMapEditor");i&&i.addEventListener("click",()=>{z.selectedTile&&confirm(`Fill current layer with ${z.selectedTile}?`)&&(function(d){if(!z.selectedTile)return;let A=V.camera.get(),u=V.world.get(),b=x.TILES,p=x.TILE_SIZE.get(),y=b[z.selectedTile],f=x.WORLD_HEIGHT.get(),v=x.WORLD_WIDTH.get(),S=Math.floor(A.x/p),R=Math.floor(A.y/p),T=Math.min(v,S+Math.ceil(d.width/p)),k=Math.min(f,R+Math.ceil(d.height/p));for(let X=Math.max(0,S);X<T;X++)for(let J=Math.max(0,R);J<k;J++)u.setTile(X,J,y);V.world.set(u)})(n.getElementById("canvas"))});let c=n.getElementById("saveMapAsState");c&&c.addEventListener("click",()=>{(async function(){try{let d=Dt(globalThis);d.state.exploredMap=V.exploredMap.get().toObject();let A=x.WORLD_WIDTH.get(),u=x.SURFACE_LEVEL.get(),b=x.TILE_SIZE.get();d.state.player={x:A/2*b,y:u*b-50,width:6,height:8,velocityX:0,velocityY:0,speed:3,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0},d.state.gameTime=0,d.state.growthTimers={},d.state.plantStructures={};let p=JSON.stringify(d),y=new Blob([p],{type:"application/json"}),f=URL.createObjectURL(y),v=document.createElement("a");v.href=f,v.download=`sprite-garden-map-${Date.now()}.json`,document.body.append(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(f),console.log("Map saved as game state file"),alert('Map saved successfully! You can load this file using the "Load Game File" button.')}catch(d){console.error("Failed to save map as state:",d),alert("Failed to save map. Check console for details.")}})()});let t=n.getElementById("regenerateMap");t&&t.addEventListener("click",()=>{if(confirm("Regenerated world? This will lose all editor changes.")){let d=Ut(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.materialsInventory,V.seedInventory);V.world.set(d)}})})(a,e,r)}function Zo(a,e,r,n,g,o,s,I){if(!z.isEnabled||!z.selectedTile||typeof r?.get!="function")return!1;let l=r.get();return er(Math.floor((a+l.x)/g),Math.floor((e+l.y)/g),n,o,s,I),!0}function Mt(a,e,r,n,g,o,s,I,l=!1){if(!z.isEnabled||!z.selectedTile)return!1;l&&(z.isDragging=!0,z.lastPaintedTile=null);let i=r.get(),c=Math.floor((a+i.x)/g),t=Math.floor((e+i.y)/g),d=`${c},${t}`;return z.lastPaintedTile!==d&&(er(c,t,n,o,s,I),z.lastPaintedTile=d),!0}function er(a,e,r,n,g,o){let s=r[z.selectedTile];if(!s)return;let I=o.get(),l=Math.floor(z.brushSize/2),i=!1;for(let c=-l;c<=l;c++)for(let t=-l;t<=l;t++){let d=a+c,A=e+t;if(!(d<0||d>=g||A<0||A>=n)){if(z.brushSize>1&&Math.sqrt(c*c+t*t)>l+.5)continue;I.getTile(d,A)!==s&&(I.setTile(d,A,s),i=!0)}}i&&V.world.set(I)}var Ro,un={exports:{}},Cn,Nt,An,Lo,Eo,Wi=Jn((Ro||(Ro=1,Cn=un,Nt=un.exports||globalThis,An=function a(e){var r=this,n={},g=a;g.getNumberOfInstance=function(){return g._numberOfInstance},r.enable=function(){return n.listenCodeCharSequence(),n.listenCodeGestureSequence(),n.debug&&n.debug("Listener enabled for all."),r},r.enableKeyboardKeys=function(){return n.listenCodeCharSequence(),n.debug&&n.debug("Listener enabled for Keyboard Keys."),r},r.enableTouchGesture=function(){return n.listenCodeGestureSequence(),n.debug&&n.debug("Listener enabled for Touch Gesture."),r},r.disable=function(){return n.stopCodeCharSequence(),n.stopCodeGestureSequence(),n.debug&&n.debug("Listener disabled for all."),r},r.disableKeyboardKeys=function(){return n.stopCodeCharSequence(),n.debug&&n.debug("Listener disabled for Keyboard Keys."),r},r.disableTouchGesture=function(){return n.stopCodeGestureSequence(),n.debug&&n.debug("Listener disabled for Touch Gesture."),r},r.setListener=function(o){return n.stopCodeCharSequence(),n.stopCodeGestureSequence(),n.listener=o||document,n.listenCodeCharSequence(),n.listenCodeGestureSequence(),n.debug&&n.debug("Listener changed.",o),r},r.setCallback=function(o){return n.afterCodeSequenceCallback=typeof o=="function"&&o||n.defaultCallback,n.debug&&n.debug("Callback changed.",o),r},r.setOptions=function(o){return n.initOptions(o),r},n.keptLastCodeChar=function(){n.input.length>n.konamiCodeChar.length&&(n.input=n.input.substr(n.input.length-n.konamiCodeChar.length))},n.defaultCallback=function(){n.debug&&n.debug("Konami Code Sequence Entered. There is no action defined.")},n.checkIfCodeCharIsValid=function(){n.input===n.konamiCodeChar&&n.afterCodeSequenceCallback(r)},n.codeSequenceEventKeyDown=function(o){n.input+=o.keyCode,n.keptLastCodeChar(),n.checkIfCodeCharIsValid()},n.codeSequenceEventTouchMove=function(o){var s;o.touches.length===1&&n.capture===!0&&(s=o.touches[0],n.stopX=s.pageX,n.stopY=s.pageY,n.tap=!1,n.capture=!1,n.checkIfCodeGestureIsValid())},n.codeSequenceEventTouchEnd=function(){n.tap===!0&&n.checkIfCodeGestureIsValid()},n.codeSequenceEventTouchStart=function(o){n.startX=o.changedTouches[0].pageX,n.startY=o.changedTouches[0].pageY,n.tap=!0,n.capture=!0},n.stopCodeCharSequence=function(){n.listener.removeEventListener("keydown",n.codeSequenceEventKeyDown)},n.stopCodeGestureSequence=function(){n.listener.removeEventListener("touchstart",n.codeSequenceEventTouchStart),n.listener.removeEventListener("touchmove",n.codeSequenceEventTouchMove),n.listener.removeEventListener("touchend",n.codeSequenceEventTouchEnd)},n.listenCodeCharSequence=function(){n.stopCodeCharSequence(),n.listener.addEventListener("keydown",n.codeSequenceEventKeyDown)},n.listenCodeGestureSequence=function(){n.originalCodeGesture=n.konamiCodeGesture,n.stopCodeGestureSequence(),n.listener.addEventListener("touchstart",n.codeSequenceEventTouchStart),n.listener.addEventListener("touchmove",n.codeSequenceEventTouchMove),n.listener.addEventListener("touchend",n.codeSequenceEventTouchEnd,!1)},n.checkIfCodeGestureIsValid=function(){var o=Math.abs(n.startX-n.stopX),s=Math.abs(n.startY-n.stopY),I=n.startX-n.stopX<0?"rt":"lt",l=n.startY-n.stopY<0?"dn":"up",i=o>s?I:l;(i=n.tap===!0?"tp":i)===n.konamiCodeGesture.substr(0,2)?n.konamiCodeGesture=n.konamiCodeGesture.substr(2,n.konamiCodeGesture.length-2):n.konamiCodeGesture=n.originalCodeGesture,n.konamiCodeGesture.length===0&&(n.konamiCodeGesture=n.originalCodeGesture,n.afterCodeSequenceCallback(r))},n.checkDebugMode=function(o){o&&o.debug===!0?(n.debug=function(s,I){I!==void 0?console.log(s,I):console.log(s)},n.debug&&n.debug("Debug Mode On.")):n.debug=!1},n.initOptions=function(o){n.checkDebugMode(o),n.listener=o&&o.listener||document,n.afterCodeSequenceCallback=typeof o=="function"&&o||o&&typeof o.callback=="function"&&o.callback||n.defaultCallback},n.init=function(){n.input="",n.konamiCodeChar="38384040373937396665",n.konamiCodeGesture="upupdndnltrtltrttptp",n.startX=0,n.startY=0,n.stopX=0,n.stopY=0,n.tap=!1,n.capture=!1,g._numberOfInstance=g._numberOfInstance?g._numberOfInstance+1:1,n.initOptions(e),n.listenCodeCharSequence(),n.listenCodeGestureSequence()},n.init()},Lo=Nt.KonamiCode,(Eo=Nt.KonamiCode=An).noConflict=function(){return Nt.KonamiCode=Lo,Eo},Cn.exports&&(Cn.exports=An)),un.exports));function tr(a,e){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>a.apply(this,n),e)}}function wi(a,e,r,n,g,o=5){let s=r.get();for(let I=-o;I<=o;I++)for(let l=-o;l<=o;l++){let i=a+I,c=e+l;i>=0&&i<n&&c>=0&&c<g&&s.add(`${i},${c}`)}}function nr(a,e,r,n,g,o,s,I,l){if(n.blocks&&(Array.isArray(n.blocks)?n.blocks:Object.values(n.blocks)).forEach(t=>{t.x>=0&&t.x<l&&t.y>=0&&t.y<I&&s.setTile(t.x,t.y,o.AIR)}),n.seedType){let t=1+Math.floor(3*Math.random());Ye("seedInventory",y=>re(F({},y),{[n.seedType]:y[n.seedType]+t}));let d=`Harvested mature ${Re(n.seedType)}, gained ${t} seed${t>1?"s":""}.`,A="WOOD",u=o[n.seedType].drops,b=Array.isArray(u)?u.some(y=>y.toLowerCase().includes(y.toLowerCase())):u.toLowerCase().includes(A.toLowerCase()),p=b?1+Math.floor(3*Math.random()):0;p&&(Ye("materialsInventory",y=>re(F({},y),{[A]:y[A]+p})),d=`${d} Gained ${p} ${Re(A)}.`),console.log(d),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:d}}))}let i=F({},r.get()),c=F({},e.get());delete i[g],delete c[g],r.set(i),e.set(c)}function Si(a,e,r){for(let[n,g]of Object.entries(r.get()))if(g.mature&&g.blocks&&(Array.isArray(g.blocks)?g.blocks:Object.values(g.blocks)).find(o=>o.x===a&&o.y===e))return!0;return!1}function Zi(a,e,r,n,g,o,s,I,l,i="regular"){if(z.isEnabled){let A="Breaking disabled in map editor mode";return console.log(A),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:A}}))}let c=Math.floor((n.x+n.width/2)/o),t=Math.floor((n.y+n.height/2)/o),d=[];if(i==="regular")if(n.lastDirection!==0){let A=n.lastDirection>0?1:-1;for(let u=0;u<3;u++){let b=c+A,p=t-u;if(b<0||b>=l||p<0||p>=I)continue;let y=s.getTile(b,p);y&&y!==g.AIR&&y!==g.BEDROCK&&y!==g.LAVA&&y!==g.WATER&&d.push({x:b,y:p,tile:y,priority:u})}}else{let A=c,u=t+1;if(A>=0&&A<l&&u>=0&&u<I){let b=s.getTile(A,u);b&&b!==g.AIR&&b!==g.BEDROCK&&b!==g.LAVA&&b!==g.WATER&&d.push({x:A,y:u,tile:b,priority:1})}}else if(n.lastDirection!==0)for(let u=-1;u<=1;u++)for(let b=-1;b<=1;b++){let p=c+u*(n.lastDirection,1),y=t+b;if(p<0||p>=l||y<0||y>=I)continue;let f=s.getTile(p,y);if(f&&f!==g.AIR&&f!==g.BEDROCK&&f!==g.LAVA&&f!==g.WATER&&!Si(p,y,r)){let v=Math.abs(u)===0?1:2-Math.abs(u)/1;d.push({x:p,y,tile:f,priority:v})}}else for(let u=-1;u<=1;u++)for(let b=-1;b<=1;b++){let p=c+u,y=t+b;if(p<0||p>=l||y<0||y>=I)continue;let f=s.getTile(p,y);f&&f!==g.AIR&&f!==g.BEDROCK&&f!==g.LAVA&&f!==g.WATER&&d.push({x:p,y,tile:f,priority:1})}if(d.length>0){let A=r.get(),u=new Set;for(let S of d)for(let[R,T]of Object.entries(A))if(T.mature&&T.blocks&&(Array.isArray(T.blocks)?T.blocks:Object.values(T.blocks)).find(k=>k.x===S.x&&k.y===S.y)){u.add(R);break}if(u.size>0){for(let S of u)nr(a,e,r,A[S],S,g,s,I,l);return}let b=F({},e.get()),p=F({},A),y={},f={};d.forEach(S=>{let R=!1,T=null;for(let[k,X]of Object.entries(A)){if(!X.mature&&X.blocks){let J=Array.isArray(X.blocks)?X.blocks:Object.values(X.blocks);for(let D of J)if(D.x===S.x&&D.y===S.y){R=!0,T=k;break}}if(R)break}if(R&&T){let k=A[T];k.blocks&&(Array.isArray(k.blocks)?k.blocks:Object.values(k.blocks)).forEach(X=>{X.x>=0&&X.x<l&&X.y>=0&&X.y<I&&s.setTile(X.x,X.y,g.AIR)}),k.seedType&&Math.random()<.5&&(y[k.seedType]=(y[k.seedType]||0)+1),delete p[T],delete b[T]}else{if(s.setTile(S.x,S.y,g.AIR),delete b[`${S.x},${S.y}`],(function(X,J){return X===J.TREE_TRUNK||X===J.TREE_LEAVES})(S.tile,g)&&Math.random()<.15&&(y.WALNUT=(y.WALNUT||0)+1),S.tile.isSeed||S.tile.crop&&Math.random()<.3){let X=jn(g)[S.tile.id];X&&(y[X]=(y[X]||0)+1)}let k=(function(X,J){return X?.drops??Object.fromEntries(Object.entries(J).map(([D,Q])=>[Q.id,D]))[X.id]})(S.tile,g);k&&(S.tile===g.TREE_LEAVES&&Math.random()<.3||S.tile!==g.TREE_LEAVES)&&(f[k]=(f[k]||0)+1)}});let v=d.map(S=>Re((function(R,T){for(let k in R)if(R[k].id===T)return k;return null})(g,S.tile.id))).join(", ");a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:`Collected ${JSON.stringify(v)}`}})),e.set(b),r.set(p),Object.keys(y).length>0&&Ye("seedInventory",S=>{let R=F({},S);return Object.entries(y).forEach(([T,k])=>{R[T]=(R[T]||0)+k}),R}),Object.keys(f).length>0&&Ye("materialsInventory",S=>{let R=F({},S);return Object.entries(f).forEach(([T,k])=>{!g[T]?.isSeed&&(R[T]=(R[T]||0)+k)}),R})}}function or(a,e,r,n,g,o,s,I,l,i,c="regular"){let t=n.get(),d=s.get(),A=Math.floor((t.x+t.width/2)/o),u=Math.floor((t.y+t.height/2)/o),b=Zi(a,e,r,t,g,o,d,I,l,c);for(let p=-3;p<=3;p++)for(let y=-3;y<=3;y++){let f=A+p,v=u+y;f>=0&&f<l&&v>=0&&v<I&&d.getTile(f,v)===g.WATER&&wi(f,v,i,l,I,10)}return b}function Ri(a,e,r,n,g,o){let s=jn(r)[e.id];if(s){let I=2+Math.floor(3*Math.random());Ye("seedInventory",i=>re(F({},i),{[s]:i[s]+I})),n.setTile(g,o,r.AIR);let l=`Harvested ${Re(s)} crop, gained ${I} seeds`;console.log(l),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:l}}))}}function Li(a,e,r,n,g,o,s,I,l){let i=s.getTile(I,l+1);if(!i||!i.farmable){let t=`Cannot plant at (${I}, ${l}) - no farmable ground below`;return console.log(t),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:t}}))}let c;if(cn[g]&&n[g]>0){s.setTile(I,l,cn[g]),Ye("seedInventory",d=>re(F({},d),{[g]:d[g]-1}));let t=`${I},${l}`;e.set(re(F({},e.get()),{[t]:{timeLeft:o[g].growthTime,seedType:g}})),r.set(re(F({},r.get()),{[t]:{seedType:g,mature:!1,blocks:[{x:I,y:l,tile:cn[g]}],baseX:I,baseY:l}})),c=`Planted ${Re(g)} at (${I}, ${l}), ${n[g]-1} seeds remaining`}else c=`Cannot plant ${Re(g)} - no seeds available or invalid seed type`;console.log(c),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:c}}))}function rr(a,e,r,n,g,o,s,I,l,i,c){let t=Math.floor((n.x+n.width/2)/I),d=Math.floor((n.y+n.height/2)/I),A=[];if(n.lastDirection!==0){let u=n.lastDirection>0?1:-1;A.push({x:t+u,y:d}),A.push({x:t+u,y:d+1})}A.push({x:t,y:d+1}),A.push({x:t,y:d});for(let u of A){let{x:b,y:p}=u;if(b<0||b>=c||p<0||p>=i)continue;let y=l.getTile(b,p),f=null,v=null,S=r.get();for(let[R,T]of Object.entries(S))if(T.mature&&T.blocks&&(Array.isArray(T.blocks)?T.blocks:Object.values(T.blocks)).find(k=>k.x===b&&k.y===p)){f=T,v=R;break}if(f&&v)return void nr(a,e,r,f,v,s,l,i,c);if(y&&y.crop)return void Ri(a,y,s,l,b,p);if(y===s.AIR&&o&&g[o]>0)return void Li(a,e,r,g,o,s,l,b,p)}}async function ir(a){let e=await te.getItem("sprite-garden-range")||1;a.querySelector('[data-key="k"].middle').innerHTML=`&times;${Number(e)}`}async function En(a,e,r,n,g,o,s,I,l,i){let c=Math.floor((n.x+n.width/2)/s),t=Math.floor((n.y+n.height/2)/s),d,A,u=await te.getItem("sprite-garden-range")||1;switch(e.toLowerCase()){case"k":return void await(async function(v){let S=Number(await te.getItem("sprite-garden-range")||1),R=Number(S+1);S>=3&&(R=1),await te.setItem("sprite-garden-range",R),await ir(v)})(a);case"u":u===1&&(d=c-u,A=t-u),u===2&&(d=c-1,A=t-u),u===3&&(d=c-1,A=t-u);break;case"i":u===1&&(d=c,A=t-u),u===2&&(d=c,A=t-u),u===3&&(d=c,A=t-u);break;case"o":u===1&&(d=c+u,A=t-u),u===2&&(d=c+1,A=t-u),u===3&&(d=c+1,A=t-u);break;case"j":u===1&&(d=c-u,A=t),u===2&&(d=c-u,A=t),u===3&&(d=c-u,A=t);break;case"l":u===1&&(d=c+u,A=t),u===2&&(d=c+u,A=t),u===3&&(d=c+u,A=t);break;case"m":u===1&&(d=c-u,A=t+u),u===2&&(d=c-1,A=t+u),u===3&&(d=c-1,A=t+u);break;case",":u===1&&(d=c,A=t+u),u===2&&(d=c,A=t+u),u===3&&(d=c,A=t+u);break;case".":u===1&&(d=c+u,A=t+u),u===2&&(d=c+1,A=t+u),u===3&&(d=c+1,A=t+u);break;default:let f=`Invalid placement key: ${e}`;return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}if(!g){let f="No material selected for placement";return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}if(r[g]<=0){let f=`No ${Re(g)} available to place`;return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}if(d<0||d>=i||A<0||A>=l){let f=`Cannot place block outside world bounds at (${d}, ${A})`;return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}let b=I.getTile(d,A);if(b&&b!==o.AIR&&b.solid){let f=`Cannot place block at (${d}, ${A}) - position occupied`;return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}let p=(function(f,v){return v[f]||null})(g,o);if(!p){let f=`Invalid material type: ${Re(g)}`;return console.log(f),void a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:f}}))}I.setTile(d,A,p),Ye("materialsInventory",f=>re(F({},f),{[g]:f[g]-1}));let y=`Placed ${Re(g)} at (${d}, ${A}), ${r[g]-1} remaining.`;console.log(y),a.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:y}}))}function ut(a,e){let r=a.getElementById("canvas");if(r instanceof HTMLCanvasElement){let n=e.currentResolution?.get();if(n==="fullscreen")return a?.host.classList.remove("resolution","resolution-400","resolution-800"),r.width=window.innerWidth,r.height=window.innerHeight,r.style.width="100vw",r.style.height="100vh",void e.fogScale.set(36);a.host.classList.add("resolution"),a.host.classList.remove("resolution-400","resolution-800");let g=parseInt(n);if(r.width=g,r.height=g,r.style.width=g+"px",r.style.height=g+"px",a.host.classList.add(`resolution-${g}`),n==="800")return void e.fogScale.set(24);e.fogScale.set(12)}}function Tn(a,e){for(let[r,n]of Object.entries(e))a.host instanceof HTMLElement&&a.host.style.setProperty(r,n)}var Mn="sprite-garden-custom-colors",Nn=class{constructor(e,r,n){this.gThis=e,this.doc=r,this.shadow=n,this.dialog=null,this.colors={},this.originalColors={},this.close=this.close.bind(this),this.handleColorChange=this.handleColorChange.bind(this),this.handleDialogClose=this.handleDialogClose.bind(this),this.handleDialogKeydown=this.handleDialogKeydown.bind(this),this.handleReset=this.handleReset.bind(this),this.handleSave=this.handleSave.bind(this),this.dirty=!1}async createDialog(){this.dialog&&this.dialog.remove(),this.originalColors=tt(this.gThis,this.shadow),this.colors=F({},this.originalColors);let e=this.doc.createElement("dialog");return e.setAttribute("id","customizeColorsDialog"),e.addEventListener("close",this.handleDialogClose),e.addEventListener("keydown",this.handleDialogKeydown),e.style.cssText=`
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
    `,this.shadow.append(e),this.dialog=e,this.renderColorInputs(),this.initEventListeners(),e}async handleSave(){await(async function(e,r){try{await te.setItem(r,e),console.log("Saved custom colors")}catch(n){console.error("Failed to save colors:",n)}})(this.colors,Mn),await Tn(this.shadow,this.colors),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})),this.dirty=!1,this.close()}async handleReset(){confirm("Reset all colors to defaults and close? This cannot be undone.")&&(await(async function(e,r,n){try{await te.removeItem(n);let g=tt(e,r);for(let o of Object.keys(g))r.host instanceof HTMLElement&&r.host.style.removeProperty(o);console.log("Reset to default colors")}catch(g){console.error("Failed to reset colors:",g)}})(this.gThis,this.shadow,Mn),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:null}})),this.dirty=!1,this.close())}renderColorInputs(){let e=this.dialog.querySelector("#colorInputsContainer"),r={};for(let[g,o]of Object.entries(this.colors)){let s=g.match(/--sg-?([a-z]+)-/),I=s?s[1]:"other";["host","touch","ui"].includes(I)||(r[I]||(r[I]=[]),r[I].push({property:g,value:o.slice(0,7)}))}let n=Object.keys(r).sort();for(let g of n){let o=this.doc.createElement("div");o.style.cssText=`
        grid-column: 1 / -1;
        margin-top: 1rem;
      `;let s=this.doc.createElement("h4");s.textContent=(g.charAt(0).toUpperCase()+g.slice(1)).replace("Tile","Tiles"),s.style.cssText=`
        border-bottom: 1px solid var(--sg-color-gray-300);
        color: var(--sg-color-gray-800);
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
        padding-bottom: 0.25rem;
      `,o.append(s);let[I]=r[g];I.property.startsWith("--sg-color")&&o.setAttribute("hidden","hidden"),e.append(o);for(let{property:l,value:i}of r[g]){let c=this.doc.createElement("div");c.style.cssText=`
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `,l.startsWith("--sg-color")&&c.setAttribute("hidden","hidden");let t=this.doc.createElement("label");t.textContent=l.replace("--sg-","").replace(/-/g," ").replace("tile ","").replace("color ","").replace(" color",""),t.style.cssText=`
          color: var(--sg-color-gray-700);
          font-size: 0.75rem;
          text-transform: capitalize;
        `;let d=this.doc.createElement("div");d.style.cssText=`
          align-items: center;
          display: flex;
          gap: 0.5rem;
        `;let A=this.doc.createElement("input");A.type="color",A.value=this.normalizeColor(i),A.dataset.property=l,A.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          cursor: pointer;
          height: 2rem;
          width: 3rem;
        `;let u=this.doc.createElement("input");u.type="text",u.value=i,u.dataset.property=l,u.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          flex: 1;
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.25rem;
        `;let b=tr(()=>{this.handleColorChange(l,u.value)},500);A.addEventListener("input",p=>{p.target instanceof HTMLInputElement&&(u.value=p.target.value,b())}),u.addEventListener("input",p=>{if(p.target instanceof HTMLInputElement){let y=this.normalizeColor(p.target.value);y&&(A.value=y),b()}}),d.append(A),d.append(u),c.append(t),c.append(d),e.append(c)}}}normalizeColor(e){if(!e)return"#000000";if(e.startsWith("#"))return e.length===7?e:"#000000";let r=this.doc.createElement("canvas").getContext("2d");return r.fillStyle=e,r.fillStyle}handleColorChange(e,r){this.colors[e]=r,this.dirty=!0;let n=this.shadow.host;n instanceof HTMLElement&&(n.style.setProperty(e,r),this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.colors}})))}initEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),r=this.dialog.querySelector("#saveColorsBtn"),n=this.dialog.querySelector("#resetColorsBtn");e.addEventListener("click",this.close),r.addEventListener("click",this.handleSave),n.addEventListener("click",this.handleReset)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}handleDialogKeydown(e){e.key==="Escape"&&(e.preventDefault(),this.close())}close(){this.dirty?confirm("Close without saving?")&&(Tn(this.shadow,this.originalColors),requestAnimationFrame(()=>{this.shadow.dispatchEvent(new CustomEvent("sprite-garden-reset",{detail:{colors:this.originalColors}}))}),this.dialog instanceof HTMLDialogElement&&this.dialog.close()):this.dialog instanceof HTMLDialogElement&&this.dialog.close()}handleDialogClose(){this.removeEventListeners(),this.dialog.remove()}removeEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),r=this.dialog.querySelector("#saveColorsBtn"),n=this.dialog.querySelector("#resetColorsBtn");e.removeEventListener("click",this.close),r.removeEventListener("click",this.handleSave),n.removeEventListener("click",this.handleReset)}};async function To(a){let e=Ko(a.document,"sprite-garden"),r=new Nn(a,a.document,e);return await r.createDialog(),r.show(),r}function ar(){let a=x.breakMode.get();x.breakMode.set(a==="regular"?"extra":"regular")}async function lr(a){let e=await te.getItem("sprite-garden-movement-scale");e||(e=1,await te.setItem("sprite-garden-movement-scale",e)),a.querySelector('[data-key="x"].middle').innerHTML=`&times;${Number(e)}`}async function kn(a){let e=Number(Number(await te.getItem("sprite-garden-movement-scale"))||1),r=Number(Number(e.toFixed(2))+.125);r>1&&(r=Number(r.toFixed(1))),r>1&&(r=.5),await te.setItem("sprite-garden-movement-scale",r),await lr(a)}var Bn=class{constructor(e,r){this.doc=e,this.shadow=r,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let r=`${e}-content`,n=this.shadow.querySelector(`.${r}`);if(!n){n=this.doc.createElement("dialog"),n.setAttribute("class",r);let g=new DOMParser,o=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFib3V0PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkFib3V0IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJhYm91dCI+CiAgICA8ZGl2IGNsYXNzPSJhYm91dC1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iYWJvdXQtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBoaWRkZW49ImhpZGRlbiIgY2xhc3M9ImFib3V0LWNvbnRlbnRfY2xvc2UtYnRuIj4mdGltZXM7PC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL2Fib3V0LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPkFib3V0PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD4KICAgICAgICAgIFNwcml0ZSBHYXJkZW4gaXMgYSAyRCBzYW5kYm94IGV4cGxvcmF0aW9uIGFuZCBmYXJtaW5nIGdhbWUgdGhhdCBydW5zCiAgICAgICAgICBlbnRpcmVseSBpbiB5b3VyIHdlYiBicm93c2VyLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLAogICAgICAgICAgZGlzY292ZXIgZGlmZmVyZW50IGJpb21lcywgbWluZSByZXNvdXJjZXMsIGFuZCBjdWx0aXZhdGUgYSB2YXJpZXR5IG9mCiAgICAgICAgICBjcm9wcy4KICAgICAgICA8L3A+CiAgICAgICAgPGEKICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgPgogICAgICAgICAgPGltZwogICAgICAgICAgICBzcmM9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vYXNzZXRzL3Nwcml0ZS1nYXJkZW4tdGltZS1sYXBzZS5naWYiCiAgICAgICAgICAgIGRlc2M9IkEgdGltZSBsYXBzZSBvZiBhIGdhcmRlbiBpbiBTcHJpdGUgR2FyZGVuIgogICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIFRpbWUgTGFwc2UiCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+RmVhdHVyZXM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Qcm9jZWR1cmFsIFdvcmxkIEdlbmVyYXRpb248L3N0cm9uZz4gLSBFYWNoIHdvcmxkIGlzIHVuaXF1ZSwKICAgICAgICAgICAgZ2VuZXJhdGVkIGZyb20gYSBzaGFyZWFibGUgc2VlZAogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5NdWx0aXBsZSBCaW9tZXM8L3N0cm9uZz4gLSBFeHBsb3JlIGZvcmVzdHMsIGRlc2VydHMsCiAgICAgICAgICAgIHR1bmRyYXMsIGFuZCBzd2FtcHMsIGVhY2ggd2l0aCB1bmlxdWUgY2hhcmFjdGVyaXN0aWNzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkZhcm1pbmcgU3lzdGVtPC9zdHJvbmc+IC0gUGxhbnQgYW5kIGhhcnZlc3QgZGlmZmVyZW50IGNyb3AKICAgICAgICAgICAgdHlwZXMgd2l0aCByZWFsaXN0aWMgZ3Jvd3RoIGN5Y2xlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5SZXNvdXJjZSBNaW5pbmc8L3N0cm9uZz4gLSBEaWcgZm9yIHZhbHVhYmxlIHJlc291cmNlcyBsaWtlCiAgICAgICAgICAgIGNvYWwsIGlyb24sIGFuZCBnb2xkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkNhdmUgU3lzdGVtczwvc3Ryb25nPiAtIERpc2NvdmVyIHVuZGVyZ3JvdW5kIGNhdmVzIGZpbGxlZAogICAgICAgICAgICB3aXRoIHJlc291cmNlcyBhbmQgY2hhbGxlbmdlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5CdWlsZGluZzwvc3Ryb25nPiAtIFVzZSBjb2xsZWN0ZWQgbWF0ZXJpYWxzIHRvIHBsYWNlIGJsb2NrcwogICAgICAgICAgICBhbmQgc2hhcGUgdGhlIHdvcmxkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPlNhdmUgJmFtcDsgTG9hZDwvc3Ryb25nPiAtIFlvdXIgcHJvZ3Jlc3MgY2FuIGJlIHNhdmVkIG9uCiAgICAgICAgICAgIGRldmljZSBvciBhcyBhIGZpbGUgdG8gc2hhcmUKICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+UHJpdmFjeSBieSBEZXNpZ248L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyA8c3Ryb25nPnByaXZhdGUgYnkgZGVzaWduPC9zdHJvbmc+LiBBbGwgZ2FtZSBkYXRhIGlzCiAgICAgICAgICBwcm9jZXNzZWQgYW5kIHN0b3JlZCBsb2NhbGx5IG9uIHlvdXIgZGV2aWNlLiBObyBwZXJzb25hbCBpbmZvcm1hdGlvbgogICAgICAgICAgaXMgY29sbGVjdGVkLCB0cmFuc21pdHRlZCwgb3Igc3RvcmVkIG9uIGV4dGVybmFsIHNlcnZlcnMuIFlvdXIgZ2FtZQogICAgICAgICAgd29ybGRzLCBwcm9ncmVzcywgYW5kIHByZWZlcmVuY2VzIG5ldmVyIGxlYXZlIHlvdXIgZGV2aWNlLCB1bmxlc3MKICAgICAgICAgIHNoYXJlZCBieSB5b3UuCiAgICAgICAgPC9wPgogICAgICAgIDxwPgogICAgICAgICAgUmVhZCBtb3JlIGFib3V0IHRoZQogICAgICAgICAgPGEKICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gUHJpdmFjeSBQb2xpY3k8L2EKICAgICAgICAgID4uCiAgICAgICAgPC9wPgogICAgICAgIDxoMz5Db250cm9sczwvaDM+CiAgICAgICAgPHVsIGNsYXNzPSJhYm91dC1jb250cm9scyI+CiAgICAgICAgICA8bGk+PHN0cm9uZz5Nb3ZlbWVudDo8L3N0cm9uZz4gVy9BL1MvRCBvciBBcnJvdyBLZXlzPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkp1bXA6PC9zdHJvbmc+IFcsIOKGkSwgb3IgU3BhY2U8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+UGxhbnQvSGFydmVzdDo8L3N0cm9uZz4gRjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5CcmVhayBCbG9jazo8L3N0cm9uZz4gUjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgQnJlYWsgTW9kZTo8L3N0cm9uZz4gRTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgTW92ZW1lbnQgU2NhbGU6PC9zdHJvbmc+IFg8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+Q2hhbmdlIEJsb2NrIFJhbmdlOjwvc3Ryb25nPiBLPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPlBsYWNlIEJsb2NrOjwvc3Ryb25nPiBVL0kvTy9KL0wvTS8sLy48L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+V29ybGQgU3RhdGUgTWVudTo8L3N0cm9uZz4gQ3RybCtTPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkluc3BlY3QgVGlsZXM6PC9zdHJvbmc+IE1vdXNlIGhvdmVyPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5UYXAgdGhlIGJvdHRvbSBjb3JuZXIgcGFuZWwgZm9yIG1vYmlsZSBjb250cm9scy48L3N0cm9uZz4KICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi8iCiAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICA+CiAgICAgICAgICA8aW1nCiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9hc3NldHMvc3ByaXRlLWdhcmRlbi1hbmltYXRpb24uZ2lmIgogICAgICAgICAgICBkZXNjPSJBbiBhbmltYXRpb24gb2YgU3ByaXRlIEdhcmRlbiBnYW1lcGxheSIKICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHYW1lcGxheSBBbmltYXRpb24iCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+VGlwcyBmb3IgTmV3IFBsYXllcnM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgU3RhcnQgYnkgZXhwbG9yaW5nIHlvdXIgaW1tZWRpYXRlIHN1cnJvdW5kaW5ncyB0byB1bmRlcnN0YW5kIHRoZQogICAgICAgICAgICBiaW9tZQogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT5IYXJ2ZXN0IG5hdHVyYWwgY3JvcHMgdG8gYnVpbGQgdXAgeW91ciBzZWVkIGludmVudG9yeTwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIExvb2sgZm9yIGZhcm1hYmxlIGdyb3VuZCAoZGlydCwgZ3Jhc3MsIGNsYXksIHNhbmQpIHRvIHBsYW50IHNlZWRzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBEaWZmZXJlbnQgY3JvcHMgZ3JvdyBhdCBkaWZmZXJlbnQgcmF0ZXMgLSBtdXNocm9vbXMgYXJlIGZhc3Rlc3QsCiAgICAgICAgICAgIHRyZWVzIGFyZSBzbG93ZXN0CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBNaW5lIHJlc291cmNlcyBieSBicmVha2luZyBibG9ja3MgKFIga2V5KSAtIHlvdSdsbCBjb2xsZWN0IG1hdGVyaWFscwogICAgICAgICAgICBhdXRvbWF0aWNhbGx5CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPkZvZyBjbGVhcnMgYXMgZXhwbG9yYXRpb24gcHJvZ3Jlc3NlczwvbGk+CiAgICAgICAgICA8bGk+U2F2ZSB5b3VyIGdhbWUgZnJlcXVlbnRseSB1c2luZyB0aGUgV29ybGQgU3RhdGUgbWVudSAoQ3RybCtTKTwvbGk+CiAgICAgICAgICA8bGk+U2hhcmUgaW50ZXJlc3Rpbmcgd29ybGQgc2VlZHMgd2l0aCBmcmllbmRzITwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+T3BlbiBTb3VyY2U8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyBvcGVuIHNvdXJjZSBzb2Z0d2FyZS4gVmlzaXQKICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+dGhlIHByb2plY3QgcmVwb3NpdG9yeTwvYQogICAgICAgICAgPgogICAgICAgICAgdG8gdmlldyB0aGUgY29kZSwgcmVwb3J0IGlzc3Vlcywgb3IgdG8gY29udHJpYnV0ZS4KICAgICAgICA8L3A+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==")).text(),s=g.parseFromString(o,"text/html").querySelector(`.${r}`);n.innerHTML=s.innerHTML,this.shadow.append(n),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}if(!(n instanceof HTMLDialogElement))throw new Error("Failed to create or find HTMLDialogElement");return this.dialog=n,this.initEventListeners(),this.dialog}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".about-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".about-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},xn=class{constructor(e,r){this.doc=e,this.shadow=r,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e,r){this.dialog&&this.dialog.remove();let n=`${e}-content`,g=this.shadow.querySelector(`.${n}`);if(!g){g=this.doc.createElement("dialog"),g.setAttribute("class",n);let o=new DOMParser,s=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFQSSAtIEV4YW1wbGVzPC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkV4YW1wbGVzIC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJleGFtcGxlcyI+CiAgICA8ZGl2IGNsYXNzPSJleGFtcGxlcy1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iZXhhbXBsZXMtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIiB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW48L2EKICAgICAgICAgID4KICAgICAgICA8L2gxPgogICAgICAgIDxidXR0b24gaGlkZGVuPSJoaWRkZW4iIGNsYXNzPSJleGFtcGxlcy1jb250ZW50X2Nsb3NlLWJ0biI+CiAgICAgICAgICAmdGltZXM7CiAgICAgICAgPC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICA+QVBJIC0gRXhhbXBsZXM8L2EKICAgICAgICA+CiAgICAgIDwvaDI+CgogICAgICA8aDMgaWQ9IkZ1bGxzY3JlZW4iPgogICAgICAgIEZ1bGxzY3JlZW4gLSBTZXQgZnVsbHNjcmVlbiBhbmQgcmV2ZWFsIG9wdGlvbnMgaW4gc2V0dGluZ3MuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9GdWxsc2NyZWVuLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GdWxsc2NyZWVuLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBGdWxsc2NyZWVuIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvRnVsbHNjcmVlbi5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIEZ1bGxzY3JlZW4gLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iRmlyZXdvcmtzIj5GaXJld29ya3MgLSBQYXJ0aWNsZSBzeXN0ZW1zIGFuZCBjb2xvciB0cmFpbHMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0ZpcmV3b3Jrcy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GaXJld29ya3MubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gRmlyZXdvcmtzIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZpcmV3b3JrcyAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBGaXJld29ya3MgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iR29sZCI+R29sZCAtIEF1dG9tYXRlIGRpZ2dpbmcgZm9yIGdvbGQuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvR29sZC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPkdvbGQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEdvbGQgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Hb2xkLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJHT0wiPkdPTCAtIENvbndheSdzIEdhbWUgb2YgTGlmZSB1c2luZyBzcHJpdGUgZW50aXRpZXMuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dPTC5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5HT0wubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gR09MIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEdPTCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBHT0wgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUGhvdG8iPgogICAgICAgIFBob3RvIC0gRHJhd3MgaW50ZXJwcmV0ZWQgYml0bWFwIGJhc2VkIG9uIFNwcml0ZSBHYXJkZW4gdGlsZXMuCiAgICAgIDwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9QaG90by5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlBob3RvLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBQaG90byAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJIZWFydCI+SGVhcnQgLSBEcmF3cyBkeW5hbWljYWxseSBhbmltYXRlZCBoZWFydCBwYXR0ZXJucy48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5IZWFydC5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEhlYXJ0IC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gSGVhcnQgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iS29uYW1pQ29kZSI+CiAgICAgICAgS29uYW1pIENvZGUgLSBTaG93cyBoYW5kbGluZyBvZiBrZXlib2FyZCBzZXF1ZW5jZXMgYW5kIGhpZGRlbgogICAgICAgIGludGVyYWN0aW9ucy4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPktvbmFtaUNvZGUubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Lb25hbWlDb2RlLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEtvbmFtaSBDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0tvbmFtaUNvZGUubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBLb25hbWkgQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmciPgogICAgICAgIE1lc3NhZ2luZyAtIERyYXcgdGV4dCBvbiB0aGUgbWFwIGZpbGxlZCB3aXRoIHdhdGVyLgogICAgICA8L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvTWVzc2FnaW5nLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPk1lc3NhZ2luZy5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmcgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIE1lc3NhZ2luZyAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJNZXNzYWdpbmdTY3JvbGxlZCI+CiAgICAgICAgTWVzc2FnaW5nU2Nyb2xsZWQgLSBEcmF3cyBzY3JvbGxhYmxlIHRleHQgb24gdGhlIG1hcC4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZ1Njcm9sbGVkLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+TWVzc2FnaW5nU2Nyb2xsZWQubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmdTY3JvbGxlZCAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9NZXNzYWdpbmdTY3JvbGxlZC5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4KICAgICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nU2Nyb2xsZWQgLSBCb29rbWFya2xldDwvc3BhbgogICAgICAgICAgICAgID48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iUVJDb2RlIj5RUkNvZGUgLSBBZGQgYSBRUkNvZGUgdG8gdGhlIG1hcC48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvUVJDb2RlLm1qcyIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlFSQ29kZS5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBRUkNvZGUgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUVJDb2RlIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIFFSQ29kZSAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),I=o.parseFromString(s,"text/html").querySelector(`.${n}`);g.innerHTML=I.innerHTML,this.shadow.append(g),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=g,this.initEventListeners(),g}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".examples-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".examples-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}},Vn=class{constructor(e,r){this.doc=e,this.shadow=r,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let r=`${e}-content`,n=this.shadow.querySelector(`.${r}`);if(!n){n=this.doc.createElement("dialog"),n.setAttribute("class",r);let g=new DOMParser,o=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIFByaXZhY3kgUG9saWN5PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IlByaXZhY3kgUG9saWN5IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJwcml2YWN5Ij4KICAgIDxkaXYgY2xhc3M9InByaXZhY3ktY29udGVudCI+CiAgICAgIDxoZWFkZXIgY2xhc3M9InByaXZhY3ktY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0icHJpdmFjeS1jb250ZW50X2Nsb3NlLWJ0biIgaGlkZGVuPSJoaWRkZW4iPgogICAgICAgICAgJnRpbWVzOwogICAgICAgIDwvYnV0dG9uPgogICAgICA8L2hlYWRlcj4KCiAgICAgIDxoMj4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPlByaXZhY3kgUG9saWN5PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD48c3Ryb25nPkxhc3QgdXBkYXRlZDo8L3N0cm9uZz4gT2N0b2JlciAwNCwgMjAyNTwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBPdXIgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgb24gdGhlCiAgICAgICAgICBjb2xsZWN0aW9uLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgWW91ciBpbmZvcm1hdGlvbiB3aGVuIFlvdSB1c2UgdGhlCiAgICAgICAgICBTZXJ2aWNlLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICA8c3Ryb25nCiAgICAgICAgICAgID5XZSBkbyBub3QgY29sbGVjdCwgc3RvcmUsIHVzZSwgb3IgZGlzc2VtaW5hdGUgWW91ciBQZXJzb25hbAogICAgICAgICAgICBEYXRhLjwvc3Ryb25nCiAgICAgICAgICA+CiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+SW50ZXJwcmV0YXRpb24gYW5kIERlZmluaXRpb25zPC9oMz4KCiAgICAgICAgPGg0PkludGVycHJldGF0aW9uPC9oND4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSB3b3JkcyBvZiB3aGljaCB0aGUgaW5pdGlhbCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQgaGF2ZSBtZWFuaW5ncwogICAgICAgICAgZGVmaW5lZCB1bmRlciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMuIFRoZSBmb2xsb3dpbmcgZGVmaW5pdGlvbnMKICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHNhbWUgbWVhbmluZyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhleSBhcHBlYXIgaW4KICAgICAgICAgIHNpbmd1bGFyIG9yIGluIHBsdXJhbC4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5EZWZpbml0aW9uczwvaDQ+CiAgICAgICAgPHA+Rm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIFByaXZhY3kgUG9saWN5OjwvcD4KCiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkFwcGxpY2F0aW9uPC9zdHJvbmc+IHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLCB0aGUgc29mdHdhcmUKICAgICAgICAgICAgcHJvZ3JhbSBwcm92aWRlZCBieSB0aGUgQ29tcGFueS4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueTwvc3Ryb25nPiAocmVmZXJyZWQgdG8gYXMgZWl0aGVyICJ0aGUgQ29tcGFueSIsICJXZSIsCiAgICAgICAgICAgICJVcyIgb3IgIk91ciIgaW4gdGhpcyBBZ3JlZW1lbnQpIHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5EZXZpY2U8L3N0cm9uZz4gbWVhbnMgYW55IGRldmljZSB0aGF0IGNhbiBhY2Nlc3MgdGhlIFNlcnZpY2UKICAgICAgICAgICAgc3VjaCBhcyBhIGNvbXB1dGVyLCBhIGNlbGxwaG9uZSBvciBhIGRpZ2l0YWwgdGFibGV0LgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5QZXJzb25hbCBEYXRhPC9zdHJvbmc+IGlzIGFueSBpbmZvcm1hdGlvbiB0aGF0IHJlbGF0ZXMgdG8gYW4KICAgICAgICAgICAgaWRlbnRpZmllZCBvciBpZGVudGlmaWFibGUgaW5kaXZpZHVhbC4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5TZXJ2aWNlPC9zdHJvbmc+IHJlZmVycyB0byB0aGUgQXBwbGljYXRpb24uPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Vc2FnZSBEYXRhPC9zdHJvbmc+IHJlZmVycyB0byBkYXRhIGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5LAogICAgICAgICAgICBlaXRoZXIgZ2VuZXJhdGVkIGJ5IHRoZSB1c2Ugb2YgdGhlIFNlcnZpY2Ugb3IgZnJvbSB0aGUgU2VydmljZQogICAgICAgICAgICBpbmZyYXN0cnVjdHVyZSBpdHNlbGYuCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPllvdTwvc3Ryb25nPiBtZWFucyB0aGUgaW5kaXZpZHVhbCBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlCiAgICAgICAgICAgIFNlcnZpY2UsIG9yIHRoZSBjb21wYW55LCBvciBvdGhlciBsZWdhbCBlbnRpdHkgb24gYmVoYWxmIG9mIHdoaWNoCiAgICAgICAgICAgIHN1Y2ggaW5kaXZpZHVhbCBpcyBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFNlcnZpY2UsIGFzIGFwcGxpY2FibGUuCiAgICAgICAgICA8L2xpPgogICAgICAgIDwvdWw+CgogICAgICAgIDxoMz5Db2xsZWN0aW5nIGFuZCBVc2luZyBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgoKICAgICAgICA8aDQ+VHlwZXMgb2YgRGF0YSBOb3QgQ29sbGVjdGVkPC9oND4KCiAgICAgICAgPGg1PlBlcnNvbmFsIERhdGE8L2g1PgogICAgICAgIDxwPgogICAgICAgICAgV2hpbGUgdXNpbmcgT3VyIFNlcnZpY2UsIFdlIHdpbGwgbm90IGFzayBZb3UgdG8gcHJvdmlkZSBVcyB3aXRoCiAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiB0aGF0IHdvdWxkIGJlIHVzZWQgdG8gY29udGFjdCBvcgogICAgICAgICAgaWRlbnRpZnkgWW91LgogICAgICAgIDwvcD4KCiAgICAgICAgPGg1PlVzYWdlIERhdGE8L2g1PgogICAgICAgIDxwPlVzYWdlIERhdGEgaXMgbm90IGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgdGhlIFNlcnZpY2UuPC9wPgoKICAgICAgICA8aDU+TG9jYWwgU3RvcmFnZTwvaDU+CiAgICAgICAgPHA+CiAgICAgICAgICBTcHJpdGUgR2FyZGVuIHVzZXMgeW91ciBicm93c2VyJ3MgbG9jYWwgc3RvcmFnZSB0byBzYXZlIHlvdXIgZ2FtZQogICAgICAgICAgcHJvZ3Jlc3Mgb24geW91ciBkZXZpY2UuIFRoaXMgZGF0YSBuZXZlciBsZWF2ZXMgeW91ciBkZXZpY2UgYW5kIGlzIG5vdAogICAgICAgICAgdHJhbnNtaXR0ZWQgdG8gYW55IHNlcnZlcnMuIFlvdSBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoaXMgZGF0YSBhbmQKICAgICAgICAgIGNhbiBjbGVhciBpdCBhdCBhbnkgdGltZSB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5UcmFja2luZyBUZWNobm9sb2dpZXM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgV2UgZG8gbm90IHVzZSBDb29raWVzIG9yIHNpbWlsYXIgdHJhY2tpbmcgdGVjaG5vbG9naWVzIHRvIHRyYWNrCiAgICAgICAgICBhY3Rpdml0eSBvbiBPdXIgU2VydmljZS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Vc2Ugb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD5UaGUgQ29tcGFueSBkb2VzIG5vdCB1c2UgUGVyc29uYWwgRGF0YSBmb3IgYW55IHB1cnBvc2VzLjwvcD4KCiAgICAgICAgPGgzPlJldGVudGlvbiBvZiBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgVGhlIENvbXBhbnkgZG9lcyBub3QgcmV0YWluIFlvdXIgUGVyc29uYWwgRGF0YS4gQWxsIGdhbWUgZGF0YSBpcwogICAgICAgICAgc3RvcmVkIGxvY2FsbHkgb24geW91ciBkZXZpY2Ugb25seS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5EaXNjbG9zdXJlIG9mIFlvdXIgUGVyc29uYWwgRGF0YTwvaDM+CgogICAgICAgIDxoND5CdXNpbmVzcyBUcmFuc2FjdGlvbnM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgSWYgdGhlIENvbXBhbnkgaXMgaW52b2x2ZWQgaW4gYSBtZXJnZXIsIGFjcXVpc2l0aW9uIG9yIGFzc2V0IHNhbGUsCiAgICAgICAgICBZb3VyIFBlcnNvbmFsIERhdGEgd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+U2VjdXJpdHkgb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSBzZWN1cml0eSBvZiBZb3VyIFBlcnNvbmFsIERhdGEgaXMgaW1wb3J0YW50IHRvIFVzLiBTaW5jZSBhbGwgZ2FtZQogICAgICAgICAgZGF0YSBpcyBzdG9yZWQgbG9jYWxseSBvbiB5b3VyIGRldmljZSBhbmQgbmV2ZXIgdHJhbnNtaXR0ZWQgdG8KICAgICAgICAgIGV4dGVybmFsIHNlcnZlcnMsIHRoZSBzZWN1cml0eSBvZiB5b3VyIGRhdGEgaXMgbGFyZ2VseSBkZXBlbmRlbnQgb24KICAgICAgICAgIHlvdXIgZGV2aWNlJ3Mgc2VjdXJpdHkgbWVhc3VyZXMuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+TGlua3MgdG8gT3RoZXIgV2Vic2l0ZXM8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgT3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgd2Vic2l0ZXMgdGhhdCBhcmUgbm90IG9wZXJhdGVkCiAgICAgICAgICBieSBVcy4gSWYgWW91IGNsaWNrIG9uIGEgdGhpcmQgcGFydHkgbGluaywgWW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8KICAgICAgICAgIHRoYXQgdGhpcmQgcGFydHkncyBzaXRlLiBXZSBzdHJvbmdseSBhZHZpc2UgWW91IHRvIHJldmlldyB0aGUgUHJpdmFjeQogICAgICAgICAgUG9saWN5IG9mIGV2ZXJ5IHNpdGUgWW91IHZpc2l0LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSBoYXZlIG5vIGNvbnRyb2wgb3ZlciBhbmQgYXNzdW1lIG5vIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgY29udGVudCwKICAgICAgICAgIHByaXZhY3kgcG9saWNpZXMgb3IgcHJhY3RpY2VzIG9mIGFueSB0aGlyZCBwYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5DaGFuZ2VzIHRvIHRoaXMgUHJpdmFjeSBQb2xpY3k8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgV2UgbWF5IHVwZGF0ZSBPdXIgUHJpdmFjeSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUuIFdlIHdpbGwgbm90aWZ5IFlvdQogICAgICAgICAgb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IHdpdGhpbiB0aGUKICAgICAgICAgIGFwcGxpY2F0aW9uLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSB3aWxsIHVwZGF0ZSB0aGUgIkxhc3QgdXBkYXRlZCIgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoaXMgUHJpdmFjeQogICAgICAgICAgUG9saWN5LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBZb3UgYXJlIGFkdmlzZWQgdG8gcmV2aWV3IHRoaXMgUHJpdmFjeSBQb2xpY3kgcGVyaW9kaWNhbGx5IGZvciBhbnkKICAgICAgICAgIGNoYW5nZXMuIENoYW5nZXMgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBhcmUgZWZmZWN0aXZlIHdoZW4gdGhleSBhcmUKICAgICAgICAgIHBvc3RlZC4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhpcyBQcml2YWN5IFBvbGljeSwgWW91IGNhbiBjb250YWN0CiAgICAgICAgICB1czoKICAgICAgICA8L3A+CiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPkJ5IGVtYWlsOiBhZG1pbkBjcmVhdGl2ZWluZHVzdHJpYWwuY29tPC9saT4KICAgICAgICA8L3VsPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),s=g.parseFromString(o,"text/html").querySelector(`.${r}`);n.innerHTML=s.innerHTML,this.shadow.append(n),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=n,this.initEventListeners(),n}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog instanceof HTMLDialogElement&&this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog instanceof HTMLDialogElement&&this.dialog.close()}};function mn(a){a&&a.parentElement&&(a.classList.add("toast--slide-out"),setTimeout(()=>a.remove(),300))}var sr=a=>{let e=a.getElementById("toastContainer");e&&e.querySelectorAll(".toast").forEach(r=>{r.classList.add("toast--slide-out"),setTimeout(()=>r.remove(),300)}),a.removeEventListener("keydown",fn.get()),Vt.set(!0)};function Ei(a,e){let r=tr(()=>{ut(e,x)},200);new ResizeObserver(o=>{r()}).observe(e.host),(function(o,s){let I=s.getElementById("aboutBtn");I&&I.addEventListener("click",async function(){try{await(async function(c,t){let d=new Bn(c,t);return await d.createDialog("about"),d.show(),d})(o.document,s)}catch(c){console.error("Failed to open about dialog:",c),alert("Failed to open about dialog. Check console for details.")}});let l=s.getElementById("examplesBtn");l&&l.addEventListener("click",async function(){try{await(async function(c,t){let d=new xn(c,t);return await d.createDialog("examples","src/api"),d.show(),d})(o.document,s)}catch(c){console.error("Failed to open examples dialog:",c),alert("Failed to open examples dialog. Check console for details.")}});let i=s.getElementById("privacyBtn");i&&i.addEventListener("click",async function(){try{await(async function(c,t){let d=new Vn(c,t);return await d.createDialog("privacy"),d.show(),d})(o.document,s)}catch(c){console.error("Failed to open privacy dialog:",c),alert("Failed to open privacy dialog. Check console for details.")}})})(a,e),(function(o){let s=o.querySelector('[data-key="x"].middle');s&&(s.addEventListener("click",async()=>await kn(o)),s.addEventListener("touchstart",async()=>await kn(o)))})(e),ir(e),lr(e);let n=e.getElementById("closeWorldGeneration");n&&n.addEventListener("click",()=>{e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden")});let g=e.getElementById("customizeColorsBtn");if(g){let o=a.spriteGarden.config;g.addEventListener("click",async()=>{let s=o.currentResolution.get();if(s==="400")return o.currentResolution.set("800"),ut(e,o),void(await To(a)).dialog.addEventListener("close",()=>{o.currentResolution.set(s),ut(e,o)});await To(a)})}}function Ti(a,e){new Wi(l=>{e.getElementById("mapEditor").removeAttribute("hidden"),e.getElementById("customizeColorsBtnContainer").removeAttribute("hidden"),e.getElementById("examplesBtnContainer").removeAttribute("hidden"),e.querySelector('option[value="fullscreen"]').removeAttribute("hidden");let i=e.getElementById("customizeColorsDialog");i&&i.querySelectorAll("[hidden]").forEach(c=>c.removeAttribute("hidden")),e.querySelector('#settings > [class="ui-grid__corner--container"]').removeAttribute("hidden"),Fo.set(!0),l.disable()}),e.addEventListener("sprite-garden-toast",l=>{l instanceof CustomEvent&&(function(i,c,t={}){let{duration:d=3e3,manualClose:A=!1,stack:u=!1,bottomOffset:b=1,useSingle:p=!0}=t,y=i.getElementById("toastContainer");if(!y)return void console.warn("Toast container not found");let f;if(y.style.bottom=`${b}rem`,p&&(f=y.querySelector(".toast"),f)){let S=f.querySelector(".toast__content");if(S&&(S.textContent=c),d>0){let R=f;clearTimeout(R.autoRemoveTimer),R.autoRemoveTimer=setTimeout(()=>mn(f),d)}return}u||p||y.querySelectorAll(".toast").forEach(S=>{S.classList.add("toast--fade-out"),setTimeout(()=>S.remove(),300)}),f=i.ownerDocument.createElement("div"),f.className="toast";let v=i.ownerDocument.createElement("div");if(v.className="toast__content",v.textContent=c,f.appendChild(v),A){let S=i.ownerDocument.createElement("button");S.className="toast__close-btn",S.innerHTML="&times;",S.addEventListener("click",()=>mn(f)),f.appendChild(S)}y.appendChild(f),d>0&&(f.autoRemoveTimer=setTimeout(()=>mn(f),d))})(e,l.detail.message,l.detail.config)}),fn.set(l=>{if(l instanceof KeyboardEvent&&!Vt.get()){let i=l.key.toLowerCase();i!=="w"&&i!=="arrowup"&&i!==" "||(sr(e),Vt.set(!0))}}),e.addEventListener("keydown",fn.get()),e.addEventListener("keydown",async l=>{let i=l.key.toLowerCase();e.host.keys[i]=!0,i==="enter"&&l.target instanceof HTMLInputElement&&l.target.getAttribute("id")==="worldSeedInput"&&r(),i==="escape"&&e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden"),i==="s"&&l.ctrlKey&&(l.preventDefault(),e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")),!(i>="0"&&i<="9"||i==="backspace"||i==="delete"||i==="escape")&&(i==="r"&&l.ctrlKey&&(l.preventDefault(),n()),i==="g"&&l.ctrlKey&&(l.preventDefault(),r()),i==="e"&&(l.preventDefault(),ar()),i==="x"&&(l.preventDefault(),await kn(e)),i==="f"&&rr(e,V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),i==="r"&&or(e,V.growthTimers,V.plantStructures,V.player,x.TILES,x.TILE_SIZE.get(),V.world,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),V.waterPhysicsQueue,x.breakMode.get()),["u","i","o","j","k","l","m",",","."].includes(i)&&await En(e,i,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),l.preventDefault())}),e.getElementById("toggleFog").addEventListener("click",function(){e.getElementById("fogModeText").textContent!=="Clear"?x.fogMode.set("clear"):x.fogMode.set("fog")});function r(){let l=null,i=e.getElementById("worldSeedInput");i instanceof HTMLInputElement&&(l=i.value);let c=e.getElementById("currentSeed"),t=x.WORLD_HEIGHT.get(),d=x.WORLD_WIDTH.get(),A=Ut(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,t,d,x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.materialsInventory,V.seedInventory,Number(l));V.world.set(A);let u=tt(a,e),b=Sn(x.isFogScaled,t,d,u);V.exploredMap.set(b),console.log(`Generated new world with seed: ${l}`),c.textContent=l}function n(){let l=e.getElementById("currentSeed"),i=e.getElementById("worldSeedInput"),c=_e(),t=x.WORLD_HEIGHT.get(),d=x.WORLD_WIDTH.get(),A=Ut(x.BIOMES,x.SURFACE_LEVEL.get(),x.TILE_SIZE.get(),x.TILES,t,d,x.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.materialsInventory,V.seedInventory,c);V.world.set(A);let u=tt(a,e),b=Sn(x.isFogScaled,t,d,u);V.exploredMap.set(b),console.log(`Generated new world with random seed: ${c}`),i instanceof HTMLInputElement&&(i.value=String(c)),l.textContent=String(c)}e.getElementById("worldState").addEventListener("click",function(){e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")}),e.getElementById("generateWithSeed").addEventListener("click",r),e.getElementById("randomSeed").addEventListener("click",n),e.getElementById("copySeed").addEventListener("click",async function(){let l=e.getElementById("worldSeedInput");l instanceof HTMLInputElement&&await(async function(i,c){let t=i.navigator;if(t.clipboard&&i.isSecureContext)try{await t.clipboard.writeText(c)}catch{}})(a,l.value)});let g=e.getElementById("saveModeToggle");Jt().then(async l=>{let i=l==="auto"?"auto":"manual";if(console.log("Save Mode:",i),i==="auto")return g.innerText="Save Mode Auto",void(g.style.backgroundColor="var(--sg-color-green-500)");g.innerText="Save Mode Manual",g.style.backgroundColor="var(--sg-color-red-500)"}),g.addEventListener("click",async function(){let l=await Jt()==="auto"?"auto":"manual";if(l==="manual")return g.innerText="Save Mode Auto",g.style.backgroundColor="var(--sg-color-green-500)",await po("auto"),void await Fn(a);l==="auto"&&(g.innerText="Save Mode Manual",g.style.backgroundColor="var(--sg-color-red-500)",await po("manual"))}),e.getElementById("saveExternalGameFile").addEventListener("click",async function(){try{let l=Dt(a),i=JSON.stringify(l);await gi(a,i),console.log("Game state saved successfully")}catch(l){console.error("Failed to save game state:",l),alert("Failed to save game state. Check console for details.")}}),e.getElementById("loadExternalGameFile").addEventListener("click",async function(){try{let l=e.getElementById("currentSeed"),i=e.getElementById("worldSeedInput"),c;if(a.showOpenFilePicker){let[u]=await a.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/*":[".sgs"],"application/pdf":[".pdf"],"text/plain":[".txt"]}}]});c=await u.getFile()}else{let u=a.document.createElement("input");u.type="file",u.accept=".sgs,.pdf,.txt,text/plain,application/pdf,application/gzip,application/*",u.style.display="none",e.append(u);let b=new Promise(p=>{u.onchange=()=>p(u.files[0])});u.click(),c=await b,e.removeChild(u)}let t,d="{}";if(c.name.endsWith(".txt")&&(d=(await c.text()).replace(/\s+/g,"")),c.name.endsWith(".pdf")){let[u]=await At(c);d=await mt(new Blob([u.data]))}if(c.name.endsWith(".sgs")){let u=c.stream().pipeThrough(new a.DecompressionStream("gzip"));d=await(await new a.Response(u).blob()).text()}try{t=JSON.parse(d)}catch{throw new Error("Invalid game state file: not valid JSON.")}if(!t.config||!t.state)throw new Error("Invalid game state file: missing required config or state.");await ht(a,e,t);let{worldSeed:A}=t.config;i instanceof HTMLInputElement&&(i.value=A),l.textContent=A,console.log("Game state loaded successfully")}catch(l){console.error("Failed to load game state:",l),alert("Failed to load game state. Check console for details.")}});let o=!1,s=e.getElementById("shareExternalGameFile");if(typeof navigator<"u"&&navigator.canShare!==void 0)try{o=navigator.canShare({files:[new File([],"test")]})}catch(l){console.info(`File sharing is not enabled. ${JSON.stringify(l)}`)}o&&(e.querySelectorAll(".seed-controls--share").forEach(l=>l.removeAttribute("hidden")),s.addEventListener("click",async function(){try{let l;if(a.showOpenFilePicker){let[t]=await a.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/*":[".sgs"],"application/pdf":[".pdf"],"text/plain":[".txt"]}}]});l=await t.getFile()}else{let t=a.document.createElement("input");t.type="file",t.accept=".sgs,.pdf,.txt,text/plain,application/pdf,application/gzip,application/*",t.style.display="none",e.append(t);let d=new Promise(A=>{t.onchange=()=>A(t.files[0])});t.click(),l=await d,e.removeChild(t)}let i,c="{}";if(l.name.endsWith(".txt")&&(c=(await l.text()).replace(/\s+/g,"")),l.name.endsWith(".pdf")){let[t]=await At(l);c=await mt(new Blob([t.data]))}if(l.name.endsWith(".sgs")){let t=l.stream().pipeThrough(new a.DecompressionStream("gzip"));c=await(await new a.Response(t).blob()).text()}try{i=JSON.parse(c)}catch{throw new Error("Invalid game state file: not valid JSON.")}if(!i.config||!i.state)throw new Error("Invalid game state file: missing required config or state.");l=new File([c],`${l.name}.json.txt`,{type:"text/plain",lastModified:Date.now()}),typeof navigator<"u"&&navigator.canShare!==void 0&&navigator.canShare({files:[l]})?(await navigator.share({files:[l],title:"Sprite Garden Game Save",text:`Visit Sprite Garden, then 'Load' and checkout my world: ${l.name}

`,url:"https://kherrick.github.io/sprite-garden"}),console.log("Game state file shared successfully")):alert("Web Share API is not available on this device or browser.")}catch(l){l.name!=="AbortError"?(console.error("Failed to share game state file:",l),alert("Failed to share game state file. Check console for details.")):console.log("Game state file sharing was cancelled by the user")}}));let I=e.getElementById("openStorageBtn");I&&I.addEventListener("click",async function(){try{await(async function(l,i,c){let t=new Wn(l,i,c);return await t.createDialog(),t.show(),t})(a,a.document,e)}catch(l){console.error("Failed to open storage dialog:",l),alert("Failed to open storage dialog. Check console for details.")}}),e.querySelectorAll(".ui-grid__corner").forEach(l=>{l.querySelector(".ui-grid__corner--heading").addEventListener("click",i=>(function(c){c.preventDefault(),c.stopPropagation();let t=c.currentTarget;if(t instanceof HTMLDivElement){let d=t.nextElementSibling;if(d.getAttribute("hidden")!==null)return void d.removeAttribute("hidden");d.setAttribute("hidden","hidden")}})(i))})}function Mi(a,e){e.getElementById("controls").addEventListener("click",s=>{s.stopPropagation(),s.preventDefault(),e.querySelector(".touch-controls").toggleAttribute("hidden")});let r=e.getElementById("resolutionSelect");r&&r.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(x.currentResolution.set(s.currentTarget.value),ut(e,x))});let n=e.getElementById("toggleView");n&&n.addEventListener("click",()=>V.viewMode.set(V.viewMode.get()==="normal"?"xray":"normal"));let g=e.getElementById("toggleBreakMode");g&&g.addEventListener("click",()=>ar()),e.querySelectorAll(".seed-btn").forEach(s=>{s.addEventListener("click",I=>(function(l,i,c){if(!(c.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[t]=Object.keys(c.currentTarget.dataset);for(let b of c.currentTarget.parentElement.children)b.classList.remove("selected");c.currentTarget.classList.toggle("selected"),console.log(`Selecting seed: ${t}`);let d=i.selectedSeedType.get();console.log(`Current selected seed: ${d}`);let A=d===t.toUpperCase()?null:t.toUpperCase();i.selectedSeedType.set(A);let u=`New selected seed: ${Re(A)}`;console.log(u),l.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:u}}))})(e,V,I))}),e.querySelectorAll(".material-btn").forEach(s=>{s.addEventListener("click",I=>(function(l,i,c){if(!(c.currentTarget instanceof HTMLElement))throw new Error("currentTarget is not an HTMLElement");let[t]=Object.keys(c.currentTarget.dataset);for(let b of c.currentTarget.parentElement.children)b.classList.remove("selected");c.currentTarget.classList.toggle("selected"),console.log(`Selecting material: ${t}`);let d=i.selectedMaterialType.get();console.log(`Current selected material: ${d}`);let A=d===t.toUpperCase()?null:t.toUpperCase();i.selectedMaterialType.set(A);let u=`New selected material: ${Re(A)}`;console.log(u),l.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:u}}))})(e,V,I))});let o=e.getElementById("resolutionSelect");o instanceof HTMLSelectElement&&(o.value="400")}function Ni(a){let e=a.host;a.querySelectorAll(".touch-btn").forEach(r=>{let n=r.getAttribute("data-key"),g=!1,o=null;function s(){e.touchKeys[n]=!0,r instanceof HTMLButtonElement&&(r.style.background="var(--sg-color-gray-alpha-30)"),Vt.get()||n!=="r"&&n!=="w"&&n!=="upright"&&n!="upleft"||sr(a),n==="f"&&rr(a,V.growthTimers,V.plantStructures,V.player.get(),V.seedInventory.get(),V.selectedSeedType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()),n==="r"&&or(a,V.growthTimers,V.plantStructures,V.player,x.TILES,x.TILE_SIZE.get(),V.world,x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get(),V.waterPhysicsQueue,x.breakMode.get())}function I(){g||(g=!0,s(),n!=="f"&&n!=="r"||(o=setInterval(s,100)))}function l(){g=!1,e.touchKeys[n]=!1,r instanceof HTMLButtonElement&&(r.style.background="var(--sg-ui-touch-btn-background-color)"),o&&(clearInterval(o),o=null)}r.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),I()}),r.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),l()}),r.addEventListener("touchcancel",i=>{i.preventDefault(),i.stopPropagation(),l()}),r.addEventListener("mousedown",i=>{i.preventDefault(),i.stopPropagation(),I()}),r.addEventListener("mouseup",i=>{i.preventDefault(),i.stopPropagation(),l()}),r.addEventListener("mouseleave",i=>{i.preventDefault(),i.stopPropagation(),l()})}),a.querySelectorAll(".touch-btn.place-block").forEach(r=>{r.addEventListener("touchstart",async()=>await En(a,r.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get())),r.addEventListener("click",async()=>await En(a,r.dataset.key,V.materialsInventory.get(),V.player.get(),V.selectedMaterialType.get(),x.TILES,x.TILE_SIZE.get(),V.world.get(),x.WORLD_HEIGHT.get(),x.WORLD_WIDTH.get()))}),a.addEventListener("keyup",r=>{e.keys[r.key.toLowerCase()]=!1,r.preventDefault()}),a.addEventListener("touchstart",r=>{(r.target instanceof HTMLDivElement&&r.target.closest(".touch-controls")||r.target===a.getElementById("canvas"))&&r.preventDefault()},{passive:!1}),a.addEventListener("touchmove",r=>{(r.target instanceof HTMLDivElement&&r.target.closest(".touch-controls")||r.target===a.getElementById("canvas"))&&r.preventDefault()},{passive:!1}),a.addEventListener("touchend",r=>{(r.target instanceof HTMLDivElement&&r.target.closest(".touch-controls")||r.target===a.getElementById("canvas"))&&r.preventDefault()},{passive:!1}),a.addEventListener("contextmenu",r=>{(r.target instanceof HTMLDivElement&&r.target.closest(".touch-controls")||r.target===a.getElementById("canvas"))&&r.preventDefault()}),a.addEventListener("dblclick",r=>{(r.target instanceof HTMLDivElement&&r.target.closest(".touch-controls")||r.target===a.getElementById("canvas"))&&r.preventDefault()})}function hn(a,e,r,n,g,o,s,I,l){let i=(function(A,u,b){let p,y;if(A instanceof MouseEvent)p=A.clientX,y=A.clientY;else{if(!(A.touches&&A.touches.length>0))return;p=A.touches[0].clientX,y=A.touches[0].clientY}if(p===void 0||y===void 0||!isFinite(p)||!isFinite(y)||!isFinite(b)||b<=0)return;let f=u.getBoundingClientRect(),v=u.width/f.width*b,S=u.height/f.height*b;return isFinite(v)&&isFinite(S)?{x:(p-f.left)*v,y:(y-f.top)*S}:void 0})(a,e,n),c=r.get(),t=Math.floor((i.x+c.x)/o),d=Math.floor((i.y+c.y)/o);if(t>=0&&t<l&&d>=0&&d<I){let A=s.getTile?s.getTile(t,d):null;if(!A||A===g.AIR)return void(e.title=`Tile: AIR (${t}, ${d})`);let u=Object.keys(g).find(b=>g[b]===A)||"Custom";e.title=`Tile: ${u} (${t}, ${d})`}}function ki(){z.isDragging=!1,z.lastPaintedTile=null}function Bi(a,e,r,n,g,o,s,I){a.addEventListener("mousedown",l=>(function(i,c,t,d,A,u,b){if(!(i.target instanceof HTMLCanvasElement))return;let p=i.target.getBoundingClientRect(),y=i.clientX-p.left,f=i.clientY-p.top;return Zo(y,f,c,t,d,A,u,b)?(Mt(y,f,c,t,d,A,u,b,!0),void i.preventDefault()):void 0})(l,e,n,g,o,s,I)),a.addEventListener("mousemove",l=>(function(i,c,t,d,A,u,b,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target,f=y.getBoundingClientRect(),v=i.clientX-f.left,S=i.clientY-f.top;i.buttons===1&&z.isEnabled&&Mt(v,S,c,d,A,u,b,p,!1)?i.preventDefault():hn(i,y,c,t,d,A,p.get(),u,b)})(l,e,r,n,g,o,s,I)),a.addEventListener("mouseup",()=>ki()),a.addEventListener("touchmove",l=>(function(i,c,t,d,A,u,b,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let f=y.getBoundingClientRect(),v=i.touches[0];if(Mt(v.clientX-f.left,v.clientY-f.top,c,d,A,u,b,p,!1))return void i.preventDefault()}hn(i,y,c,t,d,A,p.get(),u,b)})(l,e,r,n,g,o,s,I)),a.addEventListener("touchstart",l=>(function(i,c,t,d,A,u,b,p){if(!(i.target instanceof HTMLCanvasElement))return;let y=i.target;if(i.touches.length===1){let f=y.getBoundingClientRect(),v=i.touches[0],S=v.clientX-f.left,R=v.clientY-f.top;if(Zo(S,R,c,d,A,u,b,p))return Mt(S,R,c,d,A,u,b,p,!0),void i.preventDefault()}hn(i,y,c,t,d,A,p.get(),u,b)})(l,e,r,n,g,o,s,I))}function xi(a,e,r,n,g,o){let s=Math.floor(e.get().x/n);if(s>=0&&s<g){let I=qo(s,r,o.get());a.textContent=I.name}}function Vi(a,e,r,n,g){switch(n=Math.max(0,Math.min(1,n)),r){case"WHEAT":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.WHEAT_GROWING}),i;let c=Math.max(1,Math.ceil(4*I));for(let t=0;t<c;t++){let d=s-t;t<c-1||I<.8?i.push({x:o,y:d,tile:l.WHEAT_STALK}):i.push({x:o,y:d,tile:l.WHEAT_GRAIN}),I>.5&&t>0&&t<c-1&&(Math.random()<.4&&i.push({x:o-1,y:d,tile:l.WHEAT_STALK}),Math.random()<.4&&i.push({x:o+1,y:d,tile:l.WHEAT_STALK}))}if(I>.9){let t=s-c+1;i.push({x:o-1,y:t,tile:l.WHEAT_GRAIN}),i.push({x:o+1,y:t,tile:l.WHEAT_GRAIN})}return i})(a,e,n,g);case"CARROT":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.CARROT_GROWING}),i;if(I>.2){let t=Math.ceil(2*I);for(let d=1;d<=t;d++)i.push({x:o,y:s+d,tile:l.CARROT_ROOT})}let c=Math.max(1,Math.ceil(2*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.CARROT_LEAVES}),I>.5&&t===c-1&&(i.push({x:o-1,y:s-t,tile:l.CARROT_LEAVES}),i.push({x:o+1,y:s-t,tile:l.CARROT_LEAVES}));return i})(a,e,n,g);case"MUSHROOM":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.MUSHROOM_GROWING}),i;let c=Math.max(1,Math.ceil(3*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.MUSHROOM_STEM});if(I>.4){let t=s-c;i.push({x:o,y:t,tile:l.MUSHROOM_CAP}),I>.6&&(i.push({x:o-1,y:t,tile:l.MUSHROOM_CAP}),i.push({x:o+1,y:t,tile:l.MUSHROOM_CAP})),I>.8&&(i.push({x:o-1,y:t-1,tile:l.MUSHROOM_CAP}),i.push({x:o,y:t-1,tile:l.MUSHROOM_CAP}),i.push({x:o+1,y:t-1,tile:l.MUSHROOM_CAP}))}return i})(a,e,n,g);case"CACTUS":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.CACTUS_GROWING}),i;let c=Math.max(1,Math.ceil(5*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.CACTUS_BODY});if(I>.4&&c>2){let t=s-Math.floor(.6*c);i.push({x:o-1,y:t,tile:l.CACTUS_BODY}),I>.6&&i.push({x:o-1,y:t-1,tile:l.CACTUS_BODY})}if(I>.5&&c>3){let t=s-Math.floor(.7*c);i.push({x:o+1,y:t,tile:l.CACTUS_BODY}),I>.7&&i.push({x:o+1,y:t-1,tile:l.CACTUS_BODY})}if(I>.95){let t=s-c;i.push({x:o,y:t,tile:l.CACTUS_FLOWER})}return i})(a,e,n,g);case"WALNUT":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.TREE_GROWING}),i;let c=_e(3,5),t=Math.max(1,Math.ceil(c*I));for(let d=0;d<t;d++){let A=s-d;i.push({x:o,y:A,tile:l.TREE_TRUNK})}if(I>.3){let d=s-t,A=Math.min(3,Math.ceil(5*(I-.3)));for(let u=-A;u<=A;u++)for(let b=-A;b<=1;b++){let p=o+u,y=d+b;Math.sqrt(u*u+b*b)<=A&&b<=0&&(i.find(f=>f.x===p&&f.y===y&&f.tile===l.TREE_TRUNK)||i.push({x:p,y,tile:l.TREE_LEAVES}))}}return i})(a,e,n,g);case"BERRY_BUSH":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.BERRY_BUSH_GROWING}),i;let c=Math.max(1,Math.ceil(3*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.BERRY_BUSH_BRANCH});if(I>.3){let t=s-c,d=Math.min(2,Math.ceil(3*(I-.3)));for(let A=-d;A<=d;A++)for(let u=0;u<=d;u++){let b=o+A,p=t+u,y=Math.abs(A)+Math.abs(u);y<=d&&y>0&&i.push({x:b,y:p,tile:l.BERRY_BUSH_LEAVES})}}if(I>.8){let t=s-c;Math.random()<.6&&i.push({x:o-1,y:t+1,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o+1,y:t+1,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o-1,y:t,tile:l.BERRY_BUSH_BERRIES}),Math.random()<.6&&i.push({x:o+1,y:t,tile:l.BERRY_BUSH_BERRIES})}return i})(a,e,n,g);case"BAMBOO":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.BAMBOO_GROWING}),i;let c=Math.max(1,Math.ceil(7*I));for(let t=0;t<c;t++)t%2==0?i.push({x:o,y:s-t,tile:l.BAMBOO_JOINT}):i.push({x:o,y:s-t,tile:l.BAMBOO_STALK});if(I>.5){let t=s-c;i.push({x:o-1,y:t,tile:l.BAMBOO_LEAVES}),i.push({x:o+1,y:t,tile:l.BAMBOO_LEAVES}),I>.7&&(i.push({x:o-1,y:t+1,tile:l.BAMBOO_LEAVES}),i.push({x:o+1,y:t+1,tile:l.BAMBOO_LEAVES}))}return i})(a,e,n,g);case"SUNFLOWER":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.SUNFLOWER_GROWING}),i;let c=Math.max(1,Math.ceil(5*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.SUNFLOWER_STEM});if(I>.3)for(let d=2;d<c;d+=2)d%2==0?i.push({x:o-1,y:s-d,tile:l.SUNFLOWER_LEAVES}):i.push({x:o+1,y:s-d,tile:l.SUNFLOWER_LEAVES});if(I>.7){let t=s-c;i.push({x:o,y:t,tile:l.SUNFLOWER_CENTER}),I>.85&&(i.push({x:o-1,y:t,tile:l.SUNFLOWER_PETALS}),i.push({x:o+1,y:t,tile:l.SUNFLOWER_PETALS}),i.push({x:o,y:t-1,tile:l.SUNFLOWER_PETALS}),i.push({x:o,y:t+1,tile:l.SUNFLOWER_PETALS}))}return i})(a,e,n,g);case"CORN":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.CORN_GROWING}),i;let c=Math.max(1,Math.ceil(4*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.CORN_STALK});if(I>.4)for(let t=1;t<c;t++)t%2==1?i.push({x:o-1,y:s-t,tile:l.CORN_LEAVES}):i.push({x:o+1,y:s-t,tile:l.CORN_LEAVES});if(I>.7){let t=s-Math.floor(.6*c);i.push({x:o+1,y:t,tile:l.CORN_EAR}),I>.85&&i.push({x:o+1,y:t-1,tile:l.CORN_SILK})}return i})(a,e,n,g);case"PINE_TREE":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.PINE_TREE_GROWING}),i;let c=Math.max(1,Math.ceil(8*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.PINE_TRUNK});if(I>.25){let t=s-Math.floor(.3*c),d=Math.ceil(.7*c);for(let A=0;A<d;A++){let u=t-A,b=Math.max(1,Math.floor((d-A)/2));for(let p=-b;p<=b;p++)p===0&&A===0||i.push({x:o+p,y:u,tile:l.PINE_NEEDLES})}}if(I>.9){let t=s-Math.floor(.5*c);Math.random()<.5&&i.push({x:o-1,y:t,tile:l.PINE_CONE}),Math.random()<.5&&i.push({x:o+1,y:t,tile:l.PINE_CONE})}return i})(a,e,n,g);case"WILLOW_TREE":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.WILLOW_TREE_GROWING}),i;let c=Math.max(1,Math.ceil(6*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.WILLOW_TRUNK});if(I>.3){let t=s-c,d=Math.ceil(4*I);for(let A=0;A<d;A++)i.push({x:o-1-Math.floor(A/2),y:t+A,tile:l.WILLOW_BRANCHES}),I>.6&&A>0&&i.push({x:o-1-Math.floor(A/2),y:t+A,tile:l.WILLOW_LEAVES});for(let A=0;A<d;A++)i.push({x:o+1+Math.floor(A/2),y:t+A,tile:l.WILLOW_BRANCHES}),I>.6&&A>0&&i.push({x:o+1+Math.floor(A/2),y:t+A,tile:l.WILLOW_LEAVES})}if(I>.8){let t=s-c;i.push({x:o-2,y:t+2,tile:l.WILLOW_LEAVES}),i.push({x:o+2,y:t+2,tile:l.WILLOW_LEAVES}),i.push({x:o-3,y:t+3,tile:l.WILLOW_LEAVES}),i.push({x:o+3,y:t+3,tile:l.WILLOW_LEAVES})}return i})(a,e,n,g);case"FERN":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.FERN_GROWING}),i;let c=Math.max(1,Math.ceil(3*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.FERN_STEM});if(I>.3){let t=Math.ceil(2*I);for(let d=0;d<c;d++){let A=Math.min(t,d+1);for(let u=-A;u<=A;u++)u!==0&&i.push({x:o+u,y:s-d,tile:l.FERN_FROND})}}return i})(a,e,n,g);case"TULIP":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.TULIP_GROWING}),i;I>.15&&i.push({x:o,y:s+1,tile:l.TULIP_BULB});let c=Math.max(1,Math.ceil(3*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.TULIP_STEM});if(I>.3){let t=s-Math.floor(.5*c);i.push({x:o-1,y:t,tile:l.TULIP_LEAVES}),i.push({x:o+1,y:t,tile:l.TULIP_LEAVES})}if(I>.7){let t=s-c;i.push({x:o,y:t,tile:l.TULIP_PETALS}),I>.85&&(i.push({x:o-1,y:t,tile:l.TULIP_PETALS}),i.push({x:o+1,y:t,tile:l.TULIP_PETALS}),i.push({x:o,y:t-1,tile:l.TULIP_PETALS}))}return i})(a,e,n,g);case"AGAVE":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.AGAVE_GROWING}),i;if(i.push({x:o,y:s,tile:l.AGAVE_BASE}),I>.2){let c=Math.min(3,Math.ceil(4*(I-.2)));for(let t=-c;t<=c;t++)for(let d=-1;d<=1;d++){if(t===0&&d===0)continue;let A=Math.abs(t)+Math.abs(d);A<=c&&A>0&&i.push({x:o+t,y:s+d,tile:l.AGAVE_SPIKE})}}if(I>.8){let c=Math.ceil(30*(I-.8));for(let t=1;t<=c;t++)i.push({x:o,y:s-t,tile:l.AGAVE_FLOWER_STALK});if(I>.95){let t=s-c;i.push({x:o,y:t,tile:l.AGAVE_FLOWER}),i.push({x:o-1,y:t,tile:l.AGAVE_FLOWER}),i.push({x:o+1,y:t,tile:l.AGAVE_FLOWER})}}return i})(a,e,n,g);case"LAVENDER":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.LAVENDER_GROWING}),i;let c=Math.max(1,Math.ceil(2*I));if(I>.2&&(i.push({x:o,y:s,tile:l.LAVENDER_BUSH}),I>.4&&(i.push({x:o-1,y:s,tile:l.LAVENDER_BUSH}),i.push({x:o+1,y:s,tile:l.LAVENDER_BUSH}))),I>.5)for(let t=1;t<=c;t++)i.push({x:o,y:s-t,tile:l.LAVENDER_STEM}),I>.7&&t===c&&(i.push({x:o-1,y:s-t,tile:l.LAVENDER_STEM}),i.push({x:o+1,y:s-t,tile:l.LAVENDER_STEM}));if(I>.75){let t=s-c;i.push({x:o,y:t,tile:l.LAVENDER_FLOWERS}),I>.85&&(i.push({x:o-1,y:t,tile:l.LAVENDER_FLOWERS}),i.push({x:o+1,y:t,tile:l.LAVENDER_FLOWERS}))}return i})(a,e,n,g);case"KELP":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.KELP_GROWING}),i;let c=Math.max(1,Math.ceil(6*I));for(let t=0;t<c;t++){let d=Math.floor(1.5*Math.sin(.5*t));i.push({x:o+d,y:s-t,tile:l.KELP_BLADE}),I>.5&&t%2==1&&t<c-1&&i.push({x:o+d,y:s-t,tile:l.KELP_BULB})}return i})(a,e,n,g);case"ROSE":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.ROSE_GROWING}),i;let c=Math.max(1,Math.ceil(4*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.ROSE_STEM}),I>.3&&t>0&&t<c-1&&(t%2==0?i.push({x:o-1,y:s-t,tile:l.ROSE_THORNS}):i.push({x:o+1,y:s-t,tile:l.ROSE_THORNS}));if(I>.4)for(let t=1;t<c;t+=2)i.push({x:o-1,y:s-t,tile:l.ROSE_LEAVES}),i.push({x:o+1,y:s-t,tile:l.ROSE_LEAVES});if(I>.6){let t=s-c;i.push({x:o,y:t,tile:l.ROSE_BUD})}if(I>.85){let t=s-c;i.push({x:o,y:t,tile:l.ROSE_BLOOM}),i.push({x:o-1,y:t,tile:l.ROSE_BLOOM}),i.push({x:o+1,y:t,tile:l.ROSE_BLOOM}),i.push({x:o,y:t-1,tile:l.ROSE_BLOOM})}return i})(a,e,n,g);case"PUMPKIN":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.PUMPKIN_GROWING}),i;if(I>.2){let c=Math.ceil(3*I);for(let t=0;t<c;t++)i.push({x:o+t,y:s,tile:l.PUMPKIN_VINE}),i.push({x:o-t,y:s,tile:l.PUMPKIN_VINE})}if(I>.4){let t=Math.ceil(3*I);for(let d=2;d<t;d+=2)i.push({x:o+d,y:s-1,tile:l.PUMPKIN_LEAVES}),i.push({x:o-d,y:s-1,tile:l.PUMPKIN_LEAVES})}if(I>.6){let c=Math.ceil(5*(I-.6));i.push({x:o,y:s,tile:l.PUMPKIN_FRUIT}),c>1&&(i.push({x:o+1,y:s,tile:l.PUMPKIN_FRUIT}),i.push({x:o-1,y:s,tile:l.PUMPKIN_FRUIT})),c>2&&(i.push({x:o+1,y:s+1,tile:l.PUMPKIN_FRUIT}),i.push({x:o-1,y:s+1,tile:l.PUMPKIN_FRUIT}))}return I>.9&&i.push({x:o,y:s-1,tile:l.PUMPKIN_STEM}),i})(a,e,n,g);case"LOTUS":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.LOTUS_GROWING}),i;if(I>.2){let c=Math.ceil(2*I);for(let t=1;t<=c;t++)i.push({x:o,y:s+t,tile:l.LOTUS_STEM})}if(I>.4&&(i.push({x:o,y:s,tile:l.LOTUS_PAD}),I>.6&&(i.push({x:o-1,y:s,tile:l.LOTUS_PAD}),i.push({x:o+1,y:s,tile:l.LOTUS_PAD}))),I>.7&&i.push({x:o,y:s-1,tile:l.LOTUS_BUD}),I>.85){let c=s-1;i.push({x:o,y:c,tile:l.LOTUS_FLOWER}),i.push({x:o-1,y:c,tile:l.LOTUS_FLOWER}),i.push({x:o+1,y:c,tile:l.LOTUS_FLOWER}),i.push({x:o,y:c-1,tile:l.LOTUS_FLOWER})}return i})(a,e,n,g);case"BIRCH":return(function(o,s,I,l){let i=[];if(I<.1)return i.push({x:o,y:s,tile:l.BIRCH_GROWING}),i;let c=Math.max(1,Math.ceil(7*I));for(let t=0;t<c;t++)i.push({x:o,y:s-t,tile:l.BIRCH_TRUNK}),I>.3&&t%2==1&&i.push({x:o,y:s-t,tile:l.BIRCH_BARK});if(I>.5){let t=s-Math.floor(.7*c);i.push({x:o-1,y:t,tile:l.BIRCH_BRANCHES}),i.push({x:o+1,y:t,tile:l.BIRCH_BRANCHES}),I>.7&&(i.push({x:o-2,y:t,tile:l.BIRCH_BRANCHES}),i.push({x:o+2,y:t,tile:l.BIRCH_BRANCHES}))}if(I>.6){let t=s-c,d=2;for(let A=-d;A<=d;A++)for(let u=-d;u<=1;u++)Math.abs(A)+Math.abs(u)<=d+1&&u<=0&&(A===0&&u>-c||i.push({x:o+A,y:t+u,tile:l.BIRCH_LEAVES}))}if(I>.9){let t=s-c;i.push({x:o-1,y:t+1,tile:l.BIRCH_CATKINS}),i.push({x:o+1,y:t+1,tile:l.BIRCH_CATKINS})}return i})(a,e,n,g);default:return[{x:a,y:e,tile:g.WHEAT_GROWING}]}}function Yi(a,e,r,n,g,o){let s=!1,I=!1,l=n.get(),i=F({},a.get()),c=F({},e.get());for(let[t,d]of Object.entries(i)){if(d.timeLeft-=1/60,c[t]){let A=c[t],u=Math.max(0,Math.min(1,1-d.timeLeft/r[d.seedType].growthTime));A.blocks&&(Array.isArray(A.blocks)?A.blocks:Object.values(A.blocks)).forEach(y=>{y.x>=0&&y.x<o&&y.y>=0&&y.y<g&&l.getTile(y.x,y.y)!==r.AIR&&l.setTile(y.x,y.y,r.AIR)});let[b,p]=t.split(",").map(Number);A.blocks=Vi(b,p,d.seedType,u,r),(Array.isArray(A.blocks)?A.blocks:Object.values(A.blocks)).forEach(y=>{y.x>=0&&y.x<o&&y.y>=0&&y.y<g&&l.setTile(y.x,y.y,y.tile)}),I=!0}d.timeLeft<=0&&(c[t]&&(c[t].mature=!0,c[t].seedType=d.seedType),delete i[t],s=!0)}s&&a.set(i),I&&e.set(c)}function Xi(a,e,r,n){let g=Math.floor(e.get().y/n),o="Surface";if(g>r){let s=g-r;o=s<15?"Shallow":s<30?"Deep":"Very Deep"}else g<r-5&&(o="Sky");a.textContent=o}function Mo(a,e,r,n,g,o,s,I){return[[s,I],[s+r,I],[s,I+a],[s+r,I+a],[s+r/2,I],[s+r/2,I+a],[s,I+a/2],[s+r,I+a/2]].some(l=>(function(i,c,t,d,A,u){if(!c||typeof c.getTile!="function")return console.error("isSolid: Invalid world object",{hasWorld:!!c,worldType:typeof c,hasGetTile:c?typeof c.getTile:"N/A",args:{tileSize:i,worldHeight:t,worldWidth:d,x:A,y:u},stack:new Error().stack}),!0;let b=Math.floor(A/i),p=Math.floor(u/i);if(b<0||b>=d||p<0||p>=t)return!0;let y=c.getTile(b,p);return y&&y.solid})(e,n,g,o,l[0],l[1]))}function fe(a,e){let r=a.host;return!!(r&&typeof r=="object"&&"keys"in r&&"touchKeys"in r)&&(r.keys[e]||r.touchKeys[e])}function Ji(a,e,r,n,g,o,s,I,l,i,c,t=1){let d=l.get(),A=I.get(),u=s.get();d.velocityY+=e,d.velocityY>r&&(d.velocityY=r);let b=0,p=0;if(fe(c,"upleft")?(b=-1,p=-1,d.lastDirection=-1):fe(c,"upright")?(b=1,p=-1,d.lastDirection=1):fe(c,"downleft")?(b=-1,p=1,d.lastDirection=-1):fe(c,"downright")?(b=1,p=1,d.lastDirection=1):(fe(c,"a")||fe(c,"arrowleft")?(b=-1,d.lastDirection=-1):(fe(c,"d")||fe(c,"arrowright"))&&(b=1,d.lastDirection=1),fe(c,"s")&&(p=1)),b!==0){let R=b*d.speed*t;Math.abs(d.velocityX)<.5||Math.sign(d.velocityX)!==Math.sign(R)?d.velocityX=.3*R:d.velocityX=R}else d.velocityX*=a,d.lastDirection=0;(fe(c,"w")||fe(c,"arrowup")||fe(c," ")||fe(c,"upleft")||fe(c,"upright"))&&d.onGround&&(d.velocityY=-d.jumpPower,d.onGround=!1),b!==0&&p!==0&&(d.velocityX*=.707);let y=d.x+d.velocityX;Mo(d.height,n,d.width,u,g,o,y,d.y)?d.velocityX=0:d.x=y;let f=d.y+d.velocityY;Mo(d.height,n,d.width,u,g,o,d.x,f)?(d.velocityY>0&&(d.onGround=!0),d.velocityY=0):(d.y=f,d.onGround=!1),d.x=Math.max(0,Math.min(d.x,o*n-d.width)),d.y=Math.max(0,Math.min(d.y,g*n-d.height));let v=d.x+d.width/2-i.width/2,S=d.y+d.height/2-i.height/2;A.x+=.1*(v-A.x),A.y+=.1*(S-A.y),A.x=Math.max(0,Math.min(A.x,o*n-i.width)),A.y=Math.max(0,Math.min(A.y,g*n-i.height))}var No=performance.now(),kt=0,dt={player:{x:0,y:0},camera:{x:0,y:0}},bn=null,ko=0;async function Oi(){let a=Date.now();return(a-ko>1e3||bn===null)&&(bn=await te.getItem("sprite-garden-movement-scale"),ko=a),bn}async function Yn(a,e,r,n,g,o,s,I,l,i,c,t,d,A,u,b,p,y,f,v,S,R,T,k,X,J,D,Q,me,ce,$){if(Q.get())return void Q.set(!1);let ae=performance.now(),Ie=Math.min(ae-No,250);No=ae,kt+=Ie;let pe=0;for(;kt>=20&&pe<20;){let le=D.get(),ne=R.get();dt.player.x=le.x,dt.player.y=le.y,dt.camera.x=ne.x,dt.camera.y=ne.y,Ji(c,t,A,b,f,v,$,R,D,a,r,await Oi()),Yi(X,J,p,$,f,v),$o(p,y,ce,$,f,v),xi(n,D,I,b,v,S),Xi(g,D,u,b),k.set(k.get()+.02),kt-=20,pe++}(function(le,ne,we,Ze,de,ot,Ke,Ue,ze,rt,q,he,Te,Ge,ue,oe,it){let Se=ne.get(),Me=we.get(),Xe=Ke.get(),Ne=Te.get(),De=Ge.player.x+(Se.x-Ge.player.x)*ue,He=Ge.player.y+(Se.y-Ge.player.y)*ue,se=Ge.camera.x+(Me.x-Ge.camera.x)*ue,ge=Ge.camera.y+(Me.y-Ge.camera.y)*ue,ee=le.getContext("2d");ee.fillStyle=oe.air,ee.fillRect(0,0,le.width,le.height);let Je=Math.ceil(le.width/de)+1,pt=Math.ceil(le.height/de)+1,yt=Math.floor(se/de),vt=Math.floor(ge/de);for(let Le=0;Le<Je;Le++)for(let ke=0;ke<pt;ke++){let Be=yt+Le,at=vt+ke;if(Be>=0&&Be<ze&&at>=0&&at<Ue){let Ee=Xe.getTile(Be,at);if(!Ee||Ee===Ze.AIR)continue;let lt=new H.Computed(()=>ot.get()==="xray"&&Ee.solid&&Ee!==Ze.COAL&&Ee!==Ze.IRON&&Ee!==Ze.GOLD&&Ee!==Ze.LAVA).get()?"xray":it[Ee.id];ee.fillStyle=oe[lt],ee.fillRect(Math.round(Le*de-se%de),Math.round(ke*de-ge%de),de,de)}}let Fe=De-se,je=He-ge;if(ee.fillStyle=oe["player-body"],ee.fillRect(Fe,je,Se.width,Se.height),ee.strokeStyle=oe["player-border"],ee.lineWidth=1,ee.strokeRect(Fe,je,Se.width,Se.height),ee.fillStyle=oe["player-eyes"],ee.fillRect(Fe+1,je+1,1,1),ee.fillRect(Fe+4,je+1,1,1),rt.get()==="fog"){Ne.updateFromPlayer(ne,de);let Le={get:()=>({x:se,y:ge})};if(q.get())return void Ne.renderScaled(ee,le,de,Le,he.get());let{velocityX:ke,velocityY:Be}=Se;(Math.abs(ke)>.1||Math.abs(Be)>.1)&&q.set(!0),Ne.render(ee,le,de,Le)}})(a,D,R,p,b,me,$,f,v,l,d,i,T,dt,kt/20,s,o),requestAnimationFrame(async()=>await Yn(a,e,r,n,g,o,s,I,l,i,c,t,d,A,u,b,p,y,f,v,S,R,T,k,X,J,D,Q,me,ce,$))}function Bo(a={},e="--sg-",r="",n=g=>g){let g;for(let[o,s]of Object.entries(a)){if(g||(g={}),!o.startsWith(e))continue;let I=o.slice(e.length);I=I.slice(0,r.length>0?-r.length:void 0),g[n(I)]=s.trim().replace(/^['"]|['"]$/g,"")}return g}async function Ui(a,e,r){if(e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!0,error:null},bubbles:!0,composed:!0})),!r){let y="HTML canvas is required to init Sprite Garden.";return console.error(y),void e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,error:y},bubbles:!0,composed:!0}))}e.addEventListener("focusout",y=>{r.focus()}),r.focus();let n={},g="1";try{n=await(await fetch("data:text/html;base64,ewogICJuYW1lIjogInNwcml0ZS1nYXJkZW4iLAogICJ2ZXJzaW9uIjogIjEuMzguMCIsCiAgImRlc2NyaXB0aW9uIjogIlNwcml0ZSBHYXJkZW4gLSBHcm93IFNwcml0ZXMiLAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi8jc3ByaXRlLWdhcmRlbiIsCiAgImxpY2Vuc2UiOiAiQUdQTC0zLjAiLAogICJhdXRob3IiOiAiS2FybCBIZXJyaWNrIDxtZUBrYXJsaGVycmljay5jb20+IiwKICAidHlwZSI6ICJtb2R1bGUiLAogICJtYWluIjogImJpbi9zZXJ2ZS5tanMiLAogICJtb2R1bGUiOiAiaW5kZXgubWpzIiwKICAiZXhwb3J0cyI6IHsKICAgICIuIjogewogICAgICAiaW1wb3J0IjogIi4vc3ByaXRlLWdhcmRlbi1idW5kbGUtbWluLm1qcyIKICAgIH0KICB9LAogICJzY3JpcHRzIjogewogICAgImJ1aWxkOmJhc2U6YWJvdXQiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvYWJvdXQvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4OnVuYnVuZGxlZCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L2luZGV4Lmh0bWwgYmFzZSBocmVmIC9zcHJpdGUtZ2FyZGVuLyIsCiAgICAiYnVpbGQ6YmFzZTpwcml2YWN5IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L3ByaXZhY3kvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOnNoYXJlLXRhcmdldCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9zaGFyZS9zaGFyZS10YXJnZXQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpjaSI6ICJucHggY29uY3VycmVudGx5IC0ta2lsbC1vdGhlcnMgLS1zdWNjZXNzIGZpcnN0IFwibnBtIHJ1biBidWlsZCBzaW5nbGVcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImJ1aWxkOmRvY3MiOiAibnB4IHRzLXRvLWpzZG9jIC1wIC4vdHNjb25maWcuanNvbiIsCiAgICAiYnVpbGQ6Z2gtcGFnZXM6bm9qZWt5bGwiOiAibm9kZSBiaW4vdG91Y2gtbm9qZWt5bGwubWpzIiwKICAgICJidWlsZDpwa2c6Z2V0Om1ldGEiOiAiZ2l0IHJldi1wYXJzZSBIRUFEIiwKICAgICJidWlsZDpwa2c6bWV0YSI6ICJub2RlIC1lIFwiaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnOyBpbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJyB3aXRoIHsgdHlwZTogJ2pzb24nIH07IChhc3luYyAoKSA9PiB7IGNvbnN0IG1ldGEgPSBwcm9jZXNzLmFyZ3ZbMV07IHBrZ1snc3ByaXRlLWdhcmRlbiddID0geyBtZXRhIH07IGF3YWl0IGZzLndyaXRlRmlsZSgnZGlzdC9wYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShwa2csIG51bGwsIDIpKTsgfSkoKVwiIiwKICAgICJidWlsZDpzY3JpcHQ6aW5kZXgiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvaW5kZXguaHRtbCBzY3JpcHQgc3JjIHNwcml0ZS1nYXJkZW4tYnVuZGxlLW1pbi5tanMiLAogICAgImJ1aWxkOnNlcnZpY2Utd29ya2VyIjogImNkIGRpc3QgJiYgd29ya2JveCBnZW5lcmF0ZVNXIHNlcnZpY2Utd29ya2VyL3dvcmtib3gtY29uZmlnLmNqcyIsCiAgICAiYnVpbGQ6c2luZ2xlOmJ1bmRsZTpjbGVhbiI6ICJnaXQgY2hlY2tvdXQgSEVBRCAtLSBzcmMiLAogICAgImJ1aWxkOnNpbmdsZTpidW5kbGUiOiAiYmluL2Jhc2U2NC1lbmNvZGUtYnVuZGxlLXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDpzaW5nbGU6aW5kZXg6Y2xlYW4iOiAiZ2l0IGNoZWNrb3V0IEhFQUQgLS0gaW5kZXguaHRtbCIsCiAgICAiYnVpbGQ6c2luZ2xlOmluZGV4IjogImJpbi9iYXNlNjQtZW5jb2RlLWluZGV4LXJlcXVlc3RzLnNoIiwKICAgICJidWlsZDp6aXAiOiAiZ2l0IGFyY2hpdmUgLS1mb3JtYXQgemlwIC0tb3V0cHV0IFwic3ByaXRlLWdhcmRlbi1idWlsZC0kKG5wbSBydW4gLXMgYnVpbGQ6cGtnOmdldDptZXRhKS56aXBcIiBIRUFEIiwKICAgICJidWlsZCI6ICJiYXNoIGJpbi9idWlsZC5zaCIsCiAgICAiYnVuZGxlIjogInJvbGx1cCAtYyIsCiAgICAiY2xlYW46c2VydmljZS13b3JrZXIiOiAibm9kZSBiaW4vcmltcmFmLm1qcyBkaXN0L3NlcnZpY2Utd29ya2VyLyouY2pzIiwKICAgICJjbGVhbiI6ICJub2RlIGJpbi9yaW1yYWYubWpzIGRpc3QiLAogICAgImNvcHk6NDA0IjogIm5vZGUgYmluL25jcC5tanMgNDA0Lmh0bWwgZGlzdC80MDQuaHRtbCIsCiAgICAiY29weTphYm91dCI6ICJub2RlIGJpbi9uY3AubWpzIGFib3V0L2luZGV4Lmh0bWwgZGlzdC9hYm91dC9pbmRleC5odG1sIiwKICAgICJjb3B5OmRlcHMiOiAibm9kZSBiaW4vbmNwLm1qcyBkZXBzIGRpc3QvZGVwcyIsCiAgICAiY29weTppbmRleDphc3NldHMiOiAibm9kZSBiaW4vbmNwLm1qcyBhc3NldHMgZGlzdC9hc3NldHMiLAogICAgImNvcHk6aW5kZXg6bGljZW5zZSI6ICJub2RlIGJpbi9uY3AubWpzIExJQ0VOU0UgZGlzdC9MSUNFTlNFIiwKICAgICJjb3B5OmluZGV4OmxsbXMiOiAibm9kZSBiaW4vbmNwLm1qcyBsbG1zLnR4dCBkaXN0L2xsbXMudHh0IiwKICAgICJjb3B5OmluZGV4Om1hbmlmZXN0IjogIm5vZGUgYmluL25jcC5tanMgbWFuaWZlc3QuanNvbiBkaXN0L21hbmlmZXN0Lmpzb24iLAogICAgImNvcHk6aW5kZXg6cmVhZG1lIjogIm5vZGUgYmluL25jcC5tanMgUkVBRE1FLm1kIGRpc3QvUkVBRE1FLm1kIiwKICAgICJjb3B5OmluZGV4OnJvYm90cyI6ICJub2RlIGJpbi9uY3AubWpzIHJvYm90cy50eHQgZGlzdC9yb2JvdHMudHh0IiwKICAgICJjb3B5OmluZGV4OnNpdGVtYXAiOiAibm9kZSBiaW4vbmNwLm1qcyBzaXRlbWFwLnR4dCBkaXN0L3NpdGVtYXAudHh0IiwKICAgICJjb3B5OmluZGV4OnVuYnVuZGxlZCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCIsCiAgICAiY29weTppbmRleCI6ICJub2RlIGJpbi9uY3AubWpzIGluZGV4Lmh0bWwgZGlzdC9pbmRleC5odG1sIiwKICAgICJjb3B5OnBrZyI6ICJub2RlIGJpbi9uY3AubWpzIHBhY2thZ2UuanNvbiBkaXN0L3BhY2thZ2UuanNvbiIsCiAgICAiY29weTpwcml2YWN5IjogIm5vZGUgYmluL25jcC5tanMgcHJpdmFjeS9pbmRleC5odG1sIGRpc3QvcHJpdmFjeS9pbmRleC5odG1sIiwKICAgICJjb3B5OnNlcnZpY2Utd29ya2VyIjogIm5vZGUgYmluL25jcC5tanMgc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIGRpc3Qvc2VydmljZS13b3JrZXIvd29ya2JveC1jb25maWcuY2pzIiwKICAgICJjb3B5OnNoYXJlLXRhcmdldCI6ICJub2RlIGJpbi9uY3AubWpzIHNoYXJlIGRpc3Qvc2hhcmUiLAogICAgImNvcHk6c3JjOmluZGV4IjogIm5vZGUgYmluL25jcC5tanMgaW5kZXgubWpzIGRpc3QvaW5kZXgubWpzIiwKICAgICJjb3B5OnNyYyI6ICJub2RlIGJpbi9uY3AubWpzIHNyYyBkaXN0L3NyYyIsCiAgICAiZGVwbG95OmdoLXBhZ2VzIjogImdoLXBhZ2VzIC0tbm8taGlzdG9yeSAtLWRvdGZpbGVzIC0tZGlzdCBkaXN0IC0tcmVwbyBnaXRAZ2l0aHViLmNvbTpraGVycmljay9zcHJpdGUtZ2FyZGVuLmdpdCAtLXJlbW90ZSB1cHN0cmVhbSIsCiAgICAiZTJlIjogIm5weCBwbGF5d3JpZ2h0IGluc3RhbGwgJiYgbnB4IGNvbmN1cnJlbnRseSAtLWtpbGwtb3RoZXJzIC0tc3VjY2VzcyBmaXJzdCBcIm5weCBwbGF5d3JpZ2h0IHRlc3RcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImZvcm1hdCI6ICJwcmV0dGllciAqKi8qLntodG1sLGNzcyxqcyxtanN9IC0td3JpdGUiLAogICAgIm1pbmlmeTo0MDQiOiAicG9zdGh0bWwgZGlzdC80MDQuaHRtbCAtdSBodG1sbmFubyIsCiAgICAibWluaWZ5OmFib3V0IjogInBvc3RodG1sIGRpc3QvYWJvdXQvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6aW5kZXgiOiAicG9zdGh0bWwgZGlzdC9pbmRleC5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6cHJpdmFjeSI6ICJwb3N0aHRtbCBkaXN0L3ByaXZhY3kvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6c2hhcmUtdGFyZ2V0IjogInBvc3RodG1sIGRpc3Qvc2hhcmUvKi5odG1sIC11IGh0bWxuYW5vIiwKICAgICJzdGFydDpkZXYiOiAibnBtIHN0YXJ0IDgwODAiLAogICAgInN0YXJ0IjogIm5vZGUgYmluL3NlcnZlLm1qcyIsCiAgICAidGVzdCI6ICJOT0RFX09QVElPTlM9LS1leHBlcmltZW50YWwtdm0tbW9kdWxlcyBqZXN0IgogIH0sCiAgImRldkRlcGVuZGVuY2llcyI6IHsKICAgICJAcGxheXdyaWdodC90ZXN0IjogIl4xLjU2LjEiLAogICAgIkByb2xsdXAvcGx1Z2luLWNvbW1vbmpzIjogIl4yOS4wLjAiLAogICAgIkByb2xsdXAvcGx1Z2luLW5vZGUtcmVzb2x2ZSI6ICJeMTYuMC4zIiwKICAgICJAcm9sbHVwL3BsdWdpbi10ZXJzZXIiOiAiXjAuNC40IiwKICAgICJAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0IjogIl4xMi4zLjAiLAogICAgIkB4bWxkb20veG1sZG9tIjogIl4wLjguMTEiLAogICAgImNvbXByZXNzaW9uIjogIl4xLjguMSIsCiAgICAiY29uY3VycmVudGx5IjogIl45LjIuMSIsCiAgICAiY29ycyI6ICJeMi44LjUiLAogICAgImNzc25hbm8iOiAiXjcuMS4xIiwKICAgICJleHByZXNzIjogIl41LjEuMCIsCiAgICAiZXhwcmVzcy11cmxyZXdyaXRlIjogIl4yLjAuMyIsCiAgICAiZ2gtcGFnZXMiOiAiXjYuMy4wIiwKICAgICJodG1sbmFubyI6ICJeMi4xLjUiLAogICAgImplc3QiOiAiXjMwLjIuMCIsCiAgICAiamVzdC1lbnZpcm9ubWVudC1qc2RvbSI6ICJeMzAuMi4wIiwKICAgICJwb3N0Y3NzIjogIl44LjUuNiIsCiAgICAicG9zdGNzcy1jbGkiOiAiXjExLjAuMSIsCiAgICAicG9zdGh0bWwtY2xpIjogIl4wLjEwLjAiLAogICAgInByZXR0aWVyIjogIl4zLjYuMiIsCiAgICAicm9sbHVwIjogIl4yLjc5LjIiLAogICAgInRjcC1wb3J0LXVzZWQiOiAiXjEuMC4yIiwKICAgICJ0eXBlc2NyaXB0IjogIl41LjkuMyIsCiAgICAid29ya2JveC1jbGkiOiAiXjcuMy4wIgogIH0sCiAgImRlcGVuZGVuY2llcyI6IHsKICAgICJhbGVhIjogIl4xLjAuMSIsCiAgICAia29uYW1pLWNvZGUtanMiOiAiXjAuOC4zIiwKICAgICJsb2NhbGZvcmFnZSI6ICJeMS4xMC4wIiwKICAgICJzaWduYWwtcG9seWZpbGwiOiAiXjAuMi4yIiwKICAgICJzaW1wbGV4LW5vaXNlIjogIl40LjAuMyIsCiAgICAid29ya2JveC13aW5kb3ciOiAiXjcuNC4wIiwKICAgICJ6eGluZy13YXNtIjogIl4yLjIuNCIKICB9Cn0K")).json(),g=n.version}catch{console.log(`continuing with static version: ${g}`)}let{gameConfig:o,gameState:s}=await ai(a,g);a.document;let I=e.host;I.keys={},I.touchKeys={};let l=await(async function(y){try{let f=await te.getItem(y);if(f&&typeof f=="object")return console.log("Loaded custom colors:",Object.keys(f).length,"properties"),f}catch(f){console.error("Failed to load saved colors:",f)}return null})(Mn),i=tt(a,e),c=l??i;Tn(e,c),Gi(e,o.fogMode,s.viewMode),Ei(a,e),Ti(a,e),Mi(0,e),Ni(e),Ii(e,Ho.totalSeeds,o.breakMode,o.fogMode,o.worldSeed,s.gameTime,s.materialsInventory,s.seedInventory,s.selectedMaterialType,s.selectedSeedType,s.viewMode);let t=o.WORLD_HEIGHT.get(),d=o.WORLD_WIDTH.get(),A=await ci(a,e),u=!1;if(A||(u=await(async function(y,f){try{let v=await te.getItem(Xt),S=await te.getItem(Hn)==="auto";if(!v||!S)return!1;let R=y.document.createElement("dialog");R.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let T=new Date(v.timestamp).toLocaleString();return R.innerHTML=`
      <h3 style="margin: 0 0 1rem 0">Auto Save Detected</h3>
      <p style="margin: 0 0 1rem 0">
        A saved game from ${T} was found. Would you like to load it?
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
    `,f.append(R),R.showModal(),new Promise(k=>{let X=R.querySelector("#autoSaveNo"),J=R.querySelector("#autoSaveYes");J.addEventListener("click",async()=>{X.setAttribute("disabled","disabled");try{let D=Pe(y,v.data,"application/gzip"),Q;if(!("DecompressionStream"in y))throw new Error("DecompressionStream not supported");{let Ie=D.stream().pipeThrough(new y.DecompressionStream("gzip"));Q=await(await new y.Response(Ie).blob()).text()}let me=JSON.parse(Q);await ht(y,f,me);let{worldSeed:ce}=me.config,$=f.getElementById("worldSeedInput"),ae=f.getElementById("currentSeed");$ instanceof HTMLInputElement&&($.value=ce),ae&&(ae.textContent=ce),console.log("Auto save loaded successfully")}catch(D){console.error("Failed to load auto-save:",D)}R.close(),R.remove(),k(!0)}),X.addEventListener("click",()=>{J.setAttribute("disabled","disabled"),R.close(),R.remove(),k(!1)}),R.addEventListener("cancel",()=>{k(!1)})})}catch(v){return console.error("Failed to check for auto-save:",v),!1}})(a,e)),!A&&!u){let y=Ut(o.BIOMES,o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,t,d,o.worldSeed,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.materialsInventory,s.seedInventory);s.world.set(y);let f=Sn(o.isFogScaled,t,d,c);s.exploredMap.set(f)}setInterval(async()=>{await Jt()==="auto"&&await Fn(a)},6e4),Bi(r,s.camera,o.canvasScale.get(),o.TILES,o.TILE_SIZE.get(),o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),s.world),ut(e,o);let b=await te.setItem("sprite-garden-version",g);console.log(`Sprite Garden version: ${b}`),e.addEventListener("sprite-garden-reset",async y=>{let f,v;y instanceof CustomEvent&&(f=y?.detail?.colors??{}),v=Object.keys(f).length&&f.constructor===Object?Bo(f,"--sg-tile-","-color"):Bo(i,"--sg-tile-","-color"),await Yn(r,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),Ao(o.TILES),v,o.BIOMES,o.fogMode,o.fogScale,o.FRICTION.get(),o.GRAVITY.get(),o.isFogScaled,o.MAX_FALL_SPEED.get(),o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,o.waterPhysics,o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),o.worldSeed,s.camera,s.exploredMap,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.shouldReset,s.viewMode,s.waterPhysicsQueue,s.world),s.shouldReset.set(!0)});let p=(function(y,f,v="",S=""){let R;for(let T of f){R||(R={});let k=T.slice(v.length);k=k.slice(0,S.length>0?-S.length:void 0),R[k]=y.getPropertyValue(T)}return R})(a.getComputedStyle(e.host),Object.keys(Dn).map(y=>`--sg-tile-${y}-color`),"--sg-tile-","-color");await Yn(r,a,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),Ao(o.TILES),p,o.BIOMES,o.fogMode,o.fogScale,o.FRICTION.get(),o.GRAVITY.get(),o.isFogScaled,o.MAX_FALL_SPEED.get(),o.SURFACE_LEVEL.get(),o.TILE_SIZE.get(),o.TILES,o.waterPhysics,o.WORLD_HEIGHT.get(),o.WORLD_WIDTH.get(),o.worldSeed,s.camera,s.exploredMap,s.gameTime,s.growthTimers,s.plantStructures,s.player,s.shouldReset,s.viewMode,s.waterPhysicsQueue,s.world),setTimeout(()=>{ho.get()||(ho.set(!0),e.dispatchEvent(new CustomEvent("sprite-garden-toast",{detail:{message:'\u{1F3AE} Use the on screen controls or keyboard to jump or dig! Press the spacebar, \u2191,  "W", or "R" to begin.',config:{duration:0,manualClose:!0,stack:!0,bottomOffset:2}}})))},500),e.getElementById("loading").setAttribute("hidden","hidden"),e.dispatchEvent(new CustomEvent("sprite-garden-load",{detail:{isLoading:!1,pkg:n,error:null},bubbles:!0,composed:!0}))}var xo="sprite-garden",Xn=class extends HTMLElement{constructor(){if(super(),!this.shadowRoot){let e=globalThis.document.createElement("template");e.innerHTML=`
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

            ${In("--sg-color-",jo)}
            ${In("--sg-tile-",Dn)}
            ${In("--sg-ui-",Po)}
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

          <h4>Store / Save / Load</h4>

          <div class="seed-controls__save-load">
            <button id="openStorageBtn">\u{1F5C4}\uFE0F Open Game Storage</button>
            <button id="saveExternalGameFile">\u{1F5C3}\uFE0F Save Game File To Disk</button>
            <button id="loadExternalGameFile">\u{1F4BE} Load Game File From Disk</button>
          </div>

          <h4 class="seed-controls__header seed-controls--share" hidden>Share</h4>

          <div class="seed-controls__save-load seed-controls--share" hidden>
            <button id="shareExternalGameFile">\u{1F30D} Share Game File From Disk</button>
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
      `,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}}async connectedCallback(){let e=this.shadowRoot,r=e.querySelector("canvas");await Ui(globalThis,e,r)}async disconnectedCallback(){await Fn(globalThis)}};globalThis.customElements?.get(xo)||globalThis.customElements?.define(xo,Xn);function gr(a,e,r,n){return`
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
        '${r.replaceAll("/",",").replaceAll(",","','")}'
      ],
      ${a}
    );
  `}function cr(a,e){let r=a;for(let n of e){if(!r)return;r=r[n]}return r}function Pn(a){return a.replaceAll("/",":")}var Di=["spriteGarden"],Hi=["spriteGardenInfo"];function Fi(a,e){if(a&1){let r=qt();ye(0,"sprite-garden",3,0),$t("sprite-garden-load",function(g){Gt(r);let o=St();return Wt(o.handleSpriteGardenEvents(g))}),be()}}function ji(a,e){if(a&1){let r=qt();ye(0,"div",2,1)(2,"div",4)(3,"section")(4,"header")(5,"h1")(6,"a",5),ve(7,"Sprite Garden"),be()()(),ye(8,"section")(9,"img",6),$t("click",function(g){Gt(r);let o=St();return Wt(o.handleLoad(g))})("keydown",function(g){Gt(r);let o=St();return Wt(o.handleLoad(g))}),be(),ye(10,"h2")(11,"a",5),ve(12,"Sprite Garden"),be(),ve(13," is a 2D sandbox exploration and farming game. Learn more at the "),ye(14,"a",7),ve(15,"project page"),be(),ve(16,". "),be(),ye(17,"ul",8)(18,"li"),ve(19,"Procedural World Generation - Explore uniquely generated maps"),be(),ye(20,"li"),ve(21," Multiple Biomes - Forests, deserts, tundras, and swamps, with their own characteristics "),be(),ye(22,"li"),ve(23," Farming System - Plant and harvest different crop types with various growth cycles "),be(),ye(24,"li"),ve(25,"Resource gathering - Dig for items like coal, iron, and gold"),be(),ye(26,"li"),ve(27," Cave Systems - Discover underground caves filled with resources and challenges "),be(),ye(28,"li"),ve(29,"Building - Use collected materials to place blocks and shape the world"),be(),ye(30,"li"),ve(31," Clouds - Continue building and farming while in the sky"),Qt(32,"br")(33,"br")(34,"iframe",9),be(),ye(35,"li"),ve(36," Discover - Open source, extendable by nature, map editor, color customization, etc."),Qt(37,"br")(38,"br")(39,"iframe",10),be()()()()()()}}var dr=class a{doc=gt(no);isLoading=wt(!1);injector=gt(to);resizeObserver;renderSpriteGarden=wt(!1);themeService=gt(go);platformId=gt(oo);canvasEl=wt(null);spriteGarden=nn("spriteGarden");spriteGardenInfo=nn("spriteGardenInfo");fogMapModuleCommit="78b3cd8199f53d5b480d36479a60a38117d56780";fogMapModuleCommitPath="src/map/fog.mjs";fogMapModuleClassName="FogMap";async ngOnInit(){if(so(this.platformId)){let e=`https://raw.githubusercontent.com/kherrick/sprite-garden/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,r=Pn(e);if(globalThis.document.getElementById(r))return;let n=await(await fetch(e)).text(),g=globalThis.document.createElement("script");g.setAttribute("type","module"),g.setAttribute("id",r),g.textContent=gr(this.fogMapModuleClassName,this.fogMapModuleCommit,this.fogMapModuleCommitPath,n),globalThis.document.body.append(g)}}constructor(){eo(this.injector,()=>{tn(async()=>{let e=globalThis?.spriteGarden,r=this.themeService.theme(),n=e?.state,g=e?.config,o=g?.WORLD_WIDTH?.get(),s=g?.WORLD_HEIGHT?.get(),I;r==="dark"&&(I=re(F({},n?.exploredMap.get().colors),{"--sg-tile-fog-color":"#121212"})),r==="light"&&(I=re(F({},n?.exploredMap.get().colors),{"--sg-tile-fog-color":"#ffffff"}));let l=`spriteGarden/refs/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,i=Pn(l),t=cr(globalThis,i.split(":"))?.fromObject(re(F({},n?.exploredMap.get()),{colors:I}),o,s,I);n?.exploredMap.set(t)}),tn(()=>{let e=this.canvasEl();e&&e.focus()})})}handleLoad(e){if(e.key&&e.key!==" "&&e.key!=="Enter")return;this.renderSpriteGarden.set(!0);let r=(c,t)=>{let d;return(...A)=>{clearTimeout(d),d=setTimeout(()=>c(...A),t)}},n=()=>{let c=(p,y)=>{for(let[f,v]of Object.entries(y))p.style.setProperty(f,v)},t={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 2rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 2rem)","--sg-ui-touch-controls-bottom":"2rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},d={"--sg-ui-grid-corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 7rem)","--sg-ui-host-height":"calc(100dvh - 5rem)","--sg-ui-host-overflow":"hidden","--sg-ui-host-width":"calc(100vw - 7rem)","--sg-ui-touch-controls-bottom":"6rem","--sg-ui-touch-controls-position":"absolute","--sg-ui-touch-controls-width":"100%"},A=this.spriteGarden()?.nativeElement,u=globalThis.getComputedStyle(globalThis.document.body).width,b=Number(u.slice(0,-2));b<859&&c(A,t),b>=859&&c(A,d)},g=r(()=>{n()},0);typeof ResizeObserver=="function"&&(this.resizeObserver=new ResizeObserver(()=>{g()}),this.resizeObserver.observe(this.doc.body));let o=1e4,s=20,I=0,l=c=>{let t=this.doc.createElement("canvas");return t.width=c.width,t.height=c.height,c.toDataURL()===t.toDataURL()},i=()=>{let t=this.spriteGarden()?.nativeElement?.shadowRoot?.querySelector("canvas");if(t&&!l(t)){this.canvasEl.set(t);return}I<o&&(I+=s,setTimeout(i,s))};i()}handleSpriteGardenEvents(e){let r=this.spriteGarden()?.nativeElement,n=!!e?.detail?.isLoading;this.isLoading.set(n);let g=this.doc.querySelector(".progress");g&&(g.style.display=n?"none":"unset",r&&setTimeout(()=>{g.style.display="none",r.style.display="flex"},0))}ngOnDestroy(){this.resizeObserver?.unobserve(this.doc.body);let e=this.doc.querySelector(".progress");e&&(e.style.display="none")}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=ro({type:a,selectors:[["x-sprite-garden"]],viewQuery:function(r,n){r&1&&(en(n.spriteGarden,Di,5),en(n.spriteGardenInfo,Hi,5)),r&2&&lo(2)},decls:2,vars:1,consts:[["spriteGarden",""],["spriteGardenInfo",""],["sprite-garden-container",""],[3,"sprite-garden-load"],["sprite-garden",""],["href","https://kherrick.github.io/sprite-garden/"],["src","assets/images/sprite-garden-launcher.png","tabindex","0",1,"launcher",3,"click","keydown"],["href","https://github.com/kherrick/sprite-garden"],[1,"features"],["allowfullscreen","","frameborder","0","src",zt`//www.youtube.com/embed/Es60fVIyOjY`],["allowfullscreen","","frameborder","0","src",zt`//www.youtube.com/embed/VQbZTvWGXM4`]],template:function(r,n){r&1&&io(0,Fi,2,0,"sprite-garden")(1,ji,40,0,"div",2),r&2&&ao(n.renderSpriteGarden()?0:1)},styles:[`@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{--md-outlined-text-field-container-shape: 1rem;--md-outlined-button-container-shape: 1rem;--md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface)}.launcher{cursor:pointer}.features>li{padding-bottom:.5rem}[sprite-garden-container]{align-items:center;color:var(--md-sys-color-on-surface);display:flex;flex-direction:row;flex-wrap:wrap;grid-column-gap:1rem;grid-row-gap:1rem;justify-content:center;text-align:center}[sprite-garden-container] a{color:var(--md-sys-color-on-surface);text-decoration:underline}[sprite-garden-container] [sprite-garden]{max-width:35rem;text-align:center;display:flex;justify-content:center}[sprite-garden-container] [sprite-garden] iframe{height:auto;min-height:17.5625rem;width:100%}[sprite-garden-container] [sprite-garden] img{width:calc(100% - 2rem)}[sprite-garden-container] [sprite-garden] p{padding:0 1rem}[sprite-garden-container] [sprite-garden] ul{padding:0 3rem;text-align:left}sprite-garden{--sg-color-black: #121212;--sg-tile-fog-color: var(--x-shell-background-color);display:none}
`],encapsulation:3})};export{dr as XSpriteGardenComponent};
