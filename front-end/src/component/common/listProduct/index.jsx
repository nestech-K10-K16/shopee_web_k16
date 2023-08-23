import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TYPE_REDUX } from "constants/common";
import { useDispatch, useSelector } from "react-redux";
import { PATHNAME_LIST } from "router/router";

const ListProduct = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCartOnClick = (id) => {
    toast.success("Has been added to cart");
    dispatch({
      type: TYPE_REDUX.ADD_PRODUCT_CART_FROM_PRODUCT,
      payload: id,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {product?.map((item) => {
        return (
          <div id="product-style" key={item.id}>
            <div className="product-style__image">
              <Link
                to={PATHNAME_LIST.PRODUCT}
                onClick={() =>
                  dispatch({
                    type: TYPE_REDUX.ADD_PRODUCT_DETAIL,
                    payload: item,
                  })
                }
              >
                <img src={item.src} alt="" />
              </Link>
              <button
                className="body-large"
                onClick={() => addToCartOnClick(item)}
              >
                Add to cart
              </button>
            </div>

            <p className="heading-03 mb-1">{item.name}</p>
            <p className="heading-04 text-beaver">$ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListProduct;
