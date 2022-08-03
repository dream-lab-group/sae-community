import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';

type ProjectInformationProps = {
  data: any;
};

export const ProjectInformation = ({ data }: ProjectInformationProps) => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [avatarId, setAvatarId] = useState(null);
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await apiClient.get(
        `users?filter={ "id": { "_eq": "${data.user_created}" }}`,
      );
      if (userResponse.status === 200) {
        setUser(
          `${userResponse.data.data[0].first_name} ${userResponse.data.data[0].last_name}`,
        );
        setUserId(userResponse.data.data[0].id);
        setAvatarId(userResponse.data.data[0].avatar);
      }
    };
    fetchUser();
  }, [setUser, setUserId, setAvatarId]);

  const avatarUrl = `https://www.whatthebre.com/assets/${avatarId}`;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: '#e2a165',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {avatarId !== null ? (
          <Image
            className="project-image-border-radius image-container"
            src={avatarUrl}
            layout="fill"
          />
        ) : (
          <></>
        )}
      </Box>
      <Box sx={{ widht: '100%', marginLeft: '20px' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
          {data.project_name}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
          }}
          component="button"
          onClick={() => {
            router.push(`/public-profile/${userId}`);
          }}
        >
          {user}
        </Typography>
      </Box>
    </Box>
  );
};
