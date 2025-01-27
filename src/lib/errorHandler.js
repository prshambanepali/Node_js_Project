import { StatusCodes } from "http-status-codes"

export const errorHandler=(error,req,res,next)=>{
    console.error("error logged in error handler:--",error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error:"Internal Server Error",
        message: "An unexpected error occured!",
    });
};