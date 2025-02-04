import { Router } from "express";
import {
  firstcontroller,    
  userLoginController,
  getAllUserController,
  SignUpController,
  getUserProfile,
} from "../controllers/user.controller.js";
import { authMiddleWare } from "../middleware/authMiddleware.js";
import { createPostController, getAllPostsController, getPostByIdController } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", getAllPostsController);
postRouter.post("/", createPostController);
postRouter.post("/:postId", getPostByIdController);
// postRouter.post("/:postId", UpdatePostController);
// postRouter.post("/:postId", DeletePostController);
// postRouter.get('/details', getAllUser)
export default postRouter;
