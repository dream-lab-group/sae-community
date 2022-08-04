import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  Box,
  useTheme,
} from '@mui/material';
import { Globals } from '../../utils/utils';

import { HiOutlineSearch } from 'react-icons/hi';
import React, { useState } from 'react';
import { PageNavigationElement } from './page-navigation-elements';

type PageNavigationProps = {
  setUsedFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const PageNavigation = ({ setUsedFilter }: PageNavigationProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));
  const [activeTagFilter, setActiveTagFilter] = useState<string>();
  const [sortFilter, setSortFilter] = useState<string[]>([]);

  return (
    <>
      <Box
        sx={{
          height: `${
            mdBreakpointDown ? '150px' : lgBreakpointUp ? '220px' : '200px'
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
      >
        <Grid container width="100%" direction="column">
          <Grid
            item
            container
            spacing={{ xs: 2, sm: 2, md: 2, lg: 3 }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
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
            {mdBreakpointDown ? (
              <></>
            ) : (
              <Grid item xs={0} sm={0} md={1} lg={3} />
            )}
            <Grid
              item
              xs={4}
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
                  className="primary-button"
                  fullWidth
                  variant="contained"
                  sx={{
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
            marginTop={`${smBreakpointDown ? '5px' : '10px'}`}
            justifyContent={`${lgBreakpointUp && 'center'}`}
          >
            {Globals.pageNavigationElements.map((element) => (
              <PageNavigationElement
                key={element}
                element={element}
                setUsedFilter={setUsedFilter}
                activeTagFilter={activeTagFilter}
                setActiveTagFitler={setActiveTagFilter}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
