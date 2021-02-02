import {base_url_mock} from "./config";
const Mock = require('mockjs');
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

const urls = {
    getIndexTree: /\/indexTree\/\w*\/.*/,
}
const getIndexTree = options => {
    console.log('options', options);
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
                }]
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
                    label: 'BB:NODE',
                    src: 'https://www.baidu.com',
                    type: 'link'
                },
                {
                    name: 'BC',
                    label: 'BC:MENU',
                    children: [
                        {
                            name: 'BCA',
                            label: 'BCA:NODE',
                            src: 'https://www.bing.com',
                            type: 'link'
                        },
                        {
                            name: 'BCB',
                            label: 'BCB:MENU',
                            children: [
                                {
                                    name: 'BCBA',
                                    label: 'BCBA:NODE',
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
};
Mock.mock(urls.indexTree, 'get', getIndexTree);


