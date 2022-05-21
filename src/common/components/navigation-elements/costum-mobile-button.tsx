import { ButtonUnstyled } from '@mui/base';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CustomMobileNavButtonProps } from '../header/types';

const CustomMobileNavButtonStyle = styled(ButtonUnstyled)`
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
`;

export const CustomMobileNavButton = ({
  key,
  value,
  navElement,
}: CustomMobileNavButtonProps) => {
  const { t } = useTranslation();
  return (
    <>
      {/* @ts-expect-error */}
      <CustomMobileNavButtonStyle
        key={key}
        value={value}
        sx={{
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem',
          display: 'flex',
          background: '#fff',
          paddingY: '1rem',
        }}
      >
        <Typography sx={{ fontWeight: 500, color: '#746D69' }}>
          {/* @ts-expect-error: translation only during runtime */}
          {t(`navigation.${navElement}`)}
        </Typography>
      </CustomMobileNavButtonStyle>
    </>
  );
};
