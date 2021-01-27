// export const someGetter = state => state.someStateKey
// export const someGetter = ({someStateKey, otherStateKey, anotherStateKey}) => {}
// export const someGetter = (state, getter) => {}
// export const someGetter = (state) => (x, y, z) => {}

export const indexInfo = function({indexTree}){
    function parseIndexTree(indexTree) {
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
        };
        const indexWalker = function (indexTree, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta) {
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
                    route2node[subTree['route']['name']] = subTree['uid']
                }

                if (subTree['children'].length === 0) {
                    indexNodes[subTree['uid']] = Object.assign({}, subTree);
                } else {
                    subTree['type'] = 'group';
                    indexGroups[subTree['uid']] = Object.assign({}, subTree);
                    indexWalker(subTree['children'], indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);
                }

                indexStack.pop();
            }
        }

        let indexStack = [];
        let indexNodes = {};
        let indexGroups = {};
        let route2node = {};
        let indexTreeComplete = Object.assign([], indexTree)
        indexWalker(indexTreeComplete, indexStack, indexNodes, indexGroups, route2node, catalogOptionMeta);

        return {
            'indexTreeComplete': indexTreeComplete,
            'indexNodes': indexNodes,
            'indexGroups': indexGroups,
            'route2node': route2node
        }
        // return [indexTreeComplete, indexNodes, indexGroups, route2node]
    }
    return parseIndexTree(indexTree)
};
