import React from "react";
import "./index.css";

const ViewOrder = () => {
  return (
    <section id="view-order">
      <div className="view-order__content d-flex ">
        <div className="view-order__content__left-side me-5">
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

          <table className="table ">
            <thead>
              <tr>
                <th className="heading-05">PRODUCT</th>
                <th className="heading-05">TOTAL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lira Earrings</td>
                <td>$64 </td>
              </tr>

              <tr>
                <td>Ollie Earrings</td>
                <td>$10 </td>
              </tr>

              <tr>
                <td>Lira Earrings</td>
                <td>$10 </td>
              </tr>

              <tr>
                <td>SUBTOTAL</td>
                <td>$85</td>
              </tr>

              <tr>
                <td>SHIPPING</td>
                <td>Free shipping</td>
              </tr>

              <tr>
                <td>TOTAL</td>
                <td>$85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ViewOrder;
