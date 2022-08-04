import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Router, withRouter } from 'next/router';
import Layout from '../../common/components/layout';
import { LastProjects } from '../../common/components/profile/last-projects';
import { UserDescription } from '../../common/components/profile/user-description';
import { UserInformation } from '../../common/components/profile/user-information';
import { UserInterest } from '../../common/components/profile/user-interest';
import { UserSkills } from '../../common/components/profile/user-skills';
import { Globals } from '../../common/utils/utils';
import { FiMail } from 'react-icons/fi';
import { directus } from '..';
import { apiClient } from '../../common/data/apiClient';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { NextPage } from 'next';

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
  const breakpointBetweenMdLg = useMediaQuery(
    theme.breakpoints.between('md', 'lg'),
  );
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

  const userId = router.asPath.split('/').at(-1);
  const [currentUser, setCurrentUser] = useState<any>('');

  useEffect(() => {
    const getCurrentUser = async () => {
      if (userId !== '[id]') {
        const userResponse = await apiClient.get(`users/${userId}`);
        if (userResponse.status === 200) {
          console.log(userResponse.data.data);
          setCurrentUser(userResponse.data.data);
        }
      }
    };
    getCurrentUser();
  }, [setCurrentUser, userId]);

  if (currentUser) {
    console.log(currentUser);
    return (
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
              smBreakpointDown ? '381px' : lgBreakpointDown ? '774px' : '1150px'
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
                    (interest: { label: string; interests: string }) => {
                      return (
                        <UserInterest
                          key={interest.label}
                          userInterestElement={interest.interests}
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
          <LastProjects currentUser={currentUser} />
        </Box>
        {breakpointBetweenMdLg ? (
          <ButtonBase
            sx={{
              position: 'fixed',
              right: 0,
              top: 160,
              height: '50px',
              width: '220px',
              display: 'flex',
              justifyContent: 'space-around',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
              background: '#D0A3BF',
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                width: '25%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FiMail size={25} />
            </Box>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                width: '75%',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
              }}
            >
              <Typography> {t('profile.contactNow')}</Typography>
            </Box>
          </ButtonBase>
        ) : (
          <></>
        )}
      </Box>
    );
  }
});

// @ts-expect-error: Todo
MyProfile.getLayout = function getLayout(page: typeof MyProfile) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyProfile;
