import { Button, TextField, Typography, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LoginContextProps } from './signIn-signUp';
export const ResetPassword = ({
  loginContext,
  setLoginContext,
}: LoginContextProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <Box sx={{ width: '470px' }}>
      <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
        Passwort vergessen?
      </Typography>
      <Typography
        sx={{ fontSize: '20px', lineHeight: '25px', marginTop: '7px' }}
      >
        {t('loginRegistration.passwordResetInstruction')}
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
          {t('error.loginRegistration.required')}
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
          {t('loginRegistration.rememberedPassword')}
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
          {t('loginRegistration.login')}
        </Button>
      </Box>
    </Box>
  );
};
