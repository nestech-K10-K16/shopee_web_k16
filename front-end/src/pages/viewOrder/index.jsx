import React from "react";
import "./index.css";

const ViewOrder = () => {
  return (
    <section id="view-order">
      <div className="view-order__content d-flex justify-content-between">
        <div className="view-order__content__left-side">
          <p className="heading-02 mb-5">Order Details</p>

          <div className="view-order__content__left-side__order-details d-flex justify-content-between">
            <div>
              <div className="heading-05 mb-5">
                <p>ORDER NUMBER</p>
                <p className="text-dark-silver">1879605573994</p>
              </div>

              <div className="heading-05 mb-5">
                <p>EMAIL</p>
                <p className="text-dark-silver">Vitathemes@gmail.com</p>
              </div>

              <div className="heading-05 mb-5">
                <p>PAYMENT METHOD</p>
                <p className="text-dark-silver">Mastercard*************7865</p>
              </div>

              <div className="heading-05">
                <p>ORDER DATE</p>
                <p className="text-dark-silver">October 8,2020</p>
              </div>
            </div>

            <div>
              <div className="heading-05 mb-5">
                <p>DELIVERY OPTIONS</p>
                <p className="text-dark-silver">Standard delivery</p>
              </div>

              <div className="heading-05 mb-5">
                <p>DELIVERY ADDRESS</p>
                <p className="text-dark-silver">
                  Kristian holst 34 old street W1F 7NU london United Kingdom
                </p>
              </div>

              <div className="heading-05 mb-5">
                <p>CONTACT NUMBER </p>
                <p className="text-dark-silver">+44 8749790988</p>
              </div>
            </div>
          </div>
        </div>

        <div className="view-order__content__right-side">
          <p className="heading-02">ORDER Summary</p>

          <div className="view-order__content__right-side__order-summary d-flex justify-content-between bg-bright-gray p-5">
            <div>
              <p>PRODUCT</p>
              <p>Lira Earrings </p>
              <p>Ollie Earrings</p>
              <p>Kaede Hair Pin</p>
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
              <p>TOTAL</p>
            </div>

            <div>
              <p>TOTAL</p>
              <p>$64</p>
              <p>$10</p>
              <p>$10</p>
              <p>$85</p>
              <p>Free shipping</p>
              <p>$85</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewOrder;
