import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Globals } from '../../utils/utils';
import { UserContactInformation } from './user-contact-information';

export const UserDescription = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
      }}
    >
      <Typography
        sx={{ fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}
      >
        {t('profile.aboutMe')}
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: 1.5,
        }}
      >
        Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: ' 20px' }}>
        {Globals.userContactInformation.map((contactElement) => (
          <UserContactInformation
            key={contactElement}
            userContactElement={contactElement}
          />
        ))}
      </Box>
    </Box>
  );
};
