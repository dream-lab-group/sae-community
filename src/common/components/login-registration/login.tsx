import { Box, Button, TextField, Typography } from '@mui/material';
import { SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

export type LoginContextProps = {
  loginContext: string;
  setLoginContext: React.Dispatch<SetStateAction<string>>;
};

export const Login = ({ loginContext, setLoginContext }: LoginContextProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <Typography variant="h2" sx={{ color: '#ff533d', fontWeight: 700 }}>
        Welcome Back!
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('username', { required: true })}
          id="username"
          label="Username"
          variant="standard"
          sx={{ marginTop: '20px' }}
        />
        {errors.username && (
          <Typography color="error" sx={{ fontSize: '14px' }}>
            Kein username
          </Typography>
        )}
        <TextField
          {...register('password', { required: true })}
          id="password"
          label="Password"
          variant="standard"
          sx={{ marginTop: '20px', marginBottom: '10px' }}
        />
        {errors.password && (
          <Typography color="error" sx={{ fontSize: '14px' }}>
            Kein password
          </Typography>
        )}
      </Box>
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          variant="contained"
          color="error"
          type="submit"
          sx={{ alignSelf: 'flex-start', width: '150px', marginBottom: '10px' }}
        >
          {loginContext}
        </Button>
        <Button
          variant="text"
          color="inherit"
          sx={{
            padding: 0,
            fontFamily: `'Karla', sans-serif`,
            fontSize: '16px',
            marginLeft: '5px',
            textTransform: 'none',
            alignSelf: 'flex-start',
          }}
          onClick={() => setLoginContext('resetpassword')}
        >
          Forgot password?
        </Button>
      </Box>
    </>
  );
};
