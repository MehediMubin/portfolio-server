import { TBlog } from "./Blog.interface";
import { BlogModel } from "./Blog.model";

const createBlog = async (payload: TBlog) => {
  const res = await BlogModel.create(payload);
  return res;
};

export const BlogServices = {
  createBlog,
};
