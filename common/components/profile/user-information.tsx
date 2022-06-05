import { Box, Typography } from '@mui/material';

export const UserInformation = () => {
  return (
    <Box
      sx={{
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: -20,
      }}
    >
      <Box
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '5px solid #fff',
          background: '#e2a165',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '30px',
        }}
      >
        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '30px' }}>
          SC
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
            Sarah
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: '20px', marginLeft: '5px' }}
          >
            Candolfi
          </Typography>
        </Box>
        <Typography>Webdevelopment</Typography>
      </Box>
    </Box>
  );
};
