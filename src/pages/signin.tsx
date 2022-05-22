import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ResetPassword } from '../common/components/session/reset-password';
import { LogIn } from '../common/components/session/login';
import { SignUp } from '../common/components/session/sign-up';

export type SessionContextProps = {
  setSessionContext: React.Dispatch<SetStateAction<string>>;
};

const SignIn = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const retinaBreakpointUp = useMediaQuery(theme.breakpoints.up('retina'));

  const { t } = useTranslation();
  const [sessionContext, setSessionContext] = useState('signin');

  return (
    <Grid
      container
      sx={{
        width: 'auto',
        height: '100vh',
        alignItems: 'center',
        position: 'relative',
      }}
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
        {smBreakpointDown ? (
          <Typography
            sx={{
              fontSize: '14px',
              position: 'absolute',
              bottom: '10px',
              left: '10px',
            }}
          >
            © dream lab 2022
          </Typography>
        ) : lgBreakpointDown ? (
          <Typography
            sx={{
              fontSize: '18px',
              position: 'absolute',
              bottom: '35px',
              left: '37px',
            }}
          >
            © dream lab 2022
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: '18px',
              position: 'absolute',
              bottom: '35px',
              left: '37px',
            }}
          >
            © dream lab 2022
          </Typography>
        )}
      </Grid>
      {lgBreakpointDown ? (
        <Grid
          item
          sx={{
            height: '100%',
            background: `linear-gradient(180deg, #CF2CF6 -2.46%, #7514F5 59.27%)`,
            width: '19px',
            position: 'absolute',
            right: 0,
          }}
        />
      ) : (
        <Grid
          item
          sx={{
            height: '100vh',
            background: `linear-gradient(180deg, #CF2CF6 -2.46%, #7514F5 59.27%)`,
            width: '19px',
          }}
        />
      )}
      {lgBreakpointDown ? (
        <></>
      ) : (
        <Grid item xs sx={{ background: '#192D3E', height: '100vh' }}>
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
              {retinaBreakpointUp ? (
                <>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: 600,
                      fontSize: '55px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t('general.platformForStudents')}
                  </Typography>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: 600,
                      fontSize: '55px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t('general.fromStudents')}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: 600,
                      fontSize: '40px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t('general.platformForStudents')}
                  </Typography>
                  <Typography
                    color="white"
                    sx={{
                      fontWeight: 600,
                      fontSize: '40px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t('general.fromStudents')}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default SignIn;
