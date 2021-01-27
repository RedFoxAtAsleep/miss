import { apis } from './api'
import {base_url_mock} from "./config";
const Mock = require('mockjs');
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档

const getIndexTree = req => {
    let indexTree = [
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
                    label: 'AB:MENU',
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
        }
    ];
    return indexTree
};

const urls = Object.assign({}, apis)
urls.forEach(element => {
    urls[element] = `${base_url_mock}/${element}`
})

Mock.mock(urls['getIndexTree'], 'get', getIndexTree());


