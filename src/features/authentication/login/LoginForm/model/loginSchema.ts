import { ZodType, z } from 'zod';

import { ILoginFormData } from './loginTypes';

export const LoginSchema: ZodType<ILoginFormData> = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
