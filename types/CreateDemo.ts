import * as z from 'zod';


export const CreateDemoFormSchema = z.object({
  name: z
    .string({
      required_error: 'Please type a name.',
    }),
  email: z
    .string({
      required_error: 'Please type your email.',
    })
    .email(),
  password: z.string({
    required_error: 'Please type your password.',
  }),
  country: z.string({
    required_error: 'Please select a country.',
  }),
  type: z.string({
    required_error: 'Please select a type.',
  }),
  rows_nb: z.string().optional().default('1000'),
});


export type CreateDemoFormSchemaType = z.infer<typeof CreateDemoFormSchema>
