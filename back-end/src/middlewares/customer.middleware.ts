import { NextFunction, Request, Response } from "express";
import { typeCustomer } from "../types/common";

const checkCreate = async (req: Request<{}, {}, typeCustomer>, res: Response, next: NextFunction) => {
    const { Name, Phone, Address } = req.body;

    if (!Name || !Address || !Phone) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }
    next()
}

const CustomerMiddleware = { checkCreate }
export default CustomerMiddleware