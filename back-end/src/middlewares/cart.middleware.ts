import { NextFunction, Request, Response } from "express";
import CartModel from "../models/cart.model";
import JwtAcion from "./jwtAction.middleware";

const checkCreate = async (req: Request<{}, {}, { Email: string, IdProduct: string }>, res: Response, next: NextFunction) => {
    const { IdProduct } = req.body
    const vefityToken: any = JwtAcion.verifyToken(req.cookies.user)
    const getById: any = await CartModel.getById({ Email: vefityToken.data?.Email, IdProduct: IdProduct })
    if (getById[0]) {
        res.send({ errCode: 2, message: "This item is already in your Shopping bag" })
        return
    }
    next()
}

const CartMiddleware = { checkCreate }
export default CartMiddleware