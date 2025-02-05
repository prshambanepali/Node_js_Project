import { Router } from "express";
import {
  firstcontroller,
  userLoginController,
  getAllUserController,
  SignUpController,
  getUserProfile,
} from "../controllers/user.controller.js";
import { authMiddleWare } from "../middleware/authMiddleware.js";
import {
  createPostController,
  DeletePostController,
  getAllPostsController,
  getPostByIdController,
  UpdatePostController,
} from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", authMiddleWare, getAllPostsController);
postRouter.post("/", authMiddleWare, createPostController);
postRouter.get("/getall/:postId", getPostByIdController);
postRouter.post("/update/:postId", authMiddleWare, UpdatePostController);
postRouter.post("/delete/:postId", authMiddleWare, DeletePostController);
// postRouter.get('/details', getAllUser)
export default postRouter;
