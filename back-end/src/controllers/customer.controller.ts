import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import CustomerModel from '../models/customer.model';
import { typeCustomer } from '../types/common';

const getList = async (req: Request, res: Response) => {
    try {
        const result = await CustomerModel.getList();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await CustomerModel.getById(req.params.id)
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}

const create = async (req: Request<{}, {}, typeCustomer>, res: Response) => {
    try {
        const IdCustomer = uuidv4()
        await CustomerModel.create({ ...req.body, IdCustomer: IdCustomer })
        res.send({ errCode: 0, message: "Customer added successfully", IdCustomer: IdCustomer })
    }
    catch (error) {
        console.log(error);
    }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
    try {
        await CustomerModel.remove(req.params.id)
        res.send({ errCode: 0, message: "Customer deleted successfully" })
    }
    catch (error) {
        console.log(error);
    }
}

const CustomerController = { getList, getById, create, remove }
export default CustomerController 