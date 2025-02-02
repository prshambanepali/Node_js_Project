import StatusCodes from "http-status-codes";
import {
  loginUserService,
  getAllUserService,
  SignUpService,
  userProfileService,
} from "../services/user.service.js";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema.js";
export const firstcontroller = async (req, res) => {
  const data = await userFirstService();
  res.status(StatusCodes.OK).json({ message: "First Controller" });
};
export const userLoginController = async (req, res, next) => {
  try {
    loginUserSchema.parse(req.body);
    const data = await loginUserService(req.body);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const SignUpController = async (req, res, next) => {
  try {
    createUserSchema.parse(req.body);
    const data = await SignUpService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getAllUserController = async (req, res) => {
  const data = await getAllUserService(req, res);
  res.status(StatusCodes.OK).json(data);
};
export const getUserProfile = async (req, res, next) => {
  try {
    console.log("asdfasdf", req.userId);
    const data = await userProfileService(req.userId);
    res.status(StatusCodes.ACCEPTED).json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
