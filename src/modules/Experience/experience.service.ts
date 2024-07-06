import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";

const getAllExperiences = async () => {
  const res = await ExperienceModel.find();
  return res;
};

const getSingleExperience = async (id: string) => {
  const res = await ExperienceModel.findById(id);
  if (!res) {
    throw new Error("Experience not found");
  }
  return res;
};

const createExperience = async (payload: TExperience) => {
  const res = await ExperienceModel.create(payload);
  return res;
};

const udpateExperience = async (id: string, payload: TExperience) => {
  const res = await ExperienceModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return res;
};

const deleteExperience = async (id: string) => {
  const res = await ExperienceModel.findByIdAndDelete(id);
  return res;
};

export const ExperienceServices = {
  getAllExperiences,
  getSingleExperience,
  createExperience,
  udpateExperience,
  deleteExperience,
};
