import axios from 'axios';
import { directus } from '../../../pages';
import { apiClient } from '../apiClient';

export const deleteFiles = async () => {
  /* Get User */
  const userId = await directus.users.me.read();
  const userResponse = await apiClient.get(`users/${userId.id}`);
  if (userResponse.status === 200) {
    const currentUser = userResponse.data.data;
    console.log('Found current User:');
    console.log(currentUser);
    /*    Get User Avatar */
    if (currentUser.avatar != null) {
      console.log('Avatar available');
      try {
        /* Delete avatar */
        //   const deleteAvatar = await apiClient.delete(
        //     `/files/${currentUser.avatar}`,
        //   );
        //   if (deleteAvatar.status === 200) {
        console.log('Avatar deleted');
        try {
          /* Search for all Projects */
          const getUserFiles = await apiClient.get(
            `/items/projects?filter={"user_created":{"_eq": "2624a92f-5ec9-47c6-8f9c-6a6ffb175496"}}` /* ${currentUser.id} */,
          );
          /* If there are Projects available .... */
          if (getUserFiles.data.data.length !== 0) {
            console.log('Project Data available');
            console.log(getUserFiles);
            const projectId = getUserFiles.data.data[0].id;
            console.log(projectId);
            if (projectId !== null) {
              /* ... Check for project files with project id */
              console.log('Project Id is available');
              const getProjectFiles = await apiClient.get(
                `/items/projects_files?filter={"projects_id":{"_eq": "e295e29d-f45d-4f5f-bed4-42d8c8616ae1"}}` /* ${projectId} */,
              );
              if (getProjectFiles.status === 200) {
                /* Get Directus File Id */
                console.log(getProjectFiles);
                const directusFileId =
                  getProjectFiles.data.data; 
                /* Delete Directus Files with Directus File Id */
                console.log(directusFileId);
            const getDirectusFileID = directusFileId.map((directus_files_id: any) => {
                  // console.log(directus_files_id.directus_files_id);
                  return directus_files_id.directus_files_id
                  /* Delete Files with Directus Files ID */
                });
                console.log(getDirectusFileID)
                const deleteFiles = await apiClient.get(
                  `/items/projects_files?filter={"directus_files_id":{"_eq": "${getDirectusFileID}"}}`,
            )
            console.log(deleteFiles)
              }
            }
          } else {
            console.log('No project data available');
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error.name);
            console.log(error.message);
            // return {
            //       name: error.name,
            //       message: error.message,
            // }
          }
        }
        //   }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.name);
          console.log(error.message);
          // return {
          //       name: error.name,
          //       message: error.message,
          // }
        }
      }
    }
  }
};

// Löschvorgang:
// 1.) User holen
// 2.) Cover_photo löschen
// 3.) Nach allen projekten suchen
// 4.) Falls Projekte vorhanden, anhand der Projekt-ID nach Einträgen im projects_files collection suchen
// 5.) Für jeden gefundenen Eintrag im vorherigen request die directus_files anhand dem directus_files_id löschen
// 6.) Alle IDs im projects_files löschen anhand der project_id
// 7.) Alle Projekte löschen
// 8.) User löschen
