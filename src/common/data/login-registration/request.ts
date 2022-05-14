import { apiClient } from '../apiClient';
import { UserRegistration } from '../types/types';

export const createNewUser = async ({
  first_name,
  last_name,
  email,
  password,
  course,
}: UserRegistration) => {
  const response = await apiClient.post('users', {
    first_name,
    last_name,
    email,
    password,
    course,
    role: 'fe1b06f1-634c-4630-bd05-9ed1fc660ee7',
  });
  return response.data;
};
