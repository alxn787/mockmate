import { Session } from "next-auth";
import GoogleProvider  from "next-auth/providers/google";  

export interface sesson extends Session{
        user:{
            id:string,
            email:string,
        }
}

export const authconfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async session({ session, token, user }) {
      session.user = user;
      return session;
    },
    async jwt({ token }) {

        const dbuser

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET??"",
};