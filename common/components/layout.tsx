import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { AppBarHeader } from './app-header';

import { CustomNavbar } from './navigation-elements/custom-navbar';
import { Footer } from './footer/footer';
import { CommunityHead } from './community-head';
import { apiClient } from '../data/apiClient';
import { directus } from '../../pages';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<any>();

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      setCurrentUserId(userId.id);
    };
    getCurrentUser();
  }, [setCurrentUserId]);

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
      <CommunityHead />
      <Box sx={{ width: '100%' }}>
        <AppBarHeader
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />
        {menuOpen && (
          <CustomNavbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            currentUser={currentUserId}
          />
        )}
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
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
