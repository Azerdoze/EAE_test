import{r as t,n as e,s as o,$ as i}from"./query-assigned-elements-6b2378ff.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):r(t,e)}var s=function(t,e,o,i){var r,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,o,s):r(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};let a=class extends o{constructor(){super(...arguments),this.boxHidden=!0,this.isSubmitted=!1,this.btnName="open",this.typeName="button"}_buttonTemplate(){return i`<button @click="${this._buttonNameHandler}" type="${this.typeName}" name="${this.btnName}">${this.btnName}</button>`}_clickHandler(){this.boxHidden=!this.boxHidden,this.boxHidden?this.btnName="open":this.btnName="close"}_buttonNameHandler(){"confirm"===this.btnName?this.isSubmitted=!0:"cancel"===this.btnName?(this.boxHidden=!0,console.log(this.boxHidden)):this._clickHandler()}render(){return i`${this._buttonTemplate()} ${this.boxHidden?i``:i`<slot></slot>`}`}};a.styles=t`button{color:#000;background-color:#d3d3d3;padding:.5rem 2rem;font-family:sans-serif;font-weight:700;text-transform:uppercase;border:1px solid #a9a9a9;border-radius:15px;cursor:pointer}button:hover{background-color:#006400;color:#d3d3d3}`,s([n({type:Boolean})],a.prototype,"boxHidden",void 0),s([n({attribute:"btn-name"})],a.prototype,"btnName",void 0),s([n({attribute:"type"})],a.prototype,"typeName",void 0),a=s([e("dialog-box-button")],a);export{a as DialogBoxButton};
