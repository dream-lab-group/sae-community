import { Autocomplete, Grid, TextField } from '@mui/material';

export const EditPrograms = ({
  programs,
  formikProps,
}: {
  programs: any;
  formikProps: any;
}) => {
  const programsData = Object.values(programs || {});

  return programs ? (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        freeSolo
        options={softwares}
        sx={{ width: '100%', marginTop: '20px' }}
        value={programsData}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={(e, value) => {
          formikProps.setFieldValue(
            'programs',
            value !== null ? value : formikProps.initialValues.programs,
          );
        }}
        renderInput={(params) => (
          <>
            <TextField {...params} label="Programme" />
          </>
        )}
      />
    </Grid>
  ) : (
    <></>
  );
};

const softwares = [
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
  'Adobe XD',
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
