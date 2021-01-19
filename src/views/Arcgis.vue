<template>
  <div>
    <div id="mapview"></div>
  </div>
</template>

<script>
  import Map from '@arcgis/core/Map';
  import MapView from '@arcgis/core/views/MapView';

  const initMap = () => {
    const map = new Map({
      basemap: 'topo-vector',  //
    });
    const view = new MapView({
      container: 'mapview',
      map: map,
      center: [121.548935, 31.220142], // longitude, latitude
      zoom: 10,
    });
  };

  export default {
    name: "Arcgis",
    components: {},
    mounted() {
      initMap();
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
