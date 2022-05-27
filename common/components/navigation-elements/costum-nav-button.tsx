import {
  Alert,
  ButtonBase,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomNavButtonProps } from '../header/types';

export const CustomNavButton = ({ navElement }: CustomNavButtonProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const router = useRouter();

  const hanldeOnClickMenuElement = () => {
    if (navElement === 'profile') {
      router.push('/profile');
    } else if (navElement === 'likes') {
      router.push('/likes');
    } else if (navElement === 'collections') {
      router.push('/collections');
    }
  };

  return (
    <>
      <ButtonBase
        sx={{
          border: 'none',
          cursor: 'pointer',
          background: '#fff',
          paddingY: '1rem',
          width: '100%',
          paddingX: '20px',
          display: 'flex',
          justifyContent: 'flex-start',
          whiteSpace: 'nowrap',
        }}
        onClick={hanldeOnClickMenuElement}
      >
        <Typography
          sx={{
            fontWeight: 500,
            color: '#746D69',
            fontSize: `${
              smBreakpointDown ? '14px' : lgBreakpointUp ? '18px' : '16px'
            }`,
          }}
        >
          {/* @ts-expect-error: translation only during runtime */}
          {t(`navigation.${navElement}`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
