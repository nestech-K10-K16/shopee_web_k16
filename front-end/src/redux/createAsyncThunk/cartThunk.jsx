import { createAsyncThunk } from "@reduxjs/toolkit";
import CartApi from "api/common/cartApi";

export const getByIdUserCart = createAsyncThunk(
  "cartSlice/getByIdUserCart",
  async () => {
    const response = await CartApi.getByIduser();
    return response;
  }
);

export const createCart = createAsyncThunk(
  "cartSlice/createCart",
  async (data) => {
    const response = await CartApi.create(data);
    return response;
  }
);

export const editAmounCart = createAsyncThunk(
  "cartSlice/editAmounCart",
  async (data) => {
    const response = await CartApi.editAmount(data);
    return response;
  }
);

export const deleteCart = createAsyncThunk(
  "cartSlice/deleteCart",
  async (id) => {
    const response = await CartApi.delete(id);
    return response;
  }
);

export const deleteByIdUserCart = createAsyncThunk(
  "cartSlice/deleteByIdUserCart",
  async () => {
    const response = await CartApi.deleteByIdUser();
    return response;
  }
);
