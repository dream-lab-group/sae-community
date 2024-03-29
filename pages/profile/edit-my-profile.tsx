import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { directus } from '..';
import { UserProfileMyData } from '../../common/components/profile/user-profile/user-profile-my-data';
import { SkillsInterests } from '../../common/components/profile/user-profile/user-profile-skills-interests';
import { UserProfileUrls } from '../../common/components/profile/user-profile/user-profile-urls';
import { UserAvatar, UserInformation } from '../../common/types/types';

type EditMyProfileProps = {
  userData: UserInformation;
  userAvatar: UserAvatar;
};

const EditMyProfile = ({ userData, userAvatar }: EditMyProfileProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  const [avatarFile, setAvatarFile] = useState<any>([]);
  const [changedAvatar, setChangedAvatar] = useState<boolean>(false);

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push(`/public-profile/${userData.id}`);
  };

  const myProfilValidationSchema = yup.object({
    first_name: yup
      .string()
      .required('Ein Vorname muss unbedingt eingegeben werden.')
      .min(2, 'Der Vorname muss mindestens 2 Zeichen lang sein.'),
    last_name: yup
      .string()
      .required('Ein Nachname muss unbedingt eingegeben werden.')
      .min(2, 'Der Nachname muss mindestens 2 Zeichen lang sein.'),
    avatar: yup.object().nullable(true),
    email: yup
      .string()
      .required('Ein E-Mail-Adresse muss unbedingt eingegeben werden.')
      .min(3, 'Deine E-Mail-Adresse muss mindestens 3 Zeichen lang sein.')
      .email('Deine E-Mail-Adresse muss gültig sein'),
    description: yup
      .string()
      .min(2, 'Deine Beschreibung muss mindestens 2 Zeichen lang sein.')
      .nullable(true),
    course: yup
      .string()
      .required('Eine Fachrichtung muss unbedingt eingegeben werden.'),
    url_website: yup
      .string()
      .matches(
        /^(www\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        'Bitte gib einen URL ein. Beispielsweise: www.sai.ch (ohne http:// oder https://)',
      )
      .nullable(true),
    url_youtube: yup
      .string()
      .matches(
        /^(www\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        'Bitte gib einen URL ein. Beispielsweise: www.sai.ch (ohne http:// oder https://)',
      )
      .nullable(true),
    url_instagram: yup
      .string()
      .matches(
        /^(www\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        'Bitte gib einen URL ein. Beispielsweise: www.sai.ch (ohne http:// oder https://)',
      )
      .nullable(true),
    url_linkedin: yup
      .string()
      .matches(
        /^(www\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        'Bitte gib einen URL ein. Beispielsweise: www.sai.ch (ohne http:// oder https://)',
      )
      .nullable(true),
  });

  return (
    <>
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
        <Formik
          validationSchema={myProfilValidationSchema}
          initialValues={{
            first_name: userData.first_name,
            last_name: userData.last_name,
            avatar: userData.avatar,
            email: userData.email,
            description: userData.description,
            course: userData.course,
            url_website: userData.url_website,
            url_youtube: userData.url_youtube,
            url_instagram: userData.url_instagram,
            url_linkedin: userData.url_linkedin,
            programs: userData.programs,
            interests: userData.interests,
            user_files: null,
          }}
          onSubmit={async (values: any) => {
            if (changedAvatar == true) {
              const formData = new FormData();
              formData.append('file', avatarFile[0]);
              const avatarId = await directus.files.createOne(formData);

              if (avatarId) {
                await directus.users.me.update({
                  first_name: values.first_name,
                  last_name: values.last_name,
                  avatar: avatarId.id,
                  email: values.email,
                  description: values.description,
                  course: values.course,
                  url_website: values.url_website,
                  url_youtube: values.url_youtube,
                  url_instagram: values.url_instagram,
                  url_linkedin: values.url_linkedin,
                  programs: values.programs,
                  interests: values.interests,
                });
                router.push(`/public-profile/${userData.id}`);
              }
            } else {
              await directus.users.me.update({
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                description: values.description,
                course: values.course,
                url_website: values.url_website,
                url_youtube: values.url_youtube,
                url_instagram: values.url_instagram,
                url_linkedin: values.url_linkedin,
                programs: values.programs,
                interests: values.interests,
              });
              router.push(`/public-profile/${userData.id}`);
            }
          }}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
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
                formik={formikProps}
                avatarFile={avatarFile}
                setAvatarFile={setAvatarFile}
                setChangedAvatar={setChangedAvatar}
                userAvatar={userAvatar}
              />
              <UserProfileUrls
                formik={formikProps}
                url_website={formikProps.values.url_website}
                url_youtube={formikProps.values.url_youtube}
                url_instagram={formikProps.values.url_instagram}
                url_linkedin={formikProps.values.url_linkedin}
              />
              <SkillsInterests
                currentPrograms={formikProps.values.programs}
                currentInterests={formikProps.values.interests}
                formik={formikProps}
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
                  type="submit"
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
          )}
        </Formik>
      </Box>
    </>
  );
};

export default EditMyProfile;
