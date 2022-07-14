import {
  Autocomplete,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

type UserSkillsProps = {
  programs: string;
  interests: string;
};

export const SkillsInterests = ({
  programs,
  interests,
}: UserSkillsProps) => {
  const theme = useTheme();
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const programsData = Object.values(programs);
  const interestsData = Object.values(interests);

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={programsData}
          sx={{ marginTop: '20px' }}
          value={programsData}
          renderInput={(params) => (
            <TextField {...params} label="Programm Skills" />
          )}
        />
      </Grid>
      <Grid item sm={12} md={6} width="100%">
        <Autocomplete
          multiple
          size="small"
          options={interestsData}
          sx={{
            width: '100%',
            marginTop: `${mdBreakpointDown ? '0px' : '20px'}`,
          }}
          value={interestsData}
          renderInput={(params) => <TextField {...params} label="Interessen" />}
        />
      </Grid>
    </Grid>
  );
};
