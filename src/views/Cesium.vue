<template>
  <div>
    <div id="cesiumContainer" :style="this.window"></div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Cesium",
  data(){
    return {
      viewer: {},
    }
  },
  computed:{
    availHeight: function () {
      // return window.screen.availHeight + 'px';
      return '700px';
    },
    availWidth: function () {
      // return window.screen.availWidth + 'px';
      return '1200px';
    },
    window: function (){
      console.log({
        width: this.availWidth,
        height: this.availHeight
      })
      return {
        width: this.availWidth,
        height: this.availHeight
      }
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
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('beforeRouteEnter of cesium component', to, from);
    // const iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
    // if(iframe){
    //   iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
    //   iframe.setAttribute("src", "");
    // }
    next(async function (vm) {
      // 通过 `vm` 访问组件实例
      // console.log(vm);
      // const iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
      // if(iframe){
      //   iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
      //   iframe.setAttribute("src", "");
      // }
    })
  }
}
</script>

<style>
div#cesiumContainer div.cesium-viewer div.cesium-viewer-cesiumWidgetContaine div.cesium-widget canvas{
  width: 100%;
  height: 100vh;
}
</style>
