// export const someMutation = (state, payload) => {}

export const setSelectedIndex = (state, payload) => {
    state.selectedIndex = payload;
}

export const setIndexTree = (state, payload) => {
    state.indexTree = payload;
}

export const setIndexTreeComplete = (state, payload) => {
    state.indexTreeComplete = payload;
}

export const setIndices = (state, payload) => {
    state.indices = payload;
}

export const setRoute2Index = (state, payload) => {
    state.route2index = payload;
}

export const inverseLoaded = (state, payload) => {
    if(state.indices.hasOwnProperty(payload) && state.indices[payload].hasOwnProperty('loaded')){
        state.indices[payload]['loaded'] = !state.indices[payload]['loaded'];
    }
}


