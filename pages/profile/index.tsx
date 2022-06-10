import {
  Box,
  Button,
  ButtonBase,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { FaRegUser } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';
import { SetStateAction, useState } from 'react';

import { UserProfileMyData } from '../../common/components/profile/user-profile-my-data';
import { FileUpload } from '../../common/components/profile/file-upload';
import { UserProfileBottomPart } from '../../common/components/profile/user-profile-bottom-part';
import { SkillsInterests } from '../../common/components/profile/user-profile-skills-interests';
import { EditMyProfile } from './myProfile';
import { ProfileSettings } from './profileSettings';

export type SessionContextProps = {
  setSessionContext?: React.Dispatch<SetStateAction<string>>;
};

const Project = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

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
        <Box sx={{ position: 'fixed', right: 0, top: 78 }}>
          <Box
            component="button"
            sx={{
              border: 'none',
              background: sessionContext ? '#e8e9eb' : '#bdbdbd',
              padding: '10px',
              width: '147px',
              height: '97px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={toggleFunc}
          >
            <FaRegUser size={36} style={{ margin: '10px' }} />
            <Typography sx={{ fontSize: '14px' }}>Mein Profil</Typography>
          </Box>

          <Box
            component="button"
            sx={{
              background: !sessionContext ? '#e8e9eb' : '#bdbdbd',
              border: 'none',
              padding: '10px',
              width: '147px',
              height: '97px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={toggleFunc}
            /*                     onClick={handleCancelProfileSaving}
             */
          >
            <RiSettings3Line size={36} style={{ margin: '10px' }} />
            <Typography sx={{ fontSize: '14px' }}>
              Profil Einstellungen
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Project;
