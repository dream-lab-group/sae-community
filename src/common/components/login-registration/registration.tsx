import { Box, Button, TextField, Typography } from '@mui/material';
import { SetStateAction } from 'react';

type LoginContextProps = {
  loginContext: string;
  setLoginContext: React.Dispatch<SetStateAction<string>>;
};

export const Registration = ({
  loginContext,
  setLoginContext,
}: LoginContextProps) => {
  return (
    <>
      <Typography variant="h2" sx={{ color: '#ff533d', fontWeight: 700 }}>
        Hey there!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <TextField
          id="name"
          label="name"
          variant="standard"
          sx={{ width: '200px' }}
        />
        <TextField
          id="lastname"
          label="lastname"
          variant="standard"
          sx={{ width: '200px' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <TextField
          id="userame"
          label="username"
          variant="standard"
          sx={{ width: '200px' }}
        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          sx={{ width: '200px' }}
        />
      </Box>
      <TextField id="email" label="email" variant="standard" />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography>Already a member?</Typography>
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
          onClick={() => setLoginContext('login')}
        >
          Sign in now!
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
