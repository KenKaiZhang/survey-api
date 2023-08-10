import httpStatus from "http-status";
import ApiError from "../utils/apiError";
import catchAsync from "../utils/catchAsync";
import { surveyService } from "../services";

export const createSurvey = catchAsync(async (req, res) => {
  const survey = await surveyService.createSurvey(req.body);
  res.status(httpStatus.CREATED).send(survey);
});

export const getSurvey = catchAsync(async (req, res) => {
  var survey;
  if (req.params.id) {
    survey = await surveyService.getSurveyById(req.params.id);
  } else {
    survey = await surveyService.getSurveyByCode(req.params.code);
  }
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  res.status(httpStatus.OK).send(survey);
});

export const getSurveys = catchAsync(async (req, res) => {
  var surveys;
  if (req.params.owner) {
    surveys = await surveyService.getSurveyByOwner(req.params.owner);
  } else {
    surveys = await surveyService.getSurveyByQuestion(req.params.question);
  }
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  res.status(httpStatus.OK).send(surveys);
});

export const updateSurvey = catchAsync(async (req, res) => {
  var survey;
  if (req.params.id) {
    survey = await surveyService.updateSurveyById(req.params.id, req.body);
  } else {
    survey = await surveyService.updateSurveyByCode(req.params.code, req.body);
  }
  res.status(httpStatus.OK).send(survey);
});

export const deleteSurvey = catchAsync(async (req, res) => {
  if (req.params.id) {
    await surveyService.deleteSurveyById(req.params.id);
  } else {
    await surveyService.deleteSurveyByCode(req.params.code);
  }
  res.status(httpStatus.NO_CONTENT).send();
});
