import { axiosPublic } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IResetPasswordFormValues } from '../model/types/resetPasswordTypes';

export const resetPasswordService = {
  async reset(body: IResetPasswordFormValues) {
    return await axiosPublic.patch(API_CONFIG.AUTH.RESET, body);
  },
};
