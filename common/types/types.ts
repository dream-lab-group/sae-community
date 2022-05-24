type data = {
  data: any;
};

type JSONValue = string | number | data | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> {}

export interface UserDto {
  id?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified?: string;
  course: string;
  password: string;
  location?: string;
  description?: string;
  interests?: JSONArray;
  programs?: JSONArray;
  avatar?: string;
  status?: string;
  role?: string;
  token?: string;
  auth_data?: JSONArray;
}

export type UserRegistration = Omit<
  UserDto,
  'id' | 'avatar' | 'description' | 'interests' | 'programs'
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

export type PasswordResetProps = {
  email: string;
};