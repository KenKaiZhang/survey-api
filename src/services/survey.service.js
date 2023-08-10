import httpStatus from "http-status";
import { Survey } from "../models";
import ApiError from "../utils/apiError";

export const createSurvey = async (surveyBody) => {
  return Survey.create(surveyBody);
};

export const getSurveyById = async (id) => {
  return Survey.findById(id);
};

export const getSurveyByCode = async (code) => {
  return Survey.findOne({ code });
};

export const getSurveysByOwner = async (owner) => {
  return Survey.find({ owner });
};

export const getSurveysByQuestion = async (question) => {
  return Survey.find({ question });
};

export const updateSurveyById = async (id, updateBody) => {
  const survey = await getSurveyById(id);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  Object.assign(survey, updateBody);
  await survey.save();
  return survey;
};

export const updateSurveyByCode = async (code, updateBody) => {
  const survey = await getSurveyByCode(code);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  Object.assign(survey, updateBody);
  await survey.save();
  return survey;
};

export const deleteSurveyById = async (id) => {
  const survey = await getSurveyById(id);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  await survey.remove();
  return survey;
};

export const deleteSurveyByCode = async (code) => {
  const survey = await getSurveyByCode(code);
  if (!survey) {
    throw new ApiError(httpStatus.NOT_FOUND, "Survey not found");
  }
  await survey.remove();
  return survey;
};
