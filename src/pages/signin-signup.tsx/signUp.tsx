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
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Globals } from '../../utils';
import { LoginContextProps } from './signIn-signUp';

export const SignUp = ({
  loginContext,
  setLoginContext,
}: LoginContextProps) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [checkedTermsOfUse, setCheckedTermsOfUse] = useState(false);
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { t } = useTranslation();

  const handleCourseChange = (event: SelectChangeEvent) => {
    setSelectedCourse(event.target.value as string);
  };

  const handleTermsOfUseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedTermsOfUse(event.target.checked);
  };

  return (
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
            {...register('first_name', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="first_name"
            name="first_name"
            label="Vorname"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.name && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              {t('error.loginRegistration.required')}
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '225px' }}>
          <TextField
            {...register('last_name', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="last_name"
            name="last_name"
            label="Nachname"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.lastname && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              {t('error.loginRegistration.required')}
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
        name="email"
        label="E-Mail"
        type="email"
        variant="outlined"
        sx={{ width: '100%', marginTop: ' 20px' }}
      />
      {errors.email && (
        <Typography
          color="error"
          sx={{ fontSize: '14px', marginBottom: '5px' }}
        >
          {t('error.loginRegistration.required')}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <TextField
          {...register('password', { required: true })}
          id="password"
          name="password"
          label="Passwort"
          type="password"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        {errors.password && (
          <Typography color="error" sx={{ fontSize: '14px' }}>
            {t('error.loginRegistration.required')}
          </Typography>
        )}
      </Box>
      <Controller
        name="course"
        control={control}
        render={() => (
          <FormControl fullWidth sx={{ marginTop: '20px' }}>
            <InputLabel id="course">Fachrichtung</InputLabel>
            <Select
              {...register('course')}
              labelId="course"
              id="course"
              name="course"
              label="Fachrictung"
              value={selectedCourse}
              onChange={(event) => {
                if (event) {
                  handleCourseChange(event);
                }
              }}
            >
              {Globals.allCourses.map((course) => (
                <MenuItem key={course} value={course}>
                  {/* @ts-ignore */}
                  {t(`courses.${course}.label`)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Box sx={{ display: 'flex', marginTop: '16px' }}>
        <Controller
          name="termsOfUse"
          control={control}
          defaultValue={false}
          render={() => (
            <Checkbox
              {...register('termsOfUse')}
              checked={checkedTermsOfUse}
              onChange={(event) => {
                handleTermsOfUseChange(event);
              }}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{ padding: 0, marginRight: '4px', alignSelf: 'flex-start' }}
            />
          )}
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
          {loginContext}
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
            onClick={() => setLoginContext('anmelden')}
          >
            Hier anmelden
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
