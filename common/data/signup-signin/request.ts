import axios from 'axios';
import { PasswordResetProps, UserRegistration } from '../../types/types';
import { apiClient } from '../apiClient';

export const resetPasswordRequest = async ({ email }: PasswordResetProps) => {
  try {
    const { status, data }: { status: number; data: any } =
      await apiClient.post('auth/password/request', {
        email,
      });
    if (status === 204) {
      return {
        status: status,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        name: error.name,
        message: error.message,
        response: error.response && error.response.data
      };
    }
  }
};

export const createNewUser = async ({
  first_name,
  last_name,
  email,
  password,
  course,
}: UserRegistration) => {
  if (course === 'webdesign') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: 'df3d1aab-cfd8-4a25-ab19-5403ce9a3ab3',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'gameart') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: '5eebd45f-2b16-4486-b0be-beaba2176ef1',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'gamesprogramming') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: 'a860efbf-e1ec-4ce1-895a-3b615bdf0214',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'film') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: '56f43b75-07c5-4c1c-86f9-5d5f04f500c6',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'visualeffects') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: '02854aaf-cc86-417b-a006-f46a7ce42a8a',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'audio') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: '15ad0eab-925b-49a8-a15d-f5375b022e54',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'contentcreation') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: '2f33d258-48a0-4d7a-968d-73e7df0362eb',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else if (course === 'alumni') {
    try {
      const { status, data }: { status: number; data: any } =
        await apiClient.post('users', {
          first_name,
          last_name,
          email,
          password,
          course,
          role: 'e8b9e5f2-788e-46f1-8a93-5d61ecf53c15',
        });
      if (status === 200) {
        return {
          status: status,
          user: {
            first_name: data.data.first_name,
          },
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          name: error.name,
          message: error.message,
          response: error.response && error.response.data
        };
      }
    }
  } else {
    return 'no-course-selected';
  }
};
