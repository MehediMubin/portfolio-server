import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    }),
  }),
});

const editCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name must be string",
      })
      .refine((name) => name !== "", {
        message: "Name is required",
      })
      .optional(),
  }),
});

export const SkillValidation = {
  createCategoryValidationSchema,
  editCategoryValidationSchema,
};
