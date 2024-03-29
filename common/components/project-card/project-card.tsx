import {
  Box,
  Chip,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineBookmark, HiOutlineHeart } from 'react-icons/hi';
import { apiClient } from '../../data/apiClient';

type ProjectCardProps = {
  projectId: string;
  coverPhotoId: string;
  userCreated: string;
  course: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  editProject?: boolean;
};

export const ProjectCard = ({
  projectId,
  coverPhotoId,
  userCreated,
  course,
  isLoading,
  setIsLoading,
  editProject,
}: ProjectCardProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();
  const router = useRouter();
  const [user, setUser] = useState<string>();
  const [userId, setUserId] = useState<string>();

  const imageUrl = `https://www.whatthebre.com/assets/${coverPhotoId}?quality=50`;

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await apiClient.get(
        `users?filter={ "id": { "_eq": "${userCreated}" }}`,
      );
      if (userResponse.status === 200) {
        setUser(
          `${userResponse.data.data[0].first_name} ${userResponse.data.data[0].last_name}`,
        );
        setUserId(userResponse.data.data[0].id);
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [setUser, setUserId]);

  const handleOpenProject = () => {
    if (editProject) {
      router.push({
        pathname: 'edit-project/[pid]',
        query: { pid: projectId },
      });
    } else {
      router.push({ pathname: 'project/[pid]', query: { pid: projectId } });
    }
  };

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: '10px',
            marginBottom: `${smBreakpointDown && '20px'}`,
            height: '100%',
            width: '100%',
          }}
        />
      ) : (
        <Grid
          item
          container
          boxShadow="none"
          borderRadius="10px"
          marginBottom={`${smBreakpointDown && '20px'}`}
          justifyContent="center"
          sx={{ paddingX: `${smBreakpointDown && '20px'}` }}
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
            sx={{ cursor: 'pointer', border: 'none', background: 'none' }}
            component="button"
            onClick={handleOpenProject}
          >
            <Image
              src={imageUrl}
              layout="fill"
              quality={75}
              className="project-image-border-radius image-container-project-card"
              priority
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
            <Grid item xs={7}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 600,
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
            </Grid>
            <Grid item xs={5}>
              <Chip
                // @ts-expect-error: todo
                label={t(`courses.${course}.label`)}
                sx={{
                  background: `${
                    course === 'film'
                      ? '#e0be36'
                      : course === 'gameart'
                      ? '#ef6351'
                      : course === 'gamesprogramming'
                      ? '#f87060'
                      : course === 'webdesign'
                      ? '#593f62'
                      : course === 'audio'
                      ? '#1f7a8c'
                      : course === 'visualeffects'
                      ? '#647aa3'
                      : course === 'contentcreation'
                      ? '#17bebb '
                      : ''
                  }`,
                  color: '#fff',
                  fontSize: '14px',
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
