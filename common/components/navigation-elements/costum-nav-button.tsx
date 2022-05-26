import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomNavButtonProps } from '../header/types';

export const CustomNavButton = ({ navElement }: CustomNavButtonProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

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
