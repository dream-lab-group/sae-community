import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ChangePassword = () => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 'fontWeightBold',
          alignSelf: 'flex-start',
        }}
      >
        Profil Einstellungen
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            size="small"
            id="oldPassword"
            name="oldPassword"
            label="Altes Passwort"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            size="small"
            id="newPassword"
            name="newPassword"
            label="Neues Passwort"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
          />
        </Grid>
      </Grid>
      <Button
        className="project-button-publish"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '170px'}`,
          marginTop: '20px',
          height: '56px',
          /* marginLeft: `${mdBreakpointDown ? '' : '20px'}`, */
        }}
      >
        {t('profileSettings.savePassword')}
      </Button>
    </Box>
  );
};
