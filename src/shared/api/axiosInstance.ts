import axios from 'axios';

import { authService } from '@entities/auth';

import { ROUTES } from '@shared/config/router';
import { ETokens } from '@shared/constants/authConstants';
import { getFromCookie, removeFromCookie, saveToCookie } from '@shared/helpers/manageCookie';

import { axiosOptions } from './axiosHelper';

export const axiosPublic = axios.create(axiosOptions);
export const axiosInstance = axios.create(axiosOptions);

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getFromCookie(ETokens.ACCESS_TOKEN);

  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const { data } = await authService.refreshToken();

        if (data.accessToken) {
          saveToCookie(ETokens.ACCESS_TOKEN, data.accessToken);
          return axiosInstance.request(originalRequest);
        }
      } catch (error) {
        await authService.logout();
        removeFromCookie(ETokens.ACCESS_TOKEN);
        window.location.href = ROUTES.auth.login.page;
        throw error;
      }
    }

    throw error;
  },
);
