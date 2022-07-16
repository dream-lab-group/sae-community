import { ProjectDto } from '../../types/types';
import { postNewProject } from './request';

export const handlePostNewProject = async (data: ProjectDto) => {
  const postNewProjectStatus = await postNewProject(data);
  return { postNewProjectStatus };
};
