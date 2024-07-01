import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constant";
import { ExperienceControllers } from "./experience.controller";
import { ExperienceValidation } from "./experience.validation";

const router = Router();

router.post(
  "/create",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(ExperienceValidation.createExperienceValidationSchema),
  ExperienceControllers.createExperience,
);

export const ExperienceRoutes = router;