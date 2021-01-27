import axios from 'axios'
import options from "./config";

let reqMock = axios.create({
    baseURL: options['base_url_production']
});

let reqProduction = axios.create({
    baseURL: options['base_url_production']
});

let reqDevelopment = axios.create({
    baseURL: options['base_url_production']
});

export default {
    'mock': reqMock,
    'production': reqProduction,
    'development': reqDevelopment
};
