import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { directus } from '../../../pages';
import useOnClickOutside from '../../hooks/use-on-click-outside';
import { Globals } from '../../utils/utils';
import { AppBarHeaderProps } from '../header/types';

import { CustomNavButton } from './custom-nav-button';

export const CustomNavbar = ({
  menuOpen,
  setMenuOpen,
  currentUser,
}: AppBarHeaderProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const router = useRouter();

  const ref = useRef(null);

  const handleClickOutside = () => {
    setMenuOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Box
      // @ts-expect-error: todo
      ref={ref}
      sx={{
        position: 'fixed',
        zIndex: 2000,
        background: '#fff',
        height: `${mdBreakpointDown && '100%'}`,
        width: `${mdBreakpointDown ? '100%' : '25%'}`,
        right: `${mdBreakpointUp && 0}`,
        boxShadow:
          'rgba(0, 0, 0, 0.15) 0px 15px 25px -10px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
      }}
    >
      <Box
        sx={{
          disxplay: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {menuOpen &&
          Globals.mobileMenuProfileElements.map((navElement) => (
            <CustomNavButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              key={navElement}
              value={navElement}
              navElement={navElement}
              currentUser={currentUser}
            />
          ))}
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid #E8E9EB',
          width: '100%',
          marginY: '10px',
        }}
      />
      <Box
        sx={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ButtonBase
          sx={{
            background: '#fff',
            width: '100%',
            cursor: 'pointer',
            paddingY: '1rem',
            paddingX: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          onClick={async () => {
            await directus.auth.logout().then(() => {
              router.push('/signin');
              window.location.reload();
            });
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: '#F02D3A',
              fontSize: `${
                smBreakpointDown ? '14px' : lgBreakpointUp ? '18px' : '16px'
              }`,
            }}
          >
            {t('loginRegistration.signout')}
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};
