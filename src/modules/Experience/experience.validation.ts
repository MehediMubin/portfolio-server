import { z } from "zod";

const createExperienceValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be string",
    }),
    employmentType: z.string({
      invalid_type_error: "Employment Type must be string",
    }),
    companyName: z.string({
      required_error: "Company Name is required",
      invalid_type_error: "Company Name must be string",
    }),
    location: z.string({
      invalid_type_error: "Location must be string",
    }),
    locationType: z.string({
      invalid_type_error: "Location Type must be string",
    }),
    startDate: z.object({
      month: z.string({
        required_error: "Start Month is required",
        invalid_type_error: "Start Month must be string",
      }),
      year: z.number({
        required_error: "Start Year is required",
        invalid_type_error: "Start Year must be number",
      }),
    }),
  }),
  endDate: z.object({
    month: z.string({
      invalid_type_error: "End Month must be string",
    }),
    year: z.number({
      invalid_type_error: "End Year must be number",
    }),
  }),
  description: z.string({
    invalid_type_error: "Description must be string",
  }),
});

const editExperienceValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title must be string",
      })
      .optional(),
    employmentType: z
      .string({
        invalid_type_error: "Employment Type must be string",
      })
      .optional(),
    companyName: z
      .string({
        invalid_type_error: "Company must be string",
      })
      .optional(),
    location: z
      .string({
        invalid_type_error: "Location must be string",
      })
      .optional(),
    locationType: z
      .string({
        invalid_type_error: "Location Type must be string",
      })
      .optional(),
    startDate: z
      .object({
        month: z
          .string({
            invalid_type_error: "Start Month must be string",
          })
          .refine((month) => month !== "", {
            message: "Start Month is required",
          }),
        year: z
          .number({
            invalid_type_error: "Start Year must be number",
          })
          .refine((year) => year !== 0, {
            message: "Start Year is required",
          }),
      })
      .optional(),
  }),
  endDate: z
    .object({
      month: z
        .string({
          invalid_type_error: "End Month must be string",
        })
        .refine((month) => month !== "", {
          message: "End Month is required",
        }),
      year: z
        .number({
          invalid_type_error: "End Year must be number",
        })
        .refine((year) => year !== 0, {
          message: "End Year is required",
        }),
    })
    .optional(),
  description: z.string({
    required_error: "Description is required",
  }),
});

export const ExperienceValidation = {
  createExperienceValidationSchema,
  editExperienceValidationSchema,
};
