import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../common/components/layout';
import { LastProjects } from '../../common/components/profile/last-projects';
import { UserDescription } from '../../common/components/profile/user-description';
import { UserInformation } from '../../common/components/profile/user-information';
import { UserInterest } from '../../common/components/profile/user-interest';
import { UserSkills } from '../../common/components/profile/user-skills';
import { Globals } from '../../common/utils/utils';
import { FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const MyProfile = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const breakpointBetweenMdLg = useMediaQuery(
    theme.breakpoints.between('md', 'lg'),
  );
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

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
              smBreakpointDown ? '381px' : lgBreakpointDown ? '774px' : '600px'
            }`,
          }}
        >
          <UserInformation />
          <UserDescription />
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
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
            {Globals.userSkills.map((userSkillsElement) => (
              <UserSkills
                key={userSkillsElement}
                userSkillsElement={userSkillsElement}
              />
            ))}
          </Box>
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
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
            {Globals.userInterests.map((userInterestElement) => (
              <UserInterest
                key={userInterestElement}
                userInterestElement={userInterestElement}
              />
            ))}
          </Box>
        </Box>
        <LastProjects />
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
};

MyProfile.getLayout = function getLayout(page: typeof MyProfile) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyProfile;
