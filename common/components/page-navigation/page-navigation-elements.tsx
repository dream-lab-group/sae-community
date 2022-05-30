import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageNavigationElementProps } from './types';

export const PageNavigationElement = ({
  element,
}: PageNavigationElementProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <ButtonBase
        key={element}
        value={element}
        className={
          element === 'film'
            ? 'film-button'
            : element === 'gameArts'
            ? 'gamearts-button'
            : element === 'gamesProgramming'
            ? 'gamesprogramming-button'
            : element === 'web'
            ? 'web-button'
            : element === 'audio'
            ? 'audio-button'
            : element === 'animation'
            ? 'animation-button'
            : element === 'crossMedia'
            ? 'cross-media-button'
            : ''
        }
        sx={{
          marginRight: `${lgBreakpointUp ? '15px' : '10px'}`,
          '&:last-child': {
            marginRight: '0px',
          },
          width: '100%',
          borderRadius: '2rem',
          background: '#75818b',
          maxWidth: '180px',
        }}
      >
        <Typography
          noWrap
          sx={{
            padding: `${lgBreakpointUp ? '8px 20px' : '5px 15px'}`,
            fontSize: `${lgBreakpointUp ? '16px' : '14px'}`,
            color: '#fff',
            fontWeight: '300',
            textAlign: 'center',
          }}
        >
          {/* @ts-expect-error: translation error during runtime */}
          {t(`pageNavigation.${element}`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
