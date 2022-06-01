import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Head from 'next/head';
import { SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LogIn } from '../../common/components/session/login';
import { ResetPassword } from '../../common/components/session/reset-password';
import { SignUp } from '../../common/components/session/sign-up';

export type SessionContextProps = {
  setSessionContext: React.Dispatch<SetStateAction<string>>;
};

const SignIn = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const { t } = useTranslation();
  const [sessionContext, setSessionContext] = useState('signin');

  return (
    <>
      <Head>
        <title>SAI Community</title>
        <meta name="author" content="Hadrian Chio" />
        <meta
          name="description"
          content="SAI Community is a project platform designed for an interdisciplinary bachelor project at SAE Institute Zurich where students can share and react to each others projects."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              <LogIn setSessionContext={setSessionContext} />
            ) : sessionContext === 'signup' ? (
              <SignUp setSessionContext={setSessionContext} />
            ) : (
              <ResetPassword setSessionContext={setSessionContext} />
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
                <Typography
                  color="white"
                  sx={{
                    fontWeight: 600,
                    fontSize: `${desktopBreakpointUp ? '55px' : '40px'}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {t('general.fromStudents')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SignIn;
