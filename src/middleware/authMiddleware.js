import jwt from "jsonwebtoken";
import StatusCodes from "http-status-codes";
import { prisma } from "../db/index.js";
export const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const authToken = authHeader?.split(" ")[1];
  if (!authToken) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid Token!" });
  }
  try {
    const pload = jwt.verify(authToken, process.env.JWT_SECRETE);
    const userId = pload.sub;
    console.log(pload)
    console.log("asdfasd", userId);
    const user = await prisma.user.findUnique({ where: { id: pload.sub } });
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
