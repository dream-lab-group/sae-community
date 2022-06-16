import {
  Autocomplete,
  Grid,
  TextField,
} from '@mui/material';

export const SkillsInterests = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={skills}
          sx={{marginTop: '20px' }}
          renderInput={(params) => (
            <TextField {...params} label="Programm Skills" />
          )}
        />
      </Grid>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={interests}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Interessen" />}
        />
      </Grid>
    </Grid>
  );
};

const skills = [{ label: 'HTML' }, { label: 'CSS' }, { label: 'React' }];
const interests = [
  { label: 'Programming' },
  { label: 'Drawing' },
  { label: 'Gaming' },
];
