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
  formik: FormikValues;
  thumbnailFile: any;
  setThumbnailFile: React.Dispatch<any>;
};

export const ThumbnailUpload = ({
  formik,
  thumbnailFile,
  setThumbnailFile,
}: ThumbnailUploadProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [displayThumbnail, setDisplayThumbnail] = useState<string>();

  const { t } = useTranslation();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const allFiles = [...thumbnailFile, ...acceptedFiles];
      setThumbnailFile(allFiles);
      formik.setFieldValue('cover_photo', acceptedFiles);
      setDisplayThumbnail(URL.createObjectURL(acceptedFiles[0]));
    },
    [thumbnailFile],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
      'image/webp': [],
    },
    maxFiles: 1,
    onDrop,
    noDragEventsBubbling: true,
  });

  const deleteFile = (file: any, index: number) => {
    setThumbnailFile([]);
    formik.setFieldValue('cover_photo', thumbnailFile);
  };

  const acceptedFileItem = thumbnailFile.map((file: any, index: number) => (
    <Box
      key={file.name}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {displayThumbnail && (
        <Image
          className="project-image-border-radius image-container"
          src={displayThumbnail}
          layout="fill"
        />
      )}
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
        onClick={() => deleteFile(thumbnailFile, index)}
      >
        <IoCloseSharp size={25} />
      </Box>
    </Box>
  ));

  return (
    <>
      {acceptedFileItem.length === 0 ? (
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
            {acceptedFileItem}
          </Box>
        </Box>
      )}
    </>
  );
};
