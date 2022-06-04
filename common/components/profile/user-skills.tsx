import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type UserSkillsProps = {
  userSkillsElement: string;
};

export const UserSkills = ({ userSkillsElement }: UserSkillsProps) => {
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
      <Typography>{userSkillsElement}</Typography>
    </Box>
  );
};
