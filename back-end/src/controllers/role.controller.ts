import { Request, Response } from "express";
import RoleModel from "../models/role.model";

const getList = async (req: Request, res: Response) => {
    try {
        const result = RoleModel.getList()
        res.send(result);
    }
    catch {
        res.status(500).json({ error: "server error" })
    }
}


const RoleController = { getList }
export default RoleController