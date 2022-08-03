import { Autocomplete, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiClient } from '../../../data/apiClient';

export const EditCollaborators = ({
  currentCollaborators,
  formikProps,
}: {
  currentCollaborators: any;
  formikProps: any;
}) => {
  const collaboratorsData = Object.values(currentCollaborators || {});
  const [allUsers, setAllUsers] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await apiClient.get(
        `users?filter={ "role": { "_neq": "ee11e2ce-d906-434c-8a74-327afae04395" }}`,
      );
      if (userResponse.status === 200) {
        setAllUsers(userResponse.data.data);
      }
    };
    fetchUser();
  }, [setAllUsers]);

  return allUsers ? (
    <Grid item sm={12} md={6} width="100%">
      <Autocomplete
        multiple
        options={allUsers}
        sx={{ width: '100%', marginTop: '20px' }}
        value={collaboratorsData}
        // @ts-expect-error: todo
        getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
        isOptionEqualToValue={(option, value) =>
          // @ts-expect-error: todo
          `${option.first_name} ${option.last_name}` ===
          // @ts-expect-error: todo
          `${value.first_name} ${value.last_name}`
        }
        onChange={(e, value) => {
          formikProps.setFieldValue(
            'collaborators',
            value !== null ? value : formikProps.initialValues.collaborators,
          );
        }}
        renderInput={(params) => (
          <>
            <TextField {...params} label="Collaborators" />
          </>
        )}
      />
    </Grid>
  ) : (
    <></>
  );
};
