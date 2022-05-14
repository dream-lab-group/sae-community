import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { LoginRegistration } from './api/auth/login-registration/login-registraion';
import Home from './home/home';

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  return <>{status === 'unauthenticated' ? <LoginRegistration /> : <Home />}</>;
};

export default Index;
