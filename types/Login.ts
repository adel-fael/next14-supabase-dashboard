import * as z from 'zod';


export const LoginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Please type your email.',
    })
    .email(),
  password: z.string({
    required_error: 'Please type your password.',
  }),
});


export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>
