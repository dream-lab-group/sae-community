import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { LoginContextProps } from './login';

export const Registration = ({
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
        Hey there!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
          <TextField
            {...register('name', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="name"
            label="name"
            variant="standard"
            sx={{ width: '200px' }}
          />
          {errors.name && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '200px' }}>
          <TextField
            {...register('lastname', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="lastname"
            label="lastname"
            variant="standard"
            sx={{ width: '200px' }}
          />
          {errors.lastname && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
          <TextField
            {...register('username', { required: true })}
            id="userame"
            label="username"
            variant="standard"
            sx={{ width: '200px' }}
          />
          {errors.username && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '200px' }}>
          <TextField
            {...register('password', { required: true })}
            id="password"
            label="password"
            variant="standard"
            sx={{ width: '200px' }}
          />
          {errors.password && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
      </Box>
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
