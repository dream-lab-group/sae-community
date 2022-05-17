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
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import { Globals } from '../../../utils';

export const SignUp = ({ setSessionContext }: SessionContextProps) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [checkedTermsOfUse, setCheckedTermsOfUse] = useState(false);

  const { t } = useTranslation();

  const handleCourseChange = (event: SelectChangeEvent) => {
    setSelectedCourse(event.target.value as string);
  };

  const handleTermsOfUseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedTermsOfUse(event.target.checked);
  };

  const handleSignUpSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSignUpSubmit}>
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
          sx={{ width: '100%', marginTop: ' 20px' }}
        />
        <TextField
          id="password"
          name="password"
          // @ts-expect-error Translation keys only exist during runtime
          label={t('loginRegistration.password')}
          type="password"
          variant="outlined"
          sx={{ width: '100%', marginTop: '20px' }}
        />
        <TextField
          id="repeatpassword"
          name="repeatpassword"
          // @ts-expect-error Translation keys only exist during runtime
          label={t('loginRegistration.repeatPassword')}
          type="password"
          variant="outlined"
          sx={{ width: '100%', marginTop: '20px' }}
        />
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel id="course">Fachrichtung</InputLabel>
          <Select
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
        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <Checkbox
            checked={checkedTermsOfUse}
            onChange={(event) => {
              handleTermsOfUseChange(event);
            }}
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
            SingUp
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
