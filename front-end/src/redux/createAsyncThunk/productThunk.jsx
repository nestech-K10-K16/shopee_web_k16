import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "api/common/productApi";

export const getListProduct = createAsyncThunk(
  "productSlice/getListProduct",
  async () => {
    const response = await ProductApi.getList();
    return response;
  }
);

export const getByIdProduct = createAsyncThunk(
  "productSlice/getByIdProduct",
  async (id) => {
    const response = await ProductApi.getById(id);
    return response;
  }
);

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async (data) => {
    const response = await ProductApi.create(data);
    return response;
  }
);

export const editProduct = createAsyncThunk(
  "productSlice/editProduct",
  async (data) => {
    const response = await ProductApi.edit(data);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "productSlice/deleteProduct",
  async (id) => {
    const response = await ProductApi.delete(id);
    return response;
  }
);
