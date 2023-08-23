import React from "react";
import "./index.scss";
import { AmountInput, Button, Input, Select } from "component/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { PATHNAME_LIST } from "router/router";
import { connect } from "react-redux";
import { TYPE_REDUX } from "constants/common";

const Cart = (props) => {
  const { productCart, deleteProductCart } = props;

  const Items = () => {
    return (
      <div className="flex flex-col gap-y-6">
        {productCart?.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex mb-4">
                <img className="w-32 mr-8" src={item.src} alt="" />

                <div className="mr-16">
                  <p className="heading-03 mb-4">{item.name}</p>
                  <p className="heading-05 text-dark_silver">{item.color}</p>
                  <p className="heading-05 text-beaver">$ {item.price}</p>
                </div>

                <div>
                  <AmountInput className="w-[6rem] h-12 mr-6" />
                </div>

                <div>
                  <button
                    className="bg-body border-0"
                    onClick={() => deleteProductCart(item)}
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              </div>

              <div className="border border-bright_gray" />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="cart">
      <div className="cart__content">
        <p className="heading-01 text-center mb-12">Shopping Cart</p>

        <div className="flex justify-between">
          <div className="cart__content__left-side w-[29.5rem]">
            <div className="mb-8">
              <p className="heading-04 mb-6">{productCart.length} item</p>
              <Items />
            </div>

            <div>
              <div className="flex justify-end mb-12">
                <Button className="button--secondary body-large">
                  UPDATE CART
                </Button>
              </div>

              <div className="flex items-center">
                <Input
                  className="body-small w-full mr-6"
                  placeholder="Coupon Code"
                ></Input>
                <Button className="body-large text-center w-[13rem]">
                  APPLY COUPON
                </Button>
              </div>
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

                <Button className="button--secondary text-center mb-12">
                  UPDATE TOTALS
                </Button>

                <div className="border border-bright_gray mb-12"></div>

                <div className="flex justify-between mb-8">
                  <p className="body-large">TOTAL</p>
                  <p className="body-large">
                    ${" "}
                    {productCart.reduce(
                      (item, index) =>
                        (item = item + index.price * index.amount),
                      0
                    )}
                  </p>
                </div>

                <Button
                  className="body-large text-center"
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

const mapStateToProps = (state) => {
  const { productCart } = state;
  return {
    productCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductCart: (id) =>
      dispatch({ type: TYPE_REDUX.DELETE_PRODUCT_CART, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
