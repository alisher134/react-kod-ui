export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL as string,
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USER: {
    PROFILE: '/users/profile',
  },
};
