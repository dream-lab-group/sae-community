import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

export const UserProfileUrls = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} sx={{ marginTop: `${smBreakpointDown ? "0px" : "10px"}` }}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="website"
          name="website"
          label="Webseiten URL"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="youtube"
          name="youtube"
          label="Youtube URL"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="instagram"
          name="instagram"
          label="Instagram URL"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="linkedin"
          name="linkedin"
          label="LinkedIn URL"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
    </Grid>
  );
};
