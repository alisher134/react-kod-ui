import { ZodType, z } from 'zod';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

export const EditProfileSchema: ZodType = z.object({
  firstName: z
    .string()
    .min(2, { message: i18n.t(ETranslation.VALIDATION_FIRST_NAME_LENGTH) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    })
    .optional(),
  lastName: z
    .string()
    .min(2, { message: i18n.t(ETranslation.VALIDATION_LAST_NAME_LENGTH) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    })
    .optional(),
  description: z
    .string()
    .min(50, { message: i18n.t(ETranslation.VALIDATION_DESCRIPTION_LENGTH) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    })
    .optional()
    .nullable(),
  avatarPath: z.string().optional().nullable(),
});
