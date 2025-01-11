import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("You must use email to login").min(1, "Required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 charecters long ")
    .max(256),
});

export const signUpSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    email: z
      .string()
      .trim()
      .email("You must use a valid email")
      .min(1, "Required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(256),
    repeatPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(256),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });
