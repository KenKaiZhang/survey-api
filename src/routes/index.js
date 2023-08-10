import express from "express";
import userRoutes from "./user.route";
import surveyRoutes from "./survey.route";
import itemRoutes from "./item.route";
import s3Routes from "./s3.route";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/survey",
    route: surveyRoutes,
  },
  {
    path: "/item",
    route: itemRoutes,
  },
  {
    path: "/s3",
    route: s3Routes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
