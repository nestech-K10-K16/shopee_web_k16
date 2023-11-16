import { v4 as uuidv4 } from 'uuid';
import CustomerModel from '../models/customer.model';
import UserModel from '../models/user.model';
import { typeBill, typeCustomer } from './../types/common';
import { NextFunction, Request, Response } from "express";
import JwtAcion from './jwtAction.middleware';

const checkCreate = async (req: Request<{}, {}, { bill: typeBill, customer: typeCustomer }>, res: Response, next: NextFunction) => {
    const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
    const getByIdUser: any = await UserModel.getById(vefityToken.data.Email)
    if (getByIdUser[0].IdCustomer) {
        next();
        return;
    }

    const { Name, Country, Address, PostCode, City, Phone, Email } = req.body.customer
    if (!Name || !Country || !Address || !PostCode || !City || !Phone || !Email) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return
    }
    else {
        const IdCustomer = uuidv4()
        await CustomerModel.create({ ...req.body.customer, IdCustomer: IdCustomer })
        await UserModel.editIdCustomer({ Email: vefityToken.data.Email, IdCustomer: IdCustomer })
        next()
    }
}

const BillMiddleware = { checkCreate }
export default BillMiddleware