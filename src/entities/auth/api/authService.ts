import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api/apiConfig';
import { ETokens } from '@shared/constants';
import { saveToCookie } from '@shared/helpers/manageCookie';

import { IAuthResponse, ILoginFormValues, IRegisterFormValues } from '../model/types/authTypes';

export const authService = {
  async login(data: ILoginFormValues) {
    return await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.LOGIN, data);
  },

  async register(data: IRegisterFormValues) {
    return await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.REGISTER, data);
  },

  async refreshToken() {
    const response = await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.REFRESH);

    if (response.data.accessToken) saveToCookie(ETokens.ACCESS_TOKEN, response.data.accessToken);

    return response;
  },

  logout() {
    return axiosInstance.post(API_CONFIG.AUTH.LOGOUT);
  },
};
