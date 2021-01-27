import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import count from './modules/count.js'
import index from './modules/index/index.js'

Vue.use(Vuex)

// Custom catalog option
export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
        count,
        index
    },
})

// this.$store.state  // state
// this.$store.getters.  //
// this.$store.commit('xxx', payload)  // mutation
// this.$store.dispatch('xxx', payload)  // action
// context = {state, getters, commit, dispatch}
