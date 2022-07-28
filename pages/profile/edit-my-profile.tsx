import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { UserProfileMyData } from '../../common/components/profile/user-profile/user-profile-my-data';
import { UserAvatar, UserInformation } from '../../common/types/types';
import { UserProfileUrls } from '../../common/components/profile/user-profile/user-profile-urls';
import { SkillsInterests } from '../../common/components/profile/user-profile/user-profile-skills-interests';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { Directus } from '@directus/sdk';

type EditMyProfileProps = {
  userData: UserInformation;
  userAvatar: UserAvatar;
};

export const EditMyProfile = ({ userData, userAvatar }: EditMyProfileProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  const [avatarFile, setAvatarFile] = useState<any>([]);
  const [changedAvatar, setChangedAvatar] = useState<boolean>(false);

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
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
      .min(3, 'Deine E-Mail-Adresse muss mindestens 3 Zeichen lang sein.')
      .email('Deine E-Mail-Adresse muss gültig sein'),
    description: yup
      .string()
      .min(2, 'Deine Beschreibung muss mindestens 2 Zeichen lang sein.'),
    course: yup.string(),
//     urls: yup.object({
//       website: yup.object({
//         webseite: yup.string(),
//         url: yup
//           .string()
//           .matches(
//             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//             'Enter correct url!',
//           )
//           .nullable(true),
//       }),
//       youtube: yup.object({
//         webseite: yup.string(),
//         url: yup
//           .string()
//           .matches(
//             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//             'Enter correct url!',
//           )
//           .nullable(true),
//       }),
//       instagram: yup.object({
//         webseite: yup.string(),
//         url: yup
//           .string()
//           .matches(
//             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//             'Enter correct url!',
//           )
//           .nullable(true),
//       }),
//       linkedin: yup.object({
//         webseite: yup.string(),
//         url: yup
//           .string()
//           .matches(
//             /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//             'Enter correct url!',
//           )
//           .nullable(true),
//       }),
//     }),
    programs: yup.array(
      yup.object().shape({
        label: yup.string(),
        program: yup.string(),
      }),
    ),
    interests: yup.array(
      yup.object().shape({
        label: yup.string(),
        interests: yup.string(),
      }),
    ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: userData.first_name,
      last_name: userData.last_name,
      avatar: userData.avatar,
      email: userData.email,
      description: userData.description,
      course: userData.course,
      urls: userData.urls,
      programs: userData.programs,
      interests: userData.interests,
      user_files: null,
    },
    validationSchema: myProfilValidationSchema,
    onSubmit: (values) => {
      if (changedAvatar == true) {
        console.log('Profile picture changed');
        console.log(values);
      } else {
        console.log('Profile Picture did not change');
        console.log(values);
      }
    },
      //   onSubmit: async (values: any) => {
      //     const directus = new Directus('https://www.whatthebre.com/');

      //     if (changedAvatar == true) {
      //       const formData = new FormData();
      //       formData.append('file', avatarFile[0]);
      //       const avatarId = await directus.files.createOne(formData);

      //       if (avatarId) {
      //         await directus.users.me.update({
      //           first_name: values.first_name,
      //           last_name: values.last_name,
      //           avatar: avatarId.id,
      //           email: values.email,
      //           description: values.description,
      //           course: values.course,
      //       //     urls: values.urls,
      //           programs: values.programs,
      //           interests: values.interests,
      //         });
      //       }
      //     } else {
      //       await directus.users.me.update({
      //         first_name: values.first_name,
      //         last_name: values.last_name,
      //         email: values.email,
      //         description: values.description,
      //         course: values.course,
      //       //   urls: values.urls,
      //         programs: values.programs,
      //         interests: values.interests,
      //       });
      //     }
      //   },
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
        <form onSubmit={formik.handleSubmit}>
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
            formik={formik}
            avatarFile={avatarFile}
            setAvatarFile={setAvatarFile}
            setChangedAvatar={setChangedAvatar}
            userAvatar={userAvatar}
          />
          <UserProfileUrls
            urls={formik.values.urls}
            formik={formik}
            formikProps={formik}
          />
          <SkillsInterests
            programs={formik.values.programs}
            interests={formik.values.interests}
            formik={formik}
            formikProps={formik}
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
      </Box>
    </>
  );
};
