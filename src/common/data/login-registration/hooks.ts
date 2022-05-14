import { UserDto, UserRegistration } from '../types/types';
import { createNewUser } from './request';

export const handleCreateNewUser = (event: UserRegistration) => {
  createNewUser(event);
};

export const fetchUser = (data: UserDto) => {};
