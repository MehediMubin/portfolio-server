import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../User/user.constant";
import { BlogControllers } from "./Blog.controller";
import { BlogValidation } from "./Blog.validation";

const router = Router();

router.post(
  "/create",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogControllers.createBlog,
);

export const BlogRoutes = router;