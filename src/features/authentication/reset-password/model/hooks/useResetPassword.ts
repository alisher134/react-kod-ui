import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';
import { errorHandler } from '@shared/utils';

import { resetPasswordService } from '../../api/resetPasswordService';
import { IResetPasswordFormValues } from '../types/resetPasswordTypes';

export const useResetPassword = () => {
  const resetPassword = useMutation({
    mutationKey: ['auth/reset-password'],
    mutationFn: (body: IResetPasswordFormValues) => resetPasswordService.reset(body),
    onSuccess() {
      toast.success(i18n.t(ETranslation.TOAST_AUTH_RESET_SUCCESS));
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  return { resetPassword: resetPassword.mutateAsync };
};
