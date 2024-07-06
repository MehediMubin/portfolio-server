import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategory = async (category: TCategory) => {
  const res = await CategoryModel.create(category);
  return res;
};

export const CategoryServices = {
  createCategory,
};
