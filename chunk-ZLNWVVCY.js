var q=Object.create;var h=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,m=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,v=Reflect.get;var l=(a,b,c)=>b in a?h(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,x=(a,b)=>{for(var c in b||={})k.call(b,c)&&l(a,c,b[c]);if(g)for(var c of g(b))n.call(b,c)&&l(a,c,b[c]);return a},y=(a,b)=>r(a,t(b));var z=(a,b)=>{var c={};for(var d in a)k.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&g)for(var d of g(a))b.indexOf(d)<0&&n.call(a,d)&&(c[d]=a[d]);return c};var A=(a,b)=>()=>(a&&(b=a(a=0)),b);var B=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),C=(a,b)=>{for(var c in b)h(a,c,{get:b[c],enumerable:!0})},w=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of u(b))!k.call(a,e)&&e!==c&&h(a,e,{get:()=>b[e],enumerable:!(d=s(b,e))||d.enumerable});return a};var D=(a,b,c)=>(c=a!=null?q(m(a)):{},w(b||!a||!a.__esModule?h(c,"default",{value:a,enumerable:!0}):c,a));var E=(a,b,c)=>v(m(a),c,b);var F=(a,b,c)=>new Promise((d,e)=>{var o=f=>{try{i(c.next(f))}catch(j){e(j)}},p=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(o,p);i((c=c.apply(a,b)).next())});export{x as a,y as b,z as c,A as d,B as e,C as f,D as g,E as h,F as i};