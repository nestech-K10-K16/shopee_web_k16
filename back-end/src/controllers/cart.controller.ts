import { Request, Response } from 'express';
import CartModel from '../models/cart.model';
import { typeCart } from '../types/common';
import JwtAcion from '../middlewares/jwtAction.middleware';

const getByIdUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        const result = await CartModel.getByIdUser(vefityToken.data?.Email);
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
}

const create = async (req: Request<{}, {}, typeCart>, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        await CartModel.create({ ...req.body, Email: vefityToken.data.Email })
        res.send({ errCode: 0, message: "The item added to your Shopping bag" })
    }
    catch (error) {
        console.log(error);
    }
}

const editAmount = async (req: Request<{}, {}, typeCart>, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        await CartModel.editAmount({ ...req.body, Email: vefityToken.data?.Email, })
        res.end()
    }
    catch (error) {
        console.log(error);
    }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        await CartModel.remove({ Email: vefityToken.data?.Email, IdProduct: req.params.id })
        res.send({ errCode: 0, message: "The item has been cleared from your Shopping bag" })
    }
    catch (error) {
        console.log(error);
    }
}

const removeByIdUser = async (req: Request, res: Response) => {
    try {
        const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
        await CartModel.removeByIdUser(vefityToken.data?.Email)
        res.send({ errCode: 0, message: "All Items have been removed from your Shopping bag" })
    }
    catch (error) {
        console.log(error);
    }
}

const CartController = { getByIdUser, create, editAmount, remove, removeByIdUser }
export default CartController 