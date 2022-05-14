import React from 'react';
import { RequestResult } from '../data/fetch/restuls';
import { UserDto } from '../data/types/types';

type userContextProps = {
  user: RequestResult<UserDto>;
  setUser: React.Dispatch<RequestResult<UserDto>>;
};

const UserContext = React.createContext<userContextProps>({
  user: { status: 'initial' },
  setUser: () => {
    return;
  },
});

export default UserContext;
