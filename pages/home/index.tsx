import { Directus } from '@directus/sdk';
import { Box, Card, Chip, Typography } from '@mui/material';
import { ProjectCard } from '../../common/components/project-card/project-card';

const directus = new Directus('http://146.190.227.5');
const HomePage = () => {
  const token = directus.auth.token;
  if (token) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <ProjectCard />
      </Box>
    );
  } else {
    return <></>;
  }
};

export default HomePage;
