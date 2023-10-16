import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { typeReduxThunk } from "constants/typeRedux";

export const getListUser = createAsyncThunk(
  `${typeReduxThunk.USER_MANAGE_SLICE}/getListUser`,
  async () => {
    const response = await userApi.getListUser();
    return response;
  }
);

export const createUser = createAsyncThunk(
  `${typeReduxThunk.USER_MANAGE_SLICE}/createUser`,
  async (data) => {
    const response = await userApi.createUser(data);
    return response;
  }
);

export const editUser = createAsyncThunk(
  `${typeReduxThunk.USER_MANAGE_SLICE}/editUser`,
  async (data) => {
    const response = await userApi.editUser(data);
    return response;
  }
);

export const deleteUser = createAsyncThunk(
  `${typeReduxThunk.USER_MANAGE_SLICE}/deleteUser`,
  async (id) => {
    const response = await userApi.deleteUser(id);
    return response;
  }
);
