import { t } from 'i18next';
import { ZodType, z } from 'zod';

import { IRegisterFormValues } from '@entities/auth';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

export const RegisterSchema: ZodType<IRegisterFormValues> = z.object({
  email: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_EMAIL_REQUIRED) })
    .email({ message: i18n.t(ETranslation.VALIDATION_EMAIL_INVALID) }),
  firstName: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_FIRST_NAME_REQUIRED) })
    .min(2, { message: i18n.t(ETranslation.VALIDATION_FIRST_NAME_LENGTH) }),
  lastName: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_LAST_NAME_REQUIRED) })
    .min(2, { message: i18n.t(ETranslation.VALIDATION_LAST_NAME_LENGTH) }),
  password: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_PASSWORD_REQUIRED) })
    .min(8, { message: t(ETranslation.VALIDATION_PASSWORD_LENGTH) }),
});
