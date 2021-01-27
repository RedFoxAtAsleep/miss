<template>
  <div class="home">
    <div>
      <img class="small_photo mirror_rotate_vertical" alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <img class="small_photo mirror_rotate_vertical" alt="Vue logo" src="../assets/logo.png">
      <img class="small_photo" alt="Cat logo" src="../assets/cat_src_assets_used.jpg">
      <img class="small_photo mirror_rotate_vertical" alt="Vue logo" src="../assets/logo.png">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/index.js'


export default {
  name: 'Home',
  async created(){
    const response = await api.readIndexTree();
    const indexTree = response['data'];
    console.log('Home.vue', 'Var indexTree', indexTree);
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
div.home {
  /* 前段路由是空间区域的划分，
  router-view起拼接代码的作用，小心css的影响范围
  小心这个坑
  以下样式剪切自App.vue #app 样式
  */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.home img.small_photo{
  border-radius: 5%;
  /* 只设置width或hight实现缩放 */
  width: 10%;
}
.mirror_rotate_horizontal {
  transform: rotateY(180deg);   /* 水平镜像翻转 */
}
.mirror_rotate_vertical {
  transform: rotateX(180deg);   /* 垂直镜像翻转 */
}

</style>
