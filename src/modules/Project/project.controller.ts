import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project Added Successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProject(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Updated Successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  updateProject,
};
