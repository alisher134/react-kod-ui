import { ZodType, z } from 'zod';

import { IRegisterFormValues } from '@entities/auth';

export const RegisterSchema: ZodType<IRegisterFormValues> = z.object({
  email: z.string().email(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  password: z.string().min(8),
});
