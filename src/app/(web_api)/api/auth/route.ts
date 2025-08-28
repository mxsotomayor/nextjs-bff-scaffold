import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import type { AuthUserModel } from "@/lib/definitions/AuthUserModel";
import { UserService } from "@/bff/services/UserServices";

export const authOptions = {
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const user = (await UserService.authenticateUser(
          credentials?.email as string,
          credentials?.password as string
        )) as unknown as AuthUserModel;

        if (user) {
          return user; // Return the user object if authentication is successful
        }
        return null; // Return null if authentication fails
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
