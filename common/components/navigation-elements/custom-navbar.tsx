import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Globals } from '../../utils/utils';
import { AppBarHeaderProps } from '../header/types';
import { CustomNavButton } from './costum-button';

export const CustomNavbar = ({ menuOpen }: AppBarHeaderProps) => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: `${mdBreakpointDown ? '80px' : '103px'}`,
        }}
      >
        <ButtonBase
          sx={{
            background: '#fff',
            paddingY: '1rem',
            width: '100%',
            cursor: 'pointer',
            paddingX: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: '#746D69',
              fontSize: `${mdBreakpointDown ? '16px' : '20px'}`,
            }}
          >
            Avatar
          </Typography>
        </ButtonBase>
        {Globals.mobileMenuProfileElements.map((navElement) => (
          <CustomNavButton
            key={navElement}
            value={navElement}
            navElement={navElement}
          />
        ))}
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid #E8E9EB',
          width: '100%',
          marginY: '10px',
        }}
      />
      <Box
        sx={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            background: '#fff',
            paddingY: '1rem',
            width: '100%',
            cursor: 'pointer',
            paddingX: '20px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: '#F02D3A',
              fontSize: `${mdBreakpointDown ? '16px' : '20px'}`,
            }}
          >
            {t('loginRegistration.signout')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
