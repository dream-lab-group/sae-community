import {
      Box,
      Button,
      TextField,
      Typography,
      useMediaQuery,
      useTheme,
    } from '@mui/material';
    import { useRouter } from 'next/router';
    import { useTranslation } from 'react-i18next';
    
    import { UserProfileMyData } from '../../common/components/profile/user-profile-my-data';
    import { FileUpload } from '../../common/components/profile/file-upload';
    import { UserProfileBottomPart } from '../../common/components/profile/user-profile-bottom-part';
    import { SkillsInterests } from '../../common/components/profile/user-profile-skills-interests';
    import { SessionContextProps } from '.';

    export const ProfileSettings = ({ setSessionContext }: SessionContextProps) => {
      const { t } = useTranslation();
      const theme = useTheme();
      const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
      const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
      const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
      const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
      const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
      
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
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'fontWeightBold',
                  alignSelf: 'flex-start',
                }}
              >
                Profil Einstellungen
              </Typography>

            </Box>
        </>
      );
    };    