import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Layout from '../../common/components/layout';
import saiImage from '../../public/404.png';

const MyLikes = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          height: `${
            mdBreakpointDown ? '60px' : lgBreakpointUp ? '100px' : '80px'
          }`,
          paddingX: `${
            smBreakpointDown ? '17px' : desktopBreakpointUp ? '60px' : '55px'
          }`,
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: `${mdBreakpointDown ? '200px' : '400px'}`,
            width: `${mdBreakpointDown ? '200px' : '300px'}`,
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            layout="fill"
            src={saiImage}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            background: '#192D3E',
            top: '-1px',
            width: `${mdBreakpointDown ? '350px' : '650px'}`,
            padding: '20px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: '#fff',
              fontSize: `${mdBreakpointDown ? '20px' : '30px'}`,
              textAlign: 'center',
            }}
          >
            {t('general.futureFeature')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

MyLikes.getLayout = function getLayout(page: typeof MyLikes) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyLikes;
