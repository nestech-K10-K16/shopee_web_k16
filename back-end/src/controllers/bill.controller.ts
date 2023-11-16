import { v4 as uuidv4 } from 'uuid';
import { typeCustomer } from './../types/common';
import { Request, Response } from 'express';
import { typeBill } from '../types/common';
import BillModel from '../models/bill.model';
import UserModel from '../models/user.model';
import JwtAcion from '../middlewares/jwtAction.middleware';

const getList = async (req: Request, res: Response) => {
    try {
        const result = await BillModel.getList();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await BillModel.getById(req.params.id);
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getByIdUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await BillModel.getByIdUser(req.params.id);
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getListStatus = (req: Request, res: Response) => {
    try {
        const result = BillModel.getListStatus();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getListDeliveryOptions = (req: Request, res: Response) => {
    try {
        const result = BillModel.getListDeliveryOptions();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getListPaymentMethods = (req: Request, res: Response) => {
    try {
        const result = BillModel.getListPaymentMethods();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const create = async (req: Request<{}, {}, { customer: typeCustomer, bill: typeBill }>, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        const getByIdUser: any = await UserModel.getById(vefityToken.data.Email)

        const IdBill = uuidv4()
        await BillModel.create({
            ...req.body.bill,
            IdBill: IdBill,
            IdCustomer: getByIdUser[0].IdCustomer,
            OrderDate: new Date(),
            Status: 0,
            DeliveryOptions: 0,
        })
        res.send({ errCode: 0, message: "Bill added successfully", IdBill: IdBill })
    }
    catch (error) {
        console.log(error);
    }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
    try {
        await BillModel.remove(req.params.id)
        res.send({ errCode: 0, message: "Bill deleted successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const BillController = {
    getList, getById, getByIdUser,
    getListStatus, getListDeliveryOptions, getListPaymentMethods,
    create, remove
}
export default BillController