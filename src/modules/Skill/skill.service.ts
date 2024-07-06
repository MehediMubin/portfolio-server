import mongoose from "mongoose";
import { CategoryModel } from "../Category/category.model";
import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

type TPayload = {
  name: string;
  categoryName: string;
};

const getAllSkills = async () => {
  const res = await SkillModel.find();
  return res;
};

const getSingleSkill = async (id: string) => {
  const res = await SkillModel.findById(id);
  return res;
};

const createSkill = async (payload: TPayload) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { name, categoryName } = payload;
    const category = await CategoryModel.findOne({ name: categoryName }, null, {
      session,
    });

    if (!category) {
      throw new Error(`Category '${categoryName}' not found.`);
    }

    const skillData = {
      name: name,
      categoryId: category._id,
    };
    const res = await SkillModel.create([skillData], { session: session });

    await session.commitTransaction();
    return res;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
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
