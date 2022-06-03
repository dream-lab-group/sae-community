import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BsImage } from 'react-icons/bs';
import { RiFolderMusicLine } from 'react-icons/ri';

export const ThumbnailUpload = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '260px',
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
    </Box>
  );
};
