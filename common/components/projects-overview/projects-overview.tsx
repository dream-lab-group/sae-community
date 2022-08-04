import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';
import { ProjectCard } from '../project-card/project-card';

type ProjectsOverviewProps = {
  currentUserId: string;
  data: any;
  usedFilter: string | undefined;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsOverview = ({
  currentUserId,
  data,
  usedFilter,
  isLoading,
  setIsLoading,
}: ProjectsOverviewProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const [projects, setProjects] = useState(data);

  useEffect(() => {
    if (usedFilter === 'film') {
      const getFilmProjects = async () => {
        setProjects(undefined);
        const filmProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "film" }}`,
        );
        if (filmProjectsResponse.status === 200) {
          setProjects(filmProjectsResponse.data.data);
        }
      };
      getFilmProjects();
    } else if (usedFilter === 'gameArts') {
      setProjects(undefined);
      const getGameArtsProjects = async () => {
        const gameArtsProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "gameart" }}`,
        );
        if (gameArtsProjectsResponse.status === 200) {
          setProjects(gameArtsProjectsResponse.data.data);
        }
      };
      getGameArtsProjects();
    } else if (usedFilter === 'gamesProgramming') {
      const getGamesProgrammingProjects = async () => {
        setProjects(undefined);
        const gamesProgrammingProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "gamesprogramming" }}`,
        );
        if (gamesProgrammingProjectsResponse.status === 200) {
          setProjects(gamesProgrammingProjectsResponse.data.data);
        }
      };
      getGamesProgrammingProjects();
    } else if (usedFilter === 'web') {
      setProjects(undefined);
      const webProjects = async () => {
        const webProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "webdesign" }}`,
        );
        if (webProjectsResponse.status === 200) {
          setProjects(webProjectsResponse.data.data);
        }
      };
      webProjects();
    } else if (usedFilter === 'audio') {
      const getAudioProjects = async () => {
        setProjects(undefined);
        const audioProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "audio" }}`,
        );
        if (audioProjectsResponse.status === 200) {
          setProjects(audioProjectsResponse.data.data);
        }
      };
      getAudioProjects();
    } else if (usedFilter === 'animation') {
      const getvisualEffectsProjects = async () => {
        setProjects(undefined);
        const visualEffectsProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "visualeffects" }}`,
        );
        if (visualEffectsProjectsResponse.status === 200) {
          setProjects(visualEffectsProjectsResponse.data.data);
        }
      };
      getvisualEffectsProjects();
    } else if (usedFilter === 'crossMedia') {
      const getContentCreationProjects = async () => {
        setProjects(undefined);
        const contentCreationProjectsResponse = await apiClient.get(
          `items/projects?filter={"course": { "_eq": "contentcreation" }}`,
        );
        if (contentCreationProjectsResponse.status === 200) {
          setProjects(contentCreationProjectsResponse.data.data);
        }
      };
      getContentCreationProjects();
    }
  }, [setProjects, usedFilter]);

  return (
    <Grid
      container
      paddingY="40px"
      paddingX={`${
        smBreakpointDown ? '0px' : desktopBreakpointUp ? '60px' : '40px'
      }`}
      spacing={{ sm: 5, md: 3, lg: 3, xl: 3, desktop: 4, uhd: 4, kuhd: 4 }}
      className="grid-container"
    >
      {projects !== undefined ? (
        <>
          {projects.map((project: any) => (
            <>
              {currentUserId !== project.user_created && (
                <ProjectCard
                  key={project.id}
                  projectId={project.id}
                  coverPhotoId={project.cover_photo}
                  userCreated={project.user_created}
                  course={project.course}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              )}
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ProjectsOverview;
