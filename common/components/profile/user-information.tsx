import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import placeholderImage from '../../../public/assets/placeholder.png';
import { useTranslation } from 'react-i18next';

type UserInformationProps = {
  currentUser: any;
};

export const UserInformation = ({ currentUser }: UserInformationProps) => {
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
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '5px solid #7514f5',
          background: '#fff',
          marginRight: '30px',
          position: 'relative',
        }}
      >
        {currentUser.avatar === null ? (
          <Image
            src={placeholderImage}
            style={{ borderRadius: '50%' }}
            layout="fill"
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
        {/* @ts-expect-error: todo */}
        <Typography>{t(`courses.${currentUser.course}.label`)}</Typography>
      </Box>
    </Box>
  );
};
