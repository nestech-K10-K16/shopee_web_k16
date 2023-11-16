import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createCustomer,
  deleteCustomer,
  getByIdCustomer,
  getListCustomer,
} from "redux/createAsyncThunk/customerThunk";

const initialState = {
  customerList: [],
  customerById: {},
};

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get list customer
    builder.addCase(getListCustomer.fulfilled, (state, action) => {
      state.customerList = action.payload;
    });

    // get by id customer
    builder.addCase(getByIdCustomer.fulfilled, (state, action) => {
      state.customerById = action.payload[0];
    });

    // create customer
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
      state.customerList.unshift({
        ...action.meta.arg,
        IdCustomer: action.payload.IdCustomer,
      });
    });

    // delete customer
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.customerList = state.customerList.filter((item) => {
        return item.IdCustomer !== action.meta.arg;
      });
    });
  },
});

export default customerSlice.reducer;
