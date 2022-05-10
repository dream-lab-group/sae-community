import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Login } from './login';
import { Registration } from './registration';
import { ResetPassword } from './reset-password';

export const LoginRegistration = () => {
  const [loginContext, setLoginContext] = useState('login');
  const methods = useForm();
  return (
    <Grid
      container
      sx={{
        width: 'auto',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={7} md={7} sx={{ height: '100vh' }}>
        <Box
          sx={{
            height: ' 100%',
            width: ' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(() => {
                console.log('submitted');
              })}
            >
              {loginContext === 'login' ? (
                <Login
                  loginContext={loginContext}
                  setLoginContext={setLoginContext}
                />
              ) : loginContext === 'konto erstellen' ? (
                <Registration
                  loginContext={loginContext}
                  setLoginContext={setLoginContext}
                />
              ) : (
                <ResetPassword
                  loginContext={loginContext}
                  setLoginContext={setLoginContext}
                />
              )}
            </form>
          </FormProvider>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          height: '100vh',
          background: `linear-gradient(180deg, #CF2CF6 -2.46%, #7514F5 59.27%)`,
          width: '19px',
        }}
      />
      <Grid item xs sx={{ background: '#192D3E', height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: ' center',
          }}
        >
          <Box sx={{ display: 'inherit', flexDirection: 'column' }}>
            <Typography
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '0.04em',
              }}
            >
              Plattform von Studenten
            </Typography>
            <Typography
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '0.04em',
              }}
            >
              für Studenten
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: '#f5f5f5',
          paddingY: '40px',
          paddingX: '60px',
          borderRadius: '10px',
          minWidth: '550px',
        }}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(() => {
              console.log('submitted');
            })}
          >
            {loginContext === 'login' ? (
              <Login
                loginContext={loginContext}
                setLoginContext={setLoginContext}
              />
            ) : loginContext === 'register' ? (
              <Registration
                loginContext={loginContext}
                setLoginContext={setLoginContext}
              />
            ) : (
              <ResetPassword
                loginContext={loginContext}
                setLoginContext={setLoginContext}
              />
            )}
          </form>
        </FormProvider>
      </Box> */}
    </Grid>
  );
};
