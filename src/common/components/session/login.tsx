import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import { handleLoginUser } from '../../data/signup-signin/hooks';

export const LogIn = ({ setSessionContext }: SessionContextProps) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const result = await handleLoginUser({
          email: data.email,
          password: data.password,
        });
        // type error, but data is reachable
        // @ts-ignore: Unreachable code error
        if (result.loginUserStatus.statusText === 'OK') {
          console.log(result);
        }
      })}
    >
      <Box sx={{ width: '470px' }}>
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
          {t('loginRegistration.welcomeBack')}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 400, fontSize: '20px', marginTop: '7px' }}
        >
          {t('general.saeCommunityPlatform')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            name="email"
            label="E-Mail"
            type="email"
            variant="outlined"
            sx={{ marginTop: '20px', marginBottom: '10px' }}
          />
          {errors.email && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              {t('error.loginRegistration.required')}
            </Typography>
          )}
          <TextField
            {...register('password', { required: true })}
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginTop: '20px', marginBottom: '10px' }}
          />
          {errors.password && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              {t('error.loginRegistration.required')}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: '470px',
              height: '56px',
              marginTop: '20px',
              background: '#8519F6',
            }}
          >
            Anmelden
          </Button>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              marginTop: '21px',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="text"
              color="inherit"
              sx={{
                padding: 0,
                fontFamily: `'Outfit', sans-serif`,
                fontSize: '14px',
                fontWeight: 700,
                color: '#000',
                textTransform: 'none',
              }}
              onClick={() => setSessionContext('reset-password')}
            >
              {t('loginRegistration.forgotPassword')}
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px' }}>
                Noch kein Konto?
              </Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  padding: 0,
                  fontFamily: `'Outfit', sans-serif`,
                  fontWeight: 700,
                  color: '#000',
                  fontSize: '14px',
                  textTransform: 'none',
                  marginLeft: '5px',
                }}
                onClick={() => setSessionContext('signup')}
              >
                {t('loginRegistration.register')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
