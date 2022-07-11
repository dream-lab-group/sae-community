import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

type UserUrlProps = {
  id?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  course: string;
  urls: string;
};

export const UserProfileUrls = ({
  id,
  first_name,
  last_name,
  email,
  description,
  course,
  urls,
}: UserUrlProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const urlsData = Object.values(urls);
console.log(urlsData)

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: `${smBreakpointDown ? '0px' : '10px'}` }}
    >
      <Grid item xs={12} sm={6}>
        <TextField
          required
          size="small"
          id="website"
          name="website"
          label="Webseiten URL"
          value={urlsData[0]}
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
          value={urlsData[1]}
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
          value={urlsData[2]}
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
          value={urlsData[3]}
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
      </Grid>
    </Grid>
  );
};
