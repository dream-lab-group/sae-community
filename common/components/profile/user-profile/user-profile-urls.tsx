import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { FormikValues } from 'formik';

type UserUrlProps = {
  urlName: string;
  url: string;
  formik: FormikValues;
  formikProps: any;
};

export const UserProfileUrls = ({
  urlName,
  url,
  formik,
  formikProps,
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
            id="urls"
            name="urls"
            InputLabelProps={{
              shrink: true,
            }}
            label={urlName}
            defaultValue={url}
            onChange={(value) => {
            //   value.persist();
              formik.setFieldValue(
                'urls',
                value.target.value !== null
                  ? value.target.value
                  : formikProps.initialValues.urls,
              );
              console.log(value.target.value);
            }}
            error={formik.touched.urls && Boolean(formik.errors.urls)}
            helperText={formik.touched.urls && formik.errors.urls}
            fullWidth
            sx={{ marginTop: '10px', fontSize: '8px' }}
          />
        </Grid>
      </>
    </Grid>
  );
};
