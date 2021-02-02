<template>
  <div class="u-menu">
    <el-menu
        :unique-opened="true"
        :default-active="this.selectedIndex && this.selectedIndex['uid']"
    >
      <u-menu-item
          v-for="subtree in this.indexTreeComplete"
          v-bind:key="subtree['uid']"
          v-bind:item="subtree"
      >
      </u-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import UMenuItem from "@/views/admin/home/UMenuItem";

export default {
  name: "UMenu",
  data(){
    return {}
  },
  computed:{
    ...mapState('index', ['selectedIndex', 'indexTreeComplete']),
  },
  components:{
    UMenuItem
  }
}
</script>

<style>
.u-menu{
}
.u-menu .el-menu{
  border: 0;
  background-color:  #30475e;
}
</style>
