(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-009b60fc"],{"0ca1":function(e,t,r){"use strict";var s=r("a4ee"),a=(r("c120"),r("e92d"),r("cea0"),r("59b2")),o=r("fa8a"),i=r("d386"),n=(r("e041"),r("8eed"),r("f402"),r("6a0e"));const c=new o["a"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let l=class extends n["a"]{constructor(e){super(e),this.description=null,this.type=null}};Object(s["a"])([Object(a["b"])({type:String,json:{write:!0}})],l.prototype,"description",void 0),Object(s["a"])([Object(a["b"])({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s["a"])([Object(i["a"])("esri.tasks.support.GPMessage")],l);var u=l;t["a"]=u},"3af5":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r("a4ee"),a=(r("c120"),r("9d1d")),o=r("b2b2"),i=(r("e92d"),r("cea0"),r("59b2"),r("d386")),n=r("ce50"),c=r("e041"),l=(r("8eed"),r("f402"),r("2eab")),u=r("9209");const p=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n["a"]("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(l["default"])(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let a=0;a<t.supportedTravelModes.length;a++)t.supportedTravelModes[a].id||(t.supportedTravelModes[a].id=t.supportedTravelModes[a].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(l["default"])(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new n["a"]("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(l["default"])(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(l["default"])(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(a["b"])("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const o=Object(c["I"])(e),i=/\/solveClosestFacility$/.test(o.path)?"Route":/\/solveClosestFacility$/.test(o.path)?"ClosestFacility":"ServiceAreas",n=await Object(l["default"])(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),u=[];let p=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:s,supportedTravelModes:o}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=o,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o["h"])(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s["a"])([Object(i["a"])("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u["a"])){};d=Object(s["a"])([Object(i["a"])("esri.tasks.mixins.NAServiceDescription")],d)},"78a2":function(e,t,r){"use strict";var s=r("a4ee"),a=(r("c120"),r("b2b2")),o=(r("e92d"),r("cea0"),r("59b2")),i=r("afcf"),n=r("d386"),c=(r("e041"),r("8eed"),r("f402"),r("5996")),l=r("4ae5"),u=r("3af1"),p=r("521c"),d=(r("e06a"),r("8d60")),f=r("f29a");let b=class extends f["default"]{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach(e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)});const r=c["a"].fromJSON(t.spatialReference);return e.map(e=>{const t=d["a"].fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(a["n"])(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map(t=>{const r=new d["a"]({geometry:new l["a"]({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r}),t})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(a["n"])(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,a=0,o=0;const i=[];let n,c,l,u,p,d,f,b,y=0,m=0,h=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[y],32)){y=2;const e=parseInt(p[y],32);y++,d=parseInt(p[y],32),y++,1&e&&(m=p.indexOf("|")+1,f=parseInt(p[m],32),m++),2&e&&(h=p.indexOf("|",m)+1,b=parseInt(p[h],32),h++)}else d=parseInt(p[y],32),y++;for(;y<p.length&&"|"!==p[y];){n=parseInt(p[y],32)+r,y++,r=n,c=parseInt(p[y],32)+s,y++,s=c;const e=[n/d,c/d];m&&(u=parseInt(p[m],32)+a,m++,a=u,e.push(u/f)),h&&(l=parseInt(p[h],32)+o,h++,o=l,e.push(l/b)),i.push(e)}return{paths:[i],hasZ:m>0,hasM:h>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach(e=>{e.paths.forEach(e=>{r=r.concat(e)})});const s=[];let a=[0,0];return r.forEach(e=>{e[0]===a[0]&&e[1]===a[1]||(s.push(e),a=e)}),new p["a"]({paths:[s]},t)}};Object(s["a"])([Object(o["b"])({type:u["a"],json:{read:{source:"summary.envelope"}}})],b.prototype,"extent",void 0),Object(s["a"])([Object(o["b"])()],b.prototype,"features",void 0),Object(s["a"])([Object(i["a"])("features")],b.prototype,"readFeatures",null),Object(s["a"])([Object(o["b"])()],b.prototype,"geometryType",void 0),Object(s["a"])([Object(o["b"])({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],b.prototype,"mergedGeometry",null),Object(s["a"])([Object(o["b"])()],b.prototype,"routeId",void 0),Object(s["a"])([Object(o["b"])()],b.prototype,"routeName",void 0),Object(s["a"])([Object(o["b"])({value:null,readOnly:!0,dependsOn:["features"]})],b.prototype,"strings",null),Object(s["a"])([Object(o["b"])({json:{read:{source:"summary.totalDriveTime"}}})],b.prototype,"totalDriveTime",void 0),Object(s["a"])([Object(o["b"])({json:{read:{source:"summary.totalLength"}}})],b.prototype,"totalLength",void 0),Object(s["a"])([Object(o["b"])({json:{read:{source:"summary.totalTime"}}})],b.prototype,"totalTime",void 0),b=Object(s["a"])([Object(n["a"])("esri.tasks.support.DirectionsFeatureSet")],b);var y=b;t["a"]=y},a3a2:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const a="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[a]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]},this),r}}function a(e){return new s(e)}},b740:function(e,t,r){"use strict";r.r(t);var s=r("a4ee"),a=(r("c120"),r("e92d"),r("cea0"),r("59b2")),o=r("d386"),i=(r("e041"),r("8eed"),r("f402"),r("f4cc")),n=r("2eab"),c=r("a8d5"),l=r("9209"),u=r("a3a2"),p=r("3af5"),d=r("b2b2"),f=r("afcf"),b=r("6a0e"),y=r("5996"),m=r("4ae5"),h=r("1219"),O=r("521c"),j=(r("e06a"),r("8d60")),v=r("f29a"),g=r("78a2"),T=r("e789");function w(e){return v["default"].fromJSON(e).features.map(e=>e.geometry)}let M=class extends b["a"]{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return w(e)}readIncidents(e){return w(e)}readPointBarriers(e,t){return w(t.barriers)}readPolylineBarriers(e){return w(e)}readPolygonBarriers(e){return w(e)}readRoutes(e){return function(e){return e.features.map(t=>{const r=y["a"].fromJSON(e.spatialReference),s=j["a"].fromJSON(t);return Object(d["h"])(s.geometry)&&(s.geometry.spatialReference=r),s})}(e)}};Object(s["a"])([Object(a["b"])({type:[g["a"]]})],M.prototype,"directions",void 0),Object(s["a"])([Object(a["b"])({type:[m["a"]]})],M.prototype,"facilities",void 0),Object(s["a"])([Object(f["a"])("facilities")],M.prototype,"readFacilities",null),Object(s["a"])([Object(a["b"])({type:[m["a"]]})],M.prototype,"incidents",void 0),Object(s["a"])([Object(f["a"])("incidents")],M.prototype,"readIncidents",null),Object(s["a"])([Object(a["b"])({type:[T["a"]]})],M.prototype,"messages",void 0),Object(s["a"])([Object(a["b"])({type:[m["a"]]})],M.prototype,"pointBarriers",void 0),Object(s["a"])([Object(f["a"])("pointBarriers",["barriers"])],M.prototype,"readPointBarriers",null),Object(s["a"])([Object(a["b"])({type:[O["a"]]})],M.prototype,"polylineBarriers",void 0),Object(s["a"])([Object(f["a"])("polylineBarriers")],M.prototype,"readPolylineBarriers",null),Object(s["a"])([Object(a["b"])({type:[h["a"]]})],M.prototype,"polygonBarriers",void 0),Object(s["a"])([Object(f["a"])("polygonBarriers")],M.prototype,"readPolygonBarriers",null),Object(s["a"])([Object(a["b"])({type:[j["a"]]})],M.prototype,"routes",void 0),Object(s["a"])([Object(f["a"])("routes")],M.prototype,"readRoutes",null),M=Object(s["a"])([Object(o["a"])("esri.tasks.support.ClosestFacilitySolveResult")],M);var B=M,S=B;const N=Object(u["a"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let _=class extends(Object(p["a"])(l["a"])){constructor(e){super(e),this.url=null}solve(e,t){const r=[],s=[],a={},o={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,s,"incidents.features",a),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,s,"facilities.features",a),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",a),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",a),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",a),Object(c["a"])(s).then(e=>{for(const t in a){const s=a[t];r.push(t),o[t]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(o,r)?this.getServiceDescription():Object(i["u"])({dontCheck:!0})}).then(s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(o,r);for(const t in o)o[t].forEach((r,s)=>{e.get(t)[s].geometry=r});let a={query:{...this.parsedUrl.query,f:"json",...N.toQueryParams(e)}};return(this.requestOptions||t)&&(a={...this.requestOptions,...t,...a}),Object(n["default"])(this.parsedUrl.path+"/solveClosestFacility",a)}).then(e=>S.fromJSON(e.data))}_collectGeometries(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}};Object(s["a"])([Object(a["b"])()],_.prototype,"url",void 0),_=Object(s["a"])([Object(o["a"])("esri.tasks.ClosestFacilityTask")],_);var k=_;t["default"]=k},e789:function(e,t,r){"use strict";var s=r("a4ee"),a=(r("c120"),r("e92d"),r("cea0"),r("59b2")),o=r("fa8a"),i=r("d386"),n=(r("e041"),r("8eed"),r("f402"),r("0ca1"));const c=new o["a"]({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let l=class extends n["a"]{constructor(e){super(e),this.type=null}};Object(s["a"])([Object(a["b"])({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s["a"])([Object(i["a"])("esri.tasks.support.NAMessage")],l);var u=l;t["a"]=u}}]);