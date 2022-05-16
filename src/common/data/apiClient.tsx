import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://146.190.227.58/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});
