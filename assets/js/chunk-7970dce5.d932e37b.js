(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7970dce5"],{"0c9a":function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return l}));var r=i("b2b2"),n=i("ce6d"),s=i("4261"),a=i("901f"),o=i("8483");function u(e){return(4294901760&e)>>>16}function c(e){return 65535&e}const l={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class d extends o["a"]{constructor(e,t){super(e,t),this.featureAdapter=l,this.events=new n["a"],this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._index=Object(a["a"])(9,e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))}get storeStatistics(){return{featureCount:0,vertexCount:0}}onTileData(e,t,i){if(Object(r["g"])(t.addOrUpdate))return t;this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate),this._storage=i,t.addOrUpdate._storage=i;const n=t.addOrUpdate.getCursor();for(;n.next();){const t=n.getObjectId(),r=(s=n.instance,a=n.getIndex(),s<<16|a);let o=this._objectIdToDisplayId.get(t);o||(o=i.createDisplayId(),this._objectIdToDisplayId.set(t,o),this._spatialIndexInvalid=!0),n.setDisplayId(o),i.setInstanceId(o,r),this.setComputedAttributes(i,n,o,e.scale)}var s,a;return"update"===t.type&&(this._spatialIndexInvalid=!0),this.events.emit("changed"),t}forEach(e){this._objectIdToDisplayId.forEach(t=>{const i=this._storage.getInstanceId(t),r=this._lookupFeature(i);e(r)})}forEachUnsafe(e){this._objectIdToDisplayId.forEach(t=>{const i=this._storage.getInstanceId(t),r=u(i),n=c(i),s=this._getFeatureSet(r);s.setIndex(n),e(s)})}forEachInBounds(e,t){const i=this._searchIndex(e);for(const n of i){const e=this.lookupFeatureByDisplayId(n,this._storage);t(Object(r["n"])(e))}}forEachBounds(e,t,i){this._rebuildIndex();const r=[0,0,0,0];for(const n of e){if(!n.readGeometry())continue;const e=n.getDisplayId();r[0]=this._storage.getXMin(e),r[1]=this._storage.getYMin(e),r[2]=this._storage.getXMax(e),r[3]=this._storage.getYMax(e),t(Object(s["h"])(i,r))}}sweepFeatures(e,t,i){this._objectIdToDisplayId.forEach((r,n)=>{e.has(r)||(t.releaseDisplayId(r),i.unsetAttributeData(r),this._objectIdToDisplayId.delete(n))}),this.events.emit("changed")}sweepFeatureSets(e){this._featureSetsByInstance.forEach((t,i)=>{e.has(i)||this._featureSetsByInstance.delete(i)})}lookupObjectId(e,t){const i=this.lookupFeatureByDisplayId(e,t);return Object(r["g"])(i)?null:i.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const i=t.getInstanceId(e);return this._lookupFeature(i)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),i=u(t),r=c(t),n=this._getFeatureSet(i);return n?(n.setIndex(r),n):null}hasInstance(e){return this._featureSetsByInstance.has(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;this._index.clear();const e=[];this._objectIdToDisplayId.forEach(t=>{const i=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(i))&&e.push(t)}),this._index.load(e),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=u(e),i=c(e),r=this._getFeatureSet(t);if(!r)return null;const n=r.getCursor();return n.setIndex(i),n}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}}},4261:function(e,t,i){"use strict";i.d(t,"a",(function(){return I})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return m})),i.d(t,"d",(function(){return g})),i.d(t,"e",(function(){return a})),i.d(t,"f",(function(){return u})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return y})),i.d(t,"i",(function(){return s})),i.d(t,"j",(function(){return b})),i.d(t,"k",(function(){return p})),i.d(t,"l",(function(){return f})),i.d(t,"m",(function(){return h}));var r=i("b2b2");i("3af1"),i("9180");function n(e=O){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function s(e,t,i,r,s,a,o=n()){return o[0]=e,o[1]=t,o[2]=i,o[3]=r,o[4]=s,o[5]=a,o}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,i){const r=t.length;let n=e[0],s=e[1],a=e[2],o=e[3],u=e[4],c=e[5];if(i)for(let l=0;l<r;l++){const e=t[l];n=Math.min(n,e[0]),s=Math.min(s,e[1]),a=Math.min(a,e[2]),o=Math.max(o,e[0]),u=Math.max(u,e[1]),c=Math.max(c,e[2])}else for(let l=0;l<r;l++){const e=t[l];n=Math.min(n,e[0]),s=Math.min(s,e[1]),o=Math.max(o,e[0]),u=Math.max(u,e[1])}e[0]=n,e[1]=s,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function c(e){return e[0]>=e[3]?0:e[3]-e[0]}function l(e){return e[1]>=e[4]?0:e[4]-e[1]}function d(e){return e[2]>=e[5]?0:e[5]-e[2]}function h(e,t=[0,0,0]){return t[0]=c(e),t[1]=l(e),t[2]=d(e),t}function f(e,t,i=e){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==e&&(i[3]=e[3],i[4]=e[4],i[5]=e[5]),i}function p(e,t,i=e){return i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==e&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),e}function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function m(e){return e?b(e,I):n(I)}function y(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function _(e){return 6===e.length}function g(e,t,i){if(Object(r["g"])(e)||Object(r["g"])(t))return e===t;if(!_(e)||!_(t))return!1;if(i){for(let r=0;r<e.length;r++)if(!i(e[r],t[r]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}const I=[1/0,1/0,1/0,-1/0,-1/0,-1/0],O=[0,0,0,0,0,0];n()},8483:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r=i("c120"),n=i("b2b2"),s=i("f4cc"),a=i("82fa"),o=i("0f1c"),u=i("e92d");function c(e,t,i){e.referencesGeometry();const r=t.readArcadeFeature();try{return e.evaluate({...i,$feature:r})}catch(e){return u["a"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}var l=c;const d=i.e("chunk-4bb58dd0").then(i.bind(null,"ccac"));class h{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}async updateSchema(e,t){const i=Object(o["a"])(this._schema,t);if(this._schema=t,!t||Object(n["g"])(i)||!Object(o["b"])(i,"attributes"))return;Object(r["a"])("esri-2d-update-debug")&&console.debug("Applying Update - Store:",i),this._bitsets.computed.clear(),e.targets[t.name]=!0;const a=t.attributes,u=[],c=[];for(const r in a){const e=a[r];switch(e.type){case"field":break;case"expression":u.push(this._createArcadeComputedField(e));break;case"label-expression":u.push(this._createLabelArcadeComputedField(e));break;case"statistic":c.push(e)}}this._computedFields=await Object(s["b"])(u),this._canCacheExpressionValue=!this._computedFields.some(e=>"expression"===e.type&&e.expression.referencesScale()),this._statisticFields=c}setComputedAttributes(e,t,i,r){const n=this._bitsets.computed;if(!this._canCacheExpressionValue||!n.has(i)){n.set(i);for(const n of this._computedFields){const s=this._evaluateField(t,n,r);switch(n.resultType){case"numeric":e.setComputedNumericAtIndex(i,n.fieldIndex,s);break;case"string":e.setComputedStringAtIndex(i,n.fieldIndex,s)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(a["d"])(e.valueExpression,t,i)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,i=this._sourceInfo.fields,{createLabelFunction:r}=await d,n=await r(e.label,i,t);return{...e,builder:n}}_evaluateField(e,t,i){switch(t.type){case"label-expression":{const i=e.readArcadeFeature();return t.builder.evaluate(i)||""}case"expression":{const{expression:r}=t;return l(r,e,{$view:{scale:i}})}}}}},abb8:function(e,t,i){"use strict";function r(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:r,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(r&&n)t.forEach(e=>{const t=i.getAttribute(e,r),o=i.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(a=Math.max(a,o))});else{const e=r||n;t.forEach(t=>{const r=i.getAttribute(t,e);null==r||isNaN(r)||(s=Math.min(s,r),a=Math.max(a,r))})}return{start:s,end:a}}function n(e,t,i){if(!t||!e)return null;const{startTimeField:r,endTimeField:n}=e;if(!r&&!n)return null;const{start:s,end:a}=t;return null===s&&null===a?null:void 0===s&&void 0===a?()=>!1:r&&n?function(e,t,i,r,n){return null!=r&&null!=n?s=>{const a=e.getAttribute(s,t),o=e.getAttribute(s,i);return(null==a||a<=n)&&(null==o||o>=r)}:null!=r?t=>{const n=e.getAttribute(t,i);return null==n||n>=r}:null!=n?i=>{const r=e.getAttribute(i,t);return null==r||r<=n}:void 0}(i,r,n,s,a):function(e,t,i,r){return null!=i&&null!=r&&i===r?r=>e.getAttribute(r,t)===i:null!=i&&null!=r?n=>{const s=e.getAttribute(n,t);return s>=i&&s<=r}:null!=i?r=>e.getAttribute(r,t)>=i:null!=r?i=>e.getAttribute(i,t)<=r:void 0}(i,r||n,s,a)}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n}))},d518:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return T})),i.d(t,"c",(function(){return q})),i.d(t,"d",(function(){return A})),i.d(t,"e",(function(){return Y})),i.d(t,"f",(function(){return M})),i.d(t,"g",(function(){return P})),i.d(t,"h",(function(){return E})),i.d(t,"i",(function(){return v}));var r=i("b2b2"),n=i("fa8a"),s=i("ce50"),a=i("f4cc"),o=i("7f83"),u=i("2172"),c=i("3cd6"),l=i("f8d4"),d=i("a9ab"),h=i("8048"),f=i("a8d5"),p=i("8152"),b=i("6655"),m=(i("d97e"),i("1ec3"));function y(e,t){return e?t?4:3:t?3:2}function _(e,t,i,r){return I(e,t,i,r.coords[0],r.coords[1])}function g(e,t,i,r,n,s){const a=y(n,s),{coords:o,lengths:u}=r;if(!u)return!1;for(let c=0,l=0;c<u.length;c++,l+=a)if(!I(e,t,i,o[l],o[l+1]))return!1;return!0}function I(e,t,i,r,n){if(!e)return!1;const s=y(t,i),{coords:a,lengths:o}=e;let u=!1,c=0;for(const l of o)u=O(u,a,s,c,l,r,n),c+=l*s;return u}function O(e,t,i,r,n,s,a){let o=e,u=r;for(let c=r,l=r+n*i;c<l;c+=i){u=c+i,u===l&&(u=r);const e=t[c],n=t[c+1],d=t[u],h=t[u+1];(n<a&&h>=a||h<a&&n>=a)&&e+(a-n)/(h-n)*(d-e)<s&&(o=!o)}return o}const j=new n["a"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),w=Object.freeze({}),S=new p["a"],x=new p["a"],R=new p["a"],F={esriGeometryPoint:b["m"],esriGeometryPolyline:b["o"],esriGeometryPolygon:b["n"],esriGeometryMultipoint:b["l"]};function v(e,t,i,r=e.hasZ,n=e.hasM){const s=e.hasZ&&r,a=e.hasM&&n;if(i){const o=Object(b["u"])(R,t,e.hasZ,e.hasM,"esriGeometryPoint",i,r,n);return Object(b["m"])(o,s,a)}return Object(b["m"])(t,s,a)}function M(e,t,i,r,n,s,a=t,o=i){const u=t&&a,c=i&&o,l=r?"coords"in r?r:r.geometry:null;if(!l)return null;if(n){let r=Object(b["q"])(x,l,t,i,e,n,a,o);return s&&(r=Object(b["u"])(R,r,u,c,e,s)),F[e](r,u,c)}if(s){const r=Object(b["u"])(R,l,t,i,e,s,a,o);return F[e](r,u,c)}return Object(b["x"])(S,l,t,i,a,o),F[e](S,u,c)}async function T(e,t,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:a}=e;if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),E(e,t,i)}async function E(e,t,i){if(!e)return null;let{where:n}=e;if(e.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||t&&t===n)&&(e.where=null),!e.geometry)return e;let s=await async function(e){const{geometry:t,distance:i,units:r}=e;if(null==i||"vertexAttributes"in t)return t;const n=t.spatialReference,s=r?j.fromJSON(r):Object(h["e"])(n),a=n&&(Object(o["f"])(n)||Object(o["m"])(n))?t:await Object(m["a"])(n,o["a"]).then(()=>Object(m["b"])(t,o["a"]));return(await V())(a.spatialReference,a,i,s)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;s=Object(l["a"])(s),s.spatialReference=t}e.geometry=s,await Object(m["a"])(s.spatialReference,i);const a=(await Object(f["a"])(Object(d["a"])(s)))[0];if(Object(r["g"])(a))throw w;const u=a.toJSON(),c=await Object(m["b"])(u,u.spatialReference,i);if(!c)throw w;return c.spatialReference=i,e.geometry=c,e}function A(e){return e&&G in e?JSON.parse(JSON.stringify(e,N)):e}const G="_geVersion",N=(e,t)=>e!==G?t:void 0,B={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},C={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},k={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},D={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function U(){return Promise.all([i.e("chunk-2d22cf8c"),i.e("chunk-180660b2")]).then(i.bind(null,"00ac"))}function V(){return U().then(e=>e.geodesicBuffer)}function P(e,t,i,r,n){if(Object(d["g"])(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(b["g"])(new p["a"],t,!1,!1);return Object(a["u"])(t=>_(e,!1,!1,t))}if(Object(d["g"])(t)&&"esriGeometryMultipoint"===i){const i=Object(b["g"])(new p["a"],t,!1,!1);if("esriSpatialRelContains"===e)return Object(a["u"])(e=>g(i,!1,!1,e,r,n))}if(Object(d["d"])(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Object(a["u"])(e=>Object(u["e"])(t,M(i,r,n,e)));if(Object(d["d"])(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Object(a["u"])(e=>Object(u["d"])(t,M(i,r,n,e)));if(Object(d["d"])(t)&&"esriSpatialRelIntersects"===e){const e=Object(c["b"])(i);return Object(a["u"])(s=>e(t,M(i,r,n,s)))}return U().then(s=>{const a=s[B[e]].bind(null,t.spatialReference,t);return e=>a(M(i,r,n,e))})}async function Y(e,t,i){const{spatialRel:r,geometry:n}=e;if(n){if(!0!==C[r])throw new s["a"]("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(Object(o["i"])(n.spatialReference)&&Object(o["i"])(i)){if(!function(e){return!0===k[Object(d["c"])(e)]}(n))throw new s["a"]("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===D[e]}(t))throw new s["a"]("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});if(e.outSR)return Object(m["a"])(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function q(e){if(Object(d["d"])(e))return!0;if(Object(d["g"])(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},eb83:function(e,t,i){"use strict";i.r(t);var r=i("b2b2"),n=i("e92d"),s=i("ce50"),a=i("f4cc"),o=i("28b1"),u=i("9180"),c=i("c64f"),l=i("d518"),d=i("abb8"),h=i("0c9a");const f=n["a"].getLogger("esri.views.2d.layers.features.support.whereUtils"),p={getAttribute:(e,t)=>e.field(t)};async function b(e,t){const r=await i.e("chunk-2d0d03a7").then(i.bind(null,"66a2"));try{const i=r.WhereClause.create(e,t);if(!i.isStandardized){const e=new s["a"]("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);f.error(e)}return e=>{const t=e.readArcadeFeature();return i.testFeature(t,p)}}catch(n){return f.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const m=n["a"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");t["default"]=class{constructor(e){this._geometryBounds=Object(u["d"])(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],r=new Set(e);return this._idToVisibility.forEach((e,n)=>{const s=!!(1&this._idToVisibility.get(n)),a=r.has(n);!s&&a?t.push(n):s&&!a&&i.push(n),this._idToVisibility.set(n,a?3:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:r,objectIds:n}=this;return c["a"].fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:r,objectIds:n})}async update(e,t){this._hash=JSON.stringify(e);const i=await Object(l["h"])(e,null,t);await Object(a["b"])([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await b(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",r=await Object(l["g"])(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(o["a"])(this._geometryBounds,t),this._spatialQueryOperator=r,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(d["b"])(this._serviceInfo.timeInfo,e.timeExtent,h["b"]);else{const t=new s["a"]("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(r["h"])(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))}),e}}}}]);