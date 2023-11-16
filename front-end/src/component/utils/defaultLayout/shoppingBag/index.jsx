import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Button, ProductShoppingBag } from "component/common";
import { TYPE_BUTTON } from "constants/common";
import { PATHNAME_LIST } from "router/router";
import { cartSliceSelector, userSliceSelector } from "redux/selector";
import { deleteByIdUserCart } from "redux/createAsyncThunk/cartThunk";

const ShoppingBag = (props) => {
  const { className, backOnClick, viewCartOnClick } = props;
  const { userToken } = useSelector(userSliceSelector);
  const { cartByIdUser, totalMoneyCart } = useSelector(cartSliceSelector);
  const dispatch = useDispatch();

  return (
    <div id="shopping-bag" className={className}>
      <div className="w-[28rem]">
        <div className="shopping-bag__content px-[5vh] py-[2vh]">
          <div className="flex justify-end">
            <button className="bg-body border-0" onClick={backOnClick}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="xl" />
            </button>
          </div>

          <p className="heading-05 mb-4">Shopping bag</p>
          <div className="flex justify-between items-center mb-6">
            <p className="heading-05 text-dark-silver">
              {userToken.data ? cartByIdUser.length : 0} Items
            </p>
            <div className="flex">
              <p className="heading-05 mr-2">Delete all</p>
              <button
                className="bg-body border-0"
                onClick={() => dispatch(deleteByIdUserCart())}
              >
                <FontAwesomeIcon icon="fa-solid fa-close" size="xl" />
              </button>
            </div>
          </div>

          <div className="shopping-bag__content__product mb-[2.4rem]">
            <ProductShoppingBag />
          </div>
        </div>

        <div className="border border-bright-gray mb-6"></div>

        <div className="shopping-bag__total-money px-[5vh] pb-[5vh]">
          <div className="flex justify-between mb-4">
            <p className="heading-05">
              Subtotal ({userToken.data ? cartByIdUser.length : 0} items)
            </p>

            <p className="heading-05">
              $ {userToken.data ? totalMoneyCart : 0}
            </p>
          </div>

          <div className="flex">
            <Button
              id="button"
              className="style-02 body-large text-center w-full"
              typeButton={TYPE_BUTTON.LINK}
              to={PATHNAME_LIST.CART}
              onClick={viewCartOnClick}
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
