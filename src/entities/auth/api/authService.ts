import { axiosInstance, axiosPublic } from '@shared/api';
import { API_CONFIG } from '@shared/config/api/apiConfig';

import { IAuthResponse, ILoginFormValues, IRegisterFormValues } from '../model/types/authTypes';

export const authService = {
  async login(body: ILoginFormValues) {
    return await axiosPublic.post<IAuthResponse>(API_CONFIG.AUTH.LOGIN, body);
  },

  async register(body: IRegisterFormValues) {
    return await axiosPublic.post<IAuthResponse>(API_CONFIG.AUTH.REGISTER, body);
  },

  async refreshToken() {
    return await axiosPublic.post<IAuthResponse>(API_CONFIG.AUTH.REFRESH);
  },

  async logout() {
    return await axiosInstance.post(API_CONFIG.AUTH.LOGOUT);
  },
};
