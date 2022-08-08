import {
  Box,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme, directus } from '..';
import Layout from '../../common/components/layout';
import { LastProjects } from '../../common/components/profile/last-projects';
import { UserDescription } from '../../common/components/profile/user-description';
import { UserInformation } from '../../common/components/profile/user-information';
import { UserInterest } from '../../common/components/profile/user-interest';
import { UserSkills } from '../../common/components/profile/user-skills';
import { apiClient } from '../../common/data/apiClient';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

// @ts-expect-error: Todo
const MyProfile: NextPage = withRouter<Props>(({ router }: PropsWithRouter) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

  const EditProfile = () => {
    router.push('/profile');
  };
  const userId = router.asPath.split('/').at(-1);
  const [currentUser, setCurrentUser] = useState<any>('');
  const [readMe, setReadMe] = useState<any>('');

  useEffect(() => {
    const getCurrentUser = async () => {
      if (userId !== '[id]') {
        const userResponse = await apiClient.get(`users/${userId}`);
        if (userResponse.status === 200) {
          setCurrentUser(userResponse.data.data);
        }
      }
    };
    getCurrentUser();
  }, [setCurrentUser, userId]);

  useEffect(() => {
    const readMe = async () => {
      const readCurrentUser = await directus.users.me.read();
      const response = await apiClient.get(`users/${readCurrentUser.id}`);
      if (response.status === 200) {
        setReadMe(response.data.data);
      }
    };
    readMe();
  }, [setReadMe]);

  if (currentUser) {
    return (
      // @ts-expect-error: Todo
      <ThemeProvider theme={appTheme}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '60px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              height: '80px',
              background: '#192D3E',
              width: '100%',
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%);',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: `${lgBreakpointDown && 'column'}`,
              alignItems: `${lgBreakpointDown && 'center'}`,
              maxWidth: `${
                smBreakpointDown
                  ? '381px'
                  : lgBreakpointDown
                  ? '774px'
                  : '1150px'
              }`,
              paddingX: `${
                smBreakpointDown ? '20px' : lgBreakpointDown ? '60px' : '40px'
              }`,
              justifyContent: `${lgBreakpointUp && 'space-between'}`,
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: `${
                  smBreakpointDown
                    ? '381px'
                    : lgBreakpointDown
                    ? '774px'
                    : '600px'
                }`,
              }}
            >
              <UserInformation currentUser={currentUser} />
              <UserDescription currentUser={currentUser} />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  marginTop: '30px',
                  width: '100%',
                }}
              >
                {t('profile.programSkills')}
              </Typography>
              {currentUser.programs !== null ? (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'flex-start',
                      width: '100%',
                      marginTop: '20px',
                    }}
                  >
                    {currentUser.programs.map(
                      (program: { label: string; program: string }) => (
                        <UserSkills
                          key={program.label}
                          userSkillsElement={program.program}
                        />
                      ),
                    )}
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}
                  >
                    <Typography>
                      {t('profile.noData')} {t('profile.programs')}
                    </Typography>
                  </Box>
                </>
              )}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  marginTop: '30px',
                  width: '100%',
                }}
              >
                {t('profile.interests')}
              </Typography>
              {currentUser.interests !== null ? (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'flex-start',
                      width: '100%',
                      marginTop: '20px',
                    }}
                  >
                    {currentUser.interests.map(
                      (interest: { label: string; interest: string }) => {
                        return (
                          <UserInterest
                            key={interest.label}
                            userInterestElement={interest.interest}
                          />
                        );
                      },
                    )}
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}
                  >
                    <Typography>
                      {t('profile.noData')} {t('profile.noInterests')}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
            <LastProjects currentUser={currentUser} readMe={readMe} />
          </Box>
          {lgBreakpointDown ? (
            <>
              {userId === readMe.id && (
                <Typography
                  onClick={EditProfile}
                  sx={{
                    position: 'absolute',
                    right: `${mdBreakpointDown ? '50px' : '45px'}`,
                    //   right: 250,
                    top: 55,
                    fontSize: '20px',
                    alignSelf: 'flex-start',
                    background: '#7514f5',
                    width: '10rem',
                    padding: '.5rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    marginTop: '100px',
                  }}
                >
                  {t('profile.editProfile')}
                </Typography>
              )}
            </>
          ) : (
            <></>
          )}
        </Box>
      </ThemeProvider>
    );
  }
});

MyProfile.getLayout = function getLayout(page: typeof MyProfile) {
  return <Layout>{page}</Layout>;
};

export default MyProfile;
