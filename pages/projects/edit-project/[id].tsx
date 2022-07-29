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
import { CommunityHead } from '../../../common/components/community-head';
import { EditFiles } from '../../../common/components/project/edit-project/edit-files';
import { EditPrograms } from '../../../common/components/project/edit-project/edit-programs';
import { EditThumbnail } from '../../../common/components/project/edit-project/edit-thumbnail';
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

    const projectId = router.asPath.split('/').at(-1);
    const [projectData, setProjectData] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [thumbnailFile, setThumbnailFile] = useState<any>([]);

    useEffect(() => {
      const fetchProject = async () => {
        if (projectId !== '[id]') {
          const projectResponse = await apiClient.get(
            `items/projects/${projectId}`,
          );
          if (projectResponse.status === 200) {
            setProjectData(projectResponse.data.data);
            setThumbnailFile([projectResponse.data.data.cover_photo]);
            setIsLoaded(true);
          }
        }
      };
      fetchProject();
    }, [setProjectData]);

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
              defaultValue={projectData.project_name}
            />
            <EditThumbnail thumbnailId={projectData.cover_photo} />
            <EditFiles files={projectData.files} />
            <EditPrograms programs={projectData.programs} />
          </Box>
        </Box>
      </>
    ) : (
      <></>
    );
  },
);

export default EditProject;
