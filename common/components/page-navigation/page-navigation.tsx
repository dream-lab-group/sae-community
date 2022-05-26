import {
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Globals } from '../../utils/utils';

import { HiOutlineSearch } from 'react-icons/hi';
import { useState } from 'react';
import { PageNavigationElement } from './page-navigation-elements';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export const PageNavigation = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [sortFilter, setSortFilter] = useState<string[]>([]);

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          paddingY: '32px',
          paddingX: '20px',
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
        }}
        className="container-skew"
      >
        <Grid
          item
          container
          spacing={2}
          alignItems="center"
          marginBottom="16px"
        >
          <Grid item xs={8}>
            <FormControl fullWidth>
              <OutlinedInput
                size="small"
                placeholder="Search..."
                startAdornment={
                  <InputAdornment position="start">
                    <HiOutlineSearch size={22} />
                  </InputAdornment>
                }
                sx={{ background: ' #fff' }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} alignItems="center" justifyContent="center">
            <FormControl fullWidth>
              <Select
                placeholder="Sortieren"
                size="small"
                displayEmpty
                value={sortFilter}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ background: ' #fff' }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <p>Sortieren</p>;
                  }

                  return selected.join(', ');
                }}
              >
                <MenuItem value="">
                  <p>Nichts</p>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item sx={{ display: 'flex', overflowX: 'scroll', width: '100%' }}>
          {Globals.allCourses.map((course) => (
            <PageNavigationElement key={course} course={course} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
