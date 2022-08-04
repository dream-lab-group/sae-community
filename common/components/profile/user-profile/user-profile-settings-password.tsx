import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Directus } from '@directus/sdk';
import React from 'react';

export const UserProfileSettingsPassword = () => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const [isUpdated, setIsUpdated] = React.useState(false);

  const myProfileSettingsValidationSchema = yup.object({
    password: yup
      .string()
      .required('Darf nicht leer sein')
      .min(8, 'Dein Passwort muss mindestens 8 Zeichen lang sein.'),
    repeatpassword: yup
      .string()
      .required('Darf nicht leer sein')
      .oneOf([yup.ref('password'), null], 'Passwort stimmt nicht überein'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      repeatpassword: '',
    },
    validationSchema: myProfileSettingsValidationSchema,
    onSubmit: async (values: any) => {
      const directus = new Directus('https://www.whatthebre.com/');
      await directus.users.me.update({
        password: values.password,
      });
      setIsUpdated(true);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 'fontWeightBold',
          alignSelf: 'flex-start',
        }}
      >
        {t('profileSettings.profileSettings')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              name="password"
              label={t('profileSettings.password')}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              name="repeatpassword"
              label={t('profileSettings.newPassword')}
              type="password"
              value={formik.values.repeatpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.repeatpassword &&
                Boolean(formik.errors.repeatpassword)
              }
              helperText={
                formik.touched.repeatpassword && formik.errors.repeatpassword
              }
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
        </Grid>
        <Box>
          {isUpdated ? (
            <Typography sx={{ paddingTop: '1rem' }}>
              {t('profileSettings.updatedPassword')}
            </Typography>
          ) : (
            <></>
          )}
        </Box>
        <Button
          className="project-button-publish"
          variant="contained"
          type="submit"
          sx={{
            width: `${mdBreakpointDown ? '100%' : '170px'}`,
            marginTop: '20px',
            height: '56px',
          }}
        >
          {t('profileSettings.savePassword')}
        </Button>
      </form>
    </Box>
  );
};
