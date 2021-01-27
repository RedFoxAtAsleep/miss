<template>
  <div class="admin">
    <div class="index">
      <div class="container">
        <div class="header">header</div>
        <div class="body">
          <div class="left"><router-view name="left_navigation"></router-view></div>
          <div class="right"><router-view name="right_window"></router-view></div>
        </div>
        <div class="footer">footer</div>
      </div>
    </div>
  </div>
</template>

<script>

function parseIndexTree(index) {
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
  let indexNodes = {};
  let indexGroups = {};
  let route2node = {};
  let indexWalker = function (index, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta) {
    for (let subTree of index) {

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
        route2node[subTree['route']['name']] = subTree['uid']
      }

      if (subTree['children'].length === 0) {
        indexNodes[subTree['uid']] = Object.assign({}, subTree);
      } else {
        indexGroups[subTree['uid']] = Object.assign({}, subTree);
        indexWalker(subTree['children'], indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);
      }

      indexStack.pop();
    }
  }
  indexWalker(index, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);
  return [index, indexNodes, indexGroups, route2node]
}
let indexNodes;
let indexGroups;
let route2node;
let index = [
  {
    name: 'A',
    label: 'A:MENU',
    children: [
      {
        name: 'AA',
        label: 'AA:NODE',
        loaded: true,
        route: {
          'name': 'About'
        },
      },
      {
        name: 'AB',
        label: 'AB:MENU',
        route: {
          'name': 'About',
          'params': {}
        },
      },
      {
        name: 'AC',
        label: 'AC:MENU',
        children: [
          {
            name: 'ACA',
            label: 'ACA:NODE',
            route: {
              'name': 'About',
              'params': {}
            },
          },
          {
            name: 'ACB',
            label: 'ACB:MENU',
            children: [
              {
                name: 'ACBA',
                label: 'ACBA:NODE',
                route: {
                  'name': 'About',
                  'params': {}
                }
              },
            ],
          }
        ]
      }]
  }
];
[index, indexNodes, indexGroups, route2node] = parseIndexTree(index)

export default {
  name: "index",
  methods: {
    getIndexTree(){
    },
    parseIndexTree(index) {
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
      let indexNodes = {};
      let indexGroups = {};
      let route2node = {};
      let indexWalker = function (index, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta) {
        for (let subTree of index) {

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
            route2node[subTree['route']['name']] = subTree['uid']
          }

          if (subTree['children'].length === 0) {
            indexNodes[subTree['uid']] = Object.assign({}, subTree);
          } else {
            indexGroups[subTree['uid']] = Object.assign({}, subTree);
            indexWalker(subTree['children'], indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);
          }

          indexStack.pop();
        }
      }
      indexWalker(index, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);
      return [index, indexNodes, indexGroups, route2node]
    }
  },

}
</script>

<style>
div.admin {}
div.admin div.index {}
div.admin div.index div.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
}

div.admin div.index div.container div.header {
  background: white;
}

div.admin div.index div.container div.footer {
  background: white;
}

div.admin div.index div.container div.body {
  background: white;
  display: grid;
  grid-template-columns: 2fr 8fr;  /* fregment */
}
div.admin div.index div.container div.body div.left {

}
div.admin div.index div.container div.body div.right {

}
</style>
