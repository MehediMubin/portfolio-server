import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const createProject = async (payload: TProject) => {
  const res = await ProjectModel.create(payload);
  return res;
};

export const ProjectServices = {
  createProject,
};
