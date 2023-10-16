import { createSlice } from "@reduxjs/toolkit";
import { typeReduxThunk } from "constants/typeRedux";
import {
  createUser,
  getListUser,
} from "redux/createAsyncThunk/userManageThunk";

const initialState = {
  user: [],
  success: false,
};

const userManageSlice = createSlice({
  name: typeReduxThunk.USER_MANAGE_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get list user
    builder.addCase(getListUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    // create user
    builder.addCase(createUser.fulfilled, (state, action) => {});
  },
});

// export const {} = userManageSlice.actions;
export default userManageSlice.reducer;
