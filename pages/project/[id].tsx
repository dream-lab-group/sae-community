import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BsXCircle } from 'react-icons/bs';
import { ProjectAudioFile } from '../../common/components/project/project-audio-file';
import { ProjectButtonGroup } from '../../common/components/project/project-button-group';
import { ProjectEmbedded } from '../../common/components/project/project-embedded';
import { ProjectInformation } from '../../common/components/project/project-information';
import { ProjectPictures } from '../../common/components/project/project-pictures';

const Project = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCancelProjectUpload = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '60px',
          background: '#192D3E',
          width: '100%',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%);',
          display: 'flex',
        }}
      />
      <Box
        sx={{
          paddingTop: '25px',
          paddingBottom: '50px',
          paddingX: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
        }}
      >
        <ProjectInformation />
        <ProjectButtonGroup />
        <ProjectPictures />
        <ProjectEmbedded />
        <ProjectAudioFile />
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: 700 }}>Projektitel</Typography>
          <Typography
            sx={{ fontWeight: 300, fontSize: '12px', marginTop: '10px' }}
          >
            Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing
            <br />
            <br />
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
            <br />
            <br />
            <Box sx={{ listStyle: 'inside' }}>
              <li>
                List: Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
              </li>
              <li>
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita
              </li>
              <li>
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                sit amet. Lorem ipsum dolor sit amet, consetetur.
              </li>
            </Box>
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: '#CF2CF6', marginTop: '15px' }}
          >
            Link
          </Typography>
        </Box>
      </Box>
      <Box
        className="project-button-fixed-cancel"
        component="button"
        sx={{
          border: 'none',
          position: 'fixed',
          right: 0,
          top: 100,
          color: '#000000cc',
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleCancelProjectUpload}
      >
        <BsXCircle size={25} />
      </Box>
    </Box>
  );
};

export default Project;
