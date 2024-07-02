import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./Blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlog(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog Published Successfully",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Blogs Fetched Successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.updateBlog(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Updated Successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.deleteBlog(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Deleted Successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
};
