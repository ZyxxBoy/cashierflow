import "server-only";

import { z } from "zod";

import { appConfig } from "@/config/app";

function isValidTimezone(value: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", {
      timeZone: value,
    });

    return true;
  } catch {
    return false;
  }
}

const envSchema = z.object({
  STORE_TIMEZONE: z
    .string()
    .optional()
    .transform((value) => (value && value.trim() ? value.trim() : appConfig.defaultTimezone))
    .refine(isValidTimezone, {
      message: "Invalid store timezone",
    }),
});

export const env = envSchema.parse({
  STORE_TIMEZONE: process.env.STORE_TIMEZONE,
});
