import { readFile } from "./getdata.js";
export const userFirstService=async (arg)=>{
console.log("Reached Service Layer")
console.log("Doing some database ")
const somedata="Data fetched!"
return somedata;
};
export const loginUserService=async (loginData)=>{
const email=loginData.email;
const password=loginData.password;
console.log("Checking Database for Login!");
if(email=="prasham@gmail.com"&&password=="123")
{
    return {message: "Login Sucessfull!"};
}
else
{
    return {message: "Login Failed"};
}
};
export const getAllUserService= async (data)=>
{
  await readFile("usersdata.txt");
}