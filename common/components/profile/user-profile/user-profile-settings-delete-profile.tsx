import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UserInformation } from '../../../types/types';

type EditProfileSettingsProps = {
      userData: UserInformation;
}

export const UserProfileSettingsDeleteProfile = ({userData}: EditProfileSettingsProps) => {
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
        Profil löschen
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: '16px 0 5px 0' }}>
          Möchtest du dein Konto löschen? <br />
          Wenn du dein Konto löschst, werden auch alle damit verbundenen
          Projekte entfernt.
        </Typography>
      </Box>
      <Button
        className="project-button-publish"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '210px'}`,
          marginTop: '20px',
          height: '56px',
          /* marginLeft: `${mdBreakpointDown ? '' : '20px'}`, */
        }}
      >
        {t('profileSettings.deleteProfile')}
      </Button>
    </Box>
  );
};
