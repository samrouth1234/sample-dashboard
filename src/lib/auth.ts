import { env } from "@/env";

import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";

export const authOptions: NextAuthOptions = {
  // debug: true,
  secret: env.AUTH_SECRET,
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials): Promise<User | null> => {
        const schema = z.object({
          username: z.string().min(1, "Username is required"),
          password: z.string().min(1, "Password is required"),
        });

        const parsed = schema.safeParse(credentials);

        if (!parsed.success) {
          console.error("Credentials validation failed:", parsed.error.issues);
          return null;
        }

        const { username, password } = parsed.data;

        if (username === env.ADMIN_USERNAME && password === env.ADMIN_PASSWORD) {
          return {
            id: "admin",
            name: "Admin User",
            email: "admin@example.com",
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },
};
