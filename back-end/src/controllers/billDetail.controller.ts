import BillDetailModel from '../models/billDetail.model';
import { Request, Response } from 'express';

const getByIdBill = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = await BillDetailModel.getByIdBill(req.params.id);
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const create = async (req: Request<{}, {}, []>, res: Response) => {
    try {
        await BillDetailModel.create(req.body)
        res.end()
    }
    catch (error) {
        console.log(error);
    }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
    try {
        await BillDetailModel.remove(req.params.id)
        res.end()
    }
    catch (error) {
        console.log(error);
    }
}

const BillDetailController = { getByIdBill, create, remove }
export default BillDetailController