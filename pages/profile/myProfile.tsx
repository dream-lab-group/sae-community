import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { UserProfileMyData } from '../../common/components/profile/user-profile-my-data';
import { UserInformation } from '../../common/types/types';

type EditMyProfileProps = {
      userData:  UserInformation
}

export const EditMyProfile = ({userData}: EditMyProfileProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
  };

  /*   const [currentUser, setCurrentUser] = useState<any>('');
   */
  /*   useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      const userResponse = await apiClient.get(`users/${userId.id}`);
      if (userResponse.status === 200) {
        setCurrentUser(userResponse.data.data);
      }
    };
    getCurrentUser();
  }, [setCurrentUser]);

  console.log(currentUser); */
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
        <form>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'fontWeightBold',
              alignSelf: 'flex-start',
            }}
          >
            {t('profile.myProfile')}
          </Typography>
              <UserProfileMyData
                key={userData.id}
                first_name={userData.first_name}
                last_name={userData.last_name}
                email={userData.email}
                description={userData.description}
                course={userData.course}
              />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: `${mdBreakpointDown ? 'column' : 'row'}`,
              alignItems: 'center',
              justifyContent: `${smBreakpointUp && 'flex-end'}`,
              marginTop: `${mdBreakpointDown ? '0px' : '30px'}`,
            }}
          >
            <Button
              className="project-button-cancel"
              variant="contained"
              sx={{
                width: `${mdBreakpointDown ? '100%' : '250px'}`,
                marginTop: `${mdBreakpointDown && '30px'}`,
                height: '56px',
              }}
              onClick={handleCancelProfileSaving}
            >
              {t('general.cancel')}
            </Button>
            <Button
              className="project-button-publish"
              variant="contained"
              sx={{
                width: `${mdBreakpointDown ? '100%' : '350px'}`,
                marginTop: `${mdBreakpointDown && '20px'}`,
                height: '56px',
                marginLeft: `${mdBreakpointDown ? '' : '20px'}`,
              }}
            >
              {t('profileUpload.publishProfile')}
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};


/* // @ts-expect-error: Todo
EditMyProfile.getLayout = function getLayout(page: typeof EditMyProfile) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
}; */
/* export default EditMyProfile;
 */
