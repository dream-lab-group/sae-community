import { PasswordResetProps, UserRegistration } from '../../types/types';

import { createNewUser, resetPasswordRequest } from './request';

export const handleCreateNewUser = async (data: UserRegistration) => {
  const createNewUserStatus = await createNewUser(data);
  return { createNewUserStatus };
};

export const handleResetPassword = async (data: PasswordResetProps) => {
  const resetPasswordStatus = await resetPasswordRequest(data);
};
