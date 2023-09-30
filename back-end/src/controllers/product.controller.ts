import { Request, Response } from 'express';
import productModel from '../models/product.model';

interface typeProduct {
  id: string
  name: string
  amount: number
  price: number
  image: string
}

const productController = {
  product: async (req: Request, res: Response) => {
    const result = await productModel.getList().catch(err => console.log(err));;
    res.send(result);
  },

  getById: async (req: Request<{ id: string }>, res: Response) => {
    const result = await productModel.getById(req.params.id).catch(err => console.log(err));;
    res.send(result);
  },

  addNewProduct: async (req: Request<{}, {}, typeProduct>, res: Response) => {
    const { id, name, amount, price, image } = req.body;

    const result = await productModel.addNewProduct([
      id,
      name,
      amount || 0,
      price || 0,
      image,
    ]).catch(err => console.log(err));
    res.send(result)
  },

  updateProduct: async (req: Request<{ id: number }, {}, typeProduct>, res: Response) => {
    const { id, name, amount, price, image } = req.body;
    const result = await productModel.updateProduct([
      name,
      amount,
      price,
      image,
      id
    ]).catch(err => console.log(err));;
    res.send(result)
  },

  deleteProduct: async (req: Request<{ id: string }>, res: Response) => {
    const result = await productModel.deleteProduct(req.params.id).catch(err => console.log(err));
    res.send(result)
  },
};

export default productController