import { createAsyncThunk } from "@reduxjs/toolkit";
import BillDetailApi from "api/common/billDetailApi";

export const getListBillDetail = createAsyncThunk(
  "billDetailSlice/getListBillDetail",
  async () => {
    const response = await BillDetailApi.getList();
    return response;
  }
);

export const getByIdBillDetail = createAsyncThunk(
  "billDetailSlice/getByIdBillDetail",
  async (id) => {
    const response = await BillDetailApi.getByIdBill(id);
    return response;
  }
);

export const createBillDetail = createAsyncThunk(
  "billDetailSlice/createBillDetail",
  async (data) => {
    const response = await BillDetailApi.create(data);
    return response;
  }
);

export const deleteBillDetail = createAsyncThunk(
  "billDetailSlice/deleteBillDetail",
  async (id) => {
    const response = await BillDetailApi.delete(id);
    return response;
  }
);
