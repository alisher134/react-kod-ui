import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api/apiConfig';

import { IAuthResponse, ILoginFormValues, IRegisterFormValues } from '../model/types/authTypes';

export const authService = {
  async login(data: ILoginFormValues) {
    return await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.LOGIN, data);
  },

  async register(data: IRegisterFormValues) {
    return await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.REGISTER, data);
  },
  async refreshToken() {
    return await axiosInstance.post<IAuthResponse>(API_CONFIG.AUTH.REFRESH);
  },
  logout() {
    return axiosInstance.post(API_CONFIG.AUTH.LOGOUT);
  },
};
