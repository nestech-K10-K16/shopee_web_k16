import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";
import { PATHNAME_LIST } from "router/router";

const initState = {
  product: [
    {
      name: "Lira Earrings",
      price: 20,
      src: IMG_PRODUCT_01,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hal Earrings",
      price: 25,
      src: IMG_PRODUCT_02,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Kaede Hair Pin Set Of 3 ",
      price: 30,
      src: IMG_PRODUCT_03,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Hair Pin Set of 3",
      price: 30,
      src: IMG_PRODUCT_04,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Plaine Necklace",
      price: 19,
      src: IMG_PRODUCT_05,
      to: PATHNAME_LIST.PRODUCT,
    },
    {
      name: "Yuki Hair Pin Set of 3",
      price: 20,
      src: IMG_PRODUCT_06,
      to: PATHNAME_LIST.PRODUCT,
    },
  ],

  productCart: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT_CART":
      return {
        ...state,
        productCart: state.productCart.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    case "ADD_PRODUCT_CART":
      const products = state.product.find(
        (item) => item.name === action.payload.name
      );

      const productCarts = {
        name: products.name,
        price: products.price,
        color: "Black / Medium",
        src: products.src,
        to: products.to,
      };
      return { ...state, productCart: [...state.productCart, productCarts] };
    default:
      return state;
  }
};

export default rootReducer;
