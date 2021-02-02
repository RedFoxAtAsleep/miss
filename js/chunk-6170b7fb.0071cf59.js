(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6170b7fb","chunk-2160edaf"],{"0dfa":function(e,a,r){"use strict";function n(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}r.d(a,"a",(function(){return n}))},"5c92":function(e,a,r){"use strict";r.r(a),r.d(a,"fromItem",(function(){return o})),r.d(a,"selectLayerClassPath",(function(){return s}));var n=r("b2b2"),t=r("ce50"),c=r("f4cc"),l=r("2eab"),u=r("a7e1"),i=r("0dfa"),y=r("a0b4");function o(e){return!e.portalItem||e.portalItem instanceof u["default"]||(e={...e,portalItem:new u["default"](e.portalItem)}),(a=e.portalItem,a.load().then(s).then(d)).then(a=>{const r={portalItem:e.portalItem,...a.properties},n=a.constructor;return Object(c["u"])(new n(r))});var a}function s(e){switch(e.type){case"Map Service":return function(e){return function(e){return S(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}(e);case"Feature Service":return function(e){return L(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){return await e.load(),Object(i["a"])(e,"Map Notes")?{className:"MapNotesLayer"}:Object(i["a"])(e,"Route Layer")?{className:"RouteLayer"}:1===h(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then(a=>{if("object"==typeof a){const r={};let n;if(null!=a.id?(r.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return S(n).then(e=>{let a="SceneLayer";const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(a=n[e.layerType]),{className:a,properties:r}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var a,r,n;await e.load();const t=null!=(a=null==(r=e.typeKeywords)?void 0:r.map(e=>e.toLowerCase()))?a:[];if(t.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(t.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const c=await e.fetchData(),l=null==c?void 0:c.layerType;if("ArcGISTiledImageServiceLayer"===l)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===l)return{className:"ImageryLayer"};const u=await S(e.url);return"map"===(null==(n=u.cacheType)?void 0:n.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Object(c["t"])(new t["a"]("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,y["a"][e.className])().then(a=>({constructor:a,properties:e.properties}))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Object(c["u"])({}):e.load().then(()=>e.fetchData()).then(a=>h(a)>0?f(a):S(e.url).then(f))}function f(e){return 1===h(e)&&{id:Object(n["n"])(p(e))}}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function h(e){var a,r,n,t;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(n=null==e||null==(t=e.tables)?void 0:t.length)?n:0)}function S(e){return Object(l["default"])(e,{responseType:"json",query:{f:"json"}}).then(e=>e.data)}},"60ec":function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var n=r("0028"),t=r("f4cc"),c=r("792b");async function l(e,a,r){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const u=await Object(c["c"])(l.populateFromStyle());if(Object(t["w"])(r),!1===u.ok){const r=u.error;a&&a.messages&&a.messages.push(new n["a"]("renderer:style-reference","Failed to create unique value renderer from style reference: "+r.message,{error:r,context:a})),e.clear("renderer",a.origin)}}}},a0b4:function(e,a,r){"use strict";r.d(a,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await r.e("chunk-67c8c48d").then(r.bind(null,"091f"))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-1a187d1e")]).then(r.bind(null,"4d64e"))).default,CSVLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-72f19a20")]).then(r.bind(null,"2a7d"))).default,ElevationLayer:async()=>(await r.e("chunk-744ded56").then(r.bind(null,"f20e"))).default,FeatureLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-91db3056")]).then(r.bind(null,"5bd5"))).default,GroupLayer:async()=>(await r.e("chunk-af747db0").then(r.bind(null,"54fc"))).default,GeoRSSLayer:async()=>(await r.e("chunk-5c231d92").then(r.bind(null,"00ff"))).default,ImageryLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-506436f8"),r.e("chunk-780dae74"),r.e("chunk-55f74dc4")]).then(r.bind(null,"fc65"))).default,ImageryTileLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-506436f8"),r.e("chunk-780dae74"),r.e("chunk-e98a3934")]).then(r.bind(null,"9917"))).default,IntegratedMeshLayer:async()=>(await r.e("chunk-111d6a80").then(r.bind(null,"cafc"))).default,KMLLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-024a44f8")]).then(r.bind(null,"f5fc"))).default,MapImageLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-8c56d4be"),r.e("chunk-5240b77b")]).then(r.bind(null,"53f8"))).default,MapNotesLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-ba2d03d2")]).then(r.bind(null,"5afa"))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e("chunk-fecc5efc"),r.e("chunk-2d0e9004")]).then(r.bind(null,"8c58"))).default,PointCloudLayer:async()=>(await r.e("chunk-8cede854").then(r.bind(null,"44bb"))).default,RouteLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-4fbdbe9d")]).then(r.bind(null,"b285"))).default,SceneLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-2f7f79b3"),r.e("chunk-6715a32e")]).then(r.bind(null,"d321"))).default,StreamLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-5ab14192")]).then(r.bind(null,"bba8"))).default,TileLayer:async()=>(await Promise.all([r.e("chunk-6ac00c9e"),r.e("chunk-6d043872"),r.e("chunk-682e14f4"),r.e("chunk-8c56d4be"),r.e("chunk-7a7ea23a")]).then(r.bind(null,"2650"))).default,UnknownLayer:async()=>(await r.e("chunk-540885d3").then(r.bind(null,"a9ca"))).default,UnsupportedLayer:async()=>(await r.e("chunk-59574de2").then(r.bind(null,"18dd"))).default,VectorTileLayer:async()=>(await Promise.all([r.e("chunk-297ef2ac"),r.e("chunk-ea618664")]).then(r.bind(null,"173c"))).default,WebTileLayer:async()=>(await r.e("chunk-fecc5efc").then(r.bind(null,"9dc3"))).default,WMSLayer:async()=>(await r.e("chunk-3bb3a664").then(r.bind(null,"8760"))).default,WMTSLayer:async()=>(await Promise.all([r.e("chunk-fecc5efc"),r.e("chunk-2d20e7ea")]).then(r.bind(null,"b039"))).default}},e50f:function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",(function(){return L}));r("c120");var n=r("f4cc"),t=r("2c4f"),c=r("a7e1"),l=r("60ec"),u=r("a0b4"),i=r("0dfa");function y(e,a){return s(e,a,"notes","Map Notes")}function o(e,a){return s(e,a,"route","Route Layer")}async function s(e,a,r,n){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new c["default"]({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&Object(i["a"])(r,n)}return!1}var d=r("5c92");async function L(e,a,r){if(!a)return;const t=[];for(const n of a){const e=I(n,r);"GroupLayer"===n.layerType?t.push(w(e,n,r)):t.push(e)}const c=await Object(n["j"])(t);for(const n of c)!n.value||r.filter&&!r.filter(n.value)||e.add(n.value)}const f={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},h={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},b={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,a){return async function(e,a,r){const n=new e;return n.read(a,r.context),"group"===n.type&&k(a)&&await async function(e,a,r){const n=u["a"].FeatureLayer,t=await n(),c=a.featureCollection,l=c.showLegend,i=c.layers.map(e=>{const a=new t;return a.read(e,r),null!=l&&a.read({showLegend:l},r),a});e.layers.addMany(i)}(n,a,r.context),await Object(l["a"])(n,r.context),n}(await async function(e,a){const r=a.context,n=function(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=h;break;case"ground":a=p;break;default:a=f}break;default:switch(e.layerContainerType){case"basemap":a=b;break;case"tables":a=m;break;default:a=S}}return a}(r);let t=e.layerType||e.type;!t&&a&&a.defaultLayerType&&(t=a.defaultLayerType);const l=n[t];let i=l?u["a"][l]:u["a"].UnknownLayer;const s=r&&r.portal;if(g(e)){if(e.itemId){const a=new c["default"]({id:e.itemId,portal:s});await a.load();const r=(await Object(d["selectLayerClassPath"])(a)).className||"UnknownLayer";i=u["a"][r]}}else"ArcGISFeatureLayer"===t&&(await y(e,s)?i=u["a"].MapNotesLayer:await o(e,s)?i=u["a"].RouteLayer:k(e)&&(i=u["a"].GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(i=u["a"].WMTSLayer),i()}(e,a),e,a)}function k(e){if("ArcGISFeatureLayer"!==e.layerType||g(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function g(e){return"Feature Collection"===e.type}async function w(e,a,r){const n=new t["a"],c=L(n,Array.isArray(a.layers)?a.layers:[],r),l=await e;if(await c,"group"===l.type)return l.layers.addMany(n),l}}}]);
//# sourceMappingURL=chunk-6170b7fb.0071cf59.js.map