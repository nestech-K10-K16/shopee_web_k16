import { Router } from "express";
import CartController from "../../controllers/cart.controller";
import CartMiddleware from "../../middlewares/cart.middleware";
import JwtAcion from "../../middlewares/jwtAction.middleware";

const CartRouter = Router();
CartRouter.get("/cart/id-user", JwtAcion.checkTokenUser, CartController.getByIdUser);
CartRouter.post("/cart/create", JwtAcion.checkTokenUser, CartMiddleware.checkCreate, CartController.create);
CartRouter.put("/cart/update-amount", JwtAcion.checkTokenUser, CartController.editAmount);
CartRouter.delete("/cart/delete/:id", JwtAcion.checkTokenUser, CartController.remove);
CartRouter.delete("/cart/delete-id-user", JwtAcion.checkTokenUser, CartController.removeByIdUser);

export default CartRouter;
