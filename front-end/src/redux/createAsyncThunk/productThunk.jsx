import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "api/productApi";

export const getListProduct = createAsyncThunk(
  "productSlice/getListProduct",
  async () => {
    const response = await ProductApi.getListProduct();
    return response;
  }
);
