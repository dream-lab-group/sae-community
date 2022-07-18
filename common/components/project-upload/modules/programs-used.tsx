import { Autocomplete, Grid, TextField } from '@mui/material';
import { useState } from 'react';
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
  { label: 'Ableton', program: 'Ableton' },
  { label: 'Adobe After Effects', program: 'Adobe After Effects' },
  { label: 'Adobe Illustrator', program: 'Adobe Illustrator' },
  { label: 'Adobe InDesign', program: 'Adobe InDesign' },
  { label: 'Adobe Lightroom', program: 'Adobe Lightroom' },
  { label: 'Adobe Photoshop', program: 'Adobe Photoshop' },
  { label: 'Adobe Premiere Pro', program: 'Adobe Premiere Pro' },
  { label: 'Blender', program: 'Blender' },
  { label: 'Cinema4D', program: 'Cinema4D' },
  { label: 'DaVinCI Resolve', program: 'DaVinci Resolve' },
  { label: 'Docker', program: 'Docker' },
  { label: 'Figma', program: 'Figma' },
  { label: 'Final Cut Pro', program: 'Final Cut Pro' },
  { label: 'Garage Band', program: 'Garage Band' },
  { label: 'Visual Studio Code', program: 'VsCode' },
  { label: 'Maya', program: 'Maya' },
];
