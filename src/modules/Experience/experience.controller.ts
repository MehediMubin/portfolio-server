import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.createExperience(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Experience Added Successfully",
    data: result,
  });
});

const udpateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.udpateExperience(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience Updated Successfully",
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.deleteExperience(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience Deleted Successfully",
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  udpateExperience,
  deleteExperience,
};
