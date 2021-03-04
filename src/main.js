import Vue from 'vue'
import './plugins/util'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/highcharts'
import './plugins/arcgis'
import './plugins/cesium'
// import 'cesium/Widgets/widgets.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
