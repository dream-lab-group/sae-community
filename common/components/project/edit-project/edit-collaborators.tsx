import { Autocomplete, Grid, TextField } from '@mui/material';

export const EditCollaborators = ({
  currentCollaborators,
}: {
  currentCollaborators: any;
}) => {
  const collaboratorsData = Object.values(currentCollaborators || {});

  return collaborators ? (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        options={collaborators}
        sx={{ width: '100%', marginTop: '20px' }}
        value={collaboratorsData}
        // @ts-expect-error: todo
        isOptionEqualToValue={(option, value) => option.label === value.label}
        renderInput={(params) => (
          <>
            <TextField {...params} label="Collaborators" />
          </>
        )}
      />
    </Grid>
  ) : (
    <></>
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
