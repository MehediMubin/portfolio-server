import { TBlog } from "./Blog.interface";
import { BlogModel } from "./Blog.model";

const createBlog = async (payload: TBlog) => {
  const res = await BlogModel.create(payload);
  return res;
};

const getAllBlogs = async () => {
  const res = await BlogModel.find();
  return res;
};

const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const existingBlog = await BlogModel.findById(id);
  if (!existingBlog) {
    throw new Error("Blog not found");
  }

  const result = await BlogModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  if (!result) {
    throw new Error("Update failed");
  }

  return result;
};

const deleteBlog = async (id: string) => {
  const res = await BlogModel.findByIdAndDelete(id);
  if (!res) {
    throw new Error("Blog not found or already deleted");
  }
  return res;
};

export const BlogServices = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
};
