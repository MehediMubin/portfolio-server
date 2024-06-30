/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
  const res = await UserModel.create({
    ...payload,
    role: "admin",
  });

  const { password, ...resWithoutPassword } = res.toObject();
  return resWithoutPassword;
};

export const UserServices = {
  createUser,
};
