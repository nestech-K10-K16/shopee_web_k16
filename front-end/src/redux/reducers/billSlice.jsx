import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createBill,
  deleteBill,
  getByIdUserBill,
  getListBill,
  getListDeviveryOptionsBill,
  getListPaymentMothodsBill,
  getListStatusBill,
} from "redux/createAsyncThunk/billThunk";

const initialState = {
  bill: [],
  billByIdCustomer: [],
  statusBill: [],
  paymentMethodsBill: [],
  deliveryOptionsBill: [],
};

const billSlice = createSlice({
  name: "billSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get list bill
    builder.addCase(getListBill.fulfilled, (state, action) => {
      state.bill = action.payload;
    });

    // get by id user bill
    builder.addCase(getByIdUserBill.fulfilled, (state, action) => {
      state.billByIdCustomer = action.payload;
    });

    // get status bill
    builder.addCase(getListStatusBill.fulfilled, (state, action) => {
      state.statusBill = action.payload;
    });

    // get payment methods bill
    builder.addCase(getListPaymentMothodsBill.fulfilled, (state, action) => {
      state.paymentMethodsBill = action.payload;
    });

    // get payment methods bill
    builder.addCase(getListDeviveryOptionsBill.fulfilled, (state, action) => {
      state.deliveryOptionsBill = action.payload;
    });

    // create bill
    builder.addCase(createBill.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
    });

    // delete bill
    builder.addCase(deleteBill.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.bill = state.bill.filter((item) => {
        return item.IdBill !== action.meta.arg;
      });
    });
  },
});

export default billSlice.reducer;
