import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialProvider from "next-auth/providers/credentials";
import type { AuthUserModel } from "@/lib/definitions/AuthUserModel";
// import { UserService } from "@/bff/services/UserServices";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        // const user = (await UserService.authenticateUser(
        //   credentials?.email as string,
        //   credentials?.password as string
        // )) as unknown as AuthUserModel;

        const user: AuthUserModel = {
          id: "1",
          name: "John Doe",
          email: credentials?.username as string,
        }; // Mock user for demonstration

        if (user) {
          console.log("returning user from authorize", user);
          return user; // Return the user object if authentication is successful
        }
        return null; // Return null if authentication fails
      },
    }),
  ],
});
