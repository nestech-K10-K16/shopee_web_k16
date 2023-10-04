import { Request, Response } from 'express';
import productModel from '../models/product.model';

interface typeProduct {
  IdProduct: string
  Name: string
  Amount: number
  Price: number
  Image: Blob
}

const productController = {
  product: async (req: Request, res: Response) => {
    const result = await productModel.getList();;
    res.send(result);
  },

  getById: async (req: Request<{ id: string }>, res: Response) => {
    const result = await productModel.getById(req.params.id);;
    res.send(result);
  },

  addNewProduct: async (req: Request<{}, {}, typeProduct>, res: Response) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    const result = await productModel.addNewProduct([
      IdProduct,
      Name,
      Amount || 0,
      Price || 0,
      Image,
    ]).catch(err => console.log(err));
    res.send(result)
  },

  updateProduct: async (req: Request<{ id: number }, {}, typeProduct>, res: Response) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;
    const result = await productModel.updateProduct([
      Name,
      Amount,
      Price,
      Image,
      IdProduct
    ]);;
    res.send(result)
  },

  deleteProduct: async (req: Request<{ id: string }>, res: Response) => {
    const result = await productModel.deleteProduct(req.params.id);
    res.send(result)
  },
};

export default productController