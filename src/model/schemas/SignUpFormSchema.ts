import { z } from "zod"
 
export const SignupFormSchema = z.object({
    name: z.string().min(2).max(100),
    username: z.string().min(2).max(50),
    password: z.string().min(7),
})


export type SignupFormType = z.infer<typeof SignupFormSchema>