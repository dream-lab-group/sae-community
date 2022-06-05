import { Directus } from '@directus/sdk';
import {
  createTheme,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Layout from '../common/components/layout';
import { PageNavigation } from '../common/components/page-navigation/page-navigation';
import { ProjectCard } from '../common/components/project-card/project-card';
import { apiClient } from '../common/data/apiClient';
import { ProjectProperties } from '../common/types/types';

export const directus = new Directus('https://www.whatthebre.com/');

export const token = directus.auth.token;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    desktop: true; // enables desktop breakpoint
    uhd: true;
    kuhd: true;
  }
}

export const appTheme = createTheme({
  typography: {
    fontFamily: `'Outfit', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
      desktop: 1920,
      uhd: 2560,
      kuhd: 3540,
    },
  },
});

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await apiClient.get('items/projects');
    const data: ProjectProperties = await response.data.data;

    return {
      props: { data },
    };
  } catch {
    return {
      props: {},
    };
  }
};

const Home: NextPage<{ data: ProjectProperties }> = (props) => {
  // force app to rehydrate after login to match the original HTML
  // hasMounted, to false. While it's false, doesn't bother rendering the "real" content.
  // const [hasMounted, setHasMounted] = useState(false);

  // Inside the useEffect immediately trigger a re-render, setting hasMounted to true. While  true, the "real" content gets rendered.
  // useEffect only triggers after the component has mounted
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }

  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const [isLoading, setIsLoading] = useState(true);

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
      <PageNavigation />
      <Grid
        container
        paddingY="40px"
        paddingX={`${
          smBreakpointDown ? '17px' : desktopBreakpointUp ? '60px' : '40px'
        }`}
        spacing={{ sm: 5, md: 3, lg: 3, xl: 3, desktop: 4, uhd: 4, kuhd: 4 }}
        className="grid-container"
      >
        {/* @ts-expect-error: todo */}
        {props.data.map(({ id, user_created, course }) => {
          return (
            <ProjectCard
              key={id}
              id={id}
              userCreated={user_created}
              course={course}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};

// @ts-expect-error: Todo
Home.getLayout = function getLayout(page: typeof Home) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Home;
