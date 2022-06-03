import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Layout from '../../common/components/layout';
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg';
import { FileUpload } from '../../common/components/project-upload/file-upload';
import { Coworkers } from '../../common/components/project-upload/coworkers';
import { EmbedUrl } from '../../common/components/project-upload/embed-url';
import { useState } from 'react';
import { ThumbnailUpload } from '../../common/components/project-upload/thumbnail-upload';

const ProjectUpload = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const desktopBreakpointUp = useMediaQuery(theme.breakpoints.up('desktop'));

  const [internExtern, setInternExtern] = useState('Schulprojekt');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          height: '60px',
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%);',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton sx={{ color: '#fff' }}>
          <CgClose size={22} />
        </IconButton>
      </Box>
      <Box
        sx={{
          paddingY: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '341px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'fontWeightBold',
            alignSelf: 'flex-start',
          }}
        >
          Projekt erstellen
        </Typography>
        <TextField
          size="small"
          id="projectName"
          name="ProjectName"
          label="Projektname"
          variant="outlined"
          fullWidth
          sx={{ marginTop: '20px', fontSize: '8px' }}
        />
        <ThumbnailUpload />
        <FileUpload />
        <EmbedUrl />
        <TextField
          multiline
          size="small"
          id="description"
          name="description"
          label="Beschreibung"
          variant="outlined"
          minRows={7}
          fullWidth
          sx={{ marginTop: '10px', fontSize: '8px' }}
        />
        <Coworkers />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel control={<Switch />} label="Kommentarfunktion" />
          <FormControlLabel
            sx={{ alignSelf: 'flex-end' }}
            control={<Switch />}
            label={internExtern}
          />
        </Box>
        <Button
          className="project-button-cancel"
          variant="contained"
          sx={{ width: '100%', marginTop: '30px', height: '56px' }}
        >
          Abbrechen
        </Button>
        <Button
          className="project-button-publish"
          variant="contained"
          sx={{ width: '100%', marginTop: '20px', height: '56px' }}
        >
          Projekt veröffentlichen
        </Button>
      </Box>
    </Box>
  );
};

ProjectUpload.getLayout = function getLayout(page: typeof ProjectUpload) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default ProjectUpload;
