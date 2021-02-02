<template>
  <div class='admin' :style="this.style.admin">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
    return {
    }
  },
  computed:{
    style: function (){
      return {
        'admin':{
          'display': 'grid',
          'grid-template-rows': 'auto 1fr auto',
          'width': '100vw',
          'height': '100vh',
          'margin': '0',
          'padding': '0',
          'border': '0',
        }
      }
    }
  },
  created(){},
  mounted(){},
  watch: {
  },

}
</script>
<style>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
