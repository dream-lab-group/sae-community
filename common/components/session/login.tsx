import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import * as yup from 'yup';
import { useFormik } from 'formik';
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
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpoinUp = useMediaQuery(theme.breakpoints.up('sm'));

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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: `${smBreakpointDown && '240px'}`,
            position: `${smBreakpointDown && 'relative'}`,
            left: `${smBreakpointDown && '9px'}`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: `${smBreakpointDown ? '20px' : '35px'}`,
            }}
          >
            {t('loginRegistration.welcomeBack')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: `${smBreakpointDown ? '16px' : '20px'}`,
              marginTop: '7px',
            }}
          >
            {t('general.saeCommunityPlatform')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {smBreakpointDown ? (
              <>
                <TextField
                  id="email"
                  name="email"
                  label="E-Mail"
                  fullWidth
                  size="small"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{ marginTop: '15px' }}
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  size="small"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{ marginTop: '15px', marginBottom: '15px' }}
                />
              </>
            ) : (
              <>
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
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{ marginTop: '20px', marginBottom: '10px' }}
                />
              </>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: `${smBreakpoinUp && '470px'}`,
                height: `${smBreakpointDown ? '40px' : '56px'}`,
                marginTop: `${smBreakpoinUp && '20px'}`,
                fontSize: `${smBreakpointDown && '12px'}`,
                background: '#8519F6',
              }}
            >
              {t('loginRegistration.loginNoW')}
            </Button>
            <Box
              sx={{
                width: `${smBreakpoinUp && '100%'}`,
                display: 'flex',
                alignItems: 'center',
                flexDirection: `${smBreakpointDown && 'column'}`,
                marginTop: `${smBreakpointDown ? '17px' : '21px'}`,
                justifyContent: `${
                  smBreakpointDown ? 'center' : 'space-between'
                }`,
              }}
            >
              {smBreakpointDown && (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {t('loginRegistration.noAccount')}
                    </Typography>
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{
                        padding: 0,
                        fontFamily: `'Outfit', sans-serif`,
                        fontWeight: 700,
                        color: '#000',
                        fontSize: '12px',
                        textTransform: 'none',
                        marginLeft: '5px',
                        whiteSpace: 'nowrap',
                      }}
                      onClick={() => setSessionContext('signup')}
                    >
                      {t('loginRegistration.register')}
                    </Button>
                  </Box>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{
                      padding: 0,
                      fontFamily: `'Outfit', sans-serif`,
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#000',
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onClick={() => setSessionContext('reset-password')}
                  >
                    {t('loginRegistration.forgotPassword')}
                  </Button>
                </>
              )}
              {smBreakpoinUp && (
                <>
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{
                      padding: 0,
                      fontFamily: `'Outfit', sans-serif`,
                      fontSize: `${smBreakpointDown ? '12px' : '14px'}`,
                      fontWeight: 700,
                      color: '#000',
                      textTransform: 'none',
                      whiteSpace: `${smBreakpointDown && 'nowrap'}`,
                    }}
                    onClick={() => setSessionContext('reset-password')}
                  >
                    {t('loginRegistration.forgotPassword')}
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                      {t('loginRegistration.noAccount')}
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
                        whiteSpace: `${smBreakpointDown && 'nowrap'}`,
                      }}
                      onClick={() => setSessionContext('signup')}
                    >
                      {t('loginRegistration.register')}
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleClose}
          sx={{ padding: `${smBreakpointDown ? '2em' : ''}` }}
        >
          <Alert
            severity="error"
            variant="filled"
            onClose={handleClose}
            sx={{ fontSize: `${smBreakpointDown ? '10px' : ''}` }}
          >
            {t('error.loginRegistration.loginError')}
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
};
