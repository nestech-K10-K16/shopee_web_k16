import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";
import { TYPE_REDUX } from "constants/common";

const initState = {
  product: [
    {
      name: "Lira Earrings",
      price: 20,
      src: IMG_PRODUCT_01,
    },
    {
      name: "Hal Earrings",
      price: 25,
      src: IMG_PRODUCT_02,
    },
    {
      name: "Kaede Hair Pin Set Of 3 ",
      price: 30,
      src: IMG_PRODUCT_03,
    },
    {
      name: "Hair Pin Set of 3",
      price: 30,
      src: IMG_PRODUCT_04,
    },
    {
      name: "Plaine Necklace",
      price: 19,
      src: IMG_PRODUCT_05,
    },
    {
      name: "Yuki Hair Pin Set of 3",
      price: 20,
      src: IMG_PRODUCT_06,
    },
  ],
  productDetail: [],
  productCart: [],
};

const rootReducer = (state = initState, action) => {
  const { product, productDetail, productCart } = state;
  const idProduct = product.find((item) => item === action.payload);
  const idProductDetails = productDetail.find(
    (item) => item === action.payload
  );

  switch (action.type) {
    case TYPE_REDUX.ADD_PRODUCT_CART_FROM_PRODUCT:
      const productCarts = {
        name: idProduct.name,
        price: idProduct.price,
        color: "Black / Medium",
        src: idProduct.src,
        amount: 1,
      };

      if (productCart.find((item) => item.name === action.payload.name)) {
        return {
          ...state,
          productCart: productCart.map((item) => {
            if (item.name === action.payload.name) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          productCart: [...state.productCart, productCarts],
        };
      }

    case TYPE_REDUX.ADD_PRODUCT_CART_FROM_PRODUCT_DETAIL:
      const productCartFromProductDetail = {
        name: idProductDetails.name,
        price: idProductDetails.price,
        color: "Black / Medium",
        src: idProductDetails.src,
        amount: 1,
      };

      if (productCart.find((item) => item.name === action.payload.name)) {
        return {
          ...state,
          productCart: productCart.map((item) => {
            if (item.name === action.payload.name) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          productCart: [...state.productCart, productCartFromProductDetail],
        };
      }

    case TYPE_REDUX.INCREASE_AMOUNT_PRODUCT_CART:
      return {
        ...state,
        productCart: productCart.map((item) => {
          if (item.name === action.payload.name) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };

    case TYPE_REDUX.DECREASE_AMOUNT_PRODUCT_CART:
      return {
        ...state,
        productCart: productCart.map((item) => {
          if (item.name === action.payload.name) {
            if (item.amount >= 2) {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        }),
      };

    case TYPE_REDUX.DELETE_PRODUCT_CART:
      return {
        ...state,
        productCart: productCart.filter((item) => item !== action.payload),
      };

    case TYPE_REDUX.ADD_PRODUCT_DETAIL:
      const productDetails = {
        name: idProduct.name,
        price: idProduct.price,
        src: idProduct.src,
      };

      return {
        ...state,
        productDetail: [productDetails],
      };

    default:
      return state;
  }
};

export default rootReducer;
