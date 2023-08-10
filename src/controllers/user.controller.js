import httpStatus from "http-status";
import ApiError from "../utils/apiError";
import catchAsync from "../utils/catchAsync";
import { userService } from "../services";

export const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

export const getUser = catchAsync(async (req, res) => {
  var user;
  if (req.params.id) {
    user = await userService.getUserById(req.params.id);
  }
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.status(httpStatus.OK).send(user);
});

export const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.status(httpStatus.OK).send(user);
});

export const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});
