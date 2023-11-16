import { createAsyncThunk } from "@reduxjs/toolkit";
import BillApi from "api/common/billApi";

export const getListBill = createAsyncThunk(
  "billSlice/getListBill",
  async () => {
    const response = await BillApi.getList();
    return response;
  }
);

export const getByIdBill = createAsyncThunk(
  "billSlice/getByIdBill",
  async (id) => {
    const response = await BillApi.getById(id);
    return response;
  }
);

export const getByIdUserBill = createAsyncThunk(
  "billSlice/getByIdUserBill",
  async (id) => {
    const response = await BillApi.getByIdUser(id);
    return response;
  }
);

export const getListStatusBill = createAsyncThunk(
  "billSlice/getListStatusBill",
  async () => {
    const response = await BillApi.getListStatusBill();
    return response;
  }
);

export const getListPaymentMothodsBill = createAsyncThunk(
  "billSlice/getListPaymentMothodsBill",
  async () => {
    const response = await BillApi.getListPaymentMethodsBill();
    return response;
  }
);

export const getListDeviveryOptionsBill = createAsyncThunk(
  "billSlice/getListDeviveryOptionsBill",
  async () => {
    const response = await BillApi.getListDeviveryOptionsBill();
    return response;
  }
);

export const createBill = createAsyncThunk(
  "billSlice/createBill",
  async (data) => {
    const response = await BillApi.create(data);
    return response;
  }
);

export const deleteBill = createAsyncThunk(
  "billSlice/deleteBill",
  async (id) => {
    const response = await BillApi.delete(id);
    return response;
  }
);
