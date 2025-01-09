export interface IProfile {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarPath: string | null;
  description: string | null;
  role: EProfileRole;
}

export enum EProfileRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
