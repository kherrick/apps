import{a as X}from"./chunk-46XN3E3W.js";import{a as z}from"./chunk-SU46Q35L.js";import{Ab as d,Eb as V,Ec as T,Fa as _,Gb as u,Gc as H,Mb as h,Nb as v,Ob as w,Ub as c,ca as y,cb as k,f as g,ia as r,ja as l,jb as C,sc as E,ya as x,zb as s}from"./chunk-I3ZACZIM.js";import{i as f}from"./chunk-ZLNWVVCY.js";var p=(m,a,i=!1)=>{m.numbers.first="",m.numbers.second="",m.operation="",!i&&(a.value="")},S=m=>m.match(/[+\-*/]/)!==null;var R=["result"],I=["clear"],M=class m{calculator=null;dialogService=y(z);dialogSubscription;document=y(E);isBrowser;isReady=new g;platformId=y(_);results="loading...";isDialogOpen=!1;model={numbers:{first:"",second:""},operation:""};result;clear;nativeElement;constructor(a){this.isBrowser=H(this.platformId),this.isBrowser&&(this.nativeElement=a.nativeElement,this.isReady.next(!1),this.isReady.subscribe(()=>this.isReadyHandler())),this.dialogSubscription=this.dialogService.open$.subscribe(i=>{this.isDialogOpen=i})}ngOnInit(){if(this.isBrowser){let a=null;this.document.querySelector("[data-dotnet-script]")||(a=this.document.createElement("script"),a.setAttribute("src",X.DOTNET_PATH),a.setAttribute("data-dotnet-script","true"),this.document.body.appendChild(a));let i=()=>{let o=globalThis.runtime.dotnet;o.moduleConfig.configSrc="assets/minimal-c-sharp-wasm/mono-config.json";let e=()=>f(this,null,function*(){return yield o.create()});f(this,null,function*(){let t=yield e();return yield t.getAssemblyExports(t.getConfig().mainAssemblyName)}).then(t=>{this.calculator=t.Calculator,this.isReady.next(!0)})};a?a.onload=i:i(),this.nativeElement.addEventListener("keydown",o=>{this.handleKeydownAndPaste(this.calculator,this.model,this.result,o)})}}ngOnDestroy(){this.isReady?.unsubscribe(),this.dialogSubscription?.unsubscribe()}buttonHandler(a){this.handleCalculatorButtons(this.calculator,this.model,this.result.nativeElement,a,a.target)}handleCalculatorButtons(a,i,o,e,n){!e?.detail&&e?.key!==" "||this.handleCalculatorValue(a,i,o,n.value)}handleKeys(a){return this.handleKeydownAndPaste(this.calculator,this.model,this.result,a)}handleKeydownAndPaste(a,i,o,e){let n=e.key||e.data;e.inputType==="insertFromPaste"&&(n=e.data,e.preventDefault()),e.key!==" "&&(e.ctrlKey||e.metaKey||this.handleCalculatorValue(a,i,o.nativeElement,n))}handleResultKeydown(a){a.key!=="Tab"&&a.preventDefault()}handleResultBeforeInput(a){a.inputType==="insertFromPaste"&&this.handleKeydownAndPaste(this.calculator,this.model,this.result,a)}isReadyHandler(){p(this.model,this.result.nativeElement),this.result.nativeElement.focus()}solve(a,i,o){let e=null,n=i.numbers.first,t=i.numbers.second;if(a===null){this.dialogService.openDialog("Required dependencies are still loading...");return}try{i.operation==="+"&&(e=a.add(n,t)),i.operation==="-"&&(e=a.subtract(n,t)),i.operation==="*"&&(e=a.multiply(n,t)),i.operation==="/"&&(e=a.divide(n,t))}catch(b){if(String(b).includes("Attempted to divide by zero")){o.value="NaN",p(i,o,!0);return}o.value="Error",p(i,o,!0)}if(e!==null){p(i,o);let b=parseFloat(e).toString();if(b.includes("e-")||b.includes("e+")){o.value="Error",p(i,o,!0);return}if(b.includes(".")&&b.length>16&&(b=b.slice(0,16)),b.length>16){o.value="Error",p(i,o,!0);return}i.numbers.first=b,o.value=b}}handleCalculatorValue(a,i,o,e){(e=="Escape"||e=="Enter"||e=="."||e=="="||e=="c"||e=="0"||e=="1"||e=="2"||e=="3"||e=="4"||e=="5"||e=="6"||e=="7"||e=="8"||e=="9"||e=="+"||e=="-"||e=="*"||e=="/")&&this.resolveOperations(a,i,o,e),e.length>1&&e.match(/^\d+$/)&&Array.from(e).forEach(n=>{this.resolveOperations(a,i,o,n)})}resolveOperations(a,i,o,e){let n=S(e);if(!(n&&!i.numbers.first)&&!(o.value.includes(".")&&e===".")){if(e==="c"||e==="Escape"){p(i,o);return}if(e==="="||e==="Enter"){if(this.isDialogOpen)return;this.solve(a,i,o);return}if((o.value==="Error"||o.value==="NaN")&&p(i,o),i.operation){if(n)return}else{if(n){i.operation=e,o.value=e;return}if(o.value.length===16)return;i.numbers.first+=e,o.value+=e;return}if(!i.numbers.second){i.numbers.second=e,o.value=e;return}i.operation==="/"&&o.value.length===9||o.value.length!==16&&(i.numbers.second+=e,o.value+=e)}}static \u0275fac=function(i){return new(i||m)(k(x))};static \u0275cmp=C({type:m,selectors:[["x-calculator"]],viewQuery:function(i,o){if(i&1&&(h(R,5),h(I,5)),i&2){let e;v(e=w())&&(o.result=e.first),v(e=w())&&(o.clear=e.first)}},decls:56,vars:0,consts:[["result",""],["clear",""],["calculator-container",""],["href","https://karlherrick.com/2022/11/27/c-sharp-in-the-browser-without-blazor/"],["x-section",""],[1,"column"],[1,"row"],[1,"text-field","outlined"],["type","text","inputMode","none","id","result",3,"keydown","beforeInput"],["type","button","value","c",3,"click","keydown"],["type","button","value","1",3,"click","keydown"],["type","button","value","2",3,"click","keydown"],["type","button","value","3",3,"click","keydown"],["type","button","value","/",3,"click","keydown"],["type","button","value","4",3,"click","keydown"],["type","button","value","5",3,"click","keydown"],["type","button","value","6",3,"click","keydown"],["type","button","value","*",3,"click","keydown"],["type","button","value","7",3,"click","keydown"],["type","button","value","8",3,"click","keydown"],["type","button","value","9",3,"click","keydown"],["type","button","value","-",3,"click","keydown"],["type","button","value","0",3,"click","keydown"],["type","button","value",".",3,"click","keydown"],["type","button","value","=",3,"click","keydown"],["type","button","value","+",3,"click","keydown"]],template:function(i,o){if(i&1){let e=V();s(0,"div",2)(1,"section")(2,"header")(3,"h1"),c(4,"<x-calculator>"),d(),s(5,"p"),c(6," An experiment with Wasm using "),s(7,"a",3),c(8,"C# in the browser without the Blazor framework"),d()()()(),s(9,"section",4)(10,"div",5)(11,"div",6)(12,"label",7)(13,"input",8,0),u("keydown",function(t){return r(e),l(o.handleResultKeydown(t))})("beforeInput",function(t){return r(e),l(o.handleResultBeforeInput(t))}),d(),s(15,"span"),c(16,"Calculator"),d()(),s(17,"button",9,1),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(19," c "),d()(),s(20,"div",6)(21,"button",10),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(22," 1 "),d(),s(23,"button",11),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(24," 2 "),d(),s(25,"button",12),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(26," 3 "),d(),s(27,"button",13),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(28," / "),d()(),s(29,"div",6)(30,"button",14),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(31," 4 "),d(),s(32,"button",15),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(33," 5 "),d(),s(34,"button",16),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(35," 6 "),d(),s(36,"button",17),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(37," * "),d()(),s(38,"div",6)(39,"button",18),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(40," 7 "),d(),s(41,"button",19),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(42," 8 "),d(),s(43,"button",20),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(44," 9 "),d(),s(45,"button",21),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(46," - "),d()(),s(47,"div",6)(48,"button",22),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(49," 0 "),d(),s(50,"button",23),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(51," . "),d(),s(52,"button",24),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(53," = "),d(),s(54,"button",25),u("click",function(t){return r(e),l(o.buttonHandler(t))})("keydown",function(t){return r(e),l(o.buttonHandler(t))}),c(55," + "),d()()()()()}},dependencies:[T],styles:[`:where(html,.light-theme,.dark-theme),.tokens,:host{--md-sys-comp-button-background-color: var(--md-sys-color-surface);--md-sys-comp-button-color: var(--md-sys-color-primary);--md-comp-button-container-height: 40px;--md-comp-button-container-shape: 20px;--md-comp-text-button-container-elevation: var(--md-sys-elevation-level0);--md-comp-text-button-focus-state-layer-opacity: var( --md-sys-state-focus-state-layer-opacity );--md-comp-text-button-hover-state-layer-opacity: var( --md-sys-state-hover-state-layer-opacity );--md-comp-text-button-label-text-tracking: var( --md-sys-typescale-label-large-tracking );--md-comp-text-button-label-text-weight: var( --md-sys-typescale-label-large-weight );--md-comp-text-button-label-text-size: var( --md-sys-typescale-label-large-size );--md-comp-text-button-label-text-line-height: var( --md-sys-typescale-label-large-line-height );--md-comp-text-button-label-text-font: var( --md-sys-typescale-label-large-font );--md-comp-text-button-with-icon-icon-size: 18px;--md-comp-text-button-container-height: 40px;--md-comp-text-button-container-shape: var(--md-sys-shape-corner-full);--md-comp-text-button-pressed-state-layer-opacity: var( --md-sys-state-pressed-state-layer-opacity );--md-comp-text-button-with-icon-disabled-icon-opacity: .3799999952316284;--md-comp-text-button-disabled-label-text-opacity: .3799999952316284;--md-comp-filled-button-dragged-state-layer-opacity: var( --md-sys-state-dragged-state-layer-opacity );--md-comp-filled-button-dragged-container-elevation: var( --md-sys-elevation-level3 );--md-comp-filled-button-focus-state-layer-opacity: var( --md-sys-state-focus-state-layer-opacity );--md-comp-filled-button-focus-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-button-hover-state-layer-opacity: var( --md-sys-state-hover-state-layer-opacity );--md-comp-filled-button-hover-container-elevation: var( --md-sys-elevation-level1 );--md-comp-filled-button-label-text-tracking: var( --md-sys-typescale-label-large-tracking );--md-comp-filled-button-label-text-weight: var( --md-sys-typescale-label-large-weight );--md-comp-filled-button-label-text-size: var( --md-sys-typescale-label-large-size );--md-comp-filled-button-label-text-line-height: var( --md-sys-typescale-label-large-line-height );--md-comp-filled-button-label-text-font: var( --md-sys-typescale-label-large-font );--md-comp-filled-button-with-icon-icon-size: 18px;--md-comp-filled-button-container-elevation: var(--md-sys-elevation-level0);--md-comp-filled-button-container-height: 40px;--md-comp-filled-button-container-shape: var(--md-sys-shape-corner-full);--md-comp-filled-button-pressed-state-layer-opacity: var( --md-sys-state-pressed-state-layer-opacity );--md-comp-filled-button-pressed-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-button-with-icon-disabled-icon-opacity: .3799999952316284;--md-comp-filled-button-disabled-label-text-opacity: .3799999952316284;--md-comp-filled-button-disabled-container-opacity: .11999999731779099;--md-comp-filled-button-disabled-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-tonal-button-pressed-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-tonal-button-pressed-state-layer-opacity: var( --md-sys-state-pressed-state-layer-opacity );--md-comp-filled-tonal-button-focus-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-tonal-button-focus-state-layer-opacity: var( --md-sys-state-focus-state-layer-opacity );--md-comp-filled-tonal-button-hover-container-elevation: var( --md-sys-elevation-level1 );--md-comp-filled-tonal-button-hover-state-layer-opacity: var( --md-sys-state-hover-state-layer-opacity );--md-comp-filled-tonal-button-with-icon-disabled-icon-opacity: .3799999952316284;--md-comp-filled-tonal-button-disabled-label-text-opacity: .3799999952316284;--md-comp-filled-tonal-button-disabled-container-opacity: .11999999731779099;--md-comp-filled-tonal-button-disabled-container-elevation: var( --md-sys-elevation-level0 );--md-comp-filled-tonal-button-with-icon-icon-size: 18px;--md-comp-filled-tonal-button-label-text-weight: var( --md-sys-typescale-label-large-weight );--md-comp-filled-tonal-button-label-text-tracking: var( --md-sys-typescale-label-large-tracking );--md-comp-filled-tonal-button-label-text-size: var( --md-sys-typescale-label-large-size );--md-comp-filled-tonal-button-label-text-line-height: var( --md-sys-typescale-label-large-line-height );--md-comp-filled-tonal-button-label-text-font: var( --md-sys-typescale-label-large-font );--md-comp-filled-tonal-button-container-shape: var( --md-sys-shape-corner-full );--md-comp-filled-tonal-button-container-height: 40px;--md-comp-filled-tonal-button-container-elevation: var( --md-sys-elevation-level0 );--md-comp-outlined-button-container-elevation: var(--md-sys-elevation-level0);--md-comp-outlined-button-focus-state-layer-opacity: var( --md-sys-state-focus-state-layer-opacity );--md-comp-outlined-button-hover-state-layer-opacity: var( --md-sys-state-hover-state-layer-opacity );--md-comp-outlined-button-label-text-tracking: var( --md-sys-typescale-label-large-tracking );--md-comp-outlined-button-label-text-weight: var( --md-sys-typescale-label-large-weight );--md-comp-outlined-button-label-text-size: var( --md-sys-typescale-label-large-size );--md-comp-outlined-button-label-text-line-height: var( --md-sys-typescale-label-large-line-height );--md-comp-outlined-button-label-text-font: var( --md-sys-typescale-label-large-font );--md-comp-outlined-button-with-icon-icon-size: 18px;--md-comp-outlined-button-outline-width: 1px;--md-comp-outlined-button-container-height: 40px;--md-comp-outlined-button-container-shape: var(--md-sys-shape-corner-full);--md-comp-outlined-button-pressed-state-layer-opacity: var( --md-sys-state-pressed-state-layer-opacity );--md-comp-outlined-button-with-icon-disabled-icon-opacity: .3799999952316284;--md-comp-outlined-button-disabled-label-text-opacity: .3799999952316284;--md-comp-outlined-button-disabled-outline-opacity: .11999999731779099;--md-comp-elevated-button-focus-container-elevation: var( --md-sys-elevation-level1 );--md-comp-elevated-button-focus-state-layer-opacity: var( --md-sys-state-focus-state-layer-opacity );--md-comp-elevated-button-hover-container-elevation: var( --md-sys-elevation-level2 );--md-comp-elevated-button-hover-state-layer-opacity: var( --md-sys-state-hover-state-layer-opacity );--md-comp-elevated-button-label-text-tracking: var( --md-sys-typescale-label-large-tracking );--md-comp-elevated-button-label-text-weight: var( --md-sys-typescale-label-large-weight );--md-comp-elevated-button-label-text-size: var( --md-sys-typescale-label-large-size );--md-comp-elevated-button-label-text-line-height: var( --md-sys-typescale-label-large-line-height );--md-comp-elevated-button-label-text-font: var( --md-sys-typescale-label-large-font );--md-comp-elevated-button-with-icon-icon-size: 18px;--md-comp-elevated-button-container-elevation: var(--md-sys-elevation-level1);--md-comp-elevated-button-container-height: 40px;--md-comp-elevated-button-container-shape: var(--md-sys-shape-corner-full);--md-comp-elevated-button-pressed-container-elevation: var( --md-sys-elevation-level1 );--md-comp-elevated-button-pressed-state-layer-opacity: var( --md-sys-state-pressed-state-layer-opacity );--md-comp-elevated-button-with-icon-disabled-icon-opacity: .3799999952316284;--md-comp-elevated-button-disabled-label-text-opacity: .3799999952316284;--md-comp-elevated-button-disabled-container-elevation: var( --md-sys-elevation-level0 );--md-comp-elevated-button-disabled-container-opacity: .11999999731779099}:where(.button,button):not(.icon-button,.fab,.chip){--state-disabled-opacity: .3799999952316284;--_bg-color: var(--md-sys-comp-button-background-color);--_fg-color: var(--md-sys-comp-button-color);--_height: var(--md-comp-button-container-height);--_shape: var(--md-comp-button-container-shape);-webkit-tap-highlight-color:transparent;display:flex;flex-direction:row;align-items:center;justify-content:center;border:none;text-decoration:none;background-color:var(--_bg-color);color:var(--_fg-color);height:var(--_height);padding:0 24px;border-radius:var(--_shape);box-sizing:border-box;position:relative;cursor:pointer;gap:8px;white-space:nowrap;-webkit-text-decoration:var(--md-sys-typescale-label-large-text-decoration);text-decoration:var(--md-sys-typescale-label-large-text-decoration);text-transform:var(--md-sys-typescale-label-large-text-transform);line-height:var(--md-sys-typescale-label-large-line-height);letter-spacing:var(--md-sys-typescale-label-large-tracking);font-size:var(--md-sys-typescale-label-large-size);font-weight:var(--md-sys-typescale-label-large-weight);font-family:var(--md-sys-typescale-label-large-font);box-shadow:var(--md-sys-elevation-1);transition:box-shadow .2s ease-in-out}:where(.button,button):not(.icon-button,.fab,.chip)[label]{content:attr(label)}:where(.button,button):not(.icon-button,.fab,.chip) :where(i,.material-icons){margin-left:-8px;font-size:18px}:where(.button,button):not(.icon-button,.fab,.chip) :where(i,.material-icons):only-child{margin-left:0;margin-right:0}:where(.button,button):not(.icon-button,.fab,.chip) a{text-decoration:none}:where(.button,button):not(.icon-button,.fab,.chip) a:hover{text-decoration:none}:where(.button,button):not(.icon-button,.fab,.chip) a:focus{text-decoration:none}:where(.button,button):not(.icon-button,.fab,.chip):where(:hover,.hover){box-shadow:var(--md-sys-elevation-3)}:where(.button,button):not(.icon-button,.fab,.chip):where(:active,.active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip):where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip)[disabled]{cursor:default;box-shadow:var(--md-sys-elevation-0);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.12);color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}:where(.button,button):not(.icon-button,.fab,.chip).text{box-shadow:var(--md-sys-elevation-0);height:var(--md-comp-text-button-container-height);--md-sys-comp-button-background-color: transparent;--md-sys-comp-button-color: var(--md-sys-color-primary);--md-comp-button-container-height: var( --md-comp-text-button-container-height );--state-hover-opacity: var(--md-comp-text-button-hover-state-layer-opacity);--state-focus-opacity: var(--md-comp-text-button-focus-state-layer-opacity);--state-active-opacity: var( --md-comp-text-button-pressed-state-layer-opacity );--state-disabled-opacity: var( --md-comp-text-button-disabled-unselected-outline-opacity );--state-outline-disabled-opacity: var( --md-comp-text-button-disabled-outline-opacity )}:where(.button,button):not(.icon-button,.fab,.chip).text:where(:hover,.hover){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip).text:where(:active,.active){box-shadow:var(--md-sys-elevation-0)}:where(.button,button):not(.icon-button,.fab,.chip).text:where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip).text[disabled]{box-shadow:none;color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}:where(.button,button):not(.icon-button,.fab,.chip).filled{box-shadow:var(--md-sys-elevation-0);--md-sys-comp-button-background-color: var(--md-sys-color-primary);--md-sys-comp-button-color: var(--md-sys-color-on-primary);--md-comp-button-container-height: var( --md-comp-filled-button-container-height );--state-hover-opacity: var(--md-comp-filled-button-hover-state-layer-opacity);--state-focus-opacity: var(--md-comp-filled-button-focus-state-layer-opacity);--state-active-opacity: var( --md-comp-filled-button-pressed-state-layer-opacity );--state-disabled-opacity: var( --md-comp-filled-button-disabled-unselected-outline-opacity );--state-outline-disabled-opacity: var( --md-comp-filled-button-disabled-outline-opacity )}:where(.button,button):not(.icon-button,.fab,.chip).filled:where(:hover,.hover){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip).filled:where(:active,.active){box-shadow:var(--md-sys-elevation-0)}:where(.button,button):not(.icon-button,.fab,.chip).filled:where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip).filled[disabled]{box-shadow:var(--md-sys-elevation-0);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.12);color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}:where(.button,button):not(.icon-button,.fab,.chip).filled-tonal{--md-sys-comp-button-background-color: var( --md-sys-color-secondary-container );--md-sys-comp-button-color: var(--md-sys-color-on-secondary-container);--md-comp-button-container-height: var( --md-comp-filled-tonal-button-container-height );background-color:var(--md-sys-comp-button-background-color);color:var(--md-sys-comp-button-color);box-shadow:var(--md-sys-elevation-0);--state-hover-opacity: var( --md-comp-filled-tonal-button-hover-state-layer-opacity );--state-focus-opacity: var( --md-comp-filled-tonal-button-focus-state-layer-opacity );--state-active-opacity: var( --md-comp-filled-tonal-button-pressed-state-layer-opacity );--state-disabled-opacity: var( --md-comp-filled-tonal-button-disabled-unselected-outline-opacity );--state-outline-disabled-opacity: var( --md-comp-filled-tonal-button-disabled-outline-opacity )}:where(.button,button):not(.icon-button,.fab,.chip).filled-tonal:where(:hover,.hover){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip).filled-tonal:where(:active,.active){box-shadow:var(--md-sys-elevation-0)}:where(.button,button):not(.icon-button,.fab,.chip).filled-tonal:where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip).filled-tonal[disabled]{--tint-color: transparent;box-shadow:var(--md-sys-elevation-0);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.12);color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}:where(.button,button):not(.icon-button,.fab,.chip).outlined{border:var(--md-comp-outlined-button-outline-width) solid var(--md-sys-color-outline);box-shadow:var(--md-sys-elevation-0);height:var(--md-comp-outlined-button-container-height);--md-sys-comp-button-background-color: transparent;--md-sys-comp-button-color: var(--md-sys-color-primary);--md-comp-button-container-height: var( --md-comp-outlined-button-container-height );--state-hover-opacity: var( --md-comp-outlined-button-hover-state-layer-opacity );--state-focus-opacity: var( --md-comp-outlined-button-focus-state-layer-opacity );--state-active-opacity: var( --md-comp-outlined-button-pressed-state-layer-opacity );--state-disabled-opacity: var( --md-comp-outlined-button-disabled-unselected-outline-opacity );--state-outline-disabled-opacity: var( --md-comp-outlined-button-disabled-outline-opacity )}:where(.button,button):not(.icon-button,.fab,.chip).outlined :where(i,.material-icons){margin-left:-9px}:where(.button,button):not(.icon-button,.fab,.chip).outlined:where(:hover,.hover){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip).outlined:where(:active,.active){box-shadow:var(--md-sys-elevation-0)}:where(.button,button):not(.icon-button,.fab,.chip).outlined:where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip).outlined[disabled]{box-shadow:var(--md-sys-elevation-0);border-color:rgb(var(--md-sys-color-on-surface-rgb)/.12);color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}:where(.button,button):not(.icon-button,.fab,.chip).elevated{box-shadow:var(--md-sys-elevation-1);height:var(--md-comp-elevated-button-container-height);--state-hover-opacity: var( --md-comp-elevated-button-hover-state-layer-opacity );--state-focus-opacity: var( --md-comp-elevated-button-focus-state-layer-opacity );--state-active-opacity: var( --md-comp-elevated-button-pressed-state-layer-opacity );--state-disabled-opacity: var( --md-comp-elevated-button-disabled-unselected-outline-opacity );--state-outline-disabled-opacity: var( --md-comp-elevated-button-disabled-outline-opacity )}:where(.button,button):not(.icon-button,.fab,.chip).elevated :where(i,.material-icons){font-size:var(--md-comp-elevated-button-with-icon-icon-size)}:where(.button,button):not(.icon-button,.fab,.chip).elevated:where(:hover,.hover){box-shadow:var(--md-sys-elevation-3)}:where(.button,button):not(.icon-button,.fab,.chip).elevated:where(:active,.active){box-shadow:var(--md-sys-elevation-1)}:where(.button,button):not(.icon-button,.fab,.chip).elevated:where(:focus,.focus):not(:active){box-shadow:var(--md-sys-elevation-2)}:where(.button,button):not(.icon-button,.fab,.chip).elevated[disabled]{box-shadow:var(--md-sys-elevation-0);background-color:rgb(var(--md-sys-color-on-surface-rgb)/var(--md-comp-elevated-button-disabled-container-opacity));color:rgb(var(--md-sys-color-on-surface-rgb)/var(--md-comp-elevated-button-disabled-label-text-opacity))}:where(html,.light-theme,.dark-theme),.tokens,:host{--md-sys-comp-text-field-caret-color: var(--md-sys-color-primary)}:is(.text-field){-webkit-text-decoration:var(--md-sys-typescale-body-large-text-decoration);text-decoration:var(--md-sys-typescale-body-large-text-decoration);text-transform:var(--md-sys-typescale-body-large-text-transform);line-height:var(--md-sys-typescale-body-large-line-height);letter-spacing:var(--md-sys-typescale-body-large-tracking);font-size:var(--md-sys-typescale-body-large-size);font-weight:var(--md-sys-typescale-body-large-weight);font-family:var(--md-sys-typescale-body-large-font);position:relative;display:inline-block;overflow:hidden}datalist{display:none}:is(.text-field).outlined{padding-top:6px}:is(.text-field).outlined input,:is(.text-field).outlined>textarea{box-sizing:border-box;margin:0;border:solid 1px;border-color:rgb(var(--md-sys-color-on-surface-rgb)/.6);border-top-color:transparent;border-radius:4px;padding:15px 13px;width:100%;height:inherit;color:rgb(var(--md-sys-color-on-surface-rgb)/.87);background-color:transparent;box-shadow:none;font-family:inherit;font-size:inherit;line-height:inherit;caret-color:var(--md-sys-comp-text-field-caret-color);transition:border .2s,box-shadow .2s}:is(.text-field).outlined input+span,:is(.text-field).outlined>textarea+span{position:absolute;top:0;left:0;display:flex;border-color:rgb(var(--md-sys-color-on-surface-rgb)/.6);width:100%;max-height:100%;color:rgb(var(--md-sys-color-on-surface-rgb)/.6);font-size:75%;line-height:15px;cursor:text;transition:color .2s,font-size .2s,line-height .2s}:is(.text-field).outlined input+span:before,:is(.text-field).outlined input+span:after,:is(.text-field).outlined>textarea+span:before,:is(.text-field).outlined>textarea+span:after{content:"";display:block;box-sizing:border-box;margin-top:6px;border-top:solid 1px;border-top-color:rgb(var(--md-sys-color-on-surface-rgb)/.6);min-width:10px;height:8px;pointer-events:none;box-shadow:inset 0 1px transparent;transition:border-color .2s,box-shadow .2s}:is(.text-field).outlined input+span:before,:is(.text-field).outlined>textarea+span:before{margin-right:4px;border-left:solid 1px transparent;border-radius:4px 0}:is(.text-field).outlined input+span:after,:is(.text-field).outlined>textarea+span:after{flex-grow:1;margin-left:4px;border-right:solid 1px transparent;border-radius:0 4px}:is(.text-field).outlined:hover>input,:is(.text-field).outlined:hover>textarea{border-color:rgb(var(--md-sys-color-on-surface-rgb)/.87);border-top-color:transparent}:is(.text-field).outlined:hover>input+span:before,:is(.text-field).outlined:hover>textarea+span:before,:is(.text-field).outlined:hover>input+span:after,:is(.text-field).outlined:hover>textarea+span:after{border-top-color:rgb(var(--md-sys-color-on-surface-rgb)/.87)}:is(.text-field).outlined:hover>input:not(:focus):placeholder-shown,:is(.text-field).outlined:hover>textarea:not(:focus):placeholder-shown{border-color:rgb(var(--md-sys-color-on-surface-rgb)/.87)}:is(.text-field).outlined input:not(:focus):placeholder-shown,:is(.text-field).outlined>textarea:not(:focus):placeholder-shown{border-top-color:rgb(var(--md-sys-color-on-surface-rgb)/.6)}:is(.text-field).outlined input:not(:focus):placeholder-shown+span,:is(.text-field).outlined>textarea:not(:focus):placeholder-shown+span{font-size:inherit;line-height:68px}:is(.text-field).outlined input:not(:focus):placeholder-shown+span:before,:is(.text-field).outlined>textarea:not(:focus):placeholder-shown+span:before,:is(.text-field).outlined input:not(:focus):placeholder-shown+span:after,:is(.text-field).outlined>textarea:not(:focus):placeholder-shown+span:after{border-top-color:transparent}:is(.text-field).outlined input:focus,:is(.text-field).outlined>textarea:focus{border-color:var(--md-sys-color-primary);border-top-color:transparent;box-shadow:inset 1px 0 var(--md-sys-color-primary),inset -1px 0 var(--md-sys-color-primary),inset 0 -1px var(--md-sys-color-primary);outline:none}:is(.text-field).outlined input:focus+span,:is(.text-field).outlined>textarea:focus+span{color:var(--md-sys-color-primary)}:is(.text-field).outlined input:focus+span:before,:is(.text-field).outlined input:focus+span:after,:is(.text-field).outlined>textarea:focus+span:before,:is(.text-field).outlined>textarea:focus+span:after{border-top-color:var(--md-sys-color-primary)!important;box-shadow:inset 0 1px var(--md-sys-color-primary)}:is(.text-field).outlined input:disabled,:is(.text-field).outlined input:disabled+span,:is(.text-field).outlined>textarea:disabled,:is(.text-field).outlined>textarea:disabled+span{border-color:rgb(var(--md-sys-color-on-surface-rgb)/.38)!important;border-top-color:transparent!important;color:rgb(var(--md-sys-color-on-surface-rgb)/.38);pointer-events:none}:is(.text-field).outlined input:disabled+span:before,:is(.text-field).outlined input:disabled+span:after,:is(.text-field).outlined>textarea:disabled+span:before,:is(.text-field).outlined>textarea:disabled+span:after{border-top-color:rgb(var(--md-sys-color-on-surface-rgb)/.38)!important}:is(.text-field).outlined input:disabled:placeholder-shown,:is(.text-field).outlined input:disabled:placeholder-shown+span,:is(.text-field).outlined>textarea:disabled:placeholder-shown,:is(.text-field).outlined>textarea:disabled:placeholder-shown+span{border-top-color:rgb(var(--md-sys-color-on-surface-rgb)/.38)!important}:is(.text-field).outlined input:disabled:placeholder-shown+span:before,:is(.text-field).outlined input:disabled:placeholder-shown+span:after,:is(.text-field).outlined>textarea:disabled:placeholder-shown+span:before,:is(.text-field).outlined>textarea:disabled:placeholder-shown+span:after{border-top-color:transparent!important}:is(.text-field).filled>:where(input,textarea){display:block;box-sizing:border-box;margin:0;border:none;border-top:solid 27px transparent;border-bottom:solid 1px rgb(var(--md-sys-color-on-surface-rgb)/.6);border-radius:4px 4px 0 0;padding:0 12px 10px;width:100%;height:inherit;color:rgb(var(--md-sys-color-on-surface-rgb)/.87);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.04);box-shadow:none;font-family:inherit;font-size:inherit;line-height:inherit;caret-color:var(--md-sys-comp-text-field-caret-color);transition:border-bottom .2s,background-color .2s}:is(.text-field).filled>:where(input,textarea)+span{position:absolute;inset:0;display:block;box-sizing:border-box;padding:7px 12px 0;color:rgb(var(--md-sys-color-on-surface-rgb)/.6);font-size:75%;line-height:18px;pointer-events:none;transition:color .2s,font-size .2s,line-height .2s}:is(.text-field).filled>:where(input,textarea)+span:after{content:"";position:absolute;left:0;bottom:0;display:block;width:100%;height:2px;background-color:var(--md-sys-color-primary);transform-origin:bottom center;transform:scaleX(0);transition:transform .3s}:is(.text-field).filled>:where(input,textarea):hover{border-bottom-color:rgb(var(--md-sys-color-on-surface-rgb)/.87);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.08)}:is(.text-field).filled>:where(input,textarea):not(:focus):placeholder-shown+span{font-size:inherit;line-height:48px}:is(.text-field).filled>:where(input,textarea):focus{outline:none}:is(.text-field).filled>:where(input,textarea):focus+span{color:var(--md-sys-color-primary)}:is(.text-field).filled>:where(input,textarea):focus+span:before{opacity:.12}:is(.text-field).filled>:where(input,textarea):focus+span:after{transform:scale(1)}:is(.text-field).filled>:where(input,textarea):disabled{border-bottom-color:rgb(var(--md-sys-color-on-surface-rgb)/.38);color:rgb(var(--md-sys-color-on-surface-rgb)/.38);background-color:rgb(var(--md-sys-color-on-surface-rgb)/.24)}:is(.text-field).filled>:where(input,textarea):disabled+span{color:rgb(var(--md-sys-color-on-surface-rgb)/.38)}[calculator-container]{align-items:center;display:flex;flex-direction:column;justify-content:center}[calculator-container] .column{display:flex;flex-direction:column;max-width:50rem;width:100%}[calculator-container] .row{align-items:center;display:flex;flex-direction:row}[calculator-container] :is(.text-field).outlined input{font-family:monospace;font-size:3.75rem;height:6rem}[calculator-container] :is(.text-field).outlined{outline:none}[calculator-container] [x-section]{align-items:center;display:flex;height:100%;justify-content:center;overflow:hidden;position:relative}[calculator-container] section{text-align:center;width:100%}[calculator-container] h1{font-size:larger;font-weight:700}[calculator-container] button{font-size:1.75rem;font-weight:400;height:6rem;margin:0;margin:.25rem;min-width:4.0625rem;width:100%}[calculator-container] button:active,[calculator-container] button:hover{background-color:var(--md-sys-color-secondary);color:var(--md-sys-color-on-secondary)}[calculator-container] button:focus-visible{outline:2px solid var(--md-sys-color-primary)}[calculator-container] button[value=c]{flex:1;margin-top:.375rem;max-width:11.5rem;min-width:4.0625rem}[calculator-container] label{flex:3;margin:0 .25rem;min-width:9.6875rem;width:100%}.blink{animation:blinker 1s linear infinite}@keyframes blinker{50%{opacity:0}}
`],encapsulation:3})};export{M as XCalculatorComponent};
