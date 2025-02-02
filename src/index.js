import express from "express"
import 'dotenv/config'
import userRouter from "./routes/user.routes.js"
import StatusCodes  from "http-status-codes";
import bodyParser from "body-parser";
import { errorHandler } from "./lib/errorHandler.js";
import cors from "cors"

const app=express();
const PORT=process.env.PORT;

app.use(cors())
app.use(bodyParser.json()) 
console.log(PORT)
app.get('/',(req,res)=>
{
    res.status(200).json({message: 'Welcome to Homepage'})
})
// app.get('/api/users',(req,res)=>
//     {
//         res.status(StatusCodes.OK).json({message: 'Api'})
//     })
app.use('/api/users',userRouter)  
app.use('/clients',userRouter) 

app.use(errorHandler)
app.listen(PORT,(req,res)=>
{
    console.log(`Server running at port ${PORT}`)
})
