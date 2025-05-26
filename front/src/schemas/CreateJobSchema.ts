import { z } from 'zod'

export const createJobSchema = z.object({
  companyName: z
    .string()
    .min(3, 'Please type a company name with more then 3 characters')
    .optional(),
  status: z.enum([
    'APPLIED',
    'INTERVIEWING',
    'OFFERED',
    'REJECTED',
    'ACCEPTED',
  ]),
  link: z.string().optional(),
  description: z.string().optional(),
})

export type CreateJobFormData = z.infer<typeof createJobSchema>
