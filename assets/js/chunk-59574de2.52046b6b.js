(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59574de2"],{"0db5":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var s=r("a4ee"),i=(r("c120"),r("e92d")),a=(r("cea0"),r("59b2")),o=r("afcf"),n=r("d386"),c=r("09db"),l=r("ce50"),p=r("e041"),u=(r("8eed"),r("f402"),r("f4cc")),d=r("0224"),h=r("a7e1");const O=i["a"].getLogger("esri.layers.mixins.PortalLayer"),b=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new h["default"]({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const s=await r.e("chunk-009c9a9a").then(r.bind(null,"3b92"));return Object(u["w"])(e),await s.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(t){throw O.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d["a"].getDefault());return r&&s&&!Object(p["r"])(s.restUrl,r.restUrl)?(e.messages&&e.messages.push(new l["a"]("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return Object(s["a"])([Object(a["b"])({type:h["default"]})],e.prototype,"portalItem",null),Object(s["a"])([Object(o["a"])("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),Object(s["a"])([Object(c["a"])("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),Object(s["a"])([Object(a["b"])()],e.prototype,"resourceReferences",void 0),e=Object(s["a"])([Object(n["a"])("esri.layers.mixins.PortalLayer")],e),e}},"18dd":function(t,e,r){"use strict";r.r(e);var s=r("a4ee"),i=(r("c120"),r("7ffa")),a=(r("e92d"),r("cea0"),r("59b2")),o=r("d386"),n=r("ce50"),c=(r("e041"),r("8eed"),r("f402"),r("f4cc")),l=r("5815"),p=r("a6a3"),u=r("e694"),d=r("0db5");let h=class extends(Object(d["a"])(Object(u["a"])(p["a"]))){constructor(t){super(t),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(Object(c["c"])((t,e)=>{Object(l["b"])(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";t&&(r+=" "+t),e(new n["a"]("layer:unsupported-layer-type",r,{layerType:t}))})}))}read(t,e){const r={resourceInfo:t};null!=t.id&&(r.id=t.id),null!=t.title&&(r.title=t.title),super.read(r,e)}write(t){return Object(i["d"])(t||{},this.resourceInfo,{id:this.id})}};Object(s["a"])([Object(a["b"])({readOnly:!0})],h.prototype,"resourceInfo",void 0),Object(s["a"])([Object(a["b"])({type:["show","hide"]})],h.prototype,"listMode",void 0),Object(s["a"])([Object(a["b"])({json:{read:!1},readOnly:!0,value:"unsupported"})],h.prototype,"type",void 0),h=Object(s["a"])([Object(o["a"])("esri.layers.UnsupportedLayer")],h);var O=h;e["default"]=O},e694:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return m}));var s=r("a4ee"),i=r("4c37"),a=r("d386"),o=r("92ef"),n=r("fc29"),c=r("c478"),l=r("b2b2"),p=r("0964"),u=r("7ffa");class d{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o["a"]),this._values=new Map}clone(t){const e=new d,r=this._originStores[0];r&&r.forEach((t,r)=>{e.set(r,Object(u["a"])(t),0)});for(let s=2;s<o["a"];s++){const r=this._originStores[s];r&&r.forEach((r,i)=>{t&&t.has(i)||e.set(i,Object(u["a"])(r),s)})}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=6){let s=this._originStores[r];if(s||(s=new Map,this._originStores[r]=s),s.set(t,e),!this._values.has(t)||Object(l["c"])(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1}delete(t,e=6){const r=this._originStores[e];if(!r)return;const s=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return s}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],s=r&&r.get(t),i=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,e),i!==s}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}var h=d;const O=t=>{let e=class extends t{constructor(...t){super(...t);const e=Object(l["c"])(Object(i["a"])(this)),r=e.metadatas,s=e.store,a=new h;e.store=a,s.keys().forEach(t=>{a.set(t,s.get(t),0)}),Object.keys(r).forEach(t=>{e.internalGet(t)&&a.set(t,e.internalGet(t),0)})}read(t,e){Object(p["a"])(this,t,e)}getAtOrigin(t,e){const r=b(this),s=Object(o["d"])(e);if("string"==typeof t)return r.get(t,s);const i={};return t.forEach(t=>{i[t]=r.get(t,s)}),i}originOf(t){return Object(o["b"])(this.originIdOf(t))}originIdOf(t){return b(this).originOf(t)}revert(t,e){const r=b(this),s=Object(o["d"])(e),a=Object(i["a"])(this);let n;n="string"==typeof t?"*"===t?r.keys(s):[t]:t,n.forEach(t=>{a.propertyInvalidated(t),r.revert(t,s),a.propertyCommitted(t)})}};return e=Object(s["a"])([Object(a["a"])("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function b(t){return Object(i["a"])(t).store}let f=class extends(O(n["a"])){};f=Object(s["a"])([Object(a["a"])("esri.core.ReadOnlyMultiOriginJSONSupport")],f);const y=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return g(this).delete(t,Object(o["d"])(e))}write(t={},e){return Object(c["b"])(this,t=t||{},e),t}setAtOrigin(t,e,r){Object(i["a"])(this).setAtOrigin(t,e,Object(o["d"])(r))}removeOrigin(t){const e=g(this),r=Object(o["d"])(t),s=e.keys(r);for(const i of s)e.originOf(i)===r&&e.set(i,e.get(i,r),6)}updateOrigin(t,e){const r=g(this),s=Object(o["d"])(e),i=this.get(t);for(let a=s+1;a<o["a"];++a)r.delete(t,a);r.set(t,i,s)}toJSON(t){return this.write({},t)}};return e=Object(s["a"])([Object(a["a"])("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function g(t){return Object(i["a"])(t).store}const j=t=>{let e=class extends(y(O(t))){constructor(...t){super(...t)}};return e=Object(s["a"])([Object(a["a"])("esri.core.MultiOriginJSONSupport")],e),e};let m=class extends(j(n["a"])){};m=Object(s["a"])([Object(a["a"])("esri.core.MultiOriginJSONSupport")],m)}}]);