import { ButtonBase, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import imageOne from '../../../public/assets/project-file-1.webp';
import { BiChevronRight } from 'react-icons/bi';

export const LastProjects = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
        Letzte Projekte
      </Typography>
      <Box
        sx={{
          width: '100%',
          borderRadius: '15px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '285px',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <Image
            className="project-image-border-radius image-container"
            src={imageOne}
            layout="fill"
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '2px',
            background: '#e8e9eb',
            marginTop: '25px',
          }}
        />
        <ButtonBase
          sx={{
            width: '100%',
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'space-between',
            maxWidth: '130px',
            marginTop: '20px',
          }}
        >
          <Typography>Alle Ansehen</Typography>
          <BiChevronRight size={30} />
        </ButtonBase>
      </Box>
    </Box>
  );
};
