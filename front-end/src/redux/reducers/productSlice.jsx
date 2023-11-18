import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getByIdProduct,
  getLimitedListProduct,
  getListProduct,
} from "redux/createAsyncThunk/productThunk";
import { convertBufferToBase64 } from "utils/common";
import { KEY_LOCAL_STORAGE } from "constants/common";

const initialState = {
  productList: [],
  limitedProductList: [],
  totalPage: 0,
  productById: [],
  editProductValue: [],
  searchProduct: [],
  priceProduct: [],
  productDetail: {},
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductToEdit: (state, action) => {
      state.editProductValue = action.payload;
    },

    addToProductDetail: (state, action) => {
      const data = {
        ...action.payload,
        Amount: 1,
        Image: convertBufferToBase64(action.payload.Image),
      };
      state.productDetail = data;

      localStorage.setItem(
        KEY_LOCAL_STORAGE.PRODUCT_DETAIL,
        JSON.stringify(data)
      );
    },

    refreshProductDetail: (state) => {
      state.productDetail = JSON.parse(
        localStorage.getItem(KEY_LOCAL_STORAGE.PRODUCT_DETAIL)
      );
    },

    filterByNameProduct: (state, action) => {
      state.searchProduct = state.productList.filter((item) =>
        item.Name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    filterProductPrice: (state, action) => {
      state.searchProduct = state.productList.filter(
        (item) =>
          item.Price >= action.payload[0] && item.Price <= action.payload[1]
      );
    },
  },

  extraReducers: (builder) => {
    // get list limit product
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.productList = action.payload;
    });

    // get list limit product
    builder.addCase(getLimitedListProduct.fulfilled, (state, action) => {
      state.limitedProductList = action.payload.data?.result;
      state.totalPage = action.payload.data?.totalPage;
    });

    // get by id product
    builder.addCase(getByIdProduct.fulfilled, (state, action) => {
      state.productById = action.payload[0];
    });

    // create product
    builder.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
      state.limitedProductList.unshift(action.meta.arg);
    });

    // edit product
    builder.addCase(editProduct.fulfilled, (state, action) => {
      if (action.payload.errCode === 1) {
        toast.error(action.payload.message);
        return;
      }

      toast.success(action.payload.message);
      const objIndex = state.limitedProductList.findIndex(
        (item) => item.IdProduct === action.meta.arg.IdProduct
      );
      state.productList[objIndex] = action.meta.arg;
    });

    // delete product
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.limitedProductList = state.limitedProductList.filter((item) => {
        return item.IdProduct !== action.meta.arg;
      });
    });
  },
});

export const {
  addProductToEdit,
  addProductDetailtoCart,
  addToProductDetail,
  refreshProductDetail,
  filterByNameProduct,
  filterProductPrice,
} = productSlice.actions;
export default productSlice.reducer;
