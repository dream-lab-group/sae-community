import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaMusic } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { apiClient } from '../../../data/apiClient';

type EditFilesUploadProps = {
  relationId: number;
  index: number;
  allFiles: any;
  setAllFiles: React.Dispatch<React.SetStateAction<any>>;
  formikProps: any;
};

export const EditFilesUpload = ({
  relationId,
  index,
  allFiles,
  setAllFiles,
  formikProps,
}: EditFilesUploadProps) => {
  //   const [ImagePreview] = useState(URL.createObjectURL(acceptedFile));
  const [isAudio, setIsAudio] = useState<boolean>(false);
  const [filePreview, setFilePreview] = useState<any>();

  useEffect(() => {
    const getFile = async () => {
      const fileIdResponse = await apiClient.get(
        `items/projects_files/${relationId}`,
      );
      if (fileIdResponse.status === 200) {
        const fileTypeResponse = await apiClient.get(
          `files/${fileIdResponse.data.data.directus_files_id}`,
        );
        if (
          fileIdResponse.status === 200 &&
          fileTypeResponse.data.data.type.split('/')[0] === 'audio'
        ) {
          setIsAudio(true);
        } else if (
          fileIdResponse.status === 200 &&
          fileTypeResponse.data.data.type.split('/')[0] === 'image'
        ) {
          const fileResponse = await apiClient.get(
            `assets/${fileIdResponse.data.data.directus_files_id}`,
          );
          const imageUrl = `https://www.whatthebre.com/assets/${fileIdResponse.data.data.directus_files_id}?quality=50`;
          setFilePreview(imageUrl);
        }
      }
    };
    getFile();
  }, []);

  const deleteFile = (index: number) => {
    const newFiles = [...allFiles];
    newFiles.splice(index, 1);
    setAllFiles(newFiles);
    formikProps('project_files', newFiles);
  };

  // setTimeout(() => {
  //   URL.revokeObjectURL(ImagePreview);
  // }, 1000);

  return (
    <Box
      key={relationId}
      sx={{
        width: '110px',
        height: '110px',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {isAudio ? (
        <Box
          sx={{
            height: '110px',
            width: '110px',
            border: '1px solid #bdbdbd',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8519f6',
          }}
        >
          <FaMusic size={25} />
          <Typography
            sx={{
              marginTop: '10px',
              color: '#000',
              fontSize: '13px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Music File
          </Typography>
        </Box>
      ) : (
        <>
          {filePreview && (
            <Image
              className="project-image-border-radius image-container"
              src={filePreview}
              layout="fill"
            />
          )}
        </>
      )}
      <Box
        className="project-button-fixed-cancel"
        component="button"
        sx={{
          border: 'none',
          position: 'absolute',
          right: 5,
          top: 5,
          color: '#000000cc',
          padding: '5px 5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        type="button"
        onClick={() => deleteFile(index)}
      >
        <IoCloseSharp size={18} />
      </Box>
    </Box>
  );
};
