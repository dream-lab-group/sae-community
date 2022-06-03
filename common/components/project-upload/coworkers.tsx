import { Autocomplete, Grid, TextField } from '@mui/material';

export const Coworkers = () => {
  return (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        size="small"
        options={students}
        sx={{ width: '100%', marginTop: '20px' }}
        renderInput={(params) => <TextField {...params} label="Coworker" />}
      />
    </Grid>
  );
};

const students = [
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
