import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme } from '..';
import { CommunityHead } from '../../common/components/community-head';
import { LogIn } from '../../common/components/session/login';
import { ResetPassword } from '../../common/components/session/reset-password';
import { SignUp } from '../../common/components/session/sign-up';

export type SessionContextProps = {
  setSessionContext: React.Dispatch<SetStateAction<string>>;
  openSnackbar: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string | undefined;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleCloseSnackbar: () => void;
};

const SignIn = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const { t } = useTranslation();
  const [sessionContext, setSessionContext] = useState('signin');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
      <CommunityHead />
      <Grid
        container
        width="auto"
        height="100vh"
        alignItems="center"
        position="relative"
      >
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Box
            sx={{
              height: ' 100%',
              width: ' 100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {sessionContext === 'signin' ? (
              <LogIn
                setSessionContext={setSessionContext}
                openSnackbar={openSnackbar}
                setOpenSnackbar={setOpenSnackbar}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleCloseSnackbar={handleCloseSnackbar}
              />
            ) : sessionContext === 'signup' ? (
              <SignUp
                setSessionContext={setSessionContext}
                openSnackbar={openSnackbar}
                setOpenSnackbar={setOpenSnackbar}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleCloseSnackbar={handleCloseSnackbar}
              />
            ) : (
              <ResetPassword
                setSessionContext={setSessionContext}
                openSnackbar={openSnackbar}
                setOpenSnackbar={setOpenSnackbar}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleCloseSnackbar={handleCloseSnackbar}
              />
            )}
          </Box>
          <Typography
            sx={{
              fontSize: `${smBreakpointDown ? '14px' : '18px'}`,
              position: 'absolute',
              bottom: `${smBreakpointDown ? '10px' : '35px'}`,
              left: `${smBreakpointDown ? '10px' : '37px'}`,
            }}
          >
            © dream lab 2022
          </Typography>
        </Grid>
        <Grid
          item
          height="100vh"
          width="19px"
          // @ts-expect-error: error during build
          position={`${lgBreakpointDown ? 'absolute' : ''}`}
          right="0"
          sx={{
            background:
              'linear-gradient(180deg, #CF2CF6 -2.46%, #7514F5 59.27%)',
          }}
        />
        {lgBreakpointDown ? (
          <></>
        ) : (
          <Grid item xs height="100vh" sx={{ background: '#192D3E' }}>
            <Box
              sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'inherit', flexDirection: 'column' }}>
                <Typography
                  color="white"
                  sx={{
                    fontWeight: 600,
                    fontSize: `${desktopBreakpointUp ? '55px' : '40px'}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {t('general.platformForStudents')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
