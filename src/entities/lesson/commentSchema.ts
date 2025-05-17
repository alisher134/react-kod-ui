import { ZodType, z } from 'zod';

import i18n from '@shared/config/i18n/i18n';
import { ETranslation } from '@shared/config/i18n/i18nTranslations';

export const CommentSchema: ZodType<{ text: string }> = z.object({
  text: z
    .string()
    .nonempty({ message: i18n.t(ETranslation.VALIDATION_EMAIL_REQUIRED) })
    .refine((val) => !/[<>]/.test(val), {
      message: i18n.t(ETranslation.VALIDATION_HTML_ERROR),
    }),
});
