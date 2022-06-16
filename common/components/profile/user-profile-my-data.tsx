import { Grid, TextField } from '@mui/material';

export const UserProfileMyData = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="firstname"
          name="firstname"
          label="Vorname"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px', color: '#00000066' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="lastname"
          name="lastname"
          label="Nachname"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="email"
          name="email"
          label="E-Mail"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="email"
          name="email"
          label="Fachrichtung"
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
    </Grid>
  );
};
