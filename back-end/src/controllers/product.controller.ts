import { Request, Response } from 'express';
import ProductModel from '../models/product.model';
import { typeProduct } from '../types/common';

const getList = async (req: Request, res: Response) => {
  try {
    const result = await ProductModel.getList();
    res.send(result)
  }
  catch (error) {
    console.log(error);
  }
}

const getById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await ProductModel.getById(req.params.id);
    res.send(result)
  }
  catch (error) {
    console.log(error);
  }
}

const create = async (req: Request<{}, {}, typeProduct>, res: Response) => {
  try {
    await ProductModel.create(req.body)
    res.send({ errCode: 0, message: "Product added successfully" })
  }
  catch (error) {
    console.log(error);
  }
}

const edit = async (req: Request<{}, {}, typeProduct>, res: Response) => {
  try {
    await ProductModel.edit(req.body)
    res.send({ errCode: 0, message: "Product updated successfully" })
  }
  catch (error) {
    console.log(error);
  }
}

const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    await ProductModel.remove(req.params.id)
    res.send({ errCode: 0, message: "Product deleted successfully" })
  }
  catch (error) {
    console.log(error);
  }
}

const ProductController = { getList, getById, create, edit, remove }
export default ProductController 