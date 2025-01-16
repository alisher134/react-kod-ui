import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';
import { errorHandler } from '@shared/utils';

import { restorePasswordService } from '../../api/restorePasswordService';
import { IRestorePasswordFormValues } from '../types/restorePasswordTypes';

export const useRestorePassword = () => {
  const restorePassword = useMutation({
    mutationKey: ['auth/restore-password'],
    mutationFn: (body: IRestorePasswordFormValues) => restorePasswordService.restore(body),
    onSuccess() {
      toast.success(i18n.t(ETranslation.TOAST_AUTH_RESTORE_SUCCESS));
    },
    onError(error) {
      toast.error(errorHandler(error));
    },
  });

  return { restorePassword: restorePassword.mutateAsync };
};
