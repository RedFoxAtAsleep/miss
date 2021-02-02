import requests from "./axios";
import qs from 'qs'

export const namedUrlPath = {
    'indexTree': {
        'status': 'mock',
        'example': '/indexTree/0/',
    },
}

export const axiosGet = function (name='', urlPath='',params={}, config={}){
    let status = namedUrlPath[name]['status'];
    let request = requests[status]
    // { data: {}, status: 200, statusText: 'OK', headers: {}, config: {}, request: {}}
    return request.get(`${urlPath}?${qs.stringify(params)}`, config);
}

export default {
    axiosGet
}


