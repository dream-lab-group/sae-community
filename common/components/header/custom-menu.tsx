import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { AppBarHeaderProps } from './types';
import { FaRegBell, FaRegUser, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/router';

export const CustomMenu = ({
  menuOpen,
  handleOpenMenu,
  handleCloseMenu,
}: AppBarHeaderProps): JSX.Element => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const router = useRouter();

  const handleOnClickHome = (e: any) => {
    e.preventDefault();
    router.push('/');
  };

  const handleOnClickProjectUpload = (e: any) => {
    e.preventDefault();
    router.push('/project-upload');
  };

  return (
    <Box
      sx={{
        height: `${
          smBreakpointDown ? '70px' : lgBreakpointUp ? '90px' : '80px'
        }`,
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 3,
      }}
    >
      <Grid
        paddingX={`${
          smBreakpointDown ? '20px' : lgBreakpointUp ? '120px' : '42px'
        }`}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={5} alignItems="center">
          <Grid item container alignItems="center">
            <Grid
              item
              sx={{ marginRight: `${smBreakpointDown ? '5px' : '10px'}` }}
            >
              <Box
                sx={{
                  height: `${
                    smBreakpointDown ? '40px' : lgBreakpointUp ? '55px' : '50px'
                  }`,
                  width: `${
                    smBreakpointDown ? '40px' : lgBreakpointUp ? '55px' : '50px'
                  }`,
                  background: '#000',
                  borderRadius: '50%',
                }}
              />
            </Grid>
            <Grid
              item
              component="button"
              border="none"
              sx={{
                background: 'none',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={handleOnClickHome}
            >
              <Typography
                sx={{
                  fontSize: `${
                    smBreakpointDown ? '14px' : lgBreakpointUp ? '20px' : '18px'
                  }`,
                  fontWeight: '700',
                  color: '#8519F6',
                  lineHeight: 1,
                }}
              >
                SAI
              </Typography>
              <Typography
                sx={{
                  fontSize: `${
                    smBreakpointDown ? '14px' : lgBreakpointUp ? '20px' : '18px'
                  }`,
                  lineHeight: 1,
                }}
              >
                Community
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton sx={{ color: '#000' }}>
            <FaRegBell
              size={smBreakpointDown ? 22 : lgBreakpointUp ? 28 : 26}
            />
          </IconButton>
          {menuOpen === false ? (
            <IconButton
              onClick={handleOpenMenu}
              sx={{
                marginLeft: `${mdBreakpointDown ? '10px' : '15px'}`,
                color: '#000',
              }}
            >
              <FaRegUser
                size={smBreakpointDown ? 22 : lgBreakpointUp ? 28 : 26}
              />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleCloseMenu}
              sx={{
                marginLeft: `${mdBreakpointDown ? '10px' : '15px'}`,
                color: '#8519F6',
              }}
            >
              <FaUser size={smBreakpointDown ? 22 : lgBreakpointUp ? 28 : 26} />
            </IconButton>
          )}
          <IconButton
            sx={{
              border: '2px solid #8519F6',
              marginLeft: `${mdBreakpointDown ? '10px' : '15px'}`,
              color: '#8519F6',
            }}
            onClick={handleOnClickProjectUpload}
          >
            <MdAdd size={smBreakpointDown ? 22 : lgBreakpointUp ? 28 : 26} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
