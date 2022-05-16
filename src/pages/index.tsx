import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import 'react-loading-skeleton/dist/skeleton.css';
import HomePage from './home';
import Login from './signin';

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <HomePage />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      <Login />
    </>
  );
};

export default Home;
