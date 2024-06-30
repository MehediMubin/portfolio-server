import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const createProject = async (payload: TProject) => {
  const res = await ProjectModel.create(payload);
  return res;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const ProjectServices = {
  createProject,
  updateProject,
};
