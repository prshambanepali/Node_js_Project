import StatusCodes from "http-status-codes";
import {
  createPostService,
  DeletePostByIdService,
  getAllPostByIdService,
  getAllPostsService,
  getPostByIdService,
  updatePostService,
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
export const getAllPostByIdController = async (req, res, next) => {
  try {
    const data = await getAllPostByIdService(req.params.userId);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updatePostController = async (req, res, next) => {
  try {
    const loggedInUser = req.userId;
    const data = await updatePostService(
      req.params.postId,
      loggedInUser,
      req.body
    );
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const DeletePostByIdController = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const loggedInUser = req.userId;
    const data = await DeletePostByIdService(postId, loggedInUser);
    res
      .status(StatusCodes.ACCEPTED)
      .json({ message: "Post Deleted Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
