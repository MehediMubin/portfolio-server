import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";

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
  createExperience,
  udpateExperience,
  deleteExperience,
};
