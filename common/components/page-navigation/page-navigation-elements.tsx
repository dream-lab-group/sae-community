import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageNavigationElementProps } from './types';

export const PageNavigationElement = ({
  element,
  setUsedFilter,
  activeTagFilter,
  setActiveTagFitler,
}: PageNavigationElementProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const buttonStyling = () => {
    if (element === 'film') {
      if (activeTagFilter === 'activeFilmButton') {
        return 'film-button-active';
      } else {
        return 'film-button';
      }
    } else if (element === 'gameArts') {
      if (activeTagFilter === 'activeGameArtsButton') {
        return 'gamearts-button-active';
      } else {
        return 'gamearts-button';
      }
    } else if (element === 'gamesProgramming') {
      if (activeTagFilter === 'activeGamesProgrammingButton') {
        return 'gamesprogramming-button-active';
      } else {
        return 'gamesprogramming-button';
      }
    } else if (element === 'web') {
      if (activeTagFilter === 'activeWebButton') {
        return 'web-button-active';
      } else {
        return 'web-button';
      }
    } else if (element === 'audio') {
      if (activeTagFilter === 'activeAudioButton') {
        return 'audio-button-active';
      } else {
        return 'audio-button';
      }
    } else if (element === 'animation') {
      if (activeTagFilter === 'activeAnimationButton') {
        return 'animation-button-active';
      } else {
        return 'animation-button';
      }
    } else if (element === 'crossMedia') {
      if (activeTagFilter === 'activeCrossMediaButton') {
        return 'cross-media-button-active';
      } else {
        return 'cross-media-button';
      }
    } else {
      return '';
    }
  };

  return (
    <>
      <ButtonBase
        key={element}
        value={element}
        className={buttonStyling()}
        sx={{
          marginRight: `${lgBreakpointUp ? '15px' : '10px'}`,
          '&:last-child': {
            marginRight: '0px',
          },
          borderRadius: '2rem',
          background: '#75818b',
        }}
        onClick={() => {
          element === 'film'
            ? (setUsedFilter('film'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeFilmButton'))
            : element === 'gameArts'
            ? (setUsedFilter('gameArts'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeGameArtsButton'))
            : element === 'gamesProgramming'
            ? (setUsedFilter('gamesProgramming'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeGamesProgrammingButton'))
            : element === 'web'
            ? (setUsedFilter('web'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeWebButton'))
            : element === 'audio'
            ? (setUsedFilter('audio'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeAudioButton'))
            : element === 'animation'
            ? (setUsedFilter('animation'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeAnimationButton'))
            : element === 'crossMedia'
            ? (setUsedFilter('crossMedia'),
              setActiveTagFitler(undefined),
              setActiveTagFitler('activeCrossMediaButton'))
            : '';
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
