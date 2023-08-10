import express from "express";
import { s3Controller } from "../controllers";

const router = express.Router();

router.route("/").post(s3Controller.getPresignedUrls);

export default router;
