import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/common/userApi";

export const getListUser = createAsyncThunk(
  "userSlice/getListUser",
  async () => {
    const response = await userApi.getList();
    return response;
  }
);

export const getByIdUser = createAsyncThunk(
  "userSlice/getByIdUser",
  async (id) => {
    const response = await userApi.getById(id);
    return response;
  }
);

export const getListRoleUser = createAsyncThunk(
  "userSlice/getListRoleUser",
  async () => {
    const response = await userApi.getListRole();
    return response;
  }
);

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async (data) => {
    const response = await userApi.create(data);
    return response;
  }
);

export const editUser = createAsyncThunk("userSlice/editUser", async (data) => {
  const response = await userApi.edit(data);
  return response;
});

export const deleteUser = createAsyncThunk(
  "userSlice/deleteUser",
  async (id) => {
    const response = await userApi.delete(id);
    return response;
  }
);

export const hanldeLoginUser = createAsyncThunk(
  "userSlice/hanldeLoginUser",
  async (data) => {
    const response = await userApi.handleLogin(data);
    return response;
  }
);

export const hanldeLogoutUser = createAsyncThunk(
  "userSlice/hanldeLogoutUser",
  async () => {
    const response = await userApi.hanldeLogout();
    return response;
  }
);

export const refreshLoginUser = createAsyncThunk(
  "userSlice/refreshLoginUser",
  async () => {
    const response = await userApi.refreshLogin();
    return response;
  }
);

export const handleRegisterUser = createAsyncThunk(
  "userSlice/handleRegister",
  async (data) => {
    const response = await userApi.handleRegister(data);
    return response;
  }
);
