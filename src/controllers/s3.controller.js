import httpStatus from "http-status";
import ApiError from "../utils/apiError";
import catchAsync from "../utils/catchAsync";
import { s3Service } from "../services";

export const getPresignedUrls = catchAsync(async (req, res) => {
  const keys = req.body;
  if (!keys) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No keys were provided");
  }
  const datas = {};
  for (var i = 0; i < keys.length; i++) {
    const presignedData = await s3Service.getPresignedUrl(keys[i]);
    datas[keys[i]] = presignedData;
  }
  res.status(httpStatus.CREATED).send(datas);
});
