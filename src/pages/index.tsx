import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import HomePage from './home';
import Session from './session';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (session && status === 'authenticated') {
    return (
      <>
        <HomePage />
      </>
    );
  }
  return (
    <>
      <Session />
    </>
  );
};

export default Home;
