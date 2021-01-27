<template>
  <div class="admin">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
    return {
      adminStyle:{}
    }
  },
  computed:{},
  created(){
  },
  mounted(){},
  watch: {
  },
  methods: {
  },

}
</script>

<style>

div.admin  {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: 100vh;
}
</style>
