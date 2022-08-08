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
  console.log(programsData);

  return programs || interests ? (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          freeSolo
          options={programs}
          sx={{ marginTop: '30px' }}
          value={programsData}
          // @ts-expect-error: todo
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(e, value) => {
            console.log(value)
            formik.setFieldValue(
              'programs',
              value !== null ? value : formik.initialValues.programs,
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
          options={interests}
          sx={{ marginTop: '30px' }}
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
  { label: 'Ableton', program: 'Ableton' },
  { label: 'Adobe After Effects', program: 'Adobe After Effects' },
  { label: 'Adobe Animate', program: 'Adobe Animate' },
  { label: 'Adobe Audition', program: 'Adobe Audition' },
  { label: 'Adobe Character Animator', program: 'Adobe Character Animator' },
  { label: 'Adobe Dimension', program: 'Adobe Dimension' },
  { label: 'Adobe Dreamweaver', program: 'Adobe Dreamweaver' },
  { label: 'Adobe Illustrator', program: 'Adobe Illustrator' },
  { label: 'Adobe InDesign', program: 'Adobe InDesign' },
  { label: 'Adobe Lightroom', program: 'Adobe Lightroom' },
  { label: 'Adobe Photoshop', program: 'Adobe Photoshop' },
  { label: 'Adobe Premiere Pro', program: 'Adobe Premiere Pro' },
  { label: 'Adobe Premiere Rush', program: 'Adobe Premiere Rush' },
  { label: 'Adobe XD', program: 'Adobe XD' },
  { label: 'Balsamiq', program: 'Balsamiq' },
  { label: 'Blender', program: 'Blender' },
  { label: 'Cinema4D', program: 'Cinema4D' },
  {
    label: 'Blackmagic Design DaVinci Resolve',
    program: 'Blackmagic Design DaVinci Resolve',
  },
  { label: 'Docker', program: 'Docker' },
  { label: 'Figma', program: 'Figma' },
  { label: 'Final Cut Pro', program: 'Final Cut Pro' },
  { label: 'Garage Band', program: 'Garage Band' },
  { label: 'Sketch', program: 'Skech' },
  { label: 'Visual Studio Code', program: 'VsCode' },
  { label: 'Maya', program: 'Maya' },
];

const interests = [
  {
    label: 'Visual Studio Code',
    interest: 'VsCode',
  },
  {
    label: 'Figma',
    interest: 'Figma',
  },
  {
    label: 'Docker',
    interest: 'Docker',
  },
  {
    label: 'Adobe Lightroom',
    interest: 'Adobe Lightroom',
  },
  {
    label: 'Adobe Photoshop',
    interest: 'Adobe Photoshop',
  },
  {
    label: 'Adobe Illustrator',
    interest: 'Adobe Illustrator',
  },
];
