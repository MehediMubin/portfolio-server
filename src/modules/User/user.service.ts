import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
  const res = await UserModel.create(payload);
  return res;
};

export const UserServices = {
  createUser,
};
