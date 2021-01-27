<template>
  <div class="u-menu-item">
    <el-menu-item
        v-if="item['type'] === 'link'"
        v-show="item['show']"
        :index="item['uid']"
        v-bind:disabled="false"
    >
      <template slot="title">
        <i :class="item['icon']"></i>
        <a
            class="u-menu-link"
            :href="item['src']"
            target="_blank">{{ item['label'] }}
        </a>
      </template>
    </el-menu-item>
    <el-menu-item
        v-if="item['type']=== 'node'"
        v-show="item['show']"
        :index="item['uid']"
        v-bind:disabled="false"
        @click="activateNode"
    >
      <template><i :class="item['icon']"></i>{{ item['label'] }}</template>
    </el-menu-item>
    <el-submenu
        v-if="item['type']=== 'group'"
        :index="item['uid']"
        v-bind:disabled="false"
    >
      <template slot="title"><i :class="item['icon']"></i>{{ item['label'] }}</template>
      <u-menu-item
          v-for="child in item['children']"
          v-bind:key="child['uid']"
          v-bind:item="child">
      </u-menu-item>
    </el-submenu>
  </div>
</template>

<script>
import UMenuItem from "./UMenuItem";

export default {
  name: "UMenuItem",
  data() {
    return {}
  },
  props: ['item'],
  created() {
  },
  components: {
    UMenuItem,
  },
  methods:{
    // @click="activateNode"
    // @click="activateNode(x, $event, y)"
    activateNode: function(){
      console.log(this.item)
    }
  }

}
</script>

<style>
.u-menu-item {
  background-color: #47475B;
  color: #FFFFFF;
}

.u-menu-item a.u-menu-link {
  color: #FFFFFF;
  text-decoration: none;
}

.u-menu-item a.u-menu-link:link {
  color: #FFFFFF;
  text-decoration: none;
}

.u-menu-item a.u-menu-link:visited {
}

.u-menu-item a.u-menu-link:hover {
}

.u-menu-item a.u-menu-link:active {
}

.u-menu-item .el-submenu {

}

.u-menu-item .el-submenu__title {
  background-color: #47475B;
  color: #FFFFFF;
  padding-right: 100px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}

.u-menu-item .el-submenu .el-menu-item {
  background-color: #47475B;
  color: #FFFFFF;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
</style>
