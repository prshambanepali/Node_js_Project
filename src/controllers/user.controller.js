import StatusCodes  from "http-status-codes";
import { loginUserService, userFirstService,getAllUserService} from "../services/user.service.js";
export const firstcontroller=async (req,res)=>
{
    const data= await userFirstService();
    res.status(StatusCodes.OK).json({message: 'First Controller'})
}
export const userLoginController=async (req,res,next)=>
    {
        // console.log(req)
        try{
        const data= await loginUserService(req.body);
        // res.status(StatusCodes.ACCEPTED).json(data);
        throw new Error("This is the error")
        }
  
    catch(error)
    {
        console.log(error);
        next(error);
    }
}
    export const getAllUser=async (req,res)=>
    {
        console.log(req)
        const data =await getAllUserService(req,res)
        res.status(StatusCodes.ACCEPTED).json(data)
    }
