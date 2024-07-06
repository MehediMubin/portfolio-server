import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const getAllProjects = async () => {
  const res = await ProjectModel.find();
  return res;
};

const getSingleProject = async (id: string) => {
  const res = await ProjectModel.findById(id);
  return res;
};

const createProject = async (payload: TProject) => {
  const res = await ProjectModel.create(payload);
  return res;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const existingProject = await ProjectModel.findById(id);
  if (!existingProject) {
    throw new Error("Project not found");
  }

  const result = await ProjectModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  if (!result) {
    throw new Error("Update failed");
  }

  return result;
};

const deleteProject = async (id: string) => {
  const res = await ProjectModel.findByIdAndDelete(id);
  if (!res) {
    throw new Error("Project not found or already deleted");
  }
  return res;
};

export const ProjectServices = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
