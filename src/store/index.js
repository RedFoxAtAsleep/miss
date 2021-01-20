import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Custom catalog option
function indexComplete(indexTree){
  const catalogOptionMeta = {
    type: {default: '', type: 'string',},
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
  };
  let indexStack = [];
  let indices = {};
  let menus = {};
  let route2index = {};
  let indexWalker = function (indexTree, indexStack, indices, menus, route2index, catalogOptionMeta){
    for (let subTree of indexTree) {

      indexStack.push(subTree['name']);
      subTree['path'] = Object.assign([], indexStack);
      subTree['uid'] = indexStack.join('-');

      for (let option of Object.getOwnPropertyNames(catalogOptionMeta)) {
        if (!(option in subTree)) {
          subTree[option] = catalogOptionMeta[option]['default']
        }
      }

      subTree['icon'] = 'el-icon-s-promotion'
      if (subTree['type'] === 'link') {
        subTree['icon'] = 'el-icon-link'
      }
      if (subTree['children'].length > 0) {
        subTree['icon'] = 'el-icon-menu'
      }

      if ('route' in subTree) {
        subTree['route']['uid'] = subTree['uid'];
        route2index[subTree['route']['name']] = subTree['uid']
      }

      if (subTree['children'].length === 0) {
        indices[subTree['uid']] = Object.assign({}, subTree);
      } else {
        menus[subTree['uid']] = Object.assign({}, subTree);
        indexWalker(subTree['children'], indexStack, indices, menus, route2index, catalogOptionMeta);
      }

      indexStack.pop();
    }
  }
  indexWalker(indexTree, indexStack, indices, menus, route2index, catalogOptionMeta);
  return [indexTree, indices, menus, route2index]
}


// Auto complete default option value
function indexWalker(
    indexTree,
    indexStack,
    indices,
    menus,
    route2index,
    optionMeta) {
  for (let subTree of indexTree) {

    indexStack.push(subTree['name']);
    subTree['path'] = Object.assign([], indexStack);
    subTree['uid'] = indexStack.join('-');

    for (let option of Object.getOwnPropertyNames(optionMeta)) {
      if (!(option in subTree)) {
        subTree[option] = optionMeta[option]['default']
      }
    }

    if (subTree['type'] === 'link') {
      subTree['icon'] = 'el-icon-link'
    } else if (subTree['children'].length > 0) {
      subTree['icon'] = 'el-icon-menu'
    } else {
      subTree['icon'] = 'el-icon-s-promotion'
    }

    if ('route' in subTree) {
      subTree['route']['uid'] = subTree['uid'];
      route2index[subTree['route']['name']] = subTree['uid']
    }

    if (subTree['children'].length === 0) {
      indices[subTree['uid']] = Object.assign({}, subTree);
    } else {
      menus[subTree['uid']] = Object.assign({}, subTree);
      indexWalker(subTree['children'], indexStack, indices, menus, route2index, optionMeta);
    }

    indexStack.pop();
  }
  return [indexTree, indices, menus, route2index]
}





export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
