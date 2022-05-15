import { Box, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ResetPassword } from '../../common/components/session/reset-password';
import { SignIn } from '../../common/components/session/sign-in';
import { SignUp } from '../../common/components/session/sign-up';

export type SessionContextProps = {
  setSessionContext: React.Dispatch<SetStateAction<string>>;
};

const Session: NextPage = () => {
  const { t } = useTranslation();

  const [sessionContext, setSessionContext] = useState('signin');

  return (
    <Grid
      container
      sx={{
        width: 'auto',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        sx={{ height: '100vh', position: 'relative' }}
      >
        <Box
          sx={{
            height: ' 100%',
            width: ' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {sessionContext === 'signin' ? (
            <SignIn setSessionContext={setSessionContext} />
          ) : sessionContext === 'signup' ? (
            <SignUp setSessionContext={setSessionContext} />
          ) : (
            <ResetPassword setSessionContext={setSessionContext} />
          )}
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            position: 'absolute',
            bottom: '35px',
            left: '37px',
          }}
        >
          © dream lab 2022
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          height: '100vh',
          background: `linear-gradient(180deg, #CF2CF6 -2.46%, #7514F5 59.27%)`,
          width: '19px',
        }}
      />
      <Grid item xs sx={{ background: '#192D3E', height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: ' center',
          }}
        >
          <Box sx={{ display: 'inherit', flexDirection: 'column' }}>
            <Typography
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '0.04em',
              }}
            >
              {t('general.platformForStudents')}
            </Typography>
            <Typography
              color="white"
              sx={{
                fontWeight: 600,
                fontSize: '40px',
                letterSpacing: '0.04em',
              }}
            >
              {t('general.fromStudents')}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Session;
