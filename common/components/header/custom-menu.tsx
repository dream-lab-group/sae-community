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
import { FaRegBell, FaRegUser } from 'react-icons/fa';

export const CustomMenu = ({
  menuOpen,
  handleOpenMenu,
  handleCloseMenu,
}: AppBarHeaderProps): JSX.Element => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        borderBottom: '1px solid #E8E9EB',
        height: `${mdBreakpointDown ? '70px' : '90px'}`,
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 3,
      }}
    >
      <Grid
        sx={{ paddingX: `${mdBreakpointDown ? '20px' : '120px'}` }}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={5} alignItems="center">
          <Grid item container alignItems="center">
            <Grid
              item
              sx={{ marginRight: `${mdBreakpointDown ? '5px' : '10px'}` }}
            >
              <Box
                sx={{
                  height: `${mdBreakpointDown ? '40px' : '60px'}`,
                  width: `${mdBreakpointDown ? '40px' : '60px'}`,
                  background: '#000',
                  borderRadius: '50%',
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: `${mdBreakpointDown ? '14px' : '20px'}`,
                  fontWeight: '700',
                  color: '#8519F6',
                  lineHeight: `${mdBreakpointUp && 1}`,
                }}
              >
                SAI
              </Typography>
              <Typography
                sx={{
                  fontSize: `${mdBreakpointDown ? '14px' : '20px'}`,
                  lineHeight: `${mdBreakpointUp && 1}`,
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
          <IconButton>
            <FaRegBell color="#000" size={mdBreakpointDown ? 25 : 32} />
          </IconButton>
          {menuOpen === false ? (
            <IconButton
              onClick={handleOpenMenu}
              sx={{ marginLeft: `${mdBreakpointDown ? '10px' : '15px'}` }}
            >
              <FaRegUser color="#000" size={mdBreakpointDown ? 25 : 32} />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleCloseMenu}
              sx={{ marginLeft: `${mdBreakpointDown ? '10px' : '15px'}` }}
            >
              <FaRegUser color="#000" size={mdBreakpointDown ? 25 : 32} />
            </IconButton>
          )}
          <IconButton
            sx={{
              border: '2px solid #8519F6',
              marginLeft: `${mdBreakpointDown ? '10px' : '15px'}`,
            }}
          >
            <MdAdd color="#8519F6" size={mdBreakpointDown ? 25 : 32} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
