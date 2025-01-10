import axios from 'axios';

import { authService } from '@entities/auth';

import { ETokens } from '@shared/constants/authConstants';
import { getFromCookie, removeFromCookie, saveToCookie } from '@shared/helpers/manageCookie';
import { errorHandler } from '@shared/utils';

import { axiosOptions } from './axiosHelper';

export const axiosPublic = axios.create(axiosOptions);
export const axiosInstance = axios.create(axiosOptions);

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
      (error.response.status === 401 ||
        errorHandler(error) === 'jwt expired' ||
        errorHandler(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await authService.refreshToken();
        if (response.data.accessToken)
          saveToCookie(ETokens.ACCESS_TOKEN, response.data.accessToken);

        return axiosInstance.request(originalRequest);
      } catch (error) {
        if (errorHandler(error) === 'jwt expired') {
          authService.logout();
          removeFromCookie(ETokens.ACCESS_TOKEN);
        }
      }
    }

    throw error;
  },
);
