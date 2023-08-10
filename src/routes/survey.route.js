import express from "express";
import { surveyController } from "../controllers";

const router = express.Router();

router.route("/").post(surveyController.createSurvey);
router.route("/id/:id").get(surveyController.getSurvey).delete(surveyController.deleteSurvey).patch(surveyController.updateSurvey);
router.route("/code/:code").get(surveyController.getSurvey).delete(surveyController.deleteSurvey).patch(surveyController.updateSurvey);

export default router;
