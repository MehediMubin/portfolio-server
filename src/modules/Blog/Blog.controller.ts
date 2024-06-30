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

export const BlogControllers = {
  createBlog,
};
