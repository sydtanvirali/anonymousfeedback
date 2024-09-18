import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be atleast 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(8, "Password must be atleast 8 characters"),
});
