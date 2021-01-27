import {base_url_mock} from "./config";
const Mock = require('mockjs');
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

const urls = {
    readIndexTree: /\/indexTree\/\w*\/.*/,
}
const readIndexTree = options => {
    console.log('options', options);
    return [
        {
            name: 'A',
            label: 'A:MENU',
            children: [
                {
                    name: 'AA',
                    label: 'AA:NODE',
                    loaded: true,
                    route: {
                        'name': 'About'
                    },
                },
                {
                    name: 'AB',
                    label: 'AB:NODE',
                    route: {
                        'name': 'About',
                        'params': {}
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
                                'name': 'About',
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
                                        'name': 'About',
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
                    loaded: true,
                    route: {
                        'name': 'About'
                    },
                },
                {
                    name: 'BB',
                    label: 'BB:NODE',
                    route: {
                        'name': 'About',
                        'params': {}
                    },
                },
                {
                    name: 'BC',
                    label: 'BC:MENU',
                    children: [
                        {
                            name: 'BCA',
                            label: 'BCA:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCB',
                            label: 'BCB:MENU',
                            children: [
                                {
                                    name: 'BCBA',
                                    label: 'BCBA:NODE',
                                    route: {
                                        'name': 'About',
                                        'params': {}
                                    }
                                },
                                {
                                    name: 'BCBB',
                                    label: 'BCBB:NODE',
                                    route: {
                                        'name': 'About',
                                        'params': {}
                                    }
                                },
                            ],
                        },
                        {
                            name: 'BCC',
                            label: 'BCC:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCD',
                            label: 'BCD:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCE',
                            label: 'BCE:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCF',
                            label: 'BCF:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCG',
                            label: 'BCG:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCH',
                            label: 'BCH:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCI',
                            label: 'BCI:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCJ',
                            label: 'BCJ:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCK',
                            label: 'BCK:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCL',
                            label: 'BCL:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCM',
                            label: 'BCM:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                        {
                            name: 'BCN',
                            label: 'BCN:NODE',
                            route: {
                                'name': 'About',
                                'params': {}
                            },
                        },
                    ]
                }]
        },
    ]
};
Mock.mock(urls.readIndexTree, 'get', readIndexTree);


