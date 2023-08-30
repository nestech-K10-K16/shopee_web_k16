import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { TYPE_REDUX } from "constants/common";
import { useDispatch } from "react-redux";
import { PATHNAME_LIST } from "router/router";

const ListProduct = (props) => {
  const { map } = props;
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-4">
      {map?.map((item) => {
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
                onClick={() =>
                  dispatch({
                    type: TYPE_REDUX.ADD_PRODUCT_CART,
                    payload: item,
                  })
                }
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
