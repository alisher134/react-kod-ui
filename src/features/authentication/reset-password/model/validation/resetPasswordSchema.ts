import { t } from 'i18next';
import { ZodType, z } from 'zod';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

import { IResetPasswordFormValues } from '../types/resetPasswordTypes';

export const ResetPasswordSchema: ZodType<IResetPasswordFormValues> = z
  .object({
    password: z
      .string()
      .nonempty({ message: i18n.t(ETranslation.VALIDATION_PASSWORD_REQUIRED) })
      .min(8, { message: t(ETranslation.VALIDATION_PASSWORD_LENGTH) })
      .refine((val) => !/[<>]/.test(val), {
        message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
      }),
    passwordConfirm: z
      .string()
      .nonempty({ message: i18n.t(ETranslation.VALIDATION_PASSWORD_CONFIRM_REQUIRED) })
      .refine((val) => !/[<>]/.test(val), {
        message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
      }),
    token: z.string().refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n.t(ETranslation.VALIDATION_PASSWORD_CONFIRM_MATCH),
    path: ['passwordConfirm'],
  });
