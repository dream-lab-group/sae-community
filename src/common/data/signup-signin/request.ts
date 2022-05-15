import { apiClient } from '../../../pages/api/apiClient';
import { UserDto, UserLogin, UserRegistration } from '../../types/types';
import { RequestResult } from '../fetch/restuls';

export const getInitialUserInformation = async (): Promise<
  RequestResult<UserDto>
> => {
  const response = await apiClient.get(
    'users/6bed6ef8-cf24-415e-91f9-0fbc895b5515',
  );
  return response.data;
};

export const createNewUser = async ({
  first_name,
  last_name,
  email,
  password,
  course,
}: UserRegistration) => {
  if (course === 'webdesign') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: 'df3d1aab-cfd8-4a25-ab19-5403ce9a3ab3',
    });
    return response.data;
  } else if (course === 'gameart') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '5eebd45f-2b16-4486-b0be-beaba2176ef1',
    });
    return response.data;
  } else if (course === 'gamesprogramming') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: 'a860efbf-e1ec-4ce1-895a-3b615bdf0214',
    });
    return response.data;
  } else if (course === 'film') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '56f43b75-07c5-4c1c-86f9-5d5f04f500c6',
    });
    return response.data;
  } else if (course === 'visualeffects') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '02854aaf-cc86-417b-a006-f46a7ce42a8a',
    });
    return response.data;
  } else if (course === 'audio') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '15ad0eab-925b-49a8-a15d-f5375b022e54',
    });
    return response.data;
  } else if (course === 'contentcreation') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '2f33d258-48a0-4d7a-968d-73e7df0362eb',
    });
    return response.data;
  } else if (course === 'alumni') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: 'e8b9e5f2-788e-46f1-8a93-5d61ecf53c15',
    });
    return response.data;
  } else {
    return 'no-course-selected';
  }
};

export const loginUser = async ({ email, password }: UserLogin) => {
  const fetchedUser = await apiClient.get(
    `users?filter={ "email": { "_eq": "${email}" }}`,
  );

  if (fetchedUser.data) {
    if (fetchedUser.data.data[0].email === email) {
      const checkedUser = await apiClient.post('auth/login', {
        email: `${email}`,
        password: `${password}`,
      });

      const checkedPasswordHash = checkedUser.data;
      return checkedPasswordHash.data.access_token;
    } else {
      return 'email-does-not-match';
    }
  } else {
    return 'no-user-found';
  }
};
