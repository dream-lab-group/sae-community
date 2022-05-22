import {
  Button,
  TextField,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';

export const ResetPassword = ({ setSessionContext }: SessionContextProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();

  return (
    <form>
      {smBreakpointDown ? (
        <Box sx={{ width: '242px', position: 'relative', left: -9 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '20px' }}>
            Passwort vergessen?
          </Typography>
          <Typography
            sx={{ fontSize: '12px', lineHeight: '14px', marginTop: '10px' }}
          >
            {t('loginRegistration.passwordResetInstruction')}
          </Typography>
          <TextField
            id="email"
            label="E-Mail"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ marginTop: '18px' }}
          />
          <Button
            variant="contained"
            color="error"
            type="submit"
            sx={{
              width: '100%',
              height: '40px',
              background: '#8519F6',
              fontSize: '12px',
              marginTop: '17px',
            }}
          >
            {t('loginRegistration.resetPassword')}
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
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
        </Box>
      ) : (
        <Box sx={{ width: '470px' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
            Passwort vergessen?
          </Typography>
          <Typography
            sx={{ fontSize: '20px', lineHeight: '25px', marginTop: '7px' }}
          >
            {t('loginRegistration.passwordResetInstruction')}
          </Typography>
          <TextField
            id="email"
            label="E-Mail"
            variant="outlined"
            sx={{ width: '100%', marginTop: '34px' }}
          />
          <Button
            variant="contained"
            color="error"
            type="submit"
            sx={{
              width: '100%',
              height: '56px',
              background: '#8519F6',
              marginTop: '20px',
            }}
          >
            password Zürucksetzen
          </Button>
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
        </Box>
      )}
    </form>
  );
};
