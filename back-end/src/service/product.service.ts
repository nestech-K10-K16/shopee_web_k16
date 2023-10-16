import { Response } from "express"
import { RowDataPacket } from "mysql2"
import { typeProduct } from "../config/type";
import ProductModel from "../models/product.model";

const getById = async (id: string) => {
    const result: RowDataPacket[0] = await ProductModel.getById(id);
    return result[0];
}

const checkCreate = async (product: typeProduct, res: Response) => {
    const { IdProduct, Name, Amount, Price, Image } = product;

    if (!IdProduct || !Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return false
    }
    if (await getById(IdProduct)) {
        res.send({ errCode: 1, message: "Id already exists in the system, please try other id" });
        return false
    }
    return true
}


const checkEdit = async (product: typeProduct, res: Response) => {
    const { IdProduct, Name, Amount, Price, Image } = product;

    if (!await getById(IdProduct)) {
        res.send({ errCode: 1, message: "Id is not in system, please reload the page" });
        return false
    }
    if (!Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return false
    }
    return true
}


const ProductService = { checkCreate, checkEdit }
export default ProductService;