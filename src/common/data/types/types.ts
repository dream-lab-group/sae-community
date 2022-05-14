export interface UserDto {
  id?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  course: string;
  role?: string;
  avatar?: string | null;
  about?: string | null;
  interests?: {} | null;
  programs?: {} | null;
}

export type UserRegistration = Omit<
  UserDto,
  'id' | 'avatar' | 'about' | 'interests' | 'programs'
> & {
  id?: number;
  avatar?: string | null;
  about?: string | null;
  interests?: {} | null;
  programs?: {} | null;
};

export type UserLogin = {
  email: string;
  password: string;
};
