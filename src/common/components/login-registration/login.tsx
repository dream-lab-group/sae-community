import { Box, Button, TextField, Typography } from '@mui/material';
import { SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

export type LoginContextProps = {
  loginContext: string;
  setLoginContext: React.Dispatch<SetStateAction<string>>;
  className?: string;
};

export const Login = ({ loginContext, setLoginContext }: LoginContextProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Melde dich an!
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        SAE Community Plattform
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('username', { required: true })}
          id="username"
          label="Username"
          variant="outlined"
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
          variant="outlined"
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
          onClick={() => setLoginContext('konto erstellen')}
        >
          Sign up now!
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          variant="contained"
          color="secondary"
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
