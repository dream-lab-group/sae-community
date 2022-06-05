import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import imageOne from '../../../public/assets/project-file-1.webp';
import { BiChevronRight } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

export const LastProjects = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {lgBreakpointDown ? (
        <>
          <Box
            sx={{
              width: '100%',
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
              Letzte Projekte
            </Typography>
            <Box
              sx={{
                width: '100%',
                borderRadius: '15px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
                marginTop: '20px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: `${mdBreakpointUp && 'space-between'}`,
                }}
              >
                <Box
                  sx={{
                    width: `${mdBreakpointDown ? '100%' : '48%'}`,
                    height: `${
                      smBreakpointDown
                        ? '285px'
                        : mdBreakpointDown
                        ? '360px'
                        : '300px'
                    }`,
                    borderRadius: '10px',
                    position: 'relative',
                  }}
                >
                  <Image
                    className="project-image-border-radius image-container"
                    src={imageOne}
                    layout="fill"
                  />
                </Box>
                {mdBreakpointUp && (
                  <Box
                    sx={{
                      width: '48%',
                      height: '300px',
                      borderRadius: '10px',
                      position: 'relative',
                    }}
                  >
                    <Image
                      className="project-image-border-radius image-container"
                      src={imageOne}
                      layout="fill"
                    />
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  background: '#e8e9eb',
                  marginTop: '25px',
                }}
              />
              <ButtonBase
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  maxWidth: '130px',
                  marginTop: '20px',
                }}
              >
                <Typography>Alle Ansehen</Typography>
                <BiChevronRight size={30} />
              </ButtonBase>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: '400px',
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              top: 80,
              marginBottom: '100px',
            }}
          >
            <ButtonBase
              sx={{
                height: '60px',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '10px',
                background: '#D0A3BF',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FiMail size={25} />
              </Box>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  width: '80%',
                  alignItems: 'center',
                  paddingLeft: '20px',
                  background: '#fff',
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              >
                <Typography sx={{ fontSize: '18px' }}>
                  Jetzt kontaktieren
                </Typography>
              </Box>
            </ButtonBase>

            <Box
              sx={{
                width: '100%',
                borderRadius: '15px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                marginTop: '30px',
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
                Letzte Projekte
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20px',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '10px',
                    position: 'relative',
                    marginBottom: '30px',
                  }}
                >
                  <Image
                    className="project-image-border-radius image-container"
                    src={imageOne}
                    layout="fill"
                  />
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '10px',
                    position: 'relative',
                  }}
                >
                  <Image
                    className="project-image-border-radius image-container"
                    src={imageOne}
                    layout="fill"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  background: '#e8e9eb',
                  marginTop: '35px',
                }}
              />
              <ButtonBase
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  maxWidth: '130px',
                  marginTop: '20px',
                }}
              >
                <Typography>Alle Ansehen</Typography>
                <BiChevronRight size={30} />
              </ButtonBase>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
