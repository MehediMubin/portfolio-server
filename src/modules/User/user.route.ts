import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "./user.constant";
import { UserControllers } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = Router();

router.post(
  "/register",
  auth(USER_ROLE.superAdmin),
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);

export const UserRoutes = router;
