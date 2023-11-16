import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceSelector, userSliceSelector } from "redux/selector";
import { Button, Input, ProductShoppingCart, Select } from "component/common";
import { PATHNAME_LIST } from "router/router";
import { TYPE_BUTTON } from "constants/common";
import { deleteByIdUserCart } from "redux/createAsyncThunk/cartThunk";

const ShoppingCart = () => {
  const { userToken } = useSelector(userSliceSelector);
  const { cartByIdUser, totalMoneyCart } = useSelector(cartSliceSelector);
  const dispatch = useDispatch();

  return (
    <section id="cart">
      <div className="cart__content">
        <p className="heading-01 text-center mb-12">Shopping Cart</p>

        <div className="flex justify-between">
          <div className="cart__content__left-side w-[33rem]">
            <div className="cart__content__left-side__heading flex justify-between mb-6">
              <p className="heading-04 text-dark-silver">
                {userToken.data ? cartByIdUser.length : 0} items
              </p>

              <div className="flex">
                <p className="heading-05 mr-2">Delete all</p>
                <button
                  className="bg-body border-0"
                  onClick={() => dispatch(deleteByIdUserCart())}
                >
                  <FontAwesomeIcon icon="fa-solid fa-xmark" size="xl" />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <ProductShoppingCart />
            </div>

            <div className="flex justify-end mb-12">
              <Button
                id="button"
                className="style-02 body-large text-center w-32 "
                typeButton={TYPE_BUTTON.LINK}
                to={PATHNAME_LIST.SHOP}
              >
                UPDATE CART
              </Button>
            </div>

            <div className="flex items-center">
              <Input
                id="input"
                className="body-small w-full mr-6"
                placeholder="Coupon Code"
              ></Input>
              <Button
                id="button"
                className="style-01 body-large text-center w-[13rem]"
                typeButton={TYPE_BUTTON.BUTTON}
              >
                APPLY COUPON
              </Button>
            </div>
          </div>

          <div className="cart__content__right-side w-[35rem]">
            <p className="heading-02 mb-6">Cart totals</p>

            <div className="flex justify-between">
              <div>
                <p className="heading-05 mb-6">SUBTOTAL</p>
                <p className="heading-05">SHIPPING</p>
              </div>

              <div className="flex flex-col w-[24rem]">
                <p className="heading-05 text-dark_silver mb-6">$ 65,00</p>
                <p className="heading-05 text-dark_silver mb-12">
                  Shipping costs will be calculated once you have provided
                  address.
                </p>

                <div className="mb-12">
                  <p>CALCULATE SHIPPING</p>
                  <Select className="select-secondary w-full">
                    <option value="">SELECT A COUNTRY</option>
                  </Select>
                  <Select className="select-secondary w-full">
                    <option value="">CITY</option>
                  </Select>
                  <Select className="select-secondary w-full">
                    <option value="">POST CODE / ZIP</option>
                  </Select>
                </div>

                <Button
                  id="button"
                  className="style-02 text-center mb-12"
                  typeButton={TYPE_BUTTON.BUTTON}
                >
                  UPDATE TOTALS
                </Button>

                <div className="border border-bright_gray mb-12"></div>

                <div className="flex justify-between mb-8">
                  <p className="body-large">TOTAL</p>
                  <p className="body-large">
                    $ {userToken.data ? totalMoneyCart : 0}
                  </p>
                </div>

                <Button
                  id="button"
                  className="style-01 body-large text-center"
                  typeButton={TYPE_BUTTON.LINK}
                  to={PATHNAME_LIST.CHECK_OUT}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
