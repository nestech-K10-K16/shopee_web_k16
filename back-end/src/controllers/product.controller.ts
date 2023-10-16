import { Request, Response } from 'express';
import ProductModel from '../models/product.model';
import ProductService from '../service/product.service';
import { typeProduct } from '../config/type';

const getList = async (req: Request, res: Response) => {
  try {
    const result = await ProductModel.getList();
    res.send(result)
  }
  catch {
    res.status(500).json({ error: "server error" })
  }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await ProductModel.getById(req.params.id)
    res.send(result)
  }
  catch {
    res.status(500).json({ error: "server error" })
  }
}

const create = async (req: Request<{}, {}, typeProduct>, res: Response) => {
  try {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (await ProductService.checkCreate(req.body, res)) {
      const result = await ProductModel.create([IdProduct, Name, Amount, Price, Image])
      res.send({ message: "Product added successfully", data: result })
    }
  }
  catch {
    res.status(500).json({ error: "server error" })
  }
}

const edit = async (req: Request<{ id: number }, {}, typeProduct>, res: Response) => {
  try {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (await ProductService.checkEdit(req.body, res)) {
      const result = await ProductModel.edit([Name, Amount, Price, Image, IdProduct])
      res.send({ message: "Product updated successfully", data: result })
    }
  }
  catch {
    res.status(500).json({ error: "server error" })
  }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await ProductModel.remove(req.params.id)
    res.send({ message: "Product deleted successfully", data: result })
  }
  catch {
    res.status(500).json({ error: "server error" })
  }
}

const ProductController = { getList, getById, create, edit, remove }
export default ProductController 