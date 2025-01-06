import { ZodType, z } from 'zod';

import { ILoginFormValues } from '@entities/auth';

export const LoginSchema: ZodType<ILoginFormValues> = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
