import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFrownOpen } from 'react-icons/fa';
import { FormikValues } from 'formik';
import { Directus } from '@directus/sdk';
import placeholderImage from '../../../../public/assets/placeholder.png';

type UserAvatarProps = {
  formik: FormikValues;
  avatarFile: any;
  setAvatarFile: React.Dispatch<any>;
  userAvatar: any;
};

export const UserProfileAvatarUpload = ({
  formik,
  avatarFile,
  setAvatarFile,
  userAvatar,
}: UserAvatarProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [displayAvatar, setDisplayAvatar] = useState<string>();

  const { t } = useTranslation();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const allFiles = [...avatarFile, ...acceptedFiles];
      setAvatarFile(allFiles);
      formik.setFieldValue('avatar', acceptedFiles);
      setDisplayAvatar(URL.createObjectURL(acceptedFiles[0]));
    },
    [avatarFile],
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

  const deleteFile = (file: any, index: number) => {
    setAvatarFile([]);
    formik.setFieldValue('avatar', userAvatar);
  };

  const imageUrl = `https://www.whatthebre.com/assets/${userAvatar}`;

  const acceptedFileItem = avatarFile.map((file: any, index: number) => (
    <Box
      key={file.name}
      sx={{
        width: '120px',
        height: '120px',
        position: 'relative',
      }}
    >
      <>
        {displayAvatar && (
          <Image
            className="image-container"
            style={{ borderRadius: '50%' }}
            src={displayAvatar}
            layout="fill"
            quality={50}
            alt="profilepicture"
            priority
          />
        )}
      </>

      <Box
        className="project-button-fixed-cancel"
        component="button"
        sx={{
          border: 'none',
          position: 'absolute',
          right: 1,
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
        onClick={() => deleteFile(avatarFile, index)}
      >
        <IoCloseSharp size={18} />
      </Box>
    </Box>
  ));

  return (
    <>
      {acceptedFileItem.length === 0 ? (
        <Box
          sx={{
            width: '100%',
            height: `${smBreakpointDown ? '260px' : '270px'}`,
            border: '3px dashed #00000033',
            borderRadius: '10px',
            marginTop: '30px',
            marginBottom: '30px',
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
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  height: '120px',
                  width: '120px',
                  marginY: '10px',
                  position: 'relative',
                }}
              >
                {userAvatar === null ? (
                  <Image
                    src={placeholderImage}
                    className="image-container"
                    priority
                    layout="fill"
                    quality={50}
                    alt="profilepicture"
                  />
                ) : (
                  <Image
                    style={{
                      borderRadius: '50%',
                    }}
                    src={imageUrl}
                    className="image-container"
                    priority
                    layout="fill"
                    quality={50}
                    alt="profilepicture"
                  />
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#7514F5',
                  width: ' 300px',
                  textAlign: 'center',
                }}
              >
                {t('profileUpload.changeProfilePicture')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                  {t('fileUpload.acceptedFiles')}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                  {t('fileUpload.maxSize1')}
                </Typography>
              </Box>
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
            height: `${smBreakpointDown ? '260px' : '270px'}`,
            borderRadius: '10px',
            marginTop: '30px',
            marginBottom: '30px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        >
          {avatarFile.length >= 2 ? (
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
                Leider kannst du nicht mehr als 1 Datei heraufladen
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box sx={{ marginY: '10px' }}>{acceptedFileItem}</Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#7514F5',
                    width: ' 300px',
                    textAlign: 'center',
                  }}
                >
                  {t('profileUpload.newProfilePicture')}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                    {t('fileUpload.acceptedFiles')}
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
                    {t('fileUpload.maxSize1')}
                  </Typography>
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
                  onClick={() => setAvatarFile([])}
                >
                  <IoCloseSharp size={25} />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
