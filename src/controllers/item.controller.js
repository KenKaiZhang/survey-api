import httpStatus from "http-status";
import ApiError from "../utils/apiError";
import catchAsync from "../utils/catchAsync";
import { itemService } from "../services";

export const createItem = catchAsync(async (req, res) => {
  const item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(item);
});

export const getItem = catchAsync(async (req, res) => {
  const item = await getItembyId(req.params.id);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, "Item not found");
  }
  res.status(httpStatus.OK).send(item);
});

export const deleteItem = catchAsync(async (req, res) => {
  await itemService.deleteItemById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});
