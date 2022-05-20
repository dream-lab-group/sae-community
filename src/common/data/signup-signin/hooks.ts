import { UserLogin, UserRegistration } from '../../types/types';

import { createNewUser, loginUser } from './request';

export const handleCreateNewUser = async (data: UserRegistration) => {
  const createNewUserStatus = await createNewUser(data);
  return { createNewUserStatus };
};

export const handleLoginUser = async (data: UserLogin) => {
  const loginUserStatus = await loginUser(data);
  return { loginUserStatus };
};
