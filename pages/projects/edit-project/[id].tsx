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
import { Formik } from 'formik';
import { NextPage } from 'next';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiPlus } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import * as yup from 'yup';
import { appTheme, directus } from '../..';
import { ProjectCollaborators } from '../../../common/components/common/project-collaborators';
import TipTapEditor from '../../../common/components/common/tiptap-editor';
import TipTapViewer from '../../../common/components/common/tiptap-viewer';
import { UsedProgram } from '../../../common/components/common/used-programs';
import { CommunityHead } from '../../../common/components/community-head';
import { EmbedUrl } from '../../../common/components/project-upload/modules/embed-url';
import { EditCollaborators } from '../../../common/components/project/edit-project/edit-collaborators';
import { EditCourse } from '../../../common/components/project/edit-project/edit-course';
import { EditPrograms } from '../../../common/components/project/edit-project/edit-programs';
import { EditProjectButtons } from '../../../common/components/project/edit-project/edit-project-buttons';
import { EditThumbnail } from '../../../common/components/project/edit-project/edit-thumbnail';
import { ProjectAudioFile } from '../../../common/components/project/project-audio-file';
import { ProjectButtonGroup } from '../../../common/components/project/project-button-group';
import { ProjectEmbedded } from '../../../common/components/project/project-embedded';
import { ProjectInformation } from '../../../common/components/project/project-information';
import { ProjectPictures } from '../../../common/components/project/project-pictures';
import { apiClient } from '../../../common/data/apiClient';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

const EditProject: NextPage = withRouter<Props>(
  ({ router }: PropsWithRouter) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
    const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
    const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
    const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

    const projectId = router.asPath.split('/').at(-1);
    const [projectData, setProjectData] = useState<any>(null);
    const [newUrl, setNewUrl] = useState('');
    const [embedUrlList, setEmbedUrlList] = useState<any>();
    const [currentUser, setCurrentUser] = useState<any>();
    const [changedThumbnail, setChangedThumbnail] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);

    const handleCancelProjectUpload = () => {
      setEditMode(false);
    };

    useEffect(() => {
      const getCurrentUser = async () => {
        const userId = await directus.users.me.read();
        const userResponse = await apiClient.get(`users/${userId.id}`);
        if (userResponse.status === 200) {
          setCurrentUser(userResponse.data.data);
        }
      };
      const fetchProject = async () => {
        if (projectId !== '[id]') {
          const projectResponse = await apiClient.get(
            `items/projects/${projectId}`,
          );
          if (projectResponse.status === 200) {
            setProjectData(projectResponse.data.data);
            setEmbedUrlList(projectResponse.data.data.embedded_urls);
          }
        }
      };
      getCurrentUser();
      fetchProject();
    }, [setProjectData, setCurrentUser, projectId]);

    const editProjectValidationSchema = yup.object({
      project_name: yup
        .string()
        .required('Ein Projektname muss unbedingt eingegeben werden')
        .min(5, 'Der Projektname muss mindestens 5 Zeichen lang sein'),
    });

    const handleBackToMyProject = () => {
      router.push(`/projects/${projectData.user_created}`);
    };

    return projectData ? (
      // @ts-expect-error: Todo
      <ThemeProvider theme={appTheme}>
        <CommunityHead />
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
            {editMode === true ? (
              <>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 'fontWeightBold',
                    alignSelf: 'flex-start',
                  }}
                >
                  {t('projects.editProject')}
                </Typography>
                {projectData && (
                  <Formik
                    validationSchema={editProjectValidationSchema}
                    initialValues={{
                      project_name: projectData.project_name,
                      cover_photo: projectData.cover_photo,
                      programs: projectData.programs,
                      course: projectData.course,
                      description: projectData.description,
                      collaborators: projectData.collaborators,
                      embedded_urls: projectData.embedded_urls,
                      comment_function: projectData.comment_function,
                      external_project: projectData.external_project,
                      files: projectData.files,
                    }}
                    onSubmit={async (values) => {
                      if (changedThumbnail === true) {
                        const formData = new FormData();
                        formData.append('name', values.cover_photo.name);
                        formData.append('file', values.cover_photo);
                        await directus.files
                          .createOne(formData)
                          .then(async (file) => {
                            if (file) {
                              const projects = directus.items('projects');
                              await projects
                                .updateOne(projectData.id, {
                                  project_name: values.project_name,
                                  cover_photo: file.id,
                                  programs: values.programs,
                                  course: values.course,
                                  description: values.description,
                                  collaborators: values.collaborators,
                                  embedded_urls: values.embedded_urls,
                                  comment_function: values.comment_function,
                                  external_project: values.external_project,
                                })
                                .then(() => {
                                  apiClient.delete(
                                    `https://www.whatthebre.com/files/${projectData.cover_photo}`,
                                  );

                                  router.push(`/project/${projectData.id}`);
                                });
                            }
                          });
                      } else {
                        const projects = directus.items('projects');
                        await projects
                          .updateOne(projectData.id, {
                            project_name: values.project_name,
                            programs: values.programs,
                            course: values.course,
                            description: values.description,
                            collaborators: values.collaborators,
                            embedded_urls: values.embedded_urls,
                            comment_function: values.comment_function,
                            external_project: values.external_project,
                          })
                          .then(async () => {
                            router.push(`/project/${projectData.id}`);
                          });
                      }
                    }}
                  >
                    {(formikProps) => (
                      <form onSubmit={formikProps.handleSubmit}>
                        <TextField
                          id="project_name"
                          name="project_name"
                          size="small"
                          label="Projektname"
                          variant="outlined"
                          fullWidth
                          type="text"
                          sx={{
                            marginTop: '20px',
                            fontSize: '8px',
                            maxWidth: '465px',
                            alignSelf: 'flex-start',
                          }}
                          defaultValue={formikProps.values.project_name}
                          onChange={formikProps.handleChange}
                          error={
                            formikProps.touched.project_name &&
                            Boolean(formikProps.errors.project_name)
                          }
                          // @ts-expect-error: todo
                          helperText={
                            formikProps.touched.project_name &&
                            formikProps.errors.project_name
                          }
                        />
                        <EditThumbnail
                          thumbnailId={formikProps.initialValues.cover_photo}
                          formikProps={formikProps}
                          setChangedThumbnail={setChangedThumbnail}
                        />
                        {/* <EditFiles
                      files={formikProps.values.files}
                      formikProps={formikProps.setFieldValue}
                    /> */}
                        <EditPrograms
                          programs={formikProps.values.programs}
                          formikProps={formikProps}
                        />
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
                              formikProps.setFieldValue(
                                'embedded_urls',
                                newEmbedUrls,
                              );
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
                              <Typography>
                                {t('projectUpload.addUrl')}
                              </Typography>
                            )}
                          </ButtonBase>
                        </Box>
                        {embedUrlList &&
                          embedUrlList.map(
                            ({ url }: { url: any }, index: number) => (
                              <EmbedUrl
                                key={index}
                                index={index}
                                url={url}
                                embedUrlList={embedUrlList}
                                setEmbedUrlList={setEmbedUrlList}
                                formikProps={formikProps}
                              />
                            ),
                          )}
                        <TipTapEditor
                          edit
                          content={formikProps.values.description}
                          formik={formikProps.setFieldValue}
                        />
                        {currentUser && currentUser.course === 'alumni' && (
                          <EditCourse
                            course={formikProps.values.course}
                            formikProps={formikProps}
                          />
                        )}
                        <Grid
                          container
                          spacing={2}
                          alignItems="center"
                          sx={{
                            direction: `${mdBreakpointDown && 'flex-start'}`,
                          }}
                        >
                          <EditCollaborators
                            currentCollaborators={
                              formikProps.values.collaborators
                            }
                            formikProps={formikProps}
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
                                  checked={formikProps.values.comment_function}
                                  onChange={formikProps.handleChange}
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
                                  checked={formikProps.values.external_project}
                                  onChange={formikProps.handleChange}
                                  inputProps={{ 'aria-label': 'controlled' }}
                                />
                              }
                              label="SchulProjekt"
                            />
                          </Grid>
                        </Grid>
                        <EditProjectButtons
                          handleCancelProjectUpload={handleCancelProjectUpload}
                        />
                      </form>
                    )}
                  </Formik>
                )}
              </>
            ) : (
              <>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: `${lgBreakpointDown ? 'column' : 'row'}`,
                    alignItems: `${lgBreakpointUp && 'center'}`,
                  }}
                >
                  <ProjectInformation data={projectData} />
                  <ProjectButtonGroup
                    setEditMode={setEditMode}
                    currentUser={currentUser}
                    projectUser={projectData.user_created}
                  />
                </Box>
                <ProjectPictures
                  thumbnailId={projectData.cover_photo}
                  relationNumbers={projectData.files}
                />
                {projectData.embedded_urls.map((videoUrl: any) => {
                  return (
                    <ProjectEmbedded
                      key={videoUrl.url}
                      videoUrl={videoUrl.url}
                    />
                  );
                })}
                <ProjectAudioFile relationNumbers={projectData.files} />
                {projectData.programs !== null ? (
                  <>
                    <Box sx={{ width: '100%', marginTop: '20px' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
                        Benutzte Programme
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '10px',
                        justifyContent: 'start',
                      }}
                    >
                      {projectData.programs.map(
                        (program: string, index: number) => (
                          <UsedProgram
                            key={index}
                            usedProgramElement={program}
                          />
                        ),
                      )}
                    </Box>
                  </>
                ) : (
                  <></>
                )}
                {projectData.collaborators !== null ? (
                  <>
                    <Box sx={{ width: '100%', marginTop: '20px' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
                        Mitwirkende
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '10px',
                        justifyContent: 'start',
                      }}
                    >
                      {projectData.collaborators.map(
                        (collaborator: { id: string; index: number }) => (
                          <ProjectCollaborators
                            key={collaborator.index}
                            projectCollaboratorsId={collaborator.id}
                          />
                        ),
                      )}
                    </Box>
                  </>
                ) : (
                  <></>
                )}
                <Box
                  sx={{
                    width: '100%',
                    marginTop: `${smBreakpointUp && '20px'}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: `${smBreakpointDown ? '15px' : '20px'}`,
                    }}
                  >
                    {projectData.project_name}
                  </Typography>
                  <TipTapViewer content={projectData.description} />
                </Box>
              </>
            )}
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
            onClick={handleBackToMyProject}
          >
            <IoCloseSharp size={28} />
          </Box>
        </Box>
      </ThemeProvider>
    ) : (
      <></>
    );
  },
);

export default EditProject;
