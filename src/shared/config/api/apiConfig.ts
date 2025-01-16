export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL as string,
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    RESTORE: '/auth/restore-password',
    RESET: '/auth/reset-password',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  PROFILE: {
    MY: '/users/profile',
  },
  MEDIA: {
    UPLOAD: '/media',
  },
};
