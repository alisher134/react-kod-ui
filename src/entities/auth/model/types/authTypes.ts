export interface IRegisterFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
}

export interface IAuthUser {
  id: string;
  email: string;
  password: string;
}
