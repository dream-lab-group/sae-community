import { Box } from '@mui/material';
import { MobileMenu } from './header/mobile-menu';
import { AppBarHeaderProps } from './header/types';

export const AppBarHeader = ({
  mobileMenuOpen,
  handleOpenMobileMenu,
  handleCloseMobileMenu,
}: AppBarHeaderProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0,
        width: '100%',
        zIndex: 2000,
        background: '#fff',
      }}
    >
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
    </Box>
  );
};
