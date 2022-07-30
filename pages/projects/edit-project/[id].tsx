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
import { NextPage } from 'next';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseSharp } from 'react-icons/io5';
import { directus } from '../..';
import TipTapEditor from '../../../common/components/common/tiptap-editor';
import { CommunityHead } from '../../../common/components/community-head';
import { EmbedUrl } from '../../../common/components/project-upload/modules/embed-url';
import { EditCollaborators } from '../../../common/components/project/edit-project/edit-collaborators';
import { EditCourse } from '../../../common/components/project/edit-project/edit-course';
import { EditFiles } from '../../../common/components/project/edit-project/edit-files';
import { EditPrograms } from '../../../common/components/project/edit-project/edit-programs';
import { EditProjectButtons } from '../../../common/components/project/edit-project/edit-project-buttons';
import { EditThumbnail } from '../../../common/components/project/edit-project/edit-thumbnail';
import { apiClient } from '../../../common/data/apiClient';
import * as yup from 'yup';
import { Formik } from 'formik';

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

    const projectId = router.asPath.split('/').at(-1);
    const [projectData, setProjectData] = useState<any>(null);
    const [newUrl, setNewUrl] = useState('');
    const [embedUrlList, setEmbedUrlList] = useState<any>();
    const [currentUser, setCurrentUser] = useState<any>();

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

    const removeEmbedUrl = (index: number) => {};

    return projectData ? (
      <>
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
                onSubmit={(values) => console.log(values)}
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
                    />
                    <EditThumbnail
                      thumbnailId={formikProps.values.cover_photo}
                    />
                    <EditFiles files={formikProps.values.files} />
                    <EditPrograms programs={formikProps.values.programs} />
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
                        onClick={() => {}}
                      >
                        <Typography>URL hinzufügen</Typography>
                      </ButtonBase>
                    </Box>
                    {embedUrlList &&
                      embedUrlList.map(
                        ({ url }: { url: any }, index: number) => (
                          <EmbedUrl
                            key={index}
                            index={index}
                            url={url}
                            removeEmbedUrl={removeEmbedUrl}
                          />
                        ),
                      )}
                    <TipTapEditor
                      edit
                      content={formikProps.values.description}
                    />
                    {currentUser && currentUser.course === 'alumni' && (
                      <EditCourse course={formikProps.values.course} />
                    )}
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      sx={{ direction: `${mdBreakpointDown && 'flex-start'}` }}
                    >
                      <EditCollaborators
                        currentCollaborators={formikProps.values.collaborators}
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
                              defaultValue={formikProps.values.comment_function}
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
                              defaultValue={formikProps.values.external_project}
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
      </>
    ) : (
      <></>
    );
  },
);

export default EditProject;
