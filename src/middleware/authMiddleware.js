import jwt from "jsonwebtoken"
import StatusCodes  from "http-status-codes";
export const authMiddleWare=async (req,res,next)=>
{
    const authHeader =req.headers.authorization;
    const authToken=authHeader?.split(" ")[1];
    if(!authToken){
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Invalid Token!"})
    }
    console.log(authToken);
    try{
        
        const pload =jwt.verify(authToken,process.env.JWT_SECRETE)
        const userId=pload.sub
        console.log(pload)
        const user= await prisma.user.findUnique({where:{ id: pload.sub}})
        if(!user)
        {
            res.status(StatusCodes.UNAUTHORIZED)
        }
    }
    catch(error)
    {
        console.log(error)
        next(error)
    }
}