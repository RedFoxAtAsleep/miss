(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2da2d8a"],{2258:function(e,t,i){"use strict";function s(e,t,i){return t.flatten(({sublayers:e})=>e).length!==e.length||(!!e.some(e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i)||!a(e,t))}function r(e,t,i){return!!e.some(e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2})||!a(e,t)}function a(e,t){if(!e||!e.length)return!0;const i=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(e.length>i.length)return!1;let s=0;const r=i.length;for(const{id:a}of e){for(;s<r&&i[s]!==a;)s++;if(s>=r)return!1}return!0}function n(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s}))},"22f4":function(e,t,i){"use strict";i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return p})),i.d(t,"e",(function(){return f})),i.d(t,"f",(function(){return m})),i.d(t,"g",(function(){return d})),i.d(t,"h",(function(){return y})),i.d(t,"i",(function(){return c})),i.d(t,"j",(function(){return h}));var s=i("4c37"),r=i("fcf2"),a=i("c478"),n=i("42be"),o=i("658b"),l=i("fd14");const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(s["a"])(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,i,s){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(a["a"])(this,"screenSizePerspectiveEnabled",{},s))&&(t[i]=e)}}}}}},d={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,i){t[i]=!e}}}},u={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},h={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:r["f"]}}},p={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},b={value:null,type:l["a"],json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const f={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},m={...f,json:{...f.json,origins:{"web-document":{...f.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,i)=>i&&"service"!==i.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(n["b"])(t.layerDefinition.drawingInfo.transparency):void 0:Object(n["b"])(t.drawingInfo.transparency)}}},g={type:o["a"],dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const i=null==(t=this.view)?void 0:t.timeExtent,s=this.layer.timeExtent,r=this.layer.useViewTime?i&&s?i.intersection(s):i||s:s;if(!r||r.isEmpty)return r;const a=this.layer.timeOffset,n=a?r.offset(-a.value,a.unit):r,o=this._get("timeExtent");return n.equals(o)?o:n}}},"2d39":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("c84e"),r=i("3b1a"),a=i("9a02");class n extends a["a"]{prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r["a"].bitmap],target:()=>this.children,drawPhase:s["c"].MAP});return[...super.prepareRenderPasses(e),t]}}},"365a":function(e,t,i){"use strict";var s=i("a4ee"),r=(i("c120"),i("e92d")),a=(i("cea0"),i("59b2")),n=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("fc29")),l=i("ce6d"),c=i("a5d8"),d=i("fab3"),u=i("9096");let h=class extends(Object(u["b"])(Object(c["a"])(Object(d["b"])(l["a"].EventedMixin(o["a"]))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r["a"].getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s["a"])([Object(a["b"])({dependsOn:["layer.opacity","parent.fullOpacity"]})],h.prototype,"fullOpacity",null),Object(s["a"])([Object(a["b"])()],h.prototype,"layer",void 0),Object(s["a"])([Object(a["b"])()],h.prototype,"parent",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],h.prototype,"suspended",null),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],h.prototype,"suspendInfo",null),Object(s["a"])([Object(a["b"])({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],h.prototype,"legendEnabled",null),Object(s["a"])([Object(a["b"])({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],h.prototype,"updating",null),Object(s["a"])([Object(a["b"])({dependsOn:["layer.visible"]})],h.prototype,"visible",null),h=Object(s["a"])([Object(n["a"])("esri.views.layers.LayerView")],h);var p=h;t["a"]=p},"536f":function(e,t,i){"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}(e.stops):t}function a(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const a="visualVariables"in t?function(e,t){if(!t)return e;const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:s}=t;return(r(i,e)+r(s,e))/2});let s=0;const a=i.length;if(0===a)return e;for(let r=0;r<a;r++)s+=i[r];const n=Math.floor(s/a);return Math.max(n,e)}(i,t.visualVariables):i;if("simple"===t.type)return s(a,t.symbol);if("unique-value"===t.type){let e=a;return t.uniqueValueInfos.forEach(t=>{e=s(e,t.symbol)}),e}if("class-breaks"===t.type){let e=a;return t.classBreakInfos.forEach(t=>{e=s(e,t.symbol)}),e}return t.type,a}i.d(t,"a",(function(){return a}))},"566d":function(e,t,i){"use strict";i.d(t,"a",(function(){return q}));var s=i("a4ee"),r=(i("c120"),i("e92d"),i("cea0"),i("59b2")),a=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("2c4f")),o=i("7d7d"),l=i("3795"),c=i("6a0e");let d=class extends c["a"]{};d=Object(s["a"])([Object(a["a"])("esri.views.layers.support.ClipArea")],d);var u,h=d,p=h;let b=u=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["left","right","top","bottom"]})],b.prototype,"version",null),b=u=Object(s["a"])([Object(a["a"])("esri.views.layers.support.ClipRect")],b);var y,f=b,m=f,g=i("00c0"),O=i("3760"),v=i("3af1"),j=i("1219"),x=i("a9ab");i("e06a");const w={base:O["a"],key:"type",typeMap:{extent:v["a"],polygon:j["a"]}};let _=y=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};Object(s["a"])([Object(r["b"])({types:w,json:{read:x["a"],write:!0}})],_.prototype,"geometry",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["geometry"]})],_.prototype,"version",null),_=y=Object(s["a"])([Object(a["a"])("esri.views.layers.support.Geometry")],_);var S=_,I=S;let E=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(r["b"])({type:[[[Number]]],json:{write:!0}})],E.prototype,"path",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["path"]})],E.prototype,"version",null),E=Object(s["a"])([Object(a["a"])("esri.views.layers.support.Path")],E);var R=E,M=R;const P=n["a"].ofType({key:"type",base:p,typeMap:{rect:m,path:M,geometry:I}}),q=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new P,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new g["a"]),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(l["a"])(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(l["a"])(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(l["a"])(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(l["a"])(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s["a"])([Object(r["b"])({type:P,set(e){const t=Object(o["b"])(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"moving",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"attached",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"container",void 0),Object(s["a"])([Object(r["b"])({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"updateRequested",void 0),Object(s["a"])([Object(r["b"])({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),Object(s["a"])([Object(r["b"])()],t.prototype,"view",void 0),t=Object(s["a"])([Object(a["a"])("esri.views.2d.layers.LayerView2D")],t),t}},"70ce":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var s=i("a4ee"),r=(i("c120"),i("e92d"),i("cea0"),i("59b2")),a=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("fc29")),o=i("22f4"),l=i("9096"),c=i("2258"),d=i("535f");const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends(Object(l["b"])(n["a"])){constructor(){super(...arguments),this._scale=null,this.view=null}destroy(){this.layer=this.view=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(e=>e.toExportImageJSON());return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(c["a"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",e=>this.notifyChange(u[e.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(e=>e.id).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter(e=>null!=e.definitionExpression);return e.length?JSON.stringify(e.reduce((e,t)=>(e[t.id]=t.definitionExpression,e),{})):null}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){const e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;const t=e.layer;return t&&(t.dpi,t.imageFormat,t.imageTransparency,t.gdbVersion),(this._get("version")||0)+1}set version(e){this._set("version",e)}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=t=>{const s=this.scale,r=0===s,a=0===t.minScale||s<=t.minScale,n=0===t.maxScale||s>=t.maxScale;t.visible&&(r||a&&n)&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some((t,i)=>e[i]!==t)?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],h.prototype,"dynamicLayers",null),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],h.prototype,"hasDynamicLayers",null),Object(s["a"])([Object(r["b"])()],h.prototype,"layer",null),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layers",null),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layerDefs",null),Object(s["a"])([Object(r["b"])({type:Number,dependsOn:["view.scale"]})],h.prototype,"scale",null),Object(s["a"])([Object(r["b"])(o["a"])],h.prototype,"timeExtent",void 0),Object(s["a"])([Object(r["b"])({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],h.prototype,"version",null),Object(s["a"])([Object(r["b"])({type:d["a"]})],h.prototype,"view",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],h.prototype,"visibleSublayers",null),h=Object(s["a"])([Object(a["a"])("esri.layers.mixins.ExportImageParameters")],h)},"894c":function(e,t,i){"use strict";t["a"]=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},"9b40":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("2255"),r=i("8048");const a={inches:Object(r["a"])(1,"meters","inches"),feet:Object(r["a"])(1,"meters","feet"),"us-feet":Object(r["a"])(1,"meters","us-feet"),yards:Object(r["a"])(1,"meters","yards"),miles:Object(r["a"])(1,"meters","miles"),"nautical-miles":Object(r["a"])(1,"meters","nautical-miles"),millimeters:Object(r["a"])(1,"meters","millimeters"),centimeters:Object(r["a"])(1,"meters","centimeters"),decimeters:Object(r["a"])(1,"meters","decimeters"),meters:Object(r["a"])(1,"meters","meters"),kilometers:Object(r["a"])(1,"meters","kilometers"),"decimal-degrees":1/Object(r["h"])(1,"meters",s["a"].radius)}},ad73:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var s=i("b2b2"),r=i("c1da");async function a(e,t=e.popupTemplate){if(!Object(s["h"])(t))return[];const i=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:a}=t,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:c}=e;if(i.includes("*"))return["*"];const d=a?await Object(r["m"])(e):[],u=Object(r["i"])(e.fields,[...i,...d]);return o&&u.push(o),u&&n&&Object(r["p"])(e.fields,n)&&-1===u.indexOf(n)&&u.push(n),u&&l&&Object(r["p"])(e.fields,l)&&-1===u.indexOf(l)&&u.push(l),c&&c.forEach(t=>{const{keyField:i}=t;u&&i&&Object(r["p"])(e.fields,i)&&-1===u.indexOf(i)&&u.push(i)}),u}function n(e,t){return e.popupTemplate?e.popupTemplate:Object(s["h"])(t)&&t.defaultPopupTemplateEnabled&&Object(s["h"])(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},bdb8:function(e,t,i){"use strict";var s=i("a4ee"),r=(i("c120"),i("e92d"),i("cea0"),i("59b2")),a=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("f4cc")),o=i("fc29"),l=i("7f83"),c=i("3af1"),d=i("9180"),u=i("dff3"),h=i("ae54"),p=i("018d");const b=Math.PI/180;function y(e,t){const i=t.rotation*b,s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}function f(e,t,i,s){const[r,a]=t,[n,o]=s,l=.5*i;return e[0]=r-l*n,e[1]=a-l*o,e[2]=r+l*n,e[3]=a+l*o,e}var m=i("c73a");const g=Object(d["d"])(),O=[0,0],v=new h["a"](0,0,0,0),j=2048,x=2048,w=!1,_=!1,S=!1;let I=class extends o["a"]{constructor(e){super(e),this._imagePromise=null,this.hidpi=S,this.imageMaxWidth=j,this.imageMaxHeight=x,this.imageRotationSupported=w,this.imageNormalizationSupported=_,this.update=Object(n["i"])(async(e,t)=>{const i=e.state,s=Object(l["d"])(i.spatialReference),r=this.hidpi?e.pixelRatio:1;if(!e.stationary||this.destroyed)return;this.imageRotationSupported?(O[0]=i.size[0],O[1]=i.size[1]):y(O,i);const a=Math.floor(O[0]*r)>this.imageMaxWidth||Math.floor(O[1]*r)>this.imageMaxHeight,n=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),o=!this.imageNormalizationSupported&&n,c=!a&&!o,d=this.imageRotationSupported?i.rotation:0;if(c)this._imagePromise=this._singleExport(i,O,d,r,t);else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);o&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,d,r,t)}return this._imagePromise.then(async e=>{this._imagePromise=null,await Promise.all(e.map(e=>(this.container.addChild(e),e.fadeIn())));for(const t of this.container.children)e.includes(t)||t.fadeOut().then(()=>{this.container.removeChild(t)})}).catch(e=>{throw this._imagePromise=null,e})},5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(t.invalidateTexture(),t.requestRender())}}_export(e,t,i,s,r,a){return Object(n["u"])().then(()=>this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:a})).then(i=>{const a=new m["a"](i);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/t,a.rotation=s,a.pixelRatio=r,a})}_singleExport(e,t,i,s,r){f(g,e.center,e.resolution,t);const a=new c["a"](g[0],g[1],g[2],g[3],e.spatialReference);return this._export(a,t[0],t[1],i,s,r).then(e=>[e])}_tiledExport(e,t,i,s,r){const a=u["a"].create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new p["a"](a),l=o.getTileCoverage(e);if(!l)return null;const d=[];return l.forEach((a,n,l,u)=>{v.set(a,n,l,u),o.getTileBounds(g,v);const h=new c["a"](g[0],g[1],g[2],g[3],e.spatialReference);d.push(this._export(h,t,t,i,s,r))}),Object(n["b"])(d)}};Object(s["a"])([Object(r["b"])()],I.prototype,"_imagePromise",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"container",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"fetchSource",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"hidpi",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"imageMaxWidth",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"imageMaxHeight",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"imageRotationSupported",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"imageNormalizationSupported",void 0),Object(s["a"])([Object(r["b"])()],I.prototype,"requestUpdate",void 0),Object(s["a"])([Object(r["b"])({dependsOn:["_imagePromise"]})],I.prototype,"updating",null),I=Object(s["a"])([Object(a["a"])("esri.views.2d.layers.support.ExportStrategy")],I);var E=I;t["a"]=E},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));i("c120");var s=i("1c92"),r=i("8c71"),a=i("738e"),n=(i("9f8b"),i("a1ff")),o=(i("d267"),i("6df2"),i("7c4b")),l=i("894c");function c(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new n["a"](e,s)}class d extends o["a"]{constructor(e=null,t=!0){super(),this.requestRenderOnSourceChangedEnabled=t,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(r["b"])()},this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=Object(s["d"])(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,l=n*this.height,c=Math.PI*this.rotation/180;Object(s["a"])(t,t,Object(a["b"])(i,r)),Object(s["a"])(t,t,Object(a["b"])(o/2,l/2)),Object(s["h"])(t,t,-c),Object(s["a"])(t,t,Object(a["b"])(-o/2,-l/2)),Object(s["e"])(t,t,Object(a["b"])(o,l)),Object(s["f"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(e,this.sourceWidth,this.sourceHeight):this._texture=c(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof l["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},e818:function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),r=(i("c120"),i("e92d")),a=(i("cea0"),i("59b2")),n=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("f4cc")),l=i("3795"),c=i("6c7a"),d=i("70ce"),u=i("365a"),h=i("e94b"),p=i("b2b2"),b=i("ce50"),y=i("82fa"),f=i("536f"),m=i("ad73");const g=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Object(o["t"])(new b["a"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const s=this.get("view.scale"),r=[],a=async e=>{const i=0===e.minScale||s<=e.minScale,n=0===e.maxScale||s>=e.maxScale;if(e.visible&&i&&n)if(e.sublayers)e.sublayers.forEach(a);else if(e.popupEnabled){const i=Object(m["a"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(p["h"])(i)&&r.push({sublayer:e,popupTemplate:i})}},n=i.sublayers.toArray().map(a);await Object(o["b"])(n);const l=r.map(async({sublayer:i,popupTemplate:s})=>{await i.load().catch(()=>{});const r=i.createQuery(),a=Object(p["h"])(t)?t.event:null,n=Object(f["a"])({renderer:i.renderer,event:a}),o=this.createFetchPopupFeaturesQueryGeometry(e,n);r.geometry=o,r.outFields=await Object(m["b"])(i,s);const l=await this._loadArcadeModules(s);return l&&l.arcadeUtils.hasGeometryOperations(s)||(r.maxAllowableOffset=o.width/n),(await i.queryFeatures(r)).features});return(await Object(o["j"])(l)).reduce((e,t)=>t.value?[...e,...t.value]:e,[]).filter(e=>null!=e)}canResume(){var e,t;return!!super.canResume()&&(null==(e=this.imageParameters)||null==(t=e.timeExtent)||!t.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(y["e"])()}};return Object(s["a"])([Object(a["b"])()],t.prototype,"imageParameters",void 0),Object(s["a"])([Object(a["b"])()],t.prototype,"layer",void 0),Object(s["a"])([Object(a["b"])({dependsOn:["imageParameters.timeExtent"]})],t.prototype,"suspended",void 0),t=Object(s["a"])([Object(n["a"])("esri.views.layers.MapImageLayerView")],t),t};var O=i("2d39"),v=i("566d"),j=i("bdb8");const x=r["a"].getLogger("esri.views.2d.layers.MapImageLayerView2D");let w=class extends(g(Object(c["a"])(Object(v["a"])(u["a"])))){constructor(){super(...arguments),this._exportImageVersion=-1}hitTest(){return null}update(e){this.strategy.update(e).catch(e=>{Object(o["n"])(e)||x.error(e)})}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,s=i>=10.3,r=i>=10;this._bitmapContainer=new O["a"],this.container.addChild(this._bitmapContainer),this.strategy=new j["a"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:r,hidpi:!0}),this.imageParameters=new d["a"]({view:this.view,layer:this.layer}),this.handles.add(Object(l["a"])(this.imageParameters,"version",e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),"mapimagelayerview-update")}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(h["a"])(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp,...s})}};Object(s["a"])([Object(a["b"])()],w.prototype,"strategy",void 0),Object(s["a"])([Object(a["b"])({dependsOn:["strategy.updating"]})],w.prototype,"updating",void 0),w=Object(s["a"])([Object(n["a"])("esri.views.2d.layers.MapImageLayerView2D")],w);var _=w;t["default"]=_},e94b:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("b2b2"),r=i("3af1"),a=(i("e06a"),i("8048"));i("536f");function n(e,t,i,n=new r["a"]){let o;if("2d"===i.type)o=t*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;o=Object(s["h"])(n)&&!n.equals(i.spatialReference)?Object(a["c"])(n)/Object(a["c"])(i.spatialReference):t*r}const l=e.x-o,c=e.y-o,d=e.x+o,u=e.y+o,{spatialReference:h}=i;return n.xmin=Math.min(l,d),n.ymin=Math.min(c,u),n.xmax=Math.max(l,d),n.ymax=Math.max(c,u),n.spatialReference=h,n}new r["a"]},fd14:function(e,t,i){"use strict";var s,r=i("a4ee"),a=(i("c120"),i("b2b2")),n=(i("e92d"),i("cea0"),i("59b2")),o=i("fa8a"),l=i("afcf"),c=i("d386"),d=i("09db"),u=(i("e041"),i("8eed"),i("f402"),i("6a0e")),h=i("c1da");let p=s=class extends u["a"]{async collectRequiredFields(e,t){return Object(h["a"])(e,t,this.expression)}clone(){return new s({expression:this.expression,title:this.title})}};Object(r["a"])([Object(n["b"])({type:String,json:{write:!0}})],p.prototype,"expression",void 0),Object(r["a"])([Object(n["b"])({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=Object(r["a"])([Object(c["a"])("esri.layers.support.FeatureExpressionInfo")],p);var b=p,y=b,f=i("9b40");const m=function(){const e=Object.keys(f["a"]);return e.sort(),e}();var g;const O=Object(o["b"])()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new o["a"]({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let j=g=class extends u["a"]{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,i,s){t[i]=e.write(null,s),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(a["h"])(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new g({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(r["a"])([Object(n["b"])({type:y,json:{write:!0}})],j.prototype,"featureExpressionInfo",void 0),Object(r["a"])([Object(l["a"])("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],j.prototype,"readFeatureExpressionInfo",null),Object(r["a"])([Object(d["a"])("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],j.prototype,"writeFeatureExpressionInfo",null),Object(r["a"])([Object(n["b"])({type:O.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:O.jsonValues,read:O.read,write:{writer:O.write,isRequired:!0}}})],j.prototype,"mode",null),Object(r["a"])([Object(n["b"])({type:Number,json:{write:!0}})],j.prototype,"offset",void 0),Object(r["a"])([Object(n["b"])({type:m,json:{type:String,read:v.read,write:v.write}})],j.prototype,"unit",null),j=g=Object(r["a"])([Object(c["a"])("esri.layers.support.ElevationInfo")],j);var x=j;t["a"]=x}}]);
//# sourceMappingURL=chunk-b2da2d8a.5ff2860f.js.map