(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbdbe9d","chunk-91db3056","chunk-96729b9e"],{"0f1c":function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return p}));var r=i("b2b2"),s=i("4c37"),n=i("fc29"),a=i("2c4f");const o=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function l(e){return e instanceof n["a"]}function c(e){return e instanceof a["a"]?Object.keys(e.items):l(e)?Object(s["a"])(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof a["a"]?e.items[t]:e[t]}function d(e){return e?e.declaredClass:null}function f(e,t){const i=e.diff;if(i&&"function"==typeof i)return i(e,t);const s=c(e),n=c(t);if(0===s.length&&0===n.length)return;if(!s.length||!n.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const a=n.filter(e=>-1===s.indexOf(e)),h=s.filter(e=>-1===n.indexOf(e)),p=s.filter(i=>n.indexOf(i)>-1&&u(e,i)!==u(t,i)).concat(a,h).sort(),b=d(e);if(b&&o.indexOf(b)>-1&&p.length)return{type:"complete",oldValue:e,newValue:t};let m;const y=l(e)&&l(t);for(const o of p){const s=u(e,o),n=u(t,o);let a;(y||"function"!=typeof s&&"function"!=typeof n)&&s!==n&&(null==s&&null==n||(a=i&&i[o]&&"function"==typeof i[o]?i[o](s,n):"object"==typeof s&&"object"==typeof n&&d(s)===d(n)?f(s,n):{type:"complete",oldValue:s,newValue:n},Object(r["h"])(a)&&(Object(r["h"])(m)?m.diff[o]=a:m={type:"partial",diff:{[o]:a}})))}return m}function h(e,t){if(Object(r["g"])(e))return!1;const i=t.split(".");let s=e;for(const r of i){if("complete"===s.type)return!0;if("partial"!==s.type)return!1;{const e=s.diff[r];if(!e)return!1;s=e}}return!0}function p(e,t){for(const i of t)if(h(e,i))return!0;return!1}function b(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&d(e)!==d(t)?{type:"complete",oldValue:e,newValue:t}:f(e,t)}},"80b7":function(e,t,i){"use strict";function r(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function s(e){return e.toLowerCase().trim()}t["a"]=class{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const i of e){const e=i&&i.name;if(e){const n=s(e);this._fieldsMap.set(e,i),this._fieldsMap.set(n,i),t.push(n),r(i)&&(this.dateFields.push(i),this._dateFieldsSet.add(i))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(s(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}},8246:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return u})),i.d(t,"g",(function(){return c}));const r=[252,146,31,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},c={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},"86f2":function(e,t,i){"use strict";function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function a(e,t){const i=t||n(e),r=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return s}))},"8b28":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("a4ee"),s=(i("c120"),i("e92d"),i("cea0"),i("59b2")),n=i("d386");i("e041"),i("8eed"),i("f402");const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return Object(r["a"])([Object(s["b"])({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=Object(r["a"])([Object(n["a"])("esri.layers.mixins.CustomParametersMixin")],t),t}},"9b40":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("2255"),s=i("8048");const n={inches:Object(s["a"])(1,"meters","inches"),feet:Object(s["a"])(1,"meters","feet"),"us-feet":Object(s["a"])(1,"meters","us-feet"),yards:Object(s["a"])(1,"meters","yards"),miles:Object(s["a"])(1,"meters","miles"),"nautical-miles":Object(s["a"])(1,"meters","nautical-miles"),millimeters:Object(s["a"])(1,"meters","millimeters"),centimeters:Object(s["a"])(1,"meters","centimeters"),decimeters:Object(s["a"])(1,"meters","decimeters"),meters:Object(s["a"])(1,"meters","meters"),kilometers:Object(s["a"])(1,"meters","kilometers"),"decimal-degrees":1/Object(s["h"])(1,"meters",r["a"].radius)}},a2b1:function(e,t,i){"use strict";var r=i("a4ee"),s=(i("c120"),i("7ffa")),n=(i("e92d"),i("cea0"),i("59b2")),a=i("afcf"),o=i("d386"),l=i("09db"),c=(i("e041"),i("8eed"),i("f402"),i("6a0e")),u=i("4106"),d=i("b5a9"),f=i("df3d"),h=(i("5970"),i("ace4"));let p=class extends c["a"]{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const i in e)if(e.hasOwnProperty(i)){const r=e[i];switch(r.type){case"range":t[i]=f["a"].fromJSON(r);break;case"codedValue":t[i]=u["a"].fromJSON(r);break;case"inherited":t[i]=d["a"].fromJSON(r)}}return t}writeDomains(e,t){const i={};for(const r in e)e.hasOwnProperty(r)&&(i[r]=e[r]&&e[r].toJSON());Object(s["c"])(i),t.domains=i}readTemplates(e){return e&&e.map(e=>new h["a"](e))}writeTemplates(e,t){t.templates=e&&e.map(e=>e.toJSON())}};Object(r["a"])([Object(n["b"])({json:{write:!0}})],p.prototype,"id",void 0),Object(r["a"])([Object(n["b"])({json:{write:!0}})],p.prototype,"name",void 0),Object(r["a"])([Object(n["b"])({json:{write:!0}})],p.prototype,"domains",void 0),Object(r["a"])([Object(a["a"])("domains")],p.prototype,"readDomains",null),Object(r["a"])([Object(l["a"])("domains")],p.prototype,"writeDomains",null),Object(r["a"])([Object(n["b"])({json:{write:!0}})],p.prototype,"templates",void 0),Object(r["a"])([Object(a["a"])("templates")],p.prototype,"readTemplates",null),Object(r["a"])([Object(l["a"])("templates")],p.prototype,"writeTemplates",null),p=Object(r["a"])([Object(o["a"])("esri.layers.support.FeatureType")],p);var b=p;t["a"]=b},ace4:function(e,t,i){"use strict";var r=i("a4ee"),s=(i("c120"),i("7ffa")),n=(i("e92d"),i("cea0"),i("59b2")),a=i("fa8a"),o=i("d386"),l=i("09db"),c=(i("e041"),i("8eed"),i("f402"),i("6a0e"));const u=new a["a"]({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let d=class extends c["a"]{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=u.toJSON(e)}writePrototype(e,t){t.prototype=Object(s["c"])(Object(s["a"])(e),!0)}writeThumbnail(e,t){t.thumbnail=Object(s["c"])(Object(s["a"])(e))}};Object(r["a"])([Object(n["b"])({json:{write:!0}})],d.prototype,"name",void 0),Object(r["a"])([Object(n["b"])({json:{write:!0}})],d.prototype,"description",void 0),Object(r["a"])([Object(n["b"])({json:{read:u.read,write:u.write}})],d.prototype,"drawingTool",void 0),Object(r["a"])([Object(l["a"])("drawingTool")],d.prototype,"writeDrawingTool",null),Object(r["a"])([Object(n["b"])({json:{write:!0}})],d.prototype,"prototype",void 0),Object(r["a"])([Object(l["a"])("prototype")],d.prototype,"writePrototype",null),Object(r["a"])([Object(n["b"])({json:{write:!0}})],d.prototype,"thumbnail",void 0),Object(r["a"])([Object(l["a"])("thumbnail")],d.prototype,"writeThumbnail",null),d=Object(r["a"])([Object(o["a"])("esri.layers.support.FeatureTemplate")],d);var f=d;t["a"]=f},aefa:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a}));var r=i("8a44");const s=-3;class n{constructor(e,t,i){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(e,t,i,r=0){this._storage.put(this._namespace+e,t,i,r)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,i){this._storage.updateSize(this._namespace+e,t,i)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class a{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new r["a"]}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs=this._removeFuncs.filter(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,i,r){const s=this._db.get(e);if(s&&(this._size-=s.size,this._db.delete(e),s.entry!==t&&this._notifyRemoved(e,s.entry)),i>this._maxSize)return void this._notifyRemoved(e,t);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return void console.warn("Refusing to cache entry with invalid size "+i);const n=1+Math.max(r,-3)- -3;this._db.set(e,{entry:t,size:i,lifetime:n,lives:n}),this._size+=i,this._checkSizeLimit()}updateSize(e,t,i){const r=this._db.get(e);r&&r.entry===t&&(this._size-=r.size,i>this._maxSize?this._notifyRemoved(e,t):(r.size=i,this._size+=i,this._checkSizeLimit()))}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach((e,r)=>{const s=e.lifetime;i[s]=(i[s]||0)+e.size,this._users.forAll(i=>{const s=i.namespace;if(r.startsWith(s)){const i=t[s]||0;t[s]=i+e.size}})});const r={};this._users.forAll(e=>{const i=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const s=t[i]||0;t[i]=s,r[i]=Math.round(100*e.hitRate)+"%"}else r[i]="0%"});const s=Object.keys(t);s.forEach(e=>t[e]=t[e]/this._size*100),s.sort((e,i)=>t[i]-t[e]),s.forEach(i=>e[i]=Math.round(t[i])+"% / "+r[i]);for(let n=i.length-1;n>=0;--n){const t=i[n];t&&(e["Priority "+(n+-3-1)]=Math.round(t/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemoved(i,t.entry))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemoved(t,e.entry)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(e,t){this._removeFuncs.forEach(i=>{e.startsWith(i[0])&&i[1](t)})}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db)if(this._db.delete(e),t.lives<=1?(this._size-=t.size,this._notifyRemoved(e,t.entry)):(--t.lives,this._db.set(e,t)),this._size<=.9*this.maxSize)return}}},b285:function(e,t,i){"use strict";i.r(t);var r=i("a4ee"),s=(i("c120"),i("e92d"),i("cea0"),i("59b2")),n=i("afcf"),a=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("f4cc")),l=i("2c4f"),c=i("a6a3"),u=i("e694"),d=i("b911"),f=i("0db5"),h=i("5bd5");let p=class extends(Object(d["a"])(Object(f["a"])(Object(u["a"])(c["a"])))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,i){return this.revert("featureCollections","portal-item"),t.layers.map(e=>{const t=new h["default"];return t.read(e,i),t})}readFeatureCollectionsFromWebMap(e,t,i){return t.featureCollection.layers.map(e=>{const t=new h["default"];return t.read(e,i),t})}get fullExtent(){return this.featureCollections?this.featureCollections.reduce((e,t)=>e?e.union(t.fullExtent):t.fullExtent,null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale),null):0}set maxScale(e){this.featureCollections.forEach(t=>{t.maxScale=e}),this._set("maxScale",e)}get minScale(){return this.featureCollections?this.featureCollections.reduce((e,t)=>null==e?t.minScale:Math.min(e,t.minScale),null):0}set minScale(e){this.featureCollections.forEach(t=>{t.minScale=e}),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Object(o["u"])(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find(t=>t.title===e)}};Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"barrierLines",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"barrierPoints",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"barrierPolygons",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"directionLines",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"directionPoints",null),Object(r["a"])([Object(s["b"])({type:l["a"].ofType(h["default"])})],p.prototype,"featureCollections",void 0),Object(r["a"])([Object(n["a"])("portal-item","featureCollections",["layers"])],p.prototype,"readFeatureCollectionsFromItem",null),Object(r["a"])([Object(n["a"])("web-map","featureCollections",["featureCollection.layers"])],p.prototype,"readFeatureCollectionsFromWebMap",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"],readOnly:!0})],p.prototype,"fullExtent",null),Object(r["a"])([Object(s["b"])({type:["show","hide"]})],p.prototype,"listMode",void 0),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"maxScale",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"minScale",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"routeInfo",null),Object(r["a"])([Object(s["b"])({dependsOn:["featureCollections"]})],p.prototype,"stops",null),Object(r["a"])([Object(s["b"])({readOnly:!0,json:{read:!1}})],p.prototype,"type",void 0),p=Object(r["a"])([Object(a["a"])("esri.layers.RouteLayer")],p);var b=p;t["default"]=b},d297:function(e,t,i){"use strict";i.d(t,"a",(function(){return S})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return b})),i.d(t,"d",(function(){return m})),i.d(t,"e",(function(){return y})),i.d(t,"f",(function(){return _})),i.d(t,"g",(function(){return h}));var r=i("6c97"),s=i("b2b2"),n=i("e92d"),a=i("9ef0"),o=i("8d60"),l=i("9b40"),c=i("86f2");const u=n["a"].getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),d=new o["a"],f=Math.PI,h=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function p(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,o=n?null:t,l=o&&o.attributes;let c=n?t:null;const d=r.field,{ipData:f,hasExpression:h}=r.cache;let p=r.cache.compiledFunc;if(!d&&!h){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(h){if(!Object(s["h"])(i)||!Object(s["h"])(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),a=t.createExecContext(o,n);if(!p){const e=t.createSyntaxTree(r.valueExpression);p=t.createFunction(e),r.cache.compiledFunc=p}c=t.executeFunction(p,a)}else l&&(c=l[d]);const b=r.normalizationField,m=l?parseFloat(l[b]):void 0;if(null!=c&&(!b||n||!isNaN(m)&&0!==m)){isNaN(m)||n||(c/=m);const e=v(c,f);if(e){const t=e[0],n=e[1],o=t===n?r.stops[t].color:a["a"].blendColors(r.stops[t].color,r.stops[n].color,e[2],Object(s["h"])(i)?i.color:void 0);return new a["a"](o)}}}function b(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,a=n?null:t,o=a&&a.attributes;let l=n?t:null;const c=r.field,{ipData:d,hasExpression:f}=r.cache;let h=r.cache.compiledFunc;if(!c&&!f){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if(Object(s["g"])(i)||Object(s["g"])(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(a,n);if(!h){const e=t.createSyntaxTree(r.valueExpression);h=t.createFunction(e),r.cache.compiledFunc=h}l=t.executeFunction(h,o)}else o&&(l=o[c]);const p=r.normalizationField,b=o?parseFloat(o[p]):void 0;if(null!=l&&(!p||n||!isNaN(b)&&0!==b)){isNaN(b)||n||(l/=b);const e=v(l,d);if(e){const t=e[0],i=e[1];if(t===i)return r.stops[t].opacity;{const s=r.stops[t].opacity;return s+(r.stops[i].opacity-s)*e[2]}}}}function m(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=r.axis||"heading",a="heading"===n&&"arithmetic"===r.rotationType?90:0,o="heading"===n&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,d=r.field,{hasExpression:f}=r.cache;let h=r.cache.compiledFunc,p=0;if(!d&&!f)return p;if(f){if(Object(s["g"])(i)||Object(s["g"])(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),a=t.createExecContext(l,n);if(!h){const e=t.createSyntaxTree(r.valueExpression);h=t.createFunction(e),r.cache.compiledFunc=h}p=t.executeFunction(h,a)}else c&&(p=c[d]||0);return p="number"!=typeof p||isNaN(p)?null:a+o*p,p}function y(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=j(function(e,t,i){const r="number"==typeof t,n=r?null:t,a=n&&n.attributes;let o=r?t:null;const{isScaleDriven:l}=e.cache;let d=e.cache.compiledFunc;if(l){const t=Object(s["h"])(i)?i.scale:void 0,r=Object(s["h"])(i)?i.view:void 0;o=null==t||"3d"===r?function(e){let t=null,i=null;const r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if(Object(s["g"])(i)||Object(s["g"])(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,a=r.getViewInfo(t),l=r.createExecContext(n,a);if(!d){const t=r.createSyntaxTree(e.valueExpression);d=r.createFunction(t),e.cache.compiledFunc=d}o=r.executeFunction(d,l);break}case"field":a&&(o=a[e.field]);break;case"unknown":o=null}if(!Object(c["d"])(o))return null;if(r||!e.normalizationField)return o;const f=a?parseFloat(a[e.normalizationField]):null;return Object(c["d"])(f)&&0!==f?o/f:null}(r,t,i),r,t,i,r.cache.ipData);return null==n||isNaN(n)?0:n}function O(e,t,i){return null==e?null:Object(c["c"])(e)?y(e,t,i):Object(c["d"])(e)?e:null}function g(e,t,i){return Object(c["d"])(i)&&e>i?i:Object(c["d"])(t)&&e<t?t:e}function j(e,t,i,r,n){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(O(t.minSize,i,r)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){const r=e.stops;let s=r&&r.length&&r[0].size;return null==s&&(s=e.minSize),O(s,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),a=O(t.minSize,i,r),o=O(t.maxSize,i,r),l=Object(s["h"])(r)?r.shape:void 0;if(e<=t.minDataValue)return a;if(e>=t.maxDataValue)return o;if("area"===t.scaleBy&&l){const e="circle"===l,t=e?f*Math.pow(a/2,2):a*a,i=t+n*((e?f*Math.pow(o/2,2):o*o)-t);return e?2*Math.sqrt(i/f):Math.sqrt(i)}return a+n*(o-a)}(e,t,i,r);case"proportional":return function(e,t,i,r){const n=Object(s["h"])(r)?r.shape:void 0,a=e/t.minDataValue,o=O(t.minSize,i,r),l=O(t.maxSize,i,r);let c=null;return c="circle"===n?2*Math.sqrt(a*Math.pow(o/2,2)):"square"===n||"diamond"===n||"image"===n?Math.sqrt(a*Math.pow(o,2)):a*o,g(c,o,l)}(e,t,i,r);case"stops":return function(e,t,i,r,s){const[n,a,o]=v(e,s);if(n===a)return O(t.stops[n].size,i,r);{const e=O(t.stops[n].size,i,r);return e+(O(t.stops[a].size,i,r)-e)*o}}(e,t,i,r,n);case"real-world-size":return function(e,t,i,r){const n=(Object(s["h"])(r)&&r.resolution?r.resolution:1)*l["a"][t.valueUnit],a=O(t.minSize,i,r),o=O(t.maxSize,i,r),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/f)/n:"radius"===c||"distance"===c?2*e/n:e/n,g(u,a,o)}(e,t,i,r);case"identity":return e;case"unknown":return null}}function _(e,t,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||t))return null;const s={scale:t,view:i};let n=O(e.minSize,d,s),a=O(e.maxSize,d,s);if(null!=n||null!=a){if(n>a){const e=a;a=n,n=e}return{minSize:n,maxSize:a}}}function v(e,t){if(!t)return;let i=0,r=t.length-1;return t.some((t,s)=>e<t?(r=s,!0):(i=s,!1)),[i,r,(e-t[i])/(t[r]-t[i])]}function S(e,t,i){const s=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":y(n,t,i);switch(n.axis){case"width":s[0]=e;break;case"depth":s[1]=e;break;case"height":s[2]=e;break;case"width-and-depth":s[0]=e,s[1]=e;break;case"all":case void 0:case null:s[0]=e,s[1]=e,s[2]=e;break;default:Object(r["a"])(n.axis)}}return s}}}]);
//# sourceMappingURL=chunk-4fbdbe9d.4826f9c2.js.map