import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IProfile } from '../model/types/profileTypes';

export const profileService = {
  async getProfile() {
    return await axiosInstance.get<IProfile>(API_CONFIG.PROFILE.MY);
  },
};
