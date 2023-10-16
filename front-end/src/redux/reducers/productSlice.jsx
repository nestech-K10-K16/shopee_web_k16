import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getListProduct } from "redux/createAsyncThunk/productThunk";

const initialState = {
  product: [],
  productDetail: [],
  productCart: [],
  isLoading: true,
};

const idProductCart = (state, action) =>
  state.productCart.find((item) => item.IdProduct === action.payload.IdProduct);
const idProductDetail = (state, action) =>
  state.productDetail.find((item) => item.Name === action.payload.Name);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      console.log(state.product);
      if (idProductCart(state, action)) {
        toast.info("This item is already in your Shopping bag");
      } else {
        toast.success("The item added to your Shopping bag");
        state.productCart.push({
          ...action.payload,
          Color: "Black / Medium",
          Amount: 1,
        });
      }
    },

    increaseAmoutProduct: (state, action) => {
      if (idProductCart(state, action))
        idProductCart(state, action).Amount += 1;

      if (idProductDetail(state, action))
        idProductDetail(state, action).Amount += 1;
    },

    decreaseAmoutProduct: (state, action) => {
      if (
        idProductCart(state, action) &&
        idProductCart(state, action).Amount > 1
      )
        idProductCart(state, action).Amount -= 1;

      if (
        idProductDetail(state, action) &&
        idProductDetail(state, action).Amount > 1
      )
        idProductDetail(state, action).Amount -= 1;
    },

    addToProductDetail: (state, action) => {
      state.productDetail = [
        {
          ...action.payload,
          Amount: idProductCart(state, action)
            ? idProductCart(state, action).Amount
            : 1,
        },
      ];
    },

    removeProductCart: (state, action) => {
      state.productCart = state.productCart.filter(
        (item) => item.IdProduct !== action.payload.IdProduct
      );
    },

    removeAllProductCart: (state) => {
      state.productCart = [];
    },

    filterProductName: (state, action) => {
      state.searchProduct = state.product.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    filterProductPrice: (state, action) => {
      state.searchProduct = state.product.filter(
        (item) =>
          item.price >= action.payload[0] && item.price <= action.payload[1]
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getListProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
  },
});

export const {
  addProductToCart,
  increaseAmoutProduct,
  decreaseAmoutProduct,
  addToProductDetail,
  removeProductCart,
  removeAllProductCart,
  filterProductName,
  filterProductPrice,
} = productSlice.actions;

export default productSlice.reducer;
