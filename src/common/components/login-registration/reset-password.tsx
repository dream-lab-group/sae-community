import { Button, TextField, Typography, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { LoginContextProps } from './login';

export const ResetPassword = ({
  loginContext,
  setLoginContext,
}: LoginContextProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <Typography variant="h2" sx={{ color: '#ff533d', fontWeight: 700 }}>
        It happens!
      </Typography>
      <TextField
        {...register('email', {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid E-Mail adress',
          },
        })}
        id="email"
        label="email"
        variant="standard"
        sx={{ width: '100%' }}
      />
      {errors.email && (
        <Typography
          color="error"
          sx={{ fontSize: '14px', marginBottom: '5px' }}
        >
          keine gültige E-mail Adresse
        </Typography>
      )}
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
        type="submit"
        sx={{ alignSelf: 'flex-start', width: '150px' }}
      >
        {loginContext}
      </Button>
    </>
  );
};
