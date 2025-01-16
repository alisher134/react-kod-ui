import { ZodType, z } from 'zod';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

import { IRestorePasswordFormValues } from '../types/restorePasswordTypes';

export const RestorePasswordSchema: ZodType<IRestorePasswordFormValues> = z.object({
  email: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_EMAIL_REQUIRED) })
    .email({ message: i18n.t(ETranslation.VALIDATION_EMAIL_INVALID) }),
});
