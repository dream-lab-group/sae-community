import { Directus } from '@directus/sdk';
import { createTheme, ThemeProvider } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Layout from '../common/components/layout';
import { PageNavigation } from '../common/components/page-navigation/page-navigation';
import ProjectsOverview from '../common/components/projects-overview/projects-overview';
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

  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<any>();
  const [usedFilter, setUsedFilter] = useState<string>();

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      setCurrentUserId(userId.id);
    };
    getCurrentUser();
  }, [setCurrentUserId]);

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
      <PageNavigation setUsedFilter={setUsedFilter} />
      {/* @ts-expect-error: Todo */}
      <ProjectsOverview
        currentUserId={currentUserId}
        data={props.data}
        usedFilter={usedFilter}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </ThemeProvider>
  );
};

// @ts-expect-error: Todo
Home.getLayout = function getLayout(page: typeof Home) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Home;
