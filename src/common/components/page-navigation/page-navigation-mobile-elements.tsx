import { ButtonBase, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageNavigationElementProps } from './types';

export const PageNavigationMobileElement = ({
  course,
}: PageNavigationElementProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonBase
        key={course}
        value={course}
        sx={{
          padding: '5px 5px',
          marginRight: '10px',
          '&:last-child': {
            marginRight: '10px',
          },
          width: '100%',
          borderRadius: '2rem',
          background: `${
            course === 'webdesign'
              ? '#364156'
              : course === 'gameart'
              ? '#5398BE'
              : course === 'gamesprogramming'
              ? '#20A39E'
              : course === 'film'
              ? '#57A773'
              : course === 'visualeffects'
              ? '#3E885B'
              : course === 'audio'
              ? '#A09CB0'
              : course === 'contentcreation'
              ? '#7D4E57'
              : '#D66853'
          }`,
        }}
      >
        <Typography
          noWrap
          sx={{ padding: '5px 10px', fontSize: '14px', color: '#fff' }}
        >
          {/* @ts-expect-error: translation error during runtime */}
          {t(`courses.${course}.label`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
