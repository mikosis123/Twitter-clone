import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000,
      },
    }),
    GitHubProvider({ 
      clientId: "e6f3e809590418189528",
      clientSecret: "663f7ec818a248b10ebc1fd6a3046fa037872df8",
      httpOptions: {
        timeout: 10000,
      },
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },
});
