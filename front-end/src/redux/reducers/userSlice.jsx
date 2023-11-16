import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createUser,
  deleteUser,
  getListRoleUser,
  getListUser,
  handleRegisterUser,
  hanldeLoginUser,
  hanldeLogoutUser,
  refreshLoginUser,
} from "redux/createAsyncThunk/userThunk";

const initialState = {
  userList: [],
  roleList: [],
  userToken: {},
  success: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get list user
    builder.addCase(getListUser.fulfilled, (state, action) => {
      state.userList = action.payload;
    });

    // get list role user
    builder.addCase(getListRoleUser.fulfilled, (state, action) => {
      state.roleList = action.payload;
    });

    // create user
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
      state.userList.unshift(action.meta.arg);
    });

    // delete user
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.userList = state.userList.filter((item) => {
        return item.Email !== action.meta.arg;
      });
    });

    // handle login user
    builder.addCase(hanldeLoginUser.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        state.success = false;
        toast.error(action.payload.message);
        return;
      }

      state.success = true;
      toast.success(action.payload.message);
      state.userToken = action.payload.token;
    });

    // refresh login user
    builder.addCase(refreshLoginUser.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) return;

      if (action.payload.token) {
        state.success = true;
        state.userToken = action.payload.token;
      }
    });

    // handle logout user
    builder.addCase(hanldeLogoutUser.pending, (state) => {
      state.success = false;
    });
    builder.addCase(hanldeLogoutUser.fulfilled, (state) => {
      state.userToken = {};
    });

    // handle register
    builder.addCase(handleRegisterUser.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
    });
  },
});

export default userSlice.reducer;
