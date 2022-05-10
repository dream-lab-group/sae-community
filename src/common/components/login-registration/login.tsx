import { Box, Button, TextField, Typography } from '@mui/material';
import { SetStateAction } from 'react';

type LoginContextProps = {
  loginContext: string;
  setLoginContext: React.Dispatch<SetStateAction<string>>;
};

export const Login = ({ loginContext, setLoginContext }: LoginContextProps) => {
  return (
    <>
      <Typography variant="h2" sx={{ color: '#ff533d', fontWeight: 700 }}>
        Welcome Back!
      </Typography>
      <TextField
        id="username"
        label="Username"
        variant="standard"
        sx={{ marginTop: '20px' }}
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        sx={{ marginTop: '20px', marginBottom: '10px' }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography>Not a member?</Typography>
        <Button
          variant="text"
          color="error"
          sx={{
            padding: 0,
            fontFamily: `'Karla', sans-serif`,
            fontSize: '16px',
            marginLeft: '5px',
            textTransform: 'none',
          }}
          onClick={() => setLoginContext('register')}
        >
          Sign up now!
        </Button>
      </Box>
      <Button
        variant="contained"
        color="error"
        sx={{ alignSelf: 'flex-start', width: '150px' }}
      >
        {loginContext}
      </Button>
    </>
  );
};
