import requests from "./axios";

const apiStatus = {
    'readIndexTree': {
        'status': 'mock',
    },
}

export const readIndexTree = function (api, params, config){
    let status = apiStatus['readIndexTree']['status'];
    let request = requests[status];
    
    request.get(api, config);
}


