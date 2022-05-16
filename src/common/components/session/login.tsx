import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';

export const LogIn = ({ setSessionContext }: SessionContextProps) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const defaultValues = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(defaultValues);
  // @ts-ignore: Unreachable code error
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // @ts-ignore: Unreachable code error
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    const res = await signIn('credentials', {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
      callbackUrl: `/home`,
    });
    console.log(res);
    // @ts-ignore: Unreachable code error
    // if (res?.error) {
    //   setError(true);
    // } else {
    //   console.log(router.push('/home'));
    // }
    if (res.ok === true) {
      router.push('/home');
    } else {
      router.push('/');
    }
  };

  return (
    <form
      onSubmit={handleLoginSubmit}
      // onSubmit={handleSubmit(async (data) => {
      //   const result = await signIn({
      //     redirect: false,
      //     email: data.email,
      //     password: data.password,
      //     callbackUrl: `/home`,
      //   });
      //   // type error, but data is reachable
      //   // @ts-ignore: Unreachable code error
      //   if (result.loginUserStatus.statusText === 'OK') {
      //     console.log(result);
      //   }
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
            id="email"
            name="email"
            label="E-Mail"
            type="email"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ marginTop: '20px', marginBottom: '10px' }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ marginTop: '20px', marginBottom: '10px' }}
          />
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
