import { Link, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Globals } from '../../utils/utils';
import { UserContactInformation } from './user-contact-information';
import { FiMail } from 'react-icons/fi';
import { IoMdBrowsers, IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io';

type UserInformationProps = {
  currentUser: any;
};

export const UserDescription = ({ currentUser }: UserInformationProps) => {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
      }}
    >
      <Typography
        sx={{ fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}
      >
        {t('profile.aboutMe')}
      </Typography>
      {currentUser.description === null ? (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <Typography>
              {t('profile.noData')} {t('profile.description')}
            </Typography>
          </Box>
        </>
      ) : (
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.5,
          }}
        >
          {currentUser.description}
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: ' 20px' }}>
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
                      <a
              href={`https://${currentUser.mail}`}
              rel="noreferrer"
              target="_blank"
            >
              <FiMail />
            </a>
        </Box>
        {currentUser.url_youtube === null ? (
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
        ) : (
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
            <a
              href={`https://${currentUser.url_youtube}`}
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoYoutube />
            </a>
          </Box>
        )}
        {currentUser.url_website === null ? (
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
        ) : (
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
            <a
              href={`https://${currentUser.url_website}`}
              rel="noreferrer"
              target="_blank"
            >
              <IoMdBrowsers />
            </a>
          </Box>
        )}
        {currentUser.url_instagram === null ? (
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
        ) : (
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
            <a
              href={`https://${currentUser.url_instagram}`}
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoInstagram />
            </a>
          </Box>
        )}
        {currentUser.url_linkedin === null ? (
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
        ) : (
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
            <a
              href={`https://${currentUser.url_youtube}`}
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
};
