import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://146.190.227.58/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const baseApi = 'http://146.190.227.58/';
