import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";
import { UserControllers } from "./user.controller";

const router = Router();

router.post(
  "/register",
  auth(USER_ROLE.superAdmin),
  UserControllers.createUser,
);

export const UserRoutes = router;
