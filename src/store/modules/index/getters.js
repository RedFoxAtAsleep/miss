// export const someGetter = state => state.someStateKey
// export const someGetter = ({someStateKey, otherStateKey, anotherStateKey}) => {}
// export const someGetter = (state, getter) => {}
// export const someGetter = (state) => (x, y, z) => {}

export const loadedIndices = (state) => {
    let objs = [];
    let indices = state.indices;
    for (let uid of Object.keys(indices)) {
        if (indices[uid]['loaded'] === true) {
            objs.push(indices[uid]);
        }
    }
    // 新增或减少tab是会重新计算需要加载的tab
    // 但是tmp的顺序并非是tab的先后顺序，而是Object.keys中的顺序
    // init 场景 loadedIndices 从无到有

    // activate 场景 loadedIndices 变多 交给activate动作select
    // remove 场景 loadedIndices 变少 交给remove动作select
    // select 场景 loadedIndices 不变
    return objs
}

export const labels = (state) =>  {
    if(state.selectedIndex === undefined){return []}
    const items = state.selectedIndex['path'].filter((item)=>{return typeof item === 'string'});
    console.log(items);
    let labels = [];
    for(let i=1;i<=items.length;i++){
        let uid = items.slice(0,i).join('-');
        labels.push(state.indices[uid]['label'])
    }
    return labels
}

