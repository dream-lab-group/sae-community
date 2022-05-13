export interface UserDto {
  id?: number | null;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  course: string;
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
