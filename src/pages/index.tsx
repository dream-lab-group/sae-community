import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Session from './session';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  if (session && status === 'authenticated') {
    return (
      <>
        <h1>This is the landing page</h1>
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
