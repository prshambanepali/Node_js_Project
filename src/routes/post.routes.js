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
  DeletePostByIdController,
  getAllPostByIdController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
} from "../controllers/post.controller.js";

const postRouter = Router();
postRouter
  .route("/")
  .get(authMiddleWare, getAllPostsController)
  .post(authMiddleWare, createPostController);
//OR
// postRouter.get("/", authMiddleWare, getAllPostsController);
// postRouter.post("/", authMiddleWare, createPostController);
postRouter
  .route("/:postId")
  .get(authMiddleWare, getPostByIdController)
  //OR
  // postRouter.get("/getall/:postId", authMiddleWare, getPostByIdController);
  .patch(authMiddleWare, updatePostController)
  .delete(authMiddleWare, DeletePostByIdController);
postRouter.get("/getall/:userId", authMiddleWare, getAllPostByIdController);
// postRouter.get('/details', getAllUser)
export default postRouter;
