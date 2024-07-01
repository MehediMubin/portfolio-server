import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

const createSkill = async (payload: TSkill) => {
  const res = await SkillModel.create(payload);
  return res;
};

export const SkillServices = {
  createSkill,
};
