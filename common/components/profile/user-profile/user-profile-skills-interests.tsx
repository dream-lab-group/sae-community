import {
  Autocomplete,
  Grid,
  TextField,
} from '@mui/material';
import { FormikValues } from 'formik';

type UserSkillsProps = {
  programs: {};
  interests: {};
  formik: FormikValues;
  formikProps: any;
};

export const SkillsInterests = ({
  programs,
  interests,
  formik,
  formikProps,
}: UserSkillsProps) => {
  const programsData = Object.values(programs || {});
  const interestsData = Object.values(interests || {});

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={programsData}
          sx={{ marginTop: '20px' }}
          onChange={(e, value) => {
            formik.setFieldValue(
              'programs',
              value !== null ? value : formikProps.initialValues.programs,
            );
          }}
          value={programsData} /* Changed from defaultValue to value bc of an errormessage */
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Grid>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={interestsData}
          sx={{ marginTop: '20px' }}
          onChange={(e, value) => {
            formik.setFieldValue(
              'interests',
              value !== null ? value : formikProps.initialValues.interests,
            );
          }}
          value={interestsData} /* Changed from defaultValue to value bc of an errormessage */
          renderInput={(params) => <TextField {...params} label="Interessen" />}
        />
      </Grid>
    </Grid>
  );
};
