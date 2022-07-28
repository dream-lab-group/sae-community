import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { FormikValues } from 'formik';

type UserUrlProps = {
  urls: {};
  formik: FormikValues;
  formikProps: any;
};

export const UserProfileUrls = ({
  urls,
  formik,
  formikProps,
}: UserUrlProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const urlsData = Object.values(urls || {});

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: `${smBreakpointDown ? '0px' : '10px'}` }}
    >
      {urlsData.map((url:any) => {
            console.log(url.website)
      //   console.log(formikProps.initialValues.urls);
        //   console.log(url);
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                id="website"
                name="website"
                InputLabelProps={{
                  shrink: true,
                }}
                key={url.website}
                label={url.website}
                defaultValue={url.url}
                onChange={(value) => {
                  formik.setFieldValue(
                        "urls",
                        value !== null ? value: formikProps.initialValues.urls
                  )
                }}
                    error={
                      formik.touched.urls && Boolean(formik.errors.urls)
                    }
                    helperText={
                      formik.touched.urls && formik.errors.urls
                    }
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
