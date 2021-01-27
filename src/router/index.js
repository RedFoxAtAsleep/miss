import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About/'
import Arcgis from '@/views/Arcgis'
import AdminIndex from '@/views/admin/Index'
import LeftNavigation from "@/views/admin/home/LeftNavigation";
import RightWindow from "@/views/admin/home/RightWindow";
import HighchartIndex from "@/components/example/highcharts/Index";
import Count from "@/components/example/vuex/count";

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
        components: {
          'left_navigation': LeftNavigation,
          'right_window': RightWindow
        },
      }
    ]
  },
  {
    path:'/arcgis',
    name: 'Arcgis',
    component: () => Arcgis
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
