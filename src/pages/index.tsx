import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import UserContext from '../common/context/user-context';
import { RequestResult } from '../common/data/fetch/restuls';
import { fetchUser } from '../common/data/login-registration/hooks';
import { UserDto } from '../common/data/types/types';
import { LoginRegistration } from './api/auth/login-registration/login-registraion';

const Home: NextPage = () => {
  const [user, setUser] = fetchUser();
  const [loginContext, setLoginContext] = useState('anmelden');
  const { data: session, status } = useSession();
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <LoginRegistration
          user={user}
          setUser={setUser}
          loginContext={loginContext}
          setLoginContext={setLoginContext}
        />
      </UserContext.Provider>
    </>
  );
};

export default Home;
