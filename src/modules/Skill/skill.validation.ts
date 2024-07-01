import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    }),
    category: z
      .string({
        invalid_type_error: "Category must be string",
      })
      .optional(),
  }),
});

const editSkillValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
      })
      .refine((name) => name !== "", {
        message: "Name is required",
      })
      .optional(),
    category: z
      .string({
        invalid_type_error: "Category must be string",
      })
      .refine((category) => category !== "", {
        message: "Category is required",
      })
      .optional(),
  }),
});

export const SkillValidation = {
  createSkillValidationSchema,
  editSkillValidationSchema,
};
