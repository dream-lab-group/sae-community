import {
  Autocomplete,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const programsData = Object.values(programs);
  const interestsData = Object.values(interests);

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
          defaultValue={programsData}
          renderInput={(params) => (
            <TextField {...params} label="Skills" />
          )}
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
          defaultValue={interestsData}
          renderInput={(params) => (
            <TextField {...params} label="Interessen" />
          )}
        />
      </Grid>
    </Grid>
  );
};
