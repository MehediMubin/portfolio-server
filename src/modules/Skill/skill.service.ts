import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

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
  createSkill,
  updateSkill,
  deleteSkill,
};
