import{a as h}from"./chunk-ZWJUIVJL.js";import"./chunk-DAQOROHW.js";var r="x-pwgen",s=class a extends HTMLElement{wasmModule;hasRendered;constructor(){super(),this.wasmModule=void 0,this.hasRendered=!1;let e=document.createElement("template");e.innerHTML=`
      <style>
        :host {
          display: var(--x-pwgen-display, initial);
          font-size: var(--x-pwgen-font-size, initial);
          font-family: var(--x-pwgen-font-family, monospace);
        }

        ul {
          list-style: var(--x-pwgen-ul-list-style, none);
          margin: var(--x-pwgen-ul-margin, 0);
          padding: var(--x-pwgen-ul-padding, 0);
        }

        li {
          display: var(--x-pwgen-li-display, block);
          margin: var(--x-pwgen-li-margin, 0);
          padding: var(--x-pwgen-li-padding, 0);
        }
      </style>
      <ul></ul>
    `,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}static get observedAttributes(){return["composed","flags","length","number"]}get composed(){return this.getAttribute("composed")}set composed(e){this.setAttribute("composed",`${e}`)}get flags(){return this.getAttribute("flags")}set flags(e){this.setAttribute("flags",`${e}`)}get length(){return this.getAttribute("length")}set length(e){this.setAttribute("length",`${e}`)}get number(){return this.getAttribute("number")}set number(e){this.setAttribute("number",`${e}`)}connectedCallback(){a.observedAttributes.forEach(e=>{this._upgradeProperty(e)}),this.flags||(this.flags="-sy"),this.length||(this.length="20"),this.number||(this.number="1"),import("./chunk-JJ6KHYXZ.js").then(e=>{this.wasmModule=e}).then(()=>{this.generate(),this.hasRendered=!0})}attributeChangedCallback(e,t,n){n===null||t===n||e!=="flags"&&!n||this.hasRendered&&this.length&&this.number&&this.generate()}generate(){this.wasmModule.default({arguments:this.flags?[this.flags,this.length,this.number]:[this.length,this.number],print:this._handlePassword()})}_handlePassword(){let e=document.createElement("ul");return t=>{this.shadowRoot?.dispatchEvent(new CustomEvent("x-pwgen-handle-password",{bubbles:!0,composed:this.composed!==null,detail:{msg:t}})),t.split(" ").forEach(l=>{let i=document.createElement("li");i.innerText=l,e.appendChild(i)});let n=this.shadowRoot?.querySelector("ul");n&&this.shadowRoot?.replaceChild(e,n)}}_upgradeProperty(e){if(this.hasOwnProperty(e)){let t=this[e];delete this[e],this[e]=t}}};customElements.get(r)||customElements.define(r,s);export{s as XPwgen,h as pwgen,r as tagName};
