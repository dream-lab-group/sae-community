import { Autocomplete, Grid, TextField } from '@mui/material';

export const SkillsInterests = ({
  currentPrograms,
  currentInterests,
  formik,
}: {
  currentPrograms: any;
  currentInterests: any;
  formik: any;
}) => {
  const programsData = Object.values(currentPrograms || {});
  const interestsData = Object.values(currentInterests || {});

  return programs || interests ? (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={programs}
          sx={{ marginTop: '30px' }}
          value={programsData}
          // @ts-expect-error: todo
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(e, value) => {
            formik.setFieldValue(
                  'programs',
                  value !== null ? value : formik.initialValues.programs,
                  );
          }}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                label="Programme"
              />
            </>
          )}
        />
      </Grid>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={interests}
          value={interestsData}
          // @ts-expect-error: todo
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(e, value) => {
            formik.setFieldValue(
                  'interests',
                  value !== null ? value : formik.initialValues.interests,
                  );
          }}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                label="Interessen"
              />
            </>
          )}
        />
      </Grid>
    </Grid>
  ) : (
    <></>
  );
};

const programs = [
  {
    label: 'Visual Studio Code',
    interests: 'VsCode',
  },
  {
    label: 'Figma',
    program: 'Figma',
  },
  {
    label: 'Docker',
    program: 'Docker',
  },
  {
    label: 'Adobe Lightroom',
    program: 'Adobe Lightroom',
  },
  {
    label: 'Adobe Photoshop',
    program: 'Adobe Photoshop',
  },
  {
    label: 'Adobe Illustrator',
    program: 'Adobe Illustrator',
  },
];

const interests = [
  {
    label: 'Visual Studio Code',
    interests: 'VsCode',
  },
  {
    label: 'Figma',
    program: 'Figma',
  },
  {
    label: 'Docker',
    program: 'Docker',
  },
  {
    label: 'Adobe Lightroom',
    program: 'Adobe Lightroom',
  },
  {
    label: 'Adobe Photoshop',
    program: 'Adobe Photoshop',
  },
  {
    label: 'Adobe Illustrator',
    program: 'Adobe Illustrator',
  },
];
