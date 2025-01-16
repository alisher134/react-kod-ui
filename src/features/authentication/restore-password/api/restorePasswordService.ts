import { axiosPublic } from '@shared/api';
import { API_CONFIG } from '@shared/config/api';

import { IRestorePasswordFormValues } from '../model/types/restorePasswordTypes';

export const restorePasswordService = {
  async restore(body: IRestorePasswordFormValues) {
    return await axiosPublic.post(API_CONFIG.AUTH.RESTORE, body);
  },
};
