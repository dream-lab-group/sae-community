import axios from 'axios';
import { apiClient } from '../../../pages/api/apiClient';
import { UserLogin, UserRegistration } from '../../types/types';

// export const getInitialUserInformation = async (): Promise<
//   RequestResult<UserDto>
// > => {
//   const response = await apiClient.get(
//     'users/6bed6ef8-cf24-415e-91f9-0fbc895b5515',
//   );

//   return response.data;
// };

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
    return response.status, response.data;
  } else if (course === 'gameart') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '5eebd45f-2b16-4486-b0be-beaba2176ef1',
    });
    return response.status, response.data;
  } else if (course === 'gamesprogramming') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: 'a860efbf-e1ec-4ce1-895a-3b615bdf0214',
    });
    return response.status, response.data;
  } else if (course === 'film') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '56f43b75-07c5-4c1c-86f9-5d5f04f500c6',
    });
    return response.status, response.data;
  } else if (course === 'visualeffects') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '02854aaf-cc86-417b-a006-f46a7ce42a8a',
    });
    return response.status, response.data;
  } else if (course === 'audio') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '15ad0eab-925b-49a8-a15d-f5375b022e54',
    });
    return response.status, response.data;
  } else if (course === 'contentcreation') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: '2f33d258-48a0-4d7a-968d-73e7df0362eb',
    });
    return response.status, response.data;
  } else if (course === 'alumni') {
    const response = await apiClient.post('users', {
      first_name,
      last_name,
      email,
      password,
      course,
      role: 'e8b9e5f2-788e-46f1-8a93-5d61ecf53c15',
    });
    return response.status, response.data;
  } else {
    return 'no-course-selected';
  }
};

export const loginUser = async ({ email, password }: UserLogin) => {
  const fetchedUser = await apiClient.get(
    `users?filter={ "email": { "_eq": "${email}" }}`,
  );

  try {
    const { data, status }: { data: any; status: number } =
      await apiClient.post('auth/login', {
        email: `${email}`,
        password: `${password}`,
      });
    if (status === 200) {
      return {
        status: status,
        user: {
          email: email,
          password: password,
        },
        access_token: data.data.access_token,
        refresh_token: data.data.refresh_token,
        message: data.message,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
      };
    }
  }
};
