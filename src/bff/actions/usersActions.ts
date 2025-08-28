'use server';
 
import { signIn } from '@/bff/auth';
import { AuthError } from 'next-auth';
import { UserService } from '../services/UserServices';
import { SignupFormType } from '@/model/schemas';
 
// ...
 
export async function authenticateUser(
  formData: FormData,
) {
  try {
    console.log("signing in", formData.get("username"));
    await signIn('credentials', formData);
    console.log("sign in successful");
  } catch (error) {
    console.log("sign in error", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function registerUser(
  {name, username, password}: SignupFormType,
) {
  await UserService.registerUser(name, username, password ?? "");
  return null;
}