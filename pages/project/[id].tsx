import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { BsXCircle } from 'react-icons/bs';
import { ProjectAudioFile } from '../../common/components/project/project-audio-file';
import { ProjectButtonGroup } from '../../common/components/project/project-button-group';
import { ProjectEmbedded } from '../../common/components/project/project-embedded';
import { ProjectInformation } from '../../common/components/project/project-information';
import { ProjectPictures } from '../../common/components/project/project-pictures';
import { BiMessageDetail } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import Head from 'next/head';

const Project = () => {
  const router = useRouter();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>SAI Community</title>
        <meta name="author" content="Hadrian Chio" />
        <meta
          name="description"
          content="SAI Community is a project platform designed for an interdisciplinary bachelor project at SAE Institute Zurich where students can share and react to each others projects."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: `${lgBreakpointDown ? 'column' : 'row'}`,
              alignItems: `${lgBreakpointUp && 'center'}`,
            }}
          >
            <ProjectInformation />
            <ProjectButtonGroup />
          </Box>
          <ProjectPictures />
          <ProjectEmbedded />
          <ProjectAudioFile />
          <Box sx={{ width: '100%', marginTop: `${smBreakpointUp && '40px'}` }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: `${smBreakpointDown ? '15px' : '20px'}`,
              }}
            >
              Projektitel
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: `${smBreakpointDown ? '13px' : '15px'}`,
                marginTop: '10px',
              }}
            >
              Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing
              <br />
              <br />
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
              <br />
              <br />
              {/* todo make it dynamically no divs inside typography */}
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
              component="button"
              sx={{
                fontSize: `${smBreakpointDown ? '13px' : '15px'}`,
                color: '#CF2CF6',
                marginTop: '15px',
                cursor: 'pointer',
                border: 'none',
                background: 'none',
              }}
            >
              Link
            </Typography>
          </Box>
        </Box>
        {smBreakpointDown ? (
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
            onClick={handleBackToHome}
          >
            <BsXCircle size={25} />
          </Box>
        ) : lgBreakpointDown ? (
          <Box
            className="project-button-fixed-cancel"
            component="button"
            sx={{
              border: 'none',
              position: 'fixed',
              right: 0,
              top: 80,
              color: '#000000cc',
              padding: '15px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={handleBackToHome}
          >
            <BsXCircle size={30} fontWeight={40} />
            <Typography
              sx={{ fontWeight: 700, fontSize: '12px', marginTop: '5px' }}
            >
              Abbrechen
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              position: 'fixed',
              right: 0,
              top: 150,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <ButtonBase
              className="project-button-fixed-cancel"
              sx={{
                height: '80px',
                border: 'none',
                padding: '10px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                marginBottom: '50px',
              }}
              onClick={handleBackToHome}
            >
              <BsXCircle size={30} fontWeight={40} />
              <Typography
                sx={{ fontWeight: 700, fontSize: '12px', marginTop: '5px' }}
              >
                Abbrechen
              </Typography>
            </ButtonBase>
            <ButtonBase
              className="project-button-group"
              sx={{
                height: '80px',
                border: 'none',
                padding: '10px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                background: '#e8e9eb',
                marginBottom: '20px',
              }}
            >
              <BiMessageDetail size={30} />
            </ButtonBase>
            <ButtonBase
              className="project-button-group"
              sx={{
                height: '80px',
                border: 'none',
                padding: '10px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                background: '#e8e9eb',
                marginBottom: '20px',
              }}
            >
              <IoInformationCircleOutline size={35} />
            </ButtonBase>
            <ButtonBase
              className="project-button-group"
              sx={{
                height: '80px',
                border: 'none',
                padding: '10px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                background: '#e8e9eb',
              }}
            >
              <FiMail size={30} />
            </ButtonBase>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Project;