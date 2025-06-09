var __ember_auto_import__;(()=>{var e={635:(e,t,r)=>{"use strict"
function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function u(e,t,r,i,n){var u={}
return Object.keys(i).forEach((function(e){u[e]=i[e]})),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),u),n&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(n):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(e,t,u),u=null),u}r.d(t,{_:()=>u,a:()=>n,b:()=>i})},386:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>c})
var i=r(635),n=r(574),u=r(797),o=r.n(u)
const s=require("@ember/object/internals")
var l,a,p
let c=(l=(0,n.inject)("page-title"),a=class extends(o()){get tokenId(){return(0,s.guidFor)(this)}constructor(){super(...arguments),(0,i.a)(this,"tokens",p,this),this.tokens.push({id:this.tokenId})}compute(e,t){let r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},p=(0,i._)(a.prototype,"tokens",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)},625:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>y})
var i=r(635)
const n=require("@ember/application"),u=require("@ember/runloop")
var o=r(574),s=r.n(o),l=r(866)
const a=require("@ember/debug")
var p,c,d,h,f
let b="undefined"!=typeof FastBoot
const m="routeDidChange"
let y=(p=(0,o.inject)("router"),c=(0,o.inject)("-document"),d=class extends(s()){constructor(){super(...arguments),(0,i.a)(this,"router",h,this),(0,i.a)(this,"document",f,this),(0,i.b)(this,"tokens",[]),(0,i.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,i.b)(this,"scheduleTitleUpdate",(()=>{(0,u.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement()
let e=(0,n.getOwner)(this).resolveRegistration("config:environment")
e.pageTitle&&["separator","prepend","replace"].forEach((t=>{(0,l.isEmpty)(e.pageTitle[t])||(this._defaultConfig[t]=e.pageTitle[t])})),this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){let t=this._defaultConfig.separator,r=this._defaultConfig.prepend,i=this._defaultConfig.replace
null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=i&&(e.replace=i)}inheritFromPrevious(e){let t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){let t=this._findTokenById(e.id)
if(t){let r=this.tokens.indexOf(t),i=[...this.tokens],n=t.previous
return e.previous=n,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),i.splice(r,1,e),void(this.tokens=i)}let r=this.tokens.slice(-1)[0]
r&&(e.previous=r,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){let t=this._findTokenById(e),{next:r,previous:i}=t
r&&(r.previous=i),i&&(i.next=r),t.previous=t.next=null
let n=[...this.tokens]
n.splice(n.indexOf(t),1),this.tokens=n}get visibleTokens(){let e=this.tokens,t=e?e.length:0,r=[]
for(;t--;){let i=e[t]
if(i.replace){r.unshift(i)
break}r.unshift(i)}return r}get sortedTokens(){let e=this.visibleTokens,t=!0,r=[],i=[r],n=[]
return e.forEach((e=>{if(e.front)n.unshift(e)
else if(e.prepend){t&&(t=!1,r=[],i.push(r))
let n=r[0]
n&&((e={...e}).separator=n.separator),r.unshift(e)}else t||(t=!0,r=[],i.push(r)),r.push(e)})),n.concat(i.reduce(((e,t)=>e.concat(t)),[]))}toString(){let e=this.sortedTokens,t=[]
for(let r=0,i=e.length;r<i;r++){let n=e[r]
n.title&&(t.push(n.title),r+1<i&&t.push(n.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
b?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){b||(0,a.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!b)return
const t=this.document.head,r=t.childNodes
for(let u=0;u<r.length;u++){let e=r[u]
"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}let i=this.document.createElement("title"),n=this.document.createTextNode(e)
i.appendChild(n),t.appendChild(i)}titleDidUpdate(){}},h=(0,i._)(d.prototype,"router",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,i._)(d.prototype,"document",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d)},589:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var i=r(797),n=r.n(i),u=r(698)
class o extends(n()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,u.Z)(e[t]))return e[t]
return e[e.length-1]}}},500:(e,t,r)=>{"use strict"
function i(e,t){return e===t}r.r(t),r.d(t,{default:()=>i})},217:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>i})},733:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>i})},270:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(614)
function n(...e){return e.every(i.isArray)}},583:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i.isEmpty})
var i=r(866)},370:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i.isEqual})
var i=r(866)},878:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>i})},871:(e,t,r)=>{"use strict"
function i(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>i})},57:(e,t,r)=>{"use strict"
function i(e,t){return e!==t}r.r(t),r.d(t,{default:()=>i})},966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(698)
function n(...e){return e.every((e=>!(0,i.Z)(e)))}},254:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var i=r(698),n=r(797),u=r.n(n)
class o extends(u()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,i.Z)(e[t]))return e[t]
return e[e.length-1]}}},540:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
var i=r(698)
function n(e,t){return(0,i.Z)(e)!==(0,i.Z)(t)}},698:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
var i=r(614)
function n(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,i.isArray)(e)?0!==e.length:!!e}},614:e=>{"use strict"
e.exports=require("@ember/array")},797:e=>{"use strict"
e.exports=require("@ember/component/helper")},574:e=>{"use strict"
e.exports=require("@ember/service")},866:e=>{"use strict"
e.exports=require("@ember/utils")},813:(e,t,r)=>{e.exports=function(){var e=_eai_d,t=_eai_r
function i(e){return e&&e.__esModule?e:Object.assign({default:e},e)}window.emberAutoImportDynamic=function(e){return 1===arguments.length?t("_eai_dyn_"+e):t("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return t("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},e("ember-page-title/helpers/page-title",["@ember/service","@ember/component/helper"],(function(){return i(r(386))})),e("ember-page-title/services/page-title",["@ember/service","@ember/utils"],(function(){return i(r(625))})),e("ember-truth-helpers/helpers/and",["@ember/component/helper","@ember/array"],(function(){return i(r(589))})),e("ember-truth-helpers/helpers/eq",[],(function(){return i(r(500))})),e("ember-truth-helpers/helpers/gt",[],(function(){return i(r(217))})),e("ember-truth-helpers/helpers/gte",[],(function(){return i(r(733))})),e("ember-truth-helpers/helpers/is-array",["@ember/array"],(function(){return i(r(270))})),e("ember-truth-helpers/helpers/is-empty",["@ember/utils"],(function(){return i(r(583))})),e("ember-truth-helpers/helpers/is-equal",["@ember/utils"],(function(){return i(r(370))})),e("ember-truth-helpers/helpers/lt",[],(function(){return i(r(878))})),e("ember-truth-helpers/helpers/lte",[],(function(){return i(r(871))})),e("ember-truth-helpers/helpers/not",["@ember/array"],(function(){return i(r(966))})),e("ember-truth-helpers/helpers/not-eq",[],(function(){return i(r(57))})),e("ember-truth-helpers/helpers/or",["@ember/array","@ember/component/helper"],(function(){return i(r(254))})),e("ember-truth-helpers/helpers/xor",["@ember/array"],(function(){return i(r(540))}))}()},709:function(e,t){window._eai_r=require,window._eai_d=define}},t={}
function r(i){var n=t[i]
if(void 0!==n)return n.exports
var u=t[i]={exports:{}}
return e[i].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(709)
var i=r(813)
__ember_auto_import__=i})()
