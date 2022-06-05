import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FiMail } from 'react-icons/fi';
import {
  IoMdBrowsers,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoVimeo,
} from 'react-icons/io';
import { SiInstagram } from 'react-icons/si';

type UserContactInformationProps = {
  userContactElement: string;
};

export const UserContactInformation = ({
  userContactElement,
}: UserContactInformationProps) => {
  return (
    <Box
      className="user-contact-element-button"
      sx={{
        padding: '5px 15px',
        borderRadius: '60px',
        marginRight: '15px',
        marginBottom: '15px',
        cursor: 'default',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {userContactElement === 'E-Mail' ? (
        <FiMail size={20} />
      ) : userContactElement === 'Webseite' ? (
        <IoMdBrowsers size={20} />
      ) : userContactElement === 'Youtube' ? (
        <IoLogoYoutube size={20} />
      ) : userContactElement === 'Instagram' ? (
        <SiInstagram size={20} />
      ) : userContactElement === 'LinkedIn' ? (
        <IoLogoLinkedin size={20} />
      ) : (
        <IoLogoVimeo size={20} />
      )}

      <Typography sx={{ marginLeft: '10px' }}>{userContactElement}</Typography>
    </Box>
  );
};
