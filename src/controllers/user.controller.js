import StatusCodes  from "http-status-codes";
import { loginUserService, userFirstService} from "../services/user.service.js";
export const firstcontroller=async (req,res)=>
{
    const data= await userFirstService();
    res.status(StatusCodes.OK).json({message: 'First Controller'})
}
export const userLoginController=async (req,res)=>
    {
        console.log(req)
        const data= await loginUserService(req.body);
        res.status(StatusCodes.ACCEPTED).json(data);
    }
