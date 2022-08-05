import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { apiClient } from '../../data/apiClient';

type LastProjectsProps = {
  currentUser: any;
};

export const LastProjects = ({ currentUser }: LastProjectsProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

  const userId = currentUser.id;
  const [allUserProjects, setAllUserProjects] = useState<any>([]);
  const router = useRouter();
  const EditProfile = () => {
    router.push('/profile');
  };
  const AllProject = () => {
    router.push(`/projects/${userId}`);
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

  return allUserProjects.length !== 0 ? (
    <>
      <Box
        sx={{ width: '100%', marginLeft: `${lgBreakpointUp ? '3rem' : ' '}` }}
      >
        {lgBreakpointUp ? (
          <>
            <Typography
              onClick={EditProfile}
              sx={{
                fontSize: '20px',
                alignSelf: 'flex-start',
                background: '#7514f5',
                width: '15rem',
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
            {/* <a
              href={`mailto:${currentUser.mail}?subject=${currentUser.first_name} möchte dich über Sai Plattform kontaktieren.`}
              rel="noreferrer"
              target="_blank"
              style={{
                height: '60px',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: '10px',
                background: '#D0A3BF',
                marginTop: "1rem"
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
            </a> */}
          </>
        ) : (
          <></>
        )}
        <Box
          sx={{
            width: '100%',
            borderRadius: '15px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            marginTop: '20px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: `${
                lgBreakpointDown
                  ? '774px'
                  : smBreakpointDown
                  ? '381px'
                  : '400px'
              }`,
              position: `${lgBreakpointDown ? '' : 'relative'}`,
              top: `${lgBreakpointDown ? '' : '80'}`,
              marginBottom: `${lgBreakpointDown ? '' : '100px'}`,
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
              {t('profile.lastProjects')}
            </Typography>
            {/* @ts-expect-error: todo */}
            {allUserProjects.map(({ id, cover_photo }) => {
              const imageUrl = `https://www.whatthebre.com/assets/${cover_photo}?quality=50`;
              return (
                <Box
                  sx={{
                    width: '100%',
                    height: `${
                      smBreakpointDown
                        ? '285px'
                        : mdBreakpointDown
                        ? '360px'
                        : '360px'
                    }`,
                    display: 'flex',
                    borderRadius: '10px',
                    position: 'relative',
                    marginTop: '1rem',
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
            onClick={AllProject}
          >
            <Typography> {t('profile.viewAll')}</Typography>
            <BiChevronRight size={30} />
          </ButtonBase>
        </Box>
      </Box>
    </>
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        marginTop: `${lgBreakpointUp ? '7rem' : '2rem'}`,
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>
        {t('profile.lastProjects')}
      </Typography>
      <Typography>
        {t('profile.noData')} {t('profile.noLastProjects')}
      </Typography>
    </Box>
  );
};
