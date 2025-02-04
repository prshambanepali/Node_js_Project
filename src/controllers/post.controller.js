import StatusCodes from "http-status-codes";
import { createPostService, getAllPostsService } from "../services/post.service.js";
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
    const data = await createPostService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getPostByIdController = async (req, res, next) => {
  try {
    createUserSchema.parse(req.body);
    const data = await SignUpService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
