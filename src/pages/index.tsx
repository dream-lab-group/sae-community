import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { LoginRegistration } from './api/auth/login-registration/login-registraion';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <LoginRegistration />
    </>
  );
};

export default Home;
