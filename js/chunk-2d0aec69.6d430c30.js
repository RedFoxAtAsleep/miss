(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aec69"],{"0c00":function(e,t,s){"use strict";s.r(t);var r=s("f4cc"),o=s("3af1"),c=(s("e06a"),s("3e27")),i=s("1451"),a=s("9dee"),n=s("7220");t["default"]=class{async decode(e){const t=await Object(i["a"])(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=c["a"].fromJSON(e.pixelBlock),e.extent=e.extent?o["a"].fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Object(r["u"])(t&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=n["a"].fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(c["a"].fromJSON(e.srcPixelBlock),e.stretchParams);return Object(r["u"])(t&&t.toJSON())}estimateStatisticsHistograms(e){const t=Object(a["f"])(c["a"].fromJSON(e.srcPixelBlock));return Object(r["u"])(t)}split(e){const t=Object(a["m"])(c["a"].fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((e,s)=>{t.set(s,null==e?void 0:e.toJSON())}),Object(r["u"])(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(e=>e?new c["a"](e):null),s=Object(a["i"])(t,e.srcMosaicSize);if(!e.coefs)return s&&s.toJSON();const r=Object(a["a"])(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return r&&r.toJSON()}}}}]);
//# sourceMappingURL=chunk-2d0aec69.6d430c30.js.map