import {
  Chip,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import image1 from '../../../public/assets/howen-1ZapU2hXhzY-unsplash.jpeg';
import { HiOutlineHeart, HiOutlineBookmark } from 'react-icons/hi';

export const ProjectCard = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid
      item
      container
      boxShadow="none"
      borderRadius="10px"
      width="100%"
      height="100%"
      sm={12}
      md={6}
      lg={4}
      xl={3}
      justifyContent="center"
    >
      <Grid
        item
        position="relative"
        height={`${
          smBreakpointDown
            ? '265px'
            : mdBreakpointDown
            ? '300px'
            : mdBreakpointUp
            ? '300px'
            : lgBreakpointUp
            ? '540px'
            : ''
        }`}
        maxHeight="540px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        maxWidth="450px"
      >
        <Image
          src={image1}
          layout="fill"
          className="project-image-border-radius"
        />
        <Box
          component="button"
          sx={{
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            bottom: '68px',
            background: '#fff',
            width: '56px',
            height: '46px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2rem 0 0 2rem',
          }}
        >
          <HiOutlineHeart size={30} />
        </Box>
        <Box
          component="button"
          sx={{
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            bottom: '10px',
            background: '#fff',
            width: '56px',
            height: '46px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2rem 0 0 2rem',
          }}
        >
          <HiOutlineBookmark size={30} />
        </Box>
      </Grid>
      <Grid
        item
        container
        margin=" 5px 0 0 0"
        padding="5px 0"
        alignItems="center"
        maxWidth="450px"
      >
        <Grid item xs={8}>
          <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
            Studentname
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Chip
            label="Webdevelopment"
            sx={{
              background: '#364156',
              color: '#fff',
              fontSize: '16px',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
