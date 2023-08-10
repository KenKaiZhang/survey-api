import express from "express";
import { itemController } from "../controllers";

const router = express.Router();

router.route("/").post(itemController.createItem);
router.route("/:id").get(itemController.getItem).delete(itemController.deleteItem);

export default router;
