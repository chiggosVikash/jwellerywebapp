import jwt from "jsonwebtoken"

export function verifyToken(token){
    const isVerified = jwt.verify(token,process.env.AUTH_SECRET)
    return isVerified
}