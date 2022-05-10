import { Box } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Login } from './login';
import { Registration } from './registration';
import { ResetPassword } from './reset-password';

export const LoginRegistration = () => {
  const [loginContext, setLoginContext] = useState('login');
  const methods = useForm();
  return (
    <Box
      sx={{
        width: 'auto',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0f1626',
      }}
    >
      <Box
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
      </Box>
    </Box>
  );
};
