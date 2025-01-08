import axios from 'axios';

import { authService } from '@entities/auth';

import { ETokens } from '@shared/constants/authConstants';
import { getFromCookie, removeFromCookie } from '@shared/helpers/manageCookie';
import { errorHandler } from '@shared/utils';

import { API_CONFIG } from '../config/api/apiConfig';

export const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getFromCookie(ETokens.ACCESS_TOKEN);

  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorHandler(error) === 'jwt expired' ||
        errorHandler(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.refreshToken();
        return axiosInstance.request(originalRequest);
      } catch (error) {
        if (
          errorHandler(error) === 'jwt expired' ||
          errorHandler(error) === 'Refresh token not passed'
        ) {
          authService.logout();
          removeFromCookie(ETokens.ACCESS_TOKEN);
        }
      }
    }

    throw error;
  },
);
