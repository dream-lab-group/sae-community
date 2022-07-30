import { Directus } from '@directus/sdk';
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { directus } from '../../../../pages';
import { apiClient } from '../../../data/apiClient';
import { deleteFiles } from '../../../data/delete-profile/requests';
import { UserInformation } from '../../../types/types';

type EditProfileSettingsProps = {
  userData: UserInformation;
};

export const UserProfileSettingsDeleteProfile = ({
  userData,
}: EditProfileSettingsProps) => {
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
        {t('profileSettings.deleteProfile')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: '16px 0 5px 0' }}>
          {t('profileSettings.confirmationDeleteProfile')}
          <br />
          {t('profileSettings.confirmationDeleteProfileBottom')}
        </Typography>
      </Box>
      <Button
        className="project-button-publish"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '210px'}`,
          marginTop: '20px',
          height: '56px',
        }}
        onClick={deleteFiles}
      >
        {t('profileSettings.deleteProfile')}
      </Button>
    </Box>
  );
};
