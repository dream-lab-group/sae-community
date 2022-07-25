import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UserInformation } from '../../../types/types';

type EditProfileSettingsProps = {
      userData: UserInformation;
}

export const UserProfileSettingsNotifications = ({userData}: EditProfileSettingsProps)  => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation();

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
        Benachrichtungen
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: '16px 0 5px 0' }}>
          Sende mir eine E-Mail, wenn:
        </Typography>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="jemand mein Projekt kommentiert"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="jemand erwähnt mich in seinem Projekt"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="jemand liked mein Projekt"
        />
      </Box>
      <Button
        className="project-button-publish"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '400px'}`,
          marginTop: '20px',
          height: '56px',
          /* marginLeft: `${mdBreakpointDown ? '' : '20px'}`, */
        }}
      >
        {t('profileSettings.notifications')}
      </Button>
    </Box>
  );
};
