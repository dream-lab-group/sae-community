import { UserDto } from './types/types';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
export const InitialUser = (): UserDto => ({
  id: uuidv4(),
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  course: '',
  role: '',
  avatar: '',
  about: '',
  interests: {},
  programs: {},
});
