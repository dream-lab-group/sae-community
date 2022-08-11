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
          id="test"
          multiple
          size="small"
          freeSolo
          options={programs}
          sx={{ marginTop: '30px' }}
          value={programsData}
          isOptionEqualToValue={(option, value) => option === value}
          onChange={(e, value) => {
            formik.setFieldValue(
              'programs',
              value !== null
                ? value || programs
                : formik.initialValues.programs,
            );
          }}
          renderInput={(params) => (
            <>
              <TextField {...params} label="Programme" />
            </>
          )}
        />
      </Grid>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          freeSolo
          options={interests}
          sx={{ marginTop: '30px' }}
          value={interestsData}
          isOptionEqualToValue={(option, value) => option === value}
          onChange={(e, value) => {
            formik.setFieldValue(
              'interests',
              value !== null ? value : formik.initialValues.interests,
            );
          }}
          renderInput={(params) => (
            <>
              <TextField {...params} label="Interessen" />
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
  'Ableton',
  'Adobe After Effects',
  'Adobe Animate',
  'Adobe Audition',
  'Adobe Character Animator',
  'Adobe Dimension',
  'Adobe Dreamweaver',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe Lightroom',
  'Adobe Photoshop',
  'Adobe Premiere Pro',
  'Adobe Premiere Rush',
  "Adobe XD', program",
  'Balsamiq',
  'Blender',
  'Cinema4D',
  'Blackmagic Design DaVinci Resolve',
  'Docker',
  'Figma',
  'Final Cut Pro',
  'Garage Band',
  'Sketch',
  'Visual Studio Code',
  'Maya',
];

const interests = [
  'Arts',
  'Cooking',
  'Design',
  'Eating',
  'Ethical Design',
  'Gaming',
  'Movies',
  'Reading',
  'Sports',
];
