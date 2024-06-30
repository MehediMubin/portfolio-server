import config from "../config";
import { USER_ROLE } from "../modules/User/user.constant";
import { UserModel } from "../modules/User/user.model";

const superUser = {
  username: "mehedi",
  password: config.super_admin_password,
  role: USER_ROLE.superAdmin,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExits = await UserModel.findOne({
    role: USER_ROLE.superAdmin,
  });

  if (!isSuperAdminExits) {
    await UserModel.create(superUser);
  }
};

export default seedSuperAdmin;
