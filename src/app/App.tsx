import HomePage from '../pages/home/homepage';
import { ReactElement, useState } from 'react';
import { AppBarHeader } from '../common/components/app-header';
import { MobileNavbar } from '../common/components/navigation-elements/mobile-navbar';

const App = (): ReactElement => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBarHeader
        mobileMenuOpen={mobileMenuOpen}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
      {mobileMenuOpen === true ? <MobileNavbar /> : <HomePage />}
    </>
  );
};

export default App;
