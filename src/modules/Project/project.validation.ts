import { z } from "zod";

const projectValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    githubRepo: z
      .string({
        required_error: "Github Repository is Required",
      })
      .regex(
        /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/,
        "Invalid Github Repository URL",
      ),
  }),
});

export const ProjectValidation = {
  projectValidationSchema,
};
