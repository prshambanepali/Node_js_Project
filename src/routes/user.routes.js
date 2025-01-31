import { Router } from 'express'
import StatusCodes  from "http-status-codes"
import { firstcontroller ,userLoginController, getAllUserController, SignUpController, getUserProfile} from '../controllers/user.controller.js';
import { getAllUserService } from '../services/user.service.js';
import { authMiddleWare } from '../middleware/authMiddleware.js';

const userRouter = Router()

userRouter.get('/', firstcontroller)
userRouter.post('/login', userLoginController)
userRouter.get('/details', getAllUserController)
userRouter.post("/signup",SignUpController)
userRouter.get("/:userId",authMiddleWare,getUserProfile)
// userRouter.get('/details', getAllUser)
export default userRouter
