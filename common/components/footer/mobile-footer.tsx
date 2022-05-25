import { Box, Typography } from '@mui/material';
import { FaHeart } from 'react-icons/fa';

export const MobileFooter = () => {
  return (
    <Box
      sx={{
        background: '#192D3E',
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography
          component="button"
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '300',
            border: 'none',
            background: 'none',
            padding: '5px 10px',
            marginRight: '5px',
          }}
        >
          Datenschutzerklärung
        </Typography>
        <Typography
          component="button"
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '300',
            border: 'none',
            background: 'none',
            padding: '5px 10px',
            marginLeft: '5px',
          }}
        >
          Impressum
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '300',
            marginRight: '5px',
          }}
        >
          © 2022 made with
        </Typography>
        <FaHeart color="#D22B2B" />
        <Typography
          sx={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: '300',
            marginLeft: '5px',
          }}
        >
          by dream lab. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
