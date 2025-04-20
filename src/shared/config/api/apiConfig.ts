export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL as string,
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    RESTORE: '/auth/restore-password',
    RESET: '/auth/restore-password',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  course: {
    DEFAULT: '/course',
    GET_ALL: '/course',
    BY_SLUG: '/course',
  },
  lesson: {
    DEFAULT: '/lesson',
  },
  progress: {
    DEFAULT: '/progress',
  },
  PROFILE: {
    MY: '/users/profile',
    ME_PROGRESS: '/users/@me/progress',
  },
  MEDIA: {
    UPLOAD: '/media',
  },
};
