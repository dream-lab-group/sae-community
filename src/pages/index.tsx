import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import UserContext from '../common/context/user-context';
import { fetchUser } from '../common/data/login-registration/hooks';
import Projects from './projects';
import { SignInSignUp } from './signin-signup.tsx/signIn-signUp';

const Home: NextPage = () => {
  const [user, setUser] = fetchUser();
  const [loginContext, setLoginContext] = useState('anmelden');
  const { data: session, status } = useSession();
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {loginContext === 'anmelden' || loginContext === 'konto erstellen' ? (
          <SignInSignUp
            user={user}
            setUser={setUser}
            loginContext={loginContext}
            setLoginContext={setLoginContext}
          />
        ) : loginContext === 'angemeldet' ? (
          <Projects />
        ) : (
          <></>
        )}
      </UserContext.Provider>
    </>
  );
};

export default Home;
