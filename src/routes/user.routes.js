import { Router } from 'express'
import StatusCodes  from "http-status-codes"
import { firstcontroller ,userLoginController} from '../controllers/user.controller.js';
const userRouter = Router()

userRouter.get('/', firstcontroller)
userRouter.post('/login', userLoginController)
userRouter.get('/abouts', (req, res) => {
  res.send('About birds')
})

export default userRouter
