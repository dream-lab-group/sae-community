import { ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { BiMessageDetail } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

export const ProjectButtonGroup = () => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: `${smBreakpointDown && 'space-between'}`,
        marginTop: `${lgBreakpointDown ? '34px' : ''}`,
      }}
    >
      {smBreakpointDown ? (
        <>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '50px',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            <BiMessageDetail size={25} />
          </ButtonBase>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '50px',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            <IoInformationCircleOutline size={27} />
          </ButtonBase>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '50px',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            <FiMail size={23} />
          </ButtonBase>
          <Box sx={{ width: '2px', height: '100%', background: '#E8E9EB' }} />
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '50px',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            <FaRegHeart size={23} />
          </ButtonBase>
          <ButtonBase
            className="bookmark-button"
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            <BsBookmark size={23} />
          </ButtonBase>
        </>
      ) : lgBreakpointDown ? (
        <>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '65px',
              height: '50px',
              borderRadius: '5px',
              marginRight: '20px',
            }}
          >
            <BiMessageDetail size={25} />
          </ButtonBase>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '65px',
              height: '50px',
              borderRadius: '5px',
              marginRight: '20px',
            }}
          >
            <IoInformationCircleOutline size={27} />
          </ButtonBase>
          <ButtonBase
            className="project-button-group"
            sx={{
              background: '#E8E9EB',
              width: '65px',
              height: '50px',
              borderRadius: '5px',
              marginRight: '20px',
            }}
          >
            <FiMail size={23} />
          </ButtonBase>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <ButtonBase
              className="project-button-group"
              sx={{
                background: '#E8E9EB',
                height: '50px',
                borderRadius: '5px',
                display: 'flex',
                paddingX: '20px',
              }}
            >
              <FaRegHeart size={23} />
              <Typography sx={{ marginLeft: '10px', fontWeight: 700 }}>
                Liken
              </Typography>
            </ButtonBase>
            <ButtonBase
              className="bookmark-button"
              sx={{
                height: '50px',
                borderRadius: '5px',
                marginLeft: '15px',
                display: 'flex',
                paddingX: '20px',
              }}
            >
              <BsBookmark size={23} />
              <Typography sx={{ marginLeft: '10px', fontWeight: 700 }}>
                Merken
              </Typography>
            </ButtonBase>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <ButtonBase
              className="project-button-group"
              sx={{
                background: '#E8E9EB',
                height: '50px',
                borderRadius: '5px',
                display: 'flex',
                paddingX: '20px',
              }}
            >
              <FaRegHeart size={23} />
              <Typography sx={{ marginLeft: '10px', fontWeight: 700 }}>
                Liken
              </Typography>
            </ButtonBase>
            <ButtonBase
              className="bookmark-button"
              sx={{
                height: '50px',
                borderRadius: '5px',
                marginLeft: '15px',
                display: 'flex',
                paddingX: '20px',
              }}
            >
              <BsBookmark size={23} />
              <Typography sx={{ marginLeft: '10px', fontWeight: 700 }}>
                Merken
              </Typography>
            </ButtonBase>
          </Box>
        </>
      )}
    </Box>
  );
};
