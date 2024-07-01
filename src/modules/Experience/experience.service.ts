import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";

const createExperience = async (payload: TExperience) => {
  const res = await ExperienceModel.create(payload);
  return res;
};

export const ExperienceServices = {
  createExperience,
};
