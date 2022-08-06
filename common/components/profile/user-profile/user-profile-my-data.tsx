import { Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormikValues } from 'formik';

import { UserProfileAvatarUpload } from './user-profile-avatar-upload';
import React from 'react';

type UserProfileMyDataProps = {
  formik: FormikValues;
  avatarFile: any;
  setAvatarFile: React.Dispatch<any>;
  userAvatar: any;
  setChangedAvatar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserProfileMyData = ({
  formik,
  avatarFile,
  setAvatarFile,
  userAvatar,
  setChangedAvatar,
}: UserProfileMyDataProps) => {
  const { t } = useTranslation();

  if (formik) {
    return (
      <>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label="Vorname"
              name="first_name"
              type="text"
              defaultValue={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px', color: '#00000066' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label="Nachname"
              name="last_name"
              type="text"
              defaultValue={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              label="E-Mail"
              name="email"
              type="text"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              id="profession"
              label="Fachrichtung"
              name="course"
              type="text"
              defaultValue={t(`courses.${formik.values.course}.label`)}
              onChange={formik.handleChange}
              error={formik.touched.course && Boolean(formik.errors.course)}
              helperText={formik.touched.course && formik.errors.course}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
        </Grid>
        <UserProfileAvatarUpload
          formik={formik}
          avatarFile={avatarFile}
          setAvatarFile={setAvatarFile}
          userAvatar={userAvatar}
          setChangedAvatar={setChangedAvatar}
        />
        <TextField
          multiline
          size="small"
          id="description"
          label="Beschreibung"
          name="description"
          defaultValue={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          variant="outlined"
          minRows={7}
          fullWidth
          sx={{ fontSize: '8px' }}
        />
      </>
    );
  } else {
    return <></>;
  }
};
