import { apiClient } from '../apiClient';
import { UserRegistration } from '../types/types';

export const createNewUser = async ({
  firstname,
  lastname,
  email,
  password,
  course,
}: UserRegistration) => {
  const response = await apiClient.post(`items/${course}`, {
    firstname,
    lastname,
    email,
    password,
    course,
  });
  return response.data;
};
