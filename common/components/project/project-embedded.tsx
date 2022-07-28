import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const ProjectEmbedded = ({ videoUrl }: { videoUrl: any }) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = getId(videoUrl);

  return (
    <>
      <Box
        sx={{
          marginTop: '35px',
          width: '100%',
          height: `${
            smBreakpointDown
              ? '250px'
              : mdBreakpointDown
              ? '350px'
                ? lgBreakpointDown
                : '450px'
              : '450px'
          }`,
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        <iframe
          width="100%"
          height={`${
            smBreakpointDown
              ? '250px'
              : mdBreakpointDown
              ? '350px'
                ? lgBreakpointDown
                : '450px'
              : '450px'
          }`}
          frameBorder="0"
          className="iframe-border"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </Box>
    </>
  );
};
