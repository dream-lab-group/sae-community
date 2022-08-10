import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

type UserUrlProps = {
  formik: any;
  url_website: string;
  url_youtube: string;
  url_instagram: string;
  url_linkedin: string;
};

export const UserProfileUrls = ({
  url_website,
  url_youtube,
  url_instagram,
  url_linkedin,
  formik,
}: UserUrlProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: `${smBreakpointDown ? '0px' : '10px'}` }}
    >
      <>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
            id="url_website"
            name="url_website"
            label="Webseiten URL"
            value={url_website || ''}
            onChange={formik.handleChange}
            error={
              formik.touched.url_website && Boolean(formik.errors.url_website)
            }
            helperText={formik.touched.url_website && formik.errors.url_website}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
            id="url_youtube"
            name="url_youtube"
            label="Youtube URL"
            value={url_youtube || ''}
            onChange={formik.handleChange}
            error={
              formik.touched.url_youtube && Boolean(formik.errors.url_youtube)
            }
            helperText={formik.touched.url_youtube && formik.errors.url_youtube}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
            id="url_instagram"
            name="url_instagram"
            label="Instagram URL"
            value={url_instagram || ''}
            onChange={formik.handleChange}
            error={
              formik.touched.url_instagram &&
              Boolean(formik.errors.url_instagram)
            }
            helperText={
              formik.touched.url_instagram && formik.errors.url_instagram
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
            id="url_linkedin"
            name="url_linkedin"
            label="Linkedin URL"
            value={url_linkedin || ''}
            onChange={formik.handleChange}
            error={
              formik.touched.url_linkedin && Boolean(formik.errors.url_linkedin)
            }
            helperText={
              formik.touched.url_linkedin && formik.errors.url_linkedin
            }
          />
        </Grid>
      </>
    </Grid>
  );
};
