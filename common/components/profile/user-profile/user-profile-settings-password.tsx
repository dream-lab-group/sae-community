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
import { UserInformation } from '../../../types/types';
import { useFormik } from 'formik';
import * as yup from 'yup';

type EditProfileSettingsProps = {
  userData: UserInformation;
};

export const UserProfileSettingsPassword = ({
  userData
}: EditProfileSettingsProps) => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const myProfileSettingsValidationSchema = yup.object({
    password: yup
      .string()
      .min(8, 'Dein Passwort muss mindestens 8 Zeichen lang sein.'),
    repeatpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwort stimmt nicht überein'),
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      repeatpassword: ""
    },
    onSubmit: async (values: any) => {
      console.log(values);
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
        Profil Einstellungen
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              name="password"
              label="Neues Passwort"
              type="password"
              onChange={formik.handleChange}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              name="password"
              label="Bestätige dein neues Passwort"
              type="password"
              onChange={formik.handleChange}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
        </Grid>
        <Button
          className="project-button-publish"
          variant="contained"
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
