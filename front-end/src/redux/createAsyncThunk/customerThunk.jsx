import { createAsyncThunk } from "@reduxjs/toolkit";
import CustomerApi from "api/common/cusomterApi";

export const getListCustomer = createAsyncThunk(
  "customerSlice/getListCustomer",
  async () => {
    const response = await CustomerApi.getList();
    return response;
  }
);

export const getByIdCustomer = createAsyncThunk(
  "customerSlice/getByIdCustomer",
  async (id) => {
    const response = await CustomerApi.getById(id);
    return response;
  }
);

export const createCustomer = createAsyncThunk(
  "customerSlice/createCustomer",
  async (data) => {
    const response = await CustomerApi.create(data);
    return response;
  }
);

export const deleteCustomer = createAsyncThunk(
  "customerSlice/deleteCustomer",
  async (id) => {
    const response = await CustomerApi.delete(id);
    return response;
  }
);
