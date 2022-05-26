import { Directus } from '@directus/sdk';
import {
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AppBarHeader } from '../common/components/app-header';
import { MobileFooter } from '../common/components/footer/mobile-footer';
import { PageNavigationMobile } from '../common/components/page-navigation/page-navigation-mobile';
import HomePage from './home';
import SignIn from './signin';
import { motion } from 'framer-motion';
import { CustomNavbar } from '../common/components/navigation-elements/custom-navbar';

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
      md: 768,
      lg: 1200,
      xl: 1536,
      retina: 2560,
    },
  },
});

const Home: NextPage = () => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
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
            menuOpen={menuOpen}
            handleOpenMenu={handleOpenMenu}
            handleCloseMenu={handleCloseMenu}
          />
          {menuOpen ? (
            <>
              <CustomNavbar menuOpen={menuOpen} />
            </>
          ) : (
            <Box
              sx={{
                overflowX: 'hidden',
                marginTop: `${mdBreakpointDown ? '57px' : '90px'}`,
              }}
            >
              <PageNavigationMobile />
              <HomePage />
              <MobileFooter />
            </Box>
          )}
        </>
      )}
    </ThemeProvider>
  );
};

export default Home;
