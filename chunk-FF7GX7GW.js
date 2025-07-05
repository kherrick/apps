import{a as yt}from"./chunk-I7AUKTXE.js";var wa=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,Xf=Object.getOwnPropertyNames,Jf=Object.prototype.hasOwnProperty,em=(e=>typeof yt<"u"?yt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof yt<"u"?yt:t)[r]}):e)(function(e){if(typeof yt<"u")return yt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),N=(e,t)=>()=>(e&&(t=e(e=0)),t),ar=(e,t)=>{for(var r in t)wa(e,r,{get:t[r],enumerable:!0})},tm=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Xf(t))!Jf.call(e,a)&&a!==r&&wa(e,a,{get:()=>t[a],enumerable:!(i=Zf(t,a))||i.enumerable});return e},Br=e=>tm(wa({},"__esModule",{value:!0}),e),Lt,lt,Bt,gs,Kl,Ql=N(()=>{"use strict";Lt=new Map,lt=[],Bt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Lt.get(e);if(i===void 0)Lt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=lt.indexOf(e);a!==-1&&lt.splice(a,1);for(let n=0;n<lt.length;n++)if(Lt.get(lt[n]).priority<=r){lt.splice(n,0,e);return}lt.push(e)}return}throw new TypeError("not a valid backend")},gs=async e=>{let t=Lt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Kl=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?lt:r,a,n=[],s=new Set;for(let d of i){let p=await gs(d);typeof p=="string"?n.push({name:d,err:p}):(a||(a=p),a===p&&s.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),rm=N(()=>{"use strict";Ql()}),Yl,im=N(()=>{"use strict";Yl="1.21.0-dev.20250206-d981b153d3"}),pi,Pe,Zl=N(()=>{"use strict";im(),pi="warning",Pe={wasm:{},webgl:{},webgpu:{},versions:{common:Yl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);pi=e}},get logLevel(){return pi}},Object.defineProperty(Pe,"logLevel",{enumerable:!0})}),_e,am=N(()=>{"use strict";Zl(),_e=Pe}),Xl,Jl,nm=N(()=>{"use strict";Xl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=n*a,u=0,m=f,b=f*2,y=-1;s==="RGBA"?(u=0,m=f,b=f*2,y=f*3):s==="RGB"?(u=0,m=f,b=f*2):s==="RBG"&&(u=0,b=f,m=f*2);for(let _=0;_<n;_++)for(let x=0;x<a;x++){let v=(e.data[u++]-p[0])*d[0],$=(e.data[m++]-p[1])*d[1],k=(e.data[b++]-p[2])*d[2],S=y===-1?255:(e.data[y++]-p[3])*d[3];i.fillStyle="rgba("+v+","+$+","+k+","+S+")",i.fillRect(x,_,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Jl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let u=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,b=0,y=1,_=2,x=3,v=0,$=u,k=u*2,S=-1;l==="RGBA"?(v=0,$=u,k=u*2,S=u*3):l==="RGB"?(v=0,$=u,k=u*2):l==="RBG"&&(v=0,k=u,$=u*2),i=r.createImageData(a,n);for(let I=0;I<n*a;b+=m,y+=m,_+=m,x+=m,I++)i.data[b]=(e.data[v++]-f[0])*p[0],i.data[y]=(e.data[$++]-f[1])*p[1],i.data[_]=(e.data[k++]-f[2])*p[2],i.data[x]=S===-1?255:(e.data[S++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),br,ed,td,rd,id,ad,sm=N(()=>{"use strict";va(),br=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),u=4,m=0,b=1,y=2,_=3,x=0,v=p,$=p*2,k=-1;l==="RGB"&&(u=3,m=0,b=1,y=2,_=-1),d==="RGBA"?k=p*3:d==="RBG"?(x=0,$=p,v=p*2):d==="BGR"&&($=0,v=p,x=p*2);for(let S=0;S<p;S++,m+=u,y+=u,b+=u,_+=u)f[x++]=(e[m]+s[0])/n[0],f[v++]=(e[b]+s[1])/n[1],f[$++]=(e[y]+s[2])/n[2],k!==-1&&_!==-1&&(f[k++]=(e[_]+s[3])/n[3]);return d==="RGBA"?new Be("float32",f,[1,4,r,i]):new Be("float32",f,[1,3,r,i])},ed=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=b}else l.tensorFormat="RGBA",l.height=m,l.width=b;u.drawImage(e,0,0),s=u.getImageData(0,0,b,m).data}else throw new Error("Can not access image data")}else if(i){let f,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,u=t.resizedWidth):(f=e.height,u=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=u,t!==void 0){let m=d();m.width=u,m.height=f;let b=p(m);if(b!=null)b.putImageData(e,0,0),s=b.getImageData(0,0,u,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,b=e.width;return u.drawImage(e,0,0,b,m),s=u.getImageData(0,0,b,m).data,l.height=m,l.width=b,br(s,l)}else throw new Error("Can not access image data")}else{if(n)return new Promise((f,u)=>{let m=d(),b=p(m);if(!e||!b)return u();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{m.width=y.width,m.height=y.height,b.drawImage(y,0,0,m.width,m.height);let _=b.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,f(br(_.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return br(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},td=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},rd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},id=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},ad=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),vt,Zt,hi,nd,om=N(()=>{"use strict";vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),hi=!1,nd=()=>{if(!hi){hi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(vt.set("int64",BigInt64Array),Zt.set(BigInt64Array,"int64")),t&&(vt.set("uint64",BigUint64Array),Zt.set(BigUint64Array,"uint64")),r?(vt.set("float16",Float16Array),Zt.set(Float16Array,"float16")):vt.set("float16",Uint16Array)}}}),sd,od,um=N(()=>{"use strict";va(),sd=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},od=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,va=N(()=>{"use strict";nm(),sm(),om(),um(),Be=class{constructor(e,t,r){nd();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=vt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=vt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Zt.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let n=sd(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return ed(e,t)}static fromTexture(e,t){return td(e,t)}static fromGpuBuffer(e,t){return rd(e,t)}static fromMLTensor(e,t){return id(e,t)}static fromPinnedBuffer(e,t,r){return ad(e,t,r)}toDataURL(e){return Xl(this,e)}toImageData(e){return Jl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return od(this,e)}}}),Ze,ud=N(()=>{"use strict";va(),Ze=Be}),Dr,ci,Xe,He,ld=N(()=>{"use strict";Zl(),Dr=(e,t)=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeStamp(`${e}::ORT::${t}`)},ci=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Dr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Xe=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||ci("BEGIN",e)},He=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||ci("END",e)}}),dd,lm=N(()=>{"use strict";Ql(),ud(),ld(),dd=class pd{constructor(t){this.handler=t}async run(t,r,i){Xe();let a={},n={};if(typeof t!="object"||t===null||t instanceof Ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(f.indexOf(u)!==-1){let m=r[u];(m===null||m instanceof Ze)&&(p=!0,s=!1,a[u]=m)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let l=await this.handler.run(t,a,n),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let f=l[p];f instanceof Ze?d[p]=f:d[p]=new Ze(f.type,f.data,f.dims)}return He(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){Xe();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,u=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(m=t.byteLength-u,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||u+m>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-u}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(f,u,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Kl(s),p=await l.createInferenceSessionHandler(n,d);return He(),new pd(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),hd,dm=N(()=>{"use strict";lm(),hd=dd}),pm=N(()=>{"use strict"}),hm=N(()=>{"use strict"}),cm=N(()=>{"use strict"}),fm=N(()=>{"use strict"}),cd={};ar(cd,{InferenceSession:()=>hd,TRACE:()=>Dr,TRACE_FUNC_BEGIN:()=>Xe,TRACE_FUNC_END:()=>He,Tensor:()=>Ze,env:()=>_e,registerBackend:()=>Bt});var Ge=N(()=>{"use strict";rm(),am(),dm(),ud(),pm(),hm(),ld(),cm(),fm()}),xa=N(()=>{"use strict"}),fd={};ar(fd,{default:()=>md});var fi,mi,md,mm=N(()=>{"use strict";_c(),It(),ka(),fi="ort-wasm-proxy-worker",mi=globalThis.self?.name===fi,mi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Sa(r.wasm).then(()=>{Va(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ha(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=qr(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Ga(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Fa(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:l}=r;ja(i,a,n,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Qa([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Ka(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),md=mi?null:e=>new Worker(e??Re,{type:"module",name:fi})}),gd={};ar(gd,{default:()=>yd});var gi,yi,yd,gm=N(()=>{"use strict";yi=(gi=import.meta.url,async function(e={}){function t(){return Z.buffer!=te.buffer&&Ee(),te}function r(){return Z.buffer!=te.buffer&&Ee(),X}function i(){return Z.buffer!=te.buffer&&Ee(),ye}function a(){return Z.buffer!=te.buffer&&Ee(),M}function n(){return Z.buffer!=te.buffer&&Ee(),q}function s(){return Z.buffer!=te.buffer&&Ee(),ue}function l(){return Z.buffer!=te.buffer&&Ee(),fe}function d(){return Z.buffer!=te.buffer&&Ee(),ke}var p,f,u=Object.assign({},e),m=new Promise((o,h)=>{p=o,f=h}),b=typeof window=="object",y=typeof importScripts=="function",_=y&&self.name=="em-pthread";u.mountExternalData=(o,h)=>{o.startsWith("./")&&(o=o.substring(2)),(u.Fb||(u.Fb=new Map)).set(o,h)},u.unmountExternalData=()=>{delete u.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let v=()=>{let o=(c,g,w)=>(...T)=>{let O=Ke,B=g?.();T=c(...T);let W=g?.();return B!==W&&(c=W,w(B),g=w=null),Ke!=O?new Promise((H,Y)=>{ii={resolve:H,reject:Y}}):T},h=c=>async(...g)=>{try{if(u.Gb)throw Error("Session already started");let w=u.Gb={hc:g[0],errors:[]},T=await c(...g);if(u.Gb!==w)throw Error("Session mismatch");u.Hb?.flush();let O=w.errors;if(0<O.length){let B=await Promise.all(O);if(B=B.filter(W=>W),0<B.length)throw Error(B.join(`
`))}return T}finally{u.Gb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,c=>u._OrtCreateSession=c),u._OrtRun=h(o(u._OrtRun,()=>u._OrtRun,c=>u._OrtRun=c)),u._OrtRunWithBinding=h(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,c=>u._OrtRunWithBinding=c)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,c=>u._OrtBindInput=c),v=void 0};u.jsepInit=(o,h)=>{if(v?.(),o==="webgpu"){[u.Hb,u.Vb,u.Zb,u.Ob,u.Yb,u.kb,u.$b,u.cc,u.Wb,u.Xb,u.ac]=h;let c=u.Hb;u.jsepRegisterBuffer=(g,w,T,O)=>c.registerBuffer(g,w,T,O),u.jsepGetBuffer=g=>c.getBuffer(g),u.jsepCreateDownloader=(g,w,T)=>c.createDownloader(g,w,T),u.jsepOnCreateSession=g=>{c.onCreateSession(g)},u.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},u.jsepOnRunStart=g=>c.onRunStart(g),u.dc=(g,w)=>{c.upload(g,w)}}else if(o==="webnn"){[u.Hb,u.bc,u.Pb,u.jsepEnsureTensor,u.ec,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Pb;let c=u.Hb;u.jsepOnRunStart=g=>c.onRunStart(g),u.jsepRegisterMLContext=(g,w)=>{c.registerMLContext(g,w)},u.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},u.jsepCreateMLTensorDownloader=(g,w)=>c.createMLTensorDownloader(g,w),u.jsepRegisterMLTensor=(g,w,T)=>c.registerMLTensor(g,w,T),u.jsepCreateMLContext=g=>c.createMLContext(g),u.jsepRegisterMLConstant=(g,w,T,O,B)=>c.registerMLConstant(g,w,T,O,B,u.Fb)}};var $,k,S=Object.assign({},u),I=(o,h)=>{throw h},E="";(b||y)&&(y?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),gi&&(E=gi),E=E.startsWith("blob:")?"":E.substr(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),y&&(k=o=>{var h=new XMLHttpRequest;return h.open("GET",o,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),$=(o,h,c)=>{var g=new XMLHttpRequest;g.open("GET",o,!0),g.responseType="arraybuffer",g.onload=()=>{g.status==200||g.status==0&&g.response?h(g.response):c()},g.onerror=c,g.send(null)});var C,D=console.log.bind(console),P=console.error.bind(console),L=D,V=P;if(Object.assign(u,S),S=null,_){let o=function(h){try{var c=h.data,g=c.cmd;if(g==="load"){let w=[];self.onmessage=T=>w.push(T),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let T of w)o(T);self.onmessage=o};for(let T of c.handlers)u[T]&&!u[T].proxy||(u[T]=(...O)=>{postMessage({Nb:"callHandler",pc:T,args:O})},T=="print"&&(L=u[T]),T=="printErr"&&(V=u[T]));Z=c.wasmMemory,Ee(),U(c.wasmModule)}else if(g==="run"){oi(c.pthread_ptr,0,0,1,0,0),ti(c.pthread_ptr),Rc(),on(),ie||(as(),ie=!0);try{Bc(c.start_routine,c.arg)}catch(w){if(w!="unwind")throw w}}else g==="cancel"?Ot()&&yr(-1):c.target!=="setimmediate"&&(g==="checkMailbox"?ie&&or():g&&(V(`worker: received unknown command ${g}`),V(c)))}catch(w){throw ns(),w}};var ee=o,U,ie=!1;V=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:Ot()})},u.instantiateWasm=(h,c)=>new Promise(g=>{U=w=>{w=new WebAssembly.Instance(w,tn()),c(w),g()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=o}u.wasmBinary&&(C=u.wasmBinary);var Z,G,ne,te,X,ye,M,q,ue,fe,me,Je,ke,ge=!1;function Ee(){var o=Z.buffer;u.HEAP8=te=new Int8Array(o),u.HEAP16=ye=new Int16Array(o),u.HEAPU8=X=new Uint8Array(o),u.HEAPU16=M=new Uint16Array(o),u.HEAP32=q=new Int32Array(o),u.HEAPU32=ue=new Uint32Array(o),u.HEAPF32=fe=new Float32Array(o),u.HEAPF64=ke=new Float64Array(o),u.HEAP64=me=new BigInt64Array(o),u.HEAPU64=Je=new BigUint64Array(o)}if(!_){if(!((Z=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw V("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ee()}var nr=[],Ut=[],zc=[],Wt=0,Lr=null,qt=null;function Ya(){if(--Wt==0&&(Lr!==null&&(clearInterval(Lr),Lr=null),qt)){var o=qt;qt=null,o()}}function at(o){throw V(o="Aborted("+o+")"),ge=!0,ne=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),f(o),o}var Vr,Za=o=>o.startsWith("data:application/octet-stream;base64,"),Xa=o=>o.startsWith("file://");function Ja(o){if(o==Vr&&C)return new Uint8Array(C);if(k)return k(o);throw"both async and sync fetching of the wasm failed"}function en(o,h,c){return function(g){if(!C&&(b||y)){if(typeof fetch=="function"&&!Xa(g))return fetch(g,{credentials:"same-origin"}).then(w=>{if(!w.ok)throw`failed to load wasm binary file at '${g}'`;return w.arrayBuffer()}).catch(()=>Ja(g));if($)return new Promise((w,T)=>{$(g,O=>w(new Uint8Array(O)),T)})}return Promise.resolve().then(()=>Ja(g))}(o).then(g=>WebAssembly.instantiate(g,h)).then(c,g=>{V(`failed to asynchronously prepare wasm: ${g}`),at(g)})}function tn(){return{a:{O:Oc,Aa:Ac,b:Mc,aa:pn,B:fn,qa:mn,Y:yn,_:_n,ra:bn,oa:$n,ha:wn,na:vn,L:xn,Z:kn,W:Sn,pa:Tn,X:In,va:Nc,F:Uc,Q:Wc,P:Lc,E:Hc,u:Gc,q:Fc,G:jc,A:ef,R:tf,ua:rf,ka:af,U:nf,ba:sf,H:of,ja:ti,ta:uf,t:lf,Ba:df,x:cf,o:ff,m:gf,c:Jr,n:yf,k:$f,w:wf,p:vf,f:xf,s:kf,l:Sf,e:Tf,j:If,i:Ef,g:Cf,d:zf,ea:Af,fa:Of,ga:Rf,ca:qn,da:Ln,T:Bf,h:Df,D:Mf,I:Nf,M:Pf,y:Uf,sa:Wf,V:qf,v:Hn,z:Lf,N:Vf,S:Hf,za:Gf,ya:Ff,la:jn,ma:Kn,$:Kr,C:Qn,K:Yn,ia:Zn,J:Xn,a:Z,xa:jr,wa:ts,r:Qf}}}var Hr={916868:(o,h,c,g,w)=>{if(u===void 0||!u.Fb)return 1;if((o=xe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if(h=Number(h>>>0),c=Number(c>>>0),g=Number(g>>>0),h+c>o.byteLength)return 3;try{let T=o.subarray(h,h+c);switch(w){case 0:r().set(T,g>>>0);break;case 1:u.dc(g,T);break;default:return 4}return 0}catch{return 4}},917583:(o,h,c)=>{u.ec(o,r().subarray(h>>>0,h+c>>>0))},917646:()=>u.bc(),917687:o=>{u.Pb(o)},917723:()=>{u.Wb()},917754:()=>{u.Xb()},917783:()=>{u.ac()},917808:o=>u.Vb(o),917841:o=>u.Zb(o),917873:(o,h,c)=>{u.Ob(Number(o),Number(h),Number(c),!0)},917936:(o,h,c)=>{u.Ob(Number(o),Number(h),Number(c))},917993:()=>typeof wasmOffsetConverter<"u",918050:o=>{u.kb("Abs",o,void 0)},918101:o=>{u.kb("Neg",o,void 0)},918152:o=>{u.kb("Floor",o,void 0)},918205:o=>{u.kb("Ceil",o,void 0)},918257:o=>{u.kb("Reciprocal",o,void 0)},918315:o=>{u.kb("Sqrt",o,void 0)},918367:o=>{u.kb("Exp",o,void 0)},918418:o=>{u.kb("Erf",o,void 0)},918469:o=>{u.kb("Sigmoid",o,void 0)},918524:(o,h,c)=>{u.kb("HardSigmoid",o,{alpha:h,beta:c})},918603:o=>{u.kb("Log",o,void 0)},918654:o=>{u.kb("Sin",o,void 0)},918705:o=>{u.kb("Cos",o,void 0)},918756:o=>{u.kb("Tan",o,void 0)},918807:o=>{u.kb("Asin",o,void 0)},918859:o=>{u.kb("Acos",o,void 0)},918911:o=>{u.kb("Atan",o,void 0)},918963:o=>{u.kb("Sinh",o,void 0)},919015:o=>{u.kb("Cosh",o,void 0)},919067:o=>{u.kb("Asinh",o,void 0)},919120:o=>{u.kb("Acosh",o,void 0)},919173:o=>{u.kb("Atanh",o,void 0)},919226:o=>{u.kb("Tanh",o,void 0)},919278:o=>{u.kb("Not",o,void 0)},919329:(o,h,c)=>{u.kb("Clip",o,{min:h,max:c})},919398:o=>{u.kb("Clip",o,void 0)},919450:(o,h)=>{u.kb("Elu",o,{alpha:h})},919508:o=>{u.kb("Gelu",o,void 0)},919560:o=>{u.kb("Relu",o,void 0)},919612:(o,h)=>{u.kb("LeakyRelu",o,{alpha:h})},919676:(o,h)=>{u.kb("ThresholdedRelu",o,{alpha:h})},919746:(o,h)=>{u.kb("Cast",o,{to:h})},919804:o=>{u.kb("Add",o,void 0)},919855:o=>{u.kb("Sub",o,void 0)},919906:o=>{u.kb("Mul",o,void 0)},919957:o=>{u.kb("Div",o,void 0)},920008:o=>{u.kb("Pow",o,void 0)},920059:o=>{u.kb("Equal",o,void 0)},920112:o=>{u.kb("Greater",o,void 0)},920167:o=>{u.kb("GreaterOrEqual",o,void 0)},920229:o=>{u.kb("Less",o,void 0)},920281:o=>{u.kb("LessOrEqual",o,void 0)},920340:(o,h,c,g,w)=>{u.kb("ReduceMean",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920515:(o,h,c,g,w)=>{u.kb("ReduceMax",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920689:(o,h,c,g,w)=>{u.kb("ReduceMin",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920863:(o,h,c,g,w)=>{u.kb("ReduceProd",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921038:(o,h,c,g,w)=>{u.kb("ReduceSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921212:(o,h,c,g,w)=>{u.kb("ReduceL1",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921385:(o,h,c,g,w)=>{u.kb("ReduceL2",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921558:(o,h,c,g,w)=>{u.kb("ReduceLogSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921735:(o,h,c,g,w)=>{u.kb("ReduceSumSquare",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921915:(o,h,c,g,w)=>{u.kb("ReduceLogSumExp",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},922095:o=>{u.kb("Where",o,void 0)},922148:(o,h,c)=>{u.kb("Transpose",o,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[]})},922272:(o,h,c,g)=>{u.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922405:(o,h,c,g)=>{u.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922538:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A,se)=>{u.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[w],pads:[T,O],strides:[B],wIsConst:()=>!!t()[H>>>0],outputPadding:Y?Array.from(n().subarray(Number(Y)>>>0,Number(oe)>>>0)):[],outputShape:pe?Array.from(n().subarray(Number(pe)>>>0,Number(A)>>>0)):[],activation:xe(se)})},922971:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],outputShape:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[],activation:xe(A)})},923632:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A,se)=>{u.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[w],pads:[T,O],strides:[B],wIsConst:()=>!!t()[H>>>0],outputPadding:Y?Array.from(n().subarray(Number(Y)>>>0,Number(oe)>>>0)):[],outputShape:pe?Array.from(n().subarray(Number(pe)>>>0,Number(A)>>>0)):[],activation:xe(se)})},924065:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],outputShape:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[],activation:xe(A)})},924726:(o,h)=>{u.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},924817:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[]})},925296:(o,h)=>{u.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},925387:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[]})},925866:(o,h)=>{u.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},925953:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[]})},926428:(o,h)=>{u.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},926515:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A)=>{u.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(pe)>>>0)):[]})},926990:(o,h,c,g,w)=>{u.kb("Gemm",o,{alpha:h,beta:c,transA:g,transB:w})},927094:o=>{u.kb("MatMul",o,void 0)},927148:(o,h,c,g)=>{u.kb("ArgMax",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927256:(o,h,c,g)=>{u.kb("ArgMin",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927364:(o,h)=>{u.kb("Softmax",o,{axis:h})},927427:(o,h)=>{u.kb("Concat",o,{axis:h})},927487:(o,h,c,g,w)=>{u.kb("Split",o,{axis:h,numOutputs:c,splitSizes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},927643:o=>{u.kb("Expand",o,void 0)},927697:(o,h)=>{u.kb("Gather",o,{axis:Number(h)})},927768:(o,h)=>{u.kb("GatherElements",o,{axis:Number(h)})},927847:(o,h)=>{u.kb("GatherND",o,{batch_dims:Number(h)})},927926:(o,h,c,g,w,T,O,B,W,H,Y)=>{u.kb("Resize",o,{antialias:h,axes:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],coordinateTransformMode:xe(w),cubicCoeffA:T,excludeOutside:O,extrapolationValue:B,keepAspectRatioPolicy:xe(W),mode:xe(H),nearestMode:xe(Y)})},928288:(o,h,c,g,w,T,O)=>{u.kb("Slice",o,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[],ends:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[],axes:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[]})},928552:o=>{u.kb("Tile",o,void 0)},928604:(o,h,c)=>{u.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928718:(o,h,c)=>{u.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928832:o=>{u.kb("Range",o,void 0)},928885:(o,h)=>{u.kb("Einsum",o,{equation:xe(h)})},928966:(o,h,c,g,w)=>{u.kb("Pad",o,{mode:h,value:c,pads:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},929109:(o,h,c,g,w,T)=>{u.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!w,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929278:(o,h,c,g,w,T)=>{u.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!w,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929447:(o,h,c)=>{u.kb("CumSum",o,{exclusive:Number(h),reverse:Number(c)})},929544:(o,h,c)=>{u.kb("DequantizeLinear",o,{axis:h,blockSize:c})},929634:(o,h,c,g,w)=>{u.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:w?"NHWC":"NCHW"})},929804:(o,h,c,g,w)=>{u.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:w?"NHWC":"NCHW"})},929974:(o,h,c,g,w,T,O,B,W)=>{u.kb("Attention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:w,doRotary:T,qkvHiddenSizes:O?Array.from(n().subarray(Number(B)>>>0,Number(B)+O>>>0)):[],pastPresentShareBuffer:!!W})},930246:o=>{u.kb("BiasAdd",o,void 0)},930301:o=>{u.kb("BiasSplitGelu",o,void 0)},930362:o=>{u.kb("FastGelu",o,void 0)},930418:(o,h,c,g,w,T,O,B,W,H,Y,oe,pe,A,se,we)=>{u.kb("Conv",o,{format:oe?"NHWC":"NCHW",auto_pad:h,dilations:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],group:w,kernel_shape:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],pads:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],strides:H?Array.from(n().subarray(Number(H)>>>0,Number(Y)>>>0)):[],w_is_const:()=>!!t()[Number(pe)>>>0],activation:xe(A),activation_params:se?Array.from(l().subarray(Number(se)>>>0,Number(we)>>>0)):[]})},931002:o=>{u.kb("Gelu",o,void 0)},931054:(o,h,c,g,w,T,O,B,W)=>{u.kb("GroupQueryAttention",o,{numHeads:h,kvNumHeads:c,scale:g,softcap:w,doRotary:T,rotaryInterleaved:O,smoothSoftmax:B,localWindowSize:W})},931271:(o,h,c,g)=>{u.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931382:(o,h,c,g)=>{u.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931493:(o,h,c,g,w,T)=>{u.kb("MatMulNBits",o,{k:h,n:c,accuracyLevel:g,bits:w,blockSize:T})},931620:(o,h,c,g,w,T)=>{u.kb("MultiHeadAttention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:w,doRotary:T})},931779:(o,h)=>{u.kb("QuickGelu",o,{alpha:h})},931843:(o,h,c,g,w)=>{u.kb("RotaryEmbedding",o,{interleaved:!!h,numHeads:c,rotaryEmbeddingDim:g,scale:w})},931982:(o,h,c)=>{u.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932084:(o,h,c)=>{u.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932186:(o,h,c,g)=>{u.kb("GatherBlockQuantized",o,{gatherAxis:h,quantizeAxis:c,blockSize:g})},932307:o=>{u.$b(o)},932341:(o,h)=>u.cc(Number(o),Number(h),u.Gb.hc,u.Gb.errors)};function Ac(o,h,c){return Mn(async()=>{await u.Yb(Number(o),Number(h),Number(c))})}function Oc(){return typeof wasmOffsetConverter<"u"}function Gr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Fr=o=>{o.terminate(),o.onmessage=()=>{}},rn=o=>{nt.length==0&&(ln(),un(nt[0]));var h=nt.pop();if(!h)return 6;mt.push(h),Fe[o.Bb]=h,h.Bb=o.Bb;var c={cmd:"run",start_routine:o.ic,arg:o.Rb,pthread_ptr:o.Bb};return h.postMessage(c,o.nc),0},ft=0,be=(o,h,...c)=>{for(var g=2*c.length,w=di(),T=li(8*g),O=T>>>3,B=0;B<c.length;B++){var W=c[B];typeof W=="bigint"?(me[O+2*B]=1n,me[O+2*B+1]=W):(me[O+2*B]=0n,d()[O+2*B+1>>>0]=W)}return o=ss(o,0,g,T,h),_r(w),o};function jr(o){if(_)return be(0,1,o);if(ne=o,!(0<ft)){for(var h of mt)Fr(h);for(h of nt)Fr(h);nt=[],mt=[],Fe=[],ge=!0}I(0,new Gr(o))}function an(o){if(_)return be(1,0,o);Kr(o)}var Kr=o=>{if(ne=o,_)throw an(o),"unwind";jr(o)},nt=[],mt=[],nn=[],Fe={},sn=o=>{var h=o.Bb;delete Fe[h],nt.push(o),mt.splice(mt.indexOf(o),1),o.Bb=0,ui(h)};function on(){nn.forEach(o=>o())}var un=o=>new Promise(h=>{o.onmessage=w=>{var T=(w=w.data).cmd;if(w.targetThread&&w.targetThread!=Ot()){var O=Fe[w.targetThread];O?O.postMessage(w,w.transferList):V(`Internal error! Worker sent a message "${T}" to target pthread ${w.targetThread}, but that thread no longer exists!`)}else T==="checkMailbox"?or():T==="spawnThread"?rn(w):T==="cleanupThread"?sn(Fe[w.thread]):T==="killThread"?(w=w.thread,T=Fe[w],delete Fe[w],Fr(T),ui(w),mt.splice(mt.indexOf(T),1),T.Bb=0):T==="cancelThread"?Fe[w.thread].postMessage({cmd:"cancel"}):T==="loaded"?(o.loaded=!0,h(o)):T==="alert"?alert(`Thread ${w.threadId}: ${w.text}`):w.target==="setimmediate"?o.postMessage(w):T==="callHandler"?u[w.handler](...w.args):T&&V(`worker sent an unknown command ${T}`)},o.onerror=w=>{throw V(`worker sent an error! ${w.filename}:${w.lineno}: ${w.message}`),w};var c,g=[];for(c of[])u.hasOwnProperty(c)&&g.push(c);o.postMessage({cmd:"load",handlers:g,wasmMemory:Z,wasmModule:G})});function ln(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});nt.push(o)}var sr=o=>{for(;0<o.length;)o.shift()(u)},Rc=()=>{var o=Ot(),h=s()[o+52>>>2>>>0];o=s()[o+56>>>2>>>0],us(h,h-o),_r(h)},Bc=(o,h)=>{ft=0,o=ls(o,h),0<ft?ne=o:yr(o)};class Dc{constructor(h){this.Kb=h-24}}function Mc(o,h,c){var g=new Dc(o>>>=0);throw h>>>=0,c>>>=0,s()[g.Kb+16>>>2>>>0]=0,s()[g.Kb+4>>>2>>>0]=h,s()[g.Kb+8>>>2>>>0]=c,o}function dn(o,h,c,g){return _?be(2,1,o,h,c,g):pn(o,h,c,g)}function pn(o,h,c,g){if(o>>>=0,h>>>=0,c>>>=0,g>>>=0,x===void 0)return V("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var w=[];return _&&w.length===0?dn(o,h,c,g):(o={ic:c,Bb:o,Rb:g,nc:w},_?(o.Nb="spawnThread",postMessage(o,w),0):rn(o))}var hn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,cn=(o,h,c)=>{var g=(h>>>=0)+c;for(c=h;o[c]&&!(c>=g);)++c;if(16<c-h&&o.buffer&&hn)return hn.decode(o.buffer instanceof x?o.slice(h,c):o.subarray(h,c));for(g="";h<c;){var w=o[h++];if(128&w){var T=63&o[h++];if((224&w)==192)g+=String.fromCharCode((31&w)<<6|T);else{var O=63&o[h++];65536>(w=(240&w)==224?(15&w)<<12|T<<6|O:(7&w)<<18|T<<12|O<<6|63&o[h++])?g+=String.fromCharCode(w):(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w))}}else g+=String.fromCharCode(w)}return g},xe=(o,h)=>(o>>>=0)?cn(r(),o,h):"";function fn(o,h,c){return _?be(3,1,o,h,c):0}function mn(o,h){if(_)return be(4,1,o,h)}var Qr=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);127>=g?h++:2047>=g?h+=2:55296<=g&&57343>=g?(h+=4,++c):h+=3}return h},gn=(o,h,c,g)=>{if(!(0<g))return 0;var w=c>>>=0;g=c+g-1;for(var T=0;T<o.length;++T){var O=o.charCodeAt(T);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++T)),127>=O){if(c>=g)break;h[c++>>>0]=O}else{if(2047>=O){if(c+1>=g)break;h[c++>>>0]=192|O>>6}else{if(65535>=O){if(c+2>=g)break;h[c++>>>0]=224|O>>12}else{if(c+3>=g)break;h[c++>>>0]=240|O>>18,h[c++>>>0]=128|O>>12&63}h[c++>>>0]=128|O>>6&63}h[c++>>>0]=128|63&O}}return h[c>>>0]=0,c-w},Ct=(o,h,c)=>gn(o,r(),h,c);function yn(o,h){if(_)return be(5,1,o,h)}function _n(o,h,c){if(_)return be(6,1,o,h,c)}function bn(o,h,c){return _?be(7,1,o,h,c):0}function $n(o,h){if(_)return be(8,1,o,h)}function wn(o,h,c){if(_)return be(9,1,o,h,c)}function vn(o,h,c,g){if(_)return be(10,1,o,h,c,g)}function xn(o,h,c,g){if(_)return be(11,1,o,h,c,g)}function kn(o,h,c,g){if(_)return be(12,1,o,h,c,g)}function Sn(o){if(_)return be(13,1,o)}function Tn(o,h){if(_)return be(14,1,o,h)}function In(o,h,c){if(_)return be(15,1,o,h,c)}var En,st,Nc=()=>{at("")},je=o=>{for(var h="";r()[o>>>0];)h+=En[r()[o++>>>0]];return h},Yr={},Zr={},Pc={};function et(o,h,c={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(g,w,T={}){var O=w.name;if(!g)throw new st(`type "${O}" must have a positive integer typeid pointer`);if(Zr.hasOwnProperty(g)){if(T.Tb)return;throw new st(`Cannot register type '${O}' twice`)}Zr[g]=w,delete Pc[g],Yr.hasOwnProperty(g)&&(w=Yr[g],delete Yr[g],w.forEach(B=>B()))}(o,h,c)}var Cn=(o,h,c)=>{switch(h){case 1:return c?g=>t()[g>>>0]:g=>r()[g>>>0];case 2:return c?g=>i()[g>>>1>>>0]:g=>a()[g>>>1>>>0];case 4:return c?g=>n()[g>>>2>>>0]:g=>s()[g>>>2>>>0];case 8:return c?g=>me[g>>>3]:g=>Je[g>>>3];default:throw new TypeError(`invalid integer width (${h}): ${o}`)}};function Uc(o,h,c){c>>>=0,et(o>>>=0,{name:h=je(h>>>0),fromWireType:g=>g,toWireType:function(g,w){if(typeof w!="bigint"&&typeof w!="number")throw w=w===null?"null":(g=typeof w)=="object"||g==="array"||g==="function"?w.toString():""+w,new TypeError(`Cannot convert "${w}" to ${this.name}`);return typeof w=="number"&&(w=BigInt(w)),w},argPackAdvance:ot,readValueFromPointer:Cn(h,c,h.indexOf("u")==-1),Eb:null})}var ot=8;function Wc(o,h,c,g){et(o>>>=0,{name:h=je(h>>>0),fromWireType:function(w){return!!w},toWireType:function(w,T){return T?c:g},argPackAdvance:ot,readValueFromPointer:function(w){return this.fromWireType(r()[w>>>0])},Eb:null})}var Xr=[],tt=[];function Jr(o){9<(o>>>=0)&&--tt[o+1]==0&&(tt[o]=void 0,Xr.push(o))}var Oe=o=>{if(!o)throw new st("Cannot use deleted val. handle = "+o);return tt[o]},Me=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Xr.pop()||tt.length;return tt[h]=o,tt[h+1]=1,h}};function ei(o){return this.fromWireType(s()[o>>>2>>>0])}var qc={name:"emscripten::val",fromWireType:o=>{var h=Oe(o);return Jr(o),h},toWireType:(o,h)=>Me(h),argPackAdvance:ot,readValueFromPointer:ei,Eb:null};function Lc(o){return et(o>>>0,qc)}var Vc=(o,h)=>{switch(h){case 4:return function(c){return this.fromWireType(l()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(d()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${o}`)}};function Hc(o,h,c){c>>>=0,et(o>>>=0,{name:h=je(h>>>0),fromWireType:g=>g,toWireType:(g,w)=>w,argPackAdvance:ot,readValueFromPointer:Vc(h,c),Eb:null})}function Gc(o,h,c,g,w){if(o>>>=0,c>>>=0,h=je(h>>>0),w===-1&&(w=4294967295),w=B=>B,g===0){var T=32-8*c;w=B=>B<<T>>>T}var O=h.includes("unsigned")?function(B,W){return W>>>0}:function(B,W){return W};et(o,{name:h,fromWireType:w,toWireType:O,argPackAdvance:ot,readValueFromPointer:Cn(h,c,g!==0),Eb:null})}function Fc(o,h,c){function g(T){var O=s()[T>>>2>>>0];return T=s()[T+4>>>2>>>0],new w(t().buffer,T,O)}var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];et(o>>>=0,{name:c=je(c>>>0),fromWireType:g,argPackAdvance:ot,readValueFromPointer:g},{Tb:!0})}function jc(o,h){o>>>=0;var c=(h=je(h>>>0))==="std::string";et(o,{name:h,fromWireType:function(g){var w=s()[g>>>2>>>0],T=g+4;if(c)for(var O=T,B=0;B<=w;++B){var W=T+B;if(B==w||r()[W>>>0]==0){if(O=xe(O,W-O),H===void 0)var H=O;else H+="\0",H+=O;O=W+1}}else{for(H=Array(w),B=0;B<w;++B)H[B]=String.fromCharCode(r()[T+B>>>0]);H=H.join("")}return Qe(g),H},toWireType:function(g,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var T=typeof w=="string";if(!(T||w instanceof Uint8Array||w instanceof Uint8ClampedArray||w instanceof Int8Array))throw new st("Cannot pass non-string to std::string");var O=c&&T?Qr(w):w.length,B=gr(4+O+1),W=B+4;if(s()[B>>>2>>>0]=O,c&&T)Ct(w,W,O+1);else if(T)for(T=0;T<O;++T){var H=w.charCodeAt(T);if(255<H)throw Qe(W),new st("String has UTF-16 code units that do not fit in 8 bits");r()[W+T>>>0]=H}else for(T=0;T<O;++T)r()[W+T>>>0]=w[T];return g!==null&&g.push(Qe,B),B},argPackAdvance:ot,readValueFromPointer:ei,Eb(g){Qe(g)}})}var zn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Kc=(o,h)=>{for(var c=o>>1,g=c+h/2;!(c>=g)&&a()[c>>>0];)++c;if(32<(c<<=1)-o&&zn)return zn.decode(r().slice(o,c));for(c="",g=0;!(g>=h/2);++g){var w=i()[o+2*g>>>1>>>0];if(w==0)break;c+=String.fromCharCode(w)}return c},Qc=(o,h,c)=>{if(c??=2147483647,2>c)return 0;var g=h;c=(c-=2)<2*o.length?c/2:o.length;for(var w=0;w<c;++w){var T=o.charCodeAt(w);i()[h>>>1>>>0]=T,h+=2}return i()[h>>>1>>>0]=0,h-g},Yc=o=>2*o.length,Zc=(o,h)=>{for(var c=0,g="";!(c>=h/4);){var w=n()[o+4*c>>>2>>>0];if(w==0)break;++c,65536<=w?(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w)):g+=String.fromCharCode(w)}return g},Xc=(o,h,c)=>{if(h>>>=0,c??=2147483647,4>c)return 0;var g=h;c=g+c-4;for(var w=0;w<o.length;++w){var T=o.charCodeAt(w);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&o.charCodeAt(++w)),n()[h>>>2>>>0]=T,(h+=4)+4>c)break}return n()[h>>>2>>>0]=0,h-g},Jc=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);55296<=g&&57343>=g&&++c,h+=4}return h};function ef(o,h,c){if(o>>>=0,h>>>=0,c=je(c>>>=0),h===2)var g=Kc,w=Qc,T=Yc,O=B=>a()[B>>>1>>>0];else h===4&&(g=Zc,w=Xc,T=Jc,O=B=>s()[B>>>2>>>0]);et(o,{name:c,fromWireType:B=>{for(var W,H=s()[B>>>2>>>0],Y=B+4,oe=0;oe<=H;++oe){var pe=B+4+oe*h;oe!=H&&O(pe)!=0||(Y=g(Y,pe-Y),W===void 0?W=Y:(W+="\0",W+=Y),Y=pe+h)}return Qe(B),W},toWireType:(B,W)=>{if(typeof W!="string")throw new st(`Cannot pass non-string to C++ string type ${c}`);var H=T(W),Y=gr(4+H+h);return s()[Y>>>2>>>0]=H/h,w(W,Y+4,H+h),B!==null&&B.push(Qe,Y),Y},argPackAdvance:ot,readValueFromPointer:ei,Eb(B){Qe(B)}})}function tf(o,h){et(o>>>=0,{Ub:!0,name:h=je(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var rf=()=>1;function af(o){oi(o>>>0,!y,1,!b,131072,!1),on()}var An=o=>{if(!ge)try{if(o(),!(0<ft))try{_?yr(ne):Kr(ne)}catch(h){h instanceof Gr||h=="unwind"||I(0,h)}}catch(h){h instanceof Gr||h=="unwind"||I(0,h)}};function ti(o){o>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),o>>>2,o).value.then(or),o+=128,Atomics.store(n(),o>>>2,1))}var or=()=>{var o=Ot();o&&(ti(o),An(os))};function nf(o,h){(o>>>=0)==h>>>0?setTimeout(or):_?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Fe[o])&&o.postMessage({cmd:"checkMailbox"})}var ri=[];function sf(o,h,c,g,w){for(h>>>=0,g/=2,ri.length=g,c=w>>>0>>>3,w=0;w<g;w++)ri[w]=me[c+2*w]?me[c+2*w+1]:d()[c+2*w+1>>>0];return(h?Hr[h]:Yf[o])(...ri)}function of(o){o>>>=0,_?postMessage({cmd:"cleanupThread",thread:o}):sn(Fe[o])}function uf(o){}var ur=(o,h)=>{var c=Zr[o];if(c===void 0)throw o=is(o),c=je(o),Qe(o),new st(`${h} has unknown type ${c}`);return c},On=(o,h,c)=>{var g=[];return o=o.toWireType(g,c),g.length&&(s()[h>>>2>>>0]=Me(g)),o};function lf(o,h,c){return h>>>=0,c>>>=0,o=Oe(o>>>0),h=ur(h,"emval::as"),On(h,c,o)}function df(o,h){return h>>>=0,o=Oe(o>>>0),(h=ur(h,"emval::as")).toWireType(null,o)}var lr=o=>{try{o()}catch(h){at(h)}},ut=0,Ke=null,Rn=0,dr=[],Bn={},Dn={},pf=0,ii=null,hf=[];function Mn(o){return function(h){if(!ge){if(ut===0){var c=!1,g=!1;h((w=0)=>{if(!ge&&(Rn=w,c=!0,g)){ut=2,lr(()=>hs(Ke)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),w=!1;try{var T=function(){var W=n()[Ke+8>>>2>>>0];return W=Q[Dn[W]],--ft,W()}()}catch(W){T=W,w=!0}var O=!1;if(!Ke){var B=ii;B&&(ii=null,(w?B.reject:B.resolve)(T),O=!0)}if(w&&!O)throw T}}),g=!0,c||(ut=1,Ke=function(){var w=gr(65548),T=w+12;s()[w>>>2>>>0]=T,s()[w+4>>>2>>>0]=T+65536,T=dr[0];var O=Bn[T];return O===void 0&&(O=pf++,Bn[T]=O,Dn[O]=T),T=O,n()[w+8>>>2>>>0]=T,w}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),lr(()=>ds(Ke)))}else ut===2?(ut=0,lr(cs),Qe(Ke),Ke=null,hf.forEach(An)):at(`invalid state: ${ut}`);return Rn}}(h=>{o().then(h)})}function cf(o){return o>>>=0,Mn(()=>(o=Oe(o)).then(Me))}var pr=[];function ff(o,h,c,g){return c>>>=0,g>>>=0,(o=pr[o>>>0])(null,h=Oe(h>>>0),c,g)}var mf={},hr=o=>{var h=mf[o];return h===void 0?je(o):h};function gf(o,h,c,g,w){return c>>>=0,g>>>=0,w>>>=0,(o=pr[o>>>0])(h=Oe(h>>>0),h[c=hr(c)],g,w)}var Nn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function yf(o){return(o>>>=0)==0?Me(Nn()):(o=hr(o),Me(Nn()[o]))}var _f=o=>{var h=pr.length;return pr.push(o),h},bf=(o,h)=>{for(var c=Array(o),g=0;g<o;++g)c[g]=ur(s()[h+4*g>>>2>>>0],"parameter "+g);return c},Pn=(o,h)=>Object.defineProperty(h,"name",{value:o});function $f(o,h,c){var g=(h=bf(o,h>>>0)).shift();o--;var w=`return function (obj, func, destructorsRef, args) {
`,T=0,O=[];c===0&&O.push("obj");for(var B=["retType"],W=[g],H=0;H<o;++H)O.push("arg"+H),B.push("argType"+H),W.push(h[H]),w+=`  var arg${H} = argType${H}.readValueFromPointer(args${T?"+"+T:""});
`,T+=h[H].argPackAdvance;return w+=`  var rv = ${c===1?"new func":"func.call"}(${O.join(", ")});
`,g.Ub||(B.push("emval_returnValue"),W.push(On),w+=`  return emval_returnValue(retType, destructorsRef, rv);
`),B.push(w+`};
`),o=function(Y){var oe=Function;if(!(oe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof oe} which is not a function`);var pe=Pn(oe.name||"unknownFunctionName",function(){});return pe.prototype=oe.prototype,pe=new pe,(Y=oe.apply(pe,Y))instanceof Object?Y:pe}(B)(...W),c=`methodCaller<(${h.map(Y=>Y.name).join(", ")}) => ${g.name}>`,_f(Pn(c,o))}function wf(o){return o=hr(o>>>0),Me(u[o])}function vf(o,h){return h>>>=0,o=Oe(o>>>0),h=Oe(h),Me(o[h])}function xf(o){9<(o>>>=0)&&(tt[o+1]+=1)}function kf(){return Me([])}function Sf(o){o=Oe(o>>>0);for(var h=Array(o.length),c=0;c<o.length;c++)h[c]=o[c];return Me(h)}function Tf(o){return Me(hr(o>>>0))}function If(){return Me({})}function Ef(o){for(var h=Oe(o>>>=0);h.length;){var c=h.pop();h.pop()(c)}Jr(o)}function Cf(o,h,c){h>>>=0,c>>>=0,o=Oe(o>>>0),h=Oe(h),c=Oe(c),o[h]=c}function zf(o,h){return h>>>=0,o=(o=ur(o>>>0,"_emval_take_value")).readValueFromPointer(h),Me(o)}function Af(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getUTCSeconds(),n()[h+4>>>2>>>0]=o.getUTCMinutes(),n()[h+8>>>2>>>0]=o.getUTCHours(),n()[h+12>>>2>>>0]=o.getUTCDate(),n()[h+16>>>2>>>0]=o.getUTCMonth(),n()[h+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=o}var zt=o=>o%4==0&&(o%100!=0||o%400==0),Un=[0,31,60,91,121,152,182,213,244,274,305,335],Wn=[0,31,59,90,120,151,181,212,243,273,304,334];function Of(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getSeconds(),n()[h+4>>>2>>>0]=o.getMinutes(),n()[h+8>>>2>>>0]=o.getHours(),n()[h+12>>>2>>>0]=o.getDate(),n()[h+16>>>2>>>0]=o.getMonth(),n()[h+20>>>2>>>0]=o.getFullYear()-1900,n()[h+24>>>2>>>0]=o.getDay();var c=(zt(o.getFullYear())?Un:Wn)[o.getMonth()]+o.getDate()-1|0;n()[h+28>>>2>>>0]=c,n()[h+36>>>2>>>0]=-60*o.getTimezoneOffset(),c=new Date(o.getFullYear(),6,1).getTimezoneOffset();var g=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(c!=g&&o.getTimezoneOffset()==Math.min(g,c)),n()[h+32>>>2>>>0]=o}function Rf(o){o>>>=0;var h=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),c=n()[o+32>>>2>>>0],g=h.getTimezoneOffset(),w=new Date(h.getFullYear(),6,1).getTimezoneOffset(),T=new Date(h.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(T,w);return 0>c?n()[o+32>>>2>>>0]=+(w!=T&&O==g):0<c!=(O==g)&&(w=Math.max(T,w),h.setTime(h.getTime()+6e4*((0<c?O:w)-g))),n()[o+24>>>2>>>0]=h.getDay(),c=(zt(h.getFullYear())?Un:Wn)[h.getMonth()]+h.getDate()-1|0,n()[o+28>>>2>>>0]=c,n()[o>>>2>>>0]=h.getSeconds(),n()[o+4>>>2>>>0]=h.getMinutes(),n()[o+8>>>2>>>0]=h.getHours(),n()[o+12>>>2>>>0]=h.getDate(),n()[o+16>>>2>>>0]=h.getMonth(),n()[o+20>>>2>>>0]=h.getYear(),o=h.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function qn(o,h,c,g,w,T,O){return _?be(16,1,o,h,c,g,w,T,O):-52}function Ln(o,h,c,g,w,T){if(_)return be(17,1,o,h,c,g,w,T)}function Bf(o,h,c,g){o>>>=0,h>>>=0,c>>>=0,g>>>=0;var w=new Date().getFullYear(),T=new Date(w,0,1),O=new Date(w,6,1);w=T.getTimezoneOffset();var B=O.getTimezoneOffset(),W=Math.max(w,B);s()[o>>>2>>>0]=60*W,n()[h>>>2>>>0]=+(w!=B),T=(o=H=>H.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(T),O=o(O),B<w?(Ct(T,c,17),Ct(O,g,17)):(Ct(T,g,17),Ct(O,c,17))}var ai=[],Vn=(o,h)=>{ai.length=0;for(var c;c=r()[o++>>>0];){var g=c!=105;h+=(g&=c!=112)&&h%8?4:0,ai.push(c==112?s()[h>>>2>>>0]:c==106?me[h>>>3]:c==105?n()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=g?8:4}return ai};function Df(o,h,c){return o>>>=0,h=Vn(h>>>0,c>>>0),Hr[o](...h)}function Mf(o,h,c){return o>>>=0,h=Vn(h>>>0,c>>>0),Hr[o](...h)}var Nf=()=>{},Pf=()=>Date.now();function Uf(o,h){return V(xe(o>>>0,h>>>0))}var Hn,Wf=()=>{throw ft+=1,"unwind"};function qf(){return 4294901760}Hn=()=>performance.timeOrigin+performance.now();var Lf=()=>navigator.hardwareConcurrency;function Vf(){return at("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Hf(o){o>>>=0;var h=r().length;if(o<=h||4294901760<o)return!1;for(var c=1;4>=c;c*=2){var g=h*(1+.2/c);g=Math.min(g,o+100663296);var w=Math;g=Math.max(o,g);e:{w=(w.min.call(w,4294901760,g+(65536-g%65536)%65536)-Z.buffer.byteLength+65535)/65536;try{Z.grow(w),Ee();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}var cr=()=>(at("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),At={},Gn=o=>{o.forEach(h=>{var c=cr();c&&(At[c]=h)})};function Gf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Gn(o),At.Qb=cr(),At.fc=o,At.Qb}function Ff(o,h,c){if(o>>>=0,h>>>=0,At.Qb==o)var g=At.fc;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Gn(g);for(var w=3;g[w]&&cr()!=o;)++w;for(o=0;o<c&&g[o+w];++o)n()[h+4*o>>>2>>>0]=cr();return o}var ni,si={},Fn=()=>{if(!ni){var o,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in si)si[o]===void 0?delete h[o]:h[o]=si[o];var c=[];for(o in h)c.push(`${o}=${h[o]}`);ni=c}return ni};function jn(o,h){if(_)return be(18,1,o,h);o>>>=0,h>>>=0;var c=0;return Fn().forEach((g,w)=>{var T=h+c;for(w=s()[o+4*w>>>2>>>0]=T,T=0;T<g.length;++T)t()[w++>>>0]=g.charCodeAt(T);t()[w>>>0]=0,c+=g.length+1}),0}function Kn(o,h){if(_)return be(19,1,o,h);o>>>=0,h>>>=0;var c=Fn();s()[o>>>2>>>0]=c.length;var g=0;return c.forEach(w=>g+=w.length+1),s()[h>>>2>>>0]=g,0}function Qn(o){return _?be(20,1,o):52}function Yn(o,h,c,g){return _?be(21,1,o,h,c,g):52}function Zn(o,h,c,g){return _?be(22,1,o,h,c,g):70}var jf=[null,[],[]];function Xn(o,h,c,g){if(_)return be(23,1,o,h,c,g);h>>>=0,c>>>=0,g>>>=0;for(var w=0,T=0;T<c;T++){var O=s()[h>>>2>>>0],B=s()[h+4>>>2>>>0];h+=8;for(var W=0;W<B;W++){var H=r()[O+W>>>0],Y=jf[o];H===0||H===10?((o===1?L:V)(cn(Y,0)),Y.length=0):Y.push(H)}w+=B}return s()[g>>>2>>>0]=w,0}var Jn=[31,29,31,30,31,30,31,31,30,31,30,31],es=[31,28,31,30,31,30,31,31,30,31,30,31],Kf=(o,h)=>{t().set(o,h>>>0)};function ts(o,h,c,g){function w(A,se,we){for(A=typeof A=="number"?A.toString():A||"";A.length<se;)A=we[0]+A;return A}function T(A,se){return w(A,se,"0")}function O(A,se){function we(ms){return 0>ms?-1:0<ms?1:0}var gt;return(gt=we(A.getFullYear()-se.getFullYear()))===0&&(gt=we(A.getMonth()-se.getMonth()))===0&&(gt=we(A.getDate()-se.getDate())),gt}function B(A){switch(A.getDay()){case 0:return new Date(A.getFullYear()-1,11,29);case 1:return A;case 2:return new Date(A.getFullYear(),0,3);case 3:return new Date(A.getFullYear(),0,2);case 4:return new Date(A.getFullYear(),0,1);case 5:return new Date(A.getFullYear()-1,11,31);case 6:return new Date(A.getFullYear()-1,11,30)}}function W(A){var se=A.Cb;for(A=new Date(new Date(A.Db+1900,0,1).getTime());0<se;){var we=A.getMonth(),gt=(zt(A.getFullYear())?Jn:es)[we];if(!(se>gt-A.getDate())){A.setDate(A.getDate()+se);break}se-=gt-A.getDate()+1,A.setDate(1),11>we?A.setMonth(we+1):(A.setMonth(0),A.setFullYear(A.getFullYear()+1))}return we=new Date(A.getFullYear()+1,0,4),se=B(new Date(A.getFullYear(),0,4)),we=B(we),0>=O(se,A)?0>=O(we,A)?A.getFullYear()+1:A.getFullYear():A.getFullYear()-1}o>>>=0,h>>>=0,c>>>=0,g>>>=0;var H=s()[g+40>>>2>>>0];for(var Y in g={lc:n()[g>>>2>>>0],kc:n()[g+4>>>2>>>0],Ib:n()[g+8>>>2>>>0],Mb:n()[g+12>>>2>>>0],Jb:n()[g+16>>>2>>>0],Db:n()[g+20>>>2>>>0],vb:n()[g+24>>>2>>>0],Cb:n()[g+28>>>2>>>0],sc:n()[g+32>>>2>>>0],jc:n()[g+36>>>2>>>0],mc:H?xe(H):""},c=xe(c),H={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})c=c.replace(new RegExp(Y,"g"),H[Y]);var oe="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),pe="January February March April May June July August September October November December".split(" ");for(Y in H={"%a":A=>oe[A.vb].substring(0,3),"%A":A=>oe[A.vb],"%b":A=>pe[A.Jb].substring(0,3),"%B":A=>pe[A.Jb],"%C":A=>T((A.Db+1900)/100|0,2),"%d":A=>T(A.Mb,2),"%e":A=>w(A.Mb,2," "),"%g":A=>W(A).toString().substring(2),"%G":W,"%H":A=>T(A.Ib,2),"%I":A=>((A=A.Ib)==0?A=12:12<A&&(A-=12),T(A,2)),"%j":A=>{for(var se=0,we=0;we<=A.Jb-1;se+=(zt(A.Db+1900)?Jn:es)[we++]);return T(A.Mb+se,3)},"%m":A=>T(A.Jb+1,2),"%M":A=>T(A.kc,2),"%n":()=>`
`,"%p":A=>0<=A.Ib&&12>A.Ib?"AM":"PM","%S":A=>T(A.lc,2),"%t":()=>"	","%u":A=>A.vb||7,"%U":A=>T(Math.floor((A.Cb+7-A.vb)/7),2),"%V":A=>{var se=Math.floor((A.Cb+7-(A.vb+6)%7)/7);if(2>=(A.vb+371-A.Cb-2)%7&&se++,se)se==53&&((we=(A.vb+371-A.Cb)%7)==4||we==3&&zt(A.Db)||(se=1));else{se=52;var we=(A.vb+7-A.Cb-1)%7;(we==4||we==5&&zt(A.Db%400-1))&&se++}return T(se,2)},"%w":A=>A.vb,"%W":A=>T(Math.floor((A.Cb+7-(A.vb+6)%7)/7),2),"%y":A=>(A.Db+1900).toString().substring(2),"%Y":A=>A.Db+1900,"%z":A=>{var se=0<=(A=A.jc);return A=Math.abs(A)/60,(se?"+":"-")+("0000"+(A/60*100+A%60)).slice(-4)},"%Z":A=>A.mc,"%%":()=>"%"},c=c.replace(/%%/g,"\0\0"),H)c.includes(Y)&&(c=c.replace(new RegExp(Y,"g"),H[Y](g)));return Y=function(A){var se=Array(Qr(A)+1);return gn(A,se,0,se.length),se}(c=c.replace(/\0\0/g,"%")),Y.length>h?0:(Kf(Y,o),Y.length-1)}function Qf(o,h,c,g){return ts(o>>>0,h>>>0,c>>>0,g>>>0)}_||function(){for(var o=u.numThreads-1;o--;)ln();nr.unshift(()=>{Wt++,function(h){_?h():Promise.all(nt.map(un)).then(h)}(()=>Ya())})}();for(var rs=Array(256),fr=0;256>fr;++fr)rs[fr]=String.fromCharCode(fr);En=rs,st=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>tt.length/2-5-Xr.length;var Yf=[jr,an,dn,fn,mn,yn,_n,bn,$n,wn,vn,xn,kn,Sn,Tn,In,qn,Ln,jn,Kn,Qn,Yn,Zn,Xn],Q=function(){function o(c,g){return Q=c.exports,Q=function(){var w=Q,T={};for(let[O,B]of Object.entries(w))T[O]=typeof B=="function"?(...W)=>{dr.push(O);try{return B(...W)}finally{ge||(dr.pop(),Ke&&ut===1&&dr.length===0&&(ut=0,ft+=1,lr(ps),typeof Fibers<"u"&&Fibers.tc()))}}:B;return T}(),Q=function(){var w=Q,T=B=>W=>B(W)>>>0,O=B=>()=>B()>>>0;return(w=Object.assign({},w)).Da=T(w.Da),w.gb=O(w.gb),w.ib=T(w.ib),w.emscripten_main_runtime_thread_id=O(w.emscripten_main_runtime_thread_id),w.tb=T(w.tb),w.ub=O(w.ub),w}(),nn.push(Q.jb),Ut.unshift(Q.Ca),G=g,Ya(),Q}var h=tn();if(Wt++,u.instantiateWasm)try{return u.instantiateWasm(h,o)}catch(c){V(`Module.instantiateWasm callback failed with error: ${c}`),f(c)}return Vr||=u.locateFile?Za("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",E):E+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,function(c,g){var w=Vr;return C||typeof WebAssembly.instantiateStreaming!="function"||Za(w)||Xa(w)||typeof fetch!="function"?en(w,c,g):fetch(w,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,c).then(g,function(O){return V(`wasm streaming compile failed: ${O}`),V("falling back to ArrayBuffer instantiation"),en(w,c,g)}))}(h,function(c){o(c.instance,c.module)}).catch(f),{}}(),is=o=>(is=Q.Da)(o),as=()=>(as=Q.Ea)();u._OrtInit=(o,h)=>(u._OrtInit=Q.Fa)(o,h),u._OrtGetLastError=(o,h)=>(u._OrtGetLastError=Q.Ga)(o,h),u._OrtCreateSessionOptions=(o,h,c,g,w,T,O,B,W,H)=>(u._OrtCreateSessionOptions=Q.Ha)(o,h,c,g,w,T,O,B,W,H),u._OrtAppendExecutionProvider=(o,h)=>(u._OrtAppendExecutionProvider=Q.Ia)(o,h),u._OrtAddFreeDimensionOverride=(o,h,c)=>(u._OrtAddFreeDimensionOverride=Q.Ja)(o,h,c),u._OrtAddSessionConfigEntry=(o,h,c)=>(u._OrtAddSessionConfigEntry=Q.Ka)(o,h,c),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=Q.La)(o),u._OrtCreateSession=(o,h,c)=>(u._OrtCreateSession=Q.Ma)(o,h,c),u._OrtReleaseSession=o=>(u._OrtReleaseSession=Q.Na)(o),u._OrtGetInputOutputCount=(o,h,c)=>(u._OrtGetInputOutputCount=Q.Oa)(o,h,c),u._OrtGetInputName=(o,h)=>(u._OrtGetInputName=Q.Pa)(o,h),u._OrtGetOutputName=(o,h)=>(u._OrtGetOutputName=Q.Qa)(o,h),u._OrtFree=o=>(u._OrtFree=Q.Ra)(o),u._OrtCreateTensor=(o,h,c,g,w,T)=>(u._OrtCreateTensor=Q.Sa)(o,h,c,g,w,T),u._OrtGetTensorData=(o,h,c,g,w)=>(u._OrtGetTensorData=Q.Ta)(o,h,c,g,w),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=Q.Ua)(o),u._OrtCreateRunOptions=(o,h,c,g)=>(u._OrtCreateRunOptions=Q.Va)(o,h,c,g),u._OrtAddRunConfigEntry=(o,h,c)=>(u._OrtAddRunConfigEntry=Q.Wa)(o,h,c),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=Q.Xa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=Q.Ya)(o),u._OrtBindInput=(o,h,c)=>(u._OrtBindInput=Q.Za)(o,h,c),u._OrtBindOutput=(o,h,c,g)=>(u._OrtBindOutput=Q._a)(o,h,c,g),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=Q.$a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=Q.ab)(o),u._OrtRunWithBinding=(o,h,c,g,w)=>(u._OrtRunWithBinding=Q.bb)(o,h,c,g,w),u._OrtRun=(o,h,c,g,w,T,O,B)=>(u._OrtRun=Q.cb)(o,h,c,g,w,T,O,B),u._OrtEndProfiling=o=>(u._OrtEndProfiling=Q.db)(o),u._JsepOutput=(o,h,c)=>(u._JsepOutput=Q.eb)(o,h,c),u._JsepGetNodeName=o=>(u._JsepGetNodeName=Q.fb)(o);var mr,Ot=()=>(Ot=Q.gb)(),Qe=u._free=o=>(Qe=u._free=Q.hb)(o),gr=u._malloc=o=>(gr=u._malloc=Q.ib)(o),oi=(o,h,c,g,w,T)=>(oi=Q.lb)(o,h,c,g,w,T),ns=()=>(ns=Q.mb)(),ss=(o,h,c,g,w)=>(ss=Q.nb)(o,h,c,g,w),ui=o=>(ui=Q.ob)(o),yr=o=>(yr=Q.pb)(o),os=()=>(os=Q.qb)(),us=(o,h)=>(us=Q.rb)(o,h),_r=o=>(_r=Q.sb)(o),li=o=>(li=Q.tb)(o),di=()=>(di=Q.ub)(),ls=u.dynCall_ii=(o,h)=>(ls=u.dynCall_ii=Q.wb)(o,h),ds=o=>(ds=Q.xb)(o),ps=()=>(ps=Q.yb)(),hs=o=>(hs=Q.zb)(o),cs=()=>(cs=Q.Ab)();function fs(){0<Wt||(_?(p(u),_||sr(Ut),startWorker(u)):(sr(nr),0<Wt||mr||(mr=!0,u.calledRun=!0,ge||(_||sr(Ut),p(u),_||sr(zc)))))}return u.___start_em_js=932469,u.___stop_em_js=932715,u.stackSave=()=>di(),u.stackRestore=o=>_r(o),u.stackAlloc=o=>li(o),u.setValue=function(o,h,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":t()[o>>>0]=h;break;case"i16":i()[o>>>1>>>0]=h;break;case"i32":n()[o>>>2>>>0]=h;break;case"i64":me[o>>>3]=BigInt(h);break;case"float":l()[o>>>2>>>0]=h;break;case"double":d()[o>>>3>>>0]=h;break;case"*":s()[o>>>2>>>0]=h;break;default:at(`invalid type for setValue: ${c}`)}},u.getValue=function(o,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return t()[o>>>0];case"i16":return i()[o>>>1>>>0];case"i32":return n()[o>>>2>>>0];case"i64":return me[o>>>3];case"float":return l()[o>>>2>>>0];case"double":return d()[o>>>3>>>0];case"*":return s()[o>>>2>>>0];default:at(`invalid type for getValue: ${h}`)}},u.UTF8ToString=xe,u.stringToUTF8=Ct,u.lengthBytesUTF8=Qr,qt=function o(){mr||fs(),mr||(qt=o)},fs(),u.PTR_SIZE=4,m}),yd=yi,globalThis.self?.name==="em-pthread"&&yi()}),_i,ys,Re,_d,$r,_s,bs,bi,$s,$i,bd,wi,$d,ka=N(()=>{"use strict";xa(),_i=typeof location>"u"?void 0:location.origin,ys=()=>import.meta.url?.startsWith("file:")?new URL(new URL("ort.bundle.min.mjs",import.meta.url).href,_i).href:import.meta.url,Re=ys(),_d=()=>{if(Re&&!Re.startsWith("blob:"))return Re.substring(0,Re.lastIndexOf("/")+1)},$r=(e,t)=>{try{let r=t??Re;return(r?new URL(e,r):new URL(e)).origin===_i}catch{return!1}},_s=(e,t)=>{let r=t??Re;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},bs=(e,t)=>`${t??"./"}${e}`,bi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$s=async e=>(await import(e)).default,$i=(mm(),Br(fd)).default,bd=async()=>{if(!Re)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(Re))return[void 0,$i()];let e=await bi(Re);return[e,$i(e)]},wi=(gm(),Br(gd)).default,$d=async(e,t,r)=>{if(!e&&!t&&wi&&Re&&$r(Re))return[void 0,wi];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??_s(i,t),n=r&&a&&!$r(a,t),s=n?await bi(a):a??bs(i,t);return[n?s:void 0,await $s(s)]}}}),vi,wr,Vt,xi,ws,vs,Sa,Se,It=N(()=>{"use strict";ka(),wr=!1,Vt=!1,xi=!1,ws=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},vs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Sa=async e=>{if(wr)return Promise.resolve();if(Vt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(xi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Vt=!0;let t=e.initTimeout,r=e.numThreads;if(!vs())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=ws();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,l=s?.href??s,d=a?.wasm,p=d?.href??d,f=e.wasmBinary,[u,m]=await $d(l,n,r>1),b=!1,y=[];if(t>0&&y.push(new Promise(_=>{setTimeout(()=>{b=!0,_()},t)})),y.push(new Promise((_,x)=>{let v={numThreads:r};if(f)v.wasmBinary=f;else if(p||n)v.locateFile=$=>p??n+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(u){let $=_d();$&&(v.locateFile=k=>$+k)}m(v).then($=>{Vt=!1,wr=!0,vi=$,_(),u&&URL.revokeObjectURL(u)},$=>{Vt=!1,xi=!0,x($)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(wr&&vi)return vi;throw new Error("WebAssembly is not initialized yet.")}}),Ce,Mr,de,Ta=N(()=>{"use strict";It(),Ce=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Mr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Mr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},de=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),wd,ym=N(()=>{"use strict";It(),Ta(),wd=e=>{let t=Se(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ce(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&de("Can't create run options."),e?.extra!==void 0&&Mr(e.extra,"",new WeakSet,(s,l)=>{let d=Ce(s,i),p=Ce(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&de(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),xs,ks,Ss,Ts,vd,_m=N(()=>{"use strict";It(),Ta(),xs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ks=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ss=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ts=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let s=i?.deviceType;if(s){let l=Ce("deviceType",r),d=Ce(s,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&de(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let s=i;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ce("preferredLayout",r),d=Ce(s.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&de(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let n=Ce(a,r);Se()._OrtAppendExecutionProvider(e,n)!==0&&de(`Can't append execution provider: ${a}.`)}},vd=e=>{let t=Se(),r=0,i=[],a=e||{};Ss(a);try{let n=xs(a.graphOptimizationLevel??"all"),s=ks(a.executionMode??"sequential"),l=typeof a.logId=="string"?Ce(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof a.optimizedModelFilePath=="string"?Ce(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,d,p,f),r===0&&de("Can't create session options."),a.executionProviders&&Ts(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let u=Ce("enableGraphCapture",i),m=Ce(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,u,m)!==0&&de(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[u,m]of Object.entries(a.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let b=Ce(u,i);t._OrtAddFreeDimensionOverride(r,b,m)!==0&&de(`Can't set a free dimension override: ${u} - ${m}.`)}return a.extra!==void 0&&Mr(a.extra,"",new WeakSet,(u,m)=>{let b=Ce(u,i),y=Ce(m,i);t._OrtAddSessionConfigEntry(r,b,y)!==0&&de(`Can't set a session config entry: ${u} - ${m}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&de("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Xt,xt,Dt,Ia,Nr,Ea,Ca,oa,J=N(()=>{"use strict";Xt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Dt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},Ia=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Nr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ea=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ca=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",oa=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),za,xd=N(()=>{"use strict";xa(),za=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await a.read();if(l)break;let p=d.byteLength;new Uint8Array(n,s,p).set(d),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Is,Es,Cs,zs,Aa,As,he,it=N(()=>{"use strict";J(),Is=["V","I","W","E","F"],Es=(e,t)=>{console.log(`[${Is[e]},${new Date().toISOString()}]${t}`)},Aa=(e,t)=>{Cs=e,zs=t},As=(e,t)=>{let r=Nr(e),i=Nr(Cs);r>=i&&Es(r,typeof t=="function"?t():t)},he=(...e)=>{zs&&As(...e)}}),Oa,kd=N(()=>{"use strict";J(),Oa=(e,t)=>new(Ia(t))(e)}),Ra=N(()=>{"use strict"}),ki,vr,xr,Os,Rs,Si,ua,Bs,Sd,bm=N(()=>{"use strict";it(),Ra(),ki=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),vr=[],xr=e=>Math.ceil(Number(e)/16)*16,Os=e=>{for(let t=0;t<vr.length;t++){let r=vr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Rs=1,Si=()=>Rs++,ua=async(e,t,r,i)=>{let a=xr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let l=n.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{n.destroy()}},Bs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ki)vr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=xr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([p.finish()]),l.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=xr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Si();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Os(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Si(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ua(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ki.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Sd=(...e)=>new Bs(...e)}),Ds,ce,ve=N(()=>{"use strict";Ds=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ce=e=>new Ds(e)}),Ms,Nt,z,Pr,Td,Id,Ed,re=N(()=>{"use strict";Ms=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Nt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let l=Ms.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[n-2],s[n-1]]=l}for(let l=r?3:1;l<=n;l++){let d=i-l<0?1:e[i-l],p=a-l<0?1:t[a-l];if(d!==p&&d>1&&p>1)return;let f=Math.max(d,p);if(d&&p)s[n-l]=Math.max(d,p);else{if(f>1)return;s[n-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},z=class Or{static size(t){return Or.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Or.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Or.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Pr=class Jt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,l){if(l){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Jt.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],i[d],a[d],n,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,a,n,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Jt.computeShapeHelper(t,r,d,i,a,n,s,l),d}static computeConvOutputShape(t,r,i,a,n,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Jt.computeShapeHelper(!1,t,d,i,a,n,s,l),d}static computeShapeHelper(t,r,i,a,n,s,l,d){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Jt.adjustPadAndReturnShape(r[p+2],a[p],n[p],s[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,i,a,n,s,l,d){let p=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),n[l]=f-n[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[l]-p)/r+1)}},Td=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,l;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Nt.isValidBroadcast(a,[n,l]))throw new Error("gemm: invalid bias shape for broadcast");return[n,l,s]}},Id=-34028234663852886e22,Ed=34028234663852886e22}),Pt,kr,Te,ze,K,$e,la,Mt,ht,j,Ht,R,F,Cd,Ba,Ns,zd,ae=N(()=>{"use strict";J(),re(),Pt=64,kr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let r=kr(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=kr(e,t);return typeof r=="string"?r:r[1]},K=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},$e=e=>e%4===0?4:e%2===0?2:1,la=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Mt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ht=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ht=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=kr(t,a),f=typeof p=="string"?p:p[1],u=typeof p=="string"?p:p[0],m={indices:d,value:f,storage:u,tensor:t},b=M=>typeof M=="string"?M:`${M}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=n?"uniforms.":"",x=`${_}${e}_shape`,v=`${_}${e}_strides`,$="";for(let M=0;M<s-1;M++)$+=`
    let dim${M} = current / ${j(v,M,s)};
    let rest${M} = current % ${j(v,M,s)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;$+=`indices[${s-1}] = current;`;let k=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=M=>(y.offsetToIndices=!0,s<2?M:`o2i_${e}(${M})`),I=[];if(s>=2)for(let M=s-1;M>=0;M--)I.push(`${j(v,M,s)} * (indices[${M}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=M=>(y.indicesToOffset=!0,s<2?M:`i2o_${e}(${M})`),D=(...M)=>s===0?"0u":`${m.indices}(${M.map(b).join(",")})`,P=(M,q)=>s<2?`${M}`:`${j(M,q,s)}`,L=(M,q,ue)=>s<2?`${M}=${ue};`:`${j(M,q,s)}=${ue};`,V={},ee=(M,q)=>{y.broadcastedIndicesToOffset=!0;let ue=`${q.name}broadcastedIndicesTo${e}Offset`;if(ue in V)return`${ue}(${M})`;let fe=[];for(let me=s-1;me>=0;me--){let Je=q.indicesGet("outputIndices",me+q.rank-s);fe.push(`${P(v,me)} * (${Je} % ${P(x,me)})`)}return V[ue]=`fn ${ue}(outputIndices: ${q.type.indices}) -> u32 {
             return ${fe.length>0?fe.join("+"):"0u"};
           }`,`${ue}(${M})`},U=(M,q)=>(()=>{if(m.storage===m.value)return`${e}[${M}]=${q};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${q}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ie=M=>(()=>{if(m.storage===m.value)return`${e}[${M}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${M}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${M}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),Z=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${f} {
    return ${ie(`i2o_${e}(indices)`)};
  }`,G=s<2?"":(()=>{let M=l.map(ue=>`d${ue}: u32`).join(", "),q=l.map(ue=>`d${ue}`).join(", ");return`
  fn get_${e}(${M}) -> ${f} {
    return get_${e}ByIndices(${D(q)});
  }`})(),ne=(...M)=>{if(M.length!==s)throw new Error(`indices length must be ${s}`);let q=M.map(b).join(",");return s===0?ie("0u"):s===1?ie(q[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${q})`)},te=M=>s<2?ie(M):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${M})`),X=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${f}) {
    ${U(`i2o_${e}(indices)`,"value")}
  }`,ye=s<2?"":(()=>{let M=l.map(ue=>`d${ue}: u32`).join(", "),q=l.map(ue=>`d${ue}`).join(", ");return`
  fn set_${e}(${M}, value: ${f}) {
    set_${e}ByIndices(${D(q)}, value);
  }`})();return{impl:()=>{let M=[],q=!1;return y.offsetToIndices&&(M.push(k),q=!0),y.indicesToOffset&&(M.push(E),q=!0),y.broadcastedIndicesToOffset&&(Object.values(V).forEach(ue=>M.push(ue)),q=!0),y.set&&(M.push(ye),q=!0),y.setByIndices&&(M.push(X),q=!0),y.get&&(M.push(G),q=!0),y.getByIndices&&(M.push(Z),q=!0),!n&&q&&M.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${z.computeStrides(r).join(",")});`),M.join(`
`)},type:m,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:ee,indices:D,indicesGet:P,indicesSet:L,set:(...M)=>{if(M.length!==s+1)throw new Error(`indices length must be ${s}`);let q=M[s];if(typeof q!="string")throw new Error("value must be string");let ue=M.slice(0,s).map(b).join(",");return s===0?U("0u",q):s===1?U(ue[0],q):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${ue}, ${q})`)},setByOffset:U,setByIndices:(M,q)=>s<2?U(M,q):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${q});`),get:ne,getByOffset:ie,getByIndices:te,usage:i,name:e,strides:v,shape:x,rank:s}},R=(e,t,r,i=1)=>Ht(e,t,r,"input",i),F=(e,t,r,i=1)=>Ht(e,t,r,"output",i),Cd=(e,t,r)=>Ht(e,t,r,"atomicOutput",1),Ba=(e,t,r,i=1)=>Ht(e,t,r,"internal",i),Ns=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},zd=(e,t)=>new Ns(e,t)}),Ps,Ti,Us,Ws,qs,Ls,De,Ad,Od,ct=N(()=>{"use strict";J(),re(),ve(),ae(),Ps=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ti=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Us=(e,t)=>z.sortBasedOnPerm(e,Ti(e.length,t)),Ws=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},qs=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Ls=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},De=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Ti(i,t),n=Us(e.dims,a),s=e.dims,l=n,d=i<2||Ls(a,e.dims),p;if(d)return p=y=>{let _=R("input",r,s,4),x=F("output",r,l,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:p};let{newShape:f,newPerm:u}=qs(e.dims,a),m=z.areEqual(u,[2,3,1]),b=z.areEqual(u,[3,1,2]);if(f.length===2||m||b){s=m?[f[0],f[1]*f[2]]:b?[f[0]*f[1],f[2]]:f,l=[s[1],s[0]];let y=16;return p=_=>{let x=R("a",r,s.length),v=F("output",r,l.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(x,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${y+1}>, ${y}>;
  ${_.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/y),y:Math.ceil(l[0]/y)},programUniforms:[{type:12,data:_},...K(s,l)]}},getShaderSource:p}}return p=y=>{let _=R("a",r,s.length),x=F("output",r,l.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,x)}

  ${Ws(a,i,_,x)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...K(s,l)]}},getShaderSource:p}},Ad=(e,t)=>{Ps(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},Od=e=>ce({perm:e.perm})}),Vs,Hs,Gs,Fs,js,Ks,Qs,Ys,Zs,Xs,Ue,Rd,Bd,Dd,Md,Nd,Pd,Ud,Wd,qd,Ld,$m=N(()=>{"use strict";J(),re(),ae(),Da(),ct(),Vs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Hs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Gs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},js=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ks=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Qs=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Ys=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Zs=(e,t)=>{let r=[];if(!Ys(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Xs=(e,t,r,i,a,n,s)=>{let l=r[0].dims,d=z.size(n),p=z.size(s),f=R("_A",r[0].dataType,l),u=F("output",a,n),m=64;d===1&&(m=256);let b=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,y=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(f,u)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Gs[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Vs[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Hs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${i==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${Fs[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},Ue=(e,t,r,i)=>{let a=e.inputs.length===1?r:da(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((b,y)=>y));let s=z.normalizeAxes(n,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=Zs(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(De(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=js(l.length,d.dims.length));let[f,u]=Ks(d.dims,l),m=f;a.keepDims&&(m=Qs(f,s)),e.compute(Xs(t,a.cacheKey,[d],i,e.inputs[0].dataType,m,u),{inputs:[d]})},Rd=(e,t)=>{Ue(e,"ReduceMeanShared",t,"mean")},Bd=(e,t)=>{Ue(e,"ReduceL1Shared",t,"l1")},Dd=(e,t)=>{Ue(e,"ReduceL2Shared",t,"l2")},Md=(e,t)=>{Ue(e,"ReduceLogSumExpShared",t,"logSumExp")},Nd=(e,t)=>{Ue(e,"ReduceMaxShared",t,"max")},Pd=(e,t)=>{Ue(e,"ReduceMinShared",t,"min")},Ud=(e,t)=>{Ue(e,"ReduceProdShared",t,"prod")},Wd=(e,t)=>{Ue(e,"ReduceSumShared",t,"sum")},qd=(e,t)=>{Ue(e,"ReduceSumSquareShared",t,"sumSquare")},Ld=(e,t)=>{Ue(e,"ReduceLogSumShared",t,"logSum")}}),We,Js,Ur,da,qe,eo,to,ro,io,ao,no,so,oo,uo,lo,Le,Vd,Hd,Gd,Fd,jd,Kd,Qd,Yd,Zd,Xd,Da=N(()=>{"use strict";J(),re(),ve(),ae(),$m(),We=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Js=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ur=(e,t,r,i,a,n,s=!1,l=!1)=>{let d=[],p=r[0].dims,f=p.length,u=z.normalizeAxes(a,f),m=!l&&u.length===0;p.forEach((_,x)=>{m||u.indexOf(x)>=0?s&&d.push(1):d.push(_)});let b=d.length,y=z.size(d);return{name:e,shaderCache:t,getShaderSource:_=>{let x=[],v=R("_A",r[0].dataType,f),$=F("output",n,b),k=i(v,$,u),S=k[2];for(let I=0,E=0;I<f;I++)m||u.indexOf(I)>=0?(s&&E++,S=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${k[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(x.push(`${v.indicesSet("input_indices",I,$.indicesGet("output_indices",E))};`),E++);return`

        ${_.registerUniform("output_size","u32").declareVariables(v,$)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${S}
          ${k[3]}
          ${k.length===4?$.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...K(p,d)]})}},da=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},qe=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:da(a,r);e.compute(Ur(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Js:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},eo=(e,t)=>{We(e.inputs),qe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},to=(e,t)=>{We(e.inputs),qe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ro=(e,t)=>{We(e.inputs),qe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},io=(e,t)=>{We(e.inputs),qe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ao=(e,t)=>{We(e.inputs),qe(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},no=(e,t)=>{We(e.inputs),qe(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},so=(e,t)=>{We(e.inputs),qe(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},oo=(e,t)=>{We(e.inputs),qe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},uo=(e,t)=>{We(e.inputs),qe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},lo=(e,t)=>{We(e.inputs),qe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Le=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Vd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Rd(e,t)},Hd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Bd(e,t)},Gd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Dd(e,t)},Fd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Md(e,t)},jd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Nd(e,t)},Kd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Pd(e,t)},Qd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Ud(e,t)},Yd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Wd(e,t)},Zd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):qd(e,t)},Xd=(e,t)=>{Le(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Ld(e,t)}}),Ii,Jd,ep,pa,wm=N(()=>{"use strict";J(),ve(),Da(),Ii=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Jd=(e,t)=>{Ii(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Ur("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ep=(e,t)=>{Ii(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Ur("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},pa=e=>ce(e)}),po,Sr,ho,co,fo,ir,mo,tp,Ma=N(()=>{"use strict";J(),re(),Ra(),ae(),po=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=a.dims[0]/3,m=u,b=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=p;if(u!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==u+m+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(m!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let x=y+_,v=-1,$=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:f,hiddenSize:u,vHiddenSize:b,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Sr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ho=(e,t,r,i,a,n,s,l)=>{let d=$e(s?1:n),p=64,f=n/d;f<p&&(p=32);let u=Math.ceil(n/d/p),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:f},{type:12,data:u}],b=Te(e.dataType,d),y=ze(1,d),_=["type"];s&&_.push("type"),l&&_.push("type");let x=v=>{let $=F("x",e.dataType,e.dims,d),k=[$],S=s?R("seq_lens",s.dataType,s.dims):void 0;S&&k.push(S);let I=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;I&&k.push(I);let E=ze(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(C).declareVariables(...k)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Sr(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${b};${d}`,inputDependencies:_},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(n/p),y:a,z:t*r},programUniforms:m})}},co=(e,t,r,i,a,n,s,l,d)=>{let p=s+n.kvSequenceLength,f=[n.batchSize,n.numHeads,n.sequenceLength,p],u=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,b=u?[n.batchSize,m,p,n.headSize]:void 0,y=n.nReps?n.nReps:1,_=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=$e(n.headSize),v=n.headSize/x,$=12,k={x:Math.ceil(p/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],I=u&&i&&z.size(i.dims)>0,E=["type","type"];I&&E.push("type"),a&&E.push("type"),l&&E.push("type"),d&&E.push("type");let C=[{dims:f,dataType:t.dataType,gpuDataType:0}];u&&C.push({dims:b,dataType:t.dataType,gpuDataType:0});let D=P=>{let L=R("q",t.dataType,t.dims,x),V=R("key",r.dataType,r.dims,x),ee=[L,V];if(I){let X=R("past_key",i.dataType,i.dims,x);ee.push(X)}a&&ee.push(R("attention_bias",a.dataType,a.dims));let U=l?R("seq_lens",l.dataType,l.dims):void 0;U&&ee.push(U);let ie=d?R("total_sequence_length_input",d.dataType,d.dims):void 0;ie&&ee.push(ie);let Z=F("output",t.dataType,f),G=[Z];u&&G.push(F("present_key",t.dataType,b,x));let ne=ze(1,x),te=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${L.type.storage}, ${$*$}>;
  ${P.registerUniforms(te).declareVariables(...ee,...G)}
  ${P.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Sr(U,ie,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&u?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${u?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&u?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${u?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:k,programUniforms:S}),getShaderSource:D}},fo=(e,t,r,i,a,n,s=void 0,l=void 0)=>{let d=n+a.kvSequenceLength,p=a.nReps?a.nReps:1,f=a.vHiddenSize*p,u=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,b=u?[a.batchSize,m,d,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,f],_=12,x={x:Math.ceil(a.vHeadSize/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:d},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:p}],$=u&&i&&z.size(i.dims)>0,k=["type","type"];$&&k.push("type"),s&&k.push("type"),l&&k.push("type");let S=[{dims:y,dataType:t.dataType,gpuDataType:0}];u&&S.push({dims:b,dataType:t.dataType,gpuDataType:0});let I=E=>{let C=R("probs",t.dataType,t.dims),D=R("v",r.dataType,r.dims),P=[C,D];$&&P.push(R("past_value",i.dataType,i.dims));let L=s?R("seq_lens",s.dataType,s.dims):void 0;s&&P.push(L);let V=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;l&&P.push(V);let ee=[F("output",t.dataType,y)];u&&ee.push(F("present_value",t.dataType,b));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${C.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${C.type.value}, ${_*_}>;
  ${E.registerUniforms(U).declareVariables(...P,...ee)}
  ${E.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Sr(L,V,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&u?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${u?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&u?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${u?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:S,dispatchGroup:x,programUniforms:v}),getShaderSource:I}},ir=(e,t,r,i,a,n,s,l,d,p,f=void 0,u=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),b=m>1?p.pastSequenceLength:0,y=b+p.kvSequenceLength,_=d&&z.size(d.dims)>0?d:void 0,x=[t,r];m>1&&s&&z.size(s.dims)>0&&x.push(s),_&&x.push(_),f&&x.push(f),u&&x.push(u);let v=e.compute(co(m,t,r,s,_,p,b,f,u),{inputs:x,outputs:m>1?[-1,1]:[-1]})[0];e.compute(ho(v,p.batchSize,p.numHeads,b,p.sequenceLength,y,f,u),{inputs:f&&u?[v,f,u]:[v],outputs:[]});let $=[v,i];m>1&&l&&z.size(l.dims)>0&&$.push(l),f&&$.push(f),u&&$.push(u),e.compute(fo(m,v,i,l,p,b,f,u),{inputs:$,outputs:m>1?[0,2]:[0]})},mo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=u=>{let m=F("output_q",d[0].dataType,r),b=F("output_k",d[0].dataType,r),y=F("output_v",d[0].dataType,r),_=R("input",d[0].dataType,d[0].dims),x=R("weight",d[1].dataType,d[1].dims),v=R("bias",d[2].dataType,d[2].dims),$=_.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${u.registerUniforms(k).declareVariables(_,x,v,m,b,y)}
  ${u.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},tp=(e,t)=>{let r=po(e.inputs,t),[i,a,n]=mo(e,r);return ir(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),go,yo,_o,rp,vm=N(()=>{"use strict";Ge(),J(),re(),ve(),ae(),go=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((l,d)=>{if(l!==i[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},yo=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?$e(n[n.length-1]):1,l=a==="NHWC"&&n.length>1?s:1,d=z.size(n)/s,p=i,f=p?n.length:n,u=R("x",e[0].dataType,e[0].dims,s),m=R("scale",e[1].dataType,e[1].dims,l),b=R("bias",e[2].dataType,e[2].dims,l),y=R("inputMean",e[3].dataType,e[3].dims,l),_=R("inputVar",e[4].dataType,e[4].dims,l),x=F("y",e[0].dataType,f,s),v=()=>{let k="";if(i)k=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")k=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let S=1;S<m.rank;S++)k+=`cIndices[${S}] = outputIndices[${S}];`;k+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return k},$=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(u,m,b,y,_,x)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...K(n)]:[{type:12,data:d}]})}},_o=e=>ce(e),rp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=_o({...t,outputCount:i});if(_e.webgpu.validateInputContent&&go(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yo(r,a))}}),bo,$o,ip,xm=N(()=>{"use strict";re(),ae(),bo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$o=e=>{let t=e[0].dims,r=e[0].dims[2],i=z.size(t)/4,a=e[0].dataType,n=R("input",a,t,4),s=R("bias",a,[r],4),l=R("residual",a,t,4),d=F("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},ip=e=>{bo(e.inputs),e.compute($o(e.inputs))}}),wo,le,ap,np,sp,op,up,lp,dp,pp,hp,vo,cp,fp,mp,gp,er,yp,Rr,_p,bp,$p,wp,vp,xp,kp,Sp,Tp,Ip,Ep,Cp,zp,Ap,Op,Rp,Ei,Bp,ha,ca,Dp,Mp,Np,xo,ko,Pp,Na=N(()=>{"use strict";J(),re(),ve(),ae(),wo=(e,t,r,i,a,n,s)=>{let l=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=R("inputData",r,[l],4),f=F("outputData",i,[l],4),u=[{name:"vec_size",type:"u32"}];return s&&u.push(...s),`
      ${e.registerUniforms(u).declareVariables(p,f)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},le=(e,t,r,i,a,n=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>wo(p,z.size(e.dims),e.dataType,n,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(z.size(p[0].dims)/64/4)},programUniforms:d})}},ap=e=>{e.compute(le(e.inputs[0],"Abs","abs"))},np=e=>{e.compute(le(e.inputs[0],"Acos","acos"))},sp=e=>{e.compute(le(e.inputs[0],"Acosh","acosh"))},op=e=>{e.compute(le(e.inputs[0],"Asin","asin"))},up=e=>{e.compute(le(e.inputs[0],"Asinh","asinh"))},lp=e=>{e.compute(le(e.inputs[0],"Atan","atan"))},dp=e=>{e.compute(le(e.inputs[0],"Atanh","atanh"))},pp=e=>ce(e),hp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(le(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},vo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ce({min:t,max:r})},cp=(e,t)=>{let r=t||vo(e.inputs),i=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},fp=e=>{e.compute(le(e.inputs[0],"Ceil","ceil"))},mp=e=>{e.compute(le(e.inputs[0],"Cos","cos"))},gp=e=>{e.compute(le(e.inputs[0],"Cosh","cosh"))},er=e=>ce(e),yp=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,_p=e=>{let t=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rr(t)))},bp=e=>{e.compute(le(e.inputs[0],"Exp","exp"))},$p=e=>{e.compute(le(e.inputs[0],"Floor","floor"))},wp=e=>{let t=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rr(t)))},vp=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},xp=e=>{e.compute(le(e.inputs[0],"Not",t=>`!${t}`))},kp=e=>{e.compute(le(e.inputs[0],"Neg",t=>`-${t}`))},Sp=e=>{e.compute(le(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Tp=e=>{let t=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Ip=e=>{e.compute(le(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ep=e=>ce(e),Cp=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},zp=e=>{e.compute(le(e.inputs[0],"Sin","sin"))},Ap=e=>{e.compute(le(e.inputs[0],"Sinh","sinh"))},Op=e=>{e.compute(le(e.inputs[0],"Sqrt","sqrt"))},Rp=e=>{e.compute(le(e.inputs[0],"Tan","tan"))},Ei=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Bp=e=>{e.compute(le(e.inputs[0],"Tanh",Ei))},ha=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ei("v")};
}
`,ca=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Dp=e=>{let t=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"FastGelu",ca,ha(t),void 0,e.inputs[0].dataType))},Mp=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(le(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Np=e=>{e.compute(le(e.inputs[0],"Log","log"))},xo=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,ko=e=>`quick_gelu_impl(${e})`,Pp=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(le(e.inputs[0],"QuickGelu",ko,xo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),So,To,Up,km=N(()=>{"use strict";re(),ae(),Na(),So=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},To=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),i=R("bias",e[0].dataType,[e[0].dims[2]],4),a=F("output",e[0].dataType,t,4),n=z.size(t)/4,s=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,a)}

  ${Rr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Up=e=>{So(e.inputs),e.compute(To(e.inputs))}}),Io,Eo,Ve,Wp,qp,Lp,Vp,Hp,Gp,Fp,jp,Kp,Qp,Sm=N(()=>{"use strict";J(),re(),ae(),Io=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m,b;typeof l=="string"?m=b=($,k)=>`${l}((${$}),(${k}))`:typeof l=="function"?m=b=l:(m=l.scalar,b=l.vector);let y=F("outputData",f,i.length,4),_=R("aData",d,t.length,4),x=R("bData",p,r.length,4),v;if(a)if(n){let $=z.size(t)===1,k=z.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;$||k?v=y.setByOffset("global_idx",b($?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),k?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(s||S?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=y.setByOffset("global_idx",b(_.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(k,S,I="")=>{let E=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${y.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let offsetB${S} = ${x.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${k}[${S}] = ${I}(${m(E,C)});
          `};f===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(_,x,y)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Eo=(e,t,r,i,a,n,s=r.dataType)=>{let l=r.dims.map(_=>Number(_)??1),d=i.dims.map(_=>Number(_)??1),p=!z.areEqual(l,d),f=l,u=z.size(l),m=!1,b=!1,y=[p];if(p){let _=Nt.calcShape(l,d,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");f=_.slice(),u=z.size(f);let x=z.size(l)===1,v=z.size(d)===1,$=l.length>0&&l[l.length-1]%4===0,k=d.length>0&&d[d.length-1]%4===0;y.push(x),y.push(v),y.push($),y.push(k);let S=1;for(let I=1;I<f.length;I++){let E=l[l.length-I],C=d[d.length-I];if(E===C)S*=E;else break}S%4===0?(b=!0,m=!0):(x||v||$||k)&&(m=!0)}else m=!0;return y.push(m),{name:e,shaderCache:{hint:t+y.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>Io(_,l,d,f,m,p,b,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(f)/4)},...K(l,d,f)]})}},Ve=(e,t,r,i,a,n)=>{e.compute(Eo(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Wp=e=>{Ve(e,"Add",(t,r)=>`${t}+${r}`)},qp=e=>{Ve(e,"Div",(t,r)=>`${t}/${r}`)},Lp=e=>{Ve(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Vp=e=>{Ve(e,"Mul",(t,r)=>`${t}*${r}`)},Hp=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ve(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Gp=e=>{Ve(e,"Sub",(t,r)=>`${t}-${r}`)},Fp=e=>{Ve(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},jp=e=>{Ve(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Kp=e=>{Ve(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Qp=e=>{Ve(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Co,zo,Ao,Oo,Yp,Zp,Tm=N(()=>{"use strict";J(),re(),ve(),ae(),Co=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},zo=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ao=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Oo=(e,t,r,i)=>{let a=z.size(r),n=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],f=[{type:12,data:a}];for(let _=0;_<e.length;++_)l+=e[_].dims[t],n[_]=l,p.push(e[_].dims.length),s[_]=R(`input${_}`,i,p[_]),d.push("rank"),f.push({type:12,data:n[_]});for(let _=0;_<e.length;++_)f.push(...K(e[_].dims));f.push(...K(r));let u=F("output",i,r.length),m=u.indicesGet("indices",t),b=Array.from(Array(n.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),y=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)_.registerUniform(`sizeInConcatAxis${x}`,"u32");return _.declareVariables(...s,u)})()}

  ${zo(n.length,b)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${b});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ao(s,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:y}},Yp=(e,t)=>{let r=e.inputs,i=r[0].dims,a=z.normalizeAxis(t.axis,i.length);Co(r,a);let n=i.slice();n[a]=r.reduce((l,d)=>l+(d.dims.length>a?d.dims[a]:0),0);let s=r.filter(l=>z.size(l.dims)>0);e.compute(Oo(s,a,n,r[0].dataType),{inputs:s})},Zp=e=>ce({axis:e.axis})}),kt,St,Tt,Pa,Et=N(()=>{"use strict";J(),re(),kt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},St=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Tt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Pa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Id,Ed];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ie,Xp,Ua=N(()=>{"use strict";Ie=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Xp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jp,Im=N(()=>{"use strict";Jp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,Wa,qa=N(()=>{"use strict";J(),re(),ae(),Et(),rr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${j(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,j(a,l+n,i))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Wa=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],f=s[s.length-1],u=$e(p),m=$e(f),b=$e(d),y=z.size(r)/u/b,_=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),v=[z.size(x),d,p],$=[{type:12,data:y},{type:12,data:d},{type:12,data:p},{type:12,data:f}];St(t,$),$.push(...K(x,s,l)),_&&$.push(...K(e[2].dims)),$.push(...K(v));let k=S=>{let I=Ba("batch_dims",e[0].dataType,x.length),E=R("a",e[0].dataType,s.length,m),C=R("b",e[1].dataType,l.length,u),D=F("output",e[0].dataType,v.length,u),P=Te(D.type.tensor),L=kt(t,D.type.value,P),V=[E,C],ee="";if(_){let Z=a?u:1;V.push(R("bias",e[2].dataType,e[2].dims.length,Z)),ee=`${a?`value += bias[col / ${Z}];`:`value += ${D.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Tt(t,U);let ie=()=>{let Z=`var a_data: ${E.type.value};`;for(let G=0;G<m;G++)Z+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${u}];`;for(let G=0;G<b;G++){Z+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${m}];`;for(let ne=0;ne<m;ne++)Z+=`
            values[${G}] = fma(${C.type.value}(a_data${m===1?"":`[${ne}]`}), b_data${ne}, values[${G}]);
`}return Z};return`
  ${S.registerUniforms(U).registerInternalVariables(I).declareVariables(...V,D)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${rr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${rr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${ie()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${ee}
      ${L}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${m};${b};${a}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:k}}}),Ro,Bo,fa,Ci,Do,ma,Mo,Wr,La=N(()=>{"use strict";J(),re(),ae(),Et(),qa(),Ua(),Ro=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,fa=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],f=a?d:n,u=a?n:d,m=f/t[0],b=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&f%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${f/m}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ro(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Bo(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ci=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Do=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ma=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],u=a?p:n,m=a?n:p;if(!(m%t[1]===0&&u%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let b=m/t[1],y=u/t[0],_=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${Ci(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${_};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ci(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Do(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Mo=(e,t,r,i,a=!1)=>{let[n,s,l,d]=i,p=Te(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${rr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${rr("bIndices",l,l.rank-2,n.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ie(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ie(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Wr=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),f=i?i.slice(0,-2):r.slice(0,-2),u=z.size(f),m=s[s.length-2],b=s[s.length-1],y=l[l.length-1],_=b%4===0&&y%4===0,x=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(y/v[0]/x[0]),Math.ceil(m/v[1]/x[1]),Math.ceil(u/v[2]/x[2])],k=_?4:1,S=[...d,m,b/k],I=S.length,E=[...p,b,y/k],C=E.length,D=[u,m,y/k],P=[{type:6,data:m},{type:6,data:y},{type:6,data:b}];St(t,P),P.push(...K(f,S,E));let L=["rank","rank"],V=e.length>2;V&&(P.push(...K(e[2].dims)),L.push("rank")),P.push(...K(D));let ee=U=>{let ie=f.length,Z=Ba("batchDims",e[0].dataType,ie,1),G=Te(e[0].dataType),ne=R("a",e[0].dataType,I,k),te=R("b",e[1].dataType,C,k),X=F("result",e[0].dataType,D.length,k),ye=[ne,te];if(V){let me=a?k:1;ye.push(R("bias",e[2].dataType,e[2].dims.length,me))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Tt(t,M);let q=Te(X.type.tensor),ue=kt(t,X.type.value,q),fe=Mo(k,V,ue,[Z,ne,te,X],a);return`
  ${U.registerUniforms(M).registerInternalVariables(Z).declareVariables(...ye,X)}
  ${fe}
  ${_?fa(x,v,G,Z):ma(x,v,G,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${_};${a}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:P}),getShaderSource:ee}}}),No,eh,Em=N(()=>{"use strict";J(),it(),ae(),Et(),Ua(),Im(),La(),No=(e,t,r,i,a=!1,n,s=4,l=4,d=4,p="f32")=>{let f=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},u=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ie(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${_}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,k=e?t&&i?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ie(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ie(s,p)}(0.0);`,S=e?i&&r?u(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${u(l)}
    }
    return ${Ie(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${u(l)}
    }
    return ${Ie(l,p)}(0.0);`,I=Ie(d,p),E=Ie(e?s:l,p),C=Ie(e?l:s,p),D=kt(n,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?k:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${Xp(a)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},eh=(e,t,r,i,a,n,s,l,d)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],u=r[0],m=p?r[2]:r[3],b=p?r[1]:r[2],y=p?r[3]:r[1],_=p&&(f%4===0||f%3===0)&&y%4===0,x=p?y:m*b,v=p?m*b:y,$=[8,8,1],k=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(x/$[0]/k[0]),Math.ceil(v/$[1]/k[1]),Math.ceil(u/$[2]/k[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=_?p&&f%4!==0?3:4:1,E=$[1]*k[1],C=$[0]*k[0],D=Math.max($[0]*I,$[1]),P=i%E===0,L=a%C===0,V=n%D===0,ee=_?[I,4,4]:[1,1,1],U=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];St(t,U),U.push(...K(e[0].dims,e[1].dims));let ie=["rank","rank"];s&&(U.push(...K(e[2].dims)),ie.push("rank")),U.push(...K(r));let Z=G=>{let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Tt(t,ne);let te=_?4:1,X=Te(e[0].dataType),ye=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${X}>`:X}) {
        result[flatIndex] = ${_?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,M=R("x",e[0].dataType,e[0].dims.length,I===3?1:I),q=R("w",e[1].dataType,e[1].dims.length,te),ue=[M,q],fe=F("result",e[0].dataType,r.length,te);if(s){let me=R("bias",e[2].dataType,e[2].dims.length,te);ue.push(me),ye+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${X}>`:X} {
          return bias[coords.${p?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${Jp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(ne).declareVariables(...ue,fe)}
        ${ye}
        ${No(p,P,L,V,s,t,ee[0],ee[1],ee[2],X)}
        ${_?fa(k,$,X,void 0,!p,D):ma(k,$,X,void 0,!p,D,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${_};${P};${L};${V};${E};${C};${D}`,inputDependencies:ie},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:U}),getShaderSource:Z}}}),Po,zi,Gt,Uo,Ai,Wo,th,rh,Cm=N(()=>{"use strict";J(),it(),re(),ae(),Et(),Ua(),Po=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},zi=e=>typeof e=="number"?[e,e,e]:e,Gt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Uo=(e,t,r,i=1)=>{let a=Gt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Ai=(e,t,r,i,a)=>{a==null&&(a=Uo(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Wo=(e,t,r,i,a,n,s,l,d,p)=>{let f,u,m,b;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Ai([t,r,i,1],[l,d,p],1,[a,n,s],e);u=y[0],m=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every((_,x,v)=>_===v[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Ai([t,r,i,1],[l,d,p],1,[a,n,s],e[0]);u=y[0],m=y[1],b=y[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/a),m=Math.ceil(r/n),b=Math.ceil(i/s);let y=(u-1)*a+l-t,_=(m-1)*n+d-r,x=(b-1)*s+p-i,v=Math.floor(y/2),$=y-v,k=Math.floor(_/2),S=_-k,I=Math.floor(x/2),E=x-I;f={top:k,bottom:S,left:I,right:E,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:u,outHeight:m,outWidth:b}},th=(e,t,r,i,a,n=!1,s="channelsLast")=>{let l,d,p,f,u;if(s==="channelsLast")[l,d,p,f,u]=e;else if(s==="channelsFirst")[l,u,d,p,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,b,y,_]=t,[x,v,$]=zi(r),[k,S,I]=zi(i),E=Gt(b,k),C=Gt(y,S),D=Gt(_,I),{padInfo:P,outDepth:L,outHeight:V,outWidth:ee}=Wo(a,d,p,f,x,v,$,E,C,D),U=n?m*u:m,ie=[0,0,0,0,0];return s==="channelsFirst"?ie=[l,U,L,V,ee]:s==="channelsLast"&&(ie=[l,L,V,ee,U]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:f,inChannels:u,outDepth:L,outHeight:V,outWidth:ee,outChannels:U,padInfo:P,strideDepth:x,strideHeight:v,strideWidth:$,filterDepth:b,filterHeight:y,filterWidth:_,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:S,dilationWidth:I,inShape:e,outShape:ie,filterShape:t}},rh=(e,t,r,i,a,n)=>{let s=n==="channelsLast",l=s?e[0].dims[3]:e[0].dims[1],d=!1,p=[64,1,1],f={x:r.map(($,k)=>k)},u=[Math.ceil(Po(f.x.map($=>r[$]))/p[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let m=d?s&&l%4!==0?3:4:1,b=z.size(r),y=[{type:12,data:b},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];St(t,y),y.push(...K(e[0].dims,e[1].dims));let _=["rank","rank"],x=e.length===3;x&&(y.push(...K(e[2].dims)),_.push("rank")),y.push(...K(r));let v=$=>{let k=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Tt(t,k);let S=d?4:1,I=Te(e[0].dataType),E=R("x",e[0].dataType,e[0].dims.length,m===3?1:m),C=R("W",e[1].dataType,e[1].dims.length,S),D=[E,C],P=F("result",e[0].dataType,r.length,S),L="";if(x){let U=R("bias",e[2].dataType,e[2].dims.length,S);D.push(U),L+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${d?`vec4<${I}>`:I} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}${d?"/ 4":""}];
        }`}let V=Ie(m,I),ee=kt(t,V,I);return`
            ${L}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${$.registerUniforms(k).declareVariables(...D,P)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${P.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,E.rank)};
              let d2 = ${s?j("coords",E.rank-1,E.rank):j("coords",1,E.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,E.rank):j("coords",2,E.rank)},
              ${s?j("coords",2,E.rank):j("coords",3,E.rank)},
              ${s?j("coords",3,E.rank):j("coords",4,E.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,E.rank):j("uniforms.x_shape",2,E.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,E.rank):j("uniforms.x_shape",3,E.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,E.rank):j("uniforms.x_shape",4,E.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,E.rank):j("uniforms.x_shape",1,E.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${x?"value = value + getBiasByOutputCoords(coords)":""};
              ${ee}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${m};${x}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:y}),getShaderSource:v}}}),ih,ah,zm=N(()=>{"use strict";J(),re(),ae(),Et(),ih=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],f=p/t.group,u=d&&f>=4?$e(p):1,m=z.size(r)/u,b=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];St(t,b),b.push(...K(s,[l[0],l[1],l[2],l[3]/u]));let y=a?["rank","rank","rank"]:["rank","rank"];b.push(...K([r[0],r[1],r[2],r[3]/u]));let _=x=>{let v=F("output",e[0].dataType,r.length,u),$=Te(v.type.tensor),k=kt(t,v.type.value,$),S=R("x",e[0].dataType,s.length),I=R("w",e[1].dataType,l.length,u),E=[S,I];a&&E.push(R("b",e[2].dataType,e[2].dims,u));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Tt(t,C);let D=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(C).declareVariables(...E,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${n}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:_}},ah=(e,t,r,i)=>{let a=e.length>2,n=$e(r[3]),s=$e(r[2]),l=z.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],f=[r[0],r[1],r[2],r[3]/n],u=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];St(t,u),u.push(...K(d,p,f));let m=(s-1)*t.strides[1]+p[1],b=y=>{let _=F("output",e[0].dataType,f.length,n),x=Te(_.type.tensor),v=kt(t,_.type.value,x),$=R("x",e[0].dataType,d.length,n),k=R("w",e[1].dataType,p.length,n),S=[$,k];a&&S.push(R("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Tt(t,E),`
  ${y.registerUniforms(E).declareVariables(...S,_)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${m}>;
    var values: array<${_.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:b}}}),qo,Tr,Lo,Ir,ga,Oi,Vo,Ho,ya,Am=N(()=>{"use strict";re(),Em(),Cm(),La(),zm(),Et(),qa(),ct(),qo=(e,t,r,i,a,n)=>{let s=e[0],l=e.slice(n?1:2,n?3:4),d=l.length,p=t[0],f=t.slice(2).map((m,b)=>m+(m-1)*(r[b]-1)),u=l.map((m,b)=>m+i[b]+i[b+d]).map((m,b)=>Math.floor((m-f[b]+a[b])/a[b]));return u.splice(0,0,s),u.splice(n?3:1,0,p),u},Tr=[2,3,1,0],Lo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ir=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Pr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},ga=e=>{let t=Pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Oi=(e,t,r,i)=>{let a=r.format==="NHWC",n=qo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let E=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(De(t[1],Tr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ah(E,r,n,i),{inputs:E}):e.compute(ih(E,r,n,i),{inputs:E});return}let s=t.length===3,l=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],f=t[1].dims[2],u=t[1].dims[3],m=n[a?1:2],b=n[a?2:3],y=n[a?3:1],_=a&&f===l&&u===d&&r.pads[0]===0&&r.pads[1]===0;if(_||f===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=n[0],C,D,P,L=[];if(a){let U=e.kernelCustomData.wT??e.compute(De(t[1],Tr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),_){let ie=l*d*p;C=t[0].reshape([1,E,ie]),D=U.reshape([1,ie,y]),P=[1,E,y]}else C=t[0].reshape([E,l*d,p]),D=U.reshape([1,p,y]),P=[E,m*b,y];L.push(C),L.push(D)}else C=t[0].reshape([E,p,l*d]),D=t[1].reshape([1,y,p]),P=[E,y,m*b],L.push(D),L.push(C);s&&L.push(t[2]);let V=P[2],ee=L[0].dims[L[0].dims.length-1];V<8&&ee<8?e.compute(Wa(L,r,n,P,a,i),{inputs:L}):e.compute(Wr(L,r,n,P,a,i),{inputs:L});return}let x=!0,v=e.kernelCustomData.wT??e.compute(De(t[1],Tr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];s&&$.push(t[2]);let k=a?m*b:y,S=a?y:m*b,I=f*u*p;e.compute(eh($,r,n,k,S,I,s,x,i),{inputs:$})},Vo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Ir({...t,pads:a,strides:n,dilations:s,kernelShape:l},i);Oi(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Ho=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Ir(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=th(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(rh(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ya=(e,t)=>{if(Lo(e.inputs,t),e.inputs[0].dims.length===3)Vo(e,t);else if(e.inputs[0].dims.length===5)Ho(e,e.inputs,t);else{let r=Ir(t,e.inputs);Oi(e,e.inputs,r)}}}),nh,Om=N(()=>{"use strict";J(),it(),re(),ae(),nh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,p=l[3],f=n?$e(d):1,u=n?$e(p):1,m=n?p===1?f:u:1,b=z.size(a)/u,y=[Math.ceil(b/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let _=["rank","rank"],x=[t.strides[0],t.strides[1]],v=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],$=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],S=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:b},{type:12,data:x},{type:12,data:v},{type:12,data:$},{type:12,data:k},{type:6,data:S},{type:12,data:d},{type:12,data:p},...K(e[0].dims,e[1].dims)];i&&(I.push(...K(e[2].dims)),_.push("rank")),I.push(...K(a));let E=C=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Te(e[0].dataType),L=n?1:2,V=n?2:3,ee=n?3:1,U=R("W",e[1].dataType,e[1].dims.length,m),ie=R("Dy",e[0].dataType,e[0].dims.length,f),Z=[ie,U];i&&Z.push(R("bias",e[2].dataType,[a[ee]].length,u));let G=F("result",e[0].dataType,a.length,u),ne=()=>{let X="";if(f===1)X+=`
        let w_offset = ${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${U.getByOffset(`w_offset / ${m}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)X+=`
          let wValue = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${m}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ye=0;ye<f;ye++)X+=`
            let wValue${ye} = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ye}, wOutChannel)`)} / ${m}`)};
            dotProd = dotProd + xValue[${ye}] * wValue${ye};`;return X},te=`
            let outputIndices = ${G.offsetToIndices(`global_idx * ${u}`)};
            let batch = ${G.indicesGet("outputIndices",0)};
            let d1 = ${G.indicesGet("outputIndices",ee)};
            let r = ${G.indicesGet("outputIndices",L)};
            let c = ${G.indicesGet("outputIndices",V)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${G.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${V}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${n?ie.getByOffset(`${ie.indicesToOffset(`${ie.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ie.get("batch","inputChannel","idyR","idyC")};
                  ${ne()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${u}]`:""};
            ${G.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(D).declareVariables(...Z,G)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${te}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${m}${u}${p===1}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:E}}}),Go,Fo,jo,Ri,sh,Ko,Bi,Qo,oh,Rm=N(()=>{"use strict";Om(),Et(),ct(),Go=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Fo=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},jo=(e,t,r,i,a,n,s,l,d,p)=>{let f=e.length-2,u=p.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let m=e[0],b=t[l?3:1]*a;for(let y=0,_=e.length-f-(l?1:0);y<f;++y,++_){let x=e[_],v=u?x*s[y]:p[y],$=Go(x,s[y],n[y],t[_],r[y],v);Fo($,i,n,y,y+f),u&&p.push(s[y]*(x-1)+d[y]+(t[_]-1)*r[y]+1-n[y]-n[y+f])}p.splice(0,0,m),p.splice(l?3:1,0,b)},Ri=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,m)=>u*m,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;d=new Array(u).fill(1)}let p=e.strides.slice();if(p.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}jo(l,r,d,e.autoPad,e.group,a,p,i,s,n);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:d,strides:p}),f},sh=e=>{let t=Pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),f=e.outputPadding,u=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:f,outputShape:u,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Ko=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Bi=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(nh(n,r,i),{inputs:n})},Qo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let d=t.outputPadding;d=[0].concat(d);let p=Ri({...t,pads:l,strides:s,dilations:n,kernelShape:a,outputPadding:d},i);Bi(e,i,p,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},oh=(e,t)=>{if(Ko(e.inputs,t),e.inputs[0].dims.length===3)Qo(e,t);else{let r=Ri(t,e.inputs);Bi(e,e.inputs,r)}}}),Yo,uh,lh,Bm=N(()=>{"use strict";J(),re(),ve(),ae(),Yo=(e,t,r,i)=>{let a=z.size(t),n=t.length,s=R("input",e,n),l=F("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=z.normalizeAxis(d,n),f=u=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,b=j("uniforms.input_shape","uniforms.axis",n),y=i.reverse?m+(i.exclusive?" + 1":""):"0",_=i.reverse?b:m+(i.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...K(t,t)]}),getShaderSource:f}},uh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Yo(i,r,a,t),{inputs:[0]})},lh=e=>{let t=e.exclusive===1,r=e.reverse===1;return ce({exclusive:t,reverse:r})}}),Zo,Xo,Jo,dh,ph,Dm=N(()=>{"use strict";J(),re(),ve(),ae(),Zo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Jo=(e,t)=>{let r,i,a,n,s,l,d=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";d?([r,i,a,n]=e.dims,s=f?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(s),m=u.dims.length,b=e.dataType,y=R("a",b,m),_=F("output",b,m),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(y,_)}

  ${Xo(l,m,y,_)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=d?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],k=z.size($),S=u.dims,I=z.sortBasedOnPerm(S,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...K(S,I)]}},getShaderSource:x}},dh=(e,t)=>{Zo(e.inputs),e.compute(Jo(e.inputs[0],t))},ph=e=>ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Er,Ft,Di,eu,tu,ru,iu,Mi,au,hh,ch,Mm=N(()=>{"use strict";J(),re(),ve(),ae(),Er="[a-zA-Z]|\\.\\.\\.",Ft="("+Er+")+",Di="^"+Ft+"$",eu="("+Ft+",)*"+Ft,tu="^"+eu+"$",ru=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},iu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Di)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Ft)))throw new Error("Invalid RHS");i.match(RegExp(Er,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],l=0;if(!e.match(RegExp(Di))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Er,"g")),p=new ru(i);return d?.forEach((f,u)=>{if(f==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<s.length;b++){let y=String.fromCharCode(48+b);p.addSymbol(y,u+b),this.addSymbol(y,r[l++],i)}}else p.addSymbol(f,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],i)}),p}},Mi=e=>e+"_max",au=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,f)=>R(`input${f}`,t,p)),n=z.size(i),s=F("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let f=[],u="var prod = 1.0;",m="var sum = 0.0;",b="sum += prod;",y=[],_=[],x=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){let E=r.rhs.symbolToIndices.get(I)?.[0];E!==void 0&&r.lhs.forEach((C,D)=>{if(S.inputIndices.includes(D)){let P=C.symbolToIndices.get(I);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(L=>{f.push(`${a[D].indicesSet(`input${D}Indices`,L,s.indicesGet("outputIndices",E))}`)})}})}else r.lhs.forEach((E,C)=>{if(S.inputIndices.includes(C)){let D=E.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(P=>{y.push(`${a[C].indicesSet(`input${C}Indices`,P,`${I}`)}`)}),v.push(`prod *= ${a[C].getByIndices(`input${C}Indices`)};`)}}),_.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Mi(I)}; ${I}++) {`),x.push("}")});let k=$?[...f,`let sum = ${a.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...f,m,..._,...y,u,...v,b,...x];return`
            ${p.registerUniforms(l.map(S=>({name:`${Mi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((S,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));p.push({type:12,data:n});let f=e.map((u,m)=>[...K(u)]).reduce((u,m)=>u.concat(m),p);return f.push(...K(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}},getShaderSource:d}},hh=(e,t)=>{let r=new iu(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(au(a,e.inputs[0].dataType,r,i))},ch=e=>{let t=e.equation.replace(/\s+/g,"");return ce({equation:t})}}),nu,Ni,su,ou,fh,Nm=N(()=>{"use strict";J(),re(),ae(),nu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ni=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},su=(e,t)=>e.length>t.length?Ni(e,t):Ni(t,e),ou=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=su(t,r),a=e[0].dataType,n=a===9||z.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,l=n||i.length>0&&i[i.length-1]%4===0?4:1,d=Math.ceil(z.size(i)/l),p=u=>{let m=R("input",a,t.length,s),b=F("output",a,i.length,l),y;if(a===9){let _=(x,v,$="")=>`
          let outputIndices${v} = ${b.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,b)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${x}[${v}] = ${$}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;y=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${_("data",0,"u32")}
        ${_("data",1,"u32")}
        ${_("data",2,"u32")}
        ${_("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${u.registerUniform("vec_size","u32").declareVariables(m,b)}
    ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},f=[{type:12,data:d},...K(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f})}},fh=e=>{nu(e.inputs),e.compute(ou(e.inputs),{inputs:[0]})}}),uu,mh,Pm=N(()=>{"use strict";J(),re(),ae(),Na(),uu=e=>{let t=e[0].dataType,r=z.size(e[0].dims),i=z.size(e[1].dims),a=i%4===0,n=s=>{let l=R("x",t,[1],4),d=R("bias",t,[1],4),p=F("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${d.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,m=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(l,d,p)}

    ${ha(ze(t))}

    ${s.mainStart(Pt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",ca("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Pt/4)}})}},mh=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Dp(e):e.compute(uu(e.inputs))}}),lu,du,gh,yh,Um=N(()=>{"use strict";J(),re(),ve(),ae(),lu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},du=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let l=r[n],d=e[0].dataType===9?4:1,p=Math.ceil(z.size(s)/d),f=[{type:12,data:p},{type:6,data:l},{type:12,data:n},...K(e[0].dims,e[1].dims,s)],u=m=>{let b=R("data",e[0].dataType,e[0].dims.length,d),y=R("inputIndices",e[1].dataType,e[1].dims.length),_=F("output",e[0].dataType,s.length,d),x=$=>{let k=i.length,S=`var indicesIndices${$}  = ${y.type.indices}(0);`;for(let I=0;I<k;I++)S+=`${k>1?`indicesIndices${$}[${I}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${I}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${y.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${b.type.indices};
        `;for(let I=0,E=0;I<a;I++)I===n?(S+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = u32(idx${$});`,E+=k):(S+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${E}]`:`outputIndices${$}`};`,E++);return S},v;if(e[0].dataType===9){let $=(k,S,I="")=>`
          let outputIndices${S} = ${_.offsetToIndices(`outputOffset + ${S}u`)};
          ${x(S)};
          let offset${S} = ${b.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${k}[${S}] = ${I}(${b.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${b.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,_)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:u}},gh=e=>ce({axis:e.axis}),yh=(e,t)=>{let r=e.inputs;lu(r),e.compute(du(e.inputs,t))}}),pu,_h,bh,Wm=N(()=>{"use strict";J(),re(),ae(),pu=(e,t,r,i,a,n,s,l,d)=>{let p=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:d}],f=[n];p.push(...K(t.dims,f));let u=m=>{let b=R("indices_data",t.dataType,t.dims.length),y=F("input_slice_offsets_data",12,1,1),_=[b,y],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(x).declareVariables(..._)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:u},{inputs:[t],outputs:[-1]})[0]},_h=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],l=z.sizeToDimension(n,n.length-1),d=z.sizeFromDimension(i,t.batchDims+s),p=z.sizeToDimension(i,t.batchDims),f=z.sizeFromDimension(i,t.batchDims),u=l/p,m=new Array(s),b=d;for(let S=0;S<s;++S)m[s-1-S]=b,b*=i[t.batchDims+s-1-S];let y=pu(e,r[1],m,t.batchDims,i,l,u,f,s),_=t.batchDims+s;if(_>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(_)),v=z.size(x),$=[{type:12,data:v},{type:12,data:d},...K(r[0].dims,y.dims,x)],k=S=>{let I=R("data",r[0].dataType,r[0].dims.length),E=R("slice_offsets",12,y.dims.length),C=F("output",r[0].dataType,x.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:k},{inputs:[r[0],y]})},bh=e=>({batchDims:e.batch_dims,cacheKey:""})}),hu,cu,$h,wh,qm=N(()=>{"use strict";J(),re(),ve(),ae(),hu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((l,d)=>d===r?Math.ceil(l/i)===n.dims[d]:l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((l,d)=>l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.gatherAxis,a),s=z.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(n,1,...i);let d=z.size(l),p=e[2].dataType,f=e[0].dataType===22,u=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...K(...e.map((b,y)=>b.dims),l)],m=b=>{let y=R("data",e[0].dataType,e[0].dims.length),_=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),v=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=F("output",p,l.length),k=[y,_,x];v&&k.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(S).declareVariables(...k,$)}
        ${b.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(p)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:m}},$h=(e,t)=>{let r=e.inputs;hu(r,t),e.compute(cu(e.inputs,t))},wh=e=>ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fu,mu,vh,xh,Lm=N(()=>{"use strict";J(),re(),ve(),ae(),fu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},mu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,l=z.normalizeAxis(t.axis,a),d=r[l],p=n.slice(0),f=z.size(p),u=R("input",i,a),m=R("indicesInput",s,n.length),b=F("output",i,p.length),y=[{type:12,data:f},{type:6,data:d},{type:12,data:l}];return y.push(...K(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,m,b)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},vh=e=>ce({axis:e.axis}),xh=(e,t)=>{let r=e.inputs;fu(r),e.compute(mu(e.inputs,t))}}),gu,yu,kh,Sh,Vm=N(()=>{"use strict";J(),re(),ae(),gu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Td.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[a,n];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(n/d),f=Math.ceil(a/d),u=!0,m=z.size(l),b=[{type:12,data:u?p:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...K(e[2].dims)),y.push("rank")),b.push(...K(l));let _=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",S=R("a",e[0].dataType,e[0].dims),I=R("b",e[1].dataType,e[1].dims),E=S.type.value,C=null,D=[S,I];e.length===3&&(C=R("c",e[2].dataType,e[2].dims.length),D.push(C));let P=F("output",e[0].dataType,l.length);D.push(P);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(L).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${k}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=v=>{let $=R("a",e[0].dataType,e[0].dims),k=R("b",e[1].dataType,e[1].dims),S=null,I=[$,k];e.length===3&&(S=R("c",e[2].dataType,e[2].dims.length),I.push(S));let E=F("output",e[0].dataType,l.length);I.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return u?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*f},programUniforms:b}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:_}},kh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Sh=(e,t)=>{gu(e.inputs),e.compute(yu(e.inputs,t))}}),Ye,rt,_t,bt,_u,bu,$u,wu,vu,xu,ku,Su,Th,Ih,Hm=N(()=>{"use strict";J(),re(),ve(),ae(),[Ye,rt,_t,bt]=[0,1,2,3],_u=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},bu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,$u=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,wu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,vu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,xu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ye}] = batch;
     indices[${rt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_t}] = u32(r);
            indices[${bt}] = u32(c);
          }
        `;case"border":return`
          indices[${_t}] = u32(clamp(r, 0, H - 1));
          indices[${bt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_t}] = gs_reflect(r, border[1], border[3]);
          indices[${bt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ku=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ye}], indices[${rt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ye}], indices[${rt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Su=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=R("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ye,rt,_t,bt]=[0,3,1,2]);let s=F("output",e[0].dataType,n.length),l=r.type.value,d=z.size(n),p=[{type:12,data:d},...K(e[0].dims,i,n)],f=u=>`
  ${u.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${bu}
  ${$u(l)}
  ${wu(t)}
  ${vu(t)}
  ${xu(r,l,t)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_t}]);
      let W_in = i32(uniforms.x_shape[${bt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ye}], indices[${_t}], indices[${bt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ku(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:u=>{let m=z.size(n);return{outputs:[{dims:n,dataType:u[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:p}},getShaderSource:f}},Th=(e,t)=>{_u(e.inputs),e.compute(Su(e.inputs,t))},Ih=e=>ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ae,Tu,Eh,Pi,Iu,tr,Ch,zh=N(()=>{"use strict";J(),re(),ve(),Ra(),Ma(),ae(),ct(),Ae=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tu=(e,t)=>{let r=e[0],i=Ae(e,1),a=Ae(e,2),n=Ae(e,3),s=Ae(e,4),l=Ae(e,5),d=Ae(e,6),p=Ae(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],u=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=u,y=0,_=0,x=Math.floor(m/t.numHeads);if(d&&p&&z.size(d.dims)&&z.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=d.dims[2],_=d.dims[2]}else if(d&&z.size(d.dims)||p&&z.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&z.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,b=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,b=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,b=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&z.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=y+b,k=0;if(s&&z.size(s.dims)>0){k=8;let C=s.dims;throw C.length===1?C[0]===f?k=1:C[0]===3*f+2&&(k=3):C.length===2&&C[0]===f&&C[1]===$&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=m;if(a&&z.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(b!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(b!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],S=!0}}let E=!1;if(s&&z.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&z.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==u||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:u,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:m,vHiddenSize:I,headSize:x,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:E,passPastInKv:S,qkvFormat:v}},Eh=e=>ce({...e}),Pi=ce({perm:[0,2,1,3]}),Iu=(e,t,r,i,a,n,s)=>{let l=[i,a,n],d=z.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],f=u=>{let m=F("qkv_with_bias",t.dataType,l),b=R("qkv",t.dataType,l),y=R("bias",r.dataType,l),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(_).declareVariables(b,y,m)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},tr=(e,t,r,i,a,n,s,l)=>{let d=n;if(s&&z.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=Iu(e,n,s,t,i,r*a,l),d=d.reshape([t,i,r,a]),r===1||i===1?d:e.compute(De(d,Pi.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,i,r,a])),r===1||i===1?d:e.compute(De(d,Pi.perm),{inputs:[d],outputs:[-1]})[0]},Ch=(e,t)=>{let r=Tu(e.inputs,t),i=e.inputs[0],a=Ae(e.inputs,1),n=Ae(e.inputs,2),s=Ae(e.inputs,3),l=Ae(e.inputs,4),d=Ae(e.inputs,5),p=Ae(e.inputs,6),f=Ae(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let u=a&&n&&a.dims.length===4&&n.dims.length===4,m=tr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(u)return ir(e,m,a,n,l,void 0,p,f,d,r);if(!a||!n)throw new Error("key and value must be provided");let b=tr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=tr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);ir(e,m,b,y,l,void 0,p,f,d,r)}}),Eu,Cu,zu,Au,_a,Ah,Oh,Rh=N(()=>{"use strict";J(),re(),ve(),ae(),Eu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Cu=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ce({numOutputs:i,axis:t.axis,splitSizes:r})},zu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Au=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},_a=(e,t)=>{let r=e[0].dims,i=z.size(r),a=e[0].dataType,n=z.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=R("input",a,r.length),d=new Array(t.numOutputs),p=[],f=[],u=0,m=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){u+=t.splitSizes[y],d[y]=u;let _=r.slice();_[n]=t.splitSizes[y],f.push(_),s[y]=F(`output${y}`,a,_.length),p.push({dims:f[y],dataType:e[0].dataType})}m.push({type:12,data:d},...K(r,...f));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${zu(d.length)}
  ${Au(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Ah=(e,t)=>{Eu(e.inputs);let r=e.inputs.length===1?t:Cu(e.inputs,t);e.compute(_a(e.inputs,r),{inputs:[0]})},Oh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ce({axis:t,numOutputs:i,splitSizes:r})}}),Ou,Ru,Ui,Bh,Gm=N(()=>{"use strict";ve(),Ma(),zh(),Rh(),ct(),Ou=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=p,m=0,b=!i||i.dims.length===0,y=Math.floor(b?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);b&&(f=y*t.numHeads);let _=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(_&&n.dims.length===4&&n.dims[0]===d&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(_||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');u=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');u=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');u=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,k=!1,S=t.kvNumHeads?y*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(u!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(u!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],k=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:S,headSize:y,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Ru=ce({perm:[0,2,1,3]}),Ui=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(De(i,Ru.perm),{inputs:[i],outputs:[-1]})[0]),i},Bh=(e,t)=>{let r=Ou(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,u=ce({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[m,b,y]=!a&&!n?e.compute(_a([i],u),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],_=tr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,m,void 0,0);ir(e,_,Ui(e,b,r),Ui(e,y,r),void 0,void 0,s,l,void 0,r,d,p)}}),Wi,Bu,Du,Dh,Fm=N(()=>{"use strict";J(),re(),ct(),ae(),Wi=(e,t,r,i,a,n,s,l)=>{let d=$e(n),p=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,u=a*s,m=64;u===1&&(m=256);let b=[a,s,n/d],y=[a,s,2],_=["rank","type","type"],x=[];x.push(...K(b,y));let v=$=>{let k=R("x",t.dataType,3,d),S=R("scale",r.dataType,r.dims),I=R("bias",i.dataType,i.dims),E=F("output",1,3,2),C=[k,S,I,E];return`
  var<workgroup> workgroup_shared : array<${f}, ${m}>;
  const workgroup_size = ${m}u;
  ${$.declareVariables(...C)}
  ${$.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ht("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${ht("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${m}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:u},programUniforms:x}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Bu=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],l=i[1],d=z.sizeFromDimension(i,n),p=$e(d),f=z.size(a)/p,u=Wi(e,t[0],t[1],t[2],s,d,l,r.epsilon),m=[s,l,d/p],b=[s,l],y=["type","none"],_=x=>{let v=R("x",t[0].dataType,m.length,p),$=R("scale_shift",1,b.length,2),k=F("output",t[0].dataType,m.length,p),S=[v,$,k];return`
  ${x.registerUniform("output_size","u32").declareVariables(...S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...K(m,b,m)]}),getShaderSource:_},{inputs:[t[0],u]})},Du=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],l=z.sizeFromDimension(i,1)/s,d=$e(s),p=z.size(a)/d,f=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],u=["type","type"],m=!1,b=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,b.push(v+1);m=m&&i[i.length-1]!==1;let y=m?e.compute(De(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,$)=>i[b[$]])),_=Wi(e,y,t[1],t[2],n,l,s,r.epsilon),x=v=>{let $=Te(t[0].dataType),k=d===1?"vec2f":`mat${d}x2f`,S=C=>{let D=C===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${$}(${P}(scale.${D}))`;case 2:return`vec2<${$}>(${P}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${$}>(${P}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=R("input",t[0].dataType,t[0].dims,d),E=F("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:x},{inputs:[t[0],_]})},Dh=(e,t)=>{t.format==="NHWC"?Du(e,e.inputs,t):Bu(e,e.inputs,t)}}),Mu,Nu,Mh,jm=N(()=>{"use strict";J(),re(),ae(),Mu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Nu=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],l=a,d=z.normalizeAxis(t.axis,a.length),p=z.sizeToDimension(a,d),f=z.sizeFromDimension(a,d),u=z.size(n.dims),m=s?z.size(s.dims):0;if(u!==f||s&&m!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${m}`);let b=[];for(let I=0;I<a.length;++I)I<d?b.push(a[I]):b.push(1);let y=$e(f),_=["type","type"],x=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/y)},{type:1,data:t.epsilon}];s&&_.push("type");let v=r>1,$=r>2,k=I=>{let E=Te(e[0].dataType),C=[R("x",e[0].dataType,e[0].dims,y),R("scale",n.dataType,n.dims,y)];s&&C.push(R("bias",s.dataType,s.dims,y)),C.push(F("output",e[0].dataType,l,y)),v&&C.push(F("mean_data_output",1,b)),$&&C.push(F("inv_std_output",1,b));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(D).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${la("f32",y)};
    var mean_square_vector = ${la("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Mt(E,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ht("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ht("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Mt(E,y,"x[j + offset]")};
      let f32scale = ${Mt(E,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Mt(E,y,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:l,dataType:e[0].dataType}];return v&&S.push({dims:b,dataType:1}),$&&S.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:_},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:k}},Mh=(e,t)=>{Mu(e.inputs),e.compute(Nu(e.inputs,t,e.outputCount))}}),Pu,Nh,Km=N(()=>{"use strict";re(),qa(),La(),Pu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Nh=e=>{Pu(e.inputs);let t=Nt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Wa(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=z.size(e.inputs[0].dims.slice(0,-2)),s=z.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let l=e.inputs[0].reshape([1,n,i]),d=e.inputs[1].reshape([1,i,r]),p=[1,n,r],f=[l,d];e.compute(Wr(f,{activation:""},t,p),{inputs:f})}else e.compute(Wr(e.inputs,{activation:""},t))}}}),Uu,Wu,qu,Ph,Uh,Qm=N(()=>{"use strict";J(),re(),ve(),ae(),Uu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!z.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(z.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(z.size(d)!==p)throw new Error("zeroPoints input size error.")}},Wu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=z.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=$e(t.k),m=$e(p),b=$e(s),y=l.concat([a,s]),_=a>1&&s/b%2===0?2:1,x=z.size(y)/b/_,v=64,$=[],k=[d,a,n/u],S=z.convertShape(e[1].dims).slice();S.splice(-1,1,p/m),$.push(...K(k)),$.push(...K(S)),$.push(...K(e[2].dims)),e.length===4&&$.push(...K(z.convertShape(e[3].dims)));let I=[d,a,s/b];$.push(...K(I));let E=C=>{let D=k.length,P=R("a",e[0].dataType,D,u),L=R("b",12,S.length,m),V=R("scales",e[2].dataType,e[2].dims.length),ee=[P,L,V],U=e.length===4?R("zero_points",12,e[3].dims.length):void 0;U&&ee.push(U);let ie=I.length,Z=F("output",e[0].dataType,ie,b),G=Te(e[0].dataType),ne=(()=>{switch(u){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${u}-component is not supported.`)}})(),te=()=>{let M=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ne};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<b*_;q++)M+=`
            b_value = ${m===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ne}(${Array.from({length:4},(ue,fe)=>`${G}(b_value_lower[${fe}]), ${G}(b_value_upper[${fe}])`).join(", ")});
            b_dequantized_values = ${u===1?`${ne}(${Array.from({length:8},(ue,fe)=>`(b_quantized_values[${fe}] - ${U?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${ne}(${Array(8).fill(`${U?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(q/b)}]${b>1?`[${q%b}]`:""} += ${Array.from({length:8/u},(ue,fe)=>`${u===1?`a_data[${fe}] * b_dequantized_values[${fe}]`:`dot(a_data[${fe}], b_dequantized_values[${fe}])`}`).join(" + ")};
          `;return M},X=()=>{let M=`
            var col_index = col * ${b};
            ${U?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            `;for(let q=0;q<b*_;q++)M+=`
            let scale${q} = ${V.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${G}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},ye=()=>{let M=`col_index = col * ${b};`;for(let q=0;q<b*_;q++)M+=`
            let b${q}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ne};
            var b_dequantized_values: ${ne};`,M};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${_*v}>;
        ${C.declareVariables(...ee,Z)}
        ${C.mainStart([v,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${v}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${X()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${ye()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${te()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${m};${b};${_};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x},programUniforms:$}),getShaderSource:E}},qu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=z.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=$e(t.k),m=$e(p),b=l.concat([a,s]),y=128,_=s%8===0?8:s%4===0?4:1,x=y/_,v=x*m*8,$=v/u,k=v/t.blockSize,S=z.size(b)/_,I=[],E=[d,a,n/u],C=z.convertShape(e[1].dims).slice();C.splice(-1,1,p/m),I.push(...K(E)),I.push(...K(C)),I.push(...K(e[2].dims)),e.length===4&&I.push(...K(z.convertShape(e[3].dims)));let D=[d,a,s];I.push(...K(D));let P=L=>{let V=E.length,ee=R("a",e[0].dataType,V,u),U=R("b",12,C.length,m),ie=R("scales",e[2].dataType,e[2].dims.length),Z=[ee,U,ie],G=e.length===4?R("zero_points",12,e[3].dims.length):void 0;G&&Z.push(G);let ne=D.length,te=F("output",e[0].dataType,ne),X=Te(e[0].dataType),ye=()=>{switch(u){case 1:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${u}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${te.type.value}, ${x}>, ${_}>;
        ${L.declareVariables(...Z,te)}
        ${L.mainStart([x,_,1])}
          let output_indices = ${te.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${G?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${X}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            let scale = ${ie.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${U.getByIndices(`${U.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/u};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ye()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${X}>(${Array.from({length:4},(M,q)=>`${X}(b_value_lower[${q}]), ${X}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${X}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/u};
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${te.setByIndices(`${te.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${u};${m};${x};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:S},programUniforms:I}),getShaderSource:P}},Ph=(e,t)=>{Uu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(qu(e.inputs,t)):e.compute(Wu(e.inputs,t))},Uh=e=>ce(e)}),Lu,Vu,Hu,Gu,Fu,ju,Ku,Qu,Wh,Ym=N(()=>{"use strict";J(),re(),ae(),Lu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Vu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${j("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Hu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Gu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k = i32(${j("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Fu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${j("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k -= i32(${j("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ju=(e,t,r)=>{switch(r.mode){case 0:return Vu(e,t,r.pads.length);case 1:return Hu(e,t,r.pads.length);case 2:return Gu(e,t,r.pads.length);case 3:return Fu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ku=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=z.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...K(e[0].dims,r));let l=["rank"],d=p=>{let f=F("output",e[0].dataType,r.length),u=R("x",e[0].dataType,i.length),m=u.type.value,b=ju(f,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms(y).declareVariables(u,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:n}),getShaderSource:d}},Qu=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)n[Number(l[d])]=Number(r[d]),n[Number(l[d])+a]=Number(r[d+l.length])}else r.forEach((l,d)=>n[Number(d)]=Number(l));let s=[];return n.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},Wh=(e,t)=>{Lu(e.inputs);let r=Qu(e.inputs,t);e.compute(Ku(e.inputs,r),{inputs:[0]})}}),jt,qi,Li,Vi,Hi,Yu,Zu,Gi,Fi,qh,Lh,ji,Vh,Hh,Ki,Gh,Fh,jh,Kh,Zm=N(()=>{"use strict";Ge(),J(),re(),ae(),jt=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},qi=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=n?t.dilations.slice():[],p=t.pads.slice();Pr.adjustPoolAttributes(r,a,s,l,d,p);let f=Pr.computePoolOutputShape(r,a,l,d,s,p,t.autoPad),u=Object.assign({},t);n?Object.assign(u,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=f.slice();return m.push(m.splice(1,1)[0]),[u,i?m:f]},Li=(e,t)=>{let r=t.format==="NHWC",i=z.size(e),a=z.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],u=!!(p+f);n.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(_+x),n.push({type:12,data:b},{type:12,data:y},{type:12,data:_},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,u,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=z.computeStrides(t.kernelShape);n.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,f)=>p+f);return[n,s,!!d,!1,!1]}},Vi=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m=a.format==="NHWC",b=t.type.value,y=F("output",t.type.tensor,i);if(a.kernelShape.length<=2){let _="",x="",v="",$=r-(m?2:1);if(f?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let k=r-(m?3:2);u?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${b}(${l});
              var pad = 0;
              ${x}
              ${_}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=a.kernelShape.length,x=a.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${_}>;

              var value = ${b}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${_-1}u; j++) {
                  offsets[j] = offset / ${j("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${j("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${r-_}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${j("uniforms.strides",`j - ${r-_}u`,_)}
                    + offsets[j - ${r-_}u] - ${j("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Hi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Yu=e=>`${Hi(e)};${e.countIncludePad}`,Zu=e=>`${Hi(e)};${e.storageOrder};${e.dilations}`,Gi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Fi=(e,t,r,i)=>{let[a,n]=qi(t,i,r),s=R("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,u,m,b,y]=Li(n,a);f.push(...K(t.dims,n));let _=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${b};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:f}),getShaderSource:x=>Vi(x,s,t.dims.length,n.length,a,d,p,0,u,m,b,y)}},qh=e=>{let t=e.count_include_pad!==0,r=Gi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Yu(i)}},Lh=(e,t)=>{jt(e.inputs),e.compute(Fi("AveragePool",e.inputs[0],!1,t))},ji={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Vh=e=>{let t=e.format;return{format:t,...ji,cacheKey:t}},Hh=(e,t)=>{jt(e.inputs),e.compute(Fi("GlobalAveragePool",e.inputs[0],!0,t))},Ki=(e,t,r,i)=>{let[a,n]=qi(t,i,r),s=`
      value = max(x_val, value);
    `,l="",d=R("x",t.dataType,t.dims.length),p=["rank"],[f,u,m,b,y]=Li(n,a);return f.push(...K(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${b};${y}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:f}),getShaderSource:_=>Vi(_,d,t.dims.length,n.length,a,s,l,t.dataType===10?-65504:-1e5,u,m,b,y)}},Gh=(e,t)=>{jt(e.inputs),e.compute(Ki("MaxPool",e.inputs[0],!1,t))},Fh=e=>{let t=e.storage_order,r=e.dilations,i=Gi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Zu(a)}},jh=e=>{let t=e.format;return{format:t,...ji,cacheKey:t}},Kh=(e,t)=>{jt(e.inputs),e.compute(Ki("GlobalMaxPool",e.inputs[0],!0,t))}}),Xu,Ju,Qh,Yh,Xm=N(()=>{"use strict";J(),re(),ve(),ae(),Xu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ju=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,l=z.size(n),d=i===3||i===2,p=d?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,u=e.length>2?e[2]:void 0,m=u?d?[Math.ceil(z.size(u.dims)/4)]:u.dims:void 0,b=f.length===0||f.length===1&&f[0]===1,y=b===!1&&f.length===1,_=$e(l),x=b&&(!d||_===4),v=x?_:1,$=x&&!d?_:1,k=R("input",d?12:i,p.length,$),S=R("scale",s,f.length),I=u?R("zero_point",d?12:i,m.length):void 0,E=F("output",s,n.length,v),C=[k,S];I&&C.push(I);let D=[p,f];u&&D.push(m);let P=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...K(...D,n)],L=V=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${V.registerUniforms(ee).declareVariables(...C,E)}
      ${V.mainStart()}
          ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${S.getByOffset("0")}`:y?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?b?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:y?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:P})}},Qh=(e,t)=>{Xu(e.inputs,t),e.compute(Ju(e.inputs,t))},Yh=e=>ce({axis:e.axis,blockSize:e.blockSize})}),el,tl,Zh,Jm=N(()=>{"use strict";Ge(),J(),ae(),el=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},tl=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...K(n)],d=p=>{let f=F("output",i,n.length),u=f.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${p.registerUniforms(m).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},Zh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&el(t,r,i),e.compute(tl(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),rl,il,Xh,Jh,eg=N(()=>{"use strict";J(),re(),ve(),ae(),rl=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},il=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(z.size(i)/n),l=i[i.length-1],d=z.sizeFromDimension(r,l),p=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...K(e[1].dims,e[2].dims,a)],f=u=>{let m=R("indices",e[1].dataType,e[1].dims.length),b=R("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?Cd("output",e[0].dataType,a.length):F("output",e[0].dataType,a.length,n);return`
      ${u.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,b,y)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${rl(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f}},Xh=e=>ce({reduction:e.reduction}),Jh=(e,t)=>{e.compute(il(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),al,nl,sl,Qi,ol,ul,ll,dl,pl,hl,cl,fl,Yi,ml,gl,yl,_l,bl,ec,tc,tg=N(()=>{"use strict";J(),re(),ve(),ae(),al=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},nl=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},sl=(e,t,r,i,a,n)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>n.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");al(i,t),t.axes.length>0&&nl(i,t.axes,p).forEach((f,u)=>i[u]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Qi=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,ol=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Qi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Qi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ul=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ll=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},dl=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},pl=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},hl=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${j("uniforms.scales","i",i)};
        var roi_low = ${j("uniforms.roi","i",a)};
        var roi_hi = ${j("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,cl=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${j("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j("uniforms.roi","i",n)};
          var roi_hi = ${j("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${j("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,fl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Yi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",ml=(e,t,r,i,a)=>{let[n,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Yi(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},gl=(e,t,r,i,a,n,s,l,d,p)=>{let f=r.length===2,u=!0,[m,b]=f?[0,1]:u?[2,3]:[1,2],y=e.type.value,_=x=>{let v=x===m?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",x)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[x]},
        ${i[x]}, ${r[x]}, ${n[x]}, ${n[x]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[x]} - 1))) {
          return ${d};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${y} = originalIdx + ${y}(i);
          if (${v} < 0 || ${v} >= ${r[x]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${v} = max(0, min(${v}, ${r[x]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",x,`u32(${v})`)};
          data[i + 1] = ${x===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(m)};
    ${_(b)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},yl=(e,t,r,i,a)=>{let[n,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Yi(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},_l=(e,t,r,i,a,n)=>{let s=e.dims,l=ll(n,t.axes,s.length),d=dl(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map(($,k)=>$===0?1:d[k]/$),t.keepAspectRatioPolicy!=="stretch"&&(d=pl(s,p,t)));let f=F("output",e.dataType,d.length),u=R("input",e.dataType,s.length),m=z.size(d),b=s.length===d.length&&s.every(($,k)=>$===d[k]),y=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,x=u.type.value,v=$=>`
      ${b?"":`
      ${ol(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fl(u,s)};
              ${ul(t.nearestMode,r,x)};
              ${cl(u,f,s,d,p.length,l.length,y)};
              `;case"linear":return`
              ${hl(f,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${ml(u,f,s,y,_)}`;if(s.length===3||s.length===5)return`${yl(u,f,s,y,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${gl(u,f,s,d,p,l,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(u,f)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${l.length>0?l:""}|${b}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...K(s,d)]})}},bl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},ec=(e,t)=>{let r=[],i=[],a=[],n=bl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");sl(e.inputs,t,n,r,i,a),e.compute(_l(e.inputs[0],t,n,r,i,a),{inputs:[0]})},tc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return ce({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),$l,wl,rc,rg=N(()=>{"use strict";J(),re(),ve(),ae(),$l=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(i.dims,[])&&!z.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!z.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],f=a.dims[0],u=z.sizeFromDimension(r.dims,1)/p,m=l===0?a.dims[1]*2:u/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},wl=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],l=z.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,f=e[2].dims[1],u=a===0?f*2:p/i,m=new Array(s,d,p/u,u-f),b=z.computeStrides(m),y=[{type:1,data:n},{type:12,data:m},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[l,p,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,u,d*u,1]}):[],...K(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=x=>{let v=R("input",e[0].dataType,e[0].dims.length),$=R("position_ids",e[1].dataType,e[1].dims.length),k=R("cos_cache",e[2].dataType,e[2].dims.length),S=R("sin_cache",e[3].dataType,e[3].dims.length),I=F("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${x.declareVariables(v,$,k,S,I)}

        ${x.mainStart(Pt)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",F("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(m)/Pt)},programUniforms:y})}},rc=(e,t)=>{$l(e.inputs,t),e.compute(wl(e.inputs,t))}}),vl,xl,ic,ig=N(()=>{"use strict";J(),re(),ae(),vl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},xl=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=z.size(n),l=n,d=s,p=n.slice(-1)[0],f=i?n.slice(0,-1).concat(1):[],u=!a&&e.length>3,m=e.length>4,b=i&&r>1,y=i&&r>2,_=r>3,x=64,v=$e(p),$=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],k=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[R("x",e[0].dataType,e[0].dims,v),R("skip",e[1].dataType,e[1].dims,v),R("gamma",e[2].dataType,e[2].dims,v)];u&&C.push(R("beta",e[3].dataType,e[3].dims,v)),m&&C.push(R("bias",e[4].dataType,e[4].dims,v)),C.push(F("output",e[0].dataType,l,v)),b&&C.push(F("mean_output",1,f)),y&&C.push(F("inv_std_output",1,f)),_&&C.push(F("input_skip_bias_sum",e[0].dataType,l,v));let D=Te(e[0].dataType),P=Te(1,v);return`

      ${I.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${P}, ${x}>;
      var<workgroup> sum_squared_shared : array<${P}, ${x}>;

      ${I.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Mt(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ht("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ht("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:l,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${b};${y};${_}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:k,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:$})}},ic=(e,t)=>{vl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(xl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),kl,Kt,Sl,Zi,Tl,Il,ac,nc,ag=N(()=>{"use strict";J(),re(),ve(),ae(),kl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Kt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Sl=(e,t)=>{if(e.length>1){let r=Kt(e,1),i=Kt(e,2),a=Kt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ce({starts:r,ends:i,axes:a})}else return t},Zi=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Tl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${j("uniforms.input_shape","i",r.length)};
            let steps_i = ${j("uniforms.steps","i",r.length)};
            let signs_i = ${j("uniforms.signs","i",r.length)};
            let starts_i = ${j("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Il=(e,t)=>{let r=e[0].dims,i=z.size(r),a=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Kt(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,$)=>Zi(v,$,r,a,n)),l=t.ends.map((v,$)=>Zi(v,$,r,a,n));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),l.splice(v,0,r[v]),n.splice(v,0,1));let d=n.map(v=>Math.sign(v));n.forEach((v,$,k)=>{if(v<0){let S=(l[$]-s[$])/v,I=s[$],E=I+S*n[$];s[$]=E,l[$]=I,k[$]=-v}});let p=r.slice(0);a.forEach((v,$)=>{p[v]=Math.ceil((l[v]-s[v])/n[v])});let f={dims:p,dataType:e[0].dataType},u=F("output",e[0].dataType,p.length),m=R("input",e[0].dataType,e[0].dims.length),b=z.size(p),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],_=[{type:12,data:b},{type:12,data:s},{type:6,data:d},{type:12,data:n},...K(e[0].dims,p)],x=v=>`
      ${v.registerUniforms(y).declareVariables(m,u)}
        ${Tl(m,u,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:_})}},ac=(e,t)=>{kl(e.inputs,t);let r=Sl(e.inputs,t);e.compute(Il(e.inputs,r),{inputs:[0]})},nc=e=>{let t=e.starts,r=e.ends,i=e.axes;return ce({starts:t,ends:r,axes:i})}}),El,Cl,sc,oc,ng=N(()=>{"use strict";J(),re(),ve(),ct(),ae(),El=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Cl=(e,t)=>{let r=e.inputs[0],i=r.dims,a=z.size(i),n=i.length,s=z.normalizeAxis(t.axis,n),l=s<i.length-1,d,p=[];l?(p=Array.from({length:n},(C,D)=>D),p[s]=n-1,p[n-1]=s,d=e.compute(De(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,u=f[n-1],m=a/u,b=$e(u),y=u/b,_=64;m===1&&(_=256);let x=(C,D)=>D===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:D===2?`max(${C}.x, ${C}.y)`:D===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,v=R("x",d.dataType,d.dims,b),$=F("result",d.dataType,d.dims,b),k=v.type.value,S=Te(d.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,I=C=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${C.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${x("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${ht("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${b};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:y}]}),getShaderSource:I},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(De(E,p),{inputs:[E]})},sc=(e,t)=>{El(e.inputs),Cl(e,t)},oc=e=>ce({axis:e.axis})}),Xi,zl,Al,Ol,uc,sg=N(()=>{"use strict";J(),re(),ae(),Xi=e=>Array.from(e.getBigInt64Array(),Number),zl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Xi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Al=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Ol=(e,t)=>{let r=e[0].dims,i=t??Xi(e[1]),a=Al(r,i),n=z.size(a),s=e[0].dataType,l=R("input",s,r.length),d=F("output",s,a.length),p=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...K(e[0].dims,a)]}),getShaderSource:p}},uc=e=>{zl(e.inputs),e.compute(Ol(e.inputs),{inputs:[0]})}}),Rl,Bl,lc,og=N(()=>{"use strict";J(),re(),ae(),Rl=(e,t,r,i,a)=>{let n=F("output_data",a,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),l=R("b_data",t[2].dataType,t[2].dims.length,4),d=R("c_data",t[0].dataType,t[0].dims.length,4),p,f=(u,m,b)=>`select(${m}, ${u}, ${b})`;if(!i)p=n.setByOffset("global_idx",f(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let u=(m,b,y="")=>{let _=`a_data[index_a${b}][component_a${b}]`,x=`b_data[index_b${b}][component_b${b}]`,v=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${n.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${s.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let offset_b${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let offset_c${b} = ${d.broadcastedIndicesToOffset(`output_indices${b}`,n)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${m}[${b}] = ${y}(${f(_,x,v)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Bl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(z.areEqual(t,r)&&z.areEqual(r,i)),s=t,l=z.size(t);if(n){let p=Nt.calcShape(Nt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=z.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Rl(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...K(i,t,r,s)]})}},lc=e=>{e.compute(Bl(e.inputs))}}),dc,ug=N(()=>{"use strict";wm(),Ma(),vm(),xm(),km(),Sm(),Tm(),Am(),Rm(),Bm(),Dm(),Mm(),Nm(),Pm(),Um(),Wm(),qm(),Lm(),Vm(),Hm(),Gm(),Fm(),jm(),Km(),Qm(),zh(),Ym(),Zm(),Xm(),Jm(),eg(),Da(),tg(),rg(),ig(),ag(),ng(),Rh(),sg(),ct(),Na(),og(),dc=new Map([["Abs",[ap]],["Acos",[np]],["Acosh",[sp]],["Add",[Wp]],["ArgMax",[ep,pa]],["ArgMin",[Jd,pa]],["Asin",[op]],["Asinh",[up]],["Atan",[lp]],["Atanh",[dp]],["Attention",[tp]],["AveragePool",[Lh,qh]],["BatchNormalization",[rp]],["BiasAdd",[ip]],["BiasSplitGelu",[Up]],["Cast",[hp,pp]],["Ceil",[fp]],["Clip",[cp]],["Concat",[Yp,Zp]],["Conv",[ya,ga]],["ConvTranspose",[oh,sh]],["Cos",[mp]],["Cosh",[gp]],["CumSum",[uh,lh]],["DepthToSpace",[dh,ph]],["DequantizeLinear",[Qh,Yh]],["Div",[qp]],["Einsum",[hh,ch]],["Elu",[yp,er]],["Equal",[Lp]],["Erf",[_p]],["Exp",[bp]],["Expand",[fh]],["FastGelu",[mh]],["Floor",[$p]],["FusedConv",[ya,ga]],["Gather",[yh,gh]],["GatherElements",[xh,vh]],["GatherBlockQuantized",[$h,wh]],["GatherND",[_h,bh]],["Gelu",[wp]],["Gemm",[Sh,kh]],["GlobalAveragePool",[Hh,Vh]],["GlobalMaxPool",[Kh,jh]],["Greater",[Fp]],["GreaterOrEqual",[Kp]],["GridSample",[Th,Ih]],["GroupQueryAttention",[Bh]],["HardSigmoid",[Cp,Ep]],["InstanceNormalization",[Dh]],["LayerNormalization",[Mh]],["LeakyRelu",[vp,er]],["Less",[jp]],["LessOrEqual",[Qp]],["Log",[Np]],["MatMul",[Nh]],["MatMulNBits",[Ph,Uh]],["MaxPool",[Gh,Fh]],["Mul",[Vp]],["MultiHeadAttention",[Ch,Eh]],["Neg",[kp]],["Not",[xp]],["Pad",[Wh]],["Pow",[Hp]],["QuickGelu",[Pp,er]],["Range",[Zh]],["Reciprocal",[Sp]],["ReduceMin",[Kd]],["ReduceMean",[Vd]],["ReduceMax",[jd]],["ReduceSum",[Yd]],["ReduceProd",[Qd]],["ReduceL1",[Hd]],["ReduceL2",[Gd]],["ReduceLogSum",[Xd]],["ReduceLogSumExp",[Fd]],["ReduceSumSquare",[Zd]],["Relu",[Tp]],["Resize",[ec,tc]],["RotaryEmbedding",[rc]],["ScatterND",[Jh,Xh]],["Sigmoid",[Ip]],["Sin",[zp]],["Sinh",[Ap]],["Slice",[ac,nc]],["SkipLayerNormalization",[ic]],["Split",[Ah,Oh]],["Sqrt",[Op]],["Softmax",[sc,oc]],["Sub",[Gp]],["Tan",[Rp]],["Tanh",[Bp]],["ThresholdedRelu",[Mp,er]],["Tile",[uc]],["Transpose",[Ad,Od]],["Where",[lc]]])}),pc,lg=N(()=>{"use strict";Ge(),it(),ae(),pc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Xe(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});a&&l.push({binding:l.length,resource:a});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),He(e.programInfo.name)}dispose(){}build(e,t){Xe(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=zd(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,l=r.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return He(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Dl,Ml,Nl,Pl,hc,dg=N(()=>{"use strict";Ge(),J(),it(),kd(),bm(),ug(),lg(),Dl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Ml=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Dl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Nl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Pl=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},hc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups")&&a("subgroups-f16"),this.device=await t.requestDevice(i),this.deviceInfo=new Pl(this.device),this.adapterInfo=new Nl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Sd(this),this.programManager=new pc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Aa(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Xe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),l=s.kernelType,d=s.kernelName,p=a.programName,f=a.inputTensorViews,u=a.outputTensorViews,m=t[i*2],b=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),_=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(x=>({dims:x.dims,dataType:xt(x.dataType)})),outputsMetadata:u.map(x=>({dims:x.dims,dataType:xt(x.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:p,startTime:y,endTime:_});else{let x="";f.forEach(($,k)=>{x+=`input[${k}]: [${$.dims}] | ${xt($.dataType)}, `});let v="";u.forEach(($,k)=>{v+=`output[${k}]: [${$.dims}] | ${xt($.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${p}" ${x}${v}execution time: ${_-y} ns`)}Dr("GPU",`${p}::${m}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),He()}run(e,t,r,i,a,n){Xe(e.name);let s=[];for(let $=0;$<t.length;++$){let k=t[$].data;if(k===0)continue;let S=this.gpuDataManager.get(k);if(!S)throw new Error(`no GPU data for input: ${k}`);s.push(S)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),f=r.length===0?l.map(($,k)=>k):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let u=[],m=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=n)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let k=f[$]===-1,S=f[$]===-2,I=k||S?a(l[$].dataType,l[$].dims):i(f[$],l[$].dataType,l[$].dims);if(u.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(k&&this.temporaryData.push(E),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}m.push(E)}if(s.length!==t.length||m.length!==u.length){if(m.length===0)return He(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(p){let $=0,k=[];p.forEach(C=>{let D=typeof C.data=="number"?[C.data]:C.data;if(D.length===0)return;let P=C.type===10?2:4,L,V;C.type===10?(V=D.length>4?16:D.length>2?8:D.length*P,L=D.length>4?16:P*D.length):(V=D.length<=2?D.length*P:16,L=16),$=Math.ceil($/V)*V,k.push($);let ee=C.type===10?8:4;$+=D.length>4?Math.ceil(D.length/ee)*L:D.length*P});let S=16;$=Math.ceil($/S)*S;let I=new ArrayBuffer($);p.forEach((C,D)=>{let P=k[D],L=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,P,L.length).set(L);else if(C.type===12)new Uint32Array(I,P,L.length).set(L);else if(C.type===10)new Uint16Array(I,P,L.length).set(L);else if(C.type===1)new Float32Array(I,P,L.length).set(L);else throw new Error(`Unsupported uniform type: ${xt(C.type)}`)});let E=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,$),this.gpuDataManager.release(E.id),b={offset:0,size:$,buffer:E.buffer}}let y=this.programManager.normalizeDispatchGroupSize(d),_=y[1]===1&&y[2]===1,x=Ml(e,t,_),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,y),this.programManager.setArtifact(x,v),he("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let $=0;$<p.length;$++){let k=p[$],S=k.type,I=typeof k.data=="number"?1:k.data.length,[E,C]=v.uniformVariablesInfo[$];if(S!==E||I!==C)throw new Error(`Uniform variable ${$} mismatch: expect type ${E} with size ${C}, got type ${S} with size ${I} in program "${v.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,s,m,y,b),He(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=dc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ua(this,e,t);return Oa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ul,Ji,Wl,ea,ta,ra,ql,cc,pg=N(()=>{"use strict";it(),Ul=1,Ji=()=>Ul++,Wl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ea=(e,t)=>{let r=Wl.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},ta=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return ea(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}},ra=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ea(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,a,!0,!0),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ql=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=Ji();return this.tensorTrackersById.set(e,new ra(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(e);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(this.backend.currentContext,t,r,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=Ji(),n=new ta({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new ra(this,n)),this.externalTensors.add(n),a}async getCachedTensor(e,t,r,i,a){let n=this.backend.currentSessionId,s=this.backend.currentContext;for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(s,e,t)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=n,f}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let l=await s.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:i,readable:a});return new ta({sessionId:n,context:s,tensor:l,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cc=(...e)=>new ql(...e)}),ia,Ll,fc,hg=N(()=>{"use strict";J(),It(),kd(),pg(),it(),ia=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ll=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},fc=class{constructor(e){this.tensorManager=cc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],Aa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Ll(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i){let a=ia.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,a,r,i)}uploadTensor(e,t){if(!Se().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Oa(r,t)}}registerMLTensor(e,t,r){let i=ia.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(this.currentContext,e,i,r);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,a,n){if(!n)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=n.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(a.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),i.constant(a,p)}flush(){}}}),mc={};ar(mc,{init:()=>gc});var Cr,Vl,gc,cg=N(()=>{"use strict";J(),dg(),it(),re(),hg(),Cr=class yc{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new yc(this.module,this.dataType,this.data,t)}},Vl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let l=[];for(let d=0;d<s;d++){let p=Number(e.getValue(i*a++,n)),f=Number(e.getValue(i*a++,"*")),u=Number(e.getValue(i*a++,n)),m=[];for(let b=0;b<u;b++)m.push(Number(e.getValue(i*a++,n)));l.push(new Cr(e,p,f,m))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,l,d)=>new Cr(this.module,l,this.output(s,d),d),n=(s,l)=>{let d=Dt(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new Cr(this.module,s,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},gc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new hc;await n.initialize(r,i),a("webgpu",[n,s=>n.alloc(Number(s)),s=>n.free(s),(s,l,d,p=!1)=>{if(p)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),n.memcpy(Number(s),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));n.upload(Number(l),f)}},async(s,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await n.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>n.createKernel(s,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>n.releaseKernel(s),(s,l,d,p)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let f=new Vl(t,n,Number(l));return n.computeKernel(Number(s),f,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let n=new fc(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,l,d,p)=>n.ensureTensor(s,l,d,p),(s,l)=>{n.uploadTensor(s,l)},async(s,l)=>n.downloadTensor(s,l)])}}}),Hl,Va,Ha,dt,Gl,qr,Ga,Fa,aa,ja,Ka,Qa,_c=N(()=>{"use strict";ym(),_m(),J(),It(),Ta(),xd(),Hl=(e,t)=>{Se()._OrtInit(e,t)!==0&&de("Can't initialize onnxruntime.")},Va=async e=>{Hl(e.wasm.numThreads,Nr(e.logLevel))},Ha=async(e,t)=>{{let r=(cg(),Br(mc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},dt=new Map,Gl=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&de("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},qr=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ga=async(e,t)=>{let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=qr(e);let n=0,s=0,l=0,d=[],p=[],f=[];try{if([s,d]=vd(t),t?.externalData&&a.mountExternalData){let $=[];for(let k of t.externalData){let S=typeof k=="string"?k:k.path;$.push(za(typeof k=="string"?k:k.data).then(I=>{a.mountExternalData(S,I)}))}await Promise.all($)}for(let $ of t?.executionProviders??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let k=$,S=k?.context,I=k?.gpuDevice,E=k?.deviceType,C=k?.powerPreference;S?a.currentContext=S:I?a.currentContext=await a.jsepCreateMLContext(I):a.currentContext=await a.jsepCreateMLContext({deviceType:E,powerPreference:C})}else a.currentContext=await a.jsepCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),n===0&&de("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.jsepRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[u,m]=Gl(n),b=!!t?.enableGraphCapture,y=[],_=[],x=[];for(let $=0;$<u;$++){let k=a._OrtGetInputName(n,$);k===0&&de("Can't get an input name."),p.push(k),y.push(a.UTF8ToString(k))}for(let $=0;$<m;$++){let k=a._OrtGetOutputName(n,$);k===0&&de("Can't get an output name."),f.push(k);let S=a.UTF8ToString(k);_.push(S);{if(b&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[S]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(b&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(I)}}let v=null;return x.some($=>$==="gpu-buffer"||$==="ml-tensor")&&(l=a._OrtCreateBinding(n),l===0&&de("Can't create IO binding."),v={handle:l,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map($=>oa($))}),dt.set(n,[n,p,f,v,b,!1]),[n,y,_]}catch(u){throw p.forEach(m=>a._OrtFree(m)),f.forEach(m=>a._OrtFree(m)),l!==0&&a._OrtReleaseBinding(l)!==0&&de("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&de("Can't release session."),u}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&de("Can't release session options."),d.forEach(u=>a._free(u)),a.unmountExternalData?.()}},Fa=e=>{let t=Se(),r=dt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&de("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&de("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),a.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(i)!==0&&de("Can't release session."),dt.delete(e)},aa=(e,t,r,i,a,n=!1)=>{if(!e){t.push(0);return}let s=Se(),l=s.PTR_SIZE,d=e[0],p=e[1],f=e[3],u,m;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let _=e[2].gpuBuffer;m=Dt(Xt(d),p);let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');u=x(i,a,_,m)}else if(f==="ml-tensor"){let _=e[2].mlTensor;m=Dt(Xt(d),p);let x=s.jsepRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');u=x(_,Xt(d),p)}else{let _=e[2];if(Array.isArray(_)){m=l*_.length,u=s._malloc(m),r.push(u);for(let x=0;x<_.length;x++){if(typeof _[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(u+x*l,Ce(_[x],r),"*")}}else m=_.byteLength,u=s._malloc(m),r.push(u),s.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),u)}let b=s.stackSave(),y=s.stackAlloc(4*p.length);try{p.forEach((x,v)=>s.setValue(y+v*l,x,l===4?"i32":"i64"));let _=s._OrtCreateTensor(Xt(d),u,m,y,p.length,oa(f));_===0&&de(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(_)}finally{s.stackRestore(b)}},ja=async(e,t,r,i,a,n)=>{let s=Se(),l=s.PTR_SIZE,d=dt.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],f=d[1],u=d[2],m=d[3],b=d[4],y=d[5],_=t.length,x=i.length,v=0,$=[],k=[],S=[],I=[],E=s.stackSave(),C=s.stackAlloc(_*l),D=s.stackAlloc(_*l),P=s.stackAlloc(x*l),L=s.stackAlloc(x*l);try{s.jsepOnRunStart?.(p),[v,$]=wd(n);for(let U=0;U<_;U++)aa(r[U],k,I,e,t[U],b);for(let U=0;U<x;U++)aa(a[U],S,I,e,_+i[U],b);for(let U=0;U<_;U++)s.setValue(C+U*l,k[U],"*"),s.setValue(D+U*l,f[t[U]],"*");for(let U=0;U<x;U++)s.setValue(P+U*l,S[U],"*"),s.setValue(L+U*l,u[i[U]],"*");if(m&&!y){let{handle:U,outputPreferredLocations:ie,outputPreferredLocationsEncoded:Z}=m;if(f.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${f.length}).`);for(let G=0;G<_;G++){let ne=t[G];await s._OrtBindInput(U,f[ne],k[G])!==0&&de(`Can't bind input[${G}] for session=${e}.`)}for(let G=0;G<x;G++){let ne=i[G];a[G]?.[3]?s._OrtBindOutput(U,u[ne],S[G],0)!==0&&de(`Can't bind pre-allocated output[${G}] for session=${e}.`):s._OrtBindOutput(U,u[ne],0,Z[ne])!==0&&de(`Can't bind output[${G}] to ${ie[G]} for session=${e}.`)}dt.set(e,[p,f,u,m,b,!0])}let V;m?V=await s._OrtRunWithBinding(p,m.handle,x,P,v):V=await s._OrtRun(p,D,C,_,L,x,P,v),V!==0&&de("failed to call OrtRun().");let ee=[];for(let U=0;U<x;U++){let ie=Number(s.getValue(P+U*l,"*"));if(ie===S[U]){ee.push(a[U]);continue}let Z=s.stackSave(),G=s.stackAlloc(4*l),ne=!1,te,X=0;try{s._OrtGetTensorData(ie,G,G+l,G+2*l,G+3*l)!==0&&de(`Can't access output tensor data on index ${U}.`);let ye=l===4?"i32":"i64",M=Number(s.getValue(G,ye));X=s.getValue(G+l,"*");let q=s.getValue(G+l*2,"*"),ue=Number(s.getValue(G+l*3,ye)),fe=[];for(let ke=0;ke<ue;ke++)fe.push(Number(s.getValue(q+ke*l,ye)));s._OrtFree(q)!==0&&de("Can't free memory for tensor dims.");let me=fe.reduce((ke,ge)=>ke*ge,1);te=xt(M);let Je=m?.outputPreferredLocations[i[U]];if(te==="string"){if(Je==="gpu-buffer"||Je==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ke=[];for(let ge=0;ge<me;ge++){let Ee=s.getValue(X+ge*l,"*"),nr=s.getValue(X+(ge+1)*l,"*"),Ut=ge===me-1?void 0:nr-Ee;ke.push(s.UTF8ToString(Ee,Ut))}ee.push([te,fe,ke,"cpu"])}else if(Je==="gpu-buffer"&&me>0){let ke=s.jsepGetBuffer;if(!ke)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=ke(X),Ee=Dt(M,me);if(Ee===void 0||!Ea(te))throw new Error(`Unsupported data type: ${te}`);ne=!0,ee.push([te,fe,{gpuBuffer:ge,download:s.jsepCreateDownloader(ge,Ee,te),dispose:()=>{s._OrtReleaseTensor(ie)!==0&&de("Can't release tensor.")}},"gpu-buffer"])}else if(Je==="ml-tensor"&&me>0){let ke=s.jsepEnsureTensor;if(!ke)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Dt(M,me)===void 0||!Ca(te))throw new Error(`Unsupported data type: ${te}`);let ge=await ke(X,M,fe,!1);ne=!0,ee.push([te,fe,{mlTensor:ge,download:s.jsepCreateMLTensorDownloader(X,te),dispose:()=>{s.jsepReleaseTensorId(X),s._OrtReleaseTensor(ie)}},"ml-tensor"])}else{let ke=Ia(te),ge=new ke(me);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(s.HEAPU8.subarray(X,X+ge.byteLength)),ee.push([te,fe,ge,"cpu"])}}finally{s.stackRestore(Z),te==="string"&&X&&s._free(X),ne||s._OrtReleaseTensor(ie)}}return m&&!b&&(s._OrtClearBoundOutputs(m.handle)!==0&&de("Can't clear bound outputs."),dt.set(e,[p,f,u,m,b,!1])),ee}finally{s.stackRestore(E),k.forEach(V=>s._OrtReleaseTensor(V)),S.forEach(V=>s._OrtReleaseTensor(V)),I.forEach(V=>s._free(V)),v!==0&&s._OrtReleaseRunOptions(v),$.forEach(V=>s._free(V))}},Ka=e=>{let t=Se(),r=dt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&de("Can't get an profile file name."),t._OrtFree(a)},Qa=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),pt,Ne,Rt,Qt,Yt,zr,na,Ar,$t,wt,Fl,bc,$c,wc,vc,xc,kc,Sc,Tc=N(()=>{"use strict";Ge(),_c(),It(),ka(),pt=()=>!!_e.wasm.proxy&&typeof document<"u",Rt=!1,Qt=!1,Yt=!1,Ar=new Map,$t=(e,t)=>{let r=Ar.get(e);r?r.push(t):Ar.set(e,[t])},wt=()=>{if(Rt||!Qt||Yt||!Ne)throw new Error("worker not ready")},Fl=e=>{switch(e.data.type){case"init-wasm":Rt=!1,e.data.err?(Yt=!0,na[1](e.data.err)):(Qt=!0,na[0]()),zr&&(URL.revokeObjectURL(zr),zr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ar.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},bc=async()=>{if(!Qt){if(Rt)throw new Error("multiple calls to 'initWasm()' detected.");if(Yt)throw new Error("previous call to 'initWasm()' failed.");if(Rt=!0,pt())return new Promise((e,t)=>{Ne?.terminate(),bd().then(([r,i])=>{try{Ne=i,Ne.onerror=n=>t(n),Ne.onmessage=Fl,na=[e,t];let a={type:"init-wasm",in:_e};!a.in.wasm.wasmPaths&&(r||import.meta.url?.startsWith("file:"))&&(a.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Ne.postMessage(a),zr=r}catch(a){t(a)}},t)});try{await Sa(_e.wasm),await Va(_e),Qt=!0}catch(e){throw Yt=!0,e}finally{Rt=!1}}},$c=async e=>{if(pt())return wt(),new Promise((t,r)=>{$t("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};Ne.postMessage(i)});await Ha(_e,e)},wc=async e=>pt()?(wt(),new Promise((t,r)=>{$t("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ne.postMessage(i,[e.buffer])})):qr(e),vc=async(e,t)=>{if(pt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return wt(),new Promise((r,i)=>{$t("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ne.postMessage(a,n)})}else return Ga(e,t)},xc=async e=>{if(pt())return wt(),new Promise((t,r)=>{$t("release",[t,r]);let i={type:"release",in:e};Ne.postMessage(i)});Fa(e)},kc=async(e,t,r,i,a,n)=>{if(pt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return wt(),new Promise((s,l)=>{$t("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:n}};Ne.postMessage(p,Qa(d))})}else return ja(e,t,r,i,a,n)},Sc=async e=>{if(pt())return wt(),new Promise((t,r)=>{$t("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ne.postMessage(i)});Ka(e)}}),sa,jl,Ic,fg=N(()=>{"use strict";Ge(),Tc(),J(),xa(),xd(),sa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jl=e=>{switch(e[3]){case"cpu":return new Ze(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ea(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ze.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ca(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ze.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ic=class{async fetchModelAndCopyToWasmMemory(e){return wc(await za(e))}async loadModel(e,t){Xe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await vc(r,t),He()}async dispose(){return xc(this.sessionId)}async run(e,t,r){Xe();let i=[],a=[];Object.entries(e).forEach(u=>{let m=u[0],b=u[1],y=this.inputNames.indexOf(m);if(y===-1)throw new Error(`invalid input '${m}'`);i.push(b),a.push(y)});let n=[],s=[];Object.entries(t).forEach(u=>{let m=u[0],b=u[1],y=this.outputNames.indexOf(m);if(y===-1)throw new Error(`invalid output '${m}'`);n.push(b),s.push(y)});let l=i.map((u,m)=>sa(u,()=>`input "${this.inputNames[a[m]]}"`)),d=n.map((u,m)=>u?sa(u,()=>`output "${this.outputNames[s[m]]}"`):null),p=await kc(this.sessionId,a,l,s,d,r),f={};for(let u=0;u<p.length;u++)f[this.outputNames[s[u]]]=n[u]??jl(p[u]);return He(),f}startProfiling(){}endProfiling(){Sc(this.sessionId)}}}),Ec={};ar(Ec,{OnnxruntimeWebAssemblyBackend:()=>$a,initializeFlags:()=>ba,wasmBackend:()=>Cc});var ba,$a,Cc,mg=N(()=>{"use strict";Ge(),Tc(),fg(),ba=()=>{if((typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0),_e.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let e=typeof navigator>"u"?em("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},$a=class{async init(e){ba(),await bc(),await $c(e)}async createInferenceSessionHandler(e,t){let r=new Ic;return await r.loadModel(e,t),Promise.resolve(r)}},Cc=new $a});Ge();Ge();Ge();var gg="1.21.0-dev.20250206-d981b153d3",yg=cd;{let e=(mg(),Br(Ec)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:gg,enumerable:!0});export{hd as InferenceSession,Dr as TRACE,Xe as TRACE_FUNC_BEGIN,He as TRACE_FUNC_END,Ze as Tensor,yg as default,_e as env,Bt as registerBackend};
