import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    API_URL: z.url().optional(),
    DATABASE_URL: z.url(),
    STORE_LABEL: z.string(),
    MOBILE_NUMBER: z.string(),
    BAKONG_ACCOUNT_ID: z.string(),
    MERCHANT_NAME: z.string(),
    TERMINAL_LABEL: z.string(),
    BAKONG_API_URL: z.url(),
    BAKONG_ACCESS_TOKEN: z.jwt(),
    TELEGRAM_BOT_TOKEN: z.string(),
    MLTOPUP_ACCESS_TOKEN: z.string(),
    ADMIN_USERNAME: z.string(),
    ADMIN_PASSWORD: z.string(),
    AUTH_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.url().optional(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_URL: process.env.API_URL,
    STORE_LABEL: process.env.STORE_LABEL,
    MOBILE_NUMBER: process.env.MOBILE_NUMBER,
    BAKONG_ACCOUNT_ID: process.env.BAKONG_ACCOUNT_ID,
    BAKONG_API_URL: process.env.BAKONG_API_URL,
    BAKONG_ACCESS_TOKEN: process.env.BAKONG_ACCESS_TOKEN,
    MERCHANT_NAME: process.env.MERCHANT_NAME,
    TERMINAL_LABEL: process.env.TERMINAL_LABEL,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    MLTOPUP_ACCESS_TOKEN: process.env.MLTOPUP_ACCESS_TOKEN,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
