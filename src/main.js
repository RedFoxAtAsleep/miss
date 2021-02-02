import Vue from 'vue'
import './plugins/axios'
import './plugins/util'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/highcharts'
import './plugins/arcgis'
import './api/index/mock.js'
import api from './api/index.js'

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
