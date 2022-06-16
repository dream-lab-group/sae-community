import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Layout from '../../common/components/layout';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { SetStateAction, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';

import { EditMyProfile } from './myProfile';
import { ProfileSettings } from './profileSettings';

export type SessionContextProps = {
  setSessionContext?: React.Dispatch<SetStateAction<string>>;
};

const ProfileOverview = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [sessionContext, setSessionContext] = useState(false);

  const toggleFunc = () => {
    setSessionContext(!sessionContext);
  };

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Polygon */}
        <Box
          sx={{
            height: '60px',
            background: '#192D3E',
            width: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%);',
            display: 'flex',
          }}
        />
        {sessionContext === false ? <EditMyProfile /> : <ProfileSettings />}
        {/* Fixed Buttons */}
        <Box sx={{ zIndex:5, position: 'fixed', right: 0, top: `${lgBreakpointDown ? '150px' : '208px'}`, }}>
          <Box
            component="button"
            sx={{
              border: 'none',
              background: sessionContext ? '#e8e9eb' : '#bdbdbd',
              padding: `${lgBreakpointDown ? '0px' : '10px'}`,
              width: `${lgBreakpointDown ? '80px' : '147px'}`,
              height: `${lgBreakpointDown ? '50px' : '97px'}`,
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: `${lgBreakpointDown ? 'center' : 'flex-start'}`,
              flexDirection: 'column',
              cursor: 'pointer',
            }}
            onClick={toggleFunc}
          >
            <FaRegUser
              style={{
                margin: '10px',
                fontSize: `${lgBreakpointDown ? '22px' : '36px'}`,
              }}
            />
            <Typography
              sx={{
                fontSize: '14px',
                display: `${lgBreakpointDown ? 'none' : 'block'}`,
              }}
            >
              Mein Profil
            </Typography>
          </Box>

          <Box
            component="button"
            sx={{
              border: 'none',
              background: !sessionContext ? '#e8e9eb' : '#bdbdbd',
              padding: `${lgBreakpointDown ? '0px' : '10px'}`,
              width: `${lgBreakpointDown ? '80px' : '147px'}`,
              height: `${lgBreakpointDown ? '50px' : '97px'}`,
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: `${lgBreakpointDown ? 'center' : 'flex-start'}`,
              flexDirection: 'column',
              cursor: 'pointer',
            }}
            onClick={toggleFunc}
            /*                     onClick={handleCancelProfileSaving}
             */
          >
            <RiSettings3Line
              style={{
                margin: '10px',
                fontSize: `${lgBreakpointDown ? '24px' : '36px'}`,
              }}
            />
            <Typography
              sx={{
                fontSize: '14px',
                display: `${lgBreakpointDown ? 'none' : 'block'}`,
              }}
            >
              Profil Einstellungen
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

ProfileOverview.getLayout = function getLayout(page: typeof ProfileOverview) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default ProfileOverview;
