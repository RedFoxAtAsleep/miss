<template>
  <div class="u-menu">
    <el-menu
        :unique-opened="true"
        :default-active="this.selected"
    >
      <u-menu-item
          v-for="item in items"
          v-bind:key="item['uid']"
          v-bind:item="item"
      >
      </u-menu-item>
    </el-menu>
  </div>
</template>

<script>
import UMenuItem from "@/views/admin/home/UMenuItem";
import {mapState} from "vuex"

export default {
  name: "UMenu",
  props:['items'],
  data(){
    return {}
  },
  computed:{
    ...mapState('index', ['selected']),
  },
  components:{
    UMenuItem
  }
}
</script>

<style>
div.u-menu {}
</style>
