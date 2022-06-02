import { Box, Typography } from '@mui/material';
import { BsImage } from 'react-icons/bs';
import { RiFolderMusicLine } from 'react-icons/ri';

export const FileUpload = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '260px',
        border: '3px dashed #00000033',
        borderRadius: '10px',
        marginTop: '35px',
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
            Füge dein
            <span
              style={{
                color: '#00000099',
                marginRight: '4px',
                marginLeft: '4px',
              }}
            >
              Bild
            </span>
            oder
            <span
              style={{
                color: '#00000099',
                marginRight: '4px',
                marginLeft: '4px',
              }}
            >
              Audio
            </span>
            hier ein oder
            <span style={{ marginLeft: '4px', color: '#7514F5' }}>
              wähle eine Datai aus
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
            Zugelassene Datei: JPB, PNG, MP3
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#00000066' }}>
            Max. grösse: 10MB
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
