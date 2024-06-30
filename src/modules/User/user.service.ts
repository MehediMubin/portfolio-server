import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
  const res = await UserModel.create({
    ...payload,
    role: "admin",
  });
  return res;
};

export const UserServices = {
  createUser,
};
