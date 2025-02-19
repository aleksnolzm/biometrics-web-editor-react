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
  console.log(`%cbaseUrl: ${baseUrl}\nprefix: ${currPrefix}`, 'background-color: rgb(12, 74, 110); color: white;');
  try {
    const prefixIsValid = typeof currPrefix === 'string' && currPrefix.trim().length > 0;
    service.defaults.baseURL = `${baseUrl}${prefixIsValid ? '/' : ''}${
      prefixIsValid ? currPrefix : ''
    }`;
  } catch (e) {
    console.error('Error updating base url', e);
  }
};

export default service;
