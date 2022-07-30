import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { UserProfileSettingsPassword } from '../../common/components/profile/user-profile/user-profile-settings-password';
import { UserProfileSettingsNotifications } from '../../common/components/profile/user-profile/user-profile-settings-notifications';
import { UserProfileSettingsDeleteProfile } from '../../common/components/profile/user-profile/user-profile-settings-delete-profile';
import { UserInformation } from '../../common/types/types';
import { useFormik } from 'formik';
import { useState } from 'react';

type EditProfileSettingsProps = {
  userData: UserInformation;
};

const ProfileSettings = ({ userData }: EditProfileSettingsProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const router = useRouter();

  const handleCancelProfileSaving = () => {
    router.push('/public-profile/123');
  };

  //   const myProfileSettingsValidationSchema = yup.object({
  //     password: yup
  //       .string()
  //       .min(8, 'Dein Passwort muss mindestens 8 Zeichen lang sein.'),
  //     repeatpassword: yup
  //       .string()
  //       .oneOf([yup.ref('password'), null], 'Passwort stimmt nicht überein'),
  //   });
  //   const formik = useFormik({
  //     initialValues: {
  //       password: '',
  //       repeatpassword: ""
  //     },
  //     onSubmit: async (values: any) => {
  //       console.log(values);
  //     },
  //   });

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
        {/* <form onSubmit={formik.handleSubmit}> */}
        <UserProfileSettingsPassword />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
        <UserProfileSettingsNotifications userData={userData} />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
        <UserProfileSettingsDeleteProfile userData={userData} />
        <hr
          style={{
            width: '100%',
            margin: '20px 0 20px 0',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        />
        {/* </form> */}
      </Box>
    </>
  );
};

export default ProfileSettings;
