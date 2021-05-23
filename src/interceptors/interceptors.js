import axios from 'axios';
import { environment } from '../environment/index';
//create axios instance
let http = axios.create();
//dev api
let BASE_URL = 'https://partners-dev.exactcure.com/api';
let AUTH_TOKEN = "woFpqF7HVJZwWPbc1XiNkcEh0J6rHd5Pid0b9WGr";

switch (environment.env) {
  case 'dev':
    BASE_URL = 'https://partners-dev.exactcure.com/api';
    AUTH_TOKEN = "woFpqF7HVJZwWPbc1XiNkcEh0J6rHd5Pid0b9WGr";
    break;

  case 'stg':
    BASE_URL = 'https://partners-dev.exactcure.com/api';
    AUTH_TOKEN = "woFpqF7HVJZwWPbc1XiNkcEh0J6rHd5Pid0b9WGr";
    break;

  case 'prod':
    BASE_URL = 'https://partners-plive.exactcure.com/api';
    AUTH_TOKEN = 'hWObUqjGoVAGpV1kqtzntjdGBhy1w77EEyHYWYPw'
    break;
}



http.defaults.baseURL = BASE_URL;
axios.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ` + AUTH_TOKEN;
  config.headers['Content-Type'] = 'application/json';
  return config;
}, error => {
  Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return Promise.resolve(response);
}, (error) => {
  return Promise.reject(error);
});

export const createHttpClient = (url, method, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: BASE_URL + url,
      data: JSON.stringify(data)
    }).then(response => {
      if (response.status === 200 || response.status === 201) {
        resolve(response);
      } else {
        reject('Response is not success');
      }
    }).catch(error => {
      reject(error);
    });
  });
};


export const HTTP = createHttpClient;
