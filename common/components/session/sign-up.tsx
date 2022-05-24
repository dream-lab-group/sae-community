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
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { handleCreateNewUser } from '../../data/signup-signin/hooks';
import { useState } from 'react';
import { Globals } from '../../utils/utils';
import { SessionContextProps } from '../../../pages/signin';

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

export const SignUp = ({ setSessionContext }: SessionContextProps) => {
  const theme = useTheme();
  const smBreakpointDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
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
        setOpenSnackbar(true);
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
          {smBreakpointDown ? (
            <>
              <TextField
                id="first_name"
                size="small"
                name="first_name"
                fullWidth
                label={t('loginRegistration.firstname')}
                variant="outlined"
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
                size="small"
                label={t('loginRegistration.lastname')}
                variant="outlined"
                sx={{ marginTop: ' 15px' }}
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
              <TextField
                id="email"
                name="email"
                fullWidth
                size="small"
                label={t('loginRegistration.email')}
                type="email"
                variant="outlined"
                sx={{ marginTop: ' 15px' }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                fullWidth
                size="small"
                label={t('loginRegistration.password')}
                type="password"
                variant="outlined"
                sx={{ marginTop: '15px' }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="repeatpassword"
                name="repeatpassword"
                fullWidth
                size="small"
                label={t('loginRegistration.repeatPassword')}
                type="password"
                variant="outlined"
                sx={{ marginTop: '15px' }}
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
              <FormControl fullWidth size="small" sx={{ marginTop: '15px' }}>
                <InputLabel id="course">Fachrichtung</InputLabel>
                <Select
                  labelId="course"
                  id="course"
                  name="course"
                  label="Fachrictung"
                  sx={{ display: 'flex', alignItems: 'center' }}
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
              <Box sx={{ display: 'flex', marginTop: '13px' }}>
                <Checkbox
                  checked={formik.values.termsOfUse}
                  onChange={formik.handleChange}
                  name="termsOfUse"
                  required
                  size="small"
                  aria-label="termsOfUse"
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{
                    padding: 0,
                    marginRight: '4px',
                    alignSelf: 'flex-start',
                  }}
                />
                <Typography sx={{ fontSize: '10px', lineHeight: '15px' }}>
                  {t('loginRegistration.termsOfUse')}
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
                  variant="contained"
                  type="submit"
                  size="small"
                  sx={{
                    width: '100%',
                    height: '40px',
                    marginTop: '15px',
                    background: '#8519F6',
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
                    marginTop: '12px',
                  }}
                >
                  <Typography sx={{ fontSize: '12px' }}>
                    {t('loginRegistration.existingUser')}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      padding: 0,
                      fontFamily: `'Outfit', sans-serif`,
                      fontSize: '12px',
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
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '37px',
                }}
              >
                <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <TextField
                    id="first_name"
                    name="first_name"
                    label={t('loginRegistration.firstname')}
                    variant="outlined"
                    sx={{ width: '225px' }}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                    helperText={
                      formik.touched.first_name && formik.errors.first_name
                    }
                  />
                </Box>
                <Box sx={{ width: '225px' }}>
                  <TextField
                    id="last_name"
                    name="last_name"
                    label={t('loginRegistration.lastname')}
                    variant="outlined"
                    sx={{ width: '225px' }}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.last_name &&
                      Boolean(formik.errors.last_name)
                    }
                    helperText={
                      formik.touched.last_name && formik.errors.last_name
                    }
                  />
                </Box>
              </Box>
              <TextField
                id="email"
                name="email"
                label={t('loginRegistration.email')}
                type="email"
                variant="outlined"
                fullWidth
                sx={{ marginTop: ' 20px' }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                label={t('loginRegistration.password')}
                type="password"
                variant="outlined"
                fullWidth
                sx={{ marginTop: '20px' }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="repeatpassword"
                name="repeatpassword"
                label={t('loginRegistration.repeatPassword')}
                type="password"
                variant="outlined"
                fullWidth
                sx={{ marginTop: '20px' }}
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
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel id="course">Fachrichtung</InputLabel>
                <Select
                  labelId="course"
                  id="course"
                  name="course"
                  label="Fachrictung"
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
              <Box sx={{ display: 'flex', marginTop: '16px' }}>
                <Checkbox
                  checked={formik.values.termsOfUse}
                  onChange={formik.handleChange}
                  name="termsOfUse"
                  required
                  aria-label="termsOfUse"
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{
                    padding: 0,
                    marginRight: '4px',
                    alignSelf: 'flex-start',
                  }}
                />
                <Typography sx={{ fontSize: '12px', lineHeight: '15px' }}>
                  {t('loginRegistration.termsOfUse')}
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
                  variant="contained"
                  type="submit"
                  sx={{
                    width: '470px',
                    height: '56px',
                    marginTop: '34px',
                    background: '#8519F6',
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
                    marginTop: '21px',
                  }}
                >
                  <Typography sx={{ fontSize: '14px' }}>
                    {t('loginRegistration.existingUser')}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      padding: 0,
                      fontFamily: `'Outfit', sans-serif`,
                      fontSize: '14px',
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
            </>
          )}
        </Box>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        sx={{ padding: `${smBreakpointDown && '2em'}` }}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={handleClose}
          sx={{ fontSize: `${smBreakpointDown && '10px'}` }}
        >
          {t('error.loginRegistration.signupError')}
        </Alert>
      </Snackbar>
    </>
  );
};