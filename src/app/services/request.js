import axios from 'axios';
import { API_BASE_PATH, API_PREFIX } from 'app/configs/envConfig';
import { getToken } from './localStorage';

// create an axios instance
const service = axios.create({
  baseURL: `${API_BASE_PATH}${typeof API_PREFIX !== 'string' ? '' : '/'}${API_PREFIX || ''}`,
  // baseURL: 'mock',
  timeout: 80000, // request timeout
});

// request interceptor
service.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json';
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

// response interceptor
service.interceptors.response.use((response) => {
  const isBlob =
    response.config && response.config.responseType && response.config.responseType === 'blob';
  if (isBlob) {
    return {
      success: true,
      data: response.data,
    };
  }
  return response.data;
});

export const updateBaseUrl = (baseUrl, currPrefix) => {
  service.defaults.baseURL = `${baseUrl}${typeof currPrefix !== 'string' ? '' : '/'}${
    currPrefix || ''
  }`;
};

export default service;
