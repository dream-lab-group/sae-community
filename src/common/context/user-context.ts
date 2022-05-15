import React from 'react';
import { RequestResult } from '../data/fetch/restults';
import { UserDto } from '../types/types';

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
