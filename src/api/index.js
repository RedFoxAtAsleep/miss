import indexAPI from './index/index.js'
import staticAPI from './index/index.js'

export const indexAxiosGet = async function (name, urlPath='', params={}, config={}) {
    let axiosResponse = await indexAPI.axiosGet(name, urlPath, params, config)
    return axiosResponse['data'];
}

export const staticAxiosGet = async function (name, urlPath='', params={}, config={}) {
    let axiosResponse = await indexAPI.axiosGet(name, urlPath, params, config)
    return axiosResponse['data'];
}

export const obj2rows = function(obj, col_k='colKey', col_v='colValue') {
    let rows = [];
    for (let k in Object.getOwnPropertyNames(obj)) {
        let tmp = {}
        tmp[col_k] = k;
        tmp[col_v] = obj[k]
        rows.push(tmp)
    }
    return rows
}

export default {
    index: {
        'axios': {
            'get': indexAxiosGet
        },
    },
    static:{
        'axios': {
            'get': staticAxiosGet
        }
    },
    util: {
        obj2rows
    }
}
