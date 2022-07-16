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

export interface ProjectProperties {
  id: string;
  description?: string;
  user_created: string;
  course: string;
}

export type ProjectUploadProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  formikProps?: any;
};

export interface ProjectDto {
  id?: string | null;
  user_created: string;
  project_name: string;
  cover_photo: {};
  course?: string | null;
  description: string;
  collaborators?: {} | null;
  embedded_urls?: [] | null;
  comment_function: boolean;
  external_project: boolean;
  project_files: [] | null;
}
