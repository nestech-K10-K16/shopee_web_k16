import React from "react";
import { DefaultLayout } from "components";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../configs/fontIcon";

const OrderPage = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__order">
          <div className="Shoppe__order-container">
            <div className="rectangle">
              <FontAwesomeIcon
                className="icon-circle"
                icon="fa-regular fa-circle-check"
              />
              <h3>We’ve received your order</h3>
            </div>
            <div className="order-section">
              <div className="order-details">
                <div className="main-title">
                  <h1 className="order">Order Details</h1>
                  <h1 className="black">ORDER NUMBER</h1>
                  <h1 className="gray">1879605573994</h1>
                  <h1 className="black">EMAIL</h1>
                  <h1 className="gray">Vitathemes@gmail.com</h1>
                  <h1 className="black">PAYMENT METHOD</h1>
                  <h1 className="gray">Mastercard*************7865</h1>
                  <h1 className="black">ORDER DATE</h1>
                  <h1 className="gray">October 8,2020</h1>
                </div>
                <div className="secondary-title">
                  <h2 className="black">DELIVERY OPTIONS</h2>
                  <h2 className="gray">Standard delivery</h2>
                  <h2 className="black">DELIVERY ADDRESS</h2>
                  <h2 className="gray">
                    Kristian holst 34 old street W1F 7NU london United Kingdom
                  </h2>
                  <h2 className="black">CONTACT NUMBER</h2>
                  <h2 className="gray">+44 8749790988</h2>
                </div>
              </div>
              <div className="order-summary">
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
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default OrderPage;
