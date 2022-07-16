import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { FormikValues } from 'formik';
import { useDropzone } from 'react-dropzone';

type ThumbnailUploadProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  formik: FormikValues;
};

export const ThumbnailUpload = ({ formik }: ThumbnailUploadProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const allFiles = [...files, ...acceptedFiles];
      setFiles(allFiles);
      formik.setFieldValue('cover_photo', acceptedFiles);
    },
    [files],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
    onDrop,
  });

  const deleteFile = (file: any, index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    formik.setFieldValue('cover_photo', newFiles);
  };

  const acceptedFileItems = files.map((file: any, index: number) => (
    <Box
      key={file.name}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <Image
        className="project-image-border-radius image-container"
        src={URL.createObjectURL(file)}
        layout="fill"
      />
      <Box
        className="project-button-fixed-cancel"
        component="button"
        sx={{
          border: 'none',
          position: 'absolute',
          right: 10,
          top: 10,
          color: '#000000cc',
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          cursor: 'pointer',
          zIndex: 20000,
        }}
        type="button"
        onClick={() => deleteFile(file, index)}
      >
        <IoCloseSharp size={25} />
      </Box>
    </Box>
  ));

  return (
    <>
      {acceptedFileItems.length === 0 ? (
        <Box
          sx={{
            width: '100%',
            height: `${smBreakpointDown ? '260px' : '450px'}`,
            border: '3px dashed #00000033',
            borderRadius: '10px',
            marginTop: '30px',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
            {...getRootProps()}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '130px',
                marginBottom: '37px',
              }}
            >
              <BsImage color="#7514F5" size={45} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#00000066',
                  width: ' 300px',
                  textAlign: 'center',
                  marginBottom: '15px',
                }}
              >
                {t('projectUpload.fileUpload.insert')}
                <span
                  style={{
                    color: '#00000099',
                    marginRight: '4px',
                    marginLeft: '4px',
                  }}
                >
                  {t('projectUpload.fileUpload.thumbnail')}
                </span>
                {t('projectUpload.fileUpload.here')} <br />{' '}
                {t('projectUpload.fileUpload.or')}
                <span style={{ marginLeft: '4px', color: '#7514F5' }}>
                  {t('projectUpload.fileUpload.selectFile')}
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                {t('projectUpload.fileUpload.acceptedFiles')}
              </Typography>
              <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                {t('projectUpload.fileUpload.maxSize')}
              </Typography>
            </Box>
          </Box>
          <input {...getInputProps()} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: `${smBreakpointDown ? '260px' : '450px'}`,
            borderRadius: '10px',
            marginTop: '30px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
            }}
          >
            {acceptedFileItems}
          </Box>
        </Box>
      )}
    </>
  );
};
