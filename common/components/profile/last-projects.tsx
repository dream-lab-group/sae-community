import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { apiClient } from '../../data/apiClient';

type LastProjectsProps = {
  currentUser: any;
  readMe: any;
};

export const LastProjects = ({ currentUser, readMe }: LastProjectsProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

  const userId = currentUser.id;
  const [allUserProjects, setAllUserProjects] = useState<any>([]);
  const [userProject, setUserProject] = useState<any>([]);
  const router = useRouter();
  const EditProfile = () => {
    router.push('/profile');
  };
  const AllProjects = () => {
    router.push(`/projects/${userId}`);
  };

  console.log(userProject);
  console.log(allUserProjects);

  const ShowProject = () => {
    router.push(`/project/${userProject[0].id}`);
    //     console.log(userProject[0]);
  };

  useEffect(() => {
    const fetchMyProjects = async () => {
      const projectsResponse = await apiClient.get(
        `items/projects?filter={"user_created": { "_eq": "${userId}"}}&sort=-date_created&limit=2`,
      );
      if (projectsResponse.status === 200) {
        setAllUserProjects(projectsResponse.data.data);
      }
    };
    fetchMyProjects();
  }, [setAllUserProjects]);

  useEffect(() => {
    const fetchOneProject = async () => {
      const projectsResponse = await apiClient.get(
        `items/projects?filter={"user_created": { "_eq": "${userId}"}}&sort=-date_created&limit=1`,
      );
      if (projectsResponse.status === 200) {
        setUserProject(projectsResponse.data.data);
      }
    };
    fetchOneProject();
  }, [setUserProject]);

  return allUserProjects.length !== 0 ? (
    <Box
      sx={{
        marginLeft: `${lgBreakpointUp ? '3rem' : ' '}`,
        maxWidth: `${
          lgBreakpointDown
            ? '774px'
            : mdBreakpointDown
            ? '500px'
            : smBreakpointDown
            ? '381px'
            : '367px'
        }`,
      }}
    >
      {lgBreakpointUp ? (
        <>
          {userId === readMe.id && (
            <Typography
              onClick={EditProfile}
              sx={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#7514f5',
                height: '60px',
                width: '336px',
                padding: '.5rem',
                borderRadius: '10px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                marginTop: '100px',
              }}
            >
              {t('profile.editProfile')}
            </Typography>
          )}
          {userId !== readMe.id && (
            <a
              href={`mailto:${currentUser.email}?subject=${readMe.first_name} möchte dich über Sai Plattform kontaktieren.`}
              rel="noreferrer"
              target="_blank"
              style={{
                height: '60px',
                width: '336px',
                display: 'flex',
                justifyContent: 'space-around',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '10px',
                background: '#D0A3BF',
                marginTop: '20px',
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
                  {t('profile.contactNow')}
                </Typography>
              </Box>
            </a>
          )}
        </>
      ) : (
        <></>
      )}
      <Box
        sx={{
          height: 'auto',
          borderRadius: '15px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: `${
              lgBreakpointDown
                ? '774px'
                : mdBreakpointDown
                ? '500px'
                : smBreakpointDown
                ? '381px'
                : '300px'
            }`,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '18px',
              marginLeft: `${lgBreakpointDown ? '20px' : ''}`,
            }}
          >
            {t('profile.lastProjects')}
          </Typography>

          {smBreakpointDown ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '20px',
              }}
            >
              {/* @ts-expect-error: todo */}
              {userProject.map(({ id, cover_photo }) => {
                const imageUrl = `https://www.whatthebre.com/assets/${cover_photo}?quality=50`;
                return (
                  <Box
                    sx={{
                      height: '290px',
                      width: '290px',
                      borderRadius: '10px',
                      position: 'relative',
                      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                      margin: '0 10px 0 10px',
                    }}
                    key={id}
                    onClick={ShowProject}
                  >
                    <Image
                      className="project-image-border-radius image-container"
                      src={imageUrl}
                      layout="fill"
                      alt="Project Cover Picture"
                    />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: `${lgBreakpointDown ? 'row' : 'column'}`,
                marginTop: `${lgBreakpointUp ? '0' : '20px'}`,
              }}
            >
              {/* @ts-expect-error: todo */}
              {allUserProjects.map(({ id, cover_photo }) => {
                const imageUrl = `https://www.whatthebre.com/assets/${cover_photo}?quality=50`;
                return (
                  <Box
                    sx={{
                      height: `${mdBreakpointDown ? '216px' : '300px'}`,
                      width: `${mdBreakpointDown ? '237px' : '300px'}`,
                      marginTop: `${lgBreakpointUp ? '15px' : ''}`,
                      borderRadius: '10px',
                      position: 'relative',
                      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                      '&:nth-child(1)': {
                        margin: `${lgBreakpointDown ? '0 10px 0 10px' : ''}`,
                      },
                      '&:nth-child(2)': {
                        margin: `${lgBreakpointDown ? '0 10px 0 0' : ''}`,
                      },
                    }}
                    key={id}
                  >
                    <Image
                      className="project-image-border-radius image-container"
                      src={imageUrl}
                      layout="fill"
                      alt="Project Cover Picture"
                    />
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            cursor: 'pointer',
          }}
          onClick={AllProjects}
        >
          <Box
            sx={{
              width: `${
                smBreakpointDown
                  ? '70%'
                  : mdBreakpointDown
                  ? '80%'
                  : lgBreakpointDown
                  ? '70%'
                  : '100%'
              }`,
              height: '2px',
              background: '#e8e9eb',
            }}
          />
          <ButtonBase
            sx={{
              width: '100%',
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'space-between',
              maxWidth: '130px',
              margin: '10px 0 10px 0',
            }}
          >
            <Typography> {t('profile.viewAll')}</Typography>
            <BiChevronRight size={30} />
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  ) : (
    <>
      {lgBreakpointUp ? (
        <Box
          sx={{
            marginLeft: `${lgBreakpointUp ? '3rem' : ' '}`,
            maxWidth: `${
              lgBreakpointDown
                ? '774px'
                : mdBreakpointDown
                ? '500px'
                : smBreakpointDown
                ? '381px'
                : '367px'
            }`,
          }}
        >
          <Typography
            onClick={EditProfile}
            sx={{
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#7514f5',
              height: '60px',
              width: '336px',
              padding: '.5rem',
              borderRadius: '10px',
              textAlign: 'center',
              color: 'white',
              cursor: 'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              marginTop: '110px',
              marginBottom: '20px',
            }}
          >
            {t('profile.editProfile')}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
            {t('profile.lastProjects')}
          </Typography>
          <Typography>
            {t('profile.noData')} {t('profile.noLastProjects')}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
