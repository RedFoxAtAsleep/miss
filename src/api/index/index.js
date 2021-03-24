import requests from "./axios";
import qs from 'qs'
// import './mock.js'

export const namedAPI = {
    'indexTree': {
        'status': 'mock',
        'regularExpression': /^\/indexTree\/\w*\/.*$/,
        'example': '/indexTree/0/',
        'mockFunction': function (){
            return [
                {
                    name: 'A',
                    label: 'A:MENU',
                    children: [
                        {
                            name: 'AA',
                            label: 'AA:NODE',
                            loaded: false,
                            route: {
                                'name': 'Admin_Home_About'
                            },
                        },
                        {
                            name: 'AB',
                            label: 'AB:NODE',
                            loaded: false,
                            route: {
                                'name': 'Admin_Home_Cesium'
                            },
                        },
                        {
                            name: 'AC',
                            label: 'AC:MENU',
                            children: [
                                {
                                    name: 'ACA',
                                    label: 'ACA:NODE',
                                    route: {
                                        'name': 'Admin_Home_Count',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'ACB',
                                    label: 'ACB:MENU',
                                    children: [
                                        {
                                            name: 'ACBA',
                                            label: 'ACBA:NODE',
                                            route: {
                                                'name': 'Admin_Home_Json',
                                                'params': {}
                                            }
                                        },
                                    ],
                                }
                            ]
                        },
                    ]
                },
                {
                    name: 'B',
                    label: 'B:MENU',
                    children: [
                        {
                            name: 'BA',
                            label: 'BA:NODE',
                            loaded: false,
                            route: {
                                'name': 'Admin_Home_Home'
                            },
                        },
                        {
                            name: 'BB',
                            label: 'BB:LINK',
                            src: 'https://www.baidu.com',
                            type: 'link'
                        },
                        {
                            name: 'BC',
                            label: 'BC:MENU',
                            children: [
                                {
                                    name: 'BCA',
                                    label: 'BCA:LINK',
                                    src: 'https://www.bing.com',
                                    type: 'link'
                                },
                                {
                                    name: 'BCB',
                                    label: 'BCB:MENU',
                                    children: [
                                        {
                                            name: 'BCBA',
                                            label: 'BCBA:LINK',
                                            src: '#/admin/home',
                                            type: 'link'
                                        },
                                        {
                                            name: 'BCBB',
                                            label: 'BCBB:NODE',
                                            route: {
                                                'name': 'Admin_Home_Arcgis',
                                                'params': {}
                                            }
                                        },
                                    ],
                                },
                                {
                                    name: 'BCC',
                                    label: 'BCC:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCD',
                                    label: 'BCD:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCE',
                                    label: 'BCE:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCF',
                                    label: 'BCF:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCG',
                                    label: 'BCG:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCH',
                                    label: 'BCH:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCI',
                                    label: 'BCI:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCJ',
                                    label: 'BCJ:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCK',
                                    label: 'BCK:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCL',
                                    label: 'BCL:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCM',
                                    label: 'BCM:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                                {
                                    name: 'BCN',
                                    label: 'BCN:NODE',
                                    route: {
                                        'name': '',
                                        'params': {}
                                    },
                                },
                            ]
                        }]
                },
                {
                    name: 'C',
                    label: 'C:NODE',
                    route: {
                        'name': 'Admin_Home_Chart',
                        'params': {}
                    },
                },
            ]
        }
    },
}

export const axiosGet = function (name='', urlPath='',params={}, config={}){
    if(!(name in namedAPI)){
        console.log('Unknown API.');
        return
    }
    let status = namedAPI[name]['status'];
    if(status === "mock"){
        let mockFunction = namedAPI[name]['mockFunction'];
        return new Promise(function(resolve, reject) {
            // 因为miss采用axios，所以实际要模拟axios的返回格式
            resolve({
                data: mockFunction(),
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
                request: {}
            });
        });
    }
    let request = requests[status];
    // { data: {}, status: 200, statusText: 'OK', headers: {}, config: {}, request: {}}
    let response = request.get(`${urlPath}?${qs.stringify(params)}`, config);
    console.log('response', response);
    return request.get(`${urlPath}?${qs.stringify(params)}`, config);
}

export default {
    axiosGet
}


