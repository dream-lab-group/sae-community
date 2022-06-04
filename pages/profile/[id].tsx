import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../common/components/layout';
import { LastProjects } from '../../common/components/profile/last-projects';
import { UserDescription } from '../../common/components/profile/user-description';
import { UserInformation } from '../../common/components/profile/user-information';
import { UserInterest } from '../../common/components/profile/user-interest';
import { UserSkills } from '../../common/components/profile/user-skills';
import { Globals } from '../../common/utils/utils';

const MyProfile = () => {
  const router = useRouter();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '60px',
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
          paddingX: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
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
          Programm Skills
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
          Interessen
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
          {Globals.userInterests.map((userInterestElement) => (
            <UserInterest
              key={userInterestElement}
              userInterestElement={userInterestElement}
            />
          ))}
        </Box>
        <LastProjects />
      </Box>
    </Box>
  );
};

MyProfile.getLayout = function getLayout(page: typeof MyProfile) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default MyProfile;
