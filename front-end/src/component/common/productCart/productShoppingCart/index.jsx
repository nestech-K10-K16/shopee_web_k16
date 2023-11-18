import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSliceSelector,
  productSliceSelector,
  userSliceSelector,
} from "redux/selector";
import { addToProductDetail } from "redux/reducers/productSlice";
import { PATHNAME_LIST } from "router/router";
import { InputAmountArray } from "component/common";

import { convertBufferToBase64 } from "utils/common";
import { deleteCart } from "redux/createAsyncThunk/cartThunk";

const ProductShoppingCart = () => {
  const { userToken } = useSelector(userSliceSelector);
  const { productList } = useSelector(productSliceSelector);
  const { cartByIdUser } = useSelector(cartSliceSelector);
  const dispatch = useDispatch();

  const getByIdProduct = (id) => {
    const product = productList.find((value) => value.IdProduct === id);
    return product;
  };

  return (
    <div className="product-shopping-cart flex flex-col gap-y-6">
      {userToken.data &&
        cartByIdUser?.map((item) => {
          return (
            <div key={item.IdProduct}>
              <div className="flex mb-4">
                <Link
                  className="mr-4"
                  to={PATHNAME_LIST.PRODUCT}
                  onClick={() => dispatch(addToProductDetail(item))}
                >
                  {getByIdProduct(item.IdProduct)?.Image && (
                    <img
                      className="w-[10rem]"
                      src={convertBufferToBase64(
                        getByIdProduct(item.IdProduct)?.Image
                      )}
                      alt=""
                    />
                  )}
                </Link>

                <div className="w-[12.5rem] mr-6">
                  <p className="heading-03 mb-4">
                    {getByIdProduct(item.IdProduct)?.Name}
                  </p>
                  <p className="heading-05 text-dark-silver">Black / Medium</p>
                  <p className="heading-05 text-beaver">
                    $ {getByIdProduct(item.IdProduct)?.Price}
                  </p>
                </div>

                <div className="mr-4">
                  <InputAmountArray
                    className="input-amount-01"
                    idProduct={item.IdProduct}
                    amountProduct={item.Amount}
                  />
                </div>

                <div>
                  <button
                    className="bg-body border-0"
                    onClick={() => dispatch(deleteCart(item.IdProduct))}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>

              <div className="border border-bright-gray" />
            </div>
          );
        })}
    </div>
  );
};

export default ProductShoppingCart;
