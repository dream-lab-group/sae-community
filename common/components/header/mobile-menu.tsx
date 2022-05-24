import { Box, Grid, IconButton, Typography } from '@mui/material';
import { HiOutlineMenuAlt2, HiOutlineUser, HiX } from 'react-icons/hi';
import { AppBarHeaderProps } from './types';

export const MobileMenu = ({
  mobileMenuOpen,
  handleOpenMobileMenu,
  handleCloseMobileMenu,
}: AppBarHeaderProps): JSX.Element => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #E8E9EB',
        paddingY: '15px',
      }}
    >
      <Grid sx={{ paddingX: '20px' }} container spacing={3} alignItems="center">
        <Grid item xs={4}>
          {mobileMenuOpen === false ? (
            <IconButton onClick={handleOpenMobileMenu}>
              <HiOutlineMenuAlt2 size={22} />
            </IconButton>
          ) : (
            <IconButton onClick={handleCloseMobileMenu}>
              <HiX size={22} />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Typography sx={{ fontSize: '14px' }}>Community</Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <IconButton>
            <HiOutlineUser size={22} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
