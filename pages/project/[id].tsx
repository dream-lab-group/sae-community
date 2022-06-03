import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Layout from '../../common/components/layout';

const Project = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '60px',
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%);',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      />
      <Box
        sx={{
          paddingTop: '25px',
          paddingBottom: '50px',
          paddingX: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
        }}
      ></Box>
    </Box>
  );
};

Project.getLayout = function getLayout(page: typeof Project) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Project;
