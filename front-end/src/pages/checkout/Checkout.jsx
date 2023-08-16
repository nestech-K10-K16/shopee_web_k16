import React from "react";
import { DefaultLayout } from "components";
import "./index.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__checkout">
          <div className="Shoppe__checkout-container">
            <h1>Checkout</h1>
            <h2>
              <span>Returning customer? </span>Click here to login
            </h2>
            <h3>
              <span>Have a coupon?</span> Click here to enter your code
            </h3>
            <div className="code">
              <h4>If you have a coupon code, please apply it below.</h4>
              <div className="coupon">
                <p>Coupon Code</p>
                <button className="btn-black">APPLY COUPON</button>
              </div>
            </div>
            <div className="details__order-text">
              <div className="details-input">
                <h2>Billing Details</h2>
                <div className="first-last">
                  <input
                    type="text"
                    className="zero-one"
                    placeholder="First Name*"
                  />
                  <input
                    type="text"
                    className="zero-one"
                    placeholder="last name *"
                  />
                </div>
                <input
                  type="text"
                  className="zero-two"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  className="zero-two"
                  placeholder="Country *"
                />
                <input
                  type="text"
                  className="zero-two"
                  placeholder="Street Address *"
                />
                <input
                  type="text"
                  className="zero-two"
                  placeholder="Postcode / ZIP *"
                />
                <input
                  type="text"
                  className="zero-two"
                  placeholder="Town / City *"
                />
                <input
                  type="phone"
                  className="zero-two"
                  placeholder="Phone *"
                />
                <input
                  type="email"
                  className="zero-two"
                  placeholder="Email *"
                />

                <div className="remember">
                  <input className="checkbox" type="checkbox" />
                  <label>Create an acoount?</label>
                </div>
                <div className="remember-zero">
                  <input className="checkbox" type="checkbox" />
                  <label>Ship to a different address?</label>
                </div>
                <input
                  type="email"
                  className="zero-two"
                  placeholder="Order notes *"
                />
              </div>
              <div className="order-button">
                <h2>YOUR ORDER</h2>
                <div className="bg-button">
                  <div className="product">
                    <h2>PRODUCT</h2>
                    <h2>TOTAL</h2>
                  </div>
                  <div className="Lira">
                    <h3>Lira Earrings </h3>
                    <h3>$64</h3>
                  </div>
                  <div className="Lira">
                    <h3>Ollie Earrings</h3>
                    <h3>$10</h3>
                  </div>
                  <div className="Hair">
                    <h3>Kaede Hair Pin </h3>
                    <h3>$10</h3>
                  </div>
                  <div className="sub-ship">
                    <h3>SUBTOTAL </h3>
                    <h3>$85</h3>
                  </div>
                  <div className="sub-ship">
                    <h3>SHIPPING </h3>
                    <h3>Free shipping</h3>
                  </div>
                  <div className="money-total">
                    <h4>TOTAL </h4>
                    <h4>$85</h4>
                  </div>
                  <label class="container">
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark">Direct bank transfer</span>
                  </label>
                  <p>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account
                  </p>
                  <div className="label">
                    <label class="container-01">
                      <input type="radio" name="radio" />
                      <span className="checkmark">Direct bank transfer</span>
                    </label>
                    <label class="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark">Direct bank transfer</span>
                    </label>
                    <label class="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark">Direct bank transfer</span>
                    </label>
                  </div>
                  <Link to="/order">
                    <button className="btn-black">PLACE ORDER</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Checkout;
