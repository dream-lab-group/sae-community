import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { LoginContextProps } from './login';

export const Registration = ({
  loginContext,
  setLoginContext,
  className,
}: LoginContextProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <Box sx={{ width: '470px' }}>
      <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '35px' }}>
        Erstelle ein benutzerkonto
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: 400, fontSize: '20px', marginTop: '7px' }}
      >
        SAE Community Plattform
      </Typography>
      <Box
        sx={{
          display: 'flex',
          marginTop: '37px',
        }}
      >
        <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
          <TextField
            {...register('name', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="name"
            label="Vorname"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.name && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Vorname darf nicht leer sein
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '225px' }}>
          <TextField
            {...register('lastname', {
              required: true,
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Only letters are allowed',
              },
            })}
            id="lastname"
            label="Nachname"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.lastname && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Nachnamedarf nicht leer sein
            </Typography>
          )}
        </Box>
      </Box>
      <TextField
        {...register('email', {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid E-Mail adress',
          },
        })}
        id="email"
        label="E-Mail"
        variant="outlined"
        sx={{ width: '100%', marginTop: ' 20px' }}
      />
      {errors.email && (
        <Typography
          color="error"
          sx={{ fontSize: '14px', marginBottom: '5px' }}
        >
          keine gültige E-mail Adresse
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          marginTop: '20px',
        }}
      >
        <Box sx={{ width: '100%', justifyContent: 'space-between' }}>
          <TextField
            {...register('username', { required: true })}
            id="userame"
            label="Username"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.username && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
        <Box sx={{ width: '225px' }}>
          <TextField
            {...register('password', { required: true })}
            id="password"
            label="Passwort"
            variant="outlined"
            sx={{ width: '225px' }}
          />
          {errors.password && (
            <Typography color="error" sx={{ fontSize: '14px' }}>
              Kein password
            </Typography>
          )}
        </Box>
      </Box>
      <FormControl fullWidth sx={{ marginTop: '20px' }}>
        <InputLabel id="course">Fachrichtung</InputLabel>
        <Select labelId="course" id="course" label="Fachrictung">
          <MenuItem>Webdesign & Development</MenuItem>
          <MenuItem>Game Art & 3D Animation</MenuItem>
          <MenuItem>Games Programming</MenuItem>
          <MenuItem>Film Production</MenuItem>
          <MenuItem>Visual Effects & 3D Animation</MenuItem>
          <MenuItem>Audio Engineering / Music Production</MenuItem>
          <MenuItem>Content Creation & Online Marketing</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', marginTop: '16px' }}>
        <Checkbox
          sx={{ padding: 0, marginRight: '4px', alignSelf: 'flex-start' }}
        />
        <Typography sx={{ fontSize: '12px', lineHeight: '15px' }}>
          Wenn Sie ein Konto erstellen, erklären Sie sich mit unseren
          Nutzungsbedingungen, Datenschutzrichtlinien und unseren
          Standardeinstellungen für Benachrichtigungen einverstanden.
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
          {loginContext}
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
          <Typography sx={{ fontSize: '14px', marginRight: '5px' }}>
            Sie haben bereits in Konto?
          </Typography>
          <Button
            variant="text"
            sx={{
              padding: 0,
              fontFamily: `Outfit', sans-serif`,
              fontSize: '14px',
              marginLeft: '5px',
              textTransform: 'none',
            }}
            onClick={() => setLoginContext('login')}
          >
            Hier anmelden
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
