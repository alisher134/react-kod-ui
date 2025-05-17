import { t } from 'i18next';
import { ZodType, z } from 'zod';

import { ILoginFormValues } from '@entities/auth';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

export const LoginSchema: ZodType<ILoginFormValues> = z.object({
  email: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_EMAIL_REQUIRED) })
    .email({ message: i18n.t(ETranslation.VALIDATION_EMAIL_INVALID) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    }),
  password: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_PASSWORD_REQUIRED) })
    .min(8, { message: t(ETranslation.VALIDATION_PASSWORD_LENGTH) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    }),
});
