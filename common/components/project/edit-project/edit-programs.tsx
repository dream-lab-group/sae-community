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
        options={softwares}
        sx={{ width: '100%', marginTop: '20px' }}
        value={programsData}
        // @ts-expect-error: todo
        isOptionEqualToValue={(option, value) => option.label === value.label}
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
  { label: 'DaVinCI Resolve', program: 'DaVinci Resolve' },
  { label: 'Docker', program: 'Docker' },
  { label: 'Figma', program: 'Figma' },
  { label: 'Final Cut Pro', program: 'Final Cut Pro' },
  { label: 'Garage Band', program: 'Garage Band' },
  { label: 'Sketch', program: 'Skech' },
  { label: 'Visual Studio Code', program: 'VsCode' },
  { label: 'Maya', program: 'Maya' },
];
