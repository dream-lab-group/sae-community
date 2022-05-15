import { useEffect, useState } from 'react';
import { UserDto, UserRegistration } from '../../types/types';
import { RequestResult } from '../fetch/restults';

import { createNewUser, getInitialUserInformation } from './request';

export const handleCreateNewUser = (event: UserRegistration) => {
  createNewUser(event);
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
        const result = await getInitialUserInformation();
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
