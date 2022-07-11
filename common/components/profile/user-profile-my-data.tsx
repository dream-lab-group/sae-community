import { Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FileUpload } from './file-upload';
/* import { SkillsInterests } from './user-profile-skills-interests';
import { UserProfileUrls } from './user-profile-urls'; */

type UserProfileMyDataProps = {
  id?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  course: string;
  urls: string;
};

export const UserProfileMyData = ({
  id,
  first_name,
  last_name,
  email,
  description,
  course,
  urls
}: UserProfileMyDataProps) => {
  const { t } = useTranslation();

  if (first_name) {
    return (
      <>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              label="Vorname"
              defaultValue={first_name}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px', color: '#00000066' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              label="Nachname"
              defaultValue={last_name}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              label="E-Mail"
              defaultValue={email}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              size="small"
              id="profession"
              label="Fachrichtung"
              defaultValue={course}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ marginTop: '10px', fontSize: '8px' }}
            />
          </Grid>
        </Grid>
        <FileUpload />
        <TextField
          multiline
          size="small"
          id="description"
          label="Beschreibung"
          defaultValue={description}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          minRows={7}
          fullWidth
          sx={{ fontSize: '8px' }}
        />
{/*         <UserProfileUrls UserProfileMyDataProps={urls} />
        <SkillsInterests /> */}
      </>
    );
  } else {
    return <></>;
  }
};
