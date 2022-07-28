import { useEffect, useState } from 'react';
import { apiClient } from '../../data/apiClient';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Box } from '@mui/material';

type ProjectAudioFilesProps = {
  relationNumbers: [];
};

export const ProjectAudioFile = ({
  relationNumbers,
}: ProjectAudioFilesProps) => {
  const [files, setFiles] = useState<any>([]);

  useEffect(() => {
    relationNumbers.map(async (relationNumber) => {
      const singleFileIdresponse = await apiClient.get(
        `items/projects_files/${relationNumber}`,
      );
      if (singleFileIdresponse.status === 200) {
        const fileTypeResponse = await apiClient.get(
          `files/${singleFileIdresponse.data.data.directus_files_id}`,
        );
        if (
          fileTypeResponse.status === 200 &&
          fileTypeResponse.data.data.type.split('/')[0] === 'audio'
        ) {
          setFiles((files: []) => [...files, fileTypeResponse.data.data.id]);
        }
      }
    });
  }, []);

  // @ts-expect-error: todo
  const uniqueFileIds = [...new Set(files)];

  return (
    <Box sx={{ marginTop: '10px', width: '100%' }}>
      {uniqueFileIds.map((fileId) => {
        const srcUrl = `https://www.whatthebre.com/assets/${fileId}`;
        return (
          <Box key={fileId} sx={{ marginY: '30px', width: '100%' }}>
            {/* @ts-expect-error: todo */}
            <AudioPlayer preload="auto" className="audio-player" src={srcUrl} />
          </Box>
        );
      })}
    </Box>
  );
};
