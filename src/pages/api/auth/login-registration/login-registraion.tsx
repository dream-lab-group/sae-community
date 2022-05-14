import { Box, Grid, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RequestResult } from '../../../../common/data/fetch/restuls';
import { handleCreateNewUser } from '../../../../common/data/login-registration/hooks';
import { loginUser } from '../../../../common/data/login-registration/request';
import { UserDto, UserLogin } from '../../../../common/data/types/types';

import { Login } from './login';
import { Registration } from './registration';
import { ResetPassword } from './reset-password';

export type LoginContextProps = {
  user: RequestResult<UserDto>;
  setUser: React.Dispatch<RequestResult<UserDto>>;
  loginContext: string;
  setLoginContext: React.Dispatch<SetStateAction<string>>;
};

export const LoginRegistration = ({
  user,
  setUser,
  loginContext,
  setLoginContext,
}: LoginContextProps) => {
  console.log(user);
  const methods = useForm();
  const { t } = useTranslation();

  const handleLoginUser = (event: UserLogin) => {
    loginUser(event);
    setLoginContext('angemeldet');
  };

  return (
    <Grid
      container
      sx={{
        width: 'auto',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        sx={{ height: '100vh', position: 'relative' }}
      >
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
            {loginContext === 'anmelden' ? (
              <form
                onSubmit={methods.handleSubmit((event) =>
                  handleLoginUser({
                    email: event.email,
                    password: event.password,
                  }),
                )}
              >
                <Login
                  user={user}
                  setUser={setUser}
                  loginContext={loginContext}
                  setLoginContext={setLoginContext}
                />
              </form>
            ) : loginContext === 'konto erstellen' ? (
              <form
                onSubmit={methods.handleSubmit((event) =>
                  handleCreateNewUser({
                    first_name: event.first_name,
                    last_name: event.last_name,
                    email: event.email,
                    password: event.password,
                    course: event.course,
                  }),
                )}
              >
                <Registration
                  user={user}
                  setUser={setUser}
                  loginContext={loginContext}
                  setLoginContext={setLoginContext}
                />
              </form>
            ) : (
              <ResetPassword
                loginContext={loginContext}
                setLoginContext={setLoginContext}
              />
            )}
          </FormProvider>
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            position: 'absolute',
            bottom: '35px',
            left: '37px',
          }}
        >
          © dream lab 2022
        </Typography>
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
