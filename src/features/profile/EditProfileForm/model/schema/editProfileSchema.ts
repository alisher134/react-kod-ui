import { ZodType, z } from 'zod';

export const EditProfileSchema: ZodType = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  description: z.string().optional(),
  avatarPath: z.string().optional(),
  // avatarPath: z.instanceof(FileList).optional(),
});
