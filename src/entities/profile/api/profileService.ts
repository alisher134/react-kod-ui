import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IProfileResponse, IProgressResponse } from '../model/types/profileTypes';

export const profileService = {
  async getProfile() {
    return await axiosInstance.get<IProfileResponse>(API_CONFIG.PROFILE.MY);
  },

  async meProgress() {
    return await axiosInstance.get<IProgressResponse[]>(API_CONFIG.PROFILE.ME_PROGRESS);
  },
};
