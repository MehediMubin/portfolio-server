import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>({
  title: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  locationType: {
    type: String,
  },
  startDate: {
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  endDate: {
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  description: {
    type: String,
  },
});

export const ExperienceModel = model<TExperience>(
  "Experience",
  experienceSchema,
);
