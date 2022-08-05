import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AppBarHeaderProps } from '../header/types';

export const CustomNavButton = ({
  navElement,
  setMenuOpen,
  currentUser,
}: AppBarHeaderProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const router = useRouter();

  const hanldeOnClickMenuElement = () => {
    if (navElement === 'profile') {
      setMenuOpen(false);
      router.push({ pathname: 'public-profile/[cur]', query: { cur: currentUser } });
    } else if (navElement === 'projects') {
      setMenuOpen(false);
      router.push({ pathname: 'projects/[cur]', query: { cur: currentUser } });
    } else if (navElement === 'likes') {
      setMenuOpen(false);
      router.push('/likes');
    } else if (navElement === 'collections') {
      setMenuOpen(false);
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
