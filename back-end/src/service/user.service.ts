import { Response } from "express"
import { RowDataPacket } from "mysql2"
import UserModel from "../models/user.model";
import { typeUser } from "../config/type";

const getById = async (id: string) => {
    const result: RowDataPacket[0] = await UserModel.getById(id);
    return result[0];
}

const checkCreate = async (data: typeUser, res: Response) => {
    const { Email, Password, Name, IdRole } = data;

    if (!Email || !Password || !Name || !IdRole) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return false
    }
    if (await getById(Email)) {
        res.send({ errCode: 1, message: "Id already exists in the system, please try other id" });
        return false
    }
    return true
}


const checkEdit = async (data: typeUser, res: Response) => {
    const { Email, Password, Name, IdRole } = data;


    if (!await getById(Email)) {
        res.send({ errCode: 1, message: "Id is not in system, please reload the page" });
        return false
    }

    if (!Password || !Name || !IdRole) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return false
    }
    return true
}


const productService = { checkCreate, checkEdit }
export default productService;