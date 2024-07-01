import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

export const SkillModel = model<TSkill>("Skill", skillSchema);
