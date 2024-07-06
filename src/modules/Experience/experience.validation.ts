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
      year: z.string({
        required_error: "Start Year is required",
        invalid_type_error: "Start Year must be string",
      }),
    }),
  }),
  endDate: z
    .object({
      month: z.string({
        invalid_type_error: "End Month must be string",
      }),
      year: z.string({
        invalid_type_error: "End Year must be string",
      }),
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: "Description must be string",
    })
    .optional(),
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
          .string({
            invalid_type_error: "Start Year must be string",
          })
          .refine((year) => year !== "", {
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
        .string({
          invalid_type_error: "End Year must be string",
        })
        .refine((year) => year !== "", {
          message: "End Year is required",
        }),
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: "Description must be string",
    })
    .optional(),
});

export const ExperienceValidation = {
  createExperienceValidationSchema,
  editExperienceValidationSchema,
};
