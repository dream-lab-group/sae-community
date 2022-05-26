import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://www.whatthebre.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const baseApi = 'https://www.whatthebre.com/';
