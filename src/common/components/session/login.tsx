import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { loginUser } from '../../data/signup-signin/request';
import { useState } from 'react';
import { Directus } from '@directus/sdk';

const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Keine gültige E-Mail Adresse')
    .required('Darf nicht leer sein'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Darf nicht leer sein'),
});

type MyToken = {
  token: string;
};

export const LogIn = ({ setSessionContext }: SessionContextProps) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { t } = useTranslation();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values: any) => {
      const directus = new Directus<MyToken>('http://146.190.227.58');

      await directus.auth
        .login(values)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          setOpenSnackbar(true);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ marginTop: '20px', marginBottom: '10px' }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert severity="error" variant="filled" onClose={handleClose}>
            {t('error.loginRegistration.loginError')}
          </Alert>
        </Snackbar>
      </form>
    </>
  );
};
