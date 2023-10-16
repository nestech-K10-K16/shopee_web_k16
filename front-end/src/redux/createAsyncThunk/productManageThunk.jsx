import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "api/productApi";
import { typeReduxThunk } from "constants/typeRedux";

export const getListProduct = createAsyncThunk(
  `${typeReduxThunk.PRODUCT_MANAGE_SLICE}/getListProductManage`,
  async () => {
    const response = await ProductApi.getListProduct();
    return response;
  }
);

export const createProduct = createAsyncThunk(
  `${typeReduxThunk.PRODUCT_MANAGE_SLICE}/createProduct`,
  async (product) => {
    const response = await ProductApi.createProduct(product);
    return response;
  }
);

export const editProduct = createAsyncThunk(
  `${typeReduxThunk.PRODUCT_MANAGE_SLICE}/editProduct`,
  async (product) => {
    const response = await ProductApi.editProduct(product);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  `${typeReduxThunk.PRODUCT_MANAGE_SLICE}/deleteProduct`,
  async (id) => {
    const response = await ProductApi.deleteProduct(id);
    return response;
  }
);
