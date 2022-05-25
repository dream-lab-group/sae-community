import { Box, Grid, IconButton, Typography } from '@mui/material';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineNotifications, MdAdd } from 'react-icons/md';
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
        paddingY: '12px',
        boxShadow: 3,
      }}
    >
      <Grid
        sx={{ paddingX: '20px' }}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={5} alignItems="center">
          <Grid item container alignItems="center">
            <Grid item sx={{ marginRight: '5px' }}>
              <Box
                sx={{
                  height: '40px',
                  width: '40px',
                  background: '#000',
                  borderRadius: '50%',
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: '14px', fontWeight: '700', color: '#8519F6' }}
              >
                SAI
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>Community</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton sx={{ marginLeft: '10px' }}>
            <MdOutlineNotifications color="#000" size={25} />
          </IconButton>
          {mobileMenuOpen === false ? (
            <IconButton
              onClick={handleOpenMobileMenu}
              sx={{ marginLeft: '10px' }}
            >
              <HiOutlineUser color="#000" size={25} />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleCloseMobileMenu}
              sx={{ marginLeft: '10px' }}
            >
              <HiOutlineUser color="#000" size={25} />
            </IconButton>
          )}
          <IconButton sx={{ border: '2px solid #8519F6', marginLeft: '10px' }}>
            <MdAdd color="#8519F6" size={25} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
