import { Router } from 'express'
import StatusCodes  from "http-status-codes"
import { firstcontroller ,userLoginController,getAllUser} from '../controllers/user.controller.js';

const userRouter = Router()

userRouter.get('/', firstcontroller)
userRouter.post('/login', userLoginController)
userRouter.post('/details', getAllUser)
userRouter.get('/details', getAllUser)
export default userRouter
