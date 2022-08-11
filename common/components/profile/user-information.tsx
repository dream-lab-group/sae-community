import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { directus } from '../../../pages';
import placeholderImage from '../../../public/assets/placeholder.png';
import { apiClient } from '../../data/apiClient';

type UserInformationProps = {
  currentUser: any;
};

export const UserInformation = ({ currentUser }: UserInformationProps) => {
  const [readMe, setReadMe] = useState<any>('');

  useEffect(() => {
    const readMe = async () => {
      const readCurrentUser = await directus.users.me.read();
      const response = await apiClient.get(`users/${readCurrentUser.id}`);
      if (response.status === 200) {
        setReadMe(response.data.data);
      }
    };
    readMe();
  }, [setReadMe]);

  const imageUrl = `https://www.whatthebre.com/assets/${currentUser.avatar}`;
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: -20,
      }}
    >
      <Box
        sx={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '5px solid #7514f5',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginRight: '30px',
        }}
      >
        {currentUser.avatar === null ? (
          <Image
            src={placeholderImage}
            style={{ borderRadius: '50%' }}
            layout="intrinsic"
            alt="profilepicture"
            priority
            className="project-image-border-radius image-container"
          />
        ) : (
          <Image
            src={imageUrl}
            style={{ borderRadius: '50%' }}
            layout="fill"
            alt="profilepicture"
            priority
            className="project-image-border-radius image-container-profile"
          />
        )}
      </Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
            {currentUser.first_name}
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: '20px', marginLeft: '5px' }}
          >
            {currentUser.last_name}
          </Typography>
        </Box>
        {currentUser.id === readMe.id && (
          <Typography>
            {/* @ts-expect-error Translation keys only exist during runtime */}
            {t(`courses.${currentUser.course}.label`)}
          </Typography>
        )}
        {currentUser.id !== readMe.id && (
          <Typography>
            {/* @ts-expect-error Translation keys only exist during runtime */}
            {t(`courses.${currentUser.course}.label`)}
            {/* {currentUser.course.charAt(0).toUpperCase() +
            currentUser.course.slice(1)} */}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
