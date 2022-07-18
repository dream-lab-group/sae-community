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
  const urlsData = Object.values(urls);

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: `${smBreakpointDown ? '0px' : '10px'}` }}
    >
      {urlsData.map((urlThingy) => {
        /*         console.log(formikProps.initialValues.urls);
         */
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                size="small"
                id="website"
                name="website"
                InputLabelProps={{
                  shrink: true,
                }}
                /* @ts-expect-error: todo */
                label={urlThingy.webseite}
                /* @ts-expect-error: todo */
                defaultValue={urlThingy.url}
                /*                 defaultValue={(value) => {
                  formik.setFieldValue(
                    'urls',
                    value !== null ? value : formikProps.initialValues.urls,
                  );
                }}  */
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
