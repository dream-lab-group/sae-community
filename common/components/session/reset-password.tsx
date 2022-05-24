import {
  Button,
  TextField,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';
import { useFormik } from 'formik';
import { handleResetPassword } from '../../data/signup-signin/hooks';

const resetPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .email('Keine gültige E-Mail Adresse')
    .required('Darf nicht leer sein'),
});

export const ResetPassword = ({ setSessionContext }: SessionContextProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values: any) => {
      const response = await handleResetPassword({
        email: values.email,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          width: `${smBreakpointDown ? '242px' : '470px'}`,
          position: `${smBreakpointDown && 'relative'}`,
          left: `${smBreakpointDown && -9}`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: `${smBreakpointDown ? '20px' : '35px'}`,
          }}
        >
          {t('loginRegistration.forgotPassword')}
        </Typography>
        <Typography
          sx={{
            fontSize: `${smBreakpointDown ? '12px' : '20'}`,
            lineHeight: `${smBreakpointDown ? '14px' : '25px'}`,
            marginTop: `${smBreakpointDown ? '10px' : '7px'}`,
          }}
        >
          {t('loginRegistration.passwordResetInstruction')}
        </Typography>
        {smBreakpointDown ? (
          <TextField
            id="email"
            name="email"
            label="E-Mail"
            size="small"
            fullWidth
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ marginTop: '18px' }}
          />
        ) : (
          <TextField
            id="email"
            name="email"
            label="E-Mail"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ width: '100%', marginTop: '20px' }}
          />
        )}
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '100%',
            height: `${smBreakpointDown ? '40px' : '56px'}`,
            background: '#8519F6',
            marginTop: `${smBreakpointDown ? '18px' : '20px'}`,
          }}
        >
          {t('loginRegistration.resetPassword')}
        </Button>
        {smBreakpointDown ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              marginTop: '17px',
            }}
          >
            <Typography sx={{ fontSize: '12px' }}>
              {t('loginRegistration.rememberedPassword')}
            </Typography>
            <Button
              variant="text"
              sx={{
                padding: 0,
                fontFamily: `'Outift', sans-serif`,
                fontSize: '12px',
                marginLeft: '5px',
                fontWeight: 700,
                color: '#000',
                textTransform: 'none',
              }}
              onClick={() => setSessionContext('signin')}
            >
              {t('loginRegistration.login')}
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: '20px',
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>
              {t('loginRegistration.rememberedPassword')}
            </Typography>
            <Button
              variant="text"
              sx={{
                padding: 0,
                fontFamily: `'Outift', sans-serif`,
                fontSize: '14px',
                marginLeft: '5px',
                fontWeight: 700,
                color: '#000',
                textTransform: 'none',
              }}
              onClick={() => setSessionContext('signin')}
            >
              {t('loginRegistration.login')}
            </Button>
          </Box>
        )}
      </Box>
    </form>
  );
};
