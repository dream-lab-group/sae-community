import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { appTheme, token } from '..';
import Layout from '../../common/components/layout';
import { ProjectCard } from '../../common/components/project-card/project-card';
import { apiClient } from '../../common/data/apiClient';
import saiImage from '../../public/404.png';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

const Projects: NextPage = withRouter<Props>(({ router }: PropsWithRouter) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));
  const { t } = useTranslation();

  const userId = router.asPath.split('/').at(-1);
  const [allUserProjects, setAllUserProjects] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //redirect to home if aleady logged in
    if (!token) {
      router.push('/signin');
    }
  }, []);

  useEffect(() => {
    const fetchMyProjects = async () => {
      if (userId !== '[id]') {
        const projectsResponse = await apiClient.get(
          `items/projects?filter={"user_created": { "_eq": "${userId}" }}`,
        );
        if (projectsResponse.status === 200) {
          setAllUserProjects(projectsResponse.data.data);
        }
      }
    };
    fetchMyProjects();
  }, [setAllUserProjects, userId]);

  const handleOnClickProjectUpload = (e: any) => {
    e.preventDefault();
    router.push('/project-upload');
  };

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          height: `${
            mdBreakpointDown ? '60px' : lgBreakpointUp ? '100px' : '80px'
          }`,
          paddingX: `${
            smBreakpointDown ? '17px' : desktopBreakpointUp ? '60px' : '55px'
          }`,
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Grid
        container
        paddingY="40px"
        paddingX={`${
          smBreakpointDown ? '0px' : desktopBreakpointUp ? '60px' : '40px'
        }`}
        spacing={{ sm: 5, md: 3, lg: 3, xl: 3, desktop: 4, uhd: 4, kuhd: 4 }}
        className="grid-container"
      >
        {allUserProjects.length !== 0 ? (
          <>
            {allUserProjects.map(
              ({
                id,
                user_created,
                course,
                cover_photo,
              }: {
                id: string;
                user_created: string;
                course: string;
                cover_photo: string;
              }) => {
                return (
                  <ProjectCard
                    key={id}
                    projectId={id}
                    coverPhotoId={cover_photo}
                    userCreated={user_created}
                    course={course}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    editProject
                  />
                );
              },
            )}
          </>
        ) : (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: `${mdBreakpointDown ? '200px' : '400px'}`,
                width: `${mdBreakpointDown ? '200px' : '300px'}`,
              }}
            >
              <Image
                className="project-image-border-radius image-container"
                layout="fill"
                src={saiImage}
              />
            </Box>
            <Box
              sx={{
                position: 'relative',
                background: '#192D3E',
                top: '-1px',
                width: `${mdBreakpointDown ? '350px' : '650px'}`,
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: `${mdBreakpointDown ? '20px' : '30px'}`,
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                {t('projects.noProjects')}
              </Typography>
              <Button
                className="secondary-button"
                variant="contained"
                sx={{
                  marginBottom: '10px',
                }}
                onClick={handleOnClickProjectUpload}
              >
                Projekt heraufladen
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </ThemeProvider>
  );
});

// @ts-expect-error: Todo
Projects.getLayout = function getLayout(page: typeof Projects) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Projects;
