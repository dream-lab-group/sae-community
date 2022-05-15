import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const HomePage: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1>this is the homepage</h1>
    </>
  );
};

export default HomePage;
