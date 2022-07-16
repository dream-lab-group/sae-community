import {
  Box,
  ButtonBase,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CommunityHead } from '../../common/components/community-head';
import { useTranslation } from 'react-i18next';
import { FileUpload } from '../../common/components/project-upload/file-upload';
import { Coworkers } from '../../common/components/project-upload/coworkers';
import React, { useEffect, useState } from 'react';
import { ThumbnailUpload } from '../../common/components/project-upload/thumbnail-upload';
import { useRouter } from 'next/router';
import { directus } from '..';
import { apiClient } from '../../common/data/apiClient';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { IoCloseSharp } from 'react-icons/io5';
import { EmbedUrl } from '../../common/components/project-upload/embed-url';
import { AlumniCourseSelection } from '../../common/components/project-upload/alumni-course-selection';
import { ProjectUploadButtons } from '../../common/components/project-upload/project-upload-buttons';
import { Directus } from '@directus/sdk';

const ProjectUpload = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [currentUser, setCurrentUser] = useState<any>();

  const router = useRouter();

  const handleCancelProjectUpload = () => {
    router.push('/');
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      const userResponse = await apiClient.get(`users/${userId.id}`);
      if (userResponse.status === 200) {
        setCurrentUser(userResponse.data.data);
      }
    };
    getCurrentUser();
  }, [setCurrentUser]);

  const courseValidationSchema = yup.object({
    // project_name: yup
    //   .string()
    //   .required('Ein Projektname muss unbedingt eingegeben werden')
    //   .min(5, 'Der Projektname muss mindestens 5 Zeichen lang sein'),
    // TODO
    // cover_photo: yup.mixed().required('Bitte wähle ein Titelbild aus'),
    // description: yup.string().required('Bitte beschreibe das Projekt'),
    // TODO
    // embedded_urls: yup
    //   .string()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     'Enter correct url!',
    //   ),
    // course: yup.string().required('Bitte ein Fachrichtung auswählen'),
  });

  const formik = useFormik({
    initialValues: {
      user_created: null,
      project_name: '',
      cover_photo: null,
      course: '',
      description: '',
      collaborators: null,
      embedded_urls: [],
      comment_function: false,
      external_project: false,
      project_files: null,
    },
    validationSchema: courseValidationSchema,
    onSubmit: async (values: any) => {
      const directus = new Directus('https://www.whatthebre.com/');

      // const projects = directus.items('projects');

      // await projects.createOne({
      //   user_created: values.user_created,
      //   project_name: values.project_name,
      //   cover_photo: values.cover_photo,
      //   course: values.course,
      //   description: values.description,
      //   collaborators: values.collaborators,
      //   embedded_urls: values.embedded_urls,
      //   comment_function: values.comment_function,
      //   external_project: values.external_project,
      //   project_files: values.project_files,
      // });

      console.log(values);

      await directus.files.createOne(values.cover_photo[0]);
    },
  });

  const [newUrl, setNewUrl] = useState('');
  const [embedUrlList, setEmbedUrlList] = useState(formik.values.embedded_urls);

  const removeEmbedUrl = (index: number) => {
    const rows = [...embedUrlList];
    rows.splice(index, 1);
    const newEmbedUrlList = rows;
    setEmbedUrlList(newEmbedUrlList);
    formik.setFieldValue('embedUrls', newEmbedUrlList);
  };

  if (currentUser) {
    formik.values.user_created = currentUser.id;

    return (
      <>
        <CommunityHead />
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                height: '60px',
                background: '#192D3E',
                width: '100%',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%);',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            />
            <Box
              sx={{
                paddingTop: '25px',
                paddingBottom: '50px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
                paddingX: `${
                  smBreakpointDown ? '20px' : lgBreakpointDown ? '60px' : '40px'
                }`,
              }}
            >
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'fontWeightBold',
                  alignSelf: 'flex-start',
                }}
              >
                {t('projectUpload.createProject')}
              </Typography>
              <TextField
                id="project_name"
                name="project_name"
                size="small"
                label="Projektname"
                variant="outlined"
                fullWidth
                type="text"
                value={formik.values.project_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.project_name &&
                  Boolean(formik.errors.project_name)
                }
                helperText={
                  formik.touched.project_name && formik.errors.project_name
                }
                sx={{
                  marginTop: '20px',
                  fontSize: '8px',
                  maxWidth: '465px',
                  alignSelf: 'flex-start',
                }}
              />
              <ThumbnailUpload
                label="ThumbnailUpload"
                id="cover_photo"
                name="cover_photo"
                type="text"
                formik={formik}
              />
              <FileUpload formik={formik} />
              <>
                <Box
                  sx={{
                    width: '100%',
                    height: '56px',
                    marginTop: '30px',
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* @ts-expect-error: todo */}
                  <FormikProvider value={formik}>
                    <TextField
                      id="videoUrl"
                      name="videoUrl"
                      label="Video Url"
                      sx={{ width: '75%' }}
                      variant="outlined"
                      value={newUrl}
                      onChange={(event) => {
                        setNewUrl(event.target.value);
                      }}
                    />
                    <ButtonBase
                      className="project-add-button"
                      sx={{
                        height: '100%',
                        padding: '10px 15px',
                        color: '#fff',
                        borderRadius: '5px',
                        alignSelf: 'flex-end',
                      }}
                      onClick={() => {
                        const newEmbedUrls = [
                          ...embedUrlList,
                          {
                            url: newUrl,
                          },
                        ];
                        formik.setFieldValue('embedded_urls', newEmbedUrls);
                        // @ts-expect-error: todo
                        setEmbedUrlList(newEmbedUrls);
                        setNewUrl('');
                      }}
                    >
                      <Typography>URL hinzufügen</Typography>
                    </ButtonBase>
                  </FormikProvider>
                </Box>
                {embedUrlList.map(({ url }, index) => (
                  <EmbedUrl
                    key={index}
                    index={index}
                    url={url}
                    removeEmbedUrl={removeEmbedUrl}
                  />
                ))}
              </>
              <TextField
                multiline
                size="small"
                id="description"
                name="description"
                label="Beschreibung"
                variant="outlined"
                minRows={7}
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                sx={{ marginTop: '10px', fontSize: '8px' }}
              />
              {currentUser.course === 'alumni' ? (
                <AlumniCourseSelection formik={formik} />
              ) : (
                <></>
              )}
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{ direction: `${mdBreakpointDown && 'flex-start'}` }}
              >
                <Coworkers
                  label="Coworkers"
                  id="collaborators"
                  name="collaborators"
                  formikProps={formik}
                />
                <Grid
                  item
                  xs={6}
                  alignItems="center"
                  sx={{
                    marginTop: `${smBreakpointUp ? '20px' : '5px'}`,
                    alignSelf: `${mdBreakpointDown && 'flex-start'}`,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        type="checkbox"
                        name="comment_function"
                        checked={formik.values.comment_function}
                        onChange={formik.handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label={t('projectUpload.commentFunction')}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        type="checkbox"
                        name="external_project"
                        checked={formik.values.external_project}
                        onChange={formik.handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label="SchulProjekt"
                  />
                </Grid>
              </Grid>
              <ProjectUploadButtons
                handleCancelProjectUpload={handleCancelProjectUpload}
              />
            </Box>
            <Box
              className="project-button-fixed-cancel"
              component="button"
              sx={{
                border: 'none',
                position: 'fixed',
                right: 0,
                top: 78,
                color: '#000000cc',
                padding: '10px 15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={handleCancelProjectUpload}
            >
              <IoCloseSharp size={28} />
            </Box>
          </Box>
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default ProjectUpload;
