import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

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

export const SkillControllers = {
  createSkill,
  updateSkill,
};
