import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type UserContactInformationProps = {
  userContactElement: string;
};

export const UserContactInformation = ({
  userContactElement,
}: UserContactInformationProps) => {
  return (
    <Box
      sx={{
        background: '#e8e9eb',
        padding: '5px 15px',
        borderRadius: '60px',
        marginRight: '15px',
        marginBottom: '15px',
        cursor: 'default',
      }}
    >
      <Typography>{userContactElement}</Typography>
    </Box>
  );
};
