// import { NextAuth } from "next-auth/next";
// import { Provider } from "next-auth/providers";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import NextAuth from "next-auth/next";

export const authOptions = {
        // Configure one or more authentication providers
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
            }),
            GitHubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
              }),
                // ...add more providers here  
            ],
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }