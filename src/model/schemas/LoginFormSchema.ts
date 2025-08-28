import { z } from "zod"
 
export const LoginFormSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(7),
})


export type LoginFormType = z.infer<typeof LoginFormSchema>