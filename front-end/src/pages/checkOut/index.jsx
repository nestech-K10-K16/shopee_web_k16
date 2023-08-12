import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { PATHNAME_LIST } from "router/router";
import { Button, Input, Select } from "component/common";

const CheckOut = () => {
  return (
    <section id="check-out">
      <div className="check-out__content">
        <p className="heading-01 text-center">Checkout</p>

        <div className="check-out__content__title flex justify-start mb-16">
          <div className="heading-05">
            <div className="mb-4">
              <span className="text-dark_silver">Returning customer? </span>
              <span>
                <Link
                  className="hover:text-beaver"
                  to={PATHNAME_LIST.MY_ACCOUNT}
                >
                  Click here to login
                </Link>
              </span>
            </div>

            <div className="mb-4">
              <span className="text-dark_silver">Have a coupon? </span>
              <span>
                <Link className="hover:text-beaver">
                  Click here to enter your code
                </Link>
              </span>
            </div>

            <div className="border border-bright_gray p-6">
              <p className="text-dark_silver mb-8">
                If you have a coupon code, please apply it below.
              </p>

              <div className="flex">
                <Input
                  className="body-small w-[21rem] mr-6"
                  placeholder="Coupon Code"
                ></Input>
                <Button className="body-large rounded-md">APPLY COUPON</Button>
              </div>
            </div>
          </div>

          <div className="check-out__content__right-side"></div>
        </div>

        <div className="check-out__content__bill flex justify-between">
          <div className="check-out__content__bill__right-side heading-05 w-[35rem]">
            <p className="heading-01 mb-6">Billing Details</p>

            <form className="flex flex-col gap-y-4">
              <div className="flex">
                <Input
                  className="w-full mr-4"
                  placeholder="First name *"
                ></Input>
                <Input className="w-full" placeholder="last name *"></Input>
              </div>

              <Input className="w-full" placeholder="Company Name"></Input>
              <Select className="select-secondary w-full ">
                <option value="">Country *</option>
              </Select>
              <Input className="w-full" placeholder="Street Address *"></Input>
              <Input className="w-full" placeholder="Postcode / ZIP *"></Input>
              <Input className="w-full" placeholder="Town / City *"></Input>
              <Input className="w-full" placeholder="Phone *"></Input>
              <Input className="w-full" placeholder="Email *"></Input>

              <span className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Create an acoount?
              </span>

              <span className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Ship to a different address?
              </span>

              <Input className="w-full" placeholder="Order notes"></Input>
            </form>
          </div>

          <div className="check-out__content__bill__left-side w-[35rem]">
            <p className="heading-01">YOUR ORDER</p>

            <div className="heading-05 flex flex-col gap-y-4 bg-bright_gray p-8">
              <div className="flex justify-between">
                <p>PRODUCT</p>
                <p>TOTAL</p>
              </div>

              <div className="border border-light_sivler"></div>

              <div className="flex justify-between text-dark_silver">
                <p>Lira Earrings</p>
                <p>$64</p>
              </div>

              <div className="flex justify-between text-dark_silver">
                <p>Ollie Earrings</p>
                <p>$10</p>
              </div>

              <div className="flex justify-between text-dark_silver">
                <p>Kaede Hair Pin</p>
                <p>$10</p>
              </div>

              <div className="border border-light_sivler"></div>

              <div className="flex justify-between">
                <p>SUBTOTAL</p>
                <p className="text-dark_silver">$85</p>
              </div>

              <div className="border border-light_sivler"></div>

              <div className="flex justify-between">
                <p>SHIPPING</p>
                <p className="text-dark_silver">Free shipping</p>
              </div>

              <div className="border border-light_sivler"></div>

              <div className="flex justify-between">
                <p>TOTAL</p>
                <p>$85</p>
              </div>

              <div className="flex flex-col gap-y-4 mb-4">
                <span className="flex item-center">
                  <input className="mr-2" name="pay" type="radio" />
                  Direct bank transfer
                </span>

                <p className="body-small text-dark_silver">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account
                </p>

                <span className="flex item-center">
                  <input className="mr-2" name="pay" type="radio" />
                  Check payments
                </span>

                <span className="flex item-center">
                  <input className="mr-2" name="pay" type="radio" />
                  Cash on delivery
                </span>

                <span className="flex item-center">
                  <input className="mr-2" name="pay" type="radio" />
                  PayPal
                </span>
              </div>

              <Button className="text-center">PLACE ORDER</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
