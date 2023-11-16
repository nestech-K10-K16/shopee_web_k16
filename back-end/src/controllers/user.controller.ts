import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import { typeUser } from '../types/common';
import { hashPassword } from '../utils/common';
import JwtAcion from '../middlewares/jwtAction.middleware';

const getList = async (req: Request, res: Response) => {
    try {
        const result = await UserModel.getList()
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await UserModel.getById(req.params.id)
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}

const getListRole = (req: Request, res: Response) => {
    try {
        const result = UserModel.getListRole()
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}

const create = async (req: Request<{}, {}, typeUser>, res: Response) => {
    try {
        await UserModel.create({ ...req.body, Password: hashPassword(req.body.Password) })
        res.send({ errCode: 0, message: "User added successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const edit = async (req: Request<{ id: number }, {}, typeUser>, res: Response) => {
    try {
        await UserModel.edit(req.body)
        res.send({ errCode: 0, message: "User updated successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
    try {
        await UserModel.remove(req.params.id)
        res.send({ errCode: 0, message: "User deleted successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const handleLogin = async (req: Request<{}, {}, typeUser>, res: Response) => {
    try {
        const getById: any = await UserModel.getById(req.body.Email)
        const { Email, Name, Role } = getById[0]

        const payload = {
            data: { Email: Email, Name: Name, Role: Role },
            expiresIn: process.env.JWT_EXPIRES_IN
        }
        const createJwt = JwtAcion.createJWT(payload)
        const token = JwtAcion.verifyToken(createJwt)

        res.cookie(process.env.USER_COOKIE as string, createJwt, { httpOnly: true, maxAge: 60 * 60 * 1000 })
        res.send({ errCode: 0, message: "Login successfully", token: token })
    }
    catch (error) {
        console.log(error);
    }
}

const refreshLogin = (req: Request, res: Response) => {
    try {
        const token = JwtAcion.verifyToken(req.cookies.user)
        res.send({ token: token })
    }
    catch (error) {
        console.log(error);
    }
}

const hanldeLogout = (req: Request, res: Response) => {
    res.clearCookie(process.env.USER_COOKIE as string)
    res.end()
}

const hanldeRegister = async (req: Request<{}, {}, typeUser>, res: Response) => {
    try {
        const { Password } = req.body
        await UserModel.create({ ...req.body, Role: 1, Password: hashPassword(Password) })
        res.send({ errCode: 0, message: "Resigtser successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const UserController = {
    getList, getListRole, getById,
    create, edit, remove,
    handleLogin, refreshLogin, hanldeLogout, hanldeRegister
}
export default UserController