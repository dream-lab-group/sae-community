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
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const buttonStyling = () => {
    if (element === 'film') {
      if (activeTagFilter === 'activeFilmButton') {
        return 'film-button-active';
      } else {
        return 'film-button';
      }
    } else if (element === 'gameart') {
      if (activeTagFilter === 'activeGameArtsButton') {
        return 'gamearts-button-active';
      } else {
        return 'gamearts-button';
      }
    } else if (element === 'gamesprogramming') {
      if (activeTagFilter === 'activeGamesProgrammingButton') {
        return 'gamesprogramming-button-active';
      } else {
        return 'gamesprogramming-button';
      }
    } else if (element === 'webdesign') {
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
    } else if (element === 'visualeffects') {
      if (activeTagFilter === 'activeAnimationButton') {
        return 'animation-button-active';
      } else {
        return 'animation-button';
      }
    } else if (element === 'contentcreation') {
      if (activeTagFilter === 'activeCrossMediaButton') {
        return 'cross-media-button-active';
      } else {
        return 'cross-media-button';
      }
    } else {
      return '';
    }
  };

  const handleActiveOnClick = () => {
    if (element === 'film') {
      if (activeTagFilter === 'activeFilmButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('film');
        setActiveTagFitler('activeFilmButton');
      }
    } else if (element === 'gameart') {
      if (activeTagFilter === 'activeGameArtsButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('gameart');
        setActiveTagFitler('activeGameArtsButton');
      }
    } else if (element === 'gamesprogramming') {
      if (activeTagFilter === 'activeGamesProgrammingButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('gamesprogramming');
        setActiveTagFitler('activeGamesProgrammingButton');
      }
    } else if (element === 'webdesign') {
      if (activeTagFilter === 'activeWebButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('webdesign');
        setActiveTagFitler('activeWebButton');
      }
    } else if (element === 'audio') {
      if (activeTagFilter === 'activeAudioButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('audio');
        setActiveTagFitler('activeAudioButton');
      }
    } else if (element === 'visualeffects') {
      if (activeTagFilter === 'activeAnimationButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('visualeffects');
        setActiveTagFitler('activeAnimationButton');
      }
    } else if (element === 'contentcreation') {
      if (activeTagFilter === 'activeCrossMediaButton') {
        setActiveTagFitler(undefined);
        setUsedFilter(undefined);
      } else {
        setUsedFilter('contentcreation');
        setActiveTagFitler('activeCrossMediaButton');
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
          handleActiveOnClick();
        }}
      >
        <Typography
          noWrap
          sx={{
            padding: `${lgBreakpointUp ? '10px 20px' : '8px 20px'}`,
            fontSize: `${smBreakpointDown ? '13px' : '15px'}`,
            color: '#fff',
            fontWeight: '300',
            textAlign: 'center',
            minWidth: '120px',
            overflow: 'unset',
            textOverflow: 'clip',
          }}
        >
          {/* @ts-expect-error: translation error during runtime */}
          {t(`courses.${element}.label`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
