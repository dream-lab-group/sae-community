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
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { directus, token } from '../../../pages';
import { SessionContextProps } from '../../../pages/signin';

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

export const LogIn = ({
  setSessionContext,
  openSnackbar,
  setOpenSnackbar,
  errorMessage,
  setErrorMessage,
  handleCloseSnackbar,
}: SessionContextProps) => {
  const router = useRouter();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  useEffect(() => {
    //redirect to home if aleady logged in
    if (token) {
      router.push('/');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values: any) => {
      setErrorMessage(undefined);
      await directus.auth
        .login(values)
        .then(() => {
          // get return url from query parameters or default to '/'
          const returnUrl = router.query.returnUrl || '/';
          // @ts-expect-error: todo
          router.push(returnUrl);
          window.location.reload();
        })
        .catch((reason) => {
          if (reason.errors[0].message === 'Invalid user credentials.') {
            setErrorMessage(
              'Ungültige Anmeldeinformationen. Bitte versuche es erneut.',
            );
            setOpenSnackbar(true);
          } else if (reason.errors[0].message === 'User suspended.') {
            setErrorMessage(
              'Account wurde blockiert wegen zu vielen fehlgeschlagenen Anmeldeversuche. Bitte melde dich ans Admin-Team',
            );
            setOpenSnackbar(true);
          }
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
        maxWidth: `${smBreakpointUp ? '470px' : '240px'}`,
        position: `${smBreakpointDown && 'relative'}`,
        left: `${smBreakpointDown && -9}`,
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: `${smBreakpointUp && '10px'}`,
            }}
          >
            <Box>
              <TextField
                id="email"
                name="email"
                label="E-Mail"
                fullWidth
                size={smBreakpointDown ? 'small' : 'medium'}
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
                size={smBreakpointDown ? 'small' : 'medium'}
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{ marginTop: '15px', marginBottom: '15px' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button
                className="primary-button"
                variant="contained"
                type="submit"
                sx={{
                  width: `${smBreakpointUp && '470px'}`,
                  height: `${smBreakpointDown ? '40px' : '56px'}`,
                  marginTop: `${smBreakpointUp && '20px'}`,
                  fontSize: `${smBreakpointDown && '12px'}`,
                }}
              >
                {t('loginRegistration.loginNoW')}
              </Button>
              <Box
                sx={{
                  width: `${smBreakpointUp && '100%'}`,
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
                      <Typography
                        sx={{ fontSize: '12px', whiteSpace: 'nowrap' }}
                      >
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
                {smBreakpointUp && (
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
            onClose={handleCloseSnackbar}
            sx={{ padding: `${smBreakpointDown ? '2em' : ''}` }}
          >
            <Alert
              severity="error"
              variant="filled"
              onClose={handleCloseSnackbar}
              sx={{ fontSize: `${smBreakpointDown ? '10px' : ''}` }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </Box>
  );
};
