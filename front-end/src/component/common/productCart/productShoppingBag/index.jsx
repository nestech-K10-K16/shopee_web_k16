import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  cartSliceSelector,
  productSliceSelector,
  userSliceSelector,
} from "redux/selector";
import { deleteCart } from "redux/createAsyncThunk/cartThunk";
import { addToProductDetail } from "redux/reducers/productSlice";
import { PATHNAME_LIST } from "router/router";
import { convertBufferToBase64 } from "utils/common";
import { InputAmountArray } from "component/common";

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
    <div className="flex flex-col gap-y-6">
      {userToken.data &&
        cartByIdUser?.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <Link
                className="mr-3"
                to={PATHNAME_LIST.PRODUCT}
                onClick={() => dispatch(addToProductDetail(item))}
              >
                {getByIdProduct(item.IdProduct)?.Image && (
                  <img
                    src={convertBufferToBase64(
                      getByIdProduct(item.IdProduct)?.Image
                    )}
                    alt=""
                  />
                )}
              </Link>

              <div className="flex flex-col justify-between mr-5">
                <div className="w-44">
                  <p>{getByIdProduct(item.IdProduct)?.Name}</p>
                  <p className="text-dark-silver">Black / Medium</p>
                  <p className="text-beaver">
                    $ {getByIdProduct(item.IdProduct)?.Price}
                  </p>
                </div>

                <div className="flex items-center w-8">
                  <p className="heading-05 mr-4">QTY:</p>

                  <InputAmountArray
                    className="input-amount-02"
                    idProduct={item.IdProduct}
                    amountProduct={item.Amount}
                  />
                </div>
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
          );
        })}
    </div>
  );
};

export default memo(ProductShoppingCart);
