import { Directus } from '@directus/sdk';
import { Box } from '@mui/material';

const directus = new Directus('http://146.190.227.5');
const HomePage = () => {
  const token = directus.auth.token;
  if (token) {
    return (
      <Box sx={{ width: '100%', paddingX: '20px' }}>
        <h1>THIS IS THE HOMEPAGE</h1>
      </Box>
    );
  } else {
    return <></>;
  }
};

export default HomePage;
