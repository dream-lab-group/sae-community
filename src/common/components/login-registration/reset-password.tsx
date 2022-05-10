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
    <Box sx={{ width: '470px' }}>
      <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
        Passwort vergessen?
      </Typography>
      <Typography
        sx={{ fontSize: '20px', lineHeight: '25px', marginTop: '7px' }}
      >
        Gib deine E-Mail ein, die du bei der Anmeldung verwendet hast, und wir
        schicken dir eine E-Mail mit der Möglichkeit, dein Passwort
        zurückzusetzen.
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
        label="E-Mail"
        variant="outlined"
        sx={{ width: '100%', marginTop: '34px' }}
      />
      {errors.email && (
        <Typography
          color="error"
          sx={{ fontSize: '14px', marginBottom: '5px' }}
        >
          keine gültige E-mail Adresse
        </Typography>
      )}
      <Button
        variant="contained"
        color="error"
        type="submit"
        sx={{
          width: '100%',
          height: '56px',
          background: '#8519F6',
          marginTop: '20px',
        }}
      >
        {loginContext}
      </Button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Typography sx={{ fontSize: '14px' }}>
          Hast du dich an dein Passwort erinnert?
        </Typography>
        <Button
          variant="text"
          sx={{
            padding: 0,
            fontFamily: `'Outift', sans-serif`,
            fontSize: '14px',
            marginLeft: '5px',
            fontWeight: 700,
            color: '#000',
            textTransform: 'none',
          }}
          onClick={() => setLoginContext('anmelden')}
        >
          Hier anmelden
        </Button>
      </Box>
    </Box>
  );
};
