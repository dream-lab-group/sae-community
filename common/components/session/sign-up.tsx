import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { SessionContextProps } from '../../../pages/signin';
import { handleCreateNewUser } from '../../data/signup-signin/hooks';
import { Globals } from '../../utils/utils';

const signUpValidationSchema = yup.object({
  first_name: yup.string().required('Bitte Vorname angeben'),
  last_name: yup.string().required('Bitte Nachname angeben'),
  email: yup
    .string()
    .email('Keine gültige E-Mail Adresse')
    .required('Darf nicht leer sein'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Darf nicht leer sein'),
  repeatpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwort stimmt nicht überein'),
  course: yup.string().required('Bitte ein Fachrichtung auswählen'),
  termsOfUse: yup.boolean().oneOf([true]),
});

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '20px',
  boxshadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  p: 4,
};

export const SignUp = ({
  setSessionContext,
  openSnackbar,
  setOpenSnackbar,
  errorMessage,
  setErrorMessage,
  handleCloseSnackbar,
}: SessionContextProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));
  const smBreakpointUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [open, setOpen] = useState(false);
  const [createdUser, setCreatedUser] = useState('');
  const { t } = useTranslation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      repeatpassword: '',
      course: '',
      termsOfUse: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values: any) => {
      setErrorMessage(undefined);
      const response = await handleCreateNewUser({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        course: values.course,
      });

      // @ts-ignore: Unreachable code error
      if (response!.createNewUserStatus!.status === 200) {
        handleOpen();
        // @ts-ignore: Unreachable code error
        setCreatedUser(response.createNewUserStatus!.user.first_name);
      } else {
        if (response.createNewUserStatus) {
          if (
            // @ts-expect-error: todo
            response.createNewUserStatus.response.errors[0].message ===
            'Field "email" has to be unique.'
          ) {
            setErrorMessage(
              'Die eingegebene E-Mail wird bereits von einem aktiven Account verwendet.',
            );
            setOpenSnackbar(true);
          }
        }
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: `${smBreakpointDown ? '254px' : '470px'}`,
            position: `${smBreakpointDown && 'relative'}`,
            left: `${smBreakpointDown && -9}`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: `${smBreakpointDown ? '20px' : '35px'}`,
            }}
          >
            {t('loginRegistration.createAccount')}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 400, fontSize: '20px', marginTop: '7px' }}
          >
            {t('general.saeCommunityPlatform')}
          </Typography>
          <Box
            sx={{
              display: `${smBreakpointUp && 'flex'}`,
              marginTop: `${smBreakpointDown ? '21px' : '37px'}`,
              flexDirection: `${smBreakpointUp && 'column'}`,
            }}
          >
            <Box
              sx={{
                display: `${smBreakpointUp && 'flex'}`,
                width: `${smBreakpointUp && '100%'}`,
                justifyContent: `${smBreakpointUp && 'space-between'}`,
              }}
            >
              <TextField
                id="first_name"
                size={smBreakpointDown ? 'small' : 'medium'}
                name="first_name"
                label={t('general.firstname')}
                variant="outlined"
                sx={{ width: `${smBreakpointDown ? '100%' : '225px'}` }}
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
              <TextField
                id="last_name"
                name="last_name"
                fullWidth
                size={smBreakpointDown ? 'small' : 'medium'}
                label={t('general.lastname')}
                variant="outlined"
                sx={{
                  marginTop: `${smBreakpointDown && '15px'}`,
                  width: `${smBreakpointDown ? '100%' : '225px'}`,
                }}
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Box>
            <TextField
              id="email"
              name="email"
              fullWidth
              size={smBreakpointDown ? 'small' : 'medium'}
              label={t('general.email')}
              type="email"
              variant="outlined"
              sx={{ marginTop: `${smBreakpointDown ? '15px' : '20px'}` }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              fullWidth
              size={smBreakpointDown ? 'small' : 'medium'}
              label={t('loginRegistration.password')}
              type="password"
              variant="outlined"
              sx={{ marginTop: `${smBreakpointDown ? '15px' : '20px'}` }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              id="repeatpassword"
              name="repeatpassword"
              fullWidth
              size={smBreakpointDown ? 'small' : 'medium'}
              label={t('loginRegistration.repeatPassword')}
              type="password"
              variant="outlined"
              sx={{ marginTop: `${smBreakpointDown ? '15px' : '20px'}` }}
              value={formik.values.repeatpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.repeatpassword &&
                Boolean(formik.errors.repeatpassword)
              }
              helperText={
                formik.touched.repeatpassword && formik.errors.repeatpassword
              }
            />
            <FormControl
              fullWidth
              size={smBreakpointDown ? 'small' : 'medium'}
              sx={{ marginTop: `${smBreakpointDown ? '15px' : '20px'}` }}
            >
              <InputLabel id="course">
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
                {Globals.allCourses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {/* @ts-expect-error Translation keys only exist during runtime */}
                    {t(`courses.${course}.label`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box
              sx={{
                display: 'flex',
                marginTop: `${smBreakpointDown ? '13px' : '16px'}`,
              }}
            >
              <Checkbox
                checked={formik.values.termsOfUse}
                onChange={formik.handleChange}
                name="termsOfUse"
                required
                size={smBreakpointDown ? 'small' : 'medium'}
                aria-label="termsOfUse"
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                  padding: 0,
                  marginRight: '4px',
                  alignSelf: 'flex-start',
                }}
              />
              <Typography
                sx={{
                  fontSize: `${smBreakpointDown ? '10px' : '12px'}`,
                  lineHeight: '15px',
                }}
              >
                Wenn du ein Konto erstellst, erklärst du dich mit unseren
                <span className="terms-of-use"> Nutzungsbedingungen</span>,
                Datenschutzrichtlinien und unseren Standardeinstellungen für
                Benachrichtigungen einverstanden.
              </Typography>
            </Box>
            <Box
              sx={{
                diplay: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                className="primary-button"
                variant="contained"
                type="submit"
                size={smBreakpointDown ? 'small' : 'medium'}
                sx={{
                  width: `${smBreakpointDown ? '100%' : '470px'}`,
                  height: `${smBreakpointDown ? '40px' : '56px'}`,
                  marginTop: `${smBreakpointDown ? '15px' : '34px'}`,
                }}
              >
                {t('loginRegistration.signup')}
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: `${smBreakpointDown ? '12px' : '21px'}`,
                }}
              >
                <Typography
                  sx={{ fontSize: `${smBreakpointDown ? '12px' : '14px'}` }}
                >
                  {t('loginRegistration.existingUser')}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: 0,
                    fontFamily: `'Outfit', sans-serif`,
                    fontSize: `${smBreakpointDown ? '12px' : '14px'}`,
                    marginLeft: '5px',
                    fontWeight: 700,
                    color: '#000',
                    textTransform: 'none',
                  }}
                  onClick={() => setSessionContext('signin')}
                >
                  Hier anmelden
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          sx={{ padding: `${smBreakpointDown ? '2em' : ''}` }}
        >
          <Alert
            severity="error"
            variant="filled"
            onClose={handleCloseSnackbar}
            sx={{ fontSize: `${smBreakpointDown && '10px'}` }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ fontSize: `${smBreakpointDown && '20px'}` }}
          >
            {`Hey ${createdUser}!`}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: `${smBreakpointDown ? '14px' : '20px'}`,
              marginTop: `${smBreakpointDown && '10px'}`,
            }}
          >
            {t('loginRegistration.waitUntilAccountActivated')}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
