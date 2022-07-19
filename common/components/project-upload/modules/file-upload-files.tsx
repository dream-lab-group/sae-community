import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMusic } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

type FileUploadFilesProps = {
  files: any;
  setFiles: React.Dispatch<React.SetStateAction<any>>;
  acceptedFile: any;
  index: number;
  formik: FormikValues;
};

export const FileUploadFiles = ({
  files,
  setFiles,
  acceptedFile,
  index,
  formik,
}: FileUploadFilesProps) => {
  const [ImagePreview] = useState(URL.createObjectURL(acceptedFile));

  const deleteFile = (file: any, index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    formik.setFieldValue('project_files', newFiles);
  };

  setTimeout(() => {
    URL.revokeObjectURL(ImagePreview);
  }, 1000);

  return (
    <Box
      key={acceptedFile.name}
      sx={{
        width: '110px',
        height: '110px',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {acceptedFile.type.includes('audio') ? (
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
          {ImagePreview && (
            <Image
              className="project-image-border-radius image-container"
              src={ImagePreview}
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
        onClick={() => deleteFile(acceptedFile, index)}
      >
        <IoCloseSharp size={18} />
      </Box>
    </Box>
  );
};
