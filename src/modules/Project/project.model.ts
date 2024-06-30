import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    githubRepo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ProjectModel = model<TProject>("Project", projectSchema);
