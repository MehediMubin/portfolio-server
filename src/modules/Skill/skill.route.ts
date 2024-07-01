import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constant";
import { SkillControllers } from "./skill.controller";
import { SkillValidation } from "./skill.validation";

const router = Router();

router.post(
  "/create",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(SkillValidation.createSkillValidationSchema),
  SkillControllers.createSkill,
);

export const SkillRoutes = router;
