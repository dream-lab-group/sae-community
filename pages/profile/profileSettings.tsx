import {
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { ChangePassword } from '../../common/components/profile/user-profile-settings-password';
import { Notifications } from '../../common/components/profile/user-profile-settings-notifications';
import { DeleteProfile } from '../../common/components/profile/user-profile-settings-delete-profile';
import { SessionContextProps } from '.';

export const ProfileSettings = ({ setSessionContext }: SessionContextProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  
  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
  };

  return (
    <>
      {/* Content */}
      <Box
        sx={{
          paddingTop: '25px',
          paddingBottom: '50px',
          paddingX: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
        }}
      >
        <ChangePassword />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
        <Notifications />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
        <DeleteProfile />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
    </>
  );
};
