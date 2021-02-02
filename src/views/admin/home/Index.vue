<template>
  <div class="admin-home">
    <div class="left">
      <u-menu></u-menu>
    </div>
    <div class="right">
      <div>
        <u-tabs></u-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex";
import UMenu from "@/views/admin/home/UMenu";
import UTabs from "@/views/admin/home/UTabs";
import api from "@/api/index.js";

const equal = require('deep-equal');

// 从数据库读数据到内存
// 从内存区域A读数据到内存区域B
// 一般数据的状态是不再同步的
// 这个是一个坑
// 另一个坑是，如果监听的是对象，对象属性变也会被监测到

export default {
  name: "index",
  data() {
    return {}
  },
  computed: {
    ...mapState('index', [
      'selectedIndex',
      'indexTreeComplete',
      'indices',
      'route2index',
    ]),
    ...mapGetters('index', [
      'loadedIndices',
      'labels'
    ]),
    selected: function () {
      if (this.selectedIndex === undefined) {
        return undefined
      }
      return this.selectedIndex['uid']
    },
    indexTree: {
      get: function () {
        return this.$store.state["index/indexTree"]
      },
      set: function (indexTree) {
        this.setIndexTree(indexTree);
        let indexTreeComplete = this.completeTree(indexTree);
        this.setIndexTreeComplete(indexTreeComplete);
        let {indices, route2index} = this.parseIndexTree(indexTreeComplete);  // let {indices, route2index, indexTreeComplete} = indexInfo;
        this.setIndices(indices);
        this.setRoute2Index(route2index);
      }
    },
    // labels: function () {
    //   if(this.selectedIndex === undefined){return []}
    //   const items = this.selectedIndex['path'];
    //   console.log(items);
    //   console.log(this.indices);
    //   let labels = [];
    //   items.forEach(
    //       item => labels.push(
    //           this.indices[item]['label']
    //       )
    //   )
    //   return labels
    // },
  },
  watch: {
    selected: function (new_, old) {
      console.log('selected', new_, old);
      if (equal(new_, old)) {
        return
      }
      if (new_ === undefined) {
        this.$router.push({name: 'Admin_Home'})
            .then(r => {
              console.log(r)
            })
            .catch(err => {
              console.log(err)
            });
        return
      }
      if (this.indices[new_]['loaded'] === false) {
        this.inverseLoaded(new_);
      }
      this.$router.push(this.indices[new_]['route'])
      // .then(r => {console.log(r)})
      // .catch(err => {console.log(err)});
    },
  },
  methods: {
    ...mapMutations('index', [
      'inverseLoaded',
      'setSelectedIndex',
      'setIndexTree',
      'setIndexTreeComplete',
      'setRoute2Index',
      'setIndices'
    ]),
    completeTree: function (indexTree) {
      const catalogOptionMeta = {
        type: {default: 'node', type: 'string',},  // node link group
        singleton: {default: true, type: 'boolean',},
        weight: {default: 0, type: 'integer',},
        show: {default: true, type: 'boolean',},
        roles: {default: [], type: 'list',},
        cache: {default: true, type: 'boolean',},
        loaded: {default: false, type: 'boolean',},
        disabled: {default: false, type: 'boolean',},
        children: {default: [], type: 'list',},
        src: {default: '', type: 'string',},
        icon: {default: '', type: 'string',},
        uid: {default: '', type: 'string',},
        path: {default: '', type: 'string',},
        route: {default: {'name': '', 'params': {}}, type: 'object',},
      };
      let indexStack = [];
      let indexTreeComplete = Object.assign([], indexTree);
      const completeWalker = function (indexTree, indexStack, catalogOptionMeta) {
        for (let subTree of indexTree) {

          for (let option of Object.getOwnPropertyNames(catalogOptionMeta)) {
            if (!(option in subTree)) {
              subTree[option] = catalogOptionMeta[option]['default']
            }
          }
          indexStack.push(subTree['name']);
          subTree['path'] = Object.assign([], indexStack);
          subTree['uid'] = indexStack.join('-');
          subTree['route']['uid'] = subTree['uid'];

          subTree['icon'] = 'el-icon-s-promotion'
          if (subTree['type'] === 'link' || subTree['src'] !== '') {
            subTree['type'] = 'link';
            subTree['icon'] = 'el-icon-link';
          }
          if (subTree['children'].length > 0) {
            subTree['type'] = 'group';
            subTree['icon'] = 'el-icon-menu'
          }

          if(subTree['type'] === 'link' && subTree['src'] === ''){
            subTree['disabled'] = true;
          }
          if(subTree['type'] === 'node' && subTree['route']['name'] === ''){
            subTree['disabled'] = true;
          }

          if (subTree['type'] === 'group') {
            completeWalker(subTree['children'], indexStack, catalogOptionMeta);
          }

          indexStack.pop();
        }
      }
      completeWalker(indexTreeComplete, indexStack, catalogOptionMeta)
      return indexTreeComplete
    },
    parseIndexTree: function (indexTreeComplete) {
      const catalogOptionMeta = {
        type: {default: 'node', type: 'string',},  // node link group
        singleton: {default: true, type: 'boolean',},
        weight: {default: 0, type: 'integer',},
        show: {default: true, type: 'boolean',},
        roles: {default: [], type: 'list',},
        cache: {default: true, type: 'boolean',},
        loaded: {default: false, type: 'boolean',},
        children: {default: [], type: 'list',},
        src: {default: '', type: 'string',},
        icon: {default: '', type: 'string',},
        uid: {default: '', type: 'string',},
        path: {default: '', type: 'string',},
        route: {default: {'name': '', 'params': {}}, type: 'object',},
      };
      const indexWalker = function (indexTree, indexStack, indices, route2index, catalogOptionMeta) {
        for (let subTree of indexTree) {

          indexStack.push(subTree['name']);

          if (subTree['route']['name'] !== '') {
            route2index[subTree['route']['name']] = subTree['uid']
          }

          indices[subTree['uid']] = Object.assign({}, subTree);
          if (subTree['type'] === 'group') {
            indexWalker(subTree['children'], indexStack, indices, route2index, catalogOptionMeta);
          }
          indexStack.pop();
        }
      }
      let indexStack = [];
      let indices = {};
      let route2index = {};
      indexWalker(indexTreeComplete, indexStack, indices, route2index, catalogOptionMeta);

      return {
        'indices': indices,
        'route2index': route2index,
      }
    },
  },
  // created(){},
  async created() {
  },
  mounted() {
  },
  // 首次访问浏览器输入的URL
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('beforeRouteEnter', to, from);
    next(async function (vm) {
      // 通过 `vm` 访问组件实例
      vm.indexTree = await api.index.axios.get('indexTree', '/indexTree/0/');
      if (to === undefined) {
        return
      }
      let uid = vm.route2index[to['name']];
      let loadedIndices = Object.assign([], vm.loadedIndices);
      let r = loadedIndices.filter(item => {
        return item['uid'] === uid
      });
      if (r.length === 0) {
        vm.inverseLoaded(uid);
        vm.setSelectedIndex(vm.indices[uid]);
      } else {
        vm.setSelectedIndex(r[0]);
      }
    })
  },
  // 改变前端路由（"#"后面的路由）
  // 一般是该"数"后，伴随动作包括变化路由
  // 但是总是存在，直接变化路由的情况
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', to, from)
    let nowIndex = this.selected;
    let targetIndex = this.route2index[to['name']];

    if (nowIndex === targetIndex) {
      // 先selectIndex变（通过selected监测到）
      // 后router也要变（selected变化的伴随动作）
      next()
    } else {
      // 先router变（通过浏览器搜索栏直接改前端路由）
      // 没有改变selectIndex，但selectIndex也要随之变
      this.setSelectedIndex(this.indices[targetIndex]);
    }

  },
  RouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', to, from)
    next();
  },
  components: {
    UMenu,
    UTabs
  }

}
</script>

<style>

div.admin-home {
  display: grid;
  grid-template-columns: auto 1fr;
  /* fr fregment */
  /* grid-template-columns: auto 1fr; */


}

div.admin-home div.left {
  height: 100vh;
  overflow-x: auto;
  overflow-y: auto;
  background-color:  #30475e;
}

div.admin-home div.right {
  height: 100vh;
  overflow-x: auto;
  overflow-y: auto;
  padding: 0 5px 0 5px;
}

</style>

