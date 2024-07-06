import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";
import { SkillControllers } from "./skill.controller";

const router = Router();

router.get("/", SkillControllers.getAllSkills);

router.get("/:id", SkillControllers.getSingleSkill);

router.post(
  "/create",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SkillControllers.createSkill,
);

router.put(
  "/edit/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SkillControllers.updateSkill,
);

router.delete(
  "/delete/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SkillControllers.deleteSkill,
);

export const SkillRoutes = router;
