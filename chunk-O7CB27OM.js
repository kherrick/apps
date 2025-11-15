import{b as Nn}from"./chunk-QNJTP72R.js";import{q as Tn}from"./chunk-DCYIHBUG.js";import{$b as En,Ab as Rn,Ac as Ht,Bb as Ln,Da as wn,Ec as Ut,Jb as ae,Kb as re,Lb as xt,Mb as Yt,Rb as Xt,Sb as gt,Va as kt,_b as Jt,ba as Fe,fa as Gn,fc as ge,ga as rt,ha as lt,ib as Sn,ka as Wn,la as Zn,ra as at}from"./chunk-5BYLU2DL.js";import{a as U,b as ee}from"./chunk-DAQOROHW.js";var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Q=(function r(e,i,o){function d(a,s){if(!i[a]){if(!e[a]){if(!s&&Ot)return Ot(a);if(n)return n(a,!0);var g=new Error("Cannot find module '"+a+"'");throw g.code="MODULE_NOT_FOUND",g}var c=i[a]={exports:{}};e[a][0].call(c.exports,function(t){return d(e[a][1][t]||t)},c,c.exports,r,e,i,o)}return i[a].exports}for(var n=Ot,l=0;l<o.length;l++)d(o[l]);return d})({1:[function(r,e,i){(function(o){var d,n,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var a=0,s=new l(I),g=o.document.createTextNode("");s.observe(g,{characterData:!0}),d=function(){g.data=a=++a%2}}else if(o.setImmediate||o.MessageChannel===void 0)d="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var C=o.document.createElement("script");C.onreadystatechange=function(){I(),C.onreadystatechange=null,C.parentNode.removeChild(C),C=null},o.document.documentElement.appendChild(C)}:function(){setTimeout(I,0)};else{var c=new o.MessageChannel;c.port1.onmessage=I,d=function(){c.port2.postMessage(0)}}var t=[];function I(){var C,p;n=!0;for(var A=t.length;A;){for(p=t,t=[],C=-1;++C<A;)p[C]();A=t.length}n=!1}e.exports=function(C){t.push(C)!==1||n||d()}}).call(this,st!==void 0?st:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(r,e,i){var o=r(1);function d(){}var n={},l=["REJECTED"],a=["FULFILLED"],s=["PENDING"];function g(A){if(typeof A!="function")throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,A!==d&&C(this,A)}function c(A,h,y){this.promise=A,typeof h=="function"&&(this.onFulfilled=h,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function t(A,h,y){o(function(){var W;try{W=h(y)}catch(R){return n.reject(A,R)}W===A?n.reject(A,new TypeError("Cannot resolve promise with itself")):n.resolve(A,W)})}function I(A){var h=A&&A.then;if(A&&(typeof A=="object"||typeof A=="function")&&typeof h=="function")return function(){h.apply(A,arguments)}}function C(A,h){var y=!1;function W(T){y||(y=!0,n.reject(A,T))}function R(T){y||(y=!0,n.resolve(A,T))}var B=p(function(){h(R,W)});B.status==="error"&&W(B.value)}function p(A,h){var y={};try{y.value=A(h),y.status="success"}catch(W){y.status="error",y.value=W}return y}e.exports=g,g.prototype.catch=function(A){return this.then(null,A)},g.prototype.then=function(A,h){if(typeof A!="function"&&this.state===a||typeof h!="function"&&this.state===l)return this;var y=new this.constructor(d);return this.state!==s?t(y,this.state===a?A:h,this.outcome):this.queue.push(new c(y,A,h)),y},c.prototype.callFulfilled=function(A){n.resolve(this.promise,A)},c.prototype.otherCallFulfilled=function(A){t(this.promise,this.onFulfilled,A)},c.prototype.callRejected=function(A){n.reject(this.promise,A)},c.prototype.otherCallRejected=function(A){t(this.promise,this.onRejected,A)},n.resolve=function(A,h){var y=p(I,h);if(y.status==="error")return n.reject(A,y.value);var W=y.value;if(W)C(A,W);else{A.state=a,A.outcome=h;for(var R=-1,B=A.queue.length;++R<B;)A.queue[R].callFulfilled(h)}return A},n.reject=function(A,h){A.state=l,A.outcome=h;for(var y=-1,W=A.queue.length;++y<W;)A.queue[y].callRejected(h);return A},g.resolve=function(A){return A instanceof this?A:n.resolve(new this(d),A)},g.reject=function(A){var h=new this(d);return n.reject(h,A)},g.all=function(A){var h=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=A.length,W=!1;if(!y)return this.resolve([]);for(var R=new Array(y),B=0,T=-1,x=new this(d);++T<y;)Y(A[T],T);return x;function Y(H,z){h.resolve(H).then(function(j){R[z]=j,++B!==y||W||(W=!0,n.resolve(x,R))},function(j){W||(W=!0,n.reject(x,j))})}},g.race=function(A){var h=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=A.length,W=!1;if(!y)return this.resolve([]);for(var R=-1,B=new this(d);++R<y;)T(A[R]);return B;function T(x){h.resolve(x).then(function(Y){W||(W=!0,n.resolve(B,Y))},function(Y){W||(W=!0,n.reject(B,Y))})}}},{1:1}],3:[function(r,e,i){(function(o){typeof o.Promise!="function"&&(o.Promise=r(2))}).call(this,st!==void 0?st:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(r,e,i){var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d=(function(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}})();function n(u,b){u=u||[],b=b||{};try{return new Blob(u,b)}catch(v){if(v.name!=="TypeError")throw v;for(var m=new(typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder),G=0;G<u.length;G+=1)m.append(u[G]);return m.getBlob(b.type)}}typeof Promise>"u"&&r(3);var l=Promise;function a(u,b){b&&u.then(function(m){b(null,m)},function(m){b(m)})}function s(u,b,m){typeof b=="function"&&u.then(b),typeof m=="function"&&u.catch(m)}function g(u){return typeof u!="string"&&(console.warn(u+" used as a key, but it is not a string."),u=String(u)),u}function c(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var t="local-forage-detect-blob-support",I=void 0,C={},p=Object.prototype.toString,A="readonly",h="readwrite";function y(u){for(var b=u.length,m=new ArrayBuffer(b),G=new Uint8Array(m),v=0;v<b;v++)G[v]=u.charCodeAt(v);return m}function W(u){return typeof I=="boolean"?l.resolve(I):(function(b){return new l(function(m){var G=b.transaction(t,h),v=n([""]);G.objectStore(t).put(v,"key"),G.onabort=function(f){f.preventDefault(),f.stopPropagation(),m(!1)},G.oncomplete=function(){var f=navigator.userAgent.match(/Chrome\/(\d+)/),Z=navigator.userAgent.match(/Edge\//);m(Z||!f||parseInt(f[1],10)>=43)}}).catch(function(){return!1})})(u).then(function(b){return I=b})}function R(u){var b=C[u.name],m={};m.promise=new l(function(G,v){m.resolve=G,m.reject=v}),b.deferredOperations.push(m),b.dbReady?b.dbReady=b.dbReady.then(function(){return m.promise}):b.dbReady=m.promise}function B(u){var b=C[u.name].deferredOperations.pop();if(b)return b.resolve(),b.promise}function T(u,b){var m=C[u.name].deferredOperations.pop();if(m)return m.reject(b),m.promise}function x(u,b){return new l(function(m,G){if(C[u.name]=C[u.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},u.db){if(!b)return m(u.db);R(u),u.db.close()}var v=[u.name];b&&v.push(u.version);var f=d.open.apply(d,v);b&&(f.onupgradeneeded=function(Z){var L=f.result;try{L.createObjectStore(u.storeName),Z.oldVersion<=1&&L.createObjectStore(t)}catch(E){if(E.name!=="ConstraintError")throw E;console.warn('The database "'+u.name+'" has been upgraded from version '+Z.oldVersion+" to version "+Z.newVersion+', but the storage "'+u.storeName+'" already exists.')}}),f.onerror=function(Z){Z.preventDefault(),G(f.error)},f.onsuccess=function(){var Z=f.result;Z.onversionchange=function(L){L.target.close()},m(Z),B(u)}})}function Y(u){return x(u,!1)}function H(u){return x(u,!0)}function z(u,b){if(!u.db)return!0;var m=!u.db.objectStoreNames.contains(u.storeName),G=u.version<u.db.version,v=u.version>u.db.version;if(G&&(u.version!==b&&console.warn('The database "'+u.name+`" can't be downgraded from version `+u.db.version+" to version "+u.version+"."),u.version=u.db.version),v||m){if(m){var f=u.db.version+1;f>u.version&&(u.version=f)}return!0}return!1}function j(u){return n([y(atob(u.data))],{type:u.type})}function ne(u){return u&&u.__local_forage_encoded_blob}function Ae(u){var b=this,m=b._initReady().then(function(){var G=C[b._dbInfo.name];if(G&&G.dbReady)return G.dbReady});return s(m,u,u),m}function ce(u,b,m,G){G===void 0&&(G=1);try{var v=u.db.transaction(u.storeName,b);m(null,v)}catch(f){if(G>0&&(!u.db||f.name==="InvalidStateError"||f.name==="NotFoundError"))return l.resolve().then(function(){if(!u.db||f.name==="NotFoundError"&&!u.db.objectStoreNames.contains(u.storeName)&&u.version<=u.db.version)return u.db&&(u.version=u.db.version+1),H(u)}).then(function(){return(function(Z){R(Z);for(var L=C[Z.name],E=L.forages,N=0;N<E.length;N++){var k=E[N];k._dbInfo.db&&(k._dbInfo.db.close(),k._dbInfo.db=null)}return Z.db=null,Y(Z).then(function(X){return Z.db=X,z(Z)?H(Z):X}).then(function(X){Z.db=L.db=X;for(var J=0;J<E.length;J++)E[J]._dbInfo.db=X}).catch(function(X){throw T(Z,X),X})})(u).then(function(){ce(u,b,m,G-1)})}).catch(m);m(f)}}var pe={_driver:"asyncStorage",_initStorage:function(u){var b=this,m={db:null};if(u)for(var G in u)m[G]=u[G];var v=C[m.name];v||(v={forages:[],db:null,dbReady:null,deferredOperations:[]},C[m.name]=v),v.forages.push(b),b._initReady||(b._initReady=b.ready,b.ready=Ae);var f=[];function Z(){return l.resolve()}for(var L=0;L<v.forages.length;L++){var E=v.forages[L];E!==b&&f.push(E._initReady().catch(Z))}var N=v.forages.slice(0);return l.all(f).then(function(){return m.db=v.db,Y(m)}).then(function(k){return m.db=k,z(m,b._defaultConfig.version)?H(m):k}).then(function(k){m.db=v.db=k,b._dbInfo=m;for(var X=0;X<N.length;X++){var J=N[X];J!==b&&(J._dbInfo.db=m.db,J._dbInfo.version=m.version)}})},_support:(function(){try{if(!d||!d.open)return!1;var u=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!u||b)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}})(),iterate:function(u,b){var m=this,G=new l(function(v,f){m.ready().then(function(){ce(m._dbInfo,A,function(Z,L){if(Z)return f(Z);try{var E=L.objectStore(m._dbInfo.storeName).openCursor(),N=1;E.onsuccess=function(){var k=E.result;if(k){var X=k.value;ne(X)&&(X=j(X));var J=u(X,k.key,N++);J!==void 0?v(J):k.continue()}else v()},E.onerror=function(){f(E.error)}}catch(k){f(k)}})}).catch(f)});return a(G,b),G},getItem:function(u,b){var m=this;u=g(u);var G=new l(function(v,f){m.ready().then(function(){ce(m._dbInfo,A,function(Z,L){if(Z)return f(Z);try{var E=L.objectStore(m._dbInfo.storeName).get(u);E.onsuccess=function(){var N=E.result;N===void 0&&(N=null),ne(N)&&(N=j(N)),v(N)},E.onerror=function(){f(E.error)}}catch(N){f(N)}})}).catch(f)});return a(G,b),G},setItem:function(u,b,m){var G=this;u=g(u);var v=new l(function(f,Z){var L;G.ready().then(function(){return L=G._dbInfo,p.call(b)==="[object Blob]"?W(L.db).then(function(E){return E?b:(function(N){return new l(function(k,X){var J=new FileReader;J.onerror=X,J.onloadend=function(O){var _=btoa(O.target.result||"");k({__local_forage_encoded_blob:!0,data:_,type:N.type})},J.readAsBinaryString(N)})})(b)}):b}).then(function(E){ce(G._dbInfo,h,function(N,k){if(N)return Z(N);try{var X=k.objectStore(G._dbInfo.storeName);E===null&&(E=void 0);var J=X.put(E,u);k.oncomplete=function(){E===void 0&&(E=null),f(E)},k.onabort=k.onerror=function(){var O=J.error?J.error:J.transaction.error;Z(O)}}catch(O){Z(O)}})}).catch(Z)});return a(v,m),v},removeItem:function(u,b){var m=this;u=g(u);var G=new l(function(v,f){m.ready().then(function(){ce(m._dbInfo,h,function(Z,L){if(Z)return f(Z);try{var E=L.objectStore(m._dbInfo.storeName).delete(u);L.oncomplete=function(){v()},L.onerror=function(){f(E.error)},L.onabort=function(){var N=E.error?E.error:E.transaction.error;f(N)}}catch(N){f(N)}})}).catch(f)});return a(G,b),G},clear:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){ce(b._dbInfo,h,function(f,Z){if(f)return v(f);try{var L=Z.objectStore(b._dbInfo.storeName).clear();Z.oncomplete=function(){G()},Z.onabort=Z.onerror=function(){var E=L.error?L.error:L.transaction.error;v(E)}}catch(E){v(E)}})}).catch(v)});return a(m,u),m},length:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){ce(b._dbInfo,A,function(f,Z){if(f)return v(f);try{var L=Z.objectStore(b._dbInfo.storeName).count();L.onsuccess=function(){G(L.result)},L.onerror=function(){v(L.error)}}catch(E){v(E)}})}).catch(v)});return a(m,u),m},key:function(u,b){var m=this,G=new l(function(v,f){u<0?v(null):m.ready().then(function(){ce(m._dbInfo,A,function(Z,L){if(Z)return f(Z);try{var E=L.objectStore(m._dbInfo.storeName),N=!1,k=E.openKeyCursor();k.onsuccess=function(){var X=k.result;X?u===0||N?v(X.key):(N=!0,X.advance(u)):v(null)},k.onerror=function(){f(k.error)}}catch(X){f(X)}})}).catch(f)});return a(G,b),G},keys:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){ce(b._dbInfo,A,function(f,Z){if(f)return v(f);try{var L=Z.objectStore(b._dbInfo.storeName).openKeyCursor(),E=[];L.onsuccess=function(){var N=L.result;N?(E.push(N.key),N.continue()):G(E)},L.onerror=function(){v(L.error)}}catch(N){v(N)}})}).catch(v)});return a(m,u),m},dropInstance:function(u,b){b=c.apply(this,arguments);var m,G=this.config();if((u=typeof u!="function"&&u||{}).name||(u.name=u.name||G.name,u.storeName=u.storeName||G.storeName),u.name){var v=u.name===G.name&&this._dbInfo.db?l.resolve(this._dbInfo.db):Y(u).then(function(f){var Z=C[u.name],L=Z.forages;Z.db=f;for(var E=0;E<L.length;E++)L[E]._dbInfo.db=f;return f});m=u.storeName?v.then(function(f){if(f.objectStoreNames.contains(u.storeName)){var Z=f.version+1;R(u);var L=C[u.name],E=L.forages;f.close();for(var N=0;N<E.length;N++){var k=E[N];k._dbInfo.db=null,k._dbInfo.version=Z}var X=new l(function(J,O){var _=d.open(u.name,Z);_.onerror=function(Ce){_.result.close(),O(Ce)},_.onupgradeneeded=function(){_.result.deleteObjectStore(u.storeName)},_.onsuccess=function(){var Ce=_.result;Ce.close(),J(Ce)}});return X.then(function(J){L.db=J;for(var O=0;O<E.length;O++){var _=E[O];_._dbInfo.db=J,B(_._dbInfo)}}).catch(function(J){throw(T(u,J)||l.resolve()).catch(function(){}),J})}}):v.then(function(f){R(u);var Z=C[u.name],L=Z.forages;f.close();for(var E=0;E<L.length;E++)L[E]._dbInfo.db=null;var N=new l(function(k,X){var J=d.deleteDatabase(u.name);J.onerror=function(){var O=J.result;O&&O.close(),X(J.error)},J.onblocked=function(){console.warn('dropInstance blocked for database "'+u.name+'" until all open connections are closed')},J.onsuccess=function(){var O=J.result;O&&O.close(),k(O)}});return N.then(function(k){Z.db=k;for(var X=0;X<L.length;X++)B(L[X]._dbInfo)}).catch(function(k){throw(T(u,k)||l.resolve()).catch(function(){}),k})})}else m=l.reject("Invalid arguments");return a(m,b),m}},le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ye=/^~~local_forage_type~([^~]+)~/,be="__lfsc__:",ve="arbf",ie="blob",Ze="si08",qe="ui08",Te="uic8",oe="si16",$e="si32",et="ur16",tt="ui32",nt="fl32",ot="fl64",Xe=Object.prototype.toString;function it(u){var b,m,G,v,f,Z=.75*u.length,L=u.length,E=0;u[u.length-1]==="="&&(Z--,u[u.length-2]==="="&&Z--);var N=new ArrayBuffer(Z),k=new Uint8Array(N);for(b=0;b<L;b+=4)m=le.indexOf(u[b]),G=le.indexOf(u[b+1]),v=le.indexOf(u[b+2]),f=le.indexOf(u[b+3]),k[E++]=m<<2|G>>4,k[E++]=(15&G)<<4|v>>2,k[E++]=(3&v)<<6|63&f;return N}function Je(u){var b,m=new Uint8Array(u),G="";for(b=0;b<m.length;b+=3)G+=le[m[b]>>2],G+=le[(3&m[b])<<4|m[b+1]>>4],G+=le[(15&m[b+1])<<2|m[b+2]>>6],G+=le[63&m[b+2]];return m.length%3==2?G=G.substring(0,G.length-1)+"=":m.length%3==1&&(G=G.substring(0,G.length-2)+"=="),G}var Ie={serialize:function(u,b){var m="";if(u&&(m=Xe.call(u)),u&&(m==="[object ArrayBuffer]"||u.buffer&&Xe.call(u.buffer)==="[object ArrayBuffer]")){var G,v=be;u instanceof ArrayBuffer?(G=u,v+=ve):(G=u.buffer,m==="[object Int8Array]"?v+=Ze:m==="[object Uint8Array]"?v+=qe:m==="[object Uint8ClampedArray]"?v+=Te:m==="[object Int16Array]"?v+=oe:m==="[object Uint16Array]"?v+=et:m==="[object Int32Array]"?v+=$e:m==="[object Uint32Array]"?v+=tt:m==="[object Float32Array]"?v+=nt:m==="[object Float64Array]"?v+=ot:b(new Error("Failed to get type for BinaryArray"))),b(v+Je(G))}else if(m==="[object Blob]"){var f=new FileReader;f.onload=function(){var Z="~~local_forage_type~"+u.type+"~"+Je(this.result);b(be+ie+Z)},f.readAsArrayBuffer(u)}else try{b(JSON.stringify(u))}catch(Z){console.error("Couldn't convert value into a JSON string: ",u),b(null,Z)}},deserialize:function(u){if(u.substring(0,9)!==be)return JSON.parse(u);var b,m=u.substring(13),G=u.substring(9,13);if(G===ie&&ye.test(m)){var v=m.match(ye);b=v[1],m=m.substring(v[0].length)}var f=it(m);switch(G){case ve:return f;case ie:return n([f],{type:b});case Ze:return new Int8Array(f);case qe:return new Uint8Array(f);case Te:return new Uint8ClampedArray(f);case oe:return new Int16Array(f);case et:return new Uint16Array(f);case $e:return new Int32Array(f);case tt:return new Uint32Array(f);case nt:return new Float32Array(f);case ot:return new Float64Array(f);default:throw new Error("Unkown type: "+G)}},stringToBuffer:it,bufferToString:Je};function Re(u,b,m,G){u.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],m,G)}function ue(u,b,m,G,v,f){u.executeSql(m,G,v,function(Z,L){L.code===L.SYNTAX_ERR?Z.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(E,N){N.rows.length?f(E,L):Re(E,b,function(){E.executeSql(m,G,v,f)},f)},f):f(Z,L)},f)}function He(u,b,m,G){var v=this;u=g(u);var f=new l(function(Z,L){v.ready().then(function(){b===void 0&&(b=null);var E=b,N=v._dbInfo;N.serializer.serialize(b,function(k,X){X?L(X):N.db.transaction(function(J){ue(J,N,"INSERT OR REPLACE INTO "+N.storeName+" (key, value) VALUES (?, ?)",[u,k],function(){Z(E)},function(O,_){L(_)})},function(J){if(J.code===J.QUOTA_ERR){if(G>0)return void Z(He.apply(v,[u,E,m,G-1]));L(J)}})})}).catch(L)});return a(f,m),f}var me={_driver:"webSQLStorage",_initStorage:function(u){var b=this,m={db:null};if(u)for(var G in u)m[G]=typeof u[G]!="string"?u[G].toString():u[G];var v=new l(function(f,Z){try{m.db=openDatabase(m.name,String(m.version),m.description,m.size)}catch(L){return Z(L)}m.db.transaction(function(L){Re(L,m,function(){b._dbInfo=m,f()},function(E,N){Z(N)})},Z)});return m.serializer=Ie,v},_support:typeof openDatabase=="function",iterate:function(u,b){var m=this,G=new l(function(v,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(L){ue(L,Z,"SELECT * FROM "+Z.storeName,[],function(E,N){for(var k=N.rows,X=k.length,J=0;J<X;J++){var O=k.item(J),_=O.value;if(_&&(_=Z.serializer.deserialize(_)),(_=u(_,O.key,J+1))!==void 0)return void v(_)}v()},function(E,N){f(N)})})}).catch(f)});return a(G,b),G},getItem:function(u,b){var m=this;u=g(u);var G=new l(function(v,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(L){ue(L,Z,"SELECT * FROM "+Z.storeName+" WHERE key = ? LIMIT 1",[u],function(E,N){var k=N.rows.length?N.rows.item(0).value:null;k&&(k=Z.serializer.deserialize(k)),v(k)},function(E,N){f(N)})})}).catch(f)});return a(G,b),G},setItem:function(u,b,m){return He.apply(this,[u,b,m,1])},removeItem:function(u,b){var m=this;u=g(u);var G=new l(function(v,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(L){ue(L,Z,"DELETE FROM "+Z.storeName+" WHERE key = ?",[u],function(){v()},function(E,N){f(N)})})}).catch(f)});return a(G,b),G},clear:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){var f=b._dbInfo;f.db.transaction(function(Z){ue(Z,f,"DELETE FROM "+f.storeName,[],function(){G()},function(L,E){v(E)})})}).catch(v)});return a(m,u),m},length:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){var f=b._dbInfo;f.db.transaction(function(Z){ue(Z,f,"SELECT COUNT(key) as c FROM "+f.storeName,[],function(L,E){var N=E.rows.item(0).c;G(N)},function(L,E){v(E)})})}).catch(v)});return a(m,u),m},key:function(u,b){var m=this,G=new l(function(v,f){m.ready().then(function(){var Z=m._dbInfo;Z.db.transaction(function(L){ue(L,Z,"SELECT key FROM "+Z.storeName+" WHERE id = ? LIMIT 1",[u+1],function(E,N){var k=N.rows.length?N.rows.item(0).key:null;v(k)},function(E,N){f(N)})})}).catch(f)});return a(G,b),G},keys:function(u){var b=this,m=new l(function(G,v){b.ready().then(function(){var f=b._dbInfo;f.db.transaction(function(Z){ue(Z,f,"SELECT key FROM "+f.storeName,[],function(L,E){for(var N=[],k=0;k<E.rows.length;k++)N.push(E.rows.item(k).key);G(N)},function(L,E){v(E)})})}).catch(v)});return a(m,u),m},dropInstance:function(u,b){b=c.apply(this,arguments);var m=this.config();(u=typeof u!="function"&&u||{}).name||(u.name=u.name||m.name,u.storeName=u.storeName||m.storeName);var G,v=this;return a(G=u.name?new l(function(f){var Z;Z=u.name===m.name?v._dbInfo.db:openDatabase(u.name,"","",0),u.storeName?f({db:Z,storeNames:[u.storeName]}):f((function(L){return new l(function(E,N){L.transaction(function(k){k.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(X,J){for(var O=[],_=0;_<J.rows.length;_++)O.push(J.rows.item(_).name);E({db:L,storeNames:O})},function(X,J){N(J)})},function(k){N(k)})})})(Z))}).then(function(f){return new l(function(Z,L){f.db.transaction(function(E){function N(O){return new l(function(_,Ce){E.executeSql("DROP TABLE IF EXISTS "+O,[],function(){_()},function(vn,_e){Ce(_e)})})}for(var k=[],X=0,J=f.storeNames.length;X<J;X++)k.push(N(f.storeNames[X]));l.all(k).then(function(){Z()}).catch(function(O){L(O)})},function(E){L(E)})})}):l.reject("Invalid arguments"),b),G}};function Ue(u,b){var m=u.name+"/";return u.storeName!==b.storeName&&(m+=u.storeName+"/"),m}function Nt(){return!(function(){var u="_localforage_support_test";try{return localStorage.setItem(u,!0),localStorage.removeItem(u),!1}catch{return!0}})()||localStorage.length>0}var Oe={_driver:"localStorageWrapper",_initStorage:function(u){var b={};if(u)for(var m in u)b[m]=u[m];return b.keyPrefix=Ue(u,this._defaultConfig),Nt()?(this._dbInfo=b,b.serializer=Ie,l.resolve()):l.reject()},_support:(function(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}})(),iterate:function(u,b){var m=this,G=m.ready().then(function(){for(var v=m._dbInfo,f=v.keyPrefix,Z=f.length,L=localStorage.length,E=1,N=0;N<L;N++){var k=localStorage.key(N);if(k.indexOf(f)===0){var X=localStorage.getItem(k);if(X&&(X=v.serializer.deserialize(X)),(X=u(X,k.substring(Z),E++))!==void 0)return X}}});return a(G,b),G},getItem:function(u,b){var m=this;u=g(u);var G=m.ready().then(function(){var v=m._dbInfo,f=localStorage.getItem(v.keyPrefix+u);return f&&(f=v.serializer.deserialize(f)),f});return a(G,b),G},setItem:function(u,b,m){var G=this;u=g(u);var v=G.ready().then(function(){b===void 0&&(b=null);var f=b;return new l(function(Z,L){var E=G._dbInfo;E.serializer.serialize(b,function(N,k){if(k)L(k);else try{localStorage.setItem(E.keyPrefix+u,N),Z(f)}catch(X){X.name!=="QuotaExceededError"&&X.name!=="NS_ERROR_DOM_QUOTA_REACHED"||L(X),L(X)}})})});return a(v,m),v},removeItem:function(u,b){var m=this;u=g(u);var G=m.ready().then(function(){var v=m._dbInfo;localStorage.removeItem(v.keyPrefix+u)});return a(G,b),G},clear:function(u){var b=this,m=b.ready().then(function(){for(var G=b._dbInfo.keyPrefix,v=localStorage.length-1;v>=0;v--){var f=localStorage.key(v);f.indexOf(G)===0&&localStorage.removeItem(f)}});return a(m,u),m},length:function(u){var b=this.keys().then(function(m){return m.length});return a(b,u),b},key:function(u,b){var m=this,G=m.ready().then(function(){var v,f=m._dbInfo;try{v=localStorage.key(u)}catch{v=null}return v&&(v=v.substring(f.keyPrefix.length)),v});return a(G,b),G},keys:function(u){var b=this,m=b.ready().then(function(){for(var G=b._dbInfo,v=localStorage.length,f=[],Z=0;Z<v;Z++){var L=localStorage.key(Z);L.indexOf(G.keyPrefix)===0&&f.push(L.substring(G.keyPrefix.length))}return f});return a(m,u),m},dropInstance:function(u,b){if(b=c.apply(this,arguments),!(u=typeof u!="function"&&u||{}).name){var m=this.config();u.name=u.name||m.name,u.storeName=u.storeName||m.storeName}var G,v=this;return G=u.name?new l(function(f){u.storeName?f(Ue(u,v._defaultConfig)):f(u.name+"/")}).then(function(f){for(var Z=localStorage.length-1;Z>=0;Z--){var L=localStorage.key(Z);L.indexOf(f)===0&&localStorage.removeItem(L)}}):l.reject("Invalid arguments"),a(G,b),G}},Mt=function(u,b){return u===b||typeof u=="number"&&typeof b=="number"&&isNaN(u)&&isNaN(b)},Bt=function(u,b){for(var m=u.length,G=0;G<m;){if(Mt(u[G],b))return!0;G++}return!1},Le=Array.isArray||function(u){return Object.prototype.toString.call(u)==="[object Array]"},he={},$={},we={INDEXEDDB:pe,WEBSQL:me,LOCALSTORAGE:Oe},Vt=[we.INDEXEDDB._driver,we.WEBSQL._driver,we.LOCALSTORAGE._driver],Ne=["dropInstance"],De=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ne),Me={description:"",driver:Vt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Be(u,b){u[b]=function(){var m=arguments;return u.ready().then(function(){return u[b].apply(u,m)})}}function Ve(){for(var u=1;u<arguments.length;u++){var b=arguments[u];if(b)for(var m in b)b.hasOwnProperty(m)&&(Le(b[m])?arguments[0][m]=b[m].slice():arguments[0][m]=b[m])}return arguments[0]}var fe=(function(){function u(b){for(var m in(function(f,Z){if(!(f instanceof Z))throw new TypeError("Cannot call a class as a function")})(this,u),we)if(we.hasOwnProperty(m)){var G=we[m],v=G._driver;this[m]=v,he[v]||this.defineDriver(G)}this._defaultConfig=Ve({},Me),this._config=Ve({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return u.prototype.config=function(b){if((b===void 0?"undefined":o(b))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var m in b){if(m==="storeName"&&(b[m]=b[m].replace(/\W/g,"_")),m==="version"&&typeof b[m]!="number")return new Error("Database version must be a number.");this._config[m]=b[m]}return!("driver"in b)||!b.driver||this.setDriver(this._config.driver)}return typeof b=="string"?this._config[b]:this._config},u.prototype.defineDriver=function(b,m,G){var v=new l(function(f,Z){try{var L=b._driver,E=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!b._driver)return void Z(E);for(var N=De.concat("_initStorage"),k=0,X=N.length;k<X;k++){var J=N[k];if((!Bt(Ne,J)||b[J])&&typeof b[J]!="function")return void Z(E)}(function(){for(var _=function(Go){return function(){var Wo=new Error("Method "+Go+" is not implemented by the current driver"),fn=l.reject(Wo);return a(fn,arguments[arguments.length-1]),fn}},Ce=0,vn=Ne.length;Ce<vn;Ce++){var _e=Ne[Ce];b[_e]||(b[_e]=_(_e))}})();var O=function(_){he[L]&&console.info("Redefining LocalForage driver: "+L),he[L]=b,$[L]=_,f()};"_support"in b?b._support&&typeof b._support=="function"?b._support().then(O,Z):O(!!b._support):O(!0)}catch(_){Z(_)}});return s(v,m,G),v},u.prototype.driver=function(){return this._driver||null},u.prototype.getDriver=function(b,m,G){var v=he[b]?l.resolve(he[b]):l.reject(new Error("Driver not found."));return s(v,m,G),v},u.prototype.getSerializer=function(b){var m=l.resolve(Ie);return s(m,b),m},u.prototype.ready=function(b){var m=this,G=m._driverSet.then(function(){return m._ready===null&&(m._ready=m._initDriver()),m._ready});return s(G,b,b),G},u.prototype.setDriver=function(b,m,G){var v=this;Le(b)||(b=[b]);var f=this._getSupportedDrivers(b);function Z(){v._config.driver=v.driver()}function L(N){return v._extend(N),Z(),v._ready=v._initStorage(v._config),v._ready}var E=this._driverSet!==null?this._driverSet.catch(function(){return l.resolve()}):l.resolve();return this._driverSet=E.then(function(){var N=f[0];return v._dbInfo=null,v._ready=null,v.getDriver(N).then(function(k){v._driver=k._driver,Z(),v._wrapLibraryMethodsWithReady(),v._initDriver=(function(X){return function(){var J=0;return(function O(){for(;J<X.length;){var _=X[J];return J++,v._dbInfo=null,v._ready=null,v.getDriver(_).then(L).catch(O)}Z();var Ce=new Error("No available storage method found.");return v._driverSet=l.reject(Ce),v._driverSet})()}})(f)})}).catch(function(){Z();var N=new Error("No available storage method found.");return v._driverSet=l.reject(N),v._driverSet}),s(this._driverSet,m,G),this._driverSet},u.prototype.supports=function(b){return!!$[b]},u.prototype._extend=function(b){Ve(this,b)},u.prototype._getSupportedDrivers=function(b){for(var m=[],G=0,v=b.length;G<v;G++){var f=b[G];this.supports(f)&&m.push(f)}return m},u.prototype._wrapLibraryMethodsWithReady=function(){for(var b=0,m=De.length;b<m;b++)Be(this,De[b])},u.prototype.createInstance=function(b){return new u(b)},u})(),Se=new fe;e.exports=Se},{3:3}]},{},[4])(4);function zn(r,e){let i=new Uint8Array(e),o="";for(let d=0;d<i.byteLength;d++)o+=String.fromCharCode(i[d]);return r.btoa(o)}function Qn(r,e,i){let o=(function(d,n){let l=d.atob(n),a=l.length,s=new Uint8Array(a);for(let g=0;g<a;g++)s[g]=l.charCodeAt(g);return s.buffer})(r,e);return new Blob([o],{type:i})}async function pt(r){let e=new TextEncoder().encode(r);if("CompressionStream"in window){let i=new Blob([e]).stream().pipeThrough(new CompressionStream("gzip"));return await new Response(i).blob()}}async function Zo(r,e){let i=`sprite-garden-save-game-file-${(function(){let d=new Date;return`${d.getUTCFullYear()}-${`${d.getUTCMonth()+1}`.padStart(2,"0")}-${`${d.getUTCDate()}`.padStart(2,"0")}_${`${d.getUTCHours()}`.padStart(2,"0")}-${`${d.getUTCMinutes()}`.padStart(2,"0")}-${`${d.getUTCSeconds()}`.padStart(2,"0")}.${`${d.getUTCMilliseconds()}`.padStart(3,"0")}`})()}.sgs`,o;if(r.showSaveFilePicker)o=await r.showSaveFilePicker({suggestedName:i}),await(async function(d,n){let l=await pt(d),a=await n.createWritable();await a.write(l),await a.close()})(e,o);else{let d=await pt(e),n=URL.createObjectURL(d),l=r.document.createElement("a");l.href=n,l.download=i,r.document.body.append(l),l.click(),r.document.body.removeChild(l),URL.revokeObjectURL(n)}}function Rt(r){let e=r.spriteGarden.state,i=r.spriteGarden.config;return{config:{breakMode:i.breakMode.get(),canvasScale:i.canvasScale.get(),currentResolution:i.currentResolution.get(),fogMode:i.fogMode.get(),fogScale:i.fogScale.get(),FRICTION:i.FRICTION.get(),GRAVITY:i.GRAVITY.get(),isFogScaled:i.isFogScaled.get(),MAX_FALL_SPEED:i.MAX_FALL_SPEED.get(),SURFACE_LEVEL:i.SURFACE_LEVEL.get(),TILE_SIZE:i.TILE_SIZE.get(),version:i.version.get(),WORLD_HEIGHT:i.WORLD_HEIGHT.get(),WORLD_WIDTH:i.WORLD_WIDTH.get(),worldSeed:i.worldSeed.get()},state:{camera:e.camera.get(),exploredMap:e.exploredMap.get().toObject(),gameTime:e.gameTime.get(),growthTimers:e.growthTimers.get(),materialsInventory:e.materialsInventory.get(),plantStructures:e.plantStructures.get(),player:e.player.get(),seedInventory:e.seedInventory.get(),seeds:e.seeds.get(),selectedMaterialType:e.selectedMaterialType.get(),selectedSeedType:e.selectedSeedType.get(),viewMode:e.viewMode.get(),world:e.world.get().toArray()}}}function Ee(r,e){let i=r.getComputedStyle(e.host),o={};for(let d of i)if(d.startsWith("--sg-")){let n=i.getPropertyValue(d).trim();o[d]=n}return o}function Lt(r,e){let i=r?.getElementById("canvas");if(i){let o=e.currentResolution?.get();if(o==="fullscreen")return r?.host.classList.remove("resolution","resolution-400","resolution-800"),i.width=window.innerWidth,i.height=window.innerHeight,i.style.width="100vw",i.style.height="100vh",void e.fogScale.set(36);r.host.classList.add("resolution"),r.host.classList.remove("resolution-400","resolution-800");let d=parseInt(o);if(i.width=d,i.height=d,i.style.width=d+"px",i.style.height=d+"px",r.host.classList.add(`resolution-${d}`),o==="800")return void e.fogScale.set(24);e.fogScale.set(12)}}var yt=class r{constructor(e,i,o){this.colors=o,this.width=e,this.height=i,this.data=new Uint8Array(e*i),this.cache={canvas:null,lastPlayerTileX:null,lastPlayerTileY:null,lastCameraGridX:null,lastCameraGridY:null,needsUpdate:!0}}isExplored(e,i){if(e<0||e>=this.width||i<0||i>=this.height)return!1;let o=i*this.width+e;return this.data[o]===1}setExplored(e,i){if(e<0||e>=this.width||i<0||i>=this.height)return!1;let o=i*this.width+e,d=this.data[o]===1;return this.data[o]=1,!d}setExploredBatch(e){let i=!1;for(let o of e)this.setExplored(o.x,o.y)&&(i=!0);return i}reset(){this.data.fill(0),this.cache.needsUpdate=!0}static fromObject(e,i,o,d){let n=new r(i,o,d);if(e&&typeof e=="object"){for(let l in e)if(e[l]){let[a,s]=l.split(",").map(Number);n.setExplored(a,s)}}return n}toObject(){let e={};for(let i=0;i<this.height;i++)for(let o=0;o<this.width;o++)this.isExplored(o,i)&&(e[`${o},${i}`]=!0);return e}updateFromPlayer(e,i,o=15){let d=e.get(),n=Math.floor((d.x+d.width/2)/i),l=Math.floor((d.y+d.height/2)/i),a=!1;for(let s=-o;s<=o;s++)for(let g=-o;g<=o;g++){let c=n+s,t=l+g;Math.sqrt(s*s+g*g)<=o&&this.setExplored(c,t)&&(a=!0)}return a}render(e,i,o,d){if(!e||!i)return;let n=d.get(),l=Math.ceil(i.width/o)+1,a=Math.ceil(i.height/o)+1,s=Math.floor(n.x/o),g=Math.floor(n.y/o),c=n.x%o,t=n.y%o;e.fillStyle=this.colors["--sg-color-black"];for(let I=0;I<l;I++){let C=s+I;if(C<0||C>=this.width)continue;let p=Math.round(I*o-c);for(let A=0;A<a;A++){let h=g+A;if(!(h<0||h>=this.height)&&!this.isExplored(C,h)){let y=Math.round(A*o-t);e.fillRect(p,y,o,o)}}}}renderScaled(e,i,o,d,n=2){if(!e||!i)return;let l=d.get(),a=o*n,s=Math.ceil(i.width/a)+1,g=Math.ceil(i.height/a)+1,c=Math.floor(l.x/a),t=Math.floor(l.y/a),I=l.x%a,C=l.y%a;e.fillStyle=this.colors["--sg-color-black"];for(let p=0;p<s;p++){let A=c+p,h=Math.round(p*a-I);for(let y=0;y<g;y++){let W=t+y,R=Math.round(y*a-C),B=!0;for(let T=0;T<n&&B;T++)for(let x=0;x<n&&B;x++){let Y=A*n+T,H=W*n+x;Y>=0&&Y<this.width&&H>=0&&H<this.height&&this.isExplored(Y,H)&&(B=!1)}B&&e.fillRect(h,R,a,a)}}}},wo=Object.defineProperty,Dt=(r,e,i)=>(((o,d,n)=>{d in o?wo(o,d,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[d]=n})(r,typeof e!="symbol"?e+"":e,i),i),_t=(r,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return r.has(e)},ct=(r,e,i)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,i)},Mn=(r,e,i)=>(((o,d)=>{if(!d.has(o))throw TypeError("Cannot access private method")})(r,e),i);function qn(r,e){return Object.is(r,e)}var q=null,Ke=!1,ht=1,dt=Symbol("SIGNAL");function ke(r){let e=q;return q=r,e}var bn={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function vt(r){if(Ke)throw new Error("");if(q===null)return;q.consumerOnSignalRead(r);let e=q.nextProducerIndex++;Ye(q),e<q.producerNode.length&&q.producerNode[e]!==r&&$t(q)&&Et(q.producerNode[e],q.producerIndexOfThis[e]),q.producerNode[e]!==r&&(q.producerNode[e]=r,q.producerIndexOfThis[e]=$t(q)?to(r,q,e):0),q.producerLastReadVersion[e]=r.version}function $n(r){if(r.dirty||r.lastCleanEpoch!==ht){if(!r.producerMustRecompute(r)&&!(function(e){Ye(e);for(let i=0;i<e.producerNode.length;i++){let o=e.producerNode[i],d=e.producerLastReadVersion[i];if(d!==o.version||($n(o),d!==o.version))return!0}return!1})(r))return r.dirty=!1,void(r.lastCleanEpoch=ht);r.producerRecomputeValue(r),r.dirty=!1,r.lastCleanEpoch=ht}}function eo(r){if(r.liveConsumerNode===void 0)return;let e=Ke;Ke=!0;try{for(let i of r.liveConsumerNode)i.dirty||So(i)}finally{Ke=e}}function So(r){var e;r.dirty=!0,eo(r),(e=r.consumerMarkedDirty)==null||e.call(r.wrapper??r)}function to(r,e,i){var o;if(mn(r),Ye(r),r.liveConsumerNode.length===0){(o=r.watched)==null||o.call(r.wrapper);for(let d=0;d<r.producerNode.length;d++)r.producerIndexOfThis[d]=to(r.producerNode[d],r,d)}return r.liveConsumerIndexOfThis.push(i),r.liveConsumerNode.push(e)-1}function Et(r,e){var i;if(mn(r),Ye(r),r.liveConsumerNode.length===1){(i=r.unwatched)==null||i.call(r.wrapper);for(let d=0;d<r.producerNode.length;d++)Et(r.producerNode[d],r.producerIndexOfThis[d])}let o=r.liveConsumerNode.length-1;if(r.liveConsumerNode[e]=r.liveConsumerNode[o],r.liveConsumerIndexOfThis[e]=r.liveConsumerIndexOfThis[o],r.liveConsumerNode.length--,r.liveConsumerIndexOfThis.length--,e<r.liveConsumerNode.length){let d=r.liveConsumerIndexOfThis[e],n=r.liveConsumerNode[e];Ye(n),n.producerIndexOfThis[d]=e}}function $t(r){var e;return r.consumerIsAlwaysLive||(((e=r?.liveConsumerNode)==null?void 0:e.length)??0)>0}function Ye(r){r.producerNode??(r.producerNode=[]),r.producerIndexOfThis??(r.producerIndexOfThis=[]),r.producerLastReadVersion??(r.producerLastReadVersion=[])}function mn(r){r.liveConsumerNode??(r.liveConsumerNode=[]),r.liveConsumerIndexOfThis??(r.liveConsumerIndexOfThis=[]);}function Bn(r){if($n(r),vt(r),r.value===en)throw r.error;return r.value}var Ft=Symbol("UNSET"),Pt=Symbol("COMPUTING"),en=Symbol("ERRORED"),Ro=ee(U({},bn),{value:Ft,dirty:!0,error:null,equal:qn,producerMustRecompute:r=>r.value===Ft||r.value===Pt,producerRecomputeValue(r){if(r.value===Pt)throw new Error("Detected cycle in computations.");let e=r.value;r.value=Pt;let i=(function(n){return n&&(n.nextProducerIndex=0),ke(n)})(r),o,d=!1;try{o=r.computation.call(r.wrapper),d=e!==Ft&&e!==en&&r.equal.call(r.wrapper,e,o)}catch(n){o=en,r.error=n}finally{(function(n,l){if(ke(l),n&&n.producerNode!==void 0&&n.producerIndexOfThis!==void 0&&n.producerLastReadVersion!==void 0){if($t(n))for(let a=n.nextProducerIndex;a<n.producerNode.length;a++)Et(n.producerNode[a],n.producerIndexOfThis[a]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}})(r,i)}d?r.value=e:(r.value=o,r.version++)}});function Lo(){return vt(this),this.value}function Eo(r,e){q?.consumerAllowSignalWrites===!1&&(function(){throw new Error})(),r.equal.call(r.wrapper,r.value,e)||(r.value=e,(function(i){i.version++,ht++,eo(i);})(r))}var To=ee(U({},bn),{equal:qn,value:void 0}),te=Symbol("node"),D;(r=>{var e,i,o,d;e=te,i=new WeakSet,r.isState=n=>typeof n=="object"&&_t(i,n),r.State=class{constructor(n,l={}){ct(this,i),Dt(this,e);let a=(function(g){let c=Object.create(To);c.value=g;let t=()=>(vt(c),c.value);return t[dt]=c,t})(n),s=a[dt];if(this[te]=s,s.wrapper=this,l){let g=l.equals;g&&(s.equal=g),s.watched=l[r.subtle.watched],s.unwatched=l[r.subtle.unwatched]}}get(){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Lo.call(this[te])}set(n){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Ke)throw new Error("Writes to signals not permitted during Watcher callback");Eo(this[te],n)}},o=te,d=new WeakSet,r.isComputed=n=>typeof n=="object"&&_t(d,n),r.Computed=class{constructor(n,l){ct(this,d),Dt(this,o);let a=(function(g){let c=Object.create(Ro);c.computation=g;let t=()=>Bn(c);return t[dt]=c,t})(n),s=a[dt];if(s.consumerAllowSignalWrites=!0,this[te]=s,s.wrapper=this,l){let g=l.equals;g&&(s.equal=g),s.watched=l[r.subtle.watched],s.unwatched=l[r.subtle.unwatched]}}get(){if(!(0,r.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Bn(this[te])}},(n=>{var l,a,s,g;n.untrack=function(c){let t,I=null;try{I=ke(null),t=c()}finally{ke(I)}return t},n.introspectSources=function(c){var t;if(!(0,r.isComputed)(c)&&!(0,r.isWatcher)(c))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((t=c[te].producerNode)==null?void 0:t.map(I=>I.wrapper))??[]},n.introspectSinks=function(c){var t;if(!(0,r.isComputed)(c)&&!(0,r.isState)(c))throw new TypeError("Called introspectSinks without a Signal argument");return((t=c[te].liveConsumerNode)==null?void 0:t.map(I=>I.wrapper))??[]},n.hasSinks=function(c){if(!(0,r.isComputed)(c)&&!(0,r.isState)(c))throw new TypeError("Called hasSinks without a Signal argument");let t=c[te].liveConsumerNode;return!!t&&t.length>0},n.hasSources=function(c){if(!(0,r.isComputed)(c)&&!(0,r.isWatcher)(c))throw new TypeError("Called hasSources without a Computed or Watcher argument");let t=c[te].producerNode;return!!t&&t.length>0},l=te,a=new WeakSet,s=new WeakSet,g=function(c){for(let t of c)if(!(0,r.isComputed)(t)&&!(0,r.isState)(t))throw new TypeError("Called watch/unwatch without a Computed or State argument")},r.isWatcher=c=>_t(a,c),n.Watcher=class{constructor(c){ct(this,a),ct(this,s),Dt(this,l);let t=Object.create(bn);t.wrapper=this,t.consumerMarkedDirty=c,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[te]=t}watch(...c){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Mn(this,s,g).call(this,c);let t=this[te];t.dirty=!1;let I=ke(t);for(let C of c)vt(C[te]);ke(I)}unwatch(...c){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Mn(this,s,g).call(this,c);let t=this[te];Ye(t);for(let I=t.producerNode.length-1;I>=0;I--)if(c.includes(t.producerNode[I].wrapper)){Et(t.producerNode[I],t.producerIndexOfThis[I]);let C=t.producerNode.length-1;if(t.producerNode[I]=t.producerNode[C],t.producerIndexOfThis[I]=t.producerIndexOfThis[C],t.producerNode.length--,t.producerIndexOfThis.length--,t.nextProducerIndex--,I<t.producerNode.length){let p=t.producerIndexOfThis[I],A=t.producerNode[I];mn(A),A.liveConsumerIndexOfThis[p]=I}}}getPending(){if(!(0,r.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[te].producerNode.filter(c=>c.dirty).map(c=>c.wrapper)}},n.currentComputed=function(){var c;return(c=q)==null?void 0:c.wrapper},n.watched=Symbol("watched"),n.unwatched=Symbol("unwatched")})(r.subtle||(r.subtle={}))})(D||(D={}));var no=D,tn=!0,ft=new no.subtle.Watcher(()=>{tn&&(tn=!1,globalThis.queueMicrotask(No))});function No(){tn=!0;for(let r of ft.getPending())r.get();ft.watch()}function Ge(r){let e,i=new no.Computed(()=>{typeof e=="function"&&e(),e=r()});return ft.watch(i),i.get(),()=>{ft.unwatch(i),typeof e=="function"&&e(),e=void 0}}function xe(r=1,e=4294967295){return typeof globalThis.crypto=="object"&&typeof globalThis.crypto.getRandomValues=="function"?(function(d,n){let l=n-d+1,a=4294967295,s,g;g=a-a%l;do s=globalThis.crypto.getRandomValues(new Uint32Array(1))[0];while(s>g);return d+s%l})(r,e):(i=r,o=e,Math.floor(Math.random()*(o-i+1))+i).toString();var i,o}var S=r=>U({crop:!1,farmable:!1,solid:!1,isSeed:!1,drops:null},r),w={AIR:"AIR",AGAVE_BASE:"AGAVE_BASE",AGAVE_FLOWER_STALK:"AGAVE_FLOWER_STALK",AGAVE_FLOWER:"AGAVE_FLOWER",AGAVE_GROWING:"AGAVE_GROWING",AGAVE_SPIKE:"AGAVE_SPIKE",AGAVE:"AGAVE",BAMBOO_GROWING:"BAMBOO_GROWING",BAMBOO_JOINT:"BAMBOO_JOINT",BAMBOO_LEAVES:"BAMBOO_LEAVES",BAMBOO_STALK:"BAMBOO_STALK",BAMBOO:"BAMBOO",BEDROCK:"BEDROCK",BERRY_BUSH_BERRIES:"BERRY_BUSH_BERRIES",BERRY_BUSH_BRANCH:"BERRY_BUSH_BRANCH",BERRY_BUSH_GROWING:"BERRY_BUSH_GROWING",BERRY_BUSH_LEAVES:"BERRY_BUSH_LEAVES",BERRY_BUSH:"BERRY_BUSH",BIRCH_BARK:"BIRCH_BARK",BIRCH_BRANCHES:"BIRCH_BRANCHES",BIRCH_CATKINS:"BIRCH_CATKINS",BIRCH_GROWING:"BIRCH_GROWING",BIRCH_LEAVES:"BIRCH_LEAVES",BIRCH_TRUNK:"BIRCH_TRUNK",BIRCH:"BIRCH",CACTUS_BODY:"CACTUS_BODY",CACTUS_FLOWER:"CACTUS_FLOWER",CACTUS_GROWING:"CACTUS_GROWING",CACTUS:"CACTUS",CARROT_GROWING:"CARROT_GROWING",CARROT_LEAVES:"CARROT_LEAVES",CARROT_ROOT:"CARROT_ROOT",CARROT:"CARROT",CLAY:"CLAY",CLOUD:"CLOUD",COAL:"COAL",CORN_EAR:"CORN_EAR",CORN_GROWING:"CORN_GROWING",CORN_LEAVES:"CORN_LEAVES",CORN_SILK:"CORN_SILK",CORN_STALK:"CORN_STALK",CORN:"CORN",DIRT:"DIRT",FERN_FROND:"FERN_FROND",FERN_GROWING:"FERN_GROWING",FERN_STEM:"FERN_STEM",FERN:"FERN",GOLD:"GOLD",GRASS:"GRASS",ICE:"ICE",IRON:"IRON",KELP_BLADE:"KELP_BLADE",KELP_BULB:"KELP_BULB",KELP_GROWING:"KELP_GROWING",KELP:"KELP",LAVA:"LAVA",LAVENDER_BUSH:"LAVENDER_BUSH",LAVENDER_FLOWERS:"LAVENDER_FLOWERS",LAVENDER_GROWING:"LAVENDER_GROWING",LAVENDER_STEM:"LAVENDER_STEM",LAVENDER:"LAVENDER",LOTUS_BUD:"LOTUS_BUD",LOTUS_FLOWER:"LOTUS_FLOWER",LOTUS_GROWING:"LOTUS_GROWING",LOTUS_PAD:"LOTUS_PAD",LOTUS_STEM:"LOTUS_STEM",LOTUS:"LOTUS",MOSS:"MOSS",MUSHROOM_CAP:"MUSHROOM_CAP",MUSHROOM_GROWING:"MUSHROOM_GROWING",MUSHROOM_STEM:"MUSHROOM_STEM",MUSHROOM:"MUSHROOM",PINE_CONE:"PINE_CONE",PINE_NEEDLES:"PINE_NEEDLES",PINE_TREE_GROWING:"PINE_TREE_GROWING",PINE_TREE:"PINE_TREE",PINE_TRUNK:"PINE_TRUNK",PUMICE:"PUMICE",PUMPKIN_FRUIT:"PUMPKIN_FRUIT",PUMPKIN_GROWING:"PUMPKIN_GROWING",PUMPKIN_LEAVES:"PUMPKIN_LEAVES",PUMPKIN_STEM:"PUMPKIN_STEM",PUMPKIN_VINE:"PUMPKIN_VINE",PUMPKIN:"PUMPKIN",ROSE_BLOOM:"ROSE_BLOOM",ROSE_BUD:"ROSE_BUD",ROSE_GROWING:"ROSE_GROWING",ROSE_LEAVES:"ROSE_LEAVES",ROSE_STEM:"ROSE_STEM",ROSE_THORNS:"ROSE_THORNS",ROSE:"ROSE",SAND:"SAND",SNOW:"SNOW",STONE:"STONE",SUNFLOWER_CENTER:"SUNFLOWER_CENTER",SUNFLOWER_GROWING:"SUNFLOWER_GROWING",SUNFLOWER_LEAVES:"SUNFLOWER_LEAVES",SUNFLOWER_PETALS:"SUNFLOWER_PETALS",SUNFLOWER_STEM:"SUNFLOWER_STEM",SUNFLOWER:"SUNFLOWER",TREE_GROWING:"TREE_GROWING",TREE_LEAVES:"TREE_LEAVES",TREE_TRUNK:"TREE_TRUNK",TULIP_BULB:"TULIP_BULB",TULIP_GROWING:"TULIP_GROWING",TULIP_LEAVES:"TULIP_LEAVES",TULIP_PETALS:"TULIP_PETALS",TULIP_STEM:"TULIP_STEM",TULIP:"TULIP",WALNUT:"WALNUT",WATER:"WATER",WHEAT_GRAIN:"WHEAT_GRAIN",WHEAT_GROWING:"WHEAT_GROWING",WHEAT_STALK:"WHEAT_STALK",WHEAT:"WHEAT",WILLOW_BRANCHES:"WILLOW_BRANCHES",WILLOW_LEAVES:"WILLOW_LEAVES",WILLOW_TREE_GROWING:"WILLOW_TREE_GROWING",WILLOW_TREE:"WILLOW_TREE",WILLOW_TRUNK:"WILLOW_TRUNK",WOOD:"WOOD"},P={[w.AIR]:S({id:0}),[w.AGAVE_BASE]:S({id:82,solid:!0}),[w.AGAVE_FLOWER_STALK]:S({id:84}),[w.AGAVE_FLOWER]:S({id:85}),[w.AGAVE_GROWING]:S({id:81,solid:!0,crop:!0}),[w.AGAVE_SPIKE]:S({id:83,solid:!0}),[w.AGAVE]:S({id:80,solid:!0,crop:!0,growthTime:1920,drops:"AGAVE",isSeed:!0}),[w.BAMBOO_GROWING]:S({id:43,solid:!0,crop:!0}),[w.BAMBOO_JOINT]:S({id:53,solid:!0}),[w.BAMBOO_LEAVES]:S({id:54}),[w.BAMBOO_STALK]:S({id:52,solid:!0}),[w.BAMBOO]:S({id:36,solid:!0,crop:!0,growthTime:180,drops:"BAMBOO",isSeed:!0}),[w.BEDROCK]:S({id:19,solid:!0}),[w.BERRY_BUSH_BERRIES]:S({id:51}),[w.BERRY_BUSH_BRANCH]:S({id:49,solid:!0}),[w.BERRY_BUSH_GROWING]:S({id:42,crop:!0}),[w.BERRY_BUSH_LEAVES]:S({id:50,solid:!0}),[w.BERRY_BUSH]:S({id:35,crop:!0,growthTime:360,drops:"BERRY_BUSH",isSeed:!0}),[w.BIRCH_BARK]:S({id:117,solid:!0}),[w.BIRCH_BRANCHES]:S({id:118,solid:!0}),[w.BIRCH_CATKINS]:S({id:120}),[w.BIRCH_GROWING]:S({id:115,solid:!0,crop:!0}),[w.BIRCH_LEAVES]:S({id:119}),[w.BIRCH_TRUNK]:S({id:116,solid:!0}),[w.BIRCH]:S({id:114,solid:!0,crop:!0,growthTime:1260,drops:["BIRCH","WOOD"],isSeed:!0}),[w.CACTUS_BODY]:S({id:30,solid:!0}),[w.CACTUS_FLOWER]:S({id:31}),[w.CACTUS_GROWING]:S({id:23,solid:!0,crop:!0}),[w.CACTUS]:S({id:15,solid:!0,crop:!0,growthTime:2400,drops:"CACTUS",isSeed:!0}),[w.CARROT_GROWING]:S({id:21,crop:!0}),[w.CARROT_LEAVES]:S({id:26}),[w.CARROT_ROOT]:S({id:27}),[w.CARROT]:S({id:13,crop:!0,growthTime:240,drops:"CARROT",isSeed:!0}),[w.CLAY]:S({id:6,solid:!0,farmable:!0,drops:"CLAY"}),[w.CLOUD]:S({id:72,drops:"CLOUD",farmable:!0,solid:!0}),[w.COAL]:S({id:7,solid:!0,drops:"COAL"}),[w.CORN_EAR]:S({id:61}),[w.CORN_GROWING]:S({id:45,crop:!0}),[w.CORN_LEAVES]:S({id:60}),[w.CORN_SILK]:S({id:62}),[w.CORN_STALK]:S({id:59}),[w.CORN]:S({id:38,crop:!0,growthTime:420,drops:"CORN",isSeed:!0}),[w.DIRT]:S({id:2,solid:!0,farmable:!0,drops:"DIRT"}),[w.FERN_FROND]:S({id:70}),[w.FERN_GROWING]:S({id:48,crop:!0}),[w.FERN_STEM]:S({id:69}),[w.FERN]:S({id:41,crop:!0,growthTime:90,drops:"FERN",isSeed:!0}),[w.GOLD]:S({id:9,solid:!0,drops:"GOLD"}),[w.GRASS]:S({id:1,solid:!0,farmable:!0,drops:"GRASS"}),[w.ICE]:S({id:17,solid:!0,drops:"ICE"}),[w.IRON]:S({id:8,solid:!0,drops:"IRON"}),[w.KELP_BLADE]:S({id:93}),[w.KELP_BULB]:S({id:94}),[w.KELP_GROWING]:S({id:92,crop:!0}),[w.KELP]:S({id:91,crop:!0,growthTime:150,drops:"KELP",isSeed:!0}),[w.LAVA]:S({id:18}),[w.LAVENDER_BUSH]:S({id:89}),[w.LAVENDER_FLOWERS]:S({id:90}),[w.LAVENDER_GROWING]:S({id:87,crop:!0}),[w.LAVENDER_STEM]:S({id:88}),[w.LAVENDER]:S({id:86,crop:!0,growthTime:200,drops:"LAVENDER",isSeed:!0}),[w.LOTUS_BUD]:S({id:112}),[w.LOTUS_FLOWER]:S({id:113}),[w.LOTUS_GROWING]:S({id:109,crop:!0}),[w.LOTUS_PAD]:S({id:110}),[w.LOTUS_STEM]:S({id:111}),[w.LOTUS]:S({id:108,crop:!0,growthTime:390,drops:"LOTUS",isSeed:!0}),[w.MOSS]:S({id:32}),[w.MUSHROOM_CAP]:S({id:29}),[w.MUSHROOM_GROWING]:S({id:22,crop:!0}),[w.MUSHROOM_STEM]:S({id:28}),[w.MUSHROOM]:S({id:14,crop:!0,growthTime:120,drops:"MUSHROOM",isSeed:!0}),[w.PINE_CONE]:S({id:65}),[w.PINE_NEEDLES]:S({id:64,solid:!0}),[w.PINE_TREE_GROWING]:S({id:46,solid:!0,crop:!0}),[w.PINE_TREE]:S({id:39,solid:!0,crop:!0,growthTime:1440,drops:"PINE_TREE",isSeed:!0}),[w.PINE_TRUNK]:S({id:63,solid:!0}),[w.PUMICE]:S({id:71,solid:!0,drops:"PUMICE"}),[w.PUMPKIN_FRUIT]:S({id:106}),[w.PUMPKIN_GROWING]:S({id:103,crop:!0}),[w.PUMPKIN_LEAVES]:S({id:105}),[w.PUMPKIN_STEM]:S({id:107}),[w.PUMPKIN_VINE]:S({id:104}),[w.PUMPKIN]:S({id:102,crop:!0,growthTime:660,drops:"PUMPKIN",isSeed:!0}),[w.ROSE_BLOOM]:S({id:101}),[w.ROSE_BUD]:S({id:100}),[w.ROSE_GROWING]:S({id:96,crop:!0}),[w.ROSE_LEAVES]:S({id:99}),[w.ROSE_STEM]:S({id:97}),[w.ROSE_THORNS]:S({id:98}),[w.ROSE]:S({id:95,crop:!0,growthTime:540,drops:"ROSE",isSeed:!0}),[w.SAND]:S({id:5,solid:!0,farmable:!0,drops:"SAND"}),[w.SNOW]:S({id:16,solid:!0,farmable:!0,drops:"SNOW"}),[w.STONE]:S({id:3,solid:!0,drops:"STONE"}),[w.SUNFLOWER_CENTER]:S({id:57}),[w.SUNFLOWER_GROWING]:S({id:44,crop:!0}),[w.SUNFLOWER_LEAVES]:S({id:56}),[w.SUNFLOWER_PETALS]:S({id:58}),[w.SUNFLOWER_STEM]:S({id:55}),[w.SUNFLOWER]:S({id:37,crop:!0,growthTime:600,drops:"SUNFLOWER",isSeed:!0}),[w.TREE_GROWING]:S({id:34,crop:!0}),[w.TREE_LEAVES]:S({id:11,solid:!0,crop:!0,drops:"WOOD"}),[w.TREE_TRUNK]:S({id:10,solid:!0,crop:!0,drops:"WOOD"}),[w.TULIP_BULB]:S({id:79}),[w.TULIP_GROWING]:S({id:75,crop:!0}),[w.TULIP_LEAVES]:S({id:77}),[w.TULIP_PETALS]:S({id:78}),[w.TULIP_STEM]:S({id:76}),[w.TULIP]:S({id:74,crop:!0,growthTime:300,drops:"TULIP",isSeed:!0}),[w.WALNUT]:S({id:33,crop:!0,growthTime:960,drops:["WALNUT","WOOD"],isSeed:!0}),[w.WATER]:S({id:4}),[w.WHEAT_GRAIN]:S({id:25}),[w.WHEAT_GROWING]:S({id:20,crop:!0}),[w.WHEAT_STALK]:S({id:24}),[w.WHEAT]:S({id:12,crop:!0,growthTime:480,drops:"WHEAT",isSeed:!0}),[w.WILLOW_BRANCHES]:S({id:67,solid:!0}),[w.WILLOW_LEAVES]:S({id:68}),[w.WILLOW_TREE_GROWING]:S({id:47,solid:!0,crop:!0}),[w.WILLOW_TREE]:S({id:40,solid:!0,crop:!0,growthTime:1800,drops:["WILLOW_TREE","WOOD"],isSeed:!0}),[w.WILLOW_TRUNK]:S({id:66,solid:!0}),[w.WOOD]:S({id:73,solid:!1,crop:!0,drops:"WOOD"})};function Vn(r,e="--sg-"){let i={};for(let o of r)if(o.startsWith(e)){let d=o.slice(e.length),n=r.getPropertyValue(o).trim().replace(/^['"]|['"]$/g,"");i[d]=n}return i}function Mo(r,e){for(let i in r)if(r[i].id===e)return i;return null}var It={crops:[],surfaceTile:null,subTile:null},de={FOREST:U({trees:!0,name:"Forest"},It),DESERT:U({trees:!1,name:"Desert"},It),TUNDRA:U({trees:!1,name:"Tundra"},It),SWAMP:U({trees:!0,name:"Swamp"},It)},oo;de.FOREST.surfaceTile=P.GRASS,de.FOREST.subTile=P.DIRT,de.FOREST.crops=[P.BERRY_BUSH,P.BIRCH,P.CARROT,P.FERN,P.LAVENDER,P.PINE_TREE,P.PUMPKIN,P.ROSE,P.TULIP,P.WHEAT],de.DESERT.surfaceTile=P.SAND,de.DESERT.subTile=P.SAND,de.DESERT.crops=[P.AGAVE,P.CACTUS,P.SUNFLOWER],de.TUNDRA.surfaceTile=P.SNOW,de.TUNDRA.subTile=P.ICE,de.TUNDRA.crops=[P.BIRCH,P.FERN,P.PINE_TREE],de.SWAMP.surfaceTile=P.CLAY,de.SWAMP.subTile=P.CLAY,de.SWAMP.crops=[P.BAMBOO,P.CORN,P.KELP,P.LOTUS,P.MUSHROOM,P.WILLOW_TREE];var kn=new URLSearchParams(globalThis.location?.search);oo=kn.has("seed")?kn.get("seed"):xe();var M={fogMode:new D.State("fog"),fogScale:new D.State(8),isFogScaled:new D.State(!0),breakMode:new D.State("regular"),canvasScale:new D.State(1),currentResolution:new D.State("400"),version:new D.State("1"),worldSeed:new D.State(oo),waterPhysics:{updateInterval:10,frameCounter:0,maxIterationsPerUpdate:5,checkRadius:15,dirtyRegions:new Set},TILE_SIZE:new D.State(8),WORLD_WIDTH:new D.State(500),WORLD_HEIGHT:new D.State(300),SURFACE_LEVEL:new D.State(90),GRAVITY:new D.State(.7),FRICTION:new D.State(.8),MAX_FALL_SPEED:new D.State(15),BIOMES:de,TILES:P,TileName:w},{TileName:F}=M,V={world:new D.State([]),exploredMap:new D.State({}),plantStructures:new D.State({}),gameTime:new D.State(0),growthTimers:new D.State({}),seeds:new D.State(0),selectedMaterialType:new D.State(null),selectedSeedType:new D.State(null),viewMode:new D.State("normal"),waterPhysicsQueue:new D.State(new Set),seedInventory:new D.State({[F.AGAVE]:0,[F.BAMBOO]:0,[F.BERRY_BUSH]:0,[F.BIRCH]:0,[F.CACTUS]:0,[F.CARROT]:0,[F.CORN]:0,[F.FERN]:0,[F.KELP]:0,[F.LAVENDER]:0,[F.LOTUS]:0,[F.MUSHROOM]:0,[F.PINE_TREE]:0,[F.PUMPKIN]:0,[F.ROSE]:0,[F.SUNFLOWER]:0,[F.TULIP]:0,[F.WALNUT]:0,[F.WHEAT]:0,[F.WILLOW_TREE]:0}),materialsInventory:new D.State({[F.CLAY]:0,[F.CLOUD]:0,[F.COAL]:0,[F.DIRT]:0,[F.GOLD]:0,[F.GRASS]:0,[F.ICE]:0,[F.IRON]:0,[F.PUMICE]:0,[F.SAND]:0,[F.SNOW]:0,[F.STONE]:0,[F.WOOD]:0}),player:new D.State({x:200,y:50,width:6,height:8,velocityX:0,velocityY:0,speed:2.75,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0}),camera:new D.State({x:0,y:0,speed:5})},io={totalSeeds:new D.Computed(()=>{let r=V.seedInventory.get();return Object.values(r).reduce((e,i)=>e+i,0)})};function We(r,e){let i=V[r]?.get();i!==void 0&&V[r].set(e(i))}function Bo(r,e){let i=M[r]?.get();i!==void 0&&M[r].set(e(i))}function Vo(r,e){return M[r]?.set(e)}function ko(r){return M[r]?.get()}function xo(r,e){return V[r]?.set(e)}function Yo(r){return V[r]?.get()}function Xo(r,e){return M.version.set(e),r.spriteGarden=ee(U({},r?.spriteGarden),{config:M,state:V,computed:io,setConfig:Vo,getConfig:ko,updateConfig:Bo,setState:xo,getState:Yo,updateState:We}),{gameConfig:M,gameState:V}}var Gt=class r{constructor(e,i){this.width=e,this.height=i,this.data=new Uint8Array(e*i),this.initializeTileMapping()}initializeTileMapping(){let e=M.TILES;this.tileIdMap=new Map,this.reverseTileMap=new Map;let i=0;for(let[o,d]of Object.entries(e))this.tileIdMap.set(d,i),this.reverseTileMap.set(i,d),i++}getTile(e,i){if(e<0||e>=this.width||i<0||i>=this.height)return M.TILES.AIR;let o=this.data[i*this.width+e];return this.reverseTileMap.get(o)||M.TILES.AIR}setTile(e,i,o){if(e<0||e>=this.width||i<0||i>=this.height)return;let d=this.tileIdMap.get(o);d!==void 0&&(this.data[i*this.width+e]=d)}static fromArray(e,i,o){let d=new r(i,o),n=M.TILES,l=new Map;for(let[a,s]of Object.entries(n))s&&typeof s.id=="number"&&l.set(s.id,s);for(let a=0;a<i;a++)if(e[a])for(let s=0;s<o;s++){let g=e[a][s];if(!g||g.id===void 0||g.id===null){d.setTile(a,s,n.AIR);continue}let c=l.get(g.id);c?d.setTile(a,s,c):(console.warn(`Unknown tile ID ${g.id} at (${a}, ${s}), defaulting to AIR`),d.setTile(a,s,n.AIR))}return d}toArray(){let e=[];for(let i=0;i<this.width;i++){e[i]=[];for(let o=0;o<this.height;o++)e[i][o]=this.getTile(i,o)}return e}};function hn(r,e,i){let o=r.spriteGarden.config,d=r.spriteGarden.state;for(let a in i.config)a!=="currentResolution"&&a!=="isFogScaled"&&o[a]?.set&&r.spriteGarden.setConfig(a,i.config[a]);let n=i.config.WORLD_HEIGHT,l=i.config.WORLD_WIDTH;for(let a in i.state){if(a==="seedInventory"){let s=i.state[a];for(let g in d.seedInventory.get())s[g]===void 0&&(s[g]=0);continue}if(a==="exploredMap"){let s={},g=i.state.exploredMap;if(g&&Object.keys(g).length>0){let c=Ee(r,e);s=yt.fromObject(g,l,n,c)}d.exploredMap.set(s);continue}if(a==="world"){let s=i.state[a];if(s&&Array.isArray(s)&&s.length>0){console.log(`Converting world: ${l}x${n}`);let g=Gt.fromArray(s,l,n),c=o.TILES,t=0;for(let I=0;I<l;I++)for(let C=0;C<n;C++){let p=g.getTile(I,C);p&&p!==c.AIR&&t++}console.log(`Converted world contains ${t} non-air tiles`),d.world.set(g),console.log("World converted successfully")}else console.error("Invalid world data in save state:",s);continue}d[a]?.set&&r.spriteGarden.setState(a,i.state[a])}console.log("Save state loaded successfully"),Lt(r.document,o)}var Wt="sprite-garden-autosave",ro="sprite-garden-autosave-mode",xn="sprite-garden-save-";async function Zt(){try{return await Q.getItem(ro)}catch(r){return console.info("Failed to get save mode:",r),"manual"}}async function jt(r){try{await Q.setItem(ro,r),console.info("Save mode set to:",r)}catch(e){console.info("Failed to set save mode:",e)}}var Yn=0;async function wt(r){try{if(await Zt()!=="auto")return;let e=Date.now();if(e-Yn<3e4)return void console.info("Auto-save skipped (too soon since last save)");let i=Rt(r),o=JSON.stringify(i),d=await pt(o),n=zn(r,await d.arrayBuffer()),l={name:"[Auto Save]",timestamp:Date.now(),data:n,isAutoSave:!0};await Q.setItem(Wt,l),Yn=e,console.info("Game auto-saved successfully")}catch(e){console.error("Failed to auto-save game:",e)}}var nn=class{constructor(e,i,o){this.gThis=e,this.doc=i,this.shadow=o,this.dialog=null,this.savedGames=[],this.close=this.close.bind(this),this.deleteSelectedGame=this.deleteSelectedGame.bind(this),this.loadSelectedGame=this.loadSelectedGame.bind(this),this.saveCurrentGame=this.saveCurrentGame.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this),this.handleWorldNameInput=this.handleWorldNameInput.bind(this)}async createDialog(){this.dialog&&this.dialog.remove();let e=this.doc.createElement("dialog");return e.setAttribute("id","storageDialog"),e.style.cssText=`
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
    `,this.shadow.append(e),this.dialog=e,await this.loadSavedGamesList(),this.initEventListeners(),e}async loadSavedGamesList(){this.savedGames=[];let e=await Q.keys(),i=await Q.getItem(Wt);i&&this.savedGames.push({key:Wt,name:i.name,timestamp:i.timestamp,data:i.data,isAutoSave:!0});for(let o of e)if(o.startsWith(xn)){let d=await Q.getItem(o);d&&this.savedGames.push({key:o,name:d.name,timestamp:d.timestamp,data:d.data,isAutoSave:d.isAutoSave||!1})}this.savedGames.sort((o,d)=>d.timestamp-o.timestamp),this.renderSavedGamesList()}renderSavedGamesList(){let e=this.dialog.querySelector("#savedGamesList");this.savedGames.length!==0?(e.innerHTML=this.savedGames.map((i,o)=>`
        <div
          class="saved-game-item"
          data-index="${o}"
          style="
            padding: 0.625rem;
            border-bottom: 0.0625rem solid var(--sg-color-gray-100);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${i.isAutoSave?"background: var(--sg-color-blue-50);":""}
          "
        >
          <div>
            <div style="font-weight: bold; ${i.isAutoSave?"color: var(--sg-color-blue-700);":""}">${i.name}</div>
            <div style="font-size: 0.75rem; color: var(--sg-color-neutral-950);">
              ${new Date(i.timestamp).toLocaleString()}
            </div>
          </div>
          <input
            type="radio"
            name="selectedGame"
            value="${o}"
            style="margin-left: 0.625rem"
          />
        </div>
    `).join(""),e.querySelectorAll(".saved-game-item").forEach(i=>{i.addEventListener("click",o=>{o.target.type!=="radio"&&(i.querySelector('input[type="radio"]').checked=!0,this.updateButtonStates())})}),e.querySelectorAll('input[type="radio"]').forEach(i=>{i.addEventListener("change",()=>this.updateButtonStates())})):e.innerHTML=`
      <div style="padding: 1.25rem; text-align: center; color: var(--sg-color-neutral-950);">
        No saved games found
      </div>
    `}updateButtonStates(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked'),i=this.dialog.querySelector("#loadSelectedBtn"),o=this.dialog.querySelector("#deleteSelectedBtn"),d=!!e;i.disabled=!d,o.disabled=!d,i.style.opacity=d?"1":"0.5",o.style.opacity=d?"1":"0.5",i.style.cursor=d?"pointer":"not-allowed",o.style.cursor=d?"pointer":"not-allowed"}handleWorldNameInput(e){/^[\p{L}\p{N}\p{P}\s]+$/u.test(e.key)&&e.stopPropagation(),e.key==="Enter"&&this.saveCurrentGame()}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),i=this.dialog.querySelector("#saveToStorageBtn"),o=this.dialog.querySelector("#loadSelectedBtn"),d=this.dialog.querySelector("#deleteSelectedBtn"),n=this.dialog.querySelector("#worldNameInput");e.addEventListener("click",this.close),i.addEventListener("click",this.saveCurrentGame),o.addEventListener("click",this.loadSelectedGame),d.addEventListener("click",this.deleteSelectedGame),n.addEventListener("keydown",this.handleWorldNameInput),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){let e=this.dialog.querySelector("#closeStorageDialog"),i=this.dialog.querySelector("#saveToStorageBtn"),o=this.dialog.querySelector("#loadSelectedBtn"),d=this.dialog.querySelector("#deleteSelectedBtn"),n=this.dialog.querySelector("#worldNameInput");e.removeEventListener("click",this.close),i.removeEventListener("click",this.saveCurrentGame),o.removeEventListener("click",this.loadSelectedGame),d.removeEventListener("click",this.deleteSelectedGame),n.removeEventListener("keydown",this.handleWorldNameInput),this.dialog.removeEventListener("click",this.handleDialogClick)}async saveCurrentGame(){let e=this.dialog.querySelector("#worldNameInput"),i=e.value.trim();if(i)try{let o=Rt(this.gThis),d=JSON.stringify(o),n=await pt(d),l=await n.arrayBuffer(),a=zn(this.gThis,l),s={name:i,timestamp:Date.now(),data:a},g=`${xn}${Date.now()}-${i.replace(/[^a-zA-Z0-9]/g,"_")}`;await Q.setItem(g,s),console.log("Game saved to storage:",i),e.value="",await this.loadSavedGamesList()}catch(o){console.error("Failed to save game to storage:",o),alert("Failed to save game. Check console for details.")}else alert("Please enter a world name")}async loadSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let i=parseInt(e.value),o=this.savedGames[i];try{let d=Qn(this.gThis,o.data,"application/gzip"),n;if(!("DecompressionStream"in this.gThis))throw new Error("DecompressionStream not supported");{let c=d.stream().pipeThrough(new DecompressionStream("gzip"));n=await(await new Response(c).blob()).text()}let l=JSON.parse(n);hn(this.gThis,this.shadow,l);let{worldSeed:a}=l.config,s=this.doc.getElementById("worldSeedInput"),g=this.doc.getElementById("currentSeed");s&&(s.value=a),g&&(g.textContent=a),console.log("Game loaded from storage:",o.name),this.close()}catch(d){console.error("Failed to load game from storage:",d),alert("Failed to load game. Check console for details.")}}async deleteSelectedGame(){let e=this.dialog.querySelector('input[name="selectedGame"]:checked');if(!e)return;let i=parseInt(e.value),o=this.savedGames[i];if(confirm(`Are you sure you want to delete "${o.name}"?`))try{await Q.removeItem(o.key),console.log("Game deleted from storage:",o.name),await this.loadSavedGamesList()}catch(d){console.error("Failed to delete game from storage:",d),alert("Failed to delete game. Check console for details.")}}show(){this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog.close()}};function on(r,e){for(let[i,o]of Object.entries(e))r.host.style.setProperty(i,o)}var rn="sprite-garden-custom-colors";async function Jo(r,e){let i=await(async function(o,d){try{let n=await Q.getItem(d);if(n&&typeof n=="object")return console.log("Loaded custom colors:",Object.keys(n).length,"properties"),n}catch(n){console.error("Failed to load saved colors:",n)}return null})(0,rn)??Ee(r,e);return on(e,i),i}var ln=class{constructor(e,i,o){this.gThis=e,this.doc=i,this.shadow=o,this.dialog=null,this.colors={},this.originalColors={},this.close=this.close.bind(this),this.handleColorChange=this.handleColorChange.bind(this),this.handleDialogClose=this.handleDialogClose.bind(this),this.handleDialogKeydown=this.handleDialogKeydown.bind(this),this.handleReset=this.handleReset.bind(this),this.handleSave=this.handleSave.bind(this),this.dirty=!1}async createDialog(){this.dialog&&this.dialog.remove(),this.originalColors=Ee(this.gThis,this.shadow),this.colors=U({},this.originalColors);let e=this.doc.createElement("dialog");return e.addEventListener("close",this.handleDialogClose),e.addEventListener("keydown",this.handleDialogKeydown),e.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      max-height: 80vh;
      max-width: 50rem;
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
    `,this.shadow.append(e),this.dialog=e,this.renderColorInputs(),this.initEventListeners(),e}async handleSave(){await(async function(e,i){try{await Q.setItem(i,e),console.log("Saved custom colors")}catch(o){console.error("Failed to save colors:",o)}})(this.colors,rn),await on(this.shadow,this.colors),this.dirty=!1,this.close()}async handleReset(){confirm("Reset all colors to defaults and close? This cannot be undone.")&&(await(async function(e,i,o){try{await Q.removeItem(o);let d=Ee(e,i);for(let n of Object.keys(d))i.host.style.removeProperty(n);console.log("Reset to default colors")}catch(d){console.error("Failed to reset colors:",d)}})(this.gThis,this.shadow,rn),this.dirty=!1,this.close())}renderColorInputs(){let e=this.dialog.querySelector("#colorInputsContainer"),i={};for(let[d,n]of Object.entries(this.colors)){let l=d.match(/--sg-(?:color-)?([a-z]+)-/),a=l?l[1]:"other";i[a]||(i[a]=[]),i[a].push({property:d,value:n})}let o=Object.keys(i).sort();for(let d of o){let n=this.doc.createElement("div");n.style.cssText=`
        grid-column: 1 / -1;
        margin-top: 1rem;
      `;let l=this.doc.createElement("h4");l.textContent=d.charAt(0).toUpperCase()+d.slice(1),l.style.cssText=`
        border-bottom: 1px solid var(--sg-color-gray-300);
        color: var(--sg-color-gray-800);
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
        padding-bottom: 0.25rem;
      `,n.append(l),e.append(n);for(let{property:a,value:s}of i[d]){let g=this.doc.createElement("div");g.style.cssText=`
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `;let c=this.doc.createElement("label");c.textContent=a.replace("--sg-","").replace(/-/g," "),c.style.cssText=`
          color: var(--sg-color-gray-700);
          font-size: 0.75rem;
          text-transform: capitalize;
        `;let t=this.doc.createElement("div");t.style.cssText=`
          align-items: center;
          display: flex;
          gap: 0.5rem;
        `;let I=this.doc.createElement("input");I.type="color",I.value=this.normalizeColor(s),I.dataset.property=a,I.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          cursor: pointer;
          height: 2rem;
          width: 3rem;
        `;let C=this.doc.createElement("input");C.type="text",C.value=s,C.dataset.property=a,C.style.cssText=`
          border-radius: 0.25rem;
          border: 1px solid var(--sg-color-gray-400);
          flex: 1;
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.25rem;
        `,I.addEventListener("input",p=>{C.value=p.target.value,this.handleColorChange(a,p.target.value)}),C.addEventListener("input",p=>{let A=this.normalizeColor(p.target.value);A&&(I.value=A),this.handleColorChange(a,p.target.value)}),t.append(I),t.append(C),g.append(c),g.append(t),e.append(g)}}}normalizeColor(e){if(!e)return"#000000";if(e.startsWith("#"))return e.length===7?e:"#000000";let i=this.doc.createElement("canvas").getContext("2d");return i.fillStyle=e,i.fillStyle}handleColorChange(e,i){this.colors[e]=i,this.dirty=!0,this.shadow.host.style.setProperty(e,i)}initEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),i=this.dialog.querySelector("#saveColorsBtn"),o=this.dialog.querySelector("#resetColorsBtn");e.addEventListener("click",this.close),i.addEventListener("click",this.handleSave),o.addEventListener("click",this.handleReset)}show(){this.dialog.showModal()}handleDialogKeydown(e){e.key==="Escape"&&(e.preventDefault(),this.close())}close(){this.dirty?confirm("Close without saving?")&&(on(this.shadow,this.originalColors),this.dialog.close()):this.dialog.close()}handleDialogClose(){this.removeEventListeners()}removeEventListeners(){let e=this.dialog.querySelector("#closeColorDialog"),i=this.dialog.querySelector("#saveColorsBtn"),o=this.dialog.querySelector("#resetColorsBtn");e.removeEventListener("click",this.close),i.removeEventListener("click",this.handleSave),o.removeEventListener("click",this.handleReset)}};function Ho(r,e,i,o,d,n,l,a,s,g,c){Ge(()=>{(function(t,I,C){Object.keys(C).forEach(p=>{let A=p.toLowerCase(),h=t?.getElementById(`${A}Count`);try{h.textContent=C[A.toUpperCase()]}catch{}}),Object.keys(I).forEach(p=>{let A=p.toLowerCase(),h=t?.getElementById(`${A}Count`);try{h.textContent=I[A.toUpperCase()]}catch{}})})(r,l.get(),a.get())}),Ge(()=>{let t=r.getElementById("worldSeedInput");if(t&&!t.value){let I=r.getElementById("currentSeed"),C=d.get();if(I&&C)return t.value=C,void(I.textContent=C);let p=getRandomSeed();t.value=p,I.textContent=p}}),Ge(()=>{let t=n.get(),I=r.getElementById("gameTime");I&&(I.textContent=Math.floor(t))}),Ge(()=>{let t=c.get(),I=r.getElementById("viewModeText");I&&(I.textContent=t==="normal"?"View Normal":"View X-Ray")}),Ge(()=>{let t=o.get(),I=r.getElementById("fogModeText");I&&(I.textContent=t==="fog"?"Fog":"Clear")}),Ge(()=>{let t=i.get(),I=r.getElementById("breakModeText");I&&(I.textContent=t==="regular"?"Dig Regular":"Dig Extra")}),Ge(()=>{let t=e.get(),I=r.getElementById("seedCount");I&&(I.textContent=t)}),Ge(()=>{let t=g.get(),I=r.getElementById("selectedSeed");I&&(I.textContent=t||"None")}),Ge(()=>{let t=s.get(),I=r.getElementById("selectedMaterial");I&&(I.textContent=t||"None")})}function St(r,e,i,o){return r.set(!1),new yt(i,e,o)}function lo(r){return Object.fromEntries(Object.entries(r).filter(([e,i])=>i.isSeed).map(([e,i])=>[i.id,e]))}function an({centerX:r,centerY:e,radius:i,tiles:o,world:d,worldHeight:n,worldWidth:l}){for(let a=r-i;a<=r+i;a++)for(let s=e-i;s<=e+i;s++)a>=0&&a<l&&s>=0&&s<n&&Math.sqrt((a-r)**2+(s-e)**2)<=i&&d.getTile(a,s)!==o.BEDROCK&&d.setTile(a,s,o.AIR)}function Uo({angle:r,length:e,startX:i,startY:o,tiles:d,width:n,world:l,worldHeight:a,worldWidth:s}){let g=i,c=o;for(let t=0;t<e;t++){r+=.3*(Math.random()-.5),g+=Math.cos(r),c+=Math.sin(r);for(let I=-n;I<=n;I++)for(let C=-n;C<=n;C++){let p=Math.floor(g+I),A=Math.floor(c+C);p>=0&&p<s&&A>=0&&A<a&&Math.sqrt(I*I+C*C)<=n&&l.getTile(p,A)!==d.BEDROCK&&l.setTile(p,A,d.AIR)}Math.random()<.1&&an({centerX:Math.floor(g),centerY:Math.floor(c),radius:2+Math.floor(2*Math.random()),tiles:d,world:l,worldHeight:a,worldWidth:s})}}var ao=Math.sqrt(3),Oo=.5*(ao-1),Pe=(3-ao)/6,Xn=r=>0|Math.floor(r),Jn=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Do(r=Math.random){let e=(function(d){let l=new Uint8Array(512);for(let a=0;a<256;a++)l[a]=a;for(let a=0;a<255;a++){let s=a+~~(d()*(256-a)),g=l[a];l[a]=l[s],l[s]=g}for(let a=256;a<512;a++)l[a]=l[a-256];return l})(r),i=new Float64Array(e).map(d=>Jn[d%12*2]),o=new Float64Array(e).map(d=>Jn[d%12*2+1]);return function(d,n){let l=0,a=0,s=0,g=(d+n)*Oo,c=Xn(d+g),t=Xn(n+g),I=(c+t)*Pe,C=d-(c-I),p=n-(t-I),A,h;C>p?(A=1,h=0):(A=0,h=1);let y=C-A+Pe,W=p-h+Pe,R=C-1+2*Pe,B=p-1+2*Pe,T=255&c,x=255&t,Y=.5-C*C-p*p;if(Y>=0){let j=T+e[x];Y*=Y,l=Y*Y*(i[j]*C+o[j]*p)}let H=.5-y*y-W*W;if(H>=0){let j=T+A+e[x+h];H*=H,a=H*H*(i[j]*y+o[j]*W)}let z=.5-R*R-B*B;if(z>=0){let j=T+1+e[x+1];z*=z,s=z*z*(i[j]*R+o[j]*B)}return 70*(l+a+s)}}var _o=(function(){return r.importState=function(e){var i=new r;return i.importState(e),i},r;function r(){return(function(e){var i=0,o=0,d=0,n=1;e.length==0&&(e=[+new Date]);var l=(function(){var g=4022871197,c=function(t){t=t.toString();for(var I=0;I<t.length;I++){var C=.02519603282416938*(g+=t.charCodeAt(I));C-=g=C>>>0,g=(C*=g)>>>0,g+=4294967296*(C-=g)}return 23283064365386963e-26*(g>>>0)};return c.version="Mash 0.9",c})();i=l(" "),o=l(" "),d=l(" ");for(var a=0;a<e.length;a++)(i-=l(e[a]))<0&&(i+=1),(o-=l(e[a]))<0&&(o+=1),(d-=l(e[a]))<0&&(d+=1);l=null;var s=function(){var g=2091639*i+23283064365386963e-26*n;return i=o,o=d,d=g-(n=0|g)};return s.next=s,s.uint32=function(){return 4294967296*s()},s.fract53=function(){return s()+11102230246251565e-32*(2097152*s()|0)},s.version="Alea 0.9",s.args=e,s.exportState=function(){return[i,o,d,n]},s.importState=function(g){i=+g[0]||0,o=+g[1]||0,d=+g[2]||0,n=+g[3]||0},s})(Array.prototype.slice.call(arguments))}})(),gn=null,sn=null;function ze(r){r!==sn&&(sn=r,gn=Do(_o(r)))}function Tt(r,e,i=0,o=3,d=.5,n=.02){let l=i.toString();gn&&sn===l||ze(l);let a=0,s=1,g=n,c=0;for(let t=0;t<o;t++)a+=gn(r*g,e*g)*s,c+=s,s*=d,g*=2;return a/c}function Ct(r,e=0){return Tt(r,0,e,4,.6,.015)}function Hn(r,e=500){return Tt(r,0,e,2,.8,.008)}function Un(r,e=2e3){return Tt(r,0,e,2,.5,.012)}function Fo(r,e,i){ze(i);let o=[];for(let d=0;d<r;d++){let n=e;n+=15*Ct(d,parseInt(i)),n+=8*Ct(d,parseInt(i)+100),n+=4*Ct(d,parseInt(i)+200);let l=Ct(d,parseInt(i)+300);l>.6&&(n+=20*(l-.6)),n=Math.max(10,Math.min(1.5*e,n)),o[d]=Math.floor(n)}return(function(d,n=1){let l=[...d];for(let a=0;a<n;a++){for(let s=1;s<d.length-1;s++)l[s]=Math.floor((d[s-1]+2*d[s]+d[s+1])/4);d.splice(0,d.length,...l)}return d})(o,2)}function Po(r,e,i,o,d,n,l){let a=Math.floor(o/2);for(let s=-a;s<=a;s++)for(let g=0;g<=Math.floor(.3*o);g++){let c=e+s,t=i+g+1;c>=0&&c<d&&t>=0&&t<n&&Math.sqrt(s*s+g*g*2)<=a&&r.getTile(c,t).id!==l.SAND.id&&r.setTile(c,t,l.WATER)}}function jo(r,e,i,o,d,n){let l=i+1;if(e>=0&&e<o&&l>=0&&l<d){r.getTile(e,l).id!==n.SAND.id&&r.setTile(e,l,n.WATER);let a=i+2;a<d&&Math.random()<.7&&r.getTile(e,a).id!==n.SAND.id&&r.setTile(e,a,n.WATER)}}function Ko(r,e,i,o,d,n){let l=i;if(e>=0&&e<o&&l>=0&&l<d){let a=r.getTile(e,l);a===n.AIR&&a.id!==n.SAND.id&&r.setTile(e,l,n.WATER)}}function go(r,e,i){ze(i);let o=Hn(r,parseInt(i)+600),d=Hn(r,parseInt(i)+700);return o<-.4?e.TUNDRA:o>.4&&d<-.2?e.DESERT:d>.3?e.SWAMP:e.FOREST}var pn=r=>lo(r);function so(r,e,i,o,d,n){let l=i.get();if(l.size===0||(e.frameCounter++,e.frameCounter<e.updateInterval))return;e.frameCounter=0;let a=new Set,s=!1,g=o.get();for(let c of l){let[t,I]=c.split(",").map(Number),C=g.getTile(t,I);if(C===r.WATER){let p=[{x:t-1,y:I},{x:t+1,y:I},{x:t,y:I-1},{x:t,y:I+1}],A=!1;for(let h of p)if(h.x>=0&&h.x<n&&h.y>=0&&h.y<d&&g.getTile(h.x,h.y)===r.LAVA){A=!0;break}if(A){g.setTile(t,I,r.PUMICE);for(let h of p)h.x>=0&&h.x<n&&h.y>=0&&h.y<d&&a.add(`${h.x},${h.y}`);s=!0;continue}if(I+1<d){let h=g.getTile(t,I+1);if(h===r.AIR){g.setTile(t,I,r.AIR),g.setTile(t,I+1,r.WATER),a.add(`${t},${I+1}`),t>0&&a.add(`${t-1},${I+1}`),t<n-1&&a.add(`${t+1},${I+1}`),I+2<d&&a.add(`${t},${I+2}`),s=!0;continue}if(h===r.LAVA){g.setTile(t,I,r.AIR),g.setTile(t,I+1,r.PUMICE),s=!0;continue}if(h&&h.solid){let y=t>0&&g.getTile(t-1,I)===r.AIR,W=t<n-1&&g.getTile(t+1,I)===r.AIR,R=y&&I+1<d&&g.getTile(t-1,I+1)===r.AIR,B=W&&I+1<d&&g.getTile(t+1,I+1)===r.AIR;if(R||B){let T=0;T=R&&B?Math.random()<.5?-1:1:R?-1:1;let x=t+T;g.setTile(t,I,r.AIR),g.setTile(x,I,r.WATER),a.add(`${x},${I}`),a.add(`${x},${I+1}`),s=!0}else if(y||W){let T=0;T=y&&W?Math.random()<.5?-1:1:y?-1:1;let x=t+T;if(I+1<d){let Y=g.getTile(x,I+1);Y&&Y.solid&&(g.setTile(t,I,r.AIR),g.setTile(x,I,r.WATER),a.add(`${x},${I}`),s=!0)}}}}}else C!==r.WATER&&I>0&&g.getTile(t,I-1)===r.WATER&&a.add(`${t},${I-1}`)}if(s)for(let c of a){let[t,I]=c.split(",").map(Number);for(let C=-2;C<=2;C++)for(let p=-2;p<=2;p++){let A=t+C,h=I+p;A>=0&&A<n&&h>=0&&h<d&&g.getTile(A,h)===r.WATER&&h+1<d&&g.getTile(A,h+1)===r.AIR&&a.add(`${A},${h}`)}}s&&a.size>0?i.set(a):i.set(new Set)}function zo({biomes:r,surfaceLevel:e,tiles:i,tileSize:o,worldSeed:d,worldHeight:n,worldWidth:l}){console.log(`Generating world with seed: ${d}`);let a=new Gt(l,n),s=Fo(l,e,d);for(let c=0;c<l;c++){let t=go(c,r,d)||r.FOREST,I=s[c];for(let C=0;C<n;C++)if(C>I){let p=C-I;p<2?t.surfaceTile===i.GRASS||t.surfaceTile===i.SNOW?a.setTile(c,C,t.surfaceTile):a.setTile(c,C,t.subTile):p<xe(20,50)?Math.random()<.1?a.setTile(c,C,i.COAL):Math.random()<.95?a.setTile(c,C,t.subTile):a.setTile(c,C,i.STONE):p<xe(50,90)?Math.random()<.05?a.setTile(c,C,i.IRON):Math.random()<.02?a.setTile(c,C,i.GOLD):a.setTile(c,C,i.STONE):C>n-2?a.setTile(c,C,i.BEDROCK):C>n-4||Math.random()<.01?a.setTile(c,C,i.LAVA):a.setTile(c,C,i.STONE)}else C===I&&a.setTile(c,C,t.surfaceTile);if(t.trees&&Math.random()<.025){let C=xe(3,5),p=I,A=[];for(let W=0;W<C;W++){let R=p-W-1;R>=0&&(a.setTile(c,R,i.TREE_TRUNK),A.push({x:c,y:R,tile:i.TREE_TRUNK}))}let h=p-C,y=3;for(let W=-y;W<=y;W++)for(let R=-y;R<=1;R++){let B=c+W,T=h+R;Math.sqrt(W*W+R*R)<=y&&R<=0&&B>=0&&B<l&&T>=0&&T<n&&(B===c&&T>=h&&T<p||a.getTile(B,T)!==i.AIR||(a.setTile(B,T,i.TREE_LEAVES),A.push({x:B,y:T,tile:i.TREE_LEAVES})))}}if(t.crops.length>0&&Math.random()<.05){let C=t.crops[Math.floor(Math.random()*t.crops.length)],p=I-1;if(p>=0&&a.getTile(c,p)===i.AIR){a.setTile(c,p,C);let A=pn(i)[C.id];A&&We("seedInventory",h=>ee(U({},h),{[A]:(h&&h[A]?h[A]:0)+2}))}}}(function({surfaceLevel:c,tiles:t,world:I,worldHeight:C,worldWidth:p}){let A=[];for(let h=0;h<25;h++)A.push({x:Math.floor(Math.random()*p),y:c+5+Math.floor(Math.random()*(C-c-15)),size:3+Math.floor(8*Math.random()),branches:1+Math.floor(3*Math.random())});A.forEach(h=>{an({centerX:h.x,centerY:h.y,radius:h.size,tiles:t,world:I,worldHeight:C,worldWidth:p});for(let y=0;y<h.branches;y++)Uo({angle:2*Math.PI*y/h.branches+.5*(Math.random()-.5),length:10+Math.floor(20*Math.random()),startX:h.x,startY:h.y,tiles:t,width:1+Math.floor(2*Math.random()),world:I,worldHeight:C,worldWidth:p})});for(let h=0;h<50;h++){let y=Math.floor(Math.random()*p),W=c+3+Math.floor(Math.random()*(C-c-10)),R=1+Math.floor(3*Math.random());Math.random()<.3&&an({centerX:y,centerY:W,radius:R,tiles:t,world:I,worldHeight:C,worldWidth:p})}})({surfaceLevel:e,tiles:i,world:a,worldHeight:n,worldWidth:l}),(function({world:c,worldWidth:t,worldHeight:I,tiles:C}){for(let p=1;p<t-1;p++)for(let A=1;A<I-1;A++)c.getTile(p,A)===C.AIR&&[c.getTile(p-1,A),c.getTile(p+1,A),c.getTile(p,A-1),c.getTile(p,A+1)].some(h=>h&&h.solid)&&A>M.SURFACE_LEVEL.get()+5&&Math.random()<.5&&c.setTile(p,A,C.MOSS)})({world:a,worldWidth:l,worldHeight:n,tiles:i}),(function({world:c,worldWidth:t,surfaceLevel:I,tiles:C,seed:p}){ze(p);let A=parseInt(p),h=Math.max(I-30,60);for(let y=0;y<t;y++)if(Tt(y,0,A,2,.5,.01)>.2){let W=Math.floor(6+10*Math.random()),R=Math.floor(4+6*Math.random()),B=5+Math.floor(Math.random()*(h-5));for(let T=0;T<W;T++)for(let x=0;x<R;x++){let Y=y+T;Y>=t||B+x>=I||(T!==0&&T!==W-1&&x!==0&&x!==R-1||Math.random()>.3)&&c.getTile(Y,B+x)===C.AIR&&c.setTile(Y,B+x,C.CLOUD)}y+=W+Math.floor(10*Math.random())}})({world:a,worldWidth:l,surfaceLevel:e,tiles:i,seed:d}),(function({world:c,heights:t,worldWidth:I,worldHeight:C,surfaceLevel:p,tiles:A,seed:h,tileSize:y}){if(c&&typeof c.getTile=="function"){ze(h);for(let W=0;W<I;W++){let R=t[W],B=Un(W,parseInt(h)+2e3);R>p&&Ko(c,W,R,I,C,A),B>.5&&R<p+5&&Po(c,W,R,Math.floor(15*(B-.4))+5,I,C,A),Un(W,parseInt(h)+2500)>.5&&jo(c,W,R,I,C,A)}}else console.error("generateWaterSources: Invalid world object at entry",{hasWorld:!!c,worldType:typeof c,worldWidth:I,worldHeight:C})})({world:a,heights:s,worldWidth:l,worldHeight:n,surfaceLevel:e,tiles:i,seed:d,tileSize:o});let g=new Set;for(let c=0;c<l;c++)for(let t=0;t<n;t++)a.getTile(c,t)===i.WATER&&g.add(`${c},${t}`);for(let c=0;c<100&&(so(i,{frameCounter:999},{get:()=>g,set:I=>g.clear()||I.forEach(C=>g.add(C))},new D.State(a),l,n),g.size!==0);c++);return console.log("World generation complete!"),a}function Qe(r,e,i,o,d,n,l,a,s,g,c,t,I=null){let C;I!==null?(l.set(I.toString()),C=I):C=l?.get();let p=zo({biomes:r,surfaceLevel:e,tiles:o,tileSize:i,worldSeed:C,worldHeight:d,worldWidth:n});s.set({}),a.set(0),g.set((function(W,R,B,T){let x={};for(let Y=0;Y<R;Y++)for(let H=0;H<B;H++)if(W.getTile(Y,H)===T.TREE_TRUNK){let z=W.getTile(Y,H+1);if(W.getTile(Y,H-1),z&&z.solid&&z!==T.TREE_TRUNK){let j=`${Y},${H}`,ne=[],Ae=H;for(;Ae>=0&&W.getTile(Y,Ae)===T.TREE_TRUNK;)ne.push({x:Y,y:Ae,tile:T.TREE_TRUNK}),Ae--;let ce=Ae+1,pe=3;for(let le=-pe;le<=pe;le++)for(let ye=-pe;ye<=pe;ye++){let be=Y+le,ve=ce+ye;be>=0&&be<R&&ve>=0&&ve<B&&W.getTile(be,ve)===T.TREE_LEAVES&&ne.push({x:be,y:ve,tile:T.TREE_LEAVES})}x[j]={seedType:"WALNUT",mature:!0,blocks:ne,baseX:Y,baseY:H}}}return x})(p,n,d,o));let A=(function(W,R=1){return Object.fromEntries(Object.values(W).map(B=>[B,R]))})(lo(o),1);t.set(A);let h=Math.floor(n/2),y=Math.floor(e-5);for(let W=h-25;W<h+25;W++)for(let R=y-5;R<y+5;R++)if(W>=0&&W<n&&R>=0&&R<d){let B=Math.floor(W),T=Math.floor(R);if(p.getTile(B,T)===o.AIR&&T+1<d&&p.getTile(B,T+1)&&p.getTile(B,T+1).solid){let x=!0;for(let Y=T-2;Y<=T;Y++)if(Y>=0&&p.getTile(B,Y)!==o.AIR){x=!1;break}if(x){let Y=ee(U({},c.get()),{x:W*i,y:R*i,velocityX:0,velocityY:0,lastDirection:0});c.set(Y)}}}return p}var K={isEnabled:!1,selectedTile:null,brushSize:1,isDragging:!1,lastPaintedTile:null};function Qo(r,e,i,o){(function({doc:d,shadow:n,fogMode:l,viewMode:a}){let s=n.getElementById("toggleMapEditor");s&&s.addEventListener("click",()=>{K.isEnabled=!K.isEnabled,(function({shadow:p,fogMode:A,viewMode:h}){let y=p.getElementById("mapEditorText"),W=p.getElementById("mapEditorControls");y&&W&&(K.isEnabled?(y.textContent="Disable Editor",W.removeAttribute("hidden"),A.set("clear"),h.set("normal")):(A.set("fog"),y.textContent="Enable Editor",W.setAttribute("hidden","")))})({shadow:n,fogMode:l,viewMode:a})});let g=n.getElementById("brushSizeSelect");g&&g.addEventListener("change",p=>{K.brushSize=parseInt(p.target.value)}),n.querySelectorAll(".tile-btn").forEach(p=>{p.addEventListener("click",A=>{let h=A.target.dataset.tile;(function(y,W){K.selectedTile=W,console.log("Selected tile:",W,"Editor enabled:",K.isEnabled),y.querySelectorAll(".tile-btn").forEach(B=>{B.classList.remove("selected")});let R=y.querySelector(`[data-tile="${W}"]`);R&&R.classList.add("selected")})(n,h)})});let c=n.getElementById("clearMapEditor");c&&c.addEventListener("click",()=>{confirm("Clear the entire map? This cannot be undone.")&&(function(){let p=V.world.get(),A=M.TILES,h=M.WORLD_WIDTH.get(),y=M.WORLD_HEIGHT.get();for(let W=0;W<h;W++)for(let R=0;R<y;R++)p.setTile(W,R,A.AIR);V.world.set(p),V.plantStructures.set({}),V.growthTimers.set({})})()});let t=n.getElementById("fillMapEditor");t&&t.addEventListener("click",()=>{K.selectedTile&&confirm(`Fill current layer with ${K.selectedTile}?`)&&(function(p){if(!K.selectedTile)return;let A=V.camera.get(),h=V.world.get(),y=M.TILES,W=M.TILE_SIZE.get(),R=y[K.selectedTile],B=M.WORLD_HEIGHT.get(),T=M.WORLD_WIDTH.get(),x=Math.floor(A.x/W),Y=Math.floor(A.y/W),H=Math.min(T,x+Math.ceil(p.width/W)),z=Math.min(B,Y+Math.ceil(p.height/W));for(let j=Math.max(0,x);j<H;j++)for(let ne=Math.max(0,Y);ne<z;ne++)h.setTile(j,ne,R);V.world.set(h)})(n.getElementById("canvas"))});let I=n.getElementById("saveMapAsState");I&&I.addEventListener("click",()=>{(async function(){try{let p=Rt(globalThis);p.state.exploredMap=new D.State({});let A=M.WORLD_WIDTH.get(),h=M.SURFACE_LEVEL.get(),y=M.TILE_SIZE.get();p.state.player={x:A/2*y,y:h*y-50,width:6,height:8,velocityX:0,velocityY:0,speed:3,jumpPower:12,onGround:!1,color:"#FF69B4",lastDirection:0},p.state.gameTime=0,p.state.growthTimers={},p.state.plantStructures={};let W=JSON.stringify(p),R=new Blob([W],{type:"application/json"}),B=URL.createObjectURL(R),T=document.createElement("a");T.href=B,T.download=`sprite-garden-map-${Date.now()}.json`,document.body.append(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(B),console.log("Map saved as game state file"),alert('Map saved successfully! You can load this file using the "Load Game File" button.')}catch(p){console.error("Failed to save map as state:",p),alert("Failed to save map. Check console for details.")}})()});let C=n.getElementById("regenerateMap");C&&C.addEventListener("click",()=>{if(confirm("Regenerated world? This will lose all editor changes.")){let p=Qe(M.BIOMES,M.SURFACE_LEVEL.get(),M.TILE_SIZE.get(),M.TILES,M.WORLD_HEIGHT.get(),M.WORLD_WIDTH.get(),M.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory);V.world.set(p)}})})({doc:r,shadow:e,fogMode:i,viewMode:o})}function On({x:r,y:e,camera:i,tiles:o,tileSize:d,worldHeight:n,worldWidth:l,world:a}){if(!K.isEnabled||!K.selectedTile||typeof i?.get!="function")return!1;let s=i.get();return co({centerX:Math.floor((r+s.x)/d),centerY:Math.floor((e+s.y)/d),tiles:o,worldHeight:n,worldWidth:l,world:a}),!0}function ut({x:r,y:e,isStart:i=!1,camera:o,tiles:d,tileSize:n,worldHeight:l,worldWidth:a,world:s}){if(!K.isEnabled||!K.selectedTile)return!1;i&&(K.isDragging=!0,K.lastPaintedTile=null);let g=o.get(),c=Math.floor((r+g.x)/n),t=Math.floor((e+g.y)/n),I=`${c},${t}`;return K.lastPaintedTile!==I&&(co({centerX:c,centerY:t,tiles:d,worldHeight:l,worldWidth:a,world:s}),K.lastPaintedTile=I),!0}function co({centerX:r,centerY:e,tiles:i,worldHeight:o,worldWidth:d,world:n}){let l=i[K.selectedTile];if(!l)return;let a=n.get(),s=Math.floor(K.brushSize/2),g=!1;for(let c=-s;c<=s;c++)for(let t=-s;t<=s;t++){let I=r+c,C=e+t;if(!(I<0||I>=d||C<0||C>=o)){if(K.brushSize>1&&Math.sqrt(c*c+t*t)>s+.5)continue;a.getTile(I,C)!==l&&(a.setTile(I,C,l),g=!0)}}g&&V.world.set(a)}var Kt,At,zt,Dn,_n,qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Io={exports:{}};Kt=Io,At=qo||globalThis,zt=function r(e){var i=this,o={},d=r;d.getNumberOfInstance=function(){return d._numberOfInstance},i.enable=function(){return o.listenCodeCharSequence(),o.listenCodeGestureSequence(),o.debug&&o.debug("Listener enabled for all."),i},i.enableKeyboardKeys=function(){return o.listenCodeCharSequence(),o.debug&&o.debug("Listener enabled for Keyboard Keys."),i},i.enableTouchGesture=function(){return o.listenCodeGestureSequence(),o.debug&&o.debug("Listener enabled for Touch Gesture."),i},i.disable=function(){return o.stopCodeCharSequence(),o.stopCodeGestureSequence(),o.debug&&o.debug("Listener disabled for all."),i},i.disableKeyboardKeys=function(){return o.stopCodeCharSequence(),o.debug&&o.debug("Listener disabled for Keyboard Keys."),i},i.disableTouchGesture=function(){return o.stopCodeGestureSequence(),o.debug&&o.debug("Listener disabled for Touch Gesture."),i},i.setListener=function(n){return o.stopCodeCharSequence(),o.stopCodeGestureSequence(),o.listener=n||document,o.listenCodeCharSequence(),o.listenCodeGestureSequence(),o.debug&&o.debug("Listener changed.",n),i},i.setCallback=function(n){return o.afterCodeSequenceCallback=typeof n=="function"&&n||o.defaultCallback,o.debug&&o.debug("Callback changed.",n),i},i.setOptions=function(n){return o.initOptions(n),i},o.keptLastCodeChar=function(){o.input.length>o.konamiCodeChar.length&&(o.input=o.input.substr(o.input.length-o.konamiCodeChar.length))},o.defaultCallback=function(){o.debug&&o.debug("Konami Code Sequence Entered. There is no action defined.")},o.checkIfCodeCharIsValid=function(){o.input===o.konamiCodeChar&&o.afterCodeSequenceCallback(i)},o.codeSequenceEventKeyDown=function(n){o.input+=n.keyCode,o.keptLastCodeChar(),o.checkIfCodeCharIsValid()},o.codeSequenceEventTouchMove=function(n){var l;n.touches.length===1&&o.capture===!0&&(l=n.touches[0],o.stopX=l.pageX,o.stopY=l.pageY,o.tap=!1,o.capture=!1,o.checkIfCodeGestureIsValid())},o.codeSequenceEventTouchEnd=function(){o.tap===!0&&o.checkIfCodeGestureIsValid()},o.codeSequenceEventTouchStart=function(n){o.startX=n.changedTouches[0].pageX,o.startY=n.changedTouches[0].pageY,o.tap=!0,o.capture=!0},o.stopCodeCharSequence=function(){o.listener.removeEventListener("keydown",o.codeSequenceEventKeyDown)},o.stopCodeGestureSequence=function(){o.listener.removeEventListener("touchstart",o.codeSequenceEventTouchStart),o.listener.removeEventListener("touchmove",o.codeSequenceEventTouchMove),o.listener.removeEventListener("touchend",o.codeSequenceEventTouchEnd)},o.listenCodeCharSequence=function(){o.stopCodeCharSequence(),o.listener.addEventListener("keydown",o.codeSequenceEventKeyDown)},o.listenCodeGestureSequence=function(){o.originalCodeGesture=o.konamiCodeGesture,o.stopCodeGestureSequence(),o.listener.addEventListener("touchstart",o.codeSequenceEventTouchStart),o.listener.addEventListener("touchmove",o.codeSequenceEventTouchMove),o.listener.addEventListener("touchend",o.codeSequenceEventTouchEnd,!1)},o.checkIfCodeGestureIsValid=function(){var n=Math.abs(o.startX-o.stopX),l=Math.abs(o.startY-o.stopY),a=o.startX-o.stopX<0?"rt":"lt",s=o.startY-o.stopY<0?"dn":"up",g=n>l?a:s;(g=o.tap===!0?"tp":g)===o.konamiCodeGesture.substr(0,2)?o.konamiCodeGesture=o.konamiCodeGesture.substr(2,o.konamiCodeGesture.length-2):o.konamiCodeGesture=o.originalCodeGesture,o.konamiCodeGesture.length===0&&(o.konamiCodeGesture=o.originalCodeGesture,o.afterCodeSequenceCallback(i))},o.checkDebugMode=function(n){n&&n.debug===!0?(o.debug=function(l,a){a!==void 0?console.log(l,a):console.log(l)},o.debug&&o.debug("Debug Mode On.")):o.debug=!1},o.initOptions=function(n){o.checkDebugMode(n),o.listener=n&&n.listener||document,o.afterCodeSequenceCallback=typeof n=="function"&&n||n&&typeof n.callback=="function"&&n.callback||o.defaultCallback},o.init=function(){o.input="",o.konamiCodeChar="38384040373937396665",o.konamiCodeGesture="upupdndnltrtltrttptp",o.startX=0,o.startY=0,o.stopX=0,o.stopY=0,o.tap=!1,o.capture=!1,d._numberOfInstance=d._numberOfInstance?d._numberOfInstance+1:1,o.initOptions(e),o.listenCodeCharSequence(),o.listenCodeGestureSequence()},o.init()},Dn=At.KonamiCode,(_n=At.KonamiCode=zt).noConflict=function(){return At.KonamiCode=Dn,_n},Kt.exports&&(Kt.exports=zt);var $o=Io.exports;function ei({x:r,y:e,radius:i=5,queue:o,worldWidth:d,worldHeight:n}){let l=o.get();for(let a=-i;a<=i;a++)for(let s=-i;s<=i;s++){let g=r+a,c=e+s;g>=0&&g<d&&c>=0&&c<n&&l.add(`${g},${c}`)}}function bt(r,e,i){for(let[o,d]of Object.entries(i.get()))if(d.mature&&d.blocks&&d.blocks.find(n=>n.x===r&&n.y===e))return!0;return!1}function ti({growthTimers:r,plantStructures:e,player:i,tiles:o,tileSize:d,world:n,worldHeight:l,worldWidth:a,mode:s="regular"}){if(K.isEnabled)return void console.log("Breaking disabled in map editor mode");let g=Math.floor((i.x+i.width/2)/d),c=Math.floor((i.y+i.height/2)/d),t=[];if(s==="regular")if(i.lastDirection!==0){let I=i.lastDirection>0?1:-1;for(let C=0;C<3;C++){let p=g+I,A=c-C;if(p<0||p>=a||A<0||A>=l)continue;let h=n.getTile(p,A);h&&h!==o.AIR&&h!==o.BEDROCK&&h!==o.LAVA&&h!==o.WATER&&!bt(p,A,e)&&t.push({x:p,y:A,tile:h,priority:C})}}else{let I=g,C=c+1;if(I>=0&&I<a&&C>=0&&C<l){let p=n.getTile(I,C);p&&p!==o.AIR&&p!==o.BEDROCK&&p!==o.LAVA&&p!==o.WATER&&!bt(I,C,e)&&t.push({x:I,y:C,tile:p,priority:1})}}else if(i.lastDirection!==0)for(let C=-1;C<=1;C++)for(let p=-1;p<=1;p++){let A=g+C*(i.lastDirection,1),h=c+p;if(A<0||A>=a||h<0||h>=l)continue;let y=n.getTile(A,h);if(y&&y!==o.AIR&&y!==o.BEDROCK&&y!==o.LAVA&&y!==o.WATER&&!bt(A,h,e)){let W=Math.abs(C)===0?1:2-Math.abs(C)/1;t.push({x:A,y:h,tile:y,priority:W})}}else for(let C=-1;C<=1;C++)for(let p=-1;p<=1;p++){let A=g+C,h=c+p;if(A<0||A>=a||h<0||h>=l)continue;let y=n.getTile(A,h);y&&y!==o.AIR&&y!==o.BEDROCK&&y!==o.LAVA&&y!==o.WATER&&!bt(A,h,e)&&t.push({x:A,y:h,tile:y,priority:1})}if(t.length>0){let I=r.get(),C=e.get(),p=U({},I),A=U({},C),h={},y={};t.forEach(W=>{let R=!1,B=null;for(let[T,x]of Object.entries(C)){if(!x.mature&&x.blocks){for(let Y of x.blocks)if(Y.x===W.x&&Y.y===W.y){R=!0,B=T;break}}if(R)break}if(R&&B){let T=C[B];T.blocks&&T.blocks.forEach(x=>{x.x>=0&&x.x<a&&x.y>=0&&x.y<l&&n.setTile(x.x,x.y,o.AIR)}),T.seedType&&Math.random()<.5&&(h[T.seedType]=(h[T.seedType]||0)+1),delete A[B],delete p[B]}else{if(n.setTile(W.x,W.y,o.AIR),delete p[`${W.x},${W.y}`],(function(x,Y){return x===Y.TREE_TRUNK||x===Y.TREE_LEAVES})(W.tile,o)&&Math.random()<.15&&(h.WALNUT=(h.WALNUT||0)+1),W.tile.crop&&Math.random()<.3){let x=pn(o)[W.tile.id];x&&(h[x]=(h[x]||0)+1)}let T=(function(x,Y){return x?.drops??Object.fromEntries(Object.entries(Y).map(([H,z])=>[z.id,H]))[x.id]})(W.tile,o);T&&(W.tile===o.TREE_LEAVES&&Math.random()<.3||W.tile!==o.TREE_LEAVES)&&(y[T]=(y[T]||0)+1)}}),r.set(p),e.set(A),Object.keys(h).length>0&&We("seedInventory",W=>{let R=U({},W);return Object.entries(h).forEach(([B,T])=>{R[B]+=T}),R}),Object.keys(y).length>0&&We("materialsInventory",W=>{let R=U({},W);return Object.entries(y).forEach(([B,T])=>{R[B]=(R[B]||0)+T}),R})}}function Co({growthTimers:r,plantStructures:e,player:i,tiles:o,tileSize:d,world:n,worldHeight:l,worldWidth:a,mode:s="regular",queue:g}){let c=i.get(),t=n.get(),I=Math.floor((c.x+c.width/2)/d),C=Math.floor((c.y+c.height/2)/d),p=ti({growthTimers:r,plantStructures:e,player:c,tiles:o,tileSize:d,world:t,worldHeight:l,worldWidth:a,mode:s});for(let A=-3;A<=3;A++)for(let h=-3;h<=3;h++){let y=I+A,W=C+h;y>=0&&y<a&&W>=0&&W<l&&t.getTile(y,W)===o.WATER&&ei({x:y,y:W,radius:10,queue:g,worldWidth:a,worldHeight:l})}return p}function ni({cropTile:r,tiles:e,world:i,x:o,y:d}){let n=pn(e)[r.id];if(n){let l=2+Math.floor(3*Math.random());We("seedInventory",a=>ee(U({},a),{[n]:a[n]+l})),i.setTile(o,d,e.AIR),console.log(`Harvested simple ${n} crop, gained ${l} seeds`)}}function oi({growthTimers:r,plantStructures:e,seedInventory:i,seedType:o,tiles:d,world:n,x:l,y:a}){let s=n.getTile(l,a+1);if(!s||!s.farmable)return void console.log(`Cannot plant at (${l}, ${a}) - no farmable ground below`);let g={AGAVE:d.AGAVE_GROWING,BAMBOO:d.BAMBOO_GROWING,BERRY_BUSH:d.BERRY_BUSH_GROWING,BIRCH:d.BIRCH_GROWING,CACTUS:d.CACTUS_GROWING,CARROT:d.CARROT_GROWING,CORN:d.CORN_GROWING,FERN:d.FERN_GROWING,KELP:d.KELP_GROWING,LAVENDER:d.LAVENDER_GROWING,LOTUS:d.LOTUS_GROWING,MUSHROOM:d.MUSHROOM_GROWING,PINE_TREE:d.PINE_TREE_GROWING,PUMPKIN:d.PUMPKIN_GROWING,ROSE:d.ROSE_GROWING,SUNFLOWER:d.SUNFLOWER_GROWING,TULIP:d.TULIP_GROWING,WALNUT:d.TREE_GROWING,WHEAT:d.WHEAT_GROWING,WILLOW_TREE:d.WILLOW_TREE_GROWING};if(g[o]&&i[o]>0){n.setTile(l,a,g[o]),We("seedInventory",t=>ee(U({},t),{[o]:t[o]-1}));let c=`${l},${a}`;r.set(ee(U({},r.get()),{[c]:{timeLeft:d[o].growthTime,seedType:o}})),e.set(ee(U({},e.get()),{[c]:{seedType:o,mature:!1,blocks:[{x:l,y:a,tile:g[o]}],baseX:l,baseY:a}})),console.log(`Planted ${o} at (${l}, ${a}), ${i[o]-1} seeds remaining`)}else console.log(`Cannot plant ${o} - no seeds available or invalid seed type`)}function ii({growthTimers:r,plantStructures:e,structure:i,structureKey:o,tileName:d,tiles:n,world:l,worldHeight:a,worldWidth:s}){if(i.blocks&&i.blocks.forEach(t=>{t.x>=0&&t.x<s&&t.y>=0&&t.y<a&&l.setTile(t.x,t.y,n.AIR)}),i.seedType){let t=1+Math.floor(3*Math.random());We("seedInventory",h=>ee(U({},h),{[i.seedType]:h[i.seedType]+t})),console.log(`Harvested mature ${i.seedType}, gained ${t} seeds`);let I="WOOD",C=n[i.seedType].drops,p=Array.isArray(C)?C.some(h=>h.toLowerCase().includes(h.toLowerCase())):C.toLowerCase().includes(I.toLowerCase()),A=p?1+Math.floor(3*Math.random()):0;A&&(We("materialsInventory",h=>ee(U({},h),{[I]:h[I]+A})),console.log(`Gained ${A} ${I.toLowerCase()}`))}let g=U({},e.get()),c=U({},r.get());delete g[o],delete c[o],e.set(g),r.set(c)}function uo({growthTimers:r,plantStructures:e,player:i,seedInventory:o,selectedSeedType:d,tileName:n,tiles:l,tileSize:a,world:s,worldHeight:g,worldWidth:c}){let t=Math.floor((i.x+i.width/2)/a),I=Math.floor((i.y+i.height/2)/a),C=[];if(i.lastDirection!==0){let p=i.lastDirection>0?1:-1;C.push({x:t+p,y:I}),C.push({x:t+p,y:I+1})}C.push({x:t,y:I+1}),C.push({x:t,y:I});for(let p of C){let{x:A,y:h}=p;if(A<0||A>=c||h<0||h>=g)continue;let y=s.getTile(A,h),W=null,R=null,B=e.get();for(let[T,x]of Object.entries(B))if(x.mature&&x.blocks&&x.blocks.find(Y=>Y.x===A&&Y.y===h)){W=x,R=T;break}if(W&&R)return void ii({growthTimers:r,plantStructures:e,structure:W,structureKey:R,tileName:n,tiles:l,world:s,worldHeight:g,worldWidth:c});if(y&&y.crop)return void ni({cropTile:y,tiles:l,world:s,x:A,y:h});if(y===l.AIR&&d&&o[d]>0)return void oi({growthTimers:r,plantStructures:e,seedInventory:o,seedType:d,tiles:l,world:s,x:A,y:h})}}function Ao(r,e){let i=(d,n)=>{if(!d)return null;if(d.tagName===n.toUpperCase()&&d.shadowRoot)return d;let l=[...d.children||[]];return d.shadowRoot&&l.push(d.shadowRoot),l.map(a=>i(a,n)).find(Boolean)||null},o=i(r,e);return o?o.shadowRoot:null}async function bo(r){let e=await Q.getItem("sprite-garden-range")||1;r.querySelector('[data-key="k"].middle').innerHTML=`&times;${Number(e)}`}async function cn({key:r,materialsInventory:e,player:i,selectedMaterialType:o,tiles:d,tileSize:n,world:l,worldHeight:a,worldWidth:s}){let g=Math.floor((i.x+i.width/2)/n),c=Math.floor((i.y+i.height/2)/n),t,I,C=await Q.getItem("sprite-garden-range")||1;switch(r.toLowerCase()){case"k":return void await(async function(h){let y=Number(await Q.getItem("sprite-garden-range")||1),W=Number(y+1);y>=3&&(W=1),await Q.setItem("sprite-garden-range",W),await bo(h)})(Ao(globalThis.document,"sprite-garden"));case"u":C===1&&(t=g-C,I=c-C),C===2&&(t=g-1,I=c-C),C===3&&(t=g-1,I=c-C);break;case"i":C===1&&(t=g,I=c-C),C===2&&(t=g,I=c-C),C===3&&(t=g,I=c-C);break;case"o":C===1&&(t=g+C,I=c-C),C===2&&(t=g+1,I=c-C),C===3&&(t=g+1,I=c-C);break;case"j":C===1&&(t=g-C,I=c),C===2&&(t=g-C,I=c),C===3&&(t=g-C,I=c);break;case"l":C===1&&(t=g+C,I=c),C===2&&(t=g+C,I=c),C===3&&(t=g+C,I=c);break;case"m":C===1&&(t=g-C,I=c+C),C===2&&(t=g-1,I=c+C),C===3&&(t=g-1,I=c+C);break;case",":C===1&&(t=g,I=c+C),C===2&&(t=g,I=c+C),C===3&&(t=g,I=c+C);break;case".":C===1&&(t=g+C,I=c+C),C===2&&(t=g+1,I=c+C),C===3&&(t=g+1,I=c+C);break;default:return void console.log(`Invalid placement key: ${r}`)}if(!o)return void console.log("No material selected for placement");if(e[o]<=0)return void console.log(`No ${o} available to place`);if(t<0||t>=s||I<0||I>=a)return void console.log(`Cannot place block outside world bounds at (${t}, ${I})`);let p=l.getTile(t,I);if(p&&p!==d.AIR&&p.solid)return void console.log(`Cannot place block at (${t}, ${I}) - position occupied`);let A=(function(h,y){return y[h]||null})(o,d);A?(l.setTile(t,I,A),We("materialsInventory",h=>ee(U({},h),{[o]:h[o]-1})),console.log(`Placed ${o} at (${t}, ${I}), ${e[o]-1} remaining`)):console.log(`Invalid material type: ${o}`)}function mo(){let r=M.breakMode.get();M.breakMode.set(r==="regular"?"extra":"regular")}async function ho(r){let e=await Q.getItem("sprite-garden-movement-scale");e||(e=1,await Q.setItem("sprite-garden-movement-scale",e)),r.querySelector('[data-key="x"].middle').innerHTML=`&times;${Number(e)}`}async function dn(r){let e=Number(Number(await Q.getItem("sprite-garden-movement-scale"))||1),i=Number(Number(e.toFixed(2))+.125);i>1&&(i=Number(i.toFixed(1))),i>1&&(i=.5),await Q.setItem("sprite-garden-movement-scale",i),await ho(r)}var In=class{constructor(e,i){this.doc=e,this.shadow=i,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let i=`${e}-content`,o=this.shadow.querySelector(`.${i}`);if(!o){o=this.doc.createElement("dialog"),o.setAttribute("class",i);let d=new DOMParser,n=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFib3V0PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkFib3V0IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJhYm91dCI+CiAgICA8ZGl2IGNsYXNzPSJhYm91dC1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iYWJvdXQtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBoaWRkZW49ImhpZGRlbiIgY2xhc3M9ImFib3V0LWNvbnRlbnRfY2xvc2UtYnRuIj4mdGltZXM7PC9idXR0b24+CiAgICAgIDwvaGVhZGVyPgoKICAgICAgPGgyPgogICAgICAgIDxhCiAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL2Fib3V0LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPkFib3V0PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD4KICAgICAgICAgIFNwcml0ZSBHYXJkZW4gaXMgYSAyRCBzYW5kYm94IGV4cGxvcmF0aW9uIGFuZCBmYXJtaW5nIGdhbWUgdGhhdCBydW5zCiAgICAgICAgICBlbnRpcmVseSBpbiB5b3VyIHdlYiBicm93c2VyLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLAogICAgICAgICAgZGlzY292ZXIgZGlmZmVyZW50IGJpb21lcywgbWluZSByZXNvdXJjZXMsIGFuZCBjdWx0aXZhdGUgYSB2YXJpZXR5IG9mCiAgICAgICAgICBjcm9wcy4KICAgICAgICA8L3A+CiAgICAgICAgPGEKICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgPgogICAgICAgICAgPGltZwogICAgICAgICAgICBzcmM9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vYXNzZXRzL3Nwcml0ZS1nYXJkZW4tdGltZS1sYXBzZS5naWYiCiAgICAgICAgICAgIGRlc2M9IkEgdGltZSBsYXBzZSBvZiBhIGdhcmRlbiBpbiBTcHJpdGUgR2FyZGVuIgogICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIFRpbWUgTGFwc2UiCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+RmVhdHVyZXM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Qcm9jZWR1cmFsIFdvcmxkIEdlbmVyYXRpb248L3N0cm9uZz4gLSBFYWNoIHdvcmxkIGlzIHVuaXF1ZSwKICAgICAgICAgICAgZ2VuZXJhdGVkIGZyb20gYSBzaGFyZWFibGUgc2VlZAogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5NdWx0aXBsZSBCaW9tZXM8L3N0cm9uZz4gLSBFeHBsb3JlIGZvcmVzdHMsIGRlc2VydHMsCiAgICAgICAgICAgIHR1bmRyYXMsIGFuZCBzd2FtcHMsIGVhY2ggd2l0aCB1bmlxdWUgY2hhcmFjdGVyaXN0aWNzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkZhcm1pbmcgU3lzdGVtPC9zdHJvbmc+IC0gUGxhbnQgYW5kIGhhcnZlc3QgZGlmZmVyZW50IGNyb3AKICAgICAgICAgICAgdHlwZXMgd2l0aCByZWFsaXN0aWMgZ3Jvd3RoIGN5Y2xlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5SZXNvdXJjZSBNaW5pbmc8L3N0cm9uZz4gLSBEaWcgZm9yIHZhbHVhYmxlIHJlc291cmNlcyBsaWtlCiAgICAgICAgICAgIGNvYWwsIGlyb24sIGFuZCBnb2xkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkNhdmUgU3lzdGVtczwvc3Ryb25nPiAtIERpc2NvdmVyIHVuZGVyZ3JvdW5kIGNhdmVzIGZpbGxlZAogICAgICAgICAgICB3aXRoIHJlc291cmNlcyBhbmQgY2hhbGxlbmdlcwogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5CdWlsZGluZzwvc3Ryb25nPiAtIFVzZSBjb2xsZWN0ZWQgbWF0ZXJpYWxzIHRvIHBsYWNlIGJsb2NrcwogICAgICAgICAgICBhbmQgc2hhcGUgdGhlIHdvcmxkCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPlNhdmUgJmFtcDsgTG9hZDwvc3Ryb25nPiAtIFlvdXIgcHJvZ3Jlc3MgY2FuIGJlIHNhdmVkIG9uCiAgICAgICAgICAgIGRldmljZSBvciBhcyBhIGZpbGUgdG8gc2hhcmUKICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+UHJpdmFjeSBieSBEZXNpZ248L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyA8c3Ryb25nPnByaXZhdGUgYnkgZGVzaWduPC9zdHJvbmc+LiBBbGwgZ2FtZSBkYXRhIGlzCiAgICAgICAgICBwcm9jZXNzZWQgYW5kIHN0b3JlZCBsb2NhbGx5IG9uIHlvdXIgZGV2aWNlLiBObyBwZXJzb25hbCBpbmZvcm1hdGlvbgogICAgICAgICAgaXMgY29sbGVjdGVkLCB0cmFuc21pdHRlZCwgb3Igc3RvcmVkIG9uIGV4dGVybmFsIHNlcnZlcnMuIFlvdXIgZ2FtZQogICAgICAgICAgd29ybGRzLCBwcm9ncmVzcywgYW5kIHByZWZlcmVuY2VzIG5ldmVyIGxlYXZlIHlvdXIgZGV2aWNlLCB1bmxlc3MKICAgICAgICAgIHNoYXJlZCBieSB5b3UuCiAgICAgICAgPC9wPgogICAgICAgIDxwPgogICAgICAgICAgUmVhZCBtb3JlIGFib3V0IHRoZQogICAgICAgICAgPGEKICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gUHJpdmFjeSBQb2xpY3k8L2EKICAgICAgICAgID4uCiAgICAgICAgPC9wPgogICAgICAgIDxoMz5Db250cm9sczwvaDM+CiAgICAgICAgPHVsIGNsYXNzPSJhYm91dC1jb250cm9scyI+CiAgICAgICAgICA8bGk+PHN0cm9uZz5Nb3ZlbWVudDo8L3N0cm9uZz4gVy9BL1MvRCBvciBBcnJvdyBLZXlzPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkp1bXA6PC9zdHJvbmc+IFcsIOKGkSwgb3IgU3BhY2U8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+UGxhbnQvSGFydmVzdDo8L3N0cm9uZz4gRjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5CcmVhayBCbG9jazo8L3N0cm9uZz4gUjwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgQnJlYWsgTW9kZTo8L3N0cm9uZz4gRTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5DaGFuZ2UgTW92ZW1lbnQgU2NhbGU6PC9zdHJvbmc+IFg8L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+Q2hhbmdlIEJsb2NrIFJhbmdlOjwvc3Ryb25nPiBLPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPlBsYWNlIEJsb2NrOjwvc3Ryb25nPiBVL0kvTy9KL0wvTS8sLy48L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+V29ybGQgU3RhdGUgTWVudTo8L3N0cm9uZz4gQ3RybCtTPC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkluc3BlY3QgVGlsZXM6PC9zdHJvbmc+IE1vdXNlIGhvdmVyPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5UYXAgdGhlIGJvdHRvbSBjb3JuZXIgcGFuZWwgZm9yIG1vYmlsZSBjb250cm9scy48L3N0cm9uZz4KICAgICAgICAgIDwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi8iCiAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICA+CiAgICAgICAgICA8aW1nCiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9hc3NldHMvc3ByaXRlLWdhcmRlbi1hbmltYXRpb24uZ2lmIgogICAgICAgICAgICBkZXNjPSJBbiBhbmltYXRpb24gb2YgU3ByaXRlIEdhcmRlbiBnYW1lcGxheSIKICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHYW1lcGxheSBBbmltYXRpb24iCiAgICAgICAgICAvPgogICAgICAgIDwvYT4KICAgICAgICA8aDM+VGlwcyBmb3IgTmV3IFBsYXllcnM8L2gzPgogICAgICAgIDx1bD4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgU3RhcnQgYnkgZXhwbG9yaW5nIHlvdXIgaW1tZWRpYXRlIHN1cnJvdW5kaW5ncyB0byB1bmRlcnN0YW5kIHRoZQogICAgICAgICAgICBiaW9tZQogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT5IYXJ2ZXN0IG5hdHVyYWwgY3JvcHMgdG8gYnVpbGQgdXAgeW91ciBzZWVkIGludmVudG9yeTwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIExvb2sgZm9yIGZhcm1hYmxlIGdyb3VuZCAoZGlydCwgZ3Jhc3MsIGNsYXksIHNhbmQpIHRvIHBsYW50IHNlZWRzCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBEaWZmZXJlbnQgY3JvcHMgZ3JvdyBhdCBkaWZmZXJlbnQgcmF0ZXMgLSBtdXNocm9vbXMgYXJlIGZhc3Rlc3QsCiAgICAgICAgICAgIHRyZWVzIGFyZSBzbG93ZXN0CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICBNaW5lIHJlc291cmNlcyBieSBicmVha2luZyBibG9ja3MgKFIga2V5KSAtIHlvdSdsbCBjb2xsZWN0IG1hdGVyaWFscwogICAgICAgICAgICBhdXRvbWF0aWNhbGx5CiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPkZvZyBjbGVhcnMgYXMgZXhwbG9yYXRpb24gcHJvZ3Jlc3NlczwvbGk+CiAgICAgICAgICA8bGk+U2F2ZSB5b3VyIGdhbWUgZnJlcXVlbnRseSB1c2luZyB0aGUgV29ybGQgU3RhdGUgbWVudSAoQ3RybCtTKTwvbGk+CiAgICAgICAgICA8bGk+U2hhcmUgaW50ZXJlc3Rpbmcgd29ybGQgc2VlZHMgd2l0aCBmcmllbmRzITwvbGk+CiAgICAgICAgPC91bD4KICAgICAgICA8aDM+T3BlbiBTb3VyY2U8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgU3ByaXRlIEdhcmRlbiBpcyBvcGVuIHNvdXJjZSBzb2Z0d2FyZS4gVmlzaXQKICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+dGhlIHByb2plY3QgcmVwb3NpdG9yeTwvYQogICAgICAgICAgPgogICAgICAgICAgdG8gdmlldyB0aGUgY29kZSwgcmVwb3J0IGlzc3Vlcywgb3IgdG8gY29udHJpYnV0ZS4KICAgICAgICA8L3A+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==")).text(),l=d.parseFromString(n,"text/html").querySelector(`.${i}`);o.innerHTML=l.innerHTML,this.shadow.append(o),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=o,this.initEventListeners(),o}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".about-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".about-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog.close()}},Cn=class{constructor(e,i){this.doc=e,this.shadow=i,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e,i){this.dialog&&this.dialog.remove();let o=`${e}-content`,d=this.shadow.querySelector(`.${o}`);if(!d){d=this.doc.createElement("dialog"),d.setAttribute("class",o);let n=new DOMParser,l=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIEFQSSAtIEV4YW1wbGVzPC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IkV4YW1wbGVzIC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJleGFtcGxlcyI+CiAgICA8ZGl2IGNsYXNzPSJleGFtcGxlcy1jb250ZW50Ij4KICAgICAgPGhlYWRlciBjbGFzcz0iZXhhbXBsZXMtY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBoaWRkZW49ImhpZGRlbiIgY2xhc3M9ImV4YW1wbGVzLWNvbnRlbnRfY2xvc2UtYnRuIj4KICAgICAgICAgICZ0aW1lczsKICAgICAgICA8L2J1dHRvbj4KICAgICAgPC9oZWFkZXI+CgogICAgICA8aDI+CiAgICAgICAgPGEKICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy8iCiAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgID5BUEkgLSBFeGFtcGxlczwvYQogICAgICAgID4KICAgICAgPC9oMj4KCiAgICAgIDxoMyBpZD0iRnVsbHNjcmVlbiI+CiAgICAgICAgRnVsbHNjcmVlbiAtIFNldCBmdWxsc2NyZWVuIGFuZCByZXZlYWwgb3B0aW9ucyBpbiBzZXR0aW5ncy4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+RnVsbHNjcmVlbi5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gRnVsbHNjcmVlbiAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBGdWxsc2NyZWVuIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0Z1bGxzY3JlZW4ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBGdWxsc2NyZWVuIC0gQm9va21hcmtsZXQ8L3NwYW4+PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICA8L3VsPgogICAgICA8aDMgaWQ9IkZpcmV3b3JrcyI+RmlyZXdvcmtzIC0gUGFydGljbGUgc3lzdGVtcyBhbmQgY29sb3IgdHJhaWxzLjwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0ZpcmV3b3Jrcy5tanMiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5GaXJld29ya3MubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gRmlyZXdvcmtzIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIEZpcmV3b3JrcyAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9GaXJld29ya3MubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBGaXJld29ya3MgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iR29sZCI+R29sZCAtIEF1dG9tYXRlIGRpZ2dpbmcgZm9yIGdvbGQuPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+R29sZC5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gR29sZCAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHb2xkIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0dvbGQubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBHb2xkIC0gQm9va21hcmtsZXQ8L3NwYW4+PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICA8L3VsPgogICAgICA8aDMgaWQ9IkdPTCI+R09MIC0gQ29ud2F5J3MgR2FtZSBvZiBMaWZlIHVzaW5nIHNwcml0ZSBlbnRpdGllcy48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvR09MLm1qcyIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlNvdXJjZTwvYQogICAgICAgICAgICA+OgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9HT0wubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+R09MLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvR09MLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+U3ByaXRlIEdhcmRlbiAtIEdPTCAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBHT0wgLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvR09MLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gR09MIC0gQm9va21hcmtsZXQ8L3NwYW4+PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICA8L3VsPgogICAgICA8aDMgaWQ9IlBob3RvIj4KICAgICAgICBQaG90byAtIERyYXdzIGludGVycHJldGVkIGJpdG1hcCBiYXNlZCBvbiBTcHJpdGUgR2FyZGVuIHRpbGVzLgogICAgICA8L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1Bob3RvLm1qcyIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPlBob3RvLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gUGhvdG8gLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvUGhvdG8ubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBQaG90byAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJIZWFydCI+SGVhcnQgLSBEcmF3cyBkeW5hbWljYWxseSBhbmltYXRlZCBoZWFydCBwYXR0ZXJucy48L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL0hlYXJ0Lm1qcyIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPkhlYXJ0Lm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gSGVhcnQgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gSGVhcnQgLSBCb29rbWFya2xldCIKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvSGVhcnQubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBIZWFydCAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJLb25hbWlDb2RlIj4KICAgICAgICBLb25hbWkgQ29kZSAtIFNob3dzIGhhbmRsaW5nIG9mIGtleWJvYXJkIHNlcXVlbmNlcyBhbmQgaGlkZGVuCiAgICAgICAgaW50ZXJhY3Rpb25zLgogICAgICA8L2gzPgogICAgICA8dWw+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2toZXJyaWNrL3Nwcml0ZS1nYXJkZW4vdHJlZS9tYWluL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Lb25hbWlDb2RlLm1qczwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJqYXZhc2NyaXB0OnZhciBlbD0oZnVuY3Rpb24gZihlLG4pe3JldHVybiFlP251bGw6ZS50YWdOYW1lPT09bi50b1VwcGVyQ2FzZSgpJiZlLnNoYWRvd1Jvb3Q/ZTpbLi4uKGUuY2hpbGRyZW58fFtdKSwuLi4oZS5zaGFkb3dSb290P1tlLnNoYWRvd1Jvb3RdOltdKV0ubWFwKGM9PmYoYyxuKSkuZmluZChCb29sZWFuKXx8bnVsbH0pKGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keSwlMjJzcHJpdGUtZ2FyZGVuJTIyKT8uc2hhZG93Um9vdDtlbC5xdWVyeVNlbGVjdG9yKCUyMmRpYWxvZy5leGFtcGxlcy1jb250ZW50JTIyKT8uY2xvc2UoKTtpZighZWwuZ2V0RWxlbWVudEJ5SWQoJTIybWFwRWRpdG9yQ29udHJvbHMlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5nZXRFbGVtZW50QnlJZCglMjJ0b2dnbGVNYXBFZGl0b3IlMjIpPy5jbGljaygpO2lmKCFlbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1jb250YWluZXIlMjIpPy5oYXNBdHRyaWJ1dGUoJTIyaGlkZGVuJTIyKSllbC5xdWVyeVNlbGVjdG9yKCUyMiNzZXR0aW5ncyAudWktZ3JpZF9fY29ybmVyLS1oZWFkaW5nJTIyKT8uY2xpY2soKTt2YXIgZTsoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCUyMnNjcmlwdCUyMikpLnNldEF0dHJpYnV0ZSglMjJ0eXBlJTIyLCUyMm1vZHVsZSUyMiksZS5pbm5lckhUTUw9JTIyKGF3YWl0IGltcG9ydCglMjdodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvS29uYW1pQ29kZS5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBLb25hbWkgQ29kZSAtIEJvb2ttYXJrbGV0PC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICAgIDxwIGNsYXNzPSJib29rbWFya2xldCI+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgdGl0bGU9IlNwcml0ZSBHYXJkZW4gLSBLb25hbWkgQ29kZSAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9Lb25hbWlDb2RlLm1qcyUyNykpLmRlbW8oKSUyMixkb2N1bWVudC5ib2R5LmFwcGVuZChlKTsiCiAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyIKICAgICAgICAgICAgICA+PHN2ZwogICAgICAgICAgICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICAgICAgICAgICAgaGVpZ2h0PSIyNHB4IgogICAgICAgICAgICAgICAgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiCiAgICAgICAgICAgICAgICB3aWR0aD0iMjRweCIKICAgICAgICAgICAgICAgIGZpbGw9IiNhYWEiCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIwMC0xMjB2LTY0MHEwLTMzIDIzLjUtNTYuNVQyODAtODQwaDQwMHEzMyAwIDU2LjUgMjMuNVQ3NjAtNzYwdjY0MEw0ODAtMjQwIDIwMC0xMjBabTgwLTEyMiAyMDAtODYgMjAwIDg2di01MThIMjgwdjUxOFptMC01MThoNDAwLTQwMFoiCiAgICAgICAgICAgICAgICAvPjwvc3ZnCiAgICAgICAgICAgICAgPjxzcGFuIGhpZGRlbj5TcHJpdGUgR2FyZGVuIC0gS29uYW1pIENvZGUgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICAgIDxoMyBpZD0iTWVzc2FnaW5nIj4KICAgICAgICBNZXNzYWdpbmcgLSBEcmF3IHRleHQgb24gdGhlIG1hcCBmaWxsZWQgd2l0aCB3YXRlci4KICAgICAgPC9oMz4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9raGVycmljay9zcHJpdGUtZ2FyZGVuL3RyZWUvbWFpbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5Tb3VyY2U8L2EKICAgICAgICAgICAgPjoKICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2toZXJyaWNrLmdpdGh1Yi5pby9zcHJpdGUtZ2FyZGVuL3NyYy9hcGkvZXhhbXBsZXMvTWVzc2FnaW5nLm1qcyIKICAgICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgICAgdGFyZ2V0PSJfYmxhbmsiCiAgICAgICAgICAgICAgPk1lc3NhZ2luZy5tanM8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgICAgPGxpPgogICAgICAgICAgPHA+CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPlNwcml0ZSBHYXJkZW4gLSBNZXNzYWdpbmcgLSBCb29rbWFya2xldDwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0iYm9va21hcmtsZXQiPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIHRpdGxlPSJTcHJpdGUgR2FyZGVuIC0gTWVzc2FnaW5nIC0gQm9va21hcmtsZXQiCiAgICAgICAgICAgICAgaHJlZj0iamF2YXNjcmlwdDp2YXIgZWw9KGZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hZT9udWxsOmUudGFnTmFtZT09PW4udG9VcHBlckNhc2UoKSYmZS5zaGFkb3dSb290P2U6Wy4uLihlLmNoaWxkcmVufHxbXSksLi4uKGUuc2hhZG93Um9vdD9bZS5zaGFkb3dSb290XTpbXSldLm1hcChjPT5mKGMsbikpLmZpbmQoQm9vbGVhbil8fG51bGx9KShnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHksJTIyc3ByaXRlLWdhcmRlbiUyMik/LnNoYWRvd1Jvb3Q7ZWwucXVlcnlTZWxlY3RvciglMjJkaWFsb2cuZXhhbXBsZXMtY29udGVudCUyMik/LmNsb3NlKCk7aWYoIWVsLmdldEVsZW1lbnRCeUlkKCUyMm1hcEVkaXRvckNvbnRyb2xzJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwuZ2V0RWxlbWVudEJ5SWQoJTIydG9nZ2xlTWFwRWRpdG9yJTIyKT8uY2xpY2soKTtpZighZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0tY29udGFpbmVyJTIyKT8uaGFzQXR0cmlidXRlKCUyMmhpZGRlbiUyMikpZWwucXVlcnlTZWxlY3RvciglMjIjc2V0dGluZ3MgLnVpLWdyaWRfX2Nvcm5lci0taGVhZGluZyUyMik/LmNsaWNrKCk7dmFyIGU7KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCglMjJzY3JpcHQlMjIpKS5zZXRBdHRyaWJ1dGUoJTIydHlwZSUyMiwlMjJtb2R1bGUlMjIpLGUuaW5uZXJIVE1MPSUyMihhd2FpdCBpbXBvcnQoJTI3aHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL01lc3NhZ2luZy5tanMlMjcpKS5kZW1vKCklMjIsZG9jdW1lbnQuYm9keS5hcHBlbmQoZSk7IgogICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciCiAgICAgICAgICAgICAgPjxzdmcKICAgICAgICAgICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgICAgICAgICAgIGhlaWdodD0iMjRweCIKICAgICAgICAgICAgICAgIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIgogICAgICAgICAgICAgICAgd2lkdGg9IjI0cHgiCiAgICAgICAgICAgICAgICBmaWxsPSIjYWFhIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgIGQ9Ik0yMDAtMTIwdi02NDBxMC0zMyAyMy41LTU2LjVUMjgwLTg0MGg0MDBxMzMgMCA1Ni41IDIzLjVUNzYwLTc2MHY2NDBMNDgwLTI0MCAyMDAtMTIwWm04MC0xMjIgMjAwLTg2IDIwMCA4NnYtNTE4SDI4MHY1MThabTAtNTE4aDQwMC00MDBaIgogICAgICAgICAgICAgICAgLz48L3N2ZwogICAgICAgICAgICAgID48c3BhbiBoaWRkZW4+U3ByaXRlIEdhcmRlbiAtIE1lc3NhZ2luZyAtIEJvb2ttYXJrbGV0PC9zcGFuPjwvYQogICAgICAgICAgICA+CiAgICAgICAgICA8L3A+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgICAgPGgzIGlkPSJRUkNvZGUiPlFSQ29kZSAtIEFkZCBhIFFSQ29kZSB0byB0aGUgbWFwLjwvaDM+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8cD4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICBocmVmPSJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi90cmVlL21haW4vc3JjL2FwaS9leGFtcGxlcy9RUkNvZGUubWpzIgogICAgICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgICAgICB0YXJnZXQ9Il9ibGFuayIKICAgICAgICAgICAgICA+U291cmNlPC9hCiAgICAgICAgICAgID46CiAgICAgICAgICAgIDxhCiAgICAgICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9zcmMvYXBpL2V4YW1wbGVzL1FSQ29kZS5tanMiCiAgICAgICAgICAgICAgcmVsPSJub29wZW5lciBub3JlZmVycmVyIgogICAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICAgID5RUkNvZGUubWpzPC9hCiAgICAgICAgICAgID4KICAgICAgICAgIDwvcD4KICAgICAgICA8L2xpPgogICAgICAgIDxsaT4KICAgICAgICAgIDxwPgogICAgICAgICAgICA8YQogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9RUkNvZGUubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID5TcHJpdGUgR2FyZGVuIC0gUVJDb2RlIC0gQm9va21hcmtsZXQ8L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgICAgPHAgY2xhc3M9ImJvb2ttYXJrbGV0Ij4KICAgICAgICAgICAgPGEKICAgICAgICAgICAgICB0aXRsZT0iU3ByaXRlIEdhcmRlbiAtIFFSQ29kZSAtIEJvb2ttYXJrbGV0IgogICAgICAgICAgICAgIGhyZWY9ImphdmFzY3JpcHQ6dmFyIGVsPShmdW5jdGlvbiBmKGUsbil7cmV0dXJuIWU/bnVsbDplLnRhZ05hbWU9PT1uLnRvVXBwZXJDYXNlKCkmJmUuc2hhZG93Um9vdD9lOlsuLi4oZS5jaGlsZHJlbnx8W10pLC4uLihlLnNoYWRvd1Jvb3Q/W2Uuc2hhZG93Um9vdF06W10pXS5tYXAoYz0+ZihjLG4pKS5maW5kKEJvb2xlYW4pfHxudWxsfSkoZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LCUyMnNwcml0ZS1nYXJkZW4lMjIpPy5zaGFkb3dSb290O2VsLnF1ZXJ5U2VsZWN0b3IoJTIyZGlhbG9nLmV4YW1wbGVzLWNvbnRlbnQlMjIpPy5jbG9zZSgpO2lmKCFlbC5nZXRFbGVtZW50QnlJZCglMjJtYXBFZGl0b3JDb250cm9scyUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLmdldEVsZW1lbnRCeUlkKCUyMnRvZ2dsZU1hcEVkaXRvciUyMik/LmNsaWNrKCk7aWYoIWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWNvbnRhaW5lciUyMik/Lmhhc0F0dHJpYnV0ZSglMjJoaWRkZW4lMjIpKWVsLnF1ZXJ5U2VsZWN0b3IoJTIyI3NldHRpbmdzIC51aS1ncmlkX19jb3JuZXItLWhlYWRpbmclMjIpPy5jbGljaygpO3ZhciBlOyhlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJTIyc2NyaXB0JTIyKSkuc2V0QXR0cmlidXRlKCUyMnR5cGUlMjIsJTIybW9kdWxlJTIyKSxlLmlubmVySFRNTD0lMjIoYXdhaXQgaW1wb3J0KCUyN2h0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vc3JjL2FwaS9leGFtcGxlcy9RUkNvZGUubWpzJTI3KSkuZGVtbygpJTIyLGRvY3VtZW50LmJvZHkuYXBwZW5kKGUpOyIKICAgICAgICAgICAgICByZWw9Im5vZm9sbG93IgogICAgICAgICAgICAgID48c3ZnCiAgICAgICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgICAgICBoZWlnaHQ9IjI0cHgiCiAgICAgICAgICAgICAgICB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIKICAgICAgICAgICAgICAgIHdpZHRoPSIyNHB4IgogICAgICAgICAgICAgICAgZmlsbD0iI2FhYSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgICBkPSJNMjAwLTEyMHYtNjQwcTAtMzMgMjMuNS01Ni41VDI4MC04NDBoNDAwcTMzIDAgNTYuNSAyMy41VDc2MC03NjB2NjQwTDQ4MC0yNDAgMjAwLTEyMFptODAtMTIyIDIwMC04NiAyMDAgODZ2LTUxOEgyODB2NTE4Wm0wLTUxOGg0MDAtNDAwWiIKICAgICAgICAgICAgICAgIC8+PC9zdmcKICAgICAgICAgICAgICA+PHNwYW4gaGlkZGVuPlNwcml0ZSBHYXJkZW4gLSBRUkNvZGUgLSBCb29rbWFya2xldDwvc3Bhbj48L2EKICAgICAgICAgICAgPgogICAgICAgICAgPC9wPgogICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CiAgICA8L2Rpdj4KICA8L2JvZHk+CjwvaHRtbD4K")).text(),a=n.parseFromString(l,"text/html").querySelector(`.${o}`);d.innerHTML=a.innerHTML,this.shadow.append(d),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=d,this.initEventListeners(),d}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".examples-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".examples-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog.close()}},un=class{constructor(e,i){this.doc=e,this.shadow=i,this.dialog=null,this.close=this.close.bind(this),this.handleDialogClick=this.handleDialogClick.bind(this)}async createDialog(e){this.dialog&&this.dialog.remove();let i=`${e}-content`,o=this.shadow.querySelector(`.${i}`);if(!o){o=this.doc.createElement("dialog"),o.setAttribute("class",i);let d=new DOMParser,n=await(await fetch("data:text/html;base64,PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+CiAgPGhlYWQ+CiAgICA8dGl0bGU+U3ByaXRlIEdhcmRlbiAtIFByaXZhY3kgUG9saWN5PC90aXRsZT4KICAgIDxiYXNlIGhyZWY9Ii8iIC8+CiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICAgIDxtZXRhCiAgICAgIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHZpZXdwb3J0LWZpdD1jb3ZlciIKICAgICAgbmFtZT0idmlld3BvcnQiCiAgICAvPgogICAgPG1ldGEKICAgICAgbmFtZT0iZGVzY3JpcHRpb24iCiAgICAgIGNvbnRlbnQ9IlByaXZhY3kgUG9saWN5IC0gU3ByaXRlIEdhcmRlbiAtIEEgMkQgc2FuZGJveCBleHBsb3JhdGlvbiBhbmQgZmFybWluZyBnYW1lLiBFeHBsb3JlIHByb2NlZHVyYWxseSBnZW5lcmF0ZWQgd29ybGRzLCBkaXNjb3ZlciBkaWZmZXJlbnQgYmlvbWVzLCBtaW5lIHJlc291cmNlcywgYW5kIGN1bHRpdmF0ZSBhIHZhcmlldHkgb2YgY3JvcHMuIgogICAgLz4KICAgIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMDAwMDAwIiAvPgogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibWFuaWZlc3QuanNvbiIgLz4KICAgIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iYXNzZXRzL2ljb25zL2Zhdmljb24uaWNvIiB0eXBlPSJpbWFnZS94LWljb24iIC8+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIGhyZWY9ImFzc2V0cy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZyIgLz4KICAgIDxzdHlsZT4KICAgICAgYm9keSB7CiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAycmVtOwogICAgICB9CgogICAgICBsaSB7CiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5IGNsYXNzPSJwcml2YWN5Ij4KICAgIDxkaXYgY2xhc3M9InByaXZhY3ktY29udGVudCI+CiAgICAgIDxoZWFkZXIgY2xhc3M9InByaXZhY3ktY29udGVudF9oZWFkZXIiPgogICAgICAgIDxoMT4KICAgICAgICAgIDxhCiAgICAgICAgICAgIGhyZWY9Imh0dHBzOi8va2hlcnJpY2suZ2l0aHViLmlvL3Nwcml0ZS1nYXJkZW4vIgogICAgICAgICAgICByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiCiAgICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgICA+U3ByaXRlIEdhcmRlbjwvYQogICAgICAgICAgPgogICAgICAgIDwvaDE+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0icHJpdmFjeS1jb250ZW50X2Nsb3NlLWJ0biIgaGlkZGVuPSJoaWRkZW4iPgogICAgICAgICAgJnRpbWVzOwogICAgICAgIDwvYnV0dG9uPgogICAgICA8L2hlYWRlcj4KCiAgICAgIDxoMj4KICAgICAgICA8YQogICAgICAgICAgaHJlZj0iaHR0cHM6Ly9raGVycmljay5naXRodWIuaW8vc3ByaXRlLWdhcmRlbi9wcml2YWN5LyIKICAgICAgICAgIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIKICAgICAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgICAgICAgPlByaXZhY3kgUG9saWN5PC9hCiAgICAgICAgPgogICAgICA8L2gyPgoKICAgICAgPGRpdj4KICAgICAgICA8cD48c3Ryb25nPkxhc3QgdXBkYXRlZDo8L3N0cm9uZz4gT2N0b2JlciAwNCwgMjAyNTwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBUaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBPdXIgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgb24gdGhlCiAgICAgICAgICBjb2xsZWN0aW9uLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgWW91ciBpbmZvcm1hdGlvbiB3aGVuIFlvdSB1c2UgdGhlCiAgICAgICAgICBTZXJ2aWNlLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICA8c3Ryb25nCiAgICAgICAgICAgID5XZSBkbyBub3QgY29sbGVjdCwgc3RvcmUsIHVzZSwgb3IgZGlzc2VtaW5hdGUgWW91ciBQZXJzb25hbAogICAgICAgICAgICBEYXRhLjwvc3Ryb25nCiAgICAgICAgICA+CiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+SW50ZXJwcmV0YXRpb24gYW5kIERlZmluaXRpb25zPC9oMz4KCiAgICAgICAgPGg0PkludGVycHJldGF0aW9uPC9oND4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSB3b3JkcyBvZiB3aGljaCB0aGUgaW5pdGlhbCBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQgaGF2ZSBtZWFuaW5ncwogICAgICAgICAgZGVmaW5lZCB1bmRlciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMuIFRoZSBmb2xsb3dpbmcgZGVmaW5pdGlvbnMKICAgICAgICAgIHNoYWxsIGhhdmUgdGhlIHNhbWUgbWVhbmluZyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhleSBhcHBlYXIgaW4KICAgICAgICAgIHNpbmd1bGFyIG9yIGluIHBsdXJhbC4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5EZWZpbml0aW9uczwvaDQ+CiAgICAgICAgPHA+Rm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIFByaXZhY3kgUG9saWN5OjwvcD4KCiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPkFwcGxpY2F0aW9uPC9zdHJvbmc+IHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLCB0aGUgc29mdHdhcmUKICAgICAgICAgICAgcHJvZ3JhbSBwcm92aWRlZCBieSB0aGUgQ29tcGFueS4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+CiAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueTwvc3Ryb25nPiAocmVmZXJyZWQgdG8gYXMgZWl0aGVyICJ0aGUgQ29tcGFueSIsICJXZSIsCiAgICAgICAgICAgICJVcyIgb3IgIk91ciIgaW4gdGhpcyBBZ3JlZW1lbnQpIHJlZmVycyB0byBTcHJpdGUgR2FyZGVuLgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5EZXZpY2U8L3N0cm9uZz4gbWVhbnMgYW55IGRldmljZSB0aGF0IGNhbiBhY2Nlc3MgdGhlIFNlcnZpY2UKICAgICAgICAgICAgc3VjaCBhcyBhIGNvbXB1dGVyLCBhIGNlbGxwaG9uZSBvciBhIGRpZ2l0YWwgdGFibGV0LgogICAgICAgICAgPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5QZXJzb25hbCBEYXRhPC9zdHJvbmc+IGlzIGFueSBpbmZvcm1hdGlvbiB0aGF0IHJlbGF0ZXMgdG8gYW4KICAgICAgICAgICAgaWRlbnRpZmllZCBvciBpZGVudGlmaWFibGUgaW5kaXZpZHVhbC4KICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5TZXJ2aWNlPC9zdHJvbmc+IHJlZmVycyB0byB0aGUgQXBwbGljYXRpb24uPC9saT4KICAgICAgICAgIDxsaT4KICAgICAgICAgICAgPHN0cm9uZz5Vc2FnZSBEYXRhPC9zdHJvbmc+IHJlZmVycyB0byBkYXRhIGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5LAogICAgICAgICAgICBlaXRoZXIgZ2VuZXJhdGVkIGJ5IHRoZSB1c2Ugb2YgdGhlIFNlcnZpY2Ugb3IgZnJvbSB0aGUgU2VydmljZQogICAgICAgICAgICBpbmZyYXN0cnVjdHVyZSBpdHNlbGYuCiAgICAgICAgICA8L2xpPgogICAgICAgICAgPGxpPgogICAgICAgICAgICA8c3Ryb25nPllvdTwvc3Ryb25nPiBtZWFucyB0aGUgaW5kaXZpZHVhbCBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlCiAgICAgICAgICAgIFNlcnZpY2UsIG9yIHRoZSBjb21wYW55LCBvciBvdGhlciBsZWdhbCBlbnRpdHkgb24gYmVoYWxmIG9mIHdoaWNoCiAgICAgICAgICAgIHN1Y2ggaW5kaXZpZHVhbCBpcyBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFNlcnZpY2UsIGFzIGFwcGxpY2FibGUuCiAgICAgICAgICA8L2xpPgogICAgICAgIDwvdWw+CgogICAgICAgIDxoMz5Db2xsZWN0aW5nIGFuZCBVc2luZyBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgoKICAgICAgICA8aDQ+VHlwZXMgb2YgRGF0YSBOb3QgQ29sbGVjdGVkPC9oND4KCiAgICAgICAgPGg1PlBlcnNvbmFsIERhdGE8L2g1PgogICAgICAgIDxwPgogICAgICAgICAgV2hpbGUgdXNpbmcgT3VyIFNlcnZpY2UsIFdlIHdpbGwgbm90IGFzayBZb3UgdG8gcHJvdmlkZSBVcyB3aXRoCiAgICAgICAgICBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiB0aGF0IHdvdWxkIGJlIHVzZWQgdG8gY29udGFjdCBvcgogICAgICAgICAgaWRlbnRpZnkgWW91LgogICAgICAgIDwvcD4KCiAgICAgICAgPGg1PlVzYWdlIERhdGE8L2g1PgogICAgICAgIDxwPlVzYWdlIERhdGEgaXMgbm90IGNvbGxlY3RlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgdGhlIFNlcnZpY2UuPC9wPgoKICAgICAgICA8aDU+TG9jYWwgU3RvcmFnZTwvaDU+CiAgICAgICAgPHA+CiAgICAgICAgICBTcHJpdGUgR2FyZGVuIHVzZXMgeW91ciBicm93c2VyJ3MgbG9jYWwgc3RvcmFnZSB0byBzYXZlIHlvdXIgZ2FtZQogICAgICAgICAgcHJvZ3Jlc3Mgb24geW91ciBkZXZpY2UuIFRoaXMgZGF0YSBuZXZlciBsZWF2ZXMgeW91ciBkZXZpY2UgYW5kIGlzIG5vdAogICAgICAgICAgdHJhbnNtaXR0ZWQgdG8gYW55IHNlcnZlcnMuIFlvdSBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoaXMgZGF0YSBhbmQKICAgICAgICAgIGNhbiBjbGVhciBpdCBhdCBhbnkgdGltZSB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4KICAgICAgICA8L3A+CgogICAgICAgIDxoND5UcmFja2luZyBUZWNobm9sb2dpZXM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgV2UgZG8gbm90IHVzZSBDb29raWVzIG9yIHNpbWlsYXIgdHJhY2tpbmcgdGVjaG5vbG9naWVzIHRvIHRyYWNrCiAgICAgICAgICBhY3Rpdml0eSBvbiBPdXIgU2VydmljZS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Vc2Ugb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD5UaGUgQ29tcGFueSBkb2VzIG5vdCB1c2UgUGVyc29uYWwgRGF0YSBmb3IgYW55IHB1cnBvc2VzLjwvcD4KCiAgICAgICAgPGgzPlJldGVudGlvbiBvZiBZb3VyIFBlcnNvbmFsIERhdGE8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgVGhlIENvbXBhbnkgZG9lcyBub3QgcmV0YWluIFlvdXIgUGVyc29uYWwgRGF0YS4gQWxsIGdhbWUgZGF0YSBpcwogICAgICAgICAgc3RvcmVkIGxvY2FsbHkgb24geW91ciBkZXZpY2Ugb25seS4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5EaXNjbG9zdXJlIG9mIFlvdXIgUGVyc29uYWwgRGF0YTwvaDM+CgogICAgICAgIDxoND5CdXNpbmVzcyBUcmFuc2FjdGlvbnM8L2g0PgogICAgICAgIDxwPgogICAgICAgICAgSWYgdGhlIENvbXBhbnkgaXMgaW52b2x2ZWQgaW4gYSBtZXJnZXIsIGFjcXVpc2l0aW9uIG9yIGFzc2V0IHNhbGUsCiAgICAgICAgICBZb3VyIFBlcnNvbmFsIERhdGEgd2lsbCBub3QgYmUgdHJhbnNmZXJyZWQuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+U2VjdXJpdHkgb2YgWW91ciBQZXJzb25hbCBEYXRhPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIFRoZSBzZWN1cml0eSBvZiBZb3VyIFBlcnNvbmFsIERhdGEgaXMgaW1wb3J0YW50IHRvIFVzLiBTaW5jZSBhbGwgZ2FtZQogICAgICAgICAgZGF0YSBpcyBzdG9yZWQgbG9jYWxseSBvbiB5b3VyIGRldmljZSBhbmQgbmV2ZXIgdHJhbnNtaXR0ZWQgdG8KICAgICAgICAgIGV4dGVybmFsIHNlcnZlcnMsIHRoZSBzZWN1cml0eSBvZiB5b3VyIGRhdGEgaXMgbGFyZ2VseSBkZXBlbmRlbnQgb24KICAgICAgICAgIHlvdXIgZGV2aWNlJ3Mgc2VjdXJpdHkgbWVhc3VyZXMuCiAgICAgICAgPC9wPgoKICAgICAgICA8aDM+TGlua3MgdG8gT3RoZXIgV2Vic2l0ZXM8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgT3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgd2Vic2l0ZXMgdGhhdCBhcmUgbm90IG9wZXJhdGVkCiAgICAgICAgICBieSBVcy4gSWYgWW91IGNsaWNrIG9uIGEgdGhpcmQgcGFydHkgbGluaywgWW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8KICAgICAgICAgIHRoYXQgdGhpcmQgcGFydHkncyBzaXRlLiBXZSBzdHJvbmdseSBhZHZpc2UgWW91IHRvIHJldmlldyB0aGUgUHJpdmFjeQogICAgICAgICAgUG9saWN5IG9mIGV2ZXJ5IHNpdGUgWW91IHZpc2l0LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSBoYXZlIG5vIGNvbnRyb2wgb3ZlciBhbmQgYXNzdW1lIG5vIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgY29udGVudCwKICAgICAgICAgIHByaXZhY3kgcG9saWNpZXMgb3IgcHJhY3RpY2VzIG9mIGFueSB0aGlyZCBwYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5DaGFuZ2VzIHRvIHRoaXMgUHJpdmFjeSBQb2xpY3k8L2gzPgogICAgICAgIDxwPgogICAgICAgICAgV2UgbWF5IHVwZGF0ZSBPdXIgUHJpdmFjeSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUuIFdlIHdpbGwgbm90aWZ5IFlvdQogICAgICAgICAgb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IHdpdGhpbiB0aGUKICAgICAgICAgIGFwcGxpY2F0aW9uLgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBXZSB3aWxsIHVwZGF0ZSB0aGUgIkxhc3QgdXBkYXRlZCIgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoaXMgUHJpdmFjeQogICAgICAgICAgUG9saWN5LgogICAgICAgIDwvcD4KCiAgICAgICAgPHA+CiAgICAgICAgICBZb3UgYXJlIGFkdmlzZWQgdG8gcmV2aWV3IHRoaXMgUHJpdmFjeSBQb2xpY3kgcGVyaW9kaWNhbGx5IGZvciBhbnkKICAgICAgICAgIGNoYW5nZXMuIENoYW5nZXMgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBhcmUgZWZmZWN0aXZlIHdoZW4gdGhleSBhcmUKICAgICAgICAgIHBvc3RlZC4KICAgICAgICA8L3A+CgogICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz4KICAgICAgICA8cD4KICAgICAgICAgIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhpcyBQcml2YWN5IFBvbGljeSwgWW91IGNhbiBjb250YWN0CiAgICAgICAgICB1czoKICAgICAgICA8L3A+CiAgICAgICAgPHVsPgogICAgICAgICAgPGxpPkJ5IGVtYWlsOiBhZG1pbkBjcmVhdGl2ZWluZHVzdHJpYWwuY29tPC9saT4KICAgICAgICA8L3VsPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPgo=")).text(),l=d.parseFromString(n,"text/html").querySelector(`.${i}`);o.innerHTML=l.innerHTML,this.shadow.append(o),this.shadow.querySelector(`.${e}-content_close-btn`).removeAttribute("hidden")}return this.dialog=o,this.initEventListeners(),o}handleDialogClick(e){e.target===this.dialog&&this.close()}initEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").addEventListener("click",this.close),this.dialog.addEventListener("click",this.handleDialogClick)}removeEventListeners(){this.dialog.querySelector(".privacy-content_close-btn").removeEventListener("click",this.close),this.dialog.removeEventListener("click",this.handleDialogClick)}show(){this.dialog.showModal()}close(){this.removeEventListeners(),this.dialog.close()}};function ri(r,e,i){let o=(function(n,l){let a;return function(...s){clearTimeout(a),a=setTimeout(()=>n.apply(this,s),l)}})(()=>{Lt(e,M)},200);new ResizeObserver(n=>{o()}).observe(i.host),(function(n,l){let a=l.getElementById("aboutBtn");a&&a.addEventListener("click",async function(){try{await(async function(c,t){let I=new In(c,t);return await I.createDialog("about"),I.show(),I})(n.document,l)}catch(c){console.error("Failed to open about dialog:",c),alert("Failed to open about dialog. Check console for details.")}});let s=l.getElementById("examplesBtn");s&&s.addEventListener("click",async function(){try{await(async function(c,t){let I=new Cn(c,t);return await I.createDialog("examples","src/api"),I.show(),I})(n.document,l)}catch(c){console.error("Failed to open examples dialog:",c),alert("Failed to open examples dialog. Check console for details.")}});let g=l.getElementById("privacyBtn");g&&g.addEventListener("click",async function(){try{await(async function(c,t){let I=new un(c,t);return await I.createDialog("privacy"),I.show(),I})(n.document,l)}catch(c){console.error("Failed to open privacy dialog:",c),alert("Failed to open privacy dialog. Check console for details.")}})})(r,i),(function(n){let l=n.querySelector('[data-key="x"].middle');l&&(l.addEventListener("click",async()=>await dn(n)),l.addEventListener("touchstart",async()=>await dn(n)))})(i),bo(i),ho(i);let d=i.getElementById("customizeColorsBtn");d&&d.addEventListener("click",()=>{(async function(n){let l=new ln(n,n.document,Ao(n.document,"sprite-garden"));await l.createDialog(),l.show()})(r)})}function li(r,e){new $o(l=>{e.getElementById("mapEditor").removeAttribute("hidden"),e.getElementById("customizeColorsBtnContainer").removeAttribute("hidden"),e.getElementById("examplesBtnContainer").removeAttribute("hidden"),e.querySelector('option[value="fullscreen"]').removeAttribute("hidden"),e.querySelector('#settings > [class="ui-grid__corner--container"]').removeAttribute("hidden"),l.disable()}),e.addEventListener("keydown",async l=>{let a=l.key.toLowerCase();e.host.keys[a]=!0,a==="enter"&&l.target.getAttribute("id")==="worldSeedInput"&&i(),a==="escape"&&e.querySelector('[class="seed-controls"]').setAttribute("hidden","hidden"),a==="s"&&l.ctrlKey&&(l.preventDefault(),e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")),!(a>="0"&&a<="9"||a==="backspace"||a==="delete"||a==="escape")&&(a==="r"&&l.ctrlKey&&(l.preventDefault(),o()),a==="g"&&l.ctrlKey&&(l.preventDefault(),i()),a==="e"&&(l.preventDefault(),mo()),a==="x"&&(l.preventDefault(),await dn(e)),a==="f"&&uo({growthTimers:V.growthTimers,plantStructures:V.plantStructures,player:V.player.get(),seedInventory:V.seedInventory.get(),selectedSeedType:V.selectedSeedType.get(),tileName:M.TileName,tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world.get(),worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get()}),a==="r"&&Co({growthTimers:V.growthTimers,plantStructures:V.plantStructures,player:V.player,tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world,worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get(),mode:M.breakMode.get(),queue:V.waterPhysicsQueue}),["u","i","o","j","k","l","m",",","."].includes(a)&&await cn({key:a,materialsInventory:V.materialsInventory.get(),player:V.player.get(),selectedMaterialType:V.selectedMaterialType.get(),tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world.get(),worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get()}),l.preventDefault())}),e.getElementById("toggleFog").addEventListener("click",function(){e.getElementById("fogModeText").textContent!=="Clear"?M.fogMode.set("clear"):M.fogMode.set("fog")});function i(){let l=e.getElementById("worldSeedInput"),a=e.getElementById("currentSeed"),s=M.WORLD_HEIGHT.get(),g=M.WORLD_WIDTH.get(),c=Qe(M.BIOMES,M.SURFACE_LEVEL.get(),M.TILE_SIZE.get(),M.TILES,s,g,M.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,l.value);V.world.set(c);let t=Ee(r,e),I=St(M.isFogScaled,s,g,t);V.exploredMap.set(I),console.log(`Generated new world with seed: ${l.value}`),a.textContent=l.value}function o(){let l=e.getElementById("currentSeed"),a=e.getElementById("worldSeedInput"),s=xe(),g=M.WORLD_HEIGHT.get(),c=M.WORLD_WIDTH.get(),t=Qe(M.BIOMES,M.SURFACE_LEVEL.get(),M.TILE_SIZE.get(),M.TILES,g,c,M.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,s);V.world.set(t);let I=Ee(r,e),C=St(M.isFogScaled,g,c,I);V.exploredMap.set(C),console.log(`Generated new world with random seed: ${s}`),a.value=s,l.textContent=s}e.getElementById("worldState").addEventListener("click",function(){e.querySelector('[class="seed-controls"]').toggleAttribute("hidden")}),e.getElementById("generateWithSeed").addEventListener("click",i),e.getElementById("randomSeed").addEventListener("click",o),e.getElementById("copySeed").addEventListener("click",async function(){let l=e.getElementById("worldSeedInput");await(async function(a,s){let g=a.navigator;if(g.clipboard&&a.isSecureContext)try{await g.clipboard.writeText(s)}catch{}})(r,l.value)});let d=e.getElementById("saveModeToggle");Zt().then(async l=>{if(console.log("Save Mode:",l),l==="manual")return d.innerText="Save Mode Manual",void(d.style.backgroundColor="var(--sg-color-red-500)");d.style.backgroundColor="var(--sg-color-green-500)",d.innerText="Save Mode Auto",l===null&&(await jt("auto"),setTimeout(async()=>{await wt(r)},5e3))}),d.addEventListener("click",async function(){if(await Zt()==="manual")return d.innerText="Save Mode Auto",d.style.backgroundColor="var(--sg-color-green-500)",await jt("auto"),void await wt(r);d.innerText="Save Mode Manual",d.style.backgroundColor="var(--sg-color-red-500)",await jt("manual")}),e.getElementById("saveCompressedState").addEventListener("click",async function(){try{let l=Rt(r),a=JSON.stringify(l);await Zo(r,a),console.log("Game state saved successfully")}catch(l){console.error("Failed to save game state:",l),alert("Failed to save game state. Check console for details.")}}),e.getElementById("loadCompressedState").addEventListener("click",async function(){try{let l=e.getElementById("currentSeed"),a=e.getElementById("worldSeedInput"),s,g;if(r.showOpenFilePicker){let[I]=await r.showOpenFilePicker({types:[{description:"Sprite Garden Save Game Files",accept:{"application/gzip":[".sgs"]}}]});s=await I.getFile()}else{let I=r.document.createElement("input");I.type="file",I.accept=".sgs",I.style.display="none",e.append(I);let C=new Promise(p=>{I.onchange=()=>p(I.files[0])});I.click(),s=await C,e.removeChild(I)}if("DecompressionStream"in r){let I=s.stream().pipeThrough(new DecompressionStream("gzip"));g=await(await new Response(I).blob()).text()}let c=JSON.parse(g);hn(r,e,c);let{worldSeed:t}=c.config;a.value=t,l.textContent=t,console.log("Game state loaded successfully")}catch(l){console.error("Failed to load game state:",l),alert("Failed to load game state. Check console for details.")}});let n=e.getElementById("useStorageBtn");n&&n.addEventListener("click",async function(){try{await(async function(l,a,s){let g=new nn(l,a,s);return await g.createDialog(),g.show(),g})(r,r.document,e)}catch(l){console.error("Failed to open storage dialog:",l),alert("Failed to open storage dialog. Check console for details.")}}),e.querySelectorAll(".ui-grid__corner").forEach(l=>{l.querySelector(".ui-grid__corner--heading").addEventListener("click",a=>(function(s){s.preventDefault(),s.stopPropagation();let g=s.currentTarget.nextElementSibling;g.getAttribute("hidden")===null?g.setAttribute("hidden","hidden"):g.removeAttribute("hidden")})(a))})}function ai(r,e){e.getElementById("controls").addEventListener("click",a=>{a.stopPropagation(),a.preventDefault(),e.querySelector(".touch-controls").toggleAttribute("hidden")});let i=e.getElementById("resolutionSelect");i&&i.addEventListener("change",a=>{M.currentResolution.set(a.currentTarget.value),Lt(e,M)});let o=e.getElementById("initNewWorld");o&&(o.addEventListener("click",()=>{let a=e.getElementById("worldSeedInput");e.getElementById("currentSeed").textContent=a.value;let s=M.WORLD_HEIGHT.get(),g=M.WORLD_WIDTH.get(),c=Qe(M.BIOMES,M.SURFACE_LEVEL.get(),M.TILE_SIZE.get(),M.TILES,s,g,M.worldSeed,V.gameTime,V.growthTimers,V.plantStructures,V.player,V.seedInventory,a.value);V.world.set(c);let t=Ee(r,e),I=St(M.isFogScaled,s,g,t);V.exploredMap.set(I)}),e.querySelectorAll(".seed-btn").forEach(a=>{a.addEventListener("click",s=>{(function(g,c){let[t]=Object.keys(c.currentTarget.dataset);for(let p of c.currentTarget.parentElement.children)p.classList.remove("selected");c.currentTarget.classList.toggle("selected"),console.log(`Selecting seed: ${t}`);let I=g.selectedSeedType.get();console.log(`Current selected: ${I}`);let C=I===t.toUpperCase()?null:t.toUpperCase();g.selectedSeedType.set(C),console.log(`New selected: ${C}`)})(V,s)})}),e.querySelectorAll(".material-btn").forEach(a=>{a.addEventListener("click",s=>{(function(g,c,t){let[I]=Object.keys(t.currentTarget.dataset);for(let A of t.currentTarget.parentElement.children)A.classList.remove("selected");t.currentTarget.classList.toggle("selected"),console.log(`Selecting material: ${I}`);let C=c.selectedMaterialType.get();console.log(`Current selected material: ${C}`);let p=C===I.toUpperCase()?null:I.toUpperCase();c.selectedMaterialType.set(p),console.log(`New selected material: ${p}`)})(0,V,s)})}));let d=e.getElementById("toggleView");d&&d.addEventListener("click",()=>V.viewMode.set(V.viewMode.get()==="normal"?"xray":"normal"));let n=e.getElementById("toggleBreakMode");n&&n.addEventListener("click",()=>mo());let l=e.getElementById("resolutionSelect");l&&(l.value="400")}function gi(r){r.querySelectorAll(".touch-btn").forEach(e=>{let i=e.getAttribute("data-key"),o=!1,d=null;function n(){r.host.touchKeys[i]=!0,e.style.background="var(--sg-color-gray-alpha-30)",i==="f"&&uo({growthTimers:V.growthTimers,plantStructures:V.plantStructures,player:V.player.get(),seedInventory:V.seedInventory.get(),selectedSeedType:V.selectedSeedType.get(),tileName:M.TileName,tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world.get(),worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get()}),i==="r"&&Co({growthTimers:V.growthTimers,plantStructures:V.plantStructures,player:V.player,tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world,worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get(),mode:M.breakMode.get(),queue:V.waterPhysicsQueue})}function l(){o||(o=!0,n(),i!=="f"&&i!=="r"||(d=setInterval(n,100)))}function a(){o=!1,r.host.touchKeys[i]=!1,e.style.background="var(--sg-color-black-alpha-60)",d&&(clearInterval(d),d=null)}e.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),l()}),e.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),a()}),e.addEventListener("touchcancel",s=>{s.preventDefault(),s.stopPropagation(),a()}),e.addEventListener("mousedown",s=>{s.preventDefault(),s.stopPropagation(),l()}),e.addEventListener("mouseup",s=>{s.preventDefault(),s.stopPropagation(),a()}),e.addEventListener("mouseleave",s=>{s.preventDefault(),s.stopPropagation(),a()})}),r.querySelectorAll(".touch-btn.place-block").forEach(e=>{e.addEventListener("touchstart",async()=>await cn({key:e.dataset.key,materialsInventory:V.materialsInventory.get(),player:V.player.get(),selectedMaterialType:V.selectedMaterialType.get(),tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world.get(),worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get()})),e.addEventListener("click",async()=>await cn({key:e.dataset.key,materialsInventory:V.materialsInventory.get(),player:V.player.get(),selectedMaterialType:V.selectedMaterialType.get(),tiles:M.TILES,tileSize:M.TILE_SIZE.get(),world:V.world.get(),worldHeight:M.WORLD_HEIGHT.get(),worldWidth:M.WORLD_WIDTH.get()}))}),r.addEventListener("keyup",e=>{r.host.keys[e.key.toLowerCase()]=!1,e.preventDefault()}),r.addEventListener("touchstart",e=>{(e.target.closest(".touch-controls")||e.target===r.getElementById("canvas"))&&e.preventDefault()},{passive:!1}),r.addEventListener("touchmove",e=>{(e.target.closest(".touch-controls")||e.target===r.getElementById("canvas"))&&e.preventDefault()},{passive:!1}),r.addEventListener("touchend",e=>{(e.target.closest(".touch-controls")||e.target===r.getElementById("canvas"))&&e.preventDefault()},{passive:!1}),r.addEventListener("contextmenu",e=>{(e.target.closest(".touch-controls")||e.target===r.getElementById("canvas"))&&e.preventDefault()}),r.addEventListener("dblclick",e=>{(e.target.closest(".touch-controls")||e.target===r.getElementById("canvas"))&&e.preventDefault()})}function Qt({e:r,el:e,camera:i,scale:o,tiles:d,tileSize:n,world:l,worldHeight:a,worldWidth:s}){let g=(function({e:C,el:p,scale:A}){let h=p.getBoundingClientRect(),y,W;C.touches&&C.touches.length>0?(y=C.touches[0].clientX,W=C.touches[0].clientY):(y=C.clientX,W=C.clientY);let R=p.width/h.width*A,B=p.height/h.height*A;return{x:(y-h.left)*R,y:(W-h.top)*B}})({e:r,el:e,scale:o}),c=i.get(),t=Math.floor((g.x+c.x)/n),I=Math.floor((g.y+c.y)/n);if(t>=0&&t<s&&I>=0&&I<a){let C=l.getTile?l.getTile(t,I):null;if(!C||C===d.AIR)return void(e.title=`Tile: AIR (${t}, ${I})`);let p=Object.keys(d).find(A=>d[A]===C)||"Custom";e.title=`Tile: ${p} (${t}, ${I})`}}function si({e:r,camera:e,scale:i,tiles:o,tileSize:d,worldHeight:n,worldWidth:l,world:a}){r.target,K.isDragging=!1,K.lastPaintedTile=null}function ci({cnvs:r,camera:e,scale:i,tiles:o,tileSize:d,worldHeight:n,worldWidth:l,world:a}){let s={cnvs:r,camera:e,scale:i,tiles:o,tileSize:d,worldHeight:n,worldWidth:l,world:a};r.addEventListener("mousedown",g=>(function({e:c,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}){let W=c.target.getBoundingClientRect(),R=c.clientX-W.left,B=c.clientY-W.top;if(On({x:R,y:B,camera:t,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}))return ut({x:R,y:B,isStart:!0,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}),void c.preventDefault()})(U({e:g},s))),r.addEventListener("mousemove",g=>(function({e:c,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}){let W=c.target,R=W.getBoundingClientRect(),B=c.clientX-R.left,T=c.clientY-R.top;c.buttons===1&&K.isEnabled&&ut({x:B,y:T,isStart:!1,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y})?c.preventDefault():Qt({e:c,el:W,camera:t,scale:I,tiles:C,tileSize:p,world:y.get(),worldHeight:A,worldWidth:h})})(U({e:g},s))),r.addEventListener("mouseup",g=>si(U({e:g},s))),r.addEventListener("touchmove",g=>(function({e:c,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}){let W=c.target;if(c.touches.length===1){let R=W.getBoundingClientRect(),B=c.touches[0];if(ut({x:B.clientX-R.left,y:B.clientY-R.top,isStart:!1,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}))return void c.preventDefault()}Qt({e:c,el:W,camera:t,scale:I,tiles:C,tileSize:p,world:y.get(),worldHeight:A,worldWidth:h})})(U({e:g},s))),r.addEventListener("touchstart",g=>(function({e:c,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}){let W=c.target;if(c.touches.length===1){let R=W.getBoundingClientRect(),B=c.touches[0],T=B.clientX-R.left,x=B.clientY-R.top;if(On(T))return ut({x:T,y:x,isStart:!0,camera:t,scale:I,tiles:C,tileSize:p,worldHeight:A,worldWidth:h,world:y}),void c.preventDefault()}Qt({e:c,el:W,camera:t,scale:I,tiles:C,tileSize:p,world:y.get(),worldHeight:A,worldWidth:h})})(U({e:g},s)))}function di(r,e,i,o,d,n){let l=Math.floor(e.get().x/o);if(l>=0&&l<d){let a=go(l,i,n.get());r.textContent=a.name}}function Ii(r,e,i,o,d){switch(o=Math.max(0,Math.min(1,o)),i){case"WHEAT":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.WHEAT_GROWING}),g;let c=Math.max(1,Math.ceil(4*a));for(let t=0;t<c;t++){let I=l-t;t<c-1||a<.8?g.push({x:n,y:I,tile:s.WHEAT_STALK}):g.push({x:n,y:I,tile:s.WHEAT_GRAIN}),a>.5&&t>0&&t<c-1&&(Math.random()<.4&&g.push({x:n-1,y:I,tile:s.WHEAT_STALK}),Math.random()<.4&&g.push({x:n+1,y:I,tile:s.WHEAT_STALK}))}if(a>.9){let t=l-c+1;g.push({x:n-1,y:t,tile:s.WHEAT_GRAIN}),g.push({x:n+1,y:t,tile:s.WHEAT_GRAIN})}return g})(r,e,o,d);case"CARROT":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.CARROT_GROWING}),g;if(a>.2){let t=Math.ceil(2*a);for(let I=1;I<=t;I++)g.push({x:n,y:l+I,tile:s.CARROT_ROOT})}let c=Math.max(1,Math.ceil(2*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.CARROT_LEAVES}),a>.5&&t===c-1&&(g.push({x:n-1,y:l-t,tile:s.CARROT_LEAVES}),g.push({x:n+1,y:l-t,tile:s.CARROT_LEAVES}));return g})(r,e,o,d);case"MUSHROOM":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.MUSHROOM_GROWING}),g;let c=Math.max(1,Math.ceil(3*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.MUSHROOM_STEM});if(a>.4){let t=l-c;g.push({x:n,y:t,tile:s.MUSHROOM_CAP}),a>.6&&(g.push({x:n-1,y:t,tile:s.MUSHROOM_CAP}),g.push({x:n+1,y:t,tile:s.MUSHROOM_CAP})),a>.8&&(g.push({x:n-1,y:t-1,tile:s.MUSHROOM_CAP}),g.push({x:n,y:t-1,tile:s.MUSHROOM_CAP}),g.push({x:n+1,y:t-1,tile:s.MUSHROOM_CAP}))}return g})(r,e,o,d);case"CACTUS":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.CACTUS_GROWING}),g;let c=Math.max(1,Math.ceil(5*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.CACTUS_BODY});if(a>.4&&c>2){let t=l-Math.floor(.6*c);g.push({x:n-1,y:t,tile:s.CACTUS_BODY}),a>.6&&g.push({x:n-1,y:t-1,tile:s.CACTUS_BODY})}if(a>.5&&c>3){let t=l-Math.floor(.7*c);g.push({x:n+1,y:t,tile:s.CACTUS_BODY}),a>.7&&g.push({x:n+1,y:t-1,tile:s.CACTUS_BODY})}if(a>.95){let t=l-c;g.push({x:n,y:t,tile:s.CACTUS_FLOWER})}return g})(r,e,o,d);case"WALNUT":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.TREE_GROWING}),g;let c=xe(3,5),t=Math.max(1,Math.ceil(c*a));for(let I=0;I<t;I++){let C=l-I;g.push({x:n,y:C,tile:s.TREE_TRUNK})}if(a>.3){let I=l-t,C=Math.min(3,Math.ceil(5*(a-.3)));for(let p=-C;p<=C;p++)for(let A=-C;A<=1;A++){let h=n+p,y=I+A;Math.sqrt(p*p+A*A)<=C&&A<=0&&(g.find(R=>R.x===h&&R.y===y&&R.tile===s.TREE_TRUNK)||g.push({x:h,y,tile:s.TREE_LEAVES}))}}return g})(r,e,o,d);case"BERRY_BUSH":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.BERRY_BUSH_GROWING}),g;let c=Math.max(1,Math.ceil(3*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.BERRY_BUSH_BRANCH});if(a>.3){let t=l-c,I=Math.min(2,Math.ceil(3*(a-.3)));for(let C=-I;C<=I;C++)for(let p=0;p<=I;p++){let A=n+C,h=t+p,y=Math.abs(C)+Math.abs(p);y<=I&&y>0&&g.push({x:A,y:h,tile:s.BERRY_BUSH_LEAVES})}}if(a>.8){let t=l-c;Math.random()<.6&&g.push({x:n-1,y:t+1,tile:s.BERRY_BUSH_BERRIES}),Math.random()<.6&&g.push({x:n+1,y:t+1,tile:s.BERRY_BUSH_BERRIES}),Math.random()<.6&&g.push({x:n-1,y:t,tile:s.BERRY_BUSH_BERRIES}),Math.random()<.6&&g.push({x:n+1,y:t,tile:s.BERRY_BUSH_BERRIES})}return g})(r,e,o,d);case"BAMBOO":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.BAMBOO_GROWING}),g;let c=Math.max(1,Math.ceil(7*a));for(let t=0;t<c;t++)t%2==0?g.push({x:n,y:l-t,tile:s.BAMBOO_JOINT}):g.push({x:n,y:l-t,tile:s.BAMBOO_STALK});if(a>.5){let t=l-c;g.push({x:n-1,y:t,tile:s.BAMBOO_LEAVES}),g.push({x:n+1,y:t,tile:s.BAMBOO_LEAVES}),a>.7&&(g.push({x:n-1,y:t+1,tile:s.BAMBOO_LEAVES}),g.push({x:n+1,y:t+1,tile:s.BAMBOO_LEAVES}))}return g})(r,e,o,d);case"SUNFLOWER":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.SUNFLOWER_GROWING}),g;let c=Math.max(1,Math.ceil(5*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.SUNFLOWER_STEM});if(a>.3)for(let I=2;I<c;I+=2)I%2==0?g.push({x:n-1,y:l-I,tile:s.SUNFLOWER_LEAVES}):g.push({x:n+1,y:l-I,tile:s.SUNFLOWER_LEAVES});if(a>.7){let t=l-c;g.push({x:n,y:t,tile:s.SUNFLOWER_CENTER}),a>.85&&(g.push({x:n-1,y:t,tile:s.SUNFLOWER_PETALS}),g.push({x:n+1,y:t,tile:s.SUNFLOWER_PETALS}),g.push({x:n,y:t-1,tile:s.SUNFLOWER_PETALS}),g.push({x:n,y:t+1,tile:s.SUNFLOWER_PETALS}))}return g})(r,e,o,d);case"CORN":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.CORN_GROWING}),g;let c=Math.max(1,Math.ceil(4*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.CORN_STALK});if(a>.4)for(let t=1;t<c;t++)t%2==1?g.push({x:n-1,y:l-t,tile:s.CORN_LEAVES}):g.push({x:n+1,y:l-t,tile:s.CORN_LEAVES});if(a>.7){let t=l-Math.floor(.6*c);g.push({x:n+1,y:t,tile:s.CORN_EAR}),a>.85&&g.push({x:n+1,y:t-1,tile:s.CORN_SILK})}return g})(r,e,o,d);case"PINE_TREE":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.PINE_TREE_GROWING}),g;let c=Math.max(1,Math.ceil(8*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.PINE_TRUNK});if(a>.25){let t=l-Math.floor(.3*c),I=Math.ceil(.7*c);for(let C=0;C<I;C++){let p=t-C,A=Math.max(1,Math.floor((I-C)/2));for(let h=-A;h<=A;h++)h===0&&C===0||g.push({x:n+h,y:p,tile:s.PINE_NEEDLES})}}if(a>.9){let t=l-Math.floor(.5*c);Math.random()<.5&&g.push({x:n-1,y:t,tile:s.PINE_CONE}),Math.random()<.5&&g.push({x:n+1,y:t,tile:s.PINE_CONE})}return g})(r,e,o,d);case"WILLOW_TREE":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.WILLOW_TREE_GROWING}),g;let c=Math.max(1,Math.ceil(6*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.WILLOW_TRUNK});if(a>.3){let t=l-c,I=Math.ceil(4*a);for(let C=0;C<I;C++)g.push({x:n-1-Math.floor(C/2),y:t+C,tile:s.WILLOW_BRANCHES}),a>.6&&C>0&&g.push({x:n-1-Math.floor(C/2),y:t+C,tile:s.WILLOW_LEAVES});for(let C=0;C<I;C++)g.push({x:n+1+Math.floor(C/2),y:t+C,tile:s.WILLOW_BRANCHES}),a>.6&&C>0&&g.push({x:n+1+Math.floor(C/2),y:t+C,tile:s.WILLOW_LEAVES})}if(a>.8){let t=l-c;g.push({x:n-2,y:t+2,tile:s.WILLOW_LEAVES}),g.push({x:n+2,y:t+2,tile:s.WILLOW_LEAVES}),g.push({x:n-3,y:t+3,tile:s.WILLOW_LEAVES}),g.push({x:n+3,y:t+3,tile:s.WILLOW_LEAVES})}return g})(r,e,o,d);case"FERN":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.FERN_GROWING}),g;let c=Math.max(1,Math.ceil(3*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.FERN_STEM});if(a>.3){let t=Math.ceil(2*a);for(let I=0;I<c;I++){let C=Math.min(t,I+1);for(let p=-C;p<=C;p++)p!==0&&g.push({x:n+p,y:l-I,tile:s.FERN_FROND})}}return g})(r,e,o,d);case"TULIP":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.TULIP_GROWING}),g;a>.15&&g.push({x:n,y:l+1,tile:s.TULIP_BULB});let c=Math.max(1,Math.ceil(3*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.TULIP_STEM});if(a>.3){let t=l-Math.floor(.5*c);g.push({x:n-1,y:t,tile:s.TULIP_LEAVES}),g.push({x:n+1,y:t,tile:s.TULIP_LEAVES})}if(a>.7){let t=l-c;g.push({x:n,y:t,tile:s.TULIP_PETALS}),a>.85&&(g.push({x:n-1,y:t,tile:s.TULIP_PETALS}),g.push({x:n+1,y:t,tile:s.TULIP_PETALS}),g.push({x:n,y:t-1,tile:s.TULIP_PETALS}))}return g})(r,e,o,d);case"AGAVE":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.AGAVE_GROWING}),g;if(g.push({x:n,y:l,tile:s.AGAVE_BASE}),a>.2){let c=Math.min(3,Math.ceil(4*(a-.2)));for(let t=-c;t<=c;t++)for(let I=-1;I<=1;I++){if(t===0&&I===0)continue;let C=Math.abs(t)+Math.abs(I);C<=c&&C>0&&g.push({x:n+t,y:l+I,tile:s.AGAVE_SPIKE})}}if(a>.8){let c=Math.ceil(30*(a-.8));for(let t=1;t<=c;t++)g.push({x:n,y:l-t,tile:s.AGAVE_FLOWER_STALK});if(a>.95){let t=l-c;g.push({x:n,y:t,tile:s.AGAVE_FLOWER}),g.push({x:n-1,y:t,tile:s.AGAVE_FLOWER}),g.push({x:n+1,y:t,tile:s.AGAVE_FLOWER})}}return g})(r,e,o,d);case"LAVENDER":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.LAVENDER_GROWING}),g;let c=Math.max(1,Math.ceil(2*a));if(a>.2&&(g.push({x:n,y:l,tile:s.LAVENDER_BUSH}),a>.4&&(g.push({x:n-1,y:l,tile:s.LAVENDER_BUSH}),g.push({x:n+1,y:l,tile:s.LAVENDER_BUSH}))),a>.5)for(let t=1;t<=c;t++)g.push({x:n,y:l-t,tile:s.LAVENDER_STEM}),a>.7&&t===c&&(g.push({x:n-1,y:l-t,tile:s.LAVENDER_STEM}),g.push({x:n+1,y:l-t,tile:s.LAVENDER_STEM}));if(a>.75){let t=l-c;g.push({x:n,y:t,tile:s.LAVENDER_FLOWERS}),a>.85&&(g.push({x:n-1,y:t,tile:s.LAVENDER_FLOWERS}),g.push({x:n+1,y:t,tile:s.LAVENDER_FLOWERS}))}return g})(r,e,o,d);case"KELP":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.KELP_GROWING}),g;let c=Math.max(1,Math.ceil(6*a));for(let t=0;t<c;t++){let I=Math.floor(1.5*Math.sin(.5*t));g.push({x:n+I,y:l-t,tile:s.KELP_BLADE}),a>.5&&t%2==1&&t<c-1&&g.push({x:n+I,y:l-t,tile:s.KELP_BULB})}return g})(r,e,o,d);case"ROSE":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.ROSE_GROWING}),g;let c=Math.max(1,Math.ceil(4*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.ROSE_STEM}),a>.3&&t>0&&t<c-1&&(t%2==0?g.push({x:n-1,y:l-t,tile:s.ROSE_THORNS}):g.push({x:n+1,y:l-t,tile:s.ROSE_THORNS}));if(a>.4)for(let t=1;t<c;t+=2)g.push({x:n-1,y:l-t,tile:s.ROSE_LEAVES}),g.push({x:n+1,y:l-t,tile:s.ROSE_LEAVES});if(a>.6){let t=l-c;g.push({x:n,y:t,tile:s.ROSE_BUD})}if(a>.85){let t=l-c;g.push({x:n,y:t,tile:s.ROSE_BLOOM}),g.push({x:n-1,y:t,tile:s.ROSE_BLOOM}),g.push({x:n+1,y:t,tile:s.ROSE_BLOOM}),g.push({x:n,y:t-1,tile:s.ROSE_BLOOM})}return g})(r,e,o,d);case"PUMPKIN":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.PUMPKIN_GROWING}),g;if(a>.2){let c=Math.ceil(3*a);for(let t=0;t<c;t++)g.push({x:n+t,y:l,tile:s.PUMPKIN_VINE}),g.push({x:n-t,y:l,tile:s.PUMPKIN_VINE})}if(a>.4){let t=Math.ceil(3*a);for(let I=2;I<t;I+=2)g.push({x:n+I,y:l-1,tile:s.PUMPKIN_LEAVES}),g.push({x:n-I,y:l-1,tile:s.PUMPKIN_LEAVES})}if(a>.6){let c=Math.ceil(5*(a-.6));g.push({x:n,y:l,tile:s.PUMPKIN_FRUIT}),c>1&&(g.push({x:n+1,y:l,tile:s.PUMPKIN_FRUIT}),g.push({x:n-1,y:l,tile:s.PUMPKIN_FRUIT})),c>2&&(g.push({x:n+1,y:l+1,tile:s.PUMPKIN_FRUIT}),g.push({x:n-1,y:l+1,tile:s.PUMPKIN_FRUIT}))}return a>.9&&g.push({x:n,y:l-1,tile:s.PUMPKIN_STEM}),g})(r,e,o,d);case"LOTUS":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.LOTUS_GROWING}),g;if(a>.2){let c=Math.ceil(2*a);for(let t=1;t<=c;t++)g.push({x:n,y:l+t,tile:s.LOTUS_STEM})}if(a>.4&&(g.push({x:n,y:l,tile:s.LOTUS_PAD}),a>.6&&(g.push({x:n-1,y:l,tile:s.LOTUS_PAD}),g.push({x:n+1,y:l,tile:s.LOTUS_PAD}))),a>.7&&g.push({x:n,y:l-1,tile:s.LOTUS_BUD}),a>.85){let c=l-1;g.push({x:n,y:c,tile:s.LOTUS_FLOWER}),g.push({x:n-1,y:c,tile:s.LOTUS_FLOWER}),g.push({x:n+1,y:c,tile:s.LOTUS_FLOWER}),g.push({x:n,y:c-1,tile:s.LOTUS_FLOWER})}return g})(r,e,o,d);case"BIRCH":return(function(n,l,a,s){let g=[];if(a<.1)return g.push({x:n,y:l,tile:s.BIRCH_GROWING}),g;let c=Math.max(1,Math.ceil(7*a));for(let t=0;t<c;t++)g.push({x:n,y:l-t,tile:s.BIRCH_TRUNK}),a>.3&&t%2==1&&g.push({x:n,y:l-t,tile:s.BIRCH_BARK});if(a>.5){let t=l-Math.floor(.7*c);g.push({x:n-1,y:t,tile:s.BIRCH_BRANCHES}),g.push({x:n+1,y:t,tile:s.BIRCH_BRANCHES}),a>.7&&(g.push({x:n-2,y:t,tile:s.BIRCH_BRANCHES}),g.push({x:n+2,y:t,tile:s.BIRCH_BRANCHES}))}if(a>.6){let t=l-c,I=2;for(let C=-I;C<=I;C++)for(let p=-I;p<=1;p++)Math.abs(C)+Math.abs(p)<=I+1&&p<=0&&(C===0&&p>-c||g.push({x:n+C,y:t+p,tile:s.BIRCH_LEAVES}))}if(a>.9){let t=l-c;g.push({x:n-1,y:t+1,tile:s.BIRCH_CATKINS}),g.push({x:n+1,y:t+1,tile:s.BIRCH_CATKINS})}return g})(r,e,o,d);default:return[{x:r,y:e,tile:d.WHEAT_GROWING}]}}function Ci(r,e,i,o,d,n){let l=!1,a=!1,s=o.get(),g=U({},r.get()),c=U({},e.get());for(let[t,I]of Object.entries(g)){if(I.timeLeft-=1/60,c[t]){let C=c[t],p=Math.max(0,Math.min(1,1-I.timeLeft/i[I.seedType].growthTime));C.blocks&&C.blocks.forEach(y=>{y.x>=0&&y.x<n&&y.y>=0&&y.y<d&&s.getTile(y.x,y.y)!==i.AIR&&s.setTile(y.x,y.y,i.AIR)});let[A,h]=t.split(",").map(Number);C.blocks=Ii(A,h,I.seedType,p,i),C.blocks.forEach(y=>{y.x>=0&&y.x<n&&y.y>=0&&y.y<d&&s.setTile(y.x,y.y,y.tile)}),a=!0}I.timeLeft<=0&&(c[t]&&(c[t].mature=!0,c[t].seedType=I.seedType),delete g[t],l=!0)}l&&r.set(g),a&&e.set(c)}function ui(r,e,i,o){let d=Math.floor(e.get().y/o),n="Surface";if(d>i){let l=d-i;n=l<15?"Shallow":l<30?"Deep":"Very Deep"}else d<i-5&&(n="Sky");r.textContent=n}function Fn({height:r,tileSize:e,width:i,world:o,worldHeight:d,worldWidth:n,x:l,y:a}){return[[l,a],[l+i,a],[l,a+r],[l+i,a+r],[l+i/2,a],[l+i/2,a+r],[l,a+r/2],[l+i,a+r/2]].some(s=>(function({tileSize:g,world:c,worldHeight:t,worldWidth:I,x:C,y:p}){if(!c||typeof c.getTile!="function")return console.error("isSolid: Invalid world object",{hasWorld:!!c,worldType:typeof c,hasGetTile:c?typeof c.getTile:"N/A",args:{tileSize:g,worldHeight:t,worldWidth:I,x:C,y:p},stack:new Error().stack}),!0;let A=Math.floor(C/g),h=Math.floor(p/g);if(A<0||A>=I||h<0||h>=t)return!0;let y=c.getTile(A,h);return y&&y.solid})({tileSize:e,world:o,worldHeight:d,worldWidth:n,x:s[0],y:s[1]}))}function se(r,e){return r.host?.keys[e]||r.host?.touchKeys[e]}function Ai(r,e,i,o,d,n,l,a,s,g=1,c,t){let I=s.get(),C=a.get(),p=l.get();I.velocityY+=e,I.velocityY>i&&(I.velocityY=i);let A=0,h=0;if(se(t,"upleft")?(A=-1,h=-1,I.lastDirection=-1):se(t,"upright")?(A=1,h=-1,I.lastDirection=1):se(t,"downleft")?(A=-1,h=1,I.lastDirection=-1):se(t,"downright")?(A=1,h=1,I.lastDirection=1):(se(t,"a")||se(t,"arrowleft")?(A=-1,I.lastDirection=-1):(se(t,"d")||se(t,"arrowright"))&&(A=1,I.lastDirection=1),se(t,"s")&&(h=1)),A!==0){let T=A*I.speed*g;Math.abs(I.velocityX)<.5||Math.sign(I.velocityX)!==Math.sign(T)?I.velocityX=.3*T:I.velocityX=T}else I.velocityX*=r,I.lastDirection=0;(se(t,"w")||se(t,"arrowup")||se(t," ")||se(t,"upleft")||se(t,"upright"))&&I.onGround&&(I.velocityY=-I.jumpPower,I.onGround=!1),A!==0&&h!==0&&(I.velocityX*=.707);let y=I.x+I.velocityX;Fn({height:I.height,tileSize:o,width:I.width,world:p,worldHeight:d,worldWidth:n,x:y,y:I.y})?I.velocityX=0:I.x=y;let W=I.y+I.velocityY;Fn({height:I.height,tileSize:o,width:I.width,world:p,worldHeight:d,worldWidth:n,x:I.x,y:W})?(I.velocityY>0&&(I.onGround=!0),I.velocityY=0):(I.y=W,I.onGround=!1),I.x=Math.max(0,Math.min(I.x,n*o-I.width)),I.y=Math.max(0,Math.min(I.y,d*o-I.height));let R=I.x+I.width/2-c.width/2,B=I.y+I.height/2-c.height/2;C.x+=.1*(R-C.x),C.y+=.1*(B-C.y),C.x=Math.max(0,Math.min(C.x,n*o-c.width)),C.y=Math.max(0,Math.min(C.y,d*o-c.height))}function bi(r,e,i){return i.get()==="xray"&&r.solid&&r!==e.COAL&&r!==e.IRON&&r!==e.GOLD&&r!==e.LAVA}var Pn=performance.now(),mt=0,je={player:{x:0,y:0},camera:{x:0,y:0}},qt=null,jn=0;async function mi(){let r=Date.now();return(r-jn>1e3||qt===null)&&(qt=await Q.getItem("sprite-garden-movement-scale"),jn=r),qt}async function po(r,e,i,o,d,n,l,a,s,g,c,t,I,C,p,A,h,y,W,R,B,T,x,Y,H,z,j,ne){let Ae=performance.now(),ce=Math.min(Ae-Pn,250);Pn=Ae,mt+=ce;let pe=0;for(;mt>=20&&pe<20;){let ie=H.get(),Ze=R.get();je.player.x=ie.x,je.player.y=ie.y,je.camera.x=Ze.x,je.camera.y=Ze.y,Ai(s,g,t,C,h,y,ne,R,H,await mi(),d,e),Ci(x,Y,p,ne,h,y),so(p,A,j,ne,h,y),di(i,H,n,C,y,W),ui(o,H,I,C),T.set(T.get()+.02),mt-=20,pe++}let le=mt/20,ye=r.getComputedStyle(e.host),be=Vn(ye,"--sg-tile-color-"),ve=Vn(ye,"--sg-color-");(function(ie,Ze,qe,Te,oe,$e,et,tt,nt,ot,Xe,it,Je,Ie,Re,ue,He){let me=Ze.get(),Ue=qe.get(),Nt=et.get(),Oe=Je.get(),Mt=Ie.player.x+(me.x-Ie.player.x)*Re,Bt=Ie.player.y+(me.y-Ie.player.y)*Re,Le=Ie.camera.x+(Ue.x-Ie.camera.x)*Re,he=Ie.camera.y+(Ue.y-Ie.camera.y)*Re,$=ie?.getContext("2d");if(!$)return;$.fillStyle=ue.air,$.fillRect(0,0,ie.width,ie.height);let we=Math.ceil(ie.width/oe)+1,Vt=Math.ceil(ie.height/oe)+1,Ne=Math.floor(Le/oe),De=Math.floor(he/oe);for(let fe=0;fe<we;fe++)for(let Se=0;Se<Vt;Se++){let u=Ne+fe,b=De+Se;if(u>=0&&u<nt&&b>=0&&b<tt){let m=Nt.getTile(u,b);if(!m||m===Te.AIR)continue;let G=bi(m,Te,$e)?"xray":Mo(Te,m.id);$.fillStyle=ue[G.toLowerCase().replace(/_/g,"-")],$.fillRect(Math.round(fe*oe-Le%oe),Math.round(Se*oe-he%oe),oe,oe)}}let Me=Mt-Le,Be=Bt-he;$.fillStyle=me.color,$.fillRect(Me,Be,me.width,me.height),$.strokeStyle=He.black,$.lineWidth=1,$.strokeRect(Me,Be,me.width,me.height),$.fillStyle=He.black,$.fillRect(Me+1,Be+1,1,1),$.fillRect(Me+4,Be+1,1,1);let Ve=ot.get()==="fog";if(Ve&&Oe.updateFromPlayer(Ze,oe),Ve&&$&&ie){let fe={get:()=>({x:Le,y:he})};if(Xe.get())Oe.renderScaled($,ie,oe,fe,it.get());else{let{velocityX:Se,velocityY:u}=me;(Math.abs(Se)>.1||Math.abs(u)>.1)&&Xe.set(!0),Oe.render($,ie,oe,fe)}}})(d,H,R,p,C,z,ne,h,y,l,c,a,B,je,le,be,ve),requestAnimationFrame(async()=>await po(r,e,i,o,d,n,l,a,s,g,c,t,I,C,p,A,h,y,W,R,B,T,x,Y,H,z,j,ne))}async function hi(r,e,i){if(e.dispatchEvent(new CustomEvent("loading",{detail:{isLoading:!1,error:null},bubbles:!0,composed:!0})),!i){let C="HTML canvas is required to init Sprite Garden.";return console.error(C),void e.dispatchEvent(new CustomEvent("loading",{detail:{isLoading:!1,error:C},bubbles:!0,composed:!0}))}e.addEventListener("focusout",C=>{i.focus()}),i.focus();let o={},d="1";try{o=await(await fetch("data:text/html;base64,ewogICJuYW1lIjogInNwcml0ZS1nYXJkZW4iLAogICJ2ZXJzaW9uIjogIjEuMTguMCIsCiAgImRlc2NyaXB0aW9uIjogIlNwcml0ZSBHYXJkZW4gLSBHcm93IFNwcml0ZXMiLAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20va2hlcnJpY2svc3ByaXRlLWdhcmRlbi8jc3ByaXRlLWdhcmRlbiIsCiAgImxpY2Vuc2UiOiAiQUdQTC0zLjAiLAogICJhdXRob3IiOiAiS2FybCBIZXJyaWNrIDxtZUBrYXJsaGVycmljay5jb20+IiwKICAidHlwZSI6ICJtb2R1bGUiLAogICJtYWluIjogImJpbi9zZXJ2ZS5tanMiLAogICJtb2R1bGUiOiAiaW5kZXgubWpzIiwKICAiZXhwb3J0cyI6IHsKICAgICIuIjogewogICAgICAiaW1wb3J0IjogIi4vc3ByaXRlLWdhcmRlbi1idW5kbGUtbWluLm1qcyIKICAgIH0KICB9LAogICJzY3JpcHRzIjogewogICAgImJ1aWxkOmJhc2U6YWJvdXQiOiAiYmluL2J1aWxkLWh0bWwubWpzIGRpc3QvYWJvdXQvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4OnVuYnVuZGxlZCI6ICJiaW4vYnVpbGQtaHRtbC5tanMgZGlzdC9pbmRleF91bmJ1bmRsZWQuaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpiYXNlOmluZGV4IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L2luZGV4Lmh0bWwgYmFzZSBocmVmIC9zcHJpdGUtZ2FyZGVuLyIsCiAgICAiYnVpbGQ6YmFzZTpwcml2YWN5IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L3ByaXZhY3kvaW5kZXguaHRtbCBiYXNlIGhyZWYgL3Nwcml0ZS1nYXJkZW4vIiwKICAgICJidWlsZDpjaSI6ICJucHggY29uY3VycmVudGx5IC0ta2lsbC1vdGhlcnMgLS1zdWNjZXNzIGZpcnN0IFwibnBtIHJ1biBidWlsZCBzaW5nbGVcIiBcIm5wbSBydW4gc3RhcnQ6ZGV2XCIiLAogICAgImJ1aWxkOmdoLXBhZ2VzOm5vamVreWxsIjogIm5vZGUgYmluL3RvdWNoLW5vamVreWxsLm1qcyIsCiAgICAiYnVpbGQ6cGtnOm1ldGEiOiAibm9kZSAtZSBcImltcG9ydCBmcyBmcm9tICdub2RlOmZzL3Byb21pc2VzJzsgaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbicgd2l0aCB7IHR5cGU6ICdqc29uJyB9OyAoYXN5bmMgKCkgPT4geyBjb25zdCBtZXRhID0gcHJvY2Vzcy5hcmd2WzFdOyBwa2dbJ3Nwcml0ZS1nYXJkZW4nXSA9IHsgbWV0YSB9OyBhd2FpdCBmcy53cml0ZUZpbGUoJ2Rpc3QvcGFja2FnZS5qc29uJywgSlNPTi5zdHJpbmdpZnkocGtnLCBudWxsLCAyKSk7IH0pKClcIiIsCiAgICAiYnVpbGQ6cGtnOmdldDptZXRhIjogImdpdCByZXYtcGFyc2UgSEVBRCIsCiAgICAiYnVpbGQ6c2NyaXB0OmluZGV4IjogImJpbi9idWlsZC1odG1sLm1qcyBkaXN0L2luZGV4Lmh0bWwgc2NyaXB0IHNyYyBzcHJpdGUtZ2FyZGVuLWJ1bmRsZS1taW4ubWpzIiwKICAgICJidWlsZDpzZXJ2aWNlLXdvcmtlciI6ICJjZCBkaXN0ICYmIHdvcmtib3ggZ2VuZXJhdGVTVyBzZXJ2aWNlLXdvcmtlci93b3JrYm94LWNvbmZpZy5janMiLAogICAgImJ1aWxkOnNpbmdsZTpidW5kbGU6Y2xlYW4iOiAiZ2l0IGNoZWNrb3V0IEhFQUQgLS0gc3JjIiwKICAgICJidWlsZDpzaW5nbGU6YnVuZGxlIjogImJpbi9iYXNlNjQtZW5jb2RlLWJ1bmRsZS1yZXF1ZXN0cy5zaCIsCiAgICAiYnVpbGQ6c2luZ2xlOmluZGV4OmNsZWFuIjogImdpdCBjaGVja291dCBIRUFEIC0tIGluZGV4Lmh0bWwiLAogICAgImJ1aWxkOnNpbmdsZTppbmRleCI6ICJiaW4vYmFzZTY0LWVuY29kZS1pbmRleC1yZXF1ZXN0cy5zaCIsCiAgICAiYnVpbGQiOiAiYmFzaCBiaW4vYnVpbGQuc2giLAogICAgImJ1bmRsZSI6ICJyb2xsdXAgLWMiLAogICAgImNsZWFuOnNlcnZpY2Utd29ya2VyIjogIm5vZGUgYmluL3JpbXJhZi5tanMgZGlzdC9zZXJ2aWNlLXdvcmtlci8qLmNqcyIsCiAgICAiY2xlYW4iOiAibm9kZSBiaW4vcmltcmFmLm1qcyBkaXN0IiwKICAgICJjb3B5OjQwNCI6ICJub2RlIGJpbi9uY3AubWpzIDQwNC5odG1sIGRpc3QvNDA0Lmh0bWwiLAogICAgImNvcHk6YWJvdXQiOiAibm9kZSBiaW4vbmNwLm1qcyBhYm91dC9pbmRleC5odG1sIGRpc3QvYWJvdXQvaW5kZXguaHRtbCIsCiAgICAiY29weTpkZXBzIjogIm5vZGUgYmluL25jcC5tanMgZGVwcyBkaXN0L2RlcHMiLAogICAgImNvcHk6aW5kZXg6YXNzZXRzIjogIm5vZGUgYmluL25jcC5tanMgYXNzZXRzIGRpc3QvYXNzZXRzIiwKICAgICJjb3B5OmluZGV4OmxpY2Vuc2UiOiAibm9kZSBiaW4vbmNwLm1qcyBMSUNFTlNFIGRpc3QvTElDRU5TRSIsCiAgICAiY29weTppbmRleDptYW5pZmVzdCI6ICJub2RlIGJpbi9uY3AubWpzIG1hbmlmZXN0Lmpzb24gZGlzdC9tYW5pZmVzdC5qc29uIiwKICAgICJjb3B5OmluZGV4OnJlYWRtZSI6ICJub2RlIGJpbi9uY3AubWpzIFJFQURNRS5tZCBkaXN0L1JFQURNRS5tZCIsCiAgICAiY29weTppbmRleDpyb2JvdHMiOiAibm9kZSBiaW4vbmNwLm1qcyByb2JvdHMudHh0IGRpc3Qvcm9ib3RzLnR4dCIsCiAgICAiY29weTppbmRleDpsbG1zIjogIm5vZGUgYmluL25jcC5tanMgbGxtcy50eHQgZGlzdC9sbG1zLnR4dCIsCiAgICAiY29weTppbmRleDpzaXRlbWFwIjogIm5vZGUgYmluL25jcC5tanMgc2l0ZW1hcC50eHQgZGlzdC9zaXRlbWFwLnR4dCIsCiAgICAiY29weTppbmRleDp1bmJ1bmRsZWQiOiAibm9kZSBiaW4vbmNwLm1qcyBpbmRleC5odG1sIGRpc3QvaW5kZXhfdW5idW5kbGVkLmh0bWwiLAogICAgImNvcHk6aW5kZXgiOiAibm9kZSBiaW4vbmNwLm1qcyBpbmRleC5odG1sIGRpc3QvaW5kZXguaHRtbCIsCiAgICAiY29weTpwa2ciOiAibm9kZSBiaW4vbmNwLm1qcyBwYWNrYWdlLmpzb24gZGlzdC9wYWNrYWdlLmpzb24iLAogICAgImNvcHk6cHJpdmFjeSI6ICJub2RlIGJpbi9uY3AubWpzIHByaXZhY3kvaW5kZXguaHRtbCBkaXN0L3ByaXZhY3kvaW5kZXguaHRtbCIsCiAgICAiY29weTpzZXJ2aWNlLXdvcmtlciI6ICJub2RlIGJpbi9uY3AubWpzIHNlcnZpY2Utd29ya2VyIGRpc3Qvc2VydmljZS13b3JrZXIiLAogICAgImNvcHk6c3JjOmluZGV4IjogIm5vZGUgYmluL25jcC5tanMgaW5kZXgubWpzIGRpc3QvaW5kZXgubWpzIiwKICAgICJjb3B5OnNyYyI6ICJub2RlIGJpbi9uY3AubWpzIHNyYyBkaXN0L3NyYyIsCiAgICAiZGVwbG95OmdoLXBhZ2VzIjogImdoLXBhZ2VzIC0tbm8taGlzdG9yeSAtLWRvdGZpbGVzIC0tZGlzdCBkaXN0IC0tcmVwbyBnaXRAZ2l0aHViLmNvbTpraGVycmljay9zcHJpdGUtZ2FyZGVuLmdpdCAtLXJlbW90ZSB1cHN0cmVhbSIsCiAgICAiZm9ybWF0IjogInByZXR0aWVyICoqLyoue2h0bWwsY3NzLGpzLG1qc30gLS13cml0ZSIsCiAgICAibWluaWZ5OjQwNCI6ICJwb3N0aHRtbCBkaXN0LzQwNC5odG1sIC11IGh0bWxuYW5vIiwKICAgICJtaW5pZnk6YWJvdXQiOiAicG9zdGh0bWwgZGlzdC9hYm91dC8qLmh0bWwgLXUgaHRtbG5hbm8iLAogICAgIm1pbmlmeTppbmRleCI6ICJwb3N0aHRtbCBkaXN0L2luZGV4Lmh0bWwgLXUgaHRtbG5hbm8iLAogICAgIm1pbmlmeTpwcml2YWN5IjogInBvc3RodG1sIGRpc3QvcHJpdmFjeS8qLmh0bWwgLXUgaHRtbG5hbm8iLAogICAgInN0YXJ0OmRldiI6ICJucG0gc3RhcnQgODA4MCIsCiAgICAic3RhcnQiOiAibm9kZSBiaW4vc2VydmUubWpzIiwKICAgICJ0ZXN0IjogIk5PREVfT1BUSU9OUz0tLWV4cGVyaW1lbnRhbC12bS1tb2R1bGVzIGplc3QiLAogICAgImUyZSI6ICJucHggcGxheXdyaWdodCBpbnN0YWxsICYmIG5weCBjb25jdXJyZW50bHkgLS1raWxsLW90aGVycyAtLXN1Y2Nlc3MgZmlyc3QgXCJucHggcGxheXdyaWdodCB0ZXN0XCIgXCJucG0gcnVuIHN0YXJ0OmRldlwiIgogIH0sCiAgImRldkRlcGVuZGVuY2llcyI6IHsKICAgICJAcGxheXdyaWdodC90ZXN0IjogIl4xLjU2LjEiLAogICAgIkByb2xsdXAvcGx1Z2luLXRlcnNlciI6ICJeMC40LjQiLAogICAgIkB4bWxkb20veG1sZG9tIjogIl4wLjguMTEiLAogICAgImNvbXByZXNzaW9uIjogIl4xLjguMSIsCiAgICAiY29uY3VycmVudGx5IjogIl45LjIuMSIsCiAgICAiY29ycyI6ICJeMi44LjUiLAogICAgImNzc25hbm8iOiAiXjcuMS4xIiwKICAgICJleHByZXNzIjogIl41LjEuMCIsCiAgICAiZXhwcmVzcy11cmxyZXdyaXRlIjogIl4yLjAuMyIsCiAgICAiZ2gtcGFnZXMiOiAiXjYuMy4wIiwKICAgICJodG1sbmFubyI6ICJeMi4xLjUiLAogICAgImplc3QiOiAiXjMwLjIuMCIsCiAgICAiamVzdC1lbnZpcm9ubWVudC1qc2RvbSI6ICJeMzAuMi4wIiwKICAgICJwb3N0Y3NzIjogIl44LjUuNiIsCiAgICAicG9zdGNzcy1jbGkiOiAiXjExLjAuMSIsCiAgICAicG9zdGh0bWwtY2xpIjogIl4wLjEwLjAiLAogICAgInByZXR0aWVyIjogIl4zLjYuMiIsCiAgICAicm9sbHVwIjogIl4yLjc5LjIiLAogICAgInRjcC1wb3J0LXVzZWQiOiAiXjEuMC4yIiwKICAgICJ3b3JrYm94LWNsaSI6ICJeNy4zLjAiCiAgfQp9Cg==")).json(),d=o.version}catch{console.log(`continuing with static version: ${d}`)}let{gameConfig:n,gameState:l}=Xo(r,d),a=r.document;e.host.keys={},e.host.touchKeys={};let s=await Jo(r,e);Qo(a,e,n.fogMode,l.viewMode),ri(r,a,e),li(r,e),ai(r,e),gi(e),Ho(e,io.totalSeeds,n.breakMode,n.fogMode,n.worldSeed,l.gameTime,l.materialsInventory,l.seedInventory,l.selectedMaterialType,l.selectedSeedType,l.viewMode);let g=n.WORLD_HEIGHT.get(),c=n.WORLD_WIDTH.get();if(!await(async function(C,p){try{let A=await Q.getItem(Wt);if(!A)return!1;let h=C.document.createElement("dialog");h.style.cssText=`
      background: var(--sg-color-gray-50);
      border-radius: 0.5rem;
      border: 0.125rem solid var(--sg-color-gray-900);
      color: var(--sg-color-gray-900);
      font-family: monospace;
      padding: 1.25rem;
      max-width: 25rem;
      z-index: 10000;
    `;let y=new Date(A.timestamp).toLocaleString();return h.innerHTML=`
      <h3 style="margin: 0 0 1rem 0">Auto-Save Detected</h3>
      <p style="margin: 0 0 1rem 0">
        A saved game from ${y} was found. Would you like to load it?
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
    `,p.append(h),h.showModal(),new Promise(W=>{h.querySelector("#autoSaveYes").addEventListener("click",async()=>{try{let R=Qn(C,A.data,"application/gzip"),B;if(!("DecompressionStream"in C))throw new Error("DecompressionStream not supported");{let z=R.stream().pipeThrough(new DecompressionStream("gzip"));B=await(await new Response(z).blob()).text()}let T=JSON.parse(B);hn(C,p,T);let{worldSeed:x}=T.config,Y=p.getElementById("worldSeedInput"),H=p.getElementById("currentSeed");Y&&(Y.value=x),H&&(H.textContent=x),console.log("Auto-save loaded successfully")}catch(R){console.error("Failed to load auto-save:",R)}h.close(),h.remove(),W(!0)}),h.querySelector("#autoSaveNo").addEventListener("click",()=>{h.close(),h.remove(),W(!1)})})}catch(A){return console.error("Failed to check for auto-save:",A),!1}})(r,e)){let C=Qe(n.BIOMES,n.SURFACE_LEVEL.get(),n.TILE_SIZE.get(),n.TILES,g,c,n.worldSeed,l.gameTime,l.growthTimers,l.plantStructures,l.player,l.seedInventory);l.world.set(C);let p=St(n.isFogScaled,g,c,s);l.exploredMap.set(p)}setInterval(async()=>{await Zt()==="auto"&&await wt(r)},6e4),ci({cnvs:i,camera:l.camera,scale:n.canvasScale.get(),tiles:n.TILES,tileSize:n.TILE_SIZE.get(),worldHeight:n.WORLD_HEIGHT.get(),worldWidth:n.WORLD_WIDTH.get(),world:l.world}),Lt(e,n);let I=await Q.setItem("sprite-garden-version",d);console.log(`Sprite Garden version: ${I}`),await po(r,e,e.getElementById("currentBiome"),e.getElementById("currentDepth"),i,n.BIOMES,n.fogMode,n.fogScale,n.FRICTION.get(),n.GRAVITY.get(),n.isFogScaled,n.MAX_FALL_SPEED.get(),n.SURFACE_LEVEL.get(),n.TILE_SIZE.get(),n.TILES,n.waterPhysics,n.WORLD_HEIGHT.get(),n.WORLD_WIDTH.get(),n.worldSeed,l.camera,l.exploredMap,l.gameTime,l.growthTimers,l.plantStructures,l.player,l.viewMode,l.waterPhysicsQueue,l.world),e.getElementById("loading").setAttribute("hidden","hidden"),e.dispatchEvent(new CustomEvent("loading",{detail:{isLoading:!1,pkg:o,error:null},bubbles:!0,composed:!0}))}var Kn="sprite-garden",An=class extends HTMLElement{constructor(){if(super(),!this.shadowRoot){let e=globalThis.document.createElement("template");e.innerHTML=`
        <style>
          [hidden] {
            display: none;
          }

          :focus {
            outline: none;
          }

          :host {
            align-items: center;
            display: flex;
            height: var(--sg-host-height, 100vh);
            height: var(--sg-host-height, 100dvh);
            justify-content: center;
            overflow: var(--sg-host-overflow, hidden);
            position: relative;
            width: var(--sg-host-width, 100vw);
            width: var(--sg-host-width, 100dvw);

            --sg-color-amber-500: #f39c12;
            --sg-color-amber-800: #8b4513;
            --sg-color-amber-900: #654321;
            --sg-color-black-alpha-80: #00000099;
            --sg-color-black-transparent: #000000cc;
            --sg-color-black: #000;
            --sg-color-blue-400: #4a90e2;
            --sg-color-blue-500: #2196f3;
            --sg-color-blue-700: #0066cc;
            --sg-color-emerald-600: #45a049;
            --sg-color-emerald-700: #27ae60;
            --sg-color-gray-100: #eee;
            --sg-color-gray-200: #e3e3e3;
            --sg-color-gray-300: #e0e0e0;
            --sg-color-gray-400: #ddd;
            --sg-color-gray-50: #f0f0f0;
            --sg-color-gray-500: #ccc;
            --sg-color-gray-600: #bbb;
            --sg-color-gray-700: #888;
            --sg-color-gray-800: #666666;
            --sg-color-gray-900: #333;
            --sg-color-gray-alpha-30: #ffffff4d;
            --sg-color-gray-alpha-50: #ffffff33;
            --sg-color-gray-alpha-70: #ffffff1a;
            --sg-color-green-500: #4caf50;
            --sg-color-neutral-950: #555;
            --sg-color-orange-500: #ff6b35;
            --sg-color-red-500: #ff4444;
            --sg-color-sky-50: #e6f3ff;
            --sg-color-stone-100: #f1f1f1;
            --sg-color-stone-50: #fffafa;
            --sg-color-white: #fff;

            --sg-tile-color-agave-base: #32cd32;
            --sg-tile-color-agave-flower-stalk: #9acd32;
            --sg-tile-color-agave-flower: #ffff00;
            --sg-tile-color-agave-growing: #adff2f;
            --sg-tile-color-agave-spike: #7cfc00;
            --sg-tile-color-agave: #7cfc00;
            --sg-tile-color-air: #87ceeb;
            --sg-tile-color-bamboo-growing: #98fb98;
            --sg-tile-color-bamboo-joint: #6b8e23;
            --sg-tile-color-bamboo-leaves: #32cd32;
            --sg-tile-color-bamboo-stalk: #90ee90;
            --sg-tile-color-bamboo: #90ee90;
            --sg-tile-color-bedrock: #1c1c1c;
            --sg-tile-color-berry-bush-berries: #dc143c;
            --sg-tile-color-berry-bush-branch: #8b4513;
            --sg-tile-color-berry-bush-growing: #cd5c5c;
            --sg-tile-color-berry-bush-leaves: #228b22;
            --sg-tile-color-berry-bush: #dc143c;
            --sg-tile-color-birch-bark: #ffffff;
            --sg-tile-color-birch-branches: #8b7355;
            --sg-tile-color-birch-catkins: #f0e68c;
            --sg-tile-color-birch-growing: #fffacd;
            --sg-tile-color-birch-leaves: #98fb98;
            --sg-tile-color-birch-trunk: #f5f5dc;
            --sg-tile-color-birch: #f5f5dc;
            --sg-tile-color-cactus-body: #2e8b57;
            --sg-tile-color-cactus-flower: #ff69b4;
            --sg-tile-color-cactus-growing: #228b22;
            --sg-tile-color-cactus: #32cd32;
            --sg-tile-color-carrot-growing: #ff7f50;
            --sg-tile-color-carrot-leaves: #228b22;
            --sg-tile-color-carrot-root: #ff6347;
            --sg-tile-color-carrot: #ff8c00;
            --sg-tile-color-clay: #cd853f;
            --sg-tile-color-cloud: #c5d1d3ff;
            --sg-tile-color-coal: #2f4f4f;
            --sg-tile-color-corn-ear: #f0e68c;
            --sg-tile-color-corn-growing: #eee8aa;
            --sg-tile-color-corn-leaves: #6b8e23;
            --sg-tile-color-corn-silk: #deb887;
            --sg-tile-color-corn-stalk: #9acd32;
            --sg-tile-color-corn: #f0e68c;
            --sg-tile-color-dirt: #8b4513;
            --sg-tile-color-fern-frond: #3cb371;
            --sg-tile-color-fern-growing: #90ee90;
            --sg-tile-color-fern-stem: #556b2f;
            --sg-tile-color-fern: #3cb371;
            --sg-tile-color-gold: #ffd700;
            --sg-tile-color-grass: #90ee90;
            --sg-tile-color-ice: #b0e0e6;
            --sg-tile-color-iron: #b87333;
            --sg-tile-color-kelp-blade: #2e8b57;
            --sg-tile-color-kelp-bulb: #4f7942;
            --sg-tile-color-kelp-growing: #8fbc8f;
            --sg-tile-color-kelp: #2f4f2f;
            --sg-tile-color-lava: #ff4500;
            --sg-tile-color-lavender-bush: #8a7fc8;
            --sg-tile-color-lavender-flowers: #9370db;
            --sg-tile-color-lavender-growing: #dda0dd;
            --sg-tile-color-lavender-stem: #556b2f;
            --sg-tile-color-lavender: #9370db;
            --sg-tile-color-loading-pixel: #87ceeb;
            --sg-tile-color-lotus-bud: #ffb6d9;
            --sg-tile-color-lotus-flower: #ffc0cb;
            --sg-tile-color-lotus-growing: #ffe4e1;
            --sg-tile-color-lotus-pad: #3cb371;
            --sg-tile-color-lotus-stem: #2e8b57;
            --sg-tile-color-lotus: #ffc0cb;
            --sg-tile-color-moss: #556b2f;
            --sg-tile-color-mushroom-cap: #8b0000;
            --sg-tile-color-mushroom-growing: #cd5c5c;
            --sg-tile-color-mushroom-stem: #d2691e;
            --sg-tile-color-mushroom: #8b0000;
            --sg-tile-color-pine-cone: #8b7355;
            --sg-tile-color-pine-needles: #2e5930;
            --sg-tile-color-pine-tree-growing: #556b2f;
            --sg-tile-color-pine-tree: #2e5930;
            --sg-tile-color-pine-trunk: #8b4513;
            --sg-tile-color-pumice: #b8a99a;
            --sg-tile-color-pumpkin-fruit: #ff8c00;
            --sg-tile-color-pumpkin-growing: #ffa54f;
            --sg-tile-color-pumpkin-leaves: #9acd32;
            --sg-tile-color-pumpkin-stem: #8b4513;
            --sg-tile-color-pumpkin-vine: #6b8e23;
            --sg-tile-color-pumpkin: #ff8c00;
            --sg-tile-color-rose-bloom: #dc143c;
            --sg-tile-color-rose-bud: #cd5c5c;
            --sg-tile-color-rose-growing: #f08080;
            --sg-tile-color-rose-leaves: #2f4f2f;
            --sg-tile-color-rose-stem: #654321;
            --sg-tile-color-rose-thorns: #8b4513;
            --sg-tile-color-rose: #dc143c;
            --sg-tile-color-sand: #f4a460;
            --sg-tile-color-snow: #fffafa;
            --sg-tile-color-stone: #696969;
            --sg-tile-color-sunflower-center: #8b4513;
            --sg-tile-color-sunflower-growing: #ffec8b;
            --sg-tile-color-sunflower-leaves: #228b22;
            --sg-tile-color-sunflower-petals: #ffd700;
            --sg-tile-color-sunflower-stem: #8b7355;
            --sg-tile-color-sunflower: #ffd700;
            --sg-tile-color-tree-growing: #9acd32;
            --sg-tile-color-tree-leaves: #228b22;
            --sg-tile-color-tree-trunk: #59392b;
            --sg-tile-color-tulip-bulb: #8b4513;
            --sg-tile-color-tulip-growing: #ffb6c1;
            --sg-tile-color-tulip-leaves: #228b22;
            --sg-tile-color-tulip-petals: #ff1493;
            --sg-tile-color-tulip-stem: #6b8e23;
            --sg-tile-color-tulip: #ff1493;
            --sg-tile-color-walnut: #654321;
            --sg-tile-color-water: #4169e1;
            --sg-tile-color-wheat-grain: #ffd700;
            --sg-tile-color-wheat-growing: #9acd32;
            --sg-tile-color-wheat-stalk: #8b7355;
            --sg-tile-color-wheat: #daa520;
            --sg-tile-color-willow-branches: #8fbc8f;
            --sg-tile-color-willow-leaves: #9acd32;
            --sg-tile-color-willow-tree-growing: #9bcd9b;
            --sg-tile-color-willow-tree: #8fbc8f;
            --sg-tile-color-willow-trunk: #8b7355;
            --sg-tile-color-wood: #362200;
            --sg-tile-color-xray: #6464644d;
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
            background: var(--sg-tile-color-loading-pixel);
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
            max-height: var(--sg-ui-grid--corner-max-height, calc(100vh - 1rem));
            max-height: var(--sg-ui-grid--corner-max-height, calc(100dvh - 1rem));
            overflow-y: auto;
            pointer-events: auto;
            transition: height 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.5);
          }

          .ui-grid__corner--heading {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-transparent);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-70);
            color: var(--sg-color-white);
            cursor: pointer;
            font-size: 0.75rem;
            padding: 0.75rem;
          }

          .ui-grid__corner--container {
            padding: 0.5rem;
          }

          #controls .ui-grid__corner--container {
            cursor: pointer;
          }

          .ui-grid__corner--sub-heading {
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
            background: var(--sg-color-black-transparent);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-70);
            color: var(--sg-color-white);
          }

          /* Settings Panel */
          #settings {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-transparent);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-70);
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
            background: var(--sg-color-black-transparent);
            border-radius: 0.5rem;
            border-top: 0.0625rem solid var(--sg-color-gray-500);
            border: 0.0625rem solid var(--sg-color-gray-alpha-70);
            bottom: 1.625rem;
            color: var(--sg-color-white);
          }

          /* Controls Panel */
          #controls {
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-transparent);
            border-radius: 0.5rem;
            border: 0.0625rem solid var(--sg-color-gray-alpha-70);
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
            bottom: var(--sg-touch-controls-bottom, 6rem);
            position: var(--sg-touch-controls-position, absolute);
            width: var(--sg-touch-controls-width, 100%);
          }

          .touch-btn {
            align-items: center;
            backdrop-filter: blur(0.3125rem);
            background: var(--sg-color-black-alpha-60);
            border-radius: 50%;
            border: 0.125rem solid var(--sg-color-gray-alpha-30);
            color: var(--sg-color-white);
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
            background: var(--sg-color-gray-alpha-50);
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
            background: var(--sg-color-gray-alpha-70);
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
            background: var(--sg-tile-color-berry-bush);
          }

          .seed-btn--bamboo {
            background: var(--sg-tile-color-bamboo);
            color: var(--sg-color-black);
          }

          .seed-btn--sunflower {
            background: var(--sg-tile-color-sunflower);
            color: var(--sg-color-black);
          }

          .seed-btn--corn {
            background: var(--sg-tile-color-corn);
            color: var(--sg-color-black);
          }

          .seed-btn--pine-tree {
            background: var(--sg-tile-color-pine-tree);
          }

          .seed-btn--willow-tree {
            background: var(--sg-tile-color-willow-tree);
            color: var(--sg-color-black);
          }

          .seed-btn--fern {
            background: var(--sg-tile-color-fern);
            color: var(--sg-color-black);
          }

          .seed-btn--tulip {
            background: var(--sg-tile-color-tulip);
          }

          .seed-btn--agave {
            color: var(--sg-color-black);
            background: var(--sg-tile-color-agave);
          }

          .seed-btn--lavender {
            background: var(--sg-tile-color-lavender);
          }

          .seed-btn--kelp {
            background: var(--sg-tile-color-kelp);
          }

          .seed-btn--rose {
            background: var(--sg-tile-color-rose);
          }

          .seed-btn--pumpkin {
            background: var(--sg-tile-color-pumpkin);
          }

          .seed-btn--lotus {
            color: var(--sg-color-black);
            background: var(--sg-tile-color-lotus);
          }

          .seed-btn--birch {
            color: var(--sg-color-black);
            background: var(--sg-tile-color-birch);
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
            background: var(--sg-tile-color-air);
            color: var(--sg-color-black);
          }

          .tile-btn--sand {
            background: var(--sg-tile-color-sand);
            color: var(--sg-color-black);
          }

          .tile-btn--birch {
            color: var(--sg-color-black);
          }

          .tile-btn--clay {
            background: var(--sg-tile-color-clay);
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
            background: var(--sg-tile-color-cloud);
          }

          .tile-btn--gold {
            background: var(--sg-tile-color-gold);
          }

          .tile-btn--grass {
            background: var(--sg-tile-color-grass);
          }

          .tile-btn--ice {
            background: var(--sg-tile-color-ice);
          }

          .tile-btn--pumice {
            background: var(--sg-tile-color-pumice);
          }

          .tile-btn--snow {
            background: var(--sg-tile-color-snow);
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
            background: var(--sg-tile-color-iron);
          }

          .tile-btn--wheat {
            background: var(--sg-tile-color-wheat);
            color: var(--sg-color-black);
          }

          .tile-btn--carrot {
            background: var(--sg-tile-color-carrot);
          }

          .tile-btn--cactus {
            background: var(--sg-tile-color-cactus);
            color: var(--sg-color-black);
          }

          .tile-btn--tulip {
            background: var(--sg-tile-color-tulip);
          }

          .tile-btn--agave {
            background: var(--sg-tile-color-agave);
            color: var(--sg-color-black);
          }

          .tile-btn--lavender {
            background: var(--sg-tile-color-lavender);
          }

          .tile-btn--kelp {
            background: var(--sg-tile-color-kelp);
          }

          .tile-btn--rose {
            background: var(--sg-tile-color-rose);
          }

          .tile-btn--pumpkin {
            background: var(--sg-tile-color-pumpkin);
          }

          .tile-btn--lotus {
            background: var(--sg-tile-color-lotus);
            color: var(--sg-color-black);
          }

          .tile-btn--birch {
            background: var(--sg-tile-color-birch);
          }

          .tile-btn--coal {
            background: var(--sg-tile-color-coal);
          }

          .tile-btn--dirt {
            background: var(--sg-tile-color-dirt);
          }

          .tile-btn--lava {
            background: var(--sg-tile-color-lava);
          }

          .tile-btn--mushroom {
            background: var(--sg-tile-color-mushroom);
          }

          .tile-btn--stone {
            background: var(--sg-tile-color-stone);
          }

          .tile-btn--tree_trunk {
            background: var(--sg-tile-color-tree-trunk);
          }

          .tile-btn--tree_leaves {
            background: var(--sg-tile-color-tree-leaves);
          }

          .tile-btn--water {
            background: var(--sg-tile-color-water);
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
            background: var(--sg-tile-color-cloud);
          }

          .swatch-grass {
            background: var(--sg-tile-color-grass);
          }

          .swatch-kelp {
            background: var(--sg-tile-color-kelp);
          }

          .swatch-ice {
            background: var(--sg-tile-color-ice);
          }

          .swatch-pumice {
            background: var(--sg-tile-color-pumice);
          }

          .swatch-snow {
            background: var(--sg-tile-color-snow);
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
                  <div id="customizeColorsBtnContainer" hidden="hidden">
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
                <div class="control-instruction">w/\u2191/Space: Jump</div>
                <div class="control-instruction">a/d or \u2190/\u2192: Move</div>
                <div class="control-instruction">f: Plant/Harvest</div>
                <div class="control-instruction">r: Break Block</div>
                <div class="control-instruction">e/x/k: Change scale/mode</div>
                <div class="control-instruction">
                  u/i/o/j/l/m/,/.: Set Block
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
      `,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}}async connectedCallback(){let e=this.shadowRoot,i=e.querySelector("canvas");await hi(globalThis,e,i)}async disconnectedCallback(){await wt(globalThis)}};globalThis.customElements?.get(Kn)||globalThis.customElements?.define(Kn,An);function yo(r,e,i,o){return`
    ${o}

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
        '${i.replaceAll("/",",").replaceAll(",","','")}'
      ],
      ${r}
    );
  `}function vo(r,e){let i=r;for(let o of e){if(!i)return;i=i[o]}return i}function yn(r){return r.replaceAll("/",":")}var pi=["spriteGarden"],yi=["spriteGardenInfo"];function vi(r,e){if(r&1){let i=Yt();ae(0,"sprite-garden",3,0),Xt("loading",function(d){rt(i);let n=gt();return lt(n.handleSpriteGardenEvents(d))}),re()}}function fi(r,e){if(r&1){let i=Yt();ae(0,"div",2,1)(2,"div",4)(3,"section")(4,"header")(5,"h1")(6,"a",5),ge(7,"Sprite Garden"),re()()(),ae(8,"section")(9,"img",6),Xt("click",function(d){rt(i);let n=gt();return lt(n.handleLoad(d))})("keydown",function(d){rt(i);let n=gt();return lt(n.handleLoad(d))}),re(),ae(10,"h2")(11,"a",5),ge(12,"Sprite Garden"),re(),ge(13," is a 2D sandbox exploration and farming game. Learn more at the "),ae(14,"a",7),ge(15,"project page"),re(),ge(16,". "),re(),ae(17,"ul",8)(18,"li"),ge(19,"Procedural World Generation - Explore uniquely generated maps"),re(),ae(20,"li"),ge(21," Multiple Biomes - Forests, deserts, tundras, and swamps, with their own characteristics "),re(),ae(22,"li"),ge(23," Farming System - Plant and harvest different crop types with various growth cycles "),re(),ae(24,"li"),ge(25,"Resource gathering - Dig for items like coal, iron, and gold"),re(),ae(26,"li"),ge(27," Cave Systems - Discover underground caves filled with resources and challenges "),re(),ae(28,"li"),ge(29,"Building - Use collected materials to place blocks and shape the world"),re(),ae(30,"li"),ge(31," Clouds - Continue building and farming while in the sky"),xt(32,"br")(33,"br")(34,"iframe",9),re(),ae(35,"li"),ge(36," Discover - Open source, extendable by nature, map editor, color customization, etc."),xt(37,"br")(38,"br")(39,"iframe",10),re()()()()()()}}var fo=class r{doc=Fe(Zn);isLoading=at(!1);injector=Fe(Wn);resizeObserver;renderSpriteGarden=at(!1);themeService=Fe(Nn);platformId=Fe(wn);canvasEl=at(null);spriteGarden=Ut("spriteGarden");spriteGardenInfo=Ut("spriteGardenInfo");fogMapModuleCommit="fcedc1b40bcafc70866b8bd643acfd82aebdd179";fogMapModuleCommitPath="src/map/fog.mjs";fogMapModuleClassName="FogMap";async ngOnInit(){if(Tn(this.platformId)){let e=`https://raw.githubusercontent.com/kherrick/sprite-garden/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,i=yn(e);if(globalThis.document.getElementById(i))return;let o=await(await fetch(e)).text(),d=globalThis.document.createElement("script");d.setAttribute("type","module"),d.setAttribute("id",i),d.textContent=yo(this.fogMapModuleClassName,this.fogMapModuleCommit,this.fogMapModuleCommitPath,o),globalThis.document.body.append(d)}}constructor(){Gn(this.injector,()=>{Ht(async()=>{let e=globalThis?.spriteGarden,i=this.themeService.theme(),o=e?.state,d=e?.config,n=d?.WORLD_WIDTH?.get(),l=d?.WORLD_HEIGHT?.get(),a;i==="dark"&&(a=ee(U({},o?.exploredMap.get().colors),{"--sg-color-black":"#121212"})),i==="light"&&(a=ee(U({},o?.exploredMap.get().colors),{"--sg-color-black":"#fff"}));let s=`spriteGarden/refs/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`,g=yn(s),t=vo(globalThis,g.split(":"))?.fromObject(ee(U({},o?.exploredMap.get()),{colors:a}),n,l,a);o?.exploredMap.set(t)}),Ht(()=>{let e=this.canvasEl();e&&e.focus()})})}handleLoad(e){if(e.key&&e.key!==" "&&e.key!=="Enter")return;this.renderSpriteGarden.set(!0);let i=(c,t)=>{let I;return(...C)=>{clearTimeout(I),I=setTimeout(()=>c(...C),t)}},o=()=>{let c=(h,y)=>{for(let[W,R]of Object.entries(y))h.style.setProperty(W,R)},t={"--sg-host-height":"calc(100dvh - 5rem)","--sg-host-overflow":"hidden","--sg-host-width":"calc(100vw - 2rem)","--sg-touch-controls-bottom":"2rem","--sg-touch-controls-position":"absolute","--sg-touch-controls-width":"100%","--sg-ui-grid--corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 2rem)"},I={"--sg-host-height":"calc(100dvh - 5rem)","--sg-host-overflow":"hidden","--sg-host-width":"calc(100vw - 7rem)","--sg-touch-controls-bottom":"6rem","--sg-touch-controls-position":"absolute","--sg-touch-controls-width":"100%","--sg-ui-grid--corner-max-height":"calc(100dvh - 5rem)","--sg-ui-grid-height":"calc(100dvh - 6rem)","--sg-ui-grid-width":"calc(100vw - 7rem)"},C=this.spriteGarden()?.nativeElement,p=globalThis.getComputedStyle(globalThis.document.body).width,A=Number(p.slice(0,-2));A<859&&c(C,t),A>=859&&c(C,I)},d=i(()=>{o()},0);typeof ResizeObserver=="function"&&(this.resizeObserver=new ResizeObserver(()=>{d()}),this.resizeObserver.observe(this.doc.body));let n=1e4,l=20,a=0,s=c=>{let t=this.doc.createElement("canvas");return t.width=c.width,t.height=c.height,c.toDataURL()===t.toDataURL()},g=()=>{let t=this.spriteGarden()?.nativeElement?.shadowRoot?.querySelector("canvas");if(t&&!s(t)){this.canvasEl.set(t);return}a<n&&(a+=l,setTimeout(g,l))};g()}handleSpriteGardenEvents(e){let i=this.spriteGarden()?.nativeElement,o=!!e?.detail?.isLoading;this.isLoading.set(o);let d=this.doc.querySelector(".progress");d&&(d.style.display=o?"none":"unset",i&&setTimeout(()=>{d.style.display="none",i.style.display="flex"},0))}ngOnDestroy(){this.resizeObserver?.unobserve(this.doc.body);let e=this.doc.querySelector(".progress");e&&(e.style.display="none")}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=Sn({type:r,selectors:[["x-sprite-garden"]],viewQuery:function(i,o){i&1&&(Jt(o.spriteGarden,pi,5),Jt(o.spriteGardenInfo,yi,5)),i&2&&En(2)},decls:2,vars:1,consts:[["spriteGarden",""],["spriteGardenInfo",""],["sprite-garden-container",""],[3,"loading"],["sprite-garden",""],["href","https://kherrick.github.io/sprite-garden/"],["src","assets/images/sprite-garden-launcher.png","tabindex","0",3,"click","keydown"],["href","https://github.com/kherrick/sprite-garden"],[1,"features"],["allowfullscreen","","frameborder","0","src",kt`//www.youtube.com/embed/Es60fVIyOjY`],["allowfullscreen","","frameborder","0","src",kt`//www.youtube.com/embed/VQbZTvWGXM4`]],template:function(i,o){i&1&&Rn(0,vi,2,0,"sprite-garden")(1,fi,40,0,"div",2),i&2&&Ln(o.renderSpriteGarden()?0:1)},styles:[`@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{--md-outlined-text-field-container-shape: 1rem;--md-outlined-button-container-shape: 1rem;--md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface)}.launcher{cursor:pointer}.features>li{padding-bottom:.5rem}[sprite-garden-container]{align-items:center;color:var(--md-sys-color-on-surface);display:flex;flex-direction:row;flex-wrap:wrap;grid-column-gap:1rem;grid-row-gap:1rem;justify-content:center;text-align:center}[sprite-garden-container] a{color:var(--md-sys-color-on-surface);text-decoration:underline}[sprite-garden-container] [sprite-garden]{max-width:35rem;text-align:center;display:flex;justify-content:center}[sprite-garden-container] [sprite-garden] iframe{height:auto;min-height:17.5625rem;width:100%}[sprite-garden-container] [sprite-garden] img{width:calc(100% - 2rem)}[sprite-garden-container] [sprite-garden] p{padding:0 1rem}[sprite-garden-container] [sprite-garden] ul{padding:0 3rem;text-align:left}sprite-garden{--sg-color-black: var(--x-shell-background-color);display:none}
`],encapsulation:3})};export{fo as XSpriteGardenComponent};
