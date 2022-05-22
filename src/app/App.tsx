import HomePage from '../pages/home/homepage';
import { ReactElement, useState } from 'react';
import { AppBarHeader } from '../common/components/app-header';
import { MobileNavbar } from '../common/components/navigation-elements/mobile-navbar';
import { PageNavigationMobile } from '../common/components/page-navigation/page-navigation-mobile';
import { Box } from '@mui/material';

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
      {mobileMenuOpen === true ? (
        <>
          <MobileNavbar />
        </>
      ) : (
        <Box sx={{ overflowX: 'hidden' }}>
          <PageNavigationMobile />
          <HomePage />
        </Box>
      )}
    </>
  );
};

export default App;
