import jsonwebtoken from "jsonwebtoken" 

export const generateJwtToken= (userId)=>{

    const payload={
        sub: userId,
        issueAt: new Date()
    }
    const option={
        expiresIn:"2h",
    }
    try{
        const token=jsonwebtoken.sign(
            payload,
            process.env.JWT_SECRETE,
            option
        )
        return token;
    }
    catch(error)
    {
        console.log(error)
        throw new Error("Internal Server Error!")
    }
}