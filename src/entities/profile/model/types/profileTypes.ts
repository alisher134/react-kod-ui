export interface IProfileResponse {
  profile: IProfile;
}

export interface IProgressResponse {
  id: string;
  title: string;
  thumbnail: string;
  totalLessons: number;
  completedLessons: number;
  progress: number;
  lastAccessed: string;
  lastLesson: {
    id: string;
    slug: string;
    position: number;
  };
}
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
  STUDENT = 'STUDENT',
}
