import { apiClient } from '../apiClient';

export const getProjects = async () => {
  const response = await apiClient.get('items/projects');

  return response.data.data;
};
