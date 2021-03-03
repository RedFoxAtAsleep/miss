import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About/'
import Arcgis from '@/views/Arcgis'
import Cesium from '@/views/Cesium'
import AdminIndex from '@/views/admin/Index'
import AdminHomeIndex from '@/views/admin/home/Index'
import HighchartIndex from "@/components/example/highcharts/Index";
import Count from "@/components/example/vuex/count";
import JsonEditor from "@/components/JsonEditor";
import LoadGltf from "@/components/example/three/125/LoadGltf";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/Home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/json',
    name: 'Json',
    component: JsonEditor
  },
  {
    path: '/three',
    name: 'Three',
    component: LoadGltf,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Count,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminIndex,
    children: [
      {
        path:'home',
        name:'Admin_Home',
        component: AdminHomeIndex,
        children:[
          {
            path:'about',
            name:'Admin_Home_About',
            component: About,
          },
          {
            path:'home',
            name:'Admin_Home_Home',
            component: Home,
          },
          {
            path:'json',
            name:'Admin_Home_Json',
            component: JsonEditor,
          },
          {
            path:'count',
            name:'Admin_Home_Count',
            component: Count,
          },
          {
            path:'chart',
            name:'Admin_Home_Chart',
            component: HighchartIndex,
          },
          {
            path:'arcgis',
            name:'Admin_Home_Arcgis',
            component: Arcgis,
          },
          {
            path:'cesium',
            name:'Admin_Home_Cesium',
            component: Cesium,
          },
        ]
      }
    ]
  },
  {
    path:'/arcgis',
    name: 'Arcgis',
    component: Arcgis
  },
  {
    path:'/highcharts',
    name: 'Highcharts',
    component: HighchartIndex,
  },
]

const router = new VueRouter({
  routes
})

export default router
