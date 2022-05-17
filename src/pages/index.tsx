import type { NextPage } from 'next';
import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import HomePage from './home';
import Login from './signin';

const Home: NextPage = () => {
  const [appContext, setAppContext] = useState(false);
  if (appContext === true) {
    return (
      <>
        <HomePage />
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
