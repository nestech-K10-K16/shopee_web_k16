import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "components/common/oder/OrderSummary";
import "./index.scss";

const Checkout = () => {
  return (
    <div className="Shoppe__checkout">
      <div className="Shoppe__checkout-container">
        <h1>Checkout</h1>
        <h2>
          <span>Returning customer? </span>
          <Link to="/user">Click here to login</Link>
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
            <input type="text" className="zero-two" placeholder="Country *" />
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
            <input type="phone" className="zero-two" placeholder="Phone *" />
            <input type="email" className="zero-two" placeholder="Email *" />

            <div className="remember">
              <input className="checkbox" type="checkbox" />
              <label>Create an acoount?</label>
            </div>
            <div className="remember-zero">
              <input className="checkbox" type="checkbox" />
              <label>Ship to a different address?</label>
            </div>
            <input
              type="text"
              className="zero-two"
              placeholder="Order notes *"
            />
          </div>
          <div className="order-button">
            <h2>YOUR ORDER</h2>
            <div className="bg-button">
              <OrderSummary />
              <label class="container">
                <input type="radio" checked="checked" name="radio" />
                <span className="checkmark">Direct bank transfer</span>
              </label>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account
              </p>
              <div className="label">
                <label class="container">
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
  );
};

export default Checkout;
