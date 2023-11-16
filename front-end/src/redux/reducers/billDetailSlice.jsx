import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createBillDetail,
  getByIdBillDetail,
} from "redux/createAsyncThunk/billDetailThunk";

const initialState = {
  billDetailById: [],
  totalMoneyBillDetail: [],
};

const billDetailSlice = createSlice({
  name: "billDetailSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get by id bill detail
    builder.addCase(getByIdBillDetail.fulfilled, (state, action) => {
      state.billDetailById = action.payload;
      state.totalMoneyBillDetail = state.billDetailById.reduce(
        (item, index) => (item = item + index.IntoMoney),
        0
      );
    });

    // create bill detail
    builder.addCase(createBillDetail.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
    });
  },
});

export default billDetailSlice.reducer;
