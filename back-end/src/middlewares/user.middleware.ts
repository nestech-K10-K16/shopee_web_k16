import { RowDataPacket } from "mysql2";
import { NextFunction, Request, Response } from "express";
import { checkHashPassword } from "../utils/common";
import UserModel from "../models/user.model";
import { typeUser } from "../types/common";

const getById = async (id: string) => {
    const result: RowDataPacket[0] = await UserModel.getById(id);
    return result[0];
}

const checkCreate = async (req: Request<{}, {}, typeUser>, res: Response, next: NextFunction) => {
    const { Email, Password, Name, Role } = req.body;

    if (!Email || !Password || !Name || !Role) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }

    const id = await getById(Email)
    if (id) {
        res.send({ errCode: 1, message: "Email already exists" });
        return
    }
    next()
}


const checkEdit = async (req: Request<{}, {}, typeUser>, res: Response, next: NextFunction) => {
    const { Email, Password, Name, Role } = req.body;

    const id = await getById(Email)
    if (!id) {
        res.send({ errCode: 1, message: "Id does not exist in the system" });
        return
    }

    if (!Password || !Name || !Role) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }
    next()
}

const checkLogin = async (req: Request<{}, {}, typeUser>, res: Response, next: NextFunction) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        res.send({ errCode: 1, message: "Email and password cannot be empty" });
        return
    }

    const user = await getById(Email)
    if (!user) {
        res.send({ errCode: 1, message: "Email or password is incorrect" });
        return
    }

    const checkPassword = checkHashPassword(Password, user.Password)
    if (checkPassword === false) {
        res.send({ errCode: 1, message: "Email or password is incorrect" });
        return
    }
    next()
}

const checkRegister = async (req: Request<{}, {}, typeUser>, res: Response, next: NextFunction) => {
    const { Email, Password, Name, RePassword } = req.body;

    if (!Email || !Password || !Name || !RePassword) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }

    const id = await getById(Email)
    if (id) {
        res.send({ errCode: 1, message: "Email is already in use" });
        return
    }
    if (RePassword !== Password) {
        res.send({ errCode: 1, message: "Confirm password does not match" });
        return
    }
    next()
}

const userMiddleware = { checkCreate, checkEdit, checkLogin, checkRegister }
export default userMiddleware