import type { NextPage } from 'next';

import Session from './session';

import 'react-loading-skeleton/dist/skeleton.css';

const Home: NextPage = () => {
  return (
    <>
      <Session />
    </>
  );
};

export default Home;
