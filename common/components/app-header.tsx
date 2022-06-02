import { Box, useMediaQuery, useTheme } from '@mui/material';
import { CustomMenu } from './header/custom-menu';
import { AppBarHeaderProps } from './header/types';

export const AppBarHeader = ({
  menuOpen,
  handleOpenMenu,
  handleCloseMenu,
  setMenuOpen,
}: AppBarHeaderProps): JSX.Element => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

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
        height: `${
          smBreakpointDown ? '70px' : lgBreakpointUp ? '90px' : '80px'
        }`,
      }}
    >
      <CustomMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
      />
    </Box>
  );
};
