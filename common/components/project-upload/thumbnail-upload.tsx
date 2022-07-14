import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import { IoCloseSharp } from 'react-icons/io5';
import { ProjectUploadProps } from '../../types/types';
import { useField } from 'formik';

export const ThumbnailUpload = ({ label, ...props }: ProjectUploadProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const [selectedCoverImage, setSelectedCoverImage] = useState([]);
  const acceptedFileTypes = ['jpg', 'jpeg', 'png'];

  const coverImageChangeHandler = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    setSelectedCoverImage(imageList as never[]);
  };

  return (
    <>
      {/* @ts-expect-error: todo */}
      <ReactImageUploading
        value={selectedCoverImage}
        onChange={coverImageChangeHandler}
        maxNumber={1}
        acceptType={acceptedFileTypes}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          dragProps,
          onImageRemoveAll,
          errors,
        }) => (
          <>
            {imageList.length === 0 ? (
              <Box
                sx={{
                  width: '100%',
                  height: `${smBreakpointDown ? '260px' : '450px'}`,
                  border: '3px dashed #00000033',
                  borderRadius: '10px',
                  marginTop: '30px',
                  cursor: 'pointer',
                }}
                onClick={onImageUpload}
                {...dragProps}
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
                {errors && (
                  <Box sx={{ width: '100%', margin: '20px 0px' }}>
                    {errors.acceptType && (
                      <Typography>Wrong file type</Typography>
                    )}
                  </Box>
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: `${smBreakpointDown ? '260px' : '450px'}`,
                  borderRadius: '10px',
                  marginTop: '30px',
                  position: 'relative',
                }}
              >
                {imageList.map((image, index) => (
                  <Image
                    key={index}
                    className="project-image-border-radius image-container"
                    src={image['data_url']}
                    layout="fill"
                  />
                ))}
                <Box
                  className="project-button-fixed-cancel"
                  component="button"
                  sx={{
                    border: 'none',
                    position: 'absolute',
                    right: 15,
                    top: 15,
                    color: '#000000cc',
                    padding: '10px 15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={onImageRemoveAll}
                >
                  <IoCloseSharp size={25} />
                </Box>
              </Box>
            )}
          </>
        )}
      </ReactImageUploading>
    </>
  );
};
