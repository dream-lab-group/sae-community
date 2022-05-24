import { Directus } from '@directus/sdk';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AppBarHeader } from '../common/components/app-header';
import { MobileNavbar } from '../common/components/navigation-elements/mobile-navbar';
import { PageNavigationMobile } from '../common/components/page-navigation/page-navigation-mobile';
import HomePage from './home';
import SignIn from './signin';

const directus = new Directus('http://146.190.227.5');

const token = directus.auth.token;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    retina: true; // adds the `mobile` breakpoint
  }
}

const appTheme = createTheme({
  typography: {
    fontFamily: `'Outfit', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      retina: 2560,
    },
  },
});

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // force app to rehydrate after login to match the original HTML
  // hasMounted, to false. While it's false, doesn't bother rendering the "real" content.
  const [hasMounted, setHasMounted] = useState(false);

  // Inside the useEffect immediately trigger a re-render, setting hasMounted to true. While  true, the "real" content gets rendered.
  // useEffect only triggers after the component has mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
      {!token ? (
        <SignIn />
      ) : (
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
      )}
    </ThemeProvider>
  );
};

export default Home;
