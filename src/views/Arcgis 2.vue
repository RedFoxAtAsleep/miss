<template>
  <div>
    <div id="mapview"></div>
  </div>
</template>
<script>
  import Map from '@arcgis/core/Map';
  import MapView from '@arcgis/core/views/MapView';

  export default {
    name: "Arcgis",
    data(){
      return {
        map: {},
        view: {},
      }
    },
    methods:{
      initMap: function() {
        this.map = new Map({
          basemap: 'topo-vector',  //
        });
        this.view = new MapView({
          container: 'mapview',
          map: this.map,
          center: [121.548935, 31.220142], // longitude, latitude
          zoom: 10,
        });
      }
    },
    components: {
    },
    created() {

    },
    mounted() {
      this.initMap();
    }
  }
</script>

<style scoped>
#mapview {
  padding: 0;
  margin: 0;
  height: 500px;
  width: 500px;
}
</style>
