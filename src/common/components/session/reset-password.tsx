import { Button, TextField, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';

export const ResetPassword = ({ setSessionContext }: SessionContextProps) => {
  const { t } = useTranslation();

  return (
    <form>
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
    </form>
  );
};
