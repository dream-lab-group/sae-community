import { ButtonBase, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomMobileNavButtonProps } from '../header/types';

export const CustomMobileNavButton = ({
  navElement,
}: CustomMobileNavButtonProps) => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonBase
        sx={{
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem',
          background: '#fff',
          paddingY: '1rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Typography sx={{ fontWeight: 500, color: '#746D69' }}>
          {/* @ts-expect-error: translation only during runtime */}
          {t(`navigation.${navElement}`)}
        </Typography>
      </ButtonBase>
    </>
  );
};
