import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import { Globals } from '../../../utils';

const signUpValidationSchema = yup.object({
  first_name: yup.string().required('Bitte Vorname angeben'),
  last_name: yup.string().required('Bitte Nachname angeben'),
  email: yup
    .string()
    .email('Keine gültige E-Mail Adresse')
    .required('Darf nicht leer sein'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Darf nicht leer sein'),
  repeatpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwort stimmt nicht überein'),
  course: yup.string().required('Bitte ein Fachrichtung auswählen'),
  termsOfUse: yup.boolean().oneOf([true]),
});

export const SignUp = ({ setSessionContext }: SessionContextProps) => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      repeatpassword: '',
      course: '',
      termsOfUse: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { t } = useTranslation();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ width: '470px' }}>
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
          {t('loginRegistration.createAccount')}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 400, fontSize: '20px', marginTop: '7px' }}
        >
          {t('general.saeCommunityPlatform')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            marginTop: '37px',
          }}
        >
          <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
            <TextField
              id="first_name"
              name="first_name"
              // @ts-expect-error Translation keys only exist during runtime
              label={t('loginRegistration.firstname')}
              variant="outlined"
              sx={{ width: '225px' }}
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
          </Box>
          <Box sx={{ width: '225px' }}>
            <TextField
              id="last_name"
              name="last_name"
              // @ts-expect-error Translation keys only exist during runtime
              label={t('loginRegistration.lastname')}
              variant="outlined"
              sx={{ width: '225px' }}
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Box>
        </Box>
        <TextField
          id="email"
          name="email"
          // @ts-expect-error Translation keys only exist during runtime
          label={t('loginRegistration.email')}
          type="email"
          variant="outlined"
          fullWidth
          sx={{ marginTop: ' 20px' }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          // @ts-expect-error Translation keys only exist during runtime
          label={t('loginRegistration.password')}
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginTop: '20px' }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          id="repeatpassword"
          name="repeatpassword"
          // @ts-expect-error Translation keys only exist during runtime
          label={t('loginRegistration.repeatPassword')}
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginTop: '20px' }}
          value={formik.values.repeatpassword}
          onChange={formik.handleChange}
          error={
            formik.touched.repeatpassword &&
            Boolean(formik.errors.repeatpassword)
          }
          helperText={
            formik.touched.repeatpassword && formik.errors.repeatpassword
          }
        />
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel id="course">Fachrichtung</InputLabel>
          <Select
            labelId="course"
            id="course"
            name="course"
            label="Fachrictung"
            value={formik.values.course}
            onChange={formik.handleChange}
            error={formik.touched.course && Boolean(formik.errors.course)}
          >
            {Globals.allCourses.map((course) => (
              <MenuItem key={course} value={course}>
                {/* @ts-expect-error Translation keys only exist during runtime */}
                {t(`courses.${course}.label`)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <Checkbox
            checked={formik.values.termsOfUse}
            onChange={formik.handleChange}
            name="termsOfUse"
            required
            aria-label="termsOfUse"
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ padding: 0, marginRight: '4px', alignSelf: 'flex-start' }}
          />
          <Typography sx={{ fontSize: '12px', lineHeight: '15px' }}>
            {t('loginRegistration.termsOfUse')}
          </Typography>
        </Box>
        <Box
          sx={{
            diplay: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: '470px',
              height: '56px',
              marginTop: '34px',
              background: '#8519F6',
            }}
          >
            {/* @ts-expect-error Translation keys only exist during runtime */}
            {t('loginRegistration.signup')}
          </Button>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '21px',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>
              {t('loginRegistration.noAccount')}
            </Typography>
            <Button
              variant="text"
              sx={{
                padding: 0,
                fontFamily: `'Outfit', sans-serif`,
                fontSize: '14px',
                marginLeft: '5px',
                fontWeight: 700,
                color: '#000',
                textTransform: 'none',
              }}
              onClick={() => setSessionContext('signin')}
            >
              Hier anmelden
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
