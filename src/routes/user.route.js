import express from "express";
import { userController } from "../controllers";

const router = express.Router();

router.route("/").post(userController.createUser);
router.route("/:id").get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

export default router;
