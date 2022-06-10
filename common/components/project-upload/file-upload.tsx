import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { RiFolderMusicLine } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import { FaMusic, FaFrownOpen } from 'react-icons/fa';
import { GiHeavyFall } from 'react-icons/gi';

export const FileUpload = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const allFiles = [...files, ...acceptedFiles];

      setFiles(allFiles);
    },
    [files],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
      'audio/*': [],
    },
    maxFiles: 6,
    onDrop,
  });

  const deleteFile = (file: any, index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const acceptedFileItems = files.map((file: any, index: number) => (
    <Box
      key={file.name}
      sx={{
        width: '110px',
        height: '110px',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {file.type.includes('audio') ? (
        <Box
          sx={{
            height: '110px',
            width: '110px',
            border: '1px solid grey',
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
              color: '#000',
              fontSize: '13px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Shit happens
          </Typography>
        </Box>
      ) : (
        <Image
          className="project-image-border-radius image-container"
          src={URL.createObjectURL(file)}
          layout="fill"
        />
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
        onClick={() => deleteFile(file, index)}
      >
        <IoCloseSharp size={18} />
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
                justifyContent: 'space-between',
                width: '130px',
                marginBottom: '37px',
              }}
            >
              <BsImage color="#7514F5" size={45} />
              <RiFolderMusicLine color="#7514F5" size={52} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
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
                  {t('projectUpload.fileUpload.picture')}
                </span>
                {t('projectUpload.fileUpload.or')}
                <span
                  style={{
                    color: '#00000099',
                    marginRight: '4px',
                    marginLeft: '4px',
                  }}
                >
                  {t('projectUpload.fileUpload.audio')}
                </span>
                {`${t('projectUpload.fileUpload.here')} ${t(
                  'projectUpload.fileUpload.or',
                )}`}
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
                {t('projectUpload.fileUpload.acceptedFilesWithMusic')}
              </Typography>
              <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                {t('projectUpload.fileUpload.maxSize10')}
              </Typography>
            </Box>
          </Box>
          <input multiple {...getInputProps()} />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            borderRadius: '10px',
            marginTop: '30px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        >
          {files.length >= 6 ? (
            <Box
              sx={{
                width: '100%',
                height: '200px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px dashed #00000033',
                color: '#8519f6',
                cursor: 'pointer',
              }}
            >
              <FaFrownOpen size={50} />
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  marginY: '10px',
                  textAlign: 'center',
                }}
              >
                Leider kannst du nicht mehr als 6 Dateien heraufladen
              </Typography>
            </Box>
          ) : (
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  borderTopRightRadius: '10px',
                  borderTopLeftRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '2px dashed #00000033',
                  color: '#8519f6',
                  cursor: 'pointer',
                }}
                {...getRootProps()}
              >
                <GiHeavyFall size={50} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{ fontSize: '25px', fontWeight: 700, marginY: '10px' }}
                  >
                    Drop it like it's hot
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
                    {t('projectUpload.fileUpload.acceptedFilesWithMusic')}
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                    {t('projectUpload.fileUpload.maxSize10')}
                  </Typography>
                </Box>

                <input multiple {...getInputProps()} />
              </Box>
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
                onClick={() => setFiles([])}
              >
                <IoCloseSharp size={25} />
              </Box>
            </Box>
          )}
          <Box
            className="grid-container-upload"
            width="100%"
            sx={{
              width: '100%',
              display: 'flex',
              padding: '20px',
            }}
          >
            {acceptedFileItems}
          </Box>
        </Box>
      )}
    </>
  );
};
