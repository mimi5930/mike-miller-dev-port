import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email({ message: 'Please provide a valid email' })
    .min(1, { message: 'Please provide a valid email' }),
  message: z.string().min(1, { message: 'Please provide a message' })
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
