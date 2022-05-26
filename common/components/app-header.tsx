import { Box } from '@mui/material';
import { CustomMenu } from './header/custom-menu';
import { AppBarHeaderProps } from './header/types';

export const AppBarHeader = ({
  menuOpen,
  handleOpenMenu,
  handleCloseMenu,
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
      <CustomMenu
        menuOpen={menuOpen}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
      />
    </Box>
  );
};
