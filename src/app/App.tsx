import HomePage from '../pages/home';
import SignIn from '../pages/signin';
import { Routes, Route } from 'react-router-dom';
import { Directus } from '@directus/sdk';
import { ReactElement } from 'react';

const directus = new Directus('http://146.190.227.5');

const App = (): ReactElement => {
  const token = directus.auth.token;

  if (!token) {
    return (
      // @ts-expect-error: Error due Directus JS-SDK
      <Routes>
        {/* @ts-expect-error: Error due Directus JS-SDK */}
        <Route path="/" element={<SignIn />} />
      </Routes>
    );
  }

  return (
    <>
      {/* @ts-expect-error: Error due Directus JS-SDK */}
      <Routes>
        {/* @ts-expect-error: Error due Directus JS-SDK */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
