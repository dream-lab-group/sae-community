import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CgWebsite } from 'react-icons/cg';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io';

type UserInformationProps = {
  currentUser: any;
};

export const UserDescription = ({ currentUser }: UserInformationProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

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

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: 'auto',
          padding: 'none',
          margin: 'none',
          marginTop: ' 20px',
        }}
      >
        {currentUser.url_website === null ? (
          <></>
        ) : (
          <Box className="user-profile-url-active">
            <a
              href={`https://${currentUser.url_website}`}
              rel="noreferrer"
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <CgWebsite /> <Typography>Webseite</Typography>
            </a>
          </Box>
        )}
        {currentUser.url_youtube === null ? (
          <></>
        ) : (
          <Box
            className="user-profile-url-active"
            sx={{
              marginTop: `${smBreakpointDown ? '20px' : ''}`,
              width: '12rem',
            }}
          >
            <a
              href={`https://${currentUser.url_youtube}`}
              rel="noreferrer"
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <IoLogoYoutube
                style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
              />
              <Typography>Youtube</Typography>
            </a>
          </Box>
        )}
        {currentUser.url_instagram === null ? (
          <></>
        ) : (
          <Box
            className="user-profile-url-active"
            sx={{
              marginTop: `${smBreakpointDown ? '20px' : ''}`,
              width: '12rem',
            }}
          >
            <a
              href={`https://${currentUser.url_instagram}`}
              rel="noreferrer"
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <IoLogoInstagram
                style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
              />
              <Typography>Instagram</Typography>
            </a>
          </Box>
        )}
        {currentUser.url_linkedin === null ? (
          <></>
        ) : (
          <Box
            className="user-profile-url-active"
            sx={{
              marginTop: `${smBreakpointDown ? '20px' : ''}`,
              width: '12rem',
            }}
          >
            <a
              href={`https://${currentUser.url_linkedin}`}
              rel="noreferrer"
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <IoLogoLinkedin
                style={{ fontSize: '1.5rem', marginRight: '.5rem' }}
              />
              <Typography>LinkedIn</Typography>
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
};
