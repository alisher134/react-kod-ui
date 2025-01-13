import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IProfileResponse } from '../model/types/profileTypes';

export const profileService = {
  async getProfile() {
    return await axiosInstance.get<IProfileResponse>(API_CONFIG.PROFILE.MY);
  },
};
