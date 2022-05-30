import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { AppBarHeader } from './app-header';
import { MobileFooter } from './footer/mobile-footer';
import { CustomNavbar } from './navigation-elements/custom-navbar';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    if (mdBreakpointDown) {
      document.documentElement.style.overflow = 'hidden';
    }
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    if (mdBreakpointDown) {
      document.documentElement.style.overflow = 'scroll';
    }
  };

  return (
    <>
      <Head>
        <title>SAI Community</title>
        <meta name="author" content="Hadrian Chio" />
        <meta
          name="description"
          content="SAI Community is a project platform designed for an interdisciplinary bachelor project at SAE Institute Zurich where students can share and react to each others projects."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={{ width: '100%' }}>
        <AppBarHeader
          menuOpen={menuOpen}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />
        {menuOpen && <CustomNavbar menuOpen={menuOpen} />}
        <Box
          sx={{
            overflowX: 'hidden',
            marginTop: `${
              smBreakpointDown ? '70px' : lgBreakpointUp ? '90px' : '80px'
            }`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <main className="main-container">{children}</main>
        </Box>
        <MobileFooter />
      </Box>
    </>
  );
};

export default Layout;
