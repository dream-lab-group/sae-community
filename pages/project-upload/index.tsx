import { Box, useMediaQuery, useTheme } from '@mui/material';
import Layout from '../../common/components/layout';

const ProjectUpload = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          height: '20px',
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
        }}
        className="container-skew"
      ></Box>
      <Box
        sx={{
          paddingX: `${
            smBreakpointDown ? '17px' : desktopBreakpointUp ? '60px' : '55px'
          }`,
        }}
      ></Box>
      <h1>THIS IS MY PROJECT UPLOAD SITE</h1>
    </Box>
  );
};

ProjectUpload.getLayout = function getLayout(page: typeof ProjectUpload) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default ProjectUpload;
