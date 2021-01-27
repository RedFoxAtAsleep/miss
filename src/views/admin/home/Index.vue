<template>
  <div class="admin-home">
    <div class="left">
      <left-navigation></left-navigation>
    </div>
    <div class="right">
      <right-window></right-window>
    </div>
  </div>
</template>

<script>
import LeftNavigation from "@/views/admin/home/LeftNavigation";
import RightWindow from "@/views/admin/home/RightWindow";

export default {
  name: "index",
  data(){
    return {
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
  components:{
    LeftNavigation,
    RightWindow
  }

}
</script>

<style>

div.admin-home {
  background: white;
  display: grid;
  grid-template-columns: 2fr 8fr;  /* fregment */
}
div.admin-home div.left {
  height: 100vh;
  overflow: auto;
}
div.admin-home div.left::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
div.admin-home div.right {
  height: 100vh;
  overflow: auto;
}
div.admin-home div.right::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
