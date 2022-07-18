import { Autocomplete, Grid, TextField } from '@mui/material';
import { CommonAutocompleteProps } from '../../../types/types';

export const Collaborators = ({
  label,
  formikProps,
  ...props
}: CommonAutocompleteProps) => {
  return (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        options={collaborators}
        sx={{ width: '100%', marginTop: '20px' }}
        onChange={(e, value) => {
          formikProps.setFieldValue(
            'collaborators',
            value !== null ? value : formikProps.initialValues.collaborators,
          );
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...props}
              {...params}
              label={label}
              name={props.name}
              value={formikProps.values.collaborators}
            />
          </>
        )}
      />
    </Grid>
  );
};

const collaborators = [
  { label: 'Hadrian Chio', firstname: 'Hadrian', lastname: 'Chio' },
  { label: 'Sarah Candolfi', firstname: 'Sarah', lastname: 'Candolfi' },
  { label: 'Claudio Mühle', firstname: 'Claudio', lastname: 'Mühle' },
  { label: 'Michel Weber', firstname: 'Michel', lastname: 'Weber' },
  { label: 'Nikola Vucic', firstname: 'Nicola', lastname: 'Vucic' },
  {
    label: 'Fiona Hilpertshauser',
    firstname: 'Fiona',
    lastname: 'Hilpertshauser',
  },
  { label: 'Jasmin Fischili', firstname: 'Jasmin', lastname: 'Fischli' },
  { label: 'Manuela Pfister', firstname: 'Manuela', lastname: 'Pfister' },
];
