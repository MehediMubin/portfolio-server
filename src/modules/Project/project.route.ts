import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constant";
import { ProjectControllers } from "./project.controller";
import { ProjectValidation } from "./project.validation";

const router = Router();

router.get("/", ProjectControllers.getAllProjects);

router.get("/:id", ProjectControllers.getSingleProject);

router.post(
  "/create",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectControllers.createProject,
);

router.put(
  "/edit/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(ProjectValidation.editProjectValidationSchema),
  ProjectControllers.updateProject,
);

router.delete(
  "/delete/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ProjectControllers.deleteProject,
);

export const ProjectRoutes = router;
