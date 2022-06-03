import { Box } from '@mui/system';
import Image from 'next/image';
import imageOne from '../../../public/assets/project-file-1.webp';

export const ProjectPictures = () => {
  return (
    <Box
      sx={{
        marginTop: '35px',
        width: '100%',
        height: '250px',
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
  );
};
