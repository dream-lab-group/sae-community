import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';

type ProjectCollaboratorsProps = {
  projectCollaboratorsId: string;
};

export const ProjectCollaborators = ({
  projectCollaboratorsId,
}: ProjectCollaboratorsProps) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await apiClient.get(
        `users?filter={ "id": { "_eq": "${projectCollaboratorsId}" }}`,
      );
      if (userResponse.status === 200) {
        setUser(userResponse.data.data[0]);
      }
    };
    fetchUser();
  }, [setUser]);

  return user !== null || undefined ? (
    <Box
      className="user-default-button"
      sx={{
        padding: '5px 15px',
        borderRadius: '60px',
        marginRight: '15px',
        marginBottom: '15px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
      }}
      component="button"
      onClick={() => {
        router.push(`/public-profile/${user.id}`);
      }}
    >
      {user.first_name && user.last_name && (
        <Typography sx={{ fontSize: '15px' }}>
          {`${user.first_name} ${user.last_name}`}
        </Typography>
      )}
    </Box>
  ) : (
    <></>
  );
};
