import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '../public/404.png';

const NotFoundPage: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const BackToHomePage = () => {
    router.push('/');
  };

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '15rem',
              fontWeight: '500',
              color: 'white',
              background: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 74.06%)`,
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '7.5rem',
              letterSpacing: '3rem',
            }}
          >
            404
          </Typography>

          <Box sx={{ position: 'fixed' }}>
            <Image
              className="project-image-border-radius image-container"
              src={image}
              alt="Sai"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '2rem' }}>
            {t('404.description')}
          </Typography>

          <Typography
            onClick={BackToHomePage}
            sx={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: 'white',
              padding: '.7rem',
              background: `linear-gradient(to bottom, #AD23F6 3.51%, #7E17F6 99.06%)`,
              borderRadius: '20px',
              marginTop: '1rem',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {t('404.back')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NotFoundPage;
