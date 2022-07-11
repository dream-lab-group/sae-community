import {
  Box,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Layout from '../../common/components/layout';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { SetStateAction, useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';

import { ProfileSettings } from './profileSettings';
import { NextPage } from 'next';
import { directus } from '..';
import { apiClient } from '../../common/data/apiClient';
import { UserInformation } from '../../common/types/types';
import { EditMyProfile } from './myProfile';
/* import { UserProfileUrls } from '../../common/components/profile/user-profile-urls';
 */
export type SessionContextProps = {
  setSessionContext?: React.Dispatch<SetStateAction<string>>;
};

const ProfileOverview: NextPage<{ data: UserInformation }> = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [sessionContext, setSessionContext] = useState(false);

  const toggleFunc = () => {
    setSessionContext(!sessionContext);
  };

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
  };

  const [currentUser, setCurrentUser] = useState<any>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      const userResponse = await apiClient.get(`users/${userId.id}`);
      if (userResponse.status === 200) {
        setCurrentUser(userResponse.data.data);
        setIsLoading(false);
        console.log(userResponse.data.data)
      }
    };
    getCurrentUser();
  }, [setCurrentUser]);

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: '10px',
            marginBottom: `${smBreakpointDown && '20px'}`,
            height: '100%',
            width: '100%',
          }}
        />
      ) : (
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
          {sessionContext === false ? (
            <>
            <EditMyProfile userData={currentUser} />
            {/* <UserProfileUrls userData={currentUser} /> */}
            </>
          ) : (
            <ProfileSettings />
          )}
          {/* Fixed Buttons */}
          <Box
            sx={{
              zIndex: 5,
              position: 'fixed',
              right: 0,
              top: `${lgBreakpointDown ? '150px' : '208px'}`,
            }}
          >
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
      )}
    </>
  );
};

// @ts-expect-error:  todo
ProfileOverview.getLayout = function getLayout(page: typeof ProfileOverview) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default ProfileOverview;
