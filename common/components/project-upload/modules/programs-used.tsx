import { Autocomplete, Grid, TextField } from '@mui/material';
import { CommonAutocompleteProps } from '../../../types/types';

export const ProgramsUsed = ({
  label,
  formikProps,
  ...props
}: CommonAutocompleteProps) => {
  return (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        freeSolo
        options={programs}
        sx={{ width: '100%', marginTop: '20px' }}
        onChange={(e, value) => {
          formikProps.setFieldValue(
            'programs',
            value !== null ? value : formikProps.initialValues.programs,
          );
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...props}
              {...params}
              label={label}
              name={props.name}
              value={formikProps.values.programs}
            />
          </>
        )}
      />
    </Grid>
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
