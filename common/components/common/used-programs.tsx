import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type UsedProgramProps = {
  usedProgramElement: string;
};

export const UsedProgram = ({ usedProgramElement }: UsedProgramProps) => {
  return (
    <Box
      className="user-default-button"
      sx={{
        padding: '5px 15px',
        borderRadius: '60px',
        marginRight: '15px',
        marginBottom: '15px',
        cursor: 'default',
      }}
    >
      <Typography sx={{ fontSize: '15px' }}>{usedProgramElement}</Typography>
    </Box>
  );
};
