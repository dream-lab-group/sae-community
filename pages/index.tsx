import { Directus } from '@directus/sdk';
import {
  createTheme,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../common/components/layout';
import { PageNavigation } from '../common/components/page-navigation/page-navigation';
import { ProjectCard } from '../common/components/project-card/project-card';
import { apiClient } from '../common/data/apiClient';
import { ProjectProperties } from '../common/types/types';

export const directus = new Directus('https://www.whatthebre.com/');

export const token = directus.auth.token;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    retina: true; // enables retina breakpoint
  }
}

const appTheme = createTheme({
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
      retina: 2560,
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
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    // @ts-expect-error: Todo
    <ThemeProvider theme={appTheme}>
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
        {/* @ts-expect-error: todo */}
        {props.data.map(({ id, user_created, course }) => {
          return (
            <ProjectCard
              key={id}
              id={id}
              userCreated={user_created}
              course={course}
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
