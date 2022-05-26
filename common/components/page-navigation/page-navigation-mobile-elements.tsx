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
          marginRight: '10px',
          '&:last-child': {
            marginRight: '10px',
          },
          width: '100%',
          borderRadius: '2rem',
          background: '#75818b',
        }}
      >
        <Typography
          noWrap
          sx={{
            padding: '5px 15px',
            fontSize: '14px',
            color: '#fff',
            fontWeight: '300',
            textAlign: 'center',
          }}
        >
          {/* @ts-expect-error: translation error during runtime */}
          {t(`courses.${course}.label`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
