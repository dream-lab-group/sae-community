import {
  Box,
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

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineSearch } from 'react-icons/hi';
import { PageNavigationElement } from './page-navigation-elements';

type PageNavigationProps = {
  setUsedFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const PageNavigation = ({ setUsedFilter }: PageNavigationProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));
  const udhBreakpointDown = useMediaQuery(theme.breakpoints.down('uhd'));
  const udhBreakpointUp = useMediaQuery(theme.breakpoints.up('uhd'));
  const [activeTagFilter, setActiveTagFilter] = useState<string>();
  const [sortFilter, setSortFilter] = useState<string[]>([]);
  const { t } = useTranslation();

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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: `${
                  lgBreakpointUp
                    ? '450px'
                    : mdBreakpointDown
                    ? '250px'
                    : '270px'
                }`,
              }}
            >
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
            </Box>
            {udhBreakpointUp ? (
              <Grid
                container
                wrap="nowrap"
                overflow="scroll"
                width="100%"
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
            ) : (
              <></>
            )}
            <Box
              sx={{
                width: `${
                  mdBreakpointDown
                    ? '150px'
                    : lgBreakpointUp
                    ? '415px'
                    : '380px'
                }`,
                display: 'flex',
                justifyContent: `${
                  mdBreakpointDown ? 'flex-end' : 'space-between'
                }`,
              }}
            >
              <FormControl
                sx={{
                  width: `${
                    mdBreakpointDown
                      ? '150px'
                      : lgBreakpointUp
                      ? '240px'
                      : '200px'
                  }`,
                }}
              >
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
                  <MenuItem value={10}>
                    {t('navigation.newestProjects')}
                  </MenuItem>
                  <MenuItem value={20}>
                    {t('navigation.oldestProjects')}
                  </MenuItem>
                  <MenuItem value={30}>{t('navigation.studentsAZ')}</MenuItem>
                  <MenuItem value={40}>{t('navigation.stutendsZA')}</MenuItem>
                </Select>
              </FormControl>
              {mdBreakpointDown ? (
                <></>
              ) : (
                <Button
                  className="primary-button"
                  variant="contained"
                  sx={{
                    height: `${lgBreakpointUp ? '56px' : '40px'}`,
                    width: '160px',
                    marginLeft: '20px',
                  }}
                >
                  Filter
                </Button>
              )}
            </Box>
          </Box>
          {udhBreakpointDown ? (
            <Grid
              container
              wrap="nowrap"
              overflow="scroll"
              width="100%"
              marginTop={`${smBreakpointDown ? '20px' : '25px'}`}
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
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </>
  );
};
