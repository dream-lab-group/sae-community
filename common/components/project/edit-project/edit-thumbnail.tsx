import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, FormikValues } from 'formik';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

type EditThumbnailProps = {
  thumbnailId: string;
  formikProps: any;
  setChangedThumbnail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditThumbnail = ({
  thumbnailId,
  formikProps,
  setChangedThumbnail,
}: EditThumbnailProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [displayThumbnail, setDisplayThumbnail] = useState<any>(
    `https://www.whatthebre.com/assets/${thumbnailId}?quality=50`,
  );

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setDisplayThumbnail(URL.createObjectURL(acceptedFiles[0]));
      formikProps.setFieldValue('cover_photo', acceptedFiles[0]);
      setChangedThumbnail(true);
    },
    [setDisplayThumbnail],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpg': [],
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
    },
    maxFiles: 1,
    onDrop,
  });

  const deleteFile = () => {
    setDisplayThumbnail(null);
    setChangedThumbnail(false);
  };

  const ThumbnailFile = () => {
    return (
      <Box
        key={thumbnailId}
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        {displayThumbnail !== null && (
          <>
            <Image
              className="project-image-border-radius image-container"
              src={displayThumbnail}
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
              onClick={() => deleteFile()}
            >
              <IoCloseSharp size={25} />
            </Box>
          </>
        )}
      </Box>
    );
  };

  return (
    <>
      {displayThumbnail !== null ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: `${smBreakpointDown ? '260px' : '450px'}`,
            borderRadius: '10px',
            marginY: '30px',
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
            <ThumbnailFile />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: `${smBreakpointDown ? '260px' : '450px'}`,
            border: '3px dashed #00000033',
            borderRadius: '10px',
            marginY: '30px',
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
          <input multiple {...getInputProps()} />
        </Box>
      )}
    </>
  );
};
