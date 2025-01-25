import express from "express"
import 'dotenv/config'
import userRouter from "./routes/user.routes.js"
import StatusCodes  from "http-status-codes";
import bodyParser from "body-parser";
const app=express();
const PORT=process.env.PORT;
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
app.listen(PORT,(req,res)=>
{
    console.log(`Server running at port ${PORT}`)
})
