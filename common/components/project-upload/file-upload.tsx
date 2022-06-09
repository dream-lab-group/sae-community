import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import { RiFolderMusicLine } from 'react-icons/ri';

export const FileUpload = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();

  const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const [files, setFiles] = useState<File[]>();

  return (
    <Box
      sx={{
        width: '100%',
        height: `${smBreakpointDown ? '260px' : '450px'}`,
        border: '3px dashed #00000033',
        borderRadius: '10px',
        marginTop: '30px',
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
    </Box>
  );
};
