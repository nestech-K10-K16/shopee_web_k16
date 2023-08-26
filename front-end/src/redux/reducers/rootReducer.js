import {
  IMG_PRODUCT_01,
  IMG_PRODUCT_02,
  IMG_PRODUCT_03,
  IMG_PRODUCT_04,
  IMG_PRODUCT_05,
  IMG_PRODUCT_06,
} from "assets";
import { TYPE_REDUX } from "constants/common";
import { toast } from "react-toastify";

const initState = {
  product: [
    {
      id: "1",
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
      name: "Kaede Hair Pin Set Of 3 ",
      price: 30,
      src: IMG_PRODUCT_03,
    },
    {
      id: 4,
      name: "Hair Pin Set of 3",
      price: 30,
      src: IMG_PRODUCT_04,
    },
    {
      id: 5,
      name: "Plaine Necklace",
      price: 19,
      src: IMG_PRODUCT_05,
    },
    {
      id: 6,
      name: "Yuki Hair Pin Set of 3",
      price: 20,
      src: IMG_PRODUCT_06,
    },
  ],
  productDetail: [],
  productCart: [],
  searchProduct: [],
};

const rootReducer = (state = initState, action) => {
  const { product, productDetail, productCart } = state;

  const idProduct = product.find((item) => item === action.payload);
  const idProductDetail = productDetail.find((item) => item === action.payload);
  const idProductCart = productCart.find((item) => item === action.payload);

  switch (action.type) {
    case TYPE_REDUX.ADD_PRODUCT_CART:
      if (productCart.find((item) => item.name === action.payload.name)) {
        toast.info("You already have this product in your cart");
        return {
          ...state,
        };
      } else {
        toast.success("You have successfully added the product to your cart");
        if (idProduct) {
          return {
            ...state,
            productCart: [
              ...state.productCart,
              {
                name: idProduct.name,
                price: idProduct.price,
                color: "Black / Medium",
                src: idProduct.src,
                amount: 1,
              },
            ],
          };
        }
        if (idProductDetail) {
          return {
            ...state,
            productCart: [
              ...state.productCart,
              {
                name: idProductDetail.name,
                price: idProductDetail.price,
                color: "Black / Medium",
                src: idProductDetail.src,
                amount: idProductDetail.amount,
              },
            ],
          };
        }
      }
      break;

    case TYPE_REDUX.INCREASE_AMOUNT_PRODUCT_CART:
      return {
        ...state,
        productCart: productCart.map((item) => {
          if (item.name === action.payload.name) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
        productDetail: productDetail.map((item) => {
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
        productDetail: productDetail.map((item) => {
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

    case TYPE_REDUX.DELETE_ALL_PRODUCT_CART:
      return {
        ...state,
        productCart: [],
      };

    case TYPE_REDUX.ADD_PRODUCT_DETAIL:
      if (idProduct) {
        return {
          ...state,
          productDetail: [
            {
              name: idProduct.name,
              price: idProduct.price,
              src: idProduct.src,
              amount: 1,
            },
          ],
        };
      }
      if (idProductCart) {
        return {
          ...state,
          productDetail: [action.payload],
        };
      }
      break;

    case TYPE_REDUX.SEARCH_PRODUCT:
      console.log(action.payload);
      if (product.find((item) => item.id === action.payload)) {
        return {
          ...state,
          product: [
            ...state.product,
            product.filter((item) => item.id === action),
          ],
        };
      } else return { ...state };

    default:
      return state;
  }
};

export default rootReducer;
