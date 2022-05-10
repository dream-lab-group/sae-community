import { Box } from '@mui/material';
import { useState } from 'react';
import { Login } from './login';
import { Registration } from './registration';

export const LoginRegistration = () => {
  const [loginContext, setLoginContext] = useState('login');
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
        {loginContext === 'login' ? (
          <Login
            loginContext={loginContext}
            setLoginContext={setLoginContext}
          />
        ) : (
          <Registration
            loginContext={loginContext}
            setLoginContext={setLoginContext}
          />
        )}
      </Box>
    </Box>
  );
};
