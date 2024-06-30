import { Schema, model } from "mongoose";
import { TBlog } from "./Blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const BlogModel = model<TBlog>("Blog", blogSchema);
