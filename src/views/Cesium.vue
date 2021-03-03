<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  name: "Cesium",
  data(){
    return {
      viewer: {},
    }
  },
  methods: {
    initViewer: function () {

      Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYjZiMGFiMC1hMWI5LTQyYmYtOGNlMS1hZTViMzFkZmYzMzgiLCJpZCI6NDI4MDMsImlhdCI6MTYxMTgyMDc3OX0.KeyY12XS-ebwPt5uPq99ZVA303UshPsiYd3R7AyD6R0";
      //加载谷歌卫星影像
      let url = "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali";
      let google = new Cesium.UrlTemplateImageryProvider({url:url})

      let viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: google,
        terrainProvider : Cesium.createWorldTerrain({
          requestWaterMask : true,
          requestVertexNormals : true
        }),
      });


      window.viewer = viewer;
      // viewer容器
      // image provider加载影像
      // terrain provider加载地形，默认EllipsoidTerrainProvider，光滑椭球
      // 设置相机视角 常用setView和flyTo函数
      // Cesium3DTileStyle能实现New York City Demo效果

    },
  },
  components: {
  },
  created() {

  },
  mounted() {
    this.initViewer();
  }
}
</script>

<style scoped>

</style>
