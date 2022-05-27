import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Layout from '../../common/components/layout';
import { PageNavigation } from '../../common/components/page-navigation/page-navigation';
import { ProjectCard } from '../../common/components/project-card/project-card';

const HomePage = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <PageNavigation />
      <Grid
        container
        width="100%"
        maxWidth="2290px"
        paddingY="40px"
        paddingX={`${
          smBreakpointDown ? '20px' : lgBreakpointUp ? '120px' : '42px'
        }`}
        spacing={{ sm: 4, md: 5, lg: 5 }}
        columns={{ sm: 12, md: 3, lg: 3 }}
      >
        <ProjectCard />

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </>
  );
};

HomePage.getLayout = function getLayout(page: typeof HomePage) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default HomePage;
