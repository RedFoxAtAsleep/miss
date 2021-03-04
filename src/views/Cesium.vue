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

      // Your access token can be found at: https://cesium.com/ion/tokens.
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMGM0Y2NhZi1hNjA1LTRmYWMtOTgwYy0yYzViMGM5ODQ0ZGMiLCJpZCI6NDI4MDMsImlhdCI6MTYxNDY2Nzk3NX0.OiX3xL3GpeOLe1dmUTGe2_kOeCMd9d9rPzbo5CbU6yk';
      // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
      const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
      });
      // Add Cesium OSM Buildings, a global 3D buildings layer.
      const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation : {
          heading : Cesium.Math.toRadians(0.0),
          pitch : Cesium.Math.toRadians(-15.0),
        }
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
