import { hash } from "bcrypt";
import { prisma } from "../db/index.js";
import { checkPassword, decryptpassword } from "../lib/password_utilities.js";
import { generateJwtToken } from "../lib/jwt-utilities.js";

export const loginUserService=async (loginData)=>{
const email=loginData.email;
const password=loginData.password;
const user=await prisma.user.findUnique({where:{email:email}})
    if(!user)
    {
        throw new Error("Invalid Credentials", {cause: "CustomError"});
    }

    const isPassword= await checkPassword(password,user.password)
    if(!isPassword)
    {
        throw new Error("Invalid Credentials", {cause: "CustomError"})

    }
    const token=generateJwtToken(user.id)
    console.log(token)
    delete user.password
    return {message:"Login succesfull",user,token}

};
export const getAllUserService=async ()=>
    {
        const allUsers = await prisma.user.findMany({omit:{password:true}})
        return allUsers
    }
    getAllUserService()
    .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  export const SignUpService=async(signUpData)=>
    {
        const HashedPassword=await decryptpassword(signUpData.password)
        const res= await prisma.user.create({data:{
            fullName: signUpData.fullName,
            password: HashedPassword,
            email: signUpData.email,
            gender: signUpData.gender

        },
    omit:{
        password:true,
    }})
    const token=generateJwtToken(signUpData.id)
        return {res,token}
    }
    export const userProfileService=async(userId)=>{
        const user=await prisma.user.findUnique({
            where:{
                id:userId,
            },
            omit:{password:true}

        });
        return user
    }