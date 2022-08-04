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
          borderRadius: '2rem',
          background: '#75818b',
        }}
      >
        <Typography
          noWrap
          sx={{
            padding: `${lgBreakpointUp ? '10px 20px' : '8px 20px'}`,
            fontSize: `${lgBreakpointUp ? '16px' : '14px'}`,
            color: '#fff',
            fontWeight: '300',
            textAlign: 'center',
            minWidth: '120px',
            overflow: 'unset',
            textOverflow: 'clip',
          }}
        >
          {/* @ts-expect-error: translation error during runtime */}
          {t(`pageNavigation.${element}`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
