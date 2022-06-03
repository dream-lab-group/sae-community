import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import imageOne from '../../../public/assets/project-file-1.webp';

export const ProjectPictures = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {smBreakpointDown ? (
        <Box
          sx={{
            marginTop: '35px',
            width: '100%',
            height: '250px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            src={imageOne}
            layout="fill"
          />
        </Box>
      ) : mdBreakpointDown ? (
        <Box
          sx={{
            marginTop: '35px',
            width: '100%',
            height: '350px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            src={imageOne}
            layout="fill"
          />
        </Box>
      ) : lgBreakpointDown ? (
        <Box
          sx={{
            marginTop: '35px',
            width: '100%',
            height: '450px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            src={imageOne}
            layout="fill"
          />
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: '35px',
            width: '100%',
            height: '450px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            src={imageOne}
            layout="fill"
          />
        </Box>
      )}
    </>
  );
};
