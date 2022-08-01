import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { NextPage } from 'next';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../common/components/layout';
import { ProjectCard } from '../../common/components/project-card/project-card';
import { apiClient } from '../../common/data/apiClient';

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

  const userId = router.asPath.split('/').at(-1);
  const [allUserProjects, setAllUserProjects] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
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
        {/* @ts-expect-error: todo */}
        {allUserProjects.map(({ id, user_created, course, cover_photo }) => {
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
        })}
      </Grid>
    </>
  );
});

// @ts-expect-error: Todo
Projects.getLayout = function getLayout(page: typeof Projects) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Projects;
