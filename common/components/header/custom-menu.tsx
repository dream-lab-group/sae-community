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
  setMenuOpen,
}: AppBarHeaderProps): JSX.Element => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const router = useRouter();

  const handleOnClickHome = (e: any) => {
    e.preventDefault();
    setMenuOpen(false);
    router.push('/');
  };

  const handleOnClickProjectUpload = (e: any) => {
    e.preventDefault();
    setMenuOpen(false);
    router.push('/project-upload');
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 3,
      }}
    >
      <Grid
        paddingX={`${
          smBreakpointDown ? '17px' : desktopBreakpointUp ? '60px' : '55px'
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
              component="button"
              border="none"
              sx={{
                background: 'none',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                marginRight: `${smBreakpointDown ? '5px' : '10px'}`,
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
                Plattform
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
