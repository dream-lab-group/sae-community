import axios from 'axios';
import { ProjectDto } from '../../types/types';
import { apiClient } from '../apiClient';

export const postNewProject = async ({
  project_name,
  user_created,
  cover_photo,
  course,
  description,
  collaborators,
  embedded_urls,
  comment_function,
  external_project,
  project_files,
}: ProjectDto) => {
  try {
    console.log(user_created);
    const { status, data }: { status: number; data: any } =
      await apiClient.post('items/projects', {
        user_created,
        project_name,
        cover_photo,
        course,
        description,
        collaborators,
        embedded_urls,
        comment_function,
        external_project,
        project_files,
      });
    if (status === 200) {
      return {
        status: status,
        data: data,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
      };
    }
  }
};
