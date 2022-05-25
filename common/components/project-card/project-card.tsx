import { Card, Chip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import image1 from '../../../public/assets/howen-1ZapU2hXhzY-unsplash.jpeg';
import { HiOutlineHeart, HiOutlineBookmark } from 'react-icons/hi';

export const ProjectCard = () => {
  return (
    <Card sx={{ borderRadius: '10px', boxShadow: 'none' }}>
      <Box sx={{ position: 'relative', height: '265px', width: '340px' }}>
        <Image
          src={image1}
          layout="fill"
          className="project-image-border-radius"
        />
        <Box
          component="button"
          sx={{
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            bottom: '68px',
            background: '#fff',
            width: '56px',
            height: '46px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2rem 0 0 2rem',
          }}
        >
          <HiOutlineHeart size={30} />
        </Box>
        <Box
          component="button"
          sx={{
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            bottom: '10px',
            background: '#fff',
            width: '56px',
            height: '46px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2rem 0 0 2rem',
          }}
        >
          <HiOutlineBookmark size={30} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px 0',
          marginTop: '5px',
        }}
      >
        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
          Studentname
        </Typography>
        <Chip
          label="Webdevelopment"
          sx={{ background: '#364156', color: '#fff', fontSize: '16px' }}
        />
      </Box>
    </Card>
  );
};
