import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from "api/productApi";
import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";
import { toast } from "react-toastify";

const listProduct = [
  {
    IdProduct: 1,
    Name: "Lira Earrings",
    Price: 20,
    src: IMG_PRODUCT_01,
  },
  {
    IdProduct: 2,
    Name: "Hal Earrings",
    Price: 25,
    src: IMG_PRODUCT_02,
  },
  {
    IdProduct: 3,
    Name: "Kaede Hair Pin Set Of 3",
    Price: 30,
    src: IMG_PRODUCT_03,
  },
  {
    IdProduct: 4,
    Name: "Hair Pin Set of 3",
    Price: 35,
    src: IMG_PRODUCT_04,
  },
  {
    IdProduct: 5,
    Name: "Plaine Necklace",
    Price: 40,
    src: IMG_PRODUCT_05,
  },
  {
    IdProduct: 6,
    Name: "Yuki Hair Pin Set of 3",
    Price: 45,
    src: IMG_PRODUCT_06,
  },
];

export const getListProduct = createAsyncThunk(
  "productSlice/getListProduct",
  async () => {
    try {
      const response = await ProductApi.getListProduct();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  product: {},
  productDetail: [],
  productCart: [],
  searchProduct: listProduct,
};

const idProductCart = (state, action) =>
  state.productCart.find((item) => item.name === action.payload.name);
const idProductDetail = (state, action) =>
  state.productDetail.find((item) => item.name === action.payload.name);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { IdProduct, Name, src, price, amount } = action.payload;

      if (idProductCart(state, action)) {
        toast.info("This item is already in your Shopping bag");
      } else {
        toast.success("The item added to your Shopping bag");
        state.productCart = [
          ...state.productCart,
          {
            id: IdProduct,
            name: Name,
            src: src,
            price: price,
            color: "Black / Medium",
            amount: amount || 1,
          },
        ];
      }
    },

    increaseAmoutProduct: (state, action) => {
      if (idProductCart(state, action))
        idProductCart(state, action).amount += 1;

      if (idProductDetail(state, action))
        idProductDetail(state, action).amount += 1;
    },

    decreaseAmoutProduct: (state, action) => {
      if (
        idProductCart(state, action) &&
        idProductCart(state, action).amount > 1
      )
        idProductCart(state, action).amount -= 1;

      if (
        idProductDetail(state, action) &&
        idProductDetail(state, action).amount > 1
      )
        idProductDetail(state, action).amount -= 1;
    },

    addToProductDetail: (state, action) => {
      const { id, name, src, price } = action.payload;

      state.productDetail = [
        {
          id: id,
          name: name,
          src: src,
          price: price,
          amount: idProductCart(state, action)
            ? idProductCart(state, action).amount
            : 1,
        },
      ];
    },

    removeProductCart: (state, action) => {
      state.productCart = state.productCart.filter(
        (item) => item.id !== action.payload.id
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
    builder.addCase(getListProduct.fulfilled, (state, action) => {
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
