import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

type UserUrlProps = {
  urls: string;
};

export const UserProfileUrls = ({ urls }: UserUrlProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const urlsData = Object.values(urls);
  console.log(urlsData);

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: `${smBreakpointDown ? '0px' : '10px'}` }}
    >
      {urlsData.map((urlThingy) => {
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                size="small"
                id="website"
                name="website"
                /* @ts-expect-error: todo */
                label={urlThingy.webseite}
                /* @ts-expect-error: todo */
                value={urlThingy.url}
                fullWidth
                sx={{ marginTop: '10px', fontSize: '8px' }}
              />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
