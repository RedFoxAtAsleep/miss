import axios from 'axios'
import * as options from "./config";

let reqMock = axios.create({
    baseURL: options['base_url_mock']
});

let reqProduction = axios.create({
    baseURL: options['base_url_production']
});

let reqDevelopment = axios.create({
    baseURL: options['base_url_development']
});

export default {
    'mock': reqMock,
    'production': reqProduction,
    'development': reqDevelopment
};
