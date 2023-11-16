import { NextFunction, Request, Response } from "express"
import JWT from "jsonwebtoken"

const createJWT = (payload: object) => {
    const key = process.env.JWT_SECRET as string
    const token = JWT.sign(payload, key)
    return token
}

const verifyToken = (token: string) => {
    const key = process.env.JWT_SECRET as string
    let decode = null
    try {
        decode = JWT.verify(token, key)
    }
    catch (error) {
        console.log(error);
    }
    return decode
}

const checkTokenUser = (req: Request, res: Response, next: NextFunction) => {
    if (req.cookies.user) {
        next()
    }
    else {
        res.send({ errCode: 1, message: "Please log in to continue" })
    }
}

const JwtAcion = { createJWT, verifyToken, checkTokenUser }
export default JwtAcion