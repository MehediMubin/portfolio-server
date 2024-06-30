import { z } from "zod";

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be string",
    }),
  }),
});

const editBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
  editBlogValidationSchema,
};
