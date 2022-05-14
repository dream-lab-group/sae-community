import { useEffect, useState } from 'react';
import { RequestResult } from '../fetch/restuls';
import { UserDto, UserLogin, UserRegistration } from '../types/types';
import { createNewUser, getUserInformation, loginUser } from './request';

export const handleCreateNewUser = (event: UserRegistration) => {
  createNewUser(event);
};

export const handleLoginUser = (event: UserLogin) => {
  loginUser(event);
};

export function fetchUser(): [
  RequestResult<UserDto>,
  React.Dispatch<RequestResult<UserDto>>,
] {
  const [user, setUser] = useState<RequestResult<UserDto>>({
    status: 'initial',
  });

  useEffect(() => {
    async function getUserProfile() {
      if (user.status === 'initial' || user.status === 'error') {
        const result = await getUserInformation();
        if (result.status === 'success') {
          console.log('successfull');
        } else if (result.status === 'error') {
          console.log('bad bad');
        }
        setUser(result);
      }
    }
    getUserProfile();
  }, [user.status]);
  return [user, setUser];
}
