import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "component/common";
import { PATHNAME_LIST } from "router/router";
import { Link } from "react-router-dom";
import { TYPE_BUTTON, TYPE_REDUX } from "constants/common";
import { useDispatch, useSelector } from "react-redux";

const ShoppingBag = (props) => {
  const productCart = useSelector((state) => state.productCart);
  const dispatch = useDispatch();

  const Items = () => {
    return (
      <div className="flex flex-col gap-y-6">
        {productCart?.map((item) => {
          return (
            <div className="flex" key={item.id}>
              <Link
                className="mr-3"
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

              <div className="flex flex-col justify-between mr-5">
                <div className="w-44">
                  <p>{item.name}</p>
                  <p className="text-dark_silver">{item.color}</p>
                  <p className="text-beaver">$ {item.price}</p>
                </div>

                <div className="heading-05 flex justify-between w-28">
                  <p>QTY:</p>
                  <button
                    onClick={() =>
                      dispatch({
                        type: TYPE_REDUX.DECREASE_AMOUNT_PRODUCT_CART,
                        payload: item,
                      })
                    }
                  >
                    -
                  </button>
                  {item.amount}
                  <button
                    onClick={() =>
                      dispatch({
                        type: TYPE_REDUX.INCREASE_AMOUNT_PRODUCT_CART,
                        payload: item,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="bg-body border-0"
                  onClick={() =>
                    dispatch({
                      type: TYPE_REDUX.DELETE_PRODUCT_CART,
                      payload: item,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="shopping-bag" className={props.className}>
      <div className="w-[28rem]">
        <div className="shopping-bag__content px-[5vh] py-[2vh]">
          <div className="flex justify-end">
            <button className="bg-body border-0" onClick={props.backOnClick}>
              <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </button>
          </div>

          <p className="heading-05 mb-4">Shopping bag</p>
          <div className="flex justify-between items-center mb-6">
            <p className="heading-05 ">{productCart.length} Items</p>
            <div className="flex">
              <p className="heading-05 mr-2">Delete all</p>
              <button
                className="bg-body border-0"
                onClick={() =>
                  dispatch({
                    type: TYPE_REDUX.DELETE_ALL_PRODUCT_CART,
                    payload: productCart.find((item) => item),
                  })
                }
              >
                <FontAwesomeIcon icon={faClose} size="xl" />
              </button>
            </div>
          </div>

          <div className="shopping-bag__content__product mb-[2.4rem]">
            <Items />
          </div>
        </div>

        <div className="border border-bright_gray mb-6"></div>

        <div className="shopping-bag__total-money px-[5vh] pb-[5vh]">
          <div className="flex justify-between mb-4">
            <p className="heading-05">Subtotal ({productCart.length} items)</p>

            <p className="heading-05">
              ${" "}
              {productCart.reduce(
                (item, index) => (item = item + index.price * index.amount),
                0
              )}
            </p>
          </div>

          <div className="flex">
            <Button
              className="white text-center w-full"
              type={TYPE_BUTTON.LINK}
              to={PATHNAME_LIST.CART}
              onClick={props.viewCartOnClick}
            >
              VIEW CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
