import requests from "./axios";
import qs from 'qs'

export const apis = {
    'readIndexTree': {
        'status': 'mock',
        'api': '/indexTree/0/'
    },
}

export const readIndexTree = function (params={}, config={}){
    let status = apis['readIndexTree']['status'];
    let request = requests[status]
    let api = apis['readIndexTree']['api'];
    // { data: {}, status: 200, statusText: 'OK', headers: {}, config: {}, request: {}}
    let response = request.get(`${api}?${qs.stringify(params)}`, config);
    return response
}


