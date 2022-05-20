import { UserRegistration } from '../../types/types';

import { createNewUser, loginUser } from './request';

export const handleCreateNewUser = async (data: UserRegistration) => {
  const createNewUserStatus = await createNewUser(data);
  return { createNewUserStatus };
};
