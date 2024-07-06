import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Projects Fetched Successfully",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getSingleProject(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Fetched Successfully",
    data: result,
  });
});

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

const deleteProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.deleteProject(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Deleted Successfully",
    data: result,
  });
});

export const ProjectControllers = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
