import { z } from 'zod'

export const formSchema = z
  .object({
    password: z.string().min(8).max(32),
    confirm: z.string().min(8).max(32),
  })
  .superRefine((password, ctx) => {
    if (!Object.values(password).every(item => item === password.password)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ['confirm'],
      })
    }
  })
