import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

type ProjectUploadButtonsProps = {
  handleCancelProjectUpload: () => void;
};

export const ProjectUploadButtons = ({
  handleCancelProjectUpload,
}: ProjectUploadButtonsProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: `${mdBreakpointDown ? 'column' : 'row'}`,
        alignItems: 'center',
        justifyContent: `${smBreakpointUp && 'flex-end'}`,
        marginTop: `${mdBreakpointDown ? '0px' : '30px'}`,
      }}
    >
      <Button
        className="project-button-cancel"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '250px'}`,
          marginTop: `${mdBreakpointDown && '30px'}`,
          height: '56px',
        }}
        onClick={handleCancelProjectUpload}
      >
        {t('general.cancel')}
      </Button>
      <Button
        className="project-button-publish"
        variant="contained"
        sx={{
          width: `${mdBreakpointDown ? '100%' : '350px'}`,
          marginTop: `${mdBreakpointDown && '20px'}`,
          height: '56px',
          marginLeft: `${mdBreakpointDown ? '' : '20px'}`,
        }}
        type="submit"
      >
        {t('projectUpload.publishProject')}
      </Button>
    </Box>
  );
};
