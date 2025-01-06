import { ZodType, z } from 'zod';

import { IRegisterFormData } from './registerTypes';

export const RegisterSchema: ZodType<IRegisterFormData> = z.object({
  email: z.string().email(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  password: z.string().min(8),
});
