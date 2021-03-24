<template>
  <div class="u-menu-item">
    <!-- 链接 -->
    <a
        v-if="item['type'] === 'link'"
        v-show="item['show']"
        class="u-menu-link"
        :href="item['src']"
        target="_blank">
      <el-menu-item
          class="link"
          :index="item['uid']"
          v-bind:disabled="item['disabled']"
      >
        <template slot="title">
          <i :class="item['icon']"></i>
          {{ item['label'] }}
        </template>
      </el-menu-item>
    </a>
    <!-- 标签页 -->
    <el-menu-item
        class="node"
        v-if="item['type']=== 'node'"
        v-show="item['show']"
        :index="item['uid']"
        v-bind:disabled="item['disabled']"
        @click="activateTab(item)"
    >
      <template><i :class="item['icon']"></i>{{ item['label'] }}</template>
    </el-menu-item>
    <el-submenu
        class="group"
        v-if="item['type']=== 'group'"
        :index="item['uid']"
        v-bind:disabled="item['disabled']"
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
import {mapMutations, mapState} from 'vuex';
import UMenuItem from "./UMenuItem";
const equal = require('deep-equal');

export default {
  name: "UMenuItem",
  data() {
    return {}
  },
  props: ['item'],
  computed: mapState('index', ['selectedIndex']),
  created() {
  },
  components: {
    UMenuItem,
  },
  methods: {
    ...mapMutations('index', [
      'inverseLoaded',
      'setSelectedIndex',
    ]),
    activateTab(index) {
      console.log(index);
      if(!equal(index, this.setSelectedIndex)){
        this.setSelectedIndex(index);
      }
    },
    activateLink() {
      this.$router.push(this.selectedIndex)
    },
  }

}
</script>

<style>
.u-menu-item {
  color: #FFFFFF;
}
.u-menu-item .el-breadcrumb__separator{
  color: #30475e;
  font-weight: bold;
}
.u-menu-item a.u-menu-link{
  color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link:link{
  color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link:visited {
  color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link.is-active:visited {
  color: #30475e;
  text-decoration:none;
}
.u-menu-item a.u-menu-link:hover {
  color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link:active {
  color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link li.el-menu-item.link {
color: #FFFFFF;
text-decoration:none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: auto;
}
.u-menu-item a.u-menu-link li.el-menu-item.link.is-active {
  color: #30475e;
  background-color: #FFFFFF;
  text-decoration:none;
}
.u-menu-item a.u-menu-link li.el-menu-item.link i {
  color: #FFFFFF;
}
.u-menu-item a.u-menu-link li.el-menu-item.link.is-active i {
  color: #30475e;
  background-color: #FFFFFF;
}
.u-menu-item .group.el-submenu .el-submenu__title {
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding: 0 60px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: auto;
}
.u-menu-item .group.el-submenu .el-submenu__title i{
  color: white;
}
.u-menu-item li.node {
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: auto;
}
.u-menu-item li.node.is-active {
  color: #30475e;
  background-color: #FFFFFF;
}
.u-menu-item li.node i {
  color: #FFFFFF;
}
.u-menu-item li.node.is-active i {
  color: #30475e;
}
</style>
