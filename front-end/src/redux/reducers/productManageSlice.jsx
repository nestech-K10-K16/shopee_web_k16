import { createSlice } from "@reduxjs/toolkit";
import { typeReduxThunk } from "constants/typeRedux";
import { toast } from "react-toastify";
import {
  getListProduct,
  createProduct,
  deleteProduct,
  editProduct,
} from "redux/createAsyncThunk/productManageThunk";

const initialState = {
  product: [],
  editProductValue: [],
  success: false,
};

const productManageSlice = createSlice({
  name: typeReduxThunk.PRODUCT_MANAGE_SLICE,
  initialState,
  reducers: {
    addProductToEdit: (state, action) => {
      state.success = false;
      state.editProductValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    // get list product
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });

    // create product
    builder.addCase(createProduct.pending, (state) => {
      state.success = false;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        state.success = false;
        toast.error(action.payload.message);
        return;
      }

      state.success = true;
      toast.success(action.payload.message);
      state.product.unshift(action.meta.arg);
    });

    // edit product
    builder.addCase(editProduct.pending, (state) => {
      state.success = false;
    });

    builder.addCase(editProduct.fulfilled, (state, action) => {
      const { IdProduct } = action.meta.arg;

      if (action.payload.errCode === 1) {
        state.success = false;
        toast.error(action.payload.message);
        return;
      }

      state.success = true;
      toast.success(action.payload.message);

      const objIndex = state.product.findIndex(
        (item) => item.IdProduct === IdProduct
      );

      state.product[objIndex] = action.meta.arg;
    });

    // delete product
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.product = state.product.filter((item) => {
        return item.IdProduct !== action.meta.arg;
      });
    });
  },
});

export const { addProductToEdit } = productManageSlice.actions;
export default productManageSlice.reducer;
