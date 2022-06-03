import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const ProjectInformation = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: '#e2a165',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '30px' }}>
          SC
        </Typography>
      </Box>
      <Box sx={{ widht: '100%', marginLeft: '20px' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
          Projekt Titel
        </Typography>
        <Typography sx={{ fontSize: '16px' }}>Sarah Candolfi</Typography>
      </Box>
    </Box>
  );
};
