import { createSlice } from "@reduxjs/toolkit";
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
    id: 1,
    name: "Lira Earrings",
    price: 20,
    src: IMG_PRODUCT_01,
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: 25,
    src: IMG_PRODUCT_02,
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3",
    price: 30,
    src: IMG_PRODUCT_03,
  },
  {
    id: 4,
    name: "Hair Pin Set of 3",
    price: 35,
    src: IMG_PRODUCT_04,
  },
  {
    id: 5,
    name: "Plaine Necklace",
    price: 40,
    src: IMG_PRODUCT_05,
  },
  {
    id: 6,
    name: "Yuki Hair Pin Set of 3",
    price: 45,
    src: IMG_PRODUCT_06,
  },
];

const initialState = {
  product: listProduct,
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
    addProductToCart(state, action) {
      const { id, name, src, price, amount } = action.payload;

      if (idProductCart(state, action)) {
        toast.info("This item is already in your Shopping bag");
      } else {
        toast.success("The item added to your Shopping bag");
        state.productCart = [
          ...state.productCart,
          {
            id: id,
            name: name,
            src: src,
            price: price,
            color: "Black / Medium",
            amount: amount || 1,
          },
        ];
      }
    },

    increaseAmoutProduct(state, action) {
      if (idProductCart(state, action))
        idProductCart(state, action).amount += 1;

      if (idProductDetail(state, action))
        idProductDetail(state, action).amount += 1;
    },

    decreaseAmoutProduct(state, action) {
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

    addToProductDetail(state, action) {
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

    removeProductCart(state, action) {
      state.productCart = state.productCart.filter(
        (item) => item.id !== action.payload.id
      );
    },

    removeAllProductCart(state) {
      state.productCart = [];
    },

    filterProductName(state, action) {
      state.searchProduct = state.product.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    filterProductPrice(state, action) {
      state.searchProduct = state.product.filter(
        (item) =>
          item.price >= action.payload[0] && item.price <= action.payload[1]
      );
    },
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
