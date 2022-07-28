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

    return <h1>This is the edit project of {projectData.id}</h1>;
  },
);

export default EditProject;
