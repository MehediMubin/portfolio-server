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

router.put(
  "/edit/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(SkillValidation.editSkillValidationSchema),
  SkillControllers.updateSkill,
);

router.delete(
  "/delete/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SkillControllers.deleteSkill,
);

export const SkillRoutes = router;
