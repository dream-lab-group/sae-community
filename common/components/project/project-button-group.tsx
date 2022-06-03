import { ButtonBase } from '@mui/material';
import { Box } from '@mui/system';
import { BiMessageDetail } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoInformationCircleOutline } from 'react-icons/io5';

export const ProjectButtonGroup = () => {
  return (
    <Box
      sx={{
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '34px',
      }}
    >
      <ButtonBase
        sx={{
          background: '#E8E9EB',
          width: '50px',
          height: '50px',
          borderRadius: '2px',
        }}
      >
        <BiMessageDetail size={25} />
      </ButtonBase>
      <ButtonBase
        sx={{
          background: '#E8E9EB',
          width: '50px',
          height: '50px',
          borderRadius: '2px',
        }}
      >
        <IoInformationCircleOutline size={27} />
      </ButtonBase>
      <ButtonBase
        sx={{
          background: '#E8E9EB',
          width: '50px',
          height: '50px',
          borderRadius: '2px',
        }}
      >
        <FiMail size={23} />
      </ButtonBase>
      <Box sx={{ width: '2px', height: '100%', background: '#E8E9EB' }} />
      <ButtonBase
        sx={{
          background: '#E8E9EB',
          width: '50px',
          height: '50px',
          borderRadius: '2px',
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
    </Box>
  );
};
