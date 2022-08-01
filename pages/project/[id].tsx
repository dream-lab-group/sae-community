import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Router, withRouter } from 'next/router';
import { BsXCircle } from 'react-icons/bs';
import { ProjectAudioFile } from '../../common/components/project/project-audio-file';
import { ProjectButtonGroup } from '../../common/components/project/project-button-group';
import { ProjectEmbedded } from '../../common/components/project/project-embedded';
import { ProjectInformation } from '../../common/components/project/project-information';
import { ProjectPictures } from '../../common/components/project/project-pictures';
import { BiMessageDetail } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { CommunityHead } from '../../common/components/community-head';
import { useEffect, useState } from 'react';
import { apiClient } from '../../common/data/apiClient';
import TipTapViewer from '../../common/components/common/tiptap-viewer';
import { UsedProgram } from '../../common/components/common/used-programs';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

const Project = withRouter<Props>(({ router }: PropsWithRouter) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const projectId = router.asPath.split('/').at(-1);
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (projectId !== '[id]') {
        const projectResponse = await apiClient.get(
          `items/projects/${projectId}`,
        );
        if (projectResponse.status === 200) {
          setProjectData(projectResponse.data.data);
        }
      }
    };
    fetchProject();
  }, [setProjectData, projectId]);

  const handleBackToHome = () => {
    router.push('/');
  };

  if (projectData) {
    return (
      <>
        <CommunityHead />
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
              <ProjectInformation data={projectData} />
              <ProjectButtonGroup />
            </Box>
            <ProjectPictures
              thumbnailId={projectData.cover_photo}
              relationNumbers={projectData.files}
            />
            {projectData.embedded_urls.map((videoUrl: any) => {
              return (
                <ProjectEmbedded key={videoUrl.url} videoUrl={videoUrl.url} />
              );
            })}
            <ProjectAudioFile relationNumbers={projectData.files} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
              {projectData.programs.map(
                (program: { name: string; label: string }) => (
                  <UsedProgram
                    key={program.label}
                    usedProgramElement={program.label}
                  />
                ),
              )}
            </Box>
            <Box
              sx={{ width: '100%', marginTop: `${smBreakpointUp && '20px'}` }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: `${smBreakpointDown ? '15px' : '20px'}`,
                }}
              >
                {projectData.project_name}
              </Typography>
              <TipTapViewer content={projectData.description} />
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
  } else {
    return <></>;
  }
});

export default Project;
