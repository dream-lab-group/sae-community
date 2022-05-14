import axios from 'axios';

const apiUrl = process.env.SAE_COMMUNITY_BACKEND;

export const apiClient = axios.create({
  baseURL: `${apiUrl}`,
  headers: { 'Content-type': 'application/json' },
});
