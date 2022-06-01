import {
  Chip,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineBookmark } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';
import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
  id: string;
  userCreated: string;
  course: string;
};

export const ProjectCard = ({ id, userCreated, course }: ProjectCardProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();
  const [image, setImage] = useState('');
  const [user, setUser] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const imageResponse = await apiClient.get(
        `items/projects_files?filter={"projects_id": {"_eq": "${id}"}}`,
      );
      if (imageResponse.status === 200) {
        setImage(imageResponse.data.data[0].directus_files_id);
        setLoading(false);
      }
    };
    const fetchUser = async () => {
      const userResponse = await apiClient.get(
        `users?filter={ "id": { "_eq": "${userCreated}" }}`,
      );
      if (userResponse.status === 200) {
        setUser(
          `${userResponse.data.data[0].first_name} ${userResponse.data.data[0].last_name}`,
        );
      }
    };
    fetchUser();
    fetchImage();
  }, [setImage, setUser]);
  const imageUrl = `https://www.whatthebre.com/assets/${image}`;

  return (
    <Grid
      item
      container
      boxShadow="none"
      borderRadius="10px"
      width="100%"
      height="100%"
      marginBottom={`${smBreakpointDown && '20px'}`}
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        position="relative"
        height={`${
          smBreakpointDown
            ? '280px'
            : mdBreakpointDown
            ? '300px'
            : mdBreakpointUp
            ? '300px'
            : lgBreakpointUp
            ? '540px'
            : ''
        }`}
        maxHeight="540px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Image
          src={imageUrl}
          layout="fill"
          quality={10}
          className="project-image-border-radius image-container"
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
      </Grid>
      <Grid
        item
        xs={12}
        container
        margin="10px 0 0 0"
        padding="5px 0"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
            {user}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Chip
            // @ts-expect-error: todo
            label={t(`projects.${course}.label`)}
            sx={{
              background: '#364156',
              color: '#fff',
              fontSize: '14px',
              width: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
