(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a7ea23a"],{2650:function(e,t,a){"use strict";a.r(t);var i=a("a4ee"),r=(a("c120"),a("b2b2")),n=(a("e92d"),a("59b2")),l=a("1a3e"),s=a("afcf"),c=a("d386"),o=a("09db"),u=a("ce50"),p=a("e041"),h=(a("8eed"),a("f402"),a("f4cc")),d=a("5996"),b=(a("e06a"),a("2eab")),f=a("a6a3"),v=a("e694"),m=a("54b4"),y=a("22f4"),O=a("b911"),j=a("3d59"),g=a("997b"),w=a("8b28"),_=a("0db5"),S=a("8e17"),x=a("5a62"),T=a("9096"),V=a("b485"),z=a("303f"),D=a("e9d0"),C=a("d409");const A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let L=class extends(Object(g["a"])(Object(C["a"])(Object(x["a"])(Object(S["a"])(Object(O["a"])(Object(_["a"])(Object(V["a"])(Object(z["a"])(Object(j["a"])(Object(v["a"])(Object(T["b"])(Object(w["a"])(f["a"]))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(r["h"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Object(h["u"])(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&d["a"].fromJSON(e)}writeSublayers(e,t,a,i){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),n=[],l={writeSublayerStructure:!1,...i};r.forEach(e=>{const t=e.write({},l);n.push(t)}),n.some(e=>Object.keys(e).length>1)&&(t.layers=n)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(p["I"])(e).path):null}fetchTile(e,t,a,i={}){const{signal:r,timestamp:n}=i,l=this.getTileUrl(e,t,a),s={responseType:"image",signal:r};return null!=n&&(s.query={_ts:i.timestamp}),Object(b["default"])(l,s).then(e=>e.data)}getTileUrl(e,t,a){const i=!this.tilemapCache&&this.supportsBlankTile,r=Object(p["C"])({...this.parsedUrl.query,blankTile:!i&&null,...this.customParameters}),n=this.tileServers;return`${n&&n.length?n[t%n.length]:this.parsedUrl.path}/tile/${e}/${t}/${a}${r?"?"+r:""}`}_fetchService(e){return Object(h["c"])((t,a)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new u["a"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new u["a"]("tile-layer:undefined-url","layer's url is not defined");const i=Object(m["e"])(this.parsedUrl.path);if(Object(r["h"])(i)&&"ImageServer"===i.serverType)throw new u["a"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(b["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,a)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(m["c"])(this.url))return this._fetchServerVersion(this.url,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(m["b"])(e))return Object(h["t"])();const a=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(b["default"])(a,{query:{f:"json",...this.customParameters},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new u["a"]("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let a=0,i=A.length;a<i;a++)if(t=A[a],t.toLowerCase().indexOf(e)>-1)return Object(p["y"])("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),a=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||a?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}};Object(i["a"])([Object(n["b"])({readOnly:!0,dependsOn:["parsedUrl"]})],L.prototype,"attributionDataUrl",null),Object(i["a"])([Object(n["b"])({type:["show","hide","hide-children"]})],L.prototype,"listMode",void 0),Object(i["a"])([Object(n["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],L.prototype,"isReference",void 0),Object(i["a"])([Object(n["b"])({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],L.prototype,"operationalLayerType",void 0),Object(i["a"])([Object(n["b"])({type:Boolean})],L.prototype,"resampling",void 0),Object(i["a"])([Object(n["b"])()],L.prototype,"sourceJSON",void 0),Object(i["a"])([Object(n["b"])({type:d["a"]})],L.prototype,"spatialReference",void 0),Object(i["a"])([Object(s["a"])("spatialReference",["spatialReference","tileInfo"])],L.prototype,"readSpatialReference",null),Object(i["a"])([Object(n["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),Object(i["a"])([Object(n["b"])({readOnly:!0})],L.prototype,"sublayers",void 0),Object(i["a"])([Object(o["a"])("sublayers",{layers:{type:[D["a"]]}})],L.prototype,"writeSublayers",null),Object(i["a"])([Object(n["b"])({json:{read:!1,write:!1}})],L.prototype,"popupEnabled",void 0),Object(i["a"])([Object(n["b"])({dependsOn:["parsedUrl"]})],L.prototype,"tileServers",null),Object(i["a"])([Object(l["a"])("tileServers")],L.prototype,"castTileServers",null),Object(i["a"])([Object(n["b"])({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),Object(i["a"])([Object(n["b"])(y["j"])],L.prototype,"url",void 0),L=Object(i["a"])([Object(c["a"])("esri.layers.TileLayer")],L);var M=L;t["default"]=M},"86f2":function(e,t,a){"use strict";function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function r(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function l(e,t){const a=t||n(e),i=e.valueUnit||"unknown";return"unknown"===a?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return r}))},9651:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var i=a("a4ee"),r=(a("c120"),a("e92d")),n=a("59b2"),l=a("1a3e"),s=a("d386"),c=a("ce50"),o=a("e041"),u=(a("8eed"),a("f402"),a("8a44")),p=a("f4cc"),h=a("5815"),d=a("fc29"),b=a("2eab"),f=a("af40"),v=a("3795"),m=a("c24e"),y=a("7ffa"),O=a("b50f");class j{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const a=(e-this.location.top)*this.location.width+(t-this.location.left),i=a%8,r=a>>3,n=this._tileAvailabilityBitSet;return r<0||r>n.length?"unknown":n[r]&1<<i?"available":"unavailable"}_updateFromData(e){const t=this.location.width,a=this.location.height;let i=!0,r=!0;const n=Math.ceil(t*a/8),l=new Uint8Array(n);let s=0;for(let c=0;c<e.length;c++){const t=c%8;e[c]?(r=!1,l[s]|=1<<t):i=!1,7===t&&++s}r?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}static fromDefinition(e,t){const a=e.service.request||b["default"],{row:i,col:r,width:n,height:l}=e,s={query:{f:"json"}};return t=t?{...s,...t}:s,a(w(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:i,left:r,width:n,height:l},valid:!0,data:Object(O["b"])(n*l,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==i||e.location.left!==r||e.location.width!==n||e.location.height!==l))throw new c["a"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:i,left:r,width:n,height:l}});return j.fromJSON(e)})}static fromJSON(e){j.validateJSON(e);const t=new j;return t.location=Object.freeze(Object(y["a"])(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new c["a"]("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new c["a"]("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new c["a"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new c["a"]("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new c["a"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function w(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const a=e.service.tileServers;t=`${a&&a.length?a[e.row%a.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const a=e.service.query;return a&&(t=`${t}?${a}`),t}var _;const S=r["a"].getLogger("esri.layers.support.TilemapCache");let x=_=class extends d["a"]{constructor(e){super(e),this._handles=new f["a"],this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=b["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new m["a"](this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(v["a"])(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(S.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,a,i){if(!this._availableLevels[e])return Object(p["t"])(new c["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,a,r);if(n)return Object(p["u"])(n);const l=i&&i.signal;return i={...i,signal:null},Object(p["c"])((e,t)=>{Object(p["r"])(l,()=>t(Object(p["e"])()));const a=g(r);let n=this._pendingTilemapRequests[a];if(!n){n=j.fromDefinition(r,i).then(e=>(this._tilemapCache.put(a,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[a];this._pendingTilemapRequests[a]=n,n.then(e,e)}n.then(e,t)})}getAvailability(e,t,a){if(!this._availableLevels[e])return"unavailable";const i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}getAvailabilityUpsample(e,t,a,i){i.level=e,i.row=t,i.col=a;const r=this.layer.tileInfo;for(r.updateTileInfo(i);;){const e=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==e)return e;if(!r.upsampleTile(i))return"unavailable"}}fetchAvailability(e,t,a,i){return this._availableLevels[e]?this.fetchTilemap(e,t,a,i).catch(e=>e).then(i=>{if(i instanceof j){const r=i.getAvailability(t,a);return"unavailable"===r?Object(p["t"])(new c["a"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})):r}if(Object(p["n"])(i))throw i;return"unknown"}):Object(p["t"])(new c["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,a,i,r){i.level=e,i.row=t,i.col=a;const n=this.layer.tileInfo;n.updateTileInfo(i);const l=this.fetchAvailability(e,t,a,r).catch(e=>{if(Object(p["n"])(e))throw e;if(n.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,r,l),l}async _fetchAvailabilityUpsamplePrefetch(e,t,a,i,r,n){if(!this._prefetchingEnabled)return;const l="prefetch-"+e;if(this._handles.has(l))return;const s=Object(p["d"])();n.then(()=>s.abort(),()=>s.abort());let c=!1;const o={remove(){c||(c=!0,s.abort())}};if(this._handles.add(o,l),await Object(h["c"])(10,s.signal).catch(()=>{}),c||(c=!0,this._handles.remove(l)),Object(p["o"])(s))return;const u={id:e,level:t,row:a,col:i},d={...r,signal:s.signal},b=this.layer.tileInfo;for(let p=0;_._prefetches.length<_._maxPrefetch&&b.upsampleTile(u);++p){const e=this.fetchAvailability(u.level,u.row,u.col,d);_._prefetches.push(e);const t=()=>{_._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(o["C"])(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;const r=g(i);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,a,i)=>!!e._tilemapFromCache(t,a,i,e._tmpTilemapDefinition)}}};x._maxPrefetch=4,x._prefetches=new u["a"]({initialSize:_._maxPrefetch}),Object(i["a"])([Object(n["b"])({constructOnly:!0,type:Number})],x.prototype,"levels",void 0),Object(i["a"])([Object(l["a"])("levels")],x.prototype,"castLevels",null),Object(i["a"])([Object(n["b"])({readOnly:!0,dependsOn:["levels"],type:Number})],x.prototype,"size",null),Object(i["a"])([Object(n["b"])({constructOnly:!0,type:Number})],x.prototype,"cacheByteSize",void 0),Object(i["a"])([Object(n["b"])({constructOnly:!0})],x.prototype,"layer",void 0),Object(i["a"])([Object(n["b"])({constructOnly:!0})],x.prototype,"request",void 0),x=_=Object(i["a"])([Object(s["a"])("esri.layers.support.TilemapCache")],x)},"9b40":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("2255"),r=a("8048");const n={inches:Object(r["a"])(1,"meters","inches"),feet:Object(r["a"])(1,"meters","feet"),"us-feet":Object(r["a"])(1,"meters","us-feet"),yards:Object(r["a"])(1,"meters","yards"),miles:Object(r["a"])(1,"meters","miles"),"nautical-miles":Object(r["a"])(1,"meters","nautical-miles"),millimeters:Object(r["a"])(1,"meters","millimeters"),centimeters:Object(r["a"])(1,"meters","centimeters"),decimeters:Object(r["a"])(1,"meters","decimeters"),meters:Object(r["a"])(1,"meters","meters"),kilometers:Object(r["a"])(1,"meters","kilometers"),"decimal-degrees":1/Object(r["h"])(1,"meters",i["a"].radius)}},ab68:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var i=a("dff3");const r={type:i["a"],json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(e,t,a,r){if(!e)return null;const{minScale:n,maxScale:l,minLOD:s,maxLOD:c}=t;if(null!=s&&null!=c)return r&&r.ignoreMinMaxLOD?i["a"].fromJSON(e):i["a"].fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=s&&e<=c)});if(0!==n&&0!==l){const t=e=>Math.round(1e4*e)/1e4,a=n?t(n):1/0,r=l?t(l):-1/0;return i["a"].fromJSON({...e,lods:e.lods.filter(e=>{const i=t(e.scale);return i<=a&&i>=r})})}return i["a"].fromJSON(e)}},b485:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("a4ee"),r=(a("c120"),a("e92d"),a("cea0"),a("59b2")),n=a("afcf"),l=a("d386"),s=(a("e041"),a("8eed"),a("f402"),a("5996")),c=(a("e06a"),a("ab68")),o=a("9651");const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new o["a"]({layer:this}):null}};return Object(i["a"])([Object(r["b"])({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(i["a"])([Object(r["b"])()],t.prototype,"minScale",void 0),Object(i["a"])([Object(n["a"])("service","minScale")],t.prototype,"readMinScale",null),Object(i["a"])([Object(r["b"])()],t.prototype,"maxScale",void 0),Object(i["a"])([Object(n["a"])("service","maxScale")],t.prototype,"readMaxScale",null),Object(i["a"])([Object(r["b"])({type:s["a"]})],t.prototype,"spatialReference",void 0),Object(i["a"])([Object(r["b"])({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),Object(i["a"])([Object(r["b"])(c["b"])],t.prototype,"tileInfo",void 0),Object(i["a"])([Object(r["b"])()],t.prototype,"tilemapCache",void 0),Object(i["a"])([Object(n["a"])("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(i["a"])([Object(r["b"])()],t.prototype,"version",void 0),t=Object(i["a"])([Object(l["a"])("esri.layers.mixins.ArcGISCachedService")],t),t}},d297:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return v})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return g})),a.d(t,"g",(function(){return d}));var i=a("6c97"),r=a("b2b2"),n=a("e92d"),l=a("9ef0"),s=a("8d60"),c=a("9b40"),o=a("86f2");const u=n["a"].getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new s["a"],h=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function b(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.ColorVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,s=n?null:t,c=s&&s.attributes;let o=n?t:null;const p=i.field,{ipData:h,hasExpression:d}=i.cache;let b=i.cache.compiledFunc;if(!p&&!d){const e=i.stops;return e&&e[0]&&e[0].color}if("number"!=typeof o)if(d){if(!Object(r["h"])(a)||!Object(r["h"])(a.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},t=a.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(s,n);if(!b){const e=t.createSyntaxTree(i.valueExpression);b=t.createFunction(e),i.cache.compiledFunc=b}o=t.executeFunction(b,l)}else c&&(o=c[p]);const f=i.normalizationField,v=c?parseFloat(c[f]):void 0;if(null!=o&&(!f||n||!isNaN(v)&&0!==v)){isNaN(v)||n||(o/=v);const e=w(o,h);if(e){const t=e[0],n=e[1],s=t===n?i.stops[t].color:l["a"].blendColors(i.stops[t].color,i.stops[n].color,e[2],Object(r["h"])(a)?a.color:void 0);return new l["a"](s)}}}function f(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.OpacityVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,l=n?null:t,s=l&&l.attributes;let c=n?t:null;const o=i.field,{ipData:p,hasExpression:h}=i.cache;let d=i.cache.compiledFunc;if(!o&&!h){const e=i.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof c)if(h){if(Object(r["g"])(a)||Object(r["g"])(a.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},t=a.arcade.arcadeUtils,n=t.getViewInfo(e),s=t.createExecContext(l,n);if(!d){const e=t.createSyntaxTree(i.valueExpression);d=t.createFunction(e),i.cache.compiledFunc=d}c=t.executeFunction(d,s)}else s&&(c=s[o]);const b=i.normalizationField,f=s?parseFloat(s[b]):void 0;if(null!=c&&(!b||n||!isNaN(f)&&0!==f)){isNaN(f)||n||(c/=f);const e=w(c,p);if(e){const t=e[0],a=e[1];if(t===a)return i.stops[t].opacity;{const r=i.stops[t].opacity;return r+(i.stops[a].opacity-r)*e[2]}}}}function v(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.RotationVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=i.axis||"heading",l="heading"===n&&"arithmetic"===i.rotationType?90:0,s="heading"===n&&"arithmetic"===i.rotationType?-1:1,c="number"==typeof t?null:t,o=c&&c.attributes,p=i.field,{hasExpression:h}=i.cache;let d=i.cache.compiledFunc,b=0;if(!p&&!h)return b;if(h){if(Object(r["g"])(a)||Object(r["g"])(a.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},t=a.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(c,n);if(!d){const e=t.createSyntaxTree(i.valueExpression);d=t.createFunction(e),i.cache.compiledFunc=d}b=t.executeFunction(d,l)}else o&&(b=o[p]||0);return b="number"!=typeof b||isNaN(b)?null:l+s*b,b}function m(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!i)return;if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=j(function(e,t,a){const i="number"==typeof t,n=i?null:t,l=n&&n.attributes;let s=i?t:null;const{isScaleDriven:c}=e.cache;let p=e.cache.compiledFunc;if(c){const t=Object(r["h"])(a)?a.scale:void 0,i=Object(r["h"])(a)?a.view:void 0;s=null==t||"3d"===i?function(e){let t=null,a=null;const i=e.stops;return i?(t=i[0].value,a=i[i.length-1].value):(t=e.minDataValue||0,a=e.maxDataValue||0),(t+a)/2}(e):t}else if(!i)switch(e.inputValueType){case"expression":{if(Object(r["g"])(a)||Object(r["g"])(a.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},i=a.arcade.arcadeUtils,l=i.getViewInfo(t),c=i.createExecContext(n,l);if(!p){const t=i.createSyntaxTree(e.valueExpression);p=i.createFunction(t),e.cache.compiledFunc=p}s=i.executeFunction(p,c);break}case"field":l&&(s=l[e.field]);break;case"unknown":s=null}if(!Object(o["d"])(s))return null;if(i||!e.normalizationField)return s;const h=l?parseFloat(l[e.normalizationField]):null;return Object(o["d"])(h)&&0!==h?s/h:null}(i,t,a),i,t,a,i.cache.ipData);return null==n||isNaN(n)?0:n}function y(e,t,a){return null==e?null:Object(o["c"])(e)?m(e,t,a):Object(o["d"])(e)?e:null}function O(e,t,a){return Object(o["d"])(a)&&e>a?a:Object(o["d"])(t)&&e<t?t:e}function j(e,t,a,i,n){switch(t.transformationType){case"additive":return function(e,t,a,i){return e+(y(t.minSize,a,i)||t.minDataValue)}(e,t,a,i);case"constant":return function(e,t,a){const i=e.stops;let r=i&&i.length&&i[0].size;return null==r&&(r=e.minSize),y(r,t,a)}(t,a,i);case"clamped-linear":return function(e,t,a,i){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),l=y(t.minSize,a,i),s=y(t.maxSize,a,i),c=Object(r["h"])(i)?i.shape:void 0;if(e<=t.minDataValue)return l;if(e>=t.maxDataValue)return s;if("area"===t.scaleBy&&c){const e="circle"===c,t=e?h*Math.pow(l/2,2):l*l,a=t+n*((e?h*Math.pow(s/2,2):s*s)-t);return e?2*Math.sqrt(a/h):Math.sqrt(a)}return l+n*(s-l)}(e,t,a,i);case"proportional":return function(e,t,a,i){const n=Object(r["h"])(i)?i.shape:void 0,l=e/t.minDataValue,s=y(t.minSize,a,i),c=y(t.maxSize,a,i);let o=null;return o="circle"===n?2*Math.sqrt(l*Math.pow(s/2,2)):"square"===n||"diamond"===n||"image"===n?Math.sqrt(l*Math.pow(s,2)):l*s,O(o,s,c)}(e,t,a,i);case"stops":return function(e,t,a,i,r){const[n,l,s]=w(e,r);if(n===l)return y(t.stops[n].size,a,i);{const e=y(t.stops[n].size,a,i);return e+(y(t.stops[l].size,a,i)-e)*s}}(e,t,a,i,n);case"real-world-size":return function(e,t,a,i){const n=(Object(r["h"])(i)&&i.resolution?i.resolution:1)*c["a"][t.valueUnit],l=y(t.minSize,a,i),s=y(t.maxSize,a,i),{valueRepresentation:o}=t;let u=null;return u="area"===o?2*Math.sqrt(e/h)/n:"radius"===o||"distance"===o?2*e/n:e/n,O(u,l,s)}(e,t,a,i);case"identity":return e;case"unknown":return null}}function g(e,t,a){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===a||t))return null;const r={scale:t,view:a};let n=y(e.minSize,p,r),l=y(e.maxSize,p,r);if(null!=n||null!=l){if(n>l){const e=l;l=n,n=e}return{minSize:n,maxSize:l}}}function w(e,t){if(!t)return;let a=0,i=t.length-1;return t.some((t,r)=>e<t?(i=r,!0):(a=r,!1)),[a,i,(e-t[a])/(t[i]-t[a])]}function _(e,t,a){const r=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":m(n,t,a);switch(n.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:Object(i["a"])(n.axis)}}return r}}}]);
//# sourceMappingURL=chunk-7a7ea23a.6dd75377.js.map