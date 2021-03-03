import axios from 'axios'
import * as options from "./config";

let reqProduction = axios.create({
    baseURL: options['base_url_production']
});

let reqDevelopment = axios.create({
    baseURL: options['base_url_development']
});

export default {
    'production': reqProduction,
    'development': reqDevelopment
};
