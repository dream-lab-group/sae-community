import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FileUpload } from '../../common/components/project-upload/file-upload';
import { Coworkers } from '../../common/components/project-upload/coworkers';
import { EmbedUrl } from '../../common/components/project-upload/embed-url';
import { useEffect, useState } from 'react';
import { ThumbnailUpload } from '../../common/components/project-upload/thumbnail-upload';
import { BsXCircle } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { directus } from '..';
import { apiClient } from '../../common/data/apiClient';
import { useFormik } from 'formik';
import { Globals } from '../../common/utils/utils';
import * as yup from 'yup';

const ProjectUpload = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdBreakpointDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgBreakpointDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [internExtern, setInternExtern] = useState('Schulprojekt');
  const [currentUser, setCurrentUser] = useState<any>();

  const router = useRouter();

  const handleCancelProjectUpload = () => {
    router.push('/');
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = await directus.users.me.read();
      const userResponse = await apiClient.get(`users/${userId.id}`);
      if (userResponse.status === 200) {
        setCurrentUser(userResponse.data.data);
      }
    };
    getCurrentUser();
  }, [setCurrentUser]);

  const courseValidationSchema = yup.object({
    project_name: yup
      .string()
      .min(5, 'Der Projektname muss mindestens 5 Zeichen lang sein')
      .required('Ein Projektname muss unbedingt eingegeben werden'),
    description: yup.string().required('Bitte beschreibe das Projekt'),
    course: yup.string().required('Bitte ein Fachrichtung auswählen'),
  });

  const formik = useFormik({
    initialValues: {
      project_name: '',
      course: '',
      description: '',
    },
    validationSchema: courseValidationSchema,
    onSubmit: async (values: any) => {
      // @ts-ignore: Unreachable code error
      if (response!.createNewUserStatus!.status === 200) {
        // handleOpen();
        // @ts-ignore: Unreachable code error
        setCreatedUser(response.createNewUserStatus!.user.first_name);
      } else {
        // setOpenSnackbar(true);
      }
    },
  });

  if (currentUser) {
    return (
      <form onSubmit={formik.handleSubmit}>
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
              justifyContent: 'flex-end',
            }}
          />
          <Box
            sx={{
              paddingTop: '25px',
              paddingBottom: '50px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: `${smBreakpointDown ? '381px' : '774px'}`,
              paddingX: `${
                smBreakpointDown ? '20px' : lgBreakpointDown ? '60px' : '40px'
              }`,
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 'fontWeightBold',
                alignSelf: 'flex-start',
              }}
            >
              {t('projectUpload.createProject')}
            </Typography>
            <TextField
              size="small"
              id="projectName"
              name="ProjectName"
              label="Projektname"
              variant="outlined"
              fullWidth
              sx={{
                marginTop: '20px',
                fontSize: '8px',
                maxWidth: '465px',
                alignSelf: 'flex-start',
              }}
            />
            <ThumbnailUpload />
            <FileUpload />
            <EmbedUrl />
            <TextField
              multiline
              size="small"
              id="description"
              name="description"
              label="Beschreibung"
              variant="outlined"
              minRows={7}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
            {currentUser.course === 'alumni' ? (
              <FormControl
                fullWidth
                size="small"
                sx={{ marginTop: `${smBreakpointDown ? '15px' : '20px'}` }}
              >
                <InputLabel id="selectedCourse">
                  {t('loginRegistration.course')}
                </InputLabel>
                <Select
                  labelId="course"
                  id="course"
                  name="course"
                  label="Fachrictung"
                  sx={{
                    display: `${smBreakpointDown && 'flex'}`,
                    alignItems: `${smBreakpointDown && 'center'}`,
                  }}
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  error={formik.touched.course && Boolean(formik.errors.course)}
                >
                  {Globals.uploadCourses.map((course) => (
                    <MenuItem key={course} value={course}>
                      {/* @ts-expect-error Translation keys only exist during runtime */}
                      {t(`courses.${course}.label`)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <></>
            )}
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{ direction: `${mdBreakpointDown && 'flex-start'}` }}
            >
              <Coworkers />
              <Grid
                item
                xs={6}
                alignItems="center"
                sx={{
                  marginTop: `${smBreakpointUp ? '20px' : '5px'}`,
                  alignSelf: `${mdBreakpointDown && 'flex-start'}`,
                }}
              >
                <FormControlLabel
                  control={<Switch />}
                  label="Kommentarfunktion"
                />
                <FormControlLabel control={<Switch />} label={internExtern} />
              </Grid>
            </Grid>
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
              >
                {t('projectUpload.publishProject')}
              </Button>
            </Box>
          </Box>
          <Box
            className="project-button-fixed-cancel"
            component="button"
            sx={{
              border: 'none',
              position: 'fixed',
              right: 0,
              top: 78,
              color: '#000000cc',
              padding: '10px 15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={handleCancelProjectUpload}
          >
            <BsXCircle size={25} />
          </Box>
        </Box>
      </form>
    );
  } else {
    return <></>;
  }
};

export default ProjectUpload;
