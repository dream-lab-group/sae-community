import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import Session from './session';
import HomePage from './home';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);
  if (user) {
    return (
      <>
        <HomePage />
        <a href="/api/auth/logout">Logout</a>
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
