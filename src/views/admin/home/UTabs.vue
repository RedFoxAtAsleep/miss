<template>
  <div class="u-tabs">
    <el-tabs
        v-model="selected"
        type="card"
        closable
        @tab-remove="removeTab">
      <el-breadcrumb
          separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
            v-for="label in this.labels"
            :key="label"
        >
          {{ label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-tab-pane
          v-for="item in this.loadedIndices"
          :key="item['uid']"
          :label="item['label']"
          :name="item['uid']"
          :closable="item['closable']">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from "vuex";

export default {
  name: "UTabs",
  data() {
    return {
      'selected': undefined
    }
  },
  computed: {
    ...mapState('index', ['indices', 'selectedIndex']),
    ...mapGetters('index', ['loadedIndices', 'labels']),
    availHeight: function () {
      return window.screen.availHeight;
    },
    availWidth: function () {
      return window.screen.availWidth;
    },
  },
  watch:{
    selectedIndex: function(new_){
      this.selected = new_?new_['uid']:new_;
    },
    selected: function (new_){
      this.setSelectedIndex(new_?this.indices[new_]:new_)
    }
  },
  methods: {
    ...mapMutations('index', [
      'setSelectedIndex',
      'inverseLoaded']),
    removeTab(target) {
      console.log('remove', target);
      // 缓存还是实时？！
      let lastLoadedIndices = Object.assign([], this.loadedIndices);  // 缓存
      this.inverseLoaded(target);
      if (this.selected === target) {
        for (let i=0;i<lastLoadedIndices.length;i++) {
          let obj = lastLoadedIndices[i];
          if (this.selected === obj['uid']) {
            let nextObj = lastLoadedIndices[i + 1] || lastLoadedIndices[i - 1];
            this.setSelectedIndex(nextObj?this.indices[nextObj['uid']]:nextObj); // 实时
            break;
          }
        }
      }

    },
  }
}
</script>

<style>
.u-tabs {
}

.u-tabs .el-tabs--card {
}

.u-tabs .el-breadcrumb .el-breadcrumb__item {

}

.u-tabs .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {
}

.u-tabs .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {
  background-color: rgba(48,71,94, 0.1);
  color: rgba(48,71,94, 1);
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 900;
  padding: 5px 10px;
}

.u-tabs .el-tabs--card .el-tabs__header {
  border: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  border-image-width: 0;
  height: 40px;
  line-height: 40px;
}

.u-tabs .el-tabs--card .el-tabs__header .el-tabs__nav-wrap {

}

/*标签横道*/
.u-tabs .el-tabs--card .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll {
}

/*所有标签*/
.u-tabs .el-tabs--card .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav {
  /*覆盖*/
  border-left: 0;
  border-top: 0;
  border-right: 0;
  /*自定义*/
}

/*单标签*/
.u-tabs .el-tabs--card .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item {
  /*覆盖*/
  border-left: 0;
  border-bottom: 0;
  /*自定义*/
  border-right: 5px solid #FFFFFF;
  background-color: rgba(48,71,94, 1);
  color: #FFFFFF;
  font-size: 20px;

}

.u-tabs .el-tabs--card .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .is-active {
  background-color: rgba(240,84,84,1);
  color: #FFFFFF;
  font-size: 20px;
}

.u-tabs .el-tabs--card .el-tabs__content {
  margin: 0;
  border: 0;
}

</style>
