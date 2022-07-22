import { Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import audioImage from '../../../public/assets/audio-file.png';

export const ProjectAudioFile = () => {
  return (
    <Box
      sx={{
        marginY: '30px',
        width: '100%',
        height: '50px',
        position: 'relative',
      }}
    >
      <Image className="image-container" src={audioImage} layout="responsive" />
    </Box>
  );
};
