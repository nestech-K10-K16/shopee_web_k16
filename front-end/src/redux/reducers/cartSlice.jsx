import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createCart,
  deleteByIdUserCart,
  deleteCart,
  editAmounCart,
  getByIdUserCart,
} from "redux/createAsyncThunk/cartThunk";

const initialState = {
  cartByIdUser: [],
  totalMoneyCart: [],
};

const totalMoney = (state) => {
  state.totalMoneyCart = state.cartByIdUser.reduce(
    (item, index) => (item = item + index.IntoMoney),
    0
  );
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get by id user cart
    builder.addCase(getByIdUserCart.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) return;
      state.cartByIdUser = action.payload;
      totalMoney(state);
    });

    // create cart
    builder.addCase(createCart.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      if (action.payload.errCode === 2) {
        toast.info(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
      state.cartByIdUser.push(action.meta.arg);
    });

    // edit amount cart
    builder.addCase(editAmounCart.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }
      const objIndex = state.cartByIdUser.findIndex(
        (item) => item.IdProduct === action.meta.arg.IdProduct
      );
      state.cartByIdUser[objIndex] = action.meta.arg;
      totalMoney(state);
    });

    // delete cart
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) return;
      toast.success(action.payload.message);
      state.cartByIdUser = state.cartByIdUser.filter((item) => {
        return item.IdProduct !== action.meta.arg;
      });
      totalMoney(state);
    });

    // delete by id user cart
    builder.addCase(deleteByIdUserCart.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) return;
      toast.success(action.payload.message);
      state.cartByIdUser = [];
      totalMoney(state);
    });
  },
});

export default cartSlice.reducer;
