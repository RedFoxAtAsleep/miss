const module = {
    namespaced: true,
    state: () => ({
        count: 0,
        history: []
    }),
    mutations: {
        increment: state => {
            state.count++
            state.history.push('increment')
        },
        decrement: state => {
            state.count--
            state.history.push('decrement')
        },
    },
    getters: {
        evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
        recentHistory: state => {
            return state.history
                .slice(-5)
                .reverse()
                // .join(', ')
        },
        // Unnamed Module Getters
        // someGetter(state, getters, rootState) {},
        // Named Module Getters
        // someGetter (state, getters, rootState, rootGetters) {
        //     getters.someOtherGetter // -> 'foo/someOtherGetter'
        //     rootGetters.someOtherGetter // -> 'someOtherGetter'
        // },
        // someOtherGetter: state => {},
    },
    actions: {
        incrementIfOdd: ({ commit, state }) => {
            if ((state.count + 1) % 2 === 0) {
                commit('increment')
            }
        },
        incrementAsync: ({ commit }) => {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        // Unnamed Module Actions
        // someActions({ state, commit, rootState }) {},
        // Named Module Actions
        // someAction: ({ dispatch, commit, getters, rootGetters }) => {
        //     dispatch('someOtherAction') // -> 'count/someOtherAction'
        //     dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
        //
        //     commit('someMutation') // -> 'count/someMutation'
        //     commit('someMutation', null, { root: true }) // -> 'someMutation'
        // },
        // someOtherAction: (context, payload) => {},
    },
}

export default module
