import StatusCodes from "http-status-codes";
import {
  createPostService,
  DeletePostService,
  getAllPostsService,
  getPostByIdService,
  UpdatePostService,
} from "../services/post.service.js";
import { createPostSchema } from "../schemas/post.schema.js";
export const getAllPostsController = async (req, res, next) => {
  try {
    const post = await getAllPostsService(req.body);
    res.status(StatusCodes.ACCEPTED).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const createPostController = async (req, res, next) => {
  try {
    createPostSchema.parse(req.body);
    const data = await createPostService(req.body, req.userId);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getPostByIdController = async (req, res, next) => {
  try {
    const data = await getPostByIdService(req.params);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const UpdatePostController = async (req, res, next) => {
  try {
    const data = await UpdatePostService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const DeletePostController = async (req, res, next) => {
  try {
    const data = await DeletePostService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
