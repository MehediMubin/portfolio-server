import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkills();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skills Fetched Successfully",
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getSingleSkill(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill Fetched Successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkill(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Skill Added Successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.updateSkill(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill Updated Successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.deleteSkill(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill Deleted Successfully",
    data: result,
  });
});

export const SkillControllers = {
  getAllSkills,
  getSingleSkill,
  createSkill,
  updateSkill,
  deleteSkill,
};
