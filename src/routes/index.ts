import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/Blog.route";
import { CategoryRoutes } from "../modules/Category/category.route";
import { ExperienceRoutes } from "../modules/Experience/experience.route";
import { ProjectRoutes } from "../modules/Project/project.route";
import { SkillRoutes } from "../modules/Skill/skill.route";
import { UserRoutes } from "../modules/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
