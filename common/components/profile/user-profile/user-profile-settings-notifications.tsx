import { Directus } from '@directus/sdk';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserInformation } from '../../../types/types';

type EditProfileSettingsProps = {
  userData: UserInformation;
};

export const UserProfileSettingsNotifications = ({
  userData,
}: EditProfileSettingsProps) => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      liked_notifications: userData.liked_notifications,
      mentions_notifications: userData.mentions_notifications,
      project_commented_notifications: userData.project_commented_notifications,
    },
    onSubmit: async (values: any) => {
      const directus = new Directus('https://www.whatthebre.com/');
      await directus.users.me.update({
            liked_notifications: values.liked_notifications,
            mentions_notifications: values.mentions_notifications,
            project_commented_notifications: values.project_commented_notifications,
      });
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 'fontWeightBold',
          alignSelf: 'flex-start',
        }}
      >
        {t('profileSettings.notifications')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ margin: '16px 0 5px 0' }}>
            {t('profileSettings.messageMe')}
          </Typography>
          <FormControlLabel
            name="liked_notifications"
            checked={formik.values.liked_notifications}
            control={<Checkbox value={formik.values.liked_notifications} />}
            onChange={formik.handleChange}
            label={t('profileSettings.commentProject')}
          />
          <FormControlLabel
            name="mentions_notifications"
            checked={formik.values.mentions_notifications}
            control={<Checkbox value={formik.values.mentions_notifications} />}
            onChange={formik.handleChange}
            label={t('profileSettings.mention')}
          />
          <FormControlLabel
            name="project_commented_notifications"
            checked={formik.values.project_commented_notifications}
            control={
              <Checkbox value={formik.values.project_commented_notifications} />
            }
            onChange={formik.handleChange}
            label={t('profileSettings.likeProject')}
          />
        </Box>
        <Button
          className="project-button-publish"
          variant="contained"
          type="submit"
          sx={{
            width: `${mdBreakpointDown ? '100%' : '400px'}`,
            marginTop: '20px',
            height: '56px',
          }}
        >
          {t('profileSettings.updateNotifications')}
        </Button>
      </form>
    </Box>
  );
};
