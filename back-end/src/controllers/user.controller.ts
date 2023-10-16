import { Request, Response } from 'express';
import UserModel from '../models/user.model';

const getList = async (req: Request, res: Response) => {
    try {
        const result = await UserModel.getList()
        res.send(result);
    }
    catch {
        res.status(500).json({ error: "server error" })
    }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await UserModel.getById(req.params.id)
        res.send(result);
    }
    catch {
        res.status(500).json({ error: "server error" })
    }
}

const UserController = { getList, getById }
export default UserController