import HomePage from '../pages/home';
import { ReactElement } from 'react';
import { AppBarHeader } from '../common/components/app-header';

const App = (): ReactElement => {
  return (
    <>
      <AppBarHeader />
      <HomePage />
    </>
  );
};

export default App;
