import axios from 'axios';
import { getToken } from './localStorage';

export const prefix = import.meta.env.VITE_API_PREFIX || 'api';

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_PATH,
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

export default service;
