import httpStatus from "http-status";
import { Item } from "../models";
import ApiError from "../utils/apiError";

const createItem = async (itemBody) => {
  console.log(itemBody);
  return Item.create(itemBody);
};

const getItembyId = async (id) => {
  return Item.findById({ id });
};

const deleteItemById = async (id) => {
  const item = await getItembyId(id);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, "Item not found");
  }
  await item.remove();
  return item;
};

export { createItem, getItembyId, deleteItemById };
