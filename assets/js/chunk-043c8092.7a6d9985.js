(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043c8092","chunk-2d0d3e74","chunk-2d0d3e74","chunk-2d0d6f6b"],{"5f6c":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n||"undefined"!=typeof self&&self;function r(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function a(n,e,t){return n(t={path:e,exports:{},require:function(n,e){return u(null==e&&t.path)}},t.exports),t.exports}function u(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,t("c8ba"))},7590:function(n,e,t){"use strict";t.r(e),t.d(e,"hydratedAdapter",(function(){return c}));var r=t("4ae5"),a=t("3af1"),u=t("57dc"),i=t("1219"),o=t("521c");const c={convertToGEGeometry:function(n,e){if(null==e)return null;let t="cache"in e?e.cache._geVersion:void 0;return null==t&&(t=n.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=t)),t},exportPoint:function(n,e,t){const a=n.hasZ(e),u=n.hasM(e),i=new r["a"]({x:n.getPointX(e),y:n.getPointY(e),spatialReference:t});return a&&(i.z=n.getPointZ(e)),u&&(i.m=n.getPointM(e)),i.cache._geVersion=e,i},exportPolygon:function(n,e,t){const r=new i["a"]({rings:n.exportPaths(e),hasZ:n.hasZ(e),hasM:n.hasM(e),spatialReference:t});return r.cache._geVersion=e,r},exportPolyline:function(n,e,t){const r=new o["a"]({paths:n.exportPaths(e),hasZ:n.hasZ(e),hasM:n.hasM(e),spatialReference:t});return r.cache._geVersion=e,r},exportMultipoint:function(n,e,t){const r=new u["a"]({hasZ:n.hasZ(e),hasM:n.hasM(e),points:n.exportPoints(e),spatialReference:t});return r.cache._geVersion=e,r},exportExtent:function(n,e,t){const r=n.hasZ(e),u=n.hasM(e),i=new a["a"]({xmin:n.getXMin(e),ymin:n.getYMin(e),xmax:n.getXMax(e),ymax:n.getYMax(e),spatialReference:t});if(r){const t=n.getZExtent(e);i.zmin=t.vmin,i.zmax=t.vmax}if(u){const t=n.getMExtent(e);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=e,i}}},ea51:function(n,e,t){"use strict";t.r(e),t.d(e,"buffer",(function(){return P})),t.d(e,"clip",(function(){return o})),t.d(e,"contains",(function(){return d})),t.d(e,"convexHull",(function(){return E})),t.d(e,"crosses",(function(){return f})),t.d(e,"cut",(function(){return c})),t.d(e,"densify",(function(){return j})),t.d(e,"difference",(function(){return v})),t.d(e,"disjoint",(function(){return g})),t.d(e,"distance",(function(){return s})),t.d(e,"equals",(function(){return l})),t.d(e,"extendedSpatialReferenceInfo",(function(){return i})),t.d(e,"flipHorizontal",(function(){return J})),t.d(e,"flipVertical",(function(){return O})),t.d(e,"generalize",(function(){return D})),t.d(e,"geodesicArea",(function(){return N})),t.d(e,"geodesicBuffer",(function(){return Z})),t.d(e,"geodesicDensify",(function(){return q})),t.d(e,"geodesicLength",(function(){return T})),t.d(e,"intersect",(function(){return R})),t.d(e,"intersects",(function(){return p})),t.d(e,"isSimple",(function(){return m})),t.d(e,"nearestCoordinate",(function(){return _})),t.d(e,"nearestVertex",(function(){return I})),t.d(e,"nearestVertices",(function(){return S})),t.d(e,"offset",(function(){return b})),t.d(e,"overlaps",(function(){return A})),t.d(e,"planarArea",(function(){return H})),t.d(e,"planarLength",(function(){return L})),t.d(e,"relate",(function(){return x})),t.d(e,"rotate",(function(){return k})),t.d(e,"simplify",(function(){return w})),t.d(e,"symmetricDifference",(function(){return M})),t.d(e,"touches",(function(){return h})),t.d(e,"union",(function(){return V})),t.d(e,"within",(function(){return y}));var r=t("f606"),a=t("7590");function u(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function i(n){return r["a"].extendedSpatialReferenceInfo(n)}function o(n,e){return r["a"].clip(a["hydratedAdapter"],u(n),n,e)}function c(n,e){return r["a"].cut(a["hydratedAdapter"],u(n),n,e)}function d(n,e){return r["a"].contains(a["hydratedAdapter"],u(n),n,e)}function f(n,e){return r["a"].crosses(a["hydratedAdapter"],u(n),n,e)}function s(n,e,t){return r["a"].distance(a["hydratedAdapter"],u(n),n,e,t)}function l(n,e){return r["a"].equals(a["hydratedAdapter"],u(n),n,e)}function p(n,e){return r["a"].intersects(a["hydratedAdapter"],u(n),n,e)}function h(n,e){return r["a"].touches(a["hydratedAdapter"],u(n),n,e)}function y(n,e){return r["a"].within(a["hydratedAdapter"],u(n),n,e)}function g(n,e){return r["a"].disjoint(a["hydratedAdapter"],u(n),n,e)}function A(n,e){return r["a"].overlaps(a["hydratedAdapter"],u(n),n,e)}function x(n,e,t){return r["a"].relate(a["hydratedAdapter"],u(n),n,e,t)}function m(n){return r["a"].isSimple(a["hydratedAdapter"],u(n),n)}function w(n){return r["a"].simplify(a["hydratedAdapter"],u(n),n)}function E(n,e=!1){return r["a"].convexHull(a["hydratedAdapter"],u(n),n,e)}function v(n,e){return r["a"].difference(a["hydratedAdapter"],u(n),n,e)}function M(n,e){return r["a"].symmetricDifference(a["hydratedAdapter"],u(n),n,e)}function R(n,e){return r["a"].intersect(a["hydratedAdapter"],u(n),n,e)}function V(n,e=null){return r["a"].union(a["hydratedAdapter"],u(n),n,e)}function b(n,e,t,i,o,c){return r["a"].offset(a["hydratedAdapter"],u(n),n,e,t,i,o,c)}function P(n,e,t,i=!1){return r["a"].buffer(a["hydratedAdapter"],u(n),n,e,t,i)}function Z(n,e,t,i,o,c){return r["a"].geodesicBuffer(a["hydratedAdapter"],u(n),n,e,t,i,o,c)}function _(n,e,t=!0){return r["a"].nearestCoordinate(a["hydratedAdapter"],u(n),n,e,t)}function I(n,e){return r["a"].nearestVertex(a["hydratedAdapter"],u(n),n,e)}function S(n,e,t,i){return r["a"].nearestVertices(a["hydratedAdapter"],u(n),n,e,t,i)}function z(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function k(n,e,t){var a;if(null==n)throw new Error("Illegal Argument Exception");const u=n.spatialReference;if(null==(t=null!=(a=t)?a:z(n)))throw new Error("Illegal Argument Exception");const i=n.constructor.fromJSON(r["a"].rotate(n,e,t));return i.spatialReference=u,i}function J(n,e){var t;if(null==n)throw new Error("Illegal Argument Exception");const a=n.spatialReference;if(null==(e=null!=(t=e)?t:z(n)))throw new Error("Illegal Argument Exception");const u=n.constructor.fromJSON(r["a"].flipHorizontal(n,e));return u.spatialReference=a,u}function O(n,e){var t;if(null==n)throw new Error("Illegal Argument Exception");const a=n.spatialReference;if(null==(e=null!=(t=e)?t:z(n)))throw new Error("Illegal Argument Exception");const u=n.constructor.fromJSON(r["a"].flipVertical(n,e));return u.spatialReference=a,u}function D(n,e,t,i){return r["a"].generalize(a["hydratedAdapter"],u(n),n,e,t,i)}function j(n,e,t){return r["a"].densify(a["hydratedAdapter"],u(n),n,e,t)}function q(n,e,t,i=0){return r["a"].geodesicDensify(a["hydratedAdapter"],u(n),n,e,t,i)}function H(n,e){return r["a"].planarArea(a["hydratedAdapter"],u(n),n,e)}function L(n,e){return r["a"].planarLength(a["hydratedAdapter"],u(n),n,e)}function N(n,e,t){return r["a"].geodesicArea(a["hydratedAdapter"],u(n),n,e,t)}function T(n,e,t){return r["a"].geodesicLength(a["hydratedAdapter"],u(n),n,e,t)}}}]);