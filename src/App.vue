<template>
  <div id="app">
    <div><img src="./assets/logo.png"></div>
    <div><img
        src="./assets/cat_src_assets_used.jpg"
        style="border: 5px solid rgba(255,255,255,1); border-radius: 20px;"
    ></div>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/about">Go to Foo</router-link>
    <router-link to="/arcgis">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
