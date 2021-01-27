import api from '@/api/index.js'
// export const someAction = (context, payload) => {}
// export const someAction = ({ commit, state, dispatch }) => {}

export const requestIndexTree = async function(context) {
    let data = [];
    let response = {};
    try{
        response = await api.readIndexTree();
        data = response['data'];
    }
    catch(err){
        console.exception(err)
    }
    finally {
        context.commit('setIndexTree', data);
    }

}

