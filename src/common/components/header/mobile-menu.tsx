import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { HiOutlineMenuAlt2, HiOutlineUser } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';

const MobileNavbar = () => {
  return (
    <Box>
      <li></li>
    </Box>
  );
};

export const MobileMenu = (): JSX.Element => {
  const [mobileAnchor, setMobileAnchor] = useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileAnchor);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchor(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
  };

  return (
    <Box
      sx={{
        borderBottom: '1px solid #E8E9EB',
        paddingX: '20px',
        paddingY: '15px',
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <IconButton>
            <HiOutlineMenuAlt2 size={20} />
          </IconButton>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Typography sx={{ fontSize: '14px' }}>Community</Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <IconButton>
            <HiOutlineUser size={20} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
