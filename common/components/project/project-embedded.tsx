import { Box } from '@mui/system';
import Image from 'next/image';
import embeddedImage from '../../../public/assets/project-embedded-1.webp';

export const ProjectEmbedded = () => {
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
        src={embeddedImage}
        layout="fill"
      />
    </Box>
  );
};
