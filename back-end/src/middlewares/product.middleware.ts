import { RowDataPacket } from "mysql2";
import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/product.model";
import { typeProduct } from "../types/common";

const checkCreate = async (req: Request<{}, {}, typeProduct>, res: Response, next: NextFunction) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (!IdProduct || !Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }

    const idProduct: RowDataPacket[0] = await ProductModel.getById(IdProduct)
    if (idProduct[0]) {
        res.send({ errCode: 1, message: "Id already exists in the system" });
        return
    }
    next()
}

const checkEdit = async (req: Request<{}, {}, typeProduct>, res: Response, next: NextFunction) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    const idProduct: RowDataPacket[0] = await ProductModel.getById(IdProduct)
    if (!idProduct[0]) {
        res.send({ errCode: 1, message: "Id does not exist in the system" });
        return
    }
    if (!Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }
    next()
}

const productMiddleware = { checkCreate, checkEdit }
export default productMiddleware