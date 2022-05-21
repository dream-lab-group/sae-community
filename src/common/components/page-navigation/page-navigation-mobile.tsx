import { Box } from '@mui/material';
import { Globals } from '../../../utils';
import { PageNavigationMobileElement } from './page-navigation-mobile-elements';

export const PageNavigationMobile = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          paddingY: '15px',
          overflowX: 'scroll',
          paddingX: '20px',
          '&::webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
        }}
      >
        {Globals.allCourses.map((course) => (
          <PageNavigationMobileElement key={course} course={course} />
        ))}
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid #E8E9EB',
          width: '100%',
        }}
      />
    </>
  );
};
