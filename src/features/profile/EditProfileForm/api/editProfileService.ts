import { IProfile } from '@entities/profile';

import { axiosInstance } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IEditProfileValues } from '../model/types/editProfileTypes';

export const editProfileService = {
  async editProfile(data: IEditProfileValues) {
    return await axiosInstance.patch<IProfile>(API_CONFIG.PROFILE.MY, data);
  },
};
