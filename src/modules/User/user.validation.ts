import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
