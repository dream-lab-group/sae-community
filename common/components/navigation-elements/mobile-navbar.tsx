import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HiOutlineSearch } from 'react-icons/hi';
import { Globals } from '../../utils/utils';

import { CustomMobileNavButton } from './costum-mobile-button';

export const MobileNavbar = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          paddingX: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            background: '#fff',
            paddingY: '1rem',
            width: '100%',
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ fontWeight: 500, color: '#746D69' }}>
            Avatar
          </Typography>
        </Box>
        {Globals.mobileMenuProfileElements.map((navElement) => (
          <CustomMobileNavButton
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
          paddingX: '20px',
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
          }}
        >
          <Typography sx={{ fontWeight: 500, color: '#746D69' }}>
            {t('loginRegistration.signout')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
