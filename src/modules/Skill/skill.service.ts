import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

const getAllSkills = async () => {
  const res = await SkillModel.find();
  return res;
};

const getSingleSkill = async (id: string) => {
  const res = await SkillModel.findById(id);
  return res;
};

const createSkill = async (payload: TSkill) => {
  const res = await SkillModel.create(payload);
  return res;
};

const updateSkill = async (id: string, payload: TSkill) => {
  const res = await SkillModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return res;
};

const deleteSkill = async (id: string) => {
  const res = await SkillModel.findByIdAndDelete(id);
  return res;
};

export const SkillServices = {
  getAllSkills,
  getSingleSkill,
  createSkill,
  updateSkill,
  deleteSkill,
};
