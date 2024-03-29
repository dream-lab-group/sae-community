import { Directus } from '@directus/sdk';
import {
  Box,
  ButtonBase,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiPlus } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import * as yup from 'yup';
import { appTheme, directus, token } from '..';
import TipTapEditor from '../../common/components/common/tiptap-editor';
import { CommunityHead } from '../../common/components/community-head';
import { FileUpload } from '../../common/components/project-upload/file-upload';
import { AlumniCourseSelection } from '../../common/components/project-upload/modules/alumni-course-selection';
import { Collaborators } from '../../common/components/project-upload/modules/collaborators';
import { EmbedUrl } from '../../common/components/project-upload/modules/embed-url';
import { ProgramsUsed } from '../../common/components/project-upload/modules/programs-used';
import { ProjectUploadButtons } from '../../common/components/project-upload/modules/project-upload-buttons';
import { ThumbnailUpload } from '../../common/components/project-upload/thumbnail-upload';
import { apiClient } from '../../common/data/apiClient';

const ProjectUpload = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [currentUser, setCurrentUser] = useState<any>();
  const [thumbnailFile, setThumbnailFile] = useState<any>([]);

  const router = useRouter();

  useEffect(() => {
    //redirect to home if aleady logged in
    if (!token) {
      router.push('/signin');
    }
  }, []);

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
      window.scrollTo(0, 0);
    };
    getCurrentUser();
  }, [setCurrentUser]);

  const courseValidationSchema = yup.object({
    project_name: yup
      .string()
      .required('Ein Projektname muss unbedingt eingegeben werden')
      .min(5, 'Der Projektname muss mindestens 5 Zeichen lang sein'),
    // TODO
    // cover_photo: yup.mixed().required('Bitte wähle ein Titelbild aus'),
    // TODOx
    // embedded_urls: yup
    //   .string()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     'Enter correct url!',
    //   ),
    course: yup.string().required('Bitte ein Fachrichtung auswählen'),
  });

  const formik = useFormik({
    initialValues: {
      user_created: null,
      project_name: '',
      cover_photo: null,
      programs: [],
      course: '',
      description: null,
      collaborators: null,
      embedded_urls: [],
      comment_function: false,
      external_project: false,
      project_files: null,
    },
    validationSchema: courseValidationSchema,
    onSubmit: async (values: any) => {
      const directus = new Directus('https://www.whatthebre.com/');
      const formData = new FormData();
      formData.append('name', thumbnailFile[0].name);
      formData.append('file', thumbnailFile[0]);
      const fileId = await directus.files.createOne(formData);
      if (fileId) {
        const projects = directus.items('projects');
        await projects
          .createOne({
            user_created: values.user_created,
            project_name: values.project_name,
            cover_photo: fileId.id,
            programs: values.programs,
            course: values.course,
            description: values.description,
            collaborators: values.collaborators,
            embedded_urls: values.embedded_urls,
            comment_function: values.comment_function,
            external_project: values.external_project,
          })
          .then(async () => {
            if (values.project_files !== null) {
              const result = await apiClient.get(
                `https://www.whatthebre.com/items/projects?filter={ "cover_photo": { "_eq": "${fileId.id}" }}`,
              );
              if (result.status === 200) {
                await values.project_files.reduce(
                  async (memo: any, projectFile: any) => {
                    await memo;
                    const formData = new FormData();
                    formData.append('name', projectFile.name);
                    formData.append('file', projectFile);
                    const fileRelationId = await directus.files.createOne(
                      formData,
                    );
                    if (fileRelationId) {
                      const projectsFiles = directus.items('projects_files');
                      await projectsFiles.createOne({
                        projects_id: result.data.data[0].id,
                        directus_files_id: fileRelationId,
                      });
                    }
                  },
                  undefined,
                );
                router.push({
                  pathname: 'projects/edit-project/[pid]',
                  query: { pid: result.data.data[0].id },
                });
              }
            } else {
              const result = await apiClient.get(
                `https://www.whatthebre.com/items/projects?filter={ "cover_photo": { "_eq": "${fileId.id}" }}`,
              );
              if (result.status === 200) {
                router.push({
                  pathname: 'projects/edit-project/[pid]',
                  query: { pid: result.data.data[0].id },
                });
              }
            }
          });
      }
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
      // @ts-expect-error: Todo
      <ThemeProvider theme={appTheme}>
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
                formik={formik}
                thumbnailFile={thumbnailFile}
                setThumbnailFile={setThumbnailFile}
              />
              <FileUpload formik={formik} />
              <ProgramsUsed
                label="Benutzte Programme"
                id="programs"
                name="programs"
                formikProps={formik}
              />
              <>
                <Box
                  sx={{
                    width: '100%',
                    height: '56px',
                    marginTop: '20px',
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
                      {smBreakpointDown ? (
                        <>
                          <BiPlus size={30} />
                        </>
                      ) : mdBreakpointDown ? (
                        <Typography sx={{ fontSize: '12px' }}>
                          {t('projectUpload.addUrl')}
                        </Typography>
                      ) : (
                        <Typography>{t('projectUpload.addUrl')}</Typography>
                      )}
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
              <TipTapEditor edit={true} formik={formik.setFieldValue} />
              <AlumniCourseSelection formik={formik} />
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{ direction: `${mdBreakpointDown && 'flex-start'}` }}
              >
                <Collaborators
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
                    label="Externes Projekt"
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
      </ThemeProvider>
    );
  } else {
    return <></>;
  }
};

export default ProjectUpload;
