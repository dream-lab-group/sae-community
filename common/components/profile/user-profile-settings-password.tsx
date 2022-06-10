import { Grid, TextField } from '@mui/material';

export const ChangePassword = () => {
  return (
    <Grid container spacing={2} sx={{marginTop: '10px'}}>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
      <Grid item xs={6}>
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
