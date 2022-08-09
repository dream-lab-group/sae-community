import { Alert, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FormikValues } from 'formik';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

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

  const maxFileSizeThumbnail = 5097150;

  function maxFileSizeValidator(file: File) {
    if (file.size > maxFileSizeThumbnail) {
      return {
        code: 'size-too-large',
        message: `Die Datei ist zu gross. Die maximale Dateigrösse beträgt 2MB`,
      };
    }

    return null;
  }

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const allFiles = [...thumbnailFile, ...acceptedFiles];
      setThumbnailFile(allFiles);
      formik.setFieldValue('cover_photo', acceptedFiles);
      setDisplayThumbnail(URL.createObjectURL(acceptedFiles[0]));
    },
    [thumbnailFile],
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: {
      'image/jpg': [],
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
    },
    maxFiles: 1,
    onDrop,
    noDragEventsBubbling: true,
    validator: maxFileSizeValidator,
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
        marginTop: '30px',
        marginBottom: '20px',
        borderRadius: '10px',
        position: 'relative',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      {displayThumbnail && (
        <Image
          className="project-image-border-radius image-container"
          src={displayThumbnail}
          width="100%"
          height="100%"
          layout="responsive"
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
            marginBottom: '20px',
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
        <>{acceptedFileItem}</>
      )}
      {fileRejections.length > 0 ? (
        <Box sx={{ width: '100%' }}>
          <Alert severity="error" variant="filled">
            <Typography
              sx={{
                fontSize: `${smBreakpointDown ? '12px' : ''}`,
              }}
            >
              Die maximale Grösse beträgt 5MB, folgendes Thumbnail ist zu gross:
            </Typography>
            {fileRejections.map(({ file }: { file: File; errors: any }) => (
              <Typography
                key={file.name}
                sx={{
                  fontSize: `${smBreakpointDown ? '12px' : ''}`,
                }}
              >{`${file.name}`}</Typography>
            ))}
          </Alert>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
