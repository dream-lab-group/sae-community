import {
  Button,
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
import { Box } from '@mui/system';

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
      <Box
        sx={{
          height: `${
            mdBreakpointDown ? '150px' : lgBreakpointUp ? '220px' : '200px'
          }`,
          paddingX: `${
            smBreakpointDown ? '20px' : lgBreakpointUp ? '120px' : '42px'
          }`,
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="container-skew"
      >
        <Grid container width="100%" maxWidth="2290px" direction="column">
          <Grid
            item
            container
            spacing={{ sm: 2, md: 2, lg: 3 }}
            columns={{ sm: 12, md: 12, lg: 12 }}
            alignItems="center"
            marginBottom="16px"
            width="100%"
          >
            <Grid item xs={8} sm={8} md={6} lg={5}>
              <FormControl fullWidth>
                <OutlinedInput
                  fullWidth
                  size={lgBreakpointUp ? 'medium' : 'small'}
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
            {mdBreakpointDown ? <></> : <Grid item sm={0} md={1} lg={3} />}
            <Grid
              item
              sm={4}
              md={3}
              lg={2}
              alignItems="center"
              justifyContent="center"
            >
              <FormControl fullWidth>
                <Select
                  fullWidth
                  placeholder="Sortieren"
                  size={lgBreakpointUp ? 'medium' : 'small'}
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
            {mdBreakpointDown ? (
              <></>
            ) : (
              <Grid item xs={0} sm={0} md={2} lg={2}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    background: '#8519F6',
                    height: `${lgBreakpointUp ? '56px' : '40px'}`,
                  }}
                >
                  Filter
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid
            container
            wrap="nowrap"
            overflow="scroll"
            width="100%"
            marginTop={`${lgBreakpointUp && '10px'}`}
            justifyContent={`${lgBreakpointUp && 'center'}`}
          >
            {Globals.pageNavigationElements.map((element) => (
              <PageNavigationElement key={element} element={element} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};